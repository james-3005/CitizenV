<template>
  <div class="HomePage">
    <HeaderMenu header="Thống kê" type="default" :notShow="true" />
    <button @click="router">ABC</button>
    <button @click="router2">ABC</button>
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';

export default {
  components: { HeaderMenu },
  data: function () {
    return {};
  },
  methods: {
    router() {
      this.$router
        .push({ path: '/conference/analytics', query: { a: 1 } })
        .catch(() => null);
    },
    router2() {
      this.$router
        .push({ path: '/conference/analytics', query: { b: 1 } })
        .catch(() => null);
    },
  },
  mounted() {
    this.$watch(
      () => this.$route.query,
      (query) => {
        // xử lý query params
        console.log(query);
      },
    );
  },
  updated() {
    console.log('updated');
  },
};
</script>
