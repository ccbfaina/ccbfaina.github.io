import{r as z,af as be,g as W,i as pe,w as P,o as oe,f as le,ag as ke,a as y,ah as ye,a1 as ge,R as xe,u as Q,a5 as Ce,ai as we,h as M,Z as X,X as re,aj as Me,b as G,T as Se,ak as Re,c as qe,al as ie}from"./index.4a172efe.js";import{c as me,u as Ve,d as Fe}from"./focus-manager.10e356f1.js";import{a as Ae,u as _e}from"./use-dark.d4705589.js";import{u as Ee,c as Be}from"./app.63afa765.js";const ue=/^on[A-Z]/;function Oe(){const{attrs:e,vnode:t}=W(),s={listeners:z({}),attributes:z({})};function i(){const f={},d={};for(const v in e)v!=="class"&&v!=="style"&&ue.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)ue.test(v)===!0&&(d[v]=t.props[v]);s.attributes.value=f,s.listeners.value=d}return be(i),i(),s}function Te({validate:e,resetValidation:t,requiresQForm:s}){const i=pe(ke,!1);if(i!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),P(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),oe(()=>{f.disable!==!0&&i.bindComponent(d)}),le(()=>{f.disable!==!0&&i.unbindComponent(d)})}else s===!0&&console.error("Parent QForm not found on useFormChild()!")}const se=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,de=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,fe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,J=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ne={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>se.test(e),hexaColor:e=>de.test(e),hexOrHexaColor:e=>fe.test(e),rgbColor:e=>J.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>J.test(e)||ee.test(e),hexOrRgbColor:e=>se.test(e)||J.test(e),hexaOrRgbaColor:e=>de.test(e)||ee.test(e),anyColor:e=>fe.test(e)||J.test(e)||ee.test(e)},$e=[!0,!1,"ondemand"],Ie={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>$e.includes(e)}};function Pe(e,t){const{props:s,proxy:i}=W(),f=z(!1),d=z(null),v=z(!1);Te({validate:D,resetValidation:I});let x=0,E;const R=y(()=>s.rules!==void 0&&s.rules!==null&&s.rules.length!==0),C=y(()=>s.disable!==!0&&R.value===!0&&t.value===!1),b=y(()=>s.error===!0||f.value===!0),U=y(()=>typeof s.errorMessage=="string"&&s.errorMessage.length!==0?s.errorMessage:d.value);P(()=>s.modelValue,()=>{v.value=!0,C.value===!0&&s.lazyRules===!1&&T()});function O(){s.lazyRules!=="ondemand"&&C.value===!0&&v.value===!0&&T()}P(()=>s.reactiveRules,N=>{N===!0?E===void 0&&(E=P(()=>s.rules,O,{immediate:!0,deep:!0})):E!==void 0&&(E(),E=void 0)},{immediate:!0}),P(()=>s.lazyRules,O),P(e,N=>{N===!0?v.value=!0:C.value===!0&&s.lazyRules!=="ondemand"&&T()});function I(){x++,t.value=!1,v.value=!1,f.value=!1,d.value=null,T.cancel()}function D(N=s.modelValue){if(s.disable===!0||R.value===!1)return!0;const A=++x,H=t.value!==!0?()=>{v.value=!0}:()=>{},L=(S,w)=>{S===!0&&H(),f.value=S,d.value=w||null,t.value=!1},j=[];for(let S=0;S<s.rules.length;S++){const w=s.rules[S];let B;if(typeof w=="function"?B=w(N,ne):typeof w=="string"&&ne[w]!==void 0&&(B=ne[w](N)),B===!1||typeof B=="string")return L(!0,B),!1;B!==!0&&B!==void 0&&j.push(B)}return j.length===0?(L(!1),!0):(t.value=!0,Promise.all(j).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return A===x&&L(!1),!0;const w=S.find(B=>B===!1||typeof B=="string");return A===x&&L(w!==void 0,w),w===void 0},S=>(A===x&&(console.error(S),L(!0)),!1)))}const T=ye(D,0);return le(()=>{E!==void 0&&E(),T.cancel()}),Object.assign(i,{resetValidation:I,validate:D}),ge(i,"hasError",()=>b.value),{isDirtyModel:v,hasRules:R,hasError:b,errorMessage:U,validate:D,resetValidation:I}}function ae(e){return e!=null&&(""+e).length!==0}const De={..._e,...Ie,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},je={...De,maxlength:[Number,String]},ze=["update:modelValue","clear","focus","blur"];function Ne({requiredForAttr:e=!0,tagProp:t,changeEvent:s=!1}={}){const{props:i,proxy:f}=W(),d=Ae(i,f.$q),v=Ve({required:e,getValue:()=>i.for});return{requiredForAttr:e,changeEvent:s,tag:t===!0?y(()=>i.tag):{value:"label"},isDark:d,editable:y(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:z(!1),focused:z(!1),hasPopupOpen:!1,splitAttrs:Oe(),targetUid:v,rootRef:z(null),targetRef:z(null),controlRef:z(null)}}function Le(e){const{props:t,emit:s,slots:i,attrs:f,proxy:d}=W(),{$q:v}=d;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>ae(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{s("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:n}),Object.assign(e,{clearValue:u,onControlFocusin:a,onControlFocusout:n,focus:w}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:E,hasRules:R,hasError:C,errorMessage:b,resetValidation:U}=Pe(e.focused,e.innerLoading),O=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),I=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),D=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),T=y(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(O.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&I.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),N=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=y(()=>t.labelSlot===!0||t.label!==void 0),H=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),L=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:O.value,modelValue:t.modelValue,emitValue:e.emitValue})),j=y(()=>{const r={};return e.targetUid.value&&(r.for=e.targetUid.value),t.disable===!0&&(r["aria-disabled"]="true"),r});function S(){const r=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(r===null||r.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==r&&c.focus({preventScroll:!0}))}function w(){me(S)}function B(){Fe(S);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function a(r){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,s("focus",r))}function n(r,c){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,s("blur",r)),c!==void 0&&c())})}function u(r){xe(r),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),s("update:modelValue",null),e.changeEvent===!0&&s("change",null),s("clear",t.modelValue),Q(()=>{const c=E.value;U(),E.value=c})}function o(r){[13,32].includes(r.keyCode)&&u(r)}function h(){const r=[];return i.prepend!==void 0&&r.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},i.prepend())),r.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),C.value===!0&&t.noErrorIcon===!1&&r.push(m("error",[M(re,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(m("inner-loading-append",i.loading!==void 0?i.loading():[M(Me,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(m("inner-clearable-append",[M(re,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":v.lang.label.clear,onKeyup:o,onClick:u})])),i.append!==void 0&&r.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},i.append())),e.getInnerAppend!==void 0&&r.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function g(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):i.rawControl!==void 0?r.push(i.rawControl()):i.control!==void 0&&r.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(L.value))),A.value===!0&&r.push(M("div",{class:H.value},G(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(G(i.default))}function q(){let r,c;C.value===!0?b.value!==null?(r=[M("div",{role:"alert"},b.value)],c=`q--slot-error-${b.value}`):(r=G(i.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[M("div",t.hint)],c=`q--slot-hint-${t.hint}`):(r=G(i.hint),c="q--slot-hint"));const k=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&k===!1&&r===void 0)return;const V=M("div",{key:c,class:"q-field__messages col"},r);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?V:M(Se,{name:"q-transition--field-message"},()=>V),k===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function m(r,c){return c===null?null:M("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let p=!1;return Ce(()=>{p=!0}),we(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&oe(()=>{d.focus()}),le(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:w,blur:B}),function(){const c=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...j.value}:j.value;return M(e.tag.value,{ref:e.rootRef,class:[T.value,f.class],style:f.style,...c},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:N.value,tabindex:-1,...e.controlEvents},h()),I.value===!0?q():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},i.after()):null])}}const ce={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},he=Object.keys(te);he.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Ke=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+he.join("")+"])|(.)","g"),ve=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),Ze={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ue(e,t,s,i){let f,d,v,x,E,R;const C=z(null),b=z(O());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,D),P(()=>e.mask,a=>{if(a!==void 0)T(b.value,!0);else{const n=w(b.value);D(),e.modelValue!==n&&t("update:modelValue",n)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&T(b.value,!0)}),P(()=>e.unmaskedValue,()=>{C.value===!0&&T(b.value)});function O(){if(D(),C.value===!0){const a=j(w(e.modelValue));return e.fillMask!==!1?B(a):a}return e.modelValue}function I(a){if(a<f.length)return f.slice(-a);let n="",u=f;const o=u.indexOf(_);if(o!==-1){for(let h=a-u.length;h>0;h--)n+=_;u=u.slice(0,o)+n+u.slice(o)}return u}function D(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&U(),C.value===!1){x=void 0,f="",d="";return}const a=ce[e.mask]===void 0?e.mask:ce[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",u=n.replace(ve,"\\$&"),o=[],h=[],g=[];let q=e.reverseFillMask===!0,m="",p="";a.replace(Ke,(V,l,F,Z,K)=>{if(Z!==void 0){const $=te[Z];g.push($),p=$.negate,q===!0&&(h.push("(?:"+p+"+)?("+$.pattern+"+)?(?:"+p+"+)?("+$.pattern+"+)?"),q=!1),h.push("(?:"+p+"+)?("+$.pattern+")?")}else if(F!==void 0)m="\\"+(F==="\\"?"":F),g.push(F),o.push("([^"+m+"]+)?"+m+"?");else{const $=l!==void 0?l:K;m=$==="\\"?"\\\\\\\\":$.replace(ve,"\\\\$&"),g.push($),o.push("([^"+m+"]+)?"+m+"?")}});const r=new RegExp("^"+o.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),c=h.length-1,k=h.map((V,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+u+"*"+V):l===c?new RegExp("^"+V+"("+(p===""?".":p)+"+)?"+(e.reverseFillMask===!0?"$":u+"*")):new RegExp("^"+V));v=g,x=V=>{const l=r.exec(e.reverseFillMask===!0?V:V.slice(0,g.length+1));l!==null&&(V=l.slice(1).join(""));const F=[],Z=k.length;for(let K=0,$=V;K<Z;K++){const Y=k[K].exec($);if(Y===null)break;$=$.slice(Y.shift().length),F.push(...Y)}return F.length!==0?F.join(""):V},f=g.map(V=>typeof V=="string"?V:_).join(""),d=f.split(_).join(n)}function T(a,n,u){const o=i.value,h=o.selectionEnd,g=o.value.length-h,q=w(a);n===!0&&D();const m=j(q),p=e.fillMask!==!1?B(m):m,r=b.value!==p;o.value!==p&&(o.value=p),r===!0&&(b.value=p),document.activeElement===o&&Q(()=>{if(p===d){const k=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(k,k,"forward");return}if(u==="insertFromPaste"&&e.reverseFillMask!==!0){const k=o.selectionEnd;let V=h-1;for(let l=E;l<=V&&l<k;l++)f[l]!==_&&V++;A.right(o,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(u)!==-1){const k=e.reverseFillMask===!0?h===0?p.length>m.length?1:0:Math.max(0,p.length-(p===d?0:Math.min(m.length,g)+1))+1:h;o.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(r===!0){const k=Math.max(0,p.length-(p===d?0:Math.min(m.length,g+1)));k===1&&h===1?o.setSelectionRange(k,k,"forward"):A.rightReverse(o,k)}else{const k=p.length-g;o.setSelectionRange(k,k,"backward")}else if(r===!0){const k=Math.max(0,f.indexOf(_),Math.min(m.length,h)-1);A.right(o,k)}else{const k=h-1;A.right(o,k)}});const c=e.unmaskedValue===!0?w(p):p;String(e.modelValue)!==c&&(e.modelValue!==null||c!=="")&&s(c,!0)}function N(a,n,u){const o=j(w(a.value));n=Math.max(0,f.indexOf(_),Math.min(o.length,n)),E=n,a.setSelectionRange(n,u,"forward")}const A={left(a,n){const u=f.slice(n-1).indexOf(_)===-1;let o=Math.max(0,n-1);for(;o>=0;o--)if(f[o]===_){n=o,u===!0&&n++;break}if(o<0&&f[n]!==void 0&&f[n]!==_)return A.right(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},right(a,n){const u=a.value.length;let o=Math.min(u,n+1);for(;o<=u;o++)if(f[o]===_){n=o;break}else f[o-1]===_&&(n=o);if(o>u&&f[n-1]!==void 0&&f[n-1]!==_)return A.left(a,u);a.setSelectionRange(n,n,"forward")},leftReverse(a,n){const u=I(a.value.length);let o=Math.max(0,n-1);for(;o>=0;o--)if(u[o-1]===_){n=o;break}else if(u[o]===_&&(n=o,o===0))break;if(o<0&&u[n]!==void 0&&u[n]!==_)return A.rightReverse(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},rightReverse(a,n){const u=a.value.length,o=I(u),h=o.slice(0,n+1).indexOf(_)===-1;let g=Math.min(u,n+1);for(;g<=u;g++)if(o[g-1]===_){n=g,n>0&&h===!0&&n--;break}if(g>u&&o[n-1]!==void 0&&o[n-1]!==_)return A.leftReverse(a,u);a.setSelectionRange(n,n,"forward")}};function H(a){t("click",a),R=void 0}function L(a){if(t("keydown",a),Re(a)===!0||a.altKey===!0)return;const n=i.value,u=n.selectionStart,o=n.selectionEnd;if(a.shiftKey||(R=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&R===void 0&&(R=n.selectionDirection==="forward"?u:o);const h=A[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),h(n,R===u?o:u),a.shiftKey){const g=n.selectionStart;n.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&u===o?(A.left(n,u),n.setSelectionRange(n.selectionStart,o,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&u===o&&(A.rightReverse(n,o),n.setSelectionRange(u,n.selectionEnd,"forward"))}function j(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return S(a);const n=v;let u=0,o="";for(let h=0;h<n.length;h++){const g=a[u],q=n[h];if(typeof q=="string")o+=q,g===q&&u++;else if(g!==void 0&&q.regex.test(g))o+=q.transform!==void 0?q.transform(g):g,u++;else return o}return o}function S(a){const n=v,u=f.indexOf(_);let o=a.length-1,h="";for(let g=n.length-1;g>=0&&o!==-1;g--){const q=n[g];let m=a[o];if(typeof q=="string")h=q+h,m===q&&o--;else if(m!==void 0&&q.regex.test(m))do h=(q.transform!==void 0?q.transform(m):m)+h,o--,m=a[o];while(u===g&&m!==void 0&&q.regex.test(m));else return h}return h}function w(a){return typeof a!="string"||x===void 0?typeof a=="number"?x(""+a):a:x(a)}function B(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:b,hasMask:C,moveCursorForPaste:N,updateMaskValue:T,onMaskedKeydown:L,onMaskedClick:H}}function He(e,t){function s(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return s()}):y(s)}function Qe(e){return function(s){if(s.type==="compositionend"||s.type==="change"){if(s.target.qComposing!==!0)return;s.target.qComposing=!1,e(s)}else s.type==="compositionstart"&&(s.target.qComposing=!0)}}var Je=qe({name:"QInput",inheritAttrs:!1,props:{...je,...Ze,...Ee,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ze,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:s}){const{proxy:i}=W(),{$q:f}=i,d={};let v=NaN,x,E,R=null,C;const b=z(null),U=Be(e),{innerValue:O,hasMask:I,moveCursorForPaste:D,updateMaskValue:T,onMaskedKeydown:N,onMaskedClick:A}=Ue(e,t,m,b),H=He(e,!0),L=y(()=>ae(O.value)),j=Qe(g),S=Ne({changeEvent:!0}),w=y(()=>e.type==="textarea"||e.autogrow===!0),B=y(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),a=y(()=>{const l={...S.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:r,onBlur:c,onFocus:ie};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=j,I.value===!0&&(l.onKeydown=N,l.onClick=A),e.autogrow===!0&&(l.onAnimationend=q),l}),n=y(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});P(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),P(()=>e.modelValue,l=>{if(I.value===!0){if(E===!0&&(E=!1,String(l)===v))return;T(l)}else O.value!==l&&(O.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Q(p)}),P(()=>e.autogrow,l=>{l===!0?Q(p):b.value!==null&&s.rows>0&&(b.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&Q(p)});function u(){me(()=>{const l=document.activeElement;b.value!==null&&b.value!==l&&(l===null||l.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function o(){b.value!==null&&b.value.select()}function h(l){if(I.value===!0&&e.reverseFillMask!==!0){const F=l.target;D(F,F.selectionStart,F.selectionEnd)}t("paste",l)}function g(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const F=l.target.value;if(l.target.qComposing===!0){d.value=F;return}if(I.value===!0)T(F,!1,l.inputType);else if(m(F),B.value===!0&&l.target===document.activeElement){const{selectionStart:Z,selectionEnd:K}=l.target;Z!==void 0&&K!==void 0&&Q(()=>{l.target===document.activeElement&&F.indexOf(l.target.value)===0&&l.target.setSelectionRange(Z,K)})}e.autogrow===!0&&p()}function q(l){t("animationend",l),p()}function m(l,F){C=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&v!==l&&(v=l,F===!0&&(E=!0),t("update:modelValue",l),Q(()=>{v===l&&(v=NaN)})),C=void 0},e.type==="number"&&(x=!0,d.value=l),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=l,R=setTimeout(C,e.debounce)):C()}function p(){requestAnimationFrame(()=>{const l=b.value;if(l!==null){const F=l.parentNode.style,{scrollTop:Z}=l,{overflowY:K,maxHeight:$}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),Y=K!==void 0&&K!=="scroll";Y===!0&&(l.style.overflowY="hidden"),F.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",Y===!0&&(l.style.overflowY=parseInt($,10)<l.scrollHeight?"auto":"hidden"),F.marginBottom="",l.scrollTop=Z}})}function r(l){j(l),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),t("change",l.target.value)}function c(l){l!==void 0&&ie(l),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),x=!1,E=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=O.value!==void 0?O.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:O.value!==void 0?O.value:""}le(()=>{c()}),oe(()=>{e.autogrow===!0&&p()}),Object.assign(S,{innerValue:O,fieldClass:y(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:m,hasValue:L,floatingLabel:y(()=>L.value===!0&&(e.type!=="number"||isNaN(O.value)===!1)||ae(e.displayValue)),getControl:()=>M(w.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...a.value,...e.type!=="file"?{value:k()}:H.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},k()),M("span",e.shadowText)])});const V=Le(S);return Object.assign(i,{focus:u,select:o,getNativeElement:()=>b.value}),ge(i,"nativeEl",()=>b.value),V}});export{Je as Q,Oe as u};
