<template>
  <div>
    <div>
      <el-form>
        <el-form-item>
          <el-date-picker
            v-model="querySchoolClassMo.studyYear"
            type="year"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择学年"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button @click="queryPageSchoolClass"> 查询 </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--        新增删除-->
    <div>
      <el-row>
        <el-col>
          <el-button type="primary" @click="openAddSchoolClassInfoForm"
            >新增</el-button
          >
        </el-col>
      </el-row>
    </div>
    <div>
      <el-table :data="schoolClassList">
        <el-table-column type="selection"></el-table-column>
        <el-table-column
          prop="schoolClassName"
          label="班级名称"
        ></el-table-column>
        <el-table-column prop="studyYear" label="学年"></el-table-column>
        <el-table-column prop="gradeLevel" label="年级"></el-table-column>
        <el-table-column prop="classLevel" label="班组"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-dropdown>
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="">指定班主任</el-dropdown-item>
                <el-dropdown-item @click.native="">开设课程</el-dropdown-item>
                <el-dropdown-item>管理学生</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
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
    <div>
      <el-dialog
        :title="schoolClassInfoFormTitle"
        :visible.sync="schoolClassInfoFormFlag"
      >
        <el-form :model="schoolClassInfo" label-width="100px">
          <el-form-item label="学年">
            <el-date-picker
              v-model="schoolClassInfo.studyYear"
              type="year"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择学年"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="班级名称">
            <el-input v-model="schoolClassInfo.name" autocomplete="off">
            </el-input>
          </el-form-item>
          <el-form-item label="操作">
            <el-button @click="saveSchoolClassInfo">保存</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {
  queryPageSchoolClass,
  saveSchoolClassInfo,
} from "../../../api/schoolClassApi";
import { dateFormat } from "../../../util/dateUtil";
export default {
  name: "schoolClassList",
  components: {},
  props: {},
  methods: {
    init() {
      this.queryPageSchoolClass();
    },
    queryPageSchoolClass() {
      if (this.querySchoolClassMo.studyYear) {
        let parameter = this.querySchoolClassMo;
        parameter.page = this.page;
        queryPageSchoolClass(parameter)
          .then((res) => {
            this.page = res;
            this.schoolClassList = res.records;
          })
          .catch();
      } else {
      }
    },
    openAddSchoolClassInfoForm() {
      this.schoolClassInfoFormTitle = "新增";
      this.schoolClassInfoFormFlag = true;
    },
    saveSchoolClassInfo() {
      let parameter = this.schoolClassInfo;
      saveSchoolClassInfo(parameter).then((res) => {});
    },
  },
  computed: {},
  watch: {},
  data() {
    return {
      name: "schoolClassList",
      page: {
        total: 0,
        current: 0,
        size: 10,
        orders: [],
      },
      querySchoolClassMo: {
        studyYear: dateFormat("yyyy-MM-dd HH:mm:ss", new Date()),
      },
      schoolClassList: [],
      schoolClassInfo: {},
      schoolClassInfoFormTitle: "",
      schoolClassInfoFormFlag: false,
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