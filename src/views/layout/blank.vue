<template>
    <div class="view_div">
        <transition name="el-zoom-in-top">
            <router-view/>
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
        mounted() {
            this.init()
        },
        beforeDestroy() {
        }
    }
</script>

<style scoped>

</style>