import{a as v,B as s,C as n,D as c,K as _,ad as u,G as h,J as i,E as k,Q as w,N as f,ae as T}from"./index.c07e1349.js";import{Q as b}from"./QChip.f1adeff6.js";import{b as t,s as B}from"./app.f5eed166.js";const C={class:"tag-list"},x=["onClick"],R={__name:"TagsShow",setup(y){const l=e=>{t.agenda.tags.splice(t.agenda.tags.length-1-e,1),p()},p=()=>{B(t)},m=e=>{if(!e)return;const o=e.startsWith("http");try{o?window.open(e,"_blank"):window.location.href=e}catch(a){console.error("Erro ao tentar abrir a URL:",a)}},d=v(()=>[...t.agenda.tags].reverse());return(e,o)=>(s(),n("div",null,[c("div",C,[(s(!0),n(_,null,u(d.value,(a,r)=>(s(),h(b,{key:r,class:"q-mb-xs tag-chip",removable:"",onRemove:g=>l(r),style:{cursor:"pointer"}},{remove:i(()=>[k(w,{name:"close"})]),default:i(()=>[c("div",{onClick:f(g=>m(a.href),["stop"])},T(a.title),9,x)]),_:2},1032,["onRemove"]))),128))])]))}};export{R as _};