import{b as t}from"./QIcon-BG2ghIIa.js";import{a as i,c,h as n}from"./index--aAVYWFs.js";const a={size:{type:[String,Number],default:"1em"},color:String};function o(e){return{cSize:i(()=>e.size in t?`${t[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const m=c({name:"QSpinner",props:{...a,thickness:{type:Number,default:5}},setup(e){const{cSize:s,classes:r}=o(e);return()=>n("svg",{class:r.value+" q-spinner-mat",width:s.value,height:s.value,viewBox:"25 25 50 50"},[n("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{m as Q,o as a,a as u};
