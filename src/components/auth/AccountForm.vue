<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <header class="card-header">
          <h3>Manage your account</h3>
        </header>

        <section class="card-content">
          <div class="form-component">
            <input
              type="text"
              name="email"
              id="email"
              placeholder=""
              :disabled="!editForm"
              v-model="formData.email"
            />
            <label for="email">Email</label>
          </div>

          <div class="form-component">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              :disabled="!editForm"
              v-model="formData.name"
            />
            <label for="email">Name</label>
          </div>

          <div class="button-group">
            <button class="btn-primary" @click="toggleEdit" v-if="!editForm">Change</button>
            <button class="btn-primary" v-if="editForm">Save</button>
            <button class="btn-secondary" @click="toggleEdit" v-if="editForm">Cancel</button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const formData = reactive({
  email: '',
  name: ''
})

const formRules = {
  email: { required, email },
  name: { minLength: minLength(6) }
}

const editForm = ref(false)

const v$ = useVuelidate(formRules, formData)

const toggleEdit = () => {
  editForm.value = !editForm.value
}

const submitForm = async () => {
  const valid = await v$.value.$validate()
  if (valid) {
    try {
      console.log('Saving data')
      await authStore.updateAccount({ name: formData.name })
      toggleEdit()
    } catch (error) {
      console.log(error)
    }
  } else {
    console.log('Not valid')
  }
}

onMounted(async () => {
  const user = await authStore.getCurrentUser
  formData.email = user.email
  formData.name = user.displayName
})
</script>
