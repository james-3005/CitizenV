<template>
  <div class="FormAddAccount">
    <router-view></router-view>
    <h2>Thông tin tài khoản</h2>
    <div class="FormAddAccount-pair">
      <p>Tên tài khoản:</p>
      <a-input
        placeholder="Ex: huytn@gov.com.vn"
        class="FormAddAccount-pair-input"
        v-model="username"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>Mật khẩu:</p>
      <a-input-password
        placeholder=""
        class="FormAddAccount-pair-input"
        v-model="password"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>Nhập lại mật khẩu:</p>
      <a-input-password
        placeholder=""
        class="FormAddAccount-pair-input"
        v-model="passwordRetype"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>Họ và tên:</p>
      <a-input
        placeholder="Ex: Trần"
        class="FormAddAccount-pair-input"
        v-model="name"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>Số điện thoại:</p>
      <a-input
        placeholder="Ex: 182909921"
        class="FormAddAccount-pair-input"
        v-model="phoneNumber"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>Đơn vị:</p>
      <a-select
        default-value="Đơn vị"
        style="width: 120px"
        @change="handleChange"
        class="FormAddAccount-pair-input"
      >
        <a-select-option
          v-for="unit in units"
          :key="unit.code"
          :value="`${unit.name}-${unit.code}`"
        >
          {{ unit.name }}
        </a-select-option>
      </a-select>
    </div>
    <div class="FormAddAccount-pair">
      <p>Quyền hạn:</p>
      <a-checkbox-group
        v-model="checkedList"
        :options="plainOptions"
        @change="onChange"
        class="FormAddAccount-pair-checkbox"
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
import {
  getDistrict,
  getProvince,
  getWard,
  getQuarter,
} from '../../services/getCitizen';
import { getUser } from '../utilities/localStorage';
import { addAccount } from '../../services/auth';
import { message } from '../utilities/messageValidate';
const plainOptions = ['Thêm', 'Đọc', 'Sửa', 'Xóa'];
export default {
  // props: {
  //   handleToggleProgress: Function,
  //   list: Array,
  // },
  data: function () {
    return {
      // checkbox variables
      checkedList: [],
      indeterminate: true,
      checkAll: false,
      plainOptions,

      // form variable
      units: [],
      username: '',
      password: '',
      passwordRetype: '',
      name: '',
      phoneNumber: '',
      resourceCode: '',
      resourceName: '',
      level: '',
      permissions: '',
      // other variables
      moment,
      validate: {
        username: null,
        password: null,
      },
    };
  },
  updated() {},
  mounted() {
    this.getUnit(getUser().level, getUser().resourceName);
  },
  methods: {
    handleChange(unitCombined) {
      const data = unitCombined.split('-');
      this.resourceName = data[0];
      this.resourceCode = data[1];
      console.log(data);
    },
    onChange(checkedList) {
      this.indeterminate =
        !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
    getUnit(level, resourceName) {
      switch (level) {
        case 1:
          getProvince({ perPage: 99999 }).then((res) => {
            this.units = res.data;
          });
          break;
        case 2:
          getDistrict({ perPage: 99999, provinceName: resourceName }).then(
            (res) => {
              this.units = res.data;
            },
          );
          break;
        case 3:
          getWard({ perPage: 99999, districtName: resourceName }).then(
            (res) => {
              this.units = res.data;
            },
          );
          break;
        case 4:
          getQuarter({ perPage: 99999, wardName: resourceName }).then((res) => {
            this.units = res.data;
          });
          break;
        default:
          break;
      }
    },
    handleRegister() {
      this.permissions = this.getPermissions();
      if (this.password !== this.passwordRetype) {
        this.$message.error(message.RE_PASS);
      } else {
        addAccount({
          username: this.username,
          password: this.password,
          name: this.name,
          phoneNumber: this.phoneNumber,
          resourceCode: this.resourceCode,
          resourceName: this.resourceName,
          level: getUser().level + 1,
          permissions: this.permissions,
        }).then((res) => {
          if (res.success) this.$message.info(message.REGISTER_SUCCESS);
          else {
            this.$message.error(res.message);
          }
        });
      }
    },

    getPermissions() {
      var checked = [0, 0, 0, 0];
      this.checkedList.forEach((checkbox) => {
        for (let i = 0; i < plainOptions.length; i++) {
          if (checkbox === plainOptions[i]) {
            checked[i] = 1;
          }
        }
      });
      return checked.join('').toString();
    },
  },
};
</script>
