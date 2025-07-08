<template>
    <footer class="bg-sky-500 pt-16 pb-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Call to Action -->
        <div class="text-center">
          <p class="text-sm text-grey-900 font-semibold mb-2">Let's work together</p>
          <h2 class="text-3xl text-white sm:text-4xl font-bold mb-4">Ready to elevate your brand?<br>Let's build your digital presence.</h2>
          <p class="text-gray-900 mb-6 max-w-2xl mx-auto">Whether you're looking for a stunning website or a high-performance mobile app, ECR Technology Services delivers tailored solutions that help businesses grow and connect meaningfully with their customers.</p>
          <button class="bg-white hover:border border rounded-full border-gray-950 hover:border-white hover:bg-sky-500 hover:text-white text-grey-900 px-6 py-2 rounded font-semibold">
            Contact Us
          </button>
        </div>
  
        <!-- Links -->
        <div class="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white pt-10">
          <!-- Logo -->
          <div class="col-span-2 sm:col-span-1 flex items-start">
            <img src="/src/assets/img/ecr_white.png" alt="ECR Technology Services" class="h-12 shadow-black">
          </div>
  
          <!-- Solutions -->
          <div>
            <h3 class="text-sm font-semibold text-white">Solutions</h3>
            <ul class="mt-4 space-y-2 text-sm text-gray-900">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">E-commerce</a></li>
              <li><a href="#">API Integrations</a></li>
            </ul>
          </div>
  
          <!-- Company -->
          <div>
            <h3 class="text-sm font-semibold text-white">Company</h3>
            <ul class="mt-4 space-y-2 text-sm text-gray-900">
              <li><a href="https://ecr-ts.com/about">About Us</a></li>
              <li><a href="https://ecr-ts.com/contact">Contact</a></li>
            </ul>
          </div>
  
          <!-- Support -->
          <!-- <div>
            <h3 class="text-sm font-semibold text-white">Support</h3>
            <ul class="mt-4 space-y-2 text-sm text-gray-900">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div> -->
        </div>
  
        <!-- Bottom -->
        <div class="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-white pt-6">
          <p class="text-sm text-gray-900">&copy; 2024 ECR Technology Services. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0 text-gray-900">
            <a href="#" class="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.23 4.23 0 001.85-2.34 8.3 8.3 0 01-2.68 1.03 4.16 4.16 0 00-7.1 3.79A11.8 11.8 0 013 4.89a4.13 4.13 0 001.29 5.54A4.09 4.09 0 012.8 9v.05a4.16 4.16 0 003.34 4.08c-.4.11-.82.17-1.25.17-.3 0-.6-.03-.89-.08a4.15 4.15 0 003.88 2.89A8.34 8.34 0 012 19.54a11.74 11.74 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.35-.02-.53A8.3 8.3 0 0024 5.56a8.26 8.26 0 01-2.36.65 4.16 4.16 0 001.82-2.29z"/></svg>
            </a>
            <a href="#" class="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6.25a.75.75 0 110 1.5.75.75 0 010-1.5z"/></svg>
            </a>
            <a href="#" class="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4C3.44772 2 3 2.44772 3 3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2ZM8.52632 17.3684H6.63158V9.68421H8.52632V17.3684ZM7.57895 8.73684C6.98947 8.73684 6.52632 8.27368 6.52632 7.68421C6.52632 7.09474 6.98947 6.63158 7.57895 6.63158C8.16842 6.63158 8.63158 7.09474 8.63158 7.68421C8.63158 8.27368 8.16842 8.73684 7.57895 8.73684ZM18.9474 17.3684H17.0526V13.1579C17.0526 11.7474 15.5263 11.6842 15.2632 11.6842C15 11.6842 13.8947 11.7895 13.8947 13.1579V17.3684H12V9.68421H13.8947V10.8947C14.4842 9.94737 15.6316 9.94737 15.8947 9.94737C18 9.94737 18.9474 11.1579 18.9474 13.1579V17.3684Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  