import{G as I,A as p,I as y,D as n,L as g,M as o,P as b,F as w,B as k,R as $,S as C,v as q,w as T,E as f,C as F,T as z,U as J,Q as A,_ as R,V as U,W as Q,o as W,x as Y,X as H,Y as K,Z as E,$ as X,J as N,K as V,H as d,a0 as G,N as Z,O as j}from"./index.850eac16.js";const ee=["innerHTML"],te=I({__name:"ListaTRComponent",props:{event:{}},setup(h){const e=h.event;function c(t){return!(t instanceof Date)||isNaN(t.getTime())?"":["Dom","Seg","Ter","Qua","Qui","Sex","S\xE1b"][t.getDay()]||""}function i(t){return!(t instanceof Date)||isNaN(t.getTime())?"":String(t==null?void 0:t.getDate()).padStart(2,"0")}function v(t){return!(t instanceof Date)||isNaN(t.getTime())?"":String(t.getMonth()+1).padStart(2,"0")}function _(t){try{!(t instanceof Date)||isNaN(t.getTime());const x=String(t==null?void 0:t.getHours()).padStart(2,"0"),D=String(t==null?void 0:t.getMinutes()).padStart(2,"0");return`${x}:${D}`}catch{return console.log("Erro format hours!"),""}}function m(t){return!(!(t instanceof Date)||isNaN(t.getTime()))}return(t,x)=>(p(),y("tr",null,[n("td",{style:b(m(o(e).date)?"":"display: none;")},[n("b",null,g(i(o(e).date))+"/"+g(v(o(e).date)),1)],4),n("td",{style:b(m(o(e).date)?"":"display: none;")},g(c(o(e).date)),5),n("td",{style:b(o(e).date?"":"display: none;")},g(_(o(e).date)),5),n("td",null,[w(g(o(e).locale)+" ",1),o(e).recurring?(p(),k(C,{key:0,name:"event_repeat",style:{top:"-2px",color:"#9e9e9e"}})):$("",!0)]),n("td",{style:b(o(e).desc?"":"display: none;"),innerHTML:o(e).desc.replace(/(;\n|\n)/gi,"</br>")},null,12,ee)]))}});const ne={class:"print-hide calendar"},ae=I({__name:"IconCalendarComponent",props:{search:{},events:{}},emits:["update"],setup(h,{emit:S}){const e=h,c=S,i=q({range:"",events:[],locale:{days:"Domingo_Segunda_Ter\xE7a_Quarta_Quinta_Sexta_S\xE1bado".split("_"),daysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S\xE1b".split("_"),months:"Janeiro_Fevereiro_Mar\xE7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),firstDayOfWeek:0,format24h:!0,pluralDay:"dias"}});v(),T(()=>e.events,v);function v(){i.events=[...new Set(e.events.filter(_=>_.date instanceof Date).map(_=>{var m;return((m=_.date)==null?void 0:m.toISOString().split("T")[0].replace(/-/g,"/"))||""}).filter(_=>_))]}return T(()=>i.range,()=>{i.range?c("update",`${e.search.replace(/\d+\/\d+\/\d+/gi,"").trim()} ${i.range}`):c("update",e.search.replace(/\d+\/\d+\/\d+/gi,"").trim())}),(_,m)=>(p(),y("div",ne,[f(A,{icon:"event",dense:"",round:"",color:"dark"},{default:F(()=>[f(z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:F(()=>[f(J,{modelValue:i.range,"onUpdate:modelValue":m[0]||(m[0]=t=>i.range=t),minimal:"",mask:"DD/MM/YYYY",events:i.events,locale:i.locale},null,8,["modelValue","events","locale"])]),_:1})]),_:1})]))}});const B=h=>(Z("data-v-0f6a5142"),h=h(),j(),h),oe={class:"text-center"},se=B(()=>n("div",{class:"print-only"},"LISTA DE ATENDIMENTO E DIVERSOS",-1)),re={id:"lista"},ie={class:"print-hide menu flex space-between"},le={class:"search"},ce=["summary"],ue={colspan:"5"},de={key:0,class:"print-hide"},pe={class:"print-only right"},_e=["href"],me=B(()=>n("div",{class:"print-only"},[n("i",null,[w(" Ora\xE7\xE3o Santa Ceia "),n("br"),n("b",null,"P\xE3o:"),w(' "Senhor, aben\xE7oa este P\xE3o que vamos comer, que \xE9 a comunh\xE3o do Corpo de Cristo." '),n("br"),n("b",null,"C\xE1lice: "),w('"Senhor, aben\xE7oa o C\xE1lice que vamos beber, que \xE9 a comunh\xE3o do Sangue de Cristo." ')])],-1)),he=I({__name:"ListasPage",setup(h){var D,M;const S=U(),e=q({search:((D=S.query.pesquisar)==null?void 0:D.toString())||"",locale:((M=S.params.local)==null?void 0:M.toString())||"",titles:{}}),c=[];i(),T(()=>Q.eventos.items,i),T(()=>e.search,i);function i(){let s=Q.eventos.items;if(!e.search&&!e.locale)return[];const a=l=>l.trim().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");let r=a(e.search),u=a(e.locale);const L=new RegExp(`^${u}`);/^(\*)/gi.test(e.search)&&(u="",r=r.replace(/^(\*|\/)/gi,"").trim()),u&&(s=s.filter(l=>a(l.list).includes(u)||L.test(a(l.locale)))),r&&(s=s.filter(l=>r.split(" ").every(O=>{var P;return a(`${(P=l.date)==null?void 0:P.toLocaleString()} ${l.title} ${l.list} ${l.locale} ${l.desc}`).includes(O)}))),c.length=0,s.forEach(l=>{c.push(l)}),e.titles=[...new Set(c.map(l=>l.title))]}function v(s){if(s.altKey&&s.key.toLowerCase()==="a")s.preventDefault(),s.stopPropagation(),d.createEvent();else if(s.altKey&&["/","*"].includes(s.key)){const a=document.querySelector('input[type="text"]');a&&a.focus()}}W(()=>{window.addEventListener("keydown",v)}),Y(()=>{window.removeEventListener("keydown",v)});function _(){window.print()}function m(){navigator.share?navigator.share({title:"CCB",text:"Lista de Atendimento",url:location.href}).then(()=>console.log("Conte\xFAdo compartilhado com sucesso!")).catch(s=>console.error("Erro ao compartilhar:",s)):console.error("API de compartilhamento n\xE3o suportada.")}function t(){const r=`https://api.whatsapp.com/send/?phone=5562984972385&text=${encodeURIComponent(`\u{1F4C4} Batismo, Santa Ceia, ...

\u{1F4CD} Local: 
\u{1F557} Data: 
\u{1F935} Atender\xE1: `)}&type=phone_number&app_absent=0`;window.location.href=r}async function x(){if(!d.loading){d.loading=!0;try{await G()}catch{console.log("Erro ao recarregar!")}console.log("Terminoou de recarregar..."),d.loading=!1}}return(s,a)=>(p(),y(N,null,[n("div",oe,[se,n("div",null,g(e.locale.replace(/-$/,"").trim()),1)]),n("div",re,[n("div",ie,[n("div",le,[H(n("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=r=>e.search=r),placeholder:"Pesquisar...","x-webkit-speech":""},null,512),[[K,e.search]])]),o(d).shared?(p(),k(C,{key:0,name:"share",onClick:E(m,["prevent"])})):$("",!0),o(d).shared?(p(),k(C,{key:1,name:"quiz",onClick:E(t,["prevent"])})):$("",!0),f(C,{name:"cached",onClick:E(x,["prevent"]),class:X({rotate:o(d).loading}),style:{transform:"scaleX(-1)"}},null,8,["class"]),f(C,{name:"print",onClick:a[1]||(a[1]=E(r=>_(),["prevent"]))}),f(A,{to:"/",dense:"",flat:"",icon:"close"})]),(p(!0),y(N,null,V(e.titles,r=>(p(),y("div",{key:r},[n("table",{summary:String(r)},[n("thead",null,[n("th",ue,g(r),1)]),n("tbody",null,[(p(!0),y(N,null,V(c.filter(u=>u.title===r),u=>(p(),k(te,{key:u.gid,event:u,onDblclick:L=>o(d).selected=u,onContextmenu:E(L=>o(d).selected=u,["right","prevent"])},null,8,["event","onDblclick","onContextmenu"]))),128))])],8,ce)]))),128)),!c.length&&!e.search.startsWith("*")?(p(),y("div",de,[f(A,{class:"print-hide q-mt-lg",onClick:a[2]||(a[2]=r=>e.search=`*${e.search}`),color:"blue",flat:"",label:"Lista completa..."})])):$("",!0),n("div",pe,[n("a",{style:{color:"black"},href:o(d).url},g(o(d).url),9,_e)]),me]),f(ae,{search:e.search,events:c,onUpdate:a[3]||(a[3]=r=>e.search=r)},null,8,["search"])],64))}});var fe=R(he,[["__scopeId","data-v-0f6a5142"]]);export{fe as default};
