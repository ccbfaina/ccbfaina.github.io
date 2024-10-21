import{Q as A}from"./QDate.fc6f1f69.js";import{K as F,W as O,F as i,B as u,C as m,D as a,ae as p,as as C,L as f,G as N,X as E,H as h,at as P,au as Q,x as z,w as b,o as B,y as U,A as H,E as g,I as M,av as K,M as V,J as k,ad as q,Q as Y}from"./index.4946ae1c.js";import{b as c,a as j}from"./app.388fca61.js";import{T as G}from"./Tag.e61372a0.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.07850f7a.js";const J=["innerHTML"],X={__name:"ListaTRComponent",props:{event:{type:Object,required:!0}},setup(L){const _=L,{event:s}=_;function t(e){return x(e.date)&&!["AVISOS \xC0 IRMANDADE"].includes(e.title.toUpperCase())}function y(e){return t(e)&&!["VIAGENS MISSION\xC1RIAS"].includes(e.title.toUpperCase())}function v(e){return e.replace(/(\r\n|\n|\r)/g,"<br>")}function S(e){return!(e instanceof Date)||isNaN(e.getTime())?"":["Dom","Seg","Ter","Qua","Qui","Sex","S\xE1b"][e.getDay()]||""}function D(e){return!(e instanceof Date)||isNaN(e.getTime())?"":String(e.getDate()).padStart(2,"0")}function T(e){return!(e instanceof Date)||isNaN(e.getTime())?"":String(e.getMonth()+1).padStart(2,"0")}function w(e){if(!(e instanceof Date)||isNaN(e.getTime()))return"";const n=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0");return`${n}:${l}`}function x(e){return e instanceof Date&&!isNaN(e.getTime())}return(e,n)=>{var l,o;return F((u(),m("tr",null,[a("td",{style:C(t(i(s))?"":"display: none;")},[a("b",null,p(D(i(s).date))+"/"+p(T(i(s).date)),1)],4),a("td",{style:C(t(i(s))?"":"display: none;")},p(S(i(s).date)),5),a("td",{style:C(y(i(s))?"":"display: none;")},p(w(i(s).date)),5),a("td",null,[f(p(i(s).locale)+" ",1),((l=i(s))==null?void 0:l.recurring)&&((o=i(s))==null?void 0:o.recurring.length)?(u(),N(E,{key:0,class:"print-hide",name:"event_repeat",style:{color:"#9e9e9e"}})):h("",!0)]),i(s).desc?(u(),m("td",{key:0,innerHTML:v(i(s).desc)},null,8,J)):h("",!0)],512)),[[O,i(s).title||i(s).locale||i(s).desc]])}}};const Z={class:"text-center"},ee={class:"print-hide q-pa-sm row flex-center"},te={id:"lista"},ae={class:"print-hide fixed-bottom z-top menu flex space-between"},re={class:"search"},ne={class:"lista"},se=["summary"],oe={colspan:"5"},ie={key:0,class:"print-hide"},le={class:"print-only right"},ce=["href"],de={key:1,class:"print-only"},ue={__name:"ListasPage",setup(L){var w,x;const _=P(),s=Q(),t=z({search:((w=_.query.pesquisar)==null?void 0:w.toString())||"",locale:((x=_.params.local)==null?void 0:x.toString())||"",titles:[],date:"",from:c.agenda.from,to:c.agenda.to,eventsCalendar:[],listFiltered:[]}),y=e=>{s.push({path:`/event/edit/${e.id}`})},v=()=>{S(),t.eventsCalendar=Array.from(new Set(t.listFiltered.filter(e=>e.date instanceof Date).map(e=>e.date.toISOString().split("T")[0].replace(/-/g,"/"))))},S=()=>{try{if(c.agenda.items.length){let e=c.agenda.items.filter(r=>{try{return r.date&&r.date.getTime()>new Date(`${t.from} 00:00:00`).getTime()&&r.end&&r.end.getTime()<new Date(`${t.to} 23:59:59`).getTime()}catch{return!1}});if(t.date&&(e=e.filter(r=>r.date.toISOString().split("T")[0]===t.date)),!t.search&&!t.locale)return[];const n=r=>r.trim().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");let l=n(t.search),o=n(t.locale);if(/^(\*)/gi.test(t.search)&&(o="",l=l.replace(/^(\*|\/)/gi,"").trim()),o){const r=new RegExp(`^${o}`);e=e.filter(d=>n(d.list).includes(o)||r.test(n(d.locale)))}if(l){let r=null;try{r=new RegExp(l,"gi")}catch{console.log("Regex search inv\xE1lido!")}e=e.filter(d=>{var I;const $=`${(I=d.date)==null?void 0:I.toLocaleString()} ${d.title} ${d.locale} ${d.desc}`;return l.split(" ").every(R=>n($).includes(R))||r&&r.test($)})}t.listFiltered.length=0,e.forEach(r=>{t.listFiltered.push(r)}),t.titles=[...new Set(t.listFiltered.map(r=>r.title))]}}catch(e){console.error("Erro ao atualizar lista: ",e)}},D=e=>{if(e.altKey&&e.key.toLowerCase()==="a")e.preventDefault(),e.stopPropagation(),s.push("/event/edit");else if(e.altKey&&["/","*"].includes(e.key)){console.log("Entrar no input");const n=document.querySelector('input[type="text"]');n&&n.focus()}};b(()=>c.agenda.from,()=>{t.from=c.agenda.from,t.to=c.agenda.to}),B(()=>{v(),b([()=>c.agenda.items,()=>t.search,()=>t.date],S),b([()=>c.agenda.items],v),window.addEventListener("keydown",D);const e=window.location.hash;setTimeout(async()=>{t.search&&t.listFiltered.length&&await j(c,G.create({description:t.search.trim(),title:t.search.replace(/[-,;]/gi,"").replace(/^\*$/,"Lista Completa").trim(),href:e}))},4e3)}),U(()=>{window.removeEventListener("keydown",D)});const T=()=>{window.print()};return(e,n)=>{const l=H("router-link");return u(),m(k,null,[a("div",Z,[n[4]||(n[4]=a("div",{class:"print-only"},"LISTA DE ATENDIMENTO E DIVERSOS",-1)),a("div",null,[a("b",null,p(t.locale.replace(/-$/,"").trim()),1),a("p",null,[g(l,{to:"/settings"},{default:M(()=>[f(p(t.from.split("-").reverse().join("/"))+" \xE0 "+p(t.to.split("-").reverse().join("/")),1)]),_:1})])])]),a("div",ee,[g(A,{modelValue:t.date,"onUpdate:modelValue":n[0]||(n[0]=o=>t.date=o),options:t.eventsCalendar,mask:"YYYY-MM-DD",minimal:"",color:"dark"},null,8,["modelValue","options"])]),a("div",te,[a("div",ae,[a("div",re,[F(a("input",{class:"z-top",type:"text","onUpdate:modelValue":n[1]||(n[1]=o=>t.search=o),placeholder:"Pesquisar...","x-webkit-speech":""},null,512),[[K,t.search]])]),i(c).state.admin?(u(),N(l,{key:0,to:"/event/edit"},{default:M(()=>[g(E,{name:"add"})]),_:1})):h("",!0),g(E,{name:"print",onClick:n[2]||(n[2]=V(o=>T(),["prevent"]))})]),a("div",ne,[(u(!0),m(k,null,q(t.titles,o=>(u(),m("div",{key:o},[a("table",{summary:String(o)},[a("thead",null,[a("tr",null,[a("th",oe,p(o),1)])]),a("tbody",null,[(u(!0),m(k,null,q(t.listFiltered.filter(r=>r.title===o),r=>(u(),N(X,{key:r.gid+r.id,event:r,onDblclick:d=>y(r),onContextmenu:V(d=>y(r),["right","prevent"])},null,8,["event","onDblclick","onContextmenu"]))),128))])],8,se)]))),128))]),!t.listFiltered.length&&!t.search.startsWith("*")?(u(),m("div",ie,[g(Y,{class:"print-hide q-mt-lg",onClick:n[3]||(n[3]=o=>t.search=`*${t.search}`),color:"blue",flat:"",label:"Lista completa..."})])):h("",!0),a("div",le,[a("a",{style:{color:"black"},href:i(c).state.url},p(i(c).state.url),9,ce)]),t.locale.includes("REGIONAL")?(u(),m("div",de,n[5]||(n[5]=[a("i",null,[f(" Ora\xE7\xE3o Santa Ceia "),a("br"),a("b",null,"P\xE3o:"),f(' "Senhor, aben\xE7oa este P\xE3o que vamos comer, que \xE9 a comunh\xE3o do Corpo de Cristo." '),a("br"),a("b",null,"C\xE1lice: "),f('"Senhor, aben\xE7oa o C\xE1lice que vamos beber, que \xE9 a comunh\xE3o do Sangue de Cristo." ')],-1)]))):h("",!0)])],64)}}};var ye=W(ue,[["__scopeId","data-v-5c9a572e"]]);export{ye as default};
