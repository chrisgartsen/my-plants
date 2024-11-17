<template>
  <div class="card">
    <div class="card-body">
      <div class="card-header">
        <slot name="header">
          <h3>{{ title }}</h3>
        </slot>
      </div>

      <section class="card-content">
        <slot name="content" :stepNumber="stepNumber"> </slot>
      </section>
      <!-- <add-plant-step-one
        step-number="1"
        v-if="stepNumber == 1"
        :formData="formData"
        @updateFormData="updateFormData"
      /> -->

      <footer class="card-footer">
        <slot name="footer">
          <div class="wizard-buttons">
            <button class="btn-secondary" :disabled="stepNumber == 1" @click="previous">
              Previous
            </button>
            <button class="btn-primary" @click="next" v-if="stepNumber < steps">Next</button>
            <button class="btn-primary" @click="save" v-if="stepNumber == steps">Save</button>
          </div>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  steps: {
    type: Number,
    default: 3
  },
  title: {
    type: String,
    default: 'Wizard'
  }
})

const emits = defineEmits(['save'])

const stepNumber = ref(1)

const previous = () => {
  console.log('previous')
  if (stepNumber.value > 0) {
    stepNumber.value--
  }
}

const next = () => {
  if (stepNumber.value < props.steps) {
    stepNumber.value++
  }
}

const save = () => {
  emits('save')
}
</script>
