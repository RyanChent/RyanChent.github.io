import{T as e}from"./index.e7a460c1.js";import{d as a,r as s,f as l,C as o}from"./vendor.0ef042a4.js";const d=a({name:"TreePage",componentName:"ManageTreePage",components:{Tree:e},setup:()=>({treeData:s([{id:1,label:"节点1",children:[{id:2,label:"节点2"},{id:3,label:"节点3"}]},{id:4,label:"节点4"}])}),render(){return l("div",{class:"manage-pc-tree-demo"},[l("section",{class:"demo-panel"},[l("header",null,[o("带搜索树")]),l(e,{data:this.treeData,"node-key":"id","show-checkbox":!0,"show-search":!0},null)]),l("section",{class:"demo-panel"},[l("header",null,[o("单选树")]),l(e,{data:this.treeData,"node-key":"id","show-checkbox":!0,single:!0,"show-search":!0},null)]),l("section",{class:"demo-panel"},[l("header",null,[o("节点可编辑树")]),l(e,{data:this.treeData,"node-key":"id","show-checkbox":!0,editable:!0,"show-search":!0},null)]),l("section",{class:"demo-panel"},[l("header",null,[o("搜索，编辑，拖拽")]),l(e,{data:this.treeData,"node-key":"id","show-checkbox":!0,editable:!0,"show-search":!0,draggable:!0},null)])])}});export default d;