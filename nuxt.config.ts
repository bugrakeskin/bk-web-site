// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.scss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Personal Portfolio",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "description", content: "Personal Portfolio Website" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
