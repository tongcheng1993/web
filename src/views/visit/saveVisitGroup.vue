<template>
    <div class="view_div">
        <label v-model="start"></label>
        <label v-model="end"></label>
        <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true">
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"
                            @locationSuccess="locationSuccess" @locationError="locationError"></bm-geolocation>
            <bm-transit :start="start" :end="end" :auto-viewport="true" location=""></bm-transit>
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        </baidu-map>
    </div>
</template>

<script>
    export default {
        name: "saveVisitGroup",
        // 引用组件
        components: {},
        // 上级组件向本页面传递的参数
        props: {},
        data() {
            return {
                name: "saveVisitGroup",
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                    records: [],
                },
                dataQo: {
                    current: 0,
                    size: 10,
                    orders: [],
                },

                dataDetailFlag: false,
                dataDetailTitle: "",
                dataDetailFormTop: "right",
                dataDetail: {},
                center: {lng: 0, lat: 0},
                zoom: 15,
                start: "",
                end: "",
                location: '北京',
                keyword: '百度'
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
            handleSizeChange(val) {
                console.log(`每页  条`);
                this.dataQo.size = val;
                this.queryPageData()
            },
            handleCurrentChange(val) {
                console.log(`当前页: `);
                this.dataQo.current = val;
                this.queryPageData()
            },
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
                this.queryPageData()
            },
            // 查询数据
            queryPageData() {
                let parameter = this.dataQo;
            },
            handler({BMap, map}) {

            },
            locationSuccess({point, AddressComponent, marker}) {
                console.log(point)
                console.log(AddressComponent)
                console.log(marker)
            },
            locationError({StatusCode}) {
                console.log(StatusCode)
            }
        },
        mounted() {

        },
        beforeDestroy() {
        },
    };

</script>

<style scoped>
    .bm-view {
        width: 100%;
        height: 400px;
    }
</style>