<template>
  <div class="slider-container sm:py-15  lg:py-2.5">
    <div
      class="slider-track"
      :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }"
    >
      <div v-for="(slide, index) in infiniteSlides" :key="index" class="slider-slide">
        <img :src="slide.src" :alt="slide.alt" class="w-24 h-8 sm:w-40 sm:h-12 md:w-48 md:h-14 lg:w-[200px] lg:h-[60px] object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Slider data
const slides = [
  { src: new URL('@/assets/img/nodejs.svg', import.meta.url).href, alt: 'Node.js' },
  { src: new URL('@/assets/img/vue-js.svg', import.meta.url).href, alt: 'Vue.js' },
  { src: new URL('@/assets/img/tailwindcss.svg', import.meta.url).href, alt: 'TailwindCSS' },
  { src: new URL('@/assets/img/laravel.svg', import.meta.url).href, alt: 'Laravel' },
  { src: new URL('@/assets/img/python.svg', import.meta.url).href, alt: 'Python' },
  { src: new URL('@/assets/img/react.svg', import.meta.url).href, alt: 'React' },
  { src: new URL('@/assets/img/bootstrap.svg', import.meta.url).href, alt: 'Bootstrap' },
];

// Duplicate slides for infinite scrolling
const infiniteSlides = computed(() => [...slides, ...slides]);

// Reactive state
const currentSlide = ref(0);
const intervalId = ref(null);
const slideWidth = ref(200); // Make it reactive

// Determine the number of visible slides based on screen size
const visibleSlides = computed(() => {
  return window.innerWidth >= 1024 ? 6 : 3 ; // 6 slides for larger screens, 4 for mobile
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
  // Measure slide width after component mounts
  if (track.value && track.value.children.length > 0) {
    slideWidth.value = track.value.children[0].offsetWidth;
  }
  // Add a resize listener to update slideWidth if window resizes
  const updateSlideWidth = () => {
    if (track.value && track.value.children.length > 0) {
      slideWidth.value = track.value.children[0].offsetWidth;
    }
  };
  window.addEventListener('resize', updateSlideWidth);
  onUnmounted(() => {
    window.removeEventListener('resize', updateSlideWidth);
  });
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

/* Removed fixed width/height from here, now handled by Tailwind classes in template */
</style>
