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
        var _this$attributes, _this$attributes$tool;

        return (_this$attributes = this.attributes) === null || _this$attributes === void 0 ? void 0 : (_this$attributes$tool = _this$attributes.tooltip) === null || _this$attributes$tool === void 0 ? void 0 : _this$attributes$tool.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvZGUtcHJldHRpZnkvbG9hZGVyL3ByZXR0aWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/MDgzNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC50dGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9saWIvY3NzLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvbGliL2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2xpYi91cGRhdGluZy1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9saXQtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvbW9kaWZ5LXRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcGFydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvc2hhZHktcmVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtcmVzdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9iYWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJlZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWRlc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sYXlvdXRzL2ZsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2JhZGdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2FyZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NvZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9mbGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaGlnaGxpZ2h0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaWNvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2ltYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbGluay5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3BhcGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvcHJlZm9ybWF0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc2xpZGVzaG93LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9vbHRpcC5zY3NzIl0sIm5hbWVzIjpbIkJhZGdlIiwiY3VzdG9tRWxlbWVudCIsInN0eWxlcyIsInN0eWxlIiwiaHRtbCIsIkxpdEVsZW1lbnQiLCJCdXR0b24iLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJ2YWx1ZSIsImlubmVySFRNTCIsImxpbmsiLCJhY3Rpb25UZXh0IiwiQ2FyZCIsImhlYWRlciIsIkNvZGUiLCJwcmV0dHkiLCJQUiIsInByZXR0eVByaW50T25lIiwibGFuZ3VhZ2UiLCJsaW5lTnVtYmVycyIsInVuc2FmZUhUTUwiLCJIaWdobGlnaHQiLCJJY29uIiwiZm9udEZhY2VTaGVldCIsImNzcyIsInN0eWxlU2hlZXQiLCJkb2N1bWVudCIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsInNwaW4iLCJUUkFOU19QTkciLCJJbWFnZSIsInByb3BlcnR5IiwiaW1hZ2UiLCJzb3VyY2UiLCJhbHQiLCJsYXN0U2VwZXJhdG9yIiwibGFzdEluZGV4T2YiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwiYWx0VGFnIiwiTGluayIsIlBhcGVyIiwiUHJlZm9ybWF0IiwiREVGQVVMVF9ERUxBWSIsIlNsaWRlc2hvdyIsImNoaWxkcmVuIiwiTnVtYmVyIiwiZGVsYXkiLCJjbG9uZU5vZGUiLCJhdXRvUGxheSIsImkiLCJpbmRleCIsIml0ZW0iLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiY29tcG9zZWQiLCJwYXVzZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsIm5leHQiLCJjbGVhckludGVydmFsIiwiaGlkZUNvbnRyb2xzIiwiQXJyYXkiLCJrZXlzIiwibWFwIiwidG9nZ2xlUGF1c2UiLCJwcmV2IiwiVG9vbHRpcCIsInRvb2x0aXAiLCJkaXJlY3Rpb24iLCJGbGV4Qm94IiwiY29udGVudCIsInNoYWRvd1Jvb3QiLCJjb2x1bW4iLCJ3cmFwIiwiZnJvbSIsIkZsZXhJdGVtIiwiZ3JvdyIsInNocmluayIsIm9yZGVyIiwiRmxleENlbnRlciIsIl9zdHlsZXMiLCJ1bnNhZmVDU1MiLCJkZXNjcmlwdG9yIiwiZWxlbWVudHMiLCJraW5kIiwicGxhY2VtZW50Iiwia2V5IiwiaW5pdGlhbGl6ZXIiLCJDU1NSZXN1bHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYyxjQUFjLHNCQUFzQixtQkFBbUIsa0JBQWtCLHdIQUF3SCxjQUFjLGlEQUFpRCx5QkFBeUIsbURBQW1ELGNBQWMsc0RBQXNELEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxJQUFJLFNBQVMsSUFBSSxzQkFBc0I7QUFDbmYsR0FBRyx5QkFBeUIsZUFBZSwyQkFBMkIsSUFBSSxLQUFLLFdBQVcsaUNBQWlDLEtBQUssYUFBYSwyQ0FBMkMsY0FBYyx3SUFBd0kscUJBQXFCLDRCQUE0QixFQUFFLEtBQUssS0FBSyxRQUFRLFdBQVcsNkRBQTZELFFBQVEsV0FBVztBQUM5ZSxzRUFBc0UsWUFBWSxrQkFBa0IsY0FBYywwRUFBMEUsRUFBRSxnQkFBZ0IsRUFBRSx1RkFBdUYsSUFBSSxLQUFLLFdBQVcsOEVBQThFLFFBQVEsV0FBVywwQkFBMEIsVUFBVSxJQUFJO0FBQ3BjLHlEQUF5RCxRQUFRLElBQUksd0NBQXdDLDJCQUEyQixJQUFJLDBHQUEwRyxrQkFBa0IsOENBQThDLEdBQUcsa0JBQWtCLHFDQUFxQyxJQUFJLEtBQUssV0FBVyxxQkFBcUIsb0RBQW9ELEVBQUUsYUFBYSxFQUFFLGtCQUFrQjtBQUNoZixLQUFLLE9BQU8sV0FBVyw0QkFBNEIscUJBQXFCLElBQUksS0FBSyxPQUFPLDJDQUEyQyx1QkFBdUIsMENBQTBDLGdCQUFnQixjQUFjLGlCQUFpQixTQUFTLHlCQUF5QixtQkFBbUIsRUFBRSxxQkFBcUIsMkJBQTJCLDJEQUEyRDtBQUNyWixpREFBaUQsaURBQWlELEtBQUssT0FBTyxvQ0FBb0Msc0JBQXNCLE9BQU8sNENBQTRDLDJCQUEyQixjQUFjLGdDQUFnQyxFQUFFLCtFQUErRSxzQkFBc0IsZ0JBQWdCLGNBQWMsMkRBQTJELGdCQUFnQjtBQUNwZixFQUFFLEtBQUssNkJBQTZCLDRCQUE0QixLQUFLLHFCQUFxQiw0QkFBNEIsS0FBSyxRQUFRLElBQUksK0JBQStCLE9BQU8sTUFBTSxhQUFhLHdGQUF3RixZQUFZLElBQUksWUFBWSxNQUFNLE9BQU8sZ0NBQWdDLDRDQUE0QyxpQkFBaUIsOEJBQThCLHNCQUFzQiw4QkFBOEI7QUFDaGYsS0FBSyxNQUFNLFFBQVEsR0FBRyxZQUFZLCtCQUErQixnQkFBZ0IsSUFBSSxLQUFLLGtCQUFrQix3QkFBd0IsT0FBTyxrQkFBa0IsT0FBTyxPQUFPLDJDQUEyQyxzQkFBc0IsT0FBTyxJQUFJLGVBQWUsU0FBUyxjQUFjLGNBQWMsc0VBQXNFLElBQUkscURBQXFELElBQUk7QUFDOWEsbVFBQW1RLHNFQUFzRSxxQkFBcUI7QUFDOVYsNkpBQTZKLHdHQUF3RyxzQkFBc0IsdUNBQXVDLG9IQUFvSCxjQUFjO0FBQ3BjLGtIQUFrSCwrQkFBK0IsdUNBQXVDLGtGQUFrRiw0Q0FBNEMsNkJBQTZCLGdDQUFnQztBQUNuWCxtS0FBbUssY0FBYyxrQkFBa0IsY0FBYyxpQkFBaUIsa0dBQWtHLHdCQUF3QixFQUFFLHFCQUFxQix5QkFBeUIsK0JBQStCO0FBQzNhLG1HQUFtRyxjQUFjLGdCQUFnQix5Q0FBeUMsTUFBTSw2QkFBNkIsaUJBQWlCLFlBQVksRUFBRSxxQ0FBcUMsU0FBUyxLQUFLLGVBQWUsNkJBQTZCLHFCQUFxQixVQUFVLGlDQUFpQyxLQUFLLFVBQVUsMEZBQTBGLGFBQWE7QUFDamdCLGtCQUFrQixXQUFXLFlBQVksd0NBQXdDLDRCQUE0Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixJQUFJLDZHQUE2RyxpQkFBaUIsZ0JBQWdCLG1CQUFtQixPQUFPLEVBQUUsV0FBVyw2RkFBNkYsZ0JBQWdCO0FBQ3hkLGlDQUFpQyxZQUFZLGNBQWMsVUFBVSxJQUFJLHVCQUF1QixNQUFNLFFBQVEsTUFBTSxVQUFVLHFJQUFxSSxPQUFPLFFBQVEsVUFBVSxJQUFJLGtEQUFrRCxJQUFJLFVBQVUsSUFBSSxFQUFFLDhCQUE4QixtQkFBbUIsTUFBTSxTQUFTLFNBQVMsSUFBSSxXQUFXLFVBQVUsS0FBSztBQUM3YyxJQUFJLEtBQUssSUFBSSxFQUFFLHVEQUF1RCx5Q0FBeUMseUJBQXlCLGNBQWMsZ0RBQWdELG1CQUFtQixtQkFBbUIsb0JBQW9CLGlCQUFpQixtRkFBbUYsSUFBSSxhQUFhLGNBQWMsUUFBUSx3QkFBd0IsU0FBUyx1Q0FBdUM7QUFDbmQ7QUFDQTtBQUNBO0FBQ0EsMEtBQTBLLGlSQUFpUixPQUFPLHNCQUFzQjtBQUN4ZCx1YUFBdWE7QUFDdmEsaWNBQWljLHlDQUF5QyxLQUFLO0FBQy9lLDBDQUEwQyxtQ0FBbUMsS0FBSywyQkFBMkIsWUFBWSxLQUFLLHdFQUF3RSxVQUFVLEtBQUssNkJBQTZCLFlBQVksS0FBSywrQ0FBK0MsNkJBQTZCLEtBQUssc0VBQXNFLHdCQUF3QixLQUFLO0FBQ3ZiLG9EQUFvRCxzQkFBc0IsS0FBSyxnRUFBZ0UsaUJBQWlCLEtBQUssOENBQThDLHlDQUF5QyxLQUFLO0FBQ2pRLGlCQUFpQixjQUFjLHdDQUF3QyxZQUFZLGlWQUFpVixRQUFRLFVBQVUsb0NBQW9DO0FBQzFkLGVBQWUsYUFBYSxHQUFHLDRDQUE0QyxFQUFFLG1CQUFtQix5Q0FBeUMsYUFBYSw0REFBNEQsc0JBQXNCLEtBQUssdUJBQXVCLG9CQUFvQixFQUFFLCtDQUErQyxtRUFBbUUsTUFBTSxLQUFLLGtEQUFrRCxPQUFPLEVBQUUsT0FBTyxjQUFjO0FBQ3ZlLFlBQVksS0FBSyxtQkFBbUIsRUFBRSx1RUFBdUUsS0FBSyxNQUFNLE9BQU8sOEJBQThCLFNBQVMsT0FBTyxtQkFBbUIsMERBQTBELFlBQVkseUJBQXlCLDRLQUE0SyxhQUFhO0FBQ3hkLCtCQUErQixZQUFZLEdBQUcsNENBQTRDLElBQUksMERBQTBELCtKQUErSixXQUFXLDhCQUE4QixJQUFJLG9CQUFvQixrQkFBa0IsV0FBVyxlQUFlLGlCQUFpQixFQUFFO0FBQ3ZiLDRFQUE0RSxLQUFLLFlBQVkscUVBQXFFLFNBQVMsRUFBRSxLQUFLOzs7Ozs7Ozs7Ozs7O0FDN0NySzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekZhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OztBQ3ZCQSxpQkFBaUIscUJBQXVCLDZCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDZCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDZCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDZCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDhCOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLE1BQU07QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQSxTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7Ozs7Ozs7O0FDcE1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxLQUFLO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEMsd0JBQXdCLElBQUk7QUFDNUIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDOzs7Ozs7Ozs7Ozs7QUNobkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUF1QixFQUFFLDJDQUEyQyxvQkFBb0IseUJBQXlCLHlCQUF5Qiw2Q0FBNkMsaUJBQWlCLGlCQUFpQixFQUFFLDBEQUEwRCw0QkFBNEIseUJBQXlCLG9CQUFvQix3QkFBd0IsRUFBRSx5QkFBeUIsb0JBQW9CLHlCQUF5QixnQkFBZ0IsZUFBZSxrQkFBa0IsRUFBRSxnSkFBZ0oscUJBQXFCLDRCQUE0QixFQUFFLGdDQUFnQyxnQkFBZ0IsZ0JBQWdCLHlDQUF5QywwQ0FBMEMsb0RBQW9ELEVBQUUsa0RBQWtELGdCQUFnQixjQUFjLHNCQUFzQixFQUFFLDZCQUE2QixtQkFBbUIsZ0JBQWdCLHlDQUF5QywwQ0FBMEMsaURBQWlELEVBQUUsK0NBQStDLG1CQUFtQixjQUFjLHlCQUF5QixFQUFFLDhCQUE4QixlQUFlLGtCQUFrQix3Q0FBd0MsMkNBQTJDLGtEQUFrRCxFQUFFLGdEQUFnRCxhQUFhLGtCQUFrQix3QkFBd0IsRUFBRSwrQkFBK0IsZUFBZSxpQkFBaUIsd0NBQXdDLDJDQUEyQyxtREFBbUQsRUFBRSxpREFBaUQsYUFBYSxpQkFBaUIsdUJBQXVCLEVBQUUscUJBQXFCLFVBQVUsaUJBQWlCLEVBQUUsUUFBUSxpQkFBaUIsRUFBRSxFQUFFIiwiZmlsZSI6ImJhc2VfZWxlbWVudHMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIhZnVuY3Rpb24oKXsvKlxuXG4gQ29weXJpZ2h0IChDKSAyMDA2IEdvb2dsZSBJbmMuXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG53aW5kb3cuUFJfU0hPVUxEX1VTRV9DT05USU5VQVRJT049ITA7XG4oZnVuY3Rpb24oKXtmdW5jdGlvbiBUKGEpe2Z1bmN0aW9uIGQoZSl7dmFyIGI9ZS5jaGFyQ29kZUF0KDApO2lmKDkyIT09YilyZXR1cm4gYjt2YXIgYT1lLmNoYXJBdCgxKTtyZXR1cm4oYj13W2FdKT9iOlwiMFwiPD1hJiZcIjdcIj49YT9wYXJzZUludChlLnN1YnN0cmluZygxKSw4KTpcInVcIj09PWF8fFwieFwiPT09YT9wYXJzZUludChlLnN1YnN0cmluZygyKSwxNik6ZS5jaGFyQ29kZUF0KDEpfWZ1bmN0aW9uIGYoZSl7aWYoMzI+ZSlyZXR1cm4oMTY+ZT9cIlxcXFx4MFwiOlwiXFxcXHhcIikrZS50b1N0cmluZygxNik7ZT1TdHJpbmcuZnJvbUNoYXJDb2RlKGUpO3JldHVyblwiXFxcXFwiPT09ZXx8XCItXCI9PT1lfHxcIl1cIj09PWV8fFwiXlwiPT09ZT9cIlxcXFxcIitlOmV9ZnVuY3Rpb24gYihlKXt2YXIgYj1lLnN1YnN0cmluZygxLGUubGVuZ3RoLTEpLm1hdGNoKC9cXFxcdVswLTlBLUZhLWZdezR9fFxcXFx4WzAtOUEtRmEtZl17Mn18XFxcXFswLTNdWzAtN117MCwyfXxcXFxcWzAtN117MSwyfXxcXFxcW1xcc1xcU118LXxbXi1cXFxcXS9nKTtlPVxuW107dmFyIGE9XCJeXCI9PT1iWzBdLGM9W1wiW1wiXTthJiZjLnB1c2goXCJeXCIpO2Zvcih2YXIgYT1hPzE6MCxnPWIubGVuZ3RoO2E8ZzsrK2Epe3ZhciBoPWJbYV07aWYoL1xcXFxbYmRzd10vaS50ZXN0KGgpKWMucHVzaChoKTtlbHNle3ZhciBoPWQoaCksazthKzI8ZyYmXCItXCI9PT1iW2ErMV0/KGs9ZChiW2ErMl0pLGErPTIpOms9aDtlLnB1c2goW2gsa10pOzY1Pmt8fDEyMjxofHwoNjU+a3x8OTA8aHx8ZS5wdXNoKFtNYXRoLm1heCg2NSxoKXwzMixNYXRoLm1pbihrLDkwKXwzMl0pLDk3Pmt8fDEyMjxofHxlLnB1c2goW01hdGgubWF4KDk3LGgpJi0zMyxNYXRoLm1pbihrLDEyMikmLTMzXSkpfX1lLnNvcnQoZnVuY3Rpb24oZSxhKXtyZXR1cm4gZVswXS1hWzBdfHxhWzFdLWVbMV19KTtiPVtdO2c9W107Zm9yKGE9MDthPGUubGVuZ3RoOysrYSloPWVbYV0saFswXTw9Z1sxXSsxP2dbMV09TWF0aC5tYXgoZ1sxXSxoWzFdKTpiLnB1c2goZz1oKTtmb3IoYT0wO2E8Yi5sZW5ndGg7KythKWg9YlthXSxcbmMucHVzaChmKGhbMF0pKSxoWzFdPmhbMF0mJihoWzFdKzE+aFswXSYmYy5wdXNoKFwiLVwiKSxjLnB1c2goZihoWzFdKSkpO2MucHVzaChcIl1cIik7cmV0dXJuIGMuam9pbihcIlwiKX1mdW5jdGlvbiB2KGUpe2Zvcih2YXIgYT1lLnNvdXJjZS5tYXRjaCgvKD86XFxbKD86W15cXHg1Q1xceDVEXXxcXFxcW1xcc1xcU10pKlxcXXxcXFxcdVtBLUZhLWYwLTldezR9fFxcXFx4W0EtRmEtZjAtOV17Mn18XFxcXFswLTldK3xcXFxcW151eDAtOV18XFwoXFw/WzohPV18W1xcKFxcKVxcXl18W15cXHg1QlxceDVDXFwoXFwpXFxeXSspL2cpLGM9YS5sZW5ndGgsZD1bXSxnPTAsaD0wO2c8YzsrK2cpe3ZhciBrPWFbZ107XCIoXCI9PT1rPysraDpcIlxcXFxcIj09PWsuY2hhckF0KDApJiYoaz0ray5zdWJzdHJpbmcoMSkpJiYoazw9aD9kW2tdPS0xOmFbZ109ZihrKSl9Zm9yKGc9MTtnPGQubGVuZ3RoOysrZyktMT09PWRbZ10mJihkW2ddPSsrQSk7Zm9yKGg9Zz0wO2c8YzsrK2cpaz1hW2ddLFwiKFwiPT09az8oKytoLGRbaF18fChhW2ddPVwiKD86XCIpKTpcIlxcXFxcIj09PVxuay5jaGFyQXQoMCkmJihrPStrLnN1YnN0cmluZygxKSkmJms8PWgmJihhW2ddPVwiXFxcXFwiK2Rba10pO2ZvcihnPTA7ZzxjOysrZylcIl5cIj09PWFbZ10mJlwiXlwiIT09YVtnKzFdJiYoYVtnXT1cIlwiKTtpZihlLmlnbm9yZUNhc2UmJm4pZm9yKGc9MDtnPGM7KytnKWs9YVtnXSxlPWsuY2hhckF0KDApLDI8PWsubGVuZ3RoJiZcIltcIj09PWU/YVtnXT1iKGspOlwiXFxcXFwiIT09ZSYmKGFbZ109ay5yZXBsYWNlKC9bYS16QS1aXS9nLGZ1bmN0aW9uKGEpe2E9YS5jaGFyQ29kZUF0KDApO3JldHVyblwiW1wiK1N0cmluZy5mcm9tQ2hhckNvZGUoYSYtMzMsYXwzMikrXCJdXCJ9KSk7cmV0dXJuIGEuam9pbihcIlwiKX1mb3IodmFyIEE9MCxuPSExLGw9ITEsbT0wLGM9YS5sZW5ndGg7bTxjOysrbSl7dmFyIHA9YVttXTtpZihwLmlnbm9yZUNhc2UpbD0hMDtlbHNlIGlmKC9bYS16XS9pLnRlc3QocC5zb3VyY2UucmVwbGFjZSgvXFxcXHVbMC05YS1mXXs0fXxcXFxceFswLTlhLWZdezJ9fFxcXFxbXnV4XS9naSxcIlwiKSkpe249ITA7XG5sPSExO2JyZWFrfX1mb3IodmFyIHc9e2I6OCx0OjksbjoxMCx2OjExLGY6MTIscjoxM30scj1bXSxtPTAsYz1hLmxlbmd0aDttPGM7KyttKXtwPWFbbV07aWYocC5nbG9iYWx8fHAubXVsdGlsaW5lKXRocm93IEVycm9yKFwiXCIrcCk7ci5wdXNoKFwiKD86XCIrdihwKStcIilcIil9cmV0dXJuIG5ldyBSZWdFeHAoci5qb2luKFwifFwiKSxsP1wiZ2lcIjpcImdcIil9ZnVuY3Rpb24gVShhLGQpe2Z1bmN0aW9uIGYoYSl7dmFyIGM9YS5ub2RlVHlwZTtpZigxPT1jKXtpZighYi50ZXN0KGEuY2xhc3NOYW1lKSl7Zm9yKGM9YS5maXJzdENoaWxkO2M7Yz1jLm5leHRTaWJsaW5nKWYoYyk7Yz1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJiclwiPT09Y3x8XCJsaVwiPT09Yyl2W2xdPVwiXFxuXCIsbltsPDwxXT1BKyssbltsKys8PDF8MV09YX19ZWxzZSBpZigzPT1jfHw0PT1jKWM9YS5ub2RlVmFsdWUsYy5sZW5ndGgmJihjPWQ/Yy5yZXBsYWNlKC9cXHJcXG4/L2csXCJcXG5cIik6Yy5yZXBsYWNlKC9bIFxcdFxcclxcbl0rL2csXG5cIiBcIiksdltsXT1jLG5bbDw8MV09QSxBKz1jLmxlbmd0aCxuW2wrKzw8MXwxXT1hKX12YXIgYj0vKD86XnxcXHMpbm9jb2RlKD86XFxzfCQpLyx2PVtdLEE9MCxuPVtdLGw9MDtmKGEpO3JldHVybnthOnYuam9pbihcIlwiKS5yZXBsYWNlKC9cXG4kLyxcIlwiKSxjOm59fWZ1bmN0aW9uIEooYSxkLGYsYix2KXtmJiYoYT17aDphLGw6MSxqOm51bGwsbTpudWxsLGE6ZixjOm51bGwsaTpkLGc6bnVsbH0sYihhKSx2LnB1c2guYXBwbHkodixhLmcpKX1mdW5jdGlvbiBWKGEpe2Zvcih2YXIgZD12b2lkIDAsZj1hLmZpcnN0Q2hpbGQ7ZjtmPWYubmV4dFNpYmxpbmcpdmFyIGI9Zi5ub2RlVHlwZSxkPTE9PT1iP2Q/YTpmOjM9PT1iP1cudGVzdChmLm5vZGVWYWx1ZSk/YTpkOmQ7cmV0dXJuIGQ9PT1hP3ZvaWQgMDpkfWZ1bmN0aW9uIEcoYSxkKXtmdW5jdGlvbiBmKGEpe2Zvcih2YXIgbD1hLmksbT1hLmgsYz1bbCxcInBsblwiXSxwPTAsdz1hLmEubWF0Y2godil8fFtdLHI9e30sZT0wLHQ9dy5sZW5ndGg7ZTxcbnQ7KytlKXt2YXIgej13W2VdLHE9clt6XSxnPXZvaWQgMCxoO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgcSloPSExO2Vsc2V7dmFyIGs9Ylt6LmNoYXJBdCgwKV07aWYoaylnPXoubWF0Y2goa1sxXSkscT1rWzBdO2Vsc2V7Zm9yKGg9MDtoPEE7KytoKWlmKGs9ZFtoXSxnPXoubWF0Y2goa1sxXSkpe3E9a1swXTticmVha31nfHwocT1cInBsblwiKX0hKGg9NTw9cS5sZW5ndGgmJlwibGFuZy1cIj09PXEuc3Vic3RyaW5nKDAsNSkpfHxnJiZcInN0cmluZ1wiPT09dHlwZW9mIGdbMV18fChoPSExLHE9XCJzcmNcIik7aHx8KHJbel09cSl9az1wO3ArPXoubGVuZ3RoO2lmKGgpe2g9Z1sxXTt2YXIgQj16LmluZGV4T2YoaCksRD1CK2gubGVuZ3RoO2dbMl0mJihEPXoubGVuZ3RoLWdbMl0ubGVuZ3RoLEI9RC1oLmxlbmd0aCk7cT1xLnN1YnN0cmluZyg1KTtKKG0sbCtrLHouc3Vic3RyaW5nKDAsQiksZixjKTtKKG0sbCtrK0IsaCxLKHEsaCksYyk7SihtLGwraytELHouc3Vic3RyaW5nKEQpLGYsYyl9ZWxzZSBjLnB1c2gobCtcbmsscSl9YS5nPWN9dmFyIGI9e30sdjsoZnVuY3Rpb24oKXtmb3IodmFyIGY9YS5jb25jYXQoZCksbD1bXSxtPXt9LGM9MCxwPWYubGVuZ3RoO2M8cDsrK2Mpe3ZhciB3PWZbY10scj13WzNdO2lmKHIpZm9yKHZhciBlPXIubGVuZ3RoOzA8PS0tZTspYltyLmNoYXJBdChlKV09dzt3PXdbMV07cj1cIlwiK3c7bS5oYXNPd25Qcm9wZXJ0eShyKXx8KGwucHVzaCh3KSxtW3JdPW51bGwpfWwucHVzaCgvW1xcMC1cXHVmZmZmXS8pO3Y9VChsKX0pKCk7dmFyIEE9ZC5sZW5ndGg7cmV0dXJuIGZ9ZnVuY3Rpb24geShhKXt2YXIgZD1bXSxmPVtdO2EudHJpcGxlUXVvdGVkU3RyaW5ncz9kLnB1c2goW1wic3RyXCIsL14oPzpcXCdcXCdcXCcoPzpbXlxcJ1xcXFxdfFxcXFxbXFxzXFxTXXxcXCd7MSwyfSg/PVteXFwnXSkpKig/OlxcJ1xcJ1xcJ3wkKXxcXFwiXFxcIlxcXCIoPzpbXlxcXCJcXFxcXXxcXFxcW1xcc1xcU118XFxcInsxLDJ9KD89W15cXFwiXSkpKig/OlxcXCJcXFwiXFxcInwkKXxcXCcoPzpbXlxcXFxcXCddfFxcXFxbXFxzXFxTXSkqKD86XFwnfCQpfFxcXCIoPzpbXlxcXFxcXFwiXXxcXFxcW1xcc1xcU10pKig/OlxcXCJ8JCkpLyxcbm51bGwsXCInXFxcIlwiXSk6YS5tdWx0aUxpbmVTdHJpbmdzP2QucHVzaChbXCJzdHJcIiwvXig/OlxcJyg/OlteXFxcXFxcJ118XFxcXFtcXHNcXFNdKSooPzpcXCd8JCl8XFxcIig/OlteXFxcXFxcXCJdfFxcXFxbXFxzXFxTXSkqKD86XFxcInwkKXxcXGAoPzpbXlxcXFxcXGBdfFxcXFxbXFxzXFxTXSkqKD86XFxgfCQpKS8sbnVsbCxcIidcXFwiYFwiXSk6ZC5wdXNoKFtcInN0clwiLC9eKD86XFwnKD86W15cXFxcXFwnXFxyXFxuXXxcXFxcLikqKD86XFwnfCQpfFxcXCIoPzpbXlxcXFxcXFwiXFxyXFxuXXxcXFxcLikqKD86XFxcInwkKSkvLG51bGwsXCJcXFwiJ1wiXSk7YS52ZXJiYXRpbVN0cmluZ3MmJmYucHVzaChbXCJzdHJcIiwvXkBcXFwiKD86W15cXFwiXXxcXFwiXFxcIikqKD86XFxcInwkKS8sbnVsbF0pO3ZhciBiPWEuaGFzaENvbW1lbnRzO2ImJihhLmNTdHlsZUNvbW1lbnRzPygxPGI/ZC5wdXNoKFtcImNvbVwiLC9eIyg/OiMjKD86W14jXXwjKD8hIyMpKSooPzojIyN8JCl8LiopLyxudWxsLFwiI1wiXSk6ZC5wdXNoKFtcImNvbVwiLC9eIyg/Oig/OmRlZmluZXxlKD86bHxuZClpZnxlbHNlfGVycm9yfGlmbj9kZWZ8aW5jbHVkZXxsaW5lfHByYWdtYXx1bmRlZnx3YXJuaW5nKVxcYnxbXlxcclxcbl0qKS8sXG5udWxsLFwiI1wiXSksZi5wdXNoKFtcInN0clwiLC9ePCg/Oig/Oig/OlxcLlxcLlxcLykqfFxcLz8pKD86W1xcdy1dKyg/OlxcL1tcXHctXSspKyk/W1xcdy1dK1xcLmgoPzpofHBwfFxcK1xcKyk/fFthLXpdXFx3Kik+LyxudWxsXSkpOmQucHVzaChbXCJjb21cIiwvXiNbXlxcclxcbl0qLyxudWxsLFwiI1wiXSkpO2EuY1N0eWxlQ29tbWVudHMmJihmLnB1c2goW1wiY29tXCIsL15cXC9cXC9bXlxcclxcbl0qLyxudWxsXSksZi5wdXNoKFtcImNvbVwiLC9eXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sbnVsbF0pKTtpZihiPWEucmVnZXhMaXRlcmFscyl7dmFyIHY9KGI9MTxiP1wiXCI6XCJcXG5cXHJcIik/XCIuXCI6XCJbXFxcXFNcXFxcc11cIjtmLnB1c2goW1wibGFuZy1yZWdleFwiLFJlZ0V4cChcIl4oPzpeXlxcXFwuP3xbKy1dfFshPV09Pz0/fFxcXFwjfCU9P3wmJj89P3xcXFxcKHxcXFxcKj0/fFsrXFxcXC1dPXwtPnxcXFxcLz0/fDo6P3w8PD89P3w+Pj8+Pz0/fCx8O3xcXFxcP3xAfFxcXFxbfH58e3xcXFxcXlxcXFxePz0/fFxcXFx8XFxcXHw/PT98YnJlYWt8Y2FzZXxjb250aW51ZXxkZWxldGV8ZG98ZWxzZXxmaW5hbGx5fGluc3RhbmNlb2Z8cmV0dXJufHRocm93fHRyeXx0eXBlb2YpXFxcXHMqKFwiK1xuKFwiLyg/PVteLypcIitiK1wiXSkoPzpbXi9cXFxceDVCXFxcXHg1Q1wiK2IrXCJdfFxcXFx4NUNcIit2K1wifFxcXFx4NUIoPzpbXlxcXFx4NUNcXFxceDVEXCIrYitcIl18XFxcXHg1Q1wiK3YrXCIpKig/OlxcXFx4NUR8JCkpKy9cIikrXCIpXCIpXSl9KGI9YS50eXBlcykmJmYucHVzaChbXCJ0eXBcIixiXSk7Yj0oXCJcIithLmtleXdvcmRzKS5yZXBsYWNlKC9eIHwgJC9nLFwiXCIpO2IubGVuZ3RoJiZmLnB1c2goW1wia3dkXCIsbmV3IFJlZ0V4cChcIl4oPzpcIitiLnJlcGxhY2UoL1tcXHMsXSsvZyxcInxcIikrXCIpXFxcXGJcIiksbnVsbF0pO2QucHVzaChbXCJwbG5cIiwvXlxccysvLG51bGwsXCIgXFxyXFxuXFx0XFx1MDBhMFwiXSk7Yj1cIl4uW15cXFxcc1xcXFx3LiRAJ1xcXCJgL1xcXFxcXFxcXSpcIjthLnJlZ2V4TGl0ZXJhbHMmJihiKz1cIig/IXMqLylcIik7Zi5wdXNoKFtcImxpdFwiLC9eQFthLXpfJF1bYS16XyRAMC05XSovaSxudWxsXSxbXCJ0eXBcIiwvXig/OltAX10/W0EtWl0rW2Etel1bQS1aYS16XyRAMC05XSp8XFx3K190XFxiKS8sbnVsbF0sW1wicGxuXCIsL15bYS16XyRdW2Etel8kQDAtOV0qL2ksXG5udWxsXSxbXCJsaXRcIiwvXig/OjB4W2EtZjAtOV0rfCg/OlxcZCg/Ol9cXGQrKSpcXGQqKD86XFwuXFxkKik/fFxcLlxcZFxcKykoPzplWytcXC1dP1xcZCspPylbYS16XSovaSxudWxsLFwiMDEyMzQ1Njc4OVwiXSxbXCJwbG5cIiwvXlxcXFxbXFxzXFxTXT8vLG51bGxdLFtcInB1blwiLG5ldyBSZWdFeHAoYiksbnVsbF0pO3JldHVybiBHKGQsZil9ZnVuY3Rpb24gTChhLGQsZil7ZnVuY3Rpb24gYihhKXt2YXIgYz1hLm5vZGVUeXBlO2lmKDE9PWMmJiFBLnRlc3QoYS5jbGFzc05hbWUpKWlmKFwiYnJcIj09PWEubm9kZU5hbWUpdihhKSxhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKTtlbHNlIGZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyliKGEpO2Vsc2UgaWYoKDM9PWN8fDQ9PWMpJiZmKXt2YXIgZD1hLm5vZGVWYWx1ZSxxPWQubWF0Y2gobik7cSYmKGM9ZC5zdWJzdHJpbmcoMCxxLmluZGV4KSxhLm5vZGVWYWx1ZT1jLChkPWQuc3Vic3RyaW5nKHEuaW5kZXgrcVswXS5sZW5ndGgpKSYmXG5hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGwuY3JlYXRlVGV4dE5vZGUoZCksYS5uZXh0U2libGluZyksdihhKSxjfHxhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSkpfX1mdW5jdGlvbiB2KGEpe2Z1bmN0aW9uIGIoYSxjKXt2YXIgZD1jP2EuY2xvbmVOb2RlKCExKTphLGs9YS5wYXJlbnROb2RlO2lmKGspe3ZhciBrPWIoaywxKSxlPWEubmV4dFNpYmxpbmc7ay5hcHBlbmRDaGlsZChkKTtmb3IodmFyIGY9ZTtmO2Y9ZSllPWYubmV4dFNpYmxpbmcsay5hcHBlbmRDaGlsZChmKX1yZXR1cm4gZH1mb3IoOyFhLm5leHRTaWJsaW5nOylpZihhPWEucGFyZW50Tm9kZSwhYSlyZXR1cm47YT1iKGEubmV4dFNpYmxpbmcsMCk7Zm9yKHZhciBkOyhkPWEucGFyZW50Tm9kZSkmJjE9PT1kLm5vZGVUeXBlOylhPWQ7Yy5wdXNoKGEpfWZvcih2YXIgQT0vKD86XnxcXHMpbm9jb2RlKD86XFxzfCQpLyxuPS9cXHJcXG4/fFxcbi8sbD1hLm93bmVyRG9jdW1lbnQsbT1sLmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTthLmZpcnN0Q2hpbGQ7KW0uYXBwZW5kQ2hpbGQoYS5maXJzdENoaWxkKTtcbmZvcih2YXIgYz1bbV0scD0wO3A8Yy5sZW5ndGg7KytwKWIoY1twXSk7ZD09PShkfDApJiZjWzBdLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsZCk7dmFyIHc9bC5jcmVhdGVFbGVtZW50KFwib2xcIik7dy5jbGFzc05hbWU9XCJsaW5lbnVtc1wiO2Q9TWF0aC5tYXgoMCxkLTF8MCl8fDA7Zm9yKHZhciBwPTAscj1jLmxlbmd0aDtwPHI7KytwKW09Y1twXSxtLmNsYXNzTmFtZT1cIkxcIisocCtkKSUxMCxtLmZpcnN0Q2hpbGR8fG0uYXBwZW5kQ2hpbGQobC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwYTBcIikpLHcuYXBwZW5kQ2hpbGQobSk7YS5hcHBlbmRDaGlsZCh3KX1mdW5jdGlvbiB0KGEsZCl7Zm9yKHZhciBmPWQubGVuZ3RoOzA8PS0tZjspe3ZhciBiPWRbZl07SS5oYXNPd25Qcm9wZXJ0eShiKT9FLmNvbnNvbGUmJmNvbnNvbGUud2FybihcImNhbm5vdCBvdmVycmlkZSBsYW5ndWFnZSBoYW5kbGVyICVzXCIsYik6SVtiXT1hfX1mdW5jdGlvbiBLKGEsZCl7YSYmSS5oYXNPd25Qcm9wZXJ0eShhKXx8KGE9L15cXHMqPC8udGVzdChkKT9cblwiZGVmYXVsdC1tYXJrdXBcIjpcImRlZmF1bHQtY29kZVwiKTtyZXR1cm4gSVthXX1mdW5jdGlvbiBNKGEpe3ZhciBkPWEuajt0cnl7dmFyIGY9VShhLmgsYS5sKSxiPWYuYTthLmE9YjthLmM9Zi5jO2EuaT0wO0soZCxiKShhKTt2YXIgdj0vXFxiTVNJRVxccyhcXGQrKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSx2PXYmJjg+PSt2WzFdLGQ9L1xcbi9nLEE9YS5hLG49QS5sZW5ndGgsZj0wLGw9YS5jLG09bC5sZW5ndGgsYj0wLGM9YS5nLHA9Yy5sZW5ndGgsdz0wO2NbcF09bjt2YXIgcixlO2ZvcihlPXI9MDtlPHA7KWNbZV0hPT1jW2UrMl0/KGNbcisrXT1jW2UrK10sY1tyKytdPWNbZSsrXSk6ZSs9MjtwPXI7Zm9yKGU9cj0wO2U8cDspe2Zvcih2YXIgdD1jW2VdLHo9Y1tlKzFdLHE9ZSsyO3ErMjw9cCYmY1txKzFdPT09ejspcSs9MjtjW3IrK109dDtjW3IrK109ejtlPXF9Yy5sZW5ndGg9cjt2YXIgZz1hLmg7YT1cIlwiO2cmJihhPWcuc3R5bGUuZGlzcGxheSxnLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpO1xudHJ5e2Zvcig7YjxtOyl7dmFyIGg9bFtiKzJdfHxuLGs9Y1t3KzJdfHxuLHE9TWF0aC5taW4oaCxrKSxCPWxbYisxXSxEO2lmKDEhPT1CLm5vZGVUeXBlJiYoRD1BLnN1YnN0cmluZyhmLHEpKSl7diYmKEQ9RC5yZXBsYWNlKGQsXCJcXHJcIikpO0Iubm9kZVZhbHVlPUQ7dmFyIE49Qi5vd25lckRvY3VtZW50LHU9Ti5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt1LmNsYXNzTmFtZT1jW3crMV07dmFyIHk9Qi5wYXJlbnROb2RlO3kucmVwbGFjZUNoaWxkKHUsQik7dS5hcHBlbmRDaGlsZChCKTtmPGgmJihsW2IrMV09Qj1OLmNyZWF0ZVRleHROb2RlKEEuc3Vic3RyaW5nKHEsaCkpLHkuaW5zZXJ0QmVmb3JlKEIsdS5uZXh0U2libGluZykpfWY9cTtmPj1oJiYoYis9Mik7Zj49ayYmKHcrPTIpfX1maW5hbGx5e2cmJihnLnN0eWxlLmRpc3BsYXk9YSl9fWNhdGNoKHgpe0UuY29uc29sZSYmY29uc29sZS5sb2coeCYmeC5zdGFja3x8eCl9fXZhciBFPXdpbmRvdyxDPVtcImJyZWFrLGNvbnRpbnVlLGRvLGVsc2UsZm9yLGlmLHJldHVybix3aGlsZVwiXSxcbkY9W1tDLFwiYXV0byxjYXNlLGNoYXIsY29uc3QsZGVmYXVsdCxkb3VibGUsZW51bSxleHRlcm4sZmxvYXQsZ290byxpbmxpbmUsaW50LGxvbmcscmVnaXN0ZXIscmVzdHJpY3Qsc2hvcnQsc2lnbmVkLHNpemVvZixzdGF0aWMsc3RydWN0LHN3aXRjaCx0eXBlZGVmLHVuaW9uLHVuc2lnbmVkLHZvaWQsdm9sYXRpbGVcIl0sXCJjYXRjaCxjbGFzcyxkZWxldGUsZmFsc2UsaW1wb3J0LG5ldyxvcGVyYXRvcixwcml2YXRlLHByb3RlY3RlZCxwdWJsaWMsdGhpcyx0aHJvdyx0cnVlLHRyeSx0eXBlb2ZcIl0sSD1bRixcImFsaWduYXMsYWxpZ25vZixhbGlnbl91bmlvbixhc20sYXhpb20sYm9vbCxjb25jZXB0LGNvbmNlcHRfbWFwLGNvbnN0X2Nhc3QsY29uc3RleHByLGRlY2x0eXBlLGRlbGVnYXRlLGR5bmFtaWNfY2FzdCxleHBsaWNpdCxleHBvcnQsZnJpZW5kLGdlbmVyaWMsbGF0ZV9jaGVjayxtdXRhYmxlLG5hbWVzcGFjZSxub2V4Y2VwdCxub3JldHVybixudWxscHRyLHByb3BlcnR5LHJlaW50ZXJwcmV0X2Nhc3Qsc3RhdGljX2Fzc2VydCxzdGF0aWNfY2FzdCx0ZW1wbGF0ZSx0eXBlaWQsdHlwZW5hbWUsdXNpbmcsdmlydHVhbCx3aGVyZVwiXSxcbk89W0YsXCJhYnN0cmFjdCxhc3NlcnQsYm9vbGVhbixieXRlLGV4dGVuZHMsZmluYWxseSxmaW5hbCxpbXBsZW1lbnRzLGltcG9ydCxpbnN0YW5jZW9mLGludGVyZmFjZSxudWxsLG5hdGl2ZSxwYWNrYWdlLHN0cmljdGZwLHN1cGVyLHN5bmNocm9uaXplZCx0aHJvd3MsdHJhbnNpZW50XCJdLFA9W0YsXCJhYnN0cmFjdCxhZGQsYWxpYXMsYXMsYXNjZW5kaW5nLGFzeW5jLGF3YWl0LGJhc2UsYm9vbCxieSxieXRlLGNoZWNrZWQsZGVjaW1hbCxkZWxlZ2F0ZSxkZXNjZW5kaW5nLGR5bmFtaWMsZXZlbnQsZmluYWxseSxmaXhlZCxmb3JlYWNoLGZyb20sZ2V0LGdsb2JhbCxncm91cCxpbXBsaWNpdCxpbixpbnRlcmZhY2UsaW50ZXJuYWwsaW50byxpcyxqb2luLGxldCxsb2NrLG51bGwsb2JqZWN0LG91dCxvdmVycmlkZSxvcmRlcmJ5LHBhcmFtcyxwYXJ0aWFsLHJlYWRvbmx5LHJlZixyZW1vdmUsc2J5dGUsc2VhbGVkLHNlbGVjdCxzZXQsc3RhY2thbGxvYyxzdHJpbmcsc2VsZWN0LHVpbnQsdWxvbmcsdW5jaGVja2VkLHVuc2FmZSx1c2hvcnQsdmFsdWUsdmFyLHZpcnR1YWwsd2hlcmUseWllbGRcIl0sXG5GPVtGLFwiYWJzdHJhY3QsYXN5bmMsYXdhaXQsY29uc3RydWN0b3IsZGVidWdnZXIsZW51bSxldmFsLGV4cG9ydCxmdW5jdGlvbixnZXQsaW1wbGVtZW50cyxpbnN0YW5jZW9mLGludGVyZmFjZSxsZXQsbnVsbCxzZXQsdW5kZWZpbmVkLHZhcix3aXRoLHlpZWxkLEluZmluaXR5LE5hTlwiXSxRPVtDLFwiYW5kLGFzLGFzc2VydCxjbGFzcyxkZWYsZGVsLGVsaWYsZXhjZXB0LGV4ZWMsZmluYWxseSxmcm9tLGdsb2JhbCxpbXBvcnQsaW4saXMsbGFtYmRhLG5vbmxvY2FsLG5vdCxvcixwYXNzLHByaW50LHJhaXNlLHRyeSx3aXRoLHlpZWxkLEZhbHNlLFRydWUsTm9uZVwiXSxSPVtDLFwiYWxpYXMsYW5kLGJlZ2luLGNhc2UsY2xhc3MsZGVmLGRlZmluZWQsZWxzaWYsZW5kLGVuc3VyZSxmYWxzZSxpbixtb2R1bGUsbmV4dCxuaWwsbm90LG9yLHJlZG8scmVzY3VlLHJldHJ5LHNlbGYsc3VwZXIsdGhlbix0cnVlLHVuZGVmLHVubGVzcyx1bnRpbCx3aGVuLHlpZWxkLEJFR0lOLEVORFwiXSxDPVtDLFwiY2FzZSxkb25lLGVsaWYsZXNhYyxldmFsLGZpLGZ1bmN0aW9uLGluLGxvY2FsLHNldCx0aGVuLHVudGlsXCJdLFxuUz0vXihESVJ8RklMRXxhcnJheXx2ZWN0b3J8KGRlfHByaW9yaXR5Xyk/cXVldWV8KGZvcndhcmRfKT9saXN0fHN0YWNrfChjb25zdF8pPyhyZXZlcnNlXyk/aXRlcmF0b3J8KHVub3JkZXJlZF8pPyhtdWx0aSk/KHNldHxtYXApfGJpdHNldHx1PyhpbnR8ZmxvYXQpXFxkKilcXGIvLFc9L1xcUy8sWD15KHtrZXl3b3JkczpbSCxQLE8sRixcImNhbGxlcixkZWxldGUsZGllLGRvLGR1bXAsZWxzaWYsZXZhbCxleGl0LGZvcmVhY2gsZm9yLGdvdG8saWYsaW1wb3J0LGxhc3QsbG9jYWwsbXksbmV4dCxubyxvdXIscHJpbnQscGFja2FnZSxyZWRvLHJlcXVpcmUsc3ViLHVuZGVmLHVubGVzcyx1bnRpbCx1c2Usd2FudGFycmF5LHdoaWxlLEJFR0lOLEVORFwiLFEsUixDXSxoYXNoQ29tbWVudHM6ITAsY1N0eWxlQ29tbWVudHM6ITAsbXVsdGlMaW5lU3RyaW5nczohMCxyZWdleExpdGVyYWxzOiEwfSksST17fTt0KFgsW1wiZGVmYXVsdC1jb2RlXCJdKTt0KEcoW10sW1tcInBsblwiLC9eW148P10rL10sW1wiZGVjXCIsXG4vXjwhXFx3W14+XSooPzo+fCQpL10sW1wiY29tXCIsL148XFwhLS1bXFxzXFxTXSo/KD86LVxcLT58JCkvXSxbXCJsYW5nLVwiLC9ePFxcPyhbXFxzXFxTXSs/KSg/OlxcPz58JCkvXSxbXCJsYW5nLVwiLC9ePCUoW1xcc1xcU10rPykoPzolPnwkKS9dLFtcInB1blwiLC9eKD86PFslP118WyU/XT4pL10sW1wibGFuZy1cIiwvXjx4bXBcXGJbXj5dKj4oW1xcc1xcU10rPyk8XFwveG1wXFxiW14+XSo+L2ldLFtcImxhbmctanNcIiwvXjxzY3JpcHRcXGJbXj5dKj4oW1xcc1xcU10qPykoPFxcL3NjcmlwdFxcYltePl0qPikvaV0sW1wibGFuZy1jc3NcIiwvXjxzdHlsZVxcYltePl0qPihbXFxzXFxTXSo/KSg8XFwvc3R5bGVcXGJbXj5dKj4pL2ldLFtcImxhbmctaW4udGFnXCIsL14oPFxcLz9bYS16XVtePD5dKj4pL2ldXSksXCJkZWZhdWx0LW1hcmt1cCBodG0gaHRtbCBteG1sIHhodG1sIHhtbCB4c2xcIi5zcGxpdChcIiBcIikpO3QoRyhbW1wicGxuXCIsL15bXFxzXSsvLG51bGwsXCIgXFx0XFxyXFxuXCJdLFtcImF0dlwiLC9eKD86XFxcIlteXFxcIl0qXFxcIj98XFwnW15cXCddKlxcJz8pLyxudWxsLFxuXCJcXFwiJ1wiXV0sW1tcInRhZ1wiLC9eXjxcXC8/W2Etel0oPzpbXFx3LjotXSpcXHcpP3xcXC8/PiQvaV0sW1wiYXRuXCIsL14oPyFzdHlsZVtcXHM9XXxvbilbYS16XSg/OltcXHc6LV0qXFx3KT8vaV0sW1wibGFuZy11cS52YWxcIiwvXj1cXHMqKFtePlxcJ1xcXCJcXHNdKig/OltePlxcJ1xcXCJcXHNcXC9dfFxcLyg/PVxccykpKS9dLFtcInB1blwiLC9eWz08PlxcL10rL10sW1wibGFuZy1qc1wiLC9eb25cXHcrXFxzKj1cXHMqXFxcIihbXlxcXCJdKylcXFwiL2ldLFtcImxhbmctanNcIiwvXm9uXFx3K1xccyo9XFxzKlxcJyhbXlxcJ10rKVxcJy9pXSxbXCJsYW5nLWpzXCIsL15vblxcdytcXHMqPVxccyooW15cXFwiXFwnPlxcc10rKS9pXSxbXCJsYW5nLWNzc1wiLC9ec3R5bGVcXHMqPVxccypcXFwiKFteXFxcIl0rKVxcXCIvaV0sW1wibGFuZy1jc3NcIiwvXnN0eWxlXFxzKj1cXHMqXFwnKFteXFwnXSspXFwnL2ldLFtcImxhbmctY3NzXCIsL15zdHlsZVxccyo9XFxzKihbXlxcXCJcXCc+XFxzXSspL2ldXSksW1wiaW4udGFnXCJdKTt0KEcoW10sW1tcImF0dlwiLC9eW1xcc1xcU10rL11dKSxbXCJ1cS52YWxcIl0pO3QoeSh7a2V5d29yZHM6SCxcbmhhc2hDb21tZW50czohMCxjU3R5bGVDb21tZW50czohMCx0eXBlczpTfSksXCJjIGNjIGNwcCBjeHggY3ljIG1cIi5zcGxpdChcIiBcIikpO3QoeSh7a2V5d29yZHM6XCJudWxsLHRydWUsZmFsc2VcIn0pLFtcImpzb25cIl0pO3QoeSh7a2V5d29yZHM6UCxoYXNoQ29tbWVudHM6ITAsY1N0eWxlQ29tbWVudHM6ITAsdmVyYmF0aW1TdHJpbmdzOiEwLHR5cGVzOlN9KSxbXCJjc1wiXSk7dCh5KHtrZXl3b3JkczpPLGNTdHlsZUNvbW1lbnRzOiEwfSksW1wiamF2YVwiXSk7dCh5KHtrZXl3b3JkczpDLGhhc2hDb21tZW50czohMCxtdWx0aUxpbmVTdHJpbmdzOiEwfSksW1wiYmFzaFwiLFwiYnNoXCIsXCJjc2hcIixcInNoXCJdKTt0KHkoe2tleXdvcmRzOlEsaGFzaENvbW1lbnRzOiEwLG11bHRpTGluZVN0cmluZ3M6ITAsdHJpcGxlUXVvdGVkU3RyaW5nczohMH0pLFtcImN2XCIsXCJweVwiLFwicHl0aG9uXCJdKTt0KHkoe2tleXdvcmRzOlwiY2FsbGVyLGRlbGV0ZSxkaWUsZG8sZHVtcCxlbHNpZixldmFsLGV4aXQsZm9yZWFjaCxmb3IsZ290byxpZixpbXBvcnQsbGFzdCxsb2NhbCxteSxuZXh0LG5vLG91cixwcmludCxwYWNrYWdlLHJlZG8scmVxdWlyZSxzdWIsdW5kZWYsdW5sZXNzLHVudGlsLHVzZSx3YW50YXJyYXksd2hpbGUsQkVHSU4sRU5EXCIsXG5oYXNoQ29tbWVudHM6ITAsbXVsdGlMaW5lU3RyaW5nczohMCxyZWdleExpdGVyYWxzOjJ9KSxbXCJwZXJsXCIsXCJwbFwiLFwicG1cIl0pO3QoeSh7a2V5d29yZHM6UixoYXNoQ29tbWVudHM6ITAsbXVsdGlMaW5lU3RyaW5nczohMCxyZWdleExpdGVyYWxzOiEwfSksW1wicmJcIixcInJ1YnlcIl0pO3QoeSh7a2V5d29yZHM6RixjU3R5bGVDb21tZW50czohMCxyZWdleExpdGVyYWxzOiEwfSksW1wiamF2YXNjcmlwdFwiLFwianNcIixcInRzXCIsXCJ0eXBlc2NyaXB0XCJdKTt0KHkoe2tleXdvcmRzOlwiYWxsLGFuZCxieSxjYXRjaCxjbGFzcyxlbHNlLGV4dGVuZHMsZmFsc2UsZmluYWxseSxmb3IsaWYsaW4saXMsaXNudCxsb29wLG5ldyxubyxub3QsbnVsbCxvZixvZmYsb24sb3IscmV0dXJuLHN1cGVyLHRoZW4sdGhyb3csdHJ1ZSx0cnksdW5sZXNzLHVudGlsLHdoZW4sd2hpbGUseWVzXCIsaGFzaENvbW1lbnRzOjMsY1N0eWxlQ29tbWVudHM6ITAsbXVsdGlsaW5lU3RyaW5nczohMCx0cmlwbGVRdW90ZWRTdHJpbmdzOiEwLFxucmVnZXhMaXRlcmFsczohMH0pLFtcImNvZmZlZVwiXSk7dChHKFtdLFtbXCJzdHJcIiwvXltcXHNcXFNdKy9dXSksW1wicmVnZXhcIl0pO3ZhciBZPUUuUFI9e2NyZWF0ZVNpbXBsZUxleGVyOkcscmVnaXN0ZXJMYW5nSGFuZGxlcjp0LHNvdXJjZURlY29yYXRvcjp5LFBSX0FUVFJJQl9OQU1FOlwiYXRuXCIsUFJfQVRUUklCX1ZBTFVFOlwiYXR2XCIsUFJfQ09NTUVOVDpcImNvbVwiLFBSX0RFQ0xBUkFUSU9OOlwiZGVjXCIsUFJfS0VZV09SRDpcImt3ZFwiLFBSX0xJVEVSQUw6XCJsaXRcIixQUl9OT0NPREU6XCJub2NvZGVcIixQUl9QTEFJTjpcInBsblwiLFBSX1BVTkNUVUFUSU9OOlwicHVuXCIsUFJfU09VUkNFOlwic3JjXCIsUFJfU1RSSU5HOlwic3RyXCIsUFJfVEFHOlwidGFnXCIsUFJfVFlQRTpcInR5cFwiLHByZXR0eVByaW50T25lOkUucHJldHR5UHJpbnRPbmU9ZnVuY3Rpb24oYSxkLGYpe2Y9Znx8ITE7ZD1kfHxudWxsO3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yi5pbm5lckhUTUw9XCI8cHJlPlwiK2ErXCI8L3ByZT5cIjtcbmI9Yi5maXJzdENoaWxkO2YmJkwoYixmLCEwKTtNKHtqOmQsbTpmLGg6YixsOjEsYTpudWxsLGk6bnVsbCxjOm51bGwsZzpudWxsfSk7cmV0dXJuIGIuaW5uZXJIVE1MfSxwcmV0dHlQcmludDpFLnByZXR0eVByaW50PWZ1bmN0aW9uKGEsZCl7ZnVuY3Rpb24gZigpe2Zvcih2YXIgYj1FLlBSX1NIT1VMRF9VU0VfQ09OVElOVUFUSU9OP2Mubm93KCkrMjUwOkluZmluaXR5O3A8dC5sZW5ndGgmJmMubm93KCk8YjtwKyspe2Zvcih2YXIgZD10W3BdLGw9ZyxtPWQ7bT1tLnByZXZpb3VzU2libGluZzspe3ZhciBuPW0ubm9kZVR5cGUsdT0oNz09PW58fDg9PT1uKSYmbS5ub2RlVmFsdWU7aWYodT8hL15cXD8/cHJldHRpZnlcXGIvLnRlc3QodSk6MyE9PW58fC9cXFMvLnRlc3QobS5ub2RlVmFsdWUpKWJyZWFrO2lmKHUpe2w9e307dS5yZXBsYWNlKC9cXGIoXFx3Kyk9KFtcXHc6LiUrLV0rKS9nLGZ1bmN0aW9uKGEsYixjKXtsW2JdPWN9KTticmVha319bT1kLmNsYXNzTmFtZTtpZigobCE9PWd8fHIudGVzdChtKSkmJlxuIWUudGVzdChtKSl7bj0hMTtmb3IodT1kLnBhcmVudE5vZGU7dTt1PXUucGFyZW50Tm9kZSlpZihxLnRlc3QodS50YWdOYW1lKSYmdS5jbGFzc05hbWUmJnIudGVzdCh1LmNsYXNzTmFtZSkpe249ITA7YnJlYWt9aWYoIW4pe2QuY2xhc3NOYW1lKz1cIiBwcmV0dHlwcmludGVkXCI7bj1sLmxhbmc7aWYoIW4pe3ZhciBuPW0ubWF0Y2godyksQzshbiYmKEM9VihkKSkmJnoudGVzdChDLnRhZ05hbWUpJiYobj1DLmNsYXNzTmFtZS5tYXRjaCh3KSk7biYmKG49blsxXSl9aWYoeS50ZXN0KGQudGFnTmFtZSkpdT0xO2Vsc2UgdmFyIHU9ZC5jdXJyZW50U3R5bGUseD12LmRlZmF1bHRWaWV3LHU9KHU9dT91LndoaXRlU3BhY2U6eCYmeC5nZXRDb21wdXRlZFN0eWxlP3guZ2V0Q29tcHV0ZWRTdHlsZShkLG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ3aGl0ZS1zcGFjZVwiKTowKSYmXCJwcmVcIj09PXUuc3Vic3RyaW5nKDAsMyk7eD1sLmxpbmVudW1zOyh4PVwidHJ1ZVwiPT09eHx8K3gpfHwoeD0oeD1tLm1hdGNoKC9cXGJsaW5lbnVtc1xcYig/OjooXFxkKykpPy8pKT9cbnhbMV0mJnhbMV0ubGVuZ3RoPyt4WzFdOiEwOiExKTt4JiZMKGQseCx1KTtNKHtqOm4saDpkLG06eCxsOnUsYTpudWxsLGk6bnVsbCxjOm51bGwsZzpudWxsfSl9fX1wPHQubGVuZ3RoP0Uuc2V0VGltZW91dChmLDI1MCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJmEoKX1mb3IodmFyIGI9ZHx8ZG9jdW1lbnQuYm9keSx2PWIub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQsYj1bYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInByZVwiKSxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY29kZVwiKSxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwieG1wXCIpXSx0PVtdLG49MDtuPGIubGVuZ3RoOysrbilmb3IodmFyIGw9MCxtPWJbbl0ubGVuZ3RoO2w8bTsrK2wpdC5wdXNoKGJbbl1bbF0pO3ZhciBiPW51bGwsYz1EYXRlO2Mubm93fHwoYz17bm93OmZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfX0pO3ZhciBwPTAsdz0vXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy5dKykoPyFcXFMpLyxyPS9cXGJwcmV0dHlwcmludFxcYi8sXG5lPS9cXGJwcmV0dHlwcmludGVkXFxiLyx5PS9wcmV8eG1wL2ksej0vXmNvZGUkL2kscT0vXig/OnByZXxjb2RlfHhtcCkkL2ksZz17fTtmKCl9fSxIPUUuZGVmaW5lO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBIJiZILmFtZCYmSChcImdvb2dsZS1jb2RlLXByZXR0aWZ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gWX0pfSkoKTt9KClcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgbmVlZFF1b3Rlcykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG4gIHVybCA9IHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250YXdlc29tZS13ZWJmb250LmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRhd2Vzb21lLXdlYmZvbnQuZW90XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udGF3ZXNvbWUtd2ViZm9udC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250YXdlc29tZS13ZWJmb250LnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRhd2Vzb21lLXdlYmZvbnQud29mZjJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250YXdlc29tZS13ZWJmb250LndvZmZcIjsiLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTkgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgPSAoJ2Fkb3B0ZWRTdHlsZVNoZWV0cycgaW4gRG9jdW1lbnQucHJvdG90eXBlKSAmJlxuICAgICgncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUpO1xuY29uc3QgY29uc3RydWN0aW9uVG9rZW4gPSBTeW1ib2woKTtcbmV4cG9ydCBjbGFzcyBDU1NSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKGNzc1RleHQsIHNhZmVUb2tlbikge1xuICAgICAgICBpZiAoc2FmZVRva2VuICE9PSBjb25zdHJ1Y3Rpb25Ub2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYSBnZXR0ZXIgc28gdGhhdCBpdCdzIGxhenkuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zXG4gICAgLy8gc3R5bGVzaGVldHMgYXJlIG5vdCBjcmVhdGVkIHVudGlsIHRoZSBmaXJzdCBlbGVtZW50IGluc3RhbmNlIGlzIG1hZGUuXG4gICAgZ2V0IHN0eWxlU2hlZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIE5vdGUsIGlmIGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIHN1cHBvcnRlZCB0aGVuIHdlIGFzc3VtZSBDU1NTdHlsZVNoZWV0XG4gICAgICAgICAgICAvLyBpcyBjb25zdHJ1Y3RhYmxlLlxuICAgICAgICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZVNoZWV0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzVGV4dDtcbiAgICB9XG59XG4vKipcbiAqIFdyYXAgYSB2YWx1ZSBmb3IgaW50ZXJwb2xhdGlvbiBpbiBhIGNzcyB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbC5cbiAqXG4gKiBUaGlzIGlzIHVuc2FmZSBiZWNhdXNlIHVudHJ1c3RlZCBDU1MgdGV4dCBjYW4gYmUgdXNlZCB0byBwaG9uZSBob21lXG4gKiBvciBleGZpbHRyYXRlIGRhdGEgdG8gYW4gYXR0YWNrZXIgY29udHJvbGxlZCBzaXRlLiBUYWtlIGNhcmUgdG8gb25seSB1c2VcbiAqIHRoaXMgd2l0aCB0cnVzdGVkIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlQ1NTID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoU3RyaW5nKHZhbHVlKSwgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcbmNvbnN0IHRleHRGcm9tQ1NTUmVzdWx0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ1NTUmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jc3NUZXh0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgcGFzc2VkIHRvICdjc3MnIGZ1bmN0aW9uIG11c3QgYmUgYSAnY3NzJyBmdW5jdGlvbiByZXN1bHQ6ICR7dmFsdWV9LiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dFxuICAgICAgICAgICAgdGFrZSBjYXJlIHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LmApO1xuICAgIH1cbn07XG4vKipcbiAqIFRlbXBsYXRlIHRhZyB3aGljaCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIExpdEVsZW1lbnQncyBgc3R5bGVgIHByb3BlcnR5IHRvXG4gKiBzZXQgZWxlbWVudCBzdHlsZXMuIEZvciBzZWN1cml0eSByZWFzb25zLCBvbmx5IGxpdGVyYWwgc3RyaW5nIHZhbHVlcyBtYXkgYmVcbiAqIHVzZWQuIFRvIGluY29ycG9yYXRlIG5vbi1saXRlcmFsIHZhbHVlcyBgdW5zYWZlQ1NTYCBtYXkgYmUgdXNlZCBpbnNpZGUgYVxuICogdGVtcGxhdGUgc3RyaW5nIHBhcnQuXG4gKi9cbmV4cG9ydCBjb25zdCBjc3MgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG4gICAgY29uc3QgY3NzVGV4dCA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PiBhY2MgKyB0ZXh0RnJvbUNTU1Jlc3VsdCh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICAgIHJldHVybiBuZXcgQ1NTUmVzdWx0KGNzc1RleHQsIGNvbnN0cnVjdGlvblRva2VuKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmNvbnN0IGxlZ2FjeUN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSwgY2xhenopID0+IHtcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAvLyBDYXN0IGFzIGFueSBiZWNhdXNlIFRTIGRvZXNuJ3QgcmVjb2duaXplIHRoZSByZXR1cm4gdHlwZSBhcyBiZWluZyBhXG4gICAgLy8gc3VidHlwZSBvZiB0aGUgZGVjb3JhdGVkIGNsYXNzIHdoZW4gY2xhenogaXMgdHlwZWQgYXNcbiAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBmb3Igc29tZSByZWFzb24uXG4gICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgaXMgaGVscGZ1bCB0byBtYWtlIHN1cmUgdGhlIGRlY29yYXRvciBpc1xuICAgIC8vIGFwcGxpZWQgdG8gZWxlbWVudHMgaG93ZXZlci5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcmV0dXJuIGNsYXp6O1xufTtcbmNvbnN0IHN0YW5kYXJkQ3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lLCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgeyBraW5kLCBlbGVtZW50cyB9ID0gZGVzY3JpcHRvcjtcbiAgICByZXR1cm4ge1xuICAgICAgICBraW5kLFxuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgb25jZSB0aGUgY2xhc3MgaXMgb3RoZXJ3aXNlIGZ1bGx5IGRlZmluZWRcbiAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhenopO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHRhZ05hbWUgdGhlIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZVxuICovXG5leHBvcnQgY29uc3QgY3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lKSA9PiAoY2xhc3NPckRlc2NyaXB0b3IpID0+ICh0eXBlb2YgY2xhc3NPckRlc2NyaXB0b3IgPT09ICdmdW5jdGlvbicpID9cbiAgICBsZWdhY3lDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKSA6XG4gICAgc3RhbmRhcmRDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKTtcbmNvbnN0IHN0YW5kYXJkUHJvcGVydHkgPSAob3B0aW9ucywgZWxlbWVudCkgPT4ge1xuICAgIC8vIFdoZW4gZGVjb3JhdGluZyBhbiBhY2Nlc3NvciwgcGFzcyBpdCB0aHJvdWdoIGFuZCBhZGQgcHJvcGVydHkgbWV0YWRhdGEuXG4gICAgLy8gTm90ZSwgdGhlIGBoYXNPd25Qcm9wZXJ0eWAgY2hlY2sgaW4gYGNyZWF0ZVByb3BlcnR5YCBlbnN1cmVzIHdlIGRvbid0XG4gICAgLy8gc3RvbXAgb3ZlciB0aGUgdXNlcidzIGFjY2Vzc29yLlxuICAgIGlmIChlbGVtZW50LmtpbmQgPT09ICdtZXRob2QnICYmIGVsZW1lbnQuZGVzY3JpcHRvciAmJlxuICAgICAgICAhKCd2YWx1ZScgaW4gZWxlbWVudC5kZXNjcmlwdG9yKSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudCwgeyBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGVQcm9wZXJ0eSgpIHRha2VzIGNhcmUgb2YgZGVmaW5pbmcgdGhlIHByb3BlcnR5LCBidXQgd2Ugc3RpbGxcbiAgICAgICAgLy8gbXVzdCByZXR1cm4gc29tZSBraW5kIG9mIGRlc2NyaXB0b3IsIHNvIHJldHVybiBhIGRlc2NyaXB0b3IgZm9yIGFuXG4gICAgICAgIC8vIHVudXNlZCBwcm90b3R5cGUgZmllbGQuIFRoZSBmaW5pc2hlciBjYWxscyBjcmVhdGVQcm9wZXJ0eSgpLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogJ2ZpZWxkJyxcbiAgICAgICAgICAgIGtleTogU3ltYm9sKCksXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgZGVzY3JpcHRvcjoge30sXG4gICAgICAgICAgICAvLyBXaGVuIEBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtZGVjb3JhdG9ycyBpbXBsZW1lbnRzIGluaXRpYWxpemVycyxcbiAgICAgICAgICAgIC8vIGRvIHRoaXMgaW5zdGVhZCBvZiB0aGUgaW5pdGlhbGl6ZXIgYmVsb3cuIFNlZTpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvOTI2MCBleHRyYXM6IFtcbiAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgLy8gICAgIGtpbmQ6ICdpbml0aWFsaXplcicsXG4gICAgICAgICAgICAvLyAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICAgIC8vICAgICBpbml0aWFsaXplcjogZGVzY3JpcHRvci5pbml0aWFsaXplcixcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gXSxcbiAgICAgICAgICAgIGluaXRpYWxpemVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5pbml0aWFsaXplciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2VsZW1lbnQua2V5XSA9IGVsZW1lbnQuaW5pdGlhbGl6ZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGxlZ2FjeVByb3BlcnR5ID0gKG9wdGlvbnMsIHByb3RvLCBuYW1lKSA9PiB7XG4gICAgcHJvdG8uY29uc3RydWN0b3JcbiAgICAgICAgLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xufTtcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3Igd2hpY2ggY3JlYXRlcyBhIExpdEVsZW1lbnQgcHJvcGVydHkgd2hpY2ggcmVmbGVjdHMgYVxuICogY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgdmFsdWUuIEEgYFByb3BlcnR5RGVjbGFyYXRpb25gIG1heSBvcHRpb25hbGx5IGJlXG4gKiBzdXBwbGllZCB0byBjb25maWd1cmUgcHJvcGVydHkgZmVhdHVyZXMuXG4gKlxuICogQEV4cG9ydERlY29yYXRlZEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eShvcHRpb25zKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKSA9PiAobmFtZSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgIGxlZ2FjeVByb3BlcnR5KG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKSA6XG4gICAgICAgIHN0YW5kYXJkUHJvcGVydHkob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IpO1xufVxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yLCBcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGRlY29yYXRvclxuICAgIG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAobmFtZSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICBsZWdhY3lRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgOlxuICAgICAgICAgICAgc3RhbmRhcmRRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvcik7XG4gICAgfTtcbn1cbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXJcbiAqIHRoYXQgZXhlY3V0ZXMgYSBxdWVyeVNlbGVjdG9yQWxsIG9uIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdC5cbiAqXG4gKiBARXhwb3J0RGVjb3JhdGVkSXRlbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvciwgXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgbGVnYWN5UXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpIDpcbiAgICAgICAgICAgIHN0YW5kYXJkUXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IpO1xuICAgIH07XG59XG5jb25zdCBsZWdhY3lRdWVyeSA9IChkZXNjcmlwdG9yLCBwcm90bywgbmFtZSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuY29uc3Qgc3RhbmRhcmRRdWVyeSA9IChkZXNjcmlwdG9yLCBlbGVtZW50KSA9PiAoe1xuICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gICAga2V5OiBlbGVtZW50LmtleSxcbiAgICBkZXNjcmlwdG9yLFxufSk7XG5jb25zdCBzdGFuZGFyZEV2ZW50T3B0aW9ucyA9IChvcHRpb25zLCBlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQsIHsgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2xhenoucHJvdG90eXBlW2VsZW1lbnQua2V5XSwgb3B0aW9ucyk7XG4gICAgICAgIH0gfSk7XG59O1xuY29uc3QgbGVnYWN5RXZlbnRPcHRpb25zID0gXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGxlZ2FjeSBkZWNvcmF0b3JcbihvcHRpb25zLCBwcm90bywgbmFtZSkgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24ocHJvdG9bbmFtZV0sIG9wdGlvbnMpO1xufTtcbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIHRvIGEgbWV0aG9kIHVzZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIgaW4gYVxuICogbGl0LWh0bWwgdGVtcGxhdGUuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IHRoYXQgc3BlY2lmaXMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBhcyBhY2NlcHRlZCBieVxuICogYEV2ZW50VGFyZ2V0I2FkZEV2ZW50TGlzdGVuZXJgIGFuZCBgRXZlbnRUYXJnZXQjcmVtb3ZlRXZlbnRMaXN0ZW5lcmAuXG4gKlxuICogQ3VycmVudCBicm93c2VycyBzdXBwb3J0IHRoZSBgY2FwdHVyZWAsIGBwYXNzaXZlYCwgYW5kIGBvbmNlYCBvcHRpb25zLiBTZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnRUYXJnZXQvYWRkRXZlbnRMaXN0ZW5lciNQYXJhbWV0ZXJzXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IHtcbiAqXG4gKiAgICAgICBjbGlja2VkID0gZmFsc2U7XG4gKlxuICogICAgICAgcmVuZGVyKCkge1xuICogICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IEBjbGljaz0ke3RoaXMuX29uQ2xpY2t9YD48YnV0dG9uPjwvYnV0dG9uPjwvZGl2PmA7XG4gKiAgICAgICB9XG4gKlxuICogICAgICAgQGV2ZW50T3B0aW9ucyh7Y2FwdHVyZTogdHJ1ZX0pXG4gKiAgICAgICBfb25DbGljayhlKSB7XG4gKiAgICAgICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICovXG5leHBvcnQgY29uc3QgZXZlbnRPcHRpb25zID0gKG9wdGlvbnMpID0+IFxuLy8gUmV0dXJuIHZhbHVlIHR5cGVkIGFzIGFueSB0byBwcmV2ZW50IFR5cGVTY3JpcHQgZnJvbSBjb21wbGFpbmluZyB0aGF0XG4vLyBzdGFuZGFyZCBkZWNvcmF0b3IgZnVuY3Rpb24gc2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIFR5cGVTY3JpcHQgZGVjb3JhdG9yXG4vLyBzaWduYXR1cmVcbi8vIFRPRE8oa3NjaGFhZik6IHVuY2xlYXIgd2h5IGl0IHdhcyBvbmx5IGZhaWxpbmcgb24gdGhpcyBkZWNvcmF0b3IgYW5kIG5vdFxuLy8gdGhlIG90aGVyc1xuKChwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgPT4gKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgIGxlZ2FjeUV2ZW50T3B0aW9ucyhvcHRpb25zLCBwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgOlxuICAgIHN0YW5kYXJkRXZlbnRPcHRpb25zKG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvcmF0b3JzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbnZhciBfYTtcbi8qKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG53aW5kb3cuSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9XG4gICAgKHByb3AsIF9vYmopID0+IHByb3A7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnJyA6IG51bGw7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCBwYXNzIHRoaXMgdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIHRvIGFsbG93IHJlbW92aW5nL25vIGNoYW5nZSBiZWhhdmlvci5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsO1xuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59O1xuLyoqXG4gKiBDaGFuZ2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBkaWZmZXJlbnQgZnJvbSBgb2xkVmFsdWVgLlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgYSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVxdWFsID0gKHZhbHVlLCBvbGQpID0+IHtcbiAgICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICAgIHJldHVybiBvbGQgIT09IHZhbHVlICYmIChvbGQgPT09IG9sZCB8fCB2YWx1ZSA9PT0gdmFsdWUpO1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uID0ge1xuICAgIGF0dHJpYnV0ZTogdHJ1ZSxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgY29udmVydGVyOiBkZWZhdWx0Q29udmVydGVyLFxuICAgIHJlZmxlY3Q6IGZhbHNlLFxuICAgIGhhc0NoYW5nZWQ6IG5vdEVxdWFsXG59O1xuY29uc3QgbWljcm90YXNrUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbmNvbnN0IFNUQVRFX0hBU19VUERBVEVEID0gMTtcbmNvbnN0IFNUQVRFX1VQREFURV9SRVFVRVNURUQgPSAxIDw8IDI7XG5jb25zdCBTVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURSA9IDEgPDwgMztcbmNvbnN0IFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFkgPSAxIDw8IDQ7XG5jb25zdCBTVEFURV9IQVNfQ09OTkVDVEVEID0gMSA8PCA1O1xuLyoqXG4gKiBUaGUgQ2xvc3VyZSBKUyBDb21waWxlciBkb2Vzbid0IGN1cnJlbnRseSBoYXZlIGdvb2Qgc3VwcG9ydCBmb3Igc3RhdGljXG4gKiBwcm9wZXJ0eSBzZW1hbnRpY3Mgd2hlcmUgXCJ0aGlzXCIgaXMgZHluYW1pYyAoZS5nLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8zMTc3IGFuZCBvdGhlcnMpIHNvIHdlIHVzZVxuICogdGhpcyBoYWNrIHRvIGJ5cGFzcyBhbnkgcmV3cml0aW5nIGJ5IHRoZSBjb21waWxlci5cbiAqL1xuY29uc3QgZmluYWxpemVkID0gJ2ZpbmFsaXplZCc7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXJzIHRvIHJlbmRlciB1cGRhdGVzIGFzIGRlc2lyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBVcGRhdGluZ0VsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gMDtcbiAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9taXNlID0gbWljcm90YXNrUHJvbWlzZTtcbiAgICAgICAgdGhpcy5faGFzQ29ubmVjdGVkUmVzb2x2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXAgd2l0aCBrZXlzIGZvciBhbnkgcHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdFxuICAgICAgICAgKiB1cGRhdGUgY3ljbGUgd2l0aCBwcmV2aW91cyB2YWx1ZXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcCB3aXRoIGtleXMgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgd2hlbiB1cGRhdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICAvLyBub3RlOiBwaWdneSBiYWNraW5nIG9uIHRoaXMgdG8gZW5zdXJlIHdlJ3JlIGZpbmFsaXplZC5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuX2NsYXNzUHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHAsIHYpO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuc2V0KGF0dHIsIHApO1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbnN1cmVzIHRoZSBwcml2YXRlIGBfY2xhc3NQcm9wZXJ0aWVzYCBwcm9wZXJ0eSBtZXRhZGF0YSBpcyBjcmVhdGVkLlxuICAgICAqIEluIGFkZGl0aW9uIHRvIGBmaW5hbGl6ZWAgdGhpcyBpcyBhbHNvIGNhbGxlZCBpbiBgY3JlYXRlUHJvcGVydHlgIHRvXG4gICAgICogZW5zdXJlIHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3IgY2FuIGFkZCBwcm9wZXJ0eSBtZXRhZGF0YS5cbiAgICAgKi9cbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBzdGF0aWMgX2Vuc3VyZUNsYXNzUHJvcGVydGllcygpIHtcbiAgICAgICAgLy8gZW5zdXJlIHByaXZhdGUgc3RvcmFnZSBmb3IgcHJvcGVydHkgZGVjbGFyYXRpb25zLlxuICAgICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnX2NsYXNzUHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgICAgICAgdGhpcy5fY2xhc3NQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgLy8gTk9URTogV29ya2Fyb3VuZCBJRTExIG5vdCBzdXBwb3J0aW5nIE1hcCBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1cGVyUHJvcGVydGllcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fY2xhc3NQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgaWYgKHN1cGVyUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3VwZXJQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHRoaXMuX2NsYXNzUHJvcGVydGllcy5zZXQoaywgdikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0LlxuICAgICAqIFRoZSBwcm9wZXJ0eSBzZXR0ZXIgY2FsbHMgdGhlIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIHByb3BlcnR5IG9wdGlvblxuICAgICAqIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHJlcXVlc3RcbiAgICAgKiBhbiB1cGRhdGUuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgY2FuIGJlIGNhbGxlZCBieSB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIHdoaWNoXG4gICAgICAgIC8vIGlzIGNhbGxlZCBiZWZvcmUgYGZpbmFsaXplYCwgd2UgZW5zdXJlIHN0b3JhZ2UgZXhpc3RzIGZvciBwcm9wZXJ0eVxuICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgdGhpcy5fZW5zdXJlQ2xhc3NQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMuX2NsYXNzUHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhbiBhY2Nlc3NvciBpZiB0aGUgcHJvdG90eXBlIGFscmVhZHkgaGFzIG9uZSwgc2luY2VcbiAgICAgICAgLy8gaXQgd291bGQgYmUgbG9zdCBvdGhlcndpc2UgYW5kIHRoYXQgd291bGQgbmV2ZXIgYmUgdGhlIHVzZXIncyBpbnRlbnRpb247XG4gICAgICAgIC8vIEluc3RlYWQsIHdlIGV4cGVjdCB1c2VycyB0byBjYWxsIGByZXF1ZXN0VXBkYXRlYCB0aGVtc2VsdmVzIGZyb21cbiAgICAgICAgLy8gdXNlci1kZWZpbmVkIGFjY2Vzc29ycy4gTm90ZSB0aGF0IGlmIHRoZSBzdXBlciBoYXMgYW4gYWNjZXNzb3Igd2Ugd2lsbFxuICAgICAgICAvLyBzdGlsbCBvdmVyd3JpdGUgaXRcbiAgICAgICAgaWYgKG9wdGlvbnMubm9BY2Nlc3NvciB8fCB0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBubyBzeW1ib2wgaW4gaW5kZXhcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzIGFuZCBlbnN1cmVzXG4gICAgICogYW55IHN1cGVyY2xhc3NlcyBhcmUgYWxzbyBmaW5hbGl6ZWQuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICAgICAgY29uc3Qgc3VwZXJDdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO1xuICAgICAgICBpZiAoIXN1cGVyQ3Rvci5oYXNPd25Qcm9wZXJ0eShmaW5hbGl6ZWQpKSB7XG4gICAgICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW2ZpbmFsaXplZF0gPSB0cnVlO1xuICAgICAgICB0aGlzLl9lbnN1cmVDbGFzc1Byb3BlcnRpZXMoKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBNYXAgcG9wdWxhdGVkIGluIG9ic2VydmVkQXR0cmlidXRlc1xuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBtYWtlIGFueSBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIE5vdGUsIG9ubHkgcHJvY2VzcyBcIm93blwiIHByb3BlcnRpZXMgc2luY2UgdGhpcyBlbGVtZW50IHdpbGwgaW5oZXJpdFxuICAgICAgICAvLyBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIHRoZSBzdXBlckNsYXNzLCBhbmQgZmluYWxpemF0aW9uIGVuc3VyZXNcbiAgICAgICAgLy8gdGhlIGVudGlyZSBwcm90b3R5cGUgY2hhaW4gaXMgZmluYWxpemVkLlxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdwcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgc3ltYm9scyBpbiBwcm9wZXJ0aWVzIChJRTExIGRvZXMgbm90IHN1cHBvcnQgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gW1xuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKSxcbiAgICAgICAgICAgICAgICAuLi4odHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIFRoaXMgZm9yL29mIGlzIG9rIGJlY2F1c2UgcHJvcEtleXMgaXMgYW4gYXJyYXlcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwcm9wS2V5cykge1xuICAgICAgICAgICAgICAgIC8vIG5vdGUsIHVzZSBvZiBgYW55YCBpcyBkdWUgdG8gVHlwZVNyaXB0IGxhY2sgb2Ygc3VwcG9ydCBmb3Igc3ltYm9sIGluXG4gICAgICAgICAgICAgICAgLy8gaW5kZXggdHlwZXNcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IG5vIHN5bWJvbCBpbiBpbmRleFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHkocCwgcHJvcHNbcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIF9hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZSA9PT0gZmFsc2UgP1xuICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgICh0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlIDpcbiAgICAgICAgICAgICAgICAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnID8gbmFtZS50b0xvd2VyQ2FzZSgpIDogdW5kZWZpbmVkKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhIHByb3BlcnR5IHNob3VsZCByZXF1ZXN0IGFuIHVwZGF0ZS5cbiAgICAgKiBDYWxsZWQgd2hlbiBhIHByb3BlcnR5IHZhbHVlIGlzIHNldCBhbmQgdXNlcyB0aGUgYGhhc0NoYW5nZWRgXG4gICAgICogb3B0aW9uIGZvciB0aGUgcHJvcGVydHkgaWYgcHJlc2VudCBvciBhIHN0cmljdCBpZGVudGl0eSBjaGVjay5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfdmFsdWVIYXNDaGFuZ2VkKHZhbHVlLCBvbGQsIGhhc0NoYW5nZWQgPSBub3RFcXVhbCkge1xuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQ2FsbGVkIHZpYSB0aGUgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgYW5kIHVzZXMgdGhlIHByb3BlcnR5J3NcbiAgICAgKiBgY29udmVydGVyYCBvciBgY29udmVydGVyLmZyb21BdHRyaWJ1dGVgIHByb3BlcnR5IG9wdGlvbi5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfcHJvcGVydHlWYWx1ZUZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICAgICAgY29uc3QgY29udmVydGVyID0gb3B0aW9ucy5jb252ZXJ0ZXIgfHwgZGVmYXVsdENvbnZlcnRlcjtcbiAgICAgICAgY29uc3QgZnJvbUF0dHJpYnV0ZSA9ICh0eXBlb2YgY29udmVydGVyID09PSAnZnVuY3Rpb24nID8gY29udmVydGVyIDogY29udmVydGVyLmZyb21BdHRyaWJ1dGUpO1xuICAgICAgICByZXR1cm4gZnJvbUF0dHJpYnV0ZSA/IGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIDogdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IHZhbHVlLiBJZiB0aGlzXG4gICAgICogcmV0dXJucyB1bmRlZmluZWQsIHRoZSBwcm9wZXJ0eSB3aWxsICpub3QqIGJlIHJlZmxlY3RlZCB0byBhbiBhdHRyaWJ1dGUuXG4gICAgICogSWYgdGhpcyByZXR1cm5zIG51bGwsIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkLCBvdGhlcndpc2UgdGhlXG4gICAgICogYXR0cmlidXRlIHdpbGwgYmUgc2V0IHRvIHRoZSB2YWx1ZS5cbiAgICAgKiBUaGlzIHVzZXMgdGhlIHByb3BlcnR5J3MgYHJlZmxlY3RgIGFuZCBgdHlwZS50b0F0dHJpYnV0ZWAgcHJvcGVydHkgb3B0aW9ucy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfcHJvcGVydHlWYWx1ZVRvQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IG9wdGlvbnMuY29udmVydGVyO1xuICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IGNvbnZlcnRlciAmJiBjb252ZXJ0ZXIudG9BdHRyaWJ1dGUgfHxcbiAgICAgICAgICAgIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGU7XG4gICAgICAgIHJldHVybiB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGVsZW1lbnQgaW5pdGlhbGl6YXRpb24uIEJ5IGRlZmF1bHQgY2FwdHVyZXMgYW55IHByZS1zZXQgdmFsdWVzIGZvclxuICAgICAqIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLl9zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCk7XG4gICAgICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZlxuICAgICAgICAvLyBgdXBkYXRlQ29tcGxldGVgXG4gICAgICAgIHRoaXMuX3JlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRml4ZXMgYW55IHByb3BlcnRpZXMgc2V0IG9uIHRoZSBpbnN0YW5jZSBiZWZvcmUgdXBncmFkZSB0aW1lLlxuICAgICAqIE90aGVyd2lzZSB0aGVzZSB3b3VsZCBzaGFkb3cgdGhlIGFjY2Vzc29yIGFuZCBicmVhayB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAgICogY29uc3RydWN0b3IgcnVucy4gTm90ZSwgb24gdmVyeSBvbGQgdmVyc2lvbnMgb2YgU2FmYXJpICg8PTkpIG9yIENocm9tZVxuICAgICAqICg8PTQxKSwgcHJvcGVydGllcyBjcmVhdGVkIGZvciBuYXRpdmUgcGxhdGZvcm0gcHJvcGVydGllcyBsaWtlIChgaWRgIG9yXG4gICAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgICAqIHRoZXNlIGJyb3dzZXJzIG5hdGl2ZSBwcm9wZXJ0aWVzIGFwcGVhciBvbiBpbnN0YW5jZXMgYW5kIHRoZXJlZm9yZSB0aGVpclxuICAgICAqIGRlZmF1bHQgdmFsdWUgd2lsbCBvdmVyd3JpdGUgYW55IGVsZW1lbnQgZGVmYXVsdCAoZS5nLiBpZiB0aGUgZWxlbWVudCBzZXRzXG4gICAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAgICogdGhlIG5hdGl2ZSBwbGF0Zm9ybSBkZWZhdWx0KS5cbiAgICAgKi9cbiAgICBfc2F2ZUluc3RhbmNlUHJvcGVydGllcygpIHtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgLl9jbGFzc1Byb3BlcnRpZXMuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW3BdO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3BdO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHByZXZpb3VzbHkgc2F2ZWQgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBfYXBwbHlJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+IHRoaXNbcF0gPSB2KTtcbiAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX0hBU19DT05ORUNURUQ7XG4gICAgICAgIC8vIEVuc3VyZSBmaXJzdCBjb25uZWN0aW9uIGNvbXBsZXRlcyBhbiB1cGRhdGUuIFVwZGF0ZXMgY2Fubm90IGNvbXBsZXRlXG4gICAgICAgIC8vIGJlZm9yZSBjb25uZWN0aW9uIGFuZCBpZiBvbmUgaXMgcGVuZGluZyBjb25uZWN0aW9uIHRoZVxuICAgICAgICAvLyBgX2hhc0Nvbm5lY3Rpb25SZXNvbHZlcmAgd2lsbCBleGlzdC4gSWYgc28sIHJlc29sdmUgaXQgdG8gY29tcGxldGUgdGhlXG4gICAgICAgIC8vIHVwZGF0ZSwgb3RoZXJ3aXNlIHJlcXVlc3RVcGRhdGUuXG4gICAgICAgIGlmICh0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlcikge1xuICAgICAgICAgICAgdGhpcy5faGFzQ29ubmVjdGVkUmVzb2x2ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc0Nvbm5lY3RlZFJlc29sdmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsbG93cyBmb3IgYHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIGluIGV4dGVuc2lvbnMgd2hpbGVcbiAgICAgKiByZXNlcnZpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1ha2luZyBub24tYnJlYWtpbmcgZmVhdHVyZSBhZGRpdGlvbnNcbiAgICAgKiB3aGVuIGRpc2Nvbm5lY3RpbmcgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLlxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZXMgcHJvcGVydHkgdmFsdWVzIHdoZW4gYXR0cmlidXRlcyBjaGFuZ2UuXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9wcm9wZXJ0eVRvQXR0cmlidXRlKG5hbWUsIHZhbHVlLCBvcHRpb25zID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAgICAgY29uc3QgY3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBjdG9yLl9hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGN0b3IuX3Byb3BlcnR5VmFsdWVUb0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBhbiB1bmRlZmluZWQgdmFsdWUgZG9lcyBub3QgY2hhbmdlIHRoZSBhdHRyaWJ1dGUuXG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAgICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgICAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEU7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlICYgflNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fQVRUUklCVVRFO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9hdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIC8vIFVzZSB0cmFja2luZyBpbmZvIHRvIGF2b2lkIGRlc2VyaWFsaXppbmcgYXR0cmlidXRlIHZhbHVlIGlmIGl0IHdhc1xuICAgICAgICAvLyBqdXN0IHNldCBmcm9tIGEgcHJvcGVydHkgc2V0dGVyLlxuICAgICAgICBpZiAodGhpcy5fdXBkYXRlU3RhdGUgJiBTVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGN0b3IuX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAocHJvcE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGN0b3IuX2NsYXNzUHJvcGVydGllcy5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uO1xuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWTtcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID1cbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICAgICAgY3Rvci5fcHJvcGVydHlWYWx1ZUZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSAmIH5TVEFURV9JU19SRUZMRUNUSU5HX1RPX1BST1BFUlRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgcHJpdmF0ZSB2ZXJzaW9uIG9mIGByZXF1ZXN0VXBkYXRlYCBkb2VzIG5vdCBhY2Nlc3Mgb3IgcmV0dXJuIHRoZVxuICAgICAqIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZS4gVGhpcyBwcm9taXNlIGNhbiBiZSBvdmVycmlkZGVuIGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgKiBub3QgZnJlZSB0byBhY2Nlc3MuXG4gICAgICovXG4gICAgX3JlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHNob3VsZFJlcXVlc3RVcGRhdGUgPSB0cnVlO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5fY2xhc3NQcm9wZXJ0aWVzLmdldChuYW1lKSB8fCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjtcbiAgICAgICAgICAgIGlmIChjdG9yLl92YWx1ZUhhc0NoYW5nZWQodGhpc1tuYW1lXSwgb2xkVmFsdWUsIG9wdGlvbnMuaGFzQ2hhbmdlZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NoYW5nZWRQcm9wZXJ0aWVzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcy5zZXQobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IGV2ZXJ5IGNoYW5nZSBoYXMgYSBjaGFuY2UgdG8gYWRkIHRoZVxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvIGBfcmVmbGVjdGluZ1Byb3BlcnRpZXNgLiBUaGlzIGVuc3VyZXMgc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgICAgICEodGhpcy5fdXBkYXRlU3RhdGUgJiBTVEFURV9JU19SRUZMRUNUSU5HX1RPX1BST1BFUlRZKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBzaG91bGRSZXF1ZXN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9oYXNSZXF1ZXN0ZWRVcGRhdGUgJiYgc2hvdWxkUmVxdWVzdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fZW5xdWV1ZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkXG4gICAgICogYmUgY2FsbGVkIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZFxuICAgICAqIGJ5IHNldHRpbmcgYSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICAgKiBvcHRpb25zIGFyZSBob25vcmVkLiBSZXR1cm5zIHRoZSBgdXBkYXRlQ29tcGxldGVgIFByb21pc2Ugd2hpY2ggaXMgcmVzb2x2ZWRcbiAgICAgKiB3aGVuIHRoZSB1cGRhdGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUge1Byb3BlcnR5S2V5fSAob3B0aW9uYWwpIG5hbWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSB7YW55fSAob3B0aW9uYWwpIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHJldHVybnMge1Byb21pc2V9IEEgUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIHVwZGF0ZSBjb21wbGV0ZXMuXG4gICAgICovXG4gICAgcmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLl9yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgICAqL1xuICAgIGFzeW5jIF9lbnF1ZXVlVXBkYXRlKCkge1xuICAgICAgICAvLyBNYXJrIHN0YXRlIHVwZGF0aW5nLi4uXG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgfCBTVEFURV9VUERBVEVfUkVRVUVTVEVEO1xuICAgICAgICBsZXQgcmVzb2x2ZTtcbiAgICAgICAgbGV0IHJlamVjdDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNVcGRhdGVQcm9taXNlID0gdGhpcy5fdXBkYXRlUHJvbWlzZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgYW55IHByZXZpb3VzIHVwZGF0ZSBoYXMgcmVzb2x2ZWQgYmVmb3JlIHVwZGF0aW5nLlxuICAgICAgICAgICAgLy8gVGhpcyBgYXdhaXRgIGFsc28gZW5zdXJlcyB0aGF0IHByb3BlcnR5IGNoYW5nZXMgYXJlIGJhdGNoZWQuXG4gICAgICAgICAgICBhd2FpdCBwcmV2aW91c1VwZGF0ZVByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBhbnkgcHJldmlvdXMgZXJyb3JzLiBXZSBvbmx5IGNhcmUgdGhhdCB0aGUgcHJldmlvdXMgY3ljbGUgaXNcbiAgICAgICAgICAgIC8vIGRvbmUuIEFueSBlcnJvciBzaG91bGQgaGF2ZSBiZWVuIGhhbmRsZWQgaW4gdGhlIHByZXZpb3VzIHVwZGF0ZS5cbiAgICAgICAgfVxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaGFzIGNvbm5lY3RlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgICAgIGlmICghdGhpcy5faGFzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlciA9IHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGVyZm9ybVVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gSWYgYHBlcmZvcm1VcGRhdGVgIHJldHVybnMgYSBQcm9taXNlLCB3ZSBhd2FpdCBpdC4gVGhpcyBpcyBkb25lIHRvXG4gICAgICAgICAgICAvLyBlbmFibGUgY29vcmRpbmF0aW5nIHVwZGF0ZXMgd2l0aCBhIHNjaGVkdWxlci4gTm90ZSwgdGhlIHJlc3VsdCBpc1xuICAgICAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoIXRoaXMuX2hhc1JlcXVlc3RlZFVwZGF0ZSk7XG4gICAgfVxuICAgIGdldCBfaGFzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSEFTX0NPTk5FQ1RFRCk7XG4gICAgfVxuICAgIGdldCBfaGFzUmVxdWVzdGVkVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRCk7XG4gICAgfVxuICAgIGdldCBoYXNVcGRhdGVkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSEFTX1VQREFURUQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbiBlbGVtZW50IHVwZGF0ZS4gTm90ZSwgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBkdXJpbmcgdGhlXG4gICAgICogdXBkYXRlLCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIHdpbGwgbm90IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSB0aW1pbmcgb2YgdXBkYXRlcy4gSWYgdGhpc1xuICAgICAqIG1ldGhvZCBpcyBvdmVycmlkZGVuLCBgc3VwZXIucGVyZm9ybVVwZGF0ZSgpYCBtdXN0IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEZvciBpbnN0YW5jZSwgdG8gc2NoZWR1bGUgdXBkYXRlcyB0byBvY2N1ciBqdXN0IGJlZm9yZSB0aGUgbmV4dCBmcmFtZTpcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHByb3RlY3RlZCBhc3luYyBwZXJmb3JtVXBkYXRlKCk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgICAqICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbiAgICAgKiAgIHN1cGVyLnBlcmZvcm1VcGRhdGUoKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgLy8gTWl4aW4gaW5zdGFuY2UgcHJvcGVydGllcyBvbmNlLCBpZiB0aGV5IGV4aXN0LlxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2hhbmdlZFByb3BlcnRpZXMgPSB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGVsZW1lbnQgY2FuIGFjY2VwdCBhZGRpdGlvbmFsIHVwZGF0ZXMgYWZ0ZXIgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgICAgdGhpcy5fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19VUERBVEVEKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgfCBTVEFURV9IQVNfVVBEQVRFRDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9tYXJrVXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgJiB+U1RBVEVfVVBEQVRFX1JFUVVFU1RFRDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBlbGVtZW50IGhhcyBjb21wbGV0ZWQgdXBkYXRpbmcuXG4gICAgICogVGhlIFByb21pc2UgdmFsdWUgaXMgYSBib29sZWFuIHRoYXQgaXMgYHRydWVgIGlmIHRoZSBlbGVtZW50IGNvbXBsZXRlZCB0aGVcbiAgICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgICAqIGEgcHJvcGVydHkgd2FzIHNldCBpbnNpZGUgYHVwZGF0ZWQoKWAuIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBhblxuICAgICAqIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogVG8gYXdhaXQgYWRkaXRpb25hbCBhc3luY2hyb25vdXMgd29yaywgb3ZlcnJpZGUgdGhlIGBfZ2V0VXBkYXRlQ29tcGxldGVgXG4gICAgICogbWV0aG9kLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhIHJlbmRlcmVkIGVsZW1lbnRcbiAgICAgKiBiZWZvcmUgZnVsZmlsbGluZyB0aGlzIFByb21pc2UuIFRvIGRvIHRoaXMsIGZpcnN0IGF3YWl0XG4gICAgICogYHN1cGVyLl9nZXRVcGRhdGVDb21wbGV0ZSgpYCwgdGhlbiBhbnkgc3Vic2VxdWVudCBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSByZXR1cm5zIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGVcbiAgICAgKiB1cGRhdGUgcmVzb2x2ZWQgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLlxuICAgICAqL1xuICAgIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHBvaW50IGZvciB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlLlxuICAgICAqXG4gICAgICogSXQgaXMgbm90IHNhZmUgdG8gb3ZlcnJpZGUgdGhlIGB1cGRhdGVDb21wbGV0ZWAgZ2V0dGVyIGRpcmVjdGx5IGR1ZSB0byBhXG4gICAgICogbGltaXRhdGlvbiBpbiBUeXBlU2NyaXB0IHdoaWNoIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBjYWxsIGFcbiAgICAgKiBzdXBlcmNsYXNzIGdldHRlciAoZS5nLiBgc3VwZXIudXBkYXRlQ29tcGxldGUudGhlbiguLi4pYCkgd2hlbiB0aGUgdGFyZ2V0XG4gICAgICogbGFuZ3VhZ2UgaXMgRVM1IChodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMzOCkuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaW5zdGVhZC4gRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgICBhc3luYyBfZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICogICAgICAgYXdhaXQgc3VwZXIuX2dldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgICogICAgICAgYXdhaXQgdGhpcy5fbXlDaGlsZC51cGRhdGVDb21wbGV0ZTtcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqL1xuICAgIF9nZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGB1cGRhdGVgIHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCByZXF1ZXN0c1xuICAgICAqIGFuIHVwZGF0ZS4gQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgYWx3YXlzIHJldHVybnMgYHRydWVgLCBidXQgdGhpcyBjYW4gYmVcbiAgICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAgICpcbiAgICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKi9cbiAgICBzaG91bGRVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlcy5cbiAgICAgKiBJdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byByZW5kZXIgYW5kIGtlZXAgdXBkYXRlZCBlbGVtZW50IERPTS5cbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIGFub3RoZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICovXG4gICAgdXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvclxuICAgICAgICAgICAgLy8gbG9vcHMgZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5fcHJvcGVydHlUb0F0dHJpYnV0ZShrLCB0aGlzW2tdLCB2KSk7XG4gICAgICAgICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICovXG4gICAgdXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGZpcnN0IHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtIG9uZSB0aW1lXG4gICAgICogd29yayBvbiB0aGUgZWxlbWVudCBhZnRlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGVcbiAgICAgKiBhZ2FpbiBhZnRlciB0aGlzIHVwZGF0ZSBjeWNsZSBjb21wbGV0ZXMuXG4gICAgICpcbiAgICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKi9cbiAgICBmaXJzdFVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgfVxufVxuX2EgPSBmaW5hbGl6ZWQ7XG4vKipcbiAqIE1hcmtzIGNsYXNzIGFzIGhhdmluZyBmaW5pc2hlZCBjcmVhdGluZyBwcm9wZXJ0aWVzLlxuICovXG5VcGRhdGluZ0VsZW1lbnRbX2FdID0gdHJ1ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVwZGF0aW5nLWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICdsaXQtaHRtbCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdsaXQtaHRtbC9saWIvc2hhZHktcmVuZGVyLmpzJztcbmltcG9ydCB7IFVwZGF0aW5nRWxlbWVudCB9IGZyb20gJy4vbGliL3VwZGF0aW5nLWVsZW1lbnQuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdXBkYXRpbmctZWxlbWVudC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9kZWNvcmF0b3JzLmpzJztcbmV4cG9ydCB7IGh0bWwsIHN2ZywgVGVtcGxhdGVSZXN1bHQsIFNWR1RlbXBsYXRlUmVzdWx0IH0gZnJvbSAnbGl0LWh0bWwvbGl0LWh0bWwuanMnO1xuaW1wb3J0IHsgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzIH0gZnJvbSAnLi9saWIvY3NzLXRhZy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9jc3MtdGFnLmpzJztcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgTGl0RWxlbWVudCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG4od2luZG93WydsaXRFbGVtZW50VmVyc2lvbnMnXSB8fCAod2luZG93WydsaXRFbGVtZW50VmVyc2lvbnMnXSA9IFtdKSlcbiAgICAucHVzaCgnMi4yLjEnKTtcbi8qKlxuICogTWluaW1hbCBpbXBsZW1lbnRhdGlvbiBvZiBBcnJheS5wcm90b3R5cGUuZmxhdFxuICogQHBhcmFtIGFyciB0aGUgYXJyYXkgdG8gZmxhdHRlblxuICogQHBhcmFtIHJlc3VsdCB0aGUgYWNjdW1sYXRlZCByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYXJyYXlGbGF0KHN0eWxlcywgcmVzdWx0ID0gW10pIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gc3R5bGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2ldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGFycmF5RmxhdCh2YWx1ZSwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqIERlZXBseSBmbGF0dGVucyBzdHlsZXMgYXJyYXkuIFVzZXMgbmF0aXZlIGZsYXQgaWYgYXZhaWxhYmxlLiAqL1xuY29uc3QgZmxhdHRlblN0eWxlcyA9IChzdHlsZXMpID0+IHN0eWxlcy5mbGF0ID8gc3R5bGVzLmZsYXQoSW5maW5pdHkpIDogYXJyYXlGbGF0KHN0eWxlcyk7XG5leHBvcnQgY2xhc3MgTGl0RWxlbWVudCBleHRlbmRzIFVwZGF0aW5nRWxlbWVudCB7XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgICAgICAvLyBUaGUgQ2xvc3VyZSBKUyBDb21waWxlciBkb2VzIG5vdCBhbHdheXMgcHJlc2VydmUgdGhlIGNvcnJlY3QgXCJ0aGlzXCJcbiAgICAgICAgLy8gd2hlbiBjYWxsaW5nIHN0YXRpYyBzdXBlciBtZXRob2RzIChiLzEzNzQ2MDI0MyksIHNvIGV4cGxpY2l0bHkgYmluZC5cbiAgICAgICAgc3VwZXIuZmluYWxpemUuY2FsbCh0aGlzKTtcbiAgICAgICAgLy8gUHJlcGFyZSBzdHlsaW5nIHRoYXQgaXMgc3RhbXBlZCBhdCBmaXJzdCByZW5kZXIgdGltZS4gU3R5bGluZ1xuICAgICAgICAvLyBpcyBidWlsdCBmcm9tIHVzZXIgcHJvdmlkZWQgYHN0eWxlc2Agb3IgaXMgaW5oZXJpdGVkIGZyb20gdGhlIHN1cGVyY2xhc3MuXG4gICAgICAgIHRoaXMuX3N0eWxlcyA9XG4gICAgICAgICAgICB0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3N0eWxlcycsIHRoaXMpKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0VW5pcXVlU3R5bGVzKCkgOlxuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlcyB8fCBbXTtcbiAgICB9XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgc3RhdGljIF9nZXRVbmlxdWVTdHlsZXMoKSB7XG4gICAgICAgIC8vIFRha2UgY2FyZSBub3QgdG8gY2FsbCBgdGhpcy5zdHlsZXNgIG11bHRpcGxlIHRpbWVzIHNpbmNlIHRoaXMgZ2VuZXJhdGVzXG4gICAgICAgIC8vIG5ldyBDU1NSZXN1bHRzIGVhY2ggdGltZS5cbiAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogU2luY2Ugd2UgZG8gbm90IGNhY2hlIENTU1Jlc3VsdHMgYnkgaW5wdXQsIGFueVxuICAgICAgICAvLyBzaGFyZWQgc3R5bGVzIHdpbGwgZ2VuZXJhdGUgbmV3IHN0eWxlc2hlZXQgb2JqZWN0cywgd2hpY2ggaXMgd2FzdGVmdWwuXG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGFkZHJlc3NlZCB3aGVuIGEgYnJvd3NlciBzaGlwcyBjb25zdHJ1Y3RhYmxlXG4gICAgICAgIC8vIHN0eWxlc2hlZXRzLlxuICAgICAgICBjb25zdCB1c2VyU3R5bGVzID0gdGhpcy5zdHlsZXM7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VyU3R5bGVzKSkge1xuICAgICAgICAgICAgY29uc3QgZmxhdFN0eWxlcyA9IGZsYXR0ZW5TdHlsZXModXNlclN0eWxlcyk7XG4gICAgICAgICAgICAvLyBBcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiB0byBhdm9pZCBkdXBsaWNhdGVkIHN0eWxpbmcgdGhhdCBjYW5cbiAgICAgICAgICAgIC8vIG9jY3VyIGVzcGVjaWFsbHkgd2hlbiBjb21wb3NpbmcgdmlhIHN1YmNsYXNzaW5nLCBkZS1kdXBsaWNhdGUgc3R5bGVzXG4gICAgICAgICAgICAvLyBwcmVzZXJ2aW5nIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0b1xuICAgICAgICAgICAgLy8gdHJ5IHRvIHByZXNlcnZlIGNhc2NhZGUgb3JkZXIgd2l0aCB0aGUgYXNzdW1wdGlvbiB0aGF0IGl0J3MgbW9zdFxuICAgICAgICAgICAgLy8gaW1wb3J0YW50IHRoYXQgbGFzdCBhZGRlZCBzdHlsZXMgb3ZlcnJpZGUgcHJldmlvdXMgc3R5bGVzLlxuICAgICAgICAgICAgY29uc3Qgc3R5bGVTZXQgPSBmbGF0U3R5bGVzLnJlZHVjZVJpZ2h0KChzZXQsIHMpID0+IHtcbiAgICAgICAgICAgICAgICBzZXQuYWRkKHMpO1xuICAgICAgICAgICAgICAgIC8vIG9uIElFIHNldC5hZGQgZG9lcyBub3QgcmV0dXJuIHRoZSBzZXQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldDtcbiAgICAgICAgICAgIH0sIG5ldyBTZXQoKSk7XG4gICAgICAgICAgICAvLyBBcnJheS5mcm9tIGRvZXMgbm90IHdvcmsgb24gU2V0IGluIElFXG4gICAgICAgICAgICBzdHlsZVNldC5mb3JFYWNoKCh2KSA9PiBzdHlsZXMudW5zaGlmdCh2KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXNlclN0eWxlcykge1xuICAgICAgICAgICAgc3R5bGVzLnB1c2godXNlclN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgZWxlbWVudCBpbml0aWFsaXphdGlvbi4gQnkgZGVmYXVsdCB0aGlzIGNhbGxzIGBjcmVhdGVSZW5kZXJSb290YFxuICAgICAqIHRvIGNyZWF0ZSB0aGUgZWxlbWVudCBgcmVuZGVyUm9vdGAgbm9kZSBhbmQgY2FwdHVyZXMgYW55IHByZS1zZXQgdmFsdWVzIGZvclxuICAgICAqIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMucmVuZGVyUm9vdCA9XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgLy8gTm90ZSwgaWYgcmVuZGVyUm9vdCBpcyBub3QgYSBzaGFkb3dSb290LCBzdHlsZXMgd291bGQvY291bGQgYXBwbHkgdG8gdGhlXG4gICAgICAgIC8vIGVsZW1lbnQncyBnZXRSb290Tm9kZSgpLiBXaGlsZSB0aGlzIGNvdWxkIGJlIGRvbmUsIHdlJ3JlIGNob29zaW5nIG5vdCB0b1xuICAgICAgICAvLyBzdXBwb3J0IHRoaXMgbm93IHNpbmNlIGl0IHdvdWxkIHJlcXVpcmUgZGlmZmVyZW50IGxvZ2ljIGFyb3VuZCBkZS1kdXBpbmcuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhZG93Um9vdCAmJiB0aGlzLnJlbmRlclJvb3QgaW5zdGFuY2VvZiB3aW5kb3cuU2hhZG93Um9vdCkge1xuICAgICAgICAgICAgdGhpcy5hZG9wdFN0eWxlcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAgICogY3JlYXRlcyBhbmQgcmV0dXJucyBhbiBvcGVuIHNoYWRvd1Jvb3QuIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlXG4gICAgICogZWxlbWVudCdzIERPTSBpcyByZW5kZXJlZC4gRm9yIGV4YW1wbGUsIHRvIHJlbmRlciBpbnRvIHRoZSBlbGVtZW50J3NcbiAgICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgICAqIEByZXR1cm5zIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IFJldHVybnMgYSBub2RlIGludG8gd2hpY2ggdG8gcmVuZGVyLlxuICAgICAqL1xuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBzdHlsaW5nIHRvIHRoZSBlbGVtZW50IHNoYWRvd1Jvb3QgdXNpbmcgdGhlIGBzdGF0aWMgZ2V0IHN0eWxlc2BcbiAgICAgKiBwcm9wZXJ0eS4gU3R5bGluZyB3aWxsIGFwcGx5IHVzaW5nIGBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0c2Agd2hlcmVcbiAgICAgKiBhdmFpbGFibGUgYW5kIHdpbGwgZmFsbGJhY2sgb3RoZXJ3aXNlLiBXaGVuIFNoYWRvdyBET00gaXMgcG9seWZpbGxlZCxcbiAgICAgKiBTaGFkeUNTUyBzY29wZXMgc3R5bGVzIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGRvY3VtZW50LiBXaGVuIFNoYWRvdyBET01cbiAgICAgKiBpcyBhdmFpbGFibGUgYnV0IGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIG5vdCwgc3R5bGVzIGFyZSBhcHBlbmRlZCB0byB0aGVcbiAgICAgKiBlbmQgb2YgdGhlIGBzaGFkb3dSb290YCB0byBbbWltaWMgc3BlY1xuICAgICAqIGJlaGF2aW9yXShodHRwczovL3dpY2cuZ2l0aHViLmlvL2NvbnN0cnVjdC1zdHlsZXNoZWV0cy8jdXNpbmctY29uc3RydWN0ZWQtc3R5bGVzaGVldHMpLlxuICAgICAqL1xuICAgIGFkb3B0U3R5bGVzKCkge1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmNvbnN0cnVjdG9yLl9zdHlsZXM7XG4gICAgICAgIGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlcmUgYXJlIHRocmVlIHNlcGFyYXRlIGNhc2VzIGhlcmUgYmFzZWQgb24gU2hhZG93IERPTSBzdXBwb3J0LlxuICAgICAgICAvLyAoMSkgc2hhZG93Um9vdCBwb2x5ZmlsbGVkOiB1c2UgU2hhZHlDU1NcbiAgICAgICAgLy8gKDIpIHNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzIGF2YWlsYWJsZTogdXNlIGl0LlxuICAgICAgICAvLyAoMykgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMgcG9seWZpbGxlZDogYXBwZW5kIHN0eWxlcyBhZnRlclxuICAgICAgICAvLyByZW5kZXJpbmdcbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkeUNTUyAhPT0gdW5kZWZpbmVkICYmICF3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuU2hhZHlDU1MuU2NvcGluZ1NoaW0ucHJlcGFyZUFkb3B0ZWRDc3NUZXh0KHN0eWxlcy5tYXAoKHMpID0+IHMuY3NzVGV4dCksIHRoaXMubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPVxuICAgICAgICAgICAgICAgIHN0eWxlcy5tYXAoKHMpID0+IHMuc3R5bGVTaGVldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIG11c3QgYmUgZG9uZSBhZnRlciByZW5kZXJpbmcgc28gdGhlIGFjdHVhbCBzdHlsZSBpbnNlcnRpb24gaXMgZG9uZVxuICAgICAgICAgICAgLy8gaW4gYHVwZGF0ZWAuXG4gICAgICAgICAgICB0aGlzLl9uZWVkc1NoaW1BZG9wdGVkU3R5bGVTaGVldHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAvLyBOb3RlLCBmaXJzdCB1cGRhdGUvcmVuZGVyIGhhbmRsZXMgc3R5bGVFbGVtZW50IHNvIHdlIG9ubHkgY2FsbCB0aGlzIGlmXG4gICAgICAgIC8vIGNvbm5lY3RlZCBhZnRlciBmaXJzdCB1cGRhdGUuXG4gICAgICAgIGlmICh0aGlzLmhhc1VwZGF0ZWQgJiYgd2luZG93LlNoYWR5Q1NTICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXNcbiAgICAgKiBhbmQgY2FsbHMgYHJlbmRlcmAgdG8gcmVuZGVyIERPTSB2aWEgbGl0LWh0bWwuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGVcbiAgICAgKiB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG4gICAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICovXG4gICAgdXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlUmVzdWx0ID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlUmVzdWx0IGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAucmVuZGVyKHRlbXBsYXRlUmVzdWx0LCB0aGlzLnJlbmRlclJvb3QsIHsgc2NvcGVOYW1lOiB0aGlzLmxvY2FsTmFtZSwgZXZlbnRDb250ZXh0OiB0aGlzIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gbmF0aXZlIFNoYWRvdyBET00gaXMgdXNlZCBidXQgYWRvcHRlZFN0eWxlcyBhcmUgbm90IHN1cHBvcnRlZCxcbiAgICAgICAgLy8gaW5zZXJ0IHN0eWxpbmcgYWZ0ZXIgcmVuZGVyaW5nIHRvIGVuc3VyZSBhZG9wdGVkU3R5bGVzIGhhdmUgaGlnaGVzdFxuICAgICAgICAvLyBwcmlvcml0eS5cbiAgICAgICAgaWYgKHRoaXMuX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cykge1xuICAgICAgICAgICAgdGhpcy5fbmVlZHNTaGltQWRvcHRlZFN0eWxlU2hlZXRzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLl9zdHlsZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHMuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCBvbiBlYWNoIHVwZGF0ZSB0byBwZXJmb3JtIHJlbmRlcmluZyB0YXNrcy4gVGhpcyBtZXRob2QgbXVzdCByZXR1cm5cbiAgICAgKiBhIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0LiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCpcbiAgICAgKiB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhpcyBjbGFzcyBpcyBtYXJrZWQgYXMgYGZpbmFsaXplZGAgYXMgYW4gb3B0aW1pemF0aW9uIGVuc3VyaW5nXG4gKiBpdCB3aWxsIG5vdCBuZWVkbGVzc2x5IHRyeSB0byBgZmluYWxpemVgLlxuICpcbiAqIE5vdGUgdGhpcyBwcm9wZXJ0eSBuYW1lIGlzIGEgc3RyaW5nIHRvIHByZXZlbnQgYnJlYWtpbmcgQ2xvc3VyZSBKUyBDb21waWxlclxuICogb3B0aW1pemF0aW9ucy4gU2VlIHVwZGF0aW5nLWVsZW1lbnQudHMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbkxpdEVsZW1lbnRbJ2ZpbmFsaXplZCddID0gdHJ1ZTtcbi8qKlxuICogUmVuZGVyIG1ldGhvZCB1c2VkIHRvIHJlbmRlciB0aGUgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQgdG8gdGhlIGVsZW1lbnQnc1xuICogRE9NLlxuICogQHBhcmFtIHtUZW1wbGF0ZVJlc3VsdH0gVGVtcGxhdGUgdG8gcmVuZGVyLlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IE5vZGUgaW50byB3aGljaCB0byByZW5kZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gRWxlbWVudCBuYW1lLlxuICogQG5vY29sbGFwc2VcbiAqL1xuTGl0RWxlbWVudC5yZW5kZXIgPSByZW5kZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBpc1ByaW1pdGl2ZSB9IGZyb20gJy4uL2xpYi9wYXJ0cy5qcyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUsIE5vZGVQYXJ0IH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuLy8gRm9yIGVhY2ggcGFydCwgcmVtZW1iZXIgdGhlIHZhbHVlIHRoYXQgd2FzIGxhc3QgcmVuZGVyZWQgdG8gdGhlIHBhcnQgYnkgdGhlXG4vLyB1bnNhZmVIVE1MIGRpcmVjdGl2ZSwgYW5kIHRoZSBEb2N1bWVudEZyYWdtZW50IHRoYXQgd2FzIGxhc3Qgc2V0IGFzIGEgdmFsdWUuXG4vLyBUaGUgRG9jdW1lbnRGcmFnbWVudCBpcyB1c2VkIGFzIGEgdW5pcXVlIGtleSB0byBjaGVjayBpZiB0aGUgbGFzdCB2YWx1ZVxuLy8gcmVuZGVyZWQgdG8gdGhlIHBhcnQgd2FzIHdpdGggdW5zYWZlSFRNTC4gSWYgbm90LCB3ZSdsbCBhbHdheXMgcmUtcmVuZGVyIHRoZVxuLy8gdmFsdWUgcGFzc2VkIHRvIHVuc2FmZUhUTUwuXG5jb25zdCBwcmV2aW91c1ZhbHVlcyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFJlbmRlcnMgdGhlIHJlc3VsdCBhcyBIVE1MLCByYXRoZXIgdGhhbiB0ZXh0LlxuICpcbiAqIE5vdGUsIHRoaXMgaXMgdW5zYWZlIHRvIHVzZSB3aXRoIGFueSB1c2VyLXByb3ZpZGVkIGlucHV0IHRoYXQgaGFzbid0IGJlZW5cbiAqIHNhbml0aXplZCBvciBlc2NhcGVkLCBhcyBpdCBtYXkgbGVhZCB0byBjcm9zcy1zaXRlLXNjcmlwdGluZ1xuICogdnVsbmVyYWJpbGl0aWVzLlxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlSFRNTCA9IGRpcmVjdGl2ZSgodmFsdWUpID0+IChwYXJ0KSA9PiB7XG4gICAgaWYgKCEocGFydCBpbnN0YW5jZW9mIE5vZGVQYXJ0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc2FmZUhUTUwgY2FuIG9ubHkgYmUgdXNlZCBpbiB0ZXh0IGJpbmRpbmdzJyk7XG4gICAgfVxuICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1ZhbHVlcy5nZXQocGFydCk7XG4gICAgaWYgKHByZXZpb3VzVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBpc1ByaW1pdGl2ZSh2YWx1ZSkgJiZcbiAgICAgICAgdmFsdWUgPT09IHByZXZpb3VzVmFsdWUudmFsdWUgJiYgcGFydC52YWx1ZSA9PT0gcHJldmlvdXNWYWx1ZS5mcmFnbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB2YWx1ZTsgLy8gaW5uZXJIVE1MIGNhc3RzIHRvIHN0cmluZyBpbnRlcm5hbGx5XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIHBhcnQuc2V0VmFsdWUoZnJhZ21lbnQpO1xuICAgIHByZXZpb3VzVmFsdWVzLnNldChwYXJ0LCB7IHZhbHVlLCBmcmFnbWVudCB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5zYWZlLWh0bWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgQXR0cmlidXRlQ29tbWl0dGVyLCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIgfSBmcm9tICcuL3BhcnRzLmpzJztcbi8qKlxuICogQ3JlYXRlcyBQYXJ0cyB3aGVuIGEgdGVtcGxhdGUgaXMgaW5zdGFudGlhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS1wb3NpdGlvbiBiaW5kaW5nLCBnaXZlbiB0aGUgZXZlbnQsIGF0dHJpYnV0ZVxuICAgICAqIG5hbWUsIGFuZCBzdHJpbmcgbGl0ZXJhbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBiaW5kaW5nXG4gICAgICogQHBhcmFtIG5hbWUgIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSBzdHJpbmdzIFRoZSBzdHJpbmcgbGl0ZXJhbHMuIFRoZXJlIGFyZSBhbHdheXMgYXQgbGVhc3QgdHdvIHN0cmluZ3MsXG4gICAgICogICBldmVudCBmb3IgZnVsbHktY29udHJvbGxlZCBiaW5kaW5ncyB3aXRoIGEgc2luZ2xlIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBuYW1lWzBdO1xuICAgICAgICBpZiAocHJlZml4ID09PSAnLicpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1pdHRlciA9IG5ldyBQcm9wZXJ0eUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKTtcbiAgICAgICAgICAgIHJldHVybiBjb21taXR0ZXIucGFydHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJ0AnKSB7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBFdmVudFBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgb3B0aW9ucy5ldmVudENvbnRleHQpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlZml4ID09PSAnPycpIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgQXR0cmlidXRlQ29tbWl0dGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgICAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUZhY3RvcnlcbiAgICAgKi9cbiAgICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9kZVBhcnQob3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciA9IG5ldyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uIHNvIHRoYXQgbGl0LWh0bWwgd2lsbCBjYWxsXG4gKiB0aGUgZnVuY3Rpb24gZHVyaW5nIHRlbXBsYXRlIHJlbmRlcmluZywgcmF0aGVyIHRoYW4gcGFzc2luZyBhcyBhIHZhbHVlLlxuICpcbiAqIEEgX2RpcmVjdGl2ZV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgUGFydCBhcyBhbiBhcmd1bWVudC4gSXQgaGFzIHRoZVxuICogc2lnbmF0dXJlOiBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLlxuICpcbiAqIEEgZGlyZWN0aXZlIF9mYWN0b3J5XyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYXJndW1lbnRzIGZvciBkYXRhIGFuZFxuICogY29uZmlndXJhdGlvbiBhbmQgcmV0dXJucyBhIGRpcmVjdGl2ZS4gVXNlcnMgb2YgZGlyZWN0aXZlIHVzdWFsbHkgcmVmZXIgdG9cbiAqIHRoZSBkaXJlY3RpdmUgZmFjdG9yeSBhcyB0aGUgZGlyZWN0aXZlLiBGb3IgZXhhbXBsZSwgXCJUaGUgcmVwZWF0IGRpcmVjdGl2ZVwiLlxuICpcbiAqIFVzdWFsbHkgYSB0ZW1wbGF0ZSBhdXRob3Igd2lsbCBpbnZva2UgYSBkaXJlY3RpdmUgZmFjdG9yeSBpbiB0aGVpciB0ZW1wbGF0ZVxuICogd2l0aCByZWxldmFudCBhcmd1bWVudHMsIHdoaWNoIHdpbGwgdGhlbiByZXR1cm4gYSBkaXJlY3RpdmUgZnVuY3Rpb24uXG4gKlxuICogSGVyZSdzIGFuIGV4YW1wbGUgb2YgdXNpbmcgdGhlIGByZXBlYXQoKWAgZGlyZWN0aXZlIGZhY3RvcnkgdGhhdCB0YWtlcyBhblxuICogYXJyYXkgYW5kIGEgZnVuY3Rpb24gdG8gcmVuZGVyIGFuIGl0ZW06XG4gKlxuICogYGBganNcbiAqIGh0bWxgPHVsPjwke3JlcGVhdChpdGVtcywgKGl0ZW0pID0+IGh0bWxgPGxpPiR7aXRlbX08L2xpPmApfTwvdWw+YFxuICogYGBgXG4gKlxuICogV2hlbiBgcmVwZWF0YCBpcyBpbnZva2VkLCBpdCByZXR1cm5zIGEgZGlyZWN0aXZlIGZ1bmN0aW9uIHRoYXQgY2xvc2VzIG92ZXJcbiAqIGBpdGVtc2AgYW5kIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi4gV2hlbiB0aGUgb3V0ZXIgdGVtcGxhdGUgaXMgcmVuZGVyZWQsIHRoZVxuICogcmV0dXJuIGRpcmVjdGl2ZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgUGFydCBmb3IgdGhlIGV4cHJlc3Npb24uXG4gKiBgcmVwZWF0YCB0aGVuIHBlcmZvcm1zIGl0J3MgY3VzdG9tIGxvZ2ljIHRvIHJlbmRlciBtdWx0aXBsZSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IHtkaXJlY3RpdmUsIGh0bWx9IGZyb20gJ2xpdC1odG1sJztcbiAqXG4gKiBjb25zdCBpbW11dGFibGUgPSBkaXJlY3RpdmUoKHYpID0+IChwYXJ0KSA9PiB7XG4gKiAgIGlmIChwYXJ0LnZhbHVlICE9PSB2KSB7XG4gKiAgICAgcGFydC5zZXRWYWx1ZSh2KVxuICogICB9XG4gKiB9KTtcbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IChmKSA9PiAoKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBkID0gZiguLi5hcmdzKTtcbiAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICByZXR1cm4gZDtcbn0pO1xuZXhwb3J0IGNvbnN0IGlzRGlyZWN0aXZlID0gKG8pID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbicgJiYgZGlyZWN0aXZlcy5oYXMobyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogVHJ1ZSBpZiB0aGUgY3VzdG9tIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ0VQb2x5ZmlsbCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2sgIT09XG4gICAgICAgIHVuZGVmaW5lZDtcbi8qKlxuICogUmVwYXJlbnRzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydGAgKGluY2x1c2l2ZSkgdG8gYGVuZGAgKGV4Y2x1c2l2ZSksXG4gKiBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmUgYGJlZm9yZWAuIElmXG4gKiBgYmVmb3JlYCBpcyBudWxsLCBpdCBhcHBlbmRzIHRoZSBub2RlcyB0byB0aGUgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9IChjb250YWluZXIsIHN0YXJ0LCBlbmQgPSBudWxsLCBiZWZvcmUgPSBudWxsKSA9PiB7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBiZWZvcmUpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgfVxufTtcbi8qKlxuICogUmVtb3ZlcyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLCBmcm9tXG4gKiBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID0gKGNvbnRhaW5lciwgc3RhcnQsIGVuZCA9IG51bGwpID0+IHtcbiAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzdGFydCk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBzaGFkeS1yZW5kZXJcbiAqL1xuaW1wb3J0IHsgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmNvbnN0IHdhbGtlck5vZGVGaWx0ZXIgPSAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi87XG4vKipcbiAqIFJlbW92ZXMgdGhlIGxpc3Qgb2Ygbm9kZXMgZnJvbSBhIFRlbXBsYXRlIHNhZmVseS4gSW4gYWRkaXRpb24gdG8gcmVtb3ZpbmdcbiAqIG5vZGVzIGZyb20gdGhlIFRlbXBsYXRlLCB0aGUgVGVtcGxhdGUgcGFydCBpbmRpY2VzIGFyZSB1cGRhdGVkIHRvIG1hdGNoXG4gKiB0aGUgbXV0YXRlZCBUZW1wbGF0ZSBET00uXG4gKlxuICogQXMgdGhlIHRlbXBsYXRlIGlzIHdhbGtlZCB0aGUgcmVtb3ZhbCBzdGF0ZSBpcyB0cmFja2VkIGFuZFxuICogcGFydCBpbmRpY2VzIGFyZSBhZGp1c3RlZCBhcyBuZWVkZWQuXG4gKlxuICogZGl2XG4gKiAgIGRpdiMxIChyZW1vdmUpIDwtLSBzdGFydCByZW1vdmluZyAocmVtb3Zpbmcgbm9kZSBpcyBkaXYjMSlcbiAqICAgICBkaXZcbiAqICAgICAgIGRpdiMyIChyZW1vdmUpICA8LS0gY29udGludWUgcmVtb3ZpbmcgKHJlbW92aW5nIG5vZGUgaXMgc3RpbGwgZGl2IzEpXG4gKiAgICAgICAgIGRpdlxuICogZGl2IDwtLSBzdG9wIHJlbW92aW5nIHNpbmNlIHByZXZpb3VzIHNpYmxpbmcgaXMgdGhlIHJlbW92aW5nIG5vZGUgKGRpdiMxLFxuICogcmVtb3ZlZCA0IG5vZGVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUodGVtcGxhdGUsIG5vZGVzVG9SZW1vdmUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9LCBwYXJ0cyB9ID0gdGVtcGxhdGU7XG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gICAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gICAgbGV0IHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgIGxldCBub2RlSW5kZXggPSAtMTtcbiAgICBsZXQgcmVtb3ZlQ291bnQgPSAwO1xuICAgIGNvbnN0IG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlID0gW107XG4gICAgbGV0IGN1cnJlbnRSZW1vdmluZ05vZGUgPSBudWxsO1xuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgLy8gRW5kIHJlbW92YWwgaWYgc3RlcHBlZCBwYXN0IHRoZSByZW1vdmluZyBub2RlXG4gICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gY3VycmVudFJlbW92aW5nTm9kZSkge1xuICAgICAgICAgICAgY3VycmVudFJlbW92aW5nTm9kZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQSBub2RlIHRvIHJlbW92ZSB3YXMgZm91bmQgaW4gdGhlIHRlbXBsYXRlXG4gICAgICAgIGlmIChub2Rlc1RvUmVtb3ZlLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgbm9kZXNUb1JlbW92ZUluVGVtcGxhdGUucHVzaChub2RlKTtcbiAgICAgICAgICAgIC8vIFRyYWNrIG5vZGUgd2UncmUgcmVtb3ZpbmdcbiAgICAgICAgICAgIGlmIChjdXJyZW50UmVtb3ZpbmdOb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFJlbW92aW5nTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiByZW1vdmluZywgaW5jcmVtZW50IGNvdW50IGJ5IHdoaWNoIHRvIGFkanVzdCBzdWJzZXF1ZW50IHBhcnQgaW5kaWNlc1xuICAgICAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocGFydCAhPT0gdW5kZWZpbmVkICYmIHBhcnQuaW5kZXggPT09IG5vZGVJbmRleCkge1xuICAgICAgICAgICAgLy8gSWYgcGFydCBpcyBpbiBhIHJlbW92ZWQgbm9kZSBkZWFjdGl2YXRlIGl0IGJ5IHNldHRpbmcgaW5kZXggdG8gLTEgb3JcbiAgICAgICAgICAgIC8vIGFkanVzdCB0aGUgaW5kZXggYXMgbmVlZGVkLlxuICAgICAgICAgICAgcGFydC5pbmRleCA9IGN1cnJlbnRSZW1vdmluZ05vZGUgIT09IG51bGwgPyAtMSA6IHBhcnQuaW5kZXggLSByZW1vdmVDb3VudDtcbiAgICAgICAgICAgIC8vIGdvIHRvIHRoZSBuZXh0IGFjdGl2ZSBwYXJ0LlxuICAgICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm9kZXNUb1JlbW92ZUluVGVtcGxhdGUuZm9yRWFjaCgobikgPT4gbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pKTtcbn1cbmNvbnN0IGNvdW50Tm9kZXMgPSAobm9kZSkgPT4ge1xuICAgIGxldCBjb3VudCA9IChub2RlLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8pID8gMCA6IDE7XG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbn07XG5jb25zdCBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMgPSAocGFydHMsIHN0YXJ0SW5kZXggPSAtMSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4ICsgMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgaWYgKGlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xuLyoqXG4gKiBJbnNlcnRzIHRoZSBnaXZlbiBub2RlIGludG8gdGhlIFRlbXBsYXRlLCBvcHRpb25hbGx5IGJlZm9yZSB0aGUgZ2l2ZW5cbiAqIHJlZk5vZGUuIEluIGFkZGl0aW9uIHRvIGluc2VydGluZyB0aGUgbm9kZSBpbnRvIHRoZSBUZW1wbGF0ZSwgdGhlIFRlbXBsYXRlXG4gKiBwYXJ0IGluZGljZXMgYXJlIHVwZGF0ZWQgdG8gbWF0Y2ggdGhlIG11dGF0ZWQgVGVtcGxhdGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Tm9kZUludG9UZW1wbGF0ZSh0ZW1wbGF0ZSwgbm9kZSwgcmVmTm9kZSA9IG51bGwpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9LCBwYXJ0cyB9ID0gdGVtcGxhdGU7XG4gICAgLy8gSWYgdGhlcmUncyBubyByZWZOb2RlLCB0aGVuIHB1dCBub2RlIGF0IGVuZCBvZiB0ZW1wbGF0ZS5cbiAgICAvLyBObyBwYXJ0IGluZGljZXMgbmVlZCB0byBiZSBzaGlmdGVkIGluIHRoaXMgY2FzZS5cbiAgICBpZiAocmVmTm9kZSA9PT0gbnVsbCB8fCByZWZOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGNvbnRlbnQsIHdhbGtlck5vZGVGaWx0ZXIsIG51bGwsIGZhbHNlKTtcbiAgICBsZXQgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzKTtcbiAgICBsZXQgaW5zZXJ0Q291bnQgPSAwO1xuICAgIGxldCB3YWxrZXJJbmRleCA9IC0xO1xuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICB3YWxrZXJJbmRleCsrO1xuICAgICAgICBjb25zdCB3YWxrZXJOb2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlO1xuICAgICAgICBpZiAod2Fsa2VyTm9kZSA9PT0gcmVmTm9kZSkge1xuICAgICAgICAgICAgaW5zZXJ0Q291bnQgPSBjb3VudE5vZGVzKG5vZGUpO1xuICAgICAgICAgICAgcmVmTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCByZWZOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocGFydEluZGV4ICE9PSAtMSAmJiBwYXJ0c1twYXJ0SW5kZXhdLmluZGV4ID09PSB3YWxrZXJJbmRleCkge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgaW5zZXJ0ZWQgdGhlIG5vZGUsIHNpbXBseSBhZGp1c3QgYWxsIHN1YnNlcXVlbnQgcGFydHNcbiAgICAgICAgICAgIGlmIChpbnNlcnRDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAocGFydEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0c1twYXJ0SW5kZXhdLmluZGV4ICs9IGluc2VydENvdW50O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMsIHBhcnRJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZGlmeS10ZW1wbGF0ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIHRoYXQgYSB2YWx1ZSB3YXMgaGFuZGxlZCBieSBhIGRpcmVjdGl2ZSBhbmRcbiAqIHNob3VsZCBub3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuICovXG5leHBvcnQgY29uc3Qgbm9DaGFuZ2UgPSB7fTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBOb2RlUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cbmltcG9ydCB7IGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBub0NoYW5nZSwgbm90aGluZyB9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcbmltcG9ydCB7IGNyZWF0ZU1hcmtlciB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuICh2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSk7XG59O1xuZXhwb3J0IGNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAhISh2YWx1ZSAmJiB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTtcbn07XG4vKipcbiAqIFdyaXRlcyBhdHRyaWJ1dGUgdmFsdWVzIHRvIHRoZSBET00gZm9yIGEgZ3JvdXAgb2YgQXR0cmlidXRlUGFydHMgYm91bmQgdG8gYVxuICogc2luZ2xlIGF0dGlidXRlLiBUaGUgdmFsdWUgaXMgb25seSBzZXQgb25jZSBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0c1xuICogZm9yIGFuIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRzW2ldID0gdGhpcy5fY3JlYXRlUGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzaW5nbGUgcGFydC4gT3ZlcnJpZGUgdGhpcyB0byBjcmVhdGUgYSBkaWZmZXJudCB0eXBlIG9mIHBhcnQuXG4gICAgICovXG4gICAgX2NyZWF0ZVBhcnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXR0cmlidXRlUGFydCh0aGlzKTtcbiAgICB9XG4gICAgX2dldFZhbHVlKCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICBjb25zdCBsID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgdGV4dCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGV4dCArPSBzdHJpbmdzW2ldO1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucGFydHNbaV07XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IHBhcnQudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHYpIHx8ICFpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gdiA6IFN0cmluZyh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IHQgOiBTdHJpbmcodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGV4dCArPSBzdHJpbmdzW2xdO1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIHRoaXMuX2dldFZhbHVlKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhbGwgb3IgcGFydCBvZiBhbiBhdHRyaWJ1dGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb21taXR0ZXIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jb21taXR0ZXIgPSBjb21taXR0ZXI7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UgJiYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdmFsdWUgIT09IHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBub3QgYSBkaXJlY3RpdmUsIGRpcnR5IHRoZSBjb21taXR0ZXIgc28gdGhhdCBpdCdsbFxuICAgICAgICAgICAgLy8gY2FsbCBzZXRBdHRyaWJ1dGUuIElmIHRoZSB2YWx1ZSBpcyBhIGRpcmVjdGl2ZSwgaXQnbGwgZGlydHkgdGhlXG4gICAgICAgICAgICAvLyBjb21taXR0ZXIgaWYgaXQgY2FsbHMgc2V0VmFsdWUoKS5cbiAgICAgICAgICAgIGlmICghaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21taXR0ZXIuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tbWl0dGVyLmNvbW1pdCgpO1xuICAgIH1cbn1cbi8qKlxuICogQSBQYXJ0IHRoYXQgY29udHJvbHMgYSBsb2NhdGlvbiB3aXRoaW4gYSBOb2RlIHRyZWUuIExpa2UgYSBSYW5nZSwgTm9kZVBhcnRcbiAqIGhhcyBzdGFydCBhbmQgZW5kIGxvY2F0aW9ucyBhbmQgY2FuIHNldCBhbmQgdXBkYXRlIHRoZSBOb2RlcyBiZXR3ZWVuIHRob3NlXG4gKiBsb2NhdGlvbnMuXG4gKlxuICogTm9kZVBhcnRzIHN1cHBvcnQgc2V2ZXJhbCB2YWx1ZSB0eXBlczogcHJpbWl0aXZlcywgTm9kZXMsIFRlbXBsYXRlUmVzdWx0cyxcbiAqIGFzIHdlbGwgYXMgYXJyYXlzIGFuZCBpdGVyYWJsZXMgb2YgdGhvc2UgdHlwZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlUGFydCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoaXMgcGFydCBpbnRvIGEgY29udGFpbmVyLlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgYXBwZW5kSW50byhjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoaXMgcGFydCBhZnRlciB0aGUgYHJlZmAgbm9kZSAoYmV0d2VlbiBgcmVmYCBhbmQgYHJlZmAncyBuZXh0XG4gICAgICogc2libGluZykuIEJvdGggYHJlZmAgYW5kIGl0cyBuZXh0IHNpYmxpbmcgbXVzdCBiZSBzdGF0aWMsIHVuY2hhbmdpbmcgbm9kZXNcbiAgICAgKiBzdWNoIGFzIHRob3NlIHRoYXQgYXBwZWFyIGluIGEgbGl0ZXJhbCBzZWN0aW9uIG9mIGEgdGVtcGxhdGUuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBpbnNlcnRBZnRlck5vZGUocmVmKSB7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gcmVmO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSByZWYubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBwYXJlbnQgcGFydC5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGFwcGVuZEludG9QYXJ0KHBhcnQpIHtcbiAgICAgICAgcGFydC5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgcGFydC5fX2luc2VydCh0aGlzLmVuZE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhpcyBwYXJ0IGFmdGVyIHRoZSBgcmVmYCBwYXJ0LlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgaW5zZXJ0QWZ0ZXJQYXJ0KHJlZikge1xuICAgICAgICByZWYuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5lbmROb2RlO1xuICAgICAgICByZWYuZW5kTm9kZSA9IHRoaXMuc3RhcnROb2RlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbm90aGluZztcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX19pbnNlcnQobm9kZSkge1xuICAgICAgICB0aGlzLmVuZE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgICB9XG4gICAgX19jb21taXROb2RlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fX2luc2VydCh2YWx1ZSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX19jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgICAgLy8gSWYgYHZhbHVlYCBpc24ndCBhbHJlYWR5IGEgc3RyaW5nLCB3ZSBleHBsaWNpdGx5IGNvbnZlcnQgaXQgaGVyZSBpbiBjYXNlXG4gICAgICAgIC8vIGl0IGNhbid0IGJlIGltcGxpY2l0bHkgY29udmVydGVkIC0gaS5lLiBpdCdzIGEgc3ltYm9sLlxuICAgICAgICBjb25zdCB2YWx1ZUFzU3RyaW5nID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSB0ZXh0IG5vZGUgYmV0d2VlbiB0aGUgbWFya2Vycywgd2UgY2FuIGp1c3RcbiAgICAgICAgICAgIC8vIHNldCBpdHMgdmFsdWUsIHJhdGhlciB0aGFuIHJlcGxhY2luZyBpdC5cbiAgICAgICAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IENhbiB3ZSBqdXN0IGNoZWNrIGlmIHRoaXMudmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gdmFsdWVBc1N0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXROb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlQXNTdHJpbmcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGVGYWN0b3J5KHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlICYmXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnRlbXBsYXRlID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBwcm9wYWdhdGUgdGhlIHRlbXBsYXRlIHByb2Nlc3NvciBmcm9tIHRoZSBUZW1wbGF0ZVJlc3VsdFxuICAgICAgICAgICAgLy8gc28gdGhhdCB3ZSB1c2UgaXRzIHN5bnRheCBleHRlbnNpb24sIGV0Yy4gVGhlIHRlbXBsYXRlIGZhY3RvcnkgY29tZXNcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIHJlbmRlciBmdW5jdGlvbiBvcHRpb25zIHNvIHRoYXQgaXQgY2FuIGNvbnRyb2wgdGVtcGxhdGVcbiAgICAgICAgICAgIC8vIGNhY2hpbmcgYW5kIHByZXByb2Nlc3NpbmcuXG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB2YWx1ZS5wcm9jZXNzb3IsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICAgICAgICAgICAgaW5zdGFuY2UudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX19jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiBfdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIF92YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIF92YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAgICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgICAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJQYXJ0KGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICAgICAgdGhpcy5jbGVhcihpdGVtUGFydCAmJiBpdGVtUGFydC5lbmROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcihzdGFydE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSkge1xuICAgICAgICByZW1vdmVOb2Rlcyh0aGlzLnN0YXJ0Tm9kZS5wYXJlbnROb2RlLCBzdGFydE5vZGUubmV4dFNpYmxpbmcsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxufVxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoc3RyaW5ncy5sZW5ndGggIT09IDIgfHwgc3RyaW5nc1swXSAhPT0gJycgfHwgc3RyaW5nc1sxXSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQm9vbGVhbiBhdHRyaWJ1dGVzIGNhbiBvbmx5IGNvbnRhaW4gYSBzaW5nbGUgZXhwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX19wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSAhIXRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgICAgICB0aGlzLnNpbmdsZSA9XG4gICAgICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICAgIH1cbiAgICBfY3JlYXRlUGFydCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2luZ2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0c1swXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuX2dldFZhbHVlKCk7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbn1cbi8vIERldGVjdCBldmVudCBsaXN0ZW5lciBvcHRpb25zIHN1cHBvcnQuIElmIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkgaXMgcmVhZFxuLy8gZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QsIHRoZW4gb3B0aW9ucyBhcmUgc3VwcG9ydGVkLiBJZiBub3QsIHRoZW4gdGhlIHRocmlkXG4vLyBhcmd1bWVudCB0byBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciBpcyBpbnRlcnByZXRlZCBhcyB0aGUgYm9vbGVhbiBjYXB0dXJlXG4vLyB2YWx1ZSBzbyB3ZSBzaG91bGQgb25seSBwYXNzIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkuXG5sZXQgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG50cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGdldCBjYXB0dXJlKCkge1xuICAgICAgICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG59XG5jYXRjaCAoX2UpIHtcbn1cbmV4cG9ydCBjbGFzcyBFdmVudFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGV2ZW50TmFtZSwgZXZlbnRDb250ZXh0KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICB0aGlzLmV2ZW50Q29udGV4dCA9IGV2ZW50Q29udGV4dDtcbiAgICAgICAgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQgPSAoZSkgPT4gdGhpcy5oYW5kbGVFdmVudChlKTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciA9PSBudWxsIHx8XG4gICAgICAgICAgICBvbGRMaXN0ZW5lciAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgKG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09IG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT0gb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PSBvbGRMaXN0ZW5lci5wYXNzaXZlKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciAhPSBudWxsICYmIChvbGRMaXN0ZW5lciA9PSBudWxsIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcbiAgICAgICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX19vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX19vcHRpb25zID0gZ2V0T3B0aW9ucyhuZXdMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX19vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3TGlzdGVuZXI7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLmNhbGwodGhpcy5ldmVudENvbnRleHQgfHwgdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIFdlIGNvcHkgb3B0aW9ucyBiZWNhdXNlIG9mIHRoZSBpbmNvbnNpc3RlbnQgYmVoYXZpb3Igb2YgYnJvd3NlcnMgd2hlbiByZWFkaW5nXG4vLyB0aGUgdGhpcmQgYXJndW1lbnQgb2YgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIuIElFMTEgZG9lc24ndCBzdXBwb3J0IG9wdGlvbnNcbi8vIGF0IGFsbC4gQ2hyb21lIDQxIG9ubHkgcmVhZHMgYGNhcHR1cmVgIGlmIHRoZSBhcmd1bWVudCBpcyBhbiBvYmplY3QuXG5jb25zdCBnZXRPcHRpb25zID0gKG8pID0+IG8gJiZcbiAgICAoZXZlbnRPcHRpb25zU3VwcG9ydGVkID9cbiAgICAgICAgeyBjYXB0dXJlOiBvLmNhcHR1cmUsIHBhc3NpdmU6IG8ucGFzc2l2ZSwgb25jZTogby5vbmNlIH0gOlxuICAgICAgICBvLmNhcHR1cmUpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFydHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cbmltcG9ydCB7IHJlbW92ZU5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgTm9kZVBhcnQgfSBmcm9tICcuL3BhcnRzLmpzJztcbmltcG9ydCB7IHRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5leHBvcnQgY29uc3QgcGFydHMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBSZW5kZXJzIGEgdGVtcGxhdGUgcmVzdWx0IG9yIG90aGVyIHZhbHVlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKlxuICogQHBhcmFtIHJlc3VsdCBBbnkgdmFsdWUgcmVuZGVyYWJsZSBieSBOb2RlUGFydCAtIHR5cGljYWxseSBhIFRlbXBsYXRlUmVzdWx0XG4gKiAgICAgY3JlYXRlZCBieSBldmFsdWF0aW5nIGEgdGVtcGxhdGUgdGFnIGxpa2UgYGh0bWxgIG9yIGBzdmdgLlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBwYXJlbnQgdG8gcmVuZGVyIHRvLiBUaGUgZW50aXJlIGNvbnRlbnRzIGFyZSBlaXRoZXJcbiAqICAgICByZXBsYWNlZCwgb3IgZWZmaWNpZW50bHkgdXBkYXRlZCBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXMgcHJldmlvdXNcbiAqICAgICByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFJlbmRlck9wdGlvbnMgZm9yIHRoZSBlbnRpcmUgcmVuZGVyIHRyZWUgcmVuZGVyZWQgdG8gdGhpc1xuICogICAgIGNvbnRhaW5lci4gUmVuZGVyIG9wdGlvbnMgbXVzdCAqbm90KiBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzIHRvIHRoZSBzYW1lXG4gKiAgICAgY29udGFpbmVyLCBhcyB0aG9zZSBjaGFuZ2VzIHdpbGwgbm90IGVmZmVjdCBwcmV2aW91c2x5IHJlbmRlcmVkIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChyZXN1bHQsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgcGFydHMuc2V0KGNvbnRhaW5lciwgcGFydCA9IG5ldyBOb2RlUGFydChPYmplY3QuYXNzaWduKHsgdGVtcGxhdGVGYWN0b3J5IH0sIG9wdGlvbnMpKSk7XG4gICAgICAgIHBhcnQuYXBwZW5kSW50byhjb250YWluZXIpO1xuICAgIH1cbiAgICBwYXJ0LnNldFZhbHVlKHJlc3VsdCk7XG4gICAgcGFydC5jb21taXQoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBNb2R1bGUgdG8gYWRkIHNoYWR5IERPTS9zaGFkeSBDU1MgcG9seWZpbGwgc3VwcG9ydCB0byBsaXQtaHRtbCB0ZW1wbGF0ZVxuICogcmVuZGVyaW5nLiBTZWUgdGhlIFtbcmVuZGVyXV0gbWV0aG9kIGZvciBkZXRhaWxzLlxuICpcbiAqIEBtb2R1bGUgc2hhZHktcmVuZGVyXG4gKiBAcHJlZmVycmVkXG4gKi9cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7IHJlbW92ZU5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaW5zZXJ0Tm9kZUludG9UZW1wbGF0ZSwgcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUgfSBmcm9tICcuL21vZGlmeS10ZW1wbGF0ZS5qcyc7XG5pbXBvcnQgeyBwYXJ0cywgcmVuZGVyIGFzIGxpdFJlbmRlciB9IGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCB7IHRlbXBsYXRlQ2FjaGVzIH0gZnJvbSAnLi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmltcG9ydCB7IFRlbXBsYXRlSW5zdGFuY2UgfSBmcm9tICcuL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmltcG9ydCB7IG1hcmtlciwgVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmV4cG9ydCB7IGh0bWwsIHN2ZywgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG4vLyBHZXQgYSBrZXkgdG8gbG9va3VwIGluIGB0ZW1wbGF0ZUNhY2hlc2AuXG5jb25zdCBnZXRUZW1wbGF0ZUNhY2hlS2V5ID0gKHR5cGUsIHNjb3BlTmFtZSkgPT4gYCR7dHlwZX0tLSR7c2NvcGVOYW1lfWA7XG5sZXQgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiA9IHRydWU7XG5pZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uID0gZmFsc2U7XG59XG5lbHNlIGlmICh0eXBlb2Ygd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLndhcm4oYEluY29tcGF0aWJsZSBTaGFkeUNTUyB2ZXJzaW9uIGRldGVjdGVkLiBgICtcbiAgICAgICAgYFBsZWFzZSB1cGRhdGUgdG8gYXQgbGVhc3QgQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzQDIuMC4yIGFuZCBgICtcbiAgICAgICAgYEB3ZWJjb21wb25lbnRzL3NoYWR5Y3NzQDEuMy4xLmApO1xuICAgIGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSBmYWxzZTtcbn1cbi8qKlxuICogVGVtcGxhdGUgZmFjdG9yeSB3aGljaCBzY29wZXMgdGVtcGxhdGUgRE9NIHVzaW5nIFNoYWR5Q1NTLlxuICogQHBhcmFtIHNjb3BlTmFtZSB7c3RyaW5nfVxuICovXG5jb25zdCBzaGFkeVRlbXBsYXRlRmFjdG9yeSA9IChzY29wZU5hbWUpID0+IChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBjYWNoZUtleSA9IGdldFRlbXBsYXRlQ2FjaGVLZXkocmVzdWx0LnR5cGUsIHNjb3BlTmFtZSk7XG4gICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoY2FjaGVLZXkpO1xuICAgIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGVDYWNoZSA9IHtcbiAgICAgICAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXAoKSxcbiAgICAgICAgICAgIGtleVN0cmluZzogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChjYWNoZUtleSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5nZXQoa2V5KTtcbiAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBpZiAoY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbikge1xuICAgICAgICAgICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbShlbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgZWxlbWVudCk7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufTtcbmNvbnN0IFRFTVBMQVRFX1RZUEVTID0gWydodG1sJywgJ3N2ZyddO1xuLyoqXG4gKiBSZW1vdmVzIGFsbCBzdHlsZSBlbGVtZW50cyBmcm9tIFRlbXBsYXRlcyBmb3IgdGhlIGdpdmVuIHNjb3BlTmFtZS5cbiAqL1xuY29uc3QgcmVtb3ZlU3R5bGVzRnJvbUxpdFRlbXBsYXRlcyA9IChzY29wZU5hbWUpID0+IHtcbiAgICBURU1QTEFURV9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRlbXBsYXRlQ2FjaGVzLmdldChnZXRUZW1wbGF0ZUNhY2hlS2V5KHR5cGUsIHNjb3BlTmFtZSkpO1xuICAgICAgICBpZiAodGVtcGxhdGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlcy5rZXlTdHJpbmcuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9IH0gPSB0ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHBhcmFtIFNldCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKSkuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXMuYWRkKHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBzdHlsZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCBzaGFkeVJlbmRlclNldCA9IG5ldyBTZXQoKTtcbi8qKlxuICogRm9yIHRoZSBnaXZlbiBzY29wZSBuYW1lLCBlbnN1cmVzIHRoYXQgU2hhZHlDU1Mgc3R5bGUgc2NvcGluZyBpcyBwZXJmb3JtZWQuXG4gKiBUaGlzIGlzIGRvbmUganVzdCBvbmNlIHBlciBzY29wZSBuYW1lIHNvIHRoZSBmcmFnbWVudCBhbmQgdGVtcGxhdGUgY2Fubm90XG4gKiBiZSBtb2RpZmllZC5cbiAqICgxKSBleHRyYWN0cyBzdHlsZXMgZnJvbSB0aGUgcmVuZGVyZWQgZnJhZ21lbnQgYW5kIGhhbmRzIHRoZW0gdG8gU2hhZHlDU1NcbiAqIHRvIGJlIHNjb3BlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50XG4gKiAoMikgcmVtb3ZlcyBzdHlsZSBlbGVtZW50cyBmcm9tIGFsbCBsaXQtaHRtbCBUZW1wbGF0ZXMgZm9yIHRoaXMgc2NvcGUgbmFtZS5cbiAqXG4gKiBOb3RlLCA8c3R5bGU+IGVsZW1lbnRzIGNhbiBvbmx5IGJlIHBsYWNlZCBpbnRvIHRlbXBsYXRlcyBmb3IgdGhlXG4gKiBpbml0aWFsIHJlbmRlcmluZyBvZiB0aGUgc2NvcGUuIElmIDxzdHlsZT4gZWxlbWVudHMgYXJlIGluY2x1ZGVkIGluIHRlbXBsYXRlc1xuICogZHluYW1pY2FsbHkgcmVuZGVyZWQgdG8gdGhlIHNjb3BlIChhZnRlciB0aGUgZmlyc3Qgc2NvcGUgcmVuZGVyKSwgdGhleSB3aWxsXG4gKiBub3QgYmUgc2NvcGVkIGFuZCB0aGUgPHN0eWxlPiB3aWxsIGJlIGxlZnQgaW4gdGhlIHRlbXBsYXRlIGFuZCByZW5kZXJlZFxuICogb3V0cHV0LlxuICovXG5jb25zdCBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgPSAoc2NvcGVOYW1lLCByZW5kZXJlZERPTSwgdGVtcGxhdGUpID0+IHtcbiAgICBzaGFkeVJlbmRlclNldC5hZGQoc2NvcGVOYW1lKTtcbiAgICAvLyBJZiBgcmVuZGVyZWRET01gIGlzIHN0YW1wZWQgZnJvbSBhIFRlbXBsYXRlLCB0aGVuIHdlIG5lZWQgdG8gZWRpdCB0aGF0XG4gICAgLy8gVGVtcGxhdGUncyB1bmRlcmx5aW5nIHRlbXBsYXRlIGVsZW1lbnQuIE90aGVyd2lzZSwgd2UgY3JlYXRlIG9uZSBoZXJlXG4gICAgLy8gdG8gZ2l2ZSB0byBTaGFkeUNTUywgd2hpY2ggc3RpbGwgcmVxdWlyZXMgb25lIHdoaWxlIHNjb3BpbmcuXG4gICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gISF0ZW1wbGF0ZSA/IHRlbXBsYXRlLmVsZW1lbnQgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIC8vIE1vdmUgc3R5bGVzIG91dCBvZiByZW5kZXJlZCBET00gYW5kIHN0b3JlLlxuICAgIGNvbnN0IHN0eWxlcyA9IHJlbmRlcmVkRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHN0eWxlcztcbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gc3R5bGVzLCBza2lwIHVubmVjZXNzYXJ5IHdvcmtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEVuc3VyZSBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgaXMgY2FsbGVkIHRvIHN1cHBvcnQgYWRkaW5nXG4gICAgICAgIC8vIHN0eWxlcyB2aWEgYHByZXBhcmVBZG9wdGVkQ3NzVGV4dGAgc2luY2UgdGhhdCByZXF1aXJlcyB0aGF0XG4gICAgICAgIC8vIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgIGlzIGNhbGxlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2hhZHlDU1Mgd2lsbCBvbmx5IHVwZGF0ZSBzdHlsZXMgY29udGFpbmluZyBAYXBwbHkgaW4gdGhlIHRlbXBsYXRlXG4gICAgICAgIC8vIGdpdmVuIHRvIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgLiBJZiBubyBsaXQgVGVtcGxhdGUgd2FzIGdpdmVuLFxuICAgICAgICAvLyBTaGFkeUNTUyB3aWxsIG5vdCBiZSBhYmxlIHRvIHVwZGF0ZSB1c2VzIG9mIEBhcHBseSBpbiBhbnkgcmVsZXZhbnRcbiAgICAgICAgLy8gdGVtcGxhdGUuIEhvd2V2ZXIsIHRoaXMgaXMgbm90IGEgcHJvYmxlbSBiZWNhdXNlIHdlIG9ubHkgY3JlYXRlIHRoZVxuICAgICAgICAvLyB0ZW1wbGF0ZSBmb3IgdGhlIHB1cnBvc2Ugb2Ygc3VwcG9ydGluZyBgcHJlcGFyZUFkb3B0ZWRDc3NUZXh0YCxcbiAgICAgICAgLy8gd2hpY2ggZG9lc24ndCBzdXBwb3J0IEBhcHBseSBhdCBhbGwuXG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGVTdHlsZXModGVtcGxhdGVFbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbmRlbnNlZFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAvLyBDb2xsZWN0IHN0eWxlcyBpbnRvIGEgc2luZ2xlIHN0eWxlLiBUaGlzIGhlbHBzIHVzIG1ha2Ugc3VyZSBTaGFkeUNTU1xuICAgIC8vIG1hbmlwdWxhdGlvbnMgd2lsbCBub3QgcHJldmVudCB1cyBmcm9tIGJlaW5nIGFibGUgdG8gZml4IHVwIHRlbXBsYXRlXG4gICAgLy8gcGFydCBpbmRpY2VzLlxuICAgIC8vIE5PVEU6IGNvbGxlY3Rpbmcgc3R5bGVzIGlzIGluZWZmaWNpZW50IGZvciBicm93c2VycyBidXQgU2hhZHlDU1NcbiAgICAvLyBjdXJyZW50bHkgZG9lcyB0aGlzIGFueXdheS4gV2hlbiBpdCBkb2VzIG5vdCwgdGhpcyBzaG91bGQgYmUgY2hhbmdlZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzW2ldO1xuICAgICAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbiAgICAgICAgY29uZGVuc2VkU3R5bGUudGV4dENvbnRlbnQgKz0gc3R5bGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIC8vIFJlbW92ZSBzdHlsZXMgZnJvbSBuZXN0ZWQgdGVtcGxhdGVzIGluIHRoaXMgc2NvcGUuXG4gICAgcmVtb3ZlU3R5bGVzRnJvbUxpdFRlbXBsYXRlcyhzY29wZU5hbWUpO1xuICAgIC8vIEFuZCB0aGVuIHB1dCB0aGUgY29uZGVuc2VkIHN0eWxlIGludG8gdGhlIFwicm9vdFwiIHRlbXBsYXRlIHBhc3NlZCBpbiBhc1xuICAgIC8vIGB0ZW1wbGF0ZWAuXG4gICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlRWxlbWVudC5jb250ZW50O1xuICAgIGlmICghIXRlbXBsYXRlKSB7XG4gICAgICAgIGluc2VydE5vZGVJbnRvVGVtcGxhdGUodGVtcGxhdGUsIGNvbmRlbnNlZFN0eWxlLCBjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUoY29uZGVuc2VkU3R5bGUsIGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgU2hhZHlDU1MgZ2V0cyB0aGUgdGVtcGxhdGUgdGhhdCBgbGl0LWh0bWxgXG4gICAgLy8gd2lsbCBhY3R1YWxseSByZW5kZXIgc28gdGhhdCBpdCBjYW4gdXBkYXRlIHRoZSBzdHlsZSBpbnNpZGUgd2hlblxuICAgIC8vIG5lZWRlZCAoZS5nLiBAYXBwbHkgbmF0aXZlIFNoYWRvdyBET00gY2FzZSkuXG4gICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZUVsZW1lbnQsIHNjb3BlTmFtZSk7XG4gICAgY29uc3Qgc3R5bGUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XG4gICAgaWYgKHdpbmRvdy5TaGFkeUNTUy5uYXRpdmVTaGFkb3cgJiYgc3R5bGUgIT09IG51bGwpIHtcbiAgICAgICAgLy8gV2hlbiBpbiBuYXRpdmUgU2hhZG93IERPTSwgZW5zdXJlIHRoZSBzdHlsZSBjcmVhdGVkIGJ5IFNoYWR5Q1NTIGlzXG4gICAgICAgIC8vIGluY2x1ZGVkIGluIGluaXRpYWxseSByZW5kZXJlZCBvdXRwdXQgKGByZW5kZXJlZERPTWApLlxuICAgICAgICByZW5kZXJlZERPTS5pbnNlcnRCZWZvcmUoc3R5bGUuY2xvbmVOb2RlKHRydWUpLCByZW5kZXJlZERPTS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoISF0ZW1wbGF0ZSkge1xuICAgICAgICAvLyBXaGVuIG5vIHN0eWxlIGlzIGxlZnQgaW4gdGhlIHRlbXBsYXRlLCBwYXJ0cyB3aWxsIGJlIGJyb2tlbiBhcyBhXG4gICAgICAgIC8vIHJlc3VsdC4gVG8gZml4IHRoaXMsIHdlIHB1dCBiYWNrIHRoZSBzdHlsZSBub2RlIFNoYWR5Q1NTIHJlbW92ZWRcbiAgICAgICAgLy8gYW5kIHRoZW4gdGVsbCBsaXQgdG8gcmVtb3ZlIHRoYXQgbm9kZSBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgLy8gVGhlcmUgY2FuIGJlIG5vIHN0eWxlIGluIHRoZSB0ZW1wbGF0ZSBpbiAyIGNhc2VzICgxKSB3aGVuIFNoYWR5IERPTVxuICAgICAgICAvLyBpcyBpbiB1c2UsIFNoYWR5Q1NTIHJlbW92ZXMgYWxsIHN0eWxlcywgKDIpIHdoZW4gbmF0aXZlIFNoYWRvdyBET01cbiAgICAgICAgLy8gaXMgaW4gdXNlIFNoYWR5Q1NTIHJlbW92ZXMgdGhlIHN0eWxlIGlmIGl0IGNvbnRhaW5zIG5vIGNvbnRlbnQuXG4gICAgICAgIC8vIE5PVEUsIFNoYWR5Q1NTIGNyZWF0ZXMgaXRzIG93biBzdHlsZSBzbyB3ZSBjYW4gc2FmZWx5IGFkZC9yZW1vdmVcbiAgICAgICAgLy8gYGNvbmRlbnNlZFN0eWxlYCBoZXJlLlxuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShjb25kZW5zZWRTdHlsZSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgcmVtb3Zlcy5hZGQoY29uZGVuc2VkU3R5bGUpO1xuICAgICAgICByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZSh0ZW1wbGF0ZSwgcmVtb3Zlcyk7XG4gICAgfVxufTtcbi8qKlxuICogRXh0ZW5zaW9uIHRvIHRoZSBzdGFuZGFyZCBgcmVuZGVyYCBtZXRob2Qgd2hpY2ggc3VwcG9ydHMgcmVuZGVyaW5nXG4gKiB0byBTaGFkb3dSb290cyB3aGVuIHRoZSBTaGFkeURPTSAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHlkb20pXG4gKiBhbmQgU2hhZHlDU1MgKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3NoYWR5Y3NzKSBwb2x5ZmlsbHMgYXJlIHVzZWRcbiAqIG9yIHdoZW4gdGhlIHdlYmNvbXBvbmVudHNqc1xuICogKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcykgcG9seWZpbGwgaXMgdXNlZC5cbiAqXG4gKiBBZGRzIGEgYHNjb3BlTmFtZWAgb3B0aW9uIHdoaWNoIGlzIHVzZWQgdG8gc2NvcGUgZWxlbWVudCBET00gYW5kIHN0eWxlc2hlZXRzXG4gKiB3aGVuIG5hdGl2ZSBTaGFkb3dET00gaXMgdW5hdmFpbGFibGUuIFRoZSBgc2NvcGVOYW1lYCB3aWxsIGJlIGFkZGVkIHRvXG4gKiB0aGUgY2xhc3MgYXR0cmlidXRlIG9mIGFsbCByZW5kZXJlZCBET00uIEluIGFkZGl0aW9uLCBhbnkgc3R5bGUgZWxlbWVudHMgd2lsbFxuICogYmUgYXV0b21hdGljYWxseSByZS13cml0dGVuIHdpdGggdGhpcyBgc2NvcGVOYW1lYCBzZWxlY3RvciBhbmQgbW92ZWQgb3V0XG4gKiBvZiB0aGUgcmVuZGVyZWQgRE9NIGFuZCBpbnRvIHRoZSBkb2N1bWVudCBgPGhlYWQ+YC5cbiAqXG4gKiBJdCBpcyBjb21tb24gdG8gdXNlIHRoaXMgcmVuZGVyIG1ldGhvZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgY3VzdG9tIGVsZW1lbnRcbiAqIHdoaWNoIHJlbmRlcnMgYSBzaGFkb3dSb290LiBXaGVuIHRoaXMgaXMgZG9uZSwgdHlwaWNhbGx5IHRoZSBlbGVtZW50J3NcbiAqIGBsb2NhbE5hbWVgIHNob3VsZCBiZSB1c2VkIGFzIHRoZSBgc2NvcGVOYW1lYC5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBET00gc2NvcGluZywgU2hhZHlDU1MgYWxzbyBzdXBwb3J0cyBhIGJhc2ljIHNoaW0gZm9yIGNzc1xuICogY3VzdG9tIHByb3BlcnRpZXMgKG5lZWRlZCBvbmx5IG9uIG9sZGVyIGJyb3dzZXJzIGxpa2UgSUUxMSkgYW5kIGEgc2hpbSBmb3JcbiAqIGEgZGVwcmVjYXRlZCBmZWF0dXJlIGNhbGxlZCBgQGFwcGx5YCB0aGF0IHN1cHBvcnRzIGFwcGx5aW5nIGEgc2V0IG9mIGNzc1xuICogY3VzdG9tIHByb3BlcnRpZXMgdG8gYSBnaXZlbiBsb2NhdGlvbi5cbiAqXG4gKiBVc2FnZSBjb25zaWRlcmF0aW9uczpcbiAqXG4gKiAqIFBhcnQgdmFsdWVzIGluIGA8c3R5bGU+YCBlbGVtZW50cyBhcmUgb25seSBhcHBsaWVkIHRoZSBmaXJzdCB0aW1lIGEgZ2l2ZW5cbiAqIGBzY29wZU5hbWVgIHJlbmRlcnMuIFN1YnNlcXVlbnQgY2hhbmdlcyB0byBwYXJ0cyBpbiBzdHlsZSBlbGVtZW50cyB3aWxsIGhhdmVcbiAqIG5vIGVmZmVjdC4gQmVjYXVzZSBvZiB0aGlzLCBwYXJ0cyBpbiBzdHlsZSBlbGVtZW50cyBzaG91bGQgb25seSBiZSB1c2VkIGZvclxuICogdmFsdWVzIHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UsIGZvciBleGFtcGxlIHBhcnRzIHRoYXQgc2V0IHNjb3BlLXdpZGUgdGhlbWVcbiAqIHZhbHVlcyBvciBwYXJ0cyB3aGljaCByZW5kZXIgc2hhcmVkIHN0eWxlIGVsZW1lbnRzLlxuICpcbiAqICogTm90ZSwgZHVlIHRvIGEgbGltaXRhdGlvbiBvZiB0aGUgU2hhZHlET00gcG9seWZpbGwsIHJlbmRlcmluZyBpbiBhXG4gKiBjdXN0b20gZWxlbWVudCdzIGBjb25zdHJ1Y3RvcmAgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCByZW5kZXJpbmcgc2hvdWxkXG4gKiBlaXRoZXIgZG9uZSBhc3luY2hyb25vdXNseSwgZm9yIGV4YW1wbGUgYXQgbWljcm90YXNrIHRpbWluZyAoZm9yIGV4YW1wbGVcbiAqIGBQcm9taXNlLnJlc29sdmUoKWApLCBvciBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZmlyc3QgdGltZSB0aGUgZWxlbWVudCdzXG4gKiBgY29ubmVjdGVkQ2FsbGJhY2tgIHJ1bnMuXG4gKlxuICogVXNhZ2UgY29uc2lkZXJhdGlvbnMgd2hlbiB1c2luZyBzaGltbWVkIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIGBAYXBwbHlgOlxuICpcbiAqICogV2hlbmV2ZXIgYW55IGR5bmFtaWMgY2hhbmdlcyBhcmUgbWFkZSB3aGljaCBhZmZlY3RcbiAqIGNzcyBjdXN0b20gcHJvcGVydGllcywgYFNoYWR5Q1NTLnN0eWxlRWxlbWVudChlbGVtZW50KWAgbXVzdCBiZSBjYWxsZWRcbiAqIHRvIHVwZGF0ZSB0aGUgZWxlbWVudC4gVGhlcmUgYXJlIHR3byBjYXNlcyB3aGVuIHRoaXMgaXMgbmVlZGVkOlxuICogKDEpIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byBhIG5ldyBwYXJlbnQsICgyKSBhIGNsYXNzIGlzIGFkZGVkIHRvIHRoZVxuICogZWxlbWVudCB0aGF0IGNhdXNlcyBpdCB0byBtYXRjaCBkaWZmZXJlbnQgY3VzdG9tIHByb3BlcnRpZXMuXG4gKiBUbyBhZGRyZXNzIHRoZSBmaXJzdCBjYXNlIHdoZW4gcmVuZGVyaW5nIGEgY3VzdG9tIGVsZW1lbnQsIGBzdHlsZUVsZW1lbnRgXG4gKiBzaG91bGQgYmUgY2FsbGVkIGluIHRoZSBlbGVtZW50J3MgYGNvbm5lY3RlZENhbGxiYWNrYC5cbiAqXG4gKiAqIFNoaW1tZWQgY3VzdG9tIHByb3BlcnRpZXMgbWF5IG9ubHkgYmUgZGVmaW5lZCBlaXRoZXIgZm9yIGFuIGVudGlyZVxuICogc2hhZG93Um9vdCAoZm9yIGV4YW1wbGUsIGluIGEgYDpob3N0YCBydWxlKSBvciB2aWEgYSBydWxlIHRoYXQgZGlyZWN0bHlcbiAqIG1hdGNoZXMgYW4gZWxlbWVudCB3aXRoIGEgc2hhZG93Um9vdC4gSW4gb3RoZXIgd29yZHMsIGluc3RlYWQgb2YgZmxvd2luZyBmcm9tXG4gKiBwYXJlbnQgdG8gY2hpbGQgYXMgZG8gbmF0aXZlIGNzcyBjdXN0b20gcHJvcGVydGllcywgc2hpbW1lZCBjdXN0b20gcHJvcGVydGllc1xuICogZmxvdyBvbmx5IGZyb20gc2hhZG93Um9vdHMgdG8gbmVzdGVkIHNoYWRvd1Jvb3RzLlxuICpcbiAqICogV2hlbiB1c2luZyBgQGFwcGx5YCBtaXhpbmcgY3NzIHNob3J0aGFuZCBwcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBub24tc2hvcnRoYW5kIG5hbWVzIChmb3IgZXhhbXBsZSBgYm9yZGVyYCBhbmQgYGJvcmRlci13aWR0aGApIGlzIG5vdFxuICogc3VwcG9ydGVkLlxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKHJlc3VsdCwgY29udGFpbmVyLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyB8fCAhb3B0aW9ucy5zY29wZU5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHNjb3BlTmFtZWAgb3B0aW9uIGlzIHJlcXVpcmVkLicpO1xuICAgIH1cbiAgICBjb25zdCBzY29wZU5hbWUgPSBvcHRpb25zLnNjb3BlTmFtZTtcbiAgICBjb25zdCBoYXNSZW5kZXJlZCA9IHBhcnRzLmhhcyhjb250YWluZXIpO1xuICAgIGNvbnN0IG5lZWRzU2NvcGluZyA9IGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gJiZcbiAgICAgICAgY29udGFpbmVyLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8gJiZcbiAgICAgICAgISFjb250YWluZXIuaG9zdDtcbiAgICAvLyBIYW5kbGUgZmlyc3QgcmVuZGVyIHRvIGEgc2NvcGUgc3BlY2lhbGx5Li4uXG4gICAgY29uc3QgZmlyc3RTY29wZVJlbmRlciA9IG5lZWRzU2NvcGluZyAmJiAhc2hhZHlSZW5kZXJTZXQuaGFzKHNjb3BlTmFtZSk7XG4gICAgLy8gT24gZmlyc3Qgc2NvcGUgcmVuZGVyLCByZW5kZXIgaW50byBhIGZyYWdtZW50OyB0aGlzIGNhbm5vdCBiZSBhIHNpbmdsZVxuICAgIC8vIGZyYWdtZW50IHRoYXQgaXMgcmV1c2VkIHNpbmNlIG5lc3RlZCByZW5kZXJzIGNhbiBvY2N1ciBzeW5jaHJvbm91c2x5LlxuICAgIGNvbnN0IHJlbmRlckNvbnRhaW5lciA9IGZpcnN0U2NvcGVSZW5kZXIgPyBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkgOiBjb250YWluZXI7XG4gICAgbGl0UmVuZGVyKHJlc3VsdCwgcmVuZGVyQ29udGFpbmVyLCBPYmplY3QuYXNzaWduKHsgdGVtcGxhdGVGYWN0b3J5OiBzaGFkeVRlbXBsYXRlRmFjdG9yeShzY29wZU5hbWUpIH0sIG9wdGlvbnMpKTtcbiAgICAvLyBXaGVuIHBlcmZvcm1pbmcgZmlyc3Qgc2NvcGUgcmVuZGVyLFxuICAgIC8vICgxKSBXZSd2ZSByZW5kZXJlZCBpbnRvIGEgZnJhZ21lbnQgc28gdGhhdCB0aGVyZSdzIGEgY2hhbmNlIHRvXG4gICAgLy8gYHByZXBhcmVUZW1wbGF0ZVN0eWxlc2AgYmVmb3JlIHN1Yi1lbGVtZW50cyBoaXQgdGhlIERPTVxuICAgIC8vICh3aGljaCBtaWdodCBjYXVzZSB0aGVtIHRvIHJlbmRlciBiYXNlZCBvbiBhIGNvbW1vbiBwYXR0ZXJuIG9mXG4gICAgLy8gcmVuZGVyaW5nIGluIGEgY3VzdG9tIGVsZW1lbnQncyBgY29ubmVjdGVkQ2FsbGJhY2tgKTtcbiAgICAvLyAoMikgU2NvcGUgdGhlIHRlbXBsYXRlIHdpdGggU2hhZHlDU1Mgb25lIHRpbWUgb25seSBmb3IgdGhpcyBzY29wZS5cbiAgICAvLyAoMykgUmVuZGVyIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBjb250YWluZXIgYW5kIG1ha2Ugc3VyZSB0aGVcbiAgICAvLyBjb250YWluZXIga25vd3MgaXRzIGBwYXJ0YCBpcyB0aGUgb25lIHdlIGp1c3QgcmVuZGVyZWQuIFRoaXMgZW5zdXJlc1xuICAgIC8vIERPTSB3aWxsIGJlIHJlLXVzZWQgb24gc3Vic2VxdWVudCByZW5kZXJzLlxuICAgIGlmIChmaXJzdFNjb3BlUmVuZGVyKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0cy5nZXQocmVuZGVyQ29udGFpbmVyKTtcbiAgICAgICAgcGFydHMuZGVsZXRlKHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIC8vIFNoYWR5Q1NTIG1pZ2h0IGhhdmUgc3R5bGUgc2hlZXRzIChlLmcuIGZyb20gYHByZXBhcmVBZG9wdGVkQ3NzVGV4dGApXG4gICAgICAgIC8vIHRoYXQgc2hvdWxkIGFwcGx5IHRvIGByZW5kZXJDb250YWluZXJgIGV2ZW4gaWYgdGhlIHJlbmRlcmVkIHZhbHVlIGlzXG4gICAgICAgIC8vIG5vdCBhIFRlbXBsYXRlSW5zdGFuY2UuIEhvd2V2ZXIsIGl0IHdpbGwgb25seSBpbnNlcnQgc2NvcGVkIHN0eWxlc1xuICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudCBpZiBgcHJlcGFyZVRlbXBsYXRlU3R5bGVzYCBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZFxuICAgICAgICAvLyBmb3IgdGhlIGdpdmVuIHNjb3BlIG5hbWUuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gcGFydC52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UgP1xuICAgICAgICAgICAgcGFydC52YWx1ZS50ZW1wbGF0ZSA6XG4gICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgIHByZXBhcmVUZW1wbGF0ZVN0eWxlcyhzY29wZU5hbWUsIHJlbmRlckNvbnRhaW5lciwgdGVtcGxhdGUpO1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQpO1xuICAgIH1cbiAgICAvLyBBZnRlciBlbGVtZW50cyBoYXZlIGhpdCB0aGUgRE9NLCB1cGRhdGUgc3R5bGluZyBpZiB0aGlzIGlzIHRoZVxuICAgIC8vIGluaXRpYWwgcmVuZGVyIHRvIHRoaXMgY29udGFpbmVyLlxuICAgIC8vIFRoaXMgaXMgbmVlZGVkIHdoZW5ldmVyIGR5bmFtaWMgY2hhbmdlcyBhcmUgbWFkZSBzbyBpdCB3b3VsZCBiZVxuICAgIC8vIHNhZmVzdCB0byBkbyBldmVyeSByZW5kZXI7IGhvd2V2ZXIsIHRoaXMgd291bGQgcmVncmVzcyBwZXJmb3JtYW5jZVxuICAgIC8vIHNvIHdlIGxlYXZlIGl0IHVwIHRvIHRoZSB1c2VyIHRvIGNhbGwgYFNoYWR5Q1NTLnN0eWxlRWxlbWVudGBcbiAgICAvLyBmb3IgZHluYW1pYyBjaGFuZ2VzLlxuICAgIGlmICghaGFzUmVuZGVyZWQgJiYgbmVlZHNTY29waW5nKSB7XG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQoY29udGFpbmVyLmhvc3QpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFkeS1yZW5kZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgbWFya2VyLCBUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBUZW1wbGF0ZUZhY3Rvcnkgd2hpY2ggY2FjaGVzIFRlbXBsYXRlcyBrZXllZCBvblxuICogcmVzdWx0LnR5cGUgYW5kIHJlc3VsdC5zdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVGYWN0b3J5KHJlc3VsdCkge1xuICAgIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICAgICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwKCksXG4gICAgICAgICAgICBrZXlTdHJpbmc6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICAgIH1cbiAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIFRlbXBsYXRlU3RyaW5nc0FycmF5IGlzIG5ldywgZ2VuZXJhdGUgYSBrZXkgZnJvbSB0aGUgc3RyaW5nc1xuICAgIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICAgIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcbiAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLmdldChrZXkpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbm90IHNlZW4gdGhpcyBrZXkgYmVmb3JlLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVcbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCkpO1xuICAgICAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2FjaGVzID0gbmV3IE1hcCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtZmFjdG9yeS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgaXNDRVBvbHlmaWxsIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwcm9jZXNzb3IsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fX3BhcnRzID0gW107XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHVwZGF0ZSh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9jbG9uZSgpIHtcbiAgICAgICAgLy8gVGhlcmUgYXJlIGEgbnVtYmVyIG9mIHN0ZXBzIGluIHRoZSBsaWZlY3ljbGUgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSdzXG4gICAgICAgIC8vIERPTSBmcmFnbWVudDpcbiAgICAgICAgLy8gIDEuIENsb25lIC0gY3JlYXRlIHRoZSBpbnN0YW5jZSBmcmFnbWVudFxuICAgICAgICAvLyAgMi4gQWRvcHQgLSBhZG9wdCBpbnRvIHRoZSBtYWluIGRvY3VtZW50XG4gICAgICAgIC8vICAzLiBQcm9jZXNzIC0gZmluZCBwYXJ0IG1hcmtlcnMgYW5kIGNyZWF0ZSBwYXJ0c1xuICAgICAgICAvLyAgNC4gVXBncmFkZSAtIHVwZ3JhZGUgY3VzdG9tIGVsZW1lbnRzXG4gICAgICAgIC8vICA1LiBVcGRhdGUgLSBzZXQgbm9kZSwgYXR0cmlidXRlLCBwcm9wZXJ0eSwgZXRjLiwgdmFsdWVzXG4gICAgICAgIC8vICA2LiBDb25uZWN0IC0gY29ubmVjdCB0byB0aGUgZG9jdW1lbnQuIE9wdGlvbmFsIGFuZCBvdXRzaWRlIG9mIHRoaXNcbiAgICAgICAgLy8gICAgIG1ldGhvZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2UgaGF2ZSBhIGZldyBjb25zdHJhaW50cyBvbiB0aGUgb3JkZXJpbmcgb2YgdGhlc2Ugc3RlcHM6XG4gICAgICAgIC8vICAqIFdlIG5lZWQgdG8gdXBncmFkZSBiZWZvcmUgdXBkYXRpbmcsIHNvIHRoYXQgcHJvcGVydHkgdmFsdWVzIHdpbGwgcGFzc1xuICAgICAgICAvLyAgICB0aHJvdWdoIGFueSBwcm9wZXJ0eSBzZXR0ZXJzLlxuICAgICAgICAvLyAgKiBXZSB3b3VsZCBsaWtlIHRvIHByb2Nlc3MgYmVmb3JlIHVwZ3JhZGluZyBzbyB0aGF0IHdlJ3JlIHN1cmUgdGhhdCB0aGVcbiAgICAgICAgLy8gICAgY2xvbmVkIGZyYWdtZW50IGlzIGluZXJ0IGFuZCBub3QgZGlzdHVyYmVkIGJ5IHNlbGYtbW9kaWZ5aW5nIERPTS5cbiAgICAgICAgLy8gICogV2Ugd2FudCBjdXN0b20gZWxlbWVudHMgdG8gdXBncmFkZSBldmVuIGluIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEdpdmVuIHRoZXNlIGNvbnN0cmFpbnRzLCB3aXRoIGZ1bGwgY3VzdG9tIGVsZW1lbnRzIHN1cHBvcnQgd2Ugd291bGRcbiAgICAgICAgLy8gcHJlZmVyIHRoZSBvcmRlcjogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsIENvbm5lY3RcbiAgICAgICAgLy9cbiAgICAgICAgLy8gQnV0IFNhZmFyaSBkb29lcyBub3QgaW1wbGVtZW50IEN1c3RvbUVsZW1lbnRSZWdpc3RyeSN1cGdyYWRlLCBzbyB3ZVxuICAgICAgICAvLyBjYW4gbm90IGltcGxlbWVudCB0aGF0IG9yZGVyIGFuZCBzdGlsbCBoYXZlIHVwZ3JhZGUtYmVmb3JlLXVwZGF0ZSBhbmRcbiAgICAgICAgLy8gdXBncmFkZSBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLiBTbyB3ZSBpbnN0ZWFkIHNhY3JpZmljZSB0aGVcbiAgICAgICAgLy8gcHJvY2Vzcy1iZWZvcmUtdXBncmFkZSBjb25zdHJhaW50LCBzaW5jZSBpbiBDdXN0b20gRWxlbWVudHMgdjEgZWxlbWVudHNcbiAgICAgICAgLy8gbXVzdCBub3QgbW9kaWZ5IHRoZWlyIGxpZ2h0IERPTSBpbiB0aGUgY29uc3RydWN0b3IuIFdlIHN0aWxsIGhhdmUgaXNzdWVzXG4gICAgICAgIC8vIHdoZW4gY28tZXhpc3Rpbmcgd2l0aCBDRXYwIGVsZW1lbnRzIGxpa2UgUG9seW1lciAxLCBhbmQgd2l0aCBwb2x5ZmlsbHNcbiAgICAgICAgLy8gdGhhdCBkb24ndCBzdHJpY3RseSBhZGhlcmUgdG8gdGhlIG5vLW1vZGlmaWNhdGlvbiBydWxlIGJlY2F1c2Ugc2hhZG93XG4gICAgICAgIC8vIERPTSwgd2hpY2ggbWF5IGJlIGNyZWF0ZWQgaW4gdGhlIGNvbnN0cnVjdG9yLCBpcyBlbXVsYXRlZCBieSBiZWluZyBwbGFjZWRcbiAgICAgICAgLy8gaW4gdGhlIGxpZ2h0IERPTS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHJlc3VsdGluZyBvcmRlciBpcyBvbiBuYXRpdmUgaXM6IENsb25lLCBBZG9wdCwgVXBncmFkZSwgUHJvY2VzcyxcbiAgICAgICAgLy8gVXBkYXRlLCBDb25uZWN0LiBkb2N1bWVudC5pbXBvcnROb2RlKCkgcGVyZm9ybXMgQ2xvbmUsIEFkb3B0LCBhbmQgVXBncmFkZVxuICAgICAgICAvLyBpbiBvbmUgc3RlcC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIEN1c3RvbSBFbGVtZW50cyB2MSBwb2x5ZmlsbCBzdXBwb3J0cyB1cGdyYWRlKCksIHNvIHRoZSBvcmRlciB3aGVuXG4gICAgICAgIC8vIHBvbHlmaWxsZWQgaXMgdGhlIG1vcmUgaWRlYWw6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLFxuICAgICAgICAvLyBDb25uZWN0LlxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGlzQ0VQb2x5ZmlsbCA/XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgOlxuICAgICAgICAgICAgZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy50ZW1wbGF0ZS5wYXJ0cztcbiAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZSBudWxsXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZnJhZ21lbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBwYXJ0O1xuICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBub2RlcyBhbmQgcGFydHMgb2YgYSB0ZW1wbGF0ZVxuICAgICAgICB3aGlsZSAocGFydEluZGV4IDwgcGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIGlmICghaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fcGFydHMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJvZ3Jlc3MgdGhlIHRyZWUgd2Fsa2VyIHVudGlsIHdlIGZpbmQgb3VyIG5leHQgcGFydCdzIG5vZGUuXG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgbXVsdGlwbGUgcGFydHMgbWF5IHNoYXJlIHRoZSBzYW1lIG5vZGUgKGF0dHJpYnV0ZSBwYXJ0c1xuICAgICAgICAgICAgLy8gb24gYSBzaW5nbGUgZWxlbWVudCksIHNvIHRoaXMgbG9vcCBtYXkgbm90IHJ1biBhdCBhbGwuXG4gICAgICAgICAgICB3aGlsZSAobm9kZUluZGV4IDwgcGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IG5vZGUuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAgICAgICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlJ3ZlIGFycml2ZWQgYXQgb3VyIHBhcnQncyBub2RlLlxuICAgICAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucHJvY2Vzc29yLmhhbmRsZVRleHRFeHByZXNzaW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgcGFydC5pbnNlcnRBZnRlck5vZGUobm9kZS5wcmV2aW91c1NpYmxpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2goLi4udGhpcy5wcm9jZXNzb3IuaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMobm9kZSwgcGFydC5uYW1lLCBwYXJ0LnN0cmluZ3MsIHRoaXMub3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ0VQb2x5ZmlsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRvcHROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1pbnN0YW5jZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgcmVwYXJlbnROb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGJvdW5kQXR0cmlidXRlU3VmZml4LCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LCBtYXJrZXIsIG5vZGVNYXJrZXIgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmNvbnN0IGNvbW1lbnRNYXJrZXIgPSBgICR7bWFya2VyfSBgO1xuLyoqXG4gKiBUaGUgcmV0dXJuIHR5cGUgb2YgYGh0bWxgLCB3aGljaCBob2xkcyBhIFRlbXBsYXRlIGFuZCB0aGUgdmFsdWVzIGZyb21cbiAqIGludGVycG9sYXRlZCBleHByZXNzaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpbmdzLCB2YWx1ZXMsIHR5cGUsIHByb2Nlc3Nvcikge1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldEhUTUwoKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGh0bWwgPSAnJztcbiAgICAgICAgbGV0IGlzQ29tbWVudEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBiaW5kaW5nIHdlIHdhbnQgdG8gZGV0ZXJtaW5lIHRoZSBraW5kIG9mIG1hcmtlciB0byBpbnNlcnRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIHRlbXBsYXRlIHNvdXJjZSBiZWZvcmUgaXQncyBwYXJzZWQgYnkgdGhlIGJyb3dzZXIncyBIVE1MXG4gICAgICAgICAgICAvLyBwYXJzZXIuIFRoZSBtYXJrZXIgdHlwZSBpcyBiYXNlZCBvbiB3aGV0aGVyIHRoZSBleHByZXNzaW9uIGlzIGluIGFuXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGUsIHRleHQsIG9yIGNvbW1lbnQgcG9pc2l0aW9uLlxuICAgICAgICAgICAgLy8gICAqIEZvciBub2RlLXBvc2l0aW9uIGJpbmRpbmdzIHdlIGluc2VydCBhIGNvbW1lbnQgd2l0aCB0aGUgbWFya2VyXG4gICAgICAgICAgICAvLyAgICAgc2VudGluZWwgYXMgaXRzIHRleHQgY29udGVudCwgbGlrZSA8IS0te3tsaXQtZ3VpZH19LS0+LlxuICAgICAgICAgICAgLy8gICAqIEZvciBhdHRyaWJ1dGUgYmluZGluZ3Mgd2UgaW5zZXJ0IGp1c3QgdGhlIG1hcmtlciBzZW50aW5lbCBmb3IgdGhlXG4gICAgICAgICAgICAvLyAgICAgZmlyc3QgYmluZGluZywgc28gdGhhdCB3ZSBzdXBwb3J0IHVucXVvdGVkIGF0dHJpYnV0ZSBiaW5kaW5ncy5cbiAgICAgICAgICAgIC8vICAgICBTdWJzZXF1ZW50IGJpbmRpbmdzIGNhbiB1c2UgYSBjb21tZW50IG1hcmtlciBiZWNhdXNlIG11bHRpLWJpbmRpbmdcbiAgICAgICAgICAgIC8vICAgICBhdHRyaWJ1dGVzIG11c3QgYmUgcXVvdGVkLlxuICAgICAgICAgICAgLy8gICAqIEZvciBjb21tZW50IGJpbmRpbmdzIHdlIGluc2VydCBqdXN0IHRoZSBtYXJrZXIgc2VudGluZWwgc28gd2UgZG9uJ3RcbiAgICAgICAgICAgIC8vICAgICBjbG9zZSB0aGUgY29tbWVudC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgc2NhbnMgdGhlIHRlbXBsYXRlIHNvdXJjZSwgYnV0IGlzICpub3QqIGFuIEhUTUxcbiAgICAgICAgICAgIC8vIHBhcnNlci4gV2UgZG9uJ3QgbmVlZCB0byB0cmFjayB0aGUgdHJlZSBzdHJ1Y3R1cmUgb2YgdGhlIEhUTUwsIG9ubHlcbiAgICAgICAgICAgIC8vIHdoZXRoZXIgYSBiaW5kaW5nIGlzIGluc2lkZSBhIGNvbW1lbnQsIGFuZCBpZiBub3QsIGlmIGl0IGFwcGVhcnMgdG8gYmVcbiAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBiaW5kaW5nIGluIGFuIGF0dHJpYnV0ZS5cbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRPcGVuID0gcy5sYXN0SW5kZXhPZignPCEtLScpO1xuICAgICAgICAgICAgLy8gV2UncmUgaW4gY29tbWVudCBwb3NpdGlvbiBpZiB3ZSBoYXZlIGEgY29tbWVudCBvcGVuIHdpdGggbm8gZm9sbG93aW5nXG4gICAgICAgICAgICAvLyBjb21tZW50IGNsb3NlLiBCZWNhdXNlIDwtLSBjYW4gYXBwZWFyIGluIGFuIGF0dHJpYnV0ZSB2YWx1ZSB0aGVyZSBjYW5cbiAgICAgICAgICAgIC8vIGJlIGZhbHNlIHBvc2l0aXZlcy5cbiAgICAgICAgICAgIGlzQ29tbWVudEJpbmRpbmcgPSAoY29tbWVudE9wZW4gPiAtMSB8fCBpc0NvbW1lbnRCaW5kaW5nKSAmJlxuICAgICAgICAgICAgICAgIHMuaW5kZXhPZignLS0+JywgY29tbWVudE9wZW4gKyAxKSA9PT0gLTE7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhbiBhdHRyaWJ1dGUtbGlrZSBzZXF1ZW5jZSBwcmVjZWVkaW5nIHRoZVxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbi4gVGhpcyBjYW4gbWF0Y2ggXCJuYW1lPXZhbHVlXCIgbGlrZSBzdHJ1Y3R1cmVzIGluIHRleHQsXG4gICAgICAgICAgICAvLyBjb21tZW50cywgYW5kIGF0dHJpYnV0ZSB2YWx1ZXMsIHNvIHRoZXJlIGNhbiBiZSBmYWxzZS1wb3NpdGl2ZXMuXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVNYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFdlJ3JlIG9ubHkgaW4gdGhpcyBicmFuY2ggaWYgd2UgZG9uJ3QgaGF2ZSBhIGF0dHJpYnV0ZS1saWtlXG4gICAgICAgICAgICAgICAgLy8gcHJlY2VlZGluZyBzZXF1ZW5jZS4gRm9yIGNvbW1lbnRzLCB0aGlzIGd1YXJkcyBhZ2FpbnN0IHVudXN1YWxcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGUgdmFsdWVzIGxpa2UgPGRpdiBmb289XCI8IS0tJHsnYmFyJ31cIj4uIENhc2VzIGxpa2VcbiAgICAgICAgICAgICAgICAvLyA8IS0tIGZvbz0keydiYXInfS0tPiBhcmUgaGFuZGxlZCBjb3JyZWN0bHkgaW4gdGhlIGF0dHJpYnV0ZSBicmFuY2hcbiAgICAgICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgICAgICBodG1sICs9IHMgKyAoaXNDb21tZW50QmluZGluZyA/IGNvbW1lbnRNYXJrZXIgOiBub2RlTWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZvciBhdHRyaWJ1dGVzIHdlIHVzZSBqdXN0IGEgbWFya2VyIHNlbnRpbmVsLCBhbmQgYWxzbyBhcHBlbmQgYVxuICAgICAgICAgICAgICAgIC8vICRsaXQkIHN1ZmZpeCB0byB0aGUgbmFtZSB0byBvcHQtb3V0IG9mIGF0dHJpYnV0ZS1zcGVjaWZpYyBwYXJzaW5nXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBJRSBhbmQgRWRnZSBkbyBmb3Igc3R5bGUgYW5kIGNlcnRhaW4gU1ZHIGF0dHJpYnV0ZXMuXG4gICAgICAgICAgICAgICAgaHRtbCArPSBzLnN1YnN0cigwLCBhdHRyaWJ1dGVNYXRjaC5pbmRleCkgKyBhdHRyaWJ1dGVNYXRjaFsxXSArXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU1hdGNoWzJdICsgYm91bmRBdHRyaWJ1dGVTdWZmaXggKyBhdHRyaWJ1dGVNYXRjaFszXSArXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IHRoaXMuc3RyaW5nc1tsXTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIGdldFRlbXBsYXRlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmdldEhUTUwoKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn1cbi8qKlxuICogQSBUZW1wbGF0ZVJlc3VsdCBmb3IgU1ZHIGZyYWdtZW50cy5cbiAqXG4gKiBUaGlzIGNsYXNzIHdyYXBzIEhUTUwgaW4gYW4gYDxzdmc+YCB0YWcgaW4gb3JkZXIgdG8gcGFyc2UgaXRzIGNvbnRlbnRzIGluIHRoZVxuICogU1ZHIG5hbWVzcGFjZSwgdGhlbiBtb2RpZmllcyB0aGUgdGVtcGxhdGUgdG8gcmVtb3ZlIHRoZSBgPHN2Zz5gIHRhZyBzbyB0aGF0XG4gKiBjbG9uZXMgb25seSBjb250YWluZXIgdGhlIG9yaWdpbmFsIGZyYWdtZW50LlxuICovXG5leHBvcnQgY2xhc3MgU1ZHVGVtcGxhdGVSZXN1bHQgZXh0ZW5kcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgZ2V0SFRNTCgpIHtcbiAgICAgICAgcmV0dXJuIGA8c3ZnPiR7c3VwZXIuZ2V0SFRNTCgpfTwvc3ZnPmA7XG4gICAgfVxuICAgIGdldFRlbXBsYXRlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBzdXBlci5nZXRUZW1wbGF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgICAgIHJlcGFyZW50Tm9kZXMoY29udGVudCwgc3ZnRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLXJlc3VsdC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHdpdGggZW1iZWRkZWQgdW5pcXVlIGtleSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aFxuICogcG9zc2libGUgdGV4dCBpbiB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXJrZXIgPSBge3tsaXQtJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc2xpY2UoMil9fX1gO1xuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB1c2VkIHRleHQtcG9zaXRpb25zLCBtdWx0aS1iaW5kaW5nIGF0dHJpYnV0ZXMsIGFuZFxuICogYXR0cmlidXRlcyB3aXRoIG1hcmt1cC1saWtlIHRleHQgdmFsdWVzLlxuICovXG5leHBvcnQgY29uc3Qgbm9kZU1hcmtlciA9IGA8IS0tJHttYXJrZXJ9LS0+YDtcbmV4cG9ydCBjb25zdCBtYXJrZXJSZWdleCA9IG5ldyBSZWdFeHAoYCR7bWFya2VyfXwke25vZGVNYXJrZXJ9YCk7XG4vKipcbiAqIFN1ZmZpeCBhcHBlbmRlZCB0byBhbGwgYm91bmQgYXR0cmlidXRlIG5hbWVzLlxuICovXG5leHBvcnQgY29uc3QgYm91bmRBdHRyaWJ1dGVTdWZmaXggPSAnJGxpdCQnO1xuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKHJlc3VsdCwgZWxlbWVudCkge1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG5vZGVzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZSBudWxsXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWxlbWVudC5jb250ZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGxhc3QgaW5kZXggYXNzb2NpYXRlZCB3aXRoIGEgcGFydC4gV2UgdHJ5IHRvIGRlbGV0ZVxuICAgICAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAgICAgLy8gdG8gdGhlIHNhbWUgaW5kZXguIFRoZXkgbXVzdCBoYXZlIGEgY29uc3RhbnQgbm9kZSBiZXR3ZWVuLlxuICAgICAgICBsZXQgbGFzdFBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgeyBzdHJpbmdzLCB2YWx1ZXM6IHsgbGVuZ3RoIH0gfSA9IHJlc3VsdDtcbiAgICAgICAgd2hpbGUgKHBhcnRJbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSd2ZSBleGhhdXN0ZWQgdGhlIGNvbnRlbnQgaW5zaWRlIGEgbmVzdGVkIHRlbXBsYXRlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAgICAgICAgIC8vIC0gVGhlcmUgaXMgYSB0ZW1wbGF0ZSBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAgICAgICAvLyAtIFRoZSB3YWxrZXIgd2lsbCBmaW5kIGEgbmV4dE5vZGUgb3V0c2lkZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOb2RlLkVMRU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9OYW1lZE5vZGVNYXAsXG4gICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgICAgICAgICAgICAvLyBJbiBwYXJ0aWN1bGFyLCBFZGdlL0lFIGNhbiByZXR1cm4gdGhlbSBvdXQgb2Ygb3JkZXIsIHNvIHdlIGNhbm5vdFxuICAgICAgICAgICAgICAgICAgICAvLyBhc3N1bWUgYSBjb3JyZXNwb25kZW5jZSBiZXR3ZWVuIHBhcnQgaW5kZXggYW5kIGF0dHJpYnV0ZSBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHNXaXRoKGF0dHJpYnV0ZXNbaV0ubmFtZSwgYm91bmRBdHRyaWJ1dGVTdWZmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBzZWN0aW9uIGxlYWRpbmcgdXAgdG8gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdGb3JQYXJ0ID0gc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMoc3RyaW5nRm9yUGFydClbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsIGJvdW5kIGF0dHJpYnV0ZXMgaGF2ZSBoYWQgYSBzdWZmaXggYWRkZWQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlbXBsYXRlUmVzdWx0I2dldEhUTUwgdG8gb3B0IG91dCBvZiBzcGVjaWFsIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxpbmcuIFRvIGxvb2sgdXAgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB3ZSBhbHNvIG5lZWQgdG8gYWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3VmZml4LlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTG9va3VwTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IGF0dHJpYnV0ZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdhdHRyaWJ1dGUnLCBpbmRleCwgbmFtZSwgc3RyaW5nczogc3RhdGljcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBzdGF0aWNzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBub2RlLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaW5kZXhPZihtYXJrZXIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gZGF0YS5zcGxpdChtYXJrZXJSZWdleCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnNlcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQgPSBjcmVhdGVNYXJrZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCAmJiBlbmRzV2l0aChtYXRjaFsyXSwgYm91bmRBdHRyaWJ1dGVTdWZmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzLnNsaWNlKDAsIG1hdGNoLmluZGV4KSArIG1hdGNoWzFdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzJdLnNsaWNlKDAsIC1ib3VuZEF0dHJpYnV0ZVN1ZmZpeC5sZW5ndGgpICsgbWF0Y2hbM107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShpbnNlcnQsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleDogKytpbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHRleHQsIHdlIG11c3QgaW5zZXJ0IGEgY29tbWVudCB0byBtYXJrIG91ciBwbGFjZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHRydXN0IGl0IHdpbGwgc3RpY2sgYXJvdW5kIGFmdGVyIGNsb25pbmcuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJpbmdzW2xhc3RJbmRleF0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9IHN0cmluZ3NbbGFzdEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gbGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTm9kZS5DT01NRU5UX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kYXRhID09PSBtYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBhcmUgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyAgKiBUaGUgcHJldmlvdXNTaWJsaW5nIGlzIGFscmVhZHkgdGhlIHN0YXJ0IG9mIGEgcHJldmlvdXMgcGFydFxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IG51bGwgfHwgaW5kZXggPT09IGxhc3RQYXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFydEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBuZXh0U2libGluZywga2VlcCB0aGlzIG5vZGUgc28gd2UgaGF2ZSBhbiBlbmQuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsc2UsIHdlIGNhbiByZW1vdmUgaXQgdG8gc2F2ZSBmdXR1cmUgY29zdHMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGkgPSBub2RlLmRhdGEuaW5kZXhPZihtYXJrZXIsIGkgKyAxKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG5vZGUgaGFzIGEgYmluZGluZyBtYXJrZXIgaW5zaWRlLCBtYWtlIGFuIGluYWN0aXZlIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBiaW5kaW5nIHdvbid0IHdvcmssIGJ1dCBzdWJzZXF1ZW50IGJpbmRpbmdzIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBjb25zaWRlciB3aGV0aGVyIGl0J3MgZXZlbiB3b3J0aCBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBiaW5kaW5ncyBpbiBjb21tZW50cyB3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnbm9kZScsIGluZGV4OiAtMSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5vZGVzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGVuZHNXaXRoID0gKHN0ciwgc3VmZml4KSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBzdHIubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aDtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBzdHIuc2xpY2UoaW5kZXgpID09PSBzdWZmaXg7XG59O1xuZXhwb3J0IGNvbnN0IGlzVGVtcGxhdGVQYXJ0QWN0aXZlID0gKHBhcnQpID0+IHBhcnQuaW5kZXggIT09IC0xO1xuLy8gQWxsb3dzIGBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKWAgdG8gYmUgcmVuYW1lZCBmb3IgYVxuLy8gc21hbGwgbWFudWFsIHNpemUtc2F2aW5ncy5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbi8qKlxuICogVGhpcyByZWdleCBleHRyYWN0cyB0aGUgYXR0cmlidXRlIG5hbWUgcHJlY2VkaW5nIGFuIGF0dHJpYnV0ZS1wb3NpdGlvblxuICogZXhwcmVzc2lvbi4gSXQgZG9lcyB0aGlzIGJ5IG1hdGNoaW5nIHRoZSBzeW50YXggYWxsb3dlZCBmb3IgYXR0cmlidXRlc1xuICogYWdhaW5zdCB0aGUgc3RyaW5nIGxpdGVyYWwgZGlyZWN0bHkgcHJlY2VkaW5nIHRoZSBleHByZXNzaW9uLCBhc3N1bWluZyB0aGF0XG4gKiB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhbiBhdHRyaWJ1dGUtdmFsdWUgcG9zaXRpb24uXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCIgXFx4MDlcXHgwYVxceDBjXFx4MGRcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjc3BhY2UtY2hhcmFjdGVyc1xuICpcbiAqIFwiXFwwLVxceDFGXFx4N0YtXFx4OUZcIiBhcmUgVW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnMsIHdoaWNoIGluY2x1ZGVzIGV2ZXJ5XG4gKiBzcGFjZSBjaGFyYWN0ZXIgZXhjZXB0IFwiIFwiLlxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIGNvbnRyb2wgY2hhcmFjdGVyLCBzcGFjZSBjaGFyYWN0ZXIsICgnKSxcbiAqICAgIChcIiksIFwiPlwiLCBcIj1cIiwgb3IgXCIvXCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4ID0gLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcIic+PS9dKykoWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikpJC87XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqXG4gKiBNYWluIGxpdC1odG1sIG1vZHVsZS5cbiAqXG4gKiBNYWluIGV4cG9ydHM6XG4gKlxuICogLSAgW1todG1sXV1cbiAqIC0gIFtbc3ZnXV1cbiAqIC0gIFtbcmVuZGVyXV1cbiAqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKiBAcHJlZmVycmVkXG4gKi9cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7IGRpcmVjdGl2ZSwgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2xpYi9kaXJlY3RpdmUuanMnO1xuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIGxpbmUgd2hlbiB3ZSBnZXQgTm9kZVBhcnQgbW92aW5nIG1ldGhvZHNcbmV4cG9ydCB7IHJlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7IG5vQ2hhbmdlLCBub3RoaW5nIH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQgeyBBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzSXRlcmFibGUsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydCB9IGZyb20gJy4vbGliL3BhcnRzLmpzJztcbmV4cG9ydCB7IHBhcnRzLCByZW5kZXIgfSBmcm9tICcuL2xpYi9yZW5kZXIuanMnO1xuZXhwb3J0IHsgdGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHsgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBjcmVhdGVNYXJrZXIsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzEuMS4yJyk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwiLy8gQ29tcG9uZW50c1xuZXhwb3J0IHsgUGFwZXIgfSBmcm9tICcuL2pzL2NvbXBvbmVudHMvcGFwZXIuanMnXG5leHBvcnQgeyBDYXJkIH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL2NhcmQuanMnXG5leHBvcnQgeyBMaW5rIH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL2xpbmsuanMnXG5leHBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2pzL2NvbXBvbmVudHMvYnV0dG9uLmpzJ1xuZXhwb3J0IHsgUHJlZm9ybWF0IH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL3ByZWZvcm1hdC5qcydcbmV4cG9ydCB7IEltYWdlIH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL2ltYWdlLmpzJ1xuZXhwb3J0IHsgQmFkZ2UgfSBmcm9tICcuL2pzL2NvbXBvbmVudHMvYmFkZ2UuanMnXG5leHBvcnQgeyBTbGlkZXNob3cgfSBmcm9tICcuL2pzL2NvbXBvbmVudHMvc2xpZGVzaG93LmpzJ1xuZXhwb3J0IHsgQ29kZSB9IGZyb20gJy4vanMvY29tcG9uZW50cy9jb2RlLmpzJ1xuZXhwb3J0IHsgSWNvbiB9IGZyb20gJy4vanMvY29tcG9uZW50cy9pY29uLmpzJ1xuZXhwb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi9qcy9jb21wb25lbnRzL2hpZ2hsaWdodC5qcydcbmV4cG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuL2pzL2NvbXBvbmVudHMvdG9vbHRpcC5qcydcblxuLy8gTGF5b3V0IENvbXBvbmVudHNcbmV4cG9ydCB7IEZsZXhCb3gsIEZsZXhJdGVtLCBGbGV4Q2VudGVyIH0gZnJvbSAnLi9qcy9sYXlvdXRzL2ZsZXguanMnXG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL2JhZGdlLnNjc3MnXG5cbkBjdXN0b21FbGVtZW50KCdlLWJhZGdlJylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9zcGFuPlxuICAgIGBcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc2Nzcy9idXR0b24uc2NzcydcblxuQGN1c3RvbUVsZW1lbnQoJ2UtYnV0dG9uJylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8qKiBHZW5lcmF0ZSB0aGUgYWN0aW9uIHRleHQgZm9yIHRoZSBsaW5rICovXG4gIGdldCBhY3Rpb25UZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXM/LnRpdGxlPy52YWx1ZSB8fCB0aGlzLmlubmVySFRNTFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGEgaHJlZj0ke3RoaXMuYXR0cmlidXRlcy5saW5rLnZhbHVlfSB0aXRsZT0ke3RoaXMuYWN0aW9uVGV4dH0gYXJpYS1sYWJlbD0ke3RoaXMuYWN0aW9uVGV4dH0+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYT5cbiAgICBgXG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3Njc3MvY2FyZC5zY3NzJ1xuXG5AY3VzdG9tRWxlbWVudCgnZS1jYXJkJylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxlLXBhcGVyPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxzbG90IG5hbWU9XCJsZWZ0LWljb25cIj48L3Nsb3Q+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1vdmVyZmxvd1wiIHRpdGxlPSR7dGhpcy5hdHRyaWJ1dGVzPy5oZWFkZXI/LnZhbHVlfT5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj4ke3RoaXMuYXR0cmlidXRlcz8uaGVhZGVyPy52YWx1ZX08L3Nsb3Q+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8c2xvdCBuYW1lPVwicmlnaHQtaWNvblwiPjwvc2xvdD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJoZWFkXCI+PC9zbG90PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNsb3QgbmFtZT1cInRhaWxcIj48L3Nsb3Q+XG4gICAgICA8L2UtcGFwZXI+XG4gICAgYFxuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCAnY29kZS1wcmV0dGlmeS9sb2FkZXIvcHJldHRpZnknXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc2Nzcy9jb2RlLnNjc3MnXG5cbkBjdXN0b21FbGVtZW50KCdlLWNvZGUnKVxuQHN0eWxlcyhzdHlsZSlcbmV4cG9ydCBjbGFzcyBDb2RlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcmV0dHkgPSBQUi5wcmV0dHlQcmludE9uZSh0aGlzLmlubmVySFRNTCwgdGhpcy5hdHRyaWJ1dGVzPy5sYW5ndWFnZT8udmFsdWUsIHRoaXMuYXR0cmlidXRlcz8ubGluZU51bWJlcnMgJiYgdHJ1ZSlcbiAgICByZXR1cm4gaHRtbGA8ZS1wcmVmb3JtYXQ+PGNvZGU+JHt1bnNhZmVIVE1MKHByZXR0eSl9PC9jb2RlPjwvZS1wcmVmb3JtYXQ+YFxuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL2hpZ2hsaWdodC5zY3NzJ1xuXG5AY3VzdG9tRWxlbWVudCgnZS1oaWdobGlnaHQnKVxuQHN0eWxlcyhzdHlsZSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPGVtPjxzbG90Pjwvc2xvdD48L2VtPmBcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL2ljb24uc2NzcydcblxuQGN1c3RvbUVsZW1lbnQoJ2UtaWNvbicpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIEljb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gRml4IGJ1ZyB3aXRoIGljb25zIGh0dHBzOi8vZ2l0aHViLmNvbS9tZG4vaW50ZXJhY3RpdmUtZXhhbXBsZXMvaXNzdWVzLzg4NyNpc3N1ZWNvbW1lbnQtNTI4MjA1MjczXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKClcbiAgICBsZXQgZm9udEZhY2VTaGVldCA9IGNzc2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250YXdlc29tZS13ZWJmb250LmVvdFwiKTtcbiAgICAgICAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcbiAgICAgICAgICAgICB1cmwoXCIvYXNzZXRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgdXJsKFwiL2Fzc2V0cy9mb250YXdlc29tZS13ZWJmb250LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgICAgICAgICB1cmwoXCIvYXNzZXRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLFxuICAgICAgICAgICAgIHVybChcIi9hc3NldHMvZm9udGF3ZXNvbWUtd2ViZm9udC5zdmcjZm9udGF3ZXNvbWVyZWd1bGFyXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgICAgIH1cbiAgICBgLnN0eWxlU2hlZXRcbiAgICBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMgPSBbIC4uLmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cywgZm9udEZhY2VTaGVldCBdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPGkgY2xhc3M9XCJmYSBmYS0ke3RoaXMuaW5uZXJIVE1MfSAke3RoaXMuYXR0cmlidXRlcz8uc3BpbiA/ICdmYS1zcGluJyA6ICdmYS1zdGF0aWMnfVwiPjwvaT5gXG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL2ltYWdlLnNjc3MnXG5cbmNvbnN0IFRSQU5TX1BORyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVFBQUFDMUhBd0NBQUFBQzBsRVFWUjRuR1A2endBQUFnY0JBcG9jTVhFQUFBQUFTVVZPUks1Q1lJST0nO1xuXG5AY3VzdG9tRWxlbWVudCgnZS1pbWFnZScpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIEltYWdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgQHByb3BlcnR5KCkgaW1hZ2UgPSBUUkFOU19QTkdcblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgLy8gdG9kbyBnZW5lcmF0ZSB0aGUgbGF6eSBsb2FkaW5nIG9mIHRoZSBpbWFnZSB2YWx1ZVxuICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmF0dHJpYnV0ZXMuc291cmNlLnZhbHVlXG4gIH1cblxuICAvKiogTmV2ZXIgZm9yZ2V0IHRoZSBhbHQgdGFnLCB1c2UgZmlsZSBuYW1lIGlmIGl0J3Mgbm90IHNwZWNpZmljZWQgKi9cbiAgZ2V0IGFsdFRhZygpIHtcbiAgICAvLyB0b2RvIHJlbW92ZSBxdWVyeSBwYXJhbWV0ZXJzIGZyb20gYWx0IGFuZCAjIHNlbGVjdG9yXG4gICAgbGV0IGFsdCA9IHRoaXMuYXR0cmlidXRlcz8uYWx0Py52YWx1ZVxuICAgIGxldCBsYXN0U2VwZXJhdG9yID0gdGhpcy5pbWFnZS5sYXN0SW5kZXhPZignLycpXG4gICAgaWYgKCFhbHQgJiYgbGFzdFNlcGVyYXRvciA+IDApIHtcbiAgICAgIGlmIChsYXN0U2VwZXJhdG9yID09IHRoaXMuaW1hZ2UubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyByZW1vdmUgaHR0cCBwcmVmaXggaWYgYW55XG4gICAgICAgIGFsdCA9IHRoaXMuaW1hZ2Uuc3Vic3RyKDAsIGxhc3RTZXBlcmF0b3IpLnJlcGxhY2UoL2h0dHAocyk/OlxcL1xcLy8sICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVtb3ZlIHN1ZmZpeCBpZiBhbnlcbiAgICAgICAgYWx0ID0gdGhpcy5pbWFnZS5zdWJzdHIobGFzdFNlcGVyYXRvciArIDEpLnJlcGxhY2UoL1xcLihbQS1aYS16XSkrLywgJycpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbHRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8aW1nIGFsdD0ke3RoaXMuYWx0VGFnfSBzcmM9JHt0aGlzLmltYWdlfT48L2ltZz5gXG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3Njc3MvbGluay5zY3NzJ1xuXG5AY3VzdG9tRWxlbWVudCgnZS1saW5rJylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgTGluayBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvKiogR2VuZXJhdGUgdGhlIGFjdGlvbiB0ZXh0IGZvciB0aGUgbGluayAqL1xuICBnZXQgYWN0aW9uVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzPy50aXRsZT8udmFsdWUgfHwgdGhpcy5pbm5lckhUTUxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxhIGhyZWY9JHt0aGlzLmF0dHJpYnV0ZXMubGluay52YWx1ZX0gdGl0bGU9JHt0aGlzLmFjdGlvblRleHR9IGFyaWEtbGFiZWw9JHt0aGlzLmFjdGlvblRleHR9PlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2E+XG4gICAgYFxuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL3BhcGVyLnNjc3MnXG5cbkBjdXN0b21FbGVtZW50KCdlLXBhcGVyJylcbkBzdHlsZXMoc3R5bGUpXG5leHBvcnQgY2xhc3MgUGFwZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2PlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGN1c3RvbUVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3Njc3MvcHJlZm9ybWF0LnNjc3MnXG5cbkBjdXN0b21FbGVtZW50KCdlLXByZWZvcm1hdCcpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIFByZWZvcm1hdCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8cHJlPjxzbG90Pjwvc2xvdD48L3ByZT5gXG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSAnbGl0LWVsZW1lbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL3NsaWRlc2hvdy5zY3NzJ1xuXG5jb25zdCBERUZBVUxUX0RFTEFZID0gNTAwMFxuXG5AY3VzdG9tRWxlbWVudCgnZS1zbGlkZXNob3cnKVxuQHN0eWxlcyhzdHlsZSlcbmV4cG9ydCBjbGFzcyBTbGlkZXNob3cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgaW5kZXggPSAwXG4gIGxlbmd0aCA9IHRoaXMuY2hpbGRyZW4/Lmxlbmd0aCB8fCAwXG4gIGRlbGF5ID0gTnVtYmVyKHRoaXMuYXR0cmlidXRlcz8uZGVsYXk/LnZhbHVlIHx8IERFRkFVTFRfREVMQVkpXG4gIEBwcm9wZXJ0eSgpIGltYWdlID0gdGhpcy5jaGlsZHJlblswXT8uY2xvbmVOb2RlKClcbiAgQHByb3BlcnR5KCkgcGF1c2UgPSAhKHRoaXMuY2hpbGRyZW4/LmF1dG9QbGF5ICYmIHRydWUpXG5cbiAgYXN5bmMgbmV4dCgpIHtcbiAgICBsZXQgaSA9IHRoaXMuaW5kZXhcbiAgICB0aGlzLml0ZW0oKytpID49IHRoaXMubGVuZ3RoID8gMCA6IGkpXG4gIH1cblxuICBhc3luYyBwcmV2KCkge1xuICAgIGxldCBpID0gdGhpcy5pbmRleFxuICAgIHRoaXMuaXRlbSgtLWkgPD0gLTEgPyB0aGlzLmxlbmd0aCAtIDEgOiBpKVxuICB9XG5cbiAgaXRlbShpKSB7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIGkgPSAwXG4gICAgfVxuICAgIHRoaXMuaW5kZXggPSBpXG4gICAgdGhpcy5pbWFnZSA9IHRoaXMuY2hpbGRyZW5bdGhpcy5pbmRleF0/LmNsb25lTm9kZSgpXG4gICAgLy8gVHJpZ2dlcmVkIHdoZW4gdGhlIGltYWdlIGhhcyBiZWVuIGNoYW5nZWRcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VkLWltYWdlJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgfSkpXG4gIH1cblxuICBhc3luYyB0b2dnbGVQYXVzZSgpIHtcbiAgICAvLyBPbmx5IGFsbG93IHBhdXNpbmcgd2hlbiB0aGUgZGVsYXkgPiAwXG4gICAgaWYgKHRoaXMuZGVsYXkgPiAwKSB7XG4gICAgICB0aGlzLnBhdXNlID0gIXRoaXMucGF1c2VcbiAgICAgIC8vIFRyaWdnZXJlZCB3aGVuIHRoZSBpbWFnZSBoYXMgYmVlbiBwYXVzZWQgb3IgcmVzdW1lZCBwbGF5aW5nXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYXVzZWQnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHBhdXNlOiB0aGlzLnBhdXNlLFxuICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgICB9LFxuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAvLyBDcmVhdGUgdGhlIGludGVydmFsIHRpbWVyIGlmIGl0cyBncmVhdG9yIHRoYW4gMFxuICAgIGlmICh0aGlzLmRlbGF5ID4gMCkge1xuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMucGF1c2UpIHtcbiAgICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmRlbGF5KVxuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKClcbiAgICAvLyBDbGVhciB0aGUgaW50ZXJ2YWwgdGltZXJcbiAgICBpZiAodGhpcy5pbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwic2xpZGVzaG93XCIgc3R5bGU9JHt0aGlzLmF0dHJpYnV0ZXM/LnN0eWxlPy52YWx1ZX0+XG4gICAgICAgIDxjb250ZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPiR7dGhpcy5pbWFnZX08L2Rpdj5cbiAgICAgICAgICA8bmF2IGNsYXNzPSR7dGhpcy5hdHRyaWJ1dGVzPy5oaWRlQ29udHJvbHMgPyAnaGlkZScgOiAnc2hvdyd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1zXCI+XG4gICAgICAgICAgICAgICR7WyAuLi5BcnJheSh0aGlzLmxlbmd0aCkua2V5cygpIF0ubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgaW5kZXggaXRlbSBpcyB0aGUgcGxheSBwYXVzZSB0b2dnbGVcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGVyZSBpcyBubyBkZWxheSBqdXN0IHNob3cgc3RhdGljIGltYWdlcyBsaWtlIGEgcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxheSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJpdGVtIHBsYXlcIj48L2Rpdj5gXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPSR7dGhpcy5wYXVzZSA/ICdpdGVtIHBhdXNlJyA6ICdpdGVtIHBsYXknfSBAY2xpY2s9JHt0aGlzLnRvZ2dsZVBhdXNlfT48L2Rpdj5gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9J2l0ZW0nIEBjbGljaz0keygpID0+IHRoaXMuaXRlbShpKX0+PC9kaXY+YFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgbGVmdFwiIEBjbGljaz0ke3RoaXMucHJldn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCByaWdodFwiIEBjbGljaz0ke3RoaXMubmV4dH0+PC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIGBcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc2Nzcy90b29sdGlwLnNjc3MnXG5cbkBjdXN0b21FbGVtZW50KCdlLXRvb2x0aXAnKVxuQHN0eWxlcyhzdHlsZSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgLyoqIEdldCB0aGUgY29weSBvZiB0aGUgdG9vbHRpcCBpZiBzbG90IGlzIG5vdCBzbG90dGVkICovXG4gIGdldCB0b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXM/LnRvb2x0aXA/LnZhbHVlXG4gIH1cblxuICAvKiogR2V0IHRoZSBkaXJlY3Rpb24gb2YgdGhlIHRvb2x0aXAgZGVmYXVsdHMgdG8gYm90dG9tICovXG4gIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcz8uZGlyZWN0aW9uPy52YWx1ZSB8fCAnYm90dG9tJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHNwYW4gY2xhc3M9XCJ3cmFwcGVyICR7dGhpcy5kaXJlY3Rpb259XCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPHNsb3QgbmFtZT1cInRvb2x0aXBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXBcIj4ke3RoaXMudG9vbHRpcH08L3NwYW4+XG4gICAgICAgIDwvc2xvdD5cbiAgICAgIDwvc3Bhbj5cbiAgICBgXG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcywgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50J1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zY3NzL2ZsZXguc2NzcydcblxuLyoqIFRoZSB3cmFwcGVyIHRoYXQgZGVmaW5lcyBhIGZsZXggYm94IGFyZWEsIGFuZCByZW5kZXJzIHRoZSBjaGlsZHJlbiAqL1xuQGN1c3RvbUVsZW1lbnQoJ2UtZmxleC1ib3gnKVxuQHN0eWxlcyhzdHlsZSlcbmV4cG9ydCBjbGFzcyBGbGV4Qm94IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8qKiBBZGQgZmxleCBwcm9wZXJ0aWVzIG9uIHRoZSBjb250ZW50IGVsZW1lbnQgd3JhcHBlciAqL1xuICB1cGRhdGVkKCkge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5zaGFkb3dSb290LmNoaWxkcmVuWzBdXG4gICAgY29udGVudC5zdHlsZVsnZmxleC1kaXJlY3Rpb24nXSA9IHRoaXMuYXR0cmlidXRlcz8uY29sdW1uID8gJ2NvbHVtbicgOiAncm93J1xuICAgIGNvbnRlbnQuc3R5bGVbJ2ZsZXgtd3JhcCddID0gdGhpcy5hdHRyaWJ1dGVzPy53cmFwID8gJ3dyYXAnIDogJ25vd3JhcCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxjb250ZW50PlxuICAgICAgICAke0FycmF5LmZyb20odGhpcy5jaGlsZHJlbil9XG4gICAgICA8L2NvbnRlbnQ+XG4gICAgYFxuICB9XG59XG5cbi8qKiBEZWZpbmVzIHRoZSBmbGV4IGl0ZW0gdGhhdCBqdXN0IHJlbmRlcnMgdGhlIHNsb3R0ZWQgY29udGVudCAqL1xuQGN1c3RvbUVsZW1lbnQoJ2UtZmxleC1pdGVtJylcbmV4cG9ydCBjbGFzcyBGbGV4SXRlbSBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvKiogQWRkIGZsZXggcHJvcGVydGllcyBvbiBzZWxmICovXG4gIHVwZGF0ZWQoKSB7XG4gICAgdGhpcy5zdHlsZVsnZmxleC1ncm93J10gPSBOdW1iZXIodGhpcy5hdHRyaWJ1dGVzPy5ncm93Py52YWx1ZSB8fCAxKVxuICAgIHRoaXMuc3R5bGVbJ2ZsZXgtc2hyaW5rJ10gPSBOdW1iZXIodGhpcy5hdHRyaWJ1dGVzPy5zaHJpbms/LnZhbHVlIHx8IDEpXG4gICAgdGhpcy5zdHlsZVsnb3JkZXInXSA9IE51bWJlcih0aGlzLmF0dHJpYnV0ZXM/Lm9yZGVyPy52YWx1ZSB8fCAwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gXG4gIH1cbn1cblxuLyoqIENlbnRlciBpdGVtcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBib3ggYm90aCB2ZXJ0aWNhbCBhbmQgaG9yem9uaWFsICovXG5AY3VzdG9tRWxlbWVudCgnZS1mbGV4LWNlbnRlcicpXG5Ac3R5bGVzKHN0eWxlKVxuZXhwb3J0IGNsYXNzIEZsZXhDZW50ZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGNvbnRlbnQgY2xhc3M9XCJjZW50ZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9jb250ZW50PlxuICAgIGBcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzLCB1bnNhZmVDU1MsIENTU1Jlc3VsdCB9IGZyb20gJ2xpdC1lbGVtZW50J1xuXG5cbi8qKiBUYWtlcyB0aGUgaW1wb3J0IG9iamVjdCBmb3Igc2NzcyBmaWxlcyBhbmQgaW5qZWN0IGl0IGludG8gdGhlIGN1c3RvbSBlbGVtZW50ICovXG5leHBvcnQgY29uc3QgX3N0eWxlcyA9IHN0eWxlID0+IGNzc2Ake3Vuc2FmZUNTUyhzdHlsZVswXVsxXSl9YFxuXG4vKiogQ3JlYXRlcyBhIGRlY29yYXRvciBmb3IgdGhlIGNsYXNzICovXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKC4uLnN0eWxlcykge1xuICAvLyB0aGlzIGlzIHRoZSBlcXVhbGl2YW50IG9mIGRvaW5nIGluIHRoZSBjbGFzc1xuICAvLyBzdGF0aWMgc3R5bGVzID0gX3N0eWxlcyhzdHlsZSlcbiAgcmV0dXJuIGRlc2NyaXB0b3IgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kZXNjcmlwdG9yLFxuICAgICAgZWxlbWVudHM6IFsgLi4uZGVzY3JpcHRvci5lbGVtZW50cywge1xuICAgICAgICBraW5kOiAnZmllbGQnLFxuICAgICAgICBwbGFjZW1lbnQ6ICdzdGF0aWMnLFxuICAgICAgICBrZXk6ICdzdHlsZXMnLFxuICAgICAgICBkZXNjcmlwdG9yOiB7fSxcbiAgICAgICAgaW5pdGlhbGl6ZXI6ICgpID0+IHN0eWxlcy5tYXAoc3R5bGUgPT4gc3R5bGUgaW5zdGFuY2VvZiBDU1NSZXN1bHQgPyBzdHlsZSA6IF9zdHlsZXMoc3R5bGUpKVxuICAgICAgfV1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwic3BhbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg5O1xcbiAgcGFkZGluZzogMnB4IDNweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4ICNhYWE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuICBzcGFuIHNsb3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIG1hcmdpbjogMXB4OyB9XFxuICBzcGFuIDo6c2xvdHRlZCgqKSB7XFxuICAgIG1hcmdpbjogMCAycHg7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtb3ZlcmZsb3cge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5vdmVyZmxvdyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbmEge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjb2xvcjogI2VlZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMmU2ZGE0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcbiAgYSA6OnNsb3R0ZWQoKikge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIG1hcmdpbjogMCA1cHg7IH1cXG4gIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiAjZWVlOyB9XFxuICBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4NjA5MDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjA0ZDc0OyB9XFxuICBhOmFjdGl2ZSwgYTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3MmIzO1xcbiAgICBib3JkZXItY29sb3I6ICMxZDg0Y2Y7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtb3ZlcmZsb3cge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5vdmVyZmxvdyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbmUtcGFwZXIgaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzc3NzsgfVxcbiAgZS1wYXBlciBoZWFkZXIgaDMge1xcbiAgICBjb2xvcjogIzMzN2FiNztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IGF1dG8gMnB4O1xcbiAgICBwYWRkaW5nOiAwIDNweDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cXG5lLXBhcGVyID4gcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBsbiB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbkBtZWRpYSBzY3JlZW4ge1xcbiAgLnN0ciB7XFxuICAgIGNvbG9yOiAjMDgwOyB9XFxuICAua3dkIHtcXG4gICAgY29sb3I6ICMwMDg7IH1cXG4gIC5jb20ge1xcbiAgICBjb2xvcjogIzgwMDsgfVxcbiAgLnR5cCB7XFxuICAgIGNvbG9yOiAjNjA2OyB9XFxuICAubGl0IHtcXG4gICAgY29sb3I6ICMwNjY7IH1cXG4gIC5wdW4sIC5vcG4sIC5jbG8ge1xcbiAgICBjb2xvcjogIzY2MDsgfVxcbiAgLnRhZyB7XFxuICAgIGNvbG9yOiAjMDA4OyB9XFxuICAuYXRuIHtcXG4gICAgY29sb3I6ICM2MDY7IH1cXG4gIC5hdHYge1xcbiAgICBjb2xvcjogIzA4MDsgfVxcbiAgLmRlYywgLnZhciB7XFxuICAgIGNvbG9yOiAjNjA2OyB9XFxuICAuZnVuIHtcXG4gICAgY29sb3I6IHJlZDsgfSB9XFxuXFxuQG1lZGlhIHByaW50LCBwcm9qZWN0aW9uIHtcXG4gIC5zdHIge1xcbiAgICBjb2xvcjogIzA2MDsgfVxcbiAgLmt3ZCB7XFxuICAgIGNvbG9yOiAjMDA2O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgLmNvbSB7XFxuICAgIGNvbG9yOiAjNjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gIC50eXAge1xcbiAgICBjb2xvcjogIzQwNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIC5saXQge1xcbiAgICBjb2xvcjogIzA0NDsgfVxcbiAgLnB1biwgLm9wbiwgLmNsbyB7XFxuICAgIGNvbG9yOiAjNDQwOyB9XFxuICAudGFnIHtcXG4gICAgY29sb3I6ICMwMDY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAuYXRuIHtcXG4gICAgY29sb3I6ICM0MDQ7IH1cXG4gIC5hdHYge1xcbiAgICBjb2xvcjogIzA2MDsgfSB9XFxuXFxucHJlLnByZXR0eXByaW50IHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7IH1cXG5cXG5vbC5saW5lbnVtcyB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbmxpLkwwLCBsaS5MMSwgbGkuTDIsIGxpLkwzLCBsaS5MNSwgbGkuTDYsIGxpLkw3LCBsaS5MOCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG5cXG5saS5MMSwgbGkuTDMsIGxpLkw1LCBsaS5MNywgbGkuTDkge1xcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbCAhaW1wb3J0YW50OyB9XFxuICBsaS5MMCwgbGkuTDEsIGxpLkwyLCBsaS5MMywgbGkuTDUsIGxpLkw2LCBsaS5MNywgbGkuTDgge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWwgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTsgfVxcbiAgY29udGVudC5jZW50ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgY29udGVudCBlLWZsZXgtaXRlbSB7XFxuICAgIGZsZXg6IDE7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtb3ZlcmZsb3cge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5vdmVyZmxvdyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbmVtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Njc4OTk7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbjogMXB4IDA7XFxuICBjb2xvcjogI2ZlZmVmZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcbiAgZW0gOjpzbG90dGVkKCopIHtcXG4gICAgLS1jb2xvcjogI2VmZWZlZjtcXG4gICAgLS1jb2xvci1ob3ZlcjogI2VlZTtcXG4gICAgLS1jb2xvci1hY3RpdmU6ICNmZmY7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiZm9udC1hd2Vzb21lL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90P3Y9NC43LjBcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IGdldFVybChyZXF1aXJlKFwiZm9udC1hd2Vzb21lL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90XCIpICsgXCI/I2llZml4JnY9NC43LjBcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gZ2V0VXJsKHJlcXVpcmUoXCJmb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmMj92PTQuNy4wXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSBnZXRVcmwocmVxdWlyZShcImZvbnQtYXdlc29tZS9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmY/dj00LjcuMFwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX180X19fID0gZ2V0VXJsKHJlcXVpcmUoXCJmb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC50dGY/dj00LjcuMFwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX181X19fID0gZ2V0VXJsKHJlcXVpcmUoXCJmb250LWF3ZXNvbWUvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5zdmc/dj00LjcuMFwiKSArIFwiI2ZvbnRhd2Vzb21lcmVndWxhclwiKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiFcXG4gKiAgRm9udCBBd2Vzb21lIDQuNy4wIGJ5IEBkYXZlZ2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8gLSBAZm9udGF3ZXNvbWVcXG4gKiAgTGljZW5zZSAtIGh0dHA6Ly9mb250YXdlc29tZS5pby9saWNlbnNlIChGb250OiBTSUwgT0ZMIDEuMSwgQ1NTOiBNSVQgTGljZW5zZSlcXG4gKi9cXG4vKiBGT05UIFBBVEhcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG4uZmEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cXG5cXG4vKiBtYWtlcyB0aGUgZm9udCAzMyUgbGFyZ2VyIHJlbGF0aXZlIHRvIHRoZSBpY29uIGNvbnRhaW5lciAqL1xcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IDEuMzMzMzNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTE1JTsgfVxcblxcbi5mYS0yeCB7XFxuICBmb250LXNpemU6IDJlbTsgfVxcblxcbi5mYS0zeCB7XFxuICBmb250LXNpemU6IDNlbTsgfVxcblxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTsgfVxcblxcbi5mYS01eCB7XFxuICBmb250LXNpemU6IDVlbTsgfVxcblxcbi5mYS1mdyB7XFxuICB3aWR0aDogMS4yODU3MWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmZhLXVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAyLjE0Mjg2ZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG4gIC5mYS11bCA+IGxpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmZhLWxpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0yLjE0Mjg2ZW07XFxuICB3aWR0aDogMi4xNDI4NmVtO1xcbiAgdG9wOiAwLjE0Mjg2ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5mYS1saS5mYS1sZyB7XFxuICAgIGxlZnQ6IC0xLjg1NzE0ZW07IH1cXG5cXG4uZmEtYm9yZGVyIHtcXG4gIHBhZGRpbmc6IC4yZW0gLjI1ZW0gLjE1ZW07XFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogLjFlbTsgfVxcblxcbi5mYS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4uZmEtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4uZmEuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogLjNlbTsgfVxcblxcbi5mYS5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAuM2VtOyB9XFxuXFxuLyogRGVwcmVjYXRlZCBhcyBvZiA0LjQuMCAqL1xcbi5wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4uZmEucHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogLjNlbTsgfVxcblxcbi5mYS5wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAuM2VtOyB9XFxuXFxuLmZhLXNwaW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjsgfVxcblxcbi5mYS1wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG4gIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpOyB9IH1cXG5cXG4uZmEtcm90YXRlLTkwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IH1cXG5cXG4uZmEtcm90YXRlLTE4MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuXFxuLmZhLXJvdGF0ZS0yNzAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxcblxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7IH1cXG5cXG4uZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTsgfVxcblxcbjpyb290IC5mYS1yb3RhdGUtOTAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0xODAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0yNzAsXFxuOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCxcXG46cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICBmaWx0ZXI6IG5vbmU7IH1cXG5cXG4uZmEtc3RhY2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG5cXG4uZmEtc3RhY2stMXgsIC5mYS1zdGFjay0yeCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uZmEtc3RhY2stMXgge1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG4uZmEtc3RhY2stMngge1xcbiAgZm9udC1zaXplOiAyZW07IH1cXG5cXG4uZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi8qIEZvbnQgQXdlc29tZSB1c2VzIHRoZSBVbmljb2RlIFByaXZhdGUgVXNlIEFyZWEgKFBVQSkgdG8gZW5zdXJlIHNjcmVlblxcbiAgIHJlYWRlcnMgZG8gbm90IHJlYWQgb2ZmIHJhbmRvbSBjaGFyYWN0ZXJzIHRoYXQgcmVwcmVzZW50IGljb25zICovXFxuLmZhLWdsYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CAXFxcIjsgfVxcblxcbi5mYS1tdXNpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AgVxcXCI7IH1cXG5cXG4uZmEtc2VhcmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CCXFxcIjsgfVxcblxcbi5mYS1lbnZlbG9wZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CDXFxcIjsgfVxcblxcbi5mYS1oZWFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AhFxcXCI7IH1cXG5cXG4uZmEtc3RhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AhVxcXCI7IH1cXG5cXG4uZmEtc3Rhci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CGXFxcIjsgfVxcblxcbi5mYS11c2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CHXFxcIjsgfVxcblxcbi5mYS1maWxtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CIXFxcIjsgfVxcblxcbi5mYS10aC1sYXJnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AiVxcXCI7IH1cXG5cXG4uZmEtdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgIpcXFwiOyB9XFxuXFxuLmZhLXRoLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgItcXFwiOyB9XFxuXFxuLmZhLWNoZWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CMXFxcIjsgfVxcblxcbi5mYS1yZW1vdmU6YmVmb3JlLFxcbi5mYS1jbG9zZTpiZWZvcmUsXFxuLmZhLXRpbWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CNXFxcIjsgfVxcblxcbi5mYS1zZWFyY2gtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AjlxcXCI7IH1cXG5cXG4uZmEtc2VhcmNoLW1pbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CQXFxcIjsgfVxcblxcbi5mYS1wb3dlci1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgJFcXFwiOyB9XFxuXFxuLmZhLXNpZ25hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AklxcXCI7IH1cXG5cXG4uZmEtZ2VhcjpiZWZvcmUsXFxuLmZhLWNvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ak1xcXCI7IH1cXG5cXG4uZmEtdHJhc2gtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AlFxcXCI7IH1cXG5cXG4uZmEtaG9tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AlVxcXCI7IH1cXG5cXG4uZmEtZmlsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CWXFxcIjsgfVxcblxcbi5mYS1jbG9jay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CXXFxcIjsgfVxcblxcbi5mYS1yb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CYXFxcIjsgfVxcblxcbi5mYS1kb3dubG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AmVxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctY2lyY2xlLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AmlxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctY2lyY2xlLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgJtcXFwiOyB9XFxuXFxuLmZhLWluYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CcXFxcIjsgfVxcblxcbi5mYS1wbGF5LWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CdXFxcIjsgfVxcblxcbi5mYS1yb3RhdGUtcmlnaHQ6YmVmb3JlLFxcbi5mYS1yZXBlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgJ5cXFwiOyB9XFxuXFxuLmZhLXJlZnJlc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgKFcXFwiOyB9XFxuXFxuLmZhLWxpc3QtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CiXFxcIjsgfVxcblxcbi5mYS1sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CjXFxcIjsgfVxcblxcbi5mYS1mbGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CkXFxcIjsgfVxcblxcbi5mYS1oZWFkcGhvbmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ClXFxcIjsgfVxcblxcbi5mYS12b2x1bWUtb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CmXFxcIjsgfVxcblxcbi5mYS12b2x1bWUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ap1xcXCI7IH1cXG5cXG4uZmEtdm9sdW1lLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CoXFxcIjsgfVxcblxcbi5mYS1xcmNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgKlcXFwiOyB9XFxuXFxuLmZhLWJhcmNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgKpcXFwiOyB9XFxuXFxuLmZhLXRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Aq1xcXCI7IH1cXG5cXG4uZmEtdGFnczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArFxcXCI7IH1cXG5cXG4uZmEtYm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ArVxcXCI7IH1cXG5cXG4uZmEtYm9va21hcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgK5cXFwiOyB9XFxuXFxuLmZhLXByaW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74CvXFxcIjsgfVxcblxcbi5mYS1jYW1lcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLBcXFwiOyB9XFxuXFxuLmZhLWZvbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLFcXFwiOyB9XFxuXFxuLmZhLWJvbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLJcXFwiOyB9XFxuXFxuLmZhLWl0YWxpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+As1xcXCI7IH1cXG5cXG4uZmEtdGV4dC1oZWlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLRcXFwiOyB9XFxuXFxuLmZhLXRleHQtd2lkdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLVcXFwiOyB9XFxuXFxuLmZhLWFsaWduLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLZcXFwiOyB9XFxuXFxuLmZhLWFsaWduLWNlbnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+At1xcXCI7IH1cXG5cXG4uZmEtYWxpZ24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLhcXFwiOyB9XFxuXFxuLmZhLWFsaWduLWp1c3RpZnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLlcXFwiOyB9XFxuXFxuLmZhLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLpcXFwiOyB9XFxuXFxuLmZhLWRlZGVudDpiZWZvcmUsXFxuLmZhLW91dGRlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgLtcXFwiOyB9XFxuXFxuLmZhLWluZGVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+AvFxcXCI7IH1cXG5cXG4uZmEtdmlkZW8tY2FtZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74C9XFxcIjsgfVxcblxcbi5mYS1waG90bzpiZWZvcmUsXFxuLmZhLWltYWdlOmJlZm9yZSxcXG4uZmEtcGljdHVyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74C+XFxcIjsgfVxcblxcbi5mYS1wZW5jaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgYBcXFwiOyB9XFxuXFxuLmZhLW1hcC1tYXJrZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgYFcXFwiOyB9XFxuXFxuLmZhLWFkanVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BglxcXCI7IH1cXG5cXG4uZmEtdGludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bg1xcXCI7IH1cXG5cXG4uZmEtZWRpdDpiZWZvcmUsXFxuLmZhLXBlbmNpbC1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BhFxcXCI7IH1cXG5cXG4uZmEtc2hhcmUtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgYVcXFwiOyB9XFxuXFxuLmZhLWNoZWNrLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GGXFxcIjsgfVxcblxcbi5mYS1hcnJvd3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgYdcXFwiOyB9XFxuXFxuLmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgYhcXFwiOyB9XFxuXFxuLmZhLWZhc3QtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgYlcXFwiOyB9XFxuXFxuLmZhLWJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GKXFxcIjsgfVxcblxcbi5mYS1wbGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GLXFxcIjsgfVxcblxcbi5mYS1wYXVzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BjFxcXCI7IH1cXG5cXG4uZmEtc3RvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BjVxcXCI7IH1cXG5cXG4uZmEtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BjlxcXCI7IH1cXG5cXG4uZmEtZmFzdC1mb3J3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GQXFxcIjsgfVxcblxcbi5mYS1zdGVwLWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZFcXFwiOyB9XFxuXFxuLmZhLWVqZWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GSXFxcIjsgfVxcblxcbi5mYS1jaGV2cm9uLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZNcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZRcXFwiOyB9XFxuXFxuLmZhLXBsdXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GVXFxcIjsgfVxcblxcbi5mYS1taW51cy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZZcXFwiOyB9XFxuXFxuLmZhLXRpbWVzLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bl1xcXCI7IH1cXG5cXG4uZmEtY2hlY2stY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GYXFxcIjsgfVxcblxcbi5mYS1xdWVzdGlvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZlcXFwiOyB9XFxuXFxuLmZhLWluZm8tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GaXFxcIjsgfVxcblxcbi5mYS1jcm9zc2hhaXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GbXFxcIjsgfVxcblxcbi5mYS10aW1lcy1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BnFxcXCI7IH1cXG5cXG4uZmEtY2hlY2stY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgZ1cXFwiOyB9XFxuXFxuLmZhLWJhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BnlxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BoFxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgaFcXFwiOyB9XFxuXFxuLmZhLWFycm93LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GiXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GjXFxcIjsgfVxcblxcbi5mYS1tYWlsLWZvcndhcmQ6YmVmb3JlLFxcbi5mYS1zaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BpFxcXCI7IH1cXG5cXG4uZmEtZXhwYW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GlXFxcIjsgfVxcblxcbi5mYS1jb21wcmVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BplxcXCI7IH1cXG5cXG4uZmEtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bp1xcXCI7IH1cXG5cXG4uZmEtbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgahcXFwiOyB9XFxuXFxuLmZhLWFzdGVyaXNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GpXFxcIjsgfVxcblxcbi5mYS1leGNsYW1hdGlvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgapcXFwiOyB9XFxuXFxuLmZhLWdpZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgatcXFwiOyB9XFxuXFxuLmZhLWxlYWY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgaxcXFwiOyB9XFxuXFxuLmZhLWZpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvga1cXFwiOyB9XFxuXFxuLmZhLWV5ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BrlxcXCI7IH1cXG5cXG4uZmEtZXllLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GwXFxcIjsgfVxcblxcbi5mYS13YXJuaW5nOmJlZm9yZSxcXG4uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbFcXFwiOyB9XFxuXFxuLmZhLXBsYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74GyXFxcIjsgfVxcblxcbi5mYS1jYWxlbmRhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Bs1xcXCI7IH1cXG5cXG4uZmEtcmFuZG9tOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74G0XFxcIjsgfVxcblxcbi5mYS1jb21tZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74G1XFxcIjsgfVxcblxcbi5mYS1tYWduZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbZcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgbdcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BuFxcXCI7IH1cXG5cXG4uZmEtcmV0d2VldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BuVxcXCI7IH1cXG5cXG4uZmEtc2hvcHBpbmctY2FydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BulxcXCI7IH1cXG5cXG4uZmEtZm9sZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74G7XFxcIjsgfVxcblxcbi5mYS1mb2xkZXItb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+BvFxcXCI7IH1cXG5cXG4uZmEtYXJyb3dzLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgb1cXFwiOyB9XFxuXFxuLmZhLWFycm93cy1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74G+XFxcIjsgfVxcblxcbi5mYS1iYXItY2hhcnQtbzpiZWZvcmUsXFxuLmZhLWJhci1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CgFxcXCI7IH1cXG5cXG4uZmEtdHdpdHRlci1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgoFcXFwiOyB9XFxuXFxuLmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CglxcXCI7IH1cXG5cXG4uZmEtY2FtZXJhLXJldHJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KDXFxcIjsgfVxcblxcbi5mYS1rZXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgoRcXFwiOyB9XFxuXFxuLmZhLWdlYXJzOmJlZm9yZSxcXG4uZmEtY29nczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ChVxcXCI7IH1cXG5cXG4uZmEtY29tbWVudHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgoZcXFwiOyB9XFxuXFxuLmZhLXRodW1icy1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KHXFxcIjsgfVxcblxcbi5mYS10aHVtYnMtby1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KIXFxcIjsgfVxcblxcbi5mYS1zdGFyLWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgolcXFwiOyB9XFxuXFxuLmZhLWhlYXJ0LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgopcXFwiOyB9XFxuXFxuLmZhLXNpZ24tb3V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KLXFxcIjsgfVxcblxcbi5mYS1saW5rZWRpbi1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgoxcXFwiOyB9XFxuXFxuLmZhLXRodW1iLXRhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgo1cXFwiOyB9XFxuXFxuLmZhLWV4dGVybmFsLWxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgo5cXFwiOyB9XFxuXFxuLmZhLXNpZ24taW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgpBcXFwiOyB9XFxuXFxuLmZhLXRyb3BoeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CkVxcXCI7IH1cXG5cXG4uZmEtZ2l0aHViLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CklxcXCI7IH1cXG5cXG4uZmEtdXBsb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KTXFxcIjsgfVxcblxcbi5mYS1sZW1vbi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KUXFxcIjsgfVxcblxcbi5mYS1waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ClVxcXCI7IH1cXG5cXG4uZmEtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgpZcXFwiOyB9XFxuXFxuLmZhLWJvb2ttYXJrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgpdcXFwiOyB9XFxuXFxuLmZhLXBob25lLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CmFxcXCI7IH1cXG5cXG4uZmEtdHdpdHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CmVxcXCI7IH1cXG5cXG4uZmEtZmFjZWJvb2stZjpiZWZvcmUsXFxuLmZhLWZhY2Vib29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KaXFxcIjsgfVxcblxcbi5mYS1naXRodWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgptcXFwiOyB9XFxuXFxuLmZhLXVubG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CnFxcXCI7IH1cXG5cXG4uZmEtY3JlZGl0LWNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgp1cXFwiOyB9XFxuXFxuLmZhLWZlZWQ6YmVmb3JlLFxcbi5mYS1yc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgp5cXFwiOyB9XFxuXFxuLmZhLWhkZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KgXFxcIjsgfVxcblxcbi5mYS1idWxsaG9ybjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CoVxcXCI7IH1cXG5cXG4uZmEtYmVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ds1xcXCI7IH1cXG5cXG4uZmEtY2VydGlmaWNhdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgqNcXFwiOyB9XFxuXFxuLmZhLWhhbmQtby1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CpFxcXCI7IH1cXG5cXG4uZmEtaGFuZC1vLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgqVcXFwiOyB9XFxuXFxuLmZhLWhhbmQtby11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CplxcXCI7IH1cXG5cXG4uZmEtaGFuZC1vLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgqdcXFwiOyB9XFxuXFxuLmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KoXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgqlcXFwiOyB9XFxuXFxuLmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CqlxcXCI7IH1cXG5cXG4uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgqtcXFwiOyB9XFxuXFxuLmZhLWdsb2JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KsXFxcIjsgfVxcblxcbi5mYS13cmVuY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgq1cXFwiOyB9XFxuXFxuLmZhLXRhc2tzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74KuXFxcIjsgfVxcblxcbi5mYS1maWx0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgrBcXFwiOyB9XFxuXFxuLmZhLWJyaWVmY2FzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CsVxcXCI7IH1cXG5cXG4uZmEtYXJyb3dzLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+CslxcXCI7IH1cXG5cXG4uZmEtZ3JvdXA6YmVmb3JlLFxcbi5mYS11c2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DgFxcXCI7IH1cXG5cXG4uZmEtY2hhaW46YmVmb3JlLFxcbi5mYS1saW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OBXFxcIjsgfVxcblxcbi5mYS1jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DglxcXCI7IH1cXG5cXG4uZmEtZmxhc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg4NcXFwiOyB9XFxuXFxuLmZhLWN1dDpiZWZvcmUsXFxuLmZhLXNjaXNzb3JzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OEXFxcIjsgfVxcblxcbi5mYS1jb3B5OmJlZm9yZSxcXG4uZmEtZmlsZXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DhVxcXCI7IH1cXG5cXG4uZmEtcGFwZXJjbGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OGXFxcIjsgfVxcblxcbi5mYS1zYXZlOmJlZm9yZSxcXG4uZmEtZmxvcHB5LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg4dcXFwiOyB9XFxuXFxuLmZhLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DiFxcXCI7IH1cXG5cXG4uZmEtbmF2aWNvbjpiZWZvcmUsXFxuLmZhLXJlb3JkZXI6YmVmb3JlLFxcbi5mYS1iYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OJXFxcIjsgfVxcblxcbi5mYS1saXN0LXVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OKXFxcIjsgfVxcblxcbi5mYS1saXN0LW9sOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OLXFxcIjsgfVxcblxcbi5mYS1zdHJpa2V0aHJvdWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OMXFxcIjsgfVxcblxcbi5mYS11bmRlcmxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg41cXFwiOyB9XFxuXFxuLmZhLXRhYmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OOXFxcIjsgfVxcblxcbi5mYS1tYWdpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DkFxcXCI7IH1cXG5cXG4uZmEtdHJ1Y2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5FcXFwiOyB9XFxuXFxuLmZhLXBpbnRlcmVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DklxcXCI7IH1cXG5cXG4uZmEtcGludGVyZXN0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dk1xcXCI7IH1cXG5cXG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OUXFxcIjsgfVxcblxcbi5mYS1nb29nbGUtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DlVxcXCI7IH1cXG5cXG4uZmEtbW9uZXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5ZcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg5dcXFwiOyB9XFxuXFxuLmZhLWNhcmV0LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OYXFxcIjsgfVxcblxcbi5mYS1jYXJldC1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OZXFxcIjsgfVxcblxcbi5mYS1jYXJldC1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DmlxcXCI7IH1cXG5cXG4uZmEtY29sdW1uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Dm1xcXCI7IH1cXG5cXG4uZmEtdW5zb3J0ZWQ6YmVmb3JlLFxcbi5mYS1zb3J0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OcXFxcIjsgfVxcblxcbi5mYS1zb3J0LWRvd246YmVmb3JlLFxcbi5mYS1zb3J0LWRlc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg51cXFwiOyB9XFxuXFxuLmZhLXNvcnQtdXA6YmVmb3JlLFxcbi5mYS1zb3J0LWFzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DnlxcXCI7IH1cXG5cXG4uZmEtZW52ZWxvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg6BcXFwiOyB9XFxuXFxuLmZhLWxpbmtlZGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OhXFxcIjsgfVxcblxcbi5mYS1yb3RhdGUtbGVmdDpiZWZvcmUsXFxuLmZhLXVuZG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg6JcXFwiOyB9XFxuXFxuLmZhLWxlZ2FsOmJlZm9yZSxcXG4uZmEtZ2F2ZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg6NcXFwiOyB9XFxuXFxuLmZhLWRhc2hib2FyZDpiZWZvcmUsXFxuLmZhLXRhY2hvbWV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg6RcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DpVxcXCI7IH1cXG5cXG4uZmEtY29tbWVudHMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DplxcXCI7IH1cXG5cXG4uZmEtZmxhc2g6YmVmb3JlLFxcbi5mYS1ib2x0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OnXFxcIjsgfVxcblxcbi5mYS1zaXRlbWFwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OoXFxcIjsgfVxcblxcbi5mYS11bWJyZWxsYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DqVxcXCI7IH1cXG5cXG4uZmEtcGFzdGU6YmVmb3JlLFxcbi5mYS1jbGlwYm9hcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg6pcXFwiOyB9XFxuXFxuLmZhLWxpZ2h0YnVsYi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OrXFxcIjsgfVxcblxcbi5mYS1leGNoYW5nZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DrFxcXCI7IH1cXG5cXG4uZmEtY2xvdWQtZG93bmxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg61cXFwiOyB9XFxuXFxuLmZhLWNsb3VkLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DrlxcXCI7IH1cXG5cXG4uZmEtdXNlci1tZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DsFxcXCI7IH1cXG5cXG4uZmEtc3RldGhvc2NvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg7FcXFwiOyB9XFxuXFxuLmZhLXN1aXRjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74OyXFxcIjsgfVxcblxcbi5mYS1iZWxsLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvgqJcXFwiOyB9XFxuXFxuLmZhLWNvZmZlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DtFxcXCI7IH1cXG5cXG4uZmEtY3V0bGVyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DtVxcXCI7IH1cXG5cXG4uZmEtZmlsZS10ZXh0LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg7ZcXFwiOyB9XFxuXFxuLmZhLWJ1aWxkaW5nLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg7dcXFwiOyB9XFxuXFxuLmZhLWhvc3BpdGFsLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg7hcXFwiOyB9XFxuXFxuLmZhLWFtYnVsYW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DuVxcXCI7IH1cXG5cXG4uZmEtbWVka2l0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74O6XFxcIjsgfVxcblxcbi5mYS1maWdodGVyLWpldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Du1xcXCI7IH1cXG5cXG4uZmEtYmVlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+DvFxcXCI7IH1cXG5cXG4uZmEtaC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvg71cXFwiOyB9XFxuXFxuLmZhLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74O+XFxcIjsgfVxcblxcbi5mYS1hbmdsZS1kb3VibGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EgFxcXCI7IH1cXG5cXG4uZmEtYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SBXFxcIjsgfVxcblxcbi5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhIJcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SDXFxcIjsgfVxcblxcbi5mYS1hbmdsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SEXFxcIjsgfVxcblxcbi5mYS1hbmdsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EhVxcXCI7IH1cXG5cXG4uZmEtYW5nbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhIZcXFwiOyB9XFxuXFxuLmZhLWFuZ2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhIdcXFwiOyB9XFxuXFxuLmZhLWRlc2t0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhIhcXFwiOyB9XFxuXFxuLmZhLWxhcHRvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EiVxcXCI7IH1cXG5cXG4uZmEtdGFibGV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SKXFxcIjsgfVxcblxcbi5mYS1tb2JpbGUtcGhvbmU6YmVmb3JlLFxcbi5mYS1tb2JpbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhItcXFwiOyB9XFxuXFxuLmZhLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SMXFxcIjsgfVxcblxcbi5mYS1xdW90ZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SNXFxcIjsgfVxcblxcbi5mYS1xdW90ZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EjlxcXCI7IH1cXG5cXG4uZmEtc3Bpbm5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EkFxcXCI7IH1cXG5cXG4uZmEtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SRXFxcIjsgfVxcblxcbi5mYS1tYWlsLXJlcGx5OmJlZm9yZSxcXG4uZmEtcmVwbHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhJJcXFwiOyB9XFxuXFxuLmZhLWdpdGh1Yi1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhJNcXFwiOyB9XFxuXFxuLmZhLWZvbGRlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SUXFxcIjsgfVxcblxcbi5mYS1mb2xkZXItb3Blbi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SVXFxcIjsgfVxcblxcbi5mYS1zbWlsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SYXFxcIjsgfVxcblxcbi5mYS1mcm93bi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SZXFxcIjsgfVxcblxcbi5mYS1tZWgtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EmlxcXCI7IH1cXG5cXG4uZmEtZ2FtZXBhZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Em1xcXCI7IH1cXG5cXG4uZmEta2V5Ym9hcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EnFxcXCI7IH1cXG5cXG4uZmEtZmxhZy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SdXFxcIjsgfVxcblxcbi5mYS1mbGFnLWNoZWNrZXJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EnlxcXCI7IH1cXG5cXG4uZmEtdGVybWluYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhKBcXFwiOyB9XFxuXFxuLmZhLWNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhKFcXFwiOyB9XFxuXFxuLmZhLW1haWwtcmVwbHktYWxsOmJlZm9yZSxcXG4uZmEtcmVwbHktYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SiXFxcIjsgfVxcblxcbi5mYS1zdGFyLWhhbGYtZW1wdHk6YmVmb3JlLFxcbi5mYS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsXFxuLmZhLXN0YXItaGFsZi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SjXFxcIjsgfVxcblxcbi5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EpFxcXCI7IH1cXG5cXG4uZmEtY3JvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EpVxcXCI7IH1cXG5cXG4uZmEtY29kZS1mb3JrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SmXFxcIjsgfVxcblxcbi5mYS11bmxpbms6YmVmb3JlLFxcbi5mYS1jaGFpbi1icm9rZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhKdcXFwiOyB9XFxuXFxuLmZhLXF1ZXN0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SoXFxcIjsgfVxcblxcbi5mYS1pbmZvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74SpXFxcIjsgfVxcblxcbi5mYS1leGNsYW1hdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EqlxcXCI7IH1cXG5cXG4uZmEtc3VwZXJzY3JpcHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhKtcXFwiOyB9XFxuXFxuLmZhLXN1YnNjcmlwdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+ErFxcXCI7IH1cXG5cXG4uZmEtZXJhc2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74StXFxcIjsgfVxcblxcbi5mYS1wdXp6bGUtcGllY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhK5cXFwiOyB9XFxuXFxuLmZhLW1pY3JvcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLBcXFwiOyB9XFxuXFxuLmZhLW1pY3JvcGhvbmUtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLFcXFwiOyB9XFxuXFxuLmZhLXNoaWVsZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EslxcXCI7IH1cXG5cXG4uZmEtY2FsZW5kYXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Es1xcXCI7IH1cXG5cXG4uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLRcXFwiOyB9XFxuXFxuLmZhLXJvY2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EtVxcXCI7IH1cXG5cXG4uZmEtbWF4Y2RuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74S2XFxcIjsgfVxcblxcbi5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74S3XFxcIjsgfVxcblxcbi5mYS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+EuFxcXCI7IH1cXG5cXG4uZmEtY2hldnJvbi1jaXJjbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLlcXFwiOyB9XFxuXFxuLmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhLpcXFwiOyB9XFxuXFxuLmZhLWh0bWw1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74S7XFxcIjsgfVxcblxcbi5mYS1jc3MzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74S8XFxcIjsgfVxcblxcbi5mYS1hbmNob3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhL1cXFwiOyB9XFxuXFxuLmZhLXVubG9jay1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhL5cXFwiOyB9XFxuXFxuLmZhLWJ1bGxzZXllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WAXFxcIjsgfVxcblxcbi5mYS1lbGxpcHNpcy1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WBXFxcIjsgfVxcblxcbi5mYS1lbGxpcHNpcy12OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WCXFxcIjsgfVxcblxcbi5mYS1yc3Mtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WDXFxcIjsgfVxcblxcbi5mYS1wbGF5LWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FhFxcXCI7IH1cXG5cXG4uZmEtdGlja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WFXFxcIjsgfVxcblxcbi5mYS1taW51cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhYZcXFwiOyB9XFxuXFxuLmZhLW1pbnVzLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WHXFxcIjsgfVxcblxcbi5mYS1sZXZlbC11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FiFxcXCI7IH1cXG5cXG4uZmEtbGV2ZWwtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FiVxcXCI7IH1cXG5cXG4uZmEtY2hlY2stc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WKXFxcIjsgfVxcblxcbi5mYS1wZW5jaWwtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WLXFxcIjsgfVxcblxcbi5mYS1leHRlcm5hbC1saW5rLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FjFxcXCI7IH1cXG5cXG4uZmEtc2hhcmUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WNXFxcIjsgfVxcblxcbi5mYS1jb21wYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WOXFxcIjsgfVxcblxcbi5mYS10b2dnbGUtZG93bjpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZBcXFwiOyB9XFxuXFxuLmZhLXRvZ2dsZS11cDpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WRXFxcIjsgfVxcblxcbi5mYS10b2dnbGUtcmlnaHQ6YmVmb3JlLFxcbi5mYS1jYXJldC1zcXVhcmUtby1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FklxcXCI7IH1cXG5cXG4uZmEtZXVybzpiZWZvcmUsXFxuLmZhLWV1cjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Fk1xcXCI7IH1cXG5cXG4uZmEtZ2JwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WUXFxcIjsgfVxcblxcbi5mYS1kb2xsYXI6YmVmb3JlLFxcbi5mYS11c2Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZVcXFwiOyB9XFxuXFxuLmZhLXJ1cGVlOmJlZm9yZSxcXG4uZmEtaW5yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WWXFxcIjsgfVxcblxcbi5mYS1jbnk6YmVmb3JlLFxcbi5mYS1ybWI6YmVmb3JlLFxcbi5mYS15ZW46YmVmb3JlLFxcbi5mYS1qcHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZdcXFwiOyB9XFxuXFxuLmZhLXJ1YmxlOmJlZm9yZSxcXG4uZmEtcm91YmxlOmJlZm9yZSxcXG4uZmEtcnViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WYXFxcIjsgfVxcblxcbi5mYS13b246YmVmb3JlLFxcbi5mYS1rcnc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZlcXFwiOyB9XFxuXFxuLmZhLWJpdGNvaW46YmVmb3JlLFxcbi5mYS1idGM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZpcXFwiOyB9XFxuXFxuLmZhLWZpbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZtcXFwiOyB9XFxuXFxuLmZhLWZpbGUtdGV4dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FnFxcXCI7IH1cXG5cXG4uZmEtc29ydC1hbHBoYS1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhZ1cXFwiOyB9XFxuXFxuLmZhLXNvcnQtYWxwaGEtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FnlxcXCI7IH1cXG5cXG4uZmEtc29ydC1hbW91bnQtYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WgXFxcIjsgfVxcblxcbi5mYS1zb3J0LWFtb3VudC1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WhXFxcIjsgfVxcblxcbi5mYS1zb3J0LW51bWVyaWMtYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WiXFxcIjsgfVxcblxcbi5mYS1zb3J0LW51bWVyaWMtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Fo1xcXCI7IH1cXG5cXG4uZmEtdGh1bWJzLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WkXFxcIjsgfVxcblxcbi5mYS10aHVtYnMtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FpVxcXCI7IH1cXG5cXG4uZmEteW91dHViZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhaZcXFwiOyB9XFxuXFxuLmZhLXlvdXR1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhadcXFwiOyB9XFxuXFxuLmZhLXhpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhahcXFwiOyB9XFxuXFxuLmZhLXhpbmctc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WpXFxcIjsgfVxcblxcbi5mYS15b3V0dWJlLXBsYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhapcXFwiOyB9XFxuXFxuLmZhLWRyb3Bib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhatcXFwiOyB9XFxuXFxuLmZhLXN0YWNrLW92ZXJmbG93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WsXFxcIjsgfVxcblxcbi5mYS1pbnN0YWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvha1cXFwiOyB9XFxuXFxuLmZhLWZsaWNrcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FrlxcXCI7IH1cXG5cXG4uZmEtYWRuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74WwXFxcIjsgfVxcblxcbi5mYS1iaXRidWNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhbFcXFwiOyB9XFxuXFxuLmZhLWJpdGJ1Y2tldC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhbJcXFwiOyB9XFxuXFxuLmZhLXR1bWJscjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Fs1xcXCI7IH1cXG5cXG4uZmEtdHVtYmxyLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FtFxcXCI7IH1cXG5cXG4uZmEtbG9uZy1hcnJvdy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74W1XFxcIjsgfVxcblxcbi5mYS1sb25nLWFycm93LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74W2XFxcIjsgfVxcblxcbi5mYS1sb25nLWFycm93LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhbdcXFwiOyB9XFxuXFxuLmZhLWxvbmctYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhbhcXFwiOyB9XFxuXFxuLmZhLWFwcGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74W5XFxcIjsgfVxcblxcbi5mYS13aW5kb3dzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74W6XFxcIjsgfVxcblxcbi5mYS1hbmRyb2lkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74W7XFxcIjsgfVxcblxcbi5mYS1saW51eDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+FvFxcXCI7IH1cXG5cXG4uZmEtZHJpYmJibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhb1cXFwiOyB9XFxuXFxuLmZhLXNreXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74W+XFxcIjsgfVxcblxcbi5mYS1mb3Vyc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aAXFxcIjsgfVxcblxcbi5mYS10cmVsbG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhoFcXFwiOyB9XFxuXFxuLmZhLWZlbWFsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GglxcXCI7IH1cXG5cXG4uZmEtbWFsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gg1xcXCI7IH1cXG5cXG4uZmEtZ2l0dGlwOmJlZm9yZSxcXG4uZmEtZ3JhdGlwYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhoRcXFwiOyB9XFxuXFxuLmZhLXN1bi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aFXFxcIjsgfVxcblxcbi5mYS1tb29uLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhoZcXFwiOyB9XFxuXFxuLmZhLWFyY2hpdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhodcXFwiOyB9XFxuXFxuLmZhLWJ1ZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GiFxcXCI7IH1cXG5cXG4uZmEtdms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvholcXFwiOyB9XFxuXFxuLmZhLXdlaWJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aKXFxcIjsgfVxcblxcbi5mYS1yZW5yZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhotcXFwiOyB9XFxuXFxuLmZhLXBhZ2VsaW5lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GjFxcXCI7IH1cXG5cXG4uZmEtc3RhY2stZXhjaGFuZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvho1cXFwiOyB9XFxuXFxuLmZhLWFycm93LWNpcmNsZS1vLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aOXFxcIjsgfVxcblxcbi5mYS1hcnJvdy1jaXJjbGUtby1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aQXFxcIjsgfVxcblxcbi5mYS10b2dnbGUtbGVmdDpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhpFcXFwiOyB9XFxuXFxuLmZhLWRvdC1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GklxcXCI7IH1cXG5cXG4uZmEtd2hlZWxjaGFpcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gk1xcXCI7IH1cXG5cXG4uZmEtdmltZW8tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aUXFxcIjsgfVxcblxcbi5mYS10dXJraXNoLWxpcmE6YmVmb3JlLFxcbi5mYS10cnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhpVcXFwiOyB9XFxuXFxuLmZhLXBsdXMtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhpZcXFwiOyB9XFxuXFxuLmZhLXNwYWNlLXNodXR0bGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhpdcXFwiOyB9XFxuXFxuLmZhLXNsYWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aYXFxcIjsgfVxcblxcbi5mYS1lbnZlbG9wZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhplcXFwiOyB9XFxuXFxuLmZhLXdvcmRwcmVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GmlxcXCI7IH1cXG5cXG4uZmEtb3BlbmlkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74abXFxcIjsgfVxcblxcbi5mYS1pbnN0aXR1dGlvbjpiZWZvcmUsXFxuLmZhLWJhbms6YmVmb3JlLFxcbi5mYS11bml2ZXJzaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74acXFxcIjsgfVxcblxcbi5mYS1tb3J0YXItYm9hcmQ6YmVmb3JlLFxcbi5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GnVxcXCI7IH1cXG5cXG4uZmEteWFob286YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhp5cXFwiOyB9XFxuXFxuLmZhLWdvb2dsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GoFxcXCI7IH1cXG5cXG4uZmEtcmVkZGl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ahXFxcIjsgfVxcblxcbi5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aiXFxcIjsgfVxcblxcbi5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqNcXFwiOyB9XFxuXFxuLmZhLXN0dW1ibGV1cG9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74akXFxcIjsgfVxcblxcbi5mYS1kZWxpY2lvdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqVcXFwiOyB9XFxuXFxuLmZhLWRpZ2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqZcXFwiOyB9XFxuXFxuLmZhLXBpZWQtcGlwZXItcHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqdcXFwiOyB9XFxuXFxuLmZhLXBpZWQtcGlwZXItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74aoXFxcIjsgfVxcblxcbi5mYS1kcnVwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqlcXFwiOyB9XFxuXFxuLmZhLWpvb21sYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GqlxcXCI7IH1cXG5cXG4uZmEtbGFuZ3VhZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhqtcXFwiOyB9XFxuXFxuLmZhLWZheDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GrFxcXCI7IH1cXG5cXG4uZmEtYnVpbGRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhq1cXFwiOyB9XFxuXFxuLmZhLWNoaWxkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74auXFxcIjsgfVxcblxcbi5mYS1wYXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrBcXFwiOyB9XFxuXFxuLmZhLXNwb29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74axXFxcIjsgfVxcblxcbi5mYS1jdWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ayXFxcIjsgfVxcblxcbi5mYS1jdWJlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Gs1xcXCI7IH1cXG5cXG4uZmEtYmVoYW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+GtFxcXCI7IH1cXG5cXG4uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrVcXFwiOyB9XFxuXFxuLmZhLXN0ZWFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74a2XFxcIjsgfVxcblxcbi5mYS1zdGVhbS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrdcXFwiOyB9XFxuXFxuLmZhLXJlY3ljbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrhcXFwiOyB9XFxuXFxuLmZhLWF1dG9tb2JpbGU6YmVmb3JlLFxcbi5mYS1jYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrlcXFwiOyB9XFxuXFxuLmZhLWNhYjpiZWZvcmUsXFxuLmZhLXRheGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrpcXFwiOyB9XFxuXFxuLmZhLXRyZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrtcXFwiOyB9XFxuXFxuLmZhLXNwb3RpZnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhrxcXFwiOyB9XFxuXFxuLmZhLWRldmlhbnRhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhr1cXFwiOyB9XFxuXFxuLmZhLXNvdW5kY2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvhr5cXFwiOyB9XFxuXFxuLmZhLWRhdGFiYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eAXFxcIjsgfVxcblxcbi5mYS1maWxlLXBkZi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eBXFxcIjsgfVxcblxcbi5mYS1maWxlLXdvcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HglxcXCI7IH1cXG5cXG4uZmEtZmlsZS1leGNlbC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eDXFxcIjsgfVxcblxcbi5mYS1maWxlLXBvd2VycG9pbnQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HhFxcXCI7IH1cXG5cXG4uZmEtZmlsZS1waG90by1vOmJlZm9yZSxcXG4uZmEtZmlsZS1waWN0dXJlLW86YmVmb3JlLFxcbi5mYS1maWxlLWltYWdlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh4VcXFwiOyB9XFxuXFxuLmZhLWZpbGUtemlwLW86YmVmb3JlLFxcbi5mYS1maWxlLWFyY2hpdmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HhlxcXCI7IH1cXG5cXG4uZmEtZmlsZS1zb3VuZC1vOmJlZm9yZSxcXG4uZmEtZmlsZS1hdWRpby1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eHXFxcIjsgfVxcblxcbi5mYS1maWxlLW1vdmllLW86YmVmb3JlLFxcbi5mYS1maWxlLXZpZGVvLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh4hcXFwiOyB9XFxuXFxuLmZhLWZpbGUtY29kZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eJXFxcIjsgfVxcblxcbi5mYS12aW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eKXFxcIjsgfVxcblxcbi5mYS1jb2RlcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eLXFxcIjsgfVxcblxcbi5mYS1qc2ZpZGRsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HjFxcXCI7IH1cXG5cXG4uZmEtbGlmZS1ib3V5OmJlZm9yZSxcXG4uZmEtbGlmZS1idW95OmJlZm9yZSxcXG4uZmEtbGlmZS1zYXZlcjpiZWZvcmUsXFxuLmZhLXN1cHBvcnQ6YmVmb3JlLFxcbi5mYS1saWZlLXJpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh41cXFwiOyB9XFxuXFxuLmZhLWNpcmNsZS1vLW5vdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eOXFxcIjsgfVxcblxcbi5mYS1yYTpiZWZvcmUsXFxuLmZhLXJlc2lzdGFuY2U6YmVmb3JlLFxcbi5mYS1yZWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HkFxcXCI7IH1cXG5cXG4uZmEtZ2U6YmVmb3JlLFxcbi5mYS1lbXBpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5FcXFwiOyB9XFxuXFxuLmZhLWdpdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5JcXFwiOyB9XFxuXFxuLmZhLWdpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Hk1xcXCI7IH1cXG5cXG4uZmEteS1jb21iaW5hdG9yLXNxdWFyZTpiZWZvcmUsXFxuLmZhLXljLXNxdWFyZTpiZWZvcmUsXFxuLmZhLWhhY2tlci1uZXdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eUXFxcIjsgfVxcblxcbi5mYS10ZW5jZW50LXdlaWJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eVXFxcIjsgfVxcblxcbi5mYS1xcTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HllxcXCI7IH1cXG5cXG4uZmEtd2VjaGF0OmJlZm9yZSxcXG4uZmEtd2VpeGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eXXFxcIjsgfVxcblxcbi5mYS1zZW5kOmJlZm9yZSxcXG4uZmEtcGFwZXItcGxhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5hcXFwiOyB9XFxuXFxuLmZhLXNlbmQtbzpiZWZvcmUsXFxuLmZhLXBhcGVyLXBsYW5lLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5lcXFwiOyB9XFxuXFxuLmZhLWhpc3Rvcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5pcXFwiOyB9XFxuXFxuLmZhLWNpcmNsZS10aGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ebXFxcIjsgfVxcblxcbi5mYS1oZWFkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh5xcXFwiOyB9XFxuXFxuLmZhLXBhcmFncmFwaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HnVxcXCI7IH1cXG5cXG4uZmEtc2xpZGVyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HnlxcXCI7IH1cXG5cXG4uZmEtc2hhcmUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74egXFxcIjsgfVxcblxcbi5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ehXFxcIjsgfVxcblxcbi5mYS1ib21iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eiXFxcIjsgfVxcblxcbi5mYS1zb2NjZXItYmFsbC1vOmJlZm9yZSxcXG4uZmEtZnV0Ym9sLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh6NcXFwiOyB9XFxuXFxuLmZhLXR0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HpFxcXCI7IH1cXG5cXG4uZmEtYmlub2N1bGFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HpVxcXCI7IH1cXG5cXG4uZmEtcGx1ZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HplxcXCI7IH1cXG5cXG4uZmEtc2xpZGVzaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Hp1xcXCI7IH1cXG5cXG4uZmEtdHdpdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74eoXFxcIjsgfVxcblxcbi5mYS15ZWxwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74epXFxcIjsgfVxcblxcbi5mYS1uZXdzcGFwZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HqlxcXCI7IH1cXG5cXG4uZmEtd2lmaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Hq1xcXCI7IH1cXG5cXG4uZmEtY2FsY3VsYXRvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HrFxcXCI7IH1cXG5cXG4uZmEtcGF5cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74etXFxcIjsgfVxcblxcbi5mYS1nb29nbGUtd2FsbGV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74euXFxcIjsgfVxcblxcbi5mYS1jYy12aXNhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ewXFxcIjsgfVxcblxcbi5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74exXFxcIjsgfVxcblxcbi5mYS1jYy1kaXNjb3ZlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HslxcXCI7IH1cXG5cXG4uZmEtY2MtYW1leDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Hs1xcXCI7IH1cXG5cXG4uZmEtY2MtcGF5cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74e0XFxcIjsgfVxcblxcbi5mYS1jYy1zdHJpcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh7VcXFwiOyB9XFxuXFxuLmZhLWJlbGwtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh7ZcXFwiOyB9XFxuXFxuLmZhLWJlbGwtc2xhc2gtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ht1xcXCI7IH1cXG5cXG4uZmEtdHJhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh7hcXFwiOyB9XFxuXFxuLmZhLWNvcHlyaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+HuVxcXCI7IH1cXG5cXG4uZmEtYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh7pcXFwiOyB9XFxuXFxuLmZhLWV5ZWRyb3BwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvh7tcXFwiOyB9XFxuXFxuLmZhLXBhaW50LWJydXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74e8XFxcIjsgfVxcblxcbi5mYS1iaXJ0aGRheS1jYWtlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74e9XFxcIjsgfVxcblxcbi5mYS1hcmVhLWNoYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74e+XFxcIjsgfVxcblxcbi5mYS1waWUtY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviIBcXFwiOyB9XFxuXFxuLmZhLWxpbmUtY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviIFcXFwiOyB9XFxuXFxuLmZhLWxhc3RmbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IglxcXCI7IH1cXG5cXG4uZmEtbGFzdGZtLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ig1xcXCI7IH1cXG5cXG4uZmEtdG9nZ2xlLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IhFxcXCI7IH1cXG5cXG4uZmEtdG9nZ2xlLW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iFXFxcIjsgfVxcblxcbi5mYS1iaWN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iGXFxcIjsgfVxcblxcbi5mYS1idXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviIdcXFwiOyB9XFxuXFxuLmZhLWlveGhvc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviIhcXFwiOyB9XFxuXFxuLmZhLWFuZ2VsbGlzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IiVxcXCI7IH1cXG5cXG4uZmEtY2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviIpcXFwiOyB9XFxuXFxuLmZhLXNoZWtlbDpiZWZvcmUsXFxuLmZhLXNoZXFlbDpiZWZvcmUsXFxuLmZhLWlsczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ii1xcXCI7IH1cXG5cXG4uZmEtbWVhbnBhdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviIxcXFwiOyB9XFxuXFxuLmZhLWJ1eXNlbGxhZHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviI1cXFwiOyB9XFxuXFxuLmZhLWNvbm5lY3RkZXZlbG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iOXFxcIjsgfVxcblxcbi5mYS1kYXNoY3ViZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IkFxcXCI7IH1cXG5cXG4uZmEtZm9ydW1iZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviJFcXFwiOyB9XFxuXFxuLmZhLWxlYW5wdWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviJJcXFwiOyB9XFxuXFxuLmZhLXNlbGxzeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ik1xcXCI7IH1cXG5cXG4uZmEtc2hpcnRzaW5idWxrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iUXFxcIjsgfVxcblxcbi5mYS1zaW1wbHlidWlsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IlVxcXCI7IH1cXG5cXG4uZmEtc2t5YXRsYXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviJZcXFwiOyB9XFxuXFxuLmZhLWNhcnQtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Il1xcXCI7IH1cXG5cXG4uZmEtY2FydC1hcnJvdy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iYXFxcIjsgfVxcblxcbi5mYS1kaWFtb25kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iZXFxcIjsgfVxcblxcbi5mYS1zaGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74iaXFxcIjsgfVxcblxcbi5mYS11c2VyLXNlY3JldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Im1xcXCI7IH1cXG5cXG4uZmEtbW90b3JjeWNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+InFxcXCI7IH1cXG5cXG4uZmEtc3RyZWV0LXZpZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviJ1cXFwiOyB9XFxuXFxuLmZhLWhlYXJ0YmVhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+InlxcXCI7IH1cXG5cXG4uZmEtdmVudXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviKFcXFwiOyB9XFxuXFxuLmZhLW1hcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviKJcXFwiOyB9XFxuXFxuLmZhLW1lcmN1cnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviKNcXFwiOyB9XFxuXFxuLmZhLWludGVyc2V4OmJlZm9yZSxcXG4uZmEtdHJhbnNnZW5kZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviKRcXFwiOyB9XFxuXFxuLmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IpVxcXCI7IH1cXG5cXG4uZmEtdmVudXMtZG91YmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74imXFxcIjsgfVxcblxcbi5mYS1tYXJzLWRvdWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ip1xcXCI7IH1cXG5cXG4uZmEtdmVudXMtbWFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IqFxcXCI7IH1cXG5cXG4uZmEtbWFycy1zdHJva2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviKlcXFwiOyB9XFxuXFxuLmZhLW1hcnMtc3Ryb2tlLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviKpcXFwiOyB9XFxuXFxuLmZhLW1hcnMtc3Ryb2tlLWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviKtcXFwiOyB9XFxuXFxuLmZhLW5ldXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IrFxcXCI7IH1cXG5cXG4uZmEtZ2VuZGVybGVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IrVxcXCI7IH1cXG5cXG4uZmEtZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLBcXFwiOyB9XFxuXFxuLmZhLXBpbnRlcmVzdC1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ixXFxcIjsgfVxcblxcbi5mYS13aGF0c2FwcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IslxcXCI7IH1cXG5cXG4uZmEtc2VydmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74izXFxcIjsgfVxcblxcbi5mYS11c2VyLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLRcXFwiOyB9XFxuXFxuLmZhLXVzZXItdGltZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLVcXFwiOyB9XFxuXFxuLmZhLWhvdGVsOmJlZm9yZSxcXG4uZmEtYmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74i2XFxcIjsgfVxcblxcbi5mYS12aWFjb2luOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74i3XFxcIjsgfVxcblxcbi5mYS10cmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IuFxcXCI7IH1cXG5cXG4uZmEtc3Vid2F5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74i5XFxcIjsgfVxcblxcbi5mYS1tZWRpdW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviLpcXFwiOyB9XFxuXFxuLmZhLXljOmJlZm9yZSxcXG4uZmEteS1jb21iaW5hdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74i7XFxcIjsgfVxcblxcbi5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74i8XFxcIjsgfVxcblxcbi5mYS1vcGVuY2FydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+IvVxcXCI7IH1cXG5cXG4uZmEtZXhwZWRpdGVkc3NsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74i+XFxcIjsgfVxcblxcbi5mYS1iYXR0ZXJ5LTQ6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5OmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1mdWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mAXFxcIjsgfVxcblxcbi5mYS1iYXR0ZXJ5LTM6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mBXFxcIjsgfVxcblxcbi5mYS1iYXR0ZXJ5LTI6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYJcXFwiOyB9XFxuXFxuLmZhLWJhdHRlcnktMTpiZWZvcmUsXFxuLmZhLWJhdHRlcnktcXVhcnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Jg1xcXCI7IH1cXG5cXG4uZmEtYmF0dGVyeS0wOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JhFxcXCI7IH1cXG5cXG4uZmEtbW91c2UtcG9pbnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JhVxcXCI7IH1cXG5cXG4uZmEtaS1jdXJzb3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYZcXFwiOyB9XFxuXFxuLmZhLW9iamVjdC1ncm91cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Jh1xcXCI7IH1cXG5cXG4uZmEtb2JqZWN0LXVuZ3JvdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYhcXFwiOyB9XFxuXFxuLmZhLXN0aWNreS1ub3RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mJXFxcIjsgfVxcblxcbi5mYS1zdGlja3ktbm90ZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mKXFxcIjsgfVxcblxcbi5mYS1jYy1qY2I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviYtcXFwiOyB9XFxuXFxuLmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mMXFxcIjsgfVxcblxcbi5mYS1jbG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JjVxcXCI7IH1cXG5cXG4uZmEtYmFsYW5jZS1zY2FsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JjlxcXCI7IH1cXG5cXG4uZmEtaG91cmdsYXNzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZBcXFwiOyB9XFxuXFxuLmZhLWhvdXJnbGFzcy0xOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mRXFxcIjsgfVxcblxcbi5mYS1ob3VyZ2xhc3MtMjpiZWZvcmUsXFxuLmZhLWhvdXJnbGFzcy1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mSXFxcIjsgfVxcblxcbi5mYS1ob3VyZ2xhc3MtMzpiZWZvcmUsXFxuLmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZNcXFwiOyB9XFxuXFxuLmZhLWhvdXJnbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JlFxcXCI7IH1cXG5cXG4uZmEtaGFuZC1ncmFiLW86YmVmb3JlLFxcbi5mYS1oYW5kLXJvY2stbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JlVxcXCI7IH1cXG5cXG4uZmEtaGFuZC1zdG9wLW86YmVmb3JlLFxcbi5mYS1oYW5kLXBhcGVyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZZcXFwiOyB9XFxuXFxuLmZhLWhhbmQtc2Npc3NvcnMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Jl1xcXCI7IH1cXG5cXG4uZmEtaGFuZC1saXphcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JmFxcXCI7IH1cXG5cXG4uZmEtaGFuZC1zcG9jay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mZXFxcIjsgfVxcblxcbi5mYS1oYW5kLXBvaW50ZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JmlxcXCI7IH1cXG5cXG4uZmEtaGFuZC1wZWFjZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mbXFxcIjsgfVxcblxcbi5mYS10cmFkZW1hcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZxcXFwiOyB9XFxuXFxuLmZhLXJlZ2lzdGVyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZ1cXFwiOyB9XFxuXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviZ5cXFwiOyB9XFxuXFxuLmZhLWdnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mgXFxcIjsgfVxcblxcbi5mYS1nZy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviaFcXFwiOyB9XFxuXFxuLmZhLXRyaXBhZHZpc29yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74miXFxcIjsgfVxcblxcbi5mYS1vZG5va2xhc3NuaWtpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mjXFxcIjsgfVxcblxcbi5mYS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JpFxcXCI7IH1cXG5cXG4uZmEtZ2V0LXBvY2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JpVxcXCI7IH1cXG5cXG4uZmEtd2lraXBlZGlhLXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviaZcXFwiOyB9XFxuXFxuLmZhLXNhZmFyaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Jp1xcXCI7IH1cXG5cXG4uZmEtY2hyb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74moXFxcIjsgfVxcblxcbi5mYS1maXJlZm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mpXFxcIjsgfVxcblxcbi5mYS1vcGVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JqlxcXCI7IH1cXG5cXG4uZmEtaW50ZXJuZXQtZXhwbG9yZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviatcXFwiOyB9XFxuXFxuLmZhLXR2OmJlZm9yZSxcXG4uZmEtdGVsZXZpc2lvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JrFxcXCI7IH1cXG5cXG4uZmEtY29udGFvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mtXFxcIjsgfVxcblxcbi5mYS01MDBweDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+JrlxcXCI7IH1cXG5cXG4uZmEtYW1hem9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74mwXFxcIjsgfVxcblxcbi5mYS1jYWxlbmRhci1wbHVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibFcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyLW1pbnVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibJcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyLXRpbWVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibNcXFwiOyB9XFxuXFxuLmZhLWNhbGVuZGFyLWNoZWNrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibRcXFwiOyB9XFxuXFxuLmZhLWluZHVzdHJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m1XFxcIjsgfVxcblxcbi5mYS1tYXAtcGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m2XFxcIjsgfVxcblxcbi5mYS1tYXAtc2lnbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibdcXFwiOyB9XFxuXFxuLmZhLW1hcC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m4XFxcIjsgfVxcblxcbi5mYS1tYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviblcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibpcXFwiOyB9XFxuXFxuLmZhLWNvbW1lbnRpbmctbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ju1xcXCI7IH1cXG5cXG4uZmEtaG91eno6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvibxcXFwiOyB9XFxuXFxuLmZhLXZpbWVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74m9XFxcIjsgfVxcblxcbi5mYS1ibGFjay10aWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvib5cXFwiOyB9XFxuXFxuLmZhLWZvbnRpY29uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KgFxcXCI7IH1cXG5cXG4uZmEtcmVkZGl0LWFsaWVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qBXFxcIjsgfVxcblxcbi5mYS1lZGdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qCXFxcIjsgfVxcblxcbi5mYS1jcmVkaXQtY2FyZC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvioNcXFwiOyB9XFxuXFxuLmZhLWNvZGllcGllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qEXFxcIjsgfVxcblxcbi5mYS1tb2R4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qFXFxcIjsgfVxcblxcbi5mYS1mb3J0LWF3ZXNvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvioZcXFwiOyB9XFxuXFxuLmZhLXVzYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Kh1xcXCI7IH1cXG5cXG4uZmEtcHJvZHVjdC1odW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qIXFxcIjsgfVxcblxcbi5mYS1taXhjbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KiVxcXCI7IH1cXG5cXG4uZmEtc2NyaWJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qKXFxcIjsgfVxcblxcbi5mYS1wYXVzZS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviotcXFwiOyB9XFxuXFxuLmZhLXBhdXNlLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qMXFxcIjsgfVxcblxcbi5mYS1zdG9wLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KjVxcXCI7IH1cXG5cXG4uZmEtc3RvcC1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KjlxcXCI7IH1cXG5cXG4uZmEtc2hvcHBpbmctYmFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qQXFxcIjsgfVxcblxcbi5mYS1zaG9wcGluZy1iYXNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvipFcXFwiOyB9XFxuXFxuLmZhLWhhc2h0YWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvipJcXFwiOyB9XFxuXFxuLmZhLWJsdWV0b290aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Kk1xcXCI7IH1cXG5cXG4uZmEtYmx1ZXRvb3RoLWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvipRcXFwiOyB9XFxuXFxuLmZhLXBlcmNlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvipVcXFwiOyB9XFxuXFxuLmZhLWdpdGxhYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KllxcXCI7IH1cXG5cXG4uZmEtd3BiZWdpbm5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Kl1xcXCI7IH1cXG5cXG4uZmEtd3Bmb3JtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KmFxcXCI7IH1cXG5cXG4uZmEtZW52aXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qZXFxcIjsgfVxcblxcbi5mYS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qaXFxcIjsgfVxcblxcbi5mYS13aGVlbGNoYWlyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Km1xcXCI7IH1cXG5cXG4uZmEtcXVlc3Rpb24tY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvipxcXFwiOyB9XFxuXFxuLmZhLWJsaW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qdXFxcIjsgfVxcblxcbi5mYS1hdWRpby1kZXNjcmlwdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KnlxcXCI7IH1cXG5cXG4uZmEtdm9sdW1lLWNvbnRyb2wtcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviqBcXFwiOyB9XFxuXFxuLmZhLWJyYWlsbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviqFcXFwiOyB9XFxuXFxuLmZhLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KolxcXCI7IH1cXG5cXG4uZmEtYXNsLWludGVycHJldGluZzpiZWZvcmUsXFxuLmZhLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qjXFxcIjsgfVxcblxcbi5mYS1kZWFmbmVzczpiZWZvcmUsXFxuLmZhLWhhcmQtb2YtaGVhcmluZzpiZWZvcmUsXFxuLmZhLWRlYWY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviqRcXFwiOyB9XFxuXFxuLmZhLWdsaWRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qlXFxcIjsgfVxcblxcbi5mYS1nbGlkZS1nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qmXFxcIjsgfVxcblxcbi5mYS1zaWduaW5nOmJlZm9yZSxcXG4uZmEtc2lnbi1sYW5ndWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Kp1xcXCI7IH1cXG5cXG4uZmEtbG93LXZpc2lvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KqFxcXCI7IH1cXG5cXG4uZmEtdmlhZGVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qpXFxcIjsgfVxcblxcbi5mYS12aWFkZW8tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qqXFxcIjsgfVxcblxcbi5mYS1zbmFwY2hhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Kq1xcXCI7IH1cXG5cXG4uZmEtc25hcGNoYXQtZ2hvc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLviqxcXFwiOyB9XFxuXFxuLmZhLXNuYXBjaGF0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KrVxcXCI7IH1cXG5cXG4uZmEtcGllZC1waXBlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KrlxcXCI7IH1cXG5cXG4uZmEtZmlyc3Qtb3JkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirBcXFwiOyB9XFxuXFxuLmZhLXlvYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qxXFxcIjsgfVxcblxcbi5mYS10aGVtZWlzbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirJcXFwiOyB9XFxuXFxuLmZhLWdvb2dsZS1wbHVzLWNpcmNsZTpiZWZvcmUsXFxuLmZhLWdvb2dsZS1wbHVzLW9mZmljaWFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74qzXFxcIjsgfVxcblxcbi5mYS1mYTpiZWZvcmUsXFxuLmZhLWZvbnQtYXdlc29tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KtFxcXCI7IH1cXG5cXG4uZmEtaGFuZHNoYWtlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirVcXFwiOyB9XFxuXFxuLmZhLWVudmVsb3BlLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirZcXFwiOyB9XFxuXFxuLmZhLWVudmVsb3BlLW9wZW4tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Kt1xcXCI7IH1cXG5cXG4uZmEtbGlub2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74q4XFxcIjsgfVxcblxcbi5mYS1hZGRyZXNzLWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvirlcXFwiOyB9XFxuXFxuLmZhLWFkZHJlc3MtYm9vay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74q6XFxcIjsgfVxcblxcbi5mYS12Y2FyZDpiZWZvcmUsXFxuLmZhLWFkZHJlc3MtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ku1xcXCI7IH1cXG5cXG4uZmEtdmNhcmQtbzpiZWZvcmUsXFxuLmZhLWFkZHJlc3MtY2FyZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74q8XFxcIjsgfVxcblxcbi5mYS11c2VyLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KvVxcXCI7IH1cXG5cXG4uZmEtdXNlci1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+KvlxcXCI7IH1cXG5cXG4uZmEtdXNlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uAXFxcIjsgfVxcblxcbi5mYS1pZC1iYWRnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LgVxcXCI7IH1cXG5cXG4uZmEtZHJpdmVycy1saWNlbnNlOmJlZm9yZSxcXG4uZmEtaWQtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LglxcXCI7IH1cXG5cXG4uZmEtZHJpdmVycy1saWNlbnNlLW86YmVmb3JlLFxcbi5mYS1pZC1jYXJkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi4NcXFwiOyB9XFxuXFxuLmZhLXF1b3JhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uEXFxcIjsgfVxcblxcbi5mYS1mcmVlLWNvZGUtY2FtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LhVxcXCI7IH1cXG5cXG4uZmEtdGVsZWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi4ZcXFwiOyB9XFxuXFxuLmZhLXRoZXJtb21ldGVyLTQ6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlcjpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyLWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi4dcXFwiOyB9XFxuXFxuLmZhLXRoZXJtb21ldGVyLTM6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LiFxcXCI7IH1cXG5cXG4uZmEtdGhlcm1vbWV0ZXItMjpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyLWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi4lcXFwiOyB9XFxuXFxuLmZhLXRoZXJtb21ldGVyLTE6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlci1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uKXFxcIjsgfVxcblxcbi5mYS10aGVybW9tZXRlci0wOmJlZm9yZSxcXG4uZmEtdGhlcm1vbWV0ZXItZW1wdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi4tcXFwiOyB9XFxuXFxuLmZhLXNob3dlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LjFxcXCI7IH1cXG5cXG4uZmEtYmF0aHR1YjpiZWZvcmUsXFxuLmZhLXMxNTpiZWZvcmUsXFxuLmZhLWJhdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi41cXFwiOyB9XFxuXFxuLmZhLXBvZGNhc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi45cXFwiOyB9XFxuXFxuLmZhLXdpbmRvdy1tYXhpbWl6ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LkFxcXCI7IH1cXG5cXG4uZmEtd2luZG93LW1pbmltaXplOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uRXFxcIjsgfVxcblxcbi5mYS13aW5kb3ctcmVzdG9yZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LklxcXCI7IH1cXG5cXG4uZmEtdGltZXMtcmVjdGFuZ2xlOmJlZm9yZSxcXG4uZmEtd2luZG93LWNsb3NlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uTXFxcIjsgfVxcblxcbi5mYS10aW1lcy1yZWN0YW5nbGUtbzpiZWZvcmUsXFxuLmZhLXdpbmRvdy1jbG9zZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74uUXFxcIjsgfVxcblxcbi5mYS1iYW5kY2FtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LlVxcXCI7IH1cXG5cXG4uZmEtZ3JhdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LllxcXCI7IH1cXG5cXG4uZmEtZXRzeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+Ll1xcXCI7IH1cXG5cXG4uZmEtaW1kYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LmFxcXCI7IH1cXG5cXG4uZmEtcmF2ZWxyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LmVxcXCI7IH1cXG5cXG4uZmEtZWVyY2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LmlxcXCI7IH1cXG5cXG4uZmEtbWljcm9jaGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi74ubXFxcIjsgfVxcblxcbi5mYS1zbm93Zmxha2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LnFxcXCI7IH1cXG5cXG4uZmEtc3VwZXJwb3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi51cXFwiOyB9XFxuXFxuLmZhLXdwZXhwbG9yZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLvi55cXFwiOyB9XFxuXFxuLmZhLW1lZXR1cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIu+LoFxcXCI7IH1cXG5cXG4uc3Itb25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IDA7IH1cXG5cXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLCAuc3Itb25seS1mb2N1c2FibGU6Zm9jdXMge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBjbGlwOiBhdXRvOyB9XFxuXFxuaS5mYSB7XFxuICBjb2xvcjogdmFyKC0taWNvbi1jb2xvciwgaW5oZXJpdCk7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJpbWcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmZmZmMDAsICNkZGQsICNmZmZmZmYwMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGFuaW1hdGlvbjogbG9hZGluZyA1cyBpbmZpbml0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAwIDEwMCU7IH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAwIDEwMCU7IH0gfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLm92ZXJmbG93IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IsICMwMDAwMDBhYSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiAjMDAwMDAwYWE7IH1cXG4gIGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaG92ZXIsICMwMDApOyB9XFxuICBhOmFjdGl2ZSwgYTpmb2N1cyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ob3ZlciwgIzExMSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0tY29sb3ItaG92ZXIsICMxMTEpOyB9XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LW92ZXJmbG93IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4ub3ZlcmZsb3cge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG5kaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwMDAwYWE7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMDAwMDAwMzM7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJwcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDVweDsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLm92ZXJmbG93IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLnNsaWRlc2hvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbnRlbnQtZGlzcGxheTogY29udGVudHM7IH1cXG4gIC5zbGlkZXNob3cgLmltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5Njk2OTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuc2xpZGVzaG93IC5pbWFnZSAqIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlOyB9XFxuICAuc2xpZGVzaG93IC5jb250cm9sIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5zbGlkZXNob3cgLmNvbnRyb2wucmlnaHQge1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAwMDAwLCAjMDAwMDAwYWEpO1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgICAuc2xpZGVzaG93IC5jb250cm9sLnJpZ2h0OmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLnNsaWRlc2hvdyAuY29udHJvbC5sZWZ0IHtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAwMGFhLCAjMDAwMDAwMDApO1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgICAuc2xpZGVzaG93IC5jb250cm9sLmxlZnQ6aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgLnNsaWRlc2hvdzpob3ZlciAuaXRlbXMge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAuc2xpZGVzaG93IC5pdGVtcyB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDAwMDAwMDAsICMwMDAwMDA5OSk7IH1cXG4gICAgLnNsaWRlc2hvdyAuaXRlbXMgLml0ZW0ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXJnaW46IDE1cHggNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDAwMDk5O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgIC5zbGlkZXNob3cgLml0ZW1zIC5pdGVtLnBsYXkge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgICAgIC5zbGlkZXNob3cgLml0ZW1zIC5pdGVtLnBhdXNlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDsgfVxcblxcbnNwYW4ud3JhcHBlciB7XFxuICAtLXRvb2x0aXAtY29sb3I6ICM2NjY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIHNwYW4ud3JhcHBlciA+IHNsb3RbbmFtZT1cXFwidG9vbHRpcFxcXCJdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2x0aXAtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB6LWluZGV4OiAxOyB9XFxuICAgIHNwYW4ud3JhcHBlciA+IHNsb3RbbmFtZT1cXFwidG9vbHRpcFxcXCJdIHNwYW4udG9vbHRpcCB7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICBwYWRkaW5nOiAycHggNXB4O1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcbiAgc3Bhbi53cmFwcGVyOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgY29udGVudDogJyc7IH1cXG4gIHNwYW4ud3JhcHBlcjpob3ZlcjpiZWZvcmUsIHNwYW4ud3JhcHBlcjpob3ZlciBzbG90W25hbWU9XFxcInRvb2x0aXBcXFwiXSwgc3Bhbi53cmFwcGVyOmZvY3VzOmJlZm9yZSwgc3Bhbi53cmFwcGVyOmZvY3VzIHNsb3RbbmFtZT1cXFwidG9vbHRpcFxcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGFuaW1hdGlvbjogZmFkZSAwLjE1czsgfVxcbiAgc3Bhbi53cmFwcGVyLmJvdHRvbTpiZWZvcmUge1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS10b29sdGlwLWNvbG9yKTsgfVxcbiAgc3Bhbi53cmFwcGVyLmJvdHRvbSA+IHNsb3RbbmFtZT1cXFwidG9vbHRpcFxcXCJdIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7IH1cXG4gIHNwYW4ud3JhcHBlci50b3A6YmVmb3JlIHtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tdG9vbHRpcC1jb2xvcik7IH1cXG4gIHNwYW4ud3JhcHBlci50b3AgPiBzbG90W25hbWU9XFxcInRvb2x0aXBcXFwiXSB7XFxuICAgIGJvdHRvbTogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuICBzcGFuLndyYXBwZXIubGVmdDpiZWZvcmUge1xcbiAgICB0b3A6IDI1JTtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLXRvb2x0aXAtY29sb3IpOyB9XFxuICBzcGFuLndyYXBwZXIubGVmdCA+IHNsb3RbbmFtZT1cXFwidG9vbHRpcFxcXCJdIHtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIHNwYW4ud3JhcHBlci5yaWdodDpiZWZvcmUge1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHZhcigtLXRvb2x0aXAtY29sb3IpOyB9XFxuICBzcGFuLndyYXBwZXIucmlnaHQgPiBzbG90W25hbWU9XFxcInRvb2x0aXBcXFwiXSB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDsgfVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cIiwgXCJcIl0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==