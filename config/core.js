// Created by snov on 03.02.2017.
"use strict";

const config = {
  paths: {
    absolute: {
      root: require('../root')
    },
    assets: './static/dist/'
  },
  target: require('./target'),
  session: {
    secret: 'VERYSECRETSTRING'
  },
  use: {
    auth: false
  }
};

module.exports = config;