'use strict';

module.exports = {
  method: 'get',
  path: '/',
  handler: (request, h) => {
    return h.file('index.html');
  },
};
