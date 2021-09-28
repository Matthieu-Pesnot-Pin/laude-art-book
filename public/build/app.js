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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmlCLFVBQUFBLE9BQU8sRUFBRTtBQUExQjtBQUFqQixPQUFkLEVBQW9FLFlBQU07QUFDeEUsWUFBSSxNQUFJLENBQUMzRSxLQUFMLENBQVcySCxRQUFmLEVBQ0VwQyxVQUFVLENBQUMsWUFBTTtBQUNmLGdCQUFJLENBQUM0QyxhQUFMO0FBQ0QsU0FGUyxFQUVQLE1BQUksQ0FBQ25JLEtBQUwsQ0FBVzRILFlBRkosQ0FBVjtBQUdILE9BTEQ7QUFNRDs7OztFQTNEb0NuSjs7O0FBa0h2Q2tCLFNBQVMsQ0FBQ21HLFlBQVYsR0FBeUI7QUFDdkI1QyxFQUFBQSxPQUFPLEVBQUUsU0FEYztBQUV2QnlFLEVBQUFBLFFBQVEsRUFBRSxJQUZhO0FBRVA7QUFDaEJDLEVBQUFBLFlBQVksRUFBRSxJQUhTO0FBR0g7QUFDcEJDLEVBQUFBLFVBQVUsRUFBRSxJQUpXO0FBSUw7QUFDbEJ0RSxFQUFBQSxRQUFRLEVBQUUsUUFMYTtBQUtIO0FBQ3BCSixFQUFBQSxhQUFhLEVBQUUsU0FOUTtBQU1HO0FBQzFCMkUsRUFBQUEsYUFBYSxFQUFFLEtBUFE7QUFRdkJyRSxFQUFBQSxLQUFLLEVBQUU7QUFSZ0IsQ0FBekI7Ozs7Ozs7Ozs7OztBQ3pIQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSW1hZ2VWaWV3ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL01vdmFibGVDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zdWItY29tcG9uZW50cy90aHVtYm5haWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3N1Yi1jb21wb25lbnRzL3RodW1ibmFpbC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIGNvbnNvbGUubG9nKFwid2luZG93Lmxpc3RlSW1hZ2VzXCIsIHdpbmRvdy5saXN0ZUltYWdlcyk7XG5cblxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZVwiO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcblxuLy8gaG90IHJlbG9hZGluZy4gSXQgd29ya3MgYnkgcmVwbGFjaW5nIGEgbW9kdWxlIG9mIHRoZSBhcHBsaWNhdGlvbiBcbi8vIGR1cmluZyBydW50aW1lIHdpdGggYW4gdXBkYXRlZCBvbmUgc28gdGhhdCBpdOKAmXMgYXZhaWxhYmxlIGZvciBpbnN0YW50IHVzZS5cbi8vIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgRmFiIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIjtcclxuaW1wb3J0IFNhdmVPdXRsaW5lZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TYXZlT3V0bGluZWRcIjtcclxuaW1wb3J0IEJsb2NrT3V0bGluZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmxvY2tPdXRsaW5lZFwiO1xyXG4vLyBpbXBvcnQgTW9kZUVkaXRPdXRsaW5lT3V0bGluZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9kZUVkaXRPdXRsaW5lZFwiO1xyXG4vLyBpbXBvcnQgTW9kZUVkaXRPdXRsaW5lZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb2RlRWRpdE91dGxpbmVkXCI7XHJcbmltcG9ydCBFZGl0T3V0bGluZWRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdE91dGxpbmVkXCI7XHJcbmltcG9ydCBNb3ZhYmxlQ2FyZCBmcm9tIFwiLi9Nb3ZhYmxlQ2FyZFwiO1xyXG5pbXBvcnQgSW1hZ2VWaWV3ZXIgZnJvbSBcIi4vSW1hZ2VWaWV3ZXJcIjtcclxuaW1wb3J0IFRodW1ibmFpbCBmcm9tIFwiLi9zdWItY29tcG9uZW50cy90aHVtYm5haWxcIjtcclxuXHJcbmNsYXNzIEltYWdlc0dhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInByb3BzXCIsIHByb3BzKTtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlQVZpc3VhbGlzZXI6IHVuZGVmaW5lZCxcclxuICAgICAgYWZmaWNoZXJJbWFnZTogZmFsc2UsXHJcbiAgICAgIGRyYWdnZWRQb3NpdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICBsaXN0ZUltYWdlc1RyaWVlOiBwcm9wcy5saXN0ZUltYWdlcyxcclxuICAgICAgbW9kZUVkaXRpb246IGZhbHNlLFxyXG4gICAgICAvLyBjYXRlZ29yeU1hcDoge1xyXG4gICAgICAvLyAgIFtcIkJhbmRlIERlc3NpbsOpZVwiXTogMSxcclxuICAgICAgLy8gICBbXCJJbGx1c3RyYXRpb25cIl06IDIsXHJcbiAgICAgIC8vIH0sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXREcmFnZ2VkUG9zaXRpb24gPSB0aGlzLnNldERyYWdnZWRQb3NpdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5tb3ZlSW1hZ2UgPSB0aGlzLm1vdmVJbWFnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5saXN0T3JFbXB0eUNhcmQgPSB0aGlzLmxpc3RPckVtcHR5Q2FyZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zYXZlRGlzcG9zaXRpb24gPSB0aGlzLnNhdmVEaXNwb3NpdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRBZmZpY2hlckltYWdlID0gdGhpcy5zZXRBZmZpY2hlckltYWdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN3aXRjaEVkaXRNb2RlID0gdGhpcy5zd2l0Y2hFZGl0TW9kZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kaXNjYXJkRGlzcG9zaXRpb24gPSB0aGlzLmRpc2NhcmREaXNwb3NpdGlvbi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc2V0RHJhZ2dlZFBvc2l0aW9uKGRyYWdnZWRQb3NpdGlvbikge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGRyYWdnZWRQb3NpdGlvbiB9KTtcclxuICB9XHJcblxyXG4gIG1vdmVJbWFnZShsYW5kaW5nUG9zaXRpb24pIHtcclxuICAgIGxldCBkcmFnZ2VkU2VjdGlvbiA9IHRoaXMuc3RhdGUuZHJhZ2dlZFBvc2l0aW9uLnNlY3Rpb247XHJcbiAgICBsZXQgZHJhZ2dlZENvbHVtbiA9IHRoaXMuc3RhdGUuZHJhZ2dlZFBvc2l0aW9uLmNvbHVtbjtcclxuICAgIGxldCBkcmFnZ2VkUm93ID0gdGhpcy5zdGF0ZS5kcmFnZ2VkUG9zaXRpb24ucm93O1xyXG4gICAgbGV0IGxhbmRpbmdTZWN0aW9uID0gbGFuZGluZ1Bvc2l0aW9uLnNlY3Rpb247XHJcbiAgICBsZXQgbGFuZGluZ0NvbHVtbiA9IGxhbmRpbmdQb3NpdGlvbi5jb2x1bW47XHJcbiAgICBsZXQgbGFuZGluZ1JvdyA9IGxhbmRpbmdQb3NpdGlvbi5yb3c7XHJcbiAgICBpZiAobGFuZGluZ1Bvc2l0aW9uID09PSB0aGlzLnN0YXRlLmRyYWdnZWRQb3NpdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBkcmFnZ2VkTGlzdCA9IHRoaXMuc3RhdGUubGlzdGVJbWFnZXNUcmllZVtkcmFnZ2VkU2VjdGlvbl07XHJcbiAgICBsZXQgbGFuZGluZ0xpc3QgPSB0aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWVbbGFuZGluZ1NlY3Rpb25dO1xyXG5cclxuICAgIGxldCBtb3ZlZEltYWdlID0gZHJhZ2dlZExpc3RbZHJhZ2dlZENvbHVtbl0uc3BsaWNlKGRyYWdnZWRSb3csIDEpWzBdO1xyXG4gICAgaWYgKGxhbmRpbmdTZWN0aW9uICE9IGRyYWdnZWRTZWN0aW9uKSB7XHJcbiAgICAgIG1vdmVkSW1hZ2UuY2F0ZWdvcnkgPSBsYW5kaW5nU2VjdGlvbjtcclxuICAgIH1cclxuICAgIGxhbmRpbmdMaXN0W2xhbmRpbmdDb2x1bW5dLnNwbGljZShsYW5kaW5nUm93LCAwLCBtb3ZlZEltYWdlKTtcclxuXHJcbiAgICBsZXQgcmVjYXBNb2RpZkxpc3Q7XHJcblxyXG4gICAgcmVjYXBNb2RpZkxpc3QgPSB7XHJcbiAgICAgIFtkcmFnZ2VkU2VjdGlvbl06IGRyYWdnZWRMaXN0LFxyXG4gICAgICBbbGFuZGluZ1NlY3Rpb25dOiBsYW5kaW5nTGlzdCxcclxuICAgIH07XHJcbiAgICBsZXQgbmV3TGlzdGVHbG9iYWxlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWUsXHJcbiAgICAgIC4uLnJlY2FwTW9kaWZMaXN0LFxyXG4gICAgfTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmV3TGlzdGVHbG9iYWxlXCIsIG5ld0xpc3RlR2xvYmFsZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgbGlzdGVJbWFnZXNUcmllZTogbmV3TGlzdGVHbG9iYWxlIH0pO1xyXG4gIH1cclxuXHJcbiAgbGlzdE9yRW1wdHlDYXJkKGNvbHVtbiwgc2VjdGlvbikge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubGlzdGVJbWFnZXNUcmllZVtzZWN0aW9uXVtjb2x1bW5dLmxlbmd0aCA9PT0gMClcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TW92YWJsZUNhcmRcclxuICAgICAgICAgIGtleT17XCJlbXB0eS1jb2x1bW4tXCIgKyBjb2x1bW59XHJcbiAgICAgICAgICBpbWFnZT17eyBpc0VtcHR5OiB0cnVlIH19XHJcbiAgICAgICAgICBtb3ZlSW1hZ2U9e3RoaXMubW92ZUltYWdlfVxyXG4gICAgICAgICAgcG9zaXRpb249e3tcclxuICAgICAgICAgICAgcm93OiAwLFxyXG4gICAgICAgICAgICBjb2x1bW4sXHJcbiAgICAgICAgICAgIHNlY3Rpb24sXHJcbiAgICAgICAgICAgIHNlY3Rpb25JZDogdGhpcy5wcm9wcy5jYXRlZ29yeU1hcFtzZWN0aW9uXSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWVbc2VjdGlvbl1bY29sdW1uXS5tYXAoKGltYWdlLCByb3cpID0+IChcclxuICAgICAgPE1vdmFibGVDYXJkXHJcbiAgICAgICAga2V5PXtpbWFnZS5pZH1cclxuICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgbW92ZUltYWdlPXt0aGlzLm1vdmVJbWFnZX1cclxuICAgICAgICBtb2RlRWRpdGlvbj17dGhpcy5zdGF0ZS5tb2RlRWRpdGlvbn1cclxuICAgICAgICBwb3NpdGlvbj17e1xyXG4gICAgICAgICAgcm93LFxyXG4gICAgICAgICAgY29sdW1uLFxyXG4gICAgICAgICAgc2VjdGlvbixcclxuICAgICAgICAgIGltYWdlSWQ6IGltYWdlLmlkLFxyXG4gICAgICAgICAgc2VjdGlvbklkOiBpbWFnZS5jYXRlZ29yeSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHNldERyYWdnZWRQb3NpdGlvbj17dGhpcy5zZXREcmFnZ2VkUG9zaXRpb259XHJcbiAgICAgICAgZGlzcGxheUltYWdlPXsoaW1hZ2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbWFnZUFWaXN1YWxpc2VyOiBpbWFnZSxcclxuICAgICAgICAgICAgYWZmaWNoZXJJbWFnZTogdHJ1ZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIC8vIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfVxyXG4gIHNhdmVEaXNwb3NpdGlvbigpIHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGlcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHR5cGU6IFwiZnJvbnREaXNwb1wiLFxyXG4gICAgICAgIGRpc3Bvc2l0aW9uOiB0aGlzLnN0YXRlLmxpc3RlSW1hZ2VzVHJpZWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhdGVnb3J5IHBvc3QgLyBzdWNjZXNzIDogXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIFRodW1ibmFpbC5tZXNzYWdlKHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiQ29uZmlndXJhdGlvbiBzYXV2ZWdhcmTDqWVcIixcclxuICAgICAgICAgIHRodW1ibmFpbFR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoRWRpdE1vZGUoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIFRodW1ibmFpbC5tZXNzYWdlKHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiRXJyZXVyIGxvcnMgZGUgbCdlbnJlZ2lzdHJlbWVudFwiLFxyXG4gICAgICAgICAgdGh1bWJuYWlsVHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpc2NhcmREaXNwb3NpdGlvbigpIHtcclxuICAgIHRoaXMuc3dpdGNoRWRpdE1vZGUoKTtcclxuICB9XHJcblxyXG4gIHNldEFmZmljaGVySW1hZ2UodmFsdWUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZmZpY2hlckltYWdlOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIHN3aXRjaEVkaXRNb2RlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGVFZGl0aW9uOiAhdGhpcy5zdGF0ZS5tb2RlRWRpdGlvbiB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGZsb2F0aW5nQnV0dG9uU3R5bGUgPSAodHlwZSkgPT4gKHtcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgcmlnaHQ6IHR5cGUgPT0gXCJhbm51bGVyXCIgPyBcIjElXCIgOiBcIjEyJVwiLFxyXG4gICAgICB3aWR0aDogdHlwZSAhPSBcImVkaXRpb25cIiA/IDE2MCA6IFwiXCIsXHJcbiAgICAgIGJvdHRvbTogXCIxMCVcIixcclxuICAgICAgekluZGV4OiAyMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RhdGUubGlzdGVJbWFnZXNUcmllZSkubWFwKChzZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIiBrZXk9e3NlY3Rpb259PlxyXG4gICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY2F0ZWdvcnlNYXBbc2VjdGlvbl19PC9oMz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb24gcm93XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5saXN0ZUltYWdlc1RyaWVlW3NlY3Rpb25dLm1hcCgoY29sLCBjb2x1bW4pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNtXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e1wiY29sdW1uLVwiICsgY29sdW1ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5saXN0T3JFbXB0eUNhcmQoY29sdW1uLCBzZWN0aW9uKX1cclxuICAgICAgICAgICAgICAgICAge2NvbC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZhYmxlQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtcImVtcHR5LWNvbHVtbi1cIiArIGNvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXt7IGlzRW1wdHk6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1vdmVJbWFnZT17dGhpcy5tb3ZlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IGNvbC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbklkOiBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHt0aGlzLnN0YXRlLm1vZGVFZGl0aW9uID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZhYlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJleHRlbmRlZFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2Zsb2F0aW5nQnV0dG9uU3R5bGUoXCJ2YWxpZGVyXCIpfVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlRGlzcG9zaXRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2F2ZU91dGxpbmVkSWNvbiBzeD17eyBtcjogMSB9fSAvPlxyXG4gICAgICAgICAgICAgIEVucmVnaXN0cmVyXHJcbiAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICA8RmFiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImV4dGVuZGVkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZmxvYXRpbmdCdXR0b25TdHlsZShcImFubnVsZXJcIil9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGlzY2FyZERpc3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEJsb2NrT3V0bGluZWRJY29uIHN4PXt7IG1yOiAxIH19IC8+XHJcbiAgICAgICAgICAgICAgQW5udWxlclxyXG4gICAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RmFiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImV4dGVuZGVkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZmxvYXRpbmdCdXR0b25TdHlsZShcImVkaXRpb25cIil9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN3aXRjaEVkaXRNb2RlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZEljb24gc3g9e3sgbXI6IDEgfX0gLz5cclxuICAgICAgICAgICAgICBNb2RlIEVkaXRpb25cclxuICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxJbWFnZVZpZXdlclxyXG4gICAgICAgICAgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2VBVmlzdWFsaXNlcn1cclxuICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuYWZmaWNoZXJJbWFnZX1cclxuICAgICAgICAgIHNldFZpc2liaWxpdHk9e3RoaXMuc2V0QWZmaWNoZXJJbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaHVtYm5haWwgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgU3ltZm9ueURhdGEgPSB3aW5kb3cuc3ltZm9ueURhdGFCaW5kaW5nO1xyXG5jb25zdCBjdXJyZW50Um91dGUgPSBTeW1mb255RGF0YS5yZWFjdFJvdXRlO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y3VycmVudFJvdXRlID09IFwiYm9va1wiID8gPEltYWdlc0dhbGxlcnkgey4uLlN5bWZvbnlEYXRhLmRhdGF9IC8+IDogXCJcIn1cclxuICAgICAge2N1cnJlbnRSb3V0ZSA9PSBcImNvbnRhY3RcIiA/IDxoMz5Db250YWN0PC9oMz4gOiBcIlwifVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XHJcbiAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMSB9LFxyXG4gIGVudGVyZWQ6IHsgb3BhY2l0eTogMSB9LFxyXG4gIGV4aXRpbmc6IHsgb3BhY2l0eTogMCB9LFxyXG4gIGV4aXRlZDogeyBvcGFjaXR5OiAwIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVZpZXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlU2hvdyA9IHRoaXMudXBkYXRlU2hvdy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ3JheU1hc2tTdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNSlcIixcclxuICAgICAgekluZGV4OiAyMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbWFnZVN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgdG9wOiBcIjEwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTUwJSlgLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC41KVwiLFxyXG5cclxuICAgICAgekluZGV4OiAzMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTaG93KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KSwgMTAwKTtcclxuICAgIGVsc2UgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gdGhpcy51cGRhdGVTaG93KCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VHJhbnNpdGlvbiBpbj17dGhpcy5wcm9wcy52aXNpYmxlfSB0aW1lb3V0PXs1MDB9PlxyXG4gICAgICAgIHsoc3RhdGUpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSA1MDBtc1wiLFxyXG4gICAgICAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtcInVwbG9hZHMvXCIgKyB0aGlzLnByb3BzLmltYWdlLmltYWdlRmlsZX1cclxuICAgICAgICAgICAgICBhbHQ9e3RoaXMucHJvcHMuaW1hZ2UubmFtZX1cclxuICAgICAgICAgICAgICBzdHlsZT17dGhpcy5pbWFnZVN0eWxlKCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmF5LW1hc2tcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt0aGlzLmdyYXlNYXNrU3R5bGUoKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNldFZpc2liaWxpdHkoZmFsc2UpfVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSW1hZ2VWaWV3ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGltYWdlOiB7XHJcbiAgICBzcmM6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmFibGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAvLyBjb25zdCBbZHJhZ0hvdmVyZWQsIHNldERyYWdIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZHJhZ0hvdmVyZWQ6IGZhbHNlLCAvLyBMYSBjYXJ0ZSBlc3QtZWxsZSBzdXJ2b2zDqWUgcGFyIHVuZSBjYXJ0ZSBkcmFnZ8OpZSA/XHJcblxyXG4gICAgICAvLyBTdHlsZXNcclxuICAgICAgd2hpdGVDb2x1bW46IHtcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgfSxcclxuICAgICAgaW5mb0RlcGxhY2VtZW50OiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgfSxcclxuICAgICAgZGlzcGxheUN1dG5lc3M6IHRydWUsXHJcbiAgICAgIGRpc3BsYXlHcmF5TWFzazogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc3R5bGVGcm9tRHJhZ0hvdmVyID0gdGhpcy5zdHlsZUZyb21EcmFnSG92ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0RHJhZ0hvdmVyZWQgPSB0aGlzLnNldERyYWdIb3ZlcmVkLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBzdHlsZUZyb21EcmFnSG92ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kcmFnSG92ZXJlZFxyXG4gICAgICA/IHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IFwidG9wIDAuMnNcIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB0b3A6IFwiMTAwcHhcIixcclxuICAgICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJ0b3AgMC4yc1wiLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgICB6SW5kZXg6IDAsXHJcbiAgICAgICAgfTtcclxuICB9XHJcblxyXG4gIHN0eWxlRnJvbURyYWdIb3ZlcldoaXRlQ29sdW1uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uKHRoaXMuc3RhdGUuZHJhZ0hvdmVyZWRcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuMilcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC4wKVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIG1pbkhlaWdodDogMTAwLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHpJbmRleDogMTAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0RHJhZ0hvdmVyZWQoc3RhdHVzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ0hvdmVyZWQ6IHN0YXR1cyB9KTtcclxuICB9XHJcbiAgbWFpbkNhcmRTdHlsZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG4gICAgICAvLyBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdHlsZUZyb21Ib3ZlcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImxlZnRcIixcclxuICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMTAwcHggNDBweFwiLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICB6SW5kZXg6IDEwLFxyXG4gICAgICBjb2xvcjogdGhpcy5zdGF0ZS5kaXNwbGF5R3JheU1hc2tcclxuICAgICAgICA/IFwicmdiYSg1MCw1MCw1MCwxKVwiXHJcbiAgICAgICAgOiBcInJnYmEoMTAsMTAsMTAsMClcIixcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5kaXNwbGF5R3JheU1hc2tcclxuICAgICAgICA/IFwicmdiYSgyNTUsMjU1LDI1NSwwLjgpXCJcclxuICAgICAgICA6IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQgNTAwbXMsIGNvbG9yIDUwMG1zXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmltYWdlLmlzRW1wdHkpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU9e1wiY2FyZCBzaGFkb3ctc20gbXQtM1wifVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLy8gLi4udGhpcy5zdHlsZUZyb21EcmFnSG92ZXIoKSxcclxuICAgICAgICAgICAgLi4udGhpcy5zdHlsZUZyb21EcmFnSG92ZXJXaGl0ZUNvbHVtbigpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJhZ0VudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERyYWdIb3ZlcmVkKHRydWUpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZ0hvdmVyZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERyYWdIb3ZlcmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tb3ZlSW1hZ2UodGhpcy5wcm9wcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLndoaXRlQ29sdW1ufT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcImNhcmQgc2hhZG93LXNtIG10LTNcIn1cclxuICAgICAgICBzdHlsZT17dGhpcy5tYWluQ2FyZFN0eWxlKCl9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGlzcGxheUdyYXlNYXNrOiB0cnVlIH0pfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlHcmF5TWFzazogZmFsc2UgfSl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5kaXNwbGF5SW1hZ2UuYmluZCh0aGlzLCB0aGlzLnByb3BzLmltYWdlKSgpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlHcmF5TWFzazogZmFsc2UgfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHRvcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9waXRpY2hhdC5wbmdcIiBhbHQ9XCJwaXRpY2hhdFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5zdHlsZUZyb21EcmFnSG92ZXIoKX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17XCJ1cGxvYWRzL1wiICsgdGhpcy5wcm9wcy5pbWFnZS5pbWFnZUZpbGV9XHJcbiAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy5pbWFnZS5uYW1lfVxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57dGhpcy5wcm9wcy5pbWFnZS5uYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBkcmFnZ2FibGU9e3RoaXMucHJvcHMubW9kZUVkaXRpb259XHJcbiAgICAgICAgICBzdHlsZT17dGhpcy5zdHlsZUZyb21Ib3ZlcigpfVxyXG4gICAgICAgICAgb25EcmFnRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZ0hvdmVyZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5Q3V0bmVzczogZmFsc2UgfSwgKCkgPT5cclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5Q3V0bmVzczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICB9LCAyMDApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXREcmFnSG92ZXJlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERyYWdIb3ZlcmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tb3ZlSW1hZ2UodGhpcy5wcm9wcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IHRoaXMucHJvcHMuc2V0RHJhZ2dlZFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmltYWdlLm5hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbk1vdmFibGVDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkaXNwbGF5SW1hZ2U6ICgpID0+IHt9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vdGh1bWJuYWlsLnNjc3NcIjtcclxuXHJcbmZ1bmN0aW9uIGRlZklmVW5kZWYodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRodW1ibmFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGxldCBkZWZhdWx0UGFyYW1zID0ge1xyXG4gICAgICBjb250ZW50OiBcIkNvbnRlbnVcIixcclxuICAgICAgLy8gdmlzaWJsZTogZmFsc2UsIC8vIHZpc2liaWxpdHlcclxuICAgICAgYXV0b0hpZGU6IHRydWUsIC8vIHRvIHVzZSBhdXRvIGhpZGUsIHYtbW9kZWwgd2l0aCBhIGJvb2xlYW4gZm9yIHZpc2liaWxpdHkgbXVzdCBleGlzdCBpbiBwYXJlbnQgY29tcG9uZW50XHJcbiAgICAgIGF1dG9IaWRlVGltZTogMzAwMCwgLy8gLy8gc2V0cyB0aW1lb3V0IGJlZm9yZSBjbG9zZSBpbiBtc1xyXG4gICAgICBjbG9zZUNyb3NzOiBmYWxzZSwgLy9kaXNwbGF5cyBjcm9zcyBvbiB0aGUgcmlnaHQgdG8gY2xvc2UgdGh1bWJuYWlsXHJcbiAgICAgIHBvc2l0aW9uOiBcImNlbnRlclwiLCAvLyByaWdodCwgbGVmdCwgY2VudGVyZWQgYXZhaWxhYmxlLCB0aHVtYm5haWwgd2lsbCBhbHdheXMgYmUgb24gdGhlIGJvdHRvbSBvZiB0aCBzY3JlZW5cclxuICAgICAgdGh1bWJuYWlsVHlwZTogXCJuZXV0cmFsXCIsIC8vIG5ldXRyYWwsIHN1Y2Nlc3MsIGVycm9yIC0gY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgICBkZXRhaWxzQnV0dG9uOiBmYWxzZSxcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgICBjb21wdXRlZFN0eWxlOiB7IGJvdHRvbTogXCItMTAwcHhcIiB9LFxyXG4gICAgICBzaG93RGV0YWlsczogKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIFwiTm8gZnVuY3Rpb24gd2FzIHByb3ZpZGVkIHRvIFRodW1ibmFpbCAnc2hvd0RldGFpbHMnIHByb3BcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2V0UGFyYW1zOiBkZWZhdWx0UGFyYW1zLFxyXG4gICAgICAuLi5kZWZhdWx0UGFyYW1zLFxyXG4gICAgfTtcclxuICAgIHRoaXMuaGlkZVRodW1ibmFpbCA9IHRoaXMuaGlkZVRodW1ibmFpbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb21wdXRlZENsYXNzID0gdGhpcy5jb21wdXRlZENsYXNzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIFRodW1ibmFpbC5zaG93VGh1bWJuYWlsID0gVGh1bWJuYWlsLnNob3dUaHVtYm5haWwuYmluZCh0aGlzKTtcclxuICAgIFRodW1ibmFpbC5tZXNzYWdlID0gVGh1bWJuYWlsLm1lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgIFRodW1ibmFpbC5zZXQgPSBUaHVtYm5haWwuc2V0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0KHBhcmFtcykge1xyXG4gICAgbGV0IG5ld1NldFBhcmFtcyA9IHsgLi4udGhpcy5zdGF0ZS5zZXRQYXJhbXMsIC4uLnBhcmFtcyB9O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNldFBhcmFtczogbmV3U2V0UGFyYW1zIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1lc3NhZ2UocGFyYW1zKSB7XHJcbiAgICBwYXJhbXMgPSBkZWZJZlVuZGVmKHBhcmFtcywge30pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vIHVzZWQgdG8gbGV0IHRoZSBUaHVtYm5haWwuc2V0IHRvIGJlIGVmZmVjdGl2ZVxyXG4gICAgICBmb3IgKGxldCBwYXJhbSBpbiB0aGlzLnN0YXRlLnNldFBhcmFtcykge1xyXG4gICAgICAgIHBhcmFtc1twYXJhbV0gPSBkZWZJZlVuZGVmKHBhcmFtc1twYXJhbV0sIHRoaXMuc3RhdGUuc2V0UGFyYW1zW3BhcmFtXSk7IC8vIGlmIHBhcmFtc1twYXJhbV0gPT09IHVuZGVmaW5lZCwgc2V0cyBpdCB3aXRoIHRoaXMuc3RhdGUuc2V0UGFyYW1zW3BhcmFtXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5wYXJhbXMgfSwgKCkgPT4ge1xyXG4gICAgICAgIFRodW1ibmFpbC5zaG93VGh1bWJuYWlsKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaG93VGh1bWJuYWlsKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXB1dGVkU3R5bGU6IHsgYm90dG9tOiBcIjN2aFwiLCBvcGFjaXR5OiBcIjEwMFwiIH0gfSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5hdXRvSGlkZSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGlkZVRodW1ibmFpbCgpO1xyXG4gICAgICAgIH0sIHRoaXMuc3RhdGUuYXV0b0hpZGVUaW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGlkZVRodW1ibmFpbCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wdXRlZFN0eWxlOiB7IGJvdHRvbTogXCItMTAwcHhcIiwgb3BhY2l0eTogXCIwXCIgfSB9KTtcclxuICB9XHJcblxyXG4gIGNvbXB1dGVkQ2xhc3MoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBcImNvbXBvc2FudC1UaHVtYm5haWwgXCIgK1xyXG4gICAgICB0aGlzLnN0YXRlLnBvc2l0aW9uICtcclxuICAgICAgXCIgXCIgK1xyXG4gICAgICB0aGlzLnN0YXRlLnRodW1ibmFpbFR5cGUudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgLy8gdi1pZj1cInZpc2libGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLmNvbXB1dGVkQ2xhc3MoKX1cclxuICAgICAgICAgIC8vIDpzdHlsZT1cImB3aWR0aDogJHt3aWR0aH07YFwiXHJcbiAgICAgICAgICAvLyBvbkNsaWNrPXt0aGlzLmhpZGVUaHVtYm5haWx9XHJcbiAgICAgICAgICBzdHlsZT17dGhpcy5zdGF0ZS5jb21wdXRlZFN0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dGUtVGh1bWJuYWlsXCI+e3RoaXMuc3RhdGUuY29udGVudH08L2Rpdj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNsb3NlQ3Jvc3MgfHwgIXRoaXMuc3RhdGUuYXV0b0hpZGUgPyAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICB2LWlmPVwiY2xvc2VDcm9zc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnJhbWUtY3JvaXggY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cImZlcm1lclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlVGh1bWJuYWlsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg4pyW77iPXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRldGFpbHNCdXR0b24gPyAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZXQtZGV0YWlscyBjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiZMOpdGFpbHNcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUuc2hvd0RldGFpbHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDihLnvuI9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5UaHVtYm5haWwuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNvbnRlbnQ6IFwiQ29udGVudVwiLFxyXG4gIGF1dG9IaWRlOiB0cnVlLCAvLyB0byB1c2UgYXV0byBoaWRlLCB2LW1vZGVsIHdpdGggYSBib29sZWFuIGZvciB2aXNpYmlsaXR5IG11c3QgZXhpc3QgaW4gcGFyZW50IGNvbXBvbmVudFxyXG4gIGF1dG9IaWRlVGltZTogMzAwMCwgLy8gLy8gc2V0cyB0aW1lb3V0IGJlZm9yZSBjbG9zZSBpbiBtc1xyXG4gIGNsb3NlQ3Jvc3M6IHRydWUsIC8vZGlzcGxheXMgY3Jvc3Mgb24gdGhlIHJpZ2h0IHRvIGNsb3NlIHRodW1ibmFpbFxyXG4gIHBvc2l0aW9uOiBcImNlbnRlclwiLCAvLyByaWdodCwgbGVmdCwgY2VudGVyZWQgYXZhaWxhYmxlLCB0aHVtYm5haWwgd2lsbCBhbHdheXMgYmUgb24gdGhlIGJvdHRvbSBvZiB0aCBzY3JlZW5cclxuICB0aHVtYm5haWxUeXBlOiBcIm5ldXRyYWxcIiwgLy8gbmV1dHJhbCwgc3VjY2VzcywgZXJyb3IgLSBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgZGV0YWlsc0J1dHRvbjogZmFsc2UsXHJcbiAgd2lkdGg6IFwiYXV0b1wiLFxyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwidXNlU3RhdGUiLCJheGlvcyIsIkZhYiIsIlNhdmVPdXRsaW5lZEljb24iLCJCbG9ja091dGxpbmVkSWNvbiIsIkVkaXRPdXRsaW5lZEljb24iLCJNb3ZhYmxlQ2FyZCIsIkltYWdlVmlld2VyIiwiVGh1bWJuYWlsIiwiSW1hZ2VzR2FsbGVyeSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiaW1hZ2VBVmlzdWFsaXNlciIsInVuZGVmaW5lZCIsImFmZmljaGVySW1hZ2UiLCJkcmFnZ2VkUG9zaXRpb24iLCJsaXN0ZUltYWdlc1RyaWVlIiwibGlzdGVJbWFnZXMiLCJtb2RlRWRpdGlvbiIsInNldERyYWdnZWRQb3NpdGlvbiIsImJpbmQiLCJtb3ZlSW1hZ2UiLCJsaXN0T3JFbXB0eUNhcmQiLCJzYXZlRGlzcG9zaXRpb24iLCJzZXRBZmZpY2hlckltYWdlIiwic3dpdGNoRWRpdE1vZGUiLCJkaXNjYXJkRGlzcG9zaXRpb24iLCJzZXRTdGF0ZSIsImxhbmRpbmdQb3NpdGlvbiIsImRyYWdnZWRTZWN0aW9uIiwic2VjdGlvbiIsImRyYWdnZWRDb2x1bW4iLCJjb2x1bW4iLCJkcmFnZ2VkUm93Iiwicm93IiwibGFuZGluZ1NlY3Rpb24iLCJsYW5kaW5nQ29sdW1uIiwibGFuZGluZ1JvdyIsImRyYWdnZWRMaXN0IiwibGFuZGluZ0xpc3QiLCJtb3ZlZEltYWdlIiwic3BsaWNlIiwiY2F0ZWdvcnkiLCJyZWNhcE1vZGlmTGlzdCIsIm5ld0xpc3RlR2xvYmFsZSIsImxlbmd0aCIsImlzRW1wdHkiLCJzZWN0aW9uSWQiLCJjYXRlZ29yeU1hcCIsIm1hcCIsImltYWdlIiwiaWQiLCJpbWFnZUlkIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInR5cGUiLCJkaXNwb3NpdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJjb250ZW50IiwidGh1bWJuYWlsVHlwZSIsImVyciIsInZhbHVlIiwiZmxvYXRpbmdCdXR0b25TdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ3aWR0aCIsImJvdHRvbSIsInpJbmRleCIsIk9iamVjdCIsImtleXMiLCJjb2wiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1yIiwiQ29tcG9uZW50IiwiU3ltZm9ueURhdGEiLCJ3aW5kb3ciLCJzeW1mb255RGF0YUJpbmRpbmciLCJjdXJyZW50Um91dGUiLCJyZWFjdFJvdXRlIiwiVHJhbnNpdGlvbiIsInRyYW5zaXRpb25TdHlsZXMiLCJlbnRlcmluZyIsIm9wYWNpdHkiLCJlbnRlcmVkIiwiZXhpdGluZyIsImV4aXRlZCIsInNob3ciLCJ1cGRhdGVTaG93IiwidG9wIiwibGVmdCIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJ2aXNpYmxlIiwic2V0VGltZW91dCIsInRyYW5zaXRpb24iLCJpbWFnZUZpbGUiLCJuYW1lIiwiaW1hZ2VTdHlsZSIsImdyYXlNYXNrU3R5bGUiLCJzZXRWaXNpYmlsaXR5IiwiZGVmYXVsdFByb3BzIiwic3JjIiwiZHJhZ0hvdmVyZWQiLCJ3aGl0ZUNvbHVtbiIsImluZm9EZXBsYWNlbWVudCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZGlzcGxheUN1dG5lc3MiLCJkaXNwbGF5R3JheU1hc2siLCJzdHlsZUZyb21EcmFnSG92ZXIiLCJzZXREcmFnSG92ZXJlZCIsIm1pbkhlaWdodCIsInN0YXR1cyIsInVzZXJTZWxlY3QiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiY3Vyc29yIiwiY29sb3IiLCJzdHlsZUZyb21EcmFnSG92ZXJXaGl0ZUNvbHVtbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm1haW5DYXJkU3R5bGUiLCJkaXNwbGF5SW1hZ2UiLCJzdHlsZUZyb21Ib3ZlciIsImRlZklmVW5kZWYiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0UGFyYW1zIiwiYXV0b0hpZGUiLCJhdXRvSGlkZVRpbWUiLCJjbG9zZUNyb3NzIiwiZGV0YWlsc0J1dHRvbiIsImNvbXB1dGVkU3R5bGUiLCJzaG93RGV0YWlscyIsIndhcm4iLCJzZXRQYXJhbXMiLCJoaWRlVGh1bWJuYWlsIiwiY29tcHV0ZWRDbGFzcyIsInNob3dUaHVtYm5haWwiLCJzZXQiLCJ0b0xvd2VyQ2FzZSIsInBhcmFtcyIsIm5ld1NldFBhcmFtcyIsInBhcmFtIl0sInNvdXJjZVJvb3QiOiIifQ==