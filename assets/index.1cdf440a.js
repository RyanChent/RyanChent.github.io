import{d as e,K as a,r as s,g as t,f as n}from"./vendor.0ef042a4.js";const r=e({name:"TransferPage",componentName:"ManagePCTransferPage",setup:()=>({data:a(new Array(12).fill(null).map(((e,a)=>({key:a+1,label:`节点${a+1}`,disabled:a%2==0})))),value:s([])}),render(){const e=t("Transfer");return n(e,{selectedKeys:this.value,"onUpdate:selectedKeys":e=>this.value=e,data:this.data,buttonTexts:["移除","添加"]},null)}});export default r;