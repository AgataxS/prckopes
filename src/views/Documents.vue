<template>
    <h1>Documentos</h1>
    <table><tr><th>Título</th><th>Materia</th></tr>
      <tr v-for="d in docs" :key="d.t"><td>{{d.t}}</td><td>{{d.m}}</td></tr>
    </table>
  </template>
  <script setup lang="ts">
  const docs=[{t:'Hardware y Software',m:'ELE‑0100'},{t:'Programación I',m:'PRO‑1100'}]
  </script>
  <style scoped>table{margin-top:1rem;width:100%;border-collapse:collapse}
  th,td{border:1px solid #ccd;padding:.4rem}</style>
  