import{i as e}from"./index.7b3a7a67.js";const t={test1:{props:{label:"测试文本框",rules:[{required:!0,message:"测试1不能为空"},{type:"number",message:"测试1必须为数字"}]},component:{name:"el-input",attr:{size:"small"}},linkage:t=>{e(t.test1)&&(t.test1=Number(t.test1.replace(/[^\d]/g,"")))}},test9:{props:{label:"测试快捷时间范围",hide:!0},component:{name:"el-date-picker",attr:{type:"datetimerange",shortcuts:[{text:"最近一周",value:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,e]})()},{text:"最近一个月",value:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,e]})()},{text:"最近三个月",value:(()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,e]})()}],rangeSeparator:"至",startPlaceholder:"开始日期",endPlaceholder:"结束日期",align:"right",size:"small"}}},test8:{props:{label:"测试时间范围"},component:{name:"el-time-picker",attr:{"is-range":!0,"arrow-control":!0,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"small"}},linkage:(e,t)=>t.test9.props.hide=!!(Array.isArray(e.test8)&&e.test8.length>0)},test3:{props:{label:"测试单选框",required:!0},component:{name:"el-radio-group",attr:{},slots:[{slot:"是",label:!0},{slot:"否",label:!1}]}},test4:{props:{label:"测试复选框",required:!0},component:{name:"el-checkbox-group",attr:{},slots:[{label:"test1",slot:"测试1"},{label:"test2",slot:"测试2"},{label:"test3",slot:"测试3"}]}},test5:{props:{label:"测试下拉单选",required:!0},component:{name:"el-select",attr:{size:"small"},slots:[{label:"测试1",value:"test1"},{label:"测试2",value:"test2"},{label:"测试3",value:"test3"}]},linkage:(t,l)=>{e(t.test5)?l.test6.component.slots=[{label:"测试4",value:"test4"}]:l.test6.component.slots=[{label:"测试1",value:"test1"},{label:"测试2",value:"test2"}]}},test6:{props:{label:"测试下拉多选",required:!0},component:{name:"el-select",attr:{multiple:!0,size:"small"},slots:[{label:"测试1",value:"test1"},{label:"测试2",value:"test2"}]}},test7:{props:{label:"测试时间点",required:!0},component:{name:"el-time-picker",attr:{"arrow-control":!0,size:"small"}}},test2:{props:{label:"测试图片上传",required:!0},component:{name:"ImageUpload",attr:{action:""}}}};export{t as f};