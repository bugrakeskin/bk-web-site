<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 text-center animate-fade-in text-gray-900 dark:text-white">Get in Touch</h1>
        
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 animate-slide-up">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              >
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                required
                class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>

          <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
            <h2 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">Other ways to connect</h2>
            <div class="space-y-4">
              <a href="mailto:your.email@example.com" 
                 class="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <span class="mr-2">✉️</span>
                your.email@example.com
              </a>
              <a href="https://linkedin.com/in/yourprofile" 
                 target="_blank"
                 class="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <span class="mr-2">💼</span>
                LinkedIn Profile
              </a>
              <a href="https://github.com/yourusername" 
                 target="_blank"
                 class="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <span class="mr-2">💻</span>
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', formData.value)
  alert('Thank you for your message! I will get back to you soon.')
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

input, textarea {
  @apply border-gray-300 dark:border-gray-600;
}
</style>
