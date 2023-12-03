<template>
    <div class="view_div">
        <div class="margin_badge">
            <el-dropdown>
                <el-badge is-dot class="item" :type="wsFlag">
                    <el-button type="primary" icon="el-icon-user" circle></el-button>
                </el-badge>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-if="!token" @click.native="toLoginView()">去登陆</el-dropdown-item>
                    <el-dropdown-item v-if="token" @click.native="toUserInfoView()">账户信息</el-dropdown-item>
                    <el-dropdown-item v-if="token" @click.native="removeToken()">退出系统</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>


    export default {
        name: "zfjUserIcon",
        components: {},
        props: {},
        computed: {
            token() {
                return this.$store.state.token;
            },
            wsFlag() {
                return this.$store.state.wsMesStore.wsFlag;
            },
            wsMessage(){
                return this.$store.state.wsMesStore.wsMessage;
            }

        },
        watch: {
            token(newValue, oldValue) {
                console.log(oldValue)
                console.log(newValue)
            },
            wsFlag(newValue, oldValue) {
                console.log(oldValue)
                console.log(newValue)
                if ("warning" === newValue) {
                    console.log("this.createWs()")
                    this.createWs()
                } else if ("success" === newValue) {

                } else {

                }
            },
            wsMessage(newValue, oldValue){
                console.log(oldValue)
                console.log(newValue)
                this.sendWsMessage(newValue);
            }
        },
        data() {
            return {
                name: "",
                sockJs: "",
                stompClient: "",
            };
        },
        methods: {
            async toNextPage(to) {
                await this.$router.push({
                    path: to,
                    params: {},
                });
            },
            init() {
                console.log(this.wsFlag)
                this.createWs();
            },
            dest() {
                this.destWs()
            },
            sendWsMessage(res){
                let _that = this
                if (_that.token) {
                    if ("success" === _that.wsFlag) {
                        _that.stompClient.send('/app/sendWsMessage',{},JSON.stringify(res))
                    }
                }
            },
            createWs() {
                let _that = this
                if (_that.token) {
                    if ("warning" === _that.wsFlag) {
                        _that.$store.state.wsMesStore.wsFlag = ""
                        _that.destWs();

                        let url ="";
                        if(window.location.href.startsWith("https://")){
                            url= "wss://"+window.location.host+"/api/websocket/ws?token=" + _that.token;
                        }else{
                            url= "ws://"+window.location.host+"/api/websocket/ws?token=" + _that.token;
                        }
                        console.log(url)
                        // _that.sockJs = new WebSocket(url);
                        _that.sockJs = new SockJS("/api/websocket/ws?token=" + _that.token);
                        _that.stompClient = Stomp.over(_that.sockJs)
                        _that.stompClient.connect({}, function connectCallback() {
                            _that.stompClient.subscribe('/topic/public', function responseCallback(res) {
                                ELEMENT.Message({
                                    showClose: true,
                                    message: "/topic/public   res" + res.body,
                                    type: "warning"
                                })
                            }, function responseErrCallback(err) {
                                console.log("responseErrCallback" + err)
                            })
                            _that.stompClient.subscribe("/user/topic/chat", function responseCallback(res) {
                                ELEMENT.Message({
                                    showClose: true,
                                    message: "/user/topic/chat   res" + res.body,
                                    type: "warning"
                                })
                            }, function responseErrCallback(err) {
                                console.log("responseErrCallback" + err)
                            })
                            _that.wsFlag = "success"
                            _that.$store.state.wsMesStore.wsFlag = "success"
                            console.log("ws连接成功")
                        }, function connectErrCallback() {
                            console.log("connectErrCallback")
                            console.log(_that.sockJs)
                            console.log(_that.stompClient)
                            _that.wsFlag = "warning"
                            _that.$store.state.wsMesStore.wsFlag = "warning"
                        })
                    }
                }
            },
            destWs() {
                let _that = this
                if ("success" === _that.wsFlag) {
                    _that.stompClient.disconnect(function (res) {
                        console.log(res)
                    });
                    _that.sockJs.close()
                    _that.stompClient = null;
                    _that.sockJs = null;
                    _that.$store.state.wsMesStore.wsFlag = "warning"
                }
                if(_that.stompClient){
                    _that.stompClient.disconnect(function (res) {
                        console.log(res)
                    });
                }
                if( _that.sockJs){
                    _that.sockJs.close()
                }
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

        mounted() {
            console.log('userIcon mounted')
            this.init();
        },
        beforeDestroy() {
            console.log('userIcon beforeDestroy')
            this.dest()
        },
    };
</script>

<style scoped>
    .margin_badge {
        margin: 8px;
    }


</style>
