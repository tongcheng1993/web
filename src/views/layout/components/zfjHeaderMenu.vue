<template>
    <div>
        <el-menu
                mode="horizontal"
                router
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
        >
            <template v-for="menu in menuList">
                <template  v-if="menu.showFlag && menu.showFlag > 0">
                    <el-submenu
                            :index="menu.path"
                            :key="menu.id"
                            v-if="menu.children && menu.children.length > 0 && haveOneChildrenShow(menu.children)"
                    >
                        <template slot="title"
                        ><i :class="menu.iconFlag"></i
                        ><span slot="title">{{ menu.name }}</span></template
                        >
                        <zfj-menu-temple :menuList="menu.children"></zfj-menu-temple>
                    </el-submenu>
                    <el-menu-item
                            :index="menu.path"
                            :key="menu.id"
                            v-else
                    >
                        <i :class="menu.iconFlag"></i>
                        <span slot="title">{{ menu.name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {createTree} from '../../../util/treeUtil'
    import zfjMenuTemple from "./zfjMenuTemple";

    export default {
        name: "headerMenu",
        components: {
            zfjMenuTemple,
        },
        props: {},
        methods: {
            init() {
                this.menuList = this.$store.state.menu;
                if (!this.menuList.length) {
                    this.menuList = [
                        {
                            parentId: 0,
                            name: "首页",
                            path: "/dashboard",
                            component: "/dashboard/dashboard",
                            showFlag: "1",
                            iconFlag: "1",
                        },
                    ]
                }
            },
            handleOpen(key, keyPath) {
            },
            handleClose(key, keyPath) {
            },
            handleSelect(key, keyPath) {

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
        computed: {

        },
        watch: {},
        data() {
            return {
                name: "headerMenu",
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                },
                menuList: [],
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