<template>
  <div id="catalogue">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Latin Name</th>
          <th>Water</th>
          <th class="icon">Sunlight</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="plant in plants" :key="plant.id">
          <td>{{ plant.name }}</td>
          <td></td>

          <td>{{ plant.water }}</td>
          <td class="icon"><sunlight-icon :sunlight="plant.sunlight" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { usePlantsCatalogueStore } from '@/stores/plant'
import { onMounted, ref } from 'vue'

import SunlightIcon from '@/components/plants/SunlightIcon.vue'

const plantsCatalogueStore = usePlantsCatalogueStore()
let plants = ref([])

onMounted(() => {
  plants.value = plantsCatalogueStore.getAllPlants
})
</script>
