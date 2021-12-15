import req from './axios';
const { requestWithToken, request } = req;
export const login = (params) =>
  request.post('/user/login', {
    ...params,
  });
// requestWithToken
export const register = (params) =>
  requestWithToken.post('/user/register', {
    ...params,
  });
