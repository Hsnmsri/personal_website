
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)

    if (!body.title || !body.description) {
        throw createError({ statusCode: 400, message: 'Title and description are required' })
    }

    const db = useDatabase()
    db.prepare('UPDATE projects SET title = ?, description = ?, link = ?, image = ?, sort_order = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(
        body.title.trim(),
        body.description.trim(),
        body.link || null,
        body.image || null,
        body.sort_order ?? 0,
        id,
    )

    return { success: true }
})
