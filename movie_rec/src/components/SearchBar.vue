<template>
  <div class="search-bar">
    <form class="search-form" action="">
      <input type="text" class="searg=ch-input" placeholder="Поиск фильмов" required>
      <button type="submit" class="search-button">Найти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
.search-bar {
  max-width: 400px;
  margin: 1rem auto;
}

.search-form {
  display: flex;
  gap: 0.5rem;
}

.search-input {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.search-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.search-button:hover {
  background-color: #555;
}
</style>
