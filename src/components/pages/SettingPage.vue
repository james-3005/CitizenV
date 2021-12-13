<template>
  <div class="SettingPage">
    <HeaderMenu header="Cài đặt" type="default" :notShow="true" />
    <div class="SettingPage-component">
      <div class="SettingPage-component-function">
        <div class="SettingPage-component-function-text">
          <p>Logout</p>
          <p>
            Thiết lập thời gian làm việc, sau thời gian này sẽ tự động Logout
          </p>
        </div>
        <a-input class="input" type="number" v-model="expire" />
      </div>
      <a-divider />
      <div class="SettingPage-component-function">
        <div class="SettingPage-component-function-text">
          <p>Ngôn ngữ</p>
          <p>Thiết lập ngôn ngữ hiển thị của trang web</p>
        </div>
        <a-select default-value="VN" class="input">
          <a-select-option value="VN"> Tiếng Việt </a-select-option>
          <a-select-option value="EN"> Tiếng Anh </a-select-option>
        </a-select>
      </div>
      <a-divider />
      <div
        class="
          SettingPage-component-function SettingPage-component-function__big
        "
      >
        <div class="SettingPage-component-function-text">
          <p>Liên hệ</p>
          <p>Phản hồi và báo lỗi trang web</p>
        </div>
        <div class="SettingPage-component-function-area">
          <a-textarea
            class="input-area"
            placeholder="Phản hồi hoặc báo lỗi"
            :auto-size="{ minRows: 5, maxRows: 10 }"
          />
          <a-button class="btn" type="primary">Gửi</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import ButtonBackDrillDown from '../atoms/ButtonBackDrillDown.vue';
export default {
  components: { HeaderMenu, ButtonBackDrillDown },
  data: function () {
    return {
      expire: 10000,
    };
  },
  methods: {},
  mounted() {},
};
</script>
