import axios, { AxiosRequestHeaders } from 'axios'
import { useAuthStore }               from '@/store/auth'


const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
})

http.interceptors.request.use(cfg => {
  const auth = useAuthStore()
  if (auth.token) {
    cfg.headers = {
      ...(cfg.headers as AxiosRequestHeaders),
      Authorization: `Bearer ${auth.token}`
    }
  }
  return cfg
})

export { http }          
export default http      
