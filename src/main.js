import Vue from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { MotionPlugin } from '@vueuse/motion';
import VueCompositionAPI from '@vue/composition-api';
import VueRouter from 'vue-router';
// import { routes } from './components/utilities/constRoute';
// import Chartkick from 'vue-chartkick'
// import Chart from 'chart.js'
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

// name is optional
Vue.use(VueLodash, { lodash: lodash });
// Vue.use(Chartkick.use(Chart))
Vue.use(VueRouter);
Vue.use(VueCompositionAPI);
Vue.use(Antd);
Vue.use(MotionPlugin);

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Conference from './components/pages/Conference';
import PersonalPage from './components/pages/PersonalPage';
import AccountManagerPage from './components/pages/AccountManagerPage';
import AnalyticsPage from './components/pages/AnalyticsPage';
import CitizenPage from './components/pages/CitizenPage';
import SettingPage from './components/pages/SettingPage';
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/conference',
    component: Conference,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'accountManager',
        component: AccountManagerPage,
      },
      {
        path: 'citizen',
        component: CitizenPage,
      },
      {
        path: 'personal',
        component: PersonalPage,
      },
      {
        path: 'setting',
        component: SettingPage,
      },
      {
        path: 'Personal',
        component: PersonalPage,
      },
      {
        path: 'analytics',
        component: AnalyticsPage,
      },
    ],
  },
  {
    path: '/login',
    component: LoginPage,
  },
];
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes,
  mode: 'history',
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
