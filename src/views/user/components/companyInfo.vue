<template>
  <div>
    <el-form
      ><el-form-item><el-input v-model="data.name"></el-input></el-form-item>
      <el-form-item><el-input v-model="data.deptCode"></el-input></el-form-item>
      <el-form-item><el-input v-model="data.type"></el-input></el-form-item
    ></el-form>
  </div>
</template>

<script>
export default {
  name: "companyInfo",
  components: {},
  props: {
    data: {
      type: Object,
      default:  {
        name:"",
        deptCode:"",
      }
    },
  },
  methods: {
    init() {},
  },
  computed: {},
  watch: {},
  data() {
    return {
      name: "companyInfo",
      page: {
        total: 0,
        current: 0,
        size: 10,
        orders: [],
      },
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {},
};
</script>

<style scoped>
</style>