if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const a=e=>r(e,s),f={module:{uri:s},exports:o,require:a};i[s]=Promise.all(c.map((e=>f[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ccb-regional-faina"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.0900511f.css",revision:null},{url:"/data/lista.json",revision:"1032a11c68ff360e7e183ba9bd49ed81"},{url:"/data/menu.json",revision:"d562493811dbe61ff6c2cf11d4811078"},{url:"/img/aperto-de-mao.png",revision:"57176b3f44598e1ea6ed2c070c494a32"},{url:"/img/calendario.png",revision:"5d6867e4458d45af3cee67cf38e0ec4e"},{url:"/img/impressora.png",revision:"2076af17726c4b47d9cc3a501d068c7e"},{url:"/img/lista.png",revision:"85a8c3daa69e01a6a264a27896493fa7"},{url:"/img/lixeira.png",revision:"710f8cc242e975ce719df4599d2acd5c"},{url:"/img/outro.png",revision:"2706c763b1a4ccea0ba2e48dfcac63b2"},{url:"/img/pesquisa.png",revision:"1f641102b374f9ede512bb40e0c6883e"},{url:"/img/salvar.png",revision:"feaebd5a1d1d05ff957115911ac9e681"},{url:"/img/voltar.png",revision:"720dac1f73b9cc3051159c59c72f892f"},{url:"/index.html",revision:"7f4f02b8e26bc889dc95f439f35e2fce"},{url:"/js/app.5491eb7c.js",revision:null},{url:"/js/chunk-vendors.129d2173.js",revision:null},{url:"/manifest.json",revision:"46c79902a3c249e14d4a8fcf5c4b3b43"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
