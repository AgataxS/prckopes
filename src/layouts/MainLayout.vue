<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { ref } from 'vue'

const store   = useAuthStore()
const mail    = ref(localStorage.getItem('userMail') ?? 'correo@upds.edu.bo')

function logout (){ store.logout(); location.href='/login' }
</script>

<template>
  <div class="page">
    <aside>
      
      <div class="card">
        <div class="avatar">👤</div>
        <p class="mail">{{ mail }}</p>
      </div>

      
      <RouterLink to="/careers">Carreras</RouterLink>
      <RouterLink to="/history">Mi historial</RouterLink>

      <button class="logout" @click="logout">Cerrar sesión</button>
    </aside>

    <main><RouterView/></main>
  </div>
</template>

<style scoped>
.page{display:flex;height:100vh}
aside{background:#1e293b;color:#fff;width:230px;padding:24px 14px;
      display:flex;flex-direction:column;gap:16px}
a{color:#cbd5e1;padding:9px;border-radius:4px}
a.router-link-active{background:#0f172a}
.logout{margin-top:auto;background:#ef4444;border:0;border-radius:4px;padding:9px;color:#fff}
.card{background:#0f172a;border-radius:8px;padding:18px 12px;text-align:center}
.avatar{font-size:40px;margin-bottom:4px}
.mail{font-size:13px;word-break:break-all;color:#cbd5e1}
main{flex:1;padding:32px;overflow:auto}
</style>
