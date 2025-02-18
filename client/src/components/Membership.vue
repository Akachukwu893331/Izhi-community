<script setup>
import { ref } from 'vue';

// Reactive state
const showModal = ref(false);
const modalMessage = ref('');
const isSuccess = ref(false);

// Function to handle form submission
const submitForm = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
    //  email API
    const response = await fetch('https://example.com/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      modalMessage.value = 'Form submitted successfully! We will get back to you in 48 hours.';
      isSuccess.value = true;
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    modalMessage.value = 'Form not submitted. Please try again later.';
    isSuccess.value = false;
  } finally {
    showModal.value = true;
  }
};

// Function to close the modal
const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <!-- Community Join Form -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">Join Our Community</h1>
        <p class="mt-1 text-gray-600">Fill in the details below to become a part of our community.</p>
      </div>

      <div class="mt-9">
        <!-- Form -->
        <form @submit="submitForm">
          <div class="grid gap-4 lg:gap-6 border border-sky-900 rounded-xl bg-gray-200 p-6">
            <!-- Full Name -->
            <div>
              <label for="full-name" class="block mb-2 text-sm text-gray-700 font-medium">Full Name</label>
              <input type="text" name="full-name" id="full-name" placeholder="Enter your full name" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500" required>
            </div>

            <!-- Email Address -->
            <div>
              <label for="email" class="block mb-2 text-sm text-gray-700 font-medium">Email Address</label>
              <input type="email" name="email" id="email" placeholder="Enter your email address" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500" required>
            </div>

            <!-- Phone Number -->
            <div>
              <label for="phone-number" class="block mb-2 text-sm text-gray-700 font-medium">Phone Number</label>
              <input type="tel" name="phone-number" id="phone-number" placeholder="Enter your phone number" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500" required>
            </div>

            <!-- Preferred Communication Method -->
            <div>
              <label for="communication-method" class="block mb-2 text-sm text-gray-700 font-medium">Preferred Communication Method</label>
              <select name="communication-method" id="communication-method" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500" required>
                <option value="email">--</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text Message</option>
              </select>
            </div>

            <!-- Why Do You Want to Join? -->
            <div>
              <label for="why-join" class="block mb-2 text-sm text-gray-700 font-medium">Why Do You Want to Join?</label>
              <textarea id="why-join" name="why-join" rows="4" placeholder="Tell us a bit about why you'd like to be part of our community" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500" required></textarea>
            </div>
          </div>

          <div class="mt-6 grid">
            <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:bg-sky-700">Join Now</button>
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-gray-500">We’ll be in touch once your submission is reviewed.</p>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </div>
  <!-- End Community Join Form -->

  <!-- Modal -->
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <!-- Success Icon -->
      <div v-if="isSuccess" class="text-center">
        <svg class="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <p class="mt-2 text-green-600 font-semibold">{{ modalMessage }}</p>
      </div>

      <!-- Failure Icon -->
      <div v-else class="text-center">
        <svg class="mx-auto h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <p class="mt-2 text-red-600 font-semibold">{{ modalMessage }}</p>
      </div>

      <button @click="closeModal" class="mt-4 w-full py-2 px-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 focus:outline-none focus:bg-sky-700">Close</button>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>