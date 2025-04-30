<template>
  <div class="home-view">
    <SearchBar />
    <p>Вот список рекомендованных фильмов:</p>
    <MovieList :movies="recommendedMovies" />
  </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'HomeView',
  components: {
    MovieList,
    SearchBar
  },
  data() {
    return {
      recommendedMovies: [
        { title: 'Начало' },
        { title: 'Матрица' },
        { title: 'Интерстеллар' }
      ]
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
</style>
