// Created by snov on 28.06.2016.

const path = require('path');

const config = {
  paths: require('../config/core').paths
};

const root = config.paths.absolute.root;
const distPath = './dist/';

config.paths.output = {
  server: path.resolve(root, './server/'),
  client: path.resolve(root, config.paths.assets, distPath),
  dist: distPath
};

module.exports = config;