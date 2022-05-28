// import Vue from 'vue'
// import Vuex from 'vuex'
import dicjs from './dic'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:"",
    userInfo:{

    },
    menu:[

    ],
    toPath:"",
  },
  mutations: {
    set_token(state, token) {
      state.menu=[]
      state.token = token;
      sessionStorage.setItem("token",token);
      console.log(state.menu)
      console.log(state.token)
    },
    del_token(state) {
      state.menu=[]
      state.token = '';
      sessionStorage.removeItem('token')

    },
    set_userInfo(state,userInfo){
      state.userInfo = userInfo;
    },
    del_userInfo(state){
      state.userInfo ={

      }
    },
    set_menu(state, menu) {
      console.log(state.menu)
      console.log(menu)
      state.menu = menu;
    },
    del_menu(state){
      console.log(state.menu)
      state.menu=[]
    },
  },
  actions: {
  },
  modules: {
    dicStore:{
      namespaced: true,
      state:dicjs.state,
      mutations:dicjs.mutations,
      actions:dicjs.actions,
      getters:dicjs.getters
    },
  }
})
