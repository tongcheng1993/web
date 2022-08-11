<template>
    <div>
        <div>现有学生</div>
    </div>
</template>

<script>
    import {getCompanyInfo} from "../../../api/userApi";
    import {getSchoolInfo} from "../../../api/schoolApi";

    export default {
        name: "schoolInfo",
        components: {},
        props: {},
        methods: {
            init() {
                this.getCompanyInfo();
            },
            getCompanyInfo() {
                let parameter = {};
                getCompanyInfo(parameter)
                    .then((res) => {
                        this.companyInfo = res;
                    })
                    .catch();
            },
            getSchoolInfo() {
                let parameter = {}
                getSchoolInfo(parameter).then((res) => {
                    this.schoolInfo = res
                })
            }
        },
        computed: {},
        watch: {},
        data() {
            return {
                name: "schoolInfo",
                page: {
                    total: 0,
                    current: 0,
                    size: 10,
                    orders: [],
                },
                companyInfo: {},
                schoolInfo: {
                    name: "",
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