
export default defineEventHandler(() => {
    const db = useDatabase()
    return db.prepare('SELECT * FROM experiences ORDER BY sort_order ASC').all()
})
