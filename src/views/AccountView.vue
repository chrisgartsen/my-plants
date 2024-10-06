<template>
  <div id="account-page">
    <div class="card">
      <div class="card-body">
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
            <button class="btn-primary" @click="save" v-if="editForm">Save</button>
            <button class="btn-secondary" @click="toggleEdit" v-if="editForm">Cancel</button>
          </div>
        </section>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <header class="card-header">
          <h3>Change password</h3>
        </header>

        <section class="card-content">
          <div class="form-component">
            <input type="password" name="password" id="password1" placeholder="" />
            <label for="password1">Current Password</label>
          </div>
          <div class="form-component">
            <input type="password" name="password" id="password2" placeholder="" />
            <label for="password2">New Password</label>
          </div>
          <div class="form-component">
            <input type="password" name="password" id="password3" placeholder="" />
            <label for="password3">Confirm Password</label>
          </div>
          <div class="button-group">
            <button class="btn-primary">Change password</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import { useAuthStore } from '@/stores/auth'
import { auth } from '@/utils/firebase'

const authStore = useAuthStore()

const formData = reactive({
  email: '',
  name: ''
})

const formRules = {
  email: { required, email },
  name: { minLength: minLength(6) }
}

const v$ = useVuelidate(formRules, formData)

const editForm = ref(false)

const toggleEdit = () => {
  editForm.value = !editForm.value
}

const save = async () => {
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
