import{c as n,g as d,a as t,h as u,b as i}from"./index-C1mdcgXU.js";import{u as c,a as g}from"./use-dark-C_h1aEkq.js";const m=["ul","ol"],v=n({name:"QList",props:{...c,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const s=d(),r=g(e,s.proxy.$q),o=t(()=>m.includes(e.tag)?null:"list"),l=t(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>u(e.tag,{class:l.value,role:o.value},i(a.default))}});export{v as Q};
