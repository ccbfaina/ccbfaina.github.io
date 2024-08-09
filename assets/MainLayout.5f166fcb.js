import{c as U,i as Ie,e as T,l as Re,p as vt,a as v,h as I,b as It,g as K,d as _t,w as _e,f as In,o as J,j as Ee,n as Et,k as Se,m as _n,q as En,r as D,s as St,t as We,u as ce,v as Q,x as Sn,y as Tn,z as Tt,A as X,B as At,C as Ct,D as Dt,Q as kt,N as le,_ as An,E as Cn,F as Y,G as Dn,H as F,I as kn,J as On,K as Rn}from"./index.f6479a9a.js";var Mn=U({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=K(),i=Ie(Re,T);if(i===T)return console.error("QPage needs to be a deep child of QLayout"),T;if(Ie(vt,T)===T)return console.error("QPage needs to be child of QPageContainer"),T;const o=v(()=>{const s=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const c=i.isContainer.value===!0?i.containerHeight.value:n.screen.height;return e.styleFn(s,c)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-s+"px":n.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":n.screen.height-s+"px"}}),a=v(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>I("main",{class:a.value,style:o.value},It(t.default))}}),Nn=U({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=K(),i=Ie(Re,T);if(i===T)return console.error("QPageContainer needs to be child of QLayout"),T;_t(vt,!0);const r=v(()=>{const o={};return i.header.space===!0&&(o.paddingTop=`${i.header.size}px`),i.right.space===!0&&(o[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(o.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(o[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),o});return()=>I("div",{class:"q-page-container",style:r.value},It(t.default))}});const{passive:qe}=Se,$n=["both","horizontal","vertical"];var Pn=U({name:"QScrollObserver",props:{axis:{type:String,validator:e=>$n.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,r,o;_e(()=>e.scrollTarget,()=>{c(),s()});function a(){i!==null&&i();const p=Math.max(0,_n(r)),g=En(r),f={top:p-n.position.top,left:g-n.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const x=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:p,left:g},n.directionChanged=n.direction!==x,n.delta=f,n.directionChanged===!0&&(n.direction=x,n.inflectionPoint=n.position),t("scroll",{...n})}function s(){r=In(o,e.scrollTarget),r.addEventListener("scroll",l,qe),l(!0)}function c(){r!==void 0&&(r.removeEventListener("scroll",l,qe),r=void 0)}function l(p){if(p===!0||e.debounce===0||e.debounce==="0")a();else if(i===null){const[g,f]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];i=()=>{f(g),i=null}}}const{proxy:u}=K();return _e(()=>u.$q.lang.rtl,a),J(()=>{o=u.$el.parentNode,s()}),Ee(()=>{i!==null&&i(),c()}),Object.assign(u,{trigger:l,getPosition:()=>n}),Et}});function Bn(){const e=D(!St.value);return e.value===!1&&J(()=>{e.value=!0}),e}const Ot=typeof ResizeObserver!="undefined",Ge=Ot===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Qe=U({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n=null,i,r={width:-1,height:-1};function o(c){c===!0||e.debounce===0||e.debounce==="0"?a():n===null&&(n=setTimeout(a,e.debounce))}function a(){if(n!==null&&(clearTimeout(n),n=null),i){const{offsetWidth:c,offsetHeight:l}=i;(c!==r.width||l!==r.height)&&(r={width:c,height:l},t("resize",r))}}const{proxy:s}=K();if(s.trigger=o,Ot===!0){let c;const l=u=>{i=s.$el.parentNode,i?(c=new ResizeObserver(o),c.observe(i),a()):u!==!0&&We(()=>{l(!0)})};return J(()=>{l()}),Ee(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():i&&c.unobserve(i))}),Et}else{let u=function(){n!==null&&(clearTimeout(n),n=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",o,Se.passive),l=void 0)},p=function(){u(),i&&i.contentDocument&&(l=i.contentDocument.defaultView,l.addEventListener("resize",o,Se.passive),a())};const c=Bn();let l;return J(()=>{We(()=>{i=s.$el,i&&p()})}),Ee(u),()=>{if(c.value===!0)return I("object",{style:Ge.style,tabindex:-1,type:"text/html",data:Ge.url,"aria-hidden":"true",onLoad:p})}}}}),xn=U({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:i}}=K(),r=D(null),o=D(i.screen.height),a=D(e.container===!0?0:i.screen.width),s=D({position:0,direction:"down",inflectionPoint:0}),c=D(0),l=D(St.value===!0?0:ce()),u=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),g=v(()=>l.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),f=v(()=>l.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function x(d){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};s.value=m,e.onScroll!==void 0&&n("scroll",m)}}function wn(d){const{height:m,width:O}=d;let L=!1;o.value!==m&&(L=!0,o.value=m,e.onScrollHeight!==void 0&&n("scrollHeight",m),Ve()),a.value!==O&&(L=!0,a.value=O),L===!0&&e.onResize!==void 0&&n("resize",d)}function vn({height:d}){c.value!==d&&(c.value=d,Ve())}function Ve(){if(e.container===!0){const d=o.value>c.value?ce():0;l.value!==d&&(l.value=d)}}let G=null;const Ue={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:r,height:o,containerHeight:c,scrollbarWidth:l,totalWidth:v(()=>a.value+l.value),rows:v(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:s,animate(){G!==null?clearTimeout(G):document.body.classList.add("q-body--layout-animate"),G=setTimeout(()=>{G=null,document.body.classList.remove("q-body--layout-animate")},155)},update(d,m,O){Ue[d][m]=O}};if(_t(Re,Ue),ce()>0){let O=function(){d=null,m.classList.remove("hide-scrollbar")},L=function(){if(d===null){if(m.scrollHeight>i.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(O,300)},se=function(Ke){d!==null&&Ke==="remove"&&(clearTimeout(d),O()),window[`${Ke}EventListener`]("resize",L)},d=null;const m=document.body;_e(()=>e.container!==!0?"add":"remove",se),e.container!==!0&&se("add"),Sn(()=>{se("remove")})}return()=>{const d=Tn(t.default,[I(Pn,{onScroll:x}),I(Qe,{onResize:wn})]),m=I("div",{class:u.value,style:p.value,ref:e.container===!0?void 0:r,tabindex:-1},d);return e.container===!0?I("div",{class:"q-layout-container overflow-hidden",ref:r},[I(Qe,{onResize:vn}),I("div",{class:"absolute-full",style:g.value},[I("div",{class:"scroll",style:f.value},[m])])]):m}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Ln=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=e[n++],a=e[n++],s=e[n++],c=((r&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Mt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const o=e[r],a=r+1<e.length,s=a?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=o>>2,p=(o&3)<<4|s>>4;let g=(s&15)<<2|l>>6,f=l&63;c||(f=64,a||(g=64)),i.push(n[u],n[p],n[g],n[f])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Rt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ln(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const o=n[e.charAt(r++)],s=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const p=r<e.length?n[e.charAt(r)]:64;if(++r,o==null||s==null||l==null||p==null)throw new Fn;const g=o<<2|s>>4;if(i.push(g),l!==64){const f=s<<4&240|l>>2;if(i.push(f),p!==64){const x=l<<6&192|p;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Fn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jn=function(e){const t=Rt(e);return Mt.encodeByteArray(t,!0)},Nt=function(e){return jn(e).replace(/\./g,"")},Hn=function(e){try{return Mt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=()=>zn().__FIREBASE_DEFAULTS__,Un=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Kn=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hn(e[1]);return t&&JSON.parse(t)},Wn=()=>{try{return Vn()||Un()||Kn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$t=()=>{var e;return(e=Wn())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}function Gn(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Me(){try{return typeof indexedDB=="object"}catch{return!1}}function Ne(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;t(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Pt(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="FirebaseError";class B extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Qn,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,W.prototype.create)}}class W{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,o=this.errors[t],a=o?Yn(o,i):"Error",s=`${this.serviceName}: ${a} (${r}).`;return new B(r,s,i)}}function Yn(e,t){return e.replace(Jn,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const Jn=/\{\$([^}]+)}/g;function Z(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const o=e[r],a=t[r];if(Ye(o)&&Ye(a)){if(!Z(o,a))return!1}else if(o!==a)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Ye(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=1e3,Zn=2,ei=4*60*60*1e3,ti=.5;function Je(e,t=Xn,n=Zn){const i=t*Math.pow(n,e),r=Math.round(ti*i*(Math.random()-.5)*2);return Math.min(ei,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return e&&e._delegate?e._delegate:e}class E{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new qn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ri(t))try{this.getOrInitializeService({instanceIdentifier:R})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(t=R){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=R){return this.instances.has(t)}getOptions(t=R){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);i===s&&a.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&t(a,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ii(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=R){return this.component?this.component.multipleInstances?t:R:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ii(e){return e===R?void 0:e}function ri(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ni(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const ai={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},si=h.INFO,ci={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},li=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=ci[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bt{constructor(t){this.name=t,this._logLevel=si,this._logHandler=li,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ai[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const ui=(e,t)=>t.some(n=>e instanceof n);let Xe,Ze;function di(){return Xe||(Xe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fi(){return Ze||(Ze=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xt=new WeakMap,Te=new WeakMap,Lt=new WeakMap,ue=new WeakMap,$e=new WeakMap;function hi(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(A(e.result)),r()},a=()=>{i(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&xt.set(n,e)}).catch(()=>{}),$e.set(t,e),t}function pi(e){if(Te.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Te.set(e,t)}let Ae={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Te.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Lt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return A(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gi(e){Ae=e(Ae)}function mi(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(de(this),t,...n);return Lt.set(i,t.sort?t.sort():[t]),A(i)}:fi().includes(e)?function(...t){return e.apply(de(this),t),A(xt.get(this))}:function(...t){return A(e.apply(de(this),t))}}function bi(e){return typeof e=="function"?mi(e):(e instanceof IDBTransaction&&pi(e),ui(e,di())?new Proxy(e,Ae):e)}function A(e){if(e instanceof IDBRequest)return hi(e);if(ue.has(e))return ue.get(e);const t=bi(e);return t!==e&&(ue.set(e,t),$e.set(t,e)),t}const de=e=>$e.get(e);function re(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),s=A(a);return i&&a.addEventListener("upgradeneeded",c=>{i(A(a.result),c.oldVersion,c.newVersion,A(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{o&&c.addEventListener("close",()=>o()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),s}function fe(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),A(n).then(()=>{})}const yi=["get","getKey","getAll","getAllKeys","count"],wi=["put","add","delete","clear"],he=new Map;function et(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(he.get(t))return he.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=wi.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||yi.includes(n)))return;const o=async function(a,...s){const c=this.transaction(a,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(s.shift())),(await Promise.all([l[n](...s),r&&c.done]))[0]};return he.set(t,o),o}gi(e=>({...e,get:(t,n,i)=>et(t,n)||e.get(t,n,i),has:(t,n)=>!!et(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ii(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ii(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ce="@firebase/app",tt="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Bt("@firebase/app"),_i="@firebase/app-compat",Ei="@firebase/analytics-compat",Si="@firebase/analytics",Ti="@firebase/app-check-compat",Ai="@firebase/app-check",Ci="@firebase/auth",Di="@firebase/auth-compat",ki="@firebase/database",Oi="@firebase/database-compat",Ri="@firebase/functions",Mi="@firebase/functions-compat",Ni="@firebase/installations",$i="@firebase/installations-compat",Pi="@firebase/messaging",Bi="@firebase/messaging-compat",xi="@firebase/performance",Li="@firebase/performance-compat",Fi="@firebase/remote-config",ji="@firebase/remote-config-compat",Hi="@firebase/storage",zi="@firebase/storage-compat",Vi="@firebase/firestore",Ui="@firebase/firestore-compat",Ki="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="[DEFAULT]",Wi={[Ce]:"fire-core",[_i]:"fire-core-compat",[Si]:"fire-analytics",[Ei]:"fire-analytics-compat",[Ai]:"fire-app-check",[Ti]:"fire-app-check-compat",[Ci]:"fire-auth",[Di]:"fire-auth-compat",[ki]:"fire-rtdb",[Oi]:"fire-rtdb-compat",[Ri]:"fire-fn",[Mi]:"fire-fn-compat",[Ni]:"fire-iid",[$i]:"fire-iid-compat",[Pi]:"fire-fcm",[Bi]:"fire-fcm-compat",[xi]:"fire-perf",[Li]:"fire-perf-compat",[Fi]:"fire-rc",[ji]:"fire-rc-compat",[Hi]:"fire-gcs",[zi]:"fire-gcs-compat",[Vi]:"fire-fst",[Ui]:"fire-fst-compat","fire-js":"fire-js",[Ki]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new Map,qi=new Map,ke=new Map;function nt(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function C(e){const t=e.name;if(ke.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ke.set(t,e);for(const n of ee.values())nt(n,e);for(const n of qi.values())nt(n,e);return!0}function q(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},k=new W("app","Firebase",Gi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new E("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw k.create("app-deleted",{appName:this._name})}}function Ft(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:De,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw k.create("bad-app-name",{appName:String(r)});if(n||(n=$t()),!n)throw k.create("no-options");const o=ee.get(r);if(o){if(Z(n,o.options)&&Z(i,o.config))return o;throw k.create("duplicate-app",{appName:r})}const a=new oi(r);for(const c of ke.values())a.addComponent(c);const s=new Qi(n,i,a);return ee.set(r,s),s}function jt(e=De){const t=ee.get(e);if(!t&&e===De&&$t())return Ft();if(!t)throw k.create("no-app",{appName:e});return t}function _(e,t,n){var i;let r=(i=Wi[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${r}" with version "${t}":`];o&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),N.warn(s.join(" "));return}C(new E(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="firebase-heartbeat-database",Ji=1,H="firebase-heartbeat-store";let pe=null;function Ht(){return pe||(pe=re(Yi,Ji,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(H)}catch(n){console.warn(n)}}}}).catch(e=>{throw k.create("idb-open",{originalErrorMessage:e.message})})),pe}async function Xi(e){try{const n=(await Ht()).transaction(H),i=await n.objectStore(H).get(zt(e));return await n.done,i}catch(t){if(t instanceof B)N.warn(t.message);else{const n=k.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});N.warn(n.message)}}}async function it(e,t){try{const i=(await Ht()).transaction(H,"readwrite");await i.objectStore(H).put(t,zt(e)),await i.done}catch(n){if(n instanceof B)N.warn(n.message);else{const i=k.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});N.warn(i.message)}}}function zt(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=1024,er=30*24*60*60*1e3;class tr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ir(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=rt();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const s=new Date(a.date).valueOf();return Date.now()-s<=er}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rt(),{heartbeatsToSend:i,unsentEntries:r}=nr(this._heartbeatsCache.heartbeats),o=Nt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function rt(){return new Date().toISOString().substring(0,10)}function nr(e,t=Zi){const n=[];let i=e.slice();for(const r of e){const o=n.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),ot(n)>t){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ot(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ir{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Me()?Ne().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Xi(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return it(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return it(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ot(e){return Nt(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e){C(new E("platform-logger",t=>new vi(t),"PRIVATE")),C(new E("heartbeat",t=>new tr(t),"PRIVATE")),_(Ce,tt,e),_(Ce,tt,"esm2017"),_("fire-js","")}rr("");var or="firebase",ar="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_(or,ar,"app");const Vt="@firebase/installations",Pe="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=1e4,Kt=`w:${Pe}`,Wt="FIS_v2",sr="https://firebaseinstallations.googleapis.com/v1",cr=60*60*1e3,lr="installations",ur="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},$=new W(lr,ur,dr);function qt(e){return e instanceof B&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt({projectId:e}){return`${sr}/projects/${e}/installations`}function Qt(e){return{token:e.token,requestStatus:2,expiresIn:hr(e.expiresIn),creationTime:Date.now()}}async function Yt(e,t){const i=(await t.json()).error;return $.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Jt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function fr(e,{refreshToken:t}){const n=Jt(e);return n.append("Authorization",pr(t)),n}async function Xt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function hr(e){return Number(e.replace("s","000"))}function pr(e){return`${Wt} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=Gt(e),r=Jt(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const a={fid:n,authVersion:Wt,appId:e.appId,sdkVersion:Kt},s={method:"POST",headers:r,body:JSON.stringify(a)},c=await Xt(()=>fetch(i,s));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Qt(l.authToken)}}else throw await Yt("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=/^[cdef][\w-]{21}$/,Oe="";function yr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=wr(e);return br.test(n)?n:Oe}catch{return Oe}}function wr(e){return mr(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Map;function tn(e,t){const n=oe(e);nn(n,t),vr(n,t)}function nn(e,t){const n=en.get(e);if(!!n)for(const i of n)i(t)}function vr(e,t){const n=Ir();n&&n.postMessage({key:e,fid:t}),_r()}let M=null;function Ir(){return!M&&"BroadcastChannel"in self&&(M=new BroadcastChannel("[Firebase] FID Change"),M.onmessage=e=>{nn(e.data.key,e.data.fid)}),M}function _r(){en.size===0&&M&&(M.close(),M=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="firebase-installations-database",Sr=1,P="firebase-installations-store";let ge=null;function Be(){return ge||(ge=re(Er,Sr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(P)}}})),ge}async function te(e,t){const n=oe(e),r=(await Be()).transaction(P,"readwrite"),o=r.objectStore(P),a=await o.get(n);return await o.put(t,n),await r.done,(!a||a.fid!==t.fid)&&tn(e,t.fid),t}async function rn(e){const t=oe(e),i=(await Be()).transaction(P,"readwrite");await i.objectStore(P).delete(t),await i.done}async function ae(e,t){const n=oe(e),r=(await Be()).transaction(P,"readwrite"),o=r.objectStore(P),a=await o.get(n),s=t(a);return s===void 0?await o.delete(n):await o.put(s,n),await r.done,s&&(!a||a.fid!==s.fid)&&tn(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e){let t;const n=await ae(e.appConfig,i=>{const r=Tr(i),o=Ar(e,r);return t=o.registrationPromise,o.installationEntry});return n.fid===Oe?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Tr(e){const t=e||{fid:yr(),registrationStatus:0};return on(t)}function Ar(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject($.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Cr(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Dr(e)}:{installationEntry:t}}async function Cr(e,t){try{const n=await gr(e,t);return te(e.appConfig,n)}catch(n){throw qt(n)&&n.customData.serverCode===409?await rn(e.appConfig):await te(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Dr(e){let t=await at(e.appConfig);for(;t.registrationStatus===1;)await Zt(100),t=await at(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await xe(e);return i||n}return t}function at(e){return ae(e,t=>{if(!t)throw $.create("installation-not-found");return on(t)})}function on(e){return kr(e)?{fid:e.fid,registrationStatus:0}:e}function kr(e){return e.registrationStatus===1&&e.registrationTime+Ut<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or({appConfig:e,heartbeatServiceProvider:t},n){const i=Rr(e,n),r=fr(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const a={installation:{sdkVersion:Kt,appId:e.appId}},s={method:"POST",headers:r,body:JSON.stringify(a)},c=await Xt(()=>fetch(i,s));if(c.ok){const l=await c.json();return Qt(l)}else throw await Yt("Generate Auth Token",c)}function Rr(e,{fid:t}){return`${Gt(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t=!1){let n;const i=await ae(e.appConfig,o=>{if(!an(o))throw $.create("not-registered");const a=o.authToken;if(!t&&$r(a))return o;if(a.requestStatus===1)return n=Mr(e,t),o;{if(!navigator.onLine)throw $.create("app-offline");const s=Br(o);return n=Nr(e,s),s}});return n?await n:i.authToken}async function Mr(e,t){let n=await st(e.appConfig);for(;n.authToken.requestStatus===1;)await Zt(100),n=await st(e.appConfig);const i=n.authToken;return i.requestStatus===0?Le(e,t):i}function st(e){return ae(e,t=>{if(!an(t))throw $.create("not-registered");const n=t.authToken;return xr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Nr(e,t){try{const n=await Or(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await te(e.appConfig,i),n}catch(n){if(qt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rn(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await te(e.appConfig,i)}throw n}}function an(e){return e!==void 0&&e.registrationStatus===2}function $r(e){return e.requestStatus===2&&!Pr(e)}function Pr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+cr}function Br(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function xr(e){return e.requestStatus===1&&e.requestTime+Ut<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(e){const t=e,{installationEntry:n,registrationPromise:i}=await xe(t);return i?i.catch(console.error):Le(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(e,t=!1){const n=e;return await jr(n),(await Le(n,t)).token}async function jr(e){const{registrationPromise:t}=await xe(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e){if(!e||!e.options)throw me("App Configuration");if(!e.name)throw me("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw me(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function me(e){return $.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="installations",zr="installations-internal",Vr=e=>{const t=e.getProvider("app").getImmediate(),n=Hr(t),i=q(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Ur=e=>{const t=e.getProvider("app").getImmediate(),n=q(t,sn).getImmediate();return{getId:()=>Lr(n),getToken:r=>Fr(n,r)}};function Kr(){C(new E(sn,Vr,"PUBLIC")),C(new E(zr,Ur,"PRIVATE"))}Kr();_(Vt,Pe);_(Vt,Pe,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="/firebase-messaging-sw.js",qr="/firebase-cloud-messaging-push-scope",cn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Gr="https://fcmregistrations.googleapis.com/v1",ln="google.c.a.c_id",Qr="google.c.a.c_l",Yr="google.c.a.ts",Jr="google.c.a.e";var ct;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ct||(ct={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var z;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(z||(z={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Xr(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let o=0;o<i.length;++o)r[o]=i.charCodeAt(o);return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="fcm_token_details_db",Zr=5,lt="fcm_token_object_Store";async function eo(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(be))return null;let t=null;return(await re(be,Zr,{upgrade:async(i,r,o,a)=>{var s;if(r<2||!i.objectStoreNames.contains(lt))return;const c=a.objectStore(lt),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(r===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(s=u.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:S(u.vapidKey)}}}else if(r===3){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:S(u.auth),p256dh:S(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:S(u.vapidKey)}}}else if(r===4){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:S(u.auth),p256dh:S(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:S(u.vapidKey)}}}}}})).close(),await fe(be),await fe("fcm_vapid_details_db"),await fe("undefined"),to(t)?t:null}function to(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="firebase-messaging-database",io=1,V="firebase-messaging-store";let ye=null;function un(){return ye||(ye=re(no,io,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(V)}}})),ye}async function ro(e){const t=dn(e),i=await(await un()).transaction(V).objectStore(V).get(t);if(i)return i;{const r=await eo(e.appConfig.senderId);if(r)return await Fe(e,r),r}}async function Fe(e,t){const n=dn(e),r=(await un()).transaction(V,"readwrite");return await r.objectStore(V).put(t,n),await r.done,t}function dn({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},b=new W("messaging","Messaging",oo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(e,t){const n=await He(e),i=fn(t),r={method:"POST",headers:n,body:JSON.stringify(i)};let o;try{o=await(await fetch(je(e.appConfig),r)).json()}catch(a){throw b.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw b.create("token-subscribe-failed",{errorInfo:a})}if(!o.token)throw b.create("token-subscribe-no-token");return o.token}async function so(e,t){const n=await He(e),i=fn(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let o;try{o=await(await fetch(`${je(e.appConfig)}/${t.token}`,r)).json()}catch(a){throw b.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw b.create("token-update-failed",{errorInfo:a})}if(!o.token)throw b.create("token-update-no-token");return o.token}async function co(e,t){const n=await He(e),i={method:"DELETE",headers:n};try{const o=await(await fetch(`${je(e.appConfig)}/${t}`,i)).json();if(o.error){const a=o.error.message;throw b.create("token-unsubscribe-failed",{errorInfo:a})}}catch(r){throw b.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function je({projectId:e}){return`${Gr}/projects/${e}/registrations`}async function He({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function fn({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==cn&&(r.web.applicationPubKey=i),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=7*24*60*60*1e3;async function uo(e){const t=await ho(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:S(t.getKey("auth")),p256dh:S(t.getKey("p256dh"))},i=await ro(e.firebaseDependencies);if(i){if(po(i.subscriptionOptions,n))return Date.now()>=i.createTime+lo?fo(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await co(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return ut(e.firebaseDependencies,n)}else return ut(e.firebaseDependencies,n)}async function fo(e,t){try{const n=await so(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Fe(e.firebaseDependencies,i),n}catch(n){throw n}}async function ut(e,t){const i={token:await ao(e,t),createTime:Date.now(),subscriptionOptions:t};return await Fe(e,i),i.token}async function ho(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Xr(t)})}function po(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&i&&r&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return go(t,e),mo(t,e),bo(t,e),t}function go(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r);const o=t.notification.icon;o&&(e.notification.icon=o)}function mo(e,t){!t.data||(e.data=t.data)}function bo(e,t){var n,i,r,o,a;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(r=(i=t.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&r!==void 0?r:(o=t.notification)===null||o===void 0?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=(a=t.fcmOptions)===null||a===void 0?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e){return typeof e=="object"&&!!e&&ln in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");hn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function hn(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){if(!e||!e.options)throw we("App Configuration Object");if(!e.name)throw we("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw we(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function we(e){return b.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=wo(t);this.firebaseDependencies={app:t,appConfig:r,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(e){try{e.swRegistration=await navigator.serviceWorker.register(Wr,{scope:qr}),e.swRegistration.update().catch(()=>{})}catch(t){throw b.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(e,t){if(!t&&!e.swRegistration&&await Io(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw b.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=cn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e,t){if(!navigator)throw b.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw b.create("permission-blocked");return await Eo(e,t==null?void 0:t.vapidKey),await _o(e,t==null?void 0:t.serviceWorkerRegistration),uo(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(e,t,n){const i=To(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[ln],message_name:n[Qr],message_time:n[Yr],message_device_time:Math.floor(Date.now()/1e3)})}function To(e){switch(e){case z.NOTIFICATION_CLICKED:return"notification_open";case z.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===z.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(dt(n)):e.onMessageHandler.next(dt(n)));const i=n.data;yo(i)&&i[Jr]==="1"&&await So(e,n.messageType,i)}const ft="@firebase/messaging",ht="0.12.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=e=>{const t=new vo(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ao(t,n)),t},Do=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>pn(t,i)}};function ko(){C(new E("messaging",Co,"PUBLIC")),C(new E("messaging-internal",Do,"PRIVATE")),_(ft,ht),_(ft,ht,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(){try{await Ne()}catch{return!1}return typeof window!="undefined"&&Me()&&Pt()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e=jt()){return Oo().then(t=>{if(!t)throw b.create("unsupported-browser")},t=>{throw b.create("indexed-db-unsupported")}),q(ie(e),"messaging").getImmediate()}async function Mo(e,t){return e=ie(e),pn(e,t)}ko();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="analytics",No="firebase_id",$o="origin",Po=60*1e3,Bo="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ze="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Bt("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},w=new W("analytics","Analytics",xo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(e){if(!e.startsWith(ze)){const t=w.create("invalid-gtag-resource",{gtagURL:e});return y.warn(t.message),""}return e}function gn(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Fo(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function jo(e,t){const n=Fo("firebase-js-sdk-policy",{createScriptURL:Lo}),i=document.createElement("script"),r=`${ze}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function Ho(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function zo(e,t,n,i,r,o){const a=i[r];try{if(a)await t[a];else{const c=(await gn(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(s){y.error(s)}e("config",r,o)}async function Vo(e,t,n,i,r){try{let o=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const s=await gn(n);for(const c of a){const l=s.find(p=>p.measurementId===c),u=l&&t[l.appId];if(u)o.push(u);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",i,r||{})}catch(o){y.error(o)}}function Uo(e,t,n,i){async function r(o,...a){try{if(o==="event"){const[s,c]=a;await Vo(e,t,n,s,c)}else if(o==="config"){const[s,c]=a;await zo(e,t,n,i,s,c)}else if(o==="consent"){const[s]=a;e("consent","update",s)}else if(o==="get"){const[s,c,l]=a;e("get",s,c,l)}else if(o==="set"){const[s]=a;e("set",s)}else e(o,...a)}catch(s){y.error(s)}}return r}function Ko(e,t,n,i,r){let o=function(...a){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=Uo(o,e,t,n),{gtagCore:o,wrappedGtag:window[r]}}function Wo(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ze)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=30,Go=1e3;class Qo{constructor(t={},n=Go){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const mn=new Qo;function Yo(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Jo(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Yo(i)},o=Bo.replace("{app-id}",n),a=await fetch(o,r);if(a.status!==200&&a.status!==304){let s="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(s=c.error.message)}catch{}throw w.create("config-fetch-failed",{httpStatus:a.status,responseMessage:s})}return a.json()}async function Xo(e,t=mn,n){const{appId:i,apiKey:r,measurementId:o}=e.options;if(!i)throw w.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw w.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new ta;return setTimeout(async()=>{s.abort()},n!==void 0?n:Po),bn({appId:i,apiKey:r,measurementId:o},a,s,t)}async function bn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=mn){var o;const{appId:a,measurementId:s}=e;try{await Zo(i,t)}catch(c){if(s)return y.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:s};throw c}try{const c=await Jo(e);return r.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!ea(l)){if(r.deleteThrottleMetadata(a),s)return y.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:s};throw c}const u=Number((o=l==null?void 0:l.customData)===null||o===void 0?void 0:o.httpStatus)===503?Je(n,r.intervalMillis,qo):Je(n,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(a,p),y.debug(`Calling attemptFetch again in ${u} millis`),bn(e,p,i,r)}}function Zo(e,t){return new Promise((n,i)=>{const r=Math.max(t-Date.now(),0),o=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(o),i(w.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ea(e){if(!(e instanceof B)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ta{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function na(e,t,n,i,r){if(r&&r.global){e("event",n,i);return}else{const o=await t,a=Object.assign(Object.assign({},i),{send_to:o});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(){if(Me())try{await Ne()}catch(e){return y.warn(w.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return y.warn(w.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ra(e,t,n,i,r,o,a){var s;const c=Xo(e);c.then(f=>{n[f.measurementId]=f.appId,e.options.measurementId&&f.measurementId!==e.options.measurementId&&y.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>y.error(f)),t.push(c);const l=ia().then(f=>{if(f)return i.getId()}),[u,p]=await Promise.all([c,l]);Wo(o)||jo(o,u.measurementId),r("js",new Date);const g=(s=a==null?void 0:a.config)!==null&&s!==void 0?s:{};return g[$o]="firebase",g.update=!0,p!=null&&(g[No]=p),r("config",u.measurementId,g),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t){this.app=t}_delete(){return delete j[this.app.options.appId],Promise.resolve()}}let j={},pt=[];const gt={};let ve="dataLayer",aa="gtag",mt,yn,bt=!1;function sa(){const e=[];if(Gn()&&e.push("This is a browser extension environment."),Pt()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=w.create("invalid-analytics-context",{errorInfo:t});y.warn(n.message)}}function ca(e,t,n){sa();const i=e.options.appId;if(!i)throw w.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)y.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw w.create("no-api-key");if(j[i]!=null)throw w.create("already-exists",{id:i});if(!bt){Ho(ve);const{wrappedGtag:o,gtagCore:a}=Ko(j,pt,gt,ve,aa);yn=o,mt=a,bt=!0}return j[i]=ra(e,pt,gt,t,mt,ve,n),new oa(e)}function la(e=jt()){e=ie(e);const t=q(e,ne);return t.isInitialized()?t.getImmediate():ua(e)}function ua(e,t={}){const n=q(e,ne);if(n.isInitialized()){const r=n.getImmediate();if(Z(t,n.getOptions()))return r;throw w.create("already-initialized")}return n.initialize({options:t})}function da(e,t,n,i){e=ie(e),na(yn,j[e.app.options.appId],t,n,i).catch(r=>y.error(r))}const yt="@firebase/analytics",wt="0.10.2";function fa(){C(new E(ne,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return ca(i,r,n)},"PUBLIC")),C(new E("analytics-internal",e,"PRIVATE")),_(yt,wt),_(yt,wt,"esm2017");function e(t){try{const n=t.getProvider(ne).getImmediate();return{logEvent:(i,r,o)=>da(n,i,r,o)}}catch(n){throw w.create("interop-component-reg-failed",{reason:n})}}}fa();const ha={class:"print-hide"},pa=Tt({__name:"PushComponent",setup(e){const t=D(!0);if("Notification"in window&&Notification.permission==="granted"){t.value=!1;var n={apiKey:"AIzaSyDjh-kSamZSSOA1pEwMuCB1HZxiZBgCaVE",authDomain:"agenda-408113.firebaseapp.com",projectId:"agenda-408113",storageBucket:"agenda-408113.appspot.com",messagingSenderId:"865568496873",appId:"1:865568496873:web:66e24b202af5ba7f1b6478",measurementId:"G-KDP8RZ0Z19"};const r=Ft(n),o=Ro(r);la(r),Mo(o,{vapidKey:"BJt_lJHggy9DmtbU64-umpjs4jgfSZgBG21yBlXHM_rh-71-SAT27MuiWFwuNTivWIwQAHzo-CTYL3xBaCi01Rc"}).then(a=>{console.log("Token recebido: ",a)})}const i=()=>{"Notification"in window?Notification.requestPermission().then(r=>{r==="granted"?(le.create({color:"positive",position:"top",message:"Permiss\xE3o para notifica\xE7\xF5es concedida!"}),t.value=!1):r==="denied"&&le.create({color:"negative",position:"top",message:"Permiss\xE3o para notifica\xE7\xF5es negada!"})}):le.create({color:"negative",position:"top",message:"Seu navegador n\xE3o suporta notifica\xE7\xF5es!"})};return(r,o)=>(X(),At("div",ha,[t.value?(X(),Ct(kt,{onClick:i,class:"notify",key:"btn_size_dense_round_sm",round:"",dense:"",color:"red",size:"md",icon:"notifications"})):Dt("",!0)]))}});const ga={key:0,class:"off"},ma=Tt({__name:"MainLayout",setup(e){return(t,n)=>{const i=Cn("router-view");return X(),Ct(xn,{view:"lHh Lpr lFf"},{default:Y(()=>[Dn("header",null,[F(kt,{class:"title",to:"/",outline:""},{default:Y(()=>[kn("CONGREGA\xC7\xC3O CRIST\xC3 NO BRASIL")]),_:1})]),F(Nn,null,{default:Y(()=>[F(Mn,null,{default:Y(()=>[F(i),On(Rn).connected?Dt("",!0):(X(),At("div",ga,"Voc\xEA est\xE1 off-line")),F(pa)]),_:1})]),_:1})]),_:1})}}});var ya=An(ma,[["__scopeId","data-v-f28769ae"]]);export{ya as default};
