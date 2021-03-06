import Vue from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { MotionPlugin } from '@vueuse/motion';
import VueCompositionAPI from '@vue/composition-api';
import VueRouter from 'vue-router';
import store from './store';
import i18n from './langs/i18';
import VueApexCharts from 'vue-apexcharts';

Vue.use(VueCompositionAPI);

Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);
Vue.use(VueRouter);

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
import FormAddAccountPage from './components/pages/FormAddAccountPage';
import { checkToken } from './services/auth';
import { getUser } from './components/utilities/localStorage';
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
        query: {
          a: 2,
        },
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
      {
        path: 'addAccount',
        component: FormAddAccountPage,
      },
    ],
  },
  {
    path: '/login',
    component: LoginPage,
  },
];
const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach(async (to, from, next) => {
  const isAuth = await checkToken().then((res) => {
    if (res) return res.success;
    else return false;
  });
  if (isAuth) {
    if (to.path === '/login') {
      next('/conference/home');
    } else {
      if (to.path === '/conference/accountManager') {
        if (getUser().level === 5) next('/conference/home');
      }
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      store.commit('turnOnIsExpiredToken');
      next();
    }
  }
});

const app = new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

export default app;
