<template>
  <h1>All plants</h1>

  <div class="card-grid">
    <div v-for="plant in plants" :key="plant.name" class="card">
      <div class="card-body">
        <div class="plant-image">
          <div class="image-overlay">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
          </div>
          <img :src="plant.image" alt="" />
        </div>
        <div class="plant-description">
          <h4>{{ plant.name }}</h4>

          <div class="plant-codex">
            <i class="fa-solid fa-cloud-sun"></i>

            |

            <i class="fa-solid fa-droplet"></i>
            <i class="fa-solid fa-droplet"></i>
            <i class="fa-solid fa-droplet"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const plants = reactive([
  { name: 'Anthurium', image: '/assets/images/plant-5.jpg' },
  { name: 'Spathipylum', image: '/assets/images/plant-1.jpg' },
  { name: 'Sansevieria', image: '/assets/images/plant-2.jpg' },
  { name: 'Dracaena Marginata', image: '/assets/images/plant-1.jpg' },
  { name: 'Plant 5', image: '/assets/images/plant-3.jpg' },
  { name: 'Plant 6', image: '/assets/images/plant-5.jpg' }
])
</script>
