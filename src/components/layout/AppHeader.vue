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
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const logout = async () => {
  await authStore.logout()
  router.push({ name: 'login' })
}
</script>
