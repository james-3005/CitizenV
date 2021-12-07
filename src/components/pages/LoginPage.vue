<template>
  <div
    class="LoginPage"
    tabindex="0"
    @keydown.enter="handleLogin"
    ref="loginPage"
  >
    <div class="LoginPage-image">
      <img src="../../assets/login-image.png" alt="" />
    </div>
    <form action="" class="LoginPage-form">
      <div class="LoginPage-form-logocontainer">
        <img src="../../assets/svg/appLogo.svg" alt="Logo" class="logo" />
      </div>
      <div class="LoginPage-form-title">Đăng nhập</div>
      <a-form class="LoginPage-form-container">
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
        <button type="submit" @click="handleLogin">Đăng nhập</button>
      </a-form>
      <div class="LoginPage-footer">CitizenV - Hệ thống điều tra dân số</div>
    </form>
  </div>
</template>

<script>
import { login } from '../../services/auth';
import { setToken } from '../utilities/localStorage';
export default {
  props: {},
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    handleLogin() {
      login({ username: this.email, password: this.password }).then((res) => {
        if (res.success) {
          setToken(res.token);
          this.$router.push('/conference/home');
        } else {
          console.log(res);
        }
      });
    },
  },
  components: {},
  mounted() {
    this.$refs.loginPage.focus();
  },
};
</script>
