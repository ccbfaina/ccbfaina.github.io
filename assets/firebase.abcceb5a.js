import{b as wt}from"./index.78d24e34.js";/**
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
 */const Ne=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},yt=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((a&31)<<6|i&63)}else if(a>239&&a<365){const i=e[n++],o=e[n++],s=e[n++],c=((a&7)<<18|(i&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((a&15)<<12|(i&63)<<6|o&63)}}return t.join("")},It={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const i=e[a],o=a+1<e.length,s=o?e[a+1]:0,c=a+2<e.length,d=c?e[a+2]:0,l=i>>2,h=(i&3)<<4|s>>4;let w=(s&15)<<2|d>>6,p=d&63;c||(p=64,o||(w=64)),r.push(n[l],n[h],n[w],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ne(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const i=n[e.charAt(a++)],s=a<e.length?n[e.charAt(a)]:0;++a;const d=a<e.length?n[e.charAt(a)]:64;++a;const h=a<e.length?n[e.charAt(a)]:64;if(++a,i==null||s==null||d==null||h==null)throw new vt;const w=i<<2|s>>4;if(r.push(w),d!==64){const p=s<<4&240|d>>2;if(r.push(p),h!==64){const bt=d<<6&192|h;r.push(bt)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tt=function(e){const t=Ne(e);return It.encodeByteArray(t,!0)},$e=function(e){return Tt(e).replace(/\./g,"")};function Et(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Pe(){try{return typeof indexedDB=="object"}catch{return!1}}function Le(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var i;t(((i=a.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function _t(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const St="FirebaseError";class D extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=St,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},a=`${this.service}/${t}`,i=this.errors[t],o=i?At(i,r):"Error",s=`${this.serviceName}: ${o} (${a}).`;return new D(a,s,r)}}function At(e,t){return e.replace(Dt,(n,r)=>{const a=t[r];return a!=null?String(a):`<${r}?>`})}const Dt=/\{\$([^}]+)}/g;/**
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
 */const Ct=1e3,kt=2,Ot=4*60*60*1e3,Mt=.5;function ce(e,t=Ct,n=kt){const r=t*Math.pow(n,e),a=Math.round(Mt*r*(Math.random()-.5)*2);return Math.min(Ot,r+a)}/**
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
 */function Rt(e){return e&&e._delegate?e._delegate:e}class v{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var u;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u||(u={}));const Bt={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Nt=u.INFO,$t={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},Pt=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),a=$t[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xe{constructor(t){this.name=t,this._logLevel=Nt,this._logHandler=Pt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}const Lt=(e,t)=>t.some(n=>e instanceof n);let de,le;function xt(){return de||(de=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ft(){return le||(le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fe=new WeakMap,z=new WeakMap,je=new WeakMap,L=new WeakMap,Q=new WeakMap;function jt(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(I(e.result)),a()},o=()=>{r(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Fe.set(n,e)}).catch(()=>{}),Q.set(t,e),t}function Ht(e){if(z.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),a()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});z.set(e,t)}let Y={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return z.get(e);if(t==="objectStoreNames")return e.objectStoreNames||je.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vt(e){Y=e(Y)}function Ut(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(x(this),t,...n);return je.set(r,t.sort?t.sort():[t]),I(r)}:Ft().includes(e)?function(...t){return e.apply(x(this),t),I(Fe.get(this))}:function(...t){return I(e.apply(x(this),t))}}function Kt(e){return typeof e=="function"?Ut(e):(e instanceof IDBTransaction&&Ht(e),Lt(e,xt())?new Proxy(e,Y):e)}function I(e){if(e instanceof IDBRequest)return jt(e);if(L.has(e))return L.get(e);const t=Kt(e);return t!==e&&(L.set(e,t),Q.set(t,e)),t}const x=e=>Q.get(e);function N(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=I(o);return r&&o.addEventListener("upgradeneeded",c=>{r(I(o.result),c.oldVersion,c.newVersion,I(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{i&&c.addEventListener("close",()=>i()),a&&c.addEventListener("versionchange",d=>a(d.oldVersion,d.newVersion,d))}).catch(()=>{}),s}function F(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),I(n).then(()=>{})}const Wt=["get","getKey","getAll","getAllKeys","count"],qt=["put","add","delete","clear"],j=new Map;function ue(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(j.get(t))return j.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=qt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Wt.includes(n)))return;const i=async function(o,...s){const c=this.transaction(o,a?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(s.shift())),(await Promise.all([d[n](...s),a&&c.done]))[0]};return j.set(t,i),i}Vt(e=>({...e,get:(t,n,r)=>ue(t,n)||e.get(t,n,r),has:(t,n)=>!!ue(t,n)||e.has(t,n)}));/**
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
 */class Gt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zt(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zt(e){const t=e.getComponent();return t?.type==="VERSION"}const J="@firebase/app",fe="0.11.3";/**
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
 */const T=new xe("@firebase/app"),Yt="@firebase/app-compat",Jt="@firebase/analytics-compat",Xt="@firebase/analytics",Qt="@firebase/app-check-compat",Zt="@firebase/app-check",en="@firebase/auth",tn="@firebase/auth-compat",nn="@firebase/database",rn="@firebase/data-connect",an="@firebase/database-compat",on="@firebase/functions",sn="@firebase/functions-compat",cn="@firebase/installations",dn="@firebase/installations-compat",ln="@firebase/messaging",un="@firebase/messaging-compat",fn="@firebase/performance",hn="@firebase/performance-compat",pn="@firebase/remote-config",gn="@firebase/remote-config-compat",mn="@firebase/storage",bn="@firebase/storage-compat",wn="@firebase/firestore",yn="@firebase/vertexai",In="@firebase/firestore-compat",vn="firebase",Tn={[J]:"fire-core",[Yt]:"fire-core-compat",[Xt]:"fire-analytics",[Jt]:"fire-analytics-compat",[Zt]:"fire-app-check",[Qt]:"fire-app-check-compat",[en]:"fire-auth",[tn]:"fire-auth-compat",[nn]:"fire-rtdb",[rn]:"fire-data-connect",[an]:"fire-rtdb-compat",[on]:"fire-fn",[sn]:"fire-fn-compat",[cn]:"fire-iid",[dn]:"fire-iid-compat",[ln]:"fire-fcm",[un]:"fire-fcm-compat",[fn]:"fire-perf",[hn]:"fire-perf-compat",[pn]:"fire-rc",[gn]:"fire-rc-compat",[mn]:"fire-gcs",[bn]:"fire-gcs-compat",[wn]:"fire-fst",[In]:"fire-fst-compat",[yn]:"fire-vertex","fire-js":"fire-js",[vn]:"fire-js-all"};/**
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
 */const En=new Map,_n=new Map,he=new Map;function pe(e,t){try{e.container.addComponent(t)}catch(n){T.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function E(e){const t=e.name;if(he.has(t))return T.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of En.values())pe(n,e);for(const n of _n.values())pe(n,e);return!0}function He(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Sn={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Z=new R("app","Firebase",Sn);function b(e,t,n){var r;let a=(r=Tn[e])!==null&&r!==void 0?r:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const s=[`Unable to register library "${a}" with version "${t}":`];i&&s.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),T.warn(s.join(" "));return}E(new v(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const An="firebase-heartbeat-database",Dn=1,k="firebase-heartbeat-store";let H=null;function Ve(){return H||(H=N(An,Dn,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(k)}catch(n){console.warn(n)}}}}).catch(e=>{throw Z.create("idb-open",{originalErrorMessage:e.message})})),H}async function Cn(e){try{const n=(await Ve()).transaction(k),r=await n.objectStore(k).get(Ue(e));return await n.done,r}catch(t){if(t instanceof D)T.warn(t.message);else{const n=Z.create("idb-get",{originalErrorMessage:t?.message});T.warn(n.message)}}}async function ge(e,t){try{const r=(await Ve()).transaction(k,"readwrite");await r.objectStore(k).put(t,Ue(e)),await r.done}catch(n){if(n instanceof D)T.warn(n.message);else{const r=Z.create("idb-set",{originalErrorMessage:n?.message});T.warn(r.message)}}}function Ue(e){return`${e.name}!${e.options.appId}`}/**
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
 */const kn=1024,On=30;class Mn{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=me();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:a}),this._heartbeatsCache.heartbeats.length>On){const o=Nn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){T.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=me(),{heartbeatsToSend:r,unsentEntries:a}=Rn(this._heartbeatsCache.heartbeats),i=$e(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return T.warn(n),""}}}function me(){return new Date().toISOString().substring(0,10)}function Rn(e,t=kn){const n=[];let r=e.slice();for(const a of e){const i=n.find(o=>o.agent===a.agent);if(i){if(i.dates.push(a.date),be(n)>t){i.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pe()?Le().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return ge(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return ge(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function be(e){return $e(JSON.stringify({version:2,heartbeats:e})).length}function Nn(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function $n(e){E(new v("platform-logger",t=>new Gt(t),"PRIVATE")),E(new v("heartbeat",t=>new Mn(t),"PRIVATE")),b(J,fe,e),b(J,fe,"esm2017"),b("fire-js","")}$n("");var Pn="firebase",Ln="11.5.0";/**
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
 */b(Pn,Ln,"app");const Ke="@firebase/installations",ee="0.6.13";/**
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
 */const We=1e4,qe=`w:${ee}`,Ge="FIS_v2",xn="https://firebaseinstallations.googleapis.com/v1",Fn=60*60*1e3,jn="installations",Hn="Installations";/**
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
 */const Vn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},S=new R(jn,Hn,Vn);function ze(e){return e instanceof D&&e.code.includes("request-failed")}/**
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
 */function Ye({projectId:e}){return`${xn}/projects/${e}/installations`}function Je(e){return{token:e.token,requestStatus:2,expiresIn:Kn(e.expiresIn),creationTime:Date.now()}}async function Xe(e,t){const r=(await t.json()).error;return S.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Qe({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Un(e,{refreshToken:t}){const n=Qe(e);return n.append("Authorization",Wn(t)),n}async function Ze(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Kn(e){return Number(e.replace("s","000"))}function Wn(e){return`${Ge} ${e}`}/**
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
 */async function qn({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ye(e),a=Qe(e),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&a.append("x-firebase-client",d)}const o={fid:n,authVersion:Ge,appId:e.appId,sdkVersion:qe},s={method:"POST",headers:a,body:JSON.stringify(o)},c=await Ze(()=>fetch(r,s));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Je(d.authToken)}}else throw await Xe("Create Installation",c)}/**
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
 */function et(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Gn(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zn=/^[cdef][\w-]{21}$/,X="";function Yn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Jn(e);return zn.test(n)?n:X}catch{return X}}function Jn(e){return Gn(e).substr(0,22)}/**
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
 */const tt=new Map;function nt(e,t){const n=$(e);rt(n,t),Xn(n,t)}function rt(e,t){const n=tt.get(e);if(!!n)for(const r of n)r(t)}function Xn(e,t){const n=Qn();n&&n.postMessage({key:e,fid:t}),Zn()}let _=null;function Qn(){return!_&&"BroadcastChannel"in self&&(_=new BroadcastChannel("[Firebase] FID Change"),_.onmessage=e=>{rt(e.data.key,e.data.fid)}),_}function Zn(){tt.size===0&&_&&(_.close(),_=null)}/**
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
 */const er="firebase-installations-database",tr=1,A="firebase-installations-store";let V=null;function te(){return V||(V=N(er,tr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(A)}}})),V}async function B(e,t){const n=$(e),a=(await te()).transaction(A,"readwrite"),i=a.objectStore(A),o=await i.get(n);return await i.put(t,n),await a.done,(!o||o.fid!==t.fid)&&nt(e,t.fid),t}async function at(e){const t=$(e),r=(await te()).transaction(A,"readwrite");await r.objectStore(A).delete(t),await r.done}async function P(e,t){const n=$(e),a=(await te()).transaction(A,"readwrite"),i=a.objectStore(A),o=await i.get(n),s=t(o);return s===void 0?await i.delete(n):await i.put(s,n),await a.done,s&&(!o||o.fid!==s.fid)&&nt(e,s.fid),s}/**
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
 */async function ne(e){let t;const n=await P(e.appConfig,r=>{const a=nr(r),i=rr(e,a);return t=i.registrationPromise,i.installationEntry});return n.fid===X?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function nr(e){const t=e||{fid:Yn(),registrationStatus:0};return it(t)}function rr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(S.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ar(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ir(e)}:{installationEntry:t}}async function ar(e,t){try{const n=await qn(e,t);return B(e.appConfig,n)}catch(n){throw ze(n)&&n.customData.serverCode===409?await at(e.appConfig):await B(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ir(e){let t=await we(e.appConfig);for(;t.registrationStatus===1;)await et(100),t=await we(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ne(e);return r||n}return t}function we(e){return P(e,t=>{if(!t)throw S.create("installation-not-found");return it(t)})}function it(e){return or(e)?{fid:e.fid,registrationStatus:0}:e}function or(e){return e.registrationStatus===1&&e.registrationTime+We<Date.now()}/**
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
 */async function sr({appConfig:e,heartbeatServiceProvider:t},n){const r=cr(e,n),a=Un(e,n),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&a.append("x-firebase-client",d)}const o={installation:{sdkVersion:qe,appId:e.appId}},s={method:"POST",headers:a,body:JSON.stringify(o)},c=await Ze(()=>fetch(r,s));if(c.ok){const d=await c.json();return Je(d)}else throw await Xe("Generate Auth Token",c)}function cr(e,{fid:t}){return`${Ye(e)}/${t}/authTokens:generate`}/**
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
 */async function re(e,t=!1){let n;const r=await P(e.appConfig,i=>{if(!ot(i))throw S.create("not-registered");const o=i.authToken;if(!t&&ur(o))return i;if(o.requestStatus===1)return n=dr(e,t),i;{if(!navigator.onLine)throw S.create("app-offline");const s=hr(i);return n=lr(e,s),s}});return n?await n:r.authToken}async function dr(e,t){let n=await ye(e.appConfig);for(;n.authToken.requestStatus===1;)await et(100),n=await ye(e.appConfig);const r=n.authToken;return r.requestStatus===0?re(e,t):r}function ye(e){return P(e,t=>{if(!ot(t))throw S.create("not-registered");const n=t.authToken;return pr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lr(e,t){try{const n=await sr(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await B(e.appConfig,r),n}catch(n){if(ze(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await at(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await B(e.appConfig,r)}throw n}}function ot(e){return e!==void 0&&e.registrationStatus===2}function ur(e){return e.requestStatus===2&&!fr(e)}function fr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Fn}function hr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function pr(e){return e.requestStatus===1&&e.requestTime+We<Date.now()}/**
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
 */async function gr(e){const t=e,{installationEntry:n,registrationPromise:r}=await ne(t);return r?r.catch(console.error):re(t).catch(console.error),n.fid}/**
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
 */async function mr(e,t=!1){const n=e;return await br(n),(await re(n,t)).token}async function br(e){const{registrationPromise:t}=await ne(e);t&&await t}/**
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
 */function wr(e){if(!e||!e.options)throw U("App Configuration");if(!e.name)throw U("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw U(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function U(e){return S.create("missing-app-config-values",{valueName:e})}/**
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
 */const st="installations",yr="installations-internal",Ir=e=>{const t=e.getProvider("app").getImmediate(),n=wr(t),r=He(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vr=e=>{const t=e.getProvider("app").getImmediate(),n=He(t,st).getImmediate();return{getId:()=>gr(n),getToken:a=>mr(n,a)}};function Tr(){E(new v(st,Ir,"PUBLIC")),E(new v(yr,vr,"PRIVATE"))}Tr();b(Ke,ee);b(Ke,ee,"esm2017");/**
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
 */const Er="/firebase-messaging-sw.js",_r="/firebase-cloud-messaging-push-scope",ct="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Sr="https://fcmregistrations.googleapis.com/v1",dt="google.c.a.c_id",Ar="google.c.a.c_l",Dr="google.c.a.ts",Cr="google.c.a.e",Ie=1e4;var ve;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ve||(ve={}));/**
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
 */function y(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function kr(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let i=0;i<r.length;++i)a[i]=r.charCodeAt(i);return a}/**
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
 */const K="fcm_token_details_db",Or=5,Te="fcm_token_object_Store";async function Mr(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(K))return null;let t=null;return(await N(K,Or,{upgrade:async(r,a,i,o)=>{var s;if(a<2||!r.objectStoreNames.contains(Te))return;const c=o.objectStore(Te),d=await c.index("fcmSenderId").get(e);if(await c.clear(),!!d){if(a===2){const l=d;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(s=l.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:y(l.vapidKey)}}}else if(a===3){const l=d;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:y(l.auth),p256dh:y(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:y(l.vapidKey)}}}else if(a===4){const l=d;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:y(l.auth),p256dh:y(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:y(l.vapidKey)}}}}}})).close(),await F(K),await F("fcm_vapid_details_db"),await F("undefined"),Rr(t)?t:null}function Rr(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Br="firebase-messaging-database",Nr=1,M="firebase-messaging-store";let W=null;function lt(){return W||(W=N(Br,Nr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(M)}}})),W}async function $r(e){const t=ut(e),r=await(await lt()).transaction(M).objectStore(M).get(t);if(r)return r;{const a=await Mr(e.appConfig.senderId);if(a)return await ae(e,a),a}}async function ae(e,t){const n=ut(e),a=(await lt()).transaction(M,"readwrite");return await a.objectStore(M).put(t,n),await a.done,t}function ut({appConfig:e}){return e.appId}/**
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
 */const Pr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},g=new R("messaging","Messaging",Pr);/**
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
 */async function Lr(e,t){const n=await oe(e),r=ft(t),a={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(ie(e.appConfig),a)).json()}catch(o){throw g.create("token-subscribe-failed",{errorInfo:o?.toString()})}if(i.error){const o=i.error.message;throw g.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw g.create("token-subscribe-no-token");return i.token}async function xr(e,t){const n=await oe(e),r=ft(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${ie(e.appConfig)}/${t.token}`,a)).json()}catch(o){throw g.create("token-update-failed",{errorInfo:o?.toString()})}if(i.error){const o=i.error.message;throw g.create("token-update-failed",{errorInfo:o})}if(!i.token)throw g.create("token-update-no-token");return i.token}async function Fr(e,t){const n=await oe(e),r={method:"DELETE",headers:n};try{const i=await(await fetch(`${ie(e.appConfig)}/${t}`,r)).json();if(i.error){const o=i.error.message;throw g.create("token-unsubscribe-failed",{errorInfo:o})}}catch(a){throw g.create("token-unsubscribe-failed",{errorInfo:a?.toString()})}}function ie({projectId:e}){return`${Sr}/projects/${e}/registrations`}async function oe({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ft({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const a={web:{endpoint:n,auth:t,p256dh:e}};return r!==ct&&(a.web.applicationPubKey=r),a}/**
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
 */const jr=7*24*60*60*1e3;async function Hr(e){const t=await Ur(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:y(t.getKey("auth")),p256dh:y(t.getKey("p256dh"))},r=await $r(e.firebaseDependencies);if(r){if(Kr(r.subscriptionOptions,n))return Date.now()>=r.createTime+jr?Vr(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Fr(e.firebaseDependencies,r.token)}catch(a){console.warn(a)}return Ee(e.firebaseDependencies,n)}else return Ee(e.firebaseDependencies,n)}async function Vr(e,t){try{const n=await xr(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await ae(e.firebaseDependencies,r),n}catch(n){throw n}}async function Ee(e,t){const r={token:await Lr(e,t),createTime:Date.now(),subscriptionOptions:t};return await ae(e,r),r.token}async function Ur(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:kr(t)})}function Kr(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,a=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&a&&i}/**
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
 */function _e(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Wr(t,e),qr(t,e),Gr(t,e),t}function Wr(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const a=t.notification.image;a&&(e.notification.image=a);const i=t.notification.icon;i&&(e.notification.icon=i)}function qr(e,t){!t.data||(e.data=t.data)}function Gr(e,t){var n,r,a,i,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(a=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&a!==void 0?a:(i=t.notification)===null||i===void 0?void 0:i.click_action;s&&(e.fcmOptions.link=s);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function zr(e){return typeof e=="object"&&!!e&&dt in e}/**
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
 */Yr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Yr(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function Jr(e){if(!e||!e.options)throw q("App Configuration Object");if(!e.name)throw q("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw q(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function q(e){return g.create("missing-app-config-values",{valueName:e})}/**
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
 */class Xr{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=Jr(t);this.firebaseDependencies={app:t,appConfig:a,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Qr(e){try{e.swRegistration=await navigator.serviceWorker.register(Er,{scope:_r}),e.swRegistration.update().catch(()=>{}),await Zr(e.swRegistration)}catch(t){throw g.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function Zr(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Ie} ms`)),Ie),a=e.installing||e.waiting;e.active?(clearTimeout(r),t()):a?a.onstatechange=i=>{var o;((o=i.target)===null||o===void 0?void 0:o.state)==="activated"&&(a.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function ea(e,t){if(!t&&!e.swRegistration&&await Qr(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw g.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function ta(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=ct)}/**
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
 */async function na(e,t){if(!navigator)throw g.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw g.create("permission-blocked");return await ta(e,t?.vapidKey),await ea(e,t?.serviceWorkerRegistration),Hr(e)}/**
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
 */async function ra(e,t,n){const r=aa(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[dt],message_name:n[Ar],message_time:n[Dr],message_device_time:Math.floor(Date.now()/1e3)})}function aa(e){switch(e){case O.NOTIFICATION_CLICKED:return"notification_open";case O.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function ia(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===O.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(_e(n)):e.onMessageHandler.next(_e(n)));const r=n.data;zr(r)&&r[Cr]==="1"&&await ra(e,n.messageType,r)}const Se="@firebase/messaging",Ae="0.12.17";/**
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
 */const oa=e=>{const t=new Xr(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>ia(t,n)),t},sa=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>na(t,r)}};function ca(){E(new v("messaging",oa,"PUBLIC")),E(new v("messaging-internal",sa,"PRIVATE")),b(Se,Ae),b(Se,Ae,"esm2017")}ca();/**
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
 */const De="analytics",da="firebase_id",la="origin",ua=60*1e3,fa="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",se="https://www.googletagmanager.com/gtag/js";/**
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
 */const f=new xe("@firebase/analytics");/**
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
 */const ha={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},m=new R("analytics","Analytics",ha);/**
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
 */function pa(e){if(!e.startsWith(se)){const t=m.create("invalid-gtag-resource",{gtagURL:e});return f.warn(t.message),""}return e}function ht(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ga(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ma(e,t){const n=ga("firebase-js-sdk-policy",{createScriptURL:pa}),r=document.createElement("script"),a=`${se}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function ba(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function wa(e,t,n,r,a,i){const o=r[a];try{if(o)await t[o];else{const c=(await ht(n)).find(d=>d.measurementId===a);c&&await t[c.appId]}}catch(s){f.error(s)}e("config",a,i)}async function ya(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let o=a.send_to;Array.isArray(o)||(o=[o]);const s=await ht(n);for(const c of o){const d=s.find(h=>h.measurementId===c),l=d&&t[d.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(i){f.error(i)}}function Ia(e,t,n,r){async function a(i,...o){try{if(i==="event"){const[s,c]=o;await ya(e,t,n,s,c)}else if(i==="config"){const[s,c]=o;await wa(e,t,n,r,s,c)}else if(i==="consent"){const[s,c]=o;e("consent",s,c)}else if(i==="get"){const[s,c,d]=o;e("get",s,c,d)}else if(i==="set"){const[s]=o;e("set",s)}else e(i,...o)}catch(s){f.error(s)}}return a}function va(e,t,n,r,a){let i=function(...o){window[r].push(arguments)};return window[a]&&typeof window[a]=="function"&&(i=window[a]),window[a]=Ia(i,e,t,n),{gtagCore:i,wrappedGtag:window[a]}}function Ta(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(se)&&n.src.includes(e))return n;return null}/**
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
 */const Ea=30,_a=1e3;class Sa{constructor(t={},n=_a){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const pt=new Sa;function Aa(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Da(e){var t;const{appId:n,apiKey:r}=e,a={method:"GET",headers:Aa(r)},i=fa.replace("{app-id}",n),o=await fetch(i,a);if(o.status!==200&&o.status!==304){let s="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(s=c.error.message)}catch{}throw m.create("config-fetch-failed",{httpStatus:o.status,responseMessage:s})}return o.json()}async function Ca(e,t=pt,n){const{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw m.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw m.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Ma;return setTimeout(async()=>{s.abort()},n!==void 0?n:ua),gt({appId:r,apiKey:a,measurementId:i},o,s,t)}async function gt(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=pt){var i;const{appId:o,measurementId:s}=e;try{await ka(r,t)}catch(c){if(s)return f.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:s};throw c}try{const c=await Da(e);return a.deleteThrottleMetadata(o),c}catch(c){const d=c;if(!Oa(d)){if(a.deleteThrottleMetadata(o),s)return f.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:o,measurementId:s};throw c}const l=Number((i=d?.customData)===null||i===void 0?void 0:i.httpStatus)===503?ce(n,a.intervalMillis,Ea):ce(n,a.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return a.setThrottleMetadata(o,h),f.debug(`Calling attemptFetch again in ${l} millis`),gt(e,h,r,a)}}function ka(e,t){return new Promise((n,r)=>{const a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(i),r(m.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Oa(e){if(!(e instanceof D)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ma{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ra(e,t,n,r,a){if(a&&a.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function Ba(){if(Pe())try{await Le()}catch(e){return f.warn(m.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return f.warn(m.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Na(e,t,n,r,a,i,o){var s;const c=Ca(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&f.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>f.error(p)),t.push(c);const d=Ba().then(p=>{if(p)return r.getId()}),[l,h]=await Promise.all([c,d]);Ta(i)||ma(i,l.measurementId),a("js",new Date);const w=(s=o?.config)!==null&&s!==void 0?s:{};return w[la]="firebase",w.update=!0,h!=null&&(w[da]=h),a("config",l.measurementId,w),l.measurementId}/**
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
 */class $a{constructor(t){this.app=t}_delete(){return delete C[this.app.options.appId],Promise.resolve()}}let C={},Ce=[];const ke={};let G="dataLayer",Pa="gtag",Oe,mt,Me=!1;function La(){const e=[];if(Et()&&e.push("This is a browser extension environment."),_t()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,a)=>`(${a+1}) ${r}`).join(" "),n=m.create("invalid-analytics-context",{errorInfo:t});f.warn(n.message)}}function xa(e,t,n){La();const r=e.options.appId;if(!r)throw m.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)f.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw m.create("no-api-key");if(C[r]!=null)throw m.create("already-exists",{id:r});if(!Me){ba(G);const{wrappedGtag:i,gtagCore:o}=va(C,Ce,ke,G,Pa);mt=i,Oe=o,Me=!0}return C[r]=Na(e,Ce,ke,t,Oe,G,n),new $a(e)}function Fa(e,t,n,r){e=Rt(e),Ra(mt,C[e.app.options.appId],t,n,r).catch(a=>f.error(a))}const Re="@firebase/analytics",Be="0.10.12";function ja(){E(new v(De,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return xa(r,a,n)},"PUBLIC")),E(new v("analytics-internal",e,"PRIVATE")),b(Re,Be),b(Re,Be,"esm2017");function e(t){try{const n=t.getProvider(De).getImmediate();return{logEvent:(r,a,i)=>Fa(n,r,a,i)}}catch(n){throw m.create("interop-component-reg-failed",{reason:n})}}}ja();var Va=wt(async()=>{try{Notification.permission}catch(e){console.error("Erro ao inicializar o Firebase:",e)}});export{Va as default};
