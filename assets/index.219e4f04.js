import{f as e}from"./formDemo.c24296ae.js";import{d as o,c as a,r as t,g as m,f as l,F as s,C as n,z as r}from"./vendor.0ef042a4.js";import"./index.a0458643.js";const d=o({name:"PCFormPage",componentName:"ManagePCFormPage",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup:(o,{emit:m})=>({model:a({get:()=>o.modelValue,set(e){m("update:modelValue",e)}}),schema:t(e),formMethods:t({})}),render(){const e=m("Form");return l(e,{model:this.model,"onUpdate:model":e=>this.model=e,schema:this.schema,"onUpdate:schema":e=>this.schema=e,dynamic:!0,chaseError:!0,onFormMethods:e=>this.formMethods=e},{footer:()=>l(s,null,[l(m("el-button"),{type:"success",icon:"el-icon-check",plain:!0,round:!0,onClick:()=>{this.formMethods.validateChaseError(((e,o)=>{console.log(e,o,"在这里可以调接口")}))}},{default:()=>[n("提交")]})])})}}),u=o({name:"MobileFormPage",componentName:"ManageMobileFormPage",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup:()=>({}),render:()=>l("div",null,[n("123")])});const c=o({name:"FormPage",componentName:"ManageFormPage",components:{PCForm:d,MobileForm:u},setup(){const e=t({test4:[],test6:[],test2:[]}),o=r("isMobile");return()=>o.value?l(u,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o},null):l(d,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o},null)}});export default c;