<template>
  <div class="FormAddCitizen">
    <router-view></router-view>
    <div class="FormAddCitizen-pair">
      <p>CCCD/CMND:</p>
      <a-input placeholder="Ex: 182909921" class="FormAddCitizen-pair-input" />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Họ và tên:</p>
      <a-input
        placeholder="Ex: Trần Nhật Huy"
        class="FormAddCitizen-pair-input"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Ngày sinh:</p>
      <a-date-picker
        v-model="dob"
        class="FormAddCitizen-pair-input"
        format="DD-MM-YYYY"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Giới tính:</p>
      <div class="FormAddCitizen-pair-input">
        <a-radio>Nam</a-radio>
        <a-radio>Nữ</a-radio>
      </div>
    </div>
    <div class="FormAddCitizen-pair">
      <p>Quê quán:</p>
      <a-textarea
        :value="
          address.wardName +
          ', ' +
          address.districtName +
          ', ' +
          address.provinceName
        "
        class="FormAddCitizen-pair-input"
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Địa chỉ thường trú:</p>
      <a-textarea
        :value="
          address.wardName +
          ', ' +
          address.districtName +
          ', ' +
          address.provinceName
        "
        class="FormAddCitizen-pair-input"
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Địa chỉ tạm trú:</p>
      <a-textarea
        :value="
          address.wardName +
          ', ' +
          address.districtName +
          ', ' +
          address.provinceName
        "
        class="FormAddCitizen-pair-input"
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Tôn giáo:</p>
      <a-input placeholder="Ex: Khum" class="FormAddCitizen-pair-input" />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Trình độ văn hóa:</p>
      <a-input placeholder="" class="FormAddCitizen-pair-input" />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Nghề nghiệp:</p>
      <a-input
        placeholder="Ex: Software engineer"
        class="FormAddCitizen-pair-input"
      />
    </div>
    <a-button type="primary" class="FormAddCitizen-submit">Gửi</a-button>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  props: ['address'],
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
