<template>
  <div class="home-view">

    <MovieSelector :allMovies="rawMovies" />

    <p>Вот список рекомендованных фильмов:</p>

    <div v-if="loading">Загрузка рекомендаций...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <MovieList :movies="recommendedMovies.length ? recommendedMovies : allMappedMovies" />
  </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
import MovieSelector from '../components/MovieSelector.vue'

import { useUserStore } from '@/stores/userStore'
import { useRecommendationStore } from '@/stores/recommendation'
import rawMovies from '@/assets/Movie.json'

export default {
  name: 'HomeView',
  components: {
    MovieList,
    MovieSelector
  },
  data() {
    return {
      rawMovies,
      allMappedMovies: []
    }
  },
  mounted() {
    this.allMappedMovies = rawMovies
      .filter(movie => movie.Poster && movie.Plot)
      .map((movie, index) => ({
        id: index + 1,
        title: movie.Title,
        description: movie.Plot,
        poster: movie.Poster,
        genres: movie.Genre,
        year: movie.Year,
        cast: movie.Actors,
        rating: movie.imdbRating,
        age: movie.Rated
      }))
  },
  setup() {
    const userStore = useUserStore()
    const recommendationStore = useRecommendationStore()

    return {
      user: userStore.user,
      recommendedMovies: recommendationStore.recommendations,
      loading: recommendationStore.loading,
      error: recommendationStore.error
    }
  }
}
</script>

<style scoped>
.home-view {
  max-width: 100%;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
