import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/landing_page/Home.vue';
import WebsiteDetails from '../components/landing_page/WebsiteDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/website/:id',
    name: 'WebsiteDetails',
    component: WebsiteDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
