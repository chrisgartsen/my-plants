<template>
  <header id="app-header">
    <nav class="navbar">
      <div class="container">
        <div class="logo">My Plants</div>
        <div class="nav-menu">
          <ul v-if="!authStore.isAuthenticated">
            <li><router-link :to="{ name: 'login' }" class="link-primary">Log in</router-link></li>
            <li>
              <router-link :to="{ name: 'signup' }" class="link-primary">Sign up</router-link>
            </li>
          </ul>
          <ul v-if="authStore.isAuthenticated">
            <li><a href="Signup.html" class="link-primary">Plants</a></li>
            <li><a href="Signup.html" class="link-primary">Library</a></li>
            <li><a href="Signup.html" class="link-primary">Account</a></li>
            <li><a href="#" class="link-primary" @click="logout">Log out</a></li>
          </ul>
        </div>

        <div class="hamburger" :class="{ active: showMobileMenu }" @click="toggleMobileMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <div class="mobile-menu" :class="{ active: showMobileMenu }">
      <ul>
        <li><a href="#" class="link-primary active">Menu Item 1</a></li>
        <li><a href="#" class="link-primary">Menu Item 2</a></li>
        <li><a href="#" class="link-primary">Menu Item 3</a></li>
        <li><a href="#" class="link-primary">Menu Item 4</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const showMobileMenu = ref(false)

const logout = async () => {
  await authStore.logout()
  router.push({ name: 'login' })
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  console.log(showMobileMenu.value)
}
</script>
