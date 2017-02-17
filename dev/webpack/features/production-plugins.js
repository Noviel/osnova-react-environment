// Created by snov on 15.02.2017.
//
// Webpack plugins to use for production build
//
//=========================================================================

const webpack = require('webpack');

module.exports = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
];