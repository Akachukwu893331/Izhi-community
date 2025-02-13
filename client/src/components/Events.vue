<script setup>
import { ref } from 'vue';
</script>

<template>
   <section class="bg-gray-50 py-10 px-6 md:px-32">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-sky-500 mb-6 md:mb-8 text-center md:text-left">Events</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white shadow-lg overflow-hidden border-2 border-sky-500 p-6 md:p-12">
        <!-- Text Section -->
        <div>
          <h3 class="text-lg md:text-2xl font-semibold text-blue-900 mb-3">Izhi Stem Competition</h3>
          <p class="text-gray-600 text-sm md:text-base mb-2">Jan 11, 2025, 10:00 AM – 05:00 PM</p>
          <p class="text-gray-600 text-sm md:text-base mb-6">St Theresa Catholic Cathedral, Abakaliki, Ebonyi State</p>
          <a 
            href="#" 
            class="inline-block px-6 py-3 bg-sky-500 text-white font-medium text-sm rounded-lg shadow-md hover:bg-green-800 transition duration-300">
            Register Now
          </a>
        </div>
        <!-- Image Section -->
        <div>
          <img 
            src="../assets/Stem.jpeg" 
            alt="Innovative futuristic car on display at an expo" 
            class="w-full rounded-md md:h-96 "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Optional additional styles */
</style>
