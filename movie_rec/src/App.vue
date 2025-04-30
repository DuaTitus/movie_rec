<template>
  <div id="app">
    <header>
      <h1>Movie Recommender</h1>
      <router-link to="/register">Регистрация</router-link>
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

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

header,
footer {
  width: 100%;
  background-color: #1e1e1e;
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  flex: 1;
  padding: 1rem 2rem;
}
</style>
