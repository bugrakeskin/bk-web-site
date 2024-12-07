<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

// Default meta tags
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: config.public.siteUrl }
  ]
})

// SEO meta tags
useSeoMeta({
  title: 'Buğra Keskin - DevOps Engineer & Jr. Full Stack Developer',
  titleTemplate: '%s | Buğra Keskin',
  description: 'DevOps Engineer & Jr. Full Stack Developer with expertise in Vue.js, Nuxt.js, and Node.js. Specializing in cloud infrastructure, automation, and modern web development with a focus on scalable solutions.',
  
  // Open Graph / Facebook
  ogTitle: 'Buğra Keskin - DevOps Engineer & Jr. Full Stack Developer',
  ogDescription: 'DevOps Engineer & Jr. Full Stack Developer with expertise in Vue.js, Nuxt.js, and Node.js. Specializing in cloud infrastructure, automation, and modern web development with a focus on scalable solutions.',
  ogImage: `${config.public.siteUrl}/og-image.png`,
  ogUrl: config.public.siteUrl,
  ogType: 'website',
  ogSiteName: 'Buğra Keskin Personal Web Site',
  
  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Buğra Keskin - DevOps Engineer & Jr. Full Stack Developer',
  twitterDescription: 'DevOps Engineer & Jr. Full Stack Developer with expertise in Vue.js, Nuxt.js, and Node.js. Specializing in cloud infrastructure, automation, and modern web development with a focus on scalable solutions.',
  twitterImage: `${config.public.siteUrl}/og-image.png`,
  twitterSite: '@bugrakeskin11',
  twitterCreator: '@bugrakeskin11',

  // Additional Meta
  author: 'Buğra Keskin',
  keywords: 'DevOps Engineer, Full Stack Developer, Vue.js, Nuxt.js, Node.js, Cloud Infrastructure, AWS, Kubernetes'
})
</script>
