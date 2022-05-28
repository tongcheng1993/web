<template>
    <div>
        <el-form :model="loginForm" ref="form" class="login-form">
            <el-form-item>
                <el-input
                        prefix-icon="el-icon-user"
                        type="text"
                        v-model="loginForm.userName"
                        clearable
                        placeholder=""
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                        prefix-icon="el-icon-lock"
                        type="password"
                        v-model="loginForm.passWord"
                        clearable
                        placeholder=""
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-input v-model="loginForm.value" placeholder=""></el-input>
                    </el-col>
                    <el-col :span="12">
                        <img
                                :onload="captchaImgLoad"
                                :src="captchaImg"
                                @click="getCaptchaImg"
                                alt="加载验证码失败"
                        />
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="toRegisterView">注册</el-button>
                <el-button
                        :loading="loginSubmitLoad"
                        type="primary"
                        @click="loginSubmit"
                >登录
                </el-button
                >
            </el-form-item>
        </el-form>
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
                    this.loginForm.code = res.captchaId;
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
                    code: "",
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
</style>