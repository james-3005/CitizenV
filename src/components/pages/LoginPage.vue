<template>
  <div class="LoginPage">
    <div class="LoginPage-image">
      <img src="../../assets/login-image.png" alt="" />
    </div>
    <form action="" class="LoginPage-form">
      <div class="LoginPage-form-logocontainer">
        <img src="../../assets/svg/appLogo.svg" alt="Logo" class="logo" />
      </div>
      <h2><strong>Đăng nhập</strong></h2>
      <div class="LoginPage-form-container">
        <label for="email">Email</label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {},
  data: () => ({}),
  methods: {},
  components: {},
};
</script>
