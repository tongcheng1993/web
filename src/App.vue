<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>

    export default {

        methods: {
            init() {

            },
        },
        mounted() {
            console.log('app mounted')
            this.init();
        },
        beforeDestroy() {
            console.log('app beforeDestroy')

        },
    }
</script>
<style>
    #app {
        width: 980px;
    }

</style>
