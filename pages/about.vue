<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 animate-fade-in text-gray-900 dark:text-white">About Me</h1>
        
        <div class="prose lg:prose-xl dark:prose-invert animate-slide-up">
          <p class="mb-6 text-gray-700 dark:text-gray-300">
            Hello! I'm a passionate web developer with a keen eye for design and a love for creating 
            seamless user experiences. My journey in web development started with curiosity and has 
            evolved into a professional pursuit of excellence in creating digital solutions.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Skills</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="skill in skills" :key="skill.name" 
                 class="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</h3>
              <div class="mt-2 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                <div class="h-full bg-blue-500 rounded-full" 
                     :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Experience</h2>
          <div class="space-y-6">
            <div v-for="exp in experience" :key="exp.company" 
                 class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 class="font-semibold text-xl text-gray-900 dark:text-white">{{ exp.position }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ exp.company }} | {{ exp.period }}</p>
              <p class="mt-2 text-gray-700 dark:text-gray-300">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { name: 'Frontend Development', level: 90 },
  { name: 'Backend Development', level: 85 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Database Management', level: 80 },
  { name: 'DevOps', level: 70 },
  { name: 'Project Management', level: 85 }
]

const experience = [
  {
    position: 'Senior Web Developer',
    company: 'Tech Company',
    period: '2020 - Present',
    description: 'Leading development of web applications using modern technologies.'
  },
  {
    position: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple client projects using various web technologies.'
  }
]
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
</style>
