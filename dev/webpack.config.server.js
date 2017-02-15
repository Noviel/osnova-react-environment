// Created by snov on 06.02.2017.
//
// Webpack configuration for bundling server
//
//=========================================================================

const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const postCss = require('./webpack/features/postcss')('server', { });
const eslintBabelRule = require('./webpack/features/eslint-babel');
const imagesRule = require('./webpack/features/images');
const configure = require('./webpack-configurator').configure;

const config = require('./config');
const rootPath = config.paths.absolute.root;
const assetsPath = config.paths.output.server;

module.exports = configure({
  production: {
    use: process.env.NODE_ENV === 'production',
    plugins: require('./webpack/features/production-plugins')
  }
}, {
  devtool: 'source-map',
  target: 'node',

  entry: {
    index: './src/server/index.js'
  },

  output: {
    filename: '[name].js',
    path: assetsPath,
    publicPath: '/'
  },


  module: {
    rules: [
      eslintBabelRule, postCss.rule, imagesRule
    ]
  },

  externals: [nodeExternals()],

  plugins: [
    new CleanWebpackPlugin([assetsPath], { root: rootPath })
  ]

});