<template>
  <div class="space-y-8 w-full max-w-lg mt-24">
    <h1 class="text-4xl font-bold text-center animate-fade-in text-gray-900 dark:text-white">Get in Touch</h1>

    <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 animate-slide-up">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <UFormGroup label="Name">
          <UInput v-model="formData.name" placeholder="Enter your name" size="lg" color="amber" required />
          <div v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</div>
        </UFormGroup>

        <UFormGroup label="Email">
          <UInput v-model="formData.email" type="email" placeholder="Enter your email" size="lg" color="amber" required />
          <div v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</div>
        </UFormGroup>

        <UFormGroup label="Message">
          <UTextarea v-model="formData.message" placeholder="Write your message here..." size="lg" color="amber" :rows="4" required />
          <div v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</div>
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

          <NuxtLink to="https://www.linkedin.com/in/bu%C4%9Fra-keskin-29057538/" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
            <UIcon name="i-simple-icons-linkedin" class="w-5 h-5 mr-2" />
            LinkedIn Profile
          </NuxtLink>

          <NuxtLink to="https://github.com/bugrakeskin" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
            <UIcon name="i-simple-icons-github" class="w-5 h-5 mr-2" />
            GitHub Profile
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const toast = useToast();
const mail = useMail();

// Form validation
const errors = ref({});

function validateForm() {
  errors.value = {};

  if (!formData.value.name.trim()) {
    errors.value.name = "Name is required";
  }

  if (!formData.value.email.trim()) {
    errors.value.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = "Please enter a valid email address";
  }

  if (!formData.value.message.trim()) {
    errors.value.message = "Message is required";
  }

  return Object.keys(errors.value).length === 0;
}

async function handleSubmit() {
  if (!validateForm()) {
    toast.add({
      title: "Validation Error",
      description: "Please check the form for errors.",
      color: "red",
    });
    return;
  }

  isSubmitting.value = true;

  try {
    await mail.send({
      from: formData.value.email,
      subject: `[Website Contact] ${formData.value.name} - Personal Website Contact Form`,
      text: `
Name: ${formData.value.name}
Email: ${formData.value.email}

Message:
${formData.value.message}
      `,
    });

    toast.add({
      title: "Success!",
      description: "Your message has been sent successfully.",
      color: "green",
    });

    // Reset form
    formData.value = {
      name: "",
      email: "",
      message: "",
    };
  } catch (error) {
    console.error("Mail error:", error);
    toast.add({
      title: "Error",
      description: "Failed to send message. Please try again later or use alternative contact methods below.",
      color: "red",
    });
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
