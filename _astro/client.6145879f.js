import{c as p,a as d}from"./runtime-dom.esm-bundler.49c0fa32.js";import{d as m,l as r,S as y}from"./runtime-core.esm-bundler.1b61bd4d.js";const i=()=>{},S=m({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:e,value:t,hydrate:s}){if(!t)return()=>null;let o=s?"astro-slot":"astro-static-slot";return()=>r(o,{name:e,innerHTML:t})}}),H=e=>async(t,s,o,{client:l})=>{if(delete s.class,!e.hasAttribute("ssr"))return;const c=t.name?`${t.name} Host`:void 0,u={};for(const[n,f]of Object.entries(o))u[n]=()=>r(S,{value:f,name:n==="default"?void 0:n});let a=r(t,s,u);if(A(t.setup)&&(a=r(y,null,a)),l==="only"){const n=p({name:c,render:()=>a});await i(),n.mount(e,!1)}else{const n=d({name:c,render:()=>a});await i(),n.mount(e,!0)}};function A(e){const t=e?.constructor;return t&&t.name==="AsyncFunction"}export{H as default};
