import req from './axios';
const { requestWithToken, request } = req;
const perPage = 7;

const getAccount = (params) =>
  requestWithToken.get('/user', {
    params: {
      perPage,
      ...params,
    },
  });

export { getAccount };
