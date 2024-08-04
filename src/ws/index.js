import store from '../store/index.js'

export const startWs = () => {
    let token = store.state.token;
    let wsFlag = store.state.wsStore.wsFlag
    let sockjs = store.state.wsStore.sockjs
    let stompClient = store.state.wsStore.stompClient
    if (token) {
        if ("success" !== wsFlag) {
            let url = "/api/websocket/ws?token=" + token;
            sockjs = new SockJS(url);
            store.commit("wsStore/set_sockjs", sockjs);
            stompClient = Stomp.over(sockjs)
            stompClient.debug = function(str) {
                
            };
            store.commit("wsStore/set_stompClient", stompClient);
            stompClient.connect({}, function () {
                store.commit("wsStore/set_ws_flag", "success");
                subscribe("/topic/public")
                subscribe("/user/topic/chat")
                subscribe("/user/topic/logout")
            }, function () {
                store.commit("wsStore/set_ws_flag", "warning");
            })
        }

    }

};
export const subscribe = (url) => {
    let token = store.state.token;
    let wsFlag = store.state.wsStore.wsFlag
    let sockjs = store.state.wsStore.sockjs
    let stompClient = store.state.wsStore.stompClient
    if (token) {
        if ("success" === wsFlag) {
            if (sockjs) {
                if (stompClient) {
                    // 所有人都有的 接收系统对个人的消息
                    let a = stompClient.subscribe(url, function responseCallback(res) {
                        store.commit("wsStore/set_message", res.body);
                    }, function errorCallback(err) {
                        console.log(err)
                    })
                }
            }
        }
    }
}
export const stopWs = () => {
    let token = store.state.token;
    let wsFlag = store.state.wsStore.wsFlag
    let sockjs = store.state.wsStore.sockjs
    let stompClient = store.state.wsStore.stompClient
    if (token) {
        if ("success" === wsFlag) {
            if (sockjs) {
                if (stompClient) {
                    stompClient.disconnect()
                    stompClient = null;
                }
                sockjs.close()
                sockjs = null;
            }
            store.commit("wsStore/set_ws_flag", "warning");
        }
    }
};


export const sendWs = (parameter) => {
    let token = store.state.token;
    let wsFlag = store.state.wsStore.wsFlag
    let sockjs = store.state.wsStore.sockjs
    let stompClient = store.state.wsStore.stompClient
    if (token) {
        if ("success" === wsFlag) {
            if (sockjs) {
                if (stompClient) {
                    stompClient.send("/app/sendWsMessage", [], JSON.stringify(parameter))
                }
            }
        }
    }
};