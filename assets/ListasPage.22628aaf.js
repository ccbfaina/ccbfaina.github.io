import{K as V,V as P,F as s,B as c,C as h,D as n,aq as g,as as N,L as b,G as v,W as S,H as f,at as O,au as z,x as U,o as H,w as R,y as Q,A as W,av as F,I as K,ap as D,E,J as $,ao as M,Q as G}from"./index.d69f4433.js";import{b as j,a as d}from"./app.a965acc5.js";import{T as J}from"./Tag.62ffa0c5.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";const Y=["innerHTML"],Z={__name:"ListaTRComponent",props:{event:{type:Object,required:!0}},setup(I){const w=I,{event:i}=w;function o(e){return L(e.date)&&!["AVISOS \xC0 IRMANDADE"].includes(e.title.toUpperCase())}function m(e){return o(e)&&!["VIAGENS MISSION\xC1RIAS"].includes(e.title.toUpperCase())}function x(e){return e.replace(/(\r\n|\n|\r)/g,"<br>")}function y(e){return!(e instanceof Date)||isNaN(e.getTime())?"":["Dom","Seg","Ter","Qua","Qui","Sex","S\xE1b"][e.getDay()]||""}function C(e){return!(e instanceof Date)||isNaN(e.getTime())?"":String(e.getDate()).padStart(2,"0")}function k(e){return!(e instanceof Date)||isNaN(e.getTime())?"":String(e.getMonth()+1).padStart(2,"0")}function T(e){if(!(e instanceof Date)||isNaN(e.getTime()))return"";const _=String(e.getHours()).padStart(2,"0"),t=String(e.getMinutes()).padStart(2,"0");return`${_}:${t}`}function L(e){return e instanceof Date&&!isNaN(e.getTime())}return(e,_)=>{var t,a;return V((c(),h("tr",null,[n("td",{style:N(o(s(i))?"":"display: none;")},[n("b",null,g(C(s(i).date))+"/"+g(k(s(i).date)),1)],4),n("td",{style:N(o(s(i))?"":"display: none;")},g(y(s(i).date)),5),n("td",{style:N(m(s(i))?"":"display: none;")},g(T(s(i).date)),5),n("td",null,[b(g(s(i).locale)+" ",1),((t=s(i))==null?void 0:t.recurring)&&((a=s(i))==null?void 0:a.recurring.length)?(c(),v(S,{key:0,class:"print-hide",name:"event_repeat",style:{color:"#9e9e9e"}})):f("",!0)]),s(i).desc?(c(),h("td",{key:0,innerHTML:x(s(i).desc)},null,8,Y)):f("",!0)],512)),[[P,s(i).title||s(i).locale||s(i).desc]])}}};const ee={class:"text-center"},te={id:"lista"},ne={class:"print-hide menu flex space-between"},ae={class:"search"},re=["summary"],oe={colspan:"5"},se={key:0,class:"print-hide"},ie={class:"print-only right"},le=["href"],ce={key:1,class:"print-only"},ue={__name:"ListasPage",setup(I){var e,_;const w=O(),i=z(),o=U({search:((e=w.query.pesquisar)==null?void 0:e.toString())||"",locale:((_=w.params.local)==null?void 0:_.toString())||"",titles:[]}),m=[],x=t=>{i.push({path:`/event/edit/${t.id}`})},y=()=>{try{if(d.agenda.items.length){let t=d.agenda.items.filter(r=>{try{return r.date&&r.date.getTime()>new Date(d.agenda.from).getTime()&&r.end&&r.end.getTime()<new Date(d.agenda.to).getTime()}catch{return!1}});if(!o.search&&!o.locale)return[];const a=r=>r.trim().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");let p=a(o.search),l=a(o.locale);if(/^(\*)/gi.test(o.search)&&(l="",p=p.replace(/^(\*|\/)/gi,"").trim()),l){const r=new RegExp(`^${l}`);t=t.filter(u=>a(u.list).includes(l)||r.test(a(u.locale)))}if(p){let r=null;try{r=new RegExp(p,"gi")}catch{console.log("Regex search inv\xE1lido!")}t=t.filter(u=>{var q;const A=`${(q=u.date)==null?void 0:q.toLocaleString()} ${u.title} ${u.locale} ${u.desc}`;return p.split(" ").every(B=>a(A).includes(B))||r&&r.test(A)})}m.length=0,t.forEach(r=>{m.push(r)}),o.titles=[...new Set(m.map(r=>r.title))]}}catch(t){console.error("Erro ao atualizar lista: ",t)}},C=t=>{if(t.altKey&&t.key.toLowerCase()==="a")t.preventDefault(),t.stopPropagation(),i.push("/event/edit");else if(t.altKey&&["/","*"].includes(t.key)){console.log("Entrar no input");const a=document.querySelector('input[type="text"]');a&&a.focus()}};H(()=>{y(),R(()=>d.agenda.items,y),R(()=>o.search,y),window.addEventListener("keydown",C);const t=window.location.hash;setTimeout(()=>{o.search&&m.length&&j(d,J.create({description:o.search.trim(),title:o.search.replace(/[-,;]/gi,"").replace(/^\*$/,"Lista Completa").trim(),href:t}))},3e3)}),Q(()=>{window.removeEventListener("keydown",C)});const k=()=>{window.print()},T=()=>{navigator.share?navigator.share({title:"CCB",text:"Lista de Atendimento",url:location.href}).then(()=>console.log("Conte\xFAdo compartilhado com sucesso!")).catch(t=>console.error("Erro ao compartilhar:",t)):console.error("API de compartilhamento n\xE3o suportada.")},L=()=>{const p=`https://api.whatsapp.com/send/?phone=5562984972385&text=${encodeURIComponent(`\u{1F4C4} Batismo, Santa Ceia, ...

\u{1F4CD} Local: 
\u{1F557} Data: 
\u{1F935} Atender\xE1: `)}&type=phone_number&app_absent=0`;window.location.href=p};return(t,a)=>{const p=W("router-link");return c(),h($,null,[n("div",ee,[a[3]||(a[3]=n("div",{class:"print-only"},"LISTA DE ATENDIMENTO E DIVERSOS",-1)),n("div",null,g(o.locale.replace(/-$/,"").trim()),1)]),n("div",te,[n("div",ne,[n("div",ae,[V(n("input",{class:"z-top",type:"text","onUpdate:modelValue":a[0]||(a[0]=l=>o.search=l),placeholder:"Pesquisar...","x-webkit-speech":""},null,512),[[F,o.search]])]),s(d).state.admin?(c(),v(p,{key:0,to:"/event/edit"},{default:K(()=>[E(S,{name:"add"})]),_:1})):f("",!0),s(d).state.shared?(c(),v(S,{key:1,name:"share",onClick:D(T,["prevent"])})):f("",!0),s(d).state.shared?(c(),v(S,{key:2,name:"quiz",onClick:D(L,["prevent"])})):f("",!0),E(S,{name:"print",onClick:a[1]||(a[1]=D(l=>k(),["prevent"]))})]),(c(!0),h($,null,M(o.titles,l=>(c(),h("div",{key:l},[n("table",{summary:String(l)},[n("thead",null,[n("tr",null,[n("th",oe,g(l),1)])]),n("tbody",null,[(c(!0),h($,null,M(m.filter(r=>r.title===l),r=>(c(),v(Z,{key:r.id,event:r,onDblclick:u=>x(r),onContextmenu:D(u=>x(r),["right","prevent"])},null,8,["event","onDblclick","onContextmenu"]))),128))])],8,re)]))),128)),!m.length&&!o.search.startsWith("*")?(c(),h("div",se,[E(G,{class:"print-hide q-mt-lg",onClick:a[2]||(a[2]=l=>o.search=`*${o.search}`),color:"blue",flat:"",label:"Lista completa..."})])):f("",!0),n("div",ie,[n("a",{style:{color:"black"},href:s(d).state.url},g(s(d).state.url),9,le)]),o.locale.includes("REGIONAL")?(c(),h("div",ce,a[4]||(a[4]=[n("i",null,[b(" Ora\xE7\xE3o Santa Ceia "),n("br"),n("b",null,"P\xE3o:"),b(' "Senhor, aben\xE7oa este P\xE3o que vamos comer, que \xE9 a comunh\xE3o do Corpo de Cristo." '),n("br"),n("b",null,"C\xE1lice: "),b('"Senhor, aben\xE7oa o C\xE1lice que vamos beber, que \xE9 a comunh\xE3o do Sangue de Cristo." ')],-1)]))):f("",!0)])],64)}}};var ge=X(ue,[["__scopeId","data-v-58bb78ed"]]);export{ge as default};