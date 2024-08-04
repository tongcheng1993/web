<template>
    <div class="view_div">
        <el-row>
            <el-col :span="8">
                <div class="m_img">
                    <a href="">
                        <img :src="logoImg" alt="">
                    </a>
                </div>
            </el-col>
            <el-col :span="12">111</el-col>
            <el-col :span="4">
                <el-row>
                    <el-col :span="6"></el-col>
                    <el-col :span="6">

                    </el-col>
                    <el-col :span="6">
                        <div class="user">
                            <zfj-user-icon></zfj-user-icon>
                        </div>
                    </el-col>
                    <el-col :span="6"></el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import zfjUserIcon from './zfjUserIcon'
import logoImg from '../../../assets/dash.jpg'
export default {
    name: "header",
    components: {
        zfjUserIcon,
    },
    props: {},
    methods: {
        async toNextPage(to) {
            await this.$router.push({
                path: to,
                params: {},
            });
        },
        init() {
        },

    },
    computed: {},
    watch: {},
    data() {
        return {
            name: 'zfjHeader.vue',
            logoImg: logoImg,
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
.m_img {
    height: 61px;
    width: 100%;
    overflow: hidden;
}

.user {
    margin: 8px;
}
</style>