import{a as d,aG as B,c as ut,t as k,w as U,h as i,X as G,d as it,g as st,Z as Fe,Q as H,aL as ct}from"./index.98c5d8b4.js";import{u as dt,a as vt}from"./use-dark.dbb84b63.js";import{u as ft,c as mt,b as ht}from"./private.use-form.155b0902.js";import{t as yt,_ as gt,a as Ie,f as bt,g as _t,j as be}from"./date.d5c1b75e.js";function Dt(){let n=Object.create(null);return{getCache:(h,y)=>n[h]===void 0?n[h]=typeof y=="function"?y():y:n[h],setCache(h,y){n[h]=y},hasCache(h){return Object.hasOwnProperty.call(n,h)},clearCache(h){h!==void 0?delete n[h]:n=Object.create(null)}}}const wt=["gregorian","persian"],Be={mask:{type:String},locale:Object,calendar:{type:String,validator:n=>wt.includes(n),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Ct=["update:modelValue"];function V(n){return n.year+"/"+B(n.month)+"/"+B(n.day)}function Mt(n,h){const y=d(()=>n.disable!==!0&&n.readonly!==!0),P=d(()=>y.value===!0?0:-1),q=d(()=>{const m=[];return n.color!==void 0&&m.push(`bg-${n.color}`),n.textColor!==void 0&&m.push(`text-${n.textColor}`),m.join(" ")});function ne(){return n.locale!==void 0?{...h.lang.date,...n.locale}:h.lang.date}function w(m){const $=new Date,Y=m===!0?null:0;if(n.calendar==="persian"){const A=yt($);return{year:A.jy,month:A.jm,day:A.jd}}return{year:$.getFullYear(),month:$.getMonth()+1,day:$.getDate(),hour:Y,minute:Y,second:Y,millisecond:Y}}return{editable:y,tabindex:P,headerClass:q,getLocale:ne,getCurrentDate:w}}const I=20,qt=["Calendar","Years","Months"],$e=n=>qt.includes(n),_e=n=>/^-?[\d]+\/[0-1]\d$/.test(n),z=" \u2014 ";function O(n){return n.year+"/"+B(n.month)}var Vt=ut({name:"QDate",props:{...Be,...ft,...dt,modelValue:{required:!0,validator:n=>typeof n=="string"||Array.isArray(n)===!0||Object(n)===n||n===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...Be.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:_e},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:_e},navigationMaxYearMonth:{type:String,validator:_e},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:$e}},emits:[...Ct,"rangeStart","rangeEnd","navigation"],setup(n,{slots:h,emit:y}){const{proxy:P}=st(),{$q:q}=P,ne=vt(n,q),{getCache:w}=Dt(),{tabindex:m,headerClass:$,getLocale:Y,getCurrentDate:A}=Mt(n,q);let le;const Ae=mt(n),Ee=ht(Ae),oe=k(null),j=k(He()),f=k(Y()),Ne=d(()=>He()),Re=d(()=>Y()),x=d(()=>A()),u=k(Se(j.value,f.value)),D=k(n.defaultView),De=d(()=>q.lang.rtl===!0?"right":"left"),K=k(De.value),re=k(De.value),ue=u.value.year,X=k(ue-ue%I-(ue<0?I:0)),_=k(null),Le=d(()=>{const e=n.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${n.minimal===!0?"minimal":"standard"}`+(ne.value===!0?" q-date--dark q-dark":"")+(n.bordered===!0?" q-date--bordered":"")+(n.square===!0?" q-date--square no-border-radius":"")+(n.flat===!0?" q-date--flat no-shadow":"")+(n.disable===!0?" disabled":n.readonly===!0?" q-date--readonly":"")}),T=d(()=>n.color||"primary"),E=d(()=>n.textColor||"white"),Z=d(()=>n.emitImmediately===!0&&n.multiple!==!0&&n.range!==!0),ie=d(()=>Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue!==null&&n.modelValue!==void 0?[n.modelValue]:[]),M=d(()=>ie.value.filter(e=>typeof e=="string").map(e=>fe(e,j.value,f.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),N=d(()=>{const e=t=>fe(t,j.value,f.value);return ie.value.filter(t=>ct(t)===!0&&t.from!==void 0&&t.to!==void 0).map(t=>({from:e(t.from),to:e(t.to)})).filter(t=>t.from.dateHash!==null&&t.to.dateHash!==null&&t.from.dateHash<t.to.dateHash)}),p=d(()=>n.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const t=Ie(e.year,e.month,e.day);return new Date(t.gy,t.gm-1,t.gd)}),se=d(()=>n.calendar==="persian"?V:(e,t,a)=>bt(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),t===void 0?j.value:t,a===void 0?f.value:a,e.year,e.timezoneOffset)),W=d(()=>M.value.length+N.value.reduce((e,t)=>e+1+_t(p.value(t.to),p.value(t.from)),0)),we=d(()=>{if(n.title!==void 0&&n.title!==null&&n.title.length!==0)return n.title;if(_.value!==null){const a=_.value.init,l=p.value(a);return f.value.daysShort[l.getDay()]+", "+f.value.monthsShort[a.month-1]+" "+a.day+z+"?"}if(W.value===0)return z;if(W.value>1)return`${W.value} ${f.value.pluralDay}`;const e=M.value[0],t=p.value(e);return isNaN(t.valueOf())===!0?z:f.value.headerTitle!==void 0?f.value.headerTitle(t,e):f.value.daysShort[t.getDay()]+", "+f.value.monthsShort[e.month-1]+" "+e.day}),ze=d(()=>M.value.concat(N.value.map(t=>t.from)).sort((t,a)=>t.year-a.year||t.month-a.month)[0]),Pe=d(()=>M.value.concat(N.value.map(t=>t.to)).sort((t,a)=>a.year-t.year||a.month-t.month)[0]),Ce=d(()=>{if(n.subtitle!==void 0&&n.subtitle!==null&&n.subtitle.length!==0)return n.subtitle;if(W.value===0)return z;if(W.value>1){const e=ze.value,t=Pe.value,a=f.value.monthsShort;return a[e.month-1]+(e.year!==t.year?" "+e.year+z+a[t.month-1]+" ":e.month!==t.month?z+a[t.month-1]:"")+" "+t.year}return M.value[0].year}),ee=d(()=>{const e=[q.iconSet.datetime.arrowLeft,q.iconSet.datetime.arrowRight];return q.lang.rtl===!0?e.reverse():e}),Me=d(()=>n.firstDayOfWeek!==void 0?Number(n.firstDayOfWeek):f.value.firstDayOfWeek),We=d(()=>{const e=f.value.daysShort,t=Me.value;return t>0?e.slice(t,7).concat(e.slice(0,t)):e}),S=d(()=>{const e=u.value;return n.calendar!=="persian"?new Date(e.year,e.month,0).getDate():be(e.year,e.month)}),Je=d(()=>typeof n.eventColor=="function"?n.eventColor:()=>n.eventColor),g=d(()=>{if(n.navigationMinYearMonth===void 0)return null;const e=n.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),b=d(()=>{if(n.navigationMaxYearMonth===void 0)return null;const e=n.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),ce=d(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return g.value!==null&&g.value.year>=u.value.year&&(e.year.prev=!1,g.value.year===u.value.year&&g.value.month>=u.value.month&&(e.month.prev=!1)),b.value!==null&&b.value.year<=u.value.year&&(e.year.next=!1,b.value.year===u.value.year&&b.value.month<=u.value.month&&(e.month.next=!1)),e}),te=d(()=>{const e={};return M.value.forEach(t=>{const a=O(t);e[a]===void 0&&(e[a]=[]),e[a].push(t.day)}),e}),qe=d(()=>{const e={};return N.value.forEach(t=>{const a=O(t.from),l=O(t.to);if(e[a]===void 0&&(e[a]=[]),e[a].push({from:t.from.day,to:a===l?t.to.day:void 0,range:t}),a<l){let o;const{year:c,month:r}=t.from,s=r<12?{year:c,month:r+1}:{year:c+1,month:1};for(;(o=O(s))<=l;)e[o]===void 0&&(e[o]=[]),e[o].push({from:void 0,to:o===l?t.to.day:void 0,range:t}),s.month++,s.month>12&&(s.year++,s.month=1)}}),e}),J=d(()=>{if(_.value===null)return;const{init:e,initHash:t,final:a,finalHash:l}=_.value,[o,c]=t<=l?[e,a]:[a,e],r=O(o),s=O(c);if(r!==C.value&&s!==C.value)return;const v={};return r===C.value?(v.from=o.day,v.includeFrom=!0):v.from=1,s===C.value?(v.to=c.day,v.includeTo=!0):v.to=S.value,v}),C=d(()=>O(u.value)),Qe=d(()=>{const e={};if(n.options===void 0){for(let a=1;a<=S.value;a++)e[a]=!0;return e}const t=typeof n.options=="function"?n.options:a=>n.options.includes(a);for(let a=1;a<=S.value;a++){const l=C.value+"/"+B(a);e[a]=t(l)}return e}),Ue=d(()=>{const e={};if(n.events===void 0)for(let t=1;t<=S.value;t++)e[t]=!1;else{const t=typeof n.events=="function"?n.events:a=>n.events.includes(a);for(let a=1;a<=S.value;a++){const l=C.value+"/"+B(a);e[a]=t(l)===!0&&Je.value(l)}}return e}),Ge=d(()=>{let e,t;const{year:a,month:l}=u.value;if(n.calendar!=="persian")e=new Date(a,l-1,1),t=new Date(a,l-1,0).getDate();else{const o=Ie(a,l,1);e=new Date(o.gy,o.gm-1,o.gd);let c=l-1,r=a;c===0&&(c=12,r--),t=be(r,c)}return{days:e.getDay()-Me.value-1,endDay:t}}),xe=d(()=>{const e=[],{days:t,endDay:a}=Ge.value,l=t<0?t+7:t;if(l<6)for(let r=a-l;r<=a;r++)e.push({i:r,fill:!0});const o=e.length;for(let r=1;r<=S.value;r++){const s={i:r,event:Ue.value[r],classes:[]};Qe.value[r]===!0&&(s.in=!0,s.flat=!0),e.push(s)}if(te.value[C.value]!==void 0&&te.value[C.value].forEach(r=>{const s=o+r-1;Object.assign(e[s],{selected:!0,unelevated:!0,flat:!1,color:T.value,textColor:E.value})}),qe.value[C.value]!==void 0&&qe.value[C.value].forEach(r=>{if(r.from!==void 0){const s=o+r.from-1,v=o+(r.to||S.value)-1;for(let Q=s;Q<=v;Q++)Object.assign(e[Q],{range:r.range,unelevated:!0,color:T.value,textColor:E.value});Object.assign(e[s],{rangeFrom:!0,flat:!1}),r.to!==void 0&&Object.assign(e[v],{rangeTo:!0,flat:!1})}else if(r.to!==void 0){const s=o+r.to-1;for(let v=o;v<=s;v++)Object.assign(e[v],{range:r.range,unelevated:!0,color:T.value,textColor:E.value});Object.assign(e[s],{flat:!1,rangeTo:!0})}else{const s=o+S.value-1;for(let v=o;v<=s;v++)Object.assign(e[v],{range:r.range,unelevated:!0,color:T.value,textColor:E.value})}}),J.value!==void 0){const r=o+J.value.from-1,s=o+J.value.to-1;for(let v=r;v<=s;v++)e[v].color=T.value,e[v].editRange=!0;J.value.includeFrom===!0&&(e[r].editRangeFrom=!0),J.value.includeTo===!0&&(e[s].editRangeTo=!0)}u.value.year===x.value.year&&u.value.month===x.value.month&&(e[o+x.value.day-1].today=!0);const c=e.length%7;if(c>0){const r=7-c;for(let s=1;s<=r;s++)e.push({i:s,fill:!0})}return e.forEach(r=>{let s="q-date__calendar-item ";r.fill===!0?s+="q-date__calendar-item--fill":(s+=`q-date__calendar-item--${r.in===!0?"in":"out"}`,r.range!==void 0&&(s+=` q-date__range${r.rangeTo===!0?"-to":r.rangeFrom===!0?"-from":""}`),r.editRange===!0&&(s+=` q-date__edit-range${r.editRangeFrom===!0?"-from":""}${r.editRangeTo===!0?"-to":""}`),(r.range!==void 0||r.editRange===!0)&&(s+=` text-${r.color}`)),r.classes=s}),e}),Ke=d(()=>n.disable===!0?{"aria-disabled":"true"}:{});U(()=>n.modelValue,e=>{if(le===JSON.stringify(e))le=0;else{const t=Se(j.value,f.value);R(t.year,t.month,t)}}),U(D,()=>{oe.value!==null&&P.$el.contains(document.activeElement)===!0&&oe.value.focus()}),U(()=>u.value.year+"|"+u.value.month,()=>{y("navigation",{year:u.value.year,month:u.value.month})}),U(Ne,e=>{Te(e,f.value,"mask"),j.value=e}),U(Re,e=>{Te(j.value,e,"locale"),f.value=e});function de(e){le=JSON.stringify(e)}function ke(){const{year:e,month:t,day:a}=x.value,l={...u.value,year:e,month:t,day:a},o=te.value[O(l)];(o===void 0||o.includes(l.day)===!1)&&he(l),ve(l.year,l.month)}function Xe(e){$e(e)===!0&&(D.value=e)}function Ze(e,t){["month","year"].includes(e)&&(e==="month"?Oe:me)(t===!0?-1:1)}function ve(e,t){D.value="Calendar",R(e,t)}function pe(e,t){if(n.range===!1||!e){_.value=null;return}const a=Object.assign({...u.value},e),l=t!==void 0?Object.assign({...u.value},t):a;_.value={init:a,initHash:V(a),final:l,finalHash:V(l)},ve(a.year,a.month)}function He(){return n.calendar==="persian"?"YYYY/MM/DD":n.mask}function fe(e,t,a){return gt(e,t,a,n.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Se(e,t){const a=Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue?[n.modelValue]:[];if(a.length===0)return Ve();const l=a[a.length-1],o=fe(l.from!==void 0?l.from:l,e,t);return o.dateHash===null?Ve():o}function Ve(){let e,t;if(n.defaultYearMonth!==void 0){const a=n.defaultYearMonth.split("/");e=parseInt(a[0],10),t=parseInt(a[1],10)}else{const a=x.value!==void 0?x.value:A();e=a.year,t=a.month}return{year:e,month:t,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+B(t)+"/01"}}function Oe(e){let t=u.value.year,a=Number(u.value.month)+e;a===13?(a=1,t++):a===0&&(a=12,t--),R(t,a),Z.value===!0&&ae("month")}function me(e){const t=Number(u.value.year)+e;R(t,u.value.month),Z.value===!0&&ae("year")}function et(e){R(e,u.value.month),D.value=n.defaultView==="Years"?"Months":"Calendar",Z.value===!0&&ae("year")}function tt(e){R(u.value.year,e),D.value="Calendar",Z.value===!0&&ae("month")}function at(e,t){const a=te.value[t];(a!==void 0&&a.includes(e.day)===!0?ye:he)(e)}function F(e){return{year:e.year,month:e.month,day:e.day}}function R(e,t,a){if(g.value!==null&&e<=g.value.year&&((t<g.value.month||e<g.value.year)&&(t=g.value.month),e=g.value.year),b.value!==null&&e>=b.value.year&&((t>b.value.month||e>b.value.year)&&(t=b.value.month),e=b.value.year),a!==void 0){const{hour:o,minute:c,second:r,millisecond:s,timezoneOffset:v,timeHash:Q}=a;Object.assign(u.value,{hour:o,minute:c,second:r,millisecond:s,timezoneOffset:v,timeHash:Q})}const l=e+"/"+B(t)+"/01";l!==u.value.dateHash&&(K.value=u.value.dateHash<l==(q.lang.rtl!==!0)?"left":"right",e!==u.value.year&&(re.value=K.value),Fe(()=>{X.value=e-e%I-(e<0?I:0),Object.assign(u.value,{year:e,month:t,day:1,dateHash:l})}))}function Ye(e,t,a){const l=e!==null&&e.length===1&&n.multiple===!1?e[0]:e,{reason:o,details:c}=je(t,a);de(l),y("update:modelValue",l,o,c)}function ae(e){const t=M.value[0]!==void 0&&M.value[0].dateHash!==null?{...M.value[0]}:{...u.value};Fe(()=>{t.year=u.value.year,t.month=u.value.month;const a=n.calendar!=="persian"?new Date(t.year,t.month,0).getDate():be(t.year,t.month);t.day=Math.min(Math.max(1,t.day),a);const l=L(t),{details:o}=je("",t);de(l),y("update:modelValue",l,e,o)})}function je(e,t){return t.from!==void 0?{reason:`${e}-range`,details:{...F(t.target),from:F(t.from),to:F(t.to)}}:{reason:`${e}-day`,details:F(t)}}function L(e,t,a){return e.from!==void 0?{from:se.value(e.from,t,a),to:se.value(e.to,t,a)}:se.value(e,t,a)}function he(e){let t;if(n.multiple===!0)if(e.from!==void 0){const a=V(e.from),l=V(e.to),o=M.value.filter(r=>r.dateHash<a||r.dateHash>l),c=N.value.filter(({from:r,to:s})=>s.dateHash<a||r.dateHash>l);t=o.concat(c).concat(e).map(r=>L(r))}else{const a=ie.value.slice();a.push(L(e)),t=a}else t=L(e);Ye(t,"add",e)}function ye(e){if(n.noUnset===!0)return;let t=null;if(n.multiple===!0&&Array.isArray(n.modelValue)===!0){const a=L(e);e.from!==void 0?t=n.modelValue.filter(l=>l.from!==void 0?l.from!==a.from&&l.to!==a.to:!0):t=n.modelValue.filter(l=>l!==a),t.length===0&&(t=null)}Ye(t,"remove",e)}function Te(e,t,a){const l=M.value.concat(N.value).map(c=>L(c,e,t)).filter(c=>c.from!==void 0?c.from.dateHash!==null&&c.to.dateHash!==null:c.dateHash!==null),o=(n.multiple===!0?l:l[0])||null;de(o),y("update:modelValue",o,a)}function nt(){if(n.minimal!==!0)return i("div",{class:"q-date__header "+$.value},[i("div",{class:"relative-position"},[i(G,{name:"q-transition--fade"},()=>i("div",{key:"h-yr-"+Ce.value,class:"q-date__header-subtitle q-date__header-link "+(D.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:m.value,...w("vY",{onClick(){D.value="Years"},onKeyup(e){e.keyCode===13&&(D.value="Years")}})},[Ce.value]))]),i("div",{class:"q-date__header-title relative-position flex no-wrap"},[i("div",{class:"relative-position col"},[i(G,{name:"q-transition--fade"},()=>i("div",{key:"h-sub"+we.value,class:"q-date__header-title-label q-date__header-link "+(D.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:m.value,...w("vC",{onClick(){D.value="Calendar"},onKeyup(e){e.keyCode===13&&(D.value="Calendar")}})},[we.value]))]),n.todayBtn===!0?i(H,{class:"q-date__header-today self-start",icon:q.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:m.value,onClick:ke}):null])])}function ge({label:e,type:t,key:a,dir:l,goTo:o,boundaries:c,cls:r}){return[i("div",{class:"row items-center q-date__arrow"},[i(H,{round:!0,dense:!0,size:"sm",flat:!0,icon:ee.value[0],tabindex:m.value,disable:c.prev===!1,...w("go-#"+t,{onClick(){o(-1)}})})]),i("div",{class:"relative-position overflow-hidden flex flex-center"+r},[i(G,{name:"q-transition--jump-"+l},()=>i("div",{key:a},[i(H,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:m.value,...w("view#"+t,{onClick:()=>{D.value=t}})})]))]),i("div",{class:"row items-center q-date__arrow"},[i(H,{round:!0,dense:!0,size:"sm",flat:!0,icon:ee.value[1],tabindex:m.value,disable:c.next===!1,...w("go+#"+t,{onClick(){o(1)}})})])]}const lt={Calendar:()=>[i("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[i("div",{class:"q-date__navigation row items-center no-wrap"},ge({label:f.value.months[u.value.month-1],type:"Months",key:u.value.month,dir:K.value,goTo:Oe,boundaries:ce.value.month,cls:" col"}).concat(ge({label:u.value.year,type:"Years",key:u.value.year,dir:re.value,goTo:me,boundaries:ce.value.year,cls:""}))),i("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},We.value.map(e=>i("div",{class:"q-date__calendar-item"},[i("div",e)]))),i("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[i(G,{name:"q-transition--slide-"+K.value},()=>i("div",{key:C.value,class:"q-date__calendar-days fit"},xe.value.map(e=>i("div",{class:e.classes},[e.in===!0?i(H,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:m.value,...w("day#"+e.i,{onClick:()=>{ot(e.i)},onMouseover:()=>{rt(e.i)}})},e.event!==!1?()=>i("div",{class:"q-date__event bg-"+e.event}):null):i("div",""+e.i)]))))])])],Months(){const e=u.value.year===x.value.year,t=l=>g.value!==null&&u.value.year===g.value.year&&g.value.month>l||b.value!==null&&u.value.year===b.value.year&&b.value.month<l,a=f.value.monthsShort.map((l,o)=>{const c=u.value.month===o+1;return i("div",{class:"q-date__months-item flex flex-center"},[i(H,{class:e===!0&&x.value.month===o+1?"q-date__today":null,flat:c!==!0,label:l,unelevated:c,color:c===!0?T.value:null,textColor:c===!0?E.value:null,tabindex:m.value,disable:t(o+1),...w("month#"+o,{onClick:()=>{tt(o+1)}})})])});return n.yearsInMonthView===!0&&a.unshift(i("div",{class:"row no-wrap full-width"},[ge({label:u.value.year,type:"Years",key:u.value.year,dir:re.value,goTo:me,boundaries:ce.value.year,cls:" col"})])),i("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},a)},Years(){const e=X.value,t=e+I,a=[],l=o=>g.value!==null&&g.value.year>o||b.value!==null&&b.value.year<o;for(let o=e;o<=t;o++){const c=u.value.year===o;a.push(i("div",{class:"q-date__years-item flex flex-center"},[i(H,{key:"yr"+o,class:x.value.year===o?"q-date__today":null,flat:!c,label:o,dense:!0,unelevated:c,color:c===!0?T.value:null,textColor:c===!0?E.value:null,tabindex:m.value,disable:l(o),...w("yr#"+o,{onClick:()=>{et(o)}})})]))}return i("div",{class:"q-date__view q-date__years flex flex-center"},[i("div",{class:"col-auto"},[i(H,{round:!0,dense:!0,flat:!0,icon:ee.value[0],tabindex:m.value,disable:l(e),...w("y-",{onClick:()=>{X.value-=I}})})]),i("div",{class:"q-date__years-content col self-stretch row items-center"},a),i("div",{class:"col-auto"},[i(H,{round:!0,dense:!0,flat:!0,icon:ee.value[1],tabindex:m.value,disable:l(t),...w("y+",{onClick:()=>{X.value+=I}})})])])}};function ot(e){const t={...u.value,day:e};if(n.range===!1){at(t,C.value);return}if(_.value===null){const a=xe.value.find(o=>o.fill!==!0&&o.i===e);if(n.noUnset!==!0&&a.range!==void 0){ye({target:t,from:a.range.from,to:a.range.to});return}if(a.selected===!0){ye(t);return}const l=V(t);_.value={init:t,initHash:l,final:t,finalHash:l},y("rangeStart",F(t))}else{const a=_.value.initHash,l=V(t),o=a<=l?{from:_.value.init,to:t}:{from:t,to:_.value.init};_.value=null,he(a===l?t:{target:t,...o}),y("rangeEnd",{from:F(o.from),to:F(o.to)})}}function rt(e){if(_.value!==null){const t={...u.value,day:e};Object.assign(_.value,{final:t,finalHash:V(t)})}}return Object.assign(P,{setToday:ke,setView:Xe,offsetCalendar:Ze,setCalendarTo:ve,setEditingRange:pe}),()=>{const e=[i("div",{class:"q-date__content col relative-position"},[i(G,{name:"q-transition--fade"},lt[D.value])])],t=it(h.default);return t!==void 0&&e.push(i("div",{class:"q-date__actions"},t)),n.name!==void 0&&n.disable!==!0&&Ee(e,"push"),i("div",{class:Le.value,...Ke.value},[nt(),i("div",{ref:oe,class:"q-date__main col column",tabindex:-1},e)])}}});export{Vt as Q};
