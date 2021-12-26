<template>
  <div class="FormAddAccount">
    <router-view></router-view>
    <h2>Thông tin đơn vị mới</h2>
    <div class="FormAddAccount-pair">
      <p>Tên đơn vị:</p>
      <a-input
        placeholder="Ex: Hà Tĩnh"
        class="FormAddAccount-pair-input"
        v-model="name"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>Mã đơn vị:</p>
      <div class="FormAddAccount-pair-input">
        <a-input
          placeholder="prefix code"
          v-model="prefixCode"
          style="width: 5rem; color: #000000a6"
          disabled
        />
        <a-input placeholder="unit code" v-model="unitCode" />
      </div>
    </div>
    <a-button
      type="primary"
      class="FormAddAccount-submit"
      @click="handleRegister()"
      >Tạo</a-button
    >
  </div>
</template>

<script>
import moment from 'moment';
import { getUser } from '../utilities/localStorage';
import {
  addDistrict,
  addProvince,
  addQuarter,
  addUnit,
  addWard,
} from '../../services/auth';
export default {
  props: ['addValue'],
  data: function () {
    return {
      // form variable
      name: '',
      prefixCode: '',
      unitCode: '',
      unitName: '',
      // other variables
      moment,
    };
  },
  mounted() {
    this.prefixCode = getUser().resourceCode;
  },
  methods: {
    handleRegister() {
      console.log(getUser().resourceCode, getUser().level);
      this.handleAddUnit();
    },

    handleAddProvince() {
      addProvince({
        code: this.prefixCode + this.unitCode,
        name: this.name,
      }).then((res) => {
        this.handleResponse(res);
      });
    },

    handleAddDistrict() {
      addDistrict({
        code: this.prefixCode + this.unitCode,
        name: this.name,
        provinceCode: getUser().levelInfo.code,
        provinceName: getUser().levelInfo.name,
      }).then((res) => {
        this.handleResponse(res);
      });
    },

    handleAddWard() {
      addWard({
        code: this.prefixCode + this.unitCode,
        name: this.name,
        districtCode: getUser().levelInfo.code,
        districtName: getUser().levelInfo.name,
        provinceCode: getUser().levelInfo.provinceCode,
        provinceName: getUser().levelInfo.provinceName,
      }).then((res) => {
        this.handleResponse(res);
      });
    },

    handleAddQuarter() {
      addQuarter({
        code: this.prefixCode + this.unitCode,
        name: this.name,
        wardCode: getUser().levelInfo.code,
        wardName: getUser().levelInfo.name,
        districtCode: getUser().levelInfo.districtCode,
        districtName: getUser().levelInfo.districtName,
        provinceCode: getUser().levelInfo.provinceCode,
        provinceName: getUser().levelInfo.provinceName,
      }).then((res) => {
        this.handleResponse(res);
      });
    },

    handleAddUnit(rowData) {
      const userLevel = getUser().level;
      switch (userLevel) {
        case 1:
          return this.handleAddProvince(rowData);
        case 2:
          return this.handleAddDistrict(rowData);
        case 3:
          return this.handleAddWard(rowData);
        case 4:
          return this.handleAddQuarter(rowData);
        default:
          break;
      }
    },

    handleResponse(res) {
      if (res.success) {
        console.log(res.data);
        this.addValue(res.data);
        this.$message.success('Thêm đơn vị thành công');
      } else {
        console.log(res.data);
        this.$message.error('Đã xảy ra lỗi, vui lòng thử lại');
      }
    },
  },
};
</script>
