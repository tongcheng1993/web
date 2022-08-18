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
            getHelpContent(){
                let parameter = {}
                getHelpContent(parameter)
                    .then((res)=>{
                        if(res){
                            this.html=res
                        }
                    })
            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: "help",
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                },
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