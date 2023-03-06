//状态管理

/*
import Vue from 'vue'
import Vuex from 'vuex'
import {state} from "shelljs/src/common";

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    token:''
  },
  mutations:{

    SET_TOKEN:(state,token) =>{
      state.token=token;
      localStorage.setItem("token",token)
    }
  },
  actions:{

  },
  modules:{

  }

})
*/
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''

  },
  mutations: {
    //在组件中修改store中的状态
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem("token", token)
    }

  /*  SET_TOKEN 是 mutation 的名称，
jwt 是 mutation 的负载。提交 SET_TOKEN mutation
会将 Vuex 的状态管理器中的 state.token 修改为 jwt。*/
  },
  actions: {},
  modules: {

  }
})
