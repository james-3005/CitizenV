import req from './axios';
const { requestWithToken, request } = req;
const perPage = 7;
const getProvince = (params) =>
  request.get('/province', {
    params: {
      ...params,
      perPage,
    },
  });

const getDistrict = (params) =>
  request.get('/district', {
    params: {
      ...params,
      perPage,
    },
  });

const getWard = (params) =>
  request.get('/ward', {
    params: {
      ...params,
      perPage,
    },
  });

const getCitizen = (params) =>
  request.get('/citizen', {
    params: {
      ...params,
      perPage,
    },
  });

export { getProvince, getDistrict, getCitizen, getWard };
