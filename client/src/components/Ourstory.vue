<script setup>
import { ref } from 'vue';
</script>

<template>
  <section class="bg-gray-50 py-10 px-6 md:px-32">
    <h2 class="text-3xl md:text-4xl font-bold text-sky-500 mb-6 md:mb-8 text-center md:text-left">
      Our Story
    </h2>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center md:border-b-2 border-sky-500">
      <!-- Image Section -->
      <div class="relative">
        <img 
          src="../assets/who we are.jpg" 
          alt="Group cleaning park, symbolizing community effort" 
          class="shadow-md object-cover w-full h-72 md:h-96 rounded-tr-md rounded-tl-md"
        />
      </div>

      <!-- Text Section -->
      <div class="text-left px-4 md:px-5">
        <h3 class="text-lg md:text-xl font-semibold text-blue-900 mb-3 md:mb-4">
          Who We Are
        </h3>
        <p class="text-gray-700 text-[15px] md:text-[16px] leading-relaxed">
          Izhi Nnodo in Diaspora is a vibrant community association dedicated to uniting Izhi sons 
          and daughters worldwide. Our mission is to foster connections, enabling contributions 
          towards positive development in our homeland. With a strong focus on advancing STEM 
          Education among underprivileged Izhi students, we strive to make a meaningful difference 
          in education and empowerment.
        </p>
      </div>
    </div>
  </section>
</template>

<style>
/* Optional custom styling can be added here */
</style>
