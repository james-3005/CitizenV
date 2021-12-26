<template>
  <div class="FormCitizen">
    <router-view></router-view>
    <div class="FormCitizen-pair">
      <p>Họ:</p>
      <a-input placeholder="Ex: Trần" class="FormCitizen-pair-input" />
    </div>
    <div class="FormCitizen-pair">
      <p>Tên:</p>
      <a-input placeholder="Ex: Nhật Huy" class="FormCitizen-pair-input" />
    </div>
    <div class="FormCitizen-pair">
      <p>Giới tính:</p>
      <a-radio>Nam</a-radio>
      <a-radio>Nữ</a-radio>
    </div>
    <div class="FormCitizen-pair">
      <p>Ngày sinh:</p>
      <a-date-picker
        v-model="dob"
        class="FormCitizen-pair-input"
        format="DD-MM-YYYY"
      />
    </div>
    <div class="FormCitizen-pair">
      <p>CCCD/CMND:</p>
      <a-input placeholder="Ex: 182909921" class="FormCitizen-pair-input" />
    </div>
    <div class="FormCitizen-pair">
      <p>Số điện thoại:</p>
      <a-input placeholder="Ex: 182909921" class="FormCitizen-pair-input" />
    </div>
    <div class="FormCitizen-pair">
      <p>Địa chỉ:</p>
      <a-textarea
        placeholder="Ex: 144 Xuân Thuỷ, Hà Nội"
        class="FormCitizen-pair-input"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
    </div>
    <div class="FormCitizen-pair">
      <p>Đã điền:</p>
      <a-switch />
    </div>
    <a-button type="primary" class="FormCitizen-submit">Gửi</a-button>
  </div>
</template>

<script>
import moment from 'moment';
export default {
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
