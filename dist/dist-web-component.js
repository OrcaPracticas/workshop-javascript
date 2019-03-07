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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/web-component.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/createElement.js":
/*!***********************************!*\
  !*** ./src/data/createElement.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createElement = Object.create({ config: null, customSettings: null, contetPanel: null }, {\n    init:\n    {\n        get() {\n            this.config = {\n                tag: \"div\",\n                id: `id_${Math.random().toString(36).substr(2)}`,\n                label: \"empty\",\n            };\n            Object.assign(this.config, this.customSettings);\n        }, // get:function\n    }, // init\n    factory:\n    {\n        get() {\n            if (this.contetPanel !== null) {\n                const panel = document.createElement(this.config.tag);\n                let source = \"\";\n                let config = \"\";\n                const ENTRIES = Object.entries(this.config);\n                ENTRIES.forEach((item) => {\n                    const PROPERTY = item[0];\n                    config = this.config[PROPERTY];\n                    source = (PROPERTY === \"infoText\") ? `panel.innerHTML = '${config}';` : `panel.${PROPERTY} = '${config}';`;\n                    eval(source);\n                });\n\n                if (this.config.label !== \"\" && this.config.label !== \"empty\") {\n                    const tagLabel = document.createElement(\"label\");\n                    tagLabel.innerHTML = this.config.label;\n                    this.contetPanel.appendChild(tagLabel);\n                }// if (config.label != '' && config.label != 'empty')\n                this.contetPanel.appendChild(panel);\n                this.contetPanel = null;\n            }\n        }, // get:function()\n    }, // factory\n    create:\n    {\n        value(custom, selector = \"\") {\n            this.customSettings = custom;\n            this.contetPanel = (selector !== \"\") ? document.querySelector(selector) : document.body;\n            this.init;\n            this.factory;\n            return this.config.id;\n        }, // value\n    }, // create\n});// createElement\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n\n//# sourceURL=webpack:///./src/data/createElement.js?");

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, default */
/***/ (function(module) {

eval("module.exports = [{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"./\",\"image\":\"http://via.placeholder.com/306x229/336e26/FFFFFF/?text=1\",\"title\":\"Titulo 1\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 2\",\"image\":\"http://via.placeholder.com/306x229/f4d05f/FFFFFF/?text=2\",\"title\":\"Titulo 2\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 3\",\"image\":\"http://via.placeholder.com/306x229/501c56/FFFFFF/?text=3\",\"title\":\"Titulo 3\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 4\",\"image\":\"http://via.placeholder.com/306x229/81c27d/FFFFFF/?text=4\",\"title\":\"Titulo 4\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 5\",\"image\":\"http://via.placeholder.com/306x229/3a87cd/FFFFFF/?text=5\",\"title\":\"Titulo 5\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 6\",\"image\":\"http://via.placeholder.com/306x229/2f5a0c/FFFFFF/?text=6\",\"title\":\"Titulo 6\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 7\",\"image\":\"http://via.placeholder.com/306x229/dcb4ef/FFFFFF/?text=7\",\"title\":\"Titulo 7\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 8\",\"image\":\"http://via.placeholder.com/306x229/1c61e7/FFFFFF/?text=8\",\"title\":\"Titulo 8\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 9\",\"image\":\"http://via.placeholder.com/306x229/3bd59b/FFFFFF/?text=9\",\"title\":\"Titulo 9\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 10\",\"image\":\"http://via.placeholder.com/306x229/648ee2/FFFFFF/?text=10\",\"title\":\"Titulo 10\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 11\",\"image\":\"http://via.placeholder.com/306x229/31871a/FFFFFF/?text=11\",\"title\":\"Titulo 11\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 12\",\"image\":\"http://via.placeholder.com/306x229/a5064b/FFFFFF/?text=12\",\"title\":\"Titulo 12\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 13\",\"image\":\"http://via.placeholder.com/306x229/98c811/FFFFFF/?text=13\",\"title\":\"Titulo 13\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 14\",\"image\":\"http://via.placeholder.com/306x229/8ccfda/FFFFFF/?text=14\",\"title\":\"Titulo 14\"},{\"description\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"link\":\"Link 15\",\"image\":\"http://via.placeholder.com/306x229/ccdb7a/FFFFFF/?text=15\",\"title\":\"Titulo 15\"}];\n\n//# sourceURL=webpack:///./src/data/data.json?");

/***/ }),

/***/ "./src/javascript/Action.js":
/*!**********************************!*\
  !*** ./src/javascript/Action.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TEMPLATE = document.createElement(\"template\");\n\nTEMPLATE.innerHTML = `\n    <style>\n        div a {\n            color: #ffab40;\n            margin-right: 24px;\n            -webkit-transition: color .3s ease;\n            transition: color .3s ease;\n            text-transform: uppercase;\n            text-decoration: none;\n        }\n    </style>\n    <div class=\"card-action\">\n        <a></a>\n    </div>\n `;\n\nclass Action extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));\n        this.anchor = this.shadowRoot.querySelector(\"a\");\n    }\n\n    get title() {\n        const TEXT = this.getAttribute(\"title\");\n        return TEXT || \"Default\";\n    }\n\n    get link() {\n        return this.getAttribute(\"link\");\n    }\n\n    connectedCallback() {\n        this.anchor.href = this.link;\n        this.anchor.innerText = this.title;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Action);\n\n\n//# sourceURL=webpack:///./src/javascript/Action.js?");

/***/ }),

/***/ "./src/javascript/Card.js":
/*!********************************!*\
  !*** ./src/javascript/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Card extends HTMLElement {\n    connectedCallback() {\n        this.innerHTML = `\n            <div class=\"col s2 m4\">\n                <div class=\"card\">\n                    <web-poster title=\"${this.title}\" image=\"${this.image}\"></web-poster>\n                    <web-description description=\"${this.description}\"></web-description>\n                    <web-action title=\"${this.title}\" link=\"${this.link}\"></web-action>\n                </div>\n            </div>\n        `;\n    }\n\n    set description(newValue) {\n        this.setAttribute(\"description\", newValue);\n    }\n\n    set link(newValue) {\n        this.setAttribute(\"link\", newValue);\n    }\n\n    set image(newValue) {\n        this.setAttribute(\"image\", newValue);\n    }\n\n    set title(newValue) {\n        this.setAttribute(\"title\", newValue);\n    }\n\n\n    get description() {\n        return this.getAttribute(\"description\") || \"\";\n    }\n\n    get link() {\n        return this.getAttribute(\"link\") || \"\";\n    }\n\n    get image() {\n        return this.getAttribute(\"image\") || \"\";\n    }\n\n    get title() {\n        return this.getAttribute(\"title\") || \"\";\n    }\n\n    disconnectedCallback() {\n        console.log(\"adios\");\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n\n//# sourceURL=webpack:///./src/javascript/Card.js?");

/***/ }),

/***/ "./src/javascript/Description.js":
/*!***************************************!*\
  !*** ./src/javascript/Description.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Description extends HTMLElement {\n    connectedCallback() {\n        this.innerHTML = `\n            <div class=\"card-content\">\n                <p>${this.description}</p>\n            </div>\n        `;\n    }\n\n    get description() {\n        const DESC = this.getAttribute(\"description\");\n        return DESC || \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\";\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\n\n//# sourceURL=webpack:///./src/javascript/Description.js?");

/***/ }),

/***/ "./src/javascript/Poster.js":
/*!**********************************!*\
  !*** ./src/javascript/Poster.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Poster extends HTMLElement {\n    connectedCallback() {\n        this.innerHTML = `\n            <div class=\"card-image\">\n                <img alt=\"demo\" src=${this.image} />\n                <span class=\"card-title\">${this.title}</span>\n            </div>\n        `;\n    }\n\n    get image() {\n        const SRC = this.getAttribute(\"image\") || \"http://via.placeholder.com/306x229/c0c0c0/000000/?text=placeholder\";\n        return SRC;\n    }\n\n    get title() {\n        const TITLE = this.getAttribute(\"title\");\n        return TITLE || \"Default\";\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poster);\n\n\n//# sourceURL=webpack:///./src/javascript/Poster.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! exports provided: Description, Action, Card, Poster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Description */ \"./src/javascript/Description.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return _Description__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ \"./src/javascript/Action.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Action\", function() { return _Action__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/javascript/Card.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return _Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Poster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Poster */ \"./src/javascript/Poster.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Poster\", function() { return _Poster__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/web-component.js":
/*!******************************!*\
  !*** ./src/web-component.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript */ \"./src/javascript/index.js\");\n/* harmony import */ var _data_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/createElement */ \"./src/data/createElement.js\");\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/data.json */ \"./src/data/data.json\");\nvar _data_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/data.json */ \"./src/data/data.json\", 1);\n\n\n\n\nconsole.time(\"javascript\");\ndocument.onreadystatechange = () => {\n    const { readyState } = document;\n    if (readyState === \"complete\") {\n        window.createElement = _data_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const WEB_COMPONETS = new Map(Object.entries(_javascript__WEBPACK_IMPORTED_MODULE_0__));\n        WEB_COMPONETS.forEach((component, tag) => {\n            const TAG = tag.toLowerCase();\n            window.customElements.define(`web-${TAG}`, component);\n        });\n        _data_data_json__WEBPACK_IMPORTED_MODULE_2__.forEach((item) => {\n            _data_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({ tag: \"web-card\", ...item }, \".row\");\n        });\n    }\n};\nconsole.timeEnd(\"javascript\");\n\n//# sourceURL=webpack:///./src/web-component.js?");

/***/ })

/******/ });