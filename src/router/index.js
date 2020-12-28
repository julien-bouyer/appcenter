import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Home.vue';

import userRouter from '@/router/user.js';
import fileRouter from '@/router/file.js';

const Login = () => import('@/views/Login.vue');
const Download = () => import('@/views/download/Download.vue');
const AdminContainer = () => import('@/views/AdminContainer.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/download/:token',
    name: 'download',
    component: Download,
  },
  {
    path: '/',
    name: 'admin',
    component: AdminContainer,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          requiresAuth: true,
          menu: 'home',
        },
      },
      {
        path: 'home',
        redirect: '/',
        meta: {
          requiresAuth: true,
          menu: 'home',
        },
      },
      ...userRouter,
      ...fileRouter,
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        name: 'login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
