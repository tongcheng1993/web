<template>
    <div class="view_div">
        {{name}}
    </div>
</template>

<script>
    export default {
        name: "footer",
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
                name: 'footer',
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