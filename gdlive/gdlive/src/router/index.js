import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  scrollBehavior(stand, homepage, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      left: 50, top: 0
    }
  }
  
})

export default router
