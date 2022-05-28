<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "scoreShip",
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