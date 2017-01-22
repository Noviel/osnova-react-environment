'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addRoutes;
// Created by snov on 29.11.2016.

function addRoutes(opts) {

  return function (osnova) {
    var app = osnova.express;

    app.get('*', function (req, res) {
      res.render('index');
    });

    osnova.moduleReady();
  };
}