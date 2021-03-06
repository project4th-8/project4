// 对 axios 进行二次封装
import axios from 'axios'
import router from '../router/'
import qs from 'qs' // 引入 qs 模块，该模块不需要安装，用来序列化 post 类型的数据

// 添加一个新的 axios 的实例
const http = axios.create({
  baseURL: '/api', // 统一设置请求地址前缀
  timeout: 6000, // 请求超时时间
  withCredentials: true
})

http.interceptors.request.use(function (config) {

  if (config.method === "post" && config.url != "/dynamic/uploadImg" && config.url != '/user/uploadImg'&& config.url != '/user/userRegisSetInfo') { // 这一步主要取决于后端是否可以接受 json
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    // 参数序列化
    config.data = qs.stringify(config.data);
  }
  // 获取 token
  const token = sessionStorage.getItem('token')
  if(token) {
    // 在请求头上带上 token，固定写法
    // config.headers['Authorization'] = 'Bearer ' + token
    config.headers['Authorization'] = token
  }
  return config;
}, function (error) {
  return Promise.reject(error)
});


/* // 请求拦截，统一在请求时带上 token
http.interceptors.request.use(function (config) {
  if (config.method === "post") { // 这一步主要取决于后端是否可以接受 json
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    // 参数序列化
    config.data = qs.stringify(config.data);
  }
  // 获取 token
  const token = sessionStorage.getItem('token')
  if(token) {
    // 在请求头上带上 token，固定写法
    // config.headers['Authorization'] = 'Bearer ' + token
    config.headers['Authorization'] = token
  }
  return config;
}, function (error) {
  console.log('请求拦截错误：', error)
  return Promise.reject(error)
});
 */
// 响应拦截，处理错误， 如 token 不合法
http.interceptors.response.use(function (response) {
  if(response.data.token) { 
    sessionStorage.setItem('token', response.data.token) // 将服务器返回的最新token更新到本地中
  }

  return response;
}, function (error) {
  const _response = error.response

  switch(_response.status) {
    case 401:
      return router.replace({
        path: '/Login',
        query: {redirect: router.currentRoute.fullPath}
      })
    
  }

  return Promise.reject(error);
});

export default http