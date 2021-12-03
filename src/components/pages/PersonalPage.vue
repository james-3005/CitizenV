<template>
  <div class="PersonalPage">
    <HeaderMenu header="Cá nhân" :notShow="true" type="default" />
    <div class="PersonalPage-information">
      <div class="PersonalPage-information-contents">
        <section>
          <h2>Thông tin cá nhân</h2>
          <p>Thông tin này sẽ được hiển thị với mọi người</p>
        </section>
        <div class="info">
          <form>
            <label for="name">Ảnh đại diện:</label><br />
            <div class="info-avatar">
              <img src="../../assets/avatar.png" alt="User avatar" />
            </div>
            <input type="file" id="myFile" name="filename" /> <br />
            <label for="name">Họ và tên:</label><br />
            <a-input type="text" id="name" name="name" /><br />
            <label for="email">Email:</label><br />
            <a-input type="text" id="email" name="email" /><br />
            <a-input type="submit" id="submit_btn" value="Save" /> <br />
            <!-- <label for="phone">Số điện thoại:</label><br />
            <input type="text" id="phone" name="phone" /> -->
          </form>
        </div>
      </div>
    </div>
    <a-divider type="horizontal" />
    <div class="PersonalPage-resetPassword">
      <div class="PersonalPage-resetPassword-contents">
        <section>
          <h2>Cài đặt mật khẩu</h2>
          <p>Thay đổi mật khẩu thường xuyên để tránh nguy cơ bị đánh cắp</p>
        </section>
        <div class="reset">
          <form>
            <label for="currentPwd">Mật khẩu hiện tại:</label><br />
            <input type="text" id="currentPwd" name="currentPwd" /><br />
            <label for="newPwd">Mật khẩu mới:</label><br />
            <input type="text" id="newPwd" name="newPwd" /><br />
            <label for="retypePwd">Nhập lại mật khẩu mới:</label><br />
            <input type="text" id="retypePwd" name="retypePwd" /><br />
            <input type="submit" id="submit_btn" value="Save" /> <br />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
export default {
  props: {},
  data: () => ({}),
  methods: {},
  components: {
    HeaderMenu,
  },
};
</script>
