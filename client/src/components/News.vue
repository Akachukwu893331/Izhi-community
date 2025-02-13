<script setup>
import { ref } from 'vue';
import backgroundImage from '../assets/event1.png';
</script>

<template>
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <!-- Hero Section with Background Image -->
    <div class="bg-cover bg-center object-cover text-center overflow-hidden rounded-lg shadow-lg"
         :style="{ 'background-image': `url(${backgroundImage})`, 'min-height': '500px' }"
         title="STEM Competition">
      <div class="bg-black bg-opacity-70 h-full flex items-center justify-center">
        <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold">IZHI STEM CUP COMPETITION 2024/2025</h1>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-3xl mx-auto">
      <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal shadow-lg">
        <div class="bg-white relative top-0 -mt-32 p-5 sm:p-10">
          <!-- Competition Title -->
          <h1 class="text-gray-900 font-bold text-3xl mb-2">IZHI STEM CUP COMPETITION 2024/2025</h1>

          <!-- Organized By -->
          <p class="text-gray-700 text-xs mt-2">Organized By:
            <a href="#" class="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              Izhi in Diaspora
            </a>
          </p>

          <!-- Competition Details -->
          <p class="text-base leading-8 my-5">
            Izhi in Diaspora, an umbrella body of Izhi sons and daughters residing in Europe, America, Asia, and Australia, wishes to invite you to the <strong>IZHI STEM CUP COMPETITION 2024/2025</strong>. This competition aims to promote STEM Education among the Indigent Students of the Izhi clan. We primarily encourage junior and senior secondary students of the Izhi clan in every public school within the Izhi clan to register.
          </p>

          <!-- Exam Details -->
          <h3 class="text-2xl font-bold my-5">Exam Details</h3>
          <p class="text-base leading-8 my-5">
            <strong>Exam Date:</strong> December 7, 2024.<br>
            <strong>Exam Time:</strong> 10:00 AM prompt.<br>
            <strong>Venue:</strong> Go to the exam venue on December 7, 2024, by yourself!
          </p>

          <!-- Call to Action -->
          <div class="my-5">
            <a href="#" class="bg-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-500 ease-in-out">
              Register Now
            </a>
          </div>

          <!-- Tags -->
          <div class="mt-5">
            <a href="#" class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #STEM
            </a>,
            <a href="#" class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #Education
            </a>,
            <a href="#" class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #IzhiInDiaspora
            </a>,
            <a href="#" class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #Competition
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles here if needed */
</style>