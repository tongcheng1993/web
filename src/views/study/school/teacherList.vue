<template>
  <div>
    <!--        搜索-->
    <div></div>
    <!--        新增删除-->
    <div></div>
    <!--        列表-->
    <div>
      <el-table :data="teacherList">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="subject" label="教学科目"></el-table-column>
        <el-table-column
          prop="schoolClassName"
          label="班主任管理班级"
        ></el-table-column>
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
  name: "teacherList",
  components: {},
  props: {},
  methods: {
    init() {},
  },
  computed: {},
  watch: {},
  data() {
    return {
      name: "teacherList",
      page: {
        total: 0,
        current: 0,
        size: 10,
        orders: [],
      },
      teacherList: [],
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