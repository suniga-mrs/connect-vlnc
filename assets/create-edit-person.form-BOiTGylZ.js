import{f as j,Q as b,a as A}from"./QCheckbox-DkuAQFmP.js";import{Q}from"./QBtn-CrEuw8QQ.js";import{Q as k,a as F,C as T}from"./QPopupProxy-5vYV1T1r.js";import{h as D,v as K,Q as q}from"./vm-CKbHu3uS.js";import{a as L,Q as W}from"./QOptionGroup-CiHK6OLj.js";import{c as G,r as p,z as H,a3 as z,a4 as Y,v as J,h as X,g as Z,u as B,x as _,a5 as $,i as ee,a6 as oe,H as le,a as E,I as te,_ as ae,K as ne,O as re,N as f,W as i,M as a,P as ie,y as O}from"./index-BykOfNXl.js";const se=G({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(c,{slots:e,emit:v}){const o=Z(),s=p(null);let u=0;const l=[];function V(t){const m=typeof t=="boolean"?t:c.noErrorFocus!==!0,y=++u,h=(n,r)=>{v(`validation${n===!0?"Success":"Error"}`,r)},N=n=>{const r=n.validate();return typeof r.then=="function"?r.then(d=>({valid:d,comp:n}),d=>({valid:!1,comp:n,err:d})):Promise.resolve({valid:r,comp:n})};return(c.greedy===!0?Promise.all(l.map(N)).then(n=>n.filter(r=>r.valid!==!0)):l.reduce((n,r)=>n.then(()=>N(r).then(d=>{if(d.valid===!1)return Promise.reject(d)})),Promise.resolve()).catch(n=>[n])).then(n=>{if(n===void 0||n.length===0)return y===u&&h(!0),!0;if(y===u){const{comp:r,err:d}=n[0];if(d!==void 0&&console.error(d),h(!1,r),m===!0){const C=n.find(({comp:w})=>typeof w.focus=="function"&&K(w.$)===!1);C!==void 0&&C.comp.focus()}}return!1})}function x(){u++,l.forEach(t=>{typeof t.resetValidation=="function"&&t.resetValidation()})}function S(t){t!==void 0&&B(t);const m=u+1;V().then(y=>{m===u&&y===!0&&(c.onSubmit!==void 0?v("submit",t):t!==void 0&&t.target!==void 0&&typeof t.target.submit=="function"&&t.target.submit())})}function M(t){t!==void 0&&B(t),v("reset"),_(()=>{x(),c.autofocus===!0&&c.noResetFocus!==!0&&g()})}function g(){j(()=>{if(s.value===null)return;const t=s.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),m=>m.tabIndex!==-1);t?.focus({preventScroll:!0})})}H($,{bindComponent(t){l.push(t)},unbindComponent(t){const m=l.indexOf(t);m!==-1&&l.splice(m,1)}});let P=!1;return z(()=>{P=!0}),Y(()=>{P===!0&&c.autofocus===!0&&g()}),J(()=>{c.autofocus===!0&&g()}),Object.assign(o.proxy,{validate:V,resetValidation:x,submit:S,reset:M,focus:g,getValidationComponents:()=>l}),()=>X("form",{class:"q-form",ref:s,onSubmit:S,onReset:M},D(e.default))}});function de(){return ee(oe)}const ue=le({__name:"create-edit-person.form",setup(c,{expose:e}){e();const v={firstName:null,lastName:null,age:null,accept:!1,date:null,mobileNumber:null,emailAddress:null,homeAddress:null,group:[],lifeStage:null,gender:null,civiliStatus:null,facebook:null},o=p(v),s=de(),u=p(null),l=p(null),V=p(null),x=p(!1),S=p(null),M=p(null),g=["Kids","Campus","Single","Single Parent","Couples","Senior"],P=["Male","Female"],t=["Married","Single","Single Parent","Separated","Widowed"],m=[{label:"9AM Service",value:"op1"},{label:"11AM Service",value:"op2"},{label:"2PM Service",value:"op3"},{label:"4PM Service",value:"op4"},{label:"6PM Service",value:"op5"}],y=E(()=>S.value),h=E(()=>M.value);function N(){x.value!==!0?s.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):s.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})}function U(){u.value=null,l.value=null,V.value=null,x.value=!1}const n=p(!1),r=te();function d(){n.value=!0,setTimeout(()=>{r.push({name:"person_details",params:{personId:C()}}),n.value=!1},3e3)}function C(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(R){const I=Math.random()*16|0;return(R==="x"?I:I&3|8).toString(16)})}const w={initialValues:v,formModel:o,$q:s,firstName:u,lastName:l,age:V,accept:x,dateConnected:S,birthdate:M,lifeStageOptions:g,genderOptions:P,civilStatus:t,options:m,dateConnectedText:y,birthdateText:h,onSubmit:N,onReset:U,isLoading:n,router:r,goToProfilePage:d,generateGUID:C};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}),me={class:"row items-center justify-end"},fe={class:"row items-center justify-end"},ce={class:"row"},pe={class:"col-2"},be={align:"right"};function ve(c,e,v,o,s,u){return ne(),re(se,{onSubmit:o.onSubmit,onReset:o.onReset,class:"q-gutter-md"},{default:f(()=>[e[17]||(e[17]=i("p",{class:"text-weight-bold text-blue-grey-10"},"Connect Information",-1)),a(b,{filled:"",modelValue:o.formModel.firstName,"onUpdate:modelValue":e[0]||(e[0]=l=>o.formModel.firstName=l),label:"First name",dense:""},{error:f(()=>e[15]||(e[15]=[ie(" Please type something here ")])),_:1},8,["modelValue"]),a(b,{filled:"",modelValue:o.formModel.lastName,"onUpdate:modelValue":e[1]||(e[1]=l=>o.formModel.lastName=l),label:"Last name",dense:""},null,8,["modelValue"]),a(A,{modelValue:o.formModel.lifeStage,"onUpdate:modelValue":e[2]||(e[2]=l=>o.formModel.lifeStage=l),filled:"",options:o.lifeStageOptions,label:"Life Stage",dense:""},null,8,["modelValue"]),a(b,{filled:"",modelValue:o.dateConnectedText,"onUpdate:modelValue":e[4]||(e[4]=l=>o.dateConnectedText=l),mask:"date",label:"Date Connected",dense:""},{append:f(()=>[a(q,{name:"event",class:"cursor-pointer"},{default:f(()=>[a(k,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:f(()=>[a(F,{modelValue:o.dateConnected,"onUpdate:modelValue":e[3]||(e[3]=l=>o.dateConnected=l),"today-btn":"","years-in-month-view":"",flat:""},{default:f(()=>[i("div",me,[O(a(Q,{label:"Close",color:"primary",flat:""},null,512),[[T]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e[18]||(e[18]=i("p",{class:"text-weight-bold text-blue-grey-10"},"Personal Information",-1)),a(b,{filled:"",modelValue:o.birthdateText,"onUpdate:modelValue":e[6]||(e[6]=l=>o.birthdateText=l),mask:"date",label:"Birthdate",dense:""},{append:f(()=>[a(q,{name:"event",class:"cursor-pointer"},{default:f(()=>[a(k,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:f(()=>[a(F,{modelValue:o.birthdate,"onUpdate:modelValue":e[5]||(e[5]=l=>o.birthdate=l),"years-in-month-view":""},{default:f(()=>[i("div",fe,[O(a(Q,{label:"Close",color:"primary",flat:""},null,512),[[T]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(A,{modelValue:o.formModel.gender,"onUpdate:modelValue":e[7]||(e[7]=l=>o.formModel.gender=l),filled:"",options:o.genderOptions,label:"Gender",dense:""},null,8,["modelValue"]),a(A,{modelValue:o.formModel.civiliStatus,"onUpdate:modelValue":e[8]||(e[8]=l=>o.formModel.civiliStatus=l),filled:"",options:o.civilStatus,label:"Civil Status",dense:""},null,8,["modelValue"]),a(b,{modelValue:o.formModel.homeAddress,"onUpdate:modelValue":e[9]||(e[9]=l=>o.formModel.homeAddress=l),filled:"",label:"Home Address",dense:""},null,8,["modelValue"]),e[19]||(e[19]=i("p",{class:"text-weight-bold text-blue-grey-10"},"Contact Information",-1)),a(b,{modelValue:o.formModel.mobileNumber,"onUpdate:modelValue":e[10]||(e[10]=l=>o.formModel.mobileNumber=l),filled:"",label:"Mobile Number",dense:""},null,8,["modelValue"]),a(b,{modelValue:o.formModel.emailAddress,"onUpdate:modelValue":e[11]||(e[11]=l=>o.formModel.emailAddress=l),filled:"",label:"Email Address",dense:"",rules:["email"]},null,8,["modelValue"]),e[20]||(e[20]=i("p",{class:"text-weight-bold text-blue-grey-10"},"Social Media Contact",-1)),a(b,{modelValue:o.formModel.facebook,"onUpdate:modelValue":e[12]||(e[12]=l=>o.formModel.facebook=l),filled:"",label:"Facebook Name/Email",dense:""},null,8,["modelValue"]),e[21]||(e[21]=i("p",{class:"text-weight-bold text-blue-grey-10"},"Service/s",-1)),a(L,{modelValue:o.formModel.group,"onUpdate:modelValue":e[13]||(e[13]=l=>o.formModel.group=l),options:o.options,color:"primary",type:"checkbox",inline:"",dense:""},null,8,["modelValue"]),i("div",ce,[i("div",pe,[a(W,{color:"blue",modelValue:o.formModel.accept,"onUpdate:modelValue":e[14]||(e[14]=l=>o.formModel.accept=l)},null,8,["modelValue"])]),e[16]||(e[16]=i("div",{class:"col-10 text-blue-grey-10"},[i("p",{class:"text-weight-bold q-ma-none"},"I agree to the data privacy statement"),i("p",{class:"text-caption"}," We are committed to protecting your personal data and ensuring its confidentiality. Any information collected will be used solely for the purposes outlined and will not be shared with third parties without your explicit consent, except as required by law. We employ strict security measures to safeguard your data and comply with all applicable data protection regulations. By providing your information, you acknowledge and agree to this policy. ")],-1))]),i("div",be,[a(Q,{label:"Submit",type:"submit",color:"primary",onClick:o.goToProfilePage,loading:o.isLoading},null,8,["loading"]),a(Q,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})}const we=ae(ue,[["render",ve],["__file","create-edit-person.form.vue"]]);export{we as C,se as Q};