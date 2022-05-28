<template>
    <div>
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
            async toNextPage(to) {
                await this.$router.push({
                    path: to,
                    params: {}
                })
            },
            init() {
            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: 'blank',
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                    records: [],
                },
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