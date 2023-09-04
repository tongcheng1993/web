<template>
    <div class="view_div">
        <transition name="el-zoom-in-top">
            <router-view :key="$route.fullPath"/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "blank",
        components: {},
        props: {},
        methods: {
            init() {
            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: 'blank',
            }
        },
        created(){
            console.log('blank created')
        },
        mounted() {
            console.log('blank mounted')
            this.init();
        },
        beforeDestroy() {
            console.log('blank beforeDestroy')

        },
    }
</script>

<style scoped>

</style>