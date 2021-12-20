<template>
  <div id="app">
    <Loading v-if="$store.state.isLoading" />
    <Error v-if="$store.state.isErr" />
    <Expired v-if="$store.state.isExpiredToken" />
    <router-view></router-view>
  </div>
</template>

<script>
import Error from './components/moreclues/Error.vue';
import Expired from './components/moreclues/Expired.vue';
import Loading from './components/moreclues/Loading.vue';
export default {
  name: 'App',
  components: {
    Loading,
    Error,
    Expired,
  },
};
</script>

<style lang="scss">
@import './src/components/app.scss';
</style>
