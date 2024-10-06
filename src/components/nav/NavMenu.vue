<template>
  <div>
    <ul v-if="!authStore.isAuthenticated">
      <li>
        <router-link :to="{ name: 'login' }" class="link-primary" @click="navigate">
          Log in
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'signup' }" class="link-primary" @click="navigate">
          Sign up
        </router-link>
      </li>
    </ul>
    <ul v-if="authStore.isAuthenticated">
      <li><a href="Signup.html" class="link-primary" @click="navigate">Plants</a></li>
      <li><a href="Signup.html" class="link-primary">Library</a></li>
      <li><router-link :to="{ name: 'account' }" class="link-primary">Account</router-link></li>
      <li><a href="#" class="link-primary" @click="logout">Log out</a></li>
    </ul>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const emits = defineEmits(['toggleMenu'])

const logout = async () => {
  await authStore.logout()
  router.push({ name: 'login' })
}

const navigate = () => {
  emits('toggleMenu')
}
</script>
