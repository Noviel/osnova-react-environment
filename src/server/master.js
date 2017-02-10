// Created by snov on 19.09.2016.

import OSNOVA from 'osnova';

// creating copy of default core options, because we don't want to modify the original
const masterCoreOpts = Object.assign({}, require('../../config/core'));

// ['a', 'b', 'c'] => { a: initValue, b: initValue, c: initValue }
const arrayofStringsToObjectKeys = (array, initValue = true) => {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = initValue;
  }
  return obj;
};

// we dont need these core modules on master process
const modules = ['express', 'socketio', 'session'];
masterCoreOpts.modules = Object.assign({}, masterCoreOpts.modules, arrayofStringsToObjectKeys(modules, false));

module.exports = (listen) => {

  const osnova = OSNOVA({
    master: true,
    modules: [],
    core: masterCoreOpts,
    listen
  });

  osnova.start(() => { console.log('I WAS CALLED FROM WORKER. GZ'); });
};