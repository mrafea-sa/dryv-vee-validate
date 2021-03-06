(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DryvVeeValidate"] = factory();
	else
		root["DryvVeeValidate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dryv-vee-mixin.ts":
/*!*******************************!*\
  !*** ./src/dryv-vee-mixin.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar prepareValidation_1 = __webpack_require__(/*! local/prepareValidation */ \"./src/prepareValidation.ts\");\r\nvar mixin = {\r\n    methods: {\r\n        dryvVee: function (e) {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var form;\r\n                var _this = this;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0:\r\n                            if (this.dryvSkipValidate) {\r\n                                this.dryvSkipValidate = false;\r\n                                return [2 /*return*/, true];\r\n                            }\r\n                            e.preventDefault();\r\n                            form = this.$el;\r\n                            this.formConfig = prepareValidation_1.default(this, form);\r\n                            return [4 /*yield*/, this.$validator.validateAll()\r\n                                    .then(function (isValid) {\r\n                                    _this.formConfig.skipRefresh = false;\r\n                                    if (!isValid) {\r\n                                        return false;\r\n                                    }\r\n                                    _this.dryvSkipValidate = true;\r\n                                    _this.$el.submit();\r\n                                    return true;\r\n                                })\r\n                                    .catch(function () { return _this.formConfig.skipRefresh = false; })];\r\n                        case 1: return [2 /*return*/, _a.sent()];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n    }\r\n};\r\nexports.default = mixin;\r\n\n\n//# sourceURL=webpack://DryvVeeValidate/./src/dryv-vee-mixin.ts?");

/***/ }),

/***/ "./src/dryv-vee-remote-rule.ts":
/*!*************************************!*\
  !*** ./src/dryv-vee-remote-rule.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// import axios from \"axios\";\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar w = window;\r\nvar a = w.dryv = (w.dryv || {});\r\nvar vee = a.vee = (a.vee || {});\r\nfunction normalize(txt) {\r\n    txt = txt.replace(\"*.\", \"\");\r\n    return txt.charAt(0).toLowerCase() + txt.slice(1);\r\n}\r\nvar validator = {\r\n    getMessage: function (field, args) { return field + \" is not valid\"; },\r\n    validate: function (value, args) {\r\n        if (args.length < 3) {\r\n            return true;\r\n        }\r\n        var mid = args[0];\r\n        var val = vee[mid];\r\n        if (!val || !val.model) {\r\n            return true;\r\n        }\r\n        if (val.refreshModel) {\r\n            val.refreshModel();\r\n        }\r\n        var model = val.model;\r\n        var fields = args.slice(2)\r\n            .map(function (f) { return normalize(f); })\r\n            .map(function (f) { return f + \"=\" + (model[f] || \"\"); })\r\n            .join(\"&\");\r\n        var url = args[1];\r\n        var sep = url.indexOf(\"?\") < 0 ? \"?\" : \"&\";\r\n        var fullUrl = url + sep + fields;\r\n        return fetch(fullUrl)\r\n            .then(function (response) { return response.json(); })\r\n            .then(function (isValid) { return isValid; });\r\n    }\r\n};\r\nexports.default = validator;\r\n\n\n//# sourceURL=webpack://DryvVeeValidate/./src/dryv-vee-remote-rule.ts?");

/***/ }),

/***/ "./src/dryv-vee-rule.ts":
/*!******************************!*\
  !*** ./src/dryv-vee-rule.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar w = window;\r\nvar a = w.dryv = (w.dryv || {});\r\na.vee = a.vee || {};\r\nvar validator = {\r\n    getMessage: function (_, args) {\r\n        var mid = args[0];\r\n        var vee = window.dryv.vee;\r\n        var error = vee[mid + \"_e\"];\r\n        return error;\r\n    },\r\n    validate: function (_, args) {\r\n        var error = null;\r\n        var mid = args[0];\r\n        var vee = window.dryv.vee;\r\n        var val = vee[mid];\r\n        if (!val || !val.model) {\r\n            return true;\r\n        }\r\n        if (val.refreshModel) {\r\n            val.refreshModel();\r\n        }\r\n        for (var _i = 0, _a = val.v; _i < _a.length; _i++) {\r\n            var func = _a[_i];\r\n            error = func(val.model);\r\n            if (error) {\r\n                break;\r\n            }\r\n        }\r\n        vee[mid + \"_e\"] = error;\r\n        return error == null;\r\n        ;\r\n    }\r\n};\r\nexports.default = validator;\r\n\n\n//# sourceURL=webpack://DryvVeeValidate/./src/dryv-vee-rule.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar dryv_vee_rule_1 = __webpack_require__(/*! local/dryv-vee-rule */ \"./src/dryv-vee-rule.ts\");\r\nvar dryv_vee_remote_rule_1 = __webpack_require__(/*! local/dryv-vee-remote-rule */ \"./src/dryv-vee-remote-rule.ts\");\r\nvar prepareValidation_1 = __webpack_require__(/*! local/prepareValidation */ \"./src/prepareValidation.ts\");\r\nexports.prepareValidation = prepareValidation_1.default;\r\nvar dryv_vee_mixin_1 = __webpack_require__(/*! local/dryv-vee-mixin */ \"./src/dryv-vee-mixin.ts\");\r\nexports.mixin = dryv_vee_mixin_1.default;\r\nfunction init(veeValidate) {\r\n    veeValidate.Validator.extend(\"dryv\", dryv_vee_rule_1.default);\r\n    veeValidate.Validator.extend(\"dryv-remote\", dryv_vee_remote_rule_1.default);\r\n}\r\nexports.init = init;\r\nexports.default = { init: init, mixin: dryv_vee_mixin_1.default, prepareValidation: prepareValidation_1.default };\r\n\n\n//# sourceURL=webpack://DryvVeeValidate/./src/index.ts?");

