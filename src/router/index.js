import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import HomeView from '@/views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import SignupView from '@/views/auth/SignupView.vue'
import ForgotPasswordView from '@/views/auth/ForgotPasswordView.vue'
import AccountView from '@/views/auth/AccountView.vue'

import PlantsView from '@/views/plants/PlantsView.vue'
import AddPlantView from '@/views/plants/AddPlantView.vue'

import CatalogueView from '@/views/CatalogueView.vue'
import CatalogueIndex from '@/components/catalogue/CataloguePlants.vue'
import CataloguePlantDetails from '@/components/catalogue/CataloguePlantDetails.vue'
import CataloguePlantsAdd from '@/components/catalogue/CataloguePlantsAdd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/signup', name: 'signup', component: SignupView },
    { path: '/forgot-password', name: 'forgotPassword', component: ForgotPasswordView },
    { path: '/account', name: 'account', component: AccountView, meta: { requiresAuth: true } },
    {
      path: '/plants/add',
      name: 'add-plant',
      component: AddPlantView,
      meta: { requiresAuth: true }
    },

    {
      path: '/catalogue',
      name: 'catalogue',
      component: CatalogueView,
      meta: { requiresAuth: true },
      children: [
        { path: 'add', name: 'catalogue-add', component: CataloguePlantsAdd },
        { path: ':id', name: 'details', component: CataloguePlantDetails, props: true },
        { path: '', name: 'index', component: CatalogueIndex }
      ]
    },

    { path: '/plants', name: 'plants', component: PlantsView, meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login' }
  }
})

export default router
