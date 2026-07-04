<script setup lang="ts">
definePageMeta({
    layout: 'admin',
    middleware: 'auth',
})

const { data: projects } = useFetch('/api/projects')
const { data: experiences } = useFetch('/api/experiences')
const { data: messages } = useFetch('/api/admin/messages')
</script>

<template>
    <div>
        <h2 class="font-extrabold text-[24px] mb-8">Dashboard</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="bg-white/3 border border-white/5 rounded-sm p-6">
                <p class="text-secondary text-sm mb-2">Projects</p>
                <p class="text-3xl font-extrabold text-primary">{{ projects?.length || 0 }}</p>
            </div>

            <div class="bg-white/3 border border-white/5 rounded-sm p-6">
                <p class="text-secondary text-sm mb-2">Experiences</p>
                <p class="text-3xl font-extrabold text-primary">{{ experiences?.length || 0 }}</p>
            </div>

            <div class="bg-white/3 border border-white/5 rounded-sm p-6">
                <p class="text-secondary text-sm mb-2">Messages</p>
                <p class="text-3xl font-extrabold text-primary">{{ messages?.length || 0 }}</p>
            </div>
        </div>
    </div>
</template>
