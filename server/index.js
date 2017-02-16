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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

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
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 09.02.2017.
//
// Multiprocess cluster launcher config
//
//=========================================================================

var _require = __webpack_require__(23),
    launch = _require.launch;

var _require2 = __webpack_require__(2),
    host = _require2.host,
    threads = _require2.threads;

// 'worker.listen' and 'master.listen' will be set to default sticky listens
// from osnova-cluster-launcher


launch({
  worker: { main: __webpack_require__(18) },
  master: { main: __webpack_require__(14) },
  config: { threads: threads, host: host }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 16.02.2017.
//
// Application description
//
//=========================================================================

module.exports = {
  head: {
    title: 'React Osnova Environment',
    description: 'React-redux project boilerplate.',
    meta: [{ name: 'description', content: 'React-redux project boilerplate.' }, { charset: 'utf-8' }, { property: 'og:site_name', content: 'React Osnova Environment' }, { property: 'og:locale', content: 'en_US' }, { property: 'og:title', content: 'React Osnova Environment' }, { property: 'og:description', content: 'React-redux project boilerplate.' }, { property: 'og:card', content: 'summary' }, { property: 'og:site', content: '@sonsnov' }, { property: 'og:creator', content: '@sonsnov' }]
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 15.02.2017.
//
// Defining global constants
//
//=========================================================================

module.exports = function defineGlobals() {
  var isOnClient = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  global.__CLIENT__ = isOnClient;
  global.__SERVER__ = !isOnClient;
  global.__DEV__ = process.env.NODE_ENV !== 'production';
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 28.06.2016.

var path = __webpack_require__(4);

var config = {
  paths: __webpack_require__(0).paths
};

var root = config.paths.absolute.root;
var distPath = './dist/';

config.paths.output = {
  server: path.resolve(root, './server/'),
  client: path.resolve(root, config.paths.assets, distPath),
  distPath: distPath
};

module.exports = config;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 15.02.2017.
//
// Webpack configurator
//
//=========================================================================
var path = __webpack_require__(4);
var fs = __webpack_require__(22);

var config = __webpack_require__(10);

/*
function merge(target, array) {
  let result = [];
  if (target && target.length >= 1) {
    result = [].concat.apply([], target);
  }
  if (array && array.length >= 1) {
    result = [].concat.apply([], result, array);
  }
  return result;
}
*/

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function getFileExtenstion(filename) {
  return filename.split('.').pop();
}

var EmptyPlugin = function EmptyPlugin() {};

var defaultProductionCheck = function defaultProductionCheck(value) {
  if (typeof value == 'undefined') return process.env.NODE_ENV === 'production';
  return value;
};

var onlyProductionPlugin = function onlyProductionPlugin(plugins, isProduction) {
  isProduction = defaultProductionCheck(isProduction);

  if (!plugins || !isProduction) return EmptyPlugin;

  return flatten(plugins);
};

function configureWebpack(opts, webpackOpts) {
  opts = opts || {};

  var webpackObject = Object.assign({}, webpackOpts);
  webpackObject.context = config.paths.absolute.root;

  if (webpackObject.plugins && webpackObject.plugins.length >= 1) {
    webpackObject.plugins = flatten(webpackObject.plugins);
  }

  return webpackObject;
}

function getAssets() {
  var manifest = JSON.parse(fs.readFileSync(path.resolve(config.paths.output.client, 'manifest.json'), 'utf8'));
  var assets = {
    distPath: config.paths.output.distPath,
    scripts: [],
    styles: [],
    other: []
  };

  for (var a in manifest) {
    if (!manifest.hasOwnProperty(a)) continue;

    var asset = manifest[a];
    var ext = getFileExtenstion(asset);
    if (ext.match(/jsx?/)) {
      assets.scripts.push(asset);
    } else if (ext.match(/css/)) {
      assets.styles.push(asset);
    } else assets.other.push(asset);
  }

  return assets;
}

var mergeExclude = function mergeExclude(merge, exclude, list) {

  var result = {};

  for (var entry in list) {
    if (!list.hasOwnProperty(entry) || entry == exclude) continue;
    if (entry == merge) {
      for (var subEntry in list[entry]) {
        if (list[entry].hasOwnProperty(subEntry)) result[subEntry] = list[entry][subEntry];
      }
    } else {
      result[entry] = list[entry];
    }
  }

  return result;
};

var mergeExcludeEntries = function mergeExcludeEntries(list, production) {
  var merge = void 0,
      exclude = void 0;

  if (production) {
    merge = '__prod__';
    exclude = '__dev__';
  } else {
    merge = '__dev__';
    exclude = '__prod__';
  }

  return mergeExclude(merge, exclude, list);
};

var conditionalEntries = function conditionalEntries(opts, isProduction) {
  opts = opts || {};
  isProduction = defaultProductionCheck(isProduction);

  if (isProduction) return mergeExcludeEntries(opts, true);

  return mergeExcludeEntries(opts, false);
};

module.exports = {
  configure: configureWebpack,
  getAssets: getAssets,
  onlyProductionPlugin: onlyProductionPlugin,
  entries: conditionalEntries
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(6);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _app = __webpack_require__(8);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Created by snov on 16.02.2017.
//
// Application component
//
//=========================================================================

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(_reactHelmet2.default, _app2.default.head),
        _react2.default.createElement(
          'div',
          null,
          'I am rendered on the server! [PID=',
          process.pid,
          ']'
        ),
        _react2.default.createElement('div', { id: 'counter' })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(5);

var _reactHelmet = __webpack_require__(6);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Created by snov on 15.02.2017.
//
// Html document helper for server rendering
//
//=========================================================================

/* eslint-disable no-unused-vars */


var Html = function (_Component) {
  _inherits(Html, _Component);

  function Html() {
    _classCallCheck(this, Html);

    return _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
  }

  _createClass(Html, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          assets = _props.assets,
          component = _props.component;

      var content = component ? (0, _server.renderToString)(component) : '';
      var head = _reactHelmet2.default.rewind();

      return _react2.default.createElement(
        'html',
        { lang: 'en-us' },
        _react2.default.createElement(
          'head',
          null,
          head.base.toComponent(),
          head.title.toComponent(),
          head.meta.toComponent(),
          head.link.toComponent(),
          head.script.toComponent(),
          _react2.default.createElement('link', { rel: 'shortcut icon', href: '/favicon.png' }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
          Object.keys(assets.styles).map(function (style, key) {
            return _react2.default.createElement('link', { href: assets.distPath + assets.styles[style], key: key, media: 'screen, projection',
              rel: 'stylesheet', type: 'text/css', charSet: 'UTF-8' });
          })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: content } }),
          Object.keys(assets.scripts).map(function (script, key) {
            return _react2.default.createElement('script', { src: assets.distPath + assets.scripts[script], key: key });
          })
        )
      );
    }
  }]);

  return Html;
}(_react.Component);

Object.defineProperty(Html, 'propTypes', {
  enumerable: true,
  writable: true,
  value: {
    assets: _react.PropTypes.object,
    component: _react.PropTypes.node,
    store: _react.PropTypes.object
  }
});
exports.default = Html;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Created by snov on 19.09.2016.

var _osnova = __webpack_require__(3);

var _osnova2 = _interopRequireDefault(_osnova);

var _core = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// creating a copy of a default core options, because we don't want to modify the original
var masterCoreOpts = _extends({}, __webpack_require__(0));

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
/* 15 */
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

var _bodyParser = __webpack_require__(20);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(21);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(5);

var _server2 = _interopRequireDefault(_server);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(13);

var _Html2 = _interopRequireDefault(_Html);

var _webpackUtils = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var sendHtml = function sendHtml() {
  return (/*opts*/function (osnova) {
      var app = osnova.express;

      app.get('*', function (req, res) {
        res.send('<!doctype html>\n' + (0, _server.renderToString)(_react2.default.createElement(_Html2.default, { assets: (0, _webpackUtils.getAssets)(), component: _react2.default.createElement(_App2.default, null) })));
      });

      osnova.next();
    }
  );
};
/* eslint-enable no-unused-vars */

// Created by snov on 10.02.2017.
//
// Generates HTML based on Webpack bundle
//
//=========================================================================

exports.default = sendHtml;

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _osnova = __webpack_require__(3);

var _osnova2 = _interopRequireDefault(_osnova);

var _socketEvents = __webpack_require__(17);

var _socketEvents2 = _interopRequireDefault(_socketEvents);

var _sendHtml = __webpack_require__(16);

var _sendHtml2 = _interopRequireDefault(_sendHtml);

var _expressMiddlewares = __webpack_require__(15);

var _expressMiddlewares2 = _interopRequireDefault(_expressMiddlewares);

var _osnovaModuleSocket = __webpack_require__(24);

var _osnovaModuleSocket2 = _interopRequireDefault(_osnovaModuleSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import socketAuth from './socketio/auth';
__webpack_require__(9)(false); // Created by snov on 22.06.2016.

module.exports = function (listen) {

  var osnova = (0, _osnova2.default)({
    modules: [(0, _expressMiddlewares2.default)(), (0, _sendHtml2.default)(), (0, _osnovaModuleSocket2.default)(), (0, _socketEvents2.default)()],
    core: __webpack_require__(0),
    listen: listen,
    DEBUG: {
      modules: false
    }
  });

  osnova.start(function () {
    console.log('Hello from worker! [pid=' + process.pid + ']');
  });
};

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("osnova-cluster-launcher");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("osnova-module-socket.io");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Created by snov on 28.06.2016.
//

// launch via cluster launcher
__webpack_require__(7);

// or comment above and uncomment below for single process server
//require('./worker')('default');

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map