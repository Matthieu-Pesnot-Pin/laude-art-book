(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
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
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main */ "./assets/components/main.jsx");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application

 // console.log("window.listeImages", window.listeImages);




react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_main__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.getElementById("root")); // hot reloading. It works by replacing a module of the application 
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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/Transition.js");
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
    _this.state = {
      show: false
    };
    _this.updateShow = _this.updateShow.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ImageViewer, [{
    key: "grayMaskStyle",
    value: function grayMaskStyle() {
      return {
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
    key: "updateShow",
    value: function updateShow() {
      var _this2 = this;

      if (this.props.visible) setTimeout(function () {
        return _this2.setState({
          show: true
        });
      }, 100);else this.setState({
        show: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // this.updateShow();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_23__["default"], {
        "in": this.props.visible,
        timeout: 500
      }, function (state) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
          style: _objectSpread({
            opacity: 0,
            transition: "opacity 500ms"
          }, transitionStyles[state])
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("img", {
          src: "uploads/" + _this3.props.image.imageFile,
          alt: _this3.props.image.name,
          style: _this3.imageStyle()
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
          className: "gray-mask",
          style: _this3.grayMaskStyle(),
          onClick: function onClick() {
            return _this3.props.setVisibility(false);
          }
        }));
      });
    }
  }]);

  return ImageViewer;
}(react__WEBPACK_IMPORTED_MODULE_22__.Component);


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

            _this2.props.moveImage(_this2.props.position);
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

          _this2.props.moveImage(_this2.props.position);
        },
        onDragStart: function onDragStart() {
          return _this2.props.setDraggedPosition(_this2.props.position);
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

/***/ "./assets/components/main.jsx":
/*!************************************!*\
  !*** ./assets/components/main.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/Fab.js");
/* harmony import */ var _material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/SaveOutlined */ "./node_modules/@material-ui/icons/SaveOutlined.js");
/* harmony import */ var _material_ui_icons_BlockOutlined__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/BlockOutlined */ "./node_modules/@material-ui/icons/BlockOutlined.js");
/* harmony import */ var _material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/EditOutlined */ "./node_modules/@material-ui/icons/EditOutlined.js");
/* harmony import */ var _MovableCard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./MovableCard */ "./assets/components/MovableCard.jsx");
/* harmony import */ var _ImageViewer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ImageViewer */ "./assets/components/ImageViewer.jsx");
/* harmony import */ var _sub_components_thumbnail__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sub-components/thumbnail */ "./assets/components/sub-components/thumbnail.jsx");
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





 // import ModeEditOutlineOutlinedIcon from "@material-ui/icons/ModeEditOutlined";
// import ModeEditOutlinedIcon from "@material-ui/icons/ModeEditOutlined";






var ImagesGallery = /*#__PURE__*/function (_React$Component) {
  _inherits(ImagesGallery, _React$Component);

  var _super = _createSuper(ImagesGallery);

  function ImagesGallery(props) {
    var _this;

    _classCallCheck(this, ImagesGallery);

    console.log("props", props);
    _this = _super.call(this, props);
    _this.state = {
      imageAVisualiser: undefined,
      afficherImage: false,
      draggedPosition: undefined,
      listeImagesTriee: props.listeImages,
      modeEdition: false // categoryMap: {
      //   ["Bande Dessinée"]: 1,
      //   ["Illustration"]: 2,
      // },

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
    key: "setDraggedPosition",
    value: function setDraggedPosition(draggedPosition) {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        draggedPosition: draggedPosition
      }));
    }
  }, {
    key: "moveImage",
    value: function moveImage(landingPosition) {
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
    value: function listOrEmptyCard(column, section) {
      var _this2 = this;

      if (this.state.listeImagesTriee[section][column].length === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_MovableCard__WEBPACK_IMPORTED_MODULE_24__["default"], {
        key: "empty-column-" + column,
        image: {
          isEmpty: true
        },
        moveImage: this.moveImage,
        position: {
          row: 0,
          column: column,
          section: section,
          sectionId: this.props.categoryMap[section]
        }
      });
      return this.state.listeImagesTriee[section][column].map(function (image, row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_MovableCard__WEBPACK_IMPORTED_MODULE_24__["default"], {
          key: image.id,
          image: image,
          moveImage: _this2.moveImage,
          modeEdition: _this2.state.modeEdition,
          position: {
            row: row,
            column: column,
            section: section,
            imageId: image.id,
            sectionId: image.category
          },
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

      axios__WEBPACK_IMPORTED_MODULE_23___default()({
        method: "POST",
        url: "/api",
        data: {
          type: "frontDispo",
          disposition: this.state.listeImagesTriee
        }
      }).then(function (response) {
        console.log("Category post / success : ", response.data);
        _sub_components_thumbnail__WEBPACK_IMPORTED_MODULE_26__["default"].message({
          content: "Configuration sauvegardée",
          thumbnailType: "success"
        });

        _this3.switchEditMode();
      })["catch"](function (err) {
        console.log(err);
        _sub_components_thumbnail__WEBPACK_IMPORTED_MODULE_26__["default"].message({
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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(react__WEBPACK_IMPORTED_MODULE_22__.Fragment, null, Object.keys(this.state.listeImagesTriee).map(function (section) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
          className: "breadcrumb",
          key: section
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("h3", null, _this4.props.categoryMap[section]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
          className: "section row",
          style: {
            width: "100%"
          }
        }, _this4.state.listeImagesTriee[section].map(function (col, column) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
            className: "col-sm",
            style: {
              display: "flex",
              flexDirection: "column"
            },
            key: "column-" + column
          }, _this4.listOrEmptyCard(column, section), col.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_MovableCard__WEBPACK_IMPORTED_MODULE_24__["default"], {
            key: "empty-column-" + column,
            image: {
              isEmpty: true
            },
            moveImage: _this4.moveImage,
            position: {
              row: col.length,
              column: column,
              section: section,
              sectionId: section
            }
          }) : "");
        })));
      }), this.state.modeEdition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_27__["default"], {
        variant: "extended",
        style: floatingButtonStyle("valider"),
        color: "primary",
        onClick: this.saveDisposition
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_material_ui_icons_SaveOutlined__WEBPACK_IMPORTED_MODULE_28__["default"], {
        sx: {
          mr: 1
        }
      }), "Enregistrer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_27__["default"], {
        variant: "extended",
        style: floatingButtonStyle("annuler"),
        color: "secondary",
        onClick: this.discardDisposition
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_material_ui_icons_BlockOutlined__WEBPACK_IMPORTED_MODULE_29__["default"], {
        sx: {
          mr: 1
        }
      }), "Annuler")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_27__["default"], {
        variant: "extended",
        style: floatingButtonStyle("edition"),
        color: "primary",
        onClick: this.switchEditMode
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_30__["default"], {
        sx: {
          mr: 1
        }
      }), "Mode Edition")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_ImageViewer__WEBPACK_IMPORTED_MODULE_25__["default"], {
        image: this.state.imageAVisualiser,
        visible: this.state.afficherImage,
        setVisibility: this.setAfficherImage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_sub_components_thumbnail__WEBPACK_IMPORTED_MODULE_26__["default"], null));
    }
  }]);

  return ImagesGallery;
}(react__WEBPACK_IMPORTED_MODULE_22__.Component);

