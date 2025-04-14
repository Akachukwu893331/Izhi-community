<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="relative bg-gradient-to-b from-gray-50 to-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
    <!-- Decorative elements - enhanced with animation -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
      <div class="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-sky-400 mix-blend-multiply filter blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-emerald-300 mix-blend-multiply filter blur-3xl animate-float-medium"></div>
      <div class="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-amber-300 mix-blend-multiply filter blur-3xl animate-float-fast opacity-70"></div>
    </div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section header -->
      <div class="text-center md:text-left mb-6">
        <span class="inline-block text-lg font-semibold tracking-wider text-sky-600 uppercase relative pb-2">
          Our identity
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"></span>
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Image Section with modern frame  -->
        <div class="relative group">
          <div class="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-400 to-emerald-400 opacity-20 group-hover:opacity-30 transition-all duration-500 blur-md group-hover:blur-lg"></div>
          <div class="relative overflow-hidden rounded-2xl shadow-2xl ">
            <img 
              src="../assets/who we are.jpg" 
              alt="Group cleaning park, symbolizing community effort" 
              class="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6 text-white">
              <span class="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-sky-600 rounded-full mb-2">Community Action</span>
              <h4 class="text-xl font-bold">Together We Thrive</h4>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h3 class="text-3xl md:text-2xl font-bold text-gray-900 leading-tight mb-4">
              Uniting <span class="text-transparent bg-clip-text bg-sky-500">Izhi-Nnodo</span> Worldwide
            </h3>
            
            <p class="text-lg md:text-[15px] text-gray-600 leading-relaxed mb-6">
              Izhi Nnodo in Diaspora is a vibrant community association dedicated to uniting Izhi sons and daughters worldwide through cultural preservation, professional networking, and community development.
            </p>
          </div>
          
          <div class="space-y-5">
            <div class="flex items-start space-x-4 group">
              <div class="flex-shrink-0 mt-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-sky-100 text-sky-600 shadow-md group-hover:shadow-lg group-hover:bg-sky-50">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-xl font-semibold text-gray-900 mb-1">Global Network</h4>
                <p class="text-gray-600">Connecting Izhi professionals across 5 continents to share knowledge, resources, and opportunities for mutual growth.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4 group">
              <div class="flex-shrink-0 mt-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 text-emerald-600 shadow-md group-hover:shadow-lg group-hover:bg-emerald-50">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-xl font-semibold text-gray-900 mb-1">STEM Revolution</h4>
                <p class="text-gray-600">Transforming education through cutting-edge STEM programs, digital infrastructure, and youth mentorship initiatives.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4 group">
              <div class="flex-shrink-0 mt-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-amber-100 text-amber-600 shadow-md group-hover:shadow-lg group-hover:bg-amber-50">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656zM10 15.657l-4.243-4.243a2 2 0 112.828-2.828L10 10.343l1.415-1.414a2 2 0 112.828 2.828L10 15.657z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-xl font-semibold text-gray-900 mb-1">Sustainable Impact</h4>
                <p class="text-gray-600">Implementing community-led development projects with measurable long-term results and transparent accountability.</p>
              </div>
            </div>
          </div>
          
          <div class="pt-6 flex flex-wrap gap-4">
            <router-link 
              to="/Membership" 
              class="inline-flex items-center px-8 cursor-pointer py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-sky-500  hover:bg-sky-700  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transform hover:-translate-y-1"
              >
             Join Our Community
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations */
@keyframes float-slow {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-20px) translateX(10px); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-15px) translateX(-15px); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-10px) translateX(5px); }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

/* Image hover effect */
.group:hover .absolute {
  transform: translateY(-5px);
}

img {
  transform-origin: center;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.duration-700 {
  transition-duration: 700ms;
}

/* Gradient text */
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>