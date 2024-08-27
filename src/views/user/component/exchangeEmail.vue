<template>
    <div class="view_div">
        <el-dialog :visible.sync="emailFormFlag" title="邮箱">
            <el-form :model="emailForm" ref="emailForm" label-width="120px" :label-position="right">
                <el-form-item label="当前账号密码：">
                    <el-input v-model="emailForm.passWord"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：">
                    <el-input v-model="emailForm.email"></el-input>
                </el-form-item>
                <el-form-item label="邮箱验证码">
                    <el-input v-model="emailForm.value"></el-input>
                    <el-button :loading="sendBindEmailCaptchaLoad" @click="sendBindEmailCaptcha()">
                        发送验证码
                    </el-button>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button @click="saveBindEmail()">
                        绑定邮箱
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
    // 引用组件
    components: {},
    // 上级组件向本页面传递的参数
    props: {},
    // 本页面计算属性
    computed: {},
    // 本页面监听属性
    watch: {},
    methods: {
    },
    data() {
        return {
        }
    },
    mounted() {

    },
    beforeDestroy() {
    },

}
</script>
<style scoped></style>