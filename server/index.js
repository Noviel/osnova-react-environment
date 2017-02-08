/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("osnova");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 03.02.2017.
//
// deployment to specific platform settings
//
/////////////////////////////////////////////////////////////////

var env = process.env;

var localSettings = {
  threads: 1, //require('os').cpus().length,

  host: {
    port: env.NODE_PORT || 3333,
    ip: env.NODE_IP || '127.0.0.1'
  },

  database: {
    path: 'mongodb://localhost/',
    name: 'osnova'
  }
};

/////////////////////////////////////////////////////////////////
// for development mode in heroku
// $ heroku config:set NPM_CONFIG_PRODUCTION=false
var herokuSettings = {
  threads: 1,

  host: {
    port: env.PORT || 5000,
    ip: env.NODE_IP || '0.0.0.0'
  },
  database: {
    // https://devcenter.heroku.com/articles/mongolab/
    // console command:
    // $ heroku config:get MONGODB_URI -app [your-app-name]
    uri: 'mongodb://user:passs@x.mlab.com:33966/user'
  }
};

function getDeployTargetConfig() {
  //$ heroku config:set ON_HEROKU=true
  if (env.ON_HEROKU) {
    return herokuSettings;
  }

  return localSettings;
}

var targetConfig = getDeployTargetConfig();

module.exports = exports = targetConfig;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Created by snov on 03.02.2017.


var config = {
  paths: {
    absolute: {
      root: process.cwd()
    },
    assets: './static/'
  },
  target: __webpack_require__(1),
  session: {
    secret: 'VERYSECRETSTRING'
  },
  use: {
    auth: false
  }
};

module.exports = config;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _osnova = __webpack_require__(0);

var _osnova2 = _interopRequireDefault(_osnova);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {

  var osnova = (0, _osnova2.default)({
    master: true,
    modules: [],
    core: __webpack_require__(2)
  });

  osnova.start(function () {
    console.log('I WAS CALLED FROM WORKER. GZ');
  });
}; // Created by snov on 19.09.2016.

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _osnova = __webpack_require__(0);

var _osnova2 = _interopRequireDefault(_osnova);

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(8);

var _fs2 = _interopRequireDefault(_fs);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _server2 = _interopRequireDefault(_server);

var _caption = __webpack_require__(6);

var _caption2 = _interopRequireDefault(_caption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Created by snov on 22.06.2016.

var webpackGeneratedHtml2 = function webpackGeneratedHtml2(opts) {
  return function (osnova) {
    var app = osnova.express;
    var assetsPath = osnova.opts.core.paths.assets;
    var manifest = JSON.parse(_fs2.default.readFileSync(_path2.default.resolve(assetsPath, './dist/manifest.json'), 'utf8'));

    app.get('*', function (req, res) {
      res.set('Content-Type', 'text/html');

      res.send('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="stylesheet" type="text/css" href=' + ('dist/' + manifest['index.css']) + '>\n  <script rel="script" src=' + ('dist/' + manifest['manifest.js']) + '></script>\n  <script rel="script" src=' + ('dist/' + manifest['vendor.js']) + '></script>\n  <script rel="script" src=' + ('dist/' + manifest['index.js']) + '></script>\n  <title>Osnova-react-environment application</title>\n</head>\n<body>\n    <div id="app"></div>\n    ' + (0, _server.renderToString)(_react2.default.createElement(_caption2.default, { text: 'I am rendered on the server!' })) + '\n    ' + (0, _server.renderToString)(_react2.default.createElement('img', { src: 'image.jpg' })) + '\n</body>\n</html>');
    });

    osnova.next();
  };
};

var SocketEvents = function SocketEvents(osnova) {
  var io = osnova.io;
  if (io === undefined) {
    throw new Error('osnova.io is undefined. Turn on osnova-module-socket!');
  }

  io.on('client-message', function (socket, payload) {
    console.log('Recieved from client: ' + payload);
  });

  osnova.next();
};

module.exports = function () {

  var osnova = (0, _osnova2.default)({
    modules: [webpackGeneratedHtml2(), SocketEvents],

    core: __webpack_require__(2)
  });

  osnova.start(function () {
    console.log('I WAS CALLED FROM WORKER. GZ');
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Created by snov on 01.02.2017.


var Caption = function (_Component) {
  _inherits(Caption, _Component);

  function Caption() {
    _classCallCheck(this, Caption);

    return _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).apply(this, arguments));
  }

  _createClass(Caption, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.caption },
        this.props.text
      );
    }
  }]);

  return Caption;
}(_react.Component);

Object.defineProperty(Caption, 'propTypes', {
  enumerable: true,
  writable: true,
  value: {
    text: _react2.default.PropTypes.string
  }
});
Object.defineProperty(Caption, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    text: 'Caption'
  }
});
exports.default = Caption;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"caption":"caption--3HO5B"};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 28.06.2016.

var launch = __webpack_require__(0).launch;

launch({
  worker: __webpack_require__(5),
  master: __webpack_require__(4),
  config: __webpack_require__(1)
});

/***/ })
/******/ ]);