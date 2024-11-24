<template>
  <div class="action">
    <router-link class="btn-primary" :to="{ name: 'catalogue-add' }">Add Plant</router-link>
  </div>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Latin Name</th>
        <th>Water</th>
        <th>Sunlight</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="plant in plants" :key="plant.id" @click="showDetails(plant.id)">
        <td>{{ plant.name }}</td>
        <td></td>
        <td>{{ plant.water }}</td>
        <td class="icon"><sunlight-icon :sunlight="plant.sunlight" /></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { usePlantsCatalogueStore } from '@/stores/plant'
import SunlightIcon from '@/components/plants/SunlightIcon.vue'

const router = useRouter()

const plantsCatalogueStore = usePlantsCatalogueStore()
let plants = ref([])

onMounted(() => {
  plants.value = plantsCatalogueStore.getAllPlants
})

const showDetails = (id) => {
  console.log(id)
  router.push({ name: 'details', params: { id } })
}
</script>
