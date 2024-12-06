<template>
  <div class="min-h-[calc(100vh-18rem)] p-4 md:p-2 mt-24 md:mt-0 flex items-center justify-center">
    <div class="max-w-3xl text-center">
      <h2 class="text-3xl font-semibold mb-6 text-start text-gray-900 dark:text-white">Hello World!</h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
        I'm <NuxtLink to="/about" class="name-link relative inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors">Buğra Keskin</NuxtLink>, a seasoned IT professional with 15 years of experience, currently specializing in DevOps engineering. With a
        comprehensive background in cloud infrastructure and modern development practices, I architect and implement robust DevOps solutions using Kubernetes, Docker, and various monitoring tools. My expertise spans across both traditional and cloud-native technologies, from containerization to CI/CD pipelines. I'm particularly passionate about
        automation, infrastructure as code, and creating efficient, scalable systems. Currently expanding my cloud expertise with AWS while maintaining proficiency in frontend development using Vue.js and Nuxt.js. Get to know a bit more
        <NuxtLink to="/about" class="name-link relative inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors">about my skills </NuxtLink> or feel free to look around my
        <NuxtLink to="/projects" class="name-link relative inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-2 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white transition-colors">projects.</NuxtLink>
      </p>
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
