if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const r=e=>c(e,n),o={module:{uri:n},exports:d,require:r};i[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(s(...e),d)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"lista"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ConfigPage.d98b74f0.js",revision:"59f3b772f49291904ee8bddbe5247eb5"},{url:"assets/ConfigPage.ea83d7b0.css",revision:"16e4c0551711999693db015d9ca7ef2d"},{url:"assets/DarpePage.2e02cd24.css",revision:"da2ea8694db2174025426515d219c40f"},{url:"assets/DarpePage.7c026ecd.js",revision:"ca06c1d7e54d66e17f27965f1f600a5c"},{url:"assets/ErrorNotFound.8108fc16.js",revision:"2f11ba000f42a7da16e6d2606911c64b"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.dc2324c4.css",revision:"521df9404e7c9c5dda9bc9009ecdd9bb"},{url:"assets/index.f699fb56.js",revision:"78e6451c3598c1b22e1fa9877ef5040c"},{url:"assets/IndexPage.6cb26e5d.css",revision:"30326df9c567adc3382a33297b2ad3ba"},{url:"assets/IndexPage.cbd632c5.js",revision:"43be5fb40d2bdfac28778f707a72e983"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/ListasPage.9f2bfe58.js",revision:"a17aa8257605367e6e5f7d149201d2ff"},{url:"assets/ListasPage.9f75e1eb.css",revision:"df7d9ac143c849829dfc537fa838bbbc"},{url:"assets/MainLayout.3fb19458.js",revision:"743d67fa00eb228c5d107bc4adb56d6b"},{url:"assets/MainLayout.cca5d6bf.css",revision:"20658dbc2a1463c370e0c459312ab098"},{url:"data/data.json",revision:"5656e627c9da57df8bf6dead669df5f7"},{url:"data/links.json",revision:"af8e062b57c6f2f1cd7ebd71fa5c51c7"},{url:"favicon.ico",revision:"49729ffbae0e8a9a0408fbeb44026ede"},{url:"icons/android-chrome-192x192.png",revision:"445330b6d155777dd3077efddbf1889a"},{url:"icons/android-chrome-196x196.png",revision:"9d40d3ad75ba40e7b6d26497adbf6ce0"},{url:"icons/android-chrome-512x512.png",revision:"445330b6d155777dd3077efddbf1889a"},{url:"icons/android-chrome-maskable-192x192.png",revision:"445330b6d155777dd3077efddbf1889a"},{url:"icons/android-chrome-maskable-196x196.png",revision:"9d40d3ad75ba40e7b6d26497adbf6ce0"},{url:"icons/android-chrome-maskable-512x512.png",revision:"9865d61e6a42bcabbef771fd7292b9c8"},{url:"icons/apple-icon-120x120.png",revision:"3e30fdba84f99a2cdea942d3386bda5e"},{url:"icons/apple-icon-152x152.png",revision:"5de3d31ea32c550c01f26ac91f95886d"},{url:"icons/apple-icon-167x167.png",revision:"3cb2f662d4c702650d3966041b4f1dfb"},{url:"icons/apple-icon-180x180.png",revision:"cb1949dbcadce523f0b12f174801dbe6"},{url:"icons/apple-touch-icon-120x120.png",revision:"6d73c00c3bbf328d9d2dbee97e05a8e8"},{url:"icons/apple-touch-icon-152x152.png",revision:"6f29489f291ea9bca75a9d7c17ca500d"},{url:"icons/apple-touch-icon-180x180.png",revision:"99e4e67ac9f4e0368a81ecc783998590"},{url:"icons/apple-touch-icon-60x60.png",revision:"61f196a2b50d556d8870adff1ff50075"},{url:"icons/apple-touch-icon-76x76.png",revision:"4fcd594611da13bd1dc9b5195bce15be"},{url:"icons/apple-touch-icon.png",revision:"9865d61e6a42bcabbef771fd7292b9c8"},{url:"icons/arte-512x512.psd",revision:"4c5e21962950a878e48a8f7defe8cd83"},{url:"icons/Contents.json",revision:"62476f31fa1c8e76733c2e1fd6fd22e4"},{url:"icons/favicon-16x16.png",revision:"68417716c8697324225cf68ff6594301"},{url:"icons/favicon-32x32.png",revision:"5cba9214074a701556e3ba60cc21a7f4"},{url:"icons/favicon.svg",revision:"7451647b3ba1dce3eeee260fb3cb1dd8"},{url:"icons/icon-128x128.png",revision:"d3c113ee59ec5850141294889adb9202"},{url:"icons/icon-192x192.png",revision:"81a7859e0a41345f6a8d27617415f8e6"},{url:"icons/icon-256x256.png",revision:"4198631efef4a6325477640b1c8f30f6"},{url:"icons/icon-384x384.png",revision:"43e47afe7bb5de53c8dcbc8dee3dbda0"},{url:"icons/icon-512x512.png",revision:"ea3b6bfd3fcc5bf4a9984ddee025f293"},{url:"icons/ms-icon-144x144.png",revision:"530e94c00710db02809816ad83e86563"},{url:"icons/msapplication-icon-144x144.png",revision:"50f1bb98307c8bbb87d77d98c63c9ee0"},{url:"icons/mstile-150x150.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"icons/safari-pinned-tab.svg",revision:"7035d90c8683a6d71ac955b849c43f3f"},{url:"img/adicionar.png",revision:"ab9607bc17ec645bc3d1560cb5d707ea"},{url:"img/agenda.png",revision:"135ab3e28f821921aa6d65e6e0423b96"},{url:"img/aperto-de-mao.png",revision:"57176b3f44598e1ea6ed2c070c494a32"},{url:"img/botao-fechar.png",revision:"c7f0c23c7708c51c76c544bf534c69b7"},{url:"img/calendario.png",revision:"5d6867e4458d45af3cee67cf38e0ec4e"},{url:"img/cloud-sync.png",revision:"3f03311f842ab89987b51d2a8988d259"},{url:"img/compartilhar.png",revision:"796b0333d55fc2ce0262ac59dfabb55a"},{url:"img/configuracao.png",revision:"6d3e08cb063bb12ad25034255d17d59b"},{url:"img/documento.png",revision:"5c8d1bf99845e69a5b754d04b5c2a7ac"},{url:"img/impressora.png",revision:"2076af17726c4b47d9cc3a501d068c7e"},{url:"img/lista.png",revision:"85a8c3daa69e01a6a264a27896493fa7"},{url:"img/lixeira.png",revision:"710f8cc242e975ce719df4599d2acd5c"},{url:"img/outro.png",revision:"2706c763b1a4ccea0ba2e48dfcac63b2"},{url:"img/pesquisa.png",revision:"1f641102b374f9ede512bb40e0c6883e"},{url:"img/prancheta.png",revision:"a392ad8e80d96fed01423988b32e7537"},{url:"img/recarregar.png",revision:"15c94c2a8b6bc857975f22ab0f2e16b6"},{url:"img/recurring.png",revision:"dfb81b92c7ea0974951e2f62ea9d4eeb"},{url:"img/repeticao.png",revision:"43025d6bbf91e989c647462f98d5d6b4"},{url:"img/salvar-enviar.png",revision:"feaebd5a1d1d05ff957115911ac9e681"},{url:"img/salvar-ok.png",revision:"90acffa1190a9add77099fa39d460865"},{url:"img/salvar.png",revision:"feaebd5a1d1d05ff957115911ac9e681"},{url:"img/solicitar.png",revision:"ec935630cad64300fcd026a382a1a362"},{url:"img/voltar.png",revision:"720dac1f73b9cc3051159c59c72f892f"},{url:"index.html",revision:"88a9cb5bd5576c90e37e54e906f35f94"},{url:"manifest.json",revision:"a75249c6082c3695634f6988b7fec5a4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service\x2dworker\.js$/,/workbox-(.)*\.js$/]}))}));
