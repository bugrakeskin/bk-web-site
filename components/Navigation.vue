<template>
  <nav class="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm z-50 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <NuxtLink to="/" class="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white">
          <div class="relative w-8 h-8">
            <img src="~/assets/bklogo.png" alt="BK Logo" class="absolute inset-0 w-full h-full dark:hidden" />
            <img src="~/assets/bklogo-dark.png" alt="BK Logo Dark" class="absolute inset-0 w-full h-full hidden dark:block" />
          </div>
          <span class="logo-text">BK</span>
        </NuxtLink>

        <div class="flex items-center md:space-x-8">
          <div class="hidden md:flex space-x-8">
            <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {{ item.name }}
            </NuxtLink>
          </div>

          <UButton size="sm" color="amber" variant="solid" target="_blank" to="/BK-ENG.pdf" class="hidden md:flex">
            <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-1" />
            My Resume [PDF]
          </UButton>

          <!-- Theme Toggle Button -->
          <UColorModeButton />

          <!-- Mobile menu button -->
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-600 dark:text-gray-300 p-2">
            <span class="sr-only">Open menu</span>
            <div class="w-7 h-7 flex items-center justify-center text-xl">
              <UIcon v-if="!isMenuOpen" name="i-heroicons-bars-3" class="w-6 h-6" />
              <UIcon v-else name="i-heroicons-x-mark" class="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-gray-900 shadow-lg">
      <div class="px-4 pt-2 pb-3 space-y-2">
        <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" class="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" @click="isMenuOpen = false">
          {{ item.name }}
        </NuxtLink>
        <UButton size="sm" color="amber" variant="solid" target="_blank" to="/BK-ENG.pdf" class="w-full mt-2">
          <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-4 h-4 mr-1" />
          My Resume [PDF]
        </UButton>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false);

const menuItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
</script>
