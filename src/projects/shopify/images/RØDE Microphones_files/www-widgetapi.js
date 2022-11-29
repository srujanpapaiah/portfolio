(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.R=b.prototype}
function ra(){this.A=!1;this.m=null;this.j=void 0;this.i=1;this.u=this.o=0;this.J=this.l=null}
function sa(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
ra.prototype.D=function(a){this.j=a};
function ta(a,b){a.l={Xa:b,eb:!0};a.i=a.o||a.u}
ra.prototype.return=function(a){this.l={return:a};this.i=this.u};
function w(a,b,c){a.i=c;return{value:b}}
ra.prototype.v=function(a){this.i=a};
function va(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function xa(a,b){a.i=b;a.o=0}
function ya(a){a.o=0;var b=a.l.Xa;a.l=null;return b}
function za(a){a.J=[a.l];a.o=0;a.u=0}
function Ba(a){var b=a.J.splice(0)[0];(b=a.l=a.l||b)?b.eb?a.i=a.o||a.u:void 0!=b.v&&a.u<b.v?(a.i=b.v,a.l=null):a.i=a.u:a.i=0}
function Ca(a){this.i=new ra;this.j=a}
function Da(a,b){sa(a.i);var c=a.i.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.A=!1,e;var f=e.value}catch(g){return a.i.m=null,ta(a.i,g),Fa(a)}a.i.m=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.A=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,ta(a.i,c)}a.i.A=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.eb)throw b.Xa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){sa(a.i);a.i.m?b=Ea(a,a.i.m.next,b,a.i.D):(a.i.D(b),b=Fa(a));return b};
this.throw=function(b){sa(a.i);a.i.m?b=Ea(a,a.i.m["throw"],b,a.i.D):(ta(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.A=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.u()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.u=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Ga),reject:g(this.u)}};
b.prototype.Ga=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.nb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Fa(g):this.o(g)}};
b.prototype.Fa=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.ob(h,g):this.o(g)};
b.prototype.u=function(g){this.D(2,g)};
b.prototype.o=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.Ha();this.J()};
b.prototype.Ha=function(){var g=this;e(function(){if(g.aa()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.aa=function(){if(this.A)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.J=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.nb=function(g){var h=this.m();g.ya(h.resolve,h.reject)};
b.prototype.ob=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(u,q){return"function"==typeof u?function(y){try{l(u(y))}catch(z){m(z)}}:q}
var l,m,p=new b(function(u,q){l=u;m=q});
this.ya(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ya=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).ya(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(y){return function(z){u[y]=z;q--;0==q&&l(u)}}
var u=[],q=0;do u.push(void 0),q++,d(k.value).ya(p(u.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||qa});
r("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
r("Set",function(a){function b(c){this.i=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b,c){a=a.split(".");c=c||A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.R=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ac=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},db=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function eb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){}
function sb(a){return new rb(tb,a)}
var tb={};sb("");var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);function Kb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function F(a){return-1!=Kb().indexOf(a)}
;function Lb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")||F("Silk")}
;var Mb={};function Nb(a){this.i=Mb===Mb?a:""}
Nb.prototype.toString=function(){return this.i.toString()};var Ob=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pb(a){return a?decodeURI(a):a}
function Qb(a){return Pb(a.match(Ob)[3]||null)}
function Rb(a){var b=a.match(Ob);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Sb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Tb(a){var b=[],c;for(c in a)Sb(c,a[c],b);return b.join("&")}
var Ub=/#|$/;function Vb(a,b){var c=a.search(Ub);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function Wb(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Xb(a){Xb[" "](a);return a}
Xb[" "]=function(){};var bc=F("Opera"),cc=F("Trident")||F("MSIE"),dc=F("Edge"),ec=F("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),fc=-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge");function gc(){var a=A.document;return a?a.documentMode:void 0}
var hc;a:{var ic="",jc=function(){var a=Kb();if(ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(dc)return/Edge\/([\d\.]+)/.exec(a);if(cc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fc)return/WebKit\/(\S+)/.exec(a);if(bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jc&&(ic=jc?jc[1]:"");if(cc){var kc=gc();if(null!=kc&&kc>parseFloat(ic)){hc=String(kc);break a}}hc=ic}var lc=hc,mc;if(A.document&&cc){var nc=gc();mc=nc?nc:parseInt(lc,10)||void 0}else mc=void 0;var oc=mc;var pc=Wb()||F("iPod"),qc=F("iPad");!F("Android")||Lb();Lb();var rc=F("Safari")&&!(Lb()||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(Wb()||F("iPad")||F("iPod"));var sc={},tc=null;
function vc(a,b){Ma(a);void 0===b&&(b=0);if(!tc){tc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));sc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===tc[h]&&(tc[h]=g)}}}b=sc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var wc="undefined"!==typeof Uint8Array,xc={};var yc;function zc(a){if(xc!==xc)throw Error("illegal external caller");this.Sa=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
zc.prototype.isEmpty=function(){return null==this.Sa};var Ac="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Bc(a,b){Object.isFrozen(a)||(Ac?a[Ac]|=b:void 0!==a.O?a.O|=b:Object.defineProperties(a,{O:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Cc(a,b){Object.isExtensible(a)&&(Ac?a[Ac]&&(a[Ac]&=~b):void 0!==a.O&&(a.O&=~b))}
function Dc(a){var b;Ac?b=a[Ac]:b=a.O;return null==b?0:b}
function Ec(a,b){Ac?a[Ac]=b:void 0!==a.O?a.O=b:Object.defineProperties(a,{O:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Fc(a){Bc(a,1);return a}
function Gc(a){Bc(a,17);return a}
function G(a){return a?!!(Dc(a)&2):!1}
function Hc(a){Bc(a,16);return a}
function Ic(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");Cc(a,16)}
function Jc(a,b){Ec(b,(Dc(a)|0)&-51)}
;var Nc={};function Oc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Pc,Qc=Object.freeze(Fc([]));function Rc(a){if(G(a.s))throw Error("Cannot mutate an immutable Message");}
;function Sc(a){return a.displayName||a.name||"unknown type name"}
function Tc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Sc(b)+" but got "+(a&&Sc(a.constructor)));return a}
;function Uc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(wc&&null!=a&&a instanceof Uint8Array)return vc(a);if(a instanceof zc){var b=a.Sa;return null==b?"":"string"===typeof b?b:a.Sa=vc(b)}}}return a}
;function Vc(a,b,c){if(null!=a){if(Array.isArray(a))a=Wc(a,b,c);else if(Oc(a)){var d={},e;for(e in a)d[e]=Vc(a[e],b,c);a=d}else a=b(a);return a}}
function Wc(a,b,c){var d=Array.prototype.slice.call(a);c(a,d);for(a=0;a<d.length;a++)d[a]=Vc(d[a],b,c);return d}
function Xc(a){if(a.Na===Nc)return a.toJSON();a=Uc(a);return Array.isArray(a)?Wc(a,Xc,Yc):a}
function Zc(a){if(!a)return a;if("object"===typeof a){if(wc&&null!=a&&a instanceof Uint8Array)return new Uint8Array(a);if(a.Na===Nc)return a.clone()}return a}
function Yc(){}
;function $c(a,b,c){return-1===b?null:b>=a.Y?a.H?a.H[b]:void 0:(void 0===c?0:c)&&a.H&&(c=a.H[b],null!=c)?c:a.s[b+a.U]}
function I(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Rc(a);a.cb&&(a.cb=void 0);if(b>=a.Y||d)return(a.H||(a.H=a.s[a.Y+a.U]={}))[b]=c,a;void 0!==a.H&&a.Y>=a.s.length?(d=a.s.length-1,e=b+a.U,e>=d?(a.s[d]=void 0,a.s[e]=c,a.s.push(a.H)):a.s[e]=c):a.s[b+a.U]=c;void 0!==a.H&&b in a.H&&delete a.H[b];return a}
function ad(a,b,c,d){var e=$c(a,b,d);Array.isArray(e)||(e=Qc);var f=Dc(e);f&1||Fc(e);G(a.s)?c&1||(Bc(e,2),Object.freeze(e)):e===Qc||f&2?(e=Fc(Array.prototype.slice.call(e)),I(a,b,e,d)):!(c&2)&&f&16&&Ic(e);return e}
function bd(a,b,c,d){Rc(a);(c=cd(a,c))&&c!==b&&null!=d&&I(a,c,void 0,!1);return I(a,b,d)}
function cd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=$c(a,e)&&(0!==c&&I(a,c,void 0,!1,!0),c=e)}return c}
function dd(a,b,c){var d=void 0===d?!1:d;var e=$c(a,c,d);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.Na!==Nc?f?new b(e):void 0:e;g!==e&&null!=g&&(I(a,c,g,d,!0),Bc(g.s,Dc(a.s)&-33));b=g;if(null==b)return b;G(b.s)&&!G(a.s)&&(b=ed(b),I(a,c,b,d));return b}
function fd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=a.i[c];d=ad(a,c,2,d);var g=!!(Dc(a.s)&16),h=G(d);h=G(a.s)||h;if(!f){f=[];for(var k=h,l=0;l<d.length;l++){var m=d[l];k=k||G(m);var p=b,u=g,q=!1;q=void 0===q?!1:q;u=void 0===u?!1:u;m=Array.isArray(m)?new p(u?Hc(m):m):q?new p:void 0;void 0!==m&&(f.push(m),h&&Bc(m.s,2))}a.i[c]=f;b=!k;Object.isFrozen(d)||(g=Dc(d)|33,Ec(d,b?g|8:g&-9))}e=h||e;d=G(f);e&&!d&&(Object.isFrozen(f)&&(a.i[c]=f=f.slice()),Bc(f,2),Object.freeze(f));!e&&d&&(a.i[c]=f=f.slice());
return f}
function J(a,b,c,d){Rc(a);null!=d?Tc(d,b):d=void 0;return I(a,c,d)}
function gd(a,b,c,d,e){Rc(a);null!=e?Tc(e,b):e=void 0;bd(a,c,d,e)}
function hd(a,b,c,d){Rc(a);if(null!=d){var e=Fc([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Tc(d[g],b).s,f=f||G(e[g]);a.i||(a.i={});a.i[c]=d;b=e;f?Cc(b,8):Bc(b,8)}else a.i&&(a.i[c]=void 0),e=Qc;return I(a,c,e)}
function id(a,b,c,d){Rc(a);var e=fd(a,c,b,void 0,!1);c=null!=d?Tc(d,c):new c;a=ad(a,b,2);e.push(c);a.push(c.s);G(c.s)&&Cc(a,8)}
function jd(a,b){return $c(a,b)}
function kd(a,b){a=$c(a,b);return null==a?"":a}
;function ld(a,b,c,d,e,f){(a=a.i&&a.i[c])?(e=f.Ja?Fc(a.slice()):a,hd(b,0<e.length?e[0].constructor:void 0,c,e)):(wc&&d instanceof Uint8Array?e=d.length?new zc(new Uint8Array(d)):yc||(yc=new zc(null)):(Array.isArray(d)&&(e?Bc(d,2):d&&Dc(d)&1&&f.Ja?(e=Array.prototype.slice.call(d),Ec(e,(Dc(d)|0)&-51),d=e):Ic(d)),e=d),I(b,c,e))}
;function L(a,b,c){a||(a=md);md=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.j,g=!1;if(!a){var h=f?[f]:[];Bc(h,48);a=h;h=!0}else if(h=!!(Dc(a)&16))g=Dc(a),Ec(a,g|32),g=!!(g&32);e&&0<a.length&&Oc(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.U=(f?0:-1)-d;this.i=void 0;this.s=a;a:{f=this.s.length;d=f-1;if(f&&(f=this.s[d],Oc(f))){this.H=f;b=Object.keys(f);0<b.length&&db(b,isNaN)?this.Y=Number.MAX_VALUE:this.Y=d-this.U;break a}void 0!==b&&-1<b?(this.Y=Math.max(b,d+1-this.U),this.H=void 0):
this.Y=Number.MAX_VALUE}if(!e&&this.H&&"g"in this.H)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c)for(e=h&&!g?Gc:Fc,b=0;b<c.length;b++)h=c[b],(g=$c(this,h))?Array.isArray(g)&&e(g):I(this,h,Qc,!1,!0)}
n=L.prototype;n.toJSON=function(){var a=this.s;return Pc?a:Wc(a,Xc,Yc)};
function nd(a){Pc=!0;try{return JSON.stringify(a.toJSON(),od)}finally{Pc=!1}}
n.clone=function(){var a=Wc(this.s,Zc,Jc);Hc(a);md=a;a=new this.constructor(a);md=null;pd(a,this);return a};
n.isMutable=function(){return!G(this.s)};
function ed(a){if(G(a.s)){var b={Ja:!0},c=G(a.s);if(c&&!b.Ja)throw Error("copyRepeatedFields must be true for frozen messages");c||Ic(a.s);var d=new a.constructor;a.la&&(d.la=a.la.slice());for(var e=a.s,f=0;f<e.length;f++){var g=e[f];if(f===e.length-1&&Oc(g))for(var h in g){var k=+h;Number.isNaN(k)?(d.H||(d.H=d.s[d.Y+d.U]={}))[h]=g[h]:ld(a,d,k,g[h],c,b)}else ld(a,d,f-a.U,g,c,b)}d.cb=a;a=d}return a}
n.Na=Nc;n.toString=function(){return this.s.toString()};
function od(a,b){return Uc(b)}
function pd(a,b){b.la&&(a.la=b.la.slice());var c=b.i;if(c){b=b.H;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=f;k=void 0===k?!1:k;f=G(h.s);var l=fd(h,e[0].constructor,g,k,f);g=ad(h,g,3,k);if(!(h=f)&&(h=g)){if(!g)throw Error("cannot check mutability state of non-array");h=!(Dc(g)&8)}if(h){for(h=0;h<l.length;h++)(k=l[h])&&G(k.s)&&!f&&(l[h]=ed(l[h]),g[h]=l[h].s);Bc(g,8)}f=l;for(l=0;l<Math.min(f.length,e.length);l++)pd(f[l],e[l])}}else throw Error("unexpected object: type: "+
La(e)+": "+e);}}}}
var md;var qd=window;sb("csi.gstatic.com");sb("googleads.g.doubleclick.net");sb("partner.googleadservices.com");sb("pubads.g.doubleclick.net");sb("securepubads.g.doubleclick.net");sb("tpc.googlesyndication.com");function rd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=sd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,td[c])c=td[c];else{c=String(c);if(!td[c]){var f=/function\s+([^\(]+)/m.exec(c);td[c]=f?f[1]:"[Anonymous]"}c=td[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function sd(a,b){b||(b={});b[ud(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[ud(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=sd(a,b));return c}
function ud(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var td={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var vd;try{new URL("s://g"),vd=!0}catch(a){vd=!1}var wd=vd;function xd(a,b){a.removeAttribute("srcdoc");if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.i:(La(b),b="type_error:SafeUrl");else{b:if(wd){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function yd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=yd.prototype;n.clone=function(){return new yd(this.x,this.y)};
n.equals=function(a){return a instanceof yd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function zd(a,b){this.width=a;this.height=b}
n=zd.prototype;n.clone=function(){return new zd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ad(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Bd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Cd(a){var b=Dd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ed(){var a=[];Cd(function(b){a.push(b)});
return a}
var Dd={Ib:"allow-forms",Jb:"allow-modals",Kb:"allow-orientation-lock",Lb:"allow-pointer-lock",Mb:"allow-popups",Nb:"allow-popups-to-escape-sandbox",Ob:"allow-presentation",Pb:"allow-same-origin",Qb:"allow-scripts",Rb:"allow-top-navigation",Sb:"allow-top-navigation-by-user-activation"},Fd=$a(function(){return Ed()});
function Gd(){var a=Hd(),b={};E(Fd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Hd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Id(a){this.isValid=a}
function Jd(a){return new Id(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Kd=[Jd("data"),Jd("http"),Jd("https"),Jd("mailto"),Jd("ftp"),new Id(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Ld(a,b){b=void 0===b?Kd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Id&&d.isValid(a))return new Hb(a,Ib)}}
function Md(a){var b=void 0===b?Kd:b;return Ld(a,b)||Jb}
;var Nd=(new Date).getTime();function Od(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Pd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Pd);function Qd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var u=g,q=0;64>q;q+=4)u[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=u[q-3]^u[q-8]^u[q-14]^u[q-16],u[q]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],z=e[2],H=e[3],K=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var M=H^y&(z^H);var N=1518500249}else M=y^z^H,N=1859775393;else 60>q?(M=y&z|H&(y|z),N=2400959708):(M=y^z^H,N=3395469782);M=((p<<5|p>>>27)&4294967295)+M+K+N+u[q]&4294967295;K=H;H=z;z=(y<<30|y>>>2)&4294967295;y=p;p=M}e[0]=e[0]+p&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+K&4294967295}
function c(p,u){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],y=0,z=p.length;y<z;++y)q.push(p.charCodeAt(y));p=q}u||(u=p.length);q=0;if(0==l)for(;q+64<u;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<u;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<u;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],u=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=u&255,u>>>=8;b(f);for(q=u=0;5>q;q++)for(var y=24;0<=y;y-=8)p[u++]=e[q]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,rb:function(){for(var p=d(),u="",q=0;q<p.length;q++)u+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return u}}}
;function Rd(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Sd(Od(d),a,c||null)].join(" "):null}
function Sd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Td(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Td(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Td(a){var b=Qd();b.update(a);return b.rb().toLowerCase()}
;var Ud={};function Vd(a){this.i=a||{cookie:""}}
n=Vd.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{La:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ic;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.La}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{La:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Yd=new Vd("undefined"==typeof document?null:document);function Zd(a){return!!Ud.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function $d(a,b,c,d){(a=A[a])||(a=(new Vd(document)).get(b));return a?Rd(a,c,d):null}
function ae(a){var b=void 0===b?!1:b;var c=Od(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Zd(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Vd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Zd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Vd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Rd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Zd(b)&&((b=$d("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=$d("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function be(){this.l=this.l;this.u=this.u}
be.prototype.l=!1;be.prototype.dispose=function(){this.l||(this.l=!0,this.fa())};
be.prototype.fa=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function ce(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
ce.prototype.stopPropagation=function(){this.l=!0};
ce.prototype.preventDefault=function(){this.defaultPrevented=!0};var de=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function ee(a,b){ce.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
D(ee,ce);var fe={2:"touch",3:"pen",4:"mouse"};
ee.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(ec){a:{try{Xb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:fe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ee.R.preventDefault.call(this)};
ee.prototype.stopPropagation=function(){ee.R.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ee.prototype.preventDefault=function(){ee.R.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ge="closure_listenable_"+(1E6*Math.random()|0);var he=0;function ie(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ba=e;this.key=++he;this.na=this.xa=!1}
function je(a){a.na=!0;a.listener=null;a.proxy=null;a.src=null;a.Ba=null}
;function ke(a){this.src=a;this.listeners={};this.i=0}
ke.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=le(a,b,d,e);-1<g?(b=a[g],c||(b.xa=!1)):(b=new ie(b,this.src,f,!!d,e),b.xa=c,a.push(b));return b};
ke.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=le(e,b,c,d);return-1<b?(je(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function me(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(je(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function le(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.na&&f.listener==b&&f.capture==!!c&&f.Ba==d)return e}return-1}
;var ne="closure_lm_"+(1E6*Math.random()|0),oe={},pe=0;function qe(a,b,c,d,e){if(d&&d.once)re(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)qe(a,b[f],c,d,e);else c=se(c),a&&a[ge]?a.ba(b,c,Na(d)?!!d.capture:!!d,e):te(a,b,c,!1,d,e)}
function te(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=ue(a);h||(a[ne]=h=new ke(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ve();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)de||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(we(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");pe++}}
function ve(){function a(c){return b.call(a.src,a.listener,c)}
var b=xe;return a}
function re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else c=se(c),a&&a[ge]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):te(a,b,c,!0,d,e)}
function ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=se(c),a&&a[ge])?a.i.remove(String(b),c,d,e):a&&(a=ue(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=le(b,c,d,e)),(c=-1<a?b[a]:null)&&ze(c))}
function ze(a){if("number"!==typeof a&&a&&!a.na){var b=a.src;if(b&&b[ge])me(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(we(c),d):b.addListener&&b.removeListener&&b.removeListener(d);pe--;(c=ue(b))?(me(c,a),0==c.i&&(c.src=null,b[ne]=null)):je(a)}}}
function we(a){return a in oe?oe[a]:oe[a]="on"+a}
function xe(a,b){if(a.na)a=!0;else{b=new ee(b,this);var c=a.listener,d=a.Ba||a.src;a.xa&&ze(a);a=c.call(d,b)}return a}
function ue(a){a=a[ne];return a instanceof ke?a:null}
var Ae="__closure_events_fn_"+(1E9*Math.random()>>>0);function se(a){if("function"===typeof a)return a;a[Ae]||(a[Ae]=function(b){return a.handleEvent(b)});
return a[Ae]}
;function Be(){be.call(this);this.i=new ke(this);this.aa=this;this.D=null}
D(Be,be);Be.prototype[ge]=!0;Be.prototype.addEventListener=function(a,b,c,d){qe(this,a,b,c,d)};
Be.prototype.removeEventListener=function(a,b,c,d){ye(this,a,b,c,d)};
function Ce(a,b){var c=a.D;if(c){var d=[];for(var e=1;c;c=c.D)d.push(c),++e}a=a.aa;c=b.type||b;"string"===typeof b?b=new ce(b,a):b instanceof ce?b.target=b.target||a:(e=b,b=new ce(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=De(g,c,!0,b)&&e}b.l||(g=b.i=a,e=De(g,c,!0,b)&&e,b.l||(e=De(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=De(g,c,!1,b)&&e}
Be.prototype.fa=function(){Be.R.fa.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,je(d[e]);delete a.listeners[c];a.i--}}this.D=null};
Be.prototype.ba=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function De(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.na&&g.capture==c){var h=g.listener,k=g.Ba||g.src;g.xa&&me(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ee(a){Be.call(this);var b=this;this.J=this.m=0;this.L=null!=a?a:{N:function(e,f){return setTimeout(e,f)},
da:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return w(e,Fe(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.J||Ge(this)}
v(Ee,Be);function He(){var a=Ie;Ee.i||(Ee.i=new Ee(a));return Ee.i}
Ee.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.L.da(this.J);delete Ee.i};
Ee.prototype.G=function(){return this.j};
function Ge(a){a.J=a.L.N(function(){var b;return x(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.v(3):w(c,Fe(a),3):w(c,Fe(a),3);Ge(a);c.i=0})},3E4)}
function Fe(a,b){return a.A?a.A:a.A=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.m=a.L.N(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:za(h);a.A=void 0;a.m&&(a.L.da(a.m),a.m=0);g!==a.j&&(a.j=g,a.j?Ce(a,"networkstatus-online"):Ce(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:ya(h),g=!1,h.v(3)}})})}
;function Je(){this.data_=[];this.i=-1}
Je.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Je.prototype.get=function(a){return!!this.data_[a]};
function Ke(a){-1===a.i&&(a.i=cb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Le(a){L.call(this,a,-1,Me)}
v(Le,L);function Ne(a,b){return I(a,2,b)}
function Oe(a,b){return I(a,3,b)}
function Pe(a,b){return I(a,4,b)}
function Qe(a,b){return I(a,5,b)}
function Re(a,b){return I(a,9,b)}
function Se(a,b){return hd(a,Te,10,b)}
function Ue(a,b){return I(a,11,b)}
function Ve(a,b){return I(a,1,b)}
function We(a,b){return I(a,7,b)}
function Te(a){L.call(this,a)}
v(Te,L);var Me=[10,6];var Xe="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Ye(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Ze(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function $e(){var a=window;if(!Ze(a))return null;var b=Ye(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Xe).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function af(a){var b;return Ue(Se(Qe(Ne(Ve(Pe(We(Re(Oe(new Le,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Te;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}
function bf(){var a,b;return null!=(b=null==(a=$e())?void 0:a.then(function(c){return af(c)}))?b:null}
;function cf(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
cf.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function df(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var ef;function ff(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Ad();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Va;c.Va=null;e()}};
return function(e){d.next={Va:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function gf(a){A.setTimeout(function(){throw a;},0)}
;function hf(){this.j=this.i=null}
hf.prototype.add=function(a,b){var c=jf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
hf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var jf=new cf(function(){return new kf},function(a){return a.reset()});
function kf(){this.next=this.scope=this.i=null}
kf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
kf.prototype.reset=function(){this.next=this.scope=this.i=null};var lf,mf=!1,nf=new hf;function of(a,b){lf||pf();mf||(lf(),mf=!0);nf.add(a,b)}
function pf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);lf=function(){a.then(qf)}}else lf=function(){var b=qf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!F("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(ef||(ef=ff()),ef(b)):A.setImmediate(b)}}
function qf(){for(var a;a=nf.remove();){try{a.i.call(a.scope)}catch(b){gf(b)}df(jf,a)}mf=!1}
;function rf(a,b){this.i=a[A.Symbol.iterator]();this.j=b}
rf.prototype[Symbol.iterator]=function(){return this};
rf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function sf(a,b){return new rf(a,b)}
;function tf(){this.blockSize=-1}
;function uf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.u=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
D(uf,tf);uf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function vf(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
uf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.j;d<b;){if(0==f)for(;d<=c;)vf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){vf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){vf(this,e);f=0;break}}this.j=f;this.m+=b}};
uf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;vf(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function wf(){}
wf.prototype.next=function(){return xf};
var xf={done:!0,value:void 0};function yf(a){return{value:a,done:!1}}
wf.prototype.M=function(){return this};function zf(a){if(a instanceof Af||a instanceof Bf||a instanceof Cf)return a;if("function"==typeof a.next)return new Af(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Af(function(){return a[Symbol.iterator]()});
if("function"==typeof a.M)return new Af(function(){return a.M()});
throw Error("Not an iterator or iterable.");}
function Af(a){this.j=a}
Af.prototype.M=function(){return new Bf(this.j())};
Af.prototype[Symbol.iterator]=function(){return new Cf(this.j())};
Af.prototype.i=function(){return new Cf(this.j())};
function Bf(a){this.j=a}
v(Bf,wf);Bf.prototype.next=function(){return this.j.next()};
Bf.prototype[Symbol.iterator]=function(){return new Cf(this.j)};
Bf.prototype.i=function(){return new Cf(this.j)};
function Cf(a){Af.call(this,function(){return a});
this.l=a}
v(Cf,Af);Cf.prototype.next=function(){return this.l.next()};function Df(a,b){this.j={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Df)for(c=Ef(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ef(a){Ff(a);return a.i.concat()}
n=Df.prototype;n.has=function(a){return Gf(this.j,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Hf;Ff(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Hf(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.j={};this.l=this.size=this.i.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return Gf(this.j,a)?(delete this.j[a],--this.size,this.l++,this.i.length>2*this.size&&Ff(this),!0):!1};
function Ff(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Gf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Gf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return Gf(this.j,a)?this.j[a]:b};
n.set=function(a,b){Gf(this.j,a)||(this.size+=1,this.i.push(a),this.l++);this.j[a]=b};
n.forEach=function(a,b){for(var c=Ef(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Df(this)};
n.keys=function(){return zf(this.M(!0)).i()};
n.values=function(){return zf(this.M(!1)).i()};
n.entries=function(){var a=this;return sf(this.keys(),function(b){return[b,a.get(b)]})};
n.M=function(a){Ff(this);var b=0,c=this.l,d=this,e=new wf;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return xf;var f=d.i[b++];return yf(a?f:d.j[f])};
return e};
function Gf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var If=A.JSON.stringify;function Jf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Kf(a){this.i=0;this.A=void 0;this.m=this.j=this.l=null;this.u=this.o=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){Lf(b,2,c)},function(c){Lf(b,3,c)})}catch(c){Lf(this,3,c)}}
function Mf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Mf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Nf=new cf(function(){return new Mf},function(a){a.reset()});
function Of(a,b,c){var d=Nf.get();d.j=a;d.onRejected=b;d.context=c;return d}
Kf.prototype.then=function(a,b,c){return Pf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Kf.prototype.$goog_Thenable=!0;Kf.prototype.cancel=function(a){if(0==this.i){var b=new Qf(a);of(function(){Rf(this,b)},this)}};
function Rf(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Rf(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Sf(c),Tf(c,e,3,b)))}a.l=null}else Lf(a,3,b)}
function qg(a,b){a.j||2!=a.i&&3!=a.i||rg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function Pf(a,b,c,d){var e=Of(null,null,null);e.i=new Kf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Qf?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;qg(a,e);return e.i}
Kf.prototype.J=function(a){this.i=0;Lf(this,2,a)};
Kf.prototype.aa=function(a){this.i=0;Lf(this,3,a)};
function Lf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.J,f=a.aa;if(d instanceof Kf){qg(d,Of(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if("function"===typeof k){sg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.i=b,a.l=null,rg(a),3!=b||c instanceof Qf||tg(a,c))}}
function sg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function rg(a){a.o||(a.o=!0,of(a.D,a))}
function Sf(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
Kf.prototype.D=function(){for(var a;a=Sf(this);)Tf(this,a,this.i,this.A);this.o=!1};
function Tf(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.u;a=a.l)a.u=!1;if(b.i)b.i.l=null,ug(b,c,d);else try{b.l?b.j.call(b.context):ug(b,c,d)}catch(e){vg.call(null,e)}df(Nf,b)}
function ug(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function tg(a,b){a.u=!0;of(function(){a.u&&vg.call(null,b)})}
var vg=gf;function Qf(a){Xa.call(this,a)}
D(Qf,Xa);Qf.prototype.name="cancel";function O(a){be.call(this);this.A=1;this.m=[];this.o=0;this.i=[];this.j={};this.D=!!a}
D(O,be);n=O.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.A;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.A=e+3;d.push(e);return e};
function wg(a,b,c){var d=xg;if(a=d.j[a]){var e=d.i;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ra(a)}}
n.ra=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.o?(this.m.push(a),this.i[a+1]=function(){}):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.ha=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];yg(this.i[g+1],this.i[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.ra(c)}}return 0!=e}return!1};
function yg(a,b,c){of(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.ra,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.fa=function(){O.R.fa.call(this);this.clear();this.m.length=0};function zg(a){this.i=a}
zg.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,If(b))};
zg.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
zg.prototype.remove=function(a){this.i.remove(a)};function Ag(a){this.i=a}
D(Ag,zg);function Bg(a){this.data=a}
function Cg(a){return void 0===a||a instanceof Bg?a:new Bg(a)}
Ag.prototype.set=function(a,b){Ag.R.set.call(this,a,Cg(b))};
Ag.prototype.j=function(a){a=Ag.R.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ag.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Dg(a){this.i=a}
D(Dg,Ag);Dg.prototype.set=function(a,b,c){if(b=Cg(b)){if(c){if(c<Date.now()){Dg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Dg.R.set.call(this,a,b)};
Dg.prototype.j=function(a){var b=Dg.R.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Dg.prototype.remove.call(this,a);else return b}};function Eg(){}
;function Fg(){}
D(Fg,Eg);Fg.prototype[Symbol.iterator]=function(){return zf(this.M(!0)).i()};
Fg.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Gg(a){this.i=a}
D(Gg,Fg);n=Gg.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.M=function(a){var b=0,c=this.i,d=new wf;d.next=function(){if(b>=c.length)return xf;var e=c.key(b++);if(a)return yf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yf(e)};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Hg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
D(Hg,Gg);function Ig(a,b){this.j=a;this.i=null;var c;if(c=cc)c=!(9<=Number(oc));if(c){Jg||(Jg=new Df);this.i=Jg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Jg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
D(Ig,Fg);var Kg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Jg=null;function Lg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Kg[b]})}
n=Ig.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Lg(a),b);Mg(this)};
n.get=function(a){a=this.i.getAttribute(Lg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Lg(a));Mg(this)};
n.M=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new wf;d.next=function(){if(b>=c.length)return xf;var e=c[b++];if(a)return yf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yf(e)};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Mg(this)};
function Mg(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ng(a,b){this.j=a;this.i=b+"::"}
D(Ng,Fg);Ng.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Ng.prototype.get=function(a){return this.j.get(this.i+a)};
Ng.prototype.remove=function(a){this.j.remove(this.i+a)};
Ng.prototype.M=function(a){var b=this.j[Symbol.iterator](),c=this,d=new wf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return yf(a?e.slice(c.i.length):c.j.get(e))};
return d};function Og(a){L.call(this,a)}
v(Og,L);Og.prototype.getKey=function(){return $c(this,1)};
Og.prototype.W=function(){return jd(this,2===cd(this,Pg)?2:-1)};
Og.prototype.setValue=function(a){return bd(this,2,Pg,a)};
var Pg=[2,3,4,5,6];function Qg(a){L.call(this,a)}
v(Qg,L);function Rg(a){L.call(this,a)}
v(Rg,L);function Sg(a){L.call(this,a,-1,Tg)}
v(Sg,L);var Tg=[2];function Ug(a){L.call(this,a,-1,Vg)}
v(Ug,L);Ug.prototype.getPlayerType=function(){return $c(this,36)};
Ug.prototype.setHomeGroupInfo=function(a){return J(this,Sg,81,a)};
var Vg=[9,66,24,32,86,100,101];function Wg(a){L.call(this,a,-1,Xg)}
v(Wg,L);var Xg=[15,26,28];function Yg(a){L.call(this,a)}
v(Yg,L);Yg.prototype.setToken=function(a){return I(this,2,a)};function Zg(a){L.call(this,a,-1,$g)}
v(Zg,L);Zg.prototype.setSafetyMode=function(a){return I(this,5,a)};
var $g=[12];function ah(a){L.call(this,a,-1,bh)}
v(ah,L);var bh=[12];function ch(a){L.call(this,a,-1,dh)}
v(ch,L);function eh(a){L.call(this,a)}
v(eh,L);eh.prototype.getKey=function(){return kd(this,1)};
eh.prototype.W=function(){return kd(this,2)};
eh.prototype.setValue=function(a){return I(this,2,a)};
var dh=[4,5];function fh(a){L.call(this,a)}
v(fh,L);function gh(a){L.call(this,a)}
v(gh,L);var hh=[2,3,4];function ih(a){L.call(this,a)}
v(ih,L);function jh(a){L.call(this,a)}
v(jh,L);function kh(a){L.call(this,a)}
v(kh,L);function lh(a){L.call(this,a,-1,mh)}
v(lh,L);var mh=[10,17];function nh(a){L.call(this,a)}
v(nh,L);function oh(a){L.call(this,a)}
v(oh,L);function ph(a){L.call(this,a)}
v(ph,L);function qh(a){L.call(this,a,442)}
v(qh,L);
var rh=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441];function sh(a){L.call(this,a)}
v(sh,L);function th(a){L.call(this,a)}
v(th,L);th.prototype.setVideoId=function(a){return bd(this,1,uh,a)};
th.prototype.getPlaylistId=function(){return jd(this,2===cd(this,uh)?2:-1)};
var uh=[1,2];function vh(a){L.call(this,a,-1,wh)}
v(vh,L);var wh=[3];var xh=A.window,yh,zh,Ah=(null==xh?void 0:null==(yh=xh.yt)?void 0:yh.config_)||(null==xh?void 0:null==(zh=xh.ytcfg)?void 0:zh.data_)||{};B("yt.config_",Ah);function Bh(){var a=arguments;1<a.length?Ah[a[0]]=a[1]:1===a.length&&Object.assign(Ah,a[0])}
function Q(a,b){return a in Ah?Ah[a]:b}
function Ch(){return Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Dh(){var a=Ah.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Eh=[];function Fh(a){Eh.forEach(function(b){return b(a)})}
function Gh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Hh(b)}}:a}
function Hh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=Q("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Bh("ERRORS",e));Fh(a)}
function Ih(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=Q("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Bh("ERRORS",e))}
;var Jh=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Jh});var Kh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Lh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Kh||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function Mh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
Lh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Lh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Lh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=A.ytEventsEventsListeners||{};B("ytEventsEventsListeners",kb);var Nh=A.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Nh);
function Oh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Ph(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Qh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
var Qh=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Rh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Oh(a,b,c,d);if(e)return e;e=++Nh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Lh(h);if(!Bd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Lh(h);
h.currentTarget=a;return c.call(a,h)};
g=Gh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Qh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
;function Sh(a,b){"function"===typeof a&&(a=Gh(a));return window.setTimeout(a,b)}
function Th(a,b){"function"===typeof a&&(a=Gh(a));return window.setInterval(a,b)}
;var Uh=/^[\w.]*$/,Vh={q:!0,search_query:!0};function Wh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Xh(f[0]||""),h=Xh(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(Wh);k.args=[{key:l,value:f[1],query:a,method:Yh==m?"unchanged":m}];Vh.hasOwnProperty(l)||Ih(k)}}return c}
var Yh=String(Wh);function Zh(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function $h(a){"?"==a.charAt(0)&&(a=a.substr(1));return Wh(a,"&")}
function ai(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=$h(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Tb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function bi(a){if(!b)var b=window.location.href;var c=a.match(Ob)[1]||null,d=Qb(a);c&&d?(a=a.match(Ob),b=b.match(Ob),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Qb(b)==d&&(Number(b.match(Ob)[4]||null)||null)==(Number(a.match(Ob)[4]||null)||null):!0;return a}
function Xh(a){return a&&a.match(Uh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function R(a){a=ci(a);return"string"===typeof a&&"false"===a?!1:!!a}
function di(a,b){a=ci(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ci(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
function ei(){var a=[],b=Q("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=Q("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function fi(a){var b=gi;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Nd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(Y){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?qd:g;try{var h=g.history.length}catch(Y){h=0}e.u_his=h;var k;e.u_h=null==(k=qd.screen)?void 0:k.height;var l;e.u_w=null==(l=qd.screen)?void 0:l.width;var m;e.u_ah=null==(m=qd.screen)?void 0:m.availHeight;var p;e.u_aw=null==
(p=qd.screen)?void 0:p.availWidth;var u;e.u_cd=null==(u=qd.screen)?void 0:u.colorDepth}catch(Y){}h=b.i;try{var q=h.screenX;var y=h.screenY}catch(Y){}try{var z=h.outerWidth;var H=h.outerHeight}catch(Y){}try{var K=h.innerWidth;var M=h.innerHeight}catch(Y){}try{var N=h.screenLeft;var nb=h.screenTop}catch(Y){}try{K=h.innerWidth,M=h.innerHeight}catch(Y){}try{var uc=h.screen.availWidth;var Aa=h.screen.availTop}catch(Y){}q=[N,nb,q,y,uc,Aa,z,H,K,M];y=b.i.top;try{var ua=(y||window).document,Z="CSS1Compat"==
ua.compatMode?ua.documentElement:ua.body;var da=(new zd(Z.clientWidth,Z.clientHeight)).round()}catch(Y){da=new zd(-12245933,-12245933)}ua=da;da={};var ea=void 0===ea?A:ea;Z=new Je;ea.SVGElement&&ea.document.createElementNS&&Z.set(0);y=Gd();y["allow-top-navigation-by-user-activation"]&&Z.set(1);y["allow-popups-to-escape-sandbox"]&&Z.set(2);ea.crypto&&ea.crypto.subtle&&Z.set(3);ea.TextDecoder&&ea.TextEncoder&&Z.set(4);ea=Ke(Z);da.bc=ea;da.bih=ua.height;da.biw=ua.width;da.brdim=q.join();b=b.j;b=(da.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,da.wgl=!!qd.WebGLRenderingContext,da);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var gi=new function(){var a=window.document;this.i=window;this.j=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return Zh(fi(a))});Date.now();var hi="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function ii(){if(!hi)return null;var a=hi();return"open"in a?a:null}
;var ji={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ki="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Pd)),li=!1;
function mi(a,b){b=void 0===b?{}:b;var c=bi(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in ji){var f=Q(ji[e]);"X-Goog-Visitor-Id"!==e||f||(f=Q("VISITOR_DATA"));!f||!c&&Qb(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Qb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Qb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!Qb(a))b["X-YouTube-Ad-Signals"]=Zh(fi());return b}
function ni(a){var b=window.location.search,c=Qb(a);R("debug_handle_relative_url_for_query_forward_killswitch")||c||!bi(a)||(c=document.location.hostname);var d=Pb(a.match(Ob)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=$h(b),f={};E(ki,function(g){e[g]&&(f[g]=e[g])});
return ai(a,f||{},!1)}
function oi(a,b){var c=b.format||"JSON";a=pi(a,b);var d=qi(a,b),e=!1,f=ri(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(l||p||u)m=si(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||A;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Sh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function pi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ai(a,b||{},!0);return a}
function qi(a,b){var c=Q("XSRF_FIELD_NAME"),d=Q("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=Q("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Qb(a)&&!b.withCredentials&&Qb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=$h(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Tb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!li&&a&&"POST"!=b.method&&(li=!0,Hh(Error("AJAX request with postData should use POST")));return e}
function si(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ih(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ti(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=ui(g)})}d&&vi(e);
return e}
function vi(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;sb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===qb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){A.console&&A.console.error(g.message)}qb=e}else qb=e}d=(e=qb)?e.createHTML(d):d;a[c]=new Nb(d)}else vi(a[b])}}
function ti(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ui(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ri(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Gh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ii();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=ni(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=mi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var wi={Xb:"WEB_DISPLAY_MODE_UNKNOWN",Tb:"WEB_DISPLAY_MODE_BROWSER",Vb:"WEB_DISPLAY_MODE_MINIMAL_UI",Wb:"WEB_DISPLAY_MODE_STANDALONE",Ub:"WEB_DISPLAY_MODE_FULLSCREEN"};function xi(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var yi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},zi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Ai={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Bi={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ci(){var a=A.navigator;return a?a.connection:void 0}
;function Di(){return"INNERTUBE_API_KEY"in Ah&&"INNERTUBE_API_VERSION"in Ah}
function Ei(){return{innertubeApiKey:Q("INNERTUBE_API_KEY"),innertubeApiVersion:Q("INNERTUBE_API_VERSION"),Ka:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Za:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),xb:Q("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION"),bb:Q("INNERTUBE_CONTEXT_HL"),ab:Q("INNERTUBE_CONTEXT_GL"),yb:Q("INNERTUBE_HOST_OVERRIDE")||"",Ab:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),zb:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Fi(a){var b={client:{hl:a.bb,gl:a.ab,clientName:a.Za,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ka}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ei();0<c.length&&(b.request={internalExperimentFlags:c});Gi(a,void 0,b);Hi(void 0,b);Ii(a,void 0,b);Ji(void 0,b);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&
(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries($h(Q("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Ki(a){var b=new ah,c=new Ug;I(c,1,a.bb);I(c,2,a.ab);I(c,16,a.xb);I(c,17,a.innertubeContextClientVersion);if(a.Ka){var d=a.Ka,e=new Qg;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,Qg,62,e)}(d=A.devicePixelRatio)&&1!=d&&I(c,65,d);d=Q("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=ei();if(0<d.length){e=new Wg;for(var f=0;f<d.length;f++){var g=new Og;I(g,1,d[f].key);g.setValue(d[f].value);
id(e,15,Og,g)}J(b,Wg,5,e)}Gi(a,c);Hi(c);Ii(a,c);Ji(c);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new Zg,I(a,3,Q("DELEGATED_SESSION_ID")));a=t(Object.entries($h(Q("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,Ug,1,c);return b}
function Gi(a,b,c){a=a.Za;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=dd(b,Rg,96)||new Rg;var d=xi();d=Object.keys(wi).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,Rg,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=xi())}
function Hi(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Ii(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=dd(b,Qg,62))?d:new Qg;I(c,6,a.appInstallData);J(b,Qg,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ji(a,b){a:{var c=Ci();if(c){var d=yi[c.type||"unknown"]||"CONN_UNKNOWN";c=yi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,zi[d]):b&&(b.client.connectionType=d));R("web_log_effective_connection_type")&&(d=Ci(),d=null!=d&&d.effectiveType?Bi.hasOwnProperty(d.effectiveType)?Bi[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,Ai[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Li(a,b,c){c=void 0===c?{}:c;var d={};Q("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":Q("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Zb||Q("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Yb:b=ae([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function Mi(a){a=Object.assign({},a);delete a.Authorization;var b=ae();if(b){var c=new uf;c.update(Q("INNERTUBE_API_KEY"));c.update(b);a.hash=vc(c.digest(),3)}return a}
;function Ni(a){var b=new Hg;(b=b.isAvailable()?a?new Ng(b,a):b:null)||(a=new Ig(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Dg(a):null;this.j=document.domain||window.location.hostname}
Ni.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(If(b))}catch(f){return}else e=escape(b);b=this.j;Yd.set(""+a,e,{La:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Ni.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=Yd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ni.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;Yd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Oi=window,T=Oi.ytcsi&&Oi.ytcsi.now?Oi.ytcsi.now:Oi.performance&&Oi.performance.timing&&Oi.performance.now&&Oi.performance.timing.navigationStart?function(){return Oi.performance.timing.navigationStart+Oi.performance.now()}:function(){return(new Date).getTime()};var Pi;function Qi(){Pi||(Pi=new Ni("yt.innertube"));return Pi}
function Ri(a,b,c,d){if(d)return null;d=Qi().get("nextId",!0)||1;var e=Qi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Mi(c),requestTime:Math.round(T())};Qi().set("nextId",d+1,86400,!0);Qi().set("requests",e,86400,!0);return d}
function Si(a){var b=Qi().get("requests",!0)||{};delete b[a];Qi().set("requests",b,86400,!0)}
function Ti(a){var b=Qi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Mi(Li(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Ui(a,d.method,e,{}));delete b[c]}}Qi().set("requests",b,86400,!0)}}
;function Vi(){}
Vi.prototype.N=function(a,b){return Wi(a,1,b)};
function Xi(a,b){Wi(a,2,b)}
;function Yi(){Vi.apply(this,arguments)}
v(Yi,Vi);function Zi(){Yi.i||(Yi.i=new Yi);return Yi.i}
function Wi(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Sh(a,c||0)}
Yi.prototype.da=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Yi.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};var Ie=Zi();var $i=pc||qc;var aj=function(){var a;return function(){a||(a=new Ni("ytidb"));return a}}();
function bj(){var a;return null==(a=aj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var cj=[],dj=!1;function ej(a){dj||(cj.push({type:"ERROR",payload:a}),10<cj.length&&cj.shift())}
function fj(a,b){dj||(cj.push({type:"EVENT",eventType:a,payload:b}),10<cj.length&&cj.shift())}
;function gj(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(gj,Error);function hj(){try{return ij(),!0}catch(a){return!1}}
function ij(){if(void 0!==Q("DATASYNC_ID"))return Q("DATASYNC_ID");throw new gj("Datasync ID not set","unknown");}
;function jj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function kj(a){return a.substr(0,a.indexOf(":"))||a}
;var lj={},mj=(lj.AUTH_INVALID="No user identifier specified.",lj.EXPLICIT_ABORT="Transaction was explicitly aborted.",lj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",lj.MISSING_INDEX="Index not created.",lj.MISSING_OBJECT_STORES="Object stores not created.",lj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",lj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",lj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
lj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",lj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",lj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",lj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",lj),nj={},oj=(nj.AUTH_INVALID="ERROR",nj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",nj.EXPLICIT_ABORT="IGNORED",nj.IDB_NOT_SUPPORTED="ERROR",nj.MISSING_INDEX=
"WARNING",nj.MISSING_OBJECT_STORES="ERROR",nj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",nj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",nj.QUOTA_EXCEEDED="WARNING",nj.QUOTA_MAYBE_EXCEEDED="WARNING",nj.UNKNOWN_ABORT="WARNING",nj.INCOMPATIBLE_DB_VERSION="WARNING",nj),pj={},qj=(pj.AUTH_INVALID=!1,pj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,pj.EXPLICIT_ABORT=!1,pj.IDB_NOT_SUPPORTED=!1,pj.MISSING_INDEX=!1,pj.MISSING_OBJECT_STORES=!1,pj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,pj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,pj.QUOTA_EXCEEDED=!1,pj.QUOTA_MAYBE_EXCEEDED=!0,pj.UNKNOWN_ABORT=!0,pj.INCOMPATIBLE_DB_VERSION=!1,pj);function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?mj[a]:c;d=void 0===d?oj[a]:d;e=void 0===e?qj[a]:e;gj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,U.prototype)}
v(U,gj);function rj(a,b){U.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},mj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,rj.prototype)}
v(rj,U);function sj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,sj.prototype)}
v(sj,Error);var tj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function uj(a,b,c,d){b=kj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new U("QUOTA_EXCEEDED",a);if(rc&&"UnknownError"===e.name)return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof sj)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&tj.some(function(f){return e.message.includes(f)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",fc:e.name})];e.level="WARNING";return e}
function vj(a,b,c){var d=bj();return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function wj(a){if(!a)throw Error();throw a;}
function xj(a){return a}
function yj(a){this.i=a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(new yj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ca:0};f.ca<a.length;f={ca:f.ca},++f.ca)zj(V.resolve(a[f.ca]).then(function(g){return function(h){d[g.ca]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
V.resolve=function(a){return new V(new yj(function(b,c){a instanceof V?a.then(b,c):b(a)}))};
V.reject=function(a){return new V(new yj(function(b,c){c(a)}))};
V.prototype.then=function(a,b){var c=this,d=null!=a?a:xj,e=null!=b?b:wj;return new V(new yj(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Aj(c,c,d,f,g)}),c.onRejected.push(function(){Bj(c,c,e,f,g)})):"FULFILLED"===c.state.status?Aj(c,c,d,f,g):"REJECTED"===c.state.status&&Bj(c,c,e,f,g)}))};
function zj(a,b){a.then(void 0,b)}
function Aj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Cj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Bj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Cj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Cj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Cj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Dj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ej(a){return new Promise(function(b,c){Dj(a,b,c)})}
function W(a){return new V(new yj(function(b,c){Dj(a,b,c)}))}
;function Fj(a,b){return new V(new yj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Gj(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(T());this.j=!1}
n=Gj.prototype;n.add=function(a,b,c){return Hj(this,[a],{mode:"readwrite",K:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Hj(this,[a],{mode:"readwrite",K:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return Hj(this,[a],{mode:"readonly",K:!0},function(c){return c.objectStore(a).count(b)})};
function Ij(a,b,c){a=a.i.createObjectStore(b,c);return new Jj(a)}
n.delete=function(a,b){return Hj(this,[a],{mode:"readwrite",K:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Hj(this,[a],{mode:"readonly",K:!0},function(c){return c.objectStore(a).get(b)})};
function Kj(a,b){return Hj(a,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(c){c=c.objectStore("LogsRequestsStore");return W(c.i.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Hj(a,b,c,d){var e,f,g,h,k,l,m,p,u,q,y,z;return x(function(H){switch(H.i){case 1:var K={mode:"readonly",K:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.K?3:1;g=0;case 2:if(h){H.v(3);break}g++;k=Math.round(T());va(H,4);l=a.i.transaction(b,e.mode);K=new Lj(l);K=Mj(K,d);return w(H,K,6);case 6:return m=H.j,p=Math.round(T()),Nj(a,k,p,g,void 0,b.join(),e),H.return(m);case 4:u=ya(H);q=Math.round(T());y=uj(u,a.i.name,b.join(),a.i.version);
if((z=y instanceof U&&!y.i)||g>=f)Nj(a,k,q,g,y,b.join(),e),h=y;H.v(2);break;case 3:return H.return(Promise.reject(h))}})}
function Nj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&fj("QUOTA_EXCEEDED",{dbName:kj(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),fj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Ck(a,!1,d,f,b,g.tag),ej(e)):Ck(a,!0,d,f,b,g.tag)}
function Ck(a,b,c,d,e,f){fj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.i.name};
function Jj(a){this.i=a}
n=Jj.prototype;n.add=function(a,b){return W(this.i.add(a,b))};
n.autoIncrement=function(){return this.i.autoIncrement};
n.clear=function(){return W(this.i.clear()).then(function(){})};
n.count=function(a){return W(this.i.count(a))};
function Dk(a,b){return Ek(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Dk(this,a):W(this.i.delete(a))};
n.get=function(a){return W(this.i.get(a))};
n.index=function(a){try{return new Fk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new sj(a,this.i.name);throw b;}};
n.getName=function(){return this.i.name};
n.keyPath=function(){return this.i.keyPath};
function Ek(a,b,c){a=a.i.openCursor(b.query,b.direction);return Gk(a).then(function(d){return Fj(d,c)})}
function Lj(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=U;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Mj(a,b){var c=new Promise(function(d,e){try{zj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
Lj.prototype.abort=function(){this.i.abort();this.j=!0;throw new U("EXPLICIT_ABORT");};
Lj.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Jj(a),this.l.set(a,b));return b};
function Fk(a){this.i=a}
n=Fk.prototype;n.count=function(a){return W(this.i.count(a))};
n.delete=function(a){return Hk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return W(this.i.get(a))};
n.getKey=function(a){return W(this.i.getKey(a))};
n.keyPath=function(){return this.i.keyPath};
n.unique=function(){return this.i.unique};
function Hk(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Gk(a).then(function(d){return Fj(d,c)})}
function Ik(a,b){this.request=a;this.cursor=b}
function Gk(a){return W(a).then(function(b){return b?new Ik(a,b):null})}
n=Ik.prototype;n.advance=function(a){this.cursor.advance(a);return Gk(this.request)};
n.continue=function(a){this.cursor.continue(a);return Gk(this.request)};
n.delete=function(){return W(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.W=function(){return this.cursor.value};
n.update=function(a){return W(this.cursor.update(a))};function Jk(a,b,c){return new Promise(function(d,e){function f(){u||(u=new Gj(g.result,{closed:p}));return u}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Gb,m=c.upgrade,p=c.closed,u;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&fj("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:kj(a)});var y=f(),z=new Lj(g.transaction);
m&&m(y,function(H){return q.oldVersion<H&&q.newVersion>=H},z);
z.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){fj("IDB_UNEXPECTEDLY_CLOSED",{dbName:kj(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Kk(a,b,c){c=void 0===c?{}:c;return Jk(a,b,c)}
function Lk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,Ej(c),4);
if(2!=g.i)return xa(g,0);f=ya(g);throw uj(f,a,"",-1);})}
;function Mk(a){return new Promise(function(b){Xi(function(){b()},a)})}
function Nk(a,b){this.name=a;this.options=b;this.m=!0;this.o=this.u=0;this.j=500}
Nk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Kk(a,b,c)};
Nk.prototype.delete=function(a){a=void 0===a?{}:a;return Lk(this.name,a)};
function Ok(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Pk(a,b){if(!b)throw vj("openWithToken",kj(a.name));return Qk(a)}
function Qk(a){function b(){var f,g,h,k,l,m,p,u,q,y;return x(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",va(z,2),w(z,a.l(a.name,a.options.version,d),4);case 4:h=z.j;for(var H=a.options,K=[],M=t(Object.keys(H.ma)),N=M.next();!N.done;N=M.next()){N=N.value;var nb=H.ma[N],uc=void 0===nb.Eb?Number.MAX_VALUE:nb.Eb;!(h.i.version>=nb.Ia)||h.i.version>=uc||h.i.objectStoreNames.contains(N)||K.push(N)}k=K;if(0===k.length){z.v(5);break}l=Object.keys(a.options.ma);m=h.objectStoreNames();
if(a.o<di("ytidb_reopen_db_retries",0))return a.o++,h.close(),ej(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.u<di("ytidb_remake_db_retries",1))){z.v(6);break}a.u++;if(!R("ytidb_remake_db_enable_backoff_delay")){z.v(7);break}return w(z,Mk(a.j),8);case 8:a.j*=2;case 7:return w(z,a.delete(),9);case 9:return ej(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new rj(m,l);case 5:return z.return(h);case 2:p=ya(z);if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.v(10);break}return w(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:u=z.j;q=u.i.version;if(void 0!==a.options.version&&q>a.options.version+1)throw u.close(),
a.m=!1,Ok(a,q);return z.return(u);case 10:throw c(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),uj(p,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw Ok(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,Gb:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Rk=new Nk("YtIdbMeta",{ma:{databases:{Ia:1}},upgrade:function(a,b){b(1)&&Ij(a,"databases",{keyPath:"actualName"})}});
function Sk(a,b){var c;return x(function(d){if(1==d.i)return w(d,Pk(Rk,b),2);c=d.j;return d.return(Hj(c,["databases"],{K:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return W(f.i.put(a,void 0)).then(function(){})})}))})}
function Tk(a,b){var c;return x(function(d){if(1==d.i)return a?w(d,Pk(Rk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function Uk(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],w(e,Pk(Rk,b),2)):3!=e.i?(d=e.j,w(e,Hj(d,["databases"],{K:!0,mode:"readonly"},function(f){c.length=0;return Ek(f.objectStore("databases"),{},function(g){a(g.W())&&c.push(g.W());return g.continue()})}),3)):e.return(c)})}
function Vk(a){return Uk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Wk,Xk=new function(){}(new function(){});
function Yk(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=bj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=$i)f=/WebKit\/([0-9]+)/.exec(Kb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Kb()),f=!(f&&602<=parseInt(f[1],10)));if(f||dc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Sk(d,Xk),4);case 4:return w(e,Tk("yt-idb-test-do-not-use",Xk),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function Zk(){if(void 0!==Wk)return Wk;dj=!0;return Wk=Yk().then(function(a){dj=!1;var b;if(null!=(b=aj())&&b.i){var c;b={hasSucceededOnce:(null==(c=bj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=aj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function $k(){return C("ytglobal.idbToken_")||void 0}
function al(){var a=$k();return a?Promise.resolve(a):Zk().then(function(b){(b=b?Xk:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Jf;function bl(a){if(!hj())throw a=new U("AUTH_INVALID",{dbName:a}),ej(a),a;var b=ij();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function cl(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.i){case 1:return f=null!=(e=Error().stack)?e:"",w(m,al(),2);case 2:g=m.j;if(!g)throw h=vj("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ej(h),h;jj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:bl(a);va(m,3);return w(m,Sk(k,g),5);case 5:return w(m,Kk(k.actualName,b,d),6);case 6:return m.return(m.j);case 3:return l=ya(m),va(m,7),w(m,Tk(k.actualName,g),9);case 9:xa(m,
8);break;case 7:ya(m);case 8:throw l;}})}
function dl(a,b,c){c=void 0===c?{}:c;return cl(a,b,!1,c)}
function el(a,b,c){c=void 0===c?{}:c;return cl(a,b,!0,c)}
function fl(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return w(e,al(),2);if(3!=e.i){c=e.j;if(!c)return e.return();jj(a);d=bl(a);return w(e,Lk(d.actualName,b),3)}return w(e,Tk(d.actualName,c),0)})}
function gl(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?w(e,Lk(d.actualName,b),2):w(e,Tk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function hl(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return w(d,al(),2);if(3!=d.i){b=d.j;if(!b)return d.return();jj("LogsDatabaseV2");return w(d,Vk(b),3)}c=d.j;return w(d,gl(c,a,b),0)})}
function il(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return w(d,al(),2);if(3!=d.i){c=d.j;if(!c)return d.return();jj(a);return w(d,Lk(a,b),3)}return w(d,Tk(a,c),0)})}
;function jl(a){this.wa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ga=function(){};
this.now=Date.now;this.ka=!1;var b;this.lb=null!=(b=a.lb)?b:100;var c;this.kb=null!=(c=a.kb)?c:1;var d;this.ib=null!=(d=a.ib)?d:2592E6;var e;this.hb=null!=(e=a.hb)?e:12E4;var f;this.jb=null!=(f=a.jb)?f:5E3;var g;this.B=null!=(g=a.B)?g:void 0;this.Aa=!!a.Aa;var h;this.za=null!=(h=a.za)?h:.1;var k;this.Da=null!=(k=a.Da)?k:10;a.handleError&&(this.handleError=a.handleError);a.ga&&(this.ga=a.ga);a.ka&&(this.ka=a.ka);a.wa&&(this.wa=a.wa);this.C=a.C;this.L=a.L;this.F=a.F;this.I=a.I;this.T=a.T;this.Pa=a.Pa;
this.Oa=a.Oa;kl(this)&&(!this.C||this.C("networkless_logging"))&&ll(this)}
function ll(a){kl(a)&&!a.ka&&(a.i=!0,a.Aa&&Math.random()<=a.za&&a.F.qb(a.B),ml(a),a.I.G()&&a.qa(),a.I.ba(a.Pa,a.qa.bind(a)),a.I.ba(a.Oa,a.Ua.bind(a)))}
n=jl.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(kl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F.set(d,this.B).then(function(e){d.id=e;c.I.G()&&nl(c,d)}).catch(function(e){nl(c,d);
ol(c,e)})}else this.T(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(kl(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C&&this.C("nwl_skip_retry")&&(e.skipRetry=c);if(this.I.G()||this.C&&this.C("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return w(k,d.F.set(e,d.B).catch(function(l){ol(d,l)}),2);
f(g,h);k.i=0})}}this.T(a,b,e.skipRetry)}else this.F.set(e,this.B).catch(function(g){d.T(a,b,e.skipRetry);
ol(d,g)})}else this.T(a,b,this.C&&this.C("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(kl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.F.ea(d.id,c.B):e=!0;c.I.S&&c.C&&c.C("vss_network_hint")&&c.I.S(!0);f(g,h)};
this.T(d.url,d.options);this.F.set(d,this.B).then(function(g){d.id=g;e&&c.F.ea(d.id,c.B)}).catch(function(g){ol(c,g)})}else this.T(a,b)};
n.qa=function(){var a=this;if(!kl(this))throw vj("throttleSend");this.j||(this.j=this.L.N(function(){var b;return x(function(c){if(1==c.i)return w(c,a.F.Ya("NEW",a.B),2);if(3!=c.i)return b=c.j,b?w(c,nl(a,b),3):(a.Ua(),c.return());a.j&&(a.j=0,a.qa());c.i=0})},this.lb))};
n.Ua=function(){this.L.da(this.j);this.j=0};
function nl(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!kl(a))throw c=vj("immediateSend"),c;if(void 0===b.id){e.v(2);break}return w(e,a.F.Cb(b.id,a.B),3);case 3:(d=e.j)?b=d:a.ga(Error("The request cannot be found in the database."));case 2:if(pl(a,b,a.ib)){e.v(4);break}a.ga(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return w(e,a.F.ea(b.id,a.B),5);case 5:return e.return();case 4:b.skipRetry||(b=ql(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return w(e,a.F.ea(b.id,a.B),8);case 8:a.T(b.url,b.options,!!b.skipRetry),e.i=0}})}
function ql(a,b){if(!kl(a))throw vj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:g=rl(f);if(!(a.C&&a.C("nwl_consider_error_code")&&g||a.C&&!a.C("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Da)){l.v(2);break}if(!a.I.oa){l.v(3);break}return w(l,a.I.oa(),3);case 3:if(a.I.G()){l.v(2);break}c(e,f);if(!a.C||!a.C("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.v(6);break}return w(l,a.F.Qa(b.id,a.B,!1),6);case 6:return l.return();case 2:if(a.C&&a.C("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Da)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.v(8);break}return b.sendCount<a.kb?w(l,a.F.Qa(b.id,a.B),12):w(l,a.F.ea(b.id,a.B),8);case 12:a.L.N(function(){a.I.G()&&a.qa()},a.jb);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):w(h,a.F.ea(b.id,a.B),2);a.I.S&&a.C&&a.C("vss_network_hint")&&a.I.S(!0);d(e,f);h.i=0})};
return b}
function pl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ml(a){if(!kl(a))throw vj("retryQueuedRequests");a.F.Ya("QUEUED",a.B).then(function(b){b&&!pl(a,b,a.hb)?a.L.N(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.v(2):w(c,a.F.Qa(b.id,a.B),2);ml(a);c.i=0})}):a.I.G()&&a.qa()})}
function ol(a,b){a.mb&&!a.I.G()?a.mb(b):a.handleError(b)}
function kl(a){return!!a.B||a.wa}
function rl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var sl=C("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.ra;O.prototype.publish=O.prototype.ha;O.prototype.clear=O.prototype.clear;B("ytPubsub2Pubsub2Instance",sl);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);function tl(a,b){Nk.call(this,a,b);this.options=b;jj(a)}
v(tl,Nk);function ul(a,b){var c;return function(){c||(c=new tl(a,b));return c}}
tl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ra?el:dl)(a,b,Object.assign({},c))};
tl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ra?il:fl)(this.name,a)};
function vl(a,b){return ul(a,b)}
;var wl;
function xl(){if(wl)return wl();var a={};wl=vl("LogsDatabaseV2",{ma:(a.LogsRequestsStore={Ia:2},a),Ra:!1,upgrade:function(b,c,d){c(2)&&Ij(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return wl()}
;function yl(a){return Pk(xl(),a)}
function zl(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,yl(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:Q("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Kj(d,e),3);f=g.j;c.Hb=T();Al(c);return g.return(f)})}
function Bl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.i)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,yl(b),2);if(3!=l.i)return d=l.j,e=Q("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Hj(d,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(m){return Hk(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.W()&&(k=p.W(),"NEW"===a&&(k.status="QUEUED",p.update(k)))})}),
3);
c.Hb=T();Al(c);return l.return(k)})}
function Cl(a,b){var c;return x(function(d){if(1==d.i)return w(d,yl(b),2);c=d.j;return d.return(Hj(c,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",W(f.i.put(g,void 0)).then(function(){return g})})}))})}
function Dl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return w(e,yl(b),2);d=e.j;return e.return(Hj(d,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),W(g.i.put(h,void 0)).then(function(){return h})):V.resolve(void 0)})}))})}
function El(a,b){var c;return x(function(d){if(1==d.i)return w(d,yl(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Fl(a){var b,c;return x(function(d){if(1==d.i)return w(d,yl(a),2);b=d.j;c=T()-2592E6;return w(d,Hj(b,["LogsRequestsStore"],{mode:"readwrite",K:!0},function(e){return Ek(e.objectStore("LogsRequestsStore"),{},function(f){if(f.W().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Gl(){x(function(a){return w(a,hl(),0)})}
function Al(a){if(!R("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Hl={},Il=vl("ServiceWorkerLogsDatabase",{ma:(Hl.SWHealthLog={Ia:1},Hl),Ra:!0,upgrade:function(a,b){b(1)&&Ij(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Jl(a){return Pk(Il(),a)}
function Kl(a){var b,c;x(function(d){if(1==d.i)return w(d,Jl(a),2);b=d.j;c=T()-2592E6;return w(d,Hj(b,["SWHealthLog"],{mode:"readwrite",K:!0},function(e){return Ek(e.objectStore("SWHealthLog"),{},function(f){if(f.W().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ll(a){var b;return x(function(c){if(1==c.i)return w(c,Jl(a),2);b=c.j;return w(c,b.clear("SWHealthLog"),0)})}
;var Ml={},Nl=0;
function Ol(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)ri(a,void 0,"POST",b);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ri(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new Ya({url:a});if(d.l&&d.j||d.m){var e=Pb(a.match(Ob)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==Vb(a,"ri"));break b}}catch(h){}f=!1}if(f){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var g=!0;break b}}catch(h){}g=!1}b=g?!0:!1}else b=!1;b||Pl(a)}}
function Pl(a){var b=new Image,c=""+Nl++;Ml[c]=b;b.onload=b.onerror=function(){delete Ml[c]};
b.src=a}
;function Ql(){this.i=new Map;this.j=!1}
function Rl(){if(!Ql.i){var a=C("yt.networkRequestMonitor.instance")||new Ql;B("yt.networkRequestMonitor.instance",a);Ql.i=a}return Ql.i}
Ql.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Ql.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Ql.prototype.removeParams=function(a){return a.split("?")[0]};
Ql.prototype.removeParams=Ql.prototype.removeParams;Ql.prototype.isEndpointCFR=Ql.prototype.isEndpointCFR;Ql.prototype.requestComplete=Ql.prototype.requestComplete;Ql.getInstance=Rl;var Sl;function Tl(){Sl||(Sl=new Ni("yt.offline"));return Sl}
function Ul(a){if(R("offline_error_handling")){var b=Tl().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Tl().set("errors",b,2592E3,!0)}}
;function X(){Be.call(this);var a=this;this.m=!1;this.j=He();this.j.ba("networkstatus-online",function(){if(a.m&&R("offline_error_handling")){var b=Tl().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new gj(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Hh(d)}Tl().set("errors",{},2592E3,!0)}}})}
v(X,Be);function Vl(){if(!X.i){var a=C("yt.networkStatusManager.instance")||new X;B("yt.networkStatusManager.instance",a);X.i=a}return X.i}
n=X.prototype;n.G=function(){return this.j.G()};
n.S=function(a){this.j.j=a};
n.wb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.sb=function(){this.m=!0};
n.ba=function(a,b){return this.j.ba(a,b)};
n.oa=function(a){a=Fe(this.j,a);a.then(function(b){R("use_cfr_monitor")&&Rl().requestComplete("generate_204",b)});
return a};
X.prototype.sendNetworkCheckRequest=X.prototype.oa;X.prototype.listen=X.prototype.ba;X.prototype.enableErrorFlushing=X.prototype.sb;X.prototype.getWindowStatus=X.prototype.wb;X.prototype.networkStatusHint=X.prototype.S;X.prototype.isNetworkAvailable=X.prototype.G;X.getInstance=Vl;function Wl(a){a=void 0===a?{}:a;Be.call(this);var b=this;this.j=this.A=0;this.m=Vl();var c=C("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.Ea?(this.Ea=a.Ea,c("networkstatus-online",function(){Xl(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Xl(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ce(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ce(b,"publicytnetworkstatus-offline")})))}
v(Wl,Be);Wl.prototype.G=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
Wl.prototype.S=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
Wl.prototype.oa=function(a){var b=this,c;return x(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return R("skip_network_check_if_cfr")&&Rl().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.S((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function Xl(a,b){a.Ea?a.j?(Ie.da(a.A),a.A=Ie.N(function(){a.o!==b&&(Ce(a,b),a.o=b,a.j=T())},a.Ea-(T()-a.j))):(Ce(a,b),a.o=b,a.j=T()):Ce(a,b)}
;var Yl;function Zl(){var a=jl.call;Yl||(Yl=new Wl({Bb:!0,tb:!0}));a.call(jl,this,{F:{qb:Fl,ea:El,Ya:Bl,Cb:Cl,Qa:Dl,set:zl},I:Yl,handleError:Hh,ga:Ih,T:$l,now:T,mb:Ul,L:Zi(),Pa:"publicytnetworkstatus-online",Oa:"publicytnetworkstatus-offline",Aa:!0,za:.1,Da:di("potential_esf_error_limit",10),C:R,ka:!(hj()&&"www.youtube-nocookie.com"!==Qb(document.location.toString()))});this.l=new Jf;R("networkless_immediately_drop_all_requests")&&Gl();il("LogsDatabaseV2")}
v(Zl,jl);function am(){var a=C("yt.networklessRequestController.instance");a||(a=new Zl,B("yt.networklessRequestController.instance",a),R("networkless_logging")&&al().then(function(b){a.B=b;ll(a);a.l.resolve();a.Aa&&Math.random()<=a.za&&a.B&&Kl(a.B);R("networkless_immediately_drop_sw_health_store")&&bm(a)}));
return a}
Zl.prototype.writeThenSend=function(a,b){b||(b={});hj()||(this.i=!1);jl.prototype.writeThenSend.call(this,a,b)};
Zl.prototype.sendThenWrite=function(a,b,c){b||(b={});hj()||(this.i=!1);jl.prototype.sendThenWrite.call(this,a,b,c)};
Zl.prototype.sendAndWrite=function(a,b){b||(b={});hj()||(this.i=!1);jl.prototype.sendAndWrite.call(this,a,b)};
Zl.prototype.awaitInitialization=function(){return this.l.promise};
function bm(a){var b;x(function(c){if(!a.B)throw b=vj("clearSWHealthLogsDb"),b;return c.return(Ll(a.B).catch(function(d){a.handleError(d)}))})}
function $l(a,b,c){R("use_cfr_monitor")&&cm(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}c&&0===Object.keys(b).length?Ol(a):oi(a,b)}
function cm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Rl().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Rl().requestComplete(a,!0);d(e,f)}}
;var dm=0,em=0,fm,gm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:em};B("ytNetworklessLoggingInitializationOptions",gm);function hm(a,b){function c(d){var e=im().G();if(!jm()||!d||e&&R("vss_networkless_bypass_write"))km(a,b);else{var f={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0};zl(f,d).then(function(g){f.id=g;im().G()&&lm(f)}).catch(function(g){lm(f);
im().G()?Hh(g):Ul(g)})}}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?al().then(function(d){c(d)}):c($k())}
function mm(a,b){function c(d){if(jm()&&d){var e={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){R("use_cfr_monitor")&&Rl().requestComplete(e.url,!0);void 0!==e.id?El(e.id,d):f=!0;R("vss_network_hint")&&im().S(!0);g(k,l)};
if(R("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Rl().requestComplete(e.url,!1);h(k,l)}}km(e.url,e.options);
zl(e,d).then(function(k){e.id=k;f&&El(e.id,d)}).catch(function(k){im().G()?Hh(k):Ul(k)})}else km(a,b)}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?al().then(function(d){c(d)}):c($k())}
function nm(){var a=$k();if(!a)throw vj("throttleSend");dm||(dm=Ie.N(function(){var b;return x(function(c){if(1==c.i)return w(c,Bl("NEW",a),2);if(3!=c.i)return b=c.j,b?w(c,lm(b),3):(Ie.da(dm),dm=0,c.return());dm&&(dm=0,nm());c.i=0})},100))}
function lm(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=$k();if(!b)throw c=vj("immediateSend"),c;if(void 0===a.id){e.v(2);break}return w(e,Cl(a.id,b),3);case 3:(d=e.j)?a=d:Ih(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=T()-f)){e.v(4);break}Ih(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.v(5);break}return w(e,El(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=om(a));f=a;if(R("use_request_time_ms_header")){var g;
if(null==f?0:null==(g=f.options)?0:g.headers)f.options.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T()))}else{var h,k;if(null==f?0:null==(h=f.options)?0:null==(k=h.postParams)?0:k.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(T())}a=f;if(!a){e.v(0);break}if(!a.skipRetry||void 0===a.id){e.v(8);break}return w(e,El(a.id,b),8);case 8:km(a.url,a.options,!!a.skipRetry),e.i=0}})}
function om(a){var b=$k();if(!b)throw vj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:R("use_cfr_monitor")&&Rl().requestComplete(a.url,!1);g=rl(f);if(!(R("nwl_consider_error_code")&&g||!R("nwl_consider_error_code")&&pm()<=di("potential_esf_error_limit",10))){l.v(2);break}if(R("skip_checking_network_on_cfr_failure")&&(!R("skip_checking_network_on_cfr_failure")||Rl().isEndpointCFR(a.url))){l.v(3);break}return w(l,im().oa(),3);case 3:if(im().G()){l.v(2);break}c(e,f);if(!R("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.v(6);break}return w(l,Dl(a.id,b,!1),6);case 6:return l.return();case 2:if(R("nwl_consider_error_code")&&!g&&pm()>di("potential_esf_error_limit",10))return l.return();C("ytNetworklessLoggingInitializationOptions")&&gm.potentialEsfErrorCounter++;em++;if(void 0===(null==(k=a)?void 0:k.id)){l.v(8);break}return 1>a.sendCount?w(l,Dl(a.id,b),12):w(l,El(a.id,b),8);case 12:Ie.N(function(){im().G()&&nm()},5E3);
case 8:c(e,f),l.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return R("use_cfr_monitor")&&Rl().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.v(2):w(h,El(a.id,b),2);R("vss_network_hint")&&im().S(!0);d(e,f);h.i=0})};
return a}
function im(){fm||(fm=new Wl({Bb:!0,tb:!0}));return fm}
function km(a,b,c){c&&0===Object.keys(b).length?Ol(a):oi(a,b)}
function jm(){return C("ytNetworklessLoggingInitializationOptions")?gm.isNwlInitialized:!1}
function pm(){return C("ytNetworklessLoggingInitializationOptions")?gm.potentialEsfErrorCounter:em}
;function qm(a){var b=this;this.config_=null;a?this.config_=a:Di()&&(this.config_=Ei());Wi(function(){Ti(b)},0,5E3)}
qm.prototype.isReady=function(){!this.config_&&Di()&&(this.config_=Ei());return!!this.config_};
function Ui(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Ri(b,c,l,k)),z)){var H=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,N){Si(z);H(M,N)};
c.onFetchSuccess=function(M,N){Si(z);K(M,N)}}try{y&&d.retry&&!d.fb.bypassNetworkless?(g.method="POST",d.fb.writeThenSend?R("use_new_nwl_wts")?am().writeThenSend(q,g):hm(q,g):R("use_new_nwl_saw")?am().sendAndWrite(q,g):mm(q,g)):R("web_all_payloads_via_jspb")?oi(q,g):(g.method="POST",g.postParams||(g.postParams={}),oi(q,g))}catch(M){if("InvalidAccessError"==M.name)z&&(Si(z),z=0),Ih(Error("An extension is blocking network request."));
else throw M;}z&&Wi(function(){Ti(a)},0,5E3)}
!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ih(new gj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new gj("innertube xhrclient not ready",b,c,d);Hh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.yb)&&(h=f);var k=a.config_.Ab||!1,l=Li(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},u=a.config_.zb&&f;u=u&&f.startsWith("Bearer");u||(p.key=a.config_.innertubeApiKey);var q=ai(""+h+m,p||{},!0);jm()?Zk().then(function(y){e(y)}):e(!1)}
;var rm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function sm(a){this.J=a;this.i=null;this.o=0;this.D=null;this.A=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.m=0;this.Fa=Rh(window,"mousemove",Va(this.Ga,this));this.Ha=Th(Va(this.aa,this),25)}
D(sm,be);sm.prototype.Ga=function(a){void 0===a.i&&Mh(a);var b=a.i;void 0===a.j&&Mh(a);this.i=new yd(b,a.j)};
sm.prototype.aa=function(){if(this.i){var a=rm();if(0!=this.o){var b=this.D,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.j[this.m]=.5<Math.abs((d-this.A)/this.A)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.J();this.A=d}this.o=a;this.D=this.i;this.m=(this.m+1)%4}};
sm.prototype.fa=function(){window.clearInterval(this.Ha);Ph(this.Fa)};var tm={};
function um(){var a={},b=void 0===a.Db?!1:a.Db;a=void 0===a.ub?!0:a.ub;if(null==C("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&vm();Rh(document,"keydown",vm);Rh(document,"keyup",vm);Rh(document,"mousedown",vm);Rh(document,"mouseup",vm);b?Rh(window,"touchmove",function(){wm("touchmove",200)},{passive:!0}):(Rh(window,"resize",function(){wm("resize",200)}),a&&Rh(window,"scroll",function(){wm("scroll",200)}));
new sm(function(){wm("mouse",100)});
Rh(document,"touchstart",vm,{passive:!0});Rh(document,"touchend",vm,{passive:!0})}}
function wm(a,b){tm[a]||(tm[a]=!0,Ie.N(function(){vm();tm[a]=!1},b))}
function vm(){null==C("_lact",window)&&um();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function xm(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var ym=A.ytPubsubPubsubInstance||new O,zm=A.ytPubsubPubsubSubscribedKeys||{},Am=A.ytPubsubPubsubTopicToKeys||{},Bm=A.ytPubsubPubsubIsSynchronous||{};O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.ra;O.prototype.publish=O.prototype.ha;O.prototype.clear=O.prototype.clear;B("ytPubsubPubsubInstance",ym);B("ytPubsubPubsubTopicToKeys",Am);B("ytPubsubPubsubIsSynchronous",Bm);B("ytPubsubPubsubSubscribedKeys",zm);function Cm(){this.store=[];this.i={}}
Cm.prototype.storePayload=function(a,b){this.store.push({payload:b,keys:a});a=Dm(a);this.i[a]?this.i[a]++:this.i[a]=1;return a};
Cm.prototype.extractMatchingEntries=function(a){for(var b=[],c=[],d=t(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=t(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?(b.push(e.payload),this.i[Dm(e.keys)]--):c.push(e)}this.store=c;a=Em(this,a);a=t(a);for(c=a.next();!c.done;c=a.next())c=c.value,0<this.i[c]&&Ih(new gj("Transport IMS did not fully extract entries for key:",{sequence:c,hc:b.length,ec:this.i[c]}));return b};
Cm.prototype.getSequenceCount=function(a){var b=Em(this,a);a=0;b=t(b);for(var c=b.next();!c.done;c=b.next())a+=this.i[c.value];return a};
function Em(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED";c=t(c);for(var g=c.next();!g.done;g=c.next())g=g.value,"auth"===g?d=Fm(b.auth):"isJspb"===g?e=JSON.stringify(b.isJspb):"cttAuthInfo"===g&&(f=Fm(b.cttAuthInfo));b=[];d=[d,e,f];a=t(Object.keys(a.i));for(e=a.next();!e.done;e=a.next()){e=e.value;f=e.split("/");c=!0;for(g=0;g<d.length;g++)if("THIS_KEY_FIELD_NOT_FILLED"!==d[g]&&d[g]!==f[g]){c=!1;break}c&&b.push(e)}return b}
Cm.prototype.getSequenceCount=Cm.prototype.getSequenceCount;Cm.prototype.extractMatchingEntries=Cm.prototype.extractMatchingEntries;Cm.prototype.storePayload=Cm.prototype.storePayload;function Dm(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
function Fm(a){return void 0===a?"undefined":a}
;var Gm=di("initial_gel_batch_timeout",2E3),Hm=Math.pow(2,16)-1,Im=void 0;function Jm(){this.l=this.i=this.j=0}
var Km=new Jm,Lm=new Jm,Mm,Nm=!0,Om=A.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Om);var Pm=A.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Pm);var Qm=A.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Qm);var Rm=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Rm);var Sm={};function Tm(){var a=C("yt.logging.ims");a||(a=new Cm,B("yt.logging.ims",a));return a}
function Um(a,b){R("web_all_payloads_via_jspb")&&Ih(new gj("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Vm(a);var c=Wm(a);if(R("use_new_in_memory_storage")){Sm[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Tm().storePayload(d,a.payload);Xm(b,[],c,!1,d)}else d=Om.get(c)||[],Om.set(c,d),d.push(a.payload),Xm(b,d,c)}}
function Ym(a,b){if("log_event"===a.endpoint){Vm(void 0,a);var c=Wm(a,!0);if(R("use_new_in_memory_storage")){Sm[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Tm().storePayload(d,a.payload.toJSON());Xm(b,[],c,!0,d)}else d=Pm.get(c)||[],Pm.set(c,d),a=a.payload.toJSON(),d.push(a),Xm(b,d,c,!0)}}
function Xm(a,b,c,d,e){d=void 0===d?!1:d;a&&(Im=new a);a=di("tvhtml5_logging_max_batch")||di("web_logging_max_batch")||100;var f=T(),g=d?Lm.l:Km.l;b=b.length;e&&(b=Tm().getSequenceCount(e));b>=a?R("background_thread_flush_logs_due_to_batch_limit")?Mm||(Mm=Sh(function(){Zm({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d);Mm=void 0},0)):Zm({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d):10<=f-g&&($m(d),d?Lm.l=f:Km.l=f)}
function an(a,b){R("web_all_payloads_via_jspb")&&Ih(new gj("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Vm(a);var c=Wm(a),d=new Map;d.set(c,[a.payload]);b&&(Im=new b);return new Kf(function(e,f){Im&&Im.isReady()?bn(d,Im,e,f,{bypassNetworkless:!0},!0):e()})}}
function cn(a,b){if("log_event"===a.endpoint){Vm(void 0,a);var c=Wm(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Im=new b);return new Kf(function(e){Im&&Im.isReady()?dn(d,Im,e,{bypassNetworkless:!0},!0):e()})}}
function Wm(a,b){var c="";if(a.ja)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new th;c.videoId?d.setVideoId(c.videoId):c.playlistId&&bd(d,2,uh,c.playlistId);Rm[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Qm[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Zm(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&R("web_all_payloads_via_jspb")&&Ih(new gj("transport.flushLogs called for JSON in JSPB only experiment"));new Kf(function(d,e){c?(window.clearTimeout(Lm.j),window.clearTimeout(Lm.i),Lm.i=0):(window.clearTimeout(Km.j),window.clearTimeout(Km.i),Km.i=0);if(Im&&Im.isReady())if(R("use_new_in_memory_storage")){var f=a,g=c,h=Im;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Tm().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),
k.set(b,e),dn(k,h,d,f)):(k=Tm().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,k),bn(l,h,d,e,f));else if(g){e=t(Object.keys(Sm));for(g=e.next();!g.done;g=e.next())l=g.value,g=Tm().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Sm[l];dn(k,h,d,f)}else{k=t(Object.keys(Sm));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Tm().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Sm[g]}bn(l,h,d,e,f)}}else f=a,k=c,h=Im,f=void 0===f?
{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Pm.get(b)||[],e.set(b,k),dn(e,h,d,f),Pm.delete(b)):(k=new Map,l=Om.get(b)||[],k.set(b,l),bn(k,h,d,e,f),Om.delete(b)):k?(dn(Pm,h,d,f),Pm.clear()):(bn(Om,h,d,e,f),Om.clear());else $m(c),d()})}
function $m(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!Km.i||a&&!Lm.i)){var b=Sh(function(){Zm({writeThenSend:!0},void 0,a)},6E4);
a?Lm.i=b:Km.i=b}window.clearTimeout(a?Lm.j:Km.j);b=Q("LOGGING_BATCH_TIMEOUT",di("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Nm&&(b=Gm);b=Sh(function(){Zm({writeThenSend:!0},void 0,a)},b);
a?Lm.j=b:Km.j=b}
function bn(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(T()),h=a.size,k={};a=t(a);for(var l=a.next();!l.done;k={sa:k.sa,Z:k.Z,ia:k.ia,va:k.va,ta:k.ta},l=a.next()){var m=t(l.value);l=m.next().value;m=m.next().value;k.Z=mb({context:Fi(b.config_||Ei())});if(!Ma(m)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}k.Z.events=m;(m=Qm[l])&&en(k.Z,l,m);delete Qm[l];k.ia="visitorOnlyApprovedKey"===l;fn(k.Z,g,k.ia);gn(e);k.va=function(){h--;h||c()};
k.sa=0;k.ta=function(p){return function(){p.sa++;if(e.bypassNetworkless&&R("log_errors_through_nwl_on_retry")&&1===p.sa)try{Ui(b,"log_event",p.Z,hn({writeThenSend:!0},p.ia,p.va,p.ta,f)),Nm=!1}catch(u){Hh(u),d()}h--;h||c()}}(k);
try{Ui(b,"log_event",k.Z,hn(e,k.ia,k.va,k.ta,f)),Nm=!1}catch(p){Hh(p),d()}}}
function dn(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(T()),g=a.size,h=new Map([].concat(ia(a)));h=t(h);for(var k=h.next();!k.done;k=h.next()){var l=t(k.value).next().value,m=a.get(l);k=new vh;var p=Ki(b.config_||Ei());J(k,ah,1,p);m=m?jn(m):[];m=t(m);for(p=m.next();!p.done;p=m.next())id(k,3,qh,p.value);(m=Rm[l])&&kn(k,l,m);delete Rm[l];l="visitorOnlyApprovedKey"===l;ln(k,f,l);gn(d);k=nd(k);l=hn(d,l,function(){g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;Ui(b,"log_event","",l);Nm=!1}}
function gn(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function hn(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,fb:a,ja:b,cc:!!e,headers:{},postBodyFormat:"",postBody:""};mn()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function fn(a,b,c){mn()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=Q("EVENT_ID"))&&(c=nn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ln(a,b,c){mn()||I(a,2,b);if(!c&&(b=Q("EVENT_ID"))){c=nn();var d=new sh;I(d,1,b);I(d,2,c);J(a,sh,5,d)}}
function nn(){var a=Q("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Hm/2));a++;a>Hm&&(a=1);Bh("BATCH_CLIENT_COUNTER",a);return a}
function en(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function kn(a,b,c){if(jd(c,1===cd(c,uh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,th,4,c);a=dd(a,ah,1)||new ah;c=dd(a,Zg,3)||new Zg;var e=new Yg;e.setToken(b);I(e,1,d);id(c,12,Yg,e);J(a,Zg,3,c)}
function jn(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new qh(a[c]))}catch(d){Hh(new gj("Transport failed to deserialize "+String(a[c])))}return b}
function Vm(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function mn(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
;var on=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",on);
function pn(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&um();a=xm();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&d.pa&&(a=e.context,b=d.pa,b={index:qn(b),groupKey:b},a.sequence=b,d.vb&&delete on[d.pa]);(d.Fb?an:Um)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,ja:d.ja},c)}
function rn(a){Zm(void 0,void 0,void 0===a?!1:a)}
function qn(a){on[a]=a in on?on[a]+1:0;return on[a]}
;var sn=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",sn);function tn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;Q("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:qm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||T());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=xm();d=new ph;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&b.pa){e=b.pa;var f=qn(e),g=new oh;I(g,2,f);I(g,1,e);J(d,oh,3,g);b.vb&&delete sn[b.pa]}J(a,ph,33,d);(b.Fb?cn:Ym)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,ja:b.ja},c)}
;function un(a,b){var c=void 0===c?{}:c;if(R("migrate_events_to_ts")){c=void 0===c?{}:c;var d=qm;Q("ytLoggingEventsDefaultDisabled",!1)&&qm===qm&&(d=null);R("web_all_payloads_via_jspb")&&Ih(new gj("Logs should be translated to JSPB but are sent as JSON instead",a));pn(a,b,d,c)}else d=qm,Q("ytLoggingEventsDefaultDisabled",!1)&&qm==qm&&(d=null),pn(a,b,d,c)}
;var vn=[{Ma:function(a){return"Cannot read property '"+a.key+"'"},
Ca:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ma:function(a){return"Cannot call '"+a.key+"'"},
Ca:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ma:function(a){return a.key+" is not defined"},
Ca:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var xn={X:[],V:[{pb:wn,weight:500}]};function wn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function yn(){this.V=[];this.X=[]}
var zn;function An(){if(!zn){var a=zn=new yn;a.X.length=0;a.V.length=0;xn.X&&a.X.push.apply(a.X,xn.X);xn.V&&a.V.push.apply(a.V,xn.V)}return zn}
;var Bn=new O;function Cn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Dn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Dn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Dn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Dn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function En(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Fn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Cn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Fn(e+".ve",f,g,h):0;d+=g;d+=Fn(e,a[e],b,c);if(500<d)break}}else c[b]=Gn(a),d+=c[b].length;else c[b]=Gn(a),d+=c[b].length;return d}
function Fn(a,b,c,d){c+="."+a;a=Gn(b);d[c]=a;return c.length+a.length}
function Gn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Hn=new Set,In=0,Jn=0,Kn=0,Ln=[],Mn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Nn(){for(var a=t(Mn),b=a.next();!b.done;b=a.next()){var c=Kb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function On(){var a;return x(function(b){return(a=bf())?b.return(a.then(function(c){c=nd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return vc(d,3)})):b.return(Promise.resolve(null))})}
;var Pn={};function Qn(a){return Pn[a]||(Pn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Rn={},Sn=[],xg=new O,Tn={};function Un(){for(var a=t(Sn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Vn(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Qn(b)]:a.getAttribute("data-"+b):null;return c}
function Wn(a){xg.ha.apply(xg,arguments)}
;function Xn(a){this.i=a||{};a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Yn(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Zn(a,b,c){$n||($n={},Rh(window,"message",function(d){a:{if(d.origin===Yn(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=$n[e.id])d.A=!0,d.A&&(E(d.o,d.sendMessage,d),d.o.length=0),d.Ta(e)}e=void 0}return e}));
$n[c]=b}
var $n=null;var ao=window;function bo(a,b,c){this.u=this.i=this.j=null;this.l=0;this.A=!1;this.o=[];this.m=null;this.J={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.D=c;this.setup(a,b)}
n=bo.prototype;n.setSize=function(a,b){this.i.width=a.toString();this.i.height=b.toString();return this};
n.getIframe=function(){return this.i};
n.Ta=function(a){co(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);eo(this,a);return this};
function fo(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.D===b[0]&&eo(a,c)}}
n.destroy=function(){this.i&&this.i.id&&(Rn[this.i.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.u){a=this.i;var b=a.parentNode;b&&b.replaceChild(this.u,a)}else(a=this.i)&&a.parentNode&&a.parentNode.removeChild(a);$n&&($n[this.id]=null);this.j=null;a=this.i;for(var c in kb)kb[c][0]==a&&Ph(c);this.u=this.i=null};
n.Wa=function(){return{}};
function go(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.A?a.sendMessage(b):a.o.push(b)}
function co(a,b,c){a.m.l||(c={target:a,data:c},a.m.ha(b,c),Wn(a.D+"."+b,c))}
function ho(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Yn(a.j,"title"));(b=Yn(a.j,"width"))&&c.setAttribute("width",b.toString());(b=Yn(a.j,"height"))&&c.setAttribute("height",
b.toString());var g=a.Wa();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(k){var l=Vb(window.location.href,k);null!==l&&(g[k]=l)});
ao.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(ao.yt_embedsTokenValue),delete ao.yt_embedsTokenValue);var h=""+Yn(a.j,"host")+("/embed/"+Yn(a.j,"videoId"))+"?"+Tb(g);ao.yt_embedsEnableUaChProbe?On().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Ld(l.href).toString();xd(c,Md(k));return k}):
ao.yt_embedsEnableIframeSrcWithIntent?xd(c,Md(h)):c.src=h;
return c}
n.gb=function(){this.i&&this.i.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.l)};
function io(a){Zn(a.j,a,a.id);a.l=Th(a.gb.bind(a),250);Rh(a.i,"load",function(){window.clearInterval(a.l);a.l=Th(a.gb.bind(a),250)})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Rb(a.src):"https://www.youtube.com"),this.j=new Xn(b),c||(b=ho(this,a),this.u=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.i=a,this.i.id||(this.i.id="widget"+Qa(this.i)),Rn[this.i.id]=this,window.postMessage){this.m=new O;io(this);b=Yn(this.j,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Tn)Tn.hasOwnProperty(e)&&
fo(this,e)}};
function eo(a,b){a.J[b]||(a.J[b]=!0,go(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Rb(this.i.src||"").replace("http:","https:")];if(this.i.contentWindow)for(var d=0;d<c.length;d++)try{this.i.contentWindow.postMessage(b,c[d])}catch(Yb){if(Yb.name&&"SyntaxError"===Yb.name){if(!(Yb.message&&0<Yb.message.indexOf("target origin ''"))){var e=void 0,f=Yb;e=void 0===e?{}:e;e.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(R("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=In)){var m=void 0,p=void 0,u=f,q=g,y=rd(u),z=y.message||"Unknown Error",H=y.name||"UnknownError",
K=y.stack||u.j||"Not available";if(K.startsWith(H+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var N=y.lineNumber||"Not available",nb=y.fileName||"Not available",uc=K,Aa=0;if(u.hasOwnProperty("args")&&u.args&&u.args.length)for(var ua=0;ua<u.args.length&&!(Aa=En(u.args[ua],"params."+ua,q,Aa),500<=Aa);ua++);else if(u.hasOwnProperty("params")&&u.params){var Z=u.params;if("object"===typeof u.params)for(p in Z){if(Z[p]){var da="params."+p,ea=Gn(Z[p]);q[da]=ea;Aa+=da.length+ea.length;if(500<Aa)break}}else q.params=
Gn(Z)}if(Ln.length)for(var Y=0;Y<Ln.length&&!(Aa=En(Ln[Y],"params.context."+Y,q,Aa),500<=Aa);Y++);navigator.vendor&&!q.hasOwnProperty("vendor")&&(q["device.vendor"]=navigator.vendor);var S={message:z,name:H,lineNumber:N,fileName:nb,stack:uc,params:q,sampleWeight:1},Oj=Number(u.columnNumber);isNaN(Oj)||(S.lineNumber=S.lineNumber+":"+Oj);if("IGNORED"===u.level)m=0;else a:{for(var Pj=An(),Qj=t(Pj.X),Uf=Qj.next();!Uf.done;Uf=Qj.next()){var Rj=Uf.value;if(S.message&&S.message.match(Rj.dc)){m=Rj.weight;
break a}}for(var Sj=t(Pj.V),Vf=Sj.next();!Vf.done;Vf=Sj.next()){var Tj=Vf.value;if(Tj.pb(S)){m=Tj.weight;break a}}m=1}S.sampleWeight=m;for(var Uj=t(vn),Wf=Uj.next();!Wf.done;Wf=Uj.next()){var Xf=Wf.value;if(Xf.Ca[S.name])for(var Vj=t(Xf.Ca[S.name]),Yf=Vj.next();!Yf.done;Yf=Vj.next()){var Wj=Yf.value,Wd=S.message.match(Wj.regexp);if(Wd){S.params["params.error.original"]=Wd[0];for(var Zf=Wj.groups,Xj={},Zb=0;Zb<Zf.length;Zb++)Xj[Zf[Zb]]=Wd[Zb+1],S.params["params.error."+Zf[Zb]]=Wd[Zb+1];S.message=Xf.Ma(Xj);
break}}}S.params||(S.params={});var Yj=An();S.params["params.errorServiceSignature"]="msg="+Yj.X.length+"&cb="+Yj.V.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));sb("sample").constructor!==rb&&(S.params["params.fconst"]="true");var wa=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(wa);if(0!==wa.sampleWeight&&!Hn.has(wa.message)){if("ERROR"===h){Bn.ha("handleError",
wa);if(R("record_app_crashed_web")&&0===Kn&&1===wa.sampleWeight)if(Kn++,R("errors_via_jspb")){var $f=new nh;I($f,1,1);if(!R("report_client_error_with_app_crash_ks")){var Zj=new ih;I(Zj,1,wa.message);var ak=new jh;J(ak,ih,3,Zj);var bk=new kh;J(bk,jh,5,ak);var ck=new lh;J(ck,kh,9,bk);J($f,lh,4,ck)}var oo=$f,dk=new qh;gd(dk,nh,20,rh,oo);tn(dk)}else{var ek={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(ek.systemHealth={crashData:{clientError:{logMessage:{message:wa.message}}}});
un("appCrashed",ek)}Jn++}else"WARNING"===h&&Bn.ha("handleWarning",wa);if(R("kevlar_gel_error_routing"))a:{var ag=void 0,bg=void 0,Kc=h,P=wa;if(R("errors_via_jspb")){if(Nn())bg=void 0;else{var $b=new fh;I($b,1,P.stack);P.fileName&&I($b,4,P.fileName);var Oa=P.lineNumber&&P.lineNumber.split?P.lineNumber.split(":"):[];0!==Oa.length&&(1!==Oa.length||isNaN(Number(Oa[0]))?2!==Oa.length||isNaN(Number(Oa[0]))||isNaN(Number(Oa[1]))||(I($b,2,Number(Oa[0])),I($b,3,Number(Oa[1]))):I($b,2,Number(Oa[0])));var vb=
new ih;I(vb,1,P.message);I(vb,3,P.name);I(vb,6,P.sampleWeight);"ERROR"===Kc?I(vb,2,2):"WARNING"===Kc?I(vb,2,1):I(vb,2,0);var cg=new gh;I(cg,1,!0);gd(cg,fh,3,hh,$b);var wb=new ch;I(wb,3,window.location.href);for(var fk=Q("FEXP_EXPERIMENTS",[]),dg=0;dg<fk.length;dg++){var gk=wb,po=fk[dg];Rc(gk);ad(gk,5,2,!1).push(po)}var eg=Ch();if(!Dh()&&eg)for(var hk=t(Object.keys(eg)),xb=hk.next();!xb.done;xb=hk.next()){var ik=xb.value,fg=new eh;I(fg,1,ik);fg.setValue(String(eg[ik]));id(wb,4,eh,fg)}var gg=P.params;
if(gg){var jk=t(Object.keys(gg));for(xb=jk.next();!xb.done;xb=jk.next()){var kk=xb.value,hg=new eh;I(hg,1,"client."+kk);hg.setValue(String(gg[kk]));id(wb,4,eh,hg)}}var lk=Q("SERVER_NAME"),mk=Q("SERVER_VERSION");if(lk&&mk){var ig=new eh;I(ig,1,"server.name");ig.setValue(lk);id(wb,4,eh,ig);var jg=new eh;I(jg,1,"server.version");jg.setValue(mk);id(wb,4,eh,jg)}var Xd=new jh;J(Xd,ch,1,wb);J(Xd,gh,2,cg);J(Xd,ih,3,vb);bg=Xd}var nk=bg;if(!nk)break a;var ok=new qh;gd(ok,jh,163,rh,nk);tn(ok)}else{if(Nn())ag=
void 0;else{var Lc={stackTrace:P.stack};P.fileName&&(Lc.filename=P.fileName);var Pa=P.lineNumber&&P.lineNumber.split?P.lineNumber.split(":"):[];0!==Pa.length&&(1!==Pa.length||isNaN(Number(Pa[0]))?2!==Pa.length||isNaN(Number(Pa[0]))||isNaN(Number(Pa[1]))||(Lc.lineNumber=Number(Pa[0]),Lc.columnNumber=Number(Pa[1])):Lc.lineNumber=Number(Pa[0]));var kg={level:"ERROR_LEVEL_UNKNOWN",message:P.message,errorClassName:P.name,sampleWeight:P.sampleWeight};"ERROR"===Kc?kg.level="ERROR_LEVEL_ERROR":"WARNING"===
Kc&&(kg.level="ERROR_LEVEL_WARNNING");var qo={isObfuscated:!0,browserStackInfo:Lc},ac={pageUrl:window.location.href,kvPairs:[]};Q("FEXP_EXPERIMENTS")&&(ac.experimentIds=Q("FEXP_EXPERIMENTS"));var lg=Ch();if(!Dh()&&lg)for(var pk=t(Object.keys(lg)),yb=pk.next();!yb.done;yb=pk.next()){var qk=yb.value;ac.kvPairs.push({key:qk,value:String(lg[qk])})}var mg=P.params;if(mg){var rk=t(Object.keys(mg));for(yb=rk.next();!yb.done;yb=rk.next()){var sk=yb.value;ac.kvPairs.push({key:"client."+sk,value:String(mg[sk])})}}var tk=
Q("SERVER_NAME"),uk=Q("SERVER_VERSION");tk&&uk&&(ac.kvPairs.push({key:"server.name",value:tk}),ac.kvPairs.push({key:"server.version",value:uk}));ag={errorMetadata:ac,stackTrace:qo,logMessage:kg}}var vk=ag;if(!vk)break a;un("clientError",vk)}if("ERROR"===Kc||R("errors_flush_gel_always_killswitch"))b:if(R("migrate_events_to_ts"))c:{if(R("web_fp_via_jspb")&&(rn(!0),!R("web_fp_via_jspb_and_json")))break c;rn()}else{if(R("web_fp_via_jspb")&&(rn(!0),!R("web_fp_via_jspb_and_json")))break b;rn()}}if(!R("suppress_error_204_logging")){var zb=
wa,Mc=zb.params||{},ab={urlParams:{a:"logerror",t:"jserror",type:zb.name,msg:zb.message.substr(0,250),line:zb.lineNumber,level:h,"client.name":Mc.name},postParams:{url:Q("PAGE_NAME",window.location.href),file:zb.fileName},method:"POST"};Mc.version&&(ab["client.version"]=Mc.version);if(ab.postParams){zb.stack&&(ab.postParams.stack=zb.stack);for(var wk=t(Object.keys(Mc)),ng=wk.next();!ng.done;ng=wk.next()){var xk=ng.value;ab.postParams["client."+xk]=Mc[xk]}var og=Ch();if(og)for(var yk=t(Object.keys(og)),
pg=yk.next();!pg.done;pg=yk.next()){var zk=pg.value;ab.postParams[zk]=og[zk]}var Ak=Q("SERVER_NAME"),Bk=Q("SERVER_VERSION");Ak&&Bk&&(ab.postParams["server.name"]=Ak,ab.postParams["server.version"]=Bk)}oi(Q("ECATCHER_REPORT_HOST","")+"/error_204",ab)}try{Hn.add(wa.message)}catch(vo){}In++}}}}}else throw Yb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function jo(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function ko(a){return 0===a.search("get")||0===a.search("is")}
;function lo(a,b){bo.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.P={};this.playerInfo={};this.videoTitle=""}
v(lo,bo);n=lo.prototype;n.Wa=function(){var a=Yn(this.j,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Yn(this.j,"embedConfig")){if(Na(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Ta=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Na(a))for(var c in a)a.hasOwnProperty(c)&&(this.P[c]=a[c]);break;case "infoDelivery":mo(this,a);break;case "initialDelivery":Na(a)&&(window.clearInterval(this.l),this.playerInfo={},this.P={},no(this,a.apiInterface),mo(this,a));break;default:co(this,b,a)}};
function mo(a,b){if(Na(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.i.setAttribute("title",b))):(a.videoTitle="",a.i.setAttribute("title","YouTube "+Yn(a.j,"title"))))}}
function no(a,b){E(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:jo(c)?this[c]=function(){this.playerInfo={};
this.P={};go(this,c,arguments);return this}:ko(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){go(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Yn(this.j,"host")+("/embed/"+Yn(this.j,"videoId")),b=Number(Yn(this.j,"width")),c=Number(Yn(this.j,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,
"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.P.namespaces?a?this.P[a]?this.P[a].options||[]:[]:this.P.namespaces||[]:[]};
n.getOption=function(a,b){if(this.P.namespaces&&a&&b&&this.P[a])return this.P[a][b]};
function ro(a){if("iframe"!==a.tagName.toLowerCase()){var b=Vn(a,"videoid");b&&(b={videoId:b,width:Vn(a,"width"),height:Vn(a,"height")},new lo(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Rn[a]});
B("YT.scan",Un);B("YT.subscribe",function(a,b,c){xg.subscribe(a,b,c);Tn[a]=!0;for(var d in Rn)Rn.hasOwnProperty(d)&&fo(Rn[d],a)});
B("YT.unsubscribe",function(a,b,c){wg(a,b,c)});
B("YT.Player",lo);bo.prototype.destroy=bo.prototype.destroy;bo.prototype.setSize=bo.prototype.setSize;bo.prototype.getIframe=bo.prototype.getIframe;bo.prototype.addEventListener=bo.prototype.addEventListener;lo.prototype.getVideoEmbedCode=lo.prototype.getVideoEmbedCode;lo.prototype.getOptions=lo.prototype.getOptions;lo.prototype.getOption=lo.prototype.getOption;
Sn.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);E(fb(a,b),ro)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Un();var so=A.onYTReady;so&&so();var to=A.onYouTubeIframeAPIReady;to&&to();var uo=A.onYouTubePlayerAPIReady;uo&&uo();}).call(this);
