// Created by snov on 13.10.2016.

const launchConfig = require('./launch-config');
const path = require('../root').path;

const osnovaCoreConfig = {
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