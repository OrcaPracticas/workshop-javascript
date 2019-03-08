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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/life-component.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/life-component.js":
/*!*******************************!*\
  !*** ./src/life-component.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _life_cycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./life-cycle */ \"./src/life-cycle/index.js\");\n\n\n\nconst random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);\n\n\nconsole.time(\"javascript\");\ndocument.onreadystatechange = () => {\n    const { readyState } = document;\n    if (readyState === \"complete\") {\n        window.customElements.define(\"custom-square\", _life_cycle__WEBPACK_IMPORTED_MODULE_0__[\"Cuadro\"]);\n        const $ADD = document.querySelector(\".add\");\n        const $UPDATE = document.querySelector(\".update\");\n        const $REMOVE = document.querySelector(\".remove\");\n\n        $ADD.onclick = () => {\n            // Create a custom square element\n            const $SQUARE = document.createElement(\"custom-square\");\n            const $ROW = document.querySelector(\"#demo\");\n            $SQUARE.setAttribute(\"l\", \"100\");\n            $SQUARE.setAttribute(\"c\", \"red\");\n            $ROW.appendChild($SQUARE);\n\n            $UPDATE.disabled = false;\n            $REMOVE.disabled = false;\n            $ADD.disabled = true;\n        };\n\n        $UPDATE.onclick = () => {\n            const $SQUARE = document.querySelector(\"custom-square\");\n            $SQUARE.setAttribute(\"l\", random(50, 300));\n            $SQUARE.setAttribute(\"c\", `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);\n        };\n\n        $REMOVE.onclick = () => {\n            // Remove the square\n            const $SQUARE = document.querySelector(\"custom-square\");\n            $SQUARE.remove();\n            $UPDATE.disabled = true;\n            $REMOVE.disabled = true;\n            $ADD.disabled = false;\n        };\n    }\n};\nconsole.timeEnd(\"javascript\");\n\n\n//# sourceURL=webpack:///./src/life-component.js?");

/***/ }),

/***/ "./src/life-cycle/Cuadro.js":
/*!**********************************!*\
  !*** ./src/life-cycle/Cuadro.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Update */ \"./src/life-cycle/Update.js\");\n\n\nclass Square extends HTMLElement {\n    static get observedAttributes() {\n        return [\"c\", \"l\"];\n    }\n\n    constructor() {\n    // Always call super first in constructor\n        super();\n\n        const shadow = this.attachShadow({ mode: \"open\" });\n\n        const div = document.createElement(\"div\");\n        const style = document.createElement(\"style\");\n        shadow.appendChild(style);\n        shadow.appendChild(div);\n    }\n\n    connectedCallback() {\n        console.log(\"Custom square element added to page.\");\n        Object(_Update__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this);\n    }\n\n    disconnectedCallback() {\n        console.log(\"Custom square element removed from page.\");\n    }\n\n    adoptedCallback() {\n        console.log(\"Custom square element moved to new page.\");\n    }\n\n    attributeChangedCallback(name, oldValue, newValue) {\n        console.log(\"Custom square element attributes changed.\");\n        Object(_Update__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);\n\n//# sourceURL=webpack:///./src/life-cycle/Cuadro.js?");

/***/ }),

/***/ "./src/life-cycle/Update.js":
/*!**********************************!*\
  !*** ./src/life-cycle/Update.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst updateStyle = (elem) => {\n    const shadow = elem.shadowRoot;\n    const childNodes = Array.from(shadow.childNodes);\n\n    childNodes.forEach((childNode) => {\n        if (childNode.nodeName === \"STYLE\") {\n            childNode.textContent = `\n                div {\n                    width: ${elem.getAttribute(\"l\")}px;\n                    height: ${elem.getAttribute(\"l\")}px;\n                    background-color: ${elem.getAttribute(\"c\")};\n                }`;\n        }\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateStyle);\n\n\n//# sourceURL=webpack:///./src/life-cycle/Update.js?");

/***/ }),

/***/ "./src/life-cycle/index.js":
/*!*********************************!*\
  !*** ./src/life-cycle/index.js ***!
  \*********************************/
/*! exports provided: Cuadro, Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cuadro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cuadro */ \"./src/life-cycle/Cuadro.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cuadro\", function() { return _Cuadro__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Update */ \"./src/life-cycle/Update.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Update\", function() { return _Update__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/life-cycle/index.js?");

/***/ })

/******/ });