<template>
  <div id="app">
    <img src="./assets/svg/demoBar.svg" alt="" />
    <div>
      <TableCitizen />
    </div>
  </div>
</template>

<script>
import TableCitizen from './components/moreclues/TableCitizen.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    TableCitizen,
  },
};
</script>

<style lang="scss">
@import './src/components/app.scss';
</style>
