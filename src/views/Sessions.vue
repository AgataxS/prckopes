<template>
    <h1>Sesiones</h1>
  
    <table>
      <tr><th>ID</th><th>Documento</th><th>Inicio</th></tr>
      <tr v-for="s in rows" :key="s.id">
        <td>{{ s.id }}</td><td>{{ s.doc }}</td><td>{{ s.time }}</td>
      </tr>
    </table>
  </template>
  
  <script setup lang="ts">
  const rows = [
    { id: 1, doc: 'Hardware y Software', time: '2025‑05‑05 14:20' },
    { id: 2, doc: 'Programación I',     time: '2025‑05‑06 09:10' },
  ]
  </script>
  
  <style scoped>
  table{margin-top:1rem;width:100%;border-collapse:collapse}
  th,td{border:1px solid #ccd;padding:.4rem;text-align:left}
  </style>
  