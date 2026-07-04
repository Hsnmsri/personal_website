<script setup lang="ts">
import { LayoutDashboard, Settings, FolderKanban, Briefcase, MessageSquare, KeyRound, LogOut } from '@lucide/vue';

const route = useRoute()

const links = [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/settings', icon: Settings, label: 'Settings' },
    { to: '/admin/projects', icon: FolderKanban, label: 'Projects' },
    { to: '/admin/experiences', icon: Briefcase, label: 'Experiences' },
    { to: '/admin/messages', icon: MessageSquare, label: 'Messages' },
    { to: '/admin/password', icon: KeyRound, label: 'Password' },
]

async function logout() {
    await $fetch('/api/admin/logout', { method: 'POST' }).catch(() => {})
    navigateTo('/admin/login')
}
</script>

<template>
    <div class="min-h-screen bg-dark text-white font-family-jetbrains flex">
        <!-- SIDEBAR -->
        <aside class="w-64 bg-white/3 border-r border-white/5 flex flex-col flex-shrink-0">
            <div class="p-6 border-b border-white/5">
                <h1 class="font-extrabold text-lg text-primary uppercase tracking-wider">Admin</h1>
            </div>

            <nav class="flex-1 p-4 space-y-1">
                <NuxtLink
                    v-for="link in links"
                    :key="link.to"
                    :to="link.to"
                    class="flex items-center gap-3 px-3 py-2.5 rounded-sm text-secondary hover:text-white hover:bg-white/5 transition-colors"
                    :class="{ 'bg-white/5 text-white': route.path === link.to }"
                >
                    <component :is="link.icon" :size="18" />
                    <span class="text-[14px]">{{ link.label }}</span>
                </NuxtLink>
            </nav>

            <div class="p-4 border-t border-white/5">
                <button
                    class="flex items-center gap-3 px-3 py-2.5 w-full rounded-sm text-secondary hover:text-white hover:bg-white/5 transition-colors text-[14px] cursor-pointer"
                    @click="logout"
                >
                    <LogOut :size="18" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>

        <!-- CONTENT -->
        <main class="flex-1 overflow-y-auto">
            <div class="p-8">
                <slot />
            </div>
        </main>
    </div>
</template>
