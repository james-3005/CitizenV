import Vue from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { MotionPlugin } from '@vueuse/motion';
import VueCompositionAPI from '@vue/composition-api';
import VueRouter from 'vue-router';
import { getToken } from './components/utilities/localStorage';
import VueLodash from 'vue-lodash';
import store from './store';
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
import FormAddAccountPage from './components/pages/FormAddAccountPage';
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
  const hasToken = getToken();

  const isAuth = hasToken;
  if (isAuth) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next('/conference/home');
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next(`/login`);
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
