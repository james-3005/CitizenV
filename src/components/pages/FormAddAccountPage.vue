<template>
  <div class="HomePage">
    <HeaderMenu header="Thêm tài khoản" type="default" :notShow="true" />
    <FormCitizen />
  </div>
</template>

<script>
import FormCitizen from '../moreclues/FormCitizen.vue';
import HeaderMenu from '../moreclues/HeaderMenu.vue';

export default {
  components: { HeaderMenu, FormCitizen },
  data: function () {
    return {};
  },
  methods: {},
  mounted() {
    // this.renderChart(this.data, this.options)
  },
};
</script>
