<template>
  <div id="add-plant">
    <div class="card">
      <div class="card-body">
        <div class="card-header">
          <h3>Add Plant</h3>
        </div>

        <section class="card-content" v-if="stepNumber == 1">
          <h4>Step {{ stepNumber }}</h4>

          <div class="form-component">
            <input type="text" name="name" id="name" placeholder="" v-model="formData.name" />
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
        </section>

        <footer class="card-footer">
          <div class="wizard-buttons">
            <button class="btn-secondary" :disabled="stepNumber == 1" @click="previous">
              Previous
            </button>
            <button class="btn-primary" @click="next">Next</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const stepNumber = ref(1)

const previous = () => {
  stepNumber.value--
}

const next = () => {
  stepNumber.value++
}

const formData = reactive({
  name: '',
  sunlight: 'light'
})
</script>
