import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Index from "../views/Index.vue";


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=> import('../views/Login.vue')
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
