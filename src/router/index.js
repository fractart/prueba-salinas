import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Carousel from '../views/Carousel.vue';
import Empleados from '../views/Empleados.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: Carousel,
  },
  {
    path: '/empleados',
    name: 'Empleados',
    component: Empleados,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;