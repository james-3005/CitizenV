<template>
  <div class="FormAddCitizen">
    <router-view></router-view>
    <div class="FormAddCitizen-pair">
      <p>CCCD/CMND:</p>
      <a-input
        placeholder="Ex: 182909921"
        class="FormAddCitizen-pair-input"
        v-model="citizenId"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Họ và tên:</p>
      <a-input
        placeholder="Ex: Trần Nhật Huy"
        class="FormAddCitizen-pair-input"
        v-model="fullname"
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
      <a-radio-group
        name="radioGroup"
        class="FormAddCitizen-pair-radio"
        v-model="gender"
      >
        <a-radio value="male"> Nam </a-radio>
        <a-radio value="female"> Nữ </a-radio>
      </a-radio-group>
    </div>
    <div class="FormAddCitizen-pair">
      <p>Quê quán:</p>
      <a-textarea
        class="FormAddCitizen-pair-input"
        :auto-size="{ minRows: 2, maxRows: 5 }"
        v-model="placeOfOrigin"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Địa chỉ thường trú:</p>
      <a-textarea
        class="FormAddCitizen-pair-input"
        :auto-size="{ minRows: 2, maxRows: 5 }"
        v-model="placeOfResidence"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Địa chỉ tạm trú:</p>
      <a-textarea
        class="FormAddCitizen-pair-input"
        :auto-size="{ minRows: 2, maxRows: 5 }"
        v-model="shelterAddress"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Tôn giáo:</p>
      <a-input
        placeholder="Ex: Khum"
        class="FormAddCitizen-pair-input"
        v-model="religion"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Trình độ văn hóa:</p>
      <a-input
        placeholder=""
        class="FormAddCitizen-pair-input"
        v-model="levelOfEducation"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Nghề nghiệp:</p>
      <a-input
        placeholder="Ex: Software engineer"
        class="FormAddCitizen-pair-input"
        v-model="job"
      />
    </div>
    <a-button
      type="primary"
      class="FormAddCitizen-submit"
      @click="handleRegister"
      >Gửi</a-button
    >
  </div>
</template>

<script>
import moment from 'moment';
import { addCitizen } from '../../services/auth';

export default {
  props: ['address'],
  data: function () {
    return {
      moment,
      date: moment('1-2-2021', 'DD-MM-YYYY'),
      // form variable
      citizenId: '',
      fullname: '',
      dob: '',
      gender: '',
      placeOfOrigin:
        this.address.wardName +
        ', ' +
        this.address.districtName +
        ', ' +
        this.address.provinceName,
      placeOfResidence:
        this.address.wardName +
        ', ' +
        this.address.districtName +
        ', ' +
        this.address.provinceName,
      shelterAddress:
        this.address.wardName +
        ', ' +
        this.address.districtName +
        ', ' +
        this.address.provinceName,
      religion: '',
      levelOfEducation: '',
      job: '',
    };
  },
  methods: {
    handleRegister() {
      console.log(this.job);
      addCitizen({
        citizenId: this.citizenId,
        fullname: this.fullname,
        dob: this.dob,
        gender: this.gender,
        placeOfOrigin: this.placeOfOrigin,
        placeOfResidence: this.placeOfResidence,
        shelterAddress: this.shelterAddress,
        religion: this.religion,
        levelOfEducation: this.levelOfEducation,
        job: this.job,
      }).then((res) => console.log(res));
    },
  },
  updated() {
    console.log(this.date.format('DD-MM-YYYY'));
  },
};
</script>
