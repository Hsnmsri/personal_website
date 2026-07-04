
export default defineEventHandler(async (event) => {
    const identifier = getRequestIP(event) || 'unknown'
    const { allowed } = checkRateLimit(identifier)

    if (!allowed) {
        throw createError({
            statusCode: 429,
            message: 'Too many requests. Please try again later.'
        })
    }

    const body = await readBody(event)

    if (!body.name || !body.email || !body.message) {
        throw createError({
            statusCode: 400,
            message: 'All fields are required'
        })
    }

    if (body.name.length > 100 || body.email.length > 200 || body.message.length > 5000) {
        throw createError({
            statusCode: 400,
            message: 'Input exceeds maximum length'
        })
    }

    const db = useDatabase()
    const stmt = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)')
    stmt.run(body.name.trim(), body.email.trim(), body.message.trim())

    return { success: true }
})
