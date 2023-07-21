(function(){"use strict";var e={2069:function(e,o,n){var t=n(9242),a=n(3396),r=n(4870);const i=(0,a._)("iframe",{src:"https://calendar.google.com/calendar/embed?height=1024&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&mode=MONTH&hl=pt_BR&showTz=0&showDate=1&showNav=1&src=Y18zOWVmYjA3MmZhZDYyYmNlMDFlYmE2YWQyMjY0OTQ5YjA3NGJiOGMxODA4MzU3NmJmNTdkZTg2YzgzOWYwNzc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23575757",style:{"border-width":"0"},width:"100%",height:"1024",frameborder:"0",scrolling:"no"},null,-1),s=[i];var l=(0,a.aZ)({__name:"Agenda",setup(e){return document.title="REGIONAL FAINA: Agenda",(e,o)=>((0,a.wg)(),(0,a.iD)("div",null,s))}});const c=l;var d=c,u=n(7139);const f=e=>((0,a.dD)("data-v-7edecf1a"),e=e(),(0,a.Cn)(),e),p={class:"lista"},g={class:"print print-hide"},v=f((()=>(0,a._)("img",{src:"img/impressora.png",alt:"Impressão"},null,-1))),h=[v],m={key:0},w={class:"data"},_=["innerHTML"],b=f((()=>(0,a._)("div",{class:"print-only right",style:{"margin-top":"30px","font-size":"10px"}},[(0,a._)("p",null,[(0,a.Uk)(" Lista em: "),(0,a._)("a",{style:{color:"black"},href:"https://ccbfaina.github.io"},"ccbfaina.github.io")])],-1))),O=f((()=>(0,a._)("div",{class:"footer print-only",style:{"margin-top":"60px","font-size":"10px"}},[(0,a._)("b",null,[(0,a._)("i",null,[(0,a._)("p",null,[(0,a.Uk)(" Oração Santa Ceia "),(0,a._)("br"),(0,a.Uk)('Pão: "Senhor, abençoa este Pão que vamos comer, que é a comunhão do Corpo de Cristo." ')]),(0,a._)("p",null,' Cálice: "Senhor, abençoa o Cálice que vamos beber, que é a comunhão do Sangue de Cristo." ')])])],-1))),y={key:1};var k=(0,a.aZ)({__name:"Lista",setup(e){document.title="REGIONAL FAINA: Lista de Atendimento";const o=new Date,n=(0,r.qj)({tipos:[],listas:[]}),i=(0,r.iH)(!1);function s(){window.print()}async function l(){i.value=!0;try{const e=await fetch("data.json"),t=await e.text(),a=JSON.parse(t).data;n.listas=a.listas.filter((e=>!(e[4]&&new Date(e[4])<o))),n.tipos=a.tipos.filter((e=>n.listas.find((o=>o[0].includes(e)))))}catch(e){console.error("Erro:",e)}}return l(),document.addEventListener("keydown",(function(e){e.ctrlKey&&/(m|e)/gi.test(e.key)&&(e.stopPropagation(),console.log("Ctrl + M foi pressionado!"),window.open("https://docs.google.com/spreadsheets/d/13sjbh4fRi_CiSET4ARbZA3S4pTugDTEOTYMWy8YGr4w/edit#gid=0","_blank"))})),(e,o)=>((0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",g,[(0,a._)("a",{onClick:o[0]||(o[0]=(0,t.iM)((e=>s()),["prevent"])),href:"#"},h)]),i.value?((0,a.wg)(),(0,a.iD)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tipos,(e=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e},[(0,a._)("h3",null,(0,u.zw)(e),1),(0,a._)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.listas.filter((o=>o[0]===e)),(e=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e},[(0,a._)("div",null,(0,u.zw)(e[1].replace(/00:00/gi,"")),1),(0,a._)("div",null,(0,u.zw)(e[2]),1),(0,a._)("div",{class:"ponto",innerHTML:e[3]},null,8,_)],64)))),128))])],64)))),128)),b,O])):((0,a.wg)(),(0,a.iD)("div",y,"Carregando..."))]))}}),A=n(89);const N=(0,A.Z)(k,[["__scopeId","data-v-7edecf1a"]]);var D=N;function C(e,o){return(0,a.wg)(),(0,a.iD)("div",null,"Pagina não encontrada!")}const L={},Y=(0,A.Z)(L,[["render",C]]);var j=Y;const x=e=>((0,a.dD)("data-v-d3342c76"),e=e(),(0,a.Cn)(),e),z={class:"flex"},I=x((()=>(0,a._)("a",{href:"#/lista"},[(0,a._)("img",{src:"img/lista.png",alt:"Lista de Atendimentos"}),(0,a.Uk)(" Lista ")],-1))),T=x((()=>(0,a._)("a",{href:"#/agenda"},[(0,a._)("img",{src:"img/calendario.png",alt:"Calendário"}),(0,a.Uk)(" Calendário ")],-1))),E=[I,T];function Z(e,o){return(0,a.wg)(),(0,a.iD)("div",z,E)}const G={},M=(0,A.Z)(G,[["render",Z],["__scopeId","data-v-d3342c76"]]);var S=M;const H=(0,a._)("div",{class:"header"},[(0,a._)("h1",null,[(0,a._)("b",null,"CONGREGAÇÃO CRISTÃ NO BRASIL")]),(0,a.Uk)(" REGIONAL FAINA ")],-1),R={class:"container"},F={class:"back print-hide",href:"#"},P={key:0,src:"img/voltar.png",alt:"Voltar"};var U=(0,a.aZ)({__name:"App",setup(e){document.title="REGIONAL FAINA";const o={"/":S,"/lista":D,"/agenda":d},n=(0,r.iH)(window.location.hash);window.addEventListener("hashchange",(()=>{n.value=window.location.hash}));const t=(0,a.Fl)((()=>{const e=n.value.slice(1)||"/";return o[e]||j}));return(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[H,(0,a._)("div",R,[(0,a._)("a",F,[["","#/"].includes(n.value)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("img",P))]),((0,a.wg)(),(0,a.j4)((0,a.LL)(t.value)))])],64))}});const q=U;var V=q,W=n(5431);(0,W.z)("/service-worker.js",{ready(){console.log("O aplicativo está sendo servido do cache por um service worker.")},registered(){console.log("O trabalhador do serviço foi registrado.")},cached(){console.log("O conteúdo foi armazenado em cache para uso off-line.")},updatefound(){console.log("Novo conteúdo está sendo baixado.")},updated(){console.log("Novo conteúdo está disponível; por favor atualize.")},offline(){console.log("Nenhuma conexão com a Internet encontrada. O aplicativo está sendo executado no modo offline.")},error(e){console.error("Erro durante o registro do service worker:",e)}});var J=n(7600);const K=(0,t.ri)(V);K.use(J.Z,{appId:"9d542caf-9fe4-4073-b1cb-4f23225c8a71"}),K.mount("#app")}},o={};function n(t){var a=o[t];if(void 0!==a)return a.exports;var r=o[t]={exports:{}};return e[t].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(o,t,a,r){if(!t){var i=1/0;for(d=0;d<e.length;d++){t=e[d][0],a=e[d][1],r=e[d][2];for(var s=!0,l=0;l<t.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(d--,1);var c=a();void 0!==c&&(o=c)}}return o}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,a,r]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var a,r,i=t[0],s=t[1],l=t[2],c=0;if(i.some((function(o){return 0!==e[o]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(o&&o(t);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},t=self["webpackChunkccb_regional_faina"]=self["webpackChunkccb_regional_faina"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(2069)}));t=n.O(t)})();
//# sourceMappingURL=app.f0b54edd.js.map