import{d as t,i as f,j as w,_ as n,o as d,e as i,a as s,w as a,f as h,g,h as V,r as y}from"./index-ca39485c.js";import{V as $,a as l,b,c as P}from"./VTextField-5a615908.js";import{V as v,a as A}from"./VBtn-37ce4c16.js";const C=t({name:"ResgisterForm",data:()=>({form:!1,password:"",show:!1,rules:{required:e=>!!e||"Password is required",min:e=>e.length>=8||"Password must be at least 8 characters long",lowercase:e=>/[a-z]/.test(e)||"Password must contain lowercase letters",uppercase:e=>/[A-Z]/.test(e)||"Password must contain uppercase letters",digits:e=>/\d/.test(e)||"Password must contain digits",special:e=>/[^A-Za-z0-9]/.test(e)||"Password must contain special characters"}}),methods:{setAppPassword(){this.form&&f(this.password,w()).then(e=>{localStorage.setItem("appPassword",e),this.$router.push({name:"Home"})})}}}),k=V("h1",{style:{"margin-bottom":"0.2em"}},"Set app password",-1);function F(e,o,p,m,u,c){return d(),i("div",null,[k,s(b,{modelValue:e.form,"onUpdate:modelValue":o[2]||(o[2]=r=>e.form=r),onSubmit:g(e.setAppPassword,["prevent"])},{default:a(()=>[s($,{modelValue:e.password,"onUpdate:modelValue":o[0]||(o[0]=r=>e.password=r),placeholder:"App password",type:e.show?"text":"password","append-inner-icon":e.show?"mdi-eye":"mdi-eye-off","onClick:appendInner":o[1]||(o[1]=r=>e.show=!e.show),rules:[e.rules.required,e.rules.min,e.rules.lowercase,e.rules.uppercase,e.rules.digits,e.rules.special],variant:"solo",flat:"",rounded:"lg",density:"comfortable",style:{"margin-bottom":"0.5em"}},{"prepend-inner":a(()=>[s(v,{icon:"mdi-lock",color:"on-surface"})]),_:1},8,["modelValue","type","append-inner-icon","rules"]),s(l,{justify:"end",style:{width:"100%",margin:"auto"}},{default:a(()=>[s(A,{onClick:e.setAppPassword,disabled:!e.form,"append-icon":"mdi-chevron-right",flat:"",color:"primary",rounded:"lg"},{default:a(()=>[h("submit")]),_:1},8,["onClick","disabled"])]),_:1})]),_:1},8,["modelValue","onSubmit"])])}const R=n(C,[["render",F]]),S=t({name:"Auth",components:{RegisterForm:R}});function B(e,o,p,m,u,c){const r=y("RegisterForm");return d(),i("div",null,[s(l,{align:"center",justify:"center",style:{height:"100vh"}},{default:a(()=>[s(P,{cols:"11",sm:"10",md:"7",lg:"5",xl:"3"},{default:a(()=>[s(r)]),_:1})]),_:1})])}const N=n(S,[["render",B]]);export{N as default};