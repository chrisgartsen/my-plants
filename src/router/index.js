import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import HomeView from '@/views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import SignupView from '@/views/auth/SignupView.vue'
import ForgotPasswordView from '@/views/auth/ForgotPasswordView.vue'
import AccountView from '@/views/auth/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/signup', name: 'signup', component: SignupView },
    { path: '/forgot-password', name: 'forgotPassword', component: ForgotPasswordView },
    { path: '/account', name: 'account', component: AccountView, meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login' }
  }
})

export default router
