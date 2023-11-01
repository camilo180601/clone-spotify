import{r as v,g as j}from"./index.9da4b1b7.js";var R={exports:{}},y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=v,I=Symbol.for("react.element"),T=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,F=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function b(t,e,r){var n,o={},u=null,s=null;r!==void 0&&(u=""+r),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)A.call(e,n)&&!V.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:I,type:t,key:u,ref:s,props:o,_owner:F.current}}y.Fragment=T;y.jsx=b;y.jsxs=b;R.exports=y;var ie=R.exports;const _=t=>{let e;const r=new Set,n=(i,p)=>{const c=typeof i=="function"?i(e):i;if(!Object.is(c,e)){const f=e;e=p??typeof c!="object"?c:Object.assign({},e,c),r.forEach(E=>E(e,f))}},o=()=>e,a={setState:n,getState:o,subscribe:i=>(r.add(i),()=>r.delete(i)),destroy:()=>{r.clear()}};return e=t(n,o,a),a},q=t=>t?_(t):_;var w={exports:{}},D={},O={exports:{}},P={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=v;function W(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var k=typeof Object.is=="function"?Object.is:W,C=S.useState,L=S.useEffect,M=S.useLayoutEffect,U=S.useDebugValue;function B(t,e){var r=e(),n=C({inst:{value:r,getSnapshot:e}}),o=n[0].inst,u=n[1];return M(function(){o.value=r,o.getSnapshot=e,x(o)&&u({inst:o})},[t,r,e]),L(function(){return x(o)&&u({inst:o}),t(function(){x(o)&&u({inst:o})})},[t]),U(r),r}function x(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!k(t,r)}catch{return!0}}function z(t,e){return e()}var N=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?z:B;P.useSyncExternalStore=S.useSyncExternalStore!==void 0?S.useSyncExternalStore:N;O.exports=P;var X=O.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=v,J=X;function Y(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var G=typeof Object.is=="function"?Object.is:Y,H=J.useSyncExternalStore,K=m.useRef,Q=m.useEffect,Z=m.useMemo,ee=m.useDebugValue;D.useSyncExternalStoreWithSelector=function(t,e,r,n,o){var u=K(null);if(u.current===null){var s={hasValue:!1,value:null};u.current=s}else s=u.current;u=Z(function(){function i(l){if(!p){if(p=!0,c=l,l=n(l),o!==void 0&&s.hasValue){var d=s.value;if(o(d,l))return f=d}return f=l}if(d=f,G(c,l))return d;var h=n(l);return o!==void 0&&o(d,h)?d:(c=l,f=h)}var p=!1,c,f,E=r===void 0?null:r;return[function(){return i(e())},E===null?void 0:function(){return i(E())}]},[e,r,n,o]);var a=H(t,u[0],u[1]);return Q(function(){s.hasValue=!0,s.value=a},[a]),ee(a),a};w.exports=D;var te=w.exports;const ne=j(te),{useSyncExternalStoreWithSelector:re}=ne;function oe(t,e=t.getState,r){const n=re(t.subscribe,t.getState,t.getServerState||t.getState,e,r);return v.useDebugValue(n),n}const g=t=>{const e=typeof t=="function"?q(t):t,r=(n,o)=>oe(e,n,o);return Object.assign(r,e),r},ue=t=>t?g(t):g,ce=ue(t=>({isPlaying:!1,currentMusic:{playlist:null,song:null,songs:[]},volume:1,setVolume:e=>t({volume:e}),setIsPlaying:e=>t({isPlaying:e}),setCurrentMusic:e=>t({currentMusic:e})}));export{ie as j,ce as u};
