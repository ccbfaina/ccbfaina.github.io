if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let d={};const s=e=>i(e,n),o={module:{uri:n},exports:d,require:s};a[n]=Promise.all(r.map((e=>o[e]||s(e)))).then((e=>(c(...e),d)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ccb-regional-faina"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/main.546626d3.css",revision:null},{url:"/data/data.json",revision:"5644d3dadd70c82869ca3c6b85866a06"},{url:"/data/database.json",revision:"6a0ffdc1f04003062633bc3c7d4bc6c0"},{url:"/data/desc",revision:"d3f4f5a5fe364a87f911cbb75e181fbf"},{url:"/data/events.json",revision:"4c352d4be707feb264848b9847b600af"},{url:"/data/lista.json",revision:"a934f1c0234b715caa32487145dc3d6b"},{url:"/data/locales",revision:"1fecbe23270df019e67faba194e64f0c"},{url:"/data/menu.json",revision:"1f4dc46384eefd9df88caeadd056a45c"},{url:"/data/titles",revision:"880b26d4f6520a72b2b1df874246c2aa"},{url:"/fonts/Inter-Regular.1282ebc6.ttf",revision:null},{url:"/img/adicionar.png",revision:"ab9607bc17ec645bc3d1560cb5d707ea"},{url:"/img/agenda.png",revision:"135ab3e28f821921aa6d65e6e0423b96"},{url:"/img/aperto-de-mao.png",revision:"57176b3f44598e1ea6ed2c070c494a32"},{url:"/img/botao-fechar.png",revision:"c7f0c23c7708c51c76c544bf534c69b7"},{url:"/img/calendario.png",revision:"5d6867e4458d45af3cee67cf38e0ec4e"},{url:"/img/cloud-sync.png",revision:"3f03311f842ab89987b51d2a8988d259"},{url:"/img/compartilhar.png",revision:"796b0333d55fc2ce0262ac59dfabb55a"},{url:"/img/configuracao.png",revision:"6d3e08cb063bb12ad25034255d17d59b"},{url:"/img/documento.png",revision:"5c8d1bf99845e69a5b754d04b5c2a7ac"},{url:"/img/impressora.png",revision:"2076af17726c4b47d9cc3a501d068c7e"},{url:"/img/lista.png",revision:"85a8c3daa69e01a6a264a27896493fa7"},{url:"/img/lixeira.png",revision:"710f8cc242e975ce719df4599d2acd5c"},{url:"/img/outro.png",revision:"2706c763b1a4ccea0ba2e48dfcac63b2"},{url:"/img/pesquisa.png",revision:"1f641102b374f9ede512bb40e0c6883e"},{url:"/img/prancheta.png",revision:"a392ad8e80d96fed01423988b32e7537"},{url:"/img/recarregar.png",revision:"15c94c2a8b6bc857975f22ab0f2e16b6"},{url:"/img/recurring.png",revision:"dfb81b92c7ea0974951e2f62ea9d4eeb"},{url:"/img/repeticao.png",revision:"43025d6bbf91e989c647462f98d5d6b4"},{url:"/img/salvar-enviar.png",revision:"feaebd5a1d1d05ff957115911ac9e681"},{url:"/img/salvar-ok.png",revision:"90acffa1190a9add77099fa39d460865"},{url:"/img/salvar.png",revision:"feaebd5a1d1d05ff957115911ac9e681"},{url:"/img/solicitar.png",revision:"ec935630cad64300fcd026a382a1a362"},{url:"/img/voltar.png",revision:"720dac1f73b9cc3051159c59c72f892f"},{url:"/index.html",revision:"2f078cb1f11748e84933385cb62312d8"},{url:"/js/chunk-vendors.3a763573.js",revision:null},{url:"/js/main.3470c82a.js",revision:null},{url:"/manifest.json",revision:"46c79902a3c249e14d4a8fcf5c4b3b43"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
