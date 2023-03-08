<template>
    <div class="view_div">
        <el-container class="a_container">
            <el-header class="h_container">
                <ZFJHeader></ZFJHeader>
            </el-header>
            <el-container class="m_container">
                <el-header class="h_container">
                    <ZFJHeaderMenu></ZFJHeaderMenu>
                </el-header>
                <el-main>
                    <transition name="el-zoom-in-top">
                        <router-view/>
                    </transition>
                </el-main>
            </el-container>
            <el-footer class="f_container">
                <ZFJFooter></ZFJFooter>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import ZFJHeader from './components/zfjHeader'
    import ZFJHeaderMenu from './components/zfjHeaderMenu'
    import ZFJFooter from './components/zfjFooter'


    export default {
        name: "container",
        components: {
            ZFJHeader,
            ZFJHeaderMenu,
            ZFJFooter
        },
        props: {},
        methods: {
            init() {
            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: 'container',
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: []
                },
                mes: "vue"
            }
        },
        mounted() {
            this.init()
        },
        beforeDestroy() {
        }
    }
</script>

<style scoped>

    .a_container {
        overflow: auto;
        height: 100%;
    }

    .h_container {
        height: 10%;
    }

    .m_container {
        height: 80%;
    }

    .f_container {
        height: 10%;
    }
</style>