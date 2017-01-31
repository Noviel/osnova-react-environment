'use strict';

// Created by snov on 13.10.2016.

var launchConfig = require('./launch-config');
var path = require('../root').path;

var osnovaCoreConfig = {
  paths: {
    absoluteRoot: path.absoluteRoot,
    static: path.static
  },
  target: launchConfig,
  session: {
    secret: 'VERYSECRETSTRING'
  },
  use: {
    auth: false
  }
};

module.exports = osnovaCoreConfig;