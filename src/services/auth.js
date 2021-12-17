import req from './axios';
import { getUser } from '../components/utilities/localStorage';
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

export const changePassword = (params) =>
  requestWithToken.patch(`/user/{${getUser()._id}}/change-password`, {
    ...params,
  });

export const checkToken = () => requestWithToken.get('/monitor/access-token');
