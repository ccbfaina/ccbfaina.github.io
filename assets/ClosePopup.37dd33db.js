import{c as I,f as w,h as S,g as Z,T as ve,U as Ge,x as P,V as J,W as me,X as Ye,j as M,m as F,Y as He,w as _,Z as Xe,o as Ie,n as G,_ as Ze,P as Je,$ as et,K as ye,a0 as tt,a1 as we,a2 as Se,a3 as nt,t as de,a4 as U,B as it,a5 as lt,a6 as at,a7 as ot,a8 as ut,a9 as Me,aa as Ae,ab as he,z as rt,s as st,ac as ct,r as dt,ad as ft,ae as vt}from"./index.7551571b.js";import{u as ee,a as te}from"./use-dark.5d9b86b1.js";import{u as mt,a as ht,r as qe,b as gt,c as bt}from"./focus-manager.3614c629.js";var re=I({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=w(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>S("div",{class:n.value},Z(t.default))}}),xt=I({name:"QItem",props:{...ee,...ve,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:i}}=M(),l=te(e,i),{hasLink:u,linkAttrs:a,linkClass:r,linkTag:c,navigateOnClick:d}=Ge(),s=P(null),b=P(null),y=w(()=>e.clickable===!0||u.value===!0||e.tag==="label"),o=w(()=>e.disable!==!0&&y.value===!0),h=w(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?r.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),f=w(()=>{if(e.insetLevel===void 0)return null;const m=i.lang.rtl===!0?"Right":"Left";return{["padding"+m]:16+e.insetLevel*56+"px"}});function q(m){o.value===!0&&(b.value!==null&&(m.qKeyEvent!==!0&&document.activeElement===s.value?b.value.focus():document.activeElement===b.value&&s.value.focus()),d(m))}function T(m){if(o.value===!0&&J(m,[13,32])===!0){me(m),m.qKeyEvent=!0;const p=new MouseEvent("click",m);p.qKeyEvent=!0,s.value.dispatchEvent(p)}n("keyup",m)}function v(){const m=Ye(t.default,[]);return o.value===!0&&m.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:b})),m}return()=>{const m={ref:s,class:h.value,style:f.value,role:"listitem",onClick:q,onKeyup:T};return o.value===!0?(m.tabindex=e.tabindex||"0",Object.assign(m,a.value)):y.value===!0&&(m["aria-disabled"]="true"),S(c.value,m,v())}}}),ke=I({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=w(()=>parseInt(e.lines,10)),i=w(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=w(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>S("div",{style:l.value,class:i.value},Z(t.default))}}),yt=I({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:t,emit:n}){let i=!1,l,u,a=null,r=null,c,d;function s(){l&&l(),l=null,i=!1,a!==null&&(clearTimeout(a),a=null),r!==null&&(clearTimeout(r),r=null),u!==void 0&&u.removeEventListener("transitionend",c),c=null}function b(f,q,T){q!==void 0&&(f.style.height=`${q}px`),f.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,l=T}function y(f,q){f.style.overflowY=null,f.style.height=null,f.style.transition=null,s(),q!==d&&n(q)}function o(f,q){let T=0;u=f,i===!0?(s(),T=f.offsetHeight===f.scrollHeight?0:void 0):(d="hide",f.style.overflowY="hidden"),b(f,T,q),a=setTimeout(()=>{a=null,f.style.height=`${f.scrollHeight}px`,c=v=>{r=null,(Object(v)!==v||v.target===f)&&y(f,"show")},f.addEventListener("transitionend",c),r=setTimeout(c,e.duration*1.1)},100)}function h(f,q){let T;u=f,i===!0?s():(d="show",f.style.overflowY="hidden",T=f.scrollHeight),b(f,T,q),a=setTimeout(()=>{a=null,f.style.height=0,c=v=>{r=null,(Object(v)!==v||v.target===f)&&y(f,"hide")},f.addEventListener("transitionend",c),r=setTimeout(c,e.duration*1.1)},100)}return F(()=>{i===!0&&s()}),()=>S(He,{css:!1,appear:e.appear,onEnter:o,onLeave:h},t.default)}});const wt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},se={xs:2,sm:4,md:8,lg:16,xl:24};var Te=I({name:"QSeparator",props:{...ee,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=M(),n=te(e,t.proxy.$q),i=w(()=>e.vertical===!0?"vertical":"horizontal"),l=w(()=>` q-separator--${i.value}`),u=w(()=>e.inset!==!1?`${l.value}-${wt[e.inset]}`:""),a=w(()=>`q-separator${l.value}${u.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),r=w(()=>{const c={};if(e.size!==void 0&&(c[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const d=e.spaced===!0?`${se.md}px`:e.spaced in se?`${se[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${s[0]}`]=c[`margin${s[1]}`]=d}return c});return()=>S("hr",{class:a.value,style:r.value,"aria-orientation":i.value})}});const We={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Qe=["beforeShow","show","beforeHide","hide"];function Re({showing:e,canShow:t,hideOnRouteChange:n,handleShow:i,handleHide:l,processOnMount:u}){const a=M(),{props:r,emit:c,proxy:d}=a;let s;function b(v){e.value===!0?h(v):y(v)}function y(v){if(r.disable===!0||v!==void 0&&v.qAnchorHandled===!0||t!==void 0&&t(v)!==!0)return;const m=r["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!0),s=v,G(()=>{s===v&&(s=void 0)})),(r.modelValue===null||m===!1)&&o(v)}function o(v){e.value!==!0&&(e.value=!0,c("beforeShow",v),i!==void 0?i(v):c("show",v))}function h(v){if(r.disable===!0)return;const m=r["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!1),s=v,G(()=>{s===v&&(s=void 0)})),(r.modelValue===null||m===!1)&&f(v)}function f(v){e.value!==!1&&(e.value=!1,c("beforeHide",v),l!==void 0?l(v):c("hide",v))}function q(v){r.disable===!0&&v===!0?r["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):v===!0!==e.value&&(v===!0?o:f)(s)}_(()=>r.modelValue,q),n!==void 0&&Xe(a)===!0&&_(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),u===!0&&Ie(()=>{q(r.modelValue)});const T={show:y,hide:h,toggle:b};return Object.assign(d,T),T}const A=Ze({}),St=Object.keys(ve);var Yt=I({name:"QExpansionItem",props:{...ve,...We,...ee,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Qe,"click","afterShow","afterHide"],setup(e,{slots:t,emit:n}){const{proxy:{$q:i}}=M(),l=te(e,i),u=P(e.modelValue!==null?e.modelValue:e.defaultOpened),a=P(null),r=mt(),{show:c,hide:d,toggle:s}=Re({showing:u});let b,y;const o=w(()=>`q-expansion-item q-item-type q-expansion-item--${u.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),h=w(()=>{if(e.contentInsetLevel===void 0)return null;const g=i.lang.rtl===!0?"Right":"Left";return{["padding"+g]:e.contentInsetLevel*56+"px"}}),f=w(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),q=w(()=>{const g={};return St.forEach(L=>{g[L]=e[L]}),g}),T=w(()=>f.value===!0||e.expandIconToggle!==!0),v=w(()=>e.expandedIcon!==void 0&&u.value===!0?e.expandedIcon:e.expandIcon||i.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),m=w(()=>e.disable!==!0&&(f.value===!0||e.expandIconToggle===!0)),p=w(()=>({expanded:u.value===!0,detailsId:r.value,toggle:s,show:c,hide:d})),k=w(()=>{const g=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:i.lang.label[u.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":u.value===!0?"true":"false","aria-controls":r.value,"aria-label":g}});_(()=>e.group,g=>{y!==void 0&&y(),g!==void 0&&j()});function B(g){f.value!==!0&&s(g),n("click",g)}function E(g){g.keyCode===13&&C(g,!0)}function C(g,L){L!==!0&&a.value!==null&&a.value.focus(),s(g),me(g)}function $(){n("afterShow")}function V(){n("afterHide")}function j(){b===void 0&&(b=ht()),u.value===!0&&(A[e.group]=b);const g=_(u,H=>{H===!0?A[e.group]=b:A[e.group]===b&&delete A[e.group]}),L=_(()=>A[e.group],(H,ae)=>{ae===b&&H!==void 0&&H!==b&&d()});y=()=>{g(),L(),A[e.group]===b&&delete A[e.group],y=void 0}}function ne(){const g={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},L=[S(ye,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&u.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:v.value})];return m.value===!0&&(Object.assign(g,{tabindex:0,...k.value,onClick:C,onKeyup:E}),L.unshift(S("div",{ref:a,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),S(re,g,()=>L)}function z(){let g;return t.header!==void 0?g=[].concat(t.header(p.value)):(g=[S(re,()=>[S(ke,{lines:e.labelLines},()=>e.label||""),e.caption?S(ke,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&g[e.switchToggleSide===!0?"push":"unshift"](S(re,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>S(ye,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&g[e.switchToggleSide===!0?"unshift":"push"](ne()),g}function N(){const g={ref:"item",style:e.headerStyle,class:e.headerClass,dark:l.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return T.value===!0&&(g.clickable=!0,g.onClick=B,Object.assign(g,f.value===!0?q.value:k.value)),S(xt,g,z)}function ie(){return Je(S("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:h.value,id:r.value},Z(t.default)),[[et,u.value]])}function le(){const g=[N(),S(yt,{duration:e.duration,onShow:$,onHide:V},ie)];return e.expandSeparator===!0&&g.push(S(Te,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:l.value}),S(Te,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:l.value})),g}return e.group!==void 0&&j(),F(()=>{y!==void 0&&y()}),()=>S("div",{class:o.value},[S("div",{class:"q-expansion-item__container relative-position"},le())])}});function qt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),tt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const kt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Tt={...kt,contextMenu:Boolean};function pt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:i,proxy:l,emit:u}=M(),a=P(null);let r=null;function c(o){return a.value===null?!1:o===void 0||o.touches===void 0||o.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(o){l.hide(o)},toggle(o){l.toggle(o),o.qAnchorHandled=!0},toggleKey(o){J(o,13)===!0&&d.toggle(o)},contextClick(o){l.hide(o),we(o),G(()=>{l.show(o),o.qAnchorHandled=!0})},prevent:we,mobileTouch(o){if(d.mobileCleanup(o),c(o)!==!0)return;l.hide(o),a.value.classList.add("non-selectable");const h=o.target;Se(d,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,l.show(o),o.qAnchorHandled=!0},300)},mobileCleanup(o){a.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&o!==void 0&&qt()}}),n=function(o=i.contextMenu){if(i.noParentEvent===!0||a.value===null)return;let h;o===!0?l.$q.platform.is.mobile===!0?h=[[a.value,"touchstart","mobileTouch","passive"]]:h=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:h=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],Se(d,"anchor",h)});function s(){nt(d,"anchor")}function b(o){for(a.value=o;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function y(){if(i.target===!1||i.target===""||l.$el.parentNode===null)a.value=null;else if(i.target===!0)b(l.$el.parentNode);else{let o=i.target;if(typeof i.target=="string")try{o=document.querySelector(i.target)}catch{o=void 0}o!=null?(a.value=o.$el||o,n()):(a.value=null,console.error(`Anchor: target "${i.target}" not found`))}}return _(()=>i.contextMenu,o=>{a.value!==null&&(s(),n(o))}),_(()=>i.target,()=>{a.value!==null&&s(),y()}),_(()=>i.noParentEvent,o=>{a.value!==null&&(o===!0?s():n())}),Ie(()=>{y(),t!==!0&&i.modelValue===!0&&a.value===null&&u("update:modelValue",!1)}),F(()=>{r!==null&&clearTimeout(r),s()}),{anchorEl:a,canShow:c,anchorEvents:d}}function Et(e,t){const n=P(null);let i;function l(r,c){const d=`${c!==void 0?"add":"remove"}EventListener`,s=c!==void 0?c:i;r!==window&&r[d]("scroll",s,de.passive),window[d]("scroll",s,de.passive),i=c}function u(){n.value!==null&&(l(n.value),n.value=null)}const a=_(()=>e.noParentEvent,()=>{n.value!==null&&(u(),t())});return F(a),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:l}}const O=[];function Ct(e){return O.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Fe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return U(e)}else if(e.__qPortal===!0){const n=U(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=U(e)}while(e!=null)}function Lt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Fe(e,t);continue}e.hide(t)}e=U(e)}}const _t=I({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function $t(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Pt(e,t,n,i){const l=P(!1),u=P(!1);let a=null;const r={},c=i==="dialog"&&$t(e);function d(b){if(b===!0){qe(r),u.value=!0;return}u.value=!1,l.value===!1&&(c===!1&&a===null&&(a=ot(!1,i)),l.value=!0,O.push(e.proxy),gt(r))}function s(b){if(u.value=!1,b!==!0)return;qe(r),l.value=!1;const y=O.indexOf(e.proxy);y!==-1&&O.splice(y,1),a!==null&&(ut(a),a=null)}return it(()=>{s(!0)}),e.proxy.__qPortal=!0,lt(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:s,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>c===!0?n():l.value===!0?[S(at,{to:a},S(_t,n))]:void 0}}const Bt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ht(e,t=()=>{},n=()=>{}){return{transitionProps:w(()=>{const i=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function It(){let e;const t=M();function n(){e=void 0}return Me(n),F(n),{removeTick:n,registerTick(i){e=i,G(()=>{e===i&&(Ae(t)===!1&&e(),e=void 0)})}}}function Mt(){let e=null;const t=M();function n(){e!==null&&(clearTimeout(e),e=null)}return Me(n),F(n),{removeTimeout:n,registerTimeout(i,l){n(),Ae(t)===!1&&(e=setTimeout(()=>{e=null,i()},l))}}}const W=[];let D;function At(e){D=e.keyCode===27}function Wt(){D===!0&&(D=!1)}function Qt(e){D===!0&&(D=!1,J(e,27)===!0&&W[W.length-1](e))}function Oe(e){window[e]("keydown",At),window[e]("blur",Wt),window[e]("keyup",Qt),D=!1}function Rt(e){he.is.desktop===!0&&(W.push(e),W.length===1&&Oe("addEventListener"))}function pe(e){const t=W.indexOf(e);t!==-1&&(W.splice(t,1),W.length===0&&Oe("removeEventListener"))}const Q=[];function De(e){Q[Q.length-1](e)}function Ft(e){he.is.desktop===!0&&(Q.push(e),Q.length===1&&document.body.addEventListener("focusin",De))}function Ot(e){const t=Q.indexOf(e);t!==-1&&(Q.splice(t,1),Q.length===0&&document.body.removeEventListener("focusin",De))}const{notPassiveCapture:Y}=de,R=[];function X(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=O.length-1;for(;n>=0;){const i=O[n].$;if(i.type.name==="QTooltip"){n--;continue}if(i.type.name!=="QDialog")break;if(i.props.seamless!==!0)return;n--}for(let i=R.length-1;i>=0;i--){const l=R[i];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Dt(e){R.push(e),R.length===1&&(document.addEventListener("mousedown",X,Y),document.addEventListener("touchstart",X,Y))}function Ee(e){const t=R.findIndex(n=>n===e);t!==-1&&(R.splice(t,1),R.length===0&&(document.removeEventListener("mousedown",X,Y),document.removeEventListener("touchstart",X,Y)))}let Ce,Le;function _e(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function jt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const fe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{fe[`${e}#ltr`]=e,fe[`${e}#rtl`]=e});function $e(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:fe[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function zt(e,t){let{top:n,left:i,right:l,bottom:u,width:a,height:r}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],i-=t[0],u+=t[1],l+=t[0],a+=t[0],r+=t[1]),{top:n,bottom:u,height:r,left:i,right:l,width:a,middle:i+(l-i)/2,center:n+(u-n)/2}}function Kt(e,t,n){let{top:i,left:l}=e.getBoundingClientRect();return i+=t.top,l+=t.left,n!==void 0&&(i+=n[1],l+=n[0]),{top:i,bottom:i+1,height:1,left:l,right:l+1,width:1,middle:l,center:i}}function Vt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Pe(e,t,n,i){return{top:e[n.vertical]-t[i.vertical],left:e[n.horizontal]-t[i.horizontal]}}function je(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{je(e,t+1)},10);return}const{targetEl:n,offset:i,anchorEl:l,anchorOrigin:u,selfOrigin:a,absoluteOffset:r,fit:c,cover:d,maxHeight:s,maxWidth:b}=e;if(he.is.ios===!0&&window.visualViewport!==void 0){const B=document.body.style,{offsetLeft:E,offsetTop:C}=window.visualViewport;E!==Ce&&(B.setProperty("--q-pe-left",E+"px"),Ce=E),C!==Le&&(B.setProperty("--q-pe-top",C+"px"),Le=C)}const{scrollLeft:y,scrollTop:o}=n,h=r===void 0?zt(l,d===!0?[0,0]:i):Kt(l,r,i);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b,maxHeight:s,visibility:"visible"});const{offsetWidth:f,offsetHeight:q}=n,{elWidth:T,elHeight:v}=c===!0||d===!0?{elWidth:Math.max(h.width,f),elHeight:d===!0?Math.max(h.height,q):q}:{elWidth:f,elHeight:q};let m={maxWidth:b,maxHeight:s};(c===!0||d===!0)&&(m.minWidth=h.width+"px",d===!0&&(m.minHeight=h.height+"px")),Object.assign(n.style,m);const p=Vt(T,v);let k=Pe(h,p,u,a);if(r===void 0||i===void 0)ce(k,h,p,u,a);else{const{top:B,left:E}=k;ce(k,h,p,u,a);let C=!1;if(k.top!==B){C=!0;const $=2*i[1];h.center=h.top-=$,h.bottom-=$+2}if(k.left!==E){C=!0;const $=2*i[0];h.middle=h.left-=$,h.right-=$+2}C===!0&&(k=Pe(h,p,u,a),ce(k,h,p,u,a))}m={top:k.top+"px",left:k.left+"px"},k.maxHeight!==void 0&&(m.maxHeight=k.maxHeight+"px",h.height>k.maxHeight&&(m.minHeight=m.maxHeight)),k.maxWidth!==void 0&&(m.maxWidth=k.maxWidth+"px",h.width>k.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(n.style,m),n.scrollTop!==o&&(n.scrollTop=o),n.scrollLeft!==y&&(n.scrollLeft=y)}function ce(e,t,n,i,l){const u=n.bottom,a=n.right,r=rt(),c=window.innerHeight-r,d=document.body.clientWidth;if(e.top<0||e.top+u>c)if(l.vertical==="center")e.top=t[i.vertical]>c/2?Math.max(0,c-u):0,e.maxHeight=Math.min(u,c);else if(t[i.vertical]>c/2){const s=Math.min(c,i.vertical==="center"?t.center:i.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,s),e.top=Math.max(0,s-u)}else e.top=Math.max(0,i.vertical==="center"?t.center:i.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,c-e.top);if(e.left<0||e.left+a>d)if(e.maxWidth=Math.min(a,d),l.horizontal==="middle")e.left=t[i.horizontal]>d/2?Math.max(0,d-a):0;else if(t[i.horizontal]>d/2){const s=Math.min(d,i.horizontal==="middle"?t.middle:i.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(a,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,i.horizontal==="middle"?t.middle:i.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(a,d-e.left)}var Xt=I({name:"QMenu",inheritAttrs:!1,props:{...Tt,...We,...ee,...Bt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:_e},self:{type:String,validator:_e},offset:{type:Array,validator:jt},scrollTarget:st,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Qe,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:i}){let l=null,u,a,r;const c=M(),{proxy:d}=c,{$q:s}=d,b=P(null),y=P(!1),o=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=te(e,s),{registerTick:f,removeTick:q}=It(),{registerTimeout:T}=Mt(),{transitionProps:v,transitionStyle:m}=Ht(e),{localScrollTarget:p,changeScrollEvent:k,unconfigureScrollTarget:B}=Et(e,be),{anchorEl:E,canShow:C}=pt({showing:y}),{hide:$}=Re({showing:y,canShow:C,handleShow:ae,handleHide:ze,hideOnRouteChange:o,processOnMount:!0}),{showPortal:V,hidePortal:j,renderPortal:ne}=Pt(c,b,Ve,"menu"),z={anchorEl:E,innerRef:b,onClickOutside(x){if(e.persistent!==!0&&y.value===!0)return $(x),(x.type==="touchstart"||x.target.classList.contains("q-dialog__backdrop"))&&me(x),!0}},N=w(()=>$e(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),ie=w(()=>e.cover===!0?N.value:$e(e.self||"top start",s.lang.rtl)),le=w(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),g=w(()=>e.autoClose===!0?{onClick:Ke}:{}),L=w(()=>y.value===!0&&e.persistent!==!0);_(L,x=>{x===!0?(Rt(oe),Dt(z)):(pe(oe),Ee(z))});function H(){bt(()=>{let x=b.value;x&&x.contains(document.activeElement)!==!0&&(x=x.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||x.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||x.querySelector("[autofocus], [data-autofocus]")||x,x.focus({preventScroll:!0}))})}function ae(x){if(l=e.noRefocus===!1?document.activeElement:null,Ft(xe),V(),be(),u=void 0,x!==void 0&&(e.touchPosition||e.contextMenu)){const ue=ct(x);if(ue.left!==void 0){const{top:Ne,left:Ue}=E.value.getBoundingClientRect();u={left:ue.left-Ue,top:ue.top-Ne}}}a===void 0&&(a=_(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,K)),e.noFocus!==!0&&document.activeElement.blur(),f(()=>{K(),e.noFocus!==!0&&H()}),T(()=>{s.platform.is.ios===!0&&(r=e.autoClose,b.value.click()),K(),V(!0),n("show",x)},e.transitionDuration)}function ze(x){q(),j(),ge(!0),l!==null&&(x===void 0||x.qClickOutside!==!0)&&(((x&&x.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),T(()=>{j(!0),n("hide",x)},e.transitionDuration)}function ge(x){u=void 0,a!==void 0&&(a(),a=void 0),(x===!0||y.value===!0)&&(Ot(xe),B(),Ee(z),pe(oe)),x!==!0&&(l=null)}function be(){(E.value!==null||e.scrollTarget!==void 0)&&(p.value=dt(E.value,e.scrollTarget),k(p.value,K))}function Ke(x){r!==!0?(Fe(d,x),n("click",x)):r=!1}function xe(x){L.value===!0&&e.noFocus!==!0&&ft(b.value,x.target)!==!0&&H()}function oe(x){n("escapeKey"),$(x)}function K(){je({targetEl:b.value,offset:e.offset,anchorEl:E.value,anchorOrigin:N.value,selfOrigin:ie.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ve(){return S(He,v.value,()=>y.value===!0?S("div",{role:"menu",...i,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+le.value,i.class],style:[i.style,m.value],...g.value},Z(t.default)):null)}return F(ge),Object.assign(d,{focus:H,updatePosition:K}),ne}});function Be(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var Zt=vt({name:"close-popup",beforeMount(e,{value:t}){const n={depth:Be(t),handler(i){n.depth!==0&&setTimeout(()=>{const l=Ct(e);l!==void 0&&Lt(l,i,n.depth)})},handlerKey(i){J(i,13)===!0&&n.handler(i)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=Be(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{Zt as C,Xt as Q,Yt as a,re as b,xt as c,kt as d,We as e,jt as f,Qe as g,It as h,Mt as i,Ht as j,Et as k,pt as l,Re as m,Pt as n,qt as o,$e as p,Dt as q,Ee as r,je as s,Ot as t,Bt as u,_e as v,pe as w,Ft as x,Rt as y,Tt as z};
