(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Progress"] = factory(require("react"));
	else
		root["Progress"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var defaultProps = {
	  width: 500,
	  height: 80,
	  value: 0,
	  max: 100,
	  min: 0,
	  box: { x1: "2%", x2: "96%", y1: "30%", y2: "40%", widthK: 0.96 },
	  axis: { x1: "2%", x2: "98%", y1: "20%", y2: "80%", widthK: 0.98 },
	  ticks: [{ label: '0', value: 0 }, { label: '50', value: 50 }, { label: '100', value: 100 }]
	};

	exports["default"] = function (props) {

	  props = _extends({}, defaultProps, props);

	  function calcAxisPos(val) {
	    if (props.min === val) {
	      return props.axis.x1;
	    } else if (props.max === val) {
	      return props.axis.x2;
	    } else {
	      return (val - props.min) * (props.width * props.axis.widthK) / (props.max - props.min);
	    }
	  }

	  return _react2["default"].createElement(
	    "svg",
	    { width: props.width, height: props.height },
	    _react2["default"].createElement(
	      "defs",
	      null,
	      _react2["default"].createElement(
	        "linearGradient",
	        { id: "gradient", x1: props.box.x1, y1: props.box.y1, x2: props.box.x2, y2: props.box.y1, spreadMethod: "pad" },
	        _react2["default"].createElement("stop", { offset: "0%", stopColor: "red", stopOpacity: "1" }),
	        _react2["default"].createElement("stop", { offset: "50%", stopColor: "yellow", stopOpacity: "1" }),
	        _react2["default"].createElement("stop", { offset: "100%", stopColor: "green", stopOpacity: "1" })
	      )
	    ),
	    _react2["default"].createElement(
	      "g",
	      null,
	      _react2["default"].createElement("rect", { x: props.box.x1, y: props.box.y1, width: props.box.x2, height: props.box.y2, fill: "url(#gradient)" })
	    ),
	    _react2["default"].createElement(
	      "g",
	      null,
	      _react2["default"].createElement(
	        "text",
	        { textAnchor: "middle", x: calcAxisPos(props.value), y: props.axis.y1, fontSize: "12", fill: "#000" },
	        props.value
	      )
	    ),
	    _react2["default"].createElement(
	      "g",
	      null,
	      props.ticks.map(function (item) {
	        return _react2["default"].createElement("line", { y1: props.axis.y1, x1: calcAxisPos(item.value), y2: props.axis.y2, x2: calcAxisPos(item.value), strokeWidth: "2", stroke: "#fff" });
	      })
	    ),
	    _react2["default"].createElement(
	      "g",
	      null,
	      _react2["default"].createElement("line", { y1: props.box.y1, x1: calcAxisPos(props.value), y2: "70%", x2: calcAxisPos(props.value), strokeWidth: "1", stroke: "#000" })
	    ),
	    _react2["default"].createElement(
	      "g",
	      null,
	      _react2["default"].createElement("polygon", { points: calcAxisPos(props.value) + "," + (props.height * 0.5 - 4) + " " + (calcAxisPos(props.value) - 4) + "," + props.height * 0.5 + " " + calcAxisPos(props.value) + "," + (props.height * 0.5 + 4) + " " + (calcAxisPos(props.value) + 4) + "," + props.height * 0.5, fill: "#000", stroke: "purple", "stroke-width": "5" })
	    ),
	    _react2["default"].createElement(
	      "g",
	      null,
	      props.ticks.map(function (item) {
	        return _react2["default"].createElement(
	          "text",
	          { textAnchor: "middle", x: calcAxisPos(item.value), y: props.height, fontSize: "12", fill: "#000" },
	          item.label
	        );
	      })
	    )
	  );
	};

	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;