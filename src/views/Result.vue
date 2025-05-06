<script setup lang="ts">
const res = JSON.parse(localStorage.getItem('lastResult')!)


if(res && !res.saved){
  const hist = JSON.parse(localStorage.getItem('history')||'[]')
  hist.unshift({...res, saved:true})
  localStorage.setItem('history', JSON.stringify(hist))
}
</script>

<template>
  <h1>Resultado</h1>

  <div class="box">
    <h2>{{ res.subject }}</h2>
    <p class="grade">{{ res.grade }} %</p>

    <details v-for="f in res.feedback" :key="f.question" class="fb">
      <summary :class="f.ok && 'ok'">
        {{ f.ok ? '✅' : '❌' }} {{ f.question }}
      </summary>
      <p class="ex">{{ f.ok ? 'Respuesta correcta' : 'Tu respuesta: '+f.your }}</p>
      <p class="ex">{{ f.explanation }}</p>
    </details>
  </div>

  <RouterLink class="btn" to="/history">Ir a historial</RouterLink>
</template>

<style scoped>
.box{background:#fff;padding:28px;border-radius:10px;box-shadow:0 1px 6px #0002;max-width:720px}
.grade{font-size:48px;font-weight:700;margin:12px 0;color:#0f172a}
.fb{margin-top:12px}
summary{cursor:pointer;font-weight:600}
summary.ok{color:#16a34a}
.ex{margin-left:14px;font-size:14px;color:#475569}
.btn{display:inline-block;margin-top:22px;background:#2563eb;color:#fff;padding:10px 22px;border-radius:6px}
</style>
