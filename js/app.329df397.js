(function(){"use strict";var e={6925:function(e,o,n){var t=n(9242),i=n(3396),r=n(7139),a=n(4870);const s=e=>((0,i.dD)("data-v-fcf33ebe"),e=e(),(0,i.Cn)(),e),l={class:"lista"},c={class:"header"},u=s((()=>(0,i._)("h1",null,[(0,i._)("b",null,"CONGREGAÇÃO CRISTÃ NO BRASIL")],-1))),d=s((()=>(0,i._)("u",null," REGIONAL FAINA",-1))),f={class:"buttons row"},p={key:0},g={class:"data"},v=["innerHTML"],h=s((()=>(0,i._)("div",{class:"print-only right",style:{"margin-top":"30px","font-size":"10px"}},[(0,i._)("p",null,[(0,i.Uk)(" Lista em: "),(0,i._)("a",{style:{color:"black"},href:"https://ccbfaina.github.io"},"ccbfaina.github.io")])],-1))),w=s((()=>(0,i._)("div",{class:"footer print-only",style:{"margin-top":"60px","font-size":"10px"}},[(0,i._)("b",null,[(0,i._)("i",null,[(0,i._)("p",null,[(0,i.Uk)(" Oração Santa Ceia "),(0,i._)("br"),(0,i.Uk)('Pão: "Senhor, abençoa este Pão que vamos comer, que é a comunhão do Corpo de Cristo." ')]),(0,i._)("p",null,' Cálice: "Senhor, abençoa o Cálice que vamos beber, que é a comunhão do Sangue de Cristo." ')])])],-1))),_={key:1},b={class:"hide ler"},m={class:"data"},y=["innerHTML"];var O=(0,i.aZ)({__name:"Lista",props:["msg"],setup(e){const o=e,n=new Date,t=(0,a.qj)({tipos:[],listas:[]}),s=(0,a.iH)(!1);function O(){window.print()}async function k(){s.value=!0;try{const e=await fetch("https://ccbfaina.github.io/data.json"),o=await e.text(),i=JSON.parse(o).data;t.listas=i.listas.filter((e=>!(e[4]&&new Date(e[4])<n))),t.tipos=i.tipos.filter((e=>t.listas.find((o=>o[0].includes(e))))),localStorage.setItem("data",JSON.stringify(t))}catch(e){console.error("Erro:",e);const o=localStorage.getItem("data");o&&(t.listas=JSON.parse(o).listas,t.tipos=JSON.parse(o).tipos)}}k(),document.addEventListener("keydown",(function(e){e.ctrlKey&&/(m|e)/gi.test(e.key)&&(e.stopPropagation(),console.log("Ctrl + M foi pressionado!"),window.open("https://docs.google.com/spreadsheets/d/13sjbh4fRi_CiSET4ARbZA3S4pTugDTEOTYMWy8YGr4w/edit#gid=0","_blank"))}));let S=window.speechSynthesis,D=!1,E="";async function L(){const e=document.querySelector("#app")?.querySelectorAll(".ler");function o(e){return new Promise(((o,n)=>{if(D)S.cancel(),D=!1,n();else{const n=S.getVoices().find((e=>e.name===E));if(n&&""!==e){const t=new SpeechSynthesisUtterance(e);t.voice=n,t.addEventListener("start",(()=>{console.log("Iniciado!")})),t.addEventListener("end",(()=>{console.log("Terminado!"),o()})),S.speak(t),D=!0}}}))}if(e){const t=S.getVoices(),i=t.find((e=>/pt-BR/gi.test(e.lang)));i&&i.name&&(E=i.name),console.log("Voz selecionada: ",i?.name);for(const r of e)if(r instanceof HTMLElement){const e=r.textContent;if(e){r.classList.add("yellow");try{await o(e)}catch(n){console.log("Erro:",n)}r.classList.remove("yellow")}}}}return(e,n)=>((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",c,[u,(0,i._)("h2",null,(0,r.zw)(o.msg),1),d]),(0,i._)("div",f,[(0,i._)("button",{onClick:n[0]||(n[0]=e=>O()),class:"print-hide button"},"Imprimir"),(0,i._)("button",{class:"print-hide button",onClick:n[1]||(n[1]=e=>L())},"Ler")]),s.value?((0,i.wg)(),(0,i.iD)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.tipos,(e=>((0,i.wg)(),(0,i.iD)(i.HY,{key:e},[(0,i._)("h3",null,(0,r.zw)(e),1),(0,i._)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.listas.filter((o=>o[0]===e)),(e=>((0,i.wg)(),(0,i.iD)(i.HY,{key:e},[(0,i._)("div",null,(0,r.zw)(e[1].replace(/00:00/gi,"")),1),(0,i._)("div",null,(0,r.zw)(e[2]),1),(0,i._)("div",{class:"ponto",innerHTML:e[3]},null,8,v)],64)))),128))])],64)))),128)),h,w])):((0,i.wg)(),(0,i.iD)("div",_,"Carregando...")),(0,i._)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.tipos,(e=>((0,i.wg)(),(0,i.iD)(i.HY,{key:e},[(0,i._)("h3",null,(0,r.zw)(e)+".",1),(0,i._)("div",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.listas.filter((o=>o[0]===e)),(e=>((0,i.wg)(),(0,i.iD)(i.HY,{key:e},[(0,i._)("div",null,(0,r.zw)(" "+new Date(e[4]).toLocaleString()+", "),1),(0,i._)("div",null,(0,r.zw)(" "+e[2]+", "),1),(0,i._)("div",{innerHTML:" "+e[3]+"."},null,8,y)],64)))),128))])],64)))),128))])]))}}),k=n(89);const S=(0,k.Z)(O,[["__scopeId","data-v-fcf33ebe"]]);var D=S;var E=(0,i.aZ)({__name:"App",setup(e){return document.title="REGIONAL FAINA",(e,o)=>((0,i.wg)(),(0,i.j4)(D,{msg:"LISTA DE ATENDIMENTOS E DIVERSOS"}))}});const L=E;var C=L,T=n(5431);(0,T.z)("/service-worker.js",{ready(){console.log("O aplicativo está sendo servido do cache por um service worker.")},registered(){console.log("O trabalhador do serviço foi registrado.")},cached(){console.log("O conteúdo foi armazenado em cache para uso off-line.")},updatefound(){console.log("Novo conteúdo está sendo baixado.")},updated(){console.log("Novo conteúdo está disponível; por favor atualize.")},offline(){console.log("Nenhuma conexão com a Internet encontrada. O aplicativo está sendo executado no modo offline.")},error(e){console.error("Erro durante o registro do service worker:",e)}});n(5778);(0,t.ri)(C).mount("#app")}},o={};function n(t){var i=o[t];if(void 0!==i)return i.exports;var r=o[t]={exports:{}};return e[t].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(o,t,i,r){if(!t){var a=1/0;for(u=0;u<e.length;u++){t=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,l=0;l<t.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=i();void 0!==c&&(o=c)}}return o}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,i,r]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var i,r,a=t[0],s=t[1],l=t[2],c=0;if(a.some((function(o){return 0!==e[o]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(o&&o(t);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},t=self["webpackChunkccb_regional_faina"]=self["webpackChunkccb_regional_faina"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(6925)}));t=n.O(t)})();
//# sourceMappingURL=app.329df397.js.map