import req from './axios';
const { requestWithToken, request } = req;
const getProvince = (params) =>
  request.get('/province', {
    params,
  });

const getDistrict = (params) =>
  request.get('/district', {
    params,
  });

const getCitizen = (params) =>
  request.get('/citizen', {
    params,
  });

export { getProvince, getDistrict, getCitizen };
