<template>
  <div id="app">
    <header>
      <h1>Movie Recommender</h1>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© 2025 Movie Recommender</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppRoot'
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header,
footer {
  background-color: #1e1e1e;
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  flex: 1;
  padding: 1rem;
}
</style>
