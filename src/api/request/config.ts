import HttpRequest from '@/api/request/axios'

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8887/' : 'http://localhost:8887/'
const axios = new HttpRequest(baseUrl)
export default axios