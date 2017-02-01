// Created by snov on 21.12.2016.

const config = require('./config');
const path = require('path');
const webpack = require('webpack');

const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const excludeDirs = /node_modules/;
const rootPath = config.paths.absolute.root;
const assetsPath = path.resolve(rootPath, config.paths.assets);

module.exports = {
  context: rootPath,
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
          loader: ['css-loader']
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
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new ManifestPlugin(),
    new CleanWebpackPlugin([assetsPath], { root: rootPath, watch: true })
  ]

};