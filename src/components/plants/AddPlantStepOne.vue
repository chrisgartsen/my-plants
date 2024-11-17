<template>
  <section class="card-content" v-if="stepNumber == 1">
    <div class="form-component">
      <input
        type="text"
        name="name"
        id="name"
        placeholder=""
        v-bind:value="name"
        @input="updateName"
      />
      <label for="name">Name</label>
    </div>

    <div class="radio-buttons">
      <span>Sunlight</span>
      <div class="form-component">
        <label for="light">
          <input type="radio" name="sunlight" value="light" v-model="formData.sunlight" />
          <i class="fa fa-sun"></i>Light
        </label>
      </div>
      <div class="form-component">
        <label for="light">
          <input type="radio" name="sunlight" value="half-shade" v-model="formData.sunlight" />
          <i class="fa fa-cloud-sun"></i>Half Shade
        </label>
      </div>
      <div class="form-component">
        <label for="light">
          <input type="radio" name="sunlight" value="shade" v-model="formData.sunlight" />
          <i class="fa fa-cloud"></i>Shade
        </label>
      </div>
    </div>

    <div class="select">
      <span>Water</span>
      <div class="form-component">
        <select name="water" id="water">
          <option>Please Select</option>
          <option value="1">Once per month</option>
          <option value="2">Once per week</option>
          <option value="3">Twice per week</option>
          <option value="4">Daily</option>
        </select>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['updateName'])
const props = defineProps(['stepNumber', 'name'])

const formData = reactive({
  name: '',
  sunlight: '',
  water: ''
})

const updateName = (e) => {
  console.log('Updating Name', e.target.value)
  emit('updateValue', e.target.value)
}
</script>
