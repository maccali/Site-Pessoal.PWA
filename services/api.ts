import axios, { AxiosInstance } from 'axios';
import Auth from '../helpers/Auth'

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL
})

const { token } = Auth.getToken()

api.defaults.headers.common = { 'Authorization': `bearer ${token}` }

export default api