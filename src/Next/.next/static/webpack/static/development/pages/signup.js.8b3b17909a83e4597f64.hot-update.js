webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/Signup/index.js":
/*!************************************!*\
  !*** ./components/Signup/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.less */ "./components/Signup/styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/eric/Documents/LambdaSchool/CS9-LambdaMap/src/Next/components/Signup/index.js";

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

      if (e.target.name === "password") {
        _this.setState({
          focus: true
        });
      } else if (e.target.name === "password2") {
        _this.setState({
          focus2: true
        });
      } else if (e.target.name === "username" && _this.state.error) {
        _this.setState({
          error: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeActiveInput", function (e) {
      if (!e.target.value) {
        e.target.offsetParent.classList.remove(_styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.inputActive);

        if (e.target.name === "password") {
          _this.setState({
            focus: false
          });
        } else if (e.target.name === "password2") {
          _this.setState({
            focus2: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePasswordMatch", function (e) {
      if (_this.state.password === _this.state.password2) {
        _this.setState({
          match: true
        });
      } else {
        _this.setState({
          match: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      var _this$state = _this.state,
          username = _this$state.username,
          email = _this$state.email,
          password = _this$state.password;

      if (_this.state.match && _this.state.strength > 40) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/user/register', {
          username: username,
          email: email,
          password: password
        }).then(function (res) {
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
            pathname: '/signin'
          });
        }).catch(function (err) {
          _this.setState({
            error: true
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePasswordStrength", function (e) {
      var sum = 0;
      var temp;
      var value = e.target.value;
      var length = value.length;
      temp = value.match(/[A-Z]/g);
      var upper = temp === null ? "" : temp;
      temp = value.match(/[a-z]/g);
      var lower = temp === null ? "" : temp;
      temp = value.match(/[0-9]/g);
      var nums = temp === null ? "" : temp;
      temp = value.match(/[!@#$%^&*()\.\,><]/g);
      var special = temp === null ? "" : temp;

      if (length >= 12) {
        sum += 25;
      } else if (length < 12 && length >= 8) {
        sum += 10;
      } else if (length >= 3 && length <= 7) {
        sum += 5;
      }

      sum += lower.length >= 6 ? 10 : lower.length >= 3 ? 5 : 0;
      sum += upper.length > 1 ? 15 : upper.length > 0 ? 5 : 0;
      sum += nums.length >= 3 ? 25 : nums.length > 0 ? 10 : 0;
      sum += special.length > 1 ? 25 : special.length === 1 ? 10 : 0;
      var phrase = sum === 100 ? "good luck remembering this password." : sum >= 80 ? "weird flex but ok." : sum >= 60 ? "Above Average." : sum >= 40 ? "Average." : sum >= 25 ? "Mediocre." : sum >= 5 && length >= 6 ? "Weak sauce." : "Minimum six characters are required.";

      _this.setState({
        strength: sum,
        strengthPhrase: phrase
      }, _this.handlePasswordMatch);
    });

    _this.state = {
      showText: false,
      focus: false,
      focus2: false,
      strength: 0,
      strengthPhrase: "Minimum six characters are required.",
      match: false,
      username: "",
      email: "",
      password: "",
      password2: "",
      error: false
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
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__Inner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "SIGN UP")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.error, " ").concat(this.state.error ? _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.activeError : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "User name already exists"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          return e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__InputContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "UserName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
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
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__InputContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "email",
        value: this.state.email,
        onChange: this.handleInput,
        id: "email",
        type: "email",
        onFocus: this.addActiveInput,
        onBlur: this.removeActiveInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__InputContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "password",
        id: "password",
        value: this.state.password,
        onKeyUp: this.handlePasswordStrength,
        onChange: this.handleInput,
        type: this.state.showText ? "text" : "password",
        onFocus: this.addActiveInput,
        onBlur: this.removeActiveInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), this.state.focus ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__StrengthMeterContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.StrengthMeter,
        style: strength,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, this.state.strengthPhrase)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__InputContainer,
        style: {
          margin: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "password2",
        id: "password2",
        value: this.state.password2,
        onChange: this.handleInput,
        onKeyUp: this.handlePasswordMatch,
        type: this.state.showText ? "text" : "password",
        onFocus: this.addActiveInput,
        onBlur: this.removeActiveInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), this.state.focus2 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: password2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, this.state.match ? "Match!" : "Passwords do not match.") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        name: "showText",
        onClick: this.handleToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), " Show Password", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__Submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__OtherLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__OtherButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.blue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Sign up with Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__OtherButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.orange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Sign up with Google")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_less__WEBPACK_IMPORTED_MODULE_1___default.a.Container__Footer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Already have an account? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Sign in"))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=signup.js.8b3b17909a83e4597f64.hot-update.js.map