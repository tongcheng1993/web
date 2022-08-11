<template>
    <div>
        <div class="register_form">
            <el-form :model="registerForm" ref="form" label-width="120px" :label-position="right">
                <el-form-item label="注册邮箱：">
                    <el-input
                            prefix-icon="el-icon-user"
                            type="email"
                            v-model="registerForm.email"
                            clearable
                            placeholder=""
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                    <el-input
                            prefix-icon="el-icon-lock"
                            type="password"
                            show-password
                            v-model="registerForm.passWord"
                            clearable
                            placeholder=""
                    ></el-input>
                </el-form-item>
                <el-form-item label="第二次密码：">
                    <el-input
                            prefix-icon="el-icon-lock"
                            type="password"
                            show-password
                            v-model="registerForm.passWordSec"
                            clearable
                            placeholder=""
                    ></el-input>
                </el-form-item>
                <el-form-item label="昵称：">
                    <el-input
                            prefix-icon="el-icon-user-solid"
                            type="text"
                            v-model="registerForm.name"
                            clearable
                            placeholder=""
                    ></el-input>
                </el-form-item>
                <el-form-item label="验证码：">
                    <el-input prefix-icon="el-icon-picture" v-model="registerForm.value" placeholder=""></el-input><el-button @click="sendEmailCaptcha">发送邮箱验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="toLoginView">返回登录</el-button>
                    <el-button :loading="registerSubmitLoad" type="primary" @click="registerSubmit">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {sendEmailCaptcha, register} from "../../api/userApi";

    export default {
        name: "register",
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

            },
            toLoginView() {
                this.toNextPage("/login");
            },
            sendEmailCaptcha() {
                let parameter = this.registerForm
                sendEmailCaptcha(parameter)
                    .then((res) => {
                        if (res) {
                            this.registerForm.code = res
                        }
                    })
            },
            registerSubmit() {
                this.registerSubmitLoad = true;
                let parameter = this.registerForm;
                register(parameter)
                    .then((res) => {
                        this.$store.commit("set_token", res);
                        let toPath = this.$store.state.toPath
                        if (toPath) {
                            this.toNextPage(toPath)
                        } else {
                            this.toNextPage("/")
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
                    email: "",
                    passWord: "",
                    passWordSec: "",
                    name: "",
                    code: "",
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