// Created by snov on 15.02.2017.
//
// ABOUT THIS FILE
//
//=========================================================================

module.exports = {
  test: /\.jsx?$/,
  exclude:/ node_modules/,
  loader: ['babel-loader','eslint-loader']
};