<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "peopleInfo",
  components: {},
  methods: {
    init() {},
  },
  computed: {},
  watch: {},
  props: {
    data: {
      type: Object,
      default: {

      }
    },
  },
  data() {
    return {
      name: "peopleInfo",
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