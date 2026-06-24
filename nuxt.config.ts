import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  compatibilityDate: '2025-07-15',

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
  ]
})
