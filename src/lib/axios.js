import axios from 'axios'
import { baseURL } from '@/config'  // api请求基础路径
import { getToken } from '@/lib/util'
class HttpRequest {
  constructor (baseUrl = baseURL) { // 等价于 baseUrl = baseUrl || baseURL
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {  // 添加全局配置
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {  //全局请求、响应拦截
    instance.interceptors.request.use(config => { // 请求拦截器
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      config.headers['Authorization'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => { // 响应拦截器
      this.distroy(url)
      const { data } = res
      return data
    }, error => {
      this.distroy(url)
      return Promise.reject(error.response.data)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
