(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{71:function(t,e,r){t.exports=r.p+"static/media/logo.6483934b.png"},80:function(t,e,r){t.exports=r(94)},93:function(t,e,r){},94:function(t,e,r){"use strict";r.r(e);var n,a,o,c,i,u,l,s,f=r(2),p=r.n(f),h=r(63),d=r(36),v=r(13),y=r(17),m={INCREMENT:"INCREMENT",DECREMENT:"DECREMENT",INCREMENT_ASYNC:"INCREMENT_ASYNC",GET_WALLETS:"GET_WALLETS",SET_WALLETS:"SET_WALLETS",GET_RATES:"GET_RATES",SET_RATES:"SET_RATES",ADD_WALLET:"ADD_WALLET",SAVE_RATE:"SAVE_RATE"},g=function(){var t=Object(d.b)(),e=Object(d.c)(function(t){return t.app}).isLoading,r=Object(f.useState)(null),n=Object(y.a)(r,2),a=n[0],o=n[1];return p.a.createElement(v.j,null,p.a.createElement(v.k,null,"Wallet address:"),p.a.createElement(v.i,{onChange:function(t){return o(t.target.value)},value:a||""}),p.a.createElement(v.b,{onClick:function(){return t((e=a,{type:m.ADD_WALLET,value:e}))&&o(null);var e},disabled:e}," ",e?p.a.createElement(p.a.Fragment,null,p.a.createElement(v.n,{size:"sm"},"Loading..."),p.a.createElement("span",null," ","Loading")):"Add"))},E=r(109),b=r(43),w=r(70),x=r(54),O=r(55),j=r(19),L=r(33),S=(L.a.div(n||(n=Object(j.a)(["\n    font-family: 'OpenSans-SemiBold', 'Open Sans SemiBold', 'Open Sans';\n    display: flex;\n    flex-wrap: wrap;\n"]))),L.a.div(a||(a=Object(j.a)(["\n    font-family: 'OpenSans-SemiBold', 'Open Sans SemiBold', 'Open Sans';\n    display: flex;\n    flex-wrap: wrap;\n    width:100%;\n"]))),L.a.div(o||(o=Object(j.a)(["\n    font-family: 'OpenSans-SemiBold', 'Open Sans SemiBold', 'Open Sans';\n    display: flex;\n    flex-wrap: wrap;\n    width:100%;\n"]))),L.a.div(c||(c=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    column-gap: 10px;\n"])))),T=L.a.div(i||(i=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 20px;\n"]))),_=L.a.div(u||(u=Object(j.a)(["\n    border-radius: 4px;\n    background-color: rgba(0,0,0,.03);\n    padding: 10px;\n    border: 1px solid rgba(0,0,0,.125);\n    display: flex;\n    flex-direction: column;\n    align-items: ",";\n"])),function(t){var e=t.alignItems;return e||""}),k=L.a.div(l||(l=Object(j.a)(["\n    margin-bottom:10px;\n    cursor:pointer;\n"]))),A=L.a.div(s||(s=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    font-size: 18px;\n    color:#6c757d;\n"]))),N=function(t){var e=t.wallet,r=t.rates,n=void 0===r?[]:r,a=t.onSaveRate,o=Object(f.useState)(!0),c=Object(y.a)(o,2),i=c[0],u=c[1],l=Object(f.useState)(n[0]),s=Object(y.a)(l,2),h=s[0],d=s[1],m=Object(f.useState)(),g=Object(y.a)(m,2),j=g[0],L=g[1];return Object(f.useEffect)(function(){L(h.rate)},[h]),p.a.createElement(v.c,{className:"my-2 mb-0",color:"light"},p.a.createElement(v.e,{style:{fontSize:"14px"}},p.a.createElement(v.g,{className:"text-muted"},e.address),p.a.createElement(v.f,{className:"text-muted",style:{fontSize:"12px"}},p.a.createElement(w.a,null)," ",e.ethBalance)),p.a.createElement(v.d,null,e.isOld&&p.a.createElement(v.a,{color:"danger",style:{fontSize:"14px"}}," Wallet Is Old! "),p.a.createElement(T,null,p.a.createElement(_,{alignItems:"flex-end"},p.a.createElement(k,null,i&&p.a.createElement(x.b,{onClick:function(){return u(!i)}}),!i&&p.a.createElement(x.a,{color:"green",onClick:function(){return a(Object(b.a)({},h,{rate:Number(j)}))}})),p.a.createElement(v.i,{type:"text",disabled:i,value:j,onChange:function(t){return function(t){return L(t.target.value)}(t)}})),p.a.createElement(_,null,p.a.createElement(v.i,{type:"select",onChange:function(t){return function(t){var e=n.filter(function(e){return e.currency===t.target.value})[0];d(e),L(h.rate)}(t)},value:h.currency},n.map(function(t){return p.a.createElement("option",{key:Object(E.a)(),value:t.currency},t.currency)})),p.a.createElement("div",{className:"card-text"},p.a.createElement(A,null,p.a.createElement("div",null,Number(e.ethBalance/h.rate).toFixed(2)),p.a.createElement("div",{style:{margin:"5px 0"}},"USD"===h.currency?p.a.createElement(O.a,null):p.a.createElement(O.b,null))))))))},R=function(){var t=Object(d.b)(),e=Object(d.c)(function(t){return t.app}),r=e.wallets,n=e.rates,a=function(e){var r=e.currency,n=e.rate;return t(function(t){return{type:m.SAVE_RATE,value:t}}({currency:r,rate:n}))};return Object(f.useEffect)(function(){t({type:m.GET_WALLETS}),t({type:m.GET_RATES})},[]),0===r.length?p.a.createElement("h1",null,"No Wallets"):n.length>0&&p.a.createElement(S,null,r.map(function(t){return p.a.createElement(N,{key:Object(E.a)(),wallet:t,rates:n,onSaveRate:function(t){return a(t)}})}))},G=function(){return p.a.createElement(v.h,null,p.a.createElement(g,null),p.a.createElement(R,null))},W=r(71),I=r.n(W),C=function(){return p.a.createElement(v.l,{style:{borderRadius:"4px"},className:"my-2",color:"secondary",dark:!0},p.a.createElement(v.m,null,"Digital Wallet Dashboard"),p.a.createElement("img",{alt:"logo",src:I.a,style:{height:40,width:40}}))},D=function(){return p.a.createElement(v.h,null,p.a.createElement(C,null),p.a.createElement(G,null))};r(93),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=r(35),B=r(74),F=r(72),M=r(37),q={wallets:[],rates:[],isLoading:!1};var Y,z,V,$,J=Object(P.combineReducers)({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.SET_WALLETS:return Object(b.a)({},t,{wallets:Object(M.a)(e.value),isLoading:!1});case m.GET_WALLETS:case m.ADD_WALLET:case m.SAVE_RATE:return Object(b.a)({},t,{isLoading:!0});case m.SET_RATES:return Object(b.a)({},t,{rates:Object(M.a)(e.value),isLoading:!1});default:return t}}}),U=r(14),H=r(48),K=r(106),Q=r(108),X=new K.a({uri:"https://digital-wallet-backend-production.up.railway.app/graphql",cache:new Q.a}),Z=r(107),tt=Object(Z.a)(Y||(Y=Object(j.a)(["\n  query wallets{\n    wallets{\n        address\n        firstTransacctionTime\n        isOld\n        ethBalance\n    }\n}\n"]))),et=Object(Z.a)(z||(z=Object(j.a)(["\n    query rates {\n    rates{\n        currency\n        rate\n    }\n}\n"]))),rt=Object(Z.a)(V||(V=Object(j.a)(["\n    mutation saveWallet($address:String){\n    createWallet(address:$address){\n        status\n        message\n        result\n        ethBalance\n        firstTransacctionTime\n        isOld\n    }\n    }\n"]))),nt=Object(Z.a)($||($=Object(j.a)(["\n    mutation saveExchangeRate ($rate: ExchageRateInput){\n    updateExchange(exchageRateInput: $rate){\n      currency\n      rate\n    }\n  }\n"])));function at(){at=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,c=Object.create(o.prototype),i=new L(a||[]);return n(c,"_invoke",{value:w(t,r,i)}),c}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var f={};function p(){}function h(){}function d(){}var v={};u(v,o,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,o)&&(v=m);var g=d.prototype=p.prototype=Object.create(v);function E(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var a;n(this,"_invoke",{value:function(n,o){function c(){return new e(function(a,c){!function n(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,c,i)},function(t){n("throw",t,c,i)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,i)})}i(u.arg)}(n,o,a,c)})}return a=a?a.then(c,c):c()}})}function w(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return T()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=x(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return h.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=u(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(b.prototype),u(b.prototype,c,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new b(l(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},E(g),u(g,i,"Generator"),u(g,o,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var ot=function(){var t=Object(H.a)(at().mark(function t(){var e,r;return at().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X.query({query:tt,fetchPolicy:"no-cache"});case 3:return e=t.sent,r=e.data,t.abrupt("return",r.wallets);case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),ct=function(){var t=Object(H.a)(at().mark(function t(){var e,r;return at().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X.query({query:et,fetchPolicy:"no-cache"});case 3:return e=t.sent,r=e.data,t.abrupt("return",r.rates);case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),it=function(){var t=Object(H.a)(at().mark(function t(e){var r,n;return at().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X.mutate({mutation:rt,variables:{address:e}});case 3:return r=t.sent,n=r.data,t.abrupt("return",n.createWallet);case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}(),ut=function(){var t=Object(H.a)(at().mark(function t(e){var r,n;return at().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X.mutate({mutation:nt,variables:{rate:e}});case 3:return r=t.sent,n=r.data,t.abrupt("return",n.updateExchange);case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}();function lt(){lt=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,c=Object.create(o.prototype),i=new L(a||[]);return n(c,"_invoke",{value:w(t,r,i)}),c}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var f={};function p(){}function h(){}function d(){}var v={};u(v,o,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,o)&&(v=m);var g=d.prototype=p.prototype=Object.create(v);function E(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var a;n(this,"_invoke",{value:function(n,o){function c(){return new e(function(a,c){!function n(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,c,i)},function(t){n("throw",t,c,i)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,i)})}i(u.arg)}(n,o,a,c)})}return a=a?a.then(c,c):c()}})}function w(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return T()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=x(c,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return h.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=u(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(b.prototype),u(b.prototype,c,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new b(l(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},E(g),u(g,i,"Generator"),u(g,o,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var st=lt().mark(Et),ft=lt().mark(bt),pt=lt().mark(wt),ht=lt().mark(jt),dt=lt().mark(Lt),vt=lt().mark(St),yt=lt().mark(Tt),mt=lt().mark(_t),gt=lt().mark(kt);function Et(){return lt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.c)(1e3);case 2:return t.next=4,Object(U.d)({type:"INCREMENT"});case 4:case"end":return t.stop()}},st)}function bt(){var t;return lt().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U.b)(ot);case 3:return t=e.sent,e.next=6,Object(U.d)({type:m.SET_WALLETS,value:t});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},ft,null,[[0,8]])}function wt(){var t;return lt().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U.b)(ct);case 3:return t=e.sent,e.next=6,Object(U.d)({type:m.SET_RATES,value:t});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},pt,null,[[0,8]])}function xt(t){var e=t.value;return lt().mark(function t(){return lt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(U.b)(it,e);case 3:return t.next=5,Object(U.d)({type:m.GET_WALLETS});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])})()}function Ot(t){var e=t.value;return lt().mark(function t(){return lt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(U.b)(ut,e);case 3:return t.next=5,Object(U.d)({type:m.GET_RATES});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])})()}function jt(){return lt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.e)("INCREMENT_ASYNC",Et);case 2:case"end":return t.stop()}},ht)}function Lt(){return lt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.e)(m.GET_WALLETS,bt);case 2:case"end":return t.stop()}},dt)}function St(){return lt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.e)(m.GET_RATES,wt);case 2:case"end":return t.stop()}},vt)}function Tt(){return lt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.e)(m.ADD_WALLET,xt);case 2:case"end":return t.stop()}},yt)}function _t(){return lt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.e)(m.SAVE_RATE,Ot);case 2:case"end":return t.stop()}},mt)}function kt(){return lt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.a)([Object(U.b)(jt),Object(U.b)(Lt),Object(U.b)(St),Object(U.b)(Tt),Object(U.b)(_t)]);case 2:case"end":return t.stop()}},gt)}var At=function(t){var e=Object(B.a)(),r=[e],n=[P.applyMiddleware.apply(void 0,r)],a=F.composeWithDevTools.apply(void 0,n),o=Object(P.createStore)(J,t,a);return e.run(kt),o}(),Nt=document.getElementById("root");Object(h.createRoot)(Nt).render(p.a.createElement(d.a,{store:At}," ",p.a.createElement(D,null)," ")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){console.error(t.message)})}},[[80,1,2]]]);
//# sourceMappingURL=main.e47038ae.chunk.js.map