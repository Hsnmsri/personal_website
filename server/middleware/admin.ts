export default defineEventHandler(async (event) => {
    if (!event.path.startsWith('/api/admin')) return
    if (event.path === '/api/admin/login') return

    const token = getCookie(event, 'admin_token')
    if (!token) {
        throw createError({ statusCode: 401, message: 'Unauthorized' })
    }

    const db = useDatabase()
    const row = db.prepare("SELECT value FROM settings WHERE key = 'auth_secret'").get() as { value: string } | undefined

    if (!row || !verifyToken(token, row.value)) {
        throw createError({ statusCode: 401, message: 'Unauthorized' })
    }
})
