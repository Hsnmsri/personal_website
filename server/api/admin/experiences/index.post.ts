
export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if (!body.title || !body.description) {
        throw createError({ statusCode: 400, message: 'Title and description are required' })
    }

    const db = useDatabase()
    const maxOrder = db.prepare('SELECT COALESCE(MAX(sort_order), -1) + 1 as next_order FROM experiences').get() as { next_order: number }

    db.prepare('INSERT INTO experiences (title, company, image, time_period, description, sort_order) VALUES (?, ?, ?, ?, ?, ?)').run(
        body.title.trim(),
        body.company || null,
        body.image || null,
        body.time_period || null,
        body.description.trim(),
        body.sort_order ?? maxOrder.next_order,
    )

    return { success: true }
})
