<template>
    <div class="relative  w-full pt-10  pb-20">
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#5ED6FF] to-[#070A54] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <h2 class="mx-auto mt-2 max-w-xl text-center text-sm  tracking-tight text-grey-900 sm:text-5xl sm:font-semibold mb-3.5"> Check Out Some of Our Products</h2>
      <!-- Carousel Track -->
      <div
        ref="track"
        class="carousel-track scroll-smooth overflow-x-auto hide-scrollbar mt-20 flex space-x-6 px-4"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-slide relative shadow-md flex-shrink-0  w-[60vw] sm:w-[40vw] md:w-[50vw] lg:w-[60vw] h-[40vh] sm:h-[10vh] md:h-[30vh] lg:h-[60vh]"
        >
          <div class="relative w-full h-full ">
            <img :src="slide.image" :alt="slide.alt" class="carousel-image  " />
            <div class="carousel-content">
              <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {{ slide.title }}
              </h2>
              <p class="text-sm sm:text-base md:text-lg mb-4">{{ slide.description }}</p>
              <!-- <button class="px-4 py-2 sm:px-6 sm:py-2 bg-sky-500 text-white font-semibold rounded hover:bg-sky-700 mr-2 shadow" @click="openModal">
                {{ slide.cta1 }}
              </button> -->
              <!-- <button
                v-if="slide.cta2"
                class="px-4 py-2 sm:px-6 sm:py-2 bg-white text-gray-900 font-semibold rounded hover:bg-gray-200 shadow"
              >
                {{ slide.cta2 }}
              </button> -->
              <router-link
                :to="{ name: 'WebsiteDetails', params: { id: slide.alt } }"
                class="px-4 py-2 bg-white text-gray-900 font-semibold rounded hover:bg-gray-200 shadow"
              >
                Learn More
            </router-link>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Dot Navigation -->
      <div class="mt-6 flex justify-center space-x-2">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full bg-gray-500"
          :class="{ 'bg-white': index === currentSlide }"
        ></button>
      </div>
    </div>

     <!-- Modal -->
     <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
    >
      <div class="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 relative">
        <!-- Close Button -->
        <button
          class="absolute top-2 font-bold text-2xl right-2 text-gray-500 hover:text-gray-700"
          @click="closeModal"
        >
          &times;
        </button>

        <!-- Modal Content -->
        <div>
          <h2 class="text-xl font-bold mb-4">Form</h2>
          <!-- Embedded Script -->
          <div id="form-container" class="overflow-y-scroll max-h-[60vh] px-2"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const slides = ref([
    {
      image: new URL('@/assets/img/products/qikpharma.png', import.meta.url).href,
      alt: 'qikpharma',
      title: '',
      description: '',
      cta1: 'Request Quote',
      cta2: 'Learn More',
    },
    {
      image: new URL('@/assets/img/products/checkartisan.png', import.meta.url).href,
      alt: 'checkartisan',
      title: '',
      description: '',
      cta1: 'Request Quote',
      cta2: 'Learn More',
    },
    {
      image: new URL('@/assets/img/products/bookamia.png', import.meta.url).href,
      alt: 'bookamia',
      title: '',
      description: '',
      cta1: 'Request Quote',
      cta2: 'Learn More',
    },
    {
      image: new URL('@/assets/img/products/jacana_builders.png', import.meta.url).href,
      alt: 'Jacana Builders',
      title: '',
      description: '',
      cta1: 'Request Quote',
      cta2: 'Learn More',
    },

  ]);
  
  const currentSlide = ref(0);
  const track = ref(null);
  
  const goToSlide = (index) => {
    const slideEl = track.value.children[index];
    slideEl.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    currentSlide.value = index;
  };

  const isModalOpen = ref(false);

  const openModal = () => {
    isModalOpen.value = true;

    // Embed the form script when the modal opens
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script.onload = () => {
      hbspt.forms.create({
        portalId: '145637347',
        formId: 'f2a20ff1-4214-4c82-98f7-3ecb1d719551',
        region: 'eu1',
        target: '#form-container',
      });
    };
    document.body.appendChild(script);
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };
  </script>
  
  <style scoped>
  .carousel-track {
    display: flex;
    height: auto;
  }
  .carousel-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;

  }
  .carousel-content {
    position: absolute;
    bottom: 10%;
    left: 5%;
    color: white;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>
  