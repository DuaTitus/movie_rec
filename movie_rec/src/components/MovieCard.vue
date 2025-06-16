<template>
  <div class="movie-card">
    <img :src="poster" class="poster">
    <div class="movie-info">
      <h2 class="movie-title">{{ title }}</h2>
      <p><span class="movie-genres">Жанры:</span> {{ genres }}</p>
      <p><span class="movie-year">Год производства:</span> {{ year }}</p>
      <p><span class="movie-description">Описание:</span> {{ description }}</p>
      <p><span class="movie-rating">Рейтинг:</span> {{ rating }}</p>
      <p><span class="movie-cast">В ролях:</span> {{ cast }}</p>
      <p><span class="movie-age">Возрастной рейтинг:</span> {{ age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    title: String,
    genres: Array,
    year: Number,
    description: String,
    poster: String,
    rating: Number,
    cast: Array,
    age: String
  }
}
</script>

<style scoped>
.movie-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.3rem;
  letter-spacing: 0.5px;
}

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

.movie-description,
.movie-rating,
.movie-genres,
.movie-cast,
.movie-year,
.movie-age {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.75rem;
}
</style>
