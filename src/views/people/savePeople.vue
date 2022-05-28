<template>
  <div>
    <el-form :model="peopleInfo" ref="form" >
      <el-form-item label="姓名">
        <el-input v-model="peopleInfo.name"></el-input>
      </el-form-item>
       <el-form-item label="身份证号">
        <el-input v-model="peopleInfo.cardId"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="peopleInfo.sex"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-input v-model="peopleInfo.birthday"></el-input>
      </el-form-item>
      <el-form-item label="出生地">
        <el-input v-model="peopleInfo.birthAddress"></el-input>
      </el-form-item>
      <el-form-item label="居住地">
        <el-input v-model="peopleInfo.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="savePeopleInfo">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { savePeopleInfo } from "../../api/peopleApi";
export default {
  name: "savePeople",
  components: {},
  props: {},
  methods: {
    async toNextPage(to) {
      await this.$router.push({
        path: to,
        params: {},
      });
    },
    init() {},
    savePeopleInfo() {
      let parameter = this.peopleInfo;
      savePeopleInfo(parameter).then((res)=>{
        
      }).catch((error)=>{
          console.log(error)
      });
    },
  },
  computed: {},
  watch: {},
  data() {
    return {
      name: "savePeople",
      page: {
        total: 0,
        current: 0,
        size: 10,
        orders: [],
        records: [],
      },
      peopleInfo: {
        name:"",
        cardId:"",
        sex:"",
        birthday:"",
        birthAddress:"",
        address:"",
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