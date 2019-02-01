/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cube; });
function square(x) {
  return x * x;
}
function cube(x) {
  return x * x * x;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return printMe; });
function printMe() {
  console.log('I get called from print.js!');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scss_all_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _scss_all_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_all_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _multiFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // 在dll內的套件

var _ = __webpack_require__(5);

console.log('index');
console.log('lodashhhhh', _.defaults({
  'a': 1
}, {
  'a': 3,
  'b': 91
}));

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = "Hello webpack";
  btn.innerHTML = 'Click me and check the console!adsasdf';
  btn.onclick = _print__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
console.log(Object(_multiFunc__WEBPACK_IMPORTED_MODULE_3__[/* cube */ "a"])(5));
console.log(Object(_multiFunc__WEBPACK_IMPORTED_MODULE_3__[/* square */ "b"])(5)); // console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)

if (false) {} // module.hot.accept('./print.js', function() {
//   console.log('Accepting the updated printMe module in index.js!');
//   printMe();
// })
// 需要加上才會啟動HMR


if (false) {}

function another_adder() {
  // Create a list of numbers in the function
  var other_nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]; // here, we are using the spread operator to concatenate numbers and other_nums into the same array,
  // in the same line where it is initialized.

  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  var all_nums = numbers.concat(other_nums);
  var total = 0;
  all_nums.forEach(function (n, i) {
    // Type check to avoid turning this thing into a string, or creating some other error.
    if (typeof n === 'number') {
      total += n;
    } else {
      console.log('can\'t add item at index' + i + '.');
    }
  });
  return total;
}

console.log(another_adder(1, 2, 3, 4, 5, 6, 7, 8));

var _x$y$a$b = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
},
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);

console.log(x); // 1

console.log(y); // 2

console.log(z); // { a: 3, b: 4 }

[5, 6].map(function (n) {
  return console.log(n);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))("./node_modules/lodash/lodash.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = vendor_83fa54c888428cefca23;

/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.a3135e97.js.map