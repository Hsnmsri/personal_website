<script setup lang="ts">
import { SendHorizontal, User, Mail, MessageSquare } from '@lucide/vue';

const form = ref({
    name: '',
    email: '',
    message: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

async function submit() {
    isSubmitting.value = true;

    try {
        // TODO: Replace with your actual API endpoint
        // await $fetch('/api/contact', { method: 'POST', body: form.value });
        await new Promise(resolve => setTimeout(resolve, 1000));
        isSubmitted.value = true;
    } catch {
        // Handle error
    } finally {
        isSubmitting.value = false;
    }
}
</script>

<template>
    <div v-if="!isSubmitted" class="flex flex-col space-y-5">
        <BaseInput v-model="form.name" placeholder="Your name" required>
            <template #icon>
                <User :size="18" />
            </template>
        </BaseInput>

        <BaseInput v-model="form.email" type="email" placeholder="Your email" required>
            <template #icon>
                <Mail :size="18" />
            </template>
        </BaseInput>

        <BaseInput v-model="form.message" :multiline="true" placeholder="Your message" required>
            <template #icon>
                <MessageSquare :size="18" />
            </template>
        </BaseInput>

        <BaseButton variant="white" class="w-full flex items-center justify-center gap-2 py-3 cursor-pointer" :disabled="isSubmitting" @click="submit">
            <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
            <SendHorizontal :size="16" />
        </BaseButton>
    </div>

    <div v-else class="flex flex-col items-center justify-center py-10 text-center">
        <div class="text-primary text-4xl mb-4">&#10003;</div>
        <h3 class="text-lg font-bold mb-2">Message Sent!</h3>
        <p class="text-secondary text-sm">Thank you for reaching out. I'll get back to you soon.</p>
    </div>
</template>
