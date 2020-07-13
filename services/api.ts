import axios from 'axios';
import Auth from '../helpers/Auth'

const api = axios.create({
  baseURL: "http://localhost:8000/"
})

const { token } = Auth.getToken()

api.defaults.headers.common = { 'Authorization': `bearer ${token}` }


export default api