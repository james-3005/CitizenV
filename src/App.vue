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
import { defineComponent, computed, ref } from '@vue/composition-api';
export default {
  setup() {
    const store = ref();
    import('@/store').then((mod) => (store.value = mod.default));

    return {
      counter: computed(() => store.value?.state.counter),
      increment: () => store.value && store.value.state.counter++,
    };
  },
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
