import{a8 as J,p as b,L as P,k as o,a9 as z,aa as ye,ab as re,a as c,S as Xe,Y as ue,x as O,C as D,J as A,y as L,O as G,ac as Ce,t as B,z as T,ad as pe,Q as Ye,n as ke,q as Ue,$ as ee,m as te,ae as je,u as Se,a0 as qe,af as Je,ag as Qe,X as Ze,G as Ke,ah as et,R as m,N as Q,l as ne,ai as tt,aj as nt,ak as at,s as st,a3 as lt,al as it,am as ot,P as _e,E as rt,an as ut,ao as ce,a2 as ct,ap as dt,aq as de,H as vt,a5 as ft}from"./index-ca39485c.js";const mt=["top","bottom"],gt=["start","end","left","right"];function ht(e,t){let[a,n]=e.split(" ");return n||(n=J(mt,a)?"start":J(gt,a)?"top":"center"),{side:ve(a,t),align:ve(n,t)}}function ve(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const xe=b({border:[Boolean,Number,String]},"border");function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:o(()=>{const n=z(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))s.push(`border-${l}`);return s})}}const bt=[null,"default","comfortable","compact"],Ve=b({density:{type:String,default:"default",validator:e=>bt.includes(e)}},"density");function Ie(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:o(()=>`${t}--density-${e.density}`)}}const Be=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Pe(e){return{elevationClasses:o(()=>{const a=z(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const ae=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:o(()=>{const n=z(e)?e.value:e.rounded,s=[];if(n===!0||n==="")s.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))s.push(`rounded-${l}`);return s})}}function le(e){return ye(()=>{const t=[],a={};return e.value.background&&(re(e.value.background)?a.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(re(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function W(e,t){const a=o(()=>({text:z(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=le(a);return{textColorClasses:n,textColorStyles:s}}function fe(e,t){const a=o(()=>({background:z(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=le(a);return{backgroundColorClasses:n,backgroundColorStyles:s}}const yt=["elevated","flat","tonal","outlined","text","plain"];function Ct(e,t){return c(Xe,null,[e&&c("span",{key:"overlay",class:`${t}__overlay`},null),c("span",{key:"underlay",class:`${t}__underlay`},null)])}const Le=b({color:String,variant:{type:String,default:"elevated",validator:e=>yt.includes(e)}},"variant");function pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const a=o(()=>{const{variant:l}=ue(e);return`${t}--variant-${l}`}),{colorClasses:n,colorStyles:s}=le(o(()=>{const{variant:l,color:i}=ue(e);return{[["elevated","flat"].includes(l)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:s,variantClasses:a}}const Ee=b({divided:Boolean,...xe(),...O(),...Ve(),...Be(),...ae(),...D(),...A(),...Le()},"VBtnGroup"),me=L()({name:"VBtnGroup",props:Ee(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=G(e),{densityClasses:s}=Ie(e),{borderClasses:l}=we(e),{elevationClasses:i}=Pe(e),{roundedClasses:v}=se(e);Ce({VBtn:{height:"auto",color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),T(()=>c(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,s.value,i.value,v.value,e.class],style:e.style},a))}}),kt=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),St=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function _t(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=pe("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Ye();ke(Symbol.for(`${t.description}:id`),s);const l=Ue(t,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const i=B(e,"value"),v=o(()=>l.disabled.value||e.disabled);l.register({id:s,value:i,disabled:v},n),ee(()=>{l.unregister(s)});const u=o(()=>l.isSelected(s)),p=o(()=>u.value&&[l.selectedClass.value,e.selectedClass]);return te(u,g=>{n.emit("group:selected",{value:g})}),{id:s,isSelected:u,toggle:()=>l.select(s,!u.value),select:g=>l.select(s,g),selectedClass:p,value:i,disabled:v,group:l}}function xt(e,t){let a=!1;const n=je([]),s=Se(e,"modelValue",[],r=>r==null?[]:Te(n,Ze(r)),r=>{const f=Vt(n,r);return e.multiple?f:f[0]}),l=pe("useGroup");function i(r,f){const k=r,d=Symbol.for(`${t.description}:id`),C=Qe(d,l?.vnode).indexOf(f);C>-1?n.splice(C,0,k):n.push(k)}function v(r){if(a)return;u();const f=n.findIndex(k=>k.id===r);n.splice(f,1)}function u(){const r=n.find(f=>!f.disabled);r&&e.mandatory==="force"&&!s.value.length&&(s.value=[r.id])}qe(()=>{u()}),ee(()=>{a=!0});function p(r,f){const k=n.find(d=>d.id===r);if(!(f&&k?.disabled))if(e.multiple){const d=s.value.slice(),S=d.findIndex(h=>h===r),C=~S;if(f=f??!C,C&&e.mandatory&&d.length<=1||!C&&e.max!=null&&d.length+1>e.max)return;S<0&&f?d.push(r):S>=0&&!f&&d.splice(S,1),s.value=d}else{const d=s.value.includes(r);if(e.mandatory&&d)return;s.value=f??!d?[r]:[]}}function g(r){if(e.multiple,s.value.length){const f=s.value[0],k=n.findIndex(C=>C.id===f);let d=(k+r)%n.length,S=n[d];for(;S.disabled&&d!==k;)d=(d+r)%n.length,S=n[d];if(S.disabled)return;s.value=[n[d].id]}else{const f=n.find(k=>!k.disabled);f&&(s.value=[f.id])}}const y={register:i,unregister:v,selected:s,select:p,disabled:B(e,"disabled"),prev:()=>g(n.length-1),next:()=>g(1),isSelected:r=>s.value.includes(r),selectedClass:o(()=>e.selectedClass),items:o(()=>n),getItemIndex:r=>wt(n,r)};return ke(t,y),y}function wt(e,t){const a=Te(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Te(e,t){const a=[];return t.forEach(n=>{const s=e.find(i=>Je(n,i.value)),l=e[n];s?.value!=null?a.push(s.id):l!=null&&a.push(l.id)}),a}function Vt(e,t){const a=[];return t.forEach(n=>{const s=e.findIndex(l=>l.id===n);if(~s){const l=e[s];a.push(l.value!=null?l.value:s)}}),a}const $e=Symbol.for("vuetify:v-btn-toggle"),It=b({...Ee(),...kt()},"VBtnToggle");L()({name:"VBtnToggle",props:It(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:s,prev:l,select:i,selected:v}=xt(e,$e);return T(()=>{const[u]=me.filterProps(e);return c(me,Ke({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>[a.default?.({isSelected:n,next:s,prev:l,select:i,selected:v})]})}),{next:s,prev:l,select:i}}});const Bt=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),j=L(!1)({name:"VDefaultsProvider",props:Bt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:s,reset:l,root:i,scoped:v}=et(e);return Ce(n,{reset:l,root:i,scoped:v,disabled:s}),()=>a.default?.()}});const Pt=["x-small","small","default","large","x-large"],ie=b({size:{type:[String,Number],default:"default"}},"size");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return ye(()=>{let a,n;return J(Pt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:m(e.size),height:m(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Lt=b({color:String,start:Boolean,end:Boolean,icon:Q,...O(),...ie(),...D({tag:"i"}),...A()},"VIcon"),q=L()({name:"VIcon",props:Lt(),setup(e,t){let{attrs:a,slots:n}=t;const s=ne(),{themeClasses:l}=G(e),{iconData:i}=tt(o(()=>s.value||e.icon)),{sizeClasses:v}=oe(e),{textColorClasses:u,textColorStyles:p}=W(B(e,"color"));return T(()=>{const g=n.default?.();return g&&(s.value=nt(g).filter(y=>y.type===at&&y.children&&typeof y.children=="string")[0]?.children),c(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,v.value,u.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[v.value?void 0:{fontSize:m(e.size),height:m(e.size),width:m(e.size)},p.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[g]})}),{}}});function Ne(e,t){const a=ne(),n=st(!1);if(lt){const s=new IntersectionObserver(l=>{e?.(l,s),n.value=!!l.find(i=>i.isIntersecting)},t);ee(()=>{s.disconnect()}),te(a,(l,i)=>{i&&(s.unobserve(i),n.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Et=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...O(),...ie(),...D({tag:"div"}),...A()},"VProgressCircular"),Tt=L()({name:"VProgressCircular",props:Et(),setup(e,t){let{slots:a}=t;const n=20,s=2*Math.PI*n,l=ne(),{themeClasses:i}=G(e),{sizeClasses:v,sizeStyles:u}=oe(e),{textColorClasses:p,textColorStyles:g}=W(B(e,"color")),{textColorClasses:y,textColorStyles:r}=W(B(e,"bgColor")),{intersectionRef:f,isIntersecting:k}=Ne(),{resizeRef:d,contentRect:S}=it(),C=o(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),h=o(()=>Number(e.width)),_=o(()=>u.value?Number(e.size):S.value?S.value.width:Math.max(h.value,32)),I=o(()=>n/(1-h.value/_.value)*2),w=o(()=>h.value/_.value*I.value),$=o(()=>m((100-C.value)/100*s));return ot(()=>{f.value=l.value,d.value=l.value}),T(()=>c(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":k.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,v.value,p.value,e.class],style:[u.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:C.value},{default:()=>[c("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[c("circle",{class:["v-progress-circular__underlay",y.value],style:r.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":w.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),c("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":w.value,"stroke-dasharray":s,"stroke-dashoffset":$.value},null)]),a.default&&c("div",{class:"v-progress-circular__content"},[a.default({value:C.value})])]})),{}}}),$t=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Nt(e){return{dimensionStyles:o(()=>({height:m(e.height),maxHeight:m(e.maxHeight),maxWidth:m(e.maxWidth),minHeight:m(e.minHeight),minWidth:m(e.minWidth),width:m(e.width)}))}}const ge={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Re=b({location:String},"location");function ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=_e();return{locationStyles:o(()=>{if(!e.location)return{};const{side:l,align:i}=ht(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function v(p){return a?a(p):0}const u={};return l!=="center"&&(t?u[ge[l]]=`calc(100% - ${v(l)}px)`:u[l]=0),i!=="center"?t?u[ge[i]]=`calc(100% - ${v(i)}px)`:u[i]=0:(l==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),u})}}const Rt=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...O(),...Re({location:"top"}),...ae(),...D(),...A()},"VProgressLinear"),zt=L()({name:"VProgressLinear",props:Rt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Se(e,"modelValue"),{isRtl:s,rtlClasses:l}=_e(),{themeClasses:i}=G(e),{locationStyles:v}=ze(e),{textColorClasses:u,textColorStyles:p}=W(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:y}=fe(o(()=>e.bgColor||e.color)),{backgroundColorClasses:r,backgroundColorStyles:f}=fe(e,"color"),{roundedClasses:k}=se(e),{intersectionRef:d,isIntersecting:S}=Ne(),C=o(()=>parseInt(e.max,10)),h=o(()=>parseInt(e.height,10)),_=o(()=>parseFloat(e.bufferValue)/C.value*100),I=o(()=>parseFloat(n.value)/C.value*100),w=o(()=>s.value!==e.reverse),$=o(()=>e.indeterminate?"fade-transition":"slide-x-transition"),H=o(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function X(V){if(!d.value)return;const{left:Y,right:U,width:E}=d.value.getBoundingClientRect(),M=w.value?E-V.clientX+(U-E):V.clientX-Y;n.value=Math.round(M/E*C.value)}return T(()=>c(e.tag,{ref:d,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&S.value,"v-progress-linear--reverse":w.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},k.value,i.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?m(h.value):0,"--v-progress-linear-height":m(h.value),...v.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&X},{default:()=>[e.stream&&c("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...p.value,[w.value?"left":"right"]:m(-h.value),borderTop:`${m(h.value/2)} dotted`,opacity:H.value,top:`calc(50% - ${m(h.value/4)})`,width:m(100-_.value,"%"),"--v-progress-linear-stream-to":m(h.value*(w.value?1:-1))}},null),c("div",{class:["v-progress-linear__background",g.value],style:[y.value,{opacity:H.value,width:m(e.stream?_.value:100,"%")}]},null),c(rt,{name:$.value},{default:()=>[e.indeterminate?c("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(V=>c("div",{key:V,class:["v-progress-linear__indeterminate",V,r.value],style:f.value},null))]):c("div",{class:["v-progress-linear__determinate",r.value],style:[f.value,{width:m(I.value,"%")}]},null)]}),a.default&&c("div",{class:"v-progress-linear__content"},[a.default({value:I.value,buffer:_.value})])]})),{}}}),Ot=b({loading:[Boolean,String]},"loader");function Dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:o(()=>({[`${t}--loading`]:e.loading}))}}function Kt(e,t){let{slots:a}=t;return c("div",{class:`${e.name}__loader`},[a.default?.({color:e.color,isActive:e.active})||c(zt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const At=["static","relative","fixed","absolute","sticky"],Gt=b({position:{type:String,validator:e=>At.includes(e)}},"position");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:o(()=>e.position?`${t}--${e.position}`:void 0)}}function Mt(e,t){const a=ut("RouterLink"),n=o(()=>!!(e.href||e.to)),s=o(()=>n?.value||ce(t,"click")||ce(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:s,href:B(e,"href")};const l=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:s,route:l?.route,navigate:l?.navigate,isActive:l&&o(()=>e.exact?l.isExactActive?.value:l.isActive?.value),href:o(()=>e.to?l?.route.value.href:e.href)}}const Wt=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Ft(e,t){te(()=>e.isActive?.value,a=>{e.isLink.value&&a&&t&&ct(()=>{t(!0)})},{immediate:!0})}const Z=Symbol("rippleStop"),Xt=80;function he(e,t){e.style.transform=t,e.style.webkitTransform=t}function K(e){return e.constructor.name==="TouchEvent"}function Oe(e){return e.constructor.name==="KeyboardEvent"}const Yt=function(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,s=0;if(!Oe(e)){const y=t.getBoundingClientRect(),r=K(e)?e.touches[e.touches.length-1]:e;n=r.clientX-y.left,s=r.clientY-y.top}let l=0,i=.3;t._ripple?.circle?(i=.15,l=t.clientWidth/2,l=a.center?l:l+Math.sqrt((n-l)**2+(s-l)**2)/4):l=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const v=`${(t.clientWidth-l*2)/2}px`,u=`${(t.clientHeight-l*2)/2}px`,p=a.center?v:`${n-l}px`,g=a.center?u:`${s-l}px`;return{radius:l,scale:i,x:p,y:g,centerX:v,centerY:u}},F={show(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t?._ripple?.enabled)return;const n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:l,scale:i,x:v,y:u,centerX:p,centerY:g}=Yt(e,t,a),y=`${l*2}px`;s.className="v-ripple__animation",s.style.width=y,s.style.height=y,t.appendChild(n);const r=window.getComputedStyle(t);r&&r.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),he(s,`translate(${v}, ${u}) scale3d(${i},${i},${i})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),he(s,`translate(${p}, ${g}) scale3d(1,1,1)`)},0)},hide(e){if(!e?._ripple?.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),s=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),a.parentNode?.parentNode===e&&e.removeChild(a.parentNode)},300)},s)}};function De(e){return typeof e>"u"||!!e}function N(e){const t={},a=e.currentTarget;if(!(!a?._ripple||a._ripple.touched||e[Z])){if(e[Z]=!0,K(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Oe(e),a._ripple.class&&(t.class=a._ripple.class),K(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{F.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{a?._ripple?.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Xt)}else F.show(e,a,t)}}function be(e){e[Z]=!0}function x(e){const t=e.currentTarget;if(t?._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{x(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),F.hide(t)}}function Ae(e){const t=e.currentTarget;t?._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let R=!1;function Ge(e){!R&&(e.keyCode===de.enter||e.keyCode===de.space)&&(R=!0,N(e))}function He(e){R=!1,x(e)}function Me(e){R&&(R=!1,x(e))}function We(e,t,a){const{value:n,modifiers:s}=t,l=De(n);if(l||F.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,dt(n)&&n.class&&(e._ripple.class=n.class),l&&!a){if(s.stop){e.addEventListener("touchstart",be,{passive:!0}),e.addEventListener("mousedown",be);return}e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("touchmove",Ae,{passive:!0}),e.addEventListener("touchcancel",x),e.addEventListener("mousedown",N),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",x),e.addEventListener("keydown",Ge),e.addEventListener("keyup",He),e.addEventListener("blur",Me),e.addEventListener("dragstart",x,{passive:!0})}else!l&&a&&Fe(e)}function Fe(e){e.removeEventListener("mousedown",N),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",x),e.removeEventListener("touchmove",Ae),e.removeEventListener("touchcancel",x),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",x),e.removeEventListener("keydown",Ge),e.removeEventListener("keyup",He),e.removeEventListener("dragstart",x),e.removeEventListener("blur",Me)}function Ut(e,t){We(e,t,!1)}function jt(e){delete e._ripple,Fe(e)}function qt(e,t){if(t.value===t.oldValue)return;const a=De(t.oldValue);We(e,t,a)}const Jt={mounted:Ut,unmounted:jt,updated:qt},Qt=b({active:{type:Boolean,default:void 0},symbol:{type:null,default:$e},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Q,appendIcon:Q,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...xe(),...O(),...Ve(),...$t(),...Be(),...St(),...Ot(),...Re(),...Gt(),...ae(),...Wt(),...ie(),...D({tag:"button"}),...A(),...Le({variant:"elevated"})},"VBtn"),en=L()({name:"VBtn",directives:{Ripple:Jt},props:Qt(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:s}=G(e),{borderClasses:l}=we(e),{colorClasses:i,colorStyles:v,variantClasses:u}=pt(e),{densityClasses:p}=Ie(e),{dimensionStyles:g}=Nt(e),{elevationClasses:y}=Pe(e),{loaderClasses:r}=Dt(e),{locationStyles:f}=ze(e),{positionClasses:k}=Ht(e),{roundedClasses:d}=se(e),{sizeClasses:S,sizeStyles:C}=oe(e),h=_t(e,e.symbol,!1),_=Mt(e,a),I=o(()=>e.active!==void 0?e.active:_.isLink.value?_.isActive?.value:h?.isSelected.value),w=o(()=>h?.disabled.value||e.disabled),$=o(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),H=o(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function X(V){w.value||(_.navigate?.(V),h?.toggle())}return Ft(_,h?.select),T(()=>{const V=_.isLink.value?"a":e.tag,Y=!!(e.prependIcon||n.prepend),U=!!(e.appendIcon||n.append),E=!!(e.icon&&e.icon!==!0),M=h?.isSelected.value&&(!_.isLink.value||_.isActive?.value)||!h||_.isActive?.value;return vt(c(V,{type:V==="a"?void 0:"button",class:["v-btn",h?.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":w.value,"v-btn--elevated":$.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},s.value,l.value,M?i.value:void 0,p.value,y.value,r.value,k.value,d.value,S.value,u.value,e.class],style:[M?v.value:void 0,g.value,f.value,C.value,e.style],disabled:w.value||void 0,href:_.href.value,onClick:X,value:H.value},{default:()=>[Ct(!0,"v-btn"),!e.icon&&Y&&c("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?c(j,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):c(q,{key:"prepend-icon",icon:e.prependIcon},null)]),c("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&E?c(q,{key:"content-icon",icon:e.icon},null):c(j,{key:"content-defaults",disabled:!E,defaults:{VIcon:{icon:e.icon}}},{default:()=>[n.default?.()??e.text]})]),!e.icon&&U&&c("span",{key:"append",class:"v-btn__append"},[n.append?c(j,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):c(q,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&c("span",{key:"loader",class:"v-btn__loader"},[n.loader?.()??c(Tt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[ft("ripple"),!w.value&&e.ripple,null]])}),{}}});export{Kt as L,q as V,en as a,ae as b,se as c,fe as d,W as e,Ve as f,Ie as g,Ot as m,Dt as u};
