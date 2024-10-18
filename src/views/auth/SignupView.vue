<template>
  <div id="signup-page">
    <div class="card">
      <div class="card-image">
        <img src="/assets/images/plant-1.jpg" alt="" />
      </div>

      <div class="card-body">
        <form @submit.prevent="submitForm">
          <header class="card-header">
            <h3>Signup</h3>
          </header>

          <section class="card-content">
            <p>Please fill in the form to create an account</p>

            <div
              class="form-component"
              :class="{ error: fieldHasError('email') || backendErrorMessage }"
            >
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
              <div v-if="backendErrorMessage" class="error-message">
                {{ backendErrorMessage }}
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
            <div class="form-component" :class="{ error: fieldHasError('passwordConfirm') }">
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder=""
                v-model="credentials.passwordConfirm"
              />
              <label for="password">Confirm Password</label>
              <div v-if="fieldHasError('passwordConfirm')" class="error-message">
                {{ errorMessage('passwordConfirm') }}
              </div>
            </div>
          </section>

          <footer class="card-footer">
            <div class="button-group">
              <button class="btn-primary">Signup</button>
            </div>
          </footer>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { useRouter } from 'vue-router'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const credentials = reactive({
  email: '',
  password: '',
  passwordConfirm: ''
})

const backendErrorMessage = ref('')

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
  passwordConfirm: {
    sameAs: helpers.withMessage('Must match password', sameAs(computed(() => credentials.password)))
  }
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
  credentials.passwordConfirm = ''
}

const submitForm = async () => {
  const valid = await v$.value.$validate()

  if (valid) {
    try {
      await authStore.createAccount({ email: credentials.email, password: credentials.password })
      router.push({ name: 'home' })
      resetForm()
    } catch (error) {
      console.log('Error!', error.message)
      if (error.message === 'auth/email-already-in-use') {
        backendErrorMessage.value = 'This email address is already in use.'
        await v$.value.$reset()
        credentials.password = ''
        credentials.passwordConfirm = ''
      }
    }
  }
}
</script>
