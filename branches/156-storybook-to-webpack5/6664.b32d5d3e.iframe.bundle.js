"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6664],{"./dist/esm/ic-theme.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_theme:()=>Theme});__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/esm/helpers-e090fe7e.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Theme=function(){function Theme(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Theme),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_5__.r)(this,hostRef),this.icThemeChange=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_5__.c)(this,"icThemeChange",7),this.setThemeColor=function(){if(null!==_this.color){var colorRGB=null,firstChar=_this.color.slice(0,1);"#"===firstChar?colorRGB=(0,_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_6__.A)(_this.color):"r"===firstChar.toLowerCase()&&(colorRGB=(0,_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_6__.B)(_this.color)),_this.setThemeRGB(colorRGB)}},this.setThemeRGB=function(colorRGB){if(null!==colorRGB){var root=document.documentElement;root.style.setProperty("--ic-theme-primary-r",colorRGB.r.toString()),root.style.setProperty("--ic-theme-primary-g",colorRGB.g.toString()),root.style.setProperty("--ic-theme-primary-b",colorRGB.b.toString());var foregroundColor=(0,_helpers_e090fe7e_js__WEBPACK_IMPORTED_MODULE_6__.j)();_this.icThemeChange.emit({mode:foregroundColor,color:colorRGB})}},this.color=null}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Theme,[{key:"watchColorPropHandler",value:function watchColorPropHandler(){this.setThemeColor()}},{key:"componentWillLoad",value:function componentWillLoad(){this.setThemeColor()}},{key:"render",value:function render(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_5__.H,null)}}],[{key:"watchers",get:function get(){return{color:["watchColorPropHandler"]}}}]),Theme}()}}]);