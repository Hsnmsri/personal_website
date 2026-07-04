<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';

// MODEL
interface Item {
    title: string;
    description: string;
    link: string;
}

const props = defineProps<Item>();
</script>

<template>
    <article class="flex flex-col px-5 w-full" :title="props.title">
        <div class="flex items-center md:items-center justify-between w-full">
            <div class="flex items-center">
                <h3 class="font-extrabold text-[21px]">{{ props.title }}</h3>
            </div>
            <div class="px-5">
                <NuxtLink :to="props.link" target="_blank">
                    <ExternalLink />
                </NuxtLink>
            </div>
        </div>
        <div class="w-full py-5 px-2">
            <p class="text-secondary">
                {{ props.description }}
            </p>
        </div>
    </article>
</template>