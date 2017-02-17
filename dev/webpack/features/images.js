// Created by snov on 15.02.2017.
//
// Images loader object
//
//=========================================================================

module.exports = {
  test: /\.(gif|jpe?g|tiff|png)$/i,
  exclude: /node_modules/,
  loader: 'url-loader?limit=10000'
};