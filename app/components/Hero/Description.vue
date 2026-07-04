<script setup lang="ts">
// HELPER VARS
const appStore = useAppStore();

interface Props {
    bio: string;
}

defineProps<Props>();

// VARS
const descriptionFullVisibility = ref<boolean>(false);
</script>

<template>
    <p class="max-w-75 md:max-w-180 text-center text-white text-opacity-70"
        :class="{ 'overflow-hidden text-ellipsis whitespace-nowrap': appStore.isMobile && !descriptionFullVisibility }"
        @click="descriptionFullVisibility = !descriptionFullVisibility">
        {{ bio }}
    </p>
</template>
