"use strict";(self["webpackChunkshiftadmin"]=self["webpackChunkshiftadmin"]||[]).push([[45,176],{31368:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var o=n(56768),a=n(24232),l=n(13892),i=n(4189),r=n(91606),c=n(30697),s=n(16009),u=n(93745),d=n(68272),h=n(74025),p=n(91772),f=n(79669),g=n(69915),v=n(57254),m=n(4913),y=n(97505),b=n(88249),k=n(55263),C=n(20105),w=n(51146),N=n(10381),S=n(76686);const j={key:1,class:"w-100"},V={class:"pa-5 d-flex flex-column",style:{height:"1px",overflow:"auto","flex-grow":"1"}},O={key:0},D=["href"],_=["href"],F=["href"],x=["href"],P={key:5,class:"mx-5"},A={key:6},E=["href"],L=["src"],X={key:8},T=["src"],W=["innerHTML"],B={key:11},I={key:12},K=["innerHTML"],H={key:0};function $(e,t,n,$,R,M){const Q=(0,o.g2)("ListButtons"),U=(0,o.g2)("vue-json-pretty"),J=(0,o.g2)("list-page");return(0,o.uX)(),(0,o.Wv)(i.J,{class:"d-flex flex-column"},{default:(0,o.k6)((()=>[(0,o.bF)(w.i,{color:"secondary",class:"w-100 d-flex"},{default:(0,o.k6)((()=>[e.back?((0,o.uX)(),(0,o.Wv)(l.D,{key:0,title:"Back",icon:"mdi-arrow-left",onClick:M.goBack,color:"grey-lighten-1",variant:"text"},null,8,["onClick"])):(0,o.Q3)("",!0),"summary"===e.tab?((0,o.uX)(),(0,o.CE)("span",j,[(0,o.bF)(l.D,{title:"Edit",icon:"mdi-pencil",color:"grey-lighten-1",variant:"text",onClick:M.edit},null,8,["onClick"]),e.data["deleted"]>0?((0,o.uX)(),(0,o.Wv)(l.D,{key:0,title:"Restore",icon:"mdi-delete-restore",color:"success",onClick:M.restoreItem,variant:"text"},null,8,["onClick"])):((0,o.uX)(),(0,o.Wv)(l.D,{key:1,title:"Delete",icon:"mdi-delete",color:"grey-lighten-1",onClick:M.deleteItem,variant:"text"},null,8,["onClick"])),(0,o.bF)(l.D,{title:"Logs",icon:"mdi-text",color:"grey-lighten-1",onClick:M.openLogs,variant:"text"},null,8,["onClick"]),e.data.admin>1?((0,o.uX)(),(0,o.Wv)(l.D,{key:2,title:"Privileges",icon:"mdi-account-key",color:"grey-lighten-1",onClick:M.openPrivileges,variant:"text"},null,8,["onClick"])):(0,o.Q3)("",!0),M.buttons.length?((0,o.uX)(),(0,o.Wv)(b.q,{key:3},{activator:(0,o.k6)((({props:e})=>[(0,o.bF)(l.D,(0,o.v6)(e,{icon:"mdi-dots-vertical",color:"grey-lighten-1",variant:"text"}),null,16)])),default:(0,o.k6)((()=>[(0,o.bF)(g.x8,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(M.buttons,((e,t)=>((0,o.uX)(),(0,o.Wv)(v.g,{key:t,value:t,onClick:t=>M.customButton(e),disabled:M.checkDisabled(e)},{default:(0,o.k6)((()=>[(0,o.bF)(m.U,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(e.label),1)])),_:2},1024)])),_:2},1032,["value","onClick","disabled"])))),128))])),_:1})])),_:1})):(0,o.Q3)("",!0)])):((0,o.uX)(),(0,o.Wv)(Q,{key:2,selected:e.selected,section:e.tab,onChangeFields:M.changeFields,parentsection:e.section,parentid:e.id,sortable:M.isSortable,onAction:M.actionHandler,data:e.buttonData},null,8,["selected","section","onChangeFields","parentsection","parentid","sortable","onAction","data"]))])),_:1}),(0,o.Lk)("div",V,[(0,o.bF)(N.h,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.tab=t),style:{"min-height":"50px"}},{default:(0,o.k6)((()=>[(0,o.bF)(S.U,{value:"summary"},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(e.section),1)])),_:1}),n.vars.subsections&&n.vars.subsections[e.section]?.length?((0,o.uX)(!0),(0,o.CE)(o.FK,{key:0},(0,o.pI)(n.vars?.subsections[e.section],(e=>((0,o.uX)(),(0,o.Wv)(S.U,{key:e.subsection,value:e.subsection},{default:(0,o.k6)((()=>[e.icon?((0,o.uX)(),(0,o.Wv)(f.w,{key:0,icon:e.icon,start:""},null,8,["icon"])):(0,o.Q3)("",!0),(0,o.eW)(" "+(0,a.v_)(e.title),1)])),_:2},1032,["value"])))),128)):(0,o.Q3)("",!0)])),_:1},8,["modelValue"]),"summary"===e.tab?((0,o.uX)(),(0,o.Wv)(i.J,{key:0,"min-width":"600",style:{overflow:"auto"}},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.fields,((t,n,i)=>((0,o.uX)(),(0,o.CE)(o.FK,{key:i},[e.data[t.column]&&!["password"].includes(t.type)&&(!["file","select","select_parent","combo"].includes(t.type)||e.data[t.column]>0)?((0,o.uX)(),(0,o.CE)("div",O,[(0,o.bF)(r.r,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(M.formatString(n)),1)])),_:2},1024),(0,o.bF)(c.O,{title:n},{default:(0,o.k6)((()=>["email"===t.type?((0,o.uX)(),(0,o.CE)("a",{key:0,href:"mailto:"+e.data[t.column]},(0,a.v_)(e.data[t.column]),9,D)):"tel"===t.type?((0,o.uX)(),(0,o.CE)("a",{key:1,href:"tel:"+e.data[t.column]},(0,a.v_)(e.data[t.column]),9,_)):"url"===t.type?((0,o.uX)(),(0,o.CE)("a",{key:2,href:e.data[t.column],target:"_blank"},(0,a.v_)(e.data[t.column]),9,F)):"coords"===t.type?((0,o.uX)(),(0,o.CE)("a",{key:3,href:"https://www.google.com/maps/search/?api=1&query="+e.data[t.column],target:"_blank"},(0,a.v_)(e.data[t.column]),9,x)):["select","select_parent","combo"].includes(t.type)?((0,o.uX)(),(0,o.Wv)(l.D,{key:4,to:M.getSelectLink(n,e.data[t.column]),variant:"text"},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(e.data[t.column+"_label"]?e.data[t.column+"_label"]:M.getOption(e.options[t.column],e.data[t.column])?.title),1)])),_:2},1032,["to"])):"select_multiple"===t.type?((0,o.uX)(),(0,o.CE)("div",P,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.data[t.column],((i,r,c)=>((0,o.uX)(),(0,o.Wv)(l.D,{key:c,to:M.getSelectLink(n,i),variant:"text"},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(M.getOption(e.options[t.column],i)?.title),1)])),_:2},1032,["to"])))),128))])):"rating"===t.type?((0,o.uX)(),(0,o.CE)("span",A,[(0,o.bF)(k.e,{modelValue:e.data[t.column],"onUpdate:modelValue":n=>e.data[t.column]=n,length:5,size:32,readonly:""},null,8,["modelValue","onUpdate:modelValue"])])):["file","upload"].includes(t.type)?((0,o.uX)(),(0,o.CE)("a",{key:7,href:e.apiRoot+"?cmd=file&f="+e.data[t.column],target:"_blank"},[(0,o.Lk)("img",{src:e.apiRoot+"?cmd=file&f="+e.data[t.column]+"&w=320&h=240"},null,8,L),(0,o.Lk)("div",null,(0,a.v_)(e.data[t.column]),1)],8,E)):["files","uploads"].includes(t.type)?((0,o.uX)(),(0,o.CE)("div",X,[(0,o.bF)(d.n,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.data[t.column],(t=>((0,o.uX)(),(0,o.Wv)(h.q,{key:t,src:e.apiRoot+"?cmd=file&f="+t},null,8,["src"])))),128))])),_:2},1024)])):"upload"===t.type?((0,o.uX)(),(0,o.CE)("img",{key:9,src:e.apiRoot+"?cmd=upload&f="+e.data[t.column]+"&w=320&h=240"},null,8,T)):"editor"===t.type?((0,o.uX)(),(0,o.CE)("div",{key:10,innerHTML:e.data[t.column]},null,8,W)):"json"===t.type?((0,o.uX)(),(0,o.CE)("div",B,[(0,o.bF)(U,{data:JSON.parse(e.data[t.column]),theme:e.$vuetify.theme.name,showDoubleQuotes:!1},null,8,["data","theme"])])):((0,o.uX)(),(0,o.CE)("span",I,[(0,o.eW)((0,a.v_)(M.formatData(e.data[t.column],t.type))+" ",1),"color"===t.type?((0,o.uX)(),(0,o.CE)("span",{key:0,style:(0,a.Tr)("background-color: "+e.data[t.column]),class:"ml-3 px-2"},null,4)):(0,o.Q3)("",!0)]))])),_:2},1032,["title"])])):(0,o.Q3)("",!0)],64)))),128))])),_:1})):((0,o.uX)(),(0,o.Wv)(J,{key:1,section:e.tab,parentsection:e.section,parentid:e.id,hidebuttons:"",ref:"listPage",vars:n.vars,onLoaded:M.loaded},null,8,["section","parentsection","parentid","vars","onLoaded"]))]),(0,o.bF)(p.p,{modelValue:e.logsDialog,"onUpdate:modelValue":t[2]||(t[2]=t=>e.logsDialog=t),"max-width":"600",scrollable:""},{default:(0,o.k6)((()=>[(0,o.bF)(i.J,{title:"Logs",loading:e.loadingLogs},{default:(0,o.k6)((()=>[e.logs.length?((0,o.uX)(),(0,o.Wv)(g.x8,{key:0},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.logs,(n=>((0,o.uX)(),(0,o.Wv)(v.g,{key:n.id,class:"unclamp mb-3"},{default:(0,o.k6)((()=>[(0,o.bF)(m.U,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(M.formatString(n.task))+" on "+(0,a.v_)(M.formatDateTime(n.date)),1)])),_:2},1024),(0,o.bF)(y.w,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",{innerHTML:n.details,style:{"white-space":"pre"}},null,8,K)])),_:2},1024),n.user>0?((0,o.uX)(),(0,o.CE)("div",H,[(0,o.bF)(l.D,{variant:"text",to:this.base+"section/users/"+n.user,onClick:t[1]||(t[1]=t=>e.logsDialog=!1)},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(n.name.trim()?n.name:n.user),1)])),_:2},1032,["to"])])):(0,o.Q3)("",!0)])),_:2},1024)))),128))])),_:1})):((0,o.uX)(),(0,o.Wv)(c.O,{key:1},{default:(0,o.k6)((()=>[(0,o.eW)(" No logs found. ")])),_:1}))])),_:1},8,["loading"])])),_:1},8,["modelValue"]),(0,o.bF)(p.p,{modelValue:e.privilegesDialog,"onUpdate:modelValue":t[3]||(t[3]=t=>e.privilegesDialog=t),"max-width":"600",scrollable:""},{default:(0,o.k6)((()=>[(0,o.bF)(i.J,{title:"Privileges",loading:e.loadingPrivileges},{default:(0,o.k6)((()=>[(0,o.bF)(g.x8,null,{default:(0,o.k6)((()=>[(0,o.bF)(s.m,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.sections,(t=>((0,o.uX)(),(0,o.Wv)(C.d4,{key:t,label:t,modelValue:e.privileges[t].access,"onUpdate:modelValue":n=>e.privileges[t].access=n,items:e.accessOptions},null,8,["label","modelValue","onUpdate:modelValue","items"])))),128))])),_:1})])),_:1}),(0,o.bF)(u.S,null,{default:(0,o.k6)((()=>[(0,o.bF)(l.D,{onClick:M.savePrivileges,color:"primary",variant:"flat"},{default:(0,o.k6)((()=>[(0,o.eW)("Save")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["loading"])])),_:1},8,["modelValue"])])),_:1})}n(44114),n(14603),n(47566),n(98721);var R=n(74300),M=n(27274),Q=n(67406),U=n(5089),J=n(90144),q={d:(e,t)=>{for(var n in t)q.o(t,n)&&!q.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},z={};function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Z(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}function G(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}q.d(z,{Z:()=>ye});const te=(le={computed:()=>o.EW,createTextVNode:()=>o.eW,createVNode:()=>o.bF,defineComponent:()=>o.pM,reactive:()=>J.Kh,ref:()=>J.KR,watch:()=>o.wB,watchEffect:()=>o.nT},ie={},q.d(ie,le),ie),ne=(0,te.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,te.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),oe=(0,te.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var n=t.emit;return{uiType:(0,te.computed)((function(){return e.isMultiple?"checkbox":"radio"})),model:(0,te.computed)({get:function(){return e.checked},set:function(e){return n("update:modelValue",e)}})}},render:function(){var e=this.uiType,t=this.model,n=this.$emit;return(0,te.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(e){return e.stopPropagation()}},[(0,te.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,te.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return n("change",t)}},null)])}}),ae=(0,te.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,n="objectStart"===e||"arrayStart"===e;return n||"objectCollapsed"===e||"arrayCollapsed"===e?(0,te.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(n?"open":"close"),onClick:t},[(0,te.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,te.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});var le,ie;function re(e){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}function ce(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3?arguments[3]:void 0,a=o||{},l=a.key,i=a.index,r=a.type,c=void 0===r?"content":r,s=a.showComma,u=void 0!==s&&s,d=a.length,h=void 0===d?1:d,p=ce(e);if("array"===p){var f=ue(e.map((function(e,o,a){return se(e,"".concat(t,"[").concat(o,"]"),n+1,{index:o,showComma:o!==a.length-1,length:h,type:c})})));return[se("[",t,n,{showComma:!1,key:l,length:e.length,type:"arrayStart"})[0]].concat(f,se("]",t,n,{showComma:u,length:e.length,type:"arrayEnd"})[0])}if("object"===p){var g=Object.keys(e),v=ue(g.map((function(o,a,l){return se(e[o],/^[a-zA-Z_]\w*$/.test(o)?"".concat(t,".").concat(o):"".concat(t,'["').concat(o,'"]'),n+1,{key:o,showComma:a!==l.length-1,length:h,type:c})})));return[se("{",t,n,{showComma:!1,key:l,index:i,length:g.length,type:"objectStart"})[0]].concat(v,se("}",t,n,{showComma:u,length:g.length,type:"objectEnd"})[0])}return[{content:e,level:n,key:l,index:i,path:t,showComma:u,length:h,type:c}]}function ue(e){if("function"==typeof Array.prototype.flat)return e.flat();for(var t=G(e),n=[];t.length;){var o=t.shift();Array.isArray(o)?t.unshift.apply(t,G(o)):n.push(o)}return n}function de(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(null==e)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if("object"!==re(e))return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map((function(e){return de(e,t)}));return t.set(e,n),n}var o={};for(var a in e)o[a]=de(e[a],t);return t.set(e,o),o}function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},theme:{type:String,default:"light"},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}};const ge=(0,te.defineComponent)({name:"TreeNode",props:pe(pe({},fe),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var n=t.emit,o=(0,te.computed)((function(){return ce(e.node.content)})),a=(0,te.computed)((function(){return"vjs-value vjs-value-".concat(o.value)})),l=(0,te.computed)((function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key})),i=(0,te.computed)((function(){return"multiple"===e.selectableType})),r=(0,te.computed)((function(){return"single"===e.selectableType})),c=(0,te.computed)((function(){return e.nodeSelectable(e.node)&&(i.value||r.value)})),s=(0,te.reactive)({editing:!1}),u=function(t){var o,a,l="null"===(a=null===(o=t.target)||void 0===o?void 0:o.value)?null:"undefined"===a?void 0:"true"===a||"false"!==a&&(a[0]+a[a.length-1]==='""'||a[0]+a[a.length-1]==="''"?a.slice(1,-1):"number"==typeof Number(a)&&!isNaN(Number(a))||"NaN"===a?Number(a):a);n("valueChange",l,e.node.path)},d=(0,te.computed)((function(){var t,n=null===(t=e.node)||void 0===t?void 0:t.content;return null===n?n="null":void 0===n&&(n="undefined"),"string"===o.value?'"'.concat(n,'"'):n+""})),h=function(){var t=e.renderNodeValue;return t?t({node:e.node,defaultValue:d.value}):d.value},p=function(){n("bracketsClick",!e.collapsed,e.node)},f=function(){n("iconClick",!e.collapsed,e.node)},g=function(){n("selectedChange",e.node)},v=function(){n("nodeClick",e.node),c.value&&e.selectOnClickNode&&n("selectedChange",e.node)},m=function(t){if(e.editable&&!s.editing){s.editing=!0;var n=function e(n){var o;n.target!==t.target&&(null===(o=n.target)||void 0===o?void 0:o.parentElement)!==t.target&&(s.editing=!1,document.removeEventListener("click",e))};document.removeEventListener("click",n),document.addEventListener("click",n)}};return function(){var t,n=e.node;return(0,te.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked,dark:"dark"===e.theme},onClick:v,style:e.style},[e.showLineNumber&&(0,te.createVNode)("span",{class:"vjs-node-index"},[n.id+1]),e.showSelectController&&c.value&&"objectEnd"!==n.type&&"arrayEnd"!==n.type&&(0,te.createVNode)(oe,{isMultiple:i.value,checked:e.checked,onChange:g},null),(0,te.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(n.level)).map((function(t,n){return(0,te.createVNode)("div",{key:n,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)})),e.showIcon&&(0,te.createVNode)(ae,{nodeType:n.type,onClick:f},null)]),n.key&&(0,te.createVNode)("span",{class:"vjs-key"},[(t=e.renderNodeKey,t?t({node:e.node,defaultKey:l.value||""}):l.value),(0,te.createVNode)("span",{class:"vjs-colon"},[":".concat(e.showKeyValueSpace?" ":"")])]),(0,te.createVNode)("span",null,["content"!==n.type&&n.content?(0,te.createVNode)(ne,{data:n.content.toString(),onClick:p},null):(0,te.createVNode)("span",{class:a.value,onClick:!e.editable||e.editableTrigger&&"click"!==e.editableTrigger?void 0:m,onDblclick:e.editable&&"dblclick"===e.editableTrigger?m:void 0},[e.editable&&s.editing?(0,te.createVNode)("input",{value:d.value,onChange:u,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):h()]),n.showComma&&(0,te.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,te.createVNode)("span",{class:"vjs-comment"},[(0,te.createTextVNode)(" // "),n.length,(0,te.createTextVNode)(" items ")])])])}}});function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ye=(0,te.defineComponent)({name:"Tree",props:me(me({},fe),{},{data:{type:[String,Number,Boolean,Array,Object],default:null},collapsedNodeLength:{type:Number,default:1/0},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function},theme:{type:String,default:"light"}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var n=t.emit,o=t.slots,a=(0,te.ref)(),l=(0,te.computed)((function(){return se(e.data,e.rootPath)})),i=function(t,n){return l.value.reduce((function(o,a){var l,i=a.level>=t||a.length>=n,r=null===(l=e.pathCollapsible)||void 0===l?void 0:l.call(e,a);return"objectStart"!==a.type&&"arrayStart"!==a.type||!i&&!r?o:me(me({},o),{},ee({},a.path,1))}),{})},r=(0,te.reactive)({translateY:0,visibleData:null,hiddenPaths:i(e.deep,e.collapsedNodeLength)}),c=(0,te.computed)((function(){for(var e=null,t=[],n=l.value.length,o=0;o<n;o++){var a=me(me({},l.value[o]),{},{id:o}),i=r.hiddenPaths[a.path];if(e&&e.path===a.path){var c="objectStart"===e.type,s=me(me(me({},a),e),{},{showComma:a.showComma,content:c?"{...}":"[...]",type:c?"objectCollapsed":"arrayCollapsed"});e=null,t.push(s)}else{if(i&&!e){e=a;continue}if(e)continue;t.push(a)}}return t})),s=(0,te.computed)((function(){var t=e.selectedValue;return t&&"multiple"===e.selectableType&&Array.isArray(t)?t:[t]})),u=(0,te.computed)((function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."})),d=function(){var t=c.value;if(e.virtual){var n,o=e.height/e.itemHeight,l=(null===(n=a.value)||void 0===n?void 0:n.scrollTop)||0,i=Math.floor(l/e.itemHeight),s=i<0?0:i+o>t.length?t.length-o:i;s<0&&(s=0);var u=s+o;r.translateY=s*e.itemHeight,r.visibleData=t.filter((function(e,t){return t>=s&&t<u}))}else r.visibleData=t},h=function(){d()},p=function(t){var o,a,l=t.path,i=e.selectableType;if("multiple"===i){var r=s.value.findIndex((function(e){return e===l})),c=G(s.value);-1!==r?c.splice(r,1):c.push(l),n("update:selectedValue",c),n("selectedChange",c,G(s.value))}else if("single"===i&&s.value[0]!==l){var u=(o=s.value,a=1,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,l=[],i=!0,r=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(l.push(o.value),!t||l.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(r)throw a}}return l}}(o,a)||Z(o,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],d=l;n("update:selectedValue",d),n("selectedChange",d,u)}},f=function(e){n("nodeClick",e)},g=function(e,t){if(e)r.hiddenPaths=me(me({},r.hiddenPaths),{},ee({},t,1));else{var n=me({},r.hiddenPaths);delete n[t],r.hiddenPaths=n}},v=function(t,o){e.collapsedOnClickBrackets&&g(t,o.path),n("bracketsClick",t,o)},m=function(e,t){g(e,t.path),n("iconClick",e,t)},y=function(t,o){var a=de(e.data),l=e.rootPath;new Function("data","val","data".concat(o.slice(l.length),"=val"))(a,t),n("update:data",a)};return(0,te.watchEffect)((function(){u.value&&function(e){throw new Error("[VueJSONPretty] ".concat(e))}(u.value)})),(0,te.watchEffect)((function(){c.value&&d()})),(0,te.watch)((function(){return e.deep}),(function(t){t&&(r.hiddenPaths=i(t,e.collapsedNodeLength))})),(0,te.watch)((function(){return e.collapsedNodeLength}),(function(t){t&&(r.hiddenPaths=i(e.deep,t))})),function(){var t,n,i=null!==(t=e.renderNodeKey)&&void 0!==t?t:o.renderNodeKey,u=null!==(n=e.renderNodeValue)&&void 0!==n?n:o.renderNodeValue,d=r.visibleData&&r.visibleData.map((function(t){return(0,te.createVNode)(ge,{key:t.id,node:t,collapsed:!!r.hiddenPaths[t.path],theme:e.theme,showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:s.value.includes(t.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,showKeyValueSpace:e.showKeyValueSpace,renderNodeKey:i,renderNodeValue:u,onNodeClick:f,onBracketsClick:v,onIconClick:m,onSelectedChange:p,onValueChange:y,style:e.itemHeight&&20!==e.itemHeight?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)}));return(0,te.createVNode)("div",{ref:a,class:{"vjs-tree":!0,"is-virtual":e.virtual,dark:"dark"===e.theme},onScroll:e.virtual?h:void 0,style:e.showLineNumber?me({paddingLeft:"".concat(12*Number(l.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,te.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,te.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(c.value.length*e.itemHeight,"px")}},[(0,te.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(r.translateY,"px)")}},[d])])]):d])}}});var be=z.Z,ke={components:{ListPage:Q["default"],ListButtons:U.A,VueJsonPretty:be},props:{vars:null},data:function(){return{data:{},fields:[],section:"",id:0,tab:"summary",logsDialog:!1,loadingLogs:!1,logs:[],privilegesDialog:!1,loadingPrivileges:!1,privileges:{},sections:[],selected:[],headers:[],activeHeaders:[],accessOptions:[{value:0,title:"None"},{value:1,title:"Read"},{value:2,title:"Write"},{value:3,title:"Full"}],apiRoot:"",options:[],back:"../",buttonData:{}}},methods:{fetchData:async function(){let e={cmd:"get",section:this.section,id:this.id};const t=await R.A.post("?section="+this.section,e);if(!t)return!1;let n=t.data.fields;if(this.$emit("changeHeaders",Object.values(n)),this.$emit("changeFields",Object.values(n)),t.data.data){let e=t.data.data;this.options=await M.A.getAllOptions(n,this.vars.options,this.section,e);for(const[,t]of Object.entries(n))"password"===t.type?e[t.column]="":"checkbox"===t.type?e[t.column]=e[t.column]=e[t.column]>0:"select_multiple"!==t.type||Array.isArray(e[t.column])||(e[t.column]=[]);this.data=e}else this.data={};this.fields=t.data.fields;let o=this.vars?.branding?.title?this.vars.branding.title:"ADMIN";document.title=o+" | "+this.section+" | "+this.id;const a=new URLSearchParams(window.location.search),l=a.get("parentsection");if(l){const e=a.get("parentid");this.back="../../"+l+"/"+e+"/"}else n.id?this.back="../":this.back=""},openLogs:async function(){this.logsDialog=!0,this.loadingLogs=!0;const e=await R.A.get("?cmd=logs&section="+this.section+"&id="+this.id);if(this.loadingLogs=!1,!e)return!1;this.logs=e.data.data},openPrivileges:async function(){if(!["Business"].includes(M.A.getEdition()))return void this.$router.push(M.A.base()+"upgrade");this.privilegesDialog=!0,this.loadingPrivileges=!0;const e=await R.A.get("?cmd=privileges&user_id="+this.id);if(this.loadingPrivileges=!1,!e)return!1;this.privileges=e.data.privileges,this.sections=e.data.sections},savePrivileges:async function(){this.loadingPrivileges=!0,await R.A.post("?cmd=privileges&user_id="+this.id,{privileges:this.privileges}),this.privilegesDialog=!1},restoreItem:async function(){if(!confirm("Are you sure you want to restore?"))return;let e={section:this.section,id:this.id};await R.A.post("?cmd=restore&section="+this.section,e),this.fetchData()},deleteItem:async function(){if(!confirm("Are you sure to delete?"))return;let e={section:this.section,ids:[this.id]};await R.A.post("?cmd=delete&section="+this.section,e),this.$router.push(this.back)},changeFields:function(){this.$refs["listPage"].dialog=!0},actionHandler:function(){this.$refs["listPage"].actionHandler(...arguments)},getSelectLink:function(e,t){let n=this.vars.options[e.replaceAll("_"," ")];if("string"===typeof n)return"../../"+n.replaceAll("_"," ")+"/"+t+"/"},customButton:async function(e){if(e.confirm){let t=confirm(e.confirm);if(!t)return!1}let t={cmd:"button",button:e.id,section:this.section,ids:[this.id]};this.loading=!0;const n=await R.A.post("?cmd=button&section="+this.section,t);this.loading=!1,n.data.error&&alert(n.data.error),n.data.result?.redirect?n.data.result?.target?window.open(n.data.result.redirect):location.href=n.data.result.redirect:await this.fetchData()},getOption:function(e,t){let n=e.find((e=>e.value===t));return n||{value:t,title:"Not found"}},formatData:function(e,t){return M.A.formatData(e,t)},formatDateTime:function(e){return M.A.formatDateTime(e)},formatString:function(e){return M.A.formatString(e)},loaded:function(){let e=this.$refs["listPage"]?.buttonData;this.buttonData=e||{}},edit:function(){this.$router.push("edit"+location.search)},checkDisabled:function(e){if("object"===typeof e.enabled){let t=!0;for(const[n,o]of Object.entries(e.enabled))this.data[n]!=o&&(t=!1);if(!1===t)return!0}return!1},goBack:function(){this.$router.push(this.back)}},computed:{base:function(){return M.A.base()},buttons:function(){let e=[];return this.vars?.buttons?.forEach(((t,n)=>{"view"===t.page&&t.section===this.section&&(t.id=n,e.push(t))})),e},isSortable:function(){return this.$refs["listPage"]?.isSortable}},watch:{$route(){this.section=this.$route.params.section,this.id=this.$route.params.id,this.tab="summary",this.fetchData()},vars:function(){this.fetchData()}},async mounted(){this.section=this.$route.params.section,this.id=this.$route.params.id,this.apiRoot=R.A.getApiRoot(),this.vars.sections&&this.fetchData()}},Ce=n(71241);const we=(0,Ce.A)(ke,[["render",$],["__scopeId","data-v-0edd0007"]]);var Ne=we}}]);
//# sourceMappingURL=45.3a0d220d.js.map