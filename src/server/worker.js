// Created by snov on 22.06.2016.

import OSNOVA from 'osnova';
import socketEvents from './modules/socket-events';

module.exports = (listen) => {

  const osnova = OSNOVA({
    modules: [require('./modules/send-html')(), socketEvents()],
    core: require('../../config/core'),
    listen
  });

  osnova.start(() => {
    console.log(`Hello from worker! [pid=${process.pid}]`);
  });
};