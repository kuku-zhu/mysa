// import Vue from 'vue'
// import axios from 'axios' 
// import {Message} from 'element-ui'
// import router from '../router/router.js'

// 请求拦截器
// axios.interceptors.request.use(function (config) {
//     const userinfo = JSON.parse(sessionStorage.getItem("userinfo")) || "{}" ;  
//     config.headers.authorization = userinfo.token
//     return config
//   } 
// )

/* 
1. 响应拦截器
2. axios记得导入才可使用
*/
// axios.interceptors.response.use(function (config) {
//   if(config.data.code != 200){ 
//     Message({
//       type:"error",
//       message:config.data.msg
//     }) 
//   } 
// })

// 将axios挂载值vue实例
// Vue.prototype.$http = axios

// 暴露
// export default axios