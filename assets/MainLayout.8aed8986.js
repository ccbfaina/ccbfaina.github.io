import{c as R,i as M,e as b,a as v,h as y,d as N,l as O,p as Y,g as F,f as Z,s as ne,w as T,o as ee,j as te,n as le,k as ie,m as re,q as se,r as ce,t as z,u as ue,v as I,x as q,y as de,z as fe,A as ve,B as pe,C as ge,D as me,E as h,F as C,G as n,H as i,I as V,Q as A,J as he,K as ye,L as be,M as G,N as K,O as _e,P as S,R as L}from"./index.f8c7ae11.js";import{Q as we,a as Ce,b as xe,c as ze,d as Se,e as Q,f as $,C as P}from"./QDialog.42b34d7d.js";import{Q as j}from"./QList.dec5f793.js";import{Q as J}from"./QResizeObserver.8a3fb504.js";import{u as Le}from"./use-quasar.0d087513.js";import{_ as Qe}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.6f6dd9b9.js";import"./QSeparator.687cd791.js";import"./focus-manager.fa09ebd0.js";var $e=R({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:c}){const{proxy:{$q:o}}=F(),e=M(O,b);if(e===b)return console.error("QPage needs to be a deep child of QLayout"),b;if(M(Y,b)===b)return console.error("QPage needs to be child of QPageContainer"),b;const r=v(()=>{const u=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const g=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return t.styleFn(u,g)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-u+"px":o.screen.height===0?u!==0?`calc(100vh - ${u}px)`:"100vh":o.screen.height-u+"px"}}),p=v(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:p.value,style:r.value},N(c.default))}}),Pe=R({name:"QPageContainer",setup(t,{slots:c}){const{proxy:{$q:o}}=F(),e=M(O,b);if(e===b)return console.error("QPageContainer needs to be child of QLayout"),b;Z(Y,!0);const l=v(()=>{const r={};return e.header.space===!0&&(r.paddingTop=`${e.header.size}px`),e.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(r.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),r});return()=>y("div",{class:"q-page-container",style:l.value},N(c.default))}});const{passive:X}=re,ke=["both","horizontal","vertical"];var qe=R({name:"QScrollObserver",props:{axis:{type:String,validator:t=>ke.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:ne},emits:["scroll"],setup(t,{emit:c}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,l,r;T(()=>t.scrollTarget,()=>{g(),u()});function p(){e!==null&&e();const s=Math.max(0,se(l)),w=ce(l),m={top:s-o.position.top,left:w-o.position.left};if(t.axis==="vertical"&&m.top===0||t.axis==="horizontal"&&m.left===0)return;const E=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:s,left:w},o.directionChanged=o.direction!==E,o.delta=m,o.directionChanged===!0&&(o.direction=E,o.inflectionPoint=o.position),c("scroll",{...o})}function u(){l=ie(r,t.scrollTarget),l.addEventListener("scroll",d,X),d(!0)}function g(){l!==void 0&&(l.removeEventListener("scroll",d,X),l=void 0)}function d(s){if(s===!0||t.debounce===0||t.debounce==="0")p();else if(e===null){const[w,m]=t.debounce?[setTimeout(p,t.debounce),clearTimeout]:[requestAnimationFrame(p),cancelAnimationFrame];e=()=>{m(w),e=null}}}const{proxy:_}=F();return T(()=>_.$q.lang.rtl,p),ee(()=>{r=_.$el.parentNode,u()}),te(()=>{e!==null&&e(),g()}),Object.assign(_,{trigger:d,getPosition:()=>o}),le}}),Ae=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:c,emit:o}){const{proxy:{$q:e}}=F(),l=z(null),r=z(e.screen.height),p=z(t.container===!0?0:e.screen.width),u=z({position:0,direction:"down",inflectionPoint:0}),g=z(0),d=z(ue.value===!0?0:I()),_=v(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),s=v(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),w=v(()=>d.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),m=v(()=>d.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function E(a){if(t.container===!0||document.qScrollPrevented!==!0){const f={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};u.value=f,t.onScroll!==void 0&&o("scroll",f)}}function oe(a){const{height:f,width:x}=a;let k=!1;r.value!==f&&(k=!0,r.value=f,t.onScrollHeight!==void 0&&o("scrollHeight",f),W()),p.value!==x&&(k=!0,p.value=x),k===!0&&t.onResize!==void 0&&o("resize",a)}function ae({height:a}){g.value!==a&&(g.value=a,W())}function W(){if(t.container===!0){const a=r.value>g.value?I():0;d.value!==a&&(d.value=a)}}let B=null;const D={instances:{},view:v(()=>t.view),isContainer:v(()=>t.container),rootRef:l,height:r,containerHeight:g,scrollbarWidth:d,totalWidth:v(()=>p.value+d.value),rows:v(()=>{const a=t.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:q({size:0,offset:0,space:!1}),right:q({size:300,offset:0,space:!1}),footer:q({size:0,offset:0,space:!1}),left:q({size:300,offset:0,space:!1}),scroll:u,animate(){B!==null?clearTimeout(B):document.body.classList.add("q-body--layout-animate"),B=setTimeout(()=>{B=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,f,x){D[a][f]=x}};if(Z(O,D),I()>0){let x=function(){a=null,f.classList.remove("hide-scrollbar")},k=function(){if(a===null){if(f.scrollHeight>e.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(x,300)},H=function(U){a!==null&&U==="remove"&&(clearTimeout(a),x()),window[`${U}EventListener`]("resize",k)},a=null;const f=document.body;T(()=>t.container!==!0?"add":"remove",H),t.container!==!0&&H("add"),de(()=>{H("remove")})}return()=>{const a=fe(c.default,[y(qe,{onScroll:E}),y(J,{onResize:oe})]),f=y("div",{class:_.value,style:s.value,ref:t.container===!0?void 0:l,tabindex:-1},a);return t.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:l},[y(J,{onResize:ae}),y("div",{class:"absolute-full",style:w.value},[y("div",{class:"scroll",style:m.value},[f])])]):f}}}),Te=R({name:"QCardActions",props:{...ve,vertical:Boolean},setup(t,{slots:c}){const o=pe(t),e=v(()=>`q-card__actions ${o.value} q-card__actions--${t.vertical===!0?"vert column":"horiz row"}`);return()=>y("div",{class:e.value},N(c.default))}});const Re={__name:"UpdateApp",setup(t){const c=z(!1),o=()=>{navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({type:"SKIP_WAITING"}),c.value=!1,window.location.reload()};return T(ge,e=>{e&&(c.value=!0)}),T(me,e=>{e&&console.log("A aplica\xE7\xE3o est\xE1 sendo atualizada...")}),(e,l)=>(h(),C(xe,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=r=>c.value=r)},{default:n(()=>[i(we,null,{default:n(()=>[i(Ce,null,{default:n(()=>l[2]||(l[2]=[V("div",{class:"text-h6"},"Atualiza\xE7\xE3o Dispon\xEDvel",-1),V("div",null,"A nova vers\xE3o est\xE1 pronta. Atualizar agora?",-1)])),_:1}),i(Te,{align:"right"},{default:n(()=>[i(A,{flat:"",label:"Cancelar",onClick:l[0]||(l[0]=r=>c.value=!1)}),i(A,{flat:"",label:"Atualizar",onClick:o})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};const Ee={class:"print-hide absolute-top-left row q-ma-md flex"},Be={key:0,class:"off"},Fe={__name:"MainLayout",setup(t){he();const c=ye(),o=Le(),e=q({connected:navigator.onLine}),l=v(()=>window.history.length>1),r=()=>{window.history.back()},p=()=>{c.push("/")},u=()=>{e.connected=navigator.onLine};ee(()=>{window.addEventListener("online",u),window.addEventListener("offline",u)}),te(()=>{window.removeEventListener("online",u),window.removeEventListener("offline",u)});const g=()=>!!navigator.share,d=()=>{g()?navigator.share({title:"CCB",text:"Lista de Atendimento",url:location.href}).then(()=>o.notify({type:"positive",message:"Compartilhado com sucesso!"})).catch(_=>o.notify({type:"negative",message:`Erro: ${_}`})):(navigator.clipboard.writeText(location.href),o.notify({type:"info",message:"URL copiada."}))};return(_,s)=>{const w=be("router-view");return h(),G(_e,null,[V("div",Ee,[i(A,{color:"primary",flat:"",round:"",icon:"home",class:"q-mr-sm cursor-pointer z-top",onClick:p,"aria-label":"Pagina Inicial"}),l.value?(h(),C(A,{key:0,color:"primary",flat:"",round:"",icon:"arrow_back",class:"q-mr-sm cursor-pointer z-top",onClick:r,"aria-label":"Voltar"})):K("",!0)]),i(A,{color:"primary",flat:"",round:"",icon:"more_vert",class:"print-hide z-top absolute-top-right q-pa-md","aria-label":"Menu"},{default:n(()=>[i(ze,{anchor:"top right",self:"top end",class:"z-top"},{default:n(()=>[i(Se,{label:"Agenda","expand-separator":""},{default:n(()=>[i(j,null,{default:n(()=>[S((h(),C($,{to:"/settings",clickable:""},{default:n(()=>[i(Q,null,{default:n(()=>s[0]||(s[0]=[L("Configura\xE7\xF5es")])),_:1})]),_:1})),[[P]]),S((h(),C($,{to:"/lista/?pesquisar=*",clickable:""},{default:n(()=>[i(Q,null,{default:n(()=>s[1]||(s[1]=[L("Lista de Atendimentos")])),_:1})]),_:1})),[[P]]),S((h(),C($,{to:"/tags",clickable:""},{default:n(()=>[i(Q,null,{default:n(()=>s[2]||(s[2]=[L("Tags")])),_:1})]),_:1})),[[P]])]),_:1})]),_:1}),i(j,{style:{"min-width":"200px"}},{default:n(()=>[S((h(),C($,{onClick:d,clickable:""},{default:n(()=>[i(Q,null,{default:n(()=>s[3]||(s[3]=[L("Compartilhar")])),_:1})]),_:1})),[[P]]),S((h(),C($,{to:"/calendar/2025?filters=Lista: REGIONAL FAINA",clickable:""},{default:n(()=>[i(Q,null,{default:n(()=>s[4]||(s[4]=[L("Calend\xE1rio")])),_:1})]),_:1})),[[P]]),S((h(),C($,{to:"/sobre",clickable:""},{default:n(()=>[i(Q,null,{default:n(()=>s[5]||(s[5]=[L("Sobre")])),_:1})]),_:1})),[[P]])]),_:1})]),_:1})]),_:1}),i(Ae,{view:"lHh Lpr lFf"},{default:n(()=>[i(Pe,null,{default:n(()=>[i($e,null,{default:n(()=>[i(w),i(Re),e.connected?K("",!0):(h(),G("div",Be,"Voc\xEA est\xE1 off-line"))]),_:1})]),_:1})]),_:1})],64)}}};var Ge=Qe(Fe,[["__scopeId","data-v-1a9d36b4"]]);export{Ge as default};