"use strict";(self["webpackChunkshiftadmin"]=self["webpackChunkshiftadmin"]||[]).push([[760,873],{85854:function(e,t,l){l.r(t),l.d(t,{default:function(){return Be}});var a=l(56768),o=l(24232),i=l(42807),n=l(4189),s=l(91606),r=l(30697),u=l(39180),c=l(93745),d=l(37852),v=l(19336),m=(l(44114),l(19262)),f=l(34690),g=l(95296),h=l(54663),p=l(47664),b=l(29094);const y=e=>{const{touchstartX:t,touchendX:l,touchstartY:a,touchendY:o}=e,i=.5,n=16;e.offsetX=l-t,e.offsetY=o-a,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&l<t-n&&e.left(e),e.right&&l>t+n&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&o<a-n&&e.up(e),e.down&&o>a+n&&e.down(e))};function k(e,t){const l=e.changedTouches[0];t.touchstartX=l.clientX,t.touchstartY=l.clientY,t.start?.({originalEvent:e,...t})}function w(e,t){const l=e.changedTouches[0];t.touchendX=l.clientX,t.touchendY=l.clientY,t.end?.({originalEvent:e,...t}),y(t)}function _(e,t){const l=e.changedTouches[0];t.touchmoveX=l.clientX,t.touchmoveY=l.clientY,t.move?.({originalEvent:e,...t})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:e=>k(e,t),touchend:e=>w(e,t),touchmove:e=>_(e,t)}}function F(e,t){const l=t.value,a=l?.parent?e.parentElement:e,o=l?.options??{passive:!0},i=t.instance?.$.uid;if(!a||!i)return;const n=C(t.value);a._touchHandlers=a._touchHandlers??Object.create(null),a._touchHandlers[i]=n,(0,b.HP)(n).forEach((e=>{a.addEventListener(e,n[e],o)}))}function x(e,t){const l=t.value?.parent?e.parentElement:e,a=t.instance?.$.uid;if(!l?._touchHandlers||!a)return;const o=l._touchHandlers[a];(0,b.HP)(o).forEach((e=>{l.removeEventListener(e,o[e])})),delete l._touchHandlers[a]}const D={mounted:F,unmounted:x};var W=D,X=l(90144),E=l(14587),S=l(51247),V=l(74600);const B=Symbol.for("vuetify:v-window"),I=Symbol.for("vuetify:v-window-group"),L=(0,E.j)({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>"boolean"===typeof e||"hover"===e},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...(0,m.u)(),...(0,h.X)(),...(0,p.yx)()},"VWindow"),A=(0,S.RW)()({name:"VWindow",directives:{Touch:D},props:L(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const{themeClasses:o}=(0,p.NX)(e),{isRtl:n}=(0,g.IA)(),{t:s}=(0,g.Ym)(),r=(0,f.dB)(e,I),u=(0,X.KR)(),c=(0,a.EW)((()=>n.value?!e.reverse:e.reverse)),d=(0,X.IJ)(!1),v=(0,a.EW)((()=>{const t="vertical"===e.direction?"y":"x",l=c.value?!d.value:d.value,a=l?"-reverse":"";return`v-window-${t}${a}-transition`})),m=(0,X.IJ)(0),h=(0,X.KR)(void 0),b=(0,a.EW)((()=>r.items.value.findIndex((e=>r.selected.value.includes(e.id)))));(0,a.wB)(b,((e,t)=>{const l=r.items.value.length,a=l-1;d.value=l<=2?e<t:e===a&&0===t||(0!==e||t!==a)&&e<t})),(0,a.Gt)(B,{transition:v,isReversed:d,transitionCount:m,transitionHeight:h,rootRef:u});const y=(0,a.EW)((()=>e.continuous||0!==b.value)),k=(0,a.EW)((()=>e.continuous||b.value!==r.items.value.length-1));function w(){y.value&&r.prev()}function _(){k.value&&r.next()}const C=(0,a.EW)((()=>{const t=[],o={icon:n.value?e.nextIcon:e.prevIcon,class:"v-window__"+(c.value?"right":"left"),onClick:r.prev,"aria-label":s("$vuetify.carousel.prev")};t.push(y.value?l.prev?l.prev({props:o}):(0,a.bF)(i.D,o,null):(0,a.bF)("div",null,null));const u={icon:n.value?e.prevIcon:e.nextIcon,class:"v-window__"+(c.value?"left":"right"),onClick:r.next,"aria-label":s("$vuetify.carousel.next")};return t.push(k.value?l.next?l.next({props:u}):(0,a.bF)(i.D,u,null):(0,a.bF)("div",null,null)),t})),F=(0,a.EW)((()=>{if(!1===e.touch)return e.touch;const t={left:()=>{c.value?w():_()},right:()=>{c.value?_():w()},start:e=>{let{originalEvent:t}=e;t.stopPropagation()}};return{...t,...!0===e.touch?{}:e.touch}}));return(0,V.C)((()=>(0,a.bo)((0,a.bF)(e.tag,{ref:u,class:["v-window",{"v-window--show-arrows-on-hover":"hover"===e.showArrows},o.value,e.class],style:e.style},{default:()=>[(0,a.bF)("div",{class:"v-window__container",style:{height:h.value}},[l.default?.({group:r}),!1!==e.showArrows&&(0,a.bF)("div",{class:"v-window__controls"},[C.value])]),l.additional?.({group:r})]}),[[(0,a.gN)("touch"),F.value]]))),{group:r}}});var $=l(24581),T=l(82067);const R=(0,E.j)({color:String,cycle:Boolean,delimiterIcon:{type:$.TX,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...L({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),P=(0,S.RW)()({name:"VCarousel",props:R(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const o=(0,T.q)(e,"modelValue"),{t:n}=(0,g.Ym)(),s=(0,X.KR)();let r=-1;function u(){e.cycle&&s.value&&(r=window.setTimeout(s.value.group.next,+e.interval>0?+e.interval:6e3))}function c(){window.clearTimeout(r),window.requestAnimationFrame(u)}return(0,a.wB)(o,c),(0,a.wB)((()=>e.interval),c),(0,a.wB)((()=>e.cycle),(e=>{e?c():window.clearTimeout(r)})),(0,a.sV)(u),(0,V.C)((()=>{const t=A.filterProps(e);return(0,a.bF)(A,(0,a.v6)({ref:s},t,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:(0,b.Dg)(e.height)},e.style]}),{default:l.default,additional:t=>{let{group:s}=t;return(0,a.bF)(a.FK,null,[!e.hideDelimiters&&(0,a.bF)("div",{class:"v-carousel__controls",style:{left:"left"===e.verticalDelimiters&&e.verticalDelimiters?0:"auto",right:"right"===e.verticalDelimiters?0:"auto"}},[s.items.value.length>0&&(0,a.bF)(d.K,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[s.items.value.map(((e,t)=>{const o={id:`carousel-item-${e.id}`,"aria-label":n("$vuetify.carousel.ariaLabel.delimiter",t+1,s.items.value.length),class:["v-carousel__controls__item",s.isSelected(e.id)&&"v-btn--active"],onClick:()=>s.select(e.id,!0)};return l.item?l.item({props:o,item:e}):(0,a.bF)(i.D,(0,a.v6)(e,o),null)}))]})]),e.progress&&(0,a.bF)(v.Z,{class:"v-carousel__progress",color:"string"===typeof e.progress?e.progress:void 0,modelValue:(s.getItemIndex(o.value)+1)/s.items.value.length*100},null)])},prev:l.prev,next:l.next})})),{}}});var Y=l(5126),M=l(45130),H=l(38139),K=l(86747),U=l(34464);const O=(0,E.j)({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...(0,m.u)(),...(0,f.TX)(),...(0,H.f)()},"VWindowItem"),N=(0,S.RW)()({name:"VWindowItem",directives:{Touch:W},props:O(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:l}=t;const o=(0,a.WQ)(B),i=(0,f.aO)(e,I),{isBooted:n}=(0,K.K)();if(!o||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=(0,X.IJ)(!1),r=(0,a.EW)((()=>n.value&&(o.isReversed.value?!1!==e.reverseTransition:!1!==e.transition)));function u(){s.value&&o&&(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,0===o.transitionCount.value&&(o.transitionHeight.value=void 0)))}function c(){!s.value&&o&&(s.value=!0,0===o.transitionCount.value&&(o.transitionHeight.value=(0,b.Dg)(o.rootRef.value?.clientHeight)),o.transitionCount.value+=1)}function d(){u()}function v(e){s.value&&(0,a.dY)((()=>{r.value&&s.value&&o&&(o.transitionHeight.value=(0,b.Dg)(e.clientHeight))}))}const m=(0,a.EW)((()=>{const t=o.isReversed.value?e.reverseTransition:e.transition;return!!r.value&&{name:"string"!==typeof t?o.transition.value:t,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:d,onEnter:v}})),{hasContent:g}=(0,H._)(e,i.isSelected);return(0,V.C)((()=>(0,a.bF)(U.M,{transition:m.value,disabled:!n.value},{default:()=>[(0,a.bo)((0,a.bF)("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[g.value&&l.default?.()]),[[M.aG,i.isSelected.value]])]}))),{groupItem:i}}}),j=(0,E.j)({...(0,Y.Y)(),...O()},"VCarouselItem"),J=(0,S.RW)()({name:"VCarouselItem",inheritAttrs:!1,props:j(),setup(e,t){let{slots:l,attrs:o}=t;(0,V.C)((()=>{const t=Y.y.filterProps(e),i=N.filterProps(e);return(0,a.bF)(N,(0,a.v6)({class:"v-carousel-item"},i),{default:()=>[(0,a.bF)(Y.y,(0,a.v6)(o,t),l)]})}))}});var Q=l(91772),q=l(72164),z=l(57254),G=l(4913),Z=l(97505),ee=l(88249),te=l(55263),le=l(20105),ae=l(51146),oe=l(10381),ie=l(76686);const ne={key:1,class:"w-100"},se={class:"pa-5 d-flex flex-column",style:{height:"1px",overflow:"auto","flex-grow":"1"}},re={key:0},ue=["href"],ce=["href"],de=["href"],ve=["href"],me={key:5,class:"mx-5"},fe={key:6},ge=["href"],he=["src"],pe={key:8},be=["src"],ye=["innerHTML"],ke={key:11},we={key:0},_e=["innerHTML"],Ce={key:0};function Fe(e,t,l,d,v,m){const f=(0,a.g2)("ListButtons"),g=(0,a.g2)("list-page");return(0,a.uX)(),(0,a.Wv)(n.J,{class:"d-flex flex-column"},{default:(0,a.k6)((()=>[(0,a.bF)(ae.i,{color:"secondary",class:"w-100 d-flex"},{default:(0,a.k6)((()=>[e.back?((0,a.uX)(),(0,a.Wv)(i.D,{key:0,title:"Back",icon:"mdi-arrow-left",to:e.back,color:"grey-lighten-1",variant:"text"},null,8,["to"])):(0,a.Q3)("",!0),"summary"===e.tab?((0,a.uX)(),(0,a.CE)("span",ne,[(0,a.bF)(i.D,{title:"Edit",icon:"mdi-pencil",color:"grey-lighten-1",to:"edit",variant:"text"}),e.data["deleted"]>0?((0,a.uX)(),(0,a.Wv)(i.D,{key:0,title:"Restore",icon:"mdi-delete-restore",color:"success",onClick:m.restoreItem,variant:"text"},null,8,["onClick"])):((0,a.uX)(),(0,a.Wv)(i.D,{key:1,title:"Delete",icon:"mdi-delete",color:"grey-lighten-1",onClick:m.deleteItem,variant:"text"},null,8,["onClick"])),(0,a.bF)(i.D,{title:"Logs",icon:"mdi-text",color:"grey-lighten-1",onClick:m.openLogs,variant:"text"},null,8,["onClick"]),e.data.admin>1?((0,a.uX)(),(0,a.Wv)(i.D,{key:2,title:"Privileges",icon:"mdi-account-key",color:"grey-lighten-1",onClick:m.openPrivileges,variant:"text"},null,8,["onClick"])):(0,a.Q3)("",!0),m.buttons.length?((0,a.uX)(),(0,a.Wv)(ee.q,{key:3},{activator:(0,a.k6)((({props:e})=>[(0,a.bF)(i.D,(0,a.v6)(e,{icon:"mdi-dots-vertical",color:"grey-lighten-1",variant:"text"}),null,16)])),default:(0,a.k6)((()=>[(0,a.bF)(q.x,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(m.buttons,((e,t)=>((0,a.uX)(),(0,a.Wv)(z.g,{key:t,value:t,onClick:t=>m.customButton(e)},{default:(0,a.k6)((()=>[(0,a.bF)(G.U,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.label),1)])),_:2},1024)])),_:2},1032,["value","onClick"])))),128))])),_:1})])),_:1})):(0,a.Q3)("",!0)])):((0,a.uX)(),(0,a.Wv)(f,{key:2,selected:e.selected,section:e.tab,onChangeFields:m.changeFields,parentsection:e.section,parentid:e.id,sortable:m.isSortable,onAction:m.actionHandler,data:e.buttonData},null,8,["selected","section","onChangeFields","parentsection","parentid","sortable","onAction","data"]))])),_:1}),(0,a.Lk)("div",se,[(0,a.bF)(oe.h,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.tab=t),style:{"min-height":"50px"}},{default:(0,a.k6)((()=>[(0,a.bF)(ie.U,{value:"summary"},{default:(0,a.k6)((()=>[(0,a.eW)("Summary")])),_:1}),l.vars.subsections&&l.vars.subsections[e.section]?.length?((0,a.uX)(!0),(0,a.CE)(a.FK,{key:0},(0,a.pI)(l.vars?.subsections[e.section],(e=>((0,a.uX)(),(0,a.Wv)(ie.U,{key:e,value:e},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e),1)])),_:2},1032,["value"])))),128)):(0,a.Q3)("",!0)])),_:1},8,["modelValue"]),"summary"===e.tab?((0,a.uX)(),(0,a.Wv)(n.J,{key:0,"min-width":"600",style:{overflow:"auto"}},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.fields,((t,l,n)=>((0,a.uX)(),(0,a.CE)(a.FK,{key:n},[e.data[t.column]&&!["password"].includes(t.type)&&(!["file","select","select_parent","combo"].includes(t.type)||e.data[t.column]>0)?((0,a.uX)(),(0,a.CE)("div",re,[(0,a.bF)(s.r,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(m.formatString(l)),1)])),_:2},1024),(0,a.bF)(r.O,{title:l},{default:(0,a.k6)((()=>["email"===t.type?((0,a.uX)(),(0,a.CE)("a",{key:0,href:"mailto:"+e.data[t.column]},(0,o.v_)(e.data[t.column]),9,ue)):"tel"===t.type?((0,a.uX)(),(0,a.CE)("a",{key:1,href:"tel:"+e.data[t.column]},(0,o.v_)(e.data[t.column]),9,ce)):"url"===t.type?((0,a.uX)(),(0,a.CE)("a",{key:2,href:e.data[t.column],target:"_blank"},(0,o.v_)(e.data[t.column]),9,de)):"coords"===t.type?((0,a.uX)(),(0,a.CE)("a",{key:3,href:"https://www.google.com/maps/search/?api=1&query="+e.data[t.column],target:"_blank"},(0,o.v_)(e.data[t.column]),9,ve)):["select","select_parent","combo"].includes(t.type)?((0,a.uX)(),(0,a.Wv)(i.D,{key:4,to:m.getSelectLink(l,e.data[t.column]),variant:"text"},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(e.data[t.column+"_label"]?e.data[t.column+"_label"]:e.data[t.column]),1)])),_:2},1032,["to"])):"select_multiple"===t.type?((0,a.uX)(),(0,a.CE)("div",me,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.data[t.column],((n,s,r)=>((0,a.uX)(),(0,a.Wv)(i.D,{key:r,to:m.getSelectLink(l,n),variant:"text"},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(m.getOption(e.options[t.column],n)?.title),1)])),_:2},1032,["to"])))),128))])):"rating"===t.type?((0,a.uX)(),(0,a.CE)("span",fe,[(0,a.bF)(te.e,{modelValue:e.data[t.column],"onUpdate:modelValue":l=>e.data[t.column]=l,length:5,size:32,readonly:""},null,8,["modelValue","onUpdate:modelValue"])])):["file","upload"].includes(t.type)?((0,a.uX)(),(0,a.CE)("a",{key:7,href:e.apiRoot+"?cmd=file&f="+e.data[t.column],target:"_blank"},[(0,a.Lk)("img",{src:e.apiRoot+"?cmd=file&f="+e.data[t.column]+"&w=320&h=240"},null,8,he),(0,a.Lk)("div",null,(0,o.v_)(e.data[t.column]),1)],8,ge)):["files","uploads"].includes(t.type)?((0,a.uX)(),(0,a.CE)("div",pe,[(0,a.bF)(P,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.data[t.column],(t=>((0,a.uX)(),(0,a.Wv)(J,{key:t,src:e.apiRoot+"?cmd=file&f="+t},null,8,["src"])))),128))])),_:2},1024)])):"upload"===t.type?((0,a.uX)(),(0,a.CE)("img",{key:9,src:e.apiRoot+"?cmd=upload&f="+e.data[t.column]+"&w=320&h=240"},null,8,be)):"editor"===t.type?((0,a.uX)(),(0,a.CE)("div",{key:10,innerHTML:e.data[t.column]},null,8,ye)):((0,a.uX)(),(0,a.CE)("span",ke,[(0,a.Lk)("span",null,(0,o.v_)(m.formatData(e.data[t.column],t.type)),1),"dob"===t.type?((0,a.uX)(),(0,a.CE)("span",we,"("+(0,o.v_)(m.age(e.data[t.column]))+")",1)):(0,a.Q3)("",!0)]))])),_:2},1032,["title"])])):(0,a.Q3)("",!0)],64)))),128))])),_:1})):((0,a.uX)(),(0,a.Wv)(g,{key:1,section:e.tab,parentsection:e.section,parentid:e.id,hidebuttons:"",ref:"listPage",onLoaded:m.loaded},null,8,["section","parentsection","parentid","onLoaded"]))]),(0,a.bF)(Q.p,{modelValue:e.logsDialog,"onUpdate:modelValue":t[2]||(t[2]=t=>e.logsDialog=t),"max-width":"600",scrollable:""},{default:(0,a.k6)((()=>[(0,a.bF)(n.J,{title:"Logs",loading:e.loadingLogs},{default:(0,a.k6)((()=>[(0,a.bF)(q.x,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.logs,(l=>((0,a.uX)(),(0,a.Wv)(z.g,{key:l.id,class:"unclamp mb-3"},{default:(0,a.k6)((()=>[(0,a.bF)(G.U,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(m.formatString(l.task))+" on "+(0,o.v_)(m.formatDateTime(l.date)),1)])),_:2},1024),(0,a.bF)(Z.w,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",{innerHTML:l.details,style:{"white-space":"pre"}},null,8,_e)])),_:2},1024),l.user>0?((0,a.uX)(),(0,a.CE)("div",Ce,[(0,a.bF)(i.D,{variant:"text",to:"../../users/"+l.user,onClick:t[1]||(t[1]=t=>e.logsDialog=!1)},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(l.name?l.name:l.user),1)])),_:2},1032,["to"])])):(0,a.Q3)("",!0)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1},8,["modelValue"]),(0,a.bF)(Q.p,{modelValue:e.privilegesDialog,"onUpdate:modelValue":t[3]||(t[3]=t=>e.privilegesDialog=t),"max-width":"600",scrollable:""},{default:(0,a.k6)((()=>[(0,a.bF)(n.J,{title:"Privileges",loading:e.loadingPrivileges},{default:(0,a.k6)((()=>[(0,a.bF)(q.x,null,{default:(0,a.k6)((()=>[(0,a.bF)(u.m,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.sections,(t=>((0,a.uX)(),(0,a.Wv)(le.d4,{key:t,label:t,modelValue:e.privileges[t].access,"onUpdate:modelValue":l=>e.privileges[t].access=l,items:e.accessOptions},null,8,["label","modelValue","onUpdate:modelValue","items"])))),128))])),_:1})])),_:1}),(0,a.bF)(c.S,null,{default:(0,a.k6)((()=>[(0,a.bF)(i.D,{onClick:m.savePrivileges,color:"primary",variant:"flat"},{default:(0,a.k6)((()=>[(0,a.eW)("Save")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["loading"])])),_:1},8,["modelValue"])])),_:1})}l(14603),l(47566),l(98721);var xe=l(74300),De=l(27274),We=l(17009),Xe=l(5089),Ee={components:{ListPage:We["default"],ListButtons:Xe.A},props:{vars:null},data:function(){return{data:{},fields:[],section:"",id:0,tab:"summary",logsDialog:!1,loadingLogs:!1,logs:[],privilegesDialog:!1,loadingPrivileges:!1,privileges:{},sections:[],selected:[],headers:[],activeHeaders:[],accessOptions:[{value:0,title:"None"},{value:1,title:"Read"},{value:2,title:"Write"},{value:3,title:"Full"}],apiRoot:"",options:[],back:"../",buttonData:{}}},methods:{fetchData:async function(){let e={cmd:"get",section:this.section,id:this.id};const t=await xe.A.post("?section="+this.section,e);if(!t)return!1;let l=t.data.fields;if(this.$emit("changeFields",Object.values(l)),t.data.data){let e=t.data.data;this.options=await De.A.getAllOptions(l,this.vars,this.section,e);for(const[,t]of Object.entries(l))"password"===t.type?e[t.column]="":"checkbox"===t.type?e[t.column]=e[t.column]=e[t.column]>0:"select_multiple"!==t.type||Array.isArray(e[t.column])||(e[t.column]=[]);this.data=e}else this.data={};this.fields=t.data.fields;let a=this.vars?.branding?.title?this.vars.branding.title:"ADMIN";document.title=a+" | "+this.section+" | "+this.id;const o=new URLSearchParams(window.location.search),i=o.get("parentsection");if(i){const e=o.get("parentid");this.back="../../"+i+"/"+e+"/"}l.id||(this.back="")},openLogs:async function(){this.logsDialog=!0,this.loadingLogs=!0;const e=await xe.A.get("?cmd=logs&section="+this.section+"&id="+this.id);if(this.loadingLogs=!1,!e)return!1;this.logs=e.data.data},openPrivileges:async function(){if(!["Business"].includes(De.A.getEdition()))return void this.$router.push(De.A.base()+"upgrade");this.privilegesDialog=!0,this.loadingPrivileges=!0;const e=await xe.A.get("?cmd=privileges&user_id="+this.id);if(this.loadingPrivileges=!1,!e)return!1;this.privileges=e.data.privileges,this.sections=e.data.sections},savePrivileges:async function(){this.loadingPrivileges=!0,await xe.A.post("?cmd=privileges&user_id="+this.id,{privileges:this.privileges}),this.privilegesDialog=!1},restoreItem:async function(){if(!confirm("Are you sure you want to restore?"))return;let e={section:this.section,id:this.id};await xe.A.post("?cmd=restore&section="+this.section,e),this.fetchData()},deleteItem:async function(){if(!confirm("Are you sure to delete?"))return;let e={section:this.section,ids:[this.id]};await xe.A.post("?cmd=delete&section="+this.section,e),this.$router.push("../"+this.section)},changeFields:function(){this.$refs["listPage"].dialog=!0},actionHandler:function(){this.$refs["listPage"].actionHandler(...arguments)},age:function(e){const t=new Date,l=new Date(e);if(isNaN(l.getTime()))return"Invalid date format. Please use YYYY-MM-DD.";let a=t.getFullYear()-l.getFullYear();const o=t.getMonth()-l.getMonth(),i=t.getDate()-l.getDate();return(o<0||0===o&&i<0)&&a--,a},getSelectLink:function(e,t){let l=this.vars.options[e.replaceAll("_"," ")];if("string"===typeof l)return"../../"+l.replaceAll("_"," ")+"/"+t+"/"},customButton:async function(e){let t={cmd:"button",button:e.id,section:this.section,ids:[this.id]};this.loading=!0;const l=await xe.A.post("?cmd=button&section="+this.section,t);this.loading=!1,l.data.error&&alert(l.data.error),l.data.result?.redirect?l.data.result?.target?window.open(l.data.result.redirect):location.href=l.data.result.redirect:await this.fetchData()},getOption:function(e,t){return e.find((e=>e.value===t))},formatData:function(e,t){return De.A.formatData(e,t)},formatDateTime:function(e){return De.A.formatDateTime(e)},formatString:function(e){return De.A.formatString(e)},loaded:function(){let e=this.$refs["listPage"]?.buttonData;this.buttonData=e||{}}},computed:{buttons:function(){let e=[];return this.vars?.buttons?.forEach(((t,l)=>{"view"===t.page&&t.section===this.section&&(t.id=l,e.push(t))})),e},isSortable:function(){return this.$refs["listPage"]?.isSortable}},watch:{$route(){this.section=this.$route.params.section,this.id=this.$route.params.id,this.tab="summary",this.fetchData()},vars:function(){this.fetchData()}},async mounted(){this.section=this.$route.params.section,this.id=this.$route.params.id,this.apiRoot=xe.A.getApiRoot(),this.vars.sections&&this.fetchData()}},Se=l(71241);const Ve=(0,Se.A)(Ee,[["render",Fe],["__scopeId","data-v-ec96a49a"]]);var Be=Ve},55263:function(e,t,l){l.d(t,{e:function(){return k}});var a=l(56768),o=l(42807),i=l(19262),n=l(62191),s=l(24581),r=l(95296),u=l(82067),c=l(3378),d=l(54663),v=l(47664),m=l(90144),f=l(14587),g=l(51247),h=l(29094),p=l(37861),b=l(74600);const y=(0,f.j)({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:s.TX,default:"$ratingEmpty"},fullIcon:{type:s.TX,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...(0,i.u)(),...(0,n.r)(),...(0,c.k)(),...(0,d.X)(),...(0,v.yx)()},"VRating"),k=(0,g.RW)()({name:"VRating",props:y(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const{t:i}=(0,r.Ym)(),{themeClasses:n}=(0,v.NX)(e),s=(0,u.q)(e,"modelValue"),c=(0,a.EW)((()=>(0,h.qE)(parseFloat(s.value),0,+e.length))),d=(0,a.EW)((()=>(0,h.Sd)(Number(e.length),1))),f=(0,a.EW)((()=>d.value.flatMap((t=>e.halfIncrements?[t-.5,t]:[t])))),g=(0,m.IJ)(-1),y=(0,a.EW)((()=>f.value.map((t=>{const l=e.hover&&g.value>-1,a=c.value>=t,o=g.value>=t,i=l?o:a,n=i?e.fullIcon:e.emptyIcon,s=e.activeColor??e.color,r=a||o?s:e.color;return{isFilled:a,isHovered:o,icon:n,color:r}})))),k=(0,a.EW)((()=>[0,...f.value].map((t=>{function l(){g.value=t}function a(){g.value=-1}function o(){e.disabled||e.readonly||(s.value=c.value===t&&e.clearable?0:t)}return{onMouseenter:e.hover?l:void 0,onMouseleave:e.hover?a:void 0,onClick:o}})))),w=(0,a.EW)((()=>e.name??`v-rating-${(0,p.v6)()}`));function _(t){let{value:n,index:s,showStar:r=!0}=t;const{onMouseenter:u,onMouseleave:d,onClick:v}=k.value[s+1],m=`${w.value}-${String(n).replace(".","-")}`,f={color:y.value[s]?.color,density:e.density,disabled:e.disabled,icon:y.value[s]?.icon,ripple:e.ripple,size:e.size,variant:"plain"};return(0,a.bF)(a.FK,null,[(0,a.bF)("label",{for:m,class:{"v-rating__item--half":e.halfIncrements&&n%1>0,"v-rating__item--full":e.halfIncrements&&n%1===0},onMouseenter:u,onMouseleave:d,onClick:v},[(0,a.bF)("span",{class:"v-rating__hidden"},[i(e.itemAriaLabel,n,e.length)]),r?l.item?l.item({...y.value[s],props:f,value:n,index:s,rating:c.value}):(0,a.bF)(o.D,(0,a.v6)({"aria-label":i(e.itemAriaLabel,n,e.length)},f),null):void 0]),(0,a.bF)("input",{class:"v-rating__hidden",name:w.value,id:m,type:"radio",value:n,checked:c.value===n,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function C(e){return l["item-label"]?l["item-label"](e):e.label?(0,a.bF)("span",null,[e.label]):(0,a.bF)("span",null,[(0,a.eW)(" ")])}return(0,b.C)((()=>{const t=!!e.itemLabels?.length||l["item-label"];return(0,a.bF)(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},n.value,e.class],style:e.style},{default:()=>[(0,a.bF)(_,{value:0,index:-1,showStar:!1},null),d.value.map(((l,o)=>(0,a.bF)("div",{class:"v-rating__wrapper"},[t&&"top"===e.itemLabelPosition?C({value:l,index:o,label:e.itemLabels?.[o]}):void 0,(0,a.bF)("div",{class:"v-rating__item"},[e.halfIncrements?(0,a.bF)(a.FK,null,[(0,a.bF)(_,{value:l-.5,index:2*o},null),(0,a.bF)(_,{value:l,index:2*o+1},null)]):(0,a.bF)(_,{value:l,index:o},null)]),t&&"bottom"===e.itemLabelPosition?C({value:l,index:o,label:e.itemLabels?.[o]}):void 0])))]})})),{}}})},76686:function(e,t,l){l.d(t,{U:function(){return h}});var a=l(56768),o=l(42807),i=l(32886),n=l(61950),s=l(90144),r=l(93301),u=l(14587),c=l(29094),d=l(51247),v=l(2419),m=l(91884),f=l(74600);const g=(0,u.j)({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...(0,c.cJ)((0,o.x)({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),h=(0,d.RW)()({name:"VTab",props:g(),setup(e,t){let{slots:l,attrs:u}=t;const{textColorClasses:c,textColorStyles:d}=(0,i.aH)(e,"sliderColor"),g=(0,s.KR)(),h=(0,s.KR)(),p=(0,a.EW)((()=>"horizontal"===e.direction)),b=(0,a.EW)((()=>g.value?.group?.isSelected.value??!1));function y(e){let{value:t}=e;if(t){const e=g.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"),t=h.value;if(!e||!t)return;const l=getComputedStyle(e).color,a=e.getBoundingClientRect(),o=t.getBoundingClientRect(),i=p.value?"x":"y",n=p.value?"X":"Y",s=p.value?"right":"bottom",r=p.value?"width":"height",u=a[i],c=o[i],d=u>c?a[s]-o[s]:a[i]-o[i],f=Math.sign(d)>0?p.value?"right":"bottom":Math.sign(d)<0?p.value?"left":"top":"center",b=Math.abs(d)+(Math.sign(d)<0?a[r]:o[r]),y=b/Math.max(a[r],o[r])||0,k=a[r]/o[r]||0,w=1.5;(0,v.i)(t,{backgroundColor:[l,"currentcolor"],transform:[`translate${n}(${d}px) scale${n}(${k})`,`translate${n}(${d/w}px) scale${n}(${(y-1)/w+1})`,"none"],transformOrigin:Array(3).fill(f)},{duration:225,easing:m.B2})}}return(0,f.C)((()=>{const t=o.D.filterProps(e);return(0,a.bF)(o.D,(0,a.v6)({symbol:r.D,ref:g,class:["v-tab",e.class],style:e.style,tabindex:b.value?0:-1,role:"tab","aria-selected":String(b.value),active:!1},t,u,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":y}),{...l,default:()=>(0,a.bF)(a.FK,null,[l.default?.()??e.text,!e.hideSlider&&(0,a.bF)("div",{ref:h,class:["v-tab__slider",c.value],style:d.value},null)])})})),(0,n.O)({},g)}})},10381:function(e,t,l){l.d(t,{h:function(){return y}});var a=l(56768),o=l(76686),i=l(84062),n=l(32886),s=l(12858),r=l(62191),u=l(82067),c=l(54663),d=l(90144),v=l(29094),m=l(14587),f=l(51247),g=l(74600),h=l(93301);function p(e){return e?e.map((e=>(0,v.Gv)(e)?e:{text:e,value:e})):[]}const b=(0,m.j)({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...(0,i.l9)({mandatory:"force"}),...(0,r.r)(),...(0,c.X)()},"VTabs"),y=(0,f.RW)()({name:"VTabs",props:b(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const c=(0,u.q)(e,"modelValue"),m=(0,a.EW)((()=>p(e.items))),{densityClasses:f}=(0,r.Q)(e),{backgroundColorClasses:b,backgroundColorStyles:y}=(0,n.z6)((0,d.lW)(e,"bgColor"));return(0,s.Uh)({VTab:{color:(0,d.lW)(e,"color"),direction:(0,d.lW)(e,"direction"),stacked:(0,d.lW)(e,"stacked"),fixed:(0,d.lW)(e,"fixedTabs"),sliderColor:(0,d.lW)(e,"sliderColor"),hideSlider:(0,d.lW)(e,"hideSlider")}}),(0,g.C)((()=>{const t=i.fJ.filterProps(e);return(0,a.bF)(i.fJ,(0,a.v6)(t,{modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},f.value,b.value,e.class],style:[{"--v-tabs-height":(0,v.Dg)(e.height)},y.value,e.style],role:"tablist",symbol:h.D}),{default:()=>[l.default?l.default():m.value.map((e=>(0,a.bF)(o.U,(0,a.v6)(e,{key:e.text}),null)))]})})),{}}})},93301:function(e,t,l){l.d(t,{D:function(){return a}});const a=Symbol.for("vuetify:v-tabs")}}]);
//# sourceMappingURL=760.f197426a.js.map