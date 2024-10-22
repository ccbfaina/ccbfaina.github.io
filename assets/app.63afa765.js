import{a as ke,h as ut,x as lt}from"./index.4a172efe.js";const sr={name:String};function or(e){return ke(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function ir(e={}){return(t,n,r)=>{t[n](ut("input",{class:"hidden"+(r||""),...e.value}))}}function ar(e){return ke(()=>e.name||e.for)}const je=async(e,t)=>{"caches"in window?await(await caches.open("eventDataCache")).put(e,new Response(JSON.stringify(t))):console.warn("A API de Cache n\xE3o est\xE1 dispon\xEDvel neste ambiente.")},ft=async e=>{const t=await caches.match(e);if(t)return await t.json()};function fe(e,t){for(const n in t)typeof t[n]=="object"&&t[n]!==null&&!Array.isArray(t[n])?e[n]=fe(e[n]||{},t[n]):e[n]=t[n];return e}async function de(e){try{je("/data/data.json",e)}catch(t){console.log("Erro ao salvar local: ",t)}}async function dt(e){try{const n=await ft("/data/data.json");console.log("Carregando dados da cache do PWA..."),fe(e,n),e.agenda.items=n.agenda.items.map(r=>(r.date=new Date(r.date),r.end=new Date(r.end),r.updated=r.updated?new Date(r.updated):new Date,r))}catch(t){console.info("Erro ao carregar cache!!!",t)}}function Ie(e,t){return function(){return e.apply(t,arguments)}}const{toString:ht}=Object.prototype,{getPrototypeOf:he}=Object,W=(e=>t=>{const n=ht.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>W(t)===e),K=e=>t=>typeof t===e,{isArray:B}=Array,j=K("undefined");function pt(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ve=C("ArrayBuffer");function mt(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ve(e.buffer),t}const yt=K("string"),T=K("function"),qe=K("number"),G=e=>e!==null&&typeof e=="object",wt=e=>e===!0||e===!1,H=e=>{if(W(e)!=="object")return!1;const t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},gt=C("Date"),bt=C("File"),Et=C("Blob"),St=C("FileList"),Rt=e=>G(e)&&T(e.pipe),At=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=W(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},Ot=C("URLSearchParams"),[Tt,xt,Ct,Nt]=["ReadableStream","Request","Response","Headers"].map(C),Pt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function v(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function He(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),Me=e=>!j(e)&&e!==_;function se(){const{caseless:e}=Me(this)&&this||{},t={},n=(r,s)=>{const o=e&&He(t,s)||s;H(t[o])&&H(r)?t[o]=se(t[o],r):H(r)?t[o]=se({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&v(arguments[r],n);return t}const Dt=(e,t,n,{allOwnKeys:r}={})=>(v(t,(s,o)=>{n&&T(s)?e[o]=Ie(s,n):e[o]=s},{allOwnKeys:r}),e),Ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_t=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Lt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&he(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Bt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ut=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!qe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},kt=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&he(Uint8Array)),jt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},It=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},vt=C("HTMLFormElement"),qt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Se=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ht=C("RegExp"),ze=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};v(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Mt=e=>{ze(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},$t=()=>{},Jt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Y="abcdefghijklmnopqrstuvwxyz",Re="0123456789",$e={DIGIT:Re,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+Re},Vt=(e=16,t=$e.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Wt(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Kt=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return v(r,(i,c)=>{const f=n(i,s+1);!j(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Gt=C("AsyncFunction"),Xt=e=>e&&(G(e)||T(e))&&T(e.then)&&T(e.catch),Je=((e,t)=>e?setImmediate:t?((n,r)=>(_.addEventListener("message",({source:s,data:o})=>{s===_&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),_.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",T(_.postMessage)),Qt=typeof queueMicrotask!="undefined"?queueMicrotask.bind(_):typeof process!="undefined"&&process.nextTick||Je;var a={isArray:B,isArrayBuffer:ve,isBuffer:pt,isFormData:At,isArrayBufferView:mt,isString:yt,isNumber:qe,isBoolean:wt,isObject:G,isPlainObject:H,isReadableStream:Tt,isRequest:xt,isResponse:Ct,isHeaders:Nt,isUndefined:j,isDate:gt,isFile:bt,isBlob:Et,isRegExp:Ht,isFunction:T,isStream:Rt,isURLSearchParams:Ot,isTypedArray:kt,isFileList:St,forEach:v,merge:se,extend:Dt,trim:Pt,stripBOM:Ft,inherits:_t,toFlatObject:Lt,kindOf:W,kindOfTest:C,endsWith:Bt,toArray:Ut,forEachEntry:jt,matchAll:It,isHTMLForm:vt,hasOwnProperty:Se,hasOwnProp:Se,reduceDescriptors:ze,freezeMethods:Mt,toObjectSet:zt,toCamelCase:qt,noop:$t,toFiniteNumber:Jt,findKey:He,global:_,isContextDefined:Me,ALPHABET:$e,generateString:Vt,isSpecCompliantForm:Wt,toJSONObject:Kt,isAsyncFn:Gt,isThenable:Xt,setImmediate:Je,asap:Qt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ve=m.prototype,We={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{We[e]={value:e}});Object.defineProperties(m,We);Object.defineProperty(Ve,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ve);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var Zt=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function Ke(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ae(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ke(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Yt(e){return a.isArray(e)&&!e.some(oe)}const en=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,p){return!a.isUndefined(p[y])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!f&&a.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?f&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function l(h,y,p){let g=h;if(h&&!p&&typeof h=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&Yt(h)||(a.isFileList(h)||a.endsWith(y,"[]"))&&(g=a.toArray(h)))return y=Ke(y),g.forEach(function(R,N){!(a.isUndefined(R)||R===null)&&t.append(i===!0?Ae([y],N,o):i===null?y:y+"[]",u(R))}),!1}return oe(h)?!0:(t.append(Ae(p,y,o),u(h)),!1)}const d=[],w=Object.assign(en,{defaultVisitor:l,convertValue:u,isVisitable:oe});function E(h,y){if(!a.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(h),a.forEach(h,function(g,S){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(S)?S.trim():S,y,w))===!0&&E(g,y?y.concat(S):[S])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Oe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&X(e,this,t)}const Ge=pe.prototype;Ge.append=function(t,n){this._pairs.push([t,n])};Ge.toString=function(t){const n=t?function(r){return t.call(this,r,Oe)}:Oe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function tn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xe(e,t,n){if(!t)return e;const r=n&&n.encode||tn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class nn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var Te=nn,Qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rn=typeof URLSearchParams!="undefined"?URLSearchParams:pe,sn=typeof FormData!="undefined"?FormData:null,on=typeof Blob!="undefined"?Blob:null,an={isBrowser:!0,classes:{URLSearchParams:rn,FormData:sn,Blob:on},protocols:["http","https","file","blob","url","data"]};const me=typeof window!="undefined"&&typeof document!="undefined",ie=typeof navigator=="object"&&navigator||void 0,cn=me&&(!ie||["ReactNative","NativeScript","NS"].indexOf(ie.product)<0),un=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ln=me&&window.location.href||"http://localhost";var fn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:me,hasStandardBrowserWebWorkerEnv:un,hasStandardBrowserEnv:cn,navigator:ie,origin:ln},Symbol.toStringTag,{value:"Module"})),O={...fn,...an};function dn(e,t){return X(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function hn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ze(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=pn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(hn(r),s,n,0)}),n}return null}function mn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ye={transitional:Qe,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return dn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return X(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),mn(t)):t}],transformResponse:[function(t){const n=this.transitional||ye.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ye.headers[e]={}});var we=ye;const yn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var wn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&yn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const xe=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function gn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const bn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function En(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Sn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=k(f);if(!l)throw new Error("header name must be a non-empty string");const d=a.findKey(s,l);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||f]=M(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!bn(t))i(wn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return gn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=k(i),i){const c=a.findKey(r,i);c&&(!n||ee(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ee(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=M(s),delete n[o];return}const c=t?En(o):String(o).trim();c!==o&&delete n[o],n[c]=M(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=k(i);r[c]||(Sn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Q.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Q);var x=Q;function te(e,t){const n=this||we,r=t||n,s=x.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ye(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,m,{__CANCEL__:!0});function et(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Rn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function An(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let d=o,w=0;for(;d!==s;)w+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const E=l&&u-l;return E?Math.round(w*1e3/E):void 0}}function On(e,t){let n=0,r=1e3/t,s,o;const i=(u,l=Date.now())=>{n=l,s=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),d=l-n;d>=r?i(u,l):(s=u,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const $=(e,t,n=3)=>{let r=0;const s=An(50,250);return On(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,u=s(f),l=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Ce=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ne=e=>(...t)=>a.asap(()=>e(...t));var Tn=O.hasStandardBrowserEnv?function(){const t=O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),xn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Nn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function tt(e,t){return e&&!Cn(t)?Nn(e,t):t}const Pe=e=>e instanceof x?{...e}:e;function L(e,t){t=t||{};const n={};function r(u,l,d){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:d},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,d){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,d)}else return r(u,l,d)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,d){if(d in t)return r(u,l);if(d in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Pe(u),Pe(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const d=f[l]||s,w=d(e[l],t[l],l);a.isUndefined(w)&&d!==c||(n[l]=w)}),n}var nt=e=>{const t=L({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=x.from(i),t.url=Xe(tt(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Tn(t.url))){const u=s&&o&&xn.read(o);u&&i.set(s,u)}return t};const Pn=typeof XMLHttpRequest!="undefined";var Dn=Pn&&function(e){return new Promise(function(n,r){const s=nt(e);let o=s.data;const i=x.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:u}=s,l,d,w,E,h;function y(){E&&E(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function g(){if(!p)return;const R=x.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),A={data:!c||c==="text"||c==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:R,config:e,request:p};et(function(F){n(F),y()},function(F){r(F),y()},A),p=null}"onloadend"in p?p.onloadend=g:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(g)},p.onabort=function(){!p||(r(new m("Request aborted",m.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||Qe;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),r(new m(N,A.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,p)),p=null},o===void 0&&i.setContentType(null),"setRequestHeader"in p&&a.forEach(i.toJSON(),function(N,A){p.setRequestHeader(A,N)}),a.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),c&&c!=="json"&&(p.responseType=s.responseType),u&&([w,h]=$(u,!0),p.addEventListener("progress",w)),f&&p.upload&&([d,E]=$(f),p.upload.addEventListener("progress",d),p.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(l=R=>{!p||(r(!R||R.type?new U(null,e,p):R),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const S=Rn(s.url);if(S&&O.protocols.indexOf(S)===-1){r(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}p.send(o||null)})};const Fn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(u){if(!s){s=!0,c();const l=u instanceof Error?u:this.reason;r.abort(l instanceof m?l:new U(l instanceof Error?l.message:l))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}};var _n=Fn;const Ln=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Bn=async function*(e,t){for await(const n of Un(e))yield*Ln(n,t)},Un=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},De=(e,t,n,r)=>{const s=Bn(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:u,value:l}=await s.next();if(u){c(),f.close();return}let d=l.byteLength;if(n){let w=o+=d;n(w)}f.enqueue(new Uint8Array(l))}catch(u){throw c(u),u}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Z=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",rt=Z&&typeof ReadableStream=="function",kn=Z&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),st=(e,...t)=>{try{return!!e(...t)}catch{return!1}},jn=rt&&st(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Fe=64*1024,ae=rt&&st(()=>a.isReadableStream(new Response("").body)),J={stream:ae&&(e=>e.body)};Z&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!J[t]&&(J[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const In=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await kn(e)).byteLength},vn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n==null?In(t):n};var qn=Z&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:d="same-origin",fetchOptions:w}=nt(e);u=u?(u+"").toLowerCase():"text";let E=_n([s,o&&o.toAbortSignal()],i),h;const y=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let p;try{if(f&&jn&&n!=="get"&&n!=="head"&&(p=await vn(l,r))!==0){let A=new Request(t,{method:"POST",body:r,duplex:"half"}),P;if(a.isFormData(r)&&(P=A.headers.get("content-type"))&&l.setContentType(P),A.body){const[F,q]=Ce(p,$(Ne(f)));r=De(A.body,Fe,F,q)}}a.isString(d)||(d=d?"include":"omit");const g="credentials"in Request.prototype;h=new Request(t,{...w,signal:E,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:g?d:void 0});let S=await fetch(h);const R=ae&&(u==="stream"||u==="response");if(ae&&(c||R&&y)){const A={};["status","statusText","headers"].forEach(Ee=>{A[Ee]=S[Ee]});const P=a.toFiniteNumber(S.headers.get("content-length")),[F,q]=c&&Ce(P,$(Ne(c),!0))||[];S=new Response(De(S.body,Fe,F,()=>{q&&q(),y&&y()}),A)}u=u||"text";let N=await J[a.findKey(J,u)||"text"](S,e);return!R&&y&&y(),await new Promise((A,P)=>{et(A,P,{data:N,headers:x.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:h})})}catch(g){throw y&&y(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,h),{cause:g.cause||g}):m.from(g,g&&g.code,e,h)}});const ce={http:Zt,xhr:Dn,fetch:qn};a.forEach(ce,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const _e=e=>`- ${e}`,Hn=e=>a.isFunction(e)||e===null||e===!1;var ot={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Hn(n)&&(r=ce[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(_e).join(`
`):" "+_e(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ce};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function Le(e){return ne(e),e.headers=x.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ot.getAdapter(e.adapter||we.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=x.from(r.headers),r},function(r){return Ye(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=x.from(r.response.headers))),Promise.reject(r)})}const it="1.7.7",ge={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ge[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Be={};ge.transitional=function(t,n,r){function s(o,i){return"[Axios v"+it+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Be[i]&&(Be[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Mn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}var ue={assertOptions:Mn,validators:ge};const D=ue.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ue.assertOptions(r,{silentJSONParsing:D.transitional(D.boolean),forcedJSONParsing:D.transitional(D.boolean),clarifyTimeoutError:D.transitional(D.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ue.assertOptions(s,{encode:D.function,serialize:D.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=x.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,d=0,w;if(!f){const h=[Le.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,u),w=h.length,l=Promise.resolve(n);d<w;)l=l.then(h[d++],h[d++]);return l}w=c.length;let E=n;for(d=0;d<w;){const h=c[d++],y=c[d++];try{E=h(E)}catch(p){y.call(this,p);break}}try{l=Le.call(this,E)}catch(h){return Promise.reject(h)}for(d=0,w=u.length;d<w;)l=l.then(u[d++],u[d++]);return l}getUri(t){t=L(this.defaults,t);const n=tt(t.baseURL,t.url);return Xe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(L(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});var z=V;class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new U(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}var zn=be;function $n(e){return function(n){return e.apply(null,n)}}function Jn(e){return a.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});var Vn=le;function at(e){const t=new z(e),n=Ie(z.prototype.request,t);return a.extend(n,z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return at(L(e,s))},n}const b=at(we);b.Axios=z;b.CanceledError=U;b.CancelToken=zn;b.isCancel=Ye;b.VERSION=it;b.toFormData=X;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=$n;b.isAxiosError=Jn;b.mergeConfig=L;b.AxiosHeaders=x;b.formToJSON=e=>Ze(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=ot.getAdapter;b.HttpStatusCode=Vn;b.default=b;var Wn=b;const Kn={},I=Wn.create(Kn);function ct({baseURL:e,token:t}){I.defaults.baseURL=e,I.defaults.headers.Authorization=`${t}`}const Gn=async(e,t,n=!0)=>{t.href&&t.title&&!e.agenda.tags.some(r=>r.href===t.href||r.title===t.title)&&(e.agenda.tags.push(t),n&&await de(e))},Xn=async(e,t,n=!0)=>{e.agenda.tagsSuggestions.some(r=>r.href===t.href)||(e.agenda.tagsSuggestions.push(t),n&&await de(e))},Qn=async e=>{const{defaultTags:t,suggestionsTags:n}=(await I.get("/data/tags.json")).data;t.forEach(async r=>await Gn(e,r,!1)),n&&(e.agenda.tagsSuggestions=[],n.forEach(r=>Xn(e,r,!1)),await de(e))},Zn=async e=>{try{e.agenda.token?(ct({baseURL:e.agenda.server,token:e.agenda.token}),await Yn(e),e.state.admin=!0):(await Ue(e),e.state.admin=!1)}catch(n){console.info("Erro ao conectar no servidor: ",n),e.state.admin=!1,await Ue(e)}try{await Qn(e)}catch(n){console.log("Erro ao atualizar tags: ",n)}const t=[];e.agenda.items=e.agenda.items.filter(n=>{const r=n.title==="AVISOS \xC0 IRMANDADE",s=!t.some(o=>o.title===n.title&&o.desc===n.desc);return r&&s?(t.push(n),!0):!r})},Ue=async e=>{ct({baseURL:"",token:""});const t="/data/data.json";try{const n=`${t}?v=${new Date().toISOString().replace(/\D/g,"")}`,{status:r,statusText:s,data:o}=await I.get(n);if(r===200){const i=o.eventos.items.map(c=>(c.date=new Date(c.date),c.end=new Date(c.end),c.updated=c.updated?new Date(c.updated):new Date,c));e.agenda.items=i,je(t,e)}else console.error("Erro ao carregar dados do servidor:",s)}catch(n){console.error("Erro ao carregar os dados:",n)}};async function Yn(e){const{data:t}=await I.post("/api/agenda/app");t.items=t.items.map(n=>(n.date=new Date(n.date),n.end=new Date(n.end),n.updated=n.updated?new Date(n.updated):new Date,n)),fe(e.agenda,t)}const er=e=>{if(e.agenda.autoDate){const t=new Date;e.agenda.from=t.toISOString().split("T")[0];const n=new Date(t);n.setDate(t.getDate()+70),e.agenda.to=n.toISOString().split("T")[0]}},tr={id:"app",agenda:{token:"",server:"",from:"",to:"",autoDate:!0,tags:[],tagsSuggestions:[],items:[],calendars:[],titles:[],locales:[],desc:[]},state:{url:window.location.host,shared:navigator.share,connected:!0,admin:!1,loading:!1,selected:null}},re=lt(tr);async function nr(){await dt(re),await er(re),await Zn(re)}nr();export{Gn as a,re as b,ar as c,ir as d,er as e,or as f,I as g,Zn as h,de as s,sr as u};
