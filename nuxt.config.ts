// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.scss"],
  googleFonts: {
    families: {
      Raleway: [500, 600, 700],
      "Open+Sans": [400, 500, 600],
    },
    display: "swap",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Personal Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Personal Portfolio Website" },
        { name: "theme-color", content: "#f59e0b" }, // Amber color for theme
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/manifest.json" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseurl: process.env.BASE_URL ?? "http://localhost:3000",
    },
  },
  nitro: {
    preset: 'vercel'
  }
});
