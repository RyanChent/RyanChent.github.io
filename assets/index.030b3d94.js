import{I as n,M as o}from"./index.f64072ae.js";import{d as e,e as s,i as a}from"./vendor.950edac8.js";const l=e({name:"PCIcons",componentName:"ManagePcIcons",components:{Icons:n},setup:()=>()=>s(n,null,null)}),c=e({name:"mobileIconsIcons",componentName:"ManageMobileIconsIcons",components:{MobileIcons:o},setup:()=>()=>s(o,null,null)});const m=e({name:"IconPage",componentName:"ManageIconPage",components:{PCIcons:l,MobileIcons:c},setup:()=>()=>a("isMobile").value?s(c,null,null):s(l,null,null)});export default m;
