<template>
    <div class="view_div">

        <div>
            <h2>
                我的收藏
            </h2>
            <el-table :data="wodeshoucang">
                <el-table-column
                        prop="date"
                        label="收藏时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="bName"
                        label="书名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="bAuth"
                        label="作者"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="mainContent"
                        label="主要内容">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope)" type="text" size="small">阅读</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="wodeshoucangpage.total"
                    :page-size="wodeshoucangpage.size"
                    @size-change="handlewodeshoucangpageSizeChange"
                    @current-change="handlewodeshoucangpageCurrentChange"
                    :current-page="wodeshoucangpage.current"
                    :page-sizes="[10, 50, 100]"
            >
            </el-pagination>
        </div>
        <div>
            <h2>
                我的上传
            </h2>
            <el-button @click="">创建新书</el-button>
            <el-table :data="wodeshangchuanpage.records">
                <el-table-column
                        prop="createTime"
                        label="创建时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="bookName"
                        label="书名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="bookAuth"
                        label="作者"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="mainContent"
                        label="主要内容">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="toBookDetail(scope)">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="wodeshangchuanpage.total"
                    :page-size="wodeshangchuanpage.size"
                    @size-change="handlewodeshangchuanpageSizeChange"
                    @current-change="handlewodeshangchuanpageCurrentChange"
                    :current-page="wodeshangchuanpage.current"
                    :page-sizes="[10, 50, 100]"
            >
            </el-pagination>
        </div>


    </div>
</template>

<script>
    import {queryPageBook} from '../../api/bookApi'

    export default {
        name: "myBookShelf",
        data() {
            return {
                initOnload: false,
                wodeshoucang: [],
                wodeshoucangpage: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                    records: [],
                },
                wodeshangchuan: [],
                wodeshangchuanpage: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                    records: [],
                }

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
            handlewodeshoucangpageSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handlewodeshoucangpageCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleClick(row) {
                console.log(row);
            },
            handlewodeshangchuanpageSizeChange(val) {
                this.wodeshangchuanpage.size = val
                this.queryPageBook();
            },
            handlewodeshangchuanpageCurrentChange(val) {
                this.wodeshangchuanpage.current = val
                this.queryPageBook();
            },
            toBookDetail(scope) {
                let p = {
                    id: scope.row.id
                }
                this.toNextPage('/book/bookDetail', p)
            },
            queryPageBook() {
                let pa = {
                    current: this.wodeshangchuanpage.current,
                    size: this.wodeshangchuanpage.size,
                }
                queryPageBook(pa).then((res) => {
                    this.wodeshangchuanpage = res
                })
            },
            init() {
                this.queryPageBook()
            }
        },
        mounted() {
            this.init();

        }
    }
</script>

<style scoped>

</style>
