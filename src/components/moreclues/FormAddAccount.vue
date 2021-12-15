<template>
  <div class="FormAddAccount">
    <router-view></router-view>
    <h2>Thông tin tài khoản</h2>
    <div class="FormAddAccount-pair">
      <p>Tên tài khoản:</p>
      <a-input
        placeholder="Ex: huytn@gov.com.vn"
        class="FormAddAccount-pair-input"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>Mật khẩu:</p>
      <a-input-password placeholder="" class="FormAddAccount-pair-input" />
    </div>
    <div class="FormAddAccount-pair">
      <p>Nhập lại mật khẩu:</p>
      <a-input-password placeholder="" class="FormAddAccount-pair-input" />
    </div>
    <br />
    <h2>Thông tin cá nhân</h2>
    <div class="FormAddAccount-pair">
      <p>Họ và tên:</p>
      <a-input placeholder="Ex: Trần" class="FormAddAccount-pair-input" />
    </div>
    <div class="FormAddAccount-pair">
      <p>Giới tính:</p>
      <div class="FormAddAccount-pair-input">
        <a-radio>Nam</a-radio>
        <a-radio>Nữ</a-radio>
      </div>
    </div>
    <div class="FormAddAccount-pair">
      <p>Ngày sinh:</p>
      <a-date-picker
        v-model="dob"
        class="FormAddAccount-pair-input"
        format="DD-MM-YYYY"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>CCCD/CMND:</p>
      <a-input placeholder="Ex: 182909921" class="FormAddAccount-pair-input" />
    </div>
    <div class="FormAddAccount-pair">
      <p>Số điện thoại:</p>
      <a-input placeholder="Ex: 182909921" class="FormAddAccount-pair-input" />
    </div>
    <div class="FormAddAccount-pair">
      <p>Địa chỉ:</p>
      <a-textarea
        placeholder="Ex: 144 Xuân Thuỷ, Hà Nội"
        class="FormAddAccount-pair-input"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
    </div>
    <a-button
      type="primary"
      class="FormAddAccount-submit"
      @click="handleRegister"
      >Tạo</a-button
    >
  </div>
</template>

<script>
import moment from 'moment';
import { register } from '../../services/auth';
export default {
  // props: {
  //   handleToggleProgress: Function,
  //   list: Array,
  // },
  data: function () {
    return {
      moment,
      dob: moment('1-2-2021', 'DD-MM-YYYY'),
    };
  },
  methods: {
    handleRegister() {
      console.log('register');
      register({
        username: 'dont_leveasdd',
        password: '123456',
        name: 'Mạnh Cầu Diễn',
        phoneNumber: '0346743022',
        resourceCode: '0110',
        resourceName: 'Quận Nam Từ Liêm',
        level: 3,
        permissions: '1111',
      }).then((res) => console.log(res));
    },
  },
  updated() {
    console.log(this.dob.format('DD-MM-YYYY'));
  },
};
</script>
