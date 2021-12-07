import req from './axios';
const { requestWithToken, request } = req;
export const getProvince = (params) =>
  request.get('/province', {
    params,
  });
