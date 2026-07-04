
export default defineEventHandler(() => {
    const db = useDatabase()
    const rows = db.prepare('SELECT key, value FROM settings').all() as { key: string; value: string | null }[]

    const settings: Record<string, string | null> = {}
    for (const row of rows) {
        settings[row.key] = row.value
    }

    return settings
})
