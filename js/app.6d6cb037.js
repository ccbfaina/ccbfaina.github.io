(function(){"use strict";var e={850:function(e,t,n){var s=n(9242),o=n(3396);const i=(0,o._)("div",{class:"header"},[(0,o._)("h1",null,[(0,o._)("b",null,"CONGREGAÇÃO CRISTÃ NO BRASIL")]),(0,o._)("u",null,"REGIONAL FAINA")],-1),r={class:"container"};function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("div",r,[(0,o.Wm)(n)])],64)}var l=n(89);const c={},u=(0,l.Z)(c,[["render",a]]);var d=u,g=n(2483),p=n(5431);(0,p.z)("/service-worker.js",{ready(){console.log("O aplicativo está sendo servido do cache por um service worker.")},registered(){console.log("O trabalhador do serviço foi registrado.")},cached(){console.log("O conteúdo foi armazenado em cache para uso off-line.")},updatefound(){console.log("Novo conteúdo está sendo baixado.")},updated(){console.log("Novo conteúdo está disponível; por favor atualize.")},offline(){console.log("Nenhuma conexão com a Internet encontrada. O aplicativo está sendo executado no modo offline.")},error(e){console.error("Erro durante o registro do service worker:",e)}});n(7658),n(2062);var h=n(7139),f=n(4870);const v=e=>((0,o.dD)("data-v-a202c4b8"),e=e(),(0,o.Cn)(),e),m={class:"search print-hide"},w=v((()=>(0,o._)("h3",null,"Outras:",-1))),b={class:"suggestions"},_=["onClick"];var y=(0,o.aZ)({__name:"Search",emits:["fetched"],setup(e,{emit:t}){const n=(0,g.tv)(),i=(0,g.yj)(),r=()=>{window.print()},a=(0,f.qj)({search:"REGIONAL",suggestions:["REGIONAL","DARPE"]}),l=()=>{["REGIONAL","DARPE"].includes(a.search)||(a.suggestions=a.suggestions.filter((e=>e!==a.search)),localStorage.setItem("suggestion",JSON.stringify(a.suggestions))),a.search="REGIONAL"},c=()=>{a.suggestions.push(a.search),localStorage.setItem("suggestion",JSON.stringify(a.suggestions))},u=e=>{n.push(`/lista/${e}`),a.search=e};return"string"===typeof i.params.filter&&(a.search=i.params.filter,a.search&&"save"===i.params.params&&(a.suggestions.includes(a.search)||c())),(0,o.m0)((()=>{t("fetched",a.search)})),(0,o.bv)((()=>{const e=JSON.parse(localStorage.getItem("suggestion")||"[]");e.forEach((e=>{a.suggestions.includes(e)||a.suggestions.push(e)}))})),(e,t)=>((0,o.wg)(),(0,o.iD)("div",m,[(0,o.wy)((0,o._)("input",{class:"print-hide",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.search=e),placeholder:"Pesquisar...","x-webkit-speech":""},null,512),[[s.nr,a.search]]),(0,o._)("img",{class:"print-hide print hide",onClick:t[1]||(t[1]=(0,s.iM)((e=>r()),["prevent"])),src:"/img/impressora.png",alt:"Impressão"}),a.search&&!a.suggestions.includes(a.search)?((0,o.wg)(),(0,o.iD)("img",{key:0,onClick:c,class:"print-hide save hide",src:"/img/salvar.png"})):(0,o.kq)("",!0),(0,o._)("img",{onClick:l,class:"print-hide clear",src:"/img/lixeira.png"}),(0,o._)("div",null,[w,(0,o._)("ul",b,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.suggestions.filter((e=>e!==a.search)),(e=>((0,o.wg)(),(0,o.iD)("li",{key:e,onClick:t=>u(e)},(0,h.zw)(e),9,_)))),128))])])]))}});const D=(0,l.Z)(y,[["__scopeId","data-v-a202c4b8"]]);var k=D;const S={class:"lista"},O=["summary"],E={colspan:"5"},A=["onDblclick"],C={key:0},I={key:1},N={key:2},R=["innerHTML"],L={key:0},P=(0,o._)("div",{class:"print-only right"},[(0,o._)("a",{style:{color:"black"},href:"https://faina.ccbgo.org.br"}," faina.ccbgo.org.br ")],-1),j=(0,o._)("div",{class:"print-only"},[(0,o._)("i",null,[(0,o.Uk)(" Oração Santa Ceia "),(0,o._)("br"),(0,o._)("b",null,"Pão:"),(0,o.Uk)(' "Senhor, abençoa este Pão que vamos comer, que é a comunhão do Corpo de Cristo." '),(0,o._)("br"),(0,o._)("b",null,"Cálice: "),(0,o.Uk)('"Senhor, abençoa o Cálice que vamos beber, que é a comunhão do Sangue de Cristo." ')])],-1),x={class:"print-hide"},T={key:1};var q=(0,o.aZ)({__name:"Lista",setup(e){const t=(0,f.qj)({itens:[],lists:[],titles:[],filter:""}),n=e=>{t.filter=e},s=e=>{window.open(e.url,"_blank")},i=(0,o.Fl)((()=>{const e={itens:[],lists:[],titles:[],filter:t.filter.toLocaleLowerCase().trim()};return""===e.filter?(e.itens=t.itens,e.titles=t.titles,e.lists=t.lists):(e.itens=t.itens.filter((t=>Object.values(t).join(", ").toLowerCase().includes(e.filter))),e.titles.slice(0,0),e.lists.slice(0,0),e.itens.forEach((t=>(e.titles.includes(t.title)||e.titles.push(t.title),e.lists.includes(t.list)||e.lists.push(t.list),t)))),e})),r=(0,f.iH)(!1);async function a(){r.value=!0;const e=async e=>{const t=await fetch(e),n=await t.text();return JSON.parse(n)},n=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];let s=[];try{const t="https://faina.ccbgo.org.br";let n=JSON.parse(localStorage.getItem("values")||"[]");const o=e=>{e&&e.length&&(s=e,localStorage.setItem("values",JSON.stringify(s)))};n=(await e(`${t}/data/lista.json`)).values,n=(await e(`${t}/data/lista.json?v=${parseInt((new Date).toISOString().replace(/\D/g,""))}`)).values,o(n)}catch(o){console.info("Erro coletar storage:",o)}t.itens=s.filter((e=>""===e[2]||new Date(e[2])>=new Date)).map((e=>{const t=new Date(e[2]),s=String(t.getDate()||"").padStart(2,"0"),o=String(t.getMonth()+1||"").padStart(2,"0"),i=String(t.getHours()||"").padStart(2,"0"),r=String(t.getMinutes()||"").padStart(2,"0"),a=n[t.getDay()]||"";return{list:e[0],title:e[1],date:{dd:s,m:o,hh:i,mm:r,s:a},locale:e[3],desc:e[4],id:e[5],eid:e[6],url:`https://calendar.google.com/calendar/r/eventedit/${e[6]}`}})).map((e=>(t.titles.includes(e.title)||t.titles.push(e.title),t.lists.includes(e.list)||t.lists.push(e.list),e)))}a(),setInterval(a,6e4),document.addEventListener("keydown",(function(e){e.ctrlKey&&/(m|e)/gi.test(e.key)&&(e.stopPropagation(),console.log("Ctrl + M foi pressionado!"),window.open("https://docs.google.com/spreadsheets/d/13sjbh4fRi_CiSET4ARbZA3S4pTugDTEOTYMWy8YGr4w/edit#gid=0","_blank"))}));const l=(0,f.iH)({filter:""});var c=new URL(window.location.href.replace(/\/#/gi,""));const u=new URLSearchParams(c.search);return l.value.filter=u.get("filter")||"",(e,t)=>((0,o.wg)(),(0,o.iD)("div",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.value.lists,(e=>((0,o.wg)(),(0,o.iD)(o.HY,{key:e},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.value.titles,(t=>((0,o.wg)(),(0,o.iD)(o.HY,{key:t},[i.value.itens.filter((e=>e.title===t)).filter((t=>t.list===e)).length?((0,o.wg)(),(0,o.iD)("table",{key:0,summary:t},[(0,o._)("thead",null,[(0,o._)("th",E,(0,h.zw)(t),1)]),(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.value.itens.filter((e=>e.title===t)).filter((t=>t.list===e)),(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id,onDblclick:t=>s(e)},["00"!==e.date.dd?((0,o.wg)(),(0,o.iD)("td",C,[(0,o._)("b",null,(0,h.zw)(e.date.dd)+"/"+(0,h.zw)(e.date.m),1)])):(0,o.kq)("",!0),""!==e.date.s?((0,o.wg)(),(0,o.iD)("td",I,(0,h.zw)(e.date.s),1)):(0,o.kq)("",!0),"00"!==e.date.hh?((0,o.wg)(),(0,o.iD)("td",N,(0,h.zw)(e.date.hh)+":"+(0,h.zw)(e.date.mm),1)):(0,o.kq)("",!0),(0,o._)("td",null,(0,h.zw)(e.locale),1),(0,o._)("td",{innerHTML:e.desc},null,8,R)],40,A)))),128))])],8,O)):(0,o.kq)("",!0)],64)))),128))],64)))),128)),r.value?((0,o.wg)(),(0,o.iD)("div",L,[P,j,(0,o._)("div",x,[(0,o.Wm)(k,{onFetched:n,search:l.value.filter},null,8,["search"])])])):((0,o.wg)(),(0,o.iD)("div",T,"Carregando..."))]))}});const H=q;var z=H;function G(e,t){return(0,o.wg)(),(0,o.iD)("div",null,"Pagina não encontrada!")}const J={},M=(0,l.Z)(J,[["render",G]]);var Y=M;const Z=e=>((0,o.dD)("data-v-0ed4bbb5"),e=e(),(0,o.Cn)(),e),U={style:{"text-align":"center"},class:"darpe"},K=Z((()=>(0,o._)("p",null,[(0,o._)("b",null,"DEPARTAMENTO DE ASSISTÊNCIA RELIGIOSA PARA EVANGELIZAÇÃO (DARPE)")],-1))),$=Z((()=>(0,o._)("p",null,[(0,o._)("br"),(0,o.Uk)(" O DARPE tem por finalidade propagar o Evangelho de Nosso Senhor Jesus Cristo, o amor de Deus, tendo por cabeça só a Jesus Cristo e por guia o Espírito Santo da Graça. (João 16:13) ")],-1))),F=Z((()=>(0,o._)("p",null,[(0,o._)("a",{href:"#/lista?filter=DARPE"}," Acesse a lista de atendimento do DARPE ")],-1))),W=[K,$,F];function Q(e,t){return(0,o.wg)(),(0,o.iD)("div",U,W)}const V={},B=(0,l.Z)(V,[["render",Q],["__scopeId","data-v-0ed4bbb5"]]);var X=B;const ee=(0,s.ri)(d),te=(0,g.p7)({history:(0,g.PO)(),routes:[{path:"/",component:z},{path:"/about",component:Y},{path:"/darpe",component:X},{path:"/lista/:filter?/:params?",component:z}]});ee.use(te),ee.mount("#app")}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,i){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(a=!1,i<r&&(r=i));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,i,r=s[0],a=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var u=l(n)}for(t&&t(s);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},s=self["webpackChunkccb_regional_faina"]=self["webpackChunkccb_regional_faina"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(850)}));s=n.O(s)})();
//# sourceMappingURL=app.6d6cb037.js.map