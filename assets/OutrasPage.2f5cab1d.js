import{Q as u}from"./QBanner.f892d48e.js";import{E as n,M as l,H as o,G as s,I as t,O as g,ak as f,a0 as m,al as h,am as v}from"./index.f8c7ae11.js";import{Q as C}from"./QChip.3fcb4a12.js";import"./use-dark.6f6dd9b9.js";const b={class:"q-pa-md"},S={class:"tag-list"},_=["onClick"],A={__name:"OutrasPage",setup(L){const d=[{href:"#/lista/?pesquisar=*",title:"Lista Completa",description:"Lista Completa",group:"listas",icon:"",autoSave:!1},{href:"#/calendar/2025?filters=Lista: REGIONAL FAINA",title:"Calend\xE1rio 2025",description:"Calend\xE1rio 2025",group:"pages",icon:"",autoSave:!1},{href:"#/sobre",title:"Sobre N\xF3s",description:"Informa\xE7\xF5es sobre n\xF3s.",group:"P\xE1ginas",icon:"",autoSave:!1},{href:"#/depac",title:"DEPAC",description:"DEPAC.",group:"P\xE1ginas",icon:"",autoSave:!1},{href:"https://listagoiania.ccbgo.org.br/",title:"Regional Goi\xE2nia",description:"Lista de Atendimento da regional Faina",group:"listas",icon:"",autoSave:!1},{href:"#/lista/?pesquisar=Cozinha Regional Faina",title:"Cozinha Regional Faina",description:"",group:"Atendimento",icon:"",autoSave:!1},{href:"#/lista/GOIAS -",title:"Cidade de Goi\xE1s",description:"Lista Cid. Goi\xE1s",group:"listas",icon:"",autoSave:!0},{href:"#/lista/Faina -",title:"Faina",description:"Cidade Faina",group:"Localidade",icon:"",autoSave:!1},{href:"#/lista/Goi\xE2nia -",title:"Goi\xE2nia",description:"Cidade Goi\xE2nia",group:"Localidade",icon:"",autoSave:!1},{href:"#/lista/Itabera\xED -",title:"Itabera\xED",description:"Cidade Itabera\xED",group:"Localidade",icon:"",autoSave:!1},{href:"#/lista/Jussara -",title:"Jussara",description:"Cidade Jussara",group:"Localidade",icon:"",autoSave:!1}],c=a=>{if(!a)return;const e=a.startsWith("http");try{e?window.open(a,"_blank"):window.location.href=a}catch(i){console.error("Erro ao tentar abrir a URL:",i)}};return(a,e)=>(n(),l("div",b,[o(u,{class:"bg-primary text-dark q-pt-sm q-mb-lg",rounded:""},{default:s(()=>e[0]||(e[0]=[t("div",{class:"q-gutter-md q-pa-lg"},[t("h2",{class:"text-h3"},"Outras p\xE1ginas")],-1)])),_:1}),t("div",S,[(n(),l(g,null,f(d,(i,r)=>o(C,{key:r,class:"q-mb-xs tag-chip",removable:"",onRemove:p=>a.removeTag(r),style:{cursor:"pointer"}},{remove:s(()=>[o(m,{name:"close"})]),default:s(()=>[t("div",{onClick:h(p=>c(i.href),["stop"])},v(i.title),9,_)]),_:2},1032,["onRemove"])),64))])]))}};export{A as default};