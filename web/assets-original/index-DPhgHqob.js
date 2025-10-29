function AS(t,e){for(var r=0;r<e.length;r++){const i=e[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const l=Object.getOwnPropertyDescriptor(i,s);l&&Object.defineProperty(t,s,l.get?l:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zd={exports:{}},As={},Jd={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function RS(){if(_0)return Te;_0=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),y=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,w={};function S(L,V,Q){this.props=L,this.context=V,this.refs=w,this.updater=Q||b}S.prototype.isReactComponent={},S.prototype.setState=function(L,V){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,V,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function j(){}j.prototype=S.prototype;function T(L,V,Q){this.props=L,this.context=V,this.refs=w,this.updater=Q||b}var C=T.prototype=new j;C.constructor=T,_(C,S.prototype),C.isPureReactComponent=!0;var E=Array.isArray,P=Object.prototype.hasOwnProperty,M={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function F(L,V,Q){var J,ie={},W=null,fe=null;if(V!=null)for(J in V.ref!==void 0&&(fe=V.ref),V.key!==void 0&&(W=""+V.key),V)P.call(V,J)&&!D.hasOwnProperty(J)&&(ie[J]=V[J]);var q=arguments.length-2;if(q===1)ie.children=Q;else if(1<q){for(var me=Array(q),ve=0;ve<q;ve++)me[ve]=arguments[ve+2];ie.children=me}if(L&&L.defaultProps)for(J in q=L.defaultProps,q)ie[J]===void 0&&(ie[J]=q[J]);return{$$typeof:t,type:L,key:W,ref:fe,props:ie,_owner:M.current}}function B(L,V){return{$$typeof:t,type:L.type,key:V,ref:L.ref,props:L.props,_owner:L._owner}}function Y(L){return typeof L=="object"&&L!==null&&L.$$typeof===t}function G(L){var V={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Q){return V[Q]})}var z=/\/+/g;function Z(L,V){return typeof L=="object"&&L!==null&&L.key!=null?G(""+L.key):V.toString(36)}function X(L,V,Q,J,ie){var W=typeof L;(W==="undefined"||W==="boolean")&&(L=null);var fe=!1;if(L===null)fe=!0;else switch(W){case"string":case"number":fe=!0;break;case"object":switch(L.$$typeof){case t:case e:fe=!0}}if(fe)return fe=L,ie=ie(fe),L=J===""?"."+Z(fe,0):J,E(ie)?(Q="",L!=null&&(Q=L.replace(z,"$&/")+"/"),X(ie,V,Q,"",function(ve){return ve})):ie!=null&&(Y(ie)&&(ie=B(ie,Q+(!ie.key||fe&&fe.key===ie.key?"":(""+ie.key).replace(z,"$&/")+"/")+L)),V.push(ie)),1;if(fe=0,J=J===""?".":J+":",E(L))for(var q=0;q<L.length;q++){W=L[q];var me=J+Z(W,q);fe+=X(W,V,Q,me,ie)}else if(me=x(L),typeof me=="function")for(L=me.call(L),q=0;!(W=L.next()).done;)W=W.value,me=J+Z(W,q++),fe+=X(W,V,Q,me,ie);else if(W==="object")throw V=String(L),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return fe}function ae(L,V,Q){if(L==null)return L;var J=[],ie=0;return X(L,J,"","",function(W){return V.call(Q,W,ie++)}),J}function ce(L){if(L._status===-1){var V=L._result;V=V(),V.then(function(Q){(L._status===0||L._status===-1)&&(L._status=1,L._result=Q)},function(Q){(L._status===0||L._status===-1)&&(L._status=2,L._result=Q)}),L._status===-1&&(L._status=0,L._result=V)}if(L._status===1)return L._result.default;throw L._result}var se={current:null},K={transition:null},le={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:K,ReactCurrentOwner:M};function re(){throw Error("act(...) is not supported in production builds of React.")}return Te.Children={map:ae,forEach:function(L,V,Q){ae(L,function(){V.apply(this,arguments)},Q)},count:function(L){var V=0;return ae(L,function(){V++}),V},toArray:function(L){return ae(L,function(V){return V})||[]},only:function(L){if(!Y(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Te.Component=S,Te.Fragment=r,Te.Profiler=s,Te.PureComponent=T,Te.StrictMode=i,Te.Suspense=f,Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Te.act=re,Te.cloneElement=function(L,V,Q){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var J=_({},L.props),ie=L.key,W=L.ref,fe=L._owner;if(V!=null){if(V.ref!==void 0&&(W=V.ref,fe=M.current),V.key!==void 0&&(ie=""+V.key),L.type&&L.type.defaultProps)var q=L.type.defaultProps;for(me in V)P.call(V,me)&&!D.hasOwnProperty(me)&&(J[me]=V[me]===void 0&&q!==void 0?q[me]:V[me])}var me=arguments.length-2;if(me===1)J.children=Q;else if(1<me){q=Array(me);for(var ve=0;ve<me;ve++)q[ve]=arguments[ve+2];J.children=q}return{$$typeof:t,type:L.type,key:ie,ref:W,props:J,_owner:fe}},Te.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Te.createElement=F,Te.createFactory=function(L){var V=F.bind(null,L);return V.type=L,V},Te.createRef=function(){return{current:null}},Te.forwardRef=function(L){return{$$typeof:c,render:L}},Te.isValidElement=Y,Te.lazy=function(L){return{$$typeof:h,_payload:{_status:-1,_result:L},_init:ce}},Te.memo=function(L,V){return{$$typeof:p,type:L,compare:V===void 0?null:V}},Te.startTransition=function(L){var V=K.transition;K.transition={};try{L()}finally{K.transition=V}},Te.unstable_act=re,Te.useCallback=function(L,V){return se.current.useCallback(L,V)},Te.useContext=function(L){return se.current.useContext(L)},Te.useDebugValue=function(){},Te.useDeferredValue=function(L){return se.current.useDeferredValue(L)},Te.useEffect=function(L,V){return se.current.useEffect(L,V)},Te.useId=function(){return se.current.useId()},Te.useImperativeHandle=function(L,V,Q){return se.current.useImperativeHandle(L,V,Q)},Te.useInsertionEffect=function(L,V){return se.current.useInsertionEffect(L,V)},Te.useLayoutEffect=function(L,V){return se.current.useLayoutEffect(L,V)},Te.useMemo=function(L,V){return se.current.useMemo(L,V)},Te.useReducer=function(L,V,Q){return se.current.useReducer(L,V,Q)},Te.useRef=function(L){return se.current.useRef(L)},Te.useState=function(L){return se.current.useState(L)},Te.useSyncExternalStore=function(L,V,Q){return se.current.useSyncExternalStore(L,V,Q)},Te.useTransition=function(){return se.current.useTransition()},Te.version="18.3.1",Te}var S0;function Cr(){return S0||(S0=1,Jd.exports=RS()),Jd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function LS(){if(k0)return As;k0=1;var t=Cr(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,f,p){var h,y={},x=null,b=null;p!==void 0&&(x=""+p),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(b=f.ref);for(h in f)i.call(f,h)&&!l.hasOwnProperty(h)&&(y[h]=f[h]);if(c&&c.defaultProps)for(h in f=c.defaultProps,f)y[h]===void 0&&(y[h]=f[h]);return{$$typeof:e,type:c,key:x,ref:b,props:y,_owner:s.current}}return As.Fragment=r,As.jsx=u,As.jsxs=u,As}var C0;function MS(){return C0||(C0=1,Zd.exports=LS()),Zd.exports}var m=MS(),R=Cr();const Pe=zp(R),DS=AS({__proto__:null,default:Pe},[R]);var Nl={},ef={exports:{}},Ut={},tf={exports:{}},nf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function IS(){return P0||(P0=1,function(t){function e(K,le){var re=K.length;K.push(le);e:for(;0<re;){var L=re-1>>>1,V=K[L];if(0<s(V,le))K[L]=le,K[re]=V,re=L;else break e}}function r(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var le=K[0],re=K.pop();if(re!==le){K[0]=re;e:for(var L=0,V=K.length,Q=V>>>1;L<Q;){var J=2*(L+1)-1,ie=K[J],W=J+1,fe=K[W];if(0>s(ie,re))W<V&&0>s(fe,ie)?(K[L]=fe,K[W]=re,L=W):(K[L]=ie,K[J]=re,L=J);else if(W<V&&0>s(fe,re))K[L]=fe,K[W]=re,L=W;else break e}}return le}function s(K,le){var re=K.sortIndex-le.sortIndex;return re!==0?re:K.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}var f=[],p=[],h=1,y=null,x=3,b=!1,_=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(K){for(var le=r(p);le!==null;){if(le.callback===null)i(p);else if(le.startTime<=K)i(p),le.sortIndex=le.expirationTime,e(f,le);else break;le=r(p)}}function E(K){if(w=!1,C(K),!_)if(r(f)!==null)_=!0,ce(P);else{var le=r(p);le!==null&&se(E,le.startTime-K)}}function P(K,le){_=!1,w&&(w=!1,j(F),F=-1),b=!0;var re=x;try{for(C(le),y=r(f);y!==null&&(!(y.expirationTime>le)||K&&!G());){var L=y.callback;if(typeof L=="function"){y.callback=null,x=y.priorityLevel;var V=L(y.expirationTime<=le);le=t.unstable_now(),typeof V=="function"?y.callback=V:y===r(f)&&i(f),C(le)}else i(f);y=r(f)}if(y!==null)var Q=!0;else{var J=r(p);J!==null&&se(E,J.startTime-le),Q=!1}return Q}finally{y=null,x=re,b=!1}}var M=!1,D=null,F=-1,B=5,Y=-1;function G(){return!(t.unstable_now()-Y<B)}function z(){if(D!==null){var K=t.unstable_now();Y=K;var le=!0;try{le=D(!0,K)}finally{le?Z():(M=!1,D=null)}}else M=!1}var Z;if(typeof T=="function")Z=function(){T(z)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ae=X.port2;X.port1.onmessage=z,Z=function(){ae.postMessage(null)}}else Z=function(){S(z,0)};function ce(K){D=K,M||(M=!0,Z())}function se(K,le){F=S(function(){K(t.unstable_now())},le)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){_||b||(_=!0,ce(P))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return r(f)},t.unstable_next=function(K){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var re=x;x=le;try{return K()}finally{x=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,le){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var re=x;x=K;try{return le()}finally{x=re}},t.unstable_scheduleCallback=function(K,le,re){var L=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?L+re:L):re=L,K){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=re+V,K={id:h++,callback:le,priorityLevel:K,startTime:re,expirationTime:V,sortIndex:-1},re>L?(K.sortIndex=re,e(p,K),r(f)===null&&K===r(p)&&(w?(j(F),F=-1):w=!0,se(E,re-L))):(K.sortIndex=V,e(f,K),_||b||(_=!0,ce(P))),K},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(K){var le=x;return function(){var re=x;x=le;try{return K.apply(this,arguments)}finally{x=re}}}}(nf)),nf}var T0;function zS(){return T0||(T0=1,tf.exports=IS()),tf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function FS(){if(j0)return Ut;j0=1;var t=Cr(),e=zS();function r(n){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(n,o){u(n,o),u(n+"Capture",o)}function u(n,o){for(s[n]=o,n=0;n<o.length;n++)i.add(o[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},y={};function x(n){return f.call(y,n)?!0:f.call(h,n)?!1:p.test(n)?y[n]=!0:(h[n]=!0,!1)}function b(n,o,a,d){if(a!==null&&a.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function _(n,o,a,d){if(o===null||typeof o>"u"||b(n,o,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function w(n,o,a,d,g,v,k){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=a,this.propertyName=n,this.type=o,this.sanitizeURL=v,this.removeEmptyString=k}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var o=n[0];S[o]=new w(o,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var j=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var o=n.replace(j,T);S[o]=new w(o,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var o=n.replace(j,T);S[o]=new w(o,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var o=n.replace(j,T);S[o]=new w(o,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,o,a,d){var g=S.hasOwnProperty(o)?S[o]:null;(g!==null?g.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(_(o,a,g,d)&&(a=null),d||g===null?x(o)&&(a===null?n.removeAttribute(o):n.setAttribute(o,""+a)):g.mustUseProperty?n[g.propertyName]=a===null?g.type===3?!1:"":a:(o=g.attributeName,d=g.attributeNamespace,a===null?n.removeAttribute(o):(g=g.type,a=g===3||g===4&&a===!0?"":""+a,d?n.setAttributeNS(d,o,a):n.setAttribute(o,a))))}var E=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),M=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),G=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),K=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,L;function V(n){if(L===void 0)try{throw Error()}catch(a){var o=a.stack.trim().match(/\n( *(at )?)/);L=o&&o[1]||""}return`
`+L+n}var Q=!1;function J(n,o){if(!n||Q)return"";Q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(H){var d=H}Reflect.construct(n,[],o)}else{try{o.call()}catch(H){d=H}n.call(o.prototype)}else{try{throw Error()}catch(H){d=H}n()}}catch(H){if(H&&d&&typeof H.stack=="string"){for(var g=H.stack.split(`
`),v=d.stack.split(`
`),k=g.length-1,A=v.length-1;1<=k&&0<=A&&g[k]!==v[A];)A--;for(;1<=k&&0<=A;k--,A--)if(g[k]!==v[A]){if(k!==1||A!==1)do if(k--,A--,0>A||g[k]!==v[A]){var I=`
`+g[k].replace(" at new "," at ");return n.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",n.displayName)),I}while(1<=k&&0<=A);break}}}finally{Q=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?V(n):""}function ie(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function W(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case M:return"Portal";case B:return"Profiler";case F:return"StrictMode";case Z:return"Suspense";case X:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case z:var o=n.render;return n=n.displayName,n||(n=o.displayName||o.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ae:return o=n.displayName||null,o!==null?o:W(n.type)||"Memo";case ce:o=n._payload,n=n._init;try{return W(n(o))}catch{}}return null}function fe(n){var o=n.type;switch(n.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=o.render,n=n.displayName||n.name||"",o.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(o);case 8:return o===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function q(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function me(n){var o=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function ve(n){var o=me(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,o),d=""+n[o];if(!n.hasOwnProperty(o)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var g=a.get,v=a.set;return Object.defineProperty(n,o,{configurable:!0,get:function(){return g.call(this)},set:function(k){d=""+k,v.call(this,k)}}),Object.defineProperty(n,o,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(k){d=""+k},stopTracking:function(){n._valueTracker=null,delete n[o]}}}}function _e(n){n._valueTracker||(n._valueTracker=ve(n))}function Se(n){if(!n)return!1;var o=n._valueTracker;if(!o)return!0;var a=o.getValue(),d="";return n&&(d=me(n)?n.checked?"true":"false":n.value),n=d,n!==a?(o.setValue(n),!0):!1}function Ze(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gt(n,o){var a=o.checked;return re({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function je(n,o){var a=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;a=q(o.value!=null?o.value:a),n._wrapperState={initialChecked:d,initialValue:a,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function pt(n,o){o=o.checked,o!=null&&C(n,"checked",o,!1)}function Oe(n,o){pt(n,o);var a=q(o.value),d=o.type;if(a!=null)d==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}o.hasOwnProperty("value")?ir(n,o.type,a):o.hasOwnProperty("defaultValue")&&ir(n,o.type,q(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(n.defaultChecked=!!o.defaultChecked)}function ot(n,o,a){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+n._wrapperState.initialValue,a||o===n.value||(n.value=o),n.defaultValue=o}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ir(n,o,a){(o!=="number"||Ze(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var He=Array.isArray;function jn(n,o,a,d){if(n=n.options,o){o={};for(var g=0;g<a.length;g++)o["$"+a[g]]=!0;for(a=0;a<n.length;a++)g=o.hasOwnProperty("$"+n[a].value),n[a].selected!==g&&(n[a].selected=g),g&&d&&(n[a].defaultSelected=!0)}else{for(a=""+q(a),o=null,g=0;g<n.length;g++){if(n[g].value===a){n[g].selected=!0,d&&(n[g].defaultSelected=!0);return}o!==null||n[g].disabled||(o=n[g])}o!==null&&(o.selected=!0)}}function or(n,o){if(o.dangerouslySetInnerHTML!=null)throw Error(r(91));return re({},o,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function zt(n,o){var a=o.value;if(a==null){if(a=o.children,o=o.defaultValue,a!=null){if(o!=null)throw Error(r(92));if(He(a)){if(1<a.length)throw Error(r(93));a=a[0]}o=a}o==null&&(o=""),a=o}n._wrapperState={initialValue:q(a)}}function ke(n,o){var a=q(o.value),d=q(o.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),o.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),d!=null&&(n.defaultValue=""+d)}function Ve(n){var o=n.textContent;o===n._wrapperState.initialValue&&o!==""&&o!==null&&(n.value=o)}function Gi(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(n,o){return n==null||n==="http://www.w3.org/1999/xhtml"?Gi(o):n==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Qt,Ih=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,a,d,g){MSApp.execUnsafeLocalFunction(function(){return n(o,a,d,g)})}:n}(function(n,o){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=o;else{for(Qt=Qt||document.createElement("div"),Qt.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Qt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;o.firstChild;)n.appendChild(o.firstChild)}});function qo(n,o){if(o){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=o;return}}n.textContent=o}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Db=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(n){Db.forEach(function(o){o=o+n.charAt(0).toUpperCase()+n.substring(1),Go[o]=Go[n]})});function zh(n,o,a){return o==null||typeof o=="boolean"||o===""?"":a||typeof o!="number"||o===0||Go.hasOwnProperty(n)&&Go[n]?(""+o).trim():o+"px"}function Fh(n,o){n=n.style;for(var a in o)if(o.hasOwnProperty(a)){var d=a.indexOf("--")===0,g=zh(a,o[a],d);a==="float"&&(a="cssFloat"),d?n.setProperty(a,g):n[a]=g}}var Ib=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cc(n,o){if(o){if(Ib[n]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(r(137,n));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(r(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(r(61))}if(o.style!=null&&typeof o.style!="object")throw Error(r(62))}}function dc(n,o){if(n.indexOf("-")===-1)return typeof o.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=null;function pc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hc=null,Xi=null,Qi=null;function Nh(n){if(n=gs(n)){if(typeof hc!="function")throw Error(r(280));var o=n.stateNode;o&&(o=Ja(o),hc(n.stateNode,n.type,o))}}function Bh(n){Xi?Qi?Qi.push(n):Qi=[n]:Xi=n}function Vh(){if(Xi){var n=Xi,o=Qi;if(Qi=Xi=null,Nh(n),o)for(n=0;n<o.length;n++)Nh(o[n])}}function Wh(n,o){return n(o)}function Uh(){}var mc=!1;function $h(n,o,a){if(mc)return n(o,a);mc=!0;try{return Wh(n,o,a)}finally{mc=!1,(Xi!==null||Qi!==null)&&(Uh(),Vh())}}function Xo(n,o){var a=n.stateNode;if(a===null)return null;var d=Ja(a);if(d===null)return null;a=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(r(231,o,typeof a));return a}var gc=!1;if(c)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{gc=!1}function zb(n,o,a,d,g,v,k,A,I){var H=Array.prototype.slice.call(arguments,3);try{o.apply(a,H)}catch(te){this.onError(te)}}var Ko=!1,Aa=null,Ra=!1,yc=null,Fb={onError:function(n){Ko=!0,Aa=n}};function Nb(n,o,a,d,g,v,k,A,I){Ko=!1,Aa=null,zb.apply(Fb,arguments)}function Bb(n,o,a,d,g,v,k,A,I){if(Nb.apply(this,arguments),Ko){if(Ko){var H=Aa;Ko=!1,Aa=null}else throw Error(r(198));Ra||(Ra=!0,yc=H)}}function fi(n){var o=n,a=n;if(n.alternate)for(;o.return;)o=o.return;else{n=o;do o=n,(o.flags&4098)!==0&&(a=o.return),n=o.return;while(n)}return o.tag===3?a:null}function Hh(n){if(n.tag===13){var o=n.memoizedState;if(o===null&&(n=n.alternate,n!==null&&(o=n.memoizedState)),o!==null)return o.dehydrated}return null}function Yh(n){if(fi(n)!==n)throw Error(r(188))}function Vb(n){var o=n.alternate;if(!o){if(o=fi(n),o===null)throw Error(r(188));return o!==n?null:n}for(var a=n,d=o;;){var g=a.return;if(g===null)break;var v=g.alternate;if(v===null){if(d=g.return,d!==null){a=d;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===a)return Yh(g),n;if(v===d)return Yh(g),o;v=v.sibling}throw Error(r(188))}if(a.return!==d.return)a=g,d=v;else{for(var k=!1,A=g.child;A;){if(A===a){k=!0,a=g,d=v;break}if(A===d){k=!0,d=g,a=v;break}A=A.sibling}if(!k){for(A=v.child;A;){if(A===a){k=!0,a=v,d=g;break}if(A===d){k=!0,d=v,a=g;break}A=A.sibling}if(!k)throw Error(r(189))}}if(a.alternate!==d)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?n:o}function qh(n){return n=Vb(n),n!==null?Gh(n):null}function Gh(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var o=Gh(n);if(o!==null)return o;n=n.sibling}return null}var Xh=e.unstable_scheduleCallback,Qh=e.unstable_cancelCallback,Wb=e.unstable_shouldYield,Ub=e.unstable_requestPaint,nt=e.unstable_now,$b=e.unstable_getCurrentPriorityLevel,vc=e.unstable_ImmediatePriority,Kh=e.unstable_UserBlockingPriority,La=e.unstable_NormalPriority,Hb=e.unstable_LowPriority,Zh=e.unstable_IdlePriority,Ma=null,Fn=null;function Yb(n){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(Ma,n,void 0,(n.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:Xb,qb=Math.log,Gb=Math.LN2;function Xb(n){return n>>>=0,n===0?32:31-(qb(n)/Gb|0)|0}var Da=64,Ia=4194304;function Zo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function za(n,o){var a=n.pendingLanes;if(a===0)return 0;var d=0,g=n.suspendedLanes,v=n.pingedLanes,k=a&268435455;if(k!==0){var A=k&~g;A!==0?d=Zo(A):(v&=k,v!==0&&(d=Zo(v)))}else k=a&~g,k!==0?d=Zo(k):v!==0&&(d=Zo(v));if(d===0)return 0;if(o!==0&&o!==d&&(o&g)===0&&(g=d&-d,v=o&-o,g>=v||g===16&&(v&4194240)!==0))return o;if((d&4)!==0&&(d|=a&16),o=n.entangledLanes,o!==0)for(n=n.entanglements,o&=d;0<o;)a=31-En(o),g=1<<a,d|=n[a],o&=~g;return d}function Qb(n,o){switch(n){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kb(n,o){for(var a=n.suspendedLanes,d=n.pingedLanes,g=n.expirationTimes,v=n.pendingLanes;0<v;){var k=31-En(v),A=1<<k,I=g[k];I===-1?((A&a)===0||(A&d)!==0)&&(g[k]=Qb(A,o)):I<=o&&(n.expiredLanes|=A),v&=~A}}function xc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Jh(){var n=Da;return Da<<=1,(Da&4194240)===0&&(Da=64),n}function wc(n){for(var o=[],a=0;31>a;a++)o.push(n);return o}function Jo(n,o,a){n.pendingLanes|=o,o!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,o=31-En(o),n[o]=a}function Zb(n,o){var a=n.pendingLanes&~o;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=o,n.mutableReadLanes&=o,n.entangledLanes&=o,o=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<a;){var g=31-En(a),v=1<<g;o[g]=0,d[g]=-1,n[g]=-1,a&=~v}}function bc(n,o){var a=n.entangledLanes|=o;for(n=n.entanglements;a;){var d=31-En(a),g=1<<d;g&o|n[d]&o&&(n[d]|=o),a&=~g}}var De=0;function em(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var tm,_c,nm,rm,im,Sc=!1,Fa=[],Pr=null,Tr=null,jr=null,es=new Map,ts=new Map,Er=[],Jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function om(n,o){switch(n){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":es.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(o.pointerId)}}function ns(n,o,a,d,g,v){return n===null||n.nativeEvent!==v?(n={blockedOn:o,domEventName:a,eventSystemFlags:d,nativeEvent:v,targetContainers:[g]},o!==null&&(o=gs(o),o!==null&&_c(o)),n):(n.eventSystemFlags|=d,o=n.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),n)}function e_(n,o,a,d,g){switch(o){case"focusin":return Pr=ns(Pr,n,o,a,d,g),!0;case"dragenter":return Tr=ns(Tr,n,o,a,d,g),!0;case"mouseover":return jr=ns(jr,n,o,a,d,g),!0;case"pointerover":var v=g.pointerId;return es.set(v,ns(es.get(v)||null,n,o,a,d,g)),!0;case"gotpointercapture":return v=g.pointerId,ts.set(v,ns(ts.get(v)||null,n,o,a,d,g)),!0}return!1}function sm(n){var o=pi(n.target);if(o!==null){var a=fi(o);if(a!==null){if(o=a.tag,o===13){if(o=Hh(a),o!==null){n.blockedOn=o,im(n.priority,function(){nm(a)});return}}else if(o===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var o=n.targetContainers;0<o.length;){var a=Cc(n.domEventName,n.eventSystemFlags,o[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var d=new a.constructor(a.type,a);fc=d,a.target.dispatchEvent(d),fc=null}else return o=gs(a),o!==null&&_c(o),n.blockedOn=a,!1;o.shift()}return!0}function am(n,o,a){Na(n)&&a.delete(o)}function t_(){Sc=!1,Pr!==null&&Na(Pr)&&(Pr=null),Tr!==null&&Na(Tr)&&(Tr=null),jr!==null&&Na(jr)&&(jr=null),es.forEach(am),ts.forEach(am)}function rs(n,o){n.blockedOn===o&&(n.blockedOn=null,Sc||(Sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,t_)))}function is(n){function o(g){return rs(g,n)}if(0<Fa.length){rs(Fa[0],n);for(var a=1;a<Fa.length;a++){var d=Fa[a];d.blockedOn===n&&(d.blockedOn=null)}}for(Pr!==null&&rs(Pr,n),Tr!==null&&rs(Tr,n),jr!==null&&rs(jr,n),es.forEach(o),ts.forEach(o),a=0;a<Er.length;a++)d=Er[a],d.blockedOn===n&&(d.blockedOn=null);for(;0<Er.length&&(a=Er[0],a.blockedOn===null);)sm(a),a.blockedOn===null&&Er.shift()}var Ki=E.ReactCurrentBatchConfig,Ba=!0;function n_(n,o,a,d){var g=De,v=Ki.transition;Ki.transition=null;try{De=1,kc(n,o,a,d)}finally{De=g,Ki.transition=v}}function r_(n,o,a,d){var g=De,v=Ki.transition;Ki.transition=null;try{De=4,kc(n,o,a,d)}finally{De=g,Ki.transition=v}}function kc(n,o,a,d){if(Ba){var g=Cc(n,o,a,d);if(g===null)Wc(n,o,d,Va,a),om(n,d);else if(e_(g,n,o,a,d))d.stopPropagation();else if(om(n,d),o&4&&-1<Jb.indexOf(n)){for(;g!==null;){var v=gs(g);if(v!==null&&tm(v),v=Cc(n,o,a,d),v===null&&Wc(n,o,d,Va,a),v===g)break;g=v}g!==null&&d.stopPropagation()}else Wc(n,o,d,null,a)}}var Va=null;function Cc(n,o,a,d){if(Va=null,n=pc(d),n=pi(n),n!==null)if(o=fi(n),o===null)n=null;else if(a=o.tag,a===13){if(n=Hh(o),n!==null)return n;n=null}else if(a===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;n=null}else o!==n&&(n=null);return Va=n,null}function lm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($b()){case vc:return 1;case Kh:return 4;case La:case Hb:return 16;case Zh:return 536870912;default:return 16}default:return 16}}var Or=null,Pc=null,Wa=null;function um(){if(Wa)return Wa;var n,o=Pc,a=o.length,d,g="value"in Or?Or.value:Or.textContent,v=g.length;for(n=0;n<a&&o[n]===g[n];n++);var k=a-n;for(d=1;d<=k&&o[a-d]===g[v-d];d++);return Wa=g.slice(n,1<d?1-d:void 0)}function Ua(n){var o=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&o===13&&(n=13)):n=o,n===10&&(n=13),32<=n||n===13?n:0}function $a(){return!0}function cm(){return!1}function Kt(n){function o(a,d,g,v,k){this._reactName=a,this._targetInst=g,this.type=d,this.nativeEvent=v,this.target=k,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(v):v[A]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?$a:cm,this.isPropagationStopped=cm,this}return re(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),o}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=Kt(Zi),os=re({},Zi,{view:0,detail:0}),i_=Kt(os),jc,Ec,ss,Ha=re({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ss&&(ss&&n.type==="mousemove"?(jc=n.screenX-ss.screenX,Ec=n.screenY-ss.screenY):Ec=jc=0,ss=n),jc)},movementY:function(n){return"movementY"in n?n.movementY:Ec}}),dm=Kt(Ha),o_=re({},Ha,{dataTransfer:0}),s_=Kt(o_),a_=re({},os,{relatedTarget:0}),Oc=Kt(a_),l_=re({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),u_=Kt(l_),c_=re({},Zi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),d_=Kt(c_),f_=re({},Zi,{data:0}),fm=Kt(f_),p_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g_(n){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(n):(n=m_[n])?!!o[n]:!1}function Ac(){return g_}var y_=re({},os,{key:function(n){if(n.key){var o=p_[n.key]||n.key;if(o!=="Unidentified")return o}return n.type==="keypress"?(n=Ua(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?h_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(n){return n.type==="keypress"?Ua(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ua(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),v_=Kt(y_),x_=re({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=Kt(x_),w_=re({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),b_=Kt(w_),__=re({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),S_=Kt(__),k_=re({},Ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),C_=Kt(k_),P_=[9,13,27,32],Rc=c&&"CompositionEvent"in window,as=null;c&&"documentMode"in document&&(as=document.documentMode);var T_=c&&"TextEvent"in window&&!as,hm=c&&(!Rc||as&&8<as&&11>=as),mm=" ",gm=!1;function ym(n,o){switch(n){case"keyup":return P_.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ji=!1;function j_(n,o){switch(n){case"compositionend":return vm(o);case"keypress":return o.which!==32?null:(gm=!0,mm);case"textInput":return n=o.data,n===mm&&gm?null:n;default:return null}}function E_(n,o){if(Ji)return n==="compositionend"||!Rc&&ym(n,o)?(n=um(),Wa=Pc=Or=null,Ji=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return hm&&o.locale!=="ko"?null:o.data;default:return null}}var O_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(n){var o=n&&n.nodeName&&n.nodeName.toLowerCase();return o==="input"?!!O_[n.type]:o==="textarea"}function wm(n,o,a,d){Bh(d),o=Qa(o,"onChange"),0<o.length&&(a=new Tc("onChange","change",null,a,d),n.push({event:a,listeners:o}))}var ls=null,us=null;function A_(n){Fm(n,0)}function Ya(n){var o=io(n);if(Se(o))return n}function R_(n,o){if(n==="change")return o}var bm=!1;if(c){var Lc;if(c){var Mc="oninput"in document;if(!Mc){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),Mc=typeof _m.oninput=="function"}Lc=Mc}else Lc=!1;bm=Lc&&(!document.documentMode||9<document.documentMode)}function Sm(){ls&&(ls.detachEvent("onpropertychange",km),us=ls=null)}function km(n){if(n.propertyName==="value"&&Ya(us)){var o=[];wm(o,us,n,pc(n)),$h(A_,o)}}function L_(n,o,a){n==="focusin"?(Sm(),ls=o,us=a,ls.attachEvent("onpropertychange",km)):n==="focusout"&&Sm()}function M_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ya(us)}function D_(n,o){if(n==="click")return Ya(o)}function I_(n,o){if(n==="input"||n==="change")return Ya(o)}function z_(n,o){return n===o&&(n!==0||1/n===1/o)||n!==n&&o!==o}var On=typeof Object.is=="function"?Object.is:z_;function cs(n,o){if(On(n,o))return!0;if(typeof n!="object"||n===null||typeof o!="object"||o===null)return!1;var a=Object.keys(n),d=Object.keys(o);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var g=a[d];if(!f.call(o,g)||!On(n[g],o[g]))return!1}return!0}function Cm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pm(n,o){var a=Cm(n);n=0;for(var d;a;){if(a.nodeType===3){if(d=n+a.textContent.length,n<=o&&d>=o)return{node:a,offset:o-n};n=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cm(a)}}function Tm(n,o){return n&&o?n===o?!0:n&&n.nodeType===3?!1:o&&o.nodeType===3?Tm(n,o.parentNode):"contains"in n?n.contains(o):n.compareDocumentPosition?!!(n.compareDocumentPosition(o)&16):!1:!1}function jm(){for(var n=window,o=Ze();o instanceof n.HTMLIFrameElement;){try{var a=typeof o.contentWindow.location.href=="string"}catch{a=!1}if(a)n=o.contentWindow;else break;o=Ze(n.document)}return o}function Dc(n){var o=n&&n.nodeName&&n.nodeName.toLowerCase();return o&&(o==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||o==="textarea"||n.contentEditable==="true")}function F_(n){var o=jm(),a=n.focusedElem,d=n.selectionRange;if(o!==a&&a&&a.ownerDocument&&Tm(a.ownerDocument.documentElement,a)){if(d!==null&&Dc(a)){if(o=d.start,n=d.end,n===void 0&&(n=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(n,a.value.length);else if(n=(o=a.ownerDocument||document)&&o.defaultView||window,n.getSelection){n=n.getSelection();var g=a.textContent.length,v=Math.min(d.start,g);d=d.end===void 0?v:Math.min(d.end,g),!n.extend&&v>d&&(g=d,d=v,v=g),g=Pm(a,v);var k=Pm(a,d);g&&k&&(n.rangeCount!==1||n.anchorNode!==g.node||n.anchorOffset!==g.offset||n.focusNode!==k.node||n.focusOffset!==k.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),n.removeAllRanges(),v>d?(n.addRange(o),n.extend(k.node,k.offset)):(o.setEnd(k.node,k.offset),n.addRange(o)))}}for(o=[],n=a;n=n.parentNode;)n.nodeType===1&&o.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<o.length;a++)n=o[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var N_=c&&"documentMode"in document&&11>=document.documentMode,eo=null,Ic=null,ds=null,zc=!1;function Em(n,o,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zc||eo==null||eo!==Ze(d)||(d=eo,"selectionStart"in d&&Dc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ds&&cs(ds,d)||(ds=d,d=Qa(Ic,"onSelect"),0<d.length&&(o=new Tc("onSelect","select",null,o,a),n.push({event:o,listeners:d}),o.target=eo)))}function qa(n,o){var a={};return a[n.toLowerCase()]=o.toLowerCase(),a["Webkit"+n]="webkit"+o,a["Moz"+n]="moz"+o,a}var to={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},Fc={},Om={};c&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Ga(n){if(Fc[n])return Fc[n];if(!to[n])return n;var o=to[n],a;for(a in o)if(o.hasOwnProperty(a)&&a in Om)return Fc[n]=o[a];return n}var Am=Ga("animationend"),Rm=Ga("animationiteration"),Lm=Ga("animationstart"),Mm=Ga("transitionend"),Dm=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(n,o){Dm.set(n,o),l(o,[n])}for(var Nc=0;Nc<Im.length;Nc++){var Bc=Im[Nc],B_=Bc.toLowerCase(),V_=Bc[0].toUpperCase()+Bc.slice(1);Ar(B_,"on"+V_)}Ar(Am,"onAnimationEnd"),Ar(Rm,"onAnimationIteration"),Ar(Lm,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Mm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function zm(n,o,a){var d=n.type||"unknown-event";n.currentTarget=a,Bb(d,o,void 0,n),n.currentTarget=null}function Fm(n,o){o=(o&4)!==0;for(var a=0;a<n.length;a++){var d=n[a],g=d.event;d=d.listeners;e:{var v=void 0;if(o)for(var k=d.length-1;0<=k;k--){var A=d[k],I=A.instance,H=A.currentTarget;if(A=A.listener,I!==v&&g.isPropagationStopped())break e;zm(g,A,H),v=I}else for(k=0;k<d.length;k++){if(A=d[k],I=A.instance,H=A.currentTarget,A=A.listener,I!==v&&g.isPropagationStopped())break e;zm(g,A,H),v=I}}}if(Ra)throw n=yc,Ra=!1,yc=null,n}function Ne(n,o){var a=o[Gc];a===void 0&&(a=o[Gc]=new Set);var d=n+"__bubble";a.has(d)||(Nm(o,n,2,!1),a.add(d))}function Vc(n,o,a){var d=0;o&&(d|=4),Nm(a,n,d,o)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function ps(n){if(!n[Xa]){n[Xa]=!0,i.forEach(function(a){a!=="selectionchange"&&(W_.has(a)||Vc(a,!1,n),Vc(a,!0,n))});var o=n.nodeType===9?n:n.ownerDocument;o===null||o[Xa]||(o[Xa]=!0,Vc("selectionchange",!1,o))}}function Nm(n,o,a,d){switch(lm(o)){case 1:var g=n_;break;case 4:g=r_;break;default:g=kc}a=g.bind(null,o,a,n),g=void 0,!gc||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),d?g!==void 0?n.addEventListener(o,a,{capture:!0,passive:g}):n.addEventListener(o,a,!0):g!==void 0?n.addEventListener(o,a,{passive:g}):n.addEventListener(o,a,!1)}function Wc(n,o,a,d,g){var v=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var k=d.tag;if(k===3||k===4){var A=d.stateNode.containerInfo;if(A===g||A.nodeType===8&&A.parentNode===g)break;if(k===4)for(k=d.return;k!==null;){var I=k.tag;if((I===3||I===4)&&(I=k.stateNode.containerInfo,I===g||I.nodeType===8&&I.parentNode===g))return;k=k.return}for(;A!==null;){if(k=pi(A),k===null)return;if(I=k.tag,I===5||I===6){d=v=k;continue e}A=A.parentNode}}d=d.return}$h(function(){var H=v,te=pc(a),ne=[];e:{var ee=Dm.get(n);if(ee!==void 0){var de=Tc,he=n;switch(n){case"keypress":if(Ua(a)===0)break e;case"keydown":case"keyup":de=v_;break;case"focusin":he="focus",de=Oc;break;case"focusout":he="blur",de=Oc;break;case"beforeblur":case"afterblur":de=Oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=s_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=b_;break;case Am:case Rm:case Lm:de=u_;break;case Mm:de=S_;break;case"scroll":de=i_;break;case"wheel":de=C_;break;case"copy":case"cut":case"paste":de=d_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=pm}var ge=(o&4)!==0,rt=!ge&&n==="scroll",U=ge?ee!==null?ee+"Capture":null:ee;ge=[];for(var N=H,$;N!==null;){$=N;var oe=$.stateNode;if($.tag===5&&oe!==null&&($=oe,U!==null&&(oe=Xo(N,U),oe!=null&&ge.push(hs(N,oe,$)))),rt)break;N=N.return}0<ge.length&&(ee=new de(ee,he,null,a,te),ne.push({event:ee,listeners:ge}))}}if((o&7)===0){e:{if(ee=n==="mouseover"||n==="pointerover",de=n==="mouseout"||n==="pointerout",ee&&a!==fc&&(he=a.relatedTarget||a.fromElement)&&(pi(he)||he[sr]))break e;if((de||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,de?(he=a.relatedTarget||a.toElement,de=H,he=he?pi(he):null,he!==null&&(rt=fi(he),he!==rt||he.tag!==5&&he.tag!==6)&&(he=null)):(de=null,he=H),de!==he)){if(ge=dm,oe="onMouseLeave",U="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ge=pm,oe="onPointerLeave",U="onPointerEnter",N="pointer"),rt=de==null?ee:io(de),$=he==null?ee:io(he),ee=new ge(oe,N+"leave",de,a,te),ee.target=rt,ee.relatedTarget=$,oe=null,pi(te)===H&&(ge=new ge(U,N+"enter",he,a,te),ge.target=$,ge.relatedTarget=rt,oe=ge),rt=oe,de&&he)t:{for(ge=de,U=he,N=0,$=ge;$;$=no($))N++;for($=0,oe=U;oe;oe=no(oe))$++;for(;0<N-$;)ge=no(ge),N--;for(;0<$-N;)U=no(U),$--;for(;N--;){if(ge===U||U!==null&&ge===U.alternate)break t;ge=no(ge),U=no(U)}ge=null}else ge=null;de!==null&&Bm(ne,ee,de,ge,!1),he!==null&&rt!==null&&Bm(ne,rt,he,ge,!0)}}e:{if(ee=H?io(H):window,de=ee.nodeName&&ee.nodeName.toLowerCase(),de==="select"||de==="input"&&ee.type==="file")var ye=R_;else if(xm(ee))if(bm)ye=I_;else{ye=M_;var xe=L_}else(de=ee.nodeName)&&de.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(ye=D_);if(ye&&(ye=ye(n,H))){wm(ne,ye,a,te);break e}xe&&xe(n,ee,H),n==="focusout"&&(xe=ee._wrapperState)&&xe.controlled&&ee.type==="number"&&ir(ee,"number",ee.value)}switch(xe=H?io(H):window,n){case"focusin":(xm(xe)||xe.contentEditable==="true")&&(eo=xe,Ic=H,ds=null);break;case"focusout":ds=Ic=eo=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Em(ne,a,te);break;case"selectionchange":if(N_)break;case"keydown":case"keyup":Em(ne,a,te)}var we;if(Rc)e:{switch(n){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Ji?ym(n,a)&&(Ce="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(hm&&a.locale!=="ko"&&(Ji||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ji&&(we=um()):(Or=te,Pc="value"in Or?Or.value:Or.textContent,Ji=!0)),xe=Qa(H,Ce),0<xe.length&&(Ce=new fm(Ce,n,null,a,te),ne.push({event:Ce,listeners:xe}),we?Ce.data=we:(we=vm(a),we!==null&&(Ce.data=we)))),(we=T_?j_(n,a):E_(n,a))&&(H=Qa(H,"onBeforeInput"),0<H.length&&(te=new fm("onBeforeInput","beforeinput",null,a,te),ne.push({event:te,listeners:H}),te.data=we))}Fm(ne,o)})}function hs(n,o,a){return{instance:n,listener:o,currentTarget:a}}function Qa(n,o){for(var a=o+"Capture",d=[];n!==null;){var g=n,v=g.stateNode;g.tag===5&&v!==null&&(g=v,v=Xo(n,a),v!=null&&d.unshift(hs(n,v,g)),v=Xo(n,o),v!=null&&d.push(hs(n,v,g))),n=n.return}return d}function no(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bm(n,o,a,d,g){for(var v=o._reactName,k=[];a!==null&&a!==d;){var A=a,I=A.alternate,H=A.stateNode;if(I!==null&&I===d)break;A.tag===5&&H!==null&&(A=H,g?(I=Xo(a,v),I!=null&&k.unshift(hs(a,I,A))):g||(I=Xo(a,v),I!=null&&k.push(hs(a,I,A)))),a=a.return}k.length!==0&&n.push({event:o,listeners:k})}var U_=/\r\n?/g,$_=/\u0000|\uFFFD/g;function Vm(n){return(typeof n=="string"?n:""+n).replace(U_,`
`).replace($_,"")}function Ka(n,o,a){if(o=Vm(o),Vm(n)!==o&&a)throw Error(r(425))}function Za(){}var Uc=null,$c=null;function Hc(n,o){return n==="textarea"||n==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,H_=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,Y_=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(n){return Wm.resolve(null).then(n).catch(q_)}:Yc;function q_(n){setTimeout(function(){throw n})}function qc(n,o){var a=o,d=0;do{var g=a.nextSibling;if(n.removeChild(a),g&&g.nodeType===8)if(a=g.data,a==="/$"){if(d===0){n.removeChild(g),is(o);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=g}while(a);is(o)}function Rr(n){for(;n!=null;n=n.nextSibling){var o=n.nodeType;if(o===1||o===3)break;if(o===8){if(o=n.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return n}function Um(n){n=n.previousSibling;for(var o=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(o===0)return n;o--}else a==="/$"&&o++}n=n.previousSibling}return null}var ro=Math.random().toString(36).slice(2),Nn="__reactFiber$"+ro,ms="__reactProps$"+ro,sr="__reactContainer$"+ro,Gc="__reactEvents$"+ro,G_="__reactListeners$"+ro,X_="__reactHandles$"+ro;function pi(n){var o=n[Nn];if(o)return o;for(var a=n.parentNode;a;){if(o=a[sr]||a[Nn]){if(a=o.alternate,o.child!==null||a!==null&&a.child!==null)for(n=Um(n);n!==null;){if(a=n[Nn])return a;n=Um(n)}return o}n=a,a=n.parentNode}return null}function gs(n){return n=n[Nn]||n[sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function io(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(r(33))}function Ja(n){return n[ms]||null}var Xc=[],oo=-1;function Lr(n){return{current:n}}function Be(n){0>oo||(n.current=Xc[oo],Xc[oo]=null,oo--)}function Fe(n,o){oo++,Xc[oo]=n.current,n.current=o}var Mr={},Ct=Lr(Mr),Ft=Lr(!1),hi=Mr;function so(n,o){var a=n.type.contextTypes;if(!a)return Mr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var g={},v;for(v in a)g[v]=o[v];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=g),g}function Nt(n){return n=n.childContextTypes,n!=null}function el(){Be(Ft),Be(Ct)}function $m(n,o,a){if(Ct.current!==Mr)throw Error(r(168));Fe(Ct,o),Fe(Ft,a)}function Hm(n,o,a){var d=n.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var g in d)if(!(g in o))throw Error(r(108,fe(n)||"Unknown",g));return re({},a,d)}function tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,hi=Ct.current,Fe(Ct,n),Fe(Ft,Ft.current),!0}function Ym(n,o,a){var d=n.stateNode;if(!d)throw Error(r(169));a?(n=Hm(n,o,hi),d.__reactInternalMemoizedMergedChildContext=n,Be(Ft),Be(Ct),Fe(Ct,n)):Be(Ft),Fe(Ft,a)}var ar=null,nl=!1,Qc=!1;function qm(n){ar===null?ar=[n]:ar.push(n)}function Q_(n){nl=!0,qm(n)}function Dr(){if(!Qc&&ar!==null){Qc=!0;var n=0,o=De;try{var a=ar;for(De=1;n<a.length;n++){var d=a[n];do d=d(!0);while(d!==null)}ar=null,nl=!1}catch(g){throw ar!==null&&(ar=ar.slice(n+1)),Xh(vc,Dr),g}finally{De=o,Qc=!1}}return null}var ao=[],lo=0,rl=null,il=0,fn=[],pn=0,mi=null,lr=1,ur="";function gi(n,o){ao[lo++]=il,ao[lo++]=rl,rl=n,il=o}function Gm(n,o,a){fn[pn++]=lr,fn[pn++]=ur,fn[pn++]=mi,mi=n;var d=lr;n=ur;var g=32-En(d)-1;d&=~(1<<g),a+=1;var v=32-En(o)+g;if(30<v){var k=g-g%5;v=(d&(1<<k)-1).toString(32),d>>=k,g-=k,lr=1<<32-En(o)+g|a<<g|d,ur=v+n}else lr=1<<v|a<<g|d,ur=n}function Kc(n){n.return!==null&&(gi(n,1),Gm(n,1,0))}function Zc(n){for(;n===rl;)rl=ao[--lo],ao[lo]=null,il=ao[--lo],ao[lo]=null;for(;n===mi;)mi=fn[--pn],fn[pn]=null,ur=fn[--pn],fn[pn]=null,lr=fn[--pn],fn[pn]=null}var Zt=null,Jt=null,We=!1,An=null;function Xm(n,o){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=o,a.return=n,o=n.deletions,o===null?(n.deletions=[a],n.flags|=16):o.push(a)}function Qm(n,o){switch(n.tag){case 5:var a=n.type;return o=o.nodeType!==1||a.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(n.stateNode=o,Zt=n,Jt=Rr(o.firstChild),!0):!1;case 6:return o=n.pendingProps===""||o.nodeType!==3?null:o,o!==null?(n.stateNode=o,Zt=n,Jt=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(a=mi!==null?{id:lr,overflow:ur}:null,n.memoizedState={dehydrated:o,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=o,a.return=n,n.child=a,Zt=n,Jt=null,!0):!1;default:return!1}}function Jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ed(n){if(We){var o=Jt;if(o){var a=o;if(!Qm(n,o)){if(Jc(n))throw Error(r(418));o=Rr(a.nextSibling);var d=Zt;o&&Qm(n,o)?Xm(d,a):(n.flags=n.flags&-4097|2,We=!1,Zt=n)}}else{if(Jc(n))throw Error(r(418));n.flags=n.flags&-4097|2,We=!1,Zt=n}}}function Km(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zt=n}function ol(n){if(n!==Zt)return!1;if(!We)return Km(n),We=!0,!1;var o;if((o=n.tag!==3)&&!(o=n.tag!==5)&&(o=n.type,o=o!=="head"&&o!=="body"&&!Hc(n.type,n.memoizedProps)),o&&(o=Jt)){if(Jc(n))throw Zm(),Error(r(418));for(;o;)Xm(n,o),o=Rr(o.nextSibling)}if(Km(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,o=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(o===0){Jt=Rr(n.nextSibling);break e}o--}else a!=="$"&&a!=="$!"&&a!=="$?"||o++}n=n.nextSibling}Jt=null}}else Jt=Zt?Rr(n.stateNode.nextSibling):null;return!0}function Zm(){for(var n=Jt;n;)n=Rr(n.nextSibling)}function uo(){Jt=Zt=null,We=!1}function td(n){An===null?An=[n]:An.push(n)}var K_=E.ReactCurrentBatchConfig;function ys(n,o,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(r(309));var d=a.stateNode}if(!d)throw Error(r(147,n));var g=d,v=""+n;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===v?o.ref:(o=function(k){var A=g.refs;k===null?delete A[v]:A[v]=k},o._stringRef=v,o)}if(typeof n!="string")throw Error(r(284));if(!a._owner)throw Error(r(290,n))}return n}function sl(n,o){throw n=Object.prototype.toString.call(o),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":n))}function Jm(n){var o=n._init;return o(n._payload)}function eg(n){function o(U,N){if(n){var $=U.deletions;$===null?(U.deletions=[N],U.flags|=16):$.push(N)}}function a(U,N){if(!n)return null;for(;N!==null;)o(U,N),N=N.sibling;return null}function d(U,N){for(U=new Map;N!==null;)N.key!==null?U.set(N.key,N):U.set(N.index,N),N=N.sibling;return U}function g(U,N){return U=Ur(U,N),U.index=0,U.sibling=null,U}function v(U,N,$){return U.index=$,n?($=U.alternate,$!==null?($=$.index,$<N?(U.flags|=2,N):$):(U.flags|=2,N)):(U.flags|=1048576,N)}function k(U){return n&&U.alternate===null&&(U.flags|=2),U}function A(U,N,$,oe){return N===null||N.tag!==6?(N=Yd($,U.mode,oe),N.return=U,N):(N=g(N,$),N.return=U,N)}function I(U,N,$,oe){var ye=$.type;return ye===D?te(U,N,$.props.children,oe,$.key):N!==null&&(N.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===ce&&Jm(ye)===N.type)?(oe=g(N,$.props),oe.ref=ys(U,N,$),oe.return=U,oe):(oe=Ol($.type,$.key,$.props,null,U.mode,oe),oe.ref=ys(U,N,$),oe.return=U,oe)}function H(U,N,$,oe){return N===null||N.tag!==4||N.stateNode.containerInfo!==$.containerInfo||N.stateNode.implementation!==$.implementation?(N=qd($,U.mode,oe),N.return=U,N):(N=g(N,$.children||[]),N.return=U,N)}function te(U,N,$,oe,ye){return N===null||N.tag!==7?(N=ki($,U.mode,oe,ye),N.return=U,N):(N=g(N,$),N.return=U,N)}function ne(U,N,$){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Yd(""+N,U.mode,$),N.return=U,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case P:return $=Ol(N.type,N.key,N.props,null,U.mode,$),$.ref=ys(U,null,N),$.return=U,$;case M:return N=qd(N,U.mode,$),N.return=U,N;case ce:var oe=N._init;return ne(U,oe(N._payload),$)}if(He(N)||le(N))return N=ki(N,U.mode,$,null),N.return=U,N;sl(U,N)}return null}function ee(U,N,$,oe){var ye=N!==null?N.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return ye!==null?null:A(U,N,""+$,oe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case P:return $.key===ye?I(U,N,$,oe):null;case M:return $.key===ye?H(U,N,$,oe):null;case ce:return ye=$._init,ee(U,N,ye($._payload),oe)}if(He($)||le($))return ye!==null?null:te(U,N,$,oe,null);sl(U,$)}return null}function de(U,N,$,oe,ye){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return U=U.get($)||null,A(N,U,""+oe,ye);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case P:return U=U.get(oe.key===null?$:oe.key)||null,I(N,U,oe,ye);case M:return U=U.get(oe.key===null?$:oe.key)||null,H(N,U,oe,ye);case ce:var xe=oe._init;return de(U,N,$,xe(oe._payload),ye)}if(He(oe)||le(oe))return U=U.get($)||null,te(N,U,oe,ye,null);sl(N,oe)}return null}function he(U,N,$,oe){for(var ye=null,xe=null,we=N,Ce=N=0,xt=null;we!==null&&Ce<$.length;Ce++){we.index>Ce?(xt=we,we=null):xt=we.sibling;var Re=ee(U,we,$[Ce],oe);if(Re===null){we===null&&(we=xt);break}n&&we&&Re.alternate===null&&o(U,we),N=v(Re,N,Ce),xe===null?ye=Re:xe.sibling=Re,xe=Re,we=xt}if(Ce===$.length)return a(U,we),We&&gi(U,Ce),ye;if(we===null){for(;Ce<$.length;Ce++)we=ne(U,$[Ce],oe),we!==null&&(N=v(we,N,Ce),xe===null?ye=we:xe.sibling=we,xe=we);return We&&gi(U,Ce),ye}for(we=d(U,we);Ce<$.length;Ce++)xt=de(we,U,Ce,$[Ce],oe),xt!==null&&(n&&xt.alternate!==null&&we.delete(xt.key===null?Ce:xt.key),N=v(xt,N,Ce),xe===null?ye=xt:xe.sibling=xt,xe=xt);return n&&we.forEach(function($r){return o(U,$r)}),We&&gi(U,Ce),ye}function ge(U,N,$,oe){var ye=le($);if(typeof ye!="function")throw Error(r(150));if($=ye.call($),$==null)throw Error(r(151));for(var xe=ye=null,we=N,Ce=N=0,xt=null,Re=$.next();we!==null&&!Re.done;Ce++,Re=$.next()){we.index>Ce?(xt=we,we=null):xt=we.sibling;var $r=ee(U,we,Re.value,oe);if($r===null){we===null&&(we=xt);break}n&&we&&$r.alternate===null&&o(U,we),N=v($r,N,Ce),xe===null?ye=$r:xe.sibling=$r,xe=$r,we=xt}if(Re.done)return a(U,we),We&&gi(U,Ce),ye;if(we===null){for(;!Re.done;Ce++,Re=$.next())Re=ne(U,Re.value,oe),Re!==null&&(N=v(Re,N,Ce),xe===null?ye=Re:xe.sibling=Re,xe=Re);return We&&gi(U,Ce),ye}for(we=d(U,we);!Re.done;Ce++,Re=$.next())Re=de(we,U,Ce,Re.value,oe),Re!==null&&(n&&Re.alternate!==null&&we.delete(Re.key===null?Ce:Re.key),N=v(Re,N,Ce),xe===null?ye=Re:xe.sibling=Re,xe=Re);return n&&we.forEach(function(OS){return o(U,OS)}),We&&gi(U,Ce),ye}function rt(U,N,$,oe){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case P:e:{for(var ye=$.key,xe=N;xe!==null;){if(xe.key===ye){if(ye=$.type,ye===D){if(xe.tag===7){a(U,xe.sibling),N=g(xe,$.props.children),N.return=U,U=N;break e}}else if(xe.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===ce&&Jm(ye)===xe.type){a(U,xe.sibling),N=g(xe,$.props),N.ref=ys(U,xe,$),N.return=U,U=N;break e}a(U,xe);break}else o(U,xe);xe=xe.sibling}$.type===D?(N=ki($.props.children,U.mode,oe,$.key),N.return=U,U=N):(oe=Ol($.type,$.key,$.props,null,U.mode,oe),oe.ref=ys(U,N,$),oe.return=U,U=oe)}return k(U);case M:e:{for(xe=$.key;N!==null;){if(N.key===xe)if(N.tag===4&&N.stateNode.containerInfo===$.containerInfo&&N.stateNode.implementation===$.implementation){a(U,N.sibling),N=g(N,$.children||[]),N.return=U,U=N;break e}else{a(U,N);break}else o(U,N);N=N.sibling}N=qd($,U.mode,oe),N.return=U,U=N}return k(U);case ce:return xe=$._init,rt(U,N,xe($._payload),oe)}if(He($))return he(U,N,$,oe);if(le($))return ge(U,N,$,oe);sl(U,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,N!==null&&N.tag===6?(a(U,N.sibling),N=g(N,$),N.return=U,U=N):(a(U,N),N=Yd($,U.mode,oe),N.return=U,U=N),k(U)):a(U,N)}return rt}var co=eg(!0),tg=eg(!1),al=Lr(null),ll=null,fo=null,nd=null;function rd(){nd=fo=ll=null}function id(n){var o=al.current;Be(al),n._currentValue=o}function od(n,o,a){for(;n!==null;){var d=n.alternate;if((n.childLanes&o)!==o?(n.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),n===a)break;n=n.return}}function po(n,o){ll=n,nd=fo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&o)!==0&&(Bt=!0),n.firstContext=null)}function hn(n){var o=n._currentValue;if(nd!==n)if(n={context:n,memoizedValue:o,next:null},fo===null){if(ll===null)throw Error(r(308));fo=n,ll.dependencies={lanes:0,firstContext:n}}else fo=fo.next=n;return o}var yi=null;function sd(n){yi===null?yi=[n]:yi.push(n)}function ng(n,o,a,d){var g=o.interleaved;return g===null?(a.next=a,sd(o)):(a.next=g.next,g.next=a),o.interleaved=a,cr(n,d)}function cr(n,o){n.lanes|=o;var a=n.alternate;for(a!==null&&(a.lanes|=o),a=n,n=n.return;n!==null;)n.childLanes|=o,a=n.alternate,a!==null&&(a.childLanes|=o),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ir=!1;function ad(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rg(n,o){n=n.updateQueue,o.updateQueue===n&&(o.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,o){return{eventTime:n,lane:o,tag:0,payload:null,callback:null,next:null}}function zr(n,o,a){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Ae&2)!==0){var g=d.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),d.pending=o,cr(n,a)}return g=d.interleaved,g===null?(o.next=o,sd(d)):(o.next=g.next,g.next=o),d.interleaved=o,cr(n,a)}function ul(n,o,a){if(o=o.updateQueue,o!==null&&(o=o.shared,(a&4194240)!==0)){var d=o.lanes;d&=n.pendingLanes,a|=d,o.lanes=a,bc(n,a)}}function ig(n,o){var a=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var g=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var k={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?g=v=k:v=v.next=k,a=a.next}while(a!==null);v===null?g=v=o:v=v.next=o}else g=v=o;a={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:d.shared,effects:d.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=o:n.next=o,a.lastBaseUpdate=o}function cl(n,o,a,d){var g=n.updateQueue;Ir=!1;var v=g.firstBaseUpdate,k=g.lastBaseUpdate,A=g.shared.pending;if(A!==null){g.shared.pending=null;var I=A,H=I.next;I.next=null,k===null?v=H:k.next=H,k=I;var te=n.alternate;te!==null&&(te=te.updateQueue,A=te.lastBaseUpdate,A!==k&&(A===null?te.firstBaseUpdate=H:A.next=H,te.lastBaseUpdate=I))}if(v!==null){var ne=g.baseState;k=0,te=H=I=null,A=v;do{var ee=A.lane,de=A.eventTime;if((d&ee)===ee){te!==null&&(te=te.next={eventTime:de,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var he=n,ge=A;switch(ee=o,de=a,ge.tag){case 1:if(he=ge.payload,typeof he=="function"){ne=he.call(de,ne,ee);break e}ne=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=ge.payload,ee=typeof he=="function"?he.call(de,ne,ee):he,ee==null)break e;ne=re({},ne,ee);break e;case 2:Ir=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,ee=g.effects,ee===null?g.effects=[A]:ee.push(A))}else de={eventTime:de,lane:ee,tag:A.tag,payload:A.payload,callback:A.callback,next:null},te===null?(H=te=de,I=ne):te=te.next=de,k|=ee;if(A=A.next,A===null){if(A=g.shared.pending,A===null)break;ee=A,A=ee.next,ee.next=null,g.lastBaseUpdate=ee,g.shared.pending=null}}while(!0);if(te===null&&(I=ne),g.baseState=I,g.firstBaseUpdate=H,g.lastBaseUpdate=te,o=g.shared.interleaved,o!==null){g=o;do k|=g.lane,g=g.next;while(g!==o)}else v===null&&(g.shared.lanes=0);wi|=k,n.lanes=k,n.memoizedState=ne}}function og(n,o,a){if(n=o.effects,o.effects=null,n!==null)for(o=0;o<n.length;o++){var d=n[o],g=d.callback;if(g!==null){if(d.callback=null,d=a,typeof g!="function")throw Error(r(191,g));g.call(d)}}}var vs={},Bn=Lr(vs),xs=Lr(vs),ws=Lr(vs);function vi(n){if(n===vs)throw Error(r(174));return n}function ld(n,o){switch(Fe(ws,o),Fe(xs,n),Fe(Bn,vs),n=o.nodeType,n){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:di(null,"");break;default:n=n===8?o.parentNode:o,o=n.namespaceURI||null,n=n.tagName,o=di(o,n)}Be(Bn),Fe(Bn,o)}function ho(){Be(Bn),Be(xs),Be(ws)}function sg(n){vi(ws.current);var o=vi(Bn.current),a=di(o,n.type);o!==a&&(Fe(xs,n),Fe(Bn,a))}function ud(n){xs.current===n&&(Be(Bn),Be(xs))}var Ye=Lr(0);function dl(n){for(var o=n;o!==null;){if(o.tag===13){var a=o.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var cd=[];function dd(){for(var n=0;n<cd.length;n++)cd[n]._workInProgressVersionPrimary=null;cd.length=0}var fl=E.ReactCurrentDispatcher,fd=E.ReactCurrentBatchConfig,xi=0,qe=null,ht=null,yt=null,pl=!1,bs=!1,_s=0,Z_=0;function Pt(){throw Error(r(321))}function pd(n,o){if(o===null)return!1;for(var a=0;a<o.length&&a<n.length;a++)if(!On(n[a],o[a]))return!1;return!0}function hd(n,o,a,d,g,v){if(xi=v,qe=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,fl.current=n===null||n.memoizedState===null?nS:rS,n=a(d,g),bs){v=0;do{if(bs=!1,_s=0,25<=v)throw Error(r(301));v+=1,yt=ht=null,o.updateQueue=null,fl.current=iS,n=a(d,g)}while(bs)}if(fl.current=gl,o=ht!==null&&ht.next!==null,xi=0,yt=ht=qe=null,pl=!1,o)throw Error(r(300));return n}function md(){var n=_s!==0;return _s=0,n}function Vn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?qe.memoizedState=yt=n:yt=yt.next=n,yt}function mn(){if(ht===null){var n=qe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var o=yt===null?qe.memoizedState:yt.next;if(o!==null)yt=o,ht=n;else{if(n===null)throw Error(r(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?qe.memoizedState=yt=n:yt=yt.next=n}return yt}function Ss(n,o){return typeof o=="function"?o(n):o}function gd(n){var o=mn(),a=o.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var d=ht,g=d.baseQueue,v=a.pending;if(v!==null){if(g!==null){var k=g.next;g.next=v.next,v.next=k}d.baseQueue=g=v,a.pending=null}if(g!==null){v=g.next,d=d.baseState;var A=k=null,I=null,H=v;do{var te=H.lane;if((xi&te)===te)I!==null&&(I=I.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),d=H.hasEagerState?H.eagerState:n(d,H.action);else{var ne={lane:te,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};I===null?(A=I=ne,k=d):I=I.next=ne,qe.lanes|=te,wi|=te}H=H.next}while(H!==null&&H!==v);I===null?k=d:I.next=A,On(d,o.memoizedState)||(Bt=!0),o.memoizedState=d,o.baseState=k,o.baseQueue=I,a.lastRenderedState=d}if(n=a.interleaved,n!==null){g=n;do v=g.lane,qe.lanes|=v,wi|=v,g=g.next;while(g!==n)}else g===null&&(a.lanes=0);return[o.memoizedState,a.dispatch]}function yd(n){var o=mn(),a=o.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var d=a.dispatch,g=a.pending,v=o.memoizedState;if(g!==null){a.pending=null;var k=g=g.next;do v=n(v,k.action),k=k.next;while(k!==g);On(v,o.memoizedState)||(Bt=!0),o.memoizedState=v,o.baseQueue===null&&(o.baseState=v),a.lastRenderedState=v}return[v,d]}function ag(){}function lg(n,o){var a=qe,d=mn(),g=o(),v=!On(d.memoizedState,g);if(v&&(d.memoizedState=g,Bt=!0),d=d.queue,vd(dg.bind(null,a,d,n),[n]),d.getSnapshot!==o||v||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,ks(9,cg.bind(null,a,d,g,o),void 0,null),vt===null)throw Error(r(349));(xi&30)!==0||ug(a,o,g)}return g}function ug(n,o,a){n.flags|=16384,n={getSnapshot:o,value:a},o=qe.updateQueue,o===null?(o={lastEffect:null,stores:null},qe.updateQueue=o,o.stores=[n]):(a=o.stores,a===null?o.stores=[n]:a.push(n))}function cg(n,o,a,d){o.value=a,o.getSnapshot=d,fg(o)&&pg(n)}function dg(n,o,a){return a(function(){fg(o)&&pg(n)})}function fg(n){var o=n.getSnapshot;n=n.value;try{var a=o();return!On(n,a)}catch{return!0}}function pg(n){var o=cr(n,1);o!==null&&Dn(o,n,1,-1)}function hg(n){var o=Vn();return typeof n=="function"&&(n=n()),o.memoizedState=o.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:n},o.queue=n,n=n.dispatch=tS.bind(null,qe,n),[o.memoizedState,n]}function ks(n,o,a,d){return n={tag:n,create:o,destroy:a,deps:d,next:null},o=qe.updateQueue,o===null?(o={lastEffect:null,stores:null},qe.updateQueue=o,o.lastEffect=n.next=n):(a=o.lastEffect,a===null?o.lastEffect=n.next=n:(d=a.next,a.next=n,n.next=d,o.lastEffect=n)),n}function mg(){return mn().memoizedState}function hl(n,o,a,d){var g=Vn();qe.flags|=n,g.memoizedState=ks(1|o,a,void 0,d===void 0?null:d)}function ml(n,o,a,d){var g=mn();d=d===void 0?null:d;var v=void 0;if(ht!==null){var k=ht.memoizedState;if(v=k.destroy,d!==null&&pd(d,k.deps)){g.memoizedState=ks(o,a,v,d);return}}qe.flags|=n,g.memoizedState=ks(1|o,a,v,d)}function gg(n,o){return hl(8390656,8,n,o)}function vd(n,o){return ml(2048,8,n,o)}function yg(n,o){return ml(4,2,n,o)}function vg(n,o){return ml(4,4,n,o)}function xg(n,o){if(typeof o=="function")return n=n(),o(n),function(){o(null)};if(o!=null)return n=n(),o.current=n,function(){o.current=null}}function wg(n,o,a){return a=a!=null?a.concat([n]):null,ml(4,4,xg.bind(null,o,n),a)}function xd(){}function bg(n,o){var a=mn();o=o===void 0?null:o;var d=a.memoizedState;return d!==null&&o!==null&&pd(o,d[1])?d[0]:(a.memoizedState=[n,o],n)}function _g(n,o){var a=mn();o=o===void 0?null:o;var d=a.memoizedState;return d!==null&&o!==null&&pd(o,d[1])?d[0]:(n=n(),a.memoizedState=[n,o],n)}function Sg(n,o,a){return(xi&21)===0?(n.baseState&&(n.baseState=!1,Bt=!0),n.memoizedState=a):(On(a,o)||(a=Jh(),qe.lanes|=a,wi|=a,n.baseState=!0),o)}function J_(n,o){var a=De;De=a!==0&&4>a?a:4,n(!0);var d=fd.transition;fd.transition={};try{n(!1),o()}finally{De=a,fd.transition=d}}function kg(){return mn().memoizedState}function eS(n,o,a){var d=Vr(n);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Cg(n))Pg(o,a);else if(a=ng(n,o,a,d),a!==null){var g=Mt();Dn(a,n,d,g),Tg(a,o,d)}}function tS(n,o,a){var d=Vr(n),g={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cg(n))Pg(o,g);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=o.lastRenderedReducer,v!==null))try{var k=o.lastRenderedState,A=v(k,a);if(g.hasEagerState=!0,g.eagerState=A,On(A,k)){var I=o.interleaved;I===null?(g.next=g,sd(o)):(g.next=I.next,I.next=g),o.interleaved=g;return}}catch{}finally{}a=ng(n,o,g,d),a!==null&&(g=Mt(),Dn(a,n,d,g),Tg(a,o,d))}}function Cg(n){var o=n.alternate;return n===qe||o!==null&&o===qe}function Pg(n,o){bs=pl=!0;var a=n.pending;a===null?o.next=o:(o.next=a.next,a.next=o),n.pending=o}function Tg(n,o,a){if((a&4194240)!==0){var d=o.lanes;d&=n.pendingLanes,a|=d,o.lanes=a,bc(n,a)}}var gl={readContext:hn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},nS={readContext:hn,useCallback:function(n,o){return Vn().memoizedState=[n,o===void 0?null:o],n},useContext:hn,useEffect:gg,useImperativeHandle:function(n,o,a){return a=a!=null?a.concat([n]):null,hl(4194308,4,xg.bind(null,o,n),a)},useLayoutEffect:function(n,o){return hl(4194308,4,n,o)},useInsertionEffect:function(n,o){return hl(4,2,n,o)},useMemo:function(n,o){var a=Vn();return o=o===void 0?null:o,n=n(),a.memoizedState=[n,o],n},useReducer:function(n,o,a){var d=Vn();return o=a!==void 0?a(o):o,d.memoizedState=d.baseState=o,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:o},d.queue=n,n=n.dispatch=eS.bind(null,qe,n),[d.memoizedState,n]},useRef:function(n){var o=Vn();return n={current:n},o.memoizedState=n},useState:hg,useDebugValue:xd,useDeferredValue:function(n){return Vn().memoizedState=n},useTransition:function(){var n=hg(!1),o=n[0];return n=J_.bind(null,n[1]),Vn().memoizedState=n,[o,n]},useMutableSource:function(){},useSyncExternalStore:function(n,o,a){var d=qe,g=Vn();if(We){if(a===void 0)throw Error(r(407));a=a()}else{if(a=o(),vt===null)throw Error(r(349));(xi&30)!==0||ug(d,o,a)}g.memoizedState=a;var v={value:a,getSnapshot:o};return g.queue=v,gg(dg.bind(null,d,v,n),[n]),d.flags|=2048,ks(9,cg.bind(null,d,v,a,o),void 0,null),a},useId:function(){var n=Vn(),o=vt.identifierPrefix;if(We){var a=ur,d=lr;a=(d&~(1<<32-En(d)-1)).toString(32)+a,o=":"+o+"R"+a,a=_s++,0<a&&(o+="H"+a.toString(32)),o+=":"}else a=Z_++,o=":"+o+"r"+a.toString(32)+":";return n.memoizedState=o},unstable_isNewReconciler:!1},rS={readContext:hn,useCallback:bg,useContext:hn,useEffect:vd,useImperativeHandle:wg,useInsertionEffect:yg,useLayoutEffect:vg,useMemo:_g,useReducer:gd,useRef:mg,useState:function(){return gd(Ss)},useDebugValue:xd,useDeferredValue:function(n){var o=mn();return Sg(o,ht.memoizedState,n)},useTransition:function(){var n=gd(Ss)[0],o=mn().memoizedState;return[n,o]},useMutableSource:ag,useSyncExternalStore:lg,useId:kg,unstable_isNewReconciler:!1},iS={readContext:hn,useCallback:bg,useContext:hn,useEffect:vd,useImperativeHandle:wg,useInsertionEffect:yg,useLayoutEffect:vg,useMemo:_g,useReducer:yd,useRef:mg,useState:function(){return yd(Ss)},useDebugValue:xd,useDeferredValue:function(n){var o=mn();return ht===null?o.memoizedState=n:Sg(o,ht.memoizedState,n)},useTransition:function(){var n=yd(Ss)[0],o=mn().memoizedState;return[n,o]},useMutableSource:ag,useSyncExternalStore:lg,useId:kg,unstable_isNewReconciler:!1};function Rn(n,o){if(n&&n.defaultProps){o=re({},o),n=n.defaultProps;for(var a in n)o[a]===void 0&&(o[a]=n[a]);return o}return o}function wd(n,o,a,d){o=n.memoizedState,a=a(d,o),a=a==null?o:re({},o,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var yl={isMounted:function(n){return(n=n._reactInternals)?fi(n)===n:!1},enqueueSetState:function(n,o,a){n=n._reactInternals;var d=Mt(),g=Vr(n),v=dr(d,g);v.payload=o,a!=null&&(v.callback=a),o=zr(n,v,g),o!==null&&(Dn(o,n,g,d),ul(o,n,g))},enqueueReplaceState:function(n,o,a){n=n._reactInternals;var d=Mt(),g=Vr(n),v=dr(d,g);v.tag=1,v.payload=o,a!=null&&(v.callback=a),o=zr(n,v,g),o!==null&&(Dn(o,n,g,d),ul(o,n,g))},enqueueForceUpdate:function(n,o){n=n._reactInternals;var a=Mt(),d=Vr(n),g=dr(a,d);g.tag=2,o!=null&&(g.callback=o),o=zr(n,g,d),o!==null&&(Dn(o,n,d,a),ul(o,n,d))}};function jg(n,o,a,d,g,v,k){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,v,k):o.prototype&&o.prototype.isPureReactComponent?!cs(a,d)||!cs(g,v):!0}function Eg(n,o,a){var d=!1,g=Mr,v=o.contextType;return typeof v=="object"&&v!==null?v=hn(v):(g=Nt(o)?hi:Ct.current,d=o.contextTypes,v=(d=d!=null)?so(n,g):Mr),o=new o(a,v),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=yl,n.stateNode=o,o._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=g,n.__reactInternalMemoizedMaskedChildContext=v),o}function Og(n,o,a,d){n=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(a,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(a,d),o.state!==n&&yl.enqueueReplaceState(o,o.state,null)}function bd(n,o,a,d){var g=n.stateNode;g.props=a,g.state=n.memoizedState,g.refs={},ad(n);var v=o.contextType;typeof v=="object"&&v!==null?g.context=hn(v):(v=Nt(o)?hi:Ct.current,g.context=so(n,v)),g.state=n.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(wd(n,o,v,a),g.state=n.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&yl.enqueueReplaceState(g,g.state,null),cl(n,a,g,d),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308)}function mo(n,o){try{var a="",d=o;do a+=ie(d),d=d.return;while(d);var g=a}catch(v){g=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:o,stack:g,digest:null}}function _d(n,o,a){return{value:n,source:null,stack:a??null,digest:o??null}}function Sd(n,o){try{console.error(o.value)}catch(a){setTimeout(function(){throw a})}}var oS=typeof WeakMap=="function"?WeakMap:Map;function Ag(n,o,a){a=dr(-1,a),a.tag=3,a.payload={element:null};var d=o.value;return a.callback=function(){kl||(kl=!0,Fd=d),Sd(n,o)},a}function Rg(n,o,a){a=dr(-1,a),a.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var g=o.value;a.payload=function(){return d(g)},a.callback=function(){Sd(n,o)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Sd(n,o),typeof d!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var k=o.stack;this.componentDidCatch(o.value,{componentStack:k!==null?k:""})}),a}function Lg(n,o,a){var d=n.pingCache;if(d===null){d=n.pingCache=new oS;var g=new Set;d.set(o,g)}else g=d.get(o),g===void 0&&(g=new Set,d.set(o,g));g.has(a)||(g.add(a),n=xS.bind(null,n,o,a),o.then(n,n))}function Mg(n){do{var o;if((o=n.tag===13)&&(o=n.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return n;n=n.return}while(n!==null);return null}function Dg(n,o,a,d,g){return(n.mode&1)===0?(n===o?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(o=dr(-1,1),o.tag=2,zr(a,o,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=g,n)}var sS=E.ReactCurrentOwner,Bt=!1;function Lt(n,o,a,d){o.child=n===null?tg(o,null,a,d):co(o,n.child,a,d)}function Ig(n,o,a,d,g){a=a.render;var v=o.ref;return po(o,g),d=hd(n,o,a,d,v,g),a=md(),n!==null&&!Bt?(o.updateQueue=n.updateQueue,o.flags&=-2053,n.lanes&=~g,fr(n,o,g)):(We&&a&&Kc(o),o.flags|=1,Lt(n,o,d,g),o.child)}function zg(n,o,a,d,g){if(n===null){var v=a.type;return typeof v=="function"&&!Hd(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(o.tag=15,o.type=v,Fg(n,o,v,d,g)):(n=Ol(a.type,null,d,o,o.mode,g),n.ref=o.ref,n.return=o,o.child=n)}if(v=n.child,(n.lanes&g)===0){var k=v.memoizedProps;if(a=a.compare,a=a!==null?a:cs,a(k,d)&&n.ref===o.ref)return fr(n,o,g)}return o.flags|=1,n=Ur(v,d),n.ref=o.ref,n.return=o,o.child=n}function Fg(n,o,a,d,g){if(n!==null){var v=n.memoizedProps;if(cs(v,d)&&n.ref===o.ref)if(Bt=!1,o.pendingProps=d=v,(n.lanes&g)!==0)(n.flags&131072)!==0&&(Bt=!0);else return o.lanes=n.lanes,fr(n,o,g)}return kd(n,o,a,d,g)}function Ng(n,o,a){var d=o.pendingProps,g=d.children,v=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(yo,en),en|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:n,cachePool:null,transitions:null},o.updateQueue=null,Fe(yo,en),en|=n,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:a,Fe(yo,en),en|=d}else v!==null?(d=v.baseLanes|a,o.memoizedState=null):d=a,Fe(yo,en),en|=d;return Lt(n,o,g,a),o.child}function Bg(n,o){var a=o.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(o.flags|=512,o.flags|=2097152)}function kd(n,o,a,d,g){var v=Nt(a)?hi:Ct.current;return v=so(o,v),po(o,g),a=hd(n,o,a,d,v,g),d=md(),n!==null&&!Bt?(o.updateQueue=n.updateQueue,o.flags&=-2053,n.lanes&=~g,fr(n,o,g)):(We&&d&&Kc(o),o.flags|=1,Lt(n,o,a,g),o.child)}function Vg(n,o,a,d,g){if(Nt(a)){var v=!0;tl(o)}else v=!1;if(po(o,g),o.stateNode===null)xl(n,o),Eg(o,a,d),bd(o,a,d,g),d=!0;else if(n===null){var k=o.stateNode,A=o.memoizedProps;k.props=A;var I=k.context,H=a.contextType;typeof H=="object"&&H!==null?H=hn(H):(H=Nt(a)?hi:Ct.current,H=so(o,H));var te=a.getDerivedStateFromProps,ne=typeof te=="function"||typeof k.getSnapshotBeforeUpdate=="function";ne||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(A!==d||I!==H)&&Og(o,k,d,H),Ir=!1;var ee=o.memoizedState;k.state=ee,cl(o,d,k,g),I=o.memoizedState,A!==d||ee!==I||Ft.current||Ir?(typeof te=="function"&&(wd(o,a,te,d),I=o.memoizedState),(A=Ir||jg(o,a,A,d,ee,I,H))?(ne||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(o.flags|=4194308)):(typeof k.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=I),k.props=d,k.state=I,k.context=H,d=A):(typeof k.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{k=o.stateNode,rg(n,o),A=o.memoizedProps,H=o.type===o.elementType?A:Rn(o.type,A),k.props=H,ne=o.pendingProps,ee=k.context,I=a.contextType,typeof I=="object"&&I!==null?I=hn(I):(I=Nt(a)?hi:Ct.current,I=so(o,I));var de=a.getDerivedStateFromProps;(te=typeof de=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(A!==ne||ee!==I)&&Og(o,k,d,I),Ir=!1,ee=o.memoizedState,k.state=ee,cl(o,d,k,g);var he=o.memoizedState;A!==ne||ee!==he||Ft.current||Ir?(typeof de=="function"&&(wd(o,a,de,d),he=o.memoizedState),(H=Ir||jg(o,a,H,d,ee,he,I)||!1)?(te||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(d,he,I),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(d,he,I)),typeof k.componentDidUpdate=="function"&&(o.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof k.componentDidUpdate!="function"||A===n.memoizedProps&&ee===n.memoizedState||(o.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&ee===n.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=he),k.props=d,k.state=he,k.context=I,d=H):(typeof k.componentDidUpdate!="function"||A===n.memoizedProps&&ee===n.memoizedState||(o.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&ee===n.memoizedState||(o.flags|=1024),d=!1)}return Cd(n,o,a,d,v,g)}function Cd(n,o,a,d,g,v){Bg(n,o);var k=(o.flags&128)!==0;if(!d&&!k)return g&&Ym(o,a,!1),fr(n,o,v);d=o.stateNode,sS.current=o;var A=k&&typeof a.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,n!==null&&k?(o.child=co(o,n.child,null,v),o.child=co(o,null,A,v)):Lt(n,o,A,v),o.memoizedState=d.state,g&&Ym(o,a,!0),o.child}function Wg(n){var o=n.stateNode;o.pendingContext?$m(n,o.pendingContext,o.pendingContext!==o.context):o.context&&$m(n,o.context,!1),ld(n,o.containerInfo)}function Ug(n,o,a,d,g){return uo(),td(g),o.flags|=256,Lt(n,o,a,d),o.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function Td(n){return{baseLanes:n,cachePool:null,transitions:null}}function $g(n,o,a){var d=o.pendingProps,g=Ye.current,v=!1,k=(o.flags&128)!==0,A;if((A=k)||(A=n!==null&&n.memoizedState===null?!1:(g&2)!==0),A?(v=!0,o.flags&=-129):(n===null||n.memoizedState!==null)&&(g|=1),Fe(Ye,g&1),n===null)return ed(o),n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((o.mode&1)===0?o.lanes=1:n.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(k=d.children,n=d.fallback,v?(d=o.mode,v=o.child,k={mode:"hidden",children:k},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=k):v=Al(k,d,0,null),n=ki(n,d,a,null),v.return=o,n.return=o,v.sibling=n,o.child=v,o.child.memoizedState=Td(a),o.memoizedState=Pd,n):jd(o,k));if(g=n.memoizedState,g!==null&&(A=g.dehydrated,A!==null))return aS(n,o,k,d,A,g,a);if(v){v=d.fallback,k=o.mode,g=n.child,A=g.sibling;var I={mode:"hidden",children:d.children};return(k&1)===0&&o.child!==g?(d=o.child,d.childLanes=0,d.pendingProps=I,o.deletions=null):(d=Ur(g,I),d.subtreeFlags=g.subtreeFlags&14680064),A!==null?v=Ur(A,v):(v=ki(v,k,a,null),v.flags|=2),v.return=o,d.return=o,d.sibling=v,o.child=d,d=v,v=o.child,k=n.child.memoizedState,k=k===null?Td(a):{baseLanes:k.baseLanes|a,cachePool:null,transitions:k.transitions},v.memoizedState=k,v.childLanes=n.childLanes&~a,o.memoizedState=Pd,d}return v=n.child,n=v.sibling,d=Ur(v,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=a),d.return=o,d.sibling=null,n!==null&&(a=o.deletions,a===null?(o.deletions=[n],o.flags|=16):a.push(n)),o.child=d,o.memoizedState=null,d}function jd(n,o){return o=Al({mode:"visible",children:o},n.mode,0,null),o.return=n,n.child=o}function vl(n,o,a,d){return d!==null&&td(d),co(o,n.child,null,a),n=jd(o,o.pendingProps.children),n.flags|=2,o.memoizedState=null,n}function aS(n,o,a,d,g,v,k){if(a)return o.flags&256?(o.flags&=-257,d=_d(Error(r(422))),vl(n,o,k,d)):o.memoizedState!==null?(o.child=n.child,o.flags|=128,null):(v=d.fallback,g=o.mode,d=Al({mode:"visible",children:d.children},g,0,null),v=ki(v,g,k,null),v.flags|=2,d.return=o,v.return=o,d.sibling=v,o.child=d,(o.mode&1)!==0&&co(o,n.child,null,k),o.child.memoizedState=Td(k),o.memoizedState=Pd,v);if((o.mode&1)===0)return vl(n,o,k,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var A=d.dgst;return d=A,v=Error(r(419)),d=_d(v,d,void 0),vl(n,o,k,d)}if(A=(k&n.childLanes)!==0,Bt||A){if(d=vt,d!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|k))!==0?0:g,g!==0&&g!==v.retryLane&&(v.retryLane=g,cr(n,g),Dn(d,n,g,-1))}return $d(),d=_d(Error(r(421))),vl(n,o,k,d)}return g.data==="$?"?(o.flags|=128,o.child=n.child,o=wS.bind(null,n),g._reactRetry=o,null):(n=v.treeContext,Jt=Rr(g.nextSibling),Zt=o,We=!0,An=null,n!==null&&(fn[pn++]=lr,fn[pn++]=ur,fn[pn++]=mi,lr=n.id,ur=n.overflow,mi=o),o=jd(o,d.children),o.flags|=4096,o)}function Hg(n,o,a){n.lanes|=o;var d=n.alternate;d!==null&&(d.lanes|=o),od(n.return,o,a)}function Ed(n,o,a,d,g){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:g}:(v.isBackwards=o,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=a,v.tailMode=g)}function Yg(n,o,a){var d=o.pendingProps,g=d.revealOrder,v=d.tail;if(Lt(n,o,d.children,a),d=Ye.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=o.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hg(n,a,o);else if(n.tag===19)Hg(n,a,o);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===o)break e;for(;n.sibling===null;){if(n.return===null||n.return===o)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Fe(Ye,d),(o.mode&1)===0)o.memoizedState=null;else switch(g){case"forwards":for(a=o.child,g=null;a!==null;)n=a.alternate,n!==null&&dl(n)===null&&(g=a),a=a.sibling;a=g,a===null?(g=o.child,o.child=null):(g=a.sibling,a.sibling=null),Ed(o,!1,g,a,v);break;case"backwards":for(a=null,g=o.child,o.child=null;g!==null;){if(n=g.alternate,n!==null&&dl(n)===null){o.child=g;break}n=g.sibling,g.sibling=a,a=g,g=n}Ed(o,!0,a,null,v);break;case"together":Ed(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function xl(n,o){(o.mode&1)===0&&n!==null&&(n.alternate=null,o.alternate=null,o.flags|=2)}function fr(n,o,a){if(n!==null&&(o.dependencies=n.dependencies),wi|=o.lanes,(a&o.childLanes)===0)return null;if(n!==null&&o.child!==n.child)throw Error(r(153));if(o.child!==null){for(n=o.child,a=Ur(n,n.pendingProps),o.child=a,a.return=o;n.sibling!==null;)n=n.sibling,a=a.sibling=Ur(n,n.pendingProps),a.return=o;a.sibling=null}return o.child}function lS(n,o,a){switch(o.tag){case 3:Wg(o),uo();break;case 5:sg(o);break;case 1:Nt(o.type)&&tl(o);break;case 4:ld(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,g=o.memoizedProps.value;Fe(al,d._currentValue),d._currentValue=g;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(Fe(Ye,Ye.current&1),o.flags|=128,null):(a&o.child.childLanes)!==0?$g(n,o,a):(Fe(Ye,Ye.current&1),n=fr(n,o,a),n!==null?n.sibling:null);Fe(Ye,Ye.current&1);break;case 19:if(d=(a&o.childLanes)!==0,(n.flags&128)!==0){if(d)return Yg(n,o,a);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Fe(Ye,Ye.current),d)break;return null;case 22:case 23:return o.lanes=0,Ng(n,o,a)}return fr(n,o,a)}var qg,Od,Gg,Xg;qg=function(n,o){for(var a=o.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Od=function(){},Gg=function(n,o,a,d){var g=n.memoizedProps;if(g!==d){n=o.stateNode,vi(Bn.current);var v=null;switch(a){case"input":g=gt(n,g),d=gt(n,d),v=[];break;case"select":g=re({},g,{value:void 0}),d=re({},d,{value:void 0}),v=[];break;case"textarea":g=or(n,g),d=or(n,d),v=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=Za)}cc(a,d);var k;a=null;for(H in g)if(!d.hasOwnProperty(H)&&g.hasOwnProperty(H)&&g[H]!=null)if(H==="style"){var A=g[H];for(k in A)A.hasOwnProperty(k)&&(a||(a={}),a[k]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(s.hasOwnProperty(H)?v||(v=[]):(v=v||[]).push(H,null));for(H in d){var I=d[H];if(A=g!=null?g[H]:void 0,d.hasOwnProperty(H)&&I!==A&&(I!=null||A!=null))if(H==="style")if(A){for(k in A)!A.hasOwnProperty(k)||I&&I.hasOwnProperty(k)||(a||(a={}),a[k]="");for(k in I)I.hasOwnProperty(k)&&A[k]!==I[k]&&(a||(a={}),a[k]=I[k])}else a||(v||(v=[]),v.push(H,a)),a=I;else H==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,A=A?A.__html:void 0,I!=null&&A!==I&&(v=v||[]).push(H,I)):H==="children"?typeof I!="string"&&typeof I!="number"||(v=v||[]).push(H,""+I):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(s.hasOwnProperty(H)?(I!=null&&H==="onScroll"&&Ne("scroll",n),v||A===I||(v=[])):(v=v||[]).push(H,I))}a&&(v=v||[]).push("style",a);var H=v;(o.updateQueue=H)&&(o.flags|=4)}},Xg=function(n,o,a,d){a!==d&&(o.flags|=4)};function Cs(n,o){if(!We)switch(n.tailMode){case"hidden":o=n.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?o||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Tt(n){var o=n.alternate!==null&&n.alternate.child===n.child,a=0,d=0;if(o)for(var g=n.child;g!==null;)a|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)a|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=d,n.childLanes=a,o}function uS(n,o,a){var d=o.pendingProps;switch(Zc(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(o),null;case 1:return Nt(o.type)&&el(),Tt(o),null;case 3:return d=o.stateNode,ho(),Be(Ft),Be(Ct),dd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(ol(o)?o.flags|=4:n===null||n.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,An!==null&&(Vd(An),An=null))),Od(n,o),Tt(o),null;case 5:ud(o);var g=vi(ws.current);if(a=o.type,n!==null&&o.stateNode!=null)Gg(n,o,a,d,g),n.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(r(166));return Tt(o),null}if(n=vi(Bn.current),ol(o)){d=o.stateNode,a=o.type;var v=o.memoizedProps;switch(d[Nn]=o,d[ms]=v,n=(o.mode&1)!==0,a){case"dialog":Ne("cancel",d),Ne("close",d);break;case"iframe":case"object":case"embed":Ne("load",d);break;case"video":case"audio":for(g=0;g<fs.length;g++)Ne(fs[g],d);break;case"source":Ne("error",d);break;case"img":case"image":case"link":Ne("error",d),Ne("load",d);break;case"details":Ne("toggle",d);break;case"input":je(d,v),Ne("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},Ne("invalid",d);break;case"textarea":zt(d,v),Ne("invalid",d)}cc(a,v),g=null;for(var k in v)if(v.hasOwnProperty(k)){var A=v[k];k==="children"?typeof A=="string"?d.textContent!==A&&(v.suppressHydrationWarning!==!0&&Ka(d.textContent,A,n),g=["children",A]):typeof A=="number"&&d.textContent!==""+A&&(v.suppressHydrationWarning!==!0&&Ka(d.textContent,A,n),g=["children",""+A]):s.hasOwnProperty(k)&&A!=null&&k==="onScroll"&&Ne("scroll",d)}switch(a){case"input":_e(d),ot(d,v,!0);break;case"textarea":_e(d),Ve(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=Za)}d=g,o.updateQueue=d,d!==null&&(o.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Gi(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=k.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=k.createElement(a,{is:d.is}):(n=k.createElement(a),a==="select"&&(k=n,d.multiple?k.multiple=!0:d.size&&(k.size=d.size))):n=k.createElementNS(n,a),n[Nn]=o,n[ms]=d,qg(n,o,!1,!1),o.stateNode=n;e:{switch(k=dc(a,d),a){case"dialog":Ne("cancel",n),Ne("close",n),g=d;break;case"iframe":case"object":case"embed":Ne("load",n),g=d;break;case"video":case"audio":for(g=0;g<fs.length;g++)Ne(fs[g],n);g=d;break;case"source":Ne("error",n),g=d;break;case"img":case"image":case"link":Ne("error",n),Ne("load",n),g=d;break;case"details":Ne("toggle",n),g=d;break;case"input":je(n,d),g=gt(n,d),Ne("invalid",n);break;case"option":g=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},g=re({},d,{value:void 0}),Ne("invalid",n);break;case"textarea":zt(n,d),g=or(n,d),Ne("invalid",n);break;default:g=d}cc(a,g),A=g;for(v in A)if(A.hasOwnProperty(v)){var I=A[v];v==="style"?Fh(n,I):v==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&Ih(n,I)):v==="children"?typeof I=="string"?(a!=="textarea"||I!=="")&&qo(n,I):typeof I=="number"&&qo(n,""+I):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?I!=null&&v==="onScroll"&&Ne("scroll",n):I!=null&&C(n,v,I,k))}switch(a){case"input":_e(n),ot(n,d,!1);break;case"textarea":_e(n),Ve(n);break;case"option":d.value!=null&&n.setAttribute("value",""+q(d.value));break;case"select":n.multiple=!!d.multiple,v=d.value,v!=null?jn(n,!!d.multiple,v,!1):d.defaultValue!=null&&jn(n,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(n.onclick=Za)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Tt(o),null;case 6:if(n&&o.stateNode!=null)Xg(n,o,n.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(r(166));if(a=vi(ws.current),vi(Bn.current),ol(o)){if(d=o.stateNode,a=o.memoizedProps,d[Nn]=o,(v=d.nodeValue!==a)&&(n=Zt,n!==null))switch(n.tag){case 3:Ka(d.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ka(d.nodeValue,a,(n.mode&1)!==0)}v&&(o.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[Nn]=o,o.stateNode=d}return Tt(o),null;case 13:if(Be(Ye),d=o.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(We&&Jt!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Zm(),uo(),o.flags|=98560,v=!1;else if(v=ol(o),d!==null&&d.dehydrated!==null){if(n===null){if(!v)throw Error(r(318));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(r(317));v[Nn]=o}else uo(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Tt(o),v=!1}else An!==null&&(Vd(An),An=null),v=!0;if(!v)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=a,o):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(n===null||(Ye.current&1)!==0?mt===0&&(mt=3):$d())),o.updateQueue!==null&&(o.flags|=4),Tt(o),null);case 4:return ho(),Od(n,o),n===null&&ps(o.stateNode.containerInfo),Tt(o),null;case 10:return id(o.type._context),Tt(o),null;case 17:return Nt(o.type)&&el(),Tt(o),null;case 19:if(Be(Ye),v=o.memoizedState,v===null)return Tt(o),null;if(d=(o.flags&128)!==0,k=v.rendering,k===null)if(d)Cs(v,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=o.child;n!==null;){if(k=dl(n),k!==null){for(o.flags|=128,Cs(v,!1),d=k.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=a,a=o.child;a!==null;)v=a,n=d,v.flags&=14680066,k=v.alternate,k===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=k.childLanes,v.lanes=k.lanes,v.child=k.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=k.memoizedProps,v.memoizedState=k.memoizedState,v.updateQueue=k.updateQueue,v.type=k.type,n=k.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Fe(Ye,Ye.current&1|2),o.child}n=n.sibling}v.tail!==null&&nt()>vo&&(o.flags|=128,d=!0,Cs(v,!1),o.lanes=4194304)}else{if(!d)if(n=dl(k),n!==null){if(o.flags|=128,d=!0,a=n.updateQueue,a!==null&&(o.updateQueue=a,o.flags|=4),Cs(v,!0),v.tail===null&&v.tailMode==="hidden"&&!k.alternate&&!We)return Tt(o),null}else 2*nt()-v.renderingStartTime>vo&&a!==1073741824&&(o.flags|=128,d=!0,Cs(v,!1),o.lanes=4194304);v.isBackwards?(k.sibling=o.child,o.child=k):(a=v.last,a!==null?a.sibling=k:o.child=k,v.last=k)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=nt(),o.sibling=null,a=Ye.current,Fe(Ye,d?a&1|2:a&1),o):(Tt(o),null);case 22:case 23:return Ud(),d=o.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(en&1073741824)!==0&&(Tt(o),o.subtreeFlags&6&&(o.flags|=8192)):Tt(o),null;case 24:return null;case 25:return null}throw Error(r(156,o.tag))}function cS(n,o){switch(Zc(o),o.tag){case 1:return Nt(o.type)&&el(),n=o.flags,n&65536?(o.flags=n&-65537|128,o):null;case 3:return ho(),Be(Ft),Be(Ct),dd(),n=o.flags,(n&65536)!==0&&(n&128)===0?(o.flags=n&-65537|128,o):null;case 5:return ud(o),null;case 13:if(Be(Ye),n=o.memoizedState,n!==null&&n.dehydrated!==null){if(o.alternate===null)throw Error(r(340));uo()}return n=o.flags,n&65536?(o.flags=n&-65537|128,o):null;case 19:return Be(Ye),null;case 4:return ho(),null;case 10:return id(o.type._context),null;case 22:case 23:return Ud(),null;case 24:return null;default:return null}}var wl=!1,jt=!1,dS=typeof WeakSet=="function"?WeakSet:Set,pe=null;function go(n,o){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){Je(n,o,d)}else a.current=null}function Ad(n,o,a){try{a()}catch(d){Je(n,o,d)}}var Qg=!1;function fS(n,o){if(Uc=Ba,n=jm(),Dc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var g=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var k=0,A=-1,I=-1,H=0,te=0,ne=n,ee=null;t:for(;;){for(var de;ne!==a||g!==0&&ne.nodeType!==3||(A=k+g),ne!==v||d!==0&&ne.nodeType!==3||(I=k+d),ne.nodeType===3&&(k+=ne.nodeValue.length),(de=ne.firstChild)!==null;)ee=ne,ne=de;for(;;){if(ne===n)break t;if(ee===a&&++H===g&&(A=k),ee===v&&++te===d&&(I=k),(de=ne.nextSibling)!==null)break;ne=ee,ee=ne.parentNode}ne=de}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for($c={focusedElem:n,selectionRange:a},Ba=!1,pe=o;pe!==null;)if(o=pe,n=o.child,(o.subtreeFlags&1028)!==0&&n!==null)n.return=o,pe=n;else for(;pe!==null;){o=pe;try{var he=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var ge=he.memoizedProps,rt=he.memoizedState,U=o.stateNode,N=U.getSnapshotBeforeUpdate(o.elementType===o.type?ge:Rn(o.type,ge),rt);U.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var $=o.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(oe){Je(o,o.return,oe)}if(n=o.sibling,n!==null){n.return=o.return,pe=n;break}pe=o.return}return he=Qg,Qg=!1,he}function Ps(n,o,a){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&n)===n){var v=g.destroy;g.destroy=void 0,v!==void 0&&Ad(o,a,v)}g=g.next}while(g!==d)}}function bl(n,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&n)===n){var d=a.create;a.destroy=d()}a=a.next}while(a!==o)}}function Rd(n){var o=n.ref;if(o!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof o=="function"?o(n):o.current=n}}function Kg(n){var o=n.alternate;o!==null&&(n.alternate=null,Kg(o)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(o=n.stateNode,o!==null&&(delete o[Nn],delete o[ms],delete o[Gc],delete o[G_],delete o[X_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Zg(n){return n.tag===5||n.tag===3||n.tag===4}function Jg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ld(n,o,a){var d=n.tag;if(d===5||d===6)n=n.stateNode,o?a.nodeType===8?a.parentNode.insertBefore(n,o):a.insertBefore(n,o):(a.nodeType===8?(o=a.parentNode,o.insertBefore(n,a)):(o=a,o.appendChild(n)),a=a._reactRootContainer,a!=null||o.onclick!==null||(o.onclick=Za));else if(d!==4&&(n=n.child,n!==null))for(Ld(n,o,a),n=n.sibling;n!==null;)Ld(n,o,a),n=n.sibling}function Md(n,o,a){var d=n.tag;if(d===5||d===6)n=n.stateNode,o?a.insertBefore(n,o):a.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Md(n,o,a),n=n.sibling;n!==null;)Md(n,o,a),n=n.sibling}var bt=null,Ln=!1;function Fr(n,o,a){for(a=a.child;a!==null;)e0(n,o,a),a=a.sibling}function e0(n,o,a){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(Ma,a)}catch{}switch(a.tag){case 5:jt||go(a,o);case 6:var d=bt,g=Ln;bt=null,Fr(n,o,a),bt=d,Ln=g,bt!==null&&(Ln?(n=bt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):bt.removeChild(a.stateNode));break;case 18:bt!==null&&(Ln?(n=bt,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),is(n)):qc(bt,a.stateNode));break;case 4:d=bt,g=Ln,bt=a.stateNode.containerInfo,Ln=!0,Fr(n,o,a),bt=d,Ln=g;break;case 0:case 11:case 14:case 15:if(!jt&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var v=g,k=v.destroy;v=v.tag,k!==void 0&&((v&2)!==0||(v&4)!==0)&&Ad(a,o,k),g=g.next}while(g!==d)}Fr(n,o,a);break;case 1:if(!jt&&(go(a,o),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(A){Je(a,o,A)}Fr(n,o,a);break;case 21:Fr(n,o,a);break;case 22:a.mode&1?(jt=(d=jt)||a.memoizedState!==null,Fr(n,o,a),jt=d):Fr(n,o,a);break;default:Fr(n,o,a)}}function t0(n){var o=n.updateQueue;if(o!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new dS),o.forEach(function(d){var g=bS.bind(null,n,d);a.has(d)||(a.add(d),d.then(g,g))})}}function Mn(n,o){var a=o.deletions;if(a!==null)for(var d=0;d<a.length;d++){var g=a[d];try{var v=n,k=o,A=k;e:for(;A!==null;){switch(A.tag){case 5:bt=A.stateNode,Ln=!1;break e;case 3:bt=A.stateNode.containerInfo,Ln=!0;break e;case 4:bt=A.stateNode.containerInfo,Ln=!0;break e}A=A.return}if(bt===null)throw Error(r(160));e0(v,k,g),bt=null,Ln=!1;var I=g.alternate;I!==null&&(I.return=null),g.return=null}catch(H){Je(g,o,H)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)n0(o,n),o=o.sibling}function n0(n,o){var a=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(o,n),Wn(n),d&4){try{Ps(3,n,n.return),bl(3,n)}catch(ge){Je(n,n.return,ge)}try{Ps(5,n,n.return)}catch(ge){Je(n,n.return,ge)}}break;case 1:Mn(o,n),Wn(n),d&512&&a!==null&&go(a,a.return);break;case 5:if(Mn(o,n),Wn(n),d&512&&a!==null&&go(a,a.return),n.flags&32){var g=n.stateNode;try{qo(g,"")}catch(ge){Je(n,n.return,ge)}}if(d&4&&(g=n.stateNode,g!=null)){var v=n.memoizedProps,k=a!==null?a.memoizedProps:v,A=n.type,I=n.updateQueue;if(n.updateQueue=null,I!==null)try{A==="input"&&v.type==="radio"&&v.name!=null&&pt(g,v),dc(A,k);var H=dc(A,v);for(k=0;k<I.length;k+=2){var te=I[k],ne=I[k+1];te==="style"?Fh(g,ne):te==="dangerouslySetInnerHTML"?Ih(g,ne):te==="children"?qo(g,ne):C(g,te,ne,H)}switch(A){case"input":Oe(g,v);break;case"textarea":ke(g,v);break;case"select":var ee=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!v.multiple;var de=v.value;de!=null?jn(g,!!v.multiple,de,!1):ee!==!!v.multiple&&(v.defaultValue!=null?jn(g,!!v.multiple,v.defaultValue,!0):jn(g,!!v.multiple,v.multiple?[]:"",!1))}g[ms]=v}catch(ge){Je(n,n.return,ge)}}break;case 6:if(Mn(o,n),Wn(n),d&4){if(n.stateNode===null)throw Error(r(162));g=n.stateNode,v=n.memoizedProps;try{g.nodeValue=v}catch(ge){Je(n,n.return,ge)}}break;case 3:if(Mn(o,n),Wn(n),d&4&&a!==null&&a.memoizedState.isDehydrated)try{is(o.containerInfo)}catch(ge){Je(n,n.return,ge)}break;case 4:Mn(o,n),Wn(n);break;case 13:Mn(o,n),Wn(n),g=n.child,g.flags&8192&&(v=g.memoizedState!==null,g.stateNode.isHidden=v,!v||g.alternate!==null&&g.alternate.memoizedState!==null||(zd=nt())),d&4&&t0(n);break;case 22:if(te=a!==null&&a.memoizedState!==null,n.mode&1?(jt=(H=jt)||te,Mn(o,n),jt=H):Mn(o,n),Wn(n),d&8192){if(H=n.memoizedState!==null,(n.stateNode.isHidden=H)&&!te&&(n.mode&1)!==0)for(pe=n,te=n.child;te!==null;){for(ne=pe=te;pe!==null;){switch(ee=pe,de=ee.child,ee.tag){case 0:case 11:case 14:case 15:Ps(4,ee,ee.return);break;case 1:go(ee,ee.return);var he=ee.stateNode;if(typeof he.componentWillUnmount=="function"){d=ee,a=ee.return;try{o=d,he.props=o.memoizedProps,he.state=o.memoizedState,he.componentWillUnmount()}catch(ge){Je(d,a,ge)}}break;case 5:go(ee,ee.return);break;case 22:if(ee.memoizedState!==null){o0(ne);continue}}de!==null?(de.return=ee,pe=de):o0(ne)}te=te.sibling}e:for(te=null,ne=n;;){if(ne.tag===5){if(te===null){te=ne;try{g=ne.stateNode,H?(v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(A=ne.stateNode,I=ne.memoizedProps.style,k=I!=null&&I.hasOwnProperty("display")?I.display:null,A.style.display=zh("display",k))}catch(ge){Je(n,n.return,ge)}}}else if(ne.tag===6){if(te===null)try{ne.stateNode.nodeValue=H?"":ne.memoizedProps}catch(ge){Je(n,n.return,ge)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===n)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===n)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===n)break e;te===ne&&(te=null),ne=ne.return}te===ne&&(te=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:Mn(o,n),Wn(n),d&4&&t0(n);break;case 21:break;default:Mn(o,n),Wn(n)}}function Wn(n){var o=n.flags;if(o&2){try{e:{for(var a=n.return;a!==null;){if(Zg(a)){var d=a;break e}a=a.return}throw Error(r(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(qo(g,""),d.flags&=-33);var v=Jg(n);Md(n,v,g);break;case 3:case 4:var k=d.stateNode.containerInfo,A=Jg(n);Ld(n,A,k);break;default:throw Error(r(161))}}catch(I){Je(n,n.return,I)}n.flags&=-3}o&4096&&(n.flags&=-4097)}function pS(n,o,a){pe=n,r0(n)}function r0(n,o,a){for(var d=(n.mode&1)!==0;pe!==null;){var g=pe,v=g.child;if(g.tag===22&&d){var k=g.memoizedState!==null||wl;if(!k){var A=g.alternate,I=A!==null&&A.memoizedState!==null||jt;A=wl;var H=jt;if(wl=k,(jt=I)&&!H)for(pe=g;pe!==null;)k=pe,I=k.child,k.tag===22&&k.memoizedState!==null?s0(g):I!==null?(I.return=k,pe=I):s0(g);for(;v!==null;)pe=v,r0(v),v=v.sibling;pe=g,wl=A,jt=H}i0(n)}else(g.subtreeFlags&8772)!==0&&v!==null?(v.return=g,pe=v):i0(n)}}function i0(n){for(;pe!==null;){var o=pe;if((o.flags&8772)!==0){var a=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:jt||bl(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!jt)if(a===null)d.componentDidMount();else{var g=o.elementType===o.type?a.memoizedProps:Rn(o.type,a.memoizedProps);d.componentDidUpdate(g,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=o.updateQueue;v!==null&&og(o,v,d);break;case 3:var k=o.updateQueue;if(k!==null){if(a=null,o.child!==null)switch(o.child.tag){case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}og(o,k,a)}break;case 5:var A=o.stateNode;if(a===null&&o.flags&4){a=A;var I=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&a.focus();break;case"img":I.src&&(a.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var H=o.alternate;if(H!==null){var te=H.memoizedState;if(te!==null){var ne=te.dehydrated;ne!==null&&is(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}jt||o.flags&512&&Rd(o)}catch(ee){Je(o,o.return,ee)}}if(o===n){pe=null;break}if(a=o.sibling,a!==null){a.return=o.return,pe=a;break}pe=o.return}}function o0(n){for(;pe!==null;){var o=pe;if(o===n){pe=null;break}var a=o.sibling;if(a!==null){a.return=o.return,pe=a;break}pe=o.return}}function s0(n){for(;pe!==null;){var o=pe;try{switch(o.tag){case 0:case 11:case 15:var a=o.return;try{bl(4,o)}catch(I){Je(o,a,I)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var g=o.return;try{d.componentDidMount()}catch(I){Je(o,g,I)}}var v=o.return;try{Rd(o)}catch(I){Je(o,v,I)}break;case 5:var k=o.return;try{Rd(o)}catch(I){Je(o,k,I)}}}catch(I){Je(o,o.return,I)}if(o===n){pe=null;break}var A=o.sibling;if(A!==null){A.return=o.return,pe=A;break}pe=o.return}}var hS=Math.ceil,_l=E.ReactCurrentDispatcher,Dd=E.ReactCurrentOwner,gn=E.ReactCurrentBatchConfig,Ae=0,vt=null,st=null,_t=0,en=0,yo=Lr(0),mt=0,Ts=null,wi=0,Sl=0,Id=0,js=null,Vt=null,zd=0,vo=1/0,pr=null,kl=!1,Fd=null,Nr=null,Cl=!1,Br=null,Pl=0,Es=0,Nd=null,Tl=-1,jl=0;function Mt(){return(Ae&6)!==0?nt():Tl!==-1?Tl:Tl=nt()}function Vr(n){return(n.mode&1)===0?1:(Ae&2)!==0&&_t!==0?_t&-_t:K_.transition!==null?(jl===0&&(jl=Jh()),jl):(n=De,n!==0||(n=window.event,n=n===void 0?16:lm(n.type)),n)}function Dn(n,o,a,d){if(50<Es)throw Es=0,Nd=null,Error(r(185));Jo(n,a,d),((Ae&2)===0||n!==vt)&&(n===vt&&((Ae&2)===0&&(Sl|=a),mt===4&&Wr(n,_t)),Wt(n,d),a===1&&Ae===0&&(o.mode&1)===0&&(vo=nt()+500,nl&&Dr()))}function Wt(n,o){var a=n.callbackNode;Kb(n,o);var d=za(n,n===vt?_t:0);if(d===0)a!==null&&Qh(a),n.callbackNode=null,n.callbackPriority=0;else if(o=d&-d,n.callbackPriority!==o){if(a!=null&&Qh(a),o===1)n.tag===0?Q_(l0.bind(null,n)):qm(l0.bind(null,n)),Y_(function(){(Ae&6)===0&&Dr()}),a=null;else{switch(em(d)){case 1:a=vc;break;case 4:a=Kh;break;case 16:a=La;break;case 536870912:a=Zh;break;default:a=La}a=g0(a,a0.bind(null,n))}n.callbackPriority=o,n.callbackNode=a}}function a0(n,o){if(Tl=-1,jl=0,(Ae&6)!==0)throw Error(r(327));var a=n.callbackNode;if(xo()&&n.callbackNode!==a)return null;var d=za(n,n===vt?_t:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||o)o=El(n,d);else{o=d;var g=Ae;Ae|=2;var v=c0();(vt!==n||_t!==o)&&(pr=null,vo=nt()+500,_i(n,o));do try{yS();break}catch(A){u0(n,A)}while(!0);rd(),_l.current=v,Ae=g,st!==null?o=0:(vt=null,_t=0,o=mt)}if(o!==0){if(o===2&&(g=xc(n),g!==0&&(d=g,o=Bd(n,g))),o===1)throw a=Ts,_i(n,0),Wr(n,d),Wt(n,nt()),a;if(o===6)Wr(n,d);else{if(g=n.current.alternate,(d&30)===0&&!mS(g)&&(o=El(n,d),o===2&&(v=xc(n),v!==0&&(d=v,o=Bd(n,v))),o===1))throw a=Ts,_i(n,0),Wr(n,d),Wt(n,nt()),a;switch(n.finishedWork=g,n.finishedLanes=d,o){case 0:case 1:throw Error(r(345));case 2:Si(n,Vt,pr);break;case 3:if(Wr(n,d),(d&130023424)===d&&(o=zd+500-nt(),10<o)){if(za(n,0)!==0)break;if(g=n.suspendedLanes,(g&d)!==d){Mt(),n.pingedLanes|=n.suspendedLanes&g;break}n.timeoutHandle=Yc(Si.bind(null,n,Vt,pr),o);break}Si(n,Vt,pr);break;case 4:if(Wr(n,d),(d&4194240)===d)break;for(o=n.eventTimes,g=-1;0<d;){var k=31-En(d);v=1<<k,k=o[k],k>g&&(g=k),d&=~v}if(d=g,d=nt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*hS(d/1960))-d,10<d){n.timeoutHandle=Yc(Si.bind(null,n,Vt,pr),d);break}Si(n,Vt,pr);break;case 5:Si(n,Vt,pr);break;default:throw Error(r(329))}}}return Wt(n,nt()),n.callbackNode===a?a0.bind(null,n):null}function Bd(n,o){var a=js;return n.current.memoizedState.isDehydrated&&(_i(n,o).flags|=256),n=El(n,o),n!==2&&(o=Vt,Vt=a,o!==null&&Vd(o)),n}function Vd(n){Vt===null?Vt=n:Vt.push.apply(Vt,n)}function mS(n){for(var o=n;;){if(o.flags&16384){var a=o.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var g=a[d],v=g.getSnapshot;g=g.value;try{if(!On(v(),g))return!1}catch{return!1}}}if(a=o.child,o.subtreeFlags&16384&&a!==null)a.return=o,o=a;else{if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Wr(n,o){for(o&=~Id,o&=~Sl,n.suspendedLanes|=o,n.pingedLanes&=~o,n=n.expirationTimes;0<o;){var a=31-En(o),d=1<<a;n[a]=-1,o&=~d}}function l0(n){if((Ae&6)!==0)throw Error(r(327));xo();var o=za(n,0);if((o&1)===0)return Wt(n,nt()),null;var a=El(n,o);if(n.tag!==0&&a===2){var d=xc(n);d!==0&&(o=d,a=Bd(n,d))}if(a===1)throw a=Ts,_i(n,0),Wr(n,o),Wt(n,nt()),a;if(a===6)throw Error(r(345));return n.finishedWork=n.current.alternate,n.finishedLanes=o,Si(n,Vt,pr),Wt(n,nt()),null}function Wd(n,o){var a=Ae;Ae|=1;try{return n(o)}finally{Ae=a,Ae===0&&(vo=nt()+500,nl&&Dr())}}function bi(n){Br!==null&&Br.tag===0&&(Ae&6)===0&&xo();var o=Ae;Ae|=1;var a=gn.transition,d=De;try{if(gn.transition=null,De=1,n)return n()}finally{De=d,gn.transition=a,Ae=o,(Ae&6)===0&&Dr()}}function Ud(){en=yo.current,Be(yo)}function _i(n,o){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,H_(a)),st!==null)for(a=st.return;a!==null;){var d=a;switch(Zc(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&el();break;case 3:ho(),Be(Ft),Be(Ct),dd();break;case 5:ud(d);break;case 4:ho();break;case 13:Be(Ye);break;case 19:Be(Ye);break;case 10:id(d.type._context);break;case 22:case 23:Ud()}a=a.return}if(vt=n,st=n=Ur(n.current,null),_t=en=o,mt=0,Ts=null,Id=Sl=wi=0,Vt=js=null,yi!==null){for(o=0;o<yi.length;o++)if(a=yi[o],d=a.interleaved,d!==null){a.interleaved=null;var g=d.next,v=a.pending;if(v!==null){var k=v.next;v.next=g,d.next=k}a.pending=d}yi=null}return n}function u0(n,o){do{var a=st;try{if(rd(),fl.current=gl,pl){for(var d=qe.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}pl=!1}if(xi=0,yt=ht=qe=null,bs=!1,_s=0,Dd.current=null,a===null||a.return===null){mt=1,Ts=o,st=null;break}e:{var v=n,k=a.return,A=a,I=o;if(o=_t,A.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var H=I,te=A,ne=te.tag;if((te.mode&1)===0&&(ne===0||ne===11||ne===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var de=Mg(k);if(de!==null){de.flags&=-257,Dg(de,k,A,v,o),de.mode&1&&Lg(v,H,o),o=de,I=H;var he=o.updateQueue;if(he===null){var ge=new Set;ge.add(I),o.updateQueue=ge}else he.add(I);break e}else{if((o&1)===0){Lg(v,H,o),$d();break e}I=Error(r(426))}}else if(We&&A.mode&1){var rt=Mg(k);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),Dg(rt,k,A,v,o),td(mo(I,A));break e}}v=I=mo(I,A),mt!==4&&(mt=2),js===null?js=[v]:js.push(v),v=k;do{switch(v.tag){case 3:v.flags|=65536,o&=-o,v.lanes|=o;var U=Ag(v,I,o);ig(v,U);break e;case 1:A=I;var N=v.type,$=v.stateNode;if((v.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Nr===null||!Nr.has($)))){v.flags|=65536,o&=-o,v.lanes|=o;var oe=Rg(v,A,o);ig(v,oe);break e}}v=v.return}while(v!==null)}f0(a)}catch(ye){o=ye,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function c0(){var n=_l.current;return _l.current=gl,n===null?gl:n}function $d(){(mt===0||mt===3||mt===2)&&(mt=4),vt===null||(wi&268435455)===0&&(Sl&268435455)===0||Wr(vt,_t)}function El(n,o){var a=Ae;Ae|=2;var d=c0();(vt!==n||_t!==o)&&(pr=null,_i(n,o));do try{gS();break}catch(g){u0(n,g)}while(!0);if(rd(),Ae=a,_l.current=d,st!==null)throw Error(r(261));return vt=null,_t=0,mt}function gS(){for(;st!==null;)d0(st)}function yS(){for(;st!==null&&!Wb();)d0(st)}function d0(n){var o=m0(n.alternate,n,en);n.memoizedProps=n.pendingProps,o===null?f0(n):st=o,Dd.current=null}function f0(n){var o=n;do{var a=o.alternate;if(n=o.return,(o.flags&32768)===0){if(a=uS(a,o,en),a!==null){st=a;return}}else{if(a=cS(a,o),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,st=null;return}}if(o=o.sibling,o!==null){st=o;return}st=o=n}while(o!==null);mt===0&&(mt=5)}function Si(n,o,a){var d=De,g=gn.transition;try{gn.transition=null,De=1,vS(n,o,a,d)}finally{gn.transition=g,De=d}return null}function vS(n,o,a,d){do xo();while(Br!==null);if((Ae&6)!==0)throw Error(r(327));a=n.finishedWork;var g=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(r(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(Zb(n,v),n===vt&&(st=vt=null,_t=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Cl||(Cl=!0,g0(La,function(){return xo(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=gn.transition,gn.transition=null;var k=De;De=1;var A=Ae;Ae|=4,Dd.current=null,fS(n,a),n0(a,n),F_($c),Ba=!!Uc,$c=Uc=null,n.current=a,pS(a),Ub(),Ae=A,De=k,gn.transition=v}else n.current=a;if(Cl&&(Cl=!1,Br=n,Pl=g),v=n.pendingLanes,v===0&&(Nr=null),Yb(a.stateNode),Wt(n,nt()),o!==null)for(d=n.onRecoverableError,a=0;a<o.length;a++)g=o[a],d(g.value,{componentStack:g.stack,digest:g.digest});if(kl)throw kl=!1,n=Fd,Fd=null,n;return(Pl&1)!==0&&n.tag!==0&&xo(),v=n.pendingLanes,(v&1)!==0?n===Nd?Es++:(Es=0,Nd=n):Es=0,Dr(),null}function xo(){if(Br!==null){var n=em(Pl),o=gn.transition,a=De;try{if(gn.transition=null,De=16>n?16:n,Br===null)var d=!1;else{if(n=Br,Br=null,Pl=0,(Ae&6)!==0)throw Error(r(331));var g=Ae;for(Ae|=4,pe=n.current;pe!==null;){var v=pe,k=v.child;if((pe.flags&16)!==0){var A=v.deletions;if(A!==null){for(var I=0;I<A.length;I++){var H=A[I];for(pe=H;pe!==null;){var te=pe;switch(te.tag){case 0:case 11:case 15:Ps(8,te,v)}var ne=te.child;if(ne!==null)ne.return=te,pe=ne;else for(;pe!==null;){te=pe;var ee=te.sibling,de=te.return;if(Kg(te),te===H){pe=null;break}if(ee!==null){ee.return=de,pe=ee;break}pe=de}}}var he=v.alternate;if(he!==null){var ge=he.child;if(ge!==null){he.child=null;do{var rt=ge.sibling;ge.sibling=null,ge=rt}while(ge!==null)}}pe=v}}if((v.subtreeFlags&2064)!==0&&k!==null)k.return=v,pe=k;else e:for(;pe!==null;){if(v=pe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Ps(9,v,v.return)}var U=v.sibling;if(U!==null){U.return=v.return,pe=U;break e}pe=v.return}}var N=n.current;for(pe=N;pe!==null;){k=pe;var $=k.child;if((k.subtreeFlags&2064)!==0&&$!==null)$.return=k,pe=$;else e:for(k=N;pe!==null;){if(A=pe,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:bl(9,A)}}catch(ye){Je(A,A.return,ye)}if(A===k){pe=null;break e}var oe=A.sibling;if(oe!==null){oe.return=A.return,pe=oe;break e}pe=A.return}}if(Ae=g,Dr(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(Ma,n)}catch{}d=!0}return d}finally{De=a,gn.transition=o}}return!1}function p0(n,o,a){o=mo(a,o),o=Ag(n,o,1),n=zr(n,o,1),o=Mt(),n!==null&&(Jo(n,1,o),Wt(n,o))}function Je(n,o,a){if(n.tag===3)p0(n,n,a);else for(;o!==null;){if(o.tag===3){p0(o,n,a);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Nr===null||!Nr.has(d))){n=mo(a,n),n=Rg(o,n,1),o=zr(o,n,1),n=Mt(),o!==null&&(Jo(o,1,n),Wt(o,n));break}}o=o.return}}function xS(n,o,a){var d=n.pingCache;d!==null&&d.delete(o),o=Mt(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(_t&a)===a&&(mt===4||mt===3&&(_t&130023424)===_t&&500>nt()-zd?_i(n,0):Id|=a),Wt(n,o)}function h0(n,o){o===0&&((n.mode&1)===0?o=1:(o=Ia,Ia<<=1,(Ia&130023424)===0&&(Ia=4194304)));var a=Mt();n=cr(n,o),n!==null&&(Jo(n,o,a),Wt(n,a))}function wS(n){var o=n.memoizedState,a=0;o!==null&&(a=o.retryLane),h0(n,a)}function bS(n,o){var a=0;switch(n.tag){case 13:var d=n.stateNode,g=n.memoizedState;g!==null&&(a=g.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(r(314))}d!==null&&d.delete(o),h0(n,a)}var m0;m0=function(n,o,a){if(n!==null)if(n.memoizedProps!==o.pendingProps||Ft.current)Bt=!0;else{if((n.lanes&a)===0&&(o.flags&128)===0)return Bt=!1,lS(n,o,a);Bt=(n.flags&131072)!==0}else Bt=!1,We&&(o.flags&1048576)!==0&&Gm(o,il,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;xl(n,o),n=o.pendingProps;var g=so(o,Ct.current);po(o,a),g=hd(null,o,d,n,g,a);var v=md();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Nt(d)?(v=!0,tl(o)):v=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,ad(o),g.updater=yl,o.stateNode=g,g._reactInternals=o,bd(o,d,n,a),o=Cd(null,o,d,!0,v,a)):(o.tag=0,We&&v&&Kc(o),Lt(null,o,g,a),o=o.child),o;case 16:d=o.elementType;e:{switch(xl(n,o),n=o.pendingProps,g=d._init,d=g(d._payload),o.type=d,g=o.tag=SS(d),n=Rn(d,n),g){case 0:o=kd(null,o,d,n,a);break e;case 1:o=Vg(null,o,d,n,a);break e;case 11:o=Ig(null,o,d,n,a);break e;case 14:o=zg(null,o,d,Rn(d.type,n),a);break e}throw Error(r(306,d,""))}return o;case 0:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:Rn(d,g),kd(n,o,d,g,a);case 1:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:Rn(d,g),Vg(n,o,d,g,a);case 3:e:{if(Wg(o),n===null)throw Error(r(387));d=o.pendingProps,v=o.memoizedState,g=v.element,rg(n,o),cl(o,d,null,a);var k=o.memoizedState;if(d=k.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){g=mo(Error(r(423)),o),o=Ug(n,o,d,a,g);break e}else if(d!==g){g=mo(Error(r(424)),o),o=Ug(n,o,d,a,g);break e}else for(Jt=Rr(o.stateNode.containerInfo.firstChild),Zt=o,We=!0,An=null,a=tg(o,null,d,a),o.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),d===g){o=fr(n,o,a);break e}Lt(n,o,d,a)}o=o.child}return o;case 5:return sg(o),n===null&&ed(o),d=o.type,g=o.pendingProps,v=n!==null?n.memoizedProps:null,k=g.children,Hc(d,g)?k=null:v!==null&&Hc(d,v)&&(o.flags|=32),Bg(n,o),Lt(n,o,k,a),o.child;case 6:return n===null&&ed(o),null;case 13:return $g(n,o,a);case 4:return ld(o,o.stateNode.containerInfo),d=o.pendingProps,n===null?o.child=co(o,null,d,a):Lt(n,o,d,a),o.child;case 11:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:Rn(d,g),Ig(n,o,d,g,a);case 7:return Lt(n,o,o.pendingProps,a),o.child;case 8:return Lt(n,o,o.pendingProps.children,a),o.child;case 12:return Lt(n,o,o.pendingProps.children,a),o.child;case 10:e:{if(d=o.type._context,g=o.pendingProps,v=o.memoizedProps,k=g.value,Fe(al,d._currentValue),d._currentValue=k,v!==null)if(On(v.value,k)){if(v.children===g.children&&!Ft.current){o=fr(n,o,a);break e}}else for(v=o.child,v!==null&&(v.return=o);v!==null;){var A=v.dependencies;if(A!==null){k=v.child;for(var I=A.firstContext;I!==null;){if(I.context===d){if(v.tag===1){I=dr(-1,a&-a),I.tag=2;var H=v.updateQueue;if(H!==null){H=H.shared;var te=H.pending;te===null?I.next=I:(I.next=te.next,te.next=I),H.pending=I}}v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),od(v.return,a,o),A.lanes|=a;break}I=I.next}}else if(v.tag===10)k=v.type===o.type?null:v.child;else if(v.tag===18){if(k=v.return,k===null)throw Error(r(341));k.lanes|=a,A=k.alternate,A!==null&&(A.lanes|=a),od(k,a,o),k=v.sibling}else k=v.child;if(k!==null)k.return=v;else for(k=v;k!==null;){if(k===o){k=null;break}if(v=k.sibling,v!==null){v.return=k.return,k=v;break}k=k.return}v=k}Lt(n,o,g.children,a),o=o.child}return o;case 9:return g=o.type,d=o.pendingProps.children,po(o,a),g=hn(g),d=d(g),o.flags|=1,Lt(n,o,d,a),o.child;case 14:return d=o.type,g=Rn(d,o.pendingProps),g=Rn(d.type,g),zg(n,o,d,g,a);case 15:return Fg(n,o,o.type,o.pendingProps,a);case 17:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:Rn(d,g),xl(n,o),o.tag=1,Nt(d)?(n=!0,tl(o)):n=!1,po(o,a),Eg(o,d,g),bd(o,d,g,a),Cd(null,o,d,!0,n,a);case 19:return Yg(n,o,a);case 22:return Ng(n,o,a)}throw Error(r(156,o.tag))};function g0(n,o){return Xh(n,o)}function _S(n,o,a,d){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,o,a,d){return new _S(n,o,a,d)}function Hd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function SS(n){if(typeof n=="function")return Hd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z)return 11;if(n===ae)return 14}return 2}function Ur(n,o){var a=n.alternate;return a===null?(a=yn(n.tag,o,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=o,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,o=n.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ol(n,o,a,d,g,v){var k=2;if(d=n,typeof n=="function")Hd(n)&&(k=1);else if(typeof n=="string")k=5;else e:switch(n){case D:return ki(a.children,g,v,o);case F:k=8,g|=8;break;case B:return n=yn(12,a,o,g|2),n.elementType=B,n.lanes=v,n;case Z:return n=yn(13,a,o,g),n.elementType=Z,n.lanes=v,n;case X:return n=yn(19,a,o,g),n.elementType=X,n.lanes=v,n;case se:return Al(a,g,v,o);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:k=10;break e;case G:k=9;break e;case z:k=11;break e;case ae:k=14;break e;case ce:k=16,d=null;break e}throw Error(r(130,n==null?n:typeof n,""))}return o=yn(k,a,o,g),o.elementType=n,o.type=d,o.lanes=v,o}function ki(n,o,a,d){return n=yn(7,n,d,o),n.lanes=a,n}function Al(n,o,a,d){return n=yn(22,n,d,o),n.elementType=se,n.lanes=a,n.stateNode={isHidden:!1},n}function Yd(n,o,a){return n=yn(6,n,null,o),n.lanes=a,n}function qd(n,o,a){return o=yn(4,n.children!==null?n.children:[],n.key,o),o.lanes=a,o.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},o}function kS(n,o,a,d,g){this.tag=o,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Gd(n,o,a,d,g,v,k,A,I){return n=new kS(n,o,a,A,I),o===1?(o=1,v===!0&&(o|=8)):o=0,v=yn(3,null,null,o),n.current=v,v.stateNode=n,v.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(v),n}function CS(n,o,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:d==null?null:""+d,children:n,containerInfo:o,implementation:a}}function y0(n){if(!n)return Mr;n=n._reactInternals;e:{if(fi(n)!==n||n.tag!==1)throw Error(r(170));var o=n;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Nt(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(r(171))}if(n.tag===1){var a=n.type;if(Nt(a))return Hm(n,a,o)}return o}function v0(n,o,a,d,g,v,k,A,I){return n=Gd(a,d,!0,n,g,v,k,A,I),n.context=y0(null),a=n.current,d=Mt(),g=Vr(a),v=dr(d,g),v.callback=o??null,zr(a,v,g),n.current.lanes=g,Jo(n,g,d),Wt(n,d),n}function Rl(n,o,a,d){var g=o.current,v=Mt(),k=Vr(g);return a=y0(a),o.context===null?o.context=a:o.pendingContext=a,o=dr(v,k),o.payload={element:n},d=d===void 0?null:d,d!==null&&(o.callback=d),n=zr(g,o,k),n!==null&&(Dn(n,g,k,v),ul(n,g,k)),k}function Ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function x0(n,o){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<o?a:o}}function Xd(n,o){x0(n,o),(n=n.alternate)&&x0(n,o)}function PS(){return null}var w0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qd(n){this._internalRoot=n}Ml.prototype.render=Qd.prototype.render=function(n){var o=this._internalRoot;if(o===null)throw Error(r(409));Rl(n,o,null,null)},Ml.prototype.unmount=Qd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var o=n.containerInfo;bi(function(){Rl(null,n,null,null)}),o[sr]=null}};function Ml(n){this._internalRoot=n}Ml.prototype.unstable_scheduleHydration=function(n){if(n){var o=rm();n={blockedOn:null,target:n,priority:o};for(var a=0;a<Er.length&&o!==0&&o<Er[a].priority;a++);Er.splice(a,0,n),a===0&&sm(n)}};function Kd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function b0(){}function TS(n,o,a,d,g){if(g){if(typeof d=="function"){var v=d;d=function(){var H=Ll(k);v.call(H)}}var k=v0(o,d,n,0,null,!1,!1,"",b0);return n._reactRootContainer=k,n[sr]=k.current,ps(n.nodeType===8?n.parentNode:n),bi(),k}for(;g=n.lastChild;)n.removeChild(g);if(typeof d=="function"){var A=d;d=function(){var H=Ll(I);A.call(H)}}var I=Gd(n,0,!1,null,null,!1,!1,"",b0);return n._reactRootContainer=I,n[sr]=I.current,ps(n.nodeType===8?n.parentNode:n),bi(function(){Rl(o,I,a,d)}),I}function Il(n,o,a,d,g){var v=a._reactRootContainer;if(v){var k=v;if(typeof g=="function"){var A=g;g=function(){var I=Ll(k);A.call(I)}}Rl(o,k,n,g)}else k=TS(a,o,n,g,d);return Ll(k)}tm=function(n){switch(n.tag){case 3:var o=n.stateNode;if(o.current.memoizedState.isDehydrated){var a=Zo(o.pendingLanes);a!==0&&(bc(o,a|1),Wt(o,nt()),(Ae&6)===0&&(vo=nt()+500,Dr()))}break;case 13:bi(function(){var d=cr(n,1);if(d!==null){var g=Mt();Dn(d,n,1,g)}}),Xd(n,1)}},_c=function(n){if(n.tag===13){var o=cr(n,134217728);if(o!==null){var a=Mt();Dn(o,n,134217728,a)}Xd(n,134217728)}},nm=function(n){if(n.tag===13){var o=Vr(n),a=cr(n,o);if(a!==null){var d=Mt();Dn(a,n,o,d)}Xd(n,o)}},rm=function(){return De},im=function(n,o){var a=De;try{return De=n,o()}finally{De=a}},hc=function(n,o,a){switch(o){case"input":if(Oe(n,a),o=a.name,a.type==="radio"&&o!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<a.length;o++){var d=a[o];if(d!==n&&d.form===n.form){var g=Ja(d);if(!g)throw Error(r(90));Se(d),Oe(d,g)}}}break;case"textarea":ke(n,a);break;case"select":o=a.value,o!=null&&jn(n,!!a.multiple,o,!1)}},Wh=Wd,Uh=bi;var jS={usingClientEntryPoint:!1,Events:[gs,io,Ja,Bh,Vh,Wd]},Os={findFiberByHostInstance:pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qh(n),n===null?null:n.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||PS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{Ma=zl.inject(ES),Fn=zl}catch{}}return Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS,Ut.createPortal=function(n,o){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(o))throw Error(r(200));return CS(n,o,null,a)},Ut.createRoot=function(n,o){if(!Kd(n))throw Error(r(299));var a=!1,d="",g=w0;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=Gd(n,1,!1,null,null,a,!1,d,g),n[sr]=o.current,ps(n.nodeType===8?n.parentNode:n),new Qd(o)},Ut.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var o=n._reactInternals;if(o===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=qh(o),n=n===null?null:n.stateNode,n},Ut.flushSync=function(n){return bi(n)},Ut.hydrate=function(n,o,a){if(!Dl(o))throw Error(r(200));return Il(null,n,o,!0,a)},Ut.hydrateRoot=function(n,o,a){if(!Kd(n))throw Error(r(405));var d=a!=null&&a.hydratedSources||null,g=!1,v="",k=w0;if(a!=null&&(a.unstable_strictMode===!0&&(g=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(k=a.onRecoverableError)),o=v0(o,null,n,1,a??null,g,!1,v,k),n[sr]=o.current,ps(n),d)for(n=0;n<d.length;n++)a=d[n],g=a._getVersion,g=g(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,g]:o.mutableSourceEagerHydrationData.push(a,g);return new Ml(o)},Ut.render=function(n,o,a){if(!Dl(o))throw Error(r(200));return Il(null,n,o,!1,a)},Ut.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(r(40));return n._reactRootContainer?(bi(function(){Il(null,null,n,!1,function(){n._reactRootContainer=null,n[sr]=null})}),!0):!1},Ut.unstable_batchedUpdates=Wd,Ut.unstable_renderSubtreeIntoContainer=function(n,o,a,d){if(!Dl(a))throw Error(r(200));if(n==null||n._reactInternals===void 0)throw Error(r(38));return Il(n,o,a,!1,d)},Ut.version="18.3.1-next-f1338f8080-20240426",Ut}var E0;function Hu(){if(E0)return ef.exports;E0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),ef.exports=FS(),ef.exports}var O0;function NS(){if(O0)return Nl;O0=1;var t=Hu();return Nl.createRoot=t.createRoot,Nl.hydrateRoot=t.hydrateRoot,Nl}var BS=NS(),VS=Hu();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},na.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const A0="popstate";function WS(t){t===void 0&&(t={});function e(i,s){let{pathname:l,search:u,hash:c}=i.location;return qf("",{pathname:l,search:u,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:ku(s)}return $S(e,r,null,t)}function ct(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Cx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function US(){return Math.random().toString(36).substr(2,8)}function R0(t,e){return{usr:t.state,key:t.key,idx:e}}function qf(t,e,r,i){return r===void 0&&(r=null),na({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ho(e):e,{state:r,key:e&&e.key||i||US()})}function ku(t){let{pathname:e="/",search:r="",hash:i=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ho(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function $S(t,e,r,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:l=!1}=i,u=s.history,c=Gr.Pop,f=null,p=h();p==null&&(p=0,u.replaceState(na({},u.state,{idx:p}),""));function h(){return(u.state||{idx:null}).idx}function y(){c=Gr.Pop;let S=h(),j=S==null?null:S-p;p=S,f&&f({action:c,location:w.location,delta:j})}function x(S,j){c=Gr.Push;let T=qf(w.location,S,j);p=h()+1;let C=R0(T,p),E=w.createHref(T);try{u.pushState(C,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;s.location.assign(E)}l&&f&&f({action:c,location:w.location,delta:1})}function b(S,j){c=Gr.Replace;let T=qf(w.location,S,j);p=h();let C=R0(T,p),E=w.createHref(T);u.replaceState(C,"",E),l&&f&&f({action:c,location:w.location,delta:0})}function _(S){let j=s.location.origin!=="null"?s.location.origin:s.location.href,T=typeof S=="string"?S:ku(S);return T=T.replace(/ $/,"%20"),ct(j,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,j)}let w={get action(){return c},get location(){return t(s,u)},listen(S){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(A0,y),f=S,()=>{s.removeEventListener(A0,y),f=null}},createHref(S){return e(s,S)},createURL:_,encodeLocation(S){let j=_(S);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:x,replace:b,go(S){return u.go(S)}};return w}var L0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(L0||(L0={}));function HS(t,e,r){return r===void 0&&(r="/"),YS(t,e,r)}function YS(t,e,r,i){let s=typeof e=="string"?Ho(e):e,l=Fp(s.pathname||"/",r);if(l==null)return null;let u=Px(t);qS(u);let c=null;for(let f=0;c==null&&f<u.length;++f){let p=ok(l);c=nk(u[f],p)}return c}function Px(t,e,r,i){e===void 0&&(e=[]),r===void 0&&(r=[]),i===void 0&&(i="");let s=(l,u,c)=>{let f={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(ct(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let p=Jr([i,f.relativePath]),h=r.concat(f);l.children&&l.children.length>0&&(ct(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Px(l.children,e,h,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:ek(p,l.index),routesMeta:h})};return t.forEach((l,u)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,u);else for(let f of Tx(l.path))s(l,u,f)}),e}function Tx(t){let e=t.split("/");if(e.length===0)return[];let[r,...i]=e,s=r.endsWith("?"),l=r.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let u=Tx(i.join("/")),c=[];return c.push(...u.map(f=>f===""?l:[l,f].join("/"))),s&&c.push(...u),c.map(f=>t.startsWith("/")&&f===""?"/":f)}function qS(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:tk(e.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const GS=/^:[\w-]+$/,XS=3,QS=2,KS=1,ZS=10,JS=-2,M0=t=>t==="*";function ek(t,e){let r=t.split("/"),i=r.length;return r.some(M0)&&(i+=JS),e&&(i+=QS),r.filter(s=>!M0(s)).reduce((s,l)=>s+(GS.test(l)?XS:l===""?KS:ZS),i)}function tk(t,e){return t.length===e.length&&t.slice(0,-1).every((i,s)=>i===e[s])?t[t.length-1]-e[e.length-1]:0}function nk(t,e,r){let{routesMeta:i}=t,s={},l="/",u=[];for(let c=0;c<i.length;++c){let f=i[c],p=c===i.length-1,h=l==="/"?e:e.slice(l.length)||"/",y=rk({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},h),x=f.route;if(!y)return null;Object.assign(s,y.params),u.push({params:s,pathname:Jr([l,y.pathname]),pathnameBase:uk(Jr([l,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(l=Jr([l,y.pathnameBase]))}return u}function rk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,i]=ik(t.path,t.caseSensitive,t.end),s=e.match(r);if(!s)return null;let l=s[0],u=l.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:i.reduce((p,h,y)=>{let{paramName:x,isOptional:b}=h;if(x==="*"){let w=c[y]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const _=c[y];return b&&!_?p[x]=void 0:p[x]=(_||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:t}}function ik(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),Cx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,f)=>(i.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function ok(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Fp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,i=t.charAt(r);return i&&i!=="/"?null:t.slice(r)||"/"}function sk(t,e){e===void 0&&(e="/");let{pathname:r,search:i="",hash:s=""}=typeof t=="string"?Ho(t):t;return{pathname:r?r.startsWith("/")?r:ak(r,e):e,search:ck(i),hash:dk(s)}}function ak(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function rf(t,e,r,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lk(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function jx(t,e){let r=lk(t);return e?r.map((i,s)=>s===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function Ex(t,e,r,i){i===void 0&&(i=!1);let s;typeof t=="string"?s=Ho(t):(s=na({},t),ct(!s.pathname||!s.pathname.includes("?"),rf("?","pathname","search",s)),ct(!s.pathname||!s.pathname.includes("#"),rf("#","pathname","hash",s)),ct(!s.search||!s.search.includes("#"),rf("#","search","hash",s)));let l=t===""||s.pathname==="",u=l?"/":s.pathname,c;if(u==null)c=r;else{let y=e.length-1;if(!i&&u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),y-=1;s.pathname=x.join("/")}c=y>=0?e[y]:"/"}let f=sk(s,c),p=u&&u!=="/"&&u.endsWith("/"),h=(l||u===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(p||h)&&(f.pathname+="/"),f}const Jr=t=>t.join("/").replace(/\/\/+/g,"/"),uk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ck=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ox=["post","put","patch","delete"];new Set(Ox);const pk=["get",...Ox];new Set(pk);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},ra.apply(this,arguments)}const Np=R.createContext(null),hk=R.createContext(null),Ui=R.createContext(null),Yu=R.createContext(null),$i=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Ax=R.createContext(null);function mk(t,e){let{relative:r}=e===void 0?{}:e;ma()||ct(!1);let{basename:i,navigator:s}=R.useContext(Ui),{hash:l,pathname:u,search:c}=Lx(t,{relative:r}),f=u;return i!=="/"&&(f=u==="/"?i:Jr([i,u])),s.createHref({pathname:f,search:c,hash:l})}function ma(){return R.useContext(Yu)!=null}function dn(){return ma()||ct(!1),R.useContext(Yu).location}function Rx(t){R.useContext(Ui).static||R.useLayoutEffect(t)}function li(){let{isDataRoute:t}=R.useContext($i);return t?jk():gk()}function gk(){ma()||ct(!1);let t=R.useContext(Np),{basename:e,future:r,navigator:i}=R.useContext(Ui),{matches:s}=R.useContext($i),{pathname:l}=dn(),u=JSON.stringify(jx(s,r.v7_relativeSplatPath)),c=R.useRef(!1);return Rx(()=>{c.current=!0}),R.useCallback(function(p,h){if(h===void 0&&(h={}),!c.current)return;if(typeof p=="number"){i.go(p);return}let y=Ex(p,JSON.parse(u),l,h.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Jr([e,y.pathname])),(h.replace?i.replace:i.push)(y,h.state,h)},[e,i,u,l,t])}function Lx(t,e){let{relative:r}=e===void 0?{}:e,{future:i}=R.useContext(Ui),{matches:s}=R.useContext($i),{pathname:l}=dn(),u=JSON.stringify(jx(s,i.v7_relativeSplatPath));return R.useMemo(()=>Ex(t,JSON.parse(u),l,r==="path"),[t,u,l,r])}function yk(t,e){return vk(t,e)}function vk(t,e,r,i){ma()||ct(!1);let{navigator:s,static:l}=R.useContext(Ui),{matches:u}=R.useContext($i),c=u[u.length-1],f=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let h=dn(),y;if(e){var x;let j=typeof e=="string"?Ho(e):e;p==="/"||(x=j.pathname)!=null&&x.startsWith(p)||ct(!1),y=j}else y=h;let b=y.pathname||"/",_=b;if(p!=="/"){let j=p.replace(/^\//,"").split("/");_="/"+b.replace(/^\//,"").split("/").slice(j.length).join("/")}let w=HS(t,{pathname:_}),S=Sk(w&&w.map(j=>Object.assign({},j,{params:Object.assign({},f,j.params),pathname:Jr([p,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?p:Jr([p,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),u,r,i);return e&&S?R.createElement(Yu.Provider,{value:{location:ra({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Gr.Pop}},S):S}function xk(){let t=Tk(),e=fk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),r?R.createElement("pre",{style:s},r):null,null)}const wk=R.createElement(xk,null);class bk extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?R.createElement($i.Provider,{value:this.props.routeContext},R.createElement(Ax.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _k(t){let{routeContext:e,match:r,children:i}=t,s=R.useContext(Np);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),R.createElement($i.Provider,{value:e},i)}function Sk(t,e,r,i){var s;if(e===void 0&&(e=[]),r===void 0&&(r=null),i===void 0&&(i=null),t==null){var l;if(!r)return null;if(r.errors)t=r.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let u=t,c=(s=r)==null?void 0:s.errors;if(c!=null){let h=u.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);h>=0||ct(!1),u=u.slice(0,Math.min(u.length,h+1))}let f=!1,p=-1;if(r&&i&&i.v7_partialHydration)for(let h=0;h<u.length;h++){let y=u[h];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=h),y.route.id){let{loaderData:x,errors:b}=r,_=y.route.loader&&x[y.route.id]===void 0&&(!b||b[y.route.id]===void 0);if(y.route.lazy||_){f=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((h,y,x)=>{let b,_=!1,w=null,S=null;r&&(b=c&&y.route.id?c[y.route.id]:void 0,w=y.route.errorElement||wk,f&&(p<0&&x===0?(Ek("route-fallback"),_=!0,S=null):p===x&&(_=!0,S=y.route.hydrateFallbackElement||null)));let j=e.concat(u.slice(0,x+1)),T=()=>{let C;return b?C=w:_?C=S:y.route.Component?C=R.createElement(y.route.Component,null):y.route.element?C=y.route.element:C=h,R.createElement(_k,{match:y,routeContext:{outlet:h,matches:j,isDataRoute:r!=null},children:C})};return r&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?R.createElement(bk,{location:r.location,revalidation:r.revalidation,component:w,error:b,children:T(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):T()},null)}var Mx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Mx||{}),Dx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Dx||{});function kk(t){let e=R.useContext(Np);return e||ct(!1),e}function Ck(t){let e=R.useContext(hk);return e||ct(!1),e}function Pk(t){let e=R.useContext($i);return e||ct(!1),e}function Ix(t){let e=Pk(),r=e.matches[e.matches.length-1];return r.route.id||ct(!1),r.route.id}function Tk(){var t;let e=R.useContext(Ax),r=Ck(),i=Ix();return e!==void 0?e:(t=r.errors)==null?void 0:t[i]}function jk(){let{router:t}=kk(Mx.UseNavigateStable),e=Ix(Dx.UseNavigateStable),r=R.useRef(!1);return Rx(()=>{r.current=!0}),R.useCallback(function(s,l){l===void 0&&(l={}),r.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,ra({fromRouteId:e},l)))},[t,e])}const D0={};function Ek(t,e,r){D0[t]||(D0[t]=!0)}function Ok(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Yn(t){ct(!1)}function Ak(t){let{basename:e="/",children:r=null,location:i,navigationType:s=Gr.Pop,navigator:l,static:u=!1,future:c}=t;ma()&&ct(!1);let f=e.replace(/^\/*/,"/"),p=R.useMemo(()=>({basename:f,navigator:l,static:u,future:ra({v7_relativeSplatPath:!1},c)}),[f,c,l,u]);typeof i=="string"&&(i=Ho(i));let{pathname:h="/",search:y="",hash:x="",state:b=null,key:_="default"}=i,w=R.useMemo(()=>{let S=Fp(h,f);return S==null?null:{location:{pathname:S,search:y,hash:x,state:b,key:_},navigationType:s}},[f,h,y,x,b,_,s]);return w==null?null:R.createElement(Ui.Provider,{value:p},R.createElement(Yu.Provider,{children:r,value:w}))}function Rk(t){let{children:e,location:r}=t;return yk(Gf(e),r)}new Promise(()=>{});function Gf(t,e){e===void 0&&(e=[]);let r=[];return R.Children.forEach(t,(i,s)=>{if(!R.isValidElement(i))return;let l=[...e,s];if(i.type===R.Fragment){r.push.apply(r,Gf(i.props.children,l));return}i.type!==Yn&&ct(!1),!i.props.index||!i.props.children||ct(!1);let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Gf(i.props.children,l)),r.push(u)}),r}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xf(){return Xf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Xf.apply(this,arguments)}function Lk(t,e){if(t==null)return{};var r={},i=Object.keys(t),s,l;for(l=0;l<i.length;l++)s=i[l],!(e.indexOf(s)>=0)&&(r[s]=t[s]);return r}function Mk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Dk(t,e){return t.button===0&&(!e||e==="_self")&&!Mk(t)}const Ik=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zk="6";try{window.__reactRouterVersion=zk}catch{}const Fk="startTransition",I0=DS[Fk];function Nk(t){let{basename:e,children:r,future:i,window:s}=t,l=R.useRef();l.current==null&&(l.current=WS({window:s,v5Compat:!0}));let u=l.current,[c,f]=R.useState({action:u.action,location:u.location}),{v7_startTransition:p}=i||{},h=R.useCallback(y=>{p&&I0?I0(()=>f(y)):f(y)},[f,p]);return R.useLayoutEffect(()=>u.listen(h),[u,h]),R.useEffect(()=>Ok(i),[i]),R.createElement(Ak,{basename:e,children:r,location:c.location,navigationType:c.action,navigator:u,future:i})}const Bk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vi=R.forwardRef(function(e,r){let{onClick:i,relative:s,reloadDocument:l,replace:u,state:c,target:f,to:p,preventScrollReset:h,viewTransition:y}=e,x=Lk(e,Ik),{basename:b}=R.useContext(Ui),_,w=!1;if(typeof p=="string"&&Vk.test(p)&&(_=p,Bk))try{let C=new URL(window.location.href),E=p.startsWith("//")?new URL(C.protocol+p):new URL(p),P=Fp(E.pathname,b);E.origin===C.origin&&P!=null?p=P+E.search+E.hash:w=!0}catch{}let S=mk(p,{relative:s}),j=Wk(p,{replace:u,state:c,target:f,preventScrollReset:h,relative:s,viewTransition:y});function T(C){i&&i(C),C.defaultPrevented||j(C)}return R.createElement("a",Xf({},x,{href:_||S,onClick:w||l?i:T,ref:r,target:f}))});var z0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(z0||(z0={}));var F0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(F0||(F0={}));function Wk(t,e){let{target:r,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:c}=e===void 0?{}:e,f=li(),p=dn(),h=Lx(t,{relative:u});return R.useCallback(y=>{if(Dk(y,r)){y.preventDefault();let x=i!==void 0?i:ku(p)===ku(h);f(t,{replace:x,state:s,preventScrollReset:l,relative:u,viewTransition:c})}},[p,f,h,i,s,r,t,l,u,c])}var of={exports:{}},Ie={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function Uk(){if(N0)return Ie;N0=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.view_transition"),b=Symbol.for("react.client.reference");function _(w){if(typeof w=="object"&&w!==null){var S=w.$$typeof;switch(S){case t:switch(w=w.type,w){case r:case s:case i:case f:case p:case x:return w;default:switch(w=w&&w.$$typeof,w){case u:case c:case y:case h:return w;case l:return w;default:return S}}case e:return S}}}return Ie.ContextConsumer=l,Ie.ContextProvider=u,Ie.Element=t,Ie.ForwardRef=c,Ie.Fragment=r,Ie.Lazy=y,Ie.Memo=h,Ie.Portal=e,Ie.Profiler=s,Ie.StrictMode=i,Ie.Suspense=f,Ie.SuspenseList=p,Ie.isContextConsumer=function(w){return _(w)===l},Ie.isContextProvider=function(w){return _(w)===u},Ie.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===t},Ie.isForwardRef=function(w){return _(w)===c},Ie.isFragment=function(w){return _(w)===r},Ie.isLazy=function(w){return _(w)===y},Ie.isMemo=function(w){return _(w)===h},Ie.isPortal=function(w){return _(w)===e},Ie.isProfiler=function(w){return _(w)===s},Ie.isStrictMode=function(w){return _(w)===i},Ie.isSuspense=function(w){return _(w)===f},Ie.isSuspenseList=function(w){return _(w)===p},Ie.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===r||w===s||w===i||w===f||w===p||typeof w=="object"&&w!==null&&(w.$$typeof===y||w.$$typeof===h||w.$$typeof===u||w.$$typeof===l||w.$$typeof===c||w.$$typeof===b||w.getModuleId!==void 0)},Ie.typeOf=_,Ie}var B0;function $k(){return B0||(B0=1,of.exports=Uk()),of.exports}var zx=$k();function Hk(t){function e(V,Q,J,ie,W){for(var fe=0,q=0,me=0,ve=0,_e,Se,Ze=0,gt=0,je,pt=je=_e=0,Oe=0,ot=0,ir=0,He=0,jn=J.length,or=jn-1,zt,ke="",Ve="",Gi="",di="",Qt;Oe<jn;){if(Se=J.charCodeAt(Oe),Oe===or&&q+ve+me+fe!==0&&(q!==0&&(Se=q===47?10:47),ve=me=fe=0,jn++,or++),q+ve+me+fe===0){if(Oe===or&&(0<ot&&(ke=ke.replace(x,"")),0<ke.trim().length)){switch(Se){case 32:case 9:case 59:case 13:case 10:break;default:ke+=J.charAt(Oe)}Se=59}switch(Se){case 123:for(ke=ke.trim(),_e=ke.charCodeAt(0),je=1,He=++Oe;Oe<jn;){switch(Se=J.charCodeAt(Oe)){case 123:je++;break;case 125:je--;break;case 47:switch(Se=J.charCodeAt(Oe+1)){case 42:case 47:e:{for(pt=Oe+1;pt<or;++pt)switch(J.charCodeAt(pt)){case 47:if(Se===42&&J.charCodeAt(pt-1)===42&&Oe+2!==pt){Oe=pt+1;break e}break;case 10:if(Se===47){Oe=pt+1;break e}}Oe=pt}}break;case 91:Se++;case 40:Se++;case 34:case 39:for(;Oe++<or&&J.charCodeAt(Oe)!==Se;);}if(je===0)break;Oe++}switch(je=J.substring(He,Oe),_e===0&&(_e=(ke=ke.replace(y,"").trim()).charCodeAt(0)),_e){case 64:switch(0<ot&&(ke=ke.replace(x,"")),Se=ke.charCodeAt(1),Se){case 100:case 109:case 115:case 45:ot=Q;break;default:ot=ce}if(je=e(Q,ot,je,Se,W+1),He=je.length,0<K&&(ot=r(ce,ke,ir),Qt=c(3,je,ot,Q,Z,z,He,Se,W,ie),ke=ot.join(""),Qt!==void 0&&(He=(je=Qt.trim()).length)===0&&(Se=0,je="")),0<He)switch(Se){case 115:ke=ke.replace(M,u);case 100:case 109:case 45:je=ke+"{"+je+"}";break;case 107:ke=ke.replace(T,"$1 $2"),je=ke+"{"+je+"}",je=ae===1||ae===2&&l("@"+je,3)?"@-webkit-"+je+"@"+je:"@"+je;break;default:je=ke+je,ie===112&&(je=(Ve+=je,""))}else je="";break;default:je=e(Q,r(Q,ke,ir),je,ie,W+1)}Gi+=je,je=ir=ot=pt=_e=0,ke="",Se=J.charCodeAt(++Oe);break;case 125:case 59:if(ke=(0<ot?ke.replace(x,""):ke).trim(),1<(He=ke.length))switch(pt===0&&(_e=ke.charCodeAt(0),_e===45||96<_e&&123>_e)&&(He=(ke=ke.replace(" ",":")).length),0<K&&(Qt=c(1,ke,Q,V,Z,z,Ve.length,ie,W,ie))!==void 0&&(He=(ke=Qt.trim()).length)===0&&(ke="\0\0"),_e=ke.charCodeAt(0),Se=ke.charCodeAt(1),_e){case 0:break;case 64:if(Se===105||Se===99){di+=ke+J.charAt(Oe);break}default:ke.charCodeAt(He-1)!==58&&(Ve+=s(ke,_e,Se,ke.charCodeAt(2)))}ir=ot=pt=_e=0,ke="",Se=J.charCodeAt(++Oe)}}switch(Se){case 13:case 10:q===47?q=0:1+_e===0&&ie!==107&&0<ke.length&&(ot=1,ke+="\0"),0<K*re&&c(0,ke,Q,V,Z,z,Ve.length,ie,W,ie),z=1,Z++;break;case 59:case 125:if(q+ve+me+fe===0){z++;break}default:switch(z++,zt=J.charAt(Oe),Se){case 9:case 32:if(ve+fe+q===0)switch(Ze){case 44:case 58:case 9:case 32:zt="";break;default:Se!==32&&(zt=" ")}break;case 0:zt="\\0";break;case 12:zt="\\f";break;case 11:zt="\\v";break;case 38:ve+q+fe===0&&(ot=ir=1,zt="\f"+zt);break;case 108:if(ve+q+fe+X===0&&0<pt)switch(Oe-pt){case 2:Ze===112&&J.charCodeAt(Oe-3)===58&&(X=Ze);case 8:gt===111&&(X=gt)}break;case 58:ve+q+fe===0&&(pt=Oe);break;case 44:q+me+ve+fe===0&&(ot=1,zt+="\r");break;case 34:case 39:q===0&&(ve=ve===Se?0:ve===0?Se:ve);break;case 91:ve+q+me===0&&fe++;break;case 93:ve+q+me===0&&fe--;break;case 41:ve+q+fe===0&&me--;break;case 40:if(ve+q+fe===0){if(_e===0)switch(2*Ze+3*gt){case 533:break;default:_e=1}me++}break;case 64:q+me+ve+fe+pt+je===0&&(je=1);break;case 42:case 47:if(!(0<ve+fe+me))switch(q){case 0:switch(2*Se+3*J.charCodeAt(Oe+1)){case 235:q=47;break;case 220:He=Oe,q=42}break;case 42:Se===47&&Ze===42&&He+2!==Oe&&(J.charCodeAt(He+2)===33&&(Ve+=J.substring(He,Oe+1)),zt="",q=0)}}q===0&&(ke+=zt)}gt=Ze,Ze=Se,Oe++}if(He=Ve.length,0<He){if(ot=Q,0<K&&(Qt=c(2,Ve,ot,V,Z,z,He,ie,W,ie),Qt!==void 0&&(Ve=Qt).length===0))return di+Ve+Gi;if(Ve=ot.join(",")+"{"+Ve+"}",ae*X!==0){switch(ae!==2||l(Ve,2)||(X=0),X){case 111:Ve=Ve.replace(E,":-moz-$1")+Ve;break;case 112:Ve=Ve.replace(C,"::-webkit-input-$1")+Ve.replace(C,"::-moz-$1")+Ve.replace(C,":-ms-input-$1")+Ve}X=0}}return di+Ve+Gi}function r(V,Q,J){var ie=Q.trim().split(S);Q=ie;var W=ie.length,fe=V.length;switch(fe){case 0:case 1:var q=0;for(V=fe===0?"":V[0]+" ";q<W;++q)Q[q]=i(V,Q[q],J).trim();break;default:var me=q=0;for(Q=[];q<W;++q)for(var ve=0;ve<fe;++ve)Q[me++]=i(V[ve]+" ",ie[q],J).trim()}return Q}function i(V,Q,J){var ie=Q.charCodeAt(0);switch(33>ie&&(ie=(Q=Q.trim()).charCodeAt(0)),ie){case 38:return Q.replace(j,"$1"+V.trim());case 58:return V.trim()+Q.replace(j,"$1"+V.trim());default:if(0<1*J&&0<Q.indexOf("\f"))return Q.replace(j,(V.charCodeAt(0)===58?"":"$1")+V.trim())}return V+Q}function s(V,Q,J,ie){var W=V+";",fe=2*Q+3*J+4*ie;if(fe===944){V=W.indexOf(":",9)+1;var q=W.substring(V,W.length-1).trim();return q=W.substring(0,V).trim()+q+";",ae===1||ae===2&&l(q,1)?"-webkit-"+q+q:q}if(ae===0||ae===2&&!l(W,1))return W;switch(fe){case 1015:return W.charCodeAt(10)===97?"-webkit-"+W+W:W;case 951:return W.charCodeAt(3)===116?"-webkit-"+W+W:W;case 963:return W.charCodeAt(5)===110?"-webkit-"+W+W:W;case 1009:if(W.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+W+W;case 978:return"-webkit-"+W+"-moz-"+W+W;case 1019:case 983:return"-webkit-"+W+"-moz-"+W+"-ms-"+W+W;case 883:if(W.charCodeAt(8)===45)return"-webkit-"+W+W;if(0<W.indexOf("image-set(",11))return W.replace(G,"$1-webkit-$2")+W;break;case 932:if(W.charCodeAt(4)===45)switch(W.charCodeAt(5)){case 103:return"-webkit-box-"+W.replace("-grow","")+"-webkit-"+W+"-ms-"+W.replace("grow","positive")+W;case 115:return"-webkit-"+W+"-ms-"+W.replace("shrink","negative")+W;case 98:return"-webkit-"+W+"-ms-"+W.replace("basis","preferred-size")+W}return"-webkit-"+W+"-ms-"+W+W;case 964:return"-webkit-"+W+"-ms-flex-"+W+W;case 1023:if(W.charCodeAt(8)!==99)break;return q=W.substring(W.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+q+"-webkit-"+W+"-ms-flex-pack"+q+W;case 1005:return _.test(W)?W.replace(b,":-webkit-")+W.replace(b,":-moz-")+W:W;case 1e3:switch(q=W.substring(13).trim(),Q=q.indexOf("-")+1,q.charCodeAt(0)+q.charCodeAt(Q)){case 226:q=W.replace(P,"tb");break;case 232:q=W.replace(P,"tb-rl");break;case 220:q=W.replace(P,"lr");break;default:return W}return"-webkit-"+W+"-ms-"+q+W;case 1017:if(W.indexOf("sticky",9)===-1)break;case 975:switch(Q=(W=V).length-10,q=(W.charCodeAt(Q)===33?W.substring(0,Q):W).substring(V.indexOf(":",7)+1).trim(),fe=q.charCodeAt(0)+(q.charCodeAt(7)|0)){case 203:if(111>q.charCodeAt(8))break;case 115:W=W.replace(q,"-webkit-"+q)+";"+W;break;case 207:case 102:W=W.replace(q,"-webkit-"+(102<fe?"inline-":"")+"box")+";"+W.replace(q,"-webkit-"+q)+";"+W.replace(q,"-ms-"+q+"box")+";"+W}return W+";";case 938:if(W.charCodeAt(5)===45)switch(W.charCodeAt(6)){case 105:return q=W.replace("-items",""),"-webkit-"+W+"-webkit-box-"+q+"-ms-flex-"+q+W;case 115:return"-webkit-"+W+"-ms-flex-item-"+W.replace(F,"")+W;default:return"-webkit-"+W+"-ms-flex-line-pack"+W.replace("align-content","").replace(F,"")+W}break;case 973:case 989:if(W.charCodeAt(3)!==45||W.charCodeAt(4)===122)break;case 931:case 953:if(Y.test(V)===!0)return(q=V.substring(V.indexOf(":")+1)).charCodeAt(0)===115?s(V.replace("stretch","fill-available"),Q,J,ie).replace(":fill-available",":stretch"):W.replace(q,"-webkit-"+q)+W.replace(q,"-moz-"+q.replace("fill-",""))+W;break;case 962:if(W="-webkit-"+W+(W.charCodeAt(5)===102?"-ms-"+W:"")+W,J+ie===211&&W.charCodeAt(13)===105&&0<W.indexOf("transform",10))return W.substring(0,W.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+W}return W}function l(V,Q){var J=V.indexOf(Q===1?":":"{"),ie=V.substring(0,Q!==3?J:10);return J=V.substring(J+1,V.length-1),le(Q!==2?ie:ie.replace(B,"$1"),J,Q)}function u(V,Q){var J=s(Q,Q.charCodeAt(0),Q.charCodeAt(1),Q.charCodeAt(2));return J!==Q+";"?J.replace(D," or ($1)").substring(4):"("+Q+")"}function c(V,Q,J,ie,W,fe,q,me,ve,_e){for(var Se=0,Ze=Q,gt;Se<K;++Se)switch(gt=se[Se].call(h,V,Ze,J,ie,W,fe,q,me,ve,_e)){case void 0:case!1:case!0:case null:break;default:Ze=gt}if(Ze!==Q)return Ze}function f(V){switch(V){case void 0:case null:K=se.length=0;break;default:if(typeof V=="function")se[K++]=V;else if(typeof V=="object")for(var Q=0,J=V.length;Q<J;++Q)f(V[Q]);else re=!!V|0}return f}function p(V){return V=V.prefix,V!==void 0&&(le=null,V?typeof V!="function"?ae=1:(ae=2,le=V):ae=0),p}function h(V,Q){var J=V;if(33>J.charCodeAt(0)&&(J=J.trim()),L=J,J=[L],0<K){var ie=c(-1,Q,J,J,Z,z,0,0,0,0);ie!==void 0&&typeof ie=="string"&&(Q=ie)}var W=e(ce,J,Q,0,0);return 0<K&&(ie=c(-2,W,J,J,Z,z,W.length,0,0,0),ie!==void 0&&(W=ie)),L="",X=0,z=Z=1,W}var y=/^\0+/g,x=/[\0\r\f]/g,b=/: */g,_=/zoo|gra/,w=/([,: ])(transform)/g,S=/,\r+?/g,j=/([\t\r\n ])*\f?&/g,T=/@(k\w+)\s*(\S*)\s*/,C=/::(place)/g,E=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,M=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,F=/-self|flex-/g,B=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Y=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,z=1,Z=1,X=0,ae=1,ce=[],se=[],K=0,le=null,re=0,L="";return h.use=f,h.set=p,t!==void 0&&p(t),h}var Yk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function qk(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var Gk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,V0=qk(function(t){return Gk.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),sf={exports:{}},Le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function Xk(){if(W0)return Le;W0=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,h=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,x=t?Symbol.for("react.suspense_list"):60120,b=t?Symbol.for("react.memo"):60115,_=t?Symbol.for("react.lazy"):60116,w=t?Symbol.for("react.block"):60121,S=t?Symbol.for("react.fundamental"):60117,j=t?Symbol.for("react.responder"):60118,T=t?Symbol.for("react.scope"):60119;function C(P){if(typeof P=="object"&&P!==null){var M=P.$$typeof;switch(M){case e:switch(P=P.type,P){case f:case p:case i:case l:case s:case y:return P;default:switch(P=P&&P.$$typeof,P){case c:case h:case _:case b:case u:return P;default:return M}}case r:return M}}}function E(P){return C(P)===p}return Le.AsyncMode=f,Le.ConcurrentMode=p,Le.ContextConsumer=c,Le.ContextProvider=u,Le.Element=e,Le.ForwardRef=h,Le.Fragment=i,Le.Lazy=_,Le.Memo=b,Le.Portal=r,Le.Profiler=l,Le.StrictMode=s,Le.Suspense=y,Le.isAsyncMode=function(P){return E(P)||C(P)===f},Le.isConcurrentMode=E,Le.isContextConsumer=function(P){return C(P)===c},Le.isContextProvider=function(P){return C(P)===u},Le.isElement=function(P){return typeof P=="object"&&P!==null&&P.$$typeof===e},Le.isForwardRef=function(P){return C(P)===h},Le.isFragment=function(P){return C(P)===i},Le.isLazy=function(P){return C(P)===_},Le.isMemo=function(P){return C(P)===b},Le.isPortal=function(P){return C(P)===r},Le.isProfiler=function(P){return C(P)===l},Le.isStrictMode=function(P){return C(P)===s},Le.isSuspense=function(P){return C(P)===y},Le.isValidElementType=function(P){return typeof P=="string"||typeof P=="function"||P===i||P===p||P===l||P===s||P===y||P===x||typeof P=="object"&&P!==null&&(P.$$typeof===_||P.$$typeof===b||P.$$typeof===u||P.$$typeof===c||P.$$typeof===h||P.$$typeof===S||P.$$typeof===j||P.$$typeof===T||P.$$typeof===w)},Le.typeOf=C,Le}var U0;function Qk(){return U0||(U0=1,sf.exports=Xk()),sf.exports}var af,$0;function Kk(){if($0)return af;$0=1;var t=Qk(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=i,l[t.Memo]=s;function u(_){return t.isMemo(_)?s:l[_.$$typeof]||e}var c=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,x=Object.prototype;function b(_,w,S){if(typeof w!="string"){if(x){var j=y(w);j&&j!==x&&b(_,j,S)}var T=f(w);p&&(T=T.concat(p(w)));for(var C=u(_),E=u(w),P=0;P<T.length;++P){var M=T[P];if(!r[M]&&!(S&&S[M])&&!(E&&E[M])&&!(C&&C[M])){var D=h(w,M);try{c(_,M,D)}catch{}}}}return _}return af=b,af}var Zk=Kk();const Jk=zp(Zk);var kn={};function xr(){return(xr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var H0=function(t,e){for(var r=[t[0]],i=0,s=e.length;i<s;i+=1)r.push(e[i],t[i+1]);return r},Qf=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!zx.typeOf(t)},Cu=Object.freeze([]),ei=Object.freeze({});function ia(t){return typeof t=="function"}function Y0(t){return t.displayName||t.name||"Component"}function Bp(t){return t&&typeof t.styledComponentId=="string"}var Mo=typeof process<"u"&&kn!==void 0&&(kn.REACT_APP_SC_ATTR||kn.SC_ATTR)||"data-styled",Vp=typeof window<"u"&&"HTMLElement"in window,e2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&(kn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==""?kn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kn.REACT_APP_SC_DISABLE_SPEEDY:kn.SC_DISABLE_SPEEDY!==void 0&&kn.SC_DISABLE_SPEEDY!==""&&kn.SC_DISABLE_SPEEDY!=="false"&&kn.SC_DISABLE_SPEEDY));function ga(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var t2=function(){function t(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var e=t.prototype;return e.indexOfGroup=function(r){for(var i=0,s=0;s<r;s++)i+=this.groupSizes[s];return i},e.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var s=this.groupSizes,l=s.length,u=l;r>=u;)(u<<=1)<0&&ga(16,""+r);this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var c=l;c<u;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(r+1),p=0,h=i.length;p<h;p++)this.tag.insertRule(f,i[p])&&(this.groupSizes[r]++,f++)},e.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],s=this.indexOfGroup(r),l=s+i;this.groupSizes[r]=0;for(var u=s;u<l;u++)this.tag.deleteRule(s)}},e.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var s=this.groupSizes[r],l=this.indexOfGroup(r),u=l+s,c=l;c<u;c++)i+=this.tag.getRule(c)+`/*!sc*/
`;return i},t}(),mu=new Map,Pu=new Map,qs=1,Bl=function(t){if(mu.has(t))return mu.get(t);for(;Pu.has(qs);)qs++;var e=qs++;return mu.set(t,e),Pu.set(e,t),e},n2=function(t){return Pu.get(t)},r2=function(t,e){e>=qs&&(qs=e+1),mu.set(t,e),Pu.set(e,t)},i2="style["+Mo+'][data-styled-version="5.3.11"]',o2=new RegExp("^"+Mo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),s2=function(t,e,r){for(var i,s=r.split(","),l=0,u=s.length;l<u;l++)(i=s[l])&&t.registerName(e,i)},a2=function(t,e){for(var r=(e.textContent||"").split(`/*!sc*/
`),i=[],s=0,l=r.length;s<l;s++){var u=r[s].trim();if(u){var c=u.match(o2);if(c){var f=0|parseInt(c[1],10),p=c[2];f!==0&&(r2(p,f),s2(t,p,c[3]),t.getTag().insertRules(f,i)),i.length=0}else i.push(u)}}},l2=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Fx=function(t){var e=document.head,r=t||e,i=document.createElement("style"),s=function(c){for(var f=c.childNodes,p=f.length;p>=0;p--){var h=f[p];if(h&&h.nodeType===1&&h.hasAttribute(Mo))return h}}(r),l=s!==void 0?s.nextSibling:null;i.setAttribute(Mo,"active"),i.setAttribute("data-styled-version","5.3.11");var u=l2();return u&&i.setAttribute("nonce",u),r.insertBefore(i,l),i},u2=function(){function t(r){var i=this.element=Fx(r);i.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var l=document.styleSheets,u=0,c=l.length;u<c;u++){var f=l[u];if(f.ownerNode===s)return f}ga(17)}(i),this.length=0}var e=t.prototype;return e.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},e.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.getRule=function(r){var i=this.sheet.cssRules[r];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},t}(),c2=function(){function t(r){var i=this.element=Fx(r);this.nodes=i.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(r,i){if(r<=this.length&&r>=0){var s=document.createTextNode(i),l=this.nodes[r];return this.element.insertBefore(s,l||null),this.length++,!0}return!1},e.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},t}(),d2=function(){function t(r){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},e.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.getRule=function(r){return r<this.length?this.rules[r]:""},t}(),q0=Vp,f2={isServer:!Vp,useCSSOMInjection:!e2},Nx=function(){function t(r,i,s){r===void 0&&(r=ei),i===void 0&&(i={}),this.options=xr({},f2,{},r),this.gs=i,this.names=new Map(s),this.server=!!r.isServer,!this.server&&Vp&&q0&&(q0=!1,function(l){for(var u=document.querySelectorAll(i2),c=0,f=u.length;c<f;c++){var p=u[c];p&&p.getAttribute(Mo)!=="active"&&(a2(l,p),p.parentNode&&p.parentNode.removeChild(p))}}(this))}t.registerId=function(r){return Bl(r)};var e=t.prototype;return e.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new t(xr({},this.options,{},r),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.getTag=function(){return this.tag||(this.tag=(s=(i=this.options).isServer,l=i.useCSSOMInjection,u=i.target,r=s?new d2(u):l?new u2(u):new c2(u),new t2(r)));var r,i,s,l,u},e.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},e.registerName=function(r,i){if(Bl(r),this.names.has(r))this.names.get(r).add(i);else{var s=new Set;s.add(i),this.names.set(r,s)}},e.insertRules=function(r,i,s){this.registerName(r,i),this.getTag().insertRules(Bl(r),s)},e.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.clearRules=function(r){this.getTag().clearGroup(Bl(r)),this.clearNames(r)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(r){for(var i=r.getTag(),s=i.length,l="",u=0;u<s;u++){var c=n2(u);if(c!==void 0){var f=r.names.get(c),p=i.getGroup(u);if(f&&p&&f.size){var h=Mo+".g"+u+'[id="'+c+'"]',y="";f!==void 0&&f.forEach(function(x){x.length>0&&(y+=x+",")}),l+=""+p+h+'{content:"'+y+`"}/*!sc*/
`}}}return l}(this)},t}(),p2=/(a)(d)/gi,G0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kf(t){var e,r="";for(e=Math.abs(t);e>52;e=e/52|0)r=G0(e%52)+r;return(G0(e%52)+r).replace(p2,"$1-$2")}var So=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Bx=function(t){return So(5381,t)};function h2(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(ia(r)&&!Bp(r))return!1}return!0}var m2=Bx("5.3.11"),g2=function(){function t(e,r,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&h2(e),this.componentId=r,this.baseHash=So(m2,r),this.baseStyle=i,Nx.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,i){var s=this.componentId,l=[];if(this.baseStyle&&l.push(this.baseStyle.generateAndInjectStyles(e,r,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&r.hasNameForId(s,this.staticRulesId))l.push(this.staticRulesId);else{var u=Do(this.rules,e,r,i).join(""),c=Kf(So(this.baseHash,u)>>>0);if(!r.hasNameForId(s,c)){var f=i(u,"."+c,void 0,s);r.insertRules(s,c,f)}l.push(c),this.staticRulesId=c}else{for(var p=this.rules.length,h=So(this.baseHash,i.hash),y="",x=0;x<p;x++){var b=this.rules[x];if(typeof b=="string")y+=b;else if(b){var _=Do(b,e,r,i),w=Array.isArray(_)?_.join(""):_;h=So(h,w+x),y+=w}}if(y){var S=Kf(h>>>0);if(!r.hasNameForId(s,S)){var j=i(y,"."+S,void 0,s);r.insertRules(s,S,j)}l.push(S)}}return l.join(" ")},t}(),y2=/^\s*\/\/.*$/gm,v2=[":","[",".","#"];function x2(t){var e,r,i,s,l=ei,u=l.options,c=u===void 0?ei:u,f=l.plugins,p=f===void 0?Cu:f,h=new Hk(c),y=[],x=function(w){function S(j){if(j)try{w(j+"}")}catch{}}return function(j,T,C,E,P,M,D,F,B,Y){switch(j){case 1:if(B===0&&T.charCodeAt(0)===64)return w(T+";"),"";break;case 2:if(F===0)return T+"/*|*/";break;case 3:switch(F){case 102:case 112:return w(C[0]+T),"";default:return T+(Y===0?"/*|*/":"")}case-2:T.split("/*|*/}").forEach(S)}}}(function(w){y.push(w)}),b=function(w,S,j){return S===0&&v2.indexOf(j[r.length])!==-1||j.match(s)?w:"."+e};function _(w,S,j,T){T===void 0&&(T="&");var C=w.replace(y2,""),E=S&&j?j+" "+S+" { "+C+" }":C;return e=T,r=S,i=new RegExp("\\"+r+"\\b","g"),s=new RegExp("(\\"+r+"\\b){2,}"),h(j||!S?"":S,E)}return h.use([].concat(p,[function(w,S,j){w===2&&j.length&&j[0].lastIndexOf(r)>0&&(j[0]=j[0].replace(i,b))},x,function(w){if(w===-2){var S=y;return y=[],S}}])),_.hash=p.length?p.reduce(function(w,S){return S.name||ga(15),So(w,S.name)},5381).toString():"",_}var Vx=Pe.createContext();Vx.Consumer;var Wx=Pe.createContext(),w2=(Wx.Consumer,new Nx),Zf=x2();function b2(){return R.useContext(Vx)||w2}function _2(){return R.useContext(Wx)||Zf}var S2=function(){function t(e,r){var i=this;this.inject=function(s,l){l===void 0&&(l=Zf);var u=i.name+l.hash;s.hasNameForId(i.id,u)||s.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.toString=function(){return ga(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=r}return t.prototype.getName=function(e){return e===void 0&&(e=Zf),this.name+e.hash},t}(),k2=/([A-Z])/,C2=/([A-Z])/g,P2=/^ms-/,T2=function(t){return"-"+t.toLowerCase()};function X0(t){return k2.test(t)?t.replace(C2,T2).replace(P2,"-ms-"):t}var Q0=function(t){return t==null||t===!1||t===""};function Do(t,e,r,i){if(Array.isArray(t)){for(var s,l=[],u=0,c=t.length;u<c;u+=1)(s=Do(t[u],e,r,i))!==""&&(Array.isArray(s)?l.push.apply(l,s):l.push(s));return l}if(Q0(t))return"";if(Bp(t))return"."+t.styledComponentId;if(ia(t)){if(typeof(p=t)!="function"||p.prototype&&p.prototype.isReactComponent||!e)return t;var f=t(e);return Do(f,e,r,i)}var p;return t instanceof S2?r?(t.inject(r,i),t.getName(i)):t:Qf(t)?function h(y,x){var b,_,w=[];for(var S in y)y.hasOwnProperty(S)&&!Q0(y[S])&&(Array.isArray(y[S])&&y[S].isCss||ia(y[S])?w.push(X0(S)+":",y[S],";"):Qf(y[S])?w.push.apply(w,h(y[S],S)):w.push(X0(S)+": "+(b=S,(_=y[S])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||b in Yk||b.startsWith("--")?String(_).trim():_+"px")+";"));return x?[x+" {"].concat(w,["}"]):w}(t):t.toString()}var K0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function j2(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return ia(t)||Qf(t)?K0(Do(H0(Cu,[t].concat(r)))):r.length===0&&t.length===1&&typeof t[0]=="string"?t:K0(Do(H0(t,r)))}var E2=function(t,e,r){return r===void 0&&(r=ei),t.theme!==r.theme&&t.theme||e||r.theme},O2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,A2=/(^-|-$)/g;function lf(t){return t.replace(O2,"-").replace(A2,"")}var R2=function(t){return Kf(Bx(t)>>>0)};function Vl(t){return typeof t=="string"&&!0}var Jf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},L2=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function M2(t,e,r){var i=t[r];Jf(e)&&Jf(i)?Ux(i,e):t[r]=e}function Ux(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];for(var s=0,l=r;s<l.length;s++){var u=l[s];if(Jf(u))for(var c in u)L2(c)&&M2(t,u[c],c)}return t}var $x=Pe.createContext();$x.Consumer;var uf={};function Hx(t,e,r){var i=Bp(t),s=!Vl(t),l=e.attrs,u=l===void 0?Cu:l,c=e.componentId,f=c===void 0?function(T,C){var E=typeof T!="string"?"sc":lf(T);uf[E]=(uf[E]||0)+1;var P=E+"-"+R2("5.3.11"+E+uf[E]);return C?C+"-"+P:P}(e.displayName,e.parentComponentId):c,p=e.displayName,h=p===void 0?function(T){return Vl(T)?"styled."+T:"Styled("+Y0(T)+")"}(t):p,y=e.displayName&&e.componentId?lf(e.displayName)+"-"+e.componentId:e.componentId||f,x=i&&t.attrs?Array.prototype.concat(t.attrs,u).filter(Boolean):u,b=e.shouldForwardProp;i&&t.shouldForwardProp&&(b=e.shouldForwardProp?function(T,C,E){return t.shouldForwardProp(T,C,E)&&e.shouldForwardProp(T,C,E)}:t.shouldForwardProp);var _,w=new g2(r,y,i?t.componentStyle:void 0),S=w.isStatic&&u.length===0,j=function(T,C){return function(E,P,M,D){var F=E.attrs,B=E.componentStyle,Y=E.defaultProps,G=E.foldedComponentIds,z=E.shouldForwardProp,Z=E.styledComponentId,X=E.target,ae=function(ie,W,fe){ie===void 0&&(ie=ei);var q=xr({},W,{theme:ie}),me={};return fe.forEach(function(ve){var _e,Se,Ze,gt=ve;for(_e in ia(gt)&&(gt=gt(q)),gt)q[_e]=me[_e]=_e==="className"?(Se=me[_e],Ze=gt[_e],Se&&Ze?Se+" "+Ze:Se||Ze):gt[_e]}),[q,me]}(E2(P,R.useContext($x),Y)||ei,P,F),ce=ae[0],se=ae[1],K=function(ie,W,fe,q){var me=b2(),ve=_2(),_e=W?ie.generateAndInjectStyles(ei,me,ve):ie.generateAndInjectStyles(fe,me,ve);return _e}(B,D,ce),le=M,re=se.$as||P.$as||se.as||P.as||X,L=Vl(re),V=se!==P?xr({},P,{},se):P,Q={};for(var J in V)J[0]!=="$"&&J!=="as"&&(J==="forwardedAs"?Q.as=V[J]:(z?z(J,V0,re):!L||V0(J))&&(Q[J]=V[J]));return P.style&&se.style!==P.style&&(Q.style=xr({},P.style,{},se.style)),Q.className=Array.prototype.concat(G,Z,K!==Z?K:null,P.className,se.className).filter(Boolean).join(" "),Q.ref=le,R.createElement(re,Q)}(_,T,C,S)};return j.displayName=h,(_=Pe.forwardRef(j)).attrs=x,_.componentStyle=w,_.displayName=h,_.shouldForwardProp=b,_.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Cu,_.styledComponentId=y,_.target=i?t.target:t,_.withComponent=function(T){var C=e.componentId,E=function(M,D){if(M==null)return{};var F,B,Y={},G=Object.keys(M);for(B=0;B<G.length;B++)F=G[B],D.indexOf(F)>=0||(Y[F]=M[F]);return Y}(e,["componentId"]),P=C&&C+"-"+(Vl(T)?T:lf(Y0(T)));return Hx(T,xr({},E,{attrs:x,componentId:P}),r)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=i?Ux({},t.defaultProps,T):T}}),Object.defineProperty(_,"toString",{value:function(){return"."+_.styledComponentId}}),s&&Jk(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var O=function(t){return function e(r,i,s){if(s===void 0&&(s=ei),!zx.isValidElementType(i))return ga(1,String(i));var l=function(){return r(i,s,j2.apply(void 0,arguments))};return l.withConfig=function(u){return e(r,i,xr({},s,{},u))},l.attrs=function(u){return e(r,i,xr({},s,{attrs:Array.prototype.concat(s.attrs,u).filter(Boolean)}))},l}(Hx,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){O[t]=O(t)});var Ue={},Wl={},Ul={},$l={},cf,Z0;function D2(){if(Z0)return cf;Z0=1;var t="Expected a function",e=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,f=typeof Fl=="object"&&Fl&&Fl.Object===Object&&Fl,p=typeof self=="object"&&self&&self.Object===Object&&self,h=f||p||Function("return this")(),y=Object.prototype,x=y.toString,b=Math.max,_=Math.min,w=function(){return h.Date.now()};function S(M,D,F){var B,Y,G,z,Z,X,ae=0,ce=!1,se=!1,K=!0;if(typeof M!="function")throw new TypeError(t);D=P(D)||0,T(F)&&(ce=!!F.leading,se="maxWait"in F,G=se?b(P(F.maxWait)||0,D):G,K="trailing"in F?!!F.trailing:K);function le(q){var me=B,ve=Y;return B=Y=void 0,ae=q,z=M.apply(ve,me),z}function re(q){return ae=q,Z=setTimeout(Q,D),ce?le(q):z}function L(q){var me=q-X,ve=q-ae,_e=D-me;return se?_(_e,G-ve):_e}function V(q){var me=q-X,ve=q-ae;return X===void 0||me>=D||me<0||se&&ve>=G}function Q(){var q=w();if(V(q))return J(q);Z=setTimeout(Q,L(q))}function J(q){return Z=void 0,K&&B?le(q):(B=Y=void 0,z)}function ie(){Z!==void 0&&clearTimeout(Z),ae=0,B=X=Y=Z=void 0}function W(){return Z===void 0?z:J(w())}function fe(){var q=w(),me=V(q);if(B=arguments,Y=this,X=q,me){if(Z===void 0)return re(X);if(se)return Z=setTimeout(Q,D),le(X)}return Z===void 0&&(Z=setTimeout(Q,D)),z}return fe.cancel=ie,fe.flush=W,fe}function j(M,D,F){var B=!0,Y=!0;if(typeof M!="function")throw new TypeError(t);return T(F)&&(B="leading"in F?!!F.leading:B,Y="trailing"in F?!!F.trailing:Y),S(M,D,{leading:B,maxWait:D,trailing:Y})}function T(M){var D=typeof M;return!!M&&(D=="object"||D=="function")}function C(M){return!!M&&typeof M=="object"}function E(M){return typeof M=="symbol"||C(M)&&x.call(M)==r}function P(M){if(typeof M=="number")return M;if(E(M))return e;if(T(M)){var D=typeof M.valueOf=="function"?M.valueOf():M;M=T(D)?D+"":D}if(typeof M!="string")return M===0?M:+M;M=M.replace(i,"");var F=l.test(M);return F||u.test(M)?c(M.slice(2),F?2:8):s.test(M)?e:+M}return cf=j,cf}var Rs={},J0;function Wp(){if(J0)return Rs;J0=1,Object.defineProperty(Rs,"__esModule",{value:!0}),Rs.addPassiveEventListener=function(r,i,s){var l=s.name;l||(l=i,console.warn("Listener must be a named function.")),t.has(i)||t.set(i,new Set);var u=t.get(i);if(!u.has(l)){var c=function(){var f=!1;try{var p=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,p)}catch{}return f}();r.addEventListener(i,s,c?{passive:!0}:!1),u.add(l)}},Rs.removePassiveEventListener=function(r,i,s){r.removeEventListener(i,s),t.get(i).delete(s.name||i)};var t=new Map;return Rs}var ey;function Up(){if(ey)return $l;ey=1,Object.defineProperty($l,"__esModule",{value:!0});var t=D2(),e=i(t),r=Wp();function i(u){return u&&u.__esModule?u:{default:u}}var s=function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,e.default)(c,f)},l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(c,f){if(c){var p=s(function(h){l.scrollHandler(c)},f);return l.scrollSpyContainers.push(c),(0,r.addPassiveEventListener)(c,"scroll",p),function(){(0,r.removePassiveEventListener)(c,"scroll",p),l.scrollSpyContainers.splice(l.scrollSpyContainers.indexOf(c),1)}}return function(){}},isMounted:function(c){return l.scrollSpyContainers.indexOf(c)!==-1},currentPositionX:function(c){if(c===document){var f=window.scrollY!==void 0,p=(document.compatMode||"")==="CSS1Compat";return f?window.scrollX:p?document.documentElement.scrollLeft:document.body.scrollLeft}else return c.scrollLeft},currentPositionY:function(c){if(c===document){var f=window.scrollX!==void 0,p=(document.compatMode||"")==="CSS1Compat";return f?window.scrollY:p?document.documentElement.scrollTop:document.body.scrollTop}else return c.scrollTop},scrollHandler:function(c){var f=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(c)].spyCallbacks||[];f.forEach(function(p){return p(l.currentPositionX(c),l.currentPositionY(c))})},addStateHandler:function(c){l.spySetState.push(c)},addSpyHandler:function(c,f){var p=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(f)];p.spyCallbacks||(p.spyCallbacks=[]),p.spyCallbacks.push(c)},updateStates:function(){l.spySetState.forEach(function(c){return c()})},unmount:function(c,f){l.scrollSpyContainers.forEach(function(p){return p.spyCallbacks&&p.spyCallbacks.length&&p.spyCallbacks.indexOf(f)>-1&&p.spyCallbacks.splice(p.spyCallbacks.indexOf(f),1)}),l.spySetState&&l.spySetState.length&&l.spySetState.indexOf(c)>-1&&l.spySetState.splice(l.spySetState.indexOf(c),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach(function(c){return l.scrollHandler(c)})}};return $l.default=l,$l}var Hl={},Yl={},ty;function qu(){if(ty)return Yl;ty=1,Object.defineProperty(Yl,"__esModule",{value:!0});var t=function(c,f){var p=c.indexOf("#")===0?c.substring(1):c,h=p?"#"+p:"",y=window&&window.location,x=h?y.pathname+y.search+h:y.pathname+y.search;f?history.pushState(history.state,"",x):history.replaceState(history.state,"",x)},e=function(){return window.location.hash.replace(/^#/,"")},r=function(c){return function(f){return c.contains?c!=f&&c.contains(f):!!(c.compareDocumentPosition(f)&16)}},i=function(c){return getComputedStyle(c).position!=="static"},s=function(c,f){for(var p=c.offsetTop,h=c.offsetParent;h&&!f(h);)p+=h.offsetTop,h=h.offsetParent;return{offsetTop:p,offsetParent:h}},l=function(c,f,p){if(p)return c===document?f.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(c).position!=="static"?f.offsetLeft:f.offsetLeft-c.offsetLeft;if(c===document)return f.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(i(c)){if(f.offsetParent!==c){var h=function(S){return S===c||S===document},y=s(f,h),x=y.offsetTop,b=y.offsetParent;if(b!==c)throw new Error("Seems containerElement is not an ancestor of the Element");return x}return f.offsetTop}if(f.offsetParent===c.offsetParent)return f.offsetTop-c.offsetTop;var _=function(S){return S===document};return s(f,_).offsetTop-s(c,_).offsetTop};return Yl.default={updateHash:t,getHash:e,filterElementInContainer:r,scrollOffset:l},Yl}var ql={},Gl={},ny;function I2(){return ny||(ny=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),Gl}var Xl={},ry;function z2(){if(ry)return Xl;ry=1,Object.defineProperty(Xl,"__esModule",{value:!0});var t=Wp(),e=["mousedown","wheel","touchmove","keydown"];return Xl.default={subscribe:function(i){return typeof document<"u"&&e.forEach(function(s){return(0,t.addPassiveEventListener)(document,s,i)})}},Xl}var Ql={},iy;function $p(){if(iy)return Ql;iy=1,Object.defineProperty(Ql,"__esModule",{value:!0});var t={registered:{},scrollEvent:{register:function(r,i){t.registered[r]=i},remove:function(r){t.registered[r]=null}}};return Ql.default=t,Ql}var oy;function Yx(){if(oy)return ql;oy=1,Object.defineProperty(ql,"__esModule",{value:!0});var t=Object.assign||function(Y){for(var G=1;G<arguments.length;G++){var z=arguments[G];for(var Z in z)Object.prototype.hasOwnProperty.call(z,Z)&&(Y[Z]=z[Z])}return Y},e=qu();f(e);var r=I2(),i=f(r),s=z2(),l=f(s),u=$p(),c=f(u);function f(Y){return Y&&Y.__esModule?Y:{default:Y}}var p=function(G){return i.default[G.smooth]||i.default.defaultEasing},h=function(G){return typeof G=="function"?G:function(){return G}},y=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},x=function(){return y()||function(Y,G,z){window.setTimeout(Y,z||1e3/60,new Date().getTime())}}(),b=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},_=function(G){var z=G.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollLeft;var Z=window.pageXOffset!==void 0,X=(document.compatMode||"")==="CSS1Compat";return Z?window.pageXOffset:X?document.documentElement.scrollLeft:document.body.scrollLeft},w=function(G){var z=G.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollTop;var Z=window.pageXOffset!==void 0,X=(document.compatMode||"")==="CSS1Compat";return Z?window.pageYOffset:X?document.documentElement.scrollTop:document.body.scrollTop},S=function(G){var z=G.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollWidth-z.offsetWidth;var Z=document.body,X=document.documentElement;return Math.max(Z.scrollWidth,Z.offsetWidth,X.clientWidth,X.scrollWidth,X.offsetWidth)},j=function(G){var z=G.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollHeight-z.offsetHeight;var Z=document.body,X=document.documentElement;return Math.max(Z.scrollHeight,Z.offsetHeight,X.clientHeight,X.scrollHeight,X.offsetHeight)},T=function Y(G,z,Z){var X=z.data;if(!z.ignoreCancelEvents&&X.cancel){c.default.registered.end&&c.default.registered.end(X.to,X.target,X.currentPositionY);return}if(X.delta=Math.round(X.targetPosition-X.startPosition),X.start===null&&(X.start=Z),X.progress=Z-X.start,X.percent=X.progress>=X.duration?1:G(X.progress/X.duration),X.currentPosition=X.startPosition+Math.ceil(X.delta*X.percent),X.containerElement&&X.containerElement!==document&&X.containerElement!==document.body?z.horizontal?X.containerElement.scrollLeft=X.currentPosition:X.containerElement.scrollTop=X.currentPosition:z.horizontal?window.scrollTo(X.currentPosition,0):window.scrollTo(0,X.currentPosition),X.percent<1){var ae=Y.bind(null,G,z);x.call(window,ae);return}c.default.registered.end&&c.default.registered.end(X.to,X.target,X.currentPosition)},C=function(G){G.data.containerElement=G?G.containerId?document.getElementById(G.containerId):G.container&&G.container.nodeType?G.container:document:null},E=function(G,z,Z,X){z.data=z.data||b(),window.clearTimeout(z.data.delayTimeout);var ae=function(){z.data.cancel=!0};if(l.default.subscribe(ae),C(z),z.data.start=null,z.data.cancel=!1,z.data.startPosition=z.horizontal?_(z):w(z),z.data.targetPosition=z.absolute?G:G+z.data.startPosition,z.data.startPosition===z.data.targetPosition){c.default.registered.end&&c.default.registered.end(z.data.to,z.data.target,z.data.currentPosition);return}z.data.delta=Math.round(z.data.targetPosition-z.data.startPosition),z.data.duration=h(z.duration)(z.data.delta),z.data.duration=isNaN(parseFloat(z.data.duration))?1e3:parseFloat(z.data.duration),z.data.to=Z,z.data.target=X;var ce=p(z),se=T.bind(null,ce,z);if(z&&z.delay>0){z.data.delayTimeout=window.setTimeout(function(){c.default.registered.begin&&c.default.registered.begin(z.data.to,z.data.target),x.call(window,se)},z.delay);return}c.default.registered.begin&&c.default.registered.begin(z.data.to,z.data.target),x.call(window,se)},P=function(G){return G=t({},G),G.data=G.data||b(),G.absolute=!0,G},M=function(G){E(0,P(G))},D=function(G,z){E(G,P(z))},F=function(G){G=P(G),C(G),E(G.horizontal?S(G):j(G),G)},B=function(G,z){z=P(z),C(z);var Z=z.horizontal?_(z):w(z);E(G+Z,z)};return ql.default={animateTopScroll:E,getAnimationType:p,scrollToTop:M,scrollToBottom:F,scrollTo:D,scrollMore:B},ql}var sy;function Gu(){if(sy)return Hl;sy=1,Object.defineProperty(Hl,"__esModule",{value:!0});var t=Object.assign||function(h){for(var y=1;y<arguments.length;y++){var x=arguments[y];for(var b in x)Object.prototype.hasOwnProperty.call(x,b)&&(h[b]=x[b])}return h},e=qu(),r=c(e),i=Yx(),s=c(i),l=$p(),u=c(l);function c(h){return h&&h.__esModule?h:{default:h}}var f={},p=void 0;return Hl.default={unmount:function(){f={}},register:function(y,x){f[y]=x},unregister:function(y){delete f[y]},get:function(y){return f[y]||document.getElementById(y)||document.getElementsByName(y)[0]||document.getElementsByClassName(y)[0]},setActiveLink:function(y){return p=y},getActiveLink:function(){return p},scrollTo:function(y,x){var b=this.get(y);if(!b){console.warn("target Element not found");return}x=t({},x,{absolute:!1});var _=x.containerId,w=x.container,S=void 0;_?S=document.getElementById(_):w&&w.nodeType?S=w:S=document,x.absolute=!0;var j=x.horizontal,T=r.default.scrollOffset(S,b,j)+(x.offset||0);if(!x.smooth){u.default.registered.begin&&u.default.registered.begin(y,b),S===document?x.horizontal?window.scrollTo(T,0):window.scrollTo(0,T):S.scrollTop=T,u.default.registered.end&&u.default.registered.end(y,b);return}s.default.animateTopScroll(T,x,y,b)}},Hl}var df={exports:{}},ff,ay;function F2(){if(ay)return ff;ay=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ff=t,ff}var pf,ly;function N2(){if(ly)return pf;ly=1;var t=F2();function e(){}function r(){}return r.resetWarningCache=e,pf=function(){function i(u,c,f,p,h,y){if(y!==t){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}i.isRequired=i;function s(){return i}var l={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:s,element:i,elementType:i,instanceOf:s,node:i,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:e};return l.PropTypes=l,l},pf}var uy;function ya(){return uy||(uy=1,df.exports=N2()()),df.exports}var Kl={},cy;function qx(){if(cy)return Kl;cy=1,Object.defineProperty(Kl,"__esModule",{value:!0}),Wp();var t=qu(),e=r(t);function r(s){return s&&s.__esModule?s:{default:s}}var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(l){this.scroller=l,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(l,u){this.containers[l]=u},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var l=this,u=this.getHash();u?window.setTimeout(function(){l.scrollTo(u,!0),l.initialized=!0},10):this.initialized=!0},scrollTo:function(l,u){var c=this.scroller,f=c.get(l);if(f&&(u||l!==c.getActiveLink())){var p=this.containers[l]||document;c.scrollTo(l,{container:p})}},getHash:function(){return e.default.getHash()},changeHash:function(l,u){this.isInitialized()&&e.default.getHash()!==l&&e.default.updateHash(l,u)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Kl.default=i,Kl}var dy;function Hp(){if(dy)return Ul;dy=1,Object.defineProperty(Ul,"__esModule",{value:!0});var t=Object.assign||function(j){for(var T=1;T<arguments.length;T++){var C=arguments[T];for(var E in C)Object.prototype.hasOwnProperty.call(C,E)&&(j[E]=C[E])}return j},e=function(){function j(T,C){for(var E=0;E<C.length;E++){var P=C[E];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(T,P.key,P)}}return function(T,C,E){return C&&j(T.prototype,C),E&&j(T,E),T}}(),r=Cr(),i=x(r),s=Up(),l=x(s),u=Gu(),c=x(u),f=ya(),p=x(f),h=qx(),y=x(h);function x(j){return j&&j.__esModule?j:{default:j}}function b(j,T){if(!(j instanceof T))throw new TypeError("Cannot call a class as a function")}function _(j,T){if(!j)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T&&(typeof T=="object"||typeof T=="function")?T:j}function w(j,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof T);j.prototype=Object.create(T&&T.prototype,{constructor:{value:j,enumerable:!1,writable:!0,configurable:!0}}),T&&(Object.setPrototypeOf?Object.setPrototypeOf(j,T):j.__proto__=T)}var S={to:p.default.string.isRequired,containerId:p.default.string,container:p.default.object,activeClass:p.default.string,activeStyle:p.default.object,spy:p.default.bool,horizontal:p.default.bool,smooth:p.default.oneOfType([p.default.bool,p.default.string]),offset:p.default.number,delay:p.default.number,isDynamic:p.default.bool,onClick:p.default.func,duration:p.default.oneOfType([p.default.number,p.default.func]),absolute:p.default.bool,onSetActive:p.default.func,onSetInactive:p.default.func,ignoreCancelEvents:p.default.bool,hashSpy:p.default.bool,saveHashHistory:p.default.bool,spyThrottle:p.default.number};return Ul.default=function(j,T){var C=T||c.default,E=function(M){w(D,M);function D(F){b(this,D);var B=_(this,(D.__proto__||Object.getPrototypeOf(D)).call(this,F));return P.call(B),B.state={active:!1},B.beforeUnmountCallbacks=[],B}return e(D,[{key:"getScrollSpyContainer",value:function(){var B=this.props.containerId,Y=this.props.container;return B&&!Y?document.getElementById(B):Y&&Y.nodeType?Y:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var B=this.getScrollSpyContainer();if(!l.default.isMounted(B)){var Y=l.default.mount(B,this.props.spyThrottle);this.beforeUnmountCallbacks.push(Y)}this.props.hashSpy&&(y.default.isMounted()||y.default.mount(C),y.default.mapContainer(this.props.to,B)),l.default.addSpyHandler(this.spyHandler,B),this.setState({container:B})}}},{key:"componentWillUnmount",value:function(){l.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(B){return B()})}},{key:"render",value:function(){var B="";this.state&&this.state.active?B=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():B=this.props.className;var Y={};this.state&&this.state.active?Y=t({},this.props.style,this.props.activeStyle):Y=t({},this.props.style);var G=t({},this.props);for(var z in S)G.hasOwnProperty(z)&&delete G[z];return G.className=B,G.style=Y,G.onClick=this.handleClick,i.default.createElement(j,G)}}]),D}(i.default.PureComponent),P=function(){var D=this;this.scrollTo=function(F,B){C.scrollTo(F,t({},D.state,B))},this.handleClick=function(F){D.props.onClick&&D.props.onClick(F),F.stopPropagation&&F.stopPropagation(),F.preventDefault&&F.preventDefault(),D.scrollTo(D.props.to,D.props)},this.spyHandler=function(F,B){var Y=D.getScrollSpyContainer();if(!(y.default.isMounted()&&!y.default.isInitialized())){var G=D.props.horizontal,z=D.props.to,Z=null,X=void 0,ae=void 0;if(G){var ce=0,se=0,K=0;if(Y.getBoundingClientRect){var le=Y.getBoundingClientRect();K=le.left}if(!Z||D.props.isDynamic){if(Z=C.get(z),!Z)return;var re=Z.getBoundingClientRect();ce=re.left-K+F,se=ce+re.width}var L=F-D.props.offset;X=L>=Math.floor(ce)&&L<Math.floor(se),ae=L<Math.floor(ce)||L>=Math.floor(se)}else{var V=0,Q=0,J=0;if(Y.getBoundingClientRect){var ie=Y.getBoundingClientRect();J=ie.top}if(!Z||D.props.isDynamic){if(Z=C.get(z),!Z)return;var W=Z.getBoundingClientRect();V=W.top-J+B,Q=V+W.height}var fe=B-D.props.offset;X=fe>=Math.floor(V)&&fe<Math.floor(Q),ae=fe<Math.floor(V)||fe>=Math.floor(Q)}var q=C.getActiveLink();if(ae){if(z===q&&C.setActiveLink(void 0),D.props.hashSpy&&y.default.getHash()===z){var me=D.props.saveHashHistory,ve=me===void 0?!1:me;y.default.changeHash("",ve)}D.props.spy&&D.state.active&&(D.setState({active:!1}),D.props.onSetInactive&&D.props.onSetInactive(z,Z))}if(X&&(q!==z||D.state.active===!1)){C.setActiveLink(z);var _e=D.props.saveHashHistory,Se=_e===void 0?!1:_e;D.props.hashSpy&&y.default.changeHash(z,Se),D.props.spy&&(D.setState({active:!0}),D.props.onSetActive&&D.props.onSetActive(z,Z))}}}};return E.propTypes=S,E.defaultProps={offset:0},E},Ul}var fy;function B2(){if(fy)return Wl;fy=1,Object.defineProperty(Wl,"__esModule",{value:!0});var t=Cr(),e=s(t),r=Hp(),i=s(r);function s(p){return p&&p.__esModule?p:{default:p}}function l(p,h){if(!(p instanceof h))throw new TypeError("Cannot call a class as a function")}function u(p,h){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h&&(typeof h=="object"||typeof h=="function")?h:p}function c(p,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof h);p.prototype=Object.create(h&&h.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),h&&(Object.setPrototypeOf?Object.setPrototypeOf(p,h):p.__proto__=h)}var f=function(p){c(h,p);function h(){var y,x,b,_;l(this,h);for(var w=arguments.length,S=Array(w),j=0;j<w;j++)S[j]=arguments[j];return _=(x=(b=u(this,(y=h.__proto__||Object.getPrototypeOf(h)).call.apply(y,[this].concat(S))),b),b.render=function(){return e.default.createElement("a",b.props,b.props.children)},x),u(b,_)}return h}(e.default.Component);return Wl.default=(0,i.default)(f),Wl}var Zl={},py;function V2(){if(py)return Zl;py=1,Object.defineProperty(Zl,"__esModule",{value:!0});var t=function(){function h(y,x){for(var b=0;b<x.length;b++){var _=x[b];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(y,_.key,_)}}return function(y,x,b){return x&&h(y.prototype,x),b&&h(y,b),y}}(),e=Cr(),r=l(e),i=Hp(),s=l(i);function l(h){return h&&h.__esModule?h:{default:h}}function u(h,y){if(!(h instanceof y))throw new TypeError("Cannot call a class as a function")}function c(h,y){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:h}function f(h,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);h.prototype=Object.create(y&&y.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(h,y):h.__proto__=y)}var p=function(h){f(y,h);function y(){return u(this,y),c(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return t(y,[{key:"render",value:function(){return r.default.createElement("button",this.props,this.props.children)}}]),y}(r.default.Component);return Zl.default=(0,s.default)(p),Zl}var Jl={},eu={},hy;function Gx(){if(hy)return eu;hy=1,Object.defineProperty(eu,"__esModule",{value:!0});var t=Object.assign||function(b){for(var _=1;_<arguments.length;_++){var w=arguments[_];for(var S in w)Object.prototype.hasOwnProperty.call(w,S)&&(b[S]=w[S])}return b},e=function(){function b(_,w){for(var S=0;S<w.length;S++){var j=w[S];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(_,j.key,j)}}return function(_,w,S){return w&&b(_.prototype,w),S&&b(_,S),_}}(),r=Cr(),i=p(r),s=Hu();p(s);var l=Gu(),u=p(l),c=ya(),f=p(c);function p(b){return b&&b.__esModule?b:{default:b}}function h(b,_){if(!(b instanceof _))throw new TypeError("Cannot call a class as a function")}function y(b,_){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:b}function x(b,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);b.prototype=Object.create(_&&_.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(b,_):b.__proto__=_)}return eu.default=function(b){var _=function(w){x(S,w);function S(j){h(this,S);var T=y(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,j));return T.childBindings={domNode:null},T}return e(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(T){this.props.name!==T.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;u.default.unregister(this.props.name)}},{key:"registerElems",value:function(T){u.default.register(T,this.childBindings.domNode)}},{key:"render",value:function(){return i.default.createElement(b,t({},this.props,{parentBindings:this.childBindings}))}}]),S}(i.default.Component);return _.propTypes={name:f.default.string,id:f.default.string},_},eu}var my;function W2(){if(my)return Jl;my=1,Object.defineProperty(Jl,"__esModule",{value:!0});var t=Object.assign||function(b){for(var _=1;_<arguments.length;_++){var w=arguments[_];for(var S in w)Object.prototype.hasOwnProperty.call(w,S)&&(b[S]=w[S])}return b},e=function(){function b(_,w){for(var S=0;S<w.length;S++){var j=w[S];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(_,j.key,j)}}return function(_,w,S){return w&&b(_.prototype,w),S&&b(_,S),_}}(),r=Cr(),i=f(r),s=Gx(),l=f(s),u=ya(),c=f(u);function f(b){return b&&b.__esModule?b:{default:b}}function p(b,_){if(!(b instanceof _))throw new TypeError("Cannot call a class as a function")}function h(b,_){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:b}function y(b,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);b.prototype=Object.create(_&&_.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(b,_):b.__proto__=_)}var x=function(b){y(_,b);function _(){return p(this,_),h(this,(_.__proto__||Object.getPrototypeOf(_)).apply(this,arguments))}return e(_,[{key:"render",value:function(){var S=this,j=t({},this.props);return delete j.name,j.parentBindings&&delete j.parentBindings,i.default.createElement("div",t({},j,{ref:function(C){S.props.parentBindings.domNode=C}}),this.props.children)}}]),_}(i.default.Component);return x.propTypes={name:c.default.string,id:c.default.string},Jl.default=(0,l.default)(x),Jl}var hf,gy;function U2(){if(gy)return hf;gy=1;var t=Object.assign||function(x){for(var b=1;b<arguments.length;b++){var _=arguments[b];for(var w in _)Object.prototype.hasOwnProperty.call(_,w)&&(x[w]=_[w])}return x},e=function(){function x(b,_){for(var w=0;w<_.length;w++){var S=_[w];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(b,S.key,S)}}return function(b,_,w){return _&&x(b.prototype,_),w&&x(b,w),b}}();function r(x,b){if(!(x instanceof b))throw new TypeError("Cannot call a class as a function")}function i(x,b){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:x}function s(x,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);x.prototype=Object.create(b&&b.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(x,b):x.__proto__=b)}var l=Cr();Hu(),qu();var u=Up(),c=Gu(),f=ya(),p=qx(),h={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number},y={Scroll:function(b,_){console.warn("Helpers.Scroll is deprecated since v1.7.0");var w=_||c,S=function(T){s(C,T);function C(E){r(this,C);var P=i(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,E));return j.call(P),P.state={active:!1},P}return e(C,[{key:"getScrollSpyContainer",value:function(){var P=this.props.containerId,M=this.props.container;return P?document.getElementById(P):M&&M.nodeType?M:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var P=this.getScrollSpyContainer();u.isMounted(P)||u.mount(P,this.props.spyThrottle),this.props.hashSpy&&(p.isMounted()||p.mount(w),p.mapContainer(this.props.to,P)),this.props.spy&&u.addStateHandler(this.stateHandler),u.addSpyHandler(this.spyHandler,P),this.setState({container:P})}}},{key:"componentWillUnmount",value:function(){u.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var P="";this.state&&this.state.active?P=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():P=this.props.className;var M=t({},this.props);for(var D in h)M.hasOwnProperty(D)&&delete M[D];return M.className=P,M.onClick=this.handleClick,l.createElement(b,M)}}]),C}(l.Component),j=function(){var C=this;this.scrollTo=function(E,P){w.scrollTo(E,t({},C.state,P))},this.handleClick=function(E){C.props.onClick&&C.props.onClick(E),E.stopPropagation&&E.stopPropagation(),E.preventDefault&&E.preventDefault(),C.scrollTo(C.props.to,C.props)},this.stateHandler=function(){w.getActiveLink()!==C.props.to&&(C.state!==null&&C.state.active&&C.props.onSetInactive&&C.props.onSetInactive(),C.setState({active:!1}))},this.spyHandler=function(E){var P=C.getScrollSpyContainer();if(!(p.isMounted()&&!p.isInitialized())){var M=C.props.to,D=null,F=0,B=0,Y=0;if(P.getBoundingClientRect){var G=P.getBoundingClientRect();Y=G.top}if(!D||C.props.isDynamic){if(D=w.get(M),!D)return;var z=D.getBoundingClientRect();F=z.top-Y+E,B=F+z.height}var Z=E-C.props.offset,X=Z>=Math.floor(F)&&Z<Math.floor(B),ae=Z<Math.floor(F)||Z>=Math.floor(B),ce=w.getActiveLink();if(ae)return M===ce&&w.setActiveLink(void 0),C.props.hashSpy&&p.getHash()===M&&p.changeHash(),C.props.spy&&C.state.active&&(C.setState({active:!1}),C.props.onSetInactive&&C.props.onSetInactive()),u.updateStates();if(X&&ce!==M)return w.setActiveLink(M),C.props.hashSpy&&p.changeHash(M),C.props.spy&&(C.setState({active:!0}),C.props.onSetActive&&C.props.onSetActive(M)),u.updateStates()}}};return S.propTypes=h,S.defaultProps={offset:0},S},Element:function(b){console.warn("Helpers.Element is deprecated since v1.7.0");var _=function(w){s(S,w);function S(j){r(this,S);var T=i(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,j));return T.childBindings={domNode:null},T}return e(S,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(T){this.props.name!==T.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(T){c.register(T,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(b,t({},this.props,{parentBindings:this.childBindings}))}}]),S}(l.Component);return _.propTypes={name:f.string,id:f.string},_}};return hf=y,hf}var yy;function $2(){if(yy)return Ue;yy=1,Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.Helpers=Ue.ScrollElement=Ue.ScrollLink=Ue.animateScroll=Ue.scrollSpy=Ue.Events=Ue.scroller=Ue.Element=Ue.Button=Ue.Link=void 0;var t=B2(),e=E(t),r=V2(),i=E(r),s=W2(),l=E(s),u=Gu(),c=E(u),f=$p(),p=E(f),h=Up(),y=E(h),x=Yx(),b=E(x),_=Hp(),w=E(_),S=Gx(),j=E(S),T=U2(),C=E(T);function E(P){return P&&P.__esModule?P:{default:P}}return Ue.Link=e.default,Ue.Button=i.default,Ue.Element=l.default,Ue.scroller=c.default,Ue.Events=p.default,Ue.scrollSpy=y.default,Ue.animateScroll=b.default,Ue.ScrollLink=w.default,Ue.ScrollElement=j.default,Ue.Helpers=C.default,Ue.default={Link:e.default,Button:i.default,Element:l.default,scroller:c.default,Events:p.default,scrollSpy:y.default,animateScroll:b.default,ScrollLink:w.default,ScrollElement:j.default,Helpers:C.default},Ue}var Gn=$2();const Xx=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Xu=R.createContext({}),Qu=R.createContext(null),Ku=typeof document<"u",Zu=Ku?R.useLayoutEffect:R.useEffect,Qx=R.createContext({strict:!1}),Yp=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),H2="framerAppearId",Kx="data-"+Yp(H2);function Y2(t,e,r,i){const{visualElement:s}=R.useContext(Xu),l=R.useContext(Qx),u=R.useContext(Qu),c=R.useContext(Xx).reducedMotion,f=R.useRef();i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:s,props:r,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const p=f.current;R.useInsertionEffect(()=>{p&&p.update(r,u)});const h=R.useRef(!!(r[Kx]&&!window.HandoffComplete));return Zu(()=>{p&&(p.render(),h.current&&p.animationState&&p.animationState.animateChanges())}),R.useEffect(()=>{p&&(p.updateFeatures(),!h.current&&p.animationState&&p.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),p}function ko(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function q2(t,e,r){return R.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),r&&(typeof r=="function"?r(i):ko(r)&&(r.current=i))},[e])}function oa(t){return typeof t=="string"||Array.isArray(t)}function Ju(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const qp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gp=["initial",...qp];function ec(t){return Ju(t.animate)||Gp.some(e=>oa(t[e]))}function Zx(t){return!!(ec(t)||t.variants)}function G2(t,e){if(ec(t)){const{initial:r,animate:i}=t;return{initial:r===!1||oa(r)?r:void 0,animate:oa(i)?i:void 0}}return t.inherit!==!1?e:{}}function X2(t){const{initial:e,animate:r}=G2(t,R.useContext(Xu));return R.useMemo(()=>({initial:e,animate:r}),[vy(e),vy(r)])}function vy(t){return Array.isArray(t)?t.join(" "):t}const xy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},sa={};for(const t in xy)sa[t]={isEnabled:e=>xy[t].some(r=>!!e[r])};function Q2(t){for(const e in t)sa[e]={...sa[e],...t[e]}}const Xp=R.createContext({}),Jx=R.createContext({}),K2=Symbol.for("motionComponentSymbol");function Z2({preloadedFeatures:t,createVisualElement:e,useRender:r,useVisualState:i,Component:s}){t&&Q2(t);function l(c,f){let p;const h={...R.useContext(Xx),...c,layoutId:J2(c)},{isStatic:y}=h,x=X2(c),b=i(c,y);if(!y&&Ku){x.visualElement=Y2(s,b,h,e);const _=R.useContext(Jx),w=R.useContext(Qx).strict;x.visualElement&&(p=x.visualElement.loadFeatures(h,w,t,_))}return R.createElement(Xu.Provider,{value:x},p&&x.visualElement?R.createElement(p,{visualElement:x.visualElement,...h}):null,r(s,c,q2(b,x.visualElement,f),b,y,x.visualElement))}const u=R.forwardRef(l);return u[K2]=s,u}function J2({layoutId:t}){const e=R.useContext(Xp).id;return e&&t!==void 0?e+"-"+t:t}function eC(t){function e(i,s={}){return Z2(t(i,s))}if(typeof Proxy>"u")return e;const r=new Map;return new Proxy(e,{get:(i,s)=>(r.has(s)||r.set(s,e(s)),r.get(s))})}const tC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qp(t){return typeof t!="string"||t.includes("-")?!1:!!(tC.indexOf(t)>-1||/[A-Z]/.test(t))}const Tu={};function nC(t){Object.assign(Tu,t)}const va=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Hi=new Set(va);function e1(t,{layout:e,layoutId:r}){return Hi.has(t)||t.startsWith("origin")||(e||r!==void 0)&&(!!Tu[t]||t==="opacity")}const Gt=t=>!!(t&&t.getVelocity),rC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},iC=va.length;function oC(t,{enableHardwareAcceleration:e=!0,allowTransformNone:r=!0},i,s){let l="";for(let u=0;u<iC;u++){const c=va[u];if(t[c]!==void 0){const f=rC[c]||c;l+=`${f}(${t[c]}) `}}return e&&!t.z&&(l+="translateZ(0)"),l=l.trim(),s?l=s(t,i?"":l):r&&i&&(l="none"),l}const t1=t=>e=>typeof e=="string"&&e.startsWith(t),n1=t1("--"),ep=t1("var(--"),sC=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,aC=(t,e)=>e&&typeof t=="number"?e.transform(t):t,ii=(t,e,r)=>Math.min(Math.max(r,t),e),Yi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Gs={...Yi,transform:t=>ii(0,1,t)},tu={...Yi,default:1},Xs=t=>Math.round(t*1e5)/1e5,tc=/(-)?([\d]*\.?[\d])+/g,r1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,lC=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function xa(t){return typeof t=="string"}const wa=t=>({test:e=>xa(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Hr=wa("deg"),Jn=wa("%"),be=wa("px"),uC=wa("vh"),cC=wa("vw"),wy={...Jn,parse:t=>Jn.parse(t)/100,transform:t=>Jn.transform(t*100)},by={...Yi,transform:Math.round},i1={borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,size:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,rotate:Hr,rotateX:Hr,rotateY:Hr,rotateZ:Hr,scale:tu,scaleX:tu,scaleY:tu,scaleZ:tu,skew:Hr,skewX:Hr,skewY:Hr,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:Gs,originX:wy,originY:wy,originZ:be,zIndex:by,fillOpacity:Gs,strokeOpacity:Gs,numOctaves:by};function Kp(t,e,r,i){const{style:s,vars:l,transform:u,transformOrigin:c}=t;let f=!1,p=!1,h=!0;for(const y in e){const x=e[y];if(n1(y)){l[y]=x;continue}const b=i1[y],_=aC(x,b);if(Hi.has(y)){if(f=!0,u[y]=_,!h)continue;x!==(b.default||0)&&(h=!1)}else y.startsWith("origin")?(p=!0,c[y]=_):s[y]=_}if(e.transform||(f||i?s.transform=oC(t.transform,r,h,i):s.transform&&(s.transform="none")),p){const{originX:y="50%",originY:x="50%",originZ:b=0}=c;s.transformOrigin=`${y} ${x} ${b}`}}const Zp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function o1(t,e,r){for(const i in e)!Gt(e[i])&&!e1(i,r)&&(t[i]=e[i])}function dC({transformTemplate:t},e,r){return R.useMemo(()=>{const i=Zp();return Kp(i,e,{enableHardwareAcceleration:!r},t),Object.assign({},i.vars,i.style)},[e])}function fC(t,e,r){const i=t.style||{},s={};return o1(s,i,t),Object.assign(s,dC(t,e,r)),t.transformValues?t.transformValues(s):s}function pC(t,e,r){const i={},s=fC(t,e,r);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=s,i}const hC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ju(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||hC.has(t)}let s1=t=>!ju(t);function mC(t){t&&(s1=e=>e.startsWith("on")?!ju(e):t(e))}try{mC(require("@emotion/is-prop-valid").default)}catch{}function gC(t,e,r){const i={};for(const s in t)s==="values"&&typeof t.values=="object"||(s1(s)||r===!0&&ju(s)||!e&&!ju(s)||t.draggable&&s.startsWith("onDrag"))&&(i[s]=t[s]);return i}function _y(t,e,r){return typeof t=="string"?t:be.transform(e+r*t)}function yC(t,e,r){const i=_y(e,t.x,t.width),s=_y(r,t.y,t.height);return`${i} ${s}`}const vC={offset:"stroke-dashoffset",array:"stroke-dasharray"},xC={offset:"strokeDashoffset",array:"strokeDasharray"};function wC(t,e,r=1,i=0,s=!0){t.pathLength=1;const l=s?vC:xC;t[l.offset]=be.transform(-i);const u=be.transform(e),c=be.transform(r);t[l.array]=`${u} ${c}`}function Jp(t,{attrX:e,attrY:r,attrScale:i,originX:s,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:f=0,...p},h,y,x){if(Kp(t,p,h,x),y){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:b,style:_,dimensions:w}=t;b.transform&&(w&&(_.transform=b.transform),delete b.transform),w&&(s!==void 0||l!==void 0||_.transform)&&(_.transformOrigin=yC(w,s!==void 0?s:.5,l!==void 0?l:.5)),e!==void 0&&(b.x=e),r!==void 0&&(b.y=r),i!==void 0&&(b.scale=i),u!==void 0&&wC(b,u,c,f,!1)}const a1=()=>({...Zp(),attrs:{}}),eh=t=>typeof t=="string"&&t.toLowerCase()==="svg";function bC(t,e,r,i){const s=R.useMemo(()=>{const l=a1();return Jp(l,e,{enableHardwareAcceleration:!1},eh(i),t.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};o1(l,t.style,t),s.style={...l,...s.style}}return s}function _C(t=!1){return(r,i,s,{latestValues:l},u)=>{const f=(Qp(r)?bC:pC)(i,l,u,r),h={...gC(i,typeof r=="string",t),...f,ref:s},{children:y}=i,x=R.useMemo(()=>Gt(y)?y.get():y,[y]);return R.createElement(r,{...h,children:x})}}function l1(t,{style:e,vars:r},i,s){Object.assign(t.style,e,s&&s.getProjectionStyles(i));for(const l in r)t.style.setProperty(l,r[l])}const u1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function c1(t,e,r,i){l1(t,e,void 0,i);for(const s in e.attrs)t.setAttribute(u1.has(s)?s:Yp(s),e.attrs[s])}function th(t,e){const{style:r}=t,i={};for(const s in r)(Gt(r[s])||e.style&&Gt(e.style[s])||e1(s,t))&&(i[s]=r[s]);return i}function d1(t,e){const r=th(t,e);for(const i in t)if(Gt(t[i])||Gt(e[i])){const s=va.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}function nh(t,e,r,i={},s={}){return typeof e=="function"&&(e=e(r!==void 0?r:t.custom,i,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(r!==void 0?r:t.custom,i,s)),e}function rh(t){const e=R.useRef(null);return e.current===null&&(e.current=t()),e.current}const Eu=t=>Array.isArray(t),SC=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),kC=t=>Eu(t)?t[t.length-1]||0:t;function gu(t){const e=Gt(t)?t.get():t;return SC(e)?e.toValue():e}function CC({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:r},i,s,l){const u={latestValues:PC(i,s,l,t),renderState:e()};return r&&(u.mount=c=>r(i,c,u)),u}const f1=t=>(e,r)=>{const i=R.useContext(Xu),s=R.useContext(Qu),l=()=>CC(t,e,i,s);return r?l():rh(l)};function PC(t,e,r,i){const s={},l=i(t,{});for(const x in l)s[x]=gu(l[x]);let{initial:u,animate:c}=t;const f=ec(t),p=Zx(t);e&&p&&!f&&t.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let h=r?r.initial===!1:!1;h=h||u===!1;const y=h?c:u;return y&&typeof y!="boolean"&&!Ju(y)&&(Array.isArray(y)?y:[y]).forEach(b=>{const _=nh(t,b);if(!_)return;const{transitionEnd:w,transition:S,...j}=_;for(const T in j){let C=j[T];if(Array.isArray(C)){const E=h?C.length-1:0;C=C[E]}C!==null&&(s[T]=C)}for(const T in w)s[T]=w[T]}),s}const et=t=>t;class Sy{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const r=this.order.indexOf(e);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function TC(t){let e=new Sy,r=new Sy,i=0,s=!1,l=!1;const u=new WeakSet,c={schedule:(f,p=!1,h=!1)=>{const y=h&&s,x=y?e:r;return p&&u.add(f),x.add(f)&&y&&s&&(i=e.order.length),f},cancel:f=>{r.remove(f),u.delete(f)},process:f=>{if(s){l=!0;return}if(s=!0,[e,r]=[r,e],r.clear(),i=e.order.length,i)for(let p=0;p<i;p++){const h=e.order[p];h(f),u.has(h)&&(c.schedule(h),t())}s=!1,l&&(l=!1,c.process(f))}};return c}const nu=["prepare","read","update","preRender","render","postRender"],jC=40;function EC(t,e){let r=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=nu.reduce((y,x)=>(y[x]=TC(()=>r=!0),y),{}),u=y=>l[y].process(s),c=()=>{const y=performance.now();r=!1,s.delta=i?1e3/60:Math.max(Math.min(y-s.timestamp,jC),1),s.timestamp=y,s.isProcessing=!0,nu.forEach(u),s.isProcessing=!1,r&&e&&(i=!1,t(c))},f=()=>{r=!0,i=!0,s.isProcessing||t(c)};return{schedule:nu.reduce((y,x)=>{const b=l[x];return y[x]=(_,w=!1,S=!1)=>(r||f(),b.schedule(_,w,S)),y},{}),cancel:y=>nu.forEach(x=>l[x].cancel(y)),state:s,steps:l}}const{schedule:Me,cancel:nr,state:St,steps:mf}=EC(typeof requestAnimationFrame<"u"?requestAnimationFrame:et,!0),OC={useVisualState:f1({scrapeMotionValuesFromProps:d1,createRenderState:a1,onMount:(t,e,{renderState:r,latestValues:i})=>{Me.read(()=>{try{r.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),Me.render(()=>{Jp(r,i,{enableHardwareAcceleration:!1},eh(e.tagName),t.transformTemplate),c1(e,r)})}})},AC={useVisualState:f1({scrapeMotionValuesFromProps:th,createRenderState:Zp})};function RC(t,{forwardMotionProps:e=!1},r,i){return{...Qp(t)?OC:AC,preloadedFeatures:r,useRender:_C(e),createVisualElement:i,Component:t}}function wr(t,e,r,i={passive:!0}){return t.addEventListener(e,r,i),()=>t.removeEventListener(e,r)}const p1=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function nc(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const LC=t=>e=>p1(e)&&t(e,nc(e));function br(t,e,r,i){return wr(t,e,LC(r),i)}const MC=(t,e)=>r=>e(t(r)),ti=(...t)=>t.reduce(MC);function h1(t){let e=null;return()=>{const r=()=>{e=null};return e===null?(e=t,r):!1}}const ky=h1("dragHorizontal"),Cy=h1("dragVertical");function m1(t){let e=!1;if(t==="y")e=Cy();else if(t==="x")e=ky();else{const r=ky(),i=Cy();r&&i?e=()=>{r(),i()}:(r&&r(),i&&i())}return e}function g1(){const t=m1(!0);return t?(t(),!1):!0}let ui=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Py(t,e){const r="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),s=(l,u)=>{if(l.pointerType==="touch"||g1())return;const c=t.getProps();t.animationState&&c.whileHover&&t.animationState.setActive("whileHover",e),c[i]&&Me.update(()=>c[i](l,u))};return br(t.current,r,s,{passive:!t.getProps()[i]})}class DC extends ui{mount(){this.unmount=ti(Py(this.node,!0),Py(this.node,!1))}unmount(){}}class IC extends ui{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ti(wr(this.node.current,"focus",()=>this.onFocus()),wr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const y1=(t,e)=>e?t===e?!0:y1(t,e.parentElement):!1;function gf(t,e){if(!e)return;const r=new PointerEvent("pointer"+t);e(r,nc(r))}class zC extends ui{constructor(){super(...arguments),this.removeStartListeners=et,this.removeEndListeners=et,this.removeAccessibleListeners=et,this.startPointerPress=(e,r)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),l=br(window,"pointerup",(c,f)=>{if(!this.checkPressEnd())return;const{onTap:p,onTapCancel:h,globalTapTarget:y}=this.node.getProps();Me.update(()=>{!y&&!y1(this.node.current,c.target)?h&&h(c,f):p&&p(c,f)})},{passive:!(i.onTap||i.onPointerUp)}),u=br(window,"pointercancel",(c,f)=>this.cancelPress(c,f),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=ti(l,u),this.startPress(e,r)},this.startAccessiblePress=()=>{const e=l=>{if(l.key!=="Enter"||this.isPressing)return;const u=c=>{c.key!=="Enter"||!this.checkPressEnd()||gf("up",(f,p)=>{const{onTap:h}=this.node.getProps();h&&Me.update(()=>h(f,p))})};this.removeEndListeners(),this.removeEndListeners=wr(this.node.current,"keyup",u),gf("down",(c,f)=>{this.startPress(c,f)})},r=wr(this.node.current,"keydown",e),i=()=>{this.isPressing&&gf("cancel",(l,u)=>this.cancelPress(l,u))},s=wr(this.node.current,"blur",i);this.removeAccessibleListeners=ti(r,s)}}startPress(e,r){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&Me.update(()=>i(e,r))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!g1()}cancelPress(e,r){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&Me.update(()=>i(e,r))}mount(){const e=this.node.getProps(),r=br(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=wr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ti(r,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const tp=new WeakMap,yf=new WeakMap,FC=t=>{const e=tp.get(t.target);e&&e(t)},NC=t=>{t.forEach(FC)};function BC({root:t,...e}){const r=t||document;yf.has(r)||yf.set(r,{});const i=yf.get(r),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(NC,{root:t,...e})),i[s]}function VC(t,e,r){const i=BC(e);return tp.set(t,r),i.observe(t),()=>{tp.delete(t),i.unobserve(t)}}const WC={some:0,all:1};class UC extends ui{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:r,margin:i,amount:s="some",once:l}=e,u={root:r?r.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:WC[s]},c=f=>{const{isIntersecting:p}=f;if(this.isInView===p||(this.isInView=p,l&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:h,onViewportLeave:y}=this.node.getProps(),x=p?h:y;x&&x(f)};return VC(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:r}=this.node;["amount","margin","root"].some($C(e,r))&&this.startObserver()}unmount(){}}function $C({viewport:t={}},{viewport:e={}}={}){return r=>t[r]!==e[r]}const HC={inView:{Feature:UC},tap:{Feature:zC},focus:{Feature:IC},hover:{Feature:DC}};function v1(t,e){if(!Array.isArray(e))return!1;const r=e.length;if(r!==t.length)return!1;for(let i=0;i<r;i++)if(e[i]!==t[i])return!1;return!0}function YC(t){const e={};return t.values.forEach((r,i)=>e[i]=r.get()),e}function qC(t){const e={};return t.values.forEach((r,i)=>e[i]=r.getVelocity()),e}function rc(t,e,r){const i=t.getProps();return nh(i,e,r!==void 0?r:i.custom,YC(t),qC(t))}let GC=et,ih=et;const Ii=t=>t*1e3,_r=t=>t/1e3,XC={current:!1},x1=t=>Array.isArray(t)&&typeof t[0]=="number";function w1(t){return!!(!t||typeof t=="string"&&b1[t]||x1(t)||Array.isArray(t)&&t.every(w1))}const Us=([t,e,r,i])=>`cubic-bezier(${t}, ${e}, ${r}, ${i})`,b1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Us([0,.65,.55,1]),circOut:Us([.55,0,1,.45]),backIn:Us([.31,.01,.66,-.59]),backOut:Us([.33,1.53,.69,.99])};function _1(t){if(t)return x1(t)?Us(t):Array.isArray(t)?t.map(_1):b1[t]}function QC(t,e,r,{delay:i=0,duration:s,repeat:l=0,repeatType:u="loop",ease:c,times:f}={}){const p={[e]:r};f&&(p.offset=f);const h=_1(c);return Array.isArray(h)&&(p.easing=h),t.animate(p,{delay:i,duration:s,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}function KC(t,{repeat:e,repeatType:r="loop"}){const i=e&&r!=="loop"&&e%2===1?0:t.length-1;return t[i]}const S1=(t,e,r)=>(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t,ZC=1e-7,JC=12;function eP(t,e,r,i,s){let l,u,c=0;do u=e+(r-e)/2,l=S1(u,i,s)-t,l>0?r=u:e=u;while(Math.abs(l)>ZC&&++c<JC);return u}function ba(t,e,r,i){if(t===e&&r===i)return et;const s=l=>eP(l,0,1,t,r);return l=>l===0||l===1?l:S1(s(l),e,i)}const tP=ba(.42,0,1,1),nP=ba(0,0,.58,1),k1=ba(.42,0,.58,1),rP=t=>Array.isArray(t)&&typeof t[0]!="number",C1=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,P1=t=>e=>1-t(1-e),oh=t=>1-Math.sin(Math.acos(t)),T1=P1(oh),iP=C1(oh),j1=ba(.33,1.53,.69,.99),sh=P1(j1),oP=C1(sh),sP=t=>(t*=2)<1?.5*sh(t):.5*(2-Math.pow(2,-10*(t-1))),aP={linear:et,easeIn:tP,easeInOut:k1,easeOut:nP,circIn:oh,circInOut:iP,circOut:T1,backIn:sh,backInOut:oP,backOut:j1,anticipate:sP},Ty=t=>{if(Array.isArray(t)){ih(t.length===4);const[e,r,i,s]=t;return ba(e,r,i,s)}else if(typeof t=="string")return aP[t];return t},ah=(t,e)=>r=>!!(xa(r)&&lC.test(r)&&r.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(r,e)),E1=(t,e,r)=>i=>{if(!xa(i))return i;const[s,l,u,c]=i.match(tc);return{[t]:parseFloat(s),[e]:parseFloat(l),[r]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},lP=t=>ii(0,255,t),vf={...Yi,transform:t=>Math.round(lP(t))},Mi={test:ah("rgb","red"),parse:E1("red","green","blue"),transform:({red:t,green:e,blue:r,alpha:i=1})=>"rgba("+vf.transform(t)+", "+vf.transform(e)+", "+vf.transform(r)+", "+Xs(Gs.transform(i))+")"};function uP(t){let e="",r="",i="",s="";return t.length>5?(e=t.substring(1,3),r=t.substring(3,5),i=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),r=t.substring(2,3),i=t.substring(3,4),s=t.substring(4,5),e+=e,r+=r,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const np={test:ah("#"),parse:uP,transform:Mi.transform},Co={test:ah("hsl","hue"),parse:E1("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:r,alpha:i=1})=>"hsla("+Math.round(t)+", "+Jn.transform(Xs(e))+", "+Jn.transform(Xs(r))+", "+Xs(Gs.transform(i))+")"},Dt={test:t=>Mi.test(t)||np.test(t)||Co.test(t),parse:t=>Mi.test(t)?Mi.parse(t):Co.test(t)?Co.parse(t):np.parse(t),transform:t=>xa(t)?t:t.hasOwnProperty("red")?Mi.transform(t):Co.transform(t)},Qe=(t,e,r)=>-r*t+r*e+t;function xf(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function cP({hue:t,saturation:e,lightness:r,alpha:i}){t/=360,e/=100,r/=100;let s=0,l=0,u=0;if(!e)s=l=u=r;else{const c=r<.5?r*(1+e):r+e-r*e,f=2*r-c;s=xf(f,c,t+1/3),l=xf(f,c,t),u=xf(f,c,t-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:i}}const wf=(t,e,r)=>{const i=t*t;return Math.sqrt(Math.max(0,r*(e*e-i)+i))},dP=[np,Mi,Co],fP=t=>dP.find(e=>e.test(t));function jy(t){const e=fP(t);let r=e.parse(t);return e===Co&&(r=cP(r)),r}const O1=(t,e)=>{const r=jy(t),i=jy(e),s={...r};return l=>(s.red=wf(r.red,i.red,l),s.green=wf(r.green,i.green,l),s.blue=wf(r.blue,i.blue,l),s.alpha=Qe(r.alpha,i.alpha,l),Mi.transform(s))};function pP(t){var e,r;return isNaN(t)&&xa(t)&&(((e=t.match(tc))===null||e===void 0?void 0:e.length)||0)+(((r=t.match(r1))===null||r===void 0?void 0:r.length)||0)>0}const A1={regex:sC,countKey:"Vars",token:"${v}",parse:et},R1={regex:r1,countKey:"Colors",token:"${c}",parse:Dt.parse},L1={regex:tc,countKey:"Numbers",token:"${n}",parse:Yi.parse};function bf(t,{regex:e,countKey:r,token:i,parse:s}){const l=t.tokenised.match(e);l&&(t["num"+r]=l.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...l.map(s)))}function Ou(t){const e=t.toString(),r={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&bf(r,A1),bf(r,R1),bf(r,L1),r}function M1(t){return Ou(t).values}function D1(t){const{values:e,numColors:r,numVars:i,tokenised:s}=Ou(t),l=e.length;return u=>{let c=s;for(let f=0;f<l;f++)f<i?c=c.replace(A1.token,u[f]):f<i+r?c=c.replace(R1.token,Dt.transform(u[f])):c=c.replace(L1.token,Xs(u[f]));return c}}const hP=t=>typeof t=="number"?0:t;function mP(t){const e=M1(t);return D1(t)(e.map(hP))}const oi={test:pP,parse:M1,createTransformer:D1,getAnimatableNone:mP},I1=(t,e)=>r=>`${r>0?e:t}`;function z1(t,e){return typeof t=="number"?r=>Qe(t,e,r):Dt.test(t)?O1(t,e):t.startsWith("var(")?I1(t,e):N1(t,e)}const F1=(t,e)=>{const r=[...t],i=r.length,s=t.map((l,u)=>z1(l,e[u]));return l=>{for(let u=0;u<i;u++)r[u]=s[u](l);return r}},gP=(t,e)=>{const r={...t,...e},i={};for(const s in r)t[s]!==void 0&&e[s]!==void 0&&(i[s]=z1(t[s],e[s]));return s=>{for(const l in i)r[l]=i[l](s);return r}},N1=(t,e)=>{const r=oi.createTransformer(e),i=Ou(t),s=Ou(e);return i.numVars===s.numVars&&i.numColors===s.numColors&&i.numNumbers>=s.numNumbers?ti(F1(i.values,s.values),r):I1(t,e)},Io=(t,e,r)=>{const i=e-t;return i===0?1:(r-t)/i},Ey=(t,e)=>r=>Qe(t,e,r);function yP(t){return typeof t=="number"?Ey:typeof t=="string"?Dt.test(t)?O1:N1:Array.isArray(t)?F1:typeof t=="object"?gP:Ey}function vP(t,e,r){const i=[],s=r||yP(t[0]),l=t.length-1;for(let u=0;u<l;u++){let c=s(t[u],t[u+1]);if(e){const f=Array.isArray(e)?e[u]||et:e;c=ti(f,c)}i.push(c)}return i}function lh(t,e,{clamp:r=!0,ease:i,mixer:s}={}){const l=t.length;if(ih(l===e.length),l===1)return()=>e[0];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const u=vP(e,i,s),c=u.length,f=p=>{let h=0;if(c>1)for(;h<t.length-2&&!(p<t[h+1]);h++);const y=Io(t[h],t[h+1],p);return u[h](y)};return r?p=>f(ii(t[0],t[l-1],p)):f}function xP(t,e){const r=t[t.length-1];for(let i=1;i<=e;i++){const s=Io(0,e,i);t.push(Qe(r,1,s))}}function B1(t){const e=[0];return xP(e,t.length-1),e}function wP(t,e){return t.map(r=>r*e)}function bP(t,e){return t.map(()=>e||k1).splice(0,t.length-1)}function Au({duration:t=300,keyframes:e,times:r,ease:i="easeInOut"}){const s=rP(i)?i.map(Ty):Ty(i),l={done:!1,value:e[0]},u=wP(r&&r.length===e.length?r:B1(e),t),c=lh(u,e,{ease:Array.isArray(s)?s:bP(e,s)});return{calculatedDuration:t,next:f=>(l.value=c(f),l.done=f>=t,l)}}function uh(t,e){return e?t*(1e3/e):0}const _P=5;function V1(t,e,r){const i=Math.max(e-_P,0);return uh(r-t(i),e-i)}const Oy=.001,SP=.01,kP=10,CP=.05,PP=1;function TP({duration:t=800,bounce:e=.25,velocity:r=0,mass:i=1}){let s,l,u=1-e;u=ii(CP,PP,u),t=ii(SP,kP,_r(t)),u<1?(s=p=>{const h=p*u,y=h*t,x=h-r,b=rp(p,u),_=Math.exp(-y);return Oy-x/b*_},l=p=>{const y=p*u*t,x=y*r+r,b=Math.pow(u,2)*Math.pow(p,2)*t,_=Math.exp(-y),w=rp(Math.pow(p,2),u);return(-s(p)+Oy>0?-1:1)*((x-b)*_)/w}):(s=p=>{const h=Math.exp(-p*t),y=(p-r)*t+1;return-.001+h*y},l=p=>{const h=Math.exp(-p*t),y=(r-p)*(t*t);return h*y});const c=5/t,f=EP(s,l,c);if(t=Ii(t),isNaN(f))return{stiffness:100,damping:10,duration:t};{const p=Math.pow(f,2)*i;return{stiffness:p,damping:u*2*Math.sqrt(i*p),duration:t}}}const jP=12;function EP(t,e,r){let i=r;for(let s=1;s<jP;s++)i=i-t(i)/e(i);return i}function rp(t,e){return t*Math.sqrt(1-e*e)}const OP=["duration","bounce"],AP=["stiffness","damping","mass"];function Ay(t,e){return e.some(r=>t[r]!==void 0)}function RP(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Ay(t,AP)&&Ay(t,OP)){const r=TP(t);e={...e,...r,mass:1},e.isResolvedFromDuration=!0}return e}function W1({keyframes:t,restDelta:e,restSpeed:r,...i}){const s=t[0],l=t[t.length-1],u={done:!1,value:s},{stiffness:c,damping:f,mass:p,duration:h,velocity:y,isResolvedFromDuration:x}=RP({...i,velocity:-_r(i.velocity||0)}),b=y||0,_=f/(2*Math.sqrt(c*p)),w=l-s,S=_r(Math.sqrt(c/p)),j=Math.abs(w)<5;r||(r=j?.01:2),e||(e=j?.005:.5);let T;if(_<1){const C=rp(S,_);T=E=>{const P=Math.exp(-_*S*E);return l-P*((b+_*S*w)/C*Math.sin(C*E)+w*Math.cos(C*E))}}else if(_===1)T=C=>l-Math.exp(-S*C)*(w+(b+S*w)*C);else{const C=S*Math.sqrt(_*_-1);T=E=>{const P=Math.exp(-_*S*E),M=Math.min(C*E,300);return l-P*((b+_*S*w)*Math.sinh(M)+C*w*Math.cosh(M))/C}}return{calculatedDuration:x&&h||null,next:C=>{const E=T(C);if(x)u.done=C>=h;else{let P=b;C!==0&&(_<1?P=V1(T,C,E):P=0);const M=Math.abs(P)<=r,D=Math.abs(l-E)<=e;u.done=M&&D}return u.value=u.done?l:E,u}}}function Ry({keyframes:t,velocity:e=0,power:r=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:f,restDelta:p=.5,restSpeed:h}){const y=t[0],x={done:!1,value:y},b=F=>c!==void 0&&F<c||f!==void 0&&F>f,_=F=>c===void 0?f:f===void 0||Math.abs(c-F)<Math.abs(f-F)?c:f;let w=r*e;const S=y+w,j=u===void 0?S:u(S);j!==S&&(w=j-y);const T=F=>-w*Math.exp(-F/i),C=F=>j+T(F),E=F=>{const B=T(F),Y=C(F);x.done=Math.abs(B)<=p,x.value=x.done?j:Y};let P,M;const D=F=>{b(x.value)&&(P=F,M=W1({keyframes:[x.value,_(x.value)],velocity:V1(C,F,x.value),damping:s,stiffness:l,restDelta:p,restSpeed:h}))};return D(0),{calculatedDuration:null,next:F=>{let B=!1;return!M&&P===void 0&&(B=!0,E(F),D(F)),P!==void 0&&F>P?M.next(F-P):(!B&&E(F),x)}}}const LP=t=>{const e=({timestamp:r})=>t(r);return{start:()=>Me.update(e,!0),stop:()=>nr(e),now:()=>St.isProcessing?St.timestamp:performance.now()}},Ly=2e4;function My(t){let e=0;const r=50;let i=t.next(e);for(;!i.done&&e<Ly;)e+=r,i=t.next(e);return e>=Ly?1/0:e}const MP={decay:Ry,inertia:Ry,tween:Au,keyframes:Au,spring:W1};function Ru({autoplay:t=!0,delay:e=0,driver:r=LP,keyframes:i,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:c="loop",onPlay:f,onStop:p,onComplete:h,onUpdate:y,...x}){let b=1,_=!1,w,S;const j=()=>{S=new Promise(L=>{w=L})};j();let T;const C=MP[s]||Au;let E;C!==Au&&typeof i[0]!="number"&&(E=lh([0,100],i,{clamp:!1}),i=[0,100]);const P=C({...x,keyframes:i});let M;c==="mirror"&&(M=C({...x,keyframes:[...i].reverse(),velocity:-(x.velocity||0)}));let D="idle",F=null,B=null,Y=null;P.calculatedDuration===null&&l&&(P.calculatedDuration=My(P));const{calculatedDuration:G}=P;let z=1/0,Z=1/0;G!==null&&(z=G+u,Z=z*(l+1)-u);let X=0;const ae=L=>{if(B===null)return;b>0&&(B=Math.min(B,L)),b<0&&(B=Math.min(L-Z/b,B)),F!==null?X=F:X=Math.round(L-B)*b;const V=X-e*(b>=0?1:-1),Q=b>=0?V<0:V>Z;X=Math.max(V,0),D==="finished"&&F===null&&(X=Z);let J=X,ie=P;if(l){const me=Math.min(X,Z)/z;let ve=Math.floor(me),_e=me%1;!_e&&me>=1&&(_e=1),_e===1&&ve--,ve=Math.min(ve,l+1),!!(ve%2)&&(c==="reverse"?(_e=1-_e,u&&(_e-=u/z)):c==="mirror"&&(ie=M)),J=ii(0,1,_e)*z}const W=Q?{done:!1,value:i[0]}:ie.next(J);E&&(W.value=E(W.value));let{done:fe}=W;!Q&&G!==null&&(fe=b>=0?X>=Z:X<=0);const q=F===null&&(D==="finished"||D==="running"&&fe);return y&&y(W.value),q&&K(),W},ce=()=>{T&&T.stop(),T=void 0},se=()=>{D="idle",ce(),w(),j(),B=Y=null},K=()=>{D="finished",h&&h(),ce(),w()},le=()=>{if(_)return;T||(T=r(ae));const L=T.now();f&&f(),F!==null?B=L-F:(!B||D==="finished")&&(B=L),D==="finished"&&j(),Y=B,F=null,D="running",T.start()};t&&le();const re={then(L,V){return S.then(L,V)},get time(){return _r(X)},set time(L){L=Ii(L),X=L,F!==null||!T||b===0?F=L:B=T.now()-L/b},get duration(){const L=P.calculatedDuration===null?My(P):P.calculatedDuration;return _r(L)},get speed(){return b},set speed(L){L===b||!T||(b=L,re.time=_r(X))},get state(){return D},play:le,pause:()=>{D="paused",F=X},stop:()=>{_=!0,D!=="idle"&&(D="idle",p&&p(),se())},cancel:()=>{Y!==null&&ae(Y),se()},complete:()=>{D="finished"},sample:L=>(B=0,ae(L))};return re}function DP(t){let e;return()=>(e===void 0&&(e=t()),e)}const IP=DP(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),zP=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ru=10,FP=2e4,NP=(t,e)=>e.type==="spring"||t==="backgroundColor"||!w1(e.ease);function BP(t,e,{onUpdate:r,onComplete:i,...s}){if(!(IP()&&zP.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let u=!1,c,f,p=!1;const h=()=>{f=new Promise(C=>{c=C})};h();let{keyframes:y,duration:x=300,ease:b,times:_}=s;if(NP(e,s)){const C=Ru({...s,repeat:0,delay:0});let E={done:!1,value:y[0]};const P=[];let M=0;for(;!E.done&&M<FP;)E=C.sample(M),P.push(E.value),M+=ru;_=void 0,y=P,x=M-ru,b="linear"}const w=QC(t.owner.current,e,y,{...s,duration:x,ease:b,times:_}),S=()=>{p=!1,w.cancel()},j=()=>{p=!0,Me.update(S),c(),h()};return w.onfinish=()=>{p||(t.set(KC(y,s)),i&&i(),j())},{then(C,E){return f.then(C,E)},attachTimeline(C){return w.timeline=C,w.onfinish=null,et},get time(){return _r(w.currentTime||0)},set time(C){w.currentTime=Ii(C)},get speed(){return w.playbackRate},set speed(C){w.playbackRate=C},get duration(){return _r(x)},play:()=>{u||(w.play(),nr(S))},pause:()=>w.pause(),stop:()=>{if(u=!0,w.playState==="idle")return;const{currentTime:C}=w;if(C){const E=Ru({...s,autoplay:!1});t.setWithVelocity(E.sample(C-ru).value,E.sample(C).value,ru)}j()},complete:()=>{p||w.finish()},cancel:j}}function VP({keyframes:t,delay:e,onUpdate:r,onComplete:i}){const s=()=>(r&&r(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:et,pause:et,stop:et,then:l=>(l(),Promise.resolve()),cancel:et,complete:et});return e?Ru({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const WP={type:"spring",stiffness:500,damping:25,restSpeed:10},UP=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),$P={type:"keyframes",duration:.8},HP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},YP=(t,{keyframes:e})=>e.length>2?$P:Hi.has(t)?t.startsWith("scale")?UP(e[1]):WP:HP,ip=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(oi.test(e)||e==="0")&&!e.startsWith("url(")),qP=new Set(["brightness","contrast","saturate","opacity"]);function GP(t){const[e,r]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=r.match(tc)||[];if(!i)return t;const s=r.replace(i,"");let l=qP.has(e)?1:0;return i!==r&&(l*=100),e+"("+l+s+")"}const XP=/([a-z-]*)\(.*?\)/g,op={...oi,getAnimatableNone:t=>{const e=t.match(XP);return e?e.map(GP).join(" "):t}},QP={...i1,color:Dt,backgroundColor:Dt,outlineColor:Dt,fill:Dt,stroke:Dt,borderColor:Dt,borderTopColor:Dt,borderRightColor:Dt,borderBottomColor:Dt,borderLeftColor:Dt,filter:op,WebkitFilter:op},ch=t=>QP[t];function U1(t,e){let r=ch(t);return r!==op&&(r=oi),r.getAnimatableNone?r.getAnimatableNone(e):void 0}const $1=t=>/^0[^.\s]+$/.test(t);function KP(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||$1(t)}function ZP(t,e,r,i){const s=ip(e,r);let l;Array.isArray(r)?l=[...r]:l=[null,r];const u=i.from!==void 0?i.from:t.get();let c;const f=[];for(let p=0;p<l.length;p++)l[p]===null&&(l[p]=p===0?u:l[p-1]),KP(l[p])&&f.push(p),typeof l[p]=="string"&&l[p]!=="none"&&l[p]!=="0"&&(c=l[p]);if(s&&f.length&&c)for(let p=0;p<f.length;p++){const h=f[p];l[h]=U1(e,c)}return l}function JP({when:t,delay:e,delayChildren:r,staggerChildren:i,staggerDirection:s,repeat:l,repeatType:u,repeatDelay:c,from:f,elapsed:p,...h}){return!!Object.keys(h).length}function dh(t,e){return t[e]||t.default||t}const eT={skipAnimations:!1},fh=(t,e,r,i={})=>s=>{const l=dh(i,t)||{},u=l.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Ii(u);const f=ZP(e,t,r,l),p=f[0],h=f[f.length-1],y=ip(t,p),x=ip(t,h);let b={keyframes:f,velocity:e.getVelocity(),ease:"easeOut",...l,delay:-c,onUpdate:_=>{e.set(_),l.onUpdate&&l.onUpdate(_)},onComplete:()=>{s(),l.onComplete&&l.onComplete()}};if(JP(l)||(b={...b,...YP(t,b)}),b.duration&&(b.duration=Ii(b.duration)),b.repeatDelay&&(b.repeatDelay=Ii(b.repeatDelay)),!y||!x||XC.current||l.type===!1||eT.skipAnimations)return VP(b);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const _=BP(e,t,b);if(_)return _}return Ru(b)};function Lu(t){return!!(Gt(t)&&t.add)}const H1=t=>/^\-?\d*\.?\d+$/.test(t);function ph(t,e){t.indexOf(e)===-1&&t.push(e)}function hh(t,e){const r=t.indexOf(e);r>-1&&t.splice(r,1)}class mh{constructor(){this.subscriptions=[]}add(e){return ph(this.subscriptions,e),()=>hh(this.subscriptions,e)}notify(e,r,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,r,i);else for(let l=0;l<s;l++){const u=this.subscriptions[l];u&&u(e,r,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tT=t=>!isNaN(parseFloat(t));class nT{constructor(e,r={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,s=!0)=>{this.prev=this.current,this.current=i;const{delta:l,timestamp:u}=St;this.lastUpdated!==u&&(this.timeDelta=l,this.lastUpdated=u,Me.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Me.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=tT(this.current),this.owner=r.owner}onChange(e){return this.on("change",e)}on(e,r){this.events[e]||(this.events[e]=new mh);const i=this.events[e].add(r);return e==="change"?()=>{i(),Me.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,r){this.passiveEffect=e,this.stopPassiveEffect=r}set(e,r=!0){!r||!this.passiveEffect?this.updateAndNotify(e,r):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,r,i){this.set(r),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?uh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=e(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Kn(t,e){return new nT(t,e)}const Y1=t=>e=>e.test(t),rT={test:t=>t==="auto",parse:t=>t},q1=[Yi,be,Jn,Hr,cC,uC,rT],Ls=t=>q1.find(Y1(t)),iT=[...q1,Dt,oi],oT=t=>iT.find(Y1(t));function sT(t,e,r){t.hasValue(e)?t.getValue(e).set(r):t.addValue(e,Kn(r))}function aT(t,e){const r=rc(t,e);let{transitionEnd:i={},transition:s={},...l}=r?t.makeTargetAnimatable(r,!1):{};l={...l,...i};for(const u in l){const c=kC(l[u]);sT(t,u,c)}}function lT(t,e,r){var i,s;const l=Object.keys(e).filter(c=>!t.hasValue(c)),u=l.length;if(u)for(let c=0;c<u;c++){const f=l[c],p=e[f];let h=null;Array.isArray(p)&&(h=p[0]),h===null&&(h=(s=(i=r[f])!==null&&i!==void 0?i:t.readValue(f))!==null&&s!==void 0?s:e[f]),h!=null&&(typeof h=="string"&&(H1(h)||$1(h))?h=parseFloat(h):!oT(h)&&oi.test(p)&&(h=U1(f,p)),t.addValue(f,Kn(h,{owner:t})),r[f]===void 0&&(r[f]=h),h!==null&&t.setBaseTarget(f,h))}}function uT(t,e){return e?(e[t]||e.default||e).from:void 0}function cT(t,e,r){const i={};for(const s in t){const l=uT(s,e);if(l!==void 0)i[s]=l;else{const u=r.getValue(s);u&&(i[s]=u.get())}}return i}function dT({protectedKeys:t,needsAnimating:e},r){const i=t.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,i}function fT(t,e){const r=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==r)return!0}else return r!==e}function G1(t,e,{delay:r=0,transitionOverride:i,type:s}={}){let{transition:l=t.getDefaultTransition(),transitionEnd:u,...c}=t.makeTargetAnimatable(e);const f=t.getValue("willChange");i&&(l=i);const p=[],h=s&&t.animationState&&t.animationState.getState()[s];for(const y in c){const x=t.getValue(y),b=c[y];if(!x||b===void 0||h&&dT(h,y))continue;const _={delay:r,elapsed:0,...dh(l||{},y)};if(window.HandoffAppearAnimations){const j=t.getProps()[Kx];if(j){const T=window.HandoffAppearAnimations(j,y,x,Me);T!==null&&(_.elapsed=T,_.isHandoff=!0)}}let w=!_.isHandoff&&!fT(x,b);if(_.type==="spring"&&(x.getVelocity()||_.velocity)&&(w=!1),x.animation&&(w=!1),w)continue;x.start(fh(y,x,b,t.shouldReduceMotion&&Hi.has(y)?{type:!1}:_));const S=x.animation;Lu(f)&&(f.add(y),S.then(()=>f.remove(y))),p.push(S)}return u&&Promise.all(p).then(()=>{u&&aT(t,u)}),p}function sp(t,e,r={}){const i=rc(t,e,r.custom);let{transition:s=t.getDefaultTransition()||{}}=i||{};r.transitionOverride&&(s=r.transitionOverride);const l=i?()=>Promise.all(G1(t,i,r)):()=>Promise.resolve(),u=t.variantChildren&&t.variantChildren.size?(f=0)=>{const{delayChildren:p=0,staggerChildren:h,staggerDirection:y}=s;return pT(t,e,p+f,h,y,r)}:()=>Promise.resolve(),{when:c}=s;if(c){const[f,p]=c==="beforeChildren"?[l,u]:[u,l];return f().then(()=>p())}else return Promise.all([l(),u(r.delay)])}function pT(t,e,r=0,i=0,s=1,l){const u=[],c=(t.variantChildren.size-1)*i,f=s===1?(p=0)=>p*i:(p=0)=>c-p*i;return Array.from(t.variantChildren).sort(hT).forEach((p,h)=>{p.notify("AnimationStart",e),u.push(sp(p,e,{...l,delay:r+f(h)}).then(()=>p.notify("AnimationComplete",e)))}),Promise.all(u)}function hT(t,e){return t.sortNodePosition(e)}function mT(t,e,r={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(l=>sp(t,l,r));i=Promise.all(s)}else if(typeof e=="string")i=sp(t,e,r);else{const s=typeof e=="function"?rc(t,e,r.custom):e;i=Promise.all(G1(t,s,r))}return i.then(()=>t.notify("AnimationComplete",e))}const gT=[...qp].reverse(),yT=qp.length;function vT(t){return e=>Promise.all(e.map(({animation:r,options:i})=>mT(t,r,i)))}function xT(t){let e=vT(t);const r=bT();let i=!0;const s=(f,p)=>{const h=rc(t,p);if(h){const{transition:y,transitionEnd:x,...b}=h;f={...f,...b,...x}}return f};function l(f){e=f(t)}function u(f,p){const h=t.getProps(),y=t.getVariantContext(!0)||{},x=[],b=new Set;let _={},w=1/0;for(let j=0;j<yT;j++){const T=gT[j],C=r[T],E=h[T]!==void 0?h[T]:y[T],P=oa(E),M=T===p?C.isActive:null;M===!1&&(w=j);let D=E===y[T]&&E!==h[T]&&P;if(D&&i&&t.manuallyAnimateOnMount&&(D=!1),C.protectedKeys={..._},!C.isActive&&M===null||!E&&!C.prevProp||Ju(E)||typeof E=="boolean")continue;let B=wT(C.prevProp,E)||T===p&&C.isActive&&!D&&P||j>w&&P,Y=!1;const G=Array.isArray(E)?E:[E];let z=G.reduce(s,{});M===!1&&(z={});const{prevResolvedValues:Z={}}=C,X={...Z,...z},ae=ce=>{B=!0,b.has(ce)&&(Y=!0,b.delete(ce)),C.needsAnimating[ce]=!0};for(const ce in X){const se=z[ce],K=Z[ce];if(_.hasOwnProperty(ce))continue;let le=!1;Eu(se)&&Eu(K)?le=!v1(se,K):le=se!==K,le?se!==void 0?ae(ce):b.add(ce):se!==void 0&&b.has(ce)?ae(ce):C.protectedKeys[ce]=!0}C.prevProp=E,C.prevResolvedValues=z,C.isActive&&(_={..._,...z}),i&&t.blockInitialAnimation&&(B=!1),B&&(!D||Y)&&x.push(...G.map(ce=>({animation:ce,options:{type:T,...f}})))}if(b.size){const j={};b.forEach(T=>{const C=t.getBaseTarget(T);C!==void 0&&(j[T]=C)}),x.push({animation:j})}let S=!!x.length;return i&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(S=!1),i=!1,S?e(x):Promise.resolve()}function c(f,p,h){var y;if(r[f].isActive===p)return Promise.resolve();(y=t.variantChildren)===null||y===void 0||y.forEach(b=>{var _;return(_=b.animationState)===null||_===void 0?void 0:_.setActive(f,p)}),r[f].isActive=p;const x=u(h,f);for(const b in r)r[b].protectedKeys={};return x}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>r}}function wT(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!v1(e,t):!1}function Ci(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bT(){return{animate:Ci(!0),whileInView:Ci(),whileHover:Ci(),whileTap:Ci(),whileDrag:Ci(),whileFocus:Ci(),exit:Ci()}}class _T extends ui{constructor(e){super(e),e.animationState||(e.animationState=xT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Ju(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:r}=this.node.prevProps||{};e!==r&&this.updateAnimationControlsSubscription()}unmount(){}}let ST=0;class kT extends ui{constructor(){super(...arguments),this.id=ST++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:r,custom:i}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;const l=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});r&&!e&&l.then(()=>r(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const CT={animation:{Feature:_T},exit:{Feature:kT}},Dy=(t,e)=>Math.abs(t-e);function PT(t,e){const r=Dy(t.x,e.x),i=Dy(t.y,e.y);return Math.sqrt(r**2+i**2)}class X1{constructor(e,r,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Sf(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,b=PT(y.offset,{x:0,y:0})>=3;if(!x&&!b)return;const{point:_}=y,{timestamp:w}=St;this.history.push({..._,timestamp:w});const{onStart:S,onMove:j}=this.handlers;x||(S&&S(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),j&&j(this.lastMoveEvent,y)},this.handlePointerMove=(y,x)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=_f(x,this.transformPagePoint),Me.update(this.updatePoint,!0)},this.handlePointerUp=(y,x)=>{this.end();const{onEnd:b,onSessionEnd:_,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Sf(y.type==="pointercancel"?this.lastMoveEventInfo:_f(x,this.transformPagePoint),this.history);this.startEvent&&b&&b(y,S),_&&_(y,S)},!p1(e))return;this.dragSnapToOrigin=l,this.handlers=r,this.transformPagePoint=i,this.contextWindow=s||window;const u=nc(e),c=_f(u,this.transformPagePoint),{point:f}=c,{timestamp:p}=St;this.history=[{...f,timestamp:p}];const{onSessionStart:h}=r;h&&h(e,Sf(c,this.history)),this.removeListeners=ti(br(this.contextWindow,"pointermove",this.handlePointerMove),br(this.contextWindow,"pointerup",this.handlePointerUp),br(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),nr(this.updatePoint)}}function _f(t,e){return e?{point:e(t.point)}:t}function Iy(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Sf({point:t},e){return{point:t,delta:Iy(t,Q1(e)),offset:Iy(t,TT(e)),velocity:jT(e,.1)}}function TT(t){return t[0]}function Q1(t){return t[t.length-1]}function jT(t,e){if(t.length<2)return{x:0,y:0};let r=t.length-1,i=null;const s=Q1(t);for(;r>=0&&(i=t[r],!(s.timestamp-i.timestamp>Ii(e)));)r--;if(!i)return{x:0,y:0};const l=_r(s.timestamp-i.timestamp);if(l===0)return{x:0,y:0};const u={x:(s.x-i.x)/l,y:(s.y-i.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function ln(t){return t.max-t.min}function ap(t,e=0,r=.01){return Math.abs(t-e)<=r}function zy(t,e,r,i=.5){t.origin=i,t.originPoint=Qe(e.min,e.max,t.origin),t.scale=ln(r)/ln(e),(ap(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Qe(r.min,r.max,t.origin)-t.originPoint,(ap(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Qs(t,e,r,i){zy(t.x,e.x,r.x,i?i.originX:void 0),zy(t.y,e.y,r.y,i?i.originY:void 0)}function Fy(t,e,r){t.min=r.min+e.min,t.max=t.min+ln(e)}function ET(t,e,r){Fy(t.x,e.x,r.x),Fy(t.y,e.y,r.y)}function Ny(t,e,r){t.min=e.min-r.min,t.max=t.min+ln(e)}function Ks(t,e,r){Ny(t.x,e.x,r.x),Ny(t.y,e.y,r.y)}function OT(t,{min:e,max:r},i){return e!==void 0&&t<e?t=i?Qe(e,t,i.min):Math.max(t,e):r!==void 0&&t>r&&(t=i?Qe(r,t,i.max):Math.min(t,r)),t}function By(t,e,r){return{min:e!==void 0?t.min+e:void 0,max:r!==void 0?t.max+r-(t.max-t.min):void 0}}function AT(t,{top:e,left:r,bottom:i,right:s}){return{x:By(t.x,r,s),y:By(t.y,e,i)}}function Vy(t,e){let r=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([r,i]=[i,r]),{min:r,max:i}}function RT(t,e){return{x:Vy(t.x,e.x),y:Vy(t.y,e.y)}}function LT(t,e){let r=.5;const i=ln(t),s=ln(e);return s>i?r=Io(e.min,e.max-i,t.min):i>s&&(r=Io(t.min,t.max-s,e.min)),ii(0,1,r)}function MT(t,e){const r={};return e.min!==void 0&&(r.min=e.min-t.min),e.max!==void 0&&(r.max=e.max-t.min),r}const lp=.35;function DT(t=lp){return t===!1?t=0:t===!0&&(t=lp),{x:Wy(t,"left","right"),y:Wy(t,"top","bottom")}}function Wy(t,e,r){return{min:Uy(t,e),max:Uy(t,r)}}function Uy(t,e){return typeof t=="number"?t:t[e]||0}const $y=()=>({translate:0,scale:1,origin:0,originPoint:0}),Po=()=>({x:$y(),y:$y()}),Hy=()=>({min:0,max:0}),at=()=>({x:Hy(),y:Hy()});function _n(t){return[t("x"),t("y")]}function K1({top:t,left:e,right:r,bottom:i}){return{x:{min:e,max:r},y:{min:t,max:i}}}function IT({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function zT(t,e){if(!e)return t;const r=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:i.y,right:i.x}}function kf(t){return t===void 0||t===1}function up({scale:t,scaleX:e,scaleY:r}){return!kf(t)||!kf(e)||!kf(r)}function Oi(t){return up(t)||Z1(t)||t.z||t.rotate||t.rotateX||t.rotateY}function Z1(t){return Yy(t.x)||Yy(t.y)}function Yy(t){return t&&t!=="0%"}function Mu(t,e,r){const i=t-r,s=e*i;return r+s}function qy(t,e,r,i,s){return s!==void 0&&(t=Mu(t,s,i)),Mu(t,r,i)+e}function cp(t,e=0,r=1,i,s){t.min=qy(t.min,e,r,i,s),t.max=qy(t.max,e,r,i,s)}function J1(t,{x:e,y:r}){cp(t.x,e.translate,e.scale,e.originPoint),cp(t.y,r.translate,r.scale,r.originPoint)}function FT(t,e,r,i=!1){const s=r.length;if(!s)return;e.x=e.y=1;let l,u;for(let c=0;c<s;c++){l=r[c],u=l.projectionDelta;const f=l.instance;f&&f.style&&f.style.display==="contents"||(i&&l.options.layoutScroll&&l.scroll&&l!==l.root&&To(t,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,J1(t,u)),i&&Oi(l.latestValues)&&To(t,l.latestValues))}e.x=Gy(e.x),e.y=Gy(e.y)}function Gy(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function qr(t,e){t.min=t.min+e,t.max=t.max+e}function Xy(t,e,[r,i,s]){const l=e[s]!==void 0?e[s]:.5,u=Qe(t.min,t.max,l);cp(t,e[r],e[i],u,e.scale)}const NT=["x","scaleX","originX"],BT=["y","scaleY","originY"];function To(t,e){Xy(t.x,e,NT),Xy(t.y,e,BT)}function ew(t,e){return K1(zT(t.getBoundingClientRect(),e))}function VT(t,e,r){const i=ew(t,r),{scroll:s}=e;return s&&(qr(i.x,s.offset.x),qr(i.y,s.offset.y)),i}const tw=({current:t})=>t?t.ownerDocument.defaultView:null,WT=new WeakMap;class UT{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=at(),this.visualElement=e}start(e,{snapToCursor:r=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=h=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(nc(h,"page").point)},l=(h,y)=>{const{drag:x,dragPropagation:b,onDragStart:_}=this.getProps();if(x&&!b&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=m1(x),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_n(S=>{let j=this.getAxisMotionValue(S).get()||0;if(Jn.test(j)){const{projection:T}=this.visualElement;if(T&&T.layout){const C=T.layout.layoutBox[S];C&&(j=ln(C)*(parseFloat(j)/100))}}this.originPoint[S]=j}),_&&Me.update(()=>_(h,y),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},u=(h,y)=>{const{dragPropagation:x,dragDirectionLock:b,onDirectionLock:_,onDrag:w}=this.getProps();if(!x&&!this.openGlobalLock)return;const{offset:S}=y;if(b&&this.currentDirection===null){this.currentDirection=$T(S),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",y.point,S),this.updateAxis("y",y.point,S),this.visualElement.render(),w&&w(h,y)},c=(h,y)=>this.stop(h,y),f=()=>_n(h=>{var y;return this.getAnimationState(h)==="paused"&&((y=this.getAxisMotionValue(h).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new X1(e,{onSessionStart:s,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:tw(this.visualElement)})}stop(e,r){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=r;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&Me.update(()=>l(e,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:r}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(e,r,i){const{drag:s}=this.getProps();if(!i||!iu(e,s,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(u=OT(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:r,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;r&&ko(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&s?this.constraints=AT(s.layoutBox,r):this.constraints=!1,this.elastic=DT(i),l!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&_n(u=>{this.getAxisMotionValue(u)&&(this.constraints[u]=MT(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!ko(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const l=VT(i,s.root,this.visualElement.getTransformPagePoint());let u=RT(s.layout.layoutBox,l);if(r){const c=r(IT(u));this.hasMutatedConstraints=!!c,c&&(u=K1(c))}return u}startAnimation(e){const{drag:r,dragMomentum:i,dragElastic:s,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),f=this.constraints||{},p=_n(h=>{if(!iu(h,r,this.currentDirection))return;let y=f&&f[h]||{};u&&(y={min:0,max:0});const x=s?200:1e6,b=s?40:1e7,_={type:"inertia",velocity:i?e[h]:0,bounceStiffness:x,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(h,_)});return Promise.all(p).then(c)}startAxisValueAnimation(e,r){const i=this.getAxisMotionValue(e);return i.start(fh(e,i,0,r))}stopAnimation(){_n(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){_n(e=>{var r;return(r=this.getAxisMotionValue(e).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(e){var r;return(r=this.getAxisMotionValue(e).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(e){const r="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),s=i[r];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){_n(r=>{const{drag:i}=this.getProps();if(!iu(r,i,this.currentDirection))return;const{projection:s}=this.visualElement,l=this.getAxisMotionValue(r);if(s&&s.layout){const{min:u,max:c}=s.layout.layoutBox[r];l.set(e[r]-Qe(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:r}=this.getProps(),{projection:i}=this.visualElement;if(!ko(r)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};_n(u=>{const c=this.getAxisMotionValue(u);if(c){const f=c.get();s[u]=LT({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),_n(u=>{if(!iu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:f,max:p}=this.constraints[u];c.set(Qe(f,p,s[u]))})}addListeners(){if(!this.visualElement.current)return;WT.set(this.visualElement,this);const e=this.visualElement.current,r=br(e,"pointerdown",f=>{const{drag:p,dragListener:h=!0}=this.getProps();p&&h&&this.start(f)}),i=()=>{const{dragConstraints:f}=this.getProps();ko(f)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,l=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),i();const u=wr(window,"resize",()=>this.scalePositionWithinConstraints()),c=s.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p})=>{this.isDragging&&p&&(_n(h=>{const y=this.getAxisMotionValue(h);y&&(this.originPoint[h]+=f[h].translate,y.set(y.get()+f[h].translate))}),this.visualElement.render())});return()=>{u(),r(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:l=!1,dragElastic:u=lp,dragMomentum:c=!0}=e;return{...e,drag:r,dragDirectionLock:i,dragPropagation:s,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function iu(t,e,r){return(e===!0||e===t)&&(r===null||r===t)}function $T(t,e=10){let r=null;return Math.abs(t.y)>e?r="y":Math.abs(t.x)>e&&(r="x"),r}class HT extends ui{constructor(e){super(e),this.removeGroupControls=et,this.removeListeners=et,this.controls=new UT(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||et}unmount(){this.removeGroupControls(),this.removeListeners()}}const Qy=t=>(e,r)=>{t&&Me.update(()=>t(e,r))};class YT extends ui{constructor(){super(...arguments),this.removePointerDownListener=et}onPointerDown(e){this.session=new X1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:tw(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:r,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Qy(e),onStart:Qy(r),onMove:i,onEnd:(l,u)=>{delete this.session,s&&Me.update(()=>s(l,u))}}}mount(){this.removePointerDownListener=br(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function qT(){const t=R.useContext(Qu);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:r,register:i}=t,s=R.useId();return R.useEffect(()=>i(s),[]),!e&&r?[!1,()=>r&&r(s)]:[!0]}const yu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ky(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ms={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(be.test(t))t=parseFloat(t);else return t;const r=Ky(t,e.target.x),i=Ky(t,e.target.y);return`${r}% ${i}%`}},GT={correct:(t,{treeScale:e,projectionDelta:r})=>{const i=t,s=oi.parse(t);if(s.length>5)return i;const l=oi.createTransformer(t),u=typeof s[0]!="number"?1:0,c=r.x.scale*e.x,f=r.y.scale*e.y;s[0+u]/=c,s[1+u]/=f;const p=Qe(c,f,.5);return typeof s[2+u]=="number"&&(s[2+u]/=p),typeof s[3+u]=="number"&&(s[3+u]/=p),l(s)}};class XT extends Pe.Component{componentDidMount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:i,layoutId:s}=this.props,{projection:l}=e;nC(QT),l&&(r.group&&r.group.add(l),i&&i.register&&s&&i.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),yu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:r,visualElement:i,drag:s,isPresent:l}=this.props,u=i.projection;return u&&(u.isPresent=l,s||e.layoutDependency!==r||r===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Me.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function nw(t){const[e,r]=qT(),i=R.useContext(Xp);return Pe.createElement(XT,{...t,layoutGroup:i,switchLayoutGroup:R.useContext(Jx),isPresent:e,safeToRemove:r})}const QT={borderRadius:{...Ms,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ms,borderTopRightRadius:Ms,borderBottomLeftRadius:Ms,borderBottomRightRadius:Ms,boxShadow:GT},rw=["TopLeft","TopRight","BottomLeft","BottomRight"],KT=rw.length,Zy=t=>typeof t=="string"?parseFloat(t):t,Jy=t=>typeof t=="number"||be.test(t);function ZT(t,e,r,i,s,l){s?(t.opacity=Qe(0,r.opacity!==void 0?r.opacity:1,JT(i)),t.opacityExit=Qe(e.opacity!==void 0?e.opacity:1,0,e5(i))):l&&(t.opacity=Qe(e.opacity!==void 0?e.opacity:1,r.opacity!==void 0?r.opacity:1,i));for(let u=0;u<KT;u++){const c=`border${rw[u]}Radius`;let f=ev(e,c),p=ev(r,c);if(f===void 0&&p===void 0)continue;f||(f=0),p||(p=0),f===0||p===0||Jy(f)===Jy(p)?(t[c]=Math.max(Qe(Zy(f),Zy(p),i),0),(Jn.test(p)||Jn.test(f))&&(t[c]+="%")):t[c]=p}(e.rotate||r.rotate)&&(t.rotate=Qe(e.rotate||0,r.rotate||0,i))}function ev(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const JT=iw(0,.5,T1),e5=iw(.5,.95,et);function iw(t,e,r){return i=>i<t?0:i>e?1:r(Io(t,e,i))}function tv(t,e){t.min=e.min,t.max=e.max}function vn(t,e){tv(t.x,e.x),tv(t.y,e.y)}function nv(t,e,r,i,s){return t-=e,t=Mu(t,1/r,i),s!==void 0&&(t=Mu(t,1/s,i)),t}function t5(t,e=0,r=1,i=.5,s,l=t,u=t){if(Jn.test(e)&&(e=parseFloat(e),e=Qe(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Qe(l.min,l.max,i);t===l&&(c-=e),t.min=nv(t.min,e,r,c,s),t.max=nv(t.max,e,r,c,s)}function rv(t,e,[r,i,s],l,u){t5(t,e[r],e[i],e[s],e.scale,l,u)}const n5=["x","scaleX","originX"],r5=["y","scaleY","originY"];function iv(t,e,r,i){rv(t.x,e,n5,r?r.x:void 0,i?i.x:void 0),rv(t.y,e,r5,r?r.y:void 0,i?i.y:void 0)}function ov(t){return t.translate===0&&t.scale===1}function ow(t){return ov(t.x)&&ov(t.y)}function i5(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function sw(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function sv(t){return ln(t.x)/ln(t.y)}class o5{constructor(){this.members=[]}add(e){ph(this.members,e),e.scheduleRender()}remove(e){if(hh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(e){const r=this.members.findIndex(s=>e===s);if(r===0)return!1;let i;for(let s=r;s>=0;s--){const l=this.members[s];if(l.isPresent!==!1){i=l;break}}return i?(this.promote(i),!0):!1}promote(e,r){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,r&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:r,resumingFrom:i}=e;r.onExitComplete&&r.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function av(t,e,r){let i="";const s=t.x.translate/e.x,l=t.y.translate/e.y;if((s||l)&&(i=`translate3d(${s}px, ${l}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),r){const{rotate:f,rotateX:p,rotateY:h}=r;f&&(i+=`rotate(${f}deg) `),p&&(i+=`rotateX(${p}deg) `),h&&(i+=`rotateY(${h}deg) `)}const u=t.x.scale*e.x,c=t.y.scale*e.y;return(u!==1||c!==1)&&(i+=`scale(${u}, ${c})`),i||"none"}const s5=(t,e)=>t.depth-e.depth;class a5{constructor(){this.children=[],this.isDirty=!1}add(e){ph(this.children,e),this.isDirty=!0}remove(e){hh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(s5),this.isDirty=!1,this.children.forEach(e)}}function l5(t,e){const r=performance.now(),i=({timestamp:s})=>{const l=s-r;l>=e&&(nr(i),t(l-e))};return Me.read(i,!0),()=>nr(i)}function u5(t){window.MotionDebug&&window.MotionDebug.record(t)}function c5(t){return t instanceof SVGElement&&t.tagName!=="svg"}function d5(t,e,r){const i=Gt(t)?t:Kn(t);return i.start(fh("",i,e,r)),i.animation}const lv=["","X","Y","Z"],f5={visibility:"hidden"},uv=1e3;let p5=0;const Ai={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function aw({attachResizeListener:t,defaultParent:e,measureScroll:r,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(u={},c=e==null?void 0:e()){this.id=p5++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ai.totalNodes=Ai.resolvedTargetDeltas=Ai.recalculatedProjection=0,this.nodes.forEach(g5),this.nodes.forEach(b5),this.nodes.forEach(_5),this.nodes.forEach(y5),u5(Ai)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new a5)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new mh),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const f=this.eventHandlers.get(u);f&&f.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=c5(u),this.instance=u;const{layoutId:f,layout:p,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(p||f)&&(this.isLayoutDirty=!0),t){let y;const x=()=>this.root.updateBlockedByResize=!1;t(u,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=l5(x,250),yu.hasAnimatedSinceResize&&(yu.hasAnimatedSinceResize=!1,this.nodes.forEach(dv))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeTargetChanged:b,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||h.getDefaultTransition()||T5,{onLayoutAnimationStart:S,onLayoutAnimationComplete:j}=h.getProps(),T=!this.targetLayout||!sw(this.targetLayout,_)||b,C=!x&&b;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||C||x&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,C);const E={...dh(w,"layout"),onPlay:S,onComplete:j};(h.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E)}else x||dv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,nr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(S5),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const y=this.path[h];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:c,layout:f}=this.options;if(c===void 0&&!f)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cv);return}this.isUpdating||this.nodes.forEach(x5),this.isUpdating=!1,this.nodes.forEach(w5),this.nodes.forEach(h5),this.nodes.forEach(m5),this.clearAllSnapshots();const c=performance.now();St.delta=ii(0,1e3/60,c-St.timestamp),St.timestamp=c,St.isProcessing=!0,mf.update.process(St),mf.preRender.process(St),mf.render.process(St),St.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(v5),this.sharedNodes.forEach(k5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Me.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Me.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=at(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:u,isRoot:i(this.instance),offset:r(this.instance)})}resetTransform(){if(!s)return;const u=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!ow(this.projectionDelta),f=this.getTransformTemplate(),p=f?f(this.latestValues,""):void 0,h=p!==this.prevTransformTemplateValue;u&&(c||Oi(this.latestValues)||h)&&(s(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let f=this.removeElementScroll(c);return u&&(f=this.removeTransform(f)),j5(f),{animationId:this.root.animationId,measuredBox:c,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return at();const c=u.measureViewportBox(),{scroll:f}=this.root;return f&&(qr(c.x,f.offset.x),qr(c.y,f.offset.y)),c}removeElementScroll(u){const c=at();vn(c,u);for(let f=0;f<this.path.length;f++){const p=this.path[f],{scroll:h,options:y}=p;if(p!==this.root&&h&&y.layoutScroll){if(h.isRoot){vn(c,u);const{scroll:x}=this.root;x&&(qr(c.x,-x.offset.x),qr(c.y,-x.offset.y))}qr(c.x,h.offset.x),qr(c.y,h.offset.y)}}return c}applyTransform(u,c=!1){const f=at();vn(f,u);for(let p=0;p<this.path.length;p++){const h=this.path[p];!c&&h.options.layoutScroll&&h.scroll&&h!==h.root&&To(f,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),Oi(h.latestValues)&&To(f,h.latestValues)}return Oi(this.latestValues)&&To(f,this.latestValues),f}removeTransform(u){const c=at();vn(c,u);for(let f=0;f<this.path.length;f++){const p=this.path[f];if(!p.instance||!Oi(p.latestValues))continue;up(p.latestValues)&&p.updateSnapshot();const h=at(),y=p.measurePageBox();vn(h,y),iv(c,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,h)}return Oi(this.latestValues)&&iv(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==St.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=St.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),Ks(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=at(),this.targetWithTransforms=at()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ET(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):vn(this.target,this.layout.layoutBox),J1(this.target,this.targetDelta)):vn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),Ks(this.relativeTargetOrigin,this.target,b.target),vn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ai.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||up(this.parent.latestValues)||Z1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let p=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===St.timestamp&&(p=!1),p)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;vn(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,b=this.treeScale.y;FT(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:_}=c;if(!_){this.projectionTransform&&(this.projectionDelta=Po(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Po(),this.projectionDeltaWithTransform=Po());const w=this.projectionTransform;Qs(this.projectionDelta,this.layoutCorrected,_,this.latestValues),this.projectionTransform=av(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==x||this.treeScale.y!==b)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),Ai.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),u){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(u,c=!1){const f=this.snapshot,p=f?f.latestValues:{},h={...this.latestValues},y=Po();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const x=at(),b=f?f.source:void 0,_=this.layout?this.layout.source:void 0,w=b!==_,S=this.getStack(),j=!S||S.members.length<=1,T=!!(w&&!j&&this.options.crossfade===!0&&!this.path.some(P5));this.animationProgress=0;let C;this.mixTargetDelta=E=>{const P=E/1e3;fv(y.x,u.x,P),fv(y.y,u.y,P),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ks(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),C5(this.relativeTarget,this.relativeTargetOrigin,x,P),C&&i5(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=at()),vn(C,this.relativeTarget)),w&&(this.animationValues=h,ZT(h,p,this.latestValues,P,T,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(nr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Me.update(()=>{yu.hasAnimatedSinceResize=!0,this.currentAnimation=d5(0,uv,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:f,layout:p,latestValues:h}=u;if(!(!c||!f||!p)){if(this!==u&&this.layout&&p&&lw(this.options.animationType,this.layout.layoutBox,p.layoutBox)){f=this.target||at();const y=ln(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+y;const x=ln(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+x}vn(c,f),To(c,h),Qs(this.projectionDeltaWithTransform,this.layoutCorrected,c,h)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new o5),this.sharedNodes.get(u).add(c);const p=c.options.initialPromotionConfig;c.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:f}={}){const p=this.getStack();p&&p.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:f}=u;if((f.rotate||f.rotateX||f.rotateY||f.rotateZ)&&(c=!0),!c)return;const p={};for(let h=0;h<lv.length;h++){const y="rotate"+lv[h];f[y]&&(p[y]=f[y],u.setStaticValue(y,0))}u.render();for(const h in p)u.setStaticValue(h,p[h]);u.scheduleRender()}getProjectionStyles(u){var c,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return f5;const p={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=gu(u==null?void 0:u.pointerEvents)||"",p.transform=h?h(this.latestValues,""):"none",p;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=gu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Oi(this.latestValues)&&(w.transform=h?h({},""):"none",this.hasProjected=!1),w}const x=y.animationValues||y.latestValues;this.applyTransformsToTarget(),p.transform=av(this.projectionDeltaWithTransform,this.treeScale,x),h&&(p.transform=h(x,p.transform));const{x:b,y:_}=this.projectionDelta;p.transformOrigin=`${b.origin*100}% ${_.origin*100}% 0`,y.animationValues?p.opacity=y===this?(f=(c=x.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:p.opacity=y===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const w in Tu){if(x[w]===void 0)continue;const{correct:S,applyTo:j}=Tu[w],T=p.transform==="none"?x[w]:S(x[w],y);if(j){const C=j.length;for(let E=0;E<C;E++)p[j[E]]=T}else p[w]=T}return this.options.layoutId&&(p.pointerEvents=y===this?gu(u==null?void 0:u.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(cv),this.root.sharedNodes.clear()}}}function h5(t){t.updateLayout()}function m5(t){var e;const r=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&r&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=t.layout,{animationType:l}=t.options,u=r.source!==t.layout.source;l==="size"?_n(y=>{const x=u?r.measuredBox[y]:r.layoutBox[y],b=ln(x);x.min=i[y].min,x.max=x.min+b}):lw(l,r.layoutBox,i)&&_n(y=>{const x=u?r.measuredBox[y]:r.layoutBox[y],b=ln(i[y]);x.max=x.min+b,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+b)});const c=Po();Qs(c,i,r.layoutBox);const f=Po();u?Qs(f,t.applyTransform(s,!0),r.measuredBox):Qs(f,i,r.layoutBox);const p=!ow(c);let h=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:b}=y;if(x&&b){const _=at();Ks(_,r.layoutBox,x.layoutBox);const w=at();Ks(w,i,b.layoutBox),sw(_,w)||(h=!0),y.options.layoutRoot&&(t.relativeTarget=w,t.relativeTargetOrigin=_,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:r,delta:f,layoutDelta:c,hasLayoutChanged:p,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function g5(t){Ai.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function y5(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function v5(t){t.clearSnapshot()}function cv(t){t.clearMeasurements()}function x5(t){t.isLayoutDirty=!1}function w5(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function dv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function b5(t){t.resolveTargetDelta()}function _5(t){t.calcProjection()}function S5(t){t.resetRotation()}function k5(t){t.removeLeadSnapshot()}function fv(t,e,r){t.translate=Qe(e.translate,0,r),t.scale=Qe(e.scale,1,r),t.origin=e.origin,t.originPoint=e.originPoint}function pv(t,e,r,i){t.min=Qe(e.min,r.min,i),t.max=Qe(e.max,r.max,i)}function C5(t,e,r,i){pv(t.x,e.x,r.x,i),pv(t.y,e.y,r.y,i)}function P5(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const T5={duration:.45,ease:[.4,0,.1,1]},hv=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),mv=hv("applewebkit/")&&!hv("chrome/")?Math.round:et;function gv(t){t.min=mv(t.min),t.max=mv(t.max)}function j5(t){gv(t.x),gv(t.y)}function lw(t,e,r){return t==="position"||t==="preserve-aspect"&&!ap(sv(e),sv(r),.2)}const E5=aw({attachResizeListener:(t,e)=>wr(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cf={current:void 0},uw=aw({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Cf.current){const t=new E5({});t.mount(window),t.setOptions({layoutScroll:!0}),Cf.current=t}return Cf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),O5={pan:{Feature:YT},drag:{Feature:HT,ProjectionNode:uw,MeasureLayout:nw}},A5=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function R5(t){const e=A5.exec(t);if(!e)return[,];const[,r,i]=e;return[r,i]}function dp(t,e,r=1){const[i,s]=R5(t);if(!i)return;const l=window.getComputedStyle(e).getPropertyValue(i);if(l){const u=l.trim();return H1(u)?parseFloat(u):u}else return ep(s)?dp(s,e,r+1):s}function L5(t,{...e},r){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:r};r&&(r={...r}),t.values.forEach(s=>{const l=s.get();if(!ep(l))return;const u=dp(l,i);u&&s.set(u)});for(const s in e){const l=e[s];if(!ep(l))continue;const u=dp(l,i);u&&(e[s]=u,r||(r={}),r[s]===void 0&&(r[s]=l))}return{target:e,transitionEnd:r}}const M5=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),cw=t=>M5.has(t),D5=t=>Object.keys(t).some(cw),yv=t=>t===Yi||t===be,vv=(t,e)=>parseFloat(t.split(", ")[e]),xv=(t,e)=>(r,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/);if(s)return vv(s[1],e);{const l=i.match(/^matrix\((.+)\)$/);return l?vv(l[1],t):0}},I5=new Set(["x","y","z"]),z5=va.filter(t=>!I5.has(t));function F5(t){const e=[];return z5.forEach(r=>{const i=t.getValue(r);i!==void 0&&(e.push([r,i.get()]),i.set(r.startsWith("scale")?1:0))}),e.length&&t.render(),e}const zo={width:({x:t},{paddingLeft:e="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),height:({y:t},{paddingTop:e="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:xv(4,13),y:xv(5,14)};zo.translateX=zo.x;zo.translateY=zo.y;const N5=(t,e,r)=>{const i=e.measureViewportBox(),s=e.current,l=getComputedStyle(s),{display:u}=l,c={};u==="none"&&e.setStaticValue("display",t.display||"block"),r.forEach(p=>{c[p]=zo[p](i,l)}),e.render();const f=e.measureViewportBox();return r.forEach(p=>{const h=e.getValue(p);h&&h.jump(c[p]),t[p]=zo[p](f,l)}),t},B5=(t,e,r={},i={})=>{e={...e},i={...i};const s=Object.keys(e).filter(cw);let l=[],u=!1;const c=[];if(s.forEach(f=>{const p=t.getValue(f);if(!t.hasValue(f))return;let h=r[f],y=Ls(h);const x=e[f];let b;if(Eu(x)){const _=x.length,w=x[0]===null?1:0;h=x[w],y=Ls(h);for(let S=w;S<_&&x[S]!==null;S++)b?ih(Ls(x[S])===b):b=Ls(x[S])}else b=Ls(x);if(y!==b)if(yv(y)&&yv(b)){const _=p.get();typeof _=="string"&&p.set(parseFloat(_)),typeof x=="string"?e[f]=parseFloat(x):Array.isArray(x)&&b===be&&(e[f]=x.map(parseFloat))}else y!=null&&y.transform&&(b!=null&&b.transform)&&(h===0||x===0)?h===0?p.set(b.transform(h)):e[f]=y.transform(x):(u||(l=F5(t),u=!0),c.push(f),i[f]=i[f]!==void 0?i[f]:e[f],p.jump(x))}),c.length){const f=c.indexOf("height")>=0?window.pageYOffset:null,p=N5(e,t,c);return l.length&&l.forEach(([h,y])=>{t.getValue(h).set(y)}),t.render(),Ku&&f!==null&&window.scrollTo({top:f}),{target:p,transitionEnd:i}}else return{target:e,transitionEnd:i}};function V5(t,e,r,i){return D5(e)?B5(t,e,r,i):{target:e,transitionEnd:i}}const W5=(t,e,r,i)=>{const s=L5(t,e,i);return e=s.target,i=s.transitionEnd,V5(t,e,r,i)},fp={current:null},dw={current:!1};function U5(){if(dw.current=!0,!!Ku)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>fp.current=t.matches;t.addListener(e),e()}else fp.current=!1}function $5(t,e,r){const{willChange:i}=e;for(const s in e){const l=e[s],u=r[s];if(Gt(l))t.addValue(s,l),Lu(i)&&i.add(s);else if(Gt(u))t.addValue(s,Kn(l,{owner:t})),Lu(i)&&i.remove(s);else if(u!==l)if(t.hasValue(s)){const c=t.getValue(s);!c.hasAnimated&&c.set(l)}else{const c=t.getStaticValue(s);t.addValue(s,Kn(c!==void 0?c:l,{owner:t}))}}for(const s in r)e[s]===void 0&&t.removeValue(s);return e}const wv=new WeakMap,fw=Object.keys(sa),H5=fw.length,bv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Y5=Gp.length;class q5{constructor({parent:e,props:r,presenceContext:i,reducedMotionConfig:s,visualState:l},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Me.render(this.render,!1,!0);const{latestValues:c,renderState:f}=l;this.latestValues=c,this.baseTarget={...c},this.initialValues=r.initial?{...c}:{},this.renderState=f,this.parent=e,this.props=r,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=u,this.isControllingVariants=ec(r),this.isVariantNode=Zx(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...h}=this.scrapeMotionValuesFromProps(r,{});for(const y in h){const x=h[y];c[y]!==void 0&&Gt(x)&&(x.set(c[y],!1),Lu(p)&&p.add(y))}}scrapeMotionValuesFromProps(e,r){return{}}mount(e){this.current=e,wv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),dw.current||U5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:fp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){wv.delete(this.current),this.projection&&this.projection.unmount(),nr(this.notifyUpdate),nr(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,r){const i=Hi.has(e),s=r.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Me.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),l=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),l()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...r},i,s,l){let u,c;for(let f=0;f<H5;f++){const p=fw[f],{isEnabled:h,Feature:y,ProjectionNode:x,MeasureLayout:b}=sa[p];x&&(u=x),h(r)&&(!this.features[p]&&y&&(this.features[p]=new y(this)),b&&(c=b))}if((this.type==="html"||this.type==="svg")&&!this.projection&&u){this.projection=new u(this.latestValues,this.parent&&this.parent.projection);const{layoutId:f,layout:p,drag:h,dragConstraints:y,layoutScroll:x,layoutRoot:b}=r;this.projection.setOptions({layoutId:f,layout:p,alwaysMeasureLayout:!!h||y&&ko(y),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof p=="string"?p:"both",initialPromotionConfig:l,layoutScroll:x,layoutRoot:b})}return c}updateFeatures(){for(const e in this.features){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):at()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}makeTargetAnimatable(e,r=!0){return this.makeTargetAnimatableFromInstance(e,this.props,r)}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let i=0;i<bv.length;i++){const s=bv[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const l=e["on"+s];l&&(this.propEventSubscriptions[s]=this.on(s,l))}this.prevMotionValues=$5(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const r={};for(let i=0;i<Y5;i++){const s=Gp[i],l=this.props[s];(oa(l)||l===!1)&&(r[s]=l)}return r}addVariantChild(e){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){r!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,r)),this.values.set(e,r),this.latestValues[e]=r.get()}removeValue(e){this.values.delete(e);const r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&r!==void 0&&(i=Kn(r,{owner:this}),this.addValue(e,i)),i}readValue(e){var r;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){var r;const{initial:i}=this.props,s=typeof i=="string"||typeof i=="object"?(r=nh(this.props,i))===null||r===void 0?void 0:r[e]:void 0;if(i&&s!==void 0)return s;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Gt(l)?l:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,r){return this.events[e]||(this.events[e]=new mh),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}}class pw extends q5{sortInstanceNodePosition(e,r){return e.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(e,r){return e.style?e.style[r]:void 0}removeValueFromRenderState(e,{vars:r,style:i}){delete r[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:r,...i},{transformValues:s},l){let u=cT(i,e||{},this);if(s&&(r&&(r=s(r)),i&&(i=s(i)),u&&(u=s(u))),l){lT(this,i,u);const c=W5(this,i,u,r);r=c.transitionEnd,i=c.target}return{transition:e,transitionEnd:r,...i}}}function G5(t){return window.getComputedStyle(t)}class X5 extends pw{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,r){if(Hi.has(r)){const i=ch(r);return i&&i.default||0}else{const i=G5(e),s=(n1(r)?i.getPropertyValue(r):i[r])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:r}){return ew(e,r)}build(e,r,i,s){Kp(e,r,i,s.transformTemplate)}scrapeMotionValuesFromProps(e,r){return th(e,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Gt(e)&&(this.childSubscription=e.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(e,r,i,s){l1(e,r,i,s)}}class Q5 extends pw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(Hi.has(r)){const i=ch(r);return i&&i.default||0}return r=u1.has(r)?r:Yp(r),e.getAttribute(r)}measureInstanceViewportBox(){return at()}scrapeMotionValuesFromProps(e,r){return d1(e,r)}build(e,r,i,s){Jp(e,r,i,this.isSVGTag,s.transformTemplate)}renderInstance(e,r,i,s){c1(e,r,i,s)}mount(e){this.isSVGTag=eh(e.tagName),super.mount(e)}}const K5=(t,e)=>Qp(t)?new Q5(e,{enableHardwareAcceleration:!1}):new X5(e,{enableHardwareAcceleration:!0}),Z5={layout:{ProjectionNode:uw,MeasureLayout:nw}},J5={...CT,...HC,...O5,...Z5},ue=eC((t,e)=>RC(t,e,J5,K5));function hw(){const t=R.useRef(!1);return Zu(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function ej(){const t=hw(),[e,r]=R.useState(0),i=R.useCallback(()=>{t.current&&r(e+1)},[e]);return[R.useCallback(()=>Me.postRender(i),[i]),e]}class tj extends R.Component{getSnapshotBeforeUpdate(e){const r=this.props.childRef.current;if(r&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function nj({children:t,isPresent:e}){const r=R.useId(),i=R.useRef(null),s=R.useRef({width:0,height:0,top:0,left:0});return R.useInsertionEffect(()=>{const{width:l,height:u,top:c,left:f}=s.current;if(e||!i.current||!l||!u)return;i.current.dataset.motionPopId=r;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            top: ${c}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),R.createElement(tj,{isPresent:e,childRef:i,sizeRef:s},R.cloneElement(t,{ref:i}))}const Pf=({children:t,initial:e,isPresent:r,onExitComplete:i,custom:s,presenceAffectsLayout:l,mode:u})=>{const c=rh(rj),f=R.useId(),p=R.useMemo(()=>({id:f,initial:e,isPresent:r,custom:s,onExitComplete:h=>{c.set(h,!0);for(const y of c.values())if(!y)return;i&&i()},register:h=>(c.set(h,!1),()=>c.delete(h))}),l?void 0:[r]);return R.useMemo(()=>{c.forEach((h,y)=>c.set(y,!1))},[r]),R.useEffect(()=>{!r&&!c.size&&i&&i()},[r]),u==="popLayout"&&(t=R.createElement(nj,{isPresent:r},t)),R.createElement(Qu.Provider,{value:p},t)};function rj(){return new Map}function ij(t){return R.useEffect(()=>()=>t(),[])}const Ri=t=>t.key||"";function oj(t,e){t.forEach(r=>{const i=Ri(r);e.set(i,r)})}function sj(t){const e=[];return R.Children.forEach(t,r=>{R.isValidElement(r)&&e.push(r)}),e}const gh=({children:t,custom:e,initial:r=!0,onExitComplete:i,exitBeforeEnter:s,presenceAffectsLayout:l=!0,mode:u="sync"})=>{const c=R.useContext(Xp).forceRender||ej()[0],f=hw(),p=sj(t);let h=p;const y=R.useRef(new Map).current,x=R.useRef(h),b=R.useRef(new Map).current,_=R.useRef(!0);if(Zu(()=>{_.current=!1,oj(p,b),x.current=h}),ij(()=>{_.current=!0,b.clear(),y.clear()}),_.current)return R.createElement(R.Fragment,null,h.map(T=>R.createElement(Pf,{key:Ri(T),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:l,mode:u},T)));h=[...h];const w=x.current.map(Ri),S=p.map(Ri),j=w.length;for(let T=0;T<j;T++){const C=w[T];S.indexOf(C)===-1&&!y.has(C)&&y.set(C,void 0)}return u==="wait"&&y.size&&(h=[]),y.forEach((T,C)=>{if(S.indexOf(C)!==-1)return;const E=b.get(C);if(!E)return;const P=w.indexOf(C);let M=T;if(!M){const D=()=>{y.delete(C);const F=Array.from(b.keys()).filter(B=>!S.includes(B));if(F.forEach(B=>b.delete(B)),x.current=p.filter(B=>{const Y=Ri(B);return Y===C||F.includes(Y)}),!y.size){if(f.current===!1)return;c(),i&&i()}};M=R.createElement(Pf,{key:Ri(E),isPresent:!1,onExitComplete:D,custom:e,presenceAffectsLayout:l,mode:u},E),y.set(C,M)}h.splice(P,0,M)}),h=h.map(T=>{const C=T.key;return y.has(C)?T:R.createElement(Pf,{key:Ri(T),isPresent:!0,presenceAffectsLayout:l,mode:u},T)}),R.createElement(R.Fragment,null,y.size?h:h.map(T=>R.cloneElement(T)))};function mw(t,e,r){return typeof t=="string"?t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const vu=new WeakMap;let Yr;function aj(t,e){if(e){const{inlineSize:r,blockSize:i}=e[0];return{width:r,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function lj({target:t,contentRect:e,borderBoxSize:r}){var i;(i=vu.get(t))===null||i===void 0||i.forEach(s=>{s({target:t,contentSize:e,get size(){return aj(t,r)}})})}function uj(t){t.forEach(lj)}function cj(){typeof ResizeObserver>"u"||(Yr=new ResizeObserver(uj))}function dj(t,e){Yr||cj();const r=mw(t);return r.forEach(i=>{let s=vu.get(i);s||(s=new Set,vu.set(i,s)),s.add(e),Yr==null||Yr.observe(i)}),()=>{r.forEach(i=>{const s=vu.get(i);s==null||s.delete(e),s!=null&&s.size||Yr==null||Yr.unobserve(i)})}}const xu=new Set;let Zs;function fj(){Zs=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};xu.forEach(r=>r(e))},window.addEventListener("resize",Zs)}function pj(t){return xu.add(t),Zs||fj(),()=>{xu.delete(t),!xu.size&&Zs&&(Zs=void 0)}}function hj(t,e){return typeof t=="function"?pj(t):dj(t,e)}const mj=50,_v=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),gj=()=>({time:0,x:_v(),y:_v()}),yj={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Sv(t,e,r,i){const s=r[e],{length:l,position:u}=yj[e],c=s.current,f=r.time;s.current=t["scroll"+u],s.scrollLength=t["scroll"+l]-t["client"+l],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=Io(0,s.scrollLength,s.current);const p=i-f;s.velocity=p>mj?0:uh(s.current-c,p)}function vj(t,e,r){Sv(t,"x",e,r),Sv(t,"y",e,r),e.time=r}function xj(t,e){const r={x:0,y:0};let i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)r.x+=i.offsetLeft,r.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const s=i.getBoundingClientRect();i=i.parentElement;const l=i.getBoundingClientRect();r.x+=s.left-l.left,r.y+=s.top-l.top}else if(i instanceof SVGGraphicsElement){const{x:s,y:l}=i.getBBox();r.x+=s,r.y+=l;let u=null,c=i.parentNode;for(;!u;)c.tagName==="svg"&&(u=c),c=i.parentNode;i=u}else break;return r}const wj={All:[[0,0],[1,1]]},pp={start:0,center:.5,end:1};function kv(t,e,r=0){let i=0;if(pp[t]!==void 0&&(t=pp[t]),typeof t=="string"){const s=parseFloat(t);t.endsWith("px")?i=s:t.endsWith("%")?t=s/100:t.endsWith("vw")?i=s/100*document.documentElement.clientWidth:t.endsWith("vh")?i=s/100*document.documentElement.clientHeight:t=s}return typeof t=="number"&&(i=e*t),r+i}const bj=[0,0];function _j(t,e,r,i){let s=Array.isArray(t)?t:bj,l=0,u=0;return typeof t=="number"?s=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?s=t.split(" "):s=[t,pp[t]?t:"0"]),l=kv(s[0],r,i),u=kv(s[1],e),l-u}const Sj={x:0,y:0};function kj(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function Cj(t,e,r){let{offset:i=wj.All}=r;const{target:s=t,axis:l="y"}=r,u=l==="y"?"height":"width",c=s!==t?xj(s,t):Sj,f=s===t?{width:t.scrollWidth,height:t.scrollHeight}:kj(s),p={width:t.clientWidth,height:t.clientHeight};e[l].offset.length=0;let h=!e[l].interpolate;const y=i.length;for(let x=0;x<y;x++){const b=_j(i[x],p[u],f[u],c[l]);!h&&b!==e[l].interpolatorOffsets[x]&&(h=!0),e[l].offset[x]=b}h&&(e[l].interpolate=lh(e[l].offset,B1(i)),e[l].interpolatorOffsets=[...e[l].offset]),e[l].progress=e[l].interpolate(e[l].current)}function Pj(t,e=t,r){if(r.x.targetOffset=0,r.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)r.x.targetOffset+=i.offsetLeft,r.y.targetOffset+=i.offsetTop,i=i.offsetParent}r.x.targetLength=e===t?e.scrollWidth:e.clientWidth,r.y.targetLength=e===t?e.scrollHeight:e.clientHeight,r.x.containerLength=t.clientWidth,r.y.containerLength=t.clientHeight}function Tj(t,e,r,i={}){return{measure:()=>Pj(t,i.target,r),update:s=>{vj(t,r,s),(i.offset||i.target)&&Cj(t,r,i)},notify:()=>e(r)}}const Ds=new WeakMap,Cv=new WeakMap,Tf=new WeakMap,Pv=t=>t===document.documentElement?window:t;function jj(t,{container:e=document.documentElement,...r}={}){let i=Tf.get(e);i||(i=new Set,Tf.set(e,i));const s=gj(),l=Tj(e,t,s,r);if(i.add(l),!Ds.has(e)){const c=()=>{for(const x of i)x.measure()},f=()=>{for(const x of i)x.update(St.timestamp)},p=()=>{for(const x of i)x.notify()},h=()=>{Me.read(c,!1,!0),Me.read(f,!1,!0),Me.update(p,!1,!0)};Ds.set(e,h);const y=Pv(e);window.addEventListener("resize",h,{passive:!0}),e!==document.documentElement&&Cv.set(e,hj(e,h)),y.addEventListener("scroll",h,{passive:!0})}const u=Ds.get(e);return Me.read(u,!1,!0),()=>{var c;nr(u);const f=Tf.get(e);if(!f||(f.delete(l),f.size))return;const p=Ds.get(e);Ds.delete(e),p&&(Pv(e).removeEventListener("scroll",p),(c=Cv.get(e))===null||c===void 0||c(),window.removeEventListener("resize",p))}}function Tv(t,e){GC(!!(!e||e.current))}const Ej=()=>({scrollX:Kn(0),scrollY:Kn(0),scrollXProgress:Kn(0),scrollYProgress:Kn(0)});function Oj({container:t,target:e,layoutEffect:r=!0,...i}={}){const s=rh(Ej);return(r?Zu:R.useEffect)(()=>(Tv("target",e),Tv("container",t),jj(({x:u,y:c})=>{s.scrollX.set(u.current),s.scrollXProgress.set(u.progress),s.scrollY.set(c.current),s.scrollYProgress.set(c.progress)},{...i,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(i.offset)]),s}const Aj={some:0,all:1};function Rj(t,e,{root:r,margin:i,amount:s="some"}={}){const l=mw(t),u=new WeakMap,c=p=>{p.forEach(h=>{const y=u.get(h.target);if(h.isIntersecting!==!!y)if(h.isIntersecting){const x=e(h);typeof x=="function"?u.set(h.target,x):f.unobserve(h.target)}else y&&(y(h),u.delete(h.target))})},f=new IntersectionObserver(c,{root:r,rootMargin:i,threshold:typeof s=="number"?s:Aj[s]});return l.forEach(p=>f.observe(p)),()=>f.disconnect()}function Lj(t,{root:e,margin:r,amount:i,once:s=!1}={}){const[l,u]=R.useState(!1);return R.useEffect(()=>{if(!t.current||s&&l)return;const c=()=>(u(!0),s?void 0:()=>u(!1)),f={root:e&&e.current||void 0,margin:r,amount:i};return Rj(t.current,c,f)},[e,t,r,s,i]),l}const Mj=O(Vi)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  // background: linear-gradient(90deg, var(--primary) 50%, var(--secondary) 50%);
  -webkit-background-clip: text;
  // text-shadow: 0 0 10px rgba(0, 102, 204, 0.5);
  z-index: 1001;
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: -0.5px;
  height: 40px; /* Fixed height for better alignment */
  
  .logo-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .main-text {
    display: flex;
    align-items: center;
  }
  
  .company-text {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--primary);
    opacity: 1;
    margin-top: -5px;
    text-transform: uppercase;
    background: linear-gradient(90deg, var(--primary) 49%, var(--secondary) 0%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    position: relative;
    padding-bottom: 3px;
    
    @media (min-width: 768px) {
      font-size: 1rem;
      letter-spacing: 1.5px;
    }
  }
  
  .company-text::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, var(--primary) 50%, var(--secondary) 50%);
  }
  
  .full-text {
    display: flex;
  }

  margin-top: 10px;
`,Dj=O.div`
  width: 38px;
  height: 38px;
  margin-right: 8px;
  position: relative;
  // box-shadow: 0 8px 20px rgba(0, 102, 204, 0.4);
  border-radius: 14px;
  overflow: hidden;
  transform: perspective(500px) rotateY(-5deg);
  transition: all 0.5s ease;
  
  // &:hover {
  //   transform: perspective(500px) rotateY(5deg);
  //   box-shadow: 0 12px 25px var(--primary-light);
  // }
  
  @media (min-width: 768px) {
    width: 42px;
    height: 42px;
    margin-right: 15px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary) 30%, var(--secondary) 70%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.4) 0%, transparent 0%);
    z-index: 3;
  }
  
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
  
  // animation: float 6s ease-in-out infinite;
  // @keyframes float {
  //   0% { transform: perspective(500px) rotateY(-5deg) translateY(0px); }
  //   50% { transform: perspective(500px) rotateY(-5deg) translateY(-5px); }
  //   100% { transform: perspective(500px) rotateY(-5deg) translateY(0px); }
  // }
`,Ij=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  letter-spacing: -1px;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
`,zj=O.span`
  color: white;
  transform: skewX(-10deg);
  margin-right: 2px;
  text-shadow: 0 0 3px rgba(255,255,255,0.2);
`,Fj=O.span`
  color: white;
  text-shadow: 0 0 3px rgba(255,255,255,0.2);
`,Nj=()=>m.jsxs(Mj,{to:"/",children:[m.jsx(Dj,{children:m.jsxs(Ij,{children:[m.jsx(zj,{children:"F"}),m.jsx(Fj,{children:"W"})]})}),m.jsx("div",{className:"logo-text",children:m.jsx("div",{className:"main-text",children:m.jsx("span",{className:"full-text",children:m.jsx("div",{className:"company-text",children:"The FriendlyWeb Company"})})})})]}),Bj=O.nav`
  position: sticky;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
	top: 0;
	left: 0;
  
  @media (min-width: 768px) {
    padding: 1.5rem 0;
  }
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: ${t=>t.scrolled?"rgba(240, 240, 240, 0.95)":"transparent"};
  backdrop-filter: ${t=>t.scrolled?"blur(10px)":"none"};
  box-shadow: ${t=>t.scrolled?"0 4px 20px rgba(0, 0, 0, 0.08)":"none"};
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${t=>t.scrolled?"1px":"0"};
    background: linear-gradient(90deg, var(--primary) 50%, var(--secondary) 50%);
    opacity: 0.5;
  }
`,Vj=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Wj=O.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Uj=O(Vi)`
  background: linear-gradient(135deg, var(--primary) 30%, var(--secondary) 70%);
  color: white !important;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.6rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(0, 102, 204, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`,$j=O(Vi)`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white !important;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  display: block;
  text-align: center;
  margin: 1rem auto;
  width: 80%;
  max-width: 250px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(0, 102, 204, 0.4);
  }
`,Pi=O(Gn.Link)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

	&:hover {
		color: var(--primary);
	}
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 50%, var(--secondary) 50%);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`,Hj=O.button`
  background: transparent;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  color: ${t=>t.scrolled?"var(--primary)":"var(--light)"};
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
  transition: color 0.3s ease;
  padding: 0;
  margin: 0;
  display: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 40px; /* Match logo height */
  align-items: center;
  justify-content: center; /* Center the hamburger icon */
  line-height: 1; /* Ensure the icon is centered vertically */
  position: relative;
  top: -1px; /* Fine-tune vertical alignment */
  
  &:hover {
    color: var(--secondary);
  }
  
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`,Yj=O(ue.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(240, 240, 240, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow-y: auto;
`,hr=O(ue.div)`
  cursor: pointer;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  width: 90%;
  max-width: 300px;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  a {
    color: var(--primary);
    display: block;
    width: 100%;
    text-decoration: none;
  }
`,qj=()=>{const[t,e]=R.useState(!1),[r,i]=R.useState(!1),l=dn().pathname==="/";R.useEffect(()=>{const f=()=>{window.scrollY>50?e(!0):e(!1)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const u=()=>i(!r),c={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2}}};return m.jsxs(Bj,{scrolled:t,children:[m.jsxs(Vj,{children:[m.jsx(Nj,{}),m.jsxs(Wj,{children:[l?m.jsxs(m.Fragment,{children:[m.jsx(Pi,{to:"services",smooth:!0,duration:500,offset:-100,scrolled:t,children:"Services"}),m.jsx(Pi,{to:"portfolio",smooth:!0,duration:500,offset:-100,scrolled:t,children:"Work"}),m.jsx(Pi,{to:"about",smooth:!0,duration:500,offset:-100,scrolled:t,children:"About"}),m.jsx(Pi,{to:"process",smooth:!0,duration:500,offset:-100,scrolled:t,children:"Process"}),m.jsx(Pi,{to:"basic-package",smooth:!0,duration:500,offset:-100,scrolled:t,children:"What's Included"}),m.jsx(Pi,{to:"testimonials",smooth:!0,duration:500,offset:-100,scrolled:t,children:"Testimonials"}),m.jsx(Pi,{to:"contact",smooth:!0,duration:500,offset:-100,scrolled:t,children:"Contact"})]}):m.jsx(Vi,{to:"/",style:{color:t?"#333":"var(--light)",fontFamily:"'Orbitron', sans-serif",fontSize:"1rem",fontWeight:500},children:"Home"}),m.jsx(Uj,{to:"/order",onClick:()=>window.scrollTo({top:0,behavior:"instant"}),children:"Order Now"})]}),m.jsx(Hj,{onClick:u,scrolled:t,"aria-label":"Toggle navigation menu",children:r?"×":"☰"})]}),m.jsx(gh,{children:r&&m.jsx(Yj,{initial:"hidden",animate:"visible",exit:"hidden",variants:c,children:m.jsxs("div",{style:{width:"100%",maxHeight:"80vh",overflowY:"auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[l?m.jsxs(m.Fragment,{children:[m.jsx(hr,{children:m.jsx(Gn.Link,{to:"hero",smooth:!0,duration:500,offset:-100,onClick:()=>i(!1),children:"Home"})}),m.jsx(hr,{children:m.jsx(Gn.Link,{to:"services",smooth:!0,duration:500,offset:-100,onClick:()=>i(!1),children:"Services"})}),m.jsx(hr,{children:m.jsx(Gn.Link,{to:"portfolio",smooth:!0,duration:500,offset:-100,onClick:()=>i(!1),children:"Work"})}),m.jsx(hr,{children:m.jsx(Gn.Link,{to:"about",smooth:!0,duration:500,offset:-100,onClick:()=>i(!1),children:"About"})}),m.jsx(hr,{children:m.jsx(Gn.Link,{to:"process",smooth:!0,duration:500,offset:-100,onClick:()=>i(!1),children:"Process"})}),m.jsx(hr,{children:m.jsx(Gn.Link,{to:"basic-package",smooth:!0,duration:500,offset:-100,onClick:()=>i(!1),children:"Package"})}),m.jsx(hr,{children:m.jsx(Gn.Link,{to:"testimonials",smooth:!0,duration:500,offset:-100,onClick:()=>i(!1),children:"Testimonials"})}),m.jsx(hr,{children:m.jsx(Gn.Link,{to:"contact",smooth:!0,duration:500,offset:-100,onClick:()=>i(!1),children:"Contact"})})]}):m.jsx(hr,{children:m.jsx(Vi,{to:"/",onClick:()=>i(!1),children:"Home"})}),m.jsx($j,{to:"/order",onClick:()=>{i(!1),window.scrollTo({top:0,behavior:"instant"})},children:"Order Now"})]})})})]})},Gj=O.footer`
  background: linear-gradient(180deg, rgba(240,240,240,0) 0%, rgba(240,240,240,1) 100%);
  padding: 6rem 0 2rem;
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 100%;
`,Xj=O.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,ou=O.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Qj=O(Vi)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
  
  span {
    color: var(--secondary);
  }
`,jf=O.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #555555;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--primary);
  }
`;O.a`
  color: #666666;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: var(--primary);
  }
`;O(Gn.Link)`
  color: #666666;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: var(--primary);
  }
`;const Is=O.p`
  color: #666666;
  line-height: 1.6;
`;O.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;O(ue.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    transform: translateY(-3px);
  }
`;const Kj=O.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #dddddd;
  color: #666666;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`,jv=O(ue.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(136,68,238,0.1) 0%, rgba(136,68,238,0) 70%);
  z-index: -1;
  filter: blur(40px);
`,Zj=()=>{const t=dn(),e=li(),r=t.pathname==="/",i=s=>{if(r){const l=document.getElementById(s);l&&l.scrollIntoView({behavior:"smooth",block:"start"})}else e(`/#${s}`),sessionStorage.setItem("scrollToSection",s)};return R.useEffect(()=>{if(r&&t.hash){const s=t.hash.substring(1);setTimeout(()=>{const l=document.getElementById(s);l&&l.scrollIntoView({behavior:"smooth",block:"start"})},100)}},[r,t.hash]),m.jsxs(Gj,{children:[m.jsx(jv,{initial:{x:"70vw",y:"30vh"},animate:{x:["70vw","65vw","70vw"],y:["30vh","35vh","30vh"]},transition:{duration:8,repeat:1/0,repeatType:"reverse"}}),m.jsx(jv,{initial:{x:"20vw",y:"60vh"},animate:{x:["20vw","25vw","20vw"],y:["60vh","55vh","60vh"]},transition:{duration:10,repeat:1/0,repeatType:"reverse"},style:{background:"radial-gradient(circle, rgba(0,240,255,0.1) 0%, rgba(0,240,255,0) 70%)"}}),m.jsxs(Xj,{children:[m.jsxs(ou,{children:[m.jsxs(Qj,{to:"/",children:["The Friendly",m.jsx("span",{children:"Web Company"})," "]}),m.jsx(Is,{children:"We turn your ideas into websites that feel inviting and easy to use—helping you connect with the people who matter most.          "})]}),m.jsxs(ou,{children:[m.jsx(jf,{children:"Services"}),m.jsx("div",{onClick:()=>i("services"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Small Business Websites"}),m.jsx("div",{onClick:()=>i("services"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Professional Design"}),m.jsx("div",{onClick:()=>i("services"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Online Stores"}),m.jsx("div",{onClick:()=>i("services"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Local Business Visibility"}),m.jsx("div",{onClick:()=>i("services"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Website Maintenance"}),m.jsx("div",{onClick:()=>i("services"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Small Business Marketing"})]}),m.jsxs(ou,{children:[m.jsx(jf,{children:"Company"}),m.jsx("div",{onClick:()=>i("about"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"About Us"}),m.jsx("div",{onClick:()=>i("portfolio"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Our Work"}),m.jsx("div",{onClick:()=>i("process"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Process"}),m.jsx("div",{onClick:()=>i("testimonials"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Testimonials"}),m.jsx("div",{onClick:()=>i("contact"),style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem",cursor:"pointer"},children:"Contact"}),m.jsx(Vi,{to:"/terms",style:{color:"inherit",textDecoration:"none",display:"block",marginTop:"0.5rem"},children:"Terms & Conditions"})]}),m.jsxs(ou,{children:[m.jsx(jf,{children:"Contact"}),m.jsx(Is,{children:"1 Blue Hill Plaza, Suite 1509-43"}),m.jsx(Is,{children:"Pearl River, NY 10965"}),m.jsx(Is,{children:"hello@friendlyweb.co"}),m.jsx(Is,{children:"+1 (845) 540-6100"})]})]}),m.jsxs(Kj,{children:["© ",new Date().getFullYear()," The Friendly Web Company. All rights reserved."]})]})};function gr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gw(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},yh,kt,$e,er=1e8,Ot=1/er,hp=Math.PI*2,Jj=hp/4,eE=0,yw=Math.sqrt,tE=Math.cos,nE=Math.sin,wt=function(e){return typeof e=="string"},tt=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},vh=function(e){return typeof e>"u"},rr=function(e){return typeof e=="object"},$t=function(e){return e!==!1},xh=function(){return typeof window<"u"},su=function(e){return tt(e)||wt(e)},vw=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rt=Array.isArray,mp=/(?:-?\.?\d|\.)+/gi,xw=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ef=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ww=/[+-]=-?[.\d]+/,bw=/[^,'"\[\]\s]+/gi,rE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,Xn,gp,wh,un={},Du={},_w,Sw=function(e){return(Du=No(e,un))&&Xt},bh=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},aa=function(e,r){return!r&&console.warn(e)},kw=function(e,r){return e&&(un[e]=r)&&Du&&(Du[e]=r)||un},la=function(){return 0},iE={suppressEvents:!0,isStart:!0,kill:!1},wu={suppressEvents:!0,kill:!1},oE={suppressEvents:!0},_h={},ni=[],yp={},Cw,rn={},Of={},Ev=30,bu=[],Sh="",kh=function(e){var r=e[0],i,s;if(rr(r)||tt(r)||(e=[e]),!(i=(r._gsap||{}).harness)){for(s=bu.length;s--&&!bu[s].targetTest(r););i=bu[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Xw(e[s],i)))||e.splice(s,1);return e},zi=function(e){return e._gsap||kh(Tn(e))[0]._gsap},Pw=function(e,r,i){return(i=e[r])&&tt(i)?e[r]():vh(i)&&e.getAttribute&&e.getAttribute(r)||i},Ht=function(e,r){return(e=e.split(",")).forEach(r)||e},it=function(e){return Math.round(e*1e5)/1e5||0},ut=function(e){return Math.round(e*1e7)/1e7||0},Oo=function(e,r){var i=r.charAt(0),s=parseFloat(r.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},sE=function(e,r){for(var i=r.length,s=0;e.indexOf(r[s])<0&&++s<i;);return s<i},Iu=function(){var e=ni.length,r=ni.slice(0),i,s;for(yp={},ni.length=0,i=0;i<e;i++)s=r[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Tw=function(e,r,i,s){ni.length&&!kt&&Iu(),e.render(r,i,kt&&r<0&&(e._initted||e._startAt)),ni.length&&!kt&&Iu()},jw=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(bw).length<2?r:wt(e)?e.trim():e},Ew=function(e){return e},cn=function(e,r){for(var i in r)i in e||(e[i]=r[i]);return e},aE=function(e){return function(r,i){for(var s in i)s in r||s==="duration"&&e||s==="ease"||(r[s]=i[s])}},No=function(e,r){for(var i in r)e[i]=r[i];return e},Ov=function t(e,r){for(var i in r)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=rr(r[i])?t(e[i]||(e[i]={}),r[i]):r[i]);return e},zu=function(e,r){var i={},s;for(s in e)s in r||(i[s]=e[s]);return i},Js=function(e){var r=e.parent||Xe,i=e.keyframes?aE(Rt(e.keyframes)):cn;if($t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e},lE=function(e,r){for(var i=e.length,s=i===r.length;s&&i--&&e[i]===r[i];);return i<0},Ow=function(e,r,i,s,l){var u=e[s],c;if(l)for(c=r[l];u&&u[l]>c;)u=u._prev;return u?(r._next=u._next,u._next=r):(r._next=e[i],e[i]=r),r._next?r._next._prev=r:e[s]=r,r._prev=u,r.parent=r._dp=e,r},ic=function(e,r,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var l=r._prev,u=r._next;l?l._next=u:e[i]===r&&(e[i]=u),u?u._prev=l:e[s]===r&&(e[s]=l),r._next=r._prev=r.parent=null},si=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fi=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},uE=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},vp=function(e,r,i,s){return e._startAt&&(kt?e._startAt.revert(wu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,s))},cE=function t(e){return!e||e._ts&&t(e.parent)},Av=function(e){return e._repeat?Bo(e._tTime,e=e.duration()+e._rDelay)*e:0},Bo=function(e,r){var i=Math.floor(e=ut(e/r));return e&&i===e?i-1:i},Fu=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},oc=function(e){return e._end=ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},sc=function(e,r){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ut(i._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),oc(e),i._dirty||Fi(i,e)),e},Aw=function(e,r){var i;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(i=Fu(e.rawTime(),r),(!r._dur||_a(0,r.totalDuration(),i)-r._tTime>Ot)&&r.render(i,!0)),Fi(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},Qn=function(e,r,i,s){return r.parent&&si(r),r._start=ut((Sr(i)?i:i||e!==Xe?Sn(e,i,r):e._time)+r._delay),r._end=ut(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),Ow(e,r,"_first","_last",e._sort?"_start":0),xp(r)||(e._recent=r),s||Aw(e,r),e._ts<0&&sc(e,e._tTime),e},Rw=function(e,r){return(un.ScrollTrigger||bh("scrollTrigger",r))&&un.ScrollTrigger.create(r,e)},Lw=function(e,r,i,s,l){if(Ph(e,r,l),!e._initted)return 1;if(!i&&e._pt&&!kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Cw!==on.frame)return ni.push(e),e._lazy=[l,s],1},dE=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},xp=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},fE=function(e,r,i,s){var l=e.ratio,u=r<0||!r&&(!e._start&&dE(e)&&!(!e._initted&&xp(e))||(e._ts<0||e._dp._ts<0)&&!xp(e))?0:1,c=e._rDelay,f=0,p,h,y;if(c&&e._repeat&&(f=_a(0,e._tDur,r),h=Bo(f,c),e._yoyo&&h&1&&(u=1-u),h!==Bo(e._tTime,c)&&(l=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==l||kt||s||e._zTime===Ot||!r&&e._zTime){if(!e._initted&&Lw(e,r,s,i,f))return;for(y=e._zTime,e._zTime=r||(i?Ot:0),i||(i=r&&!y),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=f,p=e._pt;p;)p.r(u,p.d),p=p._next;r<0&&vp(e,r,i,!0),e._onUpdate&&!i&&sn(e,"onUpdate"),f&&e._repeat&&!i&&e.parent&&sn(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===u&&(u&&si(e,1),!i&&!kt&&(sn(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},pE=function(e,r,i){var s;if(i>r)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>r)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<r)return s;s=s._prev}},Vo=function(e,r,i,s){var l=e._repeat,u=ut(r)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=l?l<0?1e10:ut(u*(l+1)+e._rDelay*l):u,c>0&&!s&&sc(e,e._tTime=e._tDur*c),e.parent&&oc(e),i||Fi(e.parent,e),e},Rv=function(e){return e instanceof It?Fi(e):Vo(e,e._dur)},hE={_start:0,endTime:la,totalDuration:la},Sn=function t(e,r,i){var s=e.labels,l=e._recent||hE,u=e.duration()>=er?l.endTime(!1):e._dur,c,f,p;return wt(r)&&(isNaN(r)||r in s)?(f=r.charAt(0),p=r.substr(-1)==="%",c=r.indexOf("="),f==="<"||f===">"?(c>=0&&(r=r.replace(/=/,"")),(f==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(r.substr(1))||0)*(p?(c<0?l:i).totalDuration()/100:1)):c<0?(r in s||(s[r]=u),s[r]):(f=parseFloat(r.charAt(c-1)+r.substr(c+1)),p&&i&&(f=f/100*(Rt(i)?i[0]:i).totalDuration()),c>1?t(e,r.substr(0,c-1),i)+f:u+f)):r==null?u:+r},ea=function(e,r,i){var s=Sr(r[1]),l=(s?2:1)+(e<2?0:1),u=r[l],c,f;if(s&&(u.duration=r[1]),u.parent=i,e){for(c=u,f=i;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=$t(f.vars.inherit)&&f.parent;u.immediateRender=$t(c.immediateRender),e<2?u.runBackwards=1:u.startAt=r[l-1]}return new lt(r[0],u,r[l+1])},ci=function(e,r){return e||e===0?r(e):r},_a=function(e,r,i){return i<e?e:i>r?r:i},Et=function(e,r){return!wt(e)||!(r=rE.exec(e))?"":r[1]},mE=function(e,r,i){return ci(i,function(s){return _a(e,r,s)})},wp=[].slice,Mw=function(e,r){return e&&rr(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&rr(e[0]))&&!e.nodeType&&e!==Xn},gE=function(e,r,i){return i===void 0&&(i=[]),e.forEach(function(s){var l;return wt(s)&&!r||Mw(s,1)?(l=i).push.apply(l,Tn(s)):i.push(s)})||i},Tn=function(e,r,i){return $e&&!r&&$e.selector?$e.selector(e):wt(e)&&!i&&(gp||!Wo())?wp.call((r||wh).querySelectorAll(e),0):Rt(e)?gE(e,i):Mw(e)?wp.call(e,0):e?[e]:[]},bp=function(e){return e=Tn(e)[0]||aa("Invalid scope")||{},function(r){var i=e.current||e.nativeElement||e;return Tn(r,i.querySelectorAll?i:i===e?aa("Invalid scope")||wh.createElement("div"):e)}},Dw=function(e){return e.sort(function(){return .5-Math.random()})},Iw=function(e){if(tt(e))return e;var r=rr(e)?e:{each:e},i=Ni(r.ease),s=r.from||0,l=parseFloat(r.base)||0,u={},c=s>0&&s<1,f=isNaN(s)||c,p=r.axis,h=s,y=s;return wt(s)?h=y={center:.5,edges:.5,end:1}[s]||0:!c&&f&&(h=s[0],y=s[1]),function(x,b,_){var w=(_||r).length,S=u[w],j,T,C,E,P,M,D,F,B;if(!S){if(B=r.grid==="auto"?0:(r.grid||[1,er])[1],!B){for(D=-1e8;D<(D=_[B++].getBoundingClientRect().left)&&B<w;);B<w&&B--}for(S=u[w]=[],j=f?Math.min(B,w)*h-.5:s%B,T=B===er?0:f?w*y/B-.5:s/B|0,D=0,F=er,M=0;M<w;M++)C=M%B-j,E=T-(M/B|0),S[M]=P=p?Math.abs(p==="y"?E:C):yw(C*C+E*E),P>D&&(D=P),P<F&&(F=P);s==="random"&&Dw(S),S.max=D-F,S.min=F,S.v=w=(parseFloat(r.amount)||parseFloat(r.each)*(B>w?w-1:p?p==="y"?w/B:B:Math.max(B,w/B))||0)*(s==="edges"?-1:1),S.b=w<0?l-w:l,S.u=Et(r.amount||r.each)||0,i=i&&w<0?Yw(i):i}return w=(S[x]-S.min)/S.max||0,ut(S.b+(i?i(w):w)*S.v)+S.u}},_p=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=ut(Math.round(parseFloat(i)/e)*e*r);return(s-s%1)/r+(Sr(i)?0:Et(i))}},zw=function(e,r){var i=Rt(e),s,l;return!i&&rr(e)&&(s=i=e.radius||er,e.values?(e=Tn(e.values),(l=!Sr(e[0]))&&(s*=s)):e=_p(e.increment)),ci(r,i?tt(e)?function(u){return l=e(u),Math.abs(l-u)<=s?l:u}:function(u){for(var c=parseFloat(l?u.x:u),f=parseFloat(l?u.y:0),p=er,h=0,y=e.length,x,b;y--;)l?(x=e[y].x-c,b=e[y].y-f,x=x*x+b*b):x=Math.abs(e[y]-c),x<p&&(p=x,h=y);return h=!s||p<=s?e[h]:u,l||h===u||Sr(u)?h:h+Et(u)}:_p(e))},Fw=function(e,r,i,s){return ci(Rt(e)?!r:i===!0?!!(i=0):!s,function(){return Rt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(r-e+i*.99))/i)*i*s)/s})},yE=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return function(s){return r.reduce(function(l,u){return u(l)},s)}},vE=function(e,r){return function(i){return e(parseFloat(i))+(r||Et(i))}},xE=function(e,r,i){return Bw(e,r,0,1,i)},Nw=function(e,r,i){return ci(i,function(s){return e[~~r(s)]})},wE=function t(e,r,i){var s=r-e;return Rt(e)?Nw(e,t(0,e.length),r):ci(i,function(l){return(s+(l-e)%s)%s+e})},bE=function t(e,r,i){var s=r-e,l=s*2;return Rt(e)?Nw(e,t(0,e.length-1),r):ci(i,function(u){return u=(l+(u-e)%l)%l||0,e+(u>s?l-u:u)})},ua=function(e){for(var r=0,i="",s,l,u,c;~(s=e.indexOf("random(",r));)u=e.indexOf(")",s),c=e.charAt(s+7)==="[",l=e.substr(s+7,u-s-7).match(c?bw:mp),i+=e.substr(r,s-r)+Fw(c?l:+l[0],c?0:+l[1],+l[2]||1e-5),r=u+1;return i+e.substr(r,e.length-r)},Bw=function(e,r,i,s,l){var u=r-e,c=s-i;return ci(l,function(f){return i+((f-e)/u*c||0)})},_E=function t(e,r,i,s){var l=isNaN(e+r)?0:function(b){return(1-b)*e+b*r};if(!l){var u=wt(e),c={},f,p,h,y,x;if(i===!0&&(s=1)&&(i=null),u)e={p:e},r={p:r};else if(Rt(e)&&!Rt(r)){for(h=[],y=e.length,x=y-2,p=1;p<y;p++)h.push(t(e[p-1],e[p]));y--,l=function(_){_*=y;var w=Math.min(x,~~_);return h[w](_-w)},i=r}else s||(e=No(Rt(e)?[]:{},e));if(!h){for(f in r)Ch.call(c,e,f,"get",r[f]);l=function(_){return Eh(_,c)||(u?e.p:e)}}}return ci(i,l)},Lv=function(e,r,i){var s=e.labels,l=er,u,c,f;for(u in s)c=s[u]-r,c<0==!!i&&c&&l>(c=Math.abs(c))&&(f=u,l=c);return f},sn=function(e,r,i){var s=e.vars,l=s[r],u=$e,c=e._ctx,f,p,h;if(l)return f=s[r+"Params"],p=s.callbackScope||e,i&&ni.length&&Iu(),c&&($e=c),h=f?l.apply(p,f):l.call(p),$e=u,h},$s=function(e){return si(e),e.scrollTrigger&&e.scrollTrigger.kill(!!kt),e.progress()<1&&sn(e,"onInterrupt"),e},Eo,Vw=[],Ww=function(e){if(e)if(e=!e.name&&e.default||e,xh()||e.headless){var r=e.name,i=tt(e),s=r&&!i&&e.init?function(){this._props=[]}:e,l={init:la,render:Eh,add:Ch,kill:FE,modifier:zE,rawVars:0},u={targetTest:0,get:0,getSetter:jh,aliases:{},register:0};if(Wo(),e!==s){if(rn[r])return;cn(s,cn(zu(e,l),u)),No(s.prototype,No(l,zu(e,u))),rn[s.prop=r]=s,e.targetTest&&(bu.push(s),_h[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}kw(r,s),e.register&&e.register(Xt,s,Yt)}else Vw.push(e)},ze=255,Hs={aqua:[0,ze,ze],lime:[0,ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ze],navy:[0,0,128],white:[ze,ze,ze],olive:[128,128,0],yellow:[ze,ze,0],orange:[ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ze,0,0],pink:[ze,192,203],cyan:[0,ze,ze],transparent:[ze,ze,ze,0]},Af=function(e,r,i){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(i-r)*e*6:e<.5?i:e*3<2?r+(i-r)*(2/3-e)*6:r)*ze+.5|0},Uw=function(e,r,i){var s=e?Sr(e)?[e>>16,e>>8&ze,e&ze]:0:Hs.black,l,u,c,f,p,h,y,x,b,_;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])s=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+l+l+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&ze,s&ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&ze,e&ze]}else if(e.substr(0,3)==="hsl"){if(s=_=e.match(mp),!r)f=+s[0]%360/360,p=+s[1]/100,h=+s[2]/100,u=h<=.5?h*(p+1):h+p-h*p,l=h*2-u,s.length>3&&(s[3]*=1),s[0]=Af(f+1/3,l,u),s[1]=Af(f,l,u),s[2]=Af(f-1/3,l,u);else if(~e.indexOf("="))return s=e.match(xw),i&&s.length<4&&(s[3]=1),s}else s=e.match(mp)||Hs.transparent;s=s.map(Number)}return r&&!_&&(l=s[0]/ze,u=s[1]/ze,c=s[2]/ze,y=Math.max(l,u,c),x=Math.min(l,u,c),h=(y+x)/2,y===x?f=p=0:(b=y-x,p=h>.5?b/(2-y-x):b/(y+x),f=y===l?(u-c)/b+(u<c?6:0):y===u?(c-l)/b+2:(l-u)/b+4,f*=60),s[0]=~~(f+.5),s[1]=~~(p*100+.5),s[2]=~~(h*100+.5)),i&&s.length<4&&(s[3]=1),s},$w=function(e){var r=[],i=[],s=-1;return e.split(ri).forEach(function(l){var u=l.match(jo)||[];r.push.apply(r,u),i.push(s+=u.length+1)}),r.c=i,r},Mv=function(e,r,i){var s="",l=(e+s).match(ri),u=r?"hsla(":"rgba(",c=0,f,p,h,y;if(!l)return e;if(l=l.map(function(x){return(x=Uw(x,r,1))&&u+(r?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),i&&(h=$w(e),f=i.c,f.join(s)!==h.c.join(s)))for(p=e.replace(ri,"1").split(jo),y=p.length-1;c<y;c++)s+=p[c]+(~f.indexOf(c)?l.shift()||u+"0,0,0,0)":(h.length?h:l.length?l:i).shift());if(!p)for(p=e.split(ri),y=p.length-1;c<y;c++)s+=p[c]+l[c];return s+p[y]},ri=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),SE=/hsl[a]?\(/,Hw=function(e){var r=e.join(" "),i;if(ri.lastIndex=0,ri.test(r))return i=SE.test(r),e[1]=Mv(e[1],i),e[0]=Mv(e[0],i,$w(e[1])),!0},ca,on=function(){var t=Date.now,e=500,r=33,i=t(),s=i,l=1e3/240,u=l,c=[],f,p,h,y,x,b,_=function w(S){var j=t()-s,T=S===!0,C,E,P,M;if((j>e||j<0)&&(i+=j-r),s+=j,P=s-i,C=P-u,(C>0||T)&&(M=++y.frame,x=P-y.time*1e3,y.time=P=P/1e3,u+=C+(C>=l?4:l-C),E=1),T||(f=p(w)),E)for(b=0;b<c.length;b++)c[b](P,x,M,S)};return y={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(S){return x/(1e3/(S||60))},wake:function(){_w&&(!gp&&xh()&&(Xn=gp=window,wh=Xn.document||{},un.gsap=Xt,(Xn.gsapVersions||(Xn.gsapVersions=[])).push(Xt.version),Sw(Du||Xn.GreenSockGlobals||!Xn.gsap&&Xn||{}),Vw.forEach(Ww)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&y.sleep(),p=h||function(S){return setTimeout(S,u-y.time*1e3+1|0)},ca=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(f),ca=0,p=la},lagSmoothing:function(S,j){e=S||1/0,r=Math.min(j||33,e)},fps:function(S){l=1e3/(S||240),u=y.time*1e3+l},add:function(S,j,T){var C=j?function(E,P,M,D){S(E,P,M,D),y.remove(C)}:S;return y.remove(S),c[T?"unshift":"push"](C),Wo(),C},remove:function(S,j){~(j=c.indexOf(S))&&c.splice(j,1)&&b>=j&&b--},_listeners:c},y}(),Wo=function(){return!ca&&on.wake()},Ee={},kE=/^[\d.\-M][\d.\-,\s]/,CE=/["']/g,PE=function(e){for(var r={},i=e.substr(1,e.length-3).split(":"),s=i[0],l=1,u=i.length,c,f,p;l<u;l++)f=i[l],c=l!==u-1?f.lastIndexOf(","):f.length,p=f.substr(0,c),r[s]=isNaN(p)?p.replace(CE,"").trim():+p,s=f.substr(c+1).trim();return r},TE=function(e){var r=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",r);return e.substring(r,~s&&s<i?e.indexOf(")",i+1):i)},jE=function(e){var r=(e+"").split("("),i=Ee[r[0]];return i&&r.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[PE(r[1])]:TE(e).split(",").map(jw)):Ee._CE&&kE.test(e)?Ee._CE("",e):i},Yw=function(e){return function(r){return 1-e(1-r)}},qw=function t(e,r){for(var i=e._first,s;i;)i instanceof It?t(i,r):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==r&&(i.timeline?t(i.timeline,r):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=r)),i=i._next},Ni=function(e,r){return e&&(tt(e)?e:Ee[e]||jE(e))||r},qi=function(e,r,i,s){i===void 0&&(i=function(f){return 1-r(1-f)}),s===void 0&&(s=function(f){return f<.5?r(f*2)/2:1-r((1-f)*2)/2});var l={easeIn:r,easeOut:i,easeInOut:s},u;return Ht(e,function(c){Ee[c]=un[c]=l,Ee[u=c.toLowerCase()]=i;for(var f in l)Ee[u+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Ee[c+"."+f]=l[f]}),l},Gw=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},Rf=function t(e,r,i){var s=r>=1?r:1,l=(i||(e?.3:.45))/(r<1?r:1),u=l/hp*(Math.asin(1/s)||0),c=function(h){return h===1?1:s*Math.pow(2,-10*h)*nE((h-u)*l)+1},f=e==="out"?c:e==="in"?function(p){return 1-c(1-p)}:Gw(c);return l=hp/l,f.config=function(p,h){return t(e,p,h)},f},Lf=function t(e,r){r===void 0&&(r=1.70158);var i=function(u){return u?--u*u*((r+1)*u+r)+1:0},s=e==="out"?i:e==="in"?function(l){return 1-i(1-l)}:Gw(i);return s.config=function(l){return t(e,l)},s};Ht("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;qi(t+",Power"+(r-1),e?function(i){return Math.pow(i,r)}:function(i){return i},function(i){return 1-Math.pow(1-i,r)},function(i){return i<.5?Math.pow(i*2,r)/2:1-Math.pow((1-i)*2,r)/2})});Ee.Linear.easeNone=Ee.none=Ee.Linear.easeIn;qi("Elastic",Rf("in"),Rf("out"),Rf());(function(t,e){var r=1/e,i=2*r,s=2.5*r,l=function(c){return c<r?t*c*c:c<i?t*Math.pow(c-1.5/e,2)+.75:c<s?t*(c-=2.25/e)*c+.9375:t*Math.pow(c-2.625/e,2)+.984375};qi("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);qi("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});qi("Circ",function(t){return-(yw(1-t*t)-1)});qi("Sine",function(t){return t===1?1:-tE(t*Jj)+1});qi("Back",Lf("in"),Lf("out"),Lf());Ee.SteppedEase=Ee.steps=un.SteppedEase={config:function(e,r){e===void 0&&(e=1);var i=1/e,s=e+(r?0:1),l=r?1:0,u=1-Ot;return function(c){return((s*_a(0,u,c)|0)+l)*i}}};Fo.ease=Ee["quad.out"];Ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Sh+=t+","+t+"Params,"});var Xw=function(e,r){this.id=eE++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:Pw,this.set=r?r.getSetter:jh},da=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,Vo(this,+r.duration,1,1),this.data=r.data,$e&&(this._ctx=$e,$e.data.push(this)),ca||on.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Vo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(Wo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(sc(this,i),!l._dp||l.parent||Aw(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Qn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ot||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Tw(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Av(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Av(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,s):this._repeat?Bo(this._tTime,l)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Fu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(_a(-Math.abs(this._delay),this._tDur,l),s!==!1),oc(this),uE(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Qn(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+($t(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fu(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=oE);var s=kt;return kt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),kt=s,this},e.globalTime=function(i){for(var s=this,l=arguments.length?i:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Rv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,Rv(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Sn(this,i),$t(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,$t(s)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=s&&l<this.endTime(!0)-Ot)},e.eventCallback=function(i,s,l){var u=this.vars;return arguments.length>1?(s?(u[i]=s,l&&(u[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this;return new Promise(function(l){var u=tt(i)?i:Ew,c=function(){var p=s.then;s.then=null,tt(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=p),l(u),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?c():s._prom=c})},e.kill=function(){$s(this)},t}();cn(da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var It=function(t){gw(e,t);function e(i,s){var l;return i===void 0&&(i={}),l=t.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=$t(i.sortChildren),Xe&&Qn(i.parent||Xe,gr(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&Rw(gr(l),i.scrollTrigger),l}var r=e.prototype;return r.to=function(s,l,u){return ea(0,arguments,this),this},r.from=function(s,l,u){return ea(1,arguments,this),this},r.fromTo=function(s,l,u,c){return ea(2,arguments,this),this},r.set=function(s,l,u){return l.duration=0,l.parent=this,Js(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new lt(s,l,Sn(this,u),1),this},r.call=function(s,l,u){return Qn(this,lt.delayedCall(0,s,l),u)},r.staggerTo=function(s,l,u,c,f,p,h){return u.duration=l,u.stagger=u.stagger||c,u.onComplete=p,u.onCompleteParams=h,u.parent=this,new lt(s,u,Sn(this,f)),this},r.staggerFrom=function(s,l,u,c,f,p,h){return u.runBackwards=1,Js(u).immediateRender=$t(u.immediateRender),this.staggerTo(s,l,u,c,f,p,h)},r.staggerFromTo=function(s,l,u,c,f,p,h,y){return c.startAt=u,Js(c).immediateRender=$t(c.immediateRender),this.staggerTo(s,l,c,f,p,h,y)},r.render=function(s,l,u){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,p=this._dur,h=s<=0?0:ut(s),y=this._zTime<0!=s<0&&(this._initted||!p),x,b,_,w,S,j,T,C,E,P,M,D;if(this!==Xe&&h>f&&s>=0&&(h=f),h!==this._tTime||u||y){if(c!==this._time&&p&&(h+=this._time-c,s+=this._time-c),x=h,E=this._start,C=this._ts,j=!C,y&&(p||(c=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(M=this._yoyo,S=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,u);if(x=ut(h%S),h===f?(w=this._repeat,x=p):(P=ut(h/S),w=~~P,w&&w===P&&(x=p,w--),x>p&&(x=p)),P=Bo(this._tTime,S),!c&&this._tTime&&P!==w&&this._tTime-P*S-this._dur<=0&&(P=w),M&&w&1&&(x=p-x,D=1),w!==P&&!this._lock){var F=M&&P&1,B=F===(M&&w&1);if(w<P&&(F=!F),c=F?0:h%p?p:h,this._lock=1,this.render(c||(D?0:ut(w*S)),l,!p)._lock=0,this._tTime=h,!l&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),c&&c!==this._time||j!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,f=this._tDur,B&&(this._lock=2,c=F?p:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!j)return this;qw(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=pE(this,ut(c),ut(x)),T&&(h-=x-(x=T._start))),this._tTime=h,this._time=x,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&x&&!l&&!w&&(sn(this,"onStart"),this._tTime!==h))return this;if(x>=c&&s>=0)for(b=this._first;b;){if(_=b._next,(b._act||x>=b._start)&&b._ts&&T!==b){if(b.parent!==this)return this.render(s,l,u);if(b.render(b._ts>0?(x-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(x-b._start)*b._ts,l,u),x!==this._time||!this._ts&&!j){T=0,_&&(h+=this._zTime=-1e-8);break}}b=_}else{b=this._last;for(var Y=s<0?s:x;b;){if(_=b._prev,(b._act||Y<=b._end)&&b._ts&&T!==b){if(b.parent!==this)return this.render(s,l,u);if(b.render(b._ts>0?(Y-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(Y-b._start)*b._ts,l,u||kt&&(b._initted||b._startAt)),x!==this._time||!this._ts&&!j){T=0,_&&(h+=this._zTime=Y?-1e-8:Ot);break}}b=_}}if(T&&!l&&(this.pause(),T.render(x>=c?0:-1e-8)._zTime=x>=c?1:-1,this._ts))return this._start=E,oc(this),this.render(s,l,u);this._onUpdate&&!l&&sn(this,"onUpdate",!0),(h===f&&this._tTime>=this.totalDuration()||!h&&c)&&(E===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(h===f&&this._ts>0||!h&&this._ts<0)&&si(this,1),!l&&!(s<0&&!c)&&(h||c||!f)&&(sn(this,h===f&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<f&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(s,l){var u=this;if(Sr(l)||(l=Sn(this,l,s)),!(s instanceof da)){if(Rt(s))return s.forEach(function(c){return u.add(c,l)}),this;if(wt(s))return this.addLabel(s,l);if(tt(s))s=lt.delayedCall(0,s);else return this}return this!==s?Qn(this,s,l):this},r.getChildren=function(s,l,u,c){s===void 0&&(s=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),c===void 0&&(c=-1e8);for(var f=[],p=this._first;p;)p._start>=c&&(p instanceof lt?l&&f.push(p):(u&&f.push(p),s&&f.push.apply(f,p.getChildren(!0,l,u)))),p=p._next;return f},r.getById=function(s){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===s)return l[u]},r.remove=function(s){return wt(s)?this.removeLabel(s):tt(s)?this.killTweensOf(s):(s.parent===this&&ic(this,s),s===this._recent&&(this._recent=this._last),Fi(this))},r.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ut(on.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),t.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},r.addLabel=function(s,l){return this.labels[s]=Sn(this,l),this},r.removeLabel=function(s){return delete this.labels[s],this},r.addPause=function(s,l,u){var c=lt.delayedCall(0,l||la,u);return c.data="isPause",this._hasPause=1,Qn(this,c,Sn(this,s))},r.removePause=function(s){var l=this._first;for(s=Sn(this,s);l;)l._start===s&&l.data==="isPause"&&si(l),l=l._next},r.killTweensOf=function(s,l,u){for(var c=this.getTweensOf(s,u),f=c.length;f--;)Xr!==c[f]&&c[f].kill(s,l);return this},r.getTweensOf=function(s,l){for(var u=[],c=Tn(s),f=this._first,p=Sr(l),h;f;)f instanceof lt?sE(f._targets,c)&&(p?(!Xr||f._initted&&f._ts)&&f.globalTime(0)<=l&&f.globalTime(f.totalDuration())>l:!l||f.isActive())&&u.push(f):(h=f.getTweensOf(c,l)).length&&u.push.apply(u,h),f=f._next;return u},r.tweenTo=function(s,l){l=l||{};var u=this,c=Sn(u,s),f=l,p=f.startAt,h=f.onStart,y=f.onStartParams,x=f.immediateRender,b,_=lt.to(u,cn({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:l.duration||Math.abs((c-(p&&"time"in p?p.time:u._time))/u.timeScale())||Ot,onStart:function(){if(u.pause(),!b){var S=l.duration||Math.abs((c-(p&&"time"in p?p.time:u._time))/u.timeScale());_._dur!==S&&Vo(_,S,0,1).render(_._time,!0,!0),b=1}h&&h.apply(_,y||[])}},l));return x?_.render(0):_},r.tweenFromTo=function(s,l,u){return this.tweenTo(l,cn({startAt:{time:Sn(this,s)}},u))},r.recent=function(){return this._recent},r.nextLabel=function(s){return s===void 0&&(s=this._time),Lv(this,Sn(this,s))},r.previousLabel=function(s){return s===void 0&&(s=this._time),Lv(this,Sn(this,s),1)},r.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ot)},r.shiftChildren=function(s,l,u){u===void 0&&(u=0);for(var c=this._first,f=this.labels,p;c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(l)for(p in f)f[p]>=u&&(f[p]+=s);return Fi(this)},r.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return t.prototype.invalidate.call(this,s)},r.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Fi(this)},r.totalDuration=function(s){var l=0,u=this,c=u._last,f=er,p,h,y;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(y=u.parent;c;)p=c._prev,c._dirty&&c.totalDuration(),h=c._start,h>f&&u._sort&&c._ts&&!u._lock?(u._lock=1,Qn(u,c,h-c._delay,1)._lock=0):f=h,h<0&&c._ts&&(l-=h,(!y&&!u._dp||y&&y.smoothChildTiming)&&(u._start+=h/u._ts,u._time-=h,u._tTime-=h),u.shiftChildren(-h,!1,-1/0),f=0),c._end>l&&c._ts&&(l=c._end),c=p;Vo(u,u===Xe&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(Xe._ts&&(Tw(Xe,Fu(s,Xe)),Cw=on.frame),on.frame>=Ev){Ev+=an.autoSleep||120;var l=Xe._first;if((!l||!l._ts)&&an.autoSleep&&on._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||on.sleep()}}},e}(da);cn(It.prototype,{_lock:0,_hasPause:0,_forcing:0});var EE=function(e,r,i,s,l,u,c){var f=new Yt(this._pt,e,r,0,1,tb,null,l),p=0,h=0,y,x,b,_,w,S,j,T;for(f.b=i,f.e=s,i+="",s+="",(j=~s.indexOf("random("))&&(s=ua(s)),u&&(T=[i,s],u(T,e,r),i=T[0],s=T[1]),x=i.match(Ef)||[];y=Ef.exec(s);)_=y[0],w=s.substring(p,y.index),b?b=(b+1)%5:w.substr(-5)==="rgba("&&(b=1),_!==x[h++]&&(S=parseFloat(x[h-1])||0,f._pt={_next:f._pt,p:w||h===1?w:",",s:S,c:_.charAt(1)==="="?Oo(S,_)-S:parseFloat(_)-S,m:b&&b<4?Math.round:0},p=Ef.lastIndex);return f.c=p<s.length?s.substring(p,s.length):"",f.fp=c,(ww.test(s)||j)&&(f.e=0),this._pt=f,f},Ch=function(e,r,i,s,l,u,c,f,p,h){tt(s)&&(s=s(l||0,e,u));var y=e[r],x=i!=="get"?i:tt(y)?p?e[r.indexOf("set")||!tt(e["get"+r.substr(3)])?r:"get"+r.substr(3)](p):e[r]():y,b=tt(y)?p?ME:Jw:Th,_;if(wt(s)&&(~s.indexOf("random(")&&(s=ua(s)),s.charAt(1)==="="&&(_=Oo(x,s)+(Et(x)||0),(_||_===0)&&(s=_))),!h||x!==s||Sp)return!isNaN(x*s)&&s!==""?(_=new Yt(this._pt,e,r,+x||0,s-(x||0),typeof y=="boolean"?IE:eb,0,b),p&&(_.fp=p),c&&_.modifier(c,this,e),this._pt=_):(!y&&!(r in e)&&bh(r,s),EE.call(this,e,r,x,s,b,f||an.stringFilter,p))},OE=function(e,r,i,s,l){if(tt(e)&&(e=ta(e,l,r,i,s)),!rr(e)||e.style&&e.nodeType||Rt(e)||vw(e))return wt(e)?ta(e,l,r,i,s):e;var u={},c;for(c in e)u[c]=ta(e[c],l,r,i,s);return u},Qw=function(e,r,i,s,l,u){var c,f,p,h;if(rn[e]&&(c=new rn[e]).init(l,c.rawVars?r[e]:OE(r[e],s,l,u,i),i,s,u)!==!1&&(i._pt=f=new Yt(i._pt,l,e,0,1,c.render,c,0,c.priority),i!==Eo))for(p=i._ptLookup[i._targets.indexOf(l)],h=c._props.length;h--;)p[c._props[h]]=f;return c},Xr,Sp,Ph=function t(e,r,i){var s=e.vars,l=s.ease,u=s.startAt,c=s.immediateRender,f=s.lazy,p=s.onUpdate,h=s.runBackwards,y=s.yoyoEase,x=s.keyframes,b=s.autoRevert,_=e._dur,w=e._startAt,S=e._targets,j=e.parent,T=j&&j.data==="nested"?j.vars.targets:S,C=e._overwrite==="auto"&&!yh,E=e.timeline,P,M,D,F,B,Y,G,z,Z,X,ae,ce,se;if(E&&(!x||!l)&&(l="none"),e._ease=Ni(l,Fo.ease),e._yEase=y?Yw(Ni(y===!0?l:y,Fo.ease)):0,y&&e._yoyo&&!e._repeat&&(y=e._yEase,e._yEase=e._ease,e._ease=y),e._from=!E&&!!s.runBackwards,!E||x&&!s.stagger){if(z=S[0]?zi(S[0]).harness:0,ce=z&&s[z.prop],P=zu(s,_h),w&&(w._zTime<0&&w.progress(1),r<0&&h&&c&&!b?w.render(-1,!0):w.revert(h&&_?wu:iE),w._lazy=0),u){if(si(e._startAt=lt.set(S,cn({data:"isStart",overwrite:!1,parent:j,immediateRender:!0,lazy:!w&&$t(f),startAt:null,delay:0,onUpdate:p&&function(){return sn(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(kt||!c&&!b)&&e._startAt.revert(wu),c&&_&&r<=0&&i<=0){r&&(e._zTime=r);return}}else if(h&&_&&!w){if(r&&(c=!1),D=cn({overwrite:!1,data:"isFromStart",lazy:c&&!w&&$t(f),immediateRender:c,stagger:0,parent:j},P),ce&&(D[z.prop]=ce),si(e._startAt=lt.set(S,D)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(kt?e._startAt.revert(wu):e._startAt.render(-1,!0)),e._zTime=r,!c)t(e._startAt,Ot,Ot);else if(!r)return}for(e._pt=e._ptCache=0,f=_&&$t(f)||f&&!_,M=0;M<S.length;M++){if(B=S[M],G=B._gsap||kh(S)[M]._gsap,e._ptLookup[M]=X={},yp[G.id]&&ni.length&&Iu(),ae=T===S?M:T.indexOf(B),z&&(Z=new z).init(B,ce||P,e,ae,T)!==!1&&(e._pt=F=new Yt(e._pt,B,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(K){X[K]=F}),Z.priority&&(Y=1)),!z||ce)for(D in P)rn[D]&&(Z=Qw(D,P,e,ae,B,T))?Z.priority&&(Y=1):X[D]=F=Ch.call(e,B,D,"get",P[D],ae,T,0,s.stringFilter);e._op&&e._op[M]&&e.kill(B,e._op[M]),C&&e._pt&&(Xr=e,Xe.killTweensOf(B,X,e.globalTime(r)),se=!e.parent,Xr=0),e._pt&&f&&(yp[G.id]=1)}Y&&nb(e),e._onInit&&e._onInit(e)}e._onUpdate=p,e._initted=(!e._op||e._pt)&&!se,x&&r<=0&&E.render(er,!0,!0)},AE=function(e,r,i,s,l,u,c,f){var p=(e._pt&&e._ptCache||(e._ptCache={}))[r],h,y,x,b;if(!p)for(p=e._ptCache[r]=[],x=e._ptLookup,b=e._targets.length;b--;){if(h=x[b][r],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==r&&h.fp!==r;)h=h._next;if(!h)return Sp=1,e.vars[r]="+=0",Ph(e,c),Sp=0,f?aa(r+" not eligible for reset"):1;p.push(h)}for(b=p.length;b--;)y=p[b],h=y._pt||y,h.s=(s||s===0)&&!l?s:h.s+(s||0)+u*h.c,h.c=i-h.s,y.e&&(y.e=it(i)+Et(y.e)),y.b&&(y.b=h.s+Et(y.b))},RE=function(e,r){var i=e[0]?zi(e[0]).harness:0,s=i&&i.aliases,l,u,c,f;if(!s)return r;l=No({},r);for(u in s)if(u in l)for(f=s[u].split(","),c=f.length;c--;)l[f[c]]=l[u];return l},LE=function(e,r,i,s){var l=r.ease||s||"power1.inOut",u,c;if(Rt(r))c=i[e]||(i[e]=[]),r.forEach(function(f,p){return c.push({t:p/(r.length-1)*100,v:f,e:l})});else for(u in r)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:r[u],e:l})},ta=function(e,r,i,s,l){return tt(e)?e.call(r,i,s,l):wt(e)&&~e.indexOf("random(")?ua(e):e},Kw=Sh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zw={};Ht(Kw+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Zw[t]=1});var lt=function(t){gw(e,t);function e(i,s,l,u){var c;typeof s=="number"&&(l.duration=s,s=l,l=null),c=t.call(this,u?s:Js(s))||this;var f=c.vars,p=f.duration,h=f.delay,y=f.immediateRender,x=f.stagger,b=f.overwrite,_=f.keyframes,w=f.defaults,S=f.scrollTrigger,j=f.yoyoEase,T=s.parent||Xe,C=(Rt(i)||vw(i)?Sr(i[0]):"length"in s)?[i]:Tn(i),E,P,M,D,F,B,Y,G;if(c._targets=C.length?kh(C):aa("GSAP target "+i+" not found. https://gsap.com",!an.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=b,_||x||su(p)||su(h)){if(s=c.vars,E=c.timeline=new It({data:"nested",defaults:w||{},targets:T&&T.data==="nested"?T.vars.targets:C}),E.kill(),E.parent=E._dp=gr(c),E._start=0,x||su(p)||su(h)){if(D=C.length,Y=x&&Iw(x),rr(x))for(F in x)~Kw.indexOf(F)&&(G||(G={}),G[F]=x[F]);for(P=0;P<D;P++)M=zu(s,Zw),M.stagger=0,j&&(M.yoyoEase=j),G&&No(M,G),B=C[P],M.duration=+ta(p,gr(c),P,B,C),M.delay=(+ta(h,gr(c),P,B,C)||0)-c._delay,!x&&D===1&&M.delay&&(c._delay=h=M.delay,c._start+=h,M.delay=0),E.to(B,M,Y?Y(P,B,C):0),E._ease=Ee.none;E.duration()?p=h=0:c.timeline=0}else if(_){Js(cn(E.vars.defaults,{ease:"none"})),E._ease=Ni(_.ease||s.ease||"none");var z=0,Z,X,ae;if(Rt(_))_.forEach(function(ce){return E.to(C,ce,">")}),E.duration();else{M={};for(F in _)F==="ease"||F==="easeEach"||LE(F,_[F],M,_.easeEach);for(F in M)for(Z=M[F].sort(function(ce,se){return ce.t-se.t}),z=0,P=0;P<Z.length;P++)X=Z[P],ae={ease:X.e,duration:(X.t-(P?Z[P-1].t:0))/100*p},ae[F]=X.v,E.to(C,ae,z),z+=ae.duration;E.duration()<p&&E.to({},{duration:p-E.duration()})}}p||c.duration(p=E.duration())}else c.timeline=0;return b===!0&&!yh&&(Xr=gr(c),Xe.killTweensOf(C),Xr=0),Qn(T,gr(c),l),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(y||!p&&!_&&c._start===ut(T._time)&&$t(y)&&cE(gr(c))&&T.data!=="nested")&&(c._tTime=-1e-8,c.render(Math.max(0,-h)||0)),S&&Rw(gr(c),S),c}var r=e.prototype;return r.render=function(s,l,u){var c=this._time,f=this._tDur,p=this._dur,h=s<0,y=s>f-Ot&&!h?f:s<Ot?0:s,x,b,_,w,S,j,T,C,E;if(!p)fE(this,s,l,u);else if(y!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(x=y,C=this.timeline,this._repeat){if(w=p+this._rDelay,this._repeat<-1&&h)return this.totalTime(w*100+s,l,u);if(x=ut(y%w),y===f?(_=this._repeat,x=p):(S=ut(y/w),_=~~S,_&&_===S?(x=p,_--):x>p&&(x=p)),j=this._yoyo&&_&1,j&&(E=this._yEase,x=p-x),S=Bo(this._tTime,w),x===c&&!u&&this._initted&&_===S)return this._tTime=y,this;_!==S&&(C&&this._yEase&&qw(C,j),this.vars.repeatRefresh&&!j&&!this._lock&&x!==w&&this._initted&&(this._lock=u=1,this.render(ut(w*_),!0).invalidate()._lock=0))}if(!this._initted){if(Lw(this,h?s:x,u,l,y))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&_!==S))return this;if(p!==this._dur)return this.render(s,l,u)}if(this._tTime=y,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(E||this._ease)(x/p),this._from&&(this.ratio=T=1-T),x&&!c&&!l&&!_&&(sn(this,"onStart"),this._tTime!==y))return this;for(b=this._pt;b;)b.r(T,b.d),b=b._next;C&&C.render(s<0?s:C._dur*C._ease(x/this._dur),l,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(h&&vp(this,s,l,u),sn(this,"onUpdate")),this._repeat&&_!==S&&this.vars.onRepeat&&!l&&this.parent&&sn(this,"onRepeat"),(y===this._tDur||!y)&&this._tTime===y&&(h&&!this._onUpdate&&vp(this,s,!0,!0),(s||!p)&&(y===this._tDur&&this._ts>0||!y&&this._ts<0)&&si(this,1),!l&&!(h&&!c)&&(y||c||j)&&(sn(this,y===f?"onComplete":"onReverseComplete",!0),this._prom&&!(y<f&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),t.prototype.invalidate.call(this,s)},r.resetTo=function(s,l,u,c,f){ca||on.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ph(this,p),h=this._ease(p/this._dur),AE(this,s,l,u,c,h,p,f)?this.resetTo(s,l,u,c,1):(sc(this,0),this.parent||Ow(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?$s(this):this.scrollTrigger&&this.scrollTrigger.kill(!!kt),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Xr&&Xr.vars.overwrite!==!0)._first||$s(this),this.parent&&u!==this.timeline.totalDuration()&&Vo(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,f=s?Tn(s):c,p=this._ptLookup,h=this._pt,y,x,b,_,w,S,j;if((!l||l==="all")&&lE(c,f))return l==="all"&&(this._pt=0),$s(this);for(y=this._op=this._op||[],l!=="all"&&(wt(l)&&(w={},Ht(l,function(T){return w[T]=1}),l=w),l=RE(c,l)),j=c.length;j--;)if(~f.indexOf(c[j])){x=p[j],l==="all"?(y[j]=l,_=x,b={}):(b=y[j]=y[j]||{},_=l);for(w in _)S=x&&x[w],S&&((!("kill"in S.d)||S.d.kill(w)===!0)&&ic(this,S,"_pt"),delete x[w]),b!=="all"&&(b[w]=1)}return this._initted&&!this._pt&&h&&$s(this),this},e.to=function(s,l){return new e(s,l,arguments[2])},e.from=function(s,l){return ea(1,arguments)},e.delayedCall=function(s,l,u,c){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,l,u){return ea(2,arguments)},e.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(s,l)},e.killTweensOf=function(s,l,u){return Xe.killTweensOf(s,l,u)},e}(da);cn(lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ht("staggerTo,staggerFrom,staggerFromTo",function(t){lt[t]=function(){var e=new It,r=wp.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var Th=function(e,r,i){return e[r]=i},Jw=function(e,r,i){return e[r](i)},ME=function(e,r,i,s){return e[r](s.fp,i)},DE=function(e,r,i){return e.setAttribute(r,i)},jh=function(e,r){return tt(e[r])?Jw:vh(e[r])&&e.setAttribute?DE:Th},eb=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},IE=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},tb=function(e,r){var i=r._pt,s="";if(!e&&r.b)s=r.b;else if(e===1&&r.e)s=r.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=r.c}r.set(r.t,r.p,s,r)},Eh=function(e,r){for(var i=r._pt;i;)i.r(e,i.d),i=i._next},zE=function(e,r,i,s){for(var l=this._pt,u;l;)u=l._next,l.p===s&&l.modifier(e,r,i),l=u},FE=function(e){for(var r=this._pt,i,s;r;)s=r._next,r.p===e&&!r.op||r.op===e?ic(this,r,"_pt"):r.dep||(i=1),r=s;return!i},NE=function(e,r,i,s){s.mSet(e,r,s.m.call(s.tween,i,s.mt),s)},nb=function(e){for(var r=e._pt,i,s,l,u;r;){for(i=r._next,s=l;s&&s.pr>r.pr;)s=s._next;(r._prev=s?s._prev:u)?r._prev._next=r:l=r,(r._next=s)?s._prev=r:u=r,r=i}e._pt=l},Yt=function(){function t(r,i,s,l,u,c,f,p,h){this.t=i,this.s=l,this.c=u,this.p=s,this.r=c||eb,this.d=f||this,this.set=p||Th,this.pr=h||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(i,s,l){this.mSet=this.mSet||this.set,this.set=NE,this.m=i,this.mt=l,this.tween=s},t}();Ht(Sh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return _h[t]=1});un.TweenMax=un.TweenLite=lt;un.TimelineLite=un.TimelineMax=It;Xe=new It({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=Hw;var Bi=[],_u={},BE=[],Dv=0,VE=0,Mf=function(e){return(_u[e]||BE).map(function(r){return r()})},kp=function(){var e=Date.now(),r=[];e-Dv>2&&(Mf("matchMediaInit"),Bi.forEach(function(i){var s=i.queries,l=i.conditions,u,c,f,p;for(c in s)u=Xn.matchMedia(s[c]).matches,u&&(f=1),u!==l[c]&&(l[c]=u,p=1);p&&(i.revert(),f&&r.push(i))}),Mf("matchMediaRevert"),r.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),Dv=e,Mf("matchMedia"))},rb=function(){function t(r,i){this.selector=i&&bp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=VE++,r&&this.add(r)}var e=t.prototype;return e.add=function(i,s,l){tt(i)&&(l=s,s=i,i=tt);var u=this,c=function(){var p=$e,h=u.selector,y;return p&&p!==u&&p.data.push(u),l&&(u.selector=bp(l)),$e=u,y=s.apply(u,arguments),tt(y)&&u._r.push(y),$e=p,u.selector=h,u.isReverted=!1,y};return u.last=c,i===tt?c(u,function(f){return u.add(null,f)}):i?u[i]=c:c},e.ignore=function(i){var s=$e;$e=null,i(this),$e=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof t?i.push.apply(i,s.getTweens()):s instanceof lt&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var l=this;if(i?function(){for(var c=l.getTweens(),f=l.data.length,p;f--;)p=l.data[f],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(h){return c.splice(c.indexOf(h),1)}));for(c.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,y){return y.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),f=l.data.length;f--;)p=l.data[f],p instanceof It?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof lt)&&p.revert&&p.revert(i);l._r.forEach(function(h){return h(i,l)}),l.isReverted=!0}():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=Bi.length;u--;)Bi[u].id===this.id&&Bi.splice(u,1)},e.revert=function(i){this.kill(i||{})},t}(),WE=function(){function t(r){this.contexts=[],this.scope=r,$e&&$e.data.push(this)}var e=t.prototype;return e.add=function(i,s,l){rr(i)||(i={matches:i});var u=new rb(0,l||this.scope),c=u.conditions={},f,p,h;$e&&!u.selector&&(u.selector=$e.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(p in i)p==="all"?h=1:(f=Xn.matchMedia(i[p]),f&&(Bi.indexOf(u)<0&&Bi.push(u),(c[p]=f.matches)&&(h=1),f.addListener?f.addListener(kp):f.addEventListener("change",kp)));return h&&s(u,function(y){return u.add(null,y)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},t}(),Nu={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];r.forEach(function(s){return Ww(s)})},timeline:function(e){return new It(e)},getTweensOf:function(e,r){return Xe.getTweensOf(e,r)},getProperty:function(e,r,i,s){wt(e)&&(e=Tn(e)[0]);var l=zi(e||{}).get,u=i?Ew:jw;return i==="native"&&(i=""),e&&(r?u((rn[r]&&rn[r].get||l)(e,r,i,s)):function(c,f,p){return u((rn[c]&&rn[c].get||l)(e,c,f,p))})},quickSetter:function(e,r,i){if(e=Tn(e),e.length>1){var s=e.map(function(h){return Xt.quickSetter(h,r,i)}),l=s.length;return function(h){for(var y=l;y--;)s[y](h)}}e=e[0]||{};var u=rn[r],c=zi(e),f=c.harness&&(c.harness.aliases||{})[r]||r,p=u?function(h){var y=new u;Eo._pt=0,y.init(e,i?h+i:h,Eo,0,[e]),y.render(1,y),Eo._pt&&Eh(1,Eo)}:c.set(e,f);return u?p:function(h){return p(e,f,i?h+i:h,c,1)}},quickTo:function(e,r,i){var s,l=Xt.to(e,cn((s={},s[r]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(f,p,h){return l.resetTo(r,f,p,h)};return u.tween=l,u},isTweening:function(e){return Xe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ni(e.ease,Fo.ease)),Ov(Fo,e||{})},config:function(e){return Ov(an,e||{})},registerEffect:function(e){var r=e.name,i=e.effect,s=e.plugins,l=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!rn[c]&&!un[c]&&aa(r+" effect requires "+c+" plugin.")}),Of[r]=function(c,f,p){return i(Tn(c),cn(f||{},l),p)},u&&(It.prototype[r]=function(c,f,p){return this.add(Of[r](c,rr(f)?f:(p=f)&&{},this),p)})},registerEase:function(e,r){Ee[e]=Ni(r)},parseEase:function(e,r){return arguments.length?Ni(e,r):Ee},getById:function(e){return Xe.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var i=new It(e),s,l;for(i.smoothChildTiming=$t(e.smoothChildTiming),Xe.remove(i),i._dp=0,i._time=i._tTime=Xe._time,s=Xe._first;s;)l=s._next,(r||!(!s._dur&&s instanceof lt&&s.vars.onComplete===s._targets[0]))&&Qn(i,s,s._start-s._delay),s=l;return Qn(Xe,i,0),i},context:function(e,r){return e?new rb(e,r):$e},matchMedia:function(e){return new WE(e)},matchMediaRefresh:function(){return Bi.forEach(function(e){var r=e.conditions,i,s;for(s in r)r[s]&&(r[s]=!1,i=1);i&&e.revert()})||kp()},addEventListener:function(e,r){var i=_u[e]||(_u[e]=[]);~i.indexOf(r)||i.push(r)},removeEventListener:function(e,r){var i=_u[e],s=i&&i.indexOf(r);s>=0&&i.splice(s,1)},utils:{wrap:wE,wrapYoyo:bE,distribute:Iw,random:Fw,snap:zw,normalize:xE,getUnit:Et,clamp:mE,splitColor:Uw,toArray:Tn,selector:bp,mapRange:Bw,pipe:yE,unitize:vE,interpolate:_E,shuffle:Dw},install:Sw,effects:Of,ticker:on,updateRoot:It.updateRoot,plugins:rn,globalTimeline:Xe,core:{PropTween:Yt,globals:kw,Tween:lt,Timeline:It,Animation:da,getCache:zi,_removeLinkedListItem:ic,reverting:function(){return kt},context:function(e){return e&&$e&&($e.data.push(e),e._ctx=$e),$e},suppressOverwrites:function(e){return yh=e}}};Ht("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Nu[t]=lt[t]});on.add(It.updateRoot);Eo=Nu.to({},{duration:0});var UE=function(e,r){for(var i=e._pt;i&&i.p!==r&&i.op!==r&&i.fp!==r;)i=i._next;return i},$E=function(e,r){var i=e._targets,s,l,u;for(s in r)for(l=i.length;l--;)u=e._ptLookup[l][s],u&&(u=u.d)&&(u._pt&&(u=UE(u,s)),u&&u.modifier&&u.modifier(r[s],e,i[l],s))},Df=function(e,r){return{name:e,rawVars:1,init:function(s,l,u){u._onInit=function(c){var f,p;if(wt(l)&&(f={},Ht(l,function(h){return f[h]=1}),l=f),r){f={};for(p in l)f[p]=r(l[p]);l=f}$E(c,l)}}}},Xt=Nu.registerPlugin({name:"attr",init:function(e,r,i,s,l){var u,c,f;this.tween=i;for(u in r)f=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(f||0)+"",r[u],s,l,0,0,u),c.op=u,c.b=f,this._props.push(u)},render:function(e,r){for(var i=r._pt;i;)kt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,r){for(var i=r.length;i--;)this.add(e,i,e[i]||0,r[i],0,0,0,0,0,1)}},Df("roundProps",_p),Df("modifiers"),Df("snap",zw))||Nu;lt.version=It.version=Xt.version="3.12.7";_w=1;xh()&&Wo();Ee.Power0;Ee.Power1;Ee.Power2;Ee.Power3;Ee.Power4;Ee.Linear;Ee.Quad;Ee.Cubic;Ee.Quart;Ee.Quint;Ee.Strong;Ee.Elastic;Ee.Back;Ee.SteppedEase;Ee.Bounce;Ee.Sine;Ee.Expo;Ee.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Iv,Qr,Ao,Oh,Di,zv,Ah,HE=function(){return typeof window<"u"},kr={},Li=180/Math.PI,Ro=Math.PI/180,wo=Math.atan2,Fv=1e8,Rh=/([A-Z])/g,YE=/(left|right|width|margin|padding|x)/i,qE=/[\s,\(]\S/,Zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cp=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},GE=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},XE=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},QE=function(e,r){var i=r.s+r.c*e;r.set(r.t,r.p,~~(i+(i<0?-.5:.5))+r.u,r)},ib=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},ob=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},KE=function(e,r,i){return e.style[r]=i},ZE=function(e,r,i){return e.style.setProperty(r,i)},JE=function(e,r,i){return e._gsap[r]=i},e3=function(e,r,i){return e._gsap.scaleX=e._gsap.scaleY=i},t3=function(e,r,i,s,l){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(l,u)},n3=function(e,r,i,s,l){var u=e._gsap;u[r]=i,u.renderTransform(l,u)},Ke="transform",qt=Ke+"Origin",r3=function t(e,r){var i=this,s=this.target,l=s.style,u=s._gsap;if(e in kr&&l){if(this.tfm=this.tfm||{},e!=="transform")e=Zn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=yr(s,c)}):this.tfm[e]=u.x?u[e]:yr(s,e),e===qt&&(this.tfm.zOrigin=u.zOrigin);else return Zn.transform.split(",").forEach(function(c){return t.call(i,c,r)});if(this.props.indexOf(Ke)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(qt,r,"")),e=Ke}(l||r)&&this.props.push(e,r,l[e])},sb=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},i3=function(){var e=this.props,r=this.target,i=r.style,s=r._gsap,l,u;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?r[e[l]](e[l+2]):r[e[l]]=e[l+2]:e[l+2]?i[e[l]]=e[l+2]:i.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(Rh,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),l=Ah(),(!l||!l.isStart)&&!i[Ke]&&(sb(i),s.zOrigin&&i[qt]&&(i[qt]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},ab=function(e,r){var i={target:e,props:[],revert:i3,save:r3};return e._gsap||Xt.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(s){return i.save(s)}),i},lb,Pp=function(e,r){var i=Qr.createElementNS?Qr.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qr.createElement(e);return i&&i.style?i:Qr.createElement(e)},tr=function t(e,r,i){var s=getComputedStyle(e);return s[r]||s.getPropertyValue(r.replace(Rh,"-$1").toLowerCase())||s.getPropertyValue(r)||!i&&t(e,Uo(r)||r,1)||""},Nv="O,Moz,ms,Ms,Webkit".split(","),Uo=function(e,r,i){var s=r||Di,l=s.style,u=5;if(e in l&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(Nv[u]+e in l););return u<0?null:(u===3?"ms":u>=0?Nv[u]:"")+e},Tp=function(){HE()&&window.document&&(Iv=window,Qr=Iv.document,Ao=Qr.documentElement,Di=Pp("div")||{style:{}},Pp("div"),Ke=Uo(Ke),qt=Ke+"Origin",Di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lb=!!Uo("perspective"),Ah=Xt.core.reverting,Oh=1)},Bv=function(e){var r=e.ownerSVGElement,i=Pp("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),l;s.style.display="block",i.appendChild(s),Ao.appendChild(i);try{l=s.getBBox()}catch{}return i.removeChild(s),Ao.removeChild(i),l},Vv=function(e,r){for(var i=r.length;i--;)if(e.hasAttribute(r[i]))return e.getAttribute(r[i])},ub=function(e){var r,i;try{r=e.getBBox()}catch{r=Bv(e),i=1}return r&&(r.width||r.height)||i||(r=Bv(e)),r&&!r.width&&!r.x&&!r.y?{x:+Vv(e,["x","cx","x1"])||0,y:+Vv(e,["y","cy","y1"])||0,width:0,height:0}:r},cb=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ub(e))},Wi=function(e,r){if(r){var i=e.style,s;r in kr&&r!==qt&&(r=Ke),i.removeProperty?(s=r.substr(0,2),(s==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),i.removeProperty(s==="--"?r:r.replace(Rh,"-$1").toLowerCase())):i.removeAttribute(r)}},Kr=function(e,r,i,s,l,u){var c=new Yt(e._pt,r,i,0,1,u?ob:ib);return e._pt=c,c.b=s,c.e=l,e._props.push(i),c},Wv={deg:1,rad:1,turn:1},o3={grid:1,flex:1},ai=function t(e,r,i,s){var l=parseFloat(i)||0,u=(i+"").trim().substr((l+"").length)||"px",c=Di.style,f=YE.test(r),p=e.tagName.toLowerCase()==="svg",h=(p?"client":"offset")+(f?"Width":"Height"),y=100,x=s==="px",b=s==="%",_,w,S,j;if(s===u||!l||Wv[s]||Wv[u])return l;if(u!=="px"&&!x&&(l=t(e,r,i,"px")),j=e.getCTM&&cb(e),(b||u==="%")&&(kr[r]||~r.indexOf("adius")))return _=j?e.getBBox()[f?"width":"height"]:e[h],it(b?l/_*y:l/100*_);if(c[f?"width":"height"]=y+(x?u:s),w=s!=="rem"&&~r.indexOf("adius")||s==="em"&&e.appendChild&&!p?e:e.parentNode,j&&(w=(e.ownerSVGElement||{}).parentNode),(!w||w===Qr||!w.appendChild)&&(w=Qr.body),S=w._gsap,S&&b&&S.width&&f&&S.time===on.time&&!S.uncache)return it(l/S.width*y);if(b&&(r==="height"||r==="width")){var T=e.style[r];e.style[r]=y+s,_=e[h],T?e.style[r]=T:Wi(e,r)}else(b||u==="%")&&!o3[tr(w,"display")]&&(c.position=tr(e,"position")),w===e&&(c.position="static"),w.appendChild(Di),_=Di[h],w.removeChild(Di),c.position="absolute";return f&&b&&(S=zi(w),S.time=on.time,S.width=w[h]),it(x?_*l/y:_&&l?y/_*l:0)},yr=function(e,r,i,s){var l;return Oh||Tp(),r in Zn&&r!=="transform"&&(r=Zn[r],~r.indexOf(",")&&(r=r.split(",")[0])),kr[r]&&r!=="transform"?(l=pa(e,s),l=r!=="transformOrigin"?l[r]:l.svg?l.origin:Vu(tr(e,qt))+" "+l.zOrigin+"px"):(l=e.style[r],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Bu[r]&&Bu[r](e,r,i)||tr(e,r)||Pw(e,r)||(r==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?ai(e,r,l,i)+i:l},s3=function(e,r,i,s){if(!i||i==="none"){var l=Uo(r,e,1),u=l&&tr(e,l,1);u&&u!==i?(r=l,i=u):r==="borderColor"&&(i=tr(e,"borderTopColor"))}var c=new Yt(this._pt,e.style,r,0,1,tb),f=0,p=0,h,y,x,b,_,w,S,j,T,C,E,P;if(c.b=i,c.e=s,i+="",s+="",s==="auto"&&(w=e.style[r],e.style[r]=s,s=tr(e,r)||s,w?e.style[r]=w:Wi(e,r)),h=[i,s],Hw(h),i=h[0],s=h[1],x=i.match(jo)||[],P=s.match(jo)||[],P.length){for(;y=jo.exec(s);)S=y[0],T=s.substring(f,y.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),S!==(w=x[p++]||"")&&(b=parseFloat(w)||0,E=w.substr((b+"").length),S.charAt(1)==="="&&(S=Oo(b,S)+E),j=parseFloat(S),C=S.substr((j+"").length),f=jo.lastIndex-C.length,C||(C=C||an.units[r]||E,f===s.length&&(s+=C,c.e+=C)),E!==C&&(b=ai(e,r,w,C)||0),c._pt={_next:c._pt,p:T||p===1?T:",",s:b,c:j-b,m:_&&_<4||r==="zIndex"?Math.round:0});c.c=f<s.length?s.substring(f,s.length):""}else c.r=r==="display"&&s==="none"?ob:ib;return ww.test(s)&&(c.e=0),this._pt=c,c},Uv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},a3=function(e){var r=e.split(" "),i=r[0],s=r[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),r[0]=Uv[i]||i,r[1]=Uv[s]||s,r.join(" ")},l3=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var i=r.t,s=i.style,l=r.u,u=i._gsap,c,f,p;if(l==="all"||l===!0)s.cssText="",f=1;else for(l=l.split(","),p=l.length;--p>-1;)c=l[p],kr[c]&&(f=1,c=c==="transformOrigin"?qt:Ke),Wi(i,c);f&&(Wi(i,Ke),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",pa(i,1),u.uncache=1,sb(s)))}},Bu={clearProps:function(e,r,i,s,l){if(l.data!=="isFromStart"){var u=e._pt=new Yt(e._pt,r,i,0,0,l3);return u.u=s,u.pr=-10,u.tween=l,e._props.push(i),1}}},fa=[1,0,0,1,0,0],db={},fb=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},$v=function(e){var r=tr(e,Ke);return fb(r)?fa:r.substr(7).match(xw).map(it)},Lh=function(e,r){var i=e._gsap||zi(e),s=e.style,l=$v(e),u,c,f,p;return i.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,l=[f.a,f.b,f.c,f.d,f.e,f.f],l.join(",")==="1,0,0,1,0,0"?fa:l):(l===fa&&!e.offsetParent&&e!==Ao&&!i.svg&&(f=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(p=1,c=e.nextElementSibling,Ao.appendChild(e)),l=$v(e),f?s.display=f:Wi(e,"display"),p&&(c?u.insertBefore(e,c):u?u.appendChild(e):Ao.removeChild(e))),r&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},jp=function(e,r,i,s,l,u){var c=e._gsap,f=l||Lh(e,!0),p=c.xOrigin||0,h=c.yOrigin||0,y=c.xOffset||0,x=c.yOffset||0,b=f[0],_=f[1],w=f[2],S=f[3],j=f[4],T=f[5],C=r.split(" "),E=parseFloat(C[0])||0,P=parseFloat(C[1])||0,M,D,F,B;i?f!==fa&&(D=b*S-_*w)&&(F=E*(S/D)+P*(-w/D)+(w*T-S*j)/D,B=E*(-_/D)+P*(b/D)-(b*T-_*j)/D,E=F,P=B):(M=ub(e),E=M.x+(~C[0].indexOf("%")?E/100*M.width:E),P=M.y+(~(C[1]||C[0]).indexOf("%")?P/100*M.height:P)),s||s!==!1&&c.smooth?(j=E-p,T=P-h,c.xOffset=y+(j*b+T*w)-j,c.yOffset=x+(j*_+T*S)-T):c.xOffset=c.yOffset=0,c.xOrigin=E,c.yOrigin=P,c.smooth=!!s,c.origin=r,c.originIsAbsolute=!!i,e.style[qt]="0px 0px",u&&(Kr(u,c,"xOrigin",p,E),Kr(u,c,"yOrigin",h,P),Kr(u,c,"xOffset",y,c.xOffset),Kr(u,c,"yOffset",x,c.yOffset)),e.setAttribute("data-svg-origin",E+" "+P)},pa=function(e,r){var i=e._gsap||new Xw(e);if("x"in i&&!r&&!i.uncache)return i;var s=e.style,l=i.scaleX<0,u="px",c="deg",f=getComputedStyle(e),p=tr(e,qt)||"0",h,y,x,b,_,w,S,j,T,C,E,P,M,D,F,B,Y,G,z,Z,X,ae,ce,se,K,le,re,L,V,Q,J,ie;return h=y=x=w=S=j=T=C=E=0,b=_=1,i.svg=!!(e.getCTM&&cb(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(s[Ke]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Ke]!=="none"?f[Ke]:"")),s.scale=s.rotate=s.translate="none"),D=Lh(e,i.svg),i.svg&&(i.uncache?(K=e.getBBox(),p=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",se=""):se=!r&&e.getAttribute("data-svg-origin"),jp(e,se||p,!!se||i.originIsAbsolute,i.smooth!==!1,D)),P=i.xOrigin||0,M=i.yOrigin||0,D!==fa&&(G=D[0],z=D[1],Z=D[2],X=D[3],h=ae=D[4],y=ce=D[5],D.length===6?(b=Math.sqrt(G*G+z*z),_=Math.sqrt(X*X+Z*Z),w=G||z?wo(z,G)*Li:0,T=Z||X?wo(Z,X)*Li+w:0,T&&(_*=Math.abs(Math.cos(T*Ro))),i.svg&&(h-=P-(P*G+M*Z),y-=M-(P*z+M*X))):(ie=D[6],Q=D[7],re=D[8],L=D[9],V=D[10],J=D[11],h=D[12],y=D[13],x=D[14],F=wo(ie,V),S=F*Li,F&&(B=Math.cos(-F),Y=Math.sin(-F),se=ae*B+re*Y,K=ce*B+L*Y,le=ie*B+V*Y,re=ae*-Y+re*B,L=ce*-Y+L*B,V=ie*-Y+V*B,J=Q*-Y+J*B,ae=se,ce=K,ie=le),F=wo(-Z,V),j=F*Li,F&&(B=Math.cos(-F),Y=Math.sin(-F),se=G*B-re*Y,K=z*B-L*Y,le=Z*B-V*Y,J=X*Y+J*B,G=se,z=K,Z=le),F=wo(z,G),w=F*Li,F&&(B=Math.cos(F),Y=Math.sin(F),se=G*B+z*Y,K=ae*B+ce*Y,z=z*B-G*Y,ce=ce*B-ae*Y,G=se,ae=K),S&&Math.abs(S)+Math.abs(w)>359.9&&(S=w=0,j=180-j),b=it(Math.sqrt(G*G+z*z+Z*Z)),_=it(Math.sqrt(ce*ce+ie*ie)),F=wo(ae,ce),T=Math.abs(F)>2e-4?F*Li:0,E=J?1/(J<0?-J:J):0),i.svg&&(se=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!fb(tr(e,Ke)),se&&e.setAttribute("transform",se))),Math.abs(T)>90&&Math.abs(T)<270&&(l?(b*=-1,T+=w<=0?180:-180,w+=w<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),r=r||i.uncache,i.x=h-((i.xPercent=h&&(!r&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=y-((i.yPercent=y&&(!r&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-y)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=x+u,i.scaleX=it(b),i.scaleY=it(_),i.rotation=it(w)+c,i.rotationX=it(S)+c,i.rotationY=it(j)+c,i.skewX=T+c,i.skewY=C+c,i.transformPerspective=E+u,(i.zOrigin=parseFloat(p.split(" ")[2])||!r&&i.zOrigin||0)&&(s[qt]=Vu(p)),i.xOffset=i.yOffset=0,i.force3D=an.force3D,i.renderTransform=i.svg?c3:lb?pb:u3,i.uncache=0,i},Vu=function(e){return(e=e.split(" "))[0]+" "+e[1]},If=function(e,r,i){var s=Et(r);return it(parseFloat(r)+parseFloat(ai(e,"x",i+"px",s)))+s},u3=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,pb(e,r)},Ti="0deg",zs="0px",ji=") ",pb=function(e,r){var i=r||this,s=i.xPercent,l=i.yPercent,u=i.x,c=i.y,f=i.z,p=i.rotation,h=i.rotationY,y=i.rotationX,x=i.skewX,b=i.skewY,_=i.scaleX,w=i.scaleY,S=i.transformPerspective,j=i.force3D,T=i.target,C=i.zOrigin,E="",P=j==="auto"&&e&&e!==1||j===!0;if(C&&(y!==Ti||h!==Ti)){var M=parseFloat(h)*Ro,D=Math.sin(M),F=Math.cos(M),B;M=parseFloat(y)*Ro,B=Math.cos(M),u=If(T,u,D*B*-C),c=If(T,c,-Math.sin(M)*-C),f=If(T,f,F*B*-C+C)}S!==zs&&(E+="perspective("+S+ji),(s||l)&&(E+="translate("+s+"%, "+l+"%) "),(P||u!==zs||c!==zs||f!==zs)&&(E+=f!==zs||P?"translate3d("+u+", "+c+", "+f+") ":"translate("+u+", "+c+ji),p!==Ti&&(E+="rotate("+p+ji),h!==Ti&&(E+="rotateY("+h+ji),y!==Ti&&(E+="rotateX("+y+ji),(x!==Ti||b!==Ti)&&(E+="skew("+x+", "+b+ji),(_!==1||w!==1)&&(E+="scale("+_+", "+w+ji),T.style[Ke]=E||"translate(0, 0)"},c3=function(e,r){var i=r||this,s=i.xPercent,l=i.yPercent,u=i.x,c=i.y,f=i.rotation,p=i.skewX,h=i.skewY,y=i.scaleX,x=i.scaleY,b=i.target,_=i.xOrigin,w=i.yOrigin,S=i.xOffset,j=i.yOffset,T=i.forceCSS,C=parseFloat(u),E=parseFloat(c),P,M,D,F,B;f=parseFloat(f),p=parseFloat(p),h=parseFloat(h),h&&(h=parseFloat(h),p+=h,f+=h),f||p?(f*=Ro,p*=Ro,P=Math.cos(f)*y,M=Math.sin(f)*y,D=Math.sin(f-p)*-x,F=Math.cos(f-p)*x,p&&(h*=Ro,B=Math.tan(p-h),B=Math.sqrt(1+B*B),D*=B,F*=B,h&&(B=Math.tan(h),B=Math.sqrt(1+B*B),P*=B,M*=B)),P=it(P),M=it(M),D=it(D),F=it(F)):(P=y,F=x,M=D=0),(C&&!~(u+"").indexOf("px")||E&&!~(c+"").indexOf("px"))&&(C=ai(b,"x",u,"px"),E=ai(b,"y",c,"px")),(_||w||S||j)&&(C=it(C+_-(_*P+w*D)+S),E=it(E+w-(_*M+w*F)+j)),(s||l)&&(B=b.getBBox(),C=it(C+s/100*B.width),E=it(E+l/100*B.height)),B="matrix("+P+","+M+","+D+","+F+","+C+","+E+")",b.setAttribute("transform",B),T&&(b.style[Ke]=B)},d3=function(e,r,i,s,l){var u=360,c=wt(l),f=parseFloat(l)*(c&&~l.indexOf("rad")?Li:1),p=f-s,h=s+p+"deg",y,x;return c&&(y=l.split("_")[1],y==="short"&&(p%=u,p!==p%(u/2)&&(p+=p<0?u:-360)),y==="cw"&&p<0?p=(p+u*Fv)%u-~~(p/u)*u:y==="ccw"&&p>0&&(p=(p-u*Fv)%u-~~(p/u)*u)),e._pt=x=new Yt(e._pt,r,i,s,p,GE),x.e=h,x.u="deg",e._props.push(i),x},Hv=function(e,r){for(var i in r)e[i]=r[i];return e},f3=function(e,r,i){var s=Hv({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,f,p,h,y,x,b,_;s.svg?(p=i.getAttribute("transform"),i.setAttribute("transform",""),u[Ke]=r,c=pa(i,1),Wi(i,Ke),i.setAttribute("transform",p)):(p=getComputedStyle(i)[Ke],u[Ke]=r,c=pa(i,1),u[Ke]=p);for(f in kr)p=s[f],h=c[f],p!==h&&l.indexOf(f)<0&&(b=Et(p),_=Et(h),y=b!==_?ai(i,f,p,_):parseFloat(p),x=parseFloat(h),e._pt=new Yt(e._pt,c,f,y,x-y,Cp),e._pt.u=_||0,e._props.push(f));Hv(c,s)};Ht("padding,margin,Width,Radius",function(t,e){var r="Top",i="Right",s="Bottom",l="Left",u=(e<3?[r,i,s,l]:[r+l,r+i,s+i,s+l]).map(function(c){return e<2?t+c:"border"+c+t});Bu[e>1?"border"+t:t]=function(c,f,p,h,y){var x,b;if(arguments.length<4)return x=u.map(function(_){return yr(c,_,p)}),b=x.join(" "),b.split(x[0]).length===5?x[0]:b;x=(h+"").split(" "),b={},u.forEach(function(_,w){return b[_]=x[w]=x[w]||x[(w-1)/2|0]}),c.init(f,b,y)}});var hb={name:"css",register:Tp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,i,s,l){var u=this._props,c=e.style,f=i.vars.startAt,p,h,y,x,b,_,w,S,j,T,C,E,P,M,D,F;Oh||Tp(),this.styles=this.styles||ab(e),F=this.styles.props,this.tween=i;for(w in r)if(w!=="autoRound"&&(h=r[w],!(rn[w]&&Qw(w,r,i,s,e,l)))){if(b=typeof h,_=Bu[w],b==="function"&&(h=h.call(i,s,e,l),b=typeof h),b==="string"&&~h.indexOf("random(")&&(h=ua(h)),_)_(this,e,w,h,i)&&(D=1);else if(w.substr(0,2)==="--")p=(getComputedStyle(e).getPropertyValue(w)+"").trim(),h+="",ri.lastIndex=0,ri.test(p)||(S=Et(p),j=Et(h)),j?S!==j&&(p=ai(e,w,p,j)+j):S&&(h+=S),this.add(c,"setProperty",p,h,s,l,0,0,w),u.push(w),F.push(w,0,c[w]);else if(b!=="undefined"){if(f&&w in f?(p=typeof f[w]=="function"?f[w].call(i,s,e,l):f[w],wt(p)&&~p.indexOf("random(")&&(p=ua(p)),Et(p+"")||p==="auto"||(p+=an.units[w]||Et(yr(e,w))||""),(p+"").charAt(1)==="="&&(p=yr(e,w))):p=yr(e,w),x=parseFloat(p),T=b==="string"&&h.charAt(1)==="="&&h.substr(0,2),T&&(h=h.substr(2)),y=parseFloat(h),w in Zn&&(w==="autoAlpha"&&(x===1&&yr(e,"visibility")==="hidden"&&y&&(x=0),F.push("visibility",0,c.visibility),Kr(this,c,"visibility",x?"inherit":"hidden",y?"inherit":"hidden",!y)),w!=="scale"&&w!=="transform"&&(w=Zn[w],~w.indexOf(",")&&(w=w.split(",")[0]))),C=w in kr,C){if(this.styles.save(w),E||(P=e._gsap,P.renderTransform&&!r.parseTransform||pa(e,r.parseTransform),M=r.smoothOrigin!==!1&&P.smooth,E=this._pt=new Yt(this._pt,c,Ke,0,1,P.renderTransform,P,0,-1),E.dep=1),w==="scale")this._pt=new Yt(this._pt,P,"scaleY",P.scaleY,(T?Oo(P.scaleY,T+y):y)-P.scaleY||0,Cp),this._pt.u=0,u.push("scaleY",w),w+="X";else if(w==="transformOrigin"){F.push(qt,0,c[qt]),h=a3(h),P.svg?jp(e,h,0,M,0,this):(j=parseFloat(h.split(" ")[2])||0,j!==P.zOrigin&&Kr(this,P,"zOrigin",P.zOrigin,j),Kr(this,c,w,Vu(p),Vu(h)));continue}else if(w==="svgOrigin"){jp(e,h,1,M,0,this);continue}else if(w in db){d3(this,P,w,x,T?Oo(x,T+h):h);continue}else if(w==="smoothOrigin"){Kr(this,P,"smooth",P.smooth,h);continue}else if(w==="force3D"){P[w]=h;continue}else if(w==="transform"){f3(this,h,e);continue}}else w in c||(w=Uo(w)||w);if(C||(y||y===0)&&(x||x===0)&&!qE.test(h)&&w in c)S=(p+"").substr((x+"").length),y||(y=0),j=Et(h)||(w in an.units?an.units[w]:S),S!==j&&(x=ai(e,w,p,j)),this._pt=new Yt(this._pt,C?P:c,w,x,(T?Oo(x,T+y):y)-x,!C&&(j==="px"||w==="zIndex")&&r.autoRound!==!1?QE:Cp),this._pt.u=j||0,S!==j&&j!=="%"&&(this._pt.b=p,this._pt.r=XE);else if(w in c)s3.call(this,e,w,p,T?T+h:h);else if(w in e)this.add(e,w,p||e[w],T?T+h:h,s,l);else if(w!=="parseTransform"){bh(w,h);continue}C||(w in c?F.push(w,0,c[w]):typeof e[w]=="function"?F.push(w,2,e[w]()):F.push(w,1,p||e[w])),u.push(w)}}D&&nb(this)},render:function(e,r){if(r.tween._time||!Ah())for(var i=r._pt;i;)i.r(e,i.d),i=i._next;else r.styles.revert()},get:yr,aliases:Zn,getSetter:function(e,r,i){var s=Zn[r];return s&&s.indexOf(",")<0&&(r=s),r in kr&&r!==qt&&(e._gsap.x||yr(e,"x"))?i&&zv===i?r==="scale"?e3:JE:(zv=i||{})&&(r==="scale"?t3:n3):e.style&&!vh(e.style[r])?KE:~r.indexOf("-")?ZE:jh(e,r)},core:{_removeProperty:Wi,_getMatrix:Lh}};Xt.utils.checkPrefix=Uo;Xt.core.getStyleSaver=ab;(function(t,e,r,i){var s=Ht(t+","+e+","+r,function(l){kr[l]=1});Ht(e,function(l){an.units[l]="deg",db[l]=1}),Zn[s[13]]=t+","+e,Ht(i,function(l){var u=l.split(":");Zn[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ht("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){an.units[t]="px"});Xt.registerPlugin(hb);var Wu=Xt.registerPlugin(hb)||Xt;Wu.core.Tween;const bo={subheading:"Have an idea? We'll turn it into a clean, easy-to-use website that makes your business look good and helps you connect with customers. No stress, no fluff—just a site that works.",buttons:{primary:{text:"Start Free - No Upfront Payment",link:"/order"},secondary:{text:"Check Out Our Work",link:"#portfolio"}},scrollText:"Keep Scrolling"},au={title:"About The FriendlyWeb Company",description:["We've been building websites since 2015, helping small businesses look great online and connect with more people. From design and development to branding and marketing, we handle the whole package—without making things complicated.","We mix friendly service with real know-how to create websites that not only look good, but work great too. We take time to understand your business, your goals, and what makes you different—so we can build something that truly fits."],stats:[{number:"8+",title:"Years of Experience"},{number:"700+",title:"Projects Completed"},{number:"500+",title:"Happy Clients"},{number:"5",title:"Team Members"}],teamImage:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},lu={title:"Our Services",subtitle:"Affordable, all-in-one web solutions designed specifically for small businesses.",services:[{icon:"💻",title:"Small Business Websites",description:"Beautiful, easy-to-update websites that work perfectly on all devices and won't break your budget.",features:["Mobile-Friendly Design","Easy Content Management","Fast Loading Speed","Built-in SEO Features"]},{icon:"🎨",title:"Professional Design",description:"Eye-catching designs that reflect your brand and convert visitors into customers.",features:["Custom Logo Design","Brand Identity Package","User-Friendly Navigation","Conversion-Focused Layouts"]},{icon:"🛒",title:"Online Stores",description:"Affordable e-commerce solutions that make selling online simple for small businesses.",features:["Easy Product Management","Secure Payment Processing","Local Delivery Options","Customer Account Portal"]},{icon:"📱",title:"Local Business Visibility",description:"Get found by local customers with Google Maps integration and local SEO optimization.",features:["Google Business Profile Setup","Local SEO Optimization","Customer Reviews Management","Location-Based Features"]},{icon:"⚡",title:"Website Maintenance",description:"Worry-free maintenance packages to keep your website secure, updated, and running smoothly.",features:["Regular Updates & Backups","Security Monitoring","Technical Support","Content Updates Assistance"]},{icon:"🔍",title:"Small Business Marketing",description:"Affordable digital marketing that brings local customers to your business.",features:["Local SEO Packages","Social Media Management","Email Marketing","Google Ads for Small Business"]}],cta:{text:"Start Your Free Website Today"}},Fs={title:"Our Process",subtitle:"Simple, stress-free website creation for small businesses and startups.",steps:[{number:"01",title:"Quick Consultation",description:"A friendly chat to understand your small business needs and goals - no technical jargon, just simple questions about your business.",features:["Business Goals Discussion","Budget-Friendly Planning","Timeline Setting","Simple Questionnaire"],icon:"FaSearch",color:"var(--primary)"},{number:"02",title:"Simple Plan",description:"We create an easy-to-understand roadmap for your website that fits your budget and timeline, with clear pricing and no hidden costs.",features:["Fixed Price Packages","Clear Deliverables","Competitor Research","SEO Strategy (if needed)"],icon:"FaChartLine",color:"var(--secondary)"},{number:"03",title:"Design Preview",description:"See your website before it's built with simple mockups that show exactly how your site will look on phones and computers.",features:["Mobile-First Design","Brand Color Selection","Easy Revision Process","Advanced Prototyping (for complex projects)"],icon:"FaPencilRuler",color:"var(--primary)"},{number:"04",title:"Quick Build",description:"We build your website using professional code that ensures speed, security, and a perfect fit for your business needs.",features:["Custom Code Development","Mobile Optimization","Performance Tuning","Advanced Features (when needed)"],icon:"FaCode",color:"var(--secondary)"},{number:"05",title:"Launch & Support",description:"We handle the technical parts of launching your site and provide 30 days of free support to make sure everything works perfectly for your customers.",features:["Hosting with 99.99% Uptime","Software Updates","Security & Privacy","Dedicated Support"],icon:"FaRocket",color:"var(--primary)"}],cta:{text:"Start Free - No Payment Required"}},uu={title:"Our Work",subtitle:"Explore our latest projects and see how we've helped businesses create friendly web experiences.",projects:[{id:1,title:"Greenleaf Design",category:"website",image:"/greenleaf.png",link:"https://greenleaf-dun.vercel.app/"},{id:2,title:"Atlas Bookkeeping",category:"website",image:"/atlas.png",link:"https://atlas-bookkeeping.vercel.app/"},{id:3,title:"Evergreen Wellness",category:"mobile",image:"/yoga.png",link:"https://yoga-green-one.vercel.app/"}]},tn={title:"What Our Clients Say",subtitle:"Don't just take our word for it. Here's what our clients have to say about working with The Friendly Web Company.",testimonials:[{text:"Working with The Friendly Web Company was a game-changer for our business. Their approachable design and development helped us connect with our customers in a meaningful way. The team's attention to detail and commitment to creating welcoming experiences is unmatched.",author:"Sarah Johnson",title:"CEO, Community Innovations",image:"https://randomuser.me/api/portraits/women/1.jpg"},{text:"The team at The Friendly Web Company transformed our outdated website into a warm, inviting digital experience that perfectly captures our brand essence. Their thoughtful approach and technical expertise made the entire process smooth and enjoyable.",author:"Michael Chen",title:"Marketing Director, Friendly Tech",image:"https://randomuser.me/api/portraits/men/2.jpg"},{text:"The Friendly Web Company delivered beyond our expectations. Their ability to understand our vision and translate it into an approachable, functional website is remarkable. The increase in user engagement and positive feedback speaks for itself.",author:"Emily Rodriguez",title:"Founder, Neighborhood Boutique",image:"https://randomuser.me/api/portraits/women/3.jpg"},{text:"We've worked with several web development agencies in the past, but none have matched the warmth and technical expertise of The Friendly Web Company. They don't just build websites; they craft welcoming digital spaces that connect with people.",author:"David Wilson",title:"CTO, Community Analytics",image:"https://randomuser.me/api/portraits/men/4.jpg"}],cta:{text:"Join Our Happy Clients - Start Free"}},At={title:"Website Order Form",successMessage:"Payment successful! We'll be in touch shortly to discuss your project.",projectDetails:{title:"Tell Us About Your Project",subtitle:"Help us understand your business and project requirements so we can create the perfect website for you.",fields:{businessDescription:{label:"Business Description *",placeholder:"Tell us about your business, products/services, and what makes you unique."}}},expectations:{title:"What to Expect After Your Order",basic:[{title:"Quick Confirmation",text:"Within 24 hours of your order, you'll receive a confirmation email with next steps. For the Basic package, we'll deliver your complete website within one week."},{title:"Simple Design Process",text:"We'll create a design based on your requirements. You'll have one round of revisions to ensure the design meets your expectations."},{title:"Rapid Development",text:"Our streamlined development process means we can build your site quickly without sacrificing quality. We handle all the technical details so you don't have to."},{title:"Launch & Training",text:"Once your site is ready, we'll launch it and provide a simple guide on how to update your content. Basic package sites are typically live within 7 days of order confirmation."}],premium:[{title:"Detailed Consultation",text:"Within 48 hours, our design team will schedule a consultation to understand your brand and specific requirements. Premium websites are delivered within 2-3 weeks."},{title:"Custom Design",text:"Our designers will create a unique look for your site that aligns with your brand. You'll receive multiple design concepts and have two rounds of revisions."},{title:"Advanced Development",text:"We'll build your site with premium features including blog functionality, advanced SEO setup, and social media integration for better engagement."},{title:"Launch & Extended Support",text:"After thorough testing, we'll launch your site and provide 3 months of support and maintenance to ensure everything runs smoothly."}],default:[{title:"Initial Consultation",text:"After your order, we'll schedule a detailed consultation to understand your specific requirements and create a custom project plan."},{title:"Custom Development",text:"Our team will create a tailored solution based on your unique needs, with regular updates and feedback sessions throughout the process."},{title:"Thorough Testing",text:"We'll rigorously test all custom functionality to ensure everything works perfectly across all devices and browsers."},{title:"Launch & Ongoing Support",text:"After launch, you'll receive priority support and maintenance for 12 months to ensure your custom solution continues to meet your business needs."}]}},Un={title:"Say Hello",subtitle:"Ready to start your next project? Contact us today and let's create something friendly together.",description:"We're always looking for new friends and exciting projects. Whether you have a specific idea in mind or need help defining your web strategy, we're here to help with a smile.",contactMethods:[{icon:"📍",label:"Our office",value:"1 Blue Hill Plaza Ste. 1509-43, Pearl River, NY 10965",link:null},{icon:"📧",label:"Email Us",value:"hello@friendlyweb.co",link:"mailto:hello@friendlyweb.co"},{icon:"📞",label:"Call Us",value:"(845) 540-6100",link:"tel:+18455406100"}],formLabels:{name:"Your Name",email:"Your Email",subject:"Subject",message:"Your Message",button:"Send Us a Message"}},mr={title:"What's Included",subtitle:"Everything you need to look professional online—built with care, priced honestly, and backed by real support whenever you need it.",categories:[{title:"Website Design & Development",features:[{icon:"🎨",title:"Professional Design",description:"Custom design that matches your brand identity with a clean, modern look that works on all devices."},{icon:"📱",title:"Mobile-First Approach",description:"Fully responsive design that looks great on smartphones, tablets, and desktop computers."},{icon:"⚡",title:"Fast Loading Speed",description:"Optimized code and images to ensure your website loads quickly, improving user experience and SEO."},{icon:"🔍",title:"SEO Foundation",description:"Built-in SEO essentials including meta tags, semantic HTML, and proper heading structure."}]},{title:"Essential Business Features",features:[{icon:"📞",title:"Contact Form",description:"Professional contact form with spam protection that delivers messages directly to your email."},{icon:"🗺️",title:"Google Maps Integration",description:"Interactive map showing your business location to help customers find you easily."},{icon:"📱",title:"Click-to-Call Functionality",description:"Mobile users can tap your phone number to call your business directly."},{icon:"🔗",title:"Social Media Integration",description:"Links to your social profiles and sharing buttons for your content."}]},{title:"Technical Essentials",features:[{icon:"🔒",title:"SSL Certificate",description:"Secure HTTPS connection with SSL certificate included at no extra cost."},{icon:"🚀",title:"Fast Hosting Setup",description:"Website hosting configuration on reliable servers with 99.9% uptime."},{icon:"📦",title:"Domain Configuration",description:"We'll set up your existing domain or help you acquire and set up a new one."},{icon:"📧",title:"Business Email Setup",description:"Configuration assistance for professional email addresses using your domain."}]},{title:"Support & Training",features:[{icon:"🛠️",title:"30 Days of Support",description:"Technical support and minor content updates for 30 days after launch."},{icon:"🔄",title:"Website Backup",description:"Initial backup of your complete website for safety and peace of mind."},{icon:"📈",title:"Post-Launch Check",description:"Quality assurance review two weeks after launch to ensure everything is working perfectly."}]}],pricing:{title:"Basic Website Package",price:"0",unit:"down payment",description:"Get started with a professional website today - no upfront payment required. Pay only after your site goes live. Includes initial website content writing and monthly hosting & maintenance.",ctaText:"Start Free - No Payment Required",ctaLink:"/order"}},p3=O.section`
  height: 90vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`,h3=O.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`,m3=O(ue.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 1.1;
  margin-bottom: 2rem;
	color: (var--primary);
  

  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 4rem);
  }

	.primary {
		color: var(--primary);
	}

	.secondary {
		color: var(--secondary);
	}
	
`,g3=O(ue.p)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  max-width: 600px;
  margin-bottom: 3rem;
  color: #666;
`,y3=O(ue.div)`
  display: flex;
  gap: 1.5rem;
	margin-bottom: 5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`,v3=O(ue.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--primary);
  color: var(--dark);
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

	&:hover {
		color: white;
	}
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.6s ease;
  }
  
  &:hover:before {
    left: 100%;
  }
`,x3=O(ue.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: transparent;
  color: #333;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  border: 2px solid var(--primary);
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 102, 204, 0.1);
		color: black;
  }
`,w3=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,b3=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  perspective: 1000px;
`,Yv=O(ue.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(112,0,255,0.2) 0%, rgba(112,0,255,0) 70%);
  filter: blur(60px);
`,qv=O(ue.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 2px solid rgba(255, 0, 212, 0.3);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: 1;
`,_3=O(ue.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--light);
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  
  .arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid var(--primary);
    border-bottom: 2px solid var(--primary);
    transform: rotate(45deg);
  }
`,S3=()=>{const t=R.useRef(null);return R.useEffect(()=>{const e=Wu.context(()=>{Wu.to(".grid-lines",{backgroundPosition:"100px 100px",duration:20,repeat:-1,ease:"none"})},t);return()=>e.revert()},[]),m.jsxs(p3,{ref:t,children:[m.jsxs(w3,{children:[m.jsx(b3,{className:"grid-lines"}),m.jsx(Yv,{initial:{x:"60vw",y:"30vh",opacity:0},animate:{x:["60vw","55vw","60vw"],y:["30vh","35vh","30vh"],opacity:1},transition:{duration:10,repeat:1/0,repeatType:"reverse",opacity:{duration:2}},style:{background:"radial-gradient(circle, var(--secondary) 0%, rgba(0,240,255,0) 30%)"}}),m.jsx(Yv,{initial:{x:"20vw",y:"60vh",opacity:0},animate:{x:["20vw","25vw","20vw"],y:["60vh","55vh","60vh"],opacity:1},transition:{duration:12,repeat:1/0,repeatType:"reverse",opacity:{duration:2}},style:{background:"radial-gradient(circle, var(--primary-light) 0%, rgba(0,240,255,0) 40%)"}}),m.jsx(qv,{initial:{x:"70vw",y:"20vh",rotate:0,opacity:0},animate:{x:["70vw","68vw","70vw"],y:["20vh","22vh","20vh"],rotate:360,opacity:1},transition:{x:{duration:20,repeat:1/0,repeatType:"reverse"},y:{duration:15,repeat:1/0,repeatType:"reverse"},rotate:{duration:40,repeat:1/0,ease:"linear"},opacity:{duration:2}}}),m.jsx(qv,{initial:{x:"30vw",y:"70vh",rotate:0,opacity:0},animate:{x:["30vw","32vw","30vw"],y:["70vh","68vh","70vh"],rotate:-360,opacity:.3},transition:{x:{duration:18,repeat:1/0,repeatType:"reverse"},y:{duration:22,repeat:1/0,repeatType:"reverse"},rotate:{duration:50,repeat:1/0,ease:"linear"},opacity:{duration:2}},style:{opacity:.3,borderColor:"var(--primary)",borderRadius:"70% 30% 30% 70% / 60% 40% 60% 40%"}})]}),m.jsxs(h3,{children:[m.jsxs(m3,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"highlight",children:["We Create ",m.jsx("span",{className:"primary",children:"Friendly"}),m.jsx("span",{className:"secondary",children:"Web"})," Experiences"]}),m.jsx(g3,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:bo.subheading}),m.jsxs(y3,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[m.jsx(v3,{href:bo.buttons.primary.link,whileHover:{scale:1.05},whileTap:{scale:.95},children:bo.buttons.primary.text}),m.jsx(x3,{href:bo.buttons.secondary.link,whileHover:{scale:1.05},whileTap:{scale:.95},children:bo.buttons.secondary.text})]})]}),m.jsxs(_3,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:1},children:[m.jsx(ue.span,{animate:{y:[0,10,0]},transition:{duration:1.5,repeat:1/0},children:bo.scrollText}),m.jsx(ue.div,{className:"arrow",animate:{y:[0,10,0]},transition:{duration:1.5,repeat:1/0,delay:.2}})]})]})};var Ep=new Map,cu=new WeakMap,Gv=0,k3=void 0;function C3(t){return t?(cu.has(t)||(Gv+=1,cu.set(t,Gv.toString())),cu.get(t)):"0"}function P3(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?C3(t.root):t[e]}`).toString()}function T3(t){const e=P3(t);let r=Ep.get(e);if(!r){const i=new Map;let s;const l=new IntersectionObserver(u=>{u.forEach(c=>{var f;const p=c.isIntersecting&&s.some(h=>c.intersectionRatio>=h);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=p),(f=i.get(c.target))==null||f.forEach(h=>{h(p,c)})})},t);s=l.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:l,elements:i},Ep.set(e,r)}return r}function j3(t,e,r={},i=k3){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const f=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:s,observer:l,elements:u}=T3(r),c=u.get(t)||[];return u.has(t)||u.set(t,c),c.push(e),l.observe(t),function(){c.splice(c.indexOf(e),1),c.length===0&&(u.delete(t),l.unobserve(t)),u.size===0&&(l.disconnect(),Ep.delete(s))}}function In({threshold:t,delay:e,trackVisibility:r,rootMargin:i,root:s,triggerOnce:l,skip:u,initialInView:c,fallbackInView:f,onChange:p}={}){var h;const[y,x]=R.useState(null),b=R.useRef(p),[_,w]=R.useState({inView:!!c,entry:void 0});b.current=p,R.useEffect(()=>{if(u||!y)return;let C;return C=j3(y,(E,P)=>{w({inView:E,entry:P}),b.current&&b.current(E,P),P.isIntersecting&&l&&C&&(C(),C=void 0)},{root:s,rootMargin:i,threshold:t,trackVisibility:r,delay:e},f),()=>{C&&C()}},[Array.isArray(t)?t.toString():t,y,s,i,l,u,r,f,e]);const S=(h=_.entry)==null?void 0:h.target,j=R.useRef(void 0);!y&&S&&!l&&!u&&j.current!==S&&(j.current=S,w({inView:!!c,entry:void 0}));const T=[x,_.inView,_.entry];return T.ref=T[0],T.inView=T[1],T.entry=T[2],T}var mb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xv=Pe.createContext&&Pe.createContext(mb),E3=["attr","size","title"];function O3(t,e){if(t==null)return{};var r=A3(t,e),i,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(s=0;s<l.length;s++)i=l[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function A3(t,e){if(t==null)return{};var r={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;r[i]=t[i]}return r}function Uu(){return Uu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Uu.apply(this,arguments)}function Qv(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,i)}return r}function $u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Qv(Object(r),!0).forEach(function(i){R3(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Qv(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function R3(t,e,r){return e=L3(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function L3(t){var e=M3(t,"string");return typeof e=="symbol"?e:e+""}function M3(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function gb(t){return t&&t.map((e,r)=>Pe.createElement(e.tag,$u({key:r},e.attr),gb(e.child)))}function zn(t){return e=>Pe.createElement(D3,Uu({attr:$u({},t.attr)},e),gb(t.child))}function D3(t){var e=r=>{var{attr:i,size:s,title:l}=t,u=O3(t,E3),c=s||r.size||"1em",f;return r.className&&(f=r.className),t.className&&(f=(f?f+" ":"")+t.className),Pe.createElement("svg",Uu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,u,{className:f,style:$u($u({color:t.color||r.color},r.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&Pe.createElement("title",null,l),t.children)};return Xv!==void 0?Pe.createElement(Xv.Consumer,null,r=>e(r)):e(mb)}function I3(t){return zn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(t)}function Kv(t){return zn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(t)}function z3(t){return zn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 19l7-7 3 3-7 7-3-3z"},child:[]},{tag:"path",attr:{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"},child:[]},{tag:"path",attr:{d:"M2 2l7.586 7.586"},child:[]},{tag:"circle",attr:{cx:"11",cy:"11",r:"2"},child:[]}]})(t)}function F3(t){return zn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(t)}function N3(t){return zn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(t)}function B3(t){return zn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(t)}const V3=O.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
  width: 100vw;
  max-width: 100%;
`,W3=O.div`
  text-align: center;
  margin-bottom: 80px;
`,U3=O(ue.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  
  span {
    background: var(--primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.9;
  }
`,$3=O(ue.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`,H3=O.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Y3=O(ue.div)`
  background: rgba(119, 119, 119, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 240, 255, 0.05);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover:before {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`,q3=O.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
    stroke: var(--primary);
    stroke-width: 1.5;
    fill: none;
    filter: drop-shadow(0 0 2px rgba(0, 162, 255, 0.3));
    position: relative;
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 162, 255, 0.1);
    border-radius: 50%;
    z-index: 0;
  }
`,G3=O.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--primary);
  }
`,X3=O.p`
  color: #666;
  line-height: 1.6;
  margin-top: 1.5rem;
`,Q3=O.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
`,K3=O.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  color: #444;
  
  &:before {
    content: '✓';
    margin-right: 10px;
    color: var(--primary);
    font-weight: bold;
  }
`,Zv=O(ue.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(112,0,255,0.05) 0%, rgba(112,0,255,0) 70%);
  filter: blur(60px);
  z-index: 0;
`,Z3=O.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`,J3=O.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,eO=O.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Sa=O.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--primary);
  color: white;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    box-shadow: 0 6px 20px rgba(255, 64, 129, 0.4);
    transform: translateY(-2px);
		color: white;
  }
`,ac=O.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`,tO=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),r={hidden:{},visible:{transition:{staggerChildren:.2}}},i={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:"easeOut"}}};return m.jsxs(V3,{id:"services",ref:t,children:[m.jsx(Zv,{initial:{x:"20%",y:"30%"},animate:{x:["20%","25%","20%"],y:["30%","35%","30%"]},transition:{duration:10,repeat:1/0,repeatType:"reverse"}}),m.jsx(Zv,{initial:{x:"70%",y:"60%"},animate:{x:["70%","65%","70%"],y:["60%","65%","60%"]},transition:{duration:12,repeat:1/0,repeatType:"reverse"},style:{background:"radial-gradient(circle, rgba(0,240,255,0.05) 0%, rgba(0,240,255,0) 70%)"}}),m.jsxs(W3,{children:[m.jsxs(U3,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8},children:["Our ",m.jsx("span",{children:lu.title.split(" ")[1]})]}),m.jsx($3,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.2},children:lu.subtitle})]}),m.jsx(H3,{as:ue.div,variants:r,initial:"hidden",animate:e?"visible":"hidden",children:lu.services.map((s,l)=>{let u;switch(s.title){case"Small Business Websites":u=Kv;break;case"Professional Design":u=z3;break;case"Online Stores":u=N3;break;case"Local Business Visibility":u=I3;break;case"Website Maintenance":u=F3;break;case"Small Business Marketing":u=B3;break;default:u=Kv}return m.jsxs(Y3,{variants:i,children:[m.jsx(q3,{children:m.jsx(u,{})}),m.jsx(G3,{children:s.title}),m.jsx(X3,{children:s.description}),m.jsx(Q3,{children:s.features.map((c,f)=>m.jsx(K3,{children:c},f))})]},l)})}),m.jsx(ac,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.6},children:m.jsx(Sa,{href:"/order",whileHover:{backgroundColor:"var(--secondary)",boxShadow:"0 6px 20px rgba(255, 64, 129, 0.4)",transform:"translateY(-3px)"},children:lu.cta.text})})]})},nO=O.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 100%;
`,rO=O.div`
  text-align: center;
  margin-bottom: 80px;
`,iO=O(ue.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  
  span {
    background: var(--primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.9;
  }
`,oO=O(ue.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;O(ue.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;O(ue.button)`
  background: ${t=>t.active?"var(--primary)":"rgba(0, 0, 0, 0.05)"};
  color: ${t=>t.active?"var(--dark)":"#333"};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${t=>t.active?"var(--primary)":"rgba(0, 0, 0, 0.1)"};
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;const sO=O(ue.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,aO=O(ue.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16/9;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  &:hover .overlay {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`,lO=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.5s ease;
`,uO=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), transparent);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  opacity: 0.4;
  transition: opacity 0.3s ease;
  class-name: overlay;
  
  &:hover {
    opacity: 1;
  }
`,cO=O.div`
  text-align: left;
  margin-bottom: 0.75rem;
  position: relative;
`,dO=O.h3`
  font-size: 1.5rem;
  color: #333;
  font-weight: 700;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
  }
`;O.span`
  font-size: 0.9rem;
  color: var(--primary);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;const fO=O.a`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.999);
  color: #333;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  width: fit-content;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;O(ue.button)`
  display: block;
  margin: 4rem auto 0;
  padding: 1rem 2.5rem;
  background: transparent;
  color: var(--light);
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  border: 2px solid var(--primary);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 240, 255, 0.1);
  }
`;const Jv=O(ue.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(112,0,255,0.05) 0%, rgba(112,0,255,0) 70%);
  filter: blur(60px);
  z-index: -1;
`,pO=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),[r,i]=R.useState("all"),s=r==="all"?uu.projects:uu.projects.filter(c=>c.category===r),l={hidden:{},visible:{transition:{staggerChildren:.1}}},u={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:"easeOut"}},exit:{y:50,opacity:0,transition:{duration:.4,ease:"easeIn"}}};return m.jsxs(nO,{id:"portfolio",ref:t,children:[m.jsx(Jv,{initial:{x:"70%",y:"20%"},animate:{x:["70%","65%","70%"],y:["20%","25%","20%"]},transition:{duration:10,repeat:1/0,repeatType:"reverse"}}),m.jsx(Jv,{initial:{x:"20%",y:"70%"},animate:{x:["20%","25%","20%"],y:["70%","65%","70%"]},transition:{duration:12,repeat:1/0,repeatType:"reverse"},style:{background:"radial-gradient(circle, rgba(0,240,255,0.05) 0%, rgba(0,240,255,0) 70%)"}}),m.jsxs(rO,{children:[m.jsxs(iO,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8},children:["Our ",m.jsx("span",{children:uu.title.split(" ")[1]})]}),m.jsx(oO,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.2},children:uu.subtitle})]}),m.jsx(sO,{as:ue.div,variants:l,initial:"hidden",animate:e?"visible":"hidden",children:m.jsx(gh,{mode:"wait",children:s.map(c=>m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[m.jsx(cO,{children:m.jsx(dO,{children:c.title})}),m.jsxs(aO,{variants:u,layout:!0,children:[m.jsx(lO,{src:c.image}),m.jsx(uO,{className:"overlay",children:m.jsx(fO,{target:"_blank",href:c.link,children:"View Project"})})]})]},c.id))})}),m.jsx(ac,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:1},style:{marginTop:"2rem"},children:m.jsx(Sa,{href:"/order",whileHover:{backgroundColor:"var(--secondary)",boxShadow:"0 6px 20px rgba(255, 64, 129, 0.4)",transform:"translateY(-3px)"},children:"Start Your Project"})})]})},hO=O.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
  width: 100vw;
  max-width: 100%;
`,mO=O.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`,gO=O.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,yO=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,vO=O(ue.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  background: var(--primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`,xO=O(ue.p)`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 2rem;
`,wO=O(ue.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`,bO=O(ue.div)`
  text-align: left;
`,_O=O.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: rgba(var(--primary-rgb), 0.85);
  font-family: 'Orbitron', sans-serif;
`,SO=O.p`
  font-size: 1rem;
  color: #666;
`,kO=O(ue.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    border-top: 5px solid var(--primary);
    border-left: 5px solid var(--primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 50px;
    height: 50px;
    border-bottom: 5px solid var(--secondary);
    border-right: 5px solid var(--secondary);
  }
`;O(ue.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;const CO=O(ue.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;O.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${CO}:hover & img {
    transform: scale(1.05);
  }
`;O.div`
  padding: 1.5rem;
`;O.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Orbitron', sans-serif;
`;O.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;O.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
`;O.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: #666;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;const PO=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),r={hidden:{},visible:{transition:{staggerChildren:.2}}},i={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return m.jsx(hO,{id:"about",children:m.jsx(mO,{children:m.jsxs(ue.div,{ref:t,variants:r,initial:"hidden",animate:e?"visible":"hidden",children:[m.jsx(vO,{variants:i,children:au.title}),m.jsxs(gO,{children:[m.jsxs(yO,{children:[au.description.map((s,l)=>m.jsx(xO,{variants:i,children:s},l)),m.jsx(wO,{children:au.stats.map((s,l)=>m.jsxs(bO,{variants:i,children:[m.jsx(_O,{children:s.number}),m.jsx(SO,{children:s.title})]},l))})]}),m.jsx(kO,{variants:i,whileHover:{scale:1.02},transition:{duration:.3},children:m.jsx("img",{src:au.teamImage,alt:"Our team"})})]}),m.jsx(ac,{variants:i,children:m.jsx(Sa,{href:"/order",whileHover:{backgroundColor:"var(--secondary)",boxShadow:"0 6px 20px rgba(255, 64, 129, 0.4)",transform:"translateY(-3px)"},children:"Work With Our Team"})})]})})})};function TO(t){return zn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(t)}function jO(t){return zn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(t)}function EO(t){return zn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M109.46 244.04l134.58-134.56-44.12-44.12-61.68 61.68a7.919 7.919 0 0 1-11.21 0l-11.21-11.21c-3.1-3.1-3.1-8.12 0-11.21l61.68-61.68-33.64-33.65C131.47-3.1 111.39-3.1 99 9.29L9.29 99c-12.38 12.39-12.39 32.47 0 44.86l100.17 100.18zm388.47-116.8c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25c-18.76-18.76-49.18-18.76-67.95 0l-46.02 46.01 113.2 113.2 46.02-46.03zM316.08 82.71l-297 296.96L.32 487.11c-2.53 14.49 10.09 27.11 24.59 24.56l107.45-18.84L429.28 195.9 316.08 82.71zm186.63 285.43l-33.64-33.64-61.68 61.68c-3.1 3.1-8.12 3.1-11.21 0l-11.21-11.21c-3.09-3.1-3.09-8.12 0-11.21l61.68-61.68-44.14-44.14L267.93 402.5l100.21 100.2c12.39 12.39 32.47 12.39 44.86 0l89.71-89.7c12.39-12.39 12.39-32.47 0-44.86z"},child:[]}]})(t)}function OO(t){return zn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(t)}function AO(t){return zn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}const RO=O.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
  width: 100vw;
  max-width: 100%;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`,LO=O.div`
  text-align: center;
  margin-bottom: 100px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`,MO=O(ue.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  
  span {
    background: var(--primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.9;
  }
`,DO=O(ue.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`,IO=O.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--primary);
    
    @media (max-width: 768px) {
      left: 30px;
      height: calc(100% - 60px);
    }
    
    @media (max-width: 480px) {
      left: 15px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem 0 0;
  }
`,zO=O(ue.div)`
  display: flex;
  margin-bottom: 120px;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    .process-content {
      align-items: flex-start;
      text-align: left;
      padding-left: 0;
      padding-right: 5rem;
      
      @media (max-width: 768px) {
        padding-right: 0;
        padding-left: 3rem;
        text-align: left;
      }
      
      @media (max-width: 480px) {
        padding-left: 1rem;
        margin-left: 40px;
      }
    }
    
    .process-visual {
      right: auto;
      left: 0;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: row !important;
    margin-bottom: 60px;
    
    &:nth-child(even) .process-content {
      padding-right: 0;
      padding-left: 3rem;
    }
    
    .process-visual {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 40px;
    
    &:nth-child(even) .process-content {
      padding-left: 1rem;
      margin-left: 40px;
    }
  }
`,FO=O.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--dark);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    left: 30px;
    transform: translateX(0);
  }
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
		left: 20px;
  }
`,NO=O.div`
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5rem;
  class-name: process-content;
  position: relative;
  z-index: 2;
	width: 100%;
  
  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 60px);
    margin-left: 60px;
    padding-left: 3rem;
  }
  
  @media (max-width: 480px) {
    padding-left: 1rem;
    margin-left: 45px;
  }
`,BO=O(ue.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.5);
  overflow: hidden;
  class-name: process-visual;
  
  svg {
    font-size: 80px;
    color: var(--secondary);
    filter: drop-shadow(0 0 8px rgba(var(--primary-rgb), 0.5));
    z-index: 3;
    transition: all 0.5s ease;
  }
  
  &:hover svg {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 0 12px rgba(var(--primary-rgb), 0.7));
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: linear-gradient(
      45deg,
      rgba(var(--primary-rgb), 0.08) 0%,
      rgba(var(--secondary-rgb), 0.08) 100%
    );
    animation: rotate 20s linear infinite;
  }
  
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      transparent 30%,
      rgba(0, 0, 0, 0.03) 100%
    );
    z-index: 1;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,zf=O.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  
  &.square {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    transform: rotate(45deg);
    bottom: 30px;
    left: 30px;
    opacity: 0.4;
    animation: float3 7s ease-in-out infinite;
  }
  
  &.circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 40px;
    right: 40px;
    opacity: 0.3;
    animation: pulse 5s ease-in-out infinite;
  }
  
  &.line {
    width: 60px;
    height: 3px;
    top: 70%;
    right: 20%;
    opacity: 0.25;
    transform: rotate(-45deg);
  }
  
  @keyframes float3 {
    0%, 100% { transform: rotate(45deg) translate(0, 0); }
    50% { transform: rotate(45deg) translate(10px, -10px); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.5); opacity: 0.15; }
  }
`,ex=O.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--secondary), var(--primary));
  opacity: 0.25;
  filter: blur(5px);
  z-index: 0;
  
  &:nth-child(1) {
    width: 120px;
    height: 120px;
    top: -30px;
    left: -30px;
    animation: float1 8s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    width: 170px;
    height: 170px;
    bottom: -50px;
    right: -50px;
    animation: float2 10s ease-in-out infinite;
  }
  
  @keyframes float1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(15px, 15px); }
  }
  
  @keyframes float2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-15px, -15px); }
  }`,VO=O(ue.div)`
  position: relative;
  z-index: 2;
  
  &:before {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    z-index: -1;
    opacity: 0.5;
  }
`,WO=O.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,Ns=O.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--primary);
  opacity: 0.3;
  
  &:nth-child(1) { top: 20%; left: 20%; animation: particle1 15s linear infinite; }
  &:nth-child(2) { top: 70%; left: 50%; animation: particle2 20s linear infinite; }
  &:nth-child(3) { top: 30%; left: 80%; animation: particle3 18s linear infinite; }
  &:nth-child(4) { top: 80%; left: 10%; animation: particle4 12s linear infinite; }
  &:nth-child(5) { top: 50%; left: 30%; animation: particle5 16s linear infinite; }
  
  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.4);
    width: 4px;
    height: 4px;
  }
  
  @keyframes particle1 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(30px, 50px); }
    50% { transform: translate(80px, 10px); }
    75% { transform: translate(30px, -30px); }
    100% { transform: translate(0, 0); }
  }
  
  @keyframes particle2 {
    0% { transform: translate(0, 0); }
    33% { transform: translate(-40px, 20px); }
    66% { transform: translate(20px, -40px); }
    100% { transform: translate(0, 0); }
  }
  
  @keyframes particle3 {
    0% { transform: translate(0, 0); }
    50% { transform: translate(-30px, -30px); }
    100% { transform: translate(0, 0); }
  }
  
  @keyframes particle4 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(40px, -10px); }
    50% { transform: translate(20px, 40px); }
    75% { transform: translate(-20px, 20px); }
    100% { transform: translate(0, 0); }
  }
  
  @keyframes particle5 {
    0% { transform: translate(0, 0); }
    33% { transform: translate(30px, 30px); }
    66% { transform: translate(-20px, 40px); }
    100% { transform: translate(0, 0); }
  }
`,UO=O.h3`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  background: var(--primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`,$O=O.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  width: 100%;


	@media (max-width: 480px) {
    margin-left: -20px
  }
`,HO=O.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

	@media (max-width: 480px) {
    margin-left: -20px
  }
`,YO=O.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  color: #444;
  line-height: 1.5;
  
  &:before {
    content: '✓';
    margin-right: 10px;
    color: var(--primary);
    font-weight: bold;
    flex-shrink: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.6rem;
    padding-right: 5px;
    margin-left: -5px;
  }
`,tx=O(ue.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(112,0,255,0.05) 0%, rgba(112,0,255,0) 70%);
  filter: blur(60px);
  z-index: 0;
`,qO=O.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }

`,GO=O(ue.div)`
  text-align: center;
  max-width: 800px;
  margin: 4rem auto 0;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`,XO=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),r={hidden:{},visible:{transition:{staggerChildren:.3}}},i={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},s={FaSearch:AO,FaChartLine:TO,FaPencilRuler:EO,FaCode:jO,FaRocket:OO},l=Fs.steps.map(u=>({...u,icon:s[u.icon]()}));return m.jsxs(RO,{id:"process",ref:t,children:[m.jsx(tx,{initial:{x:"20%",y:"30%"},animate:{x:["20%","25%","20%"],y:["30%","35%","30%"]},transition:{duration:10,repeat:1/0,repeatType:"reverse"}}),m.jsx(tx,{initial:{x:"70%",y:"60%"},animate:{x:["70%","65%","70%"],y:["60%","65%","60%"]},transition:{duration:12,repeat:1/0,repeatType:"reverse"},style:{background:"radial-gradient(circle, rgba(0,240,255,0.05) 0%, rgba(0,240,255,0) 70%)"}}),m.jsxs(LO,{children:[m.jsxs(MO,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8},children:[Fs.title.split(" ")[0]," ",m.jsx("span",{children:Fs.title.split(" ")[1]})]}),m.jsx(DO,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.2},children:Fs.subtitle})]}),m.jsx(IO,{as:ue.div,variants:r,initial:"hidden",animate:e?"visible":"hidden",children:l.map((u,c)=>m.jsxs(zO,{variants:i,children:[m.jsx(FO,{children:u.number}),m.jsxs(NO,{className:"process-content",children:[m.jsx(UO,{children:u.title}),m.jsx($O,{children:u.description}),m.jsx(HO,{children:u.features.map((f,p)=>m.jsx(YO,{children:f.includes("(if needed)")||f.includes("(when needed)")||f.includes("(for complex projects)")?m.jsx(m.Fragment,{children:m.jsx("span",{style:{fontWeight:"normal",fontSize:"0.9em"},children:f})}):f},p))})]}),m.jsxs(BO,{className:"process-visual",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.3},style:{top:0},children:[m.jsxs(WO,{children:[m.jsx(Ns,{}),m.jsx(Ns,{}),m.jsx(Ns,{}),m.jsx(Ns,{}),m.jsx(Ns,{})]}),m.jsx(ex,{}),m.jsx(ex,{}),m.jsx(zf,{className:"square"}),m.jsx(zf,{className:"circle"}),m.jsx(zf,{className:"line"}),m.jsx(VO,{initial:{rotate:-5},animate:{rotate:5},transition:{duration:4,repeat:1/0,repeatType:"reverse",ease:"easeInOut"},children:u.icon})]})]},c))}),m.jsxs(GO,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.5},children:[m.jsx(qO,{children:"Whether you're just starting your first business website or need a complex web application, our process adapts to your needs while keeping things simple and stress-free."}),m.jsx(Sa,{href:"/order",whileHover:{scale:1.05,boxShadow:"0 6px 20px rgba(0,0,0,0.15)"},whileTap:{scale:.98},style:{padding:"0.8rem 2rem"},children:Fs.cta.text})]})]})},QO=O(Z3)`
  background-color: var(--light-bg);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 6rem 2rem;
  display: block;
`;O.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;const KO=O.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;O.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;const ZO=O(ue.h3)`
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 600;
`,JO=O(ue.div)`
  margin-bottom: 2rem;
`,eA=O(ue.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: white;
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1rem;
	height: 115px;

	@media (max-width: 500px) {
    height: fit-content;
		width: 100%;
		margin: 0;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`,tA=O.div`
  font-size: 1.5rem;
  color: var(--primary);
  flex-shrink: 0;
`,nA=O.div`
  flex: 1;
`,rA=O.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`,iA=O.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
`,oA=O(ue.div)`
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
  color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 3rem auto 0;
`,sA=O.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 700;
`,aA=O.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  
  span {
    font-size: 1.25rem;
    font-weight: 400;
  }
`,lA=O.p`
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1rem;
  max-width: 80%;

	@media (max-width: 500px) {
    display: none;
  }
`,uA=O(ue.a)`
  background-color: white;
  color: var(--primary);
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-align: center;
  text-decoration: none;
  font-size: 1.1rem;
  transition: transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`,cA={hidden:{},visible:{transition:{staggerChildren:.1}}},Ei={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},dA=()=>{const t=R.useRef(null),e=Lj(t,{});return m.jsxs(QO,{ref:t,as:ue.section,initial:"hidden",animate:e?"visible":"hidden",variants:cA,"data-section-id":"basic-package",id:"basic-package",children:[m.jsx(J3,{as:ue.h2,variants:Ei,children:mr.title}),m.jsx(eO,{as:ue.p,variants:Ei,children:mr.subtitle}),m.jsx(KO,{children:mr.categories.map((r,i)=>m.jsxs(JO,{variants:Ei,children:[m.jsx(ZO,{variants:Ei,children:r.title}),r.features.map((s,l)=>m.jsxs(eA,{variants:Ei,whileHover:{scale:1.03},children:[m.jsx(tA,{children:s.icon}),m.jsxs(nA,{children:[m.jsx(rA,{children:s.title}),m.jsx(iA,{children:s.description})]})]},l))]},i))}),m.jsxs(oA,{variants:Ei,children:[m.jsx(sA,{children:mr.pricing.title}),m.jsxs(aA,{children:["$",mr.pricing.price," ",m.jsx("span",{children:mr.pricing.unit})]}),m.jsx(lA,{children:mr.pricing.description}),m.jsx(uA,{href:mr.pricing.ctaLink,variants:Ei,whileHover:{scale:1.05},whileTap:{scale:.98},children:mr.pricing.ctaText})]})]})},fA=O.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 100%;
`,pA=O.div`
  text-align: center;
  margin-bottom: 80px;
`,hA=O(ue.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  
  span {
    background: var(--primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.9;
  }
`,mA=O(ue.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`,gA=O.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`,yA=O.div`
  position: relative;
  height: 400px;
  
  @media (max-width: 768px) {
    height: 500px;
  }
`,vA=O(ue.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 3.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 18px;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,xA=O.div`
  font-size: 4rem;
  color: var(--primary);
  opacity: 0.3;
  position: absolute;
  top: 2rem;
  left: 2rem;
`,wA=O.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 1;
  font-weight: 400;
  
  &:before {
    content: open-quote;
    font-size: 2em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
    color: var(--primary);
    opacity: 0.5;
  }
  
  &:after {
    content: close-quote;
    font-size: 2em;
    line-height: 0.1em;
    margin-left: 0.1em;
    vertical-align: -0.6em;
    color: var(--primary);
    opacity: 0.5;
  }
`,bA=O.div`
  display: flex;
  align-items: center;
`,_A=O.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,SA=O.div``,kA=O.h4`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  background: var(--primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`,CA=O.p`
  font-size: 0.9rem;
  color: #666;
`,PA=O.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 3rem;
  position: relative;
  z-index: 5;
`,TA=O.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${t=>t.active?"var(--primary)":"rgba(0, 0, 0, 0.15)"};
  border: 2px solid ${t=>t.active?"transparent":"rgba(0, 0, 0, 0.1)"};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  position: relative;
  
  &:hover {
    transform: scale(1.2);
    background: ${t=>t.active?"var(--primary)":"rgba(0, 0, 0, 0.25)"};
  }
  
  &:after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: transparent;
    z-index: -1;
  }
  
  ${t=>t.active&&`
    &:after {
      background: radial-gradient(circle, rgba(112,0,255,0.1) 0%, rgba(112,0,255,0) 70%);
    }
  `}
`,nx=O.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  font-size: 24px;
  font-weight: bold;
  color: var(--primary);
  
  &:hover {
    background: linear-gradient(90deg, rgba(112,0,255,0.05), rgba(0,240,255,0.05));
    color: var(--primary);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(112,0,255,0.2);
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media (max-width: 992px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    opacity: 0.8;
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`,rx=O(ue.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(112,0,255,0.05) 0%, rgba(112,0,255,0) 70%);
  filter: blur(60px);
  z-index: 0;
`,jA=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),[r,i]=R.useState(0),[s,l]=R.useState(null),u=R.useRef(null);R.useEffect(()=>(e&&(u.current=setInterval(()=>{c()},5e3)),()=>{u.current&&clearInterval(u.current)}),[e,r]);const c=()=>{l(1),i(y=>(y+1)%tn.testimonials.length)},f=()=>{l(-1),i(y=>(y-1+tn.testimonials.length)%tn.testimonials.length)},p=y=>{l(y>r?1:-1),i(y)},h={enter:y=>({x:y>0?1e3:-1e3,opacity:0}),center:{x:0,opacity:1},exit:y=>({x:y>0?-1e3:1e3,opacity:0})};return m.jsxs(fA,{id:"testimonials",ref:t,children:[m.jsx(rx,{initial:{x:"70%",y:"30%"},animate:{x:["70%","65%","70%"],y:["30%","35%","30%"]},transition:{duration:10,repeat:1/0,repeatType:"reverse"}}),m.jsx(rx,{initial:{x:"30%",y:"70%"},animate:{x:["30%","35%","30%"],y:["70%","65%","70%"]},transition:{duration:12,repeat:1/0,repeatType:"reverse"},style:{background:"radial-gradient(circle, rgba(0,240,255,0.05) 0%, rgba(0,240,255,0) 70%)"}}),m.jsxs(pA,{children:[m.jsxs(hA,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8},children:[tn.title.split(" ").slice(0,1).join(" ")," ",m.jsx("span",{children:tn.title.split(" ").slice(1).join(" ")})]}),m.jsx(mA,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.2},children:tn.subtitle})]}),m.jsxs(gA,{children:[m.jsxs(yA,{children:[m.jsx(nx,{className:"prev",onClick:f,as:ue.button,"aria-label":"Previous testimonial",children:"←"}),m.jsx(gh,{mode:"wait",custom:s,children:m.jsxs(vA,{custom:s,variants:h,initial:"enter",animate:"center",exit:"exit",transition:{duration:.5,ease:"easeInOut"},children:[m.jsx(xA,{children:'"'}),m.jsx(wA,{children:tn.testimonials[r].text}),m.jsxs(bA,{children:[m.jsx(_A,{children:m.jsx("img",{src:tn.testimonials[r].image,alt:tn.testimonials[r].author})}),m.jsxs(SA,{children:[m.jsx(kA,{children:tn.testimonials[r].author}),m.jsx(CA,{children:tn.testimonials[r].title})]})]})]},r)}),m.jsx(nx,{className:"next",onClick:c,as:ue.button,"aria-label":"Next testimonial",children:"→"})]}),m.jsx(PA,{children:tn.testimonials.map((y,x)=>m.jsx(TA,{active:x===r,onClick:()=>p(x),as:ue.button,whileHover:{scale:1.2},whileTap:{scale:.9},"aria-label":`Go to testimonial ${x+1}`},x))})]}),m.jsx(ac,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.6},children:m.jsx(Sa,{href:"/order",whileHover:{backgroundColor:"var(--secondary)",boxShadow:"0 6px 20px rgba(255, 64, 129, 0.4)",transform:"translateY(-3px)"},children:tn.cta.text})})]})};var Op=function(t,e){return Op=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},Op(t,e)};function ka(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Op(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var ha=function(){return ha=Object.assign||function(e){for(var r,i=1,s=arguments.length;i<s;i++){r=arguments[i];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},ha.apply(this,arguments)};function EA(t,e){e===void 0&&(e={});var r=e.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var OA=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
    font-size:16px;
    line-height:1.2em
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
    display:inline;
    width:100%;
    height:100%
}

.calendly-popup-content {
    position:relative
}

.calendly-popup-content.calendly-mobile {
    -webkit-overflow-scrolling:touch;
    overflow-y:auto
}

.calendly-overlay {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow:hidden;
    z-index:9999;
    background-color:#a5a5a5;
    background-color:rgba(31,31,31,0.4)
}

.calendly-overlay .calendly-close-overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0
}

.calendly-overlay .calendly-popup {
    box-sizing:border-box;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translateY(-50%) translateX(-50%);
    transform:translateY(-50%) translateX(-50%);
    width:80%;
    min-width:900px;
    max-width:1000px;
    height:90%;
    max-height:680px
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup {
        position:fixed;
        top:50px;
        left:0;
        right:0;
        bottom:0;
        -webkit-transform:none;
        transform:none;
        width:100%;
        height:auto;
        min-width:0;
        max-height:none
    }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
    height:100%;
}

.calendly-overlay .calendly-popup-close {
    position:absolute;
    top:25px;
    right:25px;
    color:#fff;
    width:19px;
    height:19px;
    cursor:pointer;
    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;
    background-size:contain
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup-close {
        top:15px;
        right:15px
    }
}

.calendly-badge-widget {
    position:fixed;
    right:20px;
    bottom:15px;
    z-index:9998
}

.calendly-badge-widget .calendly-badge-content {
    display:table-cell;
    width:auto;
    height:45px;
    padding:0 30px;
    border-radius:25px;
    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;
    font-family:sans-serif;
    text-align:center;
    vertical-align:middle;
    font-weight:bold;
    font-size:14px;
    color:#fff;
    cursor:pointer
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
    color:#666a73
}

.calendly-badge-widget .calendly-badge-content span {
    display:block;
    font-size:12px
}

.calendly-spinner {
    position:absolute;
    top:50%;
    left:0;
    right:0;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
    text-align:center;
    z-index:-1
}

.calendly-spinner>div {
    display:inline-block;
    width:18px;
    height:18px;
    background-color:#e1e1e1;
    border-radius:50%;
    vertical-align:middle;
    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode:both;
    animation-fill-mode:both
}

.calendly-spinner .calendly-bounce1 {
    -webkit-animation-delay:-0.32s;
    animation-delay:-0.32s
}

.calendly-spinner .calendly-bounce2 {
    -webkit-animation-delay:-0.16s;
    animation-delay:-0.16s
}

@-webkit-keyframes calendly-bouncedelay {
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    } 
    
    40%{
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}

@keyframes calendly-bouncedelay{ 
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    
    40% {
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}`;EA(OA);function Ff(t){return t.charAt(0)==="#"?t.slice(1):t}function AA(t){return t!=null&&t.primaryColor&&(t.primaryColor=Ff(t.primaryColor)),t!=null&&t.textColor&&(t.textColor=Ff(t.textColor)),t!=null&&t.backgroundColor&&(t.backgroundColor=Ff(t.backgroundColor)),t}var ix;(function(t){t.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",t.EVENT_TYPE_VIEWED="calendly.event_type_viewed",t.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",t.EVENT_SCHEDULED="calendly.event_scheduled",t.PAGE_HEIGHT="calendly.page_height"})(ix||(ix={}));var yb=function(t){var e=t.url,r=t.prefill,i=r===void 0?{}:r,s=t.pageSettings,l=s===void 0?{}:s,u=t.utm,c=u===void 0?{}:u,f=t.embedType,p=AA(l),h=p.backgroundColor,y=p.hideEventTypeDetails,x=p.hideLandingPageDetails,b=p.primaryColor,_=p.textColor,w=p.hideGdprBanner,S=i.customAnswers,j=i.date,T=i.email,C=i.firstName,E=i.guests,P=i.lastName,M=i.location,D=i.smsReminderNumber,F=i.name,B=c.utmCampaign,Y=c.utmContent,G=c.utmMedium,z=c.utmSource,Z=c.utmTerm,X=c.salesforce_uuid,ae=e.indexOf("?"),ce=ae>-1,se=e.slice(ae+1),K=ce?e.slice(0,ae):e,le=[ce?se:null,h?"background_color=".concat(h):null,y?"hide_event_type_details=1":null,x?"hide_landing_page_details=1":null,b?"primary_color=".concat(b):null,_?"text_color=".concat(_):null,w?"hide_gdpr_banner=1":null,F?"name=".concat(encodeURIComponent(F)):null,D?"phone_number=".concat(encodeURIComponent(D)):null,M?"location=".concat(encodeURIComponent(M)):null,C?"first_name=".concat(encodeURIComponent(C)):null,P?"last_name=".concat(encodeURIComponent(P)):null,E?"guests=".concat(E.map(encodeURIComponent).join(",")):null,T?"email=".concat(encodeURIComponent(T)):null,j&&j instanceof Date?"date=".concat(RA(j)):null,B?"utm_campaign=".concat(encodeURIComponent(B)):null,Y?"utm_content=".concat(encodeURIComponent(Y)):null,G?"utm_medium=".concat(encodeURIComponent(G)):null,z?"utm_source=".concat(encodeURIComponent(z)):null,Z?"utm_term=".concat(encodeURIComponent(Z)):null,X?"salesforce_uuid=".concat(encodeURIComponent(X)):null,f?"embed_type=".concat(f):null,"embed_domain=1"].concat(S?MA(S):[]).filter(function(re){return re!==null}).join("&");return"".concat(K,"?").concat(le)},RA=function(t){var e=t.getMonth()+1,r=t.getDate(),i=t.getFullYear();return[i,e<10?"0".concat(e):e,r<10?"0".concat(r):r].join("-")},LA=/^a\d{1,2}$/,MA=function(t){var e=Object.keys(t).filter(function(r){return r.match(LA)});return e.length?e.map(function(r){return"".concat(r,"=").concat(encodeURIComponent(t[r]))}):[]},vb=function(t){ka(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.render=function(){return R.createElement("div",{className:"calendly-spinner"},R.createElement("div",{className:"calendly-bounce1"}),R.createElement("div",{className:"calendly-bounce2"}),R.createElement("div",{className:"calendly-bounce3"}))},e}(R.Component),DA={minWidth:"320px",height:"630px"};(function(t){ka(e,t);function e(r){var i=t.call(this,r)||this;return i.state={isLoading:!0},i.onLoad=i.onLoad.bind(i),i}return e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var r=yb({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),i=this.props.LoadingSpinner||vb;return R.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||DA},this.state.isLoading&&R.createElement(i,null),R.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:r}))},e})(R.Component);var IA=function(t){ka(e,t);function e(r){var i=t.call(this,r)||this;return i.state={isLoading:!0},i.onLoad=i.onLoad.bind(i),i}return e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var r=yb({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),i=this.props.LoadingSpinner||vb;return R.createElement(R.Fragment,null,this.state.isLoading&&R.createElement(i,null),R.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:r}))},e}(R.Component),xb=function(t){if(!t.open)return null;if(!t.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return VS.createPortal(R.createElement("div",{className:"calendly-overlay"},R.createElement("div",{onClick:t.onModalClose,className:"calendly-close-overlay"}),R.createElement("div",{className:"calendly-popup"},R.createElement("div",{className:"calendly-popup-content"},R.createElement(IA,ha({},t)))),R.createElement("button",{className:"calendly-popup-close",onClick:t.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),t.rootElement)},zA=function(t){ka(e,t);function e(r){var i=t.call(this,r)||this;return i.state={isOpen:!1},i.onClick=i.onClick.bind(i),i.onClose=i.onClose.bind(i),i}return e.prototype.onClick=function(r){r.preventDefault(),this.setState({isOpen:!0})},e.prototype.onClose=function(r){r.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return R.createElement(R.Fragment,null,R.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),R.createElement(xb,ha({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},e}(R.Component);(function(t){ka(e,t);function e(r){var i=t.call(this,r)||this;return i.state={isOpen:!1},i.onClick=i.onClick.bind(i),i.onClose=i.onClose.bind(i),i}return e.prototype.onClick=function(){this.setState({isOpen:!0})},e.prototype.onClose=function(r){r.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return R.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},R.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&R.createElement("span",null,"powered by Calendly")),R.createElement(xb,ha({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},e})(R.Component);const FA=O.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
  width: 100vw;
  max-width: 100%;
`,NA=O.div`
  text-align: center;
  margin-bottom: 80px;
`,BA=O(ue.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  
  span {
    background: var(--primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.9;
  }
`,VA=O(ue.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`,WA=O.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,UA=O(ue.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,$A=O.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
`,ox=O.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,sx=O.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(30, 30, 30, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);
`,ax=O.div``,lx=O.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--light);
`,HA=O.p`
  font-size: 1rem;
  color: #666;
`,YA=O.a`
  color: var(--primary);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
`,qA=O(ue.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(240, 240, 240, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  
  @media (max-width: 576px) {
    padding: 2rem;
  }
`,du=O.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,fu=O.label`
  font-size: 1rem;
  color: var(--light);
`,Nf=O.input`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #333;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`,GA=O.textarea`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #333;
  font-family: 'Poppins', sans-serif;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`,XA=O(ue.button)`
  padding: 1rem 2rem;
  background: var(--primary);
  color: var(--dark);
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.6s ease;
  }
  
  &:hover:before {
    left: 100%;
  }
`,ux=O(ue.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(112,0,255,0.05) 0%, rgba(112,0,255,0) 70%);
  filter: blur(60px);
  z-index: 0;
`,QA=O(zA)`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,KA=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),[r,i]=R.useState({name:"",email:"",subject:"",message:""}),s=u=>{const{name:c,value:f}=u.target;i(p=>({...p,[c]:f}))},l=u=>{u.preventDefault(),console.log(r),alert("Thanks for your message! We will get back to you soon."),i({name:"",email:"",subject:"",message:""})};return m.jsxs(FA,{id:"contact",ref:t,"data-section-id":"contact",style:{scrollMarginTop:"80px"},children:[m.jsx(ux,{initial:{x:"20%",y:"30%"},animate:{x:["20%","25%","20%"],y:["30%","35%","30%"]},transition:{duration:10,repeat:1/0,repeatType:"reverse"}}),m.jsx(ux,{initial:{x:"70%",y:"60%"},animate:{x:["70%","65%","70%"],y:["60%","65%","60%"]},transition:{duration:12,repeat:1/0,repeatType:"reverse"},style:{background:"radial-gradient(circle, rgba(0,240,255,0.05) 0%, rgba(0,240,255,0) 70%)"}}),m.jsxs(NA,{children:[m.jsx(BA,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8},children:Un.title.split(" ").map((u,c)=>c===Un.title.split(" ").length-1?m.jsx("span",{children:u},c):`${u} `)}),m.jsx(VA,{initial:{opacity:0,y:30},animate:e?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.8,delay:.2},children:Un.subtitle})]}),m.jsxs(WA,{children:[m.jsxs(UA,{initial:{opacity:0,x:-50},animate:e?{opacity:1,x:0}:{opacity:0,x:-50},transition:{duration:.8,delay:.4},children:[m.jsx($A,{children:Un.description}),Un.contactMethods.map((u,c)=>m.jsxs(ox,{children:[m.jsx(sx,{children:u.icon}),m.jsxs(ax,{children:[m.jsx(lx,{children:u.label}),m.jsx(HA,{children:u.link?m.jsx(YA,{href:u.link,children:u.value}):u.value})]})]},c)),m.jsxs(ox,{children:[m.jsx(sx,{children:"📅"}),m.jsxs(ax,{children:[m.jsx(lx,{children:"Want to discuss things in depth?"}),m.jsx(QA,{url:"https://calendly.com/sidneyjbrodsky/15-min-consult",rootElement:document.getElementById("root"),text:"Book a free 15-Minute Consultation",pageSettings:{backgroundColor:"ffffff",hideEventTypeDetails:!1,hideLandingPageDetails:!1,primaryColor:"00a2ff",textColor:"4d5055"}})]})]})]}),m.jsxs(qA,{initial:{opacity:0,x:50},animate:e?{opacity:1,x:0}:{opacity:0,x:50},transition:{duration:.8,delay:.6},onSubmit:l,children:[m.jsxs(du,{children:[m.jsx(fu,{htmlFor:"name",children:Un.formLabels.name}),m.jsx(Nf,{type:"text",id:"name",name:"name",value:r.name,onChange:s,required:!0})]}),m.jsxs(du,{children:[m.jsx(fu,{htmlFor:"email",children:Un.formLabels.email}),m.jsx(Nf,{type:"email",id:"email",name:"email",value:r.email,onChange:s,required:!0})]}),m.jsxs(du,{children:[m.jsx(fu,{htmlFor:"subject",children:Un.formLabels.subject}),m.jsx(Nf,{type:"text",id:"subject",name:"subject",value:r.subject,onChange:s,required:!0})]}),m.jsxs(du,{children:[m.jsx(fu,{htmlFor:"message",children:Un.formLabels.message}),m.jsx(GA,{id:"message",name:"message",value:r.message,onChange:s,required:!0})]}),m.jsx(XA,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95},children:Un.formLabels.button})]})]})]})},ZA=O.div`
  position: relative;
  overflow: hidden;
`,JA=O(ue.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transform-origin: 0%;
  z-index: 1001;
`,e4=()=>{const{scrollYProgress:t}=Oj(),e=R.useRef(null),r=dn();return R.useEffect(()=>{const i=Wu.context(()=>{},e);if(r.hash==="#contact"){const s=document.querySelector('[data-section-id="contact"]');s&&s.scrollIntoView({behavior:"auto"})}return()=>i.revert()},[r]),m.jsxs(ZA,{ref:e,children:[m.jsx(JA,{style:{scaleX:t}}),m.jsx(S3,{}),m.jsx(tO,{}),m.jsx(pO,{}),m.jsx(PO,{}),m.jsx(XO,{}),m.jsx("div",{style:{width:"100%",display:"block"},children:m.jsx(dA,{})}),m.jsx(jA,{}),m.jsx(KA,{})]})},t4=()=>{const t=li();return R.useEffect(()=>{t("/order/package-selection")},[t]),null};var wb="https://js.stripe.com/v3",n4=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;var r4=function(){for(var e=document.querySelectorAll('script[src^="'.concat(wb,'"]')),r=0;r<e.length;r++){var i=e[r];if(n4.test(i.src))return i}return null},cx=function(e){var r="",i=document.createElement("script");i.src="".concat(wb).concat(r);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(i),i},i4=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:r})},Bs=null,pu=null,hu=null,o4=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},s4=function(e,r){return function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))}},a4=function(e){return Bs!==null?Bs:(Bs=new Promise(function(r,i){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe){r(window.Stripe);return}try{var s=r4();if(!(s&&e)){if(!s)s=cx(e);else if(s&&hu!==null&&pu!==null){var l;s.removeEventListener("load",hu),s.removeEventListener("error",pu),(l=s.parentNode)===null||l===void 0||l.removeChild(s),s=cx(e)}}hu=s4(r,i),pu=o4(i),s.addEventListener("load",hu),s.addEventListener("error",pu)}catch(u){i(u);return}}),Bs.catch(function(r){return Bs=null,Promise.reject(r)}))},l4=function(e,r,i){if(e===null)return null;var s=e.apply(void 0,r);return i4(s,i),s},Vs,bb=!1,_b=function(){return Vs||(Vs=a4(null).catch(function(e){return Vs=null,Promise.reject(e)}),Vs)};Promise.resolve().then(function(){return _b()}).catch(function(t){bb||console.warn(t)});var Ca=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];bb=!0;var s=Date.now();return _b().then(function(l){return l4(l,r,s)})},u4=ya();const Ge=zp(u4);function dx(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,i)}return r}function fx(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?dx(Object(r),!0).forEach(function(i){Sb(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):dx(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Su(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Su=function(e){return typeof e}:Su=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Su(t)}function Sb(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function kb(t,e){return c4(t)||d4(t,e)||f4(t,e)||p4()}function c4(t){if(Array.isArray(t))return t}function d4(t,e){var r=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(r!=null){var i=[],s=!0,l=!1,u,c;try{for(r=r.call(t);!(s=(u=r.next()).done)&&(i.push(u.value),!(e&&i.length===e));s=!0);}catch(f){l=!0,c=f}finally{try{!s&&r.return!=null&&r.return()}finally{if(l)throw c}}return i}}function f4(t,e){if(t){if(typeof t=="string")return px(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return px(t,e)}}function px(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function p4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nn=function(e,r,i){var s=!!i,l=Pe.useRef(i);Pe.useEffect(function(){l.current=i},[i]),Pe.useEffect(function(){if(!s||!e)return function(){};var u=function(){l.current&&l.current.apply(l,arguments)};return e.on(r,u),function(){e.off(r,u)}},[s,r,e,l])},Ap=function(e){var r=Pe.useRef(e);return Pe.useEffect(function(){r.current=e},[e]),r.current},$o=function(e){return e!==null&&Su(e)==="object"},h4=function(e){return $o(e)&&typeof e.then=="function"},m4=function(e){return $o(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},hx="[object Object]",g4=function t(e,r){if(!$o(e)||!$o(r))return e===r;var i=Array.isArray(e),s=Array.isArray(r);if(i!==s)return!1;var l=Object.prototype.toString.call(e)===hx,u=Object.prototype.toString.call(r)===hx;if(l!==u)return!1;if(!l&&!i)return e===r;var c=Object.keys(e),f=Object.keys(r);if(c.length!==f.length)return!1;for(var p={},h=0;h<c.length;h+=1)p[c[h]]=!0;for(var y=0;y<f.length;y+=1)p[f[y]]=!0;var x=Object.keys(p);if(x.length!==c.length)return!1;var b=e,_=r,w=function(j){return t(b[j],_[j])};return x.every(w)},Cb=function(e,r,i){return $o(e)?Object.keys(e).reduce(function(s,l){var u=!$o(r)||!g4(e[l],r[l]);return i.includes(l)?(u&&console.warn("Unsupported prop change: options.".concat(l," is not a mutable property.")),s):u?fx(fx({},s||{}),{},Sb({},l,e[l])):s},null):null},Pb="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",mx=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pb;if(e===null||m4(e))return e;throw new Error(r)},y4=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pb;if(h4(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(s){return mx(s,r)})};var i=mx(e,r);return i===null?{tag:"empty"}:{tag:"sync",stripe:i}},v4=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:"react-stripe-js",version:"2.8.1"}),e.registerAppInfo({name:"react-stripe-js",version:"2.8.1",url:"https://stripe.com/docs/stripe-js/react"}))},lc=Pe.createContext(null);lc.displayName="ElementsContext";var Tb=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},Yo=function(e){var r=e.stripe,i=e.options,s=e.children,l=Pe.useMemo(function(){return y4(r)},[r]),u=Pe.useState(function(){return{stripe:l.tag==="sync"?l.stripe:null,elements:l.tag==="sync"?l.stripe.elements(i):null}}),c=kb(u,2),f=c[0],p=c[1];Pe.useEffect(function(){var x=!0,b=function(w){p(function(S){return S.stripe?S:{stripe:w,elements:w.elements(i)}})};return l.tag==="async"&&!f.stripe?l.stripePromise.then(function(_){_&&x&&b(_)}):l.tag==="sync"&&!f.stripe&&b(l.stripe),function(){x=!1}},[l,f,i]);var h=Ap(r);Pe.useEffect(function(){h!==null&&h!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[h,r]);var y=Ap(i);return Pe.useEffect(function(){if(f.elements){var x=Cb(i,y,["clientSecret","fonts"]);x&&f.elements.update(x)}},[i,y,f.elements]),Pe.useEffect(function(){v4(f.stripe)},[f.stripe]),Pe.createElement(lc.Provider,{value:f},s)};Yo.propTypes={stripe:Ge.any,options:Ge.object};var x4=function(e){var r=Pe.useContext(lc);return Tb(r,e)},w4=function(){var e=x4("calls useElements()"),r=e.elements;return r};Ge.func.isRequired;var jb=Pe.createContext(null);jb.displayName="CustomCheckoutSdkContext";var b4=function(e,r){if(!e)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(r," in an <CustomCheckoutProvider> provider."));return e},_4=Pe.createContext(null);_4.displayName="CustomCheckoutContext";Ge.any,Ge.shape({clientSecret:Ge.string.isRequired,elementsOptions:Ge.object}).isRequired;var Rp=function(e){var r=Pe.useContext(jb),i=Pe.useContext(lc);if(r&&i)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return r?b4(r,e):Tb(i,e)},S4=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},dt=function(e,r){var i="".concat(S4(e),"Element"),s=function(f){var p=f.id,h=f.className,y=f.options,x=y===void 0?{}:y,b=f.onBlur,_=f.onFocus,w=f.onReady,S=f.onChange,j=f.onEscape,T=f.onClick,C=f.onLoadError,E=f.onLoaderStart,P=f.onNetworksChange,M=f.onConfirm,D=f.onCancel,F=f.onShippingAddressChange,B=f.onShippingRateChange,Y=Rp("mounts <".concat(i,">")),G="elements"in Y?Y.elements:null,z="customCheckoutSdk"in Y?Y.customCheckoutSdk:null,Z=Pe.useState(null),X=kb(Z,2),ae=X[0],ce=X[1],se=Pe.useRef(null),K=Pe.useRef(null);nn(ae,"blur",b),nn(ae,"focus",_),nn(ae,"escape",j),nn(ae,"click",T),nn(ae,"loaderror",C),nn(ae,"loaderstart",E),nn(ae,"networkschange",P),nn(ae,"confirm",M),nn(ae,"cancel",D),nn(ae,"shippingaddresschange",F),nn(ae,"shippingratechange",B),nn(ae,"change",S);var le;w&&(e==="expressCheckout"?le=w:le=function(){w(ae)}),nn(ae,"ready",le),Pe.useLayoutEffect(function(){if(se.current===null&&K.current!==null&&(G||z)){var L=null;z?L=z.createElement(e,x):G&&(L=G.create(e,x)),se.current=L,ce(L),L&&L.mount(K.current)}},[G,z,x]);var re=Ap(x);return Pe.useEffect(function(){if(se.current){var L=Cb(x,re,["paymentRequest"]);L&&"update"in se.current&&se.current.update(L)}},[x,re]),Pe.useLayoutEffect(function(){return function(){if(se.current&&typeof se.current.destroy=="function")try{se.current.destroy(),se.current=null}catch{}}},[]),Pe.createElement("div",{id:p,className:h,ref:K})},l=function(f){Rp("mounts <".concat(i,">"));var p=f.id,h=f.className;return Pe.createElement("div",{id:p,className:h})},u=r?l:s;return u.propTypes={id:Ge.string,className:Ge.string,onChange:Ge.func,onBlur:Ge.func,onFocus:Ge.func,onReady:Ge.func,onEscape:Ge.func,onClick:Ge.func,onLoadError:Ge.func,onLoaderStart:Ge.func,onNetworksChange:Ge.func,onConfirm:Ge.func,onCancel:Ge.func,onShippingAddressChange:Ge.func,onShippingRateChange:Ge.func,options:Ge.object},u.displayName=i,u.__elementType=e,u},ft=typeof window>"u",k4=Pe.createContext(null);k4.displayName="EmbeddedCheckoutProviderContext";var C4=function(){var e=Rp("calls useStripe()"),r=e.stripe;return r};dt("auBankAccount",ft);var Lp=dt("card",ft);dt("cardNumber",ft);dt("cardExpiry",ft);dt("cardCvc",ft);dt("fpxBank",ft);dt("iban",ft);dt("idealBank",ft);dt("p24Bank",ft);dt("epsBank",ft);dt("payment",ft);dt("expressCheckout",ft);dt("currencySelector",ft);dt("paymentRequestButton",ft);dt("linkAuthentication",ft);dt("address",ft);dt("shippingAddress",ft);dt("paymentMethodMessaging",ft);dt("affirmMessage",ft);dt("afterpayClearpayMessage",ft);O(ue.section)`
  padding: 100px 5% 20px;
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 100px 5%;
  }
`;const Pa=O(ue.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding: 40px;
  }
`;O.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    padding-bottom: 40vh; /* Add space for the fixed summary at the bottom */
  }
`;O.div`
  flex: 1;
`;O.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  background: rgba(248, 249, 250, 0.95);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    position: sticky;
    top: 80px;
    align-self: flex-start;
    height: auto;
    margin-top: 0;
    padding: 0;
    background: transparent;
    box-shadow: none;
  }
`;const Ta=O.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  font-weight: 700;
  background: rgba(0, 204, 255, 0.85);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: rgba(0, 204, 255, 0.7);
    border-radius: 3px;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 30px;

    &:after {
      bottom: -10px;
      width: 80px;
    }
  }
`,Cn=O.div`
  margin-bottom: 25px;
`,Pn=O.label`
  display: block;
  margin-bottom: 8px;
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`,vr=O.input`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid ${t=>t.error?"#e53935":"rgba(0, 0, 0, 0.1)"};
  border-radius: 8px;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: ${t=>t.error?"rgba(229, 57, 53, 0.05)":"rgba(255, 255, 255, 0.8)"};

  &:focus {
    outline: none;
    border-color: ${t=>t.error?"#e53935":"#00ccff"};
    box-shadow: 0 0 0 2px ${t=>t.error?"rgba(229, 57, 53, 0.2)":"rgba(0, 204, 255, 0.2)"};
  }
`;O.textarea`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00ccff;
    box-shadow: 0 0 0 2px rgba(0, 204, 255, 0.2);
  }
`;O.select`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='#333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 15px;

  &:focus {
    outline: none;
    border-color: #00ccff;
    box-shadow: 0 0 0 2px rgba(0, 204, 255, 0.2);
  }
`;const ja=O(ue.button)`
  width: 100%;
  padding: 15px;
  background: rgba(0, 204, 255, 0.85);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 204, 255, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,P4=O.div`
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-top: 5px;
`,T4=O(ue.div)`
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #00ff00;
  text-align: center;
`,j4=O.div`
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #00ccff;
    box-shadow: 0 0 0 2px rgba(0, 204, 255, 0.2);
  }
`,E4=O.div`
  padding: 15px;
  background: rgba(240, 248, 255, 0.8);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin: 20px 0;
  width: 100%;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 25px;
    margin: 30px 0;
  }
`,O4=O.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 204, 255, 0.2);
  
  @media (max-width: 992px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }
`,qn=O.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 992px) {
    margin-bottom: 5px;
    padding-bottom: 5px;
    font-size: 0.9rem;
  }
`,$n=O.span`
  color: #555;
`,Hn=O.span`
  color: #333;
  font-weight: 500;
`,A4=O(qn)`
  margin-top: 15px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding-top: 15px;
  font-weight: 700;
  font-size: 1.2rem;
  color: #0066cc;
  
  @media (max-width: 992px) {
    margin-top: 10px;
    padding-top: 10px;
    font-size: 1.1rem;
  }
`,R4=O.div`
  position: sticky;
  top: 80px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 25px;
  }
`,L4=O.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
`,gx=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;O.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #0066cc;
  font-weight: 600;
`;const M4=O.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: #00cc66;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 204, 102, 0.2);
`,yx=O.div`
  position: relative;
  background: ${t=>t.selected?"rgba(0, 204, 102, 0.1)":"rgba(240, 248, 255, 0.8)"};
  border: 1px solid ${t=>t.selected?"#00cc66":"rgba(0, 0, 0, 0.05)"};
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1 1 300px;
  max-width: calc(50% - 1rem);
  min-width: 300px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  ${t=>t.recommended&&`
    background: ${t.selected?"rgba(0, 204, 102, 0.1)":"rgba(0, 102, 204, 0.05)"};
    border: 1px solid ${t.selected?"#00cc66":"#0066cc"};
  `}

  @media (min-width: 1024px) {
    max-width: calc(33.333% - 1.33rem);
  }
`,vx=O.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${t=>t.selected?"#00cc66":"#0066cc"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
`,xx=O.h5`
  margin: 0;
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
`,D4=O.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #0066cc;
`,wx=O.p`
  margin: 0;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
`,I4=O.div`
  margin: 20px 0;
  padding: 15px;
  background: rgba(240, 248, 255, 0.8);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  overflow-x: hidden;

  @media (min-width: 768px) {
    margin: 40px 0;
    padding: 30px;
  }
`,z4=O.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 204, 255, 0.3);
`,F4=O.ul`
  list-style-type: none;
  padding: 0;
`,N4=O.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,B4=O.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: linear-gradient(90deg, #00ccff, #0066cc);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-weight: bold;
`,V4=O.div`
  flex: 1;
`,W4=O.h4`
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #333;
`,U4=O.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`,Eb=O.div`
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;

	@media (min-width: 768px) {		
		height: 250px;
	}
`,$4=O.div`
  margin: 0 auto 40px;
  display: flex;
  justify-content: center;
  max-width: 1000px;
`,H4=O.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Y4=O(ue.div)`
  background: white;
  border: 2px solid ${t=>t.selected?"#00ccff":"#e0e0e0"};
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,q4=O.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: #00ccff;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 204, 255, 0.2);
`,G4=O.h3`
  width: 100%;
  font-size: 1.2rem;
  color: #333;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0;
	height: 75px;
  }
`,X4=O.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0066cc;
	min-height: 75px;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin: 0;
  }
`,Q4=O.ul`
  list-style-type: none;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    margin: 20px 0;
    gap: 10px;
  }
`,K4=O.li`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  padding-left: 24px;
  position: relative;
  
  &:before {
    content: '✓';
    color: #00ccff;
    position: absolute;
    left: 0;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }
`,Z4=O.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    width: 100%;
    position: relative;
    padding: 0;
		gap: 10px;
  }
`;O.div`
  display: flex;
  align-items: center;
  flex: 1;
  text-align: center;
  z-index: 1;
  position: relative;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 100%;
    height: 2px;
    background: ${t=>t.active?"#00ccff":"#e9ecef"};
    transform: translateY(-50%);
  }
`;O.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${t=>t.active?"#00ccff":"#e9ecef"};
  color: ${t=>t.active?"white":"#888"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
  font-size: 0.9rem;
`;const J4=O.span`
  color: ${t=>t.active?"#333":"#888"};
  font-weight: ${t=>t.active?"600":"normal"};
  font-size: 0.9rem;
  white-space: nowrap;
`,eR=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (min-width: 768px) {
    display: none;
  }
`,tR=O.span`
  color: #333;
  font-weight: 500;
  font-size: 1rem;
`,nR=O.span`
  color: #0066cc;
  font-weight: bold;
  font-size: 0.9rem;
`,Mh=O(ue.button)`
  width: 100%;
  padding: 15px;
  background: transparent;
  border: 1px solid #0066cc;
  color: #0066cc;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before {
    content: '←';
    margin-right: 8px;
    font-size: 1.2rem;
  }
  
  &:hover {
    background: rgba(0, 102, 204, 0.1);
  }

  @media (min-width: 768px) {
    width: 35%;
    margin-right: 15px;
    font-size: 1.1rem;
    margin-top: 20px;
  }
`,Dh=O.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
  }
`,rR=O.span`
  color: #0066cc;
  font-weight: bold;
  font-size: 0.9rem;
`;O(ja)`
  width: auto;
  padding-left: 30px;
  padding-right: 30px;
`;const Ob=O(ja)`
  width: 100%;
  margin-top: 20px;
  font-size: 1rem;
  padding: 12px;
`,iR=O(Ob)`
  background: #ff5e62;
`,bx=O.span`
  display: block;
  font-size: 1.1rem;
  color: #666;
  margin-top: 0.25rem;
`,oR=O.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  gap: 0.5rem;

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    background: white;
    position: relative;
    outline: none;

    &:checked {
      background: white;
      border-color: #ccc;

      &:after {
        content: '';
        position: absolute;
        left: 3px;
        top: 0px;
        width: 4px;
        height: 8px;
        border: solid #000;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }

    &:hover {
      border-color: #999;
    }
  }

  label {
    cursor: pointer;
    font-size: 0.9rem;
    color: #666;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,sR=O.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  h3 {
    margin: 0 0 1.5rem 0;
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
  }
`,aR=O.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Bf=O.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Vf=O.span`
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;O.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;const Wf=O.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
`,Uf=O.label`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
`,$f=O.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  background-color: white;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #00ccff;
    box-shadow: 0 0 0 2px rgba(0, 204, 255, 0.2);
  }
  
  &:hover {
    border-color: #00ccff;
  }
`,lR=O.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: #00ccff;
  color: white;
  text-decoration: none;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.2s ease;
  text-align: center;
  white-space: nowrap;
  
  &:hover {
    background-color: #00b3e6;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 204, 255, 0.3);
  }
`,uR=O.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  background-color: #f9f9f9;
`,cR=O.span`
  color: #666;
  font-size: 0.9rem;
  word-break: break-all;
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
  height: 100%;
`,dR=O.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #f0f8ff;
  border-radius: 0.5rem;
  border: 1px solid #d1e5ff;
`,fR=O.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0066cc;
  margin-bottom: 1rem;
`,_o=O.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,uc=({currentStep:t})=>{const e=r=>{switch(r){case 1:return"Choose Package";case 2:return"Project Details";case 3:return"Add-ons";case 4:return"Payment";default:return""}};return m.jsxs(m.Fragment,{children:[m.jsxs(eR,{children:[m.jsx(tR,{children:e(t)}),m.jsxs(nR,{children:["Step ",t," of 4"]})]}),m.jsxs(Z4,{children:[m.jsx(J4,{children:e(t)}),m.jsxs(rR,{children:["Step ",t," of 4"]})]})]})},Ea=({message:t})=>m.jsx(T4,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.4},children:t}),Oa=({message:t})=>m.jsx(P4,{children:t}),pR=({PRODUCTS:t,selectedProduct:e,handleProductSelect:r,handleSelectPackage:i})=>m.jsx($4,{children:m.jsx(H4,{children:t.map(s=>m.jsxs(Y4,{selected:e===s.id,onClick:()=>{if(r(s.id),s.isContactOnly){if(window.location.href="/#contact",window.location.pathname==="/"){const l=document.querySelector('[data-section-id="contact"]');l&&l.scrollIntoView({behavior:"auto"})}}else i(s.id)},style:s.id==="basic"?{borderColor:"#00ccff"}:{},children:[s.id==="custom"&&m.jsx(q4,{children:"Most Popular"}),m.jsx(G4,{children:s.name}),m.jsx(Eb,{children:s.description}),m.jsx(X4,{children:typeof s.price=="number"?m.jsxs(m.Fragment,{children:["$",s.price," down",s.monthlyPrice&&m.jsxs(bx,{children:["+ $",s.monthlyPrice,"/mo"]})]}):m.jsxs(m.Fragment,{children:[s.price,m.jsx(bx,{children:"Custom pricing"})]})}),m.jsx(Q4,{children:s.features.map((l,u)=>m.jsx(K4,{children:l},u))}),s.isContactOnly?m.jsx(iR,{onClick:l=>{if(l.stopPropagation(),window.location.href="/#contact",window.location.pathname==="/"){const u=document.querySelector('[data-section-id="contact"]');u&&u.scrollIntoView({behavior:"auto"})}},whileHover:{scale:1.03},whileTap:{scale:.98},children:"Contact Us"}):m.jsx(Ob,{onClick:l=>{l.stopPropagation(),i(s.id)},whileHover:{scale:1.03},whileTap:{scale:.98},children:"Select Package"})]},s.id))})}),Ws="https://sb-stripe-server-3de7ea5286b7.herokuapp.com/api/checkout/",Mp={PAYMENT_INTENTS:`${Ws}/payment-intents`,PAYMENT_METHODS:`${Ws}/payment-methods`,CUSTOMERS:`${Ws}/customers`,WEBHOOK:`${Ws}/webhook`,CHECKOUT_SESSION:`${Ws}/checkout-session`};console.log(Mp);const hR={style:{base:{color:"#333",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},Zr=[{id:"basic",name:"Basic Website Package",price:0,monthlyPrice:149,description:"Get started quickly with a professional, mobile-friendly website with absolutely no financial risk. $0 down payment and you only pay after your site is live and you are 100% satisfied! Includes professional content writing, full SEO optimization, and ongoing hosting & maintenance.",features:["No upfront payment required","Pay only after site goes live","Initial website content writing included","Monthly hosting & maintenance included","Mobile-friendly design","Basic SEO optimization","Contact form","Social media integration","Basic analytics","Choose from professional templates","Edit text, images, and icons yourself"]},{id:"growth",name:"Growth Website Package",price:499,monthlyPrice:99,description:"Get a unique, custom-designed website that perfectly matches your brand. Includes custom design, advanced features, ongoing support, initial website content writing, and first month's hosting included in the upfront payment.",features:["Custom design from scratch","No templates used","Initial website content writing included","First month's hosting included in upfront payment","Advanced features and functionality","Custom animations and interactions","Advanced SEO optimization","Custom forms and integrations","Priority support","Monthly hosting & maintenance","Analytics and reporting","Edit text, images, and icons yourself"]},{id:"enterprise",name:"Enterprise Solutions",price:"Contact Us",monthlyPrice:"Contact Us",description:"Fully custom website solutions for complex business needs. Includes custom functionality, advanced integrations, dedicated support, initial website content writing, first month's hosting, and comprehensive business analysis.",isContactOnly:!0,features:["Fully custom solution","Dedicated support","Initial website content writing included","First month's hosting included","Advanced integrations","Custom functionality","Enterprise-grade security","Custom analytics and reporting","Advanced SEO and marketing tools","Priority development queue","24/7 support","Custom training and documentation"]}],Ys=[{id:"seo",name:"Advanced SEO Package",price:299,billingCycle:"",isSubscription:!1,description:"Get your website to rank higher in search results with our comprehensive SEO package. Includes keyword research, meta optimization, content structure, and technical SEO improvements.",category:"marketing",forPackages:["basic","growth"]},{id:"blog",name:"Blog System Setup",price:299,billingCycle:"",isSubscription:!1,description:"Add a professional blog system to your website with categories, tags, search, and an easy-to-use content management system.",category:"content",forPackages:["basic","growth"]},{id:"contact",name:"Advanced Contact System",price:149,billingCycle:"",isSubscription:!1,description:"Enhance your contact system with file uploads, custom fields, spam protection, and email notifications. Perfect for businesses that need more than a basic contact form.",category:"business",forPackages:["basic","growth"]},{id:"gallery",name:"Photo Gallery & Portfolio",price:99,billingCycle:"",isSubscription:!1,description:"Add a beautiful, responsive photo gallery or portfolio section to showcase your work. Includes lightbox, filtering, and lazy loading for optimal performance.",category:"content",forPackages:["basic","growth"]}],Dp=[{id:"content-bundle",name:"Content Creation Bundle",includes:["blog","gallery"],discount:79,description:"Enhance your website with powerful content features. Includes Blog System Setup and Photo Gallery & Portfolio.",forPackages:["basic","growth"]}],mR=Ca("pk_live_51OeN2YKGsQmzBSf3HUATNcQa4gaSDaF0xf5BxcXJUDYSux4AzIF15zvOHlSleBrqtM52SryycEb11107FLTAXuLw00HyswVWF9"),gR=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),r=li(),i=dn(),[s,l]=R.useState(""),[u,c]=R.useState(null),[f]=R.useState(null);R.useEffect(()=>{const _=new URLSearchParams(i.search).get("product");_&&l(_)},[i]);const p=b=>{l(b)},h=b=>{if(l(b),Zr.find(w=>w.id===b).isContactOnly){window.location.href="/contact";return}r(`/order/project-details?product=${b}`),c(null),y()},y=()=>{window.scrollTo({top:0,behavior:"instant"})},x={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return m.jsx(Yo,{stripe:mR,children:m.jsxs(Pa,{ref:t,variants:x,initial:"hidden",animate:e?"visible":"hidden",children:[m.jsx(Ta,{children:At.title}),m.jsx(uc,{currentStep:1}),f&&m.jsx(Ea,{message:At.successMessage}),u&&m.jsx(Oa,{message:u}),m.jsx(pR,{PRODUCTS:Zr,selectedProduct:s,handleProductSelect:p,handleSelectPackage:h})]})})},yR=O(ue.div)`
  color: #e53935;
  font-size: 0.85rem;
  margin-top: 5px;
  padding: 5px 0;
`,Lo=({message:t})=>t?m.jsx(yR,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},transition:{duration:.3},children:t}):null,vR=({selectedProductDetails:t,formData:e,handleInputChange:r,goToPreviousStep:i,goToPaymentStep:s,fieldErrors:l={},setFieldErrors:u,setError:c})=>{const f=()=>{const p={};if(e.businessDescription||(p.businessDescription="Business description is required"),e.targetAudience||(p.targetAudience="Target audience is required"),t.id!=="basic"&&!e.designPreferences&&(p.designPreferences="Design preferences are required"),Object.keys(p).length>0){u(p),c("Please fill in all required fields marked with *");const h=document.getElementById(Object.keys(p)[0]);h&&(h.scrollIntoView({behavior:"smooth",block:"center"}),h.focus());return}u({}),c(null),s()};return m.jsxs("div",{children:[m.jsxs(Cn,{children:[m.jsx(Pn,{children:"Selected Package"}),m.jsxs(Eb,{children:[m.jsxs("strong",{children:[t.name," - $",t.price]}),m.jsx("br",{}),t.description]})]}),m.jsx("h3",{style:{marginTop:"30px",marginBottom:"20px",color:"#333"},children:At.projectDetails.title}),m.jsx("p",{style:{marginBottom:"30px",color:"#666"},children:At.projectDetails.subtitle}),m.jsxs(Cn,{children:[m.jsx(Pn,{htmlFor:"businessDescription",children:At.projectDetails.fields.businessDescription.label}),m.jsx(vr,{as:"textarea",id:"businessDescription",name:"businessDescription",value:e.businessDescription,onChange:r,required:!0,placeholder:At.projectDetails.fields.businessDescription.placeholder,style:{minHeight:"100px"},error:!!l.businessDescription}),m.jsx(Lo,{message:l.businessDescription})]}),m.jsxs(Cn,{children:[m.jsx(Pn,{htmlFor:"targetAudience",children:"Who is your target audience? *"}),m.jsx(vr,{id:"targetAudience",name:"targetAudience",value:e.targetAudience,onChange:r,placeholder:"e.g., Small business owners, young professionals, parents",error:l.targetAudience}),m.jsx(Lo,{message:l.targetAudience})]}),t.id!=="basic"&&m.jsxs(Cn,{children:[m.jsx(Pn,{htmlFor:"designPreferences",children:"Design Preferences *"}),m.jsx(vr,{id:"designPreferences",name:"designPreferences",value:e.designPreferences,onChange:r,placeholder:"e.g., Modern and clean, bold and colorful, minimalist",error:l.designPreferences}),m.jsx(Lo,{message:l.designPreferences})]}),m.jsxs(Cn,{children:[m.jsx(Pn,{htmlFor:"competitorWebsites",children:"Competitor Websites (Optional)"}),m.jsx(vr,{id:"competitorWebsites",name:"competitorWebsites",value:e.competitorWebsites,onChange:r,placeholder:"List any competitor websites you like or dislike"})]}),t.id!=="basic"&&m.jsxs(Cn,{children:[m.jsx(Pn,{htmlFor:"additionalRequirements",children:"Additional Requirements"}),m.jsx(vr,{as:"textarea",id:"additionalRequirements",name:"additionalRequirements",value:e.additionalRequirements,onChange:r,placeholder:"Any other specific features, functionality, or requirements for your website?",style:{minHeight:"100px"}})]}),m.jsxs(Dh,{children:[m.jsx(Mh,{type:"button",onClick:i,children:"Back to Packages"}),m.jsx(ja,{type:"button",onClick:f,whileHover:{scale:1.03},whileTap:{scale:.98},children:"Continue to Add-ons"})]})]})},xR=Ca("pk_live_51OeN2YKGsQmzBSf3HUATNcQa4gaSDaF0xf5BxcXJUDYSux4AzIF15zvOHlSleBrqtM52SryycEb11107FLTAXuLw00HyswVWF9"),wR=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),r=li(),i=dn(),l=new URLSearchParams(i.search).get("product"),[u,c]=R.useState(""),[f,p]=R.useState({name:"",email:"",company:"",phone:"",businessDescription:"",targetAudience:"",designPreferences:"",competitorWebsites:"",additionalRequirements:"",termsAgreement:!1}),[h,y]=R.useState({}),[x,b]=R.useState(null),[_]=R.useState(null);R.useEffect(()=>{l?c(l):r("/order/package-selection")},[l,r]);const w=Zr.find(P=>P.id===u)||Zr[0],S=P=>{const{name:M,type:D,value:F,checked:B}=P.target;h[M]&&y(Y=>({...Y,[M]:null})),p(Y=>({...Y,[M]:D==="checkbox"?B:F}))},j=()=>{r(`/order/package-selection?product=${u}`),b(null),C()},T=()=>{const P={};if(f.businessDescription||(P.businessDescription="Business description is required"),f.targetAudience||(P.targetAudience="Target audience is required"),w.id!=="basic"&&!f.designPreferences&&(P.designPreferences="Design preferences are required"),Object.keys(P).length>0){y(P),b("Please fill in all required fields marked with *");const D=document.getElementById(Object.keys(P)[0]);D&&(D.scrollIntoView({behavior:"smooth",block:"center"}),D.focus());return}y({}),b(null);const M=new URLSearchParams;M.set("product",u),Object.entries(f).forEach(([D,F])=>{F&&M.set(D,F)}),r(`/order/upsells?${M.toString()}`),C()},C=()=>{window.scrollTo({top:0,behavior:"instant"})},E={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return m.jsx(Yo,{stripe:xR,children:m.jsxs(Pa,{ref:t,variants:E,initial:"hidden",animate:e?"visible":"hidden",children:[m.jsx(Ta,{children:At.title}),m.jsx(uc,{currentStep:2}),_&&m.jsx(Ea,{message:At.successMessage}),x&&m.jsx(Oa,{message:x}),m.jsx(vR,{selectedProductDetails:w,formData:f,handleInputChange:S,goToPreviousStep:j,goToPaymentStep:T,fieldErrors:h,setFieldErrors:y,setError:b})]})})},bR=({selectedProduct:t,selectedUpsells:e,toggleUpsell:r,UPSELLS:i,BUNDLES:s,goToPreviousStep:l,goToNextStep:u})=>{const c=s.filter(y=>y.forPackages.includes(t)),f=i.filter(y=>y.forPackages.includes(t)),p=y=>y.includes.every(x=>e.includes(x)),h=y=>{p(y)?y.includes.forEach(x=>{e.includes(x)&&r(x)}):y.includes.forEach(x=>{e.includes(x)||r(x)})};return m.jsxs(R4,{children:[m.jsx(L4,{children:"Enhance Your Website"}),c.length>0&&m.jsx("div",{style:{marginBottom:"2rem"},children:m.jsx(gx,{children:c.map(y=>m.jsxs(yx,{selected:p(y),onClick:()=>h(y),recommended:!0,children:[m.jsxs(M4,{children:["Save $",y.discount]}),m.jsx(xx,{children:y.name}),m.jsx(wx,{children:y.description}),m.jsx(vx,{selected:p(y),children:p(y)?"✓":"+"})]},y.id))})}),m.jsx(gx,{children:f.map(y=>m.jsxs(yx,{selected:e.includes(y.id),onClick:()=>r(y.id),children:[m.jsx(xx,{children:y.name}),m.jsxs(D4,{children:["$",y.price,y.billingCycle]}),m.jsx(wx,{children:y.description}),m.jsx(vx,{selected:e.includes(y.id),children:e.includes(y.id)?"✓":"+"})]},y.id))}),m.jsxs(Dh,{children:[m.jsx(Mh,{type:"button",onClick:l,children:"Back to Project Details"}),m.jsx(ja,{type:"button",onClick:u,whileHover:{scale:1.03},whileTap:{scale:.98},children:"Continue to Payment"})]})]})},_R=Ca("pk_live_51OeN2YKGsQmzBSf3HUATNcQa4gaSDaF0xf5BxcXJUDYSux4AzIF15zvOHlSleBrqtM52SryycEb11107FLTAXuLw00HyswVWF9"),SR=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),r=li(),i=dn(),s=new URLSearchParams(i.search),l=s.get("product"),[u,c]=R.useState(""),[f,p]=R.useState([]),[h,y]=R.useState({name:"",email:"",company:"",phone:"",businessDescription:"",targetAudience:"",designPreferences:"",competitorWebsites:"",additionalRequirements:"",termsAgreement:!1}),[x,b]=R.useState(null),[_]=R.useState(null);R.useEffect(()=>{if(l)c(l);else{r("/order/package-selection");return}const E={};s.forEach((P,M)=>{M!=="product"&&(E[M]=P)}),y(P=>({...P,...E}))},[l,r,s]);const w=E=>{p(P=>P.includes(E)?P.filter(M=>M!==E):[...P,E])},S=()=>{const E=new URLSearchParams;E.set("product",u),Object.entries(h).forEach(([P,M])=>{M&&E.set(P,M)}),r(`/order/project-details?${E.toString()}`),b(null),T()},j=()=>{const E=new URLSearchParams;E.set("product",u),Object.entries(h).forEach(([P,M])=>{M&&E.set(P,M)}),f.length>0&&E.set("upsells",f.join(",")),r(`/order/payment?${E.toString()}`),b(null),T()},T=()=>{window.scrollTo({top:0,behavior:"instant"})},C={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return m.jsx(Yo,{stripe:_R,children:m.jsxs(Pa,{ref:t,variants:C,initial:"hidden",animate:e?"visible":"hidden",children:[m.jsx(Ta,{children:At.title}),m.jsx(uc,{currentStep:3}),_&&m.jsx(Ea,{message:At.successMessage}),x&&m.jsx(Oa,{message:x}),m.jsx(bR,{selectedProduct:u,selectedUpsells:f,toggleUpsell:w,UPSELLS:Ys,BUNDLES:Dp,goToPreviousStep:S,goToNextStep:j})]})})},Ab=({formData:t,handleInputChange:e,loading:r,CARD_ELEMENT_OPTIONS:i,goToPreviousStep:s,fieldErrors:l={}})=>m.jsxs(m.Fragment,{children:[m.jsxs(Cn,{children:[m.jsx(Pn,{htmlFor:"name",children:"Full Name *"}),m.jsx(vr,{id:"name",name:"name",type:"text",value:t.name,onChange:e,required:!0,disabled:r,placeholder:"John Doe",error:!!l.name}),m.jsx(Lo,{message:l.name})]}),m.jsxs(Cn,{children:[m.jsx(Pn,{htmlFor:"email",children:"Email Address *"}),m.jsx(vr,{id:"email",name:"email",type:"email",value:t.email,onChange:e,required:!0,disabled:r,placeholder:"john@example.com",error:!!l.email}),m.jsx(Lo,{message:l.email})]}),m.jsxs(Cn,{children:[m.jsx(Pn,{htmlFor:"company",children:"Company Name"}),m.jsx(vr,{id:"company",name:"company",type:"text",value:t.company,onChange:e,disabled:r,placeholder:"Your Company, Inc."})]}),m.jsxs(Cn,{children:[m.jsx(Pn,{htmlFor:"phone",children:"Phone Number"}),m.jsx(vr,{id:"phone",name:"phone",type:"tel",value:t.phone,onChange:e,disabled:r,placeholder:"(123) 456-7890"})]}),m.jsxs(Cn,{children:[m.jsx(Pn,{children:"Card Details"}),m.jsx(j4,{children:m.jsx(Lp,{options:i})})]}),m.jsxs(Cn,{children:[m.jsxs(oR,{children:[m.jsx("input",{type:"checkbox",id:"termsAgreement",name:"termsAgreement",checked:t.termsAgreement,onChange:e,required:!0}),m.jsxs(Pn,{htmlFor:"termsAgreement",style:{display:"inline",marginLeft:"0.5rem"},children:["I agree to the ",m.jsx("a",{href:"/terms",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--primary)",textDecoration:"underline"},children:"Terms & Conditions"})," *"]})]}),m.jsx(Lo,{message:l.termsAgreement})]}),m.jsxs(Dh,{style:{marginTop:"2rem"},children:[m.jsx(Mh,{type:"button",onClick:s,children:"Back to Add-ons"}),m.jsx(ja,{type:"submit",whileHover:{scale:1.03},whileTap:{scale:.98},disabled:r,children:r?"Processing...":"Complete Order"})]})]}),Rb=({selectedProductDetails:t={},selectedUpsells:e=[],UPSELLS:r=[],calculateTotal:i=()=>0,calculateDiscounts:s=()=>0,calculateMonthlySubscriptions:l=()=>0,calculateQuarterlySubscriptions:u=()=>0,getSelectedBundles:c=()=>[]})=>{const f=t.price||0,p=e.reduce((x,b)=>{const _=r.find(w=>w.id===b);return x+(_?_.price:0)},0),h=s(),y=f+p-h;return m.jsxs(E4,{children:[m.jsx(O4,{children:"Order Summary"}),m.jsxs(qn,{children:[m.jsx($n,{children:"Package:"}),m.jsx(Hn,{children:t.name||"No package selected"})]}),typeof t.price=="number"&&m.jsxs(m.Fragment,{children:[m.jsxs(qn,{children:[m.jsx($n,{children:"Base Price:"}),m.jsxs(Hn,{children:["$",t.price]})]}),t.monthlyPrice&&m.jsxs(qn,{children:[m.jsx($n,{children:"Monthly Payment:"}),m.jsxs(Hn,{children:["$",t.monthlyPrice,"/mo"]})]})]}),e.length>0&&m.jsxs(m.Fragment,{children:[m.jsxs(qn,{children:[m.jsx($n,{children:"Add-ons:"}),m.jsx(Hn,{children:e.map(x=>{const b=r.find(_=>_.id===x);return b?m.jsxs("div",{children:["+ ",b.name,": $",b.price]},b.id):null})})]}),m.jsxs(qn,{children:[m.jsx($n,{children:"Add-ons Total:"}),m.jsxs(Hn,{children:["$",p]})]})]}),h>0&&m.jsxs(qn,{style:{color:"#00cc66"},children:[m.jsx($n,{children:"Bundle Discounts:"}),m.jsxs(Hn,{children:["-$",h]})]}),m.jsxs(A4,{children:[m.jsx($n,{children:"Total:"}),m.jsxs(Hn,{children:["$",y,t.monthlyPrice&&m.jsxs(m.Fragment,{children:[" + $",t.monthlyPrice,"/mo"]})]})]}),m.jsxs(qn,{children:[m.jsx($n,{children:"Monthly Subscriptions:"}),m.jsx(Hn,{children:typeof l()=="string"?l():`${l()}/mo`})]}),u()>0&&m.jsxs(qn,{children:[m.jsx($n,{children:"Quarterly Subscriptions:"}),m.jsxs(Hn,{children:["$",u(),"/quarter"]})]}),c().length>0&&m.jsxs(qn,{style:{marginTop:"15px",fontStyle:"italic",color:"#00cc66"},children:[m.jsx($n,{children:"Bundles Applied:"}),m.jsx(Hn,{children:c().map(x=>x.name).join(", ")})]})]})},kR=({selectedProduct:t})=>{const r=(()=>{switch(t){case"basic":return At.expectations.basic;case"premium":return At.expectations.premium;default:return At.expectations.default}})();return m.jsxs(I4,{children:[m.jsx(z4,{children:At.expectations.title}),m.jsx(F4,{children:r.map((i,s)=>m.jsxs(N4,{children:[m.jsx(B4,{children:s+1}),m.jsxs(V4,{children:[m.jsx(W4,{children:i.title}),m.jsx(U4,{children:i.text})]})]},s))})]})},CR=Ca("pk_live_51OeN2YKGsQmzBSf3HUATNcQa4gaSDaF0xf5BxcXJUDYSux4AzIF15zvOHlSleBrqtM52SryycEb11107FLTAXuLw00HyswVWF9"),PR=({formData:t,handleInputChange:e,loading:r,goToPreviousStep:i,fieldErrors:s,selectedProduct:l,selectedUpsells:u,handleSubmit:c})=>m.jsxs("form",{onSubmit:c,children:[m.jsx(Ab,{formData:t,handleInputChange:e,loading:r,CARD_ELEMENT_OPTIONS:hR,goToPreviousStep:i,fieldErrors:s}),m.jsx(Rb,{selectedProductDetails:Zr.find(f=>f.id===l)||Zr[0],selectedUpsells:u,UPSELLS:Ys,calculateTotal:()=>{const f=(Zr.find(h=>h.id===l)||Zr[0]).price||0,p=u.reduce((h,y)=>{const x=Ys.find(b=>b.id===y);return h+(x?x.price:0)},0);return f+p},calculateDiscounts:()=>{let f=0;return Dp.forEach(p=>{p.includes.every(h=>u.includes(h))&&(f+=p.discount)}),f},calculateMonthlySubscriptions:()=>u.reduce((f,p)=>{const h=Ys.find(y=>y.id===p);return f+(h!=null&&h.isSubscription?h.price:0)},0),calculateQuarterlySubscriptions:()=>u.reduce((f,p)=>{const h=Ys.find(y=>y.id===p);return f+((h==null?void 0:h.billingCycle)==="/quarter"?h.price:0)},0),getSelectedBundles:()=>Dp.filter(f=>f.includes.every(p=>u.includes(p)))}),m.jsx(kR,{selectedProduct:l})]}),TR=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),r=li(),i=dn(),s=new URLSearchParams(i.search),l=s.get("product"),u=s.get("upsells"),[c,f]=R.useState(""),[p,h]=R.useState([]),[y,x]=R.useState({name:"",email:"",company:"",phone:"",businessDescription:"",targetAudience:"",designPreferences:"",competitorWebsites:"",additionalRequirements:"",termsAgreement:!1}),[b,_]=R.useState({}),[w]=R.useState(!1),[S,j]=R.useState(null),[T]=R.useState(null);R.useEffect(()=>{if(l)f(l);else{r("/order/package-selection");return}const D={};s.forEach((F,B)=>{B!=="product"&&B!=="upsells"&&(D[B]=F)}),x(F=>({...F,...D})),u&&h(u.split(","))},[l,r,s,u]);const C=D=>{const{name:F,type:B,value:Y,checked:G}=D.target;b[F]&&_(z=>({...z,[F]:null})),x(z=>({...z,[F]:B==="checkbox"?G:Y}))},E=()=>{const D=new URLSearchParams;D.set("product",c),Object.entries(y).forEach(([F,B])=>{B&&D.set(F,B)}),p.length>0&&D.set("upsells",p.join(",")),r(`/order/upsells?${D.toString()}`),j(null),P()},P=()=>{window.scrollTo({top:0,behavior:"instant"})},M={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return m.jsx(Yo,{stripe:CR,children:m.jsxs(Pa,{ref:t,variants:M,initial:"hidden",animate:e?"visible":"hidden",children:[m.jsx(Ta,{children:At.title}),m.jsx(uc,{currentStep:4}),T&&m.jsx(Ea,{message:At.successMessage}),S&&m.jsx(Oa,{message:S}),m.jsx(PR,{formData:y,handleInputChange:C,loading:w,goToPreviousStep:E,fieldErrors:b,selectedProduct:c,selectedUpsells:p,handleSubmit:D=>{D.preventDefault(),console.log("Form submitted")}})]})})},jR=Ca("pk_live_51OeN2YKGsQmzBSf3HUATNcQa4gaSDaF0xf5BxcXJUDYSux4AzIF15zvOHlSleBrqtM52SryycEb11107FLTAXuLw00HyswVWF9"),ER=[{value:"default",label:"Classic Blue"},{value:"colorful",label:"Teal Accent"},{value:"modernPurple",label:"Modern Purple"},{value:"corporateGreen",label:"Corporate Green"},{value:"sophisticatedNavy",label:"Sophisticated Navy"},{value:"sunsetWarm",label:"Sunset Warm"},{value:"monochrome",label:"Monochrome"},{value:"tropicalVibrant",label:"Tropical Vibrant"}],OR=[{value:"poppins",label:"Poppins"},{value:"spaceGrotesk",label:"Space Grotesk"},{value:"outfit",label:"Outfit"},{value:"plusJakartaSans",label:"Plus Jakarta Sans"},{value:"manrope",label:"Manrope"},{value:"albertSans",label:"Albert Sans"},{value:"inter",label:"Inter"},{value:"rubik",label:"Rubik"},{value:"sourceSansPro",label:"Source Sans 3"},{value:"montserrat",label:"Montserrat"},{value:"nunito",label:"Nunito"},{value:"comfortaa",label:"Comfortaa"},{value:"righteous",label:"Righteous"},{value:"josefinSans",label:"Josefin Sans"},{value:"caveat",label:"Caveat"},{value:"pacifico",label:"Pacifico"},{value:"abrilFatface",label:"Abril Fatface"}],AR=[{value:"standard",label:"Standard"},{value:"centered",label:"Centered"},{value:"split",label:"Split"},{value:"minimal",label:"Minimal"},{value:"overlay",label:"Overlay"}],RR=({formData:t,setFormData:e,setError:r,setSuccess:i,isSubmitting:s,setIsSubmitting:l,selectedFont:u,selectedTheme:c,selectedLayout:f})=>{const p=C4(),h=w4(),y=li(),x=_=>{const{name:w,value:S,type:j,checked:T}=_.target;e(C=>({...C,[w]:j==="checkbox"?T:S}))},b=async _=>{var w;if(_.preventDefault(),!(!p||!h)){if(!t.termsAgreement){r("Please agree to the terms and conditions");return}l(!0),r(null),i(null);try{const S=await fetch(Mp.CUSTOMERS,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,name:t.name,phone:t.phone,metadata:{company:t.company,selectedFont:u,selectedTheme:c,selectedLayout:f,demoUrl:f==null?void 0:f.demoUrl}})});if(!S.ok)throw new Error("Failed to create customer");const T=(await S.json()).id,{error:C,paymentMethod:E}=await p.createPaymentMethod({type:"card",card:h.getElement(Lp),billing_details:{name:t.name,email:t.email,phone:t.phone}});if(C)throw new Error(C.message);const P=await fetch(Mp.PAYMENT_METHODS,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:T,paymentMethodId:E.id})});if(!P.ok){const M=await P.json();throw new Error(((w=M.error)==null?void 0:w.message)||"Failed to attach payment method")}e({name:"",email:"",phone:"",company:"",termsAgreement:!1}),h.getElement(Lp).clear(),i("Payment method successfully added!"),y(`/order/success?customer=${T}&package=template`)}catch(S){r(S.message)}finally{l(!1)}}};return m.jsxs("form",{onSubmit:b,children:[m.jsx(Ab,{formData:t,handleInputChange:x,loading:s,fieldErrors:{}}),m.jsx(Rb,{selectedProductDetails:{name:"Template Website",price:0,description:`Customized template website with ${u} font, ${c} theme, and ${f} layout. No upfront payment required. Monthly subscription of $99 begins only when your final site goes live.`},selectedUpsells:[],calculateTotal:()=>0,calculateDiscounts:()=>0,calculateMonthlySubscriptions:()=>"$99/mo beginning when your final site goes live",calculateQuarterlySubscriptions:()=>"",getSelectedBundles:()=>[]})]})},LR=()=>{const[t,e]=In({triggerOnce:!0,threshold:.1}),r=dn(),i=new URLSearchParams(r.search),s=i.get("font")||"spaceGrotesk",l=i.get("theme")||"modernPurple",u=i.get("layout")||"split",c=i.get("companyname")||"",f=i.get("firstname")||"",p=i.get("lastname")||"",h=i.get("demourl")||"",x=(z=>z?z.startsWith("http://")||z.startsWith("https://")?z:`https://${z}`:"")(h),[b,_]=R.useState(s),[w,S]=R.useState(l),[j,T]=R.useState(u),[C,E]=R.useState({name:`${f} ${p}`.trim(),email:"",phone:"",company:c,termsAgreement:!1}),[P,M]=R.useState(null),[D,F]=R.useState(null),[B,Y]=R.useState(!1),G={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return m.jsx(Yo,{stripe:jR,children:m.jsxs(Pa,{ref:t,variants:G,initial:"hidden",animate:e?"visible":"hidden",children:[m.jsx(Ta,{children:"Template Website Order"}),D&&m.jsx(Ea,{message:"Payment successful! We'll be in touch shortly."}),P&&m.jsx(Oa,{message:P}),m.jsxs(sR,{children:[m.jsx("h3",{children:"Your Template Configuration"}),x&&m.jsxs(uR,{children:[m.jsx(lR,{href:x,target:"_blank",rel:"noopener noreferrer",children:"View Demo Site"}),m.jsx(cR,{children:h})]}),m.jsxs(aR,{children:[m.jsxs(Bf,{children:[m.jsx(Vf,{children:"Font:"}),m.jsxs(Wf,{children:[m.jsx(Uf,{htmlFor:"font-select",children:"Select Font"}),m.jsx($f,{id:"font-select",value:b,onChange:z=>_(z.target.value),children:OR.map(z=>m.jsx("option",{value:z.value,children:z.label},z.value))})]})]}),m.jsxs(Bf,{children:[m.jsx(Vf,{children:"Theme:"}),m.jsxs(Wf,{children:[m.jsx(Uf,{htmlFor:"theme-select",children:"Select Theme"}),m.jsx($f,{id:"theme-select",value:w,onChange:z=>S(z.target.value),children:ER.map(z=>m.jsx("option",{value:z.value,children:z.label},z.value))})]})]}),m.jsxs(Bf,{children:[m.jsx(Vf,{children:"Layout:"}),m.jsxs(Wf,{children:[m.jsx(Uf,{htmlFor:"layout-select",children:"Select Layout"}),m.jsx($f,{id:"layout-select",value:j,onChange:z=>T(z.target.value),children:AR.map(z=>m.jsx("option",{value:z.value,children:z.label},z.value))})]})]})]}),m.jsxs(dR,{children:[m.jsx(fR,{children:"Next Steps"}),m.jsx(_o,{children:"After your order is confirmed, you'll have one opportunity to provide us with updated information to replace in the demo site. This includes:"}),m.jsxs(_o,{children:["• Your company's actual content, images, and branding",m.jsx("br",{}),"• Contact information and business details",m.jsx("br",{}),"• Any specific features or sections you'd like to customize"]}),m.jsxs(_o,{children:[m.jsx("strong",{children:"Additional pages or functionality"})," are available as upsell options that you can add to your package."]}),m.jsx(_o,{children:"Please ensure all your content is complete and final when you submit it, as we will implement exactly what you provide to create your live website."}),m.jsxs(_o,{children:[m.jsx("strong",{children:"Payment Terms:"})," There is no upfront payment required. Your monthly subscription of $99 will only begin once your final website goes live."]}),m.jsxs(_o,{children:[m.jsx("strong",{children:"Card Information:"})," We are only collecting your card information to set up your future monthly payments. Your card will not be charged until your final website goes live. You can cancel or update your payment method at any time before the site launch."]})]})]}),m.jsx(RR,{formData:C,setFormData:E,error:P,setError:M,success:D,setSuccess:F,isSubmitting:B,setIsSubmitting:Y,selectedFont:b,setSelectedFont:_,selectedTheme:w,setSelectedTheme:S,selectedLayout:j,setSelectedLayout:T,demoUrl:x,rawDemoUrl:h})]})})},MR=O(ue.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: var(--secondary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: darken;
  opacity: 0.7;
`,DR=O(ue.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 1px solid var(--secondary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: darken;
  opacity: 0.5;
`,IR=()=>{const[t,e]=R.useState({x:0,y:0}),[r,i]=R.useState("default");R.useEffect(()=>{const u=f=>{e({x:f.clientX,y:f.clientY})};window.addEventListener("mousemove",u);const c=document.querySelectorAll("a, button");return c.forEach(f=>{f.addEventListener("mouseenter",()=>i("hover")),f.addEventListener("mouseleave",()=>i("default"))}),()=>{window.removeEventListener("mousemove",u),c.forEach(f=>{f.removeEventListener("mouseenter",()=>i("hover")),f.removeEventListener("mouseleave",()=>i("default"))})}},[]);const s={default:{x:t.x-5,y:t.y-5,transition:{type:"tween",duration:.05}},hover:{x:t.x-5,y:t.y-5,scale:1.2,transition:{type:"tween",duration:.05}}},l={default:{x:t.x-20,y:t.y-20,transition:{type:"spring",mass:.3,stiffness:200,damping:10}},hover:{x:t.x-20,y:t.y-20,scale:1.2,transition:{type:"spring",mass:.3,stiffness:200,damping:10}}};return window.innerWidth<=768?null:m.jsxs(m.Fragment,{children:[m.jsx(MR,{variants:s,animate:r}),m.jsx(DR,{variants:l,animate:r})]})},Hf=O(ue.div)`
  max-width: 800px;
  margin: 100px auto;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`,zR=O.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
  background-color: #00cc66;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`,Yf=O.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`,_x=O.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #666;
  line-height: 1.6;
`,FR=O.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  text-align: left;
`,xn=O.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`,wn=O.span`
  font-weight: bold;
  color: #555;
`,bn=O.span`
  color: #333;
`,Sx=O(ue.button)`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0055aa;
  }
`,NR=()=>{var p;const[t,e]=R.useState(null),[r,i]=R.useState(!0),[s,l]=R.useState(null),u=dn();if(R.useEffect(()=>{(async()=>{try{const y=new URLSearchParams(u.search),x=y.get("payment_intent"),b=y.get("customer"),_=y.get("package");if(!x&&!b){l("No order information found in URL"),i(!1);return}let w;if(x){const S=await fetch(`https://sb-stripe-server-3de7ea5286b7.herokuapp.com/api/checkout//payment-intents/${x}`);if(!S.ok)throw new Error("Failed to fetch payment details");w=await S.json()}else if(b){const S=await fetch(`https://sb-stripe-server-3de7ea5286b7.herokuapp.com/api/checkout//customers/${b}`);if(!S.ok)throw new Error("Failed to fetch customer details");w=await S.json(),w.package_type=_}e(w),i(!1)}catch(y){console.error("Error fetching order details:",y),l(y.message||"An error occurred while fetching your order details"),i(!1)}})()},[u]),r)return m.jsx(Hf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:m.jsx(Yf,{children:"Loading your order details..."})});if(s)return m.jsxs(Hf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[m.jsx(Yf,{children:"Something went wrong"}),m.jsx(_x,{children:s}),m.jsx(Sx,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/",children:"Return to Home"})]});const c=t.package_type==="basic",f=t.package_type==="template";return m.jsxs(Hf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[m.jsx(zR,{children:m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("polyline",{points:"20 6 9 17 4 12"})})}),m.jsx(Yf,{children:"Thank You for Your Order!"}),m.jsx(_x,{children:c?m.jsx(m.Fragment,{children:"Your order has been successfully placed. No upfront payment is required for the Basic package. Our team will be in touch with you shortly to get started on your project. You will be charged $149/month once your website is completed and goes live."}):f?m.jsx(m.Fragment,{children:"Your template website order has been successfully placed. No upfront payment is required. Our team will be in touch with you shortly to get started on your project. You will be charged $99/month once your final website goes live."}):m.jsx(m.Fragment,{children:"Your payment has been successfully processed. We've sent a confirmation email to your inbox with all the details. Our team will be in touch with you shortly to get started on your project."})}),t&&m.jsxs(FR,{children:[m.jsx("h3",{style:{marginTop:0,marginBottom:"20px"},children:"Order Summary"}),m.jsxs(xn,{children:[m.jsx(wn,{children:"Order ID:"}),m.jsx(bn,{children:t.id})]}),m.jsxs(xn,{children:[m.jsx(wn,{children:"Date:"}),m.jsx(bn,{children:new Date(t.created*1e3).toLocaleDateString()})]}),!c&&!f&&t.amount_total&&m.jsxs(xn,{children:[m.jsx(wn,{children:"Total Amount:"}),m.jsxs(bn,{children:["$",(t.amount_total/100).toFixed(2)," ",(p=t.currency)==null?void 0:p.toUpperCase()]})]}),t.email&&m.jsxs(xn,{children:[m.jsx(wn,{children:"Email:"}),m.jsx(bn,{children:t.email})]}),t.name&&m.jsxs(xn,{children:[m.jsx(wn,{children:"Name:"}),m.jsx(bn,{children:t.name})]}),c&&m.jsxs(m.Fragment,{children:[m.jsxs(xn,{children:[m.jsx(wn,{children:"Package:"}),m.jsx(bn,{children:"Basic Website Package"})]}),m.jsxs(xn,{children:[m.jsx(wn,{children:"Monthly Fee:"}),m.jsx(bn,{children:"$149/month (charged after site goes live)"})]})]}),f&&m.jsxs(m.Fragment,{children:[m.jsxs(xn,{children:[m.jsx(wn,{children:"Package:"}),m.jsx(bn,{children:"Template Website"})]}),m.jsxs(xn,{children:[m.jsx(wn,{children:"Monthly Fee:"}),m.jsx(bn,{children:"$99/month (charged after site goes live)"})]}),t.metadata&&m.jsxs(m.Fragment,{children:[m.jsxs(xn,{children:[m.jsx(wn,{children:"Selected Font:"}),m.jsx(bn,{children:t.metadata.selectedFont})]}),m.jsxs(xn,{children:[m.jsx(wn,{children:"Selected Theme:"}),m.jsx(bn,{children:t.metadata.selectedTheme})]}),m.jsxs(xn,{children:[m.jsx(wn,{children:"Selected Layout:"}),m.jsx(bn,{children:t.metadata.selectedLayout})]})]})]})]}),m.jsx(Sx,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>window.location.href="/",children:"Return to Home"})]})},BR=()=>m.jsxs("section",{children:[m.jsx("h2",{children:"Introduction"}),m.jsx("p",{children:'These Terms and Conditions ("Terms") govern the agreement between Business Filing Solutions LLC, doing business as The Friendly Web Company (referred to as "The Friendly Web Company," "we," or "us"), and you (the "Client" or "you") for the provision of web design, development, hosting, and related services. By purchasing or using any of our web design packages or services, you agree to be bound by these Terms. If you do not agree, you should not use our services. These Terms are intended to provide clarity and protect both parties; please read them carefully.'})]}),VR=()=>m.jsxs("section",{children:[m.jsx("h2",{children:"Services and Packages"}),m.jsx("p",{children:"The Friendly Web Company offers three web design service packages. Each package includes design, development, and ongoing website services as described below:"}),m.jsx("h3",{children:"Basic Website Package"}),m.jsx("p",{children:"$0 down, then $149/month (billed after the website is live and approved by you). This package provides a professionally designed, mobile-friendly website with essential features. Included features:"}),m.jsxs("ul",{children:[m.jsx("li",{children:"Responsive (mobile-friendly) custom design."}),m.jsx("li",{children:"Basic search engine optimization (SEO) setup for improved visibility."}),m.jsx("li",{children:"A contact form for visitor inquiries."}),m.jsx("li",{children:"Google Analytics (or similar) integration for traffic monitoring."}),m.jsx("li",{children:"Content writing for the website's pages (basic copywriting included)."}),m.jsx("li",{children:"Website hosting and ongoing maintenance/support."})]}),m.jsx("h3",{children:"Growth Website Package"}),m.jsx("p",{children:"$499 down (one-time, includes the first month of hosting/service), then $99/month thereafter. This package offers a more advanced, fully custom website with enhanced capabilities and support. Included features:"}),m.jsxs("ul",{children:[m.jsx("li",{children:"Fully custom website design with advanced features and functionality tailored to your needs."}),m.jsx("li",{children:"Priority support service (your requests and issues are addressed with higher priority and faster response times than the Basic package)."}),m.jsx("li",{children:"All standard features of the Basic package (mobile-friendly design, SEO setup, contact form, analytics integration, etc.)."}),m.jsx("li",{children:"Ongoing hosting, maintenance, and updates (first month included in the down payment, then provided continuously with the monthly fee)."})]}),m.jsx("h3",{children:"Enterprise Solutions"}),m.jsx("p",{children:"Custom pricing, determined per project based on complexity and scope. This package is for clients with complex or large-scale needs and includes enterprise-level services. Included features (vary per project):"}),m.jsxs("ul",{children:[m.jsx("li",{children:"Advanced integrations with third-party systems (e.g. CRMs, e-commerce platforms, payment gateways, or other enterprise software)."}),m.jsx("li",{children:"24/7 support with dedicated support channels for critical issues."}),m.jsx("li",{children:"Staff training on website management or content updates as needed."}),m.jsx("li",{children:"Enterprise-grade security measures (enhanced security, compliance with industry standards, advanced backups)."}),m.jsx("li",{children:"Any additional custom features, development, or services as agreed in a separate Enterprise contract or proposal."})]}),m.jsx("p",{children:"Note: Specific details and deliverables for Enterprise Solutions will be defined in a custom proposal or service agreement. In the event of any conflict between these general Terms and an Enterprise custom agreement, the terms of the custom agreement will prevail for that project."})]}),WR=()=>m.jsxs("section",{children:[m.jsx("h2",{children:"Fees and Payment Terms"}),m.jsx("p",{children:"Billing for Packages: You agree to pay the fees associated with the package you select, as described above. Payments shall be made in U.S. Dollars. We will invoice or charge you according to the following schedule for each package:"}),m.jsx("h3",{children:"Basic Website Package"}),m.jsx("p",{children:"No upfront cost. The monthly fee of $149 will begin once your website is completed, approved by you, and made live. The first $149 payment will be due immediately upon the site going live, and thereafter the $149 monthly fee will be due each month on a recurring basis (e.g. on the same day of the month as the launch date, or another regular monthly billing date as communicated)."}),m.jsx("h3",{children:"Growth Website Package"}),m.jsx("p",{children:"A one-time $499 down payment is due upfront (typically at the time of signing the agreement or project kickoff). This down payment covers the initial website setup work and includes your first month of hosting and maintenance service once the site is live. After your website has been live for one month (i.e. starting with the second month of service), a recurring fee of $99 per month will be due. Monthly $99 payments will be billed in advance each month on a regular schedule (for example, if your site launched on the 15th of a month, monthly fees might be billed on the 15th of each subsequent month)."}),m.jsx("h3",{children:"Enterprise Solutions"}),m.jsx("p",{children:"Payment terms for Enterprise projects will be defined on a case-by-case basis in your custom proposal or contract. Typically, Enterprise projects may involve an upfront deposit and milestone or monthly payments as the project progresses or as services are delivered. The schedule and amount of fees, and any included service period, will be clearly laid out in the Enterprise agreement. You agree to pay all fees as specified in that agreement."}),m.jsx("h3",{children:"Payment Method and Due Date"}),m.jsx("p",{children:"Unless otherwise specified, monthly fees will be billed in advance and are due upon receipt of invoice. The Friendly Web Company may require an automated payment method (such as credit card or ACH) to charge recurring fees. If invoices are provided, payment is due by the date indicated on the invoice (generally immediately or within 15 days). It is your responsibility to ensure we have accurate billing information and, if applicable, a valid payment method on file. All fees are exclusive of any taxes or duties unless stated; you are responsible for any applicable taxes (e.g. sales tax or VAT) that may be imposed on the services."}),m.jsx("h3",{children:"Late Payment"}),m.jsx("p",{children:"Timely payment is essential to continued service. If payment is not received by the due date:"}),m.jsxs("ul",{children:[m.jsx("li",{children:"We reserve the right to charge a late fee and/or interest on overdue amounts. A late payment fee of 1.5% of the overdue balance (or the maximum rate permitted by law, if lower) may be applied for each month or partial month the payment is late."}),m.jsx("li",{children:"If any payment is more than 15 days past due, The Friendly Web Company may suspend your website and associated services (which means your website could be temporarily taken offline or inaccessible) until outstanding payments are made. We will notify you (via email or other written notice) before suspension for non-payment."}),m.jsx("li",{children:"If any amount remains unpaid 30 days or more past its due date, we may terminate the service for breach of this agreement (see Termination section below). In such case, the website may be taken down permanently from our servers, and you will be liable for any outstanding fees and any costs of collection (including reasonable attorneys' fees) if it comes to that."})]}),m.jsx("h3",{children:"Payment Disputes"}),m.jsx("p",{children:"If you believe an invoice or charge is incorrect, you must contact us in writing within 15 days of the invoice date to dispute the charge. We will work with you in good faith to resolve any billing issues. Undisputed portions of invoices must still be paid on time."}),m.jsx("h3",{children:"No-Charge Development Period (Basic Package)"}),m.jsx("p",{children:"For the Basic package, you are not charged during the development phase before launch. However, you agree to work in good faith to allow the project to reach completion. If you terminate the project or fail to move forward with a nearly completed website without valid cause (see Cancellation below), we reserve the right to charge you for the labor expended on your project even if the site did not go live. This one-time charge will not exceed $149 (the equivalent of one month's fee) unless substantial additional work was explicitly requested by you beyond the standard Basic package scope."})]}),UR=()=>m.jsxs("section",{children:[m.jsx("h2",{children:"Cancellation and Refund Policy"}),m.jsx("h3",{children:"Cancellation by Client"}),m.jsx("p",{children:`You may cancel your website service with The Friendly Web Company at any time, subject to the conditions below. "Cancellation" means that you choose to discontinue the service and stop future payments. To cancel, you should provide us with a written notice (e.g. via email) requesting cancellation. We request at least 30 days' notice prior to your next billing date when possible so that we can process the cancellation in time. If you cancel:`}),m.jsx("h3",{children:"For Basic or Growth Package"}),m.jsx("p",{children:"If you cancel after your website is live, your cancellation will take effect at the end of the then-current monthly billing period. We do not offer pro-rated refunds for partial months already paid. (For example, if you paid for the month of June and you cancel in the middle of June, service will continue until the end of June, but July will not be billed.) Your website will remain active through the paid-up period. After that, the site will be taken offline."}),m.jsx("p",{children:"If you cancel the Basic Website Package before the website is completed and goes live, since no upfront payment was made, The Friendly Web Company reserves the right to invoice you a reasonable fee for the work already performed. Typically, this fee will not exceed the equivalent of one month's service ($149) for a partially completed Basic site, unless substantial extra work was requested."}),m.jsx("p",{children:"If you cancel the Growth Website Package during development before the site is live, the initial $499 down payment is non-refundable once work has commenced. That fee covers our upfront effort and reserves resources for your project (including your first month of service). If you have concerns during development, please discuss them with us; we are committed to delivering a site that meets your expectations. However, a change of mind alone will not trigger a refund of the setup fee."}),m.jsx("h3",{children:"For Enterprise Solutions"}),m.jsx("p",{children:"Cancellation terms will be governed by your specific contract. Generally, if you wish to terminate an Enterprise project early, you may be responsible for payment for all work completed up to the cancellation date and any applicable cancellation fee as outlined in your agreement. Any advance payments or deposits made are typically non-refundable once work begins, unless otherwise specified in the Enterprise agreement."}),m.jsx("h3",{children:"Refund Policy"}),m.jsx("p",{children:"In general, all payments are final and non-refundable except as explicitly stated in these Terms or required by law. This means:"}),m.jsxs("ul",{children:[m.jsx("li",{children:"The $499 down payment for the Growth package is not refundable once work has started, as noted above."}),m.jsx("li",{children:"Monthly fees (for any package) that have been charged are not refunded if you cancel in the middle of a billing cycle; service will continue through the period you have paid for."})]}),m.jsx("p",{children:"If you believe you are owed a refund due to an error on our part or because a specific guarantee or promise was not met, please contact us to discuss the issue. We may review refund requests on a case-by-case basis at our discretion. Any approved refunds will be processed within a reasonable timeframe to the original payment method."}),m.jsx("h3",{children:"No Early Termination Penalty (Basic/Growth)"}),m.jsx("p",{children:"Aside from the non-refundable fees as described, we do not lock Basic or Growth clients into long-term contracts. After any initial minimum commitment (if stated for a promotional offer, for example) or after your site is live, you are essentially on a month-to-month plan. You can cancel going forward without additional termination penalties, provided you give notice and pay any amounts owed up to the cancellation date. (Enterprise clients may have a fixed term commitment as per their contract.)"}),m.jsx("h3",{children:"Effect of Cancellation"}),m.jsx("p",{children:"Upon cancellation or expiration of service, The Friendly Web Company will remove your website from our servers after the effective cancellation date. It is your responsibility to ensure you have copies of any content or data you need from the website prior to cancellation. We recommend that before ending the service, you request any assets you need (such as text content or images that you provided). We can provide you with your site's textual content and media files upon request in a standard format. However, note that per the Ownership terms below, the website's underlying code and design layout remain our property and will not be provided for use on other servers unless otherwise agreed in writing."})]}),$R=()=>m.jsxs("section",{children:[m.jsx("h2",{children:"Ownership and Intellectual Property Rights"}),m.jsx("h3",{children:"Ownership of Website Code and Design"}),m.jsx("p",{children:"The Friendly Web Company retains ownership of all website code, software, and design elements that we create or use in building your website. This includes, without limitation, the HTML/CSS/JavaScript code, underlying databases, proprietary scripts, templates, and any custom software developed by us. When you subscribe to our services, you are leasing/licensing the website from us, not purchasing the code outright. You are granted a limited, non-exclusive, non-transferable license to use the website we create for you for the duration of our service agreement (as long as you continue to pay for the service). This license allows you to have the website publicly displayed and used for your business needs, but does not give you the right to copy, distribute, or transfer the code to another provider without our permission."}),m.jsx("h3",{children:"Client Content and Materials"}),m.jsx("p",{children:"You retain ownership of all content and materials that you provide to us for use in the website, as well as any logos, trademarks, or branding elements that are your pre-existing intellectual property. Additionally, any original content (text, images, graphics) that The Friendly Web Company creates specifically for your website as part of the Basic or other packages (for example, written copy or custom images created for you) will become your property once the website is live and all amounts due for that content creation or the project have been paid."}),m.jsx("p",{children:"We do not claim ownership of your business data or the substantive content of your site. However, by providing content to us or by approving content we create, you grant The Friendly Web Company a license to use, reproduce, modify, and display that content solely for the purpose of developing your website and providing our services to you (which may include making backup copies and displaying the content on your live site). You also grant us the right to use your content as necessary for any backup, testing, or promotional display as allowed under these Terms (see Portfolio use below)."}),m.jsx("h3",{children:"Third-Party Materials"}),m.jsx("p",{children:"Any third-party content or materials incorporated into your website (such as stock photos, libraries, or plugins) remain the property of their respective owners. Where required, we will obtain appropriate licenses for third-party materials on your behalf (the cost of standard stock images or plugins may either be included in your package or communicated to you – see Third-Party Tools section). Those materials may be subject to their own license terms which allow your website to use them but do not transfer ownership to you. For example, if we use an open-source framework or a paid plugin, you get the right to use it as part of your site, but you do not separately own that code; your rights to it are defined by the third-party's license (and our license to use it on your site)."}),m.jsx("h3",{children:"Website Content Management"}),m.jsx("p",{children:"After your site is live, you may have the ability to add or edit content (such as text or images) through a content management system or by requesting changes through our support. Any new content you add is of course your own, but any modifications to the site's code base still fall under the ownership terms above. We encourage you to make use of the site within the bounds of our service – e.g., updating text via provided tools – but you should not attempt to access or alter the underlying source code not intended for Client access."}),m.jsx("h3",{children:"Use of Website After Service Termination"}),m.jsx("p",{children:"Because The Friendly Web Company retains ownership of the site's code and platform, if your service with us is terminated or canceled, your rights to use the live website and its design cease (after any provided grace period for transition). Unless otherwise agreed, you will not receive a copy of the full website code to host elsewhere. If you wish to take full ownership of the website's code and move it to another host, this would require a separate agreement and likely an additional buyout fee to transfer intellectual property rights. (Such a transfer is not part of our standard packages.) However, you will retain ownership of your underlying content as described, and we can provide that to you for use in a new context if needed."}),m.jsx("h3",{children:"Intellectual Property Warranty"}),m.jsx("p",{children:"The Friendly Web Company represents and warrants that to our knowledge, the code and design materials we create and use in your website (excluding any content provided by you or requested third-party materials) do not knowingly infringe on any third party's intellectual property rights. If you become aware of any claim that the website (or any component created by us) infringes someone else's rights, you agree to notify us promptly and allow us to address the issue. Likewise, you represent that any materials you provide (text, images, logos, etc.) do not infringe others' rights, and if they do, you assume responsibility for any such infringement (see Indemnification below)."}),m.jsx("h3",{children:"Portfolio and Marketing Use"}),m.jsx("p",{children:"We are proud of the work we do for our clients. Unless you specifically request otherwise in writing, you grant The Friendly Web Company permission to reference you as a client and to display your completed website, screenshots of it, and/or your company name and logo in our portfolio, marketing materials, or website. This may include a brief case study or listing among examples of our work. We will not reveal any confidential details (such as analytics data or any sensitive content) in doing so. If you prefer not to be included in such marketing references, please inform us, and we will honor that request."}),m.jsx("p",{children:`Additionally, we may include a discreet footer credit on your website (such as "Website by The Friendly Web Company"), which will typically include a link back to our site. If you wish to remove or hide this credit, please discuss it with us; removal may be subject to a fee on certain low-cost packages (since referrals help us keep costs down), but we'll be reasonable in accommodating your preference.`})]}),HR=()=>m.jsxs("section",{children:[m.jsx("h2",{children:"Client Responsibilities"}),m.jsx("h3",{children:"Providing Content and Input"}),m.jsx("p",{children:"You agree to provide all required materials for the project in a timely manner. This includes, for example, text, images, logos/branding assets, and any specific information about your business, products, or services that you want on the website. If your package includes content writing (as in the Basic package), you still need to supply us with accurate information about your business and any key messages or facts you want included. You will also need to review and approve content drafts. Delays in providing necessary content or feedback can significantly delay the project, so we ask that you respond promptly to our requests."}),m.jsx("h3",{children:"Approvals and Feedback"}),m.jsx("p",{children:"During the design and development process, we will present designs, content, or functionality for your review (for example, design mockups, draft text, or a staging site). You are responsible for reviewing these deliverables and providing feedback or approval in a timely manner. Timely communication (within a few business days when possible) helps keep the project on schedule. You should designate a single point of contact or decision-maker on your side who can consolidate feedback to avoid confusion. Once you give approval at a milestone (e.g., approving the final design or the completed site for launch), any changes requested after approval may be considered out of scope and subject to additional fees."}),m.jsx("h3",{children:"Accuracy of Information"}),m.jsx("p",{children:'You are responsible for the accuracy, completeness, and legality of all materials you provide to us. This includes making sure that all information about your business (e.g., contact details, services, pricing, etc.) is correct and up to date, and that any claims or representations you ask us to make on the site (for example, "#1 in town at XYZ") are truthful and can be substantiated. We do not independently verify the accuracy of client-provided content. If you find any errors in content we wrote or posted, let us know and we will correct them as part of our service.'}),m.jsx("h3",{children:"Rights to Provided Materials"}),m.jsx("p",{children:"You must ensure that you have the necessary rights or licenses to any content you provide us. For example, if you give us photographs, you should either own them or have permission to use them on your website. If you provide text or other media, you should not be violating copyright, trademark, or privacy/publicity rights of others. The Friendly Web Company is not liable for client-provided content. If we are sued or incur costs because content you gave us violates someone else's rights or is unlawful, you will be responsible (see Indemnification). If you're unsure about using a piece of content, please consult legal advice or use content that is properly licensed."}),m.jsx("h3",{children:"Acceptable Use of the Website"}),m.jsx("p",{children:"You agree that once your website is live, you will use it in compliance with all applicable laws and regulations. Prohibited uses of our services include (but are not limited to):"}),m.jsxs("ul",{children:[m.jsx("li",{children:"Using the website to engage in illegal or fraudulent activities."}),m.jsx("li",{children:"Posting or transmitting any content that is unlawful, defamatory, harassing, obscene, or otherwise objectionable (including hate speech or pornography), or that violates any rights of third parties."}),m.jsx("li",{children:"Hosting malware, viruses, or malicious code on your site, or using the site to facilitate phishing, hacking, or spam."}),m.jsx("li",{children:"Violating any third-party service's rules that are integrated into your site (e.g., if your site uses an API or plugin, you must abide by that provider's terms of service)."})]}),m.jsx("p",{children:"You are responsible for the content and data on your website. The Friendly Web Company does not actively monitor all client websites for inappropriate content, but if we become aware of any prohibited content or activities, we may take action including content removal or service suspension. We will typically notify you and request that you rectify the situation, but for severe violations (e.g., hosting illegal content), we reserve the right to suspend or terminate the service immediately (with or without notice as required by law)."}),m.jsx("h3",{children:"Cooperation and Project Timeline"}),m.jsx("p",{children:"You acknowledge that our ability to meet any project timeline or launch date is dependent on your cooperation in fulfilling the responsibilities above. Any timelines we provide are estimates assuming timely client feedback and content provision. Delays on your side (e.g., taking weeks to send needed information or approvals) may result in adjusted timelines or, in some cases, additional charges if the delays cause us significant extra work or scheduling issues. We will do our best to accommodate reasonable delays, but extended inactivity (e.g., no response for over 30 days) may cause the project to be put on hold or even canceled. If a project is put on hold due to client delay, we may require a re-start fee or revised schedule to resume work, especially for Enterprise projects where our team is allocated to your project."}),m.jsx("h3",{children:"Access and Credentials"}),m.jsx("p",{children:"If our work with you requires access to third-party accounts or systems (for example, your domain registrar, existing hosting account, or social media pages), you agree to provide us with the necessary access (e.g., usernames/passwords or invite us as users) and authority to act on your behalf within those accounts for the limited purpose of performing our duties. We will only use such access for the tasks you've authorized and will keep any credentials you provide confidential (see Privacy and Data Protection). It's your responsibility to ensure we are given correct access and to update passwords afterwards if you desire. We strongly encourage you not to share passwords that are used for other purposes, and where possible use temporary passwords or account invites."}),m.jsx("h3",{children:"Compliance and Legal Responsibilities"}),m.jsx("p",{children:"As the owner of your business and website, you are responsible for compliance with any laws relevant to your industry or website content. For instance, if your website involves e-commerce, you are responsible for complying with consumer protection and e-commerce laws (like displaying terms of sale, honoring refund policies, etc.); if you collect personal information from users (e.g., via a contact form or newsletter sign-up), you should have a privacy policy on your site and comply with privacy laws (we can add a privacy policy page if you provide the text or guidance). We can assist with implementing compliance measures (for example, cookie consent banners, age verification, ADA accessibility features, etc.) if they are part of the project scope or added as features, but you need to inform us of such requirements. Ultimately, you should seek legal counsel for any specific legal obligations your website must meet. The Friendly Web Company does not provide legal advice."})]}),YR=()=>m.jsxs("section",{children:[m.jsx("h2",{children:"Use of Third-Party Tools and Plugins"}),m.jsx("p",{children:"Our websites often leverage third-party tools, software, and plugins to provide functionality and features. This section explains how third-party components are used and the associated terms:"}),m.jsx("h3",{children:"Integration of Third-Party Services"}),m.jsx("p",{children:"The Friendly Web Company may integrate or install third-party software or services as part of building and running your website. Examples include content management systems (CMS) or site builders, themes and templates, plugins or extensions for added features (such as contact forms, SEO enhancements, e-commerce modules), analytics services (like Google Analytics), payment gateways, social media widgets, or CRM integrations. We will select and use these third-party tools as appropriate to meet the requirements of your project and package."}),m.jsx("h3",{children:"Licensing and Ownership"}),m.jsx("p",{children:"Any third-party tools remain the intellectual property of their respective vendors or authors. Your use of those tools via your website is subject to whatever license or terms the third-party provider has established (for instance, many plugins are open-source under specific licenses, others are commercial with their own terms). The Friendly Web Company will ensure that we have obtained any necessary licenses on your behalf for the use of these tools on your site. For example, if a premium plugin or software license is required and it's included as part of your package, we will secure that license (usually in our name or a developer capacity) to legally use it on your site. In some cases, certain premium third-party services might require an additional fee (see next point)."}),m.jsx("h3",{children:"Additional Costs"}),m.jsx("p",{children:"Our packages cover the cost of most standard tools needed for your site. However, if your project requires a specific third-party service or integration that has its own fees (for instance, a specialized premium plugin, a subscription to a third-party API service, high-volume transactional email service, etc.), any such cost will either be passed on to you at cost or we'll ask you to purchase it directly. We will always communicate with you first about any third-party services that would incur extra charges, and get your approval, before incurring those costs. There will be no surprise fees for third-party components; transparency is important. (For Enterprise projects, these details will typically be itemized in the proposal.)"}),m.jsx("h3",{children:"Third-Party Terms and Privacy"}),m.jsx("p",{children:"You agree to comply with any relevant user terms of third-party services that are integrated into your site. For example, if we integrate a payment gateway like Stripe or PayPal, you must abide by their terms of service for merchants; if we set up an email marketing signup that uses MailChimp or similar, your use of collected emails must follow their anti-spam policies. We can help point out any major constraints we are aware of. Also note that third-party services may collect certain data (e.g., Google Analytics collects visitor info); such data use is governed by the third-party's privacy policy. We will list major third-party services used on request if you need to know for your own privacy policy."}),m.jsx("h3",{children:"Updates and Maintenance of Third-Party Tools"}),m.jsx("p",{children:"As part of our maintenance service (especially in the Growth and Enterprise packages, and Basic as applicable), we will apply updates to third-party software (like plugin updates or CMS updates) to keep the site secure and functional. However, we depend on those third-party developers to provide updates and maintain compatibility. We are not responsible for errors or security flaws introduced by third-party code, but we will use best efforts to promptly apply fixes or find alternatives if a third-party tool fails. If a particular third-party service or plugin is discontinued or becomes incompatible with your needs (or with updated web standards), The Friendly Web Company will consult with you on a suitable replacement and implement it, which may be covered under your maintenance or may require a one-time update fee depending on the complexity (we'll discuss with you in that case)."}),m.jsx("h3",{children:"Third-Party Downtime or Issues"}),m.jsx("p",{children:"While we strive to provide a seamless experience, certain aspects of your website may rely on external systems (for example, if your site pulls in a feed from a social network, or uses a CDN, or is hosted on a cloud provider). The Friendly Web Company is not liable for downtime or malfunctions that are due to failures of these external services or networks (see Limitation of Liability). That said, as part of our service, if such an issue arises, we will work to the best of our ability to liaise with or adjust for the third-party to restore functionality (for example, if a payment gateway is experiencing issues, we will keep you informed and attempt to implement workarounds as feasible)."}),m.jsx("p",{children:"In summary, third-party tools greatly enhance your website's features, and we manage them for you. We just need you to be aware that they come with their own terms, and certain aspects are outside of our direct control. We will manage licensing and technical integration so you don't have to worry about the details."})]}),qR=()=>m.jsxs("section",{children:[m.jsx("h2",{children:"Hosting, Uptime, and Maintenance"}),m.jsx("h3",{children:"Website Hosting"}),m.jsx("p",{children:"All our packages include website hosting on our servers or our cloud service providers. We either manage our own servers or use reputable third-party hosting infrastructure to host your website. Hosting includes the storage of your website's files and data, serving your website to visitors on the Internet, and associated infrastructure such as databases, load balancers, etc., as needed. You do not need to separately purchase web hosting from another provider (unless specified otherwise for an Enterprise arrangement). Our hosting environment is optimized for the websites we build, and we handle all the technical setup. You will be provided with a domain name or we will help you point your existing domain name to our servers so that your website is accessible under your chosen URL. (Note: Domain name registration itself is not included in these packages by default. We can assist you in registering a domain if you don't have one, but the cost of domain registration will be charged separately at cost and the domain will typically be registered in your name for ownership.)"}),m.jsx("h3",{children:"99.9% Uptime Guarantee"}),m.jsx("p",{children:"We guarantee a 99.9% uptime for our hosted websites. This means we strive to ensure your website is available and operational at least 99.9% of the time each calendar month. 99.9% uptime allows for a very small amount of downtime (approximately 43 minutes per month) for unforeseen issues. We design our hosting environment to be highly reliable; however, no system can be 100% free of interruptions. If we anticipate any scheduled downtime for maintenance (for example, upgrading server hardware or applying critical updates), we will do our best to perform this during off-peak hours and provide you with advance notice. Scheduled maintenance windows or downtime due to factors outside our control (such as major Internet outages, attacks, or force majeure events like natural disasters) are typically excluded from the uptime calculation. In the unlikely event that we do not meet the 99.9% uptime target in a given month, you may contact us to review the downtime. We may, at our discretion, offer a service credit or remedy for significant downtime within our control. However, our liability for downtime is limited as described in Limitation of Liability. Our commitment is to act promptly to restore service and keep you informed."}),m.jsx("h3",{children:"Performance and Monitoring"}),m.jsx("p",{children:"We continuously monitor the performance and uptime of our servers. If your website experiences any outage or performance degradation, our technical team is alerted and will work to resolve the issue as quickly as possible. Our goal is to minimize any impact on your website's availability. Enterprise clients may have additional performance monitoring or dedicated resources as part of their package; if applicable, those will be detailed in the Enterprise agreement."}),m.jsx("h3",{children:"Maintenance and Updates"}),m.jsx("p",{children:"Ongoing maintenance is included in all packages (as part of the monthly fee). Maintenance covers routine updates to the website's software (such as applying security patches, updating the content management system and plugins to their latest versions to keep the site secure and stable), regular backups of your website data, and general oversight to ensure the site continues running smoothly. We will also fix any bugs or errors that arise in the website's functionality as part of this service. Bug fixes are included at no extra charge – if something on the site that used to work suddenly stops working or was not implemented correctly to begin with, we consider it our responsibility to correct it. This includes issues like broken links, forms not submitting properly, layout problems on supported browsers, etc., provided these issues are not caused by unauthorized changes or interference by the Client or a third party."}),m.jsx("h3",{children:"Support and Requests"}),m.jsx("h4",{children:"Basic Package Support"}),m.jsx("p",{children:"Basic package clients receive standard support during our business hours (which are typically [provide general hours, e.g., Monday–Friday, 9am–5pm EST, excluding holidays] – actual support hours will be communicated to you). You can reach us via email or our support ticket system for any issues or questions regarding your website. We aim to respond to Basic support requests within one business day and to resolve issues as soon as practicable, generally within a few days depending on complexity. Basic support covers troubleshooting errors, guidance on using your site (like how to update a page if applicable), and minor content changes."}),m.jsx("h4",{children:"Growth Package Priority Support"}),m.jsx("p",{children:"Growth clients receive priority support. This means your support requests jump to the front of the queue. We strive to respond to Growth support inquiries within a faster window (for example, within a few hours during business hours) and address urgent issues with higher priority. You may also have access to phone support or a designated account manager for critical issues if needed. Essentially, you get faster turnaround on support and maintenance tasks. Minor updates or content changes you request will be handled promptly as part of your service (within reasonable limits)."}),m.jsx("h4",{children:"Enterprise 24/7 Support"}),m.jsx("p",{children:"Enterprise clients have access to support 24 hours a day, 7 days a week for critical issues. We will provide you with an emergency contact method (such as a special email or phone line) to report urgent problems outside normal hours. Enterprise support means we have staff on-call to respond to site outages or severe malfunctions at any time, with defined response times (which may be stated in your custom SLA). Non-critical support requests for Enterprise clients (like minor content updates or questions) will be handled with top priority during normal hours, and often we can accommodate requests quickly due to the dedicated nature of Enterprise service. Enterprise package may also include regular review meetings, advanced analytics reporting, or other concierge-level services as specified in your plan."}),m.jsx("h3",{children:"Bug Fixes and Improvements"}),m.jsx("p",{children:`As noted, any bugs in the website that surface will be fixed by us as part of the maintenance. A "bug" means a functionality that was supposed to work as per the agreed scope but does not, or any error that occurs on the site (e.g., broken script, styling issues on supported browsers/devices, features not working as intended). These will be corrected as soon as possible at no additional cost to you. If you identify a bug, please report it to us and we will prioritize fixing it. On the other hand, new features or enhancements that were not in the original project scope are not covered as free bug fixes. For example, if after launch you decide you want an additional section on the site or a new feature that wasn't initially agreed upon, we're happy to implement it, but it may be billable either as a one-time development fee or as an upgrade to a higher package if appropriate. We will always discuss and get your approval before billing for any such enhancements. Many small tweaks or content changes are usually done free as part of our customer service, but larger requests may require a formal quote.`}),m.jsx("h3",{children:"Security"}),m.jsx("p",{children:"We take security seriously for all hosted sites. We implement security best practices such as using secure server configurations, SSL certificates (your site will be served over HTTPS with a valid SSL certificate, which we provide as part of hosting), and keeping software up-to-date. For Enterprise clients, we can also accommodate additional security requirements, like specific firewall rules, intrusion detection systems, compliance with standards (e.g., PCI DSS if e-commerce, HIPAA if healthcare-related, etc.) as part of the custom scope. While we do our best to protect your site, no hosting environment can be completely immune to threats. You also play a role in security – for instance, by using strong passwords for any user accounts and keeping any credentials we provide to you safe. If a security incident occurs (like a hack or malware infection), we will respond immediately to investigate and fix it. Cleanup and restoration from attacks is included in our maintenance (unless the breach was caused by gross negligence on your part, such as you sharing passwords publicly – but even then, we'll help fix it, though we may advise on additional costs if it's a repeated issue not at our fault)."}),m.jsx("h3",{children:"Data Backups"}),m.jsx("p",{children:"The Friendly Web Company performs regular backups of your website's data (files and database) to mitigate data loss risk. Typically, backups are done daily or weekly (depending on the package and nature of site) and retained for a certain period (e.g., the last 7 daily backups and 3 weekly backups, etc.). In case of accidental data loss or corruption, we can restore your site from the last good backup. However, any content changes made between the last backup and the time of loss may need to be re-entered. We are not liable for data loss beyond our control, but we commit to using backups to restore service promptly when needed. If you have critical data (for example, user-submitted information via forms), we can also set up additional data retention measures if required (like emailing form submissions to you for an extra copy)."}),m.jsx("p",{children:"In summary, our hosting and maintenance service is designed to give you peace of mind: we keep your site running, secure, and updated, so you can focus on your business. Our uptime guarantee and support commitments ensure a high level of service reliability and responsiveness."})]}),GR=O.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--text);
`,XR=O(ue.div)`
  text-align: center;
  margin-bottom: 3rem;
`,QR=O.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary) 30%, var(--secondary) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,KR=O.p`
  font-size: 1rem;
  color: var(--text-light);
`,ZR=O(ue.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  line-height: 1.6;
  
  h2 {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }
  
  h3 {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
    color: var(--secondary);
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`,JR=()=>m.jsxs(GR,{children:[m.jsxs(XR,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:[m.jsx(QR,{children:"Terms and Conditions"}),m.jsx(KR,{children:"Last Updated: April 3, 2025"})]}),m.jsxs(ZR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[m.jsx(BR,{}),m.jsx(VR,{}),m.jsx(WR,{}),m.jsx(UR,{}),m.jsx($R,{}),m.jsx(HR,{}),m.jsx(YR,{}),m.jsx(qR,{}),m.jsx("h2",{children:"Thank You"}),m.jsx("p",{children:"Thank you for choosing The Friendly Web Company for your web design and hosting needs. We look forward to a successful partnership. If you have any questions or need clarifications regarding these Terms and Conditions, please contact us before agreeing. We are always happy to discuss and explain any part of this agreement to ensure it meets the needs of both parties. By proceeding with our services, you acknowledge that you have read, understood, and agree to these Terms and Conditions. Here's to building something great together!"})]})]});var kx={},eL="@vercel/analytics",tL="1.5.0",nL=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function Lb(){return typeof window<"u"}function Mb(){try{const t="production"}catch{}return"production"}function rL(t="auto"){if(t==="auto"){window.vam=Mb();return}window.vam=t}function iL(){return(Lb()?window.vam:Mb())||"production"}function Ip(){return iL()==="development"}function oL(t){return t.scriptSrc?t.scriptSrc:Ip()?"https://va.vercel-scripts.com/v1/script.debug.js":t.basePath?`${t.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function sL(t={debug:!0}){var e;if(!Lb())return;rL(t.mode),nL(),t.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",t.beforeSend));const r=oL(t);if(document.head.querySelector(`script[src*="${r}"]`))return;const i=document.createElement("script");i.src=r,i.defer=!0,i.dataset.sdkn=eL+(t.framework?`/${t.framework}`:""),i.dataset.sdkv=tL,t.disableAutoTrack&&(i.dataset.disableAutoTrack="1"),t.endpoint?i.dataset.endpoint=t.endpoint:t.basePath&&(i.dataset.endpoint=`${t.basePath}/insights`),t.dsn&&(i.dataset.dsn=t.dsn),i.onerror=()=>{const s=Ip()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${s}`)},Ip()&&t.debug===!1&&(i.dataset.debug="false"),document.head.appendChild(i)}function aL({route:t,path:e}){var r;(r=window.va)==null||r.call(window,"pageview",{route:t,path:e})}function lL(){if(!(typeof process>"u"||typeof kx>"u"))return kx.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function uL(t){return R.useEffect(()=>{var e;t.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",t.beforeSend))},[t.beforeSend]),R.useEffect(()=>{sL({framework:t.framework||"react",basePath:t.basePath??lL(),...t.route!==void 0&&{disableAutoTrack:!0},...t})},[]),R.useEffect(()=>{t.route&&t.path&&aL({route:t.route,path:t.path})},[t.route,t.path]),null}const cL=O.div`
  position: relative;
  min-height: 100vh;
`;function dL(){return m.jsxs(m.Fragment,{children:[m.jsx(Nk,{children:m.jsxs(cL,{children:[m.jsx(IR,{}),m.jsx(qj,{}),m.jsxs(Rk,{children:[m.jsx(Yn,{path:"/",element:m.jsx(e4,{})}),m.jsx(Yn,{path:"/order",element:m.jsx(t4,{})}),m.jsx(Yn,{path:"/order/package-selection",element:m.jsx(gR,{})}),m.jsx(Yn,{path:"/order/project-details",element:m.jsx(wR,{})}),m.jsx(Yn,{path:"/order/upsells",element:m.jsx(SR,{})}),m.jsx(Yn,{path:"/order/payment",element:m.jsx(TR,{})}),m.jsx(Yn,{path:"/order/template",element:m.jsx(LR,{})}),m.jsx(Yn,{path:"/order/success",element:m.jsx(NR,{})}),m.jsx(Yn,{path:"/terms",element:m.jsx(JR,{})})]}),m.jsx(Zj,{})]})}),m.jsx(uL,{})]})}BS.createRoot(document.getElementById("root")).render(m.jsx(R.StrictMode,{children:m.jsx(dL,{})}));
