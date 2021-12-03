<template>
  <div class="HomePage">
    <HeaderMenu header="Quản lý tài khoản" type="default" :notShow="true" />
    <ListCitizen />
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import ListCitizen from '../pages/ListCitizen.vue';
export default {
  components: { HeaderMenu, ListCitizen },
  data: function () {
    return {};
  },
  methods: {},
};
</script>
