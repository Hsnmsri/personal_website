
export default defineEventHandler(() => {
    const db = useDatabase()
    return db.prepare('SELECT * FROM projects ORDER BY sort_order ASC').all()
})
