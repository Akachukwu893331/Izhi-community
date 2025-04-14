<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-8 lg:px-12 xl:px-12">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <span class="text-sm md:text-base font-semibold text-sky-600 uppercase tracking-wider">Upcoming Events</span>
        <h2 class="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Discover Our STEM Initiatives</h2>
        <div class="mt-4 w-20 h-1 bg-sky-500 mx-auto"></div>
      </div>
      
      <!-- Event Card -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transform transition-all hover:shadow-2xl">
        <!-- Image Section -->
        <div class="h-full overflow-hidden">
          <img 
            src="../assets/Stem.jpeg" 
            alt="Students participating in STEM competition at St Theresa Catholic Cathedral"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <!-- Text Section -->
        <div class="p-8 md:p-10">
          <div class="flex items-center mb-4">
            <div class="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Competition
            </div>
            <span class="ml-3 text-sm text-gray-500">STEM Education</span>
          </div>
          
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Izhi STEM Competition 2025</h3>
          
          <div class="flex items-center text-gray-600 mb-4">
            <svg class="w-5 h-5 mr-2 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="text-sm md:text-base">January 11, 2025 | 10:00 AM – 05:00 PM</span>
          </div>
          
          <div class="flex items-center text-gray-600 mb-6">
            <svg class="w-5 h-5 mr-2 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="text-sm md:text-base">St Theresa Catholic Cathedral, Abakaliki, Ebonyi State</span>
          </div>
          
          <p class="text-gray-600 mb-8 leading-relaxed">
            Join us for the annual Izhi STEM Competition where young innovators showcase their talents. This event brings together the brightest minds to solve real-world challenges through science and technology.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <Router-Link 
              to="/Contact"
              class="px-6 py-3 bg-sky-600 text-white font-medium rounded-lg shadow-md hover:bg-sky-700 transition duration-300 text-center flex items-center justify-center"
            >
              Contact Us Now
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Router-Link>
            <a 
              href="#"
              class="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions for interactive elements */
a, button, img {
  transition: all 0.3s ease;
}

/* Custom shadow for the card */
.shadow-xl {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>