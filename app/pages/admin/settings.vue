<script setup lang="ts">
import { Download, Upload } from '@lucide/vue';

definePageMeta({
    layout: 'admin',
    middleware: 'auth',
})

const { data: settings, refresh } = useSettings()

interface SettingField {
    key: string
    label: string
    type: 'text' | 'textarea' | 'email'
}

const fields: SettingField[] = [
    { key: 'full_name', label: 'Full Name', type: 'text' },
    { key: 'title', label: 'Title', type: 'text' },
    { key: 'bio', label: 'Bio', type: 'textarea' },
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'phone', label: 'Phone', type: 'text' },
    { key: 'instagram', label: 'Instagram Username', type: 'text' },
    { key: 'telegram', label: 'Telegram Username', type: 'text' },
    { key: 'linkedin', label: 'LinkedIn URL', type: 'text' },
]

const form = reactive<Record<string, string>>({})
const saving = ref(false)
const saved = ref(false)

const uploading = ref(false)
const uploadError = ref('')
const uploadSuccess = ref(false)

watch(settings, (val) => {
    if (val && !Object.keys(form).length) {
        for (const field of fields) {
            form[field.key] = val[field.key] || ''
        }
    }
}, { immediate: true })

async function save() {
    saving.value = true
    saved.value = false
    try {
        await fetch('/api/admin/settings', {
            method: 'PUT',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
        await refresh()
        refreshNuxtData('site-settings')
        saved.value = true
        setTimeout(() => (saved.value = false), 2000)
    } catch {
    } finally {
        saving.value = false
    }
}

async function handleUpload(e: Event) {
    const input = e.target as HTMLInputElement
    const file = input.files?.[0]
    if (!file) return

    uploadError.value = ''
    uploadSuccess.value = false
    uploading.value = true

    try {
        const fd = new FormData()
        fd.append('file', file)

        const oldPath = settings.value?.cv_url || ''
        if (oldPath) fd.append('old_path', oldPath)

        const res = await fetch('/api/admin/upload', {
            method: 'POST',
            credentials: 'include',
            body: fd,
        })

        if (!res.ok) {
            const err = await res.text()
            throw new Error(`Upload failed: ${res.status} ${err}`)
        }

        const data = await res.json()

        await fetch('/api/admin/settings', {
            method: 'PUT',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cv_url: data.path }),
        })

        refreshNuxtData('site-settings')
        await refresh()
        uploadSuccess.value = true
        setTimeout(() => (uploadSuccess.value = false), 3000)
    } catch (e: any) {
        uploadError.value = e.message || 'Upload failed'
    } finally {
        uploading.value = false
        input.value = ''
    }
}

const cvUrl = computed(() => settings.value?.cv_url)
const cvFileName = computed(() => cvUrl.value?.split('/').pop() || 'CV')
</script>

<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <h2 class="font-extrabold text-[24px]">Settings</h2>
            <BaseButton variant="white" class="cursor-pointer" :disabled="saving" @click="save">
                {{ saving ? 'Saving...' : 'Save Changes' }}
            </BaseButton>
        </div>

        <p v-if="saved" class="text-green-500 text-sm mb-4">Settings saved successfully.</p>

        <div class="space-y-5 max-w-xl">
            <div v-for="field in fields" :key="field.key" class="flex flex-col gap-1.5">
                <label class="text-secondary text-sm">{{ field.label }}</label>
                <textarea
                    v-if="field.type === 'textarea'"
                    v-model="form[field.key]"
                    rows="4"
                    class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-white placeholder:text-secondary/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <input
                    v-else
                    v-model="form[field.key]"
                    :type="field.type"
                    class="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-4 text-white placeholder:text-secondary/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
            </div>

            <!-- CV FILE -->
            <div class="flex flex-col gap-2 pt-4 border-t border-white/5">
                <label class="text-secondary text-sm">CV File</label>

                <div v-if="cvUrl" class="flex items-center gap-3">
                    <a :href="cvUrl" @click.prevent="window.open(cvUrl, '_blank')" class="flex items-center gap-2 text-primary hover:underline text-sm">
                        <Download :size="16" />
                        {{ cvFileName }}
                    </a>
                </div>
                <p v-else class="text-secondary/50 text-sm">No CV uploaded yet.</p>

                <div class="flex items-center gap-3">
                    <label
                        class="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-sm text-sm text-secondary hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                        :class="{ 'opacity-50 pointer-events-none': uploading }"
                    >
                        <Upload :size="14" />
                        {{ uploading ? 'Uploading...' : 'Upload New CV' }}
                        <input type="file" accept=".pdf,.doc,.docx" class="hidden" @change="handleUpload" :disabled="uploading" />
                    </label>
                </div>

                <p v-if="uploadError" class="text-red-500 text-xs">{{ uploadError }}</p>
                <p v-if="uploadSuccess" class="text-green-500 text-xs">CV uploaded successfully.</p>
            </div>
        </div>
    </div>
</template>
