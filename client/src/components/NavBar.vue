<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const activeLink = ref('Home'); // Default active link
const isMobileMenuOpen = ref(false);
const router = useRouter();
const route = useRoute(); // Get the current route

const setActive = (link) => {
  activeLink.value = link;
  isMobileMenuOpen.value = false;
};

// Set the active link based on the current route
watchEffect(() => {
  if (route.path === '/') {
    activeLink.value = 'Home';
  } else if (route.path === '/about') {
    activeLink.value = 'About Us';
  } else if (route.path === '/news') {
    activeLink.value = 'News and Update';
  } else if (route.path === '/membership') {
    activeLink.value = 'Membership';
  } else if (route.path === '/contact') {
    activeLink.value = 'Contact Us';
  }
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header class="sticky inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:top-6 md:rounded-3xl  lg:max-w-[1210px]">
    <div class="px-4">
      <div class="flex items-center justify-between">
        <div class="flex shrink-0 md:flex-1">
          <a aria-current="page" class="flex items-center space-x-1" href="/">
            <img class="h-9 w-auto" src="../assets/Stem.png" alt="Logo">
            <p class="text-black font-bold text-lg">Izhi-Nnodo <span class="text-sky-500">Diaspora</span></p>
          </a>
        </div>
        
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-900 focus:outline-none">
            <transition name="fade-slide">
              <svg v-if="!isMobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </transition>
          </button>
        </div>

        <transition name="fade-slide">
          <div v-if="isMobileMenuOpen" class="absolute top-16 left-0 right-0 mx-4 bg-white md:hidden shadow-lg border rounded-lg p-4">
            <RouterLink to="/" :class="{'border-b-2 border-sky-500 font-semibold text-blue-600': activeLink === 'Home'}" @click="setActive('Home')" class="block px-4 py-2 text-sm font-medium text-gray-900 cursor-pointer">Home</RouterLink>
            <RouterLink to="/about" :class="{'border-b-2 border-sky-500 font-semibold text-blue-600': activeLink === 'About Us'}" @click="setActive('About Us')" class="block px-4 py-2 text-sm font-medium text-gray-900 cursor-pointer">About Us</RouterLink>
            <RouterLink to="/news" :class="{'border-b-2 border-sky-500 font-semibold text-blue-600': activeLink === 'News and Update'}" @click="setActive('News and Update')" class="block px-4 py-2 text-sm font-medium text-gray-900 cursor-pointer">News and Update</RouterLink>
            <RouterLink to="/contact" :class="{'border-b-2 border-sky-500 font-semibold text-blue-600': activeLink === 'Contact Us'}" @click="setActive('Contact Us')" class="block px-4 py-2 text-sm font-medium text-gray-900 cursor-pointer">Contact Us</RouterLink>
            <RouterLink to="/membership" class="flex items-center justify-center px-4 py-2 text-sm font-medium cursor-pointer bg-sky-500 text-white rounded-xl mt-2">
              <svg class="shrink-0 size-4 me-1 md:me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Become a Member
            </RouterLink>
          </div>
        </transition>

        <div class="hidden md:flex md:flex-1 md:justify-center md:gap-4">
          <RouterLink to="/" :class="{'border-b-2 border-sky-500 font-semibold text-blue-600': activeLink === 'Home'}" @click="setActive('Home')" class="inline-block px-2 py-1 text-sm font-medium text-gray-900 cursor-pointer">Home</RouterLink>
          <RouterLink to="/about" :class="{'border-b-2 border-sky-500 font-semibold text-blue-600': activeLink === 'About Us'}" @click="setActive('About Us')" class="inline-block px-2 py-1 text-sm font-medium text-gray-900 cursor-pointer">About Us</RouterLink>
          <RouterLink to="/news" :class="{'border-b-2 border-sky-500 font-semibold text-blue-600': activeLink === 'News and Update'}" @click="setActive('News and Update')" class="inline-block px-2 py-1 text-sm font-medium text-gray-900 cursor-pointer">News and Update</RouterLink>
          <RouterLink to="/contact" :class="{'border-b-2 border-sky-500 font-semibold text-blue-600': activeLink === 'Contact Us'}" @click="setActive('Contact Us')" class="inline-block px-2 py-1 text-sm font-medium text-gray-900 cursor-pointer">Contact Us</RouterLink>
        </div>

        <div class="hidden md:flex md:flex-1 md:justify-end">
          <RouterLink to="/membership" class="inline-flex items-center justify-center rounded-xl bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            <svg class="shrink-0 size-4 me-1 md:me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Become a Member
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>