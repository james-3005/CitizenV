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
module.exports = { routes };
