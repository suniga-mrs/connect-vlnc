import{Q as u,d as f}from"./QBtn-DrOSU4Pj.js";import{Q as _}from"./QSpace-AS-S3RZV.js";import{Q as c}from"./QInput-Btb3upEo.js";import{Q as v}from"./QCheckbox-B4x6FDiq.js";import{Q as b,a as g}from"./QPopupProxy-DdZUOrSS.js";import{C as q}from"./ClosePopup-BEYXvicz.js";import{D as V}from"./discipleship-group-list.table-SwdDyVd7.js";import{Y as x}from"./yes-no-CaoIn4WL.js";import{H as w,r as n,a as N,_ as S,K as Q,L as y,Y as a,M as t,N as r,y as C}from"./index-BIE8txEE.js";import"./QMenu-Dx63Jv60.js";import"./QItemLabel-CTePAmBS.js";import"./use-dark-VSJ3s6Dh.js";import"./use-id-B6s3AC0h.js";import"./QChip-B6g5ytrn.js";import"./QList-DwTGaMOE.js";import"./QCard-CUZIraxs.js";import"./QTable-BHs2TlDD.js";import"./QSeparator-BkSUb1Ec.js";import"./QBadge-Csba2cEw.js";const I=[{name:"leaderName",align:"left",required:!0,label:"VG Leader",field:"leaderName",sortable:!0},{name:"lifeStage",align:"left",label:"Life Stage",field:"lifeStage",sortable:!0},{name:"isIntern",align:"left",label:"Intern",field:"emailAddress",format:(d,l)=>l?.leaderName?.length%2==0?"NO":"YES"}],Y=w({__name:"leaders-list.view",setup(d,{expose:l}){l();const i=n(null),e=n(null),s=n({from:null,to:null}),m=N(()=>s.value.from==null&&s.value.to==null?null:s.value.from+" to "+s.value.to),p={model:i,optionsModel:e,date:s,dateInput:m,options:["Kids","Students","Singles","Single Parents","Couples","Seniors"],dateCleared:()=>s.value={from:null,to:null},DiscipleshipTable:V,YesNo:x,get columnLeaders(){return I}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),h={class:"q-px-md"},D={class:"q-py-sm flex items-center filter-wrapper"},L={class:"col-grow"},M={class:"row items-center q-mb-sm"},P={class:"text-primary"},B={class:"row filter-fields"},U={class:"col-6 col-md-3 q-pr-md-sm q-pr-sm"},k={class:"col-6 col-md-3 q-pl-md-none q-pl-sm q-pr-md-sm q-pr-none"},E={class:"col-6 col-md-3 q-pr-md-sm q-pr-sm q-pt-sm q-pt-md-none"},j={class:"row items-center justify-end"};function K(d,l,i,e,s,m){return Q(),y("div",h,[a("div",D,[a("div",L,[a("div",M,[a("div",P,[t(u,{name:"o_groups",size:"xs"}),l[4]||(l[4]=a("span",{class:"q-ml-sm text-caption text-weight-medium text-uppercase"},"Leaders & Interns ",-1))]),t(_)]),a("div",B,[a("div",U,[t(c,{filled:"",clearable:"",label:"Name",class:"field-query-control",modelValue:e.model,"onUpdate:modelValue":l[0]||(l[0]=o=>e.model=o),type:"text"},null,8,["modelValue"])]),a("div",k,[t(v,{filled:"",clearable:"",label:"Life Stage",modelValue:e.optionsModel,"onUpdate:modelValue":l[1]||(l[1]=o=>e.optionsModel=o),options:e.options},null,8,["modelValue"])]),a("div",E,[t(c,{filled:"",clearable:"",modelValue:e.dateInput,"onUpdate:modelValue":l[3]||(l[3]=o=>e.dateInput=o),label:"Date Endorsed",onClear:e.dateCleared},{append:r(()=>[t(u,{name:"event",class:"cursor-pointer"},{default:r(()=>[t(b,{cover:""},{default:r(()=>[t(g,{modelValue:e.date,"onUpdate:modelValue":l[2]||(l[2]=o=>e.date=o),mask:"YYYY-MM-DD",range:""},{default:r(()=>[a("div",j,[C(t(f,{label:"Close",color:"primary",flat:""},null,512),[[q]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])])]),t(e.DiscipleshipTable,{columns:e.columnLeaders},{"body-cell-isIntern":r(({props:o})=>[t(e.YesNo,{badge:"",value:o.row?.leaderName.length%2!=0},null,8,["value"])]),"grid-item-isIntern":r(o=>[t(e.YesNo,{value:o.row?.leaderName.length%2!=0},null,8,["value"])]),_:1},8,["columns"])])}const ne=S(Y,[["render",K],["__file","leaders-list.view.vue"]]);export{ne as default};
