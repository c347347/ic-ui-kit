"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[2167],{"../web-components/dist/esm/ic-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_checkbox:()=>Checkbox});__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../web-components/dist/esm/index-1500de1f.js"),_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../web-components/dist/esm/helpers-3aa2f5a5.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Checkbox=function(){function Checkbox(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Checkbox),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.r)(this,hostRef),this.checkboxChecked=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.c)(this,"checkboxChecked",7),this.icCheck=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.c)(this,"icCheck",7),this.handleClick=function(){_this.checked=!_this.checked,_this.icCheck.emit(),_this.checkboxChecked.emit()},this.handleFormReset=function(){_this.checked=_this.initiallyChecked},this.checked=!1,this.disabled=!1,this.label=void 0,this.value=void 0,this.name=void 0,this.groupLabel=void 0,this.dynamicText="This selection requires additional answers",this.additionalFieldDisplay="static",this.indeterminate=!1,this.initiallyChecked=this.checked}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Checkbox,[{key:"componentDidRender",value:function componentDidRender(){if("static"===this.additionalFieldDisplay){var textfield=this.host.querySelector("ic-text-field");this.checked?textfield&&textfield.removeAttribute("disabled"):textfield&&textfield.setAttribute("disabled","")}else this.checked?this.additionalFieldContainer.style.display="flex":this.additionalFieldContainer.style.display="none"}},{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.host,this.handleFormReset)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_11__.a)([{prop:this.label,propName:"label"},{prop:this.value,propName:"value"}],"Checkbox")}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_11__.r)(this.host,this.handleFormReset)}},{key:"render",value:function render(){var _class,_class2,_this2=this,id="ic-checkbox-"+(void 0!==this.label?this.label:this.value)+"-"+this.groupLabel;return id=id.replace(/ /g,"-"),this.checked?(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_11__.e)(!0,this.host,this.name,this.checked&&this.value,this.disabled):(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_11__.f)(this.host),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.H,null,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:(_class={},_class.container=!0,_class.disabled=this.disabled,_class)},this.checked&&!this.indeterminate&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("svg",{class:"checkmark",width:"1.5rem",height:"1.5rem",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("title",null,"checkmark icon"),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})),this.checked&&this.indeterminate&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"indeterminate-symbol"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("input",{role:"checkbox",class:(_class2={},_class2.checkbox=!0,_class2.checked=this.checked,_class2.indeterminate=this.indeterminate,_class2),type:"checkbox",name:this.name,id,value:this.value,disabled:!!this.disabled||null,checked:this.checked,indeterminate:this.indeterminate,onClick:this.handleClick}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("ic-typography",{variant:"body"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("label",{class:"checkbox-label",htmlFor:id},this.label))),(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_11__.i)(this.host,"additional-field")&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"dynamic-container",ref:function ref(el){return _this2.additionalFieldContainer=el}},"dynamic"===this.additionalFieldDisplay&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:"branch-corner"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",null,"dynamic"===this.additionalFieldDisplay&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("ic-typography",{variant:"caption"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("p",{class:"dynamic-text","aria-live":"polite"},this.dynamicText)),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("div",{class:{"additional-field-wrapper":"static"===this.additionalFieldDisplay}},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.h)("slot",{name:"additional-field"})))))}},{key:"host",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_10__.g)(this)}}]),Checkbox}();Checkbox.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host([disabled]){color:var(--ic-architectural-200);pointer-events:none}:host([small]) .container{margin-bottom:0.625rem}.container{display:flex;width:-moz-fit-content;width:fit-content;margin-bottom:var(--ic-space-sm);margin-left:var(--ic-space-xxs)}.checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:transparent;border:0.063rem solid var(--ic-architectural-300);border-radius:var(--ic-border-radius);outline:none;cursor:pointer;transition:var(--ic-easing-transition-fast)}.checkbox:checked{background-color:var(--ic-action-default);border:0.063rem solid var(--ic-action-default);transition:var(--ic-easing-transition-slow)}.checkbox:checked:disabled{background-color:var(--ic-architectural-200)}.checkbox:indeterminate,.checkbox.indeterminate:checked{background-color:transparent;border:0.125rem solid var(--ic-action-default)}.checkbox:checked:hover{background-color:var(--ic-action-default-hover)}.checkbox:indeterminate:hover,.checkbox.indeterminate:checked:hover{background-color:var(--ic-action-default-bg-hover);border:0.125rem solid var(--ic-action-default-hover)}.checkbox:checked:active{background-color:var(--ic-action-default-active)}.checkbox:indeterminate:active,.checkbox.indeterminate:checked:active{background-color:var(--ic-action-default-bg-active);border:0.125rem solid var(--ic-action-default-active)}.checkbox:hover{background-color:var(--ic-action-default-bg-hover);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-hover);border:0.063rem solid var(--ic-action-default-hover)}.checkbox:active{background-color:var(--ic-action-default-bg-active);box-shadow:0 0 0 0.25rem var(--ic-action-default-bg-active);border:0.063rem solid var(--ic-action-default-active)}.checkbox:focus{box-shadow:var(--ic-border-focus)}.checkbox:disabled{border:0.063rem dashed var(--ic-architectural-200)}.checkbox-label{padding-left:var(--ic-space-sm)}.checkbox-label:hover{cursor:pointer}.checkmark{position:relative;right:calc(-1 * var(--ic-space-lg));margin-left:calc(-1 * var(--ic-space-lg));fill:white;z-index:1;background-color:transparent;pointer-events:none}.indeterminate-symbol{position:relative;width:0.875rem;height:var(--ic-space-xxxs);top:0.688rem;right:-1.188rem;margin-left:-0.875rem;z-index:1;background-color:var(--ic-action-default);pointer-events:none}.container:hover .indeterminate-symbol{background-color:var(--ic-action-default-hover)}.container:active .indeterminate-symbol{background-color:var(--ic-action-default-active)}.additional-field-wrapper{margin-left:2.75rem;margin-top:var(--ic-space-xs)}.branch-corner{color:var(--ic-action-default);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-action-default);border-left:0.125rem solid var(--ic-action-default)}.dynamic-container{display:flex;position:relative;margin-left:0.938rem;margin-top:-0.375rem;margin-bottom:var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-text{color:var(--ic-action-default);margin-top:0.438rem;margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){::slotted(ic-text-field){--input-width:100%}}@media (forced-colors: active){.checkbox{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert;transition:none}.checkbox:checked{transition:none}.checkbox:focus-visible{outline:0.125rem solid highlight}.checkbox:disabled:not(:checked){-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.checkmark{fill:none}.indeterminate-symbol{display:none}}'}}]);