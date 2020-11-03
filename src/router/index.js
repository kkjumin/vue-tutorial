import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sub01',
    name: 'Sub01',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sub01.vue'),
    props: true
  },
  {
    path: '/sub02',
    name: 'Sub02',
    component: () => import(/* webpackChunkName: "about" */ '../views/sub02.vue'),
    props: true
  },
  {
    path: '/sub03',
    name: 'Sub03',
    component: () => import(/* webpackChunkName: "about" */ '../views/sub03.vue'),
    props: true
  },
  {
    path: '/sub04',
    name: 'Sub04',
    component: () => import(/* webpackChunkName: "about" */ '../views/sub04.vue'),
    props: true
  },
  {
    path: '/sub05',
    name: 'Sub05',
    component: () => import(/* webpackChunkName: "about" */ '../views/sub05.vue'),
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
