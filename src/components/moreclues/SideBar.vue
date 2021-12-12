<template>
  <div :class="['SideBar', isExpanded ? 'isExpanded' : '']">
    <img src="../../assets/svg/appLogo.svg" alt="" class="SideBar-appLogo" />
    <img src="../../assets/svg/textLogo.svg" alt="" class="SideBar-textLogo" />
    <div class="SideBar-btn">
      <div class="SideBar-btn-logoContent" @click="expand_sidebar()">
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
          <router-link :to="option.url" class="SideBar-featureContent">
            <img
              v-bind:src="require(`../../assets/svg/${option.src}.svg`)"
              alt="fuck"
              class="SideBar-featureIcon"
            />
            <p class="SideBar-featureText">{{ option.text }}</p>
          </router-link>
        </li>
      </ul>

      <div class="SideBar-footer">
        <div class="SideBar-avatar">
          <img src="../../assets/avatar.png" alt="user_avatar" />
          <p>A1</p>
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
import { deleteToken } from '../utilities/localStorage';
export default {
  name: 'SizeBar',
  props: {},
  data: () => ({
    isExpanded: false,
    options,
    level: null,
  }),
  methods: {
    expand_sidebar: function () {
      this.isExpanded = !this.isExpanded;
    },
    handleLogout() {
      deleteToken();
      this.$router.push('/login');
    },
  },
  components: {},
  mounted() {},
};
</script>

<style scoped></style>
