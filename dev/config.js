// Created by snov on 28.06.2016.

const path    = require('path');

const config = {
  path: require('../root').path,

  /*webpack: {
    web: {
      public: paths.public.web,
      entry: {
        'js/index': path.join(appRoot, './src/client/index.js'),
        //'js/index.unauth': path.join(appRoot, './src/client/index.unauthorized.js'),
        //'css/index': path.join(appRoot, './src/styles/index.css'),
      },
      production: false
    },

    mobile: {
      public: paths.public.mobile,
      entry: {
        'js/index': path.join(appRoot, './src/client/index.android.js'),
        //'css/index': path.join(appRoot, './src/styles/index.css')
      },
      production: false
    }
  }*/
};

module.exports = config;