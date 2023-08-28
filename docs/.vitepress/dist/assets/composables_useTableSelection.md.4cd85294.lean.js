import{h,l as i,w as E,b as l,d as f,o as u,c as d,C as s,a3 as w,F as v,R as b,t as F,a5 as _,a6 as S,q as R,S as x,U as B,_ as T,J as k,V as q}from"./chunks/framework.9e10ac21.js";function L(t){const n=h([]),o=i(()=>l(t)),c=i(()=>o.value.length===n.value.length),D=i(()=>o.value.length==0),y=i(()=>n.value.length>0);function g(){n.value=[]}E(o.value,()=>{n.value=n.value.filter(r=>o.value.includes(r))},{immediate:!0});function C(){n.value=o.value}function A(){if(n.value.length>0){n.value=[];return}for(const r of o.value)n.value.includes(r)||n.value.push(r)}return{source:o,selectedRows:n,allRowsSelected:c,toggleRowSelection:A,isEmptySource:D,isSelectedAvailable:y,clearSelectedRows:g,selectAllRows:C}}const e=t=>(x("data-v-f898f9a5"),t=t(),B(),t),N=e(()=>s("p",null," This is a demo for a composable that helps in handling applications with multiple tables ",-1)),P={class:"w-full overflow-x-hidden"},j={class:"w-full overflow-x-auto"},I={class:""},V=["value","checked"],U=e(()=>s("th",null,"Name",-1)),J=e(()=>s("th",null,"Phone",-1)),Q=e(()=>s("th",null,"Address",-1)),$=e(()=>s("th",null,"Role",-1)),M=e(()=>s("th",null,"Action",-1)),O=["value"],Z=e(()=>s("td",null,[s("select",null,[s("option",null,"Edit"),s("option",null,"Delete")])],-1)),z={class:"flex gap-x-3"},G=e(()=>s("h2",{class:"my-4"},"Selected Rows here:",-1)),H={class:"text-xs md:text-base"},K=f({__name:"UseTableSelection",setup(t){const n=h([{id:"1",name:"jimoh sodiq Adewale",phone:"+23412345678",address:"Nigeria, Lagos 1123, address",role:"Admin"},{id:"2",name:"jimoh sodiq Adewale",phone:"+23412345678",address:"Nigeria, Lagos 1123, address",role:"Admin"},{id:"3",name:"jimoh sodiq Adewale",phone:"+23412345678",address:"Nigeria, Lagos 1123, address",role:"Admin"},{id:"4",name:"jimoh sodiq Adewale",phone:"+23412345678",address:"Nigeria, Lagos 1123, address",role:"Admin"},{id:"5",name:"jimoh sodiq Adewale",phone:"+23412345678",address:"Nigeria, Lagos 1123, address",role:"Admin"}]);function o(){n.value.pop()}const{selectedRows:c,toggleRowSelection:D,selectAllRows:y,isSelectedAvailable:g,allRowsSelected:C,clearSelectedRows:A}=L(n);return(r,p)=>(u(),d("div",null,[s("main",null,[N,s("section",P,[s("div",j,[s("table",null,[s("thead",I,[s("th",null,[s("input",{value:l(C),checked:l(g)||l(C),onInput:p[0]||(p[0]=w((...a)=>l(D)&&l(D)(...a),["prevent"])),type:"checkbox",class:"w-4 h-4"},null,40,V)]),U,J,Q,$,M]),s("tbody",null,[(u(!0),d(v,null,b(n.value,a=>(u(),d("tr",{key:a.id,class:"h-full cursor-pointer hover:bg-slate-100 transition-colors duration-200"},[s("td",null,[_(s("input",{"onUpdate:modelValue":p[1]||(p[1]=m=>R(c)?c.value=m:null),value:a,type:"checkbox",class:"w-4 h-4"},null,8,O),[[S,l(c)]])]),s("td",null,F(a.name),1),s("td",null,F(a.phone),1),s("td",null,F(a.address),1),s("td",null,F(a.role),1),Z]))),128))])])]),s("div",z,[s("button",{class:"rounded bg-gray-400 p-1.5 text-sm text-white",onClick:p[2]||(p[2]=(...a)=>l(A)&&l(A)(...a))},"Clear Selection"),s("button",{class:"rounded bg-gray-400 p-1.5 text-sm text-white",onClick:p[3]||(p[3]=(...a)=>l(y)&&l(y)(...a))},"Select All Rows"),s("button",{class:"rounded bg-gray-400 p-1.5 text-sm text-white",onClick:o},"Delete Last Row")]),G,s("pre",H," "+F(l(c)),1)])])]))}});const W=T(K,[["__scopeId","data-v-f898f9a5"]]),X=q("",3),Y=q("",2),as=JSON.parse('{"title":"useTableSelection","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"composables/useTableSelection.md","filePath":"composables/useTableSelection.md"}'),ss={name:"composables/useTableSelection.md"},ls=Object.assign(ss,{setup(t){return(n,o)=>(u(),d("div",null,[X,k(W),Y]))}});export{as as __pageData,ls as default};