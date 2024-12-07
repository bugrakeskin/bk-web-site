// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-mail", "nuxt-simple-robots"],
  css: ["~/assets/css/main.scss"],
  googleFonts: {
    families: {
      Raleway: [500, 600, 700],
      "Open+Sans": [400, 500, 600],
    },
    display: "swap",
  },
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
  runtimeConfig: {
    public: {
      NUXT_MAIL_TARGET: process.env.NUXT_MAIL_TARGET,
      NUXT_MAIL_SMPT: process.env.NUXT_MAIL_SMPT,
      NUXT_MAIL_PORT: process.env.NUXT_MAIL_PORT,
      NUXT_MAIL_USERNAME: process.env.NUXT_MAIL_USERNAME,
      NUXT_MAIL_PASSWORD: process.env.NUXT_MAIL_PASSWORD,
      siteUrl: process.env.BASE_URL || "https://bugrakeskin.xyz",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  robots: {
    allow: "/",
    disallow: "/404",
    sitemap: process.env.BASE_URL ? `${process.env.BASE_URL}/sitemap.xml` : "https://bugrakeskin.xyz/sitemap.xml",
    indexable: true,
  },
});
