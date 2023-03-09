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
      component: Home,
      children:[
        {
          path: '/index',
          name: 'Index',
          meta:{
            title:"首页"
          },
          component: () => import('../views/Index.vue')
        },
        {
        path:''

        }

      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=> import('../views/Login.vue')     //懒加载
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
