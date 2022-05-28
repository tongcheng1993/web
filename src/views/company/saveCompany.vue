<template>
  <div>
    <el-form :model="companyInfo" ref="form">
      <el-form-item label="统一社会信用代码">
        <el-input v-model="companyInfo.code"></el-input>
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input v-model="companyInfo.name"></el-input>
        <el-button type="primary" @click="checkCompany">核查</el-button>
        {{ checkName }}
      </el-form-item>
      <el-form-item label="公司类型">
        <el-select v-model="companyInfo.type" placeholder="请选择">
          <el-option
            v-for="item in companyTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="saveCompanyInfo">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { checkCompany, saveCompanyInfo } from "../../api/companyApi";
export default {
  name: "saveCompany",
  components: {},
  props: {},
  methods: {
    async toNextPage(to) {
      await this.$router.push({
        path: to,
        params: {},
      });
    },
    init() {
      this.initCompanyTypes();
    },
    initCompanyTypes() {
      this.companyTypes = [
        { label: "学校", value: "1" },
        { label: "非学校", value: "2" },
      ];
    },
    checkCompany() {
      let parameter = {
        companyCode:this.companyInfo.code,
        companyName: this.companyInfo.name,
      };
      checkCompany(parameter)
        .then((res) => {
          this.checkName = res;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveCompanyInfo() {
      let parameter = this.companyInfo;
      saveCompanyInfo(parameter)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {},
  watch: {},
  data() {
    return {
      name: "saveCompany",
      page: {
        total: 0,
        current: 0,
        size: 10,
        orders: [],
        records: [],
      },
      companyTypes: [],
      checkName: "",
      companyInfo: {},
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