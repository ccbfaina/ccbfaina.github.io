if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const o=e=>r(e,c),l={module:{uri:c},exports:a,require:o};i[c]=Promise.all(s.map((e=>l[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ccb-regional-faina"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.23aaa801.css",revision:null},{url:"/data.json",revision:"108759774457d2a1f36bbbe8675b6d86"},{url:"/img/calendario.png",revision:"5d6867e4458d45af3cee67cf38e0ec4e"},{url:"/img/circulares.png",revision:"63db455251f4e6b06cf63bd0ef8e9023"},{url:"/img/darpe.png",revision:"b59f49948b40c7ba4d7263fd3e076235"},{url:"/img/impressora.png",revision:"2076af17726c4b47d9cc3a501d068c7e"},{url:"/img/lista.png",revision:"85a8c3daa69e01a6a264a27896493fa7"},{url:"/img/pautas.png",revision:"7247dd89eb381b2e781a65d042c51e0a"},{url:"/img/voltar.png",revision:"720dac1f73b9cc3051159c59c72f892f"},{url:"/index.html",revision:"499b82ad17c0d46b7256a56cb46ca830"},{url:"/js/app.f0b54edd.js",revision:null},{url:"/js/chunk-vendors.3b964aee.js",revision:null},{url:"/manifest.json",revision:"46c79902a3c249e14d4a8fcf5c4b3b43"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
