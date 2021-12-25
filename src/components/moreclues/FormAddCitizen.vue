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
      <a-select class="FormAddCitizen-pair-input" v-model="levelOfEducation">
        <a-select-option v-for="level in education" :key="level">
          {{ `${level}/12` }}
        </a-select-option>
      </a-select>
    </div>
    <div class="FormAddCitizen-pair">
      <p>Nghề nghiệp:</p>
      <a-input
        placeholder="Ex: Software engineer"
        class="FormAddCitizen-pair-input"
        v-model="job"
      />
    </div>
    <div class="FormAddCitizen-pair">
      <p>Resource Code:</p>
      <a-input
        placeholder="Ex: coc cac"
        class="FormAddCitizen-pair-input"
        v-model="resourceCode"
      />
    </div>
    <a-button
      v-if="toAdd"
      type="primary"
      class="FormAddCitizen-submit"
      @click="handleRegister"
      >Gửi</a-button
    >
    <a-button
      v-if="toAdjust"
      type="primary"
      class="FormAddCitizen-submit"
      @click="handleAdjust"
      >Sửa</a-button
    >
  </div>
</template>

<script>
import moment from 'moment';
import { addCitizen, updateCitizen } from '../../services/auth';
import { getUser } from '../utilities/localStorage';
import { getQuarter } from '../../services/getCitizen';
import { message } from '../utilities/messageValidate';

export default {
  props: ['address', 'data', 'toAdd', 'toAdjust', 'addValue'],
  data: function () {
    return {
      moment,
      date: moment('1-2-2021', 'DD-MM-YYYY'),
      education: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
      ],
      // form variable
      citizenId: '',
      fullname: '',
      dob: '',
      gender: '',
      placeOfOrigin: '',
      placeOfResidence: '',
      shelterAddress: '',
      religion: '',
      levelOfEducation: '',
      job: '',
      resourceCode: this.data.code,
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
        resourceCode: this.resourceCode,
        // status: getUser().level === 4 ? "DONE" : "PENDING",
      }).then((res) => {
        console.log(res);
        if (res.success) {
          this.$message.success(message.REGISTER_SUCCESS);
          this.addValue(res.data);
          console.log(res.data);
        } else {
          this.$message.error(message.REGISTER_FAIL);
          console.log(res.data);
        }
      });
    },
    handleAdjust() {
      console.log('dcm');
      console.log(this.data._id);
      updateCitizen(this.data._id, {
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
        resourceCode: this.resourceCode,
        status: 'DONE',
      }).then((res) => {
        if (res.success) {
          this.$message.success('Cập nhật thành công');
          console.log(res.data);
        } else {
          this.$message.error('Có lỗi xảy ra');
          console.log(res.data);
        }
      });
    },
  },
  updated() {
    console.log(this.date.format('DD-MM-YYYY'));
  },
  mounted() {
    const citizenAddress =
      this.address.quarterName +
      ', ' +
      this.address.wardName +
      ', ' +
      this.address.districtName +
      ', ' +
      this.address.provinceName;
    this.placeOfOrigin = citizenAddress;
    this.placeOfResidence = citizenAddress;
    this.shelterAddress = citizenAddress;
    this.resourceCode = getUser().resourceCode;
    if (this.toAdjust === true) {
      console.log('this is to adjust');
      // console.log(this.data);
      this.citizenId = this.data.citizenId;
      this.fullname = this.data.fullname;
      this.dob = this.data.dob;
      this.gender = this.data.gender;
      this.placeOfOrigin = this.data.placeOfOrigin;
      this.placeOfResidence = this.data.placeOfResidence;
      this.shelterAddress = this.data.shelterAddress;
      this.religion = this.data.religion;
      this.levelOfEducation = this.data.levelOfEducation;
      this.job = this.data.job;
      this.resourceCode = this.data.resourceCode;
    }
  },
  watch: {
    data(value) {
      console.log('watch', value);
      this.citizenId = value.citizenId;
      this.fullname = value.fullname;
      this.dob = value.dob;
      this.gender = value.gender;
      this.religion = value.religion;
      this.levelOfEducation = value.levelOfEducation;
      this.job = value.job;
    },
  },
};
</script>
