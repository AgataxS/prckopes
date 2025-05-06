<template>
    <div class="auth">
      <div class="card">
        <slot />
      </div>
    </div>
  </template>
  
  <style scoped>
  .auth  { display: grid; place-items: center; height: 100vh; }
  .card  {
    min-width: 320px; padding: 32px;
    border: 1px solid #ccc; border-radius: 8px;
    box-shadow: 0 4px 16px rgb(0 0 0 / .06);
    background: #fff;
  }
  </style>
  