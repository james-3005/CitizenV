import req from './axios';
const { requestWithToken, request } = req;
const perPage = 7;

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
const getQuarterCode = (params) =>
  request.get('/quarter', {
    params: {
      perPage: 9999,
      ...params,
      name: params.quarterName,
    },
  });

const getGroupCitizen = (params) => {
  requestWithToken.get('/form', {
    params: {
      perPage,
      ...params,
    },
  });
};
const getNameFromCode = (code) => {
  if (typeof code !== 'string') return null;
  if (code.length === 2) return getProvince({ code });
  if (code.length === 4) return getDistrict({ code });
  if (code.length === 6) return getWard({ code });
  if (code.length === 8) return getQuarter({ code });
  return null;
};

const getAgeStat = (params, loading = true) =>
  requestWithToken.get('/analytic/age', {
    params: {
      ...params,
    },
  });
export {
  getProvince,
  getDistrict,
  getCitizen,
  getWard,
  getQuarter,
  getNameFromCode,
  getQuarterCode,
  getAgeStat,
};
