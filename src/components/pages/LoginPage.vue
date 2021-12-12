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
    <div class="LoginPage-form">
      <div class="LoginPage-form-logocontainer">
        <img src="../../assets/svg/appLogo.svg" alt="Logo" class="logo" />
      </div>
      <div class="LoginPage-form-title">
        <strong>Đăng nhập</strong>
      </div>
      <a-form class="LoginPage-form-container">
        <div class="formItem">
          <a-input
            type="text"
            placeholder="Nhập Username"
            v-model="username"
            class="LoginPage-input"
            :warn="this.validate.username ? true : false"
            @blur="() => validations('username')"
            @focus="() => focus('username')"
          />
          <span>{{ validate.username }}</span>
        </div>
        <div class="formItem">
          <a-input
            type="password"
            placeholder="Nhập Password"
            v-model="password"
            class="LoginPage-input"
            :warn="this.validate.password ? true : false"
            @blur="() => validations('password')"
            @focus="() => focus('password')"
          />
          <span>{{ validate.password }}</span>
        </div>
        <button @click="handleLogin">Đăng nhập</button>
      </a-form>
      <div class="LoginPage-footer">CitizenV - Hệ thống điều tra dân số</div>
    </div>
  </div>
</template>

<script>
import { login } from '../../services/auth';
import { setToken } from '../utilities/localStorage';
import { validatePassword, validateUsername } from '../utilities/validate';
import { message } from '../utilities/messageValidate';
export default {
  props: {},
  data: () => ({
    username: '',
    password: '',
    validate: {
      username: null,
      password: null,
    },
  }),
  methods: {
    handleLogin() {
      this.validations();
      for (let i in this.validate) {
        if (this.validate[i]) return;
      }
      login({ username: this.username, password: this.password }).then(
        (res) => {
          if (res.success) {
            console.log(res);
            setToken(res.token);
            this.$router.push('/conference/home');
          } else {
            console.log(res);
            if (res.message === message.USER_NOT_EXIST)
              this.validate.username = message.USER_NOT_EXIST;
            else if (res.message === message.WRONG_PASS)
              this.validate.password = message.WRONG_PASS;
          }
        },
      );
    },
    validations(type) {
      if (type === 'password')
        this.validate.password = validatePassword(this.password);
      else if (type === 'username')
        this.validate.username = validateUsername(this.username);
      else {
        this.validate.password = validatePassword(this.password);
        this.validate.username = validateUsername(this.username);
      }
    },
    focus(type) {
      if (type === 'password') this.validate.password = null;
      else this.validate.username = null;
    },
  },
  components: {},
  mounted() {
    this.$refs.loginPage.focus();
  },
};
</script>
