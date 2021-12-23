import req from './axios';
const { requestWithToken, request } = req;

const B1Approve = (wardCode, loading = true) =>
  requestWithToken.patch('/survey-process/approve', {
    body: {
      resourceCode: wardCode,
      status: 'DONE',
    },
  });

const formApprove = (_id, formInfo, status, loading = true) =>
  requestWithToken.put(`/form/${_id}`, {
    ...formInfo,
    status: status,
  });

const getStatus = (resourceCode, loading = true) =>
  requestWithToken.get(`/survey-process/${resourceCode}`, {
    headers: {
      loading,
    },
  });

export { B1Approve, getStatus, formApprove };
