import req from './axios';
const { requestWithToken, request } = req;
const perPage = 7;
const getProvince = (params) =>
  request.get('/province', {
    params: {
      perPage,
      ...params,
    },
  });

const getDistrict = (params) =>
  request.get('/district', {
    params: {
      perPage,
      ...params,
    },
  });

const getWard = (params) =>
  request.get('/ward', {
    params: {
      perPage,
      ...params,
    },
  });

const getQuarter = (params) =>
  request.get('/quarter', {
    params: {
      perPage,
      ...params,
    },
  });
const getCitizen = (params) =>
  request.get('/citizen', {
    params: {
      perPage,
      ...params,
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
  getProvince,
  getDistrict,
  getCitizen,
  getWard,
  getQuarter,
  getNameFromCode,
};
