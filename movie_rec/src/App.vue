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
  name: 'AppRoot',
  computed: {
    isRegisterPage() {
      return this.$route.path === '/register'
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
}

#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

header,
footer {
  background-color: #1e1e1e;
  color: white;
  padding: 1rem;
  text-align: center;
  position: relative;
  width: 100%;
}

main {
  flex: 1;
  padding: 1rem 2rem;
}

.header-button {
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: #ffffff10;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transform: background-color 0.2s ease;
}

.header-button:hover {
  background-color: #ffffff30;
}
</style>
