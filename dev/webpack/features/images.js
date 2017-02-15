// Created by snov on 15.02.2017.
//
// ABOUT THIS FILE
//
//=========================================================================

module.exports = {
  test: /\.(gif|jpe?g|tiff|png)$/i,
  exclude: /node_modules/,
  loader: 'url-loader?limit=10000'
};