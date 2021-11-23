import Vue from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { MotionPlugin } from '@vueuse/motion';
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);
Vue.use(Antd);
Vue.use(MotionPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
