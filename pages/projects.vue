<template>
  <div class="space-y-8 container mx-auto mt-24">
    <h1 class="text-4xl font-bold text-center animate-fade-in text-gray-900 dark:text-white">My Projects</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
      <div v-for="project in projects" :key="project.title" class="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full">
              {{ tech }}
            </span>
          </div>
          <div class="mt-4 flex space-x-4">
            <a v-if="project.demo" :href="project.demo" target="_blank" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"> Live Demo </a>
            <a v-if="project.github" :href="project.github" target="_blank" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"> GitHub </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Shopping List App",
    description: "A simple shopping list application.",
    image: "https://picsum.photos/800/600?random=1",
    technologies: ["Vue.js", "Nuxt.js", "Supabase Realtime Database", "Nuxt-UI", "Pinia"],
    demo: "https://shoppinlistv2.vercel.app",
    github: "https://github.com/bugrakeskin/Shopping-List-v2",
  },
  {
    title: "Personal Website",
    description: "My personal website.",
    image: "https://picsum.photos/800/600?random=2",
    technologies: ["Vue.js", "Nuxt.js", "Nuxt-UI", "Tailwind CSS", "Nuxt-Mail"],
    demo: "https://bugrakeskin.xyz",
    github: "https://github.com/bugrakeskin/bk-web-site",
  },
];
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 1s ease-out forwards;
  animation-delay: calc(var(--index, 0) * 0.1s);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