var SymfonyData = window.symfonyDataBinding;
var currentRoute = SymfonyData.reactRoute;

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(react__WEBPACK_IMPORTED_MODULE_22__.Fragment, null, currentRoute == "book" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(ImagesGallery, SymfonyData.data) : "", currentRoute == "contact" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("h3", null, "Contact") : "");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_material-ui_core_Fab_Fab_js-node_modules_material-ui_icons_BlockOutlined-5b9656"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsS0FBVjtBQUFpQlosVUFBQUEsT0FBTyxFQUFFO0FBQTFCO0FBQWpCLE9BQWQsRUFBb0UsWUFBTTtBQUN4RSxZQUFJLE1BQUksQ0FBQ00sS0FBTCxDQUFXK0gsUUFBZixFQUNFakgsVUFBVSxDQUFDLFlBQU07QUFDZixnQkFBSSxDQUFDeUgsYUFBTDtBQUNELFNBRlMsRUFFUCxNQUFJLENBQUN2SSxLQUFMLENBQVdnSSxZQUZKLENBQVY7QUFHSCxPQUxEO0FBTUQ7Ozs7RUEzRG9Dbko7OztBQWtIdkNrRixTQUFTLENBQUN2QyxZQUFWLEdBQXlCO0FBQ3ZCcUYsRUFBQUEsT0FBTyxFQUFFLFNBRGM7QUFFdkJrQixFQUFBQSxRQUFRLEVBQUUsSUFGYTtBQUVQO0FBQ2hCQyxFQUFBQSxZQUFZLEVBQUUsSUFIUztBQUdIO0FBQ3BCQyxFQUFBQSxVQUFVLEVBQUUsSUFKVztBQUlMO0FBQ2xCN0gsRUFBQUEsUUFBUSxFQUFFLFFBTGE7QUFLSDtBQUNwQjBHLEVBQUFBLGFBQWEsRUFBRSxTQU5RO0FBTUc7QUFDMUJvQixFQUFBQSxhQUFhLEVBQUUsS0FQUTtBQVF2QnJHLEVBQUFBLEtBQUssRUFBRTtBQVJnQixDQUF6Qjs7Ozs7Ozs7Ozs7O0FDekhBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9JbWFnZVZpZXdlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTW92YWJsZUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21haW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3N1Yi1jb21wb25lbnRzL3RodW1ibmFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvc3ViLWNvbXBvbmVudHMvdGh1bWJuYWlsLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gY29uc29sZS5sb2coXCJ3aW5kb3cubGlzdGVJbWFnZXNcIiwgd2luZG93Lmxpc3RlSW1hZ2VzKTtcblxuXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluXCI7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuXG4vLyBob3QgcmVsb2FkaW5nLiBJdCB3b3JrcyBieSByZXBsYWNpbmcgYSBtb2R1bGUgb2YgdGhlIGFwcGxpY2F0aW9uIFxuLy8gZHVyaW5nIHJ1bnRpbWUgd2l0aCBhbiB1cGRhdGVkIG9uZSBzbyB0aGF0IGl04oCZcyBhdmFpbGFibGUgZm9yIGluc3RhbnQgdXNlLlxuLy8gbW9kdWxlLmhvdC5hY2NlcHQoKTtcblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XHJcbiAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMSB9LFxyXG4gIGVudGVyZWQ6IHsgb3BhY2l0eTogMSB9LFxyXG4gIGV4aXRpbmc6IHsgb3BhY2l0eTogMCB9LFxyXG4gIGV4aXRlZDogeyBvcGFjaXR5OiAwIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVZpZXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlU2hvdyA9IHRoaXMudXBkYXRlU2hvdy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ3JheU1hc2tTdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNSlcIixcclxuICAgICAgekluZGV4OiAyMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbWFnZVN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgdG9wOiBcIjEwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTUwJSlgLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC41KVwiLFxyXG5cclxuICAgICAgekluZGV4OiAzMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTaG93KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KSwgMTAwKTtcclxuICAgIGVsc2UgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gdGhpcy51cGRhdGVTaG93KCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VHJhbnNpdGlvbiBpbj17dGhpcy5wcm9wcy52aXNpYmxlfSB0aW1lb3V0PXs1MDB9PlxyXG4gICAgICAgIHsoc3RhdGUpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSA1MDBtc1wiLFxyXG4gICAgICAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtcInVwbG9hZHMvXCIgKyB0aGlzLnByb3BzLmltYWdlLmltYWdlRmlsZX1cclxuICAgICAgICAgICAgICBhbHQ9e3RoaXMucHJvcHMuaW1hZ2UubmFtZX1cclxuICAgICAgICAgICAgICBzdHlsZT17dGhpcy5pbWFnZVN0eWxlKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmF5LW1hc2tcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt0aGlzLmdyYXlNYXNrU3R5bGUoKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNldFZpc2liaWxpdHkoZmFsc2UpfVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSW1hZ2VWaWV3ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGltYWdlOiB7XHJcbiAgICBzcmM6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmFibGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAvLyBjb25zdCBbZHJhZ0hvdmVyZWQsIHNldERyYWdIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZHJhZ0hvdmVyZWQ6IGZhbHNlLCAvLyBMYSBjYXJ0ZSBlc3QtZWxsZSBzdXJ2b2zDqWUgcGFyIHVuZSBjYXJ0ZSBkcmFnZ8OpZSA/XHJcblxyXG4gICAgICAvLyBTdHlsZXNcclxuICAgICAgd2hpdGVDb2x1bW46IHtcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgfSxcclxuICAgICAgaW5mb0RlcGxhY2VtZW50OiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgfSxcclxuICAgICAgZGlzcGxheUN1dG5lc3M6IHRydWUsXHJcbiAgICAgIGRpc3BsYXlHcmF5TWFzazogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc3R5bGVGcm9tRHJhZ0hvdmVyID0gdGhpcy5zdHlsZUZyb21EcmFnSG92ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0RHJhZ0hvdmVyZWQgPSB0aGlzLnNldERyYWdIb3ZlcmVkLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBzdHlsZUZyb21EcmFnSG92ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kcmFnSG92ZXJlZFxyXG4gICAgICA/IHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IFwidG9wIDAuMnNcIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB0b3A6IFwiMTAwcHhcIixcclxuICAgICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJ0b3AgMC4yc1wiLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgICB6SW5kZXg6IDAsXHJcbiAgICAgICAgfTtcclxuICB9XHJcblxyXG4gIHN0eWxlRnJvbURyYWdIb3ZlcldoaXRlQ29sdW1uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uKHRoaXMuc3RhdGUuZHJhZ0hvdmVyZWRcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuMilcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC4wKVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIG1pbkhlaWdodDogMTAwLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHpJbmRleDogMTAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0RHJhZ0hvdmVyZWQoc3RhdHVzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ0hvdmVyZWQ6IHN0YXR1cyB9KTtcclxuICB9XHJcbiAgbWFpbkNhcmRTdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gICAgICAvLyBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdHlsZUZyb21Ib3ZlcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImxlZnRcIixcclxuICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMTAwcHggNDBweFwiLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICB6SW5kZXg6IDEwLFxyXG4gICAgICBjb2xvcjogdGhpcy5zdGF0ZS5kaXNwbGF5R3JheU1hc2tcclxuICAgICAgICA/IFwicmdiYSg1MCw1MCw1MCwxKVwiXHJcbiAgICAgICAgOiBcInJnYmEoMTAsMTAsMTAsMClcIixcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5kaXNwbGF5R3JheU1hc2tcclxuICAgICAgICA/IFwicmdiYSgyNTUsMjU1LDI1NSwwLjgpXCJcclxuICAgICAgICA6IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQgNTAwbXMsIGNvbG9yIDUwMG1zXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmltYWdlLmlzRW1wdHkpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU9e1wiY2FyZCBzaGFkb3ctc20gbXQtM1wifVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLy8gLi4udGhpcy5zdHlsZUZyb21EcmFnSG92ZXIoKSxcclxuICAgICAgICAgICAgLi4udGhpcy5zdHlsZUZyb21EcmFnSG92ZXJXaGl0ZUNvbHVtbigpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJhZ0VudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERyYWdIb3ZlcmVkKHRydWUpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZ0hvdmVyZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERyYWdIb3ZlcmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tb3ZlSW1hZ2UodGhpcy5wcm9wcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLndoaXRlQ29sdW1ufT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcImNhcmQgc2hhZG93LXNtIG10LTNcIn1cclxuICAgICAgICBzdHlsZT17dGhpcy5tYWluQ2FyZFN0eWxlKCl9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGlzcGxheUdyYXlNYXNrOiB0cnVlIH0pfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlHcmF5TWFzazogZmFsc2UgfSl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5kaXNwbGF5SW1hZ2UuYmluZCh0aGlzLCB0aGlzLnByb3BzLmltYWdlKSgpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlHcmF5TWFzazogZmFsc2UgfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHRvcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9waXRpY2hhdC5wbmdcIiBhbHQ9XCJwaXRpY2hhdFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5zdHlsZUZyb21EcmFnSG92ZXIoKX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17XCJ1cGxvYWRzL1wiICsgdGhpcy5wcm9wcy5pbWFnZS5pbWFnZUZpbGV9XHJcbiAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5pbWFnZS5uYW1lfVxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57dGhpcy5wcm9wcy5pbWFnZS5uYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBkcmFnZ2FibGU9e3RoaXMucHJvcHMubW9kZUVkaXRpb259XHJcbiAgICAgICAgICBzdHlsZT17dGhpcy5zdHlsZUZyb21Ib3ZlcigpfVxyXG4gICAgICAgICAgb25EcmFnRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZ0hvdmVyZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5Q3V0bmVzczogZmFsc2UgfSwgKCkgPT5cclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5Q3V0bmVzczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICB9LCAyMDApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREcmFnSG92ZXJlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERyYWdIb3ZlcmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tb3ZlSW1hZ2UodGhpcy5wcm9wcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHRoaXMucHJvcHMuc2V0RHJhZ2dlZFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmltYWdlLm5hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbk1vdmFibGVDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkaXNwbGF5SW1hZ2U6ICgpID0+IHt9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IEZhYiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFiXCI7XHJcbmltcG9ydCBTYXZlT3V0bGluZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2F2ZU91dGxpbmVkXCI7XHJcbmltcG9ydCBCbG9ja091dGxpbmVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Jsb2NrT3V0bGluZWRcIjtcclxuLy8gaW1wb3J0IE1vZGVFZGl0T3V0bGluZU91dGxpbmVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vZGVFZGl0T3V0bGluZWRcIjtcclxuLy8gaW1wb3J0IE1vZGVFZGl0T3V0bGluZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9kZUVkaXRPdXRsaW5lZFwiO1xyXG5pbXBvcnQgRWRpdE91dGxpbmVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRPdXRsaW5lZFwiO1xyXG5pbXBvcnQgTW92YWJsZUNhcmQgZnJvbSBcIi4vTW92YWJsZUNhcmRcIjtcclxuaW1wb3J0IEltYWdlVmlld2VyIGZyb20gXCIuL0ltYWdlVmlld2VyXCI7XHJcbmltcG9ydCBUaHVtYm5haWwgZnJvbSBcIi4vc3ViLWNvbXBvbmVudHMvdGh1bWJuYWlsXCI7XHJcblxyXG5jbGFzcyBJbWFnZXNHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9wc1wiLCBwcm9wcyk7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZUFWaXN1YWxpc2VyOiB1bmRlZmluZWQsXHJcbiAgICAgIGFmZmljaGVySW1hZ2U6IGZhbHNlLFxyXG4gICAgICBkcmFnZ2VkUG9zaXRpb246IHVuZGVmaW5lZCxcclxuICAgICAgbGlzdGVJbWFnZXNUcmllZTogcHJvcHMubGlzdGVJbWFnZXMsXHJcbiAgICAgIG1vZGVFZGl0aW9uOiBmYWxzZSxcclxuICAgICAgLy8gY2F0ZWdvcnlNYXA6IHtcclxuICAgICAgLy8gICBbXCJCYW5kZSBEZXNzaW7DqWVcIl06IDEsXHJcbiAgICAgIC8vICAgW1wiSWxsdXN0cmF0aW9uXCJdOiAyLFxyXG4gICAgICAvLyB9LFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0RHJhZ2dlZFBvc2l0aW9uID0gdGhpcy5zZXREcmFnZ2VkUG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMubW92ZUltYWdlID0gdGhpcy5tb3ZlSW1hZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubGlzdE9yRW1wdHlDYXJkID0gdGhpcy5saXN0T3JFbXB0eUNhcmQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2F2ZURpc3Bvc2l0aW9uID0gdGhpcy5zYXZlRGlzcG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0QWZmaWNoZXJJbWFnZSA9IHRoaXMuc2V0QWZmaWNoZXJJbWFnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zd2l0Y2hFZGl0TW9kZSA9IHRoaXMuc3dpdGNoRWRpdE1vZGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGlzY2FyZERpc3Bvc2l0aW9uID0gdGhpcy5kaXNjYXJkRGlzcG9zaXRpb24uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHNldERyYWdnZWRQb3NpdGlvbihkcmFnZ2VkUG9zaXRpb24pIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBkcmFnZ2VkUG9zaXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICBtb3ZlSW1hZ2UobGFuZGluZ1Bvc2l0aW9uKSB7XHJcbiAgICBsZXQgZHJhZ2dlZFNlY3Rpb24gPSB0aGlzLnN0YXRlLmRyYWdnZWRQb3NpdGlvbi5zZWN0aW9uO1xyXG4gICAgbGV0IGRyYWdnZWRDb2x1bW4gPSB0aGlzLnN0YXRlLmRyYWdnZWRQb3NpdGlvbi5jb2x1bW47XHJcbiAgICBsZXQgZHJhZ2dlZFJvdyA9IHRoaXMuc3RhdGUuZHJhZ2dlZFBvc2l0aW9uLnJvdztcclxuICAgIGxldCBsYW5kaW5nU2VjdGlvbiA9IGxhbmRpbmdQb3NpdGlvbi5zZWN0aW9uO1xyXG4gICAgbGV0IGxhbmRpbmdDb2x1bW4gPSBsYW5kaW5nUG9zaXRpb24uY29sdW1uO1xyXG4gICAgbGV0IGxhbmRpbmdSb3cgPSBsYW5kaW5nUG9zaXRpb24ucm93O1xyXG4gICAgaWYgKGxhbmRpbmdQb3NpdGlvbiA9PT0gdGhpcy5zdGF0ZS5kcmFnZ2VkUG9zaXRpb24pIHJldHVybjtcclxuXHJcbiAgICBsZXQgZHJhZ2dlZExpc3QgPSB0aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWVbZHJhZ2dlZFNlY3Rpb25dO1xyXG4gICAgbGV0IGxhbmRpbmdMaXN0ID0gdGhpcy5zdGF0ZS5saXN0ZUltYWdlc1RyaWVlW2xhbmRpbmdTZWN0aW9uXTtcclxuXHJcbiAgICBsZXQgbW92ZWRJbWFnZSA9IGRyYWdnZWRMaXN0W2RyYWdnZWRDb2x1bW5dLnNwbGljZShkcmFnZ2VkUm93LCAxKVswXTtcclxuICAgIGlmIChsYW5kaW5nU2VjdGlvbiAhPSBkcmFnZ2VkU2VjdGlvbikge1xyXG4gICAgICBtb3ZlZEltYWdlLmNhdGVnb3J5ID0gbGFuZGluZ1NlY3Rpb247XHJcbiAgICB9XHJcbiAgICBsYW5kaW5nTGlzdFtsYW5kaW5nQ29sdW1uXS5zcGxpY2UobGFuZGluZ1JvdywgMCwgbW92ZWRJbWFnZSk7XHJcblxyXG4gICAgbGV0IHJlY2FwTW9kaWZMaXN0O1xyXG5cclxuICAgIHJlY2FwTW9kaWZMaXN0ID0ge1xyXG4gICAgICBbZHJhZ2dlZFNlY3Rpb25dOiBkcmFnZ2VkTGlzdCxcclxuICAgICAgW2xhbmRpbmdTZWN0aW9uXTogbGFuZGluZ0xpc3QsXHJcbiAgICB9O1xyXG4gICAgbGV0IG5ld0xpc3RlR2xvYmFsZSA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZS5saXN0ZUltYWdlc1RyaWVlLFxyXG4gICAgICAuLi5yZWNhcE1vZGlmTGlzdCxcclxuICAgIH07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5ld0xpc3RlR2xvYmFsZVwiLCBuZXdMaXN0ZUdsb2JhbGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGxpc3RlSW1hZ2VzVHJpZWU6IG5ld0xpc3RlR2xvYmFsZSB9KTtcclxuICB9XHJcblxyXG4gIGxpc3RPckVtcHR5Q2FyZChjb2x1bW4sIHNlY3Rpb24pIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWVbc2VjdGlvbl1bY29sdW1uXS5sZW5ndGggPT09IDApXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vdmFibGVDYXJkXHJcbiAgICAgICAgICBrZXk9e1wiZW1wdHktY29sdW1uLVwiICsgY29sdW1ufVxyXG4gICAgICAgICAgaW1hZ2U9e3sgaXNFbXB0eTogdHJ1ZSB9fVxyXG4gICAgICAgICAgbW92ZUltYWdlPXt0aGlzLm1vdmVJbWFnZX1cclxuICAgICAgICAgIHBvc2l0aW9uPXt7XHJcbiAgICAgICAgICAgIHJvdzogMCxcclxuICAgICAgICAgICAgY29sdW1uLFxyXG4gICAgICAgICAgICBzZWN0aW9uLFxyXG4gICAgICAgICAgICBzZWN0aW9uSWQ6IHRoaXMucHJvcHMuY2F0ZWdvcnlNYXBbc2VjdGlvbl0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5saXN0ZUltYWdlc1RyaWVlW3NlY3Rpb25dW2NvbHVtbl0ubWFwKChpbWFnZSwgcm93KSA9PiAoXHJcbiAgICAgIDxNb3ZhYmxlQ2FyZFxyXG4gICAgICAgIGtleT17aW1hZ2UuaWR9XHJcbiAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgIG1vdmVJbWFnZT17dGhpcy5tb3ZlSW1hZ2V9XHJcbiAgICAgICAgbW9kZUVkaXRpb249e3RoaXMuc3RhdGUubW9kZUVkaXRpb259XHJcbiAgICAgICAgcG9zaXRpb249e3tcclxuICAgICAgICAgIHJvdyxcclxuICAgICAgICAgIGNvbHVtbixcclxuICAgICAgICAgIHNlY3Rpb24sXHJcbiAgICAgICAgICBpbWFnZUlkOiBpbWFnZS5pZCxcclxuICAgICAgICAgIHNlY3Rpb25JZDogaW1hZ2UuY2F0ZWdvcnksXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzZXREcmFnZ2VkUG9zaXRpb249e3RoaXMuc2V0RHJhZ2dlZFBvc2l0aW9ufVxyXG4gICAgICAgIGRpc3BsYXlJbWFnZT17KGltYWdlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW1hZ2VBVmlzdWFsaXNlcjogaW1hZ2UsXHJcbiAgICAgICAgICAgIGFmZmljaGVySW1hZ2U6IHRydWUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICAvLyA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH1cclxuICBzYXZlRGlzcG9zaXRpb24oKSB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0eXBlOiBcImZyb250RGlzcG9cIixcclxuICAgICAgICBkaXNwb3NpdGlvbjogdGhpcy5zdGF0ZS5saXN0ZUltYWdlc1RyaWVlLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXRlZ29yeSBwb3N0IC8gc3VjY2VzcyA6IFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBUaHVtYm5haWwubWVzc2FnZSh7XHJcbiAgICAgICAgICBjb250ZW50OiBcIkNvbmZpZ3VyYXRpb24gc2F1dmVnYXJkw6llXCIsXHJcbiAgICAgICAgICB0aHVtYm5haWxUeXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN3aXRjaEVkaXRNb2RlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBUaHVtYm5haWwubWVzc2FnZSh7XHJcbiAgICAgICAgICBjb250ZW50OiBcIkVycmV1ciBsb3JzIGRlIGwnZW5yZWdpc3RyZW1lbnRcIixcclxuICAgICAgICAgIHRodW1ibmFpbFR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaXNjYXJkRGlzcG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLnN3aXRjaEVkaXRNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRBZmZpY2hlckltYWdlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWZmaWNoZXJJbWFnZTogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hFZGl0TW9kZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlRWRpdGlvbjogIXRoaXMuc3RhdGUubW9kZUVkaXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBmbG9hdGluZ0J1dHRvblN0eWxlID0gKHR5cGUpID0+ICh7XHJcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgIHJpZ2h0OiB0eXBlID09IFwiYW5udWxlclwiID8gXCIxJVwiIDogXCIxMiVcIixcclxuICAgICAgd2lkdGg6IHR5cGUgIT0gXCJlZGl0aW9uXCIgPyAxNjAgOiBcIlwiLFxyXG4gICAgICBib3R0b206IFwiMTAlXCIsXHJcbiAgICAgIHpJbmRleDogMjAsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWUpLm1hcCgoc2VjdGlvbikgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGNydW1iXCIga2V5PXtzZWN0aW9ufT5cclxuICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNhdGVnb3J5TWFwW3NlY3Rpb25dfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uIHJvd1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGlzdGVJbWFnZXNUcmllZVtzZWN0aW9uXS5tYXAoKGNvbCwgY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtcImNvbHVtbi1cIiArIGNvbHVtbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3RoaXMubGlzdE9yRW1wdHlDYXJkKGNvbHVtbiwgc2VjdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgIHtjb2wubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8TW92YWJsZUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJlbXB0eS1jb2x1bW4tXCIgKyBjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17eyBpc0VtcHR5OiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb3ZlSW1hZ2U9e3RoaXMubW92ZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBjb2wubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25JZDogc2VjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5tb2RlRWRpdGlvbiA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGYWJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiZXh0ZW5kZWRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtmbG9hdGluZ0J1dHRvblN0eWxlKFwidmFsaWRlclwiKX1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZURpc3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFNhdmVPdXRsaW5lZEljb24gc3g9e3sgbXI6IDEgfX0gLz5cclxuICAgICAgICAgICAgICBFbnJlZ2lzdHJlclxyXG4gICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgICAgPEZhYlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleHRlbmRlZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2Zsb2F0aW5nQnV0dG9uU3R5bGUoXCJhbm51bGVyXCIpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRpc2NhcmREaXNwb3NpdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxCbG9ja091dGxpbmVkSWNvbiBzeD17eyBtcjogMSB9fSAvPlxyXG4gICAgICAgICAgICAgIEFubnVsZXJcclxuICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZhYlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleHRlbmRlZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2Zsb2F0aW5nQnV0dG9uU3R5bGUoXCJlZGl0aW9uXCIpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zd2l0Y2hFZGl0TW9kZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxFZGl0T3V0bGluZWRJY29uIHN4PXt7IG1yOiAxIH19IC8+XHJcbiAgICAgICAgICAgICAgTW9kZSBFZGl0aW9uXHJcbiAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8SW1hZ2VWaWV3ZXJcclxuICAgICAgICAgIGltYWdlPXt0aGlzLnN0YXRlLmltYWdlQVZpc3VhbGlzZXJ9XHJcbiAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmFmZmljaGVySW1hZ2V9XHJcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5PXt0aGlzLnNldEFmZmljaGVySW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGh1bWJuYWlsIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFN5bWZvbnlEYXRhID0gd2luZG93LnN5bWZvbnlEYXRhQmluZGluZztcclxuY29uc3QgY3VycmVudFJvdXRlID0gU3ltZm9ueURhdGEucmVhY3RSb3V0ZTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2N1cnJlbnRSb3V0ZSA9PSBcImJvb2tcIiA/IDxJbWFnZXNHYWxsZXJ5IHsuLi5TeW1mb255RGF0YS5kYXRhfSAvPiA6IFwiXCJ9XHJcbiAgICAgIHtjdXJyZW50Um91dGUgPT0gXCJjb250YWN0XCIgPyA8aDM+Q29udGFjdDwvaDM+IDogXCJcIn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi90aHVtYm5haWwuc2Nzc1wiO1xyXG5cclxuZnVuY3Rpb24gZGVmSWZVbmRlZih2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGh1bWJuYWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgbGV0IGRlZmF1bHRQYXJhbXMgPSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiQ29udGVudVwiLFxyXG4gICAgICAvLyB2aXNpYmxlOiBmYWxzZSwgLy8gdmlzaWJpbGl0eVxyXG4gICAgICBhdXRvSGlkZTogdHJ1ZSwgLy8gdG8gdXNlIGF1dG8gaGlkZSwgdi1tb2RlbCB3aXRoIGEgYm9vbGVhbiBmb3IgdmlzaWJpbGl0eSBtdXN0IGV4aXN0IGluIHBhcmVudCBjb21wb25lbnRcclxuICAgICAgYXV0b0hpZGVUaW1lOiAzMDAwLCAvLyAvLyBzZXRzIHRpbWVvdXQgYmVmb3JlIGNsb3NlIGluIG1zXHJcbiAgICAgIGNsb3NlQ3Jvc3M6IGZhbHNlLCAvL2Rpc3BsYXlzIGNyb3NzIG9uIHRoZSByaWdodCB0byBjbG9zZSB0aHVtYm5haWxcclxuICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsIC8vIHJpZ2h0LCBsZWZ0LCBjZW50ZXJlZCBhdmFpbGFibGUsIHRodW1ibmFpbCB3aWxsIGFsd2F5cyBiZSBvbiB0aGUgYm90dG9tIG9mIHRoIHNjcmVlblxyXG4gICAgICB0aHVtYm5haWxUeXBlOiBcIm5ldXRyYWxcIiwgLy8gbmV1dHJhbCwgc3VjY2VzcywgZXJyb3IgLSBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAgIGRldGFpbHNCdXR0b246IGZhbHNlLFxyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIGNvbXB1dGVkU3R5bGU6IHsgYm90dG9tOiBcIi0xMDBweFwiIH0sXHJcbiAgICAgIHNob3dEZXRhaWxzOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJObyBmdW5jdGlvbiB3YXMgcHJvdmlkZWQgdG8gVGh1bWJuYWlsICdzaG93RGV0YWlscycgcHJvcFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZXRQYXJhbXM6IGRlZmF1bHRQYXJhbXMsXHJcbiAgICAgIC4uLmRlZmF1bHRQYXJhbXMsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oaWRlVGh1bWJuYWlsID0gdGhpcy5oaWRlVGh1bWJuYWlsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvbXB1dGVkQ2xhc3MgPSB0aGlzLmNvbXB1dGVkQ2xhc3MuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgVGh1bWJuYWlsLnNob3dUaHVtYm5haWwgPSBUaHVtYm5haWwuc2hvd1RodW1ibmFpbC5iaW5kKHRoaXMpO1xyXG4gICAgVGh1bWJuYWlsLm1lc3NhZ2UgPSBUaHVtYm5haWwubWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgVGh1bWJuYWlsLnNldCA9IFRodW1ibmFpbC5zZXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQocGFyYW1zKSB7XHJcbiAgICBsZXQgbmV3U2V0UGFyYW1zID0geyAuLi50aGlzLnN0YXRlLnNldFBhcmFtcywgLi4ucGFyYW1zIH07XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2V0UGFyYW1zOiBuZXdTZXRQYXJhbXMgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbWVzc2FnZShwYXJhbXMpIHtcclxuICAgIHBhcmFtcyA9IGRlZklmVW5kZWYocGFyYW1zLCB7fSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gdXNlZCB0byBsZXQgdGhlIFRodW1ibmFpbC5zZXQgdG8gYmUgZWZmZWN0aXZlXHJcbiAgICAgIGZvciAobGV0IHBhcmFtIGluIHRoaXMuc3RhdGUuc2V0UGFyYW1zKSB7XHJcbiAgICAgICAgcGFyYW1zW3BhcmFtXSA9IGRlZklmVW5kZWYocGFyYW1zW3BhcmFtXSwgdGhpcy5zdGF0ZS5zZXRQYXJhbXNbcGFyYW1dKTsgLy8gaWYgcGFyYW1zW3BhcmFtXSA9PT0gdW5kZWZpbmVkLCBzZXRzIGl0IHdpdGggdGhpcy5zdGF0ZS5zZXRQYXJhbXNbcGFyYW1dXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnBhcmFtcyB9LCAoKSA9PiB7XHJcbiAgICAgICAgVGh1bWJuYWlsLnNob3dUaHVtYm5haWwoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNob3dUaHVtYm5haWwoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29tcHV0ZWRTdHlsZTogeyBib3R0b206IFwiM3ZoXCIsIG9wYWNpdHk6IFwiMTAwXCIgfSB9LCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmF1dG9IaWRlKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oaWRlVGh1bWJuYWlsKCk7XHJcbiAgICAgICAgfSwgdGhpcy5zdGF0ZS5hdXRvSGlkZVRpbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlVGh1bWJuYWlsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXB1dGVkU3R5bGU6IHsgYm90dG9tOiBcIi0xMDBweFwiLCBvcGFjaXR5OiBcIjBcIiB9IH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWRDbGFzcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIFwiY29tcG9zYW50LVRodW1ibmFpbCBcIiArXHJcbiAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24gK1xyXG4gICAgICBcIiBcIiArXHJcbiAgICAgIHRoaXMuc3RhdGUudGh1bWJuYWlsVHlwZS50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAvLyB2LWlmPVwidmlzaWJsZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuY29tcHV0ZWRDbGFzcygpfVxyXG4gICAgICAgICAgLy8gOnN0eWxlPVwiYHdpZHRoOiAke3dpZHRofTtgXCJcclxuICAgICAgICAgIC8vIG9uQ2xpY2s9e3RoaXMuaGlkZVRodW1ibmFpbH1cclxuICAgICAgICAgIHN0eWxlPXt0aGlzLnN0YXRlLmNvbXB1dGVkU3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0ZS1UaHVtYm5haWxcIj57dGhpcy5zdGF0ZS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuY2xvc2VDcm9zcyB8fCAhdGhpcy5zdGF0ZS5hdXRvSGlkZSA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHYtaWY9XCJjbG9zZUNyb3NzXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmcmFtZS1jcm9peCBjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiZmVybWVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVUaHVtYm5haWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDinJbvuI9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGV0YWlsc0J1dHRvbiA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdldC1kZXRhaWxzIGNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJkw6l0YWlsc1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5zaG93RGV0YWlsc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOKEue+4j1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblRodW1ibmFpbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY29udGVudDogXCJDb250ZW51XCIsXHJcbiAgYXV0b0hpZGU6IHRydWUsIC8vIHRvIHVzZSBhdXRvIGhpZGUsIHYtbW9kZWwgd2l0aCBhIGJvb2xlYW4gZm9yIHZpc2liaWxpdHkgbXVzdCBleGlzdCBpbiBwYXJlbnQgY29tcG9uZW50XHJcbiAgYXV0b0hpZGVUaW1lOiAzMDAwLCAvLyAvLyBzZXRzIHRpbWVvdXQgYmVmb3JlIGNsb3NlIGluIG1zXHJcbiAgY2xvc2VDcm9zczogdHJ1ZSwgLy9kaXNwbGF5cyBjcm9zcyBvbiB0aGUgcmlnaHQgdG8gY2xvc2UgdGh1bWJuYWlsXHJcbiAgcG9zaXRpb246IFwiY2VudGVyXCIsIC8vIHJpZ2h0LCBsZWZ0LCBjZW50ZXJlZCBhdmFpbGFibGUsIHRodW1ibmFpbCB3aWxsIGFsd2F5cyBiZSBvbiB0aGUgYm90dG9tIG9mIHRoIHNjcmVlblxyXG4gIHRodW1ibmFpbFR5cGU6IFwibmV1dHJhbFwiLCAvLyBuZXV0cmFsLCBzdWNjZXNzLCBlcnJvciAtIGNoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3JcclxuICBkZXRhaWxzQnV0dG9uOiBmYWxzZSxcclxuICB3aWR0aDogXCJhdXRvXCIsXHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJUcmFuc2l0aW9uIiwidHJhbnNpdGlvblN0eWxlcyIsImVudGVyaW5nIiwib3BhY2l0eSIsImVudGVyZWQiLCJleGl0aW5nIiwiZXhpdGVkIiwiSW1hZ2VWaWV3ZXIiLCJwcm9wcyIsInN0YXRlIiwic2hvdyIsInVwZGF0ZVNob3ciLCJiaW5kIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwidmlzaWJsZSIsInNldFRpbWVvdXQiLCJzZXRTdGF0ZSIsInRyYW5zaXRpb24iLCJpbWFnZSIsImltYWdlRmlsZSIsIm5hbWUiLCJpbWFnZVN0eWxlIiwiZ3JheU1hc2tTdHlsZSIsInNldFZpc2liaWxpdHkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzcmMiLCJNb3ZhYmxlQ2FyZCIsImRyYWdIb3ZlcmVkIiwid2hpdGVDb2x1bW4iLCJ3aWR0aCIsImluZm9EZXBsYWNlbWVudCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZGlzcGxheUN1dG5lc3MiLCJkaXNwbGF5R3JheU1hc2siLCJzdHlsZUZyb21EcmFnSG92ZXIiLCJzZXREcmFnSG92ZXJlZCIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJzdGF0dXMiLCJ1c2VyU2VsZWN0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImN1cnNvciIsImNvbG9yIiwiaXNFbXB0eSIsInN0eWxlRnJvbURyYWdIb3ZlcldoaXRlQ29sdW1uIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwibW92ZUltYWdlIiwibWFpbkNhcmRTdHlsZSIsImRpc3BsYXlJbWFnZSIsIm1vZGVFZGl0aW9uIiwic3R5bGVGcm9tSG92ZXIiLCJzZXREcmFnZ2VkUG9zaXRpb24iLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmFiIiwiU2F2ZU91dGxpbmVkSWNvbiIsIkJsb2NrT3V0bGluZWRJY29uIiwiRWRpdE91dGxpbmVkSWNvbiIsIlRodW1ibmFpbCIsIkltYWdlc0dhbGxlcnkiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VBVmlzdWFsaXNlciIsInVuZGVmaW5lZCIsImFmZmljaGVySW1hZ2UiLCJkcmFnZ2VkUG9zaXRpb24iLCJsaXN0ZUltYWdlc1RyaWVlIiwibGlzdGVJbWFnZXMiLCJsaXN0T3JFbXB0eUNhcmQiLCJzYXZlRGlzcG9zaXRpb24iLCJzZXRBZmZpY2hlckltYWdlIiwic3dpdGNoRWRpdE1vZGUiLCJkaXNjYXJkRGlzcG9zaXRpb24iLCJsYW5kaW5nUG9zaXRpb24iLCJkcmFnZ2VkU2VjdGlvbiIsInNlY3Rpb24iLCJkcmFnZ2VkQ29sdW1uIiwiY29sdW1uIiwiZHJhZ2dlZFJvdyIsInJvdyIsImxhbmRpbmdTZWN0aW9uIiwibGFuZGluZ0NvbHVtbiIsImxhbmRpbmdSb3ciLCJkcmFnZ2VkTGlzdCIsImxhbmRpbmdMaXN0IiwibW92ZWRJbWFnZSIsInNwbGljZSIsImNhdGVnb3J5IiwicmVjYXBNb2RpZkxpc3QiLCJuZXdMaXN0ZUdsb2JhbGUiLCJsZW5ndGgiLCJzZWN0aW9uSWQiLCJjYXRlZ29yeU1hcCIsIm1hcCIsImlkIiwiaW1hZ2VJZCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0eXBlIiwiZGlzcG9zaXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiY29udGVudCIsInRodW1ibmFpbFR5cGUiLCJlcnIiLCJ2YWx1ZSIsImZsb2F0aW5nQnV0dG9uU3R5bGUiLCJPYmplY3QiLCJrZXlzIiwiY29sIiwiZmxleERpcmVjdGlvbiIsIm1yIiwiU3ltZm9ueURhdGEiLCJ3aW5kb3ciLCJzeW1mb255RGF0YUJpbmRpbmciLCJjdXJyZW50Um91dGUiLCJyZWFjdFJvdXRlIiwiZGVmSWZVbmRlZiIsImRlZmF1bHRWYWx1ZSIsImRlZmF1bHRQYXJhbXMiLCJhdXRvSGlkZSIsImF1dG9IaWRlVGltZSIsImNsb3NlQ3Jvc3MiLCJkZXRhaWxzQnV0dG9uIiwiY29tcHV0ZWRTdHlsZSIsInNob3dEZXRhaWxzIiwid2FybiIsInNldFBhcmFtcyIsImhpZGVUaHVtYm5haWwiLCJjb21wdXRlZENsYXNzIiwic2hvd1RodW1ibmFpbCIsInNldCIsInRvTG93ZXJDYXNlIiwicGFyYW1zIiwibmV3U2V0UGFyYW1zIiwicGFyYW0iXSwic291cmNlUm9vdCI6IiJ9