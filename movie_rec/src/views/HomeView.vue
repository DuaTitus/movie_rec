<template>
  <div class="home-view">
    <h1>Добро пожаловать!</h1>
    <p>Ищите интересные фильмы или получите персональные рекомендации.</p>

    <div class="search-section">
      <input type="text" placeholder="Введите название фильма..." />
      <button>Поиск</button>
    </div>

    <div class="recommendations">
      <h2>Рекомендуемые фильмы</h2>
      <div class="movie-list">
        <!-- Заглушки для карточек фильмов -->
        <div class="movie-card">🎬 Фильм 1</div>
        <div class="movie-card">🎬 Фильм 2</div>
        <div class="movie-card">🎬 Фильм 3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.search-section {
  margin: 1rem 0;
  display: flex;
  gap: 0.5rem;
}

.search-section input {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
}

.search-section button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

.recommendations {
  margin-top: 2rem;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  width: calc(33% - 1rem);
  text-align: center;
}
</style>
