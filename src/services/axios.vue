<script>
import axios from 'axios';
import API from '../../env';
import { getToken } from '../components/utilities/localStorage';
import store from '../store';
import _ from 'lodash';
const requestWithToken = axios.create({
  baseURL: API,
});
requestWithToken.interceptors.request.use((config) => {
  store.commit('turnOnLoading');
  config.headers = {
    ...config.headers,
    Authorization: 'Bearer ' + getToken(),
  };
  return config;
});

requestWithToken.interceptors.response.use(
  (response) => {
    store.commit('turnOffLoading');
    return response.data;
  },
  (err) => {
    store.commit('turnOffLoading');
    // console.log(err.response.status)
    if (err.response)
      return {
        success: false,
        code: _.get(err, 'response.data.code'),
        message: _.get(err, 'response.data.message'),
      };
    else {
      console.error(err);
      store.commit('turnOnErr');
    }
  },
);

const request = axios.create({
  baseURL: API,
});
request.interceptors.request.use((config) => {
  store.commit('turnOnLoading');
  return config;
});
request.interceptors.response.use(
  (response) => {
    store.commit('turnOffLoading');
    return response.data;
  },
  (err) => {
    store.commit('turnOffLoading');
    // store.commit('turnOnErr')
    // console.log(err.response.status)
    if (err.response)
      return {
        success: false,
        code: _.get(err, 'response.data.code'),
        message: _.get(err, 'response.data.message'),
      };
    else {
      console.error(err);
      store.commit('turnOnErr');
    }
  },
);

export default {
  requestWithToken,
  request,
};
</script>
