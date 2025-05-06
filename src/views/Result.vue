<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

interface R { score:number; total:number; career:string; semester:string; subject:string; date:string }

const router = useRouter()
const data   = ref<R|null>(null)

onMounted(()=>{
  const raw = sessionStorage.getItem('quizResult')
  if (!raw) return router.replace('/careers')
  data.value = JSON.parse(raw) as R
})
</script>

<template>
  <div class="wrapper">
    <h1 v-if="data" class="title">
      Evaluación – {{ data.subject }}
    </h1>

    <p v-if="data" class="tag">
      {{ data.career }} / {{ data.semester }} · {{ data.date }}
    </p>

    <div v-if="data" class="card">
      <p class="big">{{ data.score }} / {{ data.total }}</p>

      <div class="btns">
        <router-link class="btn"        to="/history">Ver historial</router-link>
        <router-link class="btn hollow" to="/careers">Nueva evaluación</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

.wrapper{display:flex;flex-direction:column;align-items:center;margin-top:60px}
.title  {font-size:28px;font-weight:600;margin-bottom:4px}
.tag    {font-size:14px;color:#64748b;margin-bottom:26px}


.card{
  width:100%;
  max-width:480px;
  background:#fff;
  padding:40px 32px;
  border-radius:16px;
  box-shadow:0 4px 16px #0002;
  text-align:center;
}

.big{
  font-size:48px;
  font-weight:700;
  margin-bottom:28px;
  color:#2563eb;          
}


.btns{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}

.btn{
  background:#2563eb;
  color:#fff;
  padding:12px 28px;
  border-radius:10px;
  font-weight:500;
  text-decoration:none;
  transition:.15s;
}

.btn:hover{filter:brightness(.9)}
.hollow{
  background:#fff;
  color:#2563eb;
  border:2px solid #2563eb;
}
.hollow:hover{background:#eff6ff}
</style>
