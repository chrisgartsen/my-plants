<template>
  <div id="plants">
    <div class="toolbar">
      <form class="search-form" @submit.prevent="submitSearch">
        <div class="form-component">
          <input type="text" name="search" id="search" placeholder="Search" v-model="search" />
          <button class="search-button"><i class="fa fa-search"></i></button>
          <button v-if="showClear" class="clear-button" @click="clearSearch">
            <i class="fa fa-x"></i>
          </button>
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
import { computed, onMounted, reactive, ref } from 'vue'

import PlantCard from '@/components/plants/PlantCard.vue'

const plantStore = usePlantStore()
const state = reactive({ plants: [] })

const search = ref('')

const showClear = computed(() => {
  return search.value != ''
})

const clearSearch = () => {
  search.value = ''
}

const submitSearch = () => {
  if (search.value) {
    console.log('Searching: ', search.value)
  }
}

onMounted(() => {
  state.plants = plantStore.getAllPlants
})
</script>
