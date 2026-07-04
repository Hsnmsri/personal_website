import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,

  devtools: { enabled: false },

  compatibilityDate: '2025-07-15',

  modules: ['@pinia/nuxt', '@nuxt/image'],

  site: {
    url: 'https://hosseinmansouri.ir',
    name: 'Hossein Mansouri - Full-Stack Developer',
  },

  app: {
    head: {
      title: 'Hossein Mansouri | Full-Stack Software Engineer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Hossein Mansouri — Full-Stack Software Engineer specializing in Angular, NestJS, Vue, and Node.js. Building scalable web applications with clean code.' },
        { name: 'keywords', content: 'Hossein Mansouri, Full-Stack Developer, Software Engineer, Angular, NestJS, Vue, Node.js, Web Developer, Frontend, Backend' },
        { name: 'author', content: 'Hossein Mansouri' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },

        { property: 'og:title', content: 'Hossein Mansouri | Full-Stack Software Engineer' },
        { property: 'og:description', content: 'Full-Stack Software Engineer specializing in Angular, NestJS, Vue, and Node.js. Building scalable web applications with clean code.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://hosseinmansouri.ir' },
        { property: 'og:image', content: 'https://hosseinmansouri.ir/images/hossein_mansouri_2.jpeg' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Hossein Mansouri' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Hossein Mansouri | Full-Stack Software Engineer' },
        { name: 'twitter:description', content: 'Full-Stack Software Engineer specializing in Angular, NestJS, Vue, and Node.js.' },
        { name: 'twitter:image', content: 'https://hosseinmansouri.ir/images/hossein_mansouri_2.jpeg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://hosseinmansouri.ir' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  css: [
    './app/assets/styles/tailwind.css',
    './app/assets/styles/main.scss'
  ],
})
