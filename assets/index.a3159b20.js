import{d as a,g as e,r as l,c as t,y as d,C as i}from"./vendor.dfd13695.js";const o=a({name:"DialogPage",componentName:"ManageDialogPage",setup:()=>({hasMaxMin:e(!1),ordinary:e(!1),dragModal:e(!1)}),render(){const a=l("Dialogs");return t("section",{class:"dialogs-page-pc"},[t(l("el-button"),{onClick:()=>{this.hasMaxMin=!0}},{default:()=>[d("打开含最大化最小化弹窗")]}),t(a,i({modelValue:this.hasMaxMin,"onUpdate:modelValue":a=>this.hasMaxMin=a},{title:"最大最小化弹窗",showMinimize:!0,showMaximize:!0}),{default:()=>[t("div",null,[d("我是最大最小化弹窗")])]}),t(l("el-button"),{onClick:()=>{this.ordinary=!0}},{default:()=>[d("打开弹窗")]}),t(a,i({modelValue:this.ordinary,"onUpdate:modelValue":a=>this.ordinary=a},{title:"普通弹窗"}),{default:()=>[t("div",null,[d("我是普通弹窗")])]}),t(l("el-button"),{onClick:()=>{this.dragModal=!0}},{default:()=>[d("打开能拖拽的弹窗")]}),t(a,i({modelValue:this.dragModal,"onUpdate:modelValue":a=>this.dragModal=a},{title:"能拖拽的弹窗",dragging:!0}),{default:()=>[t("div",null,[d("我是能拖拽的弹窗")])]})])}});export default o;