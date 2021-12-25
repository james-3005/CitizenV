<template>
  <div class="FormAddAccount">
    <router-view></router-view>
    <h2>Thông tin tài khoản</h2>
    <div class="FormAddAccount-pair" v-show="true">
      <a-input-password
        placeholder=""
        class="FormAddAccount-pair-input-tohide"
        v-model="password"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>Đơn vị:</p>
      <a-auto-complete
        :autocomplete="false"
        :data-source="unitsName"
        style="width: 200px"
        placeholder="Đơn vị"
        @select="onSelect"
        @change="onChange2"
        class="FormAddAccount-pair-input"
        v-model="resourceName"
      />
    </div>
    <div class="FormAddAccount-pair">
      <p>Tên tài khoản:</p>
      <a-input
        placeholder="Ex: 01"
        type="text"
        class="FormAddAccount-pair-input"
        v-model="username"
        :disabled="userLevel < 4"
      />
    </div>

    <div class="FormAddAccount-pair">
      <p>Mật khẩu:</p>
      <a-input-password
        placeholder=""
        class="FormAddAccount-pair-input"
        v-model="password"
        autcomplete="off"
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
      <p>Tên hiển thị:</p>
      <a-input
        placeholder="Ex: Trần"
        type="text"
        class="FormAddAccount-pair-input"
        v-model="name"
        :disabled="userLevel < 4"
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
      <p>Quyền hạn:</p>
      <a-switch
        checked-children="Đọc/sửa"
        un-checked-children="Chỉ đọc"
        v-model="permissions"
        @change="onChangeChecked"
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
  props: ['addAccount'],
  data: function () {
    return {
      // checkbox variables
      checkedList: [],
      indeterminate: true,
      checkAll: false,
      plainOptions,

      // form variable
      units: [],
      unitsName: [],
      username: '',
      password: '',
      passwordRetype: '',
      name: '',
      phoneNumber: '',
      resourceName: '',
      level: '',
      permissions: false,
      // other variables
      moment,
      validate: {
        username: null,
        password: null,
      },
      userLevel: getUser().level,
    };
  },
  mounted() {
    this.getUnit(getUser().level, getUser().resourceCode);
  },
  methods: {
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
    getUnit(level, resourceCode) {
      switch (level) {
        case 1:
          getProvince({ perPage: 99999 }).then((res) => {
            this.units = res.data;
            this.unitsName = this.units.map((item) => item.name);
          });
          break;
        case 2:
          getDistrict({ perPage: 99999, provinceCode: resourceCode }).then(
            (res) => {
              this.units = res.data;
              this.unitsName = this.units.map((item) => item.name);
            },
          );
          break;
        case 3:
          getWard({ perPage: 99999, districtCode: resourceCode }).then(
            (res) => {
              this.units = res.data;
              this.unitsName = this.units.map((item) => item.name);
            },
          );
          break;
        case 4:
          getQuarter({ perPage: 99999, wardCode: resourceCode }).then((res) => {
            this.units = res.data;
            this.unitsName = this.units.map((item) => item.name);
          });
          break;
        default:
          break;
      }
    },
    handleRegister() {
      if (this.password !== this.passwordRetype) {
        this.$message.error(message.RE_PASS);
      } else {
        addAccount({
          username: this.username,
          password: this.password,
          name: this.name,
          phoneNumber: this.phoneNumber,
          resourceCode: this.units.find(
            (item) => item.name == this.resourceName,
          ).code,
          resourceName: this.resourceName,
          level: getUser().level + 1,
          permissions: this.permissions ? '1111' : '0100',
        }).then((res) => {
          if (res.success) {
            this.$message.success(message.REGISTER_SUCCESS);
            this.addAccount(res.data);
          } else {
            if (res.message === message.VALIDATOR_ERR)
              this.$message.error(message.VALIDATOR_ERR2);
            else this.$message.error(res.message);
          }
        });
      }
    },
    onSelect(value) {
      this.resourceCode = this.units.find(
        (item) => item.name == this.resourceName,
      );
      this.name = this.resourceCode.name;
      this.username = this.resourceCode.code;
    },
    onChange2(searchText) {
      this.unitsName = this.units
        .map((item) => item.name)
        .filter((name) => name.includes(searchText));
    },
    onChangeChecked(value) {
      this.permissions = value;
    },
  },
  updated() {
    console.log(this.permissions);
  },
};
</script>
