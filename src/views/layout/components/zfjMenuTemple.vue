<template>
    <div>
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
                    {
                        parentId: 0,
                        name: "首页",
                        path: "/dashboard",
                        component: "/dashboard/dashboard",
                        showFlag: "1",
                        iconFlag: "1",
                    },
                ],
            },
        },
        methods: {
            init() {
            },
            haveOneChildrenShow(children) {
                for (let i = 0; i < children.length; i++) {
                    if (children[i].showFlag > 0) {
                        return true;
                    }
                }
                return false;
            },
        },
        computed: {},
        watch: {

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

<style scoped>
</style>
