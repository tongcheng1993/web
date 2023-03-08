<template>
    <div class="">
        <el-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type"
                @click="handleTagClick(tag)"
                @close="handleTagClose(tag)">
            {{tag.name}}
        </el-tag>
    </div>
</template>

<script>

    export default {
        name: "zfjTag",
        computed: {
            zfjTags() {
                return this.$store.state.zfjTags;
            },
        },
        watch: {
            zfjTags: {
                handler(newValue, oldValue) {
                    this.tags = newValue
                },
                deep: true,
            },
        },
        data() {
            return {
                name: 'zfjTag',
                tags: []
            }
        },
        methods: {
            async toNextPage(to) {
                await this.$router.push(to);
            },
            handleTagClose(tag) {
                let itemIndex = this.tags.findIndex((item) => tag.path === item.path)
                this.$store.state.zfjTags.splice(itemIndex, 1);
            },
            handleTagClick(tag) {
                this.toNextPage(tag)
            },
        },


    }
</script>

<style scoped>
    .view_div {

    }
</style>