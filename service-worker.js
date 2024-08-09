"use strict";(()=>{try{self["workbox:core:7.0.0"]&&_()}catch{}var ae=(o,...e)=>{let t=o;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};var J=ae;var c=class extends Error{constructor(e,t){let r=J(e,t);super(r),this.name=e,this.details=t}};var W=new Set;var f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},F=o=>[f.prefix,o,f.suffix].filter(e=>e&&e.length>0).join("-"),ne=o=>{for(let e of Object.keys(f))o(e)},h={updateDetails:o=>{ne(e=>{typeof o[e]=="string"&&(f[e]=o[e])})},getGoogleAnalyticsName:o=>o||F(f.googleAnalytics),getPrecacheName:o=>o||F(f.precache),getPrefix:()=>f.prefix,getRuntimeName:o=>o||F(f.runtime),getSuffix:()=>f.suffix};function z(o,e){let t=new URL(o);for(let r of e)t.searchParams.delete(r);return t.href}async function V(o,e,t,r){let s=z(e.url,t);if(e.url===s)return o.match(e,r);let a=Object.assign(Object.assign({},r),{ignoreSearch:!0}),n=await o.keys(e,a);for(let i of n){let l=z(i.url,t);if(s===l)return o.match(i,r)}}var b;function A(){if(b===void 0){let o=new Response("");if("body"in o)try{new Response(o.body),b=!0}catch{b=!1}b=!1}return b}var E=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};async function K(){for(let o of W)await o()}var S=o=>new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),"");function v(o){return new Promise(e=>setTimeout(e,o))}function k(o,e){let t=e();return o.waitUntil(t),t}async function M(o,e){let t=null;if(o.url&&(t=new URL(o.url).origin),t!==self.location.origin)throw new c("cross-origin-copy-response",{origin:t});let r=o.clone(),s={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},a=e?e(s):s,n=A()?r.body:await r.blob();return new Response(n,a)}function I(){self.addEventListener("activate",()=>self.clients.claim())}try{self["workbox:precaching:7.0.0"]&&_()}catch{}var ce="__WB_REVISION__";function Z(o){if(!o)throw new c("add-to-cache-list-unexpected-type",{entry:o});if(typeof o=="string"){let a=new URL(o,location.href);return{cacheKey:a.href,url:a.href}}let{revision:e,url:t}=o;if(!t)throw new c("add-to-cache-list-unexpected-type",{entry:o});if(!e){let a=new URL(t,location.href);return{cacheKey:a.href,url:a.href}}let r=new URL(t,location.href),s=new URL(t,location.href);return r.searchParams.set(ce,e),{cacheKey:r.href,url:s.href}}var U=class{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){let s=t.originalRequest.url;r?this.notUpdatedURLs.push(s):this.updatedURLs.push(s)}return r}}};var $=class{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:r})=>{let s=(r==null?void 0:r.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this._precacheController=e}};try{self["workbox:strategies:7.0.0"]&&_()}catch{}function L(o){return typeof o=="string"?new Request(o):o}var T=class{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new E,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(let r of this._plugins)this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,r=L(e);if(r.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){let n=await t.preloadResponse;if(n)return n}let s=this.hasCallback("fetchDidFail")?r.clone():null;try{for(let n of this.iterateCallbacks("requestWillFetch"))r=await n({request:r.clone(),event:t})}catch(n){if(n instanceof Error)throw new c("plugin-error-request-will-fetch",{thrownErrorMessage:n.message})}let a=r.clone();try{let n;n=await fetch(r,r.mode==="navigate"?void 0:this._strategy.fetchOptions);for(let i of this.iterateCallbacks("fetchDidSucceed"))n=await i({event:t,request:a,response:n});return n}catch(n){throw s&&await this.runCallbacks("fetchDidFail",{error:n,event:t,originalRequest:s.clone(),request:a.clone()}),n}}async fetchAndCachePut(e){let t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){let t=L(e),r,{cacheName:s,matchOptions:a}=this._strategy,n=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:s});r=await caches.match(n,i);for(let l of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await l({cacheName:s,matchOptions:a,cachedResponse:r,request:n,event:this.event})||void 0;return r}async cachePut(e,t){let r=L(e);await v(0);let s=await this.getCacheKey(r,"write");if(!t)throw new c("cache-put-with-no-response",{url:S(s.url)});let a=await this._ensureResponseSafeToCache(t);if(!a)return!1;let{cacheName:n,matchOptions:i}=this._strategy,l=await self.caches.open(n),y=this.hasCallback("cacheDidUpdate"),g=y?await V(l,s.clone(),["__WB_REVISION__"],i):null;try{await l.put(s,y?a.clone():a)}catch(p){if(p instanceof Error)throw p.name==="QuotaExceededError"&&await K(),p}for(let p of this.iterateCallbacks("cacheDidUpdate"))await p({cacheName:n,oldResponse:g,newResponse:a.clone(),request:s,event:this.event});return!0}async getCacheKey(e,t){let r=`${e.url} | ${t}`;if(!this._cacheKeys[r]){let s=e;for(let a of this.iterateCallbacks("cacheKeyWillBeUsed"))s=L(await a({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[r]=s}return this._cacheKeys[r]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if(typeof t[e]=="function"){let r=this._pluginStateMap.get(t);yield a=>{let n=Object.assign(Object.assign({},a),{state:r});return t[e](n)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(let s of this.iterateCallbacks("cacheWillUpdate"))if(t=await s({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&t.status!==200&&(t=void 0),t}};var O=class{constructor(e={}){this.cacheName=h.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,r=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,a=new T(this,{event:t,request:r,params:s}),n=this._getResponse(a,r,t),i=this._awaitComplete(n,a,r,t);return[n,i]}async _getResponse(e,t,r){await e.runCallbacks("handlerWillStart",{event:r,request:t});let s;try{if(s=await this._handle(t,e),!s||s.type==="error")throw new c("no-response",{url:t.url})}catch(a){if(a instanceof Error){for(let n of e.iterateCallbacks("handlerDidError"))if(s=await n({error:a,event:r,request:t}),s)break}if(!s)throw a}for(let a of e.iterateCallbacks("handlerWillRespond"))s=await a({event:r,request:t,response:s});return s}async _awaitComplete(e,t,r,s){let a,n;try{a=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:s,request:r,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(n=i)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:r,response:a,error:n}),t.destroy(),n)throw n}};var u=class extends O{constructor(e={}){e.cacheName=h.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(u.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){let r=await t.cacheMatch(e);return r||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let r,s=t.params||{};if(this._fallbackToNetwork){let a=s.integrity,n=e.integrity,i=!n||n===a;if(r=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?n||a:void 0})),a&&i&&e.mode!=="no-cors"){this._useDefaultCacheabilityPluginIfNeeded();let l=await t.cachePut(e,r.clone())}}else throw new c("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return r}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let r=await t.fetch(e);if(!await t.cachePut(e,r.clone()))throw new c("bad-precaching-response",{url:e.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[r,s]of this.plugins.entries())s!==u.copyRedirectedCacheableResponsesPlugin&&(s===u.defaultPrecacheCacheabilityPlugin&&(e=r),s.cacheWillUpdate&&t++);t===0?this.plugins.push(u.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}};u.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:o}){return!o||o.status>=400?null:o}};u.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:o}){return o.redirected?await M(o):o}};var N=class{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new u({cacheName:h.getPrecacheName(e),plugins:[...t,new $({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let r of e){typeof r=="string"?t.push(r):r&&r.revision===void 0&&t.push(r.url);let{cacheKey:s,url:a}=Z(r),n=typeof r!="string"&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==s)throw new c("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:s});if(typeof r!="string"&&r.integrity){if(this._cacheKeysToIntegrities.has(s)&&this._cacheKeysToIntegrities.get(s)!==r.integrity)throw new c("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(s,r.integrity)}if(this._urlsToCacheKeys.set(a,s),this._urlsToCacheModes.set(a,n),t.length>0){let i=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(i)}}}install(e){return k(e,async()=>{let t=new U;this.strategy.plugins.push(t);for(let[a,n]of this._urlsToCacheKeys){let i=this._cacheKeysToIntegrities.get(n),l=this._urlsToCacheModes.get(a),y=new Request(a,{integrity:i,cache:l,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:n},request:y,event:e}))}let{updatedURLs:r,notUpdatedURLs:s}=t;return{updatedURLs:r,notUpdatedURLs:s}})}activate(e){return k(e,async()=>{let t=await self.caches.open(this.strategy.cacheName),r=await t.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(let n of r)s.has(n.url)||(await t.delete(n),a.push(n.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new c("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:t},r.params),this.strategy.handle(r))}};var j,m=()=>(j||(j=new N),j);try{self["workbox:routing:7.0.0"]&&_()}catch{}var D="GET";var w=o=>o&&typeof o=="object"?o:{handle:o};var d=class{constructor(e,t,r=D){this.handler=w(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=w(e)}};var P=class extends d{constructor(e,t,r){let s=({url:a})=>{let n=e.exec(a.href);if(!!n&&!(a.origin!==location.origin&&n.index!==0))return n.slice(1)};super(s,t,r)}};var q=class{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){let{payload:t}=e.data,r=Promise.all(t.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);let a=new Request(...s);return this.handleRequest({request:a,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;let s=r.origin===location.origin,{params:a,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:r}),i=n&&n.handler,l=[],y=e.method;if(!i&&this._defaultHandlerMap.has(y)&&(i=this._defaultHandlerMap.get(y)),!i)return;let g;try{g=i.handle({url:r,request:e,event:t,params:a})}catch(R){g=Promise.reject(R)}let p=n&&n.catchHandler;return g instanceof Promise&&(this._catchHandler||p)&&(g=g.catch(async R=>{if(p)try{return await p.handle({url:r,request:e,event:t,params:a})}catch(Y){Y instanceof Error&&(R=Y)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw R})),g}findMatchingRoute({url:e,sameOrigin:t,request:r,event:s}){let a=this._routes.get(r.method)||[];for(let n of a){let i,l=n.match({url:e,sameOrigin:t,request:r,event:s});if(l)return i=l,(Array.isArray(i)&&i.length===0||l.constructor===Object&&Object.keys(l).length===0||typeof l=="boolean")&&(i=void 0),{route:n,params:i}}return{}}setDefaultHandler(e,t=D){this._defaultHandlerMap.set(t,w(e))}setCatchHandler(e){this._catchHandler=w(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new c("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new c("unregister-route-route-not-registered")}};var C,ee=()=>(C||(C=new q,C.addFetchListener(),C.addCacheListener()),C);function te(o,e,t){let r;if(typeof o=="string"){let a=new URL(o,location.href),n=({url:i})=>i.href===a.href;r=new d(n,e,t)}else if(o instanceof RegExp)r=new P(o,e,t);else if(typeof o=="function")r=new d(o,e,t);else if(o instanceof d)r=o;else throw new c("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return ee().registerRoute(r),r}function re(o,e=[]){for(let t of[...o.searchParams.keys()])e.some(r=>r.test(t))&&o.searchParams.delete(t);return o}function*oe(o,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:r=!0,urlManipulation:s}={}){let a=new URL(o,location.href);a.hash="",yield a.href;let n=re(a,e);if(yield n.href,t&&n.pathname.endsWith("/")){let i=new URL(n.href);i.pathname+=t,yield i.href}if(r){let i=new URL(n.href);i.pathname+=".html",yield i.href}if(s){let i=s({url:a});for(let l of i)yield l.href}}var x=class extends d{constructor(e,t){let r=({request:s})=>{let a=e.getURLsToCacheKeys();for(let n of oe(s.url,t)){let i=a.get(n);if(i){let l=e.getIntegrityForCacheKey(i);return{cacheKey:i,integrity:l}}}};super(r,e.strategy)}};function H(o){let e=m(),t=new x(e,o);te(t)}var le="-precache-",se=async(o,e=le)=>{let r=(await self.caches.keys()).filter(s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==o);return await Promise.all(r.map(s=>self.caches.delete(s))),r};function B(){self.addEventListener("activate",o=>{let e=h.getPrecacheName();o.waitUntil(se(e).then(t=>{}))})}function G(o){m().precache(o)}function Q(o,e){G(o),H(e)}self.skipWaiting();I();Q([{"revision":"af3574032d7749c5e1893238e5f7119d","url":"assets/CalendarPage.1dad830e.css"},{"revision":"4f7420ba9cb216542667b1c93561fd22","url":"assets/CalendarPage.4afcd73f.js"},{"revision":"52ab5b4d9f0dee5dc9d9bd2c78a23875","url":"assets/ConfigPage.0249dd85.js"},{"revision":"16e4c0551711999693db015d9ca7ef2d","url":"assets/ConfigPage.ea83d7b0.css"},{"revision":"67cb915ac0bc3cad7f30bd9315b8623b","url":"assets/DarpePage.114cf965.js"},{"revision":"da2ea8694db2174025426515d219c40f","url":"assets/DarpePage.2e02cd24.css"},{"revision":"dde6e67a30807c0f3812531306015b60","url":"assets/ErrorNotFound.1663da47.js"},{"revision":"3e1afe59fa075c9e04c436606b77f640","url":"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff"},{"revision":"a4160421d2605545f69a4cd6cd642902","url":"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2"},{"revision":"87e21bbf00c31e7f4c36bd3f54633186","url":"assets/IconCalendarComponent.77ca11bd.js"},{"revision":"868b03f5924f1cdf4a59ab79a7ee9b9d","url":"assets/IconCalendarComponent.781903ea.css"},{"revision":"66c131f8950c9f7183258e19eb25ff69","url":"assets/index.3ffb7a53.js"},{"revision":"e87a904e39bd7e6ad745c0468984ae47","url":"assets/index.69d9ab43.css"},{"revision":"30326df9c567adc3382a33297b2ad3ba","url":"assets/IndexPage.6cb26e5d.css"},{"revision":"908764e2530517cb0c7bfb1151d9c8da","url":"assets/IndexPage.ca4af9b1.js"},{"revision":"4aa2e69855e3b83110a251c47fdd05fc","url":"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff"},{"revision":"40bcb2b8cc5ed94c4c21d06128e0e532","url":"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff"},{"revision":"ea60988be8d6faebb4bc2a55b1f76e22","url":"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff"},{"revision":"0774a8b7ca338dc1aba5a0ec8f2b9454","url":"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff"},{"revision":"bcb7c7e2499a055f0e2f93203bdb282b","url":"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff"},{"revision":"d3907d0ccd03b1134c24d3bcaf05b698","url":"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff"},{"revision":"fb282d948ac433dad3676e17b769c736","url":"assets/ListasPage.2120c7d8.js"},{"revision":"47d2e5e66a5fb4a816af76ef71ec7ce7","url":"assets/ListasPage.dfce72df.css"},{"revision":"281812d6940817dae0e29e211ad82bb7","url":"assets/MainLayout.5dc86b8d.js"},{"revision":"a146a4a4af31ec607e4ddd2efaea46fb","url":"assets/MainLayout.f9b4f486.css"},{"revision":"12af1ad8726066ae7bc69d2db1ac292e","url":"data/data.json"},{"revision":"6c60306b9241235864330f5ea608f241","url":"data/links.json"},{"revision":"49729ffbae0e8a9a0408fbeb44026ede","url":"favicon.ico"},{"revision":"5b806624e794f4e34430cfbe1e029d2b","url":"firebase-messaging-sw.js"},{"revision":"445330b6d155777dd3077efddbf1889a","url":"icons/android-chrome-192x192.png"},{"revision":"9d40d3ad75ba40e7b6d26497adbf6ce0","url":"icons/android-chrome-196x196.png"},{"revision":"445330b6d155777dd3077efddbf1889a","url":"icons/android-chrome-512x512.png"},{"revision":"445330b6d155777dd3077efddbf1889a","url":"icons/android-chrome-maskable-192x192.png"},{"revision":"9d40d3ad75ba40e7b6d26497adbf6ce0","url":"icons/android-chrome-maskable-196x196.png"},{"revision":"9865d61e6a42bcabbef771fd7292b9c8","url":"icons/android-chrome-maskable-512x512.png"},{"revision":"3e30fdba84f99a2cdea942d3386bda5e","url":"icons/apple-icon-120x120.png"},{"revision":"5de3d31ea32c550c01f26ac91f95886d","url":"icons/apple-icon-152x152.png"},{"revision":"3cb2f662d4c702650d3966041b4f1dfb","url":"icons/apple-icon-167x167.png"},{"revision":"cb1949dbcadce523f0b12f174801dbe6","url":"icons/apple-icon-180x180.png"},{"revision":"6d73c00c3bbf328d9d2dbee97e05a8e8","url":"icons/apple-touch-icon-120x120.png"},{"revision":"6f29489f291ea9bca75a9d7c17ca500d","url":"icons/apple-touch-icon-152x152.png"},{"revision":"99e4e67ac9f4e0368a81ecc783998590","url":"icons/apple-touch-icon-180x180.png"},{"revision":"61f196a2b50d556d8870adff1ff50075","url":"icons/apple-touch-icon-60x60.png"},{"revision":"4fcd594611da13bd1dc9b5195bce15be","url":"icons/apple-touch-icon-76x76.png"},{"revision":"9865d61e6a42bcabbef771fd7292b9c8","url":"icons/apple-touch-icon.png"},{"revision":"4c5e21962950a878e48a8f7defe8cd83","url":"icons/arte-512x512.psd"},{"revision":"62476f31fa1c8e76733c2e1fd6fd22e4","url":"icons/Contents.json"},{"revision":"68417716c8697324225cf68ff6594301","url":"icons/favicon-16x16.png"},{"revision":"5cba9214074a701556e3ba60cc21a7f4","url":"icons/favicon-32x32.png"},{"revision":"7451647b3ba1dce3eeee260fb3cb1dd8","url":"icons/favicon.svg"},{"revision":"d3c113ee59ec5850141294889adb9202","url":"icons/icon-128x128.png"},{"revision":"81a7859e0a41345f6a8d27617415f8e6","url":"icons/icon-192x192.png"},{"revision":"4198631efef4a6325477640b1c8f30f6","url":"icons/icon-256x256.png"},{"revision":"43e47afe7bb5de53c8dcbc8dee3dbda0","url":"icons/icon-384x384.png"},{"revision":"ea3b6bfd3fcc5bf4a9984ddee025f293","url":"icons/icon-512x512.png"},{"revision":"530e94c00710db02809816ad83e86563","url":"icons/ms-icon-144x144.png"},{"revision":"50f1bb98307c8bbb87d77d98c63c9ee0","url":"icons/msapplication-icon-144x144.png"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"icons/mstile-150x150.png"},{"revision":"7035d90c8683a6d71ac955b849c43f3f","url":"icons/safari-pinned-tab.svg"},{"revision":"ab9607bc17ec645bc3d1560cb5d707ea","url":"img/adicionar.png"},{"revision":"135ab3e28f821921aa6d65e6e0423b96","url":"img/agenda.png"},{"revision":"57176b3f44598e1ea6ed2c070c494a32","url":"img/aperto-de-mao.png"},{"revision":"c7f0c23c7708c51c76c544bf534c69b7","url":"img/botao-fechar.png"},{"revision":"5d6867e4458d45af3cee67cf38e0ec4e","url":"img/calendario.png"},{"revision":"3f03311f842ab89987b51d2a8988d259","url":"img/cloud-sync.png"},{"revision":"796b0333d55fc2ce0262ac59dfabb55a","url":"img/compartilhar.png"},{"revision":"6d3e08cb063bb12ad25034255d17d59b","url":"img/configuracao.png"},{"revision":"5c8d1bf99845e69a5b754d04b5c2a7ac","url":"img/documento.png"},{"revision":"2076af17726c4b47d9cc3a501d068c7e","url":"img/impressora.png"},{"revision":"85a8c3daa69e01a6a264a27896493fa7","url":"img/lista.png"},{"revision":"710f8cc242e975ce719df4599d2acd5c","url":"img/lixeira.png"},{"revision":"2706c763b1a4ccea0ba2e48dfcac63b2","url":"img/outro.png"},{"revision":"1f641102b374f9ede512bb40e0c6883e","url":"img/pesquisa.png"},{"revision":"a392ad8e80d96fed01423988b32e7537","url":"img/prancheta.png"},{"revision":"15c94c2a8b6bc857975f22ab0f2e16b6","url":"img/recarregar.png"},{"revision":"dfb81b92c7ea0974951e2f62ea9d4eeb","url":"img/recurring.png"},{"revision":"43025d6bbf91e989c647462f98d5d6b4","url":"img/repeticao.png"},{"revision":"feaebd5a1d1d05ff957115911ac9e681","url":"img/salvar-enviar.png"},{"revision":"90acffa1190a9add77099fa39d460865","url":"img/salvar-ok.png"},{"revision":"feaebd5a1d1d05ff957115911ac9e681","url":"img/salvar.png"},{"revision":"ec935630cad64300fcd026a382a1a362","url":"img/solicitar.png"},{"revision":"720dac1f73b9cc3051159c59c72f892f","url":"img/voltar.png"},{"revision":"27fdb836d67de6ae713714fa20fd8e38","url":"index.html"},{"revision":"e608d4bcda462065796f899b3a51bea4","url":"manifest.json"}]);B();self.addEventListener("message",o=>{console.log("Mensagem recebida no Service Worker:",o.data)});self.addEventListener("install",()=>{});self.addEventListener("activate",()=>{console.log("Eventos agendados...")});})();
