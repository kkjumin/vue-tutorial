import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/SlickSort',
    name: 'SlickSort',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/sub01.vue'),
    props: true,
    meta: { name: 'SlickSort' },
  },
  {
    path: '/StyleBinding',
    name: 'StyleBinding',
    component: () => import('../views/sub02.vue'),
    props: true,
    meta: { name: 'StyleBinding' },
  },
  {
    path: '/DialogPopup',
    name: 'DialogPopup',
    component: () => import('../views/sub03.vue'),
    props: true,
    meta: { name: 'DialogPopup' },
  },
  {
    path: '/Chart',
    name: 'Chart',
    component: () => import('../views/sub04.vue'),
    props: true,
    meta: { name: 'Chart' },
  },
  {
    path: '/Video',
    name: 'Video',
    component: () => import('../views/sub05.vue'),
    props: true,
    meta: { name: 'Video' },
  },
  {
    path: '/Photo',
    name: 'Photo',
    component: () => import('../views/sub06.vue'),
    props: true,
    meta: { name: 'Photo' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
