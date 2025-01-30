import{Q as G}from"./QSeparator.fded1de6.js";import{c as J,i as X,e as V,t as y,u as Y,a as m,w as h,j as Z,z as ee,h as z,l as te,g as oe,K as ae,o as K,y as ne,E as _,M as k,H as v,G as g,Q as F,aj as se,P as S,$ as T,I as p,O as E,ak as H,F as q,al as A,am as D,N as M,an as I,L as re,R as Q}from"./index.be6d2104.js";import{Q as ie}from"./QResizeObserver.ec912827.js";import{Q as le}from"./QInput.86b20943.js";import{Q as W}from"./QChip.1f3e2901.js";import{a as ue,b as B}from"./app.3268e0aa.js";import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.27a72a45.js";import"./focus-manager.f900c54d.js";import"./private.use-form.effdbe3d.js";var ce=J({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(s,{slots:l,emit:a}){const{proxy:{$q:i}}=oe(),e=X(te,V);if(e===V)return console.error("QFooter needs to be child of QLayout"),V;const r=y(parseInt(s.heightHint,10)),d=y(!0),b=y(Y.value===!0||e.isContainer.value===!0?0:window.innerHeight),w=m(()=>s.reveal===!0||e.view.value.indexOf("F")!==-1||i.platform.is.ios&&e.isContainer.value===!0),P=m(()=>e.isContainer.value===!0?e.containerHeight.value:b.value),x=m(()=>{if(s.modelValue!==!0)return 0;if(w.value===!0)return d.value===!0?r.value:0;const t=e.scroll.value.position+P.value+r.value-e.height.value;return t>0?t:0}),C=m(()=>s.modelValue!==!0||w.value===!0&&d.value!==!0),$=m(()=>s.modelValue===!0&&C.value===!0&&s.reveal===!0),n=m(()=>"q-footer q-layout__section--marginal "+(w.value===!0?"fixed":"absolute")+"-bottom"+(s.bordered===!0?" q-footer--bordered":"")+(C.value===!0?" q-footer--hidden":"")+(s.modelValue!==!0?" q-layout--prevent-focus"+(w.value!==!0?" hidden":""):"")),u=m(()=>{const t=e.rows.value.bottom,c={};return t[0]==="l"&&e.left.space===!0&&(c[i.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),t[2]==="r"&&e.right.space===!0&&(c[i.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),c});function o(t,c){e.update("footer",t,c)}function f(t,c){t.value!==c&&(t.value=c)}function N({height:t}){f(r,t),o("size",t)}function O(){if(s.reveal!==!0)return;const{direction:t,position:c,inflectionPoint:j}=e.scroll.value;f(d,t==="up"||c-j<100||e.height.value-P.value-c-r.value<300)}function U(t){$.value===!0&&f(d,!0),a("focusin",t)}h(()=>s.modelValue,t=>{o("space",t),f(d,!0),e.animate()}),h(x,t=>{o("offset",t)}),h(()=>s.reveal,t=>{t===!1&&f(d,s.modelValue)}),h(d,t=>{e.animate(),a("reveal",t)}),h([r,e.scroll,e.height],O),h(()=>i.screen.height,t=>{e.isContainer.value!==!0&&f(b,t)});const L={};return e.instances.footer=L,s.modelValue===!0&&o("size",r.value),o("space",s.modelValue),o("offset",x.value),Z(()=>{e.instances.footer===L&&(e.instances.footer=void 0,o("size",0),o("offset",0),o("space",!1))}),()=>{const t=ee(l.default,[z(ie,{debounce:0,onResize:N})]);return s.elevated===!0&&t.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),z("footer",{class:n.value,style:u.value,onFocusin:U},t)}}});const de={class:"tag-list"},fe=["onClick"],ve={class:"tag-list"},me=["onClick"],pe={__name:"inputSearch",emits:["search"],setup(s,{emit:l}){const a=ae(),i=l,e=y(null),r=y("");let d=null;const b=async n=>{if(!n.href)return;const u=n.href.startsWith("http://")||n.href.startsWith("https://");try{u?window.open(n.href,"_blank"):(n.autoSave&&await ue(B,n),a.push(n.href.replace(/^#\//,"/")))}catch(o){console.error("Erro ao tentar abrir a URL:",o)}},w=m(()=>B.agenda.tags.filter(n=>n.fixed===!0)),P=m(()=>{if(r.value.trim()==="")return[];const n=r.value.split(" ").filter(u=>u.trim()!=="").map(u=>x(u));return B.agenda.tags.filter(u=>n.every(o=>new RegExp(`\\b${o}`,"i").test(x(u.title||""))||new RegExp(`\\b${o}`,"i").test(x(u.description||""))))}),x=n=>n.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"")||"";h(r,n=>{clearTimeout(d),n&&(d=setTimeout(()=>{i("search",n)},500))});const C=()=>{r.value&&(window.location.href=`${window.location.origin}/#/lista/?pesquisar=${r.value}`)},$=n=>{n.key==="Escape"&&(r.value="",e.value?.focus())};return K(()=>{window.addEventListener("keydown",$),e.value?.focus()}),ne(()=>{window.removeEventListener("keydown",$)}),(n,u)=>(_(),k("div",null,[v(le,{ref_key:"searchInput",ref:e,onKeyup:se(C,["enter"]),placeholder:"Pesquisar por localidades, atendimentos, p\xE1ginas...",modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=o=>r.value=o),class:"search-bar q-ma-lg"},{append:g(()=>[v(F,{flat:"",round:"",icon:"search",onClick:C})]),_:1},8,["modelValue"]),S(p("div",null,[p("div",de,[(_(!0),k(E,null,H(P.value,(o,f)=>(_(),q(W,{key:f,class:"q-mb-xs tag-chip",style:{cursor:"pointer"}},{default:g(()=>[p("div",{onClick:A(N=>b(o),["stop"])},D(`${o.group}: ${o.title}`),9,fe)]),_:2},1024))),128))])],512),[[T,r.value]]),S(p("div",null,[p("div",ve,[(_(!0),k(E,null,H(w.value,(o,f)=>(_(),q(W,{key:f,class:"q-mb-xs tag-chip",style:{cursor:"pointer"}},{default:g(()=>[p("div",{onClick:A(N=>b(o),["stop"])},D(`${o.group}: ${o.title}`),9,me)]),_:2},1024))),128))])],512),[[T,!r.value]])]))}};const _e={__name:"InstallComponent",setup(s){const l=y(!1);let a=null;window.matchMedia("(display-mode: standalone)").matches?l.value=!1:l.value=!0;const i=async()=>{a&&(a.prompt(),await a.userChoice,a.userChoice.then(e=>{e.outcome==="accepted"?I.create({message:"PWA instalado com sucesso!",color:"green",icon:"check_circle"}):I.create({message:"Usu\xE1rio recusou a instala\xE7\xE3o do PWA.",color:"red",icon:"cancel"}),a=null,l.value=!1}))};return K(()=>{window.addEventListener("beforeinstallprompt",e=>{console.log("Instaled::: ",a),e.preventDefault(),a=e,l.value=!0})}),(e,r)=>l.value?(_(),q(F,{key:0,color:"red",round:"",dense:"",size:"md",icon:"mdi-cellphone-arrow-down-variant",class:"install print-hide","aria-label":"Instalar APP",onClick:i})):M("",!0)}};var he=R(_e,[["__scopeId","data-v-726857e2"]]);const ge={class:"print-hide"},ye={__name:"PushComponent",setup(s){const l=y(!0);"Notification"in window&&Notification.permission==="granted"&&(l.value=!1);const a=()=>{"Notification"in window?Notification.requestPermission().then(i=>{i==="granted"?(I.create({color:"positive",position:"top",message:"Permiss\xE3o para notifica\xE7\xF5es concedida!"}),l.value=!1,setTimeout(()=>{location.reload(!0)},2e3)):i==="denied"&&I.create({color:"negative",position:"top",message:"Permiss\xE3o para notifica\xE7\xF5es negada!"})}):I.create({color:"negative",position:"top",message:"Seu navegador n\xE3o suporta notifica\xE7\xF5es!"})};return(i,e)=>(_(),k("div",ge,[l.value?(_(),q(F,{onClick:a,class:"notify print-hide",key:"btn_size_dense_round_sm",round:"",dense:"",color:"red",size:"md",icon:"notifications","aria-label":"Notificar"})):M("",!0)]))}};var we=R(ye,[["__scopeId","data-v-339ba294"]]);const xe={class:"text-center"},be={__name:"IndexPage",setup(s){return(l,a)=>{const i=re("router-link");return _(),k(E,null,[v(we),v(he),p("div",null,[p("div",xe,[a[0]||(a[0]=p("h1",{class:"logo-text"},"REGIONAL FAINA",-1)),v(pe)]),v(ce,{class:"bg-grey-1 text-grey-8 text-caption q-pa-sm row items-center justify-center"},{default:g(()=>[v(i,{to:"/sobre",class:"q-mx-sm text-grey-8"},{default:g(()=>a[1]||(a[1]=[Q(" \xA9 Regional Faina ")])),_:1}),v(G,{vertical:"",class:"q-mx-sm"}),v(i,{to:"/outras",class:"q-mx-sm text-grey-8"},{default:g(()=>a[2]||(a[2]=[Q(" P\xE1ginas ")])),_:1}),v(i,{to:"/contato",class:"q-mx-sm text-grey-8"},{default:g(()=>a[3]||(a[3]=[Q(" Contato ")])),_:1})]),_:1})])],64)}}};var Be=R(be,[["__scopeId","data-v-92b5327e"]]);export{Be as default};
