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
        props: {

        },
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
        computed: {
            menu(){
                return this.$store.state.menu;
            }
        },
        watch: {
            menu: {
                handler(newValue, oldValue) {

                },
                deep: true,
            },
        },
        data() {
            return {
                name: "headerMenu",
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