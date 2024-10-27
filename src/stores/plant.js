import { defineStore } from 'pinia'

export const usePlantStore = defineStore('plantStore', {
  state: () => {
    return {
      plants: [
        {
          name: 'Anthurium',
          image: '/assets/images/plant-5.jpg',
          sunlight: 'shade',
          water: 'low',
          location: 'House'
        },
        {
          name: 'Spathipylum',
          image: '/assets/images/plant-1.jpg',
          sunlight: 'shade',
          water: 'medium',
          location: 'House'
        },
        {
          name: 'Sansevieria',
          image: '/assets/images/plant-2.jpg',
          sunlight: 'half-shade',
          water: 'high',
          location: 'House'
        },
        {
          name: 'Dracaena Marginata',
          image: '/assets/images/plant-1.jpg',
          sunlight: 'half-shade',
          water: 'high',
          location: 'House'
        },
        {
          name: 'Plant 5',
          image: '/assets/images/plant-3.jpg',
          sunlight: 'full',
          water: 'medium',
          location: 'House'
        },
        {
          name: 'Plant 6',
          image: '/assets/images/plant-5.jpg',
          sunlight: 'full',
          water: 'low',
          location: 'House'
        }
      ]
    }
  },
  getters: {
    getAllPlants(data) {
      return data.plants
    }
  }
})
