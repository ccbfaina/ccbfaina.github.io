import{b as bt}from"./index.be6d2104.js";/**
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
 */const Be=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},wt=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=e[n++];t[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=e[n++],i=e[n++],s=e[n++],c=((a&7)<<18|(o&63)<<12|(i&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|i&63)}}return t.join("")},yt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const o=e[a],i=a+1<e.length,s=i?e[a+1]:0,c=a+2<e.length,d=c?e[a+2]:0,u=o>>2,h=(o&3)<<4|s>>4;let w=(s&15)<<2|d>>6,p=d&63;c||(p=64,i||(w=64)),r.push(n[u],n[h],n[w],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Be(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const o=n[e.charAt(a++)],s=a<e.length?n[e.charAt(a)]:0;++a;const d=a<e.length?n[e.charAt(a)]:64;++a;const h=a<e.length?n[e.charAt(a)]:64;if(++a,o==null||s==null||d==null||h==null)throw new It;const w=o<<2|s>>4;if(r.push(w),d!==64){const p=s<<4&240|d>>2;if(r.push(p),h!==64){const mt=d<<6&192|h;r.push(mt)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class It extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vt=function(e){const t=Be(e);return yt.encodeByteArray(t,!0)},Ne=function(e){return vt(e).replace(/\./g,"")};function Tt(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $e(){try{return typeof indexedDB=="object"}catch{return!1}}function Pe(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var o;t(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Et(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _t="FirebaseError";class D extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_t,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},a=`${this.service}/${t}`,o=this.errors[t],i=o?St(o,r):"Error",s=`${this.serviceName}: ${i} (${a}).`;return new D(a,s,r)}}function St(e,t){return e.replace(At,(n,r)=>{const a=t[r];return a!=null?String(a):`<${r}?>`})}const At=/\{\$([^}]+)}/g;/**
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
 */const Dt=1e3,Ct=2,kt=4*60*60*1e3,Ot=.5;function ce(e,t=Dt,n=Ct){const r=t*Math.pow(n,e),a=Math.round(Ot*r*(Math.random()-.5)*2);return Math.min(kt,r+a)}/**
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
 */function Mt(e){return e&&e._delegate?e._delegate:e}class v{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var l;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(l||(l={}));const Rt={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},Bt=l.INFO,Nt={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},$t=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),a=Nt[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Le{constructor(t){this.name=t,this._logLevel=Bt,this._logHandler=$t,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in l))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...t),this._logHandler(this,l.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...t),this._logHandler(this,l.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,l.INFO,...t),this._logHandler(this,l.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,l.WARN,...t),this._logHandler(this,l.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...t),this._logHandler(this,l.ERROR,...t)}}const Pt=(e,t)=>t.some(n=>e instanceof n);let de,ue;function Lt(){return de||(de=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xt(){return ue||(ue=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xe=new WeakMap,z=new WeakMap,Fe=new WeakMap,L=new WeakMap,Q=new WeakMap;function Ft(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(I(e.result)),a()},i=()=>{r(e.error),a()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&xe.set(n,e)}).catch(()=>{}),Q.set(t,e),t}function jt(e){if(z.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),a()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});z.set(e,t)}let Y={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return z.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ht(e){Y=e(Y)}function Vt(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(x(this),t,...n);return Fe.set(r,t.sort?t.sort():[t]),I(r)}:xt().includes(e)?function(...t){return e.apply(x(this),t),I(xe.get(this))}:function(...t){return I(e.apply(x(this),t))}}function Kt(e){return typeof e=="function"?Vt(e):(e instanceof IDBTransaction&&jt(e),Pt(e,Lt())?new Proxy(e,Y):e)}function I(e){if(e instanceof IDBRequest)return Ft(e);if(L.has(e))return L.get(e);const t=Kt(e);return t!==e&&(L.set(e,t),Q.set(t,e)),t}const x=e=>Q.get(e);function N(e,t,{blocked:n,upgrade:r,blocking:a,terminated:o}={}){const i=indexedDB.open(e,t),s=I(i);return r&&i.addEventListener("upgradeneeded",c=>{r(I(i.result),c.oldVersion,c.newVersion,I(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{o&&c.addEventListener("close",()=>o()),a&&c.addEventListener("versionchange",d=>a(d.oldVersion,d.newVersion,d))}).catch(()=>{}),s}function F(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),I(n).then(()=>{})}const Ut=["get","getKey","getAll","getAllKeys","count"],Wt=["put","add","delete","clear"],j=new Map;function le(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(j.get(t))return j.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=Wt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Ut.includes(n)))return;const o=async function(i,...s){const c=this.transaction(i,a?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(s.shift())),(await Promise.all([d[n](...s),a&&c.done]))[0]};return j.set(t,o),o}Ht(e=>({...e,get:(t,n,r)=>le(t,n)||e.get(t,n,r),has:(t,n)=>!!le(t,n)||e.has(t,n)}));/**
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
 */class qt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gt(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gt(e){const t=e.getComponent();return t?.type==="VERSION"}const J="@firebase/app",fe="0.10.16";/**
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
 */const T=new Le("@firebase/app"),zt="@firebase/app-compat",Yt="@firebase/analytics-compat",Jt="@firebase/analytics",Xt="@firebase/app-check-compat",Qt="@firebase/app-check",Zt="@firebase/auth",en="@firebase/auth-compat",tn="@firebase/database",nn="@firebase/data-connect",rn="@firebase/database-compat",an="@firebase/functions",on="@firebase/functions-compat",sn="@firebase/installations",cn="@firebase/installations-compat",dn="@firebase/messaging",un="@firebase/messaging-compat",ln="@firebase/performance",fn="@firebase/performance-compat",hn="@firebase/remote-config",pn="@firebase/remote-config-compat",gn="@firebase/storage",mn="@firebase/storage-compat",bn="@firebase/firestore",wn="@firebase/vertexai",yn="@firebase/firestore-compat",In="firebase",vn={[J]:"fire-core",[zt]:"fire-core-compat",[Jt]:"fire-analytics",[Yt]:"fire-analytics-compat",[Qt]:"fire-app-check",[Xt]:"fire-app-check-compat",[Zt]:"fire-auth",[en]:"fire-auth-compat",[tn]:"fire-rtdb",[nn]:"fire-data-connect",[rn]:"fire-rtdb-compat",[an]:"fire-fn",[on]:"fire-fn-compat",[sn]:"fire-iid",[cn]:"fire-iid-compat",[dn]:"fire-fcm",[un]:"fire-fcm-compat",[ln]:"fire-perf",[fn]:"fire-perf-compat",[hn]:"fire-rc",[pn]:"fire-rc-compat",[gn]:"fire-gcs",[mn]:"fire-gcs-compat",[bn]:"fire-fst",[yn]:"fire-fst-compat",[wn]:"fire-vertex","fire-js":"fire-js",[In]:"fire-js-all"};/**
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
 */const Tn=new Map,En=new Map,he=new Map;function pe(e,t){try{e.container.addComponent(t)}catch(n){T.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function E(e){const t=e.name;if(he.has(t))return T.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of Tn.values())pe(n,e);for(const n of En.values())pe(n,e);return!0}function je(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const _n={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Z=new R("app","Firebase",_n);function b(e,t,n){var r;let a=(r=vn[e])!==null&&r!==void 0?r:e;n&&(a+=`-${n}`);const o=a.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const s=[`Unable to register library "${a}" with version "${t}":`];o&&s.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&i&&s.push("and"),i&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),T.warn(s.join(" "));return}E(new v(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const Sn="firebase-heartbeat-database",An=1,k="firebase-heartbeat-store";let H=null;function He(){return H||(H=N(Sn,An,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(k)}catch(n){console.warn(n)}}}}).catch(e=>{throw Z.create("idb-open",{originalErrorMessage:e.message})})),H}async function Dn(e){try{const n=(await He()).transaction(k),r=await n.objectStore(k).get(Ve(e));return await n.done,r}catch(t){if(t instanceof D)T.warn(t.message);else{const n=Z.create("idb-get",{originalErrorMessage:t?.message});T.warn(n.message)}}}async function ge(e,t){try{const r=(await He()).transaction(k,"readwrite");await r.objectStore(k).put(t,Ve(e)),await r.done}catch(n){if(n instanceof D)T.warn(n.message);else{const r=Z.create("idb-set",{originalErrorMessage:n?.message});T.warn(r.message)}}}function Ve(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Cn=1024,kn=30*24*60*60*1e3;class On{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=me();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=kn}),this._storage.overwrite(this._heartbeatsCache))}catch(r){T.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=me(),{heartbeatsToSend:r,unsentEntries:a}=Mn(this._heartbeatsCache.heartbeats),o=Ne(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return T.warn(n),""}}}function me(){return new Date().toISOString().substring(0,10)}function Mn(e,t=Cn){const n=[];let r=e.slice();for(const a of e){const o=n.find(i=>i.agent===a.agent);if(o){if(o.dates.push(a.date),be(n)>t){o.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $e()?Pe().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Dn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return ge(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return ge(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function be(e){return Ne(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Bn(e){E(new v("platform-logger",t=>new qt(t),"PRIVATE")),E(new v("heartbeat",t=>new On(t),"PRIVATE")),b(J,fe,e),b(J,fe,"esm2017"),b("fire-js","")}Bn("");var Nn="firebase",$n="11.0.2";/**
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
 */b(Nn,$n,"app");const Ke="@firebase/installations",ee="0.6.11";/**
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
 */const Ue=1e4,We=`w:${ee}`,qe="FIS_v2",Pn="https://firebaseinstallations.googleapis.com/v1",Ln=60*60*1e3,xn="installations",Fn="Installations";/**
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
 */const jn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},S=new R(xn,Fn,jn);function Ge(e){return e instanceof D&&e.code.includes("request-failed")}/**
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
 */function ze({projectId:e}){return`${Pn}/projects/${e}/installations`}function Ye(e){return{token:e.token,requestStatus:2,expiresIn:Vn(e.expiresIn),creationTime:Date.now()}}async function Je(e,t){const r=(await t.json()).error;return S.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Xe({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Hn(e,{refreshToken:t}){const n=Xe(e);return n.append("Authorization",Kn(t)),n}async function Qe(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Vn(e){return Number(e.replace("s","000"))}function Kn(e){return`${qe} ${e}`}/**
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
 */async function Un({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ze(e),a=Xe(e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&a.append("x-firebase-client",d)}const i={fid:n,authVersion:qe,appId:e.appId,sdkVersion:We},s={method:"POST",headers:a,body:JSON.stringify(i)},c=await Qe(()=>fetch(r,s));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ye(d.authToken)}}else throw await Je("Create Installation",c)}/**
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
 */function Ze(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Wn(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qn=/^[cdef][\w-]{21}$/,X="";function Gn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=zn(e);return qn.test(n)?n:X}catch{return X}}function zn(e){return Wn(e).substr(0,22)}/**
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
 */function $(e){return`${e.appName}!${e.appId}`}/**
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
 */const et=new Map;function tt(e,t){const n=$(e);nt(n,t),Yn(n,t)}function nt(e,t){const n=et.get(e);if(!!n)for(const r of n)r(t)}function Yn(e,t){const n=Jn();n&&n.postMessage({key:e,fid:t}),Xn()}let _=null;function Jn(){return!_&&"BroadcastChannel"in self&&(_=new BroadcastChannel("[Firebase] FID Change"),_.onmessage=e=>{nt(e.data.key,e.data.fid)}),_}function Xn(){et.size===0&&_&&(_.close(),_=null)}/**
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
 */const Qn="firebase-installations-database",Zn=1,A="firebase-installations-store";let V=null;function te(){return V||(V=N(Qn,Zn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(A)}}})),V}async function B(e,t){const n=$(e),a=(await te()).transaction(A,"readwrite"),o=a.objectStore(A),i=await o.get(n);return await o.put(t,n),await a.done,(!i||i.fid!==t.fid)&&tt(e,t.fid),t}async function rt(e){const t=$(e),r=(await te()).transaction(A,"readwrite");await r.objectStore(A).delete(t),await r.done}async function P(e,t){const n=$(e),a=(await te()).transaction(A,"readwrite"),o=a.objectStore(A),i=await o.get(n),s=t(i);return s===void 0?await o.delete(n):await o.put(s,n),await a.done,s&&(!i||i.fid!==s.fid)&&tt(e,s.fid),s}/**
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
 */async function ne(e){let t;const n=await P(e.appConfig,r=>{const a=er(r),o=tr(e,a);return t=o.registrationPromise,o.installationEntry});return n.fid===X?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function er(e){const t=e||{fid:Gn(),registrationStatus:0};return at(t)}function tr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(S.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=nr(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:rr(e)}:{installationEntry:t}}async function nr(e,t){try{const n=await Un(e,t);return B(e.appConfig,n)}catch(n){throw Ge(n)&&n.customData.serverCode===409?await rt(e.appConfig):await B(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function rr(e){let t=await we(e.appConfig);for(;t.registrationStatus===1;)await Ze(100),t=await we(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ne(e);return r||n}return t}function we(e){return P(e,t=>{if(!t)throw S.create("installation-not-found");return at(t)})}function at(e){return ar(e)?{fid:e.fid,registrationStatus:0}:e}function ar(e){return e.registrationStatus===1&&e.registrationTime+Ue<Date.now()}/**
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
 */async function or({appConfig:e,heartbeatServiceProvider:t},n){const r=ir(e,n),a=Hn(e,n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&a.append("x-firebase-client",d)}const i={installation:{sdkVersion:We,appId:e.appId}},s={method:"POST",headers:a,body:JSON.stringify(i)},c=await Qe(()=>fetch(r,s));if(c.ok){const d=await c.json();return Ye(d)}else throw await Je("Generate Auth Token",c)}function ir(e,{fid:t}){return`${ze(e)}/${t}/authTokens:generate`}/**
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
 */async function re(e,t=!1){let n;const r=await P(e.appConfig,o=>{if(!ot(o))throw S.create("not-registered");const i=o.authToken;if(!t&&dr(i))return o;if(i.requestStatus===1)return n=sr(e,t),o;{if(!navigator.onLine)throw S.create("app-offline");const s=lr(o);return n=cr(e,s),s}});return n?await n:r.authToken}async function sr(e,t){let n=await ye(e.appConfig);for(;n.authToken.requestStatus===1;)await Ze(100),n=await ye(e.appConfig);const r=n.authToken;return r.requestStatus===0?re(e,t):r}function ye(e){return P(e,t=>{if(!ot(t))throw S.create("not-registered");const n=t.authToken;return fr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function cr(e,t){try{const n=await or(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await B(e.appConfig,r),n}catch(n){if(Ge(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await B(e.appConfig,r)}throw n}}function ot(e){return e!==void 0&&e.registrationStatus===2}function dr(e){return e.requestStatus===2&&!ur(e)}function ur(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ln}function lr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function fr(e){return e.requestStatus===1&&e.requestTime+Ue<Date.now()}/**
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
 */async function hr(e){const t=e,{installationEntry:n,registrationPromise:r}=await ne(t);return r?r.catch(console.error):re(t).catch(console.error),n.fid}/**
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
 */async function pr(e,t=!1){const n=e;return await gr(n),(await re(n,t)).token}async function gr(e){const{registrationPromise:t}=await ne(e);t&&await t}/**
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
 */function mr(e){if(!e||!e.options)throw K("App Configuration");if(!e.name)throw K("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw K(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function K(e){return S.create("missing-app-config-values",{valueName:e})}/**
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
 */const it="installations",br="installations-internal",wr=e=>{const t=e.getProvider("app").getImmediate(),n=mr(t),r=je(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yr=e=>{const t=e.getProvider("app").getImmediate(),n=je(t,it).getImmediate();return{getId:()=>hr(n),getToken:a=>pr(n,a)}};function Ir(){E(new v(it,wr,"PUBLIC")),E(new v(br,yr,"PRIVATE"))}Ir();b(Ke,ee);b(Ke,ee,"esm2017");/**
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
 */const vr="/firebase-messaging-sw.js",Tr="/firebase-cloud-messaging-push-scope",st="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Er="https://fcmregistrations.googleapis.com/v1",ct="google.c.a.c_id",_r="google.c.a.c_l",Sr="google.c.a.ts",Ar="google.c.a.e";var Ie;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ie||(Ie={}));/**
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
 */var O;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(O||(O={}));/**
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
 */function y(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Dr(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let o=0;o<r.length;++o)a[o]=r.charCodeAt(o);return a}/**
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
 */const U="fcm_token_details_db",Cr=5,ve="fcm_token_object_Store";async function kr(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(U))return null;let t=null;return(await N(U,Cr,{upgrade:async(r,a,o,i)=>{var s;if(a<2||!r.objectStoreNames.contains(ve))return;const c=i.objectStore(ve),d=await c.index("fcmSenderId").get(e);if(await c.clear(),!!d){if(a===2){const u=d;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(s=u.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:y(u.vapidKey)}}}else if(a===3){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:y(u.auth),p256dh:y(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:y(u.vapidKey)}}}else if(a===4){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:y(u.auth),p256dh:y(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:y(u.vapidKey)}}}}}})).close(),await F(U),await F("fcm_vapid_details_db"),await F("undefined"),Or(t)?t:null}function Or(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Mr="firebase-messaging-database",Rr=1,M="firebase-messaging-store";let W=null;function dt(){return W||(W=N(Mr,Rr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(M)}}})),W}async function Br(e){const t=ut(e),r=await(await dt()).transaction(M).objectStore(M).get(t);if(r)return r;{const a=await kr(e.appConfig.senderId);if(a)return await ae(e,a),a}}async function ae(e,t){const n=ut(e),a=(await dt()).transaction(M,"readwrite");return await a.objectStore(M).put(t,n),await a.done,t}function ut({appConfig:e}){return e.appId}/**
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
 */const Nr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},g=new R("messaging","Messaging",Nr);/**
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
 */async function $r(e,t){const n=await ie(e),r=lt(t),a={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(oe(e.appConfig),a)).json()}catch(i){throw g.create("token-subscribe-failed",{errorInfo:i?.toString()})}if(o.error){const i=o.error.message;throw g.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw g.create("token-subscribe-no-token");return o.token}async function Pr(e,t){const n=await ie(e),r=lt(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${oe(e.appConfig)}/${t.token}`,a)).json()}catch(i){throw g.create("token-update-failed",{errorInfo:i?.toString()})}if(o.error){const i=o.error.message;throw g.create("token-update-failed",{errorInfo:i})}if(!o.token)throw g.create("token-update-no-token");return o.token}async function Lr(e,t){const n=await ie(e),r={method:"DELETE",headers:n};try{const o=await(await fetch(`${oe(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw g.create("token-unsubscribe-failed",{errorInfo:i})}}catch(a){throw g.create("token-unsubscribe-failed",{errorInfo:a?.toString()})}}function oe({projectId:e}){return`${Er}/projects/${e}/registrations`}async function ie({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function lt({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const a={web:{endpoint:n,auth:t,p256dh:e}};return r!==st&&(a.web.applicationPubKey=r),a}/**
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
 */const xr=7*24*60*60*1e3;async function Fr(e){const t=await Hr(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:y(t.getKey("auth")),p256dh:y(t.getKey("p256dh"))},r=await Br(e.firebaseDependencies);if(r){if(Vr(r.subscriptionOptions,n))return Date.now()>=r.createTime+xr?jr(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Lr(e.firebaseDependencies,r.token)}catch(a){console.warn(a)}return Te(e.firebaseDependencies,n)}else return Te(e.firebaseDependencies,n)}async function jr(e,t){try{const n=await Pr(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await ae(e.firebaseDependencies,r),n}catch(n){throw n}}async function Te(e,t){const r={token:await $r(e,t),createTime:Date.now(),subscriptionOptions:t};return await ae(e,r),r.token}async function Hr(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Dr(t)})}function Vr(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,a=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&a&&o}/**
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
 */function Ee(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Kr(t,e),Ur(t,e),Wr(t,e),t}function Kr(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const a=t.notification.image;a&&(e.notification.image=a);const o=t.notification.icon;o&&(e.notification.icon=o)}function Ur(e,t){!t.data||(e.data=t.data)}function Wr(e,t){var n,r,a,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(a=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&a!==void 0?a:(o=t.notification)===null||o===void 0?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function qr(e){return typeof e=="object"&&!!e&&ct in e}/**
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
 */Gr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Gr(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function zr(e){if(!e||!e.options)throw q("App Configuration Object");if(!e.name)throw q("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw q(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function q(e){return g.create("missing-app-config-values",{valueName:e})}/**
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
 */class Yr{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=zr(t);this.firebaseDependencies={app:t,appConfig:a,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Jr(e){try{e.swRegistration=await navigator.serviceWorker.register(vr,{scope:Tr}),e.swRegistration.update().catch(()=>{})}catch(t){throw g.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}/**
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
 */async function Xr(e,t){if(!t&&!e.swRegistration&&await Jr(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw g.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Qr(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=st)}/**
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
 */async function Zr(e,t){if(!navigator)throw g.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw g.create("permission-blocked");return await Qr(e,t?.vapidKey),await Xr(e,t?.serviceWorkerRegistration),Fr(e)}/**
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
 */async function ea(e,t,n){const r=ta(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ct],message_name:n[_r],message_time:n[Sr],message_device_time:Math.floor(Date.now()/1e3)})}function ta(e){switch(e){case O.NOTIFICATION_CLICKED:return"notification_open";case O.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function na(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===O.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ee(n)):e.onMessageHandler.next(Ee(n)));const r=n.data;qr(r)&&r[Ar]==="1"&&await ea(e,n.messageType,r)}const _e="@firebase/messaging",Se="0.12.14";/**
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
 */const ra=e=>{const t=new Yr(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>na(t,n)),t},aa=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Zr(t,r)}};function oa(){E(new v("messaging",ra,"PUBLIC")),E(new v("messaging-internal",aa,"PRIVATE")),b(_e,Se),b(_e,Se,"esm2017")}oa();/**
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
 */const Ae="analytics",ia="firebase_id",sa="origin",ca=60*1e3,da="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",se="https://www.googletagmanager.com/gtag/js";/**
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
 */const f=new Le("@firebase/analytics");/**
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
 */const ua={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},m=new R("analytics","Analytics",ua);/**
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
 */function la(e){if(!e.startsWith(se)){const t=m.create("invalid-gtag-resource",{gtagURL:e});return f.warn(t.message),""}return e}function ft(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function fa(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ha(e,t){const n=fa("firebase-js-sdk-policy",{createScriptURL:la}),r=document.createElement("script"),a=`${se}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function pa(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ga(e,t,n,r,a,o){const i=r[a];try{if(i)await t[i];else{const c=(await ft(n)).find(d=>d.measurementId===a);c&&await t[c.appId]}}catch(s){f.error(s)}e("config",a,o)}async function ma(e,t,n,r,a){try{let o=[];if(a&&a.send_to){let i=a.send_to;Array.isArray(i)||(i=[i]);const s=await ft(n);for(const c of i){const d=s.find(h=>h.measurementId===c),u=d&&t[d.appId];if(u)o.push(u);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,a||{})}catch(o){f.error(o)}}function ba(e,t,n,r){async function a(o,...i){try{if(o==="event"){const[s,c]=i;await ma(e,t,n,s,c)}else if(o==="config"){const[s,c]=i;await ga(e,t,n,r,s,c)}else if(o==="consent"){const[s,c]=i;e("consent",s,c)}else if(o==="get"){const[s,c,d]=i;e("get",s,c,d)}else if(o==="set"){const[s]=i;e("set",s)}else e(o,...i)}catch(s){f.error(s)}}return a}function wa(e,t,n,r,a){let o=function(...i){window[r].push(arguments)};return window[a]&&typeof window[a]=="function"&&(o=window[a]),window[a]=ba(o,e,t,n),{gtagCore:o,wrappedGtag:window[a]}}function ya(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(se)&&n.src.includes(e))return n;return null}/**
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
 */const Ia=30,va=1e3;class Ta{constructor(t={},n=va){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ht=new Ta;function Ea(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function _a(e){var t;const{appId:n,apiKey:r}=e,a={method:"GET",headers:Ea(r)},o=da.replace("{app-id}",n),i=await fetch(o,a);if(i.status!==200&&i.status!==304){let s="";try{const c=await i.json();!((t=c.error)===null||t===void 0)&&t.message&&(s=c.error.message)}catch{}throw m.create("config-fetch-failed",{httpStatus:i.status,responseMessage:s})}return i.json()}async function Sa(e,t=ht,n){const{appId:r,apiKey:a,measurementId:o}=e.options;if(!r)throw m.create("no-app-id");if(!a){if(o)return{measurementId:o,appId:r};throw m.create("no-api-key")}const i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Ca;return setTimeout(async()=>{s.abort()},n!==void 0?n:ca),pt({appId:r,apiKey:a,measurementId:o},i,s,t)}async function pt(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=ht){var o;const{appId:i,measurementId:s}=e;try{await Aa(r,t)}catch(c){if(s)return f.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:s};throw c}try{const c=await _a(e);return a.deleteThrottleMetadata(i),c}catch(c){const d=c;if(!Da(d)){if(a.deleteThrottleMetadata(i),s)return f.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:i,measurementId:s};throw c}const u=Number((o=d?.customData)===null||o===void 0?void 0:o.httpStatus)===503?ce(n,a.intervalMillis,Ia):ce(n,a.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return a.setThrottleMetadata(i,h),f.debug(`Calling attemptFetch again in ${u} millis`),pt(e,h,r,a)}}function Aa(e,t){return new Promise((n,r)=>{const a=Math.max(t-Date.now(),0),o=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(o),r(m.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Da(e){if(!(e instanceof D)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ca{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ka(e,t,n,r,a){if(a&&a.global){e("event",n,r);return}else{const o=await t,i=Object.assign(Object.assign({},r),{send_to:o});e("event",n,i)}}/**
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
 */async function Oa(){if($e())try{await Pe()}catch(e){return f.warn(m.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return f.warn(m.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ma(e,t,n,r,a,o,i){var s;const c=Sa(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&f.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>f.error(p)),t.push(c);const d=Oa().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,d]);ya(o)||ha(o,u.measurementId),a("js",new Date);const w=(s=i?.config)!==null&&s!==void 0?s:{};return w[sa]="firebase",w.update=!0,h!=null&&(w[ia]=h),a("config",u.measurementId,w),u.measurementId}/**
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
 */class Ra{constructor(t){this.app=t}_delete(){return delete C[this.app.options.appId],Promise.resolve()}}let C={},De=[];const Ce={};let G="dataLayer",Ba="gtag",ke,gt,Oe=!1;function Na(){const e=[];if(Tt()&&e.push("This is a browser extension environment."),Et()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,a)=>`(${a+1}) ${r}`).join(" "),n=m.create("invalid-analytics-context",{errorInfo:t});f.warn(n.message)}}function $a(e,t,n){Na();const r=e.options.appId;if(!r)throw m.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)f.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw m.create("no-api-key");if(C[r]!=null)throw m.create("already-exists",{id:r});if(!Oe){pa(G);const{wrappedGtag:o,gtagCore:i}=wa(C,De,Ce,G,Ba);gt=o,ke=i,Oe=!0}return C[r]=Ma(e,De,Ce,t,ke,G,n),new Ra(e)}function Pa(e,t,n,r){e=Mt(e),ka(gt,C[e.app.options.appId],t,n,r).catch(a=>f.error(a))}const Me="@firebase/analytics",Re="0.10.10";function La(){E(new v(Ae,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return $a(r,a,n)},"PUBLIC")),E(new v("analytics-internal",e,"PRIVATE")),b(Me,Re),b(Me,Re,"esm2017");function e(t){try{const n=t.getProvider(Ae).getImmediate();return{logEvent:(r,a,o)=>Pa(n,r,a,o)}}catch(n){throw m.create("interop-component-reg-failed",{reason:n})}}}La();var Fa=bt(async()=>{try{Notification.permission}catch(e){console.error("Erro ao inicializar o Firebase:",e)}});export{Fa as default};
