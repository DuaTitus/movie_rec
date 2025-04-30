<template>
  <div class="movie-card">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    title: String
  }
}
</script>

<style scoped>
.movie-card {
  background: #000000;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}
</style>
