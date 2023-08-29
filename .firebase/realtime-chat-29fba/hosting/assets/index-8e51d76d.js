(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ae=Object.freeze({}),Is=Object.freeze([]),St=()=>{},wg=()=>!1,$w=/^on[^a-z]/,no=t=>$w.test(t),fa=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Uu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jw=Object.prototype.hasOwnProperty,le=(t,e)=>jw.call(t,e),Q=Array.isArray,xr=t=>Ja(t)==="[object Map]",Eg=t=>Ja(t)==="[object Set]",X=t=>typeof t=="function",Me=t=>typeof t=="string",Fu=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",$u=t=>we(t)&&X(t.then)&&X(t.catch),Ig=Object.prototype.toString,Ja=t=>Ig.call(t),ju=t=>Ja(t).slice(8,-1),Tg=t=>Ja(t)==="[object Object]",Bu=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Go=gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bw=gr("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Xa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qw=/-(\w)/g,mn=Xa(t=>t.replace(qw,(e,n)=>n?n.toUpperCase():"")),Hw=/\B([A-Z])/g,or=Xa(t=>t.replace(Hw,"-$1").toLowerCase()),qr=Xa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tr=Xa(t=>t?`on${qr(t)}`:""),Pi=(t,e)=>!Object.is(t,e),gs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},pa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ol=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ud;const ga=()=>Ud||(Ud=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qu(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Me(r)?Gw(r):qu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Me(t))return t;if(we(t))return t}}const Ww=/;(?![^(]*\))/g,Kw=/:([^]+)/,zw=/\/\*[^]*?\*\//g;function Gw(t){const e={};return t.replace(zw,"").split(Ww).forEach(n=>{if(n){const r=n.split(Kw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Za(t){let e="";if(Me(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=Za(t[n]);r&&(e+=r+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qw="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Yw="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Jw=gr(Qw),Xw=gr(Yw),Zw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eE=gr(Zw);function Ag(t){return!!t||t===""}const Hr=t=>Me(t)?t:t==null?"":Q(t)||we(t)&&(t.toString===Ig||!X(t.toString))?JSON.stringify(t,bg,2):String(t),bg=(t,e)=>e&&e.__v_isRef?bg(t,e.value):xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Eg(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!Q(e)&&!Tg(e)?String(e):e;function ma(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let kt;class Rg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}else ma("cannot run an inactive effect scope.")}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Pg(t){return new Rg(t)}function tE(t,e=kt){e&&e.active&&e.effects.push(t)}function Sg(){return kt}function nE(t){kt?kt.cleanups.push(t):ma("onScopeDispose() is called when there is no active effect scope to be associated with.")}const Hu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cg=t=>(t.w&ar)>0,kg=t=>(t.n&ar)>0,rE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ar},sE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Cg(s)&&!kg(s)?s.delete(t):e[n++]=s,s.w&=~ar,s.n&=~ar}e.length=n}},_a=new WeakMap;let ii=0,ar=1;const xl=30;let At;const Nr=Symbol("iterate"),Nl=Symbol("Map key iterate");class Wu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tE(this,r)}run(){if(!this.active)return this.fn();let e=At,n=tr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=At,At=this,tr=!0,ar=1<<++ii,ii<=xl?rE(this):Fd(this),this.fn()}finally{ii<=xl&&sE(this),ar=1<<--ii,At=this.parent,tr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(Fd(this),this.onStop&&this.onStop(),this.active=!1)}}function Fd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tr=!0;const Og=[];function ns(){Og.push(tr),tr=!1}function rs(){const t=Og.pop();tr=t===void 0?!0:t}function _t(t,e,n){if(tr&&At){let r=_a.get(t);r||_a.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Hu()),xg(s,{effect:At,target:t,type:e,key:n})}}function xg(t,e){let n=!1;ii<=xl?kg(t)||(t.n|=ar,n=!Cg(t)):n=!t.has(At),n&&(t.add(At),At.deps.push(t),At.onTrack&&At.onTrack(Ne({effect:At},e)))}function _n(t,e,n,r,s,i){const o=_a.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Bu(n)&&a.push(o.get("length")):(a.push(o.get(Nr)),xr(t)&&a.push(o.get(Nl)));break;case"delete":Q(t)||(a.push(o.get(Nr)),xr(t)&&a.push(o.get(Nl)));break;case"set":xr(t)&&a.push(o.get(Nr));break}const c={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&Dl(a[0],c);else{const l=[];for(const u of a)u&&l.push(...u);Dl(Hu(l),c)}}function Dl(t,e){const n=Q(t)?t:[...t];for(const r of n)r.computed&&$d(r,e);for(const r of n)r.computed||$d(r,e)}function $d(t,e){(t!==At||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Ne({effect:t},e)),t.scheduler?t.scheduler():t.run())}function iE(t,e){var n;return(n=_a.get(t))==null?void 0:n.get(e)}const oE=gr("__proto__,__v_isRef,__isVue"),Ng=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fu)),aE=ec(),cE=ec(!1,!0),lE=ec(!0),uE=ec(!0,!0),jd=hE();function hE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Z(this);for(let i=0,o=this.length;i<o;i++)_t(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ns();const r=Z(this)[e].apply(this,n);return rs(),r}}),t}function dE(t){const e=Z(this);return _t(e,"has",t),e.hasOwnProperty(t)}function ec(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?jg:$g:e?Fg:Ug).get(r))return r;const o=Q(r);if(!t){if(o&&le(jd,s))return Reflect.get(jd,s,i);if(s==="hasOwnProperty")return dE}const a=Reflect.get(r,s,i);return(Fu(s)?Ng.has(s):oE(s))||(t||_t(r,"get",s),e)?a:Re(a)?o&&Bu(s)?a:a.value:we(a)?t?qg(a):ro(a):a}}const fE=Dg(),pE=Dg(!0);function Dg(t=!1){return function(n,r,s,i){let o=n[r];if(cr(o)&&Re(o)&&!Re(s))return!1;if(!t&&(!ya(s)&&!cr(s)&&(o=Z(o),s=Z(s)),!Q(n)&&Re(o)&&!Re(s)))return o.value=s,!0;const a=Q(n)&&Bu(r)?Number(r)<n.length:le(n,r),c=Reflect.set(n,r,s,i);return n===Z(i)&&(a?Pi(s,o)&&_n(n,"set",r,s,o):_n(n,"add",r,s)),c}}function gE(t,e){const n=le(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&_n(t,"delete",e,void 0,r),s}function mE(t,e){const n=Reflect.has(t,e);return(!Fu(e)||!Ng.has(e))&&_t(t,"has",e),n}function _E(t){return _t(t,"iterate",Q(t)?"length":Nr),Reflect.ownKeys(t)}const Vg={get:aE,set:fE,deleteProperty:gE,has:mE,ownKeys:_E},Mg={get:lE,set(t,e){return ma(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return ma(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},yE=Ne({},Vg,{get:cE,set:pE}),vE=Ne({},Mg,{get:uE}),Ku=t=>t,tc=t=>Reflect.getPrototypeOf(t);function Co(t,e,n=!1,r=!1){t=t.__v_raw;const s=Z(t),i=Z(e);n||(e!==i&&_t(s,"get",e),_t(s,"get",i));const{has:o}=tc(s),a=r?Ku:n?zu:Si;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ko(t,e=!1){const n=this.__v_raw,r=Z(n),s=Z(t);return e||(t!==s&&_t(r,"has",t),_t(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Oo(t,e=!1){return t=t.__v_raw,!e&&_t(Z(t),"iterate",Nr),Reflect.get(t,"size",t)}function Bd(t){t=Z(t);const e=Z(this);return tc(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function qd(t,e){e=Z(e);const n=Z(this),{has:r,get:s}=tc(n);let i=r.call(n,t);i?Lg(n,r,t):(t=Z(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Pi(e,o)&&_n(n,"set",t,e,o):_n(n,"add",t,e),this}function Hd(t){const e=Z(this),{has:n,get:r}=tc(e);let s=n.call(e,t);s?Lg(e,n,t):(t=Z(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&_n(e,"delete",t,void 0,i),o}function Wd(){const t=Z(this),e=t.size!==0,n=xr(t)?new Map(t):new Set(t),r=t.clear();return e&&_n(t,"clear",void 0,void 0,n),r}function xo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Z(o),c=e?Ku:t?zu:Si;return!t&&_t(a,"iterate",Nr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function No(t,e,n){return function(...r){const s=this.__v_raw,i=Z(s),o=xr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ku:e?zu:Si;return!e&&_t(i,"iterate",c?Nl:Nr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function $n(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${qr(t)} operation ${n}failed: target is readonly.`,Z(this))}return t==="delete"?!1:this}}function wE(){const t={get(i){return Co(this,i)},get size(){return Oo(this)},has:ko,add:Bd,set:qd,delete:Hd,clear:Wd,forEach:xo(!1,!1)},e={get(i){return Co(this,i,!1,!0)},get size(){return Oo(this)},has:ko,add:Bd,set:qd,delete:Hd,clear:Wd,forEach:xo(!1,!0)},n={get(i){return Co(this,i,!0)},get size(){return Oo(this,!0)},has(i){return ko.call(this,i,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:xo(!0,!1)},r={get(i){return Co(this,i,!0,!0)},get size(){return Oo(this,!0)},has(i){return ko.call(this,i,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=No(i,!1,!1),n[i]=No(i,!0,!1),e[i]=No(i,!1,!0),r[i]=No(i,!0,!0)}),[t,n,e,r]}const[EE,IE,TE,AE]=wE();function nc(t,e){const n=e?t?AE:TE:t?IE:EE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const bE={get:nc(!1,!1)},RE={get:nc(!1,!0)},PE={get:nc(!0,!1)},SE={get:nc(!0,!0)};function Lg(t,e,n){const r=Z(n);if(r!==n&&e.call(t,r)){const s=ju(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ug=new WeakMap,Fg=new WeakMap,$g=new WeakMap,jg=new WeakMap;function CE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kE(t){return t.__v_skip||!Object.isExtensible(t)?0:CE(ju(t))}function ro(t){return cr(t)?t:rc(t,!1,Vg,bE,Ug)}function Bg(t){return rc(t,!1,yE,RE,Fg)}function qg(t){return rc(t,!0,Mg,PE,$g)}function oi(t){return rc(t,!0,vE,SE,jg)}function rc(t,e,n,r,s){if(!we(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=kE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zt(t){return cr(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function cr(t){return!!(t&&t.__v_isReadonly)}function ya(t){return!!(t&&t.__v_isShallow)}function va(t){return zt(t)||cr(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Rn(t){return pa(t,"__v_skip",!0),t}const Si=t=>we(t)?ro(t):t,zu=t=>we(t)?qg(t):t;function Hg(t){tr&&At&&(t=Z(t),xg(t.dep||(t.dep=Hu()),{target:t,type:"get",key:"value"}))}function Wg(t,e){t=Z(t);const n=t.dep;n&&Dl(n,{target:t,type:"set",key:"value",newValue:e})}function Re(t){return!!(t&&t.__v_isRef===!0)}function xe(t){return Kg(t,!1)}function OE(t){return Kg(t,!0)}function Kg(t,e){return Re(t)?t:new xE(t,e)}class xE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Si(e)}get value(){return Hg(this),this._value}set value(e){const n=this.__v_isShallow||ya(e)||cr(e);e=n?e:Z(e),Pi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Si(e),Wg(this,e))}}function De(t){return Re(t)?t.value:t}const NE={get:(t,e,n)=>De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Re(s)&&!Re(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function zg(t){return zt(t)?t:new Proxy(t,NE)}function Kd(t){va(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=Gg(t,n);return e}class DE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return iE(Z(this._object),this._key)}}class VE{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Qo(t,e,n){return Re(t)?t:X(t)?new VE(t):we(t)&&arguments.length>1?Gg(t,e,n):xe(t)}function Gg(t,e,n){const r=t[e];return Re(r)?r:new DE(t,e,n)}class ME{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Wu(e,()=>{this._dirty||(this._dirty=!0,Wg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Z(this);return Hg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function LE(t,e,n=!1){let r,s;const i=X(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new ME(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const Dr=[];function Yo(t){Dr.push(t)}function Jo(){Dr.pop()}function S(t,...e){ns();const n=Dr.length?Dr[Dr.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=UE();if(r)kn(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${hc(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...FE(s)),console.warn(...i)}rs()}function UE(){let t=Dr[Dr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function FE(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...$E(n))}),e}function $E({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${hc(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...jE(t.props),i]:[s+i]}function jE(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...Qg(r,t[r]))}),n.length>3&&e.push(" ..."),e}function Qg(t,e,n){return Me(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Re(e)?(e=Qg(t,Z(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):X(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Z(e),n?e:[`${t}=`,e])}const Gu={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function kn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){sc(i,e,n)}return s}function Gt(t,e,n,r){if(X(t)){const i=kn(t,e,n,r);return i&&$u(i)&&i.catch(o=>{sc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}function sc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Gu[n];for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){kn(c,null,10,[t,o,a]);return}}BE(t,n,s,r)}function BE(t,e,n,r=!0){{const s=Gu[e];if(n&&Yo(n),S(`Unhandled error${s?` during execution of ${s}`:""}`),n&&Jo(),r)throw t;console.error(t)}}let Ci=!1,Vl=!1;const ht=[];let nn=0;const Ts=[];let tn=null,qn=0;const Yg=Promise.resolve();let Qu=null;const qE=100;function wa(t){const e=Qu||Yg;return t?e.then(this?t.bind(this):t):e}function HE(t){let e=nn+1,n=ht.length;for(;e<n;){const r=e+n>>>1;ki(ht[r])<t?e=r+1:n=r}return e}function ic(t){(!ht.length||!ht.includes(t,Ci&&t.allowRecurse?nn+1:nn))&&(t.id==null?ht.push(t):ht.splice(HE(t.id),0,t),Jg())}function Jg(){!Ci&&!Vl&&(Vl=!0,Qu=Yg.then(em))}function WE(t){const e=ht.indexOf(t);e>nn&&ht.splice(e,1)}function Xg(t){Q(t)?Ts.push(...t):(!tn||!tn.includes(t,t.allowRecurse?qn+1:qn))&&Ts.push(t),Jg()}function zd(t,e=Ci?nn+1:0){for(t=t||new Map;e<ht.length;e++){const n=ht[e];if(n&&n.pre){if(Yu(t,n))continue;ht.splice(e,1),e--,n()}}}function Zg(t){if(Ts.length){const e=[...new Set(Ts)];if(Ts.length=0,tn){tn.push(...e);return}for(tn=e,t=t||new Map,tn.sort((n,r)=>ki(n)-ki(r)),qn=0;qn<tn.length;qn++)Yu(t,tn[qn])||tn[qn]();tn=null,qn=0}}const ki=t=>t.id==null?1/0:t.id,KE=(t,e)=>{const n=ki(t)-ki(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function em(t){Vl=!1,Ci=!0,t=t||new Map,ht.sort(KE);const e=n=>Yu(t,n);try{for(nn=0;nn<ht.length;nn++){const n=ht[nn];if(n&&n.active!==!1){if(e(n))continue;kn(n,null,14)}}}finally{nn=0,ht.length=0,Zg(t),Ci=!1,Qu=null,(ht.length||Ts.length)&&em(t)}}function Yu(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>qE){const r=e.ownerInstance,s=r&&ah(r.type);return S(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let Vr=!1;const ms=new Set;ga().__VUE_HMR_RUNTIME__={createRecord:Xc(tm),rerender:Xc(QE),reload:Xc(YE)};const Wr=new Map;function zE(t){const e=t.type.__hmrId;let n=Wr.get(e);n||(tm(e,t.type),n=Wr.get(e)),n.instances.add(t)}function GE(t){Wr.get(t.type.__hmrId).instances.delete(t)}function tm(t,e){return Wr.has(t)?!1:(Wr.set(t,{initialDef:mi(e),instances:new Set}),!0)}function mi(t){return Rm(t)?t.__vccOpts:t}function QE(t,e){const n=Wr.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,mi(r.type).render=e),r.renderCache=[],Vr=!0,r.update(),Vr=!1}))}function YE(t,e){const n=Wr.get(t);if(!n)return;e=mi(e),Gd(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=mi(s.type);ms.has(i)||(i!==n.initialDef&&Gd(i,e),ms.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(ms.add(i),s.ceReload(e.styles),ms.delete(i)):s.parent?ic(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Xg(()=>{for(const s of r)ms.delete(mi(s.type))})}function Gd(t,e){Ne(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Xc(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let rn,ai=[],Ml=!1;function so(t,...e){rn?rn.emit(t,...e):Ml||ai.push({event:t,args:e})}function nm(t,e){var n,r;rn=t,rn?(rn.enabled=!0,ai.forEach(({event:s,args:i})=>rn.emit(s,...i)),ai=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{nm(i,e)}),setTimeout(()=>{rn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ml=!0,ai=[])},3e3)):(Ml=!0,ai=[])}function JE(t,e){so("app:init",t,e,{Fragment:st,Text:io,Comment:xt,Static:ea})}function XE(t){so("app:unmount",t)}const ZE=Ju("component:added"),rm=Ju("component:updated"),eI=Ju("component:removed"),tI=t=>{rn&&typeof rn.cleanupBuffer=="function"&&!rn.cleanupBuffer(t)&&eI(t)};function Ju(t){return e=>{so(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const nI=sm("perf:start"),rI=sm("perf:end");function sm(t){return(e,n,r)=>{so(t,e.appContext.app,e.uid,e,n,r)}}function sI(t,e,n){so("component:emit",t.appContext.app,t,e,n)}function iI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(Tr(e)in h))&&S(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Tr(e)}" prop.`);else{const d=u[e];X(d)&&(d(...n)||S(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ae;d&&(s=n.map(p=>Me(p)?p.trim():p)),h&&(s=n.map(Ol))}sI(t,e,s);{const u=e.toLowerCase();u!==e&&r[Tr(u)]&&S(`Event "${u}" is emitted in component ${hc(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${or(e)}" instead of "${e}".`)}let a,c=r[a=Tr(e)]||r[a=Tr(mn(e))];!c&&i&&(c=r[a=Tr(or(e))]),c&&Gt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gt(l,t,6,s)}}function im(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=im(l,e,!0);u&&(a=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&r.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):Ne(o,i),we(t)&&r.set(t,o),o)}function oc(t,e){return!t||!no(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,or(e))||le(t,e))}let ft=null,om=null;function Ea(t){const e=ft;return ft=t,om=t&&t.type.__scopeId||null,e}function ac(t,e=ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&cf(-1);const i=Ea(e);let o;try{o=t(...s)}finally{Ea(i),r._d&&cf(1)}return rm(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let Ll=!1;function Ia(){Ll=!0}function Zc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:_,inheritAttrs:I}=t;let w,b;const x=Ea(t);Ll=!1;try{if(n.shapeFlag&4){const U=s||r;w=Ht(u.call(U,U,h,i,p,d,_)),b=c}else{const U=e;c===i&&Ia(),w=Ht(U.length>1?U(i,{get attrs(){return Ia(),c},slots:a,emit:l}):U(i,null)),b=e.props?c:aI(c)}}catch(U){_i.length=0,sc(U,t,1),w=Ze(xt)}let k=w,K;if(w.patchFlag>0&&w.patchFlag&2048&&([k,K]=oI(w)),b&&I!==!1){const U=Object.keys(b),{shapeFlag:ge}=k;if(U.length){if(ge&7)o&&U.some(fa)&&(b=cI(b,o)),k=lr(k,b);else if(!Ll&&k.type!==xt){const B=Object.keys(c),ze=[],Ee=[];for(let F=0,L=B.length;F<L;F++){const ce=B[F];no(ce)?fa(ce)||ze.push(ce[2].toLowerCase()+ce.slice(3)):Ee.push(ce)}Ee.length&&S(`Extraneous non-props attributes (${Ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),ze.length&&S(`Extraneous non-emits event listeners (${ze.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Qd(k)||S("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=lr(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(Qd(k)||S("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=n.transition),K?K(k):w=k,Ea(x),w}const oI=t=>{const e=t.children,n=t.dynamicChildren,r=am(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Ht(r),o]};function am(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Ni(r)){if(r.type!==xt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const aI=t=>{let e;for(const n in t)(n==="class"||n==="style"||no(n))&&((e||(e={}))[n]=t[n]);return e},cI=(t,e)=>{const n={};for(const r in t)(!fa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},Qd=t=>t.shapeFlag&7||t.type===xt;function lI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if((s||a)&&Vr||e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yd(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!oc(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Yd(r,o,l):!0:!!o;return!1}function Yd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!oc(n,i))return!0}return!1}function uI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const hI=t=>t.__isSuspense;function dI(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):Xg(t)}function fI(t,e){return Xu(t,null,e)}const Do={};function nr(t,e,n){return X(e)||S("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Xu(t,e,n)}function Xu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ae){var a;e||(n!==void 0&&S('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&S('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=U=>{S("Invalid watch source: ",U,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},l=Sg()===((a=He)==null?void 0:a.scope)?He:null;let u,h=!1,d=!1;if(Re(t)?(u=()=>t.value,h=ya(t)):zt(t)?(u=()=>t,r=!0):Q(t)?(d=!0,h=t.some(U=>zt(U)||ya(U)),u=()=>t.map(U=>{if(Re(U))return U.value;if(zt(U))return Pr(U);if(X(U))return kn(U,l,2);c(U)})):X(t)?e?u=()=>kn(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return p&&p(),Gt(t,l,3,[_])}:(u=St,c(t)),e&&r){const U=u;u=()=>Pr(U())}let p,_=U=>{p=k.onStop=()=>{kn(U,l,4)}},I;if(Di)if(_=St,e?n&&Gt(e,l,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const U=IT();I=U.__watcherHandles||(U.__watcherHandles=[])}else return St;let w=d?new Array(t.length).fill(Do):Do;const b=()=>{if(k.active)if(e){const U=k.run();(r||h||(d?U.some((ge,B)=>Pi(ge,w[B])):Pi(U,w)))&&(p&&p(),Gt(e,l,3,[U,w===Do?void 0:d&&w[0]===Do?[]:w,_]),w=U)}else k.run()};b.allowRecurse=!!e;let x;s==="sync"?x=b:s==="post"?x=()=>Pt(b,l&&l.suspense):(b.pre=!0,l&&(b.id=l.uid),x=()=>ic(b));const k=new Wu(u,x);k.onTrack=i,k.onTrigger=o,e?n?b():w=k.run():s==="post"?Pt(k.run.bind(k),l&&l.suspense):k.run();const K=()=>{k.stop(),l&&l.scope&&Uu(l.scope.effects,k)};return I&&I.push(K),K}function pI(t,e,n){const r=this.proxy,s=Me(t)?t.includes(".")?cm(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=He;Os(this);const a=Xu(s,i.bind(r),n);return o?Os(o):Lr(),a}function cm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Pr(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))Pr(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)Pr(t[n],e);else if(Eg(t)||xr(t))t.forEach(n=>{Pr(n,e)});else if(Tg(t))for(const n in t)Pr(t[n],e);return t}function lm(t){Bw(t)&&S("Do not use built-in directive ids as custom directive id: "+t)}function Jn(t,e){const n=ft;if(n===null)return S("withDirectives can only be used inside render functions."),t;const r=uc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ae]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Pr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ns(),Gt(c,n,8,[t.el,a,t,e]),rs())}}function tt(t,e){return X(t)?(()=>Ne({name:t.name},e,{setup:t}))():t}const Xo=t=>!!t.type.__asyncLoader,Zu=t=>t.type.__isKeepAlive;function gI(t,e){um(t,"a",e)}function mI(t,e){um(t,"da",e)}function um(t,e,n=He){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(cc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Zu(s.parent.vnode)&&_I(r,e,n,s),s=s.parent}}function _I(t,e,n,r){const s=cc(e,t,r,!0);hm(()=>{Uu(r[e],s)},n)}function cc(t,e,n=He,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ns(),Os(n);const a=Gt(e,n,t,o);return Lr(),rs(),a});return r?s.unshift(i):s.push(i),i}else{const s=Tr(Gu[t].replace(/ hook$/,""));S(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Mn=t=>(e,n=He)=>(!Di||t==="sp")&&cc(t,(...r)=>e(...r),n),yI=Mn("bm"),vI=Mn("m"),wI=Mn("bu"),EI=Mn("u"),II=Mn("bum"),hm=Mn("um"),TI=Mn("sp"),AI=Mn("rtg"),bI=Mn("rtc");function RI(t,e=He){cc("ec",t,e)}const Ul="components";function PI(t,e){return CI(Ul,t,!0,e)||t}const SI=Symbol.for("v-ndc");function CI(t,e,n=!0,r=!1){const s=ft||He;if(s){const i=s.type;if(t===Ul){const a=ah(i,!1);if(a&&(a===e||a===mn(e)||a===qr(mn(e))))return i}const o=Jd(s[t]||i[t],e)||Jd(s.appContext[t],e);if(!o&&r)return i;if(n&&!o){const a=t===Ul?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";S(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else S(`resolve${qr(t.slice(0,-1))} can only be used in render() or setup().`)}function Jd(t,e){return t&&(t[e]||t[mn(e)]||t[qr(mn(e))])}function Ta(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||Me(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){Number.isInteger(t)||S(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(we(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Fl=t=>t?Am(t)?uc(t)||t.proxy:Fl(t.parent):null,Mr=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>oi(t.props),$attrs:t=>oi(t.attrs),$slots:t=>oi(t.slots),$refs:t=>oi(t.refs),$parent:t=>Fl(t.parent),$root:t=>Fl(t.root),$emit:t=>t.emit,$options:t=>th(t),$forceUpdate:t=>t.f||(t.f=()=>ic(t.update)),$nextTick:t=>t.n||(t.n=wa.bind(t.proxy)),$watch:t=>pI.bind(t)}),eh=t=>t==="_"||t==="$",el=(t,e)=>t!==Ae&&!t.__isScriptSetup&&le(t,e),dm={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(el(r,e))return o[e]=1,r[e];if(s!==Ae&&le(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==Ae&&le(n,e))return o[e]=4,n[e];$l&&(o[e]=0)}}const u=Mr[e];let h,d;if(u)return e==="$attrs"?(_t(t,"get",e),Ia()):e==="$slots"&&_t(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&le(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,le(d,e))return d[e];ft&&(!Me(e)||e.indexOf("__v")!==0)&&(s!==Ae&&eh(e[0])&&le(s,e)?S(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===ft&&S(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return el(s,e)?(s[e]=n,!0):s.__isScriptSetup&&le(s,e)?(S(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==Ae&&le(r,e)?(r[e]=n,!0):le(t.props,e)?(S(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(S(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&le(t,o)||el(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(Mr,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};dm.ownKeys=t=>(S("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function kI(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Mr).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>Mr[n](t),set:St})}),e}function OI(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:St})})}function xI(t){const{ctx:e,setupState:n}=t;Object.keys(Z(n)).forEach(r=>{if(!n.__isScriptSetup){if(eh(r[0])){S(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:St})}})}function Xd(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function NI(){const t=Object.create(null);return(e,n)=>{t[n]?S(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let $l=!0;function DI(t){const e=th(t),n=t.proxy,r=t.ctx;$l=!1,e.beforeCreate&&Zd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:I,deactivated:w,beforeDestroy:b,beforeUnmount:x,destroyed:k,unmounted:K,render:U,renderTracked:ge,renderTriggered:B,errorCaptured:ze,serverPrefetch:Ee,expose:F,inheritAttrs:L,components:ce,directives:ke,filters:Jt}=e,Rt=NI();{const[re]=t.propsOptions;if(re)for(const Y in re)Rt("Props",Y)}if(l&&VI(l,r,Rt),o)for(const re in o){const Y=o[re];X(Y)?(Object.defineProperty(r,re,{value:Y.bind(n),configurable:!0,enumerable:!0,writable:!0}),Rt("Methods",re)):S(`Method "${re}" has type "${typeof Y}" in the component definition. Did you reference the function correctly?`)}if(s){X(s)||S("The data option must be a function. Plain object usage is no longer supported.");const re=s.call(n,n);if($u(re)&&S("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!we(re))S("data() should return an object.");else{t.data=ro(re);for(const Y in re)Rt("Data",Y),eh(Y[0])||Object.defineProperty(r,Y,{configurable:!0,enumerable:!0,get:()=>re[Y],set:St})}}if($l=!0,i)for(const re in i){const Y=i[re],Vt=X(Y)?Y.bind(n,n):X(Y.get)?Y.get.bind(n,n):St;Vt===St&&S(`Computed property "${re}" has no getter.`);const wr=!X(Y)&&X(Y.set)?Y.set.bind(n):()=>{S(`Write operation failed: computed property "${re}" is readonly.`)},Ln=$e({get:Vt,set:wr});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Ln.value,set:Xt=>Ln.value=Xt}),Rt("Computed",re)}if(a)for(const re in a)fm(a[re],r,n,re);if(c){const re=X(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Y=>{Zo(Y,re[Y])})}u&&Zd(u,t,"c");function Ge(re,Y){Q(Y)?Y.forEach(Vt=>re(Vt.bind(n))):Y&&re(Y.bind(n))}if(Ge(yI,h),Ge(vI,d),Ge(wI,p),Ge(EI,_),Ge(gI,I),Ge(mI,w),Ge(RI,ze),Ge(bI,ge),Ge(AI,B),Ge(II,x),Ge(hm,K),Ge(TI,Ee),Q(F))if(F.length){const re=t.exposed||(t.exposed={});F.forEach(Y=>{Object.defineProperty(re,Y,{get:()=>n[Y],set:Vt=>n[Y]=Vt})})}else t.exposed||(t.exposed={});U&&t.render===St&&(t.render=U),L!=null&&(t.inheritAttrs=L),ce&&(t.components=ce),ke&&(t.directives=ke)}function VI(t,e,n=St){Q(t)&&(t=jl(t));for(const r in t){const s=t[r];let i;we(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),Re(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function Zd(t,e,n){Gt(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fm(t,e,n,r){const s=r.includes(".")?cm(n,r):()=>n[r];if(Me(t)){const i=e[t];X(i)?nr(s,i):S(`Invalid watch handler specified by key "${t}"`,i)}else if(X(t))nr(s,t.bind(n));else if(we(t))if(Q(t))t.forEach(i=>fm(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)?nr(s,i,t):S(`Invalid watch handler specified by key "${t.handler}"`,i)}else S(`Invalid watch option: "${r}"`,t)}function th(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Aa(c,l,o,!0)),Aa(c,e,o)),we(e)&&i.set(e,c),c}function Aa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Aa(t,i,n,!0),s&&s.forEach(o=>Aa(t,o,n,!0));for(const o in e)if(r&&o==="expose")S('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=MI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const MI={data:ef,props:tf,emits:tf,methods:ci,computed:ci,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:ci,directives:ci,watch:UI,provide:ef,inject:LI};function ef(t,e){return e?t?function(){return Ne(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function LI(t,e){return ci(jl(t),jl(e))}function jl(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function ci(t,e){return t?Ne(Object.create(null),t,e):e}function tf(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:Ne(Object.create(null),Xd(t),Xd(e??{})):e}function UI(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function pm(){return{app:null,config:{isNativeTag:wg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let FI=0;function $I(t,e){return function(r,s=null){X(r)||(r=Ne({},r)),s!=null&&!we(s)&&(S("root props passed to app.mount() must be an object."),s=null);const i=pm();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){S("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const o=new Set;let a=!1;const c=i.app={_uid:FI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hf,get config(){return i.config},set config(l){S("app.config cannot be replaced. Modify individual options instead.")},use(l,...u){return o.has(l)?S("Plugin has already been applied to target app."):l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)?(o.add(l),l(c,...u)):S('A plugin must either be a function or an object with an "install" function.'),c},mixin(l){return i.mixins.includes(l)?S("Mixin has already been applied to target app"+(l.name?`: ${l.name}`:"")):i.mixins.push(l),c},component(l,u){return Kl(l,i.config),u?(i.components[l]&&S(`Component "${l}" has already been registered in target app.`),i.components[l]=u,c):i.components[l]},directive(l,u){return lm(l),u?(i.directives[l]&&S(`Directive "${l}" has already been registered in target app.`),i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(a)S("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{l.__vue_app__&&S("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Ze(r,s);return d.appContext=i,i.reload=()=>{t(lr(d),l,h)},u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,c._instance=d.component,JE(c,hf),uc(d.component)||d.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,XE(c),delete c._container.__vue_app__):S("Cannot unmount an app that is not mounted.")},provide(l,u){return l in i.provides&&S(`App already provides property with key "${String(l)}". It will be overwritten with the new value.`),i.provides[l]=u,c},runWithContext(l){Oi=c;try{return l()}finally{Oi=null}}};return c}}let Oi=null;function Zo(t,e){if(!He)S("provide() can only be used inside setup().");else{let n=He.provides;const r=He.parent&&He.parent.provides;r===n&&(n=He.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=He||ft;if(r||Oi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Oi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e;S(`injection "${String(t)}" not found.`)}else S("inject() can only be used inside setup() or functional components.")}function jI(){return!!(He||ft||Oi)}function BI(t,e,n,r=!1){const s={},i={};pa(i,lc,1),t.propsDefaults=Object.create(null),gm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);_m(e||{},s,t),n?t.props=r?s:Bg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qI(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function HI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Z(s),[c]=t.propsOptions;let l=!1;if(!qI(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(oc(t.emitsOptions,d))continue;const p=e[d];if(c)if(le(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const _=mn(d);s[_]=Bl(c,a,_,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{gm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=or(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Bl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],l=!0)}l&&_n(t,"set","$attrs"),_m(e||{},s,t)}function gm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Go(c))continue;const l=e[c];let u;s&&le(s,u=mn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:oc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Z(n),l=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Bl(s,c,h,l[h],t,!le(l,h))}}return o}function Bl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Os(s),r=l[n]=c.call(null,e),Lr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===or(n))&&(r=!0))}return r}function mm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[d,p]=mm(h,e,!0);Ne(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&r.set(t,Is),Is;if(Q(i))for(let u=0;u<i.length;u++){Me(i[u])||S("props must be strings when using array syntax.",i[u]);const h=mn(i[u]);nf(h)&&(o[h]=Ae)}else if(i){we(i)||S("invalid props options",i);for(const u in i){const h=mn(u);if(nf(h)){const d=i[u],p=o[h]=Q(d)||X(d)?{type:d}:Ne({},d);if(p){const _=sf(Boolean,p.type),I=sf(String,p.type);p[0]=_>-1,p[1]=I<0||_<I,(_>-1||le(p,"default"))&&a.push(h)}}}}const l=[o,a];return we(t)&&r.set(t,l),l}function nf(t){return t[0]!=="$"?!0:(S(`Invalid prop name: "${t}" is a reserved property.`),!1)}function ql(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function rf(t,e){return ql(t)===ql(e)}function sf(t,e){return Q(e)?e.findIndex(n=>rf(n,t)):X(e)&&rf(e,t)?0:-1}function _m(t,e,n){const r=Z(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&WI(i,r[i],o,!le(t,i)&&!le(t,or(i)))}}function WI(t,e,n,r){const{type:s,required:i,validator:o,skipCheck:a}=n;if(i&&r){S('Missing required prop: "'+t+'"');return}if(!(e==null&&!i)){if(s!=null&&s!==!0&&!a){let c=!1;const l=Q(s)?s:[s],u=[];for(let h=0;h<l.length&&!c;h++){const{valid:d,expectedType:p}=zI(e,l[h]);u.push(p||""),c=d}if(!c){S(GI(t,e,u));return}}o&&!o(e)&&S('Invalid prop: custom validator check failed for prop "'+t+'".')}}const KI=gr("String,Number,Boolean,Function,Symbol,BigInt");function zI(t,e){let n;const r=ql(e);if(KI(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=we(t):r==="Array"?n=Q(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function GI(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(qr).join(" | ")}`;const s=n[0],i=ju(e),o=of(e,s),a=of(e,i);return n.length===1&&af(s)&&!QI(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,af(i)&&(r+=`with value ${a}.`),r}function of(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function af(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function QI(...t){return t.some(e=>e.toLowerCase()==="boolean")}const ym=t=>t[0]==="_"||t==="$stable",nh=t=>Q(t)?t.map(Ht):[Ht(t)],YI=(t,e,n)=>{if(e._n)return e;const r=ac((...s)=>(He&&S(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),nh(e(...s))),n);return r._c=!1,r},vm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ym(s))continue;const i=t[s];if(X(i))e[s]=YI(s,i,r);else if(i!=null){S(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=nh(i);e[s]=()=>o}}},wm=(t,e)=>{Zu(t.vnode)||S("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=nh(e);t.slots.default=()=>n},JI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),pa(e,"_",n)):vm(e,t.slots={})}else t.slots={},e&&wm(t,e);pa(t.slots,lc,1)},XI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const a=e._;a?Vr?(Ne(s,e),_n(t,"set","$slots")):n&&a===1?i=!1:(Ne(s,e),!n&&a===1&&delete s._):(i=!e.$stable,vm(e,s)),o=e}else e&&(wm(t,e),o={default:1});if(i)for(const a in s)!ym(a)&&!(a in o)&&delete s[a]};function Hl(t,e,n,r,s=!1){if(Q(t)){t.forEach((d,p)=>Hl(d,e&&(Q(e)?e[p]:e),n,r,s));return}if(Xo(r)&&!s)return;const i=r.shapeFlag&4?uc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t;if(!a){S("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Me(l)?(u[l]=null,le(h,l)&&(h[l]=null)):Re(l)&&(l.value=null)),X(c))kn(c,a,12,[o,u]);else{const d=Me(c),p=Re(c);if(d||p){const _=()=>{if(t.f){const I=d?le(h,c)?h[c]:u[c]:c.value;s?Q(I)&&Uu(I,i):Q(I)?I.includes(i)||I.push(i):d?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,le(h,c)&&(h[c]=o)):p?(c.value=o,t.k&&(u[t.k]=o)):S("Invalid template ref type:",c,`(${typeof c})`)};o?(_.id=-1,Pt(_,n)):_()}else S("Invalid template ref type:",c,`(${typeof c})`)}}let Xs,Kn;function In(t,e){t.appContext.config.performance&&ba()&&Kn.mark(`vue-${e}-${t.uid}`),nI(t,e,ba()?Kn.now():Date.now())}function Tn(t,e){if(t.appContext.config.performance&&ba()){const n=`vue-${e}-${t.uid}`,r=n+":end";Kn.mark(r),Kn.measure(`<${hc(t,t.type)}> ${e}`,n,r),Kn.clearMarks(n),Kn.clearMarks(r)}rI(t,e,ba()?Kn.now():Date.now())}function ba(){return Xs!==void 0||(typeof window<"u"&&window.performance?(Xs=!0,Kn=window.performance):Xs=!1),Xs}function ZI(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Pt=dI;function eT(t){return tT(t)}function tT(t,e){ZI();const n=ga();n.__VUE__=!0,nm(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=St,insertStaticContent:_}=t,I=(f,g,m,E=null,v=null,C=null,N=!1,P=null,O=Vr?!1:!!g.dynamicChildren)=>{if(f===g)return;f&&!Zs(f,g)&&(E=V(f),Mt(f,v,C,!0),f=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:A,ref:W,shapeFlag:q}=g;switch(A){case io:w(f,g,m,E);break;case xt:b(f,g,m,E);break;case ea:f==null?x(g,m,E,N):k(f,g,m,N);break;case st:ke(f,g,m,E,v,C,N,P,O);break;default:q&1?ge(f,g,m,E,v,C,N,P,O):q&6?Jt(f,g,m,E,v,C,N,P,O):q&64||q&128?A.process(f,g,m,E,v,C,N,P,O,j):S("Invalid VNode type:",A,`(${typeof A})`)}W!=null&&v&&Hl(W,f&&f.ref,C,g||f,!g)},w=(f,g,m,E)=>{if(f==null)r(g.el=a(g.children),m,E);else{const v=g.el=f.el;g.children!==f.children&&l(v,g.children)}},b=(f,g,m,E)=>{f==null?r(g.el=c(g.children||""),m,E):g.el=f.el},x=(f,g,m,E)=>{[f.el,f.anchor]=_(f.children,g,m,E,f.el,f.anchor)},k=(f,g,m,E)=>{if(g.children!==f.children){const v=d(f.anchor);U(f),[g.el,g.anchor]=_(g.children,m,v,E)}else g.el=f.el,g.anchor=f.anchor},K=({el:f,anchor:g},m,E)=>{let v;for(;f&&f!==g;)v=d(f),r(f,m,E),f=v;r(g,m,E)},U=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=d(f),s(f),f=m;s(g)},ge=(f,g,m,E,v,C,N,P,O)=>{N=N||g.type==="svg",f==null?B(g,m,E,v,C,N,P,O):F(f,g,v,C,N,P,O)},B=(f,g,m,E,v,C,N,P)=>{let O,A;const{type:W,props:q,shapeFlag:z,transition:se,dirs:ue}=f;if(O=f.el=o(f.type,C,q&&q.is,q),z&8?u(O,f.children):z&16&&Ee(f.children,O,null,E,v,C&&W!=="foreignObject",N,P),ue&&Er(f,null,E,"created"),ze(O,f,f.scopeId,N,E),q){for(const Te in q)Te!=="value"&&!Go(Te)&&i(O,Te,null,q[Te],C,f.children,E,v,y);"value"in q&&i(O,"value",null,q.value),(A=q.onVnodeBeforeMount)&&en(A,E,f)}Object.defineProperty(O,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(O,"__vueParentComponent",{value:E,enumerable:!1}),ue&&Er(f,null,E,"beforeMount");const be=(!v||v&&!v.pendingBranch)&&se&&!se.persisted;be&&se.beforeEnter(O),r(O,g,m),((A=q&&q.onVnodeMounted)||be||ue)&&Pt(()=>{A&&en(A,E,f),be&&se.enter(O),ue&&Er(f,null,E,"mounted")},v)},ze=(f,g,m,E,v)=>{if(m&&p(f,m),E)for(let C=0;C<E.length;C++)p(f,E[C]);if(v){let C=v.subTree;if(C.patchFlag>0&&C.patchFlag&2048&&(C=am(C.children)||C),g===C){const N=v.vnode;ze(f,N,N.scopeId,N.slotScopeIds,v.parent)}}},Ee=(f,g,m,E,v,C,N,P,O=0)=>{for(let A=O;A<f.length;A++){const W=f[A]=P?Hn(f[A]):Ht(f[A]);I(null,W,g,m,E,v,C,N,P)}},F=(f,g,m,E,v,C,N)=>{const P=g.el=f.el;let{patchFlag:O,dynamicChildren:A,dirs:W}=g;O|=f.patchFlag&16;const q=f.props||Ae,z=g.props||Ae;let se;m&&Ir(m,!1),(se=z.onVnodeBeforeUpdate)&&en(se,m,g,f),W&&Er(g,f,m,"beforeUpdate"),m&&Ir(m,!0),Vr&&(O=0,N=!1,A=null);const ue=v&&g.type!=="foreignObject";if(A?(L(f.dynamicChildren,A,P,m,E,ue,C),Wl(f,g)):N||Vt(f,g,P,null,m,E,ue,C,!1),O>0){if(O&16)ce(P,g,q,z,m,E,v);else if(O&2&&q.class!==z.class&&i(P,"class",null,z.class,v),O&4&&i(P,"style",q.style,z.style,v),O&8){const be=g.dynamicProps;for(let Te=0;Te<be.length;Te++){const je=be[Te],Bt=q[je],us=z[je];(us!==Bt||je==="value")&&i(P,je,Bt,us,v,f.children,m,E,y)}}O&1&&f.children!==g.children&&u(P,g.children)}else!N&&A==null&&ce(P,g,q,z,m,E,v);((se=z.onVnodeUpdated)||W)&&Pt(()=>{se&&en(se,m,g,f),W&&Er(g,f,m,"updated")},E)},L=(f,g,m,E,v,C,N)=>{for(let P=0;P<g.length;P++){const O=f[P],A=g[P],W=O.el&&(O.type===st||!Zs(O,A)||O.shapeFlag&70)?h(O.el):m;I(O,A,W,null,E,v,C,N,!0)}},ce=(f,g,m,E,v,C,N)=>{if(m!==E){if(m!==Ae)for(const P in m)!Go(P)&&!(P in E)&&i(f,P,m[P],null,N,g.children,v,C,y);for(const P in E){if(Go(P))continue;const O=E[P],A=m[P];O!==A&&P!=="value"&&i(f,P,A,O,N,g.children,v,C,y)}"value"in E&&i(f,"value",m.value,E.value)}},ke=(f,g,m,E,v,C,N,P,O)=>{const A=g.el=f?f.el:a(""),W=g.anchor=f?f.anchor:a("");let{patchFlag:q,dynamicChildren:z,slotScopeIds:se}=g;(Vr||q&2048)&&(q=0,O=!1,z=null),se&&(P=P?P.concat(se):se),f==null?(r(A,m,E),r(W,m,E),Ee(g.children,m,W,v,C,N,P,O)):q>0&&q&64&&z&&f.dynamicChildren?(L(f.dynamicChildren,z,m,v,C,N,P),Wl(f,g)):Vt(f,g,m,W,v,C,N,P,O)},Jt=(f,g,m,E,v,C,N,P,O)=>{g.slotScopeIds=P,f==null?g.shapeFlag&512?v.ctx.activate(g,m,E,N,O):Rt(g,m,E,v,C,N,O):Ge(f,g,O)},Rt=(f,g,m,E,v,C,N)=>{const P=f.component=hT(f,E,v);if(P.type.__hmrId&&zE(P),Yo(f),In(P,"mount"),Zu(f)&&(P.ctx.renderer=j),In(P,"init"),fT(P),Tn(P,"init"),P.asyncDep){if(v&&v.registerDep(P,re),!f.el){const O=P.subTree=Ze(xt);b(null,O,g,m)}return}re(P,f,g,m,v,C,N),Jo(),Tn(P,"mount")},Ge=(f,g,m)=>{const E=g.component=f.component;if(lI(f,g,m))if(E.asyncDep&&!E.asyncResolved){Yo(g),Y(E,g,m),Jo();return}else E.next=g,WE(E.update),E.update();else g.el=f.el,E.vnode=g},re=(f,g,m,E,v,C,N)=>{const P=()=>{if(f.isMounted){let{next:W,bu:q,u:z,parent:se,vnode:ue}=f,be=W,Te;Yo(W||f.vnode),Ir(f,!1),W?(W.el=ue.el,Y(f,W,N)):W=ue,q&&gs(q),(Te=W.props&&W.props.onVnodeBeforeUpdate)&&en(Te,se,W,ue),Ir(f,!0),In(f,"render");const je=Zc(f);Tn(f,"render");const Bt=f.subTree;f.subTree=je,In(f,"patch"),I(Bt,je,h(Bt.el),V(Bt),f,v,C),Tn(f,"patch"),W.el=je.el,be===null&&uI(f,je.el),z&&Pt(z,v),(Te=W.props&&W.props.onVnodeUpdated)&&Pt(()=>en(Te,se,W,ue),v),rm(f),Jo()}else{let W;const{el:q,props:z}=g,{bm:se,m:ue,parent:be}=f,Te=Xo(g);if(Ir(f,!1),se&&gs(se),!Te&&(W=z&&z.onVnodeBeforeMount)&&en(W,be,g),Ir(f,!0),q&&Oe){const je=()=>{In(f,"render"),f.subTree=Zc(f),Tn(f,"render"),In(f,"hydrate"),Oe(q,f.subTree,f,v,null),Tn(f,"hydrate")};Te?g.type.__asyncLoader().then(()=>!f.isUnmounted&&je()):je()}else{In(f,"render");const je=f.subTree=Zc(f);Tn(f,"render"),In(f,"patch"),I(null,je,m,E,f,v,C),Tn(f,"patch"),g.el=je.el}if(ue&&Pt(ue,v),!Te&&(W=z&&z.onVnodeMounted)){const je=g;Pt(()=>en(W,be,je),v)}(g.shapeFlag&256||be&&Xo(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&Pt(f.a,v),f.isMounted=!0,ZE(f),g=m=E=null}},O=f.effect=new Wu(P,()=>ic(A),f.scope),A=f.update=()=>O.run();A.id=f.uid,Ir(f,!0),O.onTrack=f.rtc?W=>gs(f.rtc,W):void 0,O.onTrigger=f.rtg?W=>gs(f.rtg,W):void 0,A.ownerInstance=f,A()},Y=(f,g,m)=>{g.component=f;const E=f.vnode.props;f.vnode=g,f.next=null,HI(f,g.props,E,m),XI(f,g.children,m),ns(),zd(),rs()},Vt=(f,g,m,E,v,C,N,P,O=!1)=>{const A=f&&f.children,W=f?f.shapeFlag:0,q=g.children,{patchFlag:z,shapeFlag:se}=g;if(z>0){if(z&128){Ln(A,q,m,E,v,C,N,P,O);return}else if(z&256){wr(A,q,m,E,v,C,N,P,O);return}}se&8?(W&16&&y(A,v,C),q!==A&&u(m,q)):W&16?se&16?Ln(A,q,m,E,v,C,N,P,O):y(A,v,C,!0):(W&8&&u(m,""),se&16&&Ee(q,m,E,v,C,N,P,O))},wr=(f,g,m,E,v,C,N,P,O)=>{f=f||Is,g=g||Is;const A=f.length,W=g.length,q=Math.min(A,W);let z;for(z=0;z<q;z++){const se=g[z]=O?Hn(g[z]):Ht(g[z]);I(f[z],se,m,null,v,C,N,P,O)}A>W?y(f,v,C,!0,!1,q):Ee(g,m,E,v,C,N,P,O,q)},Ln=(f,g,m,E,v,C,N,P,O)=>{let A=0;const W=g.length;let q=f.length-1,z=W-1;for(;A<=q&&A<=z;){const se=f[A],ue=g[A]=O?Hn(g[A]):Ht(g[A]);if(Zs(se,ue))I(se,ue,m,null,v,C,N,P,O);else break;A++}for(;A<=q&&A<=z;){const se=f[q],ue=g[z]=O?Hn(g[z]):Ht(g[z]);if(Zs(se,ue))I(se,ue,m,null,v,C,N,P,O);else break;q--,z--}if(A>q){if(A<=z){const se=z+1,ue=se<W?g[se].el:E;for(;A<=z;)I(null,g[A]=O?Hn(g[A]):Ht(g[A]),m,ue,v,C,N,P,O),A++}}else if(A>z)for(;A<=q;)Mt(f[A],v,C,!0),A++;else{const se=A,ue=A,be=new Map;for(A=ue;A<=z;A++){const Et=g[A]=O?Hn(g[A]):Ht(g[A]);Et.key!=null&&(be.has(Et.key)&&S("Duplicate keys found during update:",JSON.stringify(Et.key),"Make sure keys are unique."),be.set(Et.key,A))}let Te,je=0;const Bt=z-ue+1;let us=!1,Vd=0;const Js=new Array(Bt);for(A=0;A<Bt;A++)Js[A]=0;for(A=se;A<=q;A++){const Et=f[A];if(je>=Bt){Mt(Et,v,C,!0);continue}let Zt;if(Et.key!=null)Zt=be.get(Et.key);else for(Te=ue;Te<=z;Te++)if(Js[Te-ue]===0&&Zs(Et,g[Te])){Zt=Te;break}Zt===void 0?Mt(Et,v,C,!0):(Js[Zt-ue]=A+1,Zt>=Vd?Vd=Zt:us=!0,I(Et,g[Zt],m,null,v,C,N,P,O),je++)}const Md=us?nT(Js):Is;for(Te=Md.length-1,A=Bt-1;A>=0;A--){const Et=ue+A,Zt=g[Et],Ld=Et+1<W?g[Et+1].el:E;Js[A]===0?I(null,Zt,m,Ld,v,C,N,P,O):us&&(Te<0||A!==Md[Te]?Xt(Zt,m,Ld,2):Te--)}}},Xt=(f,g,m,E,v=null)=>{const{el:C,type:N,transition:P,children:O,shapeFlag:A}=f;if(A&6){Xt(f.component.subTree,g,m,E);return}if(A&128){f.suspense.move(g,m,E);return}if(A&64){N.move(f,g,m,j);return}if(N===st){r(C,g,m);for(let q=0;q<O.length;q++)Xt(O[q],g,m,E);r(f.anchor,g,m);return}if(N===ea){K(f,g,m);return}if(E!==2&&A&1&&P)if(E===0)P.beforeEnter(C),r(C,g,m),Pt(()=>P.enter(C),v);else{const{leave:q,delayLeave:z,afterLeave:se}=P,ue=()=>r(C,g,m),be=()=>{q(C,()=>{ue(),se&&se()})};z?z(C,ue,be):be()}else r(C,g,m)},Mt=(f,g,m,E=!1,v=!1)=>{const{type:C,props:N,ref:P,children:O,dynamicChildren:A,shapeFlag:W,patchFlag:q,dirs:z}=f;if(P!=null&&Hl(P,null,m,f,!0),W&256){g.ctx.deactivate(f);return}const se=W&1&&z,ue=!Xo(f);let be;if(ue&&(be=N&&N.onVnodeBeforeUnmount)&&en(be,g,f),W&6)Fn(f.component,m,E);else{if(W&128){f.suspense.unmount(m,E);return}se&&Er(f,null,g,"beforeUnmount"),W&64?f.type.remove(f,g,m,v,j,E):A&&(C!==st||q>0&&q&64)?y(A,g,m,!1,!0):(C===st&&q&384||!v&&W&16)&&y(O,g,m),E&&Un(f)}(ue&&(be=N&&N.onVnodeUnmounted)||se)&&Pt(()=>{be&&en(be,g,f),se&&Er(f,null,g,"unmounted")},m)},Un=f=>{const{type:g,el:m,anchor:E,transition:v}=f;if(g===st){f.patchFlag>0&&f.patchFlag&2048&&v&&!v.persisted?f.children.forEach(N=>{N.type===xt?s(N.el):Un(N)}):So(m,E);return}if(g===ea){U(f);return}const C=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:P}=v,O=()=>N(m,C);P?P(f.el,C,O):O()}else C()},So=(f,g)=>{let m;for(;f!==g;)m=d(f),s(f),f=m;s(g)},Fn=(f,g,m)=>{f.type.__hmrId&&GE(f);const{bum:E,scope:v,update:C,subTree:N,um:P}=f;E&&gs(E),v.stop(),C&&(C.active=!1,Mt(N,f,g,m)),P&&Pt(P,g),Pt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve()),tI(f)},y=(f,g,m,E=!1,v=!1,C=0)=>{for(let N=C;N<f.length;N++)Mt(f[N],g,m,E,v)},V=f=>f.shapeFlag&6?V(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),M=(f,g,m)=>{f==null?g._vnode&&Mt(g._vnode,null,null,!0):I(g._vnode||null,f,g,null,null,null,m),zd(),Zg(),g._vnode=f},j={p:I,um:Mt,m:Xt,r:Un,mt:Rt,mc:Ee,pc:Vt,pbc:L,n:V,o:t};let de,Oe;return e&&([de,Oe]=e(j)),{render:M,hydrate:de,createApp:$I(M,de)}}function Ir({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Wl(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Hn(s[i]),a.el=o.el),n||Wl(o,a)),a.type===io&&(a.el=o.el),a.type===xt&&!a.el&&(a.el=o.el)}}function nT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const rT=t=>t.__isTeleport,st=Symbol.for("v-fgt"),io=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),_i=[];let Wt=null;function oe(t=!1){_i.push(Wt=t?null:[])}function sT(){_i.pop(),Wt=_i[_i.length-1]||null}let xi=1;function cf(t){xi+=t}function Em(t){return t.dynamicChildren=xi>0?Wt||Is:null,sT(),xi>0&&Wt&&Wt.push(t),t}function ve(t,e,n,r,s,i){return Em(J(t,e,n,r,s,i,!0))}function $t(t,e,n,r,s){return Em(Ze(t,e,n,r,s,!0))}function Ni(t){return t?t.__v_isVNode===!0:!1}function Zs(t,e){return e.shapeFlag&6&&ms.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const iT=(...t)=>oT(...t),lc="__vInternal",Im=({key:t})=>t??null,ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Me(t)||Re(t)||X(t)?{i:ft,r:t,k:e,f:!!n}:t:null);function J(t,e=null,n=null,r=0,s=null,i=t===st?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Im(e),ref:e&&ta(e),scopeId:om,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ft};return a?(sh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),c.key!==c.key&&S("VNode created with invalid key (NaN). VNode type:",c.type),xi>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const Ze=iT;function oT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===SI)&&(t||S(`Invalid vnode type when creating vnode: ${t}.`),t=xt),Ni(t)){const a=lr(t,e,!0);return n&&sh(a,n),xi>0&&!i&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(t)]=a:Wt.push(a)),a.patchFlag|=-2,a}if(Rm(t)&&(t=t.__vccOpts),e){e=aT(e);let{class:a,style:c}=e;a&&!Me(a)&&(e.class=Za(a)),we(c)&&(va(c)&&!Q(c)&&(c=Ne({},c)),e.style=qu(c))}const o=Me(t)?1:hI(t)?128:rT(t)?64:we(t)?4:X(t)?2:0;return o&4&&va(t)&&(t=Z(t),S("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),J(t,e,n,r,s,o,i,!0)}function aT(t){return t?va(t)||lc in t?Ne({},t):t:null}function lr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?cT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Im(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(ta(e)):[s,ta(e)]:ta(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&Q(o)?o.map(Tm):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&lr(t.ssContent),ssFallback:t.ssFallback&&lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Tm(t){const e=lr(t);return Q(t.children)&&(e.children=t.children.map(Tm)),e}function rh(t=" ",e=0){return Ze(io,null,t,e)}function ks(t="",e=!1){return e?(oe(),$t(xt,null,t)):Ze(xt,null,t)}function Ht(t){return t==null||typeof t=="boolean"?Ze(xt):Q(t)?Ze(st,null,t.slice()):typeof t=="object"?Hn(t):Ze(io,null,String(t))}function Hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:lr(t)}function sh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),sh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(lc in e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[rh(e)]):n=8);t.children=e,t.shapeFlag|=n}function cT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Za([e.class,r.class]));else if(s==="style")e.style=qu([e.style,r.style]);else if(no(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){Gt(t,e,7,[n,r])}const lT=pm();let uT=0;function hT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||lT,i={uid:uT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mm(r,s),emitsOptions:im(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=kI(i),i.root=e?e.root:i,i.emit=iI.bind(null,i),t.ce&&t.ce(i),i}let He=null;const ih=()=>He||ft;let oh,hs,lf="__VUE_INSTANCE_SETTERS__";(hs=ga()[lf])||(hs=ga()[lf]=[]),hs.push(t=>He=t),oh=t=>{hs.length>1?hs.forEach(e=>e(t)):hs[0](t)};const Os=t=>{oh(t),t.scope.on()},Lr=()=>{He&&He.scope.off(),oh(null)},dT=gr("slot,component");function Kl(t,e){const n=e.isNativeTag||wg;(dT(t)||n(t))&&S("Do not use built-in or reserved HTML elements as component id: "+t)}function Am(t){return t.vnode.shapeFlag&4}let Di=!1;function fT(t,e=!1){Di=e;const{props:n,children:r}=t.vnode,s=Am(t);BI(t,n,s,e),JI(t,r);const i=s?pT(t,e):void 0;return Di=!1,i}function pT(t,e){var n;const r=t.type;{if(r.name&&Kl(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)Kl(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)lm(i[o])}r.compilerOptions&&gT()&&S('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Rn(new Proxy(t.ctx,dm)),OI(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?yT(t):null;Os(t),ns();const o=kn(s,t,0,[oi(t.props),i]);if(rs(),Lr(),$u(o)){if(o.then(Lr,Lr),e)return o.then(a=>{uf(t,a,e)}).catch(a=>{sc(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!=null?n:"Anonymous";S(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else uf(t,o,e)}else bm(t,e)}function uf(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)?(Ni(e)&&S("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=zg(e),xI(t)):e!==void 0&&S(`setup() should return an object. Received: ${e===null?"null":typeof e}`),bm(t,n)}let zl;const gT=()=>!zl;function bm(t,e,n){const r=t.type;if(!t.render){if(!e&&zl&&!r.render){const s=r.template||th(t).template;if(s){In(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ne(Ne({isCustomElement:i,delimiters:a},o),c);r.render=zl(s,l),Tn(t,"compile")}}t.render=r.render||St}Os(t),ns(),DI(t),rs(),Lr(),!r.render&&t.render===St&&!e&&(r.template?S('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):S("Component is missing template or render function."))}function mT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ia(),_t(t,"get","$attrs"),e[n]},set(){return S("setupContext.attrs is readonly."),!1},deleteProperty(){return S("setupContext.attrs is readonly."),!1}}))}function _T(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return _t(t,"get","$slots"),e[n]}}))}function yT(t){return Object.freeze({get attrs(){return mT(t)},get slots(){return _T(t)},get emit(){return(n,...r)=>t.emit(n,...r)},expose:n=>{if(t.exposed&&S("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(Q(n)?r="array":Re(n)&&(r="ref")),r!=="object"&&S(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}}})}function uc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zg(Rn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mr)return Mr[n](t)},has(e,n){return n in e||n in Mr}}))}const vT=/(?:^|[-_])(\w)/g,wT=t=>t.replace(vT,e=>e.toUpperCase()).replace(/[-_]/g,"");function ah(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function hc(t,e,n=!1){let r=ah(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?wT(r):n?"App":"Anonymous"}function Rm(t){return X(t)&&"__vccOpts"in t}const $e=(t,e)=>LE(t,e,Di);function Pm(t,e,n){const r=arguments.length;return r===2?we(e)&&!Q(e)?Ni(e)?Ze(t,null,[e]):Ze(t,e):Ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ni(n)&&(n=[n]),Ze(t,e,n))}const ET=Symbol.for("v-scx"),IT=()=>{{const t=ln(ET);return t||S("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function tl(t){return!!(t&&t.__v_isShallow)}function TT(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return we(h)?h.__isVue?["div",t,"VueInstance"]:Re(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:zt(h)?["div",{},["span",t,tl(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${cr(h)?" (readonly)":""}`]:cr(h)?["div",{},["span",t,tl(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",Z(h.props))),h.setupState!==Ae&&d.push(o("setup",h.setupState)),h.data!==Ae&&d.push(o("data",Z(h.data)));const p=c(h,"computed");p&&d.push(o("computed",p));const _=c(h,"inject");return _&&d.push(o("injected",_)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=Ne({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",r,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:we(h)?["object",{object:d?Z(h):h}]:["span",n,String(h)]}function c(h,d){const p=h.type;if(X(p))return;const _={};for(const I in h.ctx)l(p,I,d)&&(_[I]=h.ctx[I]);return _}function l(h,d,p){const _=h[p];if(Q(_)&&_.includes(d)||we(_)&&d in _||h.extends&&l(h.extends,d,p)||h.mixins&&h.mixins.some(I=>l(I,d,p)))return!0}function u(h){return tl(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const hf="3.3.4",AT="http://www.w3.org/2000/svg",Rr=typeof document<"u"?document:null,df=Rr&&Rr.createElement("template"),bT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Rr.createElementNS(AT,t):Rr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rr.createTextNode(t),createComment:t=>Rr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{df.innerHTML=r?`<svg>${t}</svg>`:t;const a=df.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function RT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function PT(t,e,n){const r=t.style,s=Me(n);if(n&&!s){if(e&&!Me(e))for(const i in e)n[i]==null&&Gl(r,i,"");for(const i in n)Gl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ST=/[^\\];\s*$/,ff=/\s*!important$/;function Gl(t,e,n){if(Q(n))n.forEach(r=>Gl(t,e,r));else if(n==null&&(n=""),ST.test(n)&&S(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=CT(t,e);ff.test(n)?t.setProperty(or(r),n.replace(ff,""),"important"):t[r]=n}}const pf=["Webkit","Moz","ms"],nl={};function CT(t,e){const n=nl[e];if(n)return n;let r=mn(e);if(r!=="filter"&&r in t)return nl[e]=r;r=qr(r);for(let s=0;s<pf.length;s++){const i=pf[s]+r;if(i in t)return nl[e]=i}return e}const gf="http://www.w3.org/1999/xlink";function kT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n);else{const i=eE(e);n==null||i&&!Ag(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function OT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ag(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch(l){c||S(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,l)}c&&t.removeAttribute(e)}function _s(t,e,n,r){t.addEventListener(e,n,r)}function xT(t,e,n,r){t.removeEventListener(e,n,r)}function NT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=DT(e);if(r){const l=i[e]=LT(r,s);_s(t,a,l,c)}else o&&(xT(t,a,o,c),i[e]=void 0)}}const mf=/(?:Once|Passive|Capture)$/;function DT(t){let e;if(mf.test(t)){e={};let r;for(;r=t.match(mf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let rl=0;const VT=Promise.resolve(),MT=()=>rl||(VT.then(()=>rl=0),rl=Date.now());function LT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(UT(r,n.value),e,5,[r])};return n.value=t,n.attached=MT(),n}function UT(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _f=/^on[a-z]/,FT=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?RT(t,r,s):e==="style"?PT(t,n,r):no(e)?fa(e)||NT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$T(t,e,r,s))?OT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kT(t,e,r,s))};function $T(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&_f.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_f.test(e)&&Me(n)?!1:e in t}const yf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>gs(e,n):e};function jT(t){t.target.composing=!0}function vf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=yf(s);const i=r||s.props&&s.props.type==="number";_s(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ol(a)),t._assign(a)}),n&&_s(t,"change",()=>{t.value=t.value.trim()}),e||(_s(t,"compositionstart",jT),_s(t,"compositionend",vf),_s(t,"change",vf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=yf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ol(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},BT=["ctrl","shift","alt","meta"],qT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>BT.some(n=>t[`${n}Key`]&&!e.includes(n))},ch=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=qT[e[s]];if(i&&i(n,e))return}return t(n,...r)},HT=Ne({patchProp:FT},bT);let wf;function WT(){return wf||(wf=eT(HT))}const KT=(...t)=>{const e=WT().createApp(...t);zT(e),GT(e);const{mount:n}=e;return e.mount=r=>{const s=QT(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function zT(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>Jw(e)||Xw(e),writable:!1})}function GT(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){S("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return S(r),n},set(){S(r)}})}}function QT(t){if(Me(t)){const e=document.querySelector(t);return e||S(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&S('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function YT(){TT()}YT();var JT=!1;function Vo(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function sl(t,e){if(Array.isArray(t)){t.splice(e,1);return}delete t[e]}function XT(){return Sm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Sm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const ZT=typeof Proxy=="function",eA="devtools-plugin:setup",tA="plugin:settings:set";let ds,Ql;function nA(){var t;return ds!==void 0||(typeof window<"u"&&window.performance?(ds=!0,Ql=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ds=!0,Ql=global.perf_hooks.performance):ds=!1),ds}function rA(){return nA()?Ql.now():Date.now()}class sA{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return rA()}},n&&n.on(tA,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function lh(t,e){const n=t,r=Sm(),s=XT(),i=ZT&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(eA,t,e);else{const o=i?new sA(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Yl;const Vi=t=>Yl=t,Cm=Symbol("pinia");function Kr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var un;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(un||(un={}));const dc=typeof window<"u",Ra=dc,Ef=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function iA(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function uh(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){xm(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function km(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function na(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const ra=typeof navigator=="object"?navigator:{userAgent:""},Om=(()=>/Macintosh/.test(ra.userAgent)&&/AppleWebKit/.test(ra.userAgent)&&!/Safari/.test(ra.userAgent))(),xm=dc?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!Om?oA:"msSaveOrOpenBlob"in ra?aA:cA:()=>{};function oA(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener",typeof t=="string"?(r.href=t,r.origin!==location.origin?km(r.href)?uh(t,e,n):(r.target="_blank",na(r)):na(r)):(r.href=URL.createObjectURL(t),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){na(r)},0))}function aA(t,e="download",n){if(typeof t=="string")if(km(t))uh(t,e,n);else{const r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){na(r)})}else navigator.msSaveOrOpenBlob(iA(t,n),e)}function cA(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof t=="string")return uh(t,e,n);const s=t.type==="application/octet-stream",i=/constructor/i.test(String(Ef.HTMLElement))||"safari"in Ef,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||s&&i||Om)&&typeof FileReader<"u"){const a=new FileReader;a.onloadend=function(){let c=a.result;if(typeof c!="string")throw r=null,new Error("Wrong reader.result type");c=o?c:c.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=c:location.assign(c),r=null},a.readAsDataURL(t)}else{const a=URL.createObjectURL(t);r?r.location.assign(a):location.href=a,r=null,setTimeout(function(){URL.revokeObjectURL(a)},4e4)}}function Xe(t,e){const n="🍍 "+t;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(n,e):e==="error"?console.error(n):e==="warn"?console.warn(n):console.log(n)}function hh(t){return"_a"in t&&"install"in t}function Nm(){if(!("clipboard"in navigator))return Xe("Your browser doesn't support the Clipboard API","error"),!0}function Dm(t){return t instanceof Error&&t.message.toLowerCase().includes("document is not focused")?(Xe('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function lA(t){if(!Nm())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),Xe("Global state copied to clipboard.")}catch(e){if(Dm(e))return;Xe("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function uA(t){if(!Nm())try{Vm(t,JSON.parse(await navigator.clipboard.readText())),Xe("Global state pasted from clipboard.")}catch(e){if(Dm(e))return;Xe("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function hA(t){try{xm(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){Xe("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let wn;function dA(){wn||(wn=document.createElement("input"),wn.type="file",wn.accept=".json");function t(){return new Promise((e,n)=>{wn.onchange=async()=>{const r=wn.files;if(!r)return e(null);const s=r.item(0);return e(s?{text:await s.text(),file:s}:null)},wn.oncancel=()=>e(null),wn.onerror=n,wn.click()})}return t}async function fA(t){try{const n=await dA()();if(!n)return;const{text:r,file:s}=n;Vm(t,JSON.parse(r)),Xe(`Global state imported from "${s.name}".`)}catch(e){Xe("Failed to import the state from JSON. Check the console for more details.","error"),console.error(e)}}function Vm(t,e){for(const n in e){const r=t.state.value[n];r&&Object.assign(r,e[n])}}function qt(t){return{_custom:{display:t}}}const Mm="🍍 Pinia (root)",Jl="_root";function pA(t){return hh(t)?{id:Jl,label:Mm}:{id:t.$id,label:t.$id}}function gA(t){if(hh(t)){const n=Array.from(t._s.keys()),r=t._s;return{state:n.map(i=>({editable:!0,key:i,value:t.state.value[i]})),getters:n.filter(i=>r.get(i)._getters).map(i=>{const o=r.get(i);return{editable:!1,key:i,value:o._getters.reduce((a,c)=>(a[c]=o[c],a),{})}})}}const e={state:Object.keys(t.$state).map(n=>({editable:!0,key:n,value:t.$state[n]}))};return t._getters&&t._getters.length&&(e.getters=t._getters.map(n=>({editable:!1,key:n,value:t[n]}))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map(n=>({editable:!0,key:n,value:t[n]}))),e}function mA(t){return t?Array.isArray(t)?t.reduce((e,n)=>(e.keys.push(n.key),e.operations.push(n.type),e.oldValue[n.key]=n.oldValue,e.newValue[n.key]=n.newValue,e),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:qt(t.type),key:qt(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function _A(t){switch(t){case un.direct:return"mutation";case un.patchFunction:return"$patch";case un.patchObject:return"$patch";default:return"unknown"}}let ws=!0;const sa=[],Ar="pinia:mutations",ct="pinia",{assign:yA}=Object,Pa=t=>"🍍 "+t;function vA(t,e){lh({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:sa,app:t},n=>{typeof n.now!="function"&&Xe("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:Ar,label:"Pinia 🍍",color:15064968}),n.addInspector({id:ct,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{lA(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await uA(e),n.sendInspectorTree(ct),n.sendInspectorState(ct)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{hA(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await fA(e),n.sendInspectorTree(ct),n.sendInspectorState(ct)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:r=>{const s=e._s.get(r);s?typeof s.$reset!="function"?Xe(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`,"warn"):(s.$reset(),Xe(`Store "${r}" reset.`)):Xe(`Cannot reset "${r}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent((r,s)=>{const i=r.componentInstance&&r.componentInstance.proxy;if(i&&i._pStores){const o=r.componentInstance.proxy._pStores;Object.values(o).forEach(a=>{r.instanceData.state.push({type:Pa(a.$id),key:"state",editable:!0,value:a._isOptionsAPI?{_custom:{value:Z(a.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>a.$reset()}]}}:Object.keys(a.$state).reduce((c,l)=>(c[l]=a.$state[l],c),{})}),a._getters&&a._getters.length&&r.instanceData.state.push({type:Pa(a.$id),key:"getters",editable:!1,value:a._getters.reduce((c,l)=>{try{c[l]=a[l]}catch(u){c[l]=u}return c},{})})})}}),n.on.getInspectorTree(r=>{if(r.app===t&&r.inspectorId===ct){let s=[e];s=s.concat(Array.from(e._s.values())),r.rootNodes=(r.filter?s.filter(i=>"$id"in i?i.$id.toLowerCase().includes(r.filter.toLowerCase()):Mm.toLowerCase().includes(r.filter.toLowerCase())):s).map(pA)}}),n.on.getInspectorState(r=>{if(r.app===t&&r.inspectorId===ct){const s=r.nodeId===Jl?e:e._s.get(r.nodeId);if(!s)return;s&&(r.state=gA(s))}}),n.on.editInspectorState((r,s)=>{if(r.app===t&&r.inspectorId===ct){const i=r.nodeId===Jl?e:e._s.get(r.nodeId);if(!i)return Xe(`store "${r.nodeId}" not found`,"error");const{path:o}=r;hh(i)?o.unshift("state"):(o.length!==1||!i._customProperties.has(o[0])||o[0]in i.$state)&&o.unshift("$state"),ws=!1,r.set(i,o,r.state.value),ws=!0}}),n.on.editComponentState(r=>{if(r.type.startsWith("🍍")){const s=r.type.replace(/^🍍\s*/,""),i=e._s.get(s);if(!i)return Xe(`store "${s}" not found`,"error");const{path:o}=r;if(o[0]!=="state")return Xe(`Invalid path for store "${s}":
${o}
Only state can be modified.`);o[0]="$state",ws=!1,r.set(i,o,r.state.value),ws=!0}})})}function wA(t,e){sa.includes(Pa(e.$id))||sa.push(Pa(e.$id)),lh({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:sa,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},n=>{const r=typeof n.now=="function"?n.now.bind(n):Date.now;e.$onAction(({after:o,onError:a,name:c,args:l})=>{const u=Lm++;n.addTimelineEvent({layerId:Ar,event:{time:r(),title:"🛫 "+c,subtitle:"start",data:{store:qt(e.$id),action:qt(c),args:l},groupId:u}}),o(h=>{Zn=void 0,n.addTimelineEvent({layerId:Ar,event:{time:r(),title:"🛬 "+c,subtitle:"end",data:{store:qt(e.$id),action:qt(c),args:l,result:h},groupId:u}})}),a(h=>{Zn=void 0,n.addTimelineEvent({layerId:Ar,event:{time:r(),logType:"error",title:"💥 "+c,subtitle:"end",data:{store:qt(e.$id),action:qt(c),args:l,error:h},groupId:u}})})},!0),e._customProperties.forEach(o=>{nr(()=>De(e[o]),(a,c)=>{n.notifyComponentUpdate(),n.sendInspectorState(ct),ws&&n.addTimelineEvent({layerId:Ar,event:{time:r(),title:"Change",subtitle:o,data:{newValue:a,oldValue:c},groupId:Zn}})},{deep:!0})}),e.$subscribe(({events:o,type:a},c)=>{if(n.notifyComponentUpdate(),n.sendInspectorState(ct),!ws)return;const l={time:r(),title:_A(a),data:yA({store:qt(e.$id)},mA(o)),groupId:Zn};a===un.patchFunction?l.subtitle="⤵️":a===un.patchObject?l.subtitle="🧩":o&&!Array.isArray(o)&&(l.subtitle=o.type),o&&(l.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:o}}),n.addTimelineEvent({layerId:Ar,event:l})},{detached:!0,flush:"sync"});const s=e._hotUpdate;e._hotUpdate=Rn(o=>{s(o),n.addTimelineEvent({layerId:Ar,event:{time:r(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:qt(e.$id),info:qt("HMR update")}}}),n.notifyComponentUpdate(),n.sendInspectorTree(ct),n.sendInspectorState(ct)});const{$dispose:i}=e;e.$dispose=()=>{i(),n.notifyComponentUpdate(),n.sendInspectorTree(ct),n.sendInspectorState(ct),n.getSettings().logStoreChanges&&Xe(`Disposed "${e.$id}" store 🗑`)},n.notifyComponentUpdate(),n.sendInspectorTree(ct),n.sendInspectorState(ct),n.getSettings().logStoreChanges&&Xe(`"${e.$id}" store installed 🆕`)})}let Lm=0,Zn;function If(t,e,n){const r=e.reduce((s,i)=>(s[i]=Z(t)[i],s),{});for(const s in r)t[s]=function(){const i=Lm,o=n?new Proxy(t,{get(...c){return Zn=i,Reflect.get(...c)},set(...c){return Zn=i,Reflect.set(...c)}}):t;Zn=i;const a=r[s].apply(o,arguments);return Zn=void 0,a}}function EA({app:t,store:e,options:n}){if(e.$id.startsWith("__hot:"))return;e._isOptionsAPI=!!n.state,If(e,Object.keys(n.actions),e._isOptionsAPI);const r=e._hotUpdate;Z(e)._hotUpdate=function(s){r.apply(this,arguments),If(e,Object.keys(s._hmrPayload.actions),!!e._isOptionsAPI)},wA(t,e)}function IA(){const t=Pg(!0),e=t.run(()=>xe({}));let n=[],r=[];const s=Rn({install(i){Vi(s),s._a=i,i.provide(Cm,s),i.config.globalProperties.$pinia=s,Ra&&vA(i,s),r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!JT?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return Ra&&typeof Proxy<"u"&&s.use(EA),s}function Um(t,e){for(const n in e){const r=e[n];if(!(n in t))continue;const s=t[n];Kr(s)&&Kr(r)&&!Re(r)&&!zt(r)?t[n]=Um(s,r):t[n]=r}return t}const TA=()=>{};function Tf(t,e,n,r=TA){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Sg()&&nE(s),s}function fs(t,...e){t.slice().forEach(n=>{n(...e)})}const AA=t=>t();function Xl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Kr(s)&&Kr(r)&&t.hasOwnProperty(n)&&!Re(r)&&!zt(r)?t[n]=Xl(s,r):t[n]=r}return t}const bA=Symbol("pinia:skipHydration");function RA(t){return!Kr(t)||!t.hasOwnProperty(bA)}const{assign:Lt}=Object;function Af(t){return!!(Re(t)&&t.effect)}function bf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){!a&&!r&&(n.state.value[t]=s?s():{});const u=Kd(r?xe(s?s():{}).value:n.state.value[t]);return Lt(u,i,Object.keys(o||{}).reduce((h,d)=>(d in u&&console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${t}".`),h[d]=Rn($e(()=>{Vi(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Zl(t,l,e,n,r,!0),c}function Zl(t,e,n={},r,s,i){let o;const a=Lt({actions:{}},n);if(!r._e.active)throw new Error("Pinia destroyed");const c={deep:!0};c.onTrigger=F=>{l?p=F:l==!1&&!B._hotUpdating&&(Array.isArray(p)?p.push(F):console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let l,u,h=[],d=[],p;const _=r.state.value[t];!i&&!_&&!s&&(r.state.value[t]={});const I=xe({});let w;function b(F){let L;l=u=!1,p=[],typeof F=="function"?(F(r.state.value[t]),L={type:un.patchFunction,storeId:t,events:p}):(Xl(r.state.value[t],F),L={type:un.patchObject,payload:F,storeId:t,events:p});const ce=w=Symbol();wa().then(()=>{w===ce&&(l=!0)}),u=!0,fs(h,L,r.state.value[t])}const x=i?function(){const{state:L}=n,ce=L?L():{};this.$patch(ke=>{Lt(ke,ce)})}:()=>{throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`)};function k(){o.stop(),h=[],d=[],r._s.delete(t)}function K(F,L){return function(){Vi(r);const ce=Array.from(arguments),ke=[],Jt=[];function Rt(Y){ke.push(Y)}function Ge(Y){Jt.push(Y)}fs(d,{args:ce,name:F,store:B,after:Rt,onError:Ge});let re;try{re=L.apply(this&&this.$id===t?this:B,ce)}catch(Y){throw fs(Jt,Y),Y}return re instanceof Promise?re.then(Y=>(fs(ke,Y),Y)).catch(Y=>(fs(Jt,Y),Promise.reject(Y))):(fs(ke,re),re)}}const U=Rn({actions:{},getters:{},state:[],hotState:I}),ge={_p:r,$id:t,$onAction:Tf.bind(null,d),$patch:b,$reset:x,$subscribe(F,L={}){const ce=Tf(h,F,L.detached,()=>ke()),ke=o.run(()=>nr(()=>r.state.value[t],Jt=>{(L.flush==="sync"?u:l)&&F({storeId:t,type:un.direct,events:p},Jt)},Lt({},c,L)));return ce},$dispose:k},B=ro(Lt({_hmrPayload:U,_customProperties:Rn(new Set)},ge));r._s.set(t,B);const ze=r._a&&r._a.runWithContext||AA,Ee=r._e.run(()=>(o=Pg(),ze(()=>o.run(e))));for(const F in Ee){const L=Ee[F];if(Re(L)&&!Af(L)||zt(L))s?Vo(I.value,F,Qo(Ee,F)):i||(_&&RA(L)&&(Re(L)?L.value=_[F]:Xl(L,_[F])),r.state.value[t][F]=L),U.state.push(F);else if(typeof L=="function"){const ce=s?L:K(F,L);Ee[F]=ce,U.actions[F]=L,a.actions[F]=L}else Af(L)&&(U.getters[F]=i?n.getters[F]:L,dc&&(Ee._getters||(Ee._getters=Rn([]))).push(F))}if(Lt(B,Ee),Lt(Z(B),Ee),Object.defineProperty(B,"$state",{get:()=>s?I.value:r.state.value[t],set:F=>{if(s)throw new Error("cannot set hotState");b(L=>{Lt(L,F)})}}),B._hotUpdate=Rn(F=>{B._hotUpdating=!0,F._hmrPayload.state.forEach(L=>{if(L in B.$state){const ce=F.$state[L],ke=B.$state[L];typeof ce=="object"&&Kr(ce)&&Kr(ke)?Um(ce,ke):F.$state[L]=ke}Vo(B,L,Qo(F.$state,L))}),Object.keys(B.$state).forEach(L=>{L in F.$state||sl(B,L)}),l=!1,u=!1,r.state.value[t]=Qo(F._hmrPayload,"hotState"),u=!0,wa().then(()=>{l=!0});for(const L in F._hmrPayload.actions){const ce=F[L];Vo(B,L,K(L,ce))}for(const L in F._hmrPayload.getters){const ce=F._hmrPayload.getters[L],ke=i?$e(()=>(Vi(r),ce.call(B,B))):ce;Vo(B,L,ke)}Object.keys(B._hmrPayload.getters).forEach(L=>{L in F._hmrPayload.getters||sl(B,L)}),Object.keys(B._hmrPayload.actions).forEach(L=>{L in F._hmrPayload.actions||sl(B,L)}),B._hmrPayload=F._hmrPayload,B._getters=F._getters,B._hotUpdating=!1}),Ra){const F={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach(L=>{Object.defineProperty(B,L,Lt({value:B[L]},F))})}return r._p.forEach(F=>{if(Ra){const L=o.run(()=>F({store:B,app:r._a,pinia:r,options:a}));Object.keys(L||{}).forEach(ce=>B._customProperties.add(ce)),Lt(B,L)}else Lt(B,o.run(()=>F({store:B,app:r._a,pinia:r,options:a})))}),B.$state&&typeof B.$state=="object"&&typeof B.$state.constructor=="function"&&!B.$state.constructor.toString().includes("[native code]")&&console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${B.$id}".`),_&&i&&n.hydrate&&n.hydrate(B.$state,_),l=!0,u=!0,B}function dh(t,e,n){let r,s;const i=typeof e=="function";if(typeof t=="string")r=t,s=i?n:e;else if(s=t,r=t.id,typeof r!="string")throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');function o(a,c){const l=jI();if(a=a||(l?ln(Cm,null):null),a&&Vi(a),!Yl)throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);a=Yl,a._s.has(r)||(i?Zl(r,e,s,a):bf(r,s,a),o._pinia=a);const u=a._s.get(r);if(c){const h="__hot:"+r,d=i?Zl(h,e,s,a,!0):bf(h,Lt({},s),a,!0);c._hotUpdate(d),delete a.state.value[h],a._s.delete(h)}if(dc){const h=ih();if(h&&h.proxy&&!c){const d=h.proxy,p="_pStores"in d?d._pStores:d._pStores={};p[r]=u}}return u}return o.$id=r,o}function Fm(t){{t=Z(t);const e={};for(const n in t){const r=t[n];(Re(r)||zt(r))&&(e[n]=Qo(t,n))}return e}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const An=typeof window<"u";function PA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function il(t,e){const n={};for(const r in e){const s=e[r];n[r]=Nt(s)?s.map(t):t(s)}return n}const yi=()=>{},Nt=Array.isArray;function pe(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const SA=/\/$/,CA=t=>t.replace(SA,"");function ol(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=xA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function kA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Pf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ur(e.matched[r],n.matched[s])&&$m(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $m(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!OA(t[n],e[n]))return!1;return!0}function OA(t,e){return Nt(t)?Sf(t,e):Nt(e)?Sf(e,t):t===e}function Sf(t,e){return Nt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function xA(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return pe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Mi;(function(t){t.pop="pop",t.push="push"})(Mi||(Mi={}));var vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vi||(vi={}));function NA(t){if(!t)if(An){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),CA(t)}const DA=/^[^#]+#/;function VA(t,e){return t.replace(DA,"#")+e}function MA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fc=()=>({left:window.pageXOffset,top:window.pageYOffset});function LA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){pe(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{pe(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){pe(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=MA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cf(t,e){return(history.state?history.state.position-e:-1)+t}const eu=new Map;function UA(t,e){eu.set(t,e)}function FA(t){const e=eu.get(t);return eu.delete(t),e}let $A=()=>location.protocol+"//"+location.host;function jm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Rf(c,"")}return Rf(n,t)+r+s}function jA(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=jm(t,location),_=n.value,I=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}w=I?d.position-I.position:0}else r(p);s.forEach(b=>{b(n.value,_,{delta:w,type:Mi.pop,direction:w?w>0?vi.forward:vi.back:vi.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ye({},d.state,{scroll:fc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function kf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fc():null}}function BA(t){const{history:e,location:n}=window,r={value:jm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:$A()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){pe("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ye({},e.state,kf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ye({},s.value,e.state,{forward:c,scroll:fc()});e.state||pe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=ye({},kf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function qA(t){t=NA(t);const e=BA(t),n=jA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ye({location:"",base:t,go:r,createHref:VA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function HA(t){return typeof t=="string"||t&&typeof t=="object"}function Bm(t){return typeof t=="string"||typeof t=="symbol"}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qm=Symbol("navigation failure");var Of;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Of||(Of={}));const WA={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${zA(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function xs(t,e){return ye(new Error(WA[t](e)),{type:t,[qm]:!0},e)}function En(t,e){return t instanceof Error&&qm in t&&(e==null||!!(t.type&e))}const KA=["params","query","hash"];function zA(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of KA)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const xf="[^/]+?",GA={sensitive:!1,strict:!1,start:!0,end:!0},QA=/[.+*?^${}()[\]/\\]/g;function YA(t,e){const n=ye({},GA,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(QA,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:I,optional:w,regexp:b}=d;i.push({name:_,repeatable:I,optional:w});const x=b||xf;if(x!==xf){p+=10;try{new RegExp(`(${x})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+K.message)}}let k=I?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(k=w&&l.length<2?`(?:/${k})`:"/"+k),w&&(k+="?"),s+=k,p+=20,w&&(p+=-8),I&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:I,optional:w}=p,b=_ in l?l[_]:"";if(Nt(b)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=Nt(b)?b.join("/"):b;if(!x)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function JA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function XA(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=JA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Nf(r))return 1;if(Nf(s))return-1}return s.length-r.length}function Nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ZA={type:0,value:""},eb=/[a-zA-Z0-9_]/;function tb(t){if(!t)return[[]];if(t==="/")return[[ZA]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:eb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function nb(t,e,n){const r=YA(tb(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&pe(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function rb(t,e){const n=[],r=new Map;e=Mf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,_=sb(u);cb(_,h),_.aliasOf=d&&d.record;const I=Mf(e,u),w=[_];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of k)w.push(ye({},_,{components:d?d.record.components:_.components,path:K,aliasOf:d?d.record:_}))}let b,x;for(const k of w){const{path:K}=k;if(h&&K[0]!=="/"){const U=h.record.path,ge=U[U.length-1]==="/"?"":"/";k.path=h.record.path+(K&&ge+K)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(b=nb(k,h,I),h&&K[0]==="/"&&lb(b,h),d?(d.alias.push(b),ab(d,b)):(x=x||b,x!==b&&x.alias.push(b),p&&u.name&&!Vf(b)&&o(u.name)),_.children){const U=_.children;for(let ge=0;ge<U.length;ge++)i(U[ge],b,d&&d.children[ge])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return x?()=>{o(x)}:yi}function o(u){if(Bm(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&XA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Hm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Vf(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},_,I;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw xs(1,{location:u});{const x=Object.keys(u.params||{}).filter(k=>!d.keys.find(K=>K.name===k));x.length&&pe(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}I=d.record.name,p=ye(Df(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Df(u.params,d.keys.map(x=>x.name))),_=d.stringify(p)}else if("path"in u)_=u.path,_.startsWith("/")||pe(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(x=>x.re.test(_)),d&&(p=d.parse(_),I=d.record.name);else{if(d=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw xs(1,{location:u,currentLocation:h});I=d.record.name,p=ye({},h.params,u.params),_=d.stringify(p)}const w=[];let b=d;for(;b;)w.unshift(b.record),b=b.parent;return{name:I,path:_,params:p,matched:w,meta:ob(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Df(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function sb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ib(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ib(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ob(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Mf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function tu(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function ab(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(tu.bind(null,n)))return pe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(tu.bind(null,n)))return pe(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function cb(t,e){e&&e.record.name&&!t.name&&!t.path&&pe(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function lb(t,e){for(const n of e.keys)if(!t.keys.find(tu.bind(null,n)))return pe(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Hm(t,e){return e.children.some(n=>n===t||Hm(t,n))}const Wm=/#/g,ub=/&/g,hb=/\//g,db=/=/g,fb=/\?/g,Km=/\+/g,pb=/%5B/g,gb=/%5D/g,zm=/%5E/g,mb=/%60/g,Gm=/%7B/g,_b=/%7C/g,Qm=/%7D/g,yb=/%20/g;function fh(t){return encodeURI(""+t).replace(_b,"|").replace(pb,"[").replace(gb,"]")}function vb(t){return fh(t).replace(Gm,"{").replace(Qm,"}").replace(zm,"^")}function nu(t){return fh(t).replace(Km,"%2B").replace(yb,"+").replace(Wm,"%23").replace(ub,"%26").replace(mb,"`").replace(Gm,"{").replace(Qm,"}").replace(zm,"^")}function wb(t){return nu(t).replace(db,"%3D")}function Eb(t){return fh(t).replace(Wm,"%23").replace(fb,"%3F")}function Ib(t){return t==null?"":Eb(t).replace(hb,"%2F")}function Li(t){try{return decodeURIComponent(""+t)}catch{pe(`Error decoding "${t}". Using original value`)}return""+t}function Tb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Km," "),o=i.indexOf("="),a=Li(o<0?i:i.slice(0,o)),c=o<0?null:Li(i.slice(o+1));if(a in e){let l=e[a];Nt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Lf(t){let e="";for(let n in t){const r=t[n];if(n=wb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Nt(r)?r.map(i=>i&&nu(i)):[r&&nu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ab(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Nt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const bb=Symbol("router view location matched"),Uf=Symbol("router view depth"),ph=Symbol("router"),Ym=Symbol("route location"),ru=Symbol("router view location");function ei(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(xs(4,{from:n,to:e})):h instanceof Error?a(h):HA(h)?a(xs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,Rb(c,e,n));let u=Promise.resolve(l);if(t.length<3&&(u=u.then(c)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof l=="object"&&"then"in l)u=u.then(d=>c._called?d:(pe(h),Promise.reject(new Error("Invalid navigation guard"))));else if(l!==void 0&&!c._called){pe(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function Rb(t,e,n){let r=0;return function(){r++===1&&pe(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function al(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&pe(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw pe(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){pe(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,pe(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Pb(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Wn(l,n,r,i,o))}else{let c=a();"catch"in c||(pe(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=PA(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Wn(d,n,r,i,o)()}))}}}return s}function Pb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ff(t){const e=ln(ph),n=ln(Ym),r=$e(()=>e.resolve(De(t.to))),s=$e(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ur.bind(null,u));if(d>-1)return d;const p=$f(c[l-2]);return l>1&&$f(u)===p&&h[h.length-1].path!==p?h.findIndex(ur.bind(null,c[l-2])):d}),i=$e(()=>s.value>-1&&kb(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&$m(n.params,r.value.params));function a(c={}){return Cb(c)?e[De(t.replace)?"replace":"push"](De(t.to)).catch(yi):Promise.resolve()}if(An){const c=ih();if(c){const l={route:r.value,isActive:i.value,isExactActive:o.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(l),fI(()=>{l.route=r.value,l.isActive=i.value,l.isExactActive=o.value},{flush:"post"})}}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Sb=tt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ff,setup(t,{slots:e}){const n=ro(Ff(t)),{options:r}=ln(ph),s=$e(()=>({[jf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gh=Sb;function Cb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Nt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jf=(t,e,n)=>t??e??n,Ob=tt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){xb();const r=ln(ru),s=$e(()=>t.route||r.value),i=ln(Uf,0),o=$e(()=>{let l=De(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=$e(()=>s.value.matched[o.value]);Zo(Uf,$e(()=>o.value+1)),Zo(bb,a),Zo(ru,s);const c=xe();return nr(()=>[c.value,a.value,t.name],([l,u,h],[d,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!ur(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Bf(n.default,{Component:d,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=Pm(d,ye({},_,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));if(An&&w.ref){const b={depth:o.value,name:h.name,path:h.path,meta:h.meta};(Nt(w.ref)?w.ref.map(k=>k.i):[w.ref.i]).forEach(k=>{k.__vrv_devtools=b})}return Bf(n.default,{Component:w,route:l})||w}}});function Bf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jm=Ob;function xb(){const t=ih(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";pe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function ti(t,e){const n=ye({},t,{matched:t.matched.map(r=>jb(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Mo(t){return{_custom:{display:t}}}let Nb=0;function Db(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=Nb++;lh({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:ti(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Xm})}Nt(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(d=>{let p=t_,_="";d.isExactActive?(p=e_,_="This is exactly active"):d.isActive&&(p=Zm,_="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:_,backgroundColor:p})}))}),nr(e.currentRoute,()=>{c(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:Mo("beforeEach"),from:ti(h,"Current Location during this navigation"),to:ti(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:Mo("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=Mo("❌")):p.status=Mo("✅"),p.from=ti(h,"Current Location during this navigation"),p.to=ti(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!l)return;const u=l;let h=n.getRoutes().filter(d=>!d.parent);h.forEach(s_),u.filter&&(h=h.filter(d=>su(d,u.filter.toLowerCase()))),h.forEach(d=>r_(d,e.currentRoute.value)),u.rootNodes=h.map(n_)}let l;s.on.getInspectorTree(u=>{l=u,u.app===t&&u.inspectorId===a&&c()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:Mb(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function Vb(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function Mb(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${Vb(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Xm=15485081,Zm=2450411,e_=8702998,Lb=2282478,t_=16486972,Ub=6710886;function n_(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:Lb}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:t_}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Xm}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:e_}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Zm}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Ub});let r=n.__vd_id;return r==null&&(r=String(Fb++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(n_)}}let Fb=0;const $b=/^\/(.*)\/([a-z]*)$/;function r_(t,e){const n=e.matched.length&&ur(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>ur(r,t.record))),t.children.forEach(r=>r_(r,e))}function s_(t){t.__vd_match=!1,t.children.forEach(s_)}function su(t,e){const n=String(t.re).match($b);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>su(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=Li(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>su(o,e))}function jb(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function Bb(t){const e=rb(t.routes,t),n=t.parseQuery||Tb,r=t.stringifyQuery||Lf,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=ei(),o=ei(),a=ei(),c=OE(jn);let l=jn;An&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=il.bind(null,y=>""+y),h=il.bind(null,Ib),d=il.bind(null,Li);function p(y,V){let M,j;return Bm(y)?(M=e.getRecordMatcher(y),j=V):j=y,e.addRoute(j,M)}function _(y){const V=e.getRecordMatcher(y);V?e.removeRoute(V):pe(`Cannot remove non-existent route "${String(y)}"`)}function I(){return e.getRoutes().map(y=>y.record)}function w(y){return!!e.getRecordMatcher(y)}function b(y,V){if(V=ye({},V||c.value),typeof y=="string"){const g=ol(n,y,V.path),m=e.resolve({path:g.path},V),E=s.createHref(g.fullPath);return E.startsWith("//")?pe(`Location "${y}" resolved to "${E}". A resolved location cannot start with multiple slashes.`):m.matched.length||pe(`No match found for location with path "${y}"`),ye(g,m,{params:d(m.params),hash:Li(g.hash),redirectedFrom:void 0,href:E})}let M;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&pe(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),M=ye({},y,{path:ol(n,y.path,V.path).path});else{const g=ye({},y.params);for(const m in g)g[m]==null&&delete g[m];M=ye({},y,{params:h(g)}),V.params=h(V.params)}const j=e.resolve(M,V),de=y.hash||"";de&&!de.startsWith("#")&&pe(`A \`hash\` should always start with the character "#". Replace "${de}" with "#${de}".`),j.params=u(d(j.params));const Oe=kA(r,ye({},y,{hash:vb(de),path:j.path})),f=s.createHref(Oe);return f.startsWith("//")?pe(`Location "${y}" resolved to "${f}". A resolved location cannot start with multiple slashes.`):j.matched.length||pe(`No match found for location with path "${"path"in y?y.path:y}"`),ye({fullPath:Oe,hash:de,query:r===Lf?Ab(y.query):y.query||{}},j,{redirectedFrom:void 0,href:f})}function x(y){return typeof y=="string"?ol(n,y,c.value.path):ye({},y)}function k(y,V){if(l!==y)return xs(8,{from:V,to:y})}function K(y){return B(y)}function U(y){return K(ye(x(y),{replace:!0}))}function ge(y){const V=y.matched[y.matched.length-1];if(V&&V.redirect){const{redirect:M}=V;let j=typeof M=="function"?M(y):M;if(typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=x(j):{path:j},j.params={}),!("path"in j)&&!("name"in j))throw pe(`Invalid redirect found:
${JSON.stringify(j,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ye({query:y.query,hash:y.hash,params:"path"in j?{}:y.params},j)}}function B(y,V){const M=l=b(y),j=c.value,de=y.state,Oe=y.force,f=y.replace===!0,g=ge(M);if(g)return B(ye(x(g),{state:typeof g=="object"?ye({},de,g.state):de,force:Oe,replace:f}),V||M);const m=M;m.redirectedFrom=V;let E;return!Oe&&Pf(r,j,M)&&(E=xs(16,{to:m,from:j}),Ln(j,j,!0,!1)),(E?Promise.resolve(E):F(m,j)).catch(v=>En(v)?En(v,2)?v:wr(v):Y(v,m,j)).then(v=>{if(v){if(En(v,2))return Pf(r,b(v.to),m)&&V&&(V._count=V._count?V._count+1:1)>30?(pe(`Detected a possibly infinite redirection in a navigation guard when going from "${j.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(ye({replace:f},x(v.to),{state:typeof v.to=="object"?ye({},de,v.to.state):de,force:Oe}),V||m)}else v=ce(m,j,!0,f,de);return L(m,j,v),v})}function ze(y,V){const M=k(y,V);return M?Promise.reject(M):Promise.resolve()}function Ee(y){const V=Un.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(y):y()}function F(y,V){let M;const[j,de,Oe]=qb(y,V);M=al(j.reverse(),"beforeRouteLeave",y,V);for(const g of j)g.leaveGuards.forEach(m=>{M.push(Wn(m,y,V))});const f=ze.bind(null,y,V);return M.push(f),Fn(M).then(()=>{M=[];for(const g of i.list())M.push(Wn(g,y,V));return M.push(f),Fn(M)}).then(()=>{M=al(de,"beforeRouteUpdate",y,V);for(const g of de)g.updateGuards.forEach(m=>{M.push(Wn(m,y,V))});return M.push(f),Fn(M)}).then(()=>{M=[];for(const g of Oe)if(g.beforeEnter)if(Nt(g.beforeEnter))for(const m of g.beforeEnter)M.push(Wn(m,y,V));else M.push(Wn(g.beforeEnter,y,V));return M.push(f),Fn(M)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),M=al(Oe,"beforeRouteEnter",y,V),M.push(f),Fn(M))).then(()=>{M=[];for(const g of o.list())M.push(Wn(g,y,V));return M.push(f),Fn(M)}).catch(g=>En(g,8)?g:Promise.reject(g))}function L(y,V,M){a.list().forEach(j=>Ee(()=>j(y,V,M)))}function ce(y,V,M,j,de){const Oe=k(y,V);if(Oe)return Oe;const f=V===jn,g=An?history.state:{};M&&(j||f?s.replace(y.fullPath,ye({scroll:f&&g&&g.scroll},de)):s.push(y.fullPath,de)),c.value=y,Ln(y,V,M,f),wr()}let ke;function Jt(){ke||(ke=s.listen((y,V,M)=>{if(!So.listening)return;const j=b(y),de=ge(j);if(de){B(ye(de,{replace:!0}),j).catch(yi);return}l=j;const Oe=c.value;An&&UA(Cf(Oe.fullPath,M.delta),fc()),F(j,Oe).catch(f=>En(f,12)?f:En(f,2)?(B(f.to,j).then(g=>{En(g,20)&&!M.delta&&M.type===Mi.pop&&s.go(-1,!1)}).catch(yi),Promise.reject()):(M.delta&&s.go(-M.delta,!1),Y(f,j,Oe))).then(f=>{f=f||ce(j,Oe,!1),f&&(M.delta&&!En(f,8)?s.go(-M.delta,!1):M.type===Mi.pop&&En(f,20)&&s.go(-1,!1)),L(j,Oe,f)}).catch(yi)}))}let Rt=ei(),Ge=ei(),re;function Y(y,V,M){wr(y);const j=Ge.list();return j.length?j.forEach(de=>de(y,V,M)):(pe("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function Vt(){return re&&c.value!==jn?Promise.resolve():new Promise((y,V)=>{Rt.add([y,V])})}function wr(y){return re||(re=!y,Jt(),Rt.list().forEach(([V,M])=>y?M(y):V()),Rt.reset()),y}function Ln(y,V,M,j){const{scrollBehavior:de}=t;if(!An||!de)return Promise.resolve();const Oe=!M&&FA(Cf(y.fullPath,0))||(j||!M)&&history.state&&history.state.scroll||null;return wa().then(()=>de(y,V,Oe)).then(f=>f&&LA(f)).catch(f=>Y(f,y,V))}const Xt=y=>s.go(y);let Mt;const Un=new Set,So={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:w,getRoutes:I,resolve:b,options:t,push:K,replace:U,go:Xt,back:()=>Xt(-1),forward:()=>Xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ge.add,isReady:Vt,install(y){const V=this;y.component("RouterLink",gh),y.component("RouterView",Jm),y.config.globalProperties.$router=V,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>De(c)}),An&&!Mt&&c.value===jn&&(Mt=!0,K(s.location).catch(de=>{pe("Unexpected error when starting the router:",de)}));const M={};for(const de in jn)Object.defineProperty(M,de,{get:()=>c.value[de],enumerable:!0});y.provide(ph,V),y.provide(Ym,Bg(M)),y.provide(ru,c);const j=y.unmount;Un.add(y),y.unmount=function(){Un.delete(y),Un.size<1&&(l=jn,ke&&ke(),ke=null,c.value=jn,Mt=!1,re=!1),j()},An&&Db(y,V,e)}};function Fn(y){return y.reduce((V,M)=>V.then(()=>Ee(M)),Promise.resolve())}return So}function qb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ur(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ur(l,c))||s.push(c))}return[n,r,s]}/**
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
 */const i_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Hb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},o_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Wb;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kb=function(t){const e=i_(t);return o_.encodeByteArray(e,!0)},Sa=function(t){return Kb(t).replace(/\./g,"")},a_=function(t){try{return o_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gb=()=>zb().__FIREBASE_DEFAULTS__,Qb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&a_(t[1]);return e&&JSON.parse(e)},pc=()=>{try{return Gb()||Qb()||Yb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c_=t=>{var e,n;return(n=(e=pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},l_=t=>{const e=c_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},u_=()=>{var t;return(t=pc())===null||t===void 0?void 0:t.config},h_=t=>{var e;return(e=pc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Jb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function d_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sa(JSON.stringify(n)),Sa(JSON.stringify(o)),a].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Zb(){var t;const e=(t=pc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n0(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function r0(){try{return typeof indexedDB=="object"}catch{return!1}}function s0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const i0="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=i0,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?o0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function o0(t,e){return t.replace(a0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const a0=/\{\$([^}]+)}/g;function c0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ca(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qf(i)&&qf(o)){if(!Ca(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qf(t){return t!==null&&typeof t=="object"}/**
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
 */function ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function l0(t,e){const n=new u0(t,e);return n.subscribe.bind(n)}class u0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");h0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cl),s.error===void 0&&(s.error=cl),s.complete===void 0&&(s.complete=cl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function h0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cl(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const br="[DEFAULT]";/**
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
 */class d0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(p0(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:f0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function f0(t){return t===br?void 0:t}function p0(t){return t.instantiationMode==="EAGER"}/**
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
 */class g0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new d0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const m0={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},_0=me.INFO,y0={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},v0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=y0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mh{constructor(e){this.name=e,this._logLevel=_0,this._logHandler=v0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const w0=(t,e)=>e.some(n=>t instanceof n);let Hf,Wf;function E0(){return Hf||(Hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I0(){return Wf||(Wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f_=new WeakMap,iu=new WeakMap,p_=new WeakMap,ll=new WeakMap,_h=new WeakMap;function T0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&f_.set(n,t)}).catch(()=>{}),_h.set(e,t),e}function A0(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let ou={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||p_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function b0(t){ou=t(ou)}function R0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ul(this),e,...n);return p_.set(r,e.sort?e.sort():[e]),rr(r)}:I0().includes(t)?function(...e){return t.apply(ul(this),e),rr(f_.get(this))}:function(...e){return rr(t.apply(ul(this),e))}}function P0(t){return typeof t=="function"?R0(t):(t instanceof IDBTransaction&&A0(t),w0(t,E0())?new Proxy(t,ou):t)}function rr(t){if(t instanceof IDBRequest)return T0(t);if(ll.has(t))return ll.get(t);const e=P0(t);return e!==t&&(ll.set(t,e),_h.set(e,t)),e}const ul=t=>_h.get(t);function S0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=rr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(rr(o.result),c.oldVersion,c.newVersion,rr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const C0=["get","getKey","getAll","getAllKeys","count"],k0=["put","add","delete","clear"],hl=new Map;function Kf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hl.get(e))return hl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=k0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||C0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return hl.set(e,i),i}b0(t=>({...t,get:(e,n,r)=>Kf(e,n)||t.get(e,n,r),has:(e,n)=>!!Kf(e,n)||t.has(e,n)}));/**
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
 */class O0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(x0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function x0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const au="@firebase/app",zf="0.9.17";/**
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
 */const zr=new mh("@firebase/app"),N0="@firebase/app-compat",D0="@firebase/analytics-compat",V0="@firebase/analytics",M0="@firebase/app-check-compat",L0="@firebase/app-check",U0="@firebase/auth",F0="@firebase/auth-compat",$0="@firebase/database",j0="@firebase/database-compat",B0="@firebase/functions",q0="@firebase/functions-compat",H0="@firebase/installations",W0="@firebase/installations-compat",K0="@firebase/messaging",z0="@firebase/messaging-compat",G0="@firebase/performance",Q0="@firebase/performance-compat",Y0="@firebase/remote-config",J0="@firebase/remote-config-compat",X0="@firebase/storage",Z0="@firebase/storage-compat",eR="@firebase/firestore",tR="@firebase/firestore-compat",nR="firebase",rR="10.3.0";/**
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
 */const cu="[DEFAULT]",sR={[au]:"fire-core",[N0]:"fire-core-compat",[V0]:"fire-analytics",[D0]:"fire-analytics-compat",[L0]:"fire-app-check",[M0]:"fire-app-check-compat",[U0]:"fire-auth",[F0]:"fire-auth-compat",[$0]:"fire-rtdb",[j0]:"fire-rtdb-compat",[B0]:"fire-fn",[q0]:"fire-fn-compat",[H0]:"fire-iid",[W0]:"fire-iid-compat",[K0]:"fire-fcm",[z0]:"fire-fcm-compat",[G0]:"fire-perf",[Q0]:"fire-perf-compat",[Y0]:"fire-rc",[J0]:"fire-rc-compat",[X0]:"fire-gcs",[Z0]:"fire-gcs-compat",[eR]:"fire-fst",[tR]:"fire-fst-compat","fire-js":"fire-js",[nR]:"fire-js-all"};/**
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
 */const ka=new Map,lu=new Map;function iR(t,e){try{t.container.addComponent(e)}catch(n){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(lu.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;lu.set(e,t);for(const n of ka.values())iR(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const oR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new oo("app","Firebase",oR);/**
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
 */class aR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const ss=rR;function g_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sr.create("bad-app-name",{appName:String(s)});if(n||(n=u_()),!n)throw sr.create("no-options");const i=ka.get(s);if(i){if(Ca(n,i.options)&&Ca(r,i.config))return i;throw sr.create("duplicate-app",{appName:s})}const o=new g0(s);for(const c of lu.values())o.addComponent(c);const a=new aR(n,r,o);return ka.set(s,a),a}function yh(t=cu){const e=ka.get(t);if(!e&&t===cu&&u_())return g_();if(!e)throw sr.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let s=(r=sR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(a.join(" "));return}Gr(new hr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const cR="firebase-heartbeat-database",lR=1,Ui="firebase-heartbeat-store";let dl=null;function m_(){return dl||(dl=S0(cR,lR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),dl}async function uR(t){try{return await(await m_()).transaction(Ui).objectStore(Ui).get(__(t))}catch(e){if(e instanceof vn)zr.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zr.warn(n.message)}}}async function Gf(t,e){try{const r=(await m_()).transaction(Ui,"readwrite");await r.objectStore(Ui).put(e,__(t)),await r.done}catch(n){if(n instanceof vn)zr.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zr.warn(r.message)}}}function __(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hR=1024,dR=30*24*60*60*1e3;class fR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=dR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qf(),{heartbeatsToSend:n,unsentEntries:r}=pR(this._heartbeatsCache.heartbeats),s=Sa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Qf(){return new Date().toISOString().substring(0,10)}function pR(t,e=hR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return r0()?s0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yf(t){return Sa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mR(t){Gr(new hr("platform-logger",e=>new O0(e),"PRIVATE")),Gr(new hr("heartbeat",e=>new fR(e),"PRIVATE")),hn(au,zf,t),hn(au,zf,"esm2017"),hn("fire-js","")}mR("");var _R="firebase",yR="10.3.0";/**
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
 */hn(_R,yR,"app");function vh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Jf(t){return t!==void 0&&t.enterprise!==void 0}class vR{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wR=y_,v_=new oo("auth","Firebase",y_());/**
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
 */const Oa=new mh("@firebase/auth");function ER(t,...e){Oa.logLevel<=me.WARN&&Oa.warn(`Auth (${ss}): ${t}`,...e)}function ia(t,...e){Oa.logLevel<=me.ERROR&&Oa.error(`Auth (${ss}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw wh(t,...e)}function dn(t,...e){return wh(t,...e)}function w_(t,e,n){const r=Object.assign(Object.assign({},wR()),{[e]:n});return new oo("auth","Firebase",r).create(e,{appName:t.name})}function IR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),w_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return v_.create(t,...e)}function ee(t,e,...n){if(!t)throw wh(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ia(e),new Error(e)}function On(t,e){t||Pn(e)}/**
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
 */function uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TR(){return Xf()==="http:"||Xf()==="https:"}function Xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function AR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TR()||e0()||"connection"in navigator)?navigator.onLine:!0}function bR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class co{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Xb()||t0()}get(){return AR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eh(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class E_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PR=new co(3e4,6e4);function is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mr(t,e,n,r,s={}){return I_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ao(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),E_.fetch()(T_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function I_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RR),e);try{const s=new SR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Lo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Lo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Lo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw w_(t,u,l);jt(t,u)}}catch(s){if(s instanceof vn)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function lo(t,e,n,r,s={}){const i=await mr(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function T_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Eh(t.config,s):`${t.config.apiScheme}://${s}`}class SR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),PR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}async function CR(t,e){return mr(t,"GET","/v2/recaptchaConfig",is(t,e))}/**
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
 */async function kR(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function OR(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xR(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Ih(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wi(fl(s.auth_time)),issuedAtTime:wi(fl(s.iat)),expirationTime:wi(fl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fl(t){return Number(t)*1e3}function Ih(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const s=a_(n);return s?JSON.parse(s):(ia("Failed to decode base64 JWT payload"),null)}catch(s){return ia("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function NR(t){const e=Ih(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&DR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class A_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ns(t,OR(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?UR(i.providerUserInfo):[],a=LR(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new A_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function MR(t){const e=Ye(t);await xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function UR(t){return t.map(e=>{var{providerId:n}=e,r=vh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FR(t,e){const n=await I_(t,{},async()=>{const r=ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=T_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",E_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):NR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fi;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Bn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ur{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new A_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xR(this,e)}reload(){return MR(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ns(this,kR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:K,isAnonymous:U,providerData:ge,stsTokenManager:B}=n;ee(k&&B,e,"internal-error");const ze=Fi.fromJSON(this.name,B);ee(typeof k=="string",e,"internal-error"),Bn(h,e.name),Bn(d,e.name),ee(typeof K=="boolean",e,"internal-error"),ee(typeof U=="boolean",e,"internal-error"),Bn(p,e.name),Bn(_,e.name),Bn(I,e.name),Bn(w,e.name),Bn(b,e.name),Bn(x,e.name);const Ee=new Ur({uid:k,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:U,photoURL:_,phoneNumber:p,tenantId:I,stsTokenManager:ze,createdAt:b,lastLoginAt:x});return ge&&Array.isArray(ge)&&(Ee.providerData=ge.map(F=>Object.assign({},F))),w&&(Ee._redirectEventId=w),Ee}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fi;s.updateFromServerResponse(n);const i=new Ur({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xa(i),i}}/**
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
 */const Zf=new Map;function Sn(t){On(t instanceof Function,"Expected a class definition");let e=Zf.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zf.set(t,e),e)}/**
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
 */class b_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}b_.type="NONE";const ep=b_;/**
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
 */function oa(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=oa(this.userKey,s.apiKey,i),this.fullPersistenceKey=oa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(Sn(ep),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Sn(ep);const o=oa(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ur._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new As(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new As(i,e,r))}}/**
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
 */function tp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k_(e))return"Blackberry";if(O_(e))return"Webos";if(Th(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(C_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function R_(t=yt()){return/firefox\//i.test(t)}function Th(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(t=yt()){return/crios\//i.test(t)}function S_(t=yt()){return/iemobile/i.test(t)}function C_(t=yt()){return/android/i.test(t)}function k_(t=yt()){return/blackberry/i.test(t)}function O_(t=yt()){return/webos/i.test(t)}function mc(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $R(t=yt()){var e;return mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jR(){return n0()&&document.documentMode===10}function x_(t=yt()){return mc(t)||C_(t)||O_(t)||k_(t)||/windows phone/i.test(t)||S_(t)}function BR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function N_(t,e=[]){let n;switch(t){case"Browser":n=tp(yt());break;case"Worker":n=`${tp(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
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
 */class qR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HR(t,e={}){return mr(t,"GET","/v2/passwordPolicy",is(t,e))}/**
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
 */const WR=6;class KR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class zR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new np(this),this.idTokenSubscription=new np(this),this.beforeStateQueue=new qR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HR(this),n=new KR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=N_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ER(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _r(t){return Ye(t)}class np{constructor(e){this.auth=e,this.observer=null,this.addObserver=l0(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function GR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function D_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",GR().appendChild(r)})}function QR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const YR="https://www.google.com/recaptcha/enterprise.js?render=",JR="recaptcha-enterprise",XR="NO_RECAPTCHA";class ZR{constructor(e){this.type=JR,this.auth=_r(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{CR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new vR(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Jf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(XR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Jf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}D_(YR+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Na(t,e,n,r=!1){const s=new ZR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function eP(t,e){const n=gc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ca(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function tP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nP(t,e,n){const r=_r(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=V_(e),{host:o,port:a}=rP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||sP()}function V_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rP(t){const e=V_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:rp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:rp(o)}}}function rp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ah{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function iP(t,e){return mr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pl(t,e){return lo(t,"POST","/v1/accounts:signInWithPassword",is(t,e))}/**
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
 */async function oP(t,e){return lo(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}async function aP(t,e){return lo(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}/**
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
 */class $i extends Ah{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Na(e,r,"signInWithPassword");return pl(e,s)}else return pl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Na(e,r,"signInWithPassword");return pl(e,i)}else return Promise.reject(s)});case"emailLink":return oP(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return iP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aP(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bs(t,e){return lo(t,"POST","/v1/accounts:signInWithIdp",is(t,e))}/**
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
 */const cP="http://localhost";class Qr extends Ah{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=vh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:cP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ao(n)}return e}}/**
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
 */function lP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uP(t){const e=li(ui(t)).link,n=e?li(ui(e)).deep_link_id:null,r=li(ui(t)).deep_link_id;return(r?li(ui(r)).link:null)||r||n||e||t}class bh{constructor(e){var n,r,s,i,o,a;const c=li(ui(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=lP((s=c.mode)!==null&&s!==void 0?s:null);ee(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uP(e);try{return new bh(n)}catch{return null}}}/**
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
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return $i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bh.parseLink(n);return ee(r,"argument-error"),$i._fromEmailAndCode(e,r.code,r.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uo extends Rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zn extends uo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
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
 */class bn extends uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class Gn extends uo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Qn extends uo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */async function gl(t,e){return lo(t,"POST","/v1/accounts:signUp",is(t,e))}/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ur._fromIdTokenResponse(e,r,s),o=sp(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=sp(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function sp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Da extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Da(e,n,r,s)}}function M_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(t,i,e,r):i})}async function hP(t,e,n=!1){const r=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
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
 */async function dP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ns(t,M_(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=Ih(i.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
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
 */async function L_(t,e,n=!1){const r="signIn",s=await M_(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function fP(t,e){return L_(_r(t),e)}/**
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
 */async function U_(t){const e=_r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pP(t,e,n){var r;const s=_r(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Na(s,i,"signUpPassword");o=gl(s,l)}else o=gl(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Na(s,i,"signUpPassword");return gl(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&U_(t),l}),c=await Yr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function gP(t,e,n){return fP(Ye(t),Bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&U_(t),r})}/**
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
 */async function mP(t,e){return mr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function F_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ns(r,mP(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _P(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function yP(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}const Va="__sak";/**
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
 */class $_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Va,"1"),this.storage.removeItem(Va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vP(){const t=yt();return Th(t)||mc(t)}const wP=1e3,EP=10;class j_ extends $_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vP()&&BR(),this.fallbackToPolling=x_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}j_.type="LOCAL";const IP=j_;/**
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
 */class B_ extends $_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}B_.type="SESSION";const q_=B_;/**
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
 */function TP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await TP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
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
 */function Ph(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class AP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ph("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fn(){return window}function bP(t){fn().location.href=t}/**
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
 */function H_(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function RP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SP(){return H_()?self:null}/**
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
 */const W_="firebaseLocalStorageDb",CP=1,Ma="firebaseLocalStorage",K_="fbase_key";class ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yc(t,e){return t.transaction([Ma],e?"readwrite":"readonly").objectStore(Ma)}function kP(){const t=indexedDB.deleteDatabase(W_);return new ho(t).toPromise()}function hu(){const t=indexedDB.open(W_,CP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ma,{keyPath:K_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ma)?e(r):(r.close(),await kP(),e(await hu()))})})}async function ip(t,e,n){const r=yc(t,!0).put({[K_]:e,value:n});return new ho(r).toPromise()}async function OP(t,e){const n=yc(t,!1).get(e),r=await new ho(n).toPromise();return r===void 0?null:r.value}function op(t,e){const n=yc(t,!0).delete(e);return new ho(n).toPromise()}const xP=800,NP=3;class z_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return H_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(SP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RP(),!this.activeServiceWorker)return;this.sender=new AP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hu();return await ip(e,Va,"1"),await op(e,Va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ip(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yc(s,!1).getAll();return new ho(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z_.type="LOCAL";const DP=z_;new co(3e4,6e4);/**
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
 */function G_(t,e){return e?Sn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sh extends Ah{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VP(t){return L_(t.auth,new Sh(t),t.bypassAuthState)}function MP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),dP(n,new Sh(t),t.bypassAuthState)}async function LP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),hP(n,new Sh(t),t.bypassAuthState)}/**
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
 */class Q_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VP;case"linkViaPopup":case"linkViaRedirect":return LP;case"reauthViaPopup":case"reauthViaRedirect":return MP;default:jt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UP=new co(2e3,1e4);async function FP(t,e,n){const r=_r(t);IR(t,e,Rh);const s=G_(r,n);return new Sr(r,"signInViaPopup",e,s).executeNotNull()}class Sr extends Q_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UP.get())};e()}}Sr.currentPopupAction=null;/**
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
 */const $P="pendingRedirect",aa=new Map;class jP extends Q_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=aa.get(this.auth._key());if(!e){try{const r=await BP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}aa.set(this.auth._key(),e)}return this.bypassAuthState||aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BP(t,e){const n=WP(e),r=HP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qP(t,e){aa.set(t._key(),e)}function HP(t){return Sn(t._redirectPersistence)}function WP(t){return oa($P,t.config.apiKey,t.name)}async function KP(t,e,n=!1){const r=_r(t),s=G_(r,e),o=await new jP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const zP=10*60*1e3;class GP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Y_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ap(e))}saveEventToCache(e){this.cachedEventUids.add(ap(e)),this.lastProcessedEventTime=Date.now()}}function ap(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Y_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Y_(t);default:return!1}}/**
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
 */async function YP(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
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
 */const JP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XP=/^https?/;async function ZP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YP(t);for(const n of e)try{if(eS(n))return}catch{}jt(t,"unauthorized-domain")}function eS(t){const e=uu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XP.test(n))return!1;if(JP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tS=new co(3e4,6e4);function cp(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nS(t){return new Promise((e,n)=>{var r,s,i;function o(){cp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cp(),n(dn(t,"network-request-failed"))},timeout:tS.get()})}if(!((s=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fn().gapi)===null||i===void 0)&&i.load)o();else{const a=QR("iframefcb");return fn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},D_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ca=null,e})}let ca=null;function rS(t){return ca=ca||nS(t),ca}/**
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
 */const sS=new co(5e3,15e3),iS="__/auth/iframe",oS="emulator/auth/iframe",aS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lS(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eh(e,oS):`https://${t.config.authDomain}/${iS}`,r={apiKey:e.apiKey,appName:t.name,v:ss},s=cS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ao(r).slice(1)}`}async function uS(t){const e=await rS(t),n=fn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:lS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=fn().setTimeout(()=>{i(o)},sS.get());function c(){fn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const hS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dS=500,fS=600,pS="_blank",gS="http://localhost";class lp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mS(t,e,n,r=dS,s=fS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},hS),{width:r.toString(),height:s.toString(),top:i,left:o}),l=yt().toLowerCase();n&&(a=P_(l)?pS:n),R_(l)&&(e=e||gS,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if($R(l)&&a!=="_self")return _S(e||"",a),new lp(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new lp(h)}function _S(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yS="__/auth/handler",vS="emulator/auth/handler",wS=encodeURIComponent("fac");async function up(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:s};if(e instanceof Rh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",c0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof uo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${wS}=${encodeURIComponent(c)}`:"";return`${ES(t)}?${ao(a).slice(1)}${l}`}function ES({config:t}){return t.emulator?Eh(t,vS):`https://${t.authDomain}/${yS}`}/**
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
 */const ml="webStorageSupport";class IS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q_,this._completeRedirectFn=KP,this._overrideRedirectResult=qP}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await up(e,n,r,uu(),s);return mS(e,o,Ph())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await up(e,n,r,uu(),s);return bP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uS(e),r=new GP(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ml,{type:ml},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ml];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return x_()||Th()||mc()}}const TS=IS;var hp="@firebase/auth",dp="1.3.0";/**
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
 */class AS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RS(t){Gr(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:N_(t)},l=new zR(r,s,i,c);return tP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new hr("auth-internal",e=>{const n=_r(e.getProvider("auth").getImmediate());return(r=>new AS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(hp,dp,bS(t)),hn(hp,dp,"esm2017")}/**
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
 */const PS=5*60,SS=h_("authIdTokenMaxAge")||PS;let fp=null;const CS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SS)return;const s=n==null?void 0:n.token;fp!==s&&(fp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function J_(t=yh()){const e=gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eP(t,{popupRedirectResolver:TS,persistence:[DP,IP,q_]}),r=h_("authTokenSyncURL");if(r){const i=CS(r);yP(n,i,()=>i(n.currentUser)),_P(n,o=>i(o))}const s=c_("auth");return s&&nP(n,`http://${s}`),n}RS("Browser");const kS={apiKey:"AIzaSyBhueqCi9Wd4vD7Jo9Ja6q-_5_-wSkpe88",authDomain:"realtime-chat-29fba.firebaseapp.com",projectId:"realtime-chat-29fba",storageBucket:"realtime-chat-29fba.appspot.com",messagingSenderId:"94609209804",appId:"1:94609209804:web:df97e4ab131719cbe8c569",measurementId:"G-03XKB9XPCK"},vc=g_(kS),OS=J_(vc),pp=["$30 of raw popcorn translates into $3,000 in sales at movie theaters","'Barack Obama' born August 4 1961 was the 44th President of the United States.","'Bookkeeper' and 'bookkeeping' are the only 2 words in the English language with three consecutive double letters","'Canberra' is the capital of 'Australia'.","'Coast Redwood' tree is the world's tallest tree (371 ft) in Redwood National Park California United States"],xS={class:"flex flex-col w-full h-full bg-surface justify-center items-center"},NS=J("h1",{class:"text-onDark text-6xl animate-bounce p-8"},"Loading...",-1),DS={class:"text-onDark emphasis-high text-xl"},VS=tt({__name:"LoadingScreen",setup(t){const e=Math.floor(Math.random()*pp.length),n=pp[e];return(r,s)=>(oe(),ve("div",xS,[NS,J("p",DS,Hr(De(n)),1)]))}}),wt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},MS=wt(VS,[["__file","/home/luuk/code/realtime-chat/src/components/LoadingScreen.vue"]]),LS=tt({__name:"App",setup(t){const e=xe(!0);async function n(){await OS.authStateReady(),e.value=!1}return n(),(r,s)=>(oe(),ve(st,null,[e.value?(oe(),$t(MS,{key:0})):ks("v-if",!0),e.value?ks("v-if",!0):(oe(),$t(De(Jm),{key:1}))],64))}}),US=wt(LS,[["__file","/home/luuk/code/realtime-chat/src/App.vue"]]);/**
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
 */const X_="firebasestorage.googleapis.com",Z_="storageBucket",FS=2*60*1e3,$S=10*60*1e3;/**
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
 */class Fe extends vn{constructor(e,n,r=0){super(_l(e),`Firebase Storage: ${n} (${_l(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _l(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Le||(Le={}));function _l(t){return"storage/"+t}function Ch(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe(Le.UNKNOWN,t)}function jS(t){return new Fe(Le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function BS(t){return new Fe(Le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(Le.UNAUTHENTICATED,t)}function HS(){return new Fe(Le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function WS(t){return new Fe(Le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function KS(){return new Fe(Le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zS(){return new Fe(Le.CANCELED,"User canceled the upload/download.")}function GS(t){return new Fe(Le.INVALID_URL,"Invalid URL '"+t+"'.")}function QS(t){return new Fe(Le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function YS(){return new Fe(Le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Z_+"' property when initializing the app?")}function JS(){return new Fe(Le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function XS(){return new Fe(Le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZS(t){return new Fe(Le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function du(t){return new Fe(Le.INVALID_ARGUMENT,t)}function ey(){return new Fe(Le.APP_DELETED,"The Firebase app was deleted.")}function eC(t){return new Fe(Le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ei(t,e){return new Fe(Le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ni(t){throw new Fe(Le.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ot.makeFromUrl(e,n)}catch{return new Ot(e,"")}if(r.path==="")return r;throw QS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(K){K.path_=decodeURIComponent(K.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},I=n===X_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",b=new RegExp(`^https?://${I}/${s}/${w}`,"i"),k=[{regex:a,indices:c,postModify:i},{regex:p,indices:_,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let K=0;K<k.length;K++){const U=k[K],ge=U.regex.exec(e);if(ge){const B=ge[U.indices.bucket];let ze=ge[U.indices.path];ze||(ze=""),r=new Ot(B,ze),U.postModify(r);break}}if(r==null)throw GS(e);return r}}class tC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function nC(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,t(p,c())},w)}function d(){i&&clearTimeout(i)}function p(w,...b){if(l){d();return}if(w){d(),u.call(null,w,...b);return}if(c()||o){d(),u.call(null,w,...b);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let _=!1;function I(w){_||(_=!0,d(),!l&&(s!==null?(w||(a=2),clearTimeout(s),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function rC(t){t(!1)}/**
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
 */function sC(t){return t!==void 0}function iC(t){return typeof t=="object"&&!Array.isArray(t)}function kh(t){return typeof t=="string"||t instanceof String}function gp(t){return Oh()&&t instanceof Blob}function Oh(){return typeof Blob<"u"&&!Zb()}function mp(t,e,n,r){if(r<e)throw du(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw du(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function xh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ty(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Fr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fr||(Fr={}));/**
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
 */function oC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class aC{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Uo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Fr.NO_ERROR,c=i.getStatus();if(!a||oC(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Fr.ABORT;r(!1,new Uo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Uo(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());sC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ch();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?ey():zS();o(c)}else{const c=KS();o(c)}};this.canceled_?n(!1,new Uo(!1,null,!0)):this.backoffId_=nC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function dC(t,e,n,r,s,i,o=!0){const a=ty(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return uC(l,e),cC(l,n),lC(l,i),hC(l,r),new aC(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function fC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pC(...t){const e=fC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Oh())return new Blob(t);throw new Fe(Le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function gC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function mC(t){if(typeof atob>"u")throw ZS("base-64");return atob(t)}/**
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
 */const on={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yl{constructor(e,n){this.data=e,this.contentType=n||null}}function _C(t,e){switch(t){case on.RAW:return new yl(ny(e));case on.BASE64:case on.BASE64URL:return new yl(ry(t,e));case on.DATA_URL:return new yl(vC(e),wC(e))}throw Ch()}function ny(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function yC(t){let e;try{e=decodeURIComponent(t)}catch{throw Ei(on.DATA_URL,"Malformed data URL.")}return ny(e)}function ry(t,e){switch(t){case on.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ei(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case on.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ei(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mC(e)}catch(s){throw s.message.includes("polyfill")?s:Ei(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class sy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ei(on.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=EC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function vC(t){const e=new sy(t);return e.base64?ry(on.BASE64,e.rest):yC(e.rest)}function wC(t){return new sy(t).contentType}function EC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Yn{constructor(e,n){let r=0,s="";gp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(gp(this.data_)){const r=this.data_,s=gC(r,e,n);return s===null?null:new Yn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Yn(r,!0)}}static getBlob(...e){if(Oh()){const n=e.map(r=>r instanceof Yn?r.data_:r);return new Yn(pC.apply(null,n))}else{const n=e.map(o=>kh(o)?_C(on.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Yn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function iy(t){let e;try{e=JSON.parse(t)}catch{return null}return iC(e)?e:null}/**
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
 */function IC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function oy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function AC(t,e){return e}class It{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||AC}}let Fo=null;function bC(t){return!kh(t)||t.length<2?t:oy(t)}function ay(){if(Fo)return Fo;const t=[];t.push(new It("bucket")),t.push(new It("generation")),t.push(new It("metageneration")),t.push(new It("name","fullPath",!0));function e(i,o){return bC(o)}const n=new It("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new It("size");return s.xform=r,t.push(s),t.push(new It("timeCreated")),t.push(new It("updated")),t.push(new It("md5Hash",null,!0)),t.push(new It("cacheControl",null,!0)),t.push(new It("contentDisposition",null,!0)),t.push(new It("contentEncoding",null,!0)),t.push(new It("contentLanguage",null,!0)),t.push(new It("contentType",null,!0)),t.push(new It("metadata","customMetadata",!0)),Fo=t,Fo}function RC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ot(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function PC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return RC(r,t),r}function cy(t,e,n){const r=iy(e);return r===null?null:PC(t,r,n)}function SC(t,e,n,r){const s=iy(e);if(s===null||!kh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=xh(d,n,r),_=ty({alt:"media",token:l});return p+_})[0]}function CC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ly{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function uy(t){if(!t)throw Ch()}function kC(t,e){function n(r,s){const i=cy(t,s,e);return uy(i!==null),i}return n}function OC(t,e){function n(r,s){const i=cy(t,s,e);return uy(i!==null),SC(i,s,t.host,t._protocol)}return n}function hy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=HS():s=qS():n.getStatus()===402?s=BS(t.bucket):n.getStatus()===403?s=WS(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function xC(t){const e=hy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=jS(t.path)),i.serverResponse=s.serverResponse,i}return n}function NC(t,e,n){const r=e.fullServerUrl(),s=xh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ly(s,i,OC(t,n),o);return a.errorHandler=xC(e),a}function DC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function VC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=DC(null,e)),r}function MC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let K=0;K<2;K++)k=k+Math.random().toString().slice(2);return k}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=VC(e,r,s),u=CC(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Yn.getBlob(h,r,d);if(p===null)throw JS();const _={name:l.fullPath},I=xh(i,t.host,t._protocol),w="POST",b=t.maxUploadRetryTime,x=new ly(I,w,kC(t,n),b);return x.urlParams=_,x.headers=o,x.body=p.uploadData(),x.errorHandler=hy(e),x}class LC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ni("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ni("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ni("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ni("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ni("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class UC extends LC{initXhr(){this.xhr_.responseType="text"}}function dy(){return new UC}/**
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
 */class Jr{constructor(e,n){this._service=e,n instanceof Ot?this._location=n:this._location=Ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Jr(e,n)}get root(){const e=new Ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oy(this._location.path)}get storage(){return this._service}get parent(){const e=IC(this._location.path);if(e===null)return null;const n=new Ot(this._location.bucket,e);return new Jr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eC(e)}}function FC(t,e,n){t._throwIfRoot("uploadBytes");const r=MC(t.storage,t._location,ay(),new Yn(e,!0),n);return t.storage.makeRequestWithTokens(r,dy).then(s=>({metadata:s,ref:t}))}function $C(t){t._throwIfRoot("getDownloadURL");const e=NC(t.storage,t._location,ay());return t.storage.makeRequestWithTokens(e,dy).then(n=>{if(n===null)throw XS();return n})}function jC(t,e){const n=TC(t._location.path,e),r=new Ot(t._location.bucket,n);return new Jr(t.storage,r)}/**
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
 */function BC(t){return/^[A-Za-z]+:\/\//.test(t)}function qC(t,e){return new Jr(t,e)}function fy(t,e){if(t instanceof Nh){const n=t;if(n._bucket==null)throw YS();const r=new Jr(n,n._bucket);return e!=null?fy(r,e):r}else return e!==void 0?jC(t,e):t}function HC(t,e){if(e&&BC(e)){if(t instanceof Nh)return qC(t,e);throw du("To use ref(service, url), the first argument must be a Storage instance.")}else return fy(t,e)}function _p(t,e){const n=e==null?void 0:e[Z_];return n==null?null:Ot.makeFromBucketSpec(n,t)}function WC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:d_(s,t.app.options.projectId))}class Nh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=X_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FS,this._maxUploadRetryTime=$S,this._requests=new Set,s!=null?this._bucket=Ot.makeFromBucketSpec(s,this._host):this._bucket=_p(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ot.makeFromBucketSpec(this._url,e):this._bucket=_p(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){mp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){mp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new tC(ey());{const o=dC(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const yp="@firebase/storage",vp="0.11.2";/**
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
 */const py="storage";function KC(t,e,n){return t=Ye(t),FC(t,e,n)}function zC(t){return t=Ye(t),$C(t)}function GC(t,e){return t=Ye(t),HC(t,e)}function QC(t=yh(),e){t=Ye(t);const r=gc(t,py).getImmediate({identifier:e}),s=l_("storage");return s&&YC(r,...s),r}function YC(t,e,n,r={}){WC(t,e,n,r)}function JC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Nh(n,r,s,e,ss)}function XC(){Gr(new hr(py,JC,"PUBLIC").setMultipleInstances(!0)),hn(yp,vp,""),hn(yp,vp,"esm2017")}XC();const ZC=QC(vc),ek=async(t,e)=>{const n=GC(ZC,`profilePictures/${e}`),r=await KC(n,t);return await zC(r.ref)};var tk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Dh=Dh||{},ne=tk||self;function wc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nk(t){return Object.prototype.hasOwnProperty.call(t,vl)&&t[vl]||(t[vl]=++rk)}var vl="closure_uid_"+(1e9*Math.random()>>>0),rk=0;function sk(t,e,n){return t.call.apply(t.bind,arguments)}function ik(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=sk:pt=ik,pt.apply(null,arguments)}function $o(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function yr(){this.s=this.s,this.o=this.o}var ok=0;yr.prototype.s=!1;yr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ok!=0)&&nk(this)};yr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function wp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var ak=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",()=>{},e),ne.removeEventListener("test",()=>{},e)}catch{}return t}();function ji(t){return/^[\s\xa0]*$/.test(t)}function Ec(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function sn(t){return Ec().indexOf(t)!=-1}function Mh(t){return Mh[" "](t),t}Mh[" "]=function(){};function ck(t,e){var n=eO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var lk=sn("Opera"),Ds=sn("Trident")||sn("MSIE"),my=sn("Edge"),fu=my||Ds,_y=sn("Gecko")&&!(Ec().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge"))&&!(sn("Trident")||sn("MSIE"))&&!sn("Edge"),uk=Ec().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge");function yy(){var t=ne.document;return t?t.documentMode:void 0}var pu;e:{var wl="",El=function(){var t=Ec();if(_y)return/rv:([^\);]+)(\)|;)/.exec(t);if(my)return/Edge\/([\d\.]+)/.exec(t);if(Ds)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uk)return/WebKit\/(\S+)/.exec(t);if(lk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(El&&(wl=El?El[1]:""),Ds){var Il=yy();if(Il!=null&&Il>parseFloat(wl)){pu=String(Il);break e}}pu=wl}var gu;if(ne.document&&Ds){var Ep=yy();gu=Ep||parseInt(pu,10)||void 0}else gu=void 0;var hk=gu;function Bi(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_y){e:{try{Mh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Bi.$.h.call(this)}}nt(Bi,gt);var dk={2:"touch",3:"pen",4:"mouse"};Bi.prototype.h=function(){Bi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var po="closure_listenable_"+(1e6*Math.random()|0),fk=0;function pk(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++fk,this.fa=this.ia=!1}function Ic(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Lh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function gk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function vy(t){const e={};for(const n in t)e[n]=t[n];return e}const Ip="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wy(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Ip.length;i++)n=Ip[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Tc(t){this.src=t,this.g={},this.h=0}Tc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=_u(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new pk(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function mu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=gy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ic(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _u(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Uh="closure_lm_"+(1e6*Math.random()|0),Tl={};function Ey(t,e,n,r,s){if(r&&r.once)return Ty(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ey(t,e[i],n,r,s);return null}return n=jh(n),t&&t[po]?t.O(e,n,fo(r)?!!r.capture:!!r,s):Iy(t,e,n,!1,r,s)}function Iy(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=fo(s)?!!s.capture:!!s,a=$h(t);if(a||(t[Uh]=a=new Tc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=mk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ak||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(by(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mk(){function t(n){return e.call(t.src,t.listener,n)}const e=_k;return t}function Ty(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ty(t,e[i],n,r,s);return null}return n=jh(n),t&&t[po]?t.P(e,n,fo(r)?!!r.capture:!!r,s):Iy(t,e,n,!0,r,s)}function Ay(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ay(t,e[i],n,r,s);else r=fo(r)?!!r.capture:!!r,n=jh(n),t&&t[po]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=_u(i,n,r,s),-1<n&&(Ic(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=$h(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_u(e,n,r,s)),(n=-1<t?e[t]:null)&&Fh(n))}function Fh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[po])mu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(by(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=$h(e))?(mu(n,t),n.h==0&&(n.src=null,e[Uh]=null)):Ic(t)}}}function by(t){return t in Tl?Tl[t]:Tl[t]="on"+t}function _k(t,e){if(t.fa)t=!0;else{e=new Bi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Fh(t),t=n.call(r,e)}return t}function $h(t){return t=t[Uh],t instanceof Tc?t:null}var Al="__closure_events_fn_"+(1e9*Math.random()>>>0);function jh(t){return typeof t=="function"?t:(t[Al]||(t[Al]=function(e){return t.handleEvent(e)}),t[Al])}function et(){yr.call(this),this.i=new Tc(this),this.S=this,this.J=null}nt(et,yr);et.prototype[po]=!0;et.prototype.removeEventListener=function(t,e,n,r){Ay(this,t,e,n,r)};function ot(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var s=e;e=new gt(r,t),wy(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=jo(o,r,!0,e)&&s}if(o=e.g=t,s=jo(o,r,!0,e)&&s,s=jo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=jo(o,r,!1,e)&&s}et.prototype.N=function(){if(et.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ic(n[r]);delete t.g[e],t.h--}}this.J=null};et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};et.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function jo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&mu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Bh=ne.JSON.stringify;class yk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function vk(){var t=qh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wk{constructor(){this.h=this.g=null}add(e,n){const r=Ry.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ry=new yk(()=>new Ek,t=>t.reset());class Ek{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ik(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Tk(t){ne.setTimeout(()=>{throw t},0)}let qi,Hi=!1,qh=new wk,Py=()=>{const t=ne.Promise.resolve(void 0);qi=()=>{t.then(Ak)}};var Ak=()=>{for(var t;t=vk();){try{t.h.call(t.g)}catch(n){Tk(n)}var e=Ry;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hi=!1};function Ac(t,e){et.call(this),this.h=t||1,this.g=e||ne,this.j=pt(this.qb,this),this.l=Date.now()}nt(Ac,et);D=Ac.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(Hh(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Ac.$.N.call(this),Hh(this),delete this.g};function Wh(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Sy(t){t.g=Wh(()=>{t.g=null,t.i&&(t.i=!1,Sy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bk extends yr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sy(this)}N(){super.N(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(t){yr.call(this),this.h=t,this.g={}}nt(Wi,yr);var Tp=[];function Cy(t,e,n,r){Array.isArray(n)||(n&&(Tp[0]=n.toString()),n=Tp);for(var s=0;s<n.length;s++){var i=Ey(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ky(t){Lh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fh(e)},t),t.g={}}Wi.prototype.N=function(){Wi.$.N.call(this),ky(this)};Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bc(){this.g=!0}bc.prototype.Ea=function(){this.g=!1};function Rk(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Pk(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ck(t,n)+(r?" "+r:"")})}function Sk(t,e){t.info(function(){return"TIMEOUT: "+e})}bc.prototype.info=function(){};function Ck(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Bh(n)}catch{return e}}var os={},Ap=null;function Rc(){return Ap=Ap||new et}os.Ta="serverreachability";function Oy(t){gt.call(this,os.Ta,t)}nt(Oy,gt);function Ki(t){const e=Rc();ot(e,new Oy(e))}os.STAT_EVENT="statevent";function xy(t,e){gt.call(this,os.STAT_EVENT,t),this.stat=e}nt(xy,gt);function bt(t){const e=Rc();ot(e,new xy(e,t))}os.Ua="timingevent";function Ny(t,e){gt.call(this,os.Ua,t),this.size=e}nt(Ny,gt);function go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Pc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Dy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Kh(){}Kh.prototype.h=null;function bp(t){return t.h||(t.h=t.i())}function Vy(){}var mo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function zh(){gt.call(this,"d")}nt(zh,gt);function Gh(){gt.call(this,"c")}nt(Gh,gt);var yu;function Sc(){}nt(Sc,Kh);Sc.prototype.g=function(){return new XMLHttpRequest};Sc.prototype.i=function(){return{}};yu=new Sc;function _o(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Wi(this),this.P=kk,t=fu?125:void 0,this.V=new Ac(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new My}function My(){this.i=null,this.g="",this.h=!1}var kk=45e3,vu={},La={};D=_o.prototype;D.setTimeout=function(t){this.P=t};function wu(t,e,n){t.L=1,t.v=kc(xn(e)),t.s=n,t.S=!0,Ly(t,null)}function Ly(t,e){t.G=Date.now(),yo(t),t.A=xn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Wy(n.i,"t",r),t.C=0,n=t.l.J,t.h=new My,t.g=dv(t.l,n?e:null,!t.s),0<t.O&&(t.M=new bk(pt(t.Pa,t,t.g),t.O)),Cy(t.U,t.g,"readystatechange",t.nb),e=t.I?vy(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ki(),Rk(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&an(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=an(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||fu||this.g&&(this.h.h||this.g.ja()||Cp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ki(3):Ki(2)),Cc(this);var n=this.g.da();this.ca=n;t:if(Uy(this)){var r=Cp(this.g);t="";var s=r.length,i=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Ii(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Pk(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ji(a)){var l=a;break t}}l=null}if(n=l)Es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eu(this,n);else{this.i=!1,this.o=3,bt(12),Cr(this),Ii(this);break e}}this.S?(Fy(this,u,o),fu&&this.i&&u==3&&(Cy(this.U,this.V,"tick",this.mb),this.V.start())):(Es(this.j,this.m,o,null),Eu(this,o)),u==4&&Cr(this),this.i&&!this.J&&(u==4?cv(this.l,this):(this.i=!1,yo(this)))}else Jk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),Cr(this),Ii(this)}}}catch{}finally{}};function Uy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Fy(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Ok(t,n),s==La){e==4&&(t.o=4,bt(14),r=!1),Es(t.j,t.m,null,"[Incomplete Response]");break}else if(s==vu){t.o=4,bt(15),Es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Es(t.j,t.m,s,null),Eu(t,s);Uy(t)&&s!=La&&s!=vu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ed(e),e.M=!0,bt(11))):(Es(t.j,t.m,n,"[Invalid Chunked Response]"),Cr(t),Ii(t))}D.mb=function(){if(this.g){var t=an(this.g),e=this.g.ja();this.C<e.length&&(Cc(this),Fy(this,t,e),this.i&&t!=4&&yo(this))}};function Ok(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?La:(n=Number(e.substring(n,r)),isNaN(n)?vu:(r+=1,r+n>e.length?La:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,Cr(this)};function yo(t){t.Y=Date.now()+t.P,$y(t,t.P)}function $y(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=go(pt(t.lb,t),e)}function Cc(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Sk(this.j,this.A),this.L!=2&&(Ki(),bt(17)),Cr(this),this.o=2,Ii(this)):$y(this,this.Y-t)};function Ii(t){t.l.H==0||t.J||cv(t.l,t)}function Cr(t){Cc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Hh(t.V),ky(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Eu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Iu(n.i,t))){if(!t.K&&Iu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)$a(n),Dc(n);else break e;Zh(n),bt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=go(pt(n.ib,n),6e3));if(1>=Gy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else kr(n,11)}else if((t.K||n.g==t)&&$a(n),!ji(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Qh(i,i.h),i.h=null))}if(r.F){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,Pe(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=hv(r,r.J?r.pa:null,r.Y),o.K){Qy(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Cc(a),yo(a)),r.g=o}else ov(r);0<n.j.length&&Vc(n)}else l[0]!="stop"&&l[0]!="close"||kr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?kr(n,7):Xh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ki(4)}catch{}}function xk(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Nk(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function jy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Nk(t),r=xk(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var By=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function $r(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $r){this.h=t.h,Ua(this,t.j),this.s=t.s,this.g=t.g,Fa(this,t.m),this.l=t.l;var e=t.i,n=new zi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rp(this,n),this.o=t.o}else t&&(e=String(t).match(By))?(this.h=!1,Ua(this,e[1]||"",!0),this.s=hi(e[2]||""),this.g=hi(e[3]||"",!0),Fa(this,e[4]),this.l=hi(e[5]||"",!0),Rp(this,e[6]||"",!0),this.o=hi(e[7]||"")):(this.h=!1,this.i=new zi(null,this.h))}$r.prototype.toString=function(){var t=[],e=this.j;e&&t.push(di(e,Pp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(di(e,Pp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(di(n,n.charAt(0)=="/"?Lk:Mk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",di(n,Fk)),t.join("")};function xn(t){return new $r(t)}function Ua(t,e,n){t.j=n?hi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rp(t,e,n){e instanceof zi?(t.i=e,$k(t.i,t.h)):(n||(e=di(e,Uk)),t.i=new zi(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function kc(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function di(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Vk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Vk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pp=/[#\/\?@]/g,Mk=/[#\?:]/g,Lk=/[#\?]/g,Uk=/[#\?@]/g,Fk=/#/g;function zi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vr(t){t.g||(t.g=new Map,t.h=0,t.i&&Dk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=zi.prototype;D.add=function(t,e){vr(this),this.i=null,t=qs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qy(t,e){vr(t),e=qs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hy(t,e){return vr(t),e=qs(t,e),t.g.has(e)}D.forEach=function(t,e){vr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){vr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){vr(this);let e=[];if(typeof t=="string")Hy(this,t)&&(e=e.concat(this.g.get(qs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return vr(this),this.i=null,t=qs(this,t),Hy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Wy(t,e,n){qy(t,e),0<n.length&&(t.i=null,t.g.set(qs(t,e),Vh(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function qs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $k(t,e){e&&!t.j&&(vr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(qy(this,r),Wy(this,s,n))},t)),t.j=e}var jk=class{constructor(t,e){this.g=t,this.map=e}};function Ky(t){this.l=t||Bk,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ka&&ne.g.Ka()&&ne.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bk=10;function zy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gy(t){return t.h?1:t.g?t.g.size:0}function Iu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qh(t,e){t.g?t.g.add(e):t.h=e}function Qy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ky.prototype.cancel=function(){if(this.i=Yy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Vh(t.i)}var qk=class{stringify(t){return ne.JSON.stringify(t,void 0)}parse(t){return ne.JSON.parse(t,void 0)}};function Hk(){this.g=new qk}function Wk(t,e,n){const r=n||"";try{jy(t,function(s,i){let o=s;fo(s)&&(o=Bh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Kk(t,e){const n=new bc;if(ne.Image){const r=new Image;r.onload=$o(Bo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$o(Bo,n,r,"TestLoadImage: error",!1,e),r.onabort=$o(Bo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$o(Bo,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Bo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Oc(t){this.l=t.fc||null,this.j=t.ob||!1}nt(Oc,Kh);Oc.prototype.g=function(){return new xc(this.l,this.j)};Oc.prototype.i=function(t){return function(){return t}}({});function xc(t,e){et.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Yh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(xc,et);var Yh=0;D=xc.prototype;D.open=function(t,e){if(this.readyState!=Yh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gi(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ne).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vo(this)),this.readyState=Yh};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gi(this)),this.g&&(this.readyState=3,Gi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Jy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vo(this):Gi(this),this.readyState==3&&Jy(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,vo(this))};D.Ya=function(t){this.g&&(this.response=t,vo(this))};D.ka=function(){this.g&&vo(this)};function vo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gi(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Gi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zk=ne.JSON.parse;function Ue(t){et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xy,this.L=this.M=!1}nt(Ue,et);var Xy="",Gk=/^https?$/i,Qk=["POST","PUT"];D=Ue.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():yu.g(),this.C=this.u?bp(this.u):bp(yu),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Sp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ne.FormData&&t instanceof ne.FormData,!(0<=gy(Qk,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{tv(this),0<this.B&&((this.L=Yk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=Wh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Sp(this,i)}};function Yk(t){return Ds&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Dh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function Sp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zy(t),Nc(t)}function Zy(t){t.F||(t.F=!0,ot(t,"complete"),ot(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),Nc(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Nc(this,!0)),Ue.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?ev(this):this.kb())};D.kb=function(){ev(this)};function ev(t){if(t.h&&typeof Dh<"u"&&(!t.C[1]||an(t)!=4||t.da()!=2)){if(t.v&&an(t)==4)Wh(t.La,0,t);else if(ot(t,"readystatechange"),an(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(By)[1]||null;!s&&ne.self&&ne.self.location&&(s=ne.self.location.protocol.slice(0,-1)),r=!Gk.test(s?s.toLowerCase():"")}n=r}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var i=2<an(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Zy(t)}}finally{Nc(t)}}}}function Nc(t,e){if(t.g){tv(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=r}catch{}}}function tv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function an(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zk(e)}};function Cp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Xy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Jk(t){const e={};t=(t.g&&2<=an(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ji(t[r]))continue;var n=Ik(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}gk(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nv(t){let e="";return Lh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Jh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=nv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function ri(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rv(t){this.Ga=0,this.j=[],this.l=new bc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ri("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ri("baseRetryDelayMs",5e3,t),this.hb=ri("retryDelaySeedMs",1e4,t),this.eb=ri("forwardChannelMaxRetries",2,t),this.xa=ri("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ky(t&&t.concurrentRequestLimit),this.Ja=new Hk,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=rv.prototype;D.ra=8;D.H=1;function Xh(t){if(sv(t),t.H==3){var e=t.W++,n=xn(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),wo(t,n),e=new _o(t,t.l,e),e.L=2,e.v=kc(xn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon)try{n=ne.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=dv(e.l,null),e.g.ha(e.v)),e.G=Date.now(),yo(e)}uv(t)}function Dc(t){t.g&&(ed(t),t.g.cancel(),t.g=null)}function sv(t){Dc(t),t.u&&(ne.clearTimeout(t.u),t.u=null),$a(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Vc(t){if(!zy(t.i)&&!t.m){t.m=!0;var e=t.Na;qi||Py(),Hi||(qi(),Hi=!0),qh.add(e,t),t.C=0}}function Xk(t,e){return Gy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=go(pt(t.Na,t,e),lv(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new _o(this,this.l,t);let i=this.s;if(this.U&&(i?(i=vy(i),wy(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=iv(this,s,e),n=xn(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),wo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(nv(i)))+"&"+e:this.o&&Jh(n,this.o,i)),Qh(this.i,s),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),s.aa=!0,wu(s,n,null)):wu(s,n,e),this.H=2}}else this.H==3&&(t?kp(this,t):this.j.length==0||zy(this.i)||kp(this))};function kp(t,e){var n;e?n=e.m:n=t.W++;const r=xn(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.V),wo(t,r),t.o&&t.s&&Jh(r,t.o,t.s),n=new _o(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=iv(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Qh(t.i,n),wu(n,r,e)}function wo(t,e){t.na&&Lh(t.na,function(n,r){Pe(e,r,n)}),t.h&&jy({},function(n,r){Pe(e,r,n)})}function iv(t,e,n){n=Math.min(t.j.length,n);var r=t.h?pt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Wk(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ov(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;qi||Py(),Hi||(qi(),Hi=!0),qh.add(e,t),t.A=0}}function Zh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=go(pt(t.Ma,t),lv(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,av(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=go(pt(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,bt(10),Dc(this),av(this))};function ed(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function av(t){t.g=new _o(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=xn(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),wo(t,e),t.o&&t.s&&Jh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=kc(xn(e)),n.s=null,n.S=!0,Ly(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Dc(this),Zh(this),bt(19))};function $a(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function cv(t,e){var n=null;if(t.g==e){$a(t),ed(t),t.g=null;var r=2}else if(Iu(t.i,e))n=e.F,Qy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Rc(),ot(r,new Ny(r,n)),Vc(t)}else ov(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Xk(t,e)||r==2&&Zh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:kr(t,5);break;case 4:kr(t,10);break;case 3:kr(t,6);break;default:kr(t,2)}}}function lv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function kr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=pt(t.pb,t);n||(n=new $r("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Ua(n,"https"),kc(n)),Kk(n.toString(),r)}else bt(2);t.H=0,t.h&&t.h.za(e),uv(t),sv(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),bt(2)):(this.l.info("Failed to ping google.com"),bt(1))};function uv(t){if(t.H=0,t.ma=[],t.h){const e=Yy(t.i);(e.length!=0||t.j.length!=0)&&(wp(t.ma,e),wp(t.ma,t.j),t.i.i.length=0,Vh(t.j),t.j.length=0),t.h.ya()}}function hv(t,e,n){var r=n instanceof $r?xn(n):new $r(n);if(r.g!="")e&&(r.g=e+"."+r.g),Fa(r,r.m);else{var s=ne.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new $r(null);r&&Ua(i,r),e&&(i.g=e),s&&Fa(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ra),wo(t,r),r}function dv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new Oc({ob:!0})):new Ue(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function fv(){}D=fv.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function ja(){if(Ds&&!(10<=Number(hk)))throw Error("Environmental error: no available transport.")}ja.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){et.call(this),this.g=new rv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ji(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ji(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hs(this)}nt(Dt,et);Dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=hv(t,null,t.Y),Vc(t)};Dt.prototype.close=function(){Xh(this.g)};Dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bh(t),t=n);e.j.push(new jk(e.fb++,t)),e.H==3&&Vc(e)};Dt.prototype.N=function(){this.g.h=null,delete this.j,Xh(this.g),delete this.g,Dt.$.N.call(this)};function pv(t){zh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(pv,zh);function gv(){Gh.call(this),this.status=1}nt(gv,Gh);function Hs(t){this.g=t}nt(Hs,fv);Hs.prototype.Ba=function(){ot(this.g,"a")};Hs.prototype.Aa=function(t){ot(this.g,new pv(t))};Hs.prototype.za=function(t){ot(this.g,new gv)};Hs.prototype.ya=function(){ot(this.g,"b")};function Zk(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(Qt,Zk);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)bl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){bl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){bl(this,r),s=0;break}}this.h=s,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ie(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var eO={};function td(t){return-128<=t&&128>t?ck(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function cn(t){if(isNaN(t)||!isFinite(t))return Rs;if(0>t)return it(cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Tu;return new Ie(e,0)}function mv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return it(mv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=cn(Math.pow(e,8)),r=Rs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=cn(Math.pow(e,i)),r=r.R(i).add(cn(o))):(r=r.R(n),r=r.add(cn(o)))}return r}var Tu=4294967296,Rs=td(0),Au=td(1),Op=td(16777216);D=Ie.prototype;D.ea=function(){if(Ut(this))return-it(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Tu+r)*e,e*=Tu}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Cn(this))return"0";if(Ut(this))return"-"+it(this).toString(t);for(var e=cn(Math.pow(t,6)),n=this,r="";;){var s=qa(n,e).g;n=Ba(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Cn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ut(t){return t.h==-1}D.X=function(t){return t=Ba(this,t),Ut(t)?-1:Cn(t)?0:1};function it(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ie(n,~t.h).add(Au)}D.abs=function(){return Ut(this)?it(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function Ba(t,e){return t.add(it(e))}D.R=function(t){if(Cn(this)||Cn(t))return Rs;if(Ut(this))return Ut(t)?it(this).R(it(t)):it(it(this).R(t));if(Ut(t))return it(this.R(it(t)));if(0>this.X(Op)&&0>t.X(Op))return cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,qo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,qo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,qo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,qo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ie(n,0)};function qo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function si(t,e){this.g=t,this.h=e}function qa(t,e){if(Cn(e))throw Error("division by zero");if(Cn(t))return new si(Rs,Rs);if(Ut(t))return e=qa(it(t),e),new si(it(e.g),it(e.h));if(Ut(e))return e=qa(t,it(e)),new si(it(e.g),e.h);if(30<t.g.length){if(Ut(t)||Ut(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Au,r=e;0>=r.X(t);)n=xp(n),r=xp(r);var s=ps(n,1),i=ps(r,1);for(r=ps(r,2),n=ps(n,2);!Cn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=ps(r,1),n=ps(n,1)}return e=Ba(t,s.R(e)),new si(s,e)}for(s=Rs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=cn(n),o=i.R(e);Ut(o)||0<o.X(t);)n-=r,i=cn(n),o=i.R(e);Cn(i)&&(i=Au),s=s.add(i),t=Ba(t,o)}return new si(s,t)}D.gb=function(t){return qa(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ie(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ie(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ie(n,this.h^t.h)};function xp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ie(n,t.h)}function ps(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(s,t.h)}ja.prototype.createWebChannel=ja.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;Pc.NO_ERROR=0;Pc.TIMEOUT=8;Pc.HTTP_ERROR=6;Dy.COMPLETE="complete";Vy.EventType=mo;mo.OPEN="a";mo.CLOSE="b";mo.ERROR="c";mo.MESSAGE="d";et.prototype.listen=et.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=cn;Ie.fromString=mv;var tO=function(){return new ja},nO=function(){return Rc()},Rl=Pc,rO=Dy,sO=os,Np={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ho=Vy,iO=Ue,oO=Qt,Ps=Ie;const Dp="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Ws="10.3.0";/**
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
 */const Xr=new mh("@firebase/firestore");function Vp(){return Xr.logLevel}function H(t,...e){if(Xr.logLevel<=me.DEBUG){const n=e.map(nd);Xr.debug(`Firestore (${Ws}): ${t}`,...n)}}function Nn(t,...e){if(Xr.logLevel<=me.ERROR){const n=e.map(nd);Xr.error(`Firestore (${Ws}): ${t}`,...n)}}function Vs(t,...e){if(Xr.logLevel<=me.WARN){const n=e.map(nd);Xr.warn(`Firestore (${Ws}): ${t}`,...n)}}function nd(t){if(typeof t=="string")return t;try{/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function Ce(t,e){t||te()}function ae(t,e){return t}/**
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
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _v{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class cO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lO{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new _v(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new lt(e)}}class uO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new dO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function pO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yv{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=pO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Ms(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Qe(0,0))}static max(){return new ie(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Qi{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Qi{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const gO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Qi{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return gO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Se.fromString(e))}static fromName(e){return new G(Se.fromString(e).popFirst(5))}static empty(){return new G(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Se(e.slice()))}}function mO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new dr(s,G.empty(),e)}function _O(t){return new dr(t.readTime,t.key,-1)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(ie.min(),G.empty(),-1)}static max(){return new dr(ie.max(),G.empty(),-1)}}function yO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const vO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Eo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==vO)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Io(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}rd.ae=-1;function Mc(t){return t==null}function Ha(t){return t===0&&1/t==-1/0}function EO(t){return typeof t=="number"&&Number.isInteger(t)&&!Ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Mp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wo(this.root,e,this.comparator,!0)}}class Wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lp(this.data.getIterator())}getIteratorFrom(e){return new Lp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class Lp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new mt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class wv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wv("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const IO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=IO.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
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
 */function sd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function id(t){const e=t.mapValue.fields.__previous_value__;return sd(e)?id(e):e}function Yi(t){const e=fr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class TO{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ji{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ji&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ko={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sd(t)?4:AO(t)?9007199254740991:10:te()}function yn(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yi(t).isEqual(Yi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fr(s.timestampValue),a=fr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zr(s.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),a=qe(i.doubleValue);return o===a?Ha(o)===Ha(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ms(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Mp(o)!==Mp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!yn(o[c],a[c])))return!1;return!0}(t,e);default:return te()}}function Xi(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=qe(i.integerValue||i.doubleValue),c=qe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Up(t.timestampValue,e.timestampValue);case 4:return Up(Yi(t),Yi(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Zr(i),c=Zr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=_e(a[l],c[l]);if(u!==0)return u}return _e(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=_e(qe(i.latitude),qe(o.latitude));return a!==0?a:_e(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ls(a[l],c[l]);if(u)return u}return _e(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ko.mapValue&&o===Ko.mapValue)return 0;if(i===Ko.mapValue)return 1;if(o===Ko.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=_e(c[h],u[h]);if(d!==0)return d;const p=Ls(a[c[h]],l[u[h]]);if(p!==0)return p}return _e(c.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function Up(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=fr(t),r=fr(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Us(t){return bu(t)}function bu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bu(n.fields[o])}`;return s+"}"}(t.mapValue):te()}function Fp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ru(t){return!!t&&"integerValue"in t}function od(t){return!!t&&"arrayValue"in t}function $p(t){return!!t&&"nullValue"in t}function jp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function la(t){return!!t&&"mapValue"in t}function Ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!la(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];la(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ks(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(Ti(this.value))}}function Ev(t){const e=[];return Ks(t.fields,(n,r)=>{const s=new dt([n]);if(la(r)){const i=Ev(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
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
 */class ut{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,ie.min(),ie.min(),ie.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,ie.min(),ie.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ie.min(),ie.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wa{constructor(e,n){this.position=e,this.inclusive=n}}function Bp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ss{constructor(e,n="asc"){this.field=e,this.dir=n}}function bO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Iv{}class We extends Iv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PO(e,n,r):n==="array-contains"?new kO(e,r):n==="in"?new OO(e,r):n==="not-in"?new xO(e,r):n==="array-contains-any"?new NO(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new SO(e,r):new CO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ls(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Yt extends Iv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Yt(e,n)}matches(e){return Tv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Tv(t){return t.op==="and"}function Av(t){return RO(t)&&Tv(t)}function RO(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Pu(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(Av(t))return t.filters.map(e=>Pu(e)).join(",");{const e=t.filters.map(n=>Pu(n)).join(",");return`${t.op}(${e})`}}function bv(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&bv(o,s.filters[a]),!0):!1}(t,e):void te()}function Rv(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(Rv).join(" ,")+"}"}(t):"Filter"}class PO extends We{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class SO extends We{constructor(e,n){super(e,"in",n),this.keys=Pv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CO extends We{constructor(e,n){super(e,"not-in",n),this.keys=Pv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class kO extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return od(n)&&Xi(n.arrayValue,this.value)}}class OO extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xi(this.value.arrayValue,n)}}class xO extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xi(this.value.arrayValue,n)}}class NO extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!od(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xi(this.value.arrayValue,r))}}/**
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
 */class DO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Hp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DO(t,e,n,r,s,i,o)}function ad(t){const e=ae(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),e.he=n}return e.he}function cd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qp(t.startAt,e.startAt)&&qp(t.endAt,e.endAt)}function Su(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class zs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function VO(t,e,n,r,s,i,o,a){return new zs(t,e,n,r,s,i,o,a)}function ld(t){return new zs(t)}function Wp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ud(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Lc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Sv(t){return t.collectionGroup!==null}function Ai(t){const e=ae(t);if(e.Pe===null){e.Pe=[];const n=Lc(e),r=ud(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ss(n)),e.Pe.push(new Ss(dt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ss(dt.keyField(),i))}}}return e.Pe}function Dn(t){const e=ae(t);return e.Ie||(e.Ie=MO(e,Ai(t))),e.Ie}function MO(t,e){if(t.limitType==="F")return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ss(s.field,i)});const n=t.endAt?new Wa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wa(t.startAt.position,t.startAt.inclusive):null;return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cu(t,e){e.getFirstInequalityField(),Lc(t);const n=t.filters.concat([e]);return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ku(t,e,n){return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return cd(Dn(t),Dn(e))&&t.limitType===e.limitType}function Cv(t){return`${ad(Dn(t))}|lt:${t.limitType}`}function Ou(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Rv(s)).join(", ")}]`),Mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Us(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Us(s)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function Fc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Bp(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ai(r),s)||r.endAt&&!function(o,a,c){const l=Bp(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ai(r),s))}(t,e)}function LO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kv(t){return(e,n)=>{let r=!1;for(const s of Ai(t)){const i=UO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function UO(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ls(c,l):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class Gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ks(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vv(this.inner)}size(){return this.innerSize}}/**
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
 */const FO=new Ve(G.comparator);function Vn(){return FO}const Ov=new Ve(G.comparator);function fi(...t){let e=Ov;for(const n of t)e=e.insert(n.key,n);return e}function xv(t){let e=Ov;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Or(){return bi()}function Nv(){return bi()}function bi(){return new Gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const $O=new Ve(G.comparator),jO=new mt(G.comparator);function he(...t){let e=jO;for(const n of t)e=e.add(n);return e}const BO=new mt(_e);function qO(){return BO}/**
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
 */function Dv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ha(e)?"-0":e}}function Vv(t){return{integerValue:""+t}}function HO(t,e){return EO(e)?Vv(e):Dv(t,e)}/**
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
 */class $c{constructor(){this._=void 0}}function WO(t,e,n){return t instanceof Ka?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sd(i)&&(i=id(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Zi?Lv(t,e):t instanceof eo?Uv(t,e):function(s,i){const o=Mv(s,i),a=Kp(o)+Kp(s.Ee);return Ru(o)&&Ru(s.Ee)?Vv(a):Dv(s.serializer,a)}(t,e)}function KO(t,e,n){return t instanceof Zi?Lv(t,e):t instanceof eo?Uv(t,e):n}function Mv(t,e){return t instanceof za?function(r){return Ru(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ka extends $c{}class Zi extends $c{constructor(e){super(),this.elements=e}}function Lv(t,e){const n=Fv(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends $c{constructor(e){super(),this.elements=e}}function Uv(t,e){let n=Fv(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class za extends $c{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Kp(t){return qe(t.integerValue||t.doubleValue)}function Fv(t){return od(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function zO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?Ms(r.elements,s.elements,yn):r instanceof za&&s instanceof za?yn(r.Ee,s.Ee):r instanceof Ka&&s instanceof Ka}(t.transform,e.transform)}class GO{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function $v(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bv(t.key,pn.none()):new To(t.key,t.data,pn.none());{const n=t.data,r=Ft.empty();let s=new mt(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new as(t.key,r,new Kt(s.toArray()),pn.none())}}function QO(t,e,n){t instanceof To?function(s,i,o){const a=s.value.clone(),c=Gp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,i,o){if(!ua(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Gp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(jv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ri(t,e,n,r){return t instanceof To?function(i,o,a,c){if(!ua(i.precondition,o))return a;const l=i.value.clone(),u=Qp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof as?function(i,o,a,c){if(!ua(i.precondition,o))return a;const l=Qp(i.fieldTransforms,c,o),u=o.data;return u.setAll(jv(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ua(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function YO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Mv(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function zp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ms(r,s,(i,o)=>zO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class To extends jc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends jc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gp(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,KO(o,a,n[s]))}return r}function Qp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,WO(i,o,e))}return r}class Bv extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JO extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Nv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=$v(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Ms(this.mutations,e.mutations,(n,r)=>zp(n,r))&&Ms(this.baseMutations,e.baseMutations,(n,r)=>zp(n,r))}}class hd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return $O}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hd(e,n,r,s)}}/**
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
 */class ZO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ex{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,fe;function tx(t){switch(t){default:return te();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function qv(t){if(t===void 0)return Nn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Be.OK:return T.OK;case Be.CANCELLED:return T.CANCELLED;case Be.UNKNOWN:return T.UNKNOWN;case Be.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Be.INTERNAL:return T.INTERNAL;case Be.UNAVAILABLE:return T.UNAVAILABLE;case Be.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Be.NOT_FOUND:return T.NOT_FOUND;case Be.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Be.ABORTED:return T.ABORTED;case Be.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Be.DATA_LOSS:return T.DATA_LOSS;default:return te()}}(fe=Be||(Be={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nx(){return new TextEncoder}/**
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
 */const rx=new Ps([4294967295,4294967295],0);function Yp(t){const e=nx().encode(t),n=new oO;return n.update(e),new Uint8Array(n.digest())}function Jp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ps([n,r],0),new Ps([s,i],0)]}class dd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pi(`Invalid padding: ${n}`);if(r<0)throw new pi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pi(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Ps.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Ps.fromNumber(r)));return s.compare(rx)===1&&(s=new Ps([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Yp(e),[r,s]=Jp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new dd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Yp(e),[r,s]=Jp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bc(ie.min(),s,new Ve(_e),Vn(),he())}}class Ao{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ao(r,n,he(),he(),he())}}/**
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
 */class ha{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class Hv{constructor(e,n){this.targetId=e,this.ye=n}}class Wv{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xp{constructor(){this.we=0,this.Se=eg(),this.be=vt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=he(),n=he(),r=he();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new Ao(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=eg()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class sx{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Vn(),this.Ue=Zp(),this.We=new Ve(_e)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Su(i))if(r===0){const o=new G(i.path);this.je(n,o,ut.newNoDocument(o,ie.min()))}else Ce(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Zr(r).toUint8Array()}catch(c){if(c instanceof wv)return Vs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new dd(o,s,i)}catch(c){return Vs(c instanceof pi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Su(a.target)){const c=new G(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,ut.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=he();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Bc(e,n,this.We,this.$e,r);return this.$e=Vn(),this.Ue=Zp(),this.We=new Ve(_e),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Xp,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new mt(_e),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Xp),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Zp(){return new Ve(G.comparator)}function eg(){return new Ve(G.comparator)}const ix=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ox=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ax=(()=>({and:"AND",or:"OR"}))();class cx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xu(t,e){return t.useProto3Json||Mc(e)?e:{value:e}}function Ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lx(t,e){return Ga(t,e.toTimestamp())}function gn(t){return Ce(!!t),ie.fromTimestamp(function(n){const r=fr(n);return new Qe(r.seconds,r.nanos)}(t))}function fd(t,e){return function(r){return new Se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function zv(t){const e=Se.fromString(t);return Ce(Jv(e)),e}function Nu(t,e){return fd(t.databaseId,e.path)}function Pl(t,e){const n=zv(e);if(n.get(1)!==t.databaseId.projectId)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Gv(n))}function Du(t,e){return fd(t.databaseId,e)}function ux(t){const e=zv(t);return e.length===4?Se.emptyPath():Gv(e)}function Vu(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gv(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tg(t,e,n){return{name:Nu(t,e),fields:n.value.mapValue.fields}}function hx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ce(u===void 0||typeof u=="string"),vt.fromBase64String(u||"")):(Ce(u===void 0||u instanceof Uint8Array),vt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:qv(l.code);return new $(u,l.message||"")}(o);n=new Wv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pl(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):ie.min(),a=new Ft({mapValue:{fields:r.document.fields}}),c=ut.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ha(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pl(t,r.document),i=r.readTime?gn(r.readTime):ie.min(),o=ut.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pl(t,r.document),i=r.removedTargetIds||[];n=new ha([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ex(s,i),a=r.targetId;n=new Hv(a,o)}}return n}function dx(t,e){let n;if(e instanceof To)n={update:tg(t,e.key,e.value)};else if(e instanceof Bv)n={delete:Nu(t,e.key)};else if(e instanceof as)n={update:tg(t,e.key,e.data),updateMask:Ex(e.fieldMask)};else{if(!(e instanceof JO))return te();n={verify:Nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ka)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof za)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:lx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function fx(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(ie.min())&&(o=gn(i)),new GO(o,s.transformResults||[])}(n,e))):[]}function px(t,e){return{documents:[Du(t,e.path)]}}function gx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Du(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Du(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Yv(Yt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:ys(h.field),direction:yx(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=xu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function mx(t){let e=ux(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Qv(h);return d instanceof Yt&&Av(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Ss(vs(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Mc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Wa(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new Wa(p,d)}(n.endAt)),VO(e,s,o,i,a,"F",c,l)}function _x(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return We.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>Qv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function yx(t){return ix[t]}function vx(t){return ox[t]}function wx(t){return ax[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return dt.fromServerFormat(t.fieldPath)}function Yv(t){return t instanceof We?function(n){if(n.op==="=="){if(jp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if($p(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if($p(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:vx(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(s=>Yv(s));return r.length===1?r[0]:{compositeFilter:{op:wx(n.op),filters:r}}}(t):te()}function Ex(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=ie.min(),o=ie.min(),a=vt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ix{constructor(e){this.ht=e}}function Tx(t){const e=mx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ku(e,e.limit,"L"):e}/**
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
 */class Ax{constructor(){this._n=new bx}addToCollectionParentIndex(e,n){return this._n.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(dr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class bx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new mt(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new mt(Se.comparator)).toArray()}}/**
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
 */class Fs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Fs(0)}static Bn(){return new Fs(-1)}}/**
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
 */class Rx{constructor(){this.changes=new Gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Px{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Sx{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ri(r.mutation,s,Kt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=Or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=fi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Vn();const o=bi(),a=function(){return bi()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof as)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ri(u.mutation,l,u.mutation.getFieldMask(),Qe.now())):o.set(l.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Px(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=bi();let s=new Ve((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Kt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||he()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Nv();u.forEach(d=>{if(!i.has(d)){const p=$v(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return G.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(Or());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,he())).next(u=>({batchId:a,changes:xv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=fi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=fi();return this.indexManager.getCollectionParents(e,s).next(o=>R.forEach(o,a=>{const c=function(u,h){return new zs(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ut.newInvalidDocument(l)))});let o=fi();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Ri(l.mutation,c,Kt.empty(),Qe.now()),Fc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Cx{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return R.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Tx(s.bundledQuery),readTime:gn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class kx{constructor(){this.overlays=new Ve(G.comparator),this.hr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Or();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=Or(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Or(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Or(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZO(n,r));let i=this.hr.get(n);i===void 0&&(i=he(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class pd{constructor(){this.Pr=new mt(Je.Ir),this.Tr=new mt(Je.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Je(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new Se([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new Se([])),r=new Je(n,e),s=new Je(n,e+1);let i=he();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||_e(e.pr,n.pr)}static Er(e,n){return _e(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class Ox{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new mt(Je.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(_e);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Je(new G(i),0);let a=new mt(_e);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),R.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Je(n,0),s=this.wr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xx{constructor(e){this.Cr=e,this.docs=function(){return new Ve(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vn();const o=n.path,a=new G(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||yO(_O(u),r)<=0||(s.has(u.key)||Fc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te()}Fr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Nx(this)}getSize(e){return R.resolve(this.size)}}class Nx extends Rx{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Dx{constructor(e){this.persistence=e,this.Mr=new Gs(n=>ad(n),cd),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Or=0,this.Nr=new pd,this.targetCount=0,this.Br=Fs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),R.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.qn(n),R.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Nr.containsKey(n))}}/**
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
 */class Vx{constructor(e,n){this.Lr={},this.overlays={},this.kr=new rd(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Dx(this),this.indexManager=new Ax,this.remoteDocumentCache=function(s){return new xx(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Ix(n),this.$r=new Cx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Ox(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new Mx(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return R.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Mx extends wO{constructor(e){super(),this.currentSequenceNumber=e}}class gd{constructor(e){this.persistence=e,this.zr=new pd,this.jr=null}static Hr(e){return new gd(e)}get Jr(){if(this.jr)return this.jr;throw te()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const s=G.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ie.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return R.or([()=>R.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class md{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new md(e,n.fromCache,r,s)}}/**
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
 */class Lx{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Wi(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.zi(e,n))}Wi(e,n){if(Wp(n))return R.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ku(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ji(n,a);return this.Hi(n,l,o,c.readTime)?this.Wi(e,ku(n,null,"F")):this.Ji(e,l,n,c)}))})))}Gi(e,n,r,s){return Wp(n)||s.isEqual(ie.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.Hi(n,o,r,s)?this.zi(e,n):(Vp()<=me.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ou(n)),this.Ji(e,o,n,mO(s,-1)))})}ji(e,n){let r=new mt(kv(e));return n.forEach((s,i)=>{Fc(e,i)&&(r=r.add(i))}),r}Hi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}zi(e,n){return Vp()<=me.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ou(n)),this.Ui.getDocumentsMatchingQuery(e,n,dr.min())}Ji(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Ux{constructor(e,n,r,s){this.persistence=e,this.Yi=n,this.serializer=s,this.Zi=new Ve(_e),this.Xi=new Gs(i=>ad(i),cd),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sx(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function Fx(t,e,n,r){return new Ux(t,e,n,r)}async function Xv(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=he();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({rs:l,removedBatchIds:o,addedBatchIds:a}))})})}function $x(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=R.resolve();return d.forEach(_=>{p=p.next(()=>u.getEntry(c,_)).next(I=>{const w=l.docVersions.get(_);Ce(w!==null),I.version.compareTo(w)<0&&(h.applyToRemoteDocument(I,l),I.isValidDocument()&&(I.setReadTime(l.commitVersion),u.addEntry(I)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=he();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Zv(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function jx(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});s=n.Zi;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(vt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(I,w,b){return I.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let c=Vn(),l=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Bx(i,o,e.documentUpdates).next(u=>{c=u.ss,l=u.os})),!r.isEqual(ie.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Zi=s,i))}function Bx(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Vn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ss:o,os:s}})}function qx(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Hx(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Zi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Mu(t,e,n){const r=ae(t),s=r.Zi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Io(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(s.target)}function ng(t,e,n){const r=ae(t);let s=ie.min(),i=he();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=ae(c),d=h.Xi.get(u);return d!==void 0?R.resolve(h.Zi.get(d)):h.Qr.getTargetData(l,u)}(r,o,Dn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:he())).next(a=>(Wx(r,LO(e),a),{documents:a,_s:i})))}function Wx(t,e,n){let r=t.es.get(e)||ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.es.set(e,r)}class rg{constructor(){this.activeTargetIds=qO()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kx{constructor(){this.Ys=new rg,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new rg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zx{Xs(e){}shutdown(){}}/**
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
 */class sg{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zo=null;function Sl(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
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
 */const Gx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Qx{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
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
 */const at="WebChannelConnection";class Yx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${s}/databases/${i}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get mo(){return!1}fo(n,r,s,i,o){const a=Sl(),c=this.po(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(l,i,o),this.wo(n,c,l,s).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Vs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}So(n,r,s,i,o,a){return this.fo(n,r,s,i,o)}yo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ws}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}po(n,r){const s=Gx[n];return`${this.Ao}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,s){const i=Sl();return new Promise((o,a)=>{const c=new iO;c.setWithCredentials(!0),c.listenOnce(rO.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Rl.NO_ERROR:const u=c.getResponseJson();H(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Rl.TIMEOUT:H(at,`RPC '${e}' ${i} timed out`),a(new $(T.DEADLINE_EXCEEDED,"Request time out"));break;case Rl.HTTP_ERROR:const h=c.getStatus();if(H(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(w){const b=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(b)>=0?b:T.UNKNOWN}(p.status);a(new $(_,p.message))}else a(new $(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(T.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{H(at,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);H(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}bo(e,n,r){const s=Sl(),i=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tO(),a=nO(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.yo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");H(at,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const _=new Qx({_o:w=>{p?H(at,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(d||(H(at,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),H(at,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},ao:()=>h.close()}),I=(w,b,x)=>{w.listen(b,k=>{try{x(k)}catch(K){setTimeout(()=>{throw K},0)}})};return I(h,Ho.EventType.OPEN,()=>{p||H(at,`RPC '${e}' stream ${s} transport opened.`)}),I(h,Ho.EventType.CLOSE,()=>{p||(p=!0,H(at,`RPC '${e}' stream ${s} transport closed`),_.To())}),I(h,Ho.EventType.ERROR,w=>{p||(p=!0,Vs(at,`RPC '${e}' stream ${s} transport errored:`,w),_.To(new $(T.UNAVAILABLE,"The operation could not be completed")))}),I(h,Ho.EventType.MESSAGE,w=>{var b;if(!p){const x=w.data[0];Ce(!!x);const k=x,K=k.error||((b=k[0])===null||b===void 0?void 0:b.error);if(K){H(at,`RPC '${e}' stream ${s} received error:`,K);const U=K.status;let ge=function(Ee){const F=Be[Ee];if(F!==void 0)return qv(F)}(U),B=K.message;ge===void 0&&(ge=T.INTERNAL,B="Unknown error status: "+U+" with message "+K.message),p=!0,_.To(new $(ge,B)),h.close()}else H(at,`RPC '${e}' stream ${s} received:`,x),_.Eo(x)}}),I(a,sO.STAT_EVENT,w=>{w.stat===Np.PROXY?H(at,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===Np.NOPROXY&&H(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Io()},0),_}}function Cl(){return typeof document<"u"?document:null}/**
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
 */function qc(t){return new cx(t,!0)}/**
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
 */class ew{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=s,this.Co=i,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
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
 */class tw{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.ko=r,this.qo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new ew(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Qo===n&&this.n_(r,s)},r=>{e(()=>{const s=new $(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(s)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(s=>{r(()=>this.r_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jx extends tw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=hx(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?gn(o.readTime):ie.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Vu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Su(c)?{documents:px(i,c)}:{query:gx(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Kv(i,o.resumeToken);const l=xu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=Ga(i,o.snapshotVersion.toTimestamp());const l=xu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=_x(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Vu(this.serializer),n.removeTarget=e,this.Yo(n)}}class Xx extends tw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=fx(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.l_(r,n)}return Ce(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Vu(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dx(this.serializer,r))};this.Yo(n)}}/**
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
 */class Zx extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.I_=!1}T_(){if(this.I_)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.fo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(T.UNKNOWN,s.toString())})}So(e,n,r,s){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(T.UNKNOWN,i.toString())})}terminate(){this.I_=!0}}class e1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Nn(n),this.R_=!1):H("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
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
 */class t1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=i,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{cs(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ae(c);l.S_.add(4),await bo(l),l.v_.set("Unknown"),l.S_.delete(4),await Hc(l)}(this))})}),this.v_=new e1(r,s)}}async function Hc(t){if(cs(t))for(const e of t.b_)await e(!0)}async function bo(t){for(const e of t.b_)await e(!1)}function nw(t,e){const n=ae(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),vd(n)?yd(n):Qs(n).Go()&&_d(n,e))}function rw(t,e){const n=ae(t),r=Qs(n);n.w_.delete(e),r.Go()&&sw(n,e),n.w_.size===0&&(r.Go()?r.Ho():cs(n)&&n.v_.set("Unknown"))}function _d(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).o_(e)}function sw(t,e){t.C_.Le(e),Qs(t).__(e)}function yd(t){t.C_=new sx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.v_.V_()}function vd(t){return cs(t)&&!Qs(t).Wo()&&t.w_.size>0}function cs(t){return ae(t).S_.size===0}function iw(t){t.C_=void 0}async function n1(t){t.w_.forEach((e,n)=>{_d(t,e)})}async function r1(t,e){iw(t),vd(t)?(t.v_.g_(e),yd(t)):t.v_.set("Unknown")}async function s1(t,e,n){if(t.v_.set("Online"),e instanceof Wv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.w_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.w_.delete(a),s.C_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qa(t,r)}else if(e instanceof ha?t.C_.Ge(e):e instanceof Hv?t.C_.Xe(e):t.C_.He(e),!n.isEqual(ie.min()))try{const r=await Zv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.C_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.w_.get(l);u&&i.w_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.w_.get(c);if(!u)return;i.w_.set(c,u.withResumeToken(vt.EMPTY_BYTE_STRING,u.snapshotVersion)),sw(i,c);const h=new er(u.target,c,l,u.sequenceNumber);_d(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Qa(t,r)}}async function Qa(t,e,n){if(!Io(e))throw e;t.S_.add(1),await bo(t),t.v_.set("Offline"),n||(n=()=>Zv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Hc(t)})}function ow(t,e){return e().catch(n=>Qa(t,n,e))}async function Wc(t){const e=ae(t),n=pr(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;i1(e);)try{const s=await qx(e.localStore,r);if(s===null){e.y_.length===0&&n.Ho();break}r=s.batchId,o1(e,s)}catch(s){await Qa(e,s)}aw(e)&&cw(e)}function i1(t){return cs(t)&&t.y_.length<10}function o1(t,e){t.y_.push(e);const n=pr(t);n.Go()&&n.u_&&n.c_(e.mutations)}function aw(t){return cs(t)&&!pr(t).Wo()&&t.y_.length>0}function cw(t){pr(t).start()}async function a1(t){pr(t).P_()}async function c1(t){const e=pr(t);for(const n of t.y_)e.c_(n.mutations)}async function l1(t,e,n){const r=t.y_.shift(),s=hd.from(r,e,n);await ow(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wc(t)}async function u1(t,e){e&&pr(t).u_&&await async function(r,s){if(function(o){return tx(o)&&o!==T.ABORTED}(s.code)){const i=r.y_.shift();pr(r).jo(),await ow(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wc(r)}}(t,e),aw(t)&&cw(t)}async function ig(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=cs(n);n.S_.add(3),await bo(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Hc(n)}async function h1(t,e){const n=ae(t);e?(n.S_.delete(2),await Hc(n)):e||(n.S_.add(2),await bo(n),n.v_.set("Unknown"))}function Qs(t){return t.F_||(t.F_=function(n,r,s){const i=ae(n);return i.T_(),new Jx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:n1.bind(null,t),lo:r1.bind(null,t),s_:s1.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),vd(t)?yd(t):t.v_.set("Unknown")):(await t.F_.stop(),iw(t))})),t.F_}function pr(t){return t.M_||(t.M_=function(n,r,s){const i=ae(n);return i.T_(),new Xx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:a1.bind(null,t),lo:u1.bind(null,t),h_:c1.bind(null,t),l_:l1.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await Wc(t)):(await t.M_.stop(),t.y_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
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
 */class wd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new wd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ed(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),Io(t))return new $(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=fi(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class og{constructor(){this.x_=new Ve(G.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):te():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class $s{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $s(e,n,Cs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class d1{constructor(){this.N_=void 0,this.listeners=[]}}class f1{constructor(){this.queries=new Gs(e=>Cv(e),Uc),this.onlineState="Unknown",this.B_=new Set}}async function p1(t,e){const n=ae(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new d1),s)try{i.N_=await n.onListen(r)}catch(o){const a=Ed(o,`Initialization of query '${Ou(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.L_(n.onlineState),i.N_&&e.k_(i.N_)&&Id(n)}async function g1(t,e){const n=ae(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function m1(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.k_(s)&&(r=!0);o.N_=s}}r&&Id(n)}function _1(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Id(t){t.B_.forEach(e=>{e.next()})}class y1{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=$s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
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
 */class lw{constructor(e){this.key=e}}class uw{constructor(e){this.key=e}}class v1{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=he(),this.mutatedKeys=he(),this.ia=kv(e),this.sa=new Cs(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new og,s=n?n.sa:this.sa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Fc(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?_!==I&&(r.track({type:3,doc:p}),w=!0):this.ua(d,p)||(r.track({type:2,doc:p}),w=!0,(c&&this.ia(p,c)>0||l&&this.ia(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{sa:o,aa:r,Hi:a,mutatedKeys:i}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const i=e.aa.O_();i.sort((l,u)=>function(d,p){const _=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return _(d)-_(p)}(l.type,u.type)||this.ia(l.doc,u.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,c=a!==this.na;return this.na=a,i.length!==0||c?{snapshot:new $s(this.query,e.sa,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new og,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=he(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new uw(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new lw(r))}),n}Ia(e){this.ta=e._s,this.ra=he();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return $s.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class w1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class E1{constructor(e){this.key=e,this.Ea=!1}}class I1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new Gs(a=>Cv(a),Uc),this.Ra=new Map,this.Va=new Set,this.ma=new Ve(G.comparator),this.fa=new Map,this.ga=new pd,this.pa={},this.ya=new Map,this.wa=Fs.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function T1(t,e){const n=N1(t);let r,s;const i=n.Aa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ta();else{const o=await Hx(n.localStore,Dn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await A1(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&nw(n.remoteStore,o)}return s}async function A1(t,e,n,r,s){t.ba=(h,d,p)=>async function(I,w,b,x){let k=w.view._a(b);k.Hi&&(k=await ng(I.localStore,w.query,!1).then(({documents:ge})=>w.view._a(ge,k)));const K=x&&x.targetChanges.get(w.targetId),U=w.view.applyChanges(k,I.isPrimaryClient,K);return cg(I,w.targetId,U.ha),U.snapshot}(t,h,d,p);const i=await ng(t.localStore,e,!0),o=new v1(e,i._s),a=o._a(i.documents),c=Ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);cg(t,n,l.ha);const u=new w1(e,n,o);return t.Aa.set(e,u),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),l.snapshot}async function b1(t,e){const n=ae(t),r=n.Aa.get(e),s=n.Ra.get(r.targetId);if(s.length>1)return n.Ra.set(r.targetId,s.filter(i=>!Uc(i,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Mu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),rw(n.remoteStore,r.targetId),Lu(n,r.targetId)}).catch(Eo)):(Lu(n,r.targetId),await Mu(n.localStore,r.targetId,!0))}async function R1(t,e,n){const r=D1(t);try{const s=await function(o,a){const c=ae(o),l=Qe.now(),u=a.reduce((p,_)=>p.add(_.key),he());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=Vn(),I=he();return c.ts.getEntries(p,u).next(w=>{_=w,_.forEach((b,x)=>{x.isValidDocument()||(I=I.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,_)).next(w=>{h=w;const b=[];for(const x of a){const k=YO(x,h.get(x.key).overlayedDocument);k!=null&&b.push(new as(x.key,k,Ev(k.value.mapValue),pn.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,b,a)}).next(w=>{d=w;const b=w.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(p,w.batchId,b)})}).then(()=>({batchId:d.batchId,changes:xv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.pa[o.currentUser.toKey()];l||(l=new Ve(_e)),l=l.insert(a,c),o.pa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ro(r,s.changes),await Wc(r.remoteStore)}catch(s){const i=Ed(s,"Failed to persist write");n.reject(i)}}async function hw(t,e){const n=ae(t);try{const r=await jx(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fa.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ea=!0:s.modifiedDocuments.size>0?Ce(o.Ea):s.removedDocuments.size>0&&(Ce(o.Ea),o.Ea=!1))}),await Ro(n,r,e)}catch(r){await Eo(r)}}function ag(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Aa.forEach((i,o)=>{const a=o.view.L_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.L_(a)&&(l=!0)}),l&&Id(c)}(r.eventManager,e),s.length&&r.da.s_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function P1(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fa.get(e),i=s&&s.key;if(i){let o=new Ve(G.comparator);o=o.insert(i,ut.newNoDocument(i,ie.min()));const a=he().add(i),c=new Bc(ie.min(),new Map,new Ve(_e),o,a);await hw(r,c),r.ma=r.ma.remove(i),r.fa.delete(e),Td(r)}else await Mu(r.localStore,e,!1).then(()=>Lu(r,e,n)).catch(Eo)}async function S1(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await $x(n.localStore,e);fw(n,r,null),dw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,s)}catch(s){await Eo(s)}}async function C1(t,e,n){const r=ae(t);try{const s=await function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ce(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);fw(r,e,n),dw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,s)}catch(s){await Eo(s)}}function dw(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function fw(t,e,n){const r=ae(t);let s=r.pa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pa[r.currentUser.toKey()]=s}}function Lu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||pw(t,r)})}function pw(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(rw(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),Td(t))}function cg(t,e,n){for(const r of n)r instanceof lw?(t.ga.addReference(r.key,e),k1(t,r)):r instanceof uw?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||pw(t,r.key)):te()}function k1(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Va.add(r),Td(t))}function Td(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new G(Se.fromString(e)),r=t.wa.next();t.fa.set(r,new E1(n)),t.ma=t.ma.insert(n,r),nw(t.remoteStore,new er(Dn(ld(n.path)),r,"TargetPurposeLimboResolution",rd.ae))}}async function Ro(t,e,n){const r=ae(t),s=[],i=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,c)=>{o.push(r.ba(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=md.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.da.s_(s),await async function(c,l){const u=ae(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Io(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.Zi.get(d),_=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(_);u.Zi=u.Zi.insert(d,I)}}}(r.localStore,i))}async function O1(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Xv(n.localStore,e);n.currentUser=e,function(i,o){i.ya.forEach(a=>{a.forEach(c=>{c.reject(new $(T.CANCELLED,o))})}),i.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.rs)}}function x1(t,e){const n=ae(t),r=n.fa.get(e);if(r&&r.Ea)return he().add(r.key);{let s=he();const i=n.Ra.get(e);if(!i)return s;for(const o of i){const a=n.Aa.get(o);s=s.unionWith(a.view.oa)}return s}}function N1(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=x1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=P1.bind(null,e),e.da.s_=m1.bind(null,e.eventManager),e.da.Da=_1.bind(null,e.eventManager),e}function D1(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=S1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C1.bind(null,e),e}class lg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Fx(this.persistence,new Lx,e.initialUser,this.serializer)}createPersistence(e){return new Vx(gd.Hr,this.serializer)}createSharedClientState(e){return new Kx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class V1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ag(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=O1.bind(null,this.syncEngine),await h1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new f1}()}createDatastore(e){const n=qc(e.databaseInfo.databaseId),r=function(i){return new Yx(i)}(e.databaseInfo);return function(i,o,a,c){return new Zx(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new t1(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ag(this.syncEngine,n,0),function(){return sg.v()?new sg:new zx}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new I1(s,i,o,a,c,l);return u&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ae(n);H("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await bo(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */class M1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class L1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=yv.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ed(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kl(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Xv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ug(t,e){t.asyncQueue.verifyOperationInProgress();const n=await F1(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>ig(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>ig(e.remoteStore,i)),t._onlineComponents=e}function U1(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function F1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await kl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!U1(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await kl(t,new lg)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await kl(t,new lg);return t._offlineComponents}async function gw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await ug(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await ug(t,new V1))),t._onlineComponents}function $1(t){return gw(t).then(e=>e.syncEngine)}async function hg(t){const e=await gw(t),n=e.eventManager;return n.onListen=T1.bind(null,e.syncEngine),n.onUnlisten=b1.bind(null,e.syncEngine),n}/**
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
 */function mw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dg=new Map;/**
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
 */function _w(t,e,n){if(!n)throw new $(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function j1(t,e,n,r){if(e===!0&&r===!0)throw new $(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fg(t){if(!G.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pg(t){if(G.isDocumentKey(t))throw new $(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Br(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kc(t);throw new $(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class gg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}j1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aO;switch(r.type){case"firstParty":return new hO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dg.get(n);r&&(H("ComponentProvider","Removing Datastore"),dg.delete(n),r.terminate())}(this),Promise.resolve()}}function B1(t,e,n,r={}){var s;const i=(t=Br(t,zc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=lt.MOCK_USER;else{a=d_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new lt(l)}t._authCredentials=new cO(new _v(a,c))}}/**
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
 */class ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class ir extends ls{constructor(e,n,r){super(e,n,ld(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new G(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Po(t,e,...n){if(t=Ye(t),_w("collection","path",e),t instanceof zc){const r=Se.fromString(e,...n);return pg(r),new ir(t,null,r)}{if(!(t instanceof Ct||t instanceof ir))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return pg(r),new ir(t.firestore,null,r)}}function yw(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=yv.V()),_w("doc","path",e),t instanceof zc){const r=Se.fromString(e,...n);return fg(r),new Ct(t,null,new G(r))}{if(!(t instanceof Ct||t instanceof ir))throw new $(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return fg(r),new Ct(t.firestore,t instanceof ir?t.converter:null,new G(r))}}/**
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
 */class q1{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new ew(this,"async_queue_retry"),this.tu=()=>{const n=Cl();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=Cl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=Cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new jr;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!Io(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const s=wd.createAndSchedule(this,e,n,r,i=>this.su(i));return this.Ja.push(s),s}nu(){this.Ya&&te()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function mg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class to extends zc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new q1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ww(this),this._firestoreClient.terminate()}}function H1(t,e){const n=typeof t=="object"?t:yh(),r=typeof t=="string"?t:e||"(default)",s=gc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=l_("firestore");i&&B1(s,...i)}return s}function vw(t){return t._firestoreClient||ww(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ww(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new TO(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,mw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new L1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(vt.fromBase64String(e))}catch(n){throw new $(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ad{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const W1=/^__.*__$/;class K1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}function Iw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Rd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.cu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new Rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.Tu(e),s}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.hu({path:r,Iu:!1});return s.cu(),s}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return Ya(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(Iw(this.lu)&&W1.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class z1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qc(e)}mu(e,n,r,s=!1){return new Rd({lu:e,methodName:n,Vu:r,path:dt.emptyPath(),Iu:!1,Ru:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pd(t){const e=t._freezeSettings(),n=qc(t._databaseId);return new z1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tw(t,e,n,r,s,i={}){const o=t.mu(i.merge||i.mergeFields?2:0,e,n,s);Rw("Data must be an object, but it was:",o,r);const a=Aw(r,o);let c,l;if(i.merge)c=new Kt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Q1(e,h,n);if(!o.contains(d))throw new $(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);J1(u,d)||u.push(d)}c=new Kt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new K1(new Ft(a),c,l)}function G1(t,e,n,r=!1){return Sd(n,t.mu(r?4:3,e))}function Sd(t,e){if(bw(t=Ye(t)))return Rw("Unsupported field value:",e,t),Aw(t,e);if(t instanceof Ew)return function(r,s){if(!Iw(s.lu))throw s.Au(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Au(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Sd(a,s.du(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:Ga(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ga(s.serializer,i)}}if(r instanceof bd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:Kv(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fd(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Au(`Unsupported field value: ${Kc(r)}`)}(t,e)}function Aw(t,e){const n={};return vv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ks(t,(r,s)=>{const i=Sd(s,e.Pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function bw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof bd||t instanceof js||t instanceof Ct||t instanceof Ew)}function Rw(t,e,n){if(!bw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Kc(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function Q1(t,e,n){if((e=Ye(e))instanceof Ad)return e._internalPath;if(typeof e=="string")return Pw(t,e);throw Ya("Field path arguments must be of type string or ",t,!1,void 0,n)}const Y1=new RegExp("[~\\*/\\[\\]]");function Pw(t,e,n){if(e.search(Y1)>=0)throw Ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ad(...e.split("."))._internalPath}catch{throw Ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ya(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(T.INVALID_ARGUMENT,a+t+c)}function J1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Sw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class X1 extends Sw{data(){return super.data()}}function Gc(t,e){return typeof e=="string"?Pw(t,e):e instanceof Ad?e._internalPath:e._delegate._internalPath}/**
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
 */function Z1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cd{}class Cw extends Cd{}function kw(t,e,...n){let r=[];e instanceof Cd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof kd).length,a=i.filter(c=>c instanceof Qc).length;if(o>1||o>0&&a>0)throw new $(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Qc extends Cw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Qc(e,n,r)}_apply(e){const n=this._parse(e);return Ow(e._query,n),new ls(e.firestore,e.converter,Cu(e._query,n))}_parse(e){const n=Pd(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){yg(h,u);const p=[];for(const _ of h)p.push(_g(c,i,_));d={arrayValue:{values:p}}}else d=_g(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||yg(h,u),d=G1(a,o,h,u==="in"||u==="not-in");return We.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function eN(t,e,n){const r=e,s=Gc("where",t);return Qc._create(s,r,n)}class kd extends Cd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Ow(o,c),o=Cu(o,c)}(e._query,n),new ls(e.firestore,e.converter,Cu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Od extends Cw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Od(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ss(i,o);return function(l,u){if(ud(l)===null){const h=Lc(l);h!==null&&xw(l,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new ls(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new zs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function tN(t,e="asc"){const n=e,r=Gc("orderBy",t);return Od._create(r,n)}function _g(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new $(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sv(e)&&n.indexOf("/")!==-1)throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!G.isDocumentKey(r))throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fp(t,new G(r))}if(n instanceof Ct)return Fp(t,n._key);throw new $(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kc(n)}.`)}function yg(t,e){if(!Array.isArray(t)||t.length===0)throw new $(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ow(t,e){if(e.isInequality()){const r=Lc(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new $(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=ud(t);i!==null&&xw(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xw(t,e,n){if(!n.isEqual(e))throw new $(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class nN{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ks(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new bd(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=id(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){const n=fr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Ce(Jv(r));const s=new Ji(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dw extends Sw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class da extends Dw{data(e={}){return super.data(e)}}class rN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new da(this._firestore,this._userDataWriter,r.key,r,new gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new da(s._firestore,s._userDataWriter,a.doc.key,a.doc,new gi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new da(s._firestore,s._userDataWriter,a.doc.key,a.doc,new gi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:sN(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class Vw extends nN{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function iN(t,e,n){t=Br(t,Ct);const r=Br(t.firestore,to),s=Nw(t.converter,e,n);return Lw(r,[Tw(Pd(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,pn.none())])}function Mw(t,e){const n=Br(t.firestore,to),r=yw(t),s=Nw(t.converter,e);return Lw(n,[Tw(Pd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function xd(t,...e){var n,r,s;t=Ye(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||mg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(mg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof Ct)l=Br(t.firestore,to),u=ld(t._key.path),c={next:h=>{e[o]&&e[o](oN(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Br(t,ls);l=Br(h.firestore,to),u=h._query;const d=new Vw(l);c={next:p=>{e[o]&&e[o](new rN(l,d,h,p))},error:e[o+1],complete:e[o+2]},Z1(t._query)}return function(d,p,_,I){const w=new M1(I),b=new y1(p,w,_);return d.asyncQueue.enqueueAndForget(async()=>p1(await hg(d),b)),()=>{w.Ma(),d.asyncQueue.enqueueAndForget(async()=>g1(await hg(d),b))}}(vw(l),u,a,c)}function Lw(t,e){return function(r,s){const i=new jr;return r.asyncQueue.enqueueAndForget(async()=>R1(await $1(r),s,i)),i.promise}(vw(t),e)}function oN(t,e,n){const r=n.docs.get(e._key),s=new Vw(t);return new Dw(t,s,e._key,r,new gi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ws=s})(ss),Gr(new hr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new to(new lO(r.getProvider("auth-internal")),new fO(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),hn(Dp,"4.1.2",e),hn(Dp,"4.1.2","esm2017")})();const Ys=H1(vc),Nd=(t,e)=>{const n=yw(Ys,"users",t);return iN(n,e,{merge:!0})},aN=async t=>{const e=Po(Ys,"chats");return(await Mw(e,{participants:t,updatedAt:new Date,createdAt:new Date})).id},cN=async(t,e)=>{const n=Po(Ys,"chats",t,"messages"),r=Ke.currentUser;if(!r)throw new Error("User not found in sendMessage");return await Mw(n,{chatId:t,senderId:r.uid,content:e,createdAt:new Date})},lN=t=>{const e=Po(Ys,"users");return xd(e,r=>{const s=r.docs.map(i=>({id:i.id,...i.data()}));t(s)})},uN=t=>{const e=Ke.currentUser;if(!e)throw new Error("User not found in sendMessage");const n=Po(Ys,"chats"),r=kw(n,eN("participants","array-contains",e.uid));return xd(r,i=>{const o=i.docs.map(a=>({id:a.id,...a.data()}));t(o)})},hN=(t,e)=>{const n=Po(Ys,"chats",t,"messages"),r=kw(n,tN("createdAt","asc"));return xd(r,i=>{const o=i.metadata.fromCache?"local":"server",a=i.docs.map(c=>({id:c.id,...c.data()}));e({messages:a,source:o})})},Ke=J_(vc),dN=t=>Ke.onAuthStateChanged(t),fN=new bn,pN=()=>FP(Ke,fN),gN=(t,e)=>gP(Ke,t,e),mN=(t,e,n,r)=>pP(Ke,t,e).then(async s=>{const i=s.user;let o;return r&&await ek(r,i.uid).then(a=>{o=a}).catch(a=>{console.log("error handled here",a)}),await Promise.all([F_(i,{displayName:n,photoURL:o}),Nd(i.uid,n)]),{user:i,error:null}}).catch(s=>{const i=s.code,o=s.message;return console.log("Error occurred in register",i,o),{user:null,error:{errorCode:i,errorMessage:o}}}),_N=()=>Ke.signOut(),Yc="/assets/profile-icon-37af14f3.png",yN={class:"flex justify-between items-center bg-primary text-onLight p-2 m-2 rounded-lg"},vN={class:"flex justify-start items-center gap-2"},wN=["src"],EN={class:"text-xl"},IN=tt({__name:"ProfileSection",props:{user:{type:Object,required:!0}},setup(t){return(e,n)=>{const r=PI("RouterLink");return oe(),ve("div",yN,[J("div",vN,[J("img",{src:e.user.photoURL?e.user.photoURL:De(Yc),alt:"Profile",class:"w-16 aspect-square object-cover rounded-full",referrerpolicy:"no-referrer"},null,8,wN),J("h1",EN,Hr(e.user.displayName),1)]),Ze(r,{to:"/settings",class:"bg-primary text-onLight p-2 rounded-lg"},{default:ac(()=>[rh("Settings")]),_:1})])}}}),TN=wt(IN,[["__file","/home/luuk/code/realtime-chat/src/components/ProfileSection.vue"]]),Uw=dh("users",()=>{const t=xe([]);return lN(e=>{t.value=e}),{users:t}}),Jc=dh("chats",()=>{const t=xe([]),e=new Set,n=i=>e.has(i),r=i=>{e.has(i)||(hN(i,({messages:o,source:a})=>{a!=="local"&&(t.value=t.value.map(c=>(c.id===i&&(c.messages=o),c)))}),e.add(i))};uN(i=>{t.value=i,i.forEach(o=>r(o.id))});const s=$e(()=>{const i=new Set;return t.value.forEach(o=>{o.participants.forEach(a=>{var c;a!==((c=Ke.currentUser)==null?void 0:c.uid)&&i.add(a)})}),i});return{chats:t,contacts:s,isSubscribed:n,subscribe:r}}),AN=["src"],bN={class:"flex flex-col gap-2"},RN=tt({__name:"UserCard",props:{user:{type:Object,required:!0}},setup(t){const n=t.user,r=async()=>{var i;if(!Ke.currentUser)return;const s=await aN([n.id,(i=Ke.currentUser)==null?void 0:i.uid]);ts.push(`/${s}`)};return(s,i)=>(oe(),ve("button",{onClick:r,class:"flex gap-4 p-4 rounded-lg items-center bg-surface-200"},[J("img",{src:De(n).photoURL?De(n).photoURL:De(Yc),alt:"Profile",height:"64",width:"64",class:"w-16 aspect-square rounded-full object-cover",referrerpolicy:"no-referrer"},null,8,AN),J("div",bN,[J("h2",null,Hr(De(n).displayName),1)])]))}}),PN=wt(RN,[["__file","/home/luuk/code/realtime-chat/src/components/userCard/UserCard.vue"]]),SN=["src"],CN={class:"flex flex-col gap-[2px]"},kN={class:"text-lg text-onDark"},ON={key:0,class:"text-onDark emphasis-high"},xN={key:1,class:"text-onDark emphasis-high animate-pulse"},NN=tt({__name:"ContactCard",props:{chat:{type:Object,required:!0}},setup(t){const e=t,n=Uw(),r=$e(()=>{var c;if(e.chat.groupchat)return{displayName:e.chat.groupchat.name,photoURL:e.chat.groupchat.photoURL};const i=(c=Ke.currentUser)==null?void 0:c.uid,o=e.chat.participants.find(l=>l!==i);return n.users.find(l=>l.id===o)??{}}),s=$e(()=>{var i,o,a;return console.log("Computing",e.chat,(o=(i=e.chat.messages)==null?void 0:i.at(0))==null?void 0:o.content),(a=e.chat.messages)==null?void 0:a.at(0)});return(i,o)=>i.$props.chat.messages?(oe(),$t(De(gh),{key:0,to:`/${i.chat.id}`,class:"flex items-center rounded-lg p-4 gap-4 bg-surface-400 hover:bg-surface-500"},{default:ac(()=>[J("img",{src:r.value.photoURL?r.value.photoURL:De(Yc),alt:"Profile",height:"64",width:"64",class:"w-16 aspect-square rounded-full object-cover",referrerpolicy:"no-referrer"},null,8,SN),J("div",CN,[J("h2",kN,Hr(r.value.displayName),1),s.value?(oe(),ve("p",ON,Hr(s.value.content),1)):(oe(),ve("div",xN))])]),_:1},8,["to"])):ks("v-if",!0)}}),Fw=wt(NN,[["__file","/home/luuk/code/realtime-chat/src/components/contactCard/ContactCard.vue"]]),DN={key:0,class:"flex-1 flex flex-col gap-2 mx-2 mt-4"},VN=J("h2",{class:"text-lg text-onDark emphasis-high"},"Contacts",-1),MN={key:1,class:"flex-1 flex flex-col gap-2 mx-2 mt-4"},LN=J("h2",{class:"text-lg text-onDark emphasis-high"},"Users",-1),UN={key:2,class:"flex-1 flex justify-center items-center"},FN=J("p",{class:"text-2xl"},"No users found",-1),$N=[FN],jN=tt({__name:"UserList",props:{search:{type:String,required:!0}},setup(t){const e=t,n=Uw(),r=Jc(),s=r.contacts,i=$e(()=>{const l=e.search.toLowerCase();return n.users.filter(u=>u.displayName.toLowerCase().includes(l))}),o=$e(()=>i.value.filter(l=>s.has(l.id))),a=$e(()=>r.chats.filter(l=>l.participants.some(u=>{var h;return u===((h=Ke.currentUser)==null?void 0:h.uid)}))),c=$e(()=>i.value.filter(l=>{var u;return l.id===((u=Ke.currentUser)==null?void 0:u.uid)?!1:!s.has(l.id)}));return(l,u)=>(oe(),ve(st,null,[o.value?(oe(),ve("div",DN,[VN,(oe(!0),ve(st,null,Ta(a.value,h=>(oe(),$t(Fw,{key:h.id,chat:h},null,8,["chat"]))),128))])):ks("v-if",!0),i.value?(oe(),ve("div",MN,[LN,(oe(!0),ve(st,null,Ta(c.value,h=>(oe(),$t(PN,{key:h.id,user:h},null,8,["user"]))),128))])):(oe(),ve("div",UN,$N))],64))}}),BN=wt(jN,[["__file","/home/luuk/code/realtime-chat/src/components/userCard/UserList.vue"]]),qN={key:0,class:"flex-1 flex flex-col gap-2 mx-2 mt-4"},HN=tt({__name:"ChatList",setup(t){const e=Jc(),{chats:n}=Fm(e);return(r,s)=>De(n).length?(oe(),ve("div",qN,[(oe(!0),ve(st,null,Ta(De(n),i=>(oe(),$t(Fw,{key:i.id,chat:i},null,8,["chat"]))),128))])):ks("v-if",!0)}}),WN=wt(HN,[["__file","/home/luuk/code/realtime-chat/src/components/contactCard/ChatList.vue"]]),KN=tt({__name:"UserSection",setup(t){const e=xe("");return(n,r)=>(oe(),ve(st,null,[Jn(J("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>e.value=s),type:"text",placeholder:"Search",class:"p-2 mx-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Xn,e.value]]),e.value?(oe(),$t(BN,{key:0,search:e.value},null,8,["search"])):(oe(),$t(WN,{key:1}))],64))}}),zN=wt(KN,[["__file","/home/luuk/code/realtime-chat/src/components/UserSection.vue"]]),GN={class:"text-xs emphasis-low"},QN=tt({__name:"ChatMessage",props:{message:{type:Object,required:!0}},setup(t){const e=Ke.currentUser,n=r=>{const s=r.getHours(),i=r.getMinutes(),o=s<10?`0${s}`:`${s}`,a=i<10?`0${i}`:`${i}`;return`${o}:${a}`};return(r,s)=>{var i,o;return oe(),ve("div",{class:Za(["flex flex-col gap-1 p-2 rounded-lg w-80",{"self-end items-end bg-primary text-onLight":r.message.senderId===((i=De(e))==null?void 0:i.uid),"self-start items-start bg-surface-400 text-onDark":r.message.senderId!==((o=De(e))==null?void 0:o.uid)}])},[J("p",null,Hr(r.message.content),1),J("p",GN,Hr(n(r.message.createdAt.toDate())),1)],2)}}}),YN=wt(QN,[["__file","/home/luuk/code/realtime-chat/src/components/chat/ChatMessage.vue"]]),JN=dh("inputMessages",()=>{const t=xe(new Map);function e(s,i){t.value.set(s,i)}function n(s){t.value.delete(s)}function r(s){return t.value.get(s)??""}return{inputMessages:t,addInputMessage:e,removeInputMessage:n,getInputMessage:r}}),XN={class:"flex w-full bg-surface-200 p-2"},ZN=["onSubmit"],eD=["value"],tD=J("button",{type:"submit",class:"bg-primary rounded-full w-16 p-2 mx-2 h-10 flex justify-center items-center text-onLight"}," Send ",-1),nD=tt({__name:"ChatInput",props:{chatId:{type:String,required:!0}},setup(t){const e=t,{addInputMessage:n,removeInputMessage:r,getInputMessage:s}=JN(),{subscribe:i}=Jc(),o=xe("");nr(()=>e.chatId,()=>{o.value=s(e.chatId)});const a=l=>{const u=l.target;n(e.chatId,u.value),i(e.chatId),o.value=u.value},c=async()=>{const l=cN(e.chatId,o.value);o.value="",r(e.chatId),await l};return(l,u)=>(oe(),ve("div",XN,[J("form",{class:"flex-1 flex",onSubmit:ch(c,["prevent"])},[J("input",{type:"text",class:"flex-1 p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-300",placeholder:"Type a message...",value:o.value,onInput:a},null,40,eD),tD],40,ZN)]))}}),rD=wt(nD,[["__file","/home/luuk/code/realtime-chat/src/components/chat/ChatInput.vue"]]),sD={class:"flex flex-col h-full flex-1"},iD={key:0,class:"flex-1 overflow-y-auto flex flex-col p-1 gap-1"},oD={key:1,class:"flex-1 flex justify-center items-center"},aD=J("p",{class:"text-2xl text-onDark"},"No messages yet",-1),cD=[aD],lD=tt({__name:"ChatMain",props:{chatId:{type:String,required:!0}},setup(t){const e=t,n=Jc(),{chats:r}=Fm(n),s=$e(()=>r.value.find(o=>o.id===e.chatId));return(i,o)=>(oe(),ve("section",sD,[s.value&&s.value.messages?(oe(),ve("div",iD,[(oe(!0),ve(st,null,Ta(s.value.messages,a=>(oe(),$t(YN,{key:a.id,message:a},null,8,["message"]))),128))])):(oe(),ve("div",oD,cD)),Ze(rD,{"chat-id":i.chatId},null,8,["chat-id"])]))}}),uD=wt(lD,[["__file","/home/luuk/code/realtime-chat/src/components/chat/ChatMain.vue"]]),hD={class:"flex h-full"},dD={class:"w-80 bg-surface-100 h-full"},fD=tt({__name:"ChatView",props:{chatId:{type:null,required:!0}},setup(t){const e=Ke.currentUser;return(n,r)=>(oe(),ve("main",hD,[J("section",dD,[Ze(TN,{user:De(e)},null,8,["user"]),Ze(zN)]),n.chatId?(oe(),$t(uD,{key:0,chatId:n.chatId},null,8,["chatId"])):ks("v-if",!0)]))}}),pD=wt(fD,[["__file","/home/luuk/code/realtime-chat/src/views/ChatView.vue"]]),gD={key:1},mD=tt({__name:"HomeView",props:{chatId:{type:String,required:!1}},setup(t){const e=xe(Ke.currentUser);return dN(n=>{e.value=n}),(n,r)=>e.value?(oe(),$t(pD,{key:0,chatId:n.chatId},null,8,["chatId"])):(oe(),ve("p",gD,"Sign in to see your profile"))}}),vg=wt(mD,[["__file","/home/luuk/code/realtime-chat/src/views/HomeView.vue"]]),_D={class:"w-full h-full flex justify-center items-center"},yD=["onSubmit"],vD=J("h1",{class:"text-5xl font-bold text-center text-onDark"},"Sign In",-1),wD={class:"flex flex-col gap-4"},ED=tt({__name:"LoginView",setup(t){const e=xe(""),n=xe(""),r=async()=>{await gN(e.value,n.value)&&ts.push({path:"/"})},s=async()=>{const i=await pN();i&&(await Nd(i.user.uid,i.user.displayName?i.user.displayName:"New user",i.user.photoURL),ts.push({path:"/"}))};return(i,o)=>(oe(),ve("main",_D,[J("form",{onSubmit:ch(r,["prevent"]),class:"flex flex-col bg-surface-100 p-8 rounded-lg gap-8"},[vD,J("div",wD,[Jn(J("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:"email",placeholder:"Email",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Xn,e.value]]),Jn(J("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),type:"password",placeholder:"Password",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Xn,n.value]]),J("button",{onClick:r,class:"bg-primary rounded-full p-2"}," Sign In "),Ze(De(gh),{to:"/register",class:"text-center"},{default:ac(()=>[rh(" Don't have an account? Register here ")]),_:1})]),J("button",{onClick:s,type:"button",class:"bg-[#3c82f7] px-1 py-2 rounded-md"}," Sign In with Google ")],40,yD)]))}}),ID=wt(ED,[["__file","/home/luuk/code/realtime-chat/src/views/LoginView.vue"]]),TD={class:"w-full h-full flex justify-center items-center"},AD={class:"flex flex-col bg-surface-100 p-8 rounded-lg gap-8"},bD=J("h1",{class:"text-5xl font-bold text-center text-onDark"},"Register",-1),RD=["onSubmit"],PD={class:"bg-primary rounded-full p-2 text-onLight text-lg"},SD={key:0},CD={key:1},kD=tt({__name:"RegisterView",setup(t){const e=xe(""),n=xe(""),r=xe(""),s=xe(""),i=xe(null),o=xe(""),a=xe(!1),c=u=>{const d=u.target.files[0];i.value=d},l=async()=>{if(a.value=!0,n.value!==r.value)return;const{user:u,error:h}=await mN(e.value,n.value,s.value,i.value);if(h){o.value=h.errorMessage,a.value=!1;return}ts.push({path:"/"})};return(u,h)=>(oe(),ve("main",TD,[J("div",AD,[bD,J("form",{class:"flex flex-col gap-4",onSubmit:ch(l,["prevent"])},[Jn(J("input",{"onUpdate:modelValue":h[0]||(h[0]=d=>e.value=d),type:"email",placeholder:"Email",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Xn,e.value]]),Jn(J("input",{"onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),type:"text",placeholder:"Display Name",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Xn,s.value]]),Jn(J("input",{"onUpdate:modelValue":h[2]||(h[2]=d=>n.value=d),type:"password",placeholder:"Password",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Xn,n.value]]),Jn(J("input",{"onUpdate:modelValue":h[3]||(h[3]=d=>r.value=d),type:"password",placeholder:"Confirm Password",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,512),[[Xn,r.value]]),J("input",{onChange:c,type:"file",class:"p-2 rounded-xl text-onDark focus:outline-none text-lg bg-surface-200"},null,32),J("button",PD,[a.value?(oe(),ve("p",SD,"Loading...")):(oe(),ve("p",CD,"Register"))])],40,RD)])]))}}),OD=wt(kD,[["__file","/home/luuk/code/realtime-chat/src/views/RegisterView.vue"]]),xD={class:"flex h-full w-full justify-center items-center"},ND={class:"grid grid-cols-2 bg-surface-100 p-8 rounded-lg text-xl"},DD={class:"border-surface-400 border-r-2 p-8 flex flex-col items-start gap-4"},VD=["src"],MD=["disabled"],LD={key:0},UD={key:1},FD=J("h1",{class:"text-6xl text-onDark"},"Settings",-1),$D=tt({__name:"SettingsView",setup(t){const e=xe(Ke.currentUser);if(!e.value)throw new Error("User not logged in");const n=xe(e.value.displayName),r=xe(!1),s=async()=>{r.value=!0,e.value=Ke.currentUser,e.value&&(Nd(e.value.uid,{displayName:n.value??void 0}),await F_(e.value,{displayName:n.value}),r.value=!1)},i=async()=>{await _N(),ts.push({path:"/"})};return(o,a)=>{var c,l;return oe(),ve("main",xD,[J("div",ND,[J("div",DD,[J("img",{src:(c=e.value)!=null&&c.photoURL?e.value.photoURL:De(Yc),alt:"Profile",class:"w-32 aspect-square object-cover rounded-full",referrerpolicy:"no-referrer"},null,8,VD),Jn(J("input",{"onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u),class:"bg-surface-200 text-onDark p-2 rounded-lg focus:outline-none focus:bg-surface-300",placeholder:"Display Name"},null,512),[[Xn,n.value]]),J("button",{class:"bg-primary text-onLight p-2 rounded-lg disabled:text-onDark transition-colors disabled:bg-surface-300 disabled:cursor-not-allowed",onClick:s,disabled:n.value===((l=e.value)==null?void 0:l.displayName)||!n.value},[r.value?(oe(),ve("span",LD,"Saving...")):(oe(),ve("span",UD,"Save"))],8,MD)]),J("div",{class:"flex flex-col justify-around items-center"},[FD,J("button",{onClick:i,class:"bg-error text-onLight p-2 rounded-lg hover:emphasis-high"}," Logout ")])])])}}}),jD=wt($D,[["__file","/home/luuk/code/realtime-chat/src/views/SettingsView.vue"]]),ts=Bb({history:qA("/"),routes:[{path:"/",name:"home",component:vg},{path:"/login",name:"login",component:ID},{path:"/settings",name:"settings",component:jD},{path:"/register",name:"register",component:OD},{path:"/:chatId",name:"chat",props:!0,component:vg}]});ts.beforeEach(async(t,e,n)=>{const s=!["/login","/register"].includes(t.path);await Ke.authStateReady();const i=Ke.currentUser;s?i?n():n("/login"):i?n("/"):n()});const Dd=KT(US);Dd.use(IA());Dd.use(ts);Dd.mount("#app");
