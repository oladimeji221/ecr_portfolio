<template>
  <div class="slider-container sm:py-32 lg:py-2.5">
    <div
      class="slider-track"
      :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }"
    >
      <div v-for="(slide, index) in infiniteSlides" :key="index" class="slider-slide">
        <img :src="slide.src" :alt="slide.alt" class="slider-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Slider data
const slides = [
  { src: '/src/assets/img/nodejs.svg', alt: 'Node.js' },
  { src: '/src/assets/img/vue-js.svg', alt: 'Vue.js' },
  { src: '/src/assets/img/tailwindcss.svg', alt: 'TailwindCSS' },
  { src: '/src/assets/img/laravel.svg', alt: 'Laravel' },
  { src: '/src/assets/img/python.svg', alt: 'Python' },
  { src: '/src/assets/img/react.svg', alt: 'React' },
  { src: '/src/assets/img/bootstrap.svg', alt: 'Bootstrap' },
];

// Duplicate slides for infinite scrolling
const infiniteSlides = computed(() => [...slides, ...slides]);

// Reactive state
const currentSlide = ref(0);
const intervalId = ref(null);
const slideWidth = 200; 

// Determine the number of visible slides based on screen size
const visibleSlides = computed(() => {
  return window.innerWidth >= 1024 ? 6 : 3 ; // 6 slides for larger screens, 3 for mobile
});

// Autoplay functionality
const startAutoplay = () => {
  intervalId.value = setInterval(() => {
    currentSlide.value++;
    if (currentSlide.value >= slides.length) {
      currentSlide.value = 0; 
    }
  }, 2000); // Change slide every 2 seconds
};

const stopAutoplay = () => {
  clearInterval(intervalId.value);
};

// Lifecycle hooks
onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

.slider-track {
  display: flex;
  transition: transform 0.5s linear; /* Linear transition for seamless effect */
}

.slider-slide {
  flex: 0 0 auto; /* Ensure slides are not stretched */
}

.slider-image {
  width: 200px;
  height: 60px;
  object-fit: contain;
}
</style>