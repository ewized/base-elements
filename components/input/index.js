!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return d}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${s}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,p=-1,h=0;const{strings:f,values:{length:b}}=t;for(;h<b;){const t=a.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)c(e[t].name,o)&&i++;for(;i-- >0;){const e=f[h],n=d.exec(e)[2],i=n.toLowerCase()+o,s=t.getAttribute(i);t.removeAttribute(i);const a=s.split(r);this.parts.push({type:"attribute",index:p,name:n,strings:a}),h+=a.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,s=e.split(r),a=s.length-1;for(let e=0;e<a;e++){let n,r=s[e];if(""===r)n=u();else{const t=d.exec(r);null!==t&&c(t[2],o)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),n=document.createTextNode(r)}i.insertBefore(n,t),this.parts.push({type:"node",index:++p})}""===s[a]?(i.insertBefore(u(),t),n.push(t)):t.data=s[a],h+=a}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&p!==l||(p++,e.insertBefore(u(),t)),l=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(n.push(t),p--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),h++}}else a.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const c=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,u=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,n){"use strict";n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return b})),n.d(e,"c",(function(){return y}));var i=n(8),s=n(5),r=n(3),o=n(11),a=n(10),c=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l=t=>null===t||!("object"==typeof t||"function"==typeof t),u=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class d{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new p(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(l(t)||!u(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class p{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r.a||l(t)&&t===this.value||(this.value=t,Object(i.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(i.b)(this.value);){const t=this.value;this.value=r.a,t(this)}this.value!==r.a&&this.committer.commit()}}class h{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(c.c)()),t.__insert(this.endNode=Object(c.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;Object(i.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}const t=this.__pendingValue;t!==r.a&&(l(t)?t!==this.value&&this.__commitText(t):t instanceof a.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):u(t)?this.__commitIterable(t):t===r.b?(this.value=r.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const n=new o.a(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)n=e[i],void 0===n&&(n=new h(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){Object(s.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;Object(i.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r.a}}class b extends d{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends p{}let g=!1;try{const t={get capture(){return g=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class y{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(i.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=_(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const _=t=>t&&(g?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,n){"use strict";n.d(e,"d",(function(){return x})),n.d(e,"f",(function(){return C})),n.d(e,"g",(function(){return O})),n.d(e,"e",(function(){return i.d})),n.d(e,"a",(function(){return E})),n.d(e,"h",(function(){return k})),n.d(e,"c",(function(){return V})),n.d(e,"b",(function(){return $}));var i=n(4),s=n(5),r=n(0);function o(t,e){const{element:{content:n},parts:i}=t,s=document.createTreeWalker(n,133,null,!1);let r=c(i),o=i[r],a=-1,l=0;const u=[];let d=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(u.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=c(i,r),o=i[r]}u.forEach(t=>t.parentNode.removeChild(t))}const a=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},c=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(r.d)(e))return n}return-1};var l=n(9),u=n(7),d=n(11);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=(t,e)=>`${t}--${e}`;let h=!0;void 0===window.ShadyCSS?h=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),h=!1);const f=t=>e=>{const n=p(e.type,t);let i=u.a.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},u.a.set(n,i));let s=i.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(r.f);if(s=i.keyString.get(o),void 0===s){const n=e.getTemplateElement();h&&window.ShadyCSS.prepareTemplateDom(n,t),s=new r.a(e,n),i.keyString.set(o,s)}return i.stringsArray.set(e.strings,s),s},b=["html","svg"],m=new Set,g=(t,e,n)=>{m.add(t);const i=n?n.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const l=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}(t=>{b.forEach(e=>{const n=u.a.get(p(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),o(t,n)})})})(t);const d=i.content;n?function(t,e,n=null){const{element:{content:i},parts:s}=t;if(null==n)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=c(s),l=0,u=-1;for(;r.nextNode();){u++;for(r.currentNode===n&&(l=a(e),n.parentNode.insertBefore(e,n));-1!==o&&s[o].index===u;){if(l>0){for(;-1!==o;)s[o].index+=l,o=c(s,o);return}o=c(s,o)}}}(n,l,d.firstChild):d.insertBefore(l,d.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const h=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(n){d.insertBefore(l,d.firstChild);const t=new Set;t.add(l),o(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},_=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},w=Promise.resolve(!0);class S extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=w,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=v){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const i=this[t];this[n]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=_){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||y,s="function"==typeof i?i:i.fromAttribute;return s?s(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||y.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=v){const i=this.constructor,s=i._attributeNameForProperty(t,n);if(void 0!==s){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n._classProperties.get(i)||v;this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const i=this.constructor,s=i._classProperties.get(t)||v;i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,i)=>{t=n,e=i});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}S.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const x=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),P=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function C(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):P(t,e)}function O(t){return(e,n)=>{const i={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==n?N(i,e,n):j(i,e)}}const N=(t,e,n)=>{Object.defineProperty(e,n,t)},j=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),T="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,A=Symbol();class E{constructor(t,e){if(e!==A)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(T?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const k=t=>new E(String(t),A),V=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof E)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new E(n,A)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const R=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let i=0,s=e.length;i<s;i++){const s=e[i];Array.isArray(s)?t(s,n):n.push(s)}return n}(t);class $ extends S{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){R(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?T?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof i.b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}$.finalized=!0,$.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,r=l.a.has(e),o=h&&11===e.nodeType&&!!e.host,a=o&&!m.has(i),c=a?document.createDocumentFragment():e;if(Object(l.b)(t,c,Object.assign({templateFactory:f(i)},n)),a){const t=l.a.get(c);l.a.delete(c);const n=t.value instanceof d.a?t.value.template:void 0;g(i,c,n),Object(s.b)(e,e.firstChild),e.appendChild(c),l.a.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i={},s={}},function(t,e,n){"use strict";n.d(e,"c",(function(){return o.a})),n.d(e,"a",(function(){return i.d})),n.d(e,"b",(function(){return r.b})),n.d(e,"d",(function(){return a}));var i=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const s=new class{handleAttributeExpressions(t,e,n,s){const r=e[0];if("."===r){return new i.e(t,e.slice(1),n).parts}if("@"===r)return[new i.c(t,e.slice(1),s.eventContext)];if("?"===r)return[new i.b(t,e.slice(1),n)];return new i.a(t,e,n).parts}handleTextExpression(t){return new i.d(t)}};var r=n(10),o=n(8);n(5),n(3),n(9),n(7),n(11),n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const a=(t,...e)=>new r.b(t,e,"html",s)},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,n=null,i=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,i),e=n}},r=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}}},function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c}));var i=n(2),s=n(4);function r(...t){return e=>{Object.defineProperty(e,"styles",{value:t.map(t=>t instanceof i.a?t:(t=>i.c`${Object(i.h)(t[0][1])}`)(t))})}}const o=(t,e="The value was null")=>{if(t)return t;throw new Error(e)},a=Object(s.c)((t,e=!1)=>n=>{((t,e="The value was false")=>{if(!t)throw new Error(e)})(n instanceof s.a,"unsafeHTML can only be used in text bindings");const i=document.createElement("script");i.src=t,i.async=e,n.setValue(i)}),c=(t,e)=>n=>{const i=window.customElements;return i.get(t)||("string"==typeof e?i.define(t,n,{extends:e}):i.define(t,n,e)),n}},function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return r}));var i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function s(t){let e=r.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},r.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(i.f);return n=e.keyString.get(s),void 0===n&&(n=new i.a(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const r=new Map},function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,s=t=>(...e)=>{const n=t(...e);return i.set(n,!0),n},r=t=>"function"==typeof t&&i.has(t)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var i=n(5),s=n(1),r=n(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(t,e,n)=>{let a=o.get(e);void 0===a&&(Object(i.b)(e,e.firstChild),o.set(e,a=new s.d(Object.assign({templateFactory:r.b},n))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var i=n(5),s=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=` ${s.f} `;class o{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=s.e.exec(t);e+=null===a?t+(n?r:s.g):t.substr(0,a.index)+a[1]+a[2]+s.b+a[3]+s.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class a extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(i.c)(e,n.firstChild),t}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(5),s=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class r{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,a=0,c=0,l=r.nextNode();for(;a<n.length;)if(o=n[a],Object(s.d)(o)){for(;c<o.index;)c++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return i.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var s=(o=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}));return[n].concat(r).concat([s]).join("\n")}var o,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},s=0;s<this.length;s++){var r=this[s][0];null!=r&&(i[r]=!0)}for(var o=0;o<t.length;o++){var a=t[o];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"EmailInput",(function(){return h})),n.d(e,"PasswordInput",(function(){return y})),n.d(e,"TextInput",(function(){return w}));var i=n(2),s=n(6),r=n(47),o=n.n(r),a=function(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.b{constructor(){var t;super(...arguments),this._value=null!=(t=this.getAttribute("value"))?t:"",this.onSubmit=t=>{this.validate(this.$input)||(this.$input.reportValidity(),t.preventDefault())},this.onFormData=({formData:t})=>{t.append(this.santizeLabel,this._value)},this.onChange=({target:t})=>{this._value=t.value}}get required(){return this.hasAttribute("required")}get label(){var t;return null!=(t=this.getAttribute("label"))?t:"no label"}get santizeLabel(){return this.label.toLowerCase().replace(" ","-")}get value(){return this._value}set value(t){this._value=t}validate(t){return t.checkValidity()}formAssociatedCallback(t){t.addEventListener("formdata",this.onFormData),t.addEventListener("submit",this.onSubmit)}formResetCallback(){var t;this._value=null!=(t=this.getAttribute("value"))?t:""}render(){return i.e`
      <input
          id=${this.santizeLabel}
          name=${this.santizeLabel}
          type=${Object(s.b)(this.type,"type must be given in")}
          placeholder=${this.label}
          ?disabled=${this.hasAttribute("disabled")}
          ?required=${this.hasAttribute("required")}
          .value=${this._value}
          @change=${this.onChange} />
      <label for=${this.santizeLabel}>${this.label}</label>
    `}};l.formAssociated=!0,a([Object(i.g)("input"),c("design:type",HTMLInputElement)],l.prototype,"$input",void 0),a([Object(i.f)(),c("design:type",String)],l.prototype,"_value",void 0),l=a([Object(s.d)(o.a)],l);var u=l,d=function(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let p=class extends u{constructor(){super(...arguments),this.type="email"}};p=d([Object(i.d)("e-email-input")],p);var h=p,f=function(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},b=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},m=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((i=i.apply(t,e||[])).next())}))};let g=class extends u{constructor(){super(...arguments),this.type="password",this._type=Object(s.b)(this.type,"type must be given in")}onTogglePasswordVisiablity(t){return m(this,void 0,void 0,(function*(){this._type="password"===this._type?"text":"password",this.$input.focus(),yield new Promise(t=>{window.setTimeout(()=>{this.$input.setSelectionRange(this._value.length,this._value.length),t()})})}))}get passwordVisiablityText(){return"password"===this._type?"show":"hide"}render(){return i.e`
      <input
          id=${this.santizeLabel}
          class='password'
          name=${this.santizeLabel}
          type=${this._type}
          placeholder=${this.label}
          ?disabled=${this.hasAttribute("disabled")}
          ?required=${this.hasAttribute("required")}
          .value=${this._value}
          @change=${this.onChange} />
      <label for=${this.santizeLabel}>${this.label}</label>
      <a
          class='password-visiablity'
          role='button'
          @click=${this.onTogglePasswordVisiablity}>
        ${this.passwordVisiablityText}
      </a>
    `}};f([Object(i.f)(),b("design:type",Object)],g.prototype,"_type",void 0),g=f([Object(i.d)("e-password-input")],g);var y=g,_=function(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let v=class extends u{constructor(){super(...arguments),this.type="text"}};v=_([Object(i.d)("e-text-input")],v);var w=v},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){(t.exports=n(12)(!1)).push([t.i,":host{overflow:hidden;display:inline-block;width:min-content;position:relative}:host{--input-background: var(--e-input-background, #fff);--input-background-disabled: var(--e-input-background-disabled, #f0f0f0);vertical-align:top}input{background:var(--input-background);border:1px solid;border-color:rgba(102,102,102,0.4);padding:20px 15px;padding-bottom:5px;font-size:14px;line-height:18px;min-width:175px}input+label{color:#666}input::placeholder{color:transparent}input:focus{outline:none;border-color:rgba(51,122,183,0.4)}input:focus+label{color:#337ab7}input:not(:placeholder-shown):valid{border-color:rgba(0,128,0,0.4)}input:not(:placeholder-shown):valid+label{color:green}input:not(:placeholder-shown):invalid,input:focus:invalid{border-color:rgba(255,0,0,0.4)}input:not(:placeholder-shown):invalid+label,input:focus:invalid+label{color:red}input:not(:placeholder-shown):invalid ~ span,input:focus:invalid ~ span{color:red}input:required+label::after{content:'*';font-size:small;padding:1px}input:disabled{background:var(--input-background-disabled);cursor:not-allowed}input:-webkit-autofill{-webkit-text-fill-color:rgba(51,122,183,0.9);-webkit-box-shadow:0 0 0 100vw rgba(51,122,183,0.1) inset}input:focus+label,input:not(:placeholder-shown)+label{user-select:none;pointer-events:none;font-size:10px;padding-top:5px;padding-bottom:0;font-weight:bold}label{top:0;left:0;position:absolute;cursor:text;padding:10.75px 15px;transition:all 0.15s ease-in;font-size:14px}span{display:block;font-size:8px;margin-bottom:5px}input.password{min-width:175px;padding-right:12px}input.password ~ a.password-visiablity{text-align:right;visibility:hidden;top:0;right:0;position:absolute;padding:18px 5px 0 5px;margin:2px 0;font-size:12px;width:30px;cursor:pointer;font-variant:small-caps;user-select:none}input.password ~ a.password-visiablity:hover{visibility:visible;text-decoration:underline}input.password:focus:not(:placeholder-shown){min-width:135px;padding-right:40px}input.password:focus:not(:placeholder-shown) ~ a.password-visiablity{visibility:visible}\n",""])}]);
//# sourceMappingURL=index.js.map