import axios from 'axios'
export function userApi (params) {
  return axios.get('/api/query/user', params)
}
