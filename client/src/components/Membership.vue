<script>
  import { ref } from 'vue';
</script>
<template>
<!-- Community Join Form -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto  ">
  <div class="max-w-xl mx-auto">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
        Join Our Community
      </h1>
      <p class="mt-1 text-gray-600">
        Fill in the details below to become a part of our community.
      </p>
    </div>

    <div class="mt-9">
      <!-- Form -->
      <form>
        <div class="grid gap-4 lg:gap-6  border border-sky-900 rounded-xl  bg-gray-200 p-6">
          <!-- Full Name -->
          <div>
            <label for="full-name" class="block mb-2 text-sm text-gray-700 font-medium">Full Name</label>
            <input type="text" name="full-name" id="full-name" placeholder="Enter your full name" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500">
          </div>

          <!-- Email Address -->
          <div>
            <label for="email" class="block mb-2 text-sm text-gray-700 font-medium">Email Address</label>
            <input type="email" name="email" id="email" placeholder="Enter your email address" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500">
          </div>

          <!-- Phone Number -->
          <div>
            <label for="phone-number" class="block mb-2 text-sm text-gray-700 font-medium">Phone Number</label>
            <input type="tel" name="phone-number" id="phone-number" placeholder="Enter your phone number" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500">
          </div>

          <!-- Preferred Communication Method -->
          <div>
            <label for="communication-method" class="block mb-2 text-sm text-gray-700 font-medium">Preferred Communication Method</label>
            <select name="communication-method" id="communication-method" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500">
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="text">Text Message</option>
            </select>
          </div>

          <!-- Why Do You Want to Join? -->
          <div>
            <label for="why-join" class="block mb-2 text-sm text-gray-700 font-medium">Why Do You Want to Join?</label>
            <textarea id="why-join" name="why-join" rows="4" placeholder="Tell us a bit about why you'd like to be part of our community" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500"></textarea>
          </div>
        </div>

        <div class="mt-6 grid">
          <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:bg-sky-700">Join Now</button>
        </div>

        <div class="mt-3 text-center">
          <p class="text-sm text-gray-500">
            We’ll be in touch once your submission is reviewed.
          </p>
        </div>
      </form>
      <!-- End Form -->
    </div>
  </div>
</div>
<!-- End Community Join Form -->


</template>
  
  
<style scoped>
 
</style>
  