<template>
  <div class="HomePage">
    <header-menu header="Quản lý tài khoản" type="default" :notShow="true" />
    <!-- <ListCitizen /> -->
    <table-accounts />
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import ListCitizen from '../pages/ListCitizen.vue';
import TableAccounts from '../moreclues/TableAccounts.vue';
export default {
  components: { HeaderMenu, ListCitizen, TableAccounts },
  data: function () {
    return {};
  },
  methods: {},
};
</script>
