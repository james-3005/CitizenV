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

const getQuater = (params) =>
  request.get('/quarter', {
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
const getNameFromCode = (code) => {
  if (typeof code !== 'string') return null;
  if (code.length === 2) return getProvince({ code });
  if (code.length === 4) return getDistrict({ code });
  if (code.length === 6) return getWard({ code });
  return null;
};
export {
  getProvince,
  getDistrict,
  getCitizen,
  getWard,
  getQuater,
  getNameFromCode,
};
