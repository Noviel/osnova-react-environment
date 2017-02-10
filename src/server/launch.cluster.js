// Created by snov on 09.02.2017.
//
// Multiprocess cluster launcher config
//
/////////////////////////////////////////////////////////////////

const { launch } = require('osnova-cluster-launcher');

// worker.listen and worker.master will set to default sticky listens
// from osnova-cluster-launcher
launch({
  worker: {
    main: require('./worker')
  },
  master: {
    main: require('./master')
  },
  config: require('../../config/target')
});