<template>
  <div class="movie-card">
    <img :src="poster" class="poster">
    <div class="movie-info">
      <h3>{{ title }}</h3>
      <p class="movie-description">{{ description }}</p>
      <p class="movie-rating">Рейтинг: {{ rating }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    title: String,
    description: String,
    poster: String,
    rating: Number
  }
}
</script>

<style scoped>
.movie-card {
  background-color: #1e1e1e;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5)
}

.movie-poster {
  width: 12px;
  height: 18px;
  object-fit: cover;
  border-radius: 4px;
}

.movie-info {
  flex: 1;
}

.movie-description {
  font-size: 0.9rem;
  color: #cccccc;
}

.movie-rating {
  margin-top: 0.5rem;
  font-weight: bold;
}
</style>
