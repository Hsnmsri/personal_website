
export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if (!body.title || !body.description) {
        throw createError({ statusCode: 400, message: 'Title and description are required' })
    }

    const db = useDatabase()
    const maxOrder = db.prepare('SELECT COALESCE(MAX(sort_order), -1) + 1 as next_order FROM projects').get() as { next_order: number }

    db.prepare('INSERT INTO projects (title, description, link, image, sort_order) VALUES (?, ?, ?, ?, ?)').run(
        body.title.trim(),
        body.description.trim(),
        body.link || null,
        body.image || null,
        body.sort_order ?? maxOrder.next_order,
    )

    return { success: true }
})
