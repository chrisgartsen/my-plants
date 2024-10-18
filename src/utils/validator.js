import { reactive, computed, ref } from 'vue'

const fieldHasError = computed(() => {
  return (v, fieldName) => {
    return v[fieldName].$error
  }
})

const errorMessage = computed(() => {
  return (v, fieldName) => {
    return v[fieldName].$errors[0].$message
  }
})

export { fieldHasError, errorMessage }
