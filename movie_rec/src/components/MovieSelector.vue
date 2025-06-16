<!-- src/components/MovieSelector.vue -->
<template>
  <div class="movie-selector">
    <h2>Выберите фильм для рекомендации</h2>
    <select v-model="selectedId">
      <option disabled value="">-- Выберите фильм --</option>
      <option v-for="movie in movies" :key="movie.id" :value="movie.id">
        {{ movie.title }}
      </option>
    </select>
    <button @click="getRecommendations" :disabled="!selectedId">
      Показать рекомендации
    </button>
  </div>
</template>

<script>
import { useRecommendationStore } from '@/stores/recommendation'

export default {
  name: 'MovieSelector',
  data() {
    return {
      selectedId: '',
      movies: [
        { id: 1, title: 'Inception' },
        { id: 2, title: 'Interstellar' },
        { id: 3, title: 'The Matrix' },
        { id: 4, title: 'The Dark Knight' }
      ]
    }
  },
  methods: {
    getRecommendations() {
      const store = useRecommendationStore()
      store.fetchRecommendations(this.selectedId)
    }
  }
}
</script>

<style scoped>
.movie-selector {
  margin-bottom: 2rem;
}

select {
  padding: 0.5rem;
  margin-right: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #1e1e1e;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
</style>
