<template>
    <div class="view_div">
        <div>
            <p v-html="bookSectionDetail.sectionContent"></p>
            <el-button @click="toBookSectionView(bookSectionDetail.lastId)">上一页</el-button>
            <el-button @click="toBookSectionView(bookSectionDetail.nextId)">下一页</el-button>
        </div>
    </div>
</template>

<script>
    import {getBookSectionDetail, getLastBookSectionId, getNextBookSectionId} from "./../../api/bookApi"

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

            getBookSectionDetail() {
                let p = this.$route.query

                let pa = {
                    id: p.id
                }
                getBookSectionDetail(pa).then(res => {
                    this.bookSectionDetail = res
                })
            },
            init() {
                this.getBookSectionDetail();
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