<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const career = ref<string>('')        
const sems   = ['1‑2025', '2‑2025', '3‑2025']

onMounted(() => {
  
  if (typeof window !== 'undefined') {
    const c = sessionStorage.getItem('career')
    if (c) career.value = c
    else   router.replace('/')         
  }
})


function open(s: string) {
  sessionStorage.setItem('semester', s)
  router.push('/subjects')
}
</script>

<template>
  <h1 v-if="career">Semestres – {{ career }}</h1>

  <div class="grid">
    <button
      v-for="s in sems"
      :key="s"
      @click="open(s)"
    >
      {{ s }}
    </button>
  </div>
</template>

<style scoped>
.grid{display:flex;gap:18px;flex-wrap:wrap;margin-top:12px}
button{padding:16px 28px;border:0;border-radius:8px;background:#e0e7ff;
       font-weight:600;cursor:pointer;transition:.15s}
button:hover{background:#c7d2fe;transform:translateY(-2px)}
</style>
