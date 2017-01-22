'use strict';

// Created by snov on 13.10.2016.

var launchConfig = require('./launch-config');
var path = require('../root').path;

var osnovaCoreConfig = {
  paths: {
    root: path.root,
    public: path.public.web,
    views: path.views
  },
  template: 'pug',
  target: launchConfig,
  session: {
    secret: 'VERYSECRETSTRING'
  },
  auth: false
};

module.exports = osnovaCoreConfig;