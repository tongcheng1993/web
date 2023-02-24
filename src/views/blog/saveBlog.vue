<template>
    <div class="view_div">
        <div>
            <el-input v-model="blogForm.blogName"></el-input>
            <div ref="wEditor">

            </div>
        </div>
        11111111111
        <div v-html="this.blogForm.blogText">

        </div>
        22222222222222
        <div>
            <el-button @click="saveBlog()">
                保存
            </el-button>
        </div>
    </div>
</template>

<script>
    import {saveBlog, getBlogById} from '../../api/blogApi'

    export default {
        name: "saveBlog",
        // 引用组件
        components: {},
        // 上级组件向本页面传递的参数
        props: {
            id: String,
        },
        data() {
            return {
                name: "saveBlog",
                editor: null,
                blogForm: {
                    id: "",
                    blogName: "",
                    blogAuth: "",
                    blogType: "草稿",
                    blogContent: "这里是内容",
                    blogText: "这里是内容",
                },

            };
        },
        // 本页面计算属性
        computed: {},
        // 本页面监听属性
        watch: {
            page: {
                handler(newValue, oldValue) {
                    console.log('new', newValue)
                    console.log('old', oldValue)
                },
                deep: true,
            },

        },

        methods: {
            // 跳转页面
            async toNextPage(to) {
                let parameter = {
                    path: to,
                    params: {},
                }
                await this.$router.push(parameter);
            },
            // 初始化数据
            init() {
                this.editor = new wangEditor(this.$refs.wEditor);
                // 图片使用base64
                this.editor.config.uploadImgShowBase64 = true
                // 默认情况下，显示所有菜单
                this.editor.config.menus = [
                    'head',
                    'bold',
                    'fontSize',
                    'fontName',
                    'italic',
                    'underline',
                    'strikeThrough',
                    'indent',
                    'lineHeight',
                    'foreColor',
                    'backColor',
                    'link',
                    'list',
                    'todo',
                    'justify',
                    'quote',
                    'emoticon',
                    'image',
                    'video',
                    'table',
                    'code',
                    'splitLine',
                    'undo',
                    'redo',
                ]
                this.editor.config.onchange = (newHtml) => {
                    this.setContent(newHtml);
                };
                this.editor.create();

                this.getBlogById(this.id)

            },
            setContent(newHtml) {
                this.blogForm.blogText = newHtml
                console.log(this.editor)
                console.log(this.editor.txt)
                console.log( this.editor.txt.html)
            },
            saveBlog() {
                let parameter = this.blogForm
                saveBlog(parameter).then((res) => {

                }).catch((err) => {

                })
            },
            getBlogById(id) {
                if (id > 0) {
                    let parameter = {
                        id: id
                    }
                    getBlogById(parameter).then((res) => {
                        if (res) {
                            this.blogForm = res
                            this.setContent()
                        }
                    })
                }
            },


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