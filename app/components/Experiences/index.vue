<script setup lang="ts">
const experiences: {
    title: string;
    image: string;
    time: string;
    description: string;
}[] = [
        {
            title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            image: "fuck",
            time: "fuck",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        },
        {
            title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            image: "fuck",
            time: "fuck",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        }
    ]
</script>

<template>
    <section class="flex flex-col items-center w-full">

        <!-- experience title -->
        <div class="flex justify-center mb-15 w-full">
            <h2 class="font-extrabold text-[30px] mt-20 text-third uppercase">Experiences</h2>
        </div>
        <!-- experience title -->

        <div class="container flex flex-col space-y-10">

            <template v-for="item in experiences" :key="item.title">
                <div class="w-full">
                    <ExperiencesItem :title="item.title" :image="item.image" :time="item.time"
                        :description="item.description" />
                </div>
            </template>

        </div>

    </section>

</template>