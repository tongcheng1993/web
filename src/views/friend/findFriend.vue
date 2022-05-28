<template>
  <div>
    <!--        搜索-->
    <div>
      <el-row>
        <el-col>
          <el-input v-model="friendPageQo.name"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button @click="queryPageFriend()">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <!--        列表内容-->
    <div>
      <el-table :data="page.records">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="birthday" label="生日"></el-table-column>
        <el-table-column prop="addr" label="当前所在地"></el-table-column>
        <el-table-column prop="birthAddr" label="出生地"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="detailInfo(scope)"
              >详情</el-button
            >
          </template>
        </el-table-column>
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
import { getFriendInfoById, queryPageFriend } from "../../api/friendApi";
export default {
  name: "findFriend",
  components: {},
  props: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.friendPageQo.size = val;
      this.queryPageFriend();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.friendPageQo.current = val;
      this.queryPageFriend();
    },
    async toNextPage(to) {
      await this.$router.push({
        path: to,
        params: {},
      });
    },
    async toNextPage(to) {
      await this.$router.push({
        path: to,
        params: {},
      });
    },
    init() {
      this.queryPageFriend();
    },
    queryPageFriend() {
      let parameter = this.friendPageQo;
      queryPageFriend(parameter).then((res) => {
        this.page = res;
      });
    },
    detailInfo(scope) {
      let parameter = {
        friendId: scope.row.id,
      };
      getFriendInfoById(parameter).then((res) => {});
    },
  },
  computed: {},
  watch: {},
  data() {
    return {
      name: "findFriend",
      page: {
        total: 0,
        current: 0,
        size: 10,
        orders: [],
        records: [],
      },
      friendPageQo: {
        current: 0,
        size: 10,
        name: "",
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