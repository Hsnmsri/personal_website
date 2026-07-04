<script setup lang="ts">
import { Trash2, Mail } from '@lucide/vue';

definePageMeta({
    layout: 'admin',
    middleware: 'auth',
})

interface Message {
    id: number
    name: string
    email: string
    message: string
    created_at: string
}

const { data: messages, refresh } = useFetch<Message[]>('/api/admin/messages')

async function remove(id: number) {
    await $fetch(`/api/admin/messages/${id}`, { method: 'DELETE' })
    await refresh()
}

function formatDate(date: string) {
    return new Date(date).toLocaleString()
}
</script>

<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <h2 class="font-extrabold text-[24px]">Messages</h2>
            <span class="text-secondary text-sm">{{ messages?.length || 0 }} messages</span>
        </div>

        <div class="space-y-3">
            <div v-for="msg in messages" :key="msg.id" class="bg-white/3 border border-white/5 rounded-sm p-4">
                <div class="flex items-start justify-between gap-4">
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                            <h3 class="font-bold">{{ msg.name }}</h3>
                            <a :href="`mailto:${msg.email}`" class="flex items-center gap-1 text-primary text-sm hover:underline">
                                <Mail :size="14" />
                                {{ msg.email }}
                            </a>
                        </div>
                        <p class="text-secondary text-sm whitespace-pre-wrap">{{ msg.message }}</p>
                        <p class="text-white/30 text-xs mt-3">{{ formatDate(msg.created_at) }}</p>
                    </div>
                    <button class="p-2 hover:bg-red-500/20 rounded-sm transition-colors cursor-pointer flex-shrink-0" @click="remove(msg.id)">
                        <Trash2 :size="16" class="text-red-500" />
                    </button>
                </div>
            </div>

            <p v-if="messages && messages.length === 0" class="text-secondary text-center py-10">No messages yet.</p>
        </div>
    </div>
</template>
