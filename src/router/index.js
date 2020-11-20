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
    component: () => import('../views/SlickSort.vue'),
    props: true,
    meta: { name: 'SlickSort' },
  },
  {
    path: '/StyleBinding',
    name: 'StyleBinding',
    component: () => import('../views/StyleBinding.vue'),
    props: true,
    meta: { name: 'StyleBinding' },
  },
  {
    path: '/DialogPopup',
    name: 'DialogPopup',
    component: () => import('../views/DialogPopup.vue'),
    props: true,
    meta: { name: 'DialogPopup' },
  },
  {
    path: '/Chart',
    name: 'Chart',
    component: () => import('../views/Chart.vue'),
    props: true,
    meta: { name: 'Chart' },
  },
  {
    path: '/Video',
    name: 'Video',
    component: () => import('../views/Video.vue'),
    props: true,
    meta: { name: 'Video' },
  },
  {
    path: '/Board',
    name: 'Board',
    component: () => import('../views/Board.vue'),
    props: true,
    meta: { name: 'Board' },
  },
  {
    path: '/Pagination',
    name: 'Pagination',
    component: () => import('../views/Pagination.vue'),
    props: true,
    meta: { name: 'Pagination' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
