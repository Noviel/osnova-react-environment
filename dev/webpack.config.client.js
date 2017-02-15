// Created by snov on 21.12.2016.
//
// Webpack configuration for bundling server
//
//=========================================================================

const path = require('path');
const webpack = require('webpack');

const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const postCss = require('./webpack/features/postcss')('client');
const eslintBabelRule = require('./webpack/features/eslint-babel');
const imagesRule = require('./webpack/features/images');
const configure = require('./webpack-configurator').configure;

const config = require('./config');
const rootPath = config.paths.absolute.root;
const assetsPath = config.paths.output.client;

module.exports = configure({
  production: {
    use: process.env.NODE_ENV === 'production',
    plugins: [
      require('./webpack/features/production-plugins'),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
    ]
  }
}, {
  devtool: 'source-map',

  entry: {
    index: './src/client/index.js',
    vendor: ['react', 'react-dom']
  },

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
    postCss.plugin,
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new ManifestPlugin(),
    new CleanWebpackPlugin([assetsPath], { root: rootPath, watch: true })
  ]

});