<template>
    <div class="view_div">
        <template v-for="menu in menuList">
            <template v-if="menu.showFlag && menu.showFlag > 0">
                <el-submenu
                        :index="menu.path"
                        :key="menu.id"
                        v-if="menu.children && menu.children.length > 0 && haveOneChildrenShow(menu.children)"
                >
                    <template slot="title"
                    ><i :class="menu.iconFlag"></i
                    ><span slot="title">{{ menu.name }}</span></template
                    >
                    <zfj-menu-template :menuList="menu.children"></zfj-menu-template>
                </el-submenu>
                <el-menu-item :index="menu.path" :key="menu.id" v-else>
                    <i :class="menu.iconFlag"></i>
                    <span slot="title">{{ menu.name }}</span>
                </el-menu-item>
            </template>
        </template>
    </div>
</template>

<script>
    export default {
        name: "zfjMenuTemplate",
        components: {},
        props: {
            menuList: {
                type: Array,
                required: true,
                default: [
                ],
            },
        },
        methods: {
            init() {
            },
        },
        computed: {},
        watch: {
            menuList: {
                handler(newValue, oldValue) {

                },
                deep: true,
            },
        },
        data() {
            return {
                name: "",
            };
        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
        },
    };
</script>

<style >
    .el-menu--horizontal > div > .el-submenu {
        float: left;
    }

    .el-menu--horizontal > div > .el-menu-item {
        float: left;
        height: 60px;
        line-height: 60px;
        margin: 0;
        border-bottom: 2px solid transparent;
        color: #909399;
    }

    .el-menu--horizontal > div > .el-submenu .el-submenu__icon-arrow {
        position: static;
        vertical-align: middle;
        margin-left: 8px;
        margin-top: -3px;
    }

    .el-menu--horizontal > div > .el-submenu .el-submenu__title {
        height: 60px;
        line-height: 60px;
        border-bottom: 2px solid transparent;
        color: #909399;
    }
</style>
