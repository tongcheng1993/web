<template>
    <div class="view_div">

    </div>
</template>

<script>



    export default {
        name: "dashboard",
        components: {

        },
        props: {},
        methods: {

        },
        computed: {
            token() {
                return this.$store.state.token;
            },
        },
        watch: {},
        data() {
            return {
                name: "dashboard",

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
    };
</script>

<style scoped>

</style>