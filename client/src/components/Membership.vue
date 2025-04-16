<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const modalMessage = ref('');
const isSuccess = ref(false);
const isLoading = ref(false);

const submitForm = async (event) => {
  event.preventDefault();
  isLoading.value = true;
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  
  try {
    // Using FormSubmit.co to send to Gmail
    const response = await fetch('https://formsubmit.co/ajax/izhinolediaspora@gmail.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        _subject: 'New Community Member Application',
        _template: 'table'
      })
    });

    const result = await response.json();
    
    if (response.ok && result.success === "true") {
      modalMessage.value = 'Submission successful! We will contact you within 24 hours.';
      isSuccess.value = true;
      event.target.reset(); // Clear form on success
    } else {
      throw new Error(result.message || 'Submission failed');
    }
  } catch (error) {
    modalMessage.value = `Submission failed: ${error.message}. Please try again or contact us directly.`;
    isSuccess.value = false;
  } finally {
    isLoading.value = false;
    showModal.value = true;
  }
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <!-- Enhanced Community Join Form -->
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          Join Our Global Community
        </h1>
        <p class="mt-4 text-lg text-gray-600 max-w-prose mx-auto">
          Become part of our vibrant network connecting Ndi-Izhi worldwide.
        </p>
      </div>

      <!-- Card Form -->
      <div class="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div class="p-8 sm:p-10">
          <form @submit="submitForm" class="space-y-6">
            <!-- Form Grid -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <!-- Full Name -->
              <div class="sm:col-span-2">
                <label for="full-name" class="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span class="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="full-name" 
                  id="full-name" 
                  required
                  placeholder="John Doe"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                >
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                  Email <span class="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                >
              </div>

              <!-- Phone -->
              <div>
                <label for="phone-number" class="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span class="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone-number" 
                  id="phone-number" 
                  required
                  placeholder="+1 (555) 123-4567"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                >
              </div>

              <!-- Communication Method -->
              <div class="sm:col-span-2">
                <label for="communication-method" class="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Contact Method <span class="text-red-500">*</span>
                </label>
                <select 
                  name="communication-method" 
                  id="communication-method" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                >
                  <option value="" disabled selected>Select preferred method</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone Call</option>
                  <option value="Text">Text Message</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </div>

              <!-- Why Join -->
              <div class="sm:col-span-2">
                <label for="why-join" class="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to join our community? <span class="text-red-500">*</span>
                </label>
                <textarea 
                  id="why-join" 
                  name="why-join" 
                  rows="5" 
                  required
                  placeholder="Share your motivations and how you'd like to contribute..."
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                ></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <button 
                type="submit" 
                :disabled="isLoading"
                class="w-full flex justify-center items-center px-6 py-4 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-medium rounded-lg shadow-md hover:from-sky-700 hover:to-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all"
              >
                <span v-if="!isLoading">Submit Application</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              </button>
            </div>

            <p class="text-center text-sm text-gray-500 mt-4">
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Enhanced Modal -->
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
    <div class="relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transition-all transform" :class="{'animate-fade-in-up': showModal}">
      <!-- Modal Content -->
      <div class="p-6 sm:p-8">
        <div class="text-center">
          <!-- Success State -->
          <div v-if="isSuccess" class="text-green-500">
            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
              <svg class="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-medium text-gray-900">Success!</h3>
            <p class="mt-2 text-gray-600">{{ modalMessage }}</p>
          </div>
          
          <!-- Error State -->
          <div v-else class="text-red-500">
            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
              <svg class="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h3 class="mt-4 text-xl font-medium text-gray-900">Oops!</h3>
            <p class="mt-2 text-gray-600">{{ modalMessage }}</p>
          </div>
        </div>
      </div>
      
      <!-- Modal Footer -->
      <div class="bg-gray-50 px-6 py-4 flex justify-end">
        <button 
          @click="closeModal"
          class="px-6 py-2 bg-sky-600 text-white font-medium rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>