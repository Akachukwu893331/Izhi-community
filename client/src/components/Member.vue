<script>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
</script>

<template>
  <div class="relative py-16 bg-gray-900 mx-4 sm:mx-12 md:mx-24 rounded-xl mt-16">
    <!-- Gradient Background -->
    <div aria-hidden="true" class="absolute inset-0 w-full h-full m-auto grid grid-cols-2 -space-x-52 opacity-30 dark:opacity-20">
      <div class="blur-[106px] h-56 bg-gradient-to-br from-sky-500 to-purple-600 dark:from-sky-500"></div>
      <div class="blur-[106px] h-32 bg-gradient-to-r from-sky-500 to-sky-400 dark:to-indigo-600"></div>
    </div>

    <!-- Main Container -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div class="relative">
        <!-- Avatar Group -->
        <div class="flex justify-center items-center -space-x-4">
          <img loading="lazy" width="70" height="70" src="../assets/member 1.jpg" alt="member photo" class="h-12 w-12 rounded-full object-cover border-2 border-white shadow-xl">
          <img loading="lazy" width="80" height="80" src="../assets/member 2.jpg" alt="member photo" class="h-16 w-16 rounded-full object-cover border-2 border-white shadow-xl">
          <img loading="lazy" width="90" height="90" src="../assets/member 5.jpg" alt="member photo" class="z-10 h-20 w-20 rounded-full object-cover border-2 border-white shadow-xl">
          <img loading="lazy" width="80" height="80" src="../assets/member 4.jpg" alt="member photo" class="relative h-16 w-16 rounded-full object-cover border-2 border-white shadow-xl">
          <img loading="lazy" width="70" height="70" src="../assets/member 3.jpg" alt="member photo" class="h-12 w-12 rounded-full object-cover border-2 border-white shadow-xl">
        </div>

        <!-- Content Section -->
        <div class="mt-8 m-auto space-y-8 md:w-8/12 lg:w-7/12 text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 dark:text-white tracking-tight">
            Become a Member Today
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 dark:text-gray-200">
            Take the first step toward shaping a better future for young ones.
             Discover how you can make an impact today.
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap justify-center gap-6">
            <RouterLink to="/Membership"
              class="relative inline-flex h-14 w-full sm:w-auto items-center justify-center px-8 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out transform active:scale-95 active:shadow-sm">
              JOIN NOW
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensuring Mobile Responsiveness */
@media (max-width: 640px) {
  .relative.py-16 {
    padding: 2rem 1rem;
  }
  h1 {
    font-size: 1.75rem;
  }
  p {
    font-size: 0.875rem;
  }
  .flex.flex-wrap {
    flex-direction: column;
  }
}

/* Avatar Shadow & Hover Effect */
img:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Button Hover Effects */
button:hover,
a:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Gradient Background Adjustment for Dark Mode */
@media (prefers-color-scheme: dark) {
  .bg-gradient-to-br {
    background-image: linear-gradient(135deg, #3b82f6, #9333ea);
  }
  .bg-gradient-to-r {
    background-image: linear-gradient(90deg, #3b82f6, #14b8a6);
  }
}
</style>
