<template>
  <div class="HomePage">
    <HeaderMenu header="Màn hình chính" type="default" :notShow="true" />
    <div class="HomePage-grid">
      <router-link to="/ListCitizen" type="default">
        <button class="HomePage-button">
          <a-icon type="file-text" /> Danh sách dân số
        </button>
      </router-link>
      <button class="HomePage-button">
        <a-icon type="rise" /> Quản lý tài khoản
      </button>
      <button class="HomePage-button">
        <a-icon type="rise" /> Quản lý tài khoản
      </button>
      <button class="HomePage-button">
        <a-icon type="rise" /> Quản lý tài khoản
      </button>
      <button class="HomePage-button">
        <a-icon type="rise" /> Quản lý tài khoản
      </button>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
export default {
  components: { HeaderMenu },
  props: function () {
    return {
      notShow: true,
    };
  },
};
</script>
