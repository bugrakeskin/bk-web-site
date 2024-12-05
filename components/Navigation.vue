<template>
  <nav class="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm z-50 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white">Portfolio</NuxtLink>

        <div class="flex items-center space-x-8">
          <div class="hidden md:flex space-x-8">
            <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Theme Toggle Button -->
          <ColorModeButton />
        </div>

        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-600 dark:text-gray-300">
          <span class="sr-only">Open menu</span>
          <div class="w-6 h-6 flex items-center justify-center">
            <span v-if="!isMenuOpen">☰</span>
            <span v-else>✕</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-gray-900">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" @click="isMenuOpen = false">
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import ColorModeButton from "./ColorModeButton.vue";

const isMenuOpen = ref(false);

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
</script>