/***/ }),

/***/ "./src/prepareValidation.ts":
/*!**********************************!*\
  !*** ./src/prepareValidation.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar w = window;\r\nvar a = w.dryv = (w.dryv || {});\r\na.vee = a.vee || {};\r\nfunction refresh(validator, val, form) {\r\n    if (val.config.skipRefresh) {\r\n        return;\r\n    }\r\n    var obj = {};\r\n    for (var i = 0; i < form.childElementCount; i++) {\r\n        updateModelFromElement(form[i], i, obj, validator);\r\n    }\r\n    val.model = obj;\r\n}\r\nexports.refresh = refresh;\r\n;\r\nfunction updateField(obj, inputName, value) {\r\n    if (!inputName) {\r\n        return;\r\n    }\r\n    var names = inputName.replace(/^\\w|\\.\\w/g, function (m) { return m.toLowerCase(); }).split(\".\");\r\n    var max = names.length - 1;\r\n    for (var i = 0; i < names.length; i++) {\r\n        var name_1 = names[i];\r\n        var m = /(\\w+)(\\[(\\d)\\])?/.exec(name_1);\r\n        var field = m[1], index = m[3];\r\n        var parent_1 = obj;\r\n        obj = obj[field];\r\n        if (i < max) {\r\n            if (!obj) {\r\n                obj = parent_1[field] = index ? [] : {};\r\n            }\r\n            if (index) {\r\n                var idx = Number(index);\r\n                obj = obj[idx] ? obj[idx] : (obj[idx] = {});\r\n            }\r\n        }\r\n        else if (index) {\r\n            (obj || (obj = parent_1[field] = []))[Number(index)] = value;\r\n        }\r\n        else {\r\n            parent_1[field] = value;\r\n        }\r\n    }\r\n}\r\n;\r\nfunction updateModelFromElement(element, i, obj, validator) {\r\n    if (!element) {\r\n        return null;\r\n    }\r\n    if (!element.name) {\r\n        if (element.tagName !== \"BUTTON\" && element.type !== \"submit\" && element.type !== \"cancel\") {\r\n            console.warn(\"Form element without name attribute found. DryvVee needs the name attribute to work.\");\r\n        }\r\n        return null;\r\n    }\r\n    var field = validator.fields.find({ name: element.name });\r\n    updateField(obj, field.name, field.value);\r\n    return field;\r\n}\r\nexports.updateModelFromElement = updateModelFromElement;\r\nfunction prepareValidation(component, form) {\r\n    var obj = {};\r\n    var vee = window.dryv.vee;\r\n    var config = {\r\n        skipRefresh: true\r\n    };\r\n    var _loop_1 = function (i) {\r\n        var element = form[i];\r\n        if (!element)\r\n            return \"continue\";\r\n        var field = updateModelFromElement(element, i, obj, component.$validator);\r\n        var mid = element.getAttribute(\"dryv-v\");\r\n        if (mid) {\r\n            var val_1 = vee[mid] || (vee[mid] = {});\r\n            val_1.model = obj;\r\n            val_1.refreshModel = function () { return refresh(component.$validator, val_1, form); };\r\n            val_1.config = config;\r\n            field.update({ bails: false });\r\n        }\r\n    };\r\n    for (var i = 0; i < form.childElementCount; i++) {\r\n        _loop_1(i);\r\n    }\r\n    return config;\r\n}\r\nexports.default = prepareValidation;\r\n\n\n//# sourceURL=webpack://DryvVeeValidate/./src/prepareValidation.ts?");

/***/ })

/******/ });
});