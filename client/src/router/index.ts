// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AboutusPage from '../views/AboutusPage.vue'
import NewsPage from '../views/NewsPage.vue'
import MembershipPage from '../views/MembershipPage.vue'
import ContactPage from '../views/Contact Us.vue'
import { IStaticMethods } from 'preline/preline';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'AboutusPage',
    component: AboutusPage
  },
  {
    path: '/News',
    name: 'NewsPage',
    component: NewsPage
  },{
    path: '/Membership',
    name: 'MembershipPage',
    component: MembershipPage
  },
  {
    path: '/Contact',
    name: 'Contact Us',
    component: ContactPage
  }

];

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods?.autoInit?.();
      window.scrollTo({ top: 0 });
    }, 100);
  }
});

export default router;
