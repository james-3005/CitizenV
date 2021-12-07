// Auth token
const setToken = (token) => {
  localStorage.setItem('token', token);
};
const getToken = () => {
  return localStorage.getItem('token');
};
const deleteToken = () => {
  localStorage.removeItem('token');
};

module.exports = {
  setToken,
  getToken,
  deleteToken,
};
