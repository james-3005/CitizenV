<template>
  <div class="LoginPage">
    <div class="LoginPage-image">
      <img src="../../assets/login-image.png" alt="" />
    </div>
    <div class="LoginPage-form">
      <div class="LoginPage-form-logocontainer">
        <img src="../../assets/svg/appLogo.svg" alt="Logo" class="logo" />
      </div>
      <div class="LoginPage-form-title">
        <strong>Đăng nhập</strong>
      </div>
      <a-form
        class="LoginPage-form-container"
        @submit.prevent="submitLoginForm"
      >
        <label for="email">Email</label>
        <a-input
          type="text"
          placeholder="Nhập Email"
          name="email"
          required
          v-model="email"
          class="LoginPage-input"
        />
        <label for="psw">Password</label>
        <a-input
          type="password"
          placeholder="Nhập Password"
          name="psw"
          required
          v-model="password"
          class="LoginPage-input"
        />
        <!-- <router-link to="/conference/home"> -->
        <button type="submit">Đăng nhập</button>
        <!-- </router-link> -->
      </a-form>
      <div class="LoginPage-footer">CitizenV - Hệ thống điều tra dân số</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    submitLoginForm: function () {
      console.log(this.email);
      console.log(this.password);
    },
  },
  components: {},
};
</script>
