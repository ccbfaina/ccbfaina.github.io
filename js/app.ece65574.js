(function(){"use strict";var e={696:function(e,t,i){var a=i(9242),n=i(3396),o=i(4870);const r=(0,n._)("iframe",{src:"https://calendar.google.com/calendar/embed?height=1024&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&mode=MONTH&hl=pt_BR&showTz=0&showDate=1&showNav=1&src=Y18zOWVmYjA3MmZhZDYyYmNlMDFlYmE2YWQyMjY0OTQ5YjA3NGJiOGMxODA4MzU3NmJmNTdkZTg2YzgzOWYwNzc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23575757",style:{"border-width":"0"},width:"100%",height:"1024",frameborder:"0",scrolling:"no"},null,-1),s=[r];var l=(0,n.aZ)({__name:"Agenda",setup(e){return document.title="REGIONAL FAINA: Agenda",(e,t)=>((0,n.wg)(),(0,n.iD)("div",null,s))}});const c=l;var d=c;const u={class:"flex"},g=(0,n.uE)('<a href="#/lista?filter=Regional" data-v-4373d8f1><img src="img/lista.png" alt="Lista de Atendimentos" data-v-4373d8f1> Lista Regional </a><a href="#/darpe" data-v-4373d8f1><img src="img/aperto-de-mao.png" alt="DARPE" data-v-4373d8f1> DARPE </a><a href="#/agenda" data-v-4373d8f1><img src="img/calendario.png" alt="Calendário" data-v-4373d8f1> Calendário </a><a target="_blank" href="https://listagoiania.ccbgo.org.br/" data-v-4373d8f1><img src="img/lista.png" alt="Lista de Atendimentos de Goiânia" data-v-4373d8f1> Lista Goiânia </a>',4),p=[g];function f(e,t){return(0,n.wg)(),(0,n.iD)("div",u,p)}var h=i(89);const v={},m=(0,h.Z)(v,[["render",f],["__scopeId","data-v-4373d8f1"]]);var w=m,b=(i(7658),i(2062),i(7139));const _={class:"search print-hide"},D={key:0,class:"print-hide suggestions"},k=["onClick"];var A=(0,n.aZ)({__name:"Search",props:{search:{type:String}},emits:["fetched"],setup(e,{emit:t}){const i=e,r=(0,o.qj)({searchText:"",showSuggestions:!1,suggestions:["Regional","DARPE","Cidade de Goiás"]}),s=(0,n.Fl)((()=>r.suggestions.filter((e=>e.toLowerCase().includes(r.searchText.toLowerCase()))))),l=()=>{r.searchText=""},c=()=>{r.showSuggestions=!0},d=()=>{c()},u=()=>{setTimeout((()=>{r.showSuggestions=!1}),200)},g=e=>{r.searchText=e,r.showSuggestions=!1};return(0,n.m0)((()=>{r.searchText=i.search||""})),(0,n.m0)((()=>{t("fetched",r.searchText)})),(e,t)=>((0,n.wg)(),(0,n.iD)("div",_,[(0,n.wy)((0,n._)("input",{class:"print-hide",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.searchText=e),onInput:c,onFocus:d,onBlur:u,placeholder:"Pesquisar...","x-webkit-speech":""},null,544),[[a.nr,r.searchText]]),r.showSuggestions?((0,n.wg)(),(0,n.iD)("div",D,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.value,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e,onClick:t=>g(e)},(0,b.zw)(e),9,k)))),128))])])):(0,n.kq)("",!0),(0,n._)("img",{onClick:l,class:"print-hide clear",src:"img/lixeira.png"})]))}});const y=(0,h.Z)(A,[["__scopeId","data-v-12774236"]]);var S=y;const O={class:"lista"},E={class:"print print-hide"},x=(0,n._)("img",{src:"img/impressora.png",alt:"Impressão"},null,-1),L=[x],N={key:0},C={style:{"margin-top":"20px","text-decoration":"underline"}},I={key:0},R={class:"data"},T=["onDblclick"],G=["onDblclick"],Y=["innerHTML","onDblclick"],P=(0,n._)("div",{class:"print-only right",style:{"margin-top":"30px","font-size":"10px"}},[(0,n._)("p",null,[(0,n.Uk)(" Lista em: "),(0,n._)("a",{style:{color:"black"},href:"https://ccbfaina.github.io"},"ccbfaina.github.io"),(0,n._)("br"),(0,n.Uk)(" Lista de Goiânia: "),(0,n._)("a",{style:{color:"black"},href:"https://listagoiania.ccbgo.org.br"},"https://listagoiania.ccbgo.org.br")])],-1),j=(0,n._)("div",{class:"footer print-only",style:{"margin-top":"60px","font-size":"10px"}},[(0,n._)("b",null,[(0,n._)("i",null,[(0,n._)("p",null,[(0,n.Uk)(" Oração Santa Ceia "),(0,n._)("br"),(0,n.Uk)('Pão: "Senhor, abençoa este Pão que vamos comer, que é a comunhão do Corpo de Cristo." ')]),(0,n._)("p",null,' Cálice: "Senhor, abençoa o Cálice que vamos beber, que é a comunhão do Sangue de Cristo." ')])])],-1),z={key:1};var Z=(0,n.aZ)({__name:"Lista",setup(e){document.title="REGIONAL FAINA: Lista de Atendimento";const t=(0,o.qj)({itens:[],lists:[],titles:[],filter:""}),i=()=>{window.print()},r=e=>{t.filter=e},s=e=>{window.open(e.id,"_blank")},l=(0,n.Fl)((()=>{const e={itens:[],lists:[],titles:[],filter:t.filter.toLocaleLowerCase().trim()};return""===e.filter?(e.itens=t.itens,e.titles=t.titles,e.lists=t.lists):(e.itens=t.itens.filter((t=>Object.values(t).join(", ").toLowerCase().includes(e.filter))),e.titles.slice(0,0),e.lists.slice(0,0),e.itens.forEach((t=>(e.titles.includes(t.title)||e.titles.push(t.title),e.lists.includes(t.list)||e.lists.push(t.list),t)))),e})),c=(0,o.iH)(!1);async function d(){c.value=!0;const e=async e=>{const t=await fetch(e),i=await t.text();return JSON.parse(i)},i=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],a=e=>{const t=String(e.getDate()||"").padStart(2,"0"),a=String(e.getMonth()+1||"").padStart(2,"0"),n=String(e.getHours()||"").padStart(2,"0"),o=String(e.getMinutes()||"").padStart(2,"0"),r=i[e.getDay()]||"";return`${t}/${a} ${r} ${n}:${o}`.replace(/00\/00/gi,"")};let n=[];try{n=JSON.parse(localStorage.getItem("values")||"[]")}catch(o){console.info("Erro ao baixar a lista::",o)}n=(await e(`https://ccbfaina.github.io/data/lista.json?v=${parseInt((new Date).toISOString().replace(/\D/g,""))}`)).values,n.length&&localStorage.setItem("values",JSON.stringify(n)),t.itens=n.filter((e=>""===e[2]||new Date(e[2])>=new Date)).map((e=>({list:e[0],title:e[1],date:a(new Date(e[2]))||"",locale:e[3],desc:e[4],id:e[5]}))).map((e=>(t.titles.includes(e.title)||t.titles.push(e.title),t.lists.includes(e.list)||t.lists.push(e.list),e)))}d(),setInterval(d,6e4),document.addEventListener("keydown",(function(e){e.ctrlKey&&/(m|e)/gi.test(e.key)&&(e.stopPropagation(),console.log("Ctrl + M foi pressionado!"),window.open("https://docs.google.com/spreadsheets/d/13sjbh4fRi_CiSET4ARbZA3S4pTugDTEOTYMWy8YGr4w/edit#gid=0","_blank"))}));const u=(0,o.iH)({filter:""});var g=new URL(window.location.href.replace(/\/#/gi,""));const p=new URLSearchParams(g.search);return u.value.filter=p.get("filter")||"",(e,t)=>((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",E,[(0,n._)("a",{onClick:t[0]||(t[0]=(0,a.iM)((e=>i()),["prevent"])),href:"#"},L)]),(0,n.Wm)(S,{onFetched:r,search:u.value.filter},null,8,["search"]),c.value?((0,n.wg)(),(0,n.iD)("div",N,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.value.lists,(e=>((0,n.wg)(),(0,n.iD)(n.HY,{key:e},[(0,n._)("h2",C,(0,b.zw)(e),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.value.titles,(t=>((0,n.wg)(),(0,n.iD)(n.HY,{key:t},[l.value.itens.filter((e=>e.title===t)).filter((t=>t.list===e)).length?((0,n.wg)(),(0,n.iD)("div",I,[(0,n._)("h3",null,(0,b.zw)(t),1),(0,n._)("div",R,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.value.itens.filter((e=>e.title===t)).filter((t=>t.list===e)),(e=>((0,n.wg)(),(0,n.iD)(n.HY,{key:e},[(0,n._)("div",{onDblclick:t=>s(e)},(0,b.zw)(e.date.replace(/00:00/gi,"")),41,T),(0,n._)("div",{onDblclick:t=>s(e)},(0,b.zw)(e.locale),41,G),(0,n._)("div",{class:"ponto",innerHTML:e.desc,onDblclick:t=>s(e)},null,40,Y)],64)))),128))])])):(0,n.kq)("",!0)],64)))),128))],64)))),128)),P,j])):((0,n.wg)(),(0,n.iD)("div",z,"Carregando..."))]))}});const H=Z;var M=H;function F(e,t){return(0,n.wg)(),(0,n.iD)("div",null,"Pagina não encontrada!")}const q={},U=(0,h.Z)(q,[["render",F]]);var J=U;const V=e=>((0,n.dD)("data-v-15a47450"),e=e(),(0,n.Cn)(),e),$={style:{"text-align":"center"},class:"darpe"},K=V((()=>(0,n._)("p",null,[(0,n._)("b",null,"DEPARTAMENTO DE ASSISTÊNCIA RELIGIOSA PARA EVANGELIZAÇÃO (DARPE)")],-1))),Q=V((()=>(0,n._)("p",null,[(0,n._)("br"),(0,n.Uk)(" O DARPE tem por finalidade propagar o Evangelho de Nosso Senhor Jesus Cristo, o amor de Deus, tendo por cabeça só a Jesus Cristo e por guia o Espírito Santo da Graça. (João 16:13) ")],-1))),W=V((()=>(0,n._)("p",null,[(0,n._)("a",{href:"#/lista?filter=DARPE"}," Acesse a lista de atendimento do DARPE ")],-1))),B=[K,Q,W];var X=(0,n.aZ)({__name:"Darpe",setup(e){return document.title="REGIONAL FAINA: DARPE",(e,t)=>((0,n.wg)(),(0,n.iD)("div",$,B))}});const ee=(0,h.Z)(X,[["__scopeId","data-v-15a47450"]]);var te=ee;const ie=(0,n._)("div",{class:"header"},[(0,n._)("h1",null,[(0,n._)("b",null,"CONGREGAÇÃO CRISTÃ NO BRASIL")]),(0,n.Uk)(" REGIONAL FAINA ")],-1),ae={class:"container"},ne={class:"back print-hide",href:"#"},oe={key:0,src:"img/voltar.png",alt:"Voltar"};var re=(0,n.aZ)({__name:"App",setup(e){document.title="REGIONAL FAINA";const t={"/":w,"/lista":M,"/agenda":d,"/darpe":te,"/found":J},i=(0,o.iH)(window.location.hash);window.addEventListener("hashchange",(()=>{i.value=window.location.hash}));const a=(0,n.Fl)((()=>{const e=i.value.replace(/\?.*/,"").slice(1)||"/";return t[e]||J}));return(e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[ie,(0,n._)("div",ae,[(0,n._)("a",ne,[["","#/"].includes(i.value)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("img",oe))]),((0,n.wg)(),(0,n.j4)((0,n.LL)(a.value)))])],64))}});const se=re;var le=se,ce=i(5431);(0,ce.z)("/service-worker.js",{ready(){console.log("O aplicativo está sendo servido do cache por um service worker.")},registered(){console.log("O trabalhador do serviço foi registrado.")},cached(){console.log("O conteúdo foi armazenado em cache para uso off-line.")},updatefound(){console.log("Novo conteúdo está sendo baixado.")},updated(){console.log("Novo conteúdo está disponível; por favor atualize.")},offline(){console.log("Nenhuma conexão com a Internet encontrada. O aplicativo está sendo executado no modo offline.")},error(e){console.error("Erro durante o registro do service worker:",e)}});const de=(0,a.ri)(le);de.mount("#app")}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,a,n,o){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],o=e[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(e){return i.O[e](a[l])}))?a.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,n,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,r=a[0],s=a[1],l=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var d=l(i)}for(t&&t(a);c<r.length;c++)o=r[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},a=self["webpackChunkccb_regional_faina"]=self["webpackChunkccb_regional_faina"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(696)}));a=i.O(a)})();
//# sourceMappingURL=app.ece65574.js.map