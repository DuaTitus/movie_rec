<template>
  <div class="movie-list">
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :genres="movie.genres"
      :year="movie.year"
      :description="movie.description"
      :poster="movie.poster"
      :rating="movie.rating"
      :cast="movie.cast"
      :age="movie.age"
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
