<template>
    <div class="view_div" :onload="initOnload">
        <el-tabs v-model="activeName" @tab-click="handleClick()">
            <el-tab-pane label="账号信息" name="first">
                <el-form>
                    <el-form-item label="账户名">
                        <el-input v-model="userInfo.userName">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-button @click="openNameForm()">
                            修改密码
                        </el-button>
                    </el-form-item>
                    <el-form-item label="昵称">
                        <el-input v-model="userInfo.name">
                        </el-input>
                        <el-button @click="openNameForm()">
                            修改昵称
                        </el-button>
                    </el-form-item>
                    <el-form-item label="绑定邮箱">
                        <el-input v-model="userInfo.email">
                        </el-input>
                        <el-button @click="openEmailForm()">
                            绑定邮箱
                        </el-button>
                    </el-form-item>
                    <el-form-item label="绑定手机号">
                        <el-input v-model="userInfo.phone">
                        </el-input>
                        <el-button @click="openPhoneForm()">
                            绑定手机号
                        </el-button>
                    </el-form-item>
                    <div v-if="!(userInfo.type)">
                        <div v-if="!(userInfo.peopleId&&userInfo.peopleId>0)">
                            <el-form-item label="个人实名">
                                <el-button @click="openPeopleForm()">实名认证</el-button>
                            </el-form-item>
                        </div>
                        <div v-if="!(userInfo.companyId&&userInfo.companyId>0)">
                            <el-form-item label="单位账号">
                                <el-button @click="openCompanyForm()">绑定单位</el-button>
                            </el-form-item>
                        </div>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane v-if='userInfo.type === "1"' label="身份信息" name="second">
                <el-form>
                    <el-form-item label="姓名">
                        <el-input v-model="peopleInfo.peopleName">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="身份证号码">
                        <el-input v-model="peopleInfo.cardNumber">
                        </el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane v-if='userInfo.type === "2"' label="单位信息" name="three">
                <el-form>
                    <el-form-item label="公司名称">
                        <el-input v-model="companyInfo.companyName">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="统一社会信用代码">
                        <el-input v-model="companyInfo.deptCode">
                        </el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <el-dialog :visible.sync="nameFormFlag" title="昵称">
            <el-form :model="nameForm" ref="nameForm" label-width="120px" :label-position="right">
                <el-form-item label="新昵称：">
                    <el-input v-model="nameForm.name"></el-input>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button @click="saveName()">
                        保存
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog :visible.sync="passWordFormFlag" title="修改密码">
            <el-form :model="nameForm" ref="passWordForm" label-width="120px" :label-position="right">
                <el-form-item label="旧密码：">
                    <el-input v-model="nameForm.name"></el-input>
                </el-form-item>
                <el-form-item label="新密码：">
                    <el-input v-model="nameForm.name"></el-input>
                </el-form-item>
                <el-form-item label="再一次新密码：">
                    <el-input v-model="nameForm.name"></el-input>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button @click="saveName()">
                        保存
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
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
                    <el-button :loading="sendBindPhoneCaptchaLoad" @click="sendBindPhoneCaptcha()">
                        发送验证码
                    </el-button>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button @click="saveBindPhone()">
                        绑定手机号
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-dialog :visible.sync="peopleFormFlag" title="个人信息">
            <el-form :model="peopleForm" ref="peopleForm" label-width="120px" :label-position="right">
                <el-form-item label="姓名：">
                    <el-input v-model="peopleForm.peopleName"></el-input>
                </el-form-item>
                <el-form-item label="身份证：">
                    <el-input v-model="peopleForm.cardNumber"></el-input>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button @click="savePeopleInfo()">
                        绑定个人信息
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog :visible.sync="companyFormFlag" title="单位信息">
            <el-form :model="companyForm" ref="companyForm" label-width="120px" :label-position="right">
                <el-form-item label="单位名称：">
                    <el-input v-model="companyForm.companyName"></el-input>
                </el-form-item>
                <el-form-item label="单位统一社会信用代码：">
                    <el-input v-model="companyForm.deptCode"></el-input>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button @click="saveCompanyInfo()">
                        绑定单位信息
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>

    import {
        getUserInfo,
        saveName,
        getPeopleInfo,
        savePeopleInfo,
        getCompanyInfo,
        saveCompanyInfo,
        sendBindEmailCaptcha,
        saveBindEmail,
        sendBindPhoneCaptcha,
        saveBindPhone,
    } from "../../api/userApi";

    export default {
        name: "userAccount",
        // 引用组件
        components: {},
        // 上级组件向本页面传递的参数
        props: {},
        data() {
            return {
                name: "userAccount",

                initOnload: false,

                activeName: "first",

                nameFormFlag: false,
                nameForm: {
                    name: "",
                },

                passWordFormFlag: false,
                passWordForm: {},

                sendBindEmailCaptchaLoad: false,
                emailFormFlag: false,
                emailForm: {
                    passWord: "",
                    email: "",
                    redisUuid: "",
                    value: "",
                },

                sendBindPhoneCaptchaLoad: false,
                phoneFormFlag: false,
                phoneForm: {
                    passWord: "",
                    phone: "",
                    redisUuid: "",
                    value: "",
                },

                peopleFormFlag: false,
                peopleForm: {},

                companyFormFlag: false,
                companyForm: {},
                userInfo: {
                    userName: "",
                    name: "",
                    email: "",
                    phone: "",
                    type: "",
                    peopleId: "",
                    companyId: "",
                },
                peopleInfo: {
                    peopleName: "",
                    cardNumber: "",
                },
                companyInfo: {
                    companyName: "",
                    deptCode: "",
                },
            };
        },
        // 本页面计算属性
        computed: {},
        // 本页面监听属性
        watch: {},

        methods: {
            // 跳转页面
            async toNextPage(to) {
                let parameter = {
                    path: to,
                    params: {},
                }
                await this.$router.push(parameter);
            },
            // 初始化数据
            init() {
                let _that = this
                _that.initOnload = true
                _that.getUserInfo();
                _that.initOnload = false

            },

            handleClick(tab, event) {
                console.log(tab, event);
            },
            getUserInfo() {
                let parameter = {};
                getUserInfo(parameter).then((res) => {
                    this.userInfo = res;
                    if (this.userInfo.type === "1") {
                        getPeopleInfo(parameter).then((res) => {
                            this.peopleInfo = res;
                        }).catch((error) => {
                            console.log(error);
                        });
                    } else if (this.userInfo.type === "2") {
                        getCompanyInfo(parameter).then((res) => {
                            this.companyInfo = res;
                        }).catch((error) => {
                            console.log(error);
                        });
                    } else {

                    }
                }).catch((error) => {
                    console.log(error);
                });
            },
            openNameForm() {
                this.nameFormFlag = true
            },
            saveName() {
                let parameter = this.nameForm
                saveName(parameter)
                    .then((res) => {
                        if (res) {
                            this.getUserInfo()
                            this.nameFormFlag = false
                        }
                    })
                    .catch();
            },
            openEmailForm() {
                this.emailFormFlag = true
            },
            sendBindEmailCaptcha() {
                this.sendBindEmailCaptchaLoad = true
                let parameter = this.emailForm
                sendBindEmailCaptcha(parameter).then((res) => {
                    if (res) {
                        this.emailForm.redisUuid = res
                        this.sendBindEmailCaptchaLoad = false
                    }
                }).catch()
            },
            saveBindEmail() {
                let parameter = this.emailForm
                saveBindEmail(parameter).then((res) => {
                    if (res) {
                        this.emailForm = {}
                        this.emailFormFlag = false
                        this.getUserInfo()
                    }
                }).catch()
            },
            openPhoneForm() {
                this.phoneFormFlag = true
            },
            sendBindPhoneCaptcha() {
                this.sendBindPhoneCaptchaLoad = true
                let parameter = this.phoneForm
                sendBindPhoneCaptcha(parameter).then((res) => {
                    if (res) {
                        this.phoneForm.redisUuid = res
                        this.sendBindPhoneCaptchaLoad = false
                    }
                }).catch()
            },
            saveBindPhone() {
                let parameter = this.phoneForm
                saveBindPhone(parameter).then((res) => {
                    if (res) {
                        this.phoneForm = {}
                        this.phoneFormFlag = false
                        this.getUserInfo()
                    }
                })
            },
            openPeopleForm() {
                this.peopleFormFlag = true;
            },
            savePeopleInfo() {
                let parameter = this.peopleForm
                savePeopleInfo(parameter).then((res) => {
                    if (res) {
                        this.peopleFormFlag = false;
                        window.location.reload();
                    }
                }).catch((err) => {

                })
            },
            openCompanyForm() {
                this.companyFormFlag = true;

            },
            saveCompanyInfo() {
                let parameter = this.companyForm
                saveCompanyInfo(parameter).then((res) => {
                    if (res) {
                        this.companyFormFlag = false;
                        window.location.reload();
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
        mounted() {
            this.init()
        },
        beforeDestroy() {
        },
    };

</script>

<style scoped>

</style>