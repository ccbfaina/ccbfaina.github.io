import{K as z,W as U,F as o,B as d,C as m,D as s,ae as p,at as L,L as w,G as b,X as N,H as v,au as B,av as H,r as A,x as K,o as j,w as $,y as Y,A as G,E as y,aj as W,aw as V,I as F,ax as X,M as I,J as O,ad as P,Q as J}from"./index.5675ddb1.js";import{Q as Z}from"./QDate.50661827.js";import{b as c,a as ee,f as te}from"./app.737ce05c.js";import{T as ae}from"./Tag.e61372a0.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.9543015a.js";const re=["innerHTML"],ne={__name:"ListaTRComponent",props:{event:{type:Object,required:!0}},setup(q){const D=q,{event:i}=D;function g(a){return E(a.date)&&!["AVISOS \xC0 IRMANDADE"].includes(a.title.toUpperCase())}function S(a){return g(a)&&!["VIAGENS MISSION\xC1RIAS"].includes(a.title.toUpperCase())}function e(a){return a.replace(/(\r\n|\n|\r)/g,"<br>")}function k(a){return!(a instanceof Date)||isNaN(a.getTime())?"":["Dom","Seg","Ter","Qua","Qui","Sex","S\xE1b"][a.getDay()]||""}function x(a){return!(a instanceof Date)||isNaN(a.getTime())?"":String(a.getDate()).padStart(2,"0")}function T(a){return!(a instanceof Date)||isNaN(a.getTime())?"":String(a.getMonth()+1).padStart(2,"0")}function C(a){if(!(a instanceof Date)||isNaN(a.getTime()))return"";const _=String(a.getHours()).padStart(2,"0"),h=String(a.getMinutes()).padStart(2,"0");return`${_}:${h}`}function E(a){return a instanceof Date&&!isNaN(a.getTime())}return(a,_)=>{var h,t;return z((d(),m("tr",null,[s("td",{style:L(g(o(i))?"":"display: none;")},[s("b",null,p(x(o(i).date))+"/"+p(T(o(i).date)),1)],4),s("td",{style:L(g(o(i))?"":"display: none;")},p(k(o(i).date)),5),s("td",{style:L(S(o(i))?"":"display: none;")},p(C(o(i).date)),5),s("td",null,[w(p(o(i).locale)+" ",1),((h=o(i))==null?void 0:h.recurring)&&((t=o(i))==null?void 0:t.recurring.length)?(d(),b(N,{key:0,class:"print-hide",name:"event_repeat",style:{color:"#9e9e9e"}})):v("",!0)]),o(i).desc?(d(),m("td",{key:0,innerHTML:e(o(i).desc)},null,8,re)):v("",!0)],512)),[[U,o(i).title||o(i).locale||o(i).desc]])}}};const oe={key:1},ie={class:"text-center"},le={class:"print-hide q-pa-sm row flex-center"},ce={id:"lista"},de={class:"print-hide fixed-bottom z-top menu flex space-between"},ue={class:"search"},pe={class:"q-pr-sm"},me={class:"q-pr-sm"},fe={class:"lista"},ge=["summary"],he={colspan:"5"},_e={key:0,class:"print-hide"},ye={class:"print-only right"},ve=["href"],Se={key:1,class:"print-only"},we={__name:"ListasPage",setup(q){var _,h;const D=B(),i=H(),g=A(!0),S=A(!1),e=K({search:((_=D.query.pesquisar)==null?void 0:_.toString())||"",locale:((h=D.params.local)==null?void 0:h.toString())||"",titles:[],date:"",from:c.agenda.from,to:c.agenda.to,eventsCalendar:[],listFiltered:[]}),k=t=>{i.push({path:`/event/edit/${t.id}`})},x=async()=>{await T(),e.eventsCalendar=Array.from(new Set(e.listFiltered.filter(t=>t.date instanceof Date).map(t=>t.date.toISOString().split("T")[0].replace(/-/g,"/")))),g.value=!1},T=async()=>{try{if(c.agenda.items.length){let t=c.agenda.items.filter(r=>{try{return r.date&&r.date.getTime()>new Date(`${e.from} 00:00:00`).getTime()&&r.end&&r.end.getTime()<new Date(`${e.to} 23:59:59`).getTime()}catch{return!1}});if(e.date&&(t=t.filter(r=>r.date.toISOString().split("T")[0]===e.date)),!e.search&&!e.locale)return[];const n=r=>r.trim().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");let f=n(e.search),l=n(e.locale);if(/^(\*)/gi.test(e.search)&&(l="",f=f.replace(/^(\*|\/)/gi,"").trim()),l){const r=new RegExp(`^${l}`);t=t.filter(u=>n(u.list).includes(l)||r.test(n(u.locale)))}if(f)try{const r=new RegExp(f,"gi");t=t.filter(u=>{var R;const M=`${(R=u.date)==null?void 0:R.toLocaleString()} ${u.title} ${u.locale} ${u.desc}`;return r.test(M)||f.split(" ").every(Q=>new RegExp(`\\b${Q}`,"i").test(n(M)))})}catch{console.log("Regex search inv\xE1lido!")}e.listFiltered.length=0,t.forEach(r=>{e.listFiltered.push(r)}),e.titles=[...new Set(e.listFiltered.map(r=>r.title))]}}catch(t){console.error("Erro ao atualizar lista: ",t)}},C=t=>{if(t.altKey&&t.key.toLowerCase()==="a")t.preventDefault(),t.stopPropagation(),i.push("/event/edit");else if(t.altKey&&["/","*"].includes(t.key)||t.ctrlKey&&t.key==="f"||t.key==="/"&&document.activeElement.tagName!=="INPUT"&&document.activeElement.tagName!=="TEXTAREA"){t.preventDefault(),t.stopPropagation();const n=document.querySelector('input[type="text"]');n&&n.focus()}};j(async()=>{window.addEventListener("keydown",C),$(()=>c.agenda.from,()=>{e.from=c.agenda.from,e.to=c.agenda.to}),$([()=>e.search,()=>e.date],T),$([()=>c.agenda.items],x);const t=window.location.hash;setTimeout(async()=>{e.search&&e.listFiltered.length&&await ee(c,ae.create({description:e.search.trim(),title:e.search.replace(/[-,;]/gi,"").replace(/^\*$/,"Lista Completa").trim(),href:t}))},3e3),x()}),Y(()=>{window.removeEventListener("keydown",C)});const E=async()=>{try{S.value=!0,await te.post("/api/agenda/updateall")}catch{}S.value=!1},a=()=>{window.print()};return(t,n)=>{const f=G("router-link");return g.value?(d(),m("div",{key:0,class:V([["loading-overlay",{show:g.value}],"print-hide"])},[y(W,{size:"90px",color:"dark"})],2)):(d(),m("div",oe,[s("div",ie,[n[4]||(n[4]=s("div",{class:"print-only"},"LISTA DE ATENDIMENTO E DIVERSOS",-1)),s("div",null,[s("b",null,p(e.locale.replace(/-$/,"").trim()),1),s("p",null,[y(f,{to:"/settings"},{default:F(()=>[w(p(e.from.split("-").reverse().join("/"))+" \xE0 "+p(e.to.split("-").reverse().join("/")),1)]),_:1})])])]),s("div",le,[y(Z,{modelValue:e.date,"onUpdate:modelValue":n[0]||(n[0]=l=>e.date=l),options:e.eventsCalendar,mask:"YYYY-MM-DD",minimal:"",color:"dark"},null,8,["modelValue","options"])]),s("div",ce,[s("div",de,[s("div",ue,[z(s("input",{class:"z-top",type:"text","onUpdate:modelValue":n[1]||(n[1]=l=>e.search=l),placeholder:"Pesquisar...","x-webkit-speech":""},null,512),[[X,e.search]])]),o(c).state.admin?(d(),b(f,{key:0,to:"/event/edit"},{default:F(()=>[y(N,{name:"add"})]),_:1})):v("",!0),s("div",pe,[o(c).state.admin?(d(),b(N,{key:0,class:V({rotate:S.value}),name:"refresh",onClick:I(E,["prevent"])},null,8,["class"])):v("",!0)]),s("div",me,[y(N,{name:"print",onClick:n[2]||(n[2]=I(l=>a(),["prevent"]))})])]),s("div",fe,[(d(!0),m(O,null,P(e.titles,l=>(d(),m("div",{key:l},[s("table",{summary:String(l)},[s("thead",null,[s("tr",null,[s("th",he,p(l),1)])]),s("tbody",null,[(d(!0),m(O,null,P(e.listFiltered.filter(r=>r.title===l),r=>(d(),b(ne,{key:r.gid+r.id,event:r,onDblclick:u=>k(r),onContextmenu:I(u=>k(r),["right","prevent"])},null,8,["event","onDblclick","onContextmenu"]))),128))])],8,ge)]))),128))]),!e.listFiltered.length&&!e.search.startsWith("*")?(d(),m("div",_e,[y(J,{class:"print-hide q-mt-lg",onClick:n[3]||(n[3]=l=>e.search=`*${e.search}`),color:"blue",flat:"",label:"Lista completa..."})])):v("",!0),s("div",ye,[s("a",{style:{color:"black"},href:o(c).state.url},p(o(c).state.url),9,ve)]),e.locale.includes("REGIONAL")?(d(),m("div",Se,n[5]||(n[5]=[s("i",null,[w(" Ora\xE7\xE3o Santa Ceia "),s("br"),s("b",null,"P\xE3o:"),w(' "Senhor, aben\xE7oa este P\xE3o que vamos comer, que \xE9 a comunh\xE3o do Corpo de Cristo." '),s("br"),s("b",null,"C\xE1lice: "),w('"Senhor, aben\xE7oa o C\xE1lice que vamos beber, que \xE9 a comunh\xE3o do Sangue de Cristo." ')],-1)]))):v("",!0)])]))}}};var Ne=se(we,[["__scopeId","data-v-1d3ab003"]]);export{Ne as default};