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
      @click="handleRegister"
      >Tạo</a-button
    >
  </div>
</template>

<script>
import moment from 'moment';
import { getUser } from '../utilities/localStorage';
import { addUnit } from '../../services/auth';
const plainOptions = ['Thêm', 'Đọc', 'Sửa', 'Xóa'];
export default {
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
      console.log(this.prefixCode + this.unitCode, this.name);
      const code = this.prefixCode + this.unitCode;
      const name = this.name;
      addUnit({
        code: code,
        name: name,
      }).then((res) => {
        if (res.success) {
          console.log(res.data);
          this.$message.success('Thêm đơn vị thành công');
        } else {
          console.log(res.data);
          this.$message.error('Đã xảy ra lỗi, vui lòng thử lại');
        }
      });
    },
  },
  updated() {
    console.log(this.permissions);
  },
};
</script>
