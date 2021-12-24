<template>
  <div class="HomePage">
    <HeaderMenu header="Màn hình chính" type="default" :notShow="true" />
    <div class="HomePage-wrapper">
      <div class="HomePage-wrapper-leftSide">
        <div class="HomePage-wrapper-leftSide__center">
          <p class="header">CitizenV</p>
          <p class="subheader">
            Hệ thống điều tra dân số dành cho người Việt Nam
          </p>

          <a-avatar
            :size="150"
            class="avatar"
            type="user"
            style="color: #30444a; backgroundcolor: #cfdade"
          >
            {{ user.username }}
          </a-avatar>
          <div>
            <h2>{{ organizationName }}</h2>
            <h3>{{ user.name }}</h3>
            <!-- <h3>{{ levelName }}</h3> -->
          </div>
          <router-link to="/conference/citizen">
            <a-button type="primary"
              >Bắt đầu làm việc ngay<a-icon type="right"
            /></a-button>
          </router-link>
        </div>
      </div>
      <div class="HomePage-wrapper-rightSide">
        <img src="../../assets/svg/thumb1.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import { getUser } from '../utilities/localStorage';
export default {
  components: { HeaderMenu },
  data: function () {
    return {
      imgs: ['appLogo', 'textLogo'],
      user: getUser(),
      levelName: '',
      organizationName: '',
    };
  },
  methods: {
    returnUrl: function (index) {
      return this.imgs[index];
    },
    formatLevelName(level) {
      switch (level) {
        case 1:
          return 'A1';
        case 2:
          return 'A2';
        case 3:
          return 'A3';
        case 4:
          return 'B1';
        case 5:
          return 'B2';
        default:
          return '';
      }
    },
    formatOrganizationName(level) {
      switch (level) {
        case 1:
          return 'Tổng cục Dân số - Bộ Y tế';
        case 2:
          return 'Chi cục dân số  - Sở Y tế  ' + this.user.resourceName;
        case 3:
          return 'Phòng Y tế  ' + this.user.resourceName;
        case 4:
          return 'Trạm Y tế ' + this.user.resourceName;
        case 5:
          return this.user.resourceName;
        default:
          return '';
      }
    },
  },
  mounted() {
    this.levelName = this.formatLevelName(this.user.level);
    this.organizationName = this.formatOrganizationName(this.user.level);
  },
};
</script>
