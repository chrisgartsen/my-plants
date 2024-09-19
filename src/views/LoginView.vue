<template>
  <div id="login-page">
    <div class="card">
      <header class="card-header">
        <h3>Login</h3>
      </header>
      <section class="card-content">
        <form @submit.prevent="submitForm">
          <input type="submit" value="Boem" />

          {{ v$.email.$errors }}
        </form>
      </section>

      <footer class="card-footer">The card footer</footer>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const credentials = reactive({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required }
}

const v$ = useVuelidate(rules, credentials)

const submitForm = async () => {
  console.log('submitting form')
  console.log(v$)
  const r = await v$.value.$validate()
  console.log(r)
  console.log(v$.value.email.$errors[0].$message)
}
</script>
