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

const { CSSLocalIdentName } = require('./webpack/utils');

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

  externals: [nodeExternals()],

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
        loader: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              localIdentName: CSSLocalIdentName
            }
          },
          {
            loader: 'postcss-loader',
            options: require('./postcss.config')
          }
        ]
      },
      {
        test: /\.(gif|jpe?g|tiff|png)$/i,
        exclude: excludeDirs,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules', path.resolve(rootPath, 'src')
    ]
    // ,alias: {
    //   reactDOMServer: 'react-dom/server'
    // }
  },

  plugins: [
    /*new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
      disable: false,
      allChunks: true
    }),*/

    /*new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),*/

    new CleanWebpackPlugin([assetsPath], { root: rootPath, watch: true })
  ]

};