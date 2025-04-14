<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Atom, Users2, BrainCircuit, GraduationCap, Handshake, Rocket, BookOpen, Globe, Cpu } from 'lucide-vue-next';

const initiatives = [
  {
    title: "STEM Education",
    description: "Offering scholarships, workshops, and mentorship to empower Izhi youth with essential STEM skills.",
    icon: BookOpen,
    hoverIcon: Atom,
    color: "bg-sky-100",
    hoverColor: "hover:bg-sky-500",
    accentColor: "text-sky-500"
  },
  {
    title: "Community Outreach",
    description: "Fostering sustainable solutions and promoting inclusivity for a brighter future in the community.",
    icon: Globe,
    hoverIcon: Users2,
    color: "bg-emerald-100",
    hoverColor: "hover:bg-emerald-500",
    accentColor: "text-emerald-500"
  },
  {
    title: "Skill Development",
    description: "Providing vocational training and entrepreneurship support to boost economic independence.",
    icon: Cpu,
    hoverIcon: BrainCircuit,
    color: "bg-blue-100",
    hoverColor: "hover:bg-blue-500",
    accentColor: "text-blue-500"
  }
];

const activeIndex = ref(0);
const setActiveSlide = (index) => activeIndex.value = index;
const modules = [Autoplay, Pagination];
</script>

<template>
  <!-- Desktop Section -->
  <section class="bg-white py-24 px-6 lg:px-8 xl:px-16 hidden sm:block">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-20">
        <span class="text-sm font-semibold text-gray-600 uppercase tracking-wider">Our Focus Areas</span>
        <h2 class="mt-3 text-4xl md:text-5xl font-bold text-gray-900">Our Initiatives</h2>
        <div class="mt-6 w-24 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div 
          v-for="(initiative, index) in initiatives" 
          :key="initiative.title" 
          class="group relative overflow-hidden rounded-xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-lg border border-gray-200"
          :class="initiative.color"
        >
          <!-- Icon Container -->
          <div class="relative h-24 w-24 mb-8 mx-auto">
            <!-- Default Icon (visible when not hovered) -->
            <div class="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:-translate-y-2">
              <component 
                :is="initiative.icon" 
                class="h-12 w-12"
                :class="initiative.accentColor"
              />
            </div>
            
            <!-- Hover Icon (appears on hover) -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <component 
                :is="initiative.hoverIcon" 
                class="h-12 w-12"
                :class="initiative.hoverColor === 'hover:bg-sky-500' ? 'text-sky-500' : 'text-emerald-500'"
              />
            </div>
            
            <!-- Animated Background Circle -->
            <div class="absolute inset-0 rounded-full scale-0 transition-all duration-300 group-hover:scale-100"
                 :class="initiative.hoverColor.replace('hover:', 'bg-') + ' opacity-20'"></div>
          </div>
          
          <!-- Content -->
          <div class="text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors duration-300">
              {{ initiative.title }}
            </h3>
            
            <p class="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
              {{ initiative.description }}
            </p>
            
            <a href="#" class="inline-flex items-center text-sm font-medium group-hover:text-gray-800 transition-colors duration-300"
               :class="initiative.accentColor">
              Learn More
              <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mobile Carousel Section -->
  <section class="bg-white py-16 px-6 sm:hidden">
    <div class="max-w-md mx-auto">
      <div class="text-center mb-12">
        <span class="text-sm font-semibold text-gray-600 uppercase tracking-wider">Our Focus Areas</span>
        <h2 class="mt-3 text-3xl font-bold text-gray-900">Building Futures Through Innovation</h2>
        <div class="mt-4 w-20 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      <swiper 
        @slideChange="setActiveSlide($event.activeIndex)"
        :modules="modules"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        class="w-full mb-12 rounded-xl"
      >
        <swiper-slide v-for="(initiative, index) in initiatives" :key="initiative.title">
          <div class="h-full p-8 rounded-xl border border-gray-200" :class="initiative.color">
            <div class="relative h-24 w-24 mb-8 mx-auto">
              <component 
                :is="initiative.icon" 
                class="h-12 w-12 mx-auto"
                :class="initiative.accentColor"
              />
              <div class="absolute inset-0 rounded-full opacity-10"
                   :class="initiative.hoverColor.replace('hover:', 'bg-')"></div>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-900 mb-3 text-center">
              {{ initiative.title }}
            </h3>
            
            <p class="text-gray-600 mb-6 leading-relaxed text-center">
              {{ initiative.description }}
            </p>
            
            <div class="text-center">
              <a href="#" class="inline-flex items-center text-sm font-medium mx-auto"
                 :class="initiative.accentColor">
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
/* Custom pagination bullets for mobile */
.swiper-pagination-bullet {
  @apply h-2.5 w-2.5 bg-gray-300 opacity-100;
}
.swiper-pagination-bullet-active {
  @apply bg-gradient-to-r from-sky-500 to-emerald-500 w-6 rounded-full;
}

/* Smooth transitions */
.swiper-slide {
  transition: all 400ms ease;
}

/* Card hover effects */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Icon animation timing */
.group:hover .group-hover\:text-white {
  transition-delay: 150ms;
}
</style>
