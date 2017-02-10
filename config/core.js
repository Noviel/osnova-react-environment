// Created by snov on 03.02.2017.
"use strict";

const { host, database } = require('./target');

const config = {
  paths: {
    absolute: {
      root: process.cwd()
    },
    assets: './static/'
  },
  host,
  database,
  session: {
    secret: 'VERYSECRETSTRING'
  }
};

module.exports = config;