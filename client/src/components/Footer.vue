<script setup>
import { ref } from 'vue';
</script>

<template>
  <!-- ========== FOOTER ========== -->
  <footer class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-7">
    <div class="py-3 border-t border-gray-200 dark:border-neutral-700">
      <div class="flex flex-wrap justify-between items-center gap-4">
        <!-- Left Section: Copyright -->
        <div class="flex items-center space-x-2">
          <p class="text-sm text-gray-600 dark:text-neutral-400">
            © 2025 Powered By ShieldedBit
          </p>
        </div>

        <!-- Right Section: Social Links with Icons -->
        <ul class="flex flex-wrap items-center space-x-4">
          
          <li>
            <a
              href="#"
              class="text-gray-600 hover:text-sky-500 dark:text-neutral-400 dark:hover:text-sky-500 transition-colors duration-200"
            >
              <span class="sr-only">Facebook</span>
              <i class="fab fa-facebook text-lg"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-600 hover:text-sky-500 dark:text-neutral-400 dark:hover:text-sky-500 transition-colors duration-200"
            >
              <span class="sr-only">Instagram</span>
              <i class="fab fa-instagram text-lg"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-600 hover:text-sky-500 dark:text-neutral-400 dark:hover:text-sky-500 transition-colors duration-200"
            >
              <span class="sr-only">LinkedIn</span>
              <i class="fab fa-linkedin text-lg"></i>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </footer>
  <!-- ========== END FOOTER ========== -->
</template>

<style>
/* Optional additional styles */
</style>