
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const routes: RouteRecordRaw[] = [

  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue'),
    meta: { guestOnly: true },
  },

  {
    path: '/',
    redirect: '/careers',
  },

  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
     
      { path: 'dashboard',   redirect: '/careers' },

      { path: 'careers',     component: () => import('@/views/Careers.vue') },
      { path: 'semesters',   component: () => import('@/views/Semesters.vue') },
      { path: 'subjects',    component: () => import('@/views/Subjects.vue') },
      { path: 'quiz',        component: () => import('@/views/Quiz.vue') },
      { path: 'result',      component: () => import('@/views/Result.vue') },
      { path: 'history',     component: () => import('@/views/History.vue') },
    ],
  },


  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuth) return '/login'

  if (to.meta.guestOnly && auth.isAuth)   return '/careers'
})
