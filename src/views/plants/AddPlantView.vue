<template>
  <div id="add-plant">
    <wizard-component @save="save" :steps="4" :title="title">
      <template #content="{ stepNumber }">
        <div v-if="stepNumber == 1">
          <h4>Step 1 - General Plant information</h4>

          <div class="form-component">
            <input type="text" name="name" id="name" placeholder="" v-model="formData.name" />
            <label for="name">Common Name</label>
          </div>
          <div class="form-component">
            <input
              type="text"
              name="latinName"
              id="latinName"
              placeholder=""
              v-model="formData.latinName"
            />
            <label for="latinname">Latin Name</label>
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
                <input
                  type="radio"
                  name="sunlight"
                  value="half-shade"
                  v-model="formData.sunlight"
                />
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

          <div class="select">
            <span>Fertilizer</span>
            <div class="form-component">
              <select name="fertilizer" id="fertilizer">
                <option>Please Select</option>
                <option value="1">Once per month</option>
                <option value="2">Once per two months</option>
                <option value="3">Twice per year</option>
                <option value="4">Yearly</option>
              </select>
            </div>
          </div>

          <div class="select">
            <span>Humidity</span>
            <div class="form-component">
              <select name="humidity" id="humidity">
                <option>Please Select</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
              </select>
            </div>
          </div>
        </div>

        <div v-if="stepNumber == 2">
          <h4>Step 2 - Summer</h4>
        </div>

        <div v-if="stepNumber == 3">
          <h4>Step 3 - Winter</h4>
        </div>

        <div v-if="stepNumber == 4">
          <h4>Step 4 - Summary</h4>
        </div>
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
  latinName: '',
  sunlight: '',
  water: '',
  humidity: '',
  fertilizer: ''
})

const save = () => {
  console.log('Saving form')
}
</script>
