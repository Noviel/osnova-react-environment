'use strict';

var _osnova = require('osnova');

var _osnova2 = _interopRequireDefault(_osnova);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {

  var osnova = (0, _osnova2.default)({
    master: true,

    modules: [],

    core: require('./osnova-core-config'),

    start: function start() {
      console.log('I WAS CALLED FROM MASTER. GZ');
    }
  });

  /*
    osnova.add((osnova) => {
      const dqnt = new DQNT(osnova);
      osnova.moduleReady();
    });
  */

  osnova.start();
}; // Created by snov on 19.09.2016.