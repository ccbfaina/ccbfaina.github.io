import{T as O,a1 as F,aD as o,H as c,P as m,L as s,ao as p,aE as N,U as v,I as T,a2 as b,R as h,M as z,N as Q,x as R,A as U,o as B,w as E,B as H,O as K,aG as q,K as _,au as Y,J as A,aM as j,an as L,S as $,am as V,Q as G}from"./index.e3074755.js";import{Q as J}from"./QDate.47805d2d.js";import{b as d,c as W}from"./app.ba48e233.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.9ac65323.js";import"./private.use-form.119c0c9d.js";import"./date.761bf435.js";const Z=["innerHTML"],ee={__name:"ListaTRComponent",props:{event:{type:Object,required:!0}},setup(I){const S=I,{event:i}=S;function f(a){return C(a.date)&&!["AVISOS \xC0 IRMANDADE"].includes(a.title.toUpperCase())}function y(a){return f(a)&&!["VIAGENS MISSION\xC1RIAS"].includes(a.title.toUpperCase())}function e(a){return a.replace(/(\r\n|\n|\r)/g,"<br>")}function w(a){return!(a instanceof Date)||isNaN(a.getTime())?"":["Dom","Seg","Ter","Qua","Qui","Sex","S\xE1b"][a.getDay()]||""}function D(a){return!(a instanceof Date)||isNaN(a.getTime())?"":String(a.getDate()).padStart(2,"0")}function k(a){return!(a instanceof Date)||isNaN(a.getTime())?"":String(a.getMonth()+1).padStart(2,"0")}function x(a){if(!(a instanceof Date)||isNaN(a.getTime()))return"";const t=String(a.getHours()).padStart(2,"0"),n=String(a.getMinutes()).padStart(2,"0");return`${t}:${n}`}function C(a){return a instanceof Date&&!isNaN(a.getTime())}return(a,t)=>O((c(),m("tr",null,[s("td",{style:N(f(o(i))?"":"display: none;")},[s("b",null,p(D(o(i).date))+"/"+p(k(o(i).date)),1)],4),s("td",{style:N(f(o(i))?"":"display: none;")},p(w(o(i).date)),5),s("td",{style:N(y(o(i))?"":"display: none;")},p(x(o(i).date)),5),s("td",null,[v(p(o(i).locale)+" ",1),o(i)?.recurring&&o(i)?.recurring.length?(c(),T(b,{key:0,class:"print-hide",name:"event_repeat",style:{color:"#9e9e9e"}})):h("",!0)]),o(i).desc?(c(),m("td",{key:0,innerHTML:e(o(i).desc)},null,8,Z)):h("",!0)],512)),[[F,o(i).title||o(i).locale||o(i).desc]])}};const te={class:"text-center"},ae={class:"print-hide q-pa-sm row flex-center"},se={id:"lista"},re={class:"print-hide fixed-bottom z-top menu flex space-between"},ne={class:"search"},oe={class:"q-pr-sm"},ie={class:"q-pr-sm"},le={class:"lista"},ce=["summary"],de={colspan:"5"},ue={key:0,class:"print-hide"},pe={class:"print-only right"},me=["href"],fe={key:1,class:"print-only"},ge={__name:"ListasPage",setup(I){const S=z(),i=Q(),f=R(!0),y=R(!1),e=U({search:S.query.pesquisar?.toString()||"",locale:S.params.local?.toString()||"",titles:[],date:"",from:d.agenda.from,to:d.agenda.to,eventsCalendar:[],listFiltered:[]}),w=t=>{i.push({path:`/event/edit/${t.id}`})};setTimeout(()=>{f.value=!1},8e3);const D=async()=>{await k(),e.eventsCalendar=Array.from(new Set(e.listFiltered.filter(t=>t.date instanceof Date).map(t=>t.date.toISOString().split("T")[0].replace(/-/g,"/")))),f.value=!1},k=async()=>{try{if(d.agenda.items.length){let t=d.agenda.items.filter(r=>{try{return r.date&&r.date.getTime()>new Date(`${e.from} 00:00:00`).getTime()&&r.end&&r.end.getTime()<new Date(`${e.to} 23:59:59`).getTime()}catch{return!1}});if(e.date&&(t=t.filter(r=>r.date.toISOString().split("T")[0]===e.date)),!e.search&&!e.locale)return[];const n=r=>r.trim().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");let g=n(e.search),l=n(e.locale);if(/^(\*)/gi.test(e.search)&&(l="",g=g.replace(/^(\*|\/)/gi,"").trim()),l){const r=new RegExp(`^${l}`);t=t.filter(u=>n(u.list).includes(l)||r.test(n(u.locale)))}if(g)try{const r=new RegExp(g,"gi");t=t.filter(u=>{const M=`${u.date?.toLocaleString()} ${u.title} ${u.locale} ${u.desc}`;return r.test(M)||g.split(" ").every(P=>new RegExp(`\\b${P}`,"i").test(n(M)))})}catch{console.log("Regex search inv\xE1lido!")}e.listFiltered.length=0,t.forEach(r=>{e.listFiltered.push(r)}),e.titles=[...new Set(e.listFiltered.map(r=>r.title))]}}catch(t){console.error("Erro ao atualizar lista: ",t)}},x=t=>{if(t.altKey&&t.key.toLowerCase()==="a")t.preventDefault(),t.stopPropagation(),i.push("/event/edit");else if(t.altKey&&["/","*"].includes(t.key)||t.ctrlKey&&t.key==="f"||t.key==="/"&&document.activeElement.tagName!=="INPUT"&&document.activeElement.tagName!=="TEXTAREA"){t.preventDefault(),t.stopPropagation();const n=document.querySelector('input[type="text"]');n&&n.focus()}};B(async()=>{window.addEventListener("keydown",x),E(()=>d.agenda.from,()=>{e.from=d.agenda.from,e.to=d.agenda.to}),E([()=>e.search,()=>e.date],k),E([()=>d.agenda.items],D),await D()}),H(()=>{window.removeEventListener("keydown",x)});const C=async()=>{try{y.value=!0,await W.post("/api/agenda/updateall")}catch{}y.value=!1},a=()=>{window.print()};return(t,n)=>{const g=K("router-link");return c(),m($,null,[f.value?(c(),m("div",{key:0,class:q([["loading-overlay",{show:f.value}],"print-hide"])},[_(Y,{size:"90px",color:"dark"})],2)):h("",!0),s("div",te,[n[4]||(n[4]=s("div",{class:"print-only"},"LISTA DE ATENDIMENTO E DIVERSOS",-1)),s("div",null,[s("b",null,p(e.locale.replace(/-$/,"").trim()),1),s("p",null,[_(g,{to:"/settings"},{default:A(()=>[v(p(e.from.split("-").reverse().join("/"))+" \xE0 "+p(e.to.split("-").reverse().join("/")),1)]),_:1})])])]),s("div",ae,[_(J,{modelValue:e.date,"onUpdate:modelValue":n[0]||(n[0]=l=>e.date=l),options:e.eventsCalendar,mask:"YYYY-MM-DD",minimal:"",color:"dark"},null,8,["modelValue","options"])]),s("div",se,[s("div",re,[s("div",ne,[O(s("input",{class:"z-top",type:"text","onUpdate:modelValue":n[1]||(n[1]=l=>e.search=l),placeholder:"Pesquisar...","x-webkit-speech":""},null,512),[[j,e.search]])]),o(d).state.admin?(c(),T(g,{key:0,to:"/event/edit"},{default:A(()=>[_(b,{name:"add"})]),_:1})):h("",!0),s("div",oe,[o(d).state.admin?(c(),T(b,{key:0,class:q({rotate:y.value}),name:"refresh",onClick:L(C,["prevent"])},null,8,["class"])):h("",!0)]),s("div",ie,[_(b,{name:"print",onClick:n[2]||(n[2]=L(l=>a(),["prevent"]))})])]),s("div",le,[(c(!0),m($,null,V(e.titles,l=>(c(),m("div",{key:l},[s("table",{summary:String(l)},[s("thead",null,[s("tr",null,[s("th",de,p(l),1)])]),s("tbody",null,[(c(!0),m($,null,V(e.listFiltered.filter(r=>r.title===l),r=>(c(),T(ee,{key:r.gid+r.id,event:r,onDblclick:u=>w(r),onContextmenu:L(u=>w(r),["right","prevent"])},null,8,["event","onDblclick","onContextmenu"]))),128))])],8,ce)]))),128))]),!e.listFiltered.length&&!e.search.startsWith("*")?(c(),m("div",ue,[_(G,{class:"print-hide q-mt-lg",onClick:n[3]||(n[3]=l=>e.search=`*${e.search}`),color:"blue",flat:"",label:"Lista completa..."})])):h("",!0),s("div",pe,[s("a",{style:{color:"black"},href:o(d).state.url},p(o(d).state.url),9,me)]),e.locale.includes("REGIONAL")?(c(),m("div",fe,n[5]||(n[5]=[s("i",null,[v(" Ora\xE7\xE3o Santa Ceia "),s("br"),s("b",null,"P\xE3o:"),v(' "Senhor, aben\xE7oa este P\xE3o que vamos comer, que \xE9 a comunh\xE3o do Corpo de Cristo." '),s("br"),s("b",null,"C\xE1lice: "),v('"Senhor, aben\xE7oa o C\xE1lice que vamos beber, que \xE9 a comunh\xE3o do Sangue de Cristo." ')],-1)]))):h("",!0)])],64)}}};var ke=X(ge,[["__scopeId","data-v-0e84a1ab"]]);export{ke as default};
