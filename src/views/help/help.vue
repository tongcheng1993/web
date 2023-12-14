<template>
    <div class="view_div">
        <div v-html="html">

        </div>
    </div>
</template>

<script>
    import {getHelpContent} from '../../api/helpApi'

    export default {
        name: "help",
        components: {},
        props: {},
        methods: {
            init() {
                this.getHelpContent();
            },
            getHelpContent() {
                let parameter = {}
                getHelpContent(parameter)
                    .then((res) => {
                        if (res) {
                            this.html = res
                        }
                    })
            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: "help",
                html: "",
            };
        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
        },
    };
</script>

<style scoped>
</style>