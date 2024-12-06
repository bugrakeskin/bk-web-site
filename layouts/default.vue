<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800">
    <Navigation />
    <main class="pt-16">
      <div class="container mx-auto px-4 py-8 md:py-16">
        <div class="max-w-4xl mx-auto">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
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
