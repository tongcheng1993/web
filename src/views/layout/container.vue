<template>
    <div class="view_div">
        <el-container class="a_container">
            <el-header class="h_container">
                <Header></Header>
            </el-header>
            <el-container class="m_container">
                <el-header class="h_container">
                    <HeaderMenu></HeaderMenu>
                </el-header>
                <el-main>
                    <transition name="el-zoom-in-top">
                        <router-view/>
                    </transition>
                </el-main>
            </el-container>
            <el-footer class="f_container">
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import Header from './components/zfjHeader'
    import HeaderMenu from './components/zfjHeaderMenu'
    import Footer from './components/zfjFooter'

    export default {
        name: "container",
        components: {
            Header,
            HeaderMenu,
            Footer
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