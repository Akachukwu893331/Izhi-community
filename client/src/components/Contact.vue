<script setup>
import { Mail, Phone } from 'lucide-vue-next';
</script>


<template>
    <section class="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center mt-20">
        <p class="text-sm font-semibold text-sky-500 uppercase tracking-wide">Ready to support</p>
        <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
          Anything unclear or <span class="italic">need help ?</span>
        </h2>
        <p class="mt-4 text-gray-500">Relax, we are ready to support 24/7 for you</p>
      </div>
  
      <div class="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        <div class="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <div class="flex justify-center text-sky-500 mb-4">
            <Mail class="w-10 h-10" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900">Mail Us</h3>
          <p class="text-gray-500 mt-2">Contact us to seek help from us, we will help you as soon as possible</p>
          <p class="text-sky-500 mt-2 font-medium">izhinnodoindiaspora@gmail.com</p>
          <button class="mt-4 px-5 py-2 bg-sky-500 text-white rounded-full text-sm hover:bg-sky-600 transition font-semibold">Contact</button>
        </div>
  
        <div class="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <div class="flex justify-center text-sky-500 mb-4">
            <Phone class="w-10 h-10" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900">Call Us</h3>
          <p class="text-gray-500 mt-2">Contact us to seek help from us, we will help you as soon as possible</p>
          <p class="text-sky-500 mt-2 font-medium">+08 128 903427</p>
          <button class="mt-4 px-5 py-2 bg-sky-500 text-white rounded-full text-sm hover:bg-sky-600 transition font-semibold">Call Now</button>
        </div>
      </div>
    </section>
  </template>
  

  <style scoped>
  </style>
  