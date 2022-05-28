<template>
    <div>
        <div>
            <el-row>
                <el-form :model="friendInfoForm">
                    <el-col :span="12">
                        <el-form-item label="头像">
                            <el-upload
                                    class="avatar-uploader"
                                    action="/api/sys/file/uploadFile"
                                    :headers = "uploadHeader"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="昵称">
                            <el-input v-model="friendInfoForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="性别">
                            <el-input v-model="friendInfoForm.sex"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="生日">
                            <el-input
                                    v-model="friendInfoForm.birthday"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="宣言">
                            <el-input v-model="friendInfoForm.info"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="省">
                            <el-input
                                    v-model="friendInfoForm.province"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="市">
                            <el-input v-model="friendInfoForm.city"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="区/县">
                            <el-input v-model="friendInfoForm.town"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="详细地址">
                            <el-input v-model="friendInfoForm.addr"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="出生省">
                            <el-input
                                    v-model="friendInfoForm.birthProvince"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="出生市">
                            <el-input
                                    v-model="friendInfoForm.birthCity"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="出生区/县">
                            <el-input
                                    v-model="friendInfoForm.birthTown"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="出生详细地址">
                            <el-input
                                    v-model="friendInfoForm.birthAddr"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col>
                        <el-button @click="saveFriendInfo">确定</el-button>
                    </el-col>
                </el-form>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {
        saveFriendInfo,
        updateFriendInfo,
        getFriendInfoByMyself,
    } from "../../api/friendApi";

    export default {
        name: "myInfo",
        components: {},
        props: {

        },

        computed: {
            uploadHeader(){
                return {"Tc-Token":this.$store.state.token}
            }
        },
        watch: {},
        data() {
            return {
                name: "myInfo",
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                    records: [],
                },
                imageUrl: '',
                friendInfoForm: {
                    id: "",
                    name: "",
                    sex: "",
                    birthday: "",
                    birthProvince: "",
                    birthCity: "",
                    birthTown: "",
                    birthAddr: "",
                    province: "",
                    city: "",
                    town: "",
                    addr: "",
                },
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                console.log(file)
                console.log(res)
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },

            async toNextPage(to) {
                await this.$router.push({
                    path: to,
                    params: {},
                });
            },
            init() {
                this.getFriendInfoByMyself();
            },
            getFriendInfoByMyself() {
                let parameter = {};
                getFriendInfoByMyself(parameter).then((res) => {
                    this.friendInfoForm = res;

                    let file= new File([res],'',{type: 'image/jpg'})
                });
            },

            saveFriendInfo() {
                let parameter = this.friendInfoForm;
                if (this.friendInfoForm.id && this.friendInfoForm.id > 0) {
                    updateFriendInfo(parameter)
                        .then((res) => {
                        })
                        .catch();
                } else {
                    saveFriendInfo(parameter)
                        .then((res) => {
                        })
                        .catch();
                }
            },
        },
        mounted() {

            this.init();
        },
        beforeDestroy() {
        },
    };
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>