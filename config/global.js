// Created by snov on 15.02.2017.
//
// Defining global constants
//
//=========================================================================

module.exports = function defineGlobals(isOnClient = false) {
  global.__CLIENT__ = isOnClient;
  global.__SERVER__ = !isOnClient;
  global.__DEV__ = process.env.NODE_ENV !== 'production';
};