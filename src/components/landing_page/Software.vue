<template>
  <div class="slider-container sm:py-20 md:py-24 lg:py-2.5">
    <div
      class="slider-track"
      :style="{ transform: `translateX(-${currentSlide * slideWidth}px)`, transition: isTransitioning ? 'transform 0.5s linear' : 'none', width: `${infiniteSlides.length * slideWidth}px` }"
    >
      <div v-for="(slide, index) in infiniteSlides" :key="index" class="slider-slide w-full">
        <img :src="slide.src" :alt="slide.alt" class="w-24 h-8 sm:w-32 sm:h-10 md:w-48 md:h-14 lg:w-[200px] lg:h-[60px] object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';

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

// Reactive state
const currentSlide = ref(0);
const intervalId = ref(null);
const slideWidth = ref(0); // Initialize to 0, will be measured
const isTransitioning = ref(true); // Control CSS transition

// Determine the number of visible slides based on screen size
const visibleSlides = computed(() => {
  return window.innerWidth >= 1024 ? 6 : 4 ; // 6 slides for larger screens, 4 for mobile
});

const numClones = computed(() => visibleSlides.value); // Number of slides to clone at each end

// Duplicate slides for infinite scrolling
const infiniteSlides = computed(() => {
  const clonedStart = slides.slice(-numClones.value);
  const clonedEnd = slides.slice(0, numClones.value);
  return [...clonedStart, ...slides, ...clonedEnd];
});

// Autoplay functionality
const startAutoplay = () => {
  currentSlide.value = numClones.value; // Start at the first real slide
  intervalId.value = setInterval(() => {
    currentSlide.value++;
    // Check if we've moved into the cloned end slides
    if (currentSlide.value >= slides.length + numClones.value) {
      isTransitioning.value = false; // Disable transition for instant jump
      currentSlide.value = numClones.value; // Jump back to the first real slide
      // Re-enable transition after a very short delay to allow the jump to render
      nextTick(() => {
        isTransitioning.value = true;
      });
    }
  }, 2000); // Change slide every 2 seconds
};

const stopAutoplay = () => {
  clearInterval(intervalId.value);
};

// Lifecycle hooks
const track = ref(null); // Reference to the slider-track element

onMounted(() => {
  startAutoplay();
  
  const updateSlideWidth = () => {
    // Ensure track.value and its children exist before accessing offsetWidth
    if (track.value && track.value.children.length > 0) {
      // Get the width of a single slide element
      slideWidth.value = track.value.children[0].offsetWidth;
    }
  };

  // Initial measurement
  updateSlideWidth();

  // Add a resize listener to update slideWidth if window resizes
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
  /* transition handled by :style binding */
}

.slider-slide {
  flex: 0 0 auto; /* Ensure slides are not stretched */
}

/* Removed fixed width/height from here, now handled by Tailwind classes in template */
</style>