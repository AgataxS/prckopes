<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter }       from 'vue-router'

const router   = useRouter()
const career   = ref('')          
const semester = ref('')          
const subjects = [
  { code:'PRO‑1100', name:'Programación I' },
  { code:'EST‑1200', name:'Estructuras de Datos' },
]

onMounted(() => {
  
  if (typeof window !== 'undefined') {
    const c = sessionStorage.getItem('career')
    const s = sessionStorage.getItem('semester')
    if (!c || !s) return router.replace('/')   
    career.value   = c
    semester.value = s
  }
})

function openSubj (subj: string) {
  sessionStorage.setItem('subject', subj)
  router.push('/quiz')
}
</script>

<template>
  <h1 v-if="career">Materias – {{ career }} / {{ semester }}</h1>

  <div class="card-list">
    <button
      v-for="m in subjects"
      :key="m.code"
      class="card"
      @click="openSubj(m.name)"
    >
      <strong>{{ m.code }}</strong><br>
      {{ m.name }}
    </button>
  </div>
</template>

<style scoped>
.card-list{display:flex;flex-wrap:wrap;gap:18px;margin-top:12px}
.card{padding:20px 26px;border:0;border-radius:10px;width:220px;
      background:#f0fdfa;text-align:left;cursor:pointer;transition:.15s}
.card:hover{background:#ccfbf1;transform:translateY(-2px)}
strong{font-weight:700}
</style>
