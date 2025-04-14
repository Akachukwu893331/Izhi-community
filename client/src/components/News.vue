<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import backgroundImage from '../assets/event1.png';
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-gray-900">
      <div class="absolute inset-0 z-0">
        <img :src="backgroundImage" alt="STEM Competition" class="w-full h-full object-cover opacity-40">
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            IZHI STEM COMPETITION 2024/2025
          </h1>
          <p class="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            Empowering the next generation of Izhi innovators through STEM education
          </p>
          <div class="mt-10 flex justify-center gap-4">
            <RouterLink to="/Contact" class="px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-emerald-700 md:py-2 md:text-lg md:px-10 transition duration-300">
              Register Now
            </RouterLink>
            <RouterLink to="/about" class="px-8 py-2 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-gray-100 md:py-2 md:text-lg md:px-10 transition duration-300">
              Learn More
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="bg-white shadow-xl rounded-lg overflow-hidden">
        <!-- Header with organization info -->
        <div class="bg-gradient-to-r from-blue-800 to-emerald-700 p-6 sm:p-8">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-white">IZHI STEM CUP COMPETITION</h2>
              <p class="mt-1 text-blue-100">2024/2025 Season</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-blue-200">Organized by</p>
              <p class="text-lg font-medium text-white">Izhi in Diaspora</p>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 sm:p-8 md:p-10">
          <div class="prose prose-lg max-w-none text-gray-700">
            <p class="lead">
              The <strong>IZHI STEM CUP COMPETITION 2024/2025</strong> is a prestigious initiative by Izhi in 
              Diaspora to foster STEM education among talented students of the Izhi clan. 
              This annual competition brings together the brightest young minds to showcase 
              their skills in Science, Technology, Engineering, and Mathematics.
            </p>

            <div class="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Competition Overview</h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <svg class="h-5 w-5 text-emerald-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Open to junior and senior secondary students</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="h-5 w-5 text-emerald-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Focus on practical STEM applications</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="h-5 w-5 text-emerald-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cash prizes and educational grants for winners</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="h-5 w-5 text-emerald-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mentorship opportunities with STEM professionals</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Key Details</h3>
                <div class="space-y-4">
                  <div>
                    <h4 class="font-semibold text-gray-800">Date & Time</h4>
                    <p class="text-gray-600">December 7, 2024 at 10:00 AM prompt</p>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Venue</h4>
                    <p class="text-gray-600">Designated examination centers across Izhi land</p>
                    <p class="text-sm text-gray-500 mt-1">Specific venue details will be provided upon registration</p>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Registration Deadline</h4>
                    <p class="text-gray-600">November 15, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 class="text-xl font-bold text-blue-800 mb-4">Why Participate?</h3>
              <div class="grid md:grid-cols-3 gap-6">
                <div class="text-center">
                  <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800">Recognition</h4>
                  <p class="text-sm text-gray-600 mt-2">Gain recognition from academic and industry leaders</p>
                </div>
                <div class="text-center">
                  <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800">Scholarships</h4>
                  <p class="text-sm text-gray-600 mt-2">Opportunity to win educational scholarships</p>
                </div>
                <div class="text-center">
                  <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800">Networking</h4>
                  <p class="text-sm text-gray-600 mt-2">Connect with like-minded peers and mentors</p>
                </div>
              </div>
            </div>

            <div class="mt-12 text-center">
              <RouterLink to="/contact" class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 transition duration-300 md:py-4 md:text-lg md:px-10">
                Contact Our Team
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Footer with tags -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div class="flex flex-wrap items-center justify-between">
           
            <div class="flex flex-wrap gap-2 mt-2 sm:mt-0">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">#STEM</span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">#Education</span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">#Innovation</span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">#Competition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose {
  line-height: 1.75;
}

.prose .lead {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #4b5563;
}

.prose ul {
  list-style-type: none;
  padding-left: 0;
}

.prose ul li {
  position: relative;
  padding-left: 0;
}
</style>