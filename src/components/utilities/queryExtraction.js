const _ = require('lodash');
export const level = (params) => {
  if (_.get(params, 'provinceName')) {
    if (_.get(params, 'districtName')) {
      if (_.get(params, 'wardName')) {
        if (_.get(params, 'quarterName')) {
          return 4;
        }
        return 3;
      }
      return 2;
    }
    return 1;
  }
  return 0;
};

export const getName = (name) => {
  switch (name) {
    case 0:
      return 'provinceCode';
    case 1:
      return 'districtCode';
    case 2:
      return 'wardCode';
    default:
      return 'quarterCode';
  }
};
