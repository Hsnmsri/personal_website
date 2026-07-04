export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    if (!body.current || !body.new) {
        throw createError({ statusCode: 400, message: 'Current and new password are required' })
    }

    if (body.new.length < 6) {
        throw createError({ statusCode: 400, message: 'New password must be at least 6 characters' })
    }

    const db = useDatabase()
    const row = db.prepare("SELECT value FROM settings WHERE key = 'admin_password'").get() as { value: string } | undefined

    if (!row || !verifyPassword(body.current, row.value)) {
        throw createError({ statusCode: 400, message: 'Current password is incorrect' })
    }

    const newHash = hashPassword(body.new)
    db.prepare("UPDATE settings SET value = ?, updated_at = CURRENT_TIMESTAMP WHERE key = 'admin_password'").run(newHash)

    return { success: true }
})
