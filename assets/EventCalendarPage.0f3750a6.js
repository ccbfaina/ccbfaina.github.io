import{d as A}from"./date.1b8c70ab.js";import{b as I}from"./app.6f45d471.js";import{r as x,a as C,w as S,B as m,C as E,D as l,E as w,J as k,Q as T,ac as R,N,K as D,ad as M,G as L,at as q,ae as y,M as P,o as B,f as O,au as V,F,av as H}from"./index.697102f8.js";import{Q as U}from"./QInput.82983cf1.js";import{Q as Y}from"./QChip.fc4a97ce.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import"./focus-manager.f7bb8da4.js";import"./use-dark.fdd359e3.js";const W=(a,i)=>{const c=new Date(a,i+1,0).getDate();return Array.from({length:c},(p,n)=>{const u=new Date(a,i,n+1);return{date:u,dateFormat:A.formatDate(u,"DD | ddd"),events:[]}})},Q=a=>(a.title==="DEPARTAMENTO PROVEDOR DE ACESSIBILIDADE"?a.title="DEPAC":a.title==="SANTAS CEIAS"&&(a.desc=""),a),z=a=>a.charAt(0).toUpperCase()+a.slice(1).toLowerCase();const j={class:"print-hide fixed-bottom z-top menu"},K={class:"row items-center no-wrap"},G={class:"q-pl-sm q-pr-sm"},J={class:"row flex-center"},X={__name:"EventFilter",props:{events:{type:Array,required:!0},filters:{type:Array}},emits:["update:filteredEvents","update:filters"],setup(a,{emit:i}){const c=a,p=i,n=x({text:"",filters:[]}),u=C(()=>[...new Set(c.events.map(s=>s.title))].filter(s=>s.toLowerCase().includes(n.value.text.toLowerCase()))),r=()=>{const e=n.value.text.trim();if(e){const s=e.startsWith("!")?"N\xE3o cont\xE9m":"Cont\xE9m",o=e.startsWith("!")?e.slice(1).trim():e;o.match(/Lista:/)?n.value.filters.push({text:"",list:o.replace("Lista:","").trim(),contem:s}):n.value.filters.push({text:o,list:"",contem:s}),n.value.text=""}},d=e=>{n.value.filters.splice(e,1)},t=e=>e.list?`Lista: ${e.list}`:`${e.contem}: "${e.text}"`,f=(e,s)=>{if(s.list&&s.list!==e.list)return!1;if(/[,|;| ou | e ]/.test(s.text)){const o=v=>{const h=s.text.toLowerCase().split(/[,;|]|(?:\s+ou\s+)|(?:\s+e\s+)/).map(b=>b.trim());return new RegExp(`(^|\\s)(${h.join("|")})`,"i").test(v.toLowerCase())};return[e.list,e.title,e.desc,e.locale].some(o)}else{const o=v=>s.text.toLowerCase().split(" ").every(b=>new RegExp(`(^|\\s)${b}`,"i").test(v.toLowerCase()));return[e.list,e.title,e.desc,e.locale].some(o)}},g=C(()=>n.value.filters.length===0?c.events:(p("update:filters",n.value.filters),c.events.filter(e=>n.value.filters.every(s=>s.contem==="Cont\xE9m"?f(e,s):!f(e,s)))));S(g,e=>{p("update:filteredEvents",e)});const _=()=>{window.print()};return c.filters.forEach(e=>{n.value.text=e.text,r()}),(e,s)=>(m(),E(D,null,[l("div",j,[l("div",K,[w(U,{modelValue:n.value.text,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value.text=o),label:"Pesquisar",dense:"",clearable:"",onKeydown:R(r,["enter"]),suggestions:u.value,style:{width:"100%"},class:"q-ml-md"},{append:k(()=>[w(T,{name:"search",onClick:r,class:"cursor-pointer"})]),_:1},8,["modelValue","suggestions"]),l("div",G,[w(T,{name:"print",onClick:s[1]||(s[1]=N(o=>_(),["prevent"])),class:"cursor-pointer text-blue-grey-8",size:"sm"})])])]),l("div",J,[(m(!0),E(D,null,M(n.value.filters,(o,v)=>(m(),L(Y,{key:v,label:t(o),removable:"",dense:"",class:"q-px-sm",onRemove:h=>d(v)},null,8,["label","onRemove"]))),128))])],64))}};var Z=$(X,[["__scopeId","data-v-7294057c"]]);const ee={class:"day-row"},te={class:"items-start text-bold"},se=["onClick"],ae=["innerHTML"],ne=["innerHTML"],re={__name:"EventDay",props:{day:Object},setup(a){const i=q(),c=r=>r.title.replace(/DEPARTAMENTO PROVEDOR DE ACESSIBILIDADE/,"DEPAC"),p=r=>r.title==="SANTAS CEIAS"?"":r.desc,n=r=>{const d=new Date(r);return d.getHours()<6?"":`${d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}&nbsp;`},u=r=>{i.push({path:`/event/edit/${r.id}`})};return(r,d)=>(m(),E("tr",ee,[l("td",te,y(a.day.dateFormat),1),l("td",null,[(m(!0),E(D,null,M(a.day.events,t=>(m(),E("div",{key:t.gid,class:"event",onClick:f=>u(t)},[l("span",{class:"text-bold",innerHTML:n(t.date)},null,8,ae),l("i",null,y(c(t)),1),P(": "+y(t.locale)+" ",1),l("span",{innerHTML:p(t)},null,8,ne)],8,se))),128)),d[0]||(d[0]=l("div",{class:"event"},"\xA0",-1))])]))}};var oe=$(re,[["__scopeId","data-v-fb885e1e"]]);const le={class:"month-section"},ie=["summary"],ce={colspan:"2"},ue={__name:"EventMonth",props:{month:String,days:Array},setup(a){const i=a,c=z(A.formatDate(new Date(i.month),"MMMM").toUpperCase()),p=x(!1),n=()=>{const u=document.querySelector(`thead[ref="header-${i.month}"]`);if(u){const r=u.getBoundingClientRect();p.value=r.top<0}};return B(()=>{window.addEventListener("scroll",n)}),O(()=>{window.removeEventListener("scroll",n)}),(u,r)=>(m(),E("div",le,[l("table",{summary:a.month},[l("thead",{ref:`header-${a.month}`,class:V({hidden:p.value})},[l("tr",null,[l("th",ce,y(F(c)),1)])],2),l("tbody",null,[(m(!0),E(D,null,M(a.days,d=>(m(),L(oe,{key:d.date,day:d},null,8,["day"]))),128))])],8,ie)]))}};var de=$(ue,[["__scopeId","data-v-cad42384"]]);const me={class:"page"},pe={class:"text-h5 text-bold text-center"},_e={__name:"EventCalendarPage",setup(a){const i=H(),c=x((i.query.filters||"").split("/").filter(t=>t.trim()).map(t=>({text:t.startsWith("!")?t.slice(1).trim():t.trim(),list:"",contem:t.startsWith("!")?"N\xE3o cont\xE9m":"Cont\xE9m"}))),p=x([]),n=C(()=>[...I.agenda.items].filter(t=>new Date(t.date).getFullYear()===Number(i.params.ano)).sort((t,f)=>new Date(t.date)-new Date(f.date))),u=t=>{p.value=t},r=t=>{},d=C(()=>{const t=new Map;p.value.forEach(g=>{const _=A.formatDate(new Date(g.date),"YYYY-MM-01 12:00");t.has(_)||t.set(_,[]),t.get(_).push(Q({...g}))});const f=new Map;return t.forEach((g,_)=>{const e=new Date(_),s=W(e.getFullYear(),e.getMonth());s.forEach(o=>{o.events=g.filter(v=>{const h=new Date(v.date);return h.getDate()===o.date.getDate()&&h.getMonth()===o.date.getMonth()&&h.getFullYear()===o.date.getFullYear()}).sort((v,h)=>new Date(v.date)-new Date(h.date))}),f.set(_,s)}),Object.fromEntries(f)});return(t,f)=>(m(),E("div",me,[l("h2",pe," Calend\xE1rio "+y(F(i).params.ano),1),w(Z,{events:n.value,filters:c.value,"onUpdate:filteredEvents":u,"onUpdate:filters":r},null,8,["events","filters"]),(m(!0),E(D,null,M(d.value,(g,_)=>(m(),L(de,{key:_,month:_,days:g},null,8,["month","days"]))),128))]))}};var xe=$(_e,[["__scopeId","data-v-500a30b7"]]);export{xe as default};
