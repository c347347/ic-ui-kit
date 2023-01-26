"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[9446],{"./dist/esm/close-icon-2f02b42a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"./dist/esm/error-icon-6046a380.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>errorIcon,w:()=>warningIcon});var warningIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n    <title>warning icon</title>\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>\n</svg>',errorIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n    <title>error icon</title>\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>\n</svg>'},"./dist/esm/ic-toast.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_toast:()=>Toast});__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/index-1500de1f.js"),_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/esm/close-icon-2f02b42a.js"),_error_icon_6046a380_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/esm/error-icon-6046a380.js"),_info_icon_bb47db4d_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/esm/info-icon-bb47db4d.js"),_success_icon_2f71b115_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/esm/success-icon-2f71b115.js"),_helpers_3d41833c_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/helpers-3d41833c.js"),_types_dd515332_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var icon={neutral:_info_icon_bb47db4d_js__WEBPACK_IMPORTED_MODULE_11__.n,info:_info_icon_bb47db4d_js__WEBPACK_IMPORTED_MODULE_11__.i,warning:_error_icon_6046a380_js__WEBPACK_IMPORTED_MODULE_12__.w,error:_error_icon_6046a380_js__WEBPACK_IMPORTED_MODULE_12__.e,success:_success_icon_2f71b115_js__WEBPACK_IMPORTED_MODULE_13__.s},Toast=function(){function Toast(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Toast),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.dismiss=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"dismiss",7),this.dismissAction=function(){_this.dismiss.emit()},this.handleTimer=function(ev){console.log(ev),_this.paused=!_this.paused},this.variant=void 0,this.heading=void 0,this.message=void 0,this.dismissMode="manual",this.autoDismissTimeout=5e3,this.visible=!0,this.paused=!1,this.timerId=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Toast,[{key:"handleDismiss",value:function handleDismiss(){this.visible=!this.visible}},{key:"componentWillLoad",value:function componentWillLoad(){(this.heading.length>70||this.message.length>140)&&console.warn("Too many characters in toast "+(this.heading.length>70?"heading":"message")+". Refer to character limits specified in the prop description"),this.autoDismissTimeout<5e3&&(this.autoDismissTimeout=5e3)}},{key:"componentDidLoad",value:function componentDidLoad(){"automatic"===this.dismissMode&&(this.timerId=setTimeout(this.dismissAction,this.autoDismissTimeout))}},{key:"render",value:function render(){var _class,variant=this.variant,heading=this.heading,message=this.message,dismissMode=this.dismissMode,visible=this.visible,actionContent=(0,_helpers_3d41833c_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.el,"action");return actionContent&&(actionContent[0].appearance=_types_dd515332_js__WEBPACK_IMPORTED_MODULE_10__.I.Light),visible&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.H,{role:"status",onmouseenter:this.handleTimer,onmouseleave:this.handleTimer},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"container"},variant&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"toast-icon-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(_class={},_class.divider=!0,_class["divider-"+variant]=!0,_class)}),"neutral"===variant&&(0,_helpers_3d41833c_js__WEBPACK_IMPORTED_MODULE_9__.i)(this.el,"neutral-icon")?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"neutral-icon"}):(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"toast-icon",innerHTML:icon[variant]})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"toast-content"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"toast-message"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"subtitle-large"},heading),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"body"},message)),(0,_helpers_3d41833c_js__WEBPACK_IMPORTED_MODULE_9__.i)(this.el,"action")&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"toast-action-container"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"action"}))),"manual"===dismissMode&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-button",{class:"dismiss-icon",innerHTML:_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_14__.c,onClick:this.dismissAction,variant:"icon",appearance:_types_dd515332_js__WEBPACK_IMPORTED_MODULE_10__.I.Light,title:"dismiss"})))}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}]),Toast}();Toast.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:absolute;bottom:var(--ic-space-xl);left:50%;transform:translate(-50%);max-width:520px;min-width:288px;box-shadow:var(--ic-elevation-overlay)}.container{min-height:56px;background-color:var(--ic-architectural-800);color:var(--ic-color-white-text);display:flex;align-items:center;position:relative;z-index:var(--ic-z-index-overlay)}.toast-icon-container{height:100%;display:flex;align-items:center}.divider{height:100%;width:var(--ic-space-xs);position:absolute}.divider-neutral{background-color:var(--ic-architectural-500)}.divider-info{background-color:var(--ic-status-info)}.divider-warning{background-color:var(--ic-status-warning-mid)}.divider-error{background-color:var(--ic-status-error)}.divider-success{background-color:var(--ic-status-success)}.toast-icon,::slotted(svg){height:var(--ic-space-lg);margin-left:var(--ic-space-md)}:host([variant=\'neutral\']) .toast-icon svg,::slotted(svg){fill:var(--ic-architectural-500)}:host([variant=\'info\']) .toast-icon svg{fill:var(--ic-status-info)}:host([variant=\'warning\']) .toast-icon svg{fill:var(--ic-status-warning-mid)}:host([variant=\'error\']) .toast-icon svg{fill:var(--ic-status-error)}:host([variant=\'success\']) .toast-icon svg{fill:var(--ic-status-success)}.toast-content{margin-left:var(--ic-space-xs);width:100%}.toast-message{padding:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}.toast-action-container{padding-bottom:var(--ic-space-xs)}.dismiss-icon{padding:var(--ic-space-xs)}@media (max-width: 576px){:host{width:calc(100% - 2 * var(--ic-space-md));bottom:var(--ic-space-lg)}}@media (min-width: 993px){:host{bottom:calc(var(--ic-space-xl) + var(--ic-space-xs))}}@media (forced-colors: active){.container{border:var(--ic-hc-border)}}'},"./dist/esm/info-icon-bb47db4d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>infoIcon,n:()=>neutralIcon});var neutralIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>\n    <title>neutral icon</title>\n</svg>',infoIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>\n    <title>info icon</title>\n</svg>'},"./dist/esm/success-icon-2f71b115.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>successIcon});var successIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">\n    <title>success icon</title>\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>\n</svg>'}}]);