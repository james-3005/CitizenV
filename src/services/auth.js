import req from './axios';
const { requestWithToken, request } = req;
export const login = (params) =>
  request.post('/user/login', {
    ...params,
  });
// requestWithToken

export const addAccount = (params) =>
  requestWithToken.post('/user/register', {
    ...params,
  });

export const addCitizen = (params) =>
  requestWithToken.post('/form', {
    ...params,
  });
