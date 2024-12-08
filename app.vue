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
  jobTitle: "Expert DevOps Engineer & Jr. Full Stack Developer",
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
  title: "Buğra Keskin | Expert DevOps Engineer",
  titleTemplate: "%s",
  description: "🚀 15+ years in DevOps & Cloud Infrastructure. Expert in Kubernetes, Docker, AWS. Building scalable solutions with Vue.js & Nuxt.js. Let's innovate together!",

  // Open Graph / Facebook
  ogTitle: "Buğra Keskin | Expert DevOps Engineer & Jr. Full Stack Developer",
  ogDescription: "🚀 15+ years in DevOps & Cloud Infrastructure. Expert in Kubernetes, Docker, AWS. Building scalable solutions with Vue.js & Nuxt.js. Let's innovate together!",
  ogImage: `${config.public.siteUrl}/og-image.png`,
  ogUrl: config.public.siteUrl,
  ogType: "website",
  ogSiteName: "Buğra Keskin - Expert DevOps Engineer",

  // Twitter
  twitterCard: "summary_large_image",
  twitterTitle: "Buğra Keskin | Expert DevOps Engineer & Jr. Full Stack Developer",
  twitterDescription: "🚀 15+ years in DevOps & Cloud Infrastructure. Expert in Kubernetes, Docker, AWS. Building scalable solutions with Vue.js & Nuxt.js. Let's innovate together!",
  twitterImage: `${config.public.siteUrl}/og-image.png`,
  twitterSite: "@bugrakeskin11",
  twitterCreator: "@bugrakeskin11",

  // Additional Meta
  author: "Buğra Keskin",
  keywords: "Expert DevOps Engineer, Cloud Infrastructure, Kubernetes, Docker, AWS, Vue.js, Nuxt.js, Jr. Full Stack Development, CI/CD, Infrastructure as Code, BK",
});
</script>
