import { defineStore } from 'pinia'
import { http }        from '@/api/http'

interface State {
  token: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    token: localStorage.getItem('token')
  }),

  getters: {
    isAuth: (s) => !!s.token
  },

  actions: {
    setToken (t: string) {
      this.token = t
      localStorage.setItem('token', t)
    },
    logout () {
      this.token = null
      localStorage.removeItem('token')
    },

    async login (email: string, password: string) {
      const body = new URLSearchParams({ username: email, password })
      const { data } = await http.post('/api/v1/auth/login', body, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      this.setToken(data.access_token)
    },

    async register (email: string, password: string) {
      await http.post('/api/v1/auth/register', { email, password })
      await this.login(email, password)
    }
  }
})
