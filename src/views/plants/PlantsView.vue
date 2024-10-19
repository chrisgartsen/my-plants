<template>
  <h1>All plants</h1>

  <div class="card-grid">
    <div v-for="plant in plants" :key="plant.name" class="card">
      <div class="card-body">
        {{ plant.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const plants = reactive([
  { name: 'Plant 1' },
  { name: 'Plant 2' },
  { name: 'Plant 3' },
  { name: 'Plant 4' },
  { name: 'Plant 5' },
  { name: 'Plant 6' }
])
</script>
