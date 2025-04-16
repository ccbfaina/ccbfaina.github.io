import{Q as B}from"./QBtn-BhZAdlUn.js";import{s as ne,g as ie,a as ae,b as le,c as A,Q as re,d as se,e as L,f as z,C as Q}from"./ClosePopup-e4V-2D6n.js";import{Q as j}from"./QList-DA--27kw.js";import{c as E,g as F,i as M,e as w,l as N,p as J,a as g,h as b,b as X,w as I,o as Y,f as Z,n as ce,j as ue,r as $,k as de,m as T,q as fe,s as D,t as y,u as ge,v as u,x as _,y as U,z as i,F as pe,A as me,B as he,C as P,D as q}from"./index--aAVYWFs.js";import{h as ee,a as ve}from"./render-CwP24QWp.js";import{Q as G}from"./QResizeObserver-Dyt2Bzog.js";import{u as ye}from"./use-quasar-Dv4Pjfr0.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QIcon-BG2ghIIa.js";import"./QSpinner-2fzAndR8.js";import"./Ripple-BZVUJLGQ.js";import"./use-dark-BXRXnZbt.js";import"./nodes-Dj28do4t.js";import"./focus-manager-TCf0o1SP.js";const we=E({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:v}){const{proxy:{$q:o}}=F(),e=M(N,w);if(e===w)return console.error("QPage needs to be a deep child of QLayout"),w;if(M(J,w)===w)return console.error("QPage needs to be child of QPageContainer"),w;const l=g(()=>{const s=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return t.styleFn(s,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-s+"px":o.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":o.screen.height-s+"px"}}),f=g(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>b("main",{class:f.value,style:l.value},ee(v.default))}}),Ce=E({name:"QPageContainer",setup(t,{slots:v}){const{proxy:{$q:o}}=F(),e=M(N,w);if(e===w)return console.error("QPageContainer needs to be child of QLayout"),w;X(J,!0);const r=g(()=>{const l={};return e.header.space===!0&&(l.paddingTop=`${e.header.size}px`),e.right.space===!0&&(l[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(l.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(l[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),l});return()=>b("div",{class:"q-page-container",style:r.value},ee(v.default))}}),{passive:K}=ue,xe=["both","horizontal","vertical"],Se=E({name:"QScrollObserver",props:{axis:{type:String,validator:t=>xe.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:ne},emits:["scroll"],setup(t,{emit:v}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,r,l;I(()=>t.scrollTarget,()=>{p(),s()});function f(){e?.();const a=Math.max(0,ae(r)),x=le(r),m={top:a-o.position.top,left:x-o.position.left};if(t.axis==="vertical"&&m.top===0||t.axis==="horizontal"&&m.left===0)return;const k=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:a,left:x},o.directionChanged=o.direction!==k,o.delta=m,o.directionChanged===!0&&(o.direction=k,o.inflectionPoint=o.position),v("scroll",{...o})}function s(){r=ie(l,t.scrollTarget),r.addEventListener("scroll",c,K),c(!0)}function p(){r!==void 0&&(r.removeEventListener("scroll",c,K),r=void 0)}function c(a){if(a===!0||t.debounce===0||t.debounce==="0")f();else if(e===null){const[x,m]=t.debounce?[setTimeout(f,t.debounce),clearTimeout]:[requestAnimationFrame(f),cancelAnimationFrame];e=()=>{m(x),e=null}}}const{proxy:C}=F();return I(()=>C.$q.lang.rtl,f),Y(()=>{l=C.$el.parentNode,s()}),Z(()=>{e?.(),p()}),Object.assign(C,{trigger:c,getPosition:()=>o}),ce}}),_e=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:v,emit:o}){const{proxy:{$q:e}}=F(),r=$(null),l=$(e.screen.height),f=$(t.container===!0?0:e.screen.width),s=$({position:0,direction:"down",inflectionPoint:0}),p=$(0),c=$(de.value===!0?0:A()),C=g(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),a=g(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),x=g(()=>c.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=g(()=>c.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function k(n){if(t.container===!0||document.qScrollPrevented!==!0){const d={position:n.position.top,direction:n.direction,directionChanged:n.directionChanged,inflectionPoint:n.inflectionPoint.top,delta:n.delta.top};s.value=d,t.onScroll!==void 0&&o("scroll",d)}}function te(n){const{height:d,width:S}=n;let h=!1;l.value!==d&&(h=!0,l.value=d,t.onScrollHeight!==void 0&&o("scrollHeight",d),V()),f.value!==S&&(h=!0,f.value=S),h===!0&&t.onResize!==void 0&&o("resize",n)}function oe({height:n}){p.value!==n&&(p.value=n,V())}function V(){if(t.container===!0){const n=l.value>p.value?A():0;c.value!==n&&(c.value=n)}}let R=null;const O={instances:{},view:g(()=>t.view),isContainer:g(()=>t.container),rootRef:r,height:l,containerHeight:p,scrollbarWidth:c,totalWidth:g(()=>f.value+c.value),rows:g(()=>{const n=t.view.toLowerCase().split(" ");return{top:n[0].split(""),middle:n[1].split(""),bottom:n[2].split("")}}),header:T({size:0,offset:0,space:!1}),right:T({size:300,offset:0,space:!1}),footer:T({size:0,offset:0,space:!1}),left:T({size:300,offset:0,space:!1}),scroll:s,animate(){R!==null?clearTimeout(R):document.body.classList.add("q-body--layout-animate"),R=setTimeout(()=>{R=null,document.body.classList.remove("q-body--layout-animate")},155)},update(n,d,S){O[n][d]=S}};if(X(N,O),A()>0){let n=function(){h=null,H.classList.remove("hide-scrollbar")},d=function(){if(h===null){if(H.scrollHeight>e.screen.height)return;H.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(n,300)},S=function(W){h!==null&&W==="remove"&&(clearTimeout(h),n()),window[`${W}EventListener`]("resize",d)},h=null;const H=document.body;I(()=>t.container!==!0?"add":"remove",S),t.container!==!0&&S("add"),fe(()=>{S("remove")})}return()=>{const n=ve(v.default,[b(Se,{onScroll:k}),b(G,{onResize:te})]),d=b("div",{class:C.value,style:a.value,ref:t.container===!0?void 0:r,tabindex:-1},n);return t.container===!0?b("div",{class:"q-layout-container overflow-hidden",ref:r},[b(G,{onResize:oe}),b("div",{class:"absolute-full",style:x.value},[b("div",{class:"scroll",style:m.value},[d])])]):d}}}),Le={class:"print-hide absolute-top-left row q-ma-md flex"},ze={key:0,class:"off"},Qe={__name:"MainLayout",setup(t){const v=me(),o=ye(),e=T({connected:navigator.onLine}),r=g(()=>window.history.length>1),l=()=>{window.history.back()},f=()=>{v.push("/")},s=()=>{e.connected=navigator.onLine};Y(()=>{window.addEventListener("online",s),window.addEventListener("offline",s)}),Z(()=>{window.removeEventListener("online",s),window.removeEventListener("offline",s)});const p=()=>!!navigator.share,c=()=>{p()?navigator.share({title:"Agenda",text:"Lista de Atendimento",url:location.href}).then(()=>o.notify({type:"positive",message:"Compartilhado com sucesso!"})).catch(C=>o.notify({type:"negative",message:`Erro: ${C}`})):(navigator.clipboard.writeText(location.href),o.notify({type:"info",message:"URL copiada."}))};return(C,a)=>{const x=he("router-view");return y(),D(pe,null,[ge("div",Le,[u(B,{color:"primary",flat:"",round:"",icon:"home",class:"q-mr-sm cursor-pointer z-top",onClick:f,"aria-label":"Pagina Inicial"}),r.value?(y(),_(B,{key:0,color:"primary",flat:"",round:"",icon:"arrow_back",class:"q-mr-sm cursor-pointer z-top",onClick:l,"aria-label":"Voltar"})):U("",!0)]),u(B,{color:"primary",flat:"",round:"",icon:"more_vert",class:"print-hide z-top absolute-top-right q-pa-md","aria-label":"Menu"},{default:i(()=>[u(re,{anchor:"top right",self:"top end",class:"z-top"},{default:i(()=>[u(se,{label:"Agenda","expand-separator":""},{default:i(()=>[u(j,null,{default:i(()=>[P((y(),_(L,{to:"/settings",clickable:""},{default:i(()=>[u(z,null,{default:i(()=>a[0]||(a[0]=[q("Configurações")])),_:1})]),_:1})),[[Q]]),P((y(),_(L,{to:"/lista/?pesquisar=*",clickable:""},{default:i(()=>[u(z,null,{default:i(()=>a[1]||(a[1]=[q("Lista de Atendimentos")])),_:1})]),_:1})),[[Q]]),P((y(),_(L,{to:"/tags",clickable:""},{default:i(()=>[u(z,null,{default:i(()=>a[2]||(a[2]=[q("Tags")])),_:1})]),_:1})),[[Q]])]),_:1})]),_:1}),u(j,{style:{"min-width":"200px"}},{default:i(()=>[P((y(),_(L,{onClick:c,clickable:""},{default:i(()=>[u(z,null,{default:i(()=>a[3]||(a[3]=[q("Compartilhar")])),_:1})]),_:1})),[[Q]]),P((y(),_(L,{to:"/calendar/2025?filters=Lista: REGIONAL FAINA",clickable:""},{default:i(()=>[u(z,null,{default:i(()=>a[4]||(a[4]=[q("Calendário")])),_:1})]),_:1})),[[Q]]),P((y(),_(L,{to:"/sobre",clickable:""},{default:i(()=>[u(z,null,{default:i(()=>a[5]||(a[5]=[q("Sobre")])),_:1})]),_:1})),[[Q]])]),_:1})]),_:1})]),_:1}),u(_e,{view:"lHh Lpr lFf"},{default:i(()=>[u(Ce,null,{default:i(()=>[u(we,null,{default:i(()=>[u(x),e.connected?U("",!0):(y(),D("div",ze,"Você está off-line"))]),_:1})]),_:1})]),_:1})],64)}}},Ve=be(Qe,[["__scopeId","data-v-be4c8fef"]]);export{Ve as default};
