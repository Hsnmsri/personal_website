<script setup lang="ts">
// MODEL
interface Button {
    variant?: 'white' | 'white-outline' | 'secondary' | 'secondary-outline'
}

const props = defineProps<Button>();
</script>

<template>
    <button class="px-5 py-2 rounded-full font-bold" :class="{
        'bg-white text-dark hover:bg-gray-300': props.variant === 'white',
        'bg-transparent border border-white text-white hover:bg-gray-300 hover:text-dark': props.variant === 'white-outline',
        'bg-secondary text-dark hover:bg-secondary': props.variant === 'secondary',
        'bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-dark': props.variant === 'secondary-outline',
    }">
        <slot />
    </button>
</template>