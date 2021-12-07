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
            <input type="file" name="filename" class="input" /> <br />
            <label for="name">Họ và tên:</label><br />
            <a-input
              class="input"
              type="text"
              name="name"
              disabled
              value="Tran Nhat Huy"
            /><br />
            <label for="email">Email:</label><br />
            <a-input
              class="input"
              type="text"
              name="email"
              disabled
              value="1902xxxx@vnu.edu.vn"
            /><br />
            <a-button type="primary">Lưu</a-button>
            <br />
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
            <a-input class="input" type="text" name="currentPwd" /><br />
            <label for="newPwd">Mật khẩu mới:</label><br />
            <a-input class="input" type="text" name="newPwd" /><br />
            <label for="retypePwd">Nhập lại mật khẩu mới:</label><br />
            <a-input class="input" type="text" name="retypePwd" /><br />
            <a-button type="primary"> Lưu </a-button>
            <br />
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
