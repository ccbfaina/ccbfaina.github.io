import{a as l,g as W,c as J,r as p,f as Y,h as m,_ as Z,C as ee,P as S,j as te,a6 as Q,a0 as ne,X as ae}from"./index--aAVYWFs.js";import{u as ue,a as re,Q as z}from"./QIcon-BG2ghIIa.js";import{Q as le}from"./QSpinner-2fzAndR8.js";import{R as ie}from"./Ripple-BZVUJLGQ.js";import{a as oe}from"./render-CwP24QWp.js";const U={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},se=Object.keys(U),ce={align:{type:String,validator:e=>se.includes(e)}};function de(e){return l(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${U[n]}`})}function Ae(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:n}=e.$;for(;Object(n)===n;){if(Object(n.proxy)===n.proxy)return n.proxy;n=n.parent}}function ve(e){return e.appContext.config.globalProperties.$router!==void 0}function $e(e){return e.isUnmounted===!0||e.isDeactivated===!0}function N(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function V(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function fe(e,n){for(const s in n){const a=n[s],c=e[s];if(typeof a=="string"){if(a!==c)return!1}else if(Array.isArray(c)===!1||c.length!==a.length||a.some((q,C)=>q!==c[C]))return!1}return!0}function F(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((s,a)=>s===n[a]):e.length===1&&e[0]===n}function ge(e,n){return Array.isArray(e)===!0?F(e,n):Array.isArray(n)===!0?F(n,e):e===n}function be(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(ge(e[s],n[s])===!1)return!1;return!0}const X={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Te={...X,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function me({fallbackTag:e,useDisableForRouterLinkProps:n=!0}={}){const s=W(),{props:a,proxy:c,emit:q}=s,C=ve(s),x=l(()=>a.disable!==!0&&a.href!==void 0),O=n===!0?l(()=>C===!0&&a.disable!==!0&&x.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""):l(()=>C===!0&&x.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""),h=l(()=>O.value===!0?M(a.to):null),d=l(()=>h.value!==null),B=l(()=>x.value===!0||d.value===!0),u=l(()=>a.type==="a"||B.value===!0?"a":a.tag||e||"div"),R=l(()=>x.value===!0?{href:a.href,target:a.target}:d.value===!0?{href:h.value.href,target:a.target}:{}),v=l(()=>{if(d.value===!1)return-1;const{matched:i}=h.value,{length:f}=i,y=i[f-1];if(y===void 0)return-1;const P=c.$route.matched;if(P.length===0)return-1;const E=P.findIndex(V.bind(null,y));if(E!==-1)return E;const K=N(i[f-2]);return f>1&&N(y)===K&&P[P.length-1].path!==K?P.findIndex(V.bind(null,i[f-2])):E}),L=l(()=>d.value===!0&&v.value!==-1&&fe(c.$route.params,h.value.params)),r=l(()=>L.value===!0&&v.value===c.$route.matched.length-1&&be(c.$route.params,h.value.params)),b=l(()=>d.value===!0?r.value===!0?` ${a.exactActiveClass} ${a.activeClass}`:a.exact===!0?"":L.value===!0?` ${a.activeClass}`:"":"");function M(i){try{return c.$router.resolve(i)}catch{}return null}function _(i,{returnRouterError:f,to:y=a.to,replace:P=a.replace}={}){if(a.disable===!0)return i.preventDefault(),Promise.resolve(!1);if(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.button!==void 0&&i.button!==0||a.target==="_blank")return Promise.resolve(!1);i.preventDefault();const E=c.$router[P===!0?"replace":"push"](y);return f===!0?E:E.then(()=>{}).catch(()=>{})}function D(i){if(d.value===!0){const f=y=>_(i,y);q("click",i,f),i.defaultPrevented!==!0&&f()}else q("click",i)}return{hasRouterLink:d,hasHrefLink:x,hasLink:B,linkTag:u,resolvedLink:h,linkIsActive:L,linkIsExactActive:r,linkClass:b,linkAttrs:R,getLink:M,navigateToRouterLink:_,navigateOnClick:D}}const H={none:0,xs:4,sm:8,md:16,lg:24,xl:32},he={xs:8,sm:10,md:14,lg:20,xl:24},ye=["button","submit","reset"],ke=/[^\s]\/[^\s]/,qe=["flat","outline","push","unelevated"];function G(e,n){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":n}function Oe(e){const n=G(e);return n!==void 0?{[n]:!0}:{}}const xe={...ue,...X,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...qe.reduce((e,n)=>(e[n]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ce.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Le={...xe,round:Boolean};function Pe(e){const n=re(e,he),s=de(e),{hasRouterLink:a,hasLink:c,linkTag:q,linkAttrs:C,navigateOnClick:x}=me({fallbackTag:"button"}),O=l(()=>{const r=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},r,{padding:e.padding.split(/\s+/).map(b=>b in H?H[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):r}),h=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=l(()=>e.disable!==!0&&e.loading!==!0),B=l(()=>d.value===!0?e.tabindex||0:-1),u=l(()=>G(e,"standard")),R=l(()=>{const r={tabindex:B.value};return c.value===!0?Object.assign(r,C.value):ye.includes(e.type)===!0&&(r.type=e.type),q.value==="a"?(e.disable===!0?r["aria-disabled"]="true":r.href===void 0&&(r.role="button"),a.value!==!0&&ke.test(e.type)===!0&&(r.type=e.type)):e.disable===!0&&(r.disabled="",r["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(r,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),r}),v=l(()=>{let r;e.color!==void 0?e.flat===!0||e.outline===!0?r=`text-${e.textColor||e.color}`:r=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(r=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${b}`+(r!==void 0?" "+r:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),L=l(()=>s.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:v,style:O,innerClasses:L,attributes:R,hasLink:c,linkTag:q,navigateOnClick:x,isActionable:d}}const{passiveCapture:g}=te;let A=null,$=null,T=null;const we=J({name:"QBtn",props:{...Le,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:n,emit:s}){const{proxy:a}=W(),{classes:c,style:q,innerClasses:C,attributes:x,hasLink:O,linkTag:h,navigateOnClick:d,isActionable:B}=Pe(e),u=p(null),R=p(null);let v=null,L,r=null;const b=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),M=l(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:O.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),_=l(()=>({center:e.round})),D=l(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),i=l(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(B.value===!0){const t={onClick:y,onKeydown:P,onMousedown:K};if(a.$q.platform.has.touch===!0){const o=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${o}`]=E}return t}return{onClick:S}}),f=l(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+c.value,style:q.value,...x.value,...i.value}));function y(t){if(u.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const o=document.activeElement;if(e.type==="submit"&&o!==document.body&&u.value.contains(o)===!1&&o.contains(u.value)===!1){t.qAvoidFocus!==!0&&u.value.focus();const I=()=>{document.removeEventListener("keydown",S,!0),document.removeEventListener("keyup",I,g),u.value?.removeEventListener("blur",I,g)};document.addEventListener("keydown",S,!0),document.addEventListener("keyup",I,g),u.value.addEventListener("blur",I,g)}}d(t)}}function P(t){u.value!==null&&(s("keydown",t),Q(t,[13,32])===!0&&$!==u.value&&($!==null&&w(),t.defaultPrevented!==!0&&(t.qAvoidFocus!==!0&&u.value.focus(),$=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",k,!0),u.value.addEventListener("blur",k,g)),S(t)))}function E(t){u.value!==null&&(s("touchstart",t),t.defaultPrevented!==!0&&(A!==u.value&&(A!==null&&w(),A=u.value,v=t.target,v.addEventListener("touchcancel",k,g),v.addEventListener("touchend",k,g)),L=!0,r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,L=!1},200)))}function K(t){u.value!==null&&(t.qSkipRipple=L===!0,s("mousedown",t),t.defaultPrevented!==!0&&T!==u.value&&(T!==null&&w(),T=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",k,g)))}function k(t){if(u.value!==null&&!(t?.type==="blur"&&document.activeElement===u.value)){if(t?.type==="keyup"){if($===u.value&&Q(t,[13,32])===!0){const o=new MouseEvent("click",t);o.qKeyEvent=!0,t.defaultPrevented===!0&&ne(o),t.cancelBubble===!0&&ae(o),u.value.dispatchEvent(o),S(t),t.qKeyEvent=!0}s("keyup",t)}w()}}function w(t){const o=R.value;t!==!0&&(A===u.value||T===u.value)&&o!==null&&o!==document.activeElement&&(o.setAttribute("tabindex",-1),o.focus()),A===u.value&&(v!==null&&(v.removeEventListener("touchcancel",k,g),v.removeEventListener("touchend",k,g)),A=v=null),T===u.value&&(document.removeEventListener("mouseup",k,g),T=null),$===u.value&&(document.removeEventListener("keyup",k,!0),u.value?.removeEventListener("blur",k,g),$=null),u.value?.classList.remove("q-btn--active")}function j(t){S(t),t.qSkipRipple=!0}return Y(()=>{w(!0)}),Object.assign(a,{click:t=>{B.value===!0&&y(t)}}),()=>{let t=[];e.icon!==void 0&&t.push(m(z,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img"})),b.value===!0&&t.push(m("span",{class:"block"},[e.label])),t=oe(n.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(m(z,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img"}));const o=[m("span",{class:"q-focus-helper",ref:R})];return e.loading===!0&&e.percentage!==void 0&&o.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:D.value})])),o.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+C.value},t)),e.loading!==null&&o.push(m(Z,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[m(le)])]:null)),ee(m(h.value,f.value,o),[[ie,M.value,void 0,_.value]])}}});export{we as Q,me as a,Ae as b,$e as c,Oe as g,xe as n,Te as u,ve as v};
