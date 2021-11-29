import Vue from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { MotionPlugin } from '@vueuse/motion';
import VueCompositionAPI from '@vue/composition-api';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueCompositionAPI);
Vue.use(Antd);
Vue.use(MotionPlugin);

import ListCitizen from './components/pages/ListCitizen';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Conference from './components/pages/Conference';
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
      { path: '/ListCitizen', component: ListCitizen },
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
