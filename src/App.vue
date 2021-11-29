<template>
  <div id="app">
    <!-- <Loading /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from './components/moreclues/Loading.vue';
export default {
  name: 'App',
  components: {
    Loading,
  },
};
</script>

<style lang="scss">
@import './src/components/app.scss';
</style>
