<template>
    <div>
        <div class="margin_badge">
            <el-dropdown>
                <el-badge is-dot class="item" :type="wsFlag">
                    <el-button type="primary" icon="el-icon-user" circle></el-button>
                </el-badge>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-if="!token" @click.native="toLoginView"
                    >去登陆
                    </el-dropdown-item
                    >
                    <el-dropdown-item v-if="token" @click.native="toUserInfoView"
                    >账户信息
                    </el-dropdown-item
                    >
                    <el-dropdown-item v-if="token" @click.native="removeToken"
                    >退出系统
                    </el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import {info} from "../../../api/dashboardApi";

    export default {
        name: "zfjUserIcon",
        components: {},
        props: {},
        methods: {
            async toNextPage(to) {
                await this.$router.push({
                    path: to,
                    params: {},
                });
            },
            init() {
                this.createInfo();
                this.createWs();
            },
            createInfo() {
                if (this.token) {
                    this.infoTimeOut = setInterval(() => {
                        info()
                            .then((res) => {
                                console.log(res)
                                console.log('token刷新')
                            })
                            .catch();
                    }, this.timeOut);
                }
            },
            createWs() {
                if (this.token) {
                    if (typeof WebSocket === "undefined") {

                    } else {
                        // let url = window.location.href;
                        // let host = window.location.host;
                        // let start = url.indexOf("http://") > -1 ? "ws://" : "wss://";
                        // this.socket = new WebSocket(start + host + "/api/websocket/ws?token=" + this.token);
                        // this.socket.onopen = this.open;
                        // this.socket.onclose = this.close;
                        // this.socket.onerror = this.error;
                        // this.socket.onmessage = this.getMessage;
                        // this.socket.send()
                    }
                }
            },
            open() {
                this.wsFlag = "success";
                this.start();
            },
            close(e) {
                console.log("ws关闭");
                console.log(e);
                this.wsFlag = "";
                this.createWs()
            },
            error(e) {
                console.log(e);
            },

            // 开始心跳
            start() {
                setInterval(() => {
                    this.sendHeartbeat()
                }, this.timeOut);

            },
            getMessage(msg) {
                let obj = JSON.parse(msg.data);

                switch (obj.businessType) {
                    case "heartbeat":
                        //收到服务器信息，心跳重置
                        this.reset();
                        break;
                    case "sendMessage":
                        console.log(obj);
                        break;
                    default:
                        console.log(obj);
                }
            },
            sendMessage(data) {
                let params = {
                    businessType: "sendMessage",
                    obj: data,
                };
                this.send(params);
            },
            sendHeartbeat() {
                let params = {
                    businessType: "heartbeat",
                };
                this.send(params);
            },
            send(params) {
                console.log(params);
                this.socket.send(JSON.stringify(params));
            },


            toUserInfoView() {
                this.toNextPage("/user/userAccount");
            },
            toLoginView() {
                this.toNextPage("/login");
            },
            removeToken() {
                this.$store.commit("del_token");
                location.reload();
            },
        },
        computed: {
            token() {
                return this.$store.state.token;
            },
        },
        watch: {
            token(newValue, oldValue) {
                console.log(oldValue);
                console.log(newValue);
            },
        },
        data() {
            return {
                name: "",
                wsFlag: "",
                // 页面websocket对象
                socket: null,
                // 时间间隔
                timeOut: 29 * 60 * 1000,
                // 控制客户端发送心跳的时间
                heartbeatTime: null,
                // 服务器响应时间
                serverTimeOut: null,
                // 重连倒计时
                timeOutNum: null,
                // token重置
                infoTimeOut: null,
            };
        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
            if (this.socket) {
                this.socket.close()
            }
        },
    };
</script>

<style scoped>
    .margin_badge {
        margin: 8px;
    }


</style>
