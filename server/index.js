/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Created by snov on 03.02.2017.


var _require = __webpack_require__(2),
    host = _require.host,
    database = _require.database;

module.exports = {
  paths: {
    absolute: {
      root: process.cwd()
    },
    assets: './static/'
  },
  host: host,
  database: database,
  session: {
    secret: 'VERYSECRETSTRING'
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 03.02.2017.
//
// deployment to specific platform settings
//
//=========================================================================

var env = process.env;

var localSettings = {
  threads: 1, //require('os').cpus().length,

  host: {
    port: env.NODE_PORT || 3322,
    ip: env.NODE_IP || '127.0.0.1'
  },

  database: {
    uri: 'mongodb://localhost/osnovareactenvironment'
  }
};

//=========================================================================
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
    // $ heroku config:get MONGODB_URI
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

module.exports = exports = {
  host: targetConfig.host,
  database: targetConfig.database,
  threads: targetConfig.threads
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("osnova");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 09.02.2017.
//
// Multiprocess cluster launcher config
//
//=========================================================================

var _require = __webpack_require__(18),
    launch = _require.launch;

var _require2 = __webpack_require__(2),
    host = _require2.host,
    threads = _require2.threads;

// 'worker.listen' and 'master.listen' will be set to default sticky listens
// from osnova-cluster-launcher


launch({
  worker: { main: __webpack_require__(11) },
  master: { main: __webpack_require__(7) },
  config: { threads: threads, host: host }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(13);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Created by snov on 12.02.2017.
//
// Counter react component
//
//=========================================================================

var counterProps = {
  value: _react.PropTypes.number,
  onIncrement: _react.PropTypes.func,
  onDecrement: _react.PropTypes.func
};

var Counter = function Counter(_ref) {
  var value = _ref.value,
      onIncrement = _ref.onIncrement,
      onDecrement = _ref.onDecrement;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { className: _style2.default.label },
      value
    ),
    _react2.default.createElement(
      'button',
      { className: _style2.default.button, onClick: onIncrement },
      '+'
    ),
    _react2.default.createElement(
      'button',
      { className: _style2.default.button, onClick: onDecrement },
      '-'
    )
  );
};

Counter.propTypes = counterProps;

exports.default = Counter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(14);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Created by snov on 19.09.2016.

var _osnova = __webpack_require__(3);

var _osnova2 = _interopRequireDefault(_osnova);

var _core = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// creating a copy of a default core options, because we don't want to modify the original
var masterCoreOpts = _extends({}, __webpack_require__(1));

// we dont need these core modules on the master process
var modules = (0, _core.stringsToObjectKeys)(['webserver', 'socketio', 'session'], false);
masterCoreOpts.modules = _extends({}, masterCoreOpts.modules, modules);

module.exports = function (listen) {

  var osnova = (0, _osnova2.default)({
    master: true,
    modules: [],
    core: masterCoreOpts,
    listen: listen
  });

  osnova.start(function () {
    console.log('Hello from master! [pid=' + process.pid + ']');
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Created by snov on 13.02.2017.
//
// Define some express middlewares
//
//=========================================================================

exports.default = middlewares;

var _bodyParser = __webpack_require__(15);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(16);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function middlewares() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      express = _ref.express;

  return function (osnova) {
    var app = express || osnova.express;

    if (!app) {
      throw new Error('No express object were provided.');
    }

    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: true }));
    app.use((0, _cookieParser2.default)());

    if ((typeof osnova === 'undefined' ? 'undefined' : _typeof(osnova)) == 'object') {
      osnova.next({ cookieParser: _cookieParser2.default });
    }
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(20);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(17);

var _fs2 = _interopRequireDefault(_fs);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _server2 = _interopRequireDefault(_server);

var _caption = __webpack_require__(6);

var _caption2 = _interopRequireDefault(_caption);

var _Counter = __webpack_require__(5);

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable no-unused-vars */

// Created by snov on 10.02.2017.
//
// Generates HTML based on Webpack bundle
//
//=========================================================================

var v = 100;
/* eslint-disable no-unused-vars */


var getCounter = _react2.default.createElement(_Counter2.default, { value: v,
  onIncrement: function onIncrement() {
    return v++;
  },
  onDecrement: function onDecrement() {
    return v--;
  }
});

var generateHtmlString = function generateHtmlString(opts) {
  var manifest = JSON.parse(_fs2.default.readFileSync(_path2.default.resolve(opts.assetsPath, opts.distPath, 'manifest.json'), 'utf8'));

  return '\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="stylesheet" type="text/css" href=' + (opts.distPath + manifest['index.css']) + '>\n  <title>Osnova-react-environment application</title>\n</head>\n<body>\n    <div id="app"></div>\n    <script>window.serverData=' + v + '</script>\n    <script rel="script" src=' + (opts.distPath + manifest['manifest.js']) + '></script>\n    <script rel="script" src=' + (opts.distPath + manifest['vendor.js']) + '></script>\n    <script rel="script" src=' + (opts.distPath + manifest['index.js']) + '></script>\n    ' + (0, _server.renderToString)(_react2.default.createElement(_caption2.default, { text: 'hello?' })) + '\n    ' + (0, _server.renderToString)(getCounter) + '\n</body>\n</html>\n';
};

var sendHtml = function sendHtml() {
  return (/*opts*/function (osnova) {
      var app = osnova.express;
      var htmlString = generateHtmlString({
        assetsPath: osnova.opts.core.paths.assets,
        distPath: './dist/'
      });

      app.get('*', function (req, res) {
        res.send(htmlString);
      });

      osnova.next();
    }
  );
};

exports.default = sendHtml;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Created by snov on 10.02.2017.
//
// Socket events
//
//=========================================================================

/* eslint-disable no-unused-vars */

var createEvent = function createEvent(type, action) {
  return {
    type: type,
    action: action
  };
};

var registerEvents = function registerEvents(registrator, events) {
  Object.keys(events).forEach(function (event, i) {});
};

var socketEvents = function socketEvents(opts) {
  return function (osnova) {
    var io = osnova.io;
    var _io = io.native();
    if (typeof io == 'undefined') {
      throw new Error('osnova.io is undefined. Turn on socketio in osnova.opts.core.modules!');
    }

    // createEvent('count-increment', (io, socket, data) => {
    //   io.emit('counter-update');
    // });

    io.on('counter-increment', function (socket, payload) {
      _io.emit('counter-updated', 1);
    });

    io.on('counter-decrement', function (socket, payload) {
      _io.emit('counter-updated', -1);
    });

    io.on('client-message', function (socket, payload) {
      console.log(socket.id, payload);
    });

    osnova.next();
  };
};
/* eslint-enable no-unused-vars */

exports.default = socketEvents;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _osnova = __webpack_require__(3);

var _osnova2 = _interopRequireDefault(_osnova);

var _socketEvents = __webpack_require__(10);

var _socketEvents2 = _interopRequireDefault(_socketEvents);

var _sendHtml = __webpack_require__(9);

var _sendHtml2 = _interopRequireDefault(_sendHtml);

var _expressMiddlewares = __webpack_require__(8);

var _expressMiddlewares2 = _interopRequireDefault(_expressMiddlewares);

var _osnovaModuleSocket = __webpack_require__(19);

var _osnovaModuleSocket2 = _interopRequireDefault(_osnovaModuleSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import socketAuth from './socketio/auth';

module.exports = function (listen) {

  var osnova = (0, _osnova2.default)({
    modules: [(0, _expressMiddlewares2.default)(), (0, _sendHtml2.default)(), (0, _osnovaModuleSocket2.default)(), (0, _socketEvents2.default)()],
    core: __webpack_require__(1),
    listen: listen,
    DEBUG: {
      modules: false
    }
  });

  osnova.start(function () {
    console.log('Hello from worker! [pid=' + process.pid + ']');
  });
}; // Created by snov on 22.06.2016.

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.stringsToObjectKeys = stringsToObjectKeys;
// Created by snov on 12.02.2017.
//
// Core utility library
//
///////////////////////////////////////////////////////////////

// Converts array of strings to an object with these strings as keys.
//
// @param strings { Array }
// @param initializer { any } optional, default = undefined:
//    - undefined: the every key will be set to itself
//    - function {key => value}: it will be executed on the every key to produce the value
//    - other: the every key will be set to initializer.
// @returns { Object }
//
// f(['a', 'b', 'c'], 1) == { a: 1, b: 1, c: 1 }
// f(['a', 'b', 'c']) == { a: 'a', b: 'b', c: 'c' }
// f(['a', 'b', 'c'], v => v + '!') == { a: 'a!', b: 'b!', c: 'c!' }
function stringsToObjectKeys() {
  var strings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var initializer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if ((typeof strings === 'undefined' ? 'undefined' : _typeof(strings)) != 'object' || typeof strings.reduce != 'function') {
    return {};
  }

  return strings.reduce(function (prev, cur) {
    if (typeof initializer == 'undefined') {
      prev[cur] = cur;
    } else if (typeof initializer == 'function') {
      prev[cur] = initializer(cur);
    } else {
      prev[cur] = initializer;
    }
    return prev;
  }, {});
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
	"button": "button--1nk_y",
	"label": "label--1zxjw"
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	"caption": "caption--w3nRo"
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("osnova-cluster-launcher");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("osnova-module-socket.io");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 28.06.2016.
//

// launch via cluster launcher
__webpack_require__(4);

// or comment above and uncomment below for single process server
//require('./worker')('default');

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map