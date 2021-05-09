// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入重置样式
import  './assets/css/reset.css'
//导入element-ui
import './utils/element.js'

//  引入 echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 引入滚动
import scroll from  'vue-seamless-scroll'
Vue.use(scroll)

// 引入适配
// import  './assets/js/scale.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
