import{x as it}from"./index.e00bdcb8.js";const Le=async(e,t)=>{"caches"in window?await(await caches.open("eventDataCache")).put(e,new Response(JSON.stringify(t))):console.warn("A API de Cache n\xE3o est\xE1 dispon\xEDvel neste ambiente.")},at=async e=>{const t=await caches.match(e);if(t)return await t.json()};function fe(e,t){for(const n in t)typeof t[n]=="object"&&t[n]!==null&&!Array.isArray(t[n])?e[n]=fe(e[n]||{},t[n]):e[n]=t[n];return e}async function Be(e){try{e&&Le("/data/data.json",e)}catch(t){console.log("Erro ao salvar local: ",t)}}async function ct(e){try{const n=await at("/data/data.json");console.log("Carregando dados da cache do PWA..."),fe(e,n),e.agenda.items=n.agenda.items.map(r=>(r.date=new Date(r.date),r.end=new Date(r.end),r.updated=r.updated?new Date(r.updated):new Date,r))}catch(t){console.info("Erro ao carregar cache!!!",t)}}function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:lt}=Object.prototype,{getPrototypeOf:de}=Object,K=(e=>t=>{const n=lt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>K(t)===e),X=e=>t=>typeof t===e,{isArray:B}=Array,j=X("undefined");function ut(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ve=C("ArrayBuffer");function ft(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ve(e.buffer),t}const dt=X("string"),A=X("function"),je=X("number"),G=e=>e!==null&&typeof e=="object",ht=e=>e===!0||e===!1,H=e=>{if(K(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},pt=C("Date"),mt=C("File"),wt=C("Blob"),yt=C("FileList"),bt=e=>G(e)&&A(e.pipe),gt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=K(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},Et=C("URLSearchParams"),[St,Rt,Ot,Tt]=["ReadableStream","Request","Response","Headers"].map(C),At=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function qe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const U=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ie=e=>!j(e)&&e!==U;function oe(){const{caseless:e}=Ie(this)&&this||{},t={},n=(r,s)=>{const o=e&&qe(t,s)||s;H(t[o])&&H(r)?t[o]=oe(t[o],r):H(r)?t[o]=oe({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&q(arguments[r],n);return t}const xt=(e,t,n,{allOwnKeys:r}={})=>(q(t,(s,o)=>{n&&A(s)?e[o]=ke(s,n):e[o]=s},{allOwnKeys:r}),e),Ct=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Dt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Nt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Pt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ft=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!je(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),_t=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Lt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Bt=C("HTMLFormElement"),kt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ee=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),vt=C("RegExp"),He=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};q(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},jt=e=>{He(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},It=()=>{},Ht=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Mt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const zt=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return q(r,(i,c)=>{const f=n(i,s+1);!j(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},$t=C("AsyncFunction"),Jt=e=>e&&(G(e)||A(e))&&A(e.then)&&A(e.catch),Me=((e,t)=>e?setImmediate:t?((n,r)=>(U.addEventListener("message",({source:s,data:o})=>{s===U&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),U.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",A(U.postMessage)),Vt=typeof queueMicrotask<"u"?queueMicrotask.bind(U):typeof process<"u"&&process.nextTick||Me;var a={isArray:B,isArrayBuffer:ve,isBuffer:ut,isFormData:gt,isArrayBufferView:ft,isString:dt,isNumber:je,isBoolean:ht,isObject:G,isPlainObject:H,isReadableStream:St,isRequest:Rt,isResponse:Ot,isHeaders:Tt,isUndefined:j,isDate:pt,isFile:mt,isBlob:wt,isRegExp:vt,isFunction:A,isStream:bt,isURLSearchParams:Et,isTypedArray:Ut,isFileList:yt,forEach:q,merge:oe,extend:xt,trim:At,stripBOM:Ct,inherits:Dt,toFlatObject:Nt,kindOf:K,kindOfTest:C,endsWith:Pt,toArray:Ft,forEachEntry:_t,matchAll:Lt,isHTMLForm:Bt,hasOwnProperty:Ee,hasOwnProp:Ee,reduceDescriptors:He,freezeMethods:jt,toObjectSet:qt,toCamelCase:kt,noop:It,toFiniteNumber:Ht,findKey:qe,global:U,isContextDefined:Ie,isSpecCompliantForm:Mt,toJSONObject:zt,isAsyncFn:$t,isThenable:Jt,setImmediate:Me,asap:Vt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const ze=m.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$e[e]={value:e}});Object.defineProperties(m,$e);Object.defineProperty(ze,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(ze);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var Wt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function Je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=Je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Kt(e){return a.isArray(e)&&!e.some(ie)}const Xt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,p){return!a.isUndefined(p[w])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!f&&a.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?f&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,w,p){let b=h;if(h&&!p&&typeof h=="object"){if(a.endsWith(w,"{}"))w=r?w:w.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&Kt(h)||(a.isFileList(h)||a.endsWith(w,"[]"))&&(b=a.toArray(h)))return w=Je(w),b.forEach(function(R,N){!(a.isUndefined(R)||R===null)&&t.append(i===!0?Se([w],N,o):i===null?w:w+"[]",l(R))}),!1}return ie(h)?!0:(t.append(Se(p,w,o),l(h)),!1)}const d=[],y=Object.assign(Xt,{defaultVisitor:u,convertValue:l,isVisitable:ie});function E(h,w){if(!a.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+w.join("."));d.push(h),a.forEach(h,function(b,S){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(S)?S.trim():S,w,y))===!0&&E(b,w?w.concat(S):[S])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function he(e,t){this._pairs=[],e&&Q(e,this,t)}const Ve=he.prototype;Ve.append=function(t,n){this._pairs.push([t,n])};Ve.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Gt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function We(e,t,n){if(!t)return e;const r=n&&n.encode||Gt;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new he(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Qt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var Oe=Qt,Ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zt=typeof URLSearchParams<"u"?URLSearchParams:he,Yt=typeof FormData<"u"?FormData:null,en=typeof Blob<"u"?Blob:null,tn={isBrowser:!0,classes:{URLSearchParams:Zt,FormData:Yt,Blob:en},protocols:["http","https","file","blob","url","data"]};const pe=typeof window<"u"&&typeof document<"u",ae=typeof navigator=="object"&&navigator||void 0,nn=pe&&(!ae||["ReactNative","NativeScript","NS"].indexOf(ae.product)<0),rn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),sn=pe&&window.location.href||"http://localhost";var on=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserWebWorkerEnv:rn,hasStandardBrowserEnv:nn,navigator:ae,origin:sn},Symbol.toStringTag,{value:"Module"})),O={...on,...tn};function an(e,t){return Q(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function cn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ln(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Xe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=ln(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(cn(r),s,n,0)}),n}return null}function un(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const me={transitional:Ke,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Xe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return an(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Q(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),un(t)):t}],transformResponse:[function(t){const n=this.transitional||me.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{me.headers[e]={}});var we=me;const fn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var dn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&fn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const Te=Symbol("internals");function v(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function hn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const pn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function mn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function wn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=v(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=M(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!pn(t))i(dn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=v(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return hn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=v(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=v(i),i){const c=a.findKey(r,i);c&&(!n||te(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||te(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=M(s),delete n[o];return}const c=t?mn(o):String(o).trim();c!==o&&delete n[o],n[c]=M(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Te]=this[Te]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=v(i);r[c]||(wn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Z);var x=Z;function ne(e,t){const n=this||we,r=t||n,s=x.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ge(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function Qe(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function yn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function bn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let d=o,y=0;for(;d!==s;)y+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const E=u&&l-u;return E?Math.round(y*1e3/E):void 0}}function gn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const J=(e,t,n=3)=>{let r=0;const s=bn(50,250);return gn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Ae=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},xe=e=>(...t)=>a.asap(()=>e(...t));var En=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,Sn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Rn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function On(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ze(e,t,n){let r=!Rn(t);return e&&(r||n==!1)?On(e,t):t}const Ce=e=>e instanceof x?{...e}:e;function _(e,t){t=t||{};const n={};function r(l,u,d,y){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:y},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d,y){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d,y)}else return r(l,u,d,y)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,d)=>s(Ce(l),Ce(u),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,y=d(e[u],t[u],u);a.isUndefined(y)&&d!==c||(n[u]=y)}),n}var Ye=e=>{const t=_({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=x.from(i),t.url=We(Ze(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&En(t.url))){const l=s&&o&&Sn.read(o);l&&i.set(s,l)}return t};const Tn=typeof XMLHttpRequest<"u";var An=Tn&&function(e){return new Promise(function(n,r){const s=Ye(e);let o=s.data;const i=x.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,d,y,E,h;function w(){E&&E(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function b(){if(!p)return;const R=x.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:R,config:e,request:p};Qe(function(F){n(F),w()},function(F){r(F),w()},T),p=null}"onloadend"in p?p.onloadend=b:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(b)},p.onabort=function(){!p||(r(new m("Request aborted",m.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||Ke;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),r(new m(N,T.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,p)),p=null},o===void 0&&i.setContentType(null),"setRequestHeader"in p&&a.forEach(i.toJSON(),function(N,T){p.setRequestHeader(T,N)}),a.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),c&&c!=="json"&&(p.responseType=s.responseType),l&&([y,h]=J(l,!0),p.addEventListener("progress",y)),f&&p.upload&&([d,E]=J(f),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=R=>{!p||(r(!R||R.type?new k(null,e,p):R),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=yn(s.url);if(S&&O.protocols.indexOf(S)===-1){r(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}p.send(o||null)})};const xn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof m?u:new k(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}};var Cn=xn;const Dn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Nn=async function*(e,t){for await(const n of Pn(e))yield*Dn(n,t)},Pn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},De=(e,t,n,r)=>{const s=Nn(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let d=u.byteLength;if(n){let y=o+=d;n(y)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",et=Y&&typeof ReadableStream=="function",Fn=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),tt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Un=et&&tt(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ne=64*1024,ce=et&&tt(()=>a.isReadableStream(new Response("").body)),V={stream:ce&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!V[t]&&(V[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const _n=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Fn(e)).byteLength},Ln=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??_n(t)};var Bn=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:y}=Ye(e);l=l?(l+"").toLowerCase():"text";let E=Cn([s,o&&o.toAbortSignal()],i),h;const w=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let p;try{if(f&&Un&&n!=="get"&&n!=="head"&&(p=await Ln(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),P;if(a.isFormData(r)&&(P=T.headers.get("content-type"))&&u.setContentType(P),T.body){const[F,I]=Ae(p,J(xe(f)));r=De(T.body,Ne,F,I)}}a.isString(d)||(d=d?"include":"omit");const b="credentials"in Request.prototype;h=new Request(t,{...y,signal:E,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:b?d:void 0});let S=await fetch(h);const R=ce&&(l==="stream"||l==="response");if(ce&&(c||R&&w)){const T={};["status","statusText","headers"].forEach(ge=>{T[ge]=S[ge]});const P=a.toFiniteNumber(S.headers.get("content-length")),[F,I]=c&&Ae(P,J(xe(c),!0))||[];S=new Response(De(S.body,Ne,F,()=>{I&&I(),w&&w()}),T)}l=l||"text";let N=await V[a.findKey(V,l)||"text"](S,e);return!R&&w&&w(),await new Promise((T,P)=>{Qe(T,P,{data:N,headers:x.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:h})})}catch(b){throw w&&w(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,h),{cause:b.cause||b}):m.from(b,b&&b.code,e,h)}});const le={http:Wt,xhr:An,fetch:Bn};a.forEach(le,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Pe=e=>`- ${e}`,kn=e=>a.isFunction(e)||e===null||e===!1;var nt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!kn(n)&&(r=le[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Pe).join(`
`):" "+Pe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:le};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Fe(e){return re(e),e.headers=x.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),nt.getAdapter(e.adapter||we.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=x.from(r.headers),r},function(r){return Ge(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=x.from(r.response.headers))),Promise.reject(r)})}const rt="1.8.4",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ue={};ee.transitional=function(t,n,r){function s(o,i){return"[Axios v"+rt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ue[i]&&(Ue[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};ee.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function vn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}var z={assertOptions:vn,validators:ee};const D=z.validators;class W{constructor(t){this.defaults=t,this.interceptors={request:new Oe,response:new Oe}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&z.assertOptions(r,{silentJSONParsing:D.transitional(D.boolean),forcedJSONParsing:D.transitional(D.boolean),clarifyTimeoutError:D.transitional(D.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:z.assertOptions(s,{encode:D.function,serialize:D.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),z.assertOptions(n,{baseUrl:D.spelling("baseURL"),withXsrfToken:D.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=x.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(f=f&&w.synchronous,c.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let u,d=0,y;if(!f){const h=[Fe.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,l),y=h.length,u=Promise.resolve(n);d<y;)u=u.then(h[d++],h[d++]);return u}y=c.length;let E=n;for(d=0;d<y;){const h=c[d++],w=c[d++];try{E=h(E)}catch(p){w.call(this,p);break}}try{u=Fe.call(this,E)}catch(h){return Promise.reject(h)}for(d=0,y=l.length;d<y;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=_(this.defaults,t);const n=Ze(t.baseURL,t.url,t.allowAbsoluteUrls);return We(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){W.prototype[t]=function(n,r){return this.request(_(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(_(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}W.prototype[t]=n(),W.prototype[t+"Form"]=n(!0)});var $=W;class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new ye(function(s){t=s}),cancel:t}}}var jn=ye;function qn(e){return function(n){return e.apply(null,n)}}function In(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});var Hn=ue;function st(e){const t=new $(e),n=ke($.prototype.request,t);return a.extend(n,$.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return st(_(e,s))},n}const g=st(we);g.Axios=$;g.CanceledError=k;g.CancelToken=jn;g.isCancel=Ge;g.VERSION=rt;g.toFormData=Q;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=qn;g.isAxiosError=In;g.mergeConfig=_;g.AxiosHeaders=x;g.formToJSON=e=>Xe(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=nt.getAdapter;g.HttpStatusCode=Hn;g.default=g;var Mn=g;const zn={},L=Mn.create(zn);function ot({baseURL:e,token:t}){L.defaults.baseURL=e,L.defaults.headers.Authorization=`${t}`}class be{constructor({href:t="",icon:n="",title:r="",description:s="",group:o="",autoSave:i=!1,fixed:c=!1}={}){this.href=t,this.icon=n,this.title=r,this.description=s,this.group=o,this.autoSave=i,this.fixed=c,this.validate()}validate(){if(!this.title)throw new Error("T\xEDtulo da tag n\xE3o pode estar vazio.")}toggleAutoSave(t){if(typeof t!="boolean")throw new Error("Valor de autoSave deve ser um booleano.");this.autoSave=t}toggleFixed(t){if(typeof t!="boolean")throw new Error("Valor de fixed deve ser um booleano.");this.fixed=t}getTagInfo(){return{href:this.href,icon:this.icon,title:this.title,description:this.description,group:this.group,autoSave:this.autoSave,fixed:this.fixed}}static create(t={}){return new be(t)}}const Qn=async(e,t,n=!0,r=!0)=>{t.href&&t.title&&!e.agenda.tags.some(s=>s.href===t.href||s.title===t.title)&&(r?e.agenda.tags.push(t):e.agenda.tags.unshift(t),n&&await Be(e))},$n=async e=>{const t="/data/tags.json",n=new Date().toISOString().replace(/\D/g,"");let r;try{r=await L.get(`${t}?v=${n}`)}catch{r=await L.get(t)}const{tags:s}=r.data||{};e.agenda.tags=s.map(o=>be.create(o)),await Be(e)},Jn=async e=>{try{e.agenda.token?(ot({baseURL:e.agenda.server,token:e.agenda.token}),e.agenda.items=[],await Vn(e),e.state.admin=!0):(await _e(e),e.state.admin=!1)}catch(t){console.info("Erro ao conectar no servidor: ",t.message),e.state.admin=!1,await _e(e)}try{await $n(e)}catch(t){console.log("Erro ao atualizar tags: ",t)}},_e=async e=>{ot({baseURL:"",token:""});const t="/data/data.json";try{const n=`${t}?v=${new Date().toISOString().replace(/\D/g,"")}`,{status:r,statusText:s,data:o}=await L.get(n);if(r===200){const i=o.eventos.items.map(c=>(c.date=new Date(c.date),c.end=new Date(c.end),c.updated=c.updated?new Date(c.updated):new Date,c));e.agenda.items=i,Le(t,e)}else console.error("Erro ao carregar dados do servidor:",s)}catch(n){console.error("Erro ao carregar os dados:",n)}};async function Vn(e){const t=new Date().toISOString().replace(/\D/g,""),n=await L.post(`/api/agenda/app?v=${t}`),{data:r}=n;if(!r.success||r?.data.items?.length===0)throw new Error("Erro ao carregar eventos");r.data.items=r.data.items.map(s=>(s.date=new Date(s.date),s.end=new Date(s.end),s.updated=s.updated?new Date(s.updated):new Date,s)),fe(e.agenda,r.data)}const Wn=e=>{if(e.agenda.autoDate){const t=new Date;e.agenda.from=t.toISOString().split("T")[0];const n=new Date(t);n.setDate(t.getDate()+70),e.agenda.to=n.toISOString().split("T")[0]}},Kn={id:"app",agenda:{token:"",server:"",from:"",to:"",autoDate:!0,tags:[],tagsSuggestions:[],items:[],calendars:[],titles:[],locales:[],desc:[]},state:{url:window.location.host,shared:navigator.share,connected:!0,admin:!1,loading:!1,selected:null}},se=it(Kn);async function Xn(){await ct(se),await Wn(se),await Jn(se)}Xn();export{be as T,Qn as a,se as b,L as c,Be as s,Wn as u};
