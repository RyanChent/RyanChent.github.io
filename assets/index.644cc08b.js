import{d as n,e as o,b as e,m as s,i as a}from"./vendor.6d312b35.js";const l=n({name:"PCIcons",componentName:"ManagePcIcons",setup(){const n=o("Icons");return()=>e(n,null,null)}}),c=n({name:"mobileIconsIcons",componentName:"ManageMobileIconsIcons",setup:()=>()=>e("div",null,[s("我是手机Icon页面")])}),m=n({name:"IconPage",componentName:"ManageIconPage",components:{PCIcons:l,MobileIcons:c},setup:()=>()=>a("isMobile").value?e(c,null,null):e(l,null,null)});export default m;
