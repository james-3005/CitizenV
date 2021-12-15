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
              <a-avatar
                class="img"
                :size="75"
                type="user"
                style="color: #30444a; backgroundcolor: #cfdade"
              >
                {{ user.username }}
              </a-avatar>
            </div>
            <input type="file" name="filename" class="input" /> <br />
            <label for="name">Họ và tên:</label><br />
            <a-input
              class="input"
              type="text"
              name="name"
              disabled
              :value="user.name"
            /><br />
            <label for="email">Số điện thoại:</label><br />
            <a-input
              class="input"
              type="text"
              name="email"
              disabled
              :value="user.phoneNumber"
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
import { getUser } from '../utilities/localStorage';
export default {
  props: {},
  data: () => ({
    user: getUser(),
  }),
  methods: {},
  components: {
    HeaderMenu,
  },
};
</script>
