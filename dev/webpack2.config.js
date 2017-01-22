// Created by snov on 21.12.2016.

const config = require('./config');
const root = config.path.root;
const path = require('path');

module.exports = {
  context: root,

  entry: {
    'js/index': './src/client/index.js'
  },

  output: {
    filename: '[name].js',
    path: config.path.public.web,
    chunkFilename: '[id].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules', path.join(root, 'src')
    ]
  }

};