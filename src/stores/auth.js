import { defineStore } from 'pinia'

import { auth } from '@/utils/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { currentUser: null }
  },

  getters: {
    isAuthenticated(state) {
      return state.currentUser != null
    },
    getCurrentUser(state) {
      return state.currentUser
    }
  },

  actions: {
    async login(credentials) {
      try {
        await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        this.currentUser = auth.currentUser
      } catch (e) {
        throw new Error(e.code)
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
      try {
        console.log('Creating user with', credentials)

        const result = await createUserWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        )
        console.log('User created', result.user)
        this.currentUser = result.user
      } catch (error) {
        console.log(error.code)
        throw new Error(error.code)
      }

      console.log('Creating account', credentials.email)
    },

    async updateAccount(formData) {
      // TODO - check if the new value is different than the old value - only update when changed!!!
      try {
        await updateProfile(auth.currentUser, { displayName: formData.name })
      } catch (error) {
        console.log(error)
      }
    },

    async sendPasswordReset(credentials) {
      try {
        await sendPasswordResetEmail(auth, credentials.email)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
