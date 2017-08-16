/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _game = __webpack_require__(1);

	var _game2 = _interopRequireDefault(_game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');

	$('document').ready(function () {
		var game = new _game2.default();

		console.log(game);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function Game() {
		var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var score = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var paddleSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
		var ballSpeed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

		_classCallCheck(this, Game);

		this.level = level;
		this.score = score;
		this.paddle = new Paddle(paddleSize);
		this.ball = new Ball(ballSpeed);
	};

	module.exports = Game;

/***/ })
/******/ ]);