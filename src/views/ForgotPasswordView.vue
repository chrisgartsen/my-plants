<template>
  <div id="forgotpassword-page">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <header class="card-header">
            <h3>Forgot password</h3>
          </header>

          <section class="card-content" v-if="!emailSent">
            <p>We will send an email to reset your password.</p>
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
          </section>

          <section class="card-content" v-else>
            <p>A password reset link has been sent to: {{ credentials.email }}.</p>

            <p>Please check your inbox.</p>
          </section>

          <footer class="card-footer">
            <div class="button-group">
              <button class="btn-primary" v-if="!emailSent">Send email</button>
              <router-link class="btn-link" :to="{ name: 'login' }" v-else>
                Back to login
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
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const credentials = reactive({
  email: ''
})

const emailSent = ref(false)

const rules = {
  email: { required, email }
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
}

const submitForm = async () => {
  const valid = await v$.value.$validate()

  if (valid) {
    try {
      authStore.sendPasswordReset({ email: credentials.email })
      emailSent.value = true
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
