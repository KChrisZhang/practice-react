import axios from 'axios'

axios.interceptors.response.use(response => {
  return response.data
})

export function getList() {
  return axios.get('/list')
}

export function getUserInfo() {
  return axios.get('/user/info')
}

export function getAccountInfo() {
  return axios.get('/account/list')
}
