<template>

  <!-- Header (Hero text Hero image) -->
  <div class="flex flex-col-reverse gap-4 lg:flex-row items-center justify-evenly py-6 m-5 px-2">
    <div class="text-center lg:text-left">

      <h1 class="font-bold text-2xl md:text-4xl mb-2">Create Professional Invoices with Ease</h1>
      <p class="text-lg mb-4 max-w-md mx-auto lg:mx-0">
        Streamline your billing process with our intuitive invoice generator.
        Create, manage, and track invoices all in one place.
      </p>

      <div class="flex flex-col gap-4 md:flex-row justify-center lg:justify-start">

        <button type="button"
          class="rounded-md text-white bg-blue-600 h-11 px-8 hover:bg-blue-700 transition duration-200">Get
          Started</button>

        <button type="button"
          class=" border rounded-md border-gray-400 h-11 px-8 hover:bg-gray-100 transition duration-200"><router-link
            to="/create">Create
            Invoice</router-link></button>

      </div>
    </div>
    <div class="mt-4 md:mt-0 md:max-w-md">
      <img src="../assets/hero-text.jpg" alt="hero-img error" class="rounded-md">
    </div>
  </div>

  <!-- Middle Section  -->
  <div class="px-4 py-6 max-w-7xl mx-auto">
    <h1 class="font-bold text-2xl md:text-3xl flex justify-center text-center pb-6">Everything You Need for Invoice
      Management
    </h1>


    <div class="flex flex-col items-center md:flex-row md:gap-16 gap-12 justify-center md:items-stretch">

      <div
        class="flex flex-col items-center justify-center border border-gray-200 shadow-lg rounded-lg p-6 max-w-xs w-full md:flex-1">
        <RiFileTextLine class="w-10 h-10 mb-4" />
        <h1 class="font-bold text-xl mb-2">Create Invoices</h1>
        <p class="text-left text-sm md:text-base">Create professional invoices with our easy-to-use form. Add items,
          apply taxes and
          discounts.</p>
      </div>
      <div
        class="flex flex-col items-center justify-center border border-gray-200 shadow-lg rounded-lg p-6 max-w-xs w-full md:flex-1">
        <RiHistoryLine class="w-10 h-10 mb-4" />
        <h1 class="font-bold text-xl mb-2">Invoice History</h1>
        <p class="text-left text-sm md:text-base">Access your complete invoice history. Filter and search by various
          criteria.</p>
      </div>

    </div>
  </div>


</template>

<script>
import { RiHistoryLine, RiFileTextLine } from '@remixicon/vue';
export default {
  name: "LandingPage",
  components: {
    RiHistoryLine,
    RiFileTextLine,
  }
}
</script>