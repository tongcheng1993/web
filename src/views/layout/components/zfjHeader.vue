<template>
    <div>
        <el-row>
            <el-col :span="4">111</el-col>
            <el-col :span="12">111</el-col>
            <el-col :span="4">111</el-col>
            <el-col :span="4">
                <el-row>
                    <el-col :span="6"></el-col>
                    <el-col :span="6">

                    </el-col>
                    <el-col :span="6">
                        <zfj-user-icon></zfj-user-icon>
                    </el-col>
                    <el-col :span="6"></el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import zfjUserIcon from './zfjUserIcon'
    export default {
        name: "header",
        components: {
            zfjUserIcon,
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
                name: 'zfjHeader.vue',
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