<template>
    <div class="view_div">
        <div>
            <p v-html="bookSectionDetail.sectionContent"></p>
            <el-button v-if="'0' !== bookSectionDetail.lastId" @click="toBookSectionView(bookSectionDetail.lastId)">上一页</el-button>
            <el-button v-if="'0' !== bookSectionDetail.nextId" @click="toBookSectionView(bookSectionDetail.nextId)">下一页</el-button>
        </div>
    </div>
</template>

<script>
    import {queryOneBookSectionById} from "./../../api/bookApi"

    export default {
        name: "bookSectionDetail",
        mounted() {
            this.init();
        },
        methods: {
            // 跳转页面
            async toNextPage(to, p) {
                let parameter = {
                    path: to,
                    query: p,
                }
                await this.$router.push(parameter);
            },
            toBookSectionView(id) {
                let to = "/book/bookSectionDetail"
                let p = {
                    id: id
                }
                this.toNextPage(to, p)
            },

            queryOneBookSectionById() {
                let p = this.$route.query

                let pa = {
                    id: p.id
                }
                queryOneBookSectionById(pa).then(res => {
                    this.bookSectionDetail = res
                })
            },
            init() {
                this.queryOneBookSectionById();
            },
        },
        data() {
            return {
                bookSectionDetail: {
                    sectionContent: "",
                    lastId: "",
                    nextId: ""
                },

            };
        },
    }
</script>

<style scoped>

</style>
