var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;import{d as i,g as r,c,r as h,A as u,B as p,f as d,G as v}from"./vendor.f2f3f876.js";import{t as w,p as m,d as g,c as S,a as f}from"./index.6340a7ca.js";const y=i({name:"Profile",componentName:"ManageMobileProfile",props:{user:{type:Object,default:()=>({})},modelValue:Boolean},setup:()=>({showPreview:r(!1)}),render(){return c("header",{onClick:e=>{e.stopPropagation(),this.$emit("update:modelValue",!0)}},[c(h("van-image-preview"),{images:[this.user.avatar],show:this.showPreview,"onUpdate:show":e=>this.showPreview=e,showIndex:!1},null),c(h("van-image"),{width:70,fit:"cover",height:70,src:this.user.avatar,radius:19,style:"border: solid 1px #d9d9d9",onClick:e=>{e.stopPropagation(),this.showPreview=!0}},{loading:()=>c(h("van-loading"),{type:"spinner",size:"20"},null),error:()=>c("span",null,[u("加载失败")])}),c("div",{class:"desc"},[c("p",null,[c("b",null,[this.user.username])]),c("p",null,[u("邮箱："),this.user.email])]),c(h("van-icon"),{name:"arrow"},null)])}}),b=()=>{const e=r(!1),t=r(""),o=r([]);return{showActionSheet:e,actions:o,touchToShowAction:(n,l,a)=>{n.stopPropagation(),o.value=l,t.value=a,e.value=!0},tag:t}},U=i({name:"userDetail",componentName:"ManageUserDetail",props:{user:{type:Object,default:()=>({})},modelValue:{type:Boolean,default:!1}},setup:(e,{emit:t})=>((e,t)=>{const{actions:o,touchToShowAction:n,tag:l,showActionSheet:a}=b(),s=r(g(p(e.user))),i=d({get:()=>e.modelValue,set(e){t("update:modelValue",e)}});return{copyUser:s,back:i,actions:o,ActionSelect:(e,o,n)=>{"role"===l.value&&e.action!==s.value.role&&(s.value.role=e.action,n("部分权限改变"),t("update:user",s.value))},touchToShowAction:n,tag:l,showActionSheet:a}})(e,t),render(){return c("section",{class:"user-page-detail"},[c(h("van-cell"),{center:!0,title:"头像","is-link":!0},{default:()=>c(h("van-image"),{width:70,fit:"cover",height:70,src:this.copyUser.avatar,radius:19,style:"border: solid 1px #d9d9d9"},{loading:()=>c(h("van-loading"),{type:"spinner",size:"20"},null),error:()=>c("span",null,[u("加载失败")])})}),c(h("van-cell"),{center:!0,title:"名字",value:this.copyUser.username,"is-link":!0},null),c(h("van-cell"),{center:!0,title:"角色",value:w(this.copyUser.role),"is-link":!0,onClick:e=>{this.touchToShowAction(e,[{name:w("admin"),action:"admin"},{name:w("customer"),action:"customer"}],"role")}},null),c(h("van-cell"),{center:!0,title:"个性签名",value:this.copyUser.signature,"is-link":!0},null),c(h("van-cell"),{center:!0,title:"邮箱",value:this.copyUser.email,"is-link":!0},null),c(h("van-cell"),{center:!0,title:"创建日期",value:m(this.copyUser.createDate)},null),c(h("van-cell"),{center:!0,title:"修改日期",value:m(this.copyUser.updateDate)},null),c(h("van-button"),{plain:!0,hairline:!0,block:!0,round:!0,type:"primary",style:{margin:"40px 16px 0",width:"calc(100% - 32px)"},onClick:()=>this.back=!1},{default:()=>[u("返回")]}),c(h("van-action-sheet"),{show:this.showActionSheet,"onUpdate:show":e=>this.showActionSheet=e,position:"bottom",actions:this.actions,"cancel-text":"返回","close-on-popstate":!0,"close-on-click-action":!0,onSelect:(e,t)=>this.ActionSelect(e,t,this.$toast)},null)])}});const k=i({name:"UserPageView",componentName:"ManageMobileUser",components:{profile:y,UserDetail:U,ColorPicker:i(S)},setup(e,{emit:i}){const{showShare:c,user:h,options:u,ShareSelect:p}=f(e,i),{actions:d,touchToShowAction:v,tag:w,showActionSheet:m}=b();return{showShare:c,options:u,user:h,showUserInfo:r(!1),showActionSheet:m,actions:d,tag:w,touchToShowAction:v,ActionSelect:(e,i)=>{var r,c;"lang"===w.value&&h.value.lang!==e.action&&(h.value=(r=((e,t)=>{for(var o in t||(t={}))l.call(t,o)&&s(e,o,t[o]);if(n)for(var o of n(t))a.call(t,o)&&s(e,o,t[o]);return e})({},h.value),c={lang:e.action},t(r,o(c))))},ShareSelect:p}},render(){return c("main",null,[c("section",{class:"user-page",style:{display:this.showUserInfo?"none":"block"}},[c(y,{user:this.user,modelValue:this.showUserInfo,"onUpdate:modelValue":e=>this.showUserInfo=e},null),c(h("van-cell"),{center:!0,title:"多语言","is-link":!0,onClick:e=>this.touchToShowAction(e,[{name:w("zh-cn"),action:"zh-cn"},{name:w("en"),action:"en"}],"lang")},null),c(h("van-cell"),{center:!0,title:"主题色",class:"theme-color"},{default:()=>[c(S,null,null)]}),c(h("van-cell"),{center:!0,title:"分享",onClick:()=>this.showShare=!0,"is-link":!0},null),c(h("van-cell"),{center:!0,title:"建议与反馈","is-link":!0},null),c(h("van-cell"),{center:!0,title:"退出登录","is-link":!0,to:"/login"},null),c(h("van-notice-bar"),{scrollable:!0,text:"移动端目前正在加紧速度开发中，敬请期待。",style:"margin-top: 30px"},null),c(h("van-share-sheet"),{show:this.showShare,"onUpdate:show":e=>this.showShare=e,title:"立即分享给好友",options:this.options,onSelect:this.ShareSelect},null),c(h("van-action-sheet"),{show:this.showActionSheet,"onUpdate:show":e=>this.showActionSheet=e,actions:this.actions,"cancel-text":"返回","close-on-popstate":!0,"close-on-click-action":!0,onSelect:this.ActionSelect},null)]),c(v,{"enter-active-class":"animated fadeIn"},{default:()=>[this.showUserInfo&&c(h("user-detail"),{user:this.user,"onUpdate:user":e=>this.user=e,modelValue:this.showUserInfo,"onUpdate:modelValue":e=>this.showUserInfo=e},null)]})])}});export default k;
