<template>
  <div>
    <Nav />
    <div class="content">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Nav from './components/landing_page/Nav.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>