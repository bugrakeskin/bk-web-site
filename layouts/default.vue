<template>
  <UContainer class="min-h-screen bg-gray-50 dark:bg-gray-800 max-w-full mx-auto px-4">
    <Navigation />
    <main class="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <slot />
    </main>
  </UContainer>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
