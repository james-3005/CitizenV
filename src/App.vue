<template>
  <div id="app">
    <Loading v-if="$store.state.isLoading" />
    <Error v-if="$store.state.isErr" />
    <router-view></router-view>
  </div>
</template>

<script>
import Error from './components/moreclues/Error.vue';
import Loading from './components/moreclues/Loading.vue';
export default {
  name: 'App',
  components: {
    Loading,
    Error,
  },
};
</script>

<style lang="scss">
@import './src/components/app.scss';
</style>
