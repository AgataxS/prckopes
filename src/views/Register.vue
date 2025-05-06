<template>
    <div class="card">
      <h1>Registro</h1>
  
      <form @submit.prevent="submit">
        <input v-model="email"    type="email"     placeholder="Correo"      required />
        <input v-model="password" type="password"  placeholder="Contraseña" required />
        <button type="submit">Crear cuenta</button>
      </form>
  
      <RouterLink class="link" to="/login">Ya tienes cuenta</RouterLink>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref }          from 'vue'
  import { useRouter }    from 'vue-router'
  import { useAuthStore } from '@/store/auth'
  
  const email    = ref('')
  const password = ref('')
  const router   = useRouter()
  const auth     = useAuthStore()
  
  async function submit () {
    try {
      await auth.register(email.value, password.value)
      router.push('/dashboard')
    } catch { alert('El correo ya existe') }
  }
  </script>
  
  <style scoped src="@/styles/card.css"></style>
  