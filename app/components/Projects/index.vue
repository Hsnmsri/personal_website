<script setup lang="ts">
interface Project {
    title: string;
    description: string;
    link: string;
}

const { data: items, pending } = useFetch<Project[]>('/api/projects')
</script>

<template>
    <section class="flex flex-col items-center w-full" id="projects">

        <!-- projects title -->
        <div class="flex justify-center mb-15 w-full">
            <h2 class="font-extrabold text-[30px] mt-20 text-primary uppercase">Projects</h2>
        </div>
        <!-- projects title -->

        <div class="container flex flex-col space-y-10">
            <!-- ITEMS -->
            <template v-if="pending">
                <p class="text-secondary text-center">Loading projects...</p>
            </template>
            <template v-else v-for="item in items">
                <div class="w-full">
                    <ProjectsItem :title="item.title" :description="item.description" :link="item.link" />
                </div>
            </template>
        </div>
    </section>
</template>
