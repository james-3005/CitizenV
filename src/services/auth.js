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

export const addUnit = (params) =>
  requestWithToken.post('/province', {
    ...params,
  });

export const deleteUnit = (_id) => requestWithToken.delete(`/province/${_id}`);
export const deleteProvince = (_id) =>
  requestWithToken.delete(`/province/${_id}`);
export const deleteDistrict = (_id) =>
  requestWithToken.delete(`/district/${_id}`);
export const deleteWard = (_id) => requestWithToken.delete(`/ward/${_id}`);
export const deleteQuarter = (_id) =>
  requestWithToken.delete(`/quarter/${_id}`);

export const addCitizen = (params) =>
  requestWithToken.post('/form', {
    ...params,
  });

export const updateCitizen = (_id, params) =>
  requestWithToken.put(`/form/${_id}`, {
    ...params,
  });

export const deleteCitizen = (_id) => requestWithToken.delete(`/form/${_id}`);

export const changePassword = (oldPassword, password) =>
  requestWithToken.patch(`/user/${getUser()._id}/change-password`, {
    password,
    oldPassword,
  });
export const checkToken = () => requestWithToken.get('/monitor/access-token');

export const setDate = (params) =>
  requestWithToken.post('/survey-process', {
    ...params,
  });
