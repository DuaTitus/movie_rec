<template>
  <div class="movie-selector">
    <label for="movie-select">Выберите фильм для рекомендаций:</label>
    <select id="movie-select" v-model="selectedId" @change="fetchRecommendations">
      <option disabled value="">-- выберите фильм --</option>
      <option v-for="movie in allMovies" :key="movie.imdbID" :value="movie.imdbID">
        {{ movie.Title }}
      </option>
    </select>
  </div>
</template>

<script>
import { useRecommendationStore } from '@/stores/recommendation'

export default {
  name: 'MovieSelector',
  props: {
    allMovies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedId: ''
    }
  },
  methods: {
    async fetchRecommendations() {
      if (!this.selectedId) return

      const store = useRecommendationStore()
      await store.fetchRecommendationsById(this.selectedId)
    }
  }
}
</script>

<style scoped>
.movie-selector {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

select {
  padding: 0.5rem;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
}
</style>
