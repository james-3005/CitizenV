const axios = require('axios');
const API = require('../../env');

const getProvince = (params) =>
  axios.get(API.concat('/province'), {
    params,
  });

module.exports = {
  getProvince,
};
