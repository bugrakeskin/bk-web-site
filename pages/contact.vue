<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 text-center animate-fade-in text-gray-900 dark:text-white">Get in Touch</h1>

        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 animate-slide-up">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <UFormGroup label="Name">
              <UInput v-model="formData.name" placeholder="Enter your name" size="lg" color="amber" required />
            </UFormGroup>

            <UFormGroup label="Email">
              <UInput v-model="formData.email" type="email" placeholder="Enter your email" size="lg" color="amber" required />
            </UFormGroup>

            <UFormGroup label="Message">
              <UTextarea v-model="formData.message" placeholder="Write your message here..." size="lg" color="amber" :rows="4" required />
            </UFormGroup>

            <UButton type="submit" color="amber" variant="solid" size="lg" class="w-full" :loading="isSubmitting">
              <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5 mr-2" />
              Send Message
            </UButton>
          </form>

          <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
            <h2 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">Other ways to connect</h2>

            <div class="space-y-4">
              <ULink href="mailto:bugra.keskin@gmail.com" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 mr-2" />
                bugra.keskin@gmail.com
              </ULink>

              <ULink href="https://www.linkedin.com/in/bu%C4%9Fra-keskin-29057538/" target="_blank" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                <UIcon name="i-simple-icons-linkedin" class="w-5 h-5 mr-2" />
                LinkedIn Profile
              </ULink>

              <ULink href="https://github.com/bugrakeskin" target="_blank" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                <UIcon name="i-simple-icons-github" class="w-5 h-5 mr-2" />
                GitHub Profile
              </ULink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);

async function handleSubmit() {
  isSubmitting.value = true;
  try {
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
    console.log("Form submitted:", formData.value);
    // Reset form after successful submission
    formData.value = {
      name: "",
      email: "",
      message: "",
    };
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    isSubmitting.value = false;
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

input,
textarea {
  @apply border-gray-300 dark:border-gray-600;
}
</style>
