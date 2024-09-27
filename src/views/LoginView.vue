<template>
  <div id="login-page">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <header class="card-header">
            <h3>Login</h3>
          </header>

          <section class="card-content">
            <div class="form-component" :class="{ error: fieldHasError('email') }">
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
                v-model="credentials.email"
              />
              <label for="email">Email</label>
              <div v-if="fieldHasError('email')" class="error-message">
                {{ errorMessage('email') }}
              </div>
            </div>
            <div class="form-component" :class="{ error: fieldHasError('password') }">
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                v-model="credentials.password"
              />
              <label for="password">Password</label>
              <div v-if="fieldHasError('password')" class="error-message">
                {{ errorMessage('password') }}
              </div>
            </div>
          </section>

          <footer class="card-footer">
            <div class="button-group">
              <button class="btn-primary">Login</button>
              <a class="btn-link">Forgot password?</a>
            </div>
          </footer>
        </form>
      </div>

      <div class="card-image"></div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const credentials = reactive({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) }
}

const fieldHasError = computed(() => {
  return (fieldName) => {
    return v$.value[fieldName].$error
  }
})

const errorMessage = computed(() => {
  return (fieldName) => {
    return v$.value[fieldName].$errors[0].$message
  }
})

const v$ = useVuelidate(rules, credentials)

const resetForm = async () => {
  await v$.value.$reset()
  credentials.email = ''
  credentials.password = ''
}

const submitForm = async () => {
  const valid = await v$.value.$validate()

  if (valid) {
    console.log('Form: Starting Login')
    await authStore.login({ email: credentials.email, password: credentials.password })
    router.push({ name: 'home' })
    console.log('Form: Finished Login')
    resetForm()
  }
}
</script>
