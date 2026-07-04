export default defineNuxtRouteMiddleware(async () => {
    try {
        const res = await fetch('/api/admin/check', { credentials: 'include' })
        const data = await res.json()
        if (!data?.authenticated) {
            return navigateTo('/admin/login')
        }
    } catch {
        return navigateTo('/admin/login')
    }
})
