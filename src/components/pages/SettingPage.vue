<template>
  <div class="SettingPage">
    <HeaderMenu
      :header="$t('setting.pageName')"
      type="default"
      :notShow="true"
    />
    <div class="SettingPage-component">
      <div class="SettingPage-component-function">
        <div class="SettingPage-component-function-text">
          <p>{{ $t('setting.logout') }}</p>
          <p>
            {{ $t('setting.logoutInfo') }}
          </p>
        </div>
        <a-input class="input" type="number" v-model="expire" />
      </div>
      <a-divider />
      <div class="SettingPage-component-function">
        <div class="SettingPage-component-function-text">
          <p>{{ $t('setting.lang') }}</p>
          <p>{{ $t('setting.langInfo') }}</p>
        </div>
        <a-select default-value="VN" class="input" @change="handleChange">
          <a-select-option value="VN"> {{ $t('setting.vn') }} </a-select-option>
          <a-select-option value="EN"> {{ $t('setting.en') }} </a-select-option>
        </a-select>
      </div>
      <a-divider />
      <div
        class="
          SettingPage-component-function SettingPage-component-function__big
        "
      >
        <div class="SettingPage-component-function-text">
          <p>{{ $t('setting.contact') }}</p>
          <p>{{ $t('setting.contactInfo') }}</p>
        </div>
        <div class="SettingPage-component-function-area">
          <a-textarea
            class="input-area"
            :placeholder="$t('setting.contactInfo2')"
            :auto-size="{ minRows: 5, maxRows: 10 }"
          />
          <a-button class="btn" type="primary">{{
            $t('setting.send')
          }}</a-button>
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
  methods: {
    handleChange(value) {
      if (value === 'VN') this.$store.commit('setLangVN');
      else this.$store.commit('setLangEN');
    },
  },
  mounted() {},
};
</script>
