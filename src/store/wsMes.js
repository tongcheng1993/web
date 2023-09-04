export default {
    state: {
        wsFlag: "warning",
        topic: {},
        user: {}
    },
    mutations: {
        setTopic(state, data) {
            state.topic = data.topic
        }
    },
    actions: {},
    getters: {}
}