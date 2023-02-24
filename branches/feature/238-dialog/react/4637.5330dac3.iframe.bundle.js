/*! For license information please see 4637.5330dac3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4637],{"../web-components/dist/esm/close-icon-2f02b42a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../web-components/dist/esm/ic-dialog.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_dialog:()=>Dialog});__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.string.repeat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js");var _index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("../web-components/dist/esm/index-1500de1f.js"),_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("../web-components/dist/esm/close-icon-2f02b42a.js"),_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("../web-components/dist/esm/helpers-3aa2f5a5.js"),process=(__webpack_require__("../web-components/dist/esm/types-dd515332.js"),__webpack_require__("./node_modules/process/browser.js"));function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Dialog=function(){function Dialog(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Dialog),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.r)(this,hostRef),this.icDialogConfirmed=(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.c)(this,"icDialogConfirmed",7),this.icDialogConfirm=function(){_this.icDialogConfirmed.emit()},this.focusedElementIndex=0,this.setInitialFocus=function(){var focusedElement;_this.sourceElement=document.activeElement,(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_28__.i)(_this.el,"dialog-controls")||(focusedElement=_this.el.shadowRoot.querySelector("#focus"),void 0===process.env.JEST_WORKER_ID&&focusedElement.setFocus())},this.getFocusedElementIndex=function(){for(var x=0;x<_this.interactiveElementList.length;x++)_this.interactiveElementList[x]===_this.el.shadowRoot.activeElement&&(_this.focusedElementIndex=x)},this.setAlertVariant=function(){void 0!==_this.status&&_this.el.shadowRoot.querySelector("ic-alert").setAttribute("variant",_this.status)},this.getInteractiveElements=function(){_this.interactiveElementList=Array.prototype.slice.call(_this.el.shadowRoot.querySelectorAll("ic-button"))},this.focusNextInteractiveElement=function(shiftKey){shiftKey?_this.focusedElementIndex-=1:_this.focusedElementIndex+=1,_this.focusedElementIndex>_this.interactiveElementList.length-1?_this.focusedElementIndex=0:_this.focusedElementIndex<0&&(_this.focusedElementIndex=_this.interactiveElementList.length-1),void 0===process.env.JEST_WORKER_ID&&_this.interactiveElementList[_this.focusedElementIndex].setFocus()},this.getButtonProps=function(){var primaryButton=_this.buttonProps[0],secondaryButton=_this.buttonProps[1],tertiaryButton=_this.buttonProps[2];_this.primaryButtonLabel=primaryButton.label,_this.secondaryButtonLabel=secondaryButton.label,_this.tertiaryButtonLabel=tertiaryButton.label,_this.primaryButtonOnclick=new Function(primaryButton.onclick),_this.secondaryButtonOnclick=new Function(secondaryButton.onclick),_this.tertiaryButtonOnclick=new Function(tertiaryButton.onclick)},this.size="small",this.heading=void 0,this.label=void 0,this.status=void 0,this.alertHeading=void 0,this.alertMessage=void 0,this.buttons="two",this.destructive=!1,this.closeOnClick=!0,this.buttonProps=[{label:"Confirm",onclick:"this.icDialogConfirm()"},{label:"Close",onclick:"this.hideDialog()"},{label:"",onclick:""}],this.disableDefaultFocus=!1,this.dialogRendered=!1,this.fadeIn=!1}var _hideDialog,_showDialog;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Dialog,[{key:"showDialog",value:(_showDialog=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){var _this2=this;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.dialogRendered=!0,setTimeout((function(){_this2.fadeIn=!0}),10),setTimeout((function(){_this2.setInitialFocus()}),75),setTimeout((function(){_this2.getFocusedElementIndex()}),80),document.body.style.height="100%",document.body.style.overflow="hidden";case 6:case"end":return _context.stop()}}),_callee,this)}))),function showDialog(){return _showDialog.apply(this,arguments)})},{key:"hideDialog",value:(_hideDialog=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(){var _this3=this;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.fadeIn=!1,setTimeout((function(){_this3.dialogRendered=!1,_this3.sourceElement.focus()}),80),document.body.style.height="auto",document.body.style.overflow="auto";case 4:case"end":return _context2.stop()}}),_callee2,this)}))),function hideDialog(){return _hideDialog.apply(this,arguments)})},{key:"handleKeyboard",value:function handleKeyboard(ev){if(this.dialogRendered)switch(ev.key){case"Tab":if(this.disableDefaultFocus)return;ev.preventDefault(),this.focusNextInteractiveElement(ev.shiftKey);break;case"Escape":!ev.repeat&&this.hideDialog(),ev.stopImmediatePropagation()}}},{key:"handleClick",value:function handleClick(ev){var dialogElement=this.el.shadowRoot.querySelector("dialog");this.closeOnClick&&ev.composedPath().indexOf(dialogElement)<0&&this.hideDialog()}},{key:"componentWillLoad",value:function componentWillLoad(){this.getButtonProps()}},{key:"componentDidLoad",value:function componentDidLoad(){this.getInteractiveElements(),this.setAlertVariant()}},{key:"render",value:function render(){var _class,_class2,_this4=this,alertHeading=this.alertHeading,alertMessage=this.alertMessage,buttons=this.buttons,size=this.size,heading=this.heading,label=this.label,status=this.status,destructive=this.destructive;return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)(_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.H,{class:(_class={},_class.hidden=!this.dialogRendered,_class["fade-in"]=this.fadeIn,_class)},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("dialog",{class:(_class2={},_class2.dialog=!0,_class2[""+size]=!0,_class2),open:this.dialogRendered,"aria-labelledby":"dialog-label dialog-heading","aria-describedby":"dialog-alert dialog-content"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"heading-area"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"heading-content"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"label"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("slot",{name:"label"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-typography",{variant:"label",id:"dialog-label"},label))),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"heading"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("slot",{name:"heading"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-typography",{variant:"h4",id:"dialog-heading"},heading)))),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-button",{id:("none"===buttons||destructive)&&"focus",class:"close-icon",variant:"icon","aria-label":"Close",onClick:function onClick(){return _this4.hideDialog()}},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("span",{class:"close-icon-svg",slot:"icon",innerHTML:_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_30__.c}))),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"content-area"},status&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-alert",{variant:status,heading:alertHeading,message:alertMessage,"title-above":!0,class:"status-alert",id:"dialog-alert"}),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-typography",{class:"message",variant:"body",id:"dialog-content"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("slot",null))),("none"!==buttons||(0,_helpers_3aa2f5a5_js__WEBPACK_IMPORTED_MODULE_28__.i)(this.el,"dialog-controls"))&&(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"dialog-controls"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("slot",{name:"dialog-controls"},"one"===buttons?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-button",{id:!destructive&&"focus",variant:destructive?"destructive":"primary",onClick:function onClick(){return _this4.primaryButtonOnclick()}},this.primaryButtonLabel):"two"===buttons?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"dialog-controls"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-button",{variant:"tertiary",onClick:function onClick(){return _this4.secondaryButtonOnclick()}},this.secondaryButtonLabel),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-button",{id:!destructive&&"focus",variant:destructive?"destructive":"primary",onClick:function onClick(){return _this4.primaryButtonOnclick()}},this.primaryButtonLabel)):"three"===buttons?(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("div",{class:"dialog-controls"},(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-button",{"full-width":"true",variant:"secondary",onClick:function onClick(){return _this4.tertiaryButtonOnclick()}},this.tertiaryButtonLabel),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-button",{"full-width":"true",variant:"secondary",onClick:function onClick(){return _this4.secondaryButtonOnclick()}},this.secondaryButtonLabel),(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.h)("ic-button",{"full-width":"true",id:!destructive&&"focus",variant:destructive?"destructive":"primary",onClick:function onClick(){return _this4.primaryButtonOnclick()}},this.primaryButtonLabel)):null))))}},{key:"el",get:function get(){return(0,_index_1500de1f_js__WEBPACK_IMPORTED_MODULE_27__.g)(this)}}]),Dialog}();Dialog.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-overlay);opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.fade-in){opacity:1;transition:opacity var(--ic-easing-transition-slow)}:host(.hidden){display:none}.dialog{background-color:white;border:1px solid var(--ic-architectural-300);border-radius:var(--ic-border-radius);padding:var(--ic-space-md);transform:translateY(-48px);transition:transform 1000s;display:flex;flex-direction:column;box-sizing:border-box}:host(.fade-in) .dialog{transform:translateY(0);transition:transform var(--ic-easing-transition-slow)}.small{width:50%;max-width:400px;min-height:176px;max-height:70%;}.medium{width:70vw;max-width:704px;min-height:200px;max-height:70vh}.large{width:90vw;max-width:1000px;min-height:200px;max-height:90vh}.heading-area{display:flex;margin-top:calc(-1 * var(--ic-space-xs))}.close-icon{margin-left:auto}.close-icon-svg{display:flex;align-items:center}.content-area{overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none}.content-area::-webkit-scrollbar{display:none}.status-alert{margin-top:var(--ic-space-xs)}.message{margin-top:var(--ic-space-xs)}.dialog-controls{margin-top:auto;padding-top:var(--ic-space-xs);display:flex;justify-content:flex-end;gap:var(--ic-space-md)}@media (min-width: 800px){:host([size="large"]) .content-area{width:75%}}@media (max-width: 576px){.dialog{width:100vw;height:100vh;transform:translateY(-80px);max-width:none;max-height:none;box-sizing:border-box}}@media (max-width: 364px){:host([buttons="three"]) .dialog-controls{flex-direction:column;gap:var(--ic-space-xs)}}'}}]);