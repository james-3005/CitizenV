import { forEach } from 'core-js';
import req from './axios';
import 'core-js';
const { requestWithToken, request } = req;
const perPage = 7;
const getStatus = (resourceCode) =>
  request.get('/survey-process', {
    params: {
      resourceCode: resourceCode,
    },
  });

const getProvince = (params, loading = true) =>
  request.get('/province', {
    params: {
      perPage,
      ...params,
    },
    headers: {
      loading,
    },
  });
// rows = axios.get(''').then(res => resBody).then(res => res.map(addStatus))
const getDistrict = (params, loading = true) =>
  request.get('/district', {
    params: {
      perPage,
      ...params,
    },
    headers: {
      loading,
    },
  });

const getWard = (params, loading = true) =>
  request.get('/ward', {
    params: {
      perPage,
      ...params,
    },
    headers: {
      loading,
    },
  });

const getQuarter = (params, loading = true) =>
  request.get('/quarter', {
    params: {
      perPage,
      ...params,
    },
    headers: {
      loading,
    },
  });
const getCitizen = (params, loading = true) =>
  requestWithToken.get('/form', {
    params: {
      perPage,
      ...params,
    },
    headers: {
      loading,
    },
  });
const getNameFromCode = (code) => {
  if (typeof code !== 'string') return null;
  if (code.length === 2) return getProvince({ code });
  if (code.length === 4) return getDistrict({ code });
  if (code.length === 6) return getWard({ code });
  if (code.length === 8) return getQuarter({ code });
  return null;
};
export {
  getStatus,
  getProvince,
  getDistrict,
  getCitizen,
  getWard,
  getQuarter,
  getNameFromCode,
};
