import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../page/index/index' 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    } 
  ]
})
