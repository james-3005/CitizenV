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
          <div class="SideBar-featureContent">
            <img
              v-bind:src="require(`../../assets/svg/${option.src}.svg`)"
              alt="fuck"
              class="SideBar-featureIcon"
            />
            <a :href="option.url" class="SideBar-featureText">{{
              option.text
            }}</a>
          </div>
        </li>
      </ul>

      <div class="SideBar-footer">
        <div class="SideBar-avatar">
          <img src="../../assets/avatar.png" alt="user_avatar" />
          <p>Nguyen Thanh Do</p>
        </div>
        <!-- <div class="SideBar-footer-logout"> -->

        <img
          src="../../assets/svg/logOutLogo.svg"
          alt=""
          class="SideBar-logOutIcon"
        />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SizeBar',
  props: {},
  data: () => ({
    isExpanded: false,
    options: [
      {
        id: 1,
        text: 'Trang chu',
        src: 'homeLogo',
        url: './home',
      },
      {
        id: 2,
        text: 'Tinh/TP',
        src: 'citiesLogo',
        url: './home',
      },
      {
        id: 3,
        text: 'Thong ke',
        src: 'analyticsLogo',
        url: './home',
      },
      {
        id: 4,
        text: 'Cap A2',
        src: 'accountsLogo',
        url: './home',
      },
      {
        id: 5,
        text: 'Ca nhan',
        src: 'accountLogo',
        url: './PersonalPage',
      },
      {
        id: 6,
        text: 'Cai dat',
        src: 'settingLogo',
        url: './home',
      },
    ],
  }),
  methods: {
    expand_sidebar: function () {
      console.log('hehe');
      this.isExpanded = !this.isExpanded;
    },
  },
  components: {},
};
</script>

<style scoped></style>
