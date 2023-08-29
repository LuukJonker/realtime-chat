(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ar(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const we=Object.freeze({}),hs=Object.freeze([]),_t=()=>{},ag=()=>!1,OE=/^on[^a-z]/,zi=t=>OE.test(t),sa=t=>t.startsWith("onUpdate:"),Ce=Object.assign,Su=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},NE=Object.prototype.hasOwnProperty,ae=(t,e)=>NE.call(t,e),Q=Array.isArray,Rr=t=>ja(t)==="[object Map]",cg=t=>ja(t)==="[object Set]",J=t=>typeof t=="function",Oe=t=>typeof t=="string",Cu=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",ku=t=>_e(t)&&J(t.then)&&J(t.catch),lg=Object.prototype.toString,ja=t=>lg.call(t),Ou=t=>ja(t).slice(8,-1),ug=t=>ja(t)==="[object Object]",Nu=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fo=ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),DE=ar("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xE=/-(\w)/g,an=Ba(t=>t.replace(xE,(e,n)=>n?n.toUpperCase():"")),VE=/\B([A-Z])/g,Xn=Ba(t=>t.replace(VE,"-$1").toLowerCase()),Vr=Ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),mr=Ba(t=>t?`on${Vr(t)}`:""),vi=(t,e)=>!Object.is(t,e),ss=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ia=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bf;const oa=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Du(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Oe(r)?FE(r):Du(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Oe(t))return t;if(_e(t))return t}}const ME=/;(?![^(]*\))/g,LE=/:([^]+)/,UE=/\/\*[^]*?\*\//g;function FE(t){const e={};return t.replace(UE,"").split(ME).forEach(n=>{if(n){const r=n.split(LE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xu(t){let e="";if(Oe(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=xu(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $E="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",jE="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",BE=ar($E),qE=ar(jE),HE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",WE=ar(HE);function hg(t){return!!t||t===""}const KE=t=>Oe(t)?t:t==null?"":Q(t)||_e(t)&&(t.toString===lg||!J(t.toString))?JSON.stringify(t,fg,2):String(t),fg=(t,e)=>e&&e.__v_isRef?fg(t,e.value):Rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:cg(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!Q(e)&&!ug(e)?String(e):e;function aa(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let vt;class dg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=vt;try{return vt=this,e()}finally{vt=n}}else aa("cannot run an inactive effect scope.")}on(){vt=this}off(){vt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function pg(t){return new dg(t)}function zE(t,e=vt){e&&e.active&&e.effects.push(t)}function gg(){return vt}function GE(t){vt?vt.cleanups.push(t):aa("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Vu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mg=t=>(t.w&Zn)>0,_g=t=>(t.n&Zn)>0,QE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Zn},YE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];mg(s)&&!_g(s)?s.delete(t):e[n++]=s,s.w&=~Zn,s.n&=~Zn}e.length=n}},ca=new WeakMap;let Ys=0,Zn=1;const El=30;let dt;const br=Symbol("iterate"),wl=Symbol("Map key iterate");class Mu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,zE(this,r)}run(){if(!this.active)return this.fn();let e=dt,n=zn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dt,dt=this,zn=!0,Zn=1<<++Ys,Ys<=El?QE(this):Pf(this),this.fn()}finally{Ys<=El&&YE(this),Zn=1<<--Ys,dt=this.parent,zn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dt===this?this.deferStop=!0:this.active&&(Pf(this),this.onStop&&this.onStop(),this.active=!1)}}function Pf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zn=!0;const yg=[];function Kr(){yg.push(zn),zn=!1}function zr(){const t=yg.pop();zn=t===void 0?!0:t}function at(t,e,n){if(zn&&dt){let r=ca.get(t);r||ca.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Vu()),vg(s,{effect:dt,target:t,type:e,key:n})}}function vg(t,e){let n=!1;Ys<=El?_g(t)||(t.n|=Zn,n=!mg(t)):n=!t.has(dt),n&&(t.add(dt),dt.deps.push(t),dt.onTrack&&dt.onTrack(Ce({effect:dt},e)))}function cn(t,e,n,r,s,i){const o=ca.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Nu(n)&&a.push(o.get("length")):(a.push(o.get(br)),Rr(t)&&a.push(o.get(wl)));break;case"delete":Q(t)||(a.push(o.get(br)),Rr(t)&&a.push(o.get(wl)));break;case"set":Rr(t)&&a.push(o.get(br));break}const c={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&Il(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);Il(Vu(l),c)}}function Il(t,e){const n=Q(t)?t:[...t];for(const r of n)r.computed&&Sf(r,e);for(const r of n)r.computed||Sf(r,e)}function Sf(t,e){(t!==dt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Ce({effect:t},e)),t.scheduler?t.scheduler():t.run())}function JE(t,e){var n;return(n=ca.get(t))==null?void 0:n.get(e)}const XE=ar("__proto__,__v_isRef,__isVue"),Eg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cu)),ZE=qa(),ew=qa(!1,!0),tw=qa(!0),nw=qa(!0,!0),Cf=rw();function rw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)at(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Kr();const r=X(this)[e].apply(this,n);return zr(),r}}),t}function sw(t){const e=X(this);return at(e,"has",t),e.hasOwnProperty(t)}function qa(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Sg:Pg:e?bg:Rg).get(r))return r;const o=Q(r);if(!t){if(o&&ae(Cf,s))return Reflect.get(Cf,s,i);if(s==="hasOwnProperty")return sw}const a=Reflect.get(r,s,i);return(Cu(s)?Eg.has(s):XE(s))||(t||at(r,"get",s),e)?a:Te(a)?o&&Nu(s)?a:a.value:_e(a)?t?kg(a):Gi(a):a}}const iw=wg(),ow=wg(!0);function wg(t=!1){return function(n,r,s,i){let o=n[r];if(er(o)&&Te(o)&&!Te(s))return!1;if(!t&&(!la(s)&&!er(s)&&(o=X(o),s=X(s)),!Q(n)&&Te(o)&&!Te(s)))return o.value=s,!0;const a=Q(n)&&Nu(r)?Number(r)<n.length:ae(n,r),c=Reflect.set(n,r,s,i);return n===X(i)&&(a?vi(s,o)&&cn(n,"set",r,s,o):cn(n,"add",r,s)),c}}function aw(t,e){const n=ae(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&cn(t,"delete",e,void 0,r),s}function cw(t,e){const n=Reflect.has(t,e);return(!Cu(e)||!Eg.has(e))&&at(t,"has",e),n}function lw(t){return at(t,"iterate",Q(t)?"length":br),Reflect.ownKeys(t)}const Ig={get:ZE,set:iw,deleteProperty:aw,has:cw,ownKeys:lw},Tg={get:tw,set(t,e){return aa(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return aa(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},uw=Ce({},Ig,{get:ew,set:ow}),hw=Ce({},Tg,{get:nw}),Lu=t=>t,Ha=t=>Reflect.getPrototypeOf(t);function Eo(t,e,n=!1,r=!1){t=t.__v_raw;const s=X(t),i=X(e);n||(e!==i&&at(s,"get",e),at(s,"get",i));const{has:o}=Ha(s),a=r?Lu:n?Uu:Ei;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function wo(t,e=!1){const n=this.__v_raw,r=X(n),s=X(t);return e||(t!==s&&at(r,"has",t),at(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Io(t,e=!1){return t=t.__v_raw,!e&&at(X(t),"iterate",br),Reflect.get(t,"size",t)}function kf(t){t=X(t);const e=X(this);return Ha(e).has.call(e,t)||(e.add(t),cn(e,"add",t,t)),this}function Of(t,e){e=X(e);const n=X(this),{has:r,get:s}=Ha(n);let i=r.call(n,t);i?Ag(n,r,t):(t=X(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?vi(e,o)&&cn(n,"set",t,e,o):cn(n,"add",t,e),this}function Nf(t){const e=X(this),{has:n,get:r}=Ha(e);let s=n.call(e,t);s?Ag(e,n,t):(t=X(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&cn(e,"delete",t,void 0,i),o}function Df(){const t=X(this),e=t.size!==0,n=Rr(t)?new Map(t):new Set(t),r=t.clear();return e&&cn(t,"clear",void 0,void 0,n),r}function To(t,e){return function(r,s){const i=this,o=i.__v_raw,a=X(o),c=e?Lu:t?Uu:Ei;return!t&&at(a,"iterate",br),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ao(t,e,n){return function(...r){const s=this.__v_raw,i=X(s),o=Rr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Lu:e?Uu:Ei;return!e&&at(i,"iterate",c?wl:br),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function xn(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${Vr(t)} operation ${n}failed: target is readonly.`,X(this))}return t==="delete"?!1:this}}function fw(){const t={get(i){return Eo(this,i)},get size(){return Io(this)},has:wo,add:kf,set:Of,delete:Nf,clear:Df,forEach:To(!1,!1)},e={get(i){return Eo(this,i,!1,!0)},get size(){return Io(this)},has:wo,add:kf,set:Of,delete:Nf,clear:Df,forEach:To(!1,!0)},n={get(i){return Eo(this,i,!0)},get size(){return Io(this,!0)},has(i){return wo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:To(!0,!1)},r={get(i){return Eo(this,i,!0,!0)},get size(){return Io(this,!0)},has(i){return wo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:To(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ao(i,!1,!1),n[i]=Ao(i,!0,!1),e[i]=Ao(i,!1,!0),r[i]=Ao(i,!0,!0)}),[t,n,e,r]}const[dw,pw,gw,mw]=fw();function Wa(t,e){const n=e?t?mw:gw:t?pw:dw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const _w={get:Wa(!1,!1)},yw={get:Wa(!1,!0)},vw={get:Wa(!0,!1)},Ew={get:Wa(!0,!0)};function Ag(t,e,n){const r=X(n);if(r!==n&&e.call(t,r)){const s=Ou(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Rg=new WeakMap,bg=new WeakMap,Pg=new WeakMap,Sg=new WeakMap;function ww(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iw(t){return t.__v_skip||!Object.isExtensible(t)?0:ww(Ou(t))}function Gi(t){return er(t)?t:Ka(t,!1,Ig,_w,Rg)}function Cg(t){return Ka(t,!1,uw,yw,bg)}function kg(t){return Ka(t,!0,Tg,vw,Pg)}function Js(t){return Ka(t,!0,hw,Ew,Sg)}function Ka(t,e,n,r,s){if(!_e(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Iw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ut(t){return er(t)?Ut(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function la(t){return!!(t&&t.__v_isShallow)}function ua(t){return Ut(t)||er(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function _n(t){return ia(t,"__v_skip",!0),t}const Ei=t=>_e(t)?Gi(t):t,Uu=t=>_e(t)?kg(t):t;function Og(t){zn&&dt&&(t=X(t),vg(t.dep||(t.dep=Vu()),{target:t,type:"get",key:"value"}))}function Ng(t,e){t=X(t);const n=t.dep;n&&Il(n,{target:t,type:"set",key:"value",newValue:e})}function Te(t){return!!(t&&t.__v_isRef===!0)}function Os(t){return Dg(t,!1)}function Tw(t){return Dg(t,!0)}function Dg(t,e){return Te(t)?t:new Aw(t,e)}class Aw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Ei(e)}get value(){return Og(this),this._value}set value(e){const n=this.__v_isShallow||la(e)||er(e);e=n?e:X(e),vi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ei(e),Ng(this,e))}}function wn(t){return Te(t)?t.value:t}const Rw={get:(t,e,n)=>wn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function xg(t){return Ut(t)?t:new Proxy(t,Rw)}function xf(t){ua(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=Vg(t,n);return e}class bw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return JE(X(this._object),this._key)}}class Pw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function $o(t,e,n){return Te(t)?t:J(t)?new Pw(t):_e(t)&&arguments.length>1?Vg(t,e,n):Os(t)}function Vg(t,e,n){const r=t[e];return Te(r)?r:new bw(t,e,n)}class Sw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Mu(e,()=>{this._dirty||(this._dirty=!0,Ng(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=X(this);return Og(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Cw(t,e,n=!1){let r,s;const i=J(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new Sw(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const Pr=[];function jo(t){Pr.push(t)}function Bo(){Pr.pop()}function S(t,...e){Kr();const n=Pr.length?Pr[Pr.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=kw();if(r)In(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${tc(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...Ow(s)),console.warn(...i)}zr()}function kw(){let t=Pr[Pr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function Ow(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...Nw(n))}),e}function Nw({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${tc(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...Dw(t.props),i]:[s+i]}function Dw(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...Mg(r,t[r]))}),n.length>3&&e.push(" ..."),e}function Mg(t,e,n){return Oe(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Te(e)?(e=Mg(t,X(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):J(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=X(e),n?e:[`${t}=`,e])}const Fu={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function In(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){za(i,e,n)}return s}function Ft(t,e,n,r){if(J(t)){const i=In(t,e,n,r);return i&&ku(i)&&i.catch(o=>{za(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ft(t[i],e,n,r));return s}function za(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Fu[n];for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){In(c,null,10,[t,o,a]);return}}xw(t,n,s,r)}function xw(t,e,n,r=!0){{const s=Fu[e];if(n&&jo(n),S(`Unhandled error${s?` during execution of ${s}`:""}`),n&&Bo(),r)throw t;console.error(t)}}let wi=!1,Tl=!1;const tt=[];let zt=0;const fs=[];let Kt=null,Ln=0;const Lg=Promise.resolve();let $u=null;const Vw=100;function ha(t){const e=$u||Lg;return t?e.then(this?t.bind(this):t):e}function Mw(t){let e=zt+1,n=tt.length;for(;e<n;){const r=e+n>>>1;Ii(tt[r])<t?e=r+1:n=r}return e}function Ga(t){(!tt.length||!tt.includes(t,wi&&t.allowRecurse?zt+1:zt))&&(t.id==null?tt.push(t):tt.splice(Mw(t.id),0,t),Ug())}function Ug(){!wi&&!Tl&&(Tl=!0,$u=Lg.then(jg))}function Lw(t){const e=tt.indexOf(t);e>zt&&tt.splice(e,1)}function Fg(t){Q(t)?fs.push(...t):(!Kt||!Kt.includes(t,t.allowRecurse?Ln+1:Ln))&&fs.push(t),Ug()}function Vf(t,e=wi?zt+1:0){for(t=t||new Map;e<tt.length;e++){const n=tt[e];if(n&&n.pre){if(ju(t,n))continue;tt.splice(e,1),e--,n()}}}function $g(t){if(fs.length){const e=[...new Set(fs)];if(fs.length=0,Kt){Kt.push(...e);return}for(Kt=e,t=t||new Map,Kt.sort((n,r)=>Ii(n)-Ii(r)),Ln=0;Ln<Kt.length;Ln++)ju(t,Kt[Ln])||Kt[Ln]();Kt=null,Ln=0}}const Ii=t=>t.id==null?1/0:t.id,Uw=(t,e)=>{const n=Ii(t)-Ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function jg(t){Tl=!1,wi=!0,t=t||new Map,tt.sort(Uw);const e=n=>ju(t,n);try{for(zt=0;zt<tt.length;zt++){const n=tt[zt];if(n&&n.active!==!1){if(e(n))continue;In(n,null,14)}}}finally{zt=0,tt.length=0,$g(t),wi=!1,$u=null,(tt.length||fs.length)&&jg(t)}}function ju(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>Vw){const r=e.ownerInstance,s=r&&Ju(r.type);return S(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let Sr=!1;const is=new Set;oa().__VUE_HMR_RUNTIME__={createRecord:$c(Bg),rerender:$c(jw),reload:$c(Bw)};const Mr=new Map;function Fw(t){const e=t.type.__hmrId;let n=Mr.get(e);n||(Bg(e,t.type),n=Mr.get(e)),n.instances.add(t)}function $w(t){Mr.get(t.type.__hmrId).instances.delete(t)}function Bg(t,e){return Mr.has(t)?!1:(Mr.set(t,{initialDef:ai(e),instances:new Set}),!0)}function ai(t){return pm(t)?t.__vccOpts:t}function jw(t,e){const n=Mr.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,ai(r.type).render=e),r.renderCache=[],Sr=!0,r.update(),Sr=!1}))}function Bw(t,e){const n=Mr.get(t);if(!n)return;e=ai(e),Mf(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=ai(s.type);is.has(i)||(i!==n.initialDef&&Mf(i,e),is.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(is.add(i),s.ceReload(e.styles),is.delete(i)):s.parent?Ga(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Fg(()=>{for(const s of r)is.delete(ai(s.type))})}function Mf(t,e){Ce(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function $c(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Gt,Xs=[],Al=!1;function Qi(t,...e){Gt?Gt.emit(t,...e):Al||Xs.push({event:t,args:e})}function qg(t,e){var n,r;Gt=t,Gt?(Gt.enabled=!0,Xs.forEach(({event:s,args:i})=>Gt.emit(s,...i)),Xs=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{qg(i,e)}),setTimeout(()=>{Gt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Al=!0,Xs=[])},3e3)):(Al=!0,Xs=[])}function qw(t,e){Qi("app:init",t,e,{Fragment:xt,Text:Yi,Comment:Tt,Static:Wo})}function Hw(t){Qi("app:unmount",t)}const Ww=Bu("component:added"),Hg=Bu("component:updated"),Kw=Bu("component:removed"),zw=t=>{Gt&&typeof Gt.cleanupBuffer=="function"&&!Gt.cleanupBuffer(t)&&Kw(t)};function Bu(t){return e=>{Qi(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const Gw=Wg("perf:start"),Qw=Wg("perf:end");function Wg(t){return(e,n,r)=>{Qi(t,e.appContext.app,e.uid,e,n,r)}}function Yw(t,e,n){Qi("component:emit",t.appContext.app,t,e,n)}function Jw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(mr(e)in h))&&S(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${mr(e)}" prop.`);else{const f=u[e];J(f)&&(f(...n)||S(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||we;f&&(s=n.map(p=>Oe(p)?p.trim():p)),h&&(s=n.map(vl))}Yw(t,e,s);{const u=e.toLowerCase();u!==e&&r[mr(u)]&&S(`Event "${u}" is emitted in component ${tc(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Xn(e)}" instead of "${e}".`)}let a,c=r[a=mr(e)]||r[a=mr(an(e))];!c&&i&&(c=r[a=mr(Xn(e))]),c&&Ft(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(l,t,6,s)}}function Kg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=Kg(l,e,!0);u&&(a=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(_e(t)&&r.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):Ce(o,i),_e(t)&&r.set(t,o),o)}function Qa(t,e){return!t||!zi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Xn(e))||ae(t,e))}let rt=null,zg=null;function fa(t){const e=rt;return rt=t,zg=t&&t.type.__scopeId||null,e}function Xw(t,e=rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qf(-1);const i=fa(e);let o;try{o=t(...s)}finally{fa(i),r._d&&Qf(1)}return Hg(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let Rl=!1;function da(){Rl=!0}function jc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:_,inheritAttrs:T}=t;let E,R;const N=fa(t);Rl=!1;try{if(n.shapeFlag&4){const U=s||r;E=Vt(u.call(U,U,h,i,p,f,_)),R=c}else{const U=e;c===i&&da(),E=Vt(U.length>1?U(i,{get attrs(){return da(),c},slots:a,emit:l}):U(i,null)),R=e.props?c:eI(c)}}catch(U){ci.length=0,za(U,t,1),E=wt(Tt)}let k=E,K;if(E.patchFlag>0&&E.patchFlag&2048&&([k,K]=Zw(E)),R&&T!==!1){const U=Object.keys(R),{shapeFlag:de}=k;if(U.length){if(de&7)o&&U.some(sa)&&(R=tI(R,o)),k=tr(k,R);else if(!Rl&&k.type!==Tt){const B=Object.keys(c),$e=[],ye=[];for(let F=0,L=B.length;F<L;F++){const oe=B[F];zi(oe)?sa(oe)||$e.push(oe[2].toLowerCase()+oe.slice(3)):ye.push(oe)}ye.length&&S(`Extraneous non-props attributes (${ye.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),$e.length&&S(`Extraneous non-emits event listeners (${$e.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Lf(k)||S("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=tr(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(Lf(k)||S("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=n.transition),K?K(k):E=k,fa(N),E}const Zw=t=>{const e=t.children,n=t.dynamicChildren,r=Gg(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Vt(r),o]};function Gg(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Ri(r)){if(r.type!==Tt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const eI=t=>{let e;for(const n in t)(n==="class"||n==="style"||zi(n))&&((e||(e={}))[n]=t[n]);return e},tI=(t,e)=>{const n={};for(const r in t)(!sa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},Lf=t=>t.shapeFlag&7||t.type===Tt;function nI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if((s||a)&&Sr||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Uf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Qa(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Uf(r,o,l):!0:!!o;return!1}function Uf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qa(n,i))return!0}return!1}function rI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sI=t=>t.__isSuspense;function iI(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):Fg(t)}function oI(t,e){return qu(t,null,e)}const Ro={};function Cr(t,e,n){return J(e)||S("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),qu(t,e,n)}function qu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){var a;e||(n!==void 0&&S('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&S('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=U=>{S("Invalid watch source: ",U,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},l=gg()===((a=Ue)==null?void 0:a.scope)?Ue:null;let u,h=!1,f=!1;if(Te(t)?(u=()=>t.value,h=la(t)):Ut(t)?(u=()=>t,r=!0):Q(t)?(f=!0,h=t.some(U=>Ut(U)||la(U)),u=()=>t.map(U=>{if(Te(U))return U.value;if(Ut(U))return Er(U);if(J(U))return In(U,l,2);c(U)})):J(t)?e?u=()=>In(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return p&&p(),Ft(t,l,3,[_])}:(u=_t,c(t)),e&&r){const U=u;u=()=>Er(U())}let p,_=U=>{p=k.onStop=()=>{In(U,l,4)}},T;if(bi)if(_=_t,e?n&&Ft(e,l,3,[u(),f?[]:void 0,_]):u(),s==="sync"){const U=gT();T=U.__watcherHandles||(U.__watcherHandles=[])}else return _t;let E=f?new Array(t.length).fill(Ro):Ro;const R=()=>{if(k.active)if(e){const U=k.run();(r||h||(f?U.some((de,B)=>vi(de,E[B])):vi(U,E)))&&(p&&p(),Ft(e,l,3,[U,E===Ro?void 0:f&&E[0]===Ro?[]:E,_]),E=U)}else k.run()};R.allowRecurse=!!e;let N;s==="sync"?N=R:s==="post"?N=()=>mt(R,l&&l.suspense):(R.pre=!0,l&&(R.id=l.uid),N=()=>Ga(R));const k=new Mu(u,N);k.onTrack=i,k.onTrigger=o,e?n?R():E=k.run():s==="post"?mt(k.run.bind(k),l&&l.suspense):k.run();const K=()=>{k.stop(),l&&l.scope&&Su(l.scope.effects,k)};return T&&T.push(K),K}function aI(t,e,n){const r=this.proxy,s=Oe(t)?t.includes(".")?Qg(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=Ue;vs(this);const a=qu(s,i.bind(r),n);return o?vs(o):Or(),a}function Qg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Er(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))Er(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)Er(t[n],e);else if(cg(t)||Rr(t))t.forEach(n=>{Er(n,e)});else if(ug(t))for(const n in t)Er(t[n],e);return t}function Yg(t){DE(t)&&S("Do not use built-in directive ids as custom directive id: "+t)}function t1(t,e){const n=rt;if(n===null)return S("withDirectives can only be used inside render functions."),t;const r=ec(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Er(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function pr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Kr(),Ft(c,n,8,[t.el,a,t,e]),zr())}}function Ya(t,e){return J(t)?(()=>Ce({name:t.name},e,{setup:t}))():t}const qo=t=>!!t.type.__asyncLoader,Hu=t=>t.type.__isKeepAlive;function cI(t,e){Jg(t,"a",e)}function lI(t,e){Jg(t,"da",e)}function Jg(t,e,n=Ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ja(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Hu(s.parent.vnode)&&uI(r,e,n,s),s=s.parent}}function uI(t,e,n,r){const s=Ja(e,t,r,!0);Xg(()=>{Su(r[e],s)},n)}function Ja(t,e,n=Ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Kr(),vs(n);const a=Ft(e,n,t,o);return Or(),zr(),a});return r?s.unshift(i):s.push(i),i}else{const s=mr(Fu[t].replace(/ hook$/,""));S(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const kn=t=>(e,n=Ue)=>(!bi||t==="sp")&&Ja(t,(...r)=>e(...r),n),hI=kn("bm"),fI=kn("m"),dI=kn("bu"),pI=kn("u"),gI=kn("bum"),Xg=kn("um"),mI=kn("sp"),_I=kn("rtg"),yI=kn("rtc");function vI(t,e=Ue){Ja("ec",t,e)}const bl="components";function n1(t,e){return wI(bl,t,!0,e)||t}const EI=Symbol.for("v-ndc");function wI(t,e,n=!0,r=!1){const s=rt||Ue;if(s){const i=s.type;if(t===bl){const a=Ju(i,!1);if(a&&(a===e||a===an(e)||a===Vr(an(e))))return i}const o=Ff(s[t]||i[t],e)||Ff(s.appContext[t],e);if(!o&&r)return i;if(n&&!o){const a=t===bl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";S(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else S(`resolve${Vr(t.slice(0,-1))} can only be used in render() or setup().`)}function Ff(t,e){return t&&(t[e]||t[an(e)]||t[Vr(an(e))])}function r1(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||Oe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){Number.isInteger(t)||S(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Pl=t=>t?fm(t)?ec(t)||t.proxy:Pl(t.parent):null,kr=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>Js(t.props),$attrs:t=>Js(t.attrs),$slots:t=>Js(t.slots),$refs:t=>Js(t.refs),$parent:t=>Pl(t.parent),$root:t=>Pl(t.root),$emit:t=>t.emit,$options:t=>Ku(t),$forceUpdate:t=>t.f||(t.f=()=>Ga(t.update)),$nextTick:t=>t.n||(t.n=ha.bind(t.proxy)),$watch:t=>aI.bind(t)}),Wu=t=>t==="_"||t==="$",Bc=(t,e)=>t!==we&&!t.__isScriptSetup&&ae(t,e),Zg={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Bc(r,e))return o[e]=1,r[e];if(s!==we&&ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==we&&ae(n,e))return o[e]=4,n[e];Sl&&(o[e]=0)}}const u=kr[e];let h,f;if(u)return e==="$attrs"?(at(t,"get",e),da()):e==="$slots"&&at(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ae(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ae(f,e))return f[e];rt&&(!Oe(e)||e.indexOf("__v")!==0)&&(s!==we&&Wu(e[0])&&ae(s,e)?S(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===rt&&S(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Bc(s,e)?(s[e]=n,!0):s.__isScriptSetup&&ae(s,e)?(S(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==we&&ae(r,e)?(r[e]=n,!0):ae(t.props,e)?(S(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(S(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ae(t,o)||Bc(e,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(kr,o)||ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};Zg.ownKeys=t=>(S("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function II(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(kr).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>kr[n](t),set:_t})}),e}function TI(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:_t})})}function AI(t){const{ctx:e,setupState:n}=t;Object.keys(X(n)).forEach(r=>{if(!n.__isScriptSetup){if(Wu(r[0])){S(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:_t})}})}function $f(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function RI(){const t=Object.create(null);return(e,n)=>{t[n]?S(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Sl=!0;function bI(t){const e=Ku(t),n=t.proxy,r=t.ctx;Sl=!1,e.beforeCreate&&jf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:T,deactivated:E,beforeDestroy:R,beforeUnmount:N,destroyed:k,unmounted:K,render:U,renderTracked:de,renderTriggered:B,errorCaptured:$e,serverPrefetch:ye,expose:F,inheritAttrs:L,components:oe,directives:Pe,filters:Bt}=e,gt=RI();{const[ne]=t.propsOptions;if(ne)for(const Y in ne)gt("Props",Y)}if(l&&PI(l,r,gt),o)for(const ne in o){const Y=o[ne];J(Y)?(Object.defineProperty(r,ne,{value:Y.bind(n),configurable:!0,enumerable:!0,writable:!0}),gt("Methods",ne)):S(`Method "${ne}" has type "${typeof Y}" in the component definition. Did you reference the function correctly?`)}if(s){J(s)||S("The data option must be a function. Plain object usage is no longer supported.");const ne=s.call(n,n);if(ku(ne)&&S("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!_e(ne))S("data() should return an object.");else{t.data=Gi(ne);for(const Y in ne)gt("Data",Y),Wu(Y[0])||Object.defineProperty(r,Y,{configurable:!0,enumerable:!0,get:()=>ne[Y],set:_t})}}if(Sl=!0,i)for(const ne in i){const Y=i[ne],bt=J(Y)?Y.bind(n,n):J(Y.get)?Y.get.bind(n,n):_t;bt===_t&&S(`Computed property "${ne}" has no getter.`);const dr=!J(Y)&&J(Y.set)?Y.set.bind(n):()=>{S(`Write operation failed: computed property "${ne}" is readonly.`)},On=Et({get:bt,set:dr});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>On.value,set:qt=>On.value=qt}),gt("Computed",ne)}if(a)for(const ne in a)em(a[ne],r,n,ne);if(c){const ne=J(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Y=>{Ho(Y,ne[Y])})}u&&jf(u,t,"c");function je(ne,Y){Q(Y)?Y.forEach(bt=>ne(bt.bind(n))):Y&&ne(Y.bind(n))}if(je(hI,h),je(fI,f),je(dI,p),je(pI,_),je(cI,T),je(lI,E),je(vI,$e),je(yI,de),je(_I,B),je(gI,N),je(Xg,K),je(mI,ye),Q(F))if(F.length){const ne=t.exposed||(t.exposed={});F.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:bt=>n[Y]=bt})})}else t.exposed||(t.exposed={});U&&t.render===_t&&(t.render=U),L!=null&&(t.inheritAttrs=L),oe&&(t.components=oe),Pe&&(t.directives=Pe)}function PI(t,e,n=_t){Q(t)&&(t=Cl(t));for(const r in t){const s=t[r];let i;_e(s)?"default"in s?i=Zt(s.from||r,s.default,!0):i=Zt(s.from||r):i=Zt(s),Te(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function jf(t,e,n){Ft(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function em(t,e,n,r){const s=r.includes(".")?Qg(n,r):()=>n[r];if(Oe(t)){const i=e[t];J(i)?Cr(s,i):S(`Invalid watch handler specified by key "${t}"`,i)}else if(J(t))Cr(s,t.bind(n));else if(_e(t))if(Q(t))t.forEach(i=>em(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)?Cr(s,i,t):S(`Invalid watch handler specified by key "${t.handler}"`,i)}else S(`Invalid watch option: "${r}"`,t)}function Ku(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>pa(c,l,o,!0)),pa(c,e,o)),_e(e)&&i.set(e,c),c}function pa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&pa(t,i,n,!0),s&&s.forEach(o=>pa(t,o,n,!0));for(const o in e)if(r&&o==="expose")S('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=SI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const SI={data:Bf,props:qf,emits:qf,methods:Zs,computed:Zs,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Zs,directives:Zs,watch:kI,provide:Bf,inject:CI};function Bf(t,e){return e?t?function(){return Ce(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function CI(t,e){return Zs(Cl(t),Cl(e))}function Cl(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?Ce(Object.create(null),t,e):e}function qf(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:Ce(Object.create(null),$f(t),$f(e??{})):e}function kI(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function tm(){return{app:null,config:{isNativeTag:ag,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let OI=0;function NI(t,e){return function(r,s=null){J(r)||(r=Ce({},r)),s!=null&&!_e(s)&&(S("root props passed to app.mount() must be an object."),s=null);const i=tm();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){S("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const o=new Set;let a=!1;const c=i.app={_uid:OI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Zf,get config(){return i.config},set config(l){S("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?S("Plugin has already been applied to target app."):l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)?(o.add(l),l(c,...u)):S('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return i.mixins.includes(l)?S("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),c},component(l,u){return Vl(l,i.config),u?(i.components[l]&&S(`Component "${l}" has already been registered in target app.`),i.components[l]=u,c):i.components[l]},directive(l,u){return Yg(l),u?(i.directives[l]&&S(`Directive "${l}" has already been registered in target app.`),i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(a)S("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&S("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=wt(r,s);return f.appContext=i,i.reload=()=>{t(tr(f),l,h)},u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,c._instance=f.component,qw(c,Zf),ec(f.component)||f.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,Hw(c),delete c._container.__vue_app__):S("Cannot unmount an app that is not mounted.")},provide(l,u){return l in i.provides&&S(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=u,c},runWithContext(l){Ti=c;try{return l()}finally{Ti=null}}};return c}}let Ti=null;function Ho(t,e){if(!Ue)S("provide() can only be used inside setup().");else{let n=Ue.provides;const r=Ue.parent&&Ue.parent.provides;r===n&&(n=Ue.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=Ue||rt;if(r||Ti){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ti._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r&&r.proxy):e;S(`injection "${String(t)}" not found.`)}else S("inject() can only be used inside setup() or functional components.")}function DI(){return!!(Ue||rt||Ti)}function xI(t,e,n,r=!1){const s={},i={};ia(i,Xa,1),t.propsDefaults=Object.create(null),nm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);sm(e||{},s,t),n?t.props=r?s:Cg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function VI(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function MI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=X(s),[c]=t.propsOptions;let l=!1;if(!VI(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Qa(t.emitsOptions,f))continue;const p=e[f];if(c)if(ae(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const _=an(f);s[_]=kl(c,a,_,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{nm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=Xn(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=kl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&cn(t,"set","$attrs"),sm(e||{},s,t)}function nm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fo(c))continue;const l=e[c];let u;s&&ae(s,u=an(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Qa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=kl(s,c,h,l[h],t,!ae(l,h))}}return o}function kl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(vs(s),r=l[n]=c.call(null,e),Or())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xn(n))&&(r=!0))}return r}function rm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[f,p]=rm(h,e,!0);Ce(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return _e(t)&&r.set(t,hs),hs;if(Q(i))for(let u=0;u<i.length;u++){Oe(i[u])||S("props must be strings when using array syntax.",i[u]);const h=an(i[u]);Hf(h)&&(o[h]=we)}else if(i){_e(i)||S("invalid props options",i);for(const u in i){const h=an(u);if(Hf(h)){const f=i[u],p=o[h]=Q(f)||J(f)?{type:f}:Ce({},f);if(p){const _=Kf(Boolean,p.type),T=Kf(String,p.type);p[0]=_>-1,p[1]=T<0||_<T,(_>-1||ae(p,"default"))&&a.push(h)}}}}const l=[o,a];return _e(t)&&r.set(t,l),l}function Hf(t){return t[0]!=="$"?!0:(S(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Ol(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wf(t,e){return Ol(t)===Ol(e)}function Kf(t,e){return Q(e)?e.findIndex(n=>Wf(n,t)):J(e)&&Wf(e,t)?0:-1}function sm(t,e,n){const r=X(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&LI(i,r[i],o,!ae(t,i)&&!ae(t,Xn(i)))}}function LI(t,e,n,r){const{type:s,required:i,validator:o,skipCheck:a}=n;if(i&&r){S('Missing required prop: "'+t+'"');return}if(!(e==null&&!i)){if(s!=null&&s!==!0&&!a){let c=!1;const l=Q(s)?s:[s],u=[];for(let h=0;h<l.length&&!c;h++){const{valid:f,expectedType:p}=FI(e,l[h]);u.push(p||""),c=f}if(!c){S($I(t,e,u));return}}o&&!o(e)&&S('Invalid prop: custom validator check failed for prop "'+t+'".')}}const UI=ar("String,Number,Boolean,Function,Symbol,BigInt");function FI(t,e){let n;const r=Ol(e);if(UI(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=_e(t):r==="Array"?n=Q(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function $I(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(Vr).join(" | ")}`;const s=n[0],i=Ou(e),o=zf(e,s),a=zf(e,i);return n.length===1&&Gf(s)&&!jI(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,Gf(i)&&(r+=`with value ${a}.`),r}function zf(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Gf(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function jI(...t){return t.some(e=>e.toLowerCase()==="boolean")}const im=t=>t[0]==="_"||t==="$stable",zu=t=>Q(t)?t.map(Vt):[Vt(t)],BI=(t,e,n)=>{if(e._n)return e;const r=Xw((...s)=>(Ue&&S(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),zu(e(...s))),n);return r._c=!1,r},om=(t,e,n)=>{const r=t._ctx;for(const s in t){if(im(s))continue;const i=t[s];if(J(i))e[s]=BI(s,i,r);else if(i!=null){S(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=zu(i);e[s]=()=>o}}},am=(t,e)=>{Hu(t.vnode)||S("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=zu(e);t.slots.default=()=>n},qI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),ia(e,"_",n)):om(e,t.slots={})}else t.slots={},e&&am(t,e);ia(t.slots,Xa,1)},HI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?Sr?(Ce(s,e),cn(t,"set","$slots")):n&&a===1?i=!1:(Ce(s,e),!n&&a===1&&delete s._):(i=!e.$stable,om(e,s)),o=e}else e&&(am(t,e),o={default:1});if(i)for(const a in s)!im(a)&&!(a in o)&&delete s[a]};function Nl(t,e,n,r,s=!1){if(Q(t)){t.forEach((f,p)=>Nl(f,e&&(Q(e)?e[p]:e),n,r,s));return}if(qo(r)&&!s)return;const i=r.shapeFlag&4?ec(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t;if(!a){S("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Oe(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Te(l)&&(l.value=null)),J(c))In(c,a,12,[o,u]);else{const f=Oe(c),p=Te(c);if(f||p){const _=()=>{if(t.f){const T=f?ae(h,c)?h[c]:u[c]:c.value;s?Q(T)&&Su(T,i):Q(T)?T.includes(i)||T.push(i):f?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ae(h,c)&&(h[c]=o)):p?(c.value=o,t.k&&(u[t.k]=o)):S("Invalid template ref type:",c,`(${typeof c})`)};o?(_.id=-1,mt(_,n)):_()}else S("Invalid template ref type:",c,`(${typeof c})`)}}let Bs,$n;function dn(t,e){t.appContext.config.performance&&ga()&&$n.mark(`vue-${e}-${t.uid}`),Gw(t,e,ga()?$n.now():Date.now())}function pn(t,e){if(t.appContext.config.performance&&ga()){const n=`vue-${e}-${t.uid}`,r=n+":end";$n.mark(r),$n.measure(`<${tc(t,t.type)}> ${e}`,n,r),$n.clearMarks(n),$n.clearMarks(r)}Qw(t,e,ga()?$n.now():Date.now())}function ga(){return Bs!==void 0||(typeof window<"u"&&window.performance?(Bs=!0,$n=window.performance):Bs=!1),Bs}function WI(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const mt=iI;function KI(t){return zI(t)}function zI(t,e){WI();const n=oa();n.__VUE__=!0,qg(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=_t,insertStaticContent:_}=t,T=(d,g,m,w=null,v=null,C=null,D=!1,P=null,O=Sr?!1:!!g.dynamicChildren)=>{if(d===g)return;d&&!qs(d,g)&&(w=V(d),Pt(d,v,C,!0),d=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:A,ref:W,shapeFlag:q}=g;switch(A){case Yi:E(d,g,m,w);break;case Tt:R(d,g,m,w);break;case Wo:d==null?N(g,m,w,D):k(d,g,m,D);break;case xt:Pe(d,g,m,w,v,C,D,P,O);break;default:q&1?de(d,g,m,w,v,C,D,P,O):q&6?Bt(d,g,m,w,v,C,D,P,O):q&64||q&128?A.process(d,g,m,w,v,C,D,P,O,j):S("Invalid VNode type:",A,`(${typeof A})`)}W!=null&&v&&Nl(W,d&&d.ref,C,g||d,!g)},E=(d,g,m,w)=>{if(d==null)r(g.el=a(g.children),m,w);else{const v=g.el=d.el;g.children!==d.children&&l(v,g.children)}},R=(d,g,m,w)=>{d==null?r(g.el=c(g.children||""),m,w):g.el=d.el},N=(d,g,m,w)=>{[d.el,d.anchor]=_(d.children,g,m,w,d.el,d.anchor)},k=(d,g,m,w)=>{if(g.children!==d.children){const v=f(d.anchor);U(d),[g.el,g.anchor]=_(g.children,m,v,w)}else g.el=d.el,g.anchor=d.anchor},K=({el:d,anchor:g},m,w)=>{let v;for(;d&&d!==g;)v=f(d),r(d,m,w),d=v;r(g,m,w)},U=({el:d,anchor:g})=>{let m;for(;d&&d!==g;)m=f(d),s(d),d=m;s(g)},de=(d,g,m,w,v,C,D,P,O)=>{D=D||g.type==="svg",d==null?B(g,m,w,v,C,D,P,O):F(d,g,v,C,D,P,O)},B=(d,g,m,w,v,C,D,P)=>{let O,A;const{type:W,props:q,shapeFlag:z,transition:re,dirs:ce}=d;if(O=d.el=o(d.type,C,q&&q.is,q),z&8?u(O,d.children):z&16&&ye(d.children,O,null,w,v,C&&W!=="foreignObject",D,P),ce&&pr(d,null,w,"created"),$e(O,d,d.scopeId,D,w),q){for(const Ee in q)Ee!=="value"&&!Fo(Ee)&&i(O,Ee,null,q[Ee],C,d.children,w,v,y);"value"in q&&i(O,"value",null,q.value),(A=q.onVnodeBeforeMount)&&Wt(A,w,d)}Object.defineProperty(O,"__vnode",{value:d,enumerable:!1}),Object.defineProperty(O,"__vueParentComponent",{value:w,enumerable:!1}),ce&&pr(d,null,w,"beforeMount");const Ie=(!v||v&&!v.pendingBranch)&&re&&!re.persisted;Ie&&re.beforeEnter(O),r(O,g,m),((A=q&&q.onVnodeMounted)||Ie||ce)&&mt(()=>{A&&Wt(A,w,d),Ie&&re.enter(O),ce&&pr(d,null,w,"mounted")},v)},$e=(d,g,m,w,v)=>{if(m&&p(d,m),w)for(let C=0;C<w.length;C++)p(d,w[C]);if(v){let C=v.subTree;if(C.patchFlag>0&&C.patchFlag&2048&&(C=Gg(C.children)||C),g===C){const D=v.vnode;$e(d,D,D.scopeId,D.slotScopeIds,v.parent)}}},ye=(d,g,m,w,v,C,D,P,O=0)=>{for(let A=O;A<d.length;A++){const W=d[A]=P?Un(d[A]):Vt(d[A]);T(null,W,g,m,w,v,C,D,P)}},F=(d,g,m,w,v,C,D)=>{const P=g.el=d.el;let{patchFlag:O,dynamicChildren:A,dirs:W}=g;O|=d.patchFlag&16;const q=d.props||we,z=g.props||we;let re;m&&gr(m,!1),(re=z.onVnodeBeforeUpdate)&&Wt(re,m,g,d),W&&pr(g,d,m,"beforeUpdate"),m&&gr(m,!0),Sr&&(O=0,D=!1,A=null);const ce=v&&g.type!=="foreignObject";if(A?(L(d.dynamicChildren,A,P,m,w,ce,C),Dl(d,g)):D||bt(d,g,P,null,m,w,ce,C,!1),O>0){if(O&16)oe(P,g,q,z,m,w,v);else if(O&2&&q.class!==z.class&&i(P,"class",null,z.class,v),O&4&&i(P,"style",q.style,z.style,v),O&8){const Ie=g.dynamicProps;for(let Ee=0;Ee<Ie.length;Ee++){const Ve=Ie[Ee],Nt=q[Ve],Zr=z[Ve];(Zr!==Nt||Ve==="value")&&i(P,Ve,Nt,Zr,v,d.children,m,w,y)}}O&1&&d.children!==g.children&&u(P,g.children)}else!D&&A==null&&oe(P,g,q,z,m,w,v);((re=z.onVnodeUpdated)||W)&&mt(()=>{re&&Wt(re,m,g,d),W&&pr(g,d,m,"updated")},w)},L=(d,g,m,w,v,C,D)=>{for(let P=0;P<g.length;P++){const O=d[P],A=g[P],W=O.el&&(O.type===xt||!qs(O,A)||O.shapeFlag&70)?h(O.el):m;T(O,A,W,null,w,v,C,D,!0)}},oe=(d,g,m,w,v,C,D)=>{if(m!==w){if(m!==we)for(const P in m)!Fo(P)&&!(P in w)&&i(d,P,m[P],null,D,g.children,v,C,y);for(const P in w){if(Fo(P))continue;const O=w[P],A=m[P];O!==A&&P!=="value"&&i(d,P,A,O,D,g.children,v,C,y)}"value"in w&&i(d,"value",m.value,w.value)}},Pe=(d,g,m,w,v,C,D,P,O)=>{const A=g.el=d?d.el:a(""),W=g.anchor=d?d.anchor:a("");let{patchFlag:q,dynamicChildren:z,slotScopeIds:re}=g;(Sr||q&2048)&&(q=0,O=!1,z=null),re&&(P=P?P.concat(re):re),d==null?(r(A,m,w),r(W,m,w),ye(g.children,m,W,v,C,D,P,O)):q>0&&q&64&&z&&d.dynamicChildren?(L(d.dynamicChildren,z,m,v,C,D,P),Dl(d,g)):bt(d,g,m,W,v,C,D,P,O)},Bt=(d,g,m,w,v,C,D,P,O)=>{g.slotScopeIds=P,d==null?g.shapeFlag&512?v.ctx.activate(g,m,w,D,O):gt(g,m,w,v,C,D,O):je(d,g,O)},gt=(d,g,m,w,v,C,D)=>{const P=d.component=sT(d,w,v);if(P.type.__hmrId&&Fw(P),jo(d),dn(P,"mount"),Hu(d)&&(P.ctx.renderer=j),dn(P,"init"),oT(P),pn(P,"init"),P.asyncDep){if(v&&v.registerDep(P,ne),!d.el){const O=P.subTree=wt(Tt);R(null,O,g,m)}return}ne(P,d,g,m,v,C,D),Bo(),pn(P,"mount")},je=(d,g,m)=>{const w=g.component=d.component;if(nI(d,g,m))if(w.asyncDep&&!w.asyncResolved){jo(g),Y(w,g,m),Bo();return}else w.next=g,Lw(w.update),w.update();else g.el=d.el,w.vnode=g},ne=(d,g,m,w,v,C,D)=>{const P=()=>{if(d.isMounted){let{next:W,bu:q,u:z,parent:re,vnode:ce}=d,Ie=W,Ee;jo(W||d.vnode),gr(d,!1),W?(W.el=ce.el,Y(d,W,D)):W=ce,q&&ss(q),(Ee=W.props&&W.props.onVnodeBeforeUpdate)&&Wt(Ee,re,W,ce),gr(d,!0),dn(d,"render");const Ve=jc(d);pn(d,"render");const Nt=d.subTree;d.subTree=Ve,dn(d,"patch"),T(Nt,Ve,h(Nt.el),V(Nt),d,v,C),pn(d,"patch"),W.el=Ve.el,Ie===null&&rI(d,Ve.el),z&&mt(z,v),(Ee=W.props&&W.props.onVnodeUpdated)&&mt(()=>Wt(Ee,re,W,ce),v),Hg(d),Bo()}else{let W;const{el:q,props:z}=g,{bm:re,m:ce,parent:Ie}=d,Ee=qo(g);if(gr(d,!1),re&&ss(re),!Ee&&(W=z&&z.onVnodeBeforeMount)&&Wt(W,Ie,g),gr(d,!0),q&&Se){const Ve=()=>{dn(d,"render"),d.subTree=jc(d),pn(d,"render"),dn(d,"hydrate"),Se(q,d.subTree,d,v,null),pn(d,"hydrate")};Ee?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Ve()):Ve()}else{dn(d,"render");const Ve=d.subTree=jc(d);pn(d,"render"),dn(d,"patch"),T(null,Ve,m,w,d,v,C),pn(d,"patch"),g.el=Ve.el}if(ce&&mt(ce,v),!Ee&&(W=z&&z.onVnodeMounted)){const Ve=g;mt(()=>Wt(W,Ie,Ve),v)}(g.shapeFlag&256||Ie&&qo(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&d.a&&mt(d.a,v),d.isMounted=!0,Ww(d),g=m=w=null}},O=d.effect=new Mu(P,()=>Ga(A),d.scope),A=d.update=()=>O.run();A.id=d.uid,gr(d,!0),O.onTrack=d.rtc?W=>ss(d.rtc,W):void 0,O.onTrigger=d.rtg?W=>ss(d.rtg,W):void 0,A.ownerInstance=d,A()},Y=(d,g,m)=>{g.component=d;const w=d.vnode.props;d.vnode=g,d.next=null,MI(d,g.props,w,m),HI(d,g.children,m),Kr(),Vf(),zr()},bt=(d,g,m,w,v,C,D,P,O=!1)=>{const A=d&&d.children,W=d?d.shapeFlag:0,q=g.children,{patchFlag:z,shapeFlag:re}=g;if(z>0){if(z&128){On(A,q,m,w,v,C,D,P,O);return}else if(z&256){dr(A,q,m,w,v,C,D,P,O);return}}re&8?(W&16&&y(A,v,C),q!==A&&u(m,q)):W&16?re&16?On(A,q,m,w,v,C,D,P,O):y(A,v,C,!0):(W&8&&u(m,""),re&16&&ye(q,m,w,v,C,D,P,O))},dr=(d,g,m,w,v,C,D,P,O)=>{d=d||hs,g=g||hs;const A=d.length,W=g.length,q=Math.min(A,W);let z;for(z=0;z<q;z++){const re=g[z]=O?Un(g[z]):Vt(g[z]);T(d[z],re,m,null,v,C,D,P,O)}A>W?y(d,v,C,!0,!1,q):ye(g,m,w,v,C,D,P,O,q)},On=(d,g,m,w,v,C,D,P,O)=>{let A=0;const W=g.length;let q=d.length-1,z=W-1;for(;A<=q&&A<=z;){const re=d[A],ce=g[A]=O?Un(g[A]):Vt(g[A]);if(qs(re,ce))T(re,ce,m,null,v,C,D,P,O);else break;A++}for(;A<=q&&A<=z;){const re=d[q],ce=g[z]=O?Un(g[z]):Vt(g[z]);if(qs(re,ce))T(re,ce,m,null,v,C,D,P,O);else break;q--,z--}if(A>q){if(A<=z){const re=z+1,ce=re<W?g[re].el:w;for(;A<=z;)T(null,g[A]=O?Un(g[A]):Vt(g[A]),m,ce,v,C,D,P,O),A++}}else if(A>z)for(;A<=q;)Pt(d[A],v,C,!0),A++;else{const re=A,ce=A,Ie=new Map;for(A=ce;A<=z;A++){const ut=g[A]=O?Un(g[A]):Vt(g[A]);ut.key!=null&&(Ie.has(ut.key)&&S("Duplicate keys found during update:",JSON.stringify(ut.key),"Make sure keys are unique."),Ie.set(ut.key,A))}let Ee,Ve=0;const Nt=z-ce+1;let Zr=!1,Tf=0;const js=new Array(Nt);for(A=0;A<Nt;A++)js[A]=0;for(A=re;A<=q;A++){const ut=d[A];if(Ve>=Nt){Pt(ut,v,C,!0);continue}let Ht;if(ut.key!=null)Ht=Ie.get(ut.key);else for(Ee=ce;Ee<=z;Ee++)if(js[Ee-ce]===0&&qs(ut,g[Ee])){Ht=Ee;break}Ht===void 0?Pt(ut,v,C,!0):(js[Ht-ce]=A+1,Ht>=Tf?Tf=Ht:Zr=!0,T(ut,g[Ht],m,null,v,C,D,P,O),Ve++)}const Af=Zr?GI(js):hs;for(Ee=Af.length-1,A=Nt-1;A>=0;A--){const ut=ce+A,Ht=g[ut],Rf=ut+1<W?g[ut+1].el:w;js[A]===0?T(null,Ht,m,Rf,v,C,D,P,O):Zr&&(Ee<0||A!==Af[Ee]?qt(Ht,m,Rf,2):Ee--)}}},qt=(d,g,m,w,v=null)=>{const{el:C,type:D,transition:P,children:O,shapeFlag:A}=d;if(A&6){qt(d.component.subTree,g,m,w);return}if(A&128){d.suspense.move(g,m,w);return}if(A&64){D.move(d,g,m,j);return}if(D===xt){r(C,g,m);for(let q=0;q<O.length;q++)qt(O[q],g,m,w);r(d.anchor,g,m);return}if(D===Wo){K(d,g,m);return}if(w!==2&&A&1&&P)if(w===0)P.beforeEnter(C),r(C,g,m),mt(()=>P.enter(C),v);else{const{leave:q,delayLeave:z,afterLeave:re}=P,ce=()=>r(C,g,m),Ie=()=>{q(C,()=>{ce(),re&&re()})};z?z(C,ce,Ie):Ie()}else r(C,g,m)},Pt=(d,g,m,w=!1,v=!1)=>{const{type:C,props:D,ref:P,children:O,dynamicChildren:A,shapeFlag:W,patchFlag:q,dirs:z}=d;if(P!=null&&Nl(P,null,m,d,!0),W&256){g.ctx.deactivate(d);return}const re=W&1&&z,ce=!qo(d);let Ie;if(ce&&(Ie=D&&D.onVnodeBeforeUnmount)&&Wt(Ie,g,d),W&6)Dn(d.component,m,w);else{if(W&128){d.suspense.unmount(m,w);return}re&&pr(d,null,g,"beforeUnmount"),W&64?d.type.remove(d,g,m,v,j,w):A&&(C!==xt||q>0&&q&64)?y(A,g,m,!1,!0):(C===xt&&q&384||!v&&W&16)&&y(O,g,m),w&&Nn(d)}(ce&&(Ie=D&&D.onVnodeUnmounted)||re)&&mt(()=>{Ie&&Wt(Ie,g,d),re&&pr(d,null,g,"unmounted")},m)},Nn=d=>{const{type:g,el:m,anchor:w,transition:v}=d;if(g===xt){d.patchFlag>0&&d.patchFlag&2048&&v&&!v.persisted?d.children.forEach(D=>{D.type===Tt?s(D.el):Nn(D)}):vo(m,w);return}if(g===Wo){U(d);return}const C=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:D,delayLeave:P}=v,O=()=>D(m,C);P?P(d.el,C,O):O()}else C()},vo=(d,g)=>{let m;for(;d!==g;)m=f(d),s(d),d=m;s(g)},Dn=(d,g,m)=>{d.type.__hmrId&&$w(d);const{bum:w,scope:v,update:C,subTree:D,um:P}=d;w&&ss(w),v.stop(),C&&(C.active=!1,Pt(D,d,g,m)),P&&mt(P,g),mt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),zw(d)},y=(d,g,m,w=!1,v=!1,C=0)=>{for(let D=C;D<d.length;D++)Pt(d[D],g,m,w,v)},V=d=>d.shapeFlag&6?V(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,g,m)=>{d==null?g._vnode&&Pt(g._vnode,null,null,!0):T(g._vnode||null,d,g,null,null,null,m),Vf(),$g(),g._vnode=d},j={p:T,um:Pt,m:qt,r:Nn,mt:gt,mc:ye,pc:bt,pbc:L,n:V,o:t};let ue,Se;return e&&([ue,Se]=e(j)),{render:M,hydrate:ue,createApp:NI(M,ue)}}function gr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dl(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Un(s[i]),a.el=o.el),n||Dl(o,a)),a.type===Yi&&(a.el=o.el),a.type===Tt&&!a.el&&(a.el=o.el)}}function GI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const QI=t=>t.__isTeleport,xt=Symbol.for("v-fgt"),Yi=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),Wo=Symbol.for("v-stc"),ci=[];let Mt=null;function li(t=!1){ci.push(Mt=t?null:[])}function YI(){ci.pop(),Mt=ci[ci.length-1]||null}let Ai=1;function Qf(t){Ai+=t}function cm(t){return t.dynamicChildren=Ai>0?Mt||hs:null,YI(),Ai>0&&Mt&&Mt.push(t),t}function lm(t,e,n,r,s,i){return cm(Za(t,e,n,r,s,i,!0))}function xl(t,e,n,r,s){return cm(wt(t,e,n,r,s,!0))}function Ri(t){return t?t.__v_isVNode===!0:!1}function qs(t,e){return e.shapeFlag&6&&is.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const JI=(...t)=>XI(...t),Xa="__vInternal",um=({key:t})=>t??null,Ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||Te(t)||J(t)?{i:rt,r:t,k:e,f:!!n}:t:null);function Za(t,e=null,n=null,r=0,s=null,i=t===xt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&um(e),ref:e&&Ko(e),scopeId:zg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:rt};return a?(Gu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),c.key!==c.key&&S("VNode created with invalid key (NaN). VNode type:",c.type),Ai>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const wt=JI;function XI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===EI)&&(t||S(`Invalid vnode type when creating vnode: ${t}.`),t=Tt),Ri(t)){const a=tr(t,e,!0);return n&&Gu(a,n),Ai>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(pm(t)&&(t=t.__vccOpts),e){e=ZI(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=xu(a)),_e(c)&&(ua(c)&&!Q(c)&&(c=Ce({},c)),e.style=Du(c))}const o=Oe(t)?1:sI(t)?128:QI(t)?64:_e(t)?4:J(t)?2:0;return o&4&&ua(t)&&(t=X(t),S("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),Za(t,e,n,r,s,o,i,!0)}function ZI(t){return t?ua(t)||Xa in t?Ce({},t):t:null}function tr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?tT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&um(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(Ko(e)):[s,Ko(e)]:Ko(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&Q(o)?o.map(hm):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function hm(t){const e=tr(t);return Q(t.children)&&(e.children=t.children.map(hm)),e}function eT(t=" ",e=0){return wt(Yi,null,t,e)}function Yf(t="",e=!1){return e?(li(),xl(Tt,null,t)):wt(Tt,null,t)}function Vt(t){return t==null||typeof t=="boolean"?wt(Tt):Q(t)?wt(xt,null,t.slice()):typeof t=="object"?Un(t):wt(Yi,null,String(t))}function Un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tr(t)}function Gu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Xa in e)?e._ctx=rt:s===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),r&64?(n=16,e=[eT(e)]):n=8);t.children=e,t.shapeFlag|=n}function tT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xu([e.class,r.class]));else if(s==="style")e.style=Du([e.style,r.style]);else if(zi(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){Ft(t,e,7,[n,r])}const nT=tm();let rT=0;function sT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nT,i={uid:rT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rm(r,s),emitsOptions:Kg(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=II(i),i.root=e?e.root:i,i.emit=Jw.bind(null,i),t.ce&&t.ce(i),i}let Ue=null;const Qu=()=>Ue||rt;let Yu,es,Jf="__VUE_INSTANCE_SETTERS__";(es=oa()[Jf])||(es=oa()[Jf]=[]),es.push(t=>Ue=t),Yu=t=>{es.length>1?es.forEach(e=>e(t)):es[0](t)};const vs=t=>{Yu(t),t.scope.on()},Or=()=>{Ue&&Ue.scope.off(),Yu(null)},iT=ar("slot,component");function Vl(t,e){const n=e.isNativeTag||ag;(iT(t)||n(t))&&S("Do not use built-in or reserved HTML elements as component id: "+t)}function fm(t){return t.vnode.shapeFlag&4}let bi=!1;function oT(t,e=!1){bi=e;const{props:n,children:r}=t.vnode,s=fm(t);xI(t,n,s,e),qI(t,r);const i=s?aT(t,e):void 0;return bi=!1,i}function aT(t,e){var n;const r=t.type;{if(r.name&&Vl(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)Vl(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)Yg(i[o])}r.compilerOptions&&cT()&&S('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=_n(new Proxy(t.ctx,Zg)),TI(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?hT(t):null;vs(t),Kr();const o=In(s,t,0,[Js(t.props),i]);if(zr(),Or(),ku(o)){if(o.then(Or,Or),e)return o.then(a=>{Xf(t,a,e)}).catch(a=>{za(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!=null?n:"Anonymous";S(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Xf(t,o,e)}else dm(t,e)}function Xf(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)?(Ri(e)&&S("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=xg(e),AI(t)):e!==void 0&&S(`setup() should return an object. Received: ${e===null?"null":typeof e}`),dm(t,n)}let Ml;const cT=()=>!Ml;function dm(t,e,n){const r=t.type;if(!t.render){if(!e&&Ml&&!r.render){const s=r.template||Ku(t).template;if(s){dn(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ce(Ce({isCustomElement:i,delimiters:a},o),c);r.render=Ml(s,l),pn(t,"compile")}}t.render=r.render||_t}vs(t),Kr(),bI(t),zr(),Or(),!r.render&&t.render===_t&&!e&&(r.template?S('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):S("Component is missing template or render function."))}function lT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return da(),at(t,"get","$attrs"),e[n]},set(){return S("setupContext.attrs is readonly."),!1},deleteProperty(){return S("setupContext.attrs is readonly."),!1}}))}function uT(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return at(t,"get","$slots"),e[n]}}))}function hT(t){return Object.freeze({get attrs(){return lT(t)},get slots(){return uT(t)},get emit(){return(n,...r)=>t.emit(n,...r)},expose:n=>{if(t.exposed&&S("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(Q(n)?r="array":Te(n)&&(r="ref")),r!=="object"&&S(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}}})}function ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(xg(_n(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in kr)return kr[n](t)},has(e,n){return n in e||n in kr}}))}const fT=/(?:^|[-_])(\w)/g,dT=t=>t.replace(fT,e=>e.toUpperCase()).replace(/[-_]/g,"");function Ju(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function tc(t,e,n=!1){let r=Ju(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?dT(r):n?"App":"Anonymous"}function pm(t){return J(t)&&"__vccOpts"in t}const Et=(t,e)=>Cw(t,e,bi);function gm(t,e,n){const r=arguments.length;return r===2?_e(e)&&!Q(e)?Ri(e)?wt(t,null,[e]):wt(t,e):wt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ri(n)&&(n=[n]),wt(t,e,n))}const pT=Symbol.for("v-scx"),gT=()=>{{const t=Zt(pT);return t||S("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function qc(t){return!!(t&&t.__v_isShallow)}function mT(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return _e(h)?h.__isVue?["div",t,"VueInstance"]:Te(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:Ut(h)?["div",{},["span",t,qc(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${er(h)?" (readonly)":""}`]:er(h)?["div",{},["span",t,qc(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const f=[];h.type.props&&h.props&&f.push(o("props",X(h.props))),h.setupState!==we&&f.push(o("setup",h.setupState)),h.data!==we&&f.push(o("data",X(h.data)));const p=c(h,"computed");p&&f.push(o("computed",p));const _=c(h,"inject");return _&&f.push(o("injected",_)),f.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),f}function o(h,f){return f=Ce({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(p=>["div",{},["span",r,p+": "],a(f[p],!1)])]]:["span",{}]}function a(h,f=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:_e(h)?["object",{object:f?X(h):h}]:["span",n,String(h)]}function c(h,f){const p=h.type;if(J(p))return;const _={};for(const T in h.ctx)l(p,T,f)&&(_[T]=h.ctx[T]);return _}function l(h,f,p){const _=h[p];if(Q(_)&&_.includes(f)||_e(_)&&f in _||h.extends&&l(h.extends,f,p)||h.mixins&&h.mixins.some(T=>l(T,f,p)))return!0}function u(h){return qc(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const Zf="3.3.4",_T="http://www.w3.org/2000/svg",vr=typeof document<"u"?document:null,ed=vr&&vr.createElement("template"),yT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?vr.createElementNS(_T,t):vr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vr.createTextNode(t),createComment:t=>vr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ed.innerHTML=r?`<svg>${t}</svg>`:t;const a=ed.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ET(t,e,n){const r=t.style,s=Oe(n);if(n&&!s){if(e&&!Oe(e))for(const i in e)n[i]==null&&Ll(r,i,"");for(const i in n)Ll(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const wT=/[^\\];\s*$/,td=/\s*!important$/;function Ll(t,e,n){if(Q(n))n.forEach(r=>Ll(t,e,r));else if(n==null&&(n=""),wT.test(n)&&S(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=IT(t,e);td.test(n)?t.setProperty(Xn(r),n.replace(td,""),"important"):t[r]=n}}const nd=["Webkit","Moz","ms"],Hc={};function IT(t,e){const n=Hc[e];if(n)return n;let r=an(e);if(r!=="filter"&&r in t)return Hc[e]=r;r=Vr(r);for(let s=0;s<nd.length;s++){const i=nd[s]+r;if(i in t)return Hc[e]=i}return e}const rd="http://www.w3.org/1999/xlink";function TT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n);else{const i=WE(e);n==null||i&&!hg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function AT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=hg(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch(l){c||S(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,l)}c&&t.removeAttribute(e)}function os(t,e,n,r){t.addEventListener(e,n,r)}function RT(t,e,n,r){t.removeEventListener(e,n,r)}function bT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=PT(e);if(r){const l=i[e]=kT(r,s);os(t,a,l,c)}else o&&(RT(t,a,o,c),i[e]=void 0)}}const sd=/(?:Once|Passive|Capture)$/;function PT(t){let e;if(sd.test(t)){e={};let r;for(;r=t.match(sd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xn(t.slice(2)),e]}let Wc=0;const ST=Promise.resolve(),CT=()=>Wc||(ST.then(()=>Wc=0),Wc=Date.now());function kT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ft(OT(r,n.value),e,5,[r])};return n.value=t,n.attached=CT(),n}function OT(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const id=/^on[a-z]/,NT=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?vT(t,r,s):e==="style"?ET(t,n,r):zi(e)?sa(e)||bT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DT(t,e,r,s))?AT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),TT(t,e,r,s))};function DT(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&id.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||id.test(e)&&Oe(n)?!1:e in t}const od=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>ss(e,n):e};function xT(t){t.target.composing=!0}function ad(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const s1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=od(s);const i=r||s.props&&s.props.type==="number";os(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=vl(a)),t._assign(a)}),n&&os(t,"change",()=>{t.value=t.value.trim()}),e||(os(t,"compositionstart",xT),os(t,"compositionend",ad),os(t,"change",ad))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=od(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&vl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},VT=["ctrl","shift","alt","meta"],MT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VT.some(n=>t[`${n}Key`]&&!e.includes(n))},i1=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=MT[e[s]];if(i&&i(n,e))return}return t(n,...r)},LT=Ce({patchProp:NT},yT);let cd;function UT(){return cd||(cd=KI(LT))}const FT=(...t)=>{const e=UT().createApp(...t);$T(e),jT(e);const{mount:n}=e;return e.mount=r=>{const s=BT(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function $T(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>BE(e)||qE(e),writable:!1})}function jT(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){S("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return S(r),n},set(){S(r)}})}}function BT(t){if(Oe(t)){const e=document.querySelector(t);return e||S(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&S('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function qT(){mT()}qT();var HT=!1;function bo(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function Kc(t,e){if(Array.isArray(t)){t.splice(e,1);return}delete t[e]}function WT(){return mm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function mm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const KT=typeof Proxy=="function",zT="devtools-plugin:setup",GT="plugin:settings:set";let ts,Ul;function QT(){var t;return ts!==void 0||(typeof window<"u"&&window.performance?(ts=!0,Ul=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ts=!0,Ul=global.perf_hooks.performance):ts=!1),ts}function YT(){return QT()?Ul.now():Date.now()}class JT{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return YT()}},n&&n.on(GT,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Xu(t,e){const n=t,r=mm(),s=WT(),i=KT&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(zT,t,e);else{const o=i?new JT(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Fl;const Pi=t=>Fl=t,_m=Symbol("pinia");function Lr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var en;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(en||(en={}));const nc=typeof window<"u",ma=nc,ld=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function XT(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function Zu(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){Em(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function ym(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function zo(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const Go=typeof navigator=="object"?navigator:{userAgent:""},vm=(()=>/Macintosh/.test(Go.userAgent)&&/AppleWebKit/.test(Go.userAgent)&&!/Safari/.test(Go.userAgent))(),Em=nc?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!vm?ZT:"msSaveOrOpenBlob"in Go?eA:tA:()=>{};function ZT(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener",typeof t=="string"?(r.href=t,r.origin!==location.origin?ym(r.href)?Zu(t,e,n):(r.target="_blank",zo(r)):zo(r)):(r.href=URL.createObjectURL(t),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){zo(r)},0))}function eA(t,e="download",n){if(typeof t=="string")if(ym(t))Zu(t,e,n);else{const r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){zo(r)})}else navigator.msSaveOrOpenBlob(XT(t,n),e)}function tA(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof t=="string")return Zu(t,e,n);const s=t.type==="application/octet-stream",i=/constructor/i.test(String(ld.HTMLElement))||"safari"in ld,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||s&&i||vm)&&typeof FileReader<"u"){const a=new FileReader;a.onloadend=function(){let c=a.result;if(typeof c!="string")throw r=null,new Error("Wrong reader.result type");c=o?c:c.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=c:location.assign(c),r=null},a.readAsDataURL(t)}else{const a=URL.createObjectURL(t);r?r.location.assign(a):location.href=a,r=null,setTimeout(function(){URL.revokeObjectURL(a)},4e4)}}function We(t,e){const n="🍍 "+t;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(n,e):e==="error"?console.error(n):e==="warn"?console.warn(n):console.log(n)}function eh(t){return"_a"in t&&"install"in t}function wm(){if(!("clipboard"in navigator))return We("Your browser doesn't support the Clipboard API","error"),!0}function Im(t){return t instanceof Error&&t.message.toLowerCase().includes("document is not focused")?(We('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function nA(t){if(!wm())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),We("Global state copied to clipboard.")}catch(e){if(Im(e))return;We("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function rA(t){if(!wm())try{Tm(t,JSON.parse(await navigator.clipboard.readText())),We("Global state pasted from clipboard.")}catch(e){if(Im(e))return;We("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function sA(t){try{Em(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){We("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let hn;function iA(){hn||(hn=document.createElement("input"),hn.type="file",hn.accept=".json");function t(){return new Promise((e,n)=>{hn.onchange=async()=>{const r=hn.files;if(!r)return e(null);const s=r.item(0);return e(s?{text:await s.text(),file:s}:null)},hn.oncancel=()=>e(null),hn.onerror=n,hn.click()})}return t}async function oA(t){try{const n=await iA()();if(!n)return;const{text:r,file:s}=n;Tm(t,JSON.parse(r)),We(`Global state imported from "${s.name}".`)}catch(e){We("Failed to import the state from JSON. Check the console for more details.","error"),console.error(e)}}function Tm(t,e){for(const n in e){const r=t.state.value[n];r&&Object.assign(r,e[n])}}function Dt(t){return{_custom:{display:t}}}const Am="🍍 Pinia (root)",$l="_root";function aA(t){return eh(t)?{id:$l,label:Am}:{id:t.$id,label:t.$id}}function cA(t){if(eh(t)){const n=Array.from(t._s.keys()),r=t._s;return{state:n.map(i=>({editable:!0,key:i,value:t.state.value[i]})),getters:n.filter(i=>r.get(i)._getters).map(i=>{const o=r.get(i);return{editable:!1,key:i,value:o._getters.reduce((a,c)=>(a[c]=o[c],a),{})}})}}const e={state:Object.keys(t.$state).map(n=>({editable:!0,key:n,value:t.$state[n]}))};return t._getters&&t._getters.length&&(e.getters=t._getters.map(n=>({editable:!1,key:n,value:t[n]}))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map(n=>({editable:!0,key:n,value:t[n]}))),e}function lA(t){return t?Array.isArray(t)?t.reduce((e,n)=>(e.keys.push(n.key),e.operations.push(n.type),e.oldValue[n.key]=n.oldValue,e.newValue[n.key]=n.newValue,e),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:Dt(t.type),key:Dt(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function uA(t){switch(t){case en.direct:return"mutation";case en.patchFunction:return"$patch";case en.patchObject:return"$patch";default:return"unknown"}}let ls=!0;const Qo=[],_r="pinia:mutations",Xe="pinia",{assign:hA}=Object,_a=t=>"🍍 "+t;function fA(t,e){Xu({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:Qo,app:t},n=>{typeof n.now!="function"&&We("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:_r,label:"Pinia 🍍",color:15064968}),n.addInspector({id:Xe,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{nA(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await rA(e),n.sendInspectorTree(Xe),n.sendInspectorState(Xe)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{sA(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await oA(e),n.sendInspectorTree(Xe),n.sendInspectorState(Xe)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:r=>{const s=e._s.get(r);s?typeof s.$reset!="function"?We(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`,"warn"):(s.$reset(),We(`Store "${r}" reset.`)):We(`Cannot reset "${r}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent((r,s)=>{const i=r.componentInstance&&r.componentInstance.proxy;if(i&&i._pStores){const o=r.componentInstance.proxy._pStores;Object.values(o).forEach(a=>{r.instanceData.state.push({type:_a(a.$id),key:"state",editable:!0,value:a._isOptionsAPI?{_custom:{value:X(a.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>a.$reset()}]}}:Object.keys(a.$state).reduce((c,l)=>(c[l]=a.$state[l],c),{})}),a._getters&&a._getters.length&&r.instanceData.state.push({type:_a(a.$id),key:"getters",editable:!1,value:a._getters.reduce((c,l)=>{try{c[l]=a[l]}catch(u){c[l]=u}return c},{})})})}}),n.on.getInspectorTree(r=>{if(r.app===t&&r.inspectorId===Xe){let s=[e];s=s.concat(Array.from(e._s.values())),r.rootNodes=(r.filter?s.filter(i=>"$id"in i?i.$id.toLowerCase().includes(r.filter.toLowerCase()):Am.toLowerCase().includes(r.filter.toLowerCase())):s).map(aA)}}),n.on.getInspectorState(r=>{if(r.app===t&&r.inspectorId===Xe){const s=r.nodeId===$l?e:e._s.get(r.nodeId);if(!s)return;s&&(r.state=cA(s))}}),n.on.editInspectorState((r,s)=>{if(r.app===t&&r.inspectorId===Xe){const i=r.nodeId===$l?e:e._s.get(r.nodeId);if(!i)return We(`store "${r.nodeId}" not found`,"error");const{path:o}=r;eh(i)?o.unshift("state"):(o.length!==1||!i._customProperties.has(o[0])||o[0]in i.$state)&&o.unshift("$state"),ls=!1,r.set(i,o,r.state.value),ls=!0}}),n.on.editComponentState(r=>{if(r.type.startsWith("🍍")){const s=r.type.replace(/^🍍\s*/,""),i=e._s.get(s);if(!i)return We(`store "${s}" not found`,"error");const{path:o}=r;if(o[0]!=="state")return We(`Invalid path for store "${s}":
${o}
Only state can be modified.`);o[0]="$state",ls=!1,r.set(i,o,r.state.value),ls=!0}})})}function dA(t,e){Qo.includes(_a(e.$id))||Qo.push(_a(e.$id)),Xu({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:Qo,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},n=>{const r=typeof n.now=="function"?n.now.bind(n):Date.now;e.$onAction(({after:o,onError:a,name:c,args:l})=>{const u=Rm++;n.addTimelineEvent({layerId:_r,event:{time:r(),title:"🛫 "+c,subtitle:"start",data:{store:Dt(e.$id),action:Dt(c),args:l},groupId:u}}),o(h=>{Wn=void 0,n.addTimelineEvent({layerId:_r,event:{time:r(),title:"🛬 "+c,subtitle:"end",data:{store:Dt(e.$id),action:Dt(c),args:l,result:h},groupId:u}})}),a(h=>{Wn=void 0,n.addTimelineEvent({layerId:_r,event:{time:r(),logType:"error",title:"💥 "+c,subtitle:"end",data:{store:Dt(e.$id),action:Dt(c),args:l,error:h},groupId:u}})})},!0),e._customProperties.forEach(o=>{Cr(()=>wn(e[o]),(a,c)=>{n.notifyComponentUpdate(),n.sendInspectorState(Xe),ls&&n.addTimelineEvent({layerId:_r,event:{time:r(),title:"Change",subtitle:o,data:{newValue:a,oldValue:c},groupId:Wn}})},{deep:!0})}),e.$subscribe(({events:o,type:a},c)=>{if(n.notifyComponentUpdate(),n.sendInspectorState(Xe),!ls)return;const l={time:r(),title:uA(a),data:hA({store:Dt(e.$id)},lA(o)),groupId:Wn};a===en.patchFunction?l.subtitle="⤵️":a===en.patchObject?l.subtitle="🧩":o&&!Array.isArray(o)&&(l.subtitle=o.type),o&&(l.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:o}}),n.addTimelineEvent({layerId:_r,event:l})},{detached:!0,flush:"sync"});const s=e._hotUpdate;e._hotUpdate=_n(o=>{s(o),n.addTimelineEvent({layerId:_r,event:{time:r(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:Dt(e.$id),info:Dt("HMR update")}}}),n.notifyComponentUpdate(),n.sendInspectorTree(Xe),n.sendInspectorState(Xe)});const{$dispose:i}=e;e.$dispose=()=>{i(),n.notifyComponentUpdate(),n.sendInspectorTree(Xe),n.sendInspectorState(Xe),n.getSettings().logStoreChanges&&We(`Disposed "${e.$id}" store 🗑`)},n.notifyComponentUpdate(),n.sendInspectorTree(Xe),n.sendInspectorState(Xe),n.getSettings().logStoreChanges&&We(`"${e.$id}" store installed 🆕`)})}let Rm=0,Wn;function ud(t,e,n){const r=e.reduce((s,i)=>(s[i]=X(t)[i],s),{});for(const s in r)t[s]=function(){const i=Rm,o=n?new Proxy(t,{get(...c){return Wn=i,Reflect.get(...c)},set(...c){return Wn=i,Reflect.set(...c)}}):t;Wn=i;const a=r[s].apply(o,arguments);return Wn=void 0,a}}function pA({app:t,store:e,options:n}){if(e.$id.startsWith("__hot:"))return;e._isOptionsAPI=!!n.state,ud(e,Object.keys(n.actions),e._isOptionsAPI);const r=e._hotUpdate;X(e)._hotUpdate=function(s){r.apply(this,arguments),ud(e,Object.keys(s._hmrPayload.actions),!!e._isOptionsAPI)},dA(t,e)}function gA(){const t=pg(!0),e=t.run(()=>Os({}));let n=[],r=[];const s=_n({install(i){Pi(s),s._a=i,i.provide(_m,s),i.config.globalProperties.$pinia=s,ma&&fA(i,s),r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!HT?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return ma&&typeof Proxy<"u"&&s.use(pA),s}function bm(t,e){for(const n in e){const r=e[n];if(!(n in t))continue;const s=t[n];Lr(s)&&Lr(r)&&!Te(r)&&!Ut(r)?t[n]=bm(s,r):t[n]=r}return t}const mA=()=>{};function hd(t,e,n,r=mA){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&gg()&&GE(s),s}function ns(t,...e){t.slice().forEach(n=>{n(...e)})}const _A=t=>t();function jl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Lr(s)&&Lr(r)&&t.hasOwnProperty(n)&&!Te(r)&&!Ut(r)?t[n]=jl(s,r):t[n]=r}return t}const yA=Symbol("pinia:skipHydration");function vA(t){return!Lr(t)||!t.hasOwnProperty(yA)}const{assign:St}=Object;function fd(t){return!!(Te(t)&&t.effect)}function dd(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){!a&&!r&&(n.state.value[t]=s?s():{});const u=xf(r?Os(s?s():{}).value:n.state.value[t]);return St(u,i,Object.keys(o||{}).reduce((h,f)=>(f in u&&console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${t}".`),h[f]=_n(Et(()=>{Pi(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=Bl(t,l,e,n,r,!0),c}function Bl(t,e,n={},r,s,i){let o;const a=St({actions:{}},n);if(!r._e.active)throw new Error("Pinia destroyed");const c={deep:!0};c.onTrigger=F=>{l?p=F:l==!1&&!B._hotUpdating&&(Array.isArray(p)?p.push(F):console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let l,u,h=[],f=[],p;const _=r.state.value[t];!i&&!_&&!s&&(r.state.value[t]={});const T=Os({});let E;function R(F){let L;l=u=!1,p=[],typeof F=="function"?(F(r.state.value[t]),L={type:en.patchFunction,storeId:t,events:p}):(jl(r.state.value[t],F),L={type:en.patchObject,payload:F,storeId:t,events:p});const oe=E=Symbol();ha().then(()=>{E===oe&&(l=!0)}),u=!0,ns(h,L,r.state.value[t])}const N=i?function(){const{state:L}=n,oe=L?L():{};this.$patch(Pe=>{St(Pe,oe)})}:()=>{throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`)};function k(){o.stop(),h=[],f=[],r._s.delete(t)}function K(F,L){return function(){Pi(r);const oe=Array.from(arguments),Pe=[],Bt=[];function gt(Y){Pe.push(Y)}function je(Y){Bt.push(Y)}ns(f,{args:oe,name:F,store:B,after:gt,onError:je});let ne;try{ne=L.apply(this&&this.$id===t?this:B,oe)}catch(Y){throw ns(Bt,Y),Y}return ne instanceof Promise?ne.then(Y=>(ns(Pe,Y),Y)).catch(Y=>(ns(Bt,Y),Promise.reject(Y))):(ns(Pe,ne),ne)}}const U=_n({actions:{},getters:{},state:[],hotState:T}),de={_p:r,$id:t,$onAction:hd.bind(null,f),$patch:R,$reset:N,$subscribe(F,L={}){const oe=hd(h,F,L.detached,()=>Pe()),Pe=o.run(()=>Cr(()=>r.state.value[t],Bt=>{(L.flush==="sync"?u:l)&&F({storeId:t,type:en.direct,events:p},Bt)},St({},c,L)));return oe},$dispose:k},B=Gi(St({_hmrPayload:U,_customProperties:_n(new Set)},de));r._s.set(t,B);const $e=r._a&&r._a.runWithContext||_A,ye=r._e.run(()=>(o=pg(),$e(()=>o.run(e))));for(const F in ye){const L=ye[F];if(Te(L)&&!fd(L)||Ut(L))s?bo(T.value,F,$o(ye,F)):i||(_&&vA(L)&&(Te(L)?L.value=_[F]:jl(L,_[F])),r.state.value[t][F]=L),U.state.push(F);else if(typeof L=="function"){const oe=s?L:K(F,L);ye[F]=oe,U.actions[F]=L,a.actions[F]=L}else fd(L)&&(U.getters[F]=i?n.getters[F]:L,nc&&(ye._getters||(ye._getters=_n([]))).push(F))}if(St(B,ye),St(X(B),ye),Object.defineProperty(B,"$state",{get:()=>s?T.value:r.state.value[t],set:F=>{if(s)throw new Error("cannot set hotState");R(L=>{St(L,F)})}}),B._hotUpdate=_n(F=>{B._hotUpdating=!0,F._hmrPayload.state.forEach(L=>{if(L in B.$state){const oe=F.$state[L],Pe=B.$state[L];typeof oe=="object"&&Lr(oe)&&Lr(Pe)?bm(oe,Pe):F.$state[L]=Pe}bo(B,L,$o(F.$state,L))}),Object.keys(B.$state).forEach(L=>{L in F.$state||Kc(B,L)}),l=!1,u=!1,r.state.value[t]=$o(F._hmrPayload,"hotState"),u=!0,ha().then(()=>{l=!0});for(const L in F._hmrPayload.actions){const oe=F[L];bo(B,L,K(L,oe))}for(const L in F._hmrPayload.getters){const oe=F._hmrPayload.getters[L],Pe=i?Et(()=>(Pi(r),oe.call(B,B))):oe;bo(B,L,Pe)}Object.keys(B._hmrPayload.getters).forEach(L=>{L in F._hmrPayload.getters||Kc(B,L)}),Object.keys(B._hmrPayload.actions).forEach(L=>{L in F._hmrPayload.actions||Kc(B,L)}),B._hmrPayload=F._hmrPayload,B._getters=F._getters,B._hotUpdating=!1}),ma){const F={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach(L=>{Object.defineProperty(B,L,St({value:B[L]},F))})}return r._p.forEach(F=>{if(ma){const L=o.run(()=>F({store:B,app:r._a,pinia:r,options:a}));Object.keys(L||{}).forEach(oe=>B._customProperties.add(oe)),St(B,L)}else St(B,o.run(()=>F({store:B,app:r._a,pinia:r,options:a})))}),B.$state&&typeof B.$state=="object"&&typeof B.$state.constructor=="function"&&!B.$state.constructor.toString().includes("[native code]")&&console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${B.$id}".`),_&&i&&n.hydrate&&n.hydrate(B.$state,_),l=!0,u=!0,B}function o1(t,e,n){let r,s;const i=typeof e=="function";if(typeof t=="string")r=t,s=i?n:e;else if(s=t,r=t.id,typeof r!="string")throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');function o(a,c){const l=DI();if(a=a||(l?Zt(_m,null):null),a&&Pi(a),!Fl)throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);a=Fl,a._s.has(r)||(i?Bl(r,e,s,a):dd(r,s,a),o._pinia=a);const u=a._s.get(r);if(c){const h="__hot:"+r,f=i?Bl(h,e,s,a,!0):dd(h,St({},s),a,!0);c._hotUpdate(f),delete a.state.value[h],a._s.delete(h)}if(nc){const h=Qu();if(h&&h.proxy&&!c){const f=h.proxy,p="_pStores"in f?f._pStores:f._pStores={};p[r]=u}}return u}return o.$id=r,o}function a1(t){{t=X(t);const e={};for(const n in t){const r=t[n];(Te(r)||Ut(r))&&(e[n]=$o(t,n))}return e}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const gn=typeof window<"u";function EA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function zc(t,e){const n={};for(const r in e){const s=e[r];n[r]=At(s)?s.map(t):t(s)}return n}const ui=()=>{},At=Array.isArray;function fe(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const wA=/\/$/,IA=t=>t.replace(wA,"");function Gc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=RA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function TA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&nr(e.matched[r],n.matched[s])&&Pm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function nr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Pm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!AA(t[n],e[n]))return!1;return!0}function AA(t,e){return At(t)?md(t,e):At(e)?md(e,t):t===e}function md(t,e){return At(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function RA(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Si;(function(t){t.pop="pop",t.push="push"})(Si||(Si={}));var hi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hi||(hi={}));function bA(t){if(!t)if(gn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IA(t)}const PA=/^[^#]+#/;function SA(t,e){return t.replace(PA,"#")+e}function CA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const rc=()=>({left:window.pageXOffset,top:window.pageYOffset});function kA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){fe(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{fe(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){fe(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=CA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _d(t,e){return(history.state?history.state.position-e:-1)+t}const ql=new Map;function OA(t,e){ql.set(t,e)}function NA(t){const e=ql.get(t);return ql.delete(t),e}let DA=()=>location.protocol+"//"+location.host;function Sm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),pd(c,"")}return pd(n,t)+r+s}function xA(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Sm(t,location),_=n.value,T=e.value;let E=0;if(f){if(n.value=p,e.value=f,o&&o===_){o=null;return}E=T?f.position-T.position:0}else r(p);s.forEach(R=>{R(n.value,_,{delta:E,type:Si.pop,direction:E?E>0?hi.forward:hi.back:hi.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(me({},f.state,{scroll:rc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function yd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?rc():null}}function VA(t){const{history:e,location:n}=window,r={value:Sm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:DA()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){fe("Error with push/replace State",p),n[u?"replace":"assign"](f)}}function o(c,l){const u=me({},e.state,yd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=me({},s.value,e.state,{forward:c,scroll:rc()});e.state||fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=me({},yd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function MA(t){t=bA(t);const e=VA(t),n=xA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:SA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function LA(t){return typeof t=="string"||t&&typeof t=="object"}function Cm(t){return typeof t=="string"||typeof t=="symbol"}const Vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},km=Symbol("navigation failure");var vd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vd||(vd={}));const UA={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${$A(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Es(t,e){return me(new Error(UA[t](e)),{type:t,[km]:!0},e)}function fn(t,e){return t instanceof Error&&km in t&&(e==null||!!(t.type&e))}const FA=["params","query","hash"];function $A(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of FA)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Ed="[^/]+?",jA={sensitive:!1,strict:!1,start:!0,end:!0},BA=/[.+*?^${}()[\]/\\]/g;function qA(t,e){const n=me({},jA,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(BA,"\\$&"),p+=40;else if(f.type===1){const{value:_,repeatable:T,optional:E,regexp:R}=f;i.push({name:_,repeatable:T,optional:E});const N=R||Ed;if(N!==Ed){p+=10;try{new RegExp(`(${N})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${_}" (${N}): `+K.message)}}let k=T?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(k=E&&l.length<2?`(?:/${k})`:"/"+k),E&&(k+="?"),s+=k,p+=20,E&&(p+=-8),T&&(p+=-20),N===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",_=i[f-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:T,optional:E}=p,R=_ in l?l[_]:"";if(At(R)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const N=At(R)?R.join("/"):R;if(!N)if(E)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function HA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function WA(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=HA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(wd(r))return 1;if(wd(s))return-1}return s.length-r.length}function wd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const KA={type:0,value:""},zA=/[a-zA-Z0-9_]/;function GA(t){if(!t)return[[]];if(t==="/")return[[KA]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:zA.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function QA(t,e,n){const r=qA(GA(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&fe(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function YA(t,e){const n=[],r=new Map;e=Ad({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,_=JA(u);tR(_,h),_.aliasOf=f&&f.record;const T=Ad(e,u),E=[_];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of k)E.push(me({},_,{components:f?f.record.components:_.components,path:K,aliasOf:f?f.record:_}))}let R,N;for(const k of E){const{path:K}=k;if(h&&K[0]!=="/"){const U=h.record.path,de=U[U.length-1]==="/"?"":"/";k.path=h.record.path+(K&&de+K)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(R=QA(k,h,T),h&&K[0]==="/"&&nR(R,h),f?(f.alias.push(R),eR(f,R)):(N=N||R,N!==R&&N.alias.push(R),p&&u.name&&!Td(R)&&o(u.name)),_.children){const U=_.children;for(let de=0;de<U.length;de++)i(U[de],R,f&&f.children[de])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return N?()=>{o(N)}:ui}function o(u){if(Cm(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&WA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Om(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Td(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},_,T;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Es(1,{location:u});{const N=Object.keys(u.params||{}).filter(k=>!f.keys.find(K=>K.name===k));N.length&&fe(`Discarded invalid param(s) "${N.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}T=f.record.name,p=me(Id(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Id(u.params,f.keys.map(N=>N.name))),_=f.stringify(p)}else if("path"in u)_=u.path,_.startsWith("/")||fe(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),f=n.find(N=>N.re.test(_)),f&&(p=f.parse(_),T=f.record.name);else{if(f=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw Es(1,{location:u,currentLocation:h});T=f.record.name,p=me({},h.params,u.params),_=f.stringify(p)}const E=[];let R=f;for(;R;)E.unshift(R.record),R=R.parent;return{name:T,path:_,params:p,matched:E,meta:ZA(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Id(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function JA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:XA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function XA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Td(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZA(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Ad(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Hl(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function eR(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(Hl.bind(null,n)))return fe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(Hl.bind(null,n)))return fe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function tR(t,e){e&&e.record.name&&!t.name&&!t.path&&fe(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function nR(t,e){for(const n of e.keys)if(!t.keys.find(Hl.bind(null,n)))return fe(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Om(t,e){return e.children.some(n=>n===t||Om(t,n))}const Nm=/#/g,rR=/&/g,sR=/\//g,iR=/=/g,oR=/\?/g,Dm=/\+/g,aR=/%5B/g,cR=/%5D/g,xm=/%5E/g,lR=/%60/g,Vm=/%7B/g,uR=/%7C/g,Mm=/%7D/g,hR=/%20/g;function th(t){return encodeURI(""+t).replace(uR,"|").replace(aR,"[").replace(cR,"]")}function fR(t){return th(t).replace(Vm,"{").replace(Mm,"}").replace(xm,"^")}function Wl(t){return th(t).replace(Dm,"%2B").replace(hR,"+").replace(Nm,"%23").replace(rR,"%26").replace(lR,"`").replace(Vm,"{").replace(Mm,"}").replace(xm,"^")}function dR(t){return Wl(t).replace(iR,"%3D")}function pR(t){return th(t).replace(Nm,"%23").replace(oR,"%3F")}function gR(t){return t==null?"":pR(t).replace(sR,"%2F")}function Ci(t){try{return decodeURIComponent(""+t)}catch{fe(`Error decoding "${t}". Using original value`)}return""+t}function mR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Dm," "),o=i.indexOf("="),a=Ci(o<0?i:i.slice(0,o)),c=o<0?null:Ci(i.slice(o+1));if(a in e){let l=e[a];At(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Rd(t){let e="";for(let n in t){const r=t[n];if(n=dR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(At(r)?r.map(i=>i&&Wl(i)):[r&&Wl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function _R(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=At(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const yR=Symbol("router view location matched"),bd=Symbol("router view depth"),nh=Symbol("router"),Lm=Symbol("route location"),Kl=Symbol("router view location");function Hs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Fn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Es(4,{from:n,to:e})):h instanceof Error?a(h):LA(h)?a(Es(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,vR(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(f=>c._called?f:(fe(h),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){fe(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function vR(t,e,n){let r=0;return function(){r++===1&&fe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function Qc(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&fe(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw fe(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){fe(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,fe(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ER(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Fn(l,n,r,i,o))}else{let c=a();"catch"in c||(fe(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=EA(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Fn(f,n,r,i,o)()}))}}}return s}function ER(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pd(t){const e=Zt(nh),n=Zt(Lm),r=Et(()=>e.resolve(wn(t.to))),s=Et(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(nr.bind(null,u));if(f>-1)return f;const p=Sd(c[l-2]);return l>1&&Sd(u)===p&&h[h.length-1].path!==p?h.findIndex(nr.bind(null,c[l-2])):f}),i=Et(()=>s.value>-1&&AR(n.params,r.value.params)),o=Et(()=>s.value>-1&&s.value===n.matched.length-1&&Pm(n.params,r.value.params));function a(c={}){return TR(c)?e[wn(t.replace)?"replace":"push"](wn(t.to)).catch(ui):Promise.resolve()}if(gn){const c=Qu();if(c){const l={route:r.value,isActive:i.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),oI(()=>{l.route=r.value,l.isActive=i.value,l.isExactActive=o.value},{flush:"post"})}}return{route:r,href:Et(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const wR=Ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pd,setup(t,{slots:e}){const n=Gi(Pd(t)),{options:r}=Zt(nh),s=Et(()=>({[Cd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:gm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),IR=wR;function TR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function AR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!At(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Sd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cd=(t,e,n)=>t??e??n,RR=Ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){bR();const r=Zt(Kl),s=Et(()=>t.route||r.value),i=Zt(bd,0),o=Et(()=>{let l=wn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Et(()=>s.value.matched[o.value]);Ho(bd,Et(()=>o.value+1)),Ho(yR,a),Ho(Kl,s);const c=Os();return Cr(()=>[c.value,a.value,t.name],([l,u,h],[f,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!nr(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return kd(n.default,{Component:f,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,E=gm(f,me({},_,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:c}));if(gn&&E.ref){const R={depth:o.value,name:h.name,path:h.path,meta:h.meta};(At(E.ref)?E.ref.map(k=>k.i):[E.ref.i]).forEach(k=>{k.__vrv_devtools=R})}return kd(n.default,{Component:E,route:l})||E}}});function kd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Um=RR;function bR(){const t=Qu(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function Ws(t,e){const n=me({},t,{matched:t.matched.map(r=>VR(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Po(t){return{_custom:{display:t}}}let PR=0;function SR(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=PR++;Xu({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ws(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const f=h.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Fm})}At(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(f=>{let p=Bm,_="";f.isExactActive?(p=jm,_="This is exactly active"):f.isActive&&(p=$m,_="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:_,backgroundColor:p})}))}),Cr(e.currentRoute,()=>{c(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const f={guard:Po("beforeEach"),from:Ws(h,"Current Location during this navigation"),to:Ws(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,f)=>{const p={guard:Po("afterEach")};f?(p.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},p.status=Po("❌")):p.status=Po("✅"),p.from=Ws(h,"Current Location during this navigation"),p.to=Ws(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let h=n.getRoutes().filter(f=>!f.parent);h.forEach(Wm),u.filter&&(h=h.filter(f=>zl(f,u.filter.toLowerCase()))),h.forEach(f=>Hm(f,e.currentRoute.value)),u.rootNodes=h.map(qm)}let l;s.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const f=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);f&&(u.state={options:kR(f)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function CR(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function kR(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${CR(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Fm=15485081,$m=2450411,jm=8702998,OR=2282478,Bm=16486972,NR=6710886;function qm(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:OR}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Bm}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Fm}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:jm}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:$m}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:NR});let r=n.__vd_id;return r==null&&(r=String(DR++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(qm)}}let DR=0;const xR=/^\/(.*)\/([a-z]*)$/;function Hm(t,e){const n=e.matched.length&&nr(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>nr(r,t.record))),t.children.forEach(r=>Hm(r,e))}function Wm(t){t.__vd_match=!1,t.children.forEach(Wm)}function zl(t,e){const n=String(t.re).match(xR);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>zl(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=Ci(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>zl(o,e))}function VR(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function MR(t){const e=YA(t.routes,t),n=t.parseQuery||mR,r=t.stringifyQuery||Rd,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Hs(),o=Hs(),a=Hs(),c=Tw(Vn);let l=Vn;gn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zc.bind(null,y=>""+y),h=zc.bind(null,gR),f=zc.bind(null,Ci);function p(y,V){let M,j;return Cm(y)?(M=e.getRecordMatcher(y),j=V):j=y,e.addRoute(j,M)}function _(y){const V=e.getRecordMatcher(y);V?e.removeRoute(V):fe(`Cannot remove non-existent route "${String(y)}"`)}function T(){return e.getRoutes().map(y=>y.record)}function E(y){return!!e.getRecordMatcher(y)}function R(y,V){if(V=me({},V||c.value),typeof y=="string"){const g=Gc(n,y,V.path),m=e.resolve({path:g.path},V),w=s.createHref(g.fullPath);return w.startsWith("//")?fe(`Location "${y}" resolved to "${w}". A resolved location cannot start with multiple slashes.`):m.matched.length||fe(`No match found for location with path "${y}"`),me(g,m,{params:f(m.params),hash:Ci(g.hash),redirectedFrom:void 0,href:w})}let M;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&fe(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),M=me({},y,{path:Gc(n,y.path,V.path).path});else{const g=me({},y.params);for(const m in g)g[m]==null&&delete g[m];M=me({},y,{params:h(g)}),V.params=h(V.params)}const j=e.resolve(M,V),ue=y.hash||"";ue&&!ue.startsWith("#")&&fe(`A \`hash\` should always start with the character "#". Replace "${ue}" with "#${ue}".`),j.params=u(f(j.params));const Se=TA(r,me({},y,{hash:fR(ue),path:j.path})),d=s.createHref(Se);return d.startsWith("//")?fe(`Location "${y}" resolved to "${d}". A resolved location cannot start with multiple slashes.`):j.matched.length||fe(`No match found for location with path "${"path"in y?y.path:y}"`),me({fullPath:Se,hash:ue,query:r===Rd?_R(y.query):y.query||{}},j,{redirectedFrom:void 0,href:d})}function N(y){return typeof y=="string"?Gc(n,y,c.value.path):me({},y)}function k(y,V){if(l!==y)return Es(8,{from:V,to:y})}function K(y){return B(y)}function U(y){return K(me(N(y),{replace:!0}))}function de(y){const V=y.matched[y.matched.length-1];if(V&&V.redirect){const{redirect:M}=V;let j=typeof M=="function"?M(y):M;if(typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=N(j):{path:j},j.params={}),!("path"in j)&&!("name"in j))throw fe(`Invalid redirect found:
${JSON.stringify(j,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return me({query:y.query,hash:y.hash,params:"path"in j?{}:y.params},j)}}function B(y,V){const M=l=R(y),j=c.value,ue=y.state,Se=y.force,d=y.replace===!0,g=de(M);if(g)return B(me(N(g),{state:typeof g=="object"?me({},ue,g.state):ue,force:Se,replace:d}),V||M);const m=M;m.redirectedFrom=V;let w;return!Se&&gd(r,j,M)&&(w=Es(16,{to:m,from:j}),On(j,j,!0,!1)),(w?Promise.resolve(w):F(m,j)).catch(v=>fn(v)?fn(v,2)?v:dr(v):Y(v,m,j)).then(v=>{if(v){if(fn(v,2))return gd(r,R(v.to),m)&&V&&(V._count=V._count?V._count+1:1)>30?(fe(`Detected a possibly infinite redirection in a navigation guard when going from "${j.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(me({replace:d},N(v.to),{state:typeof v.to=="object"?me({},ue,v.to.state):ue,force:Se}),V||m)}else v=oe(m,j,!0,d,ue);return L(m,j,v),v})}function $e(y,V){const M=k(y,V);return M?Promise.reject(M):Promise.resolve()}function ye(y){const V=Nn.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(y):y()}function F(y,V){let M;const[j,ue,Se]=LR(y,V);M=Qc(j.reverse(),"beforeRouteLeave",y,V);for(const g of j)g.leaveGuards.forEach(m=>{M.push(Fn(m,y,V))});const d=$e.bind(null,y,V);return M.push(d),Dn(M).then(()=>{M=[];for(const g of i.list())M.push(Fn(g,y,V));return M.push(d),Dn(M)}).then(()=>{M=Qc(ue,"beforeRouteUpdate",y,V);for(const g of ue)g.updateGuards.forEach(m=>{M.push(Fn(m,y,V))});return M.push(d),Dn(M)}).then(()=>{M=[];for(const g of Se)if(g.beforeEnter)if(At(g.beforeEnter))for(const m of g.beforeEnter)M.push(Fn(m,y,V));else M.push(Fn(g.beforeEnter,y,V));return M.push(d),Dn(M)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),M=Qc(Se,"beforeRouteEnter",y,V),M.push(d),Dn(M))).then(()=>{M=[];for(const g of o.list())M.push(Fn(g,y,V));return M.push(d),Dn(M)}).catch(g=>fn(g,8)?g:Promise.reject(g))}function L(y,V,M){a.list().forEach(j=>ye(()=>j(y,V,M)))}function oe(y,V,M,j,ue){const Se=k(y,V);if(Se)return Se;const d=V===Vn,g=gn?history.state:{};M&&(j||d?s.replace(y.fullPath,me({scroll:d&&g&&g.scroll},ue)):s.push(y.fullPath,ue)),c.value=y,On(y,V,M,d),dr()}let Pe;function Bt(){Pe||(Pe=s.listen((y,V,M)=>{if(!vo.listening)return;const j=R(y),ue=de(j);if(ue){B(me(ue,{replace:!0}),j).catch(ui);return}l=j;const Se=c.value;gn&&OA(_d(Se.fullPath,M.delta),rc()),F(j,Se).catch(d=>fn(d,12)?d:fn(d,2)?(B(d.to,j).then(g=>{fn(g,20)&&!M.delta&&M.type===Si.pop&&s.go(-1,!1)}).catch(ui),Promise.reject()):(M.delta&&s.go(-M.delta,!1),Y(d,j,Se))).then(d=>{d=d||oe(j,Se,!1),d&&(M.delta&&!fn(d,8)?s.go(-M.delta,!1):M.type===Si.pop&&fn(d,20)&&s.go(-1,!1)),L(j,Se,d)}).catch(ui)}))}let gt=Hs(),je=Hs(),ne;function Y(y,V,M){dr(y);const j=je.list();return j.length?j.forEach(ue=>ue(y,V,M)):(fe("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function bt(){return ne&&c.value!==Vn?Promise.resolve():new Promise((y,V)=>{gt.add([y,V])})}function dr(y){return ne||(ne=!y,Bt(),gt.list().forEach(([V,M])=>y?M(y):V()),gt.reset()),y}function On(y,V,M,j){const{scrollBehavior:ue}=t;if(!gn||!ue)return Promise.resolve();const Se=!M&&NA(_d(y.fullPath,0))||(j||!M)&&history.state&&history.state.scroll||null;return ha().then(()=>ue(y,V,Se)).then(d=>d&&kA(d)).catch(d=>Y(d,y,V))}const qt=y=>s.go(y);let Pt;const Nn=new Set,vo={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:E,getRoutes:T,resolve:R,options:t,push:K,replace:U,go:qt,back:()=>qt(-1),forward:()=>qt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:je.add,isReady:bt,install(y){const V=this;y.component("RouterLink",IR),y.component("RouterView",Um),y.config.globalProperties.$router=V,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>wn(c)}),gn&&!Pt&&c.value===Vn&&(Pt=!0,K(s.location).catch(ue=>{fe("Unexpected error when starting the router:",ue)}));const M={};for(const ue in Vn)Object.defineProperty(M,ue,{get:()=>c.value[ue],enumerable:!0});y.provide(nh,V),y.provide(Lm,Cg(M)),y.provide(Kl,c);const j=y.unmount;Nn.add(y),y.unmount=function(){Nn.delete(y),Nn.size<1&&(l=Vn,Pe&&Pe(),Pe=null,c.value=Vn,Pt=!1,ne=!1),j()},gn&&SR(y,V,e)}};function Dn(y){return y.reduce((V,M)=>V.then(()=>ye(M)),Promise.resolve())}return vo}function LR(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>nr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>nr(l,c))||s.push(c))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},UR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Km(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new FR;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $R=function(t){const e=Km(t);return zm.encodeByteArray(e,!0)},ya=function(t){return $R(t).replace(/\./g,"")},Gm=function(t){try{return zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=()=>jR().__FIREBASE_DEFAULTS__,qR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gm(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return BR()||qR()||HR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qm=t=>{var e,n;return(n=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ym=t=>{const e=Qm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jm=()=>{var t;return(t=sc())===null||t===void 0?void 0:t.config},Xm=t=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ya(JSON.stringify(n)),ya(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function zR(){var t;const e=(t=sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YR(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JR(){try{return typeof indexedDB=="object"}catch{return!1}}function XR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZR,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?eb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new un(s,a,r)}}function eb(t,e){return t.replace(tb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tb=/\{\$([^}]+)}/g;function nb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function va(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Od(i)&&Od(o)){if(!va(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Od(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rb(t,e){const n=new sb(t,e);return n.subscribe.bind(n)}class sb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ib(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Yc),s.error===void 0&&(s.error=Yc),s.complete===void 0&&(s.complete=Yc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ib(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cb(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ab(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ab(t){return t===yr?void 0:t}function cb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ob(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const ub={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},hb=pe.INFO,fb={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},db=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rh{constructor(e){this.name=e,this._logLevel=hb,this._logHandler=db,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ub[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const pb=(t,e)=>e.some(n=>t instanceof n);let Nd,Dd;function gb(){return Nd||(Nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mb(){return Dd||(Dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e_=new WeakMap,Gl=new WeakMap,t_=new WeakMap,Jc=new WeakMap,sh=new WeakMap;function _b(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&e_.set(n,t)}).catch(()=>{}),sh.set(e,t),e}function yb(t){if(Gl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gl.set(t,e)}let Ql={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vb(t){Ql=t(Ql)}function Eb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xc(this),e,...n);return t_.set(r,e.sort?e.sort():[e]),Gn(r)}:mb().includes(t)?function(...e){return t.apply(Xc(this),e),Gn(e_.get(this))}:function(...e){return Gn(t.apply(Xc(this),e))}}function wb(t){return typeof t=="function"?Eb(t):(t instanceof IDBTransaction&&yb(t),pb(t,gb())?new Proxy(t,Ql):t)}function Gn(t){if(t instanceof IDBRequest)return _b(t);if(Jc.has(t))return Jc.get(t);const e=wb(t);return e!==t&&(Jc.set(t,e),sh.set(e,t)),e}const Xc=t=>sh.get(t);function Ib(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Gn(o.result),c.oldVersion,c.newVersion,Gn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Tb=["get","getKey","getAll","getAllKeys","count"],Ab=["put","add","delete","clear"],Zc=new Map;function xd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zc.get(e))return Zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ab.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Zc.set(e,i),i}vb(t=>({...t,get:(e,n,r)=>xd(e,n)||t.get(e,n,r),has:(e,n)=>!!xd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yl="@firebase/app",Vd="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new rh("@firebase/app"),Pb="@firebase/app-compat",Sb="@firebase/analytics-compat",Cb="@firebase/analytics",kb="@firebase/app-check-compat",Ob="@firebase/app-check",Nb="@firebase/auth",Db="@firebase/auth-compat",xb="@firebase/database",Vb="@firebase/database-compat",Mb="@firebase/functions",Lb="@firebase/functions-compat",Ub="@firebase/installations",Fb="@firebase/installations-compat",$b="@firebase/messaging",jb="@firebase/messaging-compat",Bb="@firebase/performance",qb="@firebase/performance-compat",Hb="@firebase/remote-config",Wb="@firebase/remote-config-compat",Kb="@firebase/storage",zb="@firebase/storage-compat",Gb="@firebase/firestore",Qb="@firebase/firestore-compat",Yb="firebase",Jb="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="[DEFAULT]",Xb={[Yl]:"fire-core",[Pb]:"fire-core-compat",[Cb]:"fire-analytics",[Sb]:"fire-analytics-compat",[Ob]:"fire-app-check",[kb]:"fire-app-check-compat",[Nb]:"fire-auth",[Db]:"fire-auth-compat",[xb]:"fire-rtdb",[Vb]:"fire-rtdb-compat",[Mb]:"fire-fn",[Lb]:"fire-fn-compat",[Ub]:"fire-iid",[Fb]:"fire-iid-compat",[$b]:"fire-fcm",[jb]:"fire-fcm-compat",[Bb]:"fire-perf",[qb]:"fire-perf-compat",[Hb]:"fire-rc",[Wb]:"fire-rc-compat",[Kb]:"fire-gcs",[zb]:"fire-gcs-compat",[Gb]:"fire-fst",[Qb]:"fire-fst-compat","fire-js":"fire-js",[Yb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map,Xl=new Map;function Zb(t,e){try{t.container.addComponent(e)}catch(n){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(Xl.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;Xl.set(e,t);for(const n of Ea.values())Zb(n,t);return!0}function ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new Ji("app","Firebase",e0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=Jb;function n_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(n||(n=Jm()),!n)throw Qn.create("no-options");const i=Ea.get(s);if(i){if(va(n,i.options)&&va(r,i.config))return i;throw Qn.create("duplicate-app",{appName:s})}const o=new lb(s);for(const c of Xl.values())o.addComponent(c);const a=new t0(n,r,o);return Ea.set(s,a),a}function ih(t=Jl){const e=Ea.get(t);if(!e&&t===Jl&&Jm())return n_();if(!e)throw Qn.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=Xb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(a.join(" "));return}Fr(new rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="firebase-heartbeat-database",r0=1,ki="firebase-heartbeat-store";let el=null;function r_(){return el||(el=Ib(n0,r0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),el}async function s0(t){try{return await(await r_()).transaction(ki).objectStore(ki).get(s_(t))}catch(e){if(e instanceof un)Ur.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(n.message)}}}async function Md(t,e){try{const r=(await r_()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,s_(t)),await r.done}catch(n){if(n instanceof un)Ur.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ur.warn(r.message)}}}function s_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=1024,o0=30*24*60*60*1e3;class a0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new l0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ld();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=o0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ld(),{heartbeatsToSend:n,unsentEntries:r}=c0(this._heartbeatsCache.heartbeats),s=ya(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ld(){return new Date().toISOString().substring(0,10)}function c0(t,e=i0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ud(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ud(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class l0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JR()?XR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await s0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ud(t){return ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){Fr(new rr("platform-logger",e=>new Rb(e),"PRIVATE")),Fr(new rr("heartbeat",e=>new a0(e),"PRIVATE")),tn(Yl,Vd,t),tn(Yl,Vd,"esm2017"),tn("fire-js","")}u0("");function oh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fd(t){return t!==void 0&&t.enterprise!==void 0}class h0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f0=i_,o_=new Ji("auth","Firebase",i_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new rh("@firebase/auth");function d0(t,...e){wa.logLevel<=pe.WARN&&wa.warn(`Auth (${Gr}): ${t}`,...e)}function Yo(t,...e){wa.logLevel<=pe.ERROR&&wa.error(`Auth (${Gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw ah(t,...e)}function nn(t,...e){return ah(t,...e)}function a_(t,e,n){const r=Object.assign(Object.assign({},f0()),{[e]:n});return new Ji("auth","Firebase",r).create(e,{appName:t.name})}function p0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ot(t,"argument-error"),a_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ah(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return o_.create(t,...e)}function Z(t,e,...n){if(!t)throw ah(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yo(e),new Error(e)}function An(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function g0(){return $d()==="http:"||$d()==="https:"}function $d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(g0()||GR()||"connection"in navigator)?navigator.onLine:!0}function _0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=KR()||QR()}get(){return m0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=new Zi(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,s={}){return l_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),c_.fetch()(u_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function l_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},y0),e);try{const s=new E0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw So(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw So(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw So(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw a_(t,u,l);Ot(t,u)}}catch(s){if(s instanceof un)throw s;Ot(t,"network-request-failed",{message:String(s)})}}async function eo(t,e,n,r,s={}){const i=await cr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function u_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ch(t.config,s):`${t.config.apiScheme}://${s}`}class E0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),v0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function So(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}async function w0(t,e){return cr(t,"GET","/v2/recaptchaConfig",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function T0(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A0(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=lh(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fi(tl(s.auth_time)),issuedAtTime:fi(tl(s.iat)),expirationTime:fi(tl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tl(t){return Number(t)*1e3}function lh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gm(n);return s?JSON.parse(s):(Yo("Failed to decode base64 JWT payload"),null)}catch(s){return Yo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function R0(t){const e=lh(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&b0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function b0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ws(t,T0(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?k0(i.providerUserInfo):[],a=C0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new h_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function S0(t){const e=qe(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function C0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function k0(t){return t.map(e=>{var{providerId:n}=e,r=oh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(t,e){const n=await l_(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=u_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",c_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):R0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await O0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Oi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=oh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new h_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ws(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return A0(this,e)}reload(){return S0(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ws(this,I0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:K,isAnonymous:U,providerData:de,stsTokenManager:B}=n;Z(k&&B,e,"internal-error");const $e=Oi.fromJSON(this.name,B);Z(typeof k=="string",e,"internal-error"),Mn(h,e.name),Mn(f,e.name),Z(typeof K=="boolean",e,"internal-error"),Z(typeof U=="boolean",e,"internal-error"),Mn(p,e.name),Mn(_,e.name),Mn(T,e.name),Mn(E,e.name),Mn(R,e.name),Mn(N,e.name);const ye=new Nr({uid:k,auth:e,email:f,emailVerified:K,displayName:h,isAnonymous:U,photoURL:_,phoneNumber:p,tenantId:T,stsTokenManager:$e,createdAt:R,lastLoginAt:N});return de&&Array.isArray(de)&&(ye.providerData=de.map(F=>Object.assign({},F))),E&&(ye._redirectEventId=E),ye}static async _fromIdTokenResponse(e,n,r=!1){const s=new Oi;s.updateFromServerResponse(n);const i=new Nr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ia(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Map;function vn(t){An(t instanceof Function,"Expected a class definition");let e=jd.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}f_.type="NONE";const Bd=f_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(vn(Bd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||vn(Bd);const o=Jo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Nr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ds(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ds(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(d_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(y_(e))return"Webos";if(uh(e))return"Safari";if((e.includes("chrome/")||p_(e))&&!e.includes("edge/"))return"Chrome";if(m_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function d_(t=ct()){return/firefox\//i.test(t)}function uh(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p_(t=ct()){return/crios\//i.test(t)}function g_(t=ct()){return/iemobile/i.test(t)}function m_(t=ct()){return/android/i.test(t)}function __(t=ct()){return/blackberry/i.test(t)}function y_(t=ct()){return/webos/i.test(t)}function oc(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function N0(t=ct()){var e;return oc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function D0(){return YR()&&document.documentMode===10}function v_(t=ct()){return oc(t)||m_(t)||y_(t)||__(t)||/windows phone/i.test(t)||g_(t)}function x0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e=[]){let n;switch(t){case"Browser":n=qd(ct());break;case"Worker":n=`${qd(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(t,e={}){return cr(t,"GET","/v2/passwordPolicy",Qr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=6;class U0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:L0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hd(this),this.idTokenSubscription=new Hd(this),this.beforeStateQueue=new V0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await M0(this),n=new U0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&d0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function lr(t){return qe(t)}class Hd{constructor(e){this.auth=e,this.observer=null,this.addObserver=rb(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function w_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$0().appendChild(r)})}function j0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const B0="https://www.google.com/recaptcha/enterprise.js?render=",q0="recaptcha-enterprise",H0="NO_RECAPTCHA";class W0{constructor(e){this.type=q0,this.auth=lr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{w0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new h0(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Fd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(H0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Fd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}w_(B0+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ta(t,e,n,r=!1){const s=new W0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t,e){const n=ic(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(va(i,e??{}))return s;Ot(s,"already-initialized")}return n.initialize({options:e})}function z0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function G0(t,e,n){const r=lr(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=I_(e),{host:o,port:a}=Q0(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Y0()}function I_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Q0(t){const e=I_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wd(o)}}}function Wd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Y0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function J0(t,e){return cr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t,e){return eo(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function Z0(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends hh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ni(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ni(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ta(e,r,"signInWithPassword");return nl(e,s)}else return nl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ta(e,r,"signInWithPassword");return nl(e,i)}else return Promise.reject(s)});case"emailLink":return X0(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return J0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Z0(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return eo(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="http://localhost";class $r extends hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=oh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:eP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nP(t){const e=ei(ti(t)).link,n=e?ei(ti(e)).deep_link_id:null,r=ei(ti(t)).deep_link_id;return(r?ei(ti(r)).link:null)||r||n||e||t}class fh{constructor(e){var n,r,s,i,o,a;const c=ei(ti(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=tP((s=c.mode)!==null&&s!==void 0?s:null);Z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nP(e);try{return new fh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return Ni._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fh.parseLink(n);return Z(r,"argument-error"),Ni._fromEmailAndCode(e,r.code,r.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends dh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends to{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends to{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends to{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t,e){return eo(t,"POST","/v1/accounts:signUp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Nr._fromIdTokenResponse(e,r,s),o=Kd(r);return new jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kd(r);return new jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Aa(e,n,r,s)}}function T_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,i,e,r):i})}async function rP(t,e,n=!1){const r=await ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ws(t,T_(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=lh(i.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t,e,n=!1){const r="signIn",s=await T_(t,r,e),i=await jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function iP(t,e){return A_(lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t){const e=lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oP(t,e,n){var r;const s=lr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Ta(s,i,"signUpPassword");o=rl(s,l)}else o=rl(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ta(s,i,"signUpPassword");return rl(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&R_(t),l}),c=await jr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function aP(t,e,n){return iP(qe(t),Ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&R_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){return cr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ws(r,cP(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function uP(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function hP(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}const Ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(){const t=ct();return uh(t)||oc(t)}const dP=1e3,pP=10;class P_ extends b_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fP()&&x0(),this.fallbackToPolling=v_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);D0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P_.type="LOCAL";const gP=P_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends b_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}S_.type="SESSION";const C_=S_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await mP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ph("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function yP(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function vP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wP(){return k_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firebaseLocalStorageDb",IP=1,ba="firebaseLocalStorage",N_="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function TP(){const t=indexedDB.deleteDatabase(O_);return new no(t).toPromise()}function eu(){const t=indexedDB.open(O_,IP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ba,{keyPath:N_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ba)?e(r):(r.close(),await TP(),e(await eu()))})})}async function zd(t,e,n){const r=cc(t,!0).put({[N_]:e,value:n});return new no(r).toPromise()}async function AP(t,e){const n=cc(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Gd(t,e){const n=cc(t,!0).delete(e);return new no(n).toPromise()}const RP=800,bP=3;class D_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(wP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vP(),!this.activeServiceWorker)return;this.sender=new _P(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eu();return await zd(e,Ra,"1"),await Gd(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cc(s,!1).getAll();return new no(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}D_.type="LOCAL";const PP=D_;new Zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t,e){return e?vn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends hh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SP(t){return A_(t.auth,new gh(t),t.bypassAuthState)}function CP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),sP(n,new gh(t),t.bypassAuthState)}async function kP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),rP(n,new gh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SP;case"linkViaPopup":case"linkViaRedirect":return kP;case"reauthViaPopup":case"reauthViaRedirect":return CP;default:Ot(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=new Zi(2e3,1e4);async function NP(t,e,n){const r=lr(t);p0(t,e,dh);const s=x_(r,n);return new wr(r,"signInViaPopup",e,s).executeNotNull()}class wr extends V_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OP.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP="pendingRedirect",Xo=new Map;class xP extends V_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xo.get(this.auth._key());if(!e){try{const r=await VP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xo.set(this.auth._key(),e)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VP(t,e){const n=UP(e),r=LP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function MP(t,e){Xo.set(t._key(),e)}function LP(t){return vn(t._redirectPersistence)}function UP(t){return Jo(DP,t.config.apiKey,t.name)}async function FP(t,e,n=!1){const r=lr(t),s=x_(r,e),o=await new xP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=10*60*1e3;class jP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!M_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$P&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qd(e))}saveEventToCache(e){this.cachedEventUids.add(Qd(e)),this.lastProcessedEventTime=Date.now()}}function Qd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function M_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return M_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WP=/^https?/;async function KP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qP(t);for(const n of e)try{if(zP(n))return}catch{}Ot(t,"unauthorized-domain")}function zP(t){const e=Zl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WP.test(n))return!1;if(HP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=new Zi(3e4,6e4);function Yd(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QP(t){return new Promise((e,n)=>{var r,s,i;function o(){Yd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yd(),n(nn(t,"network-request-failed"))},timeout:GP.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const a=j0("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},w_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Zo=null,e})}let Zo=null;function YP(t){return Zo=Zo||QP(t),Zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new Zi(5e3,15e3),XP="__/auth/iframe",ZP="emulator/auth/iframe",eS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nS(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ch(e,ZP):`https://${t.config.authDomain}/${XP}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},s=tS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xi(r).slice(1)}`}async function rS(t){const e=await YP(t),n=rn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:nS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{i(o)},JP.get());function c(){rn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iS=500,oS=600,aS="_blank",cS="http://localhost";class Jd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lS(t,e,n,r=iS,s=oS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},sS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ct().toLowerCase();n&&(a=p_(l)?aS:n),d_(l)&&(e=e||cS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(N0(l)&&a!=="_self")return uS(e||"",a),new Jd(null);const h=window.open(e||"",a,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Jd(h)}function uS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="__/auth/handler",fS="emulator/auth/handler",dS=encodeURIComponent("fac");async function Xd(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:s};if(e instanceof dh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof to){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${dS}=${encodeURIComponent(c)}`:"";return`${pS(t)}?${Xi(a).slice(1)}${l}`}function pS({config:t}){return t.emulator?ch(t,fS):`https://${t.authDomain}/${hS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="webStorageSupport";class gS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C_,this._completeRedirectFn=FP,this._overrideRedirectResult=MP}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Xd(e,n,r,Zl(),s);return lS(e,o,ph())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Xd(e,n,r,Zl(),s);return yP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rS(e),r=new jP(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sl,{type:sl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sl];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v_()||uh()||oc()}}const mS=gS;var Zd="@firebase/auth",ep="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vS(t){Fr(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E_(t)},l=new F0(r,s,i,c);return z0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new rr("auth-internal",e=>{const n=lr(e.getProvider("auth").getImmediate());return(r=>new _S(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Zd,ep,yS(t)),tn(Zd,ep,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=5*60,wS=Xm("authIdTokenMaxAge")||ES;let tp=null;const IS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wS)return;const s=n==null?void 0:n.token;tp!==s&&(tp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function L_(t=ih()){const e=ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=K0(t,{popupRedirectResolver:mS,persistence:[PP,gP,C_]}),r=Xm("authTokenSyncURL");if(r){const i=IS(r);hP(n,i,()=>i(n.currentUser)),uP(n,o=>i(o))}const s=Qm("auth");return s&&G0(n,`http://${s}`),n}vS("Browser");var TS="firebase",AS="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(TS,AS,"app");const RS={apiKey:"AIzaSyBhueqCi9Wd4vD7Jo9Ja6q-_5_-wSkpe88",authDomain:"realtime-chat-29fba.firebaseapp.com",projectId:"realtime-chat-29fba",storageBucket:"realtime-chat-29fba.appspot.com",messagingSenderId:"94609209804",appId:"1:94609209804:web:df97e4ab131719cbe8c569",measurementId:"G-03XKB9XPCK"},lc=n_(RS),np=["$30 of raw popcorn translates into $3,000 in sales at movie theaters","'Barack Obama' born August 4 1961 was the 44th President of the United States.","'Bookkeeper' and 'bookkeeping' are the only 2 words in the English language with three consecutive double letters","'Canberra' is the capital of 'Australia'.","'Coast Redwood' tree is the world's tallest tree (371 ft) in Redwood National Park California United States"],bS={class:"flex flex-col w-full h-full bg-surface justify-center items-center"},PS=Za("h1",{class:"text-onDark text-6xl animate-bounce p-8"},"Loading...",-1),SS={class:"text-onDark emphasis-high text-xl"},CS=Ya({__name:"LoadingScreen",setup(t){const e=Math.floor(Math.random()*np.length),n=np[e];return(r,s)=>(li(),lm("div",bS,[PS,Za("p",SS,KE(wn(n)),1)]))}}),U_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},kS=U_(CS,[["__file","/home/luuk/code/realtime-chat/src/components/LoadingScreen.vue"]]),OS=Ya({__name:"App",setup(t){const e=Os(!0),n=L_(lc);async function r(){await n.authStateReady(),e.value=!1}return r(),(s,i)=>(li(),lm(xt,null,[e.value?(li(),xl(kS,{key:0})):Yf("v-if",!0),e.value?Yf("v-if",!0):(li(),xl(wn(Um),{key:1}))],64))}}),NS=U_(OS,[["__file","/home/luuk/code/realtime-chat/src/App.vue"]]),DS="modulepreload",xS=function(t){return"/"+t},rp={},Ks=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=xS(i),i in rp)return;rp[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":DS,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="firebasestorage.googleapis.com",$_="storageBucket",VS=2*60*1e3,MS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends un{constructor(e,n,r=0){super(il(e),`Firebase Storage: ${n} (${il(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return il(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ne;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ne||(Ne={}));function il(t){return"storage/"+t}function mh(){const t="An unknown error occurred, please check the error payload for server response.";return new xe(Ne.UNKNOWN,t)}function LS(t){return new xe(Ne.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function US(t){return new xe(Ne.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Ne.UNAUTHENTICATED,t)}function $S(){return new xe(Ne.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jS(t){return new xe(Ne.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function BS(){return new xe(Ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qS(){return new xe(Ne.CANCELED,"User canceled the upload/download.")}function HS(t){return new xe(Ne.INVALID_URL,"Invalid URL '"+t+"'.")}function WS(t){return new xe(Ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function KS(){return new xe(Ne.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$_+"' property when initializing the app?")}function zS(){return new xe(Ne.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function GS(){return new xe(Ne.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QS(t){return new xe(Ne.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tu(t){return new xe(Ne.INVALID_ARGUMENT,t)}function j_(){return new xe(Ne.APP_DELETED,"The Firebase app was deleted.")}function YS(t){return new xe(Ne.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function di(t,e){return new xe(Ne.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function zs(t){throw new xe(Ne.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=It.makeFromUrl(e,n)}catch{return new It(e,"")}if(r.path==="")return r;throw WS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(K){K.path_=decodeURIComponent(K.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),_={bucket:1,path:3},T=n===F_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",R=new RegExp(`^https?://${T}/${s}/${E}`,"i"),k=[{regex:a,indices:c,postModify:i},{regex:p,indices:_,postModify:l},{regex:R,indices:{bucket:1,path:2},postModify:l}];for(let K=0;K<k.length;K++){const U=k[K],de=U.regex.exec(e);if(de){const B=de[U.indices.bucket];let $e=de[U.indices.path];$e||($e=""),r=new It(B,$e),U.postModify(r);break}}if(r==null)throw HS(e);return r}}class JS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...E){l||(l=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(p,c())},E)}function f(){i&&clearTimeout(i)}function p(E,...R){if(l){f();return}if(E){f(),u.call(null,E,...R);return}if(c()||o){f(),u.call(null,E,...R);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let _=!1;function T(E){_||(_=!0,f(),!l&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function ZS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){return t!==void 0}function tC(t){return typeof t=="object"&&!Array.isArray(t)}function _h(t){return typeof t=="string"||t instanceof String}function sp(t){return yh()&&t instanceof Blob}function yh(){return typeof Blob<"u"&&!zR()}function ip(t,e,n,r){if(r<e)throw tu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function B_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dr||(Dr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Co(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Dr.NO_ERROR,c=i.getStatus();if(!a||nC(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Dr.ABORT;r(!1,new Co(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Co(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());eC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=mh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?j_():qS();o(c)}else{const c=BS();o(c)}};this.canceled_?n(!1,new Co(!1,null,!0)):this.backoffId_=XS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Co{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cC(t,e,n,r,s,i,o=!0){const a=B_(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return oC(l,e),sC(l,n),iC(l,i),aC(l,r),new rC(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function uC(...t){const e=lC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(yh())return new Blob(t);throw new xe(Ne.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){if(typeof atob>"u")throw QS("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ol{constructor(e,n){this.data=e,this.contentType=n||null}}function dC(t,e){switch(t){case Yt.RAW:return new ol(q_(e));case Yt.BASE64:case Yt.BASE64URL:return new ol(H_(t,e));case Yt.DATA_URL:return new ol(gC(e),mC(e))}throw mh()}function q_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pC(t){let e;try{e=decodeURIComponent(t)}catch{throw di(Yt.DATA_URL,"Malformed data URL.")}return q_(e)}function H_(t,e){switch(t){case Yt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw di(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Yt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw di(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=fC(e)}catch(s){throw s.message.includes("polyfill")?s:di(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class W_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw di(Yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=_C(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function gC(t){const e=new W_(t);return e.base64?H_(Yt.BASE64,e.rest):pC(e.rest)}function mC(t){return new W_(t).contentType}function _C(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){let r=0,s="";sp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(sp(this.data_)){const r=this.data_,s=hC(r,e,n);return s===null?null:new Hn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Hn(r,!0)}}static getBlob(...e){if(yh()){const n=e.map(r=>r instanceof Hn?r.data_:r);return new Hn(uC.apply(null,n))}else{const n=e.map(o=>_h(o)?dC(Yt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Hn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){let e;try{e=JSON.parse(t)}catch{return null}return tC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function z_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t,e){return e}class ht{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||EC}}let ko=null;function wC(t){return!_h(t)||t.length<2?t:z_(t)}function G_(){if(ko)return ko;const t=[];t.push(new ht("bucket")),t.push(new ht("generation")),t.push(new ht("metageneration")),t.push(new ht("name","fullPath",!0));function e(i,o){return wC(o)}const n=new ht("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ht("size");return s.xform=r,t.push(s),t.push(new ht("timeCreated")),t.push(new ht("updated")),t.push(new ht("md5Hash",null,!0)),t.push(new ht("cacheControl",null,!0)),t.push(new ht("contentDisposition",null,!0)),t.push(new ht("contentEncoding",null,!0)),t.push(new ht("contentLanguage",null,!0)),t.push(new ht("contentType",null,!0)),t.push(new ht("metadata","customMetadata",!0)),ko=t,ko}function IC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new It(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function TC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return IC(r,t),r}function Q_(t,e,n){const r=K_(e);return r===null?null:TC(t,r,n)}function AC(t,e,n,r){const s=K_(e);if(s===null||!_h(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=vh(f,n,r),_=B_({alt:"media",token:l});return p+_})[0]}function RC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Y_{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){if(!t)throw mh()}function bC(t,e){function n(r,s){const i=Q_(t,s,e);return J_(i!==null),i}return n}function PC(t,e){function n(r,s){const i=Q_(t,s,e);return J_(i!==null),AC(i,s,t.host,t._protocol)}return n}function X_(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=$S():s=FS():n.getStatus()===402?s=US(t.bucket):n.getStatus()===403?s=jS(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function SC(t){const e=X_(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=LS(t.path)),i.serverResponse=s.serverResponse,i}return n}function CC(t,e,n){const r=e.fullServerUrl(),s=vh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Y_(s,i,PC(t,n),o);return a.errorHandler=SC(e),a}function kC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function OC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=kC(null,e)),r}function NC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let K=0;K<2;K++)k=k+Math.random().toString().slice(2);return k}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=OC(e,r,s),u=RC(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=Hn.getBlob(h,r,f);if(p===null)throw zS();const _={name:l.fullPath},T=vh(i,t.host,t._protocol),E="POST",R=t.maxUploadRetryTime,N=new Y_(T,E,bC(t,n),R);return N.urlParams=_,N.headers=o,N.body=p.uploadData(),N.errorHandler=X_(e),N}class DC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Dr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xC extends DC{initXhr(){this.xhr_.responseType="text"}}function Z_(){return new xC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this._service=e,n instanceof It?this._location=n:this._location=It.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Br(e,n)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return z_(this._location.path)}get storage(){return this._service}get parent(){const e=yC(this._location.path);if(e===null)return null;const n=new It(this._location.bucket,e);return new Br(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YS(e)}}function VC(t,e,n){t._throwIfRoot("uploadBytes");const r=NC(t.storage,t._location,G_(),new Hn(e,!0),n);return t.storage.makeRequestWithTokens(r,Z_).then(s=>({metadata:s,ref:t}))}function MC(t){t._throwIfRoot("getDownloadURL");const e=CC(t.storage,t._location,G_());return t.storage.makeRequestWithTokens(e,Z_).then(n=>{if(n===null)throw GS();return n})}function LC(t,e){const n=vC(t._location.path,e),r=new It(t._location.bucket,n);return new Br(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){return/^[A-Za-z]+:\/\//.test(t)}function FC(t,e){return new Br(t,e)}function ey(t,e){if(t instanceof Eh){const n=t;if(n._bucket==null)throw KS();const r=new Br(n,n._bucket);return e!=null?ey(r,e):r}else return e!==void 0?LC(t,e):t}function $C(t,e){if(e&&UC(e)){if(t instanceof Eh)return FC(t,e);throw tu("To use ref(service, url), the first argument must be a Storage instance.")}else return ey(t,e)}function op(t,e){const n=e==null?void 0:e[$_];return n==null?null:It.makeFromBucketSpec(n,t)}function jC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Zm(s,t.app.options.projectId))}class Eh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=F_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VS,this._maxUploadRetryTime=MS,this._requests=new Set,s!=null?this._bucket=It.makeFromBucketSpec(s,this._host):this._bucket=op(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=op(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ip("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ip("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Br(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new JS(j_());{const o=cC(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ap="@firebase/storage",cp="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="storage";function BC(t,e,n){return t=qe(t),VC(t,e,n)}function qC(t){return t=qe(t),MC(t)}function HC(t,e){return t=qe(t),$C(t,e)}function WC(t=ih(),e){t=qe(t);const r=ic(t,ty).getImmediate({identifier:e}),s=Ym("storage");return s&&KC(r,...s),r}function KC(t,e,n,r={}){jC(t,e,n,r)}function zC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Eh(n,r,s,e,Gr)}function GC(){Fr(new rr(ty,zC,"PUBLIC").setMultipleInstances(!0)),tn(ap,cp,""),tn(ap,cp,"esm2017")}GC();const QC=WC(lc),YC=async(t,e)=>{const n=HC(QC,`profilePictures/${e}`),r=await BC(n,t);return await qC(r.ref)};var JC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,wh=wh||{},te=JC||self;function uc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ro(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XC(t){return Object.prototype.hasOwnProperty.call(t,al)&&t[al]||(t[al]=++ZC)}var al="closure_uid_"+(1e9*Math.random()>>>0),ZC=0;function ek(t,e,n){return t.call.apply(t.bind,arguments)}function tk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=ek:st=tk,st.apply(null,arguments)}function Oo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ur(){this.s=this.s,this.o=this.o}var nk=0;ur.prototype.s=!1;ur.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),nk!=0)&&XC(this)};ur.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ny=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ih(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function lp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(uc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var rk=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function Di(t){return/^[\s\xa0]*$/.test(t)}function hc(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return hc().indexOf(t)!=-1}function Th(t){return Th[" "](t),t}Th[" "]=function(){};function sk(t,e){var n=Yk;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ik=Qt("Opera"),Is=Qt("Trident")||Qt("MSIE"),ry=Qt("Edge"),nu=ry||Is,sy=Qt("Gecko")&&!(hc().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),ok=hc().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function iy(){var t=te.document;return t?t.documentMode:void 0}var ru;e:{var cl="",ll=function(){var t=hc();if(sy)return/rv:([^\);]+)(\)|;)/.exec(t);if(ry)return/Edge\/([\d\.]+)/.exec(t);if(Is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ok)return/WebKit\/(\S+)/.exec(t);if(ik)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ll&&(cl=ll?ll[1]:""),Is){var ul=iy();if(ul!=null&&ul>parseFloat(cl)){ru=String(ul);break e}}ru=cl}var su;if(te.document&&Is){var up=iy();su=up||parseInt(ru,10)||void 0}else su=void 0;var ak=su;function xi(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sy){e:{try{Th(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ck[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xi.$.h.call(this)}}ze(xi,it);var ck={2:"touch",3:"pen",4:"mouse"};xi.prototype.h=function(){xi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var so="closure_listenable_"+(1e6*Math.random()|0),lk=0;function uk(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++lk,this.fa=this.ia=!1}function fc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ah(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function oy(t){const e={};for(const n in t)e[n]=t[n];return e}const hp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ay(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<hp.length;i++)n=hp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function dc(t){this.src=t,this.g={},this.h=0}dc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ou(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new uk(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function iu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ny(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(fc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ou(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Rh="closure_lm_"+(1e6*Math.random()|0),hl={};function cy(t,e,n,r,s){if(r&&r.once)return uy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)cy(t,e[i],n,r,s);return null}return n=Sh(n),t&&t[so]?t.O(e,n,ro(r)?!!r.capture:!!r,s):ly(t,e,n,!1,r,s)}function ly(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ro(s)?!!s.capture:!!s,a=Ph(t);if(a||(t[Rh]=a=new dc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=fk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)rk||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(fy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fk(){function t(n){return e.call(t.src,t.listener,n)}const e=dk;return t}function uy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)uy(t,e[i],n,r,s);return null}return n=Sh(n),t&&t[so]?t.P(e,n,ro(r)?!!r.capture:!!r,s):ly(t,e,n,!0,r,s)}function hy(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)hy(t,e[i],n,r,s);else r=ro(r)?!!r.capture:!!r,n=Sh(n),t&&t[so]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ou(i,n,r,s),-1<n&&(fc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ph(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ou(e,n,r,s)),(n=-1<t?e[t]:null)&&bh(n))}function bh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[so])iu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ph(e))?(iu(n,t),n.h==0&&(n.src=null,e[Rh]=null)):fc(t)}}}function fy(t){return t in hl?hl[t]:hl[t]="on"+t}function dk(t,e){if(t.fa)t=!0;else{e=new xi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&bh(t),t=n.call(r,e)}return t}function Ph(t){return t=t[Rh],t instanceof dc?t:null}var fl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sh(t){return typeof t=="function"?t:(t[fl]||(t[fl]=function(e){return t.handleEvent(e)}),t[fl])}function Ke(){ur.call(this),this.i=new dc(this),this.S=this,this.J=null}ze(Ke,ur);Ke.prototype[so]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){hy(this,t,e,n,r)};function Ye(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var s=e;e=new it(r,t),ay(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=No(o,r,!0,e)&&s}if(o=e.g=t,s=No(o,r,!0,e)&&s,s=No(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=No(o,r,!1,e)&&s}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fc(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function No(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&iu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ch=te.JSON.stringify;class pk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function gk(){var t=kh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mk{constructor(){this.h=this.g=null}add(e,n){const r=dy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dy=new pk(()=>new _k,t=>t.reset());class _k{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function vk(t){te.setTimeout(()=>{throw t},0)}let Vi,Mi=!1,kh=new mk,py=()=>{const t=te.Promise.resolve(void 0);Vi=()=>{t.then(Ek)}};var Ek=()=>{for(var t;t=gk();){try{t.h.call(t.g)}catch(n){vk(n)}var e=dy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mi=!1};function pc(t,e){Ke.call(this),this.h=t||1,this.g=e||te,this.j=st(this.qb,this),this.l=Date.now()}ze(pc,Ke);x=pc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ye(this,"tick"),this.ga&&(Oh(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Oh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){pc.$.N.call(this),Oh(this),delete this.g};function Nh(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function gy(t){t.g=Nh(()=>{t.g=null,t.i&&(t.i=!1,gy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wk extends ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gy(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(t){ur.call(this),this.h=t,this.g={}}ze(Li,ur);var fp=[];function my(t,e,n,r){Array.isArray(n)||(n&&(fp[0]=n.toString()),n=fp);for(var s=0;s<n.length;s++){var i=cy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function _y(t){Ah(t.g,function(e,n){this.g.hasOwnProperty(n)&&bh(e)},t),t.g={}}Li.prototype.N=function(){Li.$.N.call(this),_y(this)};Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gc(){this.g=!0}gc.prototype.Ea=function(){this.g=!1};function Ik(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Tk(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function us(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Rk(t,n)+(r?" "+r:"")})}function Ak(t,e){t.info(function(){return"TIMEOUT: "+e})}gc.prototype.info=function(){};function Rk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ch(n)}catch{return e}}var Yr={},dp=null;function mc(){return dp=dp||new Ke}Yr.Ta="serverreachability";function yy(t){it.call(this,Yr.Ta,t)}ze(yy,it);function Ui(t){const e=mc();Ye(e,new yy(e))}Yr.STAT_EVENT="statevent";function vy(t,e){it.call(this,Yr.STAT_EVENT,t),this.stat=e}ze(vy,it);function pt(t){const e=mc();Ye(e,new vy(e,t))}Yr.Ua="timingevent";function Ey(t,e){it.call(this,Yr.Ua,t),this.size=e}ze(Ey,it);function io(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var _c={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},wy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Dh(){}Dh.prototype.h=null;function pp(t){return t.h||(t.h=t.i())}function Iy(){}var oo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xh(){it.call(this,"d")}ze(xh,it);function Vh(){it.call(this,"c")}ze(Vh,it);var au;function yc(){}ze(yc,Dh);yc.prototype.g=function(){return new XMLHttpRequest};yc.prototype.i=function(){return{}};au=new yc;function ao(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Li(this),this.P=bk,t=nu?125:void 0,this.V=new pc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ty}function Ty(){this.i=null,this.g="",this.h=!1}var bk=45e3,cu={},Pa={};x=ao.prototype;x.setTimeout=function(t){this.P=t};function lu(t,e,n){t.L=1,t.v=Ec(Rn(e)),t.s=n,t.S=!0,Ay(t,null)}function Ay(t,e){t.G=Date.now(),co(t),t.A=Rn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Ny(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ty,t.g=Zy(t.l,n?e:null,!t.s),0<t.O&&(t.M=new wk(st(t.Pa,t,t.g),t.O)),my(t.U,t.g,"readystatechange",t.nb),e=t.I?oy(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ui(),Ik(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&Jt(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||nu||this.g&&(this.h.h||this.g.ja()||yp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ui(3):Ui(2)),vc(this);var n=this.g.da();this.ca=n;t:if(Ry(this)){var r=yp(this.g);t="";var s=r.length,i=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),pi(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Tk(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Di(a)){var l=a;break t}}l=null}if(n=l)us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uu(this,n);else{this.i=!1,this.o=3,pt(12),Ir(this),pi(this);break e}}this.S?(by(this,u,o),nu&&this.i&&u==3&&(my(this.U,this.V,"tick",this.mb),this.V.start())):(us(this.j,this.m,o,null),uu(this,o)),u==4&&Ir(this),this.i&&!this.J&&(u==4?Qy(this.l,this):(this.i=!1,co(this)))}else zk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Ir(this),pi(this)}}}catch{}finally{}};function Ry(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function by(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Pk(t,n),s==Pa){e==4&&(t.o=4,pt(14),r=!1),us(t.j,t.m,null,"[Incomplete Response]");break}else if(s==cu){t.o=4,pt(15),us(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else us(t.j,t.m,s,null),uu(t,s);Ry(t)&&s!=Pa&&s!=cu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),jh(e),e.M=!0,pt(11))):(us(t.j,t.m,n,"[Invalid Chunked Response]"),Ir(t),pi(t))}x.mb=function(){if(this.g){var t=Jt(this.g),e=this.g.ja();this.C<e.length&&(vc(this),by(this,t,e),this.i&&t!=4&&co(this))}};function Pk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Pa:(n=Number(e.substring(n,r)),isNaN(n)?cu:(r+=1,r+n>e.length?Pa:(e=e.slice(r,r+n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,Ir(this)};function co(t){t.Y=Date.now()+t.P,Py(t,t.P)}function Py(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=io(st(t.lb,t),e)}function vc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ak(this.j,this.A),this.L!=2&&(Ui(),pt(17)),Ir(this),this.o=2,pi(this)):Py(this,this.Y-t)};function pi(t){t.l.H==0||t.J||Qy(t.l,t)}function Ir(t){vc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Oh(t.V),_y(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function uu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hu(n.i,t))){if(!t.K&&hu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ka(n),Ac(n);else break e;$h(n),pt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=io(st(n.ib,n),6e3));if(1>=Vy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Tr(n,11)}else if((t.K||n.g==t)&&ka(n),!Di(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Mh(i,i.h),i.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Ae(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Xy(r,r.J?r.pa:null,r.Y),o.K){My(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(vc(a),co(a)),r.g=o}else zy(r);0<n.j.length&&Rc(n)}else l[0]!="stop"&&l[0]!="close"||Tr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Tr(n,7):Fh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ui(4)}catch{}}function Sk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(uc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Ck(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(uc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Sy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ck(t),r=Sk(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Cy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function xr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof xr){this.h=t.h,Sa(this,t.j),this.s=t.s,this.g=t.g,Ca(this,t.m),this.l=t.l;var e=t.i,n=new Fi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gp(this,n),this.o=t.o}else t&&(e=String(t).match(Cy))?(this.h=!1,Sa(this,e[1]||"",!0),this.s=ni(e[2]||""),this.g=ni(e[3]||"",!0),Ca(this,e[4]),this.l=ni(e[5]||"",!0),gp(this,e[6]||"",!0),this.o=ni(e[7]||"")):(this.h=!1,this.i=new Fi(null,this.h))}xr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ri(e,mp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ri(e,mp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ri(n,n.charAt(0)=="/"?Dk:Nk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ri(n,Vk)),t.join("")};function Rn(t){return new xr(t)}function Sa(t,e,n){t.j=n?ni(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gp(t,e,n){e instanceof Fi?(t.i=e,Mk(t.i,t.h)):(n||(e=ri(e,xk)),t.i=new Fi(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Ec(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ni(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ri(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ok),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ok(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mp=/[#\/\?@]/g,Nk=/[#\?:]/g,Dk=/[#\?]/g,xk=/[#\?@]/g,Vk=/#/g;function Fi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hr(t){t.g||(t.g=new Map,t.h=0,t.i&&kk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Fi.prototype;x.add=function(t,e){hr(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ky(t,e){hr(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Oy(t,e){return hr(t),e=Ds(t,e),t.g.has(e)}x.forEach=function(t,e){hr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};x.ta=function(){hr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};x.Z=function(t){hr(this);let e=[];if(typeof t=="string")Oy(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return hr(this),this.i=null,t=Ds(this,t),Oy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Ny(t,e,n){ky(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),Ih(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Mk(t,e){e&&!t.j&&(hr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ky(this,r),Ny(this,s,n))},t)),t.j=e}var Lk=class{constructor(t,e){this.g=t,this.map=e}};function Dy(t){this.l=t||Uk,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Uk=10;function xy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vy(t){return t.h?1:t.g?t.g.size:0}function hu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mh(t,e){t.g?t.g.add(e):t.h=e}function My(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Dy.prototype.cancel=function(){if(this.i=Ly(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ly(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ih(t.i)}var Fk=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function $k(){this.g=new Fk}function jk(t,e,n){const r=n||"";try{Sy(t,function(s,i){let o=s;ro(s)&&(o=Ch(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Bk(t,e){const n=new gc;if(te.Image){const r=new Image;r.onload=Oo(Do,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Oo(Do,n,r,"TestLoadImage: error",!1,e),r.onabort=Oo(Do,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Oo(Do,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Do(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function wc(t){this.l=t.fc||null,this.j=t.ob||!1}ze(wc,Dh);wc.prototype.g=function(){return new Ic(this.l,this.j)};wc.prototype.i=function(t){return function(){return t}}({});function Ic(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Lh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Ic,Ke);var Lh=0;x=Ic.prototype;x.open=function(t,e){if(this.readyState!=Lh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$i(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=Lh};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Uy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Uy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?lo(this):$i(this),this.readyState==3&&Uy(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,lo(this))};x.Ya=function(t){this.g&&(this.response=t,lo(this))};x.ka=function(){this.g&&lo(this)};function lo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$i(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qk=te.JSON.parse;function De(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Fy,this.L=this.M=!1}ze(De,Ke);var Fy="",Hk=/^https?$/i,Wk=["POST","PUT"];x=De.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():au.g(),this.C=this.u?pp(this.u):pp(au),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){_p(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=te.FormData&&t instanceof te.FormData,!(0<=ny(Wk,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{By(this),0<this.B&&((this.L=Kk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=Nh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){_p(this,i)}};function Kk(t){return Is&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof wh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function _p(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$y(t),Tc(t)}function $y(t){t.F||(t.F=!0,Ye(t,"complete"),Ye(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),Tc(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tc(this,!0)),De.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?jy(this):this.kb())};x.kb=function(){jy(this)};function jy(t){if(t.h&&typeof wh<"u"&&(!t.C[1]||Jt(t)!=4||t.da()!=2)){if(t.v&&Jt(t)==4)Nh(t.La,0,t);else if(Ye(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Cy)[1]||null;!s&&te.self&&te.self.location&&(s=te.self.location.protocol.slice(0,-1)),r=!Hk.test(s?s.toLowerCase():"")}n=r}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var i=2<Jt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",$y(t)}}finally{Tc(t)}}}}function Tc(t,e){if(t.g){By(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=r}catch{}}}function By(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function Jt(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qk(e)}};function yp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Fy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function zk(t){const e={};t=(t.g&&2<=Jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Di(t[r]))continue;var n=yk(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}hk(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qy(t){let e="";return Ah(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Uh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Gs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hy(t){this.Ga=0,this.j=[],this.l=new gc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Gs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Gs("baseRetryDelayMs",5e3,t),this.hb=Gs("retryDelaySeedMs",1e4,t),this.eb=Gs("forwardChannelMaxRetries",2,t),this.xa=Gs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Dy(t&&t.concurrentRequestLimit),this.Ja=new $k,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=Hy.prototype;x.ra=8;x.H=1;function Fh(t){if(Wy(t),t.H==3){var e=t.W++,n=Rn(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),uo(t,n),e=new ao(t,t.l,e),e.L=2,e.v=Ec(Rn(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Zy(e.l,null),e.g.ha(e.v)),e.G=Date.now(),co(e)}Jy(t)}function Ac(t){t.g&&(jh(t),t.g.cancel(),t.g=null)}function Wy(t){Ac(t),t.u&&(te.clearTimeout(t.u),t.u=null),ka(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Rc(t){if(!xy(t.i)&&!t.m){t.m=!0;var e=t.Na;Vi||py(),Mi||(Vi(),Mi=!0),kh.add(e,t),t.C=0}}function Gk(t,e){return Vy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=io(st(t.Na,t,e),Yy(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ao(this,this.l,t);let i=this.s;if(this.U&&(i?(i=oy(i),ay(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ky(this,s,e),n=Rn(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),uo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(qy(i)))+"&"+e:this.o&&Uh(n,this.o,i)),Mh(this.i,s),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),s.aa=!0,lu(s,n,null)):lu(s,n,e),this.H=2}}else this.H==3&&(t?vp(this,t):this.j.length==0||xy(this.i)||vp(this))};function vp(t,e){var n;e?n=e.m:n=t.W++;const r=Rn(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),uo(t,r),t.o&&t.s&&Uh(r,t.o,t.s),n=new ao(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ky(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Mh(t.i,n),lu(n,r,e)}function uo(t,e){t.na&&Ah(t.na,function(n,r){Ae(e,r,n)}),t.h&&Sy({},function(n,r){Ae(e,r,n)})}function Ky(t,e,n){n=Math.min(t.j.length,n);var r=t.h?st(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{jk(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function zy(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Vi||py(),Mi||(Vi(),Mi=!0),kh.add(e,t),t.A=0}}function $h(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=io(st(t.Ma,t),Yy(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,Gy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=io(st(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),Ac(this),Gy(this))};function jh(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function Gy(t){t.g=new ao(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Rn(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),uo(t,e),t.o&&t.s&&Uh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ec(Rn(e)),n.s=null,n.S=!0,Ay(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Ac(this),$h(this),pt(19))};function ka(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function Qy(t,e){var n=null;if(t.g==e){ka(t),jh(t),t.g=null;var r=2}else if(hu(t.i,e))n=e.F,My(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=mc(),Ye(r,new Ey(r,n)),Rc(t)}else zy(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Gk(t,e)||r==2&&$h(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Tr(t,5);break;case 4:Tr(t,10);break;case 3:Tr(t,6);break;default:Tr(t,2)}}}function Yy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Tr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=st(t.pb,t);n||(n=new xr("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Sa(n,"https"),Ec(n)),Bk(n.toString(),r)}else pt(2);t.H=0,t.h&&t.h.za(e),Jy(t),Wy(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function Jy(t){if(t.H=0,t.ma=[],t.h){const e=Ly(t.i);(e.length!=0||t.j.length!=0)&&(lp(t.ma,e),lp(t.ma,t.j),t.i.i.length=0,Ih(t.j),t.j.length=0),t.h.ya()}}function Xy(t,e,n){var r=n instanceof xr?Rn(n):new xr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ca(r,r.m);else{var s=te.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new xr(null);r&&Sa(i,r),e&&(i.g=e),s&&Ca(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),uo(t,r),r}function Zy(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new De(new wc({ob:!0})):new De(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function ev(){}x=ev.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Oa(){if(Is&&!(10<=Number(ak)))throw Error("Environmental error: no available transport.")}Oa.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){Ke.call(this),this.g=new Hy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Di(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Di(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xs(this)}ze(Rt,Ke);Rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Xy(t,null,t.Y),Rc(t)};Rt.prototype.close=function(){Fh(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ch(t),t=n);e.j.push(new Lk(e.fb++,t)),e.H==3&&Rc(e)};Rt.prototype.N=function(){this.g.h=null,delete this.j,Fh(this.g),delete this.g,Rt.$.N.call(this)};function tv(t){xh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(tv,xh);function nv(){Vh.call(this),this.status=1}ze(nv,Vh);function xs(t){this.g=t}ze(xs,ev);xs.prototype.Ba=function(){Ye(this.g,"a")};xs.prototype.Aa=function(t){Ye(this.g,new tv(t))};xs.prototype.za=function(t){Ye(this.g,new nv)};xs.prototype.ya=function(){Ye(this.g,"b")};function Qk(){this.blockSize=-1}function $t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze($t,Qk);$t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function dl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}$t.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)dl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){dl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){dl(this,r),s=0;break}}this.h=s,this.i+=e};$t.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ve(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Yk={};function Bh(t){return-128<=t&&128>t?sk(t,function(e){return new ve([e|0],0>e?-1:0)}):new ve([t|0],0>t?-1:0)}function Xt(t){if(isNaN(t)||!isFinite(t))return gs;if(0>t)return Qe(Xt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=fu;return new ve(e,0)}function rv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(rv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xt(Math.pow(e,8)),r=gs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Xt(Math.pow(e,i)),r=r.R(i).add(Xt(o))):(r=r.R(n),r=r.add(Xt(o)))}return r}var fu=4294967296,gs=Bh(0),du=Bh(1),Ep=Bh(16777216);x=ve.prototype;x.ea=function(){if(Ct(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:fu+r)*e,e*=fu}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(En(this))return"0";if(Ct(this))return"-"+Qe(this).toString(t);for(var e=Xt(Math.pow(t,6)),n=this,r="";;){var s=Da(n,e).g;n=Na(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,En(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function En(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ct(t){return t.h==-1}x.X=function(t){return t=Na(this,t),Ct(t)?-1:En(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ve(n,~t.h).add(du)}x.abs=function(){return Ct(this)?Qe(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ve(n,n[n.length-1]&-2147483648?-1:0)};function Na(t,e){return t.add(Qe(e))}x.R=function(t){if(En(this)||En(t))return gs;if(Ct(this))return Ct(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(Ct(t))return Qe(this.R(Qe(t)));if(0>this.X(Ep)&&0>t.X(Ep))return Xt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,xo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,xo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,xo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,xo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ve(n,0)};function xo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Qs(t,e){this.g=t,this.h=e}function Da(t,e){if(En(e))throw Error("division by zero");if(En(t))return new Qs(gs,gs);if(Ct(t))return e=Da(Qe(t),e),new Qs(Qe(e.g),Qe(e.h));if(Ct(e))return e=Da(t,Qe(e)),new Qs(Qe(e.g),e.h);if(30<t.g.length){if(Ct(t)||Ct(e))throw Error("slowDivide_ only works with positive integers.");for(var n=du,r=e;0>=r.X(t);)n=wp(n),r=wp(r);var s=rs(n,1),i=rs(r,1);for(r=rs(r,2),n=rs(n,2);!En(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=rs(r,1),n=rs(n,1)}return e=Na(t,s.R(e)),new Qs(s,e)}for(s=gs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Xt(n),o=i.R(e);Ct(o)||0<o.X(t);)n-=r,i=Xt(n),o=i.R(e);En(i)&&(i=du),s=s.add(i),t=Na(t,o)}return new Qs(s,t)}x.gb=function(t){return Da(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ve(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ve(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ve(n,this.h^t.h)};function wp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ve(n,t.h)}function rs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ve(s,t.h)}Oa.prototype.createWebChannel=Oa.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;_c.NO_ERROR=0;_c.TIMEOUT=8;_c.HTTP_ERROR=6;wy.COMPLETE="complete";Iy.EventType=oo;oo.OPEN="a";oo.CLOSE="b";oo.ERROR="c";oo.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;De.prototype.listenOnce=De.prototype.P;De.prototype.getLastError=De.prototype.Sa;De.prototype.getLastErrorCode=De.prototype.Ia;De.prototype.getStatus=De.prototype.da;De.prototype.getResponseJson=De.prototype.Wa;De.prototype.getResponseText=De.prototype.ja;De.prototype.send=De.prototype.ha;De.prototype.setWithCredentials=De.prototype.Oa;$t.prototype.digest=$t.prototype.l;$t.prototype.reset=$t.prototype.reset;$t.prototype.update=$t.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=Xt;ve.fromString=rv;var Jk=function(){return new Oa},Xk=function(){return mc()},pl=_c,Zk=wy,eO=Yr,Ip={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Vo=Iy,tO=De,nO=$t,ms=ve;const Tp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new rh("@firebase/firestore");function Ap(){return qr.logLevel}function H(t,...e){if(qr.logLevel<=pe.DEBUG){const n=e.map(qh);qr.debug(`Firestore (${Vs}): ${t}`,...n)}}function bn(t,...e){if(qr.logLevel<=pe.ERROR){const n=e.map(qh);qr.error(`Firestore (${Vs}): ${t}`,...n)}}function Ts(t,...e){if(qr.logLevel<=pe.WARN){const n=e.map(qh);qr.warn(`Firestore (${Vs}): ${t}`,...n)}}function qh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function be(t,e){t||ee()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class sO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iO{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new sv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Ze(e)}}class oO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new oO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new cO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=uO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Be(0,0))}static max(){return new se(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends ji{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const hO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends ji{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return hO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Re.fromString(e))}static fromName(e){return new G(Re.fromString(e).popFirst(5))}static empty(){return new G(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Re(e.slice()))}}function fO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new sr(s,G.empty(),e)}function dO(t){return new sr(t.readTime,t.key,-1)}class sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sr(se.min(),G.empty(),-1)}static max(){return new sr(se.max(),G.empty(),-1)}}function pO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==gO)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function fo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Hh.ae=-1;function bc(t){return t==null}function xa(t){return t===0&&1/t==-1/0}function _O(t){return typeof t=="number"&&Number.isInteger(t)&&!xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ov(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bp(this.data.getIterator())}getIteratorFrom(e){return new bp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class bp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ot(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new av("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const yO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(be(!!t),typeof t=="string"){let e=0;const n=yO.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kh(t){const e=t.mapValue.fields.__previous_value__;return Wh(e)?Kh(e):e}function Bi(t){const e=ir(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class qi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wh(t)?4:EO(t)?9007199254740991:10:ee()}function ln(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bi(t).isEqual(Bi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ir(s.timestampValue),a=ir(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),a=Le(i.doubleValue);return o===a?xa(o)===xa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Rp(o)!==Rp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ln(o[c],a[c])))return!1;return!0}(t,e);default:return ee()}}function Hi(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Le(i.integerValue||i.doubleValue),c=Le(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Pp(t.timestampValue,e.timestampValue);case 4:return Pp(Bi(t),Bi(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Hr(i),c=Hr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ge(a[l],c[l]);if(u!==0)return u}return ge(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ge(Le(i.latitude),Le(o.latitude));return a!==0?a:ge(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Rs(a[l],c[l]);if(u)return u}return ge(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Lo.mapValue&&o===Lo.mapValue)return 0;if(i===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ge(c[h],u[h]);if(f!==0)return f;const p=Rs(a[c[h]],l[u[h]]);if(p!==0)return p}return ge(c.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Pp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=ir(t),r=ir(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function bs(t){return pu(t)}function pu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=pu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pu(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function Sp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gu(t){return!!t&&"integerValue"in t}function zh(t){return!!t&&"arrayValue"in t}function Cp(t){return!!t&&"nullValue"in t}function kp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ea(t){return!!t&&"mapValue"in t}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=gi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ea(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(gi(this.value))}}function cv(t){const e=[];return Ms(t.fields,(n,r)=>{const s=new nt([n]);if(ea(r)){const i=cv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,se.min(),se.min(),se.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,se.min(),se.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,se.min(),se.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.position=e,this.inclusive=n}}function Op(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Np(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n="asc"){this.field=e,this.dir=n}}function wO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{}class Fe extends lv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TO(e,n,r):n==="array-contains"?new bO(e,r):n==="in"?new PO(e,r):n==="not-in"?new SO(e,r):n==="array-contains-any"?new CO(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AO(e,r):new RO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jt extends lv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new jt(e,n)}matches(e){return uv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function uv(t){return t.op==="and"}function hv(t){return IO(t)&&uv(t)}function IO(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function mu(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+bs(t.value);if(hv(t))return t.filters.map(e=>mu(e)).join(",");{const e=t.filters.map(n=>mu(n)).join(",");return`${t.op}(${e})`}}function fv(t,e){return t instanceof Fe?function(r,s){return s instanceof Fe&&r.op===s.op&&r.field.isEqual(s.field)&&ln(r.value,s.value)}(t,e):t instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&fv(o,s.filters[a]),!0):!1}(t,e):void ee()}function dv(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${bs(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(dv).join(" ,")+"}"}(t):"Filter"}class TO extends Fe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class AO extends Fe{constructor(e,n){super(e,"in",n),this.keys=pv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RO extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=pv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class bO extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zh(n)&&Hi(n.arrayValue,this.value)}}class PO extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class SO extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hi(this.value.arrayValue,n)}}class CO extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Dp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new kO(t,e,n,r,s,i,o)}function Gh(t){const e=ie(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bs(r)).join(",")),e.he=n}return e.he}function Qh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Np(t.startAt,e.startAt)&&Np(t.endAt,e.endAt)}function _u(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function OO(t,e,n,r,s,i,o,a){return new Ls(t,e,n,r,s,i,o,a)}function Yh(t){return new Ls(t)}function xp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Jh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function gv(t){return t.collectionGroup!==null}function mi(t){const e=ie(t);if(e.Pe===null){e.Pe=[];const n=Pc(e),r=Jh(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new _s(n)),e.Pe.push(new _s(nt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new _s(nt.keyField(),i))}}}return e.Pe}function Pn(t){const e=ie(t);return e.Ie||(e.Ie=NO(e,mi(t))),e.Ie}function NO(t,e){if(t.limitType==="F")return Dp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new _s(s.field,i)});const n=t.endAt?new Va(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Va(t.startAt.position,t.startAt.inclusive):null;return Dp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yu(t,e){e.getFirstInequalityField(),Pc(t);const n=t.filters.concat([e]);return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vu(t,e,n){return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sc(t,e){return Qh(Pn(t),Pn(e))&&t.limitType===e.limitType}function mv(t){return`${Gh(Pn(t))}|lt:${t.limitType}`}function Eu(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>dv(s)).join(", ")}]`),bc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>bs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>bs(s)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of mi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Op(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,mi(r),s)||r.endAt&&!function(o,a,c){const l=Op(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,mi(r),s))}(t,e)}function DO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _v(t){return(e,n)=>{let r=!1;for(const s of mi(t)){const i=xO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xO(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Rs(c,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ov(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new ke(G.comparator);function Sn(){return VO}const yv=new ke(G.comparator);function si(...t){let e=yv;for(const n of t)e=e.insert(n.key,n);return e}function vv(t){let e=yv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return _i()}function Ev(){return _i()}function _i(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const MO=new ke(G.comparator),LO=new ot(G.comparator);function le(...t){let e=LO;for(const n of t)e=e.add(n);return e}const UO=new ot(ge);function FO(){return UO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xa(e)?"-0":e}}function Iv(t){return{integerValue:""+t}}function $O(t,e){return _O(e)?Iv(e):wv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function jO(t,e,n){return t instanceof Ma?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wh(i)&&(i=Kh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Wi?Av(t,e):t instanceof Ki?Rv(t,e):function(s,i){const o=Tv(s,i),a=Vp(o)+Vp(s.Ee);return gu(o)&&gu(s.Ee)?Iv(a):wv(s.serializer,a)}(t,e)}function BO(t,e,n){return t instanceof Wi?Av(t,e):t instanceof Ki?Rv(t,e):n}function Tv(t,e){return t instanceof La?function(r){return gu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ma extends kc{}class Wi extends kc{constructor(e){super(),this.elements=e}}function Av(t,e){const n=bv(e);for(const r of t.elements)n.some(s=>ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ki extends kc{constructor(e){super(),this.elements=e}}function Rv(t,e){let n=bv(e);for(const r of t.elements)n=n.filter(s=>!ln(s,r));return{arrayValue:{values:n}}}class La extends kc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Vp(t){return Le(t.integerValue||t.doubleValue)}function bv(t){return zh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Wi&&s instanceof Wi||r instanceof Ki&&s instanceof Ki?As(r.elements,s.elements,ln):r instanceof La&&s instanceof La?ln(r.Ee,s.Ee):r instanceof Ma&&s instanceof Ma}(t.transform,e.transform)}class HO{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oc{}function Pv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cv(t.key,sn.none()):new po(t.key,t.data,sn.none());{const n=t.data,r=kt.empty();let s=new ot(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jr(t.key,r,new Lt(s.toArray()),sn.none())}}function WO(t,e,n){t instanceof po?function(s,i,o){const a=s.value.clone(),c=Lp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(s,i,o){if(!ta(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Lp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Sv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function yi(t,e,n,r){return t instanceof po?function(i,o,a,c){if(!ta(i.precondition,o))return a;const l=i.value.clone(),u=Up(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(i,o,a,c){if(!ta(i.precondition,o))return a;const l=Up(i.fieldTransforms,c,o),u=o.data;return u.setAll(Sv(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ta(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function KO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Tv(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function Mp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&As(r,s,(i,o)=>qO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends Oc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jr extends Oc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lp(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,BO(o,a,n[s]))}return r}function Up(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jO(i,o,e))}return r}class Cv extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zO extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ev();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Pv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>Mp(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>Mp(n,r))}}class Xh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return MO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,he;function JO(t){switch(t){default:return ee();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function kv(t){if(t===void 0)return bn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Me.OK:return I.OK;case Me.CANCELLED:return I.CANCELLED;case Me.UNKNOWN:return I.UNKNOWN;case Me.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Me.INTERNAL:return I.INTERNAL;case Me.UNAVAILABLE:return I.UNAVAILABLE;case Me.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Me.NOT_FOUND:return I.NOT_FOUND;case Me.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Me.ABORTED:return I.ABORTED;case Me.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Me.DATA_LOSS:return I.DATA_LOSS;default:return ee()}}(he=Me||(Me={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=new ms([4294967295,4294967295],0);function Fp(t){const e=XO().encode(t),n=new nO;return n.update(e),new Uint8Array(n.digest())}function $p(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ms([n,r],0),new ms([s,i],0)]}class Zh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ii(`Invalid padding: ${n}`);if(r<0)throw new ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ii(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=ms.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(ms.fromNumber(r)));return s.compare(ZO)===1&&(s=new ms([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Fp(e),[r,s]=$p(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Fp(e),[r,s]=$p(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nc(se.min(),s,new ke(ge),Sn(),le())}}class go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new go(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class Ov{constructor(e,n){this.targetId=e,this.ye=n}}class Nv{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jp{constructor(){this.we=0,this.Se=qp(),this.be=lt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=le(),n=le(),r=le();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new go(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=qp()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class eN{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Sn(),this.Ue=Bp(),this.We=new ke(ge)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(_u(i))if(r===0){const o=new G(i.path);this.je(n,o,et.newNoDocument(o,se.min()))}else be(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Hr(r).toUint8Array()}catch(c){if(c instanceof av)return Ts("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Zh(o,s,i)}catch(c){return Ts(c instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&_u(a.target)){const c=new G(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,et.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=le();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Nc(e,n,this.We,this.$e,r);return this.$e=Sn(),this.Ue=Bp(),this.We=new ke(ge),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new jp,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ot(ge),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new jp),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Bp(){return new ke(G.comparator)}function qp(){return new ke(G.comparator)}const tN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rN=(()=>({and:"AND",or:"OR"}))();class sN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wu(t,e){return t.useProto3Json||bc(e)?e:{value:e}}function Ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iN(t,e){return Ua(t,e.toTimestamp())}function on(t){return be(!!t),se.fromTimestamp(function(n){const r=ir(n);return new Be(r.seconds,r.nanos)}(t))}function ef(t,e){return function(r){return new Re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function xv(t){const e=Re.fromString(t);return be(Uv(e)),e}function Iu(t,e){return ef(t.databaseId,e.path)}function gl(t,e){const n=xv(e);if(n.get(1)!==t.databaseId.projectId)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Vv(n))}function Tu(t,e){return ef(t.databaseId,e)}function oN(t){const e=xv(t);return e.length===4?Re.emptyPath():Vv(e)}function Au(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vv(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hp(t,e,n){return{name:Iu(t,e),fields:n.value.mapValue.fields}}function aN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(be(u===void 0||typeof u=="string"),lt.fromBase64String(u||"")):(be(u===void 0||u instanceof Uint8Array),lt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:kv(l.code);return new $(u,l.message||"")}(o);n=new Nv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gl(t,r.document.name),i=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):se.min(),a=new kt({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new na(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gl(t,r.document),i=r.readTime?on(r.readTime):se.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new na([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gl(t,r.document),i=r.removedTargetIds||[];n=new na([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new YO(s,i),a=r.targetId;n=new Ov(a,o)}}return n}function cN(t,e){let n;if(e instanceof po)n={update:Hp(t,e.key,e.value)};else if(e instanceof Cv)n={delete:Iu(t,e.key)};else if(e instanceof Jr)n={update:Hp(t,e.key,e.data),updateMask:_N(e.fieldMask)};else{if(!(e instanceof zO))return ee();n={verify:Iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Wi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof La)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:iN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function lN(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?on(s.updateTime):on(i);return o.isEqual(se.min())&&(o=on(i)),new HO(o,s.transformResults||[])}(n,e))):[]}function uN(t,e){return{documents:[Tu(t,e.path)]}}function hN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Tu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Tu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Lv(jt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:as(h.field),direction:pN(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=wu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fN(t){let e=oN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Mv(h);return f instanceof jt&&hv(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new _s(cs(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,bc(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new Va(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new Va(p,f)}(n.endAt)),OO(e,s,o,i,a,"F",c,l)}function dN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cs(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(n.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cs(n.unaryFilter.field);return Fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cs(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>Mv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function pN(t){return tN[t]}function gN(t){return nN[t]}function mN(t){return rN[t]}function as(t){return{fieldPath:t.canonicalString()}}function cs(t){return nt.fromServerFormat(t.fieldPath)}function Lv(t){return t instanceof Fe?function(n){if(n.op==="=="){if(kp(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(Cp(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kp(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(Cp(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:gN(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(s=>Lv(s));return r.length===1?r[0]:{compositeFilter:{op:mN(n.op),filters:r}}}(t):ee()}function _N(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,s,i=se.min(),o=se.min(),a=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.ht=e}}function vN(t){const e=fN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this._n=new wN}addToCollectionParentIndex(e,n){return this._n.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(sr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class wN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ps(0)}static Bn(){return new Ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&yi(r.mutation,s,Lt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=Ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=si();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Sn();const o=_i(),a=function(){return _i()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Jr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),yi(u.mutation,l,u.mutation.getFieldMask(),Be.now())):o.set(l.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new TN(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_i();let s=new ke((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Lt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||le()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ev();u.forEach(f=>{if(!i.has(f)){const p=Pv(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(Ar());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:vv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=si();return this.indexManager.getCollectionParents(e,s).next(o=>b.forEach(o,a=>{const c=function(u,h){return new Ls(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,et.newInvalidDocument(l)))});let o=si();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&yi(l.mutation,c,Lt.empty(),Be.now()),Cc(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return b.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:vN(s.bundledQuery),readTime:on(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this.overlays=new ke(G.comparator),this.hr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Ar(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new QO(n,r));let i=this.hr.get(n);i===void 0&&(i=le(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Pr=new ot(He.Ir),this.Tr=new ot(He.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new He(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new Re([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new Re([])),r=new He(n,e),s=new He(n,e+1);let i=le();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||ge(e.pr,n.pr)}static Er(e,n){return ge(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ot(He.Ir)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(ge);return n.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),b.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new He(new G(i),0);let a=new ot(ge);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),b.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return b.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new He(n,0),s=this.wr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.Cr=e,this.docs=function(){return new ke(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Sn();const o=n.path,a=new G(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||pO(dO(u),r)<=0||(s.has(u.key)||Cc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}Fr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CN(this)}getSize(e){return b.resolve(this.size)}}class CN extends IN{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.persistence=e,this.Mr=new Us(n=>Gh(n),Qh),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Or=0,this.Nr=new tf,this.targetCount=0,this.Br=Ps.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),b.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.qn(n),b.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Hh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new kN(this),this.indexManager=new EN,this.remoteDocumentCache=function(s){return new SN(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new yN(n),this.$r=new RN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new PN(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new NN(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return b.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class NN extends mO{constructor(e){super(),this.currentSequenceNumber=e}}class nf{constructor(e){this.persistence=e,this.zr=new tf,this.jr=null}static Hr(e){return new nf(e)}get Jr(){if(this.jr)return this.jr;throw ee()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),b.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,r=>{const s=G.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return b.or([()=>b.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Wi(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.zi(e,n))}Wi(e,n){if(xp(n))return b.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=vu(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(e,vu(n,null,"F")):this.Ji(e,l,n,c)}))})))}Gi(e,n,r,s){return xp(n)||s.isEqual(se.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.Hi(n,o,r,s)?this.zi(e,n):(Ap()<=pe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Eu(n)),this.Ji(e,o,n,fO(s,-1)))})}ji(e,n){let r=new ot(_v(e));return n.forEach((s,i)=>{Cc(e,i)&&(r=r.add(i))}),r}Hi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}zi(e,n){return Ap()<=pe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Eu(n)),this.Ui.getDocumentsMatchingQuery(e,n,sr.min())}Ji(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,s){this.persistence=e,this.Yi=n,this.serializer=s,this.Zi=new ke(ge),this.Xi=new Us(i=>Gh(i),Qh),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AN(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function VN(t,e,n,r){return new xN(t,e,n,r)}async function Fv(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=le();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function MN(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let p=b.resolve();return f.forEach(_=>{p=p.next(()=>u.getEntry(c,_)).next(T=>{const E=l.docVersions.get(_);be(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=le();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function $v(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function LN(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});s=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(lt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(T,E,R){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(f,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let c=Sn(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(UN(i,o,e.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(se.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Zi=s,i))}function UN(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Sn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:s}})}function FN(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $N(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Zi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Ru(t,e,n){const r=ie(t),s=r.Zi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(s.target)}function Wp(t,e,n){const r=ie(t);let s=se.min(),i=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=ie(c),f=h.Xi.get(u);return f!==void 0?b.resolve(h.Zi.get(f)):h.Qr.getTargetData(l,u)}(r,o,Pn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:le())).next(a=>(jN(r,DO(e),a),{documents:a,_s:i})))}function jN(t,e,n){let r=t.es.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.es.set(e,r)}class Kp{constructor(){this.activeTargetIds=FO()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BN{constructor(){this.Ys=new Kp,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new Kp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{Xs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=null;function ml(){return Uo===null?Uo=function(){return 268435456+Math.round(2147483648*Math.random())}():Uo++,"0x"+Uo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class KN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${s}/databases/${i}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get mo(){return!1}fo(n,r,s,i,o){const a=ml(),c=this.po(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,i,o),this.wo(n,c,l,s).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ts("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}So(n,r,s,i,o,a){return this.fo(n,r,s,i,o)}yo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}po(n,r){const s=HN[n];return`${this.Ao}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,s){const i=ml();return new Promise((o,a)=>{const c=new tO;c.setWithCredentials(!0),c.listenOnce(Zk.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pl.NO_ERROR:const u=c.getResponseJson();H(Je,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case pl.TIMEOUT:H(Je,`RPC '${e}' ${i} timed out`),a(new $(I.DEADLINE_EXCEEDED,"Request time out"));break;case pl.HTTP_ERROR:const h=c.getStatus();if(H(Je,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const _=function(E){const R=E.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(R)>=0?R:I.UNKNOWN}(p.status);a(new $(_,p.message))}else a(new $(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(I.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(Je,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);H(Je,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}bo(e,n,r){const s=ml(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jk(),a=Xk(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");H(Je,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const _=new WN({_o:E=>{p?H(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(f||(H(Je,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),H(Je,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},ao:()=>h.close()}),T=(E,R,N)=>{E.listen(R,k=>{try{N(k)}catch(K){setTimeout(()=>{throw K},0)}})};return T(h,Vo.EventType.OPEN,()=>{p||H(Je,`RPC '${e}' stream ${s} transport opened.`)}),T(h,Vo.EventType.CLOSE,()=>{p||(p=!0,H(Je,`RPC '${e}' stream ${s} transport closed`),_.To())}),T(h,Vo.EventType.ERROR,E=>{p||(p=!0,Ts(Je,`RPC '${e}' stream ${s} transport errored:`,E),_.To(new $(I.UNAVAILABLE,"The operation could not be completed")))}),T(h,Vo.EventType.MESSAGE,E=>{var R;if(!p){const N=E.data[0];be(!!N);const k=N,K=k.error||((R=k[0])===null||R===void 0?void 0:R.error);if(K){H(Je,`RPC '${e}' stream ${s} received error:`,K);const U=K.status;let de=function(ye){const F=Me[ye];if(F!==void 0)return kv(F)}(U),B=K.message;de===void 0&&(de=I.INTERNAL,B="Unknown error status: "+U+" with message "+K.message),p=!0,_.To(new $(de,B)),h.close()}else H(Je,`RPC '${e}' stream ${s} received:`,N),_.Eo(N)}}),T(a,eO.STAT_EVENT,E=>{E.stat===Ip.PROXY?H(Je,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===Ip.NOPROXY&&H(Je,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Io()},0),_}}function _l(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){return new sN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=s,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.ko=r,this.qo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new jv(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qo===n&&this.n_(r,s)},r=>{e(()=>{const s=new $(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(s)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(s=>{r(()=>this.r_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zN extends Bv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=aN(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?on(o.readTime):se.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Au(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=_u(c)?{documents:uN(i,c)}:{query:hN(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Dv(i,o.resumeToken);const l=wu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=Ua(i,o.snapshotVersion.toTimestamp());const l=wu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=dN(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Au(this.serializer),n.removeTarget=e,this.Yo(n)}}class GN extends Bv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=lN(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.l_(r,n)}return be(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Au(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cN(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.I_=!1}T_(){if(this.I_)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.fo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(I.UNKNOWN,s.toString())})}So(e,n,r,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(I.UNKNOWN,i.toString())})}terminate(){this.I_=!0}}class YN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(bn(n),this.R_=!1):H("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Xr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ie(c);l.S_.add(4),await mo(l),l.v_.set("Unknown"),l.S_.delete(4),await xc(l)}(this))})}),this.v_=new YN(r,s)}}async function xc(t){if(Xr(t))for(const e of t.b_)await e(!0)}async function mo(t){for(const e of t.b_)await e(!1)}function qv(t,e){const n=ie(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),af(n)?of(n):Fs(n).Go()&&sf(n,e))}function Hv(t,e){const n=ie(t),r=Fs(n);n.w_.delete(e),r.Go()&&Wv(n,e),n.w_.size===0&&(r.Go()?r.Ho():Xr(n)&&n.v_.set("Unknown"))}function sf(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fs(t).o_(e)}function Wv(t,e){t.C_.Le(e),Fs(t).__(e)}function of(t){t.C_=new eN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Fs(t).start(),t.v_.V_()}function af(t){return Xr(t)&&!Fs(t).Wo()&&t.w_.size>0}function Xr(t){return ie(t).S_.size===0}function Kv(t){t.C_=void 0}async function XN(t){t.w_.forEach((e,n)=>{sf(t,e)})}async function ZN(t,e){Kv(t),af(t)?(t.v_.g_(e),of(t)):t.v_.set("Unknown")}async function eD(t,e,n){if(t.v_.set("Online"),e instanceof Nv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.w_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.w_.delete(a),s.C_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fa(t,r)}else if(e instanceof na?t.C_.Ge(e):e instanceof Ov?t.C_.Xe(e):t.C_.He(e),!n.isEqual(se.min()))try{const r=await $v(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.w_.get(l);u&&i.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.w_.get(c);if(!u)return;i.w_.set(c,u.withResumeToken(lt.EMPTY_BYTE_STRING,u.snapshotVersion)),Wv(i,c);const h=new Kn(u.target,c,l,u.sequenceNumber);sf(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Fa(t,r)}}async function Fa(t,e,n){if(!fo(e))throw e;t.S_.add(1),await mo(t),t.v_.set("Offline"),n||(n=()=>$v(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await xc(t)})}function zv(t,e){return e().catch(n=>Fa(t,n,e))}async function Vc(t){const e=ie(t),n=or(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;tD(e);)try{const s=await FN(e.localStore,r);if(s===null){e.y_.length===0&&n.Ho();break}r=s.batchId,nD(e,s)}catch(s){await Fa(e,s)}Gv(e)&&Qv(e)}function tD(t){return Xr(t)&&t.y_.length<10}function nD(t,e){t.y_.push(e);const n=or(t);n.Go()&&n.u_&&n.c_(e.mutations)}function Gv(t){return Xr(t)&&!or(t).Wo()&&t.y_.length>0}function Qv(t){or(t).start()}async function rD(t){or(t).P_()}async function sD(t){const e=or(t);for(const n of t.y_)e.c_(n.mutations)}async function iD(t,e,n){const r=t.y_.shift(),s=Xh.from(r,e,n);await zv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Vc(t)}async function oD(t,e){e&&or(t).u_&&await async function(r,s){if(function(o){return JO(o)&&o!==I.ABORTED}(s.code)){const i=r.y_.shift();or(r).jo(),await zv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vc(r)}}(t,e),Gv(t)&&Qv(t)}async function Gp(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Xr(n);n.S_.add(3),await mo(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await xc(n)}async function aD(t,e){const n=ie(t);e?(n.S_.delete(2),await xc(n)):e||(n.S_.add(2),await mo(n),n.v_.set("Unknown"))}function Fs(t){return t.F_||(t.F_=function(n,r,s){const i=ie(n);return i.T_(),new zN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:XN.bind(null,t),lo:ZN.bind(null,t),s_:eD.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),af(t)?of(t):t.v_.set("Unknown")):(await t.F_.stop(),Kv(t))})),t.F_}function or(t){return t.M_||(t.M_=function(n,r,s){const i=ie(n);return i.T_(),new GN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:rD.bind(null,t),lo:oD.bind(null,t),h_:sD.bind(null,t),l_:iD.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await Vc(t)):(await t.M_.stop(),t.y_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new cf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lf(t,e){if(bn("AsyncQueue",`${e}: ${t}`),fo(t))return new $(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=si(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.x_=new ke(G.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):ee():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ss(e,n,ys.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(){this.N_=void 0,this.listeners=[]}}class lD{constructor(){this.queries=new Us(e=>mv(e),Sc),this.onlineState="Unknown",this.B_=new Set}}async function Yv(t,e){const n=ie(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new cD),s)try{i.N_=await n.onListen(r)}catch(o){const a=lf(o,`Initialization of query '${Eu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.L_(n.onlineState),i.N_&&e.k_(i.N_)&&uf(n)}async function Jv(t,e){const n=ie(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function uD(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.k_(s)&&(r=!0);o.N_=s}}r&&uf(n)}function hD(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function uf(t){t.B_.forEach(e=>{e.next()})}class Xv{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.key=e}}class eE{constructor(e){this.key=e}}class fD{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=le(),this.mutatedKeys=le(),this.ia=_v(e),this.sa=new ys(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new Qp,s=n?n.sa:this.sa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Cc(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;f&&p?f.data.isEqual(p.data)?_!==T&&(r.track({type:3,doc:p}),E=!0):this.ua(f,p)||(r.track({type:2,doc:p}),E=!0,(c&&this.ia(p,c)>0||l&&this.ia(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),E=!0):f&&!p&&(r.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:i}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const i=e.aa.O_();i.sort((l,u)=>function(f,p){const _=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return _(f)-_(p)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,i.length!==0||c?{snapshot:new Ss(this.query,e.sa,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Qp,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=le(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new eE(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new Zv(r))}),n}Ia(e){this.ta=e._s,this.ra=le();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return Ss.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class dD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pD{constructor(e){this.key=e,this.Ea=!1}}class gD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new Us(a=>mv(a),Sc),this.Ra=new Map,this.Va=new Set,this.ma=new ke(G.comparator),this.fa=new Map,this.ga=new tf,this.pa={},this.ya=new Map,this.wa=Ps.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function mD(t,e){const n=bD(t);let r,s;const i=n.Aa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ta();else{const o=await $N(n.localStore,Pn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await _D(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&qv(n.remoteStore,o)}return s}async function _D(t,e,n,r,s){t.ba=(h,f,p)=>async function(T,E,R,N){let k=E.view._a(R);k.Hi&&(k=await Wp(T.localStore,E.query,!1).then(({documents:de})=>E.view._a(de,k)));const K=N&&N.targetChanges.get(E.targetId),U=E.view.applyChanges(k,T.isPrimaryClient,K);return Jp(T,E.targetId,U.ha),U.snapshot}(t,h,f,p);const i=await Wp(t.localStore,e,!0),o=new fD(e,i._s),a=o._a(i.documents),c=go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Jp(t,n,l.ha);const u=new dD(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),l.snapshot}async function yD(t,e){const n=ie(t),r=n.Aa.get(e),s=n.Ra.get(r.targetId);if(s.length>1)return n.Ra.set(r.targetId,s.filter(i=>!Sc(i,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ru(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Hv(n.remoteStore,r.targetId),bu(n,r.targetId)}).catch(ho)):(bu(n,r.targetId),await Ru(n.localStore,r.targetId,!0))}async function vD(t,e,n){const r=PD(t);try{const s=await function(o,a){const c=ie(o),l=Be.now(),u=a.reduce((p,_)=>p.add(_.key),le());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=Sn(),T=le();return c.ts.getEntries(p,u).next(E=>{_=E,_.forEach((R,N)=>{N.isValidDocument()||(T=T.add(R))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,_)).next(E=>{h=E;const R=[];for(const N of a){const k=KO(N,h.get(N.key).overlayedDocument);k!=null&&R.push(new Jr(N.key,k,cv(k.value.mapValue),sn.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,R,a)}).next(E=>{f=E;const R=E.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(p,E.batchId,R)})}).then(()=>({batchId:f.batchId,changes:vv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new ke(ge)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,s.batchId,n),await _o(r,s.changes),await Vc(r.remoteStore)}catch(s){const i=lf(s,"Failed to persist write");n.reject(i)}}async function tE(t,e){const n=ie(t);try{const r=await LN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fa.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ea=!0:s.modifiedDocuments.size>0?be(o.Ea):s.removedDocuments.size>0&&(be(o.Ea),o.Ea=!1))}),await _o(n,r,e)}catch(r){await ho(r)}}function Yp(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Aa.forEach((i,o)=>{const a=o.view.L_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ie(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.L_(a)&&(l=!0)}),l&&uf(c)}(r.eventManager,e),s.length&&r.da.s_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ED(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fa.get(e),i=s&&s.key;if(i){let o=new ke(G.comparator);o=o.insert(i,et.newNoDocument(i,se.min()));const a=le().add(i),c=new Nc(se.min(),new Map,new ke(ge),o,a);await tE(r,c),r.ma=r.ma.remove(i),r.fa.delete(e),hf(r)}else await Ru(r.localStore,e,!1).then(()=>bu(r,e,n)).catch(ho)}async function wD(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await MN(n.localStore,e);rE(n,r,null),nE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _o(n,s)}catch(s){await ho(s)}}async function ID(t,e,n){const r=ie(t);try{const s=await function(o,a){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(be(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);rE(r,e,n),nE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _o(r,s)}catch(s){await ho(s)}}function nE(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function rE(t,e,n){const r=ie(t);let s=r.pa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pa[r.currentUser.toKey()]=s}}function bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||sE(t,r)})}function sE(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(Hv(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),hf(t))}function Jp(t,e,n){for(const r of n)r instanceof Zv?(t.ga.addReference(r.key,e),TD(t,r)):r instanceof eE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||sE(t,r.key)):ee()}function TD(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Va.add(r),hf(t))}function hf(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new G(Re.fromString(e)),r=t.wa.next();t.fa.set(r,new pD(n)),t.ma=t.ma.insert(n,r),qv(t.remoteStore,new Kn(Pn(Yh(n.path)),r,"TargetPurposeLimboResolution",Hh.ae))}}async function _o(t,e,n){const r=ie(t),s=[],i=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=rf.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.da.s_(s),await async function(c,l){const u=ie(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(l,f=>b.forEach(f.qi,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>b.forEach(f.Qi,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!fo(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=u.Zi.get(f),_=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(_);u.Zi=u.Zi.insert(f,T)}}}(r.localStore,i))}async function AD(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Fv(n.localStore,e);n.currentUser=e,function(i,o){i.ya.forEach(a=>{a.forEach(c=>{c.reject(new $(I.CANCELLED,o))})}),i.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _o(n,r.rs)}}function RD(t,e){const n=ie(t),r=n.fa.get(e);if(r&&r.Ea)return le().add(r.key);{let s=le();const i=n.Ra.get(e);if(!i)return s;for(const o of i){const a=n.Aa.get(o);s=s.unionWith(a.view.oa)}return s}}function bD(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ED.bind(null,e),e.da.s_=uD.bind(null,e.eventManager),e.da.Da=hD.bind(null,e.eventManager),e}function PD(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ID.bind(null,e),e}class Xp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return VN(this.persistence,new DN,e.initialUser,this.serializer)}createPersistence(e){return new ON(nf.Hr,this.serializer)}createSharedClientState(e){return new BN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class SD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AD.bind(null,this.syncEngine),await aD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lD}()}createDatastore(e){const n=Dc(e.databaseInfo.databaseId),r=function(i){return new KN(i)}(e.databaseInfo);return function(i,o,a,c){return new QN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new JN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Yp(this.syncEngine,n,0),function(){return zp.v()?new zp:new qN}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new gD(s,i,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ie(n);H("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await mo(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=iv.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yl(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OD(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Gp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Gp(e.remoteStore,i)),t._onlineComponents=e}function kD(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function OD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await yl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kD(n))throw n;Ts("Error using user provided cache. Falling back to memory cache: "+n),await yl(t,new Xp)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await yl(t,new Xp);return t._offlineComponents}async function oE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Zp(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Zp(t,new SD))),t._onlineComponents}function ND(t){return oE(t).then(e=>e.syncEngine)}async function Pu(t){const e=await oE(t),n=e.eventManager;return n.onListen=mD.bind(null,e.syncEngine),n.onUnlisten=yD.bind(null,e.syncEngine),n}function DD(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new iE({next:f=>{o.enqueueAndForget(()=>Jv(i,h)),f.fromCache&&c.source==="server"?l.reject(new $(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Xv(a,u,{includeMetadataChanges:!0,z_:!0});return Yv(i,h)}(await Pu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t,e,n){if(!n)throw new $(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xD(t,e,n,r){if(e===!0&&r===!0)throw new $(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tg(t){if(!G.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ng(t){if(G.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mc(t);throw new $(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rO;switch(r.type){case"firstParty":return new aO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=eg.get(n);r&&(H("ComponentProvider","Removing Datastore"),eg.delete(n),r.terminate())}(this),Promise.resolve()}}function VD(t,e,n,r={}){var s;const i=(t=Tn(t,Lc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=Zm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new sO(new sv(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fr(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Jn extends fr{constructor(e,n,r){super(e,n,Yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new G(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function yo(t,e,...n){if(t=qe(t),cE("collection","path",e),t instanceof Lc){const r=Re.fromString(e,...n);return ng(r),new Jn(t,null,r)}{if(!(t instanceof yt||t instanceof Jn))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return ng(r),new Jn(t.firestore,null,r)}}function lE(t,e,...n){if(t=qe(t),arguments.length===1&&(e=iv.V()),cE("doc","path",e),t instanceof Lc){const r=Re.fromString(e,...n);return tg(r),new yt(t,null,new G(r))}{if(!(t instanceof yt||t instanceof Jn))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return tg(r),new yt(t.firestore,t instanceof Jn?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new jv(this,"async_queue_retry"),this.tu=()=>{const n=_l();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=_l();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=_l();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Yn;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!fo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw bn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const s=cf.createAndSchedule(this,e,n,r,i=>this.su(i));return this.Ja.push(s),s}nu(){this.Ya&&ee()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function sg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Cs extends Lc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new MD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uE(this),this._firestoreClient.terminate()}}function LD(t,e){const n=typeof t=="object"?t:ih(),r=typeof t=="string"?t:e||"(default)",s=ic(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ym("firestore");i&&VD(s,...i)}return s}function ff(t){return t._firestoreClient||uE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uE(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new vO(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,aE(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new CD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(lt.fromBase64String(e))}catch(n){throw new $(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=/^__.*__$/;class FD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}function fE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class gf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new gf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.Tu(e),s}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.cu(),s}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return $a(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(fE(this.lu)&&UD.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class $D{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dc(e)}mu(e,n,r,s=!1){return new gf({lu:e,methodName:n,Vu:r,path:nt.emptyPath(),Iu:!1,Ru:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mf(t){const e=t._freezeSettings(),n=Dc(t._databaseId);return new $D(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dE(t,e,n,r,s,i={}){const o=t.mu(i.merge||i.mergeFields?2:0,e,n,s);mE("Data must be an object, but it was:",o,r);const a=pE(r,o);let c,l;if(i.merge)c=new Lt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=BD(e,h,n);if(!o.contains(f))throw new $(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);HD(u,f)||u.push(f)}c=new Lt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new FD(new kt(a),c,l)}function jD(t,e,n,r=!1){return _f(n,t.mu(r?4:3,e))}function _f(t,e){if(gE(t=qe(t)))return mE("Unsupported field value:",e,t),pE(t,e);if(t instanceof hE)return function(r,s){if(!fE(s.lu))throw s.Au(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Au(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=_f(a,s.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $O(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Ua(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ua(s.serializer,i)}}if(r instanceof pf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ks)return{bytesValue:Dv(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ef(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Au(`Unsupported field value: ${Mc(r)}`)}(t,e)}function pE(t,e){const n={};return ov(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(t,(r,s)=>{const i=_f(s,e.Pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof pf||t instanceof ks||t instanceof yt||t instanceof hE)}function mE(t,e,n){if(!gE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Mc(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function BD(t,e,n){if((e=qe(e))instanceof df)return e._internalPath;if(typeof e=="string")return _E(t,e);throw $a("Field path arguments must be of type string or ",t,!1,void 0,n)}const qD=new RegExp("[~\\*/\\[\\]]");function _E(t,e,n){if(e.search(qD)>=0)throw $a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new df(...e.split("."))._internalPath}catch{throw $a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(I.INVALID_ARGUMENT,a+t+c)}function HD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WD extends yE{data(){return super.data()}}function Uc(t,e){return typeof e=="string"?_E(t,e):e instanceof df?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yf{}class EE extends yf{}function wE(t,e,...n){let r=[];e instanceof yf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof vf).length,a=i.filter(c=>c instanceof Fc).length;if(o>1||o>0&&a>0)throw new $(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Fc extends EE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fc(e,n,r)}_apply(e){const n=this._parse(e);return IE(e._query,n),new fr(e.firestore,e.converter,yu(e._query,n))}_parse(e){const n=mf(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){og(h,u);const p=[];for(const _ of h)p.push(ig(c,i,_));f={arrayValue:{values:p}}}else f=ig(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||og(h,u),f=jD(a,o,h,u==="in"||u==="not-in");return Fe.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function KD(t,e,n){const r=e,s=Uc("where",t);return Fc._create(s,r,n)}class vf extends yf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)IE(o,c),o=yu(o,c)}(e._query,n),new fr(e.firestore,e.converter,yu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ef extends EE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ef(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new _s(i,o);return function(l,u){if(Jh(l)===null){const h=Pc(l);h!==null&&TE(l,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new fr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ls(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function zD(t,e="asc"){const n=e,r=Uc("orderBy",t);return Ef._create(r,n)}function ig(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new $(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gv(e)&&n.indexOf("/")!==-1)throw new $(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!G.isDocumentKey(r))throw new $(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sp(t,new G(r))}if(n instanceof yt)return Sp(t,n._key);throw new $(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mc(n)}.`)}function og(t,e){if(!Array.isArray(t)||t.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function IE(t,e){if(e.isInequality()){const r=Pc(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new $(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Jh(t);i!==null&&TE(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function TE(t,e,n){if(!n.isEqual(e))throw new $(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class GD{convertValue(e,n="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new pf(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Bi(e));default:return null}}convertTimestamp(e){const n=ir(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);be(Uv(r));const s=new qi(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RE extends yE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ra extends RE{data(e={}){return super.data(e)}}class bE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ra(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new ra(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new ra(s._firestore,s._userDataWriter,a.doc.key,a.doc,new oi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:QD(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class wf extends GD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function YD(t){t=Tn(t,fr);const e=Tn(t.firestore,Cs),n=ff(e),r=new wf(e);return vE(t._query),DD(n,t._query).then(s=>new bE(e,r,t,s))}function JD(t,e,n){t=Tn(t,yt);const r=Tn(t.firestore,Cs),s=AE(t.converter,e,n);return CE(r,[dE(mf(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,sn.none())])}function PE(t,e){const n=Tn(t.firestore,Cs),r=lE(t),s=AE(t.converter,e);return CE(n,[dE(mf(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function SE(t,...e){var n,r,s;t=qe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||sg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(sg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof yt)l=Tn(t.firestore,Cs),u=Yh(t._key.path),c={next:h=>{e[o]&&e[o](XD(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Tn(t,fr);l=Tn(h.firestore,Cs),u=h._query;const f=new wf(l);c={next:p=>{e[o]&&e[o](new bE(l,f,h,p))},error:e[o+1],complete:e[o+2]},vE(t._query)}return function(f,p,_,T){const E=new iE(T),R=new Xv(p,E,_);return f.asyncQueue.enqueueAndForget(async()=>Yv(await Pu(f),R)),()=>{E.Ma(),f.asyncQueue.enqueueAndForget(async()=>Jv(await Pu(f),R))}}(ff(l),u,a,c)}function CE(t,e){return function(r,s){const i=new Yn;return r.asyncQueue.enqueueAndForget(async()=>vD(await ND(r),s,i)),i.promise}(ff(t),e)}function XD(t,e,n){const r=n.docs.get(e._key),s=new wf(t);return new RE(t,s,e._key,r,new oi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Vs=s})(Gr),Fr(new rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Cs(new iO(r.getProvider("auth-internal")),new lO(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),tn(Tp,"4.1.2",e),tn(Tp,"4.1.2","esm2017")})();const $s=LD(lc),ZD=(t,e,n)=>{const r=lE($s,"users",t);return JD(r,{displayName:e,photoURL:n??null})},h1=async()=>{const t=yo($s,"users");return(await YD(t)).docs.map(r=>({id:r.id,...r.data()}))},f1=async t=>{const e=yo($s,"chats");return(await PE(e,{participants:t,updatedAt:new Date,createdAt:new Date})).id},d1=async(t,e)=>{const n=yo($s,"chats",t,"messages"),r=Cn.currentUser;if(!r)throw new Error("User not found in sendMessage");return await PE(n,{chatId:t,senderId:r.uid,content:e,createdAt:new Date})},p1=t=>{const e=Cn.currentUser;if(!e)throw new Error("User not found in sendMessage");const n=yo($s,"chats"),r=wE(n,KD("participants","array-contains",e.uid));return SE(r,i=>{const o=i.docs.map(a=>({id:a.id,...a.data()}));t(o)})},g1=(t,e)=>{const n=yo($s,"chats",t,"messages"),r=wE(n,zD("createdAt","asc"));return SE(r,i=>{const o=i.metadata.fromCache?"local":"server",a=i.docs.map(c=>({id:c.id,...c.data()}));e({messages:a,source:o})})},Cn=L_(lc),m1=t=>Cn.onAuthStateChanged(t),e1=new mn,_1=()=>NP(Cn,e1),y1=(t,e)=>aP(Cn,t,e),v1=(t,e,n,r)=>oP(Cn,t,e).then(async s=>{const i=s.user;let o;return r&&await YC(r,i.uid).then(a=>{o=a}).catch(a=>{console.log("error handled here",a)}),await Promise.all([lP(i,{displayName:n,photoURL:o}),ZD(i.uid,n,o)]),{user:i,error:null}}).catch(s=>{const i=s.code,o=s.message;return console.log("Error occurred in register",i,o),{user:null,error:{errorCode:i,errorMessage:o}}}),E1=()=>Cn.signOut(),kE=MR({history:MA("/"),routes:[{path:"/",name:"home",component:()=>Ks(()=>import("./HomeView-be574958.js"),["assets/HomeView-be574958.js","assets/ChatView-e23861bc.js","assets/profile-icon-cbb7c51f.js"])},{path:"/login",name:"login",component:()=>Ks(()=>import("./LoginView-a1b08a76.js"),[])},{path:"/settings",name:"settings",component:()=>Ks(()=>import("./SettingsView-3705f5b1.js"),["assets/SettingsView-3705f5b1.js","assets/profile-icon-cbb7c51f.js"])},{path:"/register",name:"register",component:()=>Ks(()=>import("./RegisterView-cf6ad8cc.js"),[])},{path:"/:chatId",name:"chat",props:!0,component:()=>Ks(()=>import("./ChatView-e23861bc.js"),["assets/ChatView-e23861bc.js","assets/profile-icon-cbb7c51f.js"])}]});kE.beforeEach(async(t,e,n)=>{const s=!["/login","/register"].includes(t.path);await Cn.authStateReady();const i=Cn.currentUser;s?i?n():n("/login"):i?n("/"):n()});const If=FT(NS);If.use(gA());If.use(kE);If.mount("#app");export{h1 as A,p1 as B,Et as C,g1 as D,f1 as E,Yf as F,xt as G,r1 as H,a1 as I,xu as J,Cr as K,d1 as L,IR as R,U_ as _,Cn as a,lm as b,xl as c,Ya as d,li as e,Za as f,wt as g,Xw as h,i1 as i,kE as j,_1 as k,ZD as l,eT as m,lP as n,m1 as o,E1 as p,v1 as q,Os as r,y1 as s,n1 as t,wn as u,s1 as v,t1 as w,KE as x,o1 as y,fI as z};
