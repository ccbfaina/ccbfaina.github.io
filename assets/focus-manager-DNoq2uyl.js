import{v as p,t as f,o as m,w as F,a as h}from"./index-GUTASxEq.js";let s,d=0;const e=new Array(256);for(let n=0;n<256;n++)e[n]=(n+256).toString(16).substring(1);const w=(()=>{const n=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(n!==void 0){if(n.randomBytes!==void 0)return n.randomBytes;if(n.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return n.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),l=4096;function a(){(s===void 0||d+16>l)&&(d=0,s=w(l));const n=Array.prototype.slice.call(s,d,d+=16);return n[6]=n[6]&15|64,n[8]=n[8]&63|128,e[n[0]]+e[n[1]]+e[n[2]]+e[n[3]]+"-"+e[n[4]]+e[n[5]]+"-"+e[n[6]]+e[n[7]]+"-"+e[n[8]]+e[n[9]]+"-"+e[n[10]]+e[n[11]]+e[n[12]]+e[n[13]]+e[n[14]]+e[n[15]]}function x(n){return n??null}function c(n,t){return n??(t===!0?`f_${a()}`:null)}function g({getValue:n,required:t=!0}={}){if(p.value===!0){const u=n!==void 0?f(x(n())):f(null);return t===!0&&u.value===null&&m(()=>{u.value=`f_${a()}`}),n!==void 0&&F(n,i=>{u.value=c(i,t)}),u}return n!==void 0?h(()=>c(n(),t)):f(`f_${a()}`)}let r=[],o=[];function y(n){o=o.filter(t=>t!==n)}function B(n){y(n),o.push(n)}function I(n){y(n),o.length===0&&r.length!==0&&(r[r.length-1](),r=[])}function R(n){o.length===0?n():r.push(n)}function _(n){r=r.filter(t=>t!==n)}export{R as a,a as b,B as c,_ as d,I as r,g as u};
