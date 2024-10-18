<template>
  <div id="login-page">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <header class="card-header">
            <h3>Login</h3>
          </header>

          <section class="card-content">
            <div class="form-component" :class="{ error: fieldHasError(v$, 'email') || authError }">
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
                v-model="credentials.email"
              />
              <label for="email">Email</label>
              <div v-if="fieldHasError(v$, 'email')" class="error-message">
                {{ errorMessage(v$, 'email') }}
              </div>
              <div v-if="authError" class="error-message">
                Invalid email or password. Please try again.
              </div>
            </div>
            <div class="form-component" :class="{ error: fieldHasError(v$, 'password') }">
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                v-model="credentials.password"
              />
              <label for="password">Password</label>
              <div v-if="fieldHasError(v$, 'password')" class="error-message">
                {{ errorMessage(v$, 'password') }}
              </div>
            </div>
          </section>

          <footer class="card-footer">
            <div class="button-group">
              <button class="btn-primary">Login</button>
              <router-link class="btn-link" :to="{ name: 'forgotPassword' }">
                Forgot password?
              </router-link>
            </div>
          </footer>
        </form>
      </div>
      <div class="card-image"><img src="/assets/images/plant-3.jpg" alt="" /></div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import { useAuthStore } from '@/stores/auth'
import { fieldHasError, errorMessage } from '@/utils/validator'

const authStore = useAuthStore()
const router = useRouter()

const authError = ref(false)

const credentials = reactive({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, credentials)

const resetForm = async () => {
  await v$.value.$reset()
  credentials.email = ''
  credentials.password = ''
}

const submitForm = async () => {
  const valid = await v$.value.$validate()

  if (valid) {
    try {
      await authStore.login({ email: credentials.email, password: credentials.password })
      router.push({ name: 'home' })
      resetForm()
    } catch (e) {
      resetForm()
      authError.value = true
      credentials.password = ''
    }
  }
}
</script>
