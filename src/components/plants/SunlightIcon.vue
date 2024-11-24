<template>
  <div class="sunlight">
    <i class="fa-solid" :class="icon"></i>
    <!-- <i class="fa-solid fa-sun" v-if="sunlight === 'full'"></i>
    <i class="fa-solid fa-cloud-sun" v-if="sunlight === 'half-shade'"></i>
    <i class="fa-solid fa-cloud" v-if="sunlight === 'shade'"></i> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  sunlight: {
    required: true,
    type: String
  }
})

const icon = computed(() => {
  if (props.sunlight == 'full') return 'fa-sun'
  if (props.sunlight == 'half-shade') return 'fa-cloud-sun'
  if (props.sunlight == 'shade') return 'fa-cloud'

  return 'fa-question-circle'
})
</script>
