<template>
  <div id="plants">
    <div class="toolbar">
      <form class="search-form" @submit.prevent="submitSearch">
        <div class="form-component">
          <input type="text" name="search" id="search" placeholder="Search" />
          <button class="search-button"><i class="fa fa-search"></i></button>
        </div>
      </form>

      <router-link class="btn-primary" :to="{ name: 'add-plant' }">Add Plant</router-link>
    </div>

    <div class="card-grid">
      <plant-card v-for="plant in state.plants" :key="plant.name" :plant="plant" />
    </div>
  </div>
</template>

<script setup>
import { usePlantStore } from '@/stores/plant'
import { computed, onMounted, reactive } from 'vue'

import PlantCard from '@/components/plants/PlantCard.vue'

const plantStore = usePlantStore()
const state = reactive({ plants: [] })

const submitSearch = () => {
  console.log('searching')
}

onMounted(() => {
  state.plants = plantStore.getAllPlants
})
</script>
