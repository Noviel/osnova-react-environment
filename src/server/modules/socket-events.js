// Created by snov on 10.02.2017.
//
// Socket events
//
//=========================================================================

/* eslint-disable no-unused-vars */

const createEvent = (type, action) => {
  return {
    type,
    action
  }
};

const registerEvents = (registrator, events) => {
  Object.keys(events).forEach((event, i) => {

  });
};

const socketEvents = opts => osnova => {
  const io = osnova.io;
  const _io = io.native();
  if (typeof io == 'undefined') {
    throw new Error('osnova.io is undefined. Turn on socketio in osnova.opts.core.modules!');
  }

  // createEvent('count-increment', (io, socket, data) => {
  //   io.emit('counter-update');
  // });

  io.on('counter-increment', (socket, payload) => {
    _io.emit('counter-updated', 1);
  });

  io.on('counter-decrement', (socket, payload) => {
    _io.emit('counter-updated', -1);
  });

  io.on('client-message', (socket, payload) => {
    console.log(socket.id, payload);
  });

  osnova.next();
};
/* eslint-enable no-unused-vars */

export default socketEvents;