<template>
  <div id="app">
    <!-- <fusioncharts
        :type="type"
        width="700"
        height="400"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
        ref="fc"
        ></fusioncharts> -->
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
