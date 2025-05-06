<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const careers = ['Ing. Sistemas', 'Ing. Civil', 'Ing. Industrial']
function open(c:string){
  sessionStorage.setItem('career', c)
  router.push('/semesters')
}
</script>

<template>
  <h1>Carreras</h1>
  <div class="grid">
    <button v-for="c in careers" :key="c" @click="open(c)">{{ c }}</button>
  </div>
</template>

<style scoped>
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}
button{padding:18px;border:0;border-radius:10px;background:#f1f5f9;font-weight:600}
button:hover{background:#cbd5e1}
</style>
