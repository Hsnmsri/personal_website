<script setup lang="ts">
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { contactModalVisibility } = storeToRefs(appStore);
</script>

<template>
    <Modal v-model="contactModalVisibility" title="Get in Touch">
        <ContactForm />
    </Modal>
</template>
