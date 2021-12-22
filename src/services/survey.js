import req from './axios';
const { requestWithToken, request } = req;

const B1Approve = (wardCode, loading = true) =>
  requestWithToken.patch('/survey-process/approve', {
    headers: {
      loading,
    },
    body: {
      code: wardCode,
    },
  });

const getStatus = (resourceCode, loading = true) =>
  request.get('/survey-process', {
    params: {
      resourceCode: resourceCode,
    },
    headers: {
      loading,
    },
  });

export { B1Approve, getStatus };
