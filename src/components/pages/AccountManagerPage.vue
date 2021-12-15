<template>
  <div class="HomePage">
    <header-menu header="Quản lý tài khoản" type="default" :notShow="true" />
    <table-accounts />
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableAccounts from '../moreclues/TableAccounts.vue';
export default {
  components: { HeaderMenu, TableAccounts },
  data: function () {
    return {};
  },
  methods: {},
};
</script>
