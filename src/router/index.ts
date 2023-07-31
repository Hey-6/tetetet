import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

// @ts-ignore
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '',
  //   redirect: (_) => {
  //     return {path: '/'};
  //   }
  // },
  {
    path: '/',
    name: 'Home',
    component: () =>
    import(/* webpackChunkName: "About" */ '@/pages/Home/index.vue')
  },
  {
    path: '/rellax',
    name: 'Rellax',
    component: () =>
    import(/* webpackChunkName: "About" */ '@/pages/Rellax/index.vue')
  },
  {
    path: '/:currentPath(.*)*', // 404
    redirect: (_) => {
      return {path: '/404'};
    }
  }
];
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    };
  }
});
export default router;