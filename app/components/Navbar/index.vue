<script setup lang="ts">
import { Menu } from '@lucide/vue';
import { useAppStore } from '~/stores/app.store';

// HELPER VARS
const appStore = useAppStore();
</script>

<template>
    <nav class="relative flex items-center justify-center w-full border-b border-b-white/5 bg-dark">
        <div class="container px-7 md:px-0 flex items-center justify-between py-5">
            <!-- LOGO -->
            <div>
                <NuxtLink to="/">
                    <Logo class="fill-primary h-6.25" />
                </NuxtLink>
            </div>
            <!-- LOGO -->

            <!-- MENU -->
            <div class="flex items-center space-x-10" v-if="!appStore.isMobile">

                <!-- HOME -->
                <NuxtLink to="#home">
                    <NavbarMenuLink>
                        Home
                    </NavbarMenuLink>
                </NuxtLink>
                <!-- HOME -->

                <!-- PROJECTS -->
                <NuxtLink to="#projects">
                    <NavbarMenuLink>
                        Projects
                    </NavbarMenuLink>
                </NuxtLink>
                <!-- PROJECTS -->

                <!-- EXPERIENCE -->
                <NuxtLink to="#experiences">
                    <NavbarMenuLink>
                        Experience
                    </NavbarMenuLink>
                </NuxtLink>
                <!-- EXPERIENCE -->

                <!-- CONTACT -->
                <NuxtLink to="#contact">
                    <NavbarMenuLink>
                        Contact
                    </NavbarMenuLink>
                </NuxtLink>
                <!-- CONTACT -->

            </div>
            <!-- MENU -->

            <!-- MENU TOGGLE (MOBILE) -->
            <div class="" v-if="appStore.isMobile">
                <div @click="appStore.toggleMobileMenuVisibility()">
                    <Menu class="opacity-50" />
                </div>
            </div>
            <!-- MENU TOGGLE (MOBILE) -->
        </div>

        <!-- MOBILE MENU -->
        <div v-if="appStore.isMobile">
            <NavbarMobileLinks />
        </div>
        <!-- MOBILE MENU -->
    </nav>
</template>