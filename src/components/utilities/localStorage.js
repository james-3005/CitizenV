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

const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const deleteUser = () => {
  localStorage.removeItem('user');
};
module.exports = {
  setToken,
  getToken,
  deleteToken,
  setUser,
  getUser,
  deleteUser,
};
