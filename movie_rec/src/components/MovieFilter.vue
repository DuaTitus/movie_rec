<template>
  <div class="movie-filter">
    <button @click="loadPopular" class="filter-button">Популярные фильмы</button>

    <div class="filter-group">
      <select v-model="selectedYear">
        <option disabled value="">Год</option>
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>

      <select v-model="selectedGenre">
        <option disabled value="">Жанр</option>
        <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
      </select>

      <button @click="applyFilters" class="filter-button">Применить фильтр</button>
    </div>
  </div>
</template>

<script>
import { useRecommendationStore } from '@/stores/recommendation'

export default {
  name: 'MovieFilter',
  data() {
    return {
      selectedYear: '',
      selectedGenre: '',
      years: Array.from({ length: 2025 - 1980 }, (_, i) => 1980 + i).reverse(),
      genres: [
        'Action', 'Comedy', 'Drama', 'Thriller', 'Romance', 'Horror',
        'Documentary', 'Crime', 'Adventure', 'Animation', 'Sci-Fi', 'Fantasy'
      ]
    }
  },
  methods: {
    async loadPopular() {
      const store = useRecommendationStore()
      await store.fetchPopularMovies()
    },
    async applyFilters() {
      if (!this.selectedYear || !this.selectedGenre) return
      const store = useRecommendationStore()
      await store.fetchFilteredMovies({
        year: this.selectedYear,
        genre: this.selectedGenre
      })
    }
  }
}
</script>

<style scoped>
.movie-filter {
  margin-bottom: 2rem;
}

.filter-group {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-button {
  padding: 0.5rem 1rem;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-button:hover {
  background-color: #666;
}

select {
  padding: 0.5rem;
  border-radius: 4px;
}
</style>
