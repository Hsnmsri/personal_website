
export default defineEventHandler(() => {
    const db = useDatabase()
    return db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all()
})
