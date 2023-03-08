<template>
    <div class="view_div" :onload="initOnload">
        <div>
            <el-form>
                <el-row>
                    <el-col>
                        <el-form-item>

                        </el-form-item>
                    </el-col>
                    <el-col>
                        <el-form-item>

                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>


    export default {
        name: "scoreDash",
        components: {

        },
        props: {},
        methods: {
            init() {
                let _that = this
                _that.initOnload = true;

                _that.initOnload = false;
            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: 'scoreDash',
                initOnload: false,

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