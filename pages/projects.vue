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
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    image: "https://picsum.photos/800/600?random=1",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/project",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "https://picsum.photos/800/600?random=2",
    technologies: ["React", "Firebase", "Material-UI"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/project",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard showing forecasts and historical data.",
    image: "https://picsum.photos/800/600?random=3",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/project",
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
