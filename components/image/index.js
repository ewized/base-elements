!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=52)}({0:function(t,e,n){"use strict";n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return d}));
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
const s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${i}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,h=-1,p=0;const{strings:f,values:{length:m}}=t;for(;p<m;){const t=a.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)c(e[t].name,o)&&s++;for(;s-- >0;){const e=f[p],n=d.exec(e)[2],s=n.toLowerCase()+o,i=t.getAttribute(s);t.removeAttribute(s);const a=i.split(r);this.parts.push({type:"attribute",index:h,name:n,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,i=e.split(r),a=i.length-1;for(let e=0;e<a;e++){let n,r=i[e];if(""===r)n=u();else{const t=d.exec(r);null!==t&&c(t[2],o)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),n=document.createTextNode(r)}s.insertBefore(n,t),this.parts.push({type:"node",index:++h})}""===i[a]?(s.insertBefore(u(),t),n.push(t)):t.data=i[a],p+=a}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&h!==l||(h++,e.insertBefore(u(),t)),l=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(n.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const c=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,u=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},1:function(t,e,n){"use strict";n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"c",(function(){return y}));var s=n(8),i=n(5),r=n(3),o=n(11),a=n(10),c=n(0);
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
const l=t=>null===t||!("object"==typeof t||"function"==typeof t),u=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class d{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new h(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(l(t)||!u(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class h{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r.a||l(t)&&t===this.value||(this.value=t,Object(s.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(s.b)(this.value);){const t=this.value;this.value=r.a,t(this)}this.value!==r.a&&this.committer.commit()}}class p{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(c.c)()),t.__insert(this.endNode=Object(c.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;Object(s.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}const t=this.__pendingValue;t!==r.a&&(l(t)?t!==this.value&&this.__commitText(t):t instanceof a.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):u(t)?this.__commitIterable(t):t===r.b?(this.value=r.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const n=new o.a(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)n=e[s],void 0===n&&(n=new p(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){Object(i.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;Object(s.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r.a}}class m extends d{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new g(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class g extends h{}let _=!1;try{const t={get capture(){return _=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class y{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(s.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=v(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const v=t=>t&&(_?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},10:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var s=n(5),i=n(0);
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
const r=` ${i.f} `;class o{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=i.e.exec(t);e+=null===a?t+(n?r:i.g):t.substr(0,a.index)+a[1]+a[2]+i.b+a[3]+i.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class a extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(s.c)(e,n.firstChild),t}}},11:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n(5),i=n(0);
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
class r{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,a=0,c=0,l=r.nextNode();for(;a<n.length;)if(o=n[a],Object(i.d)(o)){for(;c<o.index;)c++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return s.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},12:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"==typeof btoa){var i=(o=s,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot).concat(t," */")}));return[n].concat(r).concat([i]).join("\n")}var o,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(s[r]=!0)}for(var o=0;o<t.length;o++){var a=t[o];null!=a[0]&&s[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},2:function(t,e,n){"use strict";n.d(e,"d",(function(){return x})),n.d(e,"f",(function(){return C})),n.d(e,"g",(function(){return A})),n.d(e,"e",(function(){return s.d})),n.d(e,"a",(function(){return j})),n.d(e,"h",(function(){return k})),n.d(e,"c",(function(){return V})),n.d(e,"b",(function(){return M}));var s=n(4),i=n(5),r=n(0);function o(t,e){const{element:{content:n},parts:s}=t,i=document.createTreeWalker(n,133,null,!1);let r=c(s),o=s[r],a=-1,l=0;const u=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(u.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=c(s,r),o=s[r]}u.forEach(t=>t.parentNode.removeChild(t))}const a=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},c=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(r.d)(e))return n}return-1};var l=n(9),u=n(7),d=n(11);
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
const h=(t,e)=>`${t}--${e}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const f=t=>e=>{const n=h(e.type,t);let s=u.a.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},u.a.set(n,s));let i=s.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(r.f);if(i=s.keyString.get(o),void 0===i){const n=e.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(n,t),i=new r.a(e,n),s.keyString.set(o,i)}return s.stringsArray.set(e.strings,i),i},m=["html","svg"],g=new Set,_=(t,e,n)=>{g.add(t);const s=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,t);const l=document.createElement("style");for(let t=0;t<r;t++){const e=i[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}(t=>{m.forEach(e=>{const n=u.a.get(h(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),o(t,n)})})})(t);const d=s.content;n?function(t,e,n=null){const{element:{content:s},parts:i}=t;if(null==n)return void s.appendChild(e);const r=document.createTreeWalker(s,133,null,!1);let o=c(i),l=0,u=-1;for(;r.nextNode();){u++;for(r.currentNode===n&&(l=a(e),n.parentNode.insertBefore(e,n));-1!==o&&i[o].index===u;){if(l>0){for(;-1!==o;)i[o].index+=l,o=c(i,o);return}o=c(i,o)}}}(n,l,d.firstChild):d.insertBefore(l,d.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const p=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)e.insertBefore(p.cloneNode(!0),e.firstChild);else if(n){d.insertBefore(l,d.firstChild);const t=new Set;t.add(l),o(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},v=(t,e)=>e!==t&&(e==e||t==t),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},S=Promise.resolve(!0);class w extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=S,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const s=this._attributeNameForProperty(n,e);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=b){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const s=this[t];this[n]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=v){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,s=e.converter||y,i="function"==typeof s?s:s.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,s=e.converter;return(s&&s.toAttribute||y.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=b){const s=this.constructor,i=s._attributeNameForProperty(t,n);if(void 0!==i){const t=s._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n._classProperties.get(s)||b;this._updateState=16|this._updateState,this[s]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const s=this.constructor,i=s._classProperties.get(t)||b;s._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,s)=>{t=n,e=s});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}w.finalized=!0;
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
const x=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:s}=e;return{kind:n,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),P=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function C(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):P(t,e)}function A(t){return(e,n)=>{const s={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==n?N(s,e,n):O(s,e)}}const N=(t,e,n)=>{Object.defineProperty(e,n,t)},O=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),E="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T=Symbol();class j{constructor(t,e){if(e!==T)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(E?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const k=t=>new j(String(t),T),V=(t,...e)=>{const n=e.reduce((e,n,s)=>e+(t=>{if(t instanceof j)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[s+1],t[0]);return new j(n,T)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const R=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let s=0,i=e.length;s<i;s++){const i=e[s];Array.isArray(i)?t(i,n):n.push(i)}return n}(t);class M extends w{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){R(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?E?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof s.b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}M.finalized=!0,M.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,r=l.a.has(e),o=p&&11===e.nodeType&&!!e.host,a=o&&!g.has(s),c=a?document.createDocumentFragment():e;if(Object(l.b)(t,c,Object.assign({templateFactory:f(s)},n)),a){const t=l.a.get(c);l.a.delete(c);const n=t.value instanceof d.a?t.value.template:void 0;_(s,c,n),Object(i.b)(e,e.firstChild),e.appendChild(c),l.a.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)}},3:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}));
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
const s={},i={}},37:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,"img{background:#ddd linear-gradient(90deg, #ddd, #eee, #ddd) no-repeat fixed;background-size:5vw;animation:loading 4s infinite;display:inline-block}@keyframes loading{from{background-position:-5vw 0}to{background-position:100vw 0}}\n",""])},4:function(t,e,n){"use strict";n.d(e,"c",(function(){return o.a})),n.d(e,"a",(function(){return s.d})),n.d(e,"b",(function(){return r.b})),n.d(e,"d",(function(){return a}));var s=n(1);
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
 */const i=new class{handleAttributeExpressions(t,e,n,i){const r=e[0];if("."===r){return new s.e(t,e.slice(1),n).parts}if("@"===r)return[new s.c(t,e.slice(1),i.eventContext)];if("?"===r)return[new s.b(t,e.slice(1),n)];return new s.a(t,e,n).parts}handleTextExpression(t){return new s.d(t)}};var r=n(10),o=n(8);n(5),n(3),n(9),n(7),n(11),n(0);
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const a=(t,...e)=>new r.b(t,e,"html",i)},5:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return r}));
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
const s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null,s=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,s),e=n}},r=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}}},52:function(t,e,n){"use strict";n.r(e),n.d(e,"Image",(function(){return p}));var s=n(2),i=n(6),r=n(37),o=n.n(r),a=function(t,e,n,s){var i,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(t,e,n,s){return new(n||(n=Promise))((function(i,r){function o(t){try{c(s.next(t))}catch(t){r(t)}}function a(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((s=s.apply(t,e||[])).next())}))};const u=[],d=()=>l(void 0,void 0,void 0,(function*(){return new Promise(t=>{window.requestAnimationFrame(()=>{for(let t,e=0;e<u.length&&window.innerHeight>=(t=u[e].top);e++){let n=u[e];if(!(t<0))try{n.callback()}finally{u.splice(e--,1)}}t()})})}));window.addEventListener("scroll",()=>l(void 0,void 0,void 0,(function*(){return yield d()})));let h=class extends s.b{constructor(){super(...arguments),this.image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=",this.loaded=!1}connectedCallback(){super.connectedCallback();const t={element:this,callback:()=>{this.image=this.source,this.loaded=!0},get top(){var t,e,n;let s=this.element.getBoundingClientRect().top;return 0===s?(null===(n=null===(e=null===(t=this.element)||void 0===t?void 0:t.parentElement)||void 0===e?void 0:e.getBoundingClientRect())||void 0===n?void 0:n.top)||0:s}};if(0==u.length||u.length>0&&u[u.length-1].top<=t.top)u.push(t);else{const e=()=>{let e=t.top;const n=(t,s)=>{if(t+1>=s)return t;let i=t+(s-t)/2>>0;return e>u[i].top?n(i,s):n(t,i)};return n(0,u.length)};u.splice(e(),0,t)}d()}disconnectedCallback(){if(super.disconnectedCallback(),!this.loaded)for(let t=0;t<u.length;t++)this.isSameNode(u[t].element)&&u.splice(t,1)}get source(){return Object(i.b)(this.getAttribute("source"),"source attribute must exist")}get heightWidth(){var t;let e=null!=(t=this.getAttribute("size"))?t:"100%,100%",[n,s]=e.split(",");return`height: ${n}; width: ${s||n}`}get altTag(){let t=this.getAttribute("alt"),e=this.image.lastIndexOf("/");return!t&&e>0&&(t=e==this.image.length-1?this.image.substr(0,e).replace(/http(s)?:\/\//,""):this.image.substr(e+1).replace(/\.([A-Za-z])+/,"")),t}render(){return s.e`<img alt=${this.altTag} src=${this.image} style=${this.heightWidth}></img>`}};a([Object(s.f)(),c("design:type",Object)],h.prototype,"image",void 0),a([Object(s.f)(),c("design:type",Object)],h.prototype,"loaded",void 0),h=a([Object(i.a)("e-image"),Object(i.d)(o.a)],h);var p=h},6:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c}));var s=n(2),i=n(4);function r(...t){return e=>{Object.defineProperty(e,"styles",{value:t.map(t=>t instanceof s.a?t:(t=>s.c`${Object(s.h)(t[0][1])}`)(t))})}}const o=(t,e="The value was null")=>{if(t)return t;throw new Error(e)},a=Object(i.c)((t,e=!1)=>n=>{((t,e="The value was false")=>{if(!t)throw new Error(e)})(n instanceof i.a,"unsafeHTML can only be used in text bindings");const s=document.createElement("script");s.src=t,s.async=e,n.setValue(s)}),c=(t,e)=>n=>{const s=window.customElements;return s.get(t)||("string"==typeof e?s.define(t,n,{extends:e}):s.define(t,n,e)),n}},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var s=n(0);
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
 */function i(t){let e=r.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},r.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(s.f);return n=e.keyString.get(i),void 0===n&&(n=new s.a(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const r=new Map},8:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));
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
const s=new WeakMap,i=t=>(...e)=>{const n=t(...e);return s.set(n,!0),n},r=t=>"function"==typeof t&&s.has(t)},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var s=n(5),i=n(1),r=n(7);
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
const o=new WeakMap,a=(t,e,n)=>{let a=o.get(e);void 0===a&&(Object(s.b)(e,e.firstChild),o.set(e,a=new i.d(Object.assign({templateFactory:r.b},n))),a.appendInto(e)),a.setValue(t),a.commit()}}});
//# sourceMappingURL=index.js.map