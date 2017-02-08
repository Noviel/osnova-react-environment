// Created by snov on 21.12.2016.

const config = require('./config');
const path = require('path');
const webpack = require('webpack');

const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const excludeDirs = /node_modules/;
const rootPath = config.paths.absolute.root;
const assetsPath = path.resolve(rootPath, config.paths.assets, './dist/');

console.log(`Preparing Webpack2 config [${process.env.NODE_ENV}]`);

const { CSSLocalIdentName } = require('./webpack/utils');

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
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
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
        })
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