<template>
    <div>
        <div>
            <el-row>
                <el-col span="12">
                    <share></share>
                </el-col>
                <el-col span="12">
                    <notice></notice>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import notice from "./component/notice.vue";
    import share from "./component/share.vue";

    export default {
        name: "dashboard",
        components: {
            notice,
            share,
        },
        props: {},
        methods: {
            init() {

            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: "dashboard",
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                },
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