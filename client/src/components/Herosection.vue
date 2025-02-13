<script setup>
import heroImage from '../assets/hero.jpg';
</script>

<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div 
      class="relative w-full h-[91vh] bg-cover bg-center mb-16" 
      :style="{ backgroundImage: 'url(' + heroImage + ')' }"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-70"></div>

      <!-- Content for Large Screens -->
      <div class="hidden lg:flex relative z-10 top-[290px] max-w-4xl mx-auto px-6 sm:px-12 text-left flex-col justify-left items-left -translate-x-5">
        <h1 class="text-white text-4xl lg:text-6xl font-bold leading-tight">
          Connect Globally,<br class="text-sky-500">Impact Locally
        </h1>
        <p class="text-white text-lg sm:text-xl lg:text-base mt-3">
          Bringing Izhi Community Together for Positive Change
        </p>
      </div>

      <!-- Content for Mobile & Small Screens -->
      <div class="lg:hidden flex relative z-10 top-[200px] max-w-md mx-auto px-4 text-center">
        <div class="text-white">
          <h1 class="text-4xl sm:text-4xl font-bold">
            Connect Globally,<br class="text-sky-500">Impact Locally
          </h1>
          <p class="text-lg sm:text-xl mt-2">
            Bringing Izhi Community Together for Positive Change
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
