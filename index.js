// Created by snov on 28.06.2016.
const launch = require('osnova').launch;
const config = require('./server/launch-config.js');

launch({
  worker: require('./server/worker.js'),
  master: require('./server/master.js'),
  config
});