const _ = require('lodash');
export const level = (params) => {
  if (_.get(params, 'provinceName')) {
    if (_.get(params, 'districtName')) {
      if (_.get(params, 'wardName')) {
        return 3;
      }
      return 2;
    }
    return 1;
  }
  return 0;
};
