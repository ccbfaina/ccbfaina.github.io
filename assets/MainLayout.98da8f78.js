import{c as R,d as I,e as C,f as y,h as w,g as ie,l as V,p as ae,j as H,k as le,s as fe,w as M,o as E,m as N,q as re,r as pe,t as j,u as ve,v as me,x,y as se,n as K,z as B,A as k,B as ge,C as he,D as ye,E as b,F as G,G as J,H as v,Q as be,I as X,J as _,K as Y,L as O,M as c,N as we,O as S,P as $,R as Z}from"./index.841e1fe8.js";import{Q as Ce,a as _e,b as P,c as Q,C as T}from"./ClosePopup.bd17cd9c.js";import{Q as ee}from"./QList.745c8f01.js";import{u as xe}from"./use-quasar.4f6b3a58.js";import{_ as ze}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.680a9ddc.js";import"./focus-manager.13346a49.js";var Le=R({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:g}){const{proxy:{$q:n}}=H(),e=I(V,C);if(e===C)return console.error("QPage needs to be a deep child of QLayout"),C;if(I(ae,C)===C)return console.error("QPage needs to be child of QPageContainer"),C;const s=y(()=>{const f=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return t.styleFn(f,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-f+"px":n.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":n.screen.height-f+"px"}}),d=y(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>w("main",{class:d.value,style:s.value},ie(g.default))}}),Se=R({name:"QPageContainer",setup(t,{slots:g}){const{proxy:{$q:n}}=H(),e=I(V,C);if(e===C)return console.error("QPageContainer needs to be child of QLayout"),C;le(ae,!0);const r=y(()=>{const s={};return e.header.space===!0&&(s.paddingTop=`${e.header.size}px`),e.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(s.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),s});return()=>w("div",{class:"q-page-container",style:r.value},ie(g.default))}});const{passive:te}=j,$e=["both","horizontal","vertical"];var Pe=R({name:"QScrollObserver",props:{axis:{type:String,validator:t=>$e.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:fe},emits:["scroll"],setup(t,{emit:g}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,r,s;M(()=>t.scrollTarget,()=>{l(),f()});function d(){e!==null&&e();const u=Math.max(0,ve(r)),a=me(r),p={top:u-n.position.top,left:a-n.position.left};if(t.axis==="vertical"&&p.top===0||t.axis==="horizontal"&&p.left===0)return;const z=Math.abs(p.top)>=Math.abs(p.left)?p.top<0?"up":"down":p.left<0?"left":"right";n.position={top:u,left:a},n.directionChanged=n.direction!==z,n.delta=p,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),g("scroll",{...n})}function f(){r=pe(s,t.scrollTarget),r.addEventListener("scroll",o,te),o(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",o,te),r=void 0)}function o(u){if(u===!0||t.debounce===0||t.debounce==="0")d();else if(e===null){const[a,p]=t.debounce?[setTimeout(d,t.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];e=()=>{p(a),e=null}}}const{proxy:h}=H();return M(()=>h.$q.lang.rtl,d),E(()=>{s=h.$el.parentNode,f()}),N(()=>{e!==null&&e(),l()}),Object.assign(h,{trigger:o,getPosition:()=>n}),re}});function Qe(){const t=x(!se.value);return t.value===!1&&E(()=>{t.value=!0}),{isHydrated:t}}const ce=typeof ResizeObserver<"u",ne=ce===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var oe=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:g}){let n=null,e,r={width:-1,height:-1};function s(l){l===!0||t.debounce===0||t.debounce==="0"?d():n===null&&(n=setTimeout(d,t.debounce))}function d(){if(n!==null&&(clearTimeout(n),n=null),e){const{offsetWidth:l,offsetHeight:o}=e;(l!==r.width||o!==r.height)&&(r={width:l,height:o},g("resize",r))}}const{proxy:f}=H();if(f.trigger=s,ce===!0){let l;const o=h=>{e=f.$el.parentNode,e?(l=new ResizeObserver(s),l.observe(e),d()):h!==!0&&K(()=>{o(!0)})};return E(()=>{o()}),N(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():e&&l.unobserve(e))}),re}else{let h=function(){n!==null&&(clearTimeout(n),n=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",s,j.passive),o=void 0)},u=function(){h(),e&&e.contentDocument&&(o=e.contentDocument.defaultView,o.addEventListener("resize",s,j.passive),d())};const{isHydrated:l}=Qe();let o;return E(()=>{K(()=>{e=f.$el,e&&u()})}),N(h),()=>{if(l.value===!0)return w("object",{class:"q--avoid-card-border",style:ne.style,tabindex:-1,type:"text/html",data:ne.url,"aria-hidden":"true",onLoad:u})}}}}),Te=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:g,emit:n}){const{proxy:{$q:e}}=H(),r=x(null),s=x(e.screen.height),d=x(t.container===!0?0:e.screen.width),f=x({position:0,direction:"down",inflectionPoint:0}),l=x(0),o=x(se.value===!0?0:B()),h=y(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),u=y(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),a=y(()=>o.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),p=y(()=>o.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function z(i){if(t.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};f.value=m,t.onScroll!==void 0&&n("scroll",m)}}function ue(i){const{height:m,width:L}=i;let q=!1;s.value!==m&&(q=!0,s.value=m,t.onScrollHeight!==void 0&&n("scrollHeight",m),W()),d.value!==L&&(q=!0,d.value=L),q===!0&&t.onResize!==void 0&&n("resize",i)}function de({height:i}){l.value!==i&&(l.value=i,W())}function W(){if(t.container===!0){const i=s.value>l.value?B():0;o.value!==i&&(o.value=i)}}let A=null;const D={instances:{},view:y(()=>t.view),isContainer:y(()=>t.container),rootRef:r,height:s,containerHeight:l,scrollbarWidth:o,totalWidth:y(()=>d.value+o.value),rows:y(()=>{const i=t.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:k({size:0,offset:0,space:!1}),right:k({size:300,offset:0,space:!1}),footer:k({size:0,offset:0,space:!1}),left:k({size:300,offset:0,space:!1}),scroll:f,animate(){A!==null?clearTimeout(A):document.body.classList.add("q-body--layout-animate"),A=setTimeout(()=>{A=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,m,L){D[i][m]=L}};if(le(V,D),B()>0){let L=function(){i=null,m.classList.remove("hide-scrollbar")},q=function(){if(i===null){if(m.scrollHeight>e.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(L,300)},F=function(U){i!==null&&U==="remove"&&(clearTimeout(i),L()),window[`${U}EventListener`]("resize",q)},i=null;const m=document.body;M(()=>t.container!==!0?"add":"remove",F),t.container!==!0&&F("add"),ge(()=>{F("remove")})}return()=>{const i=he(g.default,[w(Pe,{onScroll:z}),w(oe,{onResize:ue})]),m=w("div",{class:h.value,style:u.value,ref:t.container===!0?void 0:r,tabindex:-1},i);return t.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:r},[w(oe,{onResize:de}),w("div",{class:"absolute-full",style:a.value},[w("div",{class:"scroll",style:p.value},[m])])]):m}}});const qe={class:"print-hide absolute-top-left row q-pa-md z-top flex"},ke={href:"/",class:"text-blue-grey-2 q-pa-md"},Ee={key:0,class:"off"},Re={__name:"MainLayout",setup(t){const g=k({connected:navigator.onLine}),n=window.history,e=()=>{g.connected=navigator.onLine};E(()=>{window.addEventListener("online",e),window.addEventListener("offline",e)}),N(()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)});const r=xe(),s=()=>navigator.share,d=()=>{const u=encodeURIComponent(`\u{1F4C4} Batismo, Santa Ceia, ...

\u{1F4CD} Local: 
\u{1F557} Data: 
\u{1F935} Atender\xE1: `);if(s()){const p=`https://api.whatsapp.com/send/?phone=5562984972385&text=${u}&type=phone_number&app_absent=0`;window.location.href=p}else{const a="marco.queiroz@ccbgo.org.br",p=encodeURIComponent("Ajuda com a agenda CCB"),z=`mailto:${a}?subject=${p}&body=${u}`;window.location.href=z}},f=()=>{s()?navigator.share({title:"CCB",text:"Lista de Atendimento",url:location.href}).then(()=>r.notify({type:"positive",message:"Compartilhado com sucesso!"})).catch(u=>r.notify({type:"negative",message:"Erro: "+u})):(l(location.href),r.notify({type:"info",message:"URL copiada."}))},l=u=>{navigator.clipboard.writeText(u)},o=x(Notification.permission),h=async()=>{const u=await Notification.requestPermission();console.log(u==="granted"?"Permiss\xE3o concedida":"Permiss\xE3o negada")};return(u,a)=>{const p=ye("router-view");return b(),G(we,null,[J("div",qe,[J("a",ke,[v(be,{size:"sm",name:"home"})]),X(n).length?(b(),_(Y,{key:0,color:"primary",flat:"",round:"",icon:"arrow_back",class:"q-mr-sm",onClick:a[0]||(a[0]=z=>X(n).back())})):O("",!0)]),v(Y,{color:"primary",flat:"",round:"",icon:"more_vert",class:"print-hide z-top absolute-top-right q-pa-md"},{default:c(()=>[v(Ce,{anchor:"top right",self:"top end",class:"z-top"},{default:c(()=>[v(_e,{label:"Agenda","expand-separator":""},{default:c(()=>[v(ee,null,{default:c(()=>[S((b(),_(Q,{to:"/settings",clickable:""},{default:c(()=>[v(P,null,{default:c(()=>a[1]||(a[1]=[$("Configura\xE7\xF5es")])),_:1})]),_:1})),[[T]]),S((b(),_(Q,{to:"/lista/?pesquisar=*",clickable:""},{default:c(()=>[v(P,null,{default:c(()=>a[2]||(a[2]=[$("Lista de Atendimentos")])),_:1})]),_:1})),[[T]]),S((b(),_(Q,{to:"/tags",clickable:""},{default:c(()=>[v(P,null,{default:c(()=>a[3]||(a[3]=[$("Tags")])),_:1})]),_:1})),[[T]])]),_:1})]),_:1}),v(ee,{style:{"min-width":"200px"}},{default:c(()=>[S((b(),_(Q,{onClick:f,clickable:""},{default:c(()=>[v(P,null,{default:c(()=>a[4]||(a[4]=[$("Compartilhar")])),_:1})]),_:1})),[[T]]),S((b(),_(Q,{to:"/calendar/2025?filters=Lista: REGIONAL FAINA",clickable:""},{default:c(()=>[v(P,null,{default:c(()=>a[5]||(a[5]=[$("Calend\xE1rio")])),_:1})]),_:1})),[[T]]),o.value!=="granted"?S((b(),_(Q,{key:0,onClick:Z(h,["prevent"]),clickable:""},{default:c(()=>[v(P,null,{default:c(()=>a[6]||(a[6]=[$("Notifica\xE7\xF5es")])),_:1})]),_:1})),[[T]]):O("",!0),S((b(),_(Q,{onClick:Z(d,["prevent"]),clickable:""},{default:c(()=>[v(P,null,{default:c(()=>a[7]||(a[7]=[$("Ajuda")])),_:1})]),_:1})),[[T]])]),_:1})]),_:1})]),_:1}),v(Te,{view:"lHh Lpr lFf"},{default:c(()=>[v(Se,null,{default:c(()=>[v(Le,null,{default:c(()=>[v(p),g.connected?O("",!0):(b(),G("div",Ee,"Voc\xEA est\xE1 off-line"))]),_:1})]),_:1})]),_:1})],64)}}};var Me=ze(Re,[["__scopeId","data-v-2d67d80a"]]);export{Me as default};
