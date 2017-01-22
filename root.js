// Created by snov on 21.12.2016.
const path = require('path');
const absoluteRoot = path.resolve(__dirname);

module.exports = {
  path: {
    root: absoluteRoot,
    public: {
      web: path.resolve(absoluteRoot, './public'),
      mobile: path.resolve(absoluteRoot, './mobile/www')
    },
    views: path.resolve(absoluteRoot, './private/template'),
    server:  path.resolve(absoluteRoot, './server')
  }
};