<script setup lang="ts">
// HELPER VARS
const appStore = useAppStore();

// VARS
const descriptionFullVisibility = ref<boolean>(false);
</script>

<template>
    <p class="max-w-75 md:max-w-180 text-center text-white text-opacity-70"
        :class="{ 'overflow-hidden text-ellipsis whitespace-nowrap': appStore.isMobile && !descriptionFullVisibility }"
        @click="descriptionFullVisibility = !descriptionFullVisibility">
        I’m a full-stack software engineer with hands-on experience in<br> both frontend and
        backend development.
        My strength lies in building modern, scalable web applications using technologies like
        <strong>Angular</strong>, <strong>NestJS</strong>. <br>
        I enjoy crafting clean code and intuitive user experiences that solve real-world
        problems.
    </p>
</template>