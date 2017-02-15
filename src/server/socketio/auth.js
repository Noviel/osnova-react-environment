// Created by snov on 13.02.2017.
//
// ABOUT THIS FILE
//
//=========================================================================

const passportSocketIo = require('passport.socketio');

export default function auth({ cookieParser, session } = {}) {
  const { key, secret, store } = session;

  function onAuthorizeSuccess(data, accept) {
    console.log('socket autorized.');
    accept();
  }

  function onAuthorizeFail(data, message, error, accept) {
    if (error)
      throw new Error(message);
    console.log('failed connection to socket.io:', message);

    if (error)
      accept(new Error(message));
  }

  return passportSocketIo.authorize({
    cookieParser, key, secret, store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail,
  });
}