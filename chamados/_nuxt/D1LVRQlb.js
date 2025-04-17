import{F as w,h as S,G as k,H as B,e as x,s as C,I as T,J as I,K as F,L}from"./jQXwvpjE.js";const P=Object.freeze({left:0,top:0,width:16,height:16}),R=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),N=Object.freeze({...P,...R});Object.freeze({...N,body:"",hidden:!1});function E(e,s){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in s)n+=" "+o+'="'+s[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}const M=/(-?[0-9.]*[0-9]+[0-9.]*)/g,V=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function v(e,s,n){if(s===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*s*n)/n;if(typeof e!="string")return e;const o=e.split(M);if(o===null||!o.length)return e;const t=[];let r=o.shift(),i=V.test(r);for(;;){if(i){const c=parseFloat(r);isNaN(c)?t.push(r):t.push(Math.ceil(c*s*n)/n)}else t.push(r);if(r=o.shift(),r===void 0)return t.join("");i=!i}}function W(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function G(e){return"data:image/svg+xml,"+W(e)}function H(e){return'url("'+G(e)+'")'}function D(e){const[s,n,o,t]=e;if(o!==t){const r=Math.max(o,t);return[s-(r-o)/2,n-(r-t)/2,r,r]}return e}const K=Object.freeze({width:null,height:null}),U=Object.freeze({...K,...R});function J(e,s="defs"){let n="";const o=e.indexOf("<"+s);for(;o>=0;){const t=e.indexOf(">",o),r=e.indexOf("</"+s);if(t===-1||r===-1)break;const i=e.indexOf(">",r);if(i===-1)break;n+=e.slice(t+1,r).trim(),e=e.slice(0,o).trim()+e.slice(i+1)}return{defs:n,content:e}}function _(e,s){return e?"<defs>"+e+"</defs>"+s:s}function Q(e,s,n){const o=J(e);return _(o.defs,s+o.content+n)}const X=e=>e==="unset"||e==="undefined"||e==="none";function Y(e,s){const n={...N,...e},o={...U,...s},t={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach(g=>{const f=[],A=g.hFlip,O=g.vFlip;let m=g.rotate;A?O?m+=2:(f.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),f.push("scale(-1 1)"),t.top=t.left=0):O&&(f.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),f.push("scale(1 -1)"),t.top=t.left=0);let h;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:h=t.height/2+t.top,f.unshift("rotate(90 "+h.toString()+" "+h.toString()+")");break;case 2:f.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:h=t.width/2+t.left,f.unshift("rotate(-90 "+h.toString()+" "+h.toString()+")");break}m%2===1&&(t.left!==t.top&&(h=t.left,t.left=t.top,t.top=h),t.width!==t.height&&(h=t.width,t.width=t.height,t.height=h)),f.length&&(r=Q(r,'<g transform="'+f.join(" ")+'">',"</g>"))});const i=o.width,c=o.height,a=t.width,l=t.height;let u,d;i===null?(d=c===null?"1em":c==="auto"?l:c,u=v(d,a/l)):(u=i==="auto"?a:i,d=c===null?v(u,l/a):c==="auto"?l:c);const y={},z=(g,f)=>{X(f)||(y[g]=f.toString())};z("width",u),z("height",d);const $=[t.left,t.top,a,l];return y.viewBox=$.join(" "),{attributes:y,viewBox:$,body:r}}function Z(e){const s={display:"inline-block",width:"1em",height:"1em"},n=e.varName;switch(e.pseudoSelector&&(s.content="''"),e.mode){case"background":n&&(s["background-image"]="var(--"+n+")"),s["background-repeat"]="no-repeat",s["background-size"]="100% 100%";break;case"mask":s["background-color"]="currentColor",n&&(s["mask-image"]=s["-webkit-mask-image"]="var(--"+n+")"),s["mask-repeat"]=s["-webkit-mask-repeat"]="no-repeat",s["mask-size"]=s["-webkit-mask-size"]="100% 100%";break}return s}function ee(e,s){const n={},o=s.varName,t=Y(e);let r=t.viewBox;r[2]!==r[3]&&(s.forceSquare?r=D(r):n.width=v("1em",r[2]/r[3]));const i=E(t.body.replace(/currentColor/g,s.color||"black"),{viewBox:`${r[0]} ${r[1]} ${r[2]} ${r[3]}`,width:`${r[2]}`,height:`${r[3]}`}),c=H(i);if(o)n["--"+o]=c;else switch(s.mode){case"background":n["background-image"]=c;break;case"mask":n["mask-image"]=n["-webkit-mask-image"]=c;break}return n}const b={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function te(e,s="expanded"){const n=[];for(let o=0;o<e.length;o++){const{selector:t,rules:r}=e[o];let c=(t instanceof Array?t.join(s==="compressed"?",":", "):t)+b.selectorStart[s],a=!0;for(const l in r)a||(c+=";"),c+=b.rule[s].replace("{key}",l)+r[l],a=!1;c+=b.selectorEnd[s],n.push(c)}return n.join(s==="compressed"?"":`
`)}function ne(e,s={}){const n=s.customise?s.customise(e.body):e.body,o=s.mode||(s.color||!n.includes("currentColor")?"background":"mask");let t=s.varName;t===void 0&&o==="mask"&&(t="svg");const r={...s,mode:o,varName:t};o==="background"&&delete r.varName;const i={...s.rules,...Z(r),...ee({...N,...e,body:n},r)},c=s.iconSelector||".icon";return te([{selector:c,rules:i}],r.format)}async function se(e,s){if(!e)return null;const n=k(e);return n||(await B(e).catch(()=>(console.warn(`[Icon] failed to load icon \`${e}\``),null)),k(e))}function j(e){const s=w().icon,n=(s.collections||[]).sort((o,t)=>t.length-o.length);return S(()=>{var i;const o=e(),t=o.startsWith(s.cssSelectorPrefix)?o.slice(s.cssSelectorPrefix.length):o,r=((i=s.aliases)==null?void 0:i[t])||t;if(!r.includes(":")){const c=n.find(a=>r.startsWith(a+"-"));return c?c+":"+r.slice(c.length+1):r}return r})}function q(e,s){if(e!==!1)return e===!0||e===null?s:e}let p;function oe(e){return e.replace(/([^\w-])/g,"\\$1")}function re(){if(p)return p;p=new Set;const e=n=>{if(n=n.replace(/^:where\((.*)\)$/,"$1").trim(),n.startsWith("."))return n},s=n=>{if(n!=null&&n.length)for(const o of n){o!=null&&o.cssRules&&s(o.cssRules);const t=o==null?void 0:o.selectorText;if(typeof t=="string"){const r=e(t);r&&p.add(r)}}};if(typeof document<"u")for(const n of document.styleSheets)try{const o=n.cssRules||n.rules;s(o)}catch{}return p}const ce=x({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:[Function,Boolean,null],default:null,required:!1}},setup(e){const s=C(),n=w().icon,o=S(()=>e.name?n.cssSelectorPrefix+e.name:"");function t(c){var u,d;if(!c)return;const a=k(c);if(a)return a;const l=(d=(u=s.payload)==null?void 0:u.data)==null?void 0:d[c];if(l)return F(c,l),l}const r=S(()=>"."+oe(o.value));function i(c,a=!0){let l=r.value;n.cssWherePseudo&&(l=`:where(${l})`);const u=ne(c,{iconSelector:l,format:"compressed",customise:q(e.customize,n.customize)});return n.cssLayer&&a?`@layer ${n.cssLayer} { ${u} }`:u}{const c=re();async function a(l){if(c.has(r.value)||typeof document>"u")return;const u=document.createElement("style");u.textContent=i(l);const d=document.head.querySelector('style, link[rel="stylesheet"]');d?document.head.insertBefore(u,d):document.head.appendChild(u),c.add(r.value)}T(()=>e.name,()=>{if(c.has(r.value))return;const l=t(e.name);l?a(l):se(e.name).then(u=>{u&&a(u)}).catch(()=>null)},{immediate:!0})}return()=>I("span",{class:["iconify",o.value]})}}),ie=x({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:[Function,Boolean,null],default:null,required:!1}},setup(e,{slots:s}){const n=C(),o=w().icon,t=j(()=>e.name),r="i-"+t.value;if(t.value){const i=n.payload.data[r];i&&F(t.value,i)}return()=>I(L,{icon:t.value,ssr:!0,customise:q(e.customize,o.customize)},s)}}),ae=x({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:[Function,Boolean,null],default:null,required:!1}},setup(e,{slots:s}){const n=C(),o=w().icon,t=j(()=>e.name),r=S(()=>{var c;return((c=n.vueApp)==null?void 0:c.component(t.value))||((e.mode||o.mode)==="svg"?ie:ce)}),i=S(()=>{const c=e.size||o.size;return c?{fontSize:Number.isNaN(+c)?c:c+"px"}:null});return()=>I(r.value,{...o.attrs,name:t.value,class:o.class,style:i.value,customize:e.customize},s)}});export{ae as default};
