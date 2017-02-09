// Created by snov on 09.02.2017.
//
// Multiprocess cluster launcher config
//
/////////////////////////////////////////////////////////////////

const {
  launch,
  stickyListenWorker,
  stickyListenMaster
} = require('osnova-cluster-launcher');

launch({
  worker: {
    main: require('./worker'),
    listen: stickyListenWorker
  },
  master: {
    main: require('./master'),
    listen: stickyListenMaster
  },
  config: require('../../config/target')
});