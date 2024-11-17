<template>
  <div id="add-plant">
    <wizard-component @save="save" :steps="3" :title="title">
      <template #content="{ stepNumber }">
        <div v-if="stepNumber == 1">
          <h4>Step 1 - General Plant information</h4>

          - Common name - latin name of the Plant - light - watering frequency / amount - Humidity
          preferences - Fertilization schedule
        </div>

        <div v-if="stepNumber == 2">Step Two</div>

        <div v-if="stepNumber == 3">Step Three</div>
      </template>
    </wizard-component>
  </div>
</template>

<script setup>
import WizardComponent from '@/components/custom/WizardComponent.vue'
import { reactive } from 'vue'

const title = 'Add a plant to the catalogue'

const formData = reactive({
  name: '',
  sunlight: '',
  water: ''
})

const save = () => {
  console.log('Saving form')
}
</script>
