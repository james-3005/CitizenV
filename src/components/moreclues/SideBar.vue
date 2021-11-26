<template>
  <div class="SideBar">
    <img src="../../assets/svg/appLogo.svg" alt="" class="SideBar-appLogo" />
    <img src="../../assets/svg/textLogo.svg" alt="" class="SideBar-textLogo" />

    <div class="SideBar-nav">
      <ul class="SideBar-features">
        <li
          v-for="option in options"
          v-bind:key="option.id"
          class="SideBar-feature"
        >
          <img
            v-bind:src="require(`../../assets/svg/${option.src}.svg`)"
            alt="fuck"
            class="SideBar-featureIcon"
          />
          <a class="SideBar-featureText">{{ option.text }}</a>
        </li>
      </ul>

      <div class="SideBar-footer">
        <div class="SideBar-avatar">
          <img src="../../assets/avatar.png" alt="user_avatar" />
        </div>
        <img
          src="../../assets/svg/logOutLogo.svg"
          alt=""
          class="SideBar-logOutIcon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SizeBar',
  props: {},
  data: () => ({
    options: [
      {
        id: 1,
        text: 'Home',
        src: 'homeLogo',
      },
      {
        id: 2,
        text: 'Cities',
        src: 'citiesLogo',
      },
      {
        id: 3,
        text: 'Analytics',
        src: 'analyticsLogo',
      },
      {
        id: 4,
        text: 'A2 Accounts',
        src: 'accountsLogo',
      },
      {
        id: 5,
        text: 'My Account',
        src: 'accountLogo',
      },
      {
        id: 6,
        text: 'Settings',
        src: 'settingLogo',
      },
    ],
  }),
  methods: {},
  components: {},
};
</script>

<style scoped></style>
