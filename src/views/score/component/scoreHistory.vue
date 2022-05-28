<template>
    <div>
        <div>
            积分账号基础信息
        </div>
        <div>
            积分账号历史记录
        </div>
    </div>
</template>

<script>
    export default {
        name: "scoreHistory",
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
                name: 'scoreHistory',
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: []
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