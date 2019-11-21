exports.ids = [0];
exports.modules = [
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_14__);
















function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7___default()(["{inverse {blue Listening to {green http://localholst:", "}}}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Libraries and enviromental configs
__webpack_require__(19);

var chalk = __webpack_require__(20);

var express = __webpack_require__(21);

var fs = __webpack_require__(22); // Constants


var DEFAULT_PATH = '/';
var ERRORS = {
  1000: 'Express failed to initialize!',
  2000: 'Given `port` argument is not a number!'
};
var ROUTES_DIR = './routes'; // Custom Error

var AppError =
/*#__PURE__*/
function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default()(AppError, _Error);

  function AppError(message) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(this, AppError);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(AppError).call(this, message));
    _this.stack = _this.stack.replace(/^Error/, _this.constructor.name);
    return _this;
  }

  return AppError;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_14___default()(Error)); // Express Router


var Router = function Router() {
  var _this2 = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(this, Router);

  this.app = express();

  if (!(this.app instanceof Object)) {
    throw new AppError(ERRORS[1000]);
  } // Initiate middlewares


  this.app.use(ex.urlencoded({
    extended: true
  }));
  this.app.use(ex.json()); // Initiate routes

  fs.readdirSync(ROUTES_DIR).map(function (file) {
    var fileName = "/".concat(file.replace(/\.js$/, ''));
    var router = ex.Router();

    var routes = __webpack_require__(23)("".concat(ROUTES_DIR).concat(fileName));

    routes.forEach(function (_ref, i) {
      var handler = _ref.handler,
          method = _ref.method,
          _ref$path = _ref.path,
          path = _ref$path === void 0 ? DEFAULT_PATH : _ref$path;
      var count = i + 1;
      var symbol = chalk.hex('#1e90ff')(count % 2 ? '└┬┴┬┘' : '┌┴┬┴┐');
      var httpMethod = chalk.hex('#ffd36c')(method.toUpperCase());
      var fullPath = chalk.hex('#6cfff9')("".concat(fileName).concat(path));
      router[method](path, handler);
      console.log("".concat(symbol, " ").concat(chalk.inverse("[".concat(count, "]")), " -> {").concat(httpMethod, "} ").concat(fullPath));
    });

    _this2.app.use(_file, router);
  });
}; // Application


var App =
/*#__PURE__*/
function (_Router) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default()(App, _Router);

  function App(port) {
    var _this3;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(this, App);

    _this3 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(App).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this3), "port", 8080);

    if (isNaN(port)) {
      throw new AppError(ERRORS[2000]);
    }

    _this3.start = function () {
      _this3.app.listen(port || _this3.port, function () {
        return console.log(chalk(_templateObject(), _this3.port));
      });
    };

    return _this3;
  }

  return App;
}(Router); // Start here


new App().start();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  GET: 'get',
  HEAD: 'head',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  OPTIONS: 'options',
  TRACE: 'trace',
  PATCH: 'patch'
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);





// Libraries
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// Constants
var METHODS = __webpack_require__(2); // Routes


module.exports = [{
  handler: function handler(_ref, res) {
    var body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function handler$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = _ref.body;
            return _context.abrupt("return", res.json({
              im_here: true
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  method: METHODS.POST
}];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 0,
	"./": 0,
	"./constants/methods": 2,
	"./constants/methods.js": 2,
	"./index": 0,
	"./index.js": 0,
	"./routes/shorten-url": 6,
	"./routes/shorten-url.js": 6
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 23;

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ })
];;