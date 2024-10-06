import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import HomeView from '@/views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/signup', name: 'signup', component: SignupView },
    { path: '/forgot-password', name: 'forgotPassword', component: ForgotPasswordView }
  ]
})

router.beforeEach((to, from) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login' }
  }
})

export default router
