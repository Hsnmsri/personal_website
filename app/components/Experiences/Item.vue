<script setup lang="ts">
interface Item {
    title: string;
    image: string;
    time: string;
    description: string;
}

const props = defineProps<Item>();
</script>

<template>
    <article class="flex flex-col px-5 w-full" :title="props.title">
        <div class="flex flex-col md:flex-row md:items-center justify-between w-full gap-1 md:gap-0">
            <div class="flex items-center">
                <img v-if="props.image" :src="props.image" :alt="props.title" class="w-8 h-8 rounded-sm object-cover" loading="lazy">
                <h3 class="font-extrabold text-[21px]" :class="props.image ? 'ms-4' : ''">{{ props.title }}</h3>
            </div>
            <time class="text-secondary text-sm md:text-base">
                {{ props.time }}
            </time>
        </div>
        <div class="w-full py-5 px-2">
            <p class="text-secondary">
                {{ props.description }}
            </p>
        </div>
    </article>
</template>
