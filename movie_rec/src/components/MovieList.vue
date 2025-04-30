<template>
  <div class="movie-list">
    <MovieCard
      v-for="(movie, index) in movies"
      :key="index"
      :title="movie.title"
    />
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
  name: 'MovieList',
  components: {
    MovieCard
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
