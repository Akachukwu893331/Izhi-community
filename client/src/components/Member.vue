<script>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
</script>
<template>
    <div class="relative py-16 bg-gray-800 mx-4 sm:mx-16 md:mx-32 rounded-xl mt-10">
      <!-- Gradient Background -->
      <div aria-hidden="true"
        class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div class="blur-[106px] h-56 bg-gradient-to-br from-sky-500 to-purple-400 dark:from-sky-500"></div>
        <div class="blur-[106px] h-32 bg-gradient-to-r from-sky-500 to-sky-300 dark:to-indigo-600"></div>
      </div>
  
      <!-- Main Container -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div class="relative">
          <!-- Avatar Group -->
          <div class="flex items-center justify-center -space-x-2">
            <img loading="lazy" width="400" height="400" src="../assets/member 1.jpg" 
              alt="member photo" class="h-8 w-8 rounded-full object-cover">
            <img loading="lazy" width="200" height="200" src="../assets/member 2.jpg" 
              alt="member photo" class="h-12 w-12 rounded-full object-cover">
            <img loading="lazy" width="200" height="200" src="../assets/member 5.jpg" 
              alt="member photo" class="z-10 h-16 w-16 rounded-full object-cover">
            <img loading="lazy" width="200" height="200" src="../assets/member 4.jpg" 
              alt="member photo" class="relative h-12 w-12 rounded-full object-cover">
            <img loading="lazy" width="200" height="200" src="../assets/member 3.jpg" 
              alt="member photo" class="h-8 w-8 rounded-full object-cover">
          </div>
  
          <!-- Content Section -->
          <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12 text-center">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Become a Member and Get Exclusive Offers!
            </h1>
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Members get access to exclusive exhibits and sales. Our memberships cost $99.99 and are billed annually.
            </p>
  
            <!-- Buttons -->
            <div class="flex flex-wrap justify-center gap-6">
              <RouterLink to="/Membership"
                class="relative flex h-12 w-full sm:w-auto items-center cursor-pointer justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-base font-semibold text-white dark:text-dark">JOIN NOW</span>
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
  </style>
  