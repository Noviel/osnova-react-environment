'use strict';

var _osnova = require('osnova');

var _osnova2 = _interopRequireDefault(_osnova);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Created by snov on 22.06.2016.

module.exports = function () {

  var osnova = (0, _osnova2.default)({
    modules: [function (osnova) {
      var app = osnova.express;

      app.get('*', function (req, res) {
        res.set('Content-Type', 'text/html');

        res.send('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n    <script rel="script" src="index.js"></script>\n    <title>Hheh</title>\n</head>\n<body>\n    <div id="app">nu che,potancuem?</div>\n</body>\n</html>');
      });

      osnova.next();
    }],

    core: require('./osnova-core-config')
  });

  osnova.start(function () {
    console.log('I WAS CALLED FROM WORKER. GZ');
  });
};