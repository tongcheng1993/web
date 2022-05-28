<template>
  <div class="">
    <div class="">
      {{name}}
    </div>
  </div>
</template>

<script>
// import E from "wangeditor";
export default {
  name: "notice",
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
      // const editor = new  wangEditor("#editor");
      // editor.create();
    },
  },
  computed: {},
  watch: {},
  data() {
    return {
      name: "notice",
      page: {
        total: 0,
        current: 0,
        size: 10,
        orders: [],
        records: [],
      },
      noticeForm: {},
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