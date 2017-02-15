// Created by snov on 22.06.2016.

import OSNOVA from 'osnova';
import socketEvents from './modules/socket-events';
import sendHtml from './modules/send-html';
import expressMiddlewares from './modules/express-middlewares';
import socketIOModule from 'osnova-module-socket.io';

//import socketAuth from './socketio/auth';

module.exports = (listen) => {

  const osnova = OSNOVA({
    modules: [
      expressMiddlewares(),
      sendHtml(),
      socketIOModule(),
      socketEvents()
    ],
    core: require('../../config/core'),
    listen,
    DEBUG: {
      modules: false
    }
  });

  osnova.start(() => {
    console.log(`Hello from worker! [pid=${process.pid}]`);
  });
};