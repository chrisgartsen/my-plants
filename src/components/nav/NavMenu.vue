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
      <li>
        <router-link :to="{ name: 'plants' }" class="link-primary" @click="navigate">
          Plants
        </router-link>
      </li>
      <li>
        <router-link to="/catalogue" class="link-primary" @click="navigate">
          Catalogue
        </router-link>
      </li>

      <li>
        <router-link :to="{ name: 'account' }" class="link-primary">Account</router-link>
      </li>
      <li><a href="#" class="link-primary" @click="logout">Log out</a></li>
    </ul>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const emits = defineEmits(['toggleMenu'])

const logout = async () => {
  await authStore.logout()
  router.push({ name: 'login' })
}

const navigate = () => {
  emits('toggleMenu')
}
</script>
