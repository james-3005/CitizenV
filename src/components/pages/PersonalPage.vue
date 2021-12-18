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
            <div class="input-password">
              <a-input-password
                v-model="password"
                :warn="this.validate.password ? true : false"
                @blur="() => validations('password')"
                @focus="() => focus('password')"
              /><br />
              <span class="span">{{ validate.password }}</span>
            </div>
            <div class="input-password">
              <label for="currentPwd">Mật khẩu mới:</label><br />
              <a-input-password
                v-model="newPassword"
                :warn="this.validate.password ? true : false"
                @blur="() => validations('newPassword')"
                @focus="() => focus('newPassword')"
              /><br />
              <span class="span">{{ validate.newPassword }}</span>
            </div>
            <div class="input-password">
              <label for="currentPwd">Nhập lại mật khẩu mới:</label><br />

              <a-input-password
                v-model="rePassword"
                :warn="this.validate.password ? true : false"
                @blur="() => validations('rePassword')"
                @focus="() => focus('rePassword')"
              /><br />
              <span class="span">{{ validate.rePassword }}</span>
            </div>
            <a-button type="primary" @click="changePass"> Lưu </a-button>
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
import { validatePassword } from '../utilities/validate';
import { message } from '../utilities/messageValidate';
import { changePassword } from '../../services/auth';
export default {
  props: {},
  data: () => ({
    user: getUser(),
    password: '',
    rePassword: '',
    newPassword: '',
    validate: {
      password: null,
      rePassword: null,
      newPassword: null,
    },
  }),
  methods: {
    validations(...types) {
      types.forEach(
        (type) => (this.validate[type] = validatePassword(this[type])),
      );
    },
    focus(type) {
      this.validate[type] = null;
    },
    changePass() {
      this.validations('password', 'rePassword', 'newPassword');
      if (this.rePassword !== this.newPassword) {
        this.validate.rePassword = message.RE_PASS;
        return;
      }
      for (let err in this.validate) if (this.validate[err]) return;
      changePassword(this.password, this.newPassword).then((res) => {
        if (res.success) this.$message.info(message.UPDATE_PASSWORD_SUCCESS);
        else this.$message.error(res.message);
      });
    },
  },
  components: {
    HeaderMenu,
  },
};
</script>
