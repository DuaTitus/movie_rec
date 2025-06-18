import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecommendationStore = defineStore('recommendation', {
  state: () => ({
    recommendations: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchRecommendationsById(movieId) {
      this.loading = true
      this.error = null
      this.recommendations = []

      try {
        const response = await axios.post('http://localhost:5000/recommend', {
          id: movieId
        })

        // Проверка на формат
        if (Array.isArray(response.data)) {
          this.recommendations = response.data
        } else {
          throw new Error('Некорректный формат данных от сервера')
        }
      } catch (err) {
        this.error = 'Ошибка при получении рекомендаций: ' + err.message
      } finally {
        this.loading = false
      }
    }
  }
})
