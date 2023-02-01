import HttpRequest from '@/api/request/axios'

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8887/' : 'http://42.194.195.250/'
const axios = new HttpRequest(baseUrl)
export default axios