<template>
    <div class="view_div">
        <div class="login_form">
            <el-form :model="loginForm" ref="form" label-width="120px" :label-position="right">
                <el-form-item label="账户名：">
                    <el-input prefix-icon="el-icon-user" type="text" v-model="loginForm.userName" clearable placeholder="请输入账户名"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input prefix-icon="el-icon-lock" type="password" show-password v-model="loginForm.passWord" clearable placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="验证码：">
                    <el-input prefix-icon="el-icon-picture" v-model="loginForm.value" placeholder="请输入验证码"></el-input>
                </el-form-item>
                <el-form-item label="验证码：">
                    <img width="280px" :onload="captchaImgLoad" :src="captchaImg" @click="getCaptchaImg" alt="加载验证码失败"/>
                </el-form-item>
                <el-form-item label="其他：">
                    <el-button type="primary" @click="toForgetPassWordView">忘记密码</el-button>
                    <el-button type="primary" @click="toRegisterView">去注册</el-button>
                </el-form-item>
                <el-form-item label="操作：">
                    <el-button :loading="loginSubmitLoad" type="primary" @click="loginSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    import {drawCaptcha, login} from "../../api/userApi";

    export default {
        name: "login",
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
                this.getCaptchaImg();
            },
            getCaptchaImg() {
                this.captchaImgLoad = true;
                let parameter = {}
                drawCaptcha(parameter).then((res) => {
                    this.loginForm.redisUuid = res.redisUuid;
                    let url = "data:image/png;base64,";
                    this.captchaImg = url + res.imgBytes
                    this.captchaImgLoad = false;
                })

            },
            loginSubmit() {
                this.loginSubmitLoad = true;
                let parameter = this.loginForm;
                login(parameter)
                    .then((res) => {
                        this.$store.commit("set_token", res)
                        let toPath = this.$store.state.toPath
                        if (toPath) {
                            this.toNextPage(toPath)
                        } else {
                            this.toNextPage("/")
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        this.loginSubmitLoad = false;
                        this.getCaptchaImg();
                    });
            },
            toRegisterView() {
                this.toNextPage("/register");
            },
            toForgetPassWordView(){
                this.toNextPage("/forgetPassWord");
            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: "login",
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                },
                captchaImgLoad: false,
                captchaImg: "",
                loginSubmitLoad: false,
                loginForm: {
                    userName: "",
                    passWord: "",
                    redisUuid: "",
                    value: "",
                },
            };
        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
        },
    };
</script>

<style scoped>
    .login_form {
        width: 400px;
        margin: 0 auto;
    }
</style>