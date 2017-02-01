'use strict';

// Created by snov on 13.10.2016.

var osnovaCoreConfig = {
  paths: {
    absolute: {
      root: require('../root')
    },
    assets: './static/dist/'
  },
  target: require('./launch-config'),
  session: {
    secret: 'VERYSECRETSTRING'
  },
  use: {
    auth: false
  }
};

module.exports = osnovaCoreConfig;