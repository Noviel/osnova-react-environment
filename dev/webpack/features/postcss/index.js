// Created by snov on 15.02.2017.
//
// webpack-features-postcss
//
//=========================================================================

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSSLocalIdentName = '[local]--[hash:base64:5]';

module.exports = function (target, opts) {
  target = target || 'web';
  opts = opts || {};

  let rule = {
    test: opts.test || /\.css$/,
    exclude: opts.exclude || /node_modules/
  };

  const cssLoaderOptions = {
    modules: true,
    localIdentName: opts.CSSLocalIdentName || CSSLocalIdentName
  };

  const postCssLoader = {
    loader: 'postcss-loader',
    options: opts.postcss || require('./config')
  };

  if (target === 'browser' || target === 'web' || target === 'client') {
    rule.loader = ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        {
          loader: 'css-loader',
          options: cssLoaderOptions
        },
        postCssLoader
      ]
    })
  } else if (target === 'node' || target === 'server') {
    rule.loader = [
      {
        loader: 'css-loader/locals',
        options: cssLoaderOptions
      },
      postCssLoader
    ]
  } else {
    throw new Error('Unknown target: ' + target);
  }

  return {
    rule: rule,
    plugin: new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: false,
      allChunks: true
    })
  }

};
