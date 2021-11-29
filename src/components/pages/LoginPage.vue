<template>
  <div class="LoginPage">
    <div class="LoginPage-image">
      <img src="../../assets/login-image.png" alt="" />
    </div>
    <form action="" class="LoginPage-form">
      <div class="LoginPage-form-logocontainer">
        <img src="../../assets/svg/appLogo.svg" alt="Logo" class="logo" />
      </div>
      <div class="LoginPage-form-title">
        <strong>Đăng nhập</strong>
      </div>
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
        <router-link to="/conference/home">
          <button type="submit">Login</button>
        </router-link>
      </div>
      <div class="LoginPage-footer">CitizenV - Hệ thống điều tra dân số</div>
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
