export default {
    state: {
        wsFlag: "warning",
        sockjs: null,
        stompClient: null,
        wsMessage: {},
    },
    mutations: {
        set_ws_flag(state, flag) {
            state.wsFlag = flag
        },
        set_sockjs(state, sockjs) {
            state.sockjs = sockjs
        },
        set_stompClient(state, stompClient) {
            state.stompClient = stompClient
        },
        set_message(state, message) {
            state.wsMessage = message
        },
    },
    actions: {},
    getters: {}
}