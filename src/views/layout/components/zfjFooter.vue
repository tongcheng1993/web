<template>
    <div class="view_div">
        <div class="m_font">
            <p>所有小说和章节均由网友上传，转载只为宣传本书让更多读者欣赏。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer",
        components: {},
        props: {},
        methods: {
            init() {
            },
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: 'footer',
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
    .m_font {
        font-size: 12px;
        text-align: center;
        list-style-type: none;

        text-decoration: none;
        margin: auto;
        padding: 0;
        line-height: 22px;
        color: #b2b2b2;
    }
</style>