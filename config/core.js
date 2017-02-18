// Created by snov on 03.02.2017.
"use strict";

const { host } = require('./target');

module.exports = {
  paths: {
    absolute: {
      root: process.cwd()
    },
    assets: './static/'
  },
  host,
  modules: {
    session: false,
    mongo: false
  }
};