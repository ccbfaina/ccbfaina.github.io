import{c as F,a as w,h as p,b as J,am as ce,g as Q,an as Ue,r as H,ao as Z,X as de,ap as Ge,k as D,ad as Ie,w as _,ag as Ye,o as Be,S as G,aq as Xe,I as Je,M as Ze,T as xe,ar as et,af as ye,ac as we,ab as tt,f as se,as as U,x as nt,al as it,at as lt,au as ot,av as at,aw as $e,ax as Ae,ay as fe,t as ut,s as st,az as rt,j as ct,ak as dt,aA as ft}from"./index-C1mdcgXU.js";import{u as ve,a as me}from"./use-dark-C_h1aEkq.js";import{Q as pe}from"./QSeparator-C9s36KqE.js";import{u as vt,b as mt,r as qe,c as ht,a as gt}from"./focus-manager-CahXY3Bh.js";const ae=F({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=w(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:n.value},J(t.default))}}),bt=F({name:"QItem",props:{...ve,...ce,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:i}}=Q(),l=me(e,i),{hasLink:s,linkAttrs:o,linkClass:u,linkTag:c,navigateOnClick:d}=Ue(),r=H(null),b=H(null),y=w(()=>e.clickable===!0||s.value===!0||e.tag==="label"),a=w(()=>e.disable!==!0&&y.value===!0),h=w(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),f=w(()=>e.insetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function q(v){a.value===!0&&(b.value!==null&&v.qAvoidFocus!==!0&&(v.qKeyEvent!==!0&&document.activeElement===r.value?b.value.focus():document.activeElement===b.value&&r.value.focus()),d(v))}function S(v){if(a.value===!0&&Z(v,[13,32])===!0){de(v),v.qKeyEvent=!0;const T=new MouseEvent("click",v);T.qKeyEvent=!0,r.value.dispatchEvent(T)}n("keyup",v)}function m(){const v=Ge(t.default,[]);return a.value===!0&&v.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:b})),v}return()=>{const v={ref:r,class:h.value,style:f.value,role:"listitem",onClick:q,onKeyup:S};return a.value===!0?(v.tabindex=e.tabindex||"0",Object.assign(v,o.value)):y.value===!0&&(v["aria-disabled"]="true"),p(c.value,v,m())}}}),ke=F({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=w(()=>parseInt(e.lines,10)),i=w(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=w(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>p("div",{style:l.value,class:i.value},J(t.default))}}),xt=F({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:t,emit:n}){let i=!1,l,s,o=null,u=null,c,d;function r(){l?.(),l=null,i=!1,o!==null&&(clearTimeout(o),o=null),u!==null&&(clearTimeout(u),u=null),s?.removeEventListener("transitionend",c),c=null}function b(f,q,S){q!==void 0&&(f.style.height=`${q}px`),f.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,l=S}function y(f,q){f.style.overflowY=null,f.style.height=null,f.style.transition=null,r(),q!==d&&n(q)}function a(f,q){let S=0;s=f,i===!0?(r(),S=f.offsetHeight===f.scrollHeight?0:void 0):(d="hide",f.style.overflowY="hidden"),b(f,S,q),o=setTimeout(()=>{o=null,f.style.height=`${f.scrollHeight}px`,c=m=>{u=null,(Object(m)!==m||m.target===f)&&y(f,"show")},f.addEventListener("transitionend",c),u=setTimeout(c,e.duration*1.1)},100)}function h(f,q){let S;s=f,i===!0?r():(d="show",f.style.overflowY="hidden",S=f.scrollHeight),b(f,S,q),o=setTimeout(()=>{o=null,f.style.height=0,c=m=>{u=null,(Object(m)!==m||m.target===f)&&y(f,"hide")},f.addEventListener("transitionend",c),u=setTimeout(c,e.duration*1.1)},100)}return D(()=>{i===!0&&r()}),()=>p(Ie,{css:!1,appear:e.appear,onEnter:a,onLeave:h},t.default)}}),Me={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},We=["beforeShow","show","beforeHide","hide"];function Fe({showing:e,canShow:t,hideOnRouteChange:n,handleShow:i,handleHide:l,processOnMount:s}){const o=Q(),{props:u,emit:c,proxy:d}=o;let r;function b(m){e.value===!0?h(m):y(m)}function y(m){if(u.disable===!0||m?.qAnchorHandled===!0||t!==void 0&&t(m)!==!0)return;const v=u["onUpdate:modelValue"]!==void 0;v===!0&&(c("update:modelValue",!0),r=m,G(()=>{r===m&&(r=void 0)})),(u.modelValue===null||v===!1)&&a(m)}function a(m){e.value!==!0&&(e.value=!0,c("beforeShow",m),i!==void 0?i(m):c("show",m))}function h(m){if(u.disable===!0)return;const v=u["onUpdate:modelValue"]!==void 0;v===!0&&(c("update:modelValue",!1),r=m,G(()=>{r===m&&(r=void 0)})),(u.modelValue===null||v===!1)&&f(m)}function f(m){e.value!==!1&&(e.value=!1,c("beforeHide",m),l!==void 0?l(m):c("hide",m))}function q(m){u.disable===!0&&m===!0?u["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):m===!0!==e.value&&(m===!0?a:f)(r)}_(()=>u.modelValue,q),n!==void 0&&Ye(o)===!0&&_(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),s===!0&&Be(()=>{q(u.modelValue)});const S={show:y,hide:h,toggle:b};return Object.assign(d,S),S}const $=Xe({}),yt=Object.keys(ce),Gt=F({name:"QExpansionItem",props:{...ce,...Me,...ve,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...We,"click","afterShow","afterHide"],setup(e,{slots:t,emit:n}){const{proxy:{$q:i}}=Q(),l=me(e,i),s=H(e.modelValue!==null?e.modelValue:e.defaultOpened),o=H(null),u=vt(),{show:c,hide:d,toggle:r}=Fe({showing:s});let b,y;const a=w(()=>`q-expansion-item q-item-type q-expansion-item--${s.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),h=w(()=>e.contentInsetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),f=w(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),q=w(()=>{const g={};return yt.forEach(L=>{g[L]=e[L]}),g}),S=w(()=>f.value===!0||e.expandIconToggle!==!0),m=w(()=>e.expandedIcon!==void 0&&s.value===!0?e.expandedIcon:e.expandIcon||i.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),v=w(()=>e.disable!==!0&&(f.value===!0||e.expandIconToggle===!0)),T=w(()=>({expanded:s.value===!0,detailsId:u.value,toggle:r,show:c,hide:d})),k=w(()=>{const g=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:i.lang.label[s.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":s.value===!0?"true":"false","aria-controls":u.value,"aria-label":g}});_(()=>e.group,g=>{y?.(),g!==void 0&&j()});function I(g){f.value!==!0&&r(g),n("click",g)}function E(g){g.keyCode===13&&C(g,!0)}function C(g,L){L!==!0&&g.qAvoidFocus!==!0&&o.value?.focus(),r(g),de(g)}function P(){n("afterShow")}function z(){n("afterHide")}function j(){b===void 0&&(b=mt()),s.value===!0&&($[e.group]=b);const g=_(s,B=>{B===!0?$[e.group]=b:$[e.group]===b&&delete $[e.group]}),L=_(()=>$[e.group],(B,ie)=>{ie===b&&B!==void 0&&B!==b&&d()});y=()=>{g(),L(),$[e.group]===b&&delete $[e.group],y=void 0}}function ee(){const g={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},L=[p(xe,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&s.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:m.value})];return v.value===!0&&(Object.assign(g,{tabindex:0,...k.value,onClick:C,onKeyup:E}),L.unshift(p("div",{ref:o,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),p(ae,g,()=>L)}function K(){let g;return t.header!==void 0?g=[].concat(t.header(T.value)):(g=[p(ae,()=>[p(ke,{lines:e.labelLines},()=>e.label||""),e.caption?p(ke,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&g[e.switchToggleSide===!0?"push":"unshift"](p(ae,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>p(xe,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&g[e.switchToggleSide===!0?"unshift":"push"](ee()),g}function N(){const g={ref:"item",style:e.headerStyle,class:e.headerClass,dark:l.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return S.value===!0&&(g.clickable=!0,g.onClick=I,Object.assign(g,f.value===!0?q.value:k.value)),p(bt,g,K)}function te(){return Je(p("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:h.value,id:u.value},J(t.default)),[[Ze,s.value]])}function ne(){const g=[N(),p(xt,{duration:e.duration,onShow:P,onHide:z},te)];return e.expandSeparator===!0&&g.push(p(pe,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:l.value}),p(pe,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:l.value})),g}return e.group!==void 0&&j(),D(()=>{y?.()}),()=>p("div",{class:a.value},[p("div",{class:"q-expansion-item__container relative-position"},ne())])}});function wt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),et.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const pt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},qt={...pt,contextMenu:Boolean};function kt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:i,proxy:l,emit:s}=Q(),o=H(null);let u=null;function c(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Z(a,13)===!0&&d.toggle(a)},contextClick(a){l.hide(a),ye(a),G(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:ye,mobileTouch(a){if(d.mobileCleanup(a),c(a)!==!0)return;l.hide(a),o.value.classList.add("non-selectable");const h=a.target;we(d,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&wt()}}),n=function(a=i.contextMenu){if(i.noParentEvent===!0||o.value===null)return;let h;a===!0?l.$q.platform.is.mobile===!0?h=[[o.value,"touchstart","mobileTouch","passive"]]:h=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:h=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],we(d,"anchor",h)});function r(){tt(d,"anchor")}function b(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function y(){if(i.target===!1||i.target===""||l.$el.parentNode===null)o.value=null;else if(i.target===!0)b(l.$el.parentNode);else{let a=i.target;if(typeof i.target=="string")try{a=document.querySelector(i.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,n()):(o.value=null,console.error(`Anchor: target "${i.target}" not found`))}}return _(()=>i.contextMenu,a=>{o.value!==null&&(r(),n(a))}),_(()=>i.target,()=>{o.value!==null&&r(),y()}),_(()=>i.noParentEvent,a=>{o.value!==null&&(a===!0?r():n())}),Be(()=>{y(),t!==!0&&i.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),D(()=>{u!==null&&clearTimeout(u),r()}),{anchorEl:o,canShow:c,anchorEvents:d}}function St(e,t){const n=H(null);let i;function l(u,c){const d=`${c!==void 0?"add":"remove"}EventListener`,r=c!==void 0?c:i;u!==window&&u[d]("scroll",r,se.passive),window[d]("scroll",r,se.passive),i=c}function s(){n.value!==null&&(l(n.value),n.value=null)}const o=_(()=>e.noParentEvent,()=>{n.value!==null&&(s(),t())});return D(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:l}}const O=[];function Tt(e){return O.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Qe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return U(e)}else if(e.__qPortal===!0){const n=U(e);return n?.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=U(e)}while(e!=null)}function Et(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Qe(e,t);continue}e.hide(t)}e=U(e)}}const Ct=F({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function Lt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function _t(e,t,n,i){const l=H(!1),s=H(!1);let o=null;const u={},c=i==="dialog"&&Lt(e);function d(b){if(b===!0){qe(u),s.value=!0;return}s.value=!1,l.value===!1&&(c===!1&&o===null&&(o=ot(!1,i)),l.value=!0,O.push(e.proxy),ht(u))}function r(b){if(s.value=!1,b!==!0)return;qe(u),l.value=!1;const y=O.indexOf(e.proxy);y!==-1&&O.splice(y,1),o!==null&&(at(o),o=null)}return nt(()=>{r(!0)}),e.proxy.__qPortal=!0,it(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:r,portalIsActive:l,portalIsAccessible:s,renderPortal:()=>c===!0?n():l.value===!0?[p(lt,{to:o},p(Ct,n))]:void 0}}const Pt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ht(e,t=()=>{},n=()=>{}){return{transitionProps:w(()=>{const i=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function It(){let e;const t=Q();function n(){e=void 0}return $e(n),D(n),{removeTick:n,registerTick(i){e=i,G(()=>{e===i&&(Ae(t)===!1&&e(),e=void 0)})}}}function Bt(){let e=null;const t=Q();function n(){e!==null&&(clearTimeout(e),e=null)}return $e(n),D(n),{removeTimeout:n,registerTimeout(i,l){n(),Ae(t)===!1&&(e=setTimeout(()=>{e=null,i()},l))}}}const A=[];let R;function $t(e){R=e.keyCode===27}function At(){R===!0&&(R=!1)}function Mt(e){R===!0&&(R=!1,Z(e,27)===!0&&A[A.length-1](e))}function De(e){window[e]("keydown",$t),window[e]("blur",At),window[e]("keyup",Mt),R=!1}function Wt(e){fe.is.desktop===!0&&(A.push(e),A.length===1&&De("addEventListener"))}function Se(e){const t=A.indexOf(e);t!==-1&&(A.splice(t,1),A.length===0&&De("removeEventListener"))}const M=[];function Oe(e){M[M.length-1](e)}function Ft(e){fe.is.desktop===!0&&(M.push(e),M.length===1&&document.body.addEventListener("focusin",Oe))}function Qt(e){const t=M.indexOf(e);t!==-1&&(M.splice(t,1),M.length===0&&document.body.removeEventListener("focusin",Oe))}const{notPassiveCapture:Y}=se,W=[];function X(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=O.length-1;for(;n>=0;){const i=O[n].$;if(i.type.name==="QTooltip"){n--;continue}if(i.type.name!=="QDialog")break;if(i.props.seamless!==!0)return;n--}for(let i=W.length-1;i>=0;i--){const l=W[i];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Dt(e){W.push(e),W.length===1&&(document.addEventListener("mousedown",X,Y),document.addEventListener("touchstart",X,Y))}function Te(e){const t=W.findIndex(n=>n===e);t!==-1&&(W.splice(t,1),W.length===0&&(document.removeEventListener("mousedown",X,Y),document.removeEventListener("touchstart",X,Y)))}let Ee,Ce;function Le(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ot(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const re={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{re[`${e}#ltr`]=e,re[`${e}#rtl`]=e});function _e(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:re[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Rt(e,t){let{top:n,left:i,right:l,bottom:s,width:o,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],i-=t[0],s+=t[1],l+=t[0],o+=t[0],u+=t[1]),{top:n,bottom:s,height:u,left:i,right:l,width:o,middle:i+(l-i)/2,center:n+(s-n)/2}}function jt(e,t,n){let{top:i,left:l}=e.getBoundingClientRect();return i+=t.top,l+=t.left,n!==void 0&&(i+=n[1],l+=n[0]),{top:i,bottom:i+1,height:1,left:l,right:l+1,width:1,middle:l,center:i}}function Kt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Pe(e,t,n,i){return{top:e[n.vertical]-t[i.vertical],left:e[n.horizontal]-t[i.horizontal]}}function Re(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Re(e,t+1)},10);return}const{targetEl:n,offset:i,anchorEl:l,anchorOrigin:s,selfOrigin:o,absoluteOffset:u,fit:c,cover:d,maxHeight:r,maxWidth:b}=e;if(fe.is.ios===!0&&window.visualViewport!==void 0){const I=document.body.style,{offsetLeft:E,offsetTop:C}=window.visualViewport;E!==Ee&&(I.setProperty("--q-pe-left",E+"px"),Ee=E),C!==Ce&&(I.setProperty("--q-pe-top",C+"px"),Ce=C)}const{scrollLeft:y,scrollTop:a}=n,h=u===void 0?Rt(l,d===!0?[0,0]:i):jt(l,u,i);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b,maxHeight:r,visibility:"visible"});const{offsetWidth:f,offsetHeight:q}=n,{elWidth:S,elHeight:m}=c===!0||d===!0?{elWidth:Math.max(h.width,f),elHeight:d===!0?Math.max(h.height,q):q}:{elWidth:f,elHeight:q};let v={maxWidth:b,maxHeight:r};(c===!0||d===!0)&&(v.minWidth=h.width+"px",d===!0&&(v.minHeight=h.height+"px")),Object.assign(n.style,v);const T=Kt(S,m);let k=Pe(h,T,s,o);if(u===void 0||i===void 0)ue(k,h,T,s,o);else{const{top:I,left:E}=k;ue(k,h,T,s,o);let C=!1;if(k.top!==I){C=!0;const P=2*i[1];h.center=h.top-=P,h.bottom-=P+2}if(k.left!==E){C=!0;const P=2*i[0];h.middle=h.left-=P,h.right-=P+2}C===!0&&(k=Pe(h,T,s,o),ue(k,h,T,s,o))}v={top:k.top+"px",left:k.left+"px"},k.maxHeight!==void 0&&(v.maxHeight=k.maxHeight+"px",h.height>k.maxHeight&&(v.minHeight=v.maxHeight)),k.maxWidth!==void 0&&(v.maxWidth=k.maxWidth+"px",h.width>k.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(n.style,v),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==y&&(n.scrollLeft=y)}function ue(e,t,n,i,l){const s=n.bottom,o=n.right,u=ut(),c=window.innerHeight-u,d=document.body.clientWidth;if(e.top<0||e.top+s>c)if(l.vertical==="center")e.top=t[i.vertical]>c/2?Math.max(0,c-s):0,e.maxHeight=Math.min(s,c);else if(t[i.vertical]>c/2){const r=Math.min(c,i.vertical==="center"?t.center:i.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,r),e.top=Math.max(0,r-s)}else e.top=Math.max(0,i.vertical==="center"?t.center:i.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,c-e.top);if(e.left<0||e.left+o>d)if(e.maxWidth=Math.min(o,d),l.horizontal==="middle")e.left=t[i.horizontal]>d/2?Math.max(0,d-o):0;else if(t[i.horizontal]>d/2){const r=Math.min(d,i.horizontal==="middle"?t.middle:i.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(o,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,i.horizontal==="middle"?t.middle:i.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(o,d-e.left)}const Yt=F({name:"QMenu",inheritAttrs:!1,props:{...qt,...Me,...ve,...Pt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noEscDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Le},self:{type:String,validator:Le},offset:{type:Array,validator:Ot},scrollTarget:st,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...We,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:i}){let l=null,s,o,u;const c=Q(),{proxy:d}=c,{$q:r}=d,b=H(null),y=H(!1),a=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=me(e,r),{registerTick:f,removeTick:q}=It(),{registerTimeout:S}=Bt(),{transitionProps:m,transitionStyle:v}=Ht(e),{localScrollTarget:T,changeScrollEvent:k,unconfigureScrollTarget:I}=St(e,ge),{anchorEl:E,canShow:C}=kt({showing:y}),{hide:P}=Fe({showing:y,canShow:C,handleShow:ie,handleHide:je,hideOnRouteChange:a,processOnMount:!0}),{showPortal:z,hidePortal:j,renderPortal:ee}=_t(c,b,Ve,"menu"),K={anchorEl:E,innerRef:b,onClickOutside(x){if(e.persistent!==!0&&y.value===!0)return P(x),(x.type==="touchstart"||x.target.classList.contains("q-dialog__backdrop"))&&de(x),!0}},N=w(()=>_e(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),te=w(()=>e.cover===!0?N.value:_e(e.self||"top start",r.lang.rtl)),ne=w(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),g=w(()=>e.autoClose===!0?{onClick:Ke}:{}),L=w(()=>y.value===!0&&e.persistent!==!0);_(L,x=>{x===!0?(Wt(le),Dt(K)):(Se(le),Te(K))});function B(){gt(()=>{let x=b.value;x&&x.contains(document.activeElement)!==!0&&(x=x.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||x.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||x.querySelector("[autofocus], [data-autofocus]")||x,x.focus({preventScroll:!0}))})}function ie(x){if(l=e.noRefocus===!1?document.activeElement:null,Ft(be),z(),ge(),s=void 0,x!==void 0&&(e.touchPosition||e.contextMenu)){const oe=rt(x);if(oe.left!==void 0){const{top:ze,left:Ne}=E.value.getBoundingClientRect();s={left:oe.left-Ne,top:oe.top-ze}}}o===void 0&&(o=_(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,V)),e.noFocus!==!0&&document.activeElement.blur(),f(()=>{V(),e.noFocus!==!0&&B()}),S(()=>{r.platform.is.ios===!0&&(u=e.autoClose,b.value.click()),V(),z(!0),n("show",x)},e.transitionDuration)}function je(x){q(),j(),he(!0),l!==null&&(x===void 0||x.qClickOutside!==!0)&&(((x?.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),S(()=>{j(!0),n("hide",x)},e.transitionDuration)}function he(x){s=void 0,o!==void 0&&(o(),o=void 0),(x===!0||y.value===!0)&&(Qt(be),I(),Te(K),Se(le)),x!==!0&&(l=null)}function ge(){(E.value!==null||e.scrollTarget!==void 0)&&(T.value=ct(E.value,e.scrollTarget),k(T.value,V))}function Ke(x){u!==!0?(Qe(d,x),n("click",x)):u=!1}function be(x){L.value===!0&&e.noFocus!==!0&&dt(b.value,x.target)!==!0&&B()}function le(x){e.noEscDismiss!==!0&&(n("escapeKey"),P(x))}function V(){Re({targetEl:b.value,offset:e.offset,anchorEl:E.value,anchorOrigin:N.value,selfOrigin:te.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ve(){return p(Ie,m.value,()=>y.value===!0?p("div",{role:"menu",...i,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+ne.value,i.class],style:[i.style,v.value],...g.value},J(t.default)):null)}return D(he),Object.assign(d,{focus:B,updatePosition:V}),ee}});function He(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const Xt=ft({name:"close-popup",beforeMount(e,{value:t}){const n={depth:He(t),handler(i){n.depth!==0&&setTimeout(()=>{const l=Tt(e);l!==void 0&&Et(l,i,n.depth)})},handlerKey(i){Z(i,13)===!0&&n.handler(i)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=He(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{Xt as C,Yt as Q,Gt as a,bt as b,ae as c,We as d,Le as e,Me as f,pt as g,It as h,Bt as i,Ht as j,St as k,kt as l,Fe as m,_t as n,Dt as o,_e as p,wt as q,Te as r,Re as s,Ft as t,Pt as u,Ot as v,Wt as w,Qt as x,Se as y,qt as z};
