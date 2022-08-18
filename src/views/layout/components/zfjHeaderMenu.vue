<template>
    <div class="view_div">
        <el-menu
                mode="horizontal"
                router
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
        >
           <zfj-menu-temple :menuList="menuList"></zfj-menu-temple>
        </el-menu>
    </div>
</template>

<script>
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