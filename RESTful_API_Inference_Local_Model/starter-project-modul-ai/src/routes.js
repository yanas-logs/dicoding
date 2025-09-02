const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => h.response({ message: 'Server is running' }),
  },
  {
    method: 'POST',
    path: '/predict',
    handler: handler.getPredictResult,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
      }
    }
  },
];

module.exports = routes;
