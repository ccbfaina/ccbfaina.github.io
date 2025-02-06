import{d as $}from"./date.eef42bd0.js";import{b}from"./app.d0168977.js";import{t as w,a as x,w as T,E as m,M as h,I as o,H as g,G as F,a0 as L,aj as R,O as C,ak as M,F as I,al as k,K as N,am as D,R as O,o as B,j as V,aE as q,aB as S,J as H}from"./index.abef4267.js";import{Q as P}from"./QInput.114591b3.js";import{Q as U}from"./QChip.408d4628.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import"./focus-manager.b8359c54.js";import"./use-dark.5fd3ee25.js";import"./private.use-form.6cb816e3.js";const Y=(r,c)=>{const d=new Date(r,c+1,0).getDate();return Array.from({length:d},(p,a)=>{const i=new Date(r,c,a+1);return{date:i,dateFormat:$.formatDate(i,"DD | ddd"),events:[]}})},j=r=>(r.title==="DEPARTAMENTO PROVEDOR DE ACESSIBILIDADE"?r.title="DEPAC":r.title==="SANTAS CEIAS"&&(r.desc=""),r),W=r=>r.charAt(0).toUpperCase()+r.slice(1).toLowerCase();const Q={class:"print-hide row q-col-gutter-sm items-center"},z={class:"col-12 col-md-4"},K={class:"col-12 col-md-4 row justify-center"},G={class:"col-12 col-md-4 row justify-end"},J={__name:"EventFilter",props:{events:{type:Array,required:!0},filters:{type:Array}},emits:["update:filteredEvents","update:filters"],setup(r,{emit:c}){const d=r,p=c,a=w({text:"",filters:[]});x(()=>[...new Set(d.events.map(s=>s.title))].filter(s=>s.toLowerCase().includes(a.value.text.toLowerCase())));const i=()=>{const e=a.value.text.trim();if(e){const s=e.startsWith("!")?"N\xE3o cont\xE9m":"Cont\xE9m",l=e.startsWith("!")?e.slice(1).trim():e;l.match(/Lista:/)?a.value.filters.push({text:"",list:l.replace("Lista:","").trim(),contem:s}):a.value.filters.push({text:l,list:"",contem:s}),a.value.text=""}},n=e=>{a.value.filters.splice(e,1)},u=e=>e.list?`Lista: ${e.list}`:`${e.contem}: "${e.text}"`,t=(e,s)=>{if(s.list&&s.list!==e.list)return!1;if(/[,|;| ou | e ]/.test(s.text)){const l=_=>{const y=s.text.toLowerCase().split(/[,;|]|(?:\s+ou\s+)|(?:\s+e\s+)/).map(f=>f.trim());return new RegExp(`(^|\\s)(${y.join("|")})`,"i").test(_.toLowerCase())};return[e.list,e.title,e.desc,e.locale].some(l)}else{const l=_=>s.text.toLowerCase().split(" ").every(f=>new RegExp(`(^|\\s)${f}`,"i").test(_.toLowerCase()));return[e.list,e.title,e.desc,e.locale].some(l)}},v=x(()=>a.value.filters.length===0?d.events:(p("update:filters",a.value.filters),d.events.filter(e=>a.value.filters.every(s=>s.contem==="Cont\xE9m"?t(e,s):!t(e,s)))));T(v,e=>{p("update:filteredEvents",e)});const E=()=>{window.print()};return d.filters.forEach(e=>{a.value.text=e.text,i()}),(e,s)=>(m(),h("div",Q,[o("div",z,[g(P,{dense:"",modelValue:a.value.text,"onUpdate:modelValue":s[0]||(s[0]=l=>a.value.text=l),class:"q-mx-sm",placeholder:"Filtrar",onKeydown:R(i,["enter"])},{append:F(()=>[g(L,{name:"search",onClick:i,class:"cursor-pointer"})]),_:1},8,["modelValue"])]),o("div",K,[(m(!0),h(C,null,M(a.value.filters,(l,_)=>(m(),I(U,{key:_,label:u(l),removable:"",dense:"",class:"q-px-sm",onRemove:y=>n(_)},null,8,["label","onRemove"]))),128))]),o("div",G,[g(L,{name:"print",onClick:s[1]||(s[1]=k(l=>E(),["prevent"])),class:"cursor-pointer text-blue-grey-8 q-mx-sm",size:"sm"})])]))}};var X=A(J,[["__scopeId","data-v-406a93bf"]]);const Z={class:"day-row"},ee={class:"items-start text-bold",style:{"padding-left":"6px"}},te=["onClick"],se=["innerHTML"],re=["innerHTML"],ae={__name:"EventDay",props:{day:Object},setup(r){const c=N(),d=n=>n.title.replace(/DEPARTAMENTO PROVEDOR DE ACESSIBILIDADE/,"DEPAC"),p=n=>n.title==="SANTAS CEIAS"?"":n.desc.replace(/\n/g," / "),a=n=>{const u=new Date(n);return u.getHours()<6?"":`${u.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}&nbsp;`},i=n=>{c.push({path:`/event/edit/${n.id}`})};return(n,u)=>(m(),h("tr",Z,[o("td",ee,D(r.day.dateFormat),1),o("td",null,[(m(!0),h(C,null,M(r.day.events,t=>(m(),h("div",{key:t.gid,class:"event",onClick:v=>i(t)},[o("span",{class:"text-bold",innerHTML:a(t.date)},null,8,se),o("span",null,[o("i",null,D(d(t)),1)]),O(" "+D(t.locale)+" ",1),o("span",{innerHTML:p(t)},null,8,re)],8,te))),128)),u[0]||(u[0]=o("div",{class:"event"},"\xA0",-1))])]))}};var ne=A(ae,[["__scopeId","data-v-123b8b3c"]]);const oe={class:"month-section"},le=["summary"],ie={colspan:"2"},ce={__name:"EventMonth",props:{month:String,days:Array},setup(r){const c=r,d=W($.formatDate(new Date(c.month),"MMMM").toUpperCase()),p=w(!1),a=()=>{const i=document.querySelector(`thead[ref="header-${c.month}"]`);if(i){const n=i.getBoundingClientRect();p.value=n.top<0}};return B(()=>{window.addEventListener("scroll",a)}),V(()=>{window.removeEventListener("scroll",a)}),(i,n)=>(m(),h("div",oe,[o("table",{summary:r.month},[o("thead",{ref:`header-${r.month}`,class:q({hidden:p.value})},[o("tr",null,[o("th",ie,D(S(d)),1)])],2),o("tbody",null,[(m(!0),h(C,null,M(r.days,u=>(m(),I(ne,{key:u.date,day:u},null,8,["day"]))),128))])],8,le)]))}};var de=A(ce,[["__scopeId","data-v-748aed00"]]);const ue={class:"page"},me={class:"print-hide text-h5 text-bold text-center"},pe={__name:"CalendarPage",setup(r){const c=H(),d=w((c.query.filters||"").split("/").filter(t=>t.trim()).map(t=>({text:t.startsWith("!")?t.slice(1).trim():t.trim(),list:"",contem:t.startsWith("!")?"N\xE3o cont\xE9m":"Cont\xE9m"}))),p=w([]),a=x(()=>[...b.agenda.items].filter(t=>!["VIAGENS MISSION\xC1RIAS","BATISMOS"].includes(t.title.toUpperCase())).filter(t=>new Date(t.date).getFullYear()===Number(c.params.ano)).sort((t,v)=>new Date(t.date)-new Date(v.date))),i=t=>{p.value=t},n=t=>{},u=x(()=>{const t=new Map;p.value.forEach(E=>{const e=$.formatDate(new Date(E.date),"YYYY-MM-01 12:00");t.has(e)||t.set(e,[]),t.get(e).push(j({...E}))});const v=new Map;return t.forEach((E,e)=>{const s=new Date(e),l=Y(s.getFullYear(),s.getMonth());l.forEach(_=>{_.events=E.filter(y=>{const f=new Date(y.date);return f.getDate()===_.date.getDate()&&f.getMonth()===_.date.getMonth()&&f.getFullYear()===_.date.getFullYear()}).sort((y,f)=>new Date(y.date)-new Date(f.date))}),v.set(e,l)}),Object.fromEntries(v)});return(t,v)=>(m(),h("div",ue,[o("h2",me," Calend\xE1rio "+D(S(c).params.ano),1),g(X,{events:a.value,filters:d.value,"onUpdate:filteredEvents":i,"onUpdate:filters":n},null,8,["events","filters"]),(m(!0),h(C,null,M(u.value,(E,e)=>(m(),I(de,{key:e,month:e,days:E},null,8,["month","days"]))),128))]))}};var xe=A(pe,[["__scopeId","data-v-d65673e0"]]);export{xe as default};
