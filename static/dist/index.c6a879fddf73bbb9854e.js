webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(28);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _style = __webpack_require__(123);

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

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"main--24h2g"};

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"caption":"caption--3HO5B"};

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(28);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _caption = __webpack_require__(106);

var _caption2 = _interopRequireDefault(_caption);

var _style = __webpack_require__(107);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Created by snov on 27.08.2016.
var io = __webpack_require__(108);
var socket = null;

document.addEventListener('DOMContentLoaded', function () {

  socket = io('');
  socket.emit('client-message', 'Priffki :****');

  (0, _reactDom.render)(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: _style2.default.main },
      'Hello :)'
    ),
    _react2.default.createElement(_caption2.default, { text: 'OPA OPA OPA PA' })
  ), document.getElementById('app'));
});

/***/ })

},[233]);
//# sourceMappingURL=index.c6a879fddf73bbb9854e.js.map