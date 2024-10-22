import{Q as A}from"./QDate.8797d2fa.js";import{K as V,W as O,F as i,B as u,C as m,D as a,ae as p,as as b,L as f,G as N,X as E,H as h,at as P,au as Q,x as z,w as C,o as B,y as U,A as H,E as g,I,av as K,M,J as k,ad as R,Q as Y}from"./index.4a172efe.js";import{b as c,a as j}from"./app.63afa765.js";import{T as G}from"./Tag.e61372a0.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.d4705589.js";const J=["innerHTML"],X={__name:"ListaTRComponent",props:{event:{type:Object,required:!0}},setup(L){const _=L,{event:s}=_;function t(e){return x(e.date)&&!["AVISOS \xC0 IRMANDADE"].includes(e.title.toUpperCase())}function y(e){return t(e)&&!["VIAGENS MISSION\xC1RIAS"].includes(e.title.toUpperCase())}function v(e){return e.replace(/(\r\n|\n|\r)/g,"<br>")}function S(e){return!(e instanceof Date)||isNaN(e.getTime())?"":["Dom","Seg","Ter","Qua","Qui","Sex","S\xE1b"][e.getDay()]||""}function w(e){return!(e instanceof Date)||isNaN(e.getTime())?"":String(e.getDate()).padStart(2,"0")}function T(e){return!(e instanceof Date)||isNaN(e.getTime())?"":String(e.getMonth()+1).padStart(2,"0")}function D(e){if(!(e instanceof Date)||isNaN(e.getTime()))return"";const r=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0");return`${r}:${l}`}function x(e){return e instanceof Date&&!isNaN(e.getTime())}return(e,r)=>{var l,o;return V((u(),m("tr",null,[a("td",{style:b(t(i(s))?"":"display: none;")},[a("b",null,p(w(i(s).date))+"/"+p(T(i(s).date)),1)],4),a("td",{style:b(t(i(s))?"":"display: none;")},p(S(i(s).date)),5),a("td",{style:b(y(i(s))?"":"display: none;")},p(D(i(s).date)),5),a("td",null,[f(p(i(s).locale)+" ",1),((l=i(s))==null?void 0:l.recurring)&&((o=i(s))==null?void 0:o.recurring.length)?(u(),N(E,{key:0,class:"print-hide",name:"event_repeat",style:{color:"#9e9e9e"}})):h("",!0)]),i(s).desc?(u(),m("td",{key:0,innerHTML:v(i(s).desc)},null,8,J)):h("",!0)],512)),[[O,i(s).title||i(s).locale||i(s).desc]])}}};const Z={class:"text-center"},ee={class:"print-hide q-pa-sm row flex-center"},te={id:"lista"},ae={class:"print-hide fixed-bottom z-top menu flex space-between"},re={class:"search"},ne={class:"lista"},se=["summary"],oe={colspan:"5"},ie={key:0,class:"print-hide"},le={class:"print-only right"},ce=["href"],de={key:1,class:"print-only"},ue={__name:"ListasPage",setup(L){var D,x;const _=P(),s=Q(),t=z({search:((D=_.query.pesquisar)==null?void 0:D.toString())||"",locale:((x=_.params.local)==null?void 0:x.toString())||"",titles:[],date:"",from:c.agenda.from,to:c.agenda.to,eventsCalendar:[],listFiltered:[]}),y=e=>{s.push({path:`/event/edit/${e.id}`})},v=()=>{S(),t.eventsCalendar=Array.from(new Set(t.listFiltered.filter(e=>e.date instanceof Date).map(e=>e.date.toISOString().split("T")[0].replace(/-/g,"/"))))},S=()=>{try{if(c.agenda.items.length){let e=c.agenda.items.filter(n=>{try{return n.date&&n.date.getTime()>new Date(`${t.from} 00:00:00`).getTime()&&n.end&&n.end.getTime()<new Date(`${t.to} 23:59:59`).getTime()}catch{return!1}});if(t.date&&(e=e.filter(n=>n.date.toISOString().split("T")[0]===t.date)),!t.search&&!t.locale)return[];const r=n=>n.trim().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");let l=r(t.search),o=r(t.locale);if(/^(\*)/gi.test(t.search)&&(o="",l=l.replace(/^(\*|\/)/gi,"").trim()),o){const n=new RegExp(`^${o}`);e=e.filter(d=>r(d.list).includes(o)||n.test(r(d.locale)))}if(l){let n=null;try{n=new RegExp(l,"gi")}catch{console.log("Regex search inv\xE1lido!")}e=e.filter(d=>{var $;const q=`${($=d.date)==null?void 0:$.toLocaleString()} ${d.title} ${d.locale} ${d.desc}`;return l.split(" ").every(F=>new RegExp(`\\b${F}`,"i").test(r(q)))})}t.listFiltered.length=0,e.forEach(n=>{t.listFiltered.push(n)}),t.titles=[...new Set(t.listFiltered.map(n=>n.title))]}}catch(e){console.error("Erro ao atualizar lista: ",e)}},w=e=>{if(e.altKey&&e.key.toLowerCase()==="a")e.preventDefault(),e.stopPropagation(),s.push("/event/edit");else if(e.altKey&&["/","*"].includes(e.key)){console.log("Entrar no input");const r=document.querySelector('input[type="text"]');r&&r.focus()}};C(()=>c.agenda.from,()=>{t.from=c.agenda.from,t.to=c.agenda.to}),B(()=>{v(),C([()=>c.agenda.items,()=>t.search,()=>t.date],S),C([()=>c.agenda.items],v),window.addEventListener("keydown",w);const e=window.location.hash;setTimeout(async()=>{t.search&&t.listFiltered.length&&await j(c,G.create({description:t.search.trim(),title:t.search.replace(/[-,;]/gi,"").replace(/^\*$/,"Lista Completa").trim(),href:e}))},4e3)}),U(()=>{window.removeEventListener("keydown",w)});const T=()=>{window.print()};return(e,r)=>{const l=H("router-link");return u(),m(k,null,[a("div",Z,[r[4]||(r[4]=a("div",{class:"print-only"},"LISTA DE ATENDIMENTO E DIVERSOS",-1)),a("div",null,[a("b",null,p(t.locale.replace(/-$/,"").trim()),1),a("p",null,[g(l,{to:"/settings"},{default:I(()=>[f(p(t.from.split("-").reverse().join("/"))+" \xE0 "+p(t.to.split("-").reverse().join("/")),1)]),_:1})])])]),a("div",ee,[g(A,{modelValue:t.date,"onUpdate:modelValue":r[0]||(r[0]=o=>t.date=o),options:t.eventsCalendar,mask:"YYYY-MM-DD",minimal:"",color:"dark"},null,8,["modelValue","options"])]),a("div",te,[a("div",ae,[a("div",re,[V(a("input",{class:"z-top",type:"text","onUpdate:modelValue":r[1]||(r[1]=o=>t.search=o),placeholder:"Pesquisar...","x-webkit-speech":""},null,512),[[K,t.search]])]),i(c).state.admin?(u(),N(l,{key:0,to:"/event/edit"},{default:I(()=>[g(E,{name:"add"})]),_:1})):h("",!0),g(E,{name:"print",onClick:r[2]||(r[2]=M(o=>T(),["prevent"]))})]),a("div",ne,[(u(!0),m(k,null,R(t.titles,o=>(u(),m("div",{key:o},[a("table",{summary:String(o)},[a("thead",null,[a("tr",null,[a("th",oe,p(o),1)])]),a("tbody",null,[(u(!0),m(k,null,R(t.listFiltered.filter(n=>n.title===o),n=>(u(),N(X,{key:n.gid+n.id,event:n,onDblclick:d=>y(n),onContextmenu:M(d=>y(n),["right","prevent"])},null,8,["event","onDblclick","onContextmenu"]))),128))])],8,se)]))),128))]),!t.listFiltered.length&&!t.search.startsWith("*")?(u(),m("div",ie,[g(Y,{class:"print-hide q-mt-lg",onClick:r[3]||(r[3]=o=>t.search=`*${t.search}`),color:"blue",flat:"",label:"Lista completa..."})])):h("",!0),a("div",le,[a("a",{style:{color:"black"},href:i(c).state.url},p(i(c).state.url),9,ce)]),t.locale.includes("REGIONAL")?(u(),m("div",de,r[5]||(r[5]=[a("i",null,[f(" Ora\xE7\xE3o Santa Ceia "),a("br"),a("b",null,"P\xE3o:"),f(' "Senhor, aben\xE7oa este P\xE3o que vamos comer, que \xE9 a comunh\xE3o do Corpo de Cristo." '),a("br"),a("b",null,"C\xE1lice: "),f('"Senhor, aben\xE7oa o C\xE1lice que vamos beber, que \xE9 a comunh\xE3o do Sangue de Cristo." ')],-1)]))):h("",!0)])],64)}}};var ye=W(ue,[["__scopeId","data-v-20ac4ff7"]]);export{ye as default};
