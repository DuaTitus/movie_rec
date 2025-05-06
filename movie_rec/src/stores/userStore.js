import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    registerUser(userData) {
      this.user = userData
      console.log('Пользователь сохранен в Pinia:', this.user)
    }
  }
})
