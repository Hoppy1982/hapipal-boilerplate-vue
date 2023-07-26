'use strict';

module.exports = {
  method: 'get',
  path: '/healthcheck',
  handler: (request, h) => {
    return h.response('Healthcheck ok!');
  },
};
