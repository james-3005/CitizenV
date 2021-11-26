<template>
  <div class="HomePage">
    <HeaderMenu header="Màn hình chính" type="default" :notShow="true" />
    <div class="HomePage-grid">
      <!-- <router-link to="/ListCitizen" type="default">
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
      </button> -->
      <!-- asd -->
      <!-- {{this.imgs[0]}} -->
      <div v-for="imga in this.imgs" :key="imga">
        {{ img }}
        <div>{{ imga }}</div>
        <img :src="require(`../../assets/svg/${imga}.svg`)" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
export default {
  components: { HeaderMenu },
  data: function () {
    return {
      imgs: ['appLogo', 'textLogo'],
    };
  },
  methods: {
    returnUrl: function (index) {
      return this.imgs[index];
    },
  },
};
</script>
