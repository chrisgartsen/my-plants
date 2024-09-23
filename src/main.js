import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { auth, onAuthStateChanged } from '@/utils/firebase'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

onAuthStateChanged(auth, (user) => {
  console.log('user:', user)
})
