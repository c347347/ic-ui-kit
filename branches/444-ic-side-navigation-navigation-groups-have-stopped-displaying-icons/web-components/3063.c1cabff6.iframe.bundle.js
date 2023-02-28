/*! For license information please see 3063.c1cabff6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[3063],{"./dist/esm/ic-switch.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_switch:()=>Switch});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./dist/esm/index-1500de1f.js"),_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./dist/esm/helpers-3aa2f5a5.js");__webpack_require__("./dist/esm/types-dd515332.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var inputIds=0,Switch=function(){function Switch(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Switch),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.r)(this,hostRef),this.icChange=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.c)(this,"icChange",7),this.icFocus=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.c)(this,"icFocus",7),this.icBlur=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.c)(this,"icBlur",7),this.inputId="ic-switch-input-"+inputIds++,this.handleChange=function(){_this.checkedState=!_this.checkedState,_this.icChange.emit({checked:_this.checkedState,value:_this.value})},this.onFocus=function(){_this.icFocus.emit()},this.onBlur=function(){_this.icBlur.emit()},this.handleFormReset=function(){_this.checkedState=_this.initiallyChecked},this.label=void 0,this.hideLabel=!1,this.helperText="",this.checked=!1,this.small=!1,this.disabled=!1,this.name=this.inputId,this.showState=!1,this.value="on",this.checkedState=!1,this.initiallyChecked=this.checked}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Switch,[{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.el.shadowRoot.querySelector("input")&&this.el.shadowRoot.querySelector("input").focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"componentWillLoad",value:function componentWillLoad(){this.checkedState=this.checked,(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_26__.d)(this.el,this.handleFormReset)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_26__.a)([{prop:this.label,propName:"label"}],"Switch")}},{key:"disconnectedCallback",value:function disconnectedCallback(){(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_26__.r)(this.el,this.handleFormReset)}},{key:"render",value:function render(){var _class,_class2,label=this.label,checkedState=this.checkedState,small=this.small,disabled=this.disabled,name=this.name,showState=this.showState,value=this.value,hideLabel=this.hideLabel,helperText=this.helperText,inputId=this.inputId;(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_26__.e)(!0,this.el,name,checkedState?value:"",disabled);var describedBy=(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_26__.h)(inputId,""!==helperText,!1);return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.H,null,(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("label",{class:(_class={},_class["ic-switch-container"]=!0,_class["ic-switch-disabled"]=disabled,_class["ic-switch-small"]=small,_class),htmlFor:inputId},!hideLabel&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-input-label",{for:inputId,label,helperText,readonly:!0,disabled,class:(_class2={},_class2["ic-switch-label"]=!0,_class2["ic-switch-label-small"]=small,_class2)}),!hideLabel&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("span",{class:"ic-switch-line-break"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("input",{checked:checkedState,disabled,"aria-label":label,"aria-checked":checkedState?"true":"false","aria-describedby":describedBy,role:"switch",class:"ic-switch-input",type:"checkbox",name:"toggle",id:inputId,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.handleChange}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("span",{class:"ic-switch-toggle"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("line",{class:"ic-switch-icon-line",x1:"9",y1:small?"2":"1",x2:"9",y2:small?"8":"9"})),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("svg",{class:"ic-switch-icon","aria-hidden":"true",focusable:"false",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("circle",{class:"ic-switch-icon-circle",fill:"none",cx:"5",cy:"5",r:small?"3.335":"4.445"}))),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("slot",{name:"right-adornment"}),showState&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.h)("ic-typography",{"aria-hidden":"true",variant:"label",class:"ic-switch-checked-status"},checkedState?"On":"Off")))}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_25__.g)(this)}}]),Switch}();Switch.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block}input{overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.ic-switch-container{display:flex;flex-wrap:wrap;align-items:center;gap:var(--ic-space-xxs);cursor:pointer}.ic-switch-label{margin-left:var(--ic-space-xxs);margin-bottom:var(--ic-space-sm)}.ic-switch-label-small{margin-bottom:0.625rem}.ic-switch-toggle{display:flex;align-items:center;justify-content:space-around;width:4rem;height:var(--ic-space-xl);position:relative;border-radius:100vw;background-color:var(--ic-architectural-200);border:0.063rem solid var(--ic-architectural-700);box-sizing:border-box;transition:var(--ic-transition-duration-fast)}.ic-switch-line-break{flex:1 0 100%}.ic-switch-checked-status{padding-left:var(--ic-space-xxs)}.ic-switch-toggle::before{content:"";width:1.333rem;height:1.333rem;border-radius:50%;position:absolute;z-index:2;top:50%;left:0.333rem;transform:translate(0, -50%);background-color:var(--ic-architectural-700);transition:var(--ic-transition-duration-slow)}.ic-switch-icon{display:inline-block;vertical-align:middle;width:0.625rem;height:0.625rem}.ic-switch-icon-circle,.ic-switch-icon-line{stroke-width:1}.ic-switch-icon-circle{stroke:var(--ic-architectural-700)}.ic-switch-icon-line{stroke:var(--ic-architectural-white)}@media (prefers-reduced-motion: reduce){.ic-switch-toggle::before{transition-duration:0ms}}.ic-switch-input:checked+.ic-switch-toggle{background-color:var(--ic-action-default);border:none}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-xl), -50%);background-color:var(--ic-architectural-white)}.ic-switch-input:not([disabled])+.ic-switch-toggle:hover::before{box-shadow:0 0 0 0.75rem var(--ic-action-dark-bg-hover)}.ic-switch-input:not([disabled])+.ic-switch-toggle:active::before{box-shadow:0 0 0 0.75rem var(--ic-action-dark-bg-active)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:hover::before{box-shadow:0 0 0 0.75rem var(--ic-action-default-bg-hover)}.ic-switch-input:not([disabled]):checked+.ic-switch-toggle:active::before{box-shadow:0 0 0 0.75rem var(--ic-action-default-bg-active)}.ic-switch-input:focus:not([disabled])+.ic-switch-toggle,.ic-switch-input:focus-visible:not([disabled])+.ic-switch-toggle{box-shadow:0 0 0 0.063rem var(--ic-architectural-white),\n    0 0 0 0.188rem var(--ic-action-default),\n    0 0 0 0.5rem var(--ic-action-default-active-alpha)}.ic-switch-disabled{cursor:default}.ic-switch-disabled .ic-switch-icon-circle{stroke:var(--ic-architectural-300)}.ic-switch-disabled .ic-switch-icon-line{stroke:var(--ic-action-default-bg-active)}.ic-switch-input:disabled+.ic-switch-toggle{background-color:var(--ic-architectural-80);border:0.063rem dashed var(--ic-architectural-300)}.ic-switch-input:disabled~.ic-switch-checked-status{color:var(--ic-architectural-300)}.ic-switch-input:disabled+.ic-switch-toggle::before{background-color:var(--ic-architectural-300)}.ic-switch-input:disabled:checked+.ic-switch-toggle{background-color:var(--ic-status-info-background);border:0.063rem dashed #98c9f5}.ic-switch-input:disabled:checked+.ic-switch-toggle::before{background-color:var(--ic-architectural-white)}.ic-switch-small{gap:var(--ic-space-xxxs)}.ic-switch-small .ic-switch-checked-status{padding-left:0.375rem}.ic-switch-small .ic-switch-toggle{width:var(--ic-space-xxl);height:var(--ic-space-lg)}.ic-switch-small .ic-switch-toggle::before{width:var(--ic-space-md);height:var(--ic-space-md);left:var(--ic-space-xxs)}.ic-switch-small .ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(var(--ic-space-lg), -50%)}::slotted(*){margin-left:var(--ic-space-sm)}::slotted(svg){fill:currentcolor}@media (forced-colors: active){.ic-switch-toggle::before,.ic-switch-input:checked+.ic-switch-toggle{border:var(--ic-hc-border)}.ic-switch-input:checked+.ic-switch-toggle::before{transform:translate(calc(var(--ic-space-xl) - 0.125rem), -50%)}.ic-switch-input:disabled+.ic-switch-toggle,.ic-switch-input:disabled:checked+.ic-switch-toggle,.ic-switch-input:disabled+.ic-switch-toggle::before{border-color:GrayText}.ic-switch-input:disabled~.ic-switch-checked-status{color:GrayText}.ic-switch-disabled .ic-switch-icon-circle,.ic-switch-disabled .ic-switch-icon-line{stroke:GrayText}}'}}]);