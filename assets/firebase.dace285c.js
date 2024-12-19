import{b as kt}from"./index.c04fa981.js";/**
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
 */const Ve=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ot=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Ue={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,d=a>>2,p=(a&3)<<4|s>>4;let y=(s&15)<<2|l>>6,g=l&63;c||(g=64,o||(y=64)),r.push(n[d],n[p],n[y],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ve(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ot(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||l==null||p==null)throw new Mt;const y=a<<2|s>>4;if(r.push(y),l!==64){const g=s<<4&240|l>>2;if(r.push(g),p!==64){const Ct=l<<6&192|p;r.push(Ct)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Mt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rt=function(e){const t=Ve(e);return Ue.encodeByteArray(t,!0)},Ke=function(e){return Rt(e).replace(/\./g,"")},Nt=function(e){try{return Ue.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Bt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $t=()=>Bt().__FIREBASE_DEFAULTS__,Pt=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ft=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Nt(e[1]);return t&&JSON.parse(t)},Lt=()=>{try{return $t()||Pt()||Ft()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},We=()=>{var e;return(e=Lt())===null||e===void 0?void 0:e.config};/**
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
 */class xt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function jt(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function se(){try{return typeof indexedDB=="object"}catch{return!1}}function ce(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function ze(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ht="FirebaseError";class k extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ht,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,B.prototype.create)}}class B{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?Vt(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new k(i,s,r)}}function Vt(e,t){return e.replace(Ut,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ut=/\{\$([^}]+)}/g;function F(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(we(a)&&we(o)){if(!F(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function we(e){return e!==null&&typeof e=="object"}/**
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
 */const Kt=1e3,Wt=2,zt=4*60*60*1e3,qt=.5;function ye(e,t=Kt,n=Wt){const r=t*Math.pow(n,e),i=Math.round(qt*r*(Math.random()-.5)*2);return Math.min(zt,r+i)}/**
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
 */function $(e){return e&&e._delegate?e._delegate:e}class w{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const A="[DEFAULT]";/**
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
 */class Gt{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new xt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Jt(t))try{this.getOrInitializeService({instanceIdentifier:A})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=A){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=A){return this.instances.has(t)}getOptions(t=A){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yt(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=A){return this.component?this.component.multipleInstances?t:A:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yt(e){return e===A?void 0:e}function Jt(e){return e.instantiationMode==="EAGER"}/**
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
 */class Xt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Gt(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u||(u={}));const Zt={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Qt=u.INFO,en={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},tn=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=en[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qe{constructor(t){this.name=t,this._logLevel=Qt,this._logHandler=tn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}const nn=(e,t)=>t.some(n=>e instanceof n);let Ie,ve;function rn(){return Ie||(Ie=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function an(){return ve||(ve=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ge=new WeakMap,te=new WeakMap,Ye=new WeakMap,K=new WeakMap,le=new WeakMap;function on(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(v(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ge.set(n,e)}).catch(()=>{}),le.set(t,e),t}function sn(e){if(te.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});te.set(e,t)}let ne={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return te.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ye.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cn(e){ne=e(ne)}function ln(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(W(this),t,...n);return Ye.set(r,t.sort?t.sort():[t]),v(r)}:an().includes(e)?function(...t){return e.apply(W(this),t),v(Ge.get(this))}:function(...t){return v(e.apply(W(this),t))}}function dn(e){return typeof e=="function"?ln(e):(e instanceof IDBTransaction&&sn(e),nn(e,rn())?new Proxy(e,ne):e)}function v(e){if(e instanceof IDBRequest)return on(e);if(K.has(e))return K.get(e);const t=dn(e);return t!==e&&(K.set(e,t),le.set(t,e)),t}const W=e=>le.get(e);function H(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=v(o);return r&&o.addEventListener("upgradeneeded",c=>{r(v(o.result),c.oldVersion,c.newVersion,v(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{a&&c.addEventListener("close",()=>a()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),s}function z(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),v(n).then(()=>{})}const un=["get","getKey","getAll","getAllKeys","count"],fn=["put","add","delete","clear"],q=new Map;function Ee(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(q.get(t))return q.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=fn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||un.includes(n)))return;const a=async function(o,...s){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(s.shift())),(await Promise.all([l[n](...s),i&&c.done]))[0]};return q.set(t,a),a}cn(e=>({...e,get:(t,n,r)=>Ee(t,n)||e.get(t,n,r),has:(t,n)=>!!Ee(t,n)||e.has(t,n)}));/**
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
 */class hn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pn(e){const t=e.getComponent();return t?.type==="VERSION"}const re="@firebase/app",_e="0.10.16";/**
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
 */const E=new qe("@firebase/app"),gn="@firebase/app-compat",mn="@firebase/analytics-compat",bn="@firebase/analytics",wn="@firebase/app-check-compat",yn="@firebase/app-check",In="@firebase/auth",vn="@firebase/auth-compat",En="@firebase/database",_n="@firebase/data-connect",Sn="@firebase/database-compat",An="@firebase/functions",Tn="@firebase/functions-compat",Dn="@firebase/installations",Cn="@firebase/installations-compat",kn="@firebase/messaging",On="@firebase/messaging-compat",Mn="@firebase/performance",Rn="@firebase/performance-compat",Nn="@firebase/remote-config",Bn="@firebase/remote-config-compat",$n="@firebase/storage",Pn="@firebase/storage-compat",Fn="@firebase/firestore",Ln="@firebase/vertexai",xn="@firebase/firestore-compat",jn="firebase";/**
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
 */const ie="[DEFAULT]",Hn={[re]:"fire-core",[gn]:"fire-core-compat",[bn]:"fire-analytics",[mn]:"fire-analytics-compat",[yn]:"fire-app-check",[wn]:"fire-app-check-compat",[In]:"fire-auth",[vn]:"fire-auth-compat",[En]:"fire-rtdb",[_n]:"fire-data-connect",[Sn]:"fire-rtdb-compat",[An]:"fire-fn",[Tn]:"fire-fn-compat",[Dn]:"fire-iid",[Cn]:"fire-iid-compat",[kn]:"fire-fcm",[On]:"fire-fcm-compat",[Mn]:"fire-perf",[Rn]:"fire-perf-compat",[Nn]:"fire-rc",[Bn]:"fire-rc-compat",[$n]:"fire-gcs",[Pn]:"fire-gcs-compat",[Fn]:"fire-fst",[xn]:"fire-fst-compat",[Ln]:"fire-vertex","fire-js":"fire-js",[jn]:"fire-js-all"};/**
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
 */const L=new Map,Vn=new Map,ae=new Map;function Se(e,t){try{e.container.addComponent(t)}catch(n){E.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _(e){const t=e.name;if(ae.has(t))return E.debug(`There were multiple attempts to register component ${t}.`),!1;ae.set(t,e);for(const n of L.values())Se(n,e);for(const n of Vn.values())Se(n,e);return!0}function P(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Un={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},S=new B("app","Firebase",Un);/**
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
 */class Kn{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new w("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}}function Je(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw S.create("bad-app-name",{appName:String(i)});if(n||(n=We()),!n)throw S.create("no-options");const a=L.get(i);if(a){if(F(n,a.options)&&F(r,a.config))return a;throw S.create("duplicate-app",{appName:i})}const o=new Xt(i);for(const c of ae.values())o.addComponent(c);const s=new Kn(n,r,o);return L.set(i,s),s}function Xe(e=ie){const t=L.get(e);if(!t&&e===ie&&We())return Je();if(!t)throw S.create("no-app",{appName:e});return t}function b(e,t,n){var r;let i=(r=Hn[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),E.warn(s.join(" "));return}_(new w(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Wn="firebase-heartbeat-database",zn=1,M="firebase-heartbeat-store";let G=null;function Ze(){return G||(G=H(Wn,zn,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(M)}catch(n){console.warn(n)}}}}).catch(e=>{throw S.create("idb-open",{originalErrorMessage:e.message})})),G}async function qn(e){try{const n=(await Ze()).transaction(M),r=await n.objectStore(M).get(Qe(e));return await n.done,r}catch(t){if(t instanceof k)E.warn(t.message);else{const n=S.create("idb-get",{originalErrorMessage:t?.message});E.warn(n.message)}}}async function Ae(e,t){try{const r=(await Ze()).transaction(M,"readwrite");await r.objectStore(M).put(t,Qe(e)),await r.done}catch(n){if(n instanceof k)E.warn(n.message);else{const r=S.create("idb-set",{originalErrorMessage:n?.message});E.warn(r.message)}}}function Qe(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Gn=1024,Yn=30*24*60*60*1e3;class Jn{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Te();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=Yn}),this._storage.overwrite(this._heartbeatsCache))}catch(r){E.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Te(),{heartbeatsToSend:r,unsentEntries:i}=Xn(this._heartbeatsCache.heartbeats),a=Ke(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return E.warn(n),""}}}function Te(){return new Date().toISOString().substring(0,10)}function Xn(e,t=Gn){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),De(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),De(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return se()?ce().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ae(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ae(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function De(e){return Ke(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Qn(e){_(new w("platform-logger",t=>new hn(t),"PRIVATE")),_(new w("heartbeat",t=>new Jn(t),"PRIVATE")),b(re,_e,e),b(re,_e,"esm2017"),b("fire-js","")}Qn("");var er="firebase",tr="11.0.2";/**
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
 */b(er,tr,"app");const et="@firebase/installations",de="0.6.11";/**
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
 */const tt=1e4,nt=`w:${de}`,rt="FIS_v2",nr="https://firebaseinstallations.googleapis.com/v1",rr=60*60*1e3,ir="installations",ar="Installations";/**
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
 */const or={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},D=new B(ir,ar,or);function it(e){return e instanceof k&&e.code.includes("request-failed")}/**
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
 */function at({projectId:e}){return`${nr}/projects/${e}/installations`}function ot(e){return{token:e.token,requestStatus:2,expiresIn:cr(e.expiresIn),creationTime:Date.now()}}async function st(e,t){const r=(await t.json()).error;return D.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ct({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function sr(e,{refreshToken:t}){const n=ct(e);return n.append("Authorization",lr(t)),n}async function lt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function cr(e){return Number(e.replace("s","000"))}function lr(e){return`${rt} ${e}`}/**
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
 */async function dr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=at(e),i=ct(e),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:rt,appId:e.appId,sdkVersion:nt},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await lt(()=>fetch(r,s));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ot(l.authToken)}}else throw await st("Create Installation",c)}/**
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
 */function dt(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function ur(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fr=/^[cdef][\w-]{21}$/,oe="";function hr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=pr(e);return fr.test(n)?n:oe}catch{return oe}}function pr(e){return ur(e).substr(0,22)}/**
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
 */function V(e){return`${e.appName}!${e.appId}`}/**
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
 */const ut=new Map;function ft(e,t){const n=V(e);ht(n,t),gr(n,t)}function ht(e,t){const n=ut.get(e);if(!!n)for(const r of n)r(t)}function gr(e,t){const n=mr();n&&n.postMessage({key:e,fid:t}),br()}let T=null;function mr(){return!T&&"BroadcastChannel"in self&&(T=new BroadcastChannel("[Firebase] FID Change"),T.onmessage=e=>{ht(e.data.key,e.data.fid)}),T}function br(){ut.size===0&&T&&(T.close(),T=null)}/**
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
 */const wr="firebase-installations-database",yr=1,C="firebase-installations-store";let Y=null;function ue(){return Y||(Y=H(wr,yr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(C)}}})),Y}async function x(e,t){const n=V(e),i=(await ue()).transaction(C,"readwrite"),a=i.objectStore(C),o=await a.get(n);return await a.put(t,n),await i.done,(!o||o.fid!==t.fid)&&ft(e,t.fid),t}async function pt(e){const t=V(e),r=(await ue()).transaction(C,"readwrite");await r.objectStore(C).delete(t),await r.done}async function U(e,t){const n=V(e),i=(await ue()).transaction(C,"readwrite"),a=i.objectStore(C),o=await a.get(n),s=t(o);return s===void 0?await a.delete(n):await a.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&ft(e,s.fid),s}/**
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
 */async function fe(e){let t;const n=await U(e.appConfig,r=>{const i=Ir(r),a=vr(e,i);return t=a.registrationPromise,a.installationEntry});return n.fid===oe?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ir(e){const t=e||{fid:hr(),registrationStatus:0};return gt(t)}function vr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(D.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Er(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_r(e)}:{installationEntry:t}}async function Er(e,t){try{const n=await dr(e,t);return x(e.appConfig,n)}catch(n){throw it(n)&&n.customData.serverCode===409?await pt(e.appConfig):await x(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function _r(e){let t=await Ce(e.appConfig);for(;t.registrationStatus===1;)await dt(100),t=await Ce(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await fe(e);return r||n}return t}function Ce(e){return U(e,t=>{if(!t)throw D.create("installation-not-found");return gt(t)})}function gt(e){return Sr(e)?{fid:e.fid,registrationStatus:0}:e}function Sr(e){return e.registrationStatus===1&&e.registrationTime+tt<Date.now()}/**
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
 */async function Ar({appConfig:e,heartbeatServiceProvider:t},n){const r=Tr(e,n),i=sr(e,n),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:nt,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await lt(()=>fetch(r,s));if(c.ok){const l=await c.json();return ot(l)}else throw await st("Generate Auth Token",c)}function Tr(e,{fid:t}){return`${at(e)}/${t}/authTokens:generate`}/**
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
 */async function he(e,t=!1){let n;const r=await U(e.appConfig,a=>{if(!mt(a))throw D.create("not-registered");const o=a.authToken;if(!t&&kr(o))return a;if(o.requestStatus===1)return n=Dr(e,t),a;{if(!navigator.onLine)throw D.create("app-offline");const s=Mr(a);return n=Cr(e,s),s}});return n?await n:r.authToken}async function Dr(e,t){let n=await ke(e.appConfig);for(;n.authToken.requestStatus===1;)await dt(100),n=await ke(e.appConfig);const r=n.authToken;return r.requestStatus===0?he(e,t):r}function ke(e){return U(e,t=>{if(!mt(t))throw D.create("not-registered");const n=t.authToken;return Rr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Cr(e,t){try{const n=await Ar(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await x(e.appConfig,r),n}catch(n){if(it(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await x(e.appConfig,r)}throw n}}function mt(e){return e!==void 0&&e.registrationStatus===2}function kr(e){return e.requestStatus===2&&!Or(e)}function Or(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+rr}function Mr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Rr(e){return e.requestStatus===1&&e.requestTime+tt<Date.now()}/**
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
 */async function Nr(e){const t=e,{installationEntry:n,registrationPromise:r}=await fe(t);return r?r.catch(console.error):he(t).catch(console.error),n.fid}/**
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
 */async function Br(e,t=!1){const n=e;return await $r(n),(await he(n,t)).token}async function $r(e){const{registrationPromise:t}=await fe(e);t&&await t}/**
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
 */function Pr(e){if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw J(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function J(e){return D.create("missing-app-config-values",{valueName:e})}/**
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
 */const bt="installations",Fr="installations-internal",Lr=e=>{const t=e.getProvider("app").getImmediate(),n=Pr(t),r=P(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xr=e=>{const t=e.getProvider("app").getImmediate(),n=P(t,bt).getImmediate();return{getId:()=>Nr(n),getToken:i=>Br(n,i)}};function jr(){_(new w(bt,Lr,"PUBLIC")),_(new w(Fr,xr,"PRIVATE"))}jr();b(et,de);b(et,de,"esm2017");/**
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
 */const Hr="/firebase-messaging-sw.js",Vr="/firebase-cloud-messaging-push-scope",wt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ur="https://fcmregistrations.googleapis.com/v1",yt="google.c.a.c_id",Kr="google.c.a.c_l",Wr="google.c.a.ts",zr="google.c.a.e";var Oe;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Oe||(Oe={}));/**
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
 */var R;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(R||(R={}));/**
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
 */function I(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function qr(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let a=0;a<r.length;++a)i[a]=r.charCodeAt(a);return i}/**
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
 */const X="fcm_token_details_db",Gr=5,Me="fcm_token_object_Store";async function Yr(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(X))return null;let t=null;return(await H(X,Gr,{upgrade:async(r,i,a,o)=>{var s;if(i<2||!r.objectStoreNames.contains(Me))return;const c=o.objectStore(Me),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(i===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(s=d.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:I(d.vapidKey)}}}else if(i===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:I(d.auth),p256dh:I(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:I(d.vapidKey)}}}else if(i===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:I(d.auth),p256dh:I(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:I(d.vapidKey)}}}}}})).close(),await z(X),await z("fcm_vapid_details_db"),await z("undefined"),Jr(t)?t:null}function Jr(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Xr="firebase-messaging-database",Zr=1,N="firebase-messaging-store";let Z=null;function It(){return Z||(Z=H(Xr,Zr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(N)}}})),Z}async function Qr(e){const t=vt(e),r=await(await It()).transaction(N).objectStore(N).get(t);if(r)return r;{const i=await Yr(e.appConfig.senderId);if(i)return await pe(e,i),i}}async function pe(e,t){const n=vt(e),i=(await It()).transaction(N,"readwrite");return await i.objectStore(N).put(t,n),await i.done,t}function vt({appConfig:e}){return e.appId}/**
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
 */const ei={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},f=new B("messaging","Messaging",ei);/**
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
 */async function ti(e,t){const n=await me(e),r=Et(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(ge(e.appConfig),i)).json()}catch(o){throw f.create("token-subscribe-failed",{errorInfo:o?.toString()})}if(a.error){const o=a.error.message;throw f.create("token-subscribe-failed",{errorInfo:o})}if(!a.token)throw f.create("token-subscribe-no-token");return a.token}async function ni(e,t){const n=await me(e),r=Et(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${ge(e.appConfig)}/${t.token}`,i)).json()}catch(o){throw f.create("token-update-failed",{errorInfo:o?.toString()})}if(a.error){const o=a.error.message;throw f.create("token-update-failed",{errorInfo:o})}if(!a.token)throw f.create("token-update-no-token");return a.token}async function ri(e,t){const n=await me(e),r={method:"DELETE",headers:n};try{const a=await(await fetch(`${ge(e.appConfig)}/${t}`,r)).json();if(a.error){const o=a.error.message;throw f.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw f.create("token-unsubscribe-failed",{errorInfo:i?.toString()})}}function ge({projectId:e}){return`${Ur}/projects/${e}/registrations`}async function me({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Et({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==wt&&(i.web.applicationPubKey=r),i}/**
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
 */const ii=7*24*60*60*1e3;async function ai(e){const t=await si(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:I(t.getKey("auth")),p256dh:I(t.getKey("p256dh"))},r=await Qr(e.firebaseDependencies);if(r){if(ci(r.subscriptionOptions,n))return Date.now()>=r.createTime+ii?oi(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ri(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Re(e.firebaseDependencies,n)}else return Re(e.firebaseDependencies,n)}async function oi(e,t){try{const n=await ni(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await pe(e.firebaseDependencies,r),n}catch(n){throw n}}async function Re(e,t){const r={token:await ti(e,t),createTime:Date.now(),subscriptionOptions:t};return await pe(e,r),r.token}async function si(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:qr(t)})}function ci(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&i&&a}/**
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
 */function Ne(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return li(t,e),di(t,e),ui(t,e),t}function li(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i);const a=t.notification.icon;a&&(e.notification.icon=a)}function di(e,t){!t.data||(e.data=t.data)}function ui(e,t){var n,r,i,a,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(i=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(a=t.notification)===null||a===void 0?void 0:a.click_action;s&&(e.fcmOptions.link=s);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function fi(e){return typeof e=="object"&&!!e&&yt in e}/**
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
 */hi("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function hi(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function pi(e){if(!e||!e.options)throw Q("App Configuration Object");if(!e.name)throw Q("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Q(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Q(e){return f.create("missing-app-config-values",{valueName:e})}/**
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
 */class gi{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=pi(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function mi(e){try{e.swRegistration=await navigator.serviceWorker.register(Hr,{scope:Vr}),e.swRegistration.update().catch(()=>{})}catch(t){throw f.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}/**
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
 */async function bi(e,t){if(!t&&!e.swRegistration&&await mi(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw f.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function wi(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=wt)}/**
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
 */async function _t(e,t){if(!navigator)throw f.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw f.create("permission-blocked");return await wi(e,t?.vapidKey),await bi(e,t?.serviceWorkerRegistration),ai(e)}/**
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
 */async function yi(e,t,n){const r=Ii(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[yt],message_name:n[Kr],message_time:n[Wr],message_device_time:Math.floor(Date.now()/1e3)})}function Ii(e){switch(e){case R.NOTIFICATION_CLICKED:return"notification_open";case R.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function vi(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===R.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ne(n)):e.onMessageHandler.next(Ne(n)));const r=n.data;fi(r)&&r[zr]==="1"&&await yi(e,n.messageType,r)}const Be="@firebase/messaging",$e="0.12.14";/**
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
 */const Ei=e=>{const t=new gi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>vi(t,n)),t},_i=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>_t(t,r)}};function Si(){_(new w("messaging",Ei,"PUBLIC")),_(new w("messaging-internal",_i,"PRIVATE")),b(Be,$e),b(Be,$e,"esm2017")}/**
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
 */async function Ai(){try{await ce()}catch{return!1}return typeof window<"u"&&se()&&ze()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Ti(e,t){if(!navigator)throw f.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
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
 */function Di(e=Xe()){return Ai().then(t=>{if(!t)throw f.create("unsupported-browser")},t=>{throw f.create("indexed-db-unsupported")}),P($(e),"messaging").getImmediate()}async function Ci(e,t){return e=$(e),_t(e,t)}function ki(e,t){return e=$(e),Ti(e,t)}Si();/**
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
 */const j="analytics",Oi="firebase_id",Mi="origin",Ri=60*1e3,Ni="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",be="https://www.googletagmanager.com/gtag/js";/**
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
 */const h=new qe("@firebase/analytics");/**
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
 */const Bi={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},m=new B("analytics","Analytics",Bi);/**
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
 */function $i(e){if(!e.startsWith(be)){const t=m.create("invalid-gtag-resource",{gtagURL:e});return h.warn(t.message),""}return e}function St(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Pi(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Fi(e,t){const n=Pi("firebase-js-sdk-policy",{createScriptURL:$i}),r=document.createElement("script"),i=`${be}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Li(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function xi(e,t,n,r,i,a){const o=r[i];try{if(o)await t[o];else{const c=(await St(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(s){h.error(s)}e("config",i,a)}async function ji(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const s=await St(n);for(const c of o){const l=s.find(p=>p.measurementId===c),d=l&&t[l.appId];if(d)a.push(d);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(a){h.error(a)}}function Hi(e,t,n,r){async function i(a,...o){try{if(a==="event"){const[s,c]=o;await ji(e,t,n,s,c)}else if(a==="config"){const[s,c]=o;await xi(e,t,n,r,s,c)}else if(a==="consent"){const[s,c]=o;e("consent",s,c)}else if(a==="get"){const[s,c,l]=o;e("get",s,c,l)}else if(a==="set"){const[s]=o;e("set",s)}else e(a,...o)}catch(s){h.error(s)}}return i}function Vi(e,t,n,r,i){let a=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=Hi(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function Ui(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(be)&&n.src.includes(e))return n;return null}/**
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
 */const Ki=30,Wi=1e3;class zi{constructor(t={},n=Wi){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const At=new zi;function qi(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Gi(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:qi(r)},a=Ni.replace("{app-id}",n),o=await fetch(a,i);if(o.status!==200&&o.status!==304){let s="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(s=c.error.message)}catch{}throw m.create("config-fetch-failed",{httpStatus:o.status,responseMessage:s})}return o.json()}async function Yi(e,t=At,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw m.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw m.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Zi;return setTimeout(async()=>{s.abort()},n!==void 0?n:Ri),Tt({appId:r,apiKey:i,measurementId:a},o,s,t)}async function Tt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=At){var a;const{appId:o,measurementId:s}=e;try{await Ji(r,t)}catch(c){if(s)return h.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:s};throw c}try{const c=await Gi(e);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Xi(l)){if(i.deleteThrottleMetadata(o),s)return h.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:s};throw c}const d=Number((a=l?.customData)===null||a===void 0?void 0:a.httpStatus)===503?ye(n,i.intervalMillis,Ki):ye(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),h.debug(`Calling attemptFetch again in ${d} millis`),Tt(e,p,r,i)}}function Ji(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(m.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Xi(e){if(!(e instanceof k)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Zi{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Qi(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const a=await t,o=Object.assign(Object.assign({},r),{send_to:a});e("event",n,o)}}/**
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
 */async function ea(){if(se())try{await ce()}catch(e){return h.warn(m.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return h.warn(m.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ta(e,t,n,r,i,a,o){var s;const c=Yi(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&h.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>h.error(g)),t.push(c);const l=ea().then(g=>{if(g)return r.getId()}),[d,p]=await Promise.all([c,l]);Ui(a)||Fi(a,d.measurementId),i("js",new Date);const y=(s=o?.config)!==null&&s!==void 0?s:{};return y[Mi]="firebase",y.update=!0,p!=null&&(y[Oi]=p),i("config",d.measurementId,y),d.measurementId}/**
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
 */class na{constructor(t){this.app=t}_delete(){return delete O[this.app.options.appId],Promise.resolve()}}let O={},Pe=[];const Fe={};let ee="dataLayer",ra="gtag",Le,Dt,xe=!1;function ia(){const e=[];if(jt()&&e.push("This is a browser extension environment."),ze()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=m.create("invalid-analytics-context",{errorInfo:t});h.warn(n.message)}}function aa(e,t,n){ia();const r=e.options.appId;if(!r)throw m.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)h.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw m.create("no-api-key");if(O[r]!=null)throw m.create("already-exists",{id:r});if(!xe){Li(ee);const{wrappedGtag:a,gtagCore:o}=Vi(O,Pe,Fe,ee,ra);Dt=a,Le=o,xe=!0}return O[r]=ta(e,Pe,Fe,t,Le,ee,n),new na(e)}function oa(e=Xe()){e=$(e);const t=P(e,j);return t.isInitialized()?t.getImmediate():sa(e)}function sa(e,t={}){const n=P(e,j);if(n.isInitialized()){const i=n.getImmediate();if(F(t,n.getOptions()))return i;throw m.create("already-initialized")}return n.initialize({options:t})}function ca(e,t,n,r){e=$(e),Qi(Dt,O[e.app.options.appId],t,n,r).catch(i=>h.error(i))}const je="@firebase/analytics",He="0.10.10";function la(){_(new w(j,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return aa(r,i,n)},"PUBLIC")),_(new w("analytics-internal",e,"PRIVATE")),b(je,He),b(je,He,"esm2017");function e(t){try{const n=t.getProvider(j).getImmediate();return{logEvent:(r,i,a)=>ca(n,r,i,a)}}catch(n){throw m.create("interop-component-reg-failed",{reason:n})}}}la();const da={apiKey:"AIzaSyDjh-kSamZSSOA1pEwMuCB1HZxiZBgCaVE",authDomain:"agenda-408113.firebaseapp.com",projectId:"agenda-408113",storageBucket:"agenda-408113.appspot.com",messagingSenderId:"865568496873",appId:"1:865568496873:web:66e24b202af5ba7f1b6478",measurementId:"G-KDP8RZ0Z19"},ua="BJt_lJHggy9DmtbU64-umpjs4jgfSZgBG21yBlXHM_rh-71-SAT27MuiWFwuNTivWIwQAHzo-CTYL3xBaCi01Rc";async function fa(){const e=Je(da);oa(e);const t=Di(e);try{await navigator.serviceWorker.register("/firebase-messaging-sw.js"),console.log("Service Worker registrado com sucesso.")}catch(n){throw console.error("Erro ao registrar o Service Worker:",n),n}try{await Ci(t,{vapidKey:ua})||console.warn("Nenhum token FCM dispon\xEDvel. Verifique permiss\xF5es.")}catch(n){console.error("Erro ao obter o token FCM:",n)}ki(t,n=>{if(Notification.permission==="granted"&&n.notification){const{title:r,body:i}=n.notification;new Notification(r,{body:i})}else console.log("Notifica\xE7\xE3o recebida, mas permiss\xF5es de notifica\xE7\xE3o n\xE3o concedidas.")})}var pa=kt(async()=>{try{Notification.permission==="granted"&&await fa()}catch(e){console.error("Erro ao inicializar o Firebase:",e)}});export{pa as default};
