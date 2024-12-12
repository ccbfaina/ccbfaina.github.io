import{d as L}from"./date.c93a782e.js";import{b as F}from"./app.b26607db.js";import{x as D,f as C,w as S,E as m,F as E,G as l,H as x,M as R,Q as T,af as k,R as N,N as w,ag as M,J as b,aw as q,ah as y,P,o as H,m as O,ax as V,I,ay as B}from"./index.e1c7799b.js";import{Q as U}from"./QInput.9c0fea5b.js";import{Q as Y}from"./QChip.47567a38.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import"./focus-manager.b742f9f4.js";import"./use-dark.7a82b6ee.js";const W=(n,i)=>{const c=new Date(n,i+1,0).getDate();return Array.from({length:c},(p,a)=>{const u=new Date(n,i,a+1);return{date:u,dateFormat:L.formatDate(u,"DD | ddd"),events:[]}})},Q=n=>(n.title==="DEPARTAMENTO PROVEDOR DE ACESSIBILIDADE"?n.title="DEPAC":n.title==="SANTAS CEIAS"&&(n.desc=""),n),z=n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase();const j={class:"print-hide fixed-bottom z-top menu"},K={class:"row items-center no-wrap"},G={class:"q-pl-sm q-pr-sm"},J={class:"row flex-center"},X={__name:"EventFilter",props:{events:{type:Array,required:!0},filters:{type:Array}},emits:["update:filteredEvents","update:filters"],setup(n,{emit:i}){const c=n,p=i,a=D({text:"",filters:[]}),u=C(()=>[...new Set(c.events.map(s=>s.title))].filter(s=>s.toLowerCase().includes(a.value.text.toLowerCase()))),r=()=>{const e=a.value.text.trim();if(e){const s=e.startsWith("!")?"N\xE3o cont\xE9m":"Cont\xE9m",o=e.startsWith("!")?e.slice(1).trim():e;o.match(/Lista:/)?a.value.filters.push({text:"",list:o.replace("Lista:","").trim(),contem:s}):a.value.filters.push({text:o,list:"",contem:s}),a.value.text=""}},d=e=>{a.value.filters.splice(e,1)},t=e=>e.list?`Lista: ${e.list}`:`${e.contem}: "${e.text}"`,f=(e,s)=>{if(s.list&&s.list!==e.list)return!1;if(/[,|;| ou | e ]/.test(s.text)){const o=v=>{const h=s.text.toLowerCase().split(/[,;|]|(?:\s+ou\s+)|(?:\s+e\s+)/).map(A=>A.trim());return new RegExp(`(^|\\s)(${h.join("|")})`,"i").test(v.toLowerCase())};return[e.list,e.title,e.desc,e.locale].some(o)}else{const o=v=>s.text.toLowerCase().split(" ").every(A=>new RegExp(`(^|\\s)${A}`,"i").test(v.toLowerCase()));return[e.list,e.title,e.desc,e.locale].some(o)}},g=C(()=>a.value.filters.length===0?c.events:(p("update:filters",a.value.filters),c.events.filter(e=>a.value.filters.every(s=>s.contem==="Cont\xE9m"?f(e,s):!f(e,s)))));S(g,e=>{p("update:filteredEvents",e)});const _=()=>{window.print()};return c.filters.forEach(e=>{a.value.text=e.text,r()}),(e,s)=>(m(),E(w,null,[l("div",j,[l("div",K,[x(U,{modelValue:a.value.text,"onUpdate:modelValue":s[0]||(s[0]=o=>a.value.text=o),label:"Pesquisar",dense:"",onKeydown:k(r,["enter"]),suggestions:u.value,style:{width:"100%"},class:"q-ml-md"},{append:R(()=>[x(T,{name:"search",onClick:r,class:"cursor-pointer"})]),_:1},8,["modelValue","suggestions"]),l("div",G,[x(T,{name:"print",onClick:s[1]||(s[1]=N(o=>_(),["prevent"])),class:"cursor-pointer text-blue-grey-8 q-px-sm",size:"sm"})])])]),l("div",J,[(m(!0),E(w,null,M(a.value.filters,(o,v)=>(m(),b(Y,{key:v,label:t(o),removable:"",dense:"",class:"q-px-sm",onRemove:h=>d(v)},null,8,["label","onRemove"]))),128))])],64))}};var Z=$(X,[["__scopeId","data-v-6ee02888"]]);const ee={class:"day-row"},te={class:"items-start text-bold"},se=["onClick"],ne=["innerHTML"],ae=["innerHTML"],re={__name:"EventDay",props:{day:Object},setup(n){const i=q(),c=r=>r.title.replace(/DEPARTAMENTO PROVEDOR DE ACESSIBILIDADE/,"DEPAC"),p=r=>r.title==="SANTAS CEIAS"?"":r.desc,a=r=>{const d=new Date(r);return d.getHours()<6?"":`${d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}&nbsp;`},u=r=>{i.push({path:`/event/edit/${r.id}`})};return(r,d)=>(m(),E("tr",ee,[l("td",te,y(n.day.dateFormat),1),l("td",null,[(m(!0),E(w,null,M(n.day.events,t=>(m(),E("div",{key:t.gid,class:"event",onClick:f=>u(t)},[l("span",{class:"text-bold",innerHTML:a(t.date)},null,8,ne),l("span",null,[l("i",null,y(c(t)),1)]),P(" "+y(t.locale)+" ",1),l("span",{innerHTML:p(t)},null,8,ae)],8,se))),128)),d[0]||(d[0]=l("div",{class:"event"},"\xA0",-1))])]))}};var oe=$(re,[["__scopeId","data-v-3b292894"]]);const le={class:"month-section"},ie=["summary"],ce={colspan:"2"},ue={__name:"EventMonth",props:{month:String,days:Array},setup(n){const i=n,c=z(L.formatDate(new Date(i.month),"MMMM").toUpperCase()),p=D(!1),a=()=>{const u=document.querySelector(`thead[ref="header-${i.month}"]`);if(u){const r=u.getBoundingClientRect();p.value=r.top<0}};return H(()=>{window.addEventListener("scroll",a)}),O(()=>{window.removeEventListener("scroll",a)}),(u,r)=>(m(),E("div",le,[l("table",{summary:n.month},[l("thead",{ref:`header-${n.month}`,class:V({hidden:p.value})},[l("tr",null,[l("th",ce,y(I(c)),1)])],2),l("tbody",null,[(m(!0),E(w,null,M(n.days,d=>(m(),b(oe,{key:d.date,day:d},null,8,["day"]))),128))])],8,ie)]))}};var de=$(ue,[["__scopeId","data-v-cad42384"]]);const me={class:"page"},pe={class:"text-h5 text-bold text-center"},_e={__name:"EventCalendarPage",setup(n){const i=B(),c=D((i.query.filters||"").split("/").filter(t=>t.trim()).map(t=>({text:t.startsWith("!")?t.slice(1).trim():t.trim(),list:"",contem:t.startsWith("!")?"N\xE3o cont\xE9m":"Cont\xE9m"}))),p=D([]),a=C(()=>[...F.agenda.items].filter(t=>new Date(t.date).getFullYear()===Number(i.params.ano)).sort((t,f)=>new Date(t.date)-new Date(f.date))),u=t=>{p.value=t},r=t=>{},d=C(()=>{const t=new Map;p.value.forEach(g=>{const _=L.formatDate(new Date(g.date),"YYYY-MM-01 12:00");t.has(_)||t.set(_,[]),t.get(_).push(Q({...g}))});const f=new Map;return t.forEach((g,_)=>{const e=new Date(_),s=W(e.getFullYear(),e.getMonth());s.forEach(o=>{o.events=g.filter(v=>{const h=new Date(v.date);return h.getDate()===o.date.getDate()&&h.getMonth()===o.date.getMonth()&&h.getFullYear()===o.date.getFullYear()}).sort((v,h)=>new Date(v.date)-new Date(h.date))}),f.set(_,s)}),Object.fromEntries(f)});return(t,f)=>(m(),E("div",me,[l("h2",pe," Calend\xE1rio "+y(I(i).params.ano),1),x(Z,{events:a.value,filters:c.value,"onUpdate:filteredEvents":u,"onUpdate:filters":r},null,8,["events","filters"]),(m(!0),E(w,null,M(d.value,(g,_)=>(m(),b(de,{key:_,month:_,days:g},null,8,["month","days"]))),128))]))}};var De=$(_e,[["__scopeId","data-v-500a30b7"]]);export{De as default};