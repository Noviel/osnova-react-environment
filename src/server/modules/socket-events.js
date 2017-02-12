// Created by snov on 10.02.2017.
//
// ABOUT THIS FILE
//
/////////////////////////////////////////////////////////////////

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const socketEvents = opts => osnova => {
  const io = osnova.io;
  const _io = io.io;
  if (io === undefined) {
    throw new Error('osnova.io is undefined. Turn on socketio in osnova.opts.core.modules!');
  }

  io.on('counter-increment', (socket, payload) => {
    _io.emit('counter-updated', 1);
  });

  io.on('counter-decrement', (socket, payload) => {
    _io.emit('counter-updated', -1);
  });

  osnova.next();
};

export default socketEvents;
module.exports = socketEvents;