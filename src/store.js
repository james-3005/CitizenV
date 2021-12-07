import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    isErr: false,
  },
  mutations: {
    turnOnLoading(state) {
      state.isLoading = true;
    },
    turnOffLoading(state) {
      state.isLoading = false;
    },
    turnOnErr(state) {
      state.isErr = true;
    },
    turnOffErr(state) {
      state.isErr = false;
    },
  },
});
