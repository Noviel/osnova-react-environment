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
const productionPlugins = require('./webpack/features/production-plugins');
const { configure, onlyProductionPlugin, setEntry, setRules, flatten } = require('./webpack-utils');

const config = require('./config');
const rootPath = config.paths.absolute.root;
const assetsPath = config.paths.output.client;
const vendor = ['react', 'react-dom'];

module.exports = configure({
  isProduction: process.env.NODE_ENV === 'production',

  features: [
    setEntry({
      index: './src/client/index.js',
      __prod__: { vendor }
    }),
    setRules([eslintBabelRule, postCss.rule, imagesRule])
  ]
}, {
  devtool: 'source-map',

  output: {
    filename: '[name].[chunkhash].js',
    path: assetsPath,
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/dist/'
  },

  resolve: {
    modules: [
      'node_modules', path.resolve(rootPath, 'src')
    ]
  },

  plugins: flatten([
    new WebpackChunkHash(),

    // onlyProductionPlugin() returns empty plugin for non-production build
    // and array of input plugins for production.
    // Takes second optional argument `isProduction` with default value:
    // process.env.NODE_ENV === 'production'
    //
    // Flattens arrays, can take this:
    // [ plugin, plugin, iAmReturningArrayOfPlugins()]
    // But resulting array if it is among other plugins should
    // be flattened outside, because webpack needs flat array of plugins.
    // That's why we use `flatten`.
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
  ])

});