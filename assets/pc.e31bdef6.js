import{t as e}from"./table.32bd42fa.js";import{d as t,g as a,w as n,r as l,c as i,B as o,F as s}from"./vendor.7bcbf4d5.js";const p=t({name:"ArrayTable",componentName:"ManageArrayTable",setup(){const t=[{type:"expand",content:"expand"},{type:"selection"},{type:"index",label:"序号",width:70},{label:"测试列1",prop:"test1"},{label:"测试列2",prop:"test2"},{label:"测试列3",prop:"test3"},{label:"测试列4",content:({row:e})=>i("span",null,[o("我是插槽显示的"),e.test1])},{type:"action",label:"操作",content:({row:e})=>i(s,null,[i(l("el-button"),{type:"primary",size:"mini",plain:!0},{default:()=>[o("新增")]}),i(l("el-button"),{type:"success",size:"mini",plain:!0},{default:()=>[o("查看")]}),i(l("el-button"),{type:"warning",size:"mini",plain:!0},{default:()=>[o("编辑")]}),i(l("el-button"),{type:"danger",size:"mini",plain:!0},{default:()=>[o("删除")]})])}],p=a(e.content.slice(0,10)),r=a({pageSize:10,currentPage:1,total:e.content.length});return n((()=>r.value),(t=>{const{currentPage:a,pageSize:n}=t,l=(a-1)*n,i=a*n;p.value=e.content.slice(l,Math.min(i,e.content.length))}),{deep:!0}),{columns:t,data:p,pagination:r}},render(){const e=l("Table");return i(e,{columns:this.columns,border:!0,stripe:!0,showRightNav:!0,showLeftNav:!0,data:this.data,"onUpdate:data":e=>this.data=e,pagination:this.pagination,"onUpdate:pagination":e=>this.pagination=e},{expand:({row:e})=>i(l("el-form"),{"label-position":"left"},{default:()=>[i(l("el-form-item"),{label:"测试列1："},{default:()=>[i("span",null,[e.test1])]}),i(l("el-form-item"),{label:"测试列2："},{default:()=>[i("span",null,[e.test2])]}),i(l("el-form-item"),{label:"测试列3："},{default:()=>[i("span",null,[e.test3])]})]})})}});export default p;
