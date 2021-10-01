(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./counter_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/counter_controller.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
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
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/counter_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/counter_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "count", 0);

    return _this;
  }

  _createClass(_default, [{
    key: "increment",
    value: function increment() {
      this.count++;
      this.countTarget.innerHTML = this.count;
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);

_defineProperty(_default, "targets", ["count"]);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
      return /*#__PURE__*/React.createElement("div", null, "What the fuck");
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./assets/components/Home.jsx");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application

 // console.log("window.listeImages", window.listeImages);




react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.getElementById("root")); // hot reloading. It works by replacing a module of the application 
// during runtime with an updated one so that it’s available for instant use.
// module.hot.accept();

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/components/Home.jsx":
/*!************************************!*\
  !*** ./assets/components/Home.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/Fab.js");
/* harmony import */ var _material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/icons/SaveOutlined */ "./node_modules/@material-ui/icons/SaveOutlined.js");
/* harmony import */ var _material_ui_icons_BlockOutlined__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/icons/BlockOutlined */ "./node_modules/@material-ui/icons/BlockOutlined.js");
/* harmony import */ var _material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/icons/EditOutlined */ "./node_modules/@material-ui/icons/EditOutlined.js");
/* harmony import */ var _MovableCard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./MovableCard */ "./assets/components/MovableCard.jsx");
/* harmony import */ var _ImageViewer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ImageViewer */ "./assets/components/ImageViewer.jsx");
/* harmony import */ var _sub_components_thumbnail__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sub-components/thumbnail */ "./assets/components/sub-components/thumbnail.jsx");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./context/Context */ "./assets/components/context/Context.jsx");
/* harmony import */ var _TodoTable__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./TodoTable */ "./assets/components/TodoTable.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





 // import ModeEditOutlineOutlinedIcon from "@material-ui/icons/ModeEditOutlined";
// import ModeEditOutlinedIcon from "@material-ui/icons/ModeEditOutlined";








var ImagesGallery = /*#__PURE__*/function (_React$Component) {
  _inherits(ImagesGallery, _React$Component);

  var _super = _createSuper(ImagesGallery);

  function ImagesGallery(props) {
    var _this;

    _classCallCheck(this, ImagesGallery);

    // console.log("props", props);
    _this = _super.call(this, props);

    var listeImagesTriee = _this.buildDisplayList(props.listeImages); //filter pour supprimer les undefined
    // listeImagesTriee = listeImagesTriee.filter((image) => image != undefined);
    //tri en fonctin de orderInPage


    _this.state = {
      imageAVisualiser: undefined,
      afficherImage: false,
      listeImages: props.listeImages,
      draggedPosition: undefined,
      listeImagesTriee: listeImagesTriee,
      modeEdition: false
    };
    _this.setDraggedPosition = _this.setDraggedPosition.bind(_assertThisInitialized(_this));
    _this.moveImage = _this.moveImage.bind(_assertThisInitialized(_this));
    _this.listOrEmptyCard = _this.listOrEmptyCard.bind(_assertThisInitialized(_this));
    _this.saveDisposition = _this.saveDisposition.bind(_assertThisInitialized(_this));
    _this.setAfficherImage = _this.setAfficherImage.bind(_assertThisInitialized(_this));
    _this.switchEditMode = _this.switchEditMode.bind(_assertThisInitialized(_this));
    _this.discardDisposition = _this.discardDisposition.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ImagesGallery, [{
    key: "buildDisplayList",
    value: function buildDisplayList(listeImages) {
      var listeImagesTriee = [];
      listeImages.forEach(function (image) {
        if (listeImagesTriee[image.sectionId] == undefined) {
          listeImagesTriee[image.sectionId] = [];
          listeImagesTriee[image.sectionId][0] = [];
          listeImagesTriee[image.sectionId][1] = [];
          listeImagesTriee[image.sectionId][2] = [];
        }

        listeImagesTriee[image.sectionId][image.col][image.row] = image;
      });
      Object.keys(this.props.sectionMapNameId).forEach(function (sectionId) {
        if (listeImagesTriee[sectionId] == undefined) {
          listeImagesTriee[sectionId] = [];
          listeImagesTriee[sectionId][0] = [];
          listeImagesTriee[sectionId][1] = [];
          listeImagesTriee[sectionId][2] = [];
        }
      });
      return listeImagesTriee;
    }
  }, {
    key: "setDraggedPositionOLD",
    value: function setDraggedPositionOLD(draggedPosition) {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        draggedPosition: draggedPosition
      }));
    }
  }, {
    key: "setDraggedPosition",
    value: function setDraggedPosition(draggedImage) {
      this.setState({
        draggedImage: draggedImage
      });
    }
  }, {
    key: "moveImage",
    value: function moveImage(landingImage) {
      var draggedImage = this.state.draggedImage;
      if (landingImage.imageId == draggedImage.imageId) return;

      var newList = _toConsumableArray(this.state.listeImages);

      draggedImage.sectionId = landingImage.sectionId;
      draggedImage.row = landingImage.row;
      draggedImage.col = landingImage.col;
      landingImage.row++;
      var draggedIndex = this.state.listeImages.findIndex(function (image) {
        return image.imageId === draggedImage.imageId;
      });
      var landingIndex = this.state.listeImages.findIndex(function (image) {
        return image.imageId === landingImage.imageId;
      });
      newList[draggedIndex] = draggedImage;
      if (!landingImage.isEmpty) newList[landingIndex] = landingImage;
      var listeImagesTriee = this.buildDisplayList(newList);
      this.setState({
        listeImages: newList,
        listeImagesTriee: listeImagesTriee
      }); // landingImage();
    }
  }, {
    key: "moveImageOLD",
    value: function moveImageOLD(landingPosition) {
      var _recapModifList;

      var draggedSection = this.state.draggedPosition.section;
      var draggedColumn = this.state.draggedPosition.column;
      var draggedRow = this.state.draggedPosition.row;
      var landingSection = landingPosition.section;
      var landingColumn = landingPosition.column;
      var landingRow = landingPosition.row;
      if (landingPosition === this.state.draggedPosition) return;
      var draggedList = this.state.listeImagesTriee[draggedSection];
      var landingList = this.state.listeImagesTriee[landingSection];
      var movedImage = draggedList[draggedColumn].splice(draggedRow, 1)[0];

      if (landingSection != draggedSection) {
        movedImage.category = landingSection;
      }

      landingList[landingColumn].splice(landingRow, 0, movedImage);
      var recapModifList;
      recapModifList = (_recapModifList = {}, _defineProperty(_recapModifList, draggedSection, draggedList), _defineProperty(_recapModifList, landingSection, landingList), _recapModifList);

      var newListeGlobale = _objectSpread(_objectSpread({}, this.state.listeImagesTriee), recapModifList); // console.log("newListeGlobale", newListeGlobale);


      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        listeImagesTriee: newListeGlobale
      }));
    }
  }, {
    key: "listOrEmptyCard",
    value: function listOrEmptyCard(rows) {
      var _this2 = this;

      // if (rows.length === 0)
      //   return (
      //     <MovableCard
      //       key={"empty-column-" + Date.now()}
      //       image={{ isEmpty: true }}
      //       moveImage={this.moveImage}
      //     />
      //   );
      return rows.map(function (image, row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_MovableCard__WEBPACK_IMPORTED_MODULE_29__["default"], {
          key: image.id,
          image: image,
          moveImage: _this2.moveImage,
          modeEdition: _this2.state.modeEdition // position={{
          //   row,
          //   column,
          //   section,
          //   imageId: image.id,
          //   sectionId: image.category,
          // }}
          ,
          setDraggedPosition: _this2.setDraggedPosition,
          displayImage: function displayImage(image) {
            _this2.setState({
              imageAVisualiser: image,
              afficherImage: true
            });
          }
        }) // </div>
        ;
      });
    }
  }, {
    key: "saveDisposition",
    value: function saveDisposition() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_28___default()({
        method: "POST",
        url: "/api",
        data: {
          type: "frontDispo",
          disposition: this.state.listeImagesTriee
        }
      }).then(function (response) {
        console.log("Category post / success : ", response.data);
        _sub_components_thumbnail__WEBPACK_IMPORTED_MODULE_31__["default"].message({
          content: "Configuration sauvegardée",
          thumbnailType: "success"
        });

        _this3.switchEditMode();
      })["catch"](function (err) {
        console.log(err);
        _sub_components_thumbnail__WEBPACK_IMPORTED_MODULE_31__["default"].message({
          content: "Erreur lors de l'enregistrement",
          thumbnailType: "error"
        });
      });
    }
  }, {
    key: "discardDisposition",
    value: function discardDisposition() {
      this.switchEditMode();
    }
  }, {
    key: "setAfficherImage",
    value: function setAfficherImage(value) {
      this.setState({
        afficherImage: value
      });
    }
  }, {
    key: "switchEditMode",
    value: function switchEditMode() {
      this.setState({
        modeEdition: !this.state.modeEdition
      });
    }
  }, {
    key: "sectionName",
    value: function sectionName(sectionId) {
      // for (let column of section) {
      //   for (let row of column) {
      //     return row.sectionName;
      //   }
      // }
      // return "";
      return this.props.sectionMapNameId[sectionId];
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var floatingButtonStyle = function floatingButtonStyle(type) {
        return {
          position: "fixed",
          right: type == "annuler" ? "1%" : "12%",
          width: type != "edition" ? 160 : "",
          bottom: "10%",
          zIndex: 20
        };
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(react__WEBPACK_IMPORTED_MODULE_27__.Fragment, null, this.state.listeImagesTriee.map(function (section, sectionId) {
        return section == undefined ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement("div", {
          className: "breadcrumb",
          key: sectionId
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement("h3", null, _this4.sectionName(sectionId)), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement("div", {
          className: "section row",
          style: {
            width: "100%"
          }
        }, section.map(function (rows, col) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement("div", {
            className: "col-sm",
            style: {
              display: "flex",
              flexDirection: "column"
            },
            key: "column-" + col
          }, _this4.listOrEmptyCard(rows), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_MovableCard__WEBPACK_IMPORTED_MODULE_29__["default"], {
            key: "empty-column-" + col,
            image: {
              isEmpty: true,
              col: col,
              row: rows.length,
              sectionId: sectionId
            },
            moveImage: _this4.moveImage // position={{
            //   row: row.length,
            //   col,
            //   section,
            //   sectionId: section,
            // }}

          }));
        })));
      }), this.state.modeEdition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_34__["default"], {
        variant: "extended",
        style: floatingButtonStyle("valider"),
        color: "primary",
        onClick: this.saveDisposition
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_35__["default"], {
        sx: {
          mr: 1
        }
      }), "Enregistrer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_34__["default"], {
        variant: "extended",
        style: floatingButtonStyle("annuler"),
        color: "secondary",
        onClick: this.discardDisposition
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_material_ui_icons_BlockOutlined__WEBPACK_IMPORTED_MODULE_36__["default"], {
        sx: {
          mr: 1
        }
      }), "Annuler")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_34__["default"], {
        variant: "extended",
        style: floatingButtonStyle("edition"),
        color: "primary",
        onClick: this.switchEditMode
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_37__["default"], {
        sx: {
          mr: 1
        }
      }), "Mode Edition")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_ImageViewer__WEBPACK_IMPORTED_MODULE_30__["default"], {
        image: this.state.imageAVisualiser,
        visible: this.state.afficherImage,
        setVisibility: this.setAfficherImage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(_sub_components_thumbnail__WEBPACK_IMPORTED_MODULE_31__["default"], null));
    }
  }]);

  return ImagesGallery;
}(react__WEBPACK_IMPORTED_MODULE_27__.Component);

var SymfonyData = window.symfonyDataBinding;
var currentRoute = SymfonyData.reactRoute;

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(react__WEBPACK_IMPORTED_MODULE_27__.Fragment, null, currentRoute == "book" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement(ImagesGallery, SymfonyData.data) : "", currentRoute == "contact" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27__.createElement("h3", null, "Contact") : "");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/components/ImageViewer.jsx":
/*!*******************************************!*\
  !*** ./assets/components/ImageViewer.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageViewer)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/Transition.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var transitionStyles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};

var ImageViewer = /*#__PURE__*/function (_React$Component) {
  _inherits(ImageViewer, _React$Component);

  var _super = _createSuper(ImageViewer);

  function ImageViewer(props) {
    var _this;

    _classCallCheck(this, ImageViewer);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(ImageViewer, [{
    key: "grayMaskStyle",
    value: function grayMaskStyle() {
      return {
        display: this.props.visible ? "block" : "none",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 20
      };
    }
  }, {
    key: "imageStyle",
    value: function imageStyle() {
      return {
        position: "fixed",
        top: "10%",
        height: "80%",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0,0,0,0.5)",
        zIndex: 30
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_21__["default"], {
        "in": this.props.visible,
        timeout: 500
      }, function (state) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
          style: _objectSpread({
            opacity: 0,
            transition: "opacity 500ms"
          }, transitionStyles[state])
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("img", {
          src: "uploads/" + _this2.props.image.imageFile,
          alt: _this2.props.image.name,
          style: _this2.imageStyle()
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
          className: "gray-mask",
          style: _this2.grayMaskStyle(),
          onClick: function onClick() {
            return _this2.props.setVisibility(false);
          }
        }));
      });
    }
  }]);

  return ImageViewer;
}(react__WEBPACK_IMPORTED_MODULE_20__.Component);


ImageViewer.defaultProps = {
  image: {
    src: "",
    name: ""
  }
};

/***/ }),

/***/ "./assets/components/MovableCard.jsx":
/*!*******************************************!*\
  !*** ./assets/components/MovableCard.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovableCard)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MovableCard = /*#__PURE__*/function (_React$Component) {
  _inherits(MovableCard, _React$Component);

  var _super = _createSuper(MovableCard);

  // const [dragHovered, setDragHovered] = useState(false);
  function MovableCard(props) {
    var _this;

    _classCallCheck(this, MovableCard);

    _this = _super.call(this, props);
    _this.state = {
      dragHovered: false,
      // La carte est-elle survolée par une carte draggée ?
      // Styles
      whiteColumn: {
        height: "100%",
        width: "100%"
      },
      infoDeplacement: {
        textAlign: "center",
        fontSize: "15px"
      },
      displayCutness: true,
      displayGrayMask: false
    };
    _this.styleFromDragHover = _this.styleFromDragHover.bind(_assertThisInitialized(_this));
    _this.setDragHovered = _this.setDragHovered.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MovableCard, [{
    key: "styleFromDragHover",
    value: function styleFromDragHover() {
      return this.state.dragHovered ? {
        transition: "top 0.2s",
        position: "relative",
        top: "100px",
        zIndex: 0
      } : {
        transition: "top 0.2s",
        position: "relative",
        top: "0",
        zIndex: 0
      };
    }
  }, {
    key: "styleFromDragHoverWhiteColumn",
    value: function styleFromDragHoverWhiteColumn() {
      return _objectSpread(_objectSpread({}, this.state.dragHovered ? {
        background: "rgba(0,0,0,0.2)",
        height: "100%",
        width: "100%"
      } : {
        background: "rgba(0,0,0,0.0)",
        height: "100%",
        width: "100%"
      }), {}, {
        display: "flex",
        minHeight: 100,
        width: "100%",
        zIndex: 10
      });
    }
  }, {
    key: "setDragHovered",
    value: function setDragHovered(status) {
      this.setState({
        dragHovered: status
      });
    }
  }, {
    key: "mainCardStyle",
    value: function mainCardStyle() {
      return {
        userSelect: "none" // overflow: "hidden",

      };
    }
  }, {
    key: "styleFromHover",
    value: function styleFromHover() {
      return {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "left",
        fontSize: "1.5rem",
        position: "absolute",
        padding: "100px 40px",
        cursor: "pointer",
        zIndex: 10,
        color: this.state.displayGrayMask ? "rgba(50,50,50,1)" : "rgba(10,10,10,0)",
        background: this.state.displayGrayMask ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0)",
        transition: "background 500ms, color 500ms",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%"
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.image.isEmpty) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
          // className={"card shadow-sm mt-3"}
          style: _objectSpread({}, this.styleFromDragHoverWhiteColumn()),
          onDragEnter: function onDragEnter(e) {
            _this2.setDragHovered(true);

            e.stopPropagation();
            e.preventDefault();
          },
          onDragLeave: function onDragLeave(e) {
            _this2.setDragHovered(false);

            e.stopPropagation();
            e.preventDefault();
          },
          onDrop: function onDrop(e) {
            _this2.setDragHovered(false);

            _this2.props.moveImage(_this2.props.image);
          },
          onDragOver: function onDragOver(e) {
            e.stopPropagation();
            e.preventDefault();
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
          style: this.state.whiteColumn
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "card shadow-sm mt-3",
        style: this.mainCardStyle(),
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            displayGrayMask: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            displayGrayMask: false
          });
        },
        onClick: function onClick() {
          _this2.props.displayImage.bind(_this2, _this2.props.image)();

          _this2.setState({
            displayGrayMask: false
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        style: {
          position: "absolute",
          top: "10px",
          left: 0,
          zIndex: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("img", {
        src: "assets/images/pitichat.png",
        alt: "pitichat"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        style: this.styleFromDragHover()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("img", {
        src: "uploads/" + this.props.image.imageFile,
        alt: this.props.image.name,
        width: "100%"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        draggable: this.props.modeEdition,
        style: this.styleFromHover(),
        onDragEnter: function onDragEnter(e) {
          _this2.setDragHovered(true);

          _this2.setState({
            displayCutness: false
          }, function () {
            return setTimeout(function () {
              _this2.setState({
                displayCutness: true
              });
            }, 200);
          });

          e.stopPropagation();
          e.preventDefault();
        },
        onDragLeave: function onDragLeave(e) {
          _this2.setDragHovered(false);

          e.stopPropagation();
          e.preventDefault();
        },
        onDragOver: function onDragOver(e) {
          e.stopPropagation();
          e.preventDefault();
        },
        onDrop: function onDrop(e) {
          _this2.setDragHovered(false);

          _this2.props.moveImage(_this2.props.image);
        },
        onDragStart: function onDragStart() {
          return _this2.props.setDraggedPosition(_this2.props.image);
        }
      }, this.props.image.name));
    }
  }]);

  return MovableCard;
}(react__WEBPACK_IMPORTED_MODULE_22__.Component);


MovableCard.defaultProps = {
  displayImage: function displayImage() {}
};

/***/ }),

/***/ "./assets/components/TodoTable.jsx":
/*!*****************************************!*\
  !*** ./assets/components/TodoTable.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/Context */ "./assets/components/context/Context.jsx");



function TodoTable() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_1__.Context);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, context.todos);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoTable);

/***/ }),

/***/ "./assets/components/context/Context.jsx":
/*!***********************************************!*\
  !*** ./assets/components/context/Context.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context),
/* harmony export */   "ContextProvider": () => (/* binding */ ContextProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createContext();
var ContextProvider = /*#__PURE__*/function (_Component) {
  _inherits(ContextProvider, _Component);

  var _super = _createSuper(ContextProvider);

  function ContextProvider(props) {
    var _this;

    _classCallCheck(this, ContextProvider);

    _this = _super.call(this, props);
    _this.state = {
      todos: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", null, "Element 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", null, "Element 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", null, "Element 3")]
    };
    return _this;
  } //create


  _createClass(ContextProvider, [{
    key: "createTodo",
    value: function createTodo() {} //read

  }, {
    key: "readTodos",
    value: function readTodos() {} //update

  }, {
    key: "updateTodo",
    value: function updateTodo() {} //delete

  }, {
    key: "deleteTodo",
    value: function deleteTodo() {}
  }, {
    key: "render",
    value: function render() {
      var _objectSpread2;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement(Context.Provider, {
        value: _objectSpread(_objectSpread({}, this.state), {}, (_objectSpread2 = {
          createTodo: this.createTodo.bind(this)
        }, _defineProperty(_objectSpread2, "createTodo", this.readTodos.bind(this)), _defineProperty(_objectSpread2, "createTodo", this.updateTodo.bind(this)), _defineProperty(_objectSpread2, "createTodo", this.deleteTodo.bind(this)), _objectSpread2))
      }, this.props.children);
    }
  }]);

  return ContextProvider;
}(react__WEBPACK_IMPORTED_MODULE_20__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);

/***/ }),

/***/ "./assets/components/sub-components/thumbnail.jsx":
/*!********************************************************!*\
  !*** ./assets/components/sub-components/thumbnail.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumbnail)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _thumbnail_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./thumbnail.scss */ "./assets/components/sub-components/thumbnail.scss");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }























function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




function defIfUndef(value, defaultValue) {
  return value === undefined ? defaultValue : value;
}

var Thumbnail = /*#__PURE__*/function (_React$Component) {
  _inherits(Thumbnail, _React$Component);

  var _super = _createSuper(Thumbnail);

  function Thumbnail(props) {
    var _this;

    _classCallCheck(this, Thumbnail);

    _this = _super.call(this, props);
    var defaultParams = {
      content: "Contenu",
      // visible: false, // visibility
      autoHide: true,
      // to use auto hide, v-model with a boolean for visibility must exist in parent component
      autoHideTime: 3000,
      // // sets timeout before close in ms
      closeCross: false,
      //displays cross on the right to close thumbnail
      position: "center",
      // right, left, centered available, thumbnail will always be on the bottom of th screen
      thumbnailType: "neutral",
      // neutral, success, error - changes the background color
      detailsButton: false,
      width: "auto",
      computedStyle: {
        bottom: "-100px"
      },
      showDetails: function showDetails() {
        console.warn("No function was provided to Thumbnail 'showDetails' prop");
      }
    };
    _this.state = _objectSpread({
      setParams: defaultParams
    }, defaultParams);
    _this.hideThumbnail = _this.hideThumbnail.bind(_assertThisInitialized(_this));
    _this.computedClass = _this.computedClass.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Thumbnail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Thumbnail.showThumbnail = Thumbnail.showThumbnail.bind(this);
      Thumbnail.message = Thumbnail.message.bind(this);
      Thumbnail.set = Thumbnail.set.bind(this);
    }
  }, {
    key: "hideThumbnail",
    value: function hideThumbnail() {
      this.setState({
        computedStyle: {
          bottom: "-100px",
          opacity: "0"
        }
      });
    }
  }, {
    key: "computedClass",
    value: function computedClass() {
      return "composant-Thumbnail " + this.state.position + " " + this.state.thumbnailType.toLowerCase();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("div", {
        // v-if="visible"
        className: this.computedClass() // :style="`width: ${width};`"
        // onClick={this.hideThumbnail}
        ,
        style: this.state.computedStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("div", {
        className: "texte-Thumbnail"
      }, this.state.content), this.state.closeCross || !this.state.autoHide ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("div", {
        "v-if": "closeCross",
        className: "frame-croix clickable",
        title: "fermer",
        onClick: this.hideThumbnail
      }, "\u2716\uFE0F") : "", this.state.detailsButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("div", {
        className: "get-details clickable",
        title: "d\xE9tails",
        onClick: this.state.showDetails
      }, "\u2139\uFE0F") : ""));
    }
  }], [{
    key: "set",
    value: function set(params) {
      var newSetParams = _objectSpread(_objectSpread({}, this.state.setParams), params);

      this.setState({
        setParams: newSetParams
      });
    }
  }, {
    key: "message",
    value: function message(params) {
      var _this2 = this;

      params = defIfUndef(params, {});
      setTimeout(function () {
        // used to let the Thumbnail.set to be effective
        for (var param in _this2.state.setParams) {
          params[param] = defIfUndef(params[param], _this2.state.setParams[param]); // if params[param] === undefined, sets it with this.state.setParams[param]
        }

        _this2.setState(_objectSpread({}, params), function () {
          Thumbnail.showThumbnail();
        });
      }, 100);
    }
  }, {
    key: "showThumbnail",
    value: function showThumbnail() {
      var _this3 = this;

      this.setState({
        computedStyle: {
          bottom: "3vh",
          opacity: "100"
        }
      }, function () {
        if (_this3.state.autoHide) setTimeout(function () {
          _this3.hideThumbnail();
        }, _this3.state.autoHideTime);
      });
    }
  }]);

  return Thumbnail;
}(react__WEBPACK_IMPORTED_MODULE_21__.Component);


Thumbnail.defaultProps = {
  content: "Contenu",
  autoHide: true,
  // to use auto hide, v-model with a boolean for visibility must exist in parent component
  autoHideTime: 3000,
  // // sets timeout before close in ms
  closeCross: true,
  //displays cross on the right to close thumbnail
  position: "center",
  // right, left, centered available, thumbnail will always be on the bottom of th screen
  thumbnailType: "neutral",
  // neutral, success, error - changes the background color
  detailsButton: false,
  width: "auto"
};

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/components/sub-components/thumbnail.scss":
/*!*********************************************************!*\
  !*** ./assets/components/sub-components/thumbnail.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_material-ui_core_Fab_Fab_js-node_modules_material-ui_icons_BlockOutlined-a205ca"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBTCxDQUFXMkksUUFBZixFQUNFYixVQUFVLENBQUMsWUFBTTtBQUNmLGdCQUFJLENBQUNxQixhQUFMO0FBQ0QsU0FGUyxFQUVQLE1BQUksQ0FBQ25KLEtBQUwsQ0FBVzRJLFlBRkosQ0FBVjtBQUdILE9BTEQ7QUFNRDs7OztFQTNEb0N0Szs7O0FBa0h2Q2tCLFNBQVMsQ0FBQzRHLFlBQVYsR0FBeUI7QUFDdkJ4QyxFQUFBQSxPQUFPLEVBQUUsU0FEYztBQUV2QitFLEVBQUFBLFFBQVEsRUFBRSxJQUZhO0FBRVA7QUFDaEJDLEVBQUFBLFlBQVksRUFBRSxJQUhTO0FBR0g7QUFDcEJDLEVBQUFBLFVBQVUsRUFBRSxJQUpXO0FBSUw7QUFDbEI1RSxFQUFBQSxRQUFRLEVBQUUsUUFMYTtBQUtIO0FBQ3BCSixFQUFBQSxhQUFhLEVBQUUsU0FOUTtBQU1HO0FBQzFCaUYsRUFBQUEsYUFBYSxFQUFFLEtBUFE7QUFRdkIzRSxFQUFBQSxLQUFLLEVBQUU7QUFSZ0IsQ0FBekI7Ozs7Ozs7Ozs7OztBQ3pIQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY291bnRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9JbWFnZVZpZXdlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTW92YWJsZUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1RvZG9UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29udGV4dC9Db250ZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zdWItY29tcG9uZW50cy90aHVtYm5haWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zdWItY29tcG9uZW50cy90aHVtYm5haWwuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vY291bnRlcl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY291bnRlcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwic3RpbXVsdXNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICBzdGF0aWMgdGFyZ2V0cyA9IFtcImNvdW50XCJdXHJcbiAgY291bnQgPSAwXHJcblxyXG4gIGluY3JlbWVudCgpIHtcclxuICAgIHRoaXMuY291bnQrKztcclxuICAgIHRoaXMuY291bnRUYXJnZXQuaW5uZXJIVE1MID0gdGhpcy5jb3VudFxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgICAgIHJldHVybiA8ZGl2PldoYXQgdGhlIGZ1Y2s8L2Rpdj5cbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gY29uc29sZS5sb2coXCJ3aW5kb3cubGlzdGVJbWFnZXNcIiwgd2luZG93Lmxpc3RlSW1hZ2VzKTtcblxuXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lXCI7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuXG4vLyBob3QgcmVsb2FkaW5nLiBJdCB3b3JrcyBieSByZXBsYWNpbmcgYSBtb2R1bGUgb2YgdGhlIGFwcGxpY2F0aW9uIFxuLy8gZHVyaW5nIHJ1bnRpbWUgd2l0aCBhbiB1cGRhdGVkIG9uZSBzbyB0aGF0IGl04oCZcyBhdmFpbGFibGUgZm9yIGluc3RhbnQgdXNlLlxuLy8gbW9kdWxlLmhvdC5hY2NlcHQoKTtcblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCBGYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiO1xyXG5pbXBvcnQgU2F2ZU91dGxpbmVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NhdmVPdXRsaW5lZFwiO1xyXG5pbXBvcnQgQmxvY2tPdXRsaW5lZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9CbG9ja091dGxpbmVkXCI7XHJcbi8vIGltcG9ydCBNb2RlRWRpdE91dGxpbmVPdXRsaW5lZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb2RlRWRpdE91dGxpbmVkXCI7XHJcbi8vIGltcG9ydCBNb2RlRWRpdE91dGxpbmVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vZGVFZGl0T3V0bGluZWRcIjtcclxuaW1wb3J0IEVkaXRPdXRsaW5lZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0T3V0bGluZWRcIjtcclxuaW1wb3J0IE1vdmFibGVDYXJkIGZyb20gXCIuL01vdmFibGVDYXJkXCI7XHJcbmltcG9ydCBJbWFnZVZpZXdlciBmcm9tIFwiLi9JbWFnZVZpZXdlclwiO1xyXG5pbXBvcnQgVGh1bWJuYWlsIGZyb20gXCIuL3N1Yi1jb21wb25lbnRzL3RodW1ibmFpbFwiO1xyXG5pbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuL2NvbnRleHQvQ29udGV4dFwiO1xyXG5pbXBvcnQgVG9kb1RhYmxlIGZyb20gXCIuL1RvZG9UYWJsZVwiO1xyXG5cclxuY2xhc3MgSW1hZ2VzR2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicHJvcHNcIiwgcHJvcHMpO1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIGxldCBsaXN0ZUltYWdlc1RyaWVlID0gdGhpcy5idWlsZERpc3BsYXlMaXN0KHByb3BzLmxpc3RlSW1hZ2VzKTtcclxuICAgIC8vZmlsdGVyIHBvdXIgc3VwcHJpbWVyIGxlcyB1bmRlZmluZWRcclxuXHJcbiAgICAvLyBsaXN0ZUltYWdlc1RyaWVlID0gbGlzdGVJbWFnZXNUcmllZS5maWx0ZXIoKGltYWdlKSA9PiBpbWFnZSAhPSB1bmRlZmluZWQpO1xyXG5cclxuICAgIC8vdHJpIGVuIGZvbmN0aW4gZGUgb3JkZXJJblBhZ2VcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZUFWaXN1YWxpc2VyOiB1bmRlZmluZWQsXHJcbiAgICAgIGFmZmljaGVySW1hZ2U6IGZhbHNlLFxyXG4gICAgICBsaXN0ZUltYWdlczogcHJvcHMubGlzdGVJbWFnZXMsXHJcbiAgICAgIGRyYWdnZWRQb3NpdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICBsaXN0ZUltYWdlc1RyaWVlLFxyXG4gICAgICBtb2RlRWRpdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXREcmFnZ2VkUG9zaXRpb24gPSB0aGlzLnNldERyYWdnZWRQb3NpdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5tb3ZlSW1hZ2UgPSB0aGlzLm1vdmVJbWFnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5saXN0T3JFbXB0eUNhcmQgPSB0aGlzLmxpc3RPckVtcHR5Q2FyZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zYXZlRGlzcG9zaXRpb24gPSB0aGlzLnNhdmVEaXNwb3NpdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRBZmZpY2hlckltYWdlID0gdGhpcy5zZXRBZmZpY2hlckltYWdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN3aXRjaEVkaXRNb2RlID0gdGhpcy5zd2l0Y2hFZGl0TW9kZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kaXNjYXJkRGlzcG9zaXRpb24gPSB0aGlzLmRpc2NhcmREaXNwb3NpdGlvbi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGREaXNwbGF5TGlzdChsaXN0ZUltYWdlcykge1xyXG4gICAgbGV0IGxpc3RlSW1hZ2VzVHJpZWUgPSBbXTtcclxuICAgIGxpc3RlSW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XHJcbiAgICAgIGlmIChsaXN0ZUltYWdlc1RyaWVlW2ltYWdlLnNlY3Rpb25JZF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGlzdGVJbWFnZXNUcmllZVtpbWFnZS5zZWN0aW9uSWRdID0gW107XHJcbiAgICAgICAgbGlzdGVJbWFnZXNUcmllZVtpbWFnZS5zZWN0aW9uSWRdWzBdID0gW107XHJcbiAgICAgICAgbGlzdGVJbWFnZXNUcmllZVtpbWFnZS5zZWN0aW9uSWRdWzFdID0gW107XHJcbiAgICAgICAgbGlzdGVJbWFnZXNUcmllZVtpbWFnZS5zZWN0aW9uSWRdWzJdID0gW107XHJcbiAgICAgIH1cclxuICAgICAgbGlzdGVJbWFnZXNUcmllZVtpbWFnZS5zZWN0aW9uSWRdW2ltYWdlLmNvbF1baW1hZ2Uucm93XSA9IGltYWdlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWN0aW9uTWFwTmFtZUlkKS5mb3JFYWNoKChzZWN0aW9uSWQpID0+IHtcclxuICAgICAgaWYgKGxpc3RlSW1hZ2VzVHJpZWVbc2VjdGlvbklkXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsaXN0ZUltYWdlc1RyaWVlW3NlY3Rpb25JZF0gPSBbXTtcclxuICAgICAgICBsaXN0ZUltYWdlc1RyaWVlW3NlY3Rpb25JZF1bMF0gPSBbXTtcclxuICAgICAgICBsaXN0ZUltYWdlc1RyaWVlW3NlY3Rpb25JZF1bMV0gPSBbXTtcclxuICAgICAgICBsaXN0ZUltYWdlc1RyaWVlW3NlY3Rpb25JZF1bMl0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGlzdGVJbWFnZXNUcmllZTtcclxuICB9XHJcblxyXG4gIHNldERyYWdnZWRQb3NpdGlvbk9MRChkcmFnZ2VkUG9zaXRpb24pIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBkcmFnZ2VkUG9zaXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICBzZXREcmFnZ2VkUG9zaXRpb24oZHJhZ2dlZEltYWdlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ2dlZEltYWdlIH0pO1xyXG4gIH1cclxuXHJcbiAgbW92ZUltYWdlKGxhbmRpbmdJbWFnZSkge1xyXG4gICAgbGV0IGRyYWdnZWRJbWFnZSA9IHRoaXMuc3RhdGUuZHJhZ2dlZEltYWdlO1xyXG4gICAgaWYgKGxhbmRpbmdJbWFnZS5pbWFnZUlkID09IGRyYWdnZWRJbWFnZS5pbWFnZUlkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IG5ld0xpc3QgPSBbLi4udGhpcy5zdGF0ZS5saXN0ZUltYWdlc107XHJcbiAgICBkcmFnZ2VkSW1hZ2Uuc2VjdGlvbklkID0gbGFuZGluZ0ltYWdlLnNlY3Rpb25JZDtcclxuICAgIGRyYWdnZWRJbWFnZS5yb3cgPSBsYW5kaW5nSW1hZ2Uucm93O1xyXG4gICAgZHJhZ2dlZEltYWdlLmNvbCA9IGxhbmRpbmdJbWFnZS5jb2w7XHJcbiAgICBsYW5kaW5nSW1hZ2Uucm93Kys7XHJcbiAgICBsZXQgZHJhZ2dlZEluZGV4ID0gdGhpcy5zdGF0ZS5saXN0ZUltYWdlcy5maW5kSW5kZXgoXHJcbiAgICAgIChpbWFnZSkgPT4gaW1hZ2UuaW1hZ2VJZCA9PT0gZHJhZ2dlZEltYWdlLmltYWdlSWRcclxuICAgICk7XHJcbiAgICBsZXQgbGFuZGluZ0luZGV4ID0gdGhpcy5zdGF0ZS5saXN0ZUltYWdlcy5maW5kSW5kZXgoXHJcbiAgICAgIChpbWFnZSkgPT4gaW1hZ2UuaW1hZ2VJZCA9PT0gbGFuZGluZ0ltYWdlLmltYWdlSWRcclxuICAgICk7XHJcblxyXG4gICAgbmV3TGlzdFtkcmFnZ2VkSW5kZXhdID0gZHJhZ2dlZEltYWdlO1xyXG4gICAgaWYgKCFsYW5kaW5nSW1hZ2UuaXNFbXB0eSkgbmV3TGlzdFtsYW5kaW5nSW5kZXhdID0gbGFuZGluZ0ltYWdlO1xyXG4gICAgbGV0IGxpc3RlSW1hZ2VzVHJpZWUgPSB0aGlzLmJ1aWxkRGlzcGxheUxpc3QobmV3TGlzdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbGlzdGVJbWFnZXM6IG5ld0xpc3QsXHJcbiAgICAgIGxpc3RlSW1hZ2VzVHJpZWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsYW5kaW5nSW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIG1vdmVJbWFnZU9MRChsYW5kaW5nUG9zaXRpb24pIHtcclxuICAgIGxldCBkcmFnZ2VkU2VjdGlvbiA9IHRoaXMuc3RhdGUuZHJhZ2dlZFBvc2l0aW9uLnNlY3Rpb247XHJcbiAgICBsZXQgZHJhZ2dlZENvbHVtbiA9IHRoaXMuc3RhdGUuZHJhZ2dlZFBvc2l0aW9uLmNvbHVtbjtcclxuICAgIGxldCBkcmFnZ2VkUm93ID0gdGhpcy5zdGF0ZS5kcmFnZ2VkUG9zaXRpb24ucm93O1xyXG4gICAgbGV0IGxhbmRpbmdTZWN0aW9uID0gbGFuZGluZ1Bvc2l0aW9uLnNlY3Rpb247XHJcbiAgICBsZXQgbGFuZGluZ0NvbHVtbiA9IGxhbmRpbmdQb3NpdGlvbi5jb2x1bW47XHJcbiAgICBsZXQgbGFuZGluZ1JvdyA9IGxhbmRpbmdQb3NpdGlvbi5yb3c7XHJcbiAgICBpZiAobGFuZGluZ1Bvc2l0aW9uID09PSB0aGlzLnN0YXRlLmRyYWdnZWRQb3NpdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBkcmFnZ2VkTGlzdCA9IHRoaXMuc3RhdGUubGlzdGVJbWFnZXNUcmllZVtkcmFnZ2VkU2VjdGlvbl07XHJcbiAgICBsZXQgbGFuZGluZ0xpc3QgPSB0aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWVbbGFuZGluZ1NlY3Rpb25dO1xyXG5cclxuICAgIGxldCBtb3ZlZEltYWdlID0gZHJhZ2dlZExpc3RbZHJhZ2dlZENvbHVtbl0uc3BsaWNlKGRyYWdnZWRSb3csIDEpWzBdO1xyXG4gICAgaWYgKGxhbmRpbmdTZWN0aW9uICE9IGRyYWdnZWRTZWN0aW9uKSB7XHJcbiAgICAgIG1vdmVkSW1hZ2UuY2F0ZWdvcnkgPSBsYW5kaW5nU2VjdGlvbjtcclxuICAgIH1cclxuICAgIGxhbmRpbmdMaXN0W2xhbmRpbmdDb2x1bW5dLnNwbGljZShsYW5kaW5nUm93LCAwLCBtb3ZlZEltYWdlKTtcclxuXHJcbiAgICBsZXQgcmVjYXBNb2RpZkxpc3Q7XHJcblxyXG4gICAgcmVjYXBNb2RpZkxpc3QgPSB7XHJcbiAgICAgIFtkcmFnZ2VkU2VjdGlvbl06IGRyYWdnZWRMaXN0LFxyXG4gICAgICBbbGFuZGluZ1NlY3Rpb25dOiBsYW5kaW5nTGlzdCxcclxuICAgIH07XHJcbiAgICBsZXQgbmV3TGlzdGVHbG9iYWxlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWUsXHJcbiAgICAgIC4uLnJlY2FwTW9kaWZMaXN0LFxyXG4gICAgfTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmV3TGlzdGVHbG9iYWxlXCIsIG5ld0xpc3RlR2xvYmFsZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgbGlzdGVJbWFnZXNUcmllZTogbmV3TGlzdGVHbG9iYWxlIH0pO1xyXG4gIH1cclxuXHJcbiAgbGlzdE9yRW1wdHlDYXJkKHJvd3MpIHtcclxuICAgIC8vIGlmIChyb3dzLmxlbmd0aCA9PT0gMClcclxuICAgIC8vICAgcmV0dXJuIChcclxuICAgIC8vICAgICA8TW92YWJsZUNhcmRcclxuICAgIC8vICAgICAgIGtleT17XCJlbXB0eS1jb2x1bW4tXCIgKyBEYXRlLm5vdygpfVxyXG4gICAgLy8gICAgICAgaW1hZ2U9e3sgaXNFbXB0eTogdHJ1ZSB9fVxyXG4gICAgLy8gICAgICAgbW92ZUltYWdlPXt0aGlzLm1vdmVJbWFnZX1cclxuICAgIC8vICAgICAvPlxyXG4gICAgLy8gICApO1xyXG4gICAgcmV0dXJuIHJvd3MubWFwKChpbWFnZSwgcm93KSA9PiAoXHJcbiAgICAgIDxNb3ZhYmxlQ2FyZFxyXG4gICAgICAgIGtleT17aW1hZ2UuaWR9XHJcbiAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgIG1vdmVJbWFnZT17dGhpcy5tb3ZlSW1hZ2V9XHJcbiAgICAgICAgbW9kZUVkaXRpb249e3RoaXMuc3RhdGUubW9kZUVkaXRpb259XHJcbiAgICAgICAgLy8gcG9zaXRpb249e3tcclxuICAgICAgICAvLyAgIHJvdyxcclxuICAgICAgICAvLyAgIGNvbHVtbixcclxuICAgICAgICAvLyAgIHNlY3Rpb24sXHJcbiAgICAgICAgLy8gICBpbWFnZUlkOiBpbWFnZS5pZCxcclxuICAgICAgICAvLyAgIHNlY3Rpb25JZDogaW1hZ2UuY2F0ZWdvcnksXHJcbiAgICAgICAgLy8gfX1cclxuICAgICAgICBzZXREcmFnZ2VkUG9zaXRpb249e3RoaXMuc2V0RHJhZ2dlZFBvc2l0aW9ufVxyXG4gICAgICAgIGRpc3BsYXlJbWFnZT17KGltYWdlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW1hZ2VBVmlzdWFsaXNlcjogaW1hZ2UsXHJcbiAgICAgICAgICAgIGFmZmljaGVySW1hZ2U6IHRydWUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICAvLyA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH1cclxuICBzYXZlRGlzcG9zaXRpb24oKSB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0eXBlOiBcImZyb250RGlzcG9cIixcclxuICAgICAgICBkaXNwb3NpdGlvbjogdGhpcy5zdGF0ZS5saXN0ZUltYWdlc1RyaWVlLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXRlZ29yeSBwb3N0IC8gc3VjY2VzcyA6IFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBUaHVtYm5haWwubWVzc2FnZSh7XHJcbiAgICAgICAgICBjb250ZW50OiBcIkNvbmZpZ3VyYXRpb24gc2F1dmVnYXJkw6llXCIsXHJcbiAgICAgICAgICB0aHVtYm5haWxUeXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN3aXRjaEVkaXRNb2RlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBUaHVtYm5haWwubWVzc2FnZSh7XHJcbiAgICAgICAgICBjb250ZW50OiBcIkVycmV1ciBsb3JzIGRlIGwnZW5yZWdpc3RyZW1lbnRcIixcclxuICAgICAgICAgIHRodW1ibmFpbFR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaXNjYXJkRGlzcG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLnN3aXRjaEVkaXRNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRBZmZpY2hlckltYWdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWZmaWNoZXJJbWFnZTogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hFZGl0TW9kZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlRWRpdGlvbjogIXRoaXMuc3RhdGUubW9kZUVkaXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uTmFtZShzZWN0aW9uSWQpIHtcclxuICAgIC8vIGZvciAobGV0IGNvbHVtbiBvZiBzZWN0aW9uKSB7XHJcbiAgICAvLyAgIGZvciAobGV0IHJvdyBvZiBjb2x1bW4pIHtcclxuICAgIC8vICAgICByZXR1cm4gcm93LnNlY3Rpb25OYW1lO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyByZXR1cm4gXCJcIjtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLnNlY3Rpb25NYXBOYW1lSWRbc2VjdGlvbklkXTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGZsb2F0aW5nQnV0dG9uU3R5bGUgPSAodHlwZSkgPT4gKHtcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgcmlnaHQ6IHR5cGUgPT0gXCJhbm51bGVyXCIgPyBcIjElXCIgOiBcIjEyJVwiLFxyXG4gICAgICB3aWR0aDogdHlwZSAhPSBcImVkaXRpb25cIiA/IDE2MCA6IFwiXCIsXHJcbiAgICAgIGJvdHRvbTogXCIxMCVcIixcclxuICAgICAgekluZGV4OiAyMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIDxDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICA8VG9kb1RhYmxlIC8+XHJcbiAgICAgICAgPC9Db250ZXh0UHJvdmlkZXI+ICovfVxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWUubWFwKChzZWN0aW9uLCBzZWN0aW9uSWQpID0+XHJcbiAgICAgICAgICBzZWN0aW9uID09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGNydW1iXCIga2V5PXtzZWN0aW9uSWR9PlxyXG4gICAgICAgICAgICAgIDxoMz57dGhpcy5zZWN0aW9uTmFtZShzZWN0aW9uSWQpfTwvaDM+O1xyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb24gcm93XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3NlY3Rpb24ubWFwKChyb3dzLCBjb2wpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17XCJjb2x1bW4tXCIgKyBjb2x9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5saXN0T3JFbXB0eUNhcmQocm93cyl9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHtyb3dzLmxlbmd0aCA+IDAgPyAoICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtcImVtcHR5LWNvbHVtbi1cIiArIGNvbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1wdHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiByb3dzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1vdmVJbWFnZT17dGhpcy5tb3ZlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICByb3c6IHJvdy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgc2VjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgc2VjdGlvbklkOiBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICAgIHt0aGlzLnN0YXRlLm1vZGVFZGl0aW9uID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZhYlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleHRlbmRlZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2Zsb2F0aW5nQnV0dG9uU3R5bGUoXCJ2YWxpZGVyXCIpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlRGlzcG9zaXRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2F2ZU91dGxpbmVkSWNvbiBzeD17eyBtcjogMSB9fSAvPlxyXG4gICAgICAgICAgICAgIEVucmVnaXN0cmVyXHJcbiAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICA8RmFiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImV4dGVuZGVkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZmxvYXRpbmdCdXR0b25TdHlsZShcImFubnVsZXJcIil9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGlzY2FyZERpc3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEJsb2NrT3V0bGluZWRJY29uIHN4PXt7IG1yOiAxIH19IC8+XHJcbiAgICAgICAgICAgICAgQW5udWxlclxyXG4gICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RmFiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImV4dGVuZGVkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZmxvYXRpbmdCdXR0b25TdHlsZShcImVkaXRpb25cIil9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN3aXRjaEVkaXRNb2RlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZEljb24gc3g9e3sgbXI6IDEgfX0gLz5cclxuICAgICAgICAgICAgICBNb2RlIEVkaXRpb25cclxuICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxJbWFnZVZpZXdlclxyXG4gICAgICAgICAgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2VBVmlzdWFsaXNlcn1cclxuICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuYWZmaWNoZXJJbWFnZX1cclxuICAgICAgICAgIHNldFZpc2liaWxpdHk9e3RoaXMuc2V0QWZmaWNoZXJJbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaHVtYm5haWwgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgU3ltZm9ueURhdGEgPSB3aW5kb3cuc3ltZm9ueURhdGFCaW5kaW5nO1xyXG5jb25zdCBjdXJyZW50Um91dGUgPSBTeW1mb255RGF0YS5yZWFjdFJvdXRlO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y3VycmVudFJvdXRlID09IFwiYm9va1wiID8gPEltYWdlc0dhbGxlcnkgey4uLlN5bWZvbnlEYXRhLmRhdGF9IC8+IDogXCJcIn1cclxuICAgICAge2N1cnJlbnRSb3V0ZSA9PSBcImNvbnRhY3RcIiA/IDxoMz5Db250YWN0PC9oMz4gOiBcIlwifVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XHJcbiAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMSB9LFxyXG4gIGVudGVyZWQ6IHsgb3BhY2l0eTogMSB9LFxyXG4gIGV4aXRpbmc6IHsgb3BhY2l0eTogMCB9LFxyXG4gIGV4aXRlZDogeyBvcGFjaXR5OiAwIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVZpZXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcblxyXG4gIGdyYXlNYXNrU3R5bGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLnZpc2libGUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC41KVwiLFxyXG4gICAgICB6SW5kZXg6IDIwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGltYWdlU3R5bGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICB0b3A6IFwiMTAlXCIsXHJcbiAgICAgIGhlaWdodDogXCI4MCVcIixcclxuICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtNTAlKWAsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjUpXCIsXHJcblxyXG4gICAgICB6SW5kZXg6IDMwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUcmFuc2l0aW9uIGluPXt0aGlzLnByb3BzLnZpc2libGV9IHRpbWVvdXQ9ezUwMH0+XHJcbiAgICAgICAgeyhzdGF0ZSkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDUwMG1zXCIsXHJcbiAgICAgICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e1widXBsb2Fkcy9cIiArIHRoaXMucHJvcHMuaW1hZ2UuaW1hZ2VGaWxlfVxyXG4gICAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5pbWFnZS5uYW1lfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt0aGlzLmltYWdlU3R5bGUoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyYXktbWFza1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3RoaXMuZ3JheU1hc2tTdHlsZSgpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2V0VmlzaWJpbGl0eShmYWxzZSl9XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5JbWFnZVZpZXdlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW1hZ2U6IHtcclxuICAgIHNyYzogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92YWJsZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIC8vIGNvbnN0IFtkcmFnSG92ZXJlZCwgc2V0RHJhZ0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkcmFnSG92ZXJlZDogZmFsc2UsIC8vIExhIGNhcnRlIGVzdC1lbGxlIHN1cnZvbMOpZSBwYXIgdW5lIGNhcnRlIGRyYWdnw6llID9cclxuXHJcbiAgICAgIC8vIFN0eWxlc1xyXG4gICAgICB3aGl0ZUNvbHVtbjoge1xyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmZvRGVwbGFjZW1lbnQ6IHtcclxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBkaXNwbGF5Q3V0bmVzczogdHJ1ZSxcclxuICAgICAgZGlzcGxheUdyYXlNYXNrOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zdHlsZUZyb21EcmFnSG92ZXIgPSB0aGlzLnN0eWxlRnJvbURyYWdIb3Zlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXREcmFnSG92ZXJlZCA9IHRoaXMuc2V0RHJhZ0hvdmVyZWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0eWxlRnJvbURyYWdIb3ZlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmRyYWdIb3ZlcmVkXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJ0b3AgMC4yc1wiLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgIHRvcDogXCIxMDBweFwiLFxyXG4gICAgICAgICAgekluZGV4OiAwLFxyXG4gICAgICAgIH1cclxuICAgICAgOiB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBcInRvcCAwLjJzXCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3R5bGVGcm9tRHJhZ0hvdmVyV2hpdGVDb2x1bW4oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi4odGhpcy5zdGF0ZS5kcmFnSG92ZXJlZFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC4yKVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjApXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgbWluSGVpZ2h0OiAxMDAsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgekluZGV4OiAxMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXREcmFnSG92ZXJlZChzdGF0dXMpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkcmFnSG92ZXJlZDogc3RhdHVzIH0pO1xyXG4gIH1cclxuICBtYWluQ2FyZFN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICAgIC8vIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0eWxlRnJvbUhvdmVyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwibGVmdFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgcGFkZGluZzogXCIxMDBweCA0MHB4XCIsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIHpJbmRleDogMTAsXHJcbiAgICAgIGNvbG9yOiB0aGlzLnN0YXRlLmRpc3BsYXlHcmF5TWFza1xyXG4gICAgICAgID8gXCJyZ2JhKDUwLDUwLDUwLDEpXCJcclxuICAgICAgICA6IFwicmdiYSgxMCwxMCwxMCwwKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmRpc3BsYXlHcmF5TWFza1xyXG4gICAgICAgID8gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOClcIlxyXG4gICAgICAgIDogXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZCA1MDBtcywgY29sb3IgNTAwbXNcIixcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuaW1hZ2UuaXNFbXB0eSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZT17XCJjYXJkIHNoYWRvdy1zbSBtdC0zXCJ9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAvLyAuLi50aGlzLnN0eWxlRnJvbURyYWdIb3ZlcigpLFxyXG4gICAgICAgICAgICAuLi50aGlzLnN0eWxlRnJvbURyYWdIb3ZlcldoaXRlQ29sdW1uKCksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZ0hvdmVyZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREcmFnSG92ZXJlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyb3A9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZ0hvdmVyZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1vdmVJbWFnZSh0aGlzLnByb3BzLmltYWdlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMuc3RhdGUud2hpdGVDb2x1bW59PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1wiY2FyZCBzaGFkb3ctc20gbXQtM1wifVxyXG4gICAgICAgIHN0eWxlPXt0aGlzLm1haW5DYXJkU3R5bGUoKX1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5R3JheU1hc2s6IHRydWUgfSl9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGlzcGxheUdyYXlNYXNrOiBmYWxzZSB9KX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmRpc3BsYXlJbWFnZS5iaW5kKHRoaXMsIHRoaXMucHJvcHMuaW1hZ2UpKCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheUdyYXlNYXNrOiBmYWxzZSB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgdG9wOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgekluZGV4OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3BpdGljaGF0LnBuZ1wiIGFsdD1cInBpdGljaGF0XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0eWxlRnJvbURyYWdIb3ZlcigpfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtcInVwbG9hZHMvXCIgKyB0aGlzLnByb3BzLmltYWdlLmltYWdlRmlsZX1cclxuICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLmltYWdlLm5hbWV9XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnt0aGlzLnByb3BzLmltYWdlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGRyYWdnYWJsZT17dGhpcy5wcm9wcy5tb2RlRWRpdGlvbn1cclxuICAgICAgICAgIHN0eWxlPXt0aGlzLnN0eWxlRnJvbUhvdmVyKCl9XHJcbiAgICAgICAgICBvbkRyYWdFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREcmFnSG92ZXJlZCh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlDdXRuZXNzOiBmYWxzZSB9LCAoKSA9PlxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlDdXRuZXNzOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgIH0sIDIwMClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERyYWdIb3ZlcmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJhZ092ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyb3A9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZ0hvdmVyZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1vdmVJbWFnZSh0aGlzLnByb3BzLmltYWdlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gdGhpcy5wcm9wcy5zZXREcmFnZ2VkUG9zaXRpb24odGhpcy5wcm9wcy5pbWFnZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuaW1hZ2UubmFtZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTW92YWJsZUNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRpc3BsYXlJbWFnZTogKCkgPT4ge30sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0L0NvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIFRvZG9UYWJsZSgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuICByZXR1cm4gPGRpdj57Y29udGV4dC50b2Rvc308L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9UYWJsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGV4dFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRvZG9zOiBbPGRpdj5FbGVtZW50IDE8L2Rpdj4sIDxkaXY+RWxlbWVudCAyPC9kaXY+LCA8ZGl2PkVsZW1lbnQgMzwvZGl2Pl0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy9jcmVhdGVcclxuICBjcmVhdGVUb2RvKCkge31cclxuICAvL3JlYWRcclxuICByZWFkVG9kb3MoKSB7fVxyXG4gIC8vdXBkYXRlXHJcbiAgdXBkYXRlVG9kbygpIHt9XHJcbiAgLy9kZWxldGVcclxuICBkZWxldGVUb2RvKCkge31cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgY3JlYXRlVG9kbzogdGhpcy5jcmVhdGVUb2RvLmJpbmQodGhpcyksXHJcbiAgICAgICAgICBjcmVhdGVUb2RvOiB0aGlzLnJlYWRUb2Rvcy5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgY3JlYXRlVG9kbzogdGhpcy51cGRhdGVUb2RvLmJpbmQodGhpcyksXHJcbiAgICAgICAgICBjcmVhdGVUb2RvOiB0aGlzLmRlbGV0ZVRvZG8uYmluZCh0aGlzKSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi90aHVtYm5haWwuc2Nzc1wiO1xyXG5cclxuZnVuY3Rpb24gZGVmSWZVbmRlZih2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGh1bWJuYWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgbGV0IGRlZmF1bHRQYXJhbXMgPSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiQ29udGVudVwiLFxyXG4gICAgICAvLyB2aXNpYmxlOiBmYWxzZSwgLy8gdmlzaWJpbGl0eVxyXG4gICAgICBhdXRvSGlkZTogdHJ1ZSwgLy8gdG8gdXNlIGF1dG8gaGlkZSwgdi1tb2RlbCB3aXRoIGEgYm9vbGVhbiBmb3IgdmlzaWJpbGl0eSBtdXN0IGV4aXN0IGluIHBhcmVudCBjb21wb25lbnRcclxuICAgICAgYXV0b0hpZGVUaW1lOiAzMDAwLCAvLyAvLyBzZXRzIHRpbWVvdXQgYmVmb3JlIGNsb3NlIGluIG1zXHJcbiAgICAgIGNsb3NlQ3Jvc3M6IGZhbHNlLCAvL2Rpc3BsYXlzIGNyb3NzIG9uIHRoZSByaWdodCB0byBjbG9zZSB0aHVtYm5haWxcclxuICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsIC8vIHJpZ2h0LCBsZWZ0LCBjZW50ZXJlZCBhdmFpbGFibGUsIHRodW1ibmFpbCB3aWxsIGFsd2F5cyBiZSBvbiB0aGUgYm90dG9tIG9mIHRoIHNjcmVlblxyXG4gICAgICB0aHVtYm5haWxUeXBlOiBcIm5ldXRyYWxcIiwgLy8gbmV1dHJhbCwgc3VjY2VzcywgZXJyb3IgLSBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAgIGRldGFpbHNCdXR0b246IGZhbHNlLFxyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGNvbXB1dGVkU3R5bGU6IHsgYm90dG9tOiBcIi0xMDBweFwiIH0sXHJcbiAgICAgIHNob3dEZXRhaWxzOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJObyBmdW5jdGlvbiB3YXMgcHJvdmlkZWQgdG8gVGh1bWJuYWlsICdzaG93RGV0YWlscycgcHJvcFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZXRQYXJhbXM6IGRlZmF1bHRQYXJhbXMsXHJcbiAgICAgIC4uLmRlZmF1bHRQYXJhbXMsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oaWRlVGh1bWJuYWlsID0gdGhpcy5oaWRlVGh1bWJuYWlsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvbXB1dGVkQ2xhc3MgPSB0aGlzLmNvbXB1dGVkQ2xhc3MuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgVGh1bWJuYWlsLnNob3dUaHVtYm5haWwgPSBUaHVtYm5haWwuc2hvd1RodW1ibmFpbC5iaW5kKHRoaXMpO1xyXG4gICAgVGh1bWJuYWlsLm1lc3NhZ2UgPSBUaHVtYm5haWwubWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgVGh1bWJuYWlsLnNldCA9IFRodW1ibmFpbC5zZXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQocGFyYW1zKSB7XHJcbiAgICBsZXQgbmV3U2V0UGFyYW1zID0geyAuLi50aGlzLnN0YXRlLnNldFBhcmFtcywgLi4ucGFyYW1zIH07XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2V0UGFyYW1zOiBuZXdTZXRQYXJhbXMgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbWVzc2FnZShwYXJhbXMpIHtcclxuICAgIHBhcmFtcyA9IGRlZklmVW5kZWYocGFyYW1zLCB7fSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gdXNlZCB0byBsZXQgdGhlIFRodW1ibmFpbC5zZXQgdG8gYmUgZWZmZWN0aXZlXHJcbiAgICAgIGZvciAobGV0IHBhcmFtIGluIHRoaXMuc3RhdGUuc2V0UGFyYW1zKSB7XHJcbiAgICAgICAgcGFyYW1zW3BhcmFtXSA9IGRlZklmVW5kZWYocGFyYW1zW3BhcmFtXSwgdGhpcy5zdGF0ZS5zZXRQYXJhbXNbcGFyYW1dKTsgLy8gaWYgcGFyYW1zW3BhcmFtXSA9PT0gdW5kZWZpbmVkLCBzZXRzIGl0IHdpdGggdGhpcy5zdGF0ZS5zZXRQYXJhbXNbcGFyYW1dXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnBhcmFtcyB9LCAoKSA9PiB7XHJcbiAgICAgICAgVGh1bWJuYWlsLnNob3dUaHVtYm5haWwoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNob3dUaHVtYm5haWwoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29tcHV0ZWRTdHlsZTogeyBib3R0b206IFwiM3ZoXCIsIG9wYWNpdHk6IFwiMTAwXCIgfSB9LCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmF1dG9IaWRlKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oaWRlVGh1bWJuYWlsKCk7XHJcbiAgICAgICAgfSwgdGhpcy5zdGF0ZS5hdXRvSGlkZVRpbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlVGh1bWJuYWlsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXB1dGVkU3R5bGU6IHsgYm90dG9tOiBcIi0xMDBweFwiLCBvcGFjaXR5OiBcIjBcIiB9IH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWRDbGFzcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIFwiY29tcG9zYW50LVRodW1ibmFpbCBcIiArXHJcbiAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24gK1xyXG4gICAgICBcIiBcIiArXHJcbiAgICAgIHRoaXMuc3RhdGUudGh1bWJuYWlsVHlwZS50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAvLyB2LWlmPVwidmlzaWJsZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuY29tcHV0ZWRDbGFzcygpfVxyXG4gICAgICAgICAgLy8gOnN0eWxlPVwiYHdpZHRoOiAke3dpZHRofTtgXCJcclxuICAgICAgICAgIC8vIG9uQ2xpY2s9e3RoaXMuaGlkZVRodW1ibmFpbH1cclxuICAgICAgICAgIHN0eWxlPXt0aGlzLnN0YXRlLmNvbXB1dGVkU3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0ZS1UaHVtYm5haWxcIj57dGhpcy5zdGF0ZS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuY2xvc2VDcm9zcyB8fCAhdGhpcy5zdGF0ZS5hdXRvSGlkZSA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHYtaWY9XCJjbG9zZUNyb3NzXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmcmFtZS1jcm9peCBjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiZmVybWVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVUaHVtYm5haWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDinJbvuI9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGV0YWlsc0J1dHRvbiA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdldC1kZXRhaWxzIGNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJkw6l0YWlsc1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5zaG93RGV0YWlsc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOKEue+4j1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblRodW1ibmFpbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY29udGVudDogXCJDb250ZW51XCIsXHJcbiAgYXV0b0hpZGU6IHRydWUsIC8vIHRvIHVzZSBhdXRvIGhpZGUsIHYtbW9kZWwgd2l0aCBhIGJvb2xlYW4gZm9yIHZpc2liaWxpdHkgbXVzdCBleGlzdCBpbiBwYXJlbnQgY29tcG9uZW50XHJcbiAgYXV0b0hpZGVUaW1lOiAzMDAwLCAvLyAvLyBzZXRzIHRpbWVvdXQgYmVmb3JlIGNsb3NlIGluIG1zXHJcbiAgY2xvc2VDcm9zczogdHJ1ZSwgLy9kaXNwbGF5cyBjcm9zcyBvbiB0aGUgcmlnaHQgdG8gY2xvc2UgdGh1bWJuYWlsXHJcbiAgcG9zaXRpb246IFwiY2VudGVyXCIsIC8vIHJpZ2h0LCBsZWZ0LCBjZW50ZXJlZCBhdmFpbGFibGUsIHRodW1ibmFpbCB3aWxsIGFsd2F5cyBiZSBvbiB0aGUgYm90dG9tIG9mIHRoIHNjcmVlblxyXG4gIHRodW1ibmFpbFR5cGU6IFwibmV1dHJhbFwiLCAvLyBuZXV0cmFsLCBzdWNjZXNzLCBlcnJvciAtIGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3JcclxuICBkZXRhaWxzQnV0dG9uOiBmYWxzZSxcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY291bnQiLCJjb3VudFRhcmdldCIsImlubmVySFRNTCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwidXNlU3RhdGUiLCJheGlvcyIsIkZhYiIsIlNhdmVPdXRsaW5lZEljb24iLCJCbG9ja091dGxpbmVkSWNvbiIsIkVkaXRPdXRsaW5lZEljb24iLCJNb3ZhYmxlQ2FyZCIsIkltYWdlVmlld2VyIiwiVGh1bWJuYWlsIiwiQ29udGV4dFByb3ZpZGVyIiwiVG9kb1RhYmxlIiwiSW1hZ2VzR2FsbGVyeSIsInByb3BzIiwibGlzdGVJbWFnZXNUcmllZSIsImJ1aWxkRGlzcGxheUxpc3QiLCJsaXN0ZUltYWdlcyIsInN0YXRlIiwiaW1hZ2VBVmlzdWFsaXNlciIsInVuZGVmaW5lZCIsImFmZmljaGVySW1hZ2UiLCJkcmFnZ2VkUG9zaXRpb24iLCJtb2RlRWRpdGlvbiIsInNldERyYWdnZWRQb3NpdGlvbiIsImJpbmQiLCJtb3ZlSW1hZ2UiLCJsaXN0T3JFbXB0eUNhcmQiLCJzYXZlRGlzcG9zaXRpb24iLCJzZXRBZmZpY2hlckltYWdlIiwic3dpdGNoRWRpdE1vZGUiLCJkaXNjYXJkRGlzcG9zaXRpb24iLCJmb3JFYWNoIiwiaW1hZ2UiLCJzZWN0aW9uSWQiLCJjb2wiLCJyb3ciLCJPYmplY3QiLCJrZXlzIiwic2VjdGlvbk1hcE5hbWVJZCIsInNldFN0YXRlIiwiZHJhZ2dlZEltYWdlIiwibGFuZGluZ0ltYWdlIiwiaW1hZ2VJZCIsIm5ld0xpc3QiLCJkcmFnZ2VkSW5kZXgiLCJmaW5kSW5kZXgiLCJsYW5kaW5nSW5kZXgiLCJpc0VtcHR5IiwibGFuZGluZ1Bvc2l0aW9uIiwiZHJhZ2dlZFNlY3Rpb24iLCJzZWN0aW9uIiwiZHJhZ2dlZENvbHVtbiIsImNvbHVtbiIsImRyYWdnZWRSb3ciLCJsYW5kaW5nU2VjdGlvbiIsImxhbmRpbmdDb2x1bW4iLCJsYW5kaW5nUm93IiwiZHJhZ2dlZExpc3QiLCJsYW5kaW5nTGlzdCIsIm1vdmVkSW1hZ2UiLCJzcGxpY2UiLCJjYXRlZ29yeSIsInJlY2FwTW9kaWZMaXN0IiwibmV3TGlzdGVHbG9iYWxlIiwicm93cyIsIm1hcCIsImlkIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInR5cGUiLCJkaXNwb3NpdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY29udGVudCIsInRodW1ibmFpbFR5cGUiLCJlcnIiLCJ2YWx1ZSIsImZsb2F0aW5nQnV0dG9uU3R5bGUiLCJwb3NpdGlvbiIsInJpZ2h0Iiwid2lkdGgiLCJib3R0b20iLCJ6SW5kZXgiLCJzZWN0aW9uTmFtZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibGVuZ3RoIiwibXIiLCJDb21wb25lbnQiLCJTeW1mb255RGF0YSIsIndpbmRvdyIsInN5bWZvbnlEYXRhQmluZGluZyIsImN1cnJlbnRSb3V0ZSIsInJlYWN0Um91dGUiLCJUcmFuc2l0aW9uIiwidHJhbnNpdGlvblN0eWxlcyIsImVudGVyaW5nIiwib3BhY2l0eSIsImVudGVyZWQiLCJleGl0aW5nIiwiZXhpdGVkIiwidmlzaWJsZSIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImltYWdlRmlsZSIsIm5hbWUiLCJpbWFnZVN0eWxlIiwiZ3JheU1hc2tTdHlsZSIsInNldFZpc2liaWxpdHkiLCJkZWZhdWx0UHJvcHMiLCJzcmMiLCJkcmFnSG92ZXJlZCIsIndoaXRlQ29sdW1uIiwiaW5mb0RlcGxhY2VtZW50IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJkaXNwbGF5Q3V0bmVzcyIsImRpc3BsYXlHcmF5TWFzayIsInN0eWxlRnJvbURyYWdIb3ZlciIsInNldERyYWdIb3ZlcmVkIiwibWluSGVpZ2h0Iiwic3RhdHVzIiwidXNlclNlbGVjdCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJjdXJzb3IiLCJjb2xvciIsInN0eWxlRnJvbURyYWdIb3ZlcldoaXRlQ29sdW1uIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwibWFpbkNhcmRTdHlsZSIsImRpc3BsYXlJbWFnZSIsInN0eWxlRnJvbUhvdmVyIiwic2V0VGltZW91dCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwidG9kb3MiLCJjcmVhdGVDb250ZXh0IiwiY3JlYXRlVG9kbyIsInJlYWRUb2RvcyIsInVwZGF0ZVRvZG8iLCJkZWxldGVUb2RvIiwiY2hpbGRyZW4iLCJkZWZJZlVuZGVmIiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFBhcmFtcyIsImF1dG9IaWRlIiwiYXV0b0hpZGVUaW1lIiwiY2xvc2VDcm9zcyIsImRldGFpbHNCdXR0b24iLCJjb21wdXRlZFN0eWxlIiwic2hvd0RldGFpbHMiLCJ3YXJuIiwic2V0UGFyYW1zIiwiaGlkZVRodW1ibmFpbCIsImNvbXB1dGVkQ2xhc3MiLCJzaG93VGh1bWJuYWlsIiwic2V0IiwidG9Mb3dlckNhc2UiLCJwYXJhbXMiLCJuZXdTZXRQYXJhbXMiLCJwYXJhbSJdLCJzb3VyY2VSb290IjoiIn0=