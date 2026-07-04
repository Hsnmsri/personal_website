
export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    if (!body.password) {
        throw createError({ statusCode: 400, message: 'Password is required' })
    }

    const db = useDatabase()
    const row = db.prepare("SELECT value FROM settings WHERE key = 'admin_password'").get() as { value: string } | undefined

    if (!row || !verifyPassword(body.password, row.value)) {
        throw createError({ statusCode: 401, message: 'Invalid password' })
    }

    const secretRow = db.prepare("SELECT value FROM settings WHERE key = 'auth_secret'").get() as { value: string }
    const token = createToken(secretRow.value)

    setCookie(event, 'admin_token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24,
        path: '/',
    })

    return { success: true }
})
