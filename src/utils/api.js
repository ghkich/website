import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://192.168.1.9'
})

export default Api
