<!-- src/components/MovieTitleSearch.vue -->
<template>
  <div class="movie-title-search">
    <form @submit.prevent="handleSearch">
      <input
        v-model="searchTitle"
        type="text"
        placeholder="Введите название фильма"
        class="search-input"
      />
      <button type="submit" class="search-button">Показать рекомендации</button>
    </form>
  </div>
</template>

<script>
import { useRecommendationStore } from '@/stores/recommendation'

export default {
  name: 'MovieTitleSearch',
  data() {
    return {
      searchTitle: ''
    }
  },
  methods: {
    async handleSearch() {
      if (!this.searchTitle.trim()) return

      const store = useRecommendationStore()
      await store.fetchRecommendationsByTitle(this.searchTitle)
    }
  }
}
</script>

<style scoped>
.movie-title-search {
  margin-bottom: 2rem;
}

.search-input {
  padding: 0.5rem;
  width: 60%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #666;
}
</style>
