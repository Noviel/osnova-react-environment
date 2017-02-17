// Created by snov on 06.02.2017.
//
// Webpack configuration for bundling server
//
//=========================================================================

const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const eslintBabelRule = require('./webpack/features/eslint-babel');
const imagesRule = require('./webpack/features/images');
const postCss = require('./webpack/features/postcss')('server');
const { configure, setEntry, setRules } = require('./webpack-utils');

const config = require('./config');
const rootPath = config.paths.absolute.root;
const assetsPath = config.paths.output.server;

module.exports = configure({
  isProduction: process.env.NODE_ENV === 'production',
  production: {
    plugins: require('./webpack/features/production-plugins')
  },
  features: [
    setEntry({ __dev__: './src/server/index.js' }),
    setRules([eslintBabelRule, postCss.rule, imagesRule])
  ]
}, {
  devtool: 'source-map',
  target: 'node',

  output: {
    filename: '[name].js',
    path: assetsPath,
    publicPath: '/'
  },

  externals: [nodeExternals()],

  plugins: [
    new CleanWebpackPlugin([assetsPath], { root: rootPath })
  ]
});