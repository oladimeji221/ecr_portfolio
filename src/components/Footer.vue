<template>
    <footer class="bg-sky-500 pt-16 pb-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Call to Action -->
        <div class="text-center">
          <p class="text-sm text-grey-900 font-semibold mb-2">Let's work together</p>
          <h2 class="text-3xl text-white sm:text-4xl font-bold mb-4">Ready to elevate your brand?<br>Let's build your digital presence.</h2>
          <p class="text-gray-900 mb-6 max-w-2xl mx-auto">Whether you're looking for a stunning website or a high-performance mobile app, ECR Technology Services delivers tailored solutions that help businesses grow and connect meaningfully with their customers.</p>
          <button class="bg-white hover:border border rounded-full border-gray-950 hover:border-white hover:bg-sky-500 hover:text-white text-grey-900 px-6 py-2 font-semibold">
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
            <a href="https://x.com/ECRTechServices" target="_blank" rel="noopener noreferrer" class="hover:text-white">
              <span class="sr-only">X (formerly Twitter)</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
            <a href="https://www.instagram.com/ecrtechnologyservices?igsh=MTBzZHF3eGl5bW0zZw==" target="_blank" rel="noopener noreferrer" class="hover:text-white">
              <span class="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6.25a.75.75 0 110 1.5.75.75 0 010-1.5z"/></svg>
            </a>
            <a href="https://linkedin.com/company/ecr-technology-services" target="_blank" rel="noopener noreferrer" class="hover:text-white">
              <span class="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4C3.44772 2 3 2.44772 3 3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2ZM8.52632 17.3684H6.63158V9.68421H8.52632V17.3684ZM7.57895 8.73684C6.98947 8.73684 6.52632 8.27368 6.52632 7.68421C6.52632 7.09474 6.98947 6.63158 7.57895 6.63158C8.16842 6.63158 8.63158 7.09474 8.63158 7.68421C8.63158 8.27368 8.16842 8.73684 7.57895 8.73684ZM18.9474 17.3684H17.0526V13.1579C17.0526 11.7474 15.5263 11.6842 15.2632 11.6842C15 11.6842 13.8947 11.7895 13.8947 13.1579V17.3684H12V9.68421H13.8947V10.8947C14.4842 9.94737 15.6316 9.94737 15.8947 9.94737C18 9.94737 18.9474 11.1579 18.9474 13.1579V17.3684Z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/19HWjzQ1yK/" target="_blank" rel="noopener noreferrer" class="hover:text-white">
              <span class="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://tiktok.com/@ecrtechnologyservices" target="_blank" rel="noopener noreferrer" class="hover:text-white">
              <span class="sr-only">TikTok</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.94-6.37-2.96-2.2-2.95-2.2-6.82 0-9.78 1.59-2.1 4.3-3.29 6.92-2.95.02 1.49-.04 2.98-.04 4.48-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a href="https://www.youtube.com/@learnwithecr" target="_blank" rel="noopener noreferrer" class="hover:text-white">
              <span class="sr-only">YouTube</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 7.686a2.48 2.48 0 0 0-1.754-1.754C18.25 5.5 12 5.5 12 5.5s-6.25 0-7.828.432a2.48 2.48 0 0 0-1.754 1.754C2 9.26 2 12 2 12s0 2.74.418 4.314a2.48 2.48 0 0 0 1.754 1.754C5.75 18.5 12 18.5 12 18.5s6.25 0 7.828-.432a2.48 2.48 0 0 0 1.754-1.754C22 14.74 22 12 22 12s0-2.74-.418-4.314zM9.545 14.568V9.432L14.455 12l-4.91 2.568z"/></svg>
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
  