<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: 'auth',
})

const current = ref('')
const newPassword = ref('')
const confirm = ref('')
const error = ref('')
const success = ref(false)
const loading = ref(false)

async function changePassword() {
    error.value = ''
    success.value = false

    if (newPassword.value !== confirm.value) {
        error.value = 'Passwords do not match'
        return
    }

    loading.value = true
    try {
        const res = await fetch('/api/admin/password', {
            method: 'PUT',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ current: current.value, new: newPassword.value }),
        })

        if (!res.ok) {
            const err = await res.json()
            throw new Error(err.message)
        }

        success.value = true
        current.value = ''
        newPassword.value = ''
        confirm.value = ''
    } catch (e: any) {
        error.value = e.message
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div>
        <h2 class="font-extrabold text-[24px] mb-8">Change Password</h2>

        <div class="space-y-4 max-w-md">
            <div class="flex flex-col gap-1.5">
                <label class="text-secondary text-sm">Current Password</label>
                <input v-model="current" type="password" class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors" />
            </div>

            <div class="flex flex-col gap-1.5">
                <label class="text-secondary text-sm">New Password</label>
                <input v-model="newPassword" type="password" class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors" />
            </div>

            <div class="flex flex-col gap-1.5">
                <label class="text-secondary text-sm">Confirm New Password</label>
                <input v-model="confirm" type="password" class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors" />
            </div>

            <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
            <p v-if="success" class="text-green-500 text-sm">Password changed successfully.</p>

            <BaseButton variant="white" class="cursor-pointer" :disabled="loading" @click="changePassword">
                {{ loading ? 'Updating...' : 'Change Password' }}
            </BaseButton>
        </div>
    </div>
</template>
