import { ref } from 'vue'
import { defineStore } from 'pinia'

import { auth, signInWithEmailAndPassword } from '@/utils/firebase'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  const login = async (credentials) => {
    console.log('Loggin in user', credentials.email)

    try {
      const cred = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      console.log(cred)

      isAuthenticated.value = true
    } catch (e) {
      console.log(e)
    }
  }

  const createAccount = async (credentials) => {
    console.log('Creating account', credentials.email)
  }

  return { isAuthenticated, login, createAccount }
})
