import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { auth } from '@/utils/firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { currentUser: null }
  },

  getters: {
    isAuthenticated(state) {
      return state.currentUser != null
    }
  },

  actions: {
    async login(credentials) {
      try {
        await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        this.currentUser = auth.currentUser
      } catch (e) {
        console.log(e)
      }
    },
    async logout() {
      try {
        await signOut(auth)
        this.currentUser.value = null
      } catch (error) {
        console.log(error)
      }
    },
    autoLogin(user) {
      if (user) {
        this.currentUser = user
      } else {
        this.currentUser = null
      }
    },
    async createAccount(credentials) {
      console.log('Creating account', credentials.email)
    }
  }
})