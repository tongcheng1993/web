<template>
    <div class="view_div">
        <el-container class="a_container">
            <el-header class="h_container">
                <zfj-header></zfj-header>
            </el-header>
            <el-container class="m_container">
                <el-header class="h_container">
                    <zfj-header-menu></zfj-header-menu>
                </el-header>
                <el-main>
                    <transition name="el-zoom-in-top">
                        <router-view/>
                    </transition>
                </el-main>
            </el-container>
            <el-footer class="f_container">
                <zfj-footer></zfj-footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import zfjHeader from './components/zfjHeader'
    import zfjHeaderMenu from './components/zfjHeaderMenu'
    import zfjFooter from './components/zfjFooter'


    export default {
        name: "container",
        components: {
            zfjHeader,
            zfjHeaderMenu,
            zfjFooter
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