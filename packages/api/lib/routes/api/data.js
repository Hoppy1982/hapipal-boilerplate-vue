'use strict';

const data = {
  a: 1,
  b: 2,
};

module.exports = {
  method: 'get',
  path: '/api/data',
  handler: () => {
    return data;
  },
};
