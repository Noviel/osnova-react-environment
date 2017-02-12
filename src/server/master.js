// Created by snov on 19.09.2016.

import OSNOVA from 'osnova';
import { stringsToObjectKeys } from '../utils/core';

// creating a copy of a default core options, because we don't want to modify the original
const masterCoreOpts = Object.assign({}, require('../../config/core'));

// we dont need these core modules on the master process
const modules = stringsToObjectKeys(['express', 'socketio', 'session'], false);
masterCoreOpts.modules = Object.assign({}, masterCoreOpts.modules, modules);

module.exports = (listen) => {

  const osnova = OSNOVA({
    master: true,
    modules: [],
    core: masterCoreOpts,
    listen
  });

  osnova.start(() => {
    console.log(`Hello from master! [pid=${process.pid}]`);
  });
};