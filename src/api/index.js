import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import api from './api'
// import router from '@/router'

Vue.use(axios)

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做某事
  console.log('拦截请求' + config)
  return config
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做些事
  console.log('拦截响应' + response)
  return response
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})

// 全局配置
const origin = process.env.NODE_ENV === 'production'
  ? location.protocol + '//api-user.uyess.com'
  : location.protocol + '//api-user-merge.uyess.com'

const oldOrigin = process.env.NODE_ENV === 'production'
  ? location.protocol + '//app.uyess.com'
  : location.protocol + '//app-test.uyess.com'

axios.defaults.timeout = 20000
axios.defaults.withCredentials = true
axios.defaults.transformRequest = function (data) {
  return Qs.stringify(data)
}
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

const init = path => axios.create({
  baseURL: origin + path
})
const old = path => axios.create({
  baseURL: oldOrigin + path
})

export default api(init, old)
