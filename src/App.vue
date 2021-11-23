<template>
  <div id="app">
    <SideBar />
    <div class="leftSide">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TableCitizen from './components/moreclues/TableCitizen.vue';
import FormCitizen from './components/moreclues/FormCitizen.vue';
import SideBar from './components/moreclues/SideBar.vue';
export default {
  name: 'App',
  components: {
    SideBar,
    TableCitizen,
    FormCitizen,
  },
};
</script>

<style lang="scss">
@import './src/components/app.scss';
</style>
