<template>
  <div :class="['SideBar', isExpanded ? 'isExpanded' : '']">
    <img src="../../assets/danso.png" alt="" class="SideBar-appLogo" />
    <img src="../../assets/svg/textLogo.svg" alt="" class="SideBar-textLogo" />
    <div class="SideBar-btn">
      <div class="SideBar-btn-logoContent" @click="expand_sidebar">
        <img src="../../assets/svg/expandLogo.svg" alt="" />
      </div>
    </div>

    <div class="SideBar-nav">
      <ul class="SideBar-features">
        <li
          v-for="option in options"
          v-bind:key="option.id"
          class="SideBar-feature"
        >
          <div
            @click="() => handleNav(option.url)"
            class="SideBar-featureContent"
          >
            <img
              v-bind:src="require(`../../assets/svg/${option.src}.svg`)"
              alt="fuck"
              class="SideBar-featureIcon"
            />
            <p class="SideBar-featureText">{{ option.text }}</p>
          </div>
        </li>
      </ul>

      <div class="SideBar-footer">
        <div class="SideBar-avatar">
          <a-avatar
            :size="55"
            class="avatar"
            type="user"
            style="color: #30444a; backgroundcolor: #cfdade"
          >
            {{ user.username }}
          </a-avatar>
          <p>{{ levelName }}</p>
        </div>
        <img
          src="../../assets/svg/logOutLogo.svg"
          alt=""
          class="SideBar-logOutIcon"
          @click="handleLogout"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { options } from '../utilities/constSideBar';
import { deleteToken, deleteUser, getUser } from '../utilities/localStorage';
export default {
  name: 'SizeBar',
  props: {},
  data: () => ({
    isExpanded: false,
    options,
    level: '',
    levelName: '',
    user: getUser(),
  }),
  created() {
    if (getUser().level == 5)
      this.options = options.filter((item) => item.id !== 4);
  },
  methods: {
    handleLogout() {
      deleteToken();
      deleteUser();
      this.$router.push('/login');
    },
    expand_sidebar() {
      this.isExpanded = !this.isExpanded;
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
    handleNav(url) {
      if (url === this.$route.path) return;
      else this.$router.push(url);
    },
  },
  components: {},
  beforeMount() {
    if (getUser().level == 5)
      this.options = this.options.filter((item) => item.id != 4);
  },
  mounted() {
    this.level = this.user.level;
    this.levelName = this.formatLevelName(this.level);
  },
};
</script>

<style scoped></style>
