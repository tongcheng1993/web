<template>
    <div class="view_div">
        <div>
            <el-container class="a_container">
                <el-header class="h_container">
                    <zfj-header></zfj-header>
                </el-header>
                <el-container class="m_container">
                    <el-header class="nav_container">
                        <zfj-header-menu></zfj-header-menu>
                    </el-header>
                    <el-main>
                        <transition name="el-zoom-in-top">
                            <router-view :key="$route.fullPath" />
                        </transition>
                    </el-main>
                </el-container>
                <el-footer class="f_container">
                    <zfj-footer></zfj-footer>
                </el-footer>
            </el-container>
        </div>
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
    computed: {
        token() {
            return this.$store.state.token;
        },
    },
    watch: {
        token: {
            handler(newValue, oldValue) {

            },
            deep: true,
        },
    },
    data() {
        return {
            name: 'container',
        }
    },
    created() {
        console.log('container created')
    },
    mounted() {
        console.log('container mounted')
        this.init();
    },
    beforeDestroy() {
        console.log('container beforeDestroy')

    },

}
</script>

<style scoped>
.el-menu {
    padding: 0;
    margin: 0;
}

.el-header {
    padding: 0;
    margin: 0;
}

.el-main {
    padding: 0;
    margin: 0;
}

.el-footer {
    padding: 0;
    margin: 0;
}

.a_container {
    padding: 0;
    margin: 0; 
}

.h_container {
    height: 60px;
    width: 980px;
}

.nav_container {
    background: none repeat scroll 0 0 #88C6E5;
    height: 60px;
    width: 980px;
    overflow: hidden;
    margin: auto auto;
}

.m_container {

    min-height: 600px;
}

.f_container {

}
</style>