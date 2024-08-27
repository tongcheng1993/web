<template>
    <div class="view_div">
        <div v-if="!token">
            <el-button @click="toLogin">
                去登陆
            </el-button>
        </div>
        <div>
            <el-input v-model="page.keyword" placeholder="请输入内容"></el-input>
            <el-button @click="queryPageData">搜索</el-button>
        </div>
        <div v-if="showFlag">
            <el-table ref="dataTable" :data="page.records" v-loading="tableLoading" @row-click="openDetail"
                :show-header="false">

                <el-table-column>
                    <template slot-scope="scope">
                        {{ scope.row.title }} |{{ scope.row.note }}
                    </template>
                </el-table-column>

            </el-table>
            <!--        分页组件-->
            <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="page.total" :page-size="page.size"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.current"
                :page-sizes="[20, 50, 100]">
            </el-pagination>
        </div>


    </div>
</template>

<script>



export default {
    name: "dashboard",
    components: {

    },
    props: {},

    computed: {
        token() {
            return this.$store.state.token;
        },
        showFlag() {
            return this.page.records.length > 0;
        },
    },
    watch: {},

    methods: {
        async toNextPage(to, query) {
            await this.$router.push({
                path: to,
                query: query,
            });
        },
        // 修改页容量
        handleSizeChange(val) {
            this.page.size = val
            this.queryPageData();
        },
        // 修改当前页
        handleCurrentChange(val) {
            this.page.current = val
            this.queryPageData();
        },
        // 分页查询
        queryPageData() {


        },

        toLogin() {
            let to = "/login"
            this.toNextPage(to)
        },
        openDetail() {

        },
    },

    data() {
        return {
            name: "dashboard",
            tableLoading: false,
            page: {
                total: 0,
                current: 1,
                size: 20,
                orders: [],
                records: [

                ],
                keyword: "",

            },
        };
    },
    mounted() {

    },
    beforeDestroy() {

    },
};
</script>

<style scoped></style>