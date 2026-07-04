
export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if (!body || typeof body !== 'object') {
        throw createError({ statusCode: 400, message: 'Invalid body' })
    }

    const db = useDatabase()

    for (const [key, value] of Object.entries(body)) {
        if (typeof value !== 'string') continue
        db.prepare('UPDATE settings SET value = ?, updated_at = CURRENT_TIMESTAMP WHERE key = ?').run(value, key)
    }

    return { success: true }
})
