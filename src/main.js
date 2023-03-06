// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
// 导入库
import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
//导入store转态管理  也需要在main.js中全局注册    第30行
import store from './store'


import axios from 'axios'//全局使用
Vue.prototype.$axios = axios

//导入mock.js
require("./mock.js")





Vue.config.productionTip = false
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
