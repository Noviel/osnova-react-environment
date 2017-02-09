// Created by snov on 28.06.2016.

const {
  launch,
  stickyListenWorker,
  stickyListenMaster
} = require('osnova-cluster-launcher');


console.log(require('osnova-cluster-launcher'));

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