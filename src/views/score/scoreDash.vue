<template>
    <div>
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
        <div>
            <score-history>

            </score-history>
        </div>
    </div>
</template>

<script>
    import scoreHistory from './component/scoreHistory'
    export default {
        name: "scoreDash",
        components: {
            scoreHistory,
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
                name: 'scoreDash',

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