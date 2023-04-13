<template>
    <div class="view_div" :onload="initOnload">
        <div>
            <el-form :model="friendInfoForm">
                <el-form-item label="头像">
                    <el-upload
                            class="avatar-uploader"
                            action="/api/sys/friend/uploadFriendInfoImgFile"
                            :headers="uploadHeader"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="friendInfoForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="friendInfoForm.sex"></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-input v-model="friendInfoForm.birthday"></el-input>
                </el-form-item>
                <el-form-item label="宣言">
                    <el-input v-model="friendInfoForm.info"></el-input>
                </el-form-item>
                <el-form-item label="省">
                    <el-input v-model="friendInfoForm.province"></el-input>
                </el-form-item>
                <el-form-item label="市">
                    <el-input v-model="friendInfoForm.city"></el-input>
                </el-form-item>
                <el-form-item label="区/县">
                    <el-input v-model="friendInfoForm.town"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="friendInfoForm.addr"></el-input>
                </el-form-item>
                <el-form-item label="出生省">
                    <el-input v-model="friendInfoForm.birthProvince"></el-input>
                </el-form-item>
                <el-form-item label="出生市">
                    <el-input v-model="friendInfoForm.birthCity"></el-input>
                </el-form-item>
                <el-form-item label="出生区/县">
                    <el-input v-model="friendInfoForm.birthTown"></el-input>
                </el-form-item>
                <el-form-item label="出生详细地址">
                    <el-input v-model="friendInfoForm.birthAddr"></el-input>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button @click="saveFriendInfo">确定</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {saveFriendInfo, getFriendInfoByMyself,} from "../../api/friendApi";
    import {downloadFile,} from "../../api/fileApi";
    import {resultToBlobUrl} from "../../util/blobUtil"
    export default {
        name: "myInfo",
        components: {},
        props: {},

        computed: {
            uploadHeader() {
                return {"Tc-Token": this.$store.state.token}
            }
        },
        watch: {},
        data() {
            return {
                name: "myInfo",
                imageUrl: '',
                friendInfoForm: {
                    id: "",
                    imgUrl: "",
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
                this.friendInfoForm.imgUrl = res.result
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
                    if(this.friendInfoForm.imgUrl){
                        let parameter = {
                            id: this.friendInfoForm.imgUrl,
                        };
                        downloadFile(parameter).then((res) => {
                          this.imageUrl=  resultToBlobUrl(res)
                        })
                    }
                });
            },

            saveFriendInfo() {
                let parameter = this.friendInfoForm;
                saveFriendInfo(parameter)
                    .then((res) => {

                    }).catch();

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