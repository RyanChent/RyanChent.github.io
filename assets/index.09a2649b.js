import{t as e,u as s,i as n,N as a,_ as l,s as i}from"./index.e1d53ec2.js";import{d as o,c as t,b as r,m as u,e as p,k as c,a as g,i as d,r as h,w as m,t as b,j as v}from"./vendor.6d312b35.js";const f=o({name:"PCLogin",componentName:"ManagePCLogin",props:{tab:String,userObj:{type:Object,default:()=>({})},logining:{type:Boolean,default:!1}},setup:(e,{emit:s})=>({language:t({get:()=>e.tab,set(e){s("update:tab",e)}}),user:t({get:()=>e.userObj,set(e){s("update:userObj",e)}}),keyupToLogin:e=>{e.preventDefault(),e.stopPropagation(),e.code.toLowerCase().includes("enter")&&s("login")}}),render(){let s;return r("section",{class:"manage-pc-login"},[r("header",{class:"login-header"},[r("img",{src:"/assets/logo.png"},null),r("span",null,[u("vite-backen-admin")])]),r("div",{class:"login-form"},[r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("div",{class:"row"},[r(p("el-tabs"),{modelValue:this.language,"onUpdate:modelValue":e=>this.language=e,onTabClick:()=>this.$emit("tabClick")},{default:()=>[r(p("el-tab-pane"),{label:e("zh-cn"),name:"zh-cn"},null),r(p("el-tab-pane"),{label:e("en"),name:"en"},null)]})]),r("div",{class:"row"},[r(p("el-input"),{"prefix-icon":"el-icon-s-custom",modelValue:this.user.username,"onUpdate:modelValue":e=>this.user.username=e,onKeyup:this.keyupToLogin,placeholder:e("please.input.something")+e("username")},null)]),r("div",{class:"row"},[r(p("el-input"),{"prefix-icon":"el-icon-lock",modelValue:this.user.passwords,"onUpdate:modelValue":e=>this.user.passwords=e,placeholder:e("please.input.something")+e("password"),onKeyup:this.keyupToLogin,"show-password":!0},null)]),r("div",{class:"row"},[r(p("el-input"),{"prefix-icon":"el-icon-picture-outline-round",modelValue:this.user.verify,"onUpdate:modelValue":e=>this.user.verify=e,onKeyup:this.keyupToLogin,placeholder:e("please.input.something")+e("verify")},null)]),r("div",{class:"row"},[r(p("el-button"),{loading:this.logining,onClick:()=>this.$emit("login")},(n=s=e("login"),"function"==typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!c(n)?s:{default:()=>[s]}))])])]);var n}});function w(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!c(e)}const y=o({name:"mobileLogin",componentName:"ManageMobileLogin",props:{tab:String,userObj:{type:Object,default:()=>({})},logining:{type:Boolean,default:!1}},setup:(e,{emit:s})=>({language:t({get:()=>e.tab,set(e){s("update:tab",e)}}),user:t({get:()=>e.userObj,set(e){s("update:userObj",e)}}),password:g("password")}),render(){let s,n;return r("section",{class:"manage-mobile-login"},[r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("span",{class:"shinning"},null),r("header",{class:"login-header"},[r("img",{src:"/assets/logo.png"},null),r("span",null,[u("vite-backen-admin")])]),r("div",{class:"login-form"},[r("div",{class:"row"},[r(p("van-radio-group"),{modelValue:this.language,"onUpdate:modelValue":e=>this.language=e,onChange:()=>this.$emit("tabClick"),direction:"horizontal"},{default:()=>[r(p("van-radio"),{name:"zh-cn"},w(s=e("zh-cn"))?s:{default:()=>[s]}),r(p("van-radio"),{name:"en"},w(n=e("en"))?n:{default:()=>[n]})]})]),r("div",{class:"row",style:"margin-top: 20px;"},[r(p("van-field"),{"left-icon":"user-circle-o",clearable:!0,colon:!0,center:!0,required:!0,modelValue:this.user.username,"onUpdate:modelValue":e=>this.user.username=e,placeholder:e("please.input.something")+e("username"),onClear:()=>this.user.username=""},null)]),r("div",{class:"row"},[r(p("van-field"),{clearable:!0,colon:!0,center:!0,required:!0,modelValue:this.user.passwords,"onUpdate:modelValue":e=>this.user.passwords=e,type:this.password,placeholder:e("please.input.something")+e("password"),onClear:()=>this.user.passwords=""},{"left-icon":()=>r(p("van-icon"),{name:"password"===this.password?"closed-eye":"eye-o",onTouchstart:e=>{e.stopPropagation(),this.password="password"===this.password?"text":"password"}},null)})]),r("div",{class:"row"},[r(p("van-field"),{"left-icon":"qr",clearable:!0,colon:!0,center:!0,required:!0,modelValue:this.user.verify,"onUpdate:modelValue":e=>this.user.verify=e,placeholder:e("please.input.something")+e("verify"),onClear:()=>this.user.verify=""},null)]),r("div",{class:"row"},[r(p("van-button"),{color:"linear-gradient(102deg,#50bad1 0%,#00779f 100%),linear-gradient(#00789f,#00789f)",text:e("login"),round:!0,loading:this.logining,"loading-text":"登陆中...",icon:"sign",onTouchstart:()=>this.$emit("login")},null)])])])}});const j=o({name:"Login",componentName:"ManageLogin",components:{pcLogin:f,mobileLogin:y},setup(){const o=d("isMobile"),{proxy:t}=v(),r=t.$store,u=s(),p=g(r.state.lang.language),c=g(!1),b=h({username:"vite-manage",passwords:"vite-manage",verify:""});return m((()=>[p.value,u.path]),(()=>{i(e(u.meta.title))})),{tabClick:()=>r.dispatch("setLanguage",p.value),tab:p,userObj:b,userLogin:async()=>{let s="";return n(b.username)?n(b.passwords)?(c.value=!0,await r.dispatch("login",b),c.value=!1,t.$router.push("/"),void t.$nextTick((()=>{setTimeout((()=>{o.value?a({type:"success",message:`${e("login.success")}，${e("welcome")}`}):l({title:e("login.success"),message:`${e("login.success")}，${e("welcome")}`,type:"success"})}),1e3)}))):(s=e("please.input.something")+e("password"),void(o.value?t.$toast.fail(s):t.$message.error(s))):(s=e("please.input.something")+e("username"),void(o.value?t.$toast.fail(s):t.$message.error(s)))},isMobile:o,logining:c}},render(){return this.isMobile?r(p("mobile-login"),b({userObj:this.userObj,tab:this.tab,onTabClick:this.tabClick,onLogin:this.userLogin,logining:this.logining},{"onUpdate:userObj":e=>this.userObj=e,"onUpdate:tab":e=>this.tab=e}),null):r(p("pc-login"),b({userObj:this.userObj,tab:this.tab,onTabClick:this.tabClick,onLogin:this.userLogin,logining:this.logining},{"onUpdate:userObj":e=>this.userObj=e,"onUpdate:tab":e=>this.tab=e}),null)}});export default j;
