// Created by snov on 19.09.2016.

import OSNOVA from 'osnova';
import { stringsToObjectKeys } from '../utils/core';

// creating a copy of a default core options, because we don't want to modify the original
const masterCoreOpts = {...require('../../config/core')};

// we dont need these core modules on the master process
const modules = stringsToObjectKeys(['webserver', 'session'], false);
masterCoreOpts.modules = {...masterCoreOpts.modules, ...modules};

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