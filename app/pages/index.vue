<script setup lang="ts">
definePageMeta({ layout: 'default' })

const fullName = 'Hossein Mansouri'
const jobTitle = 'Full-Stack Software Engineer'
const siteUrl = 'https://hosseinmansouri.ir'
const imageUrl = `${siteUrl}/images/hossein_mansouri_2.jpeg`
const description = 'Full-Stack Software Engineer specializing in Angular, NestJS, Vue, and Node.js. Building scalable, maintainable web applications through clean code and thoughtful design.'

useSeoMeta({
    title: `${fullName} | ${jobTitle}`,
    description,
    ogTitle: `${fullName} | ${jobTitle}`,
    ogDescription: description,
    ogType: 'website',
    ogUrl: siteUrl,
    ogImage: imageUrl,
    ogImageWidth: 512,
    ogImageHeight: 512,
    ogLocale: 'en_US',
    ogSiteName: fullName,
    twitterCard: 'summary_large_image',
    twitterTitle: `${fullName} | ${jobTitle}`,
    twitterDescription: description,
    twitterImage: imageUrl,
})

useHead({
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: fullName,
                jobTitle,
                url: siteUrl,
                image: imageUrl,
                sameAs: [
                    'https://www.linkedin.com/in/hossein-mansouri-11169a230',
                    'https://instagram.com/humansouri',
                    'https://t.me/humansouri',
                ],
                description,
                knowsAbout: ['Angular', 'NestJS', 'Vue.js', 'Node.js', 'TypeScript', 'Full-Stack Development'],
            }),
        },
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: fullName,
                url: siteUrl,
                description,
            }),
        },
    ],
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
