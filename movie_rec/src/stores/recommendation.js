import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecommendationStore = defineStore('recommendation', {
  state: () => ({
    recommendations: [],
    popularMovies: [],
    filteredMovies: [],
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
    },

    async fetchRecommendationsByTitle(title) {
      this.loading = true
      this.error = null
      this.recommendations = []

      try {
        const res = await axios.get('http://localhost:5000/recommend/title', {
          params: { title }
        })

        if (Array.isArray(res.data)) {
          this.recommendations = res.data
        } else {
          throw new Error('Некорректный формат данных от сервера')
        }
      } catch (err) {
        this.error = 'Ошибка при получении рекомендаций по названию: ' + err.message
      } finally {
        this.loading = false
      }
    },

    async fetchPopularMovies() {
      this.loading = true
      this.error = null
      this.recommendations = []

      try {
        const response = await axios.get('/popular')
        if (Array.isArray(response.data)) {
          this.recommendations = response.data
        } else {
          throw new Error('Некорректный формат данных от сервера')
        }
      } catch (err) {
        this.error = 'Ошибка при получении популярных фильмов: ' + err.message
      } finally {
        this.loading = false
      }
    },

    async fetchFilteredMovies({ year, genre }) {
      this.loading = true
      this.error = null
      this.recommendations = []

      try {
        const response = await axios.get('/filter', {
          params: { year, genre }
        })
        if (Array.isArray(response.data)) {
          this.recommendations = response.data
        } else {
          throw new Error('Некорректный формат данных от сервера')
        }
      } catch (err) {
        this.error = 'Ошибка при фильтрации фильмов: ' + err.message
      } finally {
        this.loading = false
      }
    }

  }
})
