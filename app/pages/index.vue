<script setup lang="ts">
definePageMeta({
    layout: 'default'
})
</script>

<template>
    <div class="w-full h-full pt-13 pb-40">

        <!-- HERO -->
        <div class="w-full h-full">
            <Hero />
        </div>
        <!-- HERO -->

        <!-- EXPERIENCE -->
        <div>
            <Experience />
        </div>
        <!-- EXPERIENCE -->

        <!-- PROJECTS -->
        <div class="w-full mt-10">
            <Projects />
        </div>
        <!-- PROJECTS -->

        <!-- EXPERIENCES -->
        <div class="w-full mt-10">
            <Experiences />
        </div>
        <!-- EXPERIENCES -->

        <!-- CONTACT MODAL -->
        <ContactFormModal />
        <!-- CONTACT MODAL -->

    </div>
</template>