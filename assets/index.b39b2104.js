import{I as n}from"./index.0c404f75.js";import{d as o,e,t as s,i as a}from"./vendor.82f1cd3f.js";const c=o({name:"PCIcons",componentName:"ManagePcIcons",components:{Icons:n},setup:()=>()=>e(n,null,null)}),l=o({name:"mobileIconsIcons",componentName:"ManageMobileIconsIcons",setup:()=>()=>e("div",null,[s("我是手机Icon页面")])}),m=o({name:"IconPage",componentName:"ManageIconPage",components:{PCIcons:c,MobileIcons:l},setup:()=>()=>a("isMobile").value?e(l,null,null):e(c,null,null)});export default m;
