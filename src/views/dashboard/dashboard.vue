<template>
    <div class="view_div">
        <div v-if="page.records.length === 0">
            <div v-if="!token">
                <el-button @click="toLogin">
                    去登陆1
                </el-button>
            </div>
            <div>
                <el-input v-model="page.key" placeholder="请输入内容"></el-input>
                <el-button>搜索</el-button>
            </div>
        </div>
        <div v-if="page.records.length > 0">
            <div v-if="!token">
                <el-button @click="toLogin">
                    去登陆2
                </el-button>
            </div>
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
    },
    watch: {},
    mounted() {

    },
    beforeDestroy() {

    },
    data() {
        return {
            name: "dashboard",
            tableLoading: false,
            page: {
                total: 0,
                current: 0,
                size: 20,
                orders: [],
                records: [],
                key: "默认",

            },
        };
    },
    methods: {
        async toNextPage(to, query) {
            await this.$router.push({
                path: to,
                query: query,
            });
        },
        toLogin() {
            let to = "/login"
            this.toNextPage(to)
        },
    },

};
</script>

<style scoped></style>