// Created by snov on 10.02.2017.
//
// ABOUT THIS FILE
//
/////////////////////////////////////////////////////////////////

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const socketEvents = opts => osnova => {
  const io = osnova.io;
  if (io === undefined) {
    throw new Error('osnova.io is undefined. Turn on socketio in osnova.opts.core.modules!');
  }

  io.on('client-message', (socket, payload) => {
    console.log('Received from the client: ' + payload);
  });

  osnova.next();
};

export default socketEvents;
module.exports = socketEvents;