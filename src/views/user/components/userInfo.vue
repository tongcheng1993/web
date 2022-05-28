<template>
    <div class="view_div">
        <el-form>
            <el-row>
                <el-col :span="6">
                    <el-form-item label="账号">
                        <el-input v-model="data.userName">

                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="昵称">
                        <el-input v-model="data.name">

                        </el-input>
                    </el-form-item>

                </el-col>
                <el-col :span="6">
                    <el-form-item label="绑定邮箱">
                        <el-input v-model="data.email">

                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="绑定手机">
                        <el-input v-model="data.phone">

                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="个人实名">
                        <el-button @click="">实名认证</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="单位账号">
                        <el-button @click="">绑定单位</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "userInfo",
        // 引用组件
        components: {},
        // 上级组件向本页面传递的参数
        props: {
            data: {
                type: Object,
                default: {
                    userName: "",
                    name: "",
                    email: "",
                    phone: "",
                    peopleId: "",
                    companyId: "",
                }
            },
        },
        data() {
            return {
                name: "userInfo",
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
            data: {
                handler(newValue, oldValue) {
                    console.log('new', newValue)
                    console.log('old', oldValue)
                },
                deep: true,
            }
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
                this.queryPageData()
            },
            // 查询数据
            queryPageData() {
                let parameter = this.dataQo;
            },
            toSavePeople() {
                this.toNextPage('/')
            },

        },
        mounted() {

        },
        beforeDestroy() {
        },
    };

</script>

<style scoped>

</style>