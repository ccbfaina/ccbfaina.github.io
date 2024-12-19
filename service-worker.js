(()=>{try{self["workbox:core:7.0.0"]&&_()}catch{}var ae=(o,...e)=>{let t=o;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};var X=ae;var c=class extends Error{constructor(e,t){let r=X(e,t);super(r),this.name=e,this.details=t}};var A=new Set;var f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},W=o=>[f.prefix,o,f.suffix].filter(e=>e&&e.length>0).join("-"),ne=o=>{for(let e of Object.keys(f))o(e)},p={updateDetails:o=>{ne(e=>{typeof o[e]=="string"&&(f[e]=o[e])})},getGoogleAnalyticsName:o=>o||W(f.googleAnalytics),getPrecacheName:o=>o||W(f.precache),getPrefix:()=>f.prefix,getRuntimeName:o=>o||W(f.runtime),getSuffix:()=>f.suffix};function Z(o,e){let t=new URL(o);for(let r of e)t.searchParams.delete(r);return t.href}async function F(o,e,t,r){let s=Z(e.url,t);if(e.url===s)return o.match(e,r);let a=Object.assign(Object.assign({},r),{ignoreSearch:!0}),n=await o.keys(e,a);for(let i of n){let l=Z(i.url,t);if(s===l)return o.match(i,r)}}var b;function S(){if(b===void 0){let o=new Response("");if("body"in o)try{new Response(o.body),b=!0}catch{b=!1}b=!1}return b}var E=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};async function K(){for(let o of A)await o()}var M=o=>new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),"");function U(o){return new Promise(e=>setTimeout(e,o))}function $(o,e){let t=e();return o.waitUntil(t),t}async function I(o,e){let t=null;if(o.url&&(t=new URL(o.url).origin),t!==self.location.origin)throw new c("cross-origin-copy-response",{origin:t});let r=o.clone(),s={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},a=e?e(s):s,n=S()?r.body:await r.blob();return new Response(n,a)}function H(){self.addEventListener("activate",()=>self.clients.claim())}try{self["workbox:precaching:7.0.0"]&&_()}catch{}var ce="__WB_REVISION__";function te(o){if(!o)throw new c("add-to-cache-list-unexpected-type",{entry:o});if(typeof o=="string"){let a=new URL(o,location.href);return{cacheKey:a.href,url:a.href}}let{revision:e,url:t}=o;if(!t)throw new c("add-to-cache-list-unexpected-type",{entry:o});if(!e){let a=new URL(t,location.href);return{cacheKey:a.href,url:a.href}}let r=new URL(t,location.href),s=new URL(t,location.href);return r.searchParams.set(ce,e),{cacheKey:r.href,url:s.href}}var L=class{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){let s=t.originalRequest.url;r?this.notUpdatedURLs.push(s):this.updatedURLs.push(s)}return r}}};var O=class{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:r})=>{let s=r?.cacheKey||this._precacheController.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this._precacheController=e}};try{self["workbox:strategies:7.0.0"]&&_()}catch{}function T(o){return typeof o=="string"?new Request(o):o}var D=class{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new E,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(let r of this._plugins)this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,r=T(e);if(r.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){let n=await t.preloadResponse;if(n)return n}let s=this.hasCallback("fetchDidFail")?r.clone():null;try{for(let n of this.iterateCallbacks("requestWillFetch"))r=await n({request:r.clone(),event:t})}catch(n){if(n instanceof Error)throw new c("plugin-error-request-will-fetch",{thrownErrorMessage:n.message})}let a=r.clone();try{let n;n=await fetch(r,r.mode==="navigate"?void 0:this._strategy.fetchOptions);for(let i of this.iterateCallbacks("fetchDidSucceed"))n=await i({event:t,request:a,response:n});return n}catch(n){throw s&&await this.runCallbacks("fetchDidFail",{error:n,event:t,originalRequest:s.clone(),request:a.clone()}),n}}async fetchAndCachePut(e){let t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){let t=T(e),r,{cacheName:s,matchOptions:a}=this._strategy,n=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:s});r=await caches.match(n,i);for(let l of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await l({cacheName:s,matchOptions:a,cachedResponse:r,request:n,event:this.event})||void 0;return r}async cachePut(e,t){let r=T(e);await U(0);let s=await this.getCacheKey(r,"write");if(!t)throw new c("cache-put-with-no-response",{url:M(s.url)});let a=await this._ensureResponseSafeToCache(t);if(!a)return!1;let{cacheName:n,matchOptions:i}=this._strategy,l=await self.caches.open(n),y=this.hasCallback("cacheDidUpdate"),g=y?await F(l,s.clone(),["__WB_REVISION__"],i):null;try{await l.put(s,y?a.clone():a)}catch(d){if(d instanceof Error)throw d.name==="QuotaExceededError"&&await K(),d}for(let d of this.iterateCallbacks("cacheDidUpdate"))await d({cacheName:n,oldResponse:g,newResponse:a.clone(),request:s,event:this.event});return!0}async getCacheKey(e,t){let r=`${e.url} | ${t}`;if(!this._cacheKeys[r]){let s=e;for(let a of this.iterateCallbacks("cacheKeyWillBeUsed"))s=T(await a({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[r]=s}return this._cacheKeys[r]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if(typeof t[e]=="function"){let r=this._pluginStateMap.get(t);yield a=>{let n=Object.assign(Object.assign({},a),{state:r});return t[e](n)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(let s of this.iterateCallbacks("cacheWillUpdate"))if(t=await s({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&t.status!==200&&(t=void 0),t}};var P=class{constructor(e={}){this.cacheName=p.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,r=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,a=new D(this,{event:t,request:r,params:s}),n=this._getResponse(a,r,t),i=this._awaitComplete(n,a,r,t);return[n,i]}async _getResponse(e,t,r){await e.runCallbacks("handlerWillStart",{event:r,request:t});let s;try{if(s=await this._handle(t,e),!s||s.type==="error")throw new c("no-response",{url:t.url})}catch(a){if(a instanceof Error){for(let n of e.iterateCallbacks("handlerDidError"))if(s=await n({error:a,event:r,request:t}),s)break}if(!s)throw a}for(let a of e.iterateCallbacks("handlerWillRespond"))s=await a({event:r,request:t,response:s});return s}async _awaitComplete(e,t,r,s){let a,n;try{a=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:s,request:r,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(n=i)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:r,response:a,error:n}),t.destroy(),n)throw n}};var u=class extends P{constructor(e={}){e.cacheName=p.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(u.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){let r=await t.cacheMatch(e);return r||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let r,s=t.params||{};if(this._fallbackToNetwork){let a=s.integrity,n=e.integrity,i=!n||n===a;if(r=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?n||a:void 0})),a&&i&&e.mode!=="no-cors"){this._useDefaultCacheabilityPluginIfNeeded();let l=await t.cachePut(e,r.clone())}}else throw new c("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return r}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let r=await t.fetch(e);if(!await t.cachePut(e,r.clone()))throw new c("bad-precaching-response",{url:e.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[r,s]of this.plugins.entries())s!==u.copyRedirectedCacheableResponsesPlugin&&(s===u.defaultPrecacheCacheabilityPlugin&&(e=r),s.cacheWillUpdate&&t++);t===0?this.plugins.push(u.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}};u.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:o}){return!o||o.status>=400?null:o}};u.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:o}){return o.redirected?await I(o):o}};var N=class{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new u({cacheName:p.getPrecacheName(e),plugins:[...t,new O({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let r of e){typeof r=="string"?t.push(r):r&&r.revision===void 0&&t.push(r.url);let{cacheKey:s,url:a}=te(r),n=typeof r!="string"&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==s)throw new c("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:s});if(typeof r!="string"&&r.integrity){if(this._cacheKeysToIntegrities.has(s)&&this._cacheKeysToIntegrities.get(s)!==r.integrity)throw new c("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(s,r.integrity)}if(this._urlsToCacheKeys.set(a,s),this._urlsToCacheModes.set(a,n),t.length>0){let i=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(i)}}}install(e){return $(e,async()=>{let t=new L;this.strategy.plugins.push(t);for(let[a,n]of this._urlsToCacheKeys){let i=this._cacheKeysToIntegrities.get(n),l=this._urlsToCacheModes.get(a),y=new Request(a,{integrity:i,cache:l,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:n},request:y,event:e}))}let{updatedURLs:r,notUpdatedURLs:s}=t;return{updatedURLs:r,notUpdatedURLs:s}})}activate(e){return $(e,async()=>{let t=await self.caches.open(this.strategy.cacheName),r=await t.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(let n of r)s.has(n.url)||(await t.delete(n),a.push(n.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new c("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:t},r.params),this.strategy.handle(r))}};var j,m=()=>(j||(j=new N),j);try{self["workbox:routing:7.0.0"]&&_()}catch{}var q="GET";var w=o=>o&&typeof o=="object"?o:{handle:o};var h=class{constructor(e,t,r=q){this.handler=w(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=w(e)}};var C=class extends h{constructor(e,t,r){let s=({url:a})=>{let n=e.exec(a.href);if(!!n&&!(a.origin!==location.origin&&n.index!==0))return n.slice(1)};super(s,t,r)}};var x=class{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){let{payload:t}=e.data,r=Promise.all(t.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);let a=new Request(...s);return this.handleRequest({request:a,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;let s=r.origin===location.origin,{params:a,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:r}),i=n&&n.handler,l=[],y=e.method;if(!i&&this._defaultHandlerMap.has(y)&&(i=this._defaultHandlerMap.get(y)),!i)return;let g;try{g=i.handle({url:r,request:e,event:t,params:a})}catch(R){g=Promise.reject(R)}let d=n&&n.catchHandler;return g instanceof Promise&&(this._catchHandler||d)&&(g=g.catch(async R=>{if(d)try{return await d.handle({url:r,request:e,event:t,params:a})}catch(z){z instanceof Error&&(R=z)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw R})),g}findMatchingRoute({url:e,sameOrigin:t,request:r,event:s}){let a=this._routes.get(r.method)||[];for(let n of a){let i,l=n.match({url:e,sameOrigin:t,request:r,event:s});if(l)return i=l,(Array.isArray(i)&&i.length===0||l.constructor===Object&&Object.keys(l).length===0||typeof l=="boolean")&&(i=void 0),{route:n,params:i}}return{}}setDefaultHandler(e,t=q){this._defaultHandlerMap.set(t,w(e))}setCatchHandler(e){this._catchHandler=w(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new c("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new c("unregister-route-route-not-registered")}};var v,V=()=>(v||(v=new x,v.addFetchListener(),v.addCacheListener()),v);function B(o,e,t){let r;if(typeof o=="string"){let a=new URL(o,location.href),n=({url:i})=>i.href===a.href;r=new h(n,e,t)}else if(o instanceof RegExp)r=new C(o,e,t);else if(typeof o=="function")r=new h(o,e,t);else if(o instanceof h)r=o;else throw new c("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return V().registerRoute(r),r}function re(o,e=[]){for(let t of[...o.searchParams.keys()])e.some(r=>r.test(t))&&o.searchParams.delete(t);return o}function*oe(o,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:r=!0,urlManipulation:s}={}){let a=new URL(o,location.href);a.hash="",yield a.href;let n=re(a,e);if(yield n.href,t&&n.pathname.endsWith("/")){let i=new URL(n.href);i.pathname+=t,yield i.href}if(r){let i=new URL(n.href);i.pathname+=".html",yield i.href}if(s){let i=s({url:a});for(let l of i)yield l.href}}var k=class extends h{constructor(e,t){let r=({request:s})=>{let a=e.getURLsToCacheKeys();for(let n of oe(s.url,t)){let i=a.get(n);if(i){let l=e.getIntegrityForCacheKey(i);return{cacheKey:i,integrity:l}}}};super(r,e.strategy)}};function G(o){let e=m(),t=new k(e,o);B(t)}var le="-precache-",se=async(o,e=le)=>{let r=(await self.caches.keys()).filter(s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==o);return await Promise.all(r.map(s=>self.caches.delete(s))),r};function Q(){self.addEventListener("activate",o=>{let e=p.getPrecacheName();o.waitUntil(se(e).then(t=>{}))})}function Y(o){m().precache(o)}function J(o,e){Y(o),G(e)}self.skipWaiting();H();J([{"revision":"6549733b469315f8c3d376ba9c6111aa","url":"assets/app.fb1abfa8.js"},{"revision":"bff97e5d3b8fd03ee2377643e67e0eb4","url":"assets/CalendarPage.013c1420.js"},{"revision":"c6c748334061cd1cfb9379d3f7e1029f","url":"assets/CalendarPage.eb0d7a4e.css"},{"revision":"a989a5b8e9f5719e96f45682b329cff5","url":"assets/ClosePopup.9e3066be.js"},{"revision":"c7fa5839911d7b9e93799d1700217e75","url":"assets/ContatoPage.31f76838.css"},{"revision":"34f126efa5561935d4ca087136387985","url":"assets/ContatoPage.355d2aba.js"},{"revision":"8612d5c4e701958a6461acb9ec2478ce","url":"assets/date.1c082b26.js"},{"revision":"952540fe4be12075c8990811059f2173","url":"assets/DepacPage.0c8861e7.js"},{"revision":"7dce2fcfb48a7866747b6db56d7e2eab","url":"assets/DepacPage.2aa900fd.css"},{"revision":"c23d690cb683f494da04ed5dbd150317","url":"assets/ErrorNotFound.87f8e20d.js"},{"revision":"723a05a9d0d4a4614ad5db95c1774d4a","url":"assets/EventEditPage.90820838.js"},{"revision":"25f92f47d9a8982039c9decc90b1be48","url":"assets/EventEditPage.aa7c481d.css"},{"revision":"2011616eef849cdcdd7e510a8c380bad","url":"assets/firebase.dace285c.js"},{"revision":"e0b47356282d59987a2759dc4f14760c","url":"assets/focus-manager.0bc37130.js"},{"revision":"a40f9617c478cd449af5e35f53e8e39c","url":"assets/gtag.209029e7.js"},{"revision":"c1a51b94b5fc9242f42652552bf74610","url":"assets/HinosPage.12dc545d.js"},{"revision":"a3babe21def1bd91193ec6456e762189","url":"assets/HinosPage.b06118ee.css"},{"revision":"9b4daea4cbdb780490bff04483147b73","url":"assets/index.a709097e.css"},{"revision":"42e301f8a525a3529e4664fb33eabc87","url":"assets/index.c04fa981.js"},{"revision":"4e8e1815d36d7473e6e74cea72681b73","url":"assets/IndexPage.0d30f93d.css"},{"revision":"46684631f18bc22b3af65ed450b98871","url":"assets/IndexPage.ab4f5dbf.js"},{"revision":"ee7a1924084e416e739854009d43b667","url":"assets/ListasPage.11a16872.js"},{"revision":"6ca723844829259c43bda2f11c06d282","url":"assets/ListasPage.d8ebb968.css"},{"revision":"8425825815f5d15c2cbe69d4b95e4b1d","url":"assets/MainLayout.97e38173.css"},{"revision":"a209c01c30a2a6a10fc77ab451c1fda1","url":"assets/MainLayout.a2bbf053.js"},{"revision":"290976b278c081e7d09f507973b3100b","url":"assets/OutrasPage.d5b745df.js"},{"revision":"b29b145139fc88e89a46af507277557d","url":"assets/plugin-vue_export-helper.21dcd24c.js"},{"revision":"cad0495e5b4b6449a54a4b310649c2fe","url":"assets/private.use-form.bf19e89f.js"},{"revision":"a64717d4f5f521c91e39352cecf5cef2","url":"assets/QBanner.e3ffcdc9.js"},{"revision":"e439ade3007f0dddf57bc90f4319194a","url":"assets/QChip.0a80ac06.js"},{"revision":"853509d58e95d21b02b43e4d8970c7ee","url":"assets/QDate.085122d9.js"},{"revision":"6600484914e8329e64b50f3c03e35306","url":"assets/QInput.51672baa.js"},{"revision":"12a71f09deb405c791867dcf0ac10a9c","url":"assets/QList.d35b306b.js"},{"revision":"b8f3db99863e75e137fcfe42b30de95a","url":"assets/QResizeObserver.ab888e1d.js"},{"revision":"aa0e8c3f138ddb106df28113b3c6c258","url":"assets/QSeparator.d8b4ab08.js"},{"revision":"bb6c635a1cff2247744837f7438f0658","url":"assets/SettingsPage.af9c7a90.js"},{"revision":"1074039477ed5f3cea07acd17e2fc64d","url":"assets/SettingsPage.c52e93a9.css"},{"revision":"5d095dd499d00bdc7fa784614484bf0d","url":"assets/SobrePage.2c733999.js"},{"revision":"85a35d9041e5802c586712407491bb75","url":"assets/TagPage.77d2c5cd.js"},{"revision":"24f07721be5e2b1b57eb5afc99892e0f","url":"assets/use-dark.81abead7.js"},{"revision":"8f8cb2f8bdfe89aa58dd42b5767e4f30","url":"assets/use-quasar.f2e226bc.js"},{"revision":"7451647b3ba1dce3eeee260fb3cb1dd8","url":"favicon.svg"},{"revision":"5a8257673ea178c23a1b2878d6683016","url":"firebase-messaging-sw.js"},{"revision":"445330b6d155777dd3077efddbf1889a","url":"icons/android-chrome-192x192.png"},{"revision":"9d40d3ad75ba40e7b6d26497adbf6ce0","url":"icons/android-chrome-196x196.png"},{"revision":"445330b6d155777dd3077efddbf1889a","url":"icons/android-chrome-512x512.png"},{"revision":"445330b6d155777dd3077efddbf1889a","url":"icons/android-chrome-maskable-192x192.png"},{"revision":"9d40d3ad75ba40e7b6d26497adbf6ce0","url":"icons/android-chrome-maskable-196x196.png"},{"revision":"9865d61e6a42bcabbef771fd7292b9c8","url":"icons/android-chrome-maskable-512x512.png"},{"revision":"3e30fdba84f99a2cdea942d3386bda5e","url":"icons/apple-icon-120x120.png"},{"revision":"5de3d31ea32c550c01f26ac91f95886d","url":"icons/apple-icon-152x152.png"},{"revision":"3cb2f662d4c702650d3966041b4f1dfb","url":"icons/apple-icon-167x167.png"},{"revision":"cb1949dbcadce523f0b12f174801dbe6","url":"icons/apple-icon-180x180.png"},{"revision":"6d73c00c3bbf328d9d2dbee97e05a8e8","url":"icons/apple-touch-icon-120x120.png"},{"revision":"6f29489f291ea9bca75a9d7c17ca500d","url":"icons/apple-touch-icon-152x152.png"},{"revision":"99e4e67ac9f4e0368a81ecc783998590","url":"icons/apple-touch-icon-180x180.png"},{"revision":"61f196a2b50d556d8870adff1ff50075","url":"icons/apple-touch-icon-60x60.png"},{"revision":"4fcd594611da13bd1dc9b5195bce15be","url":"icons/apple-touch-icon-76x76.png"},{"revision":"9865d61e6a42bcabbef771fd7292b9c8","url":"icons/apple-touch-icon.png"},{"revision":"68417716c8697324225cf68ff6594301","url":"icons/favicon-16x16.png"},{"revision":"5cba9214074a701556e3ba60cc21a7f4","url":"icons/favicon-32x32.png"},{"revision":"d3c113ee59ec5850141294889adb9202","url":"icons/icon-128x128.png"},{"revision":"81a7859e0a41345f6a8d27617415f8e6","url":"icons/icon-192x192.png"},{"revision":"4198631efef4a6325477640b1c8f30f6","url":"icons/icon-256x256.png"},{"revision":"43e47afe7bb5de53c8dcbc8dee3dbda0","url":"icons/icon-384x384.png"},{"revision":"ea3b6bfd3fcc5bf4a9984ddee025f293","url":"icons/icon-512x512.png"},{"revision":"530e94c00710db02809816ad83e86563","url":"icons/ms-icon-144x144.png"},{"revision":"50f1bb98307c8bbb87d77d98c63c9ee0","url":"icons/msapplication-icon-144x144.png"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"icons/mstile-150x150.png"},{"revision":"7035d90c8683a6d71ac955b849c43f3f","url":"icons/safari-pinned-tab.svg"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb.png"},{"revision":"4af3030adacde71634bbb35e37f356cf","url":"index.html"}]);Q();self.addEventListener("message",o=>{console.log("Mensagem recebida no Service Worker:",o.data)});self.addEventListener("install",()=>{});self.addEventListener("activate",()=>{console.log("Eventos agendados...")});})();
