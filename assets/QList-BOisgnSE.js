import{c as n,a as t,h as d,g as i}from"./index-BykOfNXl.js";import{u,a as c}from"./use-dark-B4X7FpQt.js";import{h as m}from"./vm-CKbHu3uS.js";const g=["ul","ol"],v=n({name:"QList",props:{...u,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const s=i(),r=c(e,s.proxy.$q),o=t(()=>g.includes(e.tag)?null:"list"),l=t(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d(e.tag,{class:l.value,role:o.value},m(a.default))}});export{v as Q};