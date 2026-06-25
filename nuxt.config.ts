import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: {
    enabled: false
  },

  compatibilityDate: '2025-07-15',

  modules: ['@pinia/nuxt', '@nuxt/image'],

  // VITE CONFIG
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  // STYLES
  css: [
    './app/assets/styles/tailwind.css',
    './app/assets/styles/main.scss'
  ],

})