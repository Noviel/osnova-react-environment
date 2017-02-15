// Created by snov on 09.02.2017.
//
// Multiprocess cluster launcher config
//
//=========================================================================

const { launch } = require('osnova-cluster-launcher');
const { host, threads } = require('../../config/target');

// 'worker.listen' and 'master.listen' will be set to default sticky listens
// from osnova-cluster-launcher
launch({
  worker: { main: require('./worker') },
  master: { main: require('./master') },
  config: { threads, host }
});