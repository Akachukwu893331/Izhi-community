<script setup>
import { Facebook, Instagram, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-white w-full py-5 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col space-y-8 md:space-y-0">
        <!-- Mobile: Stacked layout -->
        <div class="md:hidden flex flex-col items-center space-y-6">
          <div class="flex space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61571275823470" 
               class="text-gray-500 hover:text-blue-600 transition-colors" 
               aria-label="Facebook">
              <Facebook class="w-6 h-6" />
            </a>
            <a href="#" 
               class="text-gray-500 hover:text-pink-600 transition-colors" 
               aria-label="Instagram">
              <Instagram class="w-6 h-6" />
            </a>
            <a href="#" 
               class="text-gray-500 hover:text-red-600 transition-colors" 
               aria-label="Email">
              <Mail class="w-6 h-6" />
            </a>
          </div>
          
          <div class="text-center space-y-2">
            <p class="text-sm text-gray-600">
              © 2025 ShieldedBit. All rights reserved.
            </p>
            <div class="flex justify-center space-x-4">
              <a href="#" class="text-sm text-gray-600 hover:text-sky-600 transition-colors">Privacy</a>
              <a href="#" class="text-sm text-gray-600 hover:text-sky-600 transition-colors">Terms</a>
              <a href="#" class="text-sm text-gray-600 hover:text-sky-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>

        <!-- Desktop: Horizontal layout -->
        <div class="hidden md:flex md:items-center md:justify-between">
          <div class="flex items-center space-x-6">
            <p class="text-sm text-gray-600">
              © 2025 ShieldedBit. All rights reserved.
            </p>
            <div class="h-4 w-px bg-gray-300"></div>
            <div class="flex space-x-4">
              <a href="#" class="text-sm text-gray-600 hover:text-sky-600 transition-colors">Privacy Policy</a>
              <a href="#" class="text-sm text-gray-600 hover:text-sky-600 transition-colors">Terms of Service</a>
              <a href="#" class="text-sm text-gray-600 hover:text-sky-600 transition-colors">Cookies</a>
            </div>
          </div>

          <div class="flex space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61571275823470" 
               class="text-gray-500 hover:text-blue-600 transition-colors" 
               aria-label="Facebook">
              <Facebook class="w-6 h-6" />
            </a>
            <a href="#" 
               class="text-gray-500 hover:text-pink-600 transition-colors" 
               aria-label="Instagram">
              <Instagram class="w-6 h-6" />
            </a>
            <a href="#" 
               class="text-gray-500 hover:text-red-600 transition-colors" 
               aria-label="Email">
              <Mail class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  transition: color 0.2s ease;
}

a:hover {
  transform: translateY(-1px);
}

/* Smoother transitions for mobile tap */
@media (max-width: 767px) {
  a {
    padding: 0.25rem;
    display: inline-block;
  }
}
</style>