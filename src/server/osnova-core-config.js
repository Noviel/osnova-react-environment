// Created by snov on 13.10.2016.

const launchConfig = require('./launch-config');
const path = require('../root').path;

const osnovaCoreConfig = {
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