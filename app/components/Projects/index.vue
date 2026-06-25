<script setup lang="ts">
const items: {
    title: string;
    description: string;
    link: string;
}[] = [
        {
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit',
            link: 'http://localhost'
        },
        {
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit',
            link: 'http://localhost'
        },
        {
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit',
            link: 'http://localhost'
        }
    ]
</script>

<template>
    <section class="flex flex-col items-center w-full">

        <!-- projects title -->
        <div class="flex justify-center mb-15 w-full">
            <h2 class="font-extrabold text-[30px] mt-20 text-primary uppercase">Projects</h2>
        </div>
        <!-- projects title -->

        <div class="container flex flex-col space-y-10">
            <!-- ITEMS -->
            <template v-for="item in items">
                <div class="w-full">
                    <ProjectsItem :title="item.title" :description="item.description" :link="item.link" />
                </div>
            </template>
        </div>
    </section>
</template>