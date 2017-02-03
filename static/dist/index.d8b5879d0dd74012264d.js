webpackJsonp([0],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Created by snov on 27.08.2016.


var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _caption = __webpack_require__(81);

var _caption2 = _interopRequireDefault(_caption);

var _style = __webpack_require__(82);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sosok = function () {
  _createClass(Sosok, null, [{
    key: 'message',
    value: function message() {
      return Sosok.obs;
    }
  }]);

  function Sosok() {
    var what = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'that!';

    _classCallCheck(this, Sosok);
  }

  return Sosok;
}();

Object.defineProperty(Sosok, 'obs', {
  enumerable: true,
  writable: true,
  value: { value: 1800 }
});


document.addEventListener('DOMContentLoaded', function () {
  var c = new Sosok();
  console.log(_style2.default, '?????');
  (0, _reactDom.render)(_react2.default.createElement(
    'div',
    null,
    'IT IS ADVANCED OSNOVA APPLICATION WITH CONFIGURED WEBPACK FOR WORK WITH REACT',
    _react2.default.createElement(_caption2.default, { text: 'OPA OPA OPA PA' })
  ), document.getElementById('app'));
});

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(26);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _style = __webpack_require__(83);

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
        { className: _style2.default.bisque },
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

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bisque":"bisque--3mZl_"};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"main--20n9b","bisque":"bisque--1aosv"};

/***/ })

},[180]);
//# sourceMappingURL=index.d8b5879d0dd74012264d.js.map