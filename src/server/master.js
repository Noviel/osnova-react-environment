// Created by snov on 19.09.2016.

import OSNOVA from 'osnova';

// creating a copy of a default core options, because we don't want to modify the original
const masterCoreOpts = Object.assign({}, require('../../config/core'));

// ['a', 'b', 'c'] => { a: initValue, b: initValue, c: initValue }
const arrayofStringsToObjectKeys = (array, initValue = true) => {
  return array.reduce((prev, cur) => {
    prev[cur] = initValue;
    return prev;
  }, {});
};

// we dont need these core modules on the master process
const modules = ['express', 'socketio', 'session'];
masterCoreOpts.modules = Object.assign({}, masterCoreOpts.modules, arrayofStringsToObjectKeys(modules, false));


module.exports = (listen) => {

  const osnova = OSNOVA({
    master: true,
    modules: [],
    core: masterCoreOpts,
    listen
  });

  osnova.start(() => {
    /* eslint-disable no-console */
    console.log(`Hello from master! [pid=${process.pid}]`);
  });
};