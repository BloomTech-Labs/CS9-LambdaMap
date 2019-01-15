webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Signin/index.js":
/*!************************************!*\
  !*** ./components/Signin/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.less */ "./components/Signin/styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/eric/Documents/LambdaSchool/CS9-LambdaMap/src/Next/components/Signin/index.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggle", function (e) {
      _this.setState(_defineProperty({}, e.target.name, !_this.state[e.target.name]));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInput", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addActiveInput", function (e) {
      e.target.offsetParent.classList.add(_styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.inputActive);

      if (_this.state.error) {
        _this.setState({
          error: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeActiveInput", function (e) {
      if (!e.target.value) {
        e.target.offsetParent.classList.remove(_styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.inputActive);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      var _this$state = _this.state,
          username = _this$state.username,
          email = _this$state.email,
          password = _this$state.password;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/user/login', {
        username: username,
        password: password
      }).then(function (res) {
        _this.props.dispatch({
          type: "LOGIN",
          payload: res.data
        });

        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
          pathname: '/dashboard'
        });
      }).catch(function (err) {
        _this.setState({
          errorPhrase: err.response.data.error,
          error: true
        });
      });
    });

    _this.state = {
      showText: false,
      username: "",
      password: "",
      error: false,
      errorPhrase: "Something went wrong."
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var strength = {
        width: "".concat(this.state.strength, "%"),
        background: this.state.strength <= 20 ? '#DC3253' : this.state.strength <= 40 ? '#EC6935' : this.state.strength <= 60 ? '#ECCE35' : this.state.strength <= 80 ? '#ECE635' : '#26A762'
      };
      var password2 = {
        color: this.state.match ? "green" : "red"
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__Inner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "SIGN IN")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.error, " ").concat(this.state.error ? _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.activeError : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.state.errorPhrase), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          return e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__InputContainer, " ").concat(_styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.marginBottom),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "UserName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "User Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "username",
        value: this.state.username,
        onChange: this.handleInput,
        id: "UserName",
        type: "text",
        onFocus: this.addActiveInput,
        onBlur: this.removeActiveInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__InputContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "password",
        id: "password",
        value: this.state.password,
        onChange: this.handleInput,
        type: this.state.showText ? "text" : "password",
        onFocus: this.addActiveInput,
        onBlur: this.removeActiveInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "showText",
        onClick: this.handleToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), " Show Password", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__Submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__OtherLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__OtherButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.blue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Sign up with Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__OtherButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.orange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Sign up with Google")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__Footer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Don't have an account? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Sign up")))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.efdf8843179b6a58ad85.hot-update.js.map