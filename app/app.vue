<script setup lang="ts">
const windowHeight = ref<string>(`${window.innerHeight}px`);

/**
 * Update window height as px
 */
function updateWindowHeight() {
  windowHeight.value = `${window.innerHeight}px`;
}

// WEBHOOKS
onMounted(() => {
  window.addEventListener('resize', () => updateWindowHeight());
})
onUnmounted(() => {
  window.removeEventListener('resize', () => updateWindowHeight());
})
</script>

<template>
  <main class="bg-dark font-family-jetbrains" :style="{ 'height': windowHeight }">
    <!-- LAYOUTS -->
    <NuxtLayout />
    <!-- LAYOUTS -->
  </main>
</template>
