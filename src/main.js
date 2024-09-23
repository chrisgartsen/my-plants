import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { auth, onAuthStateChanged } from '@/utils/firebase'
import { useAuthStore } from './stores/auth'
import router from './router'

let app

onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
  }

  const authStore = useAuthStore()
  authStore.autoLogin(user)
})
