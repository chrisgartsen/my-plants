<template>Plant Details: {{ id }} - {{ plant }}</template>

<script setup>
import { onMounted, ref } from 'vue'
import { usePlantsCatalogueStore } from '@/stores/plant'

const props = defineProps(['id'])
const plantsCatalogueStore = usePlantsCatalogueStore()
const plant = ref({})

onMounted(() => {
  plant.value = plantsCatalogueStore.getPlantById(props.id) // note - id is passed as a string value not an integer
})
</script>
