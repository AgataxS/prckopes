<template>
    <aside class="side">
      <img class="avatar" src="https://i.pravatar.cc/80" />
      <p class="mail">{{ localStorage.getItem('me') }}</p>
      <RouterLink to="/history">Mi historial</RouterLink>
      <button @click="logout">Cerrar sesión</button>
    </aside>
   </template>
   
   <style scoped>
   .side{background:#1e293b;color:#fff;padding:24px;width:220px;display:flex;flex-direction:column;gap:14px}
   .avatar{width:72px;height:72px;border-radius:50%}
   .mail{font-size:14px;word-break:break-all}
   a,button{background:#334155;color:#fff;border:0;padding:8px;border-radius:6px;text-align:left}
   a:hover,button:hover{background:#475569}
   </style>
   