<script setup lang="ts">
import { X } from '@lucide/vue';

const appStore = useAppStore();
</script>

<template>
    <Transition name="mobile-menu">
        <div v-if="appStore.mobileMenuVisibility" class="bg-dark fixed top-0 left-0 right-0 bottom-0 w-full z-50">
            <div class="relative w-full h-full">

                <!-- HEADER -->
                <nav class="px-7 flex items-center justify-between border-b border-white/5 w-full h-16.25">
                    <div>
                        <h2>Menu</h2>
                    </div>

                    <div class="p-1 pe-0 cursor-pointer" @click="appStore.toggleMobileMenuVisibility()">
                        <X class="opacity-50" />
                    </div>
                </nav>
                <!-- HEADER -->

                <!-- MAIN -->
                <div class="p-10 w-full h-full">
                    <!-- MENU LINKS -->
                    <div class="flex flex-col space-y-6">

                        <!-- HOME -->
                        <NuxtLink to="#">
                            <NavbarMenuLink>
                                Home
                            </NavbarMenuLink>
                        </NuxtLink>
                        <!-- HOME -->

                        <!-- PROJECTS -->
                        <NuxtLink to="#">
                            <NavbarMenuLink>
                                Projects
                            </NavbarMenuLink>
                        </NuxtLink>
                        <!-- PROJECTS -->

                        <!-- EXPERIENCE -->
                        <NuxtLink to="#">
                            <NavbarMenuLink>
                                Experience
                            </NavbarMenuLink>
                        </NuxtLink>
                        <!-- EXPERIENCE -->

                        <!-- CONTACT -->
                        <NuxtLink to="#">
                            <NavbarMenuLink>
                                Contact
                            </NavbarMenuLink>
                        </NuxtLink>
                        <!-- CONTACT -->

                    </div>
                    <!-- MENU LINKS -->

                    <!-- CONTACT -->
                    <div class="absolute left-0 right-0 bottom-8">
                        <div class="w-full px-10">
                            <button class="bg-white/70 py-3 font-bold text-dark rounded-full text-center w-full">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <!-- CONTACT -->

                </div>
                <!-- MAIN -->

            </div>
        </div>
    </Transition>
</template>

<style scoped>
    .mobile-menu-enter-active {
        transition: all 0.3s ease-out;
    }

    .mobile-menu-leave-active {
        transition: all 0.2s ease-in;
    }

    .mobile-menu-enter-from {
        opacity: 0.8;
        transform: scale(0.995);
    }

    .mobile-menu-enter-to {
        opacity: 1;
        transform: scale(1);
    }

    .mobile-menu-leave-from {
        opacity: 1;
        transform: scale(1);
    }

    .mobile-menu-leave-to {
        opacity: 0;
        transform: scale(0.995);
    }
</style>
