<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="bg-white py-24 px-6 md:px-8 lg:px-16">
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <!-- Text Content -->
      <div class="order-2 lg:order-1">
        <div class="mb-8">
          <span class="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-sky-700 uppercase bg-sky-100 rounded-full">
            About Us
          </span>
        </div>
        
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          Discover Our <span class="text-sky-600">Global Community</span>
        </h2>
        
        <div class="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Ndi Nnodo in Diaspora is a global association uniting Ndi-Izhi around the world. Our mission is to nurture strong community ties, preserve cultural heritage, and support impactful development back home.
          </p>
          <p>
            Through collaboration, we create opportunities, build connections, and drive positive change in Izhi land and beyond.
          </p>
        </div>
        
        <div class="mt-10">
          <RouterLink 
            to="/contact" 
            class="inline-block group"
          >
            <button class="group inline-flex items-center gap-3 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-lg font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-md hover:shadow-lg">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3" />
              </svg>
            </button>
          </RouterLink>
        </div>
      </div>

      <!-- Image Grid with Enhanced Animations -->
      <div class="order-1 lg:order-2 relative">
        <div class="grid grid-cols-2 gap-5 md:gap-6">
          <!-- Image 1 -->
          <div class="relative rounded-2xl overflow-hidden shadow-xl aspect-square transition-all duration-500 group">
            <img 
              src="../assets/img 1.jpg" 
              class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110" 
              alt="Team working" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="text-white font-medium text-lg drop-shadow-lg">Our Community</span>
            </div>
          </div>
          
          <!-- Image 2 -->
          <div class="relative rounded-2xl overflow-hidden shadow-xl mt-10 aspect-square transition-all duration-500 group">
            <img 
              src="../assets/img 3.jpg" 
              class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110" 
              alt="Team at desk" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="text-white font-medium text-lg drop-shadow-lg">Cultural Events</span>
            </div>
          </div>
          
          <!-- Image 3 -->
          <div class="relative rounded-2xl overflow-hidden shadow-xl col-span-2 aspect-[3/1] transition-all duration-500 group">
            <img 
              src="../assets/img 2.jpg" 
              class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110" 
              alt="Team collaboration" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="text-white font-medium text-xl drop-shadow-lg">Global Connections</span>
            </div>
          </div>
        </div>
        
        <!-- Decorative elements -->
        <div class="absolute -z-10 top-0 right-0 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div class="absolute -z-10 bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delay"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 6s ease-in-out 1.5s infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* Smooth image scaling */
.group:hover img {
  transform: scale(1.05);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>