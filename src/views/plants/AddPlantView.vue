<template>
  <div id="add-plant">
    <div class="card">
      <div class="card-body">
        <div class="card-header">
          <h3>Add Plant</h3>
          <h4>Step {{ stepNumber }}</h4>
        </div>

        <add-plant-step-one
          step-number="1"
          v-if="stepNumber == 1"
          :formData="formData"
          @updateFormData="updateFormData"
        />

        <footer class="card-footer">
          <div class="wizard-buttons">
            <button class="btn-secondary" :disabled="stepNumber == 1" @click="previous">
              Previous
            </button>
            <button class="btn-primary" @click="next" v-if="stepNumber < steps">Next</button>
            <button class="btn-primary" @click="save" v-if="stepNumber == steps">Save</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

import AddPlantStepOne from '@/components/plants/AddPlantStepOne.vue'

const stepNumber = ref(1)
const steps = ref(4)

const previous = () => {
  if (stepNumber.value > 0) {
    stepNumber.value--
  }
}

const next = () => {
  if (stepNumber.value < steps.value) {
    stepNumber.value++
  }
}

const save = () => {
  console.log('Saving form')
}

const formData = reactive({
  name: 'kjkj',
  light: 'shade',
  water: ''
})

const updateFormData = (newVal) => {
  console.log('Updating Formdata - Parent', newVal)
}
</script>
