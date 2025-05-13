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
import rawMovies from '@/assets/Movie.json'

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
