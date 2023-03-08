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
    import {sendWsMessage} from '../../../api/wsApi'

    export default {
        name: "zfjUserIcon",
        components: {},
        props: {},
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
                stompClient: null,
                sockjs: null,
                wsFlag: "warning",
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
                this.createWs();
            },
            dest() {
                this.destWs()
            },
            createWs() {
                let _that = this
                if (_that.token) {
                    _that.sockjs = new SockJS("/api/websocket/ws?token=" + _that.token);
                    _that.stompClient = Stomp.over(_that.sockjs)
                    _that.stompClient.connect({}, function connectCallback() {
                        console.log("ws连接成功")
                        _that.wsFlag = "success"
                        _that.stompClient.subscribe('/topic/public', function responseCallback(res) {
                            console.log("/topic/public   res" + res.body)
                            _that.$store.state.token
                        }, function responseErrCallback(err) {
                            console.log("err" + err)
                        })

                        _that.sendWsMessage()
                    }, function connectErrCallback() {

                    })

                }
            },
            destWs(){
                let _that = this
                if(this.stompClient){
                    this.stompClient.disconnect(function (res) {
                        _that.wsFlag="warning"
                        console.log("ws关闭")
                    });
                }
            },
            sendWsMessage() {
                let parameter = {
                    "businessType": "1",
                    "userId": 111,
                    "obj": "1212"
                }
                sendWsMessage(parameter).then().catch()
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
            this.init();
        },
        beforeDestroy() {
           this.dest()
        },
    };
</script>

<style scoped>
    .margin_badge {
        margin: 8px;
    }


</style>
