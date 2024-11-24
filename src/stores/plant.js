import { defineStore } from 'pinia'

export const usePlantsCatalogueStore = defineStore('plantsCatalogueStore', {
  state: () => {
    return {
      plants: [
        {
          id: '1',
          name: 'Anthurium',
          image: '/assets/images/plant-5.jpg',
          sunlight: 'shade',
          water: 'low'
        },
        {
          id: '2',
          name: 'Spathipylum',
          image: '/assets/images/plant-1.jpg',
          sunlight: 'shade',
          water: 'medium'
        },
        {
          id: '3',
          name: 'Sansevieria',
          image: '/assets/images/plant-2.jpg',
          sunlight: 'half-shade',
          water: 'high'
        },
        {
          id: '4',
          name: 'Dracaena Marginata',
          image: '/assets/images/plant-1.jpg',
          sunlight: 'half-shade',
          water: 'high'
        },
        {
          id: '5',
          name: 'Plant 5',
          image: '/assets/images/plant-3.jpg',
          sunlight: 'full',
          water: 'medium'
        },
        {
          id: '6',
          name: 'Plant 6',
          image: '/assets/images/plant-5.jpg',
          sunlight: 'full',
          water: 'low'
        }
      ]
    }
  },
  getters: {
    getAllPlants(data) {
      return data.plants
    },
    getPlantById(state) {
      return (plantId) => state.plants.find((plant) => plant.id === plantId)
    }
  }
})
