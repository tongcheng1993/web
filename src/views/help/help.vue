<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "help",
  components: {},
  props: {},
  methods: {
    init() {
    },
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