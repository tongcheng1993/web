<template>
    <div class="view_div">
        <el-menu
                mode="horizontal"
                router
                @open="handleOpen()"
                @close="handleClose()"
                @select="handleSelect()"
        >
            <zfj-menu-temple :menuList="menu"></zfj-menu-temple>
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

            },
            handleOpen(key, keyPath) {
            },
            handleClose(key, keyPath) {
            },
            handleSelect(key, keyPath) {

            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: "headerMenu",
                menu: [
                    {
                        id: "0",
                        showFlag: 1,
                        path: "/dashboard",
                        children: [],
                        iconFlag: "",
                        name:"首页"
                    },
                    {
                        id: "1",
                        showFlag: 1,
                        path: "/friend",
                        children: [],
                        iconFlag: "",
                        name:"联系人"
                    },
                    {
                        id: "2",
                        showFlag: 1,
                        path: "/book",
                        children: [],
                        iconFlag: "",
                        name:"书"
                    },
                    {
                        id: "3",
                        showFlag: 1,
                        path: "/game",
                        children: [],
                        iconFlag: "",
                        name:"游戏列表"
                    },
                ]
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