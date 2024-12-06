// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-mail"
  ],
  mail: {
    message: {
      to: process.env.NUXT_MAIL_TARGET,
    },
    smtp: {
      host: process.env.NUXT_MAIL_SMPT,
      port: process.env.NUXT_MAIL_PORT,
      auth: {
        user: process.env.NUXT_MAIL_USERNAME,
        pass: process.env.NUXT_MAIL_PASSWORD,
      },
    },
  },
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
      NUXT_MAIL_TARGET: process.env.NUXT_MAIL_TARGET,
      NUXT_MAIL_SMPT: process.env.NUXT_MAIL_SMPT,
      NUXT_MAIL_PORT: process.env.NUXT_MAIL_PORT,
      NUXT_MAIL_USERNAME: process.env.NUXT_MAIL_USERNAME,
      NUXT_MAIL_PASSWORD: process.env.NUXT_MAIL_PASSWORD,
      baseurl: process.env.BASE_URL ?? "http://localhost:3000",
    },
  },
  nitro: {
    preset: 'vercel'
  }
});
