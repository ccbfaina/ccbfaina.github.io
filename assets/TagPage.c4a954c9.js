import{Q as h}from"./QInput.759c4158.js";import{a as f,E as r,M as i,I as d,O as T,ak as k,F as w,G as _,H as c,a0 as b,al as x,am as y,t as E,aj as Q}from"./index.f8c7ae11.js";import{b as s,s as V,T as g}from"./app.2e760696.js";import{Q as B}from"./QChip.3fcb4a12.js";import"./focus-manager.fa09ebd0.js";import"./use-dark.6f6dd9b9.js";import"./private.use-form.f8786126.js";const C={class:"tag-list"},$=["onClick"],I={__name:"TagsShow",setup(m){const a=e=>{s.agenda.tags.splice(s.agenda.tags.length-1-e,1),n()},n=()=>{V(s)},o=e=>{if(!e)return;const p=e.startsWith("http");try{p?window.open(e,"_blank"):window.location.href=e}catch(l){console.error("Erro ao tentar abrir a URL:",l)}},t=f(()=>[...s.agenda.tags].reverse());return(e,p)=>(r(),i("div",null,[d("div",C,[(r(!0),i(T,null,k(t.value,(l,u)=>(r(),w(B,{key:u,class:"q-mb-xs tag-chip",removable:"",onRemove:v=>a(u),style:{cursor:"pointer"}},{remove:_(()=>[c(b,{name:"close"})]),default:_(()=>[d("div",{onClick:x(v=>o(l.href),["stop"])},y(l.title),9,$)]),_:2},1032,["onRemove"]))),128))])]))}},R={__name:"TagsEdit",setup(m){const a=E(g.create()),n=()=>{const{title:o}=a.value;o&&!s.agenda.tags.some(t=>t.title===o)&&(s.agenda.tags.push({...a.value}),a.value=g.create())};return(o,t)=>(r(),i("div",null,[c(h,{modelValue:a.value.title,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value.title=e),onKeyup:Q(n,["enter"]),label:"Adicione uma tag",outlined:"",dense:"",class:"q-ma-md"},null,8,["modelValue"]),c(I)]))}},S={__name:"TagPage",setup(m){return(a,n)=>(r(),i("div",null,[c(R)]))}};export{S as default};
