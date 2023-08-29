(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function _r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ae=Object.freeze({}),As=Object.freeze([]),St=()=>{},Ig=()=>!1,jw=/^on[^a-z]/,ro=t=>jw.test(t),ga=t=>t.startsWith("onUpdate:"),De=Object.assign,Fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bw=Object.prototype.hasOwnProperty,le=(t,e)=>Bw.call(t,e),Y=Array.isArray,Dr=t=>ec(t)==="[object Map]",Tg=t=>ec(t)==="[object Set]",X=t=>typeof t=="function",Le=t=>typeof t=="string",$u=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",ju=t=>we(t)&&X(t.then)&&X(t.catch),Ag=Object.prototype.toString,ec=t=>Ag.call(t),Bu=t=>ec(t).slice(8,-1),bg=t=>ec(t)==="[object Object]",qu=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yo=_r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qw=_r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),tc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hw=/-(\w)/g,mn=tc(t=>t.replace(Hw,(e,n)=>n?n.toUpperCase():"")),Ww=/\B([A-Z])/g,ar=tc(t=>t.replace(Ww,"-$1").toLowerCase()),Wr=tc(t=>t.charAt(0).toUpperCase()+t.slice(1)),br=tc(t=>t?`on${Wr(t)}`:""),Si=(t,e)=>!Object.is(t,e),_s=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ma=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $d;const _a=()=>$d||($d=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hu(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?Qw(r):Hu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Le(t))return t;if(we(t))return t}}const Kw=/;(?![^(]*\))/g,zw=/:([^]+)/,Gw=/\/\*[^]*?\*\//g;function Qw(t){const e={};return t.replace(Gw,"").split(Kw).forEach(n=>{if(n){const r=n.split(zw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xs(t){let e="";if(Le(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=xs(t[n]);r&&(e+=r+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yw="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Jw="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Xw=_r(Yw),Zw=_r(Jw),eE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tE=_r(eE);function Rg(t){return!!t||t===""}const On=t=>Le(t)?t:t==null?"":Y(t)||we(t)&&(t.toString===Ag||!X(t.toString))?JSON.stringify(t,Pg,2):String(t),Pg=(t,e)=>e&&e.__v_isRef?Pg(t,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Tg(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!Y(e)&&!bg(e)?String(e):e;function ya(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let kt;class Sg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}else ya("cannot run an inactive effect scope.")}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Cg(t){return new Sg(t)}function nE(t,e=kt){e&&e.active&&e.effects.push(t)}function kg(){return kt}function rE(t){kt?kt.cleanups.push(t):ya("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Wu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Og=t=>(t.w&cr)>0,xg=t=>(t.n&cr)>0,sE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=cr},iE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Og(s)&&!xg(s)?s.delete(t):e[n++]=s,s.w&=~cr,s.n&=~cr}e.length=n}},va=new WeakMap;let oi=0,cr=1;const Nl=30;let At;const Vr=Symbol("iterate"),Dl=Symbol("Map key iterate");class Ku{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nE(this,r)}run(){if(!this.active)return this.fn();let e=At,n=nr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=At,At=this,nr=!0,cr=1<<++oi,oi<=Nl?sE(this):jd(this),this.fn()}finally{oi<=Nl&&iE(this),cr=1<<--oi,At=this.parent,nr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(jd(this),this.onStop&&this.onStop(),this.active=!1)}}function jd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nr=!0;const Ng=[];function rs(){Ng.push(nr),nr=!1}function ss(){const t=Ng.pop();nr=t===void 0?!0:t}function yt(t,e,n){if(nr&&At){let r=va.get(t);r||va.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Wu()),Dg(s,{effect:At,target:t,type:e,key:n})}}function Dg(t,e){let n=!1;oi<=Nl?xg(t)||(t.n|=cr,n=!Og(t)):n=!t.has(At),n&&(t.add(At),At.deps.push(t),At.onTrack&&At.onTrack(De({effect:At},e)))}function _n(t,e,n,r,s,i){const o=va.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?qu(n)&&a.push(o.get("length")):(a.push(o.get(Vr)),Dr(t)&&a.push(o.get(Dl)));break;case"delete":Y(t)||(a.push(o.get(Vr)),Dr(t)&&a.push(o.get(Dl)));break;case"set":Dr(t)&&a.push(o.get(Vr));break}const c={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&Vl(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);Vl(Wu(l),c)}}function Vl(t,e){const n=Y(t)?t:[...t];for(const r of n)r.computed&&Bd(r,e);for(const r of n)r.computed||Bd(r,e)}function Bd(t,e){(t!==At||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(De({effect:t},e)),t.scheduler?t.scheduler():t.run())}function oE(t,e){var n;return(n=va.get(t))==null?void 0:n.get(e)}const aE=_r("__proto__,__v_isRef,__isVue"),Vg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($u)),cE=nc(),lE=nc(!1,!0),uE=nc(!0),hE=nc(!0,!0),qd=dE();function dE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Z(this);for(let i=0,o=this.length;i<o;i++)yt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rs();const r=Z(this)[e].apply(this,n);return ss(),r}}),t}function fE(t){const e=Z(this);return yt(e,"has",t),e.hasOwnProperty(t)}function nc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?qg:Bg:e?jg:$g).get(r))return r;const o=Y(r);if(!t){if(o&&le(qd,s))return Reflect.get(qd,s,i);if(s==="hasOwnProperty")return fE}const a=Reflect.get(r,s,i);return($u(s)?Vg.has(s):aE(s))||(t||yt(r,"get",s),e)?a:Re(a)?o&&qu(s)?a:a.value:we(a)?t?Wg(a):so(a):a}}const pE=Mg(),gE=Mg(!0);function Mg(t=!1){return function(n,r,s,i){let o=n[r];if(lr(o)&&Re(o)&&!Re(s))return!1;if(!t&&(!wa(s)&&!lr(s)&&(o=Z(o),s=Z(s)),!Y(n)&&Re(o)&&!Re(s)))return o.value=s,!0;const a=Y(n)&&qu(r)?Number(r)<n.length:le(n,r),c=Reflect.set(n,r,s,i);return n===Z(i)&&(a?Si(s,o)&&_n(n,"set",r,s,o):_n(n,"add",r,s)),c}}function mE(t,e){const n=le(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&_n(t,"delete",e,void 0,r),s}function _E(t,e){const n=Reflect.has(t,e);return(!$u(e)||!Vg.has(e))&&yt(t,"has",e),n}function yE(t){return yt(t,"iterate",Y(t)?"length":Vr),Reflect.ownKeys(t)}const Lg={get:cE,set:pE,deleteProperty:mE,has:_E,ownKeys:yE},Ug={get:uE,set(t,e){return ya(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return ya(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},vE=De({},Lg,{get:lE,set:gE}),wE=De({},Ug,{get:hE}),zu=t=>t,rc=t=>Reflect.getPrototypeOf(t);function Oo(t,e,n=!1,r=!1){t=t.__v_raw;const s=Z(t),i=Z(e);n||(e!==i&&yt(s,"get",e),yt(s,"get",i));const{has:o}=rc(s),a=r?zu:n?Gu:Ci;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function xo(t,e=!1){const n=this.__v_raw,r=Z(n),s=Z(t);return e||(t!==s&&yt(r,"has",t),yt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function No(t,e=!1){return t=t.__v_raw,!e&&yt(Z(t),"iterate",Vr),Reflect.get(t,"size",t)}function Hd(t){t=Z(t);const e=Z(this);return rc(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function Wd(t,e){e=Z(e);const n=Z(this),{has:r,get:s}=rc(n);let i=r.call(n,t);i?Fg(n,r,t):(t=Z(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Si(e,o)&&_n(n,"set",t,e,o):_n(n,"add",t,e),this}function Kd(t){const e=Z(this),{has:n,get:r}=rc(e);let s=n.call(e,t);s?Fg(e,n,t):(t=Z(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&_n(e,"delete",t,void 0,i),o}function zd(){const t=Z(this),e=t.size!==0,n=Dr(t)?new Map(t):new Set(t),r=t.clear();return e&&_n(t,"clear",void 0,void 0,n),r}function Do(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Z(o),c=e?zu:t?Gu:Ci;return!t&&yt(a,"iterate",Vr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Vo(t,e,n){return function(...r){const s=this.__v_raw,i=Z(s),o=Dr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?zu:e?Gu:Ci;return!e&&yt(i,"iterate",c?Dl:Vr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function jn(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${Wr(t)} operation ${n}failed: target is readonly.`,Z(this))}return t==="delete"?!1:this}}function EE(){const t={get(i){return Oo(this,i)},get size(){return No(this)},has:xo,add:Hd,set:Wd,delete:Kd,clear:zd,forEach:Do(!1,!1)},e={get(i){return Oo(this,i,!1,!0)},get size(){return No(this)},has:xo,add:Hd,set:Wd,delete:Kd,clear:zd,forEach:Do(!1,!0)},n={get(i){return Oo(this,i,!0)},get size(){return No(this,!0)},has(i){return xo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Do(!0,!1)},r={get(i){return Oo(this,i,!0,!0)},get size(){return No(this,!0)},has(i){return xo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Do(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Vo(i,!1,!1),n[i]=Vo(i,!0,!1),e[i]=Vo(i,!1,!0),r[i]=Vo(i,!0,!0)}),[t,n,e,r]}const[IE,TE,AE,bE]=EE();function sc(t,e){const n=e?t?bE:AE:t?TE:IE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const RE={get:sc(!1,!1)},PE={get:sc(!1,!0)},SE={get:sc(!0,!1)},CE={get:sc(!0,!0)};function Fg(t,e,n){const r=Z(n);if(r!==n&&e.call(t,r)){const s=Bu(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const $g=new WeakMap,jg=new WeakMap,Bg=new WeakMap,qg=new WeakMap;function kE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function OE(t){return t.__v_skip||!Object.isExtensible(t)?0:kE(Bu(t))}function so(t){return lr(t)?t:ic(t,!1,Lg,RE,$g)}function Hg(t){return ic(t,!1,vE,PE,jg)}function Wg(t){return ic(t,!0,Ug,SE,Bg)}function ai(t){return ic(t,!0,wE,CE,qg)}function ic(t,e,n,r,s){if(!we(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=OE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zt(t){return lr(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function lr(t){return!!(t&&t.__v_isReadonly)}function wa(t){return!!(t&&t.__v_isShallow)}function Ea(t){return zt(t)||lr(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Rn(t){return ma(t,"__v_skip",!0),t}const Ci=t=>we(t)?so(t):t,Gu=t=>we(t)?Wg(t):t;function Kg(t){nr&&At&&(t=Z(t),Dg(t.dep||(t.dep=Wu()),{target:t,type:"get",key:"value"}))}function zg(t,e){t=Z(t);const n=t.dep;n&&Vl(n,{target:t,type:"set",key:"value",newValue:e})}function Re(t){return!!(t&&t.__v_isRef===!0)}function Pe(t){return Gg(t,!1)}function xE(t){return Gg(t,!0)}function Gg(t,e){return Re(t)?t:new NE(t,e)}class NE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Ci(e)}get value(){return Kg(this),this._value}set value(e){const n=this.__v_isShallow||wa(e)||lr(e);e=n?e:Z(e),Si(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ci(e),zg(this,e))}}function Ne(t){return Re(t)?t.value:t}const DE={get:(t,e,n)=>Ne(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Re(s)&&!Re(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qg(t){return zt(t)?t:new Proxy(t,DE)}function Gd(t){Ea(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=Yg(t,n);return e}class VE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return oE(Z(this._object),this._key)}}class ME{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Jo(t,e,n){return Re(t)?t:X(t)?new ME(t):we(t)&&arguments.length>1?Yg(t,e,n):Pe(t)}function Yg(t,e,n){const r=t[e];return Re(r)?r:new VE(t,e,n)}class LE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ku(e,()=>{this._dirty||(this._dirty=!0,zg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Z(this);return Kg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function UE(t,e,n=!1){let r,s;const i=X(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new LE(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const Mr=[];function Xo(t){Mr.push(t)}function Zo(){Mr.pop()}function S(t,...e){rs();const n=Mr.length?Mr[Mr.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=FE();if(r)kn(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${fc(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...$E(s)),console.warn(...i)}ss()}function FE(){let t=Mr[Mr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function $E(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...jE(n))}),e}function jE({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${fc(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...BE(t.props),i]:[s+i]}function BE(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...Jg(r,t[r]))}),n.length>3&&e.push(" ..."),e}function Jg(t,e,n){return Le(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Re(e)?(e=Jg(t,Z(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):X(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Z(e),n?e:[`${t}=`,e])}const Qu={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function kn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){oc(i,e,n)}return s}function Gt(t,e,n,r){if(X(t)){const i=kn(t,e,n,r);return i&&ju(i)&&i.catch(o=>{oc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}function oc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Qu[n];for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){kn(c,null,10,[t,o,a]);return}}qE(t,n,s,r)}function qE(t,e,n,r=!0){{const s=Qu[e];if(n&&Xo(n),S(`Unhandled error${s?` during execution of ${s}`:""}`),n&&Zo(),r)throw t;console.error(t)}}let ki=!1,Ml=!1;const dt=[];let nn=0;const bs=[];let tn=null,Hn=0;const Xg=Promise.resolve();let Yu=null;const HE=100;function Ia(t){const e=Yu||Xg;return t?e.then(this?t.bind(this):t):e}function WE(t){let e=nn+1,n=dt.length;for(;e<n;){const r=e+n>>>1;Oi(dt[r])<t?e=r+1:n=r}return e}function ac(t){(!dt.length||!dt.includes(t,ki&&t.allowRecurse?nn+1:nn))&&(t.id==null?dt.push(t):dt.splice(WE(t.id),0,t),Zg())}function Zg(){!ki&&!Ml&&(Ml=!0,Yu=Xg.then(nm))}function KE(t){const e=dt.indexOf(t);e>nn&&dt.splice(e,1)}function em(t){Y(t)?bs.push(...t):(!tn||!tn.includes(t,t.allowRecurse?Hn+1:Hn))&&bs.push(t),Zg()}function Qd(t,e=ki?nn+1:0){for(t=t||new Map;e<dt.length;e++){const n=dt[e];if(n&&n.pre){if(Ju(t,n))continue;dt.splice(e,1),e--,n()}}}function tm(t){if(bs.length){const e=[...new Set(bs)];if(bs.length=0,tn){tn.push(...e);return}for(tn=e,t=t||new Map,tn.sort((n,r)=>Oi(n)-Oi(r)),Hn=0;Hn<tn.length;Hn++)Ju(t,tn[Hn])||tn[Hn]();tn=null,Hn=0}}const Oi=t=>t.id==null?1/0:t.id,zE=(t,e)=>{const n=Oi(t)-Oi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nm(t){Ml=!1,ki=!0,t=t||new Map,dt.sort(zE);const e=n=>Ju(t,n);try{for(nn=0;nn<dt.length;nn++){const n=dt[nn];if(n&&n.active!==!1){if(e(n))continue;kn(n,null,14)}}}finally{nn=0,dt.length=0,tm(t),ki=!1,Yu=null,(dt.length||bs.length)&&nm(t)}}function Ju(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>HE){const r=e.ownerInstance,s=r&&ch(r.type);return S(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let Lr=!1;const ys=new Set;_a().__VUE_HMR_RUNTIME__={createRecord:Zc(rm),rerender:Zc(YE),reload:Zc(JE)};const Kr=new Map;function GE(t){const e=t.type.__hmrId;let n=Kr.get(e);n||(rm(e,t.type),n=Kr.get(e)),n.instances.add(t)}function QE(t){Kr.get(t.type.__hmrId).instances.delete(t)}function rm(t,e){return Kr.has(t)?!1:(Kr.set(t,{initialDef:_i(e),instances:new Set}),!0)}function _i(t){return Sm(t)?t.__vccOpts:t}function YE(t,e){const n=Kr.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,_i(r.type).render=e),r.renderCache=[],Lr=!0,r.update(),Lr=!1}))}function JE(t,e){const n=Kr.get(t);if(!n)return;e=_i(e),Yd(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=_i(s.type);ys.has(i)||(i!==n.initialDef&&Yd(i,e),ys.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(ys.add(i),s.ceReload(e.styles),ys.delete(i)):s.parent?ac(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}em(()=>{for(const s of r)ys.delete(_i(s.type))})}function Yd(t,e){De(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Zc(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let rn,ci=[],Ll=!1;function io(t,...e){rn?rn.emit(t,...e):Ll||ci.push({event:t,args:e})}function sm(t,e){var n,r;rn=t,rn?(rn.enabled=!0,ci.forEach(({event:s,args:i})=>rn.emit(s,...i)),ci=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{sm(i,e)}),setTimeout(()=>{rn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ll=!0,ci=[])},3e3)):(Ll=!0,ci=[])}function XE(t,e){io("app:init",t,e,{Fragment:st,Text:oo,Comment:xt,Static:na})}function ZE(t){io("app:unmount",t)}const eI=Xu("component:added"),im=Xu("component:updated"),tI=Xu("component:removed"),nI=t=>{rn&&typeof rn.cleanupBuffer=="function"&&!rn.cleanupBuffer(t)&&tI(t)};function Xu(t){return e=>{io(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const rI=om("perf:start"),sI=om("perf:end");function om(t){return(e,n,r)=>{io(t,e.appContext.app,e.uid,e,n,r)}}function iI(t,e,n){io("component:emit",t.appContext.app,t,e,n)}function oI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(br(e)in h))&&S(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${br(e)}" prop.`);else{const d=u[e];X(d)&&(d(...n)||S(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ae;d&&(s=n.map(p=>Le(p)?p.trim():p)),h&&(s=n.map(xl))}iI(t,e,s);{const u=e.toLowerCase();u!==e&&r[br(u)]&&S(`Event "${u}" is emitted in component ${fc(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ar(e)}" instead of "${e}".`)}let a,c=r[a=br(e)]||r[a=br(mn(e))];!c&&i&&(c=r[a=br(ar(e))]),c&&Gt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gt(l,t,6,s)}}function am(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=am(l,e,!0);u&&(a=!0,De(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&r.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):De(o,i),we(t)&&r.set(t,o),o)}function cc(t,e){return!t||!ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,ar(e))||le(t,e))}let pt=null,cm=null;function Ta(t){const e=pt;return pt=t,cm=t&&t.type.__scopeId||null,e}function lc(t,e=pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&uf(-1);const i=Ta(e);let o;try{o=t(...s)}finally{Ta(i),r._d&&uf(1)}return im(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let Ul=!1;function Aa(){Ul=!0}function el(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:_,inheritAttrs:I}=t;let w,b;const x=Ta(t);Ul=!1;try{if(n.shapeFlag&4){const U=s||r;w=Ht(u.call(U,U,h,i,p,d,_)),b=c}else{const U=e;c===i&&Aa(),w=Ht(U.length>1?U(i,{get attrs(){return Aa(),c},slots:a,emit:l}):U(i,null)),b=e.props?c:cI(c)}}catch(U){yi.length=0,oc(U,t,1),w=et(xt)}let k=w,z;if(w.patchFlag>0&&w.patchFlag&2048&&([k,z]=aI(w)),b&&I!==!1){const U=Object.keys(b),{shapeFlag:ge}=k;if(U.length){if(ge&7)o&&U.some(ga)&&(b=lI(b,o)),k=ur(k,b);else if(!Ul&&k.type!==xt){const B=Object.keys(c),ze=[],Ee=[];for(let F=0,L=B.length;F<L;F++){const ce=B[F];ro(ce)?ga(ce)||ze.push(ce[2].toLowerCase()+ce.slice(3)):Ee.push(ce)}Ee.length&&S(`Extraneous non-props attributes (${Ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),ze.length&&S(`Extraneous non-emits event listeners (${ze.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Jd(k)||S("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=ur(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(Jd(k)||S("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=n.transition),z?z(k):w=k,Ta(x),w}const aI=t=>{const e=t.children,n=t.dynamicChildren,r=lm(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Ht(r),o]};function lm(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Di(r)){if(r.type!==xt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const cI=t=>{let e;for(const n in t)(n==="class"||n==="style"||ro(n))&&((e||(e={}))[n]=t[n]);return e},lI=(t,e)=>{const n={};for(const r in t)(!ga(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},Jd=t=>t.shapeFlag&7||t.type===xt;function uI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if((s||a)&&Lr||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xd(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!cc(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xd(r,o,l):!0:!!o;return!1}function Xd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!cc(n,i))return!0}return!1}function hI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const dI=t=>t.__isSuspense;function fI(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):em(t)}function pI(t,e){return Zu(t,null,e)}const Mo={};function rr(t,e,n){return X(e)||S("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Zu(t,e,n)}function Zu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ae){var a;e||(n!==void 0&&S('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&S('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=U=>{S("Invalid watch source: ",U,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},l=kg()===((a=We)==null?void 0:a.scope)?We:null;let u,h=!1,d=!1;if(Re(t)?(u=()=>t.value,h=wa(t)):zt(t)?(u=()=>t,r=!0):Y(t)?(d=!0,h=t.some(U=>zt(U)||wa(U)),u=()=>t.map(U=>{if(Re(U))return U.value;if(zt(U))return Cr(U);if(X(U))return kn(U,l,2);c(U)})):X(t)?e?u=()=>kn(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return p&&p(),Gt(t,l,3,[_])}:(u=St,c(t)),e&&r){const U=u;u=()=>Cr(U())}let p,_=U=>{p=k.onStop=()=>{kn(U,l,4)}},I;if(Vi)if(_=St,e?n&&Gt(e,l,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const U=TT();I=U.__watcherHandles||(U.__watcherHandles=[])}else return St;let w=d?new Array(t.length).fill(Mo):Mo;const b=()=>{if(k.active)if(e){const U=k.run();(r||h||(d?U.some((ge,B)=>Si(ge,w[B])):Si(U,w)))&&(p&&p(),Gt(e,l,3,[U,w===Mo?void 0:d&&w[0]===Mo?[]:w,_]),w=U)}else k.run()};b.allowRecurse=!!e;let x;s==="sync"?x=b:s==="post"?x=()=>Pt(b,l&&l.suspense):(b.pre=!0,l&&(b.id=l.uid),x=()=>ac(b));const k=new Ku(u,x);k.onTrack=i,k.onTrigger=o,e?n?b():w=k.run():s==="post"?Pt(k.run.bind(k),l&&l.suspense):k.run();const z=()=>{k.stop(),l&&l.scope&&Fu(l.scope.effects,k)};return I&&I.push(z),z}function gI(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?um(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=We;Ns(this);const a=Zu(s,i.bind(r),n);return o?Ns(o):Fr(),a}function um(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Cr(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))Cr(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Cr(t[n],e);else if(Tg(t)||Dr(t))t.forEach(n=>{Cr(n,e)});else if(bg(t))for(const n in t)Cr(t[n],e);return t}function hm(t){qw(t)&&S("Do not use built-in directive ids as custom directive id: "+t)}function Xn(t,e){const n=pt;if(n===null)return S("withDirectives can only be used inside render functions."),t;const r=dc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ae]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Cr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(rs(),Gt(c,n,8,[t.el,a,t,e]),ss())}}function Je(t,e){return X(t)?(()=>De({name:t.name},e,{setup:t}))():t}const ea=t=>!!t.type.__asyncLoader,eh=t=>t.type.__isKeepAlive;function mI(t,e){dm(t,"a",e)}function _I(t,e){dm(t,"da",e)}function dm(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(uc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)eh(s.parent.vnode)&&yI(r,e,n,s),s=s.parent}}function yI(t,e,n,r){const s=uc(e,t,r,!0);fm(()=>{Fu(r[e],s)},n)}function uc(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rs(),Ns(n);const a=Gt(e,n,t,o);return Fr(),ss(),a});return r?s.unshift(i):s.push(i),i}else{const s=br(Qu[t].replace(/ hook$/,""));S(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Ln=t=>(e,n=We)=>(!Vi||t==="sp")&&uc(t,(...r)=>e(...r),n),vI=Ln("bm"),wI=Ln("m"),EI=Ln("bu"),II=Ln("u"),TI=Ln("bum"),fm=Ln("um"),AI=Ln("sp"),bI=Ln("rtg"),RI=Ln("rtc");function PI(t,e=We){uc("ec",t,e)}const Fl="components";function SI(t,e){return kI(Fl,t,!0,e)||t}const CI=Symbol.for("v-ndc");function kI(t,e,n=!0,r=!1){const s=pt||We;if(s){const i=s.type;if(t===Fl){const a=ch(i,!1);if(a&&(a===e||a===mn(e)||a===Wr(mn(e))))return i}const o=Zd(s[t]||i[t],e)||Zd(s.appContext[t],e);if(!o&&r)return i;if(n&&!o){const a=t===Fl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";S(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else S(`resolve${Wr(t.slice(0,-1))} can only be used in render() or setup().`)}function Zd(t,e){return t&&(t[e]||t[mn(e)]||t[Wr(mn(e))])}function ba(t,e,n,r){let s;const i=n&&n[r];if(Y(t)||Le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){Number.isInteger(t)||S(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(we(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const $l=t=>t?Rm(t)?dc(t)||t.proxy:$l(t.parent):null,Ur=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>ai(t.props),$attrs:t=>ai(t.attrs),$slots:t=>ai(t.slots),$refs:t=>ai(t.refs),$parent:t=>$l(t.parent),$root:t=>$l(t.root),$emit:t=>t.emit,$options:t=>nh(t),$forceUpdate:t=>t.f||(t.f=()=>ac(t.update)),$nextTick:t=>t.n||(t.n=Ia.bind(t.proxy)),$watch:t=>gI.bind(t)}),th=t=>t==="_"||t==="$",tl=(t,e)=>t!==Ae&&!t.__isScriptSetup&&le(t,e),pm={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(tl(r,e))return o[e]=1,r[e];if(s!==Ae&&le(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==Ae&&le(n,e))return o[e]=4,n[e];jl&&(o[e]=0)}}const u=Ur[e];let h,d;if(u)return e==="$attrs"?(yt(t,"get",e),Aa()):e==="$slots"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&le(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,le(d,e))return d[e];pt&&(!Le(e)||e.indexOf("__v")!==0)&&(s!==Ae&&th(e[0])&&le(s,e)?S(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===pt&&S(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return tl(s,e)?(s[e]=n,!0):s.__isScriptSetup&&le(s,e)?(S(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==Ae&&le(r,e)?(r[e]=n,!0):le(t.props,e)?(S(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(S(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&le(t,o)||tl(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(Ur,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};pm.ownKeys=t=>(S("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function OI(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Ur).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>Ur[n](t),set:St})}),e}function xI(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:St})})}function NI(t){const{ctx:e,setupState:n}=t;Object.keys(Z(n)).forEach(r=>{if(!n.__isScriptSetup){if(th(r[0])){S(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:St})}})}function ef(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function DI(){const t=Object.create(null);return(e,n)=>{t[n]?S(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let jl=!0;function VI(t){const e=nh(t),n=t.proxy,r=t.ctx;jl=!1,e.beforeCreate&&tf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:I,deactivated:w,beforeDestroy:b,beforeUnmount:x,destroyed:k,unmounted:z,render:U,renderTracked:ge,renderTriggered:B,errorCaptured:ze,serverPrefetch:Ee,expose:F,inheritAttrs:L,components:ce,directives:Oe,filters:Jt}=e,Rt=DI();{const[se]=t.propsOptions;if(se)for(const J in se)Rt("Props",J)}if(l&&MI(l,r,Rt),o)for(const se in o){const J=o[se];X(J)?(Object.defineProperty(r,se,{value:J.bind(n),configurable:!0,enumerable:!0,writable:!0}),Rt("Methods",se)):S(`Method "${se}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`)}if(s){X(s)||S("The data option must be a function. Plain object usage is no longer supported.");const se=s.call(n,n);if(ju(se)&&S("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!we(se))S("data() should return an object.");else{t.data=so(se);for(const J in se)Rt("Data",J),th(J[0])||Object.defineProperty(r,J,{configurable:!0,enumerable:!0,get:()=>se[J],set:St})}}if(jl=!0,i)for(const se in i){const J=i[se],Mt=X(J)?J.bind(n,n):X(J.get)?J.get.bind(n,n):St;Mt===St&&S(`Computed property "${se}" has no getter.`);const Ir=!X(J)&&X(J.set)?J.set.bind(n):()=>{S(`Write operation failed: computed property "${se}" is readonly.`)},Un=Ve({get:Mt,set:Ir});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Un.value,set:Xt=>Un.value=Xt}),Rt("Computed",se)}if(a)for(const se in a)gm(a[se],r,n,se);if(c){const se=X(c)?c.call(n):c;Reflect.ownKeys(se).forEach(J=>{ta(J,se[J])})}u&&tf(u,t,"c");function Ge(se,J){Y(J)?J.forEach(Mt=>se(Mt.bind(n))):J&&se(J.bind(n))}if(Ge(vI,h),Ge(wI,d),Ge(EI,p),Ge(II,_),Ge(mI,I),Ge(_I,w),Ge(PI,ze),Ge(RI,ge),Ge(bI,B),Ge(TI,x),Ge(fm,z),Ge(AI,Ee),Y(F))if(F.length){const se=t.exposed||(t.exposed={});F.forEach(J=>{Object.defineProperty(se,J,{get:()=>n[J],set:Mt=>n[J]=Mt})})}else t.exposed||(t.exposed={});U&&t.render===St&&(t.render=U),L!=null&&(t.inheritAttrs=L),ce&&(t.components=ce),Oe&&(t.directives=Oe)}function MI(t,e,n=St){Y(t)&&(t=Bl(t));for(const r in t){const s=t[r];let i;we(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),Re(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function tf(t,e,n){Gt(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gm(t,e,n,r){const s=r.includes(".")?um(n,r):()=>n[r];if(Le(t)){const i=e[t];X(i)?rr(s,i):S(`Invalid watch handler specified by key "${t}"`,i)}else if(X(t))rr(s,t.bind(n));else if(we(t))if(Y(t))t.forEach(i=>gm(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)?rr(s,i,t):S(`Invalid watch handler specified by key "${t.handler}"`,i)}else S(`Invalid watch option: "${r}"`,t)}function nh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ra(c,l,o,!0)),Ra(c,e,o)),we(e)&&i.set(e,c),c}function Ra(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ra(t,i,n,!0),s&&s.forEach(o=>Ra(t,o,n,!0));for(const o in e)if(r&&o==="expose")S('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=LI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const LI={data:nf,props:rf,emits:rf,methods:li,computed:li,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:li,directives:li,watch:FI,provide:nf,inject:UI};function nf(t,e){return e?t?function(){return De(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function UI(t,e){return li(Bl(t),Bl(e))}function Bl(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function li(t,e){return t?De(Object.create(null),t,e):e}function rf(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:De(Object.create(null),ef(t),ef(e??{})):e}function FI(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function mm(){return{app:null,config:{isNativeTag:Ig,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $I=0;function jI(t,e){return function(r,s=null){X(r)||(r=De({},r)),s!=null&&!we(s)&&(S("root props passed to app.mount() must be an object."),s=null);const i=mm();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){S("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const o=new Set;let a=!1;const c=i.app={_uid:$I++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ff,get config(){return i.config},set config(l){S("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?S("Plugin has already been applied to target app."):l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)?(o.add(l),l(c,...u)):S('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return i.mixins.includes(l)?S("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),c},component(l,u){return zl(l,i.config),u?(i.components[l]&&S(`Component "${l}" has already been registered in target app.`),i.components[l]=u,c):i.components[l]},directive(l,u){return hm(l),u?(i.directives[l]&&S(`Directive "${l}" has already been registered in target app.`),i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(a)S("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&S("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=et(r,s);return d.appContext=i,i.reload=()=>{t(ur(d),l,h)},u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,c._instance=d.component,XE(c,ff),dc(d.component)||d.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,ZE(c),delete c._container.__vue_app__):S("Cannot unmount an app that is not mounted.")},provide(l,u){return l in i.provides&&S(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=u,c},runWithContext(l){xi=c;try{return l()}finally{xi=null}}};return c}}let xi=null;function ta(t,e){if(!We)S("provide() can only be used inside setup().");else{let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=We||pt;if(r||xi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e;S(`injection "${String(t)}" not found.`)}else S("inject() can only be used inside setup() or functional components.")}function BI(){return!!(We||pt||xi)}function qI(t,e,n,r=!1){const s={},i={};ma(i,hc,1),t.propsDefaults=Object.create(null),_m(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);vm(e||{},s,t),n?t.props=r?s:Hg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function HI(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function WI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Z(s),[c]=t.propsOptions;let l=!1;if(!HI(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(cc(t.emitsOptions,d))continue;const p=e[d];if(c)if(le(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const _=mn(d);s[_]=ql(c,a,_,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{_m(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=ar(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ql(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],l=!0)}l&&_n(t,"set","$attrs"),vm(e||{},s,t)}function _m(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Yo(c))continue;const l=e[c];let u;s&&le(s,u=mn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:cc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Z(n),l=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ql(s,c,h,l[h],t,!le(l,h))}}return o}function ql(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ns(s),r=l[n]=c.call(null,e),Fr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ar(n))&&(r=!0))}return r}function ym(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[d,p]=ym(h,e,!0);De(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&r.set(t,As),As;if(Y(i))for(let u=0;u<i.length;u++){Le(i[u])||S("props must be strings when using array syntax.",i[u]);const h=mn(i[u]);sf(h)&&(o[h]=Ae)}else if(i){we(i)||S("invalid props options",i);for(const u in i){const h=mn(u);if(sf(h)){const d=i[u],p=o[h]=Y(d)||X(d)?{type:d}:De({},d);if(p){const _=af(Boolean,p.type),I=af(String,p.type);p[0]=_>-1,p[1]=I<0||_<I,(_>-1||le(p,"default"))&&a.push(h)}}}}const l=[o,a];return we(t)&&r.set(t,l),l}function sf(t){return t[0]!=="$"?!0:(S(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Hl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function of(t,e){return Hl(t)===Hl(e)}function af(t,e){return Y(e)?e.findIndex(n=>of(n,t)):X(e)&&of(e,t)?0:-1}function vm(t,e,n){const r=Z(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&KI(i,r[i],o,!le(t,i)&&!le(t,ar(i)))}}function KI(t,e,n,r){const{type:s,required:i,validator:o,skipCheck:a}=n;if(i&&r){S('Missing required prop: "'+t+'"');return}if(!(e==null&&!i)){if(s!=null&&s!==!0&&!a){let c=!1;const l=Y(s)?s:[s],u=[];for(let h=0;h<l.length&&!c;h++){const{valid:d,expectedType:p}=GI(e,l[h]);u.push(p||""),c=d}if(!c){S(QI(t,e,u));return}}o&&!o(e)&&S('Invalid prop: custom validator check failed for prop "'+t+'".')}}const zI=_r("String,Number,Boolean,Function,Symbol,BigInt");function GI(t,e){let n;const r=Hl(e);if(zI(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=we(t):r==="Array"?n=Y(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function QI(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(Wr).join(" | ")}`;const s=n[0],i=Bu(e),o=cf(e,s),a=cf(e,i);return n.length===1&&lf(s)&&!YI(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,lf(i)&&(r+=`with value ${a}.`),r}function cf(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function lf(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function YI(...t){return t.some(e=>e.toLowerCase()==="boolean")}const wm=t=>t[0]==="_"||t==="$stable",rh=t=>Y(t)?t.map(Ht):[Ht(t)],JI=(t,e,n)=>{if(e._n)return e;const r=lc((...s)=>(We&&S(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),rh(e(...s))),n);return r._c=!1,r},Em=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wm(s))continue;const i=t[s];if(X(i))e[s]=JI(s,i,r);else if(i!=null){S(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=rh(i);e[s]=()=>o}}},Im=(t,e)=>{eh(t.vnode)||S("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=rh(e);t.slots.default=()=>n},XI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),ma(e,"_",n)):Em(e,t.slots={})}else t.slots={},e&&Im(t,e);ma(t.slots,hc,1)},ZI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const a=e._;a?Lr?(De(s,e),_n(t,"set","$slots")):n&&a===1?i=!1:(De(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Em(e,s)),o=e}else e&&(Im(t,e),o={default:1});if(i)for(const a in s)!wm(a)&&!(a in o)&&delete s[a]};function Wl(t,e,n,r,s=!1){if(Y(t)){t.forEach((d,p)=>Wl(d,e&&(Y(e)?e[p]:e),n,r,s));return}if(ea(r)&&!s)return;const i=r.shapeFlag&4?dc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t;if(!a){S("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Le(l)?(u[l]=null,le(h,l)&&(h[l]=null)):Re(l)&&(l.value=null)),X(c))kn(c,a,12,[o,u]);else{const d=Le(c),p=Re(c);if(d||p){const _=()=>{if(t.f){const I=d?le(h,c)?h[c]:u[c]:c.value;s?Y(I)&&Fu(I,i):Y(I)?I.includes(i)||I.push(i):d?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,le(h,c)&&(h[c]=o)):p?(c.value=o,t.k&&(u[t.k]=o)):S("Invalid template ref type:",c,`(${typeof c})`)};o?(_.id=-1,Pt(_,n)):_()}else S("Invalid template ref type:",c,`(${typeof c})`)}}let Zs,zn;function In(t,e){t.appContext.config.performance&&Pa()&&zn.mark(`vue-${e}-${t.uid}`),rI(t,e,Pa()?zn.now():Date.now())}function Tn(t,e){if(t.appContext.config.performance&&Pa()){const n=`vue-${e}-${t.uid}`,r=n+":end";zn.mark(r),zn.measure(`<${fc(t,t.type)}> ${e}`,n,r),zn.clearMarks(n),zn.clearMarks(r)}sI(t,e,Pa()?zn.now():Date.now())}function Pa(){return Zs!==void 0||(typeof window<"u"&&window.performance?(Zs=!0,zn=window.performance):Zs=!1),Zs}function eT(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Pt=fI;function tT(t){return nT(t)}function nT(t,e){eT();const n=_a();n.__VUE__=!0,sm(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=St,insertStaticContent:_}=t,I=(f,g,m,E=null,v=null,C=null,N=!1,P=null,O=Lr?!1:!!g.dynamicChildren)=>{if(f===g)return;f&&!ei(f,g)&&(E=V(f),Lt(f,v,C,!0),f=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:A,ref:K,shapeFlag:q}=g;switch(A){case oo:w(f,g,m,E);break;case xt:b(f,g,m,E);break;case na:f==null?x(g,m,E,N):k(f,g,m,N);break;case st:Oe(f,g,m,E,v,C,N,P,O);break;default:q&1?ge(f,g,m,E,v,C,N,P,O):q&6?Jt(f,g,m,E,v,C,N,P,O):q&64||q&128?A.process(f,g,m,E,v,C,N,P,O,j):S("Invalid VNode type:",A,`(${typeof A})`)}K!=null&&v&&Wl(K,f&&f.ref,C,g||f,!g)},w=(f,g,m,E)=>{if(f==null)r(g.el=a(g.children),m,E);else{const v=g.el=f.el;g.children!==f.children&&l(v,g.children)}},b=(f,g,m,E)=>{f==null?r(g.el=c(g.children||""),m,E):g.el=f.el},x=(f,g,m,E)=>{[f.el,f.anchor]=_(f.children,g,m,E,f.el,f.anchor)},k=(f,g,m,E)=>{if(g.children!==f.children){const v=d(f.anchor);U(f),[g.el,g.anchor]=_(g.children,m,v,E)}else g.el=f.el,g.anchor=f.anchor},z=({el:f,anchor:g},m,E)=>{let v;for(;f&&f!==g;)v=d(f),r(f,m,E),f=v;r(g,m,E)},U=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=d(f),s(f),f=m;s(g)},ge=(f,g,m,E,v,C,N,P,O)=>{N=N||g.type==="svg",f==null?B(g,m,E,v,C,N,P,O):F(f,g,v,C,N,P,O)},B=(f,g,m,E,v,C,N,P)=>{let O,A;const{type:K,props:q,shapeFlag:G,transition:ie,dirs:ue}=f;if(O=f.el=o(f.type,C,q&&q.is,q),G&8?u(O,f.children):G&16&&Ee(f.children,O,null,E,v,C&&K!=="foreignObject",N,P),ue&&Tr(f,null,E,"created"),ze(O,f,f.scopeId,N,E),q){for(const Te in q)Te!=="value"&&!Yo(Te)&&i(O,Te,null,q[Te],C,f.children,E,v,y);"value"in q&&i(O,"value",null,q.value),(A=q.onVnodeBeforeMount)&&en(A,E,f)}Object.defineProperty(O,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(O,"__vueParentComponent",{value:E,enumerable:!1}),ue&&Tr(f,null,E,"beforeMount");const be=(!v||v&&!v.pendingBranch)&&ie&&!ie.persisted;be&&ie.beforeEnter(O),r(O,g,m),((A=q&&q.onVnodeMounted)||be||ue)&&Pt(()=>{A&&en(A,E,f),be&&ie.enter(O),ue&&Tr(f,null,E,"mounted")},v)},ze=(f,g,m,E,v)=>{if(m&&p(f,m),E)for(let C=0;C<E.length;C++)p(f,E[C]);if(v){let C=v.subTree;if(C.patchFlag>0&&C.patchFlag&2048&&(C=lm(C.children)||C),g===C){const N=v.vnode;ze(f,N,N.scopeId,N.slotScopeIds,v.parent)}}},Ee=(f,g,m,E,v,C,N,P,O=0)=>{for(let A=O;A<f.length;A++){const K=f[A]=P?Wn(f[A]):Ht(f[A]);I(null,K,g,m,E,v,C,N,P)}},F=(f,g,m,E,v,C,N)=>{const P=g.el=f.el;let{patchFlag:O,dynamicChildren:A,dirs:K}=g;O|=f.patchFlag&16;const q=f.props||Ae,G=g.props||Ae;let ie;m&&Ar(m,!1),(ie=G.onVnodeBeforeUpdate)&&en(ie,m,g,f),K&&Tr(g,f,m,"beforeUpdate"),m&&Ar(m,!0),Lr&&(O=0,N=!1,A=null);const ue=v&&g.type!=="foreignObject";if(A?(L(f.dynamicChildren,A,P,m,E,ue,C),Kl(f,g)):N||Mt(f,g,P,null,m,E,ue,C,!1),O>0){if(O&16)ce(P,g,q,G,m,E,v);else if(O&2&&q.class!==G.class&&i(P,"class",null,G.class,v),O&4&&i(P,"style",q.style,G.style,v),O&8){const be=g.dynamicProps;for(let Te=0;Te<be.length;Te++){const Be=be[Te],Bt=q[Be],ds=G[Be];(ds!==Bt||Be==="value")&&i(P,Be,Bt,ds,v,f.children,m,E,y)}}O&1&&f.children!==g.children&&u(P,g.children)}else!N&&A==null&&ce(P,g,q,G,m,E,v);((ie=G.onVnodeUpdated)||K)&&Pt(()=>{ie&&en(ie,m,g,f),K&&Tr(g,f,m,"updated")},E)},L=(f,g,m,E,v,C,N)=>{for(let P=0;P<g.length;P++){const O=f[P],A=g[P],K=O.el&&(O.type===st||!ei(O,A)||O.shapeFlag&70)?h(O.el):m;I(O,A,K,null,E,v,C,N,!0)}},ce=(f,g,m,E,v,C,N)=>{if(m!==E){if(m!==Ae)for(const P in m)!Yo(P)&&!(P in E)&&i(f,P,m[P],null,N,g.children,v,C,y);for(const P in E){if(Yo(P))continue;const O=E[P],A=m[P];O!==A&&P!=="value"&&i(f,P,A,O,N,g.children,v,C,y)}"value"in E&&i(f,"value",m.value,E.value)}},Oe=(f,g,m,E,v,C,N,P,O)=>{const A=g.el=f?f.el:a(""),K=g.anchor=f?f.anchor:a("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:ie}=g;(Lr||q&2048)&&(q=0,O=!1,G=null),ie&&(P=P?P.concat(ie):ie),f==null?(r(A,m,E),r(K,m,E),Ee(g.children,m,K,v,C,N,P,O)):q>0&&q&64&&G&&f.dynamicChildren?(L(f.dynamicChildren,G,m,v,C,N,P),Kl(f,g)):Mt(f,g,m,K,v,C,N,P,O)},Jt=(f,g,m,E,v,C,N,P,O)=>{g.slotScopeIds=P,f==null?g.shapeFlag&512?v.ctx.activate(g,m,E,N,O):Rt(g,m,E,v,C,N,O):Ge(f,g,O)},Rt=(f,g,m,E,v,C,N)=>{const P=f.component=dT(f,E,v);if(P.type.__hmrId&&GE(P),Xo(f),In(P,"mount"),eh(f)&&(P.ctx.renderer=j),In(P,"init"),pT(P),Tn(P,"init"),P.asyncDep){if(v&&v.registerDep(P,se),!f.el){const O=P.subTree=et(xt);b(null,O,g,m)}return}se(P,f,g,m,v,C,N),Zo(),Tn(P,"mount")},Ge=(f,g,m)=>{const E=g.component=f.component;if(uI(f,g,m))if(E.asyncDep&&!E.asyncResolved){Xo(g),J(E,g,m),Zo();return}else E.next=g,KE(E.update),E.update();else g.el=f.el,E.vnode=g},se=(f,g,m,E,v,C,N)=>{const P=()=>{if(f.isMounted){let{next:K,bu:q,u:G,parent:ie,vnode:ue}=f,be=K,Te;Xo(K||f.vnode),Ar(f,!1),K?(K.el=ue.el,J(f,K,N)):K=ue,q&&_s(q),(Te=K.props&&K.props.onVnodeBeforeUpdate)&&en(Te,ie,K,ue),Ar(f,!0),In(f,"render");const Be=el(f);Tn(f,"render");const Bt=f.subTree;f.subTree=Be,In(f,"patch"),I(Bt,Be,h(Bt.el),V(Bt),f,v,C),Tn(f,"patch"),K.el=Be.el,be===null&&hI(f,Be.el),G&&Pt(G,v),(Te=K.props&&K.props.onVnodeUpdated)&&Pt(()=>en(Te,ie,K,ue),v),im(f),Zo()}else{let K;const{el:q,props:G}=g,{bm:ie,m:ue,parent:be}=f,Te=ea(g);if(Ar(f,!1),ie&&_s(ie),!Te&&(K=G&&G.onVnodeBeforeMount)&&en(K,be,g),Ar(f,!0),q&&xe){const Be=()=>{In(f,"render"),f.subTree=el(f),Tn(f,"render"),In(f,"hydrate"),xe(q,f.subTree,f,v,null),Tn(f,"hydrate")};Te?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Be()):Be()}else{In(f,"render");const Be=f.subTree=el(f);Tn(f,"render"),In(f,"patch"),I(null,Be,m,E,f,v,C),Tn(f,"patch"),g.el=Be.el}if(ue&&Pt(ue,v),!Te&&(K=G&&G.onVnodeMounted)){const Be=g;Pt(()=>en(K,be,Be),v)}(g.shapeFlag&256||be&&ea(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&Pt(f.a,v),f.isMounted=!0,eI(f),g=m=E=null}},O=f.effect=new Ku(P,()=>ac(A),f.scope),A=f.update=()=>O.run();A.id=f.uid,Ar(f,!0),O.onTrack=f.rtc?K=>_s(f.rtc,K):void 0,O.onTrigger=f.rtg?K=>_s(f.rtg,K):void 0,A.ownerInstance=f,A()},J=(f,g,m)=>{g.component=f;const E=f.vnode.props;f.vnode=g,f.next=null,WI(f,g.props,E,m),ZI(f,g.children,m),rs(),Qd(),ss()},Mt=(f,g,m,E,v,C,N,P,O=!1)=>{const A=f&&f.children,K=f?f.shapeFlag:0,q=g.children,{patchFlag:G,shapeFlag:ie}=g;if(G>0){if(G&128){Un(A,q,m,E,v,C,N,P,O);return}else if(G&256){Ir(A,q,m,E,v,C,N,P,O);return}}ie&8?(K&16&&y(A,v,C),q!==A&&u(m,q)):K&16?ie&16?Un(A,q,m,E,v,C,N,P,O):y(A,v,C,!0):(K&8&&u(m,""),ie&16&&Ee(q,m,E,v,C,N,P,O))},Ir=(f,g,m,E,v,C,N,P,O)=>{f=f||As,g=g||As;const A=f.length,K=g.length,q=Math.min(A,K);let G;for(G=0;G<q;G++){const ie=g[G]=O?Wn(g[G]):Ht(g[G]);I(f[G],ie,m,null,v,C,N,P,O)}A>K?y(f,v,C,!0,!1,q):Ee(g,m,E,v,C,N,P,O,q)},Un=(f,g,m,E,v,C,N,P,O)=>{let A=0;const K=g.length;let q=f.length-1,G=K-1;for(;A<=q&&A<=G;){const ie=f[A],ue=g[A]=O?Wn(g[A]):Ht(g[A]);if(ei(ie,ue))I(ie,ue,m,null,v,C,N,P,O);else break;A++}for(;A<=q&&A<=G;){const ie=f[q],ue=g[G]=O?Wn(g[G]):Ht(g[G]);if(ei(ie,ue))I(ie,ue,m,null,v,C,N,P,O);else break;q--,G--}if(A>q){if(A<=G){const ie=G+1,ue=ie<K?g[ie].el:E;for(;A<=G;)I(null,g[A]=O?Wn(g[A]):Ht(g[A]),m,ue,v,C,N,P,O),A++}}else if(A>G)for(;A<=q;)Lt(f[A],v,C,!0),A++;else{const ie=A,ue=A,be=new Map;for(A=ue;A<=G;A++){const Et=g[A]=O?Wn(g[A]):Ht(g[A]);Et.key!=null&&(be.has(Et.key)&&S("Duplicate keys found during update:",JSON.stringify(Et.key),"Make sure keys are unique."),be.set(Et.key,A))}let Te,Be=0;const Bt=G-ue+1;let ds=!1,Ld=0;const Xs=new Array(Bt);for(A=0;A<Bt;A++)Xs[A]=0;for(A=ie;A<=q;A++){const Et=f[A];if(Be>=Bt){Lt(Et,v,C,!0);continue}let Zt;if(Et.key!=null)Zt=be.get(Et.key);else for(Te=ue;Te<=G;Te++)if(Xs[Te-ue]===0&&ei(Et,g[Te])){Zt=Te;break}Zt===void 0?Lt(Et,v,C,!0):(Xs[Zt-ue]=A+1,Zt>=Ld?Ld=Zt:ds=!0,I(Et,g[Zt],m,null,v,C,N,P,O),Be++)}const Ud=ds?rT(Xs):As;for(Te=Ud.length-1,A=Bt-1;A>=0;A--){const Et=ue+A,Zt=g[Et],Fd=Et+1<K?g[Et+1].el:E;Xs[A]===0?I(null,Zt,m,Fd,v,C,N,P,O):ds&&(Te<0||A!==Ud[Te]?Xt(Zt,m,Fd,2):Te--)}}},Xt=(f,g,m,E,v=null)=>{const{el:C,type:N,transition:P,children:O,shapeFlag:A}=f;if(A&6){Xt(f.component.subTree,g,m,E);return}if(A&128){f.suspense.move(g,m,E);return}if(A&64){N.move(f,g,m,j);return}if(N===st){r(C,g,m);for(let q=0;q<O.length;q++)Xt(O[q],g,m,E);r(f.anchor,g,m);return}if(N===na){z(f,g,m);return}if(E!==2&&A&1&&P)if(E===0)P.beforeEnter(C),r(C,g,m),Pt(()=>P.enter(C),v);else{const{leave:q,delayLeave:G,afterLeave:ie}=P,ue=()=>r(C,g,m),be=()=>{q(C,()=>{ue(),ie&&ie()})};G?G(C,ue,be):be()}else r(C,g,m)},Lt=(f,g,m,E=!1,v=!1)=>{const{type:C,props:N,ref:P,children:O,dynamicChildren:A,shapeFlag:K,patchFlag:q,dirs:G}=f;if(P!=null&&Wl(P,null,m,f,!0),K&256){g.ctx.deactivate(f);return}const ie=K&1&&G,ue=!ea(f);let be;if(ue&&(be=N&&N.onVnodeBeforeUnmount)&&en(be,g,f),K&6)$n(f.component,m,E);else{if(K&128){f.suspense.unmount(m,E);return}ie&&Tr(f,null,g,"beforeUnmount"),K&64?f.type.remove(f,g,m,v,j,E):A&&(C!==st||q>0&&q&64)?y(A,g,m,!1,!0):(C===st&&q&384||!v&&K&16)&&y(O,g,m),E&&Fn(f)}(ue&&(be=N&&N.onVnodeUnmounted)||ie)&&Pt(()=>{be&&en(be,g,f),ie&&Tr(f,null,g,"unmounted")},m)},Fn=f=>{const{type:g,el:m,anchor:E,transition:v}=f;if(g===st){f.patchFlag>0&&f.patchFlag&2048&&v&&!v.persisted?f.children.forEach(N=>{N.type===xt?s(N.el):Fn(N)}):ko(m,E);return}if(g===na){U(f);return}const C=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:P}=v,O=()=>N(m,C);P?P(f.el,C,O):O()}else C()},ko=(f,g)=>{let m;for(;f!==g;)m=d(f),s(f),f=m;s(g)},$n=(f,g,m)=>{f.type.__hmrId&&QE(f);const{bum:E,scope:v,update:C,subTree:N,um:P}=f;E&&_s(E),v.stop(),C&&(C.active=!1,Lt(N,f,g,m)),P&&Pt(P,g),Pt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),nI(f)},y=(f,g,m,E=!1,v=!1,C=0)=>{for(let N=C;N<f.length;N++)Lt(f[N],g,m,E,v)},V=f=>f.shapeFlag&6?V(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),M=(f,g,m)=>{f==null?g._vnode&&Lt(g._vnode,null,null,!0):I(g._vnode||null,f,g,null,null,null,m),Qd(),tm(),g._vnode=f},j={p:I,um:Lt,m:Xt,r:Fn,mt:Rt,mc:Ee,pc:Mt,pbc:L,n:V,o:t};let de,xe;return e&&([de,xe]=e(j)),{render:M,hydrate:de,createApp:jI(M,de)}}function Ar({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Kl(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Wn(s[i]),a.el=o.el),n||Kl(o,a)),a.type===oo&&(a.el=o.el),a.type===xt&&!a.el&&(a.el=o.el)}}function rT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const sT=t=>t.__isTeleport,st=Symbol.for("v-fgt"),oo=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),na=Symbol.for("v-stc"),yi=[];let Wt=null;function ne(t=!1){yi.push(Wt=t?null:[])}function iT(){yi.pop(),Wt=yi[yi.length-1]||null}let Ni=1;function uf(t){Ni+=t}function Tm(t){return t.dynamicChildren=Ni>0?Wt||As:null,iT(),Ni>0&&Wt&&Wt.push(t),t}function _e(t,e,n,r,s,i){return Tm(H(t,e,n,r,s,i,!0))}function Nt(t,e,n,r,s){return Tm(et(t,e,n,r,s,!0))}function Di(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return e.shapeFlag&6&&ys.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const oT=(...t)=>aT(...t),hc="__vInternal",Am=({key:t})=>t??null,ra=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||Re(t)||X(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,r=0,s=null,i=t===st?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Am(e),ref:e&&ra(e),scopeId:cm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return a?(ih(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),c.key!==c.key&&S("VNode created with invalid key (NaN). VNode type:",c.type),Ni>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const et=oT;function aT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===CI)&&(t||S(`Invalid vnode type when creating vnode: ${t}.`),t=xt),Di(t)){const a=ur(t,e,!0);return n&&ih(a,n),Ni>0&&!i&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(t)]=a:Wt.push(a)),a.patchFlag|=-2,a}if(Sm(t)&&(t=t.__vccOpts),e){e=cT(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=xs(a)),we(c)&&(Ea(c)&&!Y(c)&&(c=De({},c)),e.style=Hu(c))}const o=Le(t)?1:dI(t)?128:sT(t)?64:we(t)?4:X(t)?2:0;return o&4&&Ea(t)&&(t=Z(t),S("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),H(t,e,n,r,s,o,i,!0)}function cT(t){return t?Ea(t)||hc in t?De({},t):t:null}function ur(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?lT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Am(a),ref:e&&e.ref?n&&s?Y(s)?s.concat(ra(e)):[s,ra(e)]:ra(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&Y(o)?o.map(bm):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ur(t.ssContent),ssFallback:t.ssFallback&&ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function bm(t){const e=ur(t);return Y(t.children)&&(e.children=t.children.map(bm)),e}function sh(t=" ",e=0){return et(oo,null,t,e)}function zr(t="",e=!1){return e?(ne(),Nt(xt,null,t)):et(xt,null,t)}function Ht(t){return t==null||typeof t=="boolean"?et(xt):Y(t)?et(st,null,t.slice()):typeof t=="object"?Wn(t):et(oo,null,String(t))}function Wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ur(t)}function ih(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ih(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(hc in e)?e._ctx=pt:s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),r&64?(n=16,e=[sh(e)]):n=8);t.children=e,t.shapeFlag|=n}function lT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xs([e.class,r.class]));else if(s==="style")e.style=Hu([e.style,r.style]);else if(ro(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){Gt(t,e,7,[n,r])}const uT=mm();let hT=0;function dT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uT,i={uid:hT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ym(r,s),emitsOptions:am(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=OI(i),i.root=e?e.root:i,i.emit=oI.bind(null,i),t.ce&&t.ce(i),i}let We=null;const oh=()=>We||pt;let ah,fs,hf="__VUE_INSTANCE_SETTERS__";(fs=_a()[hf])||(fs=_a()[hf]=[]),fs.push(t=>We=t),ah=t=>{fs.length>1?fs.forEach(e=>e(t)):fs[0](t)};const Ns=t=>{ah(t),t.scope.on()},Fr=()=>{We&&We.scope.off(),ah(null)},fT=_r("slot,component");function zl(t,e){const n=e.isNativeTag||Ig;(fT(t)||n(t))&&S("Do not use built-in or reserved HTML elements as component id: "+t)}function Rm(t){return t.vnode.shapeFlag&4}let Vi=!1;function pT(t,e=!1){Vi=e;const{props:n,children:r}=t.vnode,s=Rm(t);qI(t,n,s,e),XI(t,r);const i=s?gT(t,e):void 0;return Vi=!1,i}function gT(t,e){var n;const r=t.type;{if(r.name&&zl(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)zl(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)hm(i[o])}r.compilerOptions&&mT()&&S('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Rn(new Proxy(t.ctx,pm)),xI(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?vT(t):null;Ns(t),rs();const o=kn(s,t,0,[ai(t.props),i]);if(ss(),Fr(),ju(o)){if(o.then(Fr,Fr),e)return o.then(a=>{df(t,a,e)}).catch(a=>{oc(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!=null?n:"Anonymous";S(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else df(t,o,e)}else Pm(t,e)}function df(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)?(Di(e)&&S("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=Qg(e),NI(t)):e!==void 0&&S(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Pm(t,n)}let Gl;const mT=()=>!Gl;function Pm(t,e,n){const r=t.type;if(!t.render){if(!e&&Gl&&!r.render){const s=r.template||nh(t).template;if(s){In(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=De(De({isCustomElement:i,delimiters:a},o),c);r.render=Gl(s,l),Tn(t,"compile")}}t.render=r.render||St}Ns(t),rs(),VI(t),ss(),Fr(),!r.render&&t.render===St&&!e&&(r.template?S('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):S("Component is missing template or render function."))}function _T(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Aa(),yt(t,"get","$attrs"),e[n]},set(){return S("setupContext.attrs is readonly."),!1},deleteProperty(){return S("setupContext.attrs is readonly."),!1}}))}function yT(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return yt(t,"get","$slots"),e[n]}}))}function vT(t){return Object.freeze({get attrs(){return _T(t)},get slots(){return yT(t)},get emit(){return(n,...r)=>t.emit(n,...r)},expose:n=>{if(t.exposed&&S("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(Y(n)?r="array":Re(n)&&(r="ref")),r!=="object"&&S(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}}})}function dc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qg(Rn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ur)return Ur[n](t)},has(e,n){return n in e||n in Ur}}))}const wT=/(?:^|[-_])(\w)/g,ET=t=>t.replace(wT,e=>e.toUpperCase()).replace(/[-_]/g,"");function ch(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function fc(t,e,n=!1){let r=ch(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?ET(r):n?"App":"Anonymous"}function Sm(t){return X(t)&&"__vccOpts"in t}const Ve=(t,e)=>UE(t,e,Vi);function Cm(t,e,n){const r=arguments.length;return r===2?we(e)&&!Y(e)?Di(e)?et(t,null,[e]):et(t,e):et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Di(n)&&(n=[n]),et(t,e,n))}const IT=Symbol.for("v-scx"),TT=()=>{{const t=ln(IT);return t||S("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function nl(t){return!!(t&&t.__v_isShallow)}function AT(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return we(h)?h.__isVue?["div",t,"VueInstance"]:Re(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:zt(h)?["div",{},["span",t,nl(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${lr(h)?" (readonly)":""}`]:lr(h)?["div",{},["span",t,nl(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",Z(h.props))),h.setupState!==Ae&&d.push(o("setup",h.setupState)),h.data!==Ae&&d.push(o("data",Z(h.data)));const p=c(h,"computed");p&&d.push(o("computed",p));const _=c(h,"inject");return _&&d.push(o("injected",_)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=De({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",r,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:we(h)?["object",{object:d?Z(h):h}]:["span",n,String(h)]}function c(h,d){const p=h.type;if(X(p))return;const _={};for(const I in h.ctx)l(p,I,d)&&(_[I]=h.ctx[I]);return _}function l(h,d,p){const _=h[p];if(Y(_)&&_.includes(d)||we(_)&&d in _||h.extends&&l(h.extends,d,p)||h.mixins&&h.mixins.some(I=>l(I,d,p)))return!0}function u(h){return nl(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const ff="3.3.4",bT="http://www.w3.org/2000/svg",Sr=typeof document<"u"?document:null,pf=Sr&&Sr.createElement("template"),RT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Sr.createElementNS(bT,t):Sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sr.createTextNode(t),createComment:t=>Sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{pf.innerHTML=r?`<svg>${t}</svg>`:t;const a=pf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function PT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ST(t,e,n){const r=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const i in e)n[i]==null&&Ql(r,i,"");for(const i in n)Ql(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const CT=/[^\\];\s*$/,gf=/\s*!important$/;function Ql(t,e,n){if(Y(n))n.forEach(r=>Ql(t,e,r));else if(n==null&&(n=""),CT.test(n)&&S(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=kT(t,e);gf.test(n)?t.setProperty(ar(r),n.replace(gf,""),"important"):t[r]=n}}const mf=["Webkit","Moz","ms"],rl={};function kT(t,e){const n=rl[e];if(n)return n;let r=mn(e);if(r!=="filter"&&r in t)return rl[e]=r;r=Wr(r);for(let s=0;s<mf.length;s++){const i=mf[s]+r;if(i in t)return rl[e]=i}return e}const _f="http://www.w3.org/1999/xlink";function OT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_f,e.slice(6,e.length)):t.setAttributeNS(_f,e,n);else{const i=tE(e);n==null||i&&!Rg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Rg(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch(l){c||S(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,l)}c&&t.removeAttribute(e)}function vs(t,e,n,r){t.addEventListener(e,n,r)}function NT(t,e,n,r){t.removeEventListener(e,n,r)}function DT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=VT(e);if(r){const l=i[e]=UT(r,s);vs(t,a,l,c)}else o&&(NT(t,a,o,c),i[e]=void 0)}}const yf=/(?:Once|Passive|Capture)$/;function VT(t){let e;if(yf.test(t)){e={};let r;for(;r=t.match(yf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ar(t.slice(2)),e]}let sl=0;const MT=Promise.resolve(),LT=()=>sl||(MT.then(()=>sl=0),sl=Date.now());function UT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(FT(r,n.value),e,5,[r])};return n.value=t,n.attached=LT(),n}function FT(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const vf=/^on[a-z]/,$T=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?PT(t,r,s):e==="style"?ST(t,n,r):ro(e)?ga(e)||DT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jT(t,e,r,s))?xT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),OT(t,e,r,s))};function jT(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&vf.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vf.test(e)&&Le(n)?!1:e in t}const wf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>_s(e,n):e};function BT(t){t.target.composing=!0}function Ef(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=wf(s);const i=r||s.props&&s.props.type==="number";vs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=xl(a)),t._assign(a)}),n&&vs(t,"change",()=>{t.value=t.value.trim()}),e||(vs(t,"compositionstart",BT),vs(t,"compositionend",Ef),vs(t,"change",Ef))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=wf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&xl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},qT=["ctrl","shift","alt","meta"],HT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qT.some(n=>t[`${n}Key`]&&!e.includes(n))},lh=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=HT[e[s]];if(i&&i(n,e))return}return t(n,...r)},WT=De({patchProp:$T},RT);let If;function KT(){return If||(If=tT(WT))}const zT=(...t)=>{const e=KT().createApp(...t);GT(e),QT(e);const{mount:n}=e;return e.mount=r=>{const s=YT(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function GT(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>Xw(e)||Zw(e),writable:!1})}function QT(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){S("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return S(r),n},set(){S(r)}})}}function YT(t){if(Le(t)){const e=document.querySelector(t);return e||S(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&S('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function JT(){AT()}JT();var XT=!1;function Lo(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function il(t,e){if(Array.isArray(t)){t.splice(e,1);return}delete t[e]}function ZT(){return km().__VUE_DEVTOOLS_GLOBAL_HOOK__}function km(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const eA=typeof Proxy=="function",tA="devtools-plugin:setup",nA="plugin:settings:set";let ps,Yl;function rA(){var t;return ps!==void 0||(typeof window<"u"&&window.performance?(ps=!0,Yl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ps=!0,Yl=global.perf_hooks.performance):ps=!1),ps}function sA(){return rA()?Yl.now():Date.now()}class iA{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return sA()}},n&&n.on(nA,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function uh(t,e){const n=t,r=km(),s=ZT(),i=eA&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(tA,t,e);else{const o=i?new iA(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Jl;const Mi=t=>Jl=t,Om=Symbol("pinia");function Gr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var un;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(un||(un={}));const pc=typeof window<"u",Sa=pc,Tf=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function oA(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function hh(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){Dm(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function xm(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function sa(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const ia=typeof navigator=="object"?navigator:{userAgent:""},Nm=(()=>/Macintosh/.test(ia.userAgent)&&/AppleWebKit/.test(ia.userAgent)&&!/Safari/.test(ia.userAgent))(),Dm=pc?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!Nm?aA:"msSaveOrOpenBlob"in ia?cA:lA:()=>{};function aA(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener",typeof t=="string"?(r.href=t,r.origin!==location.origin?xm(r.href)?hh(t,e,n):(r.target="_blank",sa(r)):sa(r)):(r.href=URL.createObjectURL(t),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){sa(r)},0))}function cA(t,e="download",n){if(typeof t=="string")if(xm(t))hh(t,e,n);else{const r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){sa(r)})}else navigator.msSaveOrOpenBlob(oA(t,n),e)}function lA(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof t=="string")return hh(t,e,n);const s=t.type==="application/octet-stream",i=/constructor/i.test(String(Tf.HTMLElement))||"safari"in Tf,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||s&&i||Nm)&&typeof FileReader<"u"){const a=new FileReader;a.onloadend=function(){let c=a.result;if(typeof c!="string")throw r=null,new Error("Wrong reader.result type");c=o?c:c.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=c:location.assign(c),r=null},a.readAsDataURL(t)}else{const a=URL.createObjectURL(t);r?r.location.assign(a):location.href=a,r=null,setTimeout(function(){URL.revokeObjectURL(a)},4e4)}}function Ze(t,e){const n="🍍 "+t;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(n,e):e==="error"?console.error(n):e==="warn"?console.warn(n):console.log(n)}function dh(t){return"_a"in t&&"install"in t}function Vm(){if(!("clipboard"in navigator))return Ze("Your browser doesn't support the Clipboard API","error"),!0}function Mm(t){return t instanceof Error&&t.message.toLowerCase().includes("document is not focused")?(Ze('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function uA(t){if(!Vm())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),Ze("Global state copied to clipboard.")}catch(e){if(Mm(e))return;Ze("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function hA(t){if(!Vm())try{Lm(t,JSON.parse(await navigator.clipboard.readText())),Ze("Global state pasted from clipboard.")}catch(e){if(Mm(e))return;Ze("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function dA(t){try{Dm(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){Ze("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let wn;function fA(){wn||(wn=document.createElement("input"),wn.type="file",wn.accept=".json");function t(){return new Promise((e,n)=>{wn.onchange=async()=>{const r=wn.files;if(!r)return e(null);const s=r.item(0);return e(s?{text:await s.text(),file:s}:null)},wn.oncancel=()=>e(null),wn.onerror=n,wn.click()})}return t}async function pA(t){try{const n=await fA()();if(!n)return;const{text:r,file:s}=n;Lm(t,JSON.parse(r)),Ze(`Global state imported from "${s.name}".`)}catch(e){Ze("Failed to import the state from JSON. Check the console for more details.","error"),console.error(e)}}function Lm(t,e){for(const n in e){const r=t.state.value[n];r&&Object.assign(r,e[n])}}function qt(t){return{_custom:{display:t}}}const Um="🍍 Pinia (root)",Xl="_root";function gA(t){return dh(t)?{id:Xl,label:Um}:{id:t.$id,label:t.$id}}function mA(t){if(dh(t)){const n=Array.from(t._s.keys()),r=t._s;return{state:n.map(i=>({editable:!0,key:i,value:t.state.value[i]})),getters:n.filter(i=>r.get(i)._getters).map(i=>{const o=r.get(i);return{editable:!1,key:i,value:o._getters.reduce((a,c)=>(a[c]=o[c],a),{})}})}}const e={state:Object.keys(t.$state).map(n=>({editable:!0,key:n,value:t.$state[n]}))};return t._getters&&t._getters.length&&(e.getters=t._getters.map(n=>({editable:!1,key:n,value:t[n]}))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map(n=>({editable:!0,key:n,value:t[n]}))),e}function _A(t){return t?Array.isArray(t)?t.reduce((e,n)=>(e.keys.push(n.key),e.operations.push(n.type),e.oldValue[n.key]=n.oldValue,e.newValue[n.key]=n.newValue,e),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:qt(t.type),key:qt(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function yA(t){switch(t){case un.direct:return"mutation";case un.patchFunction:return"$patch";case un.patchObject:return"$patch";default:return"unknown"}}let Is=!0;const oa=[],Rr="pinia:mutations",lt="pinia",{assign:vA}=Object,Ca=t=>"🍍 "+t;function wA(t,e){uh({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:oa,app:t},n=>{typeof n.now!="function"&&Ze("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:Rr,label:"Pinia 🍍",color:15064968}),n.addInspector({id:lt,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{uA(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await hA(e),n.sendInspectorTree(lt),n.sendInspectorState(lt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{dA(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await pA(e),n.sendInspectorTree(lt),n.sendInspectorState(lt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:r=>{const s=e._s.get(r);s?typeof s.$reset!="function"?Ze(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`,"warn"):(s.$reset(),Ze(`Store "${r}" reset.`)):Ze(`Cannot reset "${r}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent((r,s)=>{const i=r.componentInstance&&r.componentInstance.proxy;if(i&&i._pStores){const o=r.componentInstance.proxy._pStores;Object.values(o).forEach(a=>{r.instanceData.state.push({type:Ca(a.$id),key:"state",editable:!0,value:a._isOptionsAPI?{_custom:{value:Z(a.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>a.$reset()}]}}:Object.keys(a.$state).reduce((c,l)=>(c[l]=a.$state[l],c),{})}),a._getters&&a._getters.length&&r.instanceData.state.push({type:Ca(a.$id),key:"getters",editable:!1,value:a._getters.reduce((c,l)=>{try{c[l]=a[l]}catch(u){c[l]=u}return c},{})})})}}),n.on.getInspectorTree(r=>{if(r.app===t&&r.inspectorId===lt){let s=[e];s=s.concat(Array.from(e._s.values())),r.rootNodes=(r.filter?s.filter(i=>"$id"in i?i.$id.toLowerCase().includes(r.filter.toLowerCase()):Um.toLowerCase().includes(r.filter.toLowerCase())):s).map(gA)}}),n.on.getInspectorState(r=>{if(r.app===t&&r.inspectorId===lt){const s=r.nodeId===Xl?e:e._s.get(r.nodeId);if(!s)return;s&&(r.state=mA(s))}}),n.on.editInspectorState((r,s)=>{if(r.app===t&&r.inspectorId===lt){const i=r.nodeId===Xl?e:e._s.get(r.nodeId);if(!i)return Ze(`store "${r.nodeId}" not found`,"error");const{path:o}=r;dh(i)?o.unshift("state"):(o.length!==1||!i._customProperties.has(o[0])||o[0]in i.$state)&&o.unshift("$state"),Is=!1,r.set(i,o,r.state.value),Is=!0}}),n.on.editComponentState(r=>{if(r.type.startsWith("🍍")){const s=r.type.replace(/^🍍\s*/,""),i=e._s.get(s);if(!i)return Ze(`store "${s}" not found`,"error");const{path:o}=r;if(o[0]!=="state")return Ze(`Invalid path for store "${s}":
${o}
Only state can be modified.`);o[0]="$state",Is=!1,r.set(i,o,r.state.value),Is=!0}})})}function EA(t,e){oa.includes(Ca(e.$id))||oa.push(Ca(e.$id)),uh({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:oa,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},n=>{const r=typeof n.now=="function"?n.now.bind(n):Date.now;e.$onAction(({after:o,onError:a,name:c,args:l})=>{const u=Fm++;n.addTimelineEvent({layerId:Rr,event:{time:r(),title:"🛫 "+c,subtitle:"start",data:{store:qt(e.$id),action:qt(c),args:l},groupId:u}}),o(h=>{er=void 0,n.addTimelineEvent({layerId:Rr,event:{time:r(),title:"🛬 "+c,subtitle:"end",data:{store:qt(e.$id),action:qt(c),args:l,result:h},groupId:u}})}),a(h=>{er=void 0,n.addTimelineEvent({layerId:Rr,event:{time:r(),logType:"error",title:"💥 "+c,subtitle:"end",data:{store:qt(e.$id),action:qt(c),args:l,error:h},groupId:u}})})},!0),e._customProperties.forEach(o=>{rr(()=>Ne(e[o]),(a,c)=>{n.notifyComponentUpdate(),n.sendInspectorState(lt),Is&&n.addTimelineEvent({layerId:Rr,event:{time:r(),title:"Change",subtitle:o,data:{newValue:a,oldValue:c},groupId:er}})},{deep:!0})}),e.$subscribe(({events:o,type:a},c)=>{if(n.notifyComponentUpdate(),n.sendInspectorState(lt),!Is)return;const l={time:r(),title:yA(a),data:vA({store:qt(e.$id)},_A(o)),groupId:er};a===un.patchFunction?l.subtitle="⤵️":a===un.patchObject?l.subtitle="🧩":o&&!Array.isArray(o)&&(l.subtitle=o.type),o&&(l.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:o}}),n.addTimelineEvent({layerId:Rr,event:l})},{detached:!0,flush:"sync"});const s=e._hotUpdate;e._hotUpdate=Rn(o=>{s(o),n.addTimelineEvent({layerId:Rr,event:{time:r(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:qt(e.$id),info:qt("HMR update")}}}),n.notifyComponentUpdate(),n.sendInspectorTree(lt),n.sendInspectorState(lt)});const{$dispose:i}=e;e.$dispose=()=>{i(),n.notifyComponentUpdate(),n.sendInspectorTree(lt),n.sendInspectorState(lt),n.getSettings().logStoreChanges&&Ze(`Disposed "${e.$id}" store 🗑`)},n.notifyComponentUpdate(),n.sendInspectorTree(lt),n.sendInspectorState(lt),n.getSettings().logStoreChanges&&Ze(`"${e.$id}" store installed 🆕`)})}let Fm=0,er;function Af(t,e,n){const r=e.reduce((s,i)=>(s[i]=Z(t)[i],s),{});for(const s in r)t[s]=function(){const i=Fm,o=n?new Proxy(t,{get(...c){return er=i,Reflect.get(...c)},set(...c){return er=i,Reflect.set(...c)}}):t;er=i;const a=r[s].apply(o,arguments);return er=void 0,a}}function IA({app:t,store:e,options:n}){if(e.$id.startsWith("__hot:"))return;e._isOptionsAPI=!!n.state,Af(e,Object.keys(n.actions),e._isOptionsAPI);const r=e._hotUpdate;Z(e)._hotUpdate=function(s){r.apply(this,arguments),Af(e,Object.keys(s._hmrPayload.actions),!!e._isOptionsAPI)},EA(t,e)}function TA(){const t=Cg(!0),e=t.run(()=>Pe({}));let n=[],r=[];const s=Rn({install(i){Mi(s),s._a=i,i.provide(Om,s),i.config.globalProperties.$pinia=s,Sa&&wA(i,s),r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!XT?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return Sa&&typeof Proxy<"u"&&s.use(IA),s}function $m(t,e){for(const n in e){const r=e[n];if(!(n in t))continue;const s=t[n];Gr(s)&&Gr(r)&&!Re(r)&&!zt(r)?t[n]=$m(s,r):t[n]=r}return t}const AA=()=>{};function bf(t,e,n,r=AA){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&kg()&&rE(s),s}function gs(t,...e){t.slice().forEach(n=>{n(...e)})}const bA=t=>t();function Zl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Gr(s)&&Gr(r)&&t.hasOwnProperty(n)&&!Re(r)&&!zt(r)?t[n]=Zl(s,r):t[n]=r}return t}const RA=Symbol("pinia:skipHydration");function PA(t){return!Gr(t)||!t.hasOwnProperty(RA)}const{assign:Ut}=Object;function Rf(t){return!!(Re(t)&&t.effect)}function Pf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){!a&&!r&&(n.state.value[t]=s?s():{});const u=Gd(r?Pe(s?s():{}).value:n.state.value[t]);return Ut(u,i,Object.keys(o||{}).reduce((h,d)=>(d in u&&console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${t}".`),h[d]=Rn(Ve(()=>{Mi(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=eu(t,l,e,n,r,!0),c}function eu(t,e,n={},r,s,i){let o;const a=Ut({actions:{}},n);if(!r._e.active)throw new Error("Pinia destroyed");const c={deep:!0};c.onTrigger=F=>{l?p=F:l==!1&&!B._hotUpdating&&(Array.isArray(p)?p.push(F):console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let l,u,h=[],d=[],p;const _=r.state.value[t];!i&&!_&&!s&&(r.state.value[t]={});const I=Pe({});let w;function b(F){let L;l=u=!1,p=[],typeof F=="function"?(F(r.state.value[t]),L={type:un.patchFunction,storeId:t,events:p}):(Zl(r.state.value[t],F),L={type:un.patchObject,payload:F,storeId:t,events:p});const ce=w=Symbol();Ia().then(()=>{w===ce&&(l=!0)}),u=!0,gs(h,L,r.state.value[t])}const x=i?function(){const{state:L}=n,ce=L?L():{};this.$patch(Oe=>{Ut(Oe,ce)})}:()=>{throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`)};function k(){o.stop(),h=[],d=[],r._s.delete(t)}function z(F,L){return function(){Mi(r);const ce=Array.from(arguments),Oe=[],Jt=[];function Rt(J){Oe.push(J)}function Ge(J){Jt.push(J)}gs(d,{args:ce,name:F,store:B,after:Rt,onError:Ge});let se;try{se=L.apply(this&&this.$id===t?this:B,ce)}catch(J){throw gs(Jt,J),J}return se instanceof Promise?se.then(J=>(gs(Oe,J),J)).catch(J=>(gs(Jt,J),Promise.reject(J))):(gs(Oe,se),se)}}const U=Rn({actions:{},getters:{},state:[],hotState:I}),ge={_p:r,$id:t,$onAction:bf.bind(null,d),$patch:b,$reset:x,$subscribe(F,L={}){const ce=bf(h,F,L.detached,()=>Oe()),Oe=o.run(()=>rr(()=>r.state.value[t],Jt=>{(L.flush==="sync"?u:l)&&F({storeId:t,type:un.direct,events:p},Jt)},Ut({},c,L)));return ce},$dispose:k},B=so(Ut({_hmrPayload:U,_customProperties:Rn(new Set)},ge));r._s.set(t,B);const ze=r._a&&r._a.runWithContext||bA,Ee=r._e.run(()=>(o=Cg(),ze(()=>o.run(e))));for(const F in Ee){const L=Ee[F];if(Re(L)&&!Rf(L)||zt(L))s?Lo(I.value,F,Jo(Ee,F)):i||(_&&PA(L)&&(Re(L)?L.value=_[F]:Zl(L,_[F])),r.state.value[t][F]=L),U.state.push(F);else if(typeof L=="function"){const ce=s?L:z(F,L);Ee[F]=ce,U.actions[F]=L,a.actions[F]=L}else Rf(L)&&(U.getters[F]=i?n.getters[F]:L,pc&&(Ee._getters||(Ee._getters=Rn([]))).push(F))}if(Ut(B,Ee),Ut(Z(B),Ee),Object.defineProperty(B,"$state",{get:()=>s?I.value:r.state.value[t],set:F=>{if(s)throw new Error("cannot set hotState");b(L=>{Ut(L,F)})}}),B._hotUpdate=Rn(F=>{B._hotUpdating=!0,F._hmrPayload.state.forEach(L=>{if(L in B.$state){const ce=F.$state[L],Oe=B.$state[L];typeof ce=="object"&&Gr(ce)&&Gr(Oe)?$m(ce,Oe):F.$state[L]=Oe}Lo(B,L,Jo(F.$state,L))}),Object.keys(B.$state).forEach(L=>{L in F.$state||il(B,L)}),l=!1,u=!1,r.state.value[t]=Jo(F._hmrPayload,"hotState"),u=!0,Ia().then(()=>{l=!0});for(const L in F._hmrPayload.actions){const ce=F[L];Lo(B,L,z(L,ce))}for(const L in F._hmrPayload.getters){const ce=F._hmrPayload.getters[L],Oe=i?Ve(()=>(Mi(r),ce.call(B,B))):ce;Lo(B,L,Oe)}Object.keys(B._hmrPayload.getters).forEach(L=>{L in F._hmrPayload.getters||il(B,L)}),Object.keys(B._hmrPayload.actions).forEach(L=>{L in F._hmrPayload.actions||il(B,L)}),B._hmrPayload=F._hmrPayload,B._getters=F._getters,B._hotUpdating=!1}),Sa){const F={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach(L=>{Object.defineProperty(B,L,Ut({value:B[L]},F))})}return r._p.forEach(F=>{if(Sa){const L=o.run(()=>F({store:B,app:r._a,pinia:r,options:a}));Object.keys(L||{}).forEach(ce=>B._customProperties.add(ce)),Ut(B,L)}else Ut(B,o.run(()=>F({store:B,app:r._a,pinia:r,options:a})))}),B.$state&&typeof B.$state=="object"&&typeof B.$state.constructor=="function"&&!B.$state.constructor.toString().includes("[native code]")&&console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${B.$id}".`),_&&i&&n.hydrate&&n.hydrate(B.$state,_),l=!0,u=!0,B}function fh(t,e,n){let r,s;const i=typeof e=="function";if(typeof t=="string")r=t,s=i?n:e;else if(s=t,r=t.id,typeof r!="string")throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');function o(a,c){const l=BI();if(a=a||(l?ln(Om,null):null),a&&Mi(a),!Jl)throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);a=Jl,a._s.has(r)||(i?eu(r,e,s,a):Pf(r,s,a),o._pinia=a);const u=a._s.get(r);if(c){const h="__hot:"+r,d=i?eu(h,e,s,a,!0):Pf(h,Ut({},s),a,!0);c._hotUpdate(d),delete a.state.value[h],a._s.delete(h)}if(pc){const h=oh();if(h&&h.proxy&&!c){const d=h.proxy,p="_pStores"in d?d._pStores:d._pStores={};p[r]=u}}return u}return o.$id=r,o}function ka(t){{t=Z(t);const e={};for(const n in t){const r=t[n];(Re(r)||zt(r))&&(e[n]=Jo(t,n))}return e}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const An=typeof window<"u";function SA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function ol(t,e){const n={};for(const r in e){const s=e[r];n[r]=Dt(s)?s.map(t):t(s)}return n}const vi=()=>{},Dt=Array.isArray;function pe(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const CA=/\/$/,kA=t=>t.replace(CA,"");function al(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=NA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function OA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hr(e.matched[r],n.matched[s])&&jm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xA(t[n],e[n]))return!1;return!0}function xA(t,e){return Dt(t)?kf(t,e):Dt(e)?kf(e,t):t===e}function kf(t,e){return Dt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function NA(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return pe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Li;(function(t){t.pop="pop",t.push="push"})(Li||(Li={}));var wi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wi||(wi={}));function DA(t){if(!t)if(An){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kA(t)}const VA=/^[^#]+#/;function MA(t,e){return t.replace(VA,"#")+e}function LA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const gc=()=>({left:window.pageXOffset,top:window.pageYOffset});function UA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){pe(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{pe(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){pe(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=LA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Of(t,e){return(history.state?history.state.position-e:-1)+t}const tu=new Map;function FA(t,e){tu.set(t,e)}function $A(t){const e=tu.get(t);return tu.delete(t),e}let jA=()=>location.protocol+"//"+location.host;function Bm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Sf(c,"")}return Sf(n,t)+r+s}function BA(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Bm(t,location),_=n.value,I=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}w=I?d.position-I.position:0}else r(p);s.forEach(b=>{b(n.value,_,{delta:w,type:Li.pop,direction:w?w>0?wi.forward:wi.back:wi.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ve({},d.state,{scroll:gc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function xf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?gc():null}}function qA(t){const{history:e,location:n}=window,r={value:Bm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:jA()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){pe("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ve({},e.state,xf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ve({},s.value,e.state,{forward:c,scroll:gc()});e.state||pe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=ve({},xf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function HA(t){t=DA(t);const e=qA(t),n=BA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ve({location:"",base:t,go:r,createHref:MA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function WA(t){return typeof t=="string"||t&&typeof t=="object"}function qm(t){return typeof t=="string"||typeof t=="symbol"}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hm=Symbol("navigation failure");var Nf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nf||(Nf={}));const KA={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${GA(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Ds(t,e){return ve(new Error(KA[t](e)),{type:t,[Hm]:!0},e)}function En(t,e){return t instanceof Error&&Hm in t&&(e==null||!!(t.type&e))}const zA=["params","query","hash"];function GA(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of zA)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Df="[^/]+?",QA={sensitive:!1,strict:!1,start:!0,end:!0},YA=/[.+*?^${}()[\]/\\]/g;function JA(t,e){const n=ve({},QA,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(YA,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:I,optional:w,regexp:b}=d;i.push({name:_,repeatable:I,optional:w});const x=b||Df;if(x!==Df){p+=10;try{new RegExp(`(${x})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+z.message)}}let k=I?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(k=w&&l.length<2?`(?:/${k})`:"/"+k),w&&(k+="?"),s+=k,p+=20,w&&(p+=-8),I&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:I,optional:w}=p,b=_ in l?l[_]:"";if(Dt(b)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=Dt(b)?b.join("/"):b;if(!x)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function XA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ZA(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=XA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vf(r))return 1;if(Vf(s))return-1}return s.length-r.length}function Vf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eb={type:0,value:""},tb=/[a-zA-Z0-9_]/;function nb(t){if(!t)return[[]];if(t==="/")return[[eb]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:tb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function rb(t,e,n){const r=JA(nb(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&pe(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sb(t,e){const n=[],r=new Map;e=Uf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,_=ib(u);lb(_,h),_.aliasOf=d&&d.record;const I=Uf(e,u),w=[_];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of k)w.push(ve({},_,{components:d?d.record.components:_.components,path:z,aliasOf:d?d.record:_}))}let b,x;for(const k of w){const{path:z}=k;if(h&&z[0]!=="/"){const U=h.record.path,ge=U[U.length-1]==="/"?"":"/";k.path=h.record.path+(z&&ge+z)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(b=rb(k,h,I),h&&z[0]==="/"&&ub(b,h),d?(d.alias.push(b),cb(d,b)):(x=x||b,x!==b&&x.alias.push(b),p&&u.name&&!Lf(b)&&o(u.name)),_.children){const U=_.children;for(let ge=0;ge<U.length;ge++)i(U[ge],b,d&&d.children[ge])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return x?()=>{o(x)}:vi}function o(u){if(qm(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ZA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Wm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Lf(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},_,I;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Ds(1,{location:u});{const x=Object.keys(u.params||{}).filter(k=>!d.keys.find(z=>z.name===k));x.length&&pe(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}I=d.record.name,p=ve(Mf(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Mf(u.params,d.keys.map(x=>x.name))),_=d.stringify(p)}else if("path"in u)_=u.path,_.startsWith("/")||pe(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(x=>x.re.test(_)),d&&(p=d.parse(_),I=d.record.name);else{if(d=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw Ds(1,{location:u,currentLocation:h});I=d.record.name,p=ve({},h.params,u.params),_=d.stringify(p)}const w=[];let b=d;for(;b;)w.unshift(b.record),b=b.parent;return{name:I,path:_,params:p,matched:w,meta:ab(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ib(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ob(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ob(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ab(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Uf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function nu(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function cb(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(nu.bind(null,n)))return pe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(nu.bind(null,n)))return pe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function lb(t,e){e&&e.record.name&&!t.name&&!t.path&&pe(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function ub(t,e){for(const n of e.keys)if(!t.keys.find(nu.bind(null,n)))return pe(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Wm(t,e){return e.children.some(n=>n===t||Wm(t,n))}const Km=/#/g,hb=/&/g,db=/\//g,fb=/=/g,pb=/\?/g,zm=/\+/g,gb=/%5B/g,mb=/%5D/g,Gm=/%5E/g,_b=/%60/g,Qm=/%7B/g,yb=/%7C/g,Ym=/%7D/g,vb=/%20/g;function ph(t){return encodeURI(""+t).replace(yb,"|").replace(gb,"[").replace(mb,"]")}function wb(t){return ph(t).replace(Qm,"{").replace(Ym,"}").replace(Gm,"^")}function ru(t){return ph(t).replace(zm,"%2B").replace(vb,"+").replace(Km,"%23").replace(hb,"%26").replace(_b,"`").replace(Qm,"{").replace(Ym,"}").replace(Gm,"^")}function Eb(t){return ru(t).replace(fb,"%3D")}function Ib(t){return ph(t).replace(Km,"%23").replace(pb,"%3F")}function Tb(t){return t==null?"":Ib(t).replace(db,"%2F")}function Ui(t){try{return decodeURIComponent(""+t)}catch{pe(`Error decoding "${t}". Using original value`)}return""+t}function Ab(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(zm," "),o=i.indexOf("="),a=Ui(o<0?i:i.slice(0,o)),c=o<0?null:Ui(i.slice(o+1));if(a in e){let l=e[a];Dt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ff(t){let e="";for(let n in t){const r=t[n];if(n=Eb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dt(r)?r.map(i=>i&&ru(i)):[r&&ru(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Dt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Rb=Symbol("router view location matched"),$f=Symbol("router view depth"),gh=Symbol("router"),Jm=Symbol("route location"),su=Symbol("router view location");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ds(4,{from:n,to:e})):h instanceof Error?a(h):WA(h)?a(Ds(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,Pb(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(d=>c._called?d:(pe(h),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){pe(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function Pb(t,e,n){let r=0;return function(){r++===1&&pe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function cl(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&pe(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw pe(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){pe(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,pe(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Sb(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Kn(l,n,r,i,o))}else{let c=a();"catch"in c||(pe(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=SA(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Kn(d,n,r,i,o)()}))}}}return s}function Sb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jf(t){const e=ln(gh),n=ln(Jm),r=Ve(()=>e.resolve(Ne(t.to))),s=Ve(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(hr.bind(null,u));if(d>-1)return d;const p=Bf(c[l-2]);return l>1&&Bf(u)===p&&h[h.length-1].path!==p?h.findIndex(hr.bind(null,c[l-2])):d}),i=Ve(()=>s.value>-1&&Ob(n.params,r.value.params)),o=Ve(()=>s.value>-1&&s.value===n.matched.length-1&&jm(n.params,r.value.params));function a(c={}){return kb(c)?e[Ne(t.replace)?"replace":"push"](Ne(t.to)).catch(vi):Promise.resolve()}if(An){const c=oh();if(c){const l={route:r.value,isActive:i.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),pI(()=>{l.route=r.value,l.isActive=i.value,l.isExactActive=o.value},{flush:"post"})}}return{route:r,href:Ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Cb=Je({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jf,setup(t,{slots:e}){const n=so(jf(t)),{options:r}=ln(gh),s=Ve(()=>({[qf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),mh=Cb;function kb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ob(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Dt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qf=(t,e,n)=>t??e??n,xb=Je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){Nb();const r=ln(su),s=Ve(()=>t.route||r.value),i=ln($f,0),o=Ve(()=>{let l=Ne(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ve(()=>s.value.matched[o.value]);ta($f,Ve(()=>o.value+1)),ta(Rb,a),ta(su,s);const c=Pe();return rr(()=>[c.value,a.value,t.name],([l,u,h],[d,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!hr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Hf(n.default,{Component:d,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=Cm(d,ve({},_,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));if(An&&w.ref){const b={depth:o.value,name:h.name,path:h.path,meta:h.meta};(Dt(w.ref)?w.ref.map(k=>k.i):[w.ref.i]).forEach(k=>{k.__vrv_devtools=b})}return Hf(n.default,{Component:w,route:l})||w}}});function Hf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xm=xb;function Nb(){const t=oh(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";pe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function ni(t,e){const n=ve({},t,{matched:t.matched.map(r=>Bb(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Uo(t){return{_custom:{display:t}}}let Db=0;function Vb(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=Db++;uh({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:ni(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Zm})}Dt(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(d=>{let p=n_,_="";d.isExactActive?(p=t_,_="This is exactly active"):d.isActive&&(p=e_,_="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:_,backgroundColor:p})}))}),rr(e.currentRoute,()=>{c(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:Uo("beforeEach"),from:ni(h,"Current Location during this navigation"),to:ni(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:Uo("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=Uo("❌")):p.status=Uo("✅"),p.from=ni(h,"Current Location during this navigation"),p.to=ni(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let h=n.getRoutes().filter(d=>!d.parent);h.forEach(i_),u.filter&&(h=h.filter(d=>iu(d,u.filter.toLowerCase()))),h.forEach(d=>s_(d,e.currentRoute.value)),u.rootNodes=h.map(r_)}let l;s.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:Lb(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function Mb(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function Lb(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${Mb(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Zm=15485081,e_=2450411,t_=8702998,Ub=2282478,n_=16486972,Fb=6710886;function r_(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:Ub}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:n_}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Zm}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:t_}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:e_}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Fb});let r=n.__vd_id;return r==null&&(r=String($b++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(r_)}}let $b=0;const jb=/^\/(.*)\/([a-z]*)$/;function s_(t,e){const n=e.matched.length&&hr(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>hr(r,t.record))),t.children.forEach(r=>s_(r,e))}function i_(t){t.__vd_match=!1,t.children.forEach(i_)}function iu(t,e){const n=String(t.re).match(jb);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>iu(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=Ui(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>iu(o,e))}function Bb(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function qb(t){const e=sb(t.routes,t),n=t.parseQuery||Ab,r=t.stringifyQuery||Ff,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=ti(),o=ti(),a=ti(),c=xE(Bn);let l=Bn;An&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ol.bind(null,y=>""+y),h=ol.bind(null,Tb),d=ol.bind(null,Ui);function p(y,V){let M,j;return qm(y)?(M=e.getRecordMatcher(y),j=V):j=y,e.addRoute(j,M)}function _(y){const V=e.getRecordMatcher(y);V?e.removeRoute(V):pe(`Cannot remove non-existent route "${String(y)}"`)}function I(){return e.getRoutes().map(y=>y.record)}function w(y){return!!e.getRecordMatcher(y)}function b(y,V){if(V=ve({},V||c.value),typeof y=="string"){const g=al(n,y,V.path),m=e.resolve({path:g.path},V),E=s.createHref(g.fullPath);return E.startsWith("//")?pe(`Location "${y}" resolved to "${E}". A resolved location cannot start with multiple slashes.`):m.matched.length||pe(`No match found for location with path "${y}"`),ve(g,m,{params:d(m.params),hash:Ui(g.hash),redirectedFrom:void 0,href:E})}let M;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&pe(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),M=ve({},y,{path:al(n,y.path,V.path).path});else{const g=ve({},y.params);for(const m in g)g[m]==null&&delete g[m];M=ve({},y,{params:h(g)}),V.params=h(V.params)}const j=e.resolve(M,V),de=y.hash||"";de&&!de.startsWith("#")&&pe(`A \`hash\` should always start with the character "#". Replace "${de}" with "#${de}".`),j.params=u(d(j.params));const xe=OA(r,ve({},y,{hash:wb(de),path:j.path})),f=s.createHref(xe);return f.startsWith("//")?pe(`Location "${y}" resolved to "${f}". A resolved location cannot start with multiple slashes.`):j.matched.length||pe(`No match found for location with path "${"path"in y?y.path:y}"`),ve({fullPath:xe,hash:de,query:r===Ff?bb(y.query):y.query||{}},j,{redirectedFrom:void 0,href:f})}function x(y){return typeof y=="string"?al(n,y,c.value.path):ve({},y)}function k(y,V){if(l!==y)return Ds(8,{from:V,to:y})}function z(y){return B(y)}function U(y){return z(ve(x(y),{replace:!0}))}function ge(y){const V=y.matched[y.matched.length-1];if(V&&V.redirect){const{redirect:M}=V;let j=typeof M=="function"?M(y):M;if(typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=x(j):{path:j},j.params={}),!("path"in j)&&!("name"in j))throw pe(`Invalid redirect found:
${JSON.stringify(j,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ve({query:y.query,hash:y.hash,params:"path"in j?{}:y.params},j)}}function B(y,V){const M=l=b(y),j=c.value,de=y.state,xe=y.force,f=y.replace===!0,g=ge(M);if(g)return B(ve(x(g),{state:typeof g=="object"?ve({},de,g.state):de,force:xe,replace:f}),V||M);const m=M;m.redirectedFrom=V;let E;return!xe&&Cf(r,j,M)&&(E=Ds(16,{to:m,from:j}),Un(j,j,!0,!1)),(E?Promise.resolve(E):F(m,j)).catch(v=>En(v)?En(v,2)?v:Ir(v):J(v,m,j)).then(v=>{if(v){if(En(v,2))return Cf(r,b(v.to),m)&&V&&(V._count=V._count?V._count+1:1)>30?(pe(`Detected a possibly infinite redirection in a navigation guard when going from "${j.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(ve({replace:f},x(v.to),{state:typeof v.to=="object"?ve({},de,v.to.state):de,force:xe}),V||m)}else v=ce(m,j,!0,f,de);return L(m,j,v),v})}function ze(y,V){const M=k(y,V);return M?Promise.reject(M):Promise.resolve()}function Ee(y){const V=Fn.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(y):y()}function F(y,V){let M;const[j,de,xe]=Hb(y,V);M=cl(j.reverse(),"beforeRouteLeave",y,V);for(const g of j)g.leaveGuards.forEach(m=>{M.push(Kn(m,y,V))});const f=ze.bind(null,y,V);return M.push(f),$n(M).then(()=>{M=[];for(const g of i.list())M.push(Kn(g,y,V));return M.push(f),$n(M)}).then(()=>{M=cl(de,"beforeRouteUpdate",y,V);for(const g of de)g.updateGuards.forEach(m=>{M.push(Kn(m,y,V))});return M.push(f),$n(M)}).then(()=>{M=[];for(const g of xe)if(g.beforeEnter)if(Dt(g.beforeEnter))for(const m of g.beforeEnter)M.push(Kn(m,y,V));else M.push(Kn(g.beforeEnter,y,V));return M.push(f),$n(M)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),M=cl(xe,"beforeRouteEnter",y,V),M.push(f),$n(M))).then(()=>{M=[];for(const g of o.list())M.push(Kn(g,y,V));return M.push(f),$n(M)}).catch(g=>En(g,8)?g:Promise.reject(g))}function L(y,V,M){a.list().forEach(j=>Ee(()=>j(y,V,M)))}function ce(y,V,M,j,de){const xe=k(y,V);if(xe)return xe;const f=V===Bn,g=An?history.state:{};M&&(j||f?s.replace(y.fullPath,ve({scroll:f&&g&&g.scroll},de)):s.push(y.fullPath,de)),c.value=y,Un(y,V,M,f),Ir()}let Oe;function Jt(){Oe||(Oe=s.listen((y,V,M)=>{if(!ko.listening)return;const j=b(y),de=ge(j);if(de){B(ve(de,{replace:!0}),j).catch(vi);return}l=j;const xe=c.value;An&&FA(Of(xe.fullPath,M.delta),gc()),F(j,xe).catch(f=>En(f,12)?f:En(f,2)?(B(f.to,j).then(g=>{En(g,20)&&!M.delta&&M.type===Li.pop&&s.go(-1,!1)}).catch(vi),Promise.reject()):(M.delta&&s.go(-M.delta,!1),J(f,j,xe))).then(f=>{f=f||ce(j,xe,!1),f&&(M.delta&&!En(f,8)?s.go(-M.delta,!1):M.type===Li.pop&&En(f,20)&&s.go(-1,!1)),L(j,xe,f)}).catch(vi)}))}let Rt=ti(),Ge=ti(),se;function J(y,V,M){Ir(y);const j=Ge.list();return j.length?j.forEach(de=>de(y,V,M)):(pe("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function Mt(){return se&&c.value!==Bn?Promise.resolve():new Promise((y,V)=>{Rt.add([y,V])})}function Ir(y){return se||(se=!y,Jt(),Rt.list().forEach(([V,M])=>y?M(y):V()),Rt.reset()),y}function Un(y,V,M,j){const{scrollBehavior:de}=t;if(!An||!de)return Promise.resolve();const xe=!M&&$A(Of(y.fullPath,0))||(j||!M)&&history.state&&history.state.scroll||null;return Ia().then(()=>de(y,V,xe)).then(f=>f&&UA(f)).catch(f=>J(f,y,V))}const Xt=y=>s.go(y);let Lt;const Fn=new Set,ko={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:w,getRoutes:I,resolve:b,options:t,push:z,replace:U,go:Xt,back:()=>Xt(-1),forward:()=>Xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ge.add,isReady:Mt,install(y){const V=this;y.component("RouterLink",mh),y.component("RouterView",Xm),y.config.globalProperties.$router=V,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ne(c)}),An&&!Lt&&c.value===Bn&&(Lt=!0,z(s.location).catch(de=>{pe("Unexpected error when starting the router:",de)}));const M={};for(const de in Bn)Object.defineProperty(M,de,{get:()=>c.value[de],enumerable:!0});y.provide(gh,V),y.provide(Jm,Hg(M)),y.provide(su,c);const j=y.unmount;Fn.add(y),y.unmount=function(){Fn.delete(y),Fn.size<1&&(l=Bn,Oe&&Oe(),Oe=null,c.value=Bn,Lt=!1,se=!1),j()},An&&Vb(y,V,e)}};function $n(y){return y.reduce((V,M)=>V.then(()=>Ee(M)),Promise.resolve())}return ko}function Hb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>hr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>hr(l,c))||s.push(c))}return[n,r,s]}/**
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
 */const o_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Wb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},a_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Kb;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zb=function(t){const e=o_(t);return a_.encodeByteArray(e,!0)},Oa=function(t){return zb(t).replace(/\./g,"")},c_=function(t){try{return a_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qb=()=>Gb().__FIREBASE_DEFAULTS__,Yb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&c_(t[1]);return e&&JSON.parse(e)},mc=()=>{try{return Qb()||Yb()||Jb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l_=t=>{var e,n;return(n=(e=mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},u_=t=>{const e=l_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h_=()=>{var t;return(t=mc())===null||t===void 0?void 0:t.config},d_=t=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Xb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function f_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Oa(JSON.stringify(n)),Oa(JSON.stringify(o)),a].join(".")}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function e0(){var t;const e=(t=mc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function t0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function n0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r0(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function s0(){try{return typeof indexedDB=="object"}catch{return!1}}function i0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const o0="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=o0,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ao.prototype.create)}}class ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?a0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function a0(t,e){return t.replace(c0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const c0=/\{\$([^}]+)}/g;function l0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!xa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
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
 */function co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ui(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function u0(t,e){const n=new h0(t,e);return n.subscribe.bind(n)}class h0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");d0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ll),s.error===void 0&&(s.error=ll),s.complete===void 0&&(s.complete=ll);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ll(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class f0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(g0(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p0(t){return t===Pr?void 0:t}function g0(t){return t.instantiationMode==="EAGER"}/**
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
 */class m0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const _0={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},y0=me.INFO,v0={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},w0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=v0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _h{constructor(e){this.name=e,this._logLevel=y0,this._logHandler=w0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const E0=(t,e)=>e.some(n=>t instanceof n);let Kf,zf;function I0(){return Kf||(Kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T0(){return zf||(zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p_=new WeakMap,ou=new WeakMap,g_=new WeakMap,ul=new WeakMap,yh=new WeakMap;function A0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&p_.set(n,t)}).catch(()=>{}),yh.set(e,t),e}function b0(t){if(ou.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ou.set(t,e)}let au={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function R0(t){au=t(au)}function P0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hl(this),e,...n);return g_.set(r,e.sort?e.sort():[e]),sr(r)}:T0().includes(t)?function(...e){return t.apply(hl(this),e),sr(p_.get(this))}:function(...e){return sr(t.apply(hl(this),e))}}function S0(t){return typeof t=="function"?P0(t):(t instanceof IDBTransaction&&b0(t),E0(t,I0())?new Proxy(t,au):t)}function sr(t){if(t instanceof IDBRequest)return A0(t);if(ul.has(t))return ul.get(t);const e=S0(t);return e!==t&&(ul.set(t,e),yh.set(e,t)),e}const hl=t=>yh.get(t);function C0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const k0=["get","getKey","getAll","getAllKeys","count"],O0=["put","add","delete","clear"],dl=new Map;function Gf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dl.get(e))return dl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=O0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||k0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return dl.set(e,i),i}R0(t=>({...t,get:(e,n,r)=>Gf(e,n)||t.get(e,n,r),has:(e,n)=>!!Gf(e,n)||t.has(e,n)}));/**
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
 */class x0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function N0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cu="@firebase/app",Qf="0.9.17";/**
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
 */const Qr=new _h("@firebase/app"),D0="@firebase/app-compat",V0="@firebase/analytics-compat",M0="@firebase/analytics",L0="@firebase/app-check-compat",U0="@firebase/app-check",F0="@firebase/auth",$0="@firebase/auth-compat",j0="@firebase/database",B0="@firebase/database-compat",q0="@firebase/functions",H0="@firebase/functions-compat",W0="@firebase/installations",K0="@firebase/installations-compat",z0="@firebase/messaging",G0="@firebase/messaging-compat",Q0="@firebase/performance",Y0="@firebase/performance-compat",J0="@firebase/remote-config",X0="@firebase/remote-config-compat",Z0="@firebase/storage",eR="@firebase/storage-compat",tR="@firebase/firestore",nR="@firebase/firestore-compat",rR="firebase",sR="10.3.0";/**
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
 */const lu="[DEFAULT]",iR={[cu]:"fire-core",[D0]:"fire-core-compat",[M0]:"fire-analytics",[V0]:"fire-analytics-compat",[U0]:"fire-app-check",[L0]:"fire-app-check-compat",[F0]:"fire-auth",[$0]:"fire-auth-compat",[j0]:"fire-rtdb",[B0]:"fire-rtdb-compat",[q0]:"fire-fn",[H0]:"fire-fn-compat",[W0]:"fire-iid",[K0]:"fire-iid-compat",[z0]:"fire-fcm",[G0]:"fire-fcm-compat",[Q0]:"fire-perf",[Y0]:"fire-perf-compat",[J0]:"fire-rc",[X0]:"fire-rc-compat",[Z0]:"fire-gcs",[eR]:"fire-gcs-compat",[tR]:"fire-fst",[nR]:"fire-fst-compat","fire-js":"fire-js",[rR]:"fire-js-all"};/**
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
 */const Na=new Map,uu=new Map;function oR(t,e){try{t.container.addComponent(e)}catch(n){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yr(t){const e=t.name;if(uu.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;uu.set(e,t);for(const n of Na.values())oR(n,t);return!0}function _c(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const aR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ir=new ao("app","Firebase",aR);/**
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
 */class cR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const is=sR;function m_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=h_()),!n)throw ir.create("no-options");const i=Na.get(s);if(i){if(xa(n,i.options)&&xa(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new m0(s);for(const c of uu.values())o.addComponent(c);const a=new cR(n,r,o);return Na.set(s,a),a}function vh(t=lu){const e=Na.get(t);if(!e&&t===lu&&h_())return m_();if(!e)throw ir.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let s=(r=iR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(a.join(" "));return}Yr(new dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const lR="firebase-heartbeat-database",uR=1,Fi="firebase-heartbeat-store";let fl=null;function __(){return fl||(fl=C0(lR,uR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),fl}async function hR(t){try{return await(await __()).transaction(Fi).objectStore(Fi).get(y_(t))}catch(e){if(e instanceof vn)Qr.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qr.warn(n.message)}}}async function Yf(t,e){try{const r=(await __()).transaction(Fi,"readwrite");await r.objectStore(Fi).put(e,y_(t)),await r.done}catch(n){if(n instanceof vn)Qr.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qr.warn(r.message)}}}function y_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dR=1024,fR=30*24*60*60*1e3;class pR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=fR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jf(),{heartbeatsToSend:n,unsentEntries:r}=gR(this._heartbeatsCache.heartbeats),s=Oa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jf(){return new Date().toISOString().substring(0,10)}function gR(t,e=dR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s0()?i0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xf(t){return Oa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _R(t){Yr(new dr("platform-logger",e=>new x0(e),"PRIVATE")),Yr(new dr("heartbeat",e=>new pR(e),"PRIVATE")),hn(cu,Qf,t),hn(cu,Qf,"esm2017"),hn("fire-js","")}_R("");var yR="firebase",vR="10.3.0";/**
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
 */hn(yR,vR,"app");function wh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Zf(t){return t!==void 0&&t.enterprise!==void 0}class wR{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function v_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ER=v_,w_=new ao("auth","Firebase",v_());/**
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
 */const Da=new _h("@firebase/auth");function IR(t,...e){Da.logLevel<=me.WARN&&Da.warn(`Auth (${is}): ${t}`,...e)}function aa(t,...e){Da.logLevel<=me.ERROR&&Da.error(`Auth (${is}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw Eh(t,...e)}function dn(t,...e){return Eh(t,...e)}function E_(t,e,n){const r=Object.assign(Object.assign({},ER()),{[e]:n});return new ao("auth","Firebase",r).create(e,{appName:t.name})}function TR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),E_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return w_.create(t,...e)}function ee(t,e,...n){if(!t)throw Eh(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw aa(e),new Error(e)}function xn(t,e){t||Pn(e)}/**
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
 */function hu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AR(){return ep()==="http:"||ep()==="https:"}function ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AR()||t0()||"connection"in navigator)?navigator.onLine:!0}function RR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=Zb()||n0()}get(){return bR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ih(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class I_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SR=new lo(3e4,6e4);function os(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yr(t,e,n,r,s={}){return T_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=co(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),I_.fetch()(A_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function T_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PR),e);try{const s=new CR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw E_(t,u,l);jt(t,u)}}catch(s){if(s instanceof vn)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function uo(t,e,n,r,s={}){const i=await yr(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function A_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ih(t.config,s):`${t.config.apiScheme}://${s}`}class CR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),SR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}async function kR(t,e){return yr(t,"GET","/v2/recaptchaConfig",os(t,e))}/**
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
 */async function OR(t,e){return yr(t,"POST","/v1/accounts:delete",e)}async function xR(t,e){return yr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NR(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Th(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ei(pl(s.auth_time)),issuedAtTime:Ei(pl(s.iat)),expirationTime:Ei(pl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pl(t){return Number(t)*1e3}function Th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return aa("JWT malformed, contained fewer than 3 sections"),null;try{const s=c_(n);return s?JSON.parse(s):(aa("Failed to decode base64 JWT payload"),null)}catch(s){return aa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function DR(t){const e=Th(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&VR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class b_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Va(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Vs(t,xR(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?FR(i.providerUserInfo):[],a=UR(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new b_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function LR(t){const e=Ye(t);await Va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function FR(t){return t.map(e=>{var{providerId:n}=e,r=wh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $R(t,e){const n=await T_(t,{},async()=>{const r=co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=A_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",I_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $R(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $i;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function qn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $r{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new b_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vs(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NR(this,e)}reload(){return LR(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vs(this,OR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:z,isAnonymous:U,providerData:ge,stsTokenManager:B}=n;ee(k&&B,e,"internal-error");const ze=$i.fromJSON(this.name,B);ee(typeof k=="string",e,"internal-error"),qn(h,e.name),qn(d,e.name),ee(typeof z=="boolean",e,"internal-error"),ee(typeof U=="boolean",e,"internal-error"),qn(p,e.name),qn(_,e.name),qn(I,e.name),qn(w,e.name),qn(b,e.name),qn(x,e.name);const Ee=new $r({uid:k,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:U,photoURL:_,phoneNumber:p,tenantId:I,stsTokenManager:ze,createdAt:b,lastLoginAt:x});return ge&&Array.isArray(ge)&&(Ee.providerData=ge.map(F=>Object.assign({},F))),w&&(Ee._redirectEventId=w),Ee}static async _fromIdTokenResponse(e,n,r=!1){const s=new $i;s.updateFromServerResponse(n);const i=new $r({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Va(i),i}}/**
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
 */const tp=new Map;function Sn(t){xn(t instanceof Function,"Expected a class definition");let e=tp.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tp.set(t,e),e)}/**
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
 */class R_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}R_.type="NONE";const np=R_;/**
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
 */function ca(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ca(this.userKey,s.apiKey,i),this.fullPersistenceKey=ca("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(Sn(np),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Sn(np);const o=ca(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=$r._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Rs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Rs(i,e,r))}}/**
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
 */function rp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(C_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(P_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O_(e))return"Blackberry";if(x_(e))return"Webos";if(Ah(e))return"Safari";if((e.includes("chrome/")||S_(e))&&!e.includes("edge/"))return"Chrome";if(k_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function P_(t=vt()){return/firefox\//i.test(t)}function Ah(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function S_(t=vt()){return/crios\//i.test(t)}function C_(t=vt()){return/iemobile/i.test(t)}function k_(t=vt()){return/android/i.test(t)}function O_(t=vt()){return/blackberry/i.test(t)}function x_(t=vt()){return/webos/i.test(t)}function yc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jR(t=vt()){var e;return yc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BR(){return r0()&&document.documentMode===10}function N_(t=vt()){return yc(t)||k_(t)||x_(t)||O_(t)||/windows phone/i.test(t)||C_(t)}function qR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function D_(t,e=[]){let n;switch(t){case"Browser":n=rp(vt());break;case"Worker":n=`${rp(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
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
 */class HR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WR(t,e={}){return yr(t,"GET","/v2/passwordPolicy",os(t,e))}/**
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
 */const KR=6;class zR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sp(this),this.idTokenSubscription=new sp(this),this.beforeStateQueue=new HR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=w_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WR(this),n=new zR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vr(t){return Ye(t)}class sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=u0(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function QR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function V_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QR().appendChild(r)})}function YR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const JR="https://www.google.com/recaptcha/enterprise.js?render=",XR="recaptcha-enterprise",ZR="NO_RECAPTCHA";class eP{constructor(e){this.type=XR,this.auth=vr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{kR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new wR(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Zf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ZR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Zf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}V_(JR+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ma(t,e,n,r=!1){const s=new eP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function tP(t,e){const n=_c(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xa(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function nP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rP(t,e,n){const r=vr(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=M_(e),{host:o,port:a}=sP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||iP()}function M_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sP(t){const e=M_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ip(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ip(o)}}}function ip(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function oP(t,e){return yr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gl(t,e){return uo(t,"POST","/v1/accounts:signInWithPassword",os(t,e))}/**
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
 */async function aP(t,e){return uo(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}async function cP(t,e){return uo(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}/**
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
 */class ji extends bh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ji(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ma(e,r,"signInWithPassword");return gl(e,s)}else return gl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ma(e,r,"signInWithPassword");return gl(e,i)}else return Promise.reject(s)});case"emailLink":return aP(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return oP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cP(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ps(t,e){return uo(t,"POST","/v1/accounts:signInWithIdp",os(t,e))}/**
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
 */const lP="http://localhost";class Jr extends bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:lP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=co(n)}return e}}/**
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
 */function uP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hP(t){const e=ui(hi(t)).link,n=e?ui(hi(e)).deep_link_id:null,r=ui(hi(t)).deep_link_id;return(r?ui(hi(r)).link:null)||r||n||e||t}class Rh{constructor(e){var n,r,s,i,o,a;const c=ui(hi(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=uP((s=c.mode)!==null&&s!==void 0?s:null);ee(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hP(e);try{return new Rh(n)}catch{return null}}}/**
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
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rh.parseLink(n);return ee(r,"argument-error"),ji._fromEmailAndCode(e,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ho extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends ho{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class bn extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class Qn extends ho{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Yn extends ho{constructor(){super("twitter.com")}static credential(e,n){return Jr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function ml(t,e){return uo(t,"POST","/v1/accounts:signUp",os(t,e))}/**
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
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $r._fromIdTokenResponse(e,r,s),o=op(r);return new Xr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=op(r);return new Xr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function op(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class La extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new La(e,n,r,s)}}function L_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,i,e,r):i})}async function dP(t,e,n=!1){const r=await Vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
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
 */async function fP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Vs(t,L_(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=Th(i.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Xr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
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
 */async function U_(t,e,n=!1){const r="signIn",s=await L_(t,r,e),i=await Xr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function pP(t,e){return U_(vr(t),e)}/**
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
 */async function F_(t){const e=vr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gP(t,e,n){var r;const s=vr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Ma(s,i,"signUpPassword");o=ml(s,l)}else o=ml(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ma(s,i,"signUpPassword");return ml(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&F_(t),l}),c=await Xr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function mP(t,e,n){return pP(Ye(t),Hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&F_(t),r})}/**
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
 */async function _P(t,e){return yr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function $_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Vs(r,_P(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function yP(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function vP(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}const Ua="__sak";/**
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
 */class j_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ua,"1"),this.storage.removeItem(Ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wP(){const t=vt();return Ah(t)||yc(t)}const EP=1e3,IP=10;class B_ extends j_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wP()&&qR(),this.fallbackToPolling=N_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);BR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}B_.type="LOCAL";const TP=B_;/**
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
 */class q_ extends j_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}q_.type="SESSION";const H_=q_;/**
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
 */function AP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await AP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
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
 */function Sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Sh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function RP(t){fn().location.href=t}/**
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
 */function W_(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function PP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CP(){return W_()?self:null}/**
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
 */const K_="firebaseLocalStorageDb",kP=1,Fa="firebaseLocalStorage",z_="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wc(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function OP(){const t=indexedDB.deleteDatabase(K_);return new fo(t).toPromise()}function du(){const t=indexedDB.open(K_,kP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fa,{keyPath:z_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fa)?e(r):(r.close(),await OP(),e(await du()))})})}async function ap(t,e,n){const r=wc(t,!0).put({[z_]:e,value:n});return new fo(r).toPromise()}async function xP(t,e){const n=wc(t,!1).get(e),r=await new fo(n).toPromise();return r===void 0?null:r.value}function cp(t,e){const n=wc(t,!0).delete(e);return new fo(n).toPromise()}const NP=800,DP=3;class G_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return W_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(CP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PP(),!this.activeServiceWorker)return;this.sender=new bP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await ap(e,Ua,"1"),await cp(e,Ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ap(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wc(s,!1).getAll();return new fo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}G_.type="LOCAL";const VP=G_;new lo(3e4,6e4);/**
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
 */function Q_(t,e){return e?Sn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ch extends bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MP(t){return U_(t.auth,new Ch(t),t.bypassAuthState)}function LP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),fP(n,new Ch(t),t.bypassAuthState)}async function UP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),dP(n,new Ch(t),t.bypassAuthState)}/**
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
 */class Y_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MP;case"linkViaPopup":case"linkViaRedirect":return UP;case"reauthViaPopup":case"reauthViaRedirect":return LP;default:jt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FP=new lo(2e3,1e4);async function $P(t,e,n){const r=vr(t);TR(t,e,Ph);const s=Q_(r,n);return new kr(r,"signInViaPopup",e,s).executeNotNull()}class kr extends Y_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FP.get())};e()}}kr.currentPopupAction=null;/**
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
 */const jP="pendingRedirect",la=new Map;class BP extends Y_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const r=await qP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qP(t,e){const n=KP(e),r=WP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function HP(t,e){la.set(t._key(),e)}function WP(t){return Sn(t._redirectPersistence)}function KP(t){return ca(jP,t.config.apiKey,t.name)}async function zP(t,e,n=!1){const r=vr(t),s=Q_(r,e),o=await new BP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const GP=10*60*1e3;class QP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!J_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GP&&this.cachedEventUids.clear(),this.cachedEventUids.has(lp(e))}saveEventToCache(e){this.cachedEventUids.add(lp(e)),this.lastProcessedEventTime=Date.now()}}function lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J_(t);default:return!1}}/**
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
 */async function JP(t,e={}){return yr(t,"GET","/v1/projects",e)}/**
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
 */const XP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZP=/^https?/;async function eS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JP(t);for(const n of e)try{if(tS(n))return}catch{}jt(t,"unauthorized-domain")}function tS(t){const e=hu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZP.test(n))return!1;if(XP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nS=new lo(3e4,6e4);function up(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rS(t){return new Promise((e,n)=>{var r,s,i;function o(){up(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{up(),n(dn(t,"network-request-failed"))},timeout:nS.get()})}if(!((s=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const a=YR("iframefcb");return fn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},V_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ua=null,e})}let ua=null;function sS(t){return ua=ua||rS(t),ua}/**
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
 */const iS=new lo(5e3,15e3),oS="__/auth/iframe",aS="emulator/auth/iframe",cS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uS(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ih(e,aS):`https://${t.config.authDomain}/${oS}`,r={apiKey:e.apiKey,appName:t.name,v:is},s=lS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${co(r).slice(1)}`}async function hS(t){const e=await sS(t),n=fn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:uS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=fn().setTimeout(()=>{i(o)},iS.get());function c(){fn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const dS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fS=500,pS=600,gS="_blank",mS="http://localhost";class hp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _S(t,e,n,r=fS,s=pS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=vt().toLowerCase();n&&(a=S_(l)?gS:n),P_(l)&&(e=e||mS,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(jR(l)&&a!=="_self")return yS(e||"",a),new hp(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new hp(h)}function yS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vS="__/auth/handler",wS="emulator/auth/handler",ES=encodeURIComponent("fac");async function dp(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:s};if(e instanceof Ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",l0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ho){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${ES}=${encodeURIComponent(c)}`:"";return`${IS(t)}?${co(a).slice(1)}${l}`}function IS({config:t}){return t.emulator?Ih(t,wS):`https://${t.authDomain}/${vS}`}/**
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
 */const _l="webStorageSupport";class TS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=H_,this._completeRedirectFn=zP,this._overrideRedirectResult=HP}async _openPopup(e,n,r,s){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await dp(e,n,r,hu(),s);return _S(e,o,Sh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dp(e,n,r,hu(),s);return RP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hS(e),r=new QP(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_l,{type:_l},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_l];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return N_()||Ah()||yc()}}const AS=TS;var fp="@firebase/auth",pp="1.3.0";/**
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
 */class bS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PS(t){Yr(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D_(t)},l=new GR(r,s,i,c);return nP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new dr("auth-internal",e=>{const n=vr(e.getProvider("auth").getImmediate());return(r=>new bS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(fp,pp,RS(t)),hn(fp,pp,"esm2017")}/**
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
 */const SS=5*60,CS=d_("authIdTokenMaxAge")||SS;let gp=null;const kS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CS)return;const s=n==null?void 0:n.token;gp!==s&&(gp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function X_(t=vh()){const e=_c(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tP(t,{popupRedirectResolver:AS,persistence:[VP,TP,H_]}),r=d_("authTokenSyncURL");if(r){const i=kS(r);vP(n,i,()=>i(n.currentUser)),yP(n,o=>i(o))}const s=l_("auth");return s&&rP(n,`http://${s}`),n}PS("Browser");const OS={apiKey:"AIzaSyBhueqCi9Wd4vD7Jo9Ja6q-_5_-wSkpe88",authDomain:"realtime-chat-29fba.firebaseapp.com",projectId:"realtime-chat-29fba",storageBucket:"realtime-chat-29fba.appspot.com",messagingSenderId:"94609209804",appId:"1:94609209804:web:df97e4ab131719cbe8c569",measurementId:"G-03XKB9XPCK"},Ec=m_(OS),xS=X_(Ec),mp=["$30 of raw popcorn translates into $3,000 in sales at movie theaters","'Barack Obama' born August 4 1961 was the 44th President of the United States.","'Bookkeeper' and 'bookkeeping' are the only 2 words in the English language with three consecutive double letters","'Canberra' is the capital of 'Australia'.","'Coast Redwood' tree is the world's tallest tree (371 ft) in Redwood National Park California United States"],NS={class:"flex flex-col w-full h-full bg-surface justify-center items-center"},DS=H("h1",{class:"text-onDark text-6xl animate-bounce p-8"},"Loading...",-1),VS={class:"text-onDark emphasis-high text-xl"},MS=Je({__name:"LoadingScreen",setup(t){const e=Math.floor(Math.random()*mp.length),n=mp[e];return(r,s)=>(ne(),_e("div",NS,[DS,H("p",VS,On(Ne(n)),1)]))}}),at=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},LS=at(MS,[["__file","/home/luuk/code/realtime-chat/src/components/LoadingScreen.vue"]]),US=Je({__name:"App",setup(t){const e=Pe(!0);async function n(){await xS.authStateReady(),e.value=!1}return n(),(r,s)=>(ne(),_e(st,null,[e.value?(ne(),Nt(LS,{key:0})):zr("v-if",!0),e.value?zr("v-if",!0):(ne(),Nt(Ne(Xm),{key:1}))],64))}}),FS=at(US,[["__file","/home/luuk/code/realtime-chat/src/App.vue"]]);/**
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
 */const Z_="firebasestorage.googleapis.com",ey="storageBucket",$S=2*60*1e3,jS=10*60*1e3;/**
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
 */class $e extends vn{constructor(e,n,r=0){super(yl(e),`Firebase Storage: ${n} (${yl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function yl(t){return"storage/"+t}function kh(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(Ue.UNKNOWN,t)}function BS(t){return new $e(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function qS(t){return new $e(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(Ue.UNAUTHENTICATED,t)}function WS(){return new $e(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function KS(t){return new $e(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function zS(){return new $e(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function GS(){return new $e(Ue.CANCELED,"User canceled the upload/download.")}function QS(t){return new $e(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function YS(t){return new $e(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function JS(){return new $e(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ey+"' property when initializing the app?")}function XS(){return new $e(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ZS(){return new $e(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function eC(t){return new $e(Ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fu(t){return new $e(Ue.INVALID_ARGUMENT,t)}function ty(){return new $e(Ue.APP_DELETED,"The Firebase app was deleted.")}function tC(t){return new $e(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ii(t,e){return new $e(Ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ri(t){throw new $e(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ot.makeFromUrl(e,n)}catch{return new Ot(e,"")}if(r.path==="")return r;throw YS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(z){z.path_=decodeURIComponent(z.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},I=n===Z_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",b=new RegExp(`^https?://${I}/${s}/${w}`,"i"),k=[{regex:a,indices:c,postModify:i},{regex:p,indices:_,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let z=0;z<k.length;z++){const U=k[z],ge=U.regex.exec(e);if(ge){const B=ge[U.indices.bucket];let ze=ge[U.indices.path];ze||(ze=""),r=new Ot(B,ze),U.postModify(r);break}}if(r==null)throw QS(e);return r}}class nC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function rC(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,t(p,c())},w)}function d(){i&&clearTimeout(i)}function p(w,...b){if(l){d();return}if(w){d(),u.call(null,w,...b);return}if(c()||o){d(),u.call(null,w,...b);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let _=!1;function I(w){_||(_=!0,d(),!l&&(s!==null?(w||(a=2),clearTimeout(s),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function sC(t){t(!1)}/**
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
 */function iC(t){return t!==void 0}function oC(t){return typeof t=="object"&&!Array.isArray(t)}function Oh(t){return typeof t=="string"||t instanceof String}function _p(t){return xh()&&t instanceof Blob}function xh(){return typeof Blob<"u"&&!e0()}function yp(t,e,n,r){if(r<e)throw fu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Nh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ny(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jr||(jr={}));/**
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
 */function aC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class cC{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new $o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===jr.NO_ERROR,c=i.getStatus();if(!a||aC(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===jr.ABORT;r(!1,new $o(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new $o(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());iC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=kh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?ty():GS();o(c)}else{const c=zS();o(c)}};this.canceled_?n(!1,new $o(!1,null,!0)):this.backoffId_=rC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $o{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function lC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function uC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fC(t,e,n,r,s,i,o=!0){const a=ny(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return hC(l,e),lC(l,n),uC(l,i),dC(l,r),new cC(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function pC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gC(...t){const e=pC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xh())return new Blob(t);throw new $e(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _C(t){if(typeof atob>"u")throw eC("base-64");return atob(t)}/**
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
 */const on={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vl{constructor(e,n){this.data=e,this.contentType=n||null}}function yC(t,e){switch(t){case on.RAW:return new vl(ry(e));case on.BASE64:case on.BASE64URL:return new vl(sy(t,e));case on.DATA_URL:return new vl(wC(e),EC(e))}throw kh()}function ry(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function vC(t){let e;try{e=decodeURIComponent(t)}catch{throw Ii(on.DATA_URL,"Malformed data URL.")}return ry(e)}function sy(t,e){switch(t){case on.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ii(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case on.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ii(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_C(e)}catch(s){throw s.message.includes("polyfill")?s:Ii(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class iy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ii(on.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=IC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function wC(t){const e=new iy(t);return e.base64?sy(on.BASE64,e.rest):vC(e.rest)}function EC(t){return new iy(t).contentType}function IC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Jn{constructor(e,n){let r=0,s="";_p(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(_p(this.data_)){const r=this.data_,s=mC(r,e,n);return s===null?null:new Jn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Jn(r,!0)}}static getBlob(...e){if(xh()){const n=e.map(r=>r instanceof Jn?r.data_:r);return new Jn(gC.apply(null,n))}else{const n=e.map(o=>Oh(o)?yC(on.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Jn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function oy(t){let e;try{e=JSON.parse(t)}catch{return null}return oC(e)?e:null}/**
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
 */function TC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ay(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function bC(t,e){return e}class It{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||bC}}let jo=null;function RC(t){return!Oh(t)||t.length<2?t:ay(t)}function cy(){if(jo)return jo;const t=[];t.push(new It("bucket")),t.push(new It("generation")),t.push(new It("metageneration")),t.push(new It("name","fullPath",!0));function e(i,o){return RC(o)}const n=new It("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new It("size");return s.xform=r,t.push(s),t.push(new It("timeCreated")),t.push(new It("updated")),t.push(new It("md5Hash",null,!0)),t.push(new It("cacheControl",null,!0)),t.push(new It("contentDisposition",null,!0)),t.push(new It("contentEncoding",null,!0)),t.push(new It("contentLanguage",null,!0)),t.push(new It("contentType",null,!0)),t.push(new It("metadata","customMetadata",!0)),jo=t,jo}function PC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ot(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function SC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return PC(r,t),r}function ly(t,e,n){const r=oy(e);return r===null?null:SC(t,r,n)}function CC(t,e,n,r){const s=oy(e);if(s===null||!Oh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Nh(d,n,r),_=ny({alt:"media",token:l});return p+_})[0]}function kC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class uy{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function hy(t){if(!t)throw kh()}function OC(t,e){function n(r,s){const i=ly(t,s,e);return hy(i!==null),i}return n}function xC(t,e){function n(r,s){const i=ly(t,s,e);return hy(i!==null),CC(i,s,t.host,t._protocol)}return n}function dy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=WS():s=HS():n.getStatus()===402?s=qS(t.bucket):n.getStatus()===403?s=KS(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function NC(t){const e=dy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=BS(t.path)),i.serverResponse=s.serverResponse,i}return n}function DC(t,e,n){const r=e.fullServerUrl(),s=Nh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new uy(s,i,xC(t,n),o);return a.errorHandler=NC(e),a}function VC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function MC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=VC(null,e)),r}function LC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let z=0;z<2;z++)k=k+Math.random().toString().slice(2);return k}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=MC(e,r,s),u=kC(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Jn.getBlob(h,r,d);if(p===null)throw XS();const _={name:l.fullPath},I=Nh(i,t.host,t._protocol),w="POST",b=t.maxUploadRetryTime,x=new uy(I,w,OC(t,n),b);return x.urlParams=_,x.headers=o,x.body=p.uploadData(),x.errorHandler=dy(e),x}class UC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=jr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=jr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=jr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ri("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ri("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ri("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ri("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ri("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FC extends UC{initXhr(){this.xhr_.responseType="text"}}function fy(){return new FC}/**
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
 */class Zr{constructor(e,n){this._service=e,n instanceof Ot?this._location=n:this._location=Ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zr(e,n)}get root(){const e=new Ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ay(this._location.path)}get storage(){return this._service}get parent(){const e=TC(this._location.path);if(e===null)return null;const n=new Ot(this._location.bucket,e);return new Zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tC(e)}}function $C(t,e,n){t._throwIfRoot("uploadBytes");const r=LC(t.storage,t._location,cy(),new Jn(e,!0),n);return t.storage.makeRequestWithTokens(r,fy).then(s=>({metadata:s,ref:t}))}function jC(t){t._throwIfRoot("getDownloadURL");const e=DC(t.storage,t._location,cy());return t.storage.makeRequestWithTokens(e,fy).then(n=>{if(n===null)throw ZS();return n})}function BC(t,e){const n=AC(t._location.path,e),r=new Ot(t._location.bucket,n);return new Zr(t.storage,r)}/**
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
 */function qC(t){return/^[A-Za-z]+:\/\//.test(t)}function HC(t,e){return new Zr(t,e)}function py(t,e){if(t instanceof Dh){const n=t;if(n._bucket==null)throw JS();const r=new Zr(n,n._bucket);return e!=null?py(r,e):r}else return e!==void 0?BC(t,e):t}function WC(t,e){if(e&&qC(e)){if(t instanceof Dh)return HC(t,e);throw fu("To use ref(service, url), the first argument must be a Storage instance.")}else return py(t,e)}function vp(t,e){const n=e==null?void 0:e[ey];return n==null?null:Ot.makeFromBucketSpec(n,t)}function KC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:f_(s,t.app.options.projectId))}class Dh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Z_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$S,this._maxUploadRetryTime=jS,this._requests=new Set,s!=null?this._bucket=Ot.makeFromBucketSpec(s,this._host):this._bucket=vp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ot.makeFromBucketSpec(this._url,e):this._bucket=vp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new nC(ty());{const o=fC(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const wp="@firebase/storage",Ep="0.11.2";/**
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
 */const gy="storage";function zC(t,e,n){return t=Ye(t),$C(t,e,n)}function GC(t){return t=Ye(t),jC(t)}function QC(t,e){return t=Ye(t),WC(t,e)}function YC(t=vh(),e){t=Ye(t);const r=_c(t,gy).getImmediate({identifier:e}),s=u_("storage");return s&&JC(r,...s),r}function JC(t,e,n,r={}){KC(t,e,n,r)}function XC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Dh(n,r,s,e,is)}function ZC(){Yr(new dr(gy,XC,"PUBLIC").setMultipleInstances(!0)),hn(wp,Ep,""),hn(wp,Ep,"esm2017")}ZC();const ek=YC(Ec),tk=async(t,e)=>{const n=QC(ek,`profilePictures/${e}`),r=await zC(n,t);return await GC(r.ref)};var nk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Vh=Vh||{},re=nk||self;function Ic(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function po(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rk(t){return Object.prototype.hasOwnProperty.call(t,wl)&&t[wl]||(t[wl]=++sk)}var wl="closure_uid_"+(1e9*Math.random()>>>0),sk=0;function ik(t,e,n){return t.call.apply(t.bind,arguments)}function ok(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?gt=ik:gt=ok,gt.apply(null,arguments)}function Bo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function wr(){this.s=this.s,this.o=this.o}var ak=0;wr.prototype.s=!1;wr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ak!=0)&&rk(this)};wr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const my=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Mh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ip(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ic(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var ck=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",()=>{},e),re.removeEventListener("test",()=>{},e)}catch{}return t}();function Bi(t){return/^[\s\xa0]*$/.test(t)}function Tc(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function sn(t){return Tc().indexOf(t)!=-1}function Lh(t){return Lh[" "](t),t}Lh[" "]=function(){};function lk(t,e){var n=tO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var uk=sn("Opera"),Ms=sn("Trident")||sn("MSIE"),_y=sn("Edge"),pu=_y||Ms,yy=sn("Gecko")&&!(Tc().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge"))&&!(sn("Trident")||sn("MSIE"))&&!sn("Edge"),hk=Tc().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge");function vy(){var t=re.document;return t?t.documentMode:void 0}var gu;e:{var El="",Il=function(){var t=Tc();if(yy)return/rv:([^\);]+)(\)|;)/.exec(t);if(_y)return/Edge\/([\d\.]+)/.exec(t);if(Ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hk)return/WebKit\/(\S+)/.exec(t);if(uk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Il&&(El=Il?Il[1]:""),Ms){var Tl=vy();if(Tl!=null&&Tl>parseFloat(El)){gu=String(Tl);break e}}gu=El}var mu;if(re.document&&Ms){var Tp=vy();mu=Tp||parseInt(gu,10)||void 0}else mu=void 0;var dk=mu;function qi(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yy){e:{try{Lh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qi.$.h.call(this)}}nt(qi,mt);var fk={2:"touch",3:"pen",4:"mouse"};qi.prototype.h=function(){qi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var go="closure_listenable_"+(1e6*Math.random()|0),pk=0;function gk(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++pk,this.fa=this.ia=!1}function Ac(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Uh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function wy(t){const e={};for(const n in t)e[n]=t[n];return e}const Ap="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ey(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Ap.length;i++)n=Ap[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function bc(t){this.src=t,this.g={},this.h=0}bc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=yu(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gk(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function _u(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=my(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ac(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Fh="closure_lm_"+(1e6*Math.random()|0),Al={};function Iy(t,e,n,r,s){if(r&&r.once)return Ay(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Iy(t,e[i],n,r,s);return null}return n=Bh(n),t&&t[go]?t.O(e,n,po(r)?!!r.capture:!!r,s):Ty(t,e,n,!1,r,s)}function Ty(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=po(s)?!!s.capture:!!s,a=jh(t);if(a||(t[Fh]=a=new bc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=_k(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ck||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ry(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _k(){function t(n){return e.call(t.src,t.listener,n)}const e=yk;return t}function Ay(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ay(t,e[i],n,r,s);return null}return n=Bh(n),t&&t[go]?t.P(e,n,po(r)?!!r.capture:!!r,s):Ty(t,e,n,!0,r,s)}function by(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)by(t,e[i],n,r,s);else r=po(r)?!!r.capture:!!r,n=Bh(n),t&&t[go]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=yu(i,n,r,s),-1<n&&(Ac(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=jh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yu(e,n,r,s)),(n=-1<t?e[t]:null)&&$h(n))}function $h(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[go])_u(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ry(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jh(e))?(_u(n,t),n.h==0&&(n.src=null,e[Fh]=null)):Ac(t)}}}function Ry(t){return t in Al?Al[t]:Al[t]="on"+t}function yk(t,e){if(t.fa)t=!0;else{e=new qi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&$h(t),t=n.call(r,e)}return t}function jh(t){return t=t[Fh],t instanceof bc?t:null}var bl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bh(t){return typeof t=="function"?t:(t[bl]||(t[bl]=function(e){return t.handleEvent(e)}),t[bl])}function tt(){wr.call(this),this.i=new bc(this),this.S=this,this.J=null}nt(tt,wr);tt.prototype[go]=!0;tt.prototype.removeEventListener=function(t,e,n,r){by(this,t,e,n,r)};function ot(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var s=e;e=new mt(r,t),Ey(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=qo(o,r,!0,e)&&s}if(o=e.g=t,s=qo(o,r,!0,e)&&s,s=qo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=qo(o,r,!1,e)&&s}tt.prototype.N=function(){if(tt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ac(n[r]);delete t.g[e],t.h--}}this.J=null};tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};tt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&_u(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var qh=re.JSON.stringify;class vk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function wk(){var t=Hh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ek{constructor(){this.h=this.g=null}add(e,n){const r=Py.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Py=new vk(()=>new Ik,t=>t.reset());class Ik{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Tk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ak(t){re.setTimeout(()=>{throw t},0)}let Hi,Wi=!1,Hh=new Ek,Sy=()=>{const t=re.Promise.resolve(void 0);Hi=()=>{t.then(bk)}};var bk=()=>{for(var t;t=wk();){try{t.h.call(t.g)}catch(n){Ak(n)}var e=Py;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wi=!1};function Rc(t,e){tt.call(this),this.h=t||1,this.g=e||re,this.j=gt(this.qb,this),this.l=Date.now()}nt(Rc,tt);D=Rc.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(Wh(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Rc.$.N.call(this),Wh(this),delete this.g};function Kh(t,e,n){if(typeof t=="function")n&&(t=gt(t,n));else if(t&&typeof t.handleEvent=="function")t=gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function Cy(t){t.g=Kh(()=>{t.g=null,t.i&&(t.i=!1,Cy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Rk extends wr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cy(this)}N(){super.N(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(t){wr.call(this),this.h=t,this.g={}}nt(Ki,wr);var bp=[];function ky(t,e,n,r){Array.isArray(n)||(n&&(bp[0]=n.toString()),n=bp);for(var s=0;s<n.length;s++){var i=Iy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Oy(t){Uh(t.g,function(e,n){this.g.hasOwnProperty(n)&&$h(e)},t),t.g={}}Ki.prototype.N=function(){Ki.$.N.call(this),Oy(this)};Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pc(){this.g=!0}Pc.prototype.Ea=function(){this.g=!1};function Pk(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Sk(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ts(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kk(t,n)+(r?" "+r:"")})}function Ck(t,e){t.info(function(){return"TIMEOUT: "+e})}Pc.prototype.info=function(){};function kk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return qh(n)}catch{return e}}var as={},Rp=null;function Sc(){return Rp=Rp||new tt}as.Ta="serverreachability";function xy(t){mt.call(this,as.Ta,t)}nt(xy,mt);function zi(t){const e=Sc();ot(e,new xy(e))}as.STAT_EVENT="statevent";function Ny(t,e){mt.call(this,as.STAT_EVENT,t),this.stat=e}nt(Ny,mt);function bt(t){const e=Sc();ot(e,new Ny(e,t))}as.Ua="timingevent";function Dy(t,e){mt.call(this,as.Ua,t),this.size=e}nt(Dy,mt);function mo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Cc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Vy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zh(){}zh.prototype.h=null;function Pp(t){return t.h||(t.h=t.i())}function My(){}var _o={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Gh(){mt.call(this,"d")}nt(Gh,mt);function Qh(){mt.call(this,"c")}nt(Qh,mt);var vu;function kc(){}nt(kc,zh);kc.prototype.g=function(){return new XMLHttpRequest};kc.prototype.i=function(){return{}};vu=new kc;function yo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ki(this),this.P=Ok,t=pu?125:void 0,this.V=new Rc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ly}function Ly(){this.i=null,this.g="",this.h=!1}var Ok=45e3,wu={},$a={};D=yo.prototype;D.setTimeout=function(t){this.P=t};function Eu(t,e,n){t.L=1,t.v=xc(Nn(e)),t.s=n,t.S=!0,Uy(t,null)}function Uy(t,e){t.G=Date.now(),vo(t),t.A=Nn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Ky(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Ly,t.g=fv(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Rk(gt(t.Pa,t,t.g),t.O)),ky(t.U,t.g,"readystatechange",t.nb),e=t.I?wy(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),zi(),Pk(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&an(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=an(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||pu||this.g&&(this.h.h||this.g.ja()||Op(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?zi(3):zi(2)),Oc(this);var n=this.g.da();this.ca=n;t:if(Fy(this)){var r=Op(this.g);t="";var s=r.length,i=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),Ti(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Sk(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bi(a)){var l=a;break t}}l=null}if(n=l)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Iu(this,n);else{this.i=!1,this.o=3,bt(12),Or(this),Ti(this);break e}}this.S?($y(this,u,o),pu&&this.i&&u==3&&(ky(this.U,this.V,"tick",this.mb),this.V.start())):(Ts(this.j,this.m,o,null),Iu(this,o)),u==4&&Or(this),this.i&&!this.J&&(u==4?lv(this.l,this):(this.i=!1,vo(this)))}else Xk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),Or(this),Ti(this)}}}catch{}finally{}};function Fy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function $y(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=xk(t,n),s==$a){e==4&&(t.o=4,bt(14),r=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(s==wu){t.o=4,bt(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ts(t.j,t.m,s,null),Iu(t,s);Fy(t)&&s!=$a&&s!=wu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),td(e),e.M=!0,bt(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),Or(t),Ti(t))}D.mb=function(){if(this.g){var t=an(this.g),e=this.g.ja();this.C<e.length&&(Oc(this),$y(this,t,e),this.i&&t!=4&&vo(this))}};function xk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?$a:(n=Number(e.substring(n,r)),isNaN(n)?wu:(r+=1,r+n>e.length?$a:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,Or(this)};function vo(t){t.Y=Date.now()+t.P,jy(t,t.P)}function jy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mo(gt(t.lb,t),e)}function Oc(t){t.B&&(re.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ck(this.j,this.A),this.L!=2&&(zi(),bt(17)),Or(this),this.o=2,Ti(this)):jy(this,this.Y-t)};function Ti(t){t.l.H==0||t.J||lv(t.l,t)}function Or(t){Oc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wh(t.V),Oy(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Iu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Tu(n.i,t))){if(!t.K&&Tu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)qa(n),Mc(n);else break e;ed(n),bt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=mo(gt(n.ib,n),6e3));if(1>=Qy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else xr(n,11)}else if((t.K||n.g==t)&&qa(n),!Bi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Yh(i,i.h),i.h=null))}if(r.F){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,Se(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=dv(r,r.J?r.pa:null,r.Y),o.K){Yy(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Oc(a),vo(a)),r.g=o}else av(r);0<n.j.length&&Lc(n)}else l[0]!="stop"&&l[0]!="close"||xr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?xr(n,7):Zh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}zi(4)}catch{}}function Nk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ic(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Dk(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ic(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function By(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ic(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Dk(t),r=Nk(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var qy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Br(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Br){this.h=t.h,ja(this,t.j),this.s=t.s,this.g=t.g,Ba(this,t.m),this.l=t.l;var e=t.i,n=new Gi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sp(this,n),this.o=t.o}else t&&(e=String(t).match(qy))?(this.h=!1,ja(this,e[1]||"",!0),this.s=di(e[2]||""),this.g=di(e[3]||"",!0),Ba(this,e[4]),this.l=di(e[5]||"",!0),Sp(this,e[6]||"",!0),this.o=di(e[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}Br.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fi(e,Cp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fi(e,Cp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fi(n,n.charAt(0)=="/"?Uk:Lk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fi(n,$k)),t.join("")};function Nn(t){return new Br(t)}function ja(t,e,n){t.j=n?di(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ba(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sp(t,e,n){e instanceof Gi?(t.i=e,jk(t.i,t.h)):(n||(e=fi(e,Fk)),t.i=new Gi(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function xc(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function di(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Mk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Mk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cp=/[#\/\?@]/g,Lk=/[#\?:]/g,Uk=/[#\?]/g,Fk=/[#\?@]/g,$k=/#/g;function Gi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Er(t){t.g||(t.g=new Map,t.h=0,t.i&&Vk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Gi.prototype;D.add=function(t,e){Er(this),this.i=null,t=Ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hy(t,e){Er(t),e=Ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Wy(t,e){return Er(t),e=Ws(t,e),t.g.has(e)}D.forEach=function(t,e){Er(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){Er(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){Er(this);let e=[];if(typeof t=="string")Wy(this,t)&&(e=e.concat(this.g.get(Ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Er(this),this.i=null,t=Ws(this,t),Wy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Ky(t,e,n){Hy(t,e),0<n.length&&(t.i=null,t.g.set(Ws(t,e),Mh(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jk(t,e){e&&!t.j&&(Er(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Hy(this,r),Ky(this,s,n))},t)),t.j=e}var Bk=class{constructor(t,e){this.g=t,this.map=e}};function zy(t){this.l=t||qk,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ka&&re.g.Ka()&&re.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qk=10;function Gy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qy(t){return t.h?1:t.g?t.g.size:0}function Tu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yh(t,e){t.g?t.g.add(e):t.h=e}function Yy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zy.prototype.cancel=function(){if(this.i=Jy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Jy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Mh(t.i)}var Hk=class{stringify(t){return re.JSON.stringify(t,void 0)}parse(t){return re.JSON.parse(t,void 0)}};function Wk(){this.g=new Hk}function Kk(t,e,n){const r=n||"";try{By(t,function(s,i){let o=s;po(s)&&(o=qh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function zk(t,e){const n=new Pc;if(re.Image){const r=new Image;r.onload=Bo(Ho,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Bo(Ho,n,r,"TestLoadImage: error",!1,e),r.onabort=Bo(Ho,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Bo(Ho,n,r,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ho(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Nc(t){this.l=t.fc||null,this.j=t.ob||!1}nt(Nc,zh);Nc.prototype.g=function(){return new Dc(this.l,this.j)};Nc.prototype.i=function(t){return function(){return t}}({});function Dc(t,e){tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Dc,tt);var Jh=0;D=Dc.prototype;D.open=function(t,e){if(this.readyState!=Jh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qi(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||re).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wo(this)),this.readyState=Jh};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qi(this)),this.g&&(this.readyState=3,Qi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Xy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wo(this):Qi(this),this.readyState==3&&Xy(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,wo(this))};D.Ya=function(t){this.g&&(this.response=t,wo(this))};D.ka=function(){this.g&&wo(this)};function wo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qi(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Gk=re.JSON.parse;function Fe(t){tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Zy,this.L=this.M=!1}nt(Fe,tt);var Zy="",Qk=/^https?$/i,Yk=["POST","PUT"];D=Fe.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vu.g(),this.C=this.u?Pp(this.u):Pp(vu),this.g.onreadystatechange=gt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){kp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=re.FormData&&t instanceof re.FormData,!(0<=my(Yk,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{nv(this),0<this.B&&((this.L=Jk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=gt(this.ua,this)):this.A=Kh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){kp(this,i)}};function Jk(t){return Ms&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Vh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function kp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ev(t),Vc(t)}function ev(t){t.F||(t.F=!0,ot(t,"complete"),ot(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),Vc(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vc(this,!0)),Fe.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?tv(this):this.kb())};D.kb=function(){tv(this)};function tv(t){if(t.h&&typeof Vh<"u"&&(!t.C[1]||an(t)!=4||t.da()!=2)){if(t.v&&an(t)==4)Kh(t.La,0,t);else if(ot(t,"readystatechange"),an(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(qy)[1]||null;!s&&re.self&&re.self.location&&(s=re.self.location.protocol.slice(0,-1)),r=!Qk.test(s?s.toLowerCase():"")}n=r}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var i=2<an(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",ev(t)}}finally{Vc(t)}}}}function Vc(t,e){if(t.g){nv(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=r}catch{}}}function nv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function an(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Gk(e)}};function Op(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Zy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Xk(t){const e={};t=(t.g&&2<=an(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Bi(t[r]))continue;var n=Tk(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}mk(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rv(t){let e="";return Uh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function si(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sv(t){this.Ga=0,this.j=[],this.l=new Pc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=si("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=si("baseRetryDelayMs",5e3,t),this.hb=si("retryDelaySeedMs",1e4,t),this.eb=si("forwardChannelMaxRetries",2,t),this.xa=si("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new zy(t&&t.concurrentRequestLimit),this.Ja=new Wk,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=sv.prototype;D.ra=8;D.H=1;function Zh(t){if(iv(t),t.H==3){var e=t.W++,n=Nn(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),Eo(t,n),e=new yo(t,t.l,e),e.L=2,e.v=xc(Nn(n)),n=!1,re.navigator&&re.navigator.sendBeacon)try{n=re.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=fv(e.l,null),e.g.ha(e.v)),e.G=Date.now(),vo(e)}hv(t)}function Mc(t){t.g&&(td(t),t.g.cancel(),t.g=null)}function iv(t){Mc(t),t.u&&(re.clearTimeout(t.u),t.u=null),qa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Lc(t){if(!Gy(t.i)&&!t.m){t.m=!0;var e=t.Na;Hi||Sy(),Wi||(Hi(),Wi=!0),Hh.add(e,t),t.C=0}}function Zk(t,e){return Qy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=mo(gt(t.Na,t,e),uv(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new yo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=wy(i),Ey(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ov(this,s,e),n=Nn(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),Eo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(rv(i)))+"&"+e:this.o&&Xh(n,this.o,i)),Yh(this.i,s),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),s.aa=!0,Eu(s,n,null)):Eu(s,n,e),this.H=2}}else this.H==3&&(t?xp(this,t):this.j.length==0||Gy(this.i)||xp(this))};function xp(t,e){var n;e?n=e.m:n=t.W++;const r=Nn(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),Eo(t,r),t.o&&t.s&&Xh(r,t.o,t.s),n=new yo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ov(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Yh(t.i,n),Eu(n,r,e)}function Eo(t,e){t.na&&Uh(t.na,function(n,r){Se(e,r,n)}),t.h&&By({},function(n,r){Se(e,r,n)})}function ov(t,e,n){n=Math.min(t.j.length,n);var r=t.h?gt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Kk(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function av(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Hi||Sy(),Wi||(Hi(),Wi=!0),Hh.add(e,t),t.A=0}}function ed(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=mo(gt(t.Ma,t),uv(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,cv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=mo(gt(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,bt(10),Mc(this),cv(this))};function td(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function cv(t){t.g=new yo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Nn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),Eo(t,e),t.o&&t.s&&Xh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=xc(Nn(e)),n.s=null,n.S=!0,Uy(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Mc(this),ed(this),bt(19))};function qa(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function lv(t,e){var n=null;if(t.g==e){qa(t),td(t),t.g=null;var r=2}else if(Tu(t.i,e))n=e.F,Yy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Sc(),ot(r,new Dy(r,n)),Lc(t)}else av(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Zk(t,e)||r==2&&ed(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:xr(t,5);break;case 4:xr(t,10);break;case 3:xr(t,6);break;default:xr(t,2)}}}function uv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function xr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=gt(t.pb,t);n||(n=new Br("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||ja(n,"https"),xc(n)),zk(n.toString(),r)}else bt(2);t.H=0,t.h&&t.h.za(e),hv(t),iv(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),bt(2)):(this.l.info("Failed to ping google.com"),bt(1))};function hv(t){if(t.H=0,t.ma=[],t.h){const e=Jy(t.i);(e.length!=0||t.j.length!=0)&&(Ip(t.ma,e),Ip(t.ma,t.j),t.i.i.length=0,Mh(t.j),t.j.length=0),t.h.ya()}}function dv(t,e,n){var r=n instanceof Br?Nn(n):new Br(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ba(r,r.m);else{var s=re.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Br(null);r&&ja(i,r),e&&(i.g=e),s&&Ba(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),Eo(t,r),r}function fv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Fe(new Nc({ob:!0})):new Fe(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function pv(){}D=pv.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Ha(){if(Ms&&!(10<=Number(dk)))throw Error("Environmental error: no available transport.")}Ha.prototype.g=function(t,e){return new Vt(t,e)};function Vt(t,e){tt.call(this),this.g=new sv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Bi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ks(this)}nt(Vt,tt);Vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=dv(t,null,t.Y),Lc(t)};Vt.prototype.close=function(){Zh(this.g)};Vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=qh(t),t=n);e.j.push(new Bk(e.fb++,t)),e.H==3&&Lc(e)};Vt.prototype.N=function(){this.g.h=null,delete this.j,Zh(this.g),delete this.g,Vt.$.N.call(this)};function gv(t){Gh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(gv,Gh);function mv(){Qh.call(this),this.status=1}nt(mv,Qh);function Ks(t){this.g=t}nt(Ks,pv);Ks.prototype.Ba=function(){ot(this.g,"a")};Ks.prototype.Aa=function(t){ot(this.g,new gv(t))};Ks.prototype.za=function(t){ot(this.g,new mv)};Ks.prototype.ya=function(){ot(this.g,"b")};function eO(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(Qt,eO);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Rl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Rl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Rl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Rl(this,r),s=0;break}}this.h=s,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ie(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var tO={};function nd(t){return-128<=t&&128>t?lk(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function cn(t){if(isNaN(t)||!isFinite(t))return Ss;if(0>t)return it(cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Au;return new Ie(e,0)}function _v(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return it(_v(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=cn(Math.pow(e,8)),r=Ss,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=cn(Math.pow(e,i)),r=r.R(i).add(cn(o))):(r=r.R(n),r=r.add(cn(o)))}return r}var Au=4294967296,Ss=nd(0),bu=nd(1),Np=nd(16777216);D=Ie.prototype;D.ea=function(){if(Ft(this))return-it(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Au+r)*e,e*=Au}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Cn(this))return"0";if(Ft(this))return"-"+it(this).toString(t);for(var e=cn(Math.pow(t,6)),n=this,r="";;){var s=Ka(n,e).g;n=Wa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Cn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}D.X=function(t){return t=Wa(this,t),Ft(t)?-1:Cn(t)?0:1};function it(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ie(n,~t.h).add(bu)}D.abs=function(){return Ft(this)?it(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function Wa(t,e){return t.add(it(e))}D.R=function(t){if(Cn(this)||Cn(t))return Ss;if(Ft(this))return Ft(t)?it(this).R(it(t)):it(it(this).R(t));if(Ft(t))return it(this.R(it(t)));if(0>this.X(Np)&&0>t.X(Np))return cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Wo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Wo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Wo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Wo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ie(n,0)};function Wo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ii(t,e){this.g=t,this.h=e}function Ka(t,e){if(Cn(e))throw Error("division by zero");if(Cn(t))return new ii(Ss,Ss);if(Ft(t))return e=Ka(it(t),e),new ii(it(e.g),it(e.h));if(Ft(e))return e=Ka(t,it(e)),new ii(it(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=bu,r=e;0>=r.X(t);)n=Dp(n),r=Dp(r);var s=ms(n,1),i=ms(r,1);for(r=ms(r,2),n=ms(n,2);!Cn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=ms(r,1),n=ms(n,1)}return e=Wa(t,s.R(e)),new ii(s,e)}for(s=Ss;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=cn(n),o=i.R(e);Ft(o)||0<o.X(t);)n-=r,i=cn(n),o=i.R(e);Cn(i)&&(i=bu),s=s.add(i),t=Wa(t,o)}return new ii(s,t)}D.gb=function(t){return Ka(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ie(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ie(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ie(n,this.h^t.h)};function Dp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ie(n,t.h)}function ms(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(s,t.h)}Ha.prototype.createWebChannel=Ha.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;Cc.NO_ERROR=0;Cc.TIMEOUT=8;Cc.HTTP_ERROR=6;Vy.COMPLETE="complete";My.EventType=_o;_o.OPEN="a";_o.CLOSE="b";_o.ERROR="c";_o.MESSAGE="d";tt.prototype.listen=tt.prototype.O;Fe.prototype.listenOnce=Fe.prototype.P;Fe.prototype.getLastError=Fe.prototype.Sa;Fe.prototype.getLastErrorCode=Fe.prototype.Ia;Fe.prototype.getStatus=Fe.prototype.da;Fe.prototype.getResponseJson=Fe.prototype.Wa;Fe.prototype.getResponseText=Fe.prototype.ja;Fe.prototype.send=Fe.prototype.ha;Fe.prototype.setWithCredentials=Fe.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=cn;Ie.fromString=_v;var nO=function(){return new Ha},rO=function(){return Sc()},Pl=Cc,sO=Vy,iO=as,Vp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ko=My,oO=Fe,aO=Qt,Cs=Ie;const Mp="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let zs="10.3.0";/**
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
 */const es=new _h("@firebase/firestore");function Lp(){return es.logLevel}function W(t,...e){if(es.logLevel<=me.DEBUG){const n=e.map(rd);es.debug(`Firestore (${zs}): ${t}`,...n)}}function Dn(t,...e){if(es.logLevel<=me.ERROR){const n=e.map(rd);es.error(`Firestore (${zs}): ${t}`,...n)}}function Ls(t,...e){if(es.logLevel<=me.WARN){const n=e.map(rd);es.warn(`Firestore (${zs}): ${t}`,...n)}}function rd(t){if(typeof t=="string")return t;try{/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function ke(t,e){t||te()}function ae(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class yv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class lO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uO{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new yv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new ut(e)}}class hO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new fO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class vv{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=gO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Us(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Qe(0,0))}static max(){return new oe(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Yi{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends Yi{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const mO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Yi{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return mO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ce.fromString(e))}static fromName(e){return new Q(Ce.fromString(e).popFirst(5))}static empty(){return new Q(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ce(e.slice()))}}function _O(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new fr(s,Q.empty(),e)}function yO(t){return new fr(t.readTime,t.key,-1)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(oe.min(),Q.empty(),-1)}static max(){return new fr(oe.max(),Q.empty(),-1)}}function vO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const wO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Io(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==wO)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function To(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}sd.ae=-1;function Uc(t){return t==null}function za(t){return t===0&&1/t==-1/0}function IO(t){return typeof t=="number"&&Number.isInteger(t)&&!za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Up(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fp(this.data.getIterator())}getIteratorFrom(e){return new Fp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class Fp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new _t(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ev extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ev("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const TO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=TO.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
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
 */function id(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function od(t){const e=t.mapValue.fields.__previous_value__;return id(e)?od(e):e}function Ji(t){const e=pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class AO{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?id(t)?4:bO(t)?9007199254740991:10:te()}function yn(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pr(s.timestampValue),a=pr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ts(s.bytesValue).isEqual(ts(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),a=He(i.doubleValue);return o===a?za(o)===za(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Up(o)!==Up(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!yn(o[c],a[c])))return!1;return!0}(t,e);default:return te()}}function Zi(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Fs(t,e){if(t===e)return 0;const n=ns(t),r=ns(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=He(i.integerValue||i.doubleValue),c=He(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return $p(t.timestampValue,e.timestampValue);case 4:return $p(Ji(t),Ji(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ts(i),c=ts(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ye(a[l],c[l]);if(u!==0)return u}return ye(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(He(i.latitude),He(o.latitude));return a!==0?a:ye(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Fs(a[l],c[l]);if(u)return u}return ye(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Go.mapValue&&o===Go.mapValue)return 0;if(i===Go.mapValue)return 1;if(o===Go.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ye(c[h],u[h]);if(d!==0)return d;const p=Fs(a[c[h]],l[u[h]]);if(p!==0)return p}return ye(c.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function $p(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=pr(t),r=pr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function $s(t){return Ru(t)}function Ru(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ru(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ru(n.fields[o])}`;return s+"}"}(t.mapValue):te()}function jp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pu(t){return!!t&&"integerValue"in t}function ad(t){return!!t&&"arrayValue"in t}function Bp(t){return!!t&&"nullValue"in t}function qp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ha(t){return!!t&&"mapValue"in t}function Ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ha(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ai(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ai(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ha(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ha(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new $t(Ai(this.value))}}function Iv(t){const e=[];return Gs(t.fields,(n,r)=>{const s=new ft([n]);if(ha(r)){const i=Iv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
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
 */class ht{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,oe.min(),oe.min(),oe.min(),$t.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,oe.min(),oe.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,oe.min(),oe.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ga{constructor(e,n){this.position=e,this.inclusive=n}}function Hp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Fs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ks{constructor(e,n="asc"){this.field=e,this.dir=n}}function RO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Tv{}class Ke extends Tv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SO(e,n,r):n==="array-contains"?new OO(e,r):n==="in"?new xO(e,r):n==="not-in"?new NO(e,r):n==="array-contains-any"?new DO(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CO(e,r):new kO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fs(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(Fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Yt extends Tv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Yt(e,n)}matches(e){return Av(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Av(t){return t.op==="and"}function bv(t){return PO(t)&&Av(t)}function PO(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Su(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+$s(t.value);if(bv(t))return t.filters.map(e=>Su(e)).join(",");{const e=t.filters.map(n=>Su(n)).join(",");return`${t.op}(${e})`}}function Rv(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Rv(o,s.filters[a]),!0):!1}(t,e):void te()}function Pv(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${$s(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(Pv).join(" ,")+"}"}(t):"Filter"}class SO extends Ke{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class CO extends Ke{constructor(e,n){super(e,"in",n),this.keys=Sv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kO extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=Sv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class OO extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ad(n)&&Zi(n.arrayValue,this.value)}}class xO extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zi(this.value.arrayValue,n)}}class NO extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zi(this.value.arrayValue,n)}}class DO extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ad(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zi(this.value.arrayValue,r))}}/**
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
 */class VO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Kp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new VO(t,e,n,r,s,i,o)}function cd(t){const e=ae(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Su(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$s(r)).join(",")),e.he=n}return e.he}function ld(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wp(t.startAt,e.startAt)&&Wp(t.endAt,e.endAt)}function Cu(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function MO(t,e,n,r,s,i,o,a){return new Qs(t,e,n,r,s,i,o,a)}function ud(t){return new Qs(t)}function zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Cv(t){return t.collectionGroup!==null}function bi(t){const e=ae(t);if(e.Pe===null){e.Pe=[];const n=Fc(e),r=hd(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new ks(n)),e.Pe.push(new ks(ft.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ks(ft.keyField(),i))}}}return e.Pe}function Vn(t){const e=ae(t);return e.Ie||(e.Ie=LO(e,bi(t))),e.Ie}function LO(t,e){if(t.limitType==="F")return Kp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ks(s.field,i)});const n=t.endAt?new Ga(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ga(t.startAt.position,t.startAt.inclusive):null;return Kp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ku(t,e){e.getFirstInequalityField(),Fc(t);const n=t.filters.concat([e]);return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ou(t,e,n){return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $c(t,e){return ld(Vn(t),Vn(e))&&t.limitType===e.limitType}function kv(t){return`${cd(Vn(t))}|lt:${t.limitType}`}function xu(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Pv(s)).join(", ")}]`),Uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>$s(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>$s(s)).join(",")),`Target(${r})`}(Vn(t))}; limitType=${t.limitType})`}function jc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of bi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Hp(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,bi(r),s)||r.endAt&&!function(o,a,c){const l=Hp(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,bi(r),s))}(t,e)}function UO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ov(t){return(e,n)=>{let r=!1;for(const s of bi(t)){const i=FO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FO(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Fs(c,l):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wv(this.inner)}size(){return this.innerSize}}/**
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
 */const $O=new Me(Q.comparator);function Mn(){return $O}const xv=new Me(Q.comparator);function pi(...t){let e=xv;for(const n of t)e=e.insert(n.key,n);return e}function Nv(t){let e=xv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return Ri()}function Dv(){return Ri()}function Ri(){return new Ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const jO=new Me(Q.comparator),BO=new _t(Q.comparator);function he(...t){let e=BO;for(const n of t)e=e.add(n);return e}const qO=new _t(ye);function HO(){return qO}/**
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
 */function Vv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(e)?"-0":e}}function Mv(t){return{integerValue:""+t}}function WO(t,e){return IO(e)?Mv(e):Vv(t,e)}/**
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
 */class Bc{constructor(){this._=void 0}}function KO(t,e,n){return t instanceof Qa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&id(i)&&(i=od(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof eo?Uv(t,e):t instanceof to?Fv(t,e):function(s,i){const o=Lv(s,i),a=Gp(o)+Gp(s.Ee);return Pu(o)&&Pu(s.Ee)?Mv(a):Vv(s.serializer,a)}(t,e)}function zO(t,e,n){return t instanceof eo?Uv(t,e):t instanceof to?Fv(t,e):n}function Lv(t,e){return t instanceof Ya?function(r){return Pu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qa extends Bc{}class eo extends Bc{constructor(e){super(),this.elements=e}}function Uv(t,e){const n=$v(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class to extends Bc{constructor(e){super(),this.elements=e}}function Fv(t,e){let n=$v(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class Ya extends Bc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Gp(t){return He(t.integerValue||t.doubleValue)}function $v(t){return ad(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof eo&&s instanceof eo||r instanceof to&&s instanceof to?Us(r.elements,s.elements,yn):r instanceof Ya&&s instanceof Ya?yn(r.Ee,s.Ee):r instanceof Qa&&s instanceof Qa}(t.transform,e.transform)}class QO{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function jv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qv(t.key,pn.none()):new Ao(t.key,t.data,pn.none());{const n=t.data,r=$t.empty();let s=new _t(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new cs(t.key,r,new Kt(s.toArray()),pn.none())}}function YO(t,e,n){t instanceof Ao?function(s,i,o){const a=s.value.clone(),c=Yp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof cs?function(s,i,o){if(!da(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Yp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Bv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pi(t,e,n,r){return t instanceof Ao?function(i,o,a,c){if(!da(i.precondition,o))return a;const l=i.value.clone(),u=Jp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof cs?function(i,o,a,c){if(!da(i.precondition,o))return a;const l=Jp(i.fieldTransforms,c,o),u=o.data;return u.setAll(Bv(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return da(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function JO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Lv(r.transform,s||null);i!=null&&(n===null&&(n=$t.empty()),n.set(r.field,i))}return n||null}function Qp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Us(r,s,(i,o)=>GO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends qc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cs extends qc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yp(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,zO(o,a,n[s]))}return r}function Jp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KO(i,o,e))}return r}class qv extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XO extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ZO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Dv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=jv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,(n,r)=>Qp(n,r))&&Us(this.baseMutations,e.baseMutations,(n,r)=>Qp(n,r))}}class dd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return jO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new dd(e,n,r,s)}}/**
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
 */class e1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class t1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,fe;function n1(t){switch(t){default:return te();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Hv(t){if(t===void 0)return Dn("GRPC error has no .code"),T.UNKNOWN;switch(t){case qe.OK:return T.OK;case qe.CANCELLED:return T.CANCELLED;case qe.UNKNOWN:return T.UNKNOWN;case qe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case qe.INTERNAL:return T.INTERNAL;case qe.UNAVAILABLE:return T.UNAVAILABLE;case qe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case qe.NOT_FOUND:return T.NOT_FOUND;case qe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case qe.ABORTED:return T.ABORTED;case qe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case qe.DATA_LOSS:return T.DATA_LOSS;default:return te()}}(fe=qe||(qe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function r1(){return new TextEncoder}/**
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
 */const s1=new Cs([4294967295,4294967295],0);function Xp(t){const e=r1().encode(t),n=new aO;return n.update(e),new Uint8Array(n.digest())}function Zp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cs([n,r],0),new Cs([s,i],0)]}class fd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gi(`Invalid padding: ${n}`);if(r<0)throw new gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gi(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Cs.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Cs.fromNumber(r)));return s.compare(s1)===1&&(s=new Cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Xp(e),[r,s]=Zp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Xp(e),[r,s]=Zp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,bo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hc(oe.min(),s,new Me(ye),Mn(),he())}}class bo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bo(r,n,he(),he(),he())}}/**
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
 */class fa{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class Wv{constructor(e,n){this.targetId=e,this.ye=n}}class Kv{constructor(e,n,r=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class eg{constructor(){this.we=0,this.Se=ng(),this.be=wt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=he(),n=he(),r=he();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new bo(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=ng()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class i1{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Mn(),this.Ue=tg(),this.We=new Me(ye)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Cu(i))if(r===0){const o=new Q(i.path);this.je(n,o,ht.newNoDocument(o,oe.min()))}else ke(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ts(r).toUint8Array()}catch(c){if(c instanceof Ev)return Ls("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new fd(o,s,i)}catch(c){return Ls(c instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Cu(a.target)){const c=new Q(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,ht.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=he();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Hc(e,n,this.We,this.$e,r);return this.$e=Mn(),this.Ue=tg(),this.We=new Me(ye),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new eg,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new _t(ye),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new eg),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function tg(){return new Me(Q.comparator)}function ng(){return new Me(Q.comparator)}const o1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),a1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),c1=(()=>({and:"AND",or:"OR"}))();class l1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nu(t,e){return t.useProto3Json||Uc(e)?e:{value:e}}function Ja(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function u1(t,e){return Ja(t,e.toTimestamp())}function gn(t){return ke(!!t),oe.fromTimestamp(function(n){const r=pr(n);return new Qe(r.seconds,r.nanos)}(t))}function pd(t,e){return function(r){return new Ce(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Gv(t){const e=Ce.fromString(t);return ke(Xv(e)),e}function Du(t,e){return pd(t.databaseId,e.path)}function Sl(t,e){const n=Gv(e);if(n.get(1)!==t.databaseId.projectId)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Qv(n))}function Vu(t,e){return pd(t.databaseId,e)}function h1(t){const e=Gv(t);return e.length===4?Ce.emptyPath():Qv(e)}function Mu(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qv(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rg(t,e,n){return{name:Du(t,e),fields:n.value.mapValue.fields}}function d1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ke(u===void 0||typeof u=="string"),wt.fromBase64String(u||"")):(ke(u===void 0||u instanceof Uint8Array),wt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Hv(l.code);return new $(u,l.message||"")}(o);n=new Kv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sl(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):oe.min(),a=new $t({mapValue:{fields:r.document.fields}}),c=ht.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new fa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Sl(t,r.document),i=r.readTime?gn(r.readTime):oe.min(),o=ht.newNoDocument(s,i),a=r.removedTargetIds||[];n=new fa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Sl(t,r.document),i=r.removedTargetIds||[];n=new fa([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new t1(s,i),a=r.targetId;n=new Wv(a,o)}}return n}function f1(t,e){let n;if(e instanceof Ao)n={update:rg(t,e.key,e.value)};else if(e instanceof qv)n={delete:Du(t,e.key)};else if(e instanceof cs)n={update:rg(t,e.key,e.data),updateMask:I1(e.fieldMask)};else{if(!(e instanceof XO))return te();n={verify:Du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof to)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ya)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:u1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function p1(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(oe.min())&&(o=gn(i)),new QO(o,s.transformResults||[])}(n,e))):[]}function g1(t,e){return{documents:[Vu(t,e.path)]}}function m1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Vu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Jv(Yt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:ws(h.field),direction:v1(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Nu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function _1(t){let e=h1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Yv(h);return d instanceof Yt&&bv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new ks(Es(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Uc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Ga(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new Ga(p,d)}(n.endAt)),MO(e,s,o,i,a,"F",c,l)}function y1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Es(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>Yv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function v1(t){return o1[t]}function w1(t){return a1[t]}function E1(t){return c1[t]}function ws(t){return{fieldPath:t.canonicalString()}}function Es(t){return ft.fromServerFormat(t.fieldPath)}function Jv(t){return t instanceof Ke?function(n){if(n.op==="=="){if(qp(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NAN"}};if(Bp(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qp(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NAN"}};if(Bp(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ws(n.field),op:w1(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(s=>Jv(s));return r.length===1?r[0]:{compositeFilter:{op:E1(n.op),filters:r}}}(t):te()}function I1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),a=wt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class T1{constructor(e){this.ht=e}}function A1(t){const e=_1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ou(e,e.limit,"L"):e}/**
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
 */class b1{constructor(){this._n=new R1}addToCollectionParentIndex(e,n){return this._n.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(fr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class R1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _t(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _t(Ce.comparator)).toArray()}}/**
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
 */class js{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new js(0)}static Bn(){return new js(-1)}}/**
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
 */class P1{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class S1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class C1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Pi(r.mutation,s,Kt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=Nr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=pi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Mn();const o=Ri(),a=function(){return Ri()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof cs)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Pi(u.mutation,l,u.mutation.getFieldMask(),Qe.now())):o.set(l.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new S1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ri();let s=new Me((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Kt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||he()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Dv();u.forEach(d=>{if(!i.has(d)){const p=jv(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Cv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(Nr());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:Nv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=pi();return this.indexManager.getCollectionParents(e,s).next(o=>R.forEach(o,a=>{const c=function(u,h){return new Qs(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ht.newInvalidDocument(l)))});let o=pi();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Pi(l.mutation,c,Kt.empty(),Qe.now()),jc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class k1{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return R.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:A1(s.bundledQuery),readTime:gn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class O1{constructor(){this.overlays=new Me(Q.comparator),this.hr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=Nr(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Nr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Nr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new e1(n,r));let i=this.hr.get(n);i===void 0&&(i=he(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class gd{constructor(){this.Pr=new _t(Xe.Ir),this.Tr=new _t(Xe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Xe(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Q(new Ce([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Q(new Ce([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=he();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Q.comparator(e.key,n.key)||ye(e.pr,n.pr)}static Er(e,n){return ye(e.pr,n.pr)||Q.comparator(e.key,n.key)}}/**
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
 */class x1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new _t(Xe.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(ye);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Q(i),0);let a=new _t(ye);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),R.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Xe(n,0),s=this.wr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class N1{constructor(e){this.Cr=e,this.docs=function(){return new Me(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,a=new Q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||vO(yO(u),r)<=0||(s.has(u.key)||jc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te()}Fr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new D1(this)}getSize(e){return R.resolve(this.size)}}class D1 extends P1{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class V1{constructor(e){this.persistence=e,this.Mr=new Ys(n=>cd(n),ld),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new gd,this.targetCount=0,this.Br=js.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),R.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new js(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.qn(n),R.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Nr.containsKey(n))}}/**
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
 */class M1{constructor(e,n){this.Lr={},this.overlays={},this.kr=new sd(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new V1(this),this.indexManager=new b1,this.remoteDocumentCache=function(s){return new N1(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new T1(n),this.$r=new k1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new O1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new x1(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new L1(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return R.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class L1 extends EO{constructor(e){super(),this.currentSequenceNumber=e}}class md{constructor(e){this.persistence=e,this.zr=new gd,this.jr=null}static Hr(e){return new md(e)}get Jr(){if(this.jr)return this.jr;throw te()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const s=Q.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return R.or([()=>R.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class _d{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _d(e,n.fromCache,r,s)}}/**
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
 */class U1{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Wi(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.zi(e,n))}Wi(e,n){if(zp(n))return R.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ou(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(e,Ou(n,null,"F")):this.Ji(e,l,n,c)}))})))}Gi(e,n,r,s){return zp(n)||s.isEqual(oe.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.Hi(n,o,r,s)?this.zi(e,n):(Lp()<=me.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xu(n)),this.Ji(e,o,n,_O(s,-1)))})}ji(e,n){let r=new _t(Ov(e));return n.forEach((s,i)=>{jc(e,i)&&(r=r.add(i))}),r}Hi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}zi(e,n){return Lp()<=me.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",xu(n)),this.Ui.getDocumentsMatchingQuery(e,n,fr.min())}Ji(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class F1{constructor(e,n,r,s){this.persistence=e,this.Yi=n,this.serializer=s,this.Zi=new Me(ye),this.Xi=new Ys(i=>cd(i),ld),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new C1(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function $1(t,e,n,r){return new F1(t,e,n,r)}async function Zv(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=he();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function j1(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=R.resolve();return d.forEach(_=>{p=p.next(()=>u.getEntry(c,_)).next(I=>{const w=l.docVersions.get(_);ke(w!==null),I.version.compareTo(w)<0&&(h.applyToRemoteDocument(I,l),I.isValidDocument()&&(I.setReadTime(l.commitVersion),u.addEntry(I)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=he();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ew(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function B1(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});s=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(wt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(I,w,b){return I.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let c=Mn(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(q1(i,o,e.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(oe.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Zi=s,i))}function q1(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:s}})}function H1(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function W1(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Zi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Lu(t,e,n){const r=ae(t),s=r.Zi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!To(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(s.target)}function sg(t,e,n){const r=ae(t);let s=oe.min(),i=he();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=ae(c),d=h.Xi.get(u);return d!==void 0?R.resolve(h.Zi.get(d)):h.Qr.getTargetData(l,u)}(r,o,Vn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:he())).next(a=>(K1(r,UO(e),a),{documents:a,_s:i})))}function K1(t,e,n){let r=t.es.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.es.set(e,r)}class ig{constructor(){this.activeTargetIds=HO()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class z1{constructor(){this.Ys=new ig,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new ig,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class G1{Xs(e){}shutdown(){}}/**
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
 */class og{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qo=null;function Cl(){return Qo===null?Qo=function(){return 268435456+Math.round(2147483648*Math.random())}():Qo++,"0x"+Qo.toString(16)}/**
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
 */const Q1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Y1{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
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
 */const ct="WebChannelConnection";class J1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${s}/databases/${i}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get mo(){return!1}fo(n,r,s,i,o){const a=Cl(),c=this.po(n,r);W("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,i,o),this.wo(n,c,l,s).then(u=>(W("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ls("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}So(n,r,s,i,o,a){return this.fo(n,r,s,i,o)}yo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}po(n,r){const s=Q1[n];return`${this.Ao}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,s){const i=Cl();return new Promise((o,a)=>{const c=new oO;c.setWithCredentials(!0),c.listenOnce(sO.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Pl.NO_ERROR:const u=c.getResponseJson();W(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Pl.TIMEOUT:W(ct,`RPC '${e}' ${i} timed out`),a(new $(T.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const h=c.getStatus();if(W(ct,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(w){const b=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(b)>=0?b:T.UNKNOWN}(p.status);a(new $(_,p.message))}else a(new $(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(T.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{W(ct,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);W(ct,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}bo(e,n,r){const s=Cl(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nO(),a=rO(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");W(ct,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const _=new Y1({_o:w=>{p?W(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(d||(W(ct,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),W(ct,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},ao:()=>h.close()}),I=(w,b,x)=>{w.listen(b,k=>{try{x(k)}catch(z){setTimeout(()=>{throw z},0)}})};return I(h,Ko.EventType.OPEN,()=>{p||W(ct,`RPC '${e}' stream ${s} transport opened.`)}),I(h,Ko.EventType.CLOSE,()=>{p||(p=!0,W(ct,`RPC '${e}' stream ${s} transport closed`),_.To())}),I(h,Ko.EventType.ERROR,w=>{p||(p=!0,Ls(ct,`RPC '${e}' stream ${s} transport errored:`,w),_.To(new $(T.UNAVAILABLE,"The operation could not be completed")))}),I(h,Ko.EventType.MESSAGE,w=>{var b;if(!p){const x=w.data[0];ke(!!x);const k=x,z=k.error||((b=k[0])===null||b===void 0?void 0:b.error);if(z){W(ct,`RPC '${e}' stream ${s} received error:`,z);const U=z.status;let ge=function(Ee){const F=qe[Ee];if(F!==void 0)return Hv(F)}(U),B=z.message;ge===void 0&&(ge=T.INTERNAL,B="Unknown error status: "+U+" with message "+z.message),p=!0,_.To(new $(ge,B)),h.close()}else W(ct,`RPC '${e}' stream ${s} received:`,x),_.Eo(x)}}),I(a,iO.STAT_EVENT,w=>{w.stat===Vp.PROXY?W(ct,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===Vp.NOPROXY&&W(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Io()},0),_}}function kl(){return typeof document<"u"?document:null}/**
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
 */function Wc(t){return new l1(t,!0)}/**
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
 */class tw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=s,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
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
 */class nw{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.ko=r,this.qo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new tw(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qo===n&&this.n_(r,s)},r=>{e(()=>{const s=new $(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(s)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(s=>{r(()=>this.r_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class X1 extends nw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=d1(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?gn(o.readTime):oe.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Mu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Cu(c)?{documents:g1(i,c)}:{query:m1(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zv(i,o.resumeToken);const l=Nu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=Ja(i,o.snapshotVersion.toTimestamp());const l=Nu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=y1(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Mu(this.serializer),n.removeTarget=e,this.Yo(n)}}class Z1 extends nw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=p1(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.l_(r,n)}return ke(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Mu(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>f1(this.serializer,r))};this.Yo(n)}}/**
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
 */class ex extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.I_=!1}T_(){if(this.I_)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.fo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(T.UNKNOWN,s.toString())})}So(e,n,r,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(T.UNKNOWN,i.toString())})}terminate(){this.I_=!0}}class tx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Dn(n),this.R_=!1):W("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
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
 */class nx{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{ls(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ae(c);l.S_.add(4),await Ro(l),l.v_.set("Unknown"),l.S_.delete(4),await Kc(l)}(this))})}),this.v_=new tx(r,s)}}async function Kc(t){if(ls(t))for(const e of t.b_)await e(!0)}async function Ro(t){for(const e of t.b_)await e(!1)}function rw(t,e){const n=ae(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),wd(n)?vd(n):Js(n).Go()&&yd(n,e))}function sw(t,e){const n=ae(t),r=Js(n);n.w_.delete(e),r.Go()&&iw(n,e),n.w_.size===0&&(r.Go()?r.Ho():ls(n)&&n.v_.set("Unknown"))}function yd(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Js(t).o_(e)}function iw(t,e){t.C_.Le(e),Js(t).__(e)}function vd(t){t.C_=new i1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Js(t).start(),t.v_.V_()}function wd(t){return ls(t)&&!Js(t).Wo()&&t.w_.size>0}function ls(t){return ae(t).S_.size===0}function ow(t){t.C_=void 0}async function rx(t){t.w_.forEach((e,n)=>{yd(t,e)})}async function sx(t,e){ow(t),wd(t)?(t.v_.g_(e),vd(t)):t.v_.set("Unknown")}async function ix(t,e,n){if(t.v_.set("Online"),e instanceof Kv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.w_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.w_.delete(a),s.C_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xa(t,r)}else if(e instanceof fa?t.C_.Ge(e):e instanceof Wv?t.C_.Xe(e):t.C_.He(e),!n.isEqual(oe.min()))try{const r=await ew(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.w_.get(l);u&&i.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.w_.get(c);if(!u)return;i.w_.set(c,u.withResumeToken(wt.EMPTY_BYTE_STRING,u.snapshotVersion)),iw(i,c);const h=new tr(u.target,c,l,u.sequenceNumber);yd(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Xa(t,r)}}async function Xa(t,e,n){if(!To(e))throw e;t.S_.add(1),await Ro(t),t.v_.set("Offline"),n||(n=()=>ew(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Kc(t)})}function aw(t,e){return e().catch(n=>Xa(t,n,e))}async function zc(t){const e=ae(t),n=gr(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;ox(e);)try{const s=await H1(e.localStore,r);if(s===null){e.y_.length===0&&n.Ho();break}r=s.batchId,ax(e,s)}catch(s){await Xa(e,s)}cw(e)&&lw(e)}function ox(t){return ls(t)&&t.y_.length<10}function ax(t,e){t.y_.push(e);const n=gr(t);n.Go()&&n.u_&&n.c_(e.mutations)}function cw(t){return ls(t)&&!gr(t).Wo()&&t.y_.length>0}function lw(t){gr(t).start()}async function cx(t){gr(t).P_()}async function lx(t){const e=gr(t);for(const n of t.y_)e.c_(n.mutations)}async function ux(t,e,n){const r=t.y_.shift(),s=dd.from(r,e,n);await aw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await zc(t)}async function hx(t,e){e&&gr(t).u_&&await async function(r,s){if(function(o){return n1(o)&&o!==T.ABORTED}(s.code)){const i=r.y_.shift();gr(r).jo(),await aw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await zc(r)}}(t,e),cw(t)&&lw(t)}async function ag(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ls(n);n.S_.add(3),await Ro(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Kc(n)}async function dx(t,e){const n=ae(t);e?(n.S_.delete(2),await Kc(n)):e||(n.S_.add(2),await Ro(n),n.v_.set("Unknown"))}function Js(t){return t.F_||(t.F_=function(n,r,s){const i=ae(n);return i.T_(),new X1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:rx.bind(null,t),lo:sx.bind(null,t),s_:ix.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),wd(t)?vd(t):t.v_.set("Unknown")):(await t.F_.stop(),ow(t))})),t.F_}function gr(t){return t.M_||(t.M_=function(n,r,s){const i=ae(n);return i.T_(),new Z1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:cx.bind(null,t),lo:hx.bind(null,t),h_:lx.bind(null,t),l_:ux.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await zc(t)):(await t.M_.stop(),t.y_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
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
 */class Ed{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ed(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Id(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),To(t))return new $(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=pi(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class cg{constructor(){this.x_=new Me(Q.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):te():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bs(e,n,Os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fx{constructor(){this.N_=void 0,this.listeners=[]}}class px{constructor(){this.queries=new Ys(e=>kv(e),$c),this.onlineState="Unknown",this.B_=new Set}}async function gx(t,e){const n=ae(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new fx),s)try{i.N_=await n.onListen(r)}catch(o){const a=Id(o,`Initialization of query '${xu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.L_(n.onlineState),i.N_&&e.k_(i.N_)&&Td(n)}async function mx(t,e){const n=ae(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function _x(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.k_(s)&&(r=!0);o.N_=s}}r&&Td(n)}function yx(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Td(t){t.B_.forEach(e=>{e.next()})}class vx{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
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
 */class uw{constructor(e){this.key=e}}class hw{constructor(e){this.key=e}}class wx{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=he(),this.mutatedKeys=he(),this.ia=Ov(e),this.sa=new Os(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new cg,s=n?n.sa:this.sa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=jc(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?_!==I&&(r.track({type:3,doc:p}),w=!0):this.ua(d,p)||(r.track({type:2,doc:p}),w=!0,(c&&this.ia(p,c)>0||l&&this.ia(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:i}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const i=e.aa.O_();i.sort((l,u)=>function(d,p){const _=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return _(d)-_(p)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,i.length!==0||c?{snapshot:new Bs(this.query,e.sa,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new cg,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=he(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new hw(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new uw(r))}),n}Ia(e){this.ta=e._s,this.ra=he();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return Bs.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class Ex{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ix{constructor(e){this.key=e,this.Ea=!1}}class Tx{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new Ys(a=>kv(a),$c),this.Ra=new Map,this.Va=new Set,this.ma=new Me(Q.comparator),this.fa=new Map,this.ga=new gd,this.pa={},this.ya=new Map,this.wa=js.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function Ax(t,e){const n=Dx(t);let r,s;const i=n.Aa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ta();else{const o=await W1(n.localStore,Vn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await bx(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&rw(n.remoteStore,o)}return s}async function bx(t,e,n,r,s){t.ba=(h,d,p)=>async function(I,w,b,x){let k=w.view._a(b);k.Hi&&(k=await sg(I.localStore,w.query,!1).then(({documents:ge})=>w.view._a(ge,k)));const z=x&&x.targetChanges.get(w.targetId),U=w.view.applyChanges(k,I.isPrimaryClient,z);return ug(I,w.targetId,U.ha),U.snapshot}(t,h,d,p);const i=await sg(t.localStore,e,!0),o=new wx(e,i._s),a=o._a(i.documents),c=bo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);ug(t,n,l.ha);const u=new Ex(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),l.snapshot}async function Rx(t,e){const n=ae(t),r=n.Aa.get(e),s=n.Ra.get(r.targetId);if(s.length>1)return n.Ra.set(r.targetId,s.filter(i=>!$c(i,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sw(n.remoteStore,r.targetId),Uu(n,r.targetId)}).catch(Io)):(Uu(n,r.targetId),await Lu(n.localStore,r.targetId,!0))}async function Px(t,e,n){const r=Vx(t);try{const s=await function(o,a){const c=ae(o),l=Qe.now(),u=a.reduce((p,_)=>p.add(_.key),he());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=Mn(),I=he();return c.ts.getEntries(p,u).next(w=>{_=w,_.forEach((b,x)=>{x.isValidDocument()||(I=I.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,_)).next(w=>{h=w;const b=[];for(const x of a){const k=JO(x,h.get(x.key).overlayedDocument);k!=null&&b.push(new cs(x.key,k,Iv(k.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,b,a)}).next(w=>{d=w;const b=w.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(p,w.batchId,b)})}).then(()=>({batchId:d.batchId,changes:Nv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new Me(ye)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Po(r,s.changes),await zc(r.remoteStore)}catch(s){const i=Id(s,"Failed to persist write");n.reject(i)}}async function dw(t,e){const n=ae(t);try{const r=await B1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fa.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ea=!0:s.modifiedDocuments.size>0?ke(o.Ea):s.removedDocuments.size>0&&(ke(o.Ea),o.Ea=!1))}),await Po(n,r,e)}catch(r){await Io(r)}}function lg(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Aa.forEach((i,o)=>{const a=o.view.L_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.L_(a)&&(l=!0)}),l&&Td(c)}(r.eventManager,e),s.length&&r.da.s_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sx(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fa.get(e),i=s&&s.key;if(i){let o=new Me(Q.comparator);o=o.insert(i,ht.newNoDocument(i,oe.min()));const a=he().add(i),c=new Hc(oe.min(),new Map,new Me(ye),o,a);await dw(r,c),r.ma=r.ma.remove(i),r.fa.delete(e),Ad(r)}else await Lu(r.localStore,e,!1).then(()=>Uu(r,e,n)).catch(Io)}async function Cx(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await j1(n.localStore,e);pw(n,r,null),fw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Po(n,s)}catch(s){await Io(s)}}async function kx(t,e,n){const r=ae(t);try{const s=await function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ke(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);pw(r,e,n),fw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Po(r,s)}catch(s){await Io(s)}}function fw(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function pw(t,e,n){const r=ae(t);let s=r.pa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pa[r.currentUser.toKey()]=s}}function Uu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||gw(t,r)})}function gw(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(sw(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),Ad(t))}function ug(t,e,n){for(const r of n)r instanceof uw?(t.ga.addReference(r.key,e),Ox(t,r)):r instanceof hw?(W("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||gw(t,r.key)):te()}function Ox(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(W("SyncEngine","New document in limbo: "+n),t.Va.add(r),Ad(t))}function Ad(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new Q(Ce.fromString(e)),r=t.wa.next();t.fa.set(r,new Ix(n)),t.ma=t.ma.insert(n,r),rw(t.remoteStore,new tr(Vn(ud(n.path)),r,"TargetPurposeLimboResolution",sd.ae))}}async function Po(t,e,n){const r=ae(t),s=[],i=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=_d.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.da.s_(s),await async function(c,l){const u=ae(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!To(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.Zi.get(d),_=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(_);u.Zi=u.Zi.insert(d,I)}}}(r.localStore,i))}async function xx(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await Zv(n.localStore,e);n.currentUser=e,function(i,o){i.ya.forEach(a=>{a.forEach(c=>{c.reject(new $(T.CANCELLED,o))})}),i.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Po(n,r.rs)}}function Nx(t,e){const n=ae(t),r=n.fa.get(e);if(r&&r.Ea)return he().add(r.key);{let s=he();const i=n.Ra.get(e);if(!i)return s;for(const o of i){const a=n.Aa.get(o);s=s.unionWith(a.view.oa)}return s}}function Dx(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sx.bind(null,e),e.da.s_=_x.bind(null,e.eventManager),e.da.Da=yx.bind(null,e.eventManager),e}function Vx(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kx.bind(null,e),e}class hg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $1(this.persistence,new U1,e.initialUser,this.serializer)}createPersistence(e){return new M1(md.Hr,this.serializer)}createSharedClientState(e){return new z1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xx.bind(null,this.syncEngine),await dx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new px}()}createDatastore(e){const n=Wc(e.databaseInfo.databaseId),r=function(i){return new J1(i)}(e.databaseInfo);return function(i,o,a,c){return new ex(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new nx(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>lg(this.syncEngine,n,0),function(){return og.v()?new og:new G1}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new Tx(s,i,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ae(n);W("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await Ro(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Lx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Ux{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=vv.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Id(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ol(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $x(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>ag(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>ag(e.remoteStore,i)),t._onlineComponents=e}function Fx(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function $x(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ol(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Fx(n))throw n;Ls("Error using user provided cache. Falling back to memory cache: "+n),await Ol(t,new hg)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Ol(t,new hg);return t._offlineComponents}async function mw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await dg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await dg(t,new Mx))),t._onlineComponents}function jx(t){return mw(t).then(e=>e.syncEngine)}async function fg(t){const e=await mw(t),n=e.eventManager;return n.onListen=Ax.bind(null,e.syncEngine),n.onUnlisten=Rx.bind(null,e.syncEngine),n}/**
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
 */function _w(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const pg=new Map;/**
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
 */function yw(t,e,n){if(!n)throw new $(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bx(t,e,n,r){if(e===!0&&r===!0)throw new $(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gg(t){if(!Q.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mg(t){if(Q.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new $(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _g{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_w((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _g({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _g(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cO;switch(r.type){case"firstParty":return new dO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pg.get(n);r&&(W("ComponentProvider","Removing Datastore"),pg.delete(n),r.terminate())}(this),Promise.resolve()}}function qx(t,e,n,r={}){var s;const i=(t=Hr(t,Qc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ut.MOCK_USER;else{a=f_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(l)}t._authCredentials=new lO(new yv(a,c))}}/**
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
 */class us{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class or extends us{constructor(e,n,r){super(e,n,ud(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Q(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function So(t,e,...n){if(t=Ye(t),yw("collection","path",e),t instanceof Qc){const r=Ce.fromString(e,...n);return mg(r),new or(t,null,r)}{if(!(t instanceof Ct||t instanceof or))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return mg(r),new or(t.firestore,null,r)}}function bd(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=vv.V()),yw("doc","path",e),t instanceof Qc){const r=Ce.fromString(e,...n);return gg(r),new Ct(t,null,new Q(r))}{if(!(t instanceof Ct||t instanceof or))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return gg(r),new Ct(t.firestore,t instanceof or?t.converter:null,new Q(r))}}/**
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
 */class Hx{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new tw(this,"async_queue_retry"),this.tu=()=>{const n=kl();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=kl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new qr;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!To(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const s=Ed.createAndSchedule(this,e,n,r,i=>this.su(i));return this.Ja.push(s),s}nu(){this.Ya&&te()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function yg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class no extends Qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Hx}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ww(this),this._firestoreClient.terminate()}}function Wx(t,e){const n=typeof t=="object"?t:vh(),r=typeof t=="string"?t:e||"(default)",s=_c(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=u_("firestore");i&&qx(s,...i)}return s}function vw(t){return t._firestoreClient||ww(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ww(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new AO(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,_w(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Ux(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qs(wt.fromBase64String(e))}catch(n){throw new $(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qs(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Rd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ew{constructor(e){this._methodName=e}}/**
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
 */class Pd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */const Kx=/^__.*__$/;class zx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ao(e,this.data,n,this.fieldTransforms)}}function Iw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Sd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new Sd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.Tu(e),s}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.cu(),s}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return Za(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(Iw(this.lu)&&Kx.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class Gx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wc(e)}mu(e,n,r,s=!1){return new Sd({lu:e,methodName:n,Vu:r,path:ft.emptyPath(),Iu:!1,Ru:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cd(t){const e=t._freezeSettings(),n=Wc(t._databaseId);return new Gx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tw(t,e,n,r,s,i={}){const o=t.mu(i.merge||i.mergeFields?2:0,e,n,s);Rw("Data must be an object, but it was:",o,r);const a=Aw(r,o);let c,l;if(i.merge)c=new Kt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Yx(e,h,n);if(!o.contains(d))throw new $(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Xx(u,d)||u.push(d)}c=new Kt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new zx(new $t(a),c,l)}function Qx(t,e,n,r=!1){return kd(n,t.mu(r?4:3,e))}function kd(t,e){if(bw(t=Ye(t)))return Rw("Unsupported field value:",e,t),Aw(t,e);if(t instanceof Ew)return function(r,s){if(!Iw(s.lu))throw s.Au(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Au(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=kd(a,s.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:Ja(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ja(s.serializer,i)}}if(r instanceof Pd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qs)return{bytesValue:zv(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pd(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Au(`Unsupported field value: ${Gc(r)}`)}(t,e)}function Aw(t,e){const n={};return wv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,s)=>{const i=kd(s,e.Pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function bw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Pd||t instanceof qs||t instanceof Ct||t instanceof Ew)}function Rw(t,e,n){if(!bw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Gc(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function Yx(t,e,n){if((e=Ye(e))instanceof Rd)return e._internalPath;if(typeof e=="string")return Pw(t,e);throw Za("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jx=new RegExp("[~\\*/\\[\\]]");function Pw(t,e,n){if(e.search(Jx)>=0)throw Za(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rd(...e.split("."))._internalPath}catch{throw Za(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Za(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(T.INVALID_ARGUMENT,a+t+c)}function Xx(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Sw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zx extends Sw{data(){return super.data()}}function Yc(t,e){return typeof e=="string"?Pw(t,e):e instanceof Rd?e._internalPath:e._delegate._internalPath}/**
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
 */function eN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Od{}class Cw extends Od{}function kw(t,e,...n){let r=[];e instanceof Od&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof xd).length,a=i.filter(c=>c instanceof Jc).length;if(o>1||o>0&&a>0)throw new $(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Jc extends Cw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Jc(e,n,r)}_apply(e){const n=this._parse(e);return Ow(e._query,n),new us(e.firestore,e.converter,ku(e._query,n))}_parse(e){const n=Cd(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){wg(h,u);const p=[];for(const _ of h)p.push(vg(c,i,_));d={arrayValue:{values:p}}}else d=vg(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||wg(h,u),d=Qx(a,o,h,u==="in"||u==="not-in");return Ke.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tN(t,e,n){const r=e,s=Yc("where",t);return Jc._create(s,r,n)}class xd extends Od{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Ow(o,c),o=ku(o,c)}(e._query,n),new us(e.firestore,e.converter,ku(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nd extends Cw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Nd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new ks(i,o);return function(l,u){if(hd(l)===null){const h=Fc(l);h!==null&&xw(l,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new us(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Qs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function nN(t,e="asc"){const n=e,r=Yc("orderBy",t);return Nd._create(r,n)}function vg(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new $(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cv(e)&&n.indexOf("/")!==-1)throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!Q.isDocumentKey(r))throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jp(t,new Q(r))}if(n instanceof Ct)return jp(t,n._key);throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(n)}.`)}function wg(t,e){if(!Array.isArray(t)||t.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ow(t,e){if(e.isInequality()){const r=Fc(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new $(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=hd(t);i!==null&&xw(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xw(t,e,n){if(!n.isEqual(e))throw new $(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class rN{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Pd(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=od(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);ke(Xv(r));const s=new Xi(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Nw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class mi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dw extends Sw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pa extends Dw{data(e={}){return super.data(e)}}class sN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new mi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pa(this._firestore,this._userDataWriter,r.key,r,new mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new pa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new mi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new pa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new mi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:iN(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class Vw extends rN{constructor(e){super(),this.firestore=e}convertBytes(e){return new qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Mw(t,e,n){t=Hr(t,Ct);const r=Hr(t.firestore,no),s=Nw(t.converter,e,n);return Uw(r,[Tw(Cd(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,pn.none())])}function Lw(t,e){const n=Hr(t.firestore,no),r=bd(t),s=Nw(t.converter,e);return Uw(n,[Tw(Cd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function Dd(t,...e){var n,r,s;t=Ye(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||yg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(yg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof Ct)l=Hr(t.firestore,no),u=ud(t._key.path),c={next:h=>{e[o]&&e[o](oN(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Hr(t,us);l=Hr(h.firestore,no),u=h._query;const d=new Vw(l);c={next:p=>{e[o]&&e[o](new sN(l,d,h,p))},error:e[o+1],complete:e[o+2]},eN(t._query)}return function(d,p,_,I){const w=new Lx(I),b=new vx(p,w,_);return d.asyncQueue.enqueueAndForget(async()=>gx(await fg(d),b)),()=>{w.Ma(),d.asyncQueue.enqueueAndForget(async()=>mx(await fg(d),b))}}(vw(l),u,a,c)}function Uw(t,e){return function(r,s){const i=new qr;return r.asyncQueue.enqueueAndForget(async()=>Px(await jx(r),s,i)),i.promise}(vw(t),e)}function oN(t,e,n){const r=n.docs.get(e._key),s=new Vw(t);return new Dw(t,s,e._key,r,new mi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){zs=s})(is),Yr(new dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new no(new uO(r.getProvider("auth-internal")),new pO(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),hn(Mp,"4.1.2",e),hn(Mp,"4.1.2","esm2017")})();const hs=Wx(Ec),Fw=(t,e,n)=>{const r=bd(hs,"users",t);return Mw(r,{displayName:e??"",photoURL:n??null})},aN=(t,e)=>{const n=bd(hs,"users",t);return Mw(n,e,{merge:!0})},cN=async t=>{const e=So(hs,"chats");return(await Lw(e,{participants:t,updatedAt:new Date,createdAt:new Date})).id},lN=async(t,e)=>{const n=So(hs,"chats",t,"messages"),r=je.currentUser;if(!r)throw new Error("User not found in sendMessage");return await Lw(n,{chatId:t,senderId:r.uid,content:e,createdAt:new Date})},uN=t=>{const e=So(hs,"users");return Dd(e,r=>{const s=r.docs.map(i=>({id:i.id,...i.data()}));t(s)})},hN=t=>{const e=je.currentUser;if(!e)throw new Error("User not found in sendMessage");const n=So(hs,"chats"),r=kw(n,tN("participants","array-contains",e.uid));return Dd(r,i=>{const o=i.docs.map(a=>({id:a.id,...a.data()}));t(o)})},dN=(t,e)=>{const n=So(hs,"chats",t,"messages"),r=kw(n,nN("createdAt","desc"));return Dd(r,i=>{const o=i.metadata.fromCache?"local":"server",a=i.docs.map(c=>({id:c.id,...c.data()}));e({messages:a,source:o})})},je=X_(Ec),fN=t=>je.onAuthStateChanged(t),pN=new bn,gN=()=>$P(je,pN),mN=(t,e)=>mP(je,t,e),_N=(t,e,n,r)=>gP(je,t,e).then(async s=>{const i=s.user;let o;return r&&await tk(r,i.uid).then(a=>{o=a}).catch(a=>{console.log("error handled here",a)}),await Promise.all([$_(i,{displayName:n,photoURL:o}),Fw(i.uid,n,o)]),{user:i,error:null}}).catch(s=>{const i=s.code,o=s.message;return console.log("Error occurred in register",i,o),{user:null,error:{errorCode:i,errorMessage:o}}}),yN=()=>je.signOut(),Co="/assets/profile-icon-37af14f3.png",vN={class:"flex justify-between items-center bg-primary text-onLight p-2 m-2 rounded-lg"},wN={class:"flex justify-start items-center gap-2"},EN=["src"],IN={class:"text-xl"},TN=Je({__name:"ProfileSection",props:{user:{type:Object,required:!0}},setup(t){return(e,n)=>{const r=SI("RouterLink");return ne(),_e("div",vN,[H("div",wN,[H("img",{src:e.user.photoURL?e.user.photoURL:Ne(Co),alt:"Profile",class:"w-16 aspect-square object-cover rounded-full",referrerpolicy:"no-referrer"},null,8,EN),H("h1",IN,On(e.user.displayName),1)]),et(r,{to:"/settings",class:"bg-primary text-onLight p-2 rounded-lg"},{default:lc(()=>[sh("Settings")]),_:1})])}}}),AN=at(TN,[["__file","/home/luuk/code/realtime-chat/src/components/ProfileSection.vue"]]),Vd=fh("users",()=>{const t=Pe([]);return uN(e=>{t.value=e}),{users:t}}),Xc=fh("chats",()=>{const t=Pe([]),e=new Set,n=i=>e.has(i),r=i=>{e.has(i)||(dN(i,({messages:o,source:a})=>{a!=="local"&&(t.value=t.value.map(c=>(c.id===i&&(c.messages=o),c)))}),e.add(i))};hN(i=>{t.value=i,i.forEach(o=>r(o.id))});const s=Ve(()=>{const i=new Set;return t.value.forEach(o=>{o.participants.forEach(a=>{var c;a!==((c=je.currentUser)==null?void 0:c.uid)&&i.add(a)})}),i});return{chats:t,contacts:s,isSubscribed:n,subscribe:r}}),bN=["src"],RN={class:"flex flex-col gap-2"},PN=Je({__name:"UserCard",props:{user:{type:Object,required:!0}},setup(t){const n=t.user,r=async()=>{var i;if(!je.currentUser)return;const s=await cN([n.id,(i=je.currentUser)==null?void 0:i.uid]);mr.push(`/${s}`)};return(s,i)=>(ne(),_e("button",{onClick:r,class:"flex gap-4 p-4 rounded-lg items-center bg-surface-200"},[H("img",{src:Ne(n).photoURL?Ne(n).photoURL:Ne(Co),alt:"Profile",height:"64",width:"64",class:"w-16 aspect-square rounded-full object-cover",referrerpolicy:"no-referrer"},null,8,bN),H("div",RN,[H("h2",null,On(Ne(n).displayName),1)])]))}}),SN=at(PN,[["__file","/home/luuk/code/realtime-chat/src/components/userCard/UserCard.vue"]]),CN=["src"],kN={class:"flex flex-col gap-[2px]"},ON={class:"text-lg text-onDark"},xN={key:0,class:"text-onDark emphasis-high"},NN={key:1,class:"text-onDark emphasis-high animate-pulse"},DN=Je({__name:"ContactCard",props:{chat:{type:Object,required:!0}},setup(t){const e=t,n=Vd(),r=Ve(()=>{var c;if(e.chat.groupchat)return{displayName:e.chat.groupchat.name,photoURL:e.chat.groupchat.photoURL};const i=(c=je.currentUser)==null?void 0:c.uid,o=e.chat.participants.find(l=>l!==i);return n.users.find(l=>l.id===o)??{}}),s=Ve(()=>{var i,o,a;return console.log("Computing",e.chat,(o=(i=e.chat.messages)==null?void 0:i.at(0))==null?void 0:o.content),(a=e.chat.messages)==null?void 0:a.at(0)});return(i,o)=>i.$props.chat.messages?(ne(),Nt(Ne(mh),{key:0,to:`/${i.chat.id}`,class:"flex items-center rounded-lg p-4 gap-4 bg-surface-400 hover:bg-surface-500"},{default:lc(()=>[H("img",{src:r.value.photoURL?r.value.photoURL:Ne(Co),alt:"Profile",height:"64",width:"64",class:"w-16 aspect-square rounded-full object-cover",referrerpolicy:"no-referrer"},null,8,CN),H("div",kN,[H("h2",ON,On(r.value.displayName),1),s.value?(ne(),_e("p",xN,On(s.value.content),1)):(ne(),_e("div",NN))])]),_:1},8,["to"])):zr("v-if",!0)}}),$w=at(DN,[["__file","/home/luuk/code/realtime-chat/src/components/contactCard/ContactCard.vue"]]),VN={key:0,class:"flex-1 flex flex-col gap-2 mx-2 mt-4"},MN=H("h2",{class:"text-lg text-onDark emphasis-high"},"Contacts",-1),LN={key:1,class:"flex-1 flex flex-col gap-2 mx-2 mt-4"},UN=H("h2",{class:"text-lg text-onDark emphasis-high"},"Users",-1),FN={key:2,class:"flex-1 flex justify-center items-center"},$N=H("p",{class:"text-2xl"},"No users found",-1),jN=[$N],BN=Je({__name:"UserList",props:{search:{type:String,required:!0}},setup(t){const e=t,n=Vd(),r=Xc(),s=r.contacts,i=Ve(()=>{const l=e.search.toLowerCase();return n.users.filter(u=>u.displayName.toLowerCase().includes(l))}),o=Ve(()=>i.value.filter(l=>s.has(l.id))),a=Ve(()=>r.chats.filter(l=>l.participants.some(u=>{var h;return u===((h=je.currentUser)==null?void 0:h.uid)}))),c=Ve(()=>i.value.filter(l=>{var u;return l.id===((u=je.currentUser)==null?void 0:u.uid)?!1:!s.has(l.id)}));return(l,u)=>(ne(),_e(st,null,[o.value?(ne(),_e("div",VN,[MN,(ne(!0),_e(st,null,ba(a.value,h=>(ne(),Nt($w,{key:h.id,chat:h},null,8,["chat"]))),128))])):zr("v-if",!0),i.value?(ne(),_e("div",LN,[UN,(ne(!0),_e(st,null,ba(c.value,h=>(ne(),Nt(SN,{key:h.id,user:h},null,8,["user"]))),128))])):(ne(),_e("div",FN,jN))],64))}}),qN=at(BN,[["__file","/home/luuk/code/realtime-chat/src/components/userCard/UserList.vue"]]),HN={key:0,class:"flex-1 flex flex-col gap-2 mx-2 mt-4"},WN=Je({__name:"ChatList",setup(t){const e=Xc(),{chats:n}=ka(e);return(r,s)=>Ne(n).length?(ne(),_e("div",HN,[(ne(!0),_e(st,null,ba(Ne(n),i=>(ne(),Nt($w,{key:i.id,chat:i},null,8,["chat"]))),128))])):zr("v-if",!0)}}),KN=at(WN,[["__file","/home/luuk/code/realtime-chat/src/components/contactCard/ChatList.vue"]]),zN=Je({__name:"UserSection",setup(t){const e=Pe("");return(n,r)=>(ne(),_e(st,null,[Xn(H("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>e.value=s),type:"text",placeholder:"Search",class:"p-2 mx-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Zn,e.value]]),e.value?(ne(),Nt(qN,{key:0,search:e.value},null,8,["search"])):(ne(),Nt(KN,{key:1}))],64))}}),GN=at(zN,[["__file","/home/luuk/code/realtime-chat/src/components/UserSection.vue"]]),QN={class:"text-xs emphasis-low"},YN=Je({__name:"ChatMessage",props:{message:{type:Object,required:!0}},setup(t){const e=je.currentUser,n=r=>{const s=r.getHours(),i=r.getMinutes(),o=s<10?`0${s}`:`${s}`,a=i<10?`0${i}`:`${i}`;return`${o}:${a}`};return(r,s)=>{var i,o;return ne(),_e("div",{class:xs(["flex flex-col gap-1 p-2 rounded-lg w-80",{"self-end items-end bg-primary text-onLight":r.message.senderId===((i=Ne(e))==null?void 0:i.uid),"self-start items-start bg-surface-400 text-onDark":r.message.senderId!==((o=Ne(e))==null?void 0:o.uid)}])},[H("p",null,On(r.message.content),1),H("p",QN,On(n(r.message.createdAt.toDate())),1)],2)}}}),JN=at(YN,[["__file","/home/luuk/code/realtime-chat/src/components/chat/ChatMessage.vue"]]),XN=fh("inputMessages",()=>{const t=Pe(new Map);function e(s,i){t.value.set(s,i)}function n(s){t.value.delete(s)}function r(s){return t.value.get(s)??""}return{inputMessages:t,addInputMessage:e,removeInputMessage:n,getInputMessage:r}}),ZN={class:"flex w-full bg-surface-200 p-2"},eD=["onSubmit"],tD=["value"],nD=H("button",{type:"submit",class:"bg-primary rounded-full w-16 p-2 mx-2 h-10 flex justify-center items-center text-onLight"}," Send ",-1),rD=Je({__name:"ChatInput",props:{chatId:{type:String,required:!0},chatScrollToBottom:{type:Function,required:!0}},setup(t){const e=t,{addInputMessage:n,removeInputMessage:r,getInputMessage:s}=XN(),i=Pe("");rr(()=>e.chatId,()=>{i.value=s(e.chatId)});const o=c=>{const l=c.target;n(e.chatId,l.value),i.value=l.value},a=async()=>{const c=lN(e.chatId,i.value);i.value="",r(e.chatId),await c,e.chatScrollToBottom()};return(c,l)=>(ne(),_e("div",ZN,[H("form",{class:"flex-1 flex",onSubmit:lh(a,["prevent"])},[H("input",{type:"text",class:"flex-1 p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-300",placeholder:"Type a message...",value:i.value,onInput:o},null,40,tD),nD],40,eD)]))}}),sD=at(rD,[["__file","/home/luuk/code/realtime-chat/src/components/chat/ChatInput.vue"]]),iD={class:"w-full bg-surface-200 flex items-center justify-between text-onDark"},oD=H("svg",{class:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[H("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L6.41421 10L10.7071 14.2929C11.0976 14.6834 11.0976 15.3166 10.7071 15.7071C10.3166 16.0976 9.68342 16.0976 9.29289 15.7071L4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z"})],-1),aD=[oD],cD={class:"flex gap-2 items-center"},lD=["src"],uD={class:"text-2xl"},hD=H("div",null,null,-1),dD=Je({__name:"ChatToolbar",props:{chatId:{type:null,required:!0}},setup(t){const e=t,n=Xc(),{chats:r}=ka(n),s=Vd();ka(s);const i=Ve(()=>r.value.find(l=>l.id===e.chatId)),o=Ve(()=>{var h;if(!i.value)return{displayName:"",photoURL:""};if(i.value.groupchat)return{displayName:i.value.groupchat.name,photoURL:i.value.groupchat.photoURL};const c=(h=je.currentUser)==null?void 0:h.uid,l=i.value.participants.find(d=>d!==c);return s.users.find(d=>d.id===l)??{displayName:"",photoURL:""}}),a=()=>{mr.push({path:"/"})};return(c,l)=>(ne(),_e("header",iD,[H("div",{class:"flex"},[H("button",{class:"p-2 rounded-full emphasis-high",onClick:a},aD)]),H("div",cD,[H("img",{src:o.value.photoURL?o.value.photoURL:Ne(Co),alt:"Profile",height:"32",width:"32",class:"w-8 h-8 aspect-square rounded-full object-cover",referrerpolicy:"no-referrer"},null,8,lD),H("h1",uD,On(o.value.displayName),1)]),hD]))}}),fD=at(dD,[["__file","/home/luuk/code/realtime-chat/src/components/chat/ChatToolbar.vue"]]),pD={class:"flex flex-col h-full flex-1"},gD={key:1,class:"flex-1 flex justify-center items-center"},mD=H("p",{class:"text-2xl text-onDark"},"Select a chat to start messaging",-1),_D=[mD],yD={key:3,class:"flex-1 flex justify-center items-center"},vD=H("p",{class:"text-2xl text-onDark"},"No messages yet",-1),wD=[vD],ED=Je({__name:"ChatMain",props:{chatId:{type:null,required:!0}},setup(t){const e=t,n=Xc(),{chats:r}=ka(n),s=Pe(null),i=(a=!0)=>{s.value&&s.value.scroll({top:s.value.scrollHeight,behavior:a?"smooth":"auto"})},o=Ve(()=>r.value.find(c=>c.id===e.chatId));return(a,c)=>(ne(),_e("section",pD,[a.chatId?(ne(),Nt(fD,{key:0,"chat-id":a.chatId},null,8,["chat-id"])):zr("v-if",!0),o.value?o.value&&o.value.messages?(ne(),_e("div",{key:2,ref_key:"chatBox",ref:s,class:"flex-1 overflow-y-auto flex flex-col-reverse p-1 gap-1"},[(ne(!0),_e(st,null,ba(o.value.messages,l=>(ne(),Nt(JN,{key:l.id,message:l},null,8,["message"]))),128))],512)):(ne(),_e("div",yD,wD)):(ne(),_e("div",gD,_D)),a.chatId?(ne(),Nt(sD,{key:4,"chat-id":a.chatId,"chat-scroll-to-bottom":i},null,8,["chat-id"])):zr("v-if",!0)]))}}),ID=at(ED,[["__file","/home/luuk/code/realtime-chat/src/components/chat/ChatMain.vue"]]),TD={class:"flex h-full"},AD=Je({__name:"ChatView",props:{chatId:{type:null,required:!0}},setup(t){const e=je.currentUser;return(n,r)=>(ne(),_e("main",TD,[H("section",{class:xs(["bg-surface-100 h-full",{"w-full md:w-80":!n.chatId,"hidden md:w-80 md:inline":n.chatId}])},[et(AN,{user:Ne(e)},null,8,["user"]),et(GN)],2),et(ID,{chatId:n.chatId,class:xs({"hidden md:flex":!n.chatId,"":n.chatId})},null,8,["chatId","class"])]))}}),bD=at(AD,[["__file","/home/luuk/code/realtime-chat/src/views/ChatView.vue"]]),RD={key:1},PD=Je({__name:"HomeView",props:{chatId:{type:String,required:!1}},setup(t){const e=Pe(je.currentUser);return fN(n=>{e.value=n}),(n,r)=>e.value?(ne(),Nt(bD,{key:0,chatId:n.chatId},null,8,["chatId"])):(ne(),_e("p",RD,"Sign in to see your profile"))}}),Eg=at(PD,[["__file","/home/luuk/code/realtime-chat/src/views/HomeView.vue"]]),SD={class:"w-full h-full flex justify-center items-center"},CD=["onSubmit"],kD=H("h1",{class:"text-5xl font-bold text-center text-onDark"},"Sign In",-1),OD={class:"flex flex-col gap-4"},xD=H("b",null,"Register here",-1),ND=Je({__name:"LoginView",setup(t){const e=Pe(""),n=Pe(""),r=async()=>{await mN(e.value,n.value)&&mr.push({path:"/"})},s=async()=>{const i=await gN();i&&(await Fw(i.user.uid,i.user.displayName??"New user",i.user.photoURL),mr.push({path:"/"}))};return(i,o)=>(ne(),_e("main",SD,[H("form",{onSubmit:lh(r,["prevent"]),class:"flex flex-col bg-surface-100 p-8 rounded-lg gap-8"},[kD,H("div",OD,[Xn(H("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:"email",placeholder:"Email",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Zn,e.value]]),Xn(H("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),type:"password",placeholder:"Password",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Zn,n.value]]),H("button",{onClick:r,class:"bg-primary rounded-full p-2 text-onLight text-lg"}," Sign In "),et(Ne(mh),{to:"/register",class:"text-center text-base"},{default:lc(()=>[sh(" Don't have an account? "),xD]),_:1})]),H("button",{onClick:s,type:"button",class:"bg-[#3c82f7] px-1 py-2 rounded-md text-onLight text-lg"}," Sign In with Google ")],40,CD)]))}}),DD=at(ND,[["__file","/home/luuk/code/realtime-chat/src/views/LoginView.vue"]]),VD={class:"w-full h-full flex justify-center items-center"},MD={class:"flex flex-col bg-surface-100 p-8 rounded-lg gap-8"},LD=H("h1",{class:"text-5xl font-bold text-center text-onDark"},"Register",-1),UD=["onSubmit"],FD={class:"text-error text-center"},$D={class:"bg-primary rounded-full p-2 text-onLight text-lg"},jD={key:0},BD={key:1},qD=Je({__name:"RegisterView",setup(t){const e=Pe(""),n=Pe(""),r=Pe(""),s=Pe(""),i=Pe(null),o=Pe(""),a=Pe(!1),c=u=>{const d=u.target.files[0];i.value=d},l=async()=>{if(a.value=!0,n.value!==r.value)return;const{user:u,error:h}=await _N(e.value,n.value,s.value,i.value);if(h){o.value=h.errorMessage,a.value=!1;return}mr.push({path:"/"})};return(u,h)=>(ne(),_e("main",VD,[H("div",MD,[LD,H("form",{class:"flex flex-col gap-4",onSubmit:lh(l,["prevent"])},[Xn(H("input",{"onUpdate:modelValue":h[0]||(h[0]=d=>e.value=d),type:"email",placeholder:"Email",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Zn,e.value]]),Xn(H("input",{"onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),type:"text",placeholder:"Display Name",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Zn,s.value]]),Xn(H("input",{"onUpdate:modelValue":h[2]||(h[2]=d=>n.value=d),type:"password",placeholder:"Password",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Zn,n.value]]),Xn(H("input",{"onUpdate:modelValue":h[3]||(h[3]=d=>r.value=d),type:"password",placeholder:"Confirm Password",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Zn,r.value]]),H("input",{onChange:c,type:"file",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,32),H("p",FD,On(o.value),1),H("button",$D,[a.value?(ne(),_e("p",jD,"Loading...")):(ne(),_e("p",BD,"Register"))])],40,UD)])]))}}),HD=at(qD,[["__file","/home/luuk/code/realtime-chat/src/views/RegisterView.vue"]]),WD={class:"flex h-full w-full justify-center items-center"},KD={class:"md:grid md:grid-cols-2 bg-surface-100 p-8 rounded-lg text-xl"},zD=H("div",{class:"flex md:hidden justify-center"},[H("h1",{class:"text-6xl text-onDark"},"Settings")],-1),GD={class:"border-transparent md:border-surface-400 border-r-2 p-8 flex flex-col items-start gap-4"},QD=["src"],YD=["disabled"],JD={key:0},XD={key:1},ZD=H("h1",{class:"text-6xl text-onDark hidden md:inline"},"Settings",-1),eV=Je({__name:"SettingsView",setup(t){const e=Pe(je.currentUser);if(!e.value)throw new Error("User not logged in");const n=Pe(e.value.displayName),r=Pe(!1),s=async()=>{r.value=!0,e.value=je.currentUser,e.value&&(aN(e.value.uid,{displayName:n.value??e.value.displayName??"New user"}),await $_(e.value,{displayName:n.value}),r.value=!1)},i=async()=>{await yN(),mr.push({path:"/"})};return(o,a)=>{var c,l;return ne(),_e("main",WD,[H("div",KD,[zD,H("div",GD,[H("img",{src:(c=e.value)!=null&&c.photoURL?e.value.photoURL:Ne(Co),alt:"Profile",class:"w-32 aspect-square object-cover rounded-full",referrerpolicy:"no-referrer"},null,8,QD),Xn(H("input",{"onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u),class:"bg-surface-200 text-onDark p-2 rounded-lg focus:outline-none focus:bg-surface-300",placeholder:"Display Name"},null,512),[[Zn,n.value]]),H("button",{class:"bg-primary text-onLight p-2 rounded-lg disabled:text-onDark transition-colors disabled:bg-surface-300 disabled:cursor-not-allowed",onClick:s,disabled:n.value===((l=e.value)==null?void 0:l.displayName)||!n.value},[r.value?(ne(),_e("span",JD,"Saving...")):(ne(),_e("span",XD,"Save"))],8,YD)]),H("div",{class:"flex flex-col justify-evenly items-center gap-8"},[ZD,H("button",{onClick:i,class:"bg-error text-onLight p-2 rounded-lg hover:emphasis-high"}," Logout ")])])])}}}),tV=at(eV,[["__file","/home/luuk/code/realtime-chat/src/views/SettingsView.vue"]]),mr=qb({history:HA("/"),routes:[{path:"/",name:"home",component:Eg},{path:"/login",name:"login",component:DD},{path:"/settings",name:"settings",component:tV},{path:"/register",name:"register",component:HD},{path:"/:chatId",name:"chat",props:!0,component:Eg}]});mr.beforeEach(async(t,e,n)=>{const s=!["/login","/register"].includes(t.path);await je.authStateReady();const i=je.currentUser;s?i?n():n("/login"):i?n("/"):n()});const Md=zT(FS);Md.use(TA());Md.use(mr);Md.mount("#app");
