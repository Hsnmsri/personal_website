
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)

    if (!body.title || !body.description) {
        throw createError({ statusCode: 400, message: 'Title and description are required' })
    }

    const db = useDatabase()
    db.prepare('UPDATE experiences SET title = ?, company = ?, image = ?, time_period = ?, description = ?, sort_order = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(
        body.title.trim(),
        body.company || null,
        body.image || null,
        body.time_period || null,
        body.description.trim(),
        body.sort_order ?? 0,
        id,
    )

    return { success: true }
})
