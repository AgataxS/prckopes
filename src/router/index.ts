import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const routes: RouteRecordRaw[] = [
  { path:'/login',    component: () => import('@/views/Login.vue') },
  { path:'/register', component: () => import('@/views/Register.vue') },

  { path:'/',
    component: () => import('@/layouts/MainLayout.vue'),
    children:[
      { path:'',          redirect:'/careers' },
      { path:'careers',   component: () => import('@/views/Careers.vue') },
      { path:'semesters', component: () => import('@/views/Semesters.vue') },
      { path:'subjects',  component: () => import('@/views/Subjects.vue') },
      { path:'quiz',      component: () => import('@/views/Quiz.vue') },
      { path: 'result', component: () => import('@/views/Result.vue') },
      { path:'history',   component: () => import('@/views/History.vue') },
    ]},

  { path:'/:pathMatch(.*)*', component: ()=>import('@/views/NotFound.vue')},
]

export const router = createRouter({ history:createWebHistory(), routes })

router.beforeEach((to)=>{
  const auth = useAuthStore()
  if(!auth.isAuth && !['/login','/register'].includes(to.path)) return '/login'
  if( auth.isAuth && ['/login','/register'].includes(to.path))  return '/careers'
})
