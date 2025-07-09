import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
// import './style.css'
import App from './App.vue'
import './assets/main.css';
import router from './router';

const head = createHead()

createApp(App).use(router).use(head).mount('#app')
