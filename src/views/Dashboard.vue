<script setup lang="ts">
import { computed } from 'vue'

/*  ≡ estadísticas a partir del historial guardado  */
const history = JSON.parse(localStorage.getItem('history') ?? '[]')

const totalEvals = history.length
const avg = computed(() =>{
  if(!totalEvals) return '—'
  const sum = history.reduce((t:any,r:any)=> t + Number(r.grade), 0)
  return (sum / totalEvals).toFixed(1)
})
</script>

<template>
  <h1>Panel del estudiante</h1>

  <div class="cards">
    <div class="card">
      <p class="label">Evaluaciones realizadas</p>
      <p class="value">{{ totalEvals }}</p>
    </div>

    <div class="card">
      <p class="label">Promedio general</p>
      <p class="value">{{ avg }}</p>
    </div>
  </div>

  <RouterLink to="/careers" class="btn">Comenzar nueva evaluación</RouterLink>
</template>

<style scoped>
.cards{display:flex;gap:24px;flex-wrap:wrap;margin-bottom:28px}
.card{flex:1;min-width:220px;background:#fff;border-radius:10px;padding:26px;
      box-shadow:0 1px 6px rgba(0,0,0,.06)}
.label{font-size:14px;color:#64748b;margin-bottom:6px}
.value{font-size:32px;font-weight:700;color:#0f172a}
.btn{display:inline-block;background:#2563eb;color:#fff;
     padding:10px 22px;border-radius:6px}
.btn:hover{background:#1e40af}
</style>
