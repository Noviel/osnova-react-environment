// Created by snov on 15.02.2017.
//
// Webpack configurator
//
//=========================================================================

const config = require('./config');

function merge(target, array) {
  let result;
  if (array && typeof array.concat == 'function') {
    if (target) {
      result = [].concat.apply([], target, array);
    } else {
      result = [].concat.apply([], array);
    }
  }
  return result;
}

function configureWebpack(opts, webpackOpts) {
  opts = opts || {};

  const webpackObject = Object.assign({}, webpackOpts);
  webpackObject.context = config.paths.absolute.root;

  if (opts.production && opts.production.use) {
    webpackObject.plugins = merge(webpackObject.plugins, opts.production.plugins);
  } else if (opts.development) {
    webpackObject.plugins = merge(webpackObject.plugins, opts.development.plugins);
  }

  return webpackObject;
}

module.exports = {
  configure: configureWebpack
};