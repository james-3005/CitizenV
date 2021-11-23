<template>
  <div id="app">
    <img src="./assets/svg/demoBar.svg" alt="" />
    <div class="leftSide">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TableCitizen from './components/moreclues/TableCitizen.vue';
import FormCitizen from './components/moreclues/FormCitizen.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    TableCitizen,
    FormCitizen,
  },
};
</script>

<style lang="scss">
@import './src/components/app.scss';
</style>
