if(!self.define){let n,l={};const u=(u,i)=>(u=new URL(u+".js",i).href,l[u]||new Promise((l=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=l,document.head.appendChild(n)}else n=u,importScripts(u),l()})).then((()=>{let n=l[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(i,s)=>{const e=n||("document"in self?document.currentScript.src:"")||location.href;if(l[e])return;let r={};const o=n=>u(n,e),t={module:{uri:e},exports:r,require:o};l[e]=Promise.all(i.map((n=>t[n]||o(n)))).then((n=>(s(...n),r)))}}define(["./workbox-3bd99cbd"],(function(n){"use strict";self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"__nuxt_content/content/sql_dump",revision:"85b94405aa33f31fcd29447d1c111a64"},{url:"_nuxt/2GZm_bfv.js",revision:null},{url:"_nuxt/4H9xWGxJ.js",revision:null},{url:"_nuxt/B9K5rw8f.js",revision:null},{url:"_nuxt/BG4md1ku.js",revision:null},{url:"_nuxt/BguqKTy4.js",revision:null},{url:"_nuxt/BHQCzWBi.js",revision:null},{url:"_nuxt/BLhahYCG.js",revision:null},{url:"_nuxt/BQI37hKt.js",revision:null},{url:"_nuxt/BtnCbAAk.js",revision:null},{url:"_nuxt/BVzfsyf2.js",revision:null},{url:"_nuxt/C0RAlnsM.js",revision:null},{url:"_nuxt/C1bquttB.js",revision:null},{url:"_nuxt/CbAWCcJg.js",revision:null},{url:"_nuxt/CBBy9Bir.js",revision:null},{url:"_nuxt/CdMyglQc.js",revision:null},{url:"_nuxt/Cj4QL0yV.js",revision:null},{url:"_nuxt/DclDGnz7.js",revision:null},{url:"_nuxt/default.f3VPGo5q.css",revision:null},{url:"_nuxt/DG5qWAAn.js",revision:null},{url:"_nuxt/DHl_D6ci.js",revision:null},{url:"_nuxt/DIRdrz6T.js",revision:null},{url:"_nuxt/DITC-ugn.js",revision:null},{url:"_nuxt/DKYv77lk.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DoMi4RAx.js",revision:null},{url:"_nuxt/Dr8bL5lZ.js",revision:null},{url:"_nuxt/DRKtG4qq.js",revision:null},{url:"_nuxt/DTHrnctU.js",revision:null},{url:"_nuxt/DZmXgT8q.js",revision:null},{url:"_nuxt/entry.B0b_3z4T.css",revision:null},{url:"_nuxt/error-404.aNCZ2L4y.css",revision:null},{url:"_nuxt/error-500.JESWioAZ.css",revision:null},{url:"_nuxt/FDO2W4v7.js",revision:null},{url:"_nuxt/Jmzyt7G4.js",revision:null},{url:"_nuxt/JyY48Qeo.js",revision:null},{url:"_nuxt/nqXpsrCS.js",revision:null},{url:"_nuxt/nwa_kP-O.js",revision:null},{url:"_nuxt/OEm9sNuZ.js",revision:null},{url:"_nuxt/ProsePre.D5orA6B_.css",revision:null},{url:"_nuxt/zM5dvkUl.js",revision:null},{url:"200",revision:"1e3a8f61753eee5a877a573395f69ec9"},{url:"404",revision:"3e4bf3d089bf40fd716d7700ba646819"},{url:"about",revision:"8ef709a18a555c6f3c5d7db48746bd03"},{url:"favicon.ico",revision:"5c1028350a39fb9e5a9bfbe280326e28"},{url:"img/logo-ccb-light.png",revision:"d78f8eab7b18b38fba494719de4804db"},{url:"/",revision:"2ddd31114ea2e7ae5426cc210d582dc2"},{url:"_payload.json",revision:"2aadc1ffb11b70989f7b9fb655808cb1"},{url:"about/_payload.json",revision:"34160982d8c0deeb6f8fcb1ec6cc3144"},{url:"_nuxt/builds/latest.json",revision:"7c15cf19b142b2131226e5ae9525a07a"},{url:"_nuxt/builds/meta/f493a8fe-bd4b-4a6c-916e-c3efef55a731.json",revision:null},{url:"manifest.webmanifest",revision:"373888ed52d8f85d950782dbb70c023f"},{url:"manifest.webmanifest",revision:"373888ed52d8f85d950782dbb70c023f"}],{}),n.cleanupOutdatedCaches(),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/"))),n.registerRoute(/^\/$/,new n.NetworkFirst({cacheName:"home-page-cache",plugins:[]}),"GET"),n.registerRoute(/\.(?:js|json|css|html|png|svg|ico|woff2|woff|ttf|otf|eot|jpg|jpeg|gif|bmp|webp|avif)$/,new n.CacheFirst({cacheName:"assets-cache",plugins:[]}),"GET")}));
