<script setup lang="ts">
import { ref } from 'vue'


const demo = [
  { date:'05‑may‑2025 09:00', subject:'(ELE‑0100) Hardware y Software', grade:'95' },
  { date:'05‑may‑2025 09:10', subject:'(PRO‑1200) Algoritmos',         grade:'88' },
]
const rows = ref(
  JSON.parse(localStorage.getItem('history') || 'null') ?? demo
)
</script>

<template>
  <h2>Mi historial</h2>

  <div v-if="!rows.length" class="empty">No hay registros</div>

  <table v-else class="pretty">
    <thead>
      <tr><th>Fecha</th><th>Materia</th><th>Nota</th></tr>
    </thead>
    <tbody>
      <tr v-for="r in rows" :key="r.date">
        <td>{{ r.date }}</td>
        <td>{{ r.subject }}</td>
        <td class="grade">{{ r.grade }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
h2      { margin-bottom:16px;font-size:22px }
.empty  { padding:40px 0;text-align:center;color:#64748b }
table.pretty{ border-collapse:collapse;width:100%;max-width:720px;background:#fff;
              box-shadow:0 1px 4px rgba(0,0,0,.08);border-radius:8px;overflow:hidden }
thead{ background:#1e293b;color:#fff }
th,td{ padding:10px 14px }
tbody tr:nth-child(even){ background:#f8fafc }
.grade{ text-align:center;font-weight:600 }
</style>
