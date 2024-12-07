<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

// Schema.org configurations
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Buğra Keskin",
  jobTitle: "DevOps Engineer & Jr. Full Stack Developer",
  url: "https://bugrakeskin.xyz",
  sameAs: ["https://twitter.com/bugrakeskin11", "https://github.com/bugrakeskin", "https://linkedin.com/in/bugrakeskin"],
  knowsAbout: ["DevOps", "Cloud Infrastructure", "Vue.js", "Nuxt.js", "Node.js", "Kubernetes", "Docker"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Buğra Keskin - Personal Website",
  url: "https://bugrakeskin.xyz",
  description: "Expert DevOps Engineer and Jr. Full Stack Developer specializing in Vue.js, Nuxt.js, and cloud infrastructure.",
};

// Default meta tags
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "canonical", href: config.public.siteUrl },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(personSchema),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(websiteSchema),
    },
  ],
});

// SEO meta tags
useSeoMeta({
  title: "DevOps Engineer & Jr. Full Stack Developer",
  titleTemplate: "%s | BK",
  description: "Expert DevOps Engineer and Jr. Full Stack Developer specializing in Vue.js, Nuxt.js, and cloud infrastructure. Building scalable solutions with modern web technologies.",

  // Open Graph / Facebook
  ogTitle: "DevOps Engineer & Jr. Full Stack Developer | Buğra Keskin",
  ogDescription: "Expert DevOps Engineer and Jr. Full Stack Developer specializing in Vue.js, Nuxt.js, and cloud infrastructure. Building scalable solutions with modern web technologies.",
  ogImage: `${config.public.siteUrl}/og-image.png`,
  ogUrl: config.public.siteUrl,
  ogType: "website",
  ogSiteName: "Buğra Keskin Personal Web Site",

  // Twitter
  twitterCard: "summary_large_image",
  twitterTitle: "DevOps Engineer & Jr. Full Stack Developer | Buğra Keskin",
  twitterDescription: "Expert DevOps Engineer and Jr. Full Stack Developer specializing in Vue.js, Nuxt.js, and cloud infrastructure. Building scalable solutions with modern web technologies.",
  twitterImage: `${config.public.siteUrl}/og-image.png`,
  twitterSite: "@bugrakeskin11",
  twitterCreator: "@bugrakeskin11",

  // Additional Meta
  author: "Buğra Keskin",
  keywords: "DevOps Engineer, Jr. Full Stack Developer, Vue.js, Nuxt.js, Node.js, Cloud Infrastructure, AWS, Kubernetes",
});
</script>
