import req from './axios';
const { requestWithToken, request } = req;
const perPage = 5;

const getUser = (params) =>
  requestWithToken.get('/user', {
    params: {
      ...params,
      perPage: 5,
    },
  });

export { getUser };
