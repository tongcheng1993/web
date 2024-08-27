<template>
    <div class="view_div">

        <el-dropdown>
            <el-badge is-dot class="item" :type="wsFlag">
                <el-button type="primary" icon="el-icon-user" circle></el-button>
            </el-badge>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-if="!token" @click.native="toLoginView">去登陆</el-dropdown-item>
                <el-dropdown-item v-if="token" @click.native="toUserInfoView">账户信息</el-dropdown-item>
                <el-dropdown-item v-if="token" @click.native="removeToken">退出系统</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>

</template>

<script>

import { startWs, stopWs } from '@/ws/index.js'
export default {
    name: "zfjUserIcon",
    components: {},
    props: {},
    computed: {
        token() {
            return this.$store.state.token;
        },
        wsFlag() {
            return this.$store.state.wsStore.wsFlag;
        },
        wsMessage() {
            return this.$store.state.wsStore.wsMessage;
        }

    },
    watch: {
        wsFlag: {
            handler(newValue, oldValue) {
                console.log(newValue)
                if ("success" !== newValue) {
                    startWs();
                }
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        async toNextPage(to, query) {
            await this.$router.push({
                path: to,
                query: query,
            });
        },
        cronMethod() {
            console.log('one cron')
            startWs()
        },
        openCron() {
            console.log('open cron')
            this.wsCron = setInterval(this.cronMethod, 5000);
        },
        init() {
            setTimeout(this.openCron, 10000);
        },
        destroy() {
            stopWs();
            if (this.wsCron) {
                clearInterval(this.wsCron);
            }
        },

        toUserInfoView() {
            this.toNextPage("/user/userAccount");
        },
        toLoginView() {
            this.toNextPage("/login");
        },
        removeToken() {
            this.$store.commit("del_token");
            location.reload();
        },
    },
    data() {
        return {
            wsCron: null,
        };
    },
    mounted() {

        this.init();
    },
    beforeDestroy() {

        this.destroy()
    },
};
</script>

<style scoped></style>
