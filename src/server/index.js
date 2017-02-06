// Created by snov on 28.06.2016.

const launch = require('osnova').launch;

launch({
  worker: require('./worker'),
  master: require('./master'),
  config: require('../../config/target')
});