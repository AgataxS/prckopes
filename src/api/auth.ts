import { http } from '@/api/http'


export async function apiRegister (email: string, password: string) {
  const { data } = await http.post('/api/v1/auth/register', { email, password })
  return data                                         
}


export async function apiLogin (email: string, password: string) {
  const body = new URLSearchParams({ username: email, password })
  const { data } = await http.post('/api/v1/auth/login', body)
  return data                                        
}
