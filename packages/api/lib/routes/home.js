'use strict'

module.exports = {
  method: 'get',
  path: '/',
  handler: (request, h) => {
    return h.response('Homepage')
  }
  // handler: {
  //     view: {
  //         template: 'home'
  //     }
  // }
}
