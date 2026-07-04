<script setup lang="ts">
import { Plus, Pencil, Trash2 } from '@lucide/vue';

definePageMeta({
    layout: 'admin',
    middleware: 'auth',
})

interface Experience {
    id: number
    title: string
    company: string | null
    time_period: string | null
    description: string
}

const { data: experiences, refresh } = useFetch<Experience[]>('/api/experiences')
const showModal = ref(false)
const isNew = ref(true)
const editingId = ref<number | null>(null)
const saving = ref(false)

const form = reactive<Partial<Experience>>({
    title: '',
    company: '',
    time_period: '',
    description: '',
})

const modalTitle = computed(() => isNew.value ? 'Add Experience' : 'Edit Experience')

function openNew() {
    isNew.value = true
    editingId.value = null
    form.title = ''
    form.company = ''
    form.time_period = ''
    form.description = ''
    showModal.value = true
}

function openEdit(exp: Experience) {
    isNew.value = false
    editingId.value = exp.id
    form.title = exp.title
    form.company = exp.company || ''
    form.time_period = exp.time_period || ''
    form.description = exp.description
    showModal.value = true
}

function closeModal() {
    showModal.value = false
}

async function save() {
    saving.value = true
    try {
        if (isNew.value) {
            await $fetch('/api/admin/experiences', { method: 'POST', body: form })
        } else if (editingId.value) {
            await $fetch(`/api/admin/experiences/${editingId.value}`, { method: 'PUT', body: form })
        }
        await refresh()
        closeModal()
    } catch { /* handle */ }
    finally { saving.value = false }
}

async function remove(id: number) {
    await $fetch(`/api/admin/experiences/${id}`, { method: 'DELETE' })
    await refresh()
}
</script>

<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <h2 class="font-extrabold text-[24px]">Experiences</h2>
            <button class="flex items-center gap-2 px-4 py-2 bg-primary text-dark rounded-sm font-bold text-sm hover:bg-primary-light transition-colors cursor-pointer" @click="openNew">
                <Plus :size="16" />
                Add Experience
            </button>
        </div>

        <!-- MODAL -->
        <Modal v-model="showModal" :title="modalTitle">
            <div class="space-y-4">
                <div class="flex flex-col gap-1.5">
                    <label class="text-secondary text-sm">Title</label>
                    <input v-model="form.title" class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div class="flex flex-col gap-1.5">
                    <label class="text-secondary text-sm">Company</label>
                    <input v-model="form.company" class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div class="flex flex-col gap-1.5">
                    <label class="text-secondary text-sm">Time Period</label>
                    <input v-model="form.time_period" class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div class="flex flex-col gap-1.5">
                    <label class="text-secondary text-sm">Description</label>
                    <textarea v-model="form.description" rows="4" class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                </div>
                <div class="flex gap-3 pt-2">
                    <BaseButton variant="white" class="cursor-pointer" :disabled="saving" @click="save">
                        {{ saving ? 'Saving...' : 'Save' }}
                    </BaseButton>
                    <BaseButton variant="white-outline" class="cursor-pointer" @click="closeModal">Cancel</BaseButton>
                </div>
            </div>
        </Modal>

        <!-- LIST -->
        <div class="space-y-3">
            <div v-for="exp in experiences" :key="exp.id" class="flex items-center justify-between bg-white/3 border border-white/5 rounded-sm p-4">
                <div>
                    <h3 class="font-bold">{{ exp.title }} <span v-if="exp.company" class="text-secondary font-normal text-sm">at {{ exp.company }}</span></h3>
                    <p class="text-secondary text-sm mt-1">{{ exp.time_period }}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="p-2 hover:bg-white/10 rounded-sm transition-colors cursor-pointer" @click="openEdit(exp)">
                        <Pencil :size="16" class="text-secondary" />
                    </button>
                    <button class="p-2 hover:bg-red-500/20 rounded-sm transition-colors cursor-pointer" @click="remove(exp.id)">
                        <Trash2 :size="16" class="text-red-500" />
                    </button>
                </div>
            </div>

            <p v-if="experiences && experiences.length === 0" class="text-secondary text-center py-10">No experiences yet.</p>
        </div>
    </div>
</template>
