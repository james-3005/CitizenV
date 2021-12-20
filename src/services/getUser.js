import req from './axios';
const { requestWithToken, request } = req;
const perPage = 7;

export const getAccount = (params) =>
  requestWithToken.get('/user', {
    params: {
      perPage,
      ...params,
    },
  });
export const updatePermission = (userId, bool) =>
  requestWithToken.patch(`/user/${userId}/permissions`, {
    permissions: bool ? '1111' : '0100',
  });

export const deleteAccountById = (id) => requestWithToken.delete(`user/${id}`);

export const changePasswordHigh = (id, password) =>
  requestWithToken.patch(`/user/${id}/change-password`, {
    password,
  });
