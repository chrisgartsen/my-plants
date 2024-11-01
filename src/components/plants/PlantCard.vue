<template>
  <div class="card">
    <div class="card-body">
      <div class="plant-image">
        <div class="image-overlay">
          <router-link to="/"><i class="fa-solid fa-magnifying-glass"></i></router-link>
          <router-link to="/"><i class="fa-solid fa-pen-to-square"></i></router-link>
          <router-link to="/"><i class="fa-solid fa-trash"></i></router-link>
        </div>
        <img :src="plant.image" alt="" />
      </div>
      <div class="plant-description">
        <h4>{{ plant.name }}</h4>

        <div class="plant-codex">
          <div class="sunlight">
            <i class="fa-solid fa-sun" v-if="plant.sunlight === 'full'"></i>
            <i class="fa-solid fa-cloud-sun" v-if="plant.sunlight === 'half-shade'"></i>
            <i class="fa-solid fa-cloud" v-if="plant.sunlight === 'shade'"></i>
          </div>
          <div class="water">
            <i class="fa-solid fa-droplet"></i>
            <i class="fa-solid fa-droplet"></i>
            <i class="fa-solid fa-droplet"></i>
          </div>
        </div>
        <p class="location">{{ plant.location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['plant'])
</script>
