
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    const db = useDatabase()
    db.prepare('DELETE FROM projects WHERE id = ?').run(id)

    return { success: true }
})
