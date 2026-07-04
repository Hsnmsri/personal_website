<script setup lang="ts">
interface Experience {
    title: string;
    company: string;
    image: string | null;
    time_period: string;
    description: string;
}

const { data: experiences, pending } = useFetch<Experience[]>('/api/experiences')
</script>

<template>
    <section class="flex flex-col items-center w-full" id="experiences">

        <!-- experience title -->
        <div class="flex justify-center mb-15 w-full">
            <h2 class="font-extrabold text-[30px] mt-20 text-third uppercase">Experiences</h2>
        </div>
        <!-- experience title -->

        <div class="container flex flex-col space-y-10">

            <template v-if="pending">
                <p class="text-secondary text-center">Loading experiences...</p>
            </template>
            <template v-else v-for="item in experiences" :key="item.title">
                <div class="w-full">
                    <ExperiencesItem :title="item.title" :image="item.image || ''" :time="item.time_period" :description="item.description" />
                </div>
            </template>

        </div>

    </section>

</template>
