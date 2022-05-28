<template>
    <div class="view_div">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="账号信息" name="first">
                <user-info :data="userInfo"></user-info>
            </el-tab-pane>
            <el-tab-pane v-if="userInfo.peopleId&&userInfo.peopleId>0" label="身份信息" name="second">
                <people-info :data="peopleInfo"></people-info>
            </el-tab-pane>
            <el-tab-pane v-if="userInfo.companyId&&userInfo.companyId>0" label="单位信息" name="three">
                <company-info :data="companyInfo"></company-info>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import userInfo from './components/userInfo'
    import peopleInfo from "./components/peopleInfo";
    import companyInfo from "./components/companyInfo";
    import {getUserInfo, getPeopleInfo, getCompanyInfo} from "../../api/userApi";

    export default {
        name: "userAccount",
        // 引用组件
        components: {
            userInfo,
            peopleInfo,
            companyInfo,
        },
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