<template>
    <div class="view_div">
        <div>
            <div class="m_img">
                <img class="m_img" :src=bookDetail.bookImg :alt=bookDetail.bookName>
            </div>
            <dl>
                <dt><span>书名：{{bookDetail.bookName}}</span></dt>
                <dd><span>作者：{{bookDetail.bookAuth}}</span></dd>
                <dd><span>类型：{{bookDetail.bookType}}</span></dd>
            </dl>
        </div>
        <div>
            <ul>
                <li v-for="item in bookSectionList">
                    <span @click="toBookSectionView(item)">{{item.sectionName}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {queryOneBookById, queryListBookSection} from "./../../api/bookApi"

    export default {
        name: "bookDetail",
        data() {
            return {
                bookDetail: {
                    bookName: "",
                    bookType: "",
                    bookAuth: "",
                    bookImg: ""
                },
                bookSectionList: [{
                    id: "",
                    bookId: "",
                    sectionName: ""
                }],
            };
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
            toBookSectionView(item) {
                let to = "/book/bookSectionDetail"
                let p = {
                    id: item.id
                }
                this.toNextPage(to, p)
            },
            queryOneBookById() {
                let p = this.$route.query
                let pa = {
                    id: p.id
                }
                queryOneBookById(pa).then(res => {
                    this.bookDetail = res
                    this.bookDetail.bookImg = "/api/sys/file/downloadStreamFile?id=" + this.bookDetail.bookImg
                })
            },
            queryListBookSection() {
                let p = this.$route.query
                let pa = {
                    bookId: p.id
                }
                queryListBookSection(pa).then((res) => {
                    this.bookSectionList = res
                })
            },
            init() {
                this.queryOneBookById();
                this.queryListBookSection()


            }
        },
        mounted() {
            this.init();
        },
    }
</script>

<style scoped>

</style>
