import{r as _,a as E,w as C,o as b,y as I,B as n,C as u,E as i,J as f,H as $,ac as B,L as h,X as v,D as r,K as S,ad as D,G as L,N,ae as Q}from"./index.fb664e78.js";import{Q as q}from"./QInput.9b078dda.js";import{Q as K}from"./QChip.1e392b89.js";import{a as P,b as w}from"./app.e061d90f.js";import{_ as T}from"./TagsShow.b6594d70.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";import"./focus-manager.36e9374e.js";import"./use-dark.78468f61.js";const R={class:"tag-list"},U=["onClick"],W={__name:"inputSearch",emits:["search"],setup(g,{emit:d}){const o=d,l=_(null),a=_(""),y=async e=>{if(!e.href)return;const t=e.href.startsWith("http://")||e.href.startsWith("https://");try{t?window.open(e.href,"_blank"):(e.autoSave&&await P(w,e),window.location.href=e.href)}catch(s){console.error("Erro ao tentar abrir a URL:",s)}},x=E(()=>{const e=a.value.split(" ").filter(t=>t.trim()!=="").map(t=>c(t));return w.agenda.tagsSuggestions.filter(t=>e.every(s=>new RegExp(`\\b${s}`,"i").test(c(t.title||""))||new RegExp(`\\b${s}`,"i").test(c(t.description||""))))}),c=e=>e.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"")||"";C(a,e=>{e&&o("search",e)});const p=()=>{a.value&&(window.location.href=`${window.location.origin}/#/lista/?pesquisar=${a.value}`)},m=e=>{var t;e.key==="Escape"&&(a.value="",(t=l.value)==null||t.focus())};return b(()=>{var e;window.addEventListener("keydown",m),(e=l.value)==null||e.focus()}),I(()=>{window.removeEventListener("keydown",m)}),(e,t)=>(n(),u("div",null,[i(q,{ref_key:"searchInput",ref:l,onKeyup:B(p,["enter"]),placeholder:"Pesquisar por localidades, atendimentos, paginas...",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),class:"search-bar q-ma-lg"},{append:f(()=>[i($,{flat:"",round:"",icon:"search",onClick:p})]),_:1},8,["modelValue"]),h(r("div",null,[r("div",R,[(n(!0),u(S,null,D(x.value,(s,k)=>(n(),L(K,{key:k,class:"q-mb-xs tag-chip",style:{cursor:"pointer"}},{default:f(()=>[r("div",{onClick:N(M=>y(s),["stop"])},Q(s.title),9,U)]),_:2},1024))),128))])],512),[[v,a.value]]),h(r("div",null,[i(T)],512),[[v,!a.value]])]))}};const z={class:"text-center"},F={__name:"IndexPage",setup(g){return(d,o)=>(n(),u("div",null,[r("div",z,[o[0]||(o[0]=r("img",{src:"img/logo-ccb.png",alt:"Congrega\xE7\xE3o Crist\xE3 no Brasil",class:"logo"},null,-1)),i(W)])]))}};var Z=V(F,[["__scopeId","data-v-c368cf0a"]]);export{Z as default};
