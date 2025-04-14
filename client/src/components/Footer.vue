<script setup>
import { Facebook, Instagram, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-gray-120 w-full py-12 px-4 sm:px-6 lg:px-8 mt-40">
    <div class="max-w-6xl mx-auto">
      <div class="pt-8 border-t border-gray-200 dark:border-neutral-800">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex items-center space-x-4">
            <p class="text-sm text-gray-800">
              © 2025 ShieldedBit. All rights reserved.
            </p>
            <div class="hidden md:block h-4 w-px bg-gray-300 dark:bg-neutral-700"></div>
            <div class="space-x-4 hidden md:block">
              <a href="#" class="text-sm text-gray-800 hover:text-sky-600  dark:hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" class="text-sm text-gray-800 hover:text-sky-600  dark:hover:text-blue-500 transition-colors">Terms of Service</a>
              <a href="#" class="text-sm text-gray-800 hover:text-sky-600  dark:hover:text-blue-500 transition-colors">Cookies</a>
            </div>
          </div>

          <div class="mt-4 md:mt-0 flex space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61571275823470" class="text-gray-500 hover:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 transition-colors" aria-label="Facebook">
              <Facebook class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-pink-600 dark:text-neutral-500 dark:hover:text-pink-500 transition-colors" aria-label="Instagram">
              <Instagram class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-red-600 dark:text-neutral-500 dark:hover:text-red-500 transition-colors" aria-label="Gmail">
              <Mail class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div class="mt-4 md:hidden space-x-4">
          <a href="#" class="text-sm text-gray-800 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500 transition-colors">Privacy</a>
          <a href="#" class="text-sm text-gray-800 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500 transition-colors">Terms</a>
          <a href="#" class="text-sm text-gray-800 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500 transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>



<style scoped>
a, button {
  transition: color 0.2s ease, transform 0.2s ease;
}

a:hover {
  transform: translateY(-1px);
}
</style>