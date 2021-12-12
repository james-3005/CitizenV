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
    <a-button type="primary" class="FormAddAccount-submit">Tạo</a-button>
  </div>
</template>

<script>
import moment from 'moment';
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
  updated() {
    console.log(this.dob.format('DD-MM-YYYY'));
  },
};
</script>
