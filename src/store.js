import Vue from 'vue';
import Vuex from 'vuex';
import app from './main';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    isErr: false,
    lang: 'vn',
  },
  mutations: {
    turnOnLoading(state) {
      state.isLoading = true;
    },
    turnOffLoading(state) {
      state.isLoading = false;
    },
    turnOnErr(state, payload) {
      state.isErr = payload;
    },
    turnOffErr(state) {
      state.isErr = false;
    },
    setLangVN(state) {
      app.$i18n.locale = 'vn';
    },
    setLangEN(state) {
      app.$i18n.locale = 'en';
    },
  },
});
