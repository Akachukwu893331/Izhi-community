<script setup>
import { Mail } from 'lucide-vue-next';
</script>

<template>
    <section class="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <p class="text-xs font-medium text-gray-500 uppercase tracking-widest">Contact Support</p>
        <h2 class="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          We're here to help
        </h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or need assistance? Our team is ready to provide the support you need.
        </p>
      </div>
  
      <div class="mt-16 max-w-md mx-auto">
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-all duration-200">
          <div class="flex justify-center">
            <div class="bg-sky-50 p-4 rounded-full">
              <Mail class="w-8 h-8 text-sky-600" />
            </div>
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-900">Email Support</h3>
          <p class="mt-3 text-gray-600">
            For inquiries or assistance, please reach out via email. We typically respond within 24 hours.
          </p>
          <div class="mt-6">
            <a 
              href="mailto:izhinnodoindiaspora@gmail.com" 
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 "
            >
              Email Us
            </a>
          </div>
          <div class="mt-6">
            <p class="text-sm text-gray-500">Or contact us directly at</p>
            <p class="mt-1 text-sky-600 font-medium">izhinnodoindiaspora@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
</style>