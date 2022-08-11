<template>
    <div class="view_div">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="账号信息" name="first">
                <el-form>
                    <el-row>
                        <el-col>
                            <el-form-item label="邮箱">
                                <el-input v-model="userInfo.email">

                                </el-input>
                                <el-button v-if="userInfo.email" @click="emailFormFlag=true">
                                    完善联系邮箱
                                </el-button>
                                <el-button v-else @click="emailFormFlag=true">
                                    修改联系邮箱
                                </el-button>
                            </el-form-item>
                        </el-col>
                        <el-col>
                            <el-form-item label="昵称">
                                <el-input v-model="userInfo.name">

                                </el-input>
                                <el-button @click="openNameForm()">
                                    修改昵称
                                </el-button>
                            </el-form-item>
                        </el-col>
                        <el-col v-if="!(userInfo.peopleId&&userInfo.peopleId>0)">
                            <el-form-item label="个人实名">
                                <el-button @click="">实名认证</el-button>
                            </el-form-item>
                        </el-col>
                        <el-col v-if="!(userInfo.companyId&&userInfo.companyId>0)">
                            <el-form-item label="单位账号">
                                <el-button @click="">绑定单位</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane v-if="userInfo.peopleId&&userInfo.peopleId>0" label="身份信息" name="second">
                <el-form>
                    <el-row>
                        <el-col>
                            <el-form-item label="真实姓名">
                                <el-input v-model="peopleInfo.peopleName">

                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>

            </el-tab-pane>
            <el-tab-pane v-if="userInfo.companyId&&userInfo.companyId>0" label="单位信息" name="three">
                <el-form>
                    <el-row>
                        <el-col>
                            <el-form-item label="公司名称">
                                <el-input v-model="companyInfo.companyName">

                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
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
        <el-dialog :visible.sync="emailFormFlag" title="邮箱">
            <el-form :model="emailForm" ref="emailForm" label-width="120px" :label-position="right">
                <el-form-item label="邮箱：">
                    <el-input v-model="emailForm.email"></el-input>
                </el-form-item>
                <el-form-item label="邮箱验证码">
                    <el-input v-model="emailForm.value"></el-input>
                    <el-button @click="">
                        发送验证码
                    </el-button>
                </el-form-item>
                <el-form-item label="操作">
                    <el-button>
                        保存
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
        saveCompanyInfo
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
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                    records: [],
                },
                dataQo: {
                    current: 0,
                    size: 10,
                    orders: [],
                },

                dataDetailFlag: false,
                dataDetailTitle: "",
                dataDetailFormTop: "right",
                dataDetail: {},
                activeName: "first",
                nameFormFlag: false,
                nameForm: {},
                emailFormFlag: false,
                emailForm: {},
                userInfo: {
                    userName: "",
                    name: "",
                    email: "",
                    phone: "",
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
        watch: {
            page: {
                handler(newValue, oldValue) {
                    console.log('new', newValue)
                    console.log('old', oldValue)
                },
                deep: true,
            },
        },

        methods: {
            handleSizeChange(val) {
                console.log(`每页  条`);
                this.dataQo.size = val;
                this.queryPageData()
            },
            handleCurrentChange(val) {
                console.log(`当前页: `);
                this.dataQo.current = val;
                this.queryPageData()
            },
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
                this.getUserInfo();
                this.queryPageData()
            },
            // 查询数据
            queryPageData() {
                let parameter = this.dataQo;
            },
            getUserInfo() {
                let parameter = {};
                getUserInfo(parameter)
                    .then((res) => {
                        this.userInfo = res;
                        if (this.userInfo.peopleId > 0) {
                            getPeopleInfo(parameter)
                                .then((res) => {
                                    this.peopleInfo = res;
                                })
                                .catch();
                        }
                        if (this.userInfo.companyId > 0) {
                            getCompanyInfo(parameter)
                                .then((res) => {
                                    this.companyInfo = res;
                                })
                                .catch();
                        }
                    })
                    .catch((error) => {
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