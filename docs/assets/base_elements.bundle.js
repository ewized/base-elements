/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/code-prettify/loader/prettify.js":
/*!*******************************************************!*\
  !*** ./node_modules/code-prettify/loader/prettify.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(){/*

 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function T(a){function d(e){var b=e.charCodeAt(0);if(92!==b)return b;var a=e.charAt(1);return(b=w[a])?b:"0"<=a&&"7">=a?parseInt(e.substring(1),8):"u"===a||"x"===a?parseInt(e.substring(2),16):e.charCodeAt(1)}function f(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e=
[];var a="^"===b[0],c=["["];a&&c.push("^");for(var a=a?1:0,g=b.length;a<g;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),k;a+2<g&&"-"===b[a+1]?(k=d(b[a+2]),a+=2):k=h;e.push([h,k]);65>k||122<h||(65>k||90<h||e.push([Math.max(65,h)|32,Math.min(k,90)|32]),97>k||122<h||e.push([Math.max(97,h)&-33,Math.min(k,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];g=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=g[1]+1?g[1]=Math.max(g[1],h[1]):b.push(g=h);for(a=0;a<b.length;++a)h=b[a],
c.push(f(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(f(h[1])));c.push("]");return c.join("")}function v(e){for(var a=e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),c=a.length,d=[],g=0,h=0;g<c;++g){var k=a[g];"("===k?++h:"\\"===k.charAt(0)&&(k=+k.substring(1))&&(k<=h?d[k]=-1:a[g]=f(k))}for(g=1;g<d.length;++g)-1===d[g]&&(d[g]=++A);for(h=g=0;g<c;++g)k=a[g],"("===k?(++h,d[h]||(a[g]="(?:")):"\\"===
k.charAt(0)&&(k=+k.substring(1))&&k<=h&&(a[g]="\\"+d[k]);for(g=0;g<c;++g)"^"===a[g]&&"^"!==a[g+1]&&(a[g]="");if(e.ignoreCase&&n)for(g=0;g<c;++g)k=a[g],e=k.charAt(0),2<=k.length&&"["===e?a[g]=b(k):"\\"!==e&&(a[g]=k.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var A=0,n=!1,l=!1,m=0,c=a.length;m<c;++m){var p=a[m];if(p.ignoreCase)l=!0;else if(/[a-z]/i.test(p.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){n=!0;
l=!1;break}}for(var w={b:8,t:9,n:10,v:11,f:12,r:13},r=[],m=0,c=a.length;m<c;++m){p=a[m];if(p.global||p.multiline)throw Error(""+p);r.push("(?:"+v(p)+")")}return new RegExp(r.join("|"),l?"gi":"g")}function U(a,d){function f(a){var c=a.nodeType;if(1==c){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)f(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)v[l]="\n",n[l<<1]=A++,n[l++<<1|1]=a}}else if(3==c||4==c)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[ \t\r\n]+/g,
" "),v[l]=c,n[l<<1]=A,A+=c.length,n[l++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,v=[],A=0,n=[],l=0;f(a);return{a:v.join("").replace(/\n$/,""),c:n}}function J(a,d,f,b,v){f&&(a={h:a,l:1,j:null,m:null,a:f,c:null,i:d,g:null},b(a),v.push.apply(v,a.g))}function V(a){for(var d=void 0,f=a.firstChild;f;f=f.nextSibling)var b=f.nodeType,d=1===b?d?a:f:3===b?W.test(f.nodeValue)?a:d:d;return d===a?void 0:d}function G(a,d){function f(a){for(var l=a.i,m=a.h,c=[l,"pln"],p=0,w=a.a.match(v)||[],r={},e=0,t=w.length;e<
t;++e){var z=w[e],q=r[z],g=void 0,h;if("string"===typeof q)h=!1;else{var k=b[z.charAt(0)];if(k)g=z.match(k[1]),q=k[0];else{for(h=0;h<A;++h)if(k=d[h],g=z.match(k[1])){q=k[0];break}g||(q="pln")}!(h=5<=q.length&&"lang-"===q.substring(0,5))||g&&"string"===typeof g[1]||(h=!1,q="src");h||(r[z]=q)}k=p;p+=z.length;if(h){h=g[1];var B=z.indexOf(h),D=B+h.length;g[2]&&(D=z.length-g[2].length,B=D-h.length);q=q.substring(5);J(m,l+k,z.substring(0,B),f,c);J(m,l+k+B,h,K(q,h),c);J(m,l+k+D,z.substring(D),f,c)}else c.push(l+
k,q)}a.g=c}var b={},v;(function(){for(var f=a.concat(d),l=[],m={},c=0,p=f.length;c<p;++c){var w=f[c],r=w[3];if(r)for(var e=r.length;0<=--e;)b[r.charAt(e)]=w;w=w[1];r=""+w;m.hasOwnProperty(r)||(l.push(w),m[r]=null)}l.push(/[\0-\uffff]/);v=T(l)})();var A=d.length;return f}function y(a){var d=[],f=[];a.tripleQuotedStrings?d.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
null,"'\""]):a.multiLineStrings?d.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):d.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&f.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var b=a.hashComments;b&&(a.cStyleComments?(1<b?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
null,"#"]),f.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):d.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(f.push(["com",/^\/\/[^\r\n]*/,null]),f.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(b=a.regexLiterals){var v=(b=1<b?"":"\n\r")?".":"[\\S\\s]";f.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+
("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+v+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+v+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&f.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&f.push(["kwd",new RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),null]);d.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");f.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,
null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(b),null]);return G(d,f)}function L(a,d,f){function b(a){var c=a.nodeType;if(1==c&&!A.test(a.className))if("br"===a.nodeName)v(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((3==c||4==c)&&f){var d=a.nodeValue,q=d.match(n);q&&(c=d.substring(0,q.index),a.nodeValue=c,(d=d.substring(q.index+q[0].length))&&
a.parentNode.insertBefore(l.createTextNode(d),a.nextSibling),v(a),c||a.parentNode.removeChild(a))}}function v(a){function b(a,c){var d=c?a.cloneNode(!1):a,k=a.parentNode;if(k){var k=b(k,1),e=a.nextSibling;k.appendChild(d);for(var f=e;f;f=e)e=f.nextSibling,k.appendChild(f)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;a=b(a.nextSibling,0);for(var d;(d=a.parentNode)&&1===d.nodeType;)a=d;c.push(a)}for(var A=/(?:^|\s)nocode(?:\s|$)/,n=/\r\n?|\n/,l=a.ownerDocument,m=l.createElement("li");a.firstChild;)m.appendChild(a.firstChild);
for(var c=[m],p=0;p<c.length;++p)b(c[p]);d===(d|0)&&c[0].setAttribute("value",d);var w=l.createElement("ol");w.className="linenums";d=Math.max(0,d-1|0)||0;for(var p=0,r=c.length;p<r;++p)m=c[p],m.className="L"+(p+d)%10,m.firstChild||m.appendChild(l.createTextNode("\u00a0")),w.appendChild(m);a.appendChild(w)}function t(a,d){for(var f=d.length;0<=--f;){var b=d[f];I.hasOwnProperty(b)?E.console&&console.warn("cannot override language handler %s",b):I[b]=a}}function K(a,d){a&&I.hasOwnProperty(a)||(a=/^\s*</.test(d)?
"default-markup":"default-code");return I[a]}function M(a){var d=a.j;try{var f=U(a.h,a.l),b=f.a;a.a=b;a.c=f.c;a.i=0;K(d,b)(a);var v=/\bMSIE\s(\d+)/.exec(navigator.userAgent),v=v&&8>=+v[1],d=/\n/g,A=a.a,n=A.length,f=0,l=a.c,m=l.length,b=0,c=a.g,p=c.length,w=0;c[p]=n;var r,e;for(e=r=0;e<p;)c[e]!==c[e+2]?(c[r++]=c[e++],c[r++]=c[e++]):e+=2;p=r;for(e=r=0;e<p;){for(var t=c[e],z=c[e+1],q=e+2;q+2<=p&&c[q+1]===z;)q+=2;c[r++]=t;c[r++]=z;e=q}c.length=r;var g=a.h;a="";g&&(a=g.style.display,g.style.display="none");
try{for(;b<m;){var h=l[b+2]||n,k=c[w+2]||n,q=Math.min(h,k),B=l[b+1],D;if(1!==B.nodeType&&(D=A.substring(f,q))){v&&(D=D.replace(d,"\r"));B.nodeValue=D;var N=B.ownerDocument,u=N.createElement("span");u.className=c[w+1];var y=B.parentNode;y.replaceChild(u,B);u.appendChild(B);f<h&&(l[b+1]=B=N.createTextNode(A.substring(q,h)),y.insertBefore(B,u.nextSibling))}f=q;f>=h&&(b+=2);f>=k&&(w+=2)}}finally{g&&(g.style.display=a)}}catch(x){E.console&&console.log(x&&x.stack||x)}}var E=window,C=["break,continue,do,else,for,if,return,while"],
F=[[C,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],H=[F,"alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
O=[F,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],P=[F,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],
F=[F,"abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],Q=[C,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],R=[C,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],C=[C,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
S=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,W=/\S/,X=y({keywords:[H,P,O,F,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",Q,R,C],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),I={};t(X,["default-code"]);t(G([],[["pln",/^[^<?]+/],["dec",
/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));t(G([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,
"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);t(G([],[["atv",/^[\s\S]+/]]),["uq.val"]);t(y({keywords:H,
hashComments:!0,cStyleComments:!0,types:S}),"c cc cpp cxx cyc m".split(" "));t(y({keywords:"null,true,false"}),["json"]);t(y({keywords:P,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:S}),["cs"]);t(y({keywords:O,cStyleComments:!0}),["java"]);t(y({keywords:C,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);t(y({keywords:Q,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);t(y({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);t(y({keywords:R,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);t(y({keywords:F,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]);t(y({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,
regexLiterals:!0}),["coffee"]);t(G([],[["str",/^[\s\S]+/]]),["regex"]);var Y=E.PR={createSimpleLexer:G,registerLangHandler:t,sourceDecorator:y,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:E.prettyPrintOne=function(a,d,f){f=f||!1;d=d||null;var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";
b=b.firstChild;f&&L(b,f,!0);M({j:d,m:f,h:b,l:1,a:null,i:null,c:null,g:null});return b.innerHTML},prettyPrint:E.prettyPrint=function(a,d){function f(){for(var b=E.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;p<t.length&&c.now()<b;p++){for(var d=t[p],l=g,m=d;m=m.previousSibling;){var n=m.nodeType,u=(7===n||8===n)&&m.nodeValue;if(u?!/^\??prettify\b/.test(u):3!==n||/\S/.test(m.nodeValue))break;if(u){l={};u.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){l[b]=c});break}}m=d.className;if((l!==g||r.test(m))&&
!e.test(m)){n=!1;for(u=d.parentNode;u;u=u.parentNode)if(q.test(u.tagName)&&u.className&&r.test(u.className)){n=!0;break}if(!n){d.className+=" prettyprinted";n=l.lang;if(!n){var n=m.match(w),C;!n&&(C=V(d))&&z.test(C.tagName)&&(n=C.className.match(w));n&&(n=n[1])}if(y.test(d.tagName))u=1;else var u=d.currentStyle,x=v.defaultView,u=(u=u?u.whiteSpace:x&&x.getComputedStyle?x.getComputedStyle(d,null).getPropertyValue("white-space"):0)&&"pre"===u.substring(0,3);x=l.linenums;(x="true"===x||+x)||(x=(x=m.match(/\blinenums\b(?::(\d+))?/))?
x[1]&&x[1].length?+x[1]:!0:!1);x&&L(d,x,u);M({j:n,h:d,m:x,l:u,a:null,i:null,c:null,g:null})}}}p<t.length?E.setTimeout(f,250):"function"===typeof a&&a()}for(var b=d||document.body,v=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],t=[],n=0;n<b.length;++n)for(var l=0,m=b[n].length;l<m;++l)t.push(b[n][l]);var b=null,c=Date;c.now||(c={now:function(){return+new Date}});var p=0,w=/\blang(?:uage)?-([\w.]+)(?!\S)/,r=/\bprettyprint\b/,
e=/\bprettyprinted\b/,y=/pre|xmp/i,z=/^code$/i,q=/^(?:pre|code|xmp)$/i,g={};f()}},H=E.define;"function"===typeof H&&H.amd&&H("google-code-prettify",[],function(){return Y})})();}()


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot":
/*!*****************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.eot";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0 ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.eot";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0 ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.svg";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0 ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.ttf";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0":
/*!***************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.woff2";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0":
/*!**************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0 ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.woff";

/***/ }),

/***/ "./node_modules/lit-element/lib/css-tag.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lib/css-tag.js ***!
  \*************************************************/
/*! exports provided: supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return supportsAdoptingStyleSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return CSSResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return unsafeCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const supportsAdoptingStyleSheets = ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
            // is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            }
            else {
                this._styleSheet = null;
            }
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
/**
 * Wrap a value for interpolation in a css tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/decorators.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-element/lib/decorators.js ***!
  \****************************************************/
/*! exports provided: customElement, property, query, queryAll, eventOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return customElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return eventOptions; });
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
const legacyCustomElement = (tagName, clazz) => {
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            window.customElements.define(tagName, clazz);
        }
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * @param tagName the name of the custom element to define
 */
const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
    legacyCustomElement(tagName, classOrDescriptor) :
    standardCustomElement(tagName, classOrDescriptor);
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor &&
        !('value' in element.descriptor)) {
        return Object.assign({}, element, { finisher(clazz) {
                clazz.createProperty(element.key, options);
            } });
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            }
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor
        .createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A `PropertyDeclaration` may optionally be
 * supplied to configure property features.
 *
 * @ExportDecoratedItems
 */
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name) => (name !== undefined) ?
        legacyProperty(options, protoOrDescriptor, name) :
        standardProperty(options, protoOrDescriptor);
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */
function query(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */
function queryAll(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelectorAll(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
const standardEventOptions = (options, element) => {
    return Object.assign({}, element, { finisher(clazz) {
            Object.assign(clazz.prototype[element.key], options);
        } });
};
const legacyEventOptions = 
// tslint:disable-next-line:no-any legacy decorator
(options, proto, name) => {
    Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifis event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 *
 *     class MyElement {
 *
 *       clicked = false;
 *
 *       render() {
 *         return html`<div @click=${this._onClick}`><button></button></div>`;
 *       }
 *
 *       @eventOptions({capture: true})
 *       _onClick(e) {
 *         this.clicked = true;
 *       }
 *     }
 */
const eventOptions = (options) => 
// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
((protoOrDescriptor, name) => (name !== undefined) ?
    legacyEventOptions(options, protoOrDescriptor, name) :
    standardEventOptions(options, protoOrDescriptor));
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/updating-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/lit-element/lib/updating-element.js ***!
  \**********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return defaultConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return UpdatingElement; });
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
var _a;
/**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty =
    (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                return JSON.parse(value);
        }
        return value;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const microtaskPromise = Promise.resolve(true);
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
const STATE_HAS_CONNECTED = 1 << 5;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */
class UpdatingElement extends HTMLElement {
    constructor() {
        super();
        this._updateState = 0;
        this._instanceProperties = undefined;
        this._updatePromise = microtaskPromise;
        this._hasConnectedResolver = undefined;
        /**
         * Map with keys for any properties that have changed since the last
         * update cycle with previous values.
         */
        this._changedProperties = new Map();
        /**
         * Map with keys of properties that should be reflected when updated.
         */
        this._reflectingProperties = undefined;
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p) => {
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach((v, k) => this._classProperties.set(k, v));
            }
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
        Object.defineProperty(this.prototype, name, {
            // tslint:disable-next-line:no-any no symbol in index
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this._requestUpdate(name, oldValue);
            },
            configurable: true,
            enumerable: true
        });
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */
    static finalize() {
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) {
            superCtor.finalize();
        }
        this[finalized] = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ?
            undefined :
            (typeof attribute === 'string' ?
                attribute :
                (typeof name === 'string' ? name.toLowerCase() : undefined));
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */
    static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */
    static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */
    static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute ||
            defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    initialize() {
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this._requestUpdate();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor
            ._classProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) {
                    this._instanceProperties = new Map();
                }
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */
    _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p) => this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        this._updateState = this._updateState | STATE_HAS_CONNECTED;
        // Ensure first connection completes an update. Updates cannot complete
        // before connection and if one is pending connection the
        // `_hasConnectionResolver` will exist. If so, resolve it to complete the
        // update, otherwise requestUpdate.
        if (this._hasConnectedResolver) {
            this._hasConnectedResolver();
            this._hasConnectedResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */
    disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */
    attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        const ctor = this.constructor;
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor._classProperties.get(propName) || defaultPropertyDeclaration;
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
                // tslint:disable-next-line:no-any
                ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */
    _requestUpdate(name, oldValue) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            const options = ctor._classProperties.get(name) || defaultPropertyDeclaration;
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true &&
                    !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._enqueueUpdate();
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */
    requestUpdate(name, oldValue) {
        this._requestUpdate(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async _enqueueUpdate() {
        // Mark state updating...
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        let resolve;
        let reject;
        const previousUpdatePromise = this._updatePromise;
        this._updatePromise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await previousUpdatePromise;
        }
        catch (e) {
            // Ignore any previous errors. We only care that the previous cycle is
            // done. Any error should have been handled in the previous update.
        }
        // Make sure the element has connected before updating.
        if (!this._hasConnected) {
            await new Promise((res) => this._hasConnectedResolver = res);
        }
        try {
            const result = this.performUpdate();
            // If `performUpdate` returns a Promise, we await it. This is done to
            // enable coordinating updates with a scheduler. Note, the result is
            // checked to avoid delaying an additional microtask unless we need to.
            if (result != null) {
                await result;
            }
        }
        catch (e) {
            reject(e);
        }
        resolve(!this._hasRequestedUpdate);
    }
    get _hasConnected() {
        return (this._updateState & STATE_HAS_CONNECTED);
    }
    get _hasRequestedUpdate() {
        return (this._updateState & STATE_UPDATE_REQUESTED);
    }
    get hasUpdated() {
        return (this._updateState & STATE_HAS_UPDATED);
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    performUpdate() {
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            throw e;
        }
        finally {
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */
    get updateComplete() {
        return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */
    _getUpdateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    update(_changedProperties) {
        if (this._reflectingProperties !== undefined &&
            this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    firstUpdated(_changedProperties) {
    }
}
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */
UpdatingElement[_a] = true;
//# sourceMappingURL=updating-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement, customElement, property, query, queryAll, eventOptions, html, svg, TemplateResult, SVGTemplateResult, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css, LitElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/updating-element.js */ "./node_modules/lit-element/lib/updating-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]; });

/* harmony import */ var _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/decorators.js */ "./node_modules/lit-element/lib/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"]; });

/* harmony import */ var _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/css-tag.js */ "./node_modules/lit-element/lib/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["css"]; });

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








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
    .push('2.2.1');
/**
 * Minimal implementation of Array.prototype.flat
 * @param arr the array to flatten
 * @param result the accumlated result
 */
function arrayFlat(styles, result = []) {
    for (let i = 0, length = styles.length; i < length; i++) {
        const value = styles[i];
        if (Array.isArray(value)) {
            arrayFlat(value, result);
        }
        else {
            result.push(value);
        }
    }
    return result;
}
/** Deeply flattens styles array. Uses native flat if available. */
const flattenStyles = (styles) => styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
class LitElement extends _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"] {
    /** @nocollapse */
    static finalize() {
        // The Closure JS Compiler does not always preserve the correct "this"
        // when calling static super methods (b/137460243), so explicitly bind.
        super.finalize.call(this);
        // Prepare styling that is stamped at first render time. Styling
        // is built from user provided `styles` or is inherited from the superclass.
        this._styles =
            this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ?
                this._getUniqueStyles() :
                this._styles || [];
    }
    /** @nocollapse */
    static _getUniqueStyles() {
        // Take care not to call `this.styles` multiple times since this generates
        // new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.styles;
        const styles = [];
        if (Array.isArray(userStyles)) {
            const flatStyles = flattenStyles(userStyles);
            // As a performance optimization to avoid duplicated styling that can
            // occur especially when composing via subclassing, de-duplicate styles
            // preserving the last item in the list. The last item is kept to
            // try to preserve cascade order with the assumption that it's most
            // important that last added styles override previous styles.
            const styleSet = flatStyles.reduceRight((set, s) => {
                set.add(s);
                // on IE set.add does not return the set.
                return set;
            }, new Set());
            // Array.from does not work on Set in IE
            styleSet.forEach((v) => styles.unshift(v));
        }
        else if (userStyles) {
            styles.push(userStyles);
        }
        return styles;
    }
    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */
    initialize() {
        super.initialize();
        this.renderRoot =
            this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    createRenderRoot() {
        return this.attachShadow({ mode: 'open' });
    }
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */
    adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
        }
        else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
            this.renderRoot.adoptedStyleSheets =
                styles.map((s) => s.styleSheet);
        }
        else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        super.update(changedProperties);
        const templateResult = this.render();
        if (templateResult instanceof lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]) {
            this.constructor
                .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s) => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */
    render() {
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */
LitElement['finalized'] = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */
LitElement.render = lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__["render"];
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/directives/unsafe-html.js":
/*!*********************************************************!*\
  !*** ./node_modules/lit-html/directives/unsafe-html.js ***!
  \*********************************************************/
/*! exports provided: unsafeHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeHTML", function() { return unsafeHTML; });
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
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


// For each part, remember the value that was last rendered to the part by the
// unsafeHTML directive, and the DocumentFragment that was last set as a value.
// The DocumentFragment is used as a unique key to check if the last value
// rendered to the part was with unsafeHTML. If not, we'll always re-render the
// value passed to unsafeHTML.
const previousValues = new WeakMap();
/**
 * Renders the result as HTML, rather than text.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeHTML = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])((value) => (part) => {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"])) {
        throw new Error('unsafeHTML can only be used in text bindings');
    }
    const previousValue = previousValues.get(part);
    if (previousValue !== undefined && Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value) &&
        value === previousValue.value && part.value === previousValue.fragment) {
        return;
    }
    const template = document.createElement('template');
    template.innerHTML = value; // innerHTML casts to string internally
    const fragment = document.importNode(template.content, true);
    part.setValue(fragment);
    previousValues.set(part, { value, fragment });
});
//# sourceMappingURL=unsafe-html.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
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

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
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
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
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
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
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
/**
 * @module shady-render
 */

const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (Object(_template_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}
//# sourceMappingURL=modify-template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
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
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
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
/**
 * @module lit-html
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // tslint:disable-next-line:no-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attibute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // tslint:disable-next-line:no-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
try {
    const options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
}
catch (_e) {
}
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
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
/**
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["TemplateResult"]; });

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
/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @module shady-render
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */







// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` +
        `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
        `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_5__["marker"]);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new _template_js__WEBPACK_IMPORTED_MODULE_5__["Template"](result, element);
        templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
const removeStylesFromLitTemplates = (scopeName) => {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach((template) => {
                const { element: { content } } = template;
                // IE 11 doesn't support the iterable param Set constructor
                const styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach((s) => {
                    styles.add(s);
                });
                Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
            });
        }
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    const templateElement = !!template ? template.element : document.createElement('template');
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        //
        // ShadyCSS will only update styles containing @apply in the template
        // given to `prepareTemplateStyles`. If no lit Template was given,
        // ShadyCSS will not be able to update uses of @apply in any relevant
        // template. However, this is not a problem because we only create the
        // template for the purpose of supporting `prepareAdoptedCssText`,
        // which doesn't support @apply at all.
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (let i = 0; i < length; i++) {
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = templateElement.content;
    if (!!template) {
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, condensedStyle, content.firstChild);
    }
    else {
        content.insertBefore(condensedStyle, content.firstChild);
    }
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
        // When in native Shadow DOM, ensure the style created by ShadyCSS is
        // included in initially rendered output (`renderedDOM`).
        renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    }
    else if (!!template) {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
const render = (result, container, options) => {
    if (!options || typeof options !== 'object' || !options.scopeName) {
        throw new Error('The `scopeName` option is required.');
    }
    const scopeName = options.scopeName;
    const hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
    const needsScoping = compatibleShadyCSSVersion &&
        container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
        !!container.host;
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].delete(renderContainer);
        // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
        // that should apply to `renderContainer` even if the rendered value is
        // not a TemplateInstance. However, it will only insert scoped styles
        // into the document if `prepareTemplateStyles` has already been called
        // for the given scope name.
        const template = part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_4__["TemplateInstance"] ?
            part.value.template :
            undefined;
        prepareTemplateStyles(scopeName, renderContainer, template);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        container.appendChild(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};
//# sourceMappingURL=shady-render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
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

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
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
/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari dooes not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
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
/**
 * @module lit-html
 */


const commentMarker = ` ${_template_js__WEBPACK_IMPORTED_MODULE_1__["marker"]} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment poisition.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceeding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceeding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
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
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

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
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.1.2');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Paper, Card, Link, Button, Preformat, Image, Badge, Slideshow, Code, Icon, Highlight, Tooltip, FlexBox, FlexItem, FlexCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_paper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/components/paper.js */ "./src/js/components/paper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return _js_components_paper_js__WEBPACK_IMPORTED_MODULE_0__["Paper"]; });

/* harmony import */ var _js_components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/card.js */ "./src/js/components/card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _js_components_card_js__WEBPACK_IMPORTED_MODULE_1__["Card"]; });

/* harmony import */ var _js_components_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/link.js */ "./src/js/components/link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _js_components_link_js__WEBPACK_IMPORTED_MODULE_2__["Link"]; });

/* harmony import */ var _js_components_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/button.js */ "./src/js/components/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _js_components_button_js__WEBPACK_IMPORTED_MODULE_3__["Button"]; });

/* harmony import */ var _js_components_preformat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/preformat.js */ "./src/js/components/preformat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preformat", function() { return _js_components_preformat_js__WEBPACK_IMPORTED_MODULE_4__["Preformat"]; });

/* harmony import */ var _js_components_image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/components/image.js */ "./src/js/components/image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _js_components_image_js__WEBPACK_IMPORTED_MODULE_5__["Image"]; });

/* harmony import */ var _js_components_badge_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/components/badge.js */ "./src/js/components/badge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _js_components_badge_js__WEBPACK_IMPORTED_MODULE_6__["Badge"]; });

/* harmony import */ var _js_components_slideshow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/components/slideshow.js */ "./src/js/components/slideshow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slideshow", function() { return _js_components_slideshow_js__WEBPACK_IMPORTED_MODULE_7__["Slideshow"]; });

/* harmony import */ var _js_components_code_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/components/code.js */ "./src/js/components/code.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _js_components_code_js__WEBPACK_IMPORTED_MODULE_8__["Code"]; });

/* harmony import */ var _js_components_icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/components/icon.js */ "./src/js/components/icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _js_components_icon_js__WEBPACK_IMPORTED_MODULE_9__["Icon"]; });

/* harmony import */ var _js_components_highlight_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/components/highlight.js */ "./src/js/components/highlight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Highlight", function() { return _js_components_highlight_js__WEBPACK_IMPORTED_MODULE_10__["Highlight"]; });

/* harmony import */ var _js_components_tooltip_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/components/tooltip.js */ "./src/js/components/tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _js_components_tooltip_js__WEBPACK_IMPORTED_MODULE_11__["Tooltip"]; });

/* harmony import */ var _js_layouts_flex_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/layouts/flex.js */ "./src/js/layouts/flex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexBox", function() { return _js_layouts_flex_js__WEBPACK_IMPORTED_MODULE_12__["FlexBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexItem", function() { return _js_layouts_flex_js__WEBPACK_IMPORTED_MODULE_12__["FlexItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexCenter", function() { return _js_layouts_flex_js__WEBPACK_IMPORTED_MODULE_12__["FlexCenter"]; });

// Components











 // Layout Components



/***/ }),

/***/ "./src/js/components/badge.js":
/*!************************************!*\
  !*** ./src/js/components/badge.js ***!
  \************************************/
/*! exports provided: Badge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_badge_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/badge.scss */ "./src/scss/badge.scss");
/* harmony import */ var _scss_badge_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_badge_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let Badge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-badge'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_badge_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Badge extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Badge,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <span>
        <slot></slot>
      </span>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/button.js":
/*!*************************************!*\
  !*** ./src/js/components/button.js ***!
  \*************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/button.scss */ "./src/scss/button.scss");
/* harmony import */ var _scss_button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_button_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let Button = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-button'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_button_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Button extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Button,
    d: [{
      kind: "get",
      key: "actionText",
      value:
      /** Generate the action text for the link */
      function actionText() {
        var _this$attributes, _this$attributes$titl;

        return ((_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : (_this$attributes$titl = _this$attributes.title) === null || _this$attributes$titl === void 0 ? void 0 : _this$attributes$titl.value) || this.innerHTML;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <a href=${this.attributes.link.value} title=${this.actionText} aria-label=${this.actionText}>
        <slot></slot>
      </a>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/card.js":
/*!***********************************!*\
  !*** ./src/js/components/card.js ***!
  \***********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/card.scss */ "./src/scss/card.scss");
/* harmony import */ var _scss_card_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_card_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let Card = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-card'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_card_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Card extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Card,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        var _this$attributes, _this$attributes$head, _this$attributes2, _this$attributes2$hea;

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <e-paper>
        <header>
          <slot name="left-icon"></slot>
          <h3 class="text-overflow" title=${(_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : (_this$attributes$head = _this$attributes.header) === null || _this$attributes$head === void 0 ? void 0 : _this$attributes$head.value}>
            <slot name="header">${(_this$attributes2 = this.attributes) === null || _this$attributes2 === void 0 ? void 0 : (_this$attributes2$hea = _this$attributes2.header) === null || _this$attributes2$hea === void 0 ? void 0 : _this$attributes2$hea.value}</slot>
          </h3>
          <slot name="right-icon"></slot>
        </header>
        <slot name="head"></slot>
        <p>
          <slot></slot>
        </p>
        <slot name="tail"></slot>
      </e-paper>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/code.js":
/*!***********************************!*\
  !*** ./src/js/components/code.js ***!
  \***********************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_unsafe_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/unsafe-html */ "./node_modules/lit-html/directives/unsafe-html.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var code_prettify_loader_prettify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! code-prettify/loader/prettify */ "./node_modules/code-prettify/loader/prettify.js");
/* harmony import */ var code_prettify_loader_prettify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(code_prettify_loader_prettify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_code_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scss/code.scss */ "./src/scss/code.scss");
/* harmony import */ var _scss_code_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_code_scss__WEBPACK_IMPORTED_MODULE_4__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






let Code = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-code'), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["styles"])(_scss_code_scss__WEBPACK_IMPORTED_MODULE_4___default.a)], function (_initialize, _LitElement) {
  class Code extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Code,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        var _this$attributes, _this$attributes$lang, _this$attributes2;

        let pretty = PR.prettyPrintOne(this.innerHTML, (_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : (_this$attributes$lang = _this$attributes.language) === null || _this$attributes$lang === void 0 ? void 0 : _this$attributes$lang.value, ((_this$attributes2 = this.attributes) === null || _this$attributes2 === void 0 ? void 0 : _this$attributes2.lineNumbers) && true);
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<e-preformat><code>${Object(lit_html_directives_unsafe_html__WEBPACK_IMPORTED_MODULE_1__["unsafeHTML"])(pretty)}</code></e-preformat>`;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/highlight.js":
/*!****************************************!*\
  !*** ./src/js/components/highlight.js ***!
  \****************************************/
/*! exports provided: Highlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Highlight", function() { return Highlight; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_highlight_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/highlight.scss */ "./src/scss/highlight.scss");
/* harmony import */ var _scss_highlight_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_highlight_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let Highlight = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-highlight'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_highlight_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Highlight extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Highlight,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<em><slot></slot></em>`;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/icon.js":
/*!***********************************!*\
  !*** ./src/js/components/icon.js ***!
  \***********************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_icon_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/icon.scss */ "./src/scss/icon.scss");
/* harmony import */ var _scss_icon_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_icon_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




let Icon = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-icon'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_icon_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Icon extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Icon,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: // Fix bug with icons https://github.com/mdn/interactive-examples/issues/887#issuecomment-528205273
      function connectedCallback() {
        _get(_getPrototypeOf(Icon.prototype), "connectedCallback", this).call(this);

        let fontFaceSheet = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      @font-face {
        font-family: "FontAwesome";
        font-weight: normal;
        font-style: normal;
        src: url("/assets/fontawesome-webfont.eot");
        src: url("/assets/fontawesome-webfont.eot?#iefix") format("embedded-opentype"),
             url("/assets/fontawesome-webfont.woff2") format("woff2"),
             url("/assets/fontawesome-webfont.woff") format("woff"),
             url("/assets/fontawesome-webfont.ttf") format("truetype"),
             url("/assets/fontawesome-webfont.svg#fontawesomeregular") format("svg");
      }
    `.styleSheet;
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, fontFaceSheet];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$attributes;

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<i class="fa fa-${this.innerHTML} ${((_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : _this$attributes.spin) ? 'fa-spin' : 'fa-static'}"></i>`;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/image.js":
/*!************************************!*\
  !*** ./src/js/components/image.js ***!
  \************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_image_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/image.scss */ "./src/scss/image.scss");
/* harmony import */ var _scss_image_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_image_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




const TRANS_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=';
let Image = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-image'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_image_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Image extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Image,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "image",

      value() {
        return TRANS_PNG;
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        // todo generate the lazy loading of the image value
        this.image = this.attributes.source.value;
      }
      /** Never forget the alt tag, use file name if it's not specificed */

    }, {
      kind: "get",
      key: "altTag",
      value: function altTag() {
        var _this$attributes, _this$attributes$alt;

        // todo remove query parameters from alt and # selector
        let alt = (_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : (_this$attributes$alt = _this$attributes.alt) === null || _this$attributes$alt === void 0 ? void 0 : _this$attributes$alt.value;
        let lastSeperator = this.image.lastIndexOf('/');

        if (!alt && lastSeperator > 0) {
          if (lastSeperator == this.image.length - 1) {
            // remove http prefix if any
            alt = this.image.substr(0, lastSeperator).replace(/http(s)?:\/\//, '');
          } else {
            // remove suffix if any
            alt = this.image.substr(lastSeperator + 1).replace(/\.([A-Za-z])+/, '');
          }
        }

        return alt;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<img alt=${this.altTag} src=${this.image}></img>`;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/link.js":
/*!***********************************!*\
  !*** ./src/js/components/link.js ***!
  \***********************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_link_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/link.scss */ "./src/scss/link.scss");
/* harmony import */ var _scss_link_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_link_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let Link = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-link'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_link_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Link extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Link,
    d: [{
      kind: "get",
      key: "actionText",
      value:
      /** Generate the action text for the link */
      function actionText() {
        var _this$attributes, _this$attributes$titl;

        return ((_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : (_this$attributes$titl = _this$attributes.title) === null || _this$attributes$titl === void 0 ? void 0 : _this$attributes$titl.value) || this.innerHTML;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <a href=${this.attributes.link.value} title=${this.actionText} aria-label=${this.actionText}>
        <slot></slot>
      </a>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/paper.js":
/*!************************************!*\
  !*** ./src/js/components/paper.js ***!
  \************************************/
/*! exports provided: Paper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return Paper; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_paper_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/paper.scss */ "./src/scss/paper.scss");
/* harmony import */ var _scss_paper_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_paper_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let Paper = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-paper'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_paper_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Paper extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Paper,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div>
        <slot></slot>
      </div>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/preformat.js":
/*!****************************************!*\
  !*** ./src/js/components/preformat.js ***!
  \****************************************/
/*! exports provided: Preformat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preformat", function() { return Preformat; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_preformat_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/preformat.scss */ "./src/scss/preformat.scss");
/* harmony import */ var _scss_preformat_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_preformat_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let Preformat = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-preformat'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_preformat_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Preformat extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Preformat,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<pre><slot></slot></pre>`;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/slideshow.js":
/*!****************************************!*\
  !*** ./src/js/components/slideshow.js ***!
  \****************************************/
/*! exports provided: Slideshow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slideshow", function() { return Slideshow; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_slideshow_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/slideshow.scss */ "./src/scss/slideshow.scss");
/* harmony import */ var _scss_slideshow_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_slideshow_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




const DEFAULT_DELAY = 5000;
let Slideshow = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-slideshow'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_slideshow_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Slideshow extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Slideshow,
    d: [{
      kind: "field",
      key: "index",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      key: "length",

      value() {
        var _this$children;

        return ((_this$children = this.children) === null || _this$children === void 0 ? void 0 : _this$children.length) || 0;
      }

    }, {
      kind: "field",
      key: "delay",

      value() {
        var _this$attributes, _this$attributes$dela;

        return Number(((_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : (_this$attributes$dela = _this$attributes.delay) === null || _this$attributes$dela === void 0 ? void 0 : _this$attributes$dela.value) || DEFAULT_DELAY);
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "image",

      value() {
        var _this$children$;

        return (_this$children$ = this.children[0]) === null || _this$children$ === void 0 ? void 0 : _this$children$.cloneNode();
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "pause",

      value() {
        var _this$children2;

        return !(((_this$children2 = this.children) === null || _this$children2 === void 0 ? void 0 : _this$children2.autoPlay) && true);
      }

    }, {
      kind: "method",
      key: "next",
      value: async function next() {
        let i = this.index;
        this.item(++i >= this.length ? 0 : i);
      }
    }, {
      kind: "method",
      key: "prev",
      value: async function prev() {
        let i = this.index;
        this.item(--i <= -1 ? this.length - 1 : i);
      }
    }, {
      kind: "method",
      key: "item",
      value: function item(i) {
        var _this$children$this$i;

        if (i < 0 || i >= this.length) {
          i = 0;
        }

        this.index = i;
        this.image = (_this$children$this$i = this.children[this.index]) === null || _this$children$this$i === void 0 ? void 0 : _this$children$this$i.cloneNode(); // Triggered when the image has been changed

        this.dispatchEvent(new CustomEvent('changed-image', {
          detail: {
            index: this.index,
            image: this.image
          },
          bubbles: true,
          composed: true
        }));
      }
    }, {
      kind: "method",
      key: "togglePause",
      value: async function togglePause() {
        // Only allow pausing when the delay > 0
        if (this.delay > 0) {
          this.pause = !this.pause; // Triggered when the image has been paused or resumed playing

          this.dispatchEvent(new CustomEvent('paused', {
            detail: {
              pause: this.pause,
              index: this.index,
              image: this.image
            },
            bubbles: true,
            composed: true
          }));
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        // Create the interval timer if its greator than 0
        if (this.delay > 0) {
          this.intervalId = setInterval(async () => {
            if (!this.pause) {
              this.next();
            }
          }, this.delay);
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(Slideshow.prototype), "disconnectedCallback", this).call(this); // Clear the interval timer


        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$attributes2, _this$attributes2$sty, _this$attributes3;

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="slideshow" style=${(_this$attributes2 = this.attributes) === null || _this$attributes2 === void 0 ? void 0 : (_this$attributes2$sty = _this$attributes2.style) === null || _this$attributes2$sty === void 0 ? void 0 : _this$attributes2$sty.value}>
        <content>
          <div class="image">${this.image}</div>
          <nav class=${((_this$attributes3 = this.attributes) === null || _this$attributes3 === void 0 ? void 0 : _this$attributes3.hideControls) ? 'hide' : 'show'}>
            <div class="items">
              ${[...Array(this.length).keys()].map(i => {
          // Current index item is the play pause toggle
          if (i === this.index) {
            // When there is no delay just show static images like a presentation
            if (this.delay <= 0) {
              return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="item play"></div>`;
            }

            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class=${this.pause ? 'item pause' : 'item play'} @click=${this.togglePause}></div>`;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class='item' @click=${() => this.item(i)}></div>`;
        })}
            </div>
            <div class="control left" @click=${this.prev}></div>
            <div class="control right" @click=${this.next}></div>
          </nav>
        </content>
      </div>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/components/tooltip.js":
/*!**************************************!*\
  !*** ./src/js/components/tooltip.js ***!
  \**************************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_tooltip_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/tooltip.scss */ "./src/scss/tooltip.scss");
/* harmony import */ var _scss_tooltip_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_tooltip_scss__WEBPACK_IMPORTED_MODULE_2__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




let Tooltip = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-tooltip'), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["styles"])(_scss_tooltip_scss__WEBPACK_IMPORTED_MODULE_2___default.a)], function (_initialize, _LitElement) {
  class Tooltip extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: Tooltip,
    d: [{
      kind: "get",
      key: "tooltip",
      value:
      /** Get the copy of the tooltip if slot is not slotted */
      function tooltip() {
        var _this$attributes, _this$attributes$valu;

        return (_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : (_this$attributes$valu = _this$attributes.value) === null || _this$attributes$valu === void 0 ? void 0 : _this$attributes$valu.value;
      }
      /** Get the direction of the tooltip defaults to bottom */

    }, {
      kind: "get",
      key: "direction",
      value: function direction() {
        var _this$attributes2, _this$attributes2$dir;

        return ((_this$attributes2 = this.attributes) === null || _this$attributes2 === void 0 ? void 0 : (_this$attributes2$dir = _this$attributes2.direction) === null || _this$attributes2$dir === void 0 ? void 0 : _this$attributes2$dir.value) || 'bottom';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <span class="wrapper ${this.direction}">
        <slot></slot>
        <slot name="tooltip">
          <span class="tooltip">${this.tooltip}</span>
        </slot>
      </span>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/layouts/flex.js":
/*!********************************!*\
  !*** ./src/js/layouts/flex.js ***!
  \********************************/
/*! exports provided: FlexBox, FlexItem, FlexCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexBox", function() { return FlexBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexItem", function() { return FlexItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexCenter", function() { return FlexCenter; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_unsafe_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/unsafe-html */ "./node_modules/lit-html/directives/unsafe-html.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");
/* harmony import */ var _scss_flex_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scss/flex.scss */ "./src/scss/flex.scss");
/* harmony import */ var _scss_flex_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_flex_scss__WEBPACK_IMPORTED_MODULE_3__);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/** The wrapper that defines a flex box area, and renders the children */

let FlexBox = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-flex-box'), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["styles"])(_scss_flex_scss__WEBPACK_IMPORTED_MODULE_3___default.a)], function (_initialize, _LitElement) {
  class FlexBox extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: FlexBox,
    d: [{
      kind: "method",
      key: "updated",
      value:
      /** Add flex properties on the content element wrapper */
      function updated() {
        var _this$attributes, _this$attributes2;

        let content = this.shadowRoot.children[0];
        content.style['flex-direction'] = ((_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : _this$attributes.column) ? 'column' : 'row';
        content.style['flex-wrap'] = ((_this$attributes2 = this.attributes) === null || _this$attributes2 === void 0 ? void 0 : _this$attributes2.wrap) ? 'wrap' : 'nowrap';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <content>
        ${Array.from(this.children)}
      </content>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
/** Defines the flex item that just renders the slotted content */

let FlexItem = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-flex-item')], function (_initialize2, _LitElement2) {
  class FlexItem extends _LitElement2 {
    constructor(...args) {
      super(...args);

      _initialize2(this);
    }

  }

  return {
    F: FlexItem,
    d: [{
      kind: "method",
      key: "updated",
      value:
      /** Add flex properties on self */
      function updated() {
        var _this$attributes3, _this$attributes3$gro, _this$attributes4, _this$attributes4$shr, _this$attributes5, _this$attributes5$ord;

        this.style['flex-grow'] = Number(((_this$attributes3 = this.attributes) === null || _this$attributes3 === void 0 ? void 0 : (_this$attributes3$gro = _this$attributes3.grow) === null || _this$attributes3$gro === void 0 ? void 0 : _this$attributes3$gro.value) || 1);
        this.style['flex-shrink'] = Number(((_this$attributes4 = this.attributes) === null || _this$attributes4 === void 0 ? void 0 : (_this$attributes4$shr = _this$attributes4.shrink) === null || _this$attributes4$shr === void 0 ? void 0 : _this$attributes4$shr.value) || 1);
        this.style['order'] = Number(((_this$attributes5 = this.attributes) === null || _this$attributes5 === void 0 ? void 0 : (_this$attributes5$ord = _this$attributes5.order) === null || _this$attributes5$ord === void 0 ? void 0 : _this$attributes5$ord.value) || 0);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<slot></slot>`;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
/** Center items in the center of the box both vertical and horzonial */

let FlexCenter = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('e-flex-center'), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["styles"])(_scss_flex_scss__WEBPACK_IMPORTED_MODULE_3___default.a)], function (_initialize3, _LitElement3) {
  class FlexCenter extends _LitElement3 {
    constructor(...args) {
      super(...args);

      _initialize3(this);
    }

  }

  return {
    F: FlexCenter,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <content class="center">
        <slot></slot>
      </content>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: _styles, styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_styles", function() { return _styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

/** Takes the import object for scss files and inject it into the custom element */

const _styles = style => lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`${Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"])(style[0][1])}`;
/** Creates a decorator for the class */

function styles(...styles) {
  // this is the equalivant of doing in the class
  // static styles = _styles(style)
  return descriptor => {
    return { ...descriptor,
      elements: [...descriptor.elements, {
        kind: 'field',
        placement: 'static',
        key: 'styles',
        descriptor: {},
        initializer: () => styles.map(style => style instanceof lit_element__WEBPACK_IMPORTED_MODULE_0__["CSSResult"] ? style : _styles(style))
      }]
    };
  };
}

/***/ }),

/***/ "./src/scss/badge.scss":
/*!*****************************!*\
  !*** ./src/scss/badge.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "span {\n  color: #fff;\n  border-radius: 15px;\n  background-color: #789;\n  padding: 2px 3px;\n  box-shadow: 1px 1px 2px #aaa;\n  display: inline-block;\n  vertical-align: super;\n  font-size: 12px;\n  font-weight: normal; }\n  span slot {\n    display: inline;\n    margin: 1px; }\n  span ::slotted(*) {\n    margin: 0 2px; }\n", ""]);


/***/ }),

/***/ "./src/scss/button.scss":
/*!******************************!*\
  !*** ./src/scss/button.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.text-overflow {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.overflow {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: auto; }\n\na {\n  padding: 5px 10px;\n  color: #eee;\n  text-decoration: none;\n  background-color: #337ab7;\n  border: 1px solid #2e6da4;\n  display: inline-block;\n  font-size: 14px;\n  white-space: nowrap; }\n  a ::slotted(*) {\n    display: inline;\n    margin: 0 5px; }\n  a:visited {\n    color: #eee; }\n  a:hover {\n    background-color: #286090;\n    border-color: #204d74; }\n  a:active, a:focus {\n    color: #fff;\n    background-color: #1972b3;\n    border-color: #1d84cf; }\n", ""]);


/***/ }),

/***/ "./src/scss/card.scss":
/*!****************************!*\
  !*** ./src/scss/card.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.text-overflow {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.overflow {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: auto; }\n\ne-paper header {\n  background-color: #ededed;\n  margin: 0;\n  padding: 5px 10px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  color: #777; }\n  e-paper header h3 {\n    color: #337ab7;\n    font-size: 18px;\n    margin: auto 2px;\n    padding: 0 3px;\n    width: 100%; }\n\ne-paper > p {\n  margin: 0;\n  padding: 10px; }\n", ""]);


/***/ }),

/***/ "./src/scss/code.scss":
/*!****************************!*\
  !*** ./src/scss/code.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".pln {\n  color: #000; }\n\n@media screen {\n  .str {\n    color: #080; }\n  .kwd {\n    color: #008; }\n  .com {\n    color: #800; }\n  .typ {\n    color: #606; }\n  .lit {\n    color: #066; }\n  .pun, .opn, .clo {\n    color: #660; }\n  .tag {\n    color: #008; }\n  .atn {\n    color: #606; }\n  .atv {\n    color: #080; }\n  .dec, .var {\n    color: #606; }\n  .fun {\n    color: red; } }\n\n@media print, projection {\n  .str {\n    color: #060; }\n  .kwd {\n    color: #006;\n    font-weight: bold; }\n  .com {\n    color: #600;\n    font-style: italic; }\n  .typ {\n    color: #404;\n    font-weight: bold; }\n  .lit {\n    color: #044; }\n  .pun, .opn, .clo {\n    color: #440; }\n  .tag {\n    color: #006;\n    font-weight: bold; }\n  .atn {\n    color: #404; }\n  .atv {\n    color: #060; } }\n\npre.prettyprint {\n  padding: 2px;\n  border: 1px solid #888; }\n\nol.linenums {\n  margin-top: 0;\n  margin-bottom: 0; }\n\nli.L0, li.L1, li.L2, li.L3, li.L5, li.L6, li.L7, li.L8 {\n  list-style-type: none; }\n\nli.L1, li.L3, li.L5, li.L7, li.L9 {\n  background: #eee; }\n\nli {\n  list-style-type: decimal !important; }\n  li.L0, li.L1, li.L2, li.L3, li.L5, li.L6, li.L7, li.L8 {\n    list-style-type: decimal !important; }\n", ""]);


/***/ }),

/***/ "./src/scss/flex.scss":
/*!****************************!*\
  !*** ./src/scss/flex.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "content {\n  display: flex;\n  height: 100%; }\n  content.center {\n    justify-content: center;\n    align-items: center; }\n  content e-flex-item {\n    flex: 1; }\n", ""]);


/***/ }),

/***/ "./src/scss/highlight.scss":
/*!*********************************!*\
  !*** ./src/scss/highlight.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.text-overflow {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.overflow {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: auto; }\n\nem {\n  display: inline-block;\n  background-color: #567899;\n  padding: 0 5px;\n  margin: 1px 0;\n  color: #fefefe;\n  border-radius: 2px;\n  font-style: normal; }\n  em ::slotted(*) {\n    --color: #efefef;\n    --color-hover: #eee;\n    --color-active: #fff; }\n", ""]);


/***/ }),

/***/ "./src/scss/icon.scss":
/*!****************************!*\
  !*** ./src/scss/icon.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! font-awesome/fonts/fontawesome-webfont.eot */ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot") + "?#iefix&v=4.7.0");
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0") + "#fontawesomeregular");
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-fw {\n  width: 1.28571em;\n  text-align: center; }\n\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14286em;\n  list-style-type: none; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  position: absolute;\n  left: -2.14286em;\n  width: 2.14286em;\n  top: 0.14286em;\n  text-align: center; }\n  .fa-li.fa-lg {\n    left: -1.85714em; }\n\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right {\n  margin-left: .3em; }\n\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right; }\n\n.pull-left {\n  float: left; }\n\n.fa.pull-left {\n  margin-right: .3em; }\n\n.fa.pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none; }\n\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n\n.fa-stack-1x, .fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\"; }\n\n.fa-music:before {\n  content: \"\"; }\n\n.fa-search:before {\n  content: \"\"; }\n\n.fa-envelope-o:before {\n  content: \"\"; }\n\n.fa-heart:before {\n  content: \"\"; }\n\n.fa-star:before {\n  content: \"\"; }\n\n.fa-star-o:before {\n  content: \"\"; }\n\n.fa-user:before {\n  content: \"\"; }\n\n.fa-film:before {\n  content: \"\"; }\n\n.fa-th-large:before {\n  content: \"\"; }\n\n.fa-th:before {\n  content: \"\"; }\n\n.fa-th-list:before {\n  content: \"\"; }\n\n.fa-check:before {\n  content: \"\"; }\n\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\"; }\n\n.fa-search-plus:before {\n  content: \"\"; }\n\n.fa-search-minus:before {\n  content: \"\"; }\n\n.fa-power-off:before {\n  content: \"\"; }\n\n.fa-signal:before {\n  content: \"\"; }\n\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\"; }\n\n.fa-trash-o:before {\n  content: \"\"; }\n\n.fa-home:before {\n  content: \"\"; }\n\n.fa-file-o:before {\n  content: \"\"; }\n\n.fa-clock-o:before {\n  content: \"\"; }\n\n.fa-road:before {\n  content: \"\"; }\n\n.fa-download:before {\n  content: \"\"; }\n\n.fa-arrow-circle-o-down:before {\n  content: \"\"; }\n\n.fa-arrow-circle-o-up:before {\n  content: \"\"; }\n\n.fa-inbox:before {\n  content: \"\"; }\n\n.fa-play-circle-o:before {\n  content: \"\"; }\n\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\"; }\n\n.fa-refresh:before {\n  content: \"\"; }\n\n.fa-list-alt:before {\n  content: \"\"; }\n\n.fa-lock:before {\n  content: \"\"; }\n\n.fa-flag:before {\n  content: \"\"; }\n\n.fa-headphones:before {\n  content: \"\"; }\n\n.fa-volume-off:before {\n  content: \"\"; }\n\n.fa-volume-down:before {\n  content: \"\"; }\n\n.fa-volume-up:before {\n  content: \"\"; }\n\n.fa-qrcode:before {\n  content: \"\"; }\n\n.fa-barcode:before {\n  content: \"\"; }\n\n.fa-tag:before {\n  content: \"\"; }\n\n.fa-tags:before {\n  content: \"\"; }\n\n.fa-book:before {\n  content: \"\"; }\n\n.fa-bookmark:before {\n  content: \"\"; }\n\n.fa-print:before {\n  content: \"\"; }\n\n.fa-camera:before {\n  content: \"\"; }\n\n.fa-font:before {\n  content: \"\"; }\n\n.fa-bold:before {\n  content: \"\"; }\n\n.fa-italic:before {\n  content: \"\"; }\n\n.fa-text-height:before {\n  content: \"\"; }\n\n.fa-text-width:before {\n  content: \"\"; }\n\n.fa-align-left:before {\n  content: \"\"; }\n\n.fa-align-center:before {\n  content: \"\"; }\n\n.fa-align-right:before {\n  content: \"\"; }\n\n.fa-align-justify:before {\n  content: \"\"; }\n\n.fa-list:before {\n  content: \"\"; }\n\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\"; }\n\n.fa-indent:before {\n  content: \"\"; }\n\n.fa-video-camera:before {\n  content: \"\"; }\n\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\"; }\n\n.fa-pencil:before {\n  content: \"\"; }\n\n.fa-map-marker:before {\n  content: \"\"; }\n\n.fa-adjust:before {\n  content: \"\"; }\n\n.fa-tint:before {\n  content: \"\"; }\n\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\"; }\n\n.fa-share-square-o:before {\n  content: \"\"; }\n\n.fa-check-square-o:before {\n  content: \"\"; }\n\n.fa-arrows:before {\n  content: \"\"; }\n\n.fa-step-backward:before {\n  content: \"\"; }\n\n.fa-fast-backward:before {\n  content: \"\"; }\n\n.fa-backward:before {\n  content: \"\"; }\n\n.fa-play:before {\n  content: \"\"; }\n\n.fa-pause:before {\n  content: \"\"; }\n\n.fa-stop:before {\n  content: \"\"; }\n\n.fa-forward:before {\n  content: \"\"; }\n\n.fa-fast-forward:before {\n  content: \"\"; }\n\n.fa-step-forward:before {\n  content: \"\"; }\n\n.fa-eject:before {\n  content: \"\"; }\n\n.fa-chevron-left:before {\n  content: \"\"; }\n\n.fa-chevron-right:before {\n  content: \"\"; }\n\n.fa-plus-circle:before {\n  content: \"\"; }\n\n.fa-minus-circle:before {\n  content: \"\"; }\n\n.fa-times-circle:before {\n  content: \"\"; }\n\n.fa-check-circle:before {\n  content: \"\"; }\n\n.fa-question-circle:before {\n  content: \"\"; }\n\n.fa-info-circle:before {\n  content: \"\"; }\n\n.fa-crosshairs:before {\n  content: \"\"; }\n\n.fa-times-circle-o:before {\n  content: \"\"; }\n\n.fa-check-circle-o:before {\n  content: \"\"; }\n\n.fa-ban:before {\n  content: \"\"; }\n\n.fa-arrow-left:before {\n  content: \"\"; }\n\n.fa-arrow-right:before {\n  content: \"\"; }\n\n.fa-arrow-up:before {\n  content: \"\"; }\n\n.fa-arrow-down:before {\n  content: \"\"; }\n\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\"; }\n\n.fa-expand:before {\n  content: \"\"; }\n\n.fa-compress:before {\n  content: \"\"; }\n\n.fa-plus:before {\n  content: \"\"; }\n\n.fa-minus:before {\n  content: \"\"; }\n\n.fa-asterisk:before {\n  content: \"\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\"; }\n\n.fa-gift:before {\n  content: \"\"; }\n\n.fa-leaf:before {\n  content: \"\"; }\n\n.fa-fire:before {\n  content: \"\"; }\n\n.fa-eye:before {\n  content: \"\"; }\n\n.fa-eye-slash:before {\n  content: \"\"; }\n\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\"; }\n\n.fa-plane:before {\n  content: \"\"; }\n\n.fa-calendar:before {\n  content: \"\"; }\n\n.fa-random:before {\n  content: \"\"; }\n\n.fa-comment:before {\n  content: \"\"; }\n\n.fa-magnet:before {\n  content: \"\"; }\n\n.fa-chevron-up:before {\n  content: \"\"; }\n\n.fa-chevron-down:before {\n  content: \"\"; }\n\n.fa-retweet:before {\n  content: \"\"; }\n\n.fa-shopping-cart:before {\n  content: \"\"; }\n\n.fa-folder:before {\n  content: \"\"; }\n\n.fa-folder-open:before {\n  content: \"\"; }\n\n.fa-arrows-v:before {\n  content: \"\"; }\n\n.fa-arrows-h:before {\n  content: \"\"; }\n\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\"; }\n\n.fa-twitter-square:before {\n  content: \"\"; }\n\n.fa-facebook-square:before {\n  content: \"\"; }\n\n.fa-camera-retro:before {\n  content: \"\"; }\n\n.fa-key:before {\n  content: \"\"; }\n\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\"; }\n\n.fa-comments:before {\n  content: \"\"; }\n\n.fa-thumbs-o-up:before {\n  content: \"\"; }\n\n.fa-thumbs-o-down:before {\n  content: \"\"; }\n\n.fa-star-half:before {\n  content: \"\"; }\n\n.fa-heart-o:before {\n  content: \"\"; }\n\n.fa-sign-out:before {\n  content: \"\"; }\n\n.fa-linkedin-square:before {\n  content: \"\"; }\n\n.fa-thumb-tack:before {\n  content: \"\"; }\n\n.fa-external-link:before {\n  content: \"\"; }\n\n.fa-sign-in:before {\n  content: \"\"; }\n\n.fa-trophy:before {\n  content: \"\"; }\n\n.fa-github-square:before {\n  content: \"\"; }\n\n.fa-upload:before {\n  content: \"\"; }\n\n.fa-lemon-o:before {\n  content: \"\"; }\n\n.fa-phone:before {\n  content: \"\"; }\n\n.fa-square-o:before {\n  content: \"\"; }\n\n.fa-bookmark-o:before {\n  content: \"\"; }\n\n.fa-phone-square:before {\n  content: \"\"; }\n\n.fa-twitter:before {\n  content: \"\"; }\n\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\"; }\n\n.fa-github:before {\n  content: \"\"; }\n\n.fa-unlock:before {\n  content: \"\"; }\n\n.fa-credit-card:before {\n  content: \"\"; }\n\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\"; }\n\n.fa-hdd-o:before {\n  content: \"\"; }\n\n.fa-bullhorn:before {\n  content: \"\"; }\n\n.fa-bell:before {\n  content: \"\"; }\n\n.fa-certificate:before {\n  content: \"\"; }\n\n.fa-hand-o-right:before {\n  content: \"\"; }\n\n.fa-hand-o-left:before {\n  content: \"\"; }\n\n.fa-hand-o-up:before {\n  content: \"\"; }\n\n.fa-hand-o-down:before {\n  content: \"\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\"; }\n\n.fa-globe:before {\n  content: \"\"; }\n\n.fa-wrench:before {\n  content: \"\"; }\n\n.fa-tasks:before {\n  content: \"\"; }\n\n.fa-filter:before {\n  content: \"\"; }\n\n.fa-briefcase:before {\n  content: \"\"; }\n\n.fa-arrows-alt:before {\n  content: \"\"; }\n\n.fa-group:before,\n.fa-users:before {\n  content: \"\"; }\n\n.fa-chain:before,\n.fa-link:before {\n  content: \"\"; }\n\n.fa-cloud:before {\n  content: \"\"; }\n\n.fa-flask:before {\n  content: \"\"; }\n\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\"; }\n\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\"; }\n\n.fa-paperclip:before {\n  content: \"\"; }\n\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\"; }\n\n.fa-square:before {\n  content: \"\"; }\n\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\"; }\n\n.fa-list-ul:before {\n  content: \"\"; }\n\n.fa-list-ol:before {\n  content: \"\"; }\n\n.fa-strikethrough:before {\n  content: \"\"; }\n\n.fa-underline:before {\n  content: \"\"; }\n\n.fa-table:before {\n  content: \"\"; }\n\n.fa-magic:before {\n  content: \"\"; }\n\n.fa-truck:before {\n  content: \"\"; }\n\n.fa-pinterest:before {\n  content: \"\"; }\n\n.fa-pinterest-square:before {\n  content: \"\"; }\n\n.fa-google-plus-square:before {\n  content: \"\"; }\n\n.fa-google-plus:before {\n  content: \"\"; }\n\n.fa-money:before {\n  content: \"\"; }\n\n.fa-caret-down:before {\n  content: \"\"; }\n\n.fa-caret-up:before {\n  content: \"\"; }\n\n.fa-caret-left:before {\n  content: \"\"; }\n\n.fa-caret-right:before {\n  content: \"\"; }\n\n.fa-columns:before {\n  content: \"\"; }\n\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\"; }\n\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\"; }\n\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\"; }\n\n.fa-envelope:before {\n  content: \"\"; }\n\n.fa-linkedin:before {\n  content: \"\"; }\n\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\"; }\n\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\"; }\n\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\"; }\n\n.fa-comment-o:before {\n  content: \"\"; }\n\n.fa-comments-o:before {\n  content: \"\"; }\n\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\"; }\n\n.fa-sitemap:before {\n  content: \"\"; }\n\n.fa-umbrella:before {\n  content: \"\"; }\n\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\"; }\n\n.fa-lightbulb-o:before {\n  content: \"\"; }\n\n.fa-exchange:before {\n  content: \"\"; }\n\n.fa-cloud-download:before {\n  content: \"\"; }\n\n.fa-cloud-upload:before {\n  content: \"\"; }\n\n.fa-user-md:before {\n  content: \"\"; }\n\n.fa-stethoscope:before {\n  content: \"\"; }\n\n.fa-suitcase:before {\n  content: \"\"; }\n\n.fa-bell-o:before {\n  content: \"\"; }\n\n.fa-coffee:before {\n  content: \"\"; }\n\n.fa-cutlery:before {\n  content: \"\"; }\n\n.fa-file-text-o:before {\n  content: \"\"; }\n\n.fa-building-o:before {\n  content: \"\"; }\n\n.fa-hospital-o:before {\n  content: \"\"; }\n\n.fa-ambulance:before {\n  content: \"\"; }\n\n.fa-medkit:before {\n  content: \"\"; }\n\n.fa-fighter-jet:before {\n  content: \"\"; }\n\n.fa-beer:before {\n  content: \"\"; }\n\n.fa-h-square:before {\n  content: \"\"; }\n\n.fa-plus-square:before {\n  content: \"\"; }\n\n.fa-angle-double-left:before {\n  content: \"\"; }\n\n.fa-angle-double-right:before {\n  content: \"\"; }\n\n.fa-angle-double-up:before {\n  content: \"\"; }\n\n.fa-angle-double-down:before {\n  content: \"\"; }\n\n.fa-angle-left:before {\n  content: \"\"; }\n\n.fa-angle-right:before {\n  content: \"\"; }\n\n.fa-angle-up:before {\n  content: \"\"; }\n\n.fa-angle-down:before {\n  content: \"\"; }\n\n.fa-desktop:before {\n  content: \"\"; }\n\n.fa-laptop:before {\n  content: \"\"; }\n\n.fa-tablet:before {\n  content: \"\"; }\n\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\"; }\n\n.fa-circle-o:before {\n  content: \"\"; }\n\n.fa-quote-left:before {\n  content: \"\"; }\n\n.fa-quote-right:before {\n  content: \"\"; }\n\n.fa-spinner:before {\n  content: \"\"; }\n\n.fa-circle:before {\n  content: \"\"; }\n\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\"; }\n\n.fa-github-alt:before {\n  content: \"\"; }\n\n.fa-folder-o:before {\n  content: \"\"; }\n\n.fa-folder-open-o:before {\n  content: \"\"; }\n\n.fa-smile-o:before {\n  content: \"\"; }\n\n.fa-frown-o:before {\n  content: \"\"; }\n\n.fa-meh-o:before {\n  content: \"\"; }\n\n.fa-gamepad:before {\n  content: \"\"; }\n\n.fa-keyboard-o:before {\n  content: \"\"; }\n\n.fa-flag-o:before {\n  content: \"\"; }\n\n.fa-flag-checkered:before {\n  content: \"\"; }\n\n.fa-terminal:before {\n  content: \"\"; }\n\n.fa-code:before {\n  content: \"\"; }\n\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\"; }\n\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\"; }\n\n.fa-location-arrow:before {\n  content: \"\"; }\n\n.fa-crop:before {\n  content: \"\"; }\n\n.fa-code-fork:before {\n  content: \"\"; }\n\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\"; }\n\n.fa-question:before {\n  content: \"\"; }\n\n.fa-info:before {\n  content: \"\"; }\n\n.fa-exclamation:before {\n  content: \"\"; }\n\n.fa-superscript:before {\n  content: \"\"; }\n\n.fa-subscript:before {\n  content: \"\"; }\n\n.fa-eraser:before {\n  content: \"\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\"; }\n\n.fa-microphone:before {\n  content: \"\"; }\n\n.fa-microphone-slash:before {\n  content: \"\"; }\n\n.fa-shield:before {\n  content: \"\"; }\n\n.fa-calendar-o:before {\n  content: \"\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\"; }\n\n.fa-rocket:before {\n  content: \"\"; }\n\n.fa-maxcdn:before {\n  content: \"\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\"; }\n\n.fa-html5:before {\n  content: \"\"; }\n\n.fa-css3:before {\n  content: \"\"; }\n\n.fa-anchor:before {\n  content: \"\"; }\n\n.fa-unlock-alt:before {\n  content: \"\"; }\n\n.fa-bullseye:before {\n  content: \"\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\"; }\n\n.fa-rss-square:before {\n  content: \"\"; }\n\n.fa-play-circle:before {\n  content: \"\"; }\n\n.fa-ticket:before {\n  content: \"\"; }\n\n.fa-minus-square:before {\n  content: \"\"; }\n\n.fa-minus-square-o:before {\n  content: \"\"; }\n\n.fa-level-up:before {\n  content: \"\"; }\n\n.fa-level-down:before {\n  content: \"\"; }\n\n.fa-check-square:before {\n  content: \"\"; }\n\n.fa-pencil-square:before {\n  content: \"\"; }\n\n.fa-external-link-square:before {\n  content: \"\"; }\n\n.fa-share-square:before {\n  content: \"\"; }\n\n.fa-compass:before {\n  content: \"\"; }\n\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\"; }\n\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\"; }\n\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\"; }\n\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\"; }\n\n.fa-gbp:before {\n  content: \"\"; }\n\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\"; }\n\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\"; }\n\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\"; }\n\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\"; }\n\n.fa-won:before,\n.fa-krw:before {\n  content: \"\"; }\n\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\"; }\n\n.fa-file:before {\n  content: \"\"; }\n\n.fa-file-text:before {\n  content: \"\"; }\n\n.fa-sort-alpha-asc:before {\n  content: \"\"; }\n\n.fa-sort-alpha-desc:before {\n  content: \"\"; }\n\n.fa-sort-amount-asc:before {\n  content: \"\"; }\n\n.fa-sort-amount-desc:before {\n  content: \"\"; }\n\n.fa-sort-numeric-asc:before {\n  content: \"\"; }\n\n.fa-sort-numeric-desc:before {\n  content: \"\"; }\n\n.fa-thumbs-up:before {\n  content: \"\"; }\n\n.fa-thumbs-down:before {\n  content: \"\"; }\n\n.fa-youtube-square:before {\n  content: \"\"; }\n\n.fa-youtube:before {\n  content: \"\"; }\n\n.fa-xing:before {\n  content: \"\"; }\n\n.fa-xing-square:before {\n  content: \"\"; }\n\n.fa-youtube-play:before {\n  content: \"\"; }\n\n.fa-dropbox:before {\n  content: \"\"; }\n\n.fa-stack-overflow:before {\n  content: \"\"; }\n\n.fa-instagram:before {\n  content: \"\"; }\n\n.fa-flickr:before {\n  content: \"\"; }\n\n.fa-adn:before {\n  content: \"\"; }\n\n.fa-bitbucket:before {\n  content: \"\"; }\n\n.fa-bitbucket-square:before {\n  content: \"\"; }\n\n.fa-tumblr:before {\n  content: \"\"; }\n\n.fa-tumblr-square:before {\n  content: \"\"; }\n\n.fa-long-arrow-down:before {\n  content: \"\"; }\n\n.fa-long-arrow-up:before {\n  content: \"\"; }\n\n.fa-long-arrow-left:before {\n  content: \"\"; }\n\n.fa-long-arrow-right:before {\n  content: \"\"; }\n\n.fa-apple:before {\n  content: \"\"; }\n\n.fa-windows:before {\n  content: \"\"; }\n\n.fa-android:before {\n  content: \"\"; }\n\n.fa-linux:before {\n  content: \"\"; }\n\n.fa-dribbble:before {\n  content: \"\"; }\n\n.fa-skype:before {\n  content: \"\"; }\n\n.fa-foursquare:before {\n  content: \"\"; }\n\n.fa-trello:before {\n  content: \"\"; }\n\n.fa-female:before {\n  content: \"\"; }\n\n.fa-male:before {\n  content: \"\"; }\n\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\"; }\n\n.fa-sun-o:before {\n  content: \"\"; }\n\n.fa-moon-o:before {\n  content: \"\"; }\n\n.fa-archive:before {\n  content: \"\"; }\n\n.fa-bug:before {\n  content: \"\"; }\n\n.fa-vk:before {\n  content: \"\"; }\n\n.fa-weibo:before {\n  content: \"\"; }\n\n.fa-renren:before {\n  content: \"\"; }\n\n.fa-pagelines:before {\n  content: \"\"; }\n\n.fa-stack-exchange:before {\n  content: \"\"; }\n\n.fa-arrow-circle-o-right:before {\n  content: \"\"; }\n\n.fa-arrow-circle-o-left:before {\n  content: \"\"; }\n\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\"; }\n\n.fa-dot-circle-o:before {\n  content: \"\"; }\n\n.fa-wheelchair:before {\n  content: \"\"; }\n\n.fa-vimeo-square:before {\n  content: \"\"; }\n\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\"; }\n\n.fa-plus-square-o:before {\n  content: \"\"; }\n\n.fa-space-shuttle:before {\n  content: \"\"; }\n\n.fa-slack:before {\n  content: \"\"; }\n\n.fa-envelope-square:before {\n  content: \"\"; }\n\n.fa-wordpress:before {\n  content: \"\"; }\n\n.fa-openid:before {\n  content: \"\"; }\n\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\"; }\n\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\"; }\n\n.fa-yahoo:before {\n  content: \"\"; }\n\n.fa-google:before {\n  content: \"\"; }\n\n.fa-reddit:before {\n  content: \"\"; }\n\n.fa-reddit-square:before {\n  content: \"\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\"; }\n\n.fa-stumbleupon:before {\n  content: \"\"; }\n\n.fa-delicious:before {\n  content: \"\"; }\n\n.fa-digg:before {\n  content: \"\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\"; }\n\n.fa-drupal:before {\n  content: \"\"; }\n\n.fa-joomla:before {\n  content: \"\"; }\n\n.fa-language:before {\n  content: \"\"; }\n\n.fa-fax:before {\n  content: \"\"; }\n\n.fa-building:before {\n  content: \"\"; }\n\n.fa-child:before {\n  content: \"\"; }\n\n.fa-paw:before {\n  content: \"\"; }\n\n.fa-spoon:before {\n  content: \"\"; }\n\n.fa-cube:before {\n  content: \"\"; }\n\n.fa-cubes:before {\n  content: \"\"; }\n\n.fa-behance:before {\n  content: \"\"; }\n\n.fa-behance-square:before {\n  content: \"\"; }\n\n.fa-steam:before {\n  content: \"\"; }\n\n.fa-steam-square:before {\n  content: \"\"; }\n\n.fa-recycle:before {\n  content: \"\"; }\n\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\"; }\n\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\"; }\n\n.fa-tree:before {\n  content: \"\"; }\n\n.fa-spotify:before {\n  content: \"\"; }\n\n.fa-deviantart:before {\n  content: \"\"; }\n\n.fa-soundcloud:before {\n  content: \"\"; }\n\n.fa-database:before {\n  content: \"\"; }\n\n.fa-file-pdf-o:before {\n  content: \"\"; }\n\n.fa-file-word-o:before {\n  content: \"\"; }\n\n.fa-file-excel-o:before {\n  content: \"\"; }\n\n.fa-file-powerpoint-o:before {\n  content: \"\"; }\n\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\"; }\n\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\"; }\n\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\"; }\n\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\"; }\n\n.fa-file-code-o:before {\n  content: \"\"; }\n\n.fa-vine:before {\n  content: \"\"; }\n\n.fa-codepen:before {\n  content: \"\"; }\n\n.fa-jsfiddle:before {\n  content: \"\"; }\n\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\"; }\n\n.fa-circle-o-notch:before {\n  content: \"\"; }\n\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\"; }\n\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\"; }\n\n.fa-git-square:before {\n  content: \"\"; }\n\n.fa-git:before {\n  content: \"\"; }\n\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\"; }\n\n.fa-qq:before {\n  content: \"\"; }\n\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\"; }\n\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\"; }\n\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\"; }\n\n.fa-history:before {\n  content: \"\"; }\n\n.fa-circle-thin:before {\n  content: \"\"; }\n\n.fa-header:before {\n  content: \"\"; }\n\n.fa-paragraph:before {\n  content: \"\"; }\n\n.fa-sliders:before {\n  content: \"\"; }\n\n.fa-share-alt:before {\n  content: \"\"; }\n\n.fa-share-alt-square:before {\n  content: \"\"; }\n\n.fa-bomb:before {\n  content: \"\"; }\n\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\"; }\n\n.fa-tty:before {\n  content: \"\"; }\n\n.fa-binoculars:before {\n  content: \"\"; }\n\n.fa-plug:before {\n  content: \"\"; }\n\n.fa-slideshare:before {\n  content: \"\"; }\n\n.fa-twitch:before {\n  content: \"\"; }\n\n.fa-yelp:before {\n  content: \"\"; }\n\n.fa-newspaper-o:before {\n  content: \"\"; }\n\n.fa-wifi:before {\n  content: \"\"; }\n\n.fa-calculator:before {\n  content: \"\"; }\n\n.fa-paypal:before {\n  content: \"\"; }\n\n.fa-google-wallet:before {\n  content: \"\"; }\n\n.fa-cc-visa:before {\n  content: \"\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\"; }\n\n.fa-cc-discover:before {\n  content: \"\"; }\n\n.fa-cc-amex:before {\n  content: \"\"; }\n\n.fa-cc-paypal:before {\n  content: \"\"; }\n\n.fa-cc-stripe:before {\n  content: \"\"; }\n\n.fa-bell-slash:before {\n  content: \"\"; }\n\n.fa-bell-slash-o:before {\n  content: \"\"; }\n\n.fa-trash:before {\n  content: \"\"; }\n\n.fa-copyright:before {\n  content: \"\"; }\n\n.fa-at:before {\n  content: \"\"; }\n\n.fa-eyedropper:before {\n  content: \"\"; }\n\n.fa-paint-brush:before {\n  content: \"\"; }\n\n.fa-birthday-cake:before {\n  content: \"\"; }\n\n.fa-area-chart:before {\n  content: \"\"; }\n\n.fa-pie-chart:before {\n  content: \"\"; }\n\n.fa-line-chart:before {\n  content: \"\"; }\n\n.fa-lastfm:before {\n  content: \"\"; }\n\n.fa-lastfm-square:before {\n  content: \"\"; }\n\n.fa-toggle-off:before {\n  content: \"\"; }\n\n.fa-toggle-on:before {\n  content: \"\"; }\n\n.fa-bicycle:before {\n  content: \"\"; }\n\n.fa-bus:before {\n  content: \"\"; }\n\n.fa-ioxhost:before {\n  content: \"\"; }\n\n.fa-angellist:before {\n  content: \"\"; }\n\n.fa-cc:before {\n  content: \"\"; }\n\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\"; }\n\n.fa-meanpath:before {\n  content: \"\"; }\n\n.fa-buysellads:before {\n  content: \"\"; }\n\n.fa-connectdevelop:before {\n  content: \"\"; }\n\n.fa-dashcube:before {\n  content: \"\"; }\n\n.fa-forumbee:before {\n  content: \"\"; }\n\n.fa-leanpub:before {\n  content: \"\"; }\n\n.fa-sellsy:before {\n  content: \"\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\"; }\n\n.fa-simplybuilt:before {\n  content: \"\"; }\n\n.fa-skyatlas:before {\n  content: \"\"; }\n\n.fa-cart-plus:before {\n  content: \"\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\"; }\n\n.fa-diamond:before {\n  content: \"\"; }\n\n.fa-ship:before {\n  content: \"\"; }\n\n.fa-user-secret:before {\n  content: \"\"; }\n\n.fa-motorcycle:before {\n  content: \"\"; }\n\n.fa-street-view:before {\n  content: \"\"; }\n\n.fa-heartbeat:before {\n  content: \"\"; }\n\n.fa-venus:before {\n  content: \"\"; }\n\n.fa-mars:before {\n  content: \"\"; }\n\n.fa-mercury:before {\n  content: \"\"; }\n\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\"; }\n\n.fa-transgender-alt:before {\n  content: \"\"; }\n\n.fa-venus-double:before {\n  content: \"\"; }\n\n.fa-mars-double:before {\n  content: \"\"; }\n\n.fa-venus-mars:before {\n  content: \"\"; }\n\n.fa-mars-stroke:before {\n  content: \"\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\"; }\n\n.fa-neuter:before {\n  content: \"\"; }\n\n.fa-genderless:before {\n  content: \"\"; }\n\n.fa-facebook-official:before {\n  content: \"\"; }\n\n.fa-pinterest-p:before {\n  content: \"\"; }\n\n.fa-whatsapp:before {\n  content: \"\"; }\n\n.fa-server:before {\n  content: \"\"; }\n\n.fa-user-plus:before {\n  content: \"\"; }\n\n.fa-user-times:before {\n  content: \"\"; }\n\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\"; }\n\n.fa-viacoin:before {\n  content: \"\"; }\n\n.fa-train:before {\n  content: \"\"; }\n\n.fa-subway:before {\n  content: \"\"; }\n\n.fa-medium:before {\n  content: \"\"; }\n\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\"; }\n\n.fa-optin-monster:before {\n  content: \"\"; }\n\n.fa-opencart:before {\n  content: \"\"; }\n\n.fa-expeditedssl:before {\n  content: \"\"; }\n\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\"; }\n\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\"; }\n\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\"; }\n\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\"; }\n\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\"; }\n\n.fa-i-cursor:before {\n  content: \"\"; }\n\n.fa-object-group:before {\n  content: \"\"; }\n\n.fa-object-ungroup:before {\n  content: \"\"; }\n\n.fa-sticky-note:before {\n  content: \"\"; }\n\n.fa-sticky-note-o:before {\n  content: \"\"; }\n\n.fa-cc-jcb:before {\n  content: \"\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\"; }\n\n.fa-clone:before {\n  content: \"\"; }\n\n.fa-balance-scale:before {\n  content: \"\"; }\n\n.fa-hourglass-o:before {\n  content: \"\"; }\n\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\"; }\n\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\"; }\n\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\"; }\n\n.fa-hourglass:before {\n  content: \"\"; }\n\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\"; }\n\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\"; }\n\n.fa-hand-scissors-o:before {\n  content: \"\"; }\n\n.fa-hand-lizard-o:before {\n  content: \"\"; }\n\n.fa-hand-spock-o:before {\n  content: \"\"; }\n\n.fa-hand-pointer-o:before {\n  content: \"\"; }\n\n.fa-hand-peace-o:before {\n  content: \"\"; }\n\n.fa-trademark:before {\n  content: \"\"; }\n\n.fa-registered:before {\n  content: \"\"; }\n\n.fa-creative-commons:before {\n  content: \"\"; }\n\n.fa-gg:before {\n  content: \"\"; }\n\n.fa-gg-circle:before {\n  content: \"\"; }\n\n.fa-tripadvisor:before {\n  content: \"\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\"; }\n\n.fa-get-pocket:before {\n  content: \"\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\"; }\n\n.fa-safari:before {\n  content: \"\"; }\n\n.fa-chrome:before {\n  content: \"\"; }\n\n.fa-firefox:before {\n  content: \"\"; }\n\n.fa-opera:before {\n  content: \"\"; }\n\n.fa-internet-explorer:before {\n  content: \"\"; }\n\n.fa-tv:before,\n.fa-television:before {\n  content: \"\"; }\n\n.fa-contao:before {\n  content: \"\"; }\n\n.fa-500px:before {\n  content: \"\"; }\n\n.fa-amazon:before {\n  content: \"\"; }\n\n.fa-calendar-plus-o:before {\n  content: \"\"; }\n\n.fa-calendar-minus-o:before {\n  content: \"\"; }\n\n.fa-calendar-times-o:before {\n  content: \"\"; }\n\n.fa-calendar-check-o:before {\n  content: \"\"; }\n\n.fa-industry:before {\n  content: \"\"; }\n\n.fa-map-pin:before {\n  content: \"\"; }\n\n.fa-map-signs:before {\n  content: \"\"; }\n\n.fa-map-o:before {\n  content: \"\"; }\n\n.fa-map:before {\n  content: \"\"; }\n\n.fa-commenting:before {\n  content: \"\"; }\n\n.fa-commenting-o:before {\n  content: \"\"; }\n\n.fa-houzz:before {\n  content: \"\"; }\n\n.fa-vimeo:before {\n  content: \"\"; }\n\n.fa-black-tie:before {\n  content: \"\"; }\n\n.fa-fonticons:before {\n  content: \"\"; }\n\n.fa-reddit-alien:before {\n  content: \"\"; }\n\n.fa-edge:before {\n  content: \"\"; }\n\n.fa-credit-card-alt:before {\n  content: \"\"; }\n\n.fa-codiepie:before {\n  content: \"\"; }\n\n.fa-modx:before {\n  content: \"\"; }\n\n.fa-fort-awesome:before {\n  content: \"\"; }\n\n.fa-usb:before {\n  content: \"\"; }\n\n.fa-product-hunt:before {\n  content: \"\"; }\n\n.fa-mixcloud:before {\n  content: \"\"; }\n\n.fa-scribd:before {\n  content: \"\"; }\n\n.fa-pause-circle:before {\n  content: \"\"; }\n\n.fa-pause-circle-o:before {\n  content: \"\"; }\n\n.fa-stop-circle:before {\n  content: \"\"; }\n\n.fa-stop-circle-o:before {\n  content: \"\"; }\n\n.fa-shopping-bag:before {\n  content: \"\"; }\n\n.fa-shopping-basket:before {\n  content: \"\"; }\n\n.fa-hashtag:before {\n  content: \"\"; }\n\n.fa-bluetooth:before {\n  content: \"\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\"; }\n\n.fa-percent:before {\n  content: \"\"; }\n\n.fa-gitlab:before {\n  content: \"\"; }\n\n.fa-wpbeginner:before {\n  content: \"\"; }\n\n.fa-wpforms:before {\n  content: \"\"; }\n\n.fa-envira:before {\n  content: \"\"; }\n\n.fa-universal-access:before {\n  content: \"\"; }\n\n.fa-wheelchair-alt:before {\n  content: \"\"; }\n\n.fa-question-circle-o:before {\n  content: \"\"; }\n\n.fa-blind:before {\n  content: \"\"; }\n\n.fa-audio-description:before {\n  content: \"\"; }\n\n.fa-volume-control-phone:before {\n  content: \"\"; }\n\n.fa-braille:before {\n  content: \"\"; }\n\n.fa-assistive-listening-systems:before {\n  content: \"\"; }\n\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\"; }\n\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\"; }\n\n.fa-glide:before {\n  content: \"\"; }\n\n.fa-glide-g:before {\n  content: \"\"; }\n\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\"; }\n\n.fa-low-vision:before {\n  content: \"\"; }\n\n.fa-viadeo:before {\n  content: \"\"; }\n\n.fa-viadeo-square:before {\n  content: \"\"; }\n\n.fa-snapchat:before {\n  content: \"\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\"; }\n\n.fa-snapchat-square:before {\n  content: \"\"; }\n\n.fa-pied-piper:before {\n  content: \"\"; }\n\n.fa-first-order:before {\n  content: \"\"; }\n\n.fa-yoast:before {\n  content: \"\"; }\n\n.fa-themeisle:before {\n  content: \"\"; }\n\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\"; }\n\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\"; }\n\n.fa-handshake-o:before {\n  content: \"\"; }\n\n.fa-envelope-open:before {\n  content: \"\"; }\n\n.fa-envelope-open-o:before {\n  content: \"\"; }\n\n.fa-linode:before {\n  content: \"\"; }\n\n.fa-address-book:before {\n  content: \"\"; }\n\n.fa-address-book-o:before {\n  content: \"\"; }\n\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\"; }\n\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\"; }\n\n.fa-user-circle:before {\n  content: \"\"; }\n\n.fa-user-circle-o:before {\n  content: \"\"; }\n\n.fa-user-o:before {\n  content: \"\"; }\n\n.fa-id-badge:before {\n  content: \"\"; }\n\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\"; }\n\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\"; }\n\n.fa-quora:before {\n  content: \"\"; }\n\n.fa-free-code-camp:before {\n  content: \"\"; }\n\n.fa-telegram:before {\n  content: \"\"; }\n\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\"; }\n\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\"; }\n\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\"; }\n\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\"; }\n\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\"; }\n\n.fa-shower:before {\n  content: \"\"; }\n\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\"; }\n\n.fa-podcast:before {\n  content: \"\"; }\n\n.fa-window-maximize:before {\n  content: \"\"; }\n\n.fa-window-minimize:before {\n  content: \"\"; }\n\n.fa-window-restore:before {\n  content: \"\"; }\n\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\"; }\n\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\"; }\n\n.fa-bandcamp:before {\n  content: \"\"; }\n\n.fa-grav:before {\n  content: \"\"; }\n\n.fa-etsy:before {\n  content: \"\"; }\n\n.fa-imdb:before {\n  content: \"\"; }\n\n.fa-ravelry:before {\n  content: \"\"; }\n\n.fa-eercast:before {\n  content: \"\"; }\n\n.fa-microchip:before {\n  content: \"\"; }\n\n.fa-snowflake-o:before {\n  content: \"\"; }\n\n.fa-superpowers:before {\n  content: \"\"; }\n\n.fa-wpexplorer:before {\n  content: \"\"; }\n\n.fa-meetup:before {\n  content: \"\"; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\ni.fa {\n  color: var(--icon-color, inherit); }\n", ""]);


/***/ }),

/***/ "./src/scss/image.scss":
/*!*****************************!*\
  !*** ./src/scss/image.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "img {\n  background-image: linear-gradient(90deg, #ffffff00, #ddd, #ffffff00);\n  background-color: #ccc;\n  background-repeat: no-repeat;\n  animation: loading 5s infinite;\n  display: block; }\n\n@keyframes loading {\n  0% {\n    background-size: 0 100%; }\n  50% {\n    background-size: 100% 100%; }\n  100% {\n    background-size: 0 100%; } }\n", ""]);


/***/ }),

/***/ "./src/scss/link.scss":
/*!****************************!*\
  !*** ./src/scss/link.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.text-overflow {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.overflow {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: auto; }\n\na {\n  color: var(--color, #000000aa);\n  text-decoration: none; }\n  a:visited {\n    color: #000000aa; }\n  a:hover {\n    color: var(--color-hover, #000); }\n  a:active, a:focus {\n    color: var(--color-hover, #111);\n    border-bottom: 1px dotted var(--color-hover, #111); }\n", ""]);


/***/ }),

/***/ "./src/scss/paper.scss":
/*!*****************************!*\
  !*** ./src/scss/paper.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.text-overflow {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.overflow {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: auto; }\n\ndiv {\n  background-color: #fff;\n  color: #000000aa;\n  margin: 10px;\n  border: 1px solid #ccc;\n  box-shadow: 0 0 5px #00000033; }\n", ""]);


/***/ }),

/***/ "./src/scss/preformat.scss":
/*!*********************************!*\
  !*** ./src/scss/preformat.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "pre {\n  border: 1px solid #d3d3d3;\n  background-color: #f1f1f1;\n  padding: 5px;\n  margin: 5px; }\n", ""]);


/***/ }),

/***/ "./src/scss/slideshow.scss":
/*!*********************************!*\
  !*** ./src/scss/slideshow.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.text-center {\n  text-align: center; }\n\n.text-overflow {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.overflow {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: auto; }\n\n.slideshow {\n  position: relative;\n  overflow: hidden;\n  height: 100vh;\n  content-display: contents; }\n  .slideshow .image {\n    background-color: #696969;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .slideshow .image * {\n      max-height: 100%; }\n  .slideshow .control {\n    position: absolute;\n    height: 100%;\n    width: 20%;\n    transition: opacity 0.5s;\n    cursor: pointer; }\n    .slideshow .control.right {\n      right: 0;\n      background: linear-gradient(90deg, #00000000, #000000aa);\n      opacity: 0; }\n      .slideshow .control.right:hover {\n        opacity: 1; }\n    .slideshow .control.left {\n      left: 0;\n      background: linear-gradient(90deg, #000000aa, #00000000);\n      opacity: 0; }\n      .slideshow .control.left:hover {\n        opacity: 1; }\n  .slideshow:hover .items {\n    opacity: 1; }\n  .slideshow .items {\n    transition: opacity 0.25s;\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    text-align: center;\n    height: 40px;\n    background: linear-gradient(#00000000, #00000099); }\n    .slideshow .items .item {\n      display: inline-block;\n      margin: 15px 5px;\n      background-color: #aaa;\n      border-radius: 10px;\n      height: 10px;\n      width: 10px;\n      box-shadow: 0 0 15px #00000099;\n      cursor: pointer; }\n      .slideshow .items .item.play {\n        background-color: #fff; }\n      .slideshow .items .item.pause {\n        background-color: #000; }\n", ""]);


/***/ }),

/***/ "./src/scss/tooltip.scss":
/*!*******************************!*\
  !*** ./src/scss/tooltip.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n  background-color: red; }\n\nspan.wrapper {\n  --tooltip-color: #666;\n  position: relative; }\n  span.wrapper > slot[name=\"tooltip\"] {\n    display: none;\n    position: absolute;\n    border-radius: 2px;\n    background-color: var(--tooltip-color);\n    padding: 0;\n    z-index: 1; }\n    span.wrapper > slot[name=\"tooltip\"] span.tooltip {\n      white-space: nowrap;\n      padding: 2px 5px;\n      color: #fff;\n      font-size: 14px; }\n  span.wrapper:before {\n    display: none;\n    position: absolute;\n    height: 0;\n    width: 0;\n    content: ''; }\n  span.wrapper:hover:before, span.wrapper:hover slot[name=\"tooltip\"], span.wrapper:focus:before, span.wrapper:focus slot[name=\"tooltip\"] {\n    display: block;\n    animation: fade 0.15s; }\n  span.wrapper.bottom:before {\n    top: 100%;\n    left: 50%;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid var(--tooltip-color); }\n  span.wrapper.bottom > slot[name=\"tooltip\"] {\n    top: 100%;\n    left: 0;\n    margin-top: 5px; }\n  span.wrapper.top:before {\n    bottom: 100%;\n    left: 50%;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid var(--tooltip-color); }\n  span.wrapper.top > slot[name=\"tooltip\"] {\n    bottom: 100%;\n    left: 0;\n    margin-bottom: 5px; }\n  span.wrapper.left:before {\n    top: 25%;\n    right: 100%;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-left: 5px solid var(--tooltip-color); }\n  span.wrapper.left > slot[name=\"tooltip\"] {\n    top: 0;\n    right: 100%;\n    margin-right: 5px; }\n  span.wrapper.right:before {\n    top: 25%;\n    left: 100%;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-right: 5px solid var(--tooltip-color); }\n  span.wrapper.right > slot[name=\"tooltip\"] {\n    top: 0;\n    left: 100%;\n    margin-left: 5px; }\n\n@keyframes fade {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvZGUtcHJldHRpZnkvbG9hZGVyL3ByZXR0aWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/MDgzNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC50dGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9saWIvY3NzLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvbGliL2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2xpYi91cGRhdGluZy1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9saXQtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvbW9kaWZ5LXRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcGFydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvc2hhZHktcmVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtcmVzdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9iYWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJlZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWRlc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sYXlvdXRzL2ZsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2JhZGdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2FyZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NvZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9mbGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaGlnaGxpZ2h0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaWNvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2ltYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbGluay5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3BhcGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvcHJlZm9ybWF0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc2xpZGVzaG93LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9vbHRpcC5zY3NzIl0sIm5hbWVzIjpbIkJhZGdlIiwiY3VzdG9tRWxlbWVudCIsInN0eWxlcyIsInN0eWxlIiwiaHRtbCIsIkxpdEVsZW1lbnQiLCJCdXR0b24iLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJ2YWx1ZSIsImlubmVySFRNTCIsImxpbmsiLCJhY3Rpb25UZXh0IiwiQ2FyZCIsImhlYWRlciIsIkNvZGUiLCJwcmV0dHkiLCJQUiIsInByZXR0eVByaW50T25lIiwibGFuZ3VhZ2UiLCJsaW5lTnVtYmVycyIsInVuc2FmZUhUTUwiLCJIaWdobGlnaHQiLCJJY29uIiwiZm9udEZhY2VTaGVldCIsImNzcyIsInN0eWxlU2hlZXQiLCJkb2N1bWVudCIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsInNwaW4iLCJUUkFOU19QTkciLCJJbWFnZSIsInByb3BlcnR5IiwiaW1hZ2UiLCJzb3VyY2UiLCJhbHQiLCJsYXN0U2VwZXJhdG9yIiwibGFzdEluZGV4T2YiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwiYWx0VGFnIiwiTGluayIsIlBhcGVyIiwiUHJlZm9ybWF0IiwiREVGQVVMVF9ERUxBWSIsIlNsaWRlc2hvdyIsImNoaWxkcmVuIiwiTnVtYmVyIiwiZGVsYXkiLCJjbG9uZU5vZGUiLCJhdXRvUGxheSIsImkiLCJpbmRleCIsIml0ZW0iLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiY29tcG9zZWQiLCJwYXVzZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsIm5leHQiLCJjbGVhckludGVydmFsIiwiaGlkZUNvbnRyb2xzIiwiQXJyYXkiLCJrZXlzIiwibWFwIiwidG9nZ2xlUGF1c2UiLCJwcmV2IiwiVG9vbHRpcCIsImRpcmVjdGlvbiIsInRvb2x0aXAiLCJGbGV4Qm94IiwiY29udGVudCIsInNoYWRvd1Jvb3QiLCJjb2x1bW4iLCJ3cmFwIiwiZnJvbSIsIkZsZXhJdGVtIiwiZ3JvdyIsInNocmluayIsIm9yZGVyIiwiRmxleENlbnRlciIsIl9zdHlsZXMiLCJ1bnNhZmVDU1MiLCJkZXNjcmlwdG9yIiwiZWxlbWVudHMiLCJraW5kIiwicGxhY2VtZW50Iiwia2V5IiwiaW5pdGlhbGl6ZXIiLCJDU1NSZXN1bHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYyxjQUFjLHNCQUFzQixtQkFBbUIsa0JBQWtCLHdIQUF3SCxjQUFjLGlEQUFpRCx5QkFBeUIsbURBQW1ELGNBQWMsc0RBQXNELEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxJQUFJLFNBQVMsSUFBSSxzQkFBc0I7QUFDbmYsR0FBRyx5QkFBeUIsZUFBZSwyQkFBMkIsSUFBSSxLQUFLLFdBQVcs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QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7Ozs7Ozs7O0FDcE1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxLQUFLO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEMsd0JBQXdCLElBQUk7QUFDNUIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDOzs7Ozs7Ozs7Ozs7QUNobkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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dUIsRUFBRSwyQ0FBMkMsb0JBQW9CLHlCQUF5Qix5QkFBeUIsNkNBQTZDLGlCQUFpQixpQkFBaUIsRUFBRSwwREFBMEQsNEJBQTRCLHlCQUF5QixvQkFBb0Isd0JBQXdCLEVBQUUseUJBQXlCLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGVBQWUsa0JBQWtCLEVBQUUsZ0pBQWdKLHFCQUFxQiw0QkFBNEIsRUFBRSxnQ0FBZ0MsZ0JBQWdCLGdCQUFnQix5Q0FBeUMsMENBQTBDLG9EQUFvRCxFQUFFLGtEQUFrRCxnQkFBZ0IsY0FBYyxzQkFBc0IsRUFBRSw2QkFBNkIsbUJBQW1CLGdCQUFnQix5Q0FBeUMsMENBQTBDLGlEQUFpRCxFQUFFLCtDQUErQyxtQkFBbUIsY0FBYyx5QkFBeUIsRUFBRSw4QkFBOEIsZUFBZSxrQkFBa0Isd0NBQXdDLDJDQUEyQyxrREFBa0QsRUFBRSxnREFBZ0QsYUFBYSxrQkFBa0Isd0JBQXdCLEVBQUUsK0JBQStCLGVBQWUsaUJBQWlCLHdDQUF3QywyQ0FBMkMsbURBQW1ELEVBQUUsaURBQWlELGFBQWEsaUJBQWlCLHVCQUF1QixFQUFFLHFCQUFxQixVQUFVLGlCQUFpQixFQUFFLFFBQVEsaUJBQWlCLEVBQUUsRUFBRSIsImZpbGUiOiJiYXNlX2VsZW1lbnRzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIWZ1bmN0aW9uKCl7LypcblxuIENvcHlyaWdodCAoQykgMjAwNiBHb29nbGUgSW5jLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xud2luZG93LlBSX1NIT1VMRF9VU0VfQ09OVElOVUFUSU9OPSEwO1xuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gVChhKXtmdW5jdGlvbiBkKGUpe3ZhciBiPWUuY2hhckNvZGVBdCgwKTtpZig5MiE9PWIpcmV0dXJuIGI7dmFyIGE9ZS5jaGFyQXQoMSk7cmV0dXJuKGI9d1thXSk/YjpcIjBcIjw9YSYmXCI3XCI+PWE/cGFyc2VJbnQoZS5zdWJzdHJpbmcoMSksOCk6XCJ1XCI9PT1hfHxcInhcIj09PWE/cGFyc2VJbnQoZS5zdWJzdHJpbmcoMiksMTYpOmUuY2hhckNvZGVBdCgxKX1mdW5jdGlvbiBmKGUpe2lmKDMyPmUpcmV0dXJuKDE2PmU/XCJcXFxceDBcIjpcIlxcXFx4XCIpK2UudG9TdHJpbmcoMTYpO2U9U3RyaW5nLmZyb21DaGFyQ29kZShlKTtyZXR1cm5cIlxcXFxcIj09PWV8fFwiLVwiPT09ZXx8XCJdXCI9PT1lfHxcIl5cIj09PWU/XCJcXFxcXCIrZTplfWZ1bmN0aW9uIGIoZSl7dmFyIGI9ZS5zdWJzdHJpbmcoMSxlLmxlbmd0aC0xKS5tYXRjaCgvXFxcXHVbMC05QS1GYS1mXXs0fXxcXFxceFswLTlBLUZhLWZdezJ9fFxcXFxbMC0zXVswLTddezAsMn18XFxcXFswLTddezEsMn18XFxcXFtcXHNcXFNdfC18W14tXFxcXF0vZyk7ZT1cbltdO3ZhciBhPVwiXlwiPT09YlswXSxjPVtcIltcIl07YSYmYy5wdXNoKFwiXlwiKTtmb3IodmFyIGE9YT8xOjAsZz1iLmxlbmd0aDthPGc7KythKXt2YXIgaD1iW2FdO2lmKC9cXFxcW2Jkc3ddL2kudGVzdChoKSljLnB1c2goaCk7ZWxzZXt2YXIgaD1kKGgpLGs7YSsyPGcmJlwiLVwiPT09YlthKzFdPyhrPWQoYlthKzJdKSxhKz0yKTprPWg7ZS5wdXNoKFtoLGtdKTs2NT5rfHwxMjI8aHx8KDY1Pmt8fDkwPGh8fGUucHVzaChbTWF0aC5tYXgoNjUsaCl8MzIsTWF0aC5taW4oayw5MCl8MzJdKSw5Nz5rfHwxMjI8aHx8ZS5wdXNoKFtNYXRoLm1heCg5NyxoKSYtMzMsTWF0aC5taW4oaywxMjIpJi0zM10pKX19ZS5zb3J0KGZ1bmN0aW9uKGUsYSl7cmV0dXJuIGVbMF0tYVswXXx8YVsxXS1lWzFdfSk7Yj1bXTtnPVtdO2ZvcihhPTA7YTxlLmxlbmd0aDsrK2EpaD1lW2FdLGhbMF08PWdbMV0rMT9nWzFdPU1hdGgubWF4KGdbMV0saFsxXSk6Yi5wdXNoKGc9aCk7Zm9yKGE9MDthPGIubGVuZ3RoOysrYSloPWJbYV0sXG5jLnB1c2goZihoWzBdKSksaFsxXT5oWzBdJiYoaFsxXSsxPmhbMF0mJmMucHVzaChcIi1cIiksYy5wdXNoKGYoaFsxXSkpKTtjLnB1c2goXCJdXCIpO3JldHVybiBjLmpvaW4oXCJcIil9ZnVuY3Rpb24gdihlKXtmb3IodmFyIGE9ZS5zb3VyY2UubWF0Y2goLyg/OlxcWyg/OlteXFx4NUNcXHg1RF18XFxcXFtcXHNcXFNdKSpcXF18XFxcXHVbQS1GYS1mMC05XXs0fXxcXFxceFtBLUZhLWYwLTldezJ9fFxcXFxbMC05XSt8XFxcXFtedXgwLTldfFxcKFxcP1s6IT1dfFtcXChcXClcXF5dfFteXFx4NUJcXHg1Q1xcKFxcKVxcXl0rKS9nKSxjPWEubGVuZ3RoLGQ9W10sZz0wLGg9MDtnPGM7KytnKXt2YXIgaz1hW2ddO1wiKFwiPT09az8rK2g6XCJcXFxcXCI9PT1rLmNoYXJBdCgwKSYmKGs9K2suc3Vic3RyaW5nKDEpKSYmKGs8PWg/ZFtrXT0tMTphW2ddPWYoaykpfWZvcihnPTE7ZzxkLmxlbmd0aDsrK2cpLTE9PT1kW2ddJiYoZFtnXT0rK0EpO2ZvcihoPWc9MDtnPGM7KytnKWs9YVtnXSxcIihcIj09PWs/KCsraCxkW2hdfHwoYVtnXT1cIig/OlwiKSk6XCJcXFxcXCI9PT1cbmsuY2hhckF0KDApJiYoaz0ray5zdWJzdHJpbmcoMSkpJiZrPD1oJiYoYVtnXT1cIlxcXFxcIitkW2tdKTtmb3IoZz0wO2c8YzsrK2cpXCJeXCI9PT1hW2ddJiZcIl5cIiE9PWFbZysxXSYmKGFbZ109XCJcIik7aWYoZS5pZ25vcmVDYXNlJiZuKWZvcihnPTA7ZzxjOysrZylrPWFbZ10sZT1rLmNoYXJBdCgwKSwyPD1rLmxlbmd0aCYmXCJbXCI9PT1lP2FbZ109YihrKTpcIlxcXFxcIiE9PWUmJihhW2ddPWsucmVwbGFjZSgvW2EtekEtWl0vZyxmdW5jdGlvbihhKXthPWEuY2hhckNvZGVBdCgwKTtyZXR1cm5cIltcIitTdHJpbmcuZnJvbUNoYXJDb2RlKGEmLTMzLGF8MzIpK1wiXVwifSkpO3JldHVybiBhLmpvaW4oXCJcIil9Zm9yKHZhciBBPTAsbj0hMSxsPSExLG09MCxjPWEubGVuZ3RoO208YzsrK20pe3ZhciBwPWFbbV07aWYocC5pZ25vcmVDYXNlKWw9ITA7ZWxzZSBpZigvW2Etel0vaS50ZXN0KHAuc291cmNlLnJlcGxhY2UoL1xcXFx1WzAtOWEtZl17NH18XFxcXHhbMC05YS1mXXsyfXxcXFxcW151eF0vZ2ksXCJcIikpKXtuPSEwO1xubD0hMTticmVha319Zm9yKHZhciB3PXtiOjgsdDo5LG46MTAsdjoxMSxmOjEyLHI6MTN9LHI9W10sbT0wLGM9YS5sZW5ndGg7bTxjOysrbSl7cD1hW21dO2lmKHAuZ2xvYmFsfHxwLm11bHRpbGluZSl0aHJvdyBFcnJvcihcIlwiK3ApO3IucHVzaChcIig/OlwiK3YocCkrXCIpXCIpfXJldHVybiBuZXcgUmVnRXhwKHIuam9pbihcInxcIiksbD9cImdpXCI6XCJnXCIpfWZ1bmN0aW9uIFUoYSxkKXtmdW5jdGlvbiBmKGEpe3ZhciBjPWEubm9kZVR5cGU7aWYoMT09Yyl7aWYoIWIudGVzdChhLmNsYXNzTmFtZSkpe2ZvcihjPWEuZmlyc3RDaGlsZDtjO2M9Yy5uZXh0U2libGluZylmKGMpO2M9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwiYnJcIj09PWN8fFwibGlcIj09PWMpdltsXT1cIlxcblwiLG5bbDw8MV09QSsrLG5bbCsrPDwxfDFdPWF9fWVsc2UgaWYoMz09Y3x8ND09YyljPWEubm9kZVZhbHVlLGMubGVuZ3RoJiYoYz1kP2MucmVwbGFjZSgvXFxyXFxuPy9nLFwiXFxuXCIpOmMucmVwbGFjZSgvWyBcXHRcXHJcXG5dKy9nLFxuXCIgXCIpLHZbbF09YyxuW2w8PDFdPUEsQSs9Yy5sZW5ndGgsbltsKys8PDF8MV09YSl9dmFyIGI9Lyg/Ol58XFxzKW5vY29kZSg/Olxcc3wkKS8sdj1bXSxBPTAsbj1bXSxsPTA7ZihhKTtyZXR1cm57YTp2LmpvaW4oXCJcIikucmVwbGFjZSgvXFxuJC8sXCJcIiksYzpufX1mdW5jdGlvbiBKKGEsZCxmLGIsdil7ZiYmKGE9e2g6YSxsOjEsajpudWxsLG06bnVsbCxhOmYsYzpudWxsLGk6ZCxnOm51bGx9LGIoYSksdi5wdXNoLmFwcGx5KHYsYS5nKSl9ZnVuY3Rpb24gVihhKXtmb3IodmFyIGQ9dm9pZCAwLGY9YS5maXJzdENoaWxkO2Y7Zj1mLm5leHRTaWJsaW5nKXZhciBiPWYubm9kZVR5cGUsZD0xPT09Yj9kP2E6ZjozPT09Yj9XLnRlc3QoZi5ub2RlVmFsdWUpP2E6ZDpkO3JldHVybiBkPT09YT92b2lkIDA6ZH1mdW5jdGlvbiBHKGEsZCl7ZnVuY3Rpb24gZihhKXtmb3IodmFyIGw9YS5pLG09YS5oLGM9W2wsXCJwbG5cIl0scD0wLHc9YS5hLm1hdGNoKHYpfHxbXSxyPXt9LGU9MCx0PXcubGVuZ3RoO2U8XG50OysrZSl7dmFyIHo9d1tlXSxxPXJbel0sZz12b2lkIDAsaDtpZihcInN0cmluZ1wiPT09dHlwZW9mIHEpaD0hMTtlbHNle3ZhciBrPWJbei5jaGFyQXQoMCldO2lmKGspZz16Lm1hdGNoKGtbMV0pLHE9a1swXTtlbHNle2ZvcihoPTA7aDxBOysraClpZihrPWRbaF0sZz16Lm1hdGNoKGtbMV0pKXtxPWtbMF07YnJlYWt9Z3x8KHE9XCJwbG5cIil9IShoPTU8PXEubGVuZ3RoJiZcImxhbmctXCI9PT1xLnN1YnN0cmluZygwLDUpKXx8ZyYmXCJzdHJpbmdcIj09PXR5cGVvZiBnWzFdfHwoaD0hMSxxPVwic3JjXCIpO2h8fChyW3pdPXEpfWs9cDtwKz16Lmxlbmd0aDtpZihoKXtoPWdbMV07dmFyIEI9ei5pbmRleE9mKGgpLEQ9QitoLmxlbmd0aDtnWzJdJiYoRD16Lmxlbmd0aC1nWzJdLmxlbmd0aCxCPUQtaC5sZW5ndGgpO3E9cS5zdWJzdHJpbmcoNSk7SihtLGwrayx6LnN1YnN0cmluZygwLEIpLGYsYyk7SihtLGwraytCLGgsSyhxLGgpLGMpO0oobSxsK2srRCx6LnN1YnN0cmluZyhEKSxmLGMpfWVsc2UgYy5wdXNoKGwrXG5rLHEpfWEuZz1jfXZhciBiPXt9LHY7KGZ1bmN0aW9uKCl7Zm9yKHZhciBmPWEuY29uY2F0KGQpLGw9W10sbT17fSxjPTAscD1mLmxlbmd0aDtjPHA7KytjKXt2YXIgdz1mW2NdLHI9d1szXTtpZihyKWZvcih2YXIgZT1yLmxlbmd0aDswPD0tLWU7KWJbci5jaGFyQXQoZSldPXc7dz13WzFdO3I9XCJcIit3O20uaGFzT3duUHJvcGVydHkocil8fChsLnB1c2godyksbVtyXT1udWxsKX1sLnB1c2goL1tcXDAtXFx1ZmZmZl0vKTt2PVQobCl9KSgpO3ZhciBBPWQubGVuZ3RoO3JldHVybiBmfWZ1bmN0aW9uIHkoYSl7dmFyIGQ9W10sZj1bXTthLnRyaXBsZVF1b3RlZFN0cmluZ3M/ZC5wdXNoKFtcInN0clwiLC9eKD86XFwnXFwnXFwnKD86W15cXCdcXFxcXXxcXFxcW1xcc1xcU118XFwnezEsMn0oPz1bXlxcJ10pKSooPzpcXCdcXCdcXCd8JCl8XFxcIlxcXCJcXFwiKD86W15cXFwiXFxcXF18XFxcXFtcXHNcXFNdfFxcXCJ7MSwyfSg/PVteXFxcIl0pKSooPzpcXFwiXFxcIlxcXCJ8JCl8XFwnKD86W15cXFxcXFwnXXxcXFxcW1xcc1xcU10pKig/OlxcJ3wkKXxcXFwiKD86W15cXFxcXFxcIl18XFxcXFtcXHNcXFNdKSooPzpcXFwifCQpKS8sXG5udWxsLFwiJ1xcXCJcIl0pOmEubXVsdGlMaW5lU3RyaW5ncz9kLnB1c2goW1wic3RyXCIsL14oPzpcXCcoPzpbXlxcXFxcXCddfFxcXFxbXFxzXFxTXSkqKD86XFwnfCQpfFxcXCIoPzpbXlxcXFxcXFwiXXxcXFxcW1xcc1xcU10pKig/OlxcXCJ8JCl8XFxgKD86W15cXFxcXFxgXXxcXFxcW1xcc1xcU10pKig/OlxcYHwkKSkvLG51bGwsXCInXFxcImBcIl0pOmQucHVzaChbXCJzdHJcIiwvXig/OlxcJyg/OlteXFxcXFxcJ1xcclxcbl18XFxcXC4pKig/OlxcJ3wkKXxcXFwiKD86W15cXFxcXFxcIlxcclxcbl18XFxcXC4pKig/OlxcXCJ8JCkpLyxudWxsLFwiXFxcIidcIl0pO2EudmVyYmF0aW1TdHJpbmdzJiZmLnB1c2goW1wic3RyXCIsL15AXFxcIig/OlteXFxcIl18XFxcIlxcXCIpKig/OlxcXCJ8JCkvLG51bGxdKTt2YXIgYj1hLmhhc2hDb21tZW50cztiJiYoYS5jU3R5bGVDb21tZW50cz8oMTxiP2QucHVzaChbXCJjb21cIiwvXiMoPzojIyg/OlteI118Iyg/ISMjKSkqKD86IyMjfCQpfC4qKS8sbnVsbCxcIiNcIl0pOmQucHVzaChbXCJjb21cIiwvXiMoPzooPzpkZWZpbmV8ZSg/Omx8bmQpaWZ8ZWxzZXxlcnJvcnxpZm4/ZGVmfGluY2x1ZGV8bGluZXxwcmFnbWF8dW5kZWZ8d2FybmluZylcXGJ8W15cXHJcXG5dKikvLFxubnVsbCxcIiNcIl0pLGYucHVzaChbXCJzdHJcIiwvXjwoPzooPzooPzpcXC5cXC5cXC8pKnxcXC8/KSg/OltcXHctXSsoPzpcXC9bXFx3LV0rKSspP1tcXHctXStcXC5oKD86aHxwcHxcXCtcXCspP3xbYS16XVxcdyopPi8sbnVsbF0pKTpkLnB1c2goW1wiY29tXCIsL14jW15cXHJcXG5dKi8sbnVsbCxcIiNcIl0pKTthLmNTdHlsZUNvbW1lbnRzJiYoZi5wdXNoKFtcImNvbVwiLC9eXFwvXFwvW15cXHJcXG5dKi8sbnVsbF0pLGYucHVzaChbXCJjb21cIiwvXlxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLG51bGxdKSk7aWYoYj1hLnJlZ2V4TGl0ZXJhbHMpe3ZhciB2PShiPTE8Yj9cIlwiOlwiXFxuXFxyXCIpP1wiLlwiOlwiW1xcXFxTXFxcXHNdXCI7Zi5wdXNoKFtcImxhbmctcmVnZXhcIixSZWdFeHAoXCJeKD86Xl5cXFxcLj98WystXXxbIT1dPT89P3xcXFxcI3wlPT98JiY/PT98XFxcXCh8XFxcXCo9P3xbK1xcXFwtXT18LT58XFxcXC89P3w6Oj98PDw/PT98Pj4/Pj89P3wsfDt8XFxcXD98QHxcXFxcW3x+fHt8XFxcXF5cXFxcXj89P3xcXFxcfFxcXFx8Pz0/fGJyZWFrfGNhc2V8Y29udGludWV8ZGVsZXRlfGRvfGVsc2V8ZmluYWxseXxpbnN0YW5jZW9mfHJldHVybnx0aHJvd3x0cnl8dHlwZW9mKVxcXFxzKihcIitcbihcIi8oPz1bXi8qXCIrYitcIl0pKD86W14vXFxcXHg1QlxcXFx4NUNcIitiK1wiXXxcXFxceDVDXCIrditcInxcXFxceDVCKD86W15cXFxceDVDXFxcXHg1RFwiK2IrXCJdfFxcXFx4NUNcIit2K1wiKSooPzpcXFxceDVEfCQpKSsvXCIpK1wiKVwiKV0pfShiPWEudHlwZXMpJiZmLnB1c2goW1widHlwXCIsYl0pO2I9KFwiXCIrYS5rZXl3b3JkcykucmVwbGFjZSgvXiB8ICQvZyxcIlwiKTtiLmxlbmd0aCYmZi5wdXNoKFtcImt3ZFwiLG5ldyBSZWdFeHAoXCJeKD86XCIrYi5yZXBsYWNlKC9bXFxzLF0rL2csXCJ8XCIpK1wiKVxcXFxiXCIpLG51bGxdKTtkLnB1c2goW1wicGxuXCIsL15cXHMrLyxudWxsLFwiIFxcclxcblxcdFxcdTAwYTBcIl0pO2I9XCJeLlteXFxcXHNcXFxcdy4kQCdcXFwiYC9cXFxcXFxcXF0qXCI7YS5yZWdleExpdGVyYWxzJiYoYis9XCIoPyFzKi8pXCIpO2YucHVzaChbXCJsaXRcIiwvXkBbYS16XyRdW2Etel8kQDAtOV0qL2ksbnVsbF0sW1widHlwXCIsL14oPzpbQF9dP1tBLVpdK1thLXpdW0EtWmEtel8kQDAtOV0qfFxcdytfdFxcYikvLG51bGxdLFtcInBsblwiLC9eW2Etel8kXVthLXpfJEAwLTldKi9pLFxubnVsbF0sW1wibGl0XCIsL14oPzoweFthLWYwLTldK3woPzpcXGQoPzpfXFxkKykqXFxkKig/OlxcLlxcZCopP3xcXC5cXGRcXCspKD86ZVsrXFwtXT9cXGQrKT8pW2Etel0qL2ksbnVsbCxcIjAxMjM0NTY3ODlcIl0sW1wicGxuXCIsL15cXFxcW1xcc1xcU10/LyxudWxsXSxbXCJwdW5cIixuZXcgUmVnRXhwKGIpLG51bGxdKTtyZXR1cm4gRyhkLGYpfWZ1bmN0aW9uIEwoYSxkLGYpe2Z1bmN0aW9uIGIoYSl7dmFyIGM9YS5ub2RlVHlwZTtpZigxPT1jJiYhQS50ZXN0KGEuY2xhc3NOYW1lKSlpZihcImJyXCI9PT1hLm5vZGVOYW1lKXYoYSksYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSk7ZWxzZSBmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYihhKTtlbHNlIGlmKCgzPT1jfHw0PT1jKSYmZil7dmFyIGQ9YS5ub2RlVmFsdWUscT1kLm1hdGNoKG4pO3EmJihjPWQuc3Vic3RyaW5nKDAscS5pbmRleCksYS5ub2RlVmFsdWU9YywoZD1kLnN1YnN0cmluZyhxLmluZGV4K3FbMF0ubGVuZ3RoKSkmJlxuYS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsLmNyZWF0ZVRleHROb2RlKGQpLGEubmV4dFNpYmxpbmcpLHYoYSksY3x8YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpKX19ZnVuY3Rpb24gdihhKXtmdW5jdGlvbiBiKGEsYyl7dmFyIGQ9Yz9hLmNsb25lTm9kZSghMSk6YSxrPWEucGFyZW50Tm9kZTtpZihrKXt2YXIgaz1iKGssMSksZT1hLm5leHRTaWJsaW5nO2suYXBwZW5kQ2hpbGQoZCk7Zm9yKHZhciBmPWU7ZjtmPWUpZT1mLm5leHRTaWJsaW5nLGsuYXBwZW5kQ2hpbGQoZil9cmV0dXJuIGR9Zm9yKDshYS5uZXh0U2libGluZzspaWYoYT1hLnBhcmVudE5vZGUsIWEpcmV0dXJuO2E9YihhLm5leHRTaWJsaW5nLDApO2Zvcih2YXIgZDsoZD1hLnBhcmVudE5vZGUpJiYxPT09ZC5ub2RlVHlwZTspYT1kO2MucHVzaChhKX1mb3IodmFyIEE9Lyg/Ol58XFxzKW5vY29kZSg/Olxcc3wkKS8sbj0vXFxyXFxuP3xcXG4vLGw9YS5vd25lckRvY3VtZW50LG09bC5jcmVhdGVFbGVtZW50KFwibGlcIik7YS5maXJzdENoaWxkOyltLmFwcGVuZENoaWxkKGEuZmlyc3RDaGlsZCk7XG5mb3IodmFyIGM9W21dLHA9MDtwPGMubGVuZ3RoOysrcCliKGNbcF0pO2Q9PT0oZHwwKSYmY1swXS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLGQpO3ZhciB3PWwuY3JlYXRlRWxlbWVudChcIm9sXCIpO3cuY2xhc3NOYW1lPVwibGluZW51bXNcIjtkPU1hdGgubWF4KDAsZC0xfDApfHwwO2Zvcih2YXIgcD0wLHI9Yy5sZW5ndGg7cDxyOysrcCltPWNbcF0sbS5jbGFzc05hbWU9XCJMXCIrKHArZCklMTAsbS5maXJzdENoaWxkfHxtLmFwcGVuZENoaWxkKGwuY3JlYXRlVGV4dE5vZGUoXCJcXHUwMGEwXCIpKSx3LmFwcGVuZENoaWxkKG0pO2EuYXBwZW5kQ2hpbGQodyl9ZnVuY3Rpb24gdChhLGQpe2Zvcih2YXIgZj1kLmxlbmd0aDswPD0tLWY7KXt2YXIgYj1kW2ZdO0kuaGFzT3duUHJvcGVydHkoYik/RS5jb25zb2xlJiZjb25zb2xlLndhcm4oXCJjYW5ub3Qgb3ZlcnJpZGUgbGFuZ3VhZ2UgaGFuZGxlciAlc1wiLGIpOklbYl09YX19ZnVuY3Rpb24gSyhhLGQpe2EmJkkuaGFzT3duUHJvcGVydHkoYSl8fChhPS9eXFxzKjwvLnRlc3QoZCk/XG5cImRlZmF1bHQtbWFya3VwXCI6XCJkZWZhdWx0LWNvZGVcIik7cmV0dXJuIElbYV19ZnVuY3Rpb24gTShhKXt2YXIgZD1hLmo7dHJ5e3ZhciBmPVUoYS5oLGEubCksYj1mLmE7YS5hPWI7YS5jPWYuYzthLmk9MDtLKGQsYikoYSk7dmFyIHY9L1xcYk1TSUVcXHMoXFxkKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCksdj12JiY4Pj0rdlsxXSxkPS9cXG4vZyxBPWEuYSxuPUEubGVuZ3RoLGY9MCxsPWEuYyxtPWwubGVuZ3RoLGI9MCxjPWEuZyxwPWMubGVuZ3RoLHc9MDtjW3BdPW47dmFyIHIsZTtmb3IoZT1yPTA7ZTxwOyljW2VdIT09Y1tlKzJdPyhjW3IrK109Y1tlKytdLGNbcisrXT1jW2UrK10pOmUrPTI7cD1yO2ZvcihlPXI9MDtlPHA7KXtmb3IodmFyIHQ9Y1tlXSx6PWNbZSsxXSxxPWUrMjtxKzI8PXAmJmNbcSsxXT09PXo7KXErPTI7Y1tyKytdPXQ7Y1tyKytdPXo7ZT1xfWMubGVuZ3RoPXI7dmFyIGc9YS5oO2E9XCJcIjtnJiYoYT1nLnN0eWxlLmRpc3BsYXksZy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKTtcbnRyeXtmb3IoO2I8bTspe3ZhciBoPWxbYisyXXx8bixrPWNbdysyXXx8bixxPU1hdGgubWluKGgsayksQj1sW2IrMV0sRDtpZigxIT09Qi5ub2RlVHlwZSYmKEQ9QS5zdWJzdHJpbmcoZixxKSkpe3YmJihEPUQucmVwbGFjZShkLFwiXFxyXCIpKTtCLm5vZGVWYWx1ZT1EO3ZhciBOPUIub3duZXJEb2N1bWVudCx1PU4uY3JlYXRlRWxlbWVudChcInNwYW5cIik7dS5jbGFzc05hbWU9Y1t3KzFdO3ZhciB5PUIucGFyZW50Tm9kZTt5LnJlcGxhY2VDaGlsZCh1LEIpO3UuYXBwZW5kQ2hpbGQoQik7ZjxoJiYobFtiKzFdPUI9Ti5jcmVhdGVUZXh0Tm9kZShBLnN1YnN0cmluZyhxLGgpKSx5Lmluc2VydEJlZm9yZShCLHUubmV4dFNpYmxpbmcpKX1mPXE7Zj49aCYmKGIrPTIpO2Y+PWsmJih3Kz0yKX19ZmluYWxseXtnJiYoZy5zdHlsZS5kaXNwbGF5PWEpfX1jYXRjaCh4KXtFLmNvbnNvbGUmJmNvbnNvbGUubG9nKHgmJnguc3RhY2t8fHgpfX12YXIgRT13aW5kb3csQz1bXCJicmVhayxjb250aW51ZSxkbyxlbHNlLGZvcixpZixyZXR1cm4sd2hpbGVcIl0sXG5GPVtbQyxcImF1dG8sY2FzZSxjaGFyLGNvbnN0LGRlZmF1bHQsZG91YmxlLGVudW0sZXh0ZXJuLGZsb2F0LGdvdG8saW5saW5lLGludCxsb25nLHJlZ2lzdGVyLHJlc3RyaWN0LHNob3J0LHNpZ25lZCxzaXplb2Ysc3RhdGljLHN0cnVjdCxzd2l0Y2gsdHlwZWRlZix1bmlvbix1bnNpZ25lZCx2b2lkLHZvbGF0aWxlXCJdLFwiY2F0Y2gsY2xhc3MsZGVsZXRlLGZhbHNlLGltcG9ydCxuZXcsb3BlcmF0b3IscHJpdmF0ZSxwcm90ZWN0ZWQscHVibGljLHRoaXMsdGhyb3csdHJ1ZSx0cnksdHlwZW9mXCJdLEg9W0YsXCJhbGlnbmFzLGFsaWdub2YsYWxpZ25fdW5pb24sYXNtLGF4aW9tLGJvb2wsY29uY2VwdCxjb25jZXB0X21hcCxjb25zdF9jYXN0LGNvbnN0ZXhwcixkZWNsdHlwZSxkZWxlZ2F0ZSxkeW5hbWljX2Nhc3QsZXhwbGljaXQsZXhwb3J0LGZyaWVuZCxnZW5lcmljLGxhdGVfY2hlY2ssbXV0YWJsZSxuYW1lc3BhY2Usbm9leGNlcHQsbm9yZXR1cm4sbnVsbHB0cixwcm9wZXJ0eSxyZWludGVycHJldF9jYXN0LHN0YXRpY19hc3NlcnQsc3RhdGljX2Nhc3QsdGVtcGxhdGUsdHlwZWlkLHR5cGVuYW1lLHVzaW5nLHZpcnR1YWwsd2hlcmVcIl0sXG5PPVtGLFwiYWJzdHJhY3QsYXNzZXJ0LGJvb2xlYW4sYnl0ZSxleHRlbmRzLGZpbmFsbHksZmluYWwsaW1wbGVtZW50cyxpbXBvcnQsaW5zdGFuY2VvZixpbnRlcmZhY2UsbnVsbCxuYXRpdmUscGFja2FnZSxzdHJpY3RmcCxzdXBlcixzeW5jaHJvbml6ZWQsdGhyb3dzLHRyYW5zaWVudFwiXSxQPVtGLFwiYWJzdHJhY3QsYWRkLGFsaWFzLGFzLGFzY2VuZGluZyxhc3luYyxhd2FpdCxiYXNlLGJvb2wsYnksYnl0ZSxjaGVja2VkLGRlY2ltYWwsZGVsZWdhdGUsZGVzY2VuZGluZyxkeW5hbWljLGV2ZW50LGZpbmFsbHksZml4ZWQsZm9yZWFjaCxmcm9tLGdldCxnbG9iYWwsZ3JvdXAsaW1wbGljaXQsaW4saW50ZXJmYWNlLGludGVybmFsLGludG8saXMsam9pbixsZXQsbG9jayxudWxsLG9iamVjdCxvdXQsb3ZlcnJpZGUsb3JkZXJieSxwYXJhbXMscGFydGlhbCxyZWFkb25seSxyZWYscmVtb3ZlLHNieXRlLHNlYWxlZCxzZWxlY3Qsc2V0LHN0YWNrYWxsb2Msc3RyaW5nLHNlbGVjdCx1aW50LHVsb25nLHVuY2hlY2tlZCx1bnNhZmUsdXNob3J0LHZhbHVlLHZhcix2aXJ0dWFsLHdoZXJlLHlpZWxkXCJdLFxuRj1bRixcImFic3RyYWN0LGFzeW5jLGF3YWl0LGNvbnN0cnVjdG9yLGRlYnVnZ2VyLGVudW0sZXZhbCxleHBvcnQsZnVuY3Rpb24sZ2V0LGltcGxlbWVudHMsaW5zdGFuY2VvZixpbnRlcmZhY2UsbGV0LG51bGwsc2V0LHVuZGVmaW5lZCx2YXIsd2l0aCx5aWVsZCxJbmZpbml0eSxOYU5cIl0sUT1bQyxcImFuZCxhcyxhc3NlcnQsY2xhc3MsZGVmLGRlbCxlbGlmLGV4Y2VwdCxleGVjLGZpbmFsbHksZnJvbSxnbG9iYWwsaW1wb3J0LGluLGlzLGxhbWJkYSxub25sb2NhbCxub3Qsb3IscGFzcyxwcmludCxyYWlzZSx0cnksd2l0aCx5aWVsZCxGYWxzZSxUcnVlLE5vbmVcIl0sUj1bQyxcImFsaWFzLGFuZCxiZWdpbixjYXNlLGNsYXNzLGRlZixkZWZpbmVkLGVsc2lmLGVuZCxlbnN1cmUsZmFsc2UsaW4sbW9kdWxlLG5leHQsbmlsLG5vdCxvcixyZWRvLHJlc2N1ZSxyZXRyeSxzZWxmLHN1cGVyLHRoZW4sdHJ1ZSx1bmRlZix1bmxlc3MsdW50aWwsd2hlbix5aWVsZCxCRUdJTixFTkRcIl0sQz1bQyxcImNhc2UsZG9uZSxlbGlmLGVzYWMsZXZhbCxmaSxmdW5jdGlvbixpbixsb2NhbCxzZXQsdGhlbix1bnRpbFwiXSxcblM9L14oRElSfEZJTEV8YXJyYXl8dmVjdG9yfChkZXxwcmlvcml0eV8pP3F1ZXVlfChmb3J3YXJkXyk/bGlzdHxzdGFja3woY29uc3RfKT8ocmV2ZXJzZV8pP2l0ZXJhdG9yfCh1bm9yZGVyZWRfKT8obXVsdGkpPyhzZXR8bWFwKXxiaXRzZXR8dT8oaW50fGZsb2F0KVxcZCopXFxiLyxXPS9cXFMvLFg9eSh7a2V5d29yZHM6W0gsUCxPLEYsXCJjYWxsZXIsZGVsZXRlLGRpZSxkbyxkdW1wLGVsc2lmLGV2YWwsZXhpdCxmb3JlYWNoLGZvcixnb3RvLGlmLGltcG9ydCxsYXN0LGxvY2FsLG15LG5leHQsbm8sb3VyLHByaW50LHBhY2thZ2UscmVkbyxyZXF1aXJlLHN1Yix1bmRlZix1bmxlc3MsdW50aWwsdXNlLHdhbnRhcnJheSx3aGlsZSxCRUdJTixFTkRcIixRLFIsQ10saGFzaENvbW1lbnRzOiEwLGNTdHlsZUNvbW1lbnRzOiEwLG11bHRpTGluZVN0cmluZ3M6ITAscmVnZXhMaXRlcmFsczohMH0pLEk9e307dChYLFtcImRlZmF1bHQtY29kZVwiXSk7dChHKFtdLFtbXCJwbG5cIiwvXltePD9dKy9dLFtcImRlY1wiLFxuL148IVxcd1tePl0qKD86PnwkKS9dLFtcImNvbVwiLC9ePFxcIS0tW1xcc1xcU10qPyg/Oi1cXC0+fCQpL10sW1wibGFuZy1cIiwvXjxcXD8oW1xcc1xcU10rPykoPzpcXD8+fCQpL10sW1wibGFuZy1cIiwvXjwlKFtcXHNcXFNdKz8pKD86JT58JCkvXSxbXCJwdW5cIiwvXig/OjxbJT9dfFslP10+KS9dLFtcImxhbmctXCIsL148eG1wXFxiW14+XSo+KFtcXHNcXFNdKz8pPFxcL3htcFxcYltePl0qPi9pXSxbXCJsYW5nLWpzXCIsL148c2NyaXB0XFxiW14+XSo+KFtcXHNcXFNdKj8pKDxcXC9zY3JpcHRcXGJbXj5dKj4pL2ldLFtcImxhbmctY3NzXCIsL148c3R5bGVcXGJbXj5dKj4oW1xcc1xcU10qPykoPFxcL3N0eWxlXFxiW14+XSo+KS9pXSxbXCJsYW5nLWluLnRhZ1wiLC9eKDxcXC8/W2Etel1bXjw+XSo+KS9pXV0pLFwiZGVmYXVsdC1tYXJrdXAgaHRtIGh0bWwgbXhtbCB4aHRtbCB4bWwgeHNsXCIuc3BsaXQoXCIgXCIpKTt0KEcoW1tcInBsblwiLC9eW1xcc10rLyxudWxsLFwiIFxcdFxcclxcblwiXSxbXCJhdHZcIiwvXig/OlxcXCJbXlxcXCJdKlxcXCI/fFxcJ1teXFwnXSpcXCc/KS8sbnVsbCxcblwiXFxcIidcIl1dLFtbXCJ0YWdcIiwvXl48XFwvP1thLXpdKD86W1xcdy46LV0qXFx3KT98XFwvPz4kL2ldLFtcImF0blwiLC9eKD8hc3R5bGVbXFxzPV18b24pW2Etel0oPzpbXFx3Oi1dKlxcdyk/L2ldLFtcImxhbmctdXEudmFsXCIsL149XFxzKihbXj5cXCdcXFwiXFxzXSooPzpbXj5cXCdcXFwiXFxzXFwvXXxcXC8oPz1cXHMpKSkvXSxbXCJwdW5cIiwvXls9PD5cXC9dKy9dLFtcImxhbmctanNcIiwvXm9uXFx3K1xccyo9XFxzKlxcXCIoW15cXFwiXSspXFxcIi9pXSxbXCJsYW5nLWpzXCIsL15vblxcdytcXHMqPVxccypcXCcoW15cXCddKylcXCcvaV0sW1wibGFuZy1qc1wiLC9eb25cXHcrXFxzKj1cXHMqKFteXFxcIlxcJz5cXHNdKykvaV0sW1wibGFuZy1jc3NcIiwvXnN0eWxlXFxzKj1cXHMqXFxcIihbXlxcXCJdKylcXFwiL2ldLFtcImxhbmctY3NzXCIsL15zdHlsZVxccyo9XFxzKlxcJyhbXlxcJ10rKVxcJy9pXSxbXCJsYW5nLWNzc1wiLC9ec3R5bGVcXHMqPVxccyooW15cXFwiXFwnPlxcc10rKS9pXV0pLFtcImluLnRhZ1wiXSk7dChHKFtdLFtbXCJhdHZcIiwvXltcXHNcXFNdKy9dXSksW1widXEudmFsXCJdKTt0KHkoe2tleXdvcmRzOkgsXG5oYXNoQ29tbWVudHM6ITAsY1N0eWxlQ29tbWVudHM6ITAsdHlwZXM6U30pLFwiYyBjYyBjcHAgY3h4IGN5YyBtXCIuc3BsaXQoXCIgXCIpKTt0KHkoe2tleXdvcmRzOlwibnVsbCx0cnVlLGZhbHNlXCJ9KSxbXCJqc29uXCJdKTt0KHkoe2tleXdvcmRzOlAsaGFzaENvbW1lbnRzOiEwLGNTdHlsZUNvbW1lbnRzOiEwLHZlcmJhdGltU3RyaW5nczohMCx0eXBlczpTfSksW1wiY3NcIl0pO3QoeSh7a2V5d29yZHM6TyxjU3R5bGVDb21tZW50czohMH0pLFtcImphdmFcIl0pO3QoeSh7a2V5d29yZHM6QyxoYXNoQ29tbWVudHM6ITAsbXVsdGlMaW5lU3RyaW5nczohMH0pLFtcImJhc2hcIixcImJzaFwiLFwiY3NoXCIsXCJzaFwiXSk7dCh5KHtrZXl3b3JkczpRLGhhc2hDb21tZW50czohMCxtdWx0aUxpbmVTdHJpbmdzOiEwLHRyaXBsZVF1b3RlZFN0cmluZ3M6ITB9KSxbXCJjdlwiLFwicHlcIixcInB5dGhvblwiXSk7dCh5KHtrZXl3b3JkczpcImNhbGxlcixkZWxldGUsZGllLGRvLGR1bXAsZWxzaWYsZXZhbCxleGl0LGZvcmVhY2gsZm9yLGdvdG8saWYsaW1wb3J0LGxhc3QsbG9jYWwsbXksbmV4dCxubyxvdXIscHJpbnQscGFja2FnZSxyZWRvLHJlcXVpcmUsc3ViLHVuZGVmLHVubGVzcyx1bnRpbCx1c2Usd2FudGFycmF5LHdoaWxlLEJFR0lOLEVORFwiLFxuaGFzaENvbW1lbnRzOiEwLG11bHRpTGluZVN0cmluZ3M6ITAscmVnZXhMaXRlcmFsczoyfSksW1wicGVybFwiLFwicGxcIixcInBtXCJdKTt0KHkoe2tleXdvcmRzOlIsaGFzaENvbW1lbnRzOiEwLG11bHRpTGluZVN0cmluZ3M6ITAscmVnZXhMaXRlcmFsczohMH0pLFtcInJiXCIsXCJydWJ5XCJdKTt0KHkoe2tleXdvcmRzOkYsY1N0eWxlQ29tbWVudHM6ITAscmVnZXhMaXRlcmFsczohMH0pLFtcImphdmFzY3JpcHRcIixcImpzXCIsXCJ0c1wiLFwidHlwZXNjcmlwdFwiXSk7dCh5KHtrZXl3b3JkczpcImFsbCxhbmQsYnksY2F0Y2gsY2xhc3MsZWxzZSxleHRlbmRzLGZhbHNlLGZpbmFsbHksZm9yLGlmLGluLGlzLGlzbnQsbG9vcCxuZXcsbm8sbm90LG51bGwsb2Ysb2ZmLG9uLG9yLHJldHVybixzdXBlcix0aGVuLHRocm93LHRydWUsdHJ5LHVubGVzcyx1bnRpbCx3aGVuLHdoaWxlLHllc1wiLGhhc2hDb21tZW50czozLGNTdHlsZUNvbW1lbnRzOiEwLG11bHRpbGluZVN0cmluZ3M6ITAsdHJpcGxlUXVvdGVkU3RyaW5nczohMCxcbnJlZ2V4TGl0ZXJhbHM6ITB9KSxbXCJjb2ZmZWVcIl0pO3QoRyhbXSxbW1wic3RyXCIsL15bXFxzXFxTXSsvXV0pLFtcInJlZ2V4XCJdKTt2YXIgWT1FLlBSPXtjcmVhdGVTaW1wbGVMZXhlcjpHLHJlZ2lzdGVyTGFuZ0hhbmRsZXI6dCxzb3VyY2VEZWNvcmF0b3I6eSxQUl9BVFRSSUJfTkFNRTpcImF0blwiLFBSX0FUVFJJQl9WQUxVRTpcImF0dlwiLFBSX0NPTU1FTlQ6XCJjb21cIixQUl9ERUNMQVJBVElPTjpcImRlY1wiLFBSX0tFWVdPUkQ6XCJrd2RcIixQUl9MSVRFUkFMOlwibGl0XCIsUFJfTk9DT0RFOlwibm9jb2RlXCIsUFJfUExBSU46XCJwbG5cIixQUl9QVU5DVFVBVElPTjpcInB1blwiLFBSX1NPVVJDRTpcInNyY1wiLFBSX1NUUklORzpcInN0clwiLFBSX1RBRzpcInRhZ1wiLFBSX1RZUEU6XCJ0eXBcIixwcmV0dHlQcmludE9uZTpFLnByZXR0eVByaW50T25lPWZ1bmN0aW9uKGEsZCxmKXtmPWZ8fCExO2Q9ZHx8bnVsbDt2YXIgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2IuaW5uZXJIVE1MPVwiPHByZT5cIithK1wiPC9wcmU+XCI7XG5iPWIuZmlyc3RDaGlsZDtmJiZMKGIsZiwhMCk7TSh7ajpkLG06ZixoOmIsbDoxLGE6bnVsbCxpOm51bGwsYzpudWxsLGc6bnVsbH0pO3JldHVybiBiLmlubmVySFRNTH0scHJldHR5UHJpbnQ6RS5wcmV0dHlQcmludD1mdW5jdGlvbihhLGQpe2Z1bmN0aW9uIGYoKXtmb3IodmFyIGI9RS5QUl9TSE9VTERfVVNFX0NPTlRJTlVBVElPTj9jLm5vdygpKzI1MDpJbmZpbml0eTtwPHQubGVuZ3RoJiZjLm5vdygpPGI7cCsrKXtmb3IodmFyIGQ9dFtwXSxsPWcsbT1kO209bS5wcmV2aW91c1NpYmxpbmc7KXt2YXIgbj1tLm5vZGVUeXBlLHU9KDc9PT1ufHw4PT09bikmJm0ubm9kZVZhbHVlO2lmKHU/IS9eXFw/P3ByZXR0aWZ5XFxiLy50ZXN0KHUpOjMhPT1ufHwvXFxTLy50ZXN0KG0ubm9kZVZhbHVlKSlicmVhaztpZih1KXtsPXt9O3UucmVwbGFjZSgvXFxiKFxcdyspPShbXFx3Oi4lKy1dKykvZyxmdW5jdGlvbihhLGIsYyl7bFtiXT1jfSk7YnJlYWt9fW09ZC5jbGFzc05hbWU7aWYoKGwhPT1nfHxyLnRlc3QobSkpJiZcbiFlLnRlc3QobSkpe249ITE7Zm9yKHU9ZC5wYXJlbnROb2RlO3U7dT11LnBhcmVudE5vZGUpaWYocS50ZXN0KHUudGFnTmFtZSkmJnUuY2xhc3NOYW1lJiZyLnRlc3QodS5jbGFzc05hbWUpKXtuPSEwO2JyZWFrfWlmKCFuKXtkLmNsYXNzTmFtZSs9XCIgcHJldHR5cHJpbnRlZFwiO249bC5sYW5nO2lmKCFuKXt2YXIgbj1tLm1hdGNoKHcpLEM7IW4mJihDPVYoZCkpJiZ6LnRlc3QoQy50YWdOYW1lKSYmKG49Qy5jbGFzc05hbWUubWF0Y2godykpO24mJihuPW5bMV0pfWlmKHkudGVzdChkLnRhZ05hbWUpKXU9MTtlbHNlIHZhciB1PWQuY3VycmVudFN0eWxlLHg9di5kZWZhdWx0Vmlldyx1PSh1PXU/dS53aGl0ZVNwYWNlOngmJnguZ2V0Q29tcHV0ZWRTdHlsZT94LmdldENvbXB1dGVkU3R5bGUoZCxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwid2hpdGUtc3BhY2VcIik6MCkmJlwicHJlXCI9PT11LnN1YnN0cmluZygwLDMpO3g9bC5saW5lbnVtczsoeD1cInRydWVcIj09PXh8fCt4KXx8KHg9KHg9bS5tYXRjaCgvXFxibGluZW51bXNcXGIoPzo6KFxcZCspKT8vKSk/XG54WzFdJiZ4WzFdLmxlbmd0aD8reFsxXTohMDohMSk7eCYmTChkLHgsdSk7TSh7ajpuLGg6ZCxtOngsbDp1LGE6bnVsbCxpOm51bGwsYzpudWxsLGc6bnVsbH0pfX19cDx0Lmxlbmd0aD9FLnNldFRpbWVvdXQoZiwyNTApOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiZhKCl9Zm9yKHZhciBiPWR8fGRvY3VtZW50LmJvZHksdj1iLm93bmVyRG9jdW1lbnR8fGRvY3VtZW50LGI9W2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwcmVcIiksYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNvZGVcIiksYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInhtcFwiKV0sdD1bXSxuPTA7bjxiLmxlbmd0aDsrK24pZm9yKHZhciBsPTAsbT1iW25dLmxlbmd0aDtsPG07KytsKXQucHVzaChiW25dW2xdKTt2YXIgYj1udWxsLGM9RGF0ZTtjLm5vd3x8KGM9e25vdzpmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX19KTt2YXIgcD0wLHc9L1xcYmxhbmcoPzp1YWdlKT8tKFtcXHcuXSspKD8hXFxTKS8scj0vXFxicHJldHR5cHJpbnRcXGIvLFxuZT0vXFxicHJldHR5cHJpbnRlZFxcYi8seT0vcHJlfHhtcC9pLHo9L15jb2RlJC9pLHE9L14oPzpwcmV8Y29kZXx4bXApJC9pLGc9e307ZigpfX0sSD1FLmRlZmluZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgSCYmSC5hbWQmJkgoXCJnb29nbGUtY29kZS1wcmV0dGlmeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFl9KX0pKCk7fSgpXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuICB1cmwgPSB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udGF3ZXNvbWUtd2ViZm9udC5lb3RcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250YXdlc29tZS13ZWJmb250LmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udGF3ZXNvbWUtd2ViZm9udC50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250YXdlc29tZS13ZWJmb250LndvZmYyXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmXCI7IiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE5IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzID0gKCdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSkgJiZcbiAgICAoJ3JlcGxhY2UnIGluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlKTtcbmNvbnN0IGNvbnN0cnVjdGlvblRva2VuID0gU3ltYm9sKCk7XG5leHBvcnQgY2xhc3MgQ1NTUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihjc3NUZXh0LCBzYWZlVG9rZW4pIHtcbiAgICAgICAgaWYgKHNhZmVUb2tlbiAhPT0gY29uc3RydWN0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cbiAgICAvLyBOb3RlLCB0aGlzIGlzIGEgZ2V0dGVyIHNvIHRoYXQgaXQncyBsYXp5LiBJbiBwcmFjdGljZSwgdGhpcyBtZWFuc1xuICAgIC8vIHN0eWxlc2hlZXRzIGFyZSBub3QgY3JlYXRlZCB1bnRpbCB0aGUgZmlyc3QgZWxlbWVudCBpbnN0YW5jZSBpcyBtYWRlLlxuICAgIGdldCBzdHlsZVNoZWV0KCkge1xuICAgICAgICBpZiAodGhpcy5fc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBOb3RlLCBpZiBgYWRvcHRlZFN0eWxlU2hlZXRzYCBpcyBzdXBwb3J0ZWQgdGhlbiB3ZSBhc3N1bWUgQ1NTU3R5bGVTaGVldFxuICAgICAgICAgICAgLy8gaXMgY29uc3RydWN0YWJsZS5cbiAgICAgICAgICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHlsZVNoZWV0LnJlcGxhY2VTeW5jKHRoaXMuY3NzVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHlsZVNoZWV0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNzc1RleHQ7XG4gICAgfVxufVxuLyoqXG4gKiBXcmFwIGEgdmFsdWUgZm9yIGludGVycG9sYXRpb24gaW4gYSBjc3MgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwuXG4gKlxuICogVGhpcyBpcyB1bnNhZmUgYmVjYXVzZSB1bnRydXN0ZWQgQ1NTIHRleHQgY2FuIGJlIHVzZWQgdG8gcGhvbmUgaG9tZVxuICogb3IgZXhmaWx0cmF0ZSBkYXRhIHRvIGFuIGF0dGFja2VyIGNvbnRyb2xsZWQgc2l0ZS4gVGFrZSBjYXJlIHRvIG9ubHkgdXNlXG4gKiB0aGlzIHdpdGggdHJ1c3RlZCBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNTUyA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgQ1NTUmVzdWx0KFN0cmluZyh2YWx1ZSksIGNvbnN0cnVjdGlvblRva2VuKTtcbn07XG5jb25zdCB0ZXh0RnJvbUNTU1Jlc3VsdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENTU1Jlc3VsdCkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3NzVGV4dDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiAke3ZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXRcbiAgICAgICAgICAgIHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gKTtcbiAgICB9XG59O1xuLyoqXG4gKiBUZW1wbGF0ZSB0YWcgd2hpY2ggd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCBMaXRFbGVtZW50J3MgYHN0eWxlYCBwcm9wZXJ0eSB0b1xuICogc2V0IGVsZW1lbnQgc3R5bGVzLiBGb3Igc2VjdXJpdHkgcmVhc29ucywgb25seSBsaXRlcmFsIHN0cmluZyB2YWx1ZXMgbWF5IGJlXG4gKiB1c2VkLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMgYHVuc2FmZUNTU2AgbWF5IGJlIHVzZWQgaW5zaWRlIGFcbiAqIHRlbXBsYXRlIHN0cmluZyBwYXJ0LlxuICovXG5leHBvcnQgY29uc3QgY3NzID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGNzc1RleHQgPSB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT4gYWNjICsgdGV4dEZyb21DU1NSZXN1bHQodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgICByZXR1cm4gbmV3IENTU1Jlc3VsdChjc3NUZXh0LCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXRhZy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5jb25zdCBsZWdhY3lDdXN0b21FbGVtZW50ID0gKHRhZ05hbWUsIGNsYXp6KSA9PiB7XG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGF6eik7XG4gICAgLy8gQ2FzdCBhcyBhbnkgYmVjYXVzZSBUUyBkb2Vzbid0IHJlY29nbml6ZSB0aGUgcmV0dXJuIHR5cGUgYXMgYmVpbmcgYVxuICAgIC8vIHN1YnR5cGUgb2YgdGhlIGRlY29yYXRlZCBjbGFzcyB3aGVuIGNsYXp6IGlzIHR5cGVkIGFzXG4gICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgZm9yIHNvbWUgcmVhc29uLlxuICAgIC8vIGBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD5gIGlzIGhlbHBmdWwgdG8gbWFrZSBzdXJlIHRoZSBkZWNvcmF0b3IgaXNcbiAgICAvLyBhcHBsaWVkIHRvIGVsZW1lbnRzIGhvd2V2ZXIuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHJldHVybiBjbGF6ejtcbn07XG5jb25zdCBzdGFuZGFyZEN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSwgZGVzY3JpcHRvcikgPT4ge1xuICAgIGNvbnN0IHsga2luZCwgZWxlbWVudHMgfSA9IGRlc2NyaXB0b3I7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2luZCxcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIG9uY2UgdGhlIGNsYXNzIGlzIG90aGVyd2lzZSBmdWxseSBkZWZpbmVkXG4gICAgICAgIGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB0YWdOYW1lIHRoZSBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmVcbiAqL1xuZXhwb3J0IGNvbnN0IGN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSkgPT4gKGNsYXNzT3JEZXNjcmlwdG9yKSA9PiAodHlwZW9mIGNsYXNzT3JEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSA/XG4gICAgbGVnYWN5Q3VzdG9tRWxlbWVudCh0YWdOYW1lLCBjbGFzc09yRGVzY3JpcHRvcikgOlxuICAgIHN0YW5kYXJkQ3VzdG9tRWxlbWVudCh0YWdOYW1lLCBjbGFzc09yRGVzY3JpcHRvcik7XG5jb25zdCBzdGFuZGFyZFByb3BlcnR5ID0gKG9wdGlvbnMsIGVsZW1lbnQpID0+IHtcbiAgICAvLyBXaGVuIGRlY29yYXRpbmcgYW4gYWNjZXNzb3IsIHBhc3MgaXQgdGhyb3VnaCBhbmQgYWRkIHByb3BlcnR5IG1ldGFkYXRhLlxuICAgIC8vIE5vdGUsIHRoZSBgaGFzT3duUHJvcGVydHlgIGNoZWNrIGluIGBjcmVhdGVQcm9wZXJ0eWAgZW5zdXJlcyB3ZSBkb24ndFxuICAgIC8vIHN0b21wIG92ZXIgdGhlIHVzZXIncyBhY2Nlc3Nvci5cbiAgICBpZiAoZWxlbWVudC5raW5kID09PSAnbWV0aG9kJyAmJiBlbGVtZW50LmRlc2NyaXB0b3IgJiZcbiAgICAgICAgISgndmFsdWUnIGluIGVsZW1lbnQuZGVzY3JpcHRvcikpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQsIHsgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlUHJvcGVydHkoKSB0YWtlcyBjYXJlIG9mIGRlZmluaW5nIHRoZSBwcm9wZXJ0eSwgYnV0IHdlIHN0aWxsXG4gICAgICAgIC8vIG11c3QgcmV0dXJuIHNvbWUga2luZCBvZiBkZXNjcmlwdG9yLCBzbyByZXR1cm4gYSBkZXNjcmlwdG9yIGZvciBhblxuICAgICAgICAvLyB1bnVzZWQgcHJvdG90eXBlIGZpZWxkLiBUaGUgZmluaXNoZXIgY2FsbHMgY3JlYXRlUHJvcGVydHkoKS5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtpbmQ6ICdmaWVsZCcsXG4gICAgICAgICAgICBrZXk6IFN5bWJvbCgpLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IHt9LFxuICAgICAgICAgICAgLy8gV2hlbiBAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWRlY29yYXRvcnMgaW1wbGVtZW50cyBpbml0aWFsaXplcnMsXG4gICAgICAgICAgICAvLyBkbyB0aGlzIGluc3RlYWQgb2YgdGhlIGluaXRpYWxpemVyIGJlbG93LiBTZWU6XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzkyNjAgZXh0cmFzOiBbXG4gICAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAgIC8vICAgICBraW5kOiAnaW5pdGlhbGl6ZXInLFxuICAgICAgICAgICAgLy8gICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgICAgICAvLyAgICAgaW5pdGlhbGl6ZXI6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIsXG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgICBpbml0aWFsaXplcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQuaW5pdGlhbGl6ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tlbGVtZW50LmtleV0gPSBlbGVtZW50LmluaXRpYWxpemVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICAgICAgY2xhenouY3JlYXRlUHJvcGVydHkoZWxlbWVudC5rZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCBsZWdhY3lQcm9wZXJ0eSA9IChvcHRpb25zLCBwcm90bywgbmFtZSkgPT4ge1xuICAgIHByb3RvLmNvbnN0cnVjdG9yXG4gICAgICAgIC5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbn07XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHdoaWNoIGNyZWF0ZXMgYSBMaXRFbGVtZW50IHByb3BlcnR5IHdoaWNoIHJlZmxlY3RzIGFcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHZhbHVlLiBBIGBQcm9wZXJ0eURlY2xhcmF0aW9uYCBtYXkgb3B0aW9uYWxseSBiZVxuICogc3VwcGxpZWQgdG8gY29uZmlndXJlIHByb3BlcnR5IGZlYXR1cmVzLlxuICpcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHkob3B0aW9ucykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgZGVjb3JhdG9yXG4gICAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgPT4gKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICBsZWdhY3lQcm9wZXJ0eShvcHRpb25zLCBwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgOlxuICAgICAgICBzdGFuZGFyZFByb3BlcnR5KG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yKTtcbn1cbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXIgdGhhdFxuICogZXhlY3V0ZXMgYSBxdWVyeVNlbGVjdG9yIG9uIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdC5cbiAqXG4gKiBARXhwb3J0RGVjb3JhdGVkSXRlbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvciwgXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgbGVnYWN5UXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpIDpcbiAgICAgICAgICAgIHN0YW5kYXJkUXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IpO1xuICAgIH07XG59XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyXG4gKiB0aGF0IGV4ZWN1dGVzIGEgcXVlcnlTZWxlY3RvckFsbCBvbiB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QuXG4gKlxuICogQEV4cG9ydERlY29yYXRlZEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFsbChzZWxlY3Rvcikge1xuICAgIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3IsIFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgZGVjb3JhdG9yXG4gICAgbmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChuYW1lICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgIGxlZ2FjeVF1ZXJ5KGRlc2NyaXB0b3IsIHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKSA6XG4gICAgICAgICAgICBzdGFuZGFyZFF1ZXJ5KGRlc2NyaXB0b3IsIHByb3RvT3JEZXNjcmlwdG9yKTtcbiAgICB9O1xufVxuY29uc3QgbGVnYWN5UXVlcnkgPSAoZGVzY3JpcHRvciwgcHJvdG8sIG5hbWUpID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbmNvbnN0IHN0YW5kYXJkUXVlcnkgPSAoZGVzY3JpcHRvciwgZWxlbWVudCkgPT4gKHtcbiAgICBraW5kOiAnbWV0aG9kJyxcbiAgICBwbGFjZW1lbnQ6ICdwcm90b3R5cGUnLFxuICAgIGtleTogZWxlbWVudC5rZXksXG4gICAgZGVzY3JpcHRvcixcbn0pO1xuY29uc3Qgc3RhbmRhcmRFdmVudE9wdGlvbnMgPSAob3B0aW9ucywgZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50LCB7IGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNsYXp6LnByb3RvdHlwZVtlbGVtZW50LmtleV0sIG9wdGlvbnMpO1xuICAgICAgICB9IH0pO1xufTtcbmNvbnN0IGxlZ2FjeUV2ZW50T3B0aW9ucyA9IFxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBsZWdhY3kgZGVjb3JhdG9yXG4ob3B0aW9ucywgcHJvdG8sIG5hbWUpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKHByb3RvW25hbWVdLCBvcHRpb25zKTtcbn07XG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyB0byBhIG1ldGhvZCB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGluIGFcbiAqIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IHNwZWNpZmlzIGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgYXMgYWNjZXB0ZWQgYnlcbiAqIGBFdmVudFRhcmdldCNhZGRFdmVudExpc3RlbmVyYCBhbmQgYEV2ZW50VGFyZ2V0I3JlbW92ZUV2ZW50TGlzdGVuZXJgLlxuICpcbiAqIEN1cnJlbnQgYnJvd3NlcnMgc3VwcG9ydCB0aGUgYGNhcHR1cmVgLCBgcGFzc2l2ZWAsIGFuZCBgb25jZWAgb3B0aW9ucy4gU2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXIjUGFyYW1ldGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICAgIGNsYXNzIE15RWxlbWVudCB7XG4gKlxuICogICAgICAgY2xpY2tlZCA9IGZhbHNlO1xuICpcbiAqICAgICAgIHJlbmRlcigpIHtcbiAqICAgICAgICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9JHt0aGlzLl9vbkNsaWNrfWA+PGJ1dHRvbj48L2J1dHRvbj48L2Rpdj5gO1xuICogICAgICAgfVxuICpcbiAqICAgICAgIEBldmVudE9wdGlvbnMoe2NhcHR1cmU6IHRydWV9KVxuICogICAgICAgX29uQ2xpY2soZSkge1xuICogICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqL1xuZXhwb3J0IGNvbnN0IGV2ZW50T3B0aW9ucyA9IChvcHRpb25zKSA9PiBcbi8vIFJldHVybiB2YWx1ZSB0eXBlZCBhcyBhbnkgdG8gcHJldmVudCBUeXBlU2NyaXB0IGZyb20gY29tcGxhaW5pbmcgdGhhdFxuLy8gc3RhbmRhcmQgZGVjb3JhdG9yIGZ1bmN0aW9uIHNpZ25hdHVyZSBkb2VzIG5vdCBtYXRjaCBUeXBlU2NyaXB0IGRlY29yYXRvclxuLy8gc2lnbmF0dXJlXG4vLyBUT0RPKGtzY2hhYWYpOiB1bmNsZWFyIHdoeSBpdCB3YXMgb25seSBmYWlsaW5nIG9uIHRoaXMgZGVjb3JhdG9yIGFuZCBub3Rcbi8vIHRoZSBvdGhlcnNcbigocHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpID0+IChuYW1lICE9PSB1bmRlZmluZWQpID9cbiAgICBsZWdhY3lFdmVudE9wdGlvbnMob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpIDpcbiAgICBzdGFuZGFyZEV2ZW50T3B0aW9ucyhvcHRpb25zLCBwcm90b09yRGVzY3JpcHRvcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVjb3JhdG9ycy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG52YXIgX2E7XG4vKipcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPVxuICAgIChwcm9wLCBfb2JqKSA9PiBwcm9wO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb252ZXJ0ZXIgPSB7XG4gICAgdG9BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gJycgOiBudWxsO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBmcm9tQXR0cmlidXRlKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbDtcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufTtcbi8qKlxuICogQ2hhbmdlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgZGlmZmVyZW50IGZyb20gYG9sZFZhbHVlYC5cbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYXMgdGhlIGRlZmF1bHQgZm9yIGEgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBub3RFcXVhbCA9ICh2YWx1ZSwgb2xkKSA9PiB7XG4gICAgLy8gVGhpcyBlbnN1cmVzIChvbGQ9PU5hTiwgdmFsdWU9PU5hTikgYWx3YXlzIHJldHVybnMgZmFsc2VcbiAgICByZXR1cm4gb2xkICE9PSB2YWx1ZSAmJiAob2xkID09PSBvbGQgfHwgdmFsdWUgPT09IHZhbHVlKTtcbn07XG5jb25zdCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbiA9IHtcbiAgICBhdHRyaWJ1dGU6IHRydWUsXG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGNvbnZlcnRlcjogZGVmYXVsdENvbnZlcnRlcixcbiAgICByZWZsZWN0OiBmYWxzZSxcbiAgICBoYXNDaGFuZ2VkOiBub3RFcXVhbFxufTtcbmNvbnN0IG1pY3JvdGFza1Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG5jb25zdCBTVEFURV9IQVNfVVBEQVRFRCA9IDE7XG5jb25zdCBTVEFURV9VUERBVEVfUkVRVUVTVEVEID0gMSA8PCAyO1xuY29uc3QgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEUgPSAxIDw8IDM7XG5jb25zdCBTVEFURV9JU19SRUZMRUNUSU5HX1RPX1BST1BFUlRZID0gMSA8PCA0O1xuY29uc3QgU1RBVEVfSEFTX0NPTk5FQ1RFRCA9IDEgPDwgNTtcbi8qKlxuICogVGhlIENsb3N1cmUgSlMgQ29tcGlsZXIgZG9lc24ndCBjdXJyZW50bHkgaGF2ZSBnb29kIHN1cHBvcnQgZm9yIHN0YXRpY1xuICogcHJvcGVydHkgc2VtYW50aWNzIHdoZXJlIFwidGhpc1wiIGlzIGR5bmFtaWMgKGUuZy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9pc3N1ZXMvMzE3NyBhbmQgb3RoZXJzKSBzbyB3ZSB1c2VcbiAqIHRoaXMgaGFjayB0byBieXBhc3MgYW55IHJld3JpdGluZyBieSB0aGUgY29tcGlsZXIuXG4gKi9cbmNvbnN0IGZpbmFsaXplZCA9ICdmaW5hbGl6ZWQnO1xuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3Mgd2hpY2ggbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMuIFdoZW5cbiAqIHByb3BlcnRpZXMgY2hhbmdlLCB0aGUgYHVwZGF0ZWAgbWV0aG9kIGlzIGFzeW5jaHJvbm91c2x5IGNhbGxlZC4gVGhpcyBtZXRob2RcbiAqIHNob3VsZCBiZSBzdXBwbGllZCBieSBzdWJjbGFzc2VycyB0byByZW5kZXIgdXBkYXRlcyBhcyBkZXNpcmVkLlxuICovXG5leHBvcnQgY2xhc3MgVXBkYXRpbmdFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fdXBkYXRlUHJvbWlzZSA9IG1pY3JvdGFza1Byb21pc2U7XG4gICAgICAgIHRoaXMuX2hhc0Nvbm5lY3RlZFJlc29sdmVyID0gdW5kZWZpbmVkO1xuICAgICAgICAvKipcbiAgICAgICAgICogTWFwIHdpdGgga2V5cyBmb3IgYW55IHByb3BlcnRpZXMgdGhhdCBoYXZlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3RcbiAgICAgICAgICogdXBkYXRlIGN5Y2xlIHdpdGggcHJldmlvdXMgdmFsdWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXAgd2l0aCBrZXlzIG9mIHByb3BlcnRpZXMgdGhhdCBzaG91bGQgYmUgcmVmbGVjdGVkIHdoZW4gdXBkYXRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgYXR0cmlidXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgLy8gbm90ZTogcGlnZ3kgYmFja2luZyBvbiB0aGlzIHRvIGVuc3VyZSB3ZSdyZSBmaW5hbGl6ZWQuXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICB0aGlzLl9jbGFzc1Byb3BlcnRpZXMuZm9yRWFjaCgodiwgcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwLCB2KTtcbiAgICAgICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLnNldChhdHRyLCBwKTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5zdXJlcyB0aGUgcHJpdmF0ZSBgX2NsYXNzUHJvcGVydGllc2AgcHJvcGVydHkgbWV0YWRhdGEgaXMgY3JlYXRlZC5cbiAgICAgKiBJbiBhZGRpdGlvbiB0byBgZmluYWxpemVgIHRoaXMgaXMgYWxzbyBjYWxsZWQgaW4gYGNyZWF0ZVByb3BlcnR5YCB0b1xuICAgICAqIGVuc3VyZSB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIGNhbiBhZGQgcHJvcGVydHkgbWV0YWRhdGEuXG4gICAgICovXG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgc3RhdGljIF9lbnN1cmVDbGFzc1Byb3BlcnRpZXMoKSB7XG4gICAgICAgIC8vIGVuc3VyZSBwcml2YXRlIHN0b3JhZ2UgZm9yIHByb3BlcnR5IGRlY2xhcmF0aW9ucy5cbiAgICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ19jbGFzc1Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NsYXNzUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIC8vIE5PVEU6IFdvcmthcm91bmQgSUUxMSBub3Qgc3VwcG9ydGluZyBNYXAgY29uc3RydWN0b3IgYXJndW1lbnQuXG4gICAgICAgICAgICBjb25zdCBzdXBlclByb3BlcnRpZXMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2NsYXNzUHJvcGVydGllcztcbiAgICAgICAgICAgIGlmIChzdXBlclByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN1cGVyUHJvcGVydGllcy5mb3JFYWNoKCh2LCBrKSA9PiB0aGlzLl9jbGFzc1Byb3BlcnRpZXMuc2V0KGssIHYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcHJvcGVydHkgYWNjZXNzb3Igb24gdGhlIGVsZW1lbnQgcHJvdG90eXBlIGlmIG9uZSBkb2VzIG5vdCBleGlzdC5cbiAgICAgKiBUaGUgcHJvcGVydHkgc2V0dGVyIGNhbGxzIHRoZSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBwcm9wZXJ0eSBvcHRpb25cbiAgICAgKiBvciB1c2VzIGEgc3RyaWN0IGlkZW50aXR5IGNoZWNrIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0byByZXF1ZXN0XG4gICAgICogYW4gdXBkYXRlLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgICAgICAvLyBpcyBjYWxsZWQgYmVmb3JlIGBmaW5hbGl6ZWAsIHdlIGVuc3VyZSBzdG9yYWdlIGV4aXN0cyBmb3IgcHJvcGVydHlcbiAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgIHRoaXMuX2Vuc3VyZUNsYXNzUHJvcGVydGllcygpO1xuICAgICAgICB0aGlzLl9jbGFzc1Byb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAvLyBEbyBub3QgZ2VuZXJhdGUgYW4gYWNjZXNzb3IgaWYgdGhlIHByb3RvdHlwZSBhbHJlYWR5IGhhcyBvbmUsIHNpbmNlXG4gICAgICAgIC8vIGl0IHdvdWxkIGJlIGxvc3Qgb3RoZXJ3aXNlIGFuZCB0aGF0IHdvdWxkIG5ldmVyIGJlIHRoZSB1c2VyJ3MgaW50ZW50aW9uO1xuICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBleHBlY3QgdXNlcnMgdG8gY2FsbCBgcmVxdWVzdFVwZGF0ZWAgdGhlbXNlbHZlcyBmcm9tXG4gICAgICAgIC8vIHVzZXItZGVmaW5lZCBhY2Nlc3NvcnMuIE5vdGUgdGhhdCBpZiB0aGUgc3VwZXIgaGFzIGFuIGFjY2Vzc29yIHdlIHdpbGxcbiAgICAgICAgLy8gc3RpbGwgb3ZlcndyaXRlIGl0XG4gICAgICAgIGlmIChvcHRpb25zLm5vQWNjZXNzb3IgfHwgdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7bmFtZX1gO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgbm8gc3ltYm9sIGluIGluZGV4XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBwcm9wZXJ0eSBhY2Nlc3NvcnMgZm9yIHJlZ2lzdGVyZWQgcHJvcGVydGllcyBhbmQgZW5zdXJlc1xuICAgICAqIGFueSBzdXBlcmNsYXNzZXMgYXJlIGFsc28gZmluYWxpemVkLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgICAgICAvLyBmaW5hbGl6ZSBhbnkgc3VwZXJjbGFzc2VzXG4gICAgICAgIGNvbnN0IHN1cGVyQ3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKTtcbiAgICAgICAgaWYgKCFzdXBlckN0b3IuaGFzT3duUHJvcGVydHkoZmluYWxpemVkKSkge1xuICAgICAgICAgICAgc3VwZXJDdG9yLmZpbmFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1tmaW5hbGl6ZWRdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZW5zdXJlQ2xhc3NQcm9wZXJ0aWVzKCk7XG4gICAgICAgIC8vIGluaXRpYWxpemUgTWFwIHBvcHVsYXRlZCBpbiBvYnNlcnZlZEF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy5fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gbWFrZSBhbnkgcHJvcGVydGllc1xuICAgICAgICAvLyBOb3RlLCBvbmx5IHByb2Nlc3MgXCJvd25cIiBwcm9wZXJ0aWVzIHNpbmNlIHRoaXMgZWxlbWVudCB3aWxsIGluaGVyaXRcbiAgICAgICAgLy8gYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiB0aGUgc3VwZXJDbGFzcywgYW5kIGZpbmFsaXphdGlvbiBlbnN1cmVzXG4gICAgICAgIC8vIHRoZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluIGlzIGZpbmFsaXplZC5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgncHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAvLyBzdXBwb3J0IHN5bWJvbHMgaW4gcHJvcGVydGllcyAoSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMpXG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IFtcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcyksXG4gICAgICAgICAgICAgICAgLi4uKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBUaGlzIGZvci9vZiBpcyBvayBiZWNhdXNlIHByb3BLZXlzIGlzIGFuIGFycmF5XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvcEtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBub3RlLCB1c2Ugb2YgYGFueWAgaXMgZHVlIHRvIFR5cGVTcmlwdCBsYWNrIG9mIHN1cHBvcnQgZm9yIHN5bWJvbCBpblxuICAgICAgICAgICAgICAgIC8vIGluZGV4IHR5cGVzXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBubyBzeW1ib2wgaW4gaW5kZXhcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5KHAsIHByb3BzW3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIGBuYW1lYC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gb3B0aW9ucy5hdHRyaWJ1dGU7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGUgPT09IGZhbHNlID9cbiAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICAodHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSA6XG4gICAgICAgICAgICAgICAgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyA/IG5hbWUudG9Mb3dlckNhc2UoKSA6IHVuZGVmaW5lZCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYSBwcm9wZXJ0eSBzaG91bGQgcmVxdWVzdCBhbiB1cGRhdGUuXG4gICAgICogQ2FsbGVkIHdoZW4gYSBwcm9wZXJ0eSB2YWx1ZSBpcyBzZXQgYW5kIHVzZXMgdGhlIGBoYXNDaGFuZ2VkYFxuICAgICAqIG9wdGlvbiBmb3IgdGhlIHByb3BlcnR5IGlmIHByZXNlbnQgb3IgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2suXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgX3ZhbHVlSGFzQ2hhbmdlZCh2YWx1ZSwgb2xkLCBoYXNDaGFuZ2VkID0gbm90RXF1YWwpIHtcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZWQodmFsdWUsIG9sZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIENhbGxlZCB2aWEgdGhlIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIGFuZCB1c2VzIHRoZSBwcm9wZXJ0eSdzXG4gICAgICogYGNvbnZlcnRlcmAgb3IgYGNvbnZlcnRlci5mcm9tQXR0cmlidXRlYCBwcm9wZXJ0eSBvcHRpb24uXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgX3Byb3BlcnR5VmFsdWVGcm9tQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IG9wdGlvbnMuY29udmVydGVyIHx8IGRlZmF1bHRDb252ZXJ0ZXI7XG4gICAgICAgIGNvbnN0IGZyb21BdHRyaWJ1dGUgPSAodHlwZW9mIGNvbnZlcnRlciA9PT0gJ2Z1bmN0aW9uJyA/IGNvbnZlcnRlciA6IGNvbnZlcnRlci5mcm9tQXR0cmlidXRlKTtcbiAgICAgICAgcmV0dXJuIGZyb21BdHRyaWJ1dGUgPyBmcm9tQXR0cmlidXRlKHZhbHVlLCB0eXBlKSA6IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSB2YWx1ZS4gSWYgdGhpc1xuICAgICAqIHJldHVybnMgdW5kZWZpbmVkLCB0aGUgcHJvcGVydHkgd2lsbCAqbm90KiBiZSByZWZsZWN0ZWQgdG8gYW4gYXR0cmlidXRlLlxuICAgICAqIElmIHRoaXMgcmV0dXJucyBudWxsLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZCwgb3RoZXJ3aXNlIHRoZVxuICAgICAqIGF0dHJpYnV0ZSB3aWxsIGJlIHNldCB0byB0aGUgdmFsdWUuXG4gICAgICogVGhpcyB1c2VzIHRoZSBwcm9wZXJ0eSdzIGByZWZsZWN0YCBhbmQgYHR5cGUudG9BdHRyaWJ1dGVgIHByb3BlcnR5IG9wdGlvbnMuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgX3Byb3BlcnR5VmFsdWVUb0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0eXBlID0gb3B0aW9ucy50eXBlO1xuICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBvcHRpb25zLmNvbnZlcnRlcjtcbiAgICAgICAgY29uc3QgdG9BdHRyaWJ1dGUgPSBjb252ZXJ0ZXIgJiYgY29udmVydGVyLnRvQXR0cmlidXRlIHx8XG4gICAgICAgICAgICBkZWZhdWx0Q29udmVydGVyLnRvQXR0cmlidXRlO1xuICAgICAgICByZXR1cm4gdG9BdHRyaWJ1dGUodmFsdWUsIHR5cGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBlbGVtZW50IGluaXRpYWxpemF0aW9uLiBCeSBkZWZhdWx0IGNhcHR1cmVzIGFueSBwcmUtc2V0IHZhbHVlcyBmb3JcbiAgICAgKiByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgICAgICAvLyBlbnN1cmVzIGZpcnN0IHVwZGF0ZSB3aWxsIGJlIGNhdWdodCBieSBhbiBlYXJseSBhY2Nlc3Mgb2ZcbiAgICAgICAgLy8gYHVwZGF0ZUNvbXBsZXRlYFxuICAgICAgICB0aGlzLl9yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpeGVzIGFueSBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgaW5zdGFuY2UgYmVmb3JlIHVwZ3JhZGUgdGltZS5cbiAgICAgKiBPdGhlcndpc2UgdGhlc2Ugd291bGQgc2hhZG93IHRoZSBhY2Nlc3NvciBhbmQgYnJlYWsgdGhlc2UgcHJvcGVydGllcy5cbiAgICAgKiBUaGUgcHJvcGVydGllcyBhcmUgc3RvcmVkIGluIGEgTWFwIHdoaWNoIGlzIHBsYXllZCBiYWNrIGFmdGVyIHRoZVxuICAgICAqIGNvbnN0cnVjdG9yIHJ1bnMuIE5vdGUsIG9uIHZlcnkgb2xkIHZlcnNpb25zIG9mIFNhZmFyaSAoPD05KSBvciBDaHJvbWVcbiAgICAgKiAoPD00MSksIHByb3BlcnRpZXMgY3JlYXRlZCBmb3IgbmF0aXZlIHBsYXRmb3JtIHByb3BlcnRpZXMgbGlrZSAoYGlkYCBvclxuICAgICAqIGBuYW1lYCkgbWF5IG5vdCBoYXZlIGRlZmF1bHQgdmFsdWVzIHNldCBpbiB0aGUgZWxlbWVudCBjb25zdHJ1Y3Rvci4gT25cbiAgICAgKiB0aGVzZSBicm93c2VycyBuYXRpdmUgcHJvcGVydGllcyBhcHBlYXIgb24gaW5zdGFuY2VzIGFuZCB0aGVyZWZvcmUgdGhlaXJcbiAgICAgKiBkZWZhdWx0IHZhbHVlIHdpbGwgb3ZlcndyaXRlIGFueSBlbGVtZW50IGRlZmF1bHQgKGUuZy4gaWYgdGhlIGVsZW1lbnQgc2V0c1xuICAgICAqIHRoaXMuaWQgPSAnaWQnIGluIHRoZSBjb25zdHJ1Y3RvciwgdGhlICdpZCcgd2lsbCBiZWNvbWUgJycgc2luY2UgdGhpcyBpc1xuICAgICAqIHRoZSBuYXRpdmUgcGxhdGZvcm0gZGVmYXVsdCkuXG4gICAgICovXG4gICAgX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIC5fY2xhc3NQcm9wZXJ0aWVzLmZvckVhY2goKF92LCBwKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1twXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnN0YW5jZVByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlUHJvcGVydGllcy5zZXQocCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBwcmV2aW91c2x5IHNhdmVkIGluc3RhbmNlIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgX2FwcGx5SW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIHRoaXMuX2luc3RhbmNlUHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiB0aGlzW3BdID0gdik7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgfCBTVEFURV9IQVNfQ09OTkVDVEVEO1xuICAgICAgICAvLyBFbnN1cmUgZmlyc3QgY29ubmVjdGlvbiBjb21wbGV0ZXMgYW4gdXBkYXRlLiBVcGRhdGVzIGNhbm5vdCBjb21wbGV0ZVxuICAgICAgICAvLyBiZWZvcmUgY29ubmVjdGlvbiBhbmQgaWYgb25lIGlzIHBlbmRpbmcgY29ubmVjdGlvbiB0aGVcbiAgICAgICAgLy8gYF9oYXNDb25uZWN0aW9uUmVzb2x2ZXJgIHdpbGwgZXhpc3QuIElmIHNvLCByZXNvbHZlIGl0IHRvIGNvbXBsZXRlIHRoZVxuICAgICAgICAvLyB1cGRhdGUsIG90aGVyd2lzZSByZXF1ZXN0VXBkYXRlLlxuICAgICAgICBpZiAodGhpcy5faGFzQ29ubmVjdGVkUmVzb2x2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc0Nvbm5lY3RlZFJlc29sdmVyKCk7XG4gICAgICAgICAgICB0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAgICogcmVzZXJ2aW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtYWtpbmcgbm9uLWJyZWFraW5nIGZlYXR1cmUgYWRkaXRpb25zXG4gICAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemVzIHByb3BlcnR5IHZhbHVlcyB3aGVuIGF0dHJpYnV0ZXMgY2hhbmdlLlxuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGQsIHZhbHVlKSB7XG4gICAgICAgIGlmIChvbGQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfcHJvcGVydHlUb0F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBjb25zdCBhdHRyID0gY3Rvci5fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBjdG9yLl9wcm9wZXJ0eVZhbHVlVG9BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gYW4gdW5kZWZpbmVkIHZhbHVlIGRvZXMgbm90IGNoYW5nZSB0aGUgYXR0cmlidXRlLlxuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVHJhY2sgaWYgdGhlIHByb3BlcnR5IGlzIGJlaW5nIHJlZmxlY3RlZCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2V0dGluZyB0aGUgcHJvcGVydHkgYWdhaW4gdmlhIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLiBOb3RlOlxuICAgICAgICAgICAgLy8gMS4gdGhpcyB0YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhhdCB0aGUgY2FsbGJhY2sgaXMgc3luY2hyb25vdXMuXG4gICAgICAgICAgICAvLyAyLiB3aWxsIGJlaGF2ZSBpbmNvcnJlY3RseSBpZiBtdWx0aXBsZSBhdHRyaWJ1dGVzIGFyZSBpbiB0aGUgcmVhY3Rpb25cbiAgICAgICAgICAgIC8vIHN0YWNrIGF0IHRpbWUgb2YgY2FsbGluZy4gSG93ZXZlciwgc2luY2Ugd2UgcHJvY2VzcyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAvLyBpbiBgdXBkYXRlYCB0aGlzIHNob3VsZCBub3QgYmUgcG9zc2libGUgKG9yIGFuIGV4dHJlbWUgY29ybmVyIGNhc2VcbiAgICAgICAgICAgIC8vIHRoYXQgd2UnZCBsaWtlIHRvIGRpc2NvdmVyKS5cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fQVRUUklCVVRFO1xuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSAmIH5TVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgICAvLyBVc2UgdHJhY2tpbmcgaW5mbyB0byBhdm9pZCBkZXNlcmlhbGl6aW5nIGF0dHJpYnV0ZSB2YWx1ZSBpZiBpdCB3YXNcbiAgICAgICAgLy8ganVzdCBzZXQgZnJvbSBhIHByb3BlcnR5IHNldHRlci5cbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBjdG9yLl9hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLmdldChuYW1lKTtcbiAgICAgICAgaWYgKHByb3BOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjdG9yLl9jbGFzc1Byb3BlcnRpZXMuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFk7XG4gICAgICAgICAgICB0aGlzW3Byb3BOYW1lXSA9XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgICAgIGN0b3IuX3Byb3BlcnR5VmFsdWVGcm9tQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgJiB+U1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIHByaXZhdGUgdmVyc2lvbiBvZiBgcmVxdWVzdFVwZGF0ZWAgZG9lcyBub3QgYWNjZXNzIG9yIHJldHVybiB0aGVcbiAgICAgKiBgdXBkYXRlQ29tcGxldGVgIHByb21pc2UuIFRoaXMgcHJvbWlzZSBjYW4gYmUgb3ZlcnJpZGRlbiBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICogbm90IGZyZWUgdG8gYWNjZXNzLlxuICAgICAqL1xuICAgIF9yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBzaG91bGRSZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHByb3BlcnR5IGtleSwgcGVyZm9ybSBwcm9wZXJ0eSB1cGRhdGUgc3RlcHMuXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGN0b3IuX2NsYXNzUHJvcGVydGllcy5nZXQobmFtZSkgfHwgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gICAgICAgICAgICBpZiAoY3Rvci5fdmFsdWVIYXNDaGFuZ2VkKHRoaXNbbmFtZV0sIG9sZFZhbHVlLCBvcHRpb25zLmhhc0NoYW5nZWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGFuZ2VkUHJvcGVydGllcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMuc2V0KG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHJlZmxlY3RpbmcgcHJvcGVydGllcyBzZXQuXG4gICAgICAgICAgICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBldmVyeSBjaGFuZ2UgaGFzIGEgY2hhbmNlIHRvIGFkZCB0aGVcbiAgICAgICAgICAgICAgICAvLyBwcm9wZXJ0eSB0byBgX3JlZmxlY3RpbmdQcm9wZXJ0aWVzYC4gVGhpcyBlbnN1cmVzIHNldHRpbmdcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGUgKyBwcm9wZXJ0eSByZWZsZWN0cyBjb3JyZWN0bHkuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAhKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBYm9ydCB0aGUgcmVxdWVzdCBpZiB0aGUgcHJvcGVydHkgc2hvdWxkIG5vdCBiZSBjb25zaWRlcmVkIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faGFzUmVxdWVzdGVkVXBkYXRlICYmIHNob3VsZFJlcXVlc3RVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VucXVldWVVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhbiB1cGRhdGUgd2hpY2ggaXMgcHJvY2Vzc2VkIGFzeW5jaHJvbm91c2x5LiBUaGlzIHNob3VsZFxuICAgICAqIGJlIGNhbGxlZCB3aGVuIGFuIGVsZW1lbnQgc2hvdWxkIHVwZGF0ZSBiYXNlZCBvbiBzb21lIHN0YXRlIG5vdCB0cmlnZ2VyZWRcbiAgICAgKiBieSBzZXR0aW5nIGEgcHJvcGVydHkuIEluIHRoaXMgY2FzZSwgcGFzcyBubyBhcmd1bWVudHMuIEl0IHNob3VsZCBhbHNvIGJlXG4gICAgICogY2FsbGVkIHdoZW4gbWFudWFsbHkgaW1wbGVtZW50aW5nIGEgcHJvcGVydHkgc2V0dGVyLiBJbiB0aGlzIGNhc2UsIHBhc3MgdGhlXG4gICAgICogcHJvcGVydHkgYG5hbWVgIGFuZCBgb2xkVmFsdWVgIHRvIGVuc3VyZSB0aGF0IGFueSBjb25maWd1cmVkIHByb3BlcnR5XG4gICAgICogb3B0aW9ucyBhcmUgaG9ub3JlZC4gUmV0dXJucyB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBQcm9taXNlIHdoaWNoIGlzIHJlc29sdmVkXG4gICAgICogd2hlbiB0aGUgdXBkYXRlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIHtQcm9wZXJ0eUtleX0gKG9wdGlvbmFsKSBuYW1lIG9mIHJlcXVlc3RpbmcgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWUge2FueX0gKG9wdGlvbmFsKSBvbGQgdmFsdWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSBBIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSB1cGRhdGUgY29tcGxldGVzLlxuICAgICAqL1xuICAgIHJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBlbGVtZW50IHRvIGFzeW5jaHJvbm91c2x5IHVwZGF0ZS5cbiAgICAgKi9cbiAgICBhc3luYyBfZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICAgICAgLy8gTWFyayBzdGF0ZSB1cGRhdGluZy4uLlxuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRDtcbiAgICAgICAgbGV0IHJlc29sdmU7XG4gICAgICAgIGxldCByZWplY3Q7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVXBkYXRlUHJvbWlzZSA9IHRoaXMuX3VwZGF0ZVByb21pc2U7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyB1cGRhdGUgaGFzIHJlc29sdmVkIGJlZm9yZSB1cGRhdGluZy5cbiAgICAgICAgICAgIC8vIFRoaXMgYGF3YWl0YCBhbHNvIGVuc3VyZXMgdGhhdCBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBiYXRjaGVkLlxuICAgICAgICAgICAgYXdhaXQgcHJldmlvdXNVcGRhdGVQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgYW55IHByZXZpb3VzIGVycm9ycy4gV2Ugb25seSBjYXJlIHRoYXQgdGhlIHByZXZpb3VzIGN5Y2xlIGlzXG4gICAgICAgICAgICAvLyBkb25lLiBBbnkgZXJyb3Igc2hvdWxkIGhhdmUgYmVlbiBoYW5kbGVkIGluIHRoZSBwcmV2aW91cyB1cGRhdGUuXG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGhhcyBjb25uZWN0ZWQgYmVmb3JlIHVwZGF0aW5nLlxuICAgICAgICBpZiAoIXRoaXMuX2hhc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4gdGhpcy5faGFzQ29ubmVjdGVkUmVzb2x2ZXIgPSByZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcbiAgICAgICAgICAgIC8vIElmIGBwZXJmb3JtVXBkYXRlYCByZXR1cm5zIGEgUHJvbWlzZSwgd2UgYXdhaXQgaXQuIFRoaXMgaXMgZG9uZSB0b1xuICAgICAgICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgICAgICAgIC8vIGNoZWNrZWQgdG8gYXZvaWQgZGVsYXlpbmcgYW4gYWRkaXRpb25hbCBtaWNyb3Rhc2sgdW5sZXNzIHdlIG5lZWQgdG8uXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKCF0aGlzLl9oYXNSZXF1ZXN0ZWRVcGRhdGUpO1xuICAgIH1cbiAgICBnZXQgX2hhc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19DT05ORUNURUQpO1xuICAgIH1cbiAgICBnZXQgX2hhc1JlcXVlc3RlZFVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX1VQREFURV9SRVFVRVNURUQpO1xuICAgIH1cbiAgICBnZXQgaGFzVXBkYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19VUERBVEVEKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gZWxlbWVudCB1cGRhdGUuIE5vdGUsIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZVxuICAgICAqIHVwZGF0ZSwgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgdGltaW5nIG9mIHVwZGF0ZXMuIElmIHRoaXNcbiAgICAgKiBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnBlcmZvcm1VcGRhdGUoKWAgbXVzdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBwcm90ZWN0ZWQgYXN5bmMgcGVyZm9ybVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAgICogICBzdXBlci5wZXJmb3JtVXBkYXRlKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHBlcmZvcm1VcGRhdGUoKSB7XG4gICAgICAgIC8vIE1peGluIGluc3RhbmNlIHByb3BlcnRpZXMgb25jZSwgaWYgdGhleSBleGlzdC5cbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgICAgICAgdGhpcy5fYXBwbHlJbnN0YW5jZVByb3BlcnRpZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fY2hhbmdlZFByb3BlcnRpZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0aGlzLnNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgZnJvbSBydW5uaW5nIHdoZW4gdGhlcmUncyBhblxuICAgICAgICAgICAgLy8gdXBkYXRlIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBlbGVtZW50IGNhbiBhY2NlcHQgYWRkaXRpb25hbCB1cGRhdGVzIGFmdGVyIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX21hcmtVcGRhdGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5fdXBkYXRlU3RhdGUgJiBTVEFURV9IQVNfVVBEQVRFRCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSEFTX1VQREFURUQ7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfbWFya1VwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlICYgflNUQVRFX1VQREFURV9SRVFVRVNURUQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZWxlbWVudCBoYXMgY29tcGxldGVkIHVwZGF0aW5nLlxuICAgICAqIFRoZSBQcm9taXNlIHZhbHVlIGlzIGEgYm9vbGVhbiB0aGF0IGlzIGB0cnVlYCBpZiB0aGUgZWxlbWVudCBjb21wbGV0ZWQgdGhlXG4gICAgICogdXBkYXRlIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS4gVGhlIFByb21pc2UgcmVzdWx0IGlzIGBmYWxzZWAgaWZcbiAgICAgKiBhIHByb3BlcnR5IHdhcyBzZXQgaW5zaWRlIGB1cGRhdGVkKClgLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgYW5cbiAgICAgKiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRvIGF3YWl0IGFkZGl0aW9uYWwgYXN5bmNocm9ub3VzIHdvcmssIG92ZXJyaWRlIHRoZSBgX2dldFVwZGF0ZUNvbXBsZXRlYFxuICAgICAqIG1ldGhvZC4gRm9yIGV4YW1wbGUsIGl0IGlzIHNvbWV0aW1lcyB1c2VmdWwgdG8gYXdhaXQgYSByZW5kZXJlZCBlbGVtZW50XG4gICAgICogYmVmb3JlIGZ1bGZpbGxpbmcgdGhpcyBQcm9taXNlLiBUbyBkbyB0aGlzLCBmaXJzdCBhd2FpdFxuICAgICAqIGBzdXBlci5fZ2V0VXBkYXRlQ29tcGxldGUoKWAsIHRoZW4gYW55IHN1YnNlcXVlbnQgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgcmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlXG4gICAgICogdXBkYXRlIHJlc29sdmVkIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBnZXQgdXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRVcGRhdGVDb21wbGV0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBwb2ludCBmb3IgdGhlIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEl0IGlzIG5vdCBzYWZlIHRvIG92ZXJyaWRlIHRoZSBgdXBkYXRlQ29tcGxldGVgIGdldHRlciBkaXJlY3RseSBkdWUgdG8gYVxuICAgICAqIGxpbWl0YXRpb24gaW4gVHlwZVNjcmlwdCB3aGljaCBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gY2FsbCBhXG4gICAgICogc3VwZXJjbGFzcyBnZXR0ZXIgKGUuZy4gYHN1cGVyLnVwZGF0ZUNvbXBsZXRlLnRoZW4oLi4uKWApIHdoZW4gdGhlIHRhcmdldFxuICAgICAqIGxhbmd1YWdlIGlzIEVTNSAoaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zMzgpLlxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBvdmVycmlkZGVuIGluc3RlYWQuIEZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgICAgYXN5bmMgX2dldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAqICAgICAgIGF3YWl0IHN1cGVyLl9nZXRVcGRhdGVDb21wbGV0ZSgpO1xuICAgICAqICAgICAgIGF3YWl0IHRoaXMuX215Q2hpbGQudXBkYXRlQ29tcGxldGU7XG4gICAgICogICAgIH1cbiAgICAgKiAgIH1cbiAgICAgKi9cbiAgICBfZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBgdXBkYXRlYCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgcmVxdWVzdHNcbiAgICAgKiBhbiB1cGRhdGUuIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIGFsd2F5cyByZXR1cm5zIGB0cnVlYCwgYnV0IHRoaXMgY2FuIGJlXG4gICAgICogY3VzdG9taXplZCB0byBjb250cm9sIHdoZW4gdG8gdXBkYXRlLlxuICAgICAqXG4gICAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICovXG4gICAgc2hvdWxkVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXMuXG4gICAgICogSXQgY2FuIGJlIG92ZXJyaWRkZW4gdG8gcmVuZGVyIGFuZCBrZWVwIHVwZGF0ZWQgZWxlbWVudCBET00uXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICAgKiBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqL1xuICAgIHVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3JcbiAgICAgICAgICAgIC8vIGxvb3BzIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHRoaXMuX3Byb3BlcnR5VG9BdHRyaWJ1dGUoaywgdGhpc1trXSwgdikpO1xuICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuZXZlciB0aGUgZWxlbWVudCBpcyB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybVxuICAgICAqIHBvc3QtdXBkYXRpbmcgdGFza3MgdmlhIERPTSBBUElzLCBmb3IgZXhhbXBsZSwgZm9jdXNpbmcgYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqL1xuICAgIHVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgICAqIHdvcmsgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICovXG4gICAgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgIH1cbn1cbl9hID0gZmluYWxpemVkO1xuLyoqXG4gKiBNYXJrcyBjbGFzcyBhcyBoYXZpbmcgZmluaXNoZWQgY3JlYXRpbmcgcHJvcGVydGllcy5cbiAqL1xuVXBkYXRpbmdFbGVtZW50W19hXSA9IHRydWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11cGRhdGluZy1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnbGl0LWh0bWwnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnbGl0LWh0bWwvbGliL3NoYWR5LXJlbmRlci5qcyc7XG5pbXBvcnQgeyBVcGRhdGluZ0VsZW1lbnQgfSBmcm9tICcuL2xpYi91cGRhdGluZy1lbGVtZW50LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3VwZGF0aW5nLWVsZW1lbnQuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZGVjb3JhdG9ycy5qcyc7XG5leHBvcnQgeyBodG1sLCBzdmcsIFRlbXBsYXRlUmVzdWx0LCBTVkdUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJ2xpdC1odG1sL2xpdC1odG1sLmpzJztcbmltcG9ydCB7IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyB9IGZyb20gJy4vbGliL2Nzcy10YWcuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY3NzLXRhZy5qcyc7XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIExpdEVsZW1lbnQgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuKHdpbmRvd1snbGl0RWxlbWVudFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0RWxlbWVudFZlcnNpb25zJ10gPSBbXSkpXG4gICAgLnB1c2goJzIuMi4xJyk7XG4vKipcbiAqIE1pbmltYWwgaW1wbGVtZW50YXRpb24gb2YgQXJyYXkucHJvdG90eXBlLmZsYXRcbiAqIEBwYXJhbSBhcnIgdGhlIGFycmF5IHRvIGZsYXR0ZW5cbiAqIEBwYXJhbSByZXN1bHQgdGhlIGFjY3VtbGF0ZWQgcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIGFycmF5RmxhdChzdHlsZXMsIHJlc3VsdCA9IFtdKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHN0eWxlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBhcnJheUZsYXQodmFsdWUsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKiBEZWVwbHkgZmxhdHRlbnMgc3R5bGVzIGFycmF5LiBVc2VzIG5hdGl2ZSBmbGF0IGlmIGF2YWlsYWJsZS4gKi9cbmNvbnN0IGZsYXR0ZW5TdHlsZXMgPSAoc3R5bGVzKSA9PiBzdHlsZXMuZmxhdCA/IHN0eWxlcy5mbGF0KEluZmluaXR5KSA6IGFycmF5RmxhdChzdHlsZXMpO1xuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICAgICAgLy8gVGhlIENsb3N1cmUgSlMgQ29tcGlsZXIgZG9lcyBub3QgYWx3YXlzIHByZXNlcnZlIHRoZSBjb3JyZWN0IFwidGhpc1wiXG4gICAgICAgIC8vIHdoZW4gY2FsbGluZyBzdGF0aWMgc3VwZXIgbWV0aG9kcyAoYi8xMzc0NjAyNDMpLCBzbyBleHBsaWNpdGx5IGJpbmQuXG4gICAgICAgIHN1cGVyLmZpbmFsaXplLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIFByZXBhcmUgc3R5bGluZyB0aGF0IGlzIHN0YW1wZWQgYXQgZmlyc3QgcmVuZGVyIHRpbWUuIFN0eWxpbmdcbiAgICAgICAgLy8gaXMgYnVpbHQgZnJvbSB1c2VyIHByb3ZpZGVkIGBzdHlsZXNgIG9yIGlzIGluaGVyaXRlZCBmcm9tIHRoZSBzdXBlcmNsYXNzLlxuICAgICAgICB0aGlzLl9zdHlsZXMgPVxuICAgICAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdzdHlsZXMnLCB0aGlzKSkgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2dldFVuaXF1ZVN0eWxlcygpIDpcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHlsZXMgfHwgW107XG4gICAgfVxuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIHN0YXRpYyBfZ2V0VW5pcXVlU3R5bGVzKCkge1xuICAgICAgICAvLyBUYWtlIGNhcmUgbm90IHRvIGNhbGwgYHRoaXMuc3R5bGVzYCBtdWx0aXBsZSB0aW1lcyBzaW5jZSB0aGlzIGdlbmVyYXRlc1xuICAgICAgICAvLyBuZXcgQ1NTUmVzdWx0cyBlYWNoIHRpbWUuXG4gICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IFNpbmNlIHdlIGRvIG5vdCBjYWNoZSBDU1NSZXN1bHRzIGJ5IGlucHV0LCBhbnlcbiAgICAgICAgLy8gc2hhcmVkIHN0eWxlcyB3aWxsIGdlbmVyYXRlIG5ldyBzdHlsZXNoZWV0IG9iamVjdHMsIHdoaWNoIGlzIHdhc3RlZnVsLlxuICAgICAgICAvLyBUaGlzIHNob3VsZCBiZSBhZGRyZXNzZWQgd2hlbiBhIGJyb3dzZXIgc2hpcHMgY29uc3RydWN0YWJsZVxuICAgICAgICAvLyBzdHlsZXNoZWV0cy5cbiAgICAgICAgY29uc3QgdXNlclN0eWxlcyA9IHRoaXMuc3R5bGVzO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXNlclN0eWxlcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGZsYXRTdHlsZXMgPSBmbGF0dGVuU3R5bGVzKHVzZXJTdHlsZXMpO1xuICAgICAgICAgICAgLy8gQXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdG8gYXZvaWQgZHVwbGljYXRlZCBzdHlsaW5nIHRoYXQgY2FuXG4gICAgICAgICAgICAvLyBvY2N1ciBlc3BlY2lhbGx5IHdoZW4gY29tcG9zaW5nIHZpYSBzdWJjbGFzc2luZywgZGUtZHVwbGljYXRlIHN0eWxlc1xuICAgICAgICAgICAgLy8gcHJlc2VydmluZyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0LiBUaGUgbGFzdCBpdGVtIGlzIGtlcHQgdG9cbiAgICAgICAgICAgIC8vIHRyeSB0byBwcmVzZXJ2ZSBjYXNjYWRlIG9yZGVyIHdpdGggdGhlIGFzc3VtcHRpb24gdGhhdCBpdCdzIG1vc3RcbiAgICAgICAgICAgIC8vIGltcG9ydGFudCB0aGF0IGxhc3QgYWRkZWQgc3R5bGVzIG92ZXJyaWRlIHByZXZpb3VzIHN0eWxlcy5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlU2V0ID0gZmxhdFN0eWxlcy5yZWR1Y2VSaWdodCgoc2V0LCBzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0LmFkZChzKTtcbiAgICAgICAgICAgICAgICAvLyBvbiBJRSBzZXQuYWRkIGRvZXMgbm90IHJldHVybiB0aGUgc2V0LlxuICAgICAgICAgICAgICAgIHJldHVybiBzZXQ7XG4gICAgICAgICAgICB9LCBuZXcgU2V0KCkpO1xuICAgICAgICAgICAgLy8gQXJyYXkuZnJvbSBkb2VzIG5vdCB3b3JrIG9uIFNldCBpbiBJRVxuICAgICAgICAgICAgc3R5bGVTZXQuZm9yRWFjaCgodikgPT4gc3R5bGVzLnVuc2hpZnQodikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVzZXJTdHlsZXMpIHtcbiAgICAgICAgICAgIHN0eWxlcy5wdXNoKHVzZXJTdHlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGVsZW1lbnQgaW5pdGlhbGl6YXRpb24uIEJ5IGRlZmF1bHQgdGhpcyBjYWxscyBgY3JlYXRlUmVuZGVyUm9vdGBcbiAgICAgKiB0byBjcmVhdGUgdGhlIGVsZW1lbnQgYHJlbmRlclJvb3RgIG5vZGUgYW5kIGNhcHR1cmVzIGFueSBwcmUtc2V0IHZhbHVlcyBmb3JcbiAgICAgKiByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLnJlbmRlclJvb3QgPVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIC8vIE5vdGUsIGlmIHJlbmRlclJvb3QgaXMgbm90IGEgc2hhZG93Um9vdCwgc3R5bGVzIHdvdWxkL2NvdWxkIGFwcGx5IHRvIHRoZVxuICAgICAgICAvLyBlbGVtZW50J3MgZ2V0Um9vdE5vZGUoKS4gV2hpbGUgdGhpcyBjb3VsZCBiZSBkb25lLCB3ZSdyZSBjaG9vc2luZyBub3QgdG9cbiAgICAgICAgLy8gc3VwcG9ydCB0aGlzIG5vdyBzaW5jZSBpdCB3b3VsZCByZXF1aXJlIGRpZmZlcmVudCBsb2dpYyBhcm91bmQgZGUtZHVwaW5nLlxuICAgICAgICBpZiAod2luZG93LlNoYWRvd1Jvb3QgJiYgdGhpcy5yZW5kZXJSb290IGluc3RhbmNlb2Ygd2luZG93LlNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuYWRvcHRTdHlsZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBub2RlIGludG8gd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIHJlbmRlciBhbmQgYnkgZGVmYXVsdFxuICAgICAqIGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb3BlbiBzaGFkb3dSb290LiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHdoZXJlIHRoZVxuICAgICAqIGVsZW1lbnQncyBET00gaXMgcmVuZGVyZWQuIEZvciBleGFtcGxlLCB0byByZW5kZXIgaW50byB0aGUgZWxlbWVudCdzXG4gICAgICogY2hpbGROb2RlcywgcmV0dXJuIGB0aGlzYC5cbiAgICAgKiBAcmV0dXJucyB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgc3R5bGluZyB0byB0aGUgZWxlbWVudCBzaGFkb3dSb290IHVzaW5nIHRoZSBgc3RhdGljIGdldCBzdHlsZXNgXG4gICAgICogcHJvcGVydHkuIFN0eWxpbmcgd2lsbCBhcHBseSB1c2luZyBgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHNgIHdoZXJlXG4gICAgICogYXZhaWxhYmxlIGFuZCB3aWxsIGZhbGxiYWNrIG90aGVyd2lzZS4gV2hlbiBTaGFkb3cgRE9NIGlzIHBvbHlmaWxsZWQsXG4gICAgICogU2hhZHlDU1Mgc2NvcGVzIHN0eWxlcyBhbmQgYWRkcyB0aGVtIHRvIHRoZSBkb2N1bWVudC4gV2hlbiBTaGFkb3cgRE9NXG4gICAgICogaXMgYXZhaWxhYmxlIGJ1dCBgYWRvcHRlZFN0eWxlU2hlZXRzYCBpcyBub3QsIHN0eWxlcyBhcmUgYXBwZW5kZWQgdG8gdGhlXG4gICAgICogZW5kIG9mIHRoZSBgc2hhZG93Um9vdGAgdG8gW21pbWljIHNwZWNcbiAgICAgKiBiZWhhdmlvcl0oaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby9jb25zdHJ1Y3Qtc3R5bGVzaGVldHMvI3VzaW5nLWNvbnN0cnVjdGVkLXN0eWxlc2hlZXRzKS5cbiAgICAgKi9cbiAgICBhZG9wdFN0eWxlcygpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5fc3R5bGVzO1xuICAgICAgICBpZiAoc3R5bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZXJlIGFyZSB0aHJlZSBzZXBhcmF0ZSBjYXNlcyBoZXJlIGJhc2VkIG9uIFNoYWRvdyBET00gc3VwcG9ydC5cbiAgICAgICAgLy8gKDEpIHNoYWRvd1Jvb3QgcG9seWZpbGxlZDogdXNlIFNoYWR5Q1NTXG4gICAgICAgIC8vICgyKSBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyBhdmFpbGFibGU6IHVzZSBpdC5cbiAgICAgICAgLy8gKDMpIHNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzIHBvbHlmaWxsZWQ6IGFwcGVuZCBzdHlsZXMgYWZ0ZXJcbiAgICAgICAgLy8gcmVuZGVyaW5nXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZHlDU1MgIT09IHVuZGVmaW5lZCAmJiAhd2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykge1xuICAgICAgICAgICAgd2luZG93LlNoYWR5Q1NTLlNjb3BpbmdTaGltLnByZXBhcmVBZG9wdGVkQ3NzVGV4dChzdHlsZXMubWFwKChzKSA9PiBzLmNzc1RleHQpLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID1cbiAgICAgICAgICAgICAgICBzdHlsZXMubWFwKChzKSA9PiBzLnN0eWxlU2hlZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhpcyBtdXN0IGJlIGRvbmUgYWZ0ZXIgcmVuZGVyaW5nIHNvIHRoZSBhY3R1YWwgc3R5bGUgaW5zZXJ0aW9uIGlzIGRvbmVcbiAgICAgICAgICAgIC8vIGluIGB1cGRhdGVgLlxuICAgICAgICAgICAgdGhpcy5fbmVlZHNTaGltQWRvcHRlZFN0eWxlU2hlZXRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgLy8gTm90ZSwgZmlyc3QgdXBkYXRlL3JlbmRlciBoYW5kbGVzIHN0eWxlRWxlbWVudCBzbyB3ZSBvbmx5IGNhbGwgdGhpcyBpZlxuICAgICAgICAvLyBjb25uZWN0ZWQgYWZ0ZXIgZmlyc3QgdXBkYXRlLlxuICAgICAgICBpZiAodGhpcy5oYXNVcGRhdGVkICYmIHdpbmRvdy5TaGFkeUNTUyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVFbGVtZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAgICogYW5kIGNhbGxzIGByZW5kZXJgIHRvIHJlbmRlciBET00gdmlhIGxpdC1odG1sLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlXG4gICAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgICAqICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqL1xuICAgIHVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZVJlc3VsdCA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZVJlc3VsdCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgLnJlbmRlcih0ZW1wbGF0ZVJlc3VsdCwgdGhpcy5yZW5kZXJSb290LCB7IHNjb3BlTmFtZTogdGhpcy5sb2NhbE5hbWUsIGV2ZW50Q29udGV4dDogdGhpcyB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIG5hdGl2ZSBTaGFkb3cgRE9NIGlzIHVzZWQgYnV0IGFkb3B0ZWRTdHlsZXMgYXJlIG5vdCBzdXBwb3J0ZWQsXG4gICAgICAgIC8vIGluc2VydCBzdHlsaW5nIGFmdGVyIHJlbmRlcmluZyB0byBlbnN1cmUgYWRvcHRlZFN0eWxlcyBoYXZlIGhpZ2hlc3RcbiAgICAgICAgLy8gcHJpb3JpdHkuXG4gICAgICAgIGlmICh0aGlzLl9uZWVkc1NoaW1BZG9wdGVkU3R5bGVTaGVldHMpIHtcbiAgICAgICAgICAgIHRoaXMuX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5fc3R5bGVzLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gZWFjaCB1cGRhdGUgdG8gcGVyZm9ybSByZW5kZXJpbmcgdGFza3MuIFRoaXMgbWV0aG9kIG11c3QgcmV0dXJuXG4gICAgICogYSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqXG4gICAgICogdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICogaXQgd2lsbCBub3QgbmVlZGxlc3NseSB0cnkgdG8gYGZpbmFsaXplYC5cbiAqXG4gKiBOb3RlIHRoaXMgcHJvcGVydHkgbmFtZSBpcyBhIHN0cmluZyB0byBwcmV2ZW50IGJyZWFraW5nIENsb3N1cmUgSlMgQ29tcGlsZXJcbiAqIG9wdGltaXphdGlvbnMuIFNlZSB1cGRhdGluZy1lbGVtZW50LnRzIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5MaXRFbGVtZW50WydmaW5hbGl6ZWQnXSA9IHRydWU7XG4vKipcbiAqIFJlbmRlciBtZXRob2QgdXNlZCB0byByZW5kZXIgdGhlIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0IHRvIHRoZSBlbGVtZW50J3NcbiAqIERPTS5cbiAqIEBwYXJhbSB7VGVtcGxhdGVSZXN1bHR9IFRlbXBsYXRlIHRvIHJlbmRlci5cbiAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBOb2RlIGludG8gd2hpY2ggdG8gcmVuZGVyLlxuICogQHBhcmFtIHtTdHJpbmd9IEVsZW1lbnQgbmFtZS5cbiAqIEBub2NvbGxhcHNlXG4gKi9cbkxpdEVsZW1lbnQucmVuZGVyID0gcmVuZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgaXNQcmltaXRpdmUgfSBmcm9tICcuLi9saWIvcGFydHMuanMnO1xuaW1wb3J0IHsgZGlyZWN0aXZlLCBOb2RlUGFydCB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbi8vIEZvciBlYWNoIHBhcnQsIHJlbWVtYmVyIHRoZSB2YWx1ZSB0aGF0IHdhcyBsYXN0IHJlbmRlcmVkIHRvIHRoZSBwYXJ0IGJ5IHRoZVxuLy8gdW5zYWZlSFRNTCBkaXJlY3RpdmUsIGFuZCB0aGUgRG9jdW1lbnRGcmFnbWVudCB0aGF0IHdhcyBsYXN0IHNldCBhcyBhIHZhbHVlLlxuLy8gVGhlIERvY3VtZW50RnJhZ21lbnQgaXMgdXNlZCBhcyBhIHVuaXF1ZSBrZXkgdG8gY2hlY2sgaWYgdGhlIGxhc3QgdmFsdWVcbi8vIHJlbmRlcmVkIHRvIHRoZSBwYXJ0IHdhcyB3aXRoIHVuc2FmZUhUTUwuIElmIG5vdCwgd2UnbGwgYWx3YXlzIHJlLXJlbmRlciB0aGVcbi8vIHZhbHVlIHBhc3NlZCB0byB1bnNhZmVIVE1MLlxuY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBSZW5kZXJzIHRoZSByZXN1bHQgYXMgSFRNTCwgcmF0aGVyIHRoYW4gdGV4dC5cbiAqXG4gKiBOb3RlLCB0aGlzIGlzIHVuc2FmZSB0byB1c2Ugd2l0aCBhbnkgdXNlci1wcm92aWRlZCBpbnB1dCB0aGF0IGhhc24ndCBiZWVuXG4gKiBzYW5pdGl6ZWQgb3IgZXNjYXBlZCwgYXMgaXQgbWF5IGxlYWQgdG8gY3Jvc3Mtc2l0ZS1zY3JpcHRpbmdcbiAqIHZ1bG5lcmFiaWxpdGllcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUhUTUwgPSBkaXJlY3RpdmUoKHZhbHVlKSA9PiAocGFydCkgPT4ge1xuICAgIGlmICghKHBhcnQgaW5zdGFuY2VvZiBOb2RlUGFydCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnNhZmVIVE1MIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGV4dCBiaW5kaW5ncycpO1xuICAgIH1cbiAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNWYWx1ZXMuZ2V0KHBhcnQpO1xuICAgIGlmIChwcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQgJiYgaXNQcmltaXRpdmUodmFsdWUpICYmXG4gICAgICAgIHZhbHVlID09PSBwcmV2aW91c1ZhbHVlLnZhbHVlICYmIHBhcnQudmFsdWUgPT09IHByZXZpb3VzVmFsdWUuZnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdmFsdWU7IC8vIGlubmVySFRNTCBjYXN0cyB0byBzdHJpbmcgaW50ZXJuYWxseVxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBwYXJ0LnNldFZhbHVlKGZyYWdtZW50KTtcbiAgICBwcmV2aW91c1ZhbHVlcy5zZXQocGFydCwgeyB2YWx1ZSwgZnJhZ21lbnQgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuc2FmZS1odG1sLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IEF0dHJpYnV0ZUNvbW1pdHRlciwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyIH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG4vKipcbiAqIENyZWF0ZXMgUGFydHMgd2hlbiBhIHRlbXBsYXRlIGlzIGluc3RhbnRpYXRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUtcG9zaXRpb24gYmluZGluZywgZ2l2ZW4gdGhlIGV2ZW50LCBhdHRyaWJ1dGVcbiAgICAgKiBuYW1lLCBhbmQgc3RyaW5nIGxpdGVyYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgYmluZGluZ1xuICAgICAqIEBwYXJhbSBuYW1lICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5nIGxpdGVyYWxzLiBUaGVyZSBhcmUgYWx3YXlzIGF0IGxlYXN0IHR3byBzdHJpbmdzLFxuICAgICAqICAgZXZlbnQgZm9yIGZ1bGx5LWNvbnRyb2xsZWQgYmluZGluZ3Mgd2l0aCBhIHNpbmdsZSBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIGhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbmFtZVswXTtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgUHJvcGVydHlDb21taXR0ZXIoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyk7XG4gICAgICAgICAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVmaXggPT09ICdAJykge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRXZlbnRQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIG9wdGlvbnMuZXZlbnRDb250ZXh0KV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJz8nKSB7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBCb29sZWFuQXR0cmlidXRlUGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tbWl0dGVyID0gbmV3IEF0dHJpYnV0ZUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICAgICAgcmV0dXJuIGNvbW1pdHRlci5wYXJ0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHBhcnRzIGZvciBhIHRleHQtcG9zaXRpb24gYmluZGluZy5cbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5XG4gICAgICovXG4gICAgaGFuZGxlVGV4dEV4cHJlc3Npb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IE5vZGVQYXJ0KG9wdGlvbnMpO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgPSBuZXcgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5jb25zdCBkaXJlY3RpdmVzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQnJhbmRzIGEgZnVuY3Rpb24gYXMgYSBkaXJlY3RpdmUgZmFjdG9yeSBmdW5jdGlvbiBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbFxuICogdGhlIGZ1bmN0aW9uIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBBIF9kaXJlY3RpdmVfIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIFBhcnQgYXMgYW4gYXJndW1lbnQuIEl0IGhhcyB0aGVcbiAqIHNpZ25hdHVyZTogYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC5cbiAqXG4gKiBBIGRpcmVjdGl2ZSBfZmFjdG9yeV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFyZ3VtZW50cyBmb3IgZGF0YSBhbmRcbiAqIGNvbmZpZ3VyYXRpb24gYW5kIHJldHVybnMgYSBkaXJlY3RpdmUuIFVzZXJzIG9mIGRpcmVjdGl2ZSB1c3VhbGx5IHJlZmVyIHRvXG4gKiB0aGUgZGlyZWN0aXZlIGZhY3RvcnkgYXMgdGhlIGRpcmVjdGl2ZS4gRm9yIGV4YW1wbGUsIFwiVGhlIHJlcGVhdCBkaXJlY3RpdmVcIi5cbiAqXG4gKiBVc3VhbGx5IGEgdGVtcGxhdGUgYXV0aG9yIHdpbGwgaW52b2tlIGEgZGlyZWN0aXZlIGZhY3RvcnkgaW4gdGhlaXIgdGVtcGxhdGVcbiAqIHdpdGggcmVsZXZhbnQgYXJndW1lbnRzLCB3aGljaCB3aWxsIHRoZW4gcmV0dXJuIGEgZGlyZWN0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEhlcmUncyBhbiBleGFtcGxlIG9mIHVzaW5nIHRoZSBgcmVwZWF0KClgIGRpcmVjdGl2ZSBmYWN0b3J5IHRoYXQgdGFrZXMgYW5cbiAqIGFycmF5IGFuZCBhIGZ1bmN0aW9uIHRvIHJlbmRlciBhbiBpdGVtOlxuICpcbiAqIGBgYGpzXG4gKiBodG1sYDx1bD48JHtyZXBlYXQoaXRlbXMsIChpdGVtKSA9PiBodG1sYDxsaT4ke2l0ZW19PC9saT5gKX08L3VsPmBcbiAqIGBgYFxuICpcbiAqIFdoZW4gYHJlcGVhdGAgaXMgaW52b2tlZCwgaXQgcmV0dXJucyBhIGRpcmVjdGl2ZSBmdW5jdGlvbiB0aGF0IGNsb3NlcyBvdmVyXG4gKiBgaXRlbXNgIGFuZCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uIFdoZW4gdGhlIG91dGVyIHRlbXBsYXRlIGlzIHJlbmRlcmVkLCB0aGVcbiAqIHJldHVybiBkaXJlY3RpdmUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIFBhcnQgZm9yIHRoZSBleHByZXNzaW9uLlxuICogYHJlcGVhdGAgdGhlbiBwZXJmb3JtcyBpdCdzIGN1c3RvbSBsb2dpYyB0byByZW5kZXIgbXVsdGlwbGUgaXRlbXMuXG4gKlxuICogQHBhcmFtIGYgVGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uLiBNdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIGZ1bmN0aW9uIG9mIHRoZSBzaWduYXR1cmUgYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIGNhbGxlZCB3aXRoIHRoZSBwYXJ0IG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSAoZikgPT4gKCguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgZCA9IGYoLi4uYXJncyk7XG4gICAgZGlyZWN0aXZlcy5zZXQoZCwgdHJ1ZSk7XG4gICAgcmV0dXJuIGQ7XG59KTtcbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZSA9IChvKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnZnVuY3Rpb24nICYmIGRpcmVjdGl2ZXMuaGFzKG8pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIFRydWUgaWYgdGhlIGN1c3RvbSBlbGVtZW50cyBwb2x5ZmlsbCBpcyBpbiB1c2UuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0NFUG9seWZpbGwgPSB3aW5kb3cuY3VzdG9tRWxlbWVudHMgIT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrICE9PVxuICAgICAgICB1bmRlZmluZWQ7XG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLFxuICogaW50byBhbm90aGVyIGNvbnRhaW5lciAoY291bGQgYmUgdGhlIHNhbWUgY29udGFpbmVyKSwgYmVmb3JlIGBiZWZvcmVgLiBJZlxuICogYGJlZm9yZWAgaXMgbnVsbCwgaXQgYXBwZW5kcyB0aGUgbm9kZXMgdG8gdGhlIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGFyZW50Tm9kZXMgPSAoY29udGFpbmVyLCBzdGFydCwgZW5kID0gbnVsbCwgYmVmb3JlID0gbnVsbCkgPT4ge1xuICAgIHdoaWxlIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBzdGFydC5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShzdGFydCwgYmVmb3JlKTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgIH1cbn07XG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YCAoaW5jbHVzaXZlKSB0byBgZW5kYCAoZXhjbHVzaXZlKSwgZnJvbVxuICogYGNvbnRhaW5lcmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlcyA9IChjb250YWluZXIsIHN0YXJ0LCBlbmQgPSBudWxsKSA9PiB7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhcnQpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgc2hhZHktcmVuZGVyXG4gKi9cbmltcG9ydCB7IGlzVGVtcGxhdGVQYXJ0QWN0aXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5jb25zdCB3YWxrZXJOb2RlRmlsdGVyID0gMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovO1xuLyoqXG4gKiBSZW1vdmVzIHRoZSBsaXN0IG9mIG5vZGVzIGZyb20gYSBUZW1wbGF0ZSBzYWZlbHkuIEluIGFkZGl0aW9uIHRvIHJlbW92aW5nXG4gKiBub2RlcyBmcm9tIHRoZSBUZW1wbGF0ZSwgdGhlIFRlbXBsYXRlIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaFxuICogdGhlIG11dGF0ZWQgVGVtcGxhdGUgRE9NLlxuICpcbiAqIEFzIHRoZSB0ZW1wbGF0ZSBpcyB3YWxrZWQgdGhlIHJlbW92YWwgc3RhdGUgaXMgdHJhY2tlZCBhbmRcbiAqIHBhcnQgaW5kaWNlcyBhcmUgYWRqdXN0ZWQgYXMgbmVlZGVkLlxuICpcbiAqIGRpdlxuICogICBkaXYjMSAocmVtb3ZlKSA8LS0gc3RhcnQgcmVtb3ZpbmcgKHJlbW92aW5nIG5vZGUgaXMgZGl2IzEpXG4gKiAgICAgZGl2XG4gKiAgICAgICBkaXYjMiAocmVtb3ZlKSAgPC0tIGNvbnRpbnVlIHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIHN0aWxsIGRpdiMxKVxuICogICAgICAgICBkaXZcbiAqIGRpdiA8LS0gc3RvcCByZW1vdmluZyBzaW5jZSBwcmV2aW91cyBzaWJsaW5nIGlzIHRoZSByZW1vdmluZyBub2RlIChkaXYjMSxcbiAqIHJlbW92ZWQgNCBub2RlcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBub2Rlc1RvUmVtb3ZlKSB7XG4gICAgY29uc3QgeyBlbGVtZW50OiB7IGNvbnRlbnQgfSwgcGFydHMgfSA9IHRlbXBsYXRlO1xuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29udGVudCwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICAgIGxldCBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMpO1xuICAgIGxldCBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICBsZXQgbm9kZUluZGV4ID0gLTE7XG4gICAgbGV0IHJlbW92ZUNvdW50ID0gMDtcbiAgICBjb25zdCBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZSA9IFtdO1xuICAgIGxldCBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbnVsbDtcbiAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGU7XG4gICAgICAgIC8vIEVuZCByZW1vdmFsIGlmIHN0ZXBwZWQgcGFzdCB0aGUgcmVtb3Zpbmcgbm9kZVxuICAgICAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGN1cnJlbnRSZW1vdmluZ05vZGUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSZW1vdmluZ05vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEEgbm9kZSB0byByZW1vdmUgd2FzIGZvdW5kIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICBpZiAobm9kZXNUb1JlbW92ZS5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAvLyBUcmFjayBub2RlIHdlJ3JlIHJlbW92aW5nXG4gICAgICAgICAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSZW1vdmluZ05vZGUgPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gcmVtb3ZpbmcsIGluY3JlbWVudCBjb3VudCBieSB3aGljaCB0byBhZGp1c3Qgc3Vic2VxdWVudCBwYXJ0IGluZGljZXNcbiAgICAgICAgaWYgKGN1cnJlbnRSZW1vdmluZ05vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHBhcnQgIT09IHVuZGVmaW5lZCAmJiBwYXJ0LmluZGV4ID09PSBub2RlSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIElmIHBhcnQgaXMgaW4gYSByZW1vdmVkIG5vZGUgZGVhY3RpdmF0ZSBpdCBieSBzZXR0aW5nIGluZGV4IHRvIC0xIG9yXG4gICAgICAgICAgICAvLyBhZGp1c3QgdGhlIGluZGV4IGFzIG5lZWRlZC5cbiAgICAgICAgICAgIHBhcnQuaW5kZXggPSBjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsID8gLTEgOiBwYXJ0LmluZGV4IC0gcmVtb3ZlQ291bnQ7XG4gICAgICAgICAgICAvLyBnbyB0byB0aGUgbmV4dCBhY3RpdmUgcGFydC5cbiAgICAgICAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICAgICAgICAgIHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLmZvckVhY2goKG4pID0+IG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSk7XG59XG5jb25zdCBjb3VudE5vZGVzID0gKG5vZGUpID0+IHtcbiAgICBsZXQgY291bnQgPSAobm9kZS5ub2RlVHlwZSA9PT0gMTEgLyogTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICovKSA/IDAgOiAxO1xuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG59O1xuY29uc3QgbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzID0gKHBhcnRzLCBzdGFydEluZGV4ID0gLTEpID0+IHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleCArIDE7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIGlmIChpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufTtcbi8qKlxuICogSW5zZXJ0cyB0aGUgZ2l2ZW4gbm9kZSBpbnRvIHRoZSBUZW1wbGF0ZSwgb3B0aW9uYWxseSBiZWZvcmUgdGhlIGdpdmVuXG4gKiByZWZOb2RlLiBJbiBhZGRpdGlvbiB0byBpbnNlcnRpbmcgdGhlIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIHRoZSBUZW1wbGF0ZVxuICogcGFydCBpbmRpY2VzIGFyZSB1cGRhdGVkIHRvIG1hdGNoIHRoZSBtdXRhdGVkIFRlbXBsYXRlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydE5vZGVJbnRvVGVtcGxhdGUodGVtcGxhdGUsIG5vZGUsIHJlZk5vZGUgPSBudWxsKSB7XG4gICAgY29uc3QgeyBlbGVtZW50OiB7IGNvbnRlbnQgfSwgcGFydHMgfSA9IHRlbXBsYXRlO1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gcmVmTm9kZSwgdGhlbiBwdXQgbm9kZSBhdCBlbmQgb2YgdGVtcGxhdGUuXG4gICAgLy8gTm8gcGFydCBpbmRpY2VzIG5lZWQgdG8gYmUgc2hpZnRlZCBpbiB0aGlzIGNhc2UuXG4gICAgaWYgKHJlZk5vZGUgPT09IG51bGwgfHwgcmVmTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gICAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gICAgbGV0IGluc2VydENvdW50ID0gMDtcbiAgICBsZXQgd2Fsa2VySW5kZXggPSAtMTtcbiAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgd2Fsa2VySW5kZXgrKztcbiAgICAgICAgY29uc3Qgd2Fsa2VyTm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgaWYgKHdhbGtlck5vZGUgPT09IHJlZk5vZGUpIHtcbiAgICAgICAgICAgIGluc2VydENvdW50ID0gY291bnROb2Rlcyhub2RlKTtcbiAgICAgICAgICAgIHJlZk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHBhcnRJbmRleCAhPT0gLTEgJiYgcGFydHNbcGFydEluZGV4XS5pbmRleCA9PT0gd2Fsa2VySW5kZXgpIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGluc2VydGVkIHRoZSBub2RlLCBzaW1wbHkgYWRqdXN0IGFsbCBzdWJzZXF1ZW50IHBhcnRzXG4gICAgICAgICAgICBpZiAoaW5zZXJ0Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHBhcnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHNbcGFydEluZGV4XS5pbmRleCArPSBpbnNlcnRDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMsIHBhcnRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RpZnktdGVtcGxhdGUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0ge307XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgTm9kZVBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0ge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJ0LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyBpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7IHJlbW92ZU5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgbm9DaGFuZ2UsIG5vdGhpbmcgfSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHsgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNYXJrZXIgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAodmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgISh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykpO1xufTtcbmV4cG9ydCBjb25zdCBpc0l0ZXJhYmxlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgISEodmFsdWUgJiYgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk7XG59O1xuLyoqXG4gKiBXcml0ZXMgYXR0cmlidXRlIHZhbHVlcyB0byB0aGUgRE9NIGZvciBhIGdyb3VwIG9mIEF0dHJpYnV0ZVBhcnRzIGJvdW5kIHRvIGFcbiAqIHNpbmdsZSBhdHRpYnV0ZS4gVGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2UgZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHNcbiAqIGZvciBhbiBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0c1tpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2luZ2xlIHBhcnQuIE92ZXJyaWRlIHRoaXMgdG8gY3JlYXRlIGEgZGlmZmVybnQgdHlwZSBvZiBwYXJ0LlxuICAgICAqL1xuICAgIF9jcmVhdGVQYXJ0KCkge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2ldO1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJ0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2KSB8fCAhaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHYgOiBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2Ygdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyB0IDogU3RyaW5nKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRleHQgKz0gc3RyaW5nc1tsXTtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCB0aGlzLl9nZXRWYWx1ZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQSBQYXJ0IHRoYXQgY29udHJvbHMgYWxsIG9yIHBhcnQgb2YgYW4gYXR0cmlidXRlIHZhbHVlLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoY29tbWl0dGVyKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyID0gY29tbWl0dGVyO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlICYmICghaXNQcmltaXRpdmUodmFsdWUpIHx8IHZhbHVlICE9PSB0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgbm90IGEgZGlyZWN0aXZlLCBkaXJ0eSB0aGUgY29tbWl0dGVyIHNvIHRoYXQgaXQnbGxcbiAgICAgICAgICAgIC8vIGNhbGwgc2V0QXR0cmlidXRlLiBJZiB0aGUgdmFsdWUgaXMgYSBkaXJlY3RpdmUsIGl0J2xsIGRpcnR5IHRoZVxuICAgICAgICAgICAgLy8gY29tbWl0dGVyIGlmIGl0IGNhbGxzIHNldFZhbHVlKCkuXG4gICAgICAgICAgICBpZiAoIWlzRGlyZWN0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWl0dGVyLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbW1pdHRlci5jb21taXQoKTtcbiAgICB9XG59XG4vKipcbiAqIEEgUGFydCB0aGF0IGNvbnRyb2xzIGEgbG9jYXRpb24gd2l0aGluIGEgTm9kZSB0cmVlLiBMaWtlIGEgUmFuZ2UsIE5vZGVQYXJ0XG4gKiBoYXMgc3RhcnQgYW5kIGVuZCBsb2NhdGlvbnMgYW5kIGNhbiBzZXQgYW5kIHVwZGF0ZSB0aGUgTm9kZXMgYmV0d2VlbiB0aG9zZVxuICogbG9jYXRpb25zLlxuICpcbiAqIE5vZGVQYXJ0cyBzdXBwb3J0IHNldmVyYWwgdmFsdWUgdHlwZXM6IHByaW1pdGl2ZXMsIE5vZGVzLCBUZW1wbGF0ZVJlc3VsdHMsXG4gKiBhcyB3ZWxsIGFzIGFycmF5cyBhbmQgaXRlcmFibGVzIG9mIHRob3NlIHR5cGVzLlxuICovXG5leHBvcnQgY2xhc3MgTm9kZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIGNvbnRhaW5lci5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGFwcGVuZEludG8oY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIG5vZGUgKGJldHdlZW4gYHJlZmAgYW5kIGByZWZgJ3MgbmV4dFxuICAgICAqIHNpYmxpbmcpLiBCb3RoIGByZWZgIGFuZCBpdHMgbmV4dCBzaWJsaW5nIG11c3QgYmUgc3RhdGljLCB1bmNoYW5naW5nIG5vZGVzXG4gICAgICogc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhciBpbiBhIGxpdGVyYWwgc2VjdGlvbiBvZiBhIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgaW5zZXJ0QWZ0ZXJOb2RlKHJlZikge1xuICAgICAgICB0aGlzLnN0YXJ0Tm9kZSA9IHJlZjtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gcmVmLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoaXMgcGFydCBpbnRvIGEgcGFyZW50IHBhcnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBhcHBlbmRJbnRvUGFydChwYXJ0KSB7XG4gICAgICAgIHBhcnQuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHBhcnQuX19pbnNlcnQodGhpcy5lbmROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoaXMgcGFydCBhZnRlciB0aGUgYHJlZmAgcGFydC5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGluc2VydEFmdGVyUGFydChyZWYpIHtcbiAgICAgICAgcmVmLl9faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICAgICAgcmVmLmVuZE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXROb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9faW5zZXJ0KG5vZGUpIHtcbiAgICAgICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxuICAgIF9fY29tbWl0Tm9kZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX19pbnNlcnQodmFsdWUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9fY29tbWl0VGV4dCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zdGFydE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgICAgIC8vIElmIGB2YWx1ZWAgaXNuJ3QgYWxyZWFkeSBhIHN0cmluZywgd2UgZXhwbGljaXRseSBjb252ZXJ0IGl0IGhlcmUgaW4gY2FzZVxuICAgICAgICAvLyBpdCBjYW4ndCBiZSBpbXBsaWNpdGx5IGNvbnZlcnRlZCAtIGkuZS4gaXQncyBhIHN5bWJvbC5cbiAgICAgICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLnZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZUFzU3RyaW5nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVJbnN0YW5jZSAmJlxuICAgICAgICAgICAgdGhpcy52YWx1ZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgcHJvcGFnYXRlIHRoZSB0ZW1wbGF0ZSBwcm9jZXNzb3IgZnJvbSB0aGUgVGVtcGxhdGVSZXN1bHRcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgd2UgdXNlIGl0cyBzeW50YXggZXh0ZW5zaW9uLCBldGMuIFRoZSB0ZW1wbGF0ZSBmYWN0b3J5IGNvbWVzXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSByZW5kZXIgZnVuY3Rpb24gb3B0aW9ucyBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRlbXBsYXRlXG4gICAgICAgICAgICAvLyBjYWNoaW5nIGFuZCBwcmVwcm9jZXNzaW5nLlxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgdmFsdWUucHJvY2Vzc29yLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9fY29tbWl0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAgICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgICAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAgICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cbiAgICAgICAgLy8gSWYgX3ZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCBfdmFsdWUgd2lsbCBjb250YWluIHRoZSBOb2RlUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gcmVuZGVyLiBJZiBfdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIE5vZGVQYXJ0cy5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gcmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpdGVtUGFydHMucHVzaChpdGVtUGFydCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtUGFydC5hcHBlbmRJbnRvUGFydCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJ0Lmluc2VydEFmdGVyUGFydChpdGVtUGFydHNbcGFydEluZGV4IC0gMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbVBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoaXRlbVBhcnQgJiYgaXRlbVBhcnQuZW5kTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIoc3RhcnROb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXModGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSwgc3RhcnROb2RlLm5leHRTaWJsaW5nLCB0aGlzLmVuZE5vZGUpO1xuICAgIH1cbn1cbi8qKlxuICogSW1wbGVtZW50cyBhIGJvb2xlYW4gYXR0cmlidXRlLCByb3VnaGx5IGFzIGRlZmluZWQgaW4gdGhlIEhUTUxcbiAqIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIHRydXRoeSwgdGhlbiB0aGUgYXR0cmlidXRlIGlzIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mXG4gKiAnJy4gSWYgdGhlIHZhbHVlIGlzIGZhbHNleSwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gISF0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8qKlxuICogU2V0cyBhdHRyaWJ1dGUgdmFsdWVzIGZvciBQcm9wZXJ0eVBhcnRzLCBzbyB0aGF0IHRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlXG4gKiBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0cyBmb3IgYSBwcm9wZXJ0eS5cbiAqXG4gKiBJZiBhbiBleHByZXNzaW9uIGNvbnRyb2xzIHRoZSB3aG9sZSBwcm9wZXJ0eSB2YWx1ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiBhc3NpZ25lZCB0byB0aGUgcHJvcGVydHkgdW5kZXIgY29udHJvbC4gSWYgdGhlcmUgYXJlIHN0cmluZyBsaXRlcmFscyBvclxuICogbXVsdGlwbGUgZXhwcmVzc2lvbnMsIHRoZW4gdGhlIHN0cmluZ3MgYXJlIGV4cHJlc3Npb25zIGFyZSBpbnRlcnBvbGF0ZWQgaW50b1xuICogYSBzdHJpbmcgZmlyc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUNvbW1pdHRlciBleHRlbmRzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICAgICAgdGhpcy5zaW5nbGUgPVxuICAgICAgICAgICAgKHN0cmluZ3MubGVuZ3RoID09PSAyICYmIHN0cmluZ3NbMF0gPT09ICcnICYmIHN0cmluZ3NbMV0gPT09ICcnKTtcbiAgICB9XG4gICAgX2NyZWF0ZVBhcnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcGVydHlQYXJ0KHRoaXMpO1xuICAgIH1cbiAgICBfZ2V0VmFsdWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNpbmdsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydHNbMF0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLl9nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHRoaXMuX2dldFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG59XG4vLyBEZXRlY3QgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBzdXBwb3J0LiBJZiB0aGUgYGNhcHR1cmVgIHByb3BlcnR5IGlzIHJlYWRcbi8vIGZyb20gdGhlIG9wdGlvbnMgb2JqZWN0LCB0aGVuIG9wdGlvbnMgYXJlIHN1cHBvcnRlZC4gSWYgbm90LCB0aGVuIHRoZSB0aHJpZFxuLy8gYXJndW1lbnQgdG8gYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIGJvb2xlYW4gY2FwdHVyZVxuLy8gdmFsdWUgc28gd2Ugc2hvdWxkIG9ubHkgcGFzcyB0aGUgYGNhcHR1cmVgIHByb3BlcnR5LlxubGV0IGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IGZhbHNlO1xudHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBnZXQgY2FwdHVyZSgpIHtcbiAgICAgICAgICAgIGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xufVxuY2F0Y2ggKF9lKSB7XG59XG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudE5hbWUsIGV2ZW50Q29udGV4dCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgdGhpcy5ldmVudENvbnRleHQgPSBldmVudENvbnRleHQ7XG4gICAgICAgIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50ID0gKGUpID0+IHRoaXMuaGFuZGxlRXZlbnQoZSk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX19wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3TGlzdGVuZXIgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gbmV3TGlzdGVuZXIgPT0gbnVsbCB8fFxuICAgICAgICAgICAgb2xkTGlzdGVuZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIChuZXdMaXN0ZW5lci5jYXB0dXJlICE9PSBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09IG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT0gb2xkTGlzdGVuZXIucGFzc2l2ZSk7XG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID0gbmV3TGlzdGVuZXIgIT0gbnVsbCAmJiAob2xkTGlzdGVuZXIgPT0gbnVsbCB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG4gICAgICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZEFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9fb3B0aW9ucyA9IGdldE9wdGlvbnMobmV3TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5jYWxsKHRoaXMuZXZlbnRDb250ZXh0IHx8IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBXZSBjb3B5IG9wdGlvbnMgYmVjYXVzZSBvZiB0aGUgaW5jb25zaXN0ZW50IGJlaGF2aW9yIG9mIGJyb3dzZXJzIHdoZW4gcmVhZGluZ1xuLy8gdGhlIHRoaXJkIGFyZ3VtZW50IG9mIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyLiBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBvcHRpb25zXG4vLyBhdCBhbGwuIENocm9tZSA0MSBvbmx5IHJlYWRzIGBjYXB0dXJlYCBpZiB0aGUgYXJndW1lbnQgaXMgYW4gb2JqZWN0LlxuY29uc3QgZ2V0T3B0aW9ucyA9IChvKSA9PiBvICYmXG4gICAgKGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA/XG4gICAgICAgIHsgY2FwdHVyZTogby5jYXB0dXJlLCBwYXNzaXZlOiBvLnBhc3NpdmUsIG9uY2U6IG8ub25jZSB9IDpcbiAgICAgICAgby5jYXB0dXJlKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IE5vZGVQYXJ0IH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IGNvbnN0IHBhcnRzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHJlc3VsdCBvciBvdGhlciB2YWx1ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgQW55IHZhbHVlIHJlbmRlcmFibGUgYnkgTm9kZVBhcnQgLSB0eXBpY2FsbHkgYSBUZW1wbGF0ZVJlc3VsdFxuICogICAgIGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZyBsaWtlIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBSZW5kZXJPcHRpb25zIGZvciB0aGUgZW50aXJlIHJlbmRlciB0cmVlIHJlbmRlcmVkIHRvIHRoaXNcbiAqICAgICBjb250YWluZXIuIFJlbmRlciBvcHRpb25zIG11c3QgKm5vdCogY2hhbmdlIGJldHdlZW4gcmVuZGVycyB0byB0aGUgc2FtZVxuICogICAgIGNvbnRhaW5lciwgYXMgdGhvc2UgY2hhbmdlcyB3aWxsIG5vdCBlZmZlY3QgcHJldmlvdXNseSByZW5kZXJlZCBET00uXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAocmVzdWx0LCBjb250YWluZXIsIG9wdGlvbnMpID0+IHtcbiAgICBsZXQgcGFydCA9IHBhcnRzLmdldChjb250YWluZXIpO1xuICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQgPSBuZXcgTm9kZVBhcnQoT2JqZWN0LmFzc2lnbih7IHRlbXBsYXRlRmFjdG9yeSB9LCBvcHRpb25zKSkpO1xuICAgICAgICBwYXJ0LmFwcGVuZEludG8oY29udGFpbmVyKTtcbiAgICB9XG4gICAgcGFydC5zZXRWYWx1ZShyZXN1bHQpO1xuICAgIHBhcnQuY29tbWl0KCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVuZGVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogTW9kdWxlIHRvIGFkZCBzaGFkeSBET00vc2hhZHkgQ1NTIHBvbHlmaWxsIHN1cHBvcnQgdG8gbGl0LWh0bWwgdGVtcGxhdGVcbiAqIHJlbmRlcmluZy4gU2VlIHRoZSBbW3JlbmRlcl1dIG1ldGhvZCBmb3IgZGV0YWlscy5cbiAqXG4gKiBAbW9kdWxlIHNoYWR5LXJlbmRlclxuICogQHByZWZlcnJlZFxuICovXG4vKipcbiAqIERvIG5vdCByZW1vdmUgdGhpcyBjb21tZW50OyBpdCBrZWVwcyB0eXBlZG9jIGZyb20gbWlzcGxhY2luZyB0aGUgbW9kdWxlXG4gKiBkb2NzLlxuICovXG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGluc2VydE5vZGVJbnRvVGVtcGxhdGUsIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlIH0gZnJvbSAnLi9tb2RpZnktdGVtcGxhdGUuanMnO1xuaW1wb3J0IHsgcGFydHMsIHJlbmRlciBhcyBsaXRSZW5kZXIgfSBmcm9tICcuL3JlbmRlci5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0ZUNhY2hlcyB9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQgeyBtYXJrZXIsIFRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5leHBvcnQgeyBodG1sLCBzdmcsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuLy8gR2V0IGEga2V5IHRvIGxvb2t1cCBpbiBgdGVtcGxhdGVDYWNoZXNgLlxuY29uc3QgZ2V0VGVtcGxhdGVDYWNoZUtleSA9ICh0eXBlLCBzY29wZU5hbWUpID0+IGAke3R5cGV9LS0ke3Njb3BlTmFtZX1gO1xubGV0IGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSB0cnVlO1xuaWYgKHR5cGVvZiB3aW5kb3cuU2hhZHlDU1MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiA9IGZhbHNlO1xufVxuZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGVEb20gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKGBJbmNvbXBhdGlibGUgU2hhZHlDU1MgdmVyc2lvbiBkZXRlY3RlZC4gYCArXG4gICAgICAgIGBQbGVhc2UgdXBkYXRlIHRvIGF0IGxlYXN0IEB3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqc0AyLjAuMiBhbmQgYCArXG4gICAgICAgIGBAd2ViY29tcG9uZW50cy9zaGFkeWNzc0AxLjMuMS5gKTtcbiAgICBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uID0gZmFsc2U7XG59XG4vKipcbiAqIFRlbXBsYXRlIGZhY3Rvcnkgd2hpY2ggc2NvcGVzIHRlbXBsYXRlIERPTSB1c2luZyBTaGFkeUNTUy5cbiAqIEBwYXJhbSBzY29wZU5hbWUge3N0cmluZ31cbiAqL1xuY29uc3Qgc2hhZHlUZW1wbGF0ZUZhY3RvcnkgPSAoc2NvcGVOYW1lKSA9PiAocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBnZXRUZW1wbGF0ZUNhY2hlS2V5KHJlc3VsdC50eXBlLCBzY29wZU5hbWUpO1xuICAgIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KGNhY2hlS2V5KTtcbiAgICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICAgICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwKCksXG4gICAgICAgICAgICBrZXlTdHJpbmc6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQoY2FjaGVLZXksIHRlbXBsYXRlQ2FjaGUpO1xuICAgIH1cbiAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gcmVzdWx0LnN0cmluZ3Muam9pbihtYXJrZXIpO1xuICAgIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlc3VsdC5nZXRUZW1wbGF0ZUVsZW1lbnQoKTtcbiAgICAgICAgaWYgKGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24pIHtcbiAgICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGVEb20oZWxlbWVudCwgc2NvcGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQsIGVsZW1lbnQpO1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5zZXQoa2V5LCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5jb25zdCBURU1QTEFURV9UWVBFUyA9IFsnaHRtbCcsICdzdmcnXTtcbi8qKlxuICogUmVtb3ZlcyBhbGwgc3R5bGUgZWxlbWVudHMgZnJvbSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBzY29wZU5hbWUuXG4gKi9cbmNvbnN0IHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMgPSAoc2NvcGVOYW1lKSA9PiB7XG4gICAgVEVNUExBVEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoZ2V0VGVtcGxhdGVDYWNoZUtleSh0eXBlLCBzY29wZU5hbWUpKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZXMua2V5U3RyaW5nLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlbGVtZW50OiB7IGNvbnRlbnQgfSB9ID0gdGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgLy8gSUUgMTEgZG9lc24ndCBzdXBwb3J0IHRoZSBpdGVyYWJsZSBwYXJhbSBTZXQgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmFkZChzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZSh0ZW1wbGF0ZSwgc3R5bGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuY29uc3Qgc2hhZHlSZW5kZXJTZXQgPSBuZXcgU2V0KCk7XG4vKipcbiAqIEZvciB0aGUgZ2l2ZW4gc2NvcGUgbmFtZSwgZW5zdXJlcyB0aGF0IFNoYWR5Q1NTIHN0eWxlIHNjb3BpbmcgaXMgcGVyZm9ybWVkLlxuICogVGhpcyBpcyBkb25lIGp1c3Qgb25jZSBwZXIgc2NvcGUgbmFtZSBzbyB0aGUgZnJhZ21lbnQgYW5kIHRlbXBsYXRlIGNhbm5vdFxuICogYmUgbW9kaWZpZWQuXG4gKiAoMSkgZXh0cmFjdHMgc3R5bGVzIGZyb20gdGhlIHJlbmRlcmVkIGZyYWdtZW50IGFuZCBoYW5kcyB0aGVtIHRvIFNoYWR5Q1NTXG4gKiB0byBiZSBzY29wZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudFxuICogKDIpIHJlbW92ZXMgc3R5bGUgZWxlbWVudHMgZnJvbSBhbGwgbGl0LWh0bWwgVGVtcGxhdGVzIGZvciB0aGlzIHNjb3BlIG5hbWUuXG4gKlxuICogTm90ZSwgPHN0eWxlPiBlbGVtZW50cyBjYW4gb25seSBiZSBwbGFjZWQgaW50byB0ZW1wbGF0ZXMgZm9yIHRoZVxuICogaW5pdGlhbCByZW5kZXJpbmcgb2YgdGhlIHNjb3BlLiBJZiA8c3R5bGU+IGVsZW1lbnRzIGFyZSBpbmNsdWRlZCBpbiB0ZW1wbGF0ZXNcbiAqIGR5bmFtaWNhbGx5IHJlbmRlcmVkIHRvIHRoZSBzY29wZSAoYWZ0ZXIgdGhlIGZpcnN0IHNjb3BlIHJlbmRlciksIHRoZXkgd2lsbFxuICogbm90IGJlIHNjb3BlZCBhbmQgdGhlIDxzdHlsZT4gd2lsbCBiZSBsZWZ0IGluIHRoZSB0ZW1wbGF0ZSBhbmQgcmVuZGVyZWRcbiAqIG91dHB1dC5cbiAqL1xuY29uc3QgcHJlcGFyZVRlbXBsYXRlU3R5bGVzID0gKHNjb3BlTmFtZSwgcmVuZGVyZWRET00sIHRlbXBsYXRlKSA9PiB7XG4gICAgc2hhZHlSZW5kZXJTZXQuYWRkKHNjb3BlTmFtZSk7XG4gICAgLy8gSWYgYHJlbmRlcmVkRE9NYCBpcyBzdGFtcGVkIGZyb20gYSBUZW1wbGF0ZSwgdGhlbiB3ZSBuZWVkIHRvIGVkaXQgdGhhdFxuICAgIC8vIFRlbXBsYXRlJ3MgdW5kZXJseWluZyB0ZW1wbGF0ZSBlbGVtZW50LiBPdGhlcndpc2UsIHdlIGNyZWF0ZSBvbmUgaGVyZVxuICAgIC8vIHRvIGdpdmUgdG8gU2hhZHlDU1MsIHdoaWNoIHN0aWxsIHJlcXVpcmVzIG9uZSB3aGlsZSBzY29waW5nLlxuICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9ICEhdGVtcGxhdGUgPyB0ZW1wbGF0ZS5lbGVtZW50IDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAvLyBNb3ZlIHN0eWxlcyBvdXQgb2YgcmVuZGVyZWQgRE9NIGFuZCBzdG9yZS5cbiAgICBjb25zdCBzdHlsZXMgPSByZW5kZXJlZERPTS5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzdHlsZXM7XG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIHN0eWxlcywgc2tpcCB1bm5lY2Vzc2FyeSB3b3JrXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBFbnN1cmUgcHJlcGFyZVRlbXBsYXRlU3R5bGVzIGlzIGNhbGxlZCB0byBzdXBwb3J0IGFkZGluZ1xuICAgICAgICAvLyBzdHlsZXMgdmlhIGBwcmVwYXJlQWRvcHRlZENzc1RleHRgIHNpbmNlIHRoYXQgcmVxdWlyZXMgdGhhdFxuICAgICAgICAvLyBgcHJlcGFyZVRlbXBsYXRlU3R5bGVzYCBpcyBjYWxsZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFNoYWR5Q1NTIHdpbGwgb25seSB1cGRhdGUgc3R5bGVzIGNvbnRhaW5pbmcgQGFwcGx5IGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAvLyBnaXZlbiB0byBgcHJlcGFyZVRlbXBsYXRlU3R5bGVzYC4gSWYgbm8gbGl0IFRlbXBsYXRlIHdhcyBnaXZlbixcbiAgICAgICAgLy8gU2hhZHlDU1Mgd2lsbCBub3QgYmUgYWJsZSB0byB1cGRhdGUgdXNlcyBvZiBAYXBwbHkgaW4gYW55IHJlbGV2YW50XG4gICAgICAgIC8vIHRlbXBsYXRlLiBIb3dldmVyLCB0aGlzIGlzIG5vdCBhIHByb2JsZW0gYmVjYXVzZSB3ZSBvbmx5IGNyZWF0ZSB0aGVcbiAgICAgICAgLy8gdGVtcGxhdGUgZm9yIHRoZSBwdXJwb3NlIG9mIHN1cHBvcnRpbmcgYHByZXBhcmVBZG9wdGVkQ3NzVGV4dGAsXG4gICAgICAgIC8vIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBAYXBwbHkgYXQgYWxsLlxuICAgICAgICB3aW5kb3cuU2hhZHlDU1MucHJlcGFyZVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlRWxlbWVudCwgc2NvcGVOYW1lKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25kZW5zZWRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgLy8gQ29sbGVjdCBzdHlsZXMgaW50byBhIHNpbmdsZSBzdHlsZS4gVGhpcyBoZWxwcyB1cyBtYWtlIHN1cmUgU2hhZHlDU1NcbiAgICAvLyBtYW5pcHVsYXRpb25zIHdpbGwgbm90IHByZXZlbnQgdXMgZnJvbSBiZWluZyBhYmxlIHRvIGZpeCB1cCB0ZW1wbGF0ZVxuICAgIC8vIHBhcnQgaW5kaWNlcy5cbiAgICAvLyBOT1RFOiBjb2xsZWN0aW5nIHN0eWxlcyBpcyBpbmVmZmljaWVudCBmb3IgYnJvd3NlcnMgYnV0IFNoYWR5Q1NTXG4gICAgLy8gY3VycmVudGx5IGRvZXMgdGhpcyBhbnl3YXkuIFdoZW4gaXQgZG9lcyBub3QsIHRoaXMgc2hvdWxkIGJlIGNoYW5nZWQuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgIGNvbmRlbnNlZFN0eWxlLnRleHRDb250ZW50ICs9IHN0eWxlLnRleHRDb250ZW50O1xuICAgIH1cbiAgICAvLyBSZW1vdmUgc3R5bGVzIGZyb20gbmVzdGVkIHRlbXBsYXRlcyBpbiB0aGlzIHNjb3BlLlxuICAgIHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMoc2NvcGVOYW1lKTtcbiAgICAvLyBBbmQgdGhlbiBwdXQgdGhlIGNvbmRlbnNlZCBzdHlsZSBpbnRvIHRoZSBcInJvb3RcIiB0ZW1wbGF0ZSBwYXNzZWQgaW4gYXNcbiAgICAvLyBgdGVtcGxhdGVgLlxuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZUVsZW1lbnQuY29udGVudDtcbiAgICBpZiAoISF0ZW1wbGF0ZSkge1xuICAgICAgICBpbnNlcnROb2RlSW50b1RlbXBsYXRlKHRlbXBsYXRlLCBjb25kZW5zZWRTdHlsZSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGNvbmRlbnNlZFN0eWxlLCBjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IFNoYWR5Q1NTIGdldHMgdGhlIHRlbXBsYXRlIHRoYXQgYGxpdC1odG1sYFxuICAgIC8vIHdpbGwgYWN0dWFsbHkgcmVuZGVyIHNvIHRoYXQgaXQgY2FuIHVwZGF0ZSB0aGUgc3R5bGUgaW5zaWRlIHdoZW5cbiAgICAvLyBuZWVkZWQgKGUuZy4gQGFwcGx5IG5hdGl2ZSBTaGFkb3cgRE9NIGNhc2UpLlxuICAgIHdpbmRvdy5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGVTdHlsZXModGVtcGxhdGVFbGVtZW50LCBzY29wZU5hbWUpO1xuICAgIGNvbnN0IHN0eWxlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgIGlmICh3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93ICYmIHN0eWxlICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFdoZW4gaW4gbmF0aXZlIFNoYWRvdyBET00sIGVuc3VyZSB0aGUgc3R5bGUgY3JlYXRlZCBieSBTaGFkeUNTUyBpc1xuICAgICAgICAvLyBpbmNsdWRlZCBpbiBpbml0aWFsbHkgcmVuZGVyZWQgb3V0cHV0IChgcmVuZGVyZWRET01gKS5cbiAgICAgICAgcmVuZGVyZWRET00uaW5zZXJ0QmVmb3JlKHN0eWxlLmNsb25lTm9kZSh0cnVlKSwgcmVuZGVyZWRET00uZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCEhdGVtcGxhdGUpIHtcbiAgICAgICAgLy8gV2hlbiBubyBzdHlsZSBpcyBsZWZ0IGluIHRoZSB0ZW1wbGF0ZSwgcGFydHMgd2lsbCBiZSBicm9rZW4gYXMgYVxuICAgICAgICAvLyByZXN1bHQuIFRvIGZpeCB0aGlzLCB3ZSBwdXQgYmFjayB0aGUgc3R5bGUgbm9kZSBTaGFkeUNTUyByZW1vdmVkXG4gICAgICAgIC8vIGFuZCB0aGVuIHRlbGwgbGl0IHRvIHJlbW92ZSB0aGF0IG5vZGUgZnJvbSB0aGUgdGVtcGxhdGUuXG4gICAgICAgIC8vIFRoZXJlIGNhbiBiZSBubyBzdHlsZSBpbiB0aGUgdGVtcGxhdGUgaW4gMiBjYXNlcyAoMSkgd2hlbiBTaGFkeSBET01cbiAgICAgICAgLy8gaXMgaW4gdXNlLCBTaGFkeUNTUyByZW1vdmVzIGFsbCBzdHlsZXMsICgyKSB3aGVuIG5hdGl2ZSBTaGFkb3cgRE9NXG4gICAgICAgIC8vIGlzIGluIHVzZSBTaGFkeUNTUyByZW1vdmVzIHRoZSBzdHlsZSBpZiBpdCBjb250YWlucyBubyBjb250ZW50LlxuICAgICAgICAvLyBOT1RFLCBTaGFkeUNTUyBjcmVhdGVzIGl0cyBvd24gc3R5bGUgc28gd2UgY2FuIHNhZmVseSBhZGQvcmVtb3ZlXG4gICAgICAgIC8vIGBjb25kZW5zZWRTdHlsZWAgaGVyZS5cbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUoY29uZGVuc2VkU3R5bGUsIGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHJlbW92ZXMuYWRkKGNvbmRlbnNlZFN0eWxlKTtcbiAgICAgICAgcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUodGVtcGxhdGUsIHJlbW92ZXMpO1xuICAgIH1cbn07XG4vKipcbiAqIEV4dGVuc2lvbiB0byB0aGUgc3RhbmRhcmQgYHJlbmRlcmAgbWV0aG9kIHdoaWNoIHN1cHBvcnRzIHJlbmRlcmluZ1xuICogdG8gU2hhZG93Um9vdHMgd2hlbiB0aGUgU2hhZHlET00gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3NoYWR5ZG9tKVxuICogYW5kIFNoYWR5Q1NTIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9zaGFkeWNzcykgcG9seWZpbGxzIGFyZSB1c2VkXG4gKiBvciB3aGVuIHRoZSB3ZWJjb21wb25lbnRzanNcbiAqIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMpIHBvbHlmaWxsIGlzIHVzZWQuXG4gKlxuICogQWRkcyBhIGBzY29wZU5hbWVgIG9wdGlvbiB3aGljaCBpcyB1c2VkIHRvIHNjb3BlIGVsZW1lbnQgRE9NIGFuZCBzdHlsZXNoZWV0c1xuICogd2hlbiBuYXRpdmUgU2hhZG93RE9NIGlzIHVuYXZhaWxhYmxlLiBUaGUgYHNjb3BlTmFtZWAgd2lsbCBiZSBhZGRlZCB0b1xuICogdGhlIGNsYXNzIGF0dHJpYnV0ZSBvZiBhbGwgcmVuZGVyZWQgRE9NLiBJbiBhZGRpdGlvbiwgYW55IHN0eWxlIGVsZW1lbnRzIHdpbGxcbiAqIGJlIGF1dG9tYXRpY2FsbHkgcmUtd3JpdHRlbiB3aXRoIHRoaXMgYHNjb3BlTmFtZWAgc2VsZWN0b3IgYW5kIG1vdmVkIG91dFxuICogb2YgdGhlIHJlbmRlcmVkIERPTSBhbmQgaW50byB0aGUgZG9jdW1lbnQgYDxoZWFkPmAuXG4gKlxuICogSXQgaXMgY29tbW9uIHRvIHVzZSB0aGlzIHJlbmRlciBtZXRob2QgaW4gY29uanVuY3Rpb24gd2l0aCBhIGN1c3RvbSBlbGVtZW50XG4gKiB3aGljaCByZW5kZXJzIGEgc2hhZG93Um9vdC4gV2hlbiB0aGlzIGlzIGRvbmUsIHR5cGljYWxseSB0aGUgZWxlbWVudCdzXG4gKiBgbG9jYWxOYW1lYCBzaG91bGQgYmUgdXNlZCBhcyB0aGUgYHNjb3BlTmFtZWAuXG4gKlxuICogSW4gYWRkaXRpb24gdG8gRE9NIHNjb3BpbmcsIFNoYWR5Q1NTIGFsc28gc3VwcG9ydHMgYSBiYXNpYyBzaGltIGZvciBjc3NcbiAqIGN1c3RvbSBwcm9wZXJ0aWVzIChuZWVkZWQgb25seSBvbiBvbGRlciBicm93c2VycyBsaWtlIElFMTEpIGFuZCBhIHNoaW0gZm9yXG4gKiBhIGRlcHJlY2F0ZWQgZmVhdHVyZSBjYWxsZWQgYEBhcHBseWAgdGhhdCBzdXBwb3J0cyBhcHBseWluZyBhIHNldCBvZiBjc3NcbiAqIGN1c3RvbSBwcm9wZXJ0aWVzIHRvIGEgZ2l2ZW4gbG9jYXRpb24uXG4gKlxuICogVXNhZ2UgY29uc2lkZXJhdGlvbnM6XG4gKlxuICogKiBQYXJ0IHZhbHVlcyBpbiBgPHN0eWxlPmAgZWxlbWVudHMgYXJlIG9ubHkgYXBwbGllZCB0aGUgZmlyc3QgdGltZSBhIGdpdmVuXG4gKiBgc2NvcGVOYW1lYCByZW5kZXJzLiBTdWJzZXF1ZW50IGNoYW5nZXMgdG8gcGFydHMgaW4gc3R5bGUgZWxlbWVudHMgd2lsbCBoYXZlXG4gKiBubyBlZmZlY3QuIEJlY2F1c2Ugb2YgdGhpcywgcGFydHMgaW4gc3R5bGUgZWxlbWVudHMgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3JcbiAqIHZhbHVlcyB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlLCBmb3IgZXhhbXBsZSBwYXJ0cyB0aGF0IHNldCBzY29wZS13aWRlIHRoZW1lXG4gKiB2YWx1ZXMgb3IgcGFydHMgd2hpY2ggcmVuZGVyIHNoYXJlZCBzdHlsZSBlbGVtZW50cy5cbiAqXG4gKiAqIE5vdGUsIGR1ZSB0byBhIGxpbWl0YXRpb24gb2YgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCByZW5kZXJpbmcgaW4gYVxuICogY3VzdG9tIGVsZW1lbnQncyBgY29uc3RydWN0b3JgIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQgcmVuZGVyaW5nIHNob3VsZFxuICogZWl0aGVyIGRvbmUgYXN5bmNocm9ub3VzbHksIGZvciBleGFtcGxlIGF0IG1pY3JvdGFzayB0aW1pbmcgKGZvciBleGFtcGxlXG4gKiBgUHJvbWlzZS5yZXNvbHZlKClgKSwgb3IgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIGVsZW1lbnQnc1xuICogYGNvbm5lY3RlZENhbGxiYWNrYCBydW5zLlxuICpcbiAqIFVzYWdlIGNvbnNpZGVyYXRpb25zIHdoZW4gdXNpbmcgc2hpbW1lZCBjdXN0b20gcHJvcGVydGllcyBvciBgQGFwcGx5YDpcbiAqXG4gKiAqIFdoZW5ldmVyIGFueSBkeW5hbWljIGNoYW5nZXMgYXJlIG1hZGUgd2hpY2ggYWZmZWN0XG4gKiBjc3MgY3VzdG9tIHByb3BlcnRpZXMsIGBTaGFkeUNTUy5zdHlsZUVsZW1lbnQoZWxlbWVudClgIG11c3QgYmUgY2FsbGVkXG4gKiB0byB1cGRhdGUgdGhlIGVsZW1lbnQuIFRoZXJlIGFyZSB0d28gY2FzZXMgd2hlbiB0aGlzIGlzIG5lZWRlZDpcbiAqICgxKSB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gYSBuZXcgcGFyZW50LCAoMikgYSBjbGFzcyBpcyBhZGRlZCB0byB0aGVcbiAqIGVsZW1lbnQgdGhhdCBjYXVzZXMgaXQgdG8gbWF0Y2ggZGlmZmVyZW50IGN1c3RvbSBwcm9wZXJ0aWVzLlxuICogVG8gYWRkcmVzcyB0aGUgZmlyc3QgY2FzZSB3aGVuIHJlbmRlcmluZyBhIGN1c3RvbSBlbGVtZW50LCBgc3R5bGVFbGVtZW50YFxuICogc2hvdWxkIGJlIGNhbGxlZCBpbiB0aGUgZWxlbWVudCdzIGBjb25uZWN0ZWRDYWxsYmFja2AuXG4gKlxuICogKiBTaGltbWVkIGN1c3RvbSBwcm9wZXJ0aWVzIG1heSBvbmx5IGJlIGRlZmluZWQgZWl0aGVyIGZvciBhbiBlbnRpcmVcbiAqIHNoYWRvd1Jvb3QgKGZvciBleGFtcGxlLCBpbiBhIGA6aG9zdGAgcnVsZSkgb3IgdmlhIGEgcnVsZSB0aGF0IGRpcmVjdGx5XG4gKiBtYXRjaGVzIGFuIGVsZW1lbnQgd2l0aCBhIHNoYWRvd1Jvb3QuIEluIG90aGVyIHdvcmRzLCBpbnN0ZWFkIG9mIGZsb3dpbmcgZnJvbVxuICogcGFyZW50IHRvIGNoaWxkIGFzIGRvIG5hdGl2ZSBjc3MgY3VzdG9tIHByb3BlcnRpZXMsIHNoaW1tZWQgY3VzdG9tIHByb3BlcnRpZXNcbiAqIGZsb3cgb25seSBmcm9tIHNoYWRvd1Jvb3RzIHRvIG5lc3RlZCBzaGFkb3dSb290cy5cbiAqXG4gKiAqIFdoZW4gdXNpbmcgYEBhcHBseWAgbWl4aW5nIGNzcyBzaG9ydGhhbmQgcHJvcGVydHkgbmFtZXMgd2l0aFxuICogbm9uLXNob3J0aGFuZCBuYW1lcyAoZm9yIGV4YW1wbGUgYGJvcmRlcmAgYW5kIGBib3JkZXItd2lkdGhgKSBpcyBub3RcbiAqIHN1cHBvcnRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChyZXN1bHQsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgIW9wdGlvbnMuc2NvcGVOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGBzY29wZU5hbWVgIG9wdGlvbiBpcyByZXF1aXJlZC4nKTtcbiAgICB9XG4gICAgY29uc3Qgc2NvcGVOYW1lID0gb3B0aW9ucy5zY29wZU5hbWU7XG4gICAgY29uc3QgaGFzUmVuZGVyZWQgPSBwYXJ0cy5oYXMoY29udGFpbmVyKTtcbiAgICBjb25zdCBuZWVkc1Njb3BpbmcgPSBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uICYmXG4gICAgICAgIGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMTEgLyogTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICovICYmXG4gICAgICAgICEhY29udGFpbmVyLmhvc3Q7XG4gICAgLy8gSGFuZGxlIGZpcnN0IHJlbmRlciB0byBhIHNjb3BlIHNwZWNpYWxseS4uLlxuICAgIGNvbnN0IGZpcnN0U2NvcGVSZW5kZXIgPSBuZWVkc1Njb3BpbmcgJiYgIXNoYWR5UmVuZGVyU2V0LmhhcyhzY29wZU5hbWUpO1xuICAgIC8vIE9uIGZpcnN0IHNjb3BlIHJlbmRlciwgcmVuZGVyIGludG8gYSBmcmFnbWVudDsgdGhpcyBjYW5ub3QgYmUgYSBzaW5nbGVcbiAgICAvLyBmcmFnbWVudCB0aGF0IGlzIHJldXNlZCBzaW5jZSBuZXN0ZWQgcmVuZGVycyBjYW4gb2NjdXIgc3luY2hyb25vdXNseS5cbiAgICBjb25zdCByZW5kZXJDb250YWluZXIgPSBmaXJzdFNjb3BlUmVuZGVyID8gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpIDogY29udGFpbmVyO1xuICAgIGxpdFJlbmRlcihyZXN1bHQsIHJlbmRlckNvbnRhaW5lciwgT2JqZWN0LmFzc2lnbih7IHRlbXBsYXRlRmFjdG9yeTogc2hhZHlUZW1wbGF0ZUZhY3Rvcnkoc2NvcGVOYW1lKSB9LCBvcHRpb25zKSk7XG4gICAgLy8gV2hlbiBwZXJmb3JtaW5nIGZpcnN0IHNjb3BlIHJlbmRlcixcbiAgICAvLyAoMSkgV2UndmUgcmVuZGVyZWQgaW50byBhIGZyYWdtZW50IHNvIHRoYXQgdGhlcmUncyBhIGNoYW5jZSB0b1xuICAgIC8vIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgIGJlZm9yZSBzdWItZWxlbWVudHMgaGl0IHRoZSBET01cbiAgICAvLyAod2hpY2ggbWlnaHQgY2F1c2UgdGhlbSB0byByZW5kZXIgYmFzZWQgb24gYSBjb21tb24gcGF0dGVybiBvZlxuICAgIC8vIHJlbmRlcmluZyBpbiBhIGN1c3RvbSBlbGVtZW50J3MgYGNvbm5lY3RlZENhbGxiYWNrYCk7XG4gICAgLy8gKDIpIFNjb3BlIHRoZSB0ZW1wbGF0ZSB3aXRoIFNoYWR5Q1NTIG9uZSB0aW1lIG9ubHkgZm9yIHRoaXMgc2NvcGUuXG4gICAgLy8gKDMpIFJlbmRlciB0aGUgZnJhZ21lbnQgaW50byB0aGUgY29udGFpbmVyIGFuZCBtYWtlIHN1cmUgdGhlXG4gICAgLy8gY29udGFpbmVyIGtub3dzIGl0cyBgcGFydGAgaXMgdGhlIG9uZSB3ZSBqdXN0IHJlbmRlcmVkLiBUaGlzIGVuc3VyZXNcbiAgICAvLyBET00gd2lsbCBiZSByZS11c2VkIG9uIHN1YnNlcXVlbnQgcmVuZGVycy5cbiAgICBpZiAoZmlyc3RTY29wZVJlbmRlcikge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHMuZ2V0KHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIHBhcnRzLmRlbGV0ZShyZW5kZXJDb250YWluZXIpO1xuICAgICAgICAvLyBTaGFkeUNTUyBtaWdodCBoYXZlIHN0eWxlIHNoZWV0cyAoZS5nLiBmcm9tIGBwcmVwYXJlQWRvcHRlZENzc1RleHRgKVxuICAgICAgICAvLyB0aGF0IHNob3VsZCBhcHBseSB0byBgcmVuZGVyQ29udGFpbmVyYCBldmVuIGlmIHRoZSByZW5kZXJlZCB2YWx1ZSBpc1xuICAgICAgICAvLyBub3QgYSBUZW1wbGF0ZUluc3RhbmNlLiBIb3dldmVyLCBpdCB3aWxsIG9ubHkgaW5zZXJ0IHNjb3BlZCBzdHlsZXNcbiAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQgaWYgYHByZXBhcmVUZW1wbGF0ZVN0eWxlc2AgaGFzIGFscmVhZHkgYmVlbiBjYWxsZWRcbiAgICAgICAgLy8gZm9yIHRoZSBnaXZlbiBzY29wZSBuYW1lLlxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHBhcnQudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlID9cbiAgICAgICAgICAgIHBhcnQudmFsdWUudGVtcGxhdGUgOlxuICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICBwcmVwYXJlVGVtcGxhdGVTdHlsZXMoc2NvcGVOYW1lLCByZW5kZXJDb250YWluZXIsIHRlbXBsYXRlKTtcbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJDb250YWluZXIpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0KTtcbiAgICB9XG4gICAgLy8gQWZ0ZXIgZWxlbWVudHMgaGF2ZSBoaXQgdGhlIERPTSwgdXBkYXRlIHN0eWxpbmcgaWYgdGhpcyBpcyB0aGVcbiAgICAvLyBpbml0aWFsIHJlbmRlciB0byB0aGlzIGNvbnRhaW5lci5cbiAgICAvLyBUaGlzIGlzIG5lZWRlZCB3aGVuZXZlciBkeW5hbWljIGNoYW5nZXMgYXJlIG1hZGUgc28gaXQgd291bGQgYmVcbiAgICAvLyBzYWZlc3QgdG8gZG8gZXZlcnkgcmVuZGVyOyBob3dldmVyLCB0aGlzIHdvdWxkIHJlZ3Jlc3MgcGVyZm9ybWFuY2VcbiAgICAvLyBzbyB3ZSBsZWF2ZSBpdCB1cCB0byB0aGUgdXNlciB0byBjYWxsIGBTaGFkeUNTUy5zdHlsZUVsZW1lbnRgXG4gICAgLy8gZm9yIGR5bmFtaWMgY2hhbmdlcy5cbiAgICBpZiAoIWhhc1JlbmRlcmVkICYmIG5lZWRzU2NvcGluZykge1xuICAgICAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVFbGVtZW50KGNvbnRhaW5lci5ob3N0KTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hhZHktcmVuZGVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IG1hcmtlciwgVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmFjdG9yeShyZXN1bHQpIHtcbiAgICBsZXQgdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGVzLmdldChyZXN1bHQudHlwZSk7XG4gICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgICAgICAgc3RyaW5nc0FycmF5OiBuZXcgV2Vha01hcCgpLFxuICAgICAgICAgICAga2V5U3RyaW5nOiBuZXcgTWFwKClcbiAgICAgICAgfTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZXMuc2V0KHJlc3VsdC50eXBlLCB0ZW1wbGF0ZUNhY2hlKTtcbiAgICB9XG4gICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICBpZiAodGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIC8vIElmIHRoZSBUZW1wbGF0ZVN0cmluZ3NBcnJheSBpcyBuZXcsIGdlbmVyYXRlIGEga2V5IGZyb20gdGhlIHN0cmluZ3NcbiAgICAvLyBUaGlzIGtleSBpcyBzaGFyZWQgYmV0d2VlbiBhbGwgdGVtcGxhdGVzIHdpdGggaWRlbnRpY2FsIGNvbnRlbnRcbiAgICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG4gICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5nZXQoa2V5KTtcbiAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5vdCBzZWVuIHRoaXMga2V5IGJlZm9yZSwgY3JlYXRlIGEgbmV3IFRlbXBsYXRlXG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAgICAgLy8gQ2FjaGUgdGhlIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICAgICAgICB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5zZXQoa2V5LCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIC8vIENhY2hlIGFsbCBmdXR1cmUgcXVlcmllcyBmb3IgdGhpcyBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICAgIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXAoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLWZhY3RvcnkuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cbmltcG9ydCB7IGlzQ0VQb2x5ZmlsbCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGlzVGVtcGxhdGVQYXJ0QWN0aXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGEgYFRlbXBsYXRlYCB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgRE9NIGFuZCB1cGRhdGVkXG4gKiB3aXRoIG5ldyB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcHJvY2Vzc29yLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX19wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICB1cGRhdGUodmFsdWVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX19wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY2xvbmUoKSB7XG4gICAgICAgIC8vIFRoZXJlIGFyZSBhIG51bWJlciBvZiBzdGVwcyBpbiB0aGUgbGlmZWN5Y2xlIG9mIGEgdGVtcGxhdGUgaW5zdGFuY2Unc1xuICAgICAgICAvLyBET00gZnJhZ21lbnQ6XG4gICAgICAgIC8vICAxLiBDbG9uZSAtIGNyZWF0ZSB0aGUgaW5zdGFuY2UgZnJhZ21lbnRcbiAgICAgICAgLy8gIDIuIEFkb3B0IC0gYWRvcHQgaW50byB0aGUgbWFpbiBkb2N1bWVudFxuICAgICAgICAvLyAgMy4gUHJvY2VzcyAtIGZpbmQgcGFydCBtYXJrZXJzIGFuZCBjcmVhdGUgcGFydHNcbiAgICAgICAgLy8gIDQuIFVwZ3JhZGUgLSB1cGdyYWRlIGN1c3RvbSBlbGVtZW50c1xuICAgICAgICAvLyAgNS4gVXBkYXRlIC0gc2V0IG5vZGUsIGF0dHJpYnV0ZSwgcHJvcGVydHksIGV0Yy4sIHZhbHVlc1xuICAgICAgICAvLyAgNi4gQ29ubmVjdCAtIGNvbm5lY3QgdG8gdGhlIGRvY3VtZW50LiBPcHRpb25hbCBhbmQgb3V0c2lkZSBvZiB0aGlzXG4gICAgICAgIC8vICAgICBtZXRob2QuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFdlIGhhdmUgYSBmZXcgY29uc3RyYWludHMgb24gdGhlIG9yZGVyaW5nIG9mIHRoZXNlIHN0ZXBzOlxuICAgICAgICAvLyAgKiBXZSBuZWVkIHRvIHVwZ3JhZGUgYmVmb3JlIHVwZGF0aW5nLCBzbyB0aGF0IHByb3BlcnR5IHZhbHVlcyB3aWxsIHBhc3NcbiAgICAgICAgLy8gICAgdGhyb3VnaCBhbnkgcHJvcGVydHkgc2V0dGVycy5cbiAgICAgICAgLy8gICogV2Ugd291bGQgbGlrZSB0byBwcm9jZXNzIGJlZm9yZSB1cGdyYWRpbmcgc28gdGhhdCB3ZSdyZSBzdXJlIHRoYXQgdGhlXG4gICAgICAgIC8vICAgIGNsb25lZCBmcmFnbWVudCBpcyBpbmVydCBhbmQgbm90IGRpc3R1cmJlZCBieSBzZWxmLW1vZGlmeWluZyBET00uXG4gICAgICAgIC8vICAqIFdlIHdhbnQgY3VzdG9tIGVsZW1lbnRzIHRvIHVwZ3JhZGUgZXZlbiBpbiBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLlxuICAgICAgICAvL1xuICAgICAgICAvLyBHaXZlbiB0aGVzZSBjb25zdHJhaW50cywgd2l0aCBmdWxsIGN1c3RvbSBlbGVtZW50cyBzdXBwb3J0IHdlIHdvdWxkXG4gICAgICAgIC8vIHByZWZlciB0aGUgb3JkZXI6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLCBDb25uZWN0XG4gICAgICAgIC8vXG4gICAgICAgIC8vIEJ1dCBTYWZhcmkgZG9vZXMgbm90IGltcGxlbWVudCBDdXN0b21FbGVtZW50UmVnaXN0cnkjdXBncmFkZSwgc28gd2VcbiAgICAgICAgLy8gY2FuIG5vdCBpbXBsZW1lbnQgdGhhdCBvcmRlciBhbmQgc3RpbGwgaGF2ZSB1cGdyYWRlLWJlZm9yZS11cGRhdGUgYW5kXG4gICAgICAgIC8vIHVwZ3JhZGUgZGlzY29ubmVjdGVkIGZyYWdtZW50cy4gU28gd2UgaW5zdGVhZCBzYWNyaWZpY2UgdGhlXG4gICAgICAgIC8vIHByb2Nlc3MtYmVmb3JlLXVwZ3JhZGUgY29uc3RyYWludCwgc2luY2UgaW4gQ3VzdG9tIEVsZW1lbnRzIHYxIGVsZW1lbnRzXG4gICAgICAgIC8vIG11c3Qgbm90IG1vZGlmeSB0aGVpciBsaWdodCBET00gaW4gdGhlIGNvbnN0cnVjdG9yLiBXZSBzdGlsbCBoYXZlIGlzc3Vlc1xuICAgICAgICAvLyB3aGVuIGNvLWV4aXN0aW5nIHdpdGggQ0V2MCBlbGVtZW50cyBsaWtlIFBvbHltZXIgMSwgYW5kIHdpdGggcG9seWZpbGxzXG4gICAgICAgIC8vIHRoYXQgZG9uJ3Qgc3RyaWN0bHkgYWRoZXJlIHRvIHRoZSBuby1tb2RpZmljYXRpb24gcnVsZSBiZWNhdXNlIHNoYWRvd1xuICAgICAgICAvLyBET00sIHdoaWNoIG1heSBiZSBjcmVhdGVkIGluIHRoZSBjb25zdHJ1Y3RvciwgaXMgZW11bGF0ZWQgYnkgYmVpbmcgcGxhY2VkXG4gICAgICAgIC8vIGluIHRoZSBsaWdodCBET00uXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSByZXN1bHRpbmcgb3JkZXIgaXMgb24gbmF0aXZlIGlzOiBDbG9uZSwgQWRvcHQsIFVwZ3JhZGUsIFByb2Nlc3MsXG4gICAgICAgIC8vIFVwZGF0ZSwgQ29ubmVjdC4gZG9jdW1lbnQuaW1wb3J0Tm9kZSgpIHBlcmZvcm1zIENsb25lLCBBZG9wdCwgYW5kIFVwZ3JhZGVcbiAgICAgICAgLy8gaW4gb25lIHN0ZXAuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBDdXN0b20gRWxlbWVudHMgdjEgcG9seWZpbGwgc3VwcG9ydHMgdXBncmFkZSgpLCBzbyB0aGUgb3JkZXIgd2hlblxuICAgICAgICAvLyBwb2x5ZmlsbGVkIGlzIHRoZSBtb3JlIGlkZWFsOiBDbG9uZSwgUHJvY2VzcywgQWRvcHQsIFVwZ3JhZGUsIFVwZGF0ZSxcbiAgICAgICAgLy8gQ29ubmVjdC5cbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpc0NFUG9seWZpbGwgP1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIDpcbiAgICAgICAgICAgIGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmUgbnVsbFxuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGZyYWdtZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgcGFydDtcbiAgICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXMgYW5kIHBhcnRzIG9mIGEgdGVtcGxhdGVcbiAgICAgICAgd2hpbGUgKHBhcnRJbmRleCA8IHBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgICAgICBpZiAoIWlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByb2dyZXNzIHRoZSB0cmVlIHdhbGtlciB1bnRpbCB3ZSBmaW5kIG91ciBuZXh0IHBhcnQncyBub2RlLlxuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IG11bHRpcGxlIHBhcnRzIG1heSBzaGFyZSB0aGUgc2FtZSBub2RlIChhdHRyaWJ1dGUgcGFydHNcbiAgICAgICAgICAgIC8vIG9uIGEgc2luZ2xlIGVsZW1lbnQpLCBzbyB0aGlzIGxvb3AgbWF5IG5vdCBydW4gYXQgYWxsLlxuICAgICAgICAgICAgd2hpbGUgKG5vZGVJbmRleCA8IHBhcnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBub2RlLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSd2ZSBleGhhdXN0ZWQgdGhlIGNvbnRlbnQgaW5zaWRlIGEgbmVzdGVkIHRlbXBsYXRlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugc3RpbGwgaGF2ZSBwYXJ0cyAodGhlIG91dGVyIGZvci1sb29wKSwgd2Uga25vdzpcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBUaGVyZSBpcyBhIHRlbXBsYXRlIGluIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgICAgICAvLyAtIFRoZSB3YWxrZXIgd2lsbCBmaW5kIGEgbmV4dE5vZGUgb3V0c2lkZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSd2ZSBhcnJpdmVkIGF0IG91ciBwYXJ0J3Mgbm9kZS5cbiAgICAgICAgICAgIGlmIChwYXJ0LnR5cGUgPT09ICdub2RlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnByb2Nlc3Nvci5oYW5kbGVUZXh0RXhwcmVzc2lvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHBhcnQuaW5zZXJ0QWZ0ZXJOb2RlKG5vZGUucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9fcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKC4uLnRoaXMucHJvY2Vzc29yLmhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKG5vZGUsIHBhcnQubmFtZSwgcGFydC5zdHJpbmdzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0NFUG9seWZpbGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkb3B0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy51cGdyYWRlKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtaW5zdGFuY2UuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cbmltcG9ydCB7IHJlcGFyZW50Tm9kZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCwgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCwgbWFya2VyLCBub2RlTWFya2VyIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5jb25zdCBjb21tZW50TWFya2VyID0gYCAke21hcmtlcn0gYDtcbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5ncywgdmFsdWVzLCB0eXBlLCBwcm9jZXNzb3IpIHtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIEhUTUwgdXNlZCB0byBjcmVhdGUgYSBgPHRlbXBsYXRlPmAgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXRIVE1MKCkge1xuICAgICAgICBjb25zdCBsID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBodG1sID0gJyc7XG4gICAgICAgIGxldCBpc0NvbW1lbnRCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdGhpcy5zdHJpbmdzW2ldO1xuICAgICAgICAgICAgLy8gRm9yIGVhY2ggYmluZGluZyB3ZSB3YW50IHRvIGRldGVybWluZSB0aGUga2luZCBvZiBtYXJrZXIgdG8gaW5zZXJ0XG4gICAgICAgICAgICAvLyBpbnRvIHRoZSB0ZW1wbGF0ZSBzb3VyY2UgYmVmb3JlIGl0J3MgcGFyc2VkIGJ5IHRoZSBicm93c2VyJ3MgSFRNTFxuICAgICAgICAgICAgLy8gcGFyc2VyLiBUaGUgbWFya2VyIHR5cGUgaXMgYmFzZWQgb24gd2hldGhlciB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhblxuICAgICAgICAgICAgLy8gYXR0cmlidXRlLCB0ZXh0LCBvciBjb21tZW50IHBvaXNpdGlvbi5cbiAgICAgICAgICAgIC8vICAgKiBGb3Igbm9kZS1wb3NpdGlvbiBiaW5kaW5ncyB3ZSBpbnNlcnQgYSBjb21tZW50IHdpdGggdGhlIG1hcmtlclxuICAgICAgICAgICAgLy8gICAgIHNlbnRpbmVsIGFzIGl0cyB0ZXh0IGNvbnRlbnQsIGxpa2UgPCEtLXt7bGl0LWd1aWR9fS0tPi5cbiAgICAgICAgICAgIC8vICAgKiBGb3IgYXR0cmlidXRlIGJpbmRpbmdzIHdlIGluc2VydCBqdXN0IHRoZSBtYXJrZXIgc2VudGluZWwgZm9yIHRoZVxuICAgICAgICAgICAgLy8gICAgIGZpcnN0IGJpbmRpbmcsIHNvIHRoYXQgd2Ugc3VwcG9ydCB1bnF1b3RlZCBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgICAgICAgICAvLyAgICAgU3Vic2VxdWVudCBiaW5kaW5ncyBjYW4gdXNlIGEgY29tbWVudCBtYXJrZXIgYmVjYXVzZSBtdWx0aS1iaW5kaW5nXG4gICAgICAgICAgICAvLyAgICAgYXR0cmlidXRlcyBtdXN0IGJlIHF1b3RlZC5cbiAgICAgICAgICAgIC8vICAgKiBGb3IgY29tbWVudCBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIHNvIHdlIGRvbid0XG4gICAgICAgICAgICAvLyAgICAgY2xvc2UgdGhlIGNvbW1lbnQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGJ1dCBpcyAqbm90KiBhbiBIVE1MXG4gICAgICAgICAgICAvLyBwYXJzZXIuIFdlIGRvbid0IG5lZWQgdG8gdHJhY2sgdGhlIHRyZWUgc3RydWN0dXJlIG9mIHRoZSBIVE1MLCBvbmx5XG4gICAgICAgICAgICAvLyB3aGV0aGVyIGEgYmluZGluZyBpcyBpbnNpZGUgYSBjb21tZW50LCBhbmQgaWYgbm90LCBpZiBpdCBhcHBlYXJzIHRvIGJlXG4gICAgICAgICAgICAvLyB0aGUgZmlyc3QgYmluZGluZyBpbiBhbiBhdHRyaWJ1dGUuXG4gICAgICAgICAgICBjb25zdCBjb21tZW50T3BlbiA9IHMubGFzdEluZGV4T2YoJzwhLS0nKTtcbiAgICAgICAgICAgIC8vIFdlJ3JlIGluIGNvbW1lbnQgcG9zaXRpb24gaWYgd2UgaGF2ZSBhIGNvbW1lbnQgb3BlbiB3aXRoIG5vIGZvbGxvd2luZ1xuICAgICAgICAgICAgLy8gY29tbWVudCBjbG9zZS4gQmVjYXVzZSA8LS0gY2FuIGFwcGVhciBpbiBhbiBhdHRyaWJ1dGUgdmFsdWUgdGhlcmUgY2FuXG4gICAgICAgICAgICAvLyBiZSBmYWxzZSBwb3NpdGl2ZXMuXG4gICAgICAgICAgICBpc0NvbW1lbnRCaW5kaW5nID0gKGNvbW1lbnRPcGVuID4gLTEgfHwgaXNDb21tZW50QmluZGluZykgJiZcbiAgICAgICAgICAgICAgICBzLmluZGV4T2YoJy0tPicsIGNvbW1lbnRPcGVuICsgMSkgPT09IC0xO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYW4gYXR0cmlidXRlLWxpa2Ugc2VxdWVuY2UgcHJlY2VlZGluZyB0aGVcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24uIFRoaXMgY2FuIG1hdGNoIFwibmFtZT12YWx1ZVwiIGxpa2Ugc3RydWN0dXJlcyBpbiB0ZXh0LFxuICAgICAgICAgICAgLy8gY29tbWVudHMsIGFuZCBhdHRyaWJ1dGUgdmFsdWVzLCBzbyB0aGVyZSBjYW4gYmUgZmFsc2UtcG9zaXRpdmVzLlxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlTWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSdyZSBvbmx5IGluIHRoaXMgYnJhbmNoIGlmIHdlIGRvbid0IGhhdmUgYSBhdHRyaWJ1dGUtbGlrZVxuICAgICAgICAgICAgICAgIC8vIHByZWNlZWRpbmcgc2VxdWVuY2UuIEZvciBjb21tZW50cywgdGhpcyBndWFyZHMgYWdhaW5zdCB1bnVzdWFsXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIHZhbHVlcyBsaWtlIDxkaXYgZm9vPVwiPCEtLSR7J2Jhcid9XCI+LiBDYXNlcyBsaWtlXG4gICAgICAgICAgICAgICAgLy8gPCEtLSBmb289JHsnYmFyJ30tLT4gYXJlIGhhbmRsZWQgY29ycmVjdGx5IGluIHRoZSBhdHRyaWJ1dGUgYnJhbmNoXG4gICAgICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICAgICAgaHRtbCArPSBzICsgKGlzQ29tbWVudEJpbmRpbmcgPyBjb21tZW50TWFya2VyIDogbm9kZU1hcmtlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgYXR0cmlidXRlcyB3ZSB1c2UganVzdCBhIG1hcmtlciBzZW50aW5lbCwgYW5kIGFsc28gYXBwZW5kIGFcbiAgICAgICAgICAgICAgICAvLyAkbGl0JCBzdWZmaXggdG8gdGhlIG5hbWUgdG8gb3B0LW91dCBvZiBhdHRyaWJ1dGUtc3BlY2lmaWMgcGFyc2luZ1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgSUUgYW5kIEVkZ2UgZG8gZm9yIHN0eWxlIGFuZCBjZXJ0YWluIFNWRyBhdHRyaWJ1dGVzLlxuICAgICAgICAgICAgICAgIGh0bWwgKz0gcy5zdWJzdHIoMCwgYXR0cmlidXRlTWF0Y2guaW5kZXgpICsgYXR0cmlidXRlTWF0Y2hbMV0gK1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVNYXRjaFsyXSArIGJvdW5kQXR0cmlidXRlU3VmZml4ICsgYXR0cmlidXRlTWF0Y2hbM10gK1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSB0aGlzLnN0cmluZ3NbbF07XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBnZXRUZW1wbGF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5nZXRIVE1MKCk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59XG4vKipcbiAqIEEgVGVtcGxhdGVSZXN1bHQgZm9yIFNWRyBmcmFnbWVudHMuXG4gKlxuICogVGhpcyBjbGFzcyB3cmFwcyBIVE1MIGluIGFuIGA8c3ZnPmAgdGFnIGluIG9yZGVyIHRvIHBhcnNlIGl0cyBjb250ZW50cyBpbiB0aGVcbiAqIFNWRyBuYW1lc3BhY2UsIHRoZW4gbW9kaWZpZXMgdGhlIHRlbXBsYXRlIHRvIHJlbW92ZSB0aGUgYDxzdmc+YCB0YWcgc28gdGhhdFxuICogY2xvbmVzIG9ubHkgY29udGFpbmVyIHRoZSBvcmlnaW5hbCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWR1RlbXBsYXRlUmVzdWx0IGV4dGVuZHMgVGVtcGxhdGVSZXN1bHQge1xuICAgIGdldEhUTUwoKSB7XG4gICAgICAgIHJldHVybiBgPHN2Zz4ke3N1cGVyLmdldEhUTUwoKX08L3N2Zz5gO1xuICAgIH1cbiAgICBnZXRUZW1wbGF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gc3VwZXIuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgICAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHN2Z0VsZW1lbnQpO1xuICAgICAgICByZXBhcmVudE5vZGVzKGNvbnRlbnQsIHN2Z0VsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1yZXN1bHQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB3aXRoIGVtYmVkZGVkIHVuaXF1ZSBrZXkgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGhcbiAqIHBvc3NpYmxlIHRleHQgaW4gdGVtcGxhdGVzLlxuICovXG5leHBvcnQgY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgdXNlZCB0ZXh0LXBvc2l0aW9ucywgbXVsdGktYmluZGluZyBhdHRyaWJ1dGVzLCBhbmRcbiAqIGF0dHJpYnV0ZXMgd2l0aCBtYXJrdXAtbGlrZSB0ZXh0IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vZGVNYXJrZXIgPSBgPCEtLSR7bWFya2VyfS0tPmA7XG5leHBvcnQgY29uc3QgbWFya2VyUmVnZXggPSBuZXcgUmVnRXhwKGAke21hcmtlcn18JHtub2RlTWFya2VyfWApO1xuLyoqXG4gKiBTdWZmaXggYXBwZW5kZWQgdG8gYWxsIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcbi8qKlxuICogQW4gdXBkYXRlYWJsZSBUZW1wbGF0ZSB0aGF0IHRyYWNrcyB0aGUgbG9jYXRpb24gb2YgZHluYW1pYyBwYXJ0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHQsIGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBub2Rlc1RvUmVtb3ZlID0gW107XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmUgbnVsbFxuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGVsZW1lbnQuY29udGVudCwgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBsYXN0IGluZGV4IGFzc29jaWF0ZWQgd2l0aCBhIHBhcnQuIFdlIHRyeSB0byBkZWxldGVcbiAgICAgICAgLy8gdW5uZWNlc3Nhcnkgbm9kZXMsIGJ1dCB3ZSBuZXZlciB3YW50IHRvIGFzc29jaWF0ZSB0d28gZGlmZmVyZW50IHBhcnRzXG4gICAgICAgIC8vIHRvIHRoZSBzYW1lIGluZGV4LiBUaGV5IG11c3QgaGF2ZSBhIGNvbnN0YW50IG5vZGUgYmV0d2Vlbi5cbiAgICAgICAgbGV0IGxhc3RQYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5ncywgdmFsdWVzOiB7IGxlbmd0aCB9IH0gPSByZXN1bHQ7XG4gICAgICAgIHdoaWxlIChwYXJ0SW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UndmUgZXhoYXVzdGVkIHRoZSBjb250ZW50IGluc2lkZSBhIG5lc3RlZCB0ZW1wbGF0ZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugc3RpbGwgaGF2ZSBwYXJ0cyAodGhlIG91dGVyIGZvci1sb29wKSwgd2Uga25vdzpcbiAgICAgICAgICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgLy8gLSBUaGUgd2Fsa2VyIHdpbGwgZmluZCBhIG5leHROb2RlIG91dHNpZGUgdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBlclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmFtZWROb2RlTWFwLFxuICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSByZXR1cm5lZCBpbiBkb2N1bWVudCBvcmRlci5cbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gcGFydGljdWxhciwgRWRnZS9JRSBjYW4gcmV0dXJuIHRoZW0gb3V0IG9mIG9yZGVyLCBzbyB3ZSBjYW5ub3RcbiAgICAgICAgICAgICAgICAgICAgLy8gYXNzdW1lIGEgY29ycmVzcG9uZGVuY2UgYmV0d2VlbiBwYXJ0IGluZGV4IGFuZCBhdHRyaWJ1dGUgaW5kZXguXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmRzV2l0aChhdHRyaWJ1dGVzW2ldLm5hbWUsIGJvdW5kQXR0cmlidXRlU3VmZml4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nRm9yUGFydCA9IHN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbCBib3VuZCBhdHRyaWJ1dGVzIGhhdmUgaGFkIGEgc3VmZml4IGFkZGVkIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZW1wbGF0ZVJlc3VsdCNnZXRIVE1MIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbCBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsaW5nLiBUbyBsb29rIHVwIHRoZSBhdHRyaWJ1dGUgdmFsdWUgd2UgYWxzbyBuZWVkIHRvIGFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN1ZmZpeC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUxvb2t1cE5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSBhdHRyaWJ1dGVWYWx1ZS5zcGxpdChtYXJrZXJSZWdleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnYXR0cmlidXRlJywgaW5kZXgsIG5hbWUsIHN0cmluZ3M6IHN0YXRpY3MgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RhdGljcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gbm9kZS5jb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmluZGV4T2YobWFya2VyKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGRhdGEuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5zZXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBzdHJpbmdzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ID0gY3JlYXRlTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggIT09IG51bGwgJiYgZW5kc1dpdGgobWF0Y2hbMl0sIGJvdW5kQXR0cmlidXRlU3VmZml4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gcy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyBtYXRjaFsxXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsyXS5zbGljZSgwLCAtYm91bmRBdHRyaWJ1dGVTdWZmaXgubGVuZ3RoKSArIG1hdGNoWzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoaW5zZXJ0LCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXg6ICsraW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsc2UsIHdlIGNhbiB0cnVzdCBpdCB3aWxsIHN0aWNrIGFyb3VuZCBhZnRlciBjbG9uaW5nLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaW5nc1tsYXN0SW5kZXhdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSBzdHJpbmdzW2xhc3RJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHBhcnQgZm9yIGVhY2ggbWF0Y2ggZm91bmRcbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ICs9IGxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5vZGUuQ09NTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGEgbmV3IG1hcmtlciBub2RlIHRvIGJlIHRoZSBzdGFydE5vZGUgb2YgdGhlIFBhcnQgaWYgYW55IG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgYXJlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gICogVGhlIHByZXZpb3VzU2libGluZyBpcyBhbHJlYWR5IHRoZSBzdGFydCBvZiBhIHByZXZpb3VzIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBudWxsIHx8IGluZGV4ID09PSBsYXN0UGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFzdFBhcnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnbm9kZScsIGluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbmV4dFNpYmxpbmcsIGtlZXAgdGhpcyBub2RlIHNvIHdlIGhhdmUgYW4gZW5kLlxuICAgICAgICAgICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gcmVtb3ZlIGl0IHRvIHNhdmUgZnV0dXJlIGNvc3RzLlxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChpID0gbm9kZS5kYXRhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogY29uc2lkZXIgd2hldGhlciBpdCdzIGV2ZW4gd29ydGggaXQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYmluZGluZ3MgaW4gY29tbWVudHMgd29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleDogLTEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgdGV4dCBiaW5kaW5nIG5vZGVzIGFmdGVyIHRoZSB3YWxrIHRvIG5vdCBkaXN0dXJiIHRoZSBUcmVlV2Fsa2VyXG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBub2Rlc1RvUmVtb3ZlKSB7XG4gICAgICAgICAgICBuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobik7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBlbmRzV2l0aCA9IChzdHIsIHN1ZmZpeCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG4gICAgcmV0dXJuIGluZGV4ID49IDAgJiYgc3RyLnNsaWNlKGluZGV4KSA9PT0gc3VmZml4O1xufTtcbmV4cG9ydCBjb25zdCBpc1RlbXBsYXRlUGFydEFjdGl2ZSA9IChwYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcbi8vIEFsbG93cyBgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJylgIHRvIGJlIHJlbmFtZWQgZm9yIGFcbi8vIHNtYWxsIG1hbnVhbCBzaXplLXNhdmluZ3MuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG4vKipcbiAqIFRoaXMgcmVnZXggZXh0cmFjdHMgdGhlIGF0dHJpYnV0ZSBuYW1lIHByZWNlZGluZyBhbiBhdHRyaWJ1dGUtcG9zaXRpb25cbiAqIGV4cHJlc3Npb24uIEl0IGRvZXMgdGhpcyBieSBtYXRjaGluZyB0aGUgc3ludGF4IGFsbG93ZWQgZm9yIGF0dHJpYnV0ZXNcbiAqIGFnYWluc3QgdGhlIHN0cmluZyBsaXRlcmFsIGRpcmVjdGx5IHByZWNlZGluZyB0aGUgZXhwcmVzc2lvbiwgYXNzdW1pbmcgdGhhdFxuICogdGhlIGV4cHJlc3Npb24gaXMgaW4gYW4gYXR0cmlidXRlLXZhbHVlIHBvc2l0aW9uLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudHMtYXR0cmlidXRlc1xuICpcbiAqIFwiIFxceDA5XFx4MGFcXHgwY1xceDBkXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9pbmZyYXN0cnVjdHVyZS5odG1sI3NwYWNlLWNoYXJhY3RlcnNcbiAqXG4gKiBcIlxcMC1cXHgxRlxceDdGLVxceDlGXCIgYXJlIFVuaWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzLCB3aGljaCBpbmNsdWRlcyBldmVyeVxuICogc3BhY2UgY2hhcmFjdGVyIGV4Y2VwdCBcIiBcIi5cbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSBjb250cm9sIGNoYXJhY3Rlciwgc3BhY2UgY2hhcmFjdGVyLCAoJyksXG4gKiAgICAoXCIpLCBcIj5cIiwgXCI9XCIsIG9yIFwiL1wiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5leHBvcnQgY29uc3QgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCA9IC8oWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0pKFteXFwwLVxceDFGXFx4N0YtXFx4OUYgXCInPj0vXSspKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKj1bIFxceDA5XFx4MGFcXHgwY1xceDBkXSooPzpbXiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJ2A8Pj1dKnxcIlteXCJdKnwnW14nXSopKSQvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKlxuICogTWFpbiBsaXQtaHRtbCBtb2R1bGUuXG4gKlxuICogTWFpbiBleHBvcnRzOlxuICpcbiAqIC0gIFtbaHRtbF1dXG4gKiAtICBbW3N2Z11dXG4gKiAtICBbW3JlbmRlcl1dXG4gKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICogQHByZWZlcnJlZFxuICovXG4vKipcbiAqIERvIG5vdCByZW1vdmUgdGhpcyBjb21tZW50OyBpdCBrZWVwcyB0eXBlZG9jIGZyb20gbWlzcGxhY2luZyB0aGUgbW9kdWxlXG4gKiBkb2NzLlxuICovXG5pbXBvcnQgeyBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQgeyBTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuZXhwb3J0IHsgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5leHBvcnQgeyBkaXJlY3RpdmUsIGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9saWIvZGlyZWN0aXZlLmpzJztcbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IHJlbW92ZSBsaW5lIHdoZW4gd2UgZ2V0IE5vZGVQYXJ0IG1vdmluZyBtZXRob2RzXG5leHBvcnQgeyByZW1vdmVOb2RlcywgcmVwYXJlbnROb2RlcyB9IGZyb20gJy4vbGliL2RvbS5qcyc7XG5leHBvcnQgeyBub0NoYW5nZSwgbm90aGluZyB9IGZyb20gJy4vbGliL3BhcnQuanMnO1xuZXhwb3J0IHsgQXR0cmlidXRlQ29tbWl0dGVyLCBBdHRyaWJ1dGVQYXJ0LCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBpc0l0ZXJhYmxlLCBpc1ByaW1pdGl2ZSwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyLCBQcm9wZXJ0eVBhcnQgfSBmcm9tICcuL2xpYi9wYXJ0cy5qcyc7XG5leHBvcnQgeyBwYXJ0cywgcmVuZGVyIH0gZnJvbSAnLi9saWIvcmVuZGVyLmpzJztcbmV4cG9ydCB7IHRlbXBsYXRlQ2FjaGVzLCB0ZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmV4cG9ydCB7IFRlbXBsYXRlSW5zdGFuY2UgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5leHBvcnQgeyBTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuZXhwb3J0IHsgY3JlYXRlTWFya2VyLCBpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGUgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS5qcyc7XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIGxpdC1odG1sIHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbih3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddIHx8ICh3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddID0gW10pKS5wdXNoKCcxLjEuMicpO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiBuZXcgVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnaHRtbCcsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiBuZXcgU1ZHVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnc3ZnJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsIi8vIENvbXBvbmVudHNcbmV4cG9ydCB7IFBhcGVyIH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL3BhcGVyLmpzJ1xuZXhwb3J0IHsgQ2FyZCB9IGZyb20gJy4vanMvY29tcG9uZW50cy9jYXJkLmpzJ1xuZXhwb3J0IHsgTGluayB9IGZyb20gJy4vanMvY29tcG9uZW50cy9saW5rLmpzJ1xuZXhwb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL2J1dHRvbi5qcydcbmV4cG9ydCB7IFByZWZvcm1hdCB9IGZyb20gJy4vanMvY29tcG9uZW50cy9wcmVmb3JtYXQuanMnXG5leHBvcnQgeyBJbWFnZSB9IGZyb20gJy4vanMvY29tcG9uZW50cy9pbWFnZS5qcydcbmV4cG9ydCB7IEJhZGdlIH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL2JhZGdlLmpzJ1xuZXhwb3J0IHsgU2xpZGVzaG93IH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL3NsaWRlc2hvdy5qcydcbmV4cG9ydCB7IENvZGUgfSBmcm9tICcuL2pzL2NvbXBvbmVudHMvY29kZS5qcydcbmV4cG9ydCB7IEljb24gfSBmcm9tICcuL2pzL2NvbXBvbmVudHMvaWNvbi5qcydcbmV4cG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4vanMvY29tcG9uZW50cy9oaWdobGlnaHQuanMnXG5leHBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL3Rvb2x0aXAuanMnXG5cbi8vIExheW91dCBDb21wb25lbnRzXG5leHBvcnQgeyBGbGV4Qm94LCBGbGV4SXRlbSwgRmxleENlbnRlciB9IGZyb20gJy4vanMvbGF5b3V0cy9mbGV4LmpzJ1xuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc2Nzcy9iYWRnZS5zY3NzJ1xuXG5AY3VzdG9tRWxlbWVudCgnZS1iYWRnZScpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIEJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvc3Bhbj5cbiAgICBgXG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3Njc3MvYnV0dG9uLnNjc3MnXG5cbkBjdXN0b21FbGVtZW50KCdlLWJ1dHRvbicpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvKiogR2VuZXJhdGUgdGhlIGFjdGlvbiB0ZXh0IGZvciB0aGUgbGluayAqL1xuICBnZXQgYWN0aW9uVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzPy50aXRsZT8udmFsdWUgfHwgdGhpcy5pbm5lckhUTUxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxhIGhyZWY9JHt0aGlzLmF0dHJpYnV0ZXMubGluay52YWx1ZX0gdGl0bGU9JHt0aGlzLmFjdGlvblRleHR9IGFyaWEtbGFiZWw9JHt0aGlzLmFjdGlvblRleHR9PlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2E+XG4gICAgYFxuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL2NhcmQuc2NzcydcblxuQGN1c3RvbUVsZW1lbnQoJ2UtY2FyZCcpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIENhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZS1wYXBlcj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8c2xvdCBuYW1lPVwibGVmdC1pY29uXCI+PC9zbG90PlxuICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtb3ZlcmZsb3dcIiB0aXRsZT0ke3RoaXMuYXR0cmlidXRlcz8uaGVhZGVyPy52YWx1ZX0+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+JHt0aGlzLmF0dHJpYnV0ZXM/LmhlYWRlcj8udmFsdWV9PC9zbG90PlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPHNsb3QgbmFtZT1cInJpZ2h0LWljb25cIj48L3Nsb3Q+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZFwiPjwvc2xvdD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzbG90IG5hbWU9XCJ0YWlsXCI+PC9zbG90PlxuICAgICAgPC9lLXBhcGVyPlxuICAgIGBcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdsaXQtZWxlbWVudCdcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sJ1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgJ2NvZGUtcHJldHRpZnkvbG9hZGVyL3ByZXR0aWZ5J1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3Njc3MvY29kZS5zY3NzJ1xuXG5AY3VzdG9tRWxlbWVudCgnZS1jb2RlJylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgQ29kZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcHJldHR5ID0gUFIucHJldHR5UHJpbnRPbmUodGhpcy5pbm5lckhUTUwsIHRoaXMuYXR0cmlidXRlcz8ubGFuZ3VhZ2U/LnZhbHVlLCB0aGlzLmF0dHJpYnV0ZXM/LmxpbmVOdW1iZXJzICYmIHRydWUpXG4gICAgcmV0dXJuIGh0bWxgPGUtcHJlZm9ybWF0Pjxjb2RlPiR7dW5zYWZlSFRNTChwcmV0dHkpfTwvY29kZT48L2UtcHJlZm9ybWF0PmBcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc2Nzcy9oaWdobGlnaHQuc2NzcydcblxuQGN1c3RvbUVsZW1lbnQoJ2UtaGlnaGxpZ2h0JylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxlbT48c2xvdD48L3Nsb3Q+PC9lbT5gXG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcywgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc2Nzcy9pY29uLnNjc3MnXG5cbkBjdXN0b21FbGVtZW50KCdlLWljb24nKVxuQHN0eWxlcyhzdHlsZSlcbmV4cG9ydCBjbGFzcyBJY29uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8vIEZpeCBidWcgd2l0aCBpY29ucyBodHRwczovL2dpdGh1Yi5jb20vbWRuL2ludGVyYWN0aXZlLWV4YW1wbGVzL2lzc3Vlcy84ODcjaXNzdWVjb21tZW50LTUyODIwNTI3M1xuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpXG4gICAgbGV0IGZvbnRGYWNlU2hlZXQgPSBjc3NgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBzcmM6IHVybChcIi9hc3NldHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3RcIik7XG4gICAgICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250YXdlc29tZS13ZWJmb250LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXG4gICAgICAgICAgICAgdXJsKFwiL2Fzc2V0cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICAgICAgIHVybChcIi9hc3NldHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gICAgICAgICAgICAgdXJsKFwiL2Fzc2V0cy9mb250YXdlc29tZS13ZWJmb250LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcbiAgICAgICAgICAgICB1cmwoXCIvYXNzZXRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnI2ZvbnRhd2Vzb21lcmVndWxhclwiKSBmb3JtYXQoXCJzdmdcIik7XG4gICAgICB9XG4gICAgYC5zdHlsZVNoZWV0XG4gICAgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzID0gWyAuLi5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMsIGZvbnRGYWNlU2hlZXQgXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxpIGNsYXNzPVwiZmEgZmEtJHt0aGlzLmlubmVySFRNTH0gJHt0aGlzLmF0dHJpYnV0ZXM/LnNwaW4gPyAnZmEtc3BpbicgOiAnZmEtc3RhdGljJ31cIj48L2k+YFxuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc2Nzcy9pbWFnZS5zY3NzJ1xuXG5jb25zdCBUUkFOU19QTkcgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FRQUFBQzFIQXdDQUFBQUMwbEVRVlI0bkdQNnp3QUFBZ2NCQXBvY01YRUFBQUFBU1VWT1JLNUNZSUk9JztcblxuQGN1c3RvbUVsZW1lbnQoJ2UtaW1hZ2UnKVxuQHN0eWxlcyhzdHlsZSlcbmV4cG9ydCBjbGFzcyBJbWFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIEBwcm9wZXJ0eSgpIGltYWdlID0gVFJBTlNfUE5HXG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIC8vIHRvZG8gZ2VuZXJhdGUgdGhlIGxhenkgbG9hZGluZyBvZiB0aGUgaW1hZ2UgdmFsdWVcbiAgICB0aGlzLmltYWdlID0gdGhpcy5hdHRyaWJ1dGVzLnNvdXJjZS52YWx1ZVxuICB9XG5cbiAgLyoqIE5ldmVyIGZvcmdldCB0aGUgYWx0IHRhZywgdXNlIGZpbGUgbmFtZSBpZiBpdCdzIG5vdCBzcGVjaWZpY2VkICovXG4gIGdldCBhbHRUYWcoKSB7XG4gICAgLy8gdG9kbyByZW1vdmUgcXVlcnkgcGFyYW1ldGVycyBmcm9tIGFsdCBhbmQgIyBzZWxlY3RvclxuICAgIGxldCBhbHQgPSB0aGlzLmF0dHJpYnV0ZXM/LmFsdD8udmFsdWVcbiAgICBsZXQgbGFzdFNlcGVyYXRvciA9IHRoaXMuaW1hZ2UubGFzdEluZGV4T2YoJy8nKVxuICAgIGlmICghYWx0ICYmIGxhc3RTZXBlcmF0b3IgPiAwKSB7XG4gICAgICBpZiAobGFzdFNlcGVyYXRvciA9PSB0aGlzLmltYWdlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGh0dHAgcHJlZml4IGlmIGFueVxuICAgICAgICBhbHQgPSB0aGlzLmltYWdlLnN1YnN0cigwLCBsYXN0U2VwZXJhdG9yKS5yZXBsYWNlKC9odHRwKHMpPzpcXC9cXC8vLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlbW92ZSBzdWZmaXggaWYgYW55XG4gICAgICAgIGFsdCA9IHRoaXMuaW1hZ2Uuc3Vic3RyKGxhc3RTZXBlcmF0b3IgKyAxKS5yZXBsYWNlKC9cXC4oW0EtWmEtel0pKy8sICcnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWx0XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPGltZyBhbHQ9JHt0aGlzLmFsdFRhZ30gc3JjPSR7dGhpcy5pbWFnZX0+PC9pbWc+YFxuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL2xpbmsuc2NzcydcblxuQGN1c3RvbUVsZW1lbnQoJ2UtbGluaycpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIExpbmsgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLyoqIEdlbmVyYXRlIHRoZSBhY3Rpb24gdGV4dCBmb3IgdGhlIGxpbmsgKi9cbiAgZ2V0IGFjdGlvblRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcz8udGl0bGU/LnZhbHVlIHx8IHRoaXMuaW5uZXJIVE1MXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YSBocmVmPSR7dGhpcy5hdHRyaWJ1dGVzLmxpbmsudmFsdWV9IHRpdGxlPSR7dGhpcy5hY3Rpb25UZXh0fSBhcmlhLWxhYmVsPSR7dGhpcy5hY3Rpb25UZXh0fT5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9hPlxuICAgIGBcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc2Nzcy9wYXBlci5zY3NzJ1xuXG5AY3VzdG9tRWxlbWVudCgnZS1wYXBlcicpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIFBhcGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYFxuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL3ByZWZvcm1hdC5zY3NzJ1xuXG5AY3VzdG9tRWxlbWVudCgnZS1wcmVmb3JtYXQnKVxuQHN0eWxlcyhzdHlsZSlcbmV4cG9ydCBjbGFzcyBQcmVmb3JtYXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHByZT48c2xvdD48L3Nsb3Q+PC9wcmU+YFxuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc2Nzcy9zbGlkZXNob3cuc2NzcydcblxuY29uc3QgREVGQVVMVF9ERUxBWSA9IDUwMDBcblxuQGN1c3RvbUVsZW1lbnQoJ2Utc2xpZGVzaG93JylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgU2xpZGVzaG93IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIGluZGV4ID0gMFxuICBsZW5ndGggPSB0aGlzLmNoaWxkcmVuPy5sZW5ndGggfHwgMFxuICBkZWxheSA9IE51bWJlcih0aGlzLmF0dHJpYnV0ZXM/LmRlbGF5Py52YWx1ZSB8fCBERUZBVUxUX0RFTEFZKVxuICBAcHJvcGVydHkoKSBpbWFnZSA9IHRoaXMuY2hpbGRyZW5bMF0/LmNsb25lTm9kZSgpXG4gIEBwcm9wZXJ0eSgpIHBhdXNlID0gISh0aGlzLmNoaWxkcmVuPy5hdXRvUGxheSAmJiB0cnVlKVxuXG4gIGFzeW5jIG5leHQoKSB7XG4gICAgbGV0IGkgPSB0aGlzLmluZGV4XG4gICAgdGhpcy5pdGVtKCsraSA+PSB0aGlzLmxlbmd0aCA/IDAgOiBpKVxuICB9XG5cbiAgYXN5bmMgcHJldigpIHtcbiAgICBsZXQgaSA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLml0ZW0oLS1pIDw9IC0xID8gdGhpcy5sZW5ndGggLSAxIDogaSlcbiAgfVxuXG4gIGl0ZW0oaSkge1xuICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICBpID0gMFxuICAgIH1cbiAgICB0aGlzLmluZGV4ID0gaVxuICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmNoaWxkcmVuW3RoaXMuaW5kZXhdPy5jbG9uZU5vZGUoKVxuICAgIC8vIFRyaWdnZXJlZCB3aGVuIHRoZSBpbWFnZSBoYXMgYmVlbiBjaGFuZ2VkXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1pbWFnZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgIH0pKVxuICB9XG5cbiAgYXN5bmMgdG9nZ2xlUGF1c2UoKSB7XG4gICAgLy8gT25seSBhbGxvdyBwYXVzaW5nIHdoZW4gdGhlIGRlbGF5ID4gMFxuICAgIGlmICh0aGlzLmRlbGF5ID4gMCkge1xuICAgICAgdGhpcy5wYXVzZSA9ICF0aGlzLnBhdXNlXG4gICAgICAvLyBUcmlnZ2VyZWQgd2hlbiB0aGUgaW1hZ2UgaGFzIGJlZW4gcGF1c2VkIG9yIHJlc3VtZWQgcGxheWluZ1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGF1c2VkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBwYXVzZTogdGhpcy5wYXVzZSxcbiAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBpbnRlcnZhbCB0aW1lciBpZiBpdHMgZ3JlYXRvciB0aGFuIDBcbiAgICBpZiAodGhpcy5kZWxheSA+IDApIHtcbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnBhdXNlKSB7XG4gICAgICAgICAgdGhpcy5uZXh0KClcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5kZWxheSlcbiAgICB9XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpXG4gICAgLy8gQ2xlYXIgdGhlIGludGVydmFsIHRpbWVyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cInNsaWRlc2hvd1wiIHN0eWxlPSR7dGhpcy5hdHRyaWJ1dGVzPy5zdHlsZT8udmFsdWV9PlxuICAgICAgICA8Y29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj4ke3RoaXMuaW1hZ2V9PC9kaXY+XG4gICAgICAgICAgPG5hdiBjbGFzcz0ke3RoaXMuYXR0cmlidXRlcz8uaGlkZUNvbnRyb2xzID8gJ2hpZGUnIDogJ3Nob3cnfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtc1wiPlxuICAgICAgICAgICAgICAke1sgLi4uQXJyYXkodGhpcy5sZW5ndGgpLmtleXMoKSBdLm1hcChpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDdXJyZW50IGluZGV4IGl0ZW0gaXMgdGhlIHBsYXkgcGF1c2UgdG9nZ2xlXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gZGVsYXkganVzdCBzaG93IHN0YXRpYyBpbWFnZXMgbGlrZSBhIHByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsYXkgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiaXRlbSBwbGF5XCI+PC9kaXY+YFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz0ke3RoaXMucGF1c2UgPyAnaXRlbSBwYXVzZScgOiAnaXRlbSBwbGF5J30gQGNsaWNrPSR7dGhpcy50b2dnbGVQYXVzZX0+PC9kaXY+YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPSdpdGVtJyBAY2xpY2s9JHsoKSA9PiB0aGlzLml0ZW0oaSl9PjwvZGl2PmBcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGxlZnRcIiBAY2xpY2s9JHt0aGlzLnByZXZ9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgcmlnaHRcIiBAY2xpY2s9JHt0aGlzLm5leHR9PjwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2NvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3Njc3MvdG9vbHRpcC5zY3NzJ1xuXG5AY3VzdG9tRWxlbWVudCgnZS10b29sdGlwJylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIC8qKiBHZXQgdGhlIGNvcHkgb2YgdGhlIHRvb2x0aXAgaWYgc2xvdCBpcyBub3Qgc2xvdHRlZCAqL1xuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzPy52YWx1ZT8udmFsdWVcbiAgfVxuXG4gIC8qKiBHZXQgdGhlIGRpcmVjdGlvbiBvZiB0aGUgdG9vbHRpcCBkZWZhdWx0cyB0byBib3R0b20gKi9cbiAgZ2V0IGRpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzPy5kaXJlY3Rpb24/LnZhbHVlIHx8ICdib3R0b20nXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3BhbiBjbGFzcz1cIndyYXBwZXIgJHt0aGlzLmRpcmVjdGlvbn1cIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8c2xvdCBuYW1lPVwidG9vbHRpcFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcFwiPiR7dGhpcy50b29sdGlwfTwvc3Bhbj5cbiAgICAgICAgPC9zbG90PlxuICAgICAgPC9zcGFuPlxuICAgIGBcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbCdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3Njc3MvZmxleC5zY3NzJ1xuXG4vKiogVGhlIHdyYXBwZXIgdGhhdCBkZWZpbmVzIGEgZmxleCBib3ggYXJlYSwgYW5kIHJlbmRlcnMgdGhlIGNoaWxkcmVuICovXG5AY3VzdG9tRWxlbWVudCgnZS1mbGV4LWJveCcpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIEZsZXhCb3ggZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLyoqIEFkZCBmbGV4IHByb3BlcnRpZXMgb24gdGhlIGNvbnRlbnQgZWxlbWVudCB3cmFwcGVyICovXG4gIHVwZGF0ZWQoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLnNoYWRvd1Jvb3QuY2hpbGRyZW5bMF1cbiAgICBjb250ZW50LnN0eWxlWydmbGV4LWRpcmVjdGlvbiddID0gdGhpcy5hdHRyaWJ1dGVzPy5jb2x1bW4gPyAnY29sdW1uJyA6ICdyb3cnXG4gICAgY29udGVudC5zdHlsZVsnZmxleC13cmFwJ10gPSB0aGlzLmF0dHJpYnV0ZXM/LndyYXAgPyAnd3JhcCcgOiAnbm93cmFwJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGNvbnRlbnQ+XG4gICAgICAgICR7QXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKX1cbiAgICAgIDwvY29udGVudD5cbiAgICBgXG4gIH1cbn1cblxuLyoqIERlZmluZXMgdGhlIGZsZXggaXRlbSB0aGF0IGp1c3QgcmVuZGVycyB0aGUgc2xvdHRlZCBjb250ZW50ICovXG5AY3VzdG9tRWxlbWVudCgnZS1mbGV4LWl0ZW0nKVxuZXhwb3J0IGNsYXNzIEZsZXhJdGVtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8qKiBBZGQgZmxleCBwcm9wZXJ0aWVzIG9uIHNlbGYgKi9cbiAgdXBkYXRlZCgpIHtcbiAgICB0aGlzLnN0eWxlWydmbGV4LWdyb3cnXSA9IE51bWJlcih0aGlzLmF0dHJpYnV0ZXM/Lmdyb3c/LnZhbHVlIHx8IDEpXG4gICAgdGhpcy5zdHlsZVsnZmxleC1zaHJpbmsnXSA9IE51bWJlcih0aGlzLmF0dHJpYnV0ZXM/LnNocmluaz8udmFsdWUgfHwgMSlcbiAgICB0aGlzLnN0eWxlWydvcmRlciddID0gTnVtYmVyKHRoaXMuYXR0cmlidXRlcz8ub3JkZXI/LnZhbHVlIHx8IDApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNsb3Q+PC9zbG90PmBcbiAgfVxufVxuXG4vKiogQ2VudGVyIGl0ZW1zIGluIHRoZSBjZW50ZXIgb2YgdGhlIGJveCBib3RoIHZlcnRpY2FsIGFuZCBob3J6b25pYWwgKi9cbkBjdXN0b21FbGVtZW50KCdlLWZsZXgtY2VudGVyJylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgRmxleENlbnRlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8Y29udGVudCBjbGFzcz1cImNlbnRlclwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2NvbnRlbnQ+XG4gICAgYFxuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MsIHVuc2FmZUNTUywgQ1NTUmVzdWx0IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5cblxuLyoqIFRha2VzIHRoZSBpbXBvcnQgb2JqZWN0IGZvciBzY3NzIGZpbGVzIGFuZCBpbmplY3QgaXQgaW50byB0aGUgY3VzdG9tIGVsZW1lbnQgKi9cbmV4cG9ydCBjb25zdCBfc3R5bGVzID0gc3R5bGUgPT4gY3NzYCR7dW5zYWZlQ1NTKHN0eWxlWzBdWzFdKX1gXG5cbi8qKiBDcmVhdGVzIGEgZGVjb3JhdG9yIGZvciB0aGUgY2xhc3MgKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoLi4uc3R5bGVzKSB7XG4gIC8vIHRoaXMgaXMgdGhlIGVxdWFsaXZhbnQgb2YgZG9pbmcgaW4gdGhlIGNsYXNzXG4gIC8vIHN0YXRpYyBzdHlsZXMgPSBfc3R5bGVzKHN0eWxlKVxuICByZXR1cm4gZGVzY3JpcHRvciA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlc2NyaXB0b3IsXG4gICAgICBlbGVtZW50czogWyAuLi5kZXNjcmlwdG9yLmVsZW1lbnRzLCB7XG4gICAgICAgIGtpbmQ6ICdmaWVsZCcsXG4gICAgICAgIHBsYWNlbWVudDogJ3N0YXRpYycsXG4gICAgICAgIGtleTogJ3N0eWxlcycsXG4gICAgICAgIGRlc2NyaXB0b3I6IHt9LFxuICAgICAgICBpbml0aWFsaXplcjogKCkgPT4gc3R5bGVzLm1hcChzdHlsZSA9PiBzdHlsZSBpbnN0YW5jZW9mIENTU1Jlc3VsdCA/IHN0eWxlIDogX3N0eWxlcyhzdHlsZSkpXG4gICAgICB9XVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJzcGFuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODk7XFxuICBwYWRkaW5nOiAycHggM3B4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggI2FhYTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG4gIHNwYW4gc2xvdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgbWFyZ2luOiAxcHg7IH1cXG4gIHNwYW4gOjpzbG90dGVkKCopIHtcXG4gICAgbWFyZ2luOiAwIDJweDsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLm92ZXJmbG93IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuYSB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZTZkYTQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICBhIDo6c2xvdHRlZCgqKSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgbWFyZ2luOiAwIDVweDsgfVxcbiAgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6ICNlZWU7IH1cXG4gIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2MDkwO1xcbiAgICBib3JkZXItY29sb3I6ICMyMDRkNzQ7IH1cXG4gIGE6YWN0aXZlLCBhOmZvY3VzIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTcyYjM7XFxuICAgIGJvcmRlci1jb2xvcjogIzFkODRjZjsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLm92ZXJmbG93IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuZS1wYXBlciBoZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjNzc3OyB9XFxuICBlLXBhcGVyIGhlYWRlciBoMyB7XFxuICAgIGNvbG9yOiAjMzM3YWI3O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogYXV0byAycHg7XFxuICAgIHBhZGRpbmc6IDAgM3B4O1xcbiAgICB3aWR0aDogMTAwJTsgfVxcblxcbmUtcGFwZXIgPiBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGxuIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiB7XFxuICAuc3RyIHtcXG4gICAgY29sb3I6ICMwODA7IH1cXG4gIC5rd2Qge1xcbiAgICBjb2xvcjogIzAwODsgfVxcbiAgLmNvbSB7XFxuICAgIGNvbG9yOiAjODAwOyB9XFxuICAudHlwIHtcXG4gICAgY29sb3I6ICM2MDY7IH1cXG4gIC5saXQge1xcbiAgICBjb2xvcjogIzA2NjsgfVxcbiAgLnB1biwgLm9wbiwgLmNsbyB7XFxuICAgIGNvbG9yOiAjNjYwOyB9XFxuICAudGFnIHtcXG4gICAgY29sb3I6ICMwMDg7IH1cXG4gIC5hdG4ge1xcbiAgICBjb2xvcjogIzYwNjsgfVxcbiAgLmF0diB7XFxuICAgIGNvbG9yOiAjMDgwOyB9XFxuICAuZGVjLCAudmFyIHtcXG4gICAgY29sb3I6ICM2MDY7IH1cXG4gIC5mdW4ge1xcbiAgICBjb2xvcjogcmVkOyB9IH1cXG5cXG5AbWVkaWEgcHJpbnQsIHByb2plY3Rpb24ge1xcbiAgLnN0ciB7XFxuICAgIGNvbG9yOiAjMDYwOyB9XFxuICAua3dkIHtcXG4gICAgY29sb3I6ICMwMDY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAuY29tIHtcXG4gICAgY29sb3I6ICM2MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcbiAgLnR5cCB7XFxuICAgIGNvbG9yOiAjNDA0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgLmxpdCB7XFxuICAgIGNvbG9yOiAjMDQ0OyB9XFxuICAucHVuLCAub3BuLCAuY2xvIHtcXG4gICAgY29sb3I6ICM0NDA7IH1cXG4gIC50YWcge1xcbiAgICBjb2xvcjogIzAwNjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIC5hdG4ge1xcbiAgICBjb2xvcjogIzQwNDsgfVxcbiAgLmF0diB7XFxuICAgIGNvbG9yOiAjMDYwOyB9IH1cXG5cXG5wcmUucHJldHR5cHJpbnQge1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODsgfVxcblxcbm9sLmxpbmVudW1zIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxubGkuTDAsIGxpLkwxLCBsaS5MMiwgbGkuTDMsIGxpLkw1LCBsaS5MNiwgbGkuTDcsIGxpLkw4IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbmxpLkwxLCBsaS5MMywgbGkuTDUsIGxpLkw3LCBsaS5MOSB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlOyB9XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsICFpbXBvcnRhbnQ7IH1cXG4gIGxpLkwwLCBsaS5MMSwgbGkuTDIsIGxpLkwzLCBsaS5MNSwgbGkuTDYsIGxpLkw3LCBsaS5MOCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbCAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuICBjb250ZW50LmNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICBjb250ZW50IGUtZmxleC1pdGVtIHtcXG4gICAgZmxleDogMTsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLm92ZXJmbG93IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuZW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2Nzg5OTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luOiAxcHggMDtcXG4gIGNvbG9yOiAjZmVmZWZlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuICBlbSA6OnNsb3R0ZWQoKikge1xcbiAgICAtLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAtLWNvbG9yLWhvdmVyOiAjZWVlO1xcbiAgICAtLWNvbG9yLWFjdGl2ZTogI2ZmZjsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgZ2V0VXJsID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gZ2V0VXJsKHJlcXVpcmUoXCJmb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/dj00LjcuMFwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gZ2V0VXJsKHJlcXVpcmUoXCJmb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3RcIikgKyBcIj8jaWVmaXgmdj00LjcuMFwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSBnZXRVcmwocmVxdWlyZShcImZvbnQtYXdlc29tZS9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9NC43LjBcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IGdldFVybChyZXF1aXJlKFwiZm9udC1hd2Vzb21lL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZj92PTQuNy4wXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gPSBnZXRVcmwocmVxdWlyZShcImZvbnQtYXdlc29tZS9mb250cy9mb250YXdlc29tZS13ZWJmb250LnR0Zj92PTQuNy4wXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gPSBnZXRVcmwocmVxdWlyZShcImZvbnQtYXdlc29tZS9mb250cy9mb250YXdlc29tZS13ZWJmb250LnN2Zz92PTQuNy4wXCIpICsgXCIjZm9udGF3ZXNvbWVyZWd1bGFyXCIpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qIVxcbiAqICBGb250IEF3ZXNvbWUgNC43LjAgYnkgQGRhdmVnYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pbyAtIEBmb250YXdlc29tZVxcbiAqICBMaWNlbnNlIC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2xpY2Vuc2UgKEZvbnQ6IFNJTCBPRkwgMS4xLCBDU1M6IE1JVCBMaWNlbnNlKVxcbiAqL1xcbi8qIEZPTlQgUEFUSFxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyArIFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbi5mYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgfVxcblxcbi8qIG1ha2VzIHRoZSBmb250IDMzJSBsYXJnZXIgcmVsYXRpdmUgdG8gdGhlIGljb24gY29udGFpbmVyICovXFxuLmZhLWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4zMzMzM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMTUlOyB9XFxuXFxuLmZhLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtOyB9XFxuXFxuLmZhLTN4IHtcXG4gIGZvbnQtc2l6ZTogM2VtOyB9XFxuXFxuLmZhLTR4IHtcXG4gIGZvbnQtc2l6ZTogNGVtOyB9XFxuXFxuLmZhLTV4IHtcXG4gIGZvbnQtc2l6ZTogNWVtOyB9XFxuXFxuLmZhLWZ3IHtcXG4gIHdpZHRoOiAxLjI4NTcxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uZmEtdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDIuMTQyODZlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcbiAgLmZhLXVsID4gbGkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uZmEtbGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTIuMTQyODZlbTtcXG4gIHdpZHRoOiAyLjE0Mjg2ZW07XFxuICB0b3A6IDAuMTQyODZlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmZhLWxpLmZhLWxnIHtcXG4gICAgbGVmdDogLTEuODU3MTRlbTsgfVxcblxcbi5mYS1ib3JkZXIge1xcbiAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbTtcXG4gIGJvcmRlcjogc29saWQgMC4wOGVtICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiAuMWVtOyB9XFxuXFxuLmZhLXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbi5mYS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5mYS5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtOyB9XFxuXFxuLmZhLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IC4zZW07IH1cXG5cXG4vKiBEZXByZWNhdGVkIGFzIG9mIDQuNC4wICovXFxuLnB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbi5mYS5wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtOyB9XFxuXFxuLmZhLnB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IC4zZW07IH1cXG5cXG4uZmEtc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyOyB9XFxuXFxuLmZhLXB1bHNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7IH0gfVxcblxcbi5mYS1yb3RhdGUtOTAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxcblxcbi5mYS1yb3RhdGUtMTgwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cXG5cXG4uZmEtcm90YXRlLTI3MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpOyB9XFxuXFxuLmZhLWZsaXAtaG9yaXpvbnRhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTsgfVxcblxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpOyB9XFxuXFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIGZpbHRlcjogbm9uZTsgfVxcblxcbi5mYS1zdGFjayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcblxcbi5mYS1zdGFjay0xeCwgLmZhLXN0YWNrLTJ4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5mYS1zdGFjay0xeCB7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbi5mYS1zdGFjay0yeCB7XFxuICBmb250LXNpemU6IDJlbTsgfVxcblxcbi5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLyogRm9udCBBd2Vzb21lIHVzZXMgdGhlIFVuaWNvZGUgUHJpdmF0ZSBVc2UgQXJlYSAoUFVBKSB0byBlbnN1cmUgc2NyZWVuXFxuICAgcmVhZGVycyBkbyBub3QgcmVhZCBvZmYgcmFuZG9tIGNoYXJhY3RlcnMgdGhhdCByZXByZXNlbnQgaWNvbnMgKi9cXG4uZmEtZ2xhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgIBcXFwiOyB9XFxuXFxuLmZhLW11c2ljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CBXFxcIjsgfVxcblxcbi5mYS1zZWFyY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgIJcXFwiOyB9XFxuXFxuLmZhLWVudmVsb3BlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgINcXFwiOyB9XFxuXFxuLmZhLWhlYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CEXFxcIjsgfVxcblxcbi5mYS1zdGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CFXFxcIjsgfVxcblxcbi5mYS1zdGFyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgIZcXFwiOyB9XFxuXFxuLmZhLXVzZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgIdcXFwiOyB9XFxuXFxuLmZhLWZpbG06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgIhcXFwiOyB9XFxuXFxuLmZhLXRoLWxhcmdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CJXFxcIjsgfVxcblxcbi5mYS10aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AilxcXCI7IH1cXG5cXG4uZmEtdGgtbGlzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ai1xcXCI7IH1cXG5cXG4uZmEtY2hlY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgIxcXFwiOyB9XFxuXFxuLmZhLXJlbW92ZTpiZWZvcmUsXFxuLmZhLWNsb3NlOmJlZm9yZSxcXG4uZmEtdGltZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgI1cXFwiOyB9XFxuXFxuLmZhLXNlYXJjaC1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74COXFxcIjsgfVxcblxcbi5mYS1zZWFyY2gtbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgJBcXFwiOyB9XFxuXFxuLmZhLXBvd2VyLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AkVxcXCI7IH1cXG5cXG4uZmEtc2lnbmFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CSXFxcIjsgfVxcblxcbi5mYS1nZWFyOmJlZm9yZSxcXG4uZmEtY29nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CTXFxcIjsgfVxcblxcbi5mYS10cmFzaC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CUXFxcIjsgfVxcblxcbi5mYS1ob21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CVXFxcIjsgfVxcblxcbi5mYS1maWxlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgJZcXFwiOyB9XFxuXFxuLmZhLWNsb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgJdcXFwiOyB9XFxuXFxuLmZhLXJvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgJhcXFwiOyB9XFxuXFxuLmZhLWRvd25sb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CZXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1jaXJjbGUtby1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CaXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1jaXJjbGUtby11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Am1xcXCI7IH1cXG5cXG4uZmEtaW5ib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgJxcXFwiOyB9XFxuXFxuLmZhLXBsYXktY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgJ1cXFwiOyB9XFxuXFxuLmZhLXJvdGF0ZS1yaWdodDpiZWZvcmUsXFxuLmZhLXJlcGVhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AnlxcXCI7IH1cXG5cXG4uZmEtcmVmcmVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AoVxcXCI7IH1cXG5cXG4uZmEtbGlzdC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgKJcXFwiOyB9XFxuXFxuLmZhLWxvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgKNcXFwiOyB9XFxuXFxuLmZhLWZsYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgKRcXFwiOyB9XFxuXFxuLmZhLWhlYWRwaG9uZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgKVcXFwiOyB9XFxuXFxuLmZhLXZvbHVtZS1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgKZcXFwiOyB9XFxuXFxuLmZhLXZvbHVtZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CnXFxcIjsgfVxcblxcbi5mYS12b2x1bWUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgKhcXFwiOyB9XFxuXFxuLmZhLXFyY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AqVxcXCI7IH1cXG5cXG4uZmEtYmFyY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AqlxcXCI7IH1cXG5cXG4uZmEtdGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CrXFxcIjsgfVxcblxcbi5mYS10YWdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CsXFxcIjsgfVxcblxcbi5mYS1ib29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CtXFxcIjsgfVxcblxcbi5mYS1ib29rbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArlxcXCI7IH1cXG5cXG4uZmEtcHJpbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK9cXFwiOyB9XFxuXFxuLmZhLWNhbWVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AsFxcXCI7IH1cXG5cXG4uZmEtZm9udDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AsVxcXCI7IH1cXG5cXG4uZmEtYm9sZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AslxcXCI7IH1cXG5cXG4uZmEtaXRhbGljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CzXFxcIjsgfVxcblxcbi5mYS10ZXh0LWhlaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AtFxcXCI7IH1cXG5cXG4uZmEtdGV4dC13aWR0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AtVxcXCI7IH1cXG5cXG4uZmEtYWxpZ24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AtlxcXCI7IH1cXG5cXG4uZmEtYWxpZ24tY2VudGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74C3XFxcIjsgfVxcblxcbi5mYS1hbGlnbi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AuFxcXCI7IH1cXG5cXG4uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AuVxcXCI7IH1cXG5cXG4uZmEtbGlzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AulxcXCI7IH1cXG5cXG4uZmEtZGVkZW50OmJlZm9yZSxcXG4uZmEtb3V0ZGVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Au1xcXCI7IH1cXG5cXG4uZmEtaW5kZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74C8XFxcIjsgfVxcblxcbi5mYS12aWRlby1jYW1lcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgL1cXFwiOyB9XFxuXFxuLmZhLXBob3RvOmJlZm9yZSxcXG4uZmEtaW1hZ2U6YmVmb3JlLFxcbi5mYS1waWN0dXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgL5cXFwiOyB9XFxuXFxuLmZhLXBlbmNpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BgFxcXCI7IH1cXG5cXG4uZmEtbWFwLW1hcmtlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BgVxcXCI7IH1cXG5cXG4uZmEtYWRqdXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GCXFxcIjsgfVxcblxcbi5mYS10aW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GDXFxcIjsgfVxcblxcbi5mYS1lZGl0OmJlZm9yZSxcXG4uZmEtcGVuY2lsLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GEXFxcIjsgfVxcblxcbi5mYS1zaGFyZS1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BhVxcXCI7IH1cXG5cXG4uZmEtY2hlY2stc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgYZcXFwiOyB9XFxuXFxuLmZhLWFycm93czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bh1xcXCI7IH1cXG5cXG4uZmEtc3RlcC1iYWNrd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BiFxcXCI7IH1cXG5cXG4uZmEtZmFzdC1iYWNrd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BiVxcXCI7IH1cXG5cXG4uZmEtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgYpcXFwiOyB9XFxuXFxuLmZhLXBsYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgYtcXFwiOyB9XFxuXFxuLmZhLXBhdXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GMXFxcIjsgfVxcblxcbi5mYS1zdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GNXFxcIjsgfVxcblxcbi5mYS1mb3J3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GOXFxcIjsgfVxcblxcbi5mYS1mYXN0LWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZBcXFwiOyB9XFxuXFxuLmZhLXN0ZXAtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BkVxcXCI7IH1cXG5cXG4uZmEtZWplY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZJcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bk1xcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BlFxcXCI7IH1cXG5cXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZVcXFwiOyB9XFxuXFxuLmZhLW1pbnVzLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BllxcXCI7IH1cXG5cXG4uZmEtdGltZXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GXXFxcIjsgfVxcblxcbi5mYS1jaGVjay1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZhcXFwiOyB9XFxuXFxuLmZhLXF1ZXN0aW9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BmVxcXCI7IH1cXG5cXG4uZmEtaW5mby1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZpcXFwiOyB9XFxuXFxuLmZhLWNyb3NzaGFpcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZtcXFwiOyB9XFxuXFxuLmZhLXRpbWVzLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GcXFxcIjsgfVxcblxcbi5mYS1jaGVjay1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BnVxcXCI7IH1cXG5cXG4uZmEtYmFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GeXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GgXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BoVxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgaJcXFwiOyB9XFxuXFxuLmZhLWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgaNcXFwiOyB9XFxuXFxuLmZhLW1haWwtZm9yd2FyZDpiZWZvcmUsXFxuLmZhLXNoYXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GkXFxcIjsgfVxcblxcbi5mYS1leHBhbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgaVcXFwiOyB9XFxuXFxuLmZhLWNvbXByZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GmXFxcIjsgfVxcblxcbi5mYS1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GnXFxcIjsgfVxcblxcbi5mYS1taW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BqFxcXCI7IH1cXG5cXG4uZmEtYXN0ZXJpc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgalcXFwiOyB9XFxuXFxuLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BqlxcXCI7IH1cXG5cXG4uZmEtZ2lmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bq1xcXCI7IH1cXG5cXG4uZmEtbGVhZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BrFxcXCI7IH1cXG5cXG4uZmEtZmlyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BrVxcXCI7IH1cXG5cXG4uZmEtZXllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GuXFxcIjsgfVxcblxcbi5mYS1leWUtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbBcXFwiOyB9XFxuXFxuLmZhLXdhcm5pbmc6YmVmb3JlLFxcbi5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BsVxcXCI7IH1cXG5cXG4uZmEtcGxhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbJcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GzXFxcIjsgfVxcblxcbi5mYS1yYW5kb206YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbRcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbVcXFwiOyB9XFxuXFxuLmZhLW1hZ25ldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BtlxcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bt1xcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74G4XFxcIjsgfVxcblxcbi5mYS1yZXR3ZWV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74G5XFxcIjsgfVxcblxcbi5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74G6XFxcIjsgfVxcblxcbi5mYS1mb2xkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbtcXFwiOyB9XFxuXFxuLmZhLWZvbGRlci1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74G8XFxcIjsgfVxcblxcbi5mYS1hcnJvd3MtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BvVxcXCI7IH1cXG5cXG4uZmEtYXJyb3dzLWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgb5cXFwiOyB9XFxuXFxuLmZhLWJhci1jaGFydC1vOmJlZm9yZSxcXG4uZmEtYmFyLWNoYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KAXFxcIjsgfVxcblxcbi5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CgVxcXCI7IH1cXG5cXG4uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KCXFxcIjsgfVxcblxcbi5mYS1jYW1lcmEtcmV0cm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgoNcXFwiOyB9XFxuXFxuLmZhLWtleTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ChFxcXCI7IH1cXG5cXG4uZmEtZ2VhcnM6YmVmb3JlLFxcbi5mYS1jb2dzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KFXFxcIjsgfVxcblxcbi5mYS1jb21tZW50czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ChlxcXCI7IH1cXG5cXG4uZmEtdGh1bWJzLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgodcXFwiOyB9XFxuXFxuLmZhLXRodW1icy1vLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgohcXFwiOyB9XFxuXFxuLmZhLXN0YXItaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CiVxcXCI7IH1cXG5cXG4uZmEtaGVhcnQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CilxcXCI7IH1cXG5cXG4uZmEtc2lnbi1vdXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgotcXFwiOyB9XFxuXFxuLmZhLWxpbmtlZGluLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CjFxcXCI7IH1cXG5cXG4uZmEtdGh1bWItdGFjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CjVxcXCI7IH1cXG5cXG4uZmEtZXh0ZXJuYWwtbGluazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CjlxcXCI7IH1cXG5cXG4uZmEtc2lnbi1pbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CkFxcXCI7IH1cXG5cXG4uZmEtdHJvcGh5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KRXFxcIjsgfVxcblxcbi5mYS1naXRodWItc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KSXFxcIjsgfVxcblxcbi5mYS11cGxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgpNcXFwiOyB9XFxuXFxuLmZhLWxlbW9uLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgpRcXFwiOyB9XFxuXFxuLmZhLXBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KVXFxcIjsgfVxcblxcbi5mYS1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CllxcXCI7IH1cXG5cXG4uZmEtYm9va21hcmstbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Cl1xcXCI7IH1cXG5cXG4uZmEtcGhvbmUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KYXFxcIjsgfVxcblxcbi5mYS10d2l0dGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KZXFxcIjsgfVxcblxcbi5mYS1mYWNlYm9vay1mOmJlZm9yZSxcXG4uZmEtZmFjZWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgppcXFwiOyB9XFxuXFxuLmZhLWdpdGh1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Cm1xcXCI7IH1cXG5cXG4uZmEtdW5sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KcXFxcIjsgfVxcblxcbi5mYS1jcmVkaXQtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CnVxcXCI7IH1cXG5cXG4uZmEtZmVlZDpiZWZvcmUsXFxuLmZhLXJzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CnlxcXCI7IH1cXG5cXG4uZmEtaGRkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgqBcXFwiOyB9XFxuXFxuLmZhLWJ1bGxob3JuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KhXFxcIjsgfVxcblxcbi5mYS1iZWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OzXFxcIjsgfVxcblxcbi5mYS1jZXJ0aWZpY2F0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Co1xcXCI7IH1cXG5cXG4uZmEtaGFuZC1vLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KkXFxcIjsgfVxcblxcbi5mYS1oYW5kLW8tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CpVxcXCI7IH1cXG5cXG4uZmEtaGFuZC1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KmXFxcIjsgfVxcblxcbi5mYS1oYW5kLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Cp1xcXCI7IH1cXG5cXG4uZmEtYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgqhcXFwiOyB9XFxuXFxuLmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CqVxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KqXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1jaXJjbGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Cq1xcXCI7IH1cXG5cXG4uZmEtZ2xvYmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgqxcXFwiOyB9XFxuXFxuLmZhLXdyZW5jaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CrVxcXCI7IH1cXG5cXG4uZmEtdGFza3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgq5cXFwiOyB9XFxuXFxuLmZhLWZpbHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CsFxcXCI7IH1cXG5cXG4uZmEtYnJpZWZjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KxXFxcIjsgfVxcblxcbi5mYS1hcnJvd3MtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KyXFxcIjsgfVxcblxcbi5mYS1ncm91cDpiZWZvcmUsXFxuLmZhLXVzZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OAXFxcIjsgfVxcblxcbi5mYS1jaGFpbjpiZWZvcmUsXFxuLmZhLWxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg4FcXFwiOyB9XFxuXFxuLmZhLWNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OCXFxcIjsgfVxcblxcbi5mYS1mbGFzazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dg1xcXCI7IH1cXG5cXG4uZmEtY3V0OmJlZm9yZSxcXG4uZmEtc2Npc3NvcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg4RcXFwiOyB9XFxuXFxuLmZhLWNvcHk6YmVmb3JlLFxcbi5mYS1maWxlcy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OFXFxcIjsgfVxcblxcbi5mYS1wYXBlcmNsaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg4ZcXFwiOyB9XFxuXFxuLmZhLXNhdmU6YmVmb3JlLFxcbi5mYS1mbG9wcHktbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dh1xcXCI7IH1cXG5cXG4uZmEtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OIXFxcIjsgfVxcblxcbi5mYS1uYXZpY29uOmJlZm9yZSxcXG4uZmEtcmVvcmRlcjpiZWZvcmUsXFxuLmZhLWJhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg4lcXFwiOyB9XFxuXFxuLmZhLWxpc3QtdWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg4pcXFwiOyB9XFxuXFxuLmZhLWxpc3Qtb2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg4tcXFwiOyB9XFxuXFxuLmZhLXN0cmlrZXRocm91Z2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg4xcXFwiOyB9XFxuXFxuLmZhLXVuZGVybGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DjVxcXCI7IH1cXG5cXG4uZmEtdGFibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg45cXFwiOyB9XFxuXFxuLmZhLW1hZ2ljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OQXFxcIjsgfVxcblxcbi5mYS10cnVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DkVxcXCI7IH1cXG5cXG4uZmEtcGludGVyZXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OSXFxcIjsgfVxcblxcbi5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OTXFxcIjsgfVxcblxcbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5RcXFwiOyB9XFxuXFxuLmZhLWdvb2dsZS1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OVXFxcIjsgfVxcblxcbi5mYS1tb25leTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DllxcXCI7IH1cXG5cXG4uZmEtY2FyZXQtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dl1xcXCI7IH1cXG5cXG4uZmEtY2FyZXQtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5hcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5lcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OaXFxcIjsgfVxcblxcbi5mYS1jb2x1bW5zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ObXFxcIjsgfVxcblxcbi5mYS11bnNvcnRlZDpiZWZvcmUsXFxuLmZhLXNvcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5xcXFwiOyB9XFxuXFxuLmZhLXNvcnQtZG93bjpiZWZvcmUsXFxuLmZhLXNvcnQtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DnVxcXCI7IH1cXG5cXG4uZmEtc29ydC11cDpiZWZvcmUsXFxuLmZhLXNvcnQtYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OeXFxcIjsgfVxcblxcbi5mYS1lbnZlbG9wZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DoFxcXCI7IH1cXG5cXG4uZmEtbGlua2VkaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg6FcXFwiOyB9XFxuXFxuLmZhLXJvdGF0ZS1sZWZ0OmJlZm9yZSxcXG4uZmEtdW5kbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DolxcXCI7IH1cXG5cXG4uZmEtbGVnYWw6YmVmb3JlLFxcbi5mYS1nYXZlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Do1xcXCI7IH1cXG5cXG4uZmEtZGFzaGJvYXJkOmJlZm9yZSxcXG4uZmEtdGFjaG9tZXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DpFxcXCI7IH1cXG5cXG4uZmEtY29tbWVudC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OlXFxcIjsgfVxcblxcbi5mYS1jb21tZW50cy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OmXFxcIjsgfVxcblxcbi5mYS1mbGFzaDpiZWZvcmUsXFxuLmZhLWJvbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg6dcXFwiOyB9XFxuXFxuLmZhLXNpdGVtYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg6hcXFwiOyB9XFxuXFxuLmZhLXVtYnJlbGxhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OpXFxcIjsgfVxcblxcbi5mYS1wYXN0ZTpiZWZvcmUsXFxuLmZhLWNsaXBib2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DqlxcXCI7IH1cXG5cXG4uZmEtbGlnaHRidWxiLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg6tcXFwiOyB9XFxuXFxuLmZhLWV4Y2hhbmdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OsXFxcIjsgfVxcblxcbi5mYS1jbG91ZC1kb3dubG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DrVxcXCI7IH1cXG5cXG4uZmEtY2xvdWQtdXBsb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OuXFxcIjsgfVxcblxcbi5mYS11c2VyLW1kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OwXFxcIjsgfVxcblxcbi5mYS1zdGV0aG9zY29wZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DsVxcXCI7IH1cXG5cXG4uZmEtc3VpdGNhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg7JcXFwiOyB9XFxuXFxuLmZhLWJlbGwtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ColxcXCI7IH1cXG5cXG4uZmEtY29mZmVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74O0XFxcIjsgfVxcblxcbi5mYS1jdXRsZXJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74O1XFxcIjsgfVxcblxcbi5mYS1maWxlLXRleHQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DtlxcXCI7IH1cXG5cXG4uZmEtYnVpbGRpbmctbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dt1xcXCI7IH1cXG5cXG4uZmEtaG9zcGl0YWwtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DuFxcXCI7IH1cXG5cXG4uZmEtYW1idWxhbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74O5XFxcIjsgfVxcblxcbi5mYS1tZWRraXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg7pcXFwiOyB9XFxuXFxuLmZhLWZpZ2h0ZXItamV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74O7XFxcIjsgfVxcblxcbi5mYS1iZWVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74O8XFxcIjsgfVxcblxcbi5mYS1oLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DvVxcXCI7IH1cXG5cXG4uZmEtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg75cXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SAXFxcIjsgfVxcblxcbi5mYS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhIFcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EglxcXCI7IH1cXG5cXG4uZmEtYW5nbGUtZG91YmxlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhINcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhIRcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SFXFxcIjsgfVxcblxcbi5mYS1hbmdsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EhlxcXCI7IH1cXG5cXG4uZmEtYW5nbGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Eh1xcXCI7IH1cXG5cXG4uZmEtZGVza3RvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EiFxcXCI7IH1cXG5cXG4uZmEtbGFwdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SJXFxcIjsgfVxcblxcbi5mYS10YWJsZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhIpcXFwiOyB9XFxuXFxuLmZhLW1vYmlsZS1waG9uZTpiZWZvcmUsXFxuLmZhLW1vYmlsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ei1xcXCI7IH1cXG5cXG4uZmEtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhIxcXFwiOyB9XFxuXFxuLmZhLXF1b3RlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhI1cXFwiOyB9XFxuXFxuLmZhLXF1b3RlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SOXFxcIjsgfVxcblxcbi5mYS1zcGlubmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SQXFxcIjsgfVxcblxcbi5mYS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhJFcXFwiOyB9XFxuXFxuLmZhLW1haWwtcmVwbHk6YmVmb3JlLFxcbi5mYS1yZXBseTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EklxcXCI7IH1cXG5cXG4uZmEtZ2l0aHViLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ek1xcXCI7IH1cXG5cXG4uZmEtZm9sZGVyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhJRcXFwiOyB9XFxuXFxuLmZhLWZvbGRlci1vcGVuLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhJVcXFwiOyB9XFxuXFxuLmZhLXNtaWxlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhJhcXFwiOyB9XFxuXFxuLmZhLWZyb3duLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhJlcXFwiOyB9XFxuXFxuLmZhLW1laC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SaXFxcIjsgfVxcblxcbi5mYS1nYW1lcGFkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SbXFxcIjsgfVxcblxcbi5mYS1rZXlib2FyZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ScXFxcIjsgfVxcblxcbi5mYS1mbGFnLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhJ1cXFwiOyB9XFxuXFxuLmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SeXFxcIjsgfVxcblxcbi5mYS10ZXJtaW5hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EoFxcXCI7IH1cXG5cXG4uZmEtY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EoVxcXCI7IH1cXG5cXG4uZmEtbWFpbC1yZXBseS1hbGw6YmVmb3JlLFxcbi5mYS1yZXBseS1hbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhKJcXFwiOyB9XFxuXFxuLmZhLXN0YXItaGFsZi1lbXB0eTpiZWZvcmUsXFxuLmZhLXN0YXItaGFsZi1mdWxsOmJlZm9yZSxcXG4uZmEtc3Rhci1oYWxmLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhKNcXFwiOyB9XFxuXFxuLmZhLWxvY2F0aW9uLWFycm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SkXFxcIjsgfVxcblxcbi5mYS1jcm9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SlXFxcIjsgfVxcblxcbi5mYS1jb2RlLWZvcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhKZcXFwiOyB9XFxuXFxuLmZhLXVubGluazpiZWZvcmUsXFxuLmZhLWNoYWluLWJyb2tlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ep1xcXCI7IH1cXG5cXG4uZmEtcXVlc3Rpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhKhcXFwiOyB9XFxuXFxuLmZhLWluZm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhKlcXFwiOyB9XFxuXFxuLmZhLWV4Y2xhbWF0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SqXFxcIjsgfVxcblxcbi5mYS1zdXBlcnNjcmlwdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Eq1xcXCI7IH1cXG5cXG4uZmEtc3Vic2NyaXB0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SsXFxcIjsgfVxcblxcbi5mYS1lcmFzZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhK1cXFwiOyB9XFxuXFxuLmZhLXB1enpsZS1waWVjZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ErlxcXCI7IH1cXG5cXG4uZmEtbWljcm9waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EsFxcXCI7IH1cXG5cXG4uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EsVxcXCI7IH1cXG5cXG4uZmEtc2hpZWxkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SyXFxcIjsgfVxcblxcbi5mYS1jYWxlbmRhci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SzXFxcIjsgfVxcblxcbi5mYS1maXJlLWV4dGluZ3Vpc2hlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EtFxcXCI7IH1cXG5cXG4uZmEtcm9ja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74S1XFxcIjsgfVxcblxcbi5mYS1tYXhjZG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLZcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLdcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74S4XFxcIjsgfVxcblxcbi5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EuVxcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi1jaXJjbGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EulxcXCI7IH1cXG5cXG4uZmEtaHRtbDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLtcXFwiOyB9XFxuXFxuLmZhLWNzczM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLxcXFwiOyB9XFxuXFxuLmZhLWFuY2hvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EvVxcXCI7IH1cXG5cXG4uZmEtdW5sb2NrLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EvlxcXCI7IH1cXG5cXG4uZmEtYnVsbHNleWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhYBcXFwiOyB9XFxuXFxuLmZhLWVsbGlwc2lzLWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhYFcXFwiOyB9XFxuXFxuLmZhLWVsbGlwc2lzLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhYJcXFwiOyB9XFxuXFxuLmZhLXJzcy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhYNcXFwiOyB9XFxuXFxuLmZhLXBsYXktY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WEXFxcIjsgfVxcblxcbi5mYS10aWNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhYVcXFwiOyB9XFxuXFxuLmZhLW1pbnVzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FhlxcXCI7IH1cXG5cXG4uZmEtbWludXMtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhYdcXFwiOyB9XFxuXFxuLmZhLWxldmVsLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WIXFxcIjsgfVxcblxcbi5mYS1sZXZlbC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WJXFxcIjsgfVxcblxcbi5mYS1jaGVjay1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhYpcXFwiOyB9XFxuXFxuLmZhLXBlbmNpbC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhYtcXFwiOyB9XFxuXFxuLmZhLWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WMXFxcIjsgfVxcblxcbi5mYS1zaGFyZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhY1cXFwiOyB9XFxuXFxuLmZhLWNvbXBhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhY5cXFwiOyB9XFxuXFxuLmZhLXRvZ2dsZS1kb3duOmJlZm9yZSxcXG4uZmEtY2FyZXQtc3F1YXJlLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FkFxcXCI7IH1cXG5cXG4uZmEtdG9nZ2xlLXVwOmJlZm9yZSxcXG4uZmEtY2FyZXQtc3F1YXJlLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZFcXFwiOyB9XFxuXFxuLmZhLXRvZ2dsZS1yaWdodDpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WSXFxcIjsgfVxcblxcbi5mYS1ldXJvOmJlZm9yZSxcXG4uZmEtZXVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WTXFxcIjsgfVxcblxcbi5mYS1nYnA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZRcXFwiOyB9XFxuXFxuLmZhLWRvbGxhcjpiZWZvcmUsXFxuLmZhLXVzZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FlVxcXCI7IH1cXG5cXG4uZmEtcnVwZWU6YmVmb3JlLFxcbi5mYS1pbnI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZZcXFwiOyB9XFxuXFxuLmZhLWNueTpiZWZvcmUsXFxuLmZhLXJtYjpiZWZvcmUsXFxuLmZhLXllbjpiZWZvcmUsXFxuLmZhLWpweTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Fl1xcXCI7IH1cXG5cXG4uZmEtcnVibGU6YmVmb3JlLFxcbi5mYS1yb3VibGU6YmVmb3JlLFxcbi5mYS1ydWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZhcXFwiOyB9XFxuXFxuLmZhLXdvbjpiZWZvcmUsXFxuLmZhLWtydzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FmVxcXCI7IH1cXG5cXG4uZmEtYml0Y29pbjpiZWZvcmUsXFxuLmZhLWJ0YzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FmlxcXCI7IH1cXG5cXG4uZmEtZmlsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Fm1xcXCI7IH1cXG5cXG4uZmEtZmlsZS10ZXh0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WcXFxcIjsgfVxcblxcbi5mYS1zb3J0LWFscGhhLWFzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FnVxcXCI7IH1cXG5cXG4uZmEtc29ydC1hbHBoYS1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WeXFxcIjsgfVxcblxcbi5mYS1zb3J0LWFtb3VudC1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhaBcXFwiOyB9XFxuXFxuLmZhLXNvcnQtYW1vdW50LWRlc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhaFcXFwiOyB9XFxuXFxuLmZhLXNvcnQtbnVtZXJpYy1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhaJcXFwiOyB9XFxuXFxuLmZhLXNvcnQtbnVtZXJpYy1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WjXFxcIjsgfVxcblxcbi5mYS10aHVtYnMtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhaRcXFwiOyB9XFxuXFxuLmZhLXRodW1icy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WlXFxcIjsgfVxcblxcbi5mYS15b3V0dWJlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FplxcXCI7IH1cXG5cXG4uZmEteW91dHViZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Fp1xcXCI7IH1cXG5cXG4uZmEteGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FqFxcXCI7IH1cXG5cXG4uZmEteGluZy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhalcXFwiOyB9XFxuXFxuLmZhLXlvdXR1YmUtcGxheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FqlxcXCI7IH1cXG5cXG4uZmEtZHJvcGJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Fq1xcXCI7IH1cXG5cXG4uZmEtc3RhY2stb3ZlcmZsb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhaxcXFwiOyB9XFxuXFxuLmZhLWluc3RhZ3JhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FrVxcXCI7IH1cXG5cXG4uZmEtZmxpY2tyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WuXFxcIjsgfVxcblxcbi5mYS1hZG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhbBcXFwiOyB9XFxuXFxuLmZhLWJpdGJ1Y2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FsVxcXCI7IH1cXG5cXG4uZmEtYml0YnVja2V0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FslxcXCI7IH1cXG5cXG4uZmEtdHVtYmxyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WzXFxcIjsgfVxcblxcbi5mYS10dW1ibHItc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74W0XFxcIjsgfVxcblxcbi5mYS1sb25nLWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhbVcXFwiOyB9XFxuXFxuLmZhLWxvbmctYXJyb3ctdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhbZcXFwiOyB9XFxuXFxuLmZhLWxvbmctYXJyb3ctbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ft1xcXCI7IH1cXG5cXG4uZmEtbG9uZy1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FuFxcXCI7IH1cXG5cXG4uZmEtYXBwbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhblcXFwiOyB9XFxuXFxuLmZhLXdpbmRvd3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhbpcXFwiOyB9XFxuXFxuLmZhLWFuZHJvaWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhbtcXFwiOyB9XFxuXFxuLmZhLWxpbnV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74W8XFxcIjsgfVxcblxcbi5mYS1kcmliYmJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FvVxcXCI7IH1cXG5cXG4uZmEtc2t5cGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhb5cXFwiOyB9XFxuXFxuLmZhLWZvdXJzcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhoBcXFwiOyB9XFxuXFxuLmZhLXRyZWxsbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GgVxcXCI7IH1cXG5cXG4uZmEtZmVtYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aCXFxcIjsgfVxcblxcbi5mYS1tYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aDXFxcIjsgfVxcblxcbi5mYS1naXR0aXA6YmVmb3JlLFxcbi5mYS1ncmF0aXBheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GhFxcXCI7IH1cXG5cXG4uZmEtc3VuLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhoVcXFwiOyB9XFxuXFxuLmZhLW1vb24tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GhlxcXCI7IH1cXG5cXG4uZmEtYXJjaGl2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gh1xcXCI7IH1cXG5cXG4uZmEtYnVnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aIXFxcIjsgfVxcblxcbi5mYS12azpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GiVxcXCI7IH1cXG5cXG4uZmEtd2VpYm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhopcXFwiOyB9XFxuXFxuLmZhLXJlbnJlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gi1xcXCI7IH1cXG5cXG4uZmEtcGFnZWxpbmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aMXFxcIjsgfVxcblxcbi5mYS1zdGFjay1leGNoYW5nZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GjVxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctY2lyY2xlLW8tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvho5cXFwiOyB9XFxuXFxuLmZhLWFycm93LWNpcmNsZS1vLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhpBcXFwiOyB9XFxuXFxuLmZhLXRvZ2dsZS1sZWZ0OmJlZm9yZSxcXG4uZmEtY2FyZXQtc3F1YXJlLW8tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GkVxcXCI7IH1cXG5cXG4uZmEtZG90LWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aSXFxcIjsgfVxcblxcbi5mYS13aGVlbGNoYWlyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aTXFxcIjsgfVxcblxcbi5mYS12aW1lby1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhpRcXFwiOyB9XFxuXFxuLmZhLXR1cmtpc2gtbGlyYTpiZWZvcmUsXFxuLmZhLXRyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GlVxcXCI7IH1cXG5cXG4uZmEtcGx1cy1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GllxcXCI7IH1cXG5cXG4uZmEtc3BhY2Utc2h1dHRsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gl1xcXCI7IH1cXG5cXG4uZmEtc2xhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhphcXFwiOyB9XFxuXFxuLmZhLWVudmVsb3BlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GmVxcXCI7IH1cXG5cXG4uZmEtd29yZHByZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aaXFxcIjsgfVxcblxcbi5mYS1vcGVuaWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhptcXFwiOyB9XFxuXFxuLmZhLWluc3RpdHV0aW9uOmJlZm9yZSxcXG4uZmEtYmFuazpiZWZvcmUsXFxuLmZhLXVuaXZlcnNpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhpxcXFwiOyB9XFxuXFxuLmZhLW1vcnRhci1ib2FyZDpiZWZvcmUsXFxuLmZhLWdyYWR1YXRpb24tY2FwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74adXFxcIjsgfVxcblxcbi5mYS15YWhvbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GnlxcXCI7IH1cXG5cXG4uZmEtZ29vZ2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74agXFxcIjsgfVxcblxcbi5mYS1yZWRkaXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqFcXFwiOyB9XFxuXFxuLmZhLXJlZGRpdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqJcXFwiOyB9XFxuXFxuLmZhLXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Go1xcXCI7IH1cXG5cXG4uZmEtc3R1bWJsZXVwb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqRcXFwiOyB9XFxuXFxuLmZhLWRlbGljaW91czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GpVxcXCI7IH1cXG5cXG4uZmEtZGlnZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GplxcXCI7IH1cXG5cXG4uZmEtcGllZC1waXBlci1wcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gp1xcXCI7IH1cXG5cXG4uZmEtcGllZC1waXBlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqhcXFwiOyB9XFxuXFxuLmZhLWRydXBhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GqVxcXCI7IH1cXG5cXG4uZmEtam9vbWxhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aqXFxcIjsgfVxcblxcbi5mYS1sYW5ndWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gq1xcXCI7IH1cXG5cXG4uZmEtZmF4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74asXFxcIjsgfVxcblxcbi5mYS1idWlsZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GrVxcXCI7IH1cXG5cXG4uZmEtY2hpbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhq5cXFwiOyB9XFxuXFxuLmZhLXBhdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GsFxcXCI7IH1cXG5cXG4uZmEtc3Bvb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrFcXFwiOyB9XFxuXFxuLmZhLWN1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrJcXFwiOyB9XFxuXFxuLmZhLWN1YmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74azXFxcIjsgfVxcblxcbi5mYS1iZWhhbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74a0XFxcIjsgfVxcblxcbi5mYS1iZWhhbmNlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GtVxcXCI7IH1cXG5cXG4uZmEtc3RlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrZcXFwiOyB9XFxuXFxuLmZhLXN0ZWFtLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gt1xcXCI7IH1cXG5cXG4uZmEtcmVjeWNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GuFxcXCI7IH1cXG5cXG4uZmEtYXV0b21vYmlsZTpiZWZvcmUsXFxuLmZhLWNhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GuVxcXCI7IH1cXG5cXG4uZmEtY2FiOmJlZm9yZSxcXG4uZmEtdGF4aTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GulxcXCI7IH1cXG5cXG4uZmEtdHJlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gu1xcXCI7IH1cXG5cXG4uZmEtc3BvdGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GvFxcXCI7IH1cXG5cXG4uZmEtZGV2aWFudGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GvVxcXCI7IH1cXG5cXG4uZmEtc291bmRjbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GvlxcXCI7IH1cXG5cXG4uZmEtZGF0YWJhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh4BcXFwiOyB9XFxuXFxuLmZhLWZpbGUtcGRmLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh4FcXFwiOyB9XFxuXFxuLmZhLWZpbGUtd29yZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eCXFxcIjsgfVxcblxcbi5mYS1maWxlLWV4Y2VsLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh4NcXFwiOyB9XFxuXFxuLmZhLWZpbGUtcG93ZXJwb2ludC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eEXFxcIjsgfVxcblxcbi5mYS1maWxlLXBob3RvLW86YmVmb3JlLFxcbi5mYS1maWxlLXBpY3R1cmUtbzpiZWZvcmUsXFxuLmZhLWZpbGUtaW1hZ2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HhVxcXCI7IH1cXG5cXG4uZmEtZmlsZS16aXAtbzpiZWZvcmUsXFxuLmZhLWZpbGUtYXJjaGl2ZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eGXFxcIjsgfVxcblxcbi5mYS1maWxlLXNvdW5kLW86YmVmb3JlLFxcbi5mYS1maWxlLWF1ZGlvLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh4dcXFwiOyB9XFxuXFxuLmZhLWZpbGUtbW92aWUtbzpiZWZvcmUsXFxuLmZhLWZpbGUtdmlkZW8tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HiFxcXCI7IH1cXG5cXG4uZmEtZmlsZS1jb2RlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh4lcXFwiOyB9XFxuXFxuLmZhLXZpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh4pcXFwiOyB9XFxuXFxuLmZhLWNvZGVwZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh4tcXFwiOyB9XFxuXFxuLmZhLWpzZmlkZGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eMXFxcIjsgfVxcblxcbi5mYS1saWZlLWJvdXk6YmVmb3JlLFxcbi5mYS1saWZlLWJ1b3k6YmVmb3JlLFxcbi5mYS1saWZlLXNhdmVyOmJlZm9yZSxcXG4uZmEtc3VwcG9ydDpiZWZvcmUsXFxuLmZhLWxpZmUtcmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HjVxcXCI7IH1cXG5cXG4uZmEtY2lyY2xlLW8tbm90Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh45cXFwiOyB9XFxuXFxuLmZhLXJhOmJlZm9yZSxcXG4uZmEtcmVzaXN0YW5jZTpiZWZvcmUsXFxuLmZhLXJlYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eQXFxcIjsgfVxcblxcbi5mYS1nZTpiZWZvcmUsXFxuLmZhLWVtcGlyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HkVxcXCI7IH1cXG5cXG4uZmEtZ2l0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HklxcXCI7IH1cXG5cXG4uZmEtZ2l0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eTXFxcIjsgfVxcblxcbi5mYS15LWNvbWJpbmF0b3Itc3F1YXJlOmJlZm9yZSxcXG4uZmEteWMtc3F1YXJlOmJlZm9yZSxcXG4uZmEtaGFja2VyLW5ld3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5RcXFwiOyB9XFxuXFxuLmZhLXRlbmNlbnQtd2VpYm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5VcXFwiOyB9XFxuXFxuLmZhLXFxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eWXFxcIjsgfVxcblxcbi5mYS13ZWNoYXQ6YmVmb3JlLFxcbi5mYS13ZWl4aW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5dcXFwiOyB9XFxuXFxuLmZhLXNlbmQ6YmVmb3JlLFxcbi5mYS1wYXBlci1wbGFuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HmFxcXCI7IH1cXG5cXG4uZmEtc2VuZC1vOmJlZm9yZSxcXG4uZmEtcGFwZXItcGxhbmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HmVxcXCI7IH1cXG5cXG4uZmEtaGlzdG9yeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HmlxcXCI7IH1cXG5cXG4uZmEtY2lyY2xlLXRoaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5tcXFwiOyB9XFxuXFxuLmZhLWhlYWRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HnFxcXCI7IH1cXG5cXG4uZmEtcGFyYWdyYXBoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74edXFxcIjsgfVxcblxcbi5mYS1zbGlkZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eeXFxcIjsgfVxcblxcbi5mYS1zaGFyZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh6BcXFwiOyB9XFxuXFxuLmZhLXNoYXJlLWFsdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh6FcXFwiOyB9XFxuXFxuLmZhLWJvbWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh6JcXFwiOyB9XFxuXFxuLmZhLXNvY2Nlci1iYWxsLW86YmVmb3JlLFxcbi5mYS1mdXRib2wtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ho1xcXCI7IH1cXG5cXG4uZmEtdHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ekXFxcIjsgfVxcblxcbi5mYS1iaW5vY3VsYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74elXFxcIjsgfVxcblxcbi5mYS1wbHVnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74emXFxcIjsgfVxcblxcbi5mYS1zbGlkZXNoYXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74enXFxcIjsgfVxcblxcbi5mYS10d2l0Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh6hcXFwiOyB9XFxuXFxuLmZhLXllbHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh6lcXFwiOyB9XFxuXFxuLmZhLW5ld3NwYXBlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eqXFxcIjsgfVxcblxcbi5mYS13aWZpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74erXFxcIjsgfVxcblxcbi5mYS1jYWxjdWxhdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74esXFxcIjsgfVxcblxcbi5mYS1wYXlwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh61cXFwiOyB9XFxuXFxuLmZhLWdvb2dsZS13YWxsZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh65cXFwiOyB9XFxuXFxuLmZhLWNjLXZpc2E6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh7BcXFwiOyB9XFxuXFxuLmZhLWNjLW1hc3RlcmNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh7FcXFwiOyB9XFxuXFxuLmZhLWNjLWRpc2NvdmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eyXFxcIjsgfVxcblxcbi5mYS1jYy1hbWV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ezXFxcIjsgfVxcblxcbi5mYS1jYy1wYXlwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh7RcXFwiOyB9XFxuXFxuLmZhLWNjLXN0cmlwZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HtVxcXCI7IH1cXG5cXG4uZmEtYmVsbC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HtlxcXCI7IH1cXG5cXG4uZmEtYmVsbC1zbGFzaC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74e3XFxcIjsgfVxcblxcbi5mYS10cmFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HuFxcXCI7IH1cXG5cXG4uZmEtY29weXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74e5XFxcIjsgfVxcblxcbi5mYS1hdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HulxcXCI7IH1cXG5cXG4uZmEtZXllZHJvcHBlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Hu1xcXCI7IH1cXG5cXG4uZmEtcGFpbnQtYnJ1c2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh7xcXFwiOyB9XFxuXFxuLmZhLWJpcnRoZGF5LWNha2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh71cXFwiOyB9XFxuXFxuLmZhLWFyZWEtY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh75cXFwiOyB9XFxuXFxuLmZhLXBpZS1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IgFxcXCI7IH1cXG5cXG4uZmEtbGluZS1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IgVxcXCI7IH1cXG5cXG4uZmEtbGFzdGZtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iCXFxcIjsgfVxcblxcbi5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iDXFxcIjsgfVxcblxcbi5mYS10b2dnbGUtb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iEXFxcIjsgfVxcblxcbi5mYS10b2dnbGUtb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviIVcXFwiOyB9XFxuXFxuLmZhLWJpY3ljbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviIZcXFwiOyB9XFxuXFxuLmZhLWJ1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ih1xcXCI7IH1cXG5cXG4uZmEtaW94aG9zdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IiFxcXCI7IH1cXG5cXG4uZmEtYW5nZWxsaXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iJXFxcIjsgfVxcblxcbi5mYS1jYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IilxcXCI7IH1cXG5cXG4uZmEtc2hla2VsOmJlZm9yZSxcXG4uZmEtc2hlcWVsOmJlZm9yZSxcXG4uZmEtaWxzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iLXFxcIjsgfVxcblxcbi5mYS1tZWFucGF0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IjFxcXCI7IH1cXG5cXG4uZmEtYnV5c2VsbGFkczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IjVxcXCI7IH1cXG5cXG4uZmEtY29ubmVjdGRldmVsb3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviI5cXFwiOyB9XFxuXFxuLmZhLWRhc2hjdWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iQXFxcIjsgfVxcblxcbi5mYS1mb3J1bWJlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IkVxcXCI7IH1cXG5cXG4uZmEtbGVhbnB1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IklxcXCI7IH1cXG5cXG4uZmEtc2VsbHN5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iTXFxcIjsgfVxcblxcbi5mYS1zaGlydHNpbmJ1bGs6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviJRcXFwiOyB9XFxuXFxuLmZhLXNpbXBseWJ1aWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iVXFxcIjsgfVxcblxcbi5mYS1za3lhdGxhczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IllxcXCI7IH1cXG5cXG4uZmEtY2FydC1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iXXFxcIjsgfVxcblxcbi5mYS1jYXJ0LWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviJhcXFwiOyB9XFxuXFxuLmZhLWRpYW1vbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviJlcXFwiOyB9XFxuXFxuLmZhLXNoaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviJpcXFwiOyB9XFxuXFxuLmZhLXVzZXItc2VjcmV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ibXFxcIjsgfVxcblxcbi5mYS1tb3RvcmN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74icXFxcIjsgfVxcblxcbi5mYS1zdHJlZXQtdmlldzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+InVxcXCI7IH1cXG5cXG4uZmEtaGVhcnRiZWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ieXFxcIjsgfVxcblxcbi5mYS12ZW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IoVxcXCI7IH1cXG5cXG4uZmEtbWFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IolxcXCI7IH1cXG5cXG4uZmEtbWVyY3VyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Io1xcXCI7IH1cXG5cXG4uZmEtaW50ZXJzZXg6YmVmb3JlLFxcbi5mYS10cmFuc2dlbmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IpFxcXCI7IH1cXG5cXG4uZmEtdHJhbnNnZW5kZXItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ilXFxcIjsgfVxcblxcbi5mYS12ZW51cy1kb3VibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviKZcXFwiOyB9XFxuXFxuLmZhLW1hcnMtZG91YmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74inXFxcIjsgfVxcblxcbi5mYS12ZW51cy1tYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ioXFxcIjsgfVxcblxcbi5mYS1tYXJzLXN0cm9rZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IqVxcXCI7IH1cXG5cXG4uZmEtbWFycy1zdHJva2UtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IqlxcXCI7IH1cXG5cXG4uZmEtbWFycy1zdHJva2UtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Iq1xcXCI7IH1cXG5cXG4uZmEtbmV1dGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74isXFxcIjsgfVxcblxcbi5mYS1nZW5kZXJsZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74itXFxcIjsgfVxcblxcbi5mYS1mYWNlYm9vay1vZmZpY2lhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IsFxcXCI7IH1cXG5cXG4uZmEtcGludGVyZXN0LXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLFcXFwiOyB9XFxuXFxuLmZhLXdoYXRzYXBwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iyXFxcIjsgfVxcblxcbi5mYS1zZXJ2ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLNcXFwiOyB9XFxuXFxuLmZhLXVzZXItcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ItFxcXCI7IH1cXG5cXG4uZmEtdXNlci10aW1lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ItVxcXCI7IH1cXG5cXG4uZmEtaG90ZWw6YmVmb3JlLFxcbi5mYS1iZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLZcXFwiOyB9XFxuXFxuLmZhLXZpYWNvaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLdcXFwiOyB9XFxuXFxuLmZhLXRyYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74i4XFxcIjsgfVxcblxcbi5mYS1zdWJ3YXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLlcXFwiOyB9XFxuXFxuLmZhLW1lZGl1bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IulxcXCI7IH1cXG5cXG4uZmEteWM6YmVmb3JlLFxcbi5mYS15LWNvbWJpbmF0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLtcXFwiOyB9XFxuXFxuLmZhLW9wdGluLW1vbnN0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLxcXFwiOyB9XFxuXFxuLmZhLW9wZW5jYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74i9XFxcIjsgfVxcblxcbi5mYS1leHBlZGl0ZWRzc2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviL5cXFwiOyB9XFxuXFxuLmZhLWJhdHRlcnktNDpiZWZvcmUsXFxuLmZhLWJhdHRlcnk6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYBcXFwiOyB9XFxuXFxuLmZhLWJhdHRlcnktMzpiZWZvcmUsXFxuLmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYFcXFwiOyB9XFxuXFxuLmZhLWJhdHRlcnktMjpiZWZvcmUsXFxuLmZhLWJhdHRlcnktaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JglxcXCI7IH1cXG5cXG4uZmEtYmF0dGVyeS0xOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mDXFxcIjsgfVxcblxcbi5mYS1iYXR0ZXJ5LTA6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mEXFxcIjsgfVxcblxcbi5mYS1tb3VzZS1wb2ludGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mFXFxcIjsgfVxcblxcbi5mYS1pLWN1cnNvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JhlxcXCI7IH1cXG5cXG4uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mHXFxcIjsgfVxcblxcbi5mYS1vYmplY3QtdW5ncm91cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JiFxcXCI7IH1cXG5cXG4uZmEtc3RpY2t5LW5vdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYlcXFwiOyB9XFxuXFxuLmZhLXN0aWNreS1ub3RlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYpcXFwiOyB9XFxuXFxuLmZhLWNjLWpjYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ji1xcXCI7IH1cXG5cXG4uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYxcXFwiOyB9XFxuXFxuLmZhLWNsb25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mNXFxcIjsgfVxcblxcbi5mYS1iYWxhbmNlLXNjYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mOXFxcIjsgfVxcblxcbi5mYS1ob3VyZ2xhc3MtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JkFxcXCI7IH1cXG5cXG4uZmEtaG91cmdsYXNzLTE6YmVmb3JlLFxcbi5mYS1ob3VyZ2xhc3Mtc3RhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZFcXFwiOyB9XFxuXFxuLmZhLWhvdXJnbGFzcy0yOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZJcXFwiOyB9XFxuXFxuLmZhLWhvdXJnbGFzcy0zOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLWVuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Jk1xcXCI7IH1cXG5cXG4uZmEtaG91cmdsYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mUXFxcIjsgfVxcblxcbi5mYS1oYW5kLWdyYWItbzpiZWZvcmUsXFxuLmZhLWhhbmQtcm9jay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mVXFxcIjsgfVxcblxcbi5mYS1oYW5kLXN0b3AtbzpiZWZvcmUsXFxuLmZhLWhhbmQtcGFwZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JllxcXCI7IH1cXG5cXG4uZmEtaGFuZC1zY2lzc29ycy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mXXFxcIjsgfVxcblxcbi5mYS1oYW5kLWxpemFyZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mYXFxcIjsgfVxcblxcbi5mYS1oYW5kLXNwb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZlcXFwiOyB9XFxuXFxuLmZhLWhhbmQtcG9pbnRlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74maXFxcIjsgfVxcblxcbi5mYS1oYW5kLXBlYWNlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZtcXFwiOyB9XFxuXFxuLmZhLXRyYWRlbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JnFxcXCI7IH1cXG5cXG4uZmEtcmVnaXN0ZXJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JnVxcXCI7IH1cXG5cXG4uZmEtY3JlYXRpdmUtY29tbW9uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JnlxcXCI7IH1cXG5cXG4uZmEtZ2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviaBcXFwiOyB9XFxuXFxuLmZhLWdnLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JoVxcXCI7IH1cXG5cXG4uZmEtdHJpcGFkdmlzb3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviaJcXFwiOyB9XFxuXFxuLmZhLW9kbm9rbGFzc25pa2k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviaNcXFwiOyB9XFxuXFxuLmZhLW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mkXFxcIjsgfVxcblxcbi5mYS1nZXQtcG9ja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mlXFxcIjsgfVxcblxcbi5mYS13aWtpcGVkaWEtdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JplxcXCI7IH1cXG5cXG4uZmEtc2FmYXJpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mnXFxcIjsgfVxcblxcbi5mYS1jaHJvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviahcXFwiOyB9XFxuXFxuLmZhLWZpcmVmb3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvialcXFwiOyB9XFxuXFxuLmZhLW9wZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mqXFxcIjsgfVxcblxcbi5mYS1pbnRlcm5ldC1leHBsb3JlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Jq1xcXCI7IH1cXG5cXG4uZmEtdHY6YmVmb3JlLFxcbi5mYS10ZWxldmlzaW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74msXFxcIjsgfVxcblxcbi5mYS1jb250YW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvia1cXFwiOyB9XFxuXFxuLmZhLTUwMHB4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74muXFxcIjsgfVxcblxcbi5mYS1hbWF6b246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibBcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyLXBsdXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JsVxcXCI7IH1cXG5cXG4uZmEtY2FsZW5kYXItbWludXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JslxcXCI7IH1cXG5cXG4uZmEtY2FsZW5kYXItdGltZXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Js1xcXCI7IH1cXG5cXG4uZmEtY2FsZW5kYXItY2hlY2stbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JtFxcXCI7IH1cXG5cXG4uZmEtaW5kdXN0cnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibVcXFwiOyB9XFxuXFxuLmZhLW1hcC1waW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibZcXFwiOyB9XFxuXFxuLmZhLW1hcC1zaWduczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Jt1xcXCI7IH1cXG5cXG4uZmEtbWFwLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibhcXFwiOyB9XFxuXFxuLmZhLW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JuVxcXCI7IH1cXG5cXG4uZmEtY29tbWVudGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JulxcXCI7IH1cXG5cXG4uZmEtY29tbWVudGluZy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m7XFxcIjsgfVxcblxcbi5mYS1ob3V6ejpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JvFxcXCI7IH1cXG5cXG4uZmEtdmltZW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvib1cXFwiOyB9XFxuXFxuLmZhLWJsYWNrLXRpZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JvlxcXCI7IH1cXG5cXG4uZmEtZm9udGljb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qAXFxcIjsgfVxcblxcbi5mYS1yZWRkaXQtYWxpZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvioFcXFwiOyB9XFxuXFxuLmZhLWVkZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvioJcXFwiOyB9XFxuXFxuLmZhLWNyZWRpdC1jYXJkLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Kg1xcXCI7IH1cXG5cXG4uZmEtY29kaWVwaWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvioRcXFwiOyB9XFxuXFxuLmZhLW1vZHg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvioVcXFwiOyB9XFxuXFxuLmZhLWZvcnQtYXdlc29tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KhlxcXCI7IH1cXG5cXG4uZmEtdXNiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qHXFxcIjsgfVxcblxcbi5mYS1wcm9kdWN0LWh1bnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviohcXFwiOyB9XFxuXFxuLmZhLW1peGNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qJXFxcIjsgfVxcblxcbi5mYS1zY3JpYmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviopcXFwiOyB9XFxuXFxuLmZhLXBhdXNlLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ki1xcXCI7IH1cXG5cXG4uZmEtcGF1c2UtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvioxcXFwiOyB9XFxuXFxuLmZhLXN0b3AtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qNXFxcIjsgfVxcblxcbi5mYS1zdG9wLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qOXFxcIjsgfVxcblxcbi5mYS1zaG9wcGluZy1iYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvipBcXFwiOyB9XFxuXFxuLmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KkVxcXCI7IH1cXG5cXG4uZmEtaGFzaHRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KklxcXCI7IH1cXG5cXG4uZmEtYmx1ZXRvb3RoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qTXFxcIjsgfVxcblxcbi5mYS1ibHVldG9vdGgtYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KlFxcXCI7IH1cXG5cXG4uZmEtcGVyY2VudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KlVxcXCI7IH1cXG5cXG4uZmEtZ2l0bGFiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qWXFxcIjsgfVxcblxcbi5mYS13cGJlZ2lubmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qXXFxcIjsgfVxcblxcbi5mYS13cGZvcm1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qYXFxcIjsgfVxcblxcbi5mYS1lbnZpcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviplcXFwiOyB9XFxuXFxuLmZhLXVuaXZlcnNhbC1hY2Nlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvippcXFwiOyB9XFxuXFxuLmZhLXdoZWVsY2hhaXItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qbXFxcIjsgfVxcblxcbi5mYS1xdWVzdGlvbi1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KnFxcXCI7IH1cXG5cXG4uZmEtYmxpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvip1cXFwiOyB9XFxuXFxuLmZhLWF1ZGlvLWRlc2NyaXB0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qeXFxcIjsgfVxcblxcbi5mYS12b2x1bWUtY29udHJvbC1waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KoFxcXCI7IH1cXG5cXG4uZmEtYnJhaWxsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KoVxcXCI7IH1cXG5cXG4uZmEtYXNzaXN0aXZlLWxpc3RlbmluZy1zeXN0ZW1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qiXFxcIjsgfVxcblxcbi5mYS1hc2wtaW50ZXJwcmV0aW5nOmJlZm9yZSxcXG4uZmEtYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviqNcXFwiOyB9XFxuXFxuLmZhLWRlYWZuZXNzOmJlZm9yZSxcXG4uZmEtaGFyZC1vZi1oZWFyaW5nOmJlZm9yZSxcXG4uZmEtZGVhZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KpFxcXCI7IH1cXG5cXG4uZmEtZ2xpZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviqVcXFwiOyB9XFxuXFxuLmZhLWdsaWRlLWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviqZcXFwiOyB9XFxuXFxuLmZhLXNpZ25pbmc6YmVmb3JlLFxcbi5mYS1zaWduLWxhbmd1YWdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qnXFxcIjsgfVxcblxcbi5mYS1sb3ctdmlzaW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qoXFxcIjsgfVxcblxcbi5mYS12aWFkZW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviqlcXFwiOyB9XFxuXFxuLmZhLXZpYWRlby1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviqpcXFwiOyB9XFxuXFxuLmZhLXNuYXBjaGF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qrXFxcIjsgfVxcblxcbi5mYS1zbmFwY2hhdC1naG9zdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KrFxcXCI7IH1cXG5cXG4uZmEtc25hcGNoYXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qtXFxcIjsgfVxcblxcbi5mYS1waWVkLXBpcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74quXFxcIjsgfVxcblxcbi5mYS1maXJzdC1vcmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KsFxcXCI7IH1cXG5cXG4uZmEteW9hc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirFcXFwiOyB9XFxuXFxuLmZhLXRoZW1laXNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KslxcXCI7IH1cXG5cXG4uZmEtZ29vZ2xlLXBsdXMtY2lyY2xlOmJlZm9yZSxcXG4uZmEtZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirNcXFwiOyB9XFxuXFxuLmZhLWZhOmJlZm9yZSxcXG4uZmEtZm9udC1hd2Vzb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74q0XFxcIjsgfVxcblxcbi5mYS1oYW5kc2hha2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KtVxcXCI7IH1cXG5cXG4uZmEtZW52ZWxvcGUtb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KtlxcXCI7IH1cXG5cXG4uZmEtZW52ZWxvcGUtb3Blbi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74q3XFxcIjsgfVxcblxcbi5mYS1saW5vZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirhcXFwiOyB9XFxuXFxuLmZhLWFkZHJlc3MtYm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KuVxcXCI7IH1cXG5cXG4uZmEtYWRkcmVzcy1ib29rLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirpcXFwiOyB9XFxuXFxuLmZhLXZjYXJkOmJlZm9yZSxcXG4uZmEtYWRkcmVzcy1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74q7XFxcIjsgfVxcblxcbi5mYS12Y2FyZC1vOmJlZm9yZSxcXG4uZmEtYWRkcmVzcy1jYXJkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirxcXFwiOyB9XFxuXFxuLmZhLXVzZXItY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74q9XFxcIjsgfVxcblxcbi5mYS11c2VyLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74q+XFxcIjsgfVxcblxcbi5mYS11c2VyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi4BcXFwiOyB9XFxuXFxuLmZhLWlkLWJhZGdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uBXFxcIjsgfVxcblxcbi5mYS1kcml2ZXJzLWxpY2Vuc2U6YmVmb3JlLFxcbi5mYS1pZC1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uCXFxcIjsgfVxcblxcbi5mYS1kcml2ZXJzLWxpY2Vuc2UtbzpiZWZvcmUsXFxuLmZhLWlkLWNhcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Lg1xcXCI7IH1cXG5cXG4uZmEtcXVvcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi4RcXFwiOyB9XFxuXFxuLmZhLWZyZWUtY29kZS1jYW1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uFXFxcIjsgfVxcblxcbi5mYS10ZWxlZ3JhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LhlxcXCI7IH1cXG5cXG4uZmEtdGhlcm1vbWV0ZXItNDpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyOmJlZm9yZSxcXG4uZmEtdGhlcm1vbWV0ZXItZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Lh1xcXCI7IH1cXG5cXG4uZmEtdGhlcm1vbWV0ZXItMzpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uIXFxcIjsgfVxcblxcbi5mYS10aGVybW9tZXRlci0yOmJlZm9yZSxcXG4uZmEtdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LiVxcXCI7IH1cXG5cXG4uZmEtdGhlcm1vbWV0ZXItMTpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyLXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi4pcXFwiOyB9XFxuXFxuLmZhLXRoZXJtb21ldGVyLTA6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlci1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Li1xcXCI7IH1cXG5cXG4uZmEtc2hvd2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uMXFxcIjsgfVxcblxcbi5mYS1iYXRodHViOmJlZm9yZSxcXG4uZmEtczE1OmJlZm9yZSxcXG4uZmEtYmF0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LjVxcXCI7IH1cXG5cXG4uZmEtcG9kY2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LjlxcXCI7IH1cXG5cXG4uZmEtd2luZG93LW1heGltaXplOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uQXFxcIjsgfVxcblxcbi5mYS13aW5kb3ctbWluaW1pemU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi5FcXFwiOyB9XFxuXFxuLmZhLXdpbmRvdy1yZXN0b3JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uSXFxcIjsgfVxcblxcbi5mYS10aW1lcy1yZWN0YW5nbGU6YmVmb3JlLFxcbi5mYS13aW5kb3ctY2xvc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi5NcXFwiOyB9XFxuXFxuLmZhLXRpbWVzLXJlY3RhbmdsZS1vOmJlZm9yZSxcXG4uZmEtd2luZG93LWNsb3NlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi5RcXFwiOyB9XFxuXFxuLmZhLWJhbmRjYW1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uVXFxcIjsgfVxcblxcbi5mYS1ncmF2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uWXFxcIjsgfVxcblxcbi5mYS1ldHN5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uXXFxcIjsgfVxcblxcbi5mYS1pbWRiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uYXFxcIjsgfVxcblxcbi5mYS1yYXZlbHJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uZXFxcIjsgfVxcblxcbi5mYS1lZXJjYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uaXFxcIjsgfVxcblxcbi5mYS1taWNyb2NoaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi5tcXFwiOyB9XFxuXFxuLmZhLXNub3dmbGFrZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ucXFxcIjsgfVxcblxcbi5mYS1zdXBlcnBvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LnVxcXCI7IH1cXG5cXG4uZmEtd3BleHBsb3JlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LnlxcXCI7IH1cXG5cXG4uZmEtbWVldHVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ugXFxcIjsgfVxcblxcbi5zci1vbmx5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMDsgfVxcblxcbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsIC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGNsaXA6IGF1dG87IH1cXG5cXG5pLmZhIHtcXG4gIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yLCBpbmhlcml0KTsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmZmZmYwMCwgI2RkZCwgI2ZmZmZmZjAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDVzIGluZmluaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAgMTAwJTsgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAgMTAwJTsgfSB9XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LW92ZXJmbG93IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4ub3ZlcmZsb3cge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvciwgIzAwMDAwMGFhKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6ICMwMDAwMDBhYTsgfVxcbiAgYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ob3ZlciwgIzAwMCk7IH1cXG4gIGE6YWN0aXZlLCBhOmZvY3VzIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyLCAjMTExKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1jb2xvci1ob3ZlciwgIzExMSk7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtb3ZlcmZsb3cge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5vdmVyZmxvdyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbmRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDAwMDBhYTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDAwMDAzMzsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInByZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogNXB4OyB9XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LW92ZXJmbG93IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4ub3ZlcmZsb3cge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4uc2xpZGVzaG93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29udGVudC1kaXNwbGF5OiBjb250ZW50czsgfVxcbiAgLnNsaWRlc2hvdyAuaW1hZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk2OTY5O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5zbGlkZXNob3cgLmltYWdlICoge1xcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7IH1cXG4gIC5zbGlkZXNob3cgLmNvbnRyb2wge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnNsaWRlc2hvdyAuY29udHJvbC5yaWdodCB7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwMDAwMDAsICMwMDAwMDBhYSk7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAgIC5zbGlkZXNob3cgLmNvbnRyb2wucmlnaHQ6aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAuc2xpZGVzaG93IC5jb250cm9sLmxlZnQge1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwMDAwYWEsICMwMDAwMDAwMCk7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAgIC5zbGlkZXNob3cgLmNvbnRyb2wubGVmdDpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAuc2xpZGVzaG93OmhvdmVyIC5pdGVtcyB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIC5zbGlkZXNob3cgLml0ZW1zIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDAwMDAwMCwgIzAwMDAwMDk5KTsgfVxcbiAgICAuc2xpZGVzaG93IC5pdGVtcyAuaXRlbSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIG1hcmdpbjogMTVweCA1cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwMDAwOTk7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgLnNsaWRlc2hvdyAuaXRlbXMgLml0ZW0ucGxheSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAgICAgLnNsaWRlc2hvdyAuaXRlbXMgLml0ZW0ucGF1c2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XFxuXFxuc3Bhbi53cmFwcGVyIHtcXG4gIC0tdG9vbHRpcC1jb2xvcjogIzY2NjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgc3Bhbi53cmFwcGVyID4gc2xvdFtuYW1lPVxcXCJ0b29sdGlwXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9vbHRpcC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHotaW5kZXg6IDE7IH1cXG4gICAgc3Bhbi53cmFwcGVyID4gc2xvdFtuYW1lPVxcXCJ0b29sdGlwXFxcIl0gc3Bhbi50b29sdGlwIHtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XFxuICBzcGFuLndyYXBwZXI6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBjb250ZW50OiAnJzsgfVxcbiAgc3Bhbi53cmFwcGVyOmhvdmVyOmJlZm9yZSwgc3Bhbi53cmFwcGVyOmhvdmVyIHNsb3RbbmFtZT1cXFwidG9vbHRpcFxcXCJdLCBzcGFuLndyYXBwZXI6Zm9jdXM6YmVmb3JlLCBzcGFuLndyYXBwZXI6Zm9jdXMgc2xvdFtuYW1lPVxcXCJ0b29sdGlwXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYW5pbWF0aW9uOiBmYWRlIDAuMTVzOyB9XFxuICBzcGFuLndyYXBwZXIuYm90dG9tOmJlZm9yZSB7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLXRvb2x0aXAtY29sb3IpOyB9XFxuICBzcGFuLndyYXBwZXIuYm90dG9tID4gc2xvdFtuYW1lPVxcXCJ0b29sdGlwXFxcIl0ge1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbi10b3A6IDVweDsgfVxcbiAgc3Bhbi53cmFwcGVyLnRvcDpiZWZvcmUge1xcbiAgICBib3R0b206IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS10b29sdGlwLWNvbG9yKTsgfVxcbiAgc3Bhbi53cmFwcGVyLnRvcCA+IHNsb3RbbmFtZT1cXFwidG9vbHRpcFxcXCJdIHtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gIHNwYW4ud3JhcHBlci5sZWZ0OmJlZm9yZSB7XFxuICAgIHRvcDogMjUlO1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tdG9vbHRpcC1jb2xvcik7IH1cXG4gIHNwYW4ud3JhcHBlci5sZWZ0ID4gc2xvdFtuYW1lPVxcXCJ0b29sdGlwXFxcIl0ge1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcbiAgc3Bhbi53cmFwcGVyLnJpZ2h0OmJlZm9yZSB7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdmFyKC0tdG9vbHRpcC1jb2xvcik7IH1cXG4gIHNwYW4ud3JhcHBlci5yaWdodCA+IHNsb3RbbmFtZT1cXFwidG9vbHRpcFxcXCJdIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4OyB9XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblwiLCBcIlwiXSk7XG4iXSwic291cmNlUm9vdCI6IiJ9