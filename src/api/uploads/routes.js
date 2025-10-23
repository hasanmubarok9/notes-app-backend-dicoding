const routes = (handler) => [
  {
    method: 'POST',
    path: '/upload/images',
    handler: handler.postUploadImageHandler,
    options: {
      paylod: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream'
      },
    },
  },
];
