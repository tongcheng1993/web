<template>
    <div class="view_div">
        <el-dialog :visible.sync="phoneFormFlag" title="手机号">
            <el-form :model="phoneForm" ref="phoneForm" label-width="120px" :label-position="right">
                <el-form-item label="当前账号密码：">
                    <el-input v-model="phoneForm.passWord"></el-input>
                </el-form-item>
                <el-form-item label="手机号：">
                    <el-input v-model="phoneForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="手机验证码">
                    <el-input v-model="phoneForm.value"></el-input>
                    <el-button :loading="sendBindPhoneCaptchaLoad" @click="sendBindPhoneCaptcha">
                        发送验证码
                    </el-button>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button @click="saveBindPhone">
                        绑定手机号
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