<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter }       from 'vue-router'

const router = useRouter()

const career   = ref('')
const semester = ref('')
const subject  = ref('')

interface Q { q:string; a:string[]; correct:number }
const questions: Q[] = [
  {
    q: '¿Qué instrucción en C imprime texto en consola?',
    a: ['printf()', 'cin >>', 'cout <<', 'echo'],
    correct: 0,
  },
  {
    q: '¿Cuál es la complejidad de búsqueda binaria?',
    a: ['O(n)', 'O(log n)', 'O(n²)', 'O(n log n)'],
    correct: 1,
  },
]
const current   = ref(0)
const selected  = ref<number|null>(null)
const score     = ref(0)
const finished  = ref(false)

onMounted(() => {
  if (typeof window === 'undefined') return

  career.value   = sessionStorage.getItem('career')   || ''
  semester.value = sessionStorage.getItem('semester') || ''
  subject.value  = sessionStorage.getItem('subject')  || ''

  if (!career.value || !semester.value || !subject.value)
    return router.replace('/')
})

function next () {
  if (selected.value === null) return
  if (selected.value === questions[current.value].correct) score.value++
  selected.value = null
  if (++current.value === questions.length) finished.value = true
}
</script>

<template>
  <h1 v-if="subject">Evaluación – {{ subject }}</h1>
  <p class="tag">{{ career }} / {{ semester }}</p>

  <div v-if="!finished" class="card q-card">
    <p class="q">{{ current + 1 }}. {{ questions[current].q }}</p>

    <label v-for="(opt,i) in questions[current].a" :key="i" class="opt">
      <input type="radio" :value="i" v-model="selected" /> {{ opt }}
    </label>

    <button class="btn" @click="next">Siguiente</button>
  </div>

  <div v-else class="card result">
    <h2>Resultado</h2>
    <p>Obtuviste {{ score }} / {{ questions.length }} correctas.</p>
    <router-link class="btn" to="/history">Ver historial</router-link>
  </div>
</template>

<style scoped>
.tag{font-size:13px;color:#64748b;margin-bottom:14px}
.card{background:#fff;padding:24px;border-radius:12px;box-shadow:0 2px 6px #0001;width:100%;max-width:620px}
.q-card{margin-top:20px}
.q{font-weight:600;margin-bottom:18px}
.opt{display:block;margin-bottom:10px;cursor:pointer}
.opt input{margin-right:8px}
.btn{margin-top:18px;background:#3b82f6;color:#fff;border:0;padding:10px 22px;border-radius:8px;cursor:pointer}
.result{text-align:center;margin-top:40px}
</style>
