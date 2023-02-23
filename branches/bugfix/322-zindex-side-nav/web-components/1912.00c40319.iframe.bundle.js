"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[1912],{"./dist/esm/chevron-icon-98c98242.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>chevronIcon});var chevronIcon='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},"./dist/esm/ic-breadcrumb.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_breadcrumb:()=>Breadcrumb});__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/index-1500de1f.js"),_chevron_icon_98c98242_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/esm/chevron-icon-98c98242.js"),_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/helpers-3aa2f5a5.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Breadcrumb=function(){function Breadcrumb(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Breadcrumb),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.r)(this,hostRef),this.renderDefaultBreadcrumb=function(current,pageTitle,describedById,href){return current&&(null!=pageTitle&&""!==pageTitle)?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("span",{class:{"current-page-container":current}},(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_10__.i)(_this.el,"icon")&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot",{name:"icon"}),pageTitle):(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("ic-link",{href,class:"breadcrumb-link","aria-describedby":_this.showBackIcon&&describedById&&describedById},_this.showBackIcon&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("div",{class:"back-icon",innerHTML:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>\n</svg>\n'}),(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_10__.i)(_this.el,"icon")&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot",{name:"icon"}),pageTitle)},this.setSlottedCurrentPageClass=function(){var icLink=_this.el.querySelector("ic-link");icLink&&(icLink.classList.remove("current-page"),_this.current&&(icLink.classList.contains("current-page")||icLink.classList.add("breadcrumb-link","current-page")))},this.pageTitle=void 0,this.href=void 0,this.current=!1,this.showBackIcon=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Breadcrumb,[{key:"componentWillRender",value:function componentWillRender(){this.setSlottedCurrentPageClass()}},{key:"render",value:function render(){var current=this.current,href=this.href,pageTitle=this.pageTitle,describedById=(pageTitle&&pageTitle.toLowerCase().replace(" ","-"))+"-describedby",hasPageTitle=null!=pageTitle&&""!==pageTitle,hasHref=null!=href&&""!==href;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.H,{class:{back:this.showBackIcon},"aria-current":current&&"page",role:"listitem"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("div",{class:"breadcrumb"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("span",{innerHTML:_chevron_icon_98c98242_js__WEBPACK_IMPORTED_MODULE_12__.c,class:"chevron","aria-hidden":"true"}),this.showBackIcon&&describedById&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("span",{id:describedById,class:"hide"},"Back to "+pageTitle),hasPageTitle&&hasHref?this.renderDefaultBreadcrumb(current,pageTitle,describedById,href):(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.h)("slot",null)))}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_9__.g)(this)}}]),Breadcrumb}();Breadcrumb.style=':host{display:block;margin:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}:host .breadcrumb{display:flex;align-items:center;white-space:nowrap;gap:var(--ic-space-xs);min-height:var(--ic-space-lg)}:host .chevron{width:var(--ic-space-lg);height:var(--ic-space-lg)}:host .chevron svg{color:var(--ic-architectural-400)}:host(:first-child) .chevron{display:none}.back-icon svg{color:var(--ic-hyperlink)}:host(.back){display:flex;align-items:center}:host(.back) .chevron{display:none}ic-link{--breadcrumb-link-display:flex;--breadcrumb-link-align-items:center;--breadcrumb-link-gap:var(--ic-space-xs)}:host([aria-current="page"]) .current-page-container{display:flex;align-items:center;gap:var(--ic-space-xs)}:host(.collapsed-breadcrumb-wrapper){margin-right:var(--ic-space-xs) !important;display:flex;align-items:center;gap:var(--ic-space-xs)}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb){border:none;background-color:transparent;color:var(--ic-hyperlink);text-decoration:underline;font-weight:var(--ic-font-weight-bold);cursor:pointer}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){outline:var(--ic-hc-focus-outline);text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%}.hide,:host(.collapsed-breadcrumb-wrapper) ::slotted(.hide){display:none}@media (forced-colors: active){.back-icon svg{color:currentcolor}}'}}]);