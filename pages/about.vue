<template>
  <div class="container mx-auto mt-24">
    <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>

    <div class="prose dark:prose-invert max-w-none">
      <p class="text-gray-700 dark:text-gray-300 text-justify">
        Hello! I'm a passionate DevOps Engineer with extensive experience in cloud infrastructure and automation. My expertise spans across various DevOps technologies including Kubernetes, Docker, AWS, and CI/CD pipelines. I excel at bridging the gap between development and operations, ensuring smooth deployment processes and robust infrastructure
        management. My journey started with system administration and has evolved into architecting scalable cloud solutions with a focus on automation, security, and reliability.
      </p>

      <h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Skills</h2>

      <!-- DevOps Skills -->
      <h3 class="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">DevOps & Infrastructure</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div v-for="skillName in skillCategories.devops" :key="skillName" class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-medium text-gray-900 dark:text-white">{{ skillName }}</h3>
          <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
            <div class="h-full bg-amber-500 dark:bg-amber-400 rounded-full" :style="{ width: skills.find((s) => s.name === skillName).level + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- Frontend Skills -->
      <h3 class="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Frontend Development</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div v-for="skillName in skillCategories.frontend" :key="skillName" class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-medium text-gray-900 dark:text-white">{{ skillName }}</h3>
          <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
            <div class="h-full bg-amber-500 dark:bg-amber-400 rounded-full" :style="{ width: skills.find((s) => s.name === skillName).level + '%' }"></div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Latest Experience</h2>
      <div class="space-y-6">
        <div v-for="exp in experience" :key="exp.company" class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 class="font-semibold text-xl text-gray-900 dark:text-white">{{ exp.position }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ exp.company }} | {{ exp.period }}</p>
          <p class="mt-2 text-gray-700 dark:text-gray-300">{{ exp.description }}</p>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-200 dark:border-gray-700 mb-8">
        <div class="text-center">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Want to know more?</h3>
          <p class="text-gray-600 dark:text-gray-400">Check out my detailed CV for my full experience and qualifications</p>
          <a href="/Buğra-Keskin-ENG.pdf" target="_blank" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
            <span class="text-lg">View Resume</span>
            <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { experience } from "~/data/experience";
import { onMounted } from "vue";
import { gsap } from "gsap";

const skills = [
  { name: "DevOps Technologies", level: 92 },
  { name: "AWS", level: 85 },
  { name: "Kubernetes", level: 90 },
  { name: "Docker", level: 90 },
  { name: "CI/CD", level: 85 },
  { name: "Infrastructure as Code", level: 80 },
  { name: "Vue.js", level: 80 },
  { name: "Nuxt.js", level: 80 },
  { name: "JavaScript/TypeScript", level: 75 },
  { name: "TailwindCSS", level: 80 },
  { name: "Node.js", level: 40 },
];

const skillCategories = {
  devops: ["DevOps Technologies", "AWS", "Kubernetes", "Docker", "CI/CD", "Infrastructure as Code"],
  frontend: ["Vue.js", "Nuxt.js", "JavaScript/TypeScript", "TailwindCSS"],
  backend: ["Node.js"],
};

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

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 1s ease-out forwards;
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
