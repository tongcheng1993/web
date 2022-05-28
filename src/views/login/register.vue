<template>
    <div>
        <el-form :model="registerForm" ref="form" class="login-form">
            <el-form-item>
                <el-input
                        prefix-icon="el-icon-user"
                        type="text"
                        v-model="registerForm.userName"
                        clearable
                        placeholder=""
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                        prefix-icon="el-icon-lock"
                        type="password"
                        v-model="registerForm.passWord"
                        clearable
                        placeholder=""
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-input v-model="registerForm.value" placeholder=""></el-input>
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
                <el-button type="primary" @click="toLoginView">返回登录</el-button>
                <el-button
                        :loading="registerSubmitLoad"
                        type="primary"
                        @click="registerSubmit"
                >注册
                </el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {drawCaptcha, register} from "../../api/userApi";

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
                this.getCaptchaImg();
            },
            toLoginView() {
                this.toNextPage("/login");
            },
            getCaptchaImg() {
                this.captchaImgLoad = true;
                let parameter = {}
                drawCaptcha(parameter).then((res) => {
                    this.registerForm.code = res.captchaId;
                    let url = "data:image/png;base64,";
                    this.captchaImg = url + res.imgBytes
                    this.captchaImgLoad = false;
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
                    userName: "",
                    passWord: "",
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
</style>