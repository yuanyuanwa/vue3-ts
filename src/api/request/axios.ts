import axios from 'axios'

class HttpRequest {
  baseUrl: string
  queue: any
  constructor(baseUrl:string) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    return {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'test':'test'
      }
    }
  }

  destroy(url:string) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }

  interceptors(instance:any, url:any) {
    // 请求拦截
    instance.interceptors.request.use((config:any) => {
      this.queue[url] = true
      return config
    }, (error:any) => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use((res:any) => {
      if (res.status === 401) {
        // removeToken()
      }
      this.destroy(url)
      if (res.config.method === "delete") {
        return { status: res.status }
      } else {
        const { data, status, headers } = res
        return { data, status, headers }
      }
    }, (error:any)=> {
      if (error.response.status === 401 || error.response.status === 405 || (error.response.status == 400 && error.response.data.message === '令牌标识错误或令牌已过期')) {
       
      }
      return Promise.reject(error)
    })
  }

  request(options:any) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
