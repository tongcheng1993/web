// import Vue from 'vue'
// import Vuex from 'vuex'
import dicjs from './dic'
import wsMesjs from './wsMes'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: "",
        userInfo: {},
        menu: [],
        toPath: "",
        toPathQuery: {},
    },
    mutations: {
        set_token(state, token) {
            state.menu = []
            state.token = token;
            sessionStorage.setItem("token", token);

        },
        del_token(state) {
            state.menu = []
            state.token = '';
            sessionStorage.removeItem('token')

        },
        set_userInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        del_userInfo(state) {
            state.userInfo = {}
        },
        set_menu(state, menu) {

            state.menu = menu;
        },
        del_menu(state) {

            state.menu = []
        },
    },
    actions: {},
    modules: {
        dicStore: {
            namespaced: true,
            state: dicjs.state,
            mutations: dicjs.mutations,
            actions: dicjs.actions,
            getters: dicjs.getters
        },
        wsStore: {
            namespaced: true,
            state: wsMesjs.state,
            mutations: wsMesjs.mutations,
            actions: wsMesjs.actions,
            getters: wsMesjs.getters
        }
    }
})
