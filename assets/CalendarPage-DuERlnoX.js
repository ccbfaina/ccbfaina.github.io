import{d as A}from"./date-D8MFdHlB.js";import{a as T}from"./app-29eUeidI.js";import{t as g,a as $,w as b,J as _,D as u,G as o,F as y,E as F,W as I,O as R,N as x,R as C,C as S,S as N,H as k,T as w,M as O,o as V,m as B,a3 as H,$ as L,a0 as U}from"./index-GUTASxEq.js";import{Q as P}from"./QInput-CAQEoFIM.js";import{Q as W}from"./QChip-CbobHzIi.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./focus-manager-DNoq2uyl.js";import"./use-dark-CjoKdMar.js";import"./private.use-form-CA2sghPq.js";const Y=(s,c)=>{const m=new Date(s,c+1,0).getDate();return Array.from({length:m},(p,r)=>{const i=new Date(s,c,r+1);return{date:i,dateFormat:A.formatDate(i,"DD | ddd"),events:[]}})},q=s=>(s.title==="DEPARTAMENTO PROVEDOR DE ACESSIBILIDADE"?s.title="DEPAC":s.title==="SANTAS CEIAS"&&(s.desc=""),s),j=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),Q={class:"print-hide row q-col-gutter-sm items-center"},z={class:"col-12 col-md-4"},G={class:"col-12 col-md-4 row justify-center"},K={class:"col-12 col-md-4 row justify-end"},J={__name:"EventFilter",props:{events:{type:Array,required:!0},filters:{type:Array}},emits:["update:filteredEvents","update:filters"],setup(s,{emit:c}){const m=s,p=c,r=g({text:"",filters:[]}),i=()=>{const t=r.value.text.trim();if(t){const n=t.startsWith("!")?"Não contém":"Contém",l=t.startsWith("!")?t.slice(1).trim():t;l.match(/Lista:/)?r.value.filters.push({text:"",list:l.replace("Lista:","").trim(),contem:n}):r.value.filters.push({text:l,list:"",contem:n}),r.value.text=""}},a=t=>{r.value.filters.splice(t,1)},d=t=>t.list?`Lista: ${t.list}`:`${t.contem}: "${t.text}"`,e=(t,n)=>{if(n.list&&n.list!==t.list)return!1;if(/[,|;| ou | e ]/.test(n.text)){const l=f=>{const E=n.text.toLowerCase().split(/[,;|]|(?:\s+ou\s+)|(?:\s+e\s+)/).map(h=>h.trim());return new RegExp(`(^|\\s)(${E.join("|")})`,"i").test(f.toLowerCase())};return[t.list,t.title,t.desc,t.locale].some(l)}else{const l=f=>n.text.toLowerCase().split(" ").every(h=>new RegExp(`(^|\\s)${h}`,"i").test(f.toLowerCase()));return[t.list,t.title,t.desc,t.locale].some(l)}},v=$(()=>r.value.filters.length===0?m.events:(p("update:filters",r.value.filters),m.events.filter(t=>r.value.filters.every(n=>n.contem==="Contém"?e(t,n):!e(t,n)))));b(v,t=>{p("update:filteredEvents",t)});const D=()=>{window.print()};return m.filters.forEach(t=>{r.value.text=t.text,i()}),(t,n)=>(u(),_("div",Q,[o("div",z,[y(P,{dense:"",modelValue:r.value.text,"onUpdate:modelValue":n[0]||(n[0]=l=>r.value.text=l),class:"q-mx-sm",placeholder:"Filtrar",onKeydown:R(i,["enter"])},{append:F(()=>[y(I,{name:"search",onClick:i,class:"cursor-pointer"})]),_:1},8,["modelValue"])]),o("div",G,[(u(!0),_(x,null,C(r.value.filters,(l,f)=>(u(),S(W,{key:f,label:d(l),removable:"",dense:"",class:"q-px-sm",onRemove:E=>a(f)},null,8,["label","onRemove"]))),128))]),o("div",K,[y(I,{name:"print",onClick:n[1]||(n[1]=N(l=>D(),["prevent"])),class:"cursor-pointer text-blue-grey-8 q-mx-sm",size:"sm"})])]))}},X=M(J,[["__scopeId","data-v-18fde420"]]),Z={class:"day-row"},tt={class:"items-start text-bold",style:{"padding-left":"6px"}},et=["onClick"],st=["innerHTML"],rt=["innerHTML"],nt={__name:"EventDay",props:{day:Object},setup(s){const c=k(),m=a=>a.title.replace(/DEPARTAMENTO PROVEDOR DE ACESSIBILIDADE/,"DEPAC"),p=a=>a.title==="SANTAS CEIAS"?"":a.desc.replace(/\n/g," / "),r=a=>{const d=new Date(a);return d.getHours()<6?"":`${d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}&nbsp;`},i=a=>{c.push({path:`/event/edit/${a.id}`})};return(a,d)=>(u(),_("tr",Z,[o("td",tt,w(s.day.dateFormat),1),o("td",null,[(u(!0),_(x,null,C(s.day.events,e=>(u(),_("div",{key:e.gid,class:"event",onClick:v=>i(e)},[o("span",{class:"text-bold",innerHTML:r(e.date)},null,8,st),o("span",null,[o("i",null,w(m(e)),1)]),O(" "+w(e.locale)+" ",1),o("span",{innerHTML:p(e)},null,8,rt)],8,et))),128)),d[0]||(d[0]=o("div",{class:"event"}," ",-1))])]))}},at=M(nt,[["__scopeId","data-v-f55b21e5"]]),ot={class:"month-section"},lt=["summary"],it={colspan:"2"},ct={__name:"EventMonth",props:{month:String,days:Array},setup(s){const c=s,m=j(A.formatDate(new Date(c.month),"MMMM").toUpperCase()),p=g(!1),r=()=>{const i=document.querySelector(`thead[ref="header-${c.month}"]`);if(i){const a=i.getBoundingClientRect();p.value=a.top<0}};return V(()=>{window.addEventListener("scroll",r)}),B(()=>{window.removeEventListener("scroll",r)}),(i,a)=>(u(),_("div",ot,[o("table",{summary:s.month},[o("thead",{ref:`header-${s.month}`,class:H({hidden:p.value})},[o("tr",null,[o("th",it,w(L(m)),1)])],2),o("tbody",null,[(u(!0),_(x,null,C(s.days,d=>(u(),S(at,{key:d.date,day:d},null,8,["day"]))),128))])],8,lt)]))}},dt=M(ct,[["__scopeId","data-v-e70bde74"]]),ut={class:"page"},mt={class:"print-hide text-h5 text-bold text-center"},pt={__name:"CalendarPage",setup(s){const c=U(),m=g((c.query.filters||"").split("/").filter(e=>e.trim()).map(e=>({text:e.startsWith("!")?e.slice(1).trim():e.trim(),list:"",contem:e.startsWith("!")?"Não contém":"Contém"}))),p=g([]),r=$(()=>[...T.agenda.items].filter(e=>!["VIAGENS MISSIONÁRIAS","BATISMOS"].includes(e.title.toUpperCase())).filter(e=>new Date(e.date).getFullYear()===Number(c.params.ano)).sort((e,v)=>new Date(e.date)-new Date(v.date))),i=e=>{p.value=e},a=e=>{},d=$(()=>{const e=new Map;p.value.forEach(D=>{const t=A.formatDate(new Date(D.date),"YYYY-MM-01 12:00");e.has(t)||e.set(t,[]),e.get(t).push(q({...D}))});const v=new Map;return e.forEach((D,t)=>{const n=new Date(t),l=Y(n.getFullYear(),n.getMonth());l.forEach(f=>{f.events=D.filter(E=>{const h=new Date(E.date);return h.getDate()===f.date.getDate()&&h.getMonth()===f.date.getMonth()&&h.getFullYear()===f.date.getFullYear()}).sort((E,h)=>new Date(E.date)-new Date(h.date))}),v.set(t,l)}),Object.fromEntries(v)});return(e,v)=>(u(),_("div",ut,[o("h2",mt,"Calendário "+w(L(c).params.ano),1),y(X,{events:r.value,filters:m.value,"onUpdate:filteredEvents":i,"onUpdate:filters":a},null,8,["events","filters"]),(u(!0),_(x,null,C(d.value,(D,t)=>(u(),S(dt,{key:t,month:t,days:D},null,8,["month","days"]))),128))]))}},xt=M(pt,[["__scopeId","data-v-5dddfa2e"]]);export{xt as default};
