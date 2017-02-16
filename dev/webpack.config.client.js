// Created by snov on 21.12.2016.
//
// Webpack configuration for bundling client
//
//=========================================================================

const path = require('path');
const webpack = require('webpack');

const ManifestPlugin = require('webpack-assets-manifest');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

const eslintBabelRule = require('./webpack/features/eslint-babel');
const imagesRule = require('./webpack/features/images');
const postCss = require('./webpack/features/postcss')('client');
const { configure, onlyProductionPlugin, entries } = require('./webpack-utils');
const productionPlugins = require('./webpack/features/production-plugins');

const config = require('./config');
const rootPath = config.paths.absolute.root;
const assetsPath = config.paths.output.client;
const vendor = ['react', 'react-dom'];

module.exports = configure({
  isProduction: process.env.NODE_ENV === 'production'
}, {
  devtool: 'source-map',

  // Excludes '__dev__' from production build and merge '__prod__' to other entries
  // and vise versa for development build.
  entry: entries({
    index: './src/client/index.js',
    __prod__: {
      vendor: vendor
    }
  }),

  output: {
    filename: '[name].[chunkhash].js',
    path: assetsPath,
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/dist/'
  },

  module: {
    rules: [
      eslintBabelRule, postCss.rule, imagesRule
    ]
  },

  resolve: {
    modules: [
      'node_modules', path.resolve(rootPath, 'src')
    ]
  },

  plugins: [
    new WebpackChunkHash(),

    // Returns empty plugin for non-production build and array of input
    // plugins for production.
    //
    // Flattens arrays, can take this:
    // [ plugin, plugin, iAmReturningArrayOfPlugins()]
    // But resulting array should be flattened outside.
    // That's one of the things that `configure` is doing.
    onlyProductionPlugin([
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest'],
        filename: '[name].[chunkhash].js',
        minChunks: ({ resource }) => /node_modules/.test(resource)
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      productionPlugins
    ]),

    postCss.plugin,

    new ManifestPlugin(),
    new CleanWebpackPlugin([assetsPath], { root: rootPath, watch: true })
  ]

});