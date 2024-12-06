import{c as E,i as I,e as C,a as m,h as y,b as ne,l as V,p as oe,g as R,d as ie,s as ue,w as N,o as k,f as F,n as ae,j as de,k as j,m as fe,q as pe,r as z,t as le,u as K,v as O,x as P,y as ve,z as he,A as ge,B as w,C as G,D as me,E as f,Q as M,F as J,G as x,H as X,I as c,J as ye,K as L,L as S,M as be}from"./index.50f7b3dd.js";import{Q as we,a as Ce,b as $,c as T,C as Q}from"./ClosePopup.f0930dad.js";import{Q as Y}from"./QList.06ce8b69.js";import{u as _e}from"./use-quasar.9a46e088.js";import{_ as xe}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.17392d97.js";import"./focus-manager.1395dcb5.js";var ze=E({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:h}){const{proxy:{$q:n}}=R(),e=I(V,C);if(e===C)return console.error("QPage needs to be a deep child of QLayout"),C;if(I(oe,C)===C)return console.error("QPage needs to be child of QPageContainer"),C;const s=m(()=>{const d=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return t.styleFn(d,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-d+"px":n.screen.height===0?d!==0?`calc(100vh - ${d}px)`:"100vh":n.screen.height-d+"px"}}),u=m(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:u.value,style:s.value},ne(h.default))}}),Le=E({name:"QPageContainer",setup(t,{slots:h}){const{proxy:{$q:n}}=R(),e=I(V,C);if(e===C)return console.error("QPageContainer needs to be child of QLayout"),C;ie(oe,!0);const r=m(()=>{const s={};return e.header.space===!0&&(s.paddingTop=`${e.header.size}px`),e.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(s.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),s});return()=>y("div",{class:"q-page-container",style:r.value},ne(h.default))}});const{passive:Z}=j,Se=["both","horizontal","vertical"];var $e=E({name:"QScrollObserver",props:{axis:{type:String,validator:t=>Se.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:ue},emits:["scroll"],setup(t,{emit:h}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,r,s;N(()=>t.scrollTarget,()=>{l(),d()});function u(){e!==null&&e();const p=Math.max(0,fe(r)),b=pe(r),g={top:p-n.position.top,left:b-n.position.left};if(t.axis==="vertical"&&g.top===0||t.axis==="horizontal"&&g.left===0)return;const H=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";n.position={top:p,left:b},n.directionChanged=n.direction!==H,n.delta=g,n.directionChanged===!0&&(n.direction=H,n.inflectionPoint=n.position),h("scroll",{...n})}function d(){r=de(s,t.scrollTarget),r.addEventListener("scroll",o,Z),o(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",o,Z),r=void 0)}function o(p){if(p===!0||t.debounce===0||t.debounce==="0")u();else if(e===null){const[b,g]=t.debounce?[setTimeout(u,t.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];e=()=>{g(b),e=null}}}const{proxy:a}=R();return N(()=>a.$q.lang.rtl,u),k(()=>{s=a.$el.parentNode,d()}),F(()=>{e!==null&&e(),l()}),Object.assign(a,{trigger:o,getPosition:()=>n}),ae}});function Te(){const t=z(!le.value);return t.value===!1&&k(()=>{t.value=!0}),{isHydrated:t}}const re=typeof ResizeObserver!="undefined",ee=re===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var te=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:h}){let n=null,e,r={width:-1,height:-1};function s(l){l===!0||t.debounce===0||t.debounce==="0"?u():n===null&&(n=setTimeout(u,t.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),e){const{offsetWidth:l,offsetHeight:o}=e;(l!==r.width||o!==r.height)&&(r={width:l,height:o},h("resize",r))}}const{proxy:d}=R();if(d.trigger=s,re===!0){let l;const o=a=>{e=d.$el.parentNode,e?(l=new ResizeObserver(s),l.observe(e),u()):a!==!0&&K(()=>{o(!0)})};return k(()=>{o()}),F(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():e&&l.unobserve(e))}),ae}else{let a=function(){n!==null&&(clearTimeout(n),n=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",s,j.passive),o=void 0)},p=function(){a(),e&&e.contentDocument&&(o=e.contentDocument.defaultView,o.addEventListener("resize",s,j.passive),u())};const{isHydrated:l}=Te();let o;return k(()=>{K(()=>{e=d.$el,e&&p()})}),F(a),()=>{if(l.value===!0)return y("object",{class:"q--avoid-card-border",style:ee.style,tabindex:-1,type:"text/html",data:ee.url,"aria-hidden":"true",onLoad:p})}}}}),Qe=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:h,emit:n}){const{proxy:{$q:e}}=R(),r=z(null),s=z(e.screen.height),u=z(t.container===!0?0:e.screen.width),d=z({position:0,direction:"down",inflectionPoint:0}),l=z(0),o=z(le.value===!0?0:O()),a=m(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),p=m(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),b=m(()=>o.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),g=m(()=>o.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function H(i){if(t.container===!0||document.qScrollPrevented!==!0){const v={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};d.value=v,t.onScroll!==void 0&&n("scroll",v)}}function se(i){const{height:v,width:_}=i;let q=!1;s.value!==v&&(q=!0,s.value=v,t.onScrollHeight!==void 0&&n("scrollHeight",v),W()),u.value!==_&&(q=!0,u.value=_),q===!0&&t.onResize!==void 0&&n("resize",i)}function ce({height:i}){l.value!==i&&(l.value=i,W())}function W(){if(t.container===!0){const i=s.value>l.value?O():0;o.value!==i&&(o.value=i)}}let A=null;const D={instances:{},view:m(()=>t.view),isContainer:m(()=>t.container),rootRef:r,height:s,containerHeight:l,scrollbarWidth:o,totalWidth:m(()=>u.value+o.value),rows:m(()=>{const i=t.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:d,animate(){A!==null?clearTimeout(A):document.body.classList.add("q-body--layout-animate"),A=setTimeout(()=>{A=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,v,_){D[i][v]=_}};if(ie(V,D),O()>0){let _=function(){i=null,v.classList.remove("hide-scrollbar")},q=function(){if(i===null){if(v.scrollHeight>e.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(_,300)},B=function(U){i!==null&&U==="remove"&&(clearTimeout(i),_()),window[`${U}EventListener`]("resize",q)},i=null;const v=document.body;N(()=>t.container!==!0?"add":"remove",B),t.container!==!0&&B("add"),ve(()=>{B("remove")})}return()=>{const i=he(h.default,[y($e,{onScroll:H}),y(te,{onResize:se})]),v=y("div",{class:a.value,style:p.value,ref:t.container===!0?void 0:r,tabindex:-1},i);return t.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:r},[y(te,{onResize:ce}),y("div",{class:"absolute-full",style:b.value},[y("div",{class:"scroll",style:g.value},[v])])]):v}}});const qe={class:"print-hide absolute-top-left row q-pa-md z-top"},Pe={key:0,class:"off"},ke={__name:"MainLayout",setup(t){const h=P({connected:navigator.onLine}),n=window.history,e=()=>{h.connected=navigator.onLine};k(()=>{window.addEventListener("online",e),window.addEventListener("offline",e)}),F(()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)});const r=_e(),s=()=>navigator.share,u=()=>{const o=encodeURIComponent(`\u{1F4C4} Batismo, Santa Ceia, ...

\u{1F4CD} Local: 
\u{1F557} Data: 
\u{1F935} Atender\xE1: `);if(s()){const p=`https://api.whatsapp.com/send/?phone=5562984972385&text=${o}&type=phone_number&app_absent=0`;window.location.href=p}else{const a="marco.queiroz@ccbgo.org.br",p=encodeURIComponent("Ajuda com a agenda CCB"),b=`mailto:${a}?subject=${p}&body=${o}`;window.location.href=b}},d=()=>{s()?navigator.share({title:"CCB",text:"Lista de Atendimento",url:location.href}).then(()=>r.notify({type:"positive",message:"Compartilhado com sucesso!"})).catch(o=>r.notify({type:"negative",message:"Erro: "+o})):(l(location.href),r.notify({type:"info",message:"URL copiada."}))},l=o=>{navigator.clipboard.writeText(o)};return(o,a)=>{const p=ge("router-view");return w(),G(ye,null,[me("div",qe,[f(M,{color:"primary",flat:"",round:"",icon:"home",to:"/",class:"q-mr-sm"}),J(n).length?(w(),x(M,{key:0,color:"primary",flat:"",round:"",icon:"arrow_back",class:"q-mr-sm",onClick:a[0]||(a[0]=b=>J(n).back())})):X("",!0)]),f(M,{color:"primary",flat:"",round:"",icon:"more_vert",class:"print-hide z-top absolute-top-right q-pa-md"},{default:c(()=>[f(we,{anchor:"top right",self:"top end",class:"z-top"},{default:c(()=>[f(Ce,{label:"Agenda","expand-separator":""},{default:c(()=>[f(Y,null,{default:c(()=>[L((w(),x(T,{to:"/settings",clickable:""},{default:c(()=>[f($,null,{default:c(()=>a[1]||(a[1]=[S("Configura\xE7\xF5es")])),_:1})]),_:1})),[[Q]]),L((w(),x(T,{to:"/lista/?pesquisar=*",clickable:""},{default:c(()=>[f($,null,{default:c(()=>a[2]||(a[2]=[S("Lista de Atendimentos")])),_:1})]),_:1})),[[Q]]),L((w(),x(T,{to:"/tags",clickable:""},{default:c(()=>[f($,null,{default:c(()=>a[3]||(a[3]=[S("Tags")])),_:1})]),_:1})),[[Q]])]),_:1})]),_:1}),f(Y,{style:{"min-width":"200px"}},{default:c(()=>[L((w(),x(T,{onClick:d,clickable:""},{default:c(()=>[f($,null,{default:c(()=>a[4]||(a[4]=[S("Compartilhar")])),_:1})]),_:1})),[[Q]]),L((w(),x(T,{to:"/calendar/2025?filters=Lista: REGIONAL FAINA",clickable:""},{default:c(()=>[f($,null,{default:c(()=>a[5]||(a[5]=[S("Calend\xE1rio")])),_:1})]),_:1})),[[Q]]),L((w(),x(T,{onClick:be(u,["prevent"]),clickable:""},{default:c(()=>[f($,null,{default:c(()=>a[6]||(a[6]=[S("Ajuda")])),_:1})]),_:1})),[[Q]])]),_:1})]),_:1})]),_:1}),f(Qe,{view:"lHh Lpr lFf"},{default:c(()=>[f(Le,null,{default:c(()=>[f(ze,null,{default:c(()=>[f(p),h.connected?X("",!0):(w(),G("div",Pe,"Voc\xEA est\xE1 off-line"))]),_:1})]),_:1})]),_:1})],64)}}};var Me=xe(ke,[["__scopeId","data-v-efd0a854"]]);export{Me as default};
