webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var counterProps = {
  value: _react.PropTypes.number,
  onIncrement: _react.PropTypes.func,
  onDecrement: _react.PropTypes.func
}; // Created by snov on 12.02.2017.
//
// Counter react component
//
/////////////////////////////////////////////////////////////////

var Counter = function Counter(_ref) {
  var value = _ref.value,
      onIncrement = _ref.onIncrement,
      onDecrement = _ref.onDecrement;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      value
    ),
    _react2.default.createElement(
      'button',
      { onClick: onIncrement },
      '+'
    ),
    _react2.default.createElement(
      'button',
      { onClick: onDecrement },
      '-'
    )
  );
};

Counter.propTypes = counterProps;

exports.default = Counter;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(133);

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

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(104);

var _reduxThunk = __webpack_require__(242);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(120);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore(preloadedState) {
  return (0, _redux.createStore)(_reducer2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}; // Created by snov on 11.02.2017.

exports.default = configureStore;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createActionConstants;
// Created by snov on 12.02.2017.
//
// Generates action constants by app/module/CONSTANT convention
// https://github.com/erikras/ducks-modular-redux
//
/////////////////////////////////////////////////////////////////

var getActionName = function getActionName(sep, app, module, action) {
  return app + sep + module + sep + action;
};

function createActionConstants(app, module, actions) {
  Object.keys(actions).forEach(function (e) {
    actions[e] = getActionName('/', app, module, actions[e]);
  });
  return actions;
}

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReducer;
// Created by snov on 12.02.2017.
//
// Basic helpers for work with Redux
//
/////////////////////////////////////////////////////////////////

function createReducer(initialState, handlers) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(104);

var _counter = __webpack_require__(65);

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Created by snov on 11.02.2017.
//
// Root Application Reducer
//
/////////////////////////////////////////////////////////////////\

exports.default = (0, _redux.combineReducers)({
  counter: _counter2.default
});

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"caption":"caption--w3nRo"};

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(22);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _caption = __webpack_require__(113);

var _caption2 = _interopRequireDefault(_caption);

var _Counter = __webpack_require__(112);

var _Counter2 = _interopRequireDefault(_Counter);

var _socket = __webpack_require__(115);

var _socket2 = _interopRequireDefault(_socket);

var _store = __webpack_require__(114);

var _store2 = _interopRequireDefault(_store);

var _counter = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = null; // Created by snov on 27.08.2016.

var initSocket = function initSocket() {
  socket = (0, _socket2.default)('');
  socket.emit('client-message', 'Priffki :****');
  socket.on('counter-updated', function (payload) {
    if (payload === 1) {
      store.dispatch((0, _counter.increment)());
    } else if (payload === -1) {
      store.dispatch((0, _counter.decrement)());
    } else {
      console.log('Unsupported payload ' + payload);
    }
  });
};

var doIncrement = function doIncrement() {
  socket.emit('counter-increment');
};

var doDecrement = function doDecrement() {
  socket.emit('counter-decrement');
};

var store = (0, _store2.default)({
  counter: {
    value: 100
  }
});

var updateApp = function updateApp() {
  (0, _reactDom.render)(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_caption2.default, { text: 'OPA OPA OPA PA' }),
    _react2.default.createElement(_Counter2.default, { value: store.getState().counter.value,
      onIncrement: function onIncrement() {
        doIncrement();
      },
      onDecrement: function onDecrement() {
        doDecrement();
      }
    })
  ), document.getElementById('app'));
};

store.subscribe(updateApp);

document.addEventListener('DOMContentLoaded', function () {
  initSocket();
  updateApp();
});

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReducer;

exports.increment = increment;
exports.decrement = decrement;

var _createActionConstants = __webpack_require__(118);

var _createActionConstants2 = _interopRequireDefault(_createActionConstants);

var _lib = __webpack_require__(119);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Created by snov on 12.02.2017.
//
// Counter module
//
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// Actions definition
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';

var ACTIONS = (0, _createActionConstants2.default)('osnova-react-environment', 'counter', {
  INCREMENT: INCREMENT, DECREMENT: DECREMENT
});

/////////////////////////////////////////////////////////////////
// Action creators
function increment() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return {
    type: ACTIONS[INCREMENT],
    value: value
  };
}

function decrement() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return {
    type: ACTIONS[DECREMENT],
    value: value
  };
}

/////////////////////////////////////////////////////////////////
// Reducer
exports.default = (0, _lib2.default)({ value: 0 }, (_createReducer = {}, _defineProperty(_createReducer, ACTIONS.INCREMENT, function (state, action) {
  return Object.assign({}, state, { value: state.value + action.value });
}), _defineProperty(_createReducer, ACTIONS.DECREMENT, function (state, action) {
  return Object.assign({}, state, { value: state.value - action.value });
}), _createReducer));

/***/ })

},[260]);
//# sourceMappingURL=index.fd951108965e9c00214b.js.map