// Created by snov on 06.02.2017.
//
// Configuration for server side rendering.
//
/////////////////////////////////////////////////////////////////

const config = require('./config');
const path = require('path');
const webpack = require('webpack');

const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const excludeDirs = /node_modules/;
const rootPath = config.paths.absolute.root;
const assetsPath = path.resolve(rootPath, './server/');

console.log(`Preparing Webpack2 config [${process.env.NODE_ENV}]`);

const utils = require('./webpack/utils');

const CSSLoaderString = utils.getCssLoaderConfigString({
  modules: true,
  local: true
});

module.exports = {
  context: rootPath,
  target: 'node',

  entry: {
    index: './src/server/index.js'
  },

  output: {
    filename: '[name].js',
    path: assetsPath,
    publicPath: '/'
  },

  externals: [ nodeExternals()],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: excludeDirs,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: excludeDirs,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [CSSLoaderString]
        })
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules', path.resolve(rootPath, 'src')
    ]
  },

  plugins: [
    /*new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: false,
      allChunks: true
    })*/

    //,

    /*new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),*/

    //new CleanWebpackPlugin([assetsPath], { root: rootPath, watch: true })
  ]

};