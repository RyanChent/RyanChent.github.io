import{d as e,c as t,f as s,e as a,t as i,l,i as o,a as n,r as c}from"./vendor.5143fe1e.js";const p=e({name:"PCSteps",componentName:"ManagePCSteps",props:{steps:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},setup:(e,{emit:s})=>({active:t({get:()=>e.modelValue,set(e){s("update:modelValue",e)}})}),render(){let e;const t=s("Steps");return a(t,{steps:this.steps,"align-center":!0,"finish-status":"success",active:this.active,"onUpdate:active":e=>this.active=e,class:"manage-pc-steps-demo",confirm:()=>this.$message.success("我到底了")},"function"==typeof(o=e=new Array(this.steps.length).fill(null).reduce(((e,t,s)=>(e[`step${s}`]=()=>a("div",{key:s,class:"test-panel"},[i("测试面板"),s]),e)),{}))||"[object Object]"===Object.prototype.toString.call(o)&&!l(o)?e:{default:()=>[e]});var o}});const r=e({name:"MobileStepsPage",componentName:"ManageMobileSteps",props:{modelValue:{type:Number,default:0},steps:{type:Array,default:()=>[]}},setup:(e,{emit:s})=>({active:t({get:()=>e.modelValue,set(e){s("update:modelValue",e)}})}),render(){let e;const t=s("MobileSteps");return a(t,{active:this.active,"onUpdate:active":e=>this.active=e,steps:this.steps.slice(0,3),class:"manage-mobile-steps-demo",confirm:()=>{this.$toast.success("我到底了")}},"function"==typeof(o=e=new Array(3).fill(null).reduce(((e,t,s)=>(e[`step${s}`]=()=>a("div",{key:s,class:"test-panel"},[i("测试面板"),s]),e)),{}))||"[object Object]"===Object.prototype.toString.call(o)&&!l(o)?e:{default:()=>[e]});var o}});const u=e({name:"StepsPage",componentName:"ManageStepsPage",setup(){const e=o("isMobile");return{active:n(0),steps:c([{title:"自定义图标",icon:()=>a(s("van-icon"),{name:"info-o"},null),description:"用了vant的图标"},{title:()=>a("span",{style:"color: #606266"},[i("自定义标题")]),icon:"el-icon-edit",description:()=>a("span",{style:"color: #909299"},[i("自定义描述")])},{title:"自定义描述",icon:()=>a(s("van-icon"),{name:"gem-o"},null),description:()=>a("span",{style:"color: #409eff"},[i("自定义描述")])},{title:"没有描述",icon:"el-icon-message"},{title:"没有描述图标"}]),isMobile:e}},render(){return this.isMobile?a(r,{modelValue:this.active,"onUpdate:modelValue":e=>this.active=e,steps:this.steps},null):a(p,{modelValue:this.active,"onUpdate:modelValue":e=>this.active=e,steps:this.steps},null)}});export default u;
