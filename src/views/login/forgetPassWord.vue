<template>
    <div class="view_div">
        <div class="forget_form">
            <el-form :model="forgetForm" ref="form" label-width="120px" :label-position="right">
                <el-form-item label="账户名：">
                    <el-input prefix-icon="el-icon-user" type="text" v-model="forgetForm.userName" clearable
                        placeholder="请输入账户名"></el-input>
                </el-form-item>
                <el-form-item label="新密码：">
                    <el-input prefix-icon="el-icon-lock" type="password" show-password v-model="forgetForm.passWord"
                        clearable placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="验证码：">
                    <el-input prefix-icon="el-icon-picture" v-model="forgetForm.value" placeholder="请输入验证码"></el-input>
                    <el-button @click="sendForgetPassWordCaptcha">向绑定邮箱发送验证码</el-button>
                </el-form-item>
                <el-form-item label="其他：">
                    <el-button type="primary" @click="toLoginView">返回登录</el-button>
                </el-form-item>
                <el-form-item label="操作：">
                    <el-button :loading="registerSubmitLoad" type="primary"
                        @click="resetForgetPassWord">重置密码</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { sendForgetPassWordCaptcha, resetForgetPassWord } from "../../api/userApi";

export default {
    name: "forgetPassWord",
    // 引用组件
    components: {},
    // 上级组件向本页面传递的参数
    props: {},
    data() {
        return {
            name: "forgetPassWord",
            forgetForm: {
                email: "",
                code: "",
                passWord: "",
                value: "",
            }
        };
    },
    // 本页面计算属性
    computed: {},
    // 本页面监听属性
    watch: {},

    methods: {
        async toNextPage(to) {
            await this.$router.push({
                path: to,
                params: {},
            });
        },
        toLoginView() {
            this.toNextPage("/login");
        },
        // 初始化数据
        init() {

        },
        sendForgetPassWordCaptcha() {
            let parameter = this.forgetForm
            sendForgetPassWordCaptcha(parameter)
                .then((res) => {
                    if (res) {
                        this.forgetForm.code = res
                    }
                }).catch((error) => {

                })
        },
        resetForgetPassWord() {
            let parameter = this.forgetForm
            resetForgetPassWord(parameter)
                .then((res) => {
                    if (res) {
                        this.toLoginView()
                    }
                }).catch((error) => {

                })
        }
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
    },
};

</script>

<style scoped>
.forget_form {
    width: 400px;
    margin: 0 auto;
}
</style>