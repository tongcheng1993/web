<template>
    <div class="view_div">
        <div class="register_form">
            <el-form :model="registerForm" ref="form" label-width="120px" :label-position="right">
                <el-form-item label="账户名：">
                    <el-input
                            prefix-icon="el-icon-user" type="text" v-model="registerForm.userName" clearable
                            placeholder="请输入账户名"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input
                            prefix-icon="el-icon-lock" type="password" show-password v-model="registerForm.passWord"
                            clearable placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item label="第二次密码：">
                    <el-input
                            prefix-icon="el-icon-lock" type="password" show-password v-model="registerForm.passWordSec"
                            clearable placeholder="请再次输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item label="验证码：">
                    <el-input prefix-icon="el-icon-picture" type="text" v-model="registerForm.redisValue"
                              placeholder="请输入验证码"></el-input>
                </el-form-item>
                <el-form-item label="验证码：">
                    <img width="280px" :onload="captchaImgLoad" :src="captchaImg" @click="getCaptchaImg" alt="加载验证码失败"/>
                </el-form-item>
                <el-form-item label="其他：">
                    <el-button type="primary" @click="toLoginView">返回登录</el-button>
                </el-form-item>
                <el-form-item label="操作：">
                    <el-button :loading="registerSubmitLoad" type="primary" @click="registerSubmit">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {drawCaptcha, register} from "../../api/userApi";

    export default {
        name: "register",
        components: {},
        props: {},
        methods: {
            async toNextPage(to, query) {
                await this.$router.push({
                    path: to,
                    query: query,
                });
            },
            init() {
                this.getCaptchaImg();
            },
            getCaptchaImg() {
                this.captchaImgLoad = true;
                let parameter = {}
                drawCaptcha(parameter).then((res) => {
                    this.registerForm.redisUuid = res.redisUuid;
                    let url = "data:image/png;base64,";
                    this.captchaImg = url + res.imgBytes
                    this.captchaImgLoad = false;
                })

            },
            toLoginView() {
                this.toNextPage("/login", {});
            },
            registerSubmit() {
                this.registerSubmitLoad = true;
                let parameter = this.registerForm;
                register(parameter)
                    .then((res) => {
                        this.$store.commit("set_token", res);
                        let toPath = this.$store.state.toPath
                        let toPathQuery = this.$store.state.toPathQuery
                        if (toPath) {
                            this.toNextPage(toPath, toPathQuery)
                        } else {
                            this.toNextPage("/", {})
                        }
                    })
                    .catch((error) => {
                        this.registerSubmitLoad = false;
                        this.getCaptchaImg();
                        console.log(error);
                    });
            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: "register",
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                },
                registerForm: {
                    userName: "",
                    passWord: "",
                    passWordSec: "",
                    name: "",
                    redisUuid: "",
                    value: "",
                },
                captchaImgLoad: false,
                captchaImg: "",
                registerSubmitLoad: false,
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
    .register_form {
        width: 400px;
        margin: 0 auto;
    }

</style>