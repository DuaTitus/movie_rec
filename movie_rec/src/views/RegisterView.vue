<template>
  <div class="register-view">
    <h1>Регистрация</h1>
    <p>Создайте аккаунт, чтобы получать персональные рекомендации.</p>

    <form class="register-form" @submit.prevent="register">
      <input type="text" placeholder="Имя пользователя" v-model="username" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Пароль" v-model="password" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      // Пока просто выводим в консоль
      console.log('Регистрация:', this.username, this.email, this.password)
    }
  }
}
</script>

<style scoped>
.register-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.register-form input {
  padding: 0.5rem;
  font-size: 1rem;
}

.register-form button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
