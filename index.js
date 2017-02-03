// Created by snov on 28.06.2016.

const launch = require('osnova').launch;
const config = require('./config/target');

launch({
  worker: require('./server/worker'),
  master: require('./server/master'),
  config
});