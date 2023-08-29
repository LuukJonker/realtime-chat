import{d as v,r as o,a as c,b as l,f as s,u as g,w as h,v as _,l as m,n as x,p as b,j as w,e as r,_ as y}from"./index-19da06e0.js";import{P as k}from"./profile-icon-cbb7c51f.js";const U={class:"flex h-full w-full justify-center items-center"},D={class:"grid grid-cols-2 bg-surface-100 p-8 rounded-lg text-xl"},L={class:"border-surface-400 border-r-2 p-8 flex flex-col items-start gap-4"},N=["src"],S=["disabled"],V={key:0},j={key:1},P=s("h1",{class:"text-6xl text-onDark"},"Settings",-1),B=v({__name:"SettingsView",setup(C){const e=o(c.currentUser);if(!e.value)throw new Error("User not logged in");const a=o(e.value.displayName),t=o(!1),d=async()=>{t.value=!0,e.value=c.currentUser,e.value&&(m(e.value.uid,a.value??void 0),await x(e.value,{displayName:a.value}),t.value=!1)},p=async()=>{await b(),w.push({path:"/"})};return(E,n)=>{var i,u;return r(),l("main",U,[s("div",D,[s("div",L,[s("img",{src:(i=e.value)!=null&&i.photoURL?e.value.photoURL:g(k),alt:"Profile",class:"w-32 aspect-square object-cover rounded-full",referrerpolicy:"no-referrer"},null,8,N),h(s("input",{"onUpdate:modelValue":n[0]||(n[0]=f=>a.value=f),class:"bg-surface-200 text-onDark p-2 rounded-lg focus:outline-none focus:bg-surface-300",placeholder:"Display Name"},null,512),[[_,a.value]]),s("button",{class:"bg-primary text-onLight p-2 rounded-lg disabled:text-onDark transition-colors disabled:bg-surface-300 disabled:cursor-not-allowed",onClick:d,disabled:a.value===((u=e.value)==null?void 0:u.displayName)||!a.value},[t.value?(r(),l("span",V,"Saving...")):(r(),l("span",j,"Save"))],8,S)]),s("div",{class:"flex flex-col justify-around items-center"},[P,s("button",{onClick:p,class:"bg-error text-onLight p-2 rounded-lg hover:emphasis-high"},"Logout")])])])}}}),q=y(B,[["__file","/home/luuk/code/realtime-chat/src/views/SettingsView.vue"]]);export{q as default};
