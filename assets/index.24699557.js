import{d as e,g as l,f as t}from"./vendor.4be1d35c.js";const c=e({name:"TooBarPage",componentName:"ManageToolBarPage",render(){const e=l("ToolBar"),c=(o=this.$message.success,[{icon:"el-icon-edit",title:"编辑",click:()=>o("我是编辑")},{icon:"van-plus",title:"新增",click:()=>o("我是新增")},{icon:"el-icon-search",title:"查找",click:()=>o("我是查找")},{icon:"el-icon-delete",title:"删除",click:()=>o("我是删除")}]);var o;return t("section",{class:"manage-toolbar-page"},[t(e,{barList:c,style:"left: 90%"},null),t(e,{barList:c,direction:"column",style:"left: 40%;"},null),t(e,{barList:c,direction:"column",draggable:!0},null)])}});export default c;
