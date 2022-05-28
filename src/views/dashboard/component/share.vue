<template>
  <div class="">
    <div class="">
      {{name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "share",
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

    },
  },
  computed: {},
  watch: {},
  data() {
    return {
      name: "share",
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