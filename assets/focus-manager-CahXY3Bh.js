import{u as p,r as a,o as m,w as v,a as F}from"./index-C1mdcgXU.js";let d,s=0;const t=new Array(256);for(let n=0;n<256;n++)t[n]=(n+256).toString(16).substring(1);const h=(()=>{const n=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(n!==void 0){if(n.randomBytes!==void 0)return n.randomBytes;if(n.getRandomValues!==void 0)return o=>{const r=new Uint8Array(o);return n.getRandomValues(r),r}}return o=>{const r=[];for(let i=o;i>0;i--)r.push(Math.floor(Math.random()*256));return r}})(),l=4096;function f(){(d===void 0||s+16>l)&&(s=0,d=h(l));const n=Array.prototype.slice.call(d,s,s+=16);return n[6]=n[6]&15|64,n[8]=n[8]&63|128,t[n[0]]+t[n[1]]+t[n[2]]+t[n[3]]+"-"+t[n[4]]+t[n[5]]+"-"+t[n[6]]+t[n[7]]+"-"+t[n[8]]+t[n[9]]+"-"+t[n[10]]+t[n[11]]+t[n[12]]+t[n[13]]+t[n[14]]+t[n[15]]}function w(n){return n??null}function c(n,o){return n??(o===!0?`f_${f()}`:null)}function b({getValue:n,required:o=!0}={}){if(p.value===!0){const r=n!==void 0?a(w(n())):a(null);return o===!0&&r.value===null&&m(()=>{r.value=`f_${f()}`}),n!==void 0&&v(n,i=>{r.value=c(i,o)}),r}return n!==void 0?F(()=>c(n(),o)):a(`f_${f()}`)}let e=[],u=[];function y(n){u=u.filter(o=>o!==n)}function g(n){y(n),u.push(n)}function B(n){y(n),u.length===0&&e.length!==0&&(e[e.length-1](),e=[])}function I(n){u.length===0?n():e.push(n)}function R(n){e=e.filter(o=>o!==n)}export{I as a,f as b,g as c,R as d,B as r,b as u};
