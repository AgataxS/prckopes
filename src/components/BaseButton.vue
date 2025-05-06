<template>
    <button class="btn"><slot /></button>
  </template>
  
  <style scoped>
  .btn{
    width: 100%; padding: 10px; margin-top: 4px;
    background:#2563eb; color:#fff; border:none; border-radius:4px;
    cursor:pointer; font-weight:600;
  }
  .btn:hover{ background:#1e4fd1 }
  </style>
  