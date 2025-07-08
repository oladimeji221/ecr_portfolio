<template>
  <Nav />
    <div class="p-6 py-7 mt-20">
      <div v-if="website">
        <h1 class="text-4xl font-bold mb-4 text-center">{{ website.title }}</h1>
        <img :src="website.image" :alt="website.title" class="w-full h-auto mb-4 rounded-lg shadow-md" />
        <p class="text-lg mb-4">{{ website.description }}</p>
        
        <!-- Structured Content -->
        <div v-if="typeof website.details === 'object'">
          <h2 class="text-2xl font-bold mt-6 mb-4">{{ website.details.title }}</h2>
          <div v-for="(section, index) in website.details.sections" :key="index" class="mb-4">
            <h3 class="text-xl font-semibold mb-2">{{ section.heading }}</h3>
            <p v-if="section.text">{{ section.text }}</p>
            <ul v-if="section.points" class="list-disc list-inside ml-4">
              <li v-for="(point, pIndex) in section.points" :key="pIndex">{{ point }}</li>
            </ul>
          </div>
        </div>
        
        <!-- Plain Text Content -->
        <p v-else class="text-base text-gray-700">{{ website.details }}</p>
      </div>
      <div v-else>
        <p class="text-center text-red-500 text-xl">Website not found.</p>
      </div>
    </div>
  <Footer />
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { RouterLink } from 'vue-router';
  import websitesData from '@/assets/Websites.json';
  import Nav from './Nav.vue';
  import Footer from '../Footer.vue';
  
  const route = useRoute();
  const website = ref(null);
  
  onMounted(() => {
    const websiteId = route.params.id;
    website.value = websitesData.find(w => w.id === websiteId);
  });
  </script>
  