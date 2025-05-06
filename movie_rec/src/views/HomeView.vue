<template>
  <div class="home-view">
    <SearchBar />
    <p>Вот список рекомендованных фильмов:</p>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
import SearchBar from '../components/SearchBar.vue'
import { useUserStore } from '@/stores/userStore'
import rawMovies from '@/assets/movies.json'

export default {
  name: 'HomeView',
  components: {
    MovieList,
    SearchBar
  },
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    this.movies = rawMovies
      .filter(movie => movie.thumbnail && movie.extract)
      .map((movie, index) => ({
        id: index + 1,
        title: movie.title,
        description: movie.extract,
        poster: movie.thumbnail,
        rating: (Math.random() * 2 + 7).toFixed(1) // случайный рейтинг от 7.0 до 9.0
      }))
  },
  setup() {
    const userStore = useUserStore()
    return { user: userStore.user }
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
</style>
