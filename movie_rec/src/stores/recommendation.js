// src/stores/recommendation.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecommendationStore = defineStore('recommendation', {
  state: () => ({
    recommendations: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchRecommendations(movieId) {
      this.loading = true
      this.error = null

      try {
        const response = await axios.post('http://localhost:5000/recommend', {
          movie_id: movieId,
        })

        this.recommendations = response.data.recommendations
      } catch (err) {
        this.error = 'Ошибка загрузки рекомендаций'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
  },
})
