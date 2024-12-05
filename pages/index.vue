<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4 py-16">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-6xl font-bold mb-4 animate-fade-in text-gray-900 dark:text-white">Hello!</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 animate-slide-up">Welcome to my personal space</p>
      </div>

      <!-- About Section -->
      <div class="max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Hello World!</h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm <NuxtLink to="/about" class="name-link relative inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors">Buğra Keskin</NuxtLink>, a seasoned IT professional with 15 years of experience, currently specializing in DevOps engineering. With a
          comprehensive background in cloud infrastructure and modern development practices, I architect and implement robust DevOps solutions using Kubernetes, Docker, and various monitoring tools. My expertise spans across both traditional and cloud-native technologies, from containerization to CI/CD pipelines. I'm particularly passionate about
          automation, infrastructure as code, and creating efficient, scalable systems. Currently expanding my cloud expertise with AWS while maintaining proficiency in frontend development using Vue.js and Nuxt.js. Get to know a bit more
          <NuxtLink to="/about" class="name-link relative inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors">about my skills </NuxtLink> or feel free to look around my
          <NuxtLink to="/about" class="name-link relative inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors">projects.</NuxtLink>
        </p>
      </div>

      <!-- Projects Grid -->
      <!--   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" 
             class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Project {{ i }}</h3>
          <p class="text-gray-600 dark:text-gray-300">Description of project {{ i }}. Click to learn more.</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  gsap.from(".animate-fade-in", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".animate-slide-up", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });
});
</script>

<style lang="scss">
.container {
  max-width: 1200px;
}

.animate-fade-in {
  opacity: 0;
}

.animate-slide-up {
  opacity: 0;
  transform: translateY(50px);
}
</style>

<style scoped>
.name-link {
  text-decoration: none;
  transition: all 0.3s ease;
}

.name-link:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
</style>
