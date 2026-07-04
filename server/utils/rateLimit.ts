interface RateLimitEntry {
    timestamps: number[]
}

const store = new Map<string, RateLimitEntry>()

const MAX_REQUESTS = 3
const WINDOW_MS = 15 * 60 * 1000

function cleanup() {
    const now = Date.now()
    for (const [key, entry] of store) {
        entry.timestamps = entry.timestamps.filter((t) => now - t < WINDOW_MS)
        if (entry.timestamps.length === 0) {
            store.delete(key)
        }
    }
}

export function checkRateLimit(identifier: string): { allowed: boolean; remaining: number } {
    cleanup()

    const now = Date.now()
    const entry = store.get(identifier)

    if (!entry) {
        store.set(identifier, { timestamps: [now] })
        return { allowed: true, remaining: MAX_REQUESTS - 1 }
    }

    entry.timestamps.push(now)

    if (entry.timestamps.length > MAX_REQUESTS) {
        entry.timestamps = entry.timestamps.filter((t) => now - t < WINDOW_MS)
    }

    const isAllowed = entry.timestamps.length <= MAX_REQUESTS
    const remaining = Math.max(0, MAX_REQUESTS - entry.timestamps.length)

    if (!isAllowed) {
        store.set(identifier, entry)
    }

    return { allowed: isAllowed, remaining }
}
