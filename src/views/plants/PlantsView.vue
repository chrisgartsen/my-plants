<template>
  <div id="plants">
    <div class="toolbar">
      <form class="search-form" @submit.prevent="submitSearch">
        <div class="form-component">
          <input type="text" name="search" id="search" placeholder="Search" />
          <button class="search-button"><i class="fa fa-search"></i></button>
        </div>
      </form>

      <button class="btn-primary">Add Plant</button>
    </div>

    <div class="card-grid">
      <div v-for="plant in state.plants" :key="plant.name" class="card">
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
    </div>
  </div>
</template>

<script setup>
import { usePlantStore } from '@/stores/plant'
import { computed, onMounted, reactive } from 'vue'

const plantStore = usePlantStore()
const state = reactive({ plants: [] })

const submitSearch = () => {
  console.log('searching')
}

onMounted(() => {
  state.plants = plantStore.getAllPlants
})
</script>
