<script setup lang="ts">
definePageMeta({
    layout: false,
})

const password = ref('')
const error = ref('')
const loading = ref(false)

async function handleLogin() {
    error.value = ''
    loading.value = true

    try {
        const res = await fetch('/api/admin/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: password.value }),
        })
        if (!res.ok) {
            const err = await res.json().catch(() => ({ message: 'Login failed' }))
            throw new Error(err.message)
        }
        navigateTo('/admin')
    } catch (e: any) {
        error.value = e?.message || 'Login failed'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="min-h-screen bg-dark text-white font-family-jetbrains flex items-center justify-center">
        <div class="w-full max-w-md px-6">
            <h1 class="font-extrabold text-2xl text-primary uppercase tracking-wider text-center mb-10">Admin Panel</h1>

            <form class="space-y-5" @submit.prevent="handleLogin">
                <BaseInput v-model="password" type="password" placeholder="Password" required />

                <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>

                <BaseButton variant="white" class="w-full cursor-pointer" :disabled="loading">
                    {{ loading ? 'Signing in...' : 'Sign In' }}
                </BaseButton>
            </form>
        </div>
    </div>
</template>
