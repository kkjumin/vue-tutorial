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
    path: '/slickSort',
    name: 'SlickSort',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/SlickSort.vue'),
    props: true,
    meta: { name: 'SlickSort' },
  },
  {
    path: '/styleBinding',
    name: 'StyleBinding',
    component: () => import('../views/StyleBinding.vue'),
    props: true,
    meta: { name: 'StyleBinding' },
  },
  {
    path: '/dialogPopup',
    name: 'DialogPopup',
    component: () => import('../views/DialogPopup.vue'),
    props: true,
    meta: { name: 'DialogPopup' },
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/Chart.vue'),
    props: true,
    meta: { name: 'Chart' },
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue'),
    props: true,
    meta: { name: 'Video' },
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('../views/Board.vue'),
    props: true,
    meta: { name: 'Board' },
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: () => import('../views/Pagination.vue'),
    props: true,
    meta: { name: 'Pagination' },
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue'),
    props: true,
    meta: { name: 'Calendar' },
  },
  {
    path: '/lovelyz',
    name: 'Lovelyz',
    component: () => import('../views/Lovelyz.vue'),
    props: true,
    meta: { name: 'Lovelyz' },
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music.vue'),
    props: true,
    meta: { name: 'Music' },
  },
  {
    path: '/upload',
    name: 'ImageUpload',
    component: () => import('../views/ImageUpload.vue'),
    props: true,
    meta: { name: 'ImageUpload' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
