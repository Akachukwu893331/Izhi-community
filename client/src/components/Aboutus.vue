<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center max-w-screen mx-auto sm:mx-32 bg">
    <!-- Image Section -->
    <div class="w-full sm:w-1/2 p-4 sm:p-10">
      <div class="image object-center text-center">
        <img src="https://i.imgur.com/WbQnbas.png" class="w-full h-auto" alt="Community Image">
      </div>
    </div>

    <!-- Text Section -->
    <div class="w-full sm:w-1/2 p-4 sm:p-5">
      <div class="text">
        <span class="text-gray-500 border-b-2 border-sky-500 uppercase">About us</span>
        <h2 class="my-4 font-bold text-3xl sm:text-4xl">
          About <span class="text-sky-500">Our Community</span>
        </h2>
        <p class="text-gray-700 text-justify">
          Ndi Nnodo in Diaspora is an association created for Ndi-Izhi to stay connected and support development at home.
          It serves as a platform for networking, collaboration, and community engagement.
          The group fosters unity and preserves cultural heritage among members abroad.
          Through collective efforts, it contributes to positive changes in Izhi land.
          Its mission is to empower and uplift the Izhi community both locally and globally.
        </p>
      </div>
    </div>
  </div>
</template>