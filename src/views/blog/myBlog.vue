<template>
    <div class="view_div">
        <el-tabs :tab-position="tabPosition" style="height: 200px;"  @tab-click="handleClick()">
            <el-tab-pane label="写博客"></el-tab-pane>
            <el-tab-pane label="博客列表">配置管理</el-tab-pane>
            <el-tab-pane label="作品数据">角色管理</el-tab-pane>
        </el-tabs>
        <save_blog :id="this.id"></save_blog>
    </div>
</template>

<script>
    import save_blog from './saveBlog'
    export default {
        name: "myBlog",
        // 引用组件
        components: {
            save_blog,
        },
        // 上级组件向本页面传递的参数
        props: {},
        data() {
            return {
                name: "myBlog",
                tabPosition: 'left',
                id:"1624407408579801089"
            };
        },
        // 本页面计算属性
        computed: {},
        // 本页面监听属性
        watch: {},

        methods: {

            // 初始化数据
            init() {

            },

        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
        },
    };

</script>

<style scoped>

</style>