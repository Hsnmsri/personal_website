<script setup lang="ts">
// MODEL
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
        <div class="flex flex-col md:flex-row md:items-center justify-between w-full">
            <div class="flex items-center">
                <img :src="props.image" :alt="props.title.replaceAll(' ', '-').toLowerCase()" class="w-8 h-8"
                    loading="lazy">
                <h3 class="font-extrabold text-[21px] ms-4">{{ props.title }}</h3>
            </div>
            <time class="text-secondary">
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