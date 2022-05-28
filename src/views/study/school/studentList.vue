<template>
  <div>
    <div></div>
    <div></div>
    <div>
      <el-table :data="studentList">
        <el-table-column prop="name" label="姓名"></el-table-column>
      </el-table>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
        :page-size="page.size"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.current"
        :page-sizes="[10, 50, 100]"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "help",
  components: {},
  props: {},
  methods: {
    init() {},
  },
  computed: {},
  watch: {},
  data() {
    return {
      name: "help",
      page: {
        total: 0,
        current: 0,
        size: 10,
        orders: [],
      },
      studentList:[]
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