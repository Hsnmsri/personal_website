<script setup lang="ts">
import { CircleFadingPlus, Link, Mail, Phone, Send } from '@lucide/vue';

const appStore = useAppStore();
</script>

<template>
    <div class="w-full flex justify-center bg-secondary/10 py-10 md:py-24" id="contact">
        <div class="container flex flex-col items-center px-6 md:px-0">

            <!-- title -->
            <div class="w-full">
                <h2 class="font-semibold text-[21px]">Contact</h2>
            </div>
            <!-- title -->

            <!-- info -->
            <div class="w-full">
                <p class="max-w-175 mt-8 text-secondary ">
                    Experienced Full Stack Developer with a solid track record of delivering end-to-end web solutions.
                    Skilled in architecting and developing scalable, maintainable applications using modern technologies
                    across
                    the stack.
                    Passionate about building meaningful digital experiences through clean code and thoughtful design.
                </p>
            </div>
            <!-- info -->

            <!-- contact detail -->
            <div class="flex flex-col w-full">
                <!-- email -->
                <div class="flex items-center text-secondary mt-5">
                    <div class="pb-0.5">
                        <Mail :size="20" />
                    </div>
                    <a class="ms-2" href="mailto:hsnmsri82@gmail.com">hsnmsri82&#64;gmail.com</a>
                </div>
                <!-- email -->

                <!-- phone number -->
                <div class="flex items-center text-secondary mt-5">
                    <div class="pb-0.5">
                        <Phone :size="20" />
                    </div>
                    <a class="ms-2" href="call:+989172433226">+98 (917) 243-3226</a>
                </div>
                <!-- phone number -->

                <!-- contact form -->
                <div class="mt-5 text-secondary">
                    <p>
                        <span class="text-[15px] mb-3">Prefer a direct message?</span>
                        <span class="cursor-pointer text-primary-dark hover:text-primary"
                            @click="appStore.toggleContactModal()">
                            Contact form
                        </span>
                    </p>
                </div>
                <!-- contact form -->

                <!-- other -->
                <div class="flex flex-wrap md:flex-nowrap w-full">
                    <div class="flex items-center text-secondary mt-8 text-[18px]">
                        <a href="https://instagram.com/humansouri" target="_blank"
                            class="flex items-center hover:text-white">
                            <div class="pb-0.5">
                                <CircleFadingPlus :size="20" />
                            </div>
                            <span class="text-[15px] ms-2">humansouri</span>
                        </a>
                    </div>
                    <div class="flex items-center text-secondary mt-8 text-[18px] ms-3">
                        <a href="https://t.me/humansouri" target="_blank" class="hover:text-white">
                            <div class="pb-0.5">
                                <Send :size="20" />
                            </div>
                        </a>
                    </div>
                    <div class="flex items-center text-secondary mt-8 text-[18px] ms-5">
                        <a href="https://www.linkedin.com/in/hossein-mansouri-11169a230" target="_blank"
                            class="hover:text-white">
                            <div class="pb-0.5">
                                <Link :size="20" />
                            </div>
                        </a>
                    </div>

                    <div
                        class="flex items-center text-secondary text-opacity-50 mt-8 text-[18px] ms-10 w-full md:w-fit">
                        <p>
                            &copy; {{ new Date(Date.now()).getFullYear() }} Hossein Mansouri
                        </p>
                    </div>
                </div>
                <!-- other -->
            </div>
            <!-- contact detail -->

        </div>
    </div>

</template>