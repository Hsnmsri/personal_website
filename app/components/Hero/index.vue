<script setup lang="ts">
const { data: settings } = useSettings()

const fullName = computed(() => settings.value?.full_name || 'Hossein Mansouri')
const bio = computed(() => settings.value?.bio || '')
const cvUrl = computed(() => settings.value?.cv_url || '')

function downloadCv() {
    if (import.meta.client && cvUrl.value) {
        window.location.href = cvUrl.value
    }
}
</script>

<template>
    <div class="w-full h-full" id="home">

        <!-- HERO SECTION -->
        <section class="flex flex-col items-center px-5 md:px-0">

            <div class="w-full min-h-full overflow-hidden">

                <!-- MAIN LAYER -->
                <div class="relative top-0 left-0 w-full h-full">

                    <div class="flex flex-col items-center">

                        <!-- photo -->
                        <div class="flex items-center content-center mt-24">
                            <HeroProfilePicture />
                        </div>
                        <!-- photo -->

                        <!-- title -->
                        <div class="flex flex-col items-center">
                            <h1 class="text-lg mt-6 text-secondary">Hey there,<br> I'm <span
                                    class="font-bold text-white text-xl">{{ fullName }}</span></h1>

                            <p class="text-center font-extrabold text-5xl max-w-162.5 mt-10" style="line-height: 62px;">
                                I do code and<br>
                                make content
                                <span
                                    style="background: #FF9100;background: linear-gradient(to right, #FF9100 0%, #7D2EA2 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                                    about it!
                                </span>
                            </p>

                            <div class="mt-12">
                                <HeroDescription :bio="bio" />
                            </div>

                            <!-- actions -->
                            <div
                                class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 items-center justify-center mt-12">
                                <!-- CONTACT -->
                                <a href="#contact">
                                    <BaseButton variant="white">
                                        Get In Touch
                                    </BaseButton>
                                </a>
                                <!-- CONTACT -->

                                <!-- DOWNLOAD CV -->
                                <BaseButton v-if="cvUrl" variant="white-outline" class="cursor-pointer" @click="downloadCv">
                                    Download CV
                                </BaseButton>
                                <!-- DOWNLOAD CV -->
                            </div>
                            <!-- actions -->
                        </div>
                        <!-- title -->

                    </div>

                </div>
                <!-- MAIN LAYER -->

            </div>

        </section>
        <!-- HERO SECTION -->
    </div>
</template>
