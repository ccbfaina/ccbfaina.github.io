if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const f=e=>n(e,l),t={module:{uri:l},exports:o,require:f};s[l]=Promise.all(r.map((e=>t[e]||f(e)))).then((e=>(i(...e),o)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ccb-regional-faina"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.95647bfa.css",revision:null},{url:"/css/chunk-vendors.05de7d33.css",revision:null},{url:"/fonts/fa-brands-400.5f7c5bb7.ttf",revision:null},{url:"/fonts/fa-brands-400.9210030c.woff2",revision:null},{url:"/fonts/fa-regular-400.02ad4ff9.woff2",revision:null},{url:"/fonts/fa-regular-400.570a165b.ttf",revision:null},{url:"/fonts/fa-solid-900.0b5caff7.ttf",revision:null},{url:"/fonts/fa-solid-900.3eae9857.woff2",revision:null},{url:"/fonts/fa-v4compatibility.92dce52f.ttf",revision:null},{url:"/index.html",revision:"04871e3c112bb6127270b44932bffd14"},{url:"/js/app.7ef91887.js",revision:null},{url:"/js/chunk-vendors.c8865318.js",revision:null},{url:"/manifest.json",revision:"46c79902a3c249e14d4a8fcf5c4b3b43"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
