'use strict';

var _osnova = require('osnova');

var _osnova2 = _interopRequireDefault(_osnova);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Created by snov on 22.06.2016.

module.exports = function () {

  var osnova = (0, _osnova2.default)({
    modules: [function (osnova) {
      var app = osnova.express;
      var manifest = require(_path2.default.resolve(osnova.opts.core.paths.absolute.assets, 'manifest.json'));

      app.get('*', function (req, res) {
        res.set('Content-Type', 'text/html');

        res.send('<!DOCTYPE html>\n          <html lang="en">\n          <head>\n            <meta charset="UTF-8">\n            <link rel="stylesheet" type="text/css" href=' + manifest['index.css'] + '>\n            <script rel="script" src=' + manifest['manifest.js'] + '></script>\n            <script rel="script" src=' + manifest['vendor.js'] + '></script>\n            <script rel="script" src=' + manifest['index.js'] + '></script>\n            <title>Huiuuu</title>\n          </head>\n          <body>\n              <div id="app"></div>\n          </body>\n          </html>');
      });

      osnova.next();
    }],

    core: require('../config/core')
  });

  osnova.start(function () {
    console.log('I WAS CALLED FROM WORKER. GZ');
  });
};