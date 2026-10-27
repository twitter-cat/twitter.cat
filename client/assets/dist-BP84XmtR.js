import{a as e,t}from"./rolldown-runtime-BWaJ3C7D.js";import{d as n,f as r,m as i,p as a}from"./y-BMHJN0ho.js";import{K as o}from"./index-BsDq1Z9b.js";var s={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function c(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),s.hasOwnProperty(t)?{space:s[t],local:e}:e}function l(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===`http://www.w3.org/1999/xhtml`&&t.documentElement.namespaceURI===`http://www.w3.org/1999/xhtml`?t.createElement(e):t.createElementNS(n,e)}}function u(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function d(e){var t=c(e);return(t.local?u:l)(t)}function f(){}function p(e){return e==null?f:function(){return this.querySelector(e)}}function m(e){typeof e!=`function`&&(e=p(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=Array(o),c,l,u=0;u<o;++u)(c=a[u])&&(l=e.call(c,c.__data__,u,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[u]=l);return new Et(r,this._parents)}function h(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function g(){return[]}function _(e){return e==null?g:function(){return this.querySelectorAll(e)}}function v(e){return function(){return h(e.apply(this,arguments))}}function y(e){e=typeof e==`function`?v(e):_(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(r.push(e.call(c,c.__data__,l,o)),i.push(c));return new Et(r,i)}function b(e){return function(){return this.matches(e)}}function x(e){return function(t){return t.matches(e)}}var ee=Array.prototype.find;function S(e){return function(){return ee.call(this.children,e)}}function C(){return this.firstElementChild}function te(e){return this.select(e==null?C:S(typeof e==`function`?e:x(e)))}var w=Array.prototype.filter;function T(){return Array.from(this.children)}function ne(e){return function(){return w.call(this.children,e)}}function re(e){return this.selectAll(e==null?T:ne(typeof e==`function`?e:x(e)))}function ie(e){typeof e!=`function`&&(e=b(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Et(r,this._parents)}function ae(e){return Array(e.length)}function oe(){return new Et(this._enter||this._groups.map(ae),this._parents)}function se(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}se.prototype={constructor:se,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function ce(e){return function(){return e}}function le(e,t,n,r,i,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new se(e,a[o]);for(;o<c;++o)(s=t[o])&&(i[o]=s)}function ue(e,t,n,r,i,a,o){var s,c,l=new Map,u=t.length,d=a.length,f=Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=o.call(c,c.__data__,s,t)+``,l.has(p)?i[s]=c:l.set(p,c));for(s=0;s<d;++s)p=o.call(e,a[s],s,a)+``,(c=l.get(p))?(r[s]=c,c.__data__=a[s],l.delete(p)):n[s]=new se(e,a[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(i[s]=c)}function de(e){return e.__data__}function fe(e,t){if(!arguments.length)return Array.from(this,de);var n=t?ue:le,r=this._parents,i=this._groups;typeof e!=`function`&&(e=ce(e));for(var a=i.length,o=Array(a),s=Array(a),c=Array(a),l=0;l<a;++l){var u=r[l],d=i[l],f=d.length,p=pe(e.call(u,u&&u.__data__,l,r)),m=p.length,h=s[l]=Array(m),g=o[l]=Array(m);n(u,d,h,g,c[l]=Array(f),p,t);for(var _=0,v=0,y,b;_<m;++_)if(y=h[_]){for(_>=v&&(v=_+1);!(b=g[v])&&++v<m;);y._next=b||null}}return o=new Et(o,r),o._enter=s,o._exit=c,o}function pe(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function me(){return new Et(this._exit||this._groups.map(ae),this._parents)}function he(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e==`function`?(r=e(r),r&&=r.selection()):r=r.append(e+``),t!=null&&(i=t(i),i&&=i.selection()),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function E(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),c=0;c<o;++c)for(var l=n[c],u=r[c],d=l.length,f=s[c]=Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<i;++c)s[c]=n[c];return new Et(s,this._parents)}function ge(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function _e(e){e||=ve;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,c=i[a]=Array(s),l,u=0;u<s;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new Et(i,this._parents).order()}function ve(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function ye(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function be(){return Array.from(this)}function xe(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function Se(){let e=0;for(let t of this)++e;return e}function Ce(){return!this.node()}function we(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function D(e){return function(){this.removeAttribute(e)}}function Te(e){return function(){this.removeAttributeNS(e.space,e.local)}}function O(e,t){return function(){this.setAttribute(e,t)}}function Ee(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function De(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Oe(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function ke(e,t){var n=c(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?Te:D:typeof t==`function`?n.local?Oe:De:n.local?Ee:O)(n,t))}function Ae(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function je(e){return function(){this.style.removeProperty(e)}}function Me(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Ne(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Pe(e,t,n){return arguments.length>1?this.each((t==null?je:typeof t==`function`?Ne:Me)(e,t,n??``)):Fe(this.node(),e)}function Fe(e,t){return e.style.getPropertyValue(t)||Ae(e).getComputedStyle(e,null).getPropertyValue(t)}function Ie(e){return function(){delete this[e]}}function Le(e,t){return function(){this[e]=t}}function Re(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function ze(e,t){return arguments.length>1?this.each((t==null?Ie:typeof t==`function`?Re:Le)(e,t)):this.node()[e]}function Be(e){return e.trim().split(/^|\s+/)}function Ve(e){return e.classList||new He(e)}function He(e){this._node=e,this._names=Be(e.getAttribute(`class`)||``)}He.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function Ue(e,t){for(var n=Ve(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function We(e,t){for(var n=Ve(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Ge(e){return function(){Ue(this,e)}}function Ke(e){return function(){We(this,e)}}function qe(e,t){return function(){(t.apply(this,arguments)?Ue:We)(this,e)}}function Je(e,t){var n=Be(e+``);if(arguments.length<2){for(var r=Ve(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t==`function`?qe:t?Ge:Ke)(n,t))}function Ye(){this.textContent=``}function Xe(e){return function(){this.textContent=e}}function Ze(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function Qe(e){return arguments.length?this.each(e==null?Ye:(typeof e==`function`?Ze:Xe)(e)):this.node().textContent}function $e(){this.innerHTML=``}function et(e){return function(){this.innerHTML=e}}function tt(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function nt(e){return arguments.length?this.each(e==null?$e:(typeof e==`function`?tt:et)(e)):this.node().innerHTML}function rt(){this.nextSibling&&this.parentNode.appendChild(this)}function it(){return this.each(rt)}function at(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ot(){return this.each(at)}function st(e){var t=typeof e==`function`?e:d(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function ct(){return null}function lt(e,t){var n=typeof e==`function`?e:d(e),r=t==null?ct:typeof t==`function`?t:p(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function ut(){var e=this.parentNode;e&&e.removeChild(this)}function dt(){return this.each(ut)}function ft(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function pt(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function mt(e){return this.select(e?pt:ft)}function ht(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function gt(e){return function(t){e.call(this,t,this.__data__)}}function _t(e){return e.trim().split(/^|\s+/).map(function(e){var t=``,n=e.indexOf(`.`);return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function k(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function vt(e,t,n){return function(){var r=this.__on,i,a=gt(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function yt(e,t,n){var r=_t(e+``),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(i=0,u=s[c];i<a;++i)if((o=r[i]).type===u.type&&o.name===u.name)return u.value}}else{for(s=t?vt:k,i=0;i<a;++i)this.each(s(r[i],t,n));return this}}function bt(e,t,n){var r=Ae(e),i=r.CustomEvent;typeof i==`function`?i=new i(t,n):(i=r.document.createEvent(`Event`),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function xt(e,t){return function(){return bt(this,e,t)}}function St(e,t){return function(){return bt(this,e,t.apply(this,arguments))}}function Ct(e,t){return this.each((typeof t==`function`?St:xt)(e,t))}function*wt(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var Tt=[null];function Et(e,t){this._groups=e,this._parents=t}function Dt(){return new Et([[document.documentElement]],Tt)}function Ot(){return this}Et.prototype=Dt.prototype={constructor:Et,select:m,selectAll:y,selectChild:te,selectChildren:re,filter:ie,data:fe,enter:oe,exit:me,join:he,merge:E,selection:Ot,order:ge,sort:_e,call:ye,nodes:be,node:xe,size:Se,empty:Ce,each:we,attr:ke,style:Pe,property:ze,classed:Je,text:Qe,html:nt,raise:it,lower:ot,append:st,insert:lt,remove:dt,clone:mt,datum:ht,on:yt,dispatch:Ct,[Symbol.iterator]:wt};function A(e){return typeof e==`string`?new Et([[document.querySelector(e)]],[document.documentElement]):new Et([[e]],Tt)}function kt(e){let t;for(;t=e.sourceEvent;)e=t;return e}function j(e,t){if(e=kt(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}function At(e,t,r){var i=new n;return t=t==null?0:+t,i.restart(n=>{i.stop(),e(n+t)},t,r),i}var jt=i(`start`,`end`,`cancel`,`interrupt`),Mt=[];function Nt(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;Lt(e,n,{name:t,index:r,group:i,on:jt,tween:Mt,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function Pt(e,t){var n=It(e,t);if(n.state>0)throw Error(`too late; already scheduled`);return n}function Ft(e,t){var n=It(e,t);if(n.state>3)throw Error(`too late; already running`);return n}function It(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw Error(`transition not found`);return n}function Lt(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=a(o,0,n.time);function o(e){n.state=1,n.timer.restart(s,n.delay,n.time),n.delay<=e&&s(e-n.delay)}function s(a){var o,u,d,f;if(n.state!==1)return l();for(o in r)if(f=r[o],f.name===n.name){if(f.state===3)return At(s);f.state===4?(f.state=6,f.timer.stop(),f.on.call(`interrupt`,e,e.__data__,f.index,f.group),delete r[o]):+o<t&&(f.state=6,f.timer.stop(),f.on.call(`cancel`,e,e.__data__,f.index,f.group),delete r[o])}if(At(function(){n.state===3&&(n.state=4,n.timer.restart(c,n.delay,n.time),c(a))}),n.state=2,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===2){for(n.state=3,i=Array(d=n.tween.length),o=0,u=-1;o<d;++o)(f=n.tween[o].value.call(e,e.__data__,n.index,n.group))&&(i[++u]=f);i.length=u+1}}function c(t){for(var r=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(l),n.state=5,1),a=-1,o=i.length;++a<o;)i[a].call(e,r);n.state===5&&(n.on.call(`end`,e,e.__data__,n.index,n.group),l())}function l(){for(var i in n.state=6,n.timer.stop(),delete r[t],r)return;delete e.__transition}}function Rt(e,t){var n=e.__transition,r,i,a=!0,o;if(n){for(o in t=t==null?null:t+``,n)(r=n[o]).name===t?(i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?`interrupt`:`cancel`,e,e.__data__,r.index,r.group),delete n[o]):a=!1;a&&delete e.__transition}}function zt(e){return this.each(function(){Rt(this,e)})}function Bt(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Vt(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Ht(){}var Ut=.7,Wt=1/Ut,Gt=`\\s*([+-]?\\d+)\\s*`,Kt=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,M=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,qt=/^#([0-9a-f]{3,8})$/,Jt=RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`),Yt=RegExp(`^rgb\\(${M},${M},${M}\\)$`),Xt=RegExp(`^rgba\\(${Gt},${Gt},${Gt},${Kt}\\)$`),Zt=RegExp(`^rgba\\(${M},${M},${M},${Kt}\\)$`),Qt=RegExp(`^hsl\\(${Kt},${M},${M}\\)$`),$t=RegExp(`^hsla\\(${Kt},${M},${M},${Kt}\\)$`),en={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Bt(Ht,on,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:tn,formatHex:tn,formatHex8:nn,formatHsl:rn,formatRgb:an,toString:an});function tn(){return this.rgb().formatHex()}function nn(){return this.rgb().formatHex8()}function rn(){return yn(this).formatHsl()}function an(){return this.rgb().formatRgb()}function on(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=qt.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?sn(t):n===3?new dn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?cn(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?cn(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Jt.exec(e))?new dn(t[1],t[2],t[3],1):(t=Yt.exec(e))?new dn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Xt.exec(e))?cn(t[1],t[2],t[3],t[4]):(t=Zt.exec(e))?cn(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Qt.exec(e))?vn(t[1],t[2]/100,t[3]/100,1):(t=$t.exec(e))?vn(t[1],t[2]/100,t[3]/100,t[4]):en.hasOwnProperty(e)?sn(en[e]):e===`transparent`?new dn(NaN,NaN,NaN,0):null}function sn(e){return new dn(e>>16&255,e>>8&255,e&255,1)}function cn(e,t,n,r){return r<=0&&(e=t=n=NaN),new dn(e,t,n,r)}function ln(e){return e instanceof Ht||(e=on(e)),e?(e=e.rgb(),new dn(e.r,e.g,e.b,e.opacity)):new dn}function un(e,t,n,r){return arguments.length===1?ln(e):new dn(e,t,n,r??1)}function dn(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Bt(dn,un,Vt(Ht,{brighter(e){return e=e==null?Wt:Wt**+e,new dn(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ut:Ut**+e,new dn(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new dn(gn(this.r),gn(this.g),gn(this.b),hn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:fn,formatHex:fn,formatHex8:pn,formatRgb:mn,toString:mn}));function fn(){return`#${_n(this.r)}${_n(this.g)}${_n(this.b)}`}function pn(){return`#${_n(this.r)}${_n(this.g)}${_n(this.b)}${_n((isNaN(this.opacity)?1:this.opacity)*255)}`}function mn(){let e=hn(this.opacity);return`${e===1?`rgb(`:`rgba(`}${gn(this.r)}, ${gn(this.g)}, ${gn(this.b)}${e===1?`)`:`, ${e})`}`}function hn(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function gn(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function _n(e){return e=gn(e),(e<16?`0`:``)+e.toString(16)}function vn(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new xn(e,t,n,r)}function yn(e){if(e instanceof xn)return new xn(e.h,e.s,e.l,e.opacity);if(e instanceof Ht||(e=on(e)),!e)return new xn;if(e instanceof xn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new xn(o,s,c,e.opacity)}function bn(e,t,n,r){return arguments.length===1?yn(e):new xn(e,t,n,r??1)}function xn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Bt(xn,bn,Vt(Ht,{brighter(e){return e=e==null?Wt:Wt**+e,new xn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ut:Ut**+e,new xn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new dn(wn(e>=240?e-240:e+120,i,r),wn(e,i,r),wn(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new xn(Sn(this.h),Cn(this.s),Cn(this.l),hn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=hn(this.opacity);return`${e===1?`hsl(`:`hsla(`}${Sn(this.h)}, ${Cn(this.s)*100}%, ${Cn(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function Sn(e){return e=(e||0)%360,e<0?e+360:e}function Cn(e){return Math.max(0,Math.min(1,e||0))}function wn(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Tn=e=>()=>e;function En(e,t){return function(n){return e+n*t}}function Dn(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function On(e){return(e=+e)==1?kn:function(t,n){return n-t?Dn(t,n,e):Tn(isNaN(t)?n:t)}}function kn(e,t){var n=t-e;return n?En(e,n):Tn(isNaN(e)?t:e)}var An=(function e(t){var n=On(t);function r(e,t){var r=n((e=un(e)).r,(t=un(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=kn(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function jn(e,t){t||=[];var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function Mn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Nn(e,t){for(var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=Array(r),a=Array(n),o=0;o<r;++o)i[o]=Hn(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(e){for(o=0;o<r;++o)a[o]=i[o](e);return a}}function Pn(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Fn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function In(e,t){var n={},r={},i;for(i in typeof e==`object`&&e||(e={}),typeof t==`object`&&t||(t={}),t)i in e?n[i]=Hn(e[i],t[i]):r[i]=t[i];return function(e){for(i in n)r[i]=n[i](e);return r}}var Ln=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Rn=new RegExp(Ln.source,`g`);function zn(e){return function(){return e}}function Bn(e){return function(t){return e(t)+``}}function Vn(e,t){var n=Ln.lastIndex=Rn.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=Ln.exec(e))&&(i=Rn.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:Fn(r,i)})),n=Rn.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?Bn(c[0].x):zn(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}function Hn(e,t){var n=typeof t,r;return t==null||n===`boolean`?Tn(t):(n===`number`?Fn:n===`string`?(r=on(t))?(t=r,An):Vn:t instanceof on?An:t instanceof Date?Pn:Mn(t)?jn:Array.isArray(t)?Nn:typeof t.valueOf!=`function`&&typeof t.toString!=`function`||isNaN(t)?In:Fn)(e,t)}function Un(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var Wn=180/Math.PI,Gn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Kn(e,t,n,r,i,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*Wn,skewX:Math.atan(c)*Wn,scaleX:o,scaleY:s}}var qn;function Jn(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?Gn:Kn(t.a,t.b,t.c,t.d,t.e,t.f)}function Yn(e){return e==null||(qn||=document.createElementNS(`http://www.w3.org/2000/svg`,`g`),qn.setAttribute(`transform`,e),!(e=qn.transform.baseVal.consolidate()))?Gn:(e=e.matrix,Kn(e.a,e.b,e.c,e.d,e.e,e.f))}function Xn(e,t,n,r){function i(e){return e.length?e.pop()+` `:``}function a(e,r,i,a,o,s){if(e!==i||r!==a){var c=o.push(`translate(`,null,t,null,n);s.push({i:c-4,x:Fn(e,i)},{i:c-2,x:Fn(r,a)})}else(i||a)&&o.push(`translate(`+i+t+a+n)}function o(e,t,n,a){e===t?t&&n.push(i(n)+`rotate(`+t+r):(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(i(n)+`rotate(`,null,r)-2,x:Fn(e,t)}))}function s(e,t,n,a){e===t?t&&n.push(i(n)+`skewX(`+t+r):a.push({i:n.push(i(n)+`skewX(`,null,r)-2,x:Fn(e,t)})}function c(e,t,n,r,a,o){if(e!==n||t!==r){var s=a.push(i(a)+`scale(`,null,`,`,null,`)`);o.push({i:s-4,x:Fn(e,n)},{i:s-2,x:Fn(t,r)})}else(n!==1||r!==1)&&a.push(i(a)+`scale(`+n+`,`+r+`)`)}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),a(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),s(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){for(var t=-1,n=i.length,a;++t<n;)r[(a=i[t]).i]=a.x(e);return r.join(``)}}}var Zn=Xn(Jn,`px, `,`px)`,`deg)`),Qn=Xn(Yn,`, `,`)`,`)`),$n=1e-12;function er(e){return((e=Math.exp(e))+1/e)/2}function tr(e){return((e=Math.exp(e))-1/e)/2}function nr(e){return((e=Math.exp(2*e))-1)/(e+1)}var rr=(function e(t,n,r){function i(e,i){var a=e[0],o=e[1],s=e[2],c=i[0],l=i[1],u=i[2],d=c-a,f=l-o,p=d*d+f*f,m,h;if(p<$n)h=Math.log(u/s)/t,m=function(e){return[a+e*d,o+e*f,s*Math.exp(t*e*h)]};else{var g=Math.sqrt(p),_=(u*u-s*s+r*p)/(2*s*n*g),v=(u*u-s*s-r*p)/(2*u*n*g),y=Math.log(Math.sqrt(_*_+1)-_);h=(Math.log(Math.sqrt(v*v+1)-v)-y)/t,m=function(e){var r=e*h,i=er(y),c=s/(n*g)*(i*nr(t*r+y)-tr(y));return[a+c*d,o+c*f,s*i/er(t*r+y)]}}return m.duration=h*1e3*t/Math.SQRT2,m}return i.rho=function(t){var n=Math.max(.001,+t),r=n*n;return e(n,r,r*r)},i})(Math.SQRT2,2,4);function ir(e,t){var n,r;return function(){var i=Ft(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function ar(e,t,n){var r,i;if(typeof n!=`function`)throw Error();return function(){var a=Ft(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function or(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var r=It(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?ir:ar)(n,e,t))}function sr(e,t,n){var r=e._id;return e.each(function(){var e=Ft(this,r);(e.value||={})[t]=n.apply(this,arguments)}),function(e){return It(e,r).value[t]}}function cr(e,t){var n;return(typeof t==`number`?Fn:t instanceof on?An:(n=on(t))?(t=n,An):Vn)(e,t)}function lr(e){return function(){this.removeAttribute(e)}}function ur(e){return function(){this.removeAttributeNS(e.space,e.local)}}function dr(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function fr(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function pr(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function mr(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function hr(e,t){var n=c(e),r=n===`transform`?Qn:cr;return this.attrTween(e,typeof t==`function`?(n.local?mr:pr)(n,r,sr(this,`attr.`+e,t)):t==null?(n.local?ur:lr)(n):(n.local?fr:dr)(n,r,t))}function gr(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function _r(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function vr(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&_r(e,i)),n}return i._value=t,i}function yr(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&gr(e,i)),n}return i._value=t,i}function br(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw Error();var r=c(e);return this.tween(n,(r.local?vr:yr)(r,t))}function xr(e,t){return function(){Pt(this,e).delay=+t.apply(this,arguments)}}function Sr(e,t){return t=+t,function(){Pt(this,e).delay=t}}function Cr(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?xr:Sr)(t,e)):It(this.node(),t).delay}function wr(e,t){return function(){Ft(this,e).duration=+t.apply(this,arguments)}}function Tr(e,t){return t=+t,function(){Ft(this,e).duration=t}}function Er(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?wr:Tr)(t,e)):It(this.node(),t).duration}function Dr(e,t){if(typeof t!=`function`)throw Error();return function(){Ft(this,e).ease=t}}function Or(e){var t=this._id;return arguments.length?this.each(Dr(t,e)):It(this.node(),t).ease}function kr(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw Error();Ft(this,e).ease=n}}function Ar(e){if(typeof e!=`function`)throw Error();return this.each(kr(this._id,e))}function jr(e){typeof e!=`function`&&(e=b(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new oi(r,this._parents,this._name,this._id)}function Mr(e){if(e._id!==this._id)throw Error();for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var c=t[s],l=n[s],u=c.length,d=o[s]=Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<r;++s)o[s]=t[s];return new oi(o,this._parents,this._name,this._id)}function Nr(e){return(e+``).trim().split(/^|\s+/).every(function(e){var t=e.indexOf(`.`);return t>=0&&(e=e.slice(0,t)),!e||e===`start`})}function Pr(e,t,n){var r,i,a=Nr(t)?Pt:Ft;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function Fr(e,t){var n=this._id;return arguments.length<2?It(this.node(),n).on.on(e):this.each(Pr(n,e,t))}function Ir(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Lr(){return this.on(`end.remove`,Ir(this._id))}function Rr(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=p(e));for(var r=this._groups,i=r.length,a=Array(i),o=0;o<i;++o)for(var s=r[o],c=s.length,l=a[o]=Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&(`__data__`in u&&(d.__data__=u.__data__),l[f]=d,Nt(l[f],t,n,f,l,It(u,n)));return new oi(a,this._parents,t,n)}function zr(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=_(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c=r[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=It(u,n),h=0,g=f.length;h<g;++h)(p=f[h])&&Nt(p,t,n,h,f,m);a.push(f),o.push(u)}return new oi(a,o,t,n)}var Br=Dt.prototype.constructor;function Vr(){return new Br(this._groups,this._parents)}function Hr(e,t){var n,r,i;return function(){var a=Fe(this,e),o=(this.style.removeProperty(e),Fe(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function Ur(e){return function(){this.style.removeProperty(e)}}function Wr(e,t,n){var r,i=n+``,a;return function(){var o=Fe(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function Gr(e,t,n){var r,i,a;return function(){var o=Fe(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),Fe(this,e))),o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s))}}function Kr(e,t){var n,r,i,a=`style.`+t,o=`end.`+a,s;return function(){var c=Ft(this,e),l=c.on,u=c.value[a]==null?s||=Ur(t):void 0;(l!==n||i!==u)&&(r=(n=l).copy()).on(o,i=u),c.on=r}}function qr(e,t,n){var r=(e+=``)==`transform`?Zn:cr;return t==null?this.styleTween(e,Hr(e,r)).on(`end.style.`+e,Ur(e)):typeof t==`function`?this.styleTween(e,Gr(e,r,sr(this,`style.`+e,t))).each(Kr(this._id,e)):this.styleTween(e,Wr(e,r,t),n).on(`end.style.`+e,null)}function Jr(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Yr(e,t,n){var r,i;function a(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&Jr(e,a,n)),r}return a._value=t,a}function Xr(e,t,n){var r=`style.`+(e+=``);if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!=`function`)throw Error();return this.tween(r,Yr(e,t,n??``))}function Zr(e){return function(){this.textContent=e}}function Qr(e){return function(){var t=e(this);this.textContent=t??``}}function $r(e){return this.tween(`text`,typeof e==`function`?Qr(sr(this,`text`,e)):Zr(e==null?``:e+``))}function ei(e){return function(t){this.textContent=e.call(this,t)}}function ti(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&ei(r)),t}return r._value=e,r}function ni(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw Error();return this.tween(t,ti(e))}function ri(){for(var e=this._name,t=this._id,n=si(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var u=It(c,t);Nt(c,e,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new oi(r,this._parents,e,n)}function ii(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--i===0&&a()}};n.each(function(){var n=Ft(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),n.on=t}),i===0&&a()})}var ai=0;function oi(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function si(){return++ai}var ci=Dt.prototype;oi.prototype={constructor:oi,select:Rr,selectAll:zr,selectChild:ci.selectChild,selectChildren:ci.selectChildren,filter:jr,merge:Mr,selection:Vr,transition:ri,call:ci.call,nodes:ci.nodes,node:ci.node,size:ci.size,empty:ci.empty,each:ci.each,on:Fr,attr:hr,attrTween:br,style:qr,styleTween:Xr,text:$r,textTween:ni,remove:Lr,tween:or,delay:Cr,duration:Er,ease:Or,easeVarying:Ar,end:ii,[Symbol.iterator]:ci[Symbol.iterator]};var li=e=>+e;function ui(e){return e*e}function di(e){return e*(2-e)}function fi(e){return((e*=2)<=1?e*e:--e*(2-e)+1)/2}function pi(e){return e*e*e}function mi(e){return--e*e*e+1}function hi(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var gi=Math.PI,_i=gi/2;function vi(e){return+e==1?1:1-Math.cos(e*_i)}function yi(e){return Math.sin(e*_i)}function bi(e){return(1-Math.cos(gi*e))/2}function xi(e){return(2**(-10*e)-.0009765625)*1.0009775171065494}function Si(e){return xi(1-e)}function Ci(e){return 1-xi(e)}function wi(e){return((e*=2)<=1?xi(1-e):2-xi(e-1))/2}function Ti(e){return 1-Math.sqrt(1-e*e)}function Ei(e){return Math.sqrt(1- --e*e)}function Di(e){return((e*=2)<=1?1-Math.sqrt(1-e*e):Math.sqrt(1-(e-=2)*e)+1)/2}var Oi={time:null,delay:0,duration:250,ease:hi};function ki(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);return n}function Ai(e){var t,n;e instanceof oi?(t=e._id,e=e._name):(t=si(),(n=Oi).time=r(),e=e==null?null:e+``);for(var i=this._groups,a=i.length,o=0;o<a;++o)for(var s=i[o],c=s.length,l,u=0;u<c;++u)(l=s[u])&&Nt(l,e,t,u,s,n||ki(l,t));return new oi(i,this._parents,e,t)}Dt.prototype.interrupt=zt,Dt.prototype.transition=Ai;var ji={passive:!1},Mi={capture:!0,passive:!1};function Ni(e){e.stopImmediatePropagation()}function Pi(e){e.preventDefault(),e.stopImmediatePropagation()}function Fi(e){var t=e.document.documentElement,n=A(e).on(`dragstart.drag`,Pi,Mi);`onselectstart`in t?n.on(`selectstart.drag`,Pi,Mi):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect=`none`)}function Ii(e,t){var n=e.document.documentElement,r=A(e).on(`dragstart.drag`,null);t&&(r.on(`click.drag`,Pi,Mi),setTimeout(function(){r.on(`click.drag`,null)},0)),`onselectstart`in n?r.on(`selectstart.drag`,null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var Li=e=>()=>e;function Ri(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:a,x:o,y:s,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}Ri.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function zi(e){return!e.ctrlKey&&!e.button}function Bi(){return this.parentNode}function Vi(e,t){return t??{x:e.x,y:e.y}}function Hi(){return navigator.maxTouchPoints||`ontouchstart`in this}function Ui(){var e=zi,t=Bi,n=Vi,r=Hi,a={},o=i(`start`,`drag`,`end`),s=0,c,l,u,d,f=0;function p(e){e.on(`mousedown.drag`,m).filter(r).on(`touchstart.drag`,_).on(`touchmove.drag`,v,ji).on(`touchend.drag touchcancel.drag`,y).style(`touch-action`,`none`).style(`-webkit-tap-highlight-color`,`rgba(0,0,0,0)`)}function m(n,r){if(!d&&e.call(this,n,r)){var i=b(this,t.call(this,n,r),n,r,`mouse`);i&&(A(n.view).on(`mousemove.drag`,h,Mi).on(`mouseup.drag`,g,Mi),Fi(n.view),Ni(n),u=!1,c=n.clientX,l=n.clientY,i(`start`,n))}}function h(e){if(Pi(e),!u){var t=e.clientX-c,n=e.clientY-l;u=t*t+n*n>f}a.mouse(`drag`,e)}function g(e){A(e.view).on(`mousemove.drag mouseup.drag`,null),Ii(e.view,u),Pi(e),a.mouse(`end`,e)}function _(n,r){if(e.call(this,n,r))for(var i=n.changedTouches,a=t.call(this,n,r),o=i.length,s=0,c;s<o;++s)(c=b(this,a,n,r,i[s].identifier,i[s]))&&(Ni(n),c(`start`,n,i[s]))}function v(e){for(var t=e.changedTouches,n=t.length,r=0,i;r<n;++r)(i=a[t[r].identifier])&&(Pi(e),i(`drag`,e,t[r]))}function y(e){var t=e.changedTouches,n=t.length,r,i;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),r=0;r<n;++r)(i=a[t[r].identifier])&&(Ni(e),i(`end`,e,t[r]))}function b(e,t,r,i,c,l){var u=o.copy(),d=j(l||r,t),f,m,h;if((h=n.call(e,new Ri(`beforestart`,{sourceEvent:r,target:p,identifier:c,active:s,x:d[0],y:d[1],dx:0,dy:0,dispatch:u}),i))!=null)return f=h.x-d[0]||0,m=h.y-d[1]||0,function n(r,o,l){var g=d,_;switch(r){case`start`:a[c]=n,_=s++;break;case`end`:delete a[c],--s;case`drag`:d=j(l||o,t),_=s}u.call(r,e,new Ri(r,{sourceEvent:o,subject:h,target:p,identifier:c,active:_,x:d[0]+f,y:d[1]+m,dx:d[0]-g[0],dy:d[1]-g[1],dispatch:u}),i)}}return p.filter=function(t){return arguments.length?(e=typeof t==`function`?t:Li(!!t),p):e},p.container=function(e){return arguments.length?(t=typeof e==`function`?e:Li(e),p):t},p.subject=function(e){return arguments.length?(n=typeof e==`function`?e:Li(e),p):n},p.touchable=function(e){return arguments.length?(r=typeof e==`function`?e:Li(!!e),p):r},p.on=function(){var e=o.on.apply(o,arguments);return e===o?p:e},p.clickDistance=function(e){return arguments.length?(f=(e=+e)*e,p):Math.sqrt(f)},p}var Wi=e=>()=>e;function Gi(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Ki(e,t,n){this.k=e,this.x=t,this.y=n}Ki.prototype={constructor:Ki,scale:function(e){return e===1?this:new Ki(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ki(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var qi=new Ki(1,0,0);Ji.prototype=Ki.prototype;function Ji(e){for(;!e.__zoom;)if(!(e=e.parentNode))return qi;return e.__zoom}function Yi(e){e.stopImmediatePropagation()}function Xi(e){e.preventDefault(),e.stopImmediatePropagation()}function Zi(e){return(!e.ctrlKey||e.type===`wheel`)&&!e.button}function Qi(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute(`viewBox`)?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function $i(){return this.__zoom||qi}function ea(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function ta(){return navigator.maxTouchPoints||`ontouchstart`in this}function na(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],a=e.invertY(t[0][1])-n[0][1],o=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),o>a?(a+o)/2:Math.min(0,a)||Math.max(0,o))}function ra(){var e=Zi,t=Qi,n=na,r=ea,a=ta,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],c=250,l=rr,u=i(`start`,`zoom`,`end`),d,f,p,m=500,h=150,g=0,_=10;function v(e){e.property(`__zoom`,$i).on(`wheel.zoom`,te,{passive:!1}).on(`mousedown.zoom`,w).on(`dblclick.zoom`,T).filter(a).on(`touchstart.zoom`,ne).on(`touchmove.zoom`,re).on(`touchend.zoom touchcancel.zoom`,ie).style(`-webkit-tap-highlight-color`,`rgba(0,0,0,0)`)}v.transform=function(e,t,n,r){var i=e.selection?e.selection():e;i.property(`__zoom`,$i),e===i?i.interrupt().each(function(){S(this,arguments).event(r).start().zoom(null,typeof t==`function`?t.apply(this,arguments):t).end()}):ee(e,t,n,r)},v.scaleBy=function(e,t,n,r){v.scaleTo(e,function(){return this.__zoom.k*(typeof t==`function`?t.apply(this,arguments):t)},n,r)},v.scaleTo=function(e,r,i,a){v.transform(e,function(){var e=t.apply(this,arguments),a=this.__zoom,o=i==null?x(e):typeof i==`function`?i.apply(this,arguments):i,c=a.invert(o),l=typeof r==`function`?r.apply(this,arguments):r;return n(b(y(a,l),o,c),e,s)},i,a)},v.translateBy=function(e,r,i,a){v.transform(e,function(){return n(this.__zoom.translate(typeof r==`function`?r.apply(this,arguments):r,typeof i==`function`?i.apply(this,arguments):i),t.apply(this,arguments),s)},null,a)},v.translateTo=function(e,r,i,a,o){v.transform(e,function(){var e=t.apply(this,arguments),o=this.__zoom,c=a==null?x(e):typeof a==`function`?a.apply(this,arguments):a;return n(qi.translate(c[0],c[1]).scale(o.k).translate(typeof r==`function`?-r.apply(this,arguments):-r,typeof i==`function`?-i.apply(this,arguments):-i),e,s)},a,o)};function y(e,t){return t=Math.max(o[0],Math.min(o[1],t)),t===e.k?e:new Ki(t,e.x,e.y)}function b(e,t,n){var r=t[0]-n[0]*e.k,i=t[1]-n[1]*e.k;return r===e.x&&i===e.y?e:new Ki(e.k,r,i)}function x(e){return[(+e[0][0]+ +e[1][0])/2,(+e[0][1]+ +e[1][1])/2]}function ee(e,n,r,i){e.on(`start.zoom`,function(){S(this,arguments).event(i).start()}).on(`interrupt.zoom end.zoom`,function(){S(this,arguments).event(i).end()}).tween(`zoom`,function(){var e=this,a=arguments,o=S(e,a).event(i),s=t.apply(e,a),c=r==null?x(s):typeof r==`function`?r.apply(e,a):r,u=Math.max(s[1][0]-s[0][0],s[1][1]-s[0][1]),d=e.__zoom,f=typeof n==`function`?n.apply(e,a):n,p=l(d.invert(c).concat(u/d.k),f.invert(c).concat(u/f.k));return function(e){if(e===1)e=f;else{var t=p(e),n=u/t[2];e=new Ki(n,c[0]-t[0]*n,c[1]-t[1]*n)}o.zoom(null,e)}})}function S(e,t,n){return!n&&e.__zooming||new C(e,t)}function C(e,n){this.that=e,this.args=n,this.active=0,this.sourceEvent=null,this.extent=t.apply(e,n),this.taps=0}C.prototype={event:function(e){return e&&(this.sourceEvent=e),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit(`start`)),this},zoom:function(e,t){return this.mouse&&e!==`mouse`&&(this.mouse[1]=t.invert(this.mouse[0])),this.touch0&&e!==`touch`&&(this.touch0[1]=t.invert(this.touch0[0])),this.touch1&&e!==`touch`&&(this.touch1[1]=t.invert(this.touch1[0])),this.that.__zoom=t,this.emit(`zoom`),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit(`end`)),this},emit:function(e){var t=A(this.that).datum();u.call(e,this.that,new Gi(e,{sourceEvent:this.sourceEvent,target:v,type:e,transform:this.that.__zoom,dispatch:u}),t)}};function te(t,...i){if(!e.apply(this,arguments))return;var a=S(this,i).event(t),c=this.__zoom,l=Math.max(o[0],Math.min(o[1],c.k*2**r.apply(this,arguments))),u=j(t);if(a.wheel)(a.mouse[0][0]!==u[0]||a.mouse[0][1]!==u[1])&&(a.mouse[1]=c.invert(a.mouse[0]=u)),clearTimeout(a.wheel);else if(c.k===l)return;else a.mouse=[u,c.invert(u)],Rt(this),a.start();Xi(t),a.wheel=setTimeout(d,h),a.zoom(`mouse`,n(b(y(c,l),a.mouse[0],a.mouse[1]),a.extent,s));function d(){a.wheel=null,a.end()}}function w(t,...r){if(p||!e.apply(this,arguments))return;var i=t.currentTarget,a=S(this,r,!0).event(t),o=A(t.view).on(`mousemove.zoom`,d,!0).on(`mouseup.zoom`,f,!0),c=j(t,i),l=t.clientX,u=t.clientY;Fi(t.view),Yi(t),a.mouse=[c,this.__zoom.invert(c)],Rt(this),a.start();function d(e){if(Xi(e),!a.moved){var t=e.clientX-l,r=e.clientY-u;a.moved=t*t+r*r>g}a.event(e).zoom(`mouse`,n(b(a.that.__zoom,a.mouse[0]=j(e,i),a.mouse[1]),a.extent,s))}function f(e){o.on(`mousemove.zoom mouseup.zoom`,null),Ii(e.view,a.moved),Xi(e),a.event(e).end()}}function T(r,...i){if(e.apply(this,arguments)){var a=this.__zoom,o=j(r.changedTouches?r.changedTouches[0]:r,this),l=a.invert(o),u=a.k*(r.shiftKey?.5:2),d=n(b(y(a,u),o,l),t.apply(this,i),s);Xi(r),c>0?A(this).transition().duration(c).call(ee,d,o,r):A(this).call(v.transform,d,o,r)}}function ne(t,...n){if(e.apply(this,arguments)){var r=t.touches,i=r.length,a=S(this,n,t.changedTouches.length===i).event(t),o,s,c,l;for(Yi(t),s=0;s<i;++s)c=r[s],l=j(c,this),l=[l,this.__zoom.invert(l),c.identifier],a.touch0?!a.touch1&&a.touch0[2]!==l[2]&&(a.touch1=l,a.taps=0):(a.touch0=l,o=!0,a.taps=1+!!d);d&&=clearTimeout(d),o&&(a.taps<2&&(f=l[0],d=setTimeout(function(){d=null},m)),Rt(this),a.start())}}function re(e,...t){if(this.__zooming){var r=S(this,t).event(e),i=e.changedTouches,a=i.length,o,c,l,u;for(Xi(e),o=0;o<a;++o)c=i[o],l=j(c,this),r.touch0&&r.touch0[2]===c.identifier?r.touch0[0]=l:r.touch1&&r.touch1[2]===c.identifier&&(r.touch1[0]=l);if(c=r.that.__zoom,r.touch1){var d=r.touch0[0],f=r.touch0[1],p=r.touch1[0],m=r.touch1[1],h=(h=p[0]-d[0])*h+(h=p[1]-d[1])*h,g=(g=m[0]-f[0])*g+(g=m[1]-f[1])*g;c=y(c,Math.sqrt(h/g)),l=[(d[0]+p[0])/2,(d[1]+p[1])/2],u=[(f[0]+m[0])/2,(f[1]+m[1])/2]}else if(r.touch0)l=r.touch0[0],u=r.touch0[1];else return;r.zoom(`touch`,n(b(c,l,u),r.extent,s))}}function ie(e,...t){if(this.__zooming){var n=S(this,t).event(e),r=e.changedTouches,i=r.length,a,o;for(Yi(e),p&&clearTimeout(p),p=setTimeout(function(){p=null},m),a=0;a<i;++a)o=r[a],n.touch0&&n.touch0[2]===o.identifier?delete n.touch0:n.touch1&&n.touch1[2]===o.identifier&&delete n.touch1;if(n.touch1&&!n.touch0&&(n.touch0=n.touch1,delete n.touch1),n.touch0)n.touch0[1]=this.__zoom.invert(n.touch0[0]);else if(n.end(),n.taps===2&&(o=j(o,this),Math.hypot(f[0]-o[0],f[1]-o[1])<_)){var s=A(this).on(`dblclick.zoom`);s&&s.apply(this,arguments)}}}return v.wheelDelta=function(e){return arguments.length?(r=typeof e==`function`?e:Wi(+e),v):r},v.filter=function(t){return arguments.length?(e=typeof t==`function`?t:Wi(!!t),v):e},v.touchable=function(e){return arguments.length?(a=typeof e==`function`?e:Wi(!!e),v):a},v.extent=function(e){return arguments.length?(t=typeof e==`function`?e:Wi([[+e[0][0],+e[0][1]],[+e[1][0],+e[1][1]]]),v):t},v.scaleExtent=function(e){return arguments.length?(o[0]=+e[0],o[1]=+e[1],v):[o[0],o[1]]},v.translateExtent=function(e){return arguments.length?(s[0][0]=+e[0][0],s[1][0]=+e[1][0],s[0][1]=+e[0][1],s[1][1]=+e[1][1],v):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},v.constrain=function(e){return arguments.length?(n=e,v):n},v.duration=function(e){return arguments.length?(c=+e,v):c},v.interpolate=function(e){return arguments.length?(l=e,v):l},v.on=function(){var e=u.on.apply(u,arguments);return e===u?v:e},v.clickDistance=function(e){return arguments.length?(g=(e=+e)*e,v):Math.sqrt(g)},v.tapDistance=function(e){return arguments.length?(_=+e,v):_},v}function ia(e,t){this.v=e,this.k=t}function aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function oa(e){if(Array.isArray(e))return e}function sa(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ca(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function la(e,t){return oa(e)||sa(e,t)||ua(e,t)||ca()}function ua(e,t){if(e){if(typeof e==`string`)return aa(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?aa(e,t):void 0}}function da(e){var t,n;function r(t,n){try{var a=e[t](n),o=a.value,s=o instanceof ia;Promise.resolve(s?o.v:o).then(function(n){if(s){var c=t===`return`&&o.k?t:`next`;if(!o.k||n.done)return r(c,n);n=e[c](n).value}i(!!a.done,n)},function(e){r(`throw`,e)})}catch(e){i(2,e)}}function i(e,i){e===2?t.reject(i):t.resolve({value:i,done:e}),(t=t.next)?r(t.key,t.arg):n=null}this._invoke=function(e,i){return new Promise(function(a,o){var s={key:e,arg:i,resolve:a,reject:o,next:null};n?n=n.next=s:(t=n=s,r(e,i))})},typeof e.return!=`function`&&(this.return=void 0)}da.prototype[typeof Symbol==`function`&&Symbol.asyncIterator||`@@asyncIterator`]=function(){return this},da.prototype.next=function(e){return this._invoke(`next`,e)},da.prototype.throw=function(e){return this._invoke(`throw`,e)},da.prototype.return=function(e){return this._invoke(`return`,e)};var fa=Object.entries,pa=Object.setPrototypeOf,ma=Object.isFrozen,ha=Object.getPrototypeOf,ga=Object.getOwnPropertyDescriptor,N=Object.freeze,P=Object.seal,_a=Object.create,va=typeof Reflect<`u`&&Reflect,ya=va.apply,ba=va.construct;N||=function(e){return e},P||=function(e){return e},ya||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},ba||=function(e){return new e(...[...arguments].slice(1))};var xa=I(Array.prototype.forEach);Array.prototype.indexOf;var Sa=I(Array.prototype.lastIndexOf),Ca=I(Array.prototype.pop),wa=I(Array.prototype.push),Ta=I(Array.prototype.slice),Ea=I(Array.prototype.splice),Da=Array.isArray,Oa=Wa(Set),ka=I(Set.prototype.add),Aa=I(Set.prototype.has),ja=I(String.prototype.toLowerCase),Ma=I(String.prototype.toString),Na=I(String.prototype.match),Pa=I(String.prototype.replace),Fa=I(String.prototype.indexOf),Ia=I(String.prototype.trim),La=I(Number.prototype.toString),Ra=I(Boolean.prototype.toString),za=typeof BigInt>`u`?null:I(BigInt.prototype.toString),Ba=typeof Symbol>`u`?null:I(Symbol.prototype.toString),Va=I(Object.prototype.hasOwnProperty),Ha=I(Object.prototype.toString),F=I(RegExp.prototype.test),Ua=Wa(TypeError);function I(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return ya(e,t,n)}}function Wa(e){return function(){return ba(e,[...arguments])}}function L(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ja;if(pa&&pa(e,null),!Da(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(ma(t)||(t[r]=e),i=e)}e[i]=!0}return e}function Ga(e){for(let t=0;t<e.length;t++)Va(e,t)||(e[t]=null);return e}function Ka(e){let t=_a(null);for(let r of fa(e)){var n=la(r,2);let i=n[0],a=n[1];Va(e,i)&&(t[i]=Da(a)?Ga(a):a&&typeof a==`object`&&a.constructor===Object?Ka(a):a)}return t}function qa(e){switch(typeof e){case`string`:return e;case`number`:return La(e);case`boolean`:return Ra(e);case`bigint`:return za?za(e):`0`;case`symbol`:return Ba?Ba(e):`Symbol()`;case`undefined`:return Ha(e);case`function`:case`object`:{if(e===null)return Ha(e);let t=e,n=Ja(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:Ha(e)}return Ha(e)}default:return Ha(e)}}function Ja(e,t){for(;e!==null;){let n=ga(e,t);if(n){if(n.get)return I(n.get);if(typeof n.value==`function`)return I(n.value)}e=ha(e)}function n(){return null}return n}function Ya(e,t){for(;e!==null;){let n=ga(e,t);if(n)return n.get?I(n.get):null;e=ha(e)}return null}function Xa(e){try{return F(e,``),!0}catch{return!1}}var Za=N(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),Qa=N(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),$a=N([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),eo=N([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),to=N(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),no=N([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),ro=N([`#text`]),io=N(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),ao=N(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),oo=N(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),so=N([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),co=P(/{{[\w\W]*|^[\w\W]*}}/g),lo=P(/<%[\w\W]*|^[\w\W]*%>/g),uo=P(/\${[\w\W]*/g),fo=P(/^data-[\-\w.\u00B7-\uFFFF]+$/),po=P(/^aria-[\-\w]+$/),mo=P(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ho=P(/^(?:\w+script|data):/i),go=P(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),_o=P(/^html$/i),vo=P(/^[a-z][.\w]*(-[.\w]+)+$/i),yo=P(/<[/\w!]/g),bo=P(/<[/\w]/g),xo=P(/<\/no(script|embed|frames)/i),So=P(/\/>/i),R={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Co=N(L({},[`style`,`script`,`xmp`,`iframe`,`noembed`,`noframes`,`plaintext`,`noscript`])),wo=function(){return typeof window>`u`?null:window},To=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Eo=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Do=function(e,t,n,r){return Va(e,t)&&Da(e[t])?L(r.base?Ka(r.base):{},e[t],r.transform):n},Oo=function(e,t,n){let r=Va(e,t)?e[t]:void 0;return r&&typeof r==`object`?Ka(r):n()};function ko(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:wo(),t=e=>ko(e);if(t.version=`3.4.17`,t.removed=[],!e||!e.document||e.document.nodeType!==R.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,f=Ja(d,`cloneNode`),p=Ja(d,`remove`),m=Ja(d,`removeAttributeNode`),h=Ja(d,`nextSibling`),g=Ja(d,`childNodes`),_=Ja(d,`parentNode`),v=Ja(d,`shadowRoot`),y=Ja(d,`attributes`),b=o&&o.prototype?Ja(o.prototype,`nodeType`):null,x=o&&o.prototype?Ja(o.prototype,`nodeName`):null,ee=o&&o.prototype?Ja(o.prototype,`ownerDocument`):null,S=function(e){return b?b(e):e.nodeType},C=function(e){return x?x(e):e.nodeName},te=Ya(d,`namespaceURI`),w=function(e){return te?te(e):e.namespaceURI};if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let T,ne=``,re,ie=!1,ae=0,oe=function(){if(ae>0)throw Ua(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},se=function(e){oe(),ae++;try{return T.createHTML(e)}finally{ae--}},ce=function(e){oe(),ae++;try{return T.createScriptURL(e)}finally{ae--}},le=function(){return ie||=(re=To(u,i),!0),re},ue=n,de=ue.implementation,fe=ue.createNodeIterator,pe=ue.createDocumentFragment,me=ue.getElementsByTagName,he=r.importNode,E=Eo();t.isSupported=typeof fa==`function`&&typeof _==`function`&&de&&de.createHTMLDocument!==void 0;let ge=co,_e=lo,ve=uo,ye=fo,be=po,xe=ho,Se=go,Ce=vo,we=mo,D=null,Te=L({},[...Za,...Qa,...$a,...to,...ro]),O=null,Ee=L({},[...io,...ao,...oo,...so]),De=Object.seal(_a(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,ke=null,Ae=Object.seal(_a(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),je=!0,Me=!0,Ne=!1,Pe=!0,Fe=!1,Ie=!0,Le=!1,Re=!1,ze=null,Be=null,Ve=!1,He=!1,Ue=!1,We=!1,Ge=!0,Ke=!1,qe=`user-content-`,Je=!0,Ye=!1,Xe=null,Ze={},Qe=null,$e=L({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),et=null,tt=L({},[`audio`,`video`,`img`,`source`,`image`,`track`]),nt=null,rt=L({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),it=`http://www.w3.org/1998/Math/MathML`,at=`http://www.w3.org/2000/svg`,ot=`http://www.w3.org/1999/xhtml`,st=ot,ct=!1,lt=null,ut=L({},[it,at,ot],Ma),dt=N([`mi`,`mo`,`mn`,`ms`,`mtext`]),ft=L({},dt),pt=N([`annotation-xml`]),mt=L({},pt),ht=L({},[`title`,`style`,`font`,`a`,`script`]),gt=null,_t=[`application/xhtml+xml`,`text/html`],k=null,vt=null,yt=n.createElement(`form`),bt=function(e){return e instanceof RegExp||e instanceof Function},xt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(vt&&vt===e)return;e&&typeof e==`object`||(e={}),e=Ka(e),gt=_t.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,k=gt===`application/xhtml+xml`?Ma:ja,D=Do(e,`ALLOWED_TAGS`,Te,{transform:k}),O=Do(e,`ALLOWED_ATTR`,Ee,{transform:k}),lt=Do(e,`ALLOWED_NAMESPACES`,ut,{transform:Ma}),nt=Do(e,`ADD_URI_SAFE_ATTR`,rt,{transform:k,base:rt}),et=Do(e,`ADD_DATA_URI_TAGS`,tt,{transform:k,base:tt}),Qe=Do(e,`FORBID_CONTENTS`,$e,{transform:k}),Oe=Do(e,`FORBID_TAGS`,Ka({}),{transform:k}),ke=Do(e,`FORBID_ATTR`,Ka({}),{transform:k}),Ze=Va(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?Ka(e.USE_PROFILES):e.USE_PROFILES:!1,je=e.ALLOW_ARIA_ATTR!==!1,Me=e.ALLOW_DATA_ATTR!==!1,Ne=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Pe=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Fe=e.SAFE_FOR_TEMPLATES||!1,Ie=e.SAFE_FOR_XML!==!1,Le=e.WHOLE_DOCUMENT||!1,He=e.RETURN_DOM||!1,Ue=e.RETURN_DOM_FRAGMENT||!1,We=e.RETURN_TRUSTED_TYPE||!1,Ve=e.FORCE_BODY||!1,Ge=e.SANITIZE_DOM!==!1,Ke=e.SANITIZE_NAMED_PROPS||!1,Je=e.KEEP_CONTENT!==!1,Ye=e.IN_PLACE||!1,we=Xa(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:mo,st=typeof e.NAMESPACE==`string`?e.NAMESPACE:ot,ft=Oo(e,`MATHML_TEXT_INTEGRATION_POINTS`,()=>L({},dt)),mt=Oo(e,`HTML_INTEGRATION_POINTS`,()=>L({},pt));let t=Oo(e,`CUSTOM_ELEMENT_HANDLING`,()=>_a(null));if(De=_a(null),Va(t,`tagNameCheck`)&&bt(t.tagNameCheck)&&(De.tagNameCheck=t.tagNameCheck),Va(t,`attributeNameCheck`)&&bt(t.attributeNameCheck)&&(De.attributeNameCheck=t.attributeNameCheck),Va(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(De.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),P(De),Fe&&(Me=!1),Ue&&(He=!0),Ze&&(D=L({},ro),O=_a(null),Ze.html===!0&&(L(D,Za),L(O,io)),Ze.svg===!0&&(L(D,Qa),L(O,ao),L(O,so)),Ze.svgFilters===!0&&(L(D,$a),L(O,ao),L(O,so)),Ze.mathMl===!0&&(L(D,to),L(O,oo),L(O,so))),Ae.tagCheck=null,Ae.attributeCheck=null,Va(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?Ae.tagCheck=e.ADD_TAGS:Da(e.ADD_TAGS)&&(D===Te&&(D=Ka(D)),L(D,e.ADD_TAGS,k))),Va(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?Ae.attributeCheck=e.ADD_ATTR:Da(e.ADD_ATTR)&&(O===Ee&&(O=Ka(O)),L(O,e.ADD_ATTR,k))),Va(e,`ADD_FORBID_CONTENTS`)&&Da(e.ADD_FORBID_CONTENTS)&&(Qe===$e&&(Qe=Ka(Qe)),L(Qe,e.ADD_FORBID_CONTENTS,k)),Je&&(D[`#text`]=!0),Le&&L(D,[`html`,`head`,`body`]),D.table&&(L(D,[`tbody`]),delete Oe.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw Ua(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw Ua(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=T;T=e.TRUSTED_TYPES_POLICY;try{ne=se(``)}catch(e){throw T=t,e}}else e.TRUSTED_TYPES_POLICY===null?(T=void 0,ne=``):(T===void 0&&(T=le()),T&&typeof ne==`string`&&(ne=se(``)));N&&N(e),vt=e},St=L({},[...Qa,...$a,...eo]),Ct=L({},[...to,...no]),wt=function(e,t,n){return t.namespaceURI===ot?e===`svg`:t.namespaceURI===it?e===`svg`&&(n===`annotation-xml`||ft[n]):!!St[e]},Tt=function(e,t,n){return t.namespaceURI===ot?e===`math`:t.namespaceURI===at?e===`math`&&mt[n]:!!Ct[e]},Et=function(e,t,n){return t.namespaceURI===at&&!mt[n]||t.namespaceURI===it&&!ft[n]?!1:!Ct[e]&&(ht[e]||!St[e])},Dt=function(e){let t=w(e),n=ja(C(e)),r=_(e),i,a;return r&&S(r)===R.element?(i={namespaceURI:w(r)},a=ja(C(r))):(i={namespaceURI:st},a=`template`),lt[t]?t===at?wt(n,i,a):t===it?Tt(n,i,a):t===ot?Et(n,i,a):!!(gt===`application/xhtml+xml`&&lt[t]):!1},Ot=function(e){wa(t.removed,{element:e});try{_(e).removeChild(e)}catch{if(p(e),!_(e))throw Ua(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},A=function(e,t,n){try{m(e,t)}catch{try{e.removeAttribute(n)}catch{}}},kt=function(e){Mt(e);let t=g(e);t&&xa(Ta(t),e=>{try{p(e)}catch{}});let n=S(e)===R.element?y(e):null;if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;typeof i==`string`&&A(e,r,i)}},j=function(e,n,r){if(!r)try{r=n.getAttributeNode(e)}catch{r=null}wa(t.removed,{attribute:r||null,from:n});try{r?m(n,r):n.removeAttribute(e)}catch{try{n.removeAttribute(e)}catch{}}if(e===`is`){if(He||Ue)try{Ot(n)}catch{}else try{n.setAttribute(e,``)}catch{}}},At=function(e){let t=y(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;typeof i!=`string`||O[k(i)]||A(e,r,i)}},jt=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=[e];for(;r.length>0;){let e=r.pop();if(t(e)===!1)continue;if(n&&S(e)===R.element){let t=v(e);M(t)&&r.push(t)}let i=g(e);if(i)for(let e=i.length-1;e>=0;--e)r.push(i[e])}},Mt=function(e){jt(e,e=>{S(e)===R.element&&At(e)})},Nt=function(e){let t=[];return jt(e,e=>{t.push(e)},!0),t},Pt=function(e,t){let n=Oa();xa(Nt(e),e=>{S(e)===R.element&&ka(n,e)}),xa(t,e=>{S(e)===R.element&&!Aa(n,e)&&At(e)})},Ft=function(e,n){let r=!1;return xa(t.removed,t=>{t.element&&(r||=t.element===e,Mt(t.element))}),Pt(e,n),r},It=function(e,t){let n=Xe,r=null,i=()=>(r||(r=Oa(),xa(t,e=>{ka(r,e)})),r);for(let t=0;;t++){let r=Nt(e),a=[e],o=!1;if(xa(r,e=>{S(e)===R.documentFragment?wa(a,e):!o&&!Aa(n,e)&&(o=Aa(i(),e))}),!o)return;if(t>=8)throw Ua(`the tree kept changing during in-place sanitization; refusing to return it`);xa(a,(t,n)=>{Lt(t,n>0,e,i())})}},Lt=function(e,t,n,r){let i=Ht(e),a;for(;a=i.nextNode();)Aa(r,a)&&!Aa(Xe,a)&&(t&&Jt(E.uponSanitizeShadowNode,a,null),en(a,n),cn(a,n),M(a.content)&&ln(a.content))},Rt=function(e){Xe&&ka(Xe,e)},zt=function(e,t){return Ie?e===`patchsrc`||e===`for`&&t!==`label`&&t!==`output`:!1},Bt=function(e){Ie&&jt(e,e=>{let t=S(e);if(t===R.processingInstruction||t===R.comment&&F(bo,e.data)){try{p(e)}catch{}return!1}if(t===R.element){let t=e,n=k(C(e));try{t.hasAttribute&&t.hasAttribute(`patchsrc`)&&t.removeAttribute(`patchsrc`),t.hasAttribute&&t.hasAttribute(`for`)&&zt(`for`,n)&&t.removeAttribute(`for`)}catch{}}return!0})},Vt=function(e){let t=null,r=null;if(Ve)e=`<remove></remove>`+e;else{let t=Na(e,/^[\r\n\t ]+/);r=t&&t[0]}gt===`application/xhtml+xml`&&st===ot&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=T?se(e):e;if(st===ot)try{t=new l().parseFromString(i,gt)}catch{}if(!t||!t.documentElement){t=de.createDocument(st,`template`,null);try{t.documentElement.innerHTML=ct?ne:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),st===ot?me.call(t,Le?`html`:`body`)[0]:Le?t.documentElement:a},Ht=function(e){let t=ee?ee(e):e.ownerDocument;return fe.call(t||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Ut=function(e){return e=Pa(e,ge,` `),e=Pa(e,_e,` `),e=Pa(e,ve,` `),e},Wt=function(e){Gt(e);let t=e.querySelectorAll?.call(e,`template`);t&&xa(t,e=>{M(e.content)&&Wt(e.content)})},Gt=function(e){e.normalize();let t=ee?ee(e):e.ownerDocument,n=fe.call(t||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),r=n.nextNode();for(;r;)r.data=Ut(r.data),r=n.nextNode()},Kt=function(e){let t=x?x(e):null;return typeof t!=`string`||k(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==y(e)||typeof e.removeAttribute!=`function`||typeof e.removeAttributeNode!=`function`||typeof e.getAttributeNode!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==b(e)||e.childNodes!==g(e)},M=function(e){if(!b||typeof e!=`object`||!e)return!1;try{return b(e)===R.documentFragment}catch{return!1}},qt=function(e){if(!b||typeof e!=`object`||!e)return!1;try{return typeof b(e)==`number`}catch{return!1}};function Jt(e,n,r){e.length!==0&&xa(e,e=>{e.call(t,n,r,vt)})}let Yt=function(e,t){return!!(Ie&&e.hasChildNodes()&&!qt(e.firstElementChild)&&F(yo,e.textContent)&&F(yo,e.innerHTML)||Ie&&Co[t]&&S(e)===R.element&&w(e)===ot&&(qt(e.firstElementChild)||typeof e.textContent==`string`&&F(yo,e.textContent))||e.nodeType===R.processingInstruction||Ie&&e.nodeType===R.comment&&F(bo,e.data))},Xt=function(e,t){return e instanceof RegExp?F(e,t):e instanceof Function&&!!e(t,...[...arguments].slice(2))},Zt=function(e,t,n){if(!Oe[t]&&rn(t)&&Xt(De.tagNameCheck,t))return!1;if(Je&&!Qe[t]&&!Qe[ja(t)]){let t=_(e),r=g(e);if(r&&t){let i=r.length;for(let a=i-1;a>=0;--a){let i=e===n?f(r[a],!0):r[a];t.insertBefore(i,h(e))}}}return Ot(e),!0},Qt=function(e,t,n,r){return e.length===0?t:t===n||t===r?Ka(t):t},$t=function(e,t){return e===t||_(e)!==null?!1:(Ye&&Mt(e),!0)},en=function(e,n){if(Rt(e),Jt(E.beforeSanitizeElements,e,null),$t(e,n))return!0;if(Kt(e))return Ot(e),!0;let r=k(C(e));if(D=Qt(E.uponSanitizeElement,D,Te,ze),Jt(E.uponSanitizeElement,e,{tagName:r,allowedTags:D}),$t(e,n))return!0;if(Yt(e,r))return Ot(e),!0;if(Oe[r]||!(Ae.tagCheck instanceof Function&&Ae.tagCheck(r))&&!D[r]){let t=Zt(e,r,n);return t===!1&&(Jt(E.afterSanitizeElements,e,null),$t(e,n))?!0:t}if(S(e)===R.element&&!Dt(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&F(xo,e.innerHTML))return Ot(e),!0;if(Fe&&e.nodeType===R.text){let n=Ut(e.textContent);e.textContent!==n&&(wa(t.removed,{element:e.cloneNode()}),e.textContent=n)}return Jt(E.afterSanitizeElements,e,null),$t(e,n)},tn=function(e,t,r){if(ke[t]||zt(t,e)||Ge&&(t===`id`||t===`name`)&&(r in n||r in yt))return!1;let i=O[t]||Ae.attributeCheck instanceof Function&&Ae.attributeCheck(t,e);return Me&&F(ye,t)||je&&F(be,t)?!0:i?nt[t]||F(we,Pa(r,Se,``))||(t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&Fa(r,`data:`)===0&&et[e]||Ne&&!F(xe,Pa(r,Se,``))?!0:!r:rn(e)&&Xt(De.tagNameCheck,e)&&Xt(De.attributeNameCheck,t,e)||t===`is`&&De.allowCustomizedBuiltInElements&&Xt(De.tagNameCheck,r)},nn=L({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),rn=function(e){return!nn[ja(e)]&&F(Ce,e)},an=function(e,t,n,r){if(T&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!n)switch(u.getAttributeType(e,t)){case`TrustedHTML`:return se(r);case`TrustedScriptURL`:return ce(r)}return r},on=function(e,t,n,r){try{return n?e.setAttributeNS(n,t,r):e.setAttribute(t,r),!Kt(e)||(Ot(e),!1)}catch{return j(t,e),!1}},sn=function(e,t){return Ie&&F(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,t)?!0:ja(e)===`attributename`&&Na(t,`href`)!==null},cn=function(e,n){if(Jt(E.beforeSanitizeAttributes,e,null),$t(e,n))return;let r=e.attributes;if(!r||Kt(e))return;O=Qt(E.uponSanitizeAttribute,O,Ee,Be);let i={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:O,forceKeepAttr:void 0},a=r.length,o=k(e.nodeName);for(;a--;){let n=r[a],s=n.name,c=n.namespaceURI,l=n.value,u=k(s),d=l,f=s===`value`?d:Ia(d),p=!1;i.attrName=u,i.attrValue=f,i.keepAttr=!0,i.forceKeepAttr=void 0,Jt(E.uponSanitizeAttribute,e,i),f=i.attrValue,Ke&&(u===`id`||u===`name`)&&Fa(f,qe)!==0&&(j(s,e,n),f=qe+f,p=!0),sn(s,f)?j(s,e,n):i.forceKeepAttr||(i.keepAttr?!Pe&&F(So,f)?j(s,e,n):(Fe&&(f=Ut(f)),tn(o,u,f)?(f=an(o,u,c,f),f!==d&&on(e,s,c,f)&&p&&Ca(t.removed)):j(s,e,n)):j(s,e,n))}Jt(E.afterSanitizeAttributes,e,null),$t(e,n)},ln=function(e){let t=null,n=Ht(e);for(Jt(E.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(Jt(E.uponSanitizeShadowNode,t,null),en(t,e),cn(t,e),M(t.content)&&ln(t.content),S(t)===R.element){let e=v(t);M(e)&&(un(e),ln(e))}Fe&&Gt(e),Jt(E.afterSanitizeShadowDOM,e,null)},un=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){ln(e.shadow);continue}let n=e.node,r=S(n)===R.element,i=g(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=x?x(n):null;if(typeof e==`string`&&k(e)===`template`){let e=n.content;M(e)&&t.push({node:e,shadow:null})}}if(r){let e=v(n);M(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(ct=!e,ct&&(e=`<!-->`),typeof e!=`string`&&!qt(e)&&(e=qa(e),typeof e!=`string`))throw Ua(`dirty is not a string, aborting`);if(!t.isSupported)return e;Re?(D=ze,O=Be):xt(n),(E.uponSanitizeElement.length>0||E.uponSanitizeAttribute.length>0)&&(D=Ka(D)),E.uponSanitizeAttribute.length>0&&(O=Ka(O)),t.removed=[];let c=Ye&&typeof e!=`string`&&qt(e),l=[],u=Xe;if(c){Bt(e);let t=C(e);if(typeof t==`string`){let n=k(t);if(!D[n]||Oe[n])throw kt(e),Ua(`root node is forbidden and cannot be sanitized in-place`)}if(Kt(e))throw kt(e),Ua(`root node is clobbered and cannot be sanitized in-place`);l=Nt(e),Xe=Oa()}else if(qt(e))i=Vt(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===R.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),un(i);else{if(!He&&!Fe&&!Le&&e.indexOf(`<`)===-1)return T&&We?se(e):e;if(i=Vt(e),!i)return He?null:We?ne:``}i&&Ve&&Ot(i.firstChild);let d=c?e:i;try{c&&un(e);let t=Ht(d);for(;o=t.nextNode();)en(o,d),cn(o,d),M(o.content)&&ln(o.content);c&&It(e,l)}catch(t){throw c&&(kt(e),Ft(e,l)),t}finally{Xe=u}if(c){if(Ft(e,l))throw Ua(`a node selected for removal could not be safely returned; refusing to sanitize in place`);return Fe&&Wt(e),e}if(He){if(Fe&&Wt(i),Ue)for(s=pe.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(O.shadowroot||O.shadowrootmode)&&(s=he.call(r,s,!0)),s}let f=Le?i.outerHTML:i.innerHTML;return Le&&D[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&F(_o,i.ownerDocument.doctype.name)&&(f=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+f),Fe&&(f=Ut(f)),T&&We?se(f):f},t.setConfig=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xt(e),Re=!0,ze=D,Be=O},t.clearConfig=function(){vt=null,Re=!1,ze=null,Be=null,T=re,ne=``},t.isValidAttribute=function(e,t,n){vt||xt({});let r=k(e),i=k(t);return typeof n==`string`&&(sn(t,n)||!Pe&&F(So,n))?!1:tn(r,i,n)},t.addHook=function(e,t){typeof t==`function`&&Va(E,e)&&wa(E[e],t)},t.removeHook=function(e,t){if(Va(E,e)){if(t!==void 0){let n=Sa(E[e],t);return n===-1?void 0:Ea(E[e],n,1)[0]}return Ca(E[e])}},t.removeHooks=function(e){Va(E,e)&&(E[e]=[])},t.removeAllHooks=function(){E=Eo()},t}var Ao=ko();function jo(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Mo(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function No(e){let t,n,r;e.length===2?(t=e===jo||e===Mo?e:Po,n=e,r=e):(t=jo,n=(t,n)=>jo(e(t),n),r=(t,n)=>e(t)-n);function i(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<0?i=t+1:a=t}while(i<a)}return i}function a(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<=0?i=t+1:a=t}while(i<a)}return i}function o(e,t,n=0,a=e.length){let o=i(e,t,n,a-1);return o>n&&r(e[o-1],t)>-r(e[o],t)?o-1:o}return{left:i,center:o,right:a}}function Po(){return 0}function Fo(e){return e===null?NaN:+e}var Io=No(jo),Lo=Io.right;Io.left,No(Fo).center;var Ro=Math.sqrt(50),zo=Math.sqrt(10),Bo=Math.sqrt(2);function Vo(e,t,n){let r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/10**i,o=a>=Ro?10:a>=zo?5:a>=Bo?2:1,s,c,l;return i<0?(l=10**-i/o,s=Math.round(e*l),c=Math.round(t*l),s/l<e&&++s,c/l>t&&--c,l=-l):(l=10**i*o,s=Math.round(e/l),c=Math.round(t/l),s*l<e&&++s,c*l>t&&--c),c<s&&.5<=n&&n<2?Vo(e,t,n*2):[s,c,l]}function Ho(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];let r=t<e,[i,a,o]=r?Vo(t,e,n):Vo(e,t,n);if(!(a>=i))return[];let s=a-i+1,c=Array(s);if(r){if(o<0)for(let e=0;e<s;++e)c[e]=(a-e)/-o;else for(let e=0;e<s;++e)c[e]=(a-e)*o}else if(o<0)for(let e=0;e<s;++e)c[e]=(i+e)/-o;else for(let e=0;e<s;++e)c[e]=(i+e)*o;return c}function Uo(e,t,n){return t=+t,e=+e,n=+n,Vo(e,t,n)[2]}function Wo(e,t,n){t=+t,e=+e,n=+n;let r=t<e,i=r?Uo(t,e,n):Uo(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function Go(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,a=Array(i);++r<i;)a[r]=e+r*n;return a}function Ko(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e)}return this}function qo(e){return function(){return e}}function Jo(e){return+e}var Yo=[0,1];function Xo(e){return e}function Zo(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:qo(isNaN(t)?NaN:.5)}function Qo(e,t){var n;return e>t&&(n=e,e=t,t=n),function(n){return Math.max(e,Math.min(t,n))}}function $o(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=Zo(i,r),a=n(o,a)):(r=Zo(r,i),a=n(a,o)),function(e){return a(r(e))}}function es(e,t,n){var r=Math.min(e.length,t.length)-1,i=Array(r),a=Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=Zo(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(t){var n=Lo(e,t,1,r)-1;return a[n](i[n](t))}}function ts(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function ns(){var e=Yo,t=Yo,n=Hn,r,i,a,o=Xo,s,c,l;function u(){var n=Math.min(e.length,t.length);return o!==Xo&&(o=Qo(e[0],e[n-1])),s=n>2?es:$o,c=l=null,d}function d(i){return i==null||isNaN(i=+i)?a:(c||=s(e.map(r),t,n))(r(o(i)))}return d.invert=function(n){return o(i((l||=s(t,e.map(r),Fn))(n)))},d.domain=function(t){return arguments.length?(e=Array.from(t,Jo),u()):e.slice()},d.range=function(e){return arguments.length?(t=Array.from(e),u()):t.slice()},d.rangeRound=function(e){return t=Array.from(e),n=Un,u()},d.clamp=function(e){return arguments.length?(o=e?!0:Xo,u()):o!==Xo},d.interpolate=function(e){return arguments.length?(n=e,u()):n},d.unknown=function(e){return arguments.length?(a=e,d):a},function(e,t){return r=e,i=t,u()}}function rs(){return ns()(Xo,Xo)}function is(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString(`en`).replace(/,/g,``):e.toString(10)}function as(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf(`e`),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function os(e){return e=as(Math.abs(e)),e?e[1]:NaN}function ss(e,t){return function(n,r){for(var i=n.length,a=[],o=0,s=e[0],c=0;i>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),a.push(n.substring(i-=s,i+s)),!((c+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(t)}}function cs(e){return function(t){return t.replace(/[0-9]/g,function(t){return e[+t]})}}var ls=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function us(e){if(!(t=ls.exec(e)))throw Error(`invalid format: `+e);var t;return new ds({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}us.prototype=ds.prototype;function ds(e){this.fill=e.fill===void 0?` `:e.fill+``,this.align=e.align===void 0?`>`:e.align+``,this.sign=e.sign===void 0?`-`:e.sign+``,this.symbol=e.symbol===void 0?``:e.symbol+``,this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?``:e.type+``}ds.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?`0`:``)+(this.width===void 0?``:Math.max(1,this.width|0))+(this.comma?`,`:``)+(this.precision===void 0?``:`.`+Math.max(0,this.precision|0))+(this.trim?`~`:``)+this.type};function fs(e){out:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case`.`:r=i=n;break;case`0`:r===0&&(r=n),i=n;break;default:if(!+e[n])break out;r>0&&(r=0)}return r>0?e.slice(0,r)+e.slice(i+1):e}var ps;function ms(e,t){var n=as(e,t);if(!n)return ps=void 0,e.toPrecision(t);var r=n[0],i=n[1],a=i-(ps=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+Array(a-o+1).join(`0`):a>0?r.slice(0,a)+`.`+r.slice(a):`0.`+Array(1-a).join(`0`)+as(e,Math.max(0,t+a-1))[0]}function hs(e,t){var n=as(e,t);if(!n)return e+``;var r=n[0],i=n[1];return i<0?`0.`+Array(-i).join(`0`)+r:r.length>i+1?r.slice(0,i+1)+`.`+r.slice(i+1):r+Array(i-r.length+2).join(`0`)}var gs={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+``,d:is,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>hs(e*100,t),r:hs,s:ms,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function _s(e){return e}var vs=Array.prototype.map,ys=[`y`,`z`,`a`,`f`,`p`,`n`,`µ`,`m`,``,`k`,`M`,`G`,`T`,`P`,`E`,`Z`,`Y`];function bs(e){var t=e.grouping===void 0||e.thousands===void 0?_s:ss(vs.call(e.grouping,Number),e.thousands+``),n=e.currency===void 0?``:e.currency[0]+``,r=e.currency===void 0?``:e.currency[1]+``,i=e.decimal===void 0?`.`:e.decimal+``,a=e.numerals===void 0?_s:cs(vs.call(e.numerals,String)),o=e.percent===void 0?`%`:e.percent+``,s=e.minus===void 0?`−`:e.minus+``,c=e.nan===void 0?`NaN`:e.nan+``;function l(e,l){e=us(e);var u=e.fill,d=e.align,f=e.sign,p=e.symbol,m=e.zero,h=e.width,g=e.comma,_=e.precision,v=e.trim,y=e.type;y===`n`?(g=!0,y=`g`):gs[y]||(_===void 0&&(_=12),v=!0,y=`g`),(m||u===`0`&&d===`=`)&&(m=!0,u=`0`,d=`=`);var b=(l&&l.prefix!==void 0?l.prefix:``)+(p===`$`?n:p===`#`&&/[boxX]/.test(y)?`0`+y.toLowerCase():``),x=(p===`$`?r:/[%p]/.test(y)?o:``)+(l&&l.suffix!==void 0?l.suffix:``),ee=gs[y],S=/[defgprs%]/.test(y);_=_===void 0?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_));function C(e){var n=b,r=x,o,l,p;if(y===`c`)r=ee(e)+r,e=``;else{e=+e;var C=e<0||1/e<0;if(e=isNaN(e)?c:ee(Math.abs(e),_),v&&(e=fs(e)),C&&+e==0&&f!==`+`&&(C=!1),n=(C?f===`(`?f:s:f===`-`||f===`(`?``:f)+n,r=(y===`s`&&!isNaN(e)&&ps!==void 0?ys[8+ps/3]:``)+r+(C&&f===`(`?`)`:``),S){for(o=-1,l=e.length;++o<l;)if(p=e.charCodeAt(o),48>p||p>57){r=(p===46?i+e.slice(o+1):e.slice(o))+r,e=e.slice(0,o);break}}}g&&!m&&(e=t(e,1/0));var te=n.length+e.length+r.length,w=te<h?Array(h-te+1).join(u):``;switch(g&&m&&(e=t(w+e,w.length?h-r.length:1/0),w=``),d){case`<`:e=n+e+r+w;break;case`=`:e=n+w+e+r;break;case`^`:e=w.slice(0,te=w.length>>1)+n+e+r+w.slice(te);break;default:e=w+n+e+r}return a(e)}return C.toString=function(){return e+``},C}function u(e,t){var n=Math.max(-8,Math.min(8,Math.floor(os(t)/3)))*3,r=10**-n,i=l((e=us(e),e.type=`f`,e),{suffix:ys[8+n/3]});return function(e){return i(r*e)}}return{format:l,formatPrefix:u}}var xs,Ss,Cs;ws({thousands:`,`,grouping:[3],currency:[`$`,``]});function ws(e){return xs=bs(e),Ss=xs.format,Cs=xs.formatPrefix,xs}function Ts(e){return Math.max(0,-os(Math.abs(e)))}function Es(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(os(t)/3)))*3-os(Math.abs(e)))}function Ds(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,os(t)-os(e))+1}function Os(e,t,n,r){var i=Wo(e,t,n),a;switch(r=us(r??`,f`),r.type){case`s`:var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=Es(i,o))&&(r.precision=a),Cs(r,o);case``:case`e`:case`g`:case`p`:case`r`:r.precision==null&&!isNaN(a=Ds(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type===`e`));break;case`f`:case`%`:r.precision==null&&!isNaN(a=Ts(i))&&(r.precision=a-(r.type===`%`)*2)}return Ss(r)}function ks(e){var t=e.domain;return e.ticks=function(e){var n=t();return Ho(n[0],n[n.length-1],e??10)},e.tickFormat=function(e,n){var r=t();return Os(r[0],r[r.length-1],e??10,n)},e.nice=function(n){n??=10;var r=t(),i=0,a=r.length-1,o=r[i],s=r[a],c,l,u=10;for(s<o&&(l=o,o=s,s=l,l=i,i=a,a=l);u-->0;){if(l=Uo(o,s,n),l===c)return r[i]=o,r[a]=s,t(r);if(l>0)o=Math.floor(o/l)*l,s=Math.ceil(s/l)*l;else if(l<0)o=Math.ceil(o*l)/l,s=Math.floor(s*l)/l;else break;c=l}return e},e}function As(){var e=rs();return e.copy=function(){return ts(e,As())},Ko.apply(e,arguments),ks(e)}function js(e){return function(t){return t<0?-((-t)**+e):t**+e}}function Ms(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Ns(e){return e<0?-e*e:e*e}function Ps(e){var t=e(Xo,Xo),n=1;function r(){return n===1?e(Xo,Xo):n===.5?e(Ms,Ns):e(js(n),js(1/n))}return t.exponent=function(e){return arguments.length?(n=+e,r()):n},ks(t)}function Fs(){var e=Ps(ns());return e.copy=function(){return ts(e,Fs()).exponent(e.exponent())},Ko.apply(e,arguments),e}var Is=typeof Float32Array<`u`?Float32Array:Array;function Ls(){var e=new Is(9);return Is!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function Rs(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=n[0],p=n[1];return e[0]=r,e[1]=i,e[2]=a,e[3]=o,e[4]=s,e[5]=c,e[6]=f*r+p*o+l,e[7]=f*i+p*s+u,e[8]=f*a+p*c+d,e}function zs(e,t,n){var r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Bs(e,t,n){return e[0]=2/t,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/n,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e}var Vs=t(((e,t,n)=>{(function(e,t,n){function r(e){var t=this,n=o();t.next=function(){var e=2091639*t.s0+t.c*23283064365386963e-26;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=e|0)},t.c=1,t.s0=n(` `),t.s1=n(` `),t.s2=n(` `),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var n=new r(e),a=t&&t.state,o=n.next;return o.int32=function(){return n.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}function o(){var e=4022871197;return function(t){t=String(t);for(var n=0;n<t.length;n++){e+=t.charCodeAt(n);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26}}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.alea=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),Hs=t(((e,t,n)=>{(function(e,t,n){function r(e){var t=this,n=``;t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),Us=t(((e,t,n)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),Ws=t(((e,t,n)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.x,n=t.i,r=e[n],i;return r^=r>>>7,i=r^r<<24,r=e[n+1&7],i^=r^r>>>10,r=e[n+3&7],i^=r^r>>>3,r=e[n+4&7],i^=r^r<<7,r=e[n+7&7],r^=r<<13,i^=r^r<<9,e[n]=i,t.i=n+1&7,i};function n(e,t){var n,r=[];if(t===(t|0))r[0]=t;else for(t=``+t,n=0;n<t.length;++n)r[n&7]=r[n&7]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&r[n]===0;++n);for(n==8?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}n(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.x&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),Gs=t(((e,t,n)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.w,n=t.X,r=t.i,i,a;return t.w=e=e+1640531527|0,a=n[r+34&127],i=n[r=r+1&127],a^=a<<13,i^=i<<17,a^=a>>>15,i^=i>>>12,a=n[r]=a^i,t.i=r,a+(e^e>>>16)|0};function n(e,t){var n,r,i,a,o,s=[],c=128;for(t===(t|0)?(r=t,t=null):(t+=`\0`,r=0,c=Math.max(c,t.length)),i=0,a=-32;a<c;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),a===0&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(o=o+1640531527|0,n=s[a&127]^=r+o,i=n==0?i+1:0);for(i>=128&&(s[(t&&t.length||0)&127]=-1),i=127,a=512;a>0;--a)r=s[i+34&127],n=s[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[i]=r^n;e.w=o,e.X=s,e.i=i}n(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.X&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),Ks=t(((e,t,n)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=e|0):n+=e;for(var r=0;r<n.length+20;r++)t.b^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),qs=t(((e,t)=>{t.exports={}})),Js=t(((e,t,n)=>{(function(e,n,r){var i=256,a=6,o=52,s=`random`,c=r.pow(i,a),l=r.pow(2,o),u=l*2,d=i-1,f;function p(e,t,o){var d=[];t=t==1?{entropy:!0}:t||{};var f=_(g(t.entropy?[e,y(n)]:e??v(),3),d),p=new m(d),b=function(){for(var e=p.g(a),t=c,n=0;e<l;)e=(e+n)*i,t*=i,n=p.g(1);for(;e>=u;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return p.g(4)|0},b.quick=function(){return p.g(4)/4294967296},b.double=b,_(y(p.S),n),(t.pass||o||function(e,t,n,i){return i&&(i.S&&h(i,p),e.state=function(){return h(p,{})}),n?(r[s]=e,t):e})(b,f,`global`in t?t.global:this==r,t.state)}function m(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,s=r.S=[];for(n||(e=[n++]);a<i;)s[a]=a++;for(a=0;a<i;a++)s[a]=s[o=d&o+e[a%n]+(t=s[a])],s[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,s=r.S;e--;)t=s[a=d&a+1],n=n*i+s[d&(s[a]=s[o=d&o+t])+(s[o]=t)];return r.i=a,r.j=o,n})(i)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){var n=[],r=typeof e,i;if(t&&r==`object`)for(i in e)try{n.push(g(e[i],t-1))}catch{}return n.length?n:r==`string`?e:e+`\0`}function _(e,t){for(var n=e+``,r,i=0;i<n.length;)t[d&i]=d&(r^=t[d&i]*19)+n.charCodeAt(i++);return y(t)}function v(){try{var t;return f&&(t=f.randomBytes)?t=t(i):(t=new Uint8Array(i),(e.crypto||e.msCrypto).getRandomValues(t)),y(t)}catch{var r=e.navigator,a=r&&r.plugins;return[+new Date,e,a,e.screen,y(n)]}}function y(e){return String.fromCharCode.apply(0,e)}if(_(r.random(),n),typeof t==`object`&&t.exports){t.exports=p;try{f=qs()}catch{}}else typeof define==`function`&&define.amd?define(function(){return p}):r[`seed`+s]=p})(typeof self<`u`?self:n,[],Math)})),Ys=e(t(((e,t)=>{var n=Vs(),r=Hs(),i=Us(),a=Ws(),o=Gs(),s=Ks(),c=Js();c.alea=n,c.xor128=r,c.xorwow=i,c.xorshift7=a,c.xor4096=o,c.tychei=s,t.exports=c}))(),1);function Xs(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,tc(r.key),r)}}function Zs(e,t,n){return t&&Xs(e.prototype,t),n&&Xs(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qs(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,$s(e,t)}function $s(e,t){return $s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$s(e,t)}function ec(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function tc(e){var t=ec(e,`string`);return typeof t==`symbol`?t:String(t)}var nc=function(){function e(){}var t=e.prototype;return t._seed=function(e,t){if(e===(e||0))return e;for(var n=``+e,r=0,i=0;i<n.length;++i)r^=n.charCodeAt(i)|0;return r},e}(),rc=function(e){Qs(t,e);function t(t,n){var r=e.call(this)||this;return r._rng=void 0,r.seed(t,n),r}var n=t.prototype;return n.next=function(){return this._rng()},n.seed=function(e,t){this._rng=e},n.clone=function(e,n){return new t(this._rng,n)},Zs(t,[{key:`name`,get:function(){return`function`}}]),t}(nc),ic=(function(){var e=[].slice.call(arguments),t=e[0],n=t===void 0?`default`:t;switch(typeof n){case`object`:if(n instanceof nc)return n;break;case`function`:return new rc(n);default:return new rc(Ys.default.apply(void 0,e))}throw Error(`invalid RNG "`+n+`"`)}),ac=(function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),function(){return e.next()*(n-t)+t}});function oc(e){return new sc(e)}var sc=function(e){var t=this;this.n=void 0,this.isInt=function(){if(Number.isInteger(t.n))return t;throw Error(`Expected number to be an integer, got `+t.n)},this.isPositive=function(){if(t.n>0)return t;throw Error(`Expected number to be positive, got `+t.n)},this.lessThan=function(e){if(t.n<e)return t;throw Error(`Expected number to be less than `+e+`, got `+t.n)},this.greaterThanOrEqual=function(e){if(t.n>=e)return t;throw Error(`Expected number to be greater than or equal to `+e+`, got `+t.n)},this.greaterThan=function(e){if(t.n>e)return t;throw Error(`Expected number to be greater than `+e+`, got `+t.n)},this.n=e},cc=(function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),n===void 0&&(n=t===void 0?1:t,t=0),oc(t).isInt(),oc(n).isInt(),function(){return Math.floor(e.next()*(n-t+1)+t)}}),lc=(function(e){return function(){return e.next()>=.5}}),uc=(function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),function(){var r,i,a;do r=e.next()*2-1,i=e.next()*2-1,a=r*r+i*i;while(!a||a>1);return t+n*i*Math.sqrt(-2*Math.log(a)/a)}}),dc=(function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=1);var r=e.normal(t,n);return function(){return Math.exp(r())}}),fc=(function(e,t){return t===void 0&&(t=.5),oc(t).greaterThanOrEqual(0).lessThan(1),function(){return Math.floor(e.next()+t)}}),pc=(function(e,t,n){return t===void 0&&(t=1),n===void 0&&(n=.5),oc(t).isInt().isPositive(),oc(n).greaterThanOrEqual(0).lessThan(1),function(){for(var r=0,i=0;r++<t;)e.next()<n&&i++;return i}}),mc=(function(e,t){t===void 0&&(t=.5),oc(t).greaterThan(0).lessThan(1);var n=1/Math.log(1-t);return function(){return Math.floor(1+Math.log(e.next())*n)}}),hc=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],gc=function(e){return hc[e]},_c=.9189385332046727,vc=(function(e,t){if(t===void 0&&(t=1),oc(t).isPositive(),t<10){var n=Math.exp(-t);return function(){for(var r=n,i=0,a=e.next();a>r;)a-=r,r=t*r/++i;return i}}var r=Math.sqrt(t),i=.931+2.53*r,a=-.059+.02483*i,o=1.1239+1.1328/(i-3.4),s=.9277-3.6224/(i-2);return function(){for(;;){var n=void 0,c=e.next();if(c<=.86*s)return n=c/s-.43,Math.floor((2*a/(.5-Math.abs(n))+i)*n+t+.445);c>=s?n=e.next()-.5:(n=c/s-.93,n=(n<0?-.5:.5)-n,c=e.next()*s);var l=.5-Math.abs(n);if(!(l<.013&&c>l)){var u=Math.floor((2*a/l+i)*n+t+.445);if(c=c*o/(a/(l*l)+i),u>=10){var d=(u+.5)*Math.log(t/u)-t-_c+u-(1/12-(1/360-1/(1260*u*u))/(u*u))/u;if(Math.log(c*r)<=d)return u}else if(u>=0){var f=gc(u)??0;if(Math.log(c)<=u*Math.log(t)-t-f)return u}}}}}),yc=(function(e,t){return t===void 0&&(t=1),oc(t).isPositive(),function(){return-Math.log(1-e.next())/t}}),bc=(function(e,t){return t===void 0&&(t=1),oc(t).isInt().greaterThanOrEqual(0),function(){for(var n=0,r=0;r<t;++r)n+=e.next();return n}}),xc=(function(e,t){t===void 0&&(t=1),oc(t).isInt().isPositive();var n=e.irwinHall(t);return function(){return n()/t}}),Sc=(function(e,t){t===void 0&&(t=1),oc(t).greaterThanOrEqual(0);var n=1/t;return function(){return 1/(1-e.next())**n}}),Cc=function(e){Qs(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.next=function(){return Math.random()},n.seed=function(e,t){},n.clone=function(){return new t},Zs(t,[{key:`name`,get:function(){return`default`}}]),t}(nc),wc=function(){function e(e){var t=this;this._rng=void 0,this._patch=void 0,this._cache={},this.next=function(){return t._rng.next()},this.float=function(e,n){return t.uniform(e,n)()},this.int=function(e,n){return t.uniformInt(e,n)()},this.integer=function(e,n){return t.uniformInt(e,n)()},this.bool=function(){return t.uniformBoolean()()},this.boolean=function(){return t.uniformBoolean()()},this.uniform=function(e,n){return t._memoize(`uniform`,ac,e,n)},this.uniformInt=function(e,n){return t._memoize(`uniformInt`,cc,e,n)},this.uniformBoolean=function(){return t._memoize(`uniformBoolean`,lc)},this.normal=function(e,n){return uc(t,e,n)},this.logNormal=function(e,n){return dc(t,e,n)},this.bernoulli=function(e){return fc(t,e)},this.binomial=function(e,n){return pc(t,e,n)},this.geometric=function(e){return mc(t,e)},this.poisson=function(e){return vc(t,e)},this.exponential=function(e){return yc(t,e)},this.irwinHall=function(e){return bc(t,e)},this.bates=function(e){return xc(t,e)},this.pareto=function(e){return Sc(t,e)},e&&e instanceof nc?this.use(e):this.use(new Cc),this._cache={}}var t=e.prototype;return t.clone=function(){var t=[].slice.call(arguments);return t.length?new e(ic.apply(void 0,t)):new e(this.rng.clone())},t.use=function(){this._rng=ic.apply(void 0,[].slice.call(arguments))},t.patch=function(){if(this._patch)throw Error(`Math.random already patched`);this._patch=Math.random,Math.random=this.uniform()},t.unpatch=function(){this._patch&&(Math.random=this._patch,delete this._patch)},t.choice=function(e){if(!Array.isArray(e))throw Error(`Random.choice expected input to be an array, got `+typeof e);var t=e?.length;if(t>0)return e[this.uniformInt(0,t-1)()]},t._memoize=function(e,t){var n=[].slice.call(arguments,2),r=``+n.join(`;`),i=this._cache[e];return(i===void 0||i.key!==r)&&(i={key:r,distribution:t.apply(void 0,[this].concat(n))},this._cache[e]=i),i.distribution},Zs(e,[{key:`rng`,get:function(){return this._rng}}]),e}();new wc;var Tc=`<div class="gl-box">
  <svg viewBox="0 0 55 60">
    <text x="27" y="56" class="gl-fps">00 FPS</text>
    <text x="28" y="8" class="gl-mem"></text>
    <rect x="0" y="14" rx="4" ry="4" width="55" height="32"></rect>
    <polyline class="gl-chart"></polyline>
  </svg>
  <svg viewBox="0 0 14 60" class="gl-cpu-svg">
    <line x1="7" y1="38" x2="7" y2="11" class="opacity"/>
    <line x1="7" y1="38" x2="7" y2="11" class="gl-cpu" stroke-dasharray="0 27"/>
    <path d="M5.35 43c-.464 0-.812.377-.812.812v1.16c-.783.1972-1.421.812-1.595 1.624h-1.16c-.435 0-.812.348-.812.812s.348.812.812.812h1.102v1.653H1.812c-.464 0-.812.377-.812.812 0 .464.377.812.812.812h1.131c.1943.783.812 1.392 1.595 1.595v1.131c0 .464.377.812.812.812.464 0 .812-.377.812-.812V53.15h1.653v1.073c0 .464.377.812.812.812.464 0 .812-.377.812-.812v-1.131c.783-.1943 1.392-.812 1.595-1.595h1.131c.464 0 .812-.377.812-.812 0-.464-.377-.812-.812-.812h-1.073V48.22h1.102c.435 0 .812-.348.812-.812s-.348-.812-.812-.812h-1.16c-.1885-.783-.812-1.421-1.595-1.624v-1.131c0-.464-.377-.812-.812-.812-.464 0-.812.377-.812.812v1.073H6.162v-1.073c0-.464-.377-.812-.812-.812zm.58 3.48h2.088c.754 0 1.363.609 1.363 1.363v2.088c0 .754-.609 1.363-1.363 1.363H5.93c-.754 0-1.363-.609-1.363-1.363v-2.088c0-.754.609-1.363 1.363-1.363z"/>
  </svg>
  <svg viewBox="0 0 14 60" class="gl-gpu-svg">
    <line x1="7" y1="38" x2="7" y2="11" class="opacity"/>
    <line x1="7" y1="38" x2="7" y2="11" class="gl-gpu" stroke-dasharray="0 27"/>
    <path d="M1.94775 43.3772a.736.736 0 10-.00416 1.472c.58535.00231.56465.1288.6348.3197.07015.18975.04933.43585.04933.43585l-.00653.05405v8.671a.736.736 0 101.472 0v-1.4145c.253.09522.52785.1495.81765.1495h5.267c1.2535 0 2.254-.9752 2.254-2.185v-3.105c0-1.2075-1.00625-2.185-2.254-2.185h-5.267c-.28865 0-.5635.05405-.8165.1495.01806-.16445.04209-.598-.1357-1.0787-.22425-.6072-.9499-1.2765-2.0125-1.2765zm2.9095 3.6455c.42435 0 .7659.36225.7659.8119v2.9785c0 .44965-.34155.8119-.7659.8119s-.7659-.36225-.7659-.8119v-2.9785c0-.44965.34155-.8119.7659-.8119zm4.117 0a2.3 2.3 0 012.3 2.3 2.3 2.3 0 01-2.3 2.3 2.3 2.3 0 01-2.3-2.3 2.3 2.3 0 012.3-2.3z"/>
  </svg>
</div>`,Ec=`#gl-bench {
  position:absolute;
  left:0;
  top:0;
  z-index:1000;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

#gl-bench div {
  position: relative;
  display: block;
  margin: 4px;
  padding: 0 7px 0 10px;
  background: #6c6;
  border-radius: 15px;
  cursor: pointer;
  opacity: 0.9;
}

#gl-bench svg {
  height: 60px;
  margin: 0 -1px;
}

#gl-bench text {
  font-size: 12px;
  font-family: Helvetica,Arial,sans-serif;
  font-weight: 700;
  dominant-baseline: middle;
  text-anchor: middle;
}

#gl-bench .gl-mem {
  font-size: 9px;
}

#gl-bench line {
  stroke-width: 5;
  stroke: #112211;
  stroke-linecap: round;
}

#gl-bench polyline {
  fill: none;
  stroke: #112211;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3.5;
}

#gl-bench rect {
  fill: #448844;
}

#gl-bench .opacity {
  stroke: #448844;
}
`,Dc=class{constructor(e,t={}){this.css=Ec,this.svg=Tc,this.paramLogger=()=>{},this.chartLogger=()=>{},this.chartLen=20,this.chartHz=20,this.names=[],this.cpuAccums=[],this.gpuAccums=[],this.activeAccums=[],this.chart=Array(this.chartLen),this.now=()=>performance&&performance.now?performance.now():Date.now(),this.updateUI=()=>{[].forEach.call(this.nodes[`gl-gpu-svg`],e=>{e.style.display=this.trackGPU?`inline`:`none`})},Object.assign(this,t),this.detected=0,this.finished=[],this.isFramebuffer=0,this.frameId=0;let n,r=0,i,a=e=>{++r<20?n=requestAnimationFrame(a):(this.detected=Math.ceil(1e3*r/(e-i)/70),cancelAnimationFrame(n)),i||=e};if(requestAnimationFrame(a),e){let t=async(t,n)=>Promise.resolve(setTimeout(()=>{e.getError();let r=this.now()-t;n.forEach((e,t)=>{e&&(this.gpuAccums[t]+=r)})},0)),n=(e,n,r)=>function(){let i=n.now();e.apply(r,arguments),n.trackGPU&&n.finished.push(t(i,n.activeAccums.slice(0)))};[`drawArrays`,`drawElements`,`drawArraysInstanced`,`drawBuffers`,`drawElementsInstanced`,`drawRangeElements`].forEach(t=>{e[t]&&(e[t]=n(e[t],this,e))}),e.getExtension=((t,r)=>function(){let i=t.apply(e,arguments);return i&&[`drawElementsInstancedANGLE`,`drawBuffersWEBGL`].forEach(e=>{i[e]&&(i[e]=n(i[e],r,i))}),i})(e.getExtension,this)}if(!this.withoutUI){this.dom||=document.body;let e=document.createElement(`div`);e.id=`gl-bench`,this.dom.appendChild(e),this.dom.insertAdjacentHTML(`afterbegin`,`<style id="gl-bench-style">`+this.css+`</style>`),this.dom=e,this.dom.addEventListener(`click`,()=>{this.trackGPU=!this.trackGPU,this.updateUI()}),this.paramLogger=((e,t,n)=>{let r=[`gl-cpu`,`gl-gpu`,`gl-mem`,`gl-fps`,`gl-gpu-svg`,`gl-chart`],i=Object.assign({},r);return r.forEach(e=>i[e]=t.getElementsByClassName(e)),this.nodes=i,(t,r,a,o,s,c,l)=>{i[`gl-cpu`][t].style.strokeDasharray=(r*.27).toFixed(0)+` 100`,i[`gl-gpu`][t].style.strokeDasharray=(a*.27).toFixed(0)+` 100`,i[`gl-mem`][t].innerHTML=n[t]?n[t]:o?`mem: `+o.toFixed(0)+`mb`:``,i[`gl-fps`][t].innerHTML=s.toFixed(0)+` FPS`,e(n[t],r,a,o,s,c,l)}})(this.paramLogger,this.dom,this.names),this.chartLogger=((e,t)=>{let n={"gl-chart":t.getElementsByClassName(`gl-chart`)};return(t,r,i)=>{let a=``,o=r.length;for(let e=0;e<o;e++){let t=(i+e+1)%o;r[t]!=null&&(a=a+` `+(55*e/(o-1)).toFixed(1)+`,`+(45-r[t]*22/60/this.detected).toFixed(1))}n[`gl-chart`][t].setAttribute(`points`,a),e(this.names[t],r,i)}})(this.chartLogger,this.dom)}}addUI(e){this.names.indexOf(e)==-1&&(this.names.push(e),this.dom&&(this.dom.insertAdjacentHTML(`beforeend`,this.svg),this.updateUI()),this.cpuAccums.push(0),this.gpuAccums.push(0),this.activeAccums.push(!1))}nextFrame(e){this.frameId++;let t=e||this.now();if(this.frameId<=1)this.paramFrame=this.frameId,this.paramTime=t;else{let e=t-this.paramTime;if(e>=1e3){let n=this.frameId-this.paramFrame,r=n/e*1e3;for(let t=0;t<this.names.length;t++){let i=this.cpuAccums[t]/e*100,a=this.gpuAccums[t]/e*100,o=performance&&performance.memory?performance.memory.usedJSHeapSize/(1<<20):0;this.paramLogger(t,i,a,o,r,e,n),this.cpuAccums[t]=0,Promise.all(this.finished).then(()=>{this.gpuAccums[t]=0,this.finished=[]})}this.paramFrame=this.frameId,this.paramTime=t}}if(!this.detected||!this.chartFrame)this.chartFrame=this.frameId,this.chartTime=t,this.circularId=0;else{let e=t-this.chartTime,n=this.chartHz*e/1e3;for(;--n>0&&this.detected;){let n=(this.frameId-this.chartFrame)/e*1e3;this.chart[this.circularId%this.chartLen]=n;for(let e=0;e<this.names.length;e++)this.chartLogger(e,this.chart,this.circularId);this.circularId++,this.chartFrame=this.frameId,this.chartTime=t}}}begin(e){this.updateAccums(e)}end(e){this.updateAccums(e)}updateAccums(e){let t=this.names.indexOf(e);t==-1&&(t=this.names.length,this.addUI(e));let n=this.now(),r=n-this.t0;for(let e=0;e<t+1;e++)this.activeAccums[e]&&(this.cpuAccums[e]+=r);this.activeAccums[t]=!this.activeAccums[t],this.t0=n}};function Oc(){let e;if(typeof window<`u`&&window.performance)e=window.performance.now();else if(typeof process<`u`&&process.hrtime){let t=process.hrtime();e=t[0]*1e3+t[1]/1e6}else e=Date.now();return e}var kc=class{constructor(e,t){this.sampleSize=1,this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this.name=e,this.type=t,this.reset()}reset(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}setSampleSize(e){return this.sampleSize=e,this}incrementCount(){return this.addCount(1),this}decrementCount(){return this.subtractCount(1),this}addCount(e){return this._count+=e,this._samples++,this._checkSampling(),this}subtractCount(e){return this._count-=e,this._samples++,this._checkSampling(),this}addTime(e){return this._time+=e,this.lastTiming=e,this._samples++,this._checkSampling(),this}timeStart(){return this._startTime=Oc(),this._timerPending=!0,this}timeEnd(){return this._timerPending&&(this.addTime(Oc()-this._startTime),this._timerPending=!1,this._checkSampling()),this}getSampleAverageCount(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}getSampleAverageTime(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}getSampleHz(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}getAverageCount(){return this.samples>0?this.count/this.samples:0}getAverageTime(){return this.samples>0?this.time/this.samples:0}getHz(){return this.time>0?this.samples/(this.time/1e3):0}_checkSampling(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}},Ac=class{constructor(e){this.stats={},this.id=e.id,this.stats={},this._initializeStats(e.stats),Object.seal(this)}get(e,t=`count`){return this._getOrCreate({name:e,type:t})}get size(){return Object.keys(this.stats).length}reset(){for(let e of Object.values(this.stats))e.reset();return this}forEach(e){for(let t of Object.values(this.stats))e(t)}getTable(){let e={};return this.forEach(t=>{e[t.name]={time:t.time||0,count:t.count||0,average:t.getAverageTime()||0,hz:t.getHz()||0}}),e}_initializeStats(e=[]){e.forEach(e=>this._getOrCreate(e))}_getOrCreate(e){let{name:t,type:n}=e,r=this.stats[t];return r||(r=e instanceof kc?e:new kc(t,n),this.stats[t]=r),r}},jc=`GPU Time and Memory`,Mc=[`Adapter`,`GPU`,`GPU Type`,`GPU Backend`,`Frame Rate`,`CPU Time`,`GPU Time`,`GPU Memory`,`Buffer Memory`,`Texture Memory`,`Referenced Buffer Memory`,`Referenced Texture Memory`,`Swap Chain Texture`],Nc=new WeakMap,Pc=new WeakMap,Fc=new class{stats=new Map;getStats(e){return this.get(e)}get(e){this.stats.has(e)||this.stats.set(e,new Ac({id:e}));let t=this.stats.get(e);return e===jc&&Ic(t,Mc),t}};function Ic(e,t){let n=e.stats,r=!1;for(let i of t)n[i]||(e.get(i),r=!0);let i=Object.keys(n).length,a=Nc.get(e);if(!r&&a?.orderedStatNames===t&&a.statCount===i)return;let o={},s=Pc.get(t);s||(s=new Set(t),Pc.set(t,s));for(let e of t)n[e]&&(o[e]=n[e]);for(let[e,t]of Object.entries(n))s.has(e)||(o[e]=t);for(let e of Object.keys(n))delete n[e];Object.assign(n,o),Nc.set(e,{orderedStatNames:t,statCount:i})}var Lc=globalThis;globalThis.document;var Rc=globalThis.process||{};globalThis.console;var zc=globalThis.navigator||{};function Bc(e){if(typeof window<`u`&&window.process?.type===`renderer`||typeof process<`u`&&process.versions?.electron)return!0;let t=typeof navigator<`u`&&navigator.userAgent,n=e||t;return!!(n&&n.indexOf(`Electron`)>=0)}function Vc(){return!(typeof process==`object`&&String(process)===`[object process]`&&!process?.browser)||Bc()}var Hc=`4.1.2`;function Uc(e,t){if(!e)throw Error(t||`Assertion failed`)}function Wc(e){if(!e)return 0;let t;switch(typeof e){case`number`:t=e;break;case`object`:t=e.logLevel||e.priority||0;break;default:return 0}return Uc(Number.isFinite(t)&&t>=0),t}function Gc(e){let{logLevel:t,message:n}=e;e.logLevel=Wc(t);let r=e.args?Array.from(e.args):[];for(;r.length&&r.shift()!==n;);switch(typeof t){case`string`:case`function`:n!==void 0&&r.unshift(n),e.message=t;break;case`object`:Object.assign(e,t)}typeof e.message==`function`&&(e.message=e.message());let i=typeof e.message;return Uc(i===`string`||i===`object`),Object.assign(e,{args:r},e.opts)}var Kc=()=>{},qc=class{constructor({level:e=0}={}){this.userData={},this._onceCache=new Set,this._level=e}set level(e){this.setLevel(e)}get level(){return this.getLevel()}setLevel(e){return this._level=e,this}getLevel(){return this._level}warn(e,...t){return this._log(`warn`,0,e,t,{once:!0})}error(e,...t){return this._log(`error`,0,e,t)}log(e,t,...n){return this._log(`log`,e,t,n)}info(e,t,...n){return this._log(`info`,e,t,n)}once(e,t,...n){return this._log(`once`,e,t,n,{once:!0})}_log(e,t,n,r,i={}){let a=Gc({logLevel:t,message:n,args:this._buildArgs(t,n,r),opts:i});return this._createLogFunction(e,a,i)}_buildArgs(e,t,n){return[e,t,...n]}_createLogFunction(e,t,n){if(!this._shouldLog(t.logLevel))return Kc;let r=this._getOnceTag(n.tag??t.tag??t.message);if((n.once||t.once)&&r!==void 0){if(this._onceCache.has(r))return Kc;this._onceCache.add(r)}return this._emit(e,t)}_shouldLog(e){return this.getLevel()>=Wc(e)}_getOnceTag(e){if(e!==void 0)try{return typeof e==`string`?e:String(e)}catch{return}}};function Jc(e){try{let t=window[e],n=`__storage_test__`;return t.setItem(n,n),t.removeItem(n),t}catch{return null}}var Yc=class{constructor(e,t,n=`sessionStorage`){this.storage=Jc(n),this.id=e,this.config=t,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(e){if(Object.assign(this.config,e),this.storage){let e=JSON.stringify(this.config);this.storage.setItem(this.id,e)}}_loadConfiguration(){let e={};if(this.storage){let t=this.storage.getItem(this.id);e=t?JSON.parse(t):{}}return Object.assign(this.config,e),this}};function Xc(e){let t;return t=e<10?`${e.toFixed(2)}ms`:e<100?`${e.toFixed(1)}ms`:e<1e3?`${e.toFixed(0)}ms`:`${(e/1e3).toFixed(2)}s`,t}function Zc(e,t=8){let n=Math.max(t-e.length,0);return`${` `.repeat(n)}${e}`}var Qc;(function(e){e[e.BLACK=30]=`BLACK`,e[e.RED=31]=`RED`,e[e.GREEN=32]=`GREEN`,e[e.YELLOW=33]=`YELLOW`,e[e.BLUE=34]=`BLUE`,e[e.MAGENTA=35]=`MAGENTA`,e[e.CYAN=36]=`CYAN`,e[e.WHITE=37]=`WHITE`,e[e.BRIGHT_BLACK=90]=`BRIGHT_BLACK`,e[e.BRIGHT_RED=91]=`BRIGHT_RED`,e[e.BRIGHT_GREEN=92]=`BRIGHT_GREEN`,e[e.BRIGHT_YELLOW=93]=`BRIGHT_YELLOW`,e[e.BRIGHT_BLUE=94]=`BRIGHT_BLUE`,e[e.BRIGHT_MAGENTA=95]=`BRIGHT_MAGENTA`,e[e.BRIGHT_CYAN=96]=`BRIGHT_CYAN`,e[e.BRIGHT_WHITE=97]=`BRIGHT_WHITE`})(Qc||={});var $c=10;function el(e){return typeof e==`string`?(e=e.toUpperCase(),Qc[e]||Qc.WHITE):e}function tl(e,t,n){return!Vc&&typeof e==`string`&&(t&&(e=`\u001b[${el(t)}m${e}\u001b[39m`),n&&(e=`\u001b[${el(n)+$c}m${e}\u001b[49m`)),e}function nl(e,t=[`constructor`]){let n=Object.getPrototypeOf(e),r=Object.getOwnPropertyNames(n),i=e;for(let n of r){let r=i[n];typeof r==`function`&&(t.find(e=>n===e)||(i[n]=r.bind(e)))}}var rl=class{getHighResolutionTimer(){let e;if(Vc()&&Lc.performance)e=Lc?.performance?.now?.();else if(`hrtime`in Rc){let t=Rc?.hrtime?.();e=t[0]*1e3+t[1]/1e6}else e=Date.now();return e}getMemoryUsageMB(){let e=(Lc?.performance)?.memory?.usedJSHeapSize;return e==null?null:Math.trunc(e/1024/1024)}},il=new rl;globalThis.Probe=rl,globalThis.probe=il;var al={debug:Vc()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},ol={enabled:!0,level:0},sl=class extends qc{constructor({id:e}={id:``}){super({level:0}),this.VERSION=Hc,this._startTs=il.getHighResolutionTimer(),this._deltaTs=il.getHighResolutionTimer(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=e,this.userData={},this._storage=new Yc(`__probe-${this.id}__`,{[this.id]:ol}),this.timeStamp(`${this.id} started`),nl(this),Object.seal(this)}isEnabled(){return this._getConfiguration().enabled}getLevel(){return this._getConfiguration().level}getTotal(){return Number((il.getHighResolutionTimer()-this._startTs).toPrecision(10))}getDelta(){return Number((il.getHighResolutionTimer()-this._deltaTs).toPrecision(10))}set priority(e){this.level=e}get priority(){return this.level}getPriority(){return this.level}enable(e=!0){return this._updateConfiguration({enabled:e}),this}setLevel(e){return this._updateConfiguration({level:e}),this}get(e){return this._getConfiguration()[e]}set(e,t){this._updateConfiguration({[e]:t})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(e,t){if(!e)throw Error(t||`Assertion failed`)}warn(e,...t){return this._log(`warn`,0,e,t,{method:al.warn,once:!0})}error(e,...t){return this._log(`error`,0,e,t,{method:al.error})}deprecated(e,t){return this.warn(`\`${e}\` is deprecated and will be removed \
in a later version. Use \`${t}\` instead`)}removed(e,t){return this.error(`\`${e}\` has been removed. Use \`${t}\` instead`)}probe(e,t,...n){let r=il.getMemoryUsageMB();if(r!==null){let e=`${r}MB `;typeof t==`function`?t=()=>`${e}${t()}`:typeof t==`string`&&(t=`${e}${t}`)}return this._log(`log`,e,t,n,{method:al.log,time:!0,once:!0})}log(e,t,...n){return this._log(`log`,e,t,n,{method:al.debug})}info(e,t,...n){return this._log(`info`,e,t,n,{method:console.info})}once(e,t,...n){return this._log(`once`,e,t,n,{method:al.debug||al.info,once:!0})}table(e,t,n){return t?this._log(`table`,e,t,n&&[n]||[],{method:console.table||Kc,tag:ll(t)}):Kc}time(e,t){return this._log(`time`,e,t,[],{method:console.time?console.time:console.info})}timeEnd(e,t){return this._log(`time`,e,t,[],{method:console.timeEnd?console.timeEnd:console.info})}timeStamp(e,t){return this._log(`time`,e,t,[],{method:console.timeStamp||Kc})}group(e,t,n={collapsed:!1}){let r=(n.collapsed?console.groupCollapsed:console.group)||console.info;return this._log(`group`,e,t,[],{method:r})}groupCollapsed(e,t,n={}){return this.group(e,t,Object.assign({},n,{collapsed:!0}))}groupEnd(e){return this._log(`groupEnd`,e,``,[],{method:console.groupEnd||Kc})}withGroup(e,t,n){this.group(e,t)();try{n()}finally{this.groupEnd(e)()}}trace(){console.trace&&console.trace()}_shouldLog(e){return this.isEnabled()&&super._shouldLog(e)}_emit(e,t){let n=t.method;Uc(n),t.total=this.getTotal(),t.delta=this.getDelta(),this._deltaTs=il.getHighResolutionTimer();let r=cl(this.id,t.message,t);return n.bind(console,r,...t.args)}_getConfiguration(){return this._storage.config[this.id]||this._updateConfiguration(ol),this._storage.config[this.id]}_updateConfiguration(e){let t=this._storage.config[this.id]||{...ol};this._storage.setConfiguration({[this.id]:{...t,...e}})}};sl.VERSION=Hc;function cl(e,t,n){if(typeof t==`string`){let r=n.time?Zc(Xc(n.total)):``;t=n.time?`${e}: ${r}  ${t}`:`${e}: ${t}`,t=tl(t,n.color,n.background)}return t}function ll(e){for(let t in e)for(let n in e[t])return n||`untitled`;return`empty`}var z=new sl({id:`luma.gl`}),ul={};function dl(e=`id`){return ul[e]=ul[e]||1,`${e}-${ul[e]++}`}var fl=`cpu-hotspot-profiler`,pl=`GPU Resource Counts`,ml=`Resource Counts`,hl=`GPU Time and Memory`,gl=[`Resources`,`Buffers`,`Textures`,`Samplers`,`TextureViews`,`Framebuffers`,`QuerySets`,`Shaders`,`RenderPipelines`,`ComputePipelines`,`PipelineLayouts`,`VertexArrays`,`RenderPasss`,`ComputePasss`,`CommandEncoders`,`CommandBuffers`],_l=[`Resources`,`Buffers`,`Textures`,`Samplers`,`TextureViews`,`Framebuffers`,`QuerySets`,`Shaders`,`RenderPipelines`,`SharedRenderPipelines`,`ComputePipelines`,`PipelineLayouts`,`VertexArrays`,`RenderPasss`,`ComputePasss`,`CommandEncoders`,`CommandBuffers`],vl=gl.flatMap(e=>[`${e} Created`,`${e} Active`]),yl=_l.flatMap(e=>[`${e} Created`,`${e} Active`]),bl=new WeakMap,xl=new WeakMap,B=class{static defaultProps={id:`undefined`,handle:void 0,userData:void 0};toString(){return`${this[Symbol.toStringTag]||this.constructor.name}:"${this.id}"`}id;props;userData={};_device;destroyed=!1;allocatedBytes=0;allocatedBytesName=null;_attachedResources=new Set;constructor(e,t,n){if(!e)throw Error(`no device`);this._device=e,this.props=Sl(t,n);let r=this.props.id===`undefined`?dl(this[Symbol.toStringTag]):this.props.id;this.props.id=r,this.id=r,this.userData=this.props.userData||{},this.addStats()}destroy(){this.destroyed||this.destroyResource()}delete(){return this.destroy(),this}getProps(){return this.props}attachResource(e){this._attachedResources.add(e)}detachResource(e){this._attachedResources.delete(e)}destroyAttachedResource(e){this._attachedResources.delete(e)&&e.destroy()}destroyAttachedResources(){for(let e of this._attachedResources)e.destroy();this._attachedResources=new Set}destroyResource(){this.destroyed||=(this.destroyAttachedResources(),this.removeStats(),!0)}removeStats(){let e=Tl(this._device),t=e?El():0,n=[this._device.statsManager.getStats(pl),this._device.statsManager.getStats(ml)],r=wl(this._device);for(let e of n)Cl(e,r);let i=this.getStatsName();for(let e of n)e.get(`Resources Active`).decrementCount(),e.get(`${i}s Active`).decrementCount();e&&(e.statsBookkeepingCalls=(e.statsBookkeepingCalls||0)+1,e.statsBookkeepingTimeMs=(e.statsBookkeepingTimeMs||0)+(El()-t))}trackAllocatedMemory(e,t=this.getStatsName()){let n=Tl(this._device),r=n?El():0,i=this._device.statsManager.getStats(hl);this.allocatedBytes>0&&this.allocatedBytesName&&(i.get(`GPU Memory`).subtractCount(this.allocatedBytes),i.get(`${this.allocatedBytesName} Memory`).subtractCount(this.allocatedBytes)),i.get(`GPU Memory`).addCount(e),i.get(`${t} Memory`).addCount(e),n&&(n.statsBookkeepingCalls=(n.statsBookkeepingCalls||0)+1,n.statsBookkeepingTimeMs=(n.statsBookkeepingTimeMs||0)+(El()-r)),this.allocatedBytes=e,this.allocatedBytesName=t}trackReferencedMemory(e,t=this.getStatsName()){this.trackAllocatedMemory(e,`Referenced ${t}`)}trackDeallocatedMemory(e=this.getStatsName()){if(this.allocatedBytes===0){this.allocatedBytesName=null;return}let t=Tl(this._device),n=t?El():0,r=this._device.statsManager.getStats(hl);r.get(`GPU Memory`).subtractCount(this.allocatedBytes),r.get(`${this.allocatedBytesName||e} Memory`).subtractCount(this.allocatedBytes),t&&(t.statsBookkeepingCalls=(t.statsBookkeepingCalls||0)+1,t.statsBookkeepingTimeMs=(t.statsBookkeepingTimeMs||0)+(El()-n)),this.allocatedBytes=0,this.allocatedBytesName=null}trackDeallocatedReferencedMemory(e=this.getStatsName()){this.trackDeallocatedMemory(`Referenced ${e}`)}addStats(){let e=this.getStatsName(),t=Tl(this._device),n=t?El():0,r=[this._device.statsManager.getStats(pl),this._device.statsManager.getStats(ml)],i=wl(this._device);for(let e of r)Cl(e,i);for(let t of r)t.get(`Resources Created`).incrementCount(),t.get(`Resources Active`).incrementCount(),t.get(`${e}s Created`).incrementCount(),t.get(`${e}s Active`).incrementCount();t&&(t.statsBookkeepingCalls=(t.statsBookkeepingCalls||0)+1,t.statsBookkeepingTimeMs=(t.statsBookkeepingTimeMs||0)+(El()-n)),Dl(this._device,e)}getStatsName(){return Ol(this)}};function Sl(e,t){let n={...t};for(let t in e)e[t]!==void 0&&(n[t]=e[t]);return n}function Cl(e,t){let n=e.stats,r=!1;for(let i of t)n[i]||(e.get(i),r=!0);let i=Object.keys(n).length,a=bl.get(e);if(!r&&a?.orderedStatNames===t&&a.statCount===i)return;let o={},s=xl.get(t);s||(s=new Set(t),xl.set(t,s));for(let e of t)n[e]&&(o[e]=n[e]);for(let[e,t]of Object.entries(n))s.has(e)||(o[e]=t);for(let e of Object.keys(n))delete n[e];Object.assign(n,o),bl.set(e,{orderedStatNames:t,statCount:i})}function wl(e){return e.type===`webgl`?yl:vl}function Tl(e){let t=e.userData[fl];return t?.enabled?t:null}function El(){return globalThis.performance?.now?.()??Date.now()}function Dl(e,t){let n=Tl(e);if(n&&n.activeDefaultFramebufferAcquireDepth)switch(n.transientCanvasResourceCreates=(n.transientCanvasResourceCreates||0)+1,t){case`Texture`:n.transientCanvasTextureCreates=(n.transientCanvasTextureCreates||0)+1;break;case`TextureView`:n.transientCanvasTextureViewCreates=(n.transientCanvasTextureViewCreates||0)+1;break;case`Sampler`:n.transientCanvasSamplerCreates=(n.transientCanvasSamplerCreates||0)+1;break;case`Framebuffer`:n.transientCanvasFramebufferCreates=(n.transientCanvasFramebufferCreates||0)+1}}function Ol(e){let t=Object.getPrototypeOf(e);for(;t;){let n=Object.getPrototypeOf(t);if(!n||n===B.prototype)return kl(t)||e[Symbol.toStringTag]||e.constructor.name;t=n}return e[Symbol.toStringTag]||e.constructor.name}function kl(e){let t=Object.getOwnPropertyDescriptor(e,Symbol.toStringTag);return typeof t?.get==`function`?t.get.call(e):typeof t?.value==`string`?t.value:null}var V=class e extends B{static INDEX=16;static VERTEX=32;static UNIFORM=64;static STORAGE=128;static INDIRECT=256;static QUERY_RESOLVE=512;static MAP_READ=1;static MAP_WRITE=2;static COPY_SRC=4;static COPY_DST=8;get[Symbol.toStringTag](){return`Buffer`}usage;indexType;updateTimestamp;constructor(t,n){let r={...n};(n.usage||0)&e.INDEX&&!n.indexType&&(n.data instanceof Uint32Array?r.indexType=`uint32`:n.data instanceof Uint16Array?r.indexType=`uint16`:n.data instanceof Uint8Array&&(r.indexType=`uint8`)),delete r.data,super(t,r,e.defaultProps),this.usage=r.usage||0,this.indexType=r.indexType,this.updateTimestamp=t.incrementTimestamp()}clone(e){return this.device.createBuffer({...this.props,...e})}static DEBUG_DATA_MAX_LENGTH=32;debugData=new ArrayBuffer(0);_setDebugData(t,n,r){let i=null,a;ArrayBuffer.isView(t)?(i=t,a=t.buffer):a=t;let o=Math.min(t?t.byteLength:r,e.DEBUG_DATA_MAX_LENGTH);if(a===null)this.debugData=new ArrayBuffer(o);else{let e=Math.min(i?.byteOffset||0,a.byteLength),t=Math.max(0,a.byteLength-e),n=Math.min(o,t);this.debugData=new Uint8Array(a,e,n).slice().buffer}}static defaultProps={...B.defaultProps,usage:0,byteLength:0,byteOffset:0,data:null,indexType:`uint16`,onMapped:void 0}},Al=new class{getDataTypeInfo(e){let[t,n,r]=jl[e],i=e.includes(`norm`);return{signedType:t,primitiveType:n,byteLength:r,normalized:i,integer:!i&&!e.startsWith(`float`),signed:e.startsWith(`s`)}}getNormalizedDataType(e){let t=e;switch(t){case`uint8`:return`unorm8`;case`sint8`:return`snorm8`;case`uint16`:return`unorm16`;case`sint16`:return`snorm16`;default:return t}}alignTo(e,t){switch(t){case 1:return e;case 2:return e+e%2;default:return e+(4-e%4)%4}}getDataType(e){let t=ArrayBuffer.isView(e)?e.constructor:e;if(t===Uint8ClampedArray)return`uint8`;let n=Object.values(jl).find(e=>t===e[4]);if(!n)throw Error(t.name);return n[0]}getTypedArrayConstructor(e){let[,,,,t]=jl[e];return t}},jl={uint8:[`uint8`,`u32`,1,!1,Uint8Array],sint8:[`sint8`,`i32`,1,!1,Int8Array],unorm8:[`uint8`,`f32`,1,!0,Uint8Array],snorm8:[`sint8`,`f32`,1,!0,Int8Array],uint16:[`uint16`,`u32`,2,!1,Uint16Array],sint16:[`sint16`,`i32`,2,!1,Int16Array],unorm16:[`uint16`,`u32`,2,!0,Uint16Array],snorm16:[`sint16`,`i32`,2,!0,Int16Array],float16:[`float16`,`f16`,2,!1,Uint16Array],float32:[`float32`,`f32`,4,!1,Float32Array],uint32:[`uint32`,`u32`,4,!1,Uint32Array],sint32:[`sint32`,`i32`,4,!1,Int32Array]},Ml=new class{getVertexFormatInfo(e){let t;e.endsWith(`-webgl`)&&(e.replace(`-webgl`,``),t=!0);let[n,r]=e.split(`x`),i=n,a=r?parseInt(r):1,o=Al.getDataTypeInfo(i),s={type:i,components:a,byteLength:o.byteLength*a,integer:o.integer,signed:o.signed,normalized:o.normalized};return t&&(s.webglOnly=!0),s}makeVertexFormat(e,t,n){let r=n?Al.getNormalizedDataType(e):e;switch(r){case`unorm8`:return t===1?`unorm8`:t===3?`unorm8x3-webgl`:`${r}x${t}`;case`snorm8`:return t===1?`snorm8`:t===3?`snorm8x3-webgl`:`${r}x${t}`;case`uint8`:case`sint8`:if(t===1||t===3)throw Error(`size: ${t}`);return`${r}x${t}`;case`uint16`:return t===1?`uint16`:t===3?`uint16x3-webgl`:`${r}x${t}`;case`sint16`:return t===1?`sint16`:t===3?`sint16x3-webgl`:`${r}x${t}`;case`unorm16`:return t===1?`unorm16`:t===3?`unorm16x3-webgl`:`${r}x${t}`;case`snorm16`:return t===1?`snorm16`:t===3?`snorm16x3-webgl`:`${r}x${t}`;case`float16`:if(t===1||t===3)throw Error(`size: ${t}`);return`${r}x${t}`;default:return t===1?r:`${r}x${t}`}}getVertexFormatFromAttribute(e,t,n){if(!t||t>4)throw Error(`size ${t}`);let r=t,i=Al.getDataType(e);return this.makeVertexFormat(i,r,n)}getCompatibleVertexFormat(e){let t;switch(e.primitiveType){case`f32`:t=`float32`;break;case`i32`:t=`sint32`;break;case`u32`:t=`uint32`;break;case`f16`:return e.components<=2?`float16x2`:`float16x4`}return e.components===1?t:`${t}x${e.components}`}},H=`texture-compression-bc`,U=`texture-compression-astc`,Nl=`texture-compression-etc2`,Pl=`texture-compression-etc1-webgl`,Fl=`texture-compression-pvrtc-webgl`,Il=`texture-compression-atc-webgl`,Ll=`float32-renderable-webgl`,Rl=`float16-renderable-webgl`,zl=`rgb9e5ufloat-renderable-webgl`,Bl=`snorm8-renderable-webgl`,Vl=`norm16-webgl`,Hl=`norm16-renderable-webgl`,Ul=`snorm16-renderable-webgl`,Wl=`float32-filterable`,Gl=`float16-filterable-webgl`;function Kl(e){let t=Xl[e];if(!t)throw Error(`Unsupported texture format ${e}`);return t}function ql(){return Xl}var Jl={r8unorm:{},rg8unorm:{},"rgb8unorm-webgl":{},rgba8unorm:{},"rgba8unorm-srgb":{},r8snorm:{render:Bl},rg8snorm:{render:Bl},"rgb8snorm-webgl":{},rgba8snorm:{render:Bl},r8uint:{},rg8uint:{},rgba8uint:{},r8sint:{},rg8sint:{},rgba8sint:{},bgra8unorm:{},"bgra8unorm-srgb":{},r16unorm:{f:Vl,render:Hl},rg16unorm:{f:Vl,render:Hl},"rgb16unorm-webgl":{f:Vl,render:!1},rgba16unorm:{f:Vl,render:Hl},r16snorm:{f:Vl,render:Ul},rg16snorm:{f:Vl,render:Ul},"rgb16snorm-webgl":{f:Vl,render:!1},rgba16snorm:{f:Vl,render:Ul},r16uint:{},rg16uint:{},rgba16uint:{},r16sint:{},rg16sint:{},rgba16sint:{},r16float:{render:Rl,filter:`float16-filterable-webgl`},rg16float:{render:Rl,filter:Gl},rgba16float:{render:Rl,filter:Gl},r32uint:{},rg32uint:{},rgba32uint:{},r32sint:{},rg32sint:{},rgba32sint:{},r32float:{render:Ll,filter:Wl},rg32float:{render:!1,filter:Wl},"rgb32float-webgl":{render:Ll,filter:Wl},rgba32float:{render:Ll,filter:Wl},"rgba4unorm-webgl":{channels:`rgba`,bitsPerChannel:[4,4,4,4],packed:!0},"rgb565unorm-webgl":{channels:`rgb`,bitsPerChannel:[5,6,5,0],packed:!0},"rgb5a1unorm-webgl":{channels:`rgba`,bitsPerChannel:[5,5,5,1],packed:!0},rgb9e5ufloat:{channels:`rgb`,packed:!0,render:zl},rg11b10ufloat:{channels:`rgb`,bitsPerChannel:[11,11,10,0],packed:!0,p:1,render:Ll},rgb10a2unorm:{channels:`rgba`,bitsPerChannel:[10,10,10,2],packed:!0,p:1},rgb10a2uint:{channels:`rgba`,bitsPerChannel:[10,10,10,2],packed:!0,p:1},stencil8:{attachment:`stencil`,bitsPerChannel:[8,0,0,0],dataType:`uint8`},depth16unorm:{attachment:`depth`,bitsPerChannel:[16,0,0,0],dataType:`uint16`},depth24plus:{attachment:`depth`,bitsPerChannel:[24,0,0,0],dataType:`uint32`},depth32float:{attachment:`depth`,bitsPerChannel:[32,0,0,0],dataType:`float32`},"depth24plus-stencil8":{attachment:`depth-stencil`,bitsPerChannel:[24,8,0,0],packed:!0},"depth32float-stencil8":{attachment:`depth-stencil`,bitsPerChannel:[32,8,0,0],packed:!0}},Yl={"bc1-rgb-unorm-webgl":{f:H},"bc1-rgb-unorm-srgb-webgl":{f:H},"bc1-rgba-unorm":{f:H},"bc1-rgba-unorm-srgb":{f:H},"bc2-rgba-unorm":{f:H},"bc2-rgba-unorm-srgb":{f:H},"bc3-rgba-unorm":{f:H},"bc3-rgba-unorm-srgb":{f:H},"bc4-r-unorm":{f:H},"bc4-r-snorm":{f:H},"bc5-rg-unorm":{f:H},"bc5-rg-snorm":{f:H},"bc6h-rgb-ufloat":{f:H},"bc6h-rgb-float":{f:H},"bc7-rgba-unorm":{f:H},"bc7-rgba-unorm-srgb":{f:H},"etc2-rgb8unorm":{f:Nl},"etc2-rgb8unorm-srgb":{f:Nl},"etc2-rgb8a1unorm":{f:Nl},"etc2-rgb8a1unorm-srgb":{f:Nl},"etc2-rgba8unorm":{f:Nl},"etc2-rgba8unorm-srgb":{f:Nl},"eac-r11unorm":{f:Nl},"eac-r11snorm":{f:Nl},"eac-rg11unorm":{f:Nl},"eac-rg11snorm":{f:Nl},"astc-4x4-unorm":{f:U},"astc-4x4-unorm-srgb":{f:U},"astc-5x4-unorm":{f:U},"astc-5x4-unorm-srgb":{f:U},"astc-5x5-unorm":{f:U},"astc-5x5-unorm-srgb":{f:U},"astc-6x5-unorm":{f:U},"astc-6x5-unorm-srgb":{f:U},"astc-6x6-unorm":{f:U},"astc-6x6-unorm-srgb":{f:U},"astc-8x5-unorm":{f:U},"astc-8x5-unorm-srgb":{f:U},"astc-8x6-unorm":{f:U},"astc-8x6-unorm-srgb":{f:U},"astc-8x8-unorm":{f:U},"astc-8x8-unorm-srgb":{f:U},"astc-10x5-unorm":{f:U},"astc-10x5-unorm-srgb":{f:U},"astc-10x6-unorm":{f:U},"astc-10x6-unorm-srgb":{f:U},"astc-10x8-unorm":{f:U},"astc-10x8-unorm-srgb":{f:U},"astc-10x10-unorm":{f:U},"astc-10x10-unorm-srgb":{f:U},"astc-12x10-unorm":{f:U},"astc-12x10-unorm-srgb":{f:U},"astc-12x12-unorm":{f:U},"astc-12x12-unorm-srgb":{f:U},"pvrtc-rgb4unorm-webgl":{f:Fl},"pvrtc-rgba4unorm-webgl":{f:Fl},"pvrtc-rgb2unorm-webgl":{f:Fl},"pvrtc-rgba2unorm-webgl":{f:Fl},"etc1-rbg-unorm-webgl":{f:Pl},"atc-rgb-unorm-webgl":{f:Il},"atc-rgba-unorm-webgl":{f:Il},"atc-rgbai-unorm-webgl":{f:Il}},Xl={...Jl,...Yl},Zl=/^(r|rg|rgb|rgba|bgra)([0-9]*)([a-z]*)(-srgb)?(-webgl)?$/,Ql=[`rgb`,`rgba`,`bgra`],$l=[`depth`,`stencil`],eu=[`bc1`,`bc2`,`bc3`,`bc4`,`bc5`,`bc6`,`bc7`,`etc1`,`etc2`,`eac`,`atc`,`astc`,`pvrtc`],tu=new class{isColor(e){return Ql.some(t=>e.startsWith(t))}isDepthStencil(e){return $l.some(t=>e.startsWith(t))}isCompressed(e){return eu.some(t=>e.startsWith(t))}getInfo(e){return iu(e)}getCapabilities(e){return ru(e)}computeMemoryLayout(e){return nu(e)}};function nu({format:e,width:t,height:n,depth:r,byteAlignment:i}){let{bytesPerPixel:a,bytesPerBlock:o=a,blockWidth:s=1,blockHeight:c=1,compressed:l=!1}=tu.getInfo(e),u=l?Math.ceil(t/s):t,d=l?Math.ceil(n/c):n,f=u*o,p=Math.ceil(f/i)*i,m=d,h=p*m*r;return{bytesPerPixel:a,bytesPerRow:p,rowsPerImage:m,depthOrArrayLayers:r,bytesPerImage:p*m,byteLength:h}}function ru(e){let t=Kl(e),n={format:e,create:t.f??!0,render:t.render??!0,filter:t.filter??!0,blend:t.blend??!0,store:t.store??!0},r=iu(e),i=e.startsWith(`depth`)||e.startsWith(`stencil`),a=r?.signed,o=r?.integer,s=r?.webgl,c=!!r?.compressed;return n.render&&=!i&&!c,n.filter&&=!i&&!a&&!o&&!s,n}function iu(e){let t=au(e);if(tu.isCompressed(e)){t.channels=`rgb`,t.components=3,t.bytesPerPixel=1,t.srgb=!1,t.compressed=!0,t.bytesPerBlock=su(e);let n=ou(e);n&&(t.blockWidth=n.blockWidth,t.blockHeight=n.blockHeight)}let n=t.packed?null:Zl.exec(e);if(n){let[,r,i,a,o,s]=n,c=`${a}${i}`,l=Al.getDataTypeInfo(c),u=l.byteLength*8,d=r?.length??1,f=[u,d>=2?u:0,d>=3?u:0,d>=4?u:0];t={format:e,attachment:t.attachment,dataType:l.signedType,components:d,channels:r,integer:l.integer,signed:l.signed,normalized:l.normalized,bitsPerChannel:f,bytesPerPixel:l.byteLength*d,packed:t.packed,srgb:t.srgb},s===`-webgl`&&(t.webgl=!0),o===`-srgb`&&(t.srgb=!0)}return e.endsWith(`-webgl`)&&(t.webgl=!0),e.endsWith(`-srgb`)&&(t.srgb=!0),t}function au(e){let t=Kl(e),n=t.bytesPerPixel||1,r=t.bitsPerChannel||[8,8,8,8];return delete t.bitsPerChannel,delete t.bytesPerPixel,delete t.f,delete t.render,delete t.filter,delete t.blend,delete t.store,{...t,format:e,attachment:t.attachment||`color`,channels:t.channels||`r`,components:t.components||t.channels?.length||1,bytesPerPixel:n,bitsPerChannel:r,dataType:t.dataType||`uint8`,srgb:t.srgb??!1,packed:t.packed??!1,webgl:t.webgl??!1,integer:t.integer??!1,signed:t.signed??!1,normalized:t.normalized??!1,compressed:t.compressed??!1}}function ou(e){let t=/.*-(\d+)x(\d+)-.*/.exec(e);if(t){let[,e,n]=t;return{blockWidth:Number(e),blockHeight:Number(n)}}return e.startsWith(`bc`)||e.startsWith(`etc1`)||e.startsWith(`etc2`)||e.startsWith(`eac`)||e.startsWith(`atc`)||e.startsWith(`pvrtc-rgb4`)||e.startsWith(`pvrtc-rgba4`)?{blockWidth:4,blockHeight:4}:e.startsWith(`pvrtc-rgb2`)||e.startsWith(`pvrtc-rgba2`)?{blockWidth:8,blockHeight:4}:null}function su(e){return e.startsWith(`bc1`)||e.startsWith(`bc4`)||e.startsWith(`etc1`)||e.startsWith(`etc2-rgb8`)||e.startsWith(`etc2-rgb8a1`)||e.startsWith(`eac-r11`)||e===`atc-rgb-unorm-webgl`?8:e.startsWith(`bc2`)||e.startsWith(`bc3`)||e.startsWith(`bc5`)||e.startsWith(`bc6h`)||e.startsWith(`bc7`)||e.startsWith(`etc2-rgba8`)||e.startsWith(`eac-rg11`)||e.startsWith(`astc`)||e===`atc-rgba-unorm-webgl`||e===`atc-rgbai-unorm-webgl`?16:e.startsWith(`pvrtc`)?8:16}function cu(e){return typeof ImageData<`u`&&e instanceof ImageData||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement||typeof VideoFrame<`u`&&e instanceof VideoFrame||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas}function lu(e){if(typeof ImageData<`u`&&e instanceof ImageData||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas)return{width:e.width,height:e.height};if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement)return{width:e.naturalWidth,height:e.naturalHeight};if(typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement)return{width:e.videoWidth,height:e.videoHeight};if(typeof VideoFrame<`u`&&e instanceof VideoFrame)return{width:e.displayWidth,height:e.displayHeight};throw Error(`Unknown image type`)}var uu=class{};function du(e,t){return[fu(e),...t.map(fu).filter(e=>e!==void 0)].filter(e=>e!==void 0)}function fu(e){if(e!==void 0){if(e===null||typeof e==`string`||typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Error)return e.message;if(Array.isArray(e))return e.map(fu);if(typeof e==`object`){if(pu(e)){let t=String(e);if(t!==`[object Object]`)return t}return mu(e)?hu(e):e.constructor?.name||`Object`}return String(e)}}function pu(e){return`toString`in e&&typeof e.toString==`function`&&e.toString!==Object.prototype.toString}function mu(e){return`message`in e&&`type`in e}function hu(e){let t=typeof e.type==`string`?e.type:`message`,n=typeof e.message==`string`?e.message:``,r=typeof e.lineNum==`number`?e.lineNum:null,i=typeof e.linePos==`number`?e.linePos:null;return`${t}${r!==null&&i!==null?` @ ${r}:${i}`:r===null?``:` @ ${r}`}: ${n}`.trim()}var gu=class{features;disabledFeatures;constructor(e=[],t){this.features=new Set(e),this.disabledFeatures=t||{}}*[Symbol.iterator](){yield*this.features}has(e){return!this.disabledFeatures?.[e]&&this.features.has(e)}},_u=class e{static defaultProps={id:null,powerPreference:`high-performance`,failIfMajorPerformanceCaveat:!1,createCanvasContext:void 0,webgl:{},onError:(e,t)=>{},onResize:(e,t)=>{let[n,r]=e.getDevicePixelSize();z.log(1,`${e} resized => ${n}x${r}px`)()},onPositionChange:(e,t)=>{let[n,r]=e.getPosition();z.log(1,`${e} repositioned => ${n},${r}`)()},onVisibilityChange:e=>z.log(1,`${e} Visibility changed ${e.isVisible}`)(),onDevicePixelRatioChange:(e,t)=>z.log(1,`${e} DPR changed ${t.oldRatio} => ${e.devicePixelRatio}`)(),debug:yu(),debugGPUTime:!1,debugShaders:z.get(`debug-shaders`)||void 0,debugFramebuffers:!!z.get(`debug-framebuffers`),debugFactories:!!z.get(`debug-factories`),debugWebGL:!!z.get(`debug-webgl`),debugSpectorJS:void 0,debugSpectorJSUrl:void 0,_reuseDevices:!1,_requestMaxLimits:!0,_cacheShaders:!0,_destroyShaders:!1,_cachePipelines:!0,_sharePipelines:!0,_destroyPipelines:!1,_initializeFeatures:!0,_disabledFeatures:{"compilation-status-async-webgl":!0},_handle:void 0};get[Symbol.toStringTag](){return`Device`}toString(){return`Device(${this.id})`}id;props;userData={};statsManager=Fc;_factories={};timestamp=0;_reused=!1;_moduleData={};_textureCaps={};_debugGPUTimeQuery=null;constructor(t){this.props={...e.defaultProps,...t},this.id=this.props.id||dl(this[Symbol.toStringTag].toLowerCase())}getVertexFormatInfo(e){return Ml.getVertexFormatInfo(e)}isVertexFormatSupported(e){return!0}getTextureFormatInfo(e){return tu.getInfo(e)}getTextureFormatCapabilities(e){let t=this._textureCaps[e];if(!t){let n=this._getDeviceTextureFormatCapabilities(e);t=this._getDeviceSpecificTextureFormatCapabilities(n),this._textureCaps[e]=t}return t}getMipLevelCount(e,t,n=1){return 1+Math.floor(Math.log2(Math.max(e,t,n)))}isExternalImage(e){return cu(e)}getExternalImageSize(e){return lu(e)}isTextureFormatSupported(e){return this.getTextureFormatCapabilities(e).create}isTextureFormatFilterable(e){return this.getTextureFormatCapabilities(e).filter}isTextureFormatRenderable(e){return this.getTextureFormatCapabilities(e).render}isTextureFormatCompressed(e){return tu.isCompressed(e)}getSupportedCompressedTextureFormats(){let e=[];for(let t of Object.keys(ql()))this.isTextureFormatCompressed(t)&&this.isTextureFormatSupported(t)&&e.push(t);return e}pushDebugGroup(e){this.commandEncoder.pushDebugGroup(e)}popDebugGroup(){this.commandEncoder?.popDebugGroup()}insertDebugMarker(e){this.commandEncoder?.insertDebugMarker(e)}loseDevice(){return!1}incrementTimestamp(){return this.timestamp++}reportError(e,t,...n){if(!this.props.onError(e,t)){let r=du(t,n);return z.error(this.type===`webgl`?`%cWebGL`:`%cWebGPU`,`color: white; background: red; padding: 2px 6px; border-radius: 3px;`,e.message,...r)}return()=>{}}debug(){this.props.debug||z.once(0,`'Type luma.log.set({debug: true}) in console to enable debug breakpoints',
or create a device with the 'debug: true' prop.`)()}getDefaultCanvasContext(){if(!this.canvasContext)throw Error(`Device has no default CanvasContext. See props.createCanvasContext`);return this.canvasContext}createFence(){throw Error(`createFence() not implemented`)}beginRenderPass(e){return this.commandEncoder.beginRenderPass(e)}beginComputePass(e){return this.commandEncoder.beginComputePass(e)}generateMipmapsWebGPU(e){throw Error(`not implemented`)}_createSharedRenderPipelineWebGL(e){throw Error(`_createSharedRenderPipelineWebGL() not implemented`)}_createBindGroupLayoutWebGPU(e,t){throw Error(`_createBindGroupLayoutWebGPU() not implemented`)}_createBindGroupWebGPU(e,t,n,r,i){throw Error(`_createBindGroupWebGPU() not implemented`)}_supportsDebugGPUTime(){return this.features.has(`timestamp-query`)&&!!(this.props.debug||this.props.debugGPUTime)}_enableDebugGPUTime(e=256){if(!this._supportsDebugGPUTime())return null;if(this._debugGPUTimeQuery)return this._debugGPUTimeQuery;try{this._debugGPUTimeQuery=this.createQuerySet({type:`timestamp`,count:e}),this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id,timeProfilingQuerySet:this._debugGPUTimeQuery})}catch{this._debugGPUTimeQuery=null}return this._debugGPUTimeQuery}_disableDebugGPUTime(){this._debugGPUTimeQuery&&=(this.commandEncoder.getTimeProfilingQuerySet()===this._debugGPUTimeQuery&&(this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id})),this._debugGPUTimeQuery.destroy(),null)}_isDebugGPUTimeEnabled(){return this._debugGPUTimeQuery!==null}getCanvasContext(){return this.getDefaultCanvasContext()}readPixelsToArrayWebGL(e,t){throw Error(`not implemented`)}readPixelsToBufferWebGL(e,t){throw Error(`not implemented`)}setParametersWebGL(e){throw Error(`not implemented`)}getParametersWebGL(e){throw Error(`not implemented`)}withParametersWebGL(e,t){throw Error(`not implemented`)}clearWebGL(e){throw Error(`not implemented`)}resetWebGL(){throw Error(`not implemented`)}getModuleData(e){return this._moduleData[e]||={},this._moduleData[e]}static _getCanvasContextProps(e){return e.createCanvasContext===!0?{}:e.createCanvasContext}_getDeviceTextureFormatCapabilities(e){let t=tu.getCapabilities(e),n=e=>(typeof e==`string`?this.features.has(e):e)??!0,r=n(t.create);return{format:e,create:r,render:r&&n(t.render),filter:r&&n(t.filter),blend:r&&n(t.blend),store:r&&n(t.store)}}_normalizeBufferProps(e){(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e={data:e});let t={...e};if((e.usage||0)&V.INDEX&&(e.indexType||(e.data instanceof Uint32Array?t.indexType=`uint32`:e.data instanceof Uint16Array?t.indexType=`uint16`:e.data instanceof Uint8Array&&(t.data=new Uint16Array(e.data),t.indexType=`uint16`)),!t.indexType))throw Error(`indices buffer content must be of type uint16 or uint32`);return t}};function vu(e,t){return e==null?t!==void 0&&t!==`production`:!!e}function yu(){return vu(z.get(`debug`),bu())}function bu(){let e=globalThis.process;if(e?.env)return e.env.NODE_ENV}var xu=`set luma.log.level=1 (or higher) to trace rendering`,Su="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.",Cu=new class e{static defaultProps={..._u.defaultProps,type:`best-available`,adapters:void 0,waitForPageLoad:!0};stats=Fc;log=z;VERSION=`9.3.6`;spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw z.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),z.error(`'yarn why @luma.gl/core' can help identify the source of the conflict`)(),Error(`luma.gl - multiple versions detected: see console log`);z.error(`This version of luma.gl has already been initialized`)()}z.log(1,`${this.VERSION} - ${xu}`)(),globalThis.luma=this}async createDevice(t={}){let n={...e.defaultProps,...t},r=this.selectAdapter(n.type,n.adapters);if(!r)throw Error(Su);return n.waitForPageLoad&&await r.pageLoaded,await r.create(n)}async attachDevice(e,t){let n=this._getTypeFromHandle(e,t.adapters),r=n&&this.selectAdapter(n,t.adapters);if(!r)throw Error(Su);return await r?.attach?.(e,t)}registerAdapters(e){for(let t of e)this.preregisteredAdapters.set(t.type,t)}getSupportedAdapters(e=[]){let t=this._getAdapterMap(e);return Array.from(t).map(([,e])=>e).filter(e=>e.isSupported?.()).map(e=>e.type)}getBestAvailableAdapterType(e=[]){let t=[`webgpu`,`webgl`,`null`],n=this._getAdapterMap(e);for(let e of t)if(n.get(e)?.isSupported?.())return e;return null}selectAdapter(e,t=[]){let n=e;e===`best-available`&&(n=this.getBestAvailableAdapterType(t));let r=this._getAdapterMap(t);return n&&r.get(n)||null}enforceWebGL2(e=!0,t=[]){let n=this._getAdapterMap(t).get(`webgl`);n||z.warn(`enforceWebGL2: webgl adapter not found`)(),n?.enforceWebGL2?.(e)}setDefaultDeviceProps(t){Object.assign(e.defaultProps,t)}_getAdapterMap(e=[]){let t=new Map(this.preregisteredAdapters);for(let n of e)t.set(n.type,n);return t}_getTypeFromHandle(e,t=[]){return e instanceof WebGL2RenderingContext?`webgl`:typeof GPUDevice<`u`&&e instanceof GPUDevice||e?.queue?`webgpu`:e===null?`null`:(e instanceof WebGLRenderingContext?z.warn(`WebGL1 is not supported`,e)():z.warn(`Unknown handle type`,e)(),null)}},wu=class{get pageLoaded(){return Ou()}},Tu=Vc()&&typeof document<`u`,Eu=()=>Tu&&document.readyState===`complete`,Du=null;function Ou(){return Du||=Eu()||typeof window>`u`?Promise.resolve():new Promise(e=>window.addEventListener(`load`,()=>e())),Du}var ku=class e extends B{static defaultProps={...B.defaultProps,type:`color-sampler`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,addressModeW:`clamp-to-edge`,magFilter:`nearest`,minFilter:`nearest`,mipmapFilter:`none`,lodMinClamp:0,lodMaxClamp:32,compare:`less-equal`,maxAnisotropy:1};get[Symbol.toStringTag](){return`Sampler`}constructor(t,n){n=e.normalizeProps(t,n),super(t,n,e.defaultProps)}static normalizeProps(e,t){return t}},Au={"1d":`1d`,"2d":`2d`,"2d-array":`2d`,cube:`2d`,"cube-array":`2d`,"3d":`3d`},W=class e extends B{static SAMPLE=4;static STORAGE=8;static RENDER=16;static COPY_SRC=1;static COPY_DST=2;static TEXTURE=4;static RENDER_ATTACHMENT=16;dimension;baseDimension;format;width;height;depth;mipLevels;samples;byteAlignment;ready=Promise.resolve(this);isReady=!0;updateTimestamp;get[Symbol.toStringTag](){return`Texture`}toString(){return`Texture(${this.id},${this.format},${this.width}x${this.height})`}constructor(t,n,r){if(n=e.normalizeProps(t,n),super(t,n,e.defaultProps),this.dimension=this.props.dimension,this.baseDimension=Au[this.dimension],this.format=this.props.format,this.width=this.props.width,this.height=this.props.height,this.depth=this.props.depth,this.mipLevels=this.props.mipLevels,this.samples=this.props.samples||1,this.dimension===`cube`&&(this.depth=6),this.props.width===void 0||this.props.height===void 0){if(t.isExternalImage(n.data)){let e=t.getExternalImageSize(n.data);this.width=e?.width||1,this.height=e?.height||1}else this.width=1,this.height=1,(this.props.width===void 0||this.props.height===void 0)&&z.warn(`${this} created with undefined width or height. This is deprecated. Use DynamicTexture instead.`)()}this.byteAlignment=r?.byteAlignment||1,this.updateTimestamp=t.incrementTimestamp()}clone(e){return this.device.createTexture({...this.props,...e})}setSampler(e){this.sampler=e instanceof ku?e:this.device.createSampler(e)}copyImageData(e){let{data:t,depth:n,...r}=e;this.writeData(t,{...r,depthOrArrayLayers:r.depthOrArrayLayers??n})}computeMemoryLayout(e={}){let{width:t=this.width,height:n=this.height,depthOrArrayLayers:r=this.depth}=this._normalizeTextureReadOptions(e),{format:i,byteAlignment:a}=this;return tu.computeMemoryLayout({format:i,width:t,height:n,depth:r,byteAlignment:a})}readBuffer(e,t){throw Error(`readBuffer not implemented`)}readDataAsync(e){throw Error(`readBuffer not implemented`)}writeBuffer(e,t){throw Error(`readBuffer not implemented`)}writeData(e,t){throw Error(`readBuffer not implemented`)}readDataSyncWebGL(e){throw Error(`readDataSyncWebGL not available`)}generateMipmapsWebGL(){throw Error(`generateMipmapsWebGL not available`)}static normalizeProps(e,t){let n={...t},{width:r,height:i}=n;return typeof r==`number`&&(n.width=Math.max(1,Math.ceil(r))),typeof i==`number`&&(n.height=Math.max(1,Math.ceil(i))),n}_initializeData(e){this.device.isExternalImage(e)?this.copyExternalImage({image:e,width:this.width,height:this.height,depth:this.depth,mipLevel:0,x:0,y:0,z:0,aspect:`all`,colorSpace:`srgb`,premultipliedAlpha:!1,flipY:!1}):e&&this.copyImageData({data:e,mipLevel:0,x:0,y:0,z:0,aspect:`all`})}_normalizeCopyImageDataOptions(e){let{data:t,depth:n,...r}=e,i=this._normalizeTextureWriteOptions({...r,depthOrArrayLayers:r.depthOrArrayLayers??n});return{data:t,depth:i.depthOrArrayLayers,...i}}_normalizeCopyExternalImageOptions(t){let n=e._omitUndefined(t),r=n.mipLevel??0,i=this._getMipLevelSize(r),a=this.device.getExternalImageSize(t.image),o={...e.defaultCopyExternalImageOptions,...i,...a,...n};return o.width=Math.min(o.width,i.width-o.x),o.height=Math.min(o.height,i.height-o.y),o.depth=Math.min(o.depth,i.depthOrArrayLayers-o.z),o}_normalizeTextureReadOptions(t){let n=e._omitUndefined(t),r=n.mipLevel??0,i=this._getMipLevelSize(r),a={...e.defaultTextureReadOptions,...i,...n};return a.width=Math.min(a.width,i.width-a.x),a.height=Math.min(a.height,i.height-a.y),a.depthOrArrayLayers=Math.min(a.depthOrArrayLayers,i.depthOrArrayLayers-a.z),a}_getSupportedColorReadOptions(e){let t=this._normalizeTextureReadOptions(e),n=tu.getInfo(this.format);switch(this._validateColorReadAspect(t),this._validateColorReadFormat(n),this.dimension){case`2d`:case`cube`:case`cube-array`:case`2d-array`:case`3d`:return t;default:throw Error(`${this} color readback does not support ${this.dimension} textures`)}}_validateColorReadAspect(e){if(e.aspect!==`all`)throw Error(`${this} color readback only supports aspect 'all'`)}_validateColorReadFormat(e){if(e.compressed)throw Error(`${this} color readback does not support compressed formats (${this.format})`);switch(e.attachment){case`color`:return;case`depth`:throw Error(`${this} color readback does not support depth formats (${this.format})`);case`stencil`:throw Error(`${this} color readback does not support stencil formats (${this.format})`);case`depth-stencil`:throw Error(`${this} color readback does not support depth-stencil formats (${this.format})`);default:throw Error(`${this} color readback does not support format ${this.format}`)}}_normalizeTextureWriteOptions(t){let n=e._omitUndefined(t),r=n.mipLevel??0,i=this._getMipLevelSize(r),a={...e.defaultTextureWriteOptions,...i,...n};a.width=Math.min(a.width,i.width-a.x),a.height=Math.min(a.height,i.height-a.y),a.depthOrArrayLayers=Math.min(a.depthOrArrayLayers,i.depthOrArrayLayers-a.z);let o=tu.computeMemoryLayout({format:this.format,width:a.width,height:a.height,depth:a.depthOrArrayLayers,byteAlignment:this.byteAlignment}),s=o.bytesPerPixel*a.width;if(a.bytesPerRow=n.bytesPerRow??o.bytesPerRow,a.rowsPerImage=n.rowsPerImage??a.height,a.bytesPerRow<s)throw Error(`bytesPerRow (${a.bytesPerRow}) must be at least ${s} for ${this.format}`);if(a.rowsPerImage<a.height)throw Error(`rowsPerImage (${a.rowsPerImage}) must be at least ${a.height} for ${this.format}`);let c=this.device.getTextureFormatInfo(this.format).bytesPerPixel;if(c&&a.bytesPerRow%c!==0)throw Error(`bytesPerRow (${a.bytesPerRow}) must be a multiple of bytesPerPixel (${c}) for ${this.format}`);return a}_getMipLevelSize(e){return{width:Math.max(1,this.width>>e),height:this.baseDimension===`1d`?1:Math.max(1,this.height>>e),depthOrArrayLayers:this.dimension===`3d`?Math.max(1,this.depth>>e):this.depth}}getAllocatedByteLength(){let e=0;for(let t=0;t<this.mipLevels;t++){let{width:n,height:r,depthOrArrayLayers:i}=this._getMipLevelSize(t);e+=tu.computeMemoryLayout({format:this.format,width:n,height:r,depth:i,byteAlignment:1}).byteLength}return e*this.samples}static _omitUndefined(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0))}static defaultProps={...B.defaultProps,data:null,dimension:`2d`,format:`rgba8unorm`,usage:e.SAMPLE|e.RENDER|e.COPY_DST,width:void 0,height:void 0,depth:1,mipLevels:1,samples:void 0,sampler:{},view:void 0};static defaultCopyDataOptions={data:void 0,byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,width:void 0,height:void 0,depthOrArrayLayers:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:`all`};static defaultCopyExternalImageOptions={image:void 0,sourceX:0,sourceY:0,width:void 0,height:void 0,depth:1,mipLevel:0,x:0,y:0,z:0,aspect:`all`,colorSpace:`srgb`,premultipliedAlpha:!1,flipY:!1};static defaultTextureReadOptions={x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:`all`};static defaultTextureWriteOptions={byteOffset:0,bytesPerRow:void 0,rowsPerImage:void 0,x:0,y:0,z:0,width:void 0,height:void 0,depthOrArrayLayers:1,mipLevel:0,aspect:`all`}},ju=class e extends B{get[Symbol.toStringTag](){return`TextureView`}constructor(t,n){super(t,n,e.defaultProps)}static defaultProps={...B.defaultProps,format:void 0,dimension:void 0,aspect:`all`,baseMipLevel:0,mipLevelCount:void 0,baseArrayLayer:0,arrayLayerCount:void 0}};function Mu(e,t,n){let r=``,i=t.split(/\r?\n/),a=e.slice().sort((e,t)=>e.lineNum-t.lineNum);switch(n?.showSourceCode||`no`){case`all`:let t=0;for(let e=1;e<=i.length;e++){let o=i[e-1],s=a[t];for(o&&s&&(r+=Fu(o,e,n));a.length>t&&s.lineNum===e;){let e=a[t++];e&&(r+=Nu(e,i,e.lineNum,{...n,inlineSource:!1}))}}for(;a.length>t;){let e=a[t++];e&&(r+=Nu(e,[],0,{...n,inlineSource:!1}))}return r;case`issues`:case`no`:for(let t of e)r+=Nu(t,i,t.lineNum,{inlineSource:n?.showSourceCode!==`no`});return r}}function Nu(e,t,n,r){if(r?.inlineSource)return`
${Pu(t,n)}${e.linePos>0?`${` `.repeat(e.linePos+5)}^^^\n`:``}${e.type.toUpperCase()}: ${e.message}

`;let i=e.type===`error`?`red`:`orange`;return r?.html?`<div class='luma-compiler-log-${e.type}' style="color:${i};"><b> ${e.type.toUpperCase()}: ${e.message}</b></div>`:`${e.type.toUpperCase()}: ${e.message}`}function Pu(e,t,n){let r=``;for(let i=t-2;i<=t;i++){let a=e[i-1];a!==void 0&&(r+=Fu(a,t,n))}return r}function Fu(e,t,n){let r=n?.html?Lu(e):e;return`${Iu(String(t),4)}: ${r}${n?.html?`<br/>`:`
`}`}function Iu(e,t){let n=``;for(let r=e.length;r<t;++r)n+=` `;return n+e}function Lu(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}var Ru=class e extends B{get[Symbol.toStringTag](){return`Shader`}stage;source;compilationStatus=`pending`;constructor(t,n){n={...n,debugShaders:n.debugShaders||t.props.debugShaders||`errors`},super(t,{id:zu(n),...n},e.defaultProps),this.stage=this.props.stage,this.source=this.props.source}getCompilationInfoSync(){return null}getTranslatedSource(){return null}async debugShader(){let e=this.props.debugShaders;switch(e){case`never`:return;case`errors`:if(this.compilationStatus===`success`)return}let t=await this.getCompilationInfo();(e!==`warnings`||t?.length!==0)&&this._displayShaderLog(t,this.id)}_displayShaderLog(e,t){if(typeof document>`u`||!document?.createElement)return;let n=t,r=`${this.stage} shader "${n}"`,i=Mu(e,this.source,{showSourceCode:`all`,html:!0}),a=this.getTranslatedSource(),o=document.createElement(`div`);o.innerHTML=`\
<h1>Compilation error in ${r}</h1>
<div style="display:flex;position:fixed;top:10px;right:20px;gap:2px;">
<button id="copy">Copy source</button><br/>
<button id="close">Close</button>
</div>
<code><pre>${i}</pre></code>`,a&&(o.innerHTML+=`<br /><h1>Translated Source</h1><br /><br /><code><pre>${a}</pre></code>`),o.style.top=`0`,o.style.left=`0`,o.style.background=`white`,o.style.position=`fixed`,o.style.zIndex=`9999`,o.style.maxWidth=`100vw`,o.style.maxHeight=`100vh`,o.style.overflowY=`auto`,document.body.appendChild(o),o.querySelector(`.luma-compiler-log-error`)?.scrollIntoView(),o.querySelector(`button#close`).onclick=()=>{o.remove()},o.querySelector(`button#copy`).onclick=()=>{navigator.clipboard.writeText(this.source)}}static defaultProps={...B.defaultProps,language:`auto`,stage:void 0,source:``,sourceMap:null,entryPoint:`main`,debugShaders:void 0}};function zu(e){return Bu(e.source)||e.id||dl(`unnamed ${e.stage}-shader`)}function Bu(e,t=`unnamed`){return/#define[\s*]SHADER_NAME[\s*]([A-Za-z0-9_-]+)[\s*]/.exec(e)?.[1]??t}var Vu=class e extends B{get[Symbol.toStringTag](){return`RenderPipeline`}shaderLayout;bufferLayout;linkStatus=`pending`;hash=``;sharedRenderPipeline=null;get isPending(){return this.linkStatus===`pending`||this.vs.compilationStatus===`pending`||this.fs?.compilationStatus===`pending`}get isErrored(){return this.linkStatus===`error`||this.vs.compilationStatus===`error`||this.fs?.compilationStatus===`error`}constructor(t,n){super(t,n,e.defaultProps),this.shaderLayout=this.props.shaderLayout,this.bufferLayout=this.props.bufferLayout||[],this.sharedRenderPipeline=this.props._sharedRenderPipeline||null}static defaultProps={...B.defaultProps,vs:null,vertexEntryPoint:`vertexMain`,vsConstants:{},fs:null,fragmentEntryPoint:`fragmentMain`,fsConstants:{},shaderLayout:null,bufferLayout:[],topology:`triangle-list`,colorAttachmentFormats:void 0,depthStencilAttachmentFormat:void 0,parameters:{},varyings:void 0,bufferMode:void 0,disableWarnings:!1,_sharedRenderPipeline:void 0,bindings:void 0,bindGroups:void 0}},Hu=class e extends B{get[Symbol.toStringTag](){return`ComputePipeline`}hash=``;shaderLayout;constructor(t,n){super(t,n,e.defaultProps),this.shaderLayout=n.shaderLayout}static defaultProps={...B.defaultProps,shader:void 0,entryPoint:void 0,constants:{},shaderLayout:void 0}},Uu=class e{static defaultProps={...Vu.defaultProps};static getDefaultPipelineFactory(t){let n=t.getModuleData(`@luma.gl/core`);return n.defaultPipelineFactory||=new e(t),n.defaultPipelineFactory}device;_hashCounter=0;_hashes={};_renderPipelineCache={};_computePipelineCache={};_sharedRenderPipelineCache={};get[Symbol.toStringTag](){return`PipelineFactory`}toString(){return`PipelineFactory(${this.device.id})`}constructor(e){this.device=e}createRenderPipeline(e){if(!this.device.props._cachePipelines)return this.device.createRenderPipeline(e);let t={...Vu.defaultProps,...e},n=this._renderPipelineCache,r=this._hashRenderPipeline(t),i=n[r]?.resource;if(i)n[r].useCount++,this.device.props.debugFactories&&z.log(3,`${this}: ${n[r].resource} reused, count=${n[r].useCount}, (id=${e.id})`)();else{let e=this.device.type===`webgl`&&this.device.props._sharePipelines?this.createSharedRenderPipeline(t):void 0;i=this.device.createRenderPipeline({...t,id:t.id?`${t.id}-cached`:dl(`unnamed-cached`),_sharedRenderPipeline:e}),i.hash=r,n[r]={resource:i,useCount:1},this.device.props.debugFactories&&z.log(3,`${this}: ${i} created, count=${n[r].useCount}`)()}return i}createComputePipeline(e){if(!this.device.props._cachePipelines)return this.device.createComputePipeline(e);let t={...Hu.defaultProps,...e},n=this._computePipelineCache,r=this._hashComputePipeline(t),i=n[r]?.resource;return i?(n[r].useCount++,this.device.props.debugFactories&&z.log(3,`${this}: ${n[r].resource} reused, count=${n[r].useCount}, (id=${e.id})`)()):(i=this.device.createComputePipeline({...t,id:t.id?`${t.id}-cached`:void 0}),i.hash=r,n[r]={resource:i,useCount:1},this.device.props.debugFactories&&z.log(3,`${this}: ${i} created, count=${n[r].useCount}`)()),i}release(e){if(!this.device.props._cachePipelines){e.destroy();return}let t=this._getCache(e),n=e.hash;t[n].useCount--,t[n].useCount===0?(this._destroyPipeline(e),this.device.props.debugFactories&&z.log(3,`${this}: ${e} released and destroyed`)()):t[n].useCount<0?(z.error(`${this}: ${e} released, useCount < 0, resetting`)(),t[n].useCount=0):this.device.props.debugFactories&&z.log(3,`${this}: ${e} released, count=${t[n].useCount}`)()}createSharedRenderPipeline(e){let t=this._hashSharedRenderPipeline(e),n=this._sharedRenderPipelineCache[t];return n||(n={resource:this.device._createSharedRenderPipelineWebGL(e),useCount:0},this._sharedRenderPipelineCache[t]=n),n.useCount++,n.resource}releaseSharedRenderPipeline(e){if(!e.sharedRenderPipeline)return;let t=this._hashSharedRenderPipeline(e.sharedRenderPipeline.props),n=this._sharedRenderPipelineCache[t];n&&(n.useCount--,n.useCount===0&&(n.resource.destroy(),delete this._sharedRenderPipelineCache[t]))}_destroyPipeline(e){let t=this._getCache(e);return this.device.props._destroyPipelines?(delete t[e.hash],e.destroy(),e instanceof Vu&&this.releaseSharedRenderPipeline(e),!0):!1}_getCache(e){let t;if(e instanceof Hu&&(t=this._computePipelineCache),e instanceof Vu&&(t=this._renderPipelineCache),!t)throw Error(`${this}`);if(!t[e.hash])throw Error(`${this}: ${e} matched incorrect entry`);return t}_hashComputePipeline(e){let{type:t}=this.device;return`${t}/C/${this._getHash(e.shader.source)}SL${this._getHash(JSON.stringify(e.shaderLayout))}`}_hashRenderPipeline(e){let t=e.vs?this._getHash(e.vs.source):0,n=e.fs?this._getHash(e.fs.source):0,r=this._getWebGLVaryingHash(e),i=this._getHash(JSON.stringify(e.shaderLayout)),a=this._getHash(JSON.stringify(e.bufferLayout)),{type:o}=this.device;switch(o){case`webgl`:let s=this._getHash(JSON.stringify(e.parameters));return`${o}/R/${t}/${n}V${r}T${e.topology}P${s}SL${i}BL${a}`;default:let c=this._getHash(JSON.stringify({vertexEntryPoint:e.vertexEntryPoint,fragmentEntryPoint:e.fragmentEntryPoint})),l=this._getHash(JSON.stringify(e.parameters)),u=this._getWebGPUAttachmentHash(e);return`${o}/R/${t}/${n}V${r}T${e.topology}EP${c}P${l}SL${i}BL${a}A${u}`}}_hashSharedRenderPipeline(e){return`webgl/S/${e.vs?this._getHash(e.vs.source):0}/${e.fs?this._getHash(e.fs.source):0}V${this._getWebGLVaryingHash(e)}`}_getHash(e){return this._hashes[e]===void 0&&(this._hashes[e]=this._hashCounter++),this._hashes[e]}_getWebGLVaryingHash(e){let{varyings:t=[],bufferMode:n=null}=e;return this._getHash(JSON.stringify({varyings:t,bufferMode:n}))}_getWebGPUAttachmentHash(e){let t=e.colorAttachmentFormats??[this.device.preferredColorFormat],n=e.parameters?.depthWriteEnabled?e.depthStencilAttachmentFormat||this.device.preferredDepthFormat:null;return this._getHash(JSON.stringify({colorAttachmentFormats:t,depthStencilAttachmentFormat:n}))}},Wu=class e{static defaultProps={...Ru.defaultProps};static getDefaultShaderFactory(t){let n=t.getModuleData(`@luma.gl/core`);return n.defaultShaderFactory||=new e(t),n.defaultShaderFactory}device;_cache={};get[Symbol.toStringTag](){return`ShaderFactory`}toString(){return`${this[Symbol.toStringTag]}(${this.device.id})`}constructor(e){this.device=e}createShader(e){if(!this.device.props._cacheShaders)return this.device.createShader(e);let t=this._hashShader(e),n=this._cache[t];if(n)n.useCount++,this.device.props.debugFactories&&z.log(3,`${this}: Reusing shader ${n.resource.id} count=${n.useCount}`)();else{let r=this.device.createShader({...e,id:e.id?`${e.id}-cached`:void 0});this._cache[t]=n={resource:r,useCount:1},this.device.props.debugFactories&&z.log(3,`${this}: Created new shader ${r.id}`)()}return n.resource}release(e){if(!this.device.props._cacheShaders){e.destroy();return}let t=this._hashShader(e),n=this._cache[t];if(n){if(n.useCount--,n.useCount===0)this.device.props._destroyShaders&&(delete this._cache[t],n.resource.destroy(),this.device.props.debugFactories&&z.log(3,`${this}: Releasing shader ${e.id}, destroyed`)());else if(n.useCount<0)throw Error(`ShaderFactory: Shader ${e.id} released too many times`);else this.device.props.debugFactories&&z.log(3,`${this}: Releasing shader ${e.id} count=${n.useCount}`)()}}_hashShader(e){return`${e.stage}:${e.source}`}};function Gu(e,t,n){let r=e.bindings.find(e=>e.name===t||`${e.name.toLocaleLowerCase()}uniforms`===t.toLocaleLowerCase());return!r&&!n?.ignoreWarnings&&z.warn(`Binding ${t} not set: Not found in shader layout.`)(),r||null}function Ku(e,t){if(!t)return{};if(Ju(t))return Object.fromEntries(Object.entries(t).map(([e,t])=>[Number(e),{...t}]));let n={};for(let[r,i]of Object.entries(t)){let t=Gu(e,r)?.group??0;n[t]||={},n[t][r]=i}return n}function qu(e){let t={};for(let n of Object.values(e))Object.assign(t,n);return t}function Ju(e){let t=Object.keys(e);return t.length>0&&t.every(e=>/^\d+$/.test(e))}function Yu(e){let t=id[ed(e)];if(!t)throw Error(`Unsupported variable shader type: ${e}`);return t}function Xu(e){let t=rd[$u(e)];if(!t)throw Error(`Unsupported attribute shader type: ${e}`);let[n,r]=t,i=n===`i32`||n===`u32`,a=n!==`u32`;return{primitiveType:n,components:r,byteLength:nd[n]*r,integer:i,signed:a}}var Zu=class{getVariableShaderTypeInfo(e){return Yu(e)}getAttributeShaderTypeInfo(e){return Xu(e)}makeShaderAttributeType(e,t){return Qu(e,t)}resolveAttributeShaderTypeAlias(e){return $u(e)}resolveVariableShaderTypeAlias(e){return ed(e)}};function Qu(e,t){return t===1?e:`vec${t}<${e}>`}function $u(e){return ad[e]||e}function ed(e){return od[e]||e}var td=new Zu,nd={f32:4,f16:2,i32:4,u32:4},rd={f32:[`f32`,1],"vec2<f32>":[`f32`,2],"vec3<f32>":[`f32`,3],"vec4<f32>":[`f32`,4],f16:[`f16`,1],"vec2<f16>":[`f16`,2],"vec3<f16>":[`f16`,3],"vec4<f16>":[`f16`,4],i32:[`i32`,1],"vec2<i32>":[`i32`,2],"vec3<i32>":[`i32`,3],"vec4<i32>":[`i32`,4],u32:[`u32`,1],"vec2<u32>":[`u32`,2],"vec3<u32>":[`u32`,3],"vec4<u32>":[`u32`,4]},id={f32:{type:`f32`,components:1},f16:{type:`f16`,components:1},i32:{type:`i32`,components:1},u32:{type:`u32`,components:1},"vec2<f32>":{type:`f32`,components:2},"vec3<f32>":{type:`f32`,components:3},"vec4<f32>":{type:`f32`,components:4},"vec2<f16>":{type:`f16`,components:2},"vec3<f16>":{type:`f16`,components:3},"vec4<f16>":{type:`f16`,components:4},"vec2<i32>":{type:`i32`,components:2},"vec3<i32>":{type:`i32`,components:3},"vec4<i32>":{type:`i32`,components:4},"vec2<u32>":{type:`u32`,components:2},"vec3<u32>":{type:`u32`,components:3},"vec4<u32>":{type:`u32`,components:4},"mat2x2<f32>":{type:`f32`,components:4},"mat2x3<f32>":{type:`f32`,components:6},"mat2x4<f32>":{type:`f32`,components:8},"mat3x2<f32>":{type:`f32`,components:6},"mat3x3<f32>":{type:`f32`,components:9},"mat3x4<f32>":{type:`f32`,components:12},"mat4x2<f32>":{type:`f32`,components:8},"mat4x3<f32>":{type:`f32`,components:12},"mat4x4<f32>":{type:`f32`,components:16},"mat2x2<f16>":{type:`f16`,components:4},"mat2x3<f16>":{type:`f16`,components:6},"mat2x4<f16>":{type:`f16`,components:8},"mat3x2<f16>":{type:`f16`,components:6},"mat3x3<f16>":{type:`f16`,components:9},"mat3x4<f16>":{type:`f16`,components:12},"mat4x2<f16>":{type:`f16`,components:8},"mat4x3<f16>":{type:`f16`,components:12},"mat4x4<f16>":{type:`f16`,components:16},"mat2x2<i32>":{type:`i32`,components:4},"mat2x3<i32>":{type:`i32`,components:6},"mat2x4<i32>":{type:`i32`,components:8},"mat3x2<i32>":{type:`i32`,components:6},"mat3x3<i32>":{type:`i32`,components:9},"mat3x4<i32>":{type:`i32`,components:12},"mat4x2<i32>":{type:`i32`,components:8},"mat4x3<i32>":{type:`i32`,components:12},"mat4x4<i32>":{type:`i32`,components:16},"mat2x2<u32>":{type:`u32`,components:4},"mat2x3<u32>":{type:`u32`,components:6},"mat2x4<u32>":{type:`u32`,components:8},"mat3x2<u32>":{type:`u32`,components:6},"mat3x3<u32>":{type:`u32`,components:9},"mat3x4<u32>":{type:`u32`,components:12},"mat4x2<u32>":{type:`u32`,components:8},"mat4x3<u32>":{type:`u32`,components:12},"mat4x4<u32>":{type:`u32`,components:16}},ad={vec2i:`vec2<i32>`,vec3i:`vec3<i32>`,vec4i:`vec4<i32>`,vec2u:`vec2<u32>`,vec3u:`vec3<u32>`,vec4u:`vec4<u32>`,vec2f:`vec2<f32>`,vec3f:`vec3<f32>`,vec4f:`vec4<f32>`,vec2h:`vec2<f16>`,vec3h:`vec3<f16>`,vec4h:`vec4<f16>`},od={vec2i:`vec2<i32>`,vec3i:`vec3<i32>`,vec4i:`vec4<i32>`,vec2u:`vec2<u32>`,vec3u:`vec3<u32>`,vec4u:`vec4<u32>`,vec2f:`vec2<f32>`,vec3f:`vec3<f32>`,vec4f:`vec4<f32>`,vec2h:`vec2<f16>`,vec3h:`vec3<f16>`,vec4h:`vec4<f16>`,mat2x2f:`mat2x2<f32>`,mat2x3f:`mat2x3<f32>`,mat2x4f:`mat2x4<f32>`,mat3x2f:`mat3x2<f32>`,mat3x3f:`mat3x3<f32>`,mat3x4f:`mat3x4<f32>`,mat4x2f:`mat4x2<f32>`,mat4x3f:`mat4x3<f32>`,mat4x4f:`mat4x4<f32>`,mat2x2i:`mat2x2<i32>`,mat2x3i:`mat2x3<i32>`,mat2x4i:`mat2x4<i32>`,mat3x2i:`mat3x2<i32>`,mat3x3i:`mat3x3<i32>`,mat3x4i:`mat3x4<i32>`,mat4x2i:`mat4x2<i32>`,mat4x3i:`mat4x3<i32>`,mat4x4i:`mat4x4<i32>`,mat2x2u:`mat2x2<u32>`,mat2x3u:`mat2x3<u32>`,mat2x4u:`mat2x4<u32>`,mat3x2u:`mat3x2<u32>`,mat3x3u:`mat3x3<u32>`,mat3x4u:`mat3x4<u32>`,mat4x2u:`mat4x2<u32>`,mat4x3u:`mat4x3<u32>`,mat4x4u:`mat4x4<u32>`,mat2x2h:`mat2x2<f16>`,mat2x3h:`mat2x3<f16>`,mat2x4h:`mat2x4<f16>`,mat3x2h:`mat3x2<f16>`,mat3x3h:`mat3x3<f16>`,mat3x4h:`mat3x4<f16>`,mat4x2h:`mat4x2<f16>`,mat4x3h:`mat4x3<f16>`,mat4x4h:`mat4x4<f16>`};function sd(e,t){let n={};for(let r of e.attributes){let i=ld(e,t,r.name);i&&(n[r.name]=i)}return n}function cd(e,t,n=16){let r=sd(e,t),i=Array(n).fill(null);for(let e of Object.values(r))i[e.location]=e;return i}function ld(e,t,n){let r=ud(e,n),i=dd(t,n);if(!r)return null;let a=td.getAttributeShaderTypeInfo(r.type),o=Ml.getCompatibleVertexFormat(a),s=i?.vertexFormat||o,c=Ml.getVertexFormatInfo(s);return{attributeName:i?.attributeName||r.name,bufferName:i?.bufferName||r.name,location:r.location,shaderType:r.type,primitiveType:a.primitiveType,shaderComponents:a.components,vertexFormat:s,bufferDataType:c.type,bufferComponents:c.components,normalized:c.normalized,integer:a.integer,stepMode:i?.stepMode||r.stepMode||`vertex`,byteOffset:i?.byteOffset||0,byteStride:i?.byteStride||0}}function ud(e,t){let n=e.attributes.find(e=>e.name===t);return n||z.warn(`shader layout attribute "${t}" not present in shader`),n||null}function dd(e,t){fd(e);let n=pd(e,t);return n||(n=md(e,t),n)?n:(z.warn(`layout for attribute "${t}" not present in buffer layout`),null)}function fd(e){for(let t of e)(t.attributes&&t.format||!t.attributes&&!t.format)&&z.warn(`BufferLayout ${name} must have either 'attributes' or 'format' field`)}function pd(e,t){for(let n of e)if(n.format&&n.name===t)return{attributeName:n.name,bufferName:t,stepMode:n.stepMode,vertexFormat:n.format,byteOffset:0,byteStride:n.byteStride||0};return null}function md(e,t){for(let n of e){let e=n.byteStride;if(typeof n.byteStride!=`number`)for(let t of n.attributes||[]){let n=Ml.getVertexFormatInfo(t.format);e+=n.byteLength}let r=n.attributes?.find(e=>e.attribute===t);if(r)return{attributeName:r.attribute,bufferName:n.name,stepMode:n.stepMode,vertexFormat:r.format,byteOffset:r.byteOffset,byteStride:e}}return null}function hd(e,t){switch(t){case 1:return e;case 2:return e+e%2;default:return e+(4-e%4)%4}}function gd(e){let[,,,,t]=_d[e];return t}var _d={uint8:[`uint8`,`u32`,1,!1,Uint8Array],sint8:[`sint8`,`i32`,1,!1,Int8Array],unorm8:[`uint8`,`f32`,1,!0,Uint8Array],snorm8:[`sint8`,`f32`,1,!0,Int8Array],uint16:[`uint16`,`u32`,2,!1,Uint16Array],sint16:[`sint16`,`i32`,2,!1,Int16Array],unorm16:[`uint16`,`u32`,2,!0,Uint16Array],snorm16:[`sint16`,`i32`,2,!0,Int16Array],float16:[`float16`,`f16`,2,!1,Uint16Array],float32:[`float32`,`f32`,4,!1,Float32Array],uint32:[`uint32`,`u32`,4,!1,Uint32Array],sint32:[`sint32`,`i32`,4,!1,Int32Array]};function vd(e,t={}){let n={...e},r=t.layout??`std140`,i={},a=0;for(let[e,t]of Object.entries(n))a=xd(i,e,t,a,r);return a=hd(a,Cd(n,r)),{layout:r,byteLength:a*4,uniformTypes:n,fields:i}}function yd(e,t){let n=ed(e),r=Yu(n),i=/^mat(\d)x(\d)<.+>$/.exec(n);if(i){let e=Number(i[1]),a=Number(i[2]),o=wd(a,n,r.type,t),s=Dd(o.size,o.alignment,t);return{alignment:o.alignment,size:e*s,components:e*a,columns:e,rows:a,columnStride:s,shaderType:n,type:r.type}}let a=/^vec(\d)<.+>$/.exec(n);return a?wd(Number(a[1]),n,r.type,t):{alignment:1,size:1,components:1,columns:1,rows:1,columnStride:1,shaderType:n,type:r.type}}function bd(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function xd(e,t,n,r,i){if(typeof n==`string`){let a=yd(n,i),o=hd(r,a.alignment);return e[t]={offset:o,...a},o+a.size}if(Array.isArray(n)){if(Array.isArray(n[0]))throw Error(`Nested arrays are not supported for ${t}`);let a=n[0],o=n[1],s=Td(a,i),c=hd(r,Cd(n,i));for(let n=0;n<o;n++)xd(e,`${t}[${n}]`,a,c+n*s,i);return c+s*o}if(bd(n)){let a=Cd(n,i),o=hd(r,a);for(let[r,a]of Object.entries(n))o=xd(e,`${t}.${r}`,a,o,i);return hd(o,a)}throw Error(`Unsupported CompositeShaderType for ${t}`)}function Sd(e,t){if(typeof e==`string`)return yd(e,t).size;if(Array.isArray(e)){let n=e[0],r=e[1];if(Array.isArray(n))throw Error(`Nested arrays are not supported`);return Td(n,t)*r}let n=0;for(let r of Object.values(e)){let e=r;n=hd(n,Cd(e,t)),n+=Sd(e,t)}return hd(n,Cd(e,t))}function Cd(e,t){if(typeof e==`string`)return yd(e,t).alignment;if(Array.isArray(e)){let n=e[0],r=Cd(n,t);return Od(t)?Math.max(r,4):r}let n=1;for(let r of Object.values(e)){let e=Cd(r,t);n=Math.max(n,e)}return kd(t)?Math.max(n,4):n}function wd(e,t,n,r){return{alignment:e===2?2:4,size:e===3?3:e,components:e,columns:1,rows:e,columnStride:e===3?3:e,shaderType:t,type:n}}function Td(e,t){return Ed(Sd(e,t),Cd(e,t),t)}function Ed(e,t,n){return hd(e,Od(n)?4:t)}function Dd(e,t,n){return n===`std140`?4:hd(e,t)}function Od(e){return e===`std140`||e===`wgsl-uniform`}function kd(e){return e===`std140`||e===`wgsl-uniform`}var Ad;function jd(e){return(!Ad||Ad.byteLength<e)&&(Ad=new ArrayBuffer(e)),Ad}function Md(e,t){return new e(jd(e.BYTES_PER_ELEMENT*t),0,t)}function Nd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Pd(e){return Array.isArray(e)?e.length===0||typeof e[0]==`number`:Nd(e)}var Fd=class{layout;constructor(e){this.layout=e}has(e){return!!this.layout.fields[e]}get(e){let t=this.layout.fields[e];return t?{offset:t.offset,size:t.size}:void 0}getFlatUniformValues(e){let t={};for(let[n,r]of Object.entries(e)){let e=this.layout.uniformTypes[n];e?this._flattenCompositeValue(t,n,e,r):this.layout.fields[n]&&(t[n]=r)}return t}getData(e){let t=jd(this.layout.byteLength);new Uint8Array(t,0,this.layout.byteLength).fill(0);let n={i32:new Int32Array(t),u32:new Uint32Array(t),f32:new Float32Array(t),f16:new Uint16Array(t)},r=this.getFlatUniformValues(e);for(let[e,t]of Object.entries(r))this._writeLeafValue(n,e,t);return new Uint8Array(t,0,this.layout.byteLength)}_flattenCompositeValue(e,t,n,r){if(r!==void 0){if(typeof n==`string`||this.layout.fields[t])e[t]=r;else if(Array.isArray(n)){let i=n[0],a=n[1];if(Array.isArray(i))throw Error(`Nested arrays are not supported for ${t}`);if(typeof i==`string`&&Pd(r)){this._flattenPackedArray(e,t,i,a,r);return}if(!Array.isArray(r)){z.warn(`Unsupported uniform array value for ${t}:`,r)();return}for(let n=0;n<Math.min(r.length,a);n++){let a=r[n];a!==void 0&&this._flattenCompositeValue(e,`${t}[${n}]`,i,a)}}else if(bd(n)&&Id(r))for(let[i,a]of Object.entries(r)){if(a===void 0)continue;let r=`${t}.${i}`;this._flattenCompositeValue(e,r,n[i],a)}else z.warn(`Unsupported uniform value for ${t}:`,r)()}}_flattenPackedArray(e,t,n,r,i){let a=i,o=yd(n,this.layout.layout).components;for(let n=0;n<r;n++){let r=n*o;if(r>=a.length)break;o===1?e[`${t}[${n}]`]=Number(a[r]):e[`${t}[${n}]`]=Ld(i,r,r+o)}}_writeLeafValue(e,t,n){let r=this.layout.fields[t];if(!r){z.warn(`Uniform ${t} not found in layout`)();return}let{type:i,components:a,columns:o,rows:s,offset:c,columnStride:l}=r,u=e[i];if(a===1){u[c]=Number(n);return}let d=n;if(o===1){for(let e=0;e<a;e++)u[c+e]=Number(d[e]??0);return}let f=0;for(let e=0;e<o;e++){let t=c+e*l;for(let e=0;e<s;e++)u[t+e]=Number(d[f++]??0)}}};function Id(e){return!!e&&typeof e==`object`&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function Ld(e,t,n){return Array.prototype.slice.call(e,t,n)}var Rd=128;function zd(e,t,n=16){if(e===t)return!0;let r=e,i=t;if(!Pd(r)||!Pd(i)||r.length!==i.length)return!1;let a=Math.min(n,Rd);if(r.length>a)return!1;for(let e=0;e<r.length;++e)if(i[e]!==r[e])return!1;return!0}function Bd(e){return Pd(e)?e.slice():e}var Vd=class{name;uniforms={};modifiedUniforms={};modified=!0;bindingLayout={};needsRedraw=`initialized`;constructor(e){if(this.name=e?.name||`unnamed`,e?.name&&e?.shaderLayout){let t=e?.shaderLayout.bindings?.find(t=>t.type===`uniform`&&t.name===e?.name);if(!t)throw Error(e?.name);let n=t;for(let e of n.uniforms||[])this.bindingLayout[e.name]=e}}setUniforms(e){for(let[t,n]of Object.entries(e))this._setUniform(t,n),this.needsRedraw||this.setNeedsRedraw(`${this.name}.${t}=${n}`)}setNeedsRedraw(e){this.needsRedraw=this.needsRedraw||e}getAllUniforms(){return this.modifiedUniforms={},this.needsRedraw=!1,this.uniforms||{}}_setUniform(e,t){zd(this.uniforms[e],t)||(this.uniforms[e]=Bd(t),this.modifiedUniforms[e]=!0,this.modified=!0)}},Hd=1024,G=class{device;uniformBlocks=new Map;shaderBlockLayouts=new Map;shaderBlockWriters=new Map;uniformBuffers=new Map;constructor(e,t){this.device=e;for(let[n,r]of Object.entries(t)){let t=n,i=vd(r.uniformTypes??{},{layout:r.layout??Ud(e)}),a=new Fd(i);this.shaderBlockLayouts.set(t,i),this.shaderBlockWriters.set(t,a);let o=new Vd({name:n});o.setUniforms(a.getFlatUniformValues(r.defaultUniforms||{})),this.uniformBlocks.set(t,o)}}destroy(){for(let e of this.uniformBuffers.values())e.destroy()}setUniforms(e){for(let[t,n]of Object.entries(e)){let e=t,r=this.shaderBlockWriters.get(e)?.getFlatUniformValues(n||{});this.uniformBlocks.get(e)?.setUniforms(r||{})}this.updateUniformBuffers()}getUniformBufferByteLength(e){let t=this.shaderBlockLayouts.get(e)?.byteLength||0;return Math.max(t,Hd)}getUniformBufferData(e){let t=this.uniformBlocks.get(e)?.getAllUniforms()||{};return this.shaderBlockWriters.get(e)?.getData(t)||new Uint8Array}createUniformBuffer(e,t){t&&this.setUniforms(t);let n=this.getUniformBufferByteLength(e),r=this.device.createBuffer({usage:V.UNIFORM|V.COPY_DST,byteLength:n}),i=this.getUniformBufferData(e);return r.write(i),r}getManagedUniformBuffer(e){if(!this.uniformBuffers.get(e)){let t=this.getUniformBufferByteLength(e),n=this.device.createBuffer({usage:V.UNIFORM|V.COPY_DST,byteLength:t});this.uniformBuffers.set(e,n)}return this.uniformBuffers.get(e)}updateUniformBuffers(){let e=!1;for(let t of this.uniformBlocks.keys()){let n=this.updateUniformBuffer(t);e||=n}return e&&z.log(3,`UniformStore.updateUniformBuffers(): ${e}`)(),e}updateUniformBuffer(e){let t=this.uniformBlocks.get(e),n=this.uniformBuffers.get(e),r=!1;if(n&&t?.needsRedraw){r||=t.needsRedraw;let i=this.getUniformBufferData(e);n=this.uniformBuffers.get(e),n?.write(i);let a=this.uniformBlocks.get(e)?.getAllUniforms();z.log(4,`Writing to uniform buffer ${String(e)}`,i,a)()}return r}};function Ud(e){return e.type===`webgpu`?`wgsl-uniform`:`std140`}function Wd(e,t){if(!e){let e=Error(t||`shadertools: assertion failed.`);throw Error.captureStackTrace?.(e,Wd),e}}var Gd={number:{type:`number`,validate(e,t){return Number.isFinite(e)&&typeof t==`object`&&(t.max===void 0||e<=t.max)&&(t.min===void 0||e>=t.min)}},array:{type:`array`,validate(e,t){return Array.isArray(e)||ArrayBuffer.isView(e)}}};function Kd(e){let t={};for(let[n,r]of Object.entries(e))t[n]=qd(r);return t}function qd(e){let t=Jd(e);if(t!==`object`)return{value:e,...Gd[t],type:t};if(typeof e==`object`)return e?e.type===void 0?e.value===void 0?{type:`object`,value:e}:(t=Jd(e.value),{...e,...Gd[t],type:t}):{...e,...Gd[e.type],type:e.type}:{type:`object`,value:null};throw Error(`props`)}function Jd(e){return Array.isArray(e)||ArrayBuffer.isView(e)?`array`:typeof e}var Yd={vertex:`#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,fragment:`#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`},Xd=/void\s+main\s*\([^)]*\)\s*\{\n?/,Zd=/}\n?[^{}]*$/,Qd=[],$d=`__LUMA_INJECT_DECLARATIONS__`;function ef(e){let t={vertex:{},fragment:{}};for(let n in e){let r=e[n],i=tf(n);typeof r==`string`&&(r={order:0,injection:r}),t[i][n]=r}return t}function tf(e){let t=e.slice(0,2);switch(t){case`vs`:return`vertex`;case`fs`:return`fragment`;default:throw Error(t)}}function nf(e,t,n,r=!1){let i=t===`vertex`;for(let t in n){let r=n[t];r.sort((e,t)=>e.order-t.order),Qd.length=r.length;for(let e=0,t=r.length;e<t;++e)Qd[e]=r[e].injection;let a=`${Qd.join(`
`)}\n`;switch(t){case`vs:#decl`:i&&(e=e.replace($d,a));break;case`vs:#main-start`:i&&(e=e.replace(Xd,e=>e+a));break;case`vs:#main-end`:i&&(e=e.replace(Zd,e=>a+e));break;case`fs:#decl`:i||(e=e.replace($d,a));break;case`fs:#main-start`:i||(e=e.replace(Xd,e=>e+a));break;case`fs:#main-end`:i||(e=e.replace(Zd,e=>a+e));break;default:e=e.replace(t,e=>e+a)}}return e=e.replace($d,``),r&&(e=e.replace(/\}\s*$/,e=>e+Yd[t])),e}function rf(e){e.map(e=>af(e))}function af(e){if(e.instance)return;rf(e.dependencies||[]);let{propTypes:t={},deprecations:n=[],inject:r={}}=e,i={normalizedInjections:ef(r),parsedDeprecations:sf(n)};t&&(i.propValidators=Kd(t)),e.instance=i;let a={};t&&(a=Object.entries(t).reduce((e,[t,n])=>{let r=n?.value;return r&&(e[t]=r),e},{})),e.defaultUniforms={...e.defaultUniforms,...a}}function of(e,t,n){e.deprecations?.forEach(e=>{e.regex?.test(t)&&(e.deprecated?n.deprecated(e.old,e.new)():n.removed(e.old,e.new)())})}function sf(e){return e.forEach(e=>{switch(e.type){case`function`:e.regex=RegExp(`\\b${e.old}\\(`);break;default:e.regex=RegExp(`${e.type} ${e.old};`)}}),e}function cf(e){rf(e);let t={},n={};lf({modules:e,level:0,moduleMap:t,moduleDepth:n});let r=Object.keys(n).sort((e,t)=>n[t]-n[e]).map(e=>t[e]);return rf(r),r}function lf(e){let{modules:t,level:n,moduleMap:r,moduleDepth:i}=e;if(n>=5)throw Error(`Possible loop in shader dependency graph`);for(let e of t)r[e.name]=e,(i[e.name]===void 0||i[e.name]<n)&&(i[e.name]=n);for(let e of t)e.dependencies&&lf({modules:e.dependencies,level:n+1,moduleMap:r,moduleDepth:i})}var uf=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,df=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function ff(e){return`${e.name}Uniforms`}function pf(e,t){let n=t===`wgsl`?e.source:t===`vertex`?e.vs:e.fs;if(!n)return null;let r=ff(e);return vf(n,t===`wgsl`?`wgsl`:`glsl`,r)}function mf(e,t){let n=Object.keys(e.uniformTypes||{});if(!n.length)return null;let r=pf(e,t);return r?{moduleName:e.name,uniformBlockName:ff(e),stage:t,expectedUniformNames:n,actualUniformNames:r,matches:xf(n,r)}:null}function hf(e,t,n={}){let r=mf(e,t);if(!r||r.matches)return r;let i=Sf(r);return n.log?.error?.(i,r)(),n.throwOnError!==!1&&Wd(!1,i),r}function gf(e){let t=[],n=Cf(e);for(let e of n.matchAll(df)){let n=e[1]?.trim()||null;t.push({blockName:e[2],body:e[3],instanceName:e[4]||null,layoutQualifier:n,hasLayoutQualifier:!!n,isStd140:!!(n&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(n))})}return t}function _f(e,t,n,r){let i=gf(e).filter(e=>!e.isStd140),a=new Set;for(let e of i){if(a.has(e.blockName))continue;a.add(e.blockName);let i=r?.label?`${r.label} `:``,o=e.hasLayoutQualifier?`declares ${wf(e.layoutQualifier)} instead of layout(std140)`:`does not declare layout(std140)`,s=`${i}${t} shader uniform block ${e.blockName} ${o}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;n?.warn?.(s,e)()}return i}function vf(e,t,n){let r=t===`wgsl`?yf(e,n):bf(e,n);if(!r)return null;let i=[];for(let e of r.split(`
`)){let n=e.replace(/\/\/.*$/,``).trim();if(!n||n.startsWith(`#`))continue;let r=t===`wgsl`?n.match(/^([A-Za-z0-9_]+)\s*:/):n.match(uf);r&&i.push(r[1])}return i}function yf(e,t){let n=RegExp(`\\bstruct\\s+${t}\\b`,`m`).exec(e);if(!n)return null;let r=e.indexOf(`{`,n.index);if(r<0)return null;let i=0;for(let t=r;t<e.length;t++){let n=e[t];if(n===`{`)i++;else if(n===`}`&&(i--,i===0))return e.slice(r+1,t)}return null}function bf(e,t){return gf(e).find(e=>e.blockName===t)?.body||null}function xf(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Sf(e){let{expectedUniformNames:t,actualUniformNames:n}=e,r=t.filter(e=>!n.includes(e)),i=n.filter(e=>!t.includes(e)),a=[`Expected ${t.length} fields, found ${n.length}.`],o=Tf(t,n);return o&&a.push(o),r.length&&a.push(`Missing from shader block (${r.length}): ${Ef(r)}.`),i.length&&a.push(`Unexpected in shader block (${i.length}): ${Ef(i)}.`),t.length<=12&&n.length<=12&&(r.length||i.length)&&(a.push(`Expected: ${t.join(`, `)}.`),a.push(`Actual: ${n.join(`, `)}.`)),`${e.moduleName}: ${e.stage} shader uniform block ${e.uniformBlockName} does not match module.uniformTypes. ${a.join(` `)}`}function Cf(e){return e.replace(/\/\*[\s\S]*?\*\//g,``).replace(/\/\/.*$/gm,``)}function wf(e){return e.replace(/\s+/g,` `).trim()}function Tf(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return`First mismatch at field ${r+1}: expected ${e[r]}, found ${t[r]}.`;return e.length>t.length?`Shader block ends after field ${t.length}; expected next field ${e[t.length]}.`:t.length>e.length?`Shader block has extra field ${t.length}: ${t[e.length]}.`:null}function Ef(e,t=8){if(e.length<=t)return e.join(`, `);let n=e.length-t;return`${e.slice(0,t).join(`, `)}, ... (${n} more)`}function Df(e){switch(e?.gpu.toLowerCase()){case`apple`:return`#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case`nvidia`:return`#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case`intel`:return`#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case`amd`:return`#define AMD_GPU
`;default:return`#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}function Of(e,t){if(Number(e.match(/^#version[ \t]+(\d+)/m)?.[1]||100)!==300)throw Error(`luma.gl v9 only supports GLSL 3.00 shader sources`);switch(t){case`vertex`:return e=Mf(e,Af),e;case`fragment`:return e=Mf(e,jf),e;default:throw Error(t)}}var kf=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,`#version 300 es
`],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,`textureLod(`],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,`texture(`]],Af=[...kf,[Nf(`attribute`),`in $1`],[Nf(`varying`),`out $1`]],jf=[...kf,[Nf(`varying`),`in $1`]];function Mf(e,t){for(let[n,r]of t)e=e.replace(n,r);return e}function Nf(e){return RegExp(`\\b${e}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,`g`)}function Pf(e,t){let n=``;for(let r in e){let i=e[r];if(n+=`void ${i.signature} {\n`,i.header&&(n+=`  ${i.header}`),t[r]){let e=t[r];e.sort((e,t)=>e.order-t.order);for(let t of e)n+=`  ${t.injection}\n`}i.footer&&(n+=`  ${i.footer}`),n+=`}
`}return n}function Ff(e){let t={vertex:{},fragment:{}};for(let n of e){let e,r;typeof n==`string`?(e={},r=n):(e=n,r=e.hook),r=r.trim();let[i,a]=r.split(`:`),o=r.replace(/\(.+/,``),s=Object.assign(e,{signature:a});switch(i){case`vs`:t.vertex[o]=s;break;case`fs`:t.fragment[o]=s;break;default:throw Error(i)}}return t}function If(e,t){return{name:Lf(e,t),language:`glsl`,version:Rf(e)}}function Lf(e,t=`unnamed`){let n=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(e);return n?n[1]:t}function Rf(e){let t=100,n=e.match(/[^\s]+/g);if(n&&n.length>=2&&n[0]===`#version`){let e=parseInt(n[1],10);Number.isFinite(e)&&(t=e)}if(t!==100&&t!==300)throw Error(`Invalid GLSL version ${t}`);return t}var zf=`(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)`,Bf=`\\s*`,Vf=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${Bf}@group\\(\\s*(\\d+)\\s*\\)${Bf}${zf}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${Bf}@binding\\(\\s*(auto|\\d+)\\s*\\)${Bf}${zf}`,`g`)],Hf=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${Bf}@group\\(\\s*(\\d+)\\s*\\)${Bf}${zf}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${Bf}@binding\\(\\s*(auto|\\d+)\\s*\\)${Bf}${zf}`,`g`)],Uf=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)${Bf}@group\\(\\s*(\\d+)\\s*\\)${Bf}${zf}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${Bf}@binding\\(\\s*(\\d+)\\s*\\)${Bf}${zf}`,`g`)],Wf=[RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${zf}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${zf}`,`g`),RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${zf}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${zf}`,`g`)];function Gf(e){let t=e.split(``),n=0,r=0,i=!1,a=!1,o=!1;for(;n<e.length;){let s=e[n],c=e[n+1];if(a)o?o=!1:s===`\\`?o=!0:s===`"`&&(a=!1),n++;else if(i)s===`
`||s===`\r`?i=!1:t[n]=` `,n++;else if(r>0){if(s===`/`&&c===`*`){t[n]=` `,t[n+1]=` `,r++,n+=2;continue}if(s===`*`&&c===`/`){t[n]=` `,t[n+1]=` `,r--,n+=2;continue}s!==`
`&&s!==`\r`&&(t[n]=` `),n++}else s===`"`?(a=!0,n++):s===`/`&&c===`/`?(t[n]=` `,t[n+1]=` `,i=!0,n+=2):s===`/`&&c===`*`?(t[n]=` `,t[n+1]=` `,r=1,n+=2):n++}return t.join(``)}function Kf(e,t){let n=Gf(e),r=[];for(let i of t){i.lastIndex=0;let a;for(a=i.exec(n);a;){let o=i===t[0],s=a.index,c=a[0].length;r.push({match:e.slice(s,s+c),index:s,length:c,bindingToken:a[o?1:2],groupToken:a[o?2:1],accessDeclaration:a[3]?.trim(),name:a[4]}),a=i.exec(n)}}return r.sort((e,t)=>e.index-t.index)}function qf(e,t,n){let r=Kf(e,t);if(!r.length)return e;let i=``,a=0;for(let t of r)i+=e.slice(a,t.index),i+=n(t),a=t.index+t.length;return i+=e.slice(a),i}function Jf(e){return/@binding\(\s*auto\s*\)/.test(Gf(e))}function Yf(e,t){return Kf(e,t===Vf||t===Hf?Wf:t).find(e=>e.bindingToken===`auto`)}var Xf=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${zf}\\s*:\\s*([^;]+);`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${zf}\\s*:\\s*([^;]+);`,`g`)];function Zf(e,t=[]){let n=Gf(e),r=new Map;for(let e of t)r.set($f(e.name,e.group,e.location),e.moduleName);let i=[];for(let e of Xf){e.lastIndex=0;let t;for(t=e.exec(n);t;){let a=e===Xf[0],o=Number(t[a?1:2]),s=Number(t[a?2:1]),c=t[3]?.trim(),l=t[4],u=t[5].trim(),d=r.get($f(l,s,o));i.push(Qf({name:l,group:s,binding:o,owner:d?`module`:`application`,moduleName:d,accessDeclaration:c,resourceType:u})),t=e.exec(n)}}return i.sort((e,t)=>e.group===t.group?e.binding===t.binding?e.name.localeCompare(t.name):e.binding-t.binding:e.group-t.group)}function Qf(e){let t={name:e.name,group:e.group,binding:e.binding,owner:e.owner,kind:`unknown`,moduleName:e.moduleName,resourceType:e.resourceType};if(e.accessDeclaration){let n=e.accessDeclaration.split(`,`).map(e=>e.trim());if(n[0]===`uniform`)return{...t,kind:`uniform`,access:`uniform`};if(n[0]===`storage`){let e=n[1]||`read_write`;return{...t,kind:e===`read`?`read-only-storage`:`storage`,access:e}}}return e.resourceType===`sampler`||e.resourceType===`sampler_comparison`?{...t,kind:`sampler`,samplerKind:e.resourceType===`sampler_comparison`?`comparison`:`filtering`}:e.resourceType.startsWith(`texture_storage_`)?{...t,kind:`storage-texture`,access:np(e.resourceType),viewDimension:ep(e.resourceType)}:e.resourceType.startsWith(`texture_`)?{...t,kind:`texture`,viewDimension:ep(e.resourceType),sampleType:tp(e.resourceType),multisampled:e.resourceType.startsWith(`texture_multisampled_`)}:t}function $f(e,t,n){return`${t}:${n}:${e}`}function ep(e){if(e.includes(`cube_array`))return`cube-array`;if(e.includes(`2d_array`))return`2d-array`;if(e.includes(`cube`))return`cube`;if(e.includes(`3d`))return`3d`;if(e.includes(`2d`))return`2d`;if(e.includes(`1d`))return`1d`}function tp(e){if(e.startsWith(`texture_depth_`))return`depth`;if(e.includes(`<i32>`))return`sint`;if(e.includes(`<u32>`))return`uint`;if(e.includes(`<f32>`))return`float`}function np(e){return/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(e)?.[1]}var rp=`\n\n${$d}\n`,ip=100,ap=`precision highp float;
`;function op(e){let t=cf(e.modules||[]),{source:n,bindingAssignments:r}=cp(e.platformInfo,{...e,source:e.source,stage:`vertex`,modules:t});return{source:n,getUniforms:up(t),bindingAssignments:r,bindingTable:Zf(n,r)}}function sp(e){let{vs:t,fs:n}=e,r=cf(e.modules||[]);return{vs:lp(e.platformInfo,{...e,source:t,stage:`vertex`,modules:r}),fs:lp(e.platformInfo,{...e,source:n,stage:`fragment`,modules:r}),getUniforms:up(r)}}function cp(e,t){let{source:n,stage:r,modules:i,hookFunctions:a=[],inject:o={},log:s}=t;Wd(typeof n==`string`,`shader source must be a string`);let c=n,l=``,u=Ff(a),d={},f={},p={};for(let e in o){let t=typeof o[e]==`string`?{injection:o[e],order:0}:o[e],n=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(n){let r=n[2],i=n[3];r?i===`decl`?f[e]=[t]:p[e]=[t]:d[e]=[t]}else p[e]=[t]}let m=i,h=mp(c),g=pp(h.source),_=vp(m,t._bindingRegistry,g),v=[];for(let e of m){s&&of(e,c,s);let n=hp(fp(e,`wgsl`,s),e,{usedBindingsByGroup:g,bindingRegistry:t._bindingRegistry,reservedBindingKeysByGroup:_});v.push(...n.bindingAssignments);let i=n.source;l+=i;let a=e.injections?.[r]||{};for(let e in a){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let n=t[2]===`decl`?f:p;n[e]=n[e]||[],n[e].push(a[e])}else d[e]=d[e]||[],d[e].push(a[e])}}return l+=rp,l=nf(l,r,f),l+=Pf(u[r],d),l+=Dp(v),l+=h.source,l=nf(l,r,p),Ep(l),{source:l,bindingAssignments:v}}function lp(e,t){let{source:n,stage:r,language:i=`glsl`,modules:a,defines:o={},hookFunctions:s=[],inject:c={},prologue:l=!0,log:u}=t;Wd(typeof n==`string`,`shader source must be a string`);let d=i===`glsl`?If(n).version:-1,f=e.shaderLanguageVersion,p=d===100?`#version 100`:`#version 300 es`,m=n.split(`
`).slice(1).join(`
`),h={};a.forEach(e=>{Object.assign(h,e.defines)}),Object.assign(h,o);let g=``;switch(i){case`wgsl`:break;case`glsl`:g=l?`\
${p}

// ----- PROLOGUE -------------------------
${`#define SHADER_TYPE_${r.toUpperCase()}`}

${Df(e)}
${r===`fragment`?ap:``}

// ----- APPLICATION DEFINES -------------------------

${dp(h)}

`:`${p}
`}let _=Ff(s),v={},y={},b={};for(let e in c){let t=typeof c[e]==`string`?{injection:c[e],order:0}:c[e],n=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(n){let r=n[2],i=n[3];r?i===`decl`?y[e]=[t]:b[e]=[t]:v[e]=[t]}else b[e]=[t]}for(let e of a){u&&of(e,m,u);let t=fp(e,r,u);g+=t;let n=e.instance?.normalizedInjections[r]||{};for(let e in n){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let r=t[2]===`decl`?y:b;r[e]=r[e]||[],r[e].push(n[e])}else v[e]=v[e]||[],v[e].push(n[e])}}return g+=`// ----- MAIN SHADER SOURCE -------------------------`,g+=rp,g=nf(g,r,y),g+=Pf(_[r],v),g+=m,g=nf(g,r,b),i===`glsl`&&d!==f&&(g=Of(g,r)),i===`glsl`&&_f(g,r,u),g.trim()}function up(e){return function(t){let n={};for(let r of e){let e=r.getUniforms?.(t,n);Object.assign(n,e)}return n}}function dp(e={}){let t=``;for(let n in e){let r=e[n];(r||Number.isFinite(r))&&(t+=`#define ${n.toUpperCase()} ${e[n]}\n`)}return t}function fp(e,t,n){let r;switch(t){case`vertex`:r=e.vs||``;break;case`fragment`:r=e.fs||``;break;case`wgsl`:r=e.source||``;break;default:Wd(!1)}if(!e.name)throw Error(`Shader module must have a name`);hf(e,t,{log:n});let i=e.name.toUpperCase().replace(/[^0-9a-z]/gi,`_`),a=`\
// ----- MODULE ${e.name} ---------------

`;return t!==`wgsl`&&(a+=`#define MODULE_${i}\n`),a+=`${r}\n`,a}function pp(e){let t=new Map;for(let n of Kf(e,Uf)){let e=Number(n.bindingToken),r=Number(n.groupToken);xp(r,e,n.name),Cp(t,r,e,`application binding "${n.name}"`)}return t}function mp(e){let t=Kf(e,Hf),n=new Map;for(let e of t){if(e.bindingToken===`auto`)continue;let t=Number(e.bindingToken),r=Number(e.groupToken);xp(r,t,e.name),Cp(n,r,t,`application binding "${e.name}"`)}let r={sawSupportedBindingDeclaration:t.length>0},i=qf(e,Hf,e=>_p(e,n,r));if(Jf(e)&&!r.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:i}}function hp(e,t,n){let r=[],i={sawSupportedBindingDeclaration:Kf(e,Vf).length>0,nextHintedBindingLocation:typeof t.firstBindingSlot==`number`?t.firstBindingSlot:null},a=qf(e,Vf,e=>gp(e,{module:t,context:n,bindingAssignments:r,relocationState:i}));if(Jf(e)&&!i.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in module "${t.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:a,bindingAssignments:r}}function gp(e,t){let{module:n,context:r,bindingAssignments:i,relocationState:a}=t,{match:o,bindingToken:s,groupToken:c,name:l}=e,u=Number(c);if(s===`auto`){let e=Op(u,n.name,l),t=r.bindingRegistry?.get(e),s=t===void 0?a.nextHintedBindingLocation===null?wp(u,r.usedBindingsByGroup):wp(u,r.usedBindingsByGroup,a.nextHintedBindingLocation):t;return Sp(n.name,u,s,l),t!==void 0&&yp(r.reservedBindingKeysByGroup,u,s,e)?(i.push({moduleName:n.name,name:l,group:u,location:s}),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${s})`)):(Cp(r.usedBindingsByGroup,u,s,`module "${n.name}" binding "${l}"`),r.bindingRegistry?.set(e,s),i.push({moduleName:n.name,name:l,group:u,location:s}),a.nextHintedBindingLocation!==null&&t===void 0&&(a.nextHintedBindingLocation=s+1),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${s})`))}let d=Number(s);return Sp(n.name,u,d,l),Cp(r.usedBindingsByGroup,u,d,`module "${n.name}" binding "${l}"`),i.push({moduleName:n.name,name:l,group:u,location:d}),o}function _p(e,t,n){let{match:r,bindingToken:i,groupToken:a,name:o}=e,s=Number(a);if(i===`auto`){let e=Tp(s,t);return xp(s,e,o),Cp(t,s,e,`application binding "${o}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${e})`)}return n.sawSupportedBindingDeclaration=!0,r}function vp(e,t,n){let r=new Map;if(!t)return r;for(let i of e)for(let e of bp(i)){let a=Op(e.group,i.name,e.name),o=t.get(a);if(o!==void 0){let t=r.get(e.group)||new Map,i=t.get(o);if(i&&i!==a)throw Error(`Duplicate WGSL binding reservation for modules "${i}" and "${a}": group ${e.group}, binding ${o}.`);Cp(n,e.group,o,`registered module binding "${a}"`),t.set(o,a),r.set(e.group,t)}}return r}function yp(e,t,n,r){let i=e.get(t);if(!i)return!1;let a=i.get(n);if(!a)return!1;if(a!==r)throw Error(`Registered module binding "${r}" collided with "${a}": group ${t}, binding ${n}.`);return!0}function bp(e){let t=[],n=e.source||``;for(let e of Kf(n,Vf))t.push({name:e.name,group:Number(e.groupToken)});return t}function xp(e,t,n){if(e===0&&t>=ip)throw Error(`Application binding "${n}" in group 0 uses reserved binding ${t}. Application-owned explicit group-0 bindings must stay below ${ip}.`)}function Sp(e,t,n,r){if(t===0&&n<ip)throw Error(`Module "${e}" binding "${r}" in group 0 uses reserved application binding ${n}. Module-owned explicit group-0 bindings must be ${ip} or higher.`)}function Cp(e,t,n,r){let i=e.get(t)||new Set;if(i.has(n))throw Error(`Duplicate WGSL binding assignment for ${r}: group ${t}, binding ${n}.`);i.add(n),e.set(t,i)}function wp(e,t,n){let r=t.get(e)||new Set,i=n??(e===0?ip:r.size>0?Math.max(...r)+1:0);for(;r.has(i);)i++;return i}function Tp(e,t){let n=t.get(e)||new Set,r=0;for(;n.has(r);)r++;return r}function Ep(e){let t=Yf(e,Vf);if(!t)return;let n=kp(e,t.index);throw n?Error(`Unresolved @binding(auto) for module "${n}" binding "${t.name}" remained in assembled WGSL source.`):Ap(e,t.index)?Error(`Unresolved @binding(auto) for application binding "${t.name}" remained in assembled WGSL source.`):Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${jp(t.match)}".`)}function Dp(e){if(e.length===0)return``;let t=`// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------
`;for(let n of e)t+=`// ${n.moduleName}.${n.name} -> @group(${n.group}) @binding(${n.location})\n`;return t+=`
`,t}function Op(e,t,n){return`${e}:${t}:${n}`}function kp(e,t){let n=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm,r,i;for(i=n.exec(e);i&&i.index<=t;)r=i[1],i=n.exec(e);return r}function Ap(e,t){let n=e.indexOf(rp);return n>=0?t>n:!0}function jp(e){return e.replace(/\s+/g,` `).trim()}var Mp=`([a-zA-Z_][a-zA-Z0-9_]*)`,Np=RegExp(`^\\s*\\#\\s*ifdef\\s*${Mp}\\s*$`),Pp=RegExp(`^\\s*\\#\\s*ifndef\\s*${Mp}\\s*(?:\\/\\/.*)?$`),Fp=/^\s*\#\s*else\s*(?:\/\/.*)?$/,Ip=/^\s*\#\s*endif\s*$/,Lp=RegExp(`^\\s*\\#\\s*ifdef\\s*${Mp}\\s*(?:\\/\\/.*)?$`),Rp=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;function zp(e,t){let n=e.split(`
`),r=[],i=[],a=!0;for(let e of n){let n=e.match(Lp)||e.match(Np),o=e.match(Pp),s=e.match(Fp),c=e.match(Rp)||e.match(Ip);if(n||o){let e=(n||o)?.[1],r=!!t?.defines?.[e],s=n?r:!r,c=a&&s;i.push({parentActive:a,branchTaken:s,active:c}),a=c}else if(s){let e=i[i.length-1];if(!e)throw Error(`Encountered #else without matching #ifdef or #ifndef`);e.active=e.parentActive&&!e.branchTaken,e.branchTaken=!0,a=e.active}else c?(i.pop(),a=!i.length||i[i.length-1].active):a&&r.push(e)}if(i.length>0)throw Error(`Unterminated conditional block in shader source`);return r.join(`
`)}var Bp=class e{static defaultShaderAssembler;_hookFunctions=[];_defaultModules=[];_wgslBindingRegistry=new Map;static getDefaultShaderAssembler(){return e.defaultShaderAssembler=e.defaultShaderAssembler||new e,e.defaultShaderAssembler}addDefaultModule(e){this._defaultModules.find(t=>t.name===(typeof e==`string`?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){let t=typeof e==`string`?e:e.name;this._defaultModules=this._defaultModules.filter(e=>e.name!==t)}addShaderHook(e,t){t&&(e=Object.assign(t,{hook:e})),this._hookFunctions.push(e)}assembleWGSLShader(e){let t=this._getModuleList(e.modules),n=this._hookFunctions,{source:r,getUniforms:i,bindingAssignments:a}=op({...e,source:e.source,_bindingRegistry:this._wgslBindingRegistry,modules:t,hookFunctions:n}),o={...t.reduce((e,t)=>(Object.assign(e,t.defines),e),{}),...e.defines},s=e.platformInfo.shaderLanguage===`wgsl`?zp(r,{defines:o}):r;return{source:s,getUniforms:i,modules:t,bindingAssignments:a,bindingTable:Zf(s,a)}}assembleGLSLShaderPair(e){let t=this._getModuleList(e.modules),n=this._hookFunctions;return{...sp({...e,vs:e.vs,fs:e.fs,modules:t,hookFunctions:n}),modules:t}}_getModuleList(e=[]){let t=Array(this._defaultModules.length+e.length),n={},r=0;for(let e=0,i=this._defaultModules.length;e<i;++e){let i=this._defaultModules[e],a=i.name;t[r++]=i,n[a]=!0}for(let i=0,a=e.length;i<a;++i){let a=e[i],o=a.name;n[o]||(t[r++]=a,n[o]=!0)}return t.length=r,rf(t),t}},Vp={};function Hp(e=`id`){return Vp[e]=Vp[e]||1,`${e}-${Vp[e]++}`}var Up=class{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||Hp(`geometry`),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&V.INDEX))throw Error(`Index buffer must have INDEX usage`)}destroy(){this.indices?.destroy();for(let e of Object.values(this.attributes))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}};function Wp(e,t){if(t instanceof Up)return t;let n=Gp(e,t),{attributes:r,bufferLayout:i}=Kp(e,t);return new Up({topology:t.topology||`triangle-list`,bufferLayout:i,vertexCount:t.vertexCount,indices:n,attributes:r})}function Gp(e,t){if(!t.indices)return;let n=t.indices.value;return e.createBuffer({usage:V.INDEX,data:n})}function Kp(e,t){let n=[],r={};for(let[i,a]of Object.entries(t.attributes)){let t=i;switch(i){case`POSITION`:t=`positions`;break;case`NORMAL`:t=`normals`;break;case`TEXCOORD_0`:t=`texCoords`;break;case`TEXCOORD_1`:t=`texCoords1`;break;case`COLOR_0`:t=`colors`}if(a){r[t]=e.createBuffer({data:a.value,id:`${i}-buffer`});let{value:o,size:s,normalized:c}=a;if(s===void 0)throw Error(`Attribute ${i} is missing a size`);n.push({name:t,format:Ml.getVertexFormatFromAttribute(o,s,c)})}}return{attributes:r,bufferLayout:n,vertexCount:t._calculateVertexCount(t.attributes,t.indices)}}function qp(e,t){let n={},r=`Values`;if(e.attributes.length===0&&!e.varyings?.length)return{"No attributes or varyings":{[r]:`N/A`}};for(let t of e.attributes)if(t){let e=`${t.location} ${t.name}: ${t.type}`;n[`in ${e}`]={[r]:t.stepMode||`vertex`}}for(let t of e.varyings||[]){let e=`${t.location} ${t.name}`;n[`out ${e}`]={[r]:JSON.stringify(t)}}return n}var Jp=`__debugFramebufferState`,Yp=8;function Xp(e,t,n){if(e.device.type!==`webgl`)return;let r=$p(e.device);r.flushing||(tm(e)?Zp(e,n,r):t&&em(t)&&t.handle!==null&&(r.queuedFramebuffers.includes(t)||r.queuedFramebuffers.push(t)))}function Zp(e,t,n){if(n.queuedFramebuffers.length===0)return;let{gl:r}=e.device,i=r.getParameter(36010),a=r.getParameter(36006),[o,s]=e.device.getDefaultCanvasContext().getDrawingBufferSize(),c=nm(t.top,Yp),l=nm(t.left,Yp);n.flushing=!0;try{for(let e of n.queuedFramebuffers){let[n,i,a,u,d]=Qp({framebuffer:e,targetWidth:o,targetHeight:s,topPx:c,leftPx:l,minimap:t.minimap});r.bindFramebuffer(36008,e.handle),r.bindFramebuffer(36009,null),r.blitFramebuffer(0,0,e.width,e.height,n,i,a,u,16384,9728),c+=d+Yp}}finally{r.bindFramebuffer(36008,i),r.bindFramebuffer(36009,a),n.flushing=!1}}function Qp(e){let{framebuffer:t,targetWidth:n,targetHeight:r,topPx:i,leftPx:a,minimap:o}=e,s=o?Math.max(Math.floor(n/4),1):n,c=o?Math.max(Math.floor(r/4),1):r,l=Math.min(s/t.width,c/t.height),u=Math.max(Math.floor(t.width*l),1),d=Math.max(Math.floor(t.height*l),1),f=a,p=Math.max(r-i-d,0);return[f,p,f+u,p+d,d]}function $p(e){return e.userData[Jp]||={flushing:!1,queuedFramebuffers:[]},e.userData[Jp]}function em(e){return`colorAttachments`in e}function tm(e){let t=e.props.framebuffer;return!t||t.handle===null}function nm(e,t){if(!e)return t;let n=Number.parseInt(e,10);return Number.isFinite(n)?n:t}function rm(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!rm(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!rm(e[i],t[i],n-1))return!1;return!0}return!1}var im=class{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(t=>t.name===e)||null}getAttributeNamesForBuffer(e){return e.attributes?e.attributes?.map(e=>e.attribute):[e.name]}mergeBufferLayouts(e,t){let n=[...e];for(let e of t){let t=n.findIndex(t=>t.name===e.name);t<0?n.push(e):n[t]=e}return n}getBufferIndex(e){let t=this.bufferLayouts.findIndex(t=>t.name===e);return t===-1&&z.warn(`BufferLayout: Missing buffer for "${e}".`)(),t}};function am(e,t){let n=1/0;for(let r of e){let e=t[r];e!==void 0&&(n=Math.min(n,e))}return n}function om(e,t){let n=Object.fromEntries(e.attributes.map(e=>[e.name,e.location])),r=t.slice();return r.sort((e,t)=>{let r=e.attributes?e.attributes.map(e=>e.attribute):[e.name],i=t.attributes?t.attributes.map(e=>e.attribute):[t.name];return am(r,n)-am(i,n)}),r}function sm(e,t){if(!e||!t.some(e=>e.bindingLayout?.length))return e;let n={...e,bindings:e.bindings.map(e=>({...e}))};`attributes`in(e||{})&&(n.attributes=e?.attributes||[]);for(let e of t)for(let t of e.bindingLayout||[])for(let e of lm(t.name)){let r=n.bindings.find(t=>t.name===e);r?.group===0&&(r.group=t.group)}return n}function cm(e){return!(!e.uniformTypes||um(e.uniformTypes))}function lm(e){let t=new Set([e,`${e}Uniforms`]);return e.endsWith(`Uniforms`)||t.add(`${e}Sampler`),[...t]}function um(e){for(let t in e)return!1;return!0}function dm(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function fm(e){return Array.isArray(e)?e.length===0||typeof e[0]==`number`:!1}function pm(e){return dm(e)||fm(e)}function mm(e){return pm(e)||typeof e==`number`||typeof e==`boolean`}function hm(e,t={}){let n={bindings:{},uniforms:{}};return Object.keys(e).forEach(r=>{let i=e[r];Object.prototype.hasOwnProperty.call(t,r)||mm(i)?n.uniforms[r]=i:n.bindings[r]=i}),n}var gm=class{options={disableWarnings:!1};modules;moduleUniforms;moduleBindings;constructor(e,t){Object.assign(this.options,t);let n=cf(Object.values(e).filter(Sm));for(let t of n)e[t.name]=t;z.log(1,`Creating ShaderInputs with modules`,Object.keys(e))(),this.modules=e,this.moduleUniforms={},this.moduleBindings={};for(let[t,n]of Object.entries(e))n&&(this._addModule(n),n.name&&t!==n.name&&!this.options.disableWarnings&&z.warn(`Module name: ${t} vs ${n.name}`)())}destroy(){}setProps(e){for(let t of Object.keys(e)){let n=t,r=e[n]||{},i=this.modules[n];if(!i)this.options.disableWarnings||z.warn(`Module ${t} not found`)();else{let e=this.moduleUniforms[n],t=this.moduleBindings[n],{uniforms:a,bindings:o}=hm(i.getUniforms?.(r,e)||r,i.uniformTypes);this.moduleUniforms[n]=_m(e,a,i.uniformTypes),this.moduleBindings[n]={...t,...o}}}}getModules(){return Object.values(this.modules)}getUniformValues(){return this.moduleUniforms}getBindingValues(){let e={};for(let t of Object.values(this.moduleBindings))Object.assign(e,t);return e}getDebugTable(){let e={};for(let[t,n]of Object.entries(this.moduleUniforms))for(let[r,i]of Object.entries(n))e[`${t}.${r}`]={type:this.modules[t].uniformTypes?.[r],value:String(i)};return e}_addModule(e){let t=e.name;this.moduleUniforms[t]=_m({},e.defaultUniforms||{},e.uniformTypes),this.moduleBindings[t]={}}};function _m(e={},t={},n={}){let r={...e};for(let[i,a]of Object.entries(t))a!==void 0&&(r[i]=vm(e[i],a,n[i]));return r}function vm(e,t,n){if(!n||typeof n==`string`)return ym(t);if(Array.isArray(n)){if(bm(t)||!Array.isArray(t))return ym(t);let r=Array.isArray(e)&&!bm(e)?[...e]:[],i=r.slice();for(let e=0;e<t.length;e++){let a=t[e];a!==void 0&&(i[e]=vm(r[e],a,n[0]))}return i}if(!xm(t))return ym(t);let r=n,i=xm(e)?e:{},a={...i};for(let[e,n]of Object.entries(t))n!==void 0&&(a[e]=vm(i[e],n,r[e]));return a}function ym(e){return ArrayBuffer.isView(e)?Array.prototype.slice.call(e):Array.isArray(e)?bm(e)?e.slice():e.map(e=>e===void 0?void 0:ym(e)):xm(e)?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,t===void 0?void 0:ym(t)])):e}function bm(e){return ArrayBuffer.isView(e)||Array.isArray(e)&&(e.length===0||typeof e[0]==`number`)}function xm(e){return!!e&&typeof e==`object`&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function Sm(e){return!!e?.dependencies}var Cm={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5};function wm(e){return e?Array.isArray(e)?e[0]??null:e:null}function Tm(e){let{dimension:t,data:n}=e;if(!n)return null;switch(t){case`1d`:{let e=wm(n);if(!e)return null;let{width:t}=Em(e);return{width:t,height:1}}case`2d`:{let e=wm(n);return e?Em(e):null}case`3d`:case`2d-array`:{if(!Array.isArray(n)||n.length===0)return null;let e=wm(n[0]);return e?Em(e):null}case`cube`:{let e=Object.keys(n)[0]??null;if(!e)return null;let t=n[e],r=wm(t);return r?Em(r):null}case`cube-array`:{if(!Array.isArray(n)||n.length===0)return null;let e=n[0],t=Object.keys(e)[0]??null;if(!t)return null;let r=wm(e[t]);return r?Em(r):null}default:return null}}function Em(e){if(cu(e))return lu(e);if(typeof e==`object`&&`width`in e&&`height`in e)return{width:e.width,height:e.height};throw Error(`Unsupported mip-level data`)}function Dm(e){return typeof e==`object`&&!!e&&`data`in e&&`width`in e&&`height`in e}function Om(e){return ArrayBuffer.isView(e)}function km(e){let{textureFormat:t,format:n}=e;if(t&&n&&t!==n)throw Error(`Conflicting texture formats "${t}" and "${n}" provided for the same mip level`);return t??n}function Am(e){let t=Cm[e];if(t===void 0)throw Error(`Invalid cube face: ${e}`);return t}function jm(e,t){return 6*e+Am(t)}function Mm(e){throw Error(`setTexture1DData not supported in WebGL.`)}function Nm(e){return Array.isArray(e)?e:[e]}function Pm(e,t,n,r){let i=Nm(t),a=e,o=[];for(let e=0;e<i.length;e++){let t=i[e];if(cu(t))o.push({type:`external-image`,image:t,z:a,mipLevel:e});else if(Dm(t))o.push({type:`texture-data`,data:t,textureFormat:km(t),z:a,mipLevel:e});else if(Om(t)&&n)o.push({type:`texture-data`,data:{data:t,width:Math.max(1,n.width>>e),height:Math.max(1,n.height>>e),...r?{format:r}:{}},textureFormat:r,z:a,mipLevel:e});else throw Error(`Unsupported 2D mip-level payload`)}return o}function Fm(e){let t=[];for(let n=0;n<e.length;n++)t.push(...Pm(n,e[n]));return t}function Im(e){let t=[];for(let n=0;n<e.length;n++)t.push(...Pm(n,e[n]));return t}function Lm(e){let t=[];for(let[n,r]of Object.entries(e)){let e=Am(n);t.push(...Pm(e,r))}return t}function Rm(e){let t=[];return e.forEach((e,n)=>{for(let[r,i]of Object.entries(e)){let e=jm(n,r);t.push(...Pm(e,i))}}),t}var zm=class e{device;id;props;_texture=null;_sampler=null;_view=null;ready;isReady=!1;destroyed=!1;resolveReady=()=>{};rejectReady=()=>{};get texture(){if(!this._texture)throw Error(`Texture not initialized yet`);return this._texture}get sampler(){if(!this._sampler)throw Error(`Sampler not initialized yet`);return this._sampler}get view(){if(!this._view)throw Error(`View not initialized yet`);return this._view}get[Symbol.toStringTag](){return`DynamicTexture`}toString(){let e=this._texture?.width??this.props.width??`?`,t=this._texture?.height??this.props.height??`?`;return`DynamicTexture:"${this.id}":${e}x${t}px:(${this.isReady?`ready`:`loading...`})`}constructor(t,n){this.device=t;let r=Hp(`dynamic-texture`),i=n;this.props={...e.defaultProps,id:r,...n,data:null},this.id=this.props.id,this.ready=new Promise((e,t)=>{this.resolveReady=e,this.rejectReady=t}),this.initAsync(i)}async initAsync(e){try{let t=await this._loadAllData(e);this._checkNotDestroyed();let n=t.data?Bm({...t,width:e.width,height:e.height,format:e.format}):[],r=`format`in e&&e.format!==void 0,i=`usage`in e&&e.usage!==void 0,a=this.props.width&&this.props.height?{width:this.props.width,height:this.props.height}:Tm(t)||{width:this.props.width||1,height:this.props.height||1};if(!a||a.width<=0||a.height<=0)throw Error(`${this} size could not be determined or was zero`);let o=Vm(this.device,n,a,{format:r?e.format:void 0}),s=o.format??this.props.format,c={...this.props,...a,format:s,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(s)&&!i&&(c.usage=W.SAMPLE|W.COPY_DST);let l=this.props.mipmaps&&!o.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(s);if(this.device.type===`webgpu`&&l){let e=this.props.dimension===`3d`?W.SAMPLE|W.STORAGE|W.COPY_DST|W.COPY_SRC:W.SAMPLE|W.RENDER|W.COPY_DST|W.COPY_SRC;c.usage|=e}let u=this.device.getMipLevelCount(c.width,c.height),d=o.hasExplicitMipChain?o.mipLevels:this.props.mipLevels===`auto`?u:Math.max(1,Math.min(u,this.props.mipLevels??1)),f={...c,mipLevels:d};this._texture=this.device.createTexture(f),this._sampler=this.texture.sampler,this._view=this.texture.view,o.subresources.length&&this._setTextureSubresources(o.subresources),this.props.mipmaps&&!o.hasExplicitMipChain&&!l&&z.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),l&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),z.info(0,`${this} created`)()}catch(e){let t=e instanceof Error?e:Error(String(e));this.rejectReady(t)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.destroyed=!0}generateMipmaps(){this.device.type===`webgl`?this.texture.generateMipmapsWebGL():this.device.type===`webgpu`?this.device.generateMipmapsWebGPU(this.texture):z.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(e={}){this._checkReady();let t=e instanceof ku?e:this.device.createSampler(e);this.texture.setSampler(t),this._sampler=t}async readBuffer(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,n=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,i=this.texture.computeMemoryLayout({width:t,height:n,depthOrArrayLayers:r}),a=this.device.createBuffer({byteLength:i.byteLength,usage:V.COPY_DST|V.MAP_READ});this.texture.readBuffer({...e,width:t,height:n,depthOrArrayLayers:r},a);let o=this.device.createFence();return await o.signaled,o.destroy(),a}async readAsync(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,n=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,i=this.texture.computeMemoryLayout({width:t,height:n,depthOrArrayLayers:r}),a=await this.readBuffer(e),o=await a.readAsync(0,i.byteLength);return a.destroy(),o.buffer}resize(e){if(this._checkReady(),e.width===this.texture.width&&e.height===this.texture.height)return!1;let t=this.texture;return this._texture=t.clone(e),this._sampler=this.texture.sampler,this._view=this.texture.view,t.destroy(),z.info(`${this} resized`),!0}getCubeFaceIndex(e){let t=Cm[e];if(t===void 0)throw Error(`Invalid cube face: ${e}`);return t}getCubeArrayFaceIndex(e,t){return 6*e+this.getCubeFaceIndex(t)}setTexture1DData(e){if(this._checkReady(),this.texture.props.dimension!==`1d`)throw Error(`${this} is not 1d`);let t=Mm(e);this._setTextureSubresources(t)}setTexture2DData(e,t=0){if(this._checkReady(),this.texture.props.dimension!==`2d`)throw Error(`${this} is not 2d`);let n=Pm(t,e);this._setTextureSubresources(n)}setTexture3DData(e){if(this.texture.props.dimension!==`3d`)throw Error(`${this} is not 3d`);let t=Fm(e);this._setTextureSubresources(t)}setTextureArrayData(e){if(this.texture.props.dimension!==`2d-array`)throw Error(`${this} is not 2d-array`);let t=Im(e);this._setTextureSubresources(t)}setTextureCubeData(e){if(this.texture.props.dimension!==`cube`)throw Error(`${this} is not cube`);let t=Lm(e);this._setTextureSubresources(t)}setTextureCubeArrayData(e){if(this.texture.props.dimension!==`cube-array`)throw Error(`${this} is not cube-array`);let t=Rm(e);this._setTextureSubresources(t)}_setTextureSubresources(e){for(let t of e){let{z:e,mipLevel:n}=t;switch(t.type){case`external-image`:let{image:r,flipY:i}=t;this.texture.copyExternalImage({image:r,z:e,mipLevel:n,flipY:i});break;case`texture-data`:let{data:a,textureFormat:o}=t;if(o&&o!==this.texture.format)throw Error(`${this} mip level ${n} uses format "${o}" but texture format is "${this.texture.format}"`);this.texture.writeData(a.data,{x:0,y:0,z:e,width:a.width,height:a.height,depthOrArrayLayers:1,mipLevel:n});break;default:throw Error(`Unsupported 2D mip-level payload`)}}}async _loadAllData(e){let t=await Gm(e.data);return{dimension:e.dimension??`2d`,data:t??null}}_checkNotDestroyed(){this.destroyed&&z.warn(`${this} already destroyed`)}_checkReady(){this.isReady||z.warn(`${this} Cannot perform this operation before ready`)}static defaultProps={...W.defaultProps,dimension:`2d`,data:null,mipmaps:!1}};function Bm(e){if(!e.data)return[];let t=e.width&&e.height?{width:e.width,height:e.height}:void 0,n=`format`in e?e.format:void 0;switch(e.dimension){case`1d`:return Mm(e.data);case`2d`:return Pm(0,e.data,t,n);case`3d`:return Fm(e.data);case`2d-array`:return Im(e.data);case`cube`:return Lm(e.data);case`cube-array`:return Rm(e.data);default:throw Error(`Unhandled dimension ${e.dimension}`)}}function Vm(e,t,n,r){if(t.length===0)return{subresources:t,mipLevels:1,format:r.format,hasExplicitMipChain:!1};let i=new Map;for(let e of t){let t=i.get(e.z)??[];t.push(e),i.set(e.z,t)}let a=t.some(e=>e.mipLevel>0),o=r.format,s=1/0,c=[];for(let[t,r]of i){let i=[...r].sort((e,t)=>e.mipLevel-t.mipLevel),a=i[0];if(!a||a.mipLevel!==0)throw Error(`DynamicTexture: slice ${t} is missing mip level 0`);let l=Um(e,a);if(l.width!==n.width||l.height!==n.height)throw Error(`DynamicTexture: slice ${t} base level dimensions ${l.width}x${l.height} do not match expected ${n.width}x${n.height}`);let u=Hm(a);if(u){if(o&&o!==u)throw Error(`DynamicTexture: slice ${t} base level format "${u}" does not match texture format "${o}"`);o=u}let d=o&&e.isTextureFormatCompressed(o)?Wm(e,l.width,l.height,o):e.getMipLevelCount(l.width,l.height),f=0;for(let t=0;t<i.length;t++){let n=i[t];if(!n||n.mipLevel!==t||t>=d)break;let r=Um(e,n),a=Math.max(1,l.width>>t),s=Math.max(1,l.height>>t);if(r.width!==a||r.height!==s)break;let u=Hm(n);if(u&&(o||=u,u!==o))break;f++,c.push(n)}s=Math.min(s,f)}let l=Number.isFinite(s)?Math.max(1,s):1;return{subresources:c.filter(e=>e.mipLevel<l),mipLevels:l,format:o,hasExplicitMipChain:a}}function Hm(e){if(e.type===`texture-data`)return e.textureFormat??km(e.data)}function Um(e,t){switch(t.type){case`external-image`:return e.getExternalImageSize(t.image);case`texture-data`:return{width:t.data.width,height:t.data.height};default:throw Error(`Unsupported texture subresource`)}}function Wm(e,t,n,r){let{blockWidth:i=1,blockHeight:a=1}=e.getTextureFormatInfo(r),o=1;for(let e=1;;e++){let r=Math.max(1,t>>e),s=Math.max(1,n>>e);if(r<i||s<a)break;o++}return o}async function Gm(e){if(e=await e,Array.isArray(e))return await Promise.all(e.map(Gm));if(e&&typeof e==`object`&&e.constructor===Object){let t=e,n=await Promise.all(Object.values(t).map(Gm)),r=Object.keys(t),i={};for(let e=0;e<r.length;e++)i[r[e]]=n[e];return i}return e}var Km=2,qm=1e4,Jm=`render pipeline initialization failed`,K=class e{static defaultProps={...Vu.defaultProps,source:void 0,vs:null,fs:null,id:`unnamed`,handle:void 0,userData:{},defines:{},modules:[],geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:Bp.getDefaultShaderAssembler(),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_pipelineNeedsUpdate=`newly created`;_needsRedraw=`initializing`;_destroyed=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return`Model`}toString(){return`Model(${this.id})`}constructor(t,n){this.props={...e.defaultProps,...n},n=this.props,this.id=n.id||Hp(`model`),this.device=t,Object.assign(this.userData,n.userData),this.material=n.material||null;let r=Object.fromEntries(this.props.modules?.map(e=>[e.name,e])||[]),i=n.shaderInputs||new gm(r,{disableWarnings:this.props.disableWarnings});this.setShaderInputs(i);let a=Ym(t),o=(this.props.modules?.length>0?this.props.modules:this.shaderInputs?.getModules())||[];if(this.props.shaderLayout=sm(this.props.shaderLayout,o)||null,this.device.type===`webgpu`&&this.props.source){let{source:e,getUniforms:n,bindingTable:r}=this.props.shaderAssembler.assembleWGSLShader({platformInfo:a,...this.props,modules:o});this.source=e,this._getModuleUniforms=n,this._bindingTable=r;let i=t.getShaderLayout?.(this.source);this.props.shaderLayout=sm(this.props.shaderLayout||i||null,o)||null}else{let{vs:e,fs:t,getUniforms:n}=this.props.shaderAssembler.assembleGLSLShaderPair({platformInfo:a,...this.props,modules:o});this.vs=e,this.fs=t,this._getModuleUniforms=n,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,n.geometry&&this.setGeometry(n.geometry),this.pipelineFactory=n.pipelineFactory||Uu.getDefaultPipelineFactory(this.device),this.shaderFactory=n.shaderFactory||Wu.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=t.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),`isInstanced`in n&&(this.isInstanced=n.isInstanced),n.instanceCount&&this.setInstanceCount(n.instanceCount),n.vertexCount&&this.setVertexCount(n.vertexCount),n.indexBuffer&&this.setIndexBuffer(n.indexBuffer),n.attributes&&this.setAttributes(n.attributes),n.constantAttributes&&this.setConstantAttributes(n.constantAttributes),n.bindings&&this.setBindings(n.bindings),n.transformFeedback&&(this.transformFeedback=n.transformFeedback)}destroy(){this._destroyed||=(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw(`contents of bound textures or buffers updated`);let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(){this.updateShaderInputs(),this.pipeline=this._updatePipeline()}draw(e){let t=this._areBindingsLoading();if(t)return z.info(Km,`>>> DRAWING ABORTED ${this.id}: ${t} not loaded`)(),!1;try{e.pushDebugGroup(`${this}.predraw(${e})`),this.predraw()}finally{e.popDebugGroup()}let n,r=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),r=this.pipeline.isErrored,r)z.info(Km,`>>> DRAWING ABORTED ${this.id}: ${Jm}`)(),n=!1;else{let t=this._getBindings(),r=this._getBindGroups(),{indexBuffer:i}=this.vertexArray,a=i?i.byteLength/(i.indexType===`uint32`?4:2):void 0;n=this.pipeline.draw({renderPass:e,vertexArray:this.vertexArray,isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.instanceCount,indexCount:a,transformFeedback:this.transformFeedback||void 0,bindings:t,bindGroups:r,_bindGroupCacheKeys:this._getBindGroupCacheKeys(),uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),n?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):this._needsRedraw=r?Jm:`waiting for resource initialization`,n}setGeometry(e){this._gpuGeometry?.destroy();let t=e&&Wp(this.device,e);if(t){this.setTopology(t.topology||`triangle-list`);let e=new im(this.bufferLayout);this.bufferLayout=e.mergeBufferLayouts(t.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t)}this._gpuGeometry=t}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate(`topology`))}setBufferLayout(e){let t=new im(this.bufferLayout);this.bufferLayout=this._gpuGeometry?t.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e,this._setPipelineNeedsUpdate(`bufferLayout`),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(e){rm(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate(`parameters`))}setInstanceCount(e){this.instanceCount=e,this.isInstanced===void 0&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw(`instanceCount`)}setVertexCount(e){this.vertexCount=e,this.setNeedsRedraw(`vertexCount`)}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new G(this.device,this.shaderInputs.modules);for(let[e,t]of Object.entries(this.shaderInputs.modules))if(cm(t)&&!this.material?.ownsModule(e)){let t=this._uniformStore.getManagedUniformBuffer(e);this.bindings[`${e}Uniforms`]=t}this.setNeedsRedraw(`shaderInputs`)}setMaterial(e){this.material=e,this.setNeedsRedraw(`material`)}updateShaderInputs(){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues()),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw(`shaderInputs`)}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw(`bindings`)}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw(`transformFeedback`)}setIndexBuffer(e){this.vertexArray.setIndexBuffer(e),this.setNeedsRedraw(`indexBuffer`)}setAttributes(e,t){let n=t?.disableWarnings??this.props.disableWarnings;e.indices&&z.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=om(this.pipeline.shaderLayout,this.bufferLayout);let r=new im(this.bufferLayout);for(let[t,i]of Object.entries(e)){let e=r.getBufferLayout(t);if(!e){n||z.warn(`Model(${this.id}): Missing layout for buffer "${t}".`)();continue}let a=r.getAttributeNamesForBuffer(e),o=!1;for(let e of a){let t=this._attributeInfos[e];if(t){let e=this.device.type===`webgpu`?r.getBufferIndex(t.bufferName):t.location;this.vertexArray.setBuffer(e,i),o=!0}}!o&&!n&&z.warn(`Model(${this.id}): Ignoring buffer "${i.id}" for unknown attribute "${t}"`)()}this.setNeedsRedraw(`attributes`)}setConstantAttributes(e,t){for(let[n,r]of Object.entries(e)){let e=this._attributeInfos[n];e?this.vertexArray.setConstantWebGL(e.location,r):(t?.disableWarnings??this.props.disableWarnings)||z.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${n}"`)()}this.setNeedsRedraw(`constants`)}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(e instanceof zm&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(e instanceof zm&&!e.isReady)return e.id;return!1}_getBindings(){let e={};for(let[t,n]of Object.entries(this.bindings))n instanceof zm?n.isReady&&(e[t]=n.texture):e[t]=n;return e}_getBindGroups(){let e=this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]},t=e.bindings.length?Ku(e,this._getBindings()):{0:this._getBindings()};if(!this.material)return t;for(let[e,n]of Object.entries(this.material.getBindingsByGroup())){let r=Number(e);t[r]={...t[r]||{},...n}}return t}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;for(let t of Object.values(this.bindings))t instanceof ju?e=Math.max(e,t.texture.updateTimestamp):t instanceof V||t instanceof W?e=Math.max(e,t.updateTimestamp):t instanceof zm?e=t.texture?Math.max(e,t.texture.updateTimestamp):1/0:t instanceof ku||(e=Math.max(e,t.buffer.updateTimestamp));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let t={...e.attributes};for(let[e]of Object.entries(t))!this.pipeline.shaderLayout.attributes.find(t=>t.name===e)&&e!==`positions`&&delete t[e];this.vertexCount=e.vertexCount,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(t,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw(`geometry attributes`)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,t=null;this.pipeline&&(z.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,t=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let n=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:`vertex`,source:this.source||this.vs,debugShaders:this.props.debugShaders}),r=null;this.source?r=n:this.fs&&(r=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:`fragment`,source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,bindGroups:this._getBindGroups(),vs:n,fs:r}),this._attributeInfos=sd(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),t&&t!==e&&this.shaderFactory.release(t)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=z.level>3?0:qm;z.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,z.group(Km,`>>> DRAWING MODEL ${this.id}`,{collapsed:z.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=qp(this.pipeline.shaderLayout,this.id);z.table(Km,e)();let t=this.shaderInputs.getDebugTable();z.table(Km,t)();let n=this._getAttributeDebugTable();z.table(Km,this._attributeInfos)(),z.table(Km,n)(),z.groupEnd(Km)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let t=this.device.props.debugFramebuffers;if(this._drawCount++,!t)return;let n=e.props.framebuffer;Xp(e,n,{id:n?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[t,n]of Object.entries(this._attributeInfos)){let r=this.vertexArray.attributes[n.location];e[n.location]={name:t,type:n.shaderType,values:r?this._getBufferOrConstantValues(r,n.bufferDataType):`null`}}if(this.vertexArray.indexBuffer){let{indexBuffer:t}=this.vertexArray,n=t.indexType===`uint32`?new Uint32Array(t.debugData):new Uint16Array(t.debugData);e.indices={name:`indices`,type:t.indexType,values:n.toString()}}return e}_getBufferOrConstantValues(e,t){let n=Al.getTypedArrayConstructor(t);return(e instanceof V?new n(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let t={};for(let[n,r]of Object.entries(e))this.material.ownsBinding(n)||(t[n]=r);return t}};function Ym(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,features:e.features}}var Xm;(function(e){e[e.DEPTH_BUFFER_BIT=256]=`DEPTH_BUFFER_BIT`,e[e.STENCIL_BUFFER_BIT=1024]=`STENCIL_BUFFER_BIT`,e[e.COLOR_BUFFER_BIT=16384]=`COLOR_BUFFER_BIT`,e[e.POINTS=0]=`POINTS`,e[e.LINES=1]=`LINES`,e[e.LINE_LOOP=2]=`LINE_LOOP`,e[e.LINE_STRIP=3]=`LINE_STRIP`,e[e.TRIANGLES=4]=`TRIANGLES`,e[e.TRIANGLE_STRIP=5]=`TRIANGLE_STRIP`,e[e.TRIANGLE_FAN=6]=`TRIANGLE_FAN`,e[e.ZERO=0]=`ZERO`,e[e.ONE=1]=`ONE`,e[e.SRC_COLOR=768]=`SRC_COLOR`,e[e.ONE_MINUS_SRC_COLOR=769]=`ONE_MINUS_SRC_COLOR`,e[e.SRC_ALPHA=770]=`SRC_ALPHA`,e[e.ONE_MINUS_SRC_ALPHA=771]=`ONE_MINUS_SRC_ALPHA`,e[e.DST_ALPHA=772]=`DST_ALPHA`,e[e.ONE_MINUS_DST_ALPHA=773]=`ONE_MINUS_DST_ALPHA`,e[e.DST_COLOR=774]=`DST_COLOR`,e[e.ONE_MINUS_DST_COLOR=775]=`ONE_MINUS_DST_COLOR`,e[e.SRC_ALPHA_SATURATE=776]=`SRC_ALPHA_SATURATE`,e[e.CONSTANT_COLOR=32769]=`CONSTANT_COLOR`,e[e.ONE_MINUS_CONSTANT_COLOR=32770]=`ONE_MINUS_CONSTANT_COLOR`,e[e.CONSTANT_ALPHA=32771]=`CONSTANT_ALPHA`,e[e.ONE_MINUS_CONSTANT_ALPHA=32772]=`ONE_MINUS_CONSTANT_ALPHA`,e[e.FUNC_ADD=32774]=`FUNC_ADD`,e[e.FUNC_SUBTRACT=32778]=`FUNC_SUBTRACT`,e[e.FUNC_REVERSE_SUBTRACT=32779]=`FUNC_REVERSE_SUBTRACT`,e[e.BLEND_EQUATION=32777]=`BLEND_EQUATION`,e[e.BLEND_EQUATION_RGB=32777]=`BLEND_EQUATION_RGB`,e[e.BLEND_EQUATION_ALPHA=34877]=`BLEND_EQUATION_ALPHA`,e[e.BLEND_DST_RGB=32968]=`BLEND_DST_RGB`,e[e.BLEND_SRC_RGB=32969]=`BLEND_SRC_RGB`,e[e.BLEND_DST_ALPHA=32970]=`BLEND_DST_ALPHA`,e[e.BLEND_SRC_ALPHA=32971]=`BLEND_SRC_ALPHA`,e[e.BLEND_COLOR=32773]=`BLEND_COLOR`,e[e.ARRAY_BUFFER_BINDING=34964]=`ARRAY_BUFFER_BINDING`,e[e.ELEMENT_ARRAY_BUFFER_BINDING=34965]=`ELEMENT_ARRAY_BUFFER_BINDING`,e[e.LINE_WIDTH=2849]=`LINE_WIDTH`,e[e.ALIASED_POINT_SIZE_RANGE=33901]=`ALIASED_POINT_SIZE_RANGE`,e[e.ALIASED_LINE_WIDTH_RANGE=33902]=`ALIASED_LINE_WIDTH_RANGE`,e[e.CULL_FACE_MODE=2885]=`CULL_FACE_MODE`,e[e.FRONT_FACE=2886]=`FRONT_FACE`,e[e.DEPTH_RANGE=2928]=`DEPTH_RANGE`,e[e.DEPTH_WRITEMASK=2930]=`DEPTH_WRITEMASK`,e[e.DEPTH_CLEAR_VALUE=2931]=`DEPTH_CLEAR_VALUE`,e[e.DEPTH_FUNC=2932]=`DEPTH_FUNC`,e[e.STENCIL_CLEAR_VALUE=2961]=`STENCIL_CLEAR_VALUE`,e[e.STENCIL_FUNC=2962]=`STENCIL_FUNC`,e[e.STENCIL_FAIL=2964]=`STENCIL_FAIL`,e[e.STENCIL_PASS_DEPTH_FAIL=2965]=`STENCIL_PASS_DEPTH_FAIL`,e[e.STENCIL_PASS_DEPTH_PASS=2966]=`STENCIL_PASS_DEPTH_PASS`,e[e.STENCIL_REF=2967]=`STENCIL_REF`,e[e.STENCIL_VALUE_MASK=2963]=`STENCIL_VALUE_MASK`,e[e.STENCIL_WRITEMASK=2968]=`STENCIL_WRITEMASK`,e[e.STENCIL_BACK_FUNC=34816]=`STENCIL_BACK_FUNC`,e[e.STENCIL_BACK_FAIL=34817]=`STENCIL_BACK_FAIL`,e[e.STENCIL_BACK_PASS_DEPTH_FAIL=34818]=`STENCIL_BACK_PASS_DEPTH_FAIL`,e[e.STENCIL_BACK_PASS_DEPTH_PASS=34819]=`STENCIL_BACK_PASS_DEPTH_PASS`,e[e.STENCIL_BACK_REF=36003]=`STENCIL_BACK_REF`,e[e.STENCIL_BACK_VALUE_MASK=36004]=`STENCIL_BACK_VALUE_MASK`,e[e.STENCIL_BACK_WRITEMASK=36005]=`STENCIL_BACK_WRITEMASK`,e[e.VIEWPORT=2978]=`VIEWPORT`,e[e.SCISSOR_BOX=3088]=`SCISSOR_BOX`,e[e.COLOR_CLEAR_VALUE=3106]=`COLOR_CLEAR_VALUE`,e[e.COLOR_WRITEMASK=3107]=`COLOR_WRITEMASK`,e[e.UNPACK_ALIGNMENT=3317]=`UNPACK_ALIGNMENT`,e[e.PACK_ALIGNMENT=3333]=`PACK_ALIGNMENT`,e[e.MAX_TEXTURE_SIZE=3379]=`MAX_TEXTURE_SIZE`,e[e.MAX_VIEWPORT_DIMS=3386]=`MAX_VIEWPORT_DIMS`,e[e.SUBPIXEL_BITS=3408]=`SUBPIXEL_BITS`,e[e.RED_BITS=3410]=`RED_BITS`,e[e.GREEN_BITS=3411]=`GREEN_BITS`,e[e.BLUE_BITS=3412]=`BLUE_BITS`,e[e.ALPHA_BITS=3413]=`ALPHA_BITS`,e[e.DEPTH_BITS=3414]=`DEPTH_BITS`,e[e.STENCIL_BITS=3415]=`STENCIL_BITS`,e[e.POLYGON_OFFSET_UNITS=10752]=`POLYGON_OFFSET_UNITS`,e[e.POLYGON_OFFSET_FACTOR=32824]=`POLYGON_OFFSET_FACTOR`,e[e.TEXTURE_BINDING_2D=32873]=`TEXTURE_BINDING_2D`,e[e.SAMPLE_BUFFERS=32936]=`SAMPLE_BUFFERS`,e[e.SAMPLES=32937]=`SAMPLES`,e[e.SAMPLE_COVERAGE_VALUE=32938]=`SAMPLE_COVERAGE_VALUE`,e[e.SAMPLE_COVERAGE_INVERT=32939]=`SAMPLE_COVERAGE_INVERT`,e[e.COMPRESSED_TEXTURE_FORMATS=34467]=`COMPRESSED_TEXTURE_FORMATS`,e[e.VENDOR=7936]=`VENDOR`,e[e.RENDERER=7937]=`RENDERER`,e[e.VERSION=7938]=`VERSION`,e[e.IMPLEMENTATION_COLOR_READ_TYPE=35738]=`IMPLEMENTATION_COLOR_READ_TYPE`,e[e.IMPLEMENTATION_COLOR_READ_FORMAT=35739]=`IMPLEMENTATION_COLOR_READ_FORMAT`,e[e.BROWSER_DEFAULT_WEBGL=37444]=`BROWSER_DEFAULT_WEBGL`,e[e.STATIC_DRAW=35044]=`STATIC_DRAW`,e[e.STREAM_DRAW=35040]=`STREAM_DRAW`,e[e.DYNAMIC_DRAW=35048]=`DYNAMIC_DRAW`,e[e.ARRAY_BUFFER=34962]=`ARRAY_BUFFER`,e[e.ELEMENT_ARRAY_BUFFER=34963]=`ELEMENT_ARRAY_BUFFER`,e[e.BUFFER_SIZE=34660]=`BUFFER_SIZE`,e[e.BUFFER_USAGE=34661]=`BUFFER_USAGE`,e[e.CURRENT_VERTEX_ATTRIB=34342]=`CURRENT_VERTEX_ATTRIB`,e[e.VERTEX_ATTRIB_ARRAY_ENABLED=34338]=`VERTEX_ATTRIB_ARRAY_ENABLED`,e[e.VERTEX_ATTRIB_ARRAY_SIZE=34339]=`VERTEX_ATTRIB_ARRAY_SIZE`,e[e.VERTEX_ATTRIB_ARRAY_STRIDE=34340]=`VERTEX_ATTRIB_ARRAY_STRIDE`,e[e.VERTEX_ATTRIB_ARRAY_TYPE=34341]=`VERTEX_ATTRIB_ARRAY_TYPE`,e[e.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922]=`VERTEX_ATTRIB_ARRAY_NORMALIZED`,e[e.VERTEX_ATTRIB_ARRAY_POINTER=34373]=`VERTEX_ATTRIB_ARRAY_POINTER`,e[e.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975]=`VERTEX_ATTRIB_ARRAY_BUFFER_BINDING`,e[e.CULL_FACE=2884]=`CULL_FACE`,e[e.FRONT=1028]=`FRONT`,e[e.BACK=1029]=`BACK`,e[e.FRONT_AND_BACK=1032]=`FRONT_AND_BACK`,e[e.BLEND=3042]=`BLEND`,e[e.DEPTH_TEST=2929]=`DEPTH_TEST`,e[e.DITHER=3024]=`DITHER`,e[e.POLYGON_OFFSET_FILL=32823]=`POLYGON_OFFSET_FILL`,e[e.SAMPLE_ALPHA_TO_COVERAGE=32926]=`SAMPLE_ALPHA_TO_COVERAGE`,e[e.SAMPLE_COVERAGE=32928]=`SAMPLE_COVERAGE`,e[e.SCISSOR_TEST=3089]=`SCISSOR_TEST`,e[e.STENCIL_TEST=2960]=`STENCIL_TEST`,e[e.NO_ERROR=0]=`NO_ERROR`,e[e.INVALID_ENUM=1280]=`INVALID_ENUM`,e[e.INVALID_VALUE=1281]=`INVALID_VALUE`,e[e.INVALID_OPERATION=1282]=`INVALID_OPERATION`,e[e.OUT_OF_MEMORY=1285]=`OUT_OF_MEMORY`,e[e.CONTEXT_LOST_WEBGL=37442]=`CONTEXT_LOST_WEBGL`,e[e.CW=2304]=`CW`,e[e.CCW=2305]=`CCW`,e[e.DONT_CARE=4352]=`DONT_CARE`,e[e.FASTEST=4353]=`FASTEST`,e[e.NICEST=4354]=`NICEST`,e[e.GENERATE_MIPMAP_HINT=33170]=`GENERATE_MIPMAP_HINT`,e[e.BYTE=5120]=`BYTE`,e[e.UNSIGNED_BYTE=5121]=`UNSIGNED_BYTE`,e[e.SHORT=5122]=`SHORT`,e[e.UNSIGNED_SHORT=5123]=`UNSIGNED_SHORT`,e[e.INT=5124]=`INT`,e[e.UNSIGNED_INT=5125]=`UNSIGNED_INT`,e[e.FLOAT=5126]=`FLOAT`,e[e.DOUBLE=5130]=`DOUBLE`,e[e.DEPTH_COMPONENT=6402]=`DEPTH_COMPONENT`,e[e.ALPHA=6406]=`ALPHA`,e[e.RGB=6407]=`RGB`,e[e.RGBA=6408]=`RGBA`,e[e.LUMINANCE=6409]=`LUMINANCE`,e[e.LUMINANCE_ALPHA=6410]=`LUMINANCE_ALPHA`,e[e.UNSIGNED_SHORT_4_4_4_4=32819]=`UNSIGNED_SHORT_4_4_4_4`,e[e.UNSIGNED_SHORT_5_5_5_1=32820]=`UNSIGNED_SHORT_5_5_5_1`,e[e.UNSIGNED_SHORT_5_6_5=33635]=`UNSIGNED_SHORT_5_6_5`,e[e.FRAGMENT_SHADER=35632]=`FRAGMENT_SHADER`,e[e.VERTEX_SHADER=35633]=`VERTEX_SHADER`,e[e.COMPILE_STATUS=35713]=`COMPILE_STATUS`,e[e.DELETE_STATUS=35712]=`DELETE_STATUS`,e[e.LINK_STATUS=35714]=`LINK_STATUS`,e[e.VALIDATE_STATUS=35715]=`VALIDATE_STATUS`,e[e.ATTACHED_SHADERS=35717]=`ATTACHED_SHADERS`,e[e.ACTIVE_ATTRIBUTES=35721]=`ACTIVE_ATTRIBUTES`,e[e.ACTIVE_UNIFORMS=35718]=`ACTIVE_UNIFORMS`,e[e.MAX_VERTEX_ATTRIBS=34921]=`MAX_VERTEX_ATTRIBS`,e[e.MAX_VERTEX_UNIFORM_VECTORS=36347]=`MAX_VERTEX_UNIFORM_VECTORS`,e[e.MAX_VARYING_VECTORS=36348]=`MAX_VARYING_VECTORS`,e[e.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661]=`MAX_COMBINED_TEXTURE_IMAGE_UNITS`,e[e.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660]=`MAX_VERTEX_TEXTURE_IMAGE_UNITS`,e[e.MAX_TEXTURE_IMAGE_UNITS=34930]=`MAX_TEXTURE_IMAGE_UNITS`,e[e.MAX_FRAGMENT_UNIFORM_VECTORS=36349]=`MAX_FRAGMENT_UNIFORM_VECTORS`,e[e.SHADER_TYPE=35663]=`SHADER_TYPE`,e[e.SHADING_LANGUAGE_VERSION=35724]=`SHADING_LANGUAGE_VERSION`,e[e.CURRENT_PROGRAM=35725]=`CURRENT_PROGRAM`,e[e.NEVER=512]=`NEVER`,e[e.LESS=513]=`LESS`,e[e.EQUAL=514]=`EQUAL`,e[e.LEQUAL=515]=`LEQUAL`,e[e.GREATER=516]=`GREATER`,e[e.NOTEQUAL=517]=`NOTEQUAL`,e[e.GEQUAL=518]=`GEQUAL`,e[e.ALWAYS=519]=`ALWAYS`,e[e.KEEP=7680]=`KEEP`,e[e.REPLACE=7681]=`REPLACE`,e[e.INCR=7682]=`INCR`,e[e.DECR=7683]=`DECR`,e[e.INVERT=5386]=`INVERT`,e[e.INCR_WRAP=34055]=`INCR_WRAP`,e[e.DECR_WRAP=34056]=`DECR_WRAP`,e[e.NEAREST=9728]=`NEAREST`,e[e.LINEAR=9729]=`LINEAR`,e[e.NEAREST_MIPMAP_NEAREST=9984]=`NEAREST_MIPMAP_NEAREST`,e[e.LINEAR_MIPMAP_NEAREST=9985]=`LINEAR_MIPMAP_NEAREST`,e[e.NEAREST_MIPMAP_LINEAR=9986]=`NEAREST_MIPMAP_LINEAR`,e[e.LINEAR_MIPMAP_LINEAR=9987]=`LINEAR_MIPMAP_LINEAR`,e[e.TEXTURE_MAG_FILTER=10240]=`TEXTURE_MAG_FILTER`,e[e.TEXTURE_MIN_FILTER=10241]=`TEXTURE_MIN_FILTER`,e[e.TEXTURE_WRAP_S=10242]=`TEXTURE_WRAP_S`,e[e.TEXTURE_WRAP_T=10243]=`TEXTURE_WRAP_T`,e[e.TEXTURE_2D=3553]=`TEXTURE_2D`,e[e.TEXTURE=5890]=`TEXTURE`,e[e.TEXTURE_CUBE_MAP=34067]=`TEXTURE_CUBE_MAP`,e[e.TEXTURE_BINDING_CUBE_MAP=34068]=`TEXTURE_BINDING_CUBE_MAP`,e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]=`TEXTURE_CUBE_MAP_POSITIVE_X`,e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]=`TEXTURE_CUBE_MAP_NEGATIVE_X`,e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]=`TEXTURE_CUBE_MAP_POSITIVE_Y`,e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]=`TEXTURE_CUBE_MAP_NEGATIVE_Y`,e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]=`TEXTURE_CUBE_MAP_POSITIVE_Z`,e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]=`TEXTURE_CUBE_MAP_NEGATIVE_Z`,e[e.MAX_CUBE_MAP_TEXTURE_SIZE=34076]=`MAX_CUBE_MAP_TEXTURE_SIZE`,e[e.TEXTURE0=33984]=`TEXTURE0`,e[e.ACTIVE_TEXTURE=34016]=`ACTIVE_TEXTURE`,e[e.REPEAT=10497]=`REPEAT`,e[e.CLAMP_TO_EDGE=33071]=`CLAMP_TO_EDGE`,e[e.MIRRORED_REPEAT=33648]=`MIRRORED_REPEAT`,e[e.TEXTURE_WIDTH=4096]=`TEXTURE_WIDTH`,e[e.TEXTURE_HEIGHT=4097]=`TEXTURE_HEIGHT`,e[e.FLOAT_VEC2=35664]=`FLOAT_VEC2`,e[e.FLOAT_VEC3=35665]=`FLOAT_VEC3`,e[e.FLOAT_VEC4=35666]=`FLOAT_VEC4`,e[e.INT_VEC2=35667]=`INT_VEC2`,e[e.INT_VEC3=35668]=`INT_VEC3`,e[e.INT_VEC4=35669]=`INT_VEC4`,e[e.BOOL=35670]=`BOOL`,e[e.BOOL_VEC2=35671]=`BOOL_VEC2`,e[e.BOOL_VEC3=35672]=`BOOL_VEC3`,e[e.BOOL_VEC4=35673]=`BOOL_VEC4`,e[e.FLOAT_MAT2=35674]=`FLOAT_MAT2`,e[e.FLOAT_MAT3=35675]=`FLOAT_MAT3`,e[e.FLOAT_MAT4=35676]=`FLOAT_MAT4`,e[e.SAMPLER_2D=35678]=`SAMPLER_2D`,e[e.SAMPLER_CUBE=35680]=`SAMPLER_CUBE`,e[e.LOW_FLOAT=36336]=`LOW_FLOAT`,e[e.MEDIUM_FLOAT=36337]=`MEDIUM_FLOAT`,e[e.HIGH_FLOAT=36338]=`HIGH_FLOAT`,e[e.LOW_INT=36339]=`LOW_INT`,e[e.MEDIUM_INT=36340]=`MEDIUM_INT`,e[e.HIGH_INT=36341]=`HIGH_INT`,e[e.FRAMEBUFFER=36160]=`FRAMEBUFFER`,e[e.RENDERBUFFER=36161]=`RENDERBUFFER`,e[e.RGBA4=32854]=`RGBA4`,e[e.RGB5_A1=32855]=`RGB5_A1`,e[e.RGB565=36194]=`RGB565`,e[e.DEPTH_COMPONENT16=33189]=`DEPTH_COMPONENT16`,e[e.STENCIL_INDEX=6401]=`STENCIL_INDEX`,e[e.STENCIL_INDEX8=36168]=`STENCIL_INDEX8`,e[e.DEPTH_STENCIL=34041]=`DEPTH_STENCIL`,e[e.RENDERBUFFER_WIDTH=36162]=`RENDERBUFFER_WIDTH`,e[e.RENDERBUFFER_HEIGHT=36163]=`RENDERBUFFER_HEIGHT`,e[e.RENDERBUFFER_INTERNAL_FORMAT=36164]=`RENDERBUFFER_INTERNAL_FORMAT`,e[e.RENDERBUFFER_RED_SIZE=36176]=`RENDERBUFFER_RED_SIZE`,e[e.RENDERBUFFER_GREEN_SIZE=36177]=`RENDERBUFFER_GREEN_SIZE`,e[e.RENDERBUFFER_BLUE_SIZE=36178]=`RENDERBUFFER_BLUE_SIZE`,e[e.RENDERBUFFER_ALPHA_SIZE=36179]=`RENDERBUFFER_ALPHA_SIZE`,e[e.RENDERBUFFER_DEPTH_SIZE=36180]=`RENDERBUFFER_DEPTH_SIZE`,e[e.RENDERBUFFER_STENCIL_SIZE=36181]=`RENDERBUFFER_STENCIL_SIZE`,e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048]=`FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE`,e[e.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049]=`FRAMEBUFFER_ATTACHMENT_OBJECT_NAME`,e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050]=`FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL`,e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051]=`FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE`,e[e.COLOR_ATTACHMENT0=36064]=`COLOR_ATTACHMENT0`,e[e.DEPTH_ATTACHMENT=36096]=`DEPTH_ATTACHMENT`,e[e.STENCIL_ATTACHMENT=36128]=`STENCIL_ATTACHMENT`,e[e.DEPTH_STENCIL_ATTACHMENT=33306]=`DEPTH_STENCIL_ATTACHMENT`,e[e.NONE=0]=`NONE`,e[e.FRAMEBUFFER_COMPLETE=36053]=`FRAMEBUFFER_COMPLETE`,e[e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054]=`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`,e[e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055]=`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`,e[e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057]=`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`,e[e.FRAMEBUFFER_UNSUPPORTED=36061]=`FRAMEBUFFER_UNSUPPORTED`,e[e.FRAMEBUFFER_BINDING=36006]=`FRAMEBUFFER_BINDING`,e[e.RENDERBUFFER_BINDING=36007]=`RENDERBUFFER_BINDING`,e[e.READ_FRAMEBUFFER=36008]=`READ_FRAMEBUFFER`,e[e.DRAW_FRAMEBUFFER=36009]=`DRAW_FRAMEBUFFER`,e[e.MAX_RENDERBUFFER_SIZE=34024]=`MAX_RENDERBUFFER_SIZE`,e[e.INVALID_FRAMEBUFFER_OPERATION=1286]=`INVALID_FRAMEBUFFER_OPERATION`,e[e.UNPACK_FLIP_Y_WEBGL=37440]=`UNPACK_FLIP_Y_WEBGL`,e[e.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441]=`UNPACK_PREMULTIPLY_ALPHA_WEBGL`,e[e.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443]=`UNPACK_COLORSPACE_CONVERSION_WEBGL`,e[e.READ_BUFFER=3074]=`READ_BUFFER`,e[e.UNPACK_ROW_LENGTH=3314]=`UNPACK_ROW_LENGTH`,e[e.UNPACK_SKIP_ROWS=3315]=`UNPACK_SKIP_ROWS`,e[e.UNPACK_SKIP_PIXELS=3316]=`UNPACK_SKIP_PIXELS`,e[e.PACK_ROW_LENGTH=3330]=`PACK_ROW_LENGTH`,e[e.PACK_SKIP_ROWS=3331]=`PACK_SKIP_ROWS`,e[e.PACK_SKIP_PIXELS=3332]=`PACK_SKIP_PIXELS`,e[e.TEXTURE_BINDING_3D=32874]=`TEXTURE_BINDING_3D`,e[e.UNPACK_SKIP_IMAGES=32877]=`UNPACK_SKIP_IMAGES`,e[e.UNPACK_IMAGE_HEIGHT=32878]=`UNPACK_IMAGE_HEIGHT`,e[e.MAX_3D_TEXTURE_SIZE=32883]=`MAX_3D_TEXTURE_SIZE`,e[e.MAX_ELEMENTS_VERTICES=33e3]=`MAX_ELEMENTS_VERTICES`,e[e.MAX_ELEMENTS_INDICES=33001]=`MAX_ELEMENTS_INDICES`,e[e.MAX_TEXTURE_LOD_BIAS=34045]=`MAX_TEXTURE_LOD_BIAS`,e[e.MAX_FRAGMENT_UNIFORM_COMPONENTS=35657]=`MAX_FRAGMENT_UNIFORM_COMPONENTS`,e[e.MAX_VERTEX_UNIFORM_COMPONENTS=35658]=`MAX_VERTEX_UNIFORM_COMPONENTS`,e[e.MAX_ARRAY_TEXTURE_LAYERS=35071]=`MAX_ARRAY_TEXTURE_LAYERS`,e[e.MIN_PROGRAM_TEXEL_OFFSET=35076]=`MIN_PROGRAM_TEXEL_OFFSET`,e[e.MAX_PROGRAM_TEXEL_OFFSET=35077]=`MAX_PROGRAM_TEXEL_OFFSET`,e[e.MAX_VARYING_COMPONENTS=35659]=`MAX_VARYING_COMPONENTS`,e[e.FRAGMENT_SHADER_DERIVATIVE_HINT=35723]=`FRAGMENT_SHADER_DERIVATIVE_HINT`,e[e.RASTERIZER_DISCARD=35977]=`RASTERIZER_DISCARD`,e[e.VERTEX_ARRAY_BINDING=34229]=`VERTEX_ARRAY_BINDING`,e[e.MAX_VERTEX_OUTPUT_COMPONENTS=37154]=`MAX_VERTEX_OUTPUT_COMPONENTS`,e[e.MAX_FRAGMENT_INPUT_COMPONENTS=37157]=`MAX_FRAGMENT_INPUT_COMPONENTS`,e[e.MAX_SERVER_WAIT_TIMEOUT=37137]=`MAX_SERVER_WAIT_TIMEOUT`,e[e.MAX_ELEMENT_INDEX=36203]=`MAX_ELEMENT_INDEX`,e[e.RED=6403]=`RED`,e[e.RGB8=32849]=`RGB8`,e[e.RGBA8=32856]=`RGBA8`,e[e.RGB10_A2=32857]=`RGB10_A2`,e[e.TEXTURE_3D=32879]=`TEXTURE_3D`,e[e.TEXTURE_WRAP_R=32882]=`TEXTURE_WRAP_R`,e[e.TEXTURE_MIN_LOD=33082]=`TEXTURE_MIN_LOD`,e[e.TEXTURE_MAX_LOD=33083]=`TEXTURE_MAX_LOD`,e[e.TEXTURE_BASE_LEVEL=33084]=`TEXTURE_BASE_LEVEL`,e[e.TEXTURE_MAX_LEVEL=33085]=`TEXTURE_MAX_LEVEL`,e[e.TEXTURE_COMPARE_MODE=34892]=`TEXTURE_COMPARE_MODE`,e[e.TEXTURE_COMPARE_FUNC=34893]=`TEXTURE_COMPARE_FUNC`,e[e.SRGB=35904]=`SRGB`,e[e.SRGB8=35905]=`SRGB8`,e[e.SRGB8_ALPHA8=35907]=`SRGB8_ALPHA8`,e[e.COMPARE_REF_TO_TEXTURE=34894]=`COMPARE_REF_TO_TEXTURE`,e[e.RGBA32F=34836]=`RGBA32F`,e[e.RGB32F=34837]=`RGB32F`,e[e.RGBA16F=34842]=`RGBA16F`,e[e.RGB16F=34843]=`RGB16F`,e[e.TEXTURE_2D_ARRAY=35866]=`TEXTURE_2D_ARRAY`,e[e.TEXTURE_BINDING_2D_ARRAY=35869]=`TEXTURE_BINDING_2D_ARRAY`,e[e.R11F_G11F_B10F=35898]=`R11F_G11F_B10F`,e[e.RGB9_E5=35901]=`RGB9_E5`,e[e.RGBA32UI=36208]=`RGBA32UI`,e[e.RGB32UI=36209]=`RGB32UI`,e[e.RGBA16UI=36214]=`RGBA16UI`,e[e.RGB16UI=36215]=`RGB16UI`,e[e.RGBA8UI=36220]=`RGBA8UI`,e[e.RGB8UI=36221]=`RGB8UI`,e[e.RGBA32I=36226]=`RGBA32I`,e[e.RGB32I=36227]=`RGB32I`,e[e.RGBA16I=36232]=`RGBA16I`,e[e.RGB16I=36233]=`RGB16I`,e[e.RGBA8I=36238]=`RGBA8I`,e[e.RGB8I=36239]=`RGB8I`,e[e.RED_INTEGER=36244]=`RED_INTEGER`,e[e.RGB_INTEGER=36248]=`RGB_INTEGER`,e[e.RGBA_INTEGER=36249]=`RGBA_INTEGER`,e[e.R8=33321]=`R8`,e[e.RG8=33323]=`RG8`,e[e.R16F=33325]=`R16F`,e[e.R32F=33326]=`R32F`,e[e.RG16F=33327]=`RG16F`,e[e.RG32F=33328]=`RG32F`,e[e.R8I=33329]=`R8I`,e[e.R8UI=33330]=`R8UI`,e[e.R16I=33331]=`R16I`,e[e.R16UI=33332]=`R16UI`,e[e.R32I=33333]=`R32I`,e[e.R32UI=33334]=`R32UI`,e[e.RG8I=33335]=`RG8I`,e[e.RG8UI=33336]=`RG8UI`,e[e.RG16I=33337]=`RG16I`,e[e.RG16UI=33338]=`RG16UI`,e[e.RG32I=33339]=`RG32I`,e[e.RG32UI=33340]=`RG32UI`,e[e.R8_SNORM=36756]=`R8_SNORM`,e[e.RG8_SNORM=36757]=`RG8_SNORM`,e[e.RGB8_SNORM=36758]=`RGB8_SNORM`,e[e.RGBA8_SNORM=36759]=`RGBA8_SNORM`,e[e.RGB10_A2UI=36975]=`RGB10_A2UI`,e[e.TEXTURE_IMMUTABLE_FORMAT=37167]=`TEXTURE_IMMUTABLE_FORMAT`,e[e.TEXTURE_IMMUTABLE_LEVELS=33503]=`TEXTURE_IMMUTABLE_LEVELS`,e[e.UNSIGNED_INT_2_10_10_10_REV=33640]=`UNSIGNED_INT_2_10_10_10_REV`,e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]=`UNSIGNED_INT_10F_11F_11F_REV`,e[e.UNSIGNED_INT_5_9_9_9_REV=35902]=`UNSIGNED_INT_5_9_9_9_REV`,e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]=`FLOAT_32_UNSIGNED_INT_24_8_REV`,e[e.UNSIGNED_INT_24_8=34042]=`UNSIGNED_INT_24_8`,e[e.HALF_FLOAT=5131]=`HALF_FLOAT`,e[e.RG=33319]=`RG`,e[e.RG_INTEGER=33320]=`RG_INTEGER`,e[e.INT_2_10_10_10_REV=36255]=`INT_2_10_10_10_REV`,e[e.CURRENT_QUERY=34917]=`CURRENT_QUERY`,e[e.QUERY_RESULT=34918]=`QUERY_RESULT`,e[e.QUERY_RESULT_AVAILABLE=34919]=`QUERY_RESULT_AVAILABLE`,e[e.ANY_SAMPLES_PASSED=35887]=`ANY_SAMPLES_PASSED`,e[e.ANY_SAMPLES_PASSED_CONSERVATIVE=36202]=`ANY_SAMPLES_PASSED_CONSERVATIVE`,e[e.MAX_DRAW_BUFFERS=34852]=`MAX_DRAW_BUFFERS`,e[e.DRAW_BUFFER0=34853]=`DRAW_BUFFER0`,e[e.DRAW_BUFFER1=34854]=`DRAW_BUFFER1`,e[e.DRAW_BUFFER2=34855]=`DRAW_BUFFER2`,e[e.DRAW_BUFFER3=34856]=`DRAW_BUFFER3`,e[e.DRAW_BUFFER4=34857]=`DRAW_BUFFER4`,e[e.DRAW_BUFFER5=34858]=`DRAW_BUFFER5`,e[e.DRAW_BUFFER6=34859]=`DRAW_BUFFER6`,e[e.DRAW_BUFFER7=34860]=`DRAW_BUFFER7`,e[e.DRAW_BUFFER8=34861]=`DRAW_BUFFER8`,e[e.DRAW_BUFFER9=34862]=`DRAW_BUFFER9`,e[e.DRAW_BUFFER10=34863]=`DRAW_BUFFER10`,e[e.DRAW_BUFFER11=34864]=`DRAW_BUFFER11`,e[e.DRAW_BUFFER12=34865]=`DRAW_BUFFER12`,e[e.DRAW_BUFFER13=34866]=`DRAW_BUFFER13`,e[e.DRAW_BUFFER14=34867]=`DRAW_BUFFER14`,e[e.DRAW_BUFFER15=34868]=`DRAW_BUFFER15`,e[e.MAX_COLOR_ATTACHMENTS=36063]=`MAX_COLOR_ATTACHMENTS`,e[e.COLOR_ATTACHMENT1=36065]=`COLOR_ATTACHMENT1`,e[e.COLOR_ATTACHMENT2=36066]=`COLOR_ATTACHMENT2`,e[e.COLOR_ATTACHMENT3=36067]=`COLOR_ATTACHMENT3`,e[e.COLOR_ATTACHMENT4=36068]=`COLOR_ATTACHMENT4`,e[e.COLOR_ATTACHMENT5=36069]=`COLOR_ATTACHMENT5`,e[e.COLOR_ATTACHMENT6=36070]=`COLOR_ATTACHMENT6`,e[e.COLOR_ATTACHMENT7=36071]=`COLOR_ATTACHMENT7`,e[e.COLOR_ATTACHMENT8=36072]=`COLOR_ATTACHMENT8`,e[e.COLOR_ATTACHMENT9=36073]=`COLOR_ATTACHMENT9`,e[e.COLOR_ATTACHMENT10=36074]=`COLOR_ATTACHMENT10`,e[e.COLOR_ATTACHMENT11=36075]=`COLOR_ATTACHMENT11`,e[e.COLOR_ATTACHMENT12=36076]=`COLOR_ATTACHMENT12`,e[e.COLOR_ATTACHMENT13=36077]=`COLOR_ATTACHMENT13`,e[e.COLOR_ATTACHMENT14=36078]=`COLOR_ATTACHMENT14`,e[e.COLOR_ATTACHMENT15=36079]=`COLOR_ATTACHMENT15`,e[e.SAMPLER_3D=35679]=`SAMPLER_3D`,e[e.SAMPLER_2D_SHADOW=35682]=`SAMPLER_2D_SHADOW`,e[e.SAMPLER_2D_ARRAY=36289]=`SAMPLER_2D_ARRAY`,e[e.SAMPLER_2D_ARRAY_SHADOW=36292]=`SAMPLER_2D_ARRAY_SHADOW`,e[e.SAMPLER_CUBE_SHADOW=36293]=`SAMPLER_CUBE_SHADOW`,e[e.INT_SAMPLER_2D=36298]=`INT_SAMPLER_2D`,e[e.INT_SAMPLER_3D=36299]=`INT_SAMPLER_3D`,e[e.INT_SAMPLER_CUBE=36300]=`INT_SAMPLER_CUBE`,e[e.INT_SAMPLER_2D_ARRAY=36303]=`INT_SAMPLER_2D_ARRAY`,e[e.UNSIGNED_INT_SAMPLER_2D=36306]=`UNSIGNED_INT_SAMPLER_2D`,e[e.UNSIGNED_INT_SAMPLER_3D=36307]=`UNSIGNED_INT_SAMPLER_3D`,e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]=`UNSIGNED_INT_SAMPLER_CUBE`,e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]=`UNSIGNED_INT_SAMPLER_2D_ARRAY`,e[e.MAX_SAMPLES=36183]=`MAX_SAMPLES`,e[e.SAMPLER_BINDING=35097]=`SAMPLER_BINDING`,e[e.PIXEL_PACK_BUFFER=35051]=`PIXEL_PACK_BUFFER`,e[e.PIXEL_UNPACK_BUFFER=35052]=`PIXEL_UNPACK_BUFFER`,e[e.PIXEL_PACK_BUFFER_BINDING=35053]=`PIXEL_PACK_BUFFER_BINDING`,e[e.PIXEL_UNPACK_BUFFER_BINDING=35055]=`PIXEL_UNPACK_BUFFER_BINDING`,e[e.COPY_READ_BUFFER=36662]=`COPY_READ_BUFFER`,e[e.COPY_WRITE_BUFFER=36663]=`COPY_WRITE_BUFFER`,e[e.COPY_READ_BUFFER_BINDING=36662]=`COPY_READ_BUFFER_BINDING`,e[e.COPY_WRITE_BUFFER_BINDING=36663]=`COPY_WRITE_BUFFER_BINDING`,e[e.FLOAT_MAT2x3=35685]=`FLOAT_MAT2x3`,e[e.FLOAT_MAT2x4=35686]=`FLOAT_MAT2x4`,e[e.FLOAT_MAT3x2=35687]=`FLOAT_MAT3x2`,e[e.FLOAT_MAT3x4=35688]=`FLOAT_MAT3x4`,e[e.FLOAT_MAT4x2=35689]=`FLOAT_MAT4x2`,e[e.FLOAT_MAT4x3=35690]=`FLOAT_MAT4x3`,e[e.UNSIGNED_INT_VEC2=36294]=`UNSIGNED_INT_VEC2`,e[e.UNSIGNED_INT_VEC3=36295]=`UNSIGNED_INT_VEC3`,e[e.UNSIGNED_INT_VEC4=36296]=`UNSIGNED_INT_VEC4`,e[e.UNSIGNED_NORMALIZED=35863]=`UNSIGNED_NORMALIZED`,e[e.SIGNED_NORMALIZED=36764]=`SIGNED_NORMALIZED`,e[e.VERTEX_ATTRIB_ARRAY_INTEGER=35069]=`VERTEX_ATTRIB_ARRAY_INTEGER`,e[e.VERTEX_ATTRIB_ARRAY_DIVISOR=35070]=`VERTEX_ATTRIB_ARRAY_DIVISOR`,e[e.TRANSFORM_FEEDBACK_BUFFER_MODE=35967]=`TRANSFORM_FEEDBACK_BUFFER_MODE`,e[e.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS=35968]=`MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS`,e[e.TRANSFORM_FEEDBACK_VARYINGS=35971]=`TRANSFORM_FEEDBACK_VARYINGS`,e[e.TRANSFORM_FEEDBACK_BUFFER_START=35972]=`TRANSFORM_FEEDBACK_BUFFER_START`,e[e.TRANSFORM_FEEDBACK_BUFFER_SIZE=35973]=`TRANSFORM_FEEDBACK_BUFFER_SIZE`,e[e.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN=35976]=`TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`,e[e.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS=35978]=`MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS`,e[e.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS=35979]=`MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS`,e[e.INTERLEAVED_ATTRIBS=35980]=`INTERLEAVED_ATTRIBS`,e[e.SEPARATE_ATTRIBS=35981]=`SEPARATE_ATTRIBS`,e[e.TRANSFORM_FEEDBACK_BUFFER=35982]=`TRANSFORM_FEEDBACK_BUFFER`,e[e.TRANSFORM_FEEDBACK_BUFFER_BINDING=35983]=`TRANSFORM_FEEDBACK_BUFFER_BINDING`,e[e.TRANSFORM_FEEDBACK=36386]=`TRANSFORM_FEEDBACK`,e[e.TRANSFORM_FEEDBACK_PAUSED=36387]=`TRANSFORM_FEEDBACK_PAUSED`,e[e.TRANSFORM_FEEDBACK_ACTIVE=36388]=`TRANSFORM_FEEDBACK_ACTIVE`,e[e.TRANSFORM_FEEDBACK_BINDING=36389]=`TRANSFORM_FEEDBACK_BINDING`,e[e.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING=33296]=`FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING`,e[e.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE=33297]=`FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE`,e[e.FRAMEBUFFER_ATTACHMENT_RED_SIZE=33298]=`FRAMEBUFFER_ATTACHMENT_RED_SIZE`,e[e.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE=33299]=`FRAMEBUFFER_ATTACHMENT_GREEN_SIZE`,e[e.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE=33300]=`FRAMEBUFFER_ATTACHMENT_BLUE_SIZE`,e[e.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE=33301]=`FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE`,e[e.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE=33302]=`FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE`,e[e.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE=33303]=`FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE`,e[e.FRAMEBUFFER_DEFAULT=33304]=`FRAMEBUFFER_DEFAULT`,e[e.DEPTH24_STENCIL8=35056]=`DEPTH24_STENCIL8`,e[e.DRAW_FRAMEBUFFER_BINDING=36006]=`DRAW_FRAMEBUFFER_BINDING`,e[e.READ_FRAMEBUFFER_BINDING=36010]=`READ_FRAMEBUFFER_BINDING`,e[e.RENDERBUFFER_SAMPLES=36011]=`RENDERBUFFER_SAMPLES`,e[e.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER=36052]=`FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER`,e[e.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE=36182]=`FRAMEBUFFER_INCOMPLETE_MULTISAMPLE`,e[e.UNIFORM_BUFFER=35345]=`UNIFORM_BUFFER`,e[e.UNIFORM_BUFFER_BINDING=35368]=`UNIFORM_BUFFER_BINDING`,e[e.UNIFORM_BUFFER_START=35369]=`UNIFORM_BUFFER_START`,e[e.UNIFORM_BUFFER_SIZE=35370]=`UNIFORM_BUFFER_SIZE`,e[e.MAX_VERTEX_UNIFORM_BLOCKS=35371]=`MAX_VERTEX_UNIFORM_BLOCKS`,e[e.MAX_FRAGMENT_UNIFORM_BLOCKS=35373]=`MAX_FRAGMENT_UNIFORM_BLOCKS`,e[e.MAX_COMBINED_UNIFORM_BLOCKS=35374]=`MAX_COMBINED_UNIFORM_BLOCKS`,e[e.MAX_UNIFORM_BUFFER_BINDINGS=35375]=`MAX_UNIFORM_BUFFER_BINDINGS`,e[e.MAX_UNIFORM_BLOCK_SIZE=35376]=`MAX_UNIFORM_BLOCK_SIZE`,e[e.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS=35377]=`MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS`,e[e.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS=35379]=`MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS`,e[e.UNIFORM_BUFFER_OFFSET_ALIGNMENT=35380]=`UNIFORM_BUFFER_OFFSET_ALIGNMENT`,e[e.ACTIVE_UNIFORM_BLOCKS=35382]=`ACTIVE_UNIFORM_BLOCKS`,e[e.UNIFORM_TYPE=35383]=`UNIFORM_TYPE`,e[e.UNIFORM_SIZE=35384]=`UNIFORM_SIZE`,e[e.UNIFORM_BLOCK_INDEX=35386]=`UNIFORM_BLOCK_INDEX`,e[e.UNIFORM_OFFSET=35387]=`UNIFORM_OFFSET`,e[e.UNIFORM_ARRAY_STRIDE=35388]=`UNIFORM_ARRAY_STRIDE`,e[e.UNIFORM_MATRIX_STRIDE=35389]=`UNIFORM_MATRIX_STRIDE`,e[e.UNIFORM_IS_ROW_MAJOR=35390]=`UNIFORM_IS_ROW_MAJOR`,e[e.UNIFORM_BLOCK_BINDING=35391]=`UNIFORM_BLOCK_BINDING`,e[e.UNIFORM_BLOCK_DATA_SIZE=35392]=`UNIFORM_BLOCK_DATA_SIZE`,e[e.UNIFORM_BLOCK_ACTIVE_UNIFORMS=35394]=`UNIFORM_BLOCK_ACTIVE_UNIFORMS`,e[e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES=35395]=`UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`,e[e.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER=35396]=`UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`,e[e.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER=35398]=`UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER`,e[e.OBJECT_TYPE=37138]=`OBJECT_TYPE`,e[e.SYNC_CONDITION=37139]=`SYNC_CONDITION`,e[e.SYNC_STATUS=37140]=`SYNC_STATUS`,e[e.SYNC_FLAGS=37141]=`SYNC_FLAGS`,e[e.SYNC_FENCE=37142]=`SYNC_FENCE`,e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]=`SYNC_GPU_COMMANDS_COMPLETE`,e[e.UNSIGNALED=37144]=`UNSIGNALED`,e[e.SIGNALED=37145]=`SIGNALED`,e[e.ALREADY_SIGNALED=37146]=`ALREADY_SIGNALED`,e[e.TIMEOUT_EXPIRED=37147]=`TIMEOUT_EXPIRED`,e[e.CONDITION_SATISFIED=37148]=`CONDITION_SATISFIED`,e[e.WAIT_FAILED=37149]=`WAIT_FAILED`,e[e.SYNC_FLUSH_COMMANDS_BIT=1]=`SYNC_FLUSH_COMMANDS_BIT`,e[e.COLOR=6144]=`COLOR`,e[e.DEPTH=6145]=`DEPTH`,e[e.STENCIL=6146]=`STENCIL`,e[e.MIN=32775]=`MIN`,e[e.MAX=32776]=`MAX`,e[e.DEPTH_COMPONENT24=33190]=`DEPTH_COMPONENT24`,e[e.STREAM_READ=35041]=`STREAM_READ`,e[e.STREAM_COPY=35042]=`STREAM_COPY`,e[e.STATIC_READ=35045]=`STATIC_READ`,e[e.STATIC_COPY=35046]=`STATIC_COPY`,e[e.DYNAMIC_READ=35049]=`DYNAMIC_READ`,e[e.DYNAMIC_COPY=35050]=`DYNAMIC_COPY`,e[e.DEPTH_COMPONENT32F=36012]=`DEPTH_COMPONENT32F`,e[e.DEPTH32F_STENCIL8=36013]=`DEPTH32F_STENCIL8`,e[e.INVALID_INDEX=4294967295]=`INVALID_INDEX`,e[e.TIMEOUT_IGNORED=-1]=`TIMEOUT_IGNORED`,e[e.MAX_CLIENT_WAIT_TIMEOUT_WEBGL=37447]=`MAX_CLIENT_WAIT_TIMEOUT_WEBGL`,e[e.UNMASKED_VENDOR_WEBGL=37445]=`UNMASKED_VENDOR_WEBGL`,e[e.UNMASKED_RENDERER_WEBGL=37446]=`UNMASKED_RENDERER_WEBGL`,e[e.MAX_TEXTURE_MAX_ANISOTROPY_EXT=34047]=`MAX_TEXTURE_MAX_ANISOTROPY_EXT`,e[e.TEXTURE_MAX_ANISOTROPY_EXT=34046]=`TEXTURE_MAX_ANISOTROPY_EXT`,e[e.R16_EXT=33322]=`R16_EXT`,e[e.RG16_EXT=33324]=`RG16_EXT`,e[e.RGB16_EXT=32852]=`RGB16_EXT`,e[e.RGBA16_EXT=32859]=`RGBA16_EXT`,e[e.R16_SNORM_EXT=36760]=`R16_SNORM_EXT`,e[e.RG16_SNORM_EXT=36761]=`RG16_SNORM_EXT`,e[e.RGB16_SNORM_EXT=36762]=`RGB16_SNORM_EXT`,e[e.RGBA16_SNORM_EXT=36763]=`RGBA16_SNORM_EXT`,e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]=`COMPRESSED_RGB_S3TC_DXT1_EXT`,e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]=`COMPRESSED_RGBA_S3TC_DXT1_EXT`,e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]=`COMPRESSED_RGBA_S3TC_DXT3_EXT`,e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]=`COMPRESSED_RGBA_S3TC_DXT5_EXT`,e[e.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]=`COMPRESSED_SRGB_S3TC_DXT1_EXT`,e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]=`COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`,e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]=`COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`,e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]=`COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`,e[e.COMPRESSED_RED_RGTC1_EXT=36283]=`COMPRESSED_RED_RGTC1_EXT`,e[e.COMPRESSED_SIGNED_RED_RGTC1_EXT=36284]=`COMPRESSED_SIGNED_RED_RGTC1_EXT`,e[e.COMPRESSED_RED_GREEN_RGTC2_EXT=36285]=`COMPRESSED_RED_GREEN_RGTC2_EXT`,e[e.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT=36286]=`COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`,e[e.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]=`COMPRESSED_RGBA_BPTC_UNORM_EXT`,e[e.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493]=`COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`,e[e.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494]=`COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`,e[e.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT=36495]=`COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`,e[e.COMPRESSED_R11_EAC=37488]=`COMPRESSED_R11_EAC`,e[e.COMPRESSED_SIGNED_R11_EAC=37489]=`COMPRESSED_SIGNED_R11_EAC`,e[e.COMPRESSED_RG11_EAC=37490]=`COMPRESSED_RG11_EAC`,e[e.COMPRESSED_SIGNED_RG11_EAC=37491]=`COMPRESSED_SIGNED_RG11_EAC`,e[e.COMPRESSED_RGB8_ETC2=37492]=`COMPRESSED_RGB8_ETC2`,e[e.COMPRESSED_RGBA8_ETC2_EAC=37493]=`COMPRESSED_RGBA8_ETC2_EAC`,e[e.COMPRESSED_SRGB8_ETC2=37494]=`COMPRESSED_SRGB8_ETC2`,e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37495]=`COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`,e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37496]=`COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`,e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37497]=`COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`,e[e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]=`COMPRESSED_RGB_PVRTC_4BPPV1_IMG`,e[e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]=`COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`,e[e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]=`COMPRESSED_RGB_PVRTC_2BPPV1_IMG`,e[e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]=`COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`,e[e.COMPRESSED_RGB_ETC1_WEBGL=36196]=`COMPRESSED_RGB_ETC1_WEBGL`,e[e.COMPRESSED_RGB_ATC_WEBGL=35986]=`COMPRESSED_RGB_ATC_WEBGL`,e[e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]=`COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL`,e[e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]=`COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL`,e[e.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]=`COMPRESSED_RGBA_ASTC_4x4_KHR`,e[e.COMPRESSED_RGBA_ASTC_5x4_KHR=37809]=`COMPRESSED_RGBA_ASTC_5x4_KHR`,e[e.COMPRESSED_RGBA_ASTC_5x5_KHR=37810]=`COMPRESSED_RGBA_ASTC_5x5_KHR`,e[e.COMPRESSED_RGBA_ASTC_6x5_KHR=37811]=`COMPRESSED_RGBA_ASTC_6x5_KHR`,e[e.COMPRESSED_RGBA_ASTC_6x6_KHR=37812]=`COMPRESSED_RGBA_ASTC_6x6_KHR`,e[e.COMPRESSED_RGBA_ASTC_8x5_KHR=37813]=`COMPRESSED_RGBA_ASTC_8x5_KHR`,e[e.COMPRESSED_RGBA_ASTC_8x6_KHR=37814]=`COMPRESSED_RGBA_ASTC_8x6_KHR`,e[e.COMPRESSED_RGBA_ASTC_8x8_KHR=37815]=`COMPRESSED_RGBA_ASTC_8x8_KHR`,e[e.COMPRESSED_RGBA_ASTC_10x5_KHR=37816]=`COMPRESSED_RGBA_ASTC_10x5_KHR`,e[e.COMPRESSED_RGBA_ASTC_10x6_KHR=37817]=`COMPRESSED_RGBA_ASTC_10x6_KHR`,e[e.COMPRESSED_RGBA_ASTC_10x8_KHR=37818]=`COMPRESSED_RGBA_ASTC_10x8_KHR`,e[e.COMPRESSED_RGBA_ASTC_10x10_KHR=37819]=`COMPRESSED_RGBA_ASTC_10x10_KHR`,e[e.COMPRESSED_RGBA_ASTC_12x10_KHR=37820]=`COMPRESSED_RGBA_ASTC_12x10_KHR`,e[e.COMPRESSED_RGBA_ASTC_12x12_KHR=37821]=`COMPRESSED_RGBA_ASTC_12x12_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=37840]=`COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=37841]=`COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=37842]=`COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=37843]=`COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=37844]=`COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=37845]=`COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=37846]=`COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=37847]=`COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=37848]=`COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=37849]=`COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=37850]=`COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=37851]=`COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=37852]=`COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR`,e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=37853]=`COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR`,e[e.QUERY_COUNTER_BITS_EXT=34916]=`QUERY_COUNTER_BITS_EXT`,e[e.CURRENT_QUERY_EXT=34917]=`CURRENT_QUERY_EXT`,e[e.QUERY_RESULT_EXT=34918]=`QUERY_RESULT_EXT`,e[e.QUERY_RESULT_AVAILABLE_EXT=34919]=`QUERY_RESULT_AVAILABLE_EXT`,e[e.TIME_ELAPSED_EXT=35007]=`TIME_ELAPSED_EXT`,e[e.TIMESTAMP_EXT=36392]=`TIMESTAMP_EXT`,e[e.GPU_DISJOINT_EXT=36795]=`GPU_DISJOINT_EXT`,e[e.COMPLETION_STATUS_KHR=37297]=`COMPLETION_STATUS_KHR`,e[e.DEPTH_CLAMP_EXT=34383]=`DEPTH_CLAMP_EXT`,e[e.FIRST_VERTEX_CONVENTION_WEBGL=36429]=`FIRST_VERTEX_CONVENTION_WEBGL`,e[e.LAST_VERTEX_CONVENTION_WEBGL=36430]=`LAST_VERTEX_CONVENTION_WEBGL`,e[e.PROVOKING_VERTEX_WEBL=36431]=`PROVOKING_VERTEX_WEBL`,e[e.POLYGON_MODE_WEBGL=2880]=`POLYGON_MODE_WEBGL`,e[e.POLYGON_OFFSET_LINE_WEBGL=10754]=`POLYGON_OFFSET_LINE_WEBGL`,e[e.LINE_WEBGL=6913]=`LINE_WEBGL`,e[e.FILL_WEBGL=6914]=`FILL_WEBGL`,e[e.MAX_CLIP_DISTANCES_WEBGL=3378]=`MAX_CLIP_DISTANCES_WEBGL`,e[e.MAX_CULL_DISTANCES_WEBGL=33529]=`MAX_CULL_DISTANCES_WEBGL`,e[e.MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL=33530]=`MAX_COMBINED_CLIP_AND_CULL_DISTANCES_WEBGL`,e[e.CLIP_DISTANCE0_WEBGL=12288]=`CLIP_DISTANCE0_WEBGL`,e[e.CLIP_DISTANCE1_WEBGL=12289]=`CLIP_DISTANCE1_WEBGL`,e[e.CLIP_DISTANCE2_WEBGL=12290]=`CLIP_DISTANCE2_WEBGL`,e[e.CLIP_DISTANCE3_WEBGL=12291]=`CLIP_DISTANCE3_WEBGL`,e[e.CLIP_DISTANCE4_WEBGL=12292]=`CLIP_DISTANCE4_WEBGL`,e[e.CLIP_DISTANCE5_WEBGL=12293]=`CLIP_DISTANCE5_WEBGL`,e[e.CLIP_DISTANCE6_WEBGL=12294]=`CLIP_DISTANCE6_WEBGL`,e[e.CLIP_DISTANCE7_WEBGL=12295]=`CLIP_DISTANCE7_WEBGL`,e[e.POLYGON_OFFSET_CLAMP_EXT=36379]=`POLYGON_OFFSET_CLAMP_EXT`,e[e.LOWER_LEFT_EXT=36001]=`LOWER_LEFT_EXT`,e[e.UPPER_LEFT_EXT=36002]=`UPPER_LEFT_EXT`,e[e.NEGATIVE_ONE_TO_ONE_EXT=37726]=`NEGATIVE_ONE_TO_ONE_EXT`,e[e.ZERO_TO_ONE_EXT=37727]=`ZERO_TO_ONE_EXT`,e[e.CLIP_ORIGIN_EXT=37724]=`CLIP_ORIGIN_EXT`,e[e.CLIP_DEPTH_MODE_EXT=37725]=`CLIP_DEPTH_MODE_EXT`,e[e.SRC1_COLOR_WEBGL=35065]=`SRC1_COLOR_WEBGL`,e[e.SRC1_ALPHA_WEBGL=34185]=`SRC1_ALPHA_WEBGL`,e[e.ONE_MINUS_SRC1_COLOR_WEBGL=35066]=`ONE_MINUS_SRC1_COLOR_WEBGL`,e[e.ONE_MINUS_SRC1_ALPHA_WEBGL=35067]=`ONE_MINUS_SRC1_ALPHA_WEBGL`,e[e.MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL=35068]=`MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL`,e[e.MIRROR_CLAMP_TO_EDGE_EXT=34627]=`MIRROR_CLAMP_TO_EDGE_EXT`})(Xm||={});var Zm={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}},Qm=e=>({drawBuffersWEBGL(t){return e.drawBuffers(t)},COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067}),$m=e=>({VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES(){return e.createVertexArray()},deleteVertexArrayOES(t){return e.deleteVertexArray(t)},isVertexArrayOES(t){return e.isVertexArray(t)},bindVertexArrayOES(t){return e.bindVertexArray(t)}}),eh=e=>({VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE(...t){return e.drawArraysInstanced(...t)},drawElementsInstancedANGLE(...t){return e.drawElementsInstanced(...t)},vertexAttribDivisorANGLE(...t){return e.vertexAttribDivisor(...t)}});function th(e=!0){let t=HTMLCanvasElement.prototype;!e&&t.originalGetContext?(t.getContext=t.originalGetContext,t.originalGetContext=void 0):(t.originalGetContext=t.getContext,t.getContext=function(e,t){if(e===`webgl`||e===`experimental-webgl`){let e=this.originalGetContext(`webgl2`,t);return e instanceof HTMLElement&&nh(e),e}return this.originalGetContext(e,t)})}function nh(e){e.getExtension(`EXT_color_buffer_float`);let t={...Zm,WEBGL_disjoint_timer_query:e.getExtension(`EXT_disjoint_timer_query_webgl2`),WEBGL_draw_buffers:Qm(e),OES_vertex_array_object:$m(e),ANGLE_instanced_arrays:eh(e)},n=e.getExtension;e.getExtension=function(r){return n.call(e,r)||(r in t?t[r]:null)};let r=e.getSupportedExtensions;e.getSupportedExtensions=function(){return(r.apply(e)||[])?.concat(Object.keys(t))}}async function rh(e,t){let n=document.getElementsByTagName(`head`)[0];if(!n)throw Error(`loadScript`);let r=document.createElement(`script`);return r.setAttribute(`type`,`text/javascript`),r.setAttribute(`src`,e),t&&(r.id=t),new Promise((t,i)=>{r.onload=t,r.onerror=t=>i(Error(`Unable to load script '${e}': ${t}`)),n.appendChild(r)})}function ih(e){let t=e.luma||{_polyfilled:!1,extensions:{},softwareRenderer:!1};return t._polyfilled??=!1,t.extensions||={},e.luma=t,t}var ah=1,oh=null,sh=!1,ch={debugSpectorJS:z.get(`debug-spectorjs`),debugSpectorJSUrl:`https://cdn.jsdelivr.net/npm/spectorjs@0.9.30/dist/spector.bundle.js`,gl:void 0};async function lh(e){if(!globalThis.SPECTOR)try{await rh(e.debugSpectorJSUrl||ch.debugSpectorJSUrl)}catch(e){z.warn(String(e))}}function uh(e){if(e={...ch,...e},!e.debugSpectorJS)return null;if(!oh&&globalThis.SPECTOR&&!globalThis.luma?.spector){z.probe(ah,"SPECTOR found and initialized. Start with `luma.spector.displayUI()`")();let{Spector:e}=globalThis.SPECTOR;oh=new e,globalThis.luma&&(globalThis.luma.spector=oh)}if(!oh)return null;if(sh||(sh=!0,oh.spyCanvases(),oh?.onCaptureStarted.add(e=>z.info(`Spector capture started:`,e)()),oh?.onCapture.add(e=>{z.info(`Spector capture complete:`,e)(),oh?.getResultUI(),oh?.resultView.display(),oh?.resultView.addCapture(e)})),e.gl){let t=e.gl,n=ih(t),r=n.device;oh?.startCapture(e.gl,500),n.device=r,new Promise(e=>setTimeout(e,2e3)).then(e=>{z.info(`Spector capture stopped after 2 seconds`)(),oh?.stopCapture()})}return oh}var dh=`https://unpkg.com/webgl-debug@2.0.1/index.js`;function fh(e){return e.luma=e.luma||{},e.luma}async function ph(){Vc()&&!globalThis.WebGLDebugUtils&&(globalThis.global=globalThis.global||globalThis,globalThis.global.module={},await rh(dh))}function mh(e,t={}){return t.debugWebGL||t.traceWebGL?gh(e,t):hh(e)}function hh(e){let t=fh(e);return t.realContext?t.realContext:e}function gh(e,t){if(!globalThis.WebGLDebugUtils)return z.warn(`webgl-debug not loaded`)(),e;let n=fh(e);if(n.debugContext)return n.debugContext;globalThis.WebGLDebugUtils.init({...Xm,...e});let r=globalThis.WebGLDebugUtils.makeDebugContext(e,vh.bind(null,t),yh.bind(null,t));for(let e in Xm)!(e in r)&&typeof Xm[e]==`number`&&(r[e]=Xm[e]);class i{}Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.setPrototypeOf(i,r);let a=Object.create(i);return n.realContext=e,n.debugContext=a,a.luma=n,a.debug=!0,a}function _h(e,t){t=Array.from(t).map(e=>e===void 0?`undefined`:e);let n=globalThis.WebGLDebugUtils.glFunctionArgsToString(e,t);return n=`${n.slice(0,100)}${n.length>100?`...`:``}`,`gl.${e}(${n})`}function vh(e,t,n,r){r=Array.from(r).map(e=>e===void 0?`undefined`:e);let i=`${globalThis.WebGLDebugUtils.glEnumToString(t)} in gl.${n}(${globalThis.WebGLDebugUtils.glFunctionArgsToString(n,r)})`;throw z.error(`%cWebGL`,`color: white; background: red; padding: 2px 6px; border-radius: 3px;`,i)(),Error(i)}function yh(e,t,n){let r=``;e.traceWebGL&&z.level>=1&&(r=_h(t,n),z.info(1,`%cWebGL`,`color: white; background: blue; padding: 2px 6px; border-radius: 3px;`,r)());for(let e of n)e===void 0&&(r||=_h(t,n))}var bh=1,xh=class extends wu{type=`webgl`;constructor(){super(),_u.defaultProps={..._u.defaultProps,...ch}}enforceWebGL2(e){th(e)}isSupported(){return typeof WebGL2RenderingContext<`u`}isDeviceHandle(e){return typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext||(typeof WebGLRenderingContext<`u`&&e instanceof WebGLRenderingContext&&z.warn(`WebGL1 is not supported`,e)(),!1)}async attach(e,t={}){let{WebGLDevice:n}=await o(async()=>{let{WebGLDevice:e}=await import(`./webgl-device-CN3CbjsL.js`);return{WebGLDevice:e}},[]);if(e instanceof n)return e;let r=n.getDeviceFromContext(e);if(r)return r;if(!Sh(e))throw Error(`Invalid WebGL2RenderingContext`);let i=t.createCanvasContext===!0?{}:t.createCanvasContext;return new n({...t,_handle:e,createCanvasContext:{canvas:e.canvas,autoResize:!1,...i}})}async create(e={}){let{WebGLDevice:t}=await o(async()=>{let{WebGLDevice:e}=await import(`./webgl-device-CN3CbjsL.js`);return{WebGLDevice:e}},[]),n=[];(e.debugWebGL||e.debug)&&n.push(ph()),e.debugSpectorJS&&n.push(lh(e));let r=await Promise.allSettled(n);for(let e of r)e.status===`rejected`&&z.error(`Failed to initialize debug libraries ${e.reason}`)();try{let n=new t(e);z.groupCollapsed(bh,`WebGLDevice ${n.id} created`)();let r=`\
${n._reused?`Reusing`:`Created`} device with WebGL2 ${n.props.debug?`debug `:``}context: \
${n.info.vendor}, ${n.info.renderer} for canvas: ${n.canvasContext.id}`;return z.probe(bh,r)(),z.table(bh,n.info)(),n}finally{z.groupEnd(bh)(),z.info(bh,`%cWebGL call tracing: luma.log.set('debug-webgl') `,`color: white; background: blue; padding: 2px 6px; border-radius: 3px;`)()}}};function Sh(e){return typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext||!!(e&&typeof e.createVertexArray==`function`)}var Ch=new xh,wh={3042:!1,32773:new Float32Array([0,0,0,0]),32777:32774,34877:32774,32969:1,32968:0,32971:1,32970:0,3106:new Float32Array([0,0,0,0]),3107:[!0,!0,!0,!0],2884:!1,2885:1029,2929:!1,2931:1,2932:513,2928:new Float32Array([0,1]),2930:!0,3024:!0,35725:null,36006:null,36007:null,34229:null,34964:null,2886:2305,33170:4352,2849:1,32823:!1,32824:0,10752:0,32926:!1,32928:!1,32938:1,32939:!1,3089:!1,3088:new Int32Array([0,0,1024,1024]),2960:!1,2961:0,2968:4294967295,36005:4294967295,2962:519,2967:0,2963:4294967295,34816:519,36003:0,36004:4294967295,2964:7680,2965:7680,2966:7680,34817:7680,34818:7680,34819:7680,2978:[0,0,1024,1024],36389:null,36662:null,36663:null,35053:null,35055:null,35723:4352,36010:null,35977:!1,3333:4,3317:4,37440:!1,37441:!1,37443:37444,3330:0,3332:0,3331:0,3314:0,32878:0,3316:0,3315:0,32877:0},q=(e,t,n)=>t?e.enable(n):e.disable(n),Th=(e,t,n)=>e.hint(n,t),Eh=(e,t,n)=>e.pixelStorei(n,t),Dh=(e,t,n)=>{let r=n===36006?36009:36008;return e.bindFramebuffer(r,t)},Oh=(e,t,n)=>{let r={34964:34962,36662:36662,36663:36663,35053:35051,35055:35052}[n];e.bindBuffer(r,t)};function kh(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ah={3042:q,32773:(e,t)=>e.blendColor(...t),32777:`blendEquation`,34877:`blendEquation`,32969:`blendFunc`,32968:`blendFunc`,32971:`blendFunc`,32970:`blendFunc`,3106:(e,t)=>e.clearColor(...t),3107:(e,t)=>e.colorMask(...t),2884:q,2885:(e,t)=>e.cullFace(t),2929:q,2931:(e,t)=>e.clearDepth(t),2932:(e,t)=>e.depthFunc(t),2928:(e,t)=>e.depthRange(...t),2930:(e,t)=>e.depthMask(t),3024:q,35723:Th,35725:(e,t)=>e.useProgram(t),36007:(e,t)=>e.bindRenderbuffer(36161,t),36389:(e,t)=>e.bindTransformFeedback?.(36386,t),34229:(e,t)=>e.bindVertexArray(t),36006:Dh,36010:Dh,34964:Oh,36662:Oh,36663:Oh,35053:Oh,35055:Oh,2886:(e,t)=>e.frontFace(t),33170:Th,2849:(e,t)=>e.lineWidth(t),32823:q,32824:`polygonOffset`,10752:`polygonOffset`,35977:q,32926:q,32928:q,32938:`sampleCoverage`,32939:`sampleCoverage`,3089:q,3088:(e,t)=>e.scissor(...t),2960:q,2961:(e,t)=>e.clearStencil(t),2968:(e,t)=>e.stencilMaskSeparate(1028,t),36005:(e,t)=>e.stencilMaskSeparate(1029,t),2962:`stencilFuncFront`,2967:`stencilFuncFront`,2963:`stencilFuncFront`,34816:`stencilFuncBack`,36003:`stencilFuncBack`,36004:`stencilFuncBack`,2964:`stencilOpFront`,2965:`stencilOpFront`,2966:`stencilOpFront`,34817:`stencilOpBack`,34818:`stencilOpBack`,34819:`stencilOpBack`,2978:(e,t)=>e.viewport(...t),34383:q,10754:q,12288:q,12289:q,12290:q,12291:q,12292:q,12293:q,12294:q,12295:q,3333:Eh,3317:Eh,37440:Eh,37441:Eh,37443:Eh,3330:Eh,3332:Eh,3331:Eh,3314:Eh,32878:Eh,3316:Eh,3315:Eh,32877:Eh,framebuffer:(e,t)=>{let n=t&&`handle`in t?t.handle:t;return e.bindFramebuffer(36160,n)},blend:(e,t)=>t?e.enable(3042):e.disable(3042),blendColor:(e,t)=>e.blendColor(...t),blendEquation:(e,t)=>{let n=typeof t==`number`?[t,t]:t;e.blendEquationSeparate(...n)},blendFunc:(e,t)=>{let n=t?.length===2?[...t,...t]:t;e.blendFuncSeparate(...n)},clearColor:(e,t)=>e.clearColor(...t),clearDepth:(e,t)=>e.clearDepth(t),clearStencil:(e,t)=>e.clearStencil(t),colorMask:(e,t)=>e.colorMask(...t),cull:(e,t)=>t?e.enable(2884):e.disable(2884),cullFace:(e,t)=>e.cullFace(t),depthTest:(e,t)=>t?e.enable(2929):e.disable(2929),depthFunc:(e,t)=>e.depthFunc(t),depthMask:(e,t)=>e.depthMask(t),depthRange:(e,t)=>e.depthRange(...t),dither:(e,t)=>t?e.enable(3024):e.disable(3024),derivativeHint:(e,t)=>{e.hint(35723,t)},frontFace:(e,t)=>e.frontFace(t),mipmapHint:(e,t)=>e.hint(33170,t),lineWidth:(e,t)=>e.lineWidth(t),polygonOffsetFill:(e,t)=>t?e.enable(32823):e.disable(32823),polygonOffset:(e,t)=>e.polygonOffset(...t),sampleCoverage:(e,t)=>e.sampleCoverage(t[0],t[1]||!1),scissorTest:(e,t)=>t?e.enable(3089):e.disable(3089),scissor:(e,t)=>e.scissor(...t),stencilTest:(e,t)=>t?e.enable(2960):e.disable(2960),stencilMask:(e,t)=>{t=kh(t)?t:[t,t];let[n,r]=t;e.stencilMaskSeparate(1028,n),e.stencilMaskSeparate(1029,r)},stencilFunc:(e,t)=>{t=kh(t)&&t.length===3?[...t,...t]:t;let[n,r,i,a,o,s]=t;e.stencilFuncSeparate(1028,n,r,i),e.stencilFuncSeparate(1029,a,o,s)},stencilOp:(e,t)=>{t=kh(t)&&t.length===3?[...t,...t]:t;let[n,r,i,a,o,s]=t;e.stencilOpSeparate(1028,n,r,i),e.stencilOpSeparate(1029,a,o,s)},viewport:(e,t)=>e.viewport(...t)};function J(e,t,n){return t[e]===void 0?n[e]:t[e]}var jh={blendEquation:(e,t,n)=>e.blendEquationSeparate(J(32777,t,n),J(34877,t,n)),blendFunc:(e,t,n)=>e.blendFuncSeparate(J(32969,t,n),J(32968,t,n),J(32971,t,n),J(32970,t,n)),polygonOffset:(e,t,n)=>e.polygonOffset(J(32824,t,n),J(10752,t,n)),sampleCoverage:(e,t,n)=>e.sampleCoverage(J(32938,t,n),J(32939,t,n)),stencilFuncFront:(e,t,n)=>e.stencilFuncSeparate(1028,J(2962,t,n),J(2967,t,n),J(2963,t,n)),stencilFuncBack:(e,t,n)=>e.stencilFuncSeparate(1029,J(34816,t,n),J(36003,t,n),J(36004,t,n)),stencilOpFront:(e,t,n)=>e.stencilOpSeparate(1028,J(2964,t,n),J(2965,t,n),J(2966,t,n)),stencilOpBack:(e,t,n)=>e.stencilOpSeparate(1029,J(34817,t,n),J(34818,t,n),J(34819,t,n))},Mh={enable:(e,t)=>e({[t]:!0}),disable:(e,t)=>e({[t]:!1}),pixelStorei:(e,t,n)=>e({[t]:n}),hint:(e,t,n)=>e({[t]:n}),useProgram:(e,t)=>e({35725:t}),bindRenderbuffer:(e,t,n)=>e({36007:n}),bindTransformFeedback:(e,t,n)=>e({36389:n}),bindVertexArray:(e,t)=>e({34229:t}),bindFramebuffer:(e,t,n)=>{switch(t){case 36160:return e({36006:n,36010:n});case 36009:return e({36006:n});case 36008:return e({36010:n});default:return null}},bindBuffer:(e,t,n)=>{let r={34962:[34964],36662:[36662],36663:[36663],35051:[35053],35052:[35055]}[t];return r?e({[r]:n}):{valueChanged:!0}},blendColor:(e,t,n,r,i)=>e({32773:new Float32Array([t,n,r,i])}),blendEquation:(e,t)=>e({32777:t,34877:t}),blendEquationSeparate:(e,t,n)=>e({32777:t,34877:n}),blendFunc:(e,t,n)=>e({32969:t,32968:n,32971:t,32970:n}),blendFuncSeparate:(e,t,n,r,i)=>e({32969:t,32968:n,32971:r,32970:i}),clearColor:(e,t,n,r,i)=>e({3106:new Float32Array([t,n,r,i])}),clearDepth:(e,t)=>e({2931:t}),clearStencil:(e,t)=>e({2961:t}),colorMask:(e,t,n,r,i)=>e({3107:[t,n,r,i]}),cullFace:(e,t)=>e({2885:t}),depthFunc:(e,t)=>e({2932:t}),depthRange:(e,t,n)=>e({2928:new Float32Array([t,n])}),depthMask:(e,t)=>e({2930:t}),frontFace:(e,t)=>e({2886:t}),lineWidth:(e,t)=>e({2849:t}),polygonOffset:(e,t,n)=>e({32824:t,10752:n}),sampleCoverage:(e,t,n)=>e({32938:t,32939:n}),scissor:(e,t,n,r,i)=>e({3088:new Int32Array([t,n,r,i])}),stencilMask:(e,t)=>e({2968:t,36005:t}),stencilMaskSeparate:(e,t,n)=>e({[t===1028?2968:36005]:n}),stencilFunc:(e,t,n,r)=>e({2962:t,2967:n,2963:r,34816:t,36003:n,36004:r}),stencilFuncSeparate:(e,t,n,r,i)=>e({[t===1028?2962:34816]:n,[t===1028?2967:36003]:r,[t===1028?2963:36004]:i}),stencilOp:(e,t,n,r)=>e({2964:t,2965:n,2966:r,34817:t,34818:n,34819:r}),stencilOpSeparate:(e,t,n,r,i)=>e({[t===1028?2964:34817]:n,[t===1028?2965:34818]:r,[t===1028?2966:34819]:i}),viewport:(e,t,n,r,i)=>e({2978:[t,n,r,i]})},Nh=(e,t)=>e.isEnabled(t),Ph={3042:Nh,2884:Nh,2929:Nh,3024:Nh,32823:Nh,32926:Nh,32928:Nh,3089:Nh,2960:Nh,35977:Nh},Fh=new Set([34016,36388,36387,35983,35368,34965,35739,35738,3074,34853,34854,34855,34856,34857,34858,34859,34860,34861,34862,34863,34864,34865,34866,34867,34868,35097,32873,35869,32874,34068]);function Ih(e,t){if(zh(t))return;let n={};for(let r in t){let i=Number(r),a=Ah[r];a&&(typeof a==`string`?n[a]=!0:a(e,t[r],i))}let r=e.lumaState?.cache;if(r)for(let i in n){let n=jh[i];n(e,t,r)}}function Lh(e,t=wh){if(typeof t==`number`){let n=t,r=Ph[n];return r?r(e,n):e.getParameter(n)}let n=Array.isArray(t)?t:Object.keys(t),r={};for(let t of n){let n=Ph[t];r[t]=n?n(e,Number(t)):e.getParameter(Number(t))}return r}function Rh(e){Ih(e,wh)}function zh(e){for(let t in e)return!1;return!0}function Bh(e,t){if(e===t)return!0;if(Vh(e)&&Vh(t)&&e.length===t.length){for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}return!1}function Vh(e){return Array.isArray(e)||ArrayBuffer.isView(e)}var Hh=class{static get(e){return e.lumaState}gl;program=null;stateStack=[];enable=!0;cache=null;log;initialized=!1;constructor(e,t){this.gl=e,this.log=t?.log||(()=>{}),this._updateCache=this._updateCache.bind(this),Object.seal(this)}push(e={}){this.stateStack.push({})}pop(){let e=this.stateStack[this.stateStack.length-1];Ih(this.gl,e),this.stateStack.pop()}trackState(e,t){if(this.cache=t?.copyState?Lh(e):Object.assign({},wh),this.initialized)throw Error(`WebGLStateTracker`);this.initialized=!0,this.gl.lumaState=this,Gh(e);for(let t in Mh){let n=Mh[t];Wh(e,t,n)}Uh(e,`getParameter`),Uh(e,`isEnabled`)}_updateCache(e){let t=!1,n,r=this.stateStack.length>0?this.stateStack[this.stateStack.length-1]:null;for(let i in e){let a=e[i],o=this.cache[i];Bh(a,o)||(t=!0,n=o,r&&!(i in r)&&(r[i]=o),this.cache[i]=a)}return{valueChanged:t,oldValue:n}}};function Uh(e,t){let n=e[t].bind(e);e[t]=function(t){if(t===void 0||Fh.has(t))return n(t);let r=Hh.get(e);return t in r.cache||(r.cache[t]=n(t)),r.enable?r.cache[t]:n(t)},Object.defineProperty(e[t],"name",{value:`${t}-from-cache`,configurable:!1})}function Wh(e,t,n){if(!e[t])return;let r=e[t].bind(e);e[t]=function(...t){let{valueChanged:i,oldValue:a}=n(Hh.get(e)._updateCache,...t);return i&&r(...t),a},Object.defineProperty(e[t],"name",{value:`${t}-to-cache`,configurable:!1})}function Gh(e){let t=e.useProgram.bind(e);e.useProgram=function(n){let r=Hh.get(e);r.program!==n&&(t(n),r.program=n)}}var Kh=.001,qh=64,Jh=4,Yh=2,Xh=class{constructor(){this.pointsTextureSize=0,this.linksTextureSize=0,this.alpha=1,this.transform=Ls(),this.screenSize=[0,0],this.mousePosition=[0,0],this.screenMousePosition=[0,0],this.searchArea=[[0,0],[0,0]],this.isSimulationRunning=!1,this.simulationProgress=0,this.maxPointSize=qh,this.hoveredPoint=void 0,this.focusedPoint=void 0,this.draggingPointIndex=void 0,this.hoveredLinkIndex=void 0,this.hostHoveredPointIndex=void 0,this.hostHoveredLinkIndex=void 0,this.adjustedSpaceSize=hg.spaceSize,this.isSpaceKeyPressed=!1,this.webglMaxTextureSize=16384,this.hoveredPointRingColor=[1,1,1,gg],this.focusedPointRingColor=[1,1,1,_g],this.outlinedPointRingColor=[1,1,1,1],this.highlightedPointSet=void 0,this.outlinedPointSet=void 0,this.hoveredLinkColor=[-1,-1,-1,-1],this.greyoutPointColor=[-1,-1,-1,-1],this.isDarkenGreyout=!1,this.isLinkHoveringEnabled=!1,this.alphaTarget=0,this.scalePointX=As(),this.scalePointY=As(),this.random=new wc,this._backgroundColor=[0,0,0,0],this.alphaDecay=e=>1-Kh**(1/e)}get backgroundColor(){return this._backgroundColor}get transformationMatrix4x4(){let e=this.transform;if(e.length!==9)throw Error(`Transform must be a 9-element array (3x3 matrix), got ${e.length} elements`);return[e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],0,0,0,0,1]}set backgroundColor(e){this._backgroundColor=e;let t=$h(e[0],e[1],e[2]);if(this.div){let n=t>.65?`black`:`white`;this.div.style.setProperty(`--cosmosgl-attribution-color`,n),this.div.style.setProperty(`--cosmosgl-error-message-color`,n),this.div.style.backgroundColor=`rgba(${e[0]*255}, ${e[1]*255}, ${e[2]*255}, ${e[3]})`}this.isDarkenGreyout=t<.65}addRandomSeed(e){this.random=this.random.clone(e)}getRandomFloat(e,t){return this.random.float(e,t)}adjustSpaceSize(e,t){(e<=0||!isFinite(e))&&(console.error(`Invalid spaceSize value: ${e}. Using default value of ${hg.spaceSize}`),e=hg.spaceSize),e<2&&(console.warn(`spaceSize (${e}) is too small. Using minimum value of 2`),e=2),!Number.isFinite(t)||t<=0||t<2?(console.warn(`Invalid webglMaxTextureSize: ${t}. Using configSpaceSize without WebGL limit adjustment.`),this.adjustedSpaceSize=e):e>=t?(this.adjustedSpaceSize=Math.max(t/2,2),console.warn(`The \`spaceSize\` has been reduced to ${this.adjustedSpaceSize} due to WebGL limits`)):this.adjustedSpaceSize=e}setWebGLMaxTextureSize(e){this.webglMaxTextureSize=e}updateScreenSize(e,t){let{adjustedSpaceSize:n}=this;this.screenSize=[e,t],this.scalePointX.domain([0,n]).range([(e-n)/2,(e+n)/2]),this.scalePointY.domain([n,0]).range([(t-n)/2,(t+n)/2])}scaleX(e){return this.scalePointX(e)}scaleY(e){return this.scalePointY(e)}setHoveredPointRingColor(e){let t=Qh(e);this.hoveredPointRingColor[0]=t[0],this.hoveredPointRingColor[1]=t[1],this.hoveredPointRingColor[2]=t[2]}setFocusedPointRingColor(e){let t=Qh(e);this.focusedPointRingColor[0]=t[0],this.focusedPointRingColor[1]=t[1],this.focusedPointRingColor[2]=t[2]}setOutlinedPointRingColor(e){let t=Qh(e);this.outlinedPointRingColor[0]=t[0],this.outlinedPointRingColor[1]=t[1],this.outlinedPointRingColor[2]=t[2],this.outlinedPointRingColor[3]=t[3]}setHighlightedPointSet(e){this.highlightedPointSet=e?new Set(e):void 0}setOutlinedPointSet(e){this.outlinedPointSet=e?new Set(e):void 0}setGreyoutPointColor(e){if(e===void 0){this.greyoutPointColor=[-1,-1,-1,-1];return}let t=Qh(e);this.greyoutPointColor[0]=t[0],this.greyoutPointColor[1]=t[1],this.greyoutPointColor[2]=t[2],this.greyoutPointColor[3]=t[3]}updateLinkHoveringEnabled(e){this.isLinkHoveringEnabled=!!(e.onLinkClick||e.onLinkContextMenu||e.onLinkMouseOver||e.onLinkMouseOut),this.isLinkHoveringEnabled||(this.hoveredLinkIndex=void 0)}setHoveredLinkColor(e){if(e===void 0){this.hoveredLinkColor=[-1,-1,-1,-1];return}let t=Qh(e);this.hoveredLinkColor[0]=t[0],this.hoveredLinkColor[1]=t[1],this.hoveredLinkColor[2]=t[2],this.hoveredLinkColor[3]=t[3]}setFocusedPoint(e){this.focusedPoint=e===void 0?void 0:{index:e}}addAlpha(e){return(this.alphaTarget-this.alpha)*this.alphaDecay(e)}},Zh=e=>Array.isArray(e);function Qh(e){let t;if(Zh(e))t=e;else{let n=on(e),r=n?.rgb();t=[(r?.r??0)/255,(r?.g??0)/255,(r?.b??0)/255,n?.opacity??1]}return t}function $h(e,t,n){return .2126*e+.7152*t+.0722*n}function eg(e,t,n=0,r=0,i,a){return e.readPixelsToArrayWebGL(t,{sourceX:n,sourceY:r,sourceWidth:i,sourceHeight:a})}function tg(){let e=new Uint32Array(2);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(36).padStart(7,`0`)).join(``)}function ng(e,t){let n=[],r=Math.min(e.length/4,t??1/0);for(let t=0;t<r;t+=1)e[t*4]!==0&&n.push(t);return n}function rg(e,t){switch(e.info.type){case`webgl`:{let n=e.gl;return(n.getParameter(n.ALIASED_POINT_SIZE_RANGE)?.[1]??qh)/t}case`webgpu`:return qh/t;default:return qh/t}}function ig(e,t,n){return Math.min(Math.max(e,t),n)}function ag(e){return e!=null&&!Number.isNaN(e)}function og(e,t){return Number.isNaN(e[t*2])||Number.isNaN(e[t*2+1])}function sg(e,t){return Ao.sanitize(e,{ALLOWED_TAGS:[`a`,`b`,`i`,`em`,`strong`,`span`,`div`,`p`,`br`],ALLOWED_ATTR:[`href`,`target`,`class`,`id`,`style`],ALLOW_DATA_ATTR:!1,...t})}var cg=(e=>(e[e.Circle=0]=`Circle`,e[e.Square=1]=`Square`,e[e.Triangle=2]=`Triangle`,e[e.Diamond=3]=`Diamond`,e[e.Pentagon=4]=`Pentagon`,e[e.Hexagon=5]=`Hexagon`,e[e.Star=6]=`Star`,e[e.Cross=7]=`Cross`,e[e.None=8]=`None`,e))(cg||{}),lg=(e=>(e[e.Solid=0]=`Solid`,e[e.Dashed=1]=`Dashed`,e[e.Dotted=2]=`Dotted`,e))(lg||{}),ug=e=>{if(!e)return;let{offsets:t,neighbors:n,linkIndices:r}=e,i=Array(t.length-1).fill(void 0);for(let e=0;e<i.length;e++){let a=t[e],o=t[e+1];if(a===o)continue;let s=Array(o-a);for(let e=a;e<o;e++)s[e-a]=[n[e],r[e]];i[e]=s}return i},dg=class{constructor(e){this.sourcePointsNumber=0,this.targetPointsNumber=0,this._isLinkGroupingStale=!0,this._config=e}get pointsNumber(){return this.pointPositions&&this.pointPositions.length/2}get linksNumber(){return this.links&&this.links.length/2}get sourceIndexToTargetIndices(){return this._sourceIndexToTargetIndices??=ug(this.linksBySource),this._sourceIndexToTargetIndices}get targetIndexToSourceIndices(){return this._targetIndexToSourceIndices??=ug(this.linksByTarget),this._targetIndexToSourceIndices}get defaultRgba(){return this._defaultRgba??=Qh(this._config.pointDefaultColor),this._defaultRgba}get inputLinks(){return this._inputLinks}set inputLinks(e){this._inputLinks=e,this._isLinkGroupingStale=!0}updatePoints(){this.inputPointPositions!==void 0&&this.inputPointPositions.length%2!=0&&(console.warn(`Invalid point positions length: ${this.inputPointPositions.length}. The array must hold [x, y] pairs — the trailing value was ignored.`),this.inputPointPositions=this.inputPointPositions.subarray(0,this.inputPointPositions.length-1)),this.pointPositions!==this.inputPointPositions&&(this.sourcePointsNumber=this.pointPositions?this.pointPositions.length/2:0,this.pointPositions=this.inputPointPositions,this.targetPointsNumber=this.pointPositions?this.pointPositions.length/2:0)}updatePointColor(){this.pointsNumber===void 0?this.pointColors=void 0:(this._defaultRgba=void 0,this.pointColors=this.inputPointColors===void 0||this.inputPointColors.length/4!==this.pointsNumber?new Float32Array(this.pointsNumber*4).fill(NaN):this.inputPointColors)}getResolvedPointColorChannel(e,t){let n=this.pointColors?.[e*4+t];return ag(n)?n:this.pointPositions&&og(this.pointPositions,e)?0:this.defaultRgba[t]}updatePointSize(){this.pointSizes=this.pointsNumber===void 0?void 0:this.inputPointSizes===void 0||this.inputPointSizes.length!==this.pointsNumber?new Float32Array(this.pointsNumber).fill(NaN):this.inputPointSizes}getResolvedPointSize(e){return this.resolvePointSize(e,this.pointSizes?.[e])}resolvePointSize(e,t){return ag(t)?t:this.pointPositions&&og(this.pointPositions,e)?0:this._config.pointDefaultSize}updatePointShape(){if(this.pointsNumber===void 0){this.pointShapes=void 0;return}let{pointDefaultShape:e}=this._config,t=typeof e==`string`?Number(e):e,n=Number.isInteger(t)&&t>=0&&t<=8?t:hg.pointDefaultShape;if(this.inputPointShapes===void 0||this.inputPointShapes.length!==this.pointsNumber)this.pointShapes=new Float32Array(this.pointsNumber).fill(n);else{this.pointShapes=new Float32Array(this.inputPointShapes);let e=this.pointShapes;for(let t=0;t<e.length;t++){let r=e[t]??-1;(!Number.isInteger(r)||r<0||r>8)&&(e[t]=n)}}}updatePointImageIndices(){if(this.pointsNumber===void 0)this.pointImageIndices=void 0;else if(this.inputPointImageIndices===void 0||this.inputPointImageIndices.length!==this.pointsNumber)this.pointImageIndices=new Float32Array(this.pointsNumber).fill(-1);else{let e=new Float32Array(this.inputPointImageIndices);for(let t=0;t<e.length;t++){let n=e[t],r=n===void 0?NaN:n;!Number.isFinite(r)||r<0?e[t]=-1:e[t]=Math.trunc(r)}this.pointImageIndices=e}}updatePointImageSizes(){if(this.pointsNumber===void 0)this.pointImageSizes=void 0;else if(this.inputPointImageSizes===void 0||this.inputPointImageSizes.length!==this.pointsNumber){this.pointImageSizes=new Float32Array(this.pointsNumber);for(let e=0;e<this.pointsNumber;e++)this.pointImageSizes[e]=this.getResolvedPointSize(e)}else{this.pointImageSizes=new Float32Array(this.inputPointImageSizes);for(let e=0;e<this.pointImageSizes.length;e++)ag(this.pointImageSizes[e])||(this.pointImageSizes[e]=this.getResolvedPointSize(e))}}pointDrawsImage(e){let t=this.pointImageIndices?.[e]??-1;return t>=0&&t<(this.inputImageData?.length??0)}getResolvedPointFootprint(e,t){let n=this.pointDrawsImage(e)?this.pointImageSizes?.[e]:void 0;return Math.max(t??this.getResolvedPointSize(e),n??0)}isPointIndex(e){return e!==void 0&&Number.isInteger(e)&&e>=0&&e<(this.pointsNumber??0)}updateLinks(){this.inputLinks!==void 0&&this.inputLinks.length%2!=0&&(console.warn(`Invalid links length: ${this.inputLinks.length}. The array must hold [source, target] pairs — the trailing value was ignored.`),this.inputLinks=this.inputLinks.subarray(0,this.inputLinks.length-1)),this.links=this.inputLinks}updateLinkColor(){if(this.linksNumber===void 0){this.linkColors=void 0;return}let e=Qh(this._config.linkDefaultColor);if(this.inputLinkColors===void 0||this.inputLinkColors.length/4!==this.linksNumber){this.linkColors=new Float32Array(this.linksNumber*4);for(let t=0;t<this.linkColors.length/4;t++)this.linkColors[t*4]=e[0],this.linkColors[t*4+1]=e[1],this.linkColors[t*4+2]=e[2],this.linkColors[t*4+3]=e[3]}else{this.linkColors=this.inputLinkColors;for(let t=0;t<this.linkColors.length/4;t++)ag(this.linkColors[t*4])||(this.linkColors[t*4]=e[0]),ag(this.linkColors[t*4+1])||(this.linkColors[t*4+1]=e[1]),ag(this.linkColors[t*4+2])||(this.linkColors[t*4+2]=e[2]),ag(this.linkColors[t*4+3])||(this.linkColors[t*4+3]=e[3])}}updateLinkWidth(){if(this.linksNumber===void 0){this.linkWidths=void 0;return}let e=this._config.linkDefaultWidth;if(this.inputLinkWidths===void 0||this.inputLinkWidths.length!==this.linksNumber)this.linkWidths=new Float32Array(this.linksNumber).fill(e);else{this.linkWidths=this.inputLinkWidths;for(let t=0;t<this.linkWidths.length;t++)ag(this.linkWidths[t])||(this.linkWidths[t]=e)}}updateLinkStyles(){if(this.linksNumber===void 0){this.linkStyles=void 0;return}let{linkDefaultStyle:e}=this._config,t=typeof e==`string`?Number(e):e,n=Number.isInteger(t)&&t>=0&&t<=2?t:hg.linkDefaultStyle;if(this.inputLinkStyles===void 0||this.inputLinkStyles.length!==this.linksNumber)this.linkStyles=new Float32Array(this.linksNumber).fill(n);else{this.linkStyles=new Float32Array(this.inputLinkStyles);let e=this.linkStyles;for(let t=0;t<e.length;t++){let r=e[t]??-1;(!Number.isInteger(r)||r<0||r>2)&&(e[t]=n)}}}updateArrows(){if(this.linksNumber===void 0){this.linkArrows=void 0;return}let e=this._config.linkDefaultArrows;this.linkArrows=this.linkArrowsBoolean===void 0||this.linkArrowsBoolean.length!==this.linksNumber?Array(this.linksNumber).fill(+e):this.linkArrowsBoolean.map(e=>+e)}updateLinkStrength(){this.linksNumber===void 0&&(this.linkStrength=void 0),this.linkStrength=this.inputLinkStrength===void 0||this.inputLinkStrength.length!==this.linksNumber?void 0:this.inputLinkStrength}updateClusters(){this.pointsNumber===void 0?(this.pointClusters=void 0,this.clusterPositions=void 0):(this.pointClusters=this.inputPointClusters===void 0||this.inputPointClusters.length!==this.pointsNumber?void 0:this.inputPointClusters,this.clusterPositions=this.inputClusterPositions===void 0?void 0:this.inputClusterPositions,this.clusterStrength=this.inputClusterStrength===void 0||this.inputClusterStrength.length!==this.pointsNumber?void 0:this.inputClusterStrength)}update(){this.updatePoints(),this.updatePointColor(),this.updatePointSize(),this.updatePointShape(),this.updatePointImageIndices(),this.updatePointImageSizes(),this.updateLinks(),this.updateLinkColor(),this.updateLinkWidth(),this.updateArrows(),this.updateLinkStyles(),this.updateLinkStrength(),this.updateClusters(),(this._isLinkGroupingStale||this._linkGroupingPointsNumber!==this.pointsNumber)&&(this._groupLinksByPoint(),this._calculateDegrees())}getNeighboringPointIndices(e){let t=Array.isArray(e)?e:[e],n=new Set,r=[this.linksBySource,this.linksByTarget];for(let e of t)if(this.isPointIndex(e))for(let t of r){if(!t)continue;let{offsets:r,neighbors:i}=t,a=r[e+1];for(let t=r[e];t<a;t++)n.add(i[t])}return[...n]}getConnectedLinkIndices(e){let t=new Set(Array.isArray(e)?e:[e]),n=[];if(!this.linksBySource)return n;let{offsets:r,neighbors:i,linkIndices:a}=this.linksBySource;for(let e of t){if(!this.isPointIndex(e))continue;let o=r[e+1];for(let s=r[e];s<o;s++)t.has(i[s])&&n.push(a[s])}return n}getConnectedPointIndices(e){let t=Array.isArray(e)?e:[e],n=new Set;if(this.links===void 0)return[];let r=this.linksNumber??0;for(let e of t){if(!Number.isInteger(e)||e<0||e>=r)continue;let t=this.links[e*2],i=this.links[e*2+1];!this.isPointIndex(t)||!this.isPointIndex(i)||(n.add(t),n.add(i))}return[...n]}_groupLinksByPoint(){let{links:e,linksNumber:t,pointsNumber:n}=this;if(this._isLinkGroupingStale=!1,this._linkGroupingPointsNumber=n,this._sourceIndexToTargetIndices=void 0,this._targetIndexToSourceIndices=void 0,e===void 0||t===void 0||n===void 0){this.linksBySource=void 0,this.linksByTarget=void 0;return}let r=new Uint32Array(n+1),i=new Uint32Array(n+1);for(let n=0;n<t;n++){let t=e[n*2],a=e[n*2+1];!this.isPointIndex(t)||!this.isPointIndex(a)||(r[t+1]=r[t+1]+1,i[a+1]=i[a+1]+1)}for(let e=0;e<n;e++)r[e+1]=r[e+1]+r[e],i[e+1]=i[e+1]+i[e];let a=r[n],o={offsets:r,neighbors:new Uint32Array(a),linkIndices:new Uint32Array(a)},s={offsets:i,neighbors:new Uint32Array(a),linkIndices:new Uint32Array(a)},c=r.slice(0,n),l=i.slice(0,n);for(let n=0;n<t;n++){let t=e[n*2],r=e[n*2+1];if(!this.isPointIndex(t)||!this.isPointIndex(r))continue;let i=c[t];c[t]=i+1,o.neighbors[i]=r,o.linkIndices[i]=n;let a=l[r];l[r]=a+1,s.neighbors[a]=t,s.linkIndices[a]=n}this.linksBySource=o,this.linksByTarget=s}_calculateDegrees(){let e=this.pointsNumber;if(e===void 0){this.degree=void 0,this.inDegree=void 0,this.outDegree=void 0;return}this.degree=Array(e).fill(0),this.inDegree=Array(e).fill(0),this.outDegree=Array(e).fill(0);let t=this.linksBySource?.offsets,n=this.linksByTarget?.offsets;if(t&&n)for(let r=0;r<e;r++){let e=n[r+1]-n[r],i=t[r+1]-t[r];this.inDegree[r]=e,this.outDegree[r]=i,this.degree[r]=e+i}}},Y=(e=>(e.Positions=`positions`,e.PointColors=`pointColors`,e.PointSizes=`pointSizes`,e.LinkColors=`linkColors`,e.LinkWidths=`linkWidths`,e))(Y||{}),fg=(e=>(e.Linear=`linear`,e.QuadIn=`quad-in`,e.QuadOut=`quad-out`,e.QuadInOut=`quad-in-out`,e.CubicIn=`cubic-in`,e.CubicOut=`cubic-out`,e.CubicInOut=`cubic-in-out`,e.SinIn=`sin-in`,e.SinOut=`sin-out`,e.SinInOut=`sin-in-out`,e.ExpIn=`exp-in`,e.ExpOut=`exp-out`,e.ExpInOut=`exp-in-out`,e.CircleIn=`circle-in`,e.CircleOut=`circle-out`,e.CircleInOut=`circle-in-out`,e))(fg||{}),pg={linear:li,"quad-in":ui,"quad-out":di,"quad-in-out":fi,"cubic-in":pi,"cubic-out":mi,"cubic-in-out":hi,"sin-in":vi,"sin-out":yi,"sin-in-out":bi,"exp-in":Si,"exp-out":Ci,"exp-in-out":wi,"circle-in":Ti,"circle-out":Ei,"circle-in-out":Di},mg=class{constructor(e){this.progress=1,this.startTime=0,this.pendingProperties=new Set,this.activeProperties=new Set,this.activeDuration=0,this.config=e}get duration(){return this.overrideDuration??this.config.transitionDuration}get isPending(){return this.pendingProperties.size>0}get isActive(){return this.activeProperties.size>0}setDurationOverride(e){this.overrideDuration=e!==void 0&&Number.isFinite(e)?e:void 0}isPendingFor(e){return this.pendingProperties.has(e)}isActiveFor(e){return this.activeProperties.has(e)}queue(e){this.pendingProperties.add(e)}dequeue(e){this.pendingProperties.delete(e)}start(){var e,t,n,r;let i=this.duration;if(this.overrideDuration=void 0,this.isPending){if(i<=0){let n=this.isActive;this.pendingProperties.clear(),this.clearActiveCycle(),n&&((t=(e=this.config).onTransitionEnd)==null||t.call(e,!0));return}this.isActive&&this.end(!0),this.activeDuration=i,this.startTime=performance.now(),this.progress=0,this.activeProperties=new Set(this.pendingProperties),this.pendingProperties.clear(),(r=(n=this.config).onTransitionStart)==null||r.call(n)}}step(){var e,t;if(!this.isActive)return;let n=this.activeDuration;if(n<=0){this.end(!0);return}let r=Math.min((performance.now()-this.startTime)/n,1),i=this.applyEasing(r);this.progress=i,(t=(e=this.config).onTransition)==null||t.call(e,i),r>=1&&this.end(!1)}end(e){var t,n;this.isActive&&(this.clearActiveCycle(),(n=(t=this.config).onTransitionEnd)==null||n.call(t,e))}abort(){this.pendingProperties.clear(),this.overrideDuration=void 0,this.clearActiveCycle()}applyEasing(e){return(pg[this.config.transitionEasing]??li)(e)}clearActiveCycle(){this.startTime=0,this.progress=1,this.activeProperties.clear()}},hg={enableSimulation:!0,enableRenderLoop:!0,transitionDuration:800,transitionEasing:fg.CubicInOut,backgroundColor:`#222222`,spaceSize:4096,pointDefaultColor:`#b3b3b3`,pointDefaultSize:4,pointDefaultShape:cg.Circle,pointOpacity:1,pointGreyoutOpacity:void 0,pointGreyoutColor:void 0,pointSizeScale:1,pointOcclusionCulling:!0,scalePointsOnZoom:!1,hoveredPointCursor:`auto`,renderHoveredPointRing:!1,hoveredPointRingColor:`white`,focusedPointRingColor:`white`,focusedPointIndex:void 0,highlightedPointIndices:void 0,outlinedPointIndices:void 0,outlinedPointRingColor:`white`,renderLinks:!0,linkDefaultColor:`#666666`,linkDefaultWidth:1,linkDefaultStyle:lg.Solid,linkDashLength:8,linkDashGap:4,linkColorInterpolateFromEndpoints:!1,linkOpacity:1,linkGreyoutOpacity:.1,linkWidthScale:1,scaleLinksOnZoom:!1,linkBlending:!0,curvedLinks:!1,curvedLinkSegments:19,curvedLinkWeight:.8,curvedLinkControlPointDistance:.5,linkDefaultArrows:!1,linkArrowsSizeScale:1,linkVisibilityDistanceRange:[50,150],linkVisibilityMinTransparency:.25,hoveredLinkCursor:`auto`,hoveredLinkColor:void 0,hoveredLinkWidthIncrease:5,highlightedLinkIndices:void 0,focusedLinkIndex:void 0,focusedLinkWidthIncrease:5,simulationDecay:5e3,simulationGravity:.25,simulationCenter:0,simulationRepulsion:1,simulationRepulsionTheta:1.15,simulationLinkSpring:1,simulationLinkDistance:10,simulationLinkDistRandomVariationRange:[1,1.2],simulationRepulsionFromMouse:2,simulationFriction:.85,simulationCluster:.1,simulationCollision:0,simulationCollisionRadius:void 0,simulationCollisionPadding:0,enableRightClickRepulsion:!1,onSimulationStart:void 0,onSimulationTick:void 0,onSimulationEnd:void 0,onSimulationPause:void 0,onSimulationUnpause:void 0,onTransitionStart:void 0,onTransition:void 0,onTransitionEnd:void 0,onClick:void 0,onPointClick:void 0,onLinkClick:void 0,onBackgroundClick:void 0,onContextMenu:void 0,onPointContextMenu:void 0,onLinkContextMenu:void 0,onBackgroundContextMenu:void 0,onMouseMove:void 0,onPointMouseOver:void 0,onPointMouseOut:void 0,onLinkMouseOver:void 0,onLinkMouseOut:void 0,onZoomStart:void 0,onZoom:void 0,onZoomEnd:void 0,onDragStart:void 0,onDrag:void 0,onDragEnd:void 0,showFPSMonitor:!1,pixelRatio:typeof window<`u`&&window.devicePixelRatio||2,enableZoom:!0,enableSimulationDuringZoom:!1,initialZoomLevel:void 0,enableDrag:!1,fitViewOnInit:!0,fitViewDelay:250,fitViewPadding:.1,fitViewDuration:250,fitViewByPointsInRect:void 0,fitViewByPointIndices:void 0,pointSamplingDistance:100,linkSamplingDistance:100,randomSeed:void 0,rescalePositions:void 0,attribution:``},gg=.7,_g=.95,vg=1.3;function yg(){let e={};for(let[t,n]of Object.entries(hg))e[t]=Array.isArray(n)?[...n]:n;return e}function bg(e){Object.assign(e,yg())}function xg(e,t,n=!1){let r={};for(let[e,i]of Object.entries(t))if(i!==void 0)r[e]=i;else if(n){let t=hg[e];r[e]=Array.isArray(t)?[...t]:t}Object.assign(e,r)}var Sg=`
  #gl-bench {
    position:absolute;
    right:0;
    top:0;
    z-index:1000;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  #gl-bench div {
    position: relative;
    display: block;
    margin: 4px;
    padding: 0 7px 0 10px;
    background: #5f69de;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0.9;
  }
  #gl-bench svg {
    height: 60px;
    margin: 0 -1px;
  }
  #gl-bench text {
    font-size: 12px;
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 700;
    dominant-baseline: middle;
    text-anchor: middle;
  }
  #gl-bench .gl-mem {
    font-size: 9px;
  }
  #gl-bench line {
    stroke-width: 5;
    stroke: #112211;
    stroke-linecap: round;
  }
  #gl-bench polyline {
    fill: none;
    stroke: #112211;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3.5;
  }
  #gl-bench rect {
    fill: #8288e4;
  }
  #gl-bench .opacity {
    stroke: #8288e4;
  }
`,Cg=class{constructor(e,t){this.container=t??document.body,this.destroy();let n=e.getContext(`webgl`)||e.getContext(`experimental-webgl`);this.bench=new Dc(n,{css:Sg,dom:this.container})}begin(){var e;(e=this.bench)==null||e.begin(`frame`)}end(e){var t,n;(t=this.bench)==null||t.end(`frame`),(n=this.bench)==null||n.nextFrame(e)}destroy(){var e,t;this.bench=void 0,(e=this.container.querySelector(`:scope > #gl-bench`))==null||e.remove(),(t=this.container.querySelector(`:scope > #gl-bench-style`))==null||t.remove()}},X=Object.freeze({blend:!1,depthWriteEnabled:!1,depthCompare:`always`,stencilCompare:`always`,cullMode:`none`,frontFace:`ccw`}),wg=class{constructor(e,t,n,r,i){this._debugRandomNumber=Math.floor(Math.random()*1e3),this.device=e,this.config=t,this.store=n,this.data=r,i&&(this.points=i)}},Tg={name:`conicParametricCurve`,vs:`
vec2 conicParametricCurve(vec2 A, vec2 B, vec2 ControlPoint, float t, float w) {
  vec2 divident = (1.0 - t) * (1.0 - t) * A + 2.0 * (1.0 - t) * t * w * ControlPoint + t * t * B;
  float divisor = (1.0 - t) * (1.0 - t) + 2.0 * (1.0 - t) * t * w + t * t;
  return divident / divisor;
}
`},Eg={name:`pickingColor`,fs:`
vec3 encodePickingColor(float index) {
  float i = index + 1.0;
  return vec3(mod(i, 256.0), mod(floor(i / 256.0), 256.0), floor(i / 65536.0)) / 255.0;
}
`},Dg=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgbaColor;
in vec2 pos;
in float arrowLength;
in float useArrow;
in float smoothing;
in float arrowWidthFactor;
in float linkIndex;
flat in float vLinkStyle;
flat in float vLinkDashSpan;
flat in float vLinkDashWidth;
flat in vec4 vEndpointColorA;
flat in vec4 vEndpointColorB;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawLineFragmentUniforms {
  float renderMode;
  float linkDashLength;
  float linkDashGap;
  float linkColorInterpolateFromEndpoints;
  float hoveredLinkIndex;
  vec4 hoveredLinkColor;
  float linkBlending;
  float pickingAlpha;
  float pickingIndexOffset;
} drawLineFrag;

#define renderMode drawLineFrag.renderMode
#define linkDashLength drawLineFrag.linkDashLength
#define linkDashGap drawLineFrag.linkDashGap
#define linkColorInterpolateFromEndpoints drawLineFrag.linkColorInterpolateFromEndpoints
#define hoveredLinkIndex drawLineFrag.hoveredLinkIndex
#define hoveredLinkColor drawLineFrag.hoveredLinkColor
#define linkBlending drawLineFrag.linkBlending
#define pickingAlpha drawLineFrag.pickingAlpha
#define pickingIndexOffset drawLineFrag.pickingIndexOffset
#else
// renderMode: 0.0 = normal rendering, 1.0 = index buffer rendering for picking, 3.0 = host picking colors
uniform float renderMode;
uniform float linkDashLength;
uniform float linkDashGap;
uniform float linkColorInterpolateFromEndpoints;
uniform float hoveredLinkIndex;
uniform vec4 hoveredLinkColor;
uniform float linkBlending;
uniform float pickingAlpha;
uniform float pickingIndexOffset;
#endif

out vec4 fragColor;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

// LinkStyle enum values (must match \`LinkStyle\` in modules/GraphData). Compared with
// exact equality, like the point shapes: the CPU sanitizer guarantees exact integers
// and vLinkStyle is flat, so an unknown future style matches nothing and renders solid.
const float LINK_STYLE_DASHED = 1.0;
const float LINK_STYLE_DOTTED = 2.0;

// Anti-aliased on/off mask for one dash period. \`phase\` is distance-along-line in px,
// \`on\` is the lit dash length, \`period\` is on + gap, \`aa\` is the smoothing half-width in px.
float strokeMask(float phase, float on, float period, float aa) {
  float m = mod(phase, period);
  return smoothstep(-aa, aa, m) * (1.0 - smoothstep(on - aa, on + aa, m));
}

void main() {
  // Geometric coverage only (stroke / arrow / dash). Color alpha is applied after.
  float coverage = 1.0;
  vec3 color = rgbaColor.rgb;

  // Arrowhead extent along the link (pos.x space) — used by the arrow rendering
  // and by the dash mask, which leaves the arrowhead solid.
  float end_arrow = 0.5 + arrowLength / 2.0;
  float start_arrow = end_arrow - arrowLength;

  // Gradient links: interpolate RGB from the source point color to the target point color
  // along the link. Opacity (visibility / greyout) still comes from rgbaColor.a.
  if (linkColorInterpolateFromEndpoints > 0.5) {
    color = mix(vEndpointColorA.rgb, vEndpointColorB.rgb, clamp(pos.x, 0.0, 1.0));
  }

  if (useArrow > 0.5) {
    // pos.y spans the quad, which is the arrow width plus a ramp. arrowWidthFactor is a fraction
    // of the arrow width alone, so edges derived from it scale by (1 - smoothing) = arrow / quad.
    float preRamp = 1.0 - smoothing;
    float bodyEdge = (0.5 - arrowWidthFactor / 2.0) * preRamp;
    float headBase = 0.5 * preRamp;
    // Body edge, ramp centred on it as for the plain stroke.
    float linkCoverage = smoothstep(bodyEdge + smoothing / 2.0, bodyEdge - smoothing / 2.0, abs(pos.y));
    float arrowCoverage = 1.0;
    if (pos.x > start_arrow && pos.x < start_arrow + arrowLength) {
      // Arrowhead taper, from headBase at its base to the centreline at its tip; ramp centred on it.
      float taper = headBase * (1.0 - map(pos.x, start_arrow, end_arrow, 0.0, 1.0));
      arrowCoverage = 1.0 - smoothstep(taper - smoothing / 2.0, taper + smoothing / 2.0, abs(pos.y));
      if (linkCoverage != arrowCoverage) {
        linkCoverage = max(linkCoverage, arrowCoverage);
      }
    }
    coverage = linkCoverage;
  } else coverage = smoothstep(0.5, 0.5 - smoothing, abs(pos.y));

  // Dashed / dotted stroke patterns. Applied to the visible pass only (renderMode == 0.0)
  // so that gaps stay fully pickable in the index pass. The arrowhead region is left solid.
  if (renderMode < 0.5 && (vLinkStyle == LINK_STYLE_DASHED || vLinkStyle == LINK_STYLE_DOTTED)) {
    bool inArrowHead = (useArrow > 0.5) && (pos.x > start_arrow) && (pos.x < end_arrow);
    if (!inArrowHead) {
      // Distance along the link in the dash pattern's space (screen px or world units; see the vertex shader).
      // fwidth() gives the screen-space rate of change, so the ramp is EDGE_RAMP_PX device pixels in either space.
      float phase = clamp(pos.x, 0.0, 1.0) * vLinkDashSpan;
      if (vLinkStyle == LINK_STYLE_DASHED) {
        float period = max(linkDashLength + linkDashGap, 0.001);
        // Half a ramp in the pattern's units: fwidth(phase) is the change in phase per device pixel.
        float aa = max(fwidth(phase), 1e-4) * (EDGE_RAMP_PX * 0.5);
        coverage *= strokeMask(phase, linkDashLength, period, aa);
      } else {
        // Dotted: round dots sized to the stroke, the quad less its ramp; spaced by diameter + gap.
        float diameter = vLinkDashWidth * (1.0 - smoothing);
        if (linkBlending < 0.5) {
          // Unblended keeps only pixels whose centre is inside the dot. A dot under √2 device
          // px can miss every pixel centre and vanish; at √2 it always holds one. Pattern units
          // per device pixel from the phase's gradient (the pattern space is isotropic).
          float pxInPattern = max(length(vec2(dFdx(phase), dFdy(phase))), 1e-4);
          diameter = max(diameter, 1.4142136 * pxInPattern);
        }
        float period = max(diameter + linkDashGap, 0.001);
        float localX = mod(phase, period) - period * 0.5;
        float localY = pos.y * vLinkDashWidth;
        float r = length(vec2(localX, localY));
        // Half a ramp in the pattern's units: fwidth(r) is the change in r per device pixel.
        float aa = max(fwidth(r), 1e-4) * (EDGE_RAMP_PX * 0.5);
        coverage *= 1.0 - smoothstep(diameter * 0.5 - aa, diameter * 0.5 + aa, r);
      }
    }
  }

  float opacity = rgbaColor.a * coverage;

  // Apply hover color if this is the hovered link and hover color is defined.
  // Done last — after the gradient and the dash mask — so hover wins over every
  // color source (per-link color from the vertex stage and the endpoint gradient
  // alike), while the dash pattern and AA stay intact in the hover color.
  if (hoveredLinkIndex == linkIndex && hoveredLinkColor.a > -0.5) {
    color = hoveredLinkColor.rgb;
    opacity *= hoveredLinkColor.a;
  }

  if (renderMode > 2.5) {
    // Host picking: the link's index and the host's alpha, where the stroke covers at
    // least half the fragment and the link is not fully transparent; dash gaps stay
    // pickable, as in the engine's own index pass
    if (coverage < 0.5 || rgbaColor.a <= 0.0) discard;
    fragColor = vec4(encodePickingColor(linkIndex + pickingIndexOffset), pickingAlpha);
  } else if (renderMode > 0.0) {
    if (opacity <= 0.0) discard;
    fragColor = vec4(linkIndex, 0.0, 0.0, 1.0);
  } else if (linkBlending < 0.5) {
    // Unblended: opaque, hard edges. Soft fringes would write full RGB with partial
    // alpha; canvas compositing treats that as premultiplied and the edge reads
    // brighter than the solid core. Every fade is centred on its geometric edge, so
    // coverage 0.5 is that edge: keep the pixels whose centre is inside the stroke.
    // The vertex stage keeps unblended strokes at least a device pixel wide.
    if (coverage < 0.5 || opacity <= 0.0) discard;
    fragColor = vec4(color, 1.0);
  } else {
    fragColor = vec4(color, opacity);
  }

}
`,Og=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 position, pointA, pointB;
in vec4 sourceColor;
in vec4 targetColor;
in float sourceWidth;
in float targetWidth;
in float arrow;
in float linkIndices;
in float linkStyle;

uniform sampler2D positionsTexture;
uniform sampler2D linkStatus;
uniform sampler2D exitTexture;
uniform sampler2D pointColorsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawLineUniforms {
  mat4 transformationMatrix;
  float widthScale;
  float linkArrowsSizeScale;
  float spaceSize;
  vec2 screenSize;
  vec2 linkVisibilityDistanceRange;
  float linkVisibilityMinTransparency;
  float linkOpacity;
  float greyoutOpacity;
  float curvedWeight;
  float curvedLinkControlPointDistance;
  float curvedLinkSegments;
  float scaleLinksOnZoom;
  float maxPointSize;
  float renderMode;
  float hoveredLinkIndex;
  float hoveredLinkWidthIncrease;
  float isLinkHighlightingActive;
  float linkStatusTextureSize;
  float focusedLinkIndex;
  float focusedLinkWidthIncrease;
  float transitionProgress;
  float animateColors;
  float animateWidths;
  float animatePositions;
  vec4 pointDefaultColor;
  float linkColorInterpolateFromEndpoints;
  float linkBlending;
  float pixelRatio;
} drawLine;

#define transformationMatrix drawLine.transformationMatrix
#define widthScale drawLine.widthScale
#define linkArrowsSizeScale drawLine.linkArrowsSizeScale
#define spaceSize drawLine.spaceSize
#define screenSize drawLine.screenSize
#define linkVisibilityDistanceRange drawLine.linkVisibilityDistanceRange
#define linkVisibilityMinTransparency drawLine.linkVisibilityMinTransparency
#define linkOpacity drawLine.linkOpacity
#define greyoutOpacity drawLine.greyoutOpacity
#define curvedWeight drawLine.curvedWeight
#define curvedLinkControlPointDistance drawLine.curvedLinkControlPointDistance
#define curvedLinkSegments drawLine.curvedLinkSegments
#define scaleLinksOnZoom drawLine.scaleLinksOnZoom
#define maxPointSize drawLine.maxPointSize
#define renderMode drawLine.renderMode
#define hoveredLinkIndex drawLine.hoveredLinkIndex
#define hoveredLinkWidthIncrease drawLine.hoveredLinkWidthIncrease
#define isLinkHighlightingActive drawLine.isLinkHighlightingActive
#define linkStatusTextureSize drawLine.linkStatusTextureSize
#define focusedLinkIndex drawLine.focusedLinkIndex
#define focusedLinkWidthIncrease drawLine.focusedLinkWidthIncrease
#define transitionProgress drawLine.transitionProgress
#define animateColors drawLine.animateColors
#define animateWidths drawLine.animateWidths
#define animatePositions drawLine.animatePositions
#define pointDefaultColor drawLine.pointDefaultColor
#define linkColorInterpolateFromEndpoints drawLine.linkColorInterpolateFromEndpoints
#define linkBlending drawLine.linkBlending
#define pixelRatio drawLine.pixelRatio
#else
uniform mat3 transformationMatrix;
uniform float widthScale;
uniform float linkArrowsSizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform vec2 linkVisibilityDistanceRange;
uniform float linkVisibilityMinTransparency;
uniform float linkOpacity;
uniform float greyoutOpacity;
uniform float curvedWeight;
uniform float curvedLinkControlPointDistance;
uniform float curvedLinkSegments;
uniform bool scaleLinksOnZoom;
uniform float maxPointSize;
// renderMode: 0.0 = normal rendering, 1.0 = index buffer rendering for picking
uniform float renderMode;
uniform float hoveredLinkIndex;
uniform float hoveredLinkWidthIncrease;
uniform float isLinkHighlightingActive;
uniform float linkStatusTextureSize;
uniform float focusedLinkIndex;
uniform float focusedLinkWidthIncrease;
uniform float transitionProgress;
uniform float animateColors;
uniform float animateWidths;
uniform float animatePositions;
uniform vec4 pointDefaultColor;
uniform float linkColorInterpolateFromEndpoints;
uniform float linkBlending;
uniform float pixelRatio;
#endif

out vec4 rgbaColor;
out vec2 pos;
out float arrowLength;
out float useArrow;
out float smoothing;
out float arrowWidthFactor;
out float linkIndex;
// Per-instance constants (no per-vertex variation), so \`flat\` skips interpolation.
flat out float vLinkStyle;
flat out float vLinkDashSpan;
flat out float vLinkDashWidth;
flat out vec4 vEndpointColorA;
flat out vec4 vEndpointColorB;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

// Resolves NaN color channels the way the point draw shader does: NaN means "use the
// default" — the config default, blended toward the exit default as the endpoint fades
// out. Mirrors resolveColor in draw-points.vert.
vec4 resolveColor(vec4 color, float exitRamp) {
  vec4 defaultColor = mix(pointDefaultColor, vec4(EXIT_DEFAULT_COLOR_CHANNEL), exitRamp);
  return mix(color, defaultColor, isnan(color));
}

float calculateLinkWidth(float width) {
  float linkWidth;
  if (scaleLinksOnZoom > 0.0) {
    // Use original width if links should scale with zoom
    linkWidth = width;
  } else {
    // Adjust width based on zoom level to maintain visual size
    linkWidth = width / transformationMatrix[0][0];
    // Apply a non-linear scaling to avoid extreme widths
    linkWidth *= min(5.0, max(1.0, transformationMatrix[0][0] * 0.01));
  }
  // Limit link width based on whether it has an arrow
  if (useArrow > 0.5) {
    return min(linkWidth, (maxPointSize * 2.0) / transformationMatrix[0][0]);
  } else {
    return min(linkWidth, maxPointSize / transformationMatrix[0][0]);
  }
}

float calculateArrowWidth(float arrowWidth) {
  if (scaleLinksOnZoom > 0.0) {
    return arrowWidth;
  } else {
    // Apply the same scaling logic as calculateLinkWidth to maintain proportionality
    arrowWidth = arrowWidth / transformationMatrix[0][0];
    // Apply the same non-linear scaling to avoid extreme widths
    arrowWidth *= min(5.0, max(1.0, transformationMatrix[0][0] * 0.01));
    return arrowWidth;
  }
}

void main() {
  pos = position;
  linkIndex = linkIndices;
  vLinkStyle = linkStyle;

  ivec2 pointTexelA = ivec2(pointA);
  ivec2 pointTexelB = ivec2(pointB);

  vec4 pointPositionA = texelFetch(positionsTexture, pointTexelA, 0);
  vec4 pointPositionB = texelFetch(positionsTexture, pointTexelB, 0);
  vec2 a = pointPositionA.xy;
  vec2 b = pointPositionB.xy;

  // Skip links touching an absent (NaN position) point — interpolating from a NaN
  // endpoint would produce garbage geometry. Collapse the link off-screen. This only
  // catches snap removals: an animated removal freezes the endpoint at its last real
  // position, so absence must be read from the exit texture below.
  if (isnan(a.x) || isnan(a.y) || isnan(b.x) || isnan(b.y)) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Exit status of both endpoints (R = previous absence, G = current absence). A link
  // is only as present as its endpoints.
  vec4 exitStatusA = texelFetch(exitTexture, pointTexelA, 0);
  vec4 exitStatusB = texelFetch(exitTexture, pointTexelB, 0);

  // Picking must not report a link to a removed point even mid-fade — same rule as
  // point picking, which excludes on current absence.
  if (renderMode > 0.0 && (exitStatusA.g > 0.5 || exitStatusB.g > 0.5)) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Visible pass: fade the link with the same animated exit ramp the point fade uses
  // (blend R→G during a position transition, settled G otherwise), so a removed
  // point's links fade out in sync with it instead of dangling at full opacity.
  float exitA = animatePositions > 0.0 ? mix(exitStatusA.r, exitStatusA.g, transitionProgress) : exitStatusA.g;
  float exitB = animatePositions > 0.0 ? mix(exitStatusB.r, exitStatusB.g, transitionProgress) : exitStatusB.g;
  float exitPresence = (1.0 - exitA) * (1.0 - exitB);
  if (exitPresence <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Sample the source/target point colors so the fragment shader can build a gradient
  // along the link. Skipped entirely when the gradient is off — the fragment shader
  // only reads these varyings inside its own gradient branch, keyed on the same flag.
  // The texture mirrors GraphData.pointColors, so channels may be NaN ("use the
  // default") — resolve them with the endpoint's exit ramp, like the point draw.
  if (linkColorInterpolateFromEndpoints > 0.5) {
    vEndpointColorA = resolveColor(texelFetch(pointColorsTexture, pointTexelA, 0), exitA);
    vEndpointColorB = resolveColor(texelFetch(pointColorsTexture, pointTexelB, 0), exitB);
  }

  // Calculate direction vector and its perpendicular
  vec2 xBasis = b - a;
  vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));

  // Calculate link distance and control point for curved link
  float linkDist = length(xBasis);
  float h = curvedLinkControlPointDistance;
  vec2 controlPoint = (a + b) / 2.0 + yBasis * linkDist * h;

  // Convert link distance to screen pixels
  float linkDistPx = linkDist * transformationMatrix[0][0];

  // Dash/dot pattern space. When links keep a constant on-screen size (scaleLinksOnZoom = false)
  // the pattern is measured in screen pixels (fixed dash size, but it slides as the link's
  // on-screen length changes with zoom). When links scale with zoom it is measured in world units,
  // which locks the pattern to the link so it scales with zoom instead of crawling.
  float dashUnitScale = scaleLinksOnZoom > 0.0 ? 1.0 : transformationMatrix[0][0];
  vLinkDashSpan = linkDist * dashUnitScale;

  float lineWidthBase = animateWidths > 0.0
    ? mix(sourceWidth, targetWidth, transitionProgress)
    : targetWidth;
  vec4 lineColor = animateColors > 0.0
    ? mix(sourceColor, targetColor, transitionProgress)
    : targetColor;
  
  // Calculate line width using the width scale
  float linkWidth = lineWidthBase * widthScale;
  // A width of 0 draws nothing, as a point of size 0 does: culled here, before the hover and
  // focus increases and the one-pixel floor could widen an absent link. Not pickable either.
  if (linkWidth <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  float k = 2.0;
  // Arrow width is proportionally larger than the line width
  float arrowWidth = linkWidth * k;
  arrowWidth *= linkArrowsSizeScale;

  // Ensure arrow width difference is non-negative to prevent unwanted changes to link width
  float arrowWidthDifference = max(0.0, arrowWidth - linkWidth);

  // Calculate arrow width in pixels
  float arrowWidthPx = calculateArrowWidth(arrowWidth);

  // Calculate arrow length proportional to its width
  // 0.866 is approximately sqrt(3)/2 - related to equilateral triangle geometry
  // Cap the length to avoid overly long arrows on short links
  arrowLength = min(0.3, (0.866 * arrowWidthPx * 2.0) / linkDist);

  useArrow = arrow;
  if (useArrow > 0.5) {
    linkWidth += arrowWidthDifference;
  }

  arrowWidthFactor = arrowWidthDifference / linkWidth;

  // Calculate final link width in pixels with smoothing
  float linkWidthPx = calculateLinkWidth(linkWidth);
    
  if (renderMode > 0.0) {
    // Add 5 pixels padding for better hover detection
    linkWidthPx += 5.0 / transformationMatrix[0][0];
    // Match the visible-pass width increases so the pickable area covers the full rendered link
    if (hoveredLinkIndex == linkIndex) {
      linkWidthPx += hoveredLinkWidthIncrease / transformationMatrix[0][0];
    }
    if (focusedLinkIndex == linkIndex) {
      linkWidthPx += focusedLinkWidthIncrease / transformationMatrix[0][0];
    }
  } else {
    // Add pixel increase if this is the hovered link
    if (hoveredLinkIndex == linkIndex) {
      linkWidthPx += hoveredLinkWidthIncrease / transformationMatrix[0][0];
    }
    // Add pixel increase if this is the focused link
    if (focusedLinkIndex == linkIndex) {
      linkWidthPx += focusedLinkWidthIncrease / transformationMatrix[0][0];
    }
  }
  // Center a one-ramp-wide fade on each stroke edge.
  // Strokes thinner than the ramp use the ramp width with reduced alpha.
  // Units: EDGE_RAMP_PX is device px; / pixelRatio → CSS px; / k → world, k = transformationMatrix[0][0]
  // (the matrix carries no DPR). Widths are extruded in world space, so unlike gl_PointSize they
  // never multiply by pixelRatio. The *Px values below are world units.
  float smoothingPx = (EDGE_RAMP_PX / pixelRatio) / transformationMatrix[0][0];
  float thinAlpha = min(linkWidthPx / smoothingPx, 1.0);
  float minWidthPx = smoothingPx;
  if (linkBlending < 0.5) {
    // Unblended strokes cannot be dimmed: the fragment cuts them at the edge instead, and a
    // stroke under a device pixel is drawn one pixel wide (its body, when it has an arrowhead).
    thinAlpha = 1.0;
    float bodyShare = useArrow > 0.5 ? 1.0 - arrowWidthFactor : 1.0;
    // One device px → world, the same chain as the ramp.
    minWidthPx = (1.0 / pixelRatio) / transformationMatrix[0][0] / bodyShare;
  }
  linkWidthPx = max(linkWidthPx, minWidthPx) + smoothingPx;
  smoothing = smoothingPx / linkWidthPx;

  // Quad width (stroke + ramp) in vLinkDashSpan's pattern-space units; the fragment takes the ramp back off.
  vLinkDashWidth = linkWidthPx * dashUnitScale;



  // Calculate final color with opacity based on link distance
  vec3 rgbColor = lineColor.rgb;
  // Adjust opacity based on link distance
  float opacity = lineColor.a * linkOpacity * max(linkVisibilityMinTransparency, map(linkDistPx, linkVisibilityDistanceRange.g, linkVisibilityDistanceRange.r, 0.0, 1.0));
  // Fade with the exit ramp of the endpoints (1 = both fully present).
  opacity *= exitPresence;
  // A stroke drawn at ramp width: alpha scales it back to its true width.
  opacity *= thinAlpha;

  // Apply greyed-out status from the link status texture. Blended rendering dims
  // greyed links by greyoutOpacity. Unblended rendering hides them instead: alpha is
  // ignored at write time, links render opaque and can only overwrite each other, so a
  // dimmed link drawn later would cut into highlighted links; collapsing the instance
  // also skips its fill cost. Runs in the picking pass too — a hidden link is not
  // hoverable, matching what is on screen.
  if (isLinkHighlightingActive > 0.0 && linkStatusTextureSize > 0.0) {
    int statusTexSize = int(linkStatusTextureSize);
    int statusIndex = int(linkIndices);
    ivec2 statusTexel = ivec2(statusIndex % statusTexSize, statusIndex / statusTexSize);
    vec4 linkStatusValue = texelFetch(linkStatus, statusTexel, 0);
    if (linkStatusValue.r > 0.0) {
      if (linkBlending < 0.5) {
        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        return;
      }
      opacity *= greyoutOpacity;
    }
  }

  // Pass final color to fragment shader. Hover color is applied in the fragment
  // shader, after the endpoint gradient, so it wins for gradient links too.
  rgbaColor = vec4(rgbColor, opacity);

  // Calculate position on the curved path
  float t = position.x;
  float w = curvedWeight;
  
  float tPrev = t - 1.0 / curvedLinkSegments;
  float tNext = t + 1.0 / curvedLinkSegments;
  
  vec2 pointCurr = conicParametricCurve(a, b, controlPoint, t, w);
  
  vec2 pointPrev = conicParametricCurve(a, b, controlPoint, max(0.0, tPrev), w);
  vec2 pointNext = conicParametricCurve(a, b, controlPoint, min(tNext, 1.0), w);
  
  vec2 xBasisCurved = pointNext - pointPrev;
  vec2 yBasisCurved = normalize(vec2(-xBasisCurved.y, xBasisCurved.x));
  
  pointCurr += yBasisCurved * linkWidthPx * position.y;
  
  // Transform to clip space coordinates
  vec2 p = 2.0 * pointCurr / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  
  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif
  
  gl_Position = vec4(final.rg, 0, 1);
}`,kg=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  fragColor = rgba;
}
`,Ag=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 pointA;
in vec2 pointB;
in float linkIndices;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform fillSampledLinksUniforms {
  mat4 transformationMatrix;
  float spaceSize;
  vec2 screenSize;
  float curvedWeight;
  float curvedLinkControlPointDistance;
  float curvedLinkSegments;
} fillSampledLinks;

#define transformationMatrix fillSampledLinks.transformationMatrix
#define spaceSize fillSampledLinks.spaceSize
#define screenSize fillSampledLinks.screenSize
#define curvedWeight fillSampledLinks.curvedWeight
#define curvedLinkControlPointDistance fillSampledLinks.curvedLinkControlPointDistance
#define curvedLinkSegments fillSampledLinks.curvedLinkSegments
#else
uniform float spaceSize;
uniform vec2 screenSize;
uniform float curvedWeight;
uniform float curvedLinkControlPointDistance;
uniform float curvedLinkSegments;
uniform mat3 transformationMatrix;
#endif

out vec4 rgba;

void main() {
  ivec2 pointTexelA = ivec2(pointA);
  ivec2 pointTexelB = ivec2(pointB);

  // Skip a link touching an absent (faded-out) point. exit.G = current absence.
  if (texelFetch(exitTexture, pointTexelA, 0).g > 0.5 ||
      texelFetch(exitTexture, pointTexelB, 0).g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 posA = texelFetch(positionsTexture, pointTexelA, 0);
  vec4 posB = texelFetch(positionsTexture, pointTexelB, 0);
  vec2 a = posA.rg;
  vec2 b = posB.rg;

  vec2 tangent = b - a;
  float angle = -atan(tangent.y, tangent.x);

  vec2 mid;
  if (curvedLinkSegments <= 1.0) {
    mid = (a + b) * 0.5;
  } else if (curvedLinkControlPointDistance != 0.0 && curvedWeight != 0.0) {
    vec2 xBasis = b - a;
    vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
    float linkDist = length(xBasis);
    float h = curvedLinkControlPointDistance;
    vec2 controlPoint = (a + b) / 2.0 + yBasis * linkDist * h;
    mid = conicParametricCurve(a, b, controlPoint, 0.5, curvedWeight);
  } else {
    mid = (a + b) * 0.5;
  }

  vec2 p = 2.0 * mid / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  vec2 pointScreenPosition = (final.xy + 1.0) * screenSize / 2.0;
  rgba = vec4(linkIndices, mid.x, mid.y, angle);
  float i = (pointScreenPosition.x + 0.5) / screenSize.x;
  float j = (pointScreenPosition.y + 0.5) / screenSize.y;
  gl_Position = vec4(2.0 * vec2(i, j) - 1.0, 0.0, 1.0);

  gl_PointSize = 1.0;
}
`,jg=class{constructor(e,t){this.buffer=null,this.sync=null,this.isInFlight=!1,this.gl=e,this.data=new Float32Array(t)}get inFlight(){return this.isInFlight}issue(e,t,n,r,i){if(this.isInFlight)return!1;let{gl:a}=this;if(r*i*4>this.data.length||(this.buffer||=a.createBuffer(),!this.buffer))return!1;let o=a.getParameter(a.READ_FRAMEBUFFER_BINDING);return a.bindFramebuffer(a.READ_FRAMEBUFFER,e),a.bindBuffer(a.PIXEL_PACK_BUFFER,this.buffer),a.bufferData(a.PIXEL_PACK_BUFFER,this.data.byteLength,a.STREAM_READ),a.readPixels(t,n,r,i,a.RGBA,a.FLOAT,0),a.bindBuffer(a.PIXEL_PACK_BUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,o),this.sync=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0),a.flush(),this.isInFlight=this.sync!==null,this.isInFlight}poll(){if(!this.isInFlight||!this.sync||!this.buffer)return null;let{gl:e}=this,t=e.clientWaitSync(this.sync,0,0);return t===e.TIMEOUT_EXPIRED||(e.deleteSync(this.sync),this.sync=null,this.isInFlight=!1,t!==e.ALREADY_SIGNALED&&t!==e.CONDITION_SATISFIED)?null:(e.bindBuffer(e.PIXEL_PACK_BUFFER,this.buffer),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,this.data),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),this.data)}cancel(){this.sync&&=(this.gl.deleteSync(this.sync),null),this.isInFlight=!1}destroy(){this.cancel(),this.buffer&&=(this.gl.deleteBuffer(this.buffer),null)}},Mg=.5,Ng=1536,Pg=9;function Fg(e,t){if(e.length!==t.length)return!1;for(let[n,r]of e.entries())if(r!==t[n])return!1;return!0}function Ig(e,t){let n=Math.min(Mg,Ng/Math.max(e,t));return{width:Math.max(Pg,Math.ceil(e*n)),height:Math.max(Pg,Math.ceil(t*n))}}function Lg(e,t,n,r,i,a){let o=e/i*n,s=t/a*r,c=Math.floor(Pg/2);return{x:Math.min(Math.max(Math.round(o)-c,0),e-Pg),y:Math.min(Math.max(Math.round(s)-c,0),t-Pg),centerX:o,centerY:s}}function Rg(e){let t=e[0];return e[3]>0&&t>=0?t:void 0}function zg(e,t,n){let r=-1,i=[0,0],a=1/0;for(let o=0;o<Pg;o+=1)for(let s=0;s<Pg;s+=1){let c=(o*Pg+s)*4,l=e[c];if(l<0)continue;let u=s+.5-t,d=o+.5-n,f=u*u+d*d;f<a&&(a=f,r=l,i=[e[c+1],e[c+2]])}if(!(r<0))return{index:r,position:i}}var Bg=e=>{let t=Fs().exponent(2).range([0,1]).domain([-1,1]),n=Go(0,e).map(t=>-.5+t/e);n.push(.5);let r=Array(n.length*2);return n.forEach((e,n)=>{r[n*2]=[t(e*2),.5],r[n*2+1]=[t(e*2),-.5]}),r};function Vg(e){let t=new Float32Array(e*e*2);for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=n*e*2+r*2;t[i+0]=r,t[i+1]=n}return t}function Hg(e,t,n){return!t||t.byteLength!==n.byteLength?(t&&!t.destroyed&&t.destroy(),e.createBuffer({data:n,usage:V.VERTEX|V.COPY_DST})):(t.write(n),t)}function Ug(e,t,n,r,i,a){let o=i?i.length/a:0,s=t.length/a;if(o===s&&n&&!n.destroyed&&r&&!r.destroyed){let e=r,a=n;return a.write(t),{source:e,target:a,previous:new Float32Array(t),sourceData:i??new Float32Array(t)}}let c=new Float32Array(t.length),l=Math.min(o,s);for(let e=0;e<l*a;e+=1)c[e]=i?.[e]??t[e]??0;for(let e=l*a;e<t.length;e+=1)c[e]=t[e]??0;return n&&!n.destroyed&&n.destroy(),r&&!r.destroyed&&r.destroy(),{source:e.createBuffer({data:c,usage:V.VERTEX|V.COPY_DST}),target:e.createBuffer({data:t,usage:V.VERTEX|V.COPY_DST}),previous:new Float32Array(t),sourceData:c}}function Z(e,t){return t*(tu.getInfo(e).bytesPerPixel??0)}function Q(e,t){return!e||e.length!==2?t:[e[0],e[1]]}function $(e,t){return!e||e.length!==4?t:[e[0],e[1],e[2],e[3]]}var Wg=e=>Number.isInteger(e)?e.toFixed(1):String(e),Gg=class extends wg{constructor(){super(...arguments),this.isLinkIndexBufferStale=!0,this.linkStatusTextureSize=0,this.transitionProgress=1,this.shouldAnimateLinkColors=!1,this.shouldAnimateLinkWidths=!1,this.shouldAnimatePositions=!1}get hasPendingPickReadback(){return this.pickingReadback?.inFlight??!1}initPrograms(){let{device:e,config:t,store:n,data:r}=this;this.updateLinkIndexFbo(),this.isLinkIndexBufferStale=!0,this.curveLineGeometry||this.updateCurveLineGeometry();let i=this.data.linksNumber??0;this.pointABuffer||=e.createBuffer({data:new Float32Array(i*2),usage:V.VERTEX|V.COPY_DST}),this.pointBBuffer||=e.createBuffer({data:new Float32Array(i*2),usage:V.VERTEX|V.COPY_DST}),this.arrowBuffer||=e.createBuffer({data:new Float32Array(i),usage:V.VERTEX|V.COPY_DST}),this.linkStyleBuffer||=e.createBuffer({data:new Float32Array(i),usage:V.VERTEX|V.COPY_DST}),this.linkIndexBuffer||=e.createBuffer({data:new Float32Array(i),usage:V.VERTEX|V.COPY_DST}),this.drawLineUniformStore||=new G(e,{drawLineUniforms:{uniformTypes:{transformationMatrix:`mat4x4<f32>`,widthScale:`f32`,linkArrowsSizeScale:`f32`,spaceSize:`f32`,screenSize:`vec2<f32>`,linkVisibilityDistanceRange:`vec2<f32>`,linkVisibilityMinTransparency:`f32`,linkOpacity:`f32`,greyoutOpacity:`f32`,curvedWeight:`f32`,curvedLinkControlPointDistance:`f32`,curvedLinkSegments:`f32`,scaleLinksOnZoom:`f32`,maxPointSize:`f32`,renderMode:`f32`,hoveredLinkIndex:`f32`,hoveredLinkWidthIncrease:`f32`,isLinkHighlightingActive:`f32`,linkStatusTextureSize:`f32`,focusedLinkIndex:`f32`,focusedLinkWidthIncrease:`f32`,transitionProgress:`f32`,animateColors:`f32`,animateWidths:`f32`,animatePositions:`f32`,pointDefaultColor:`vec4<f32>`,linkColorInterpolateFromEndpoints:`f32`,linkBlending:`f32`,pixelRatio:`f32`},defaultUniforms:{transformationMatrix:n.transformationMatrix4x4,widthScale:t.linkWidthScale,linkArrowsSizeScale:t.linkArrowsSizeScale,spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0]),linkVisibilityDistanceRange:Q(t.linkVisibilityDistanceRange,[0,0]),linkVisibilityMinTransparency:t.linkVisibilityMinTransparency,linkOpacity:t.linkOpacity,greyoutOpacity:t.linkGreyoutOpacity,curvedWeight:t.curvedLinkWeight,curvedLinkControlPointDistance:t.curvedLinkControlPointDistance,curvedLinkSegments:t.curvedLinks?t.curvedLinkSegments:1,scaleLinksOnZoom:+!!t.scaleLinksOnZoom,maxPointSize:n.maxPointSize,renderMode:0,hoveredLinkIndex:n.hoveredLinkIndex??-1,hoveredLinkWidthIncrease:t.hoveredLinkWidthIncrease,isLinkHighlightingActive:0,linkStatusTextureSize:0,focusedLinkIndex:t.focusedLinkIndex??-1,focusedLinkWidthIncrease:t.focusedLinkWidthIncrease,transitionProgress:1,animateColors:0,animateWidths:0,animatePositions:0,pointDefaultColor:$(Qh(t.pointDefaultColor),[0,0,0,1]),linkColorInterpolateFromEndpoints:+!!t.linkColorInterpolateFromEndpoints,linkBlending:+!!t.linkBlending,pixelRatio:t.pixelRatio}},drawLineFragmentUniforms:{uniformTypes:{renderMode:`f32`,linkDashLength:`f32`,linkDashGap:`f32`,linkColorInterpolateFromEndpoints:`f32`,hoveredLinkIndex:`f32`,hoveredLinkColor:`vec4<f32>`,linkBlending:`f32`,pickingAlpha:`f32`,pickingIndexOffset:`f32`},defaultUniforms:{pickingAlpha:1,pickingIndexOffset:0,renderMode:0,linkDashLength:t.linkDashLength,linkDashGap:t.linkDashGap,linkColorInterpolateFromEndpoints:+!!t.linkColorInterpolateFromEndpoints,hoveredLinkIndex:n.hoveredLinkIndex??-1,hoveredLinkColor:$(n.hoveredLinkColor,[-1,-1,-1,-1]),linkBlending:+!!t.linkBlending}}}),this.drawCurveCommand||=this.createDrawCurveCommand(this.getLinkBlendParameters(this.config.linkBlending)),this.isLinkBlendingActive=this.config.linkBlending,this.fillSampledLinksUniformStore||=new G(e,{fillSampledLinksUniforms:{uniformTypes:{transformationMatrix:`mat4x4<f32>`,spaceSize:`f32`,screenSize:`vec2<f32>`,curvedWeight:`f32`,curvedLinkControlPointDistance:`f32`,curvedLinkSegments:`f32`},defaultUniforms:{transformationMatrix:n.transformationMatrix4x4,spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0]),curvedWeight:t.curvedLinkWeight,curvedLinkControlPointDistance:t.curvedLinkControlPointDistance,curvedLinkSegments:t.curvedLinks?t.curvedLinkSegments:1}}}),this.fillSampledLinksFboCommand||=new K(e,{fs:kg,vs:Ag,modules:[Tg],topology:`point-list`,vertexCount:r.linksNumber??0,attributes:{...this.pointABuffer&&{pointA:this.pointABuffer},...this.pointBBuffer&&{pointB:this.pointBBuffer},...this.linkIndexBuffer&&{linkIndices:this.linkIndexBuffer}},bufferLayout:[{name:`pointA`,format:`float32x2`},{name:`pointB`,format:`float32x2`},{name:`linkIndices`,format:`float32`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{fillSampledLinksUniforms:this.fillSampledLinksUniformStore.getManagedUniformBuffer(`fillSampledLinksUniforms`)},parameters:X}),this.updateSampledLinksGrid(),this.updateLinkStatus()}drawPicking(e,t,n=0){let{points:r}=this;if(!r||!r.currentPositionTexture||r.currentPositionTexture.destroyed||(r.exitTexture||r.updateExit(),!r.exitTexture||r.exitTexture.destroyed)||(this.pointABuffer&&this.pointBBuffer||this.updatePointsBuffer(),this.targetColorBuffer||this.updateColor(),this.targetWidthBuffer||this.updateWidth(),this.arrowBuffer||this.updateArrow(),this.linkStyleBuffer||this.updateStyle(),this.curveLineGeometry||this.updateCurveLineGeometry(),!this.drawLineUniformStore||!this.linkStatusTexture)||!this.data.linksNumber)return;this.drawPickingCommand||=this.createDrawCurveCommand(X),this.drawPickingCommand.setAttributes(this.getDrawCurveCommandAttributes()),this.drawPickingCommand.setVertexCount(this.curveLineGeometry?.length??0);let i=this.getDrawUniforms();this.drawLineUniformStore.setUniforms({drawLineUniforms:{...i.drawLineUniforms,renderMode:3},drawLineFragmentUniforms:{...i.drawLineFragmentUniforms,renderMode:3,pickingAlpha:t,pickingIndexOffset:n}}),this.drawPickingCommand.setBindings(this.getDrawBindings(r)),this.drawPickingCommand.setInstanceCount(this.data.linksNumber),this.drawPickingCommand.draw(e)}draw(e){let{points:t}=this;t&&(!t.currentPositionTexture||t.currentPositionTexture.destroyed||(t.exitTexture||t.updateExit(),t.exitTexture&&!t.exitTexture.destroyed&&(this.pointABuffer&&this.pointBBuffer||this.updatePointsBuffer(),this.targetColorBuffer||this.updateColor(),this.targetWidthBuffer||this.updateWidth(),this.arrowBuffer||this.updateArrow(),this.linkStyleBuffer||this.updateStyle(),this.curveLineGeometry||this.updateCurveLineGeometry(),this.drawCurveCommand&&this.drawLineUniformStore&&this.linkStatusTexture&&(this.updateLinkBlending(),this.drawLineUniformStore.setUniforms(this.getDrawUniforms()),this.drawCurveCommand.setBindings(this.getDrawBindings(t)),this.drawCurveCommand.setInstanceCount(this.data.linksNumber??0),this.drawCurveCommand.draw(e)))))}updateLinkIndexFbo(){var e;let{device:t,store:n}=this;if(!this.store.isLinkHoveringEnabled)return;let r=n.screenSize??[0,0],i=r[0],a=r[1];if(!i||!a)return;let o=this.previousScreenSize?.[0]!==i||this.previousScreenSize?.[1]!==a;(!this.linkIndexTexture||o)&&((e=this.pickingReadback)==null||e.cancel(),this.linkIndexFbo&&!this.linkIndexFbo.destroyed&&this.linkIndexFbo.destroy(),this.linkIndexTexture&&!this.linkIndexTexture.destroyed&&this.linkIndexTexture.destroy(),this.linkIndexTexture=t.createTexture({width:i,height:a,format:`rgba32float`,usage:W.SAMPLE|W.RENDER|W.COPY_DST}),this.linkIndexTexture.copyImageData({data:new Float32Array(i*a*4).fill(0),bytesPerRow:Z(`rgba32float`,i),mipLevel:0,x:0,y:0}),this.linkIndexFbo=t.createFramebuffer({width:i,height:a,colorAttachments:[this.linkIndexTexture]}),this.previousScreenSize=[i,a],this.isLinkIndexBufferStale=!0)}updateSampledLinksGrid(){let{store:{screenSize:e},config:{linkSamplingDistance:t},device:n}=this,r=t??Math.min(...e)/2;r===0&&(r=hg.linkSamplingDistance);let i=Math.ceil(e[0]/r),a=Math.ceil(e[1]/r);i===0||a===0||this.sampledLinksFbo&&this.sampledLinksFbo.width===i&&this.sampledLinksFbo.height===a||(this.sampledLinksFbo&&!this.sampledLinksFbo.destroyed&&this.sampledLinksFbo.destroy(),this.sampledLinksFbo=n.createFramebuffer({width:i,height:a,colorAttachments:[`rgba32float`]}))}updatePointsBuffer(){let{device:e,data:t,store:n}=this;if(t.linksNumber===void 0||t.links===void 0||!n.pointsTextureSize)return;this.isLinkIndexBufferStale=!0,this.discardPendingPick();let r=new Float32Array(t.linksNumber*2),i=new Float32Array(t.linksNumber*2);for(let e=0;e<t.linksNumber;e++){let a=t.links[e*2],o=t.links[e*2+1],s=t.isPointIndex(a)&&t.isPointIndex(o),c=s?a:0,l=s?o:0,u=c%n.pointsTextureSize,d=Math.floor(c/n.pointsTextureSize),f=l%n.pointsTextureSize,p=Math.floor(l/n.pointsTextureSize);r[e*2]=u,r[e*2+1]=d,i[e*2]=f,i[e*2+1]=p}let a=(this.pointABuffer?.byteLength??0)/(Float32Array.BYTES_PER_ELEMENT*2);!this.pointABuffer||a!==t.linksNumber?(this.pointABuffer&&!this.pointABuffer.destroyed&&this.pointABuffer.destroy(),this.pointABuffer=e.createBuffer({data:r,usage:V.VERTEX|V.COPY_DST})):this.pointABuffer.write(r),!this.pointBBuffer||a!==t.linksNumber?(this.pointBBuffer&&!this.pointBBuffer.destroyed&&this.pointBBuffer.destroy(),this.pointBBuffer=e.createBuffer({data:i,usage:V.VERTEX|V.COPY_DST})):this.pointBBuffer.write(i);let o=new Float32Array(t.linksNumber);for(let e=0;e<t.linksNumber;e++)o[e]=e;!this.linkIndexBuffer||a!==t.linksNumber?(this.linkIndexBuffer&&!this.linkIndexBuffer.destroyed&&this.linkIndexBuffer.destroy(),this.linkIndexBuffer=e.createBuffer({data:o,usage:V.VERTEX|V.COPY_DST})):this.linkIndexBuffer.write(o),this.setDrawCurveCommandAttributes({pointA:this.pointABuffer,pointB:this.pointBBuffer,linkIndices:this.linkIndexBuffer}),this.fillSampledLinksFboCommand&&this.fillSampledLinksFboCommand.setAttributes({pointA:this.pointABuffer,pointB:this.pointBBuffer,linkIndices:this.linkIndexBuffer}),this.updateSampledLinksGrid(),this.config.highlightedLinkIndices!==void 0&&this.updateLinkStatus()}updateColor(){let{data:e}=this,t=e.linksNumber??0;this.isLinkIndexBufferStale=!0;let n=e.linkColors??new Float32Array(t*4).fill(0),{source:r,target:i,previous:a}=Ug(this.device,n,this.sourceColorBuffer,this.targetColorBuffer,this.previousColorData,4);this.sourceColorBuffer=r,this.targetColorBuffer=i,this.previousColorData=a,this.setDrawCurveCommandAttributes({...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer}})}updateWidth(){let{data:e}=this,t=e.linksNumber??0;this.isLinkIndexBufferStale=!0;let n=e.linkWidths??new Float32Array(t).fill(0),{source:r,target:i,previous:a,sourceData:o}=Ug(this.device,n,this.sourceWidthBuffer,this.targetWidthBuffer,this.previousWidthData,1);this.sourceWidthBuffer=r,this.targetWidthBuffer=i,this.previousWidthData=a,this.sourceWidthData=o,this.setDrawCurveCommandAttributes({...this.sourceWidthBuffer&&{sourceWidth:this.sourceWidthBuffer},...this.targetWidthBuffer&&{targetWidth:this.targetWidthBuffer}})}updateArrow(){let{device:e,data:t}=this;this.isLinkIndexBufferStale=!0;let n=t.linksNumber??0,r=t.linkArrows?new Float32Array(t.linkArrows):new Float32Array(n);this.arrowBuffer=Hg(e,this.arrowBuffer,r),this.setDrawCurveCommandAttributes({arrow:this.arrowBuffer})}updateStyle(){let{device:e,data:t}=this;t.linksNumber===void 0||t.linkStyles===void 0||(this.linkStyleBuffer=Hg(e,this.linkStyleBuffer,t.linkStyles),this.setDrawCurveCommandAttributes({linkStyle:this.linkStyleBuffer}))}updateLinkStatus(){let{device:e,config:t,data:n}=this,r=n.linksNumber??0;if(this.isLinkIndexBufferStale=!0,!r){this.linkStatusTexture||this.ensureLinkStatusPlaceholder();return}let{highlightedLinkIndices:i}=t;if(i===void 0){this.linkStatusTexture||this.ensureLinkStatusPlaceholder(),this.linkStatusTextureSize=0;return}let a=Math.ceil(Math.sqrt(r));this.linkStatusTextureSize=a;let o=new Float32Array(a*a*4);for(let e=0;e<r;e++)o[e*4]=1;for(let e of i)e>=0&&e<r&&(o[e*4]=0);let s={data:o,bytesPerRow:Z(`rgba32float`,a),mipLevel:0,x:0,y:0};this.linkStatusTexture&&this.linkStatusTexture.width===a&&this.linkStatusTexture.height===a||(this.linkStatusTexture&&!this.linkStatusTexture.destroyed&&this.linkStatusTexture.destroy(),this.linkStatusTexture=e.createTexture({width:a,height:a,format:`rgba32float`,usage:W.SAMPLE|W.RENDER|W.COPY_DST})),this.linkStatusTexture.copyImageData(s)}updateCurveLineGeometry(){var e,t;let{device:n,config:{curvedLinks:r,curvedLinkSegments:i}}=this;this.isLinkIndexBufferStale=!0,this.curveLineGeometry=Bg(r?i:1);let a=new Float32Array(this.curveLineGeometry.length*2);for(let e=0;e<this.curveLineGeometry.length;e++)a[e*2]=this.curveLineGeometry[e][0],a[e*2+1]=this.curveLineGeometry[e][1];!this.curveLineBuffer||this.curveLineBuffer.byteLength!==a.byteLength?(this.curveLineBuffer&&!this.curveLineBuffer.destroyed&&this.curveLineBuffer.destroy(),this.curveLineBuffer=n.createBuffer({data:a,usage:V.VERTEX|V.COPY_DST})):this.curveLineBuffer.write(a),this.setDrawCurveCommandAttributes({position:this.curveLineBuffer}),(e=this.drawCurveCommand)==null||e.setVertexCount(this.curveLineGeometry.length),(t=this.drawCurvePickingCommand)==null||t.setVertexCount(this.curveLineGeometry.length)}updateLinkBlending(){var e;let t=this.config.linkBlending;t!==this.isLinkBlendingActive&&((e=this.drawCurveCommand)==null||e.setParameters(this.getLinkBlendParameters(t)),this.isLinkBlendingActive=t,this.isLinkIndexBufferStale=!0)}getSampledLinkPositionsMap(){let e=new Map;if(!this.sampledLinksFbo||this.sampledLinksFbo.destroyed)return e;let t=this.points;if(!(t!=null&&t.currentPositionTexture)||t.currentPositionTexture.destroyed||!t.exitTexture||t.exitTexture.destroyed)return e;if(this.fillSampledLinksFboCommand&&this.fillSampledLinksUniformStore&&this.sampledLinksFbo){this.fillSampledLinksFboCommand.setVertexCount(this.data.linksNumber??0),this.fillSampledLinksUniformStore.setUniforms({fillSampledLinksUniforms:{transformationMatrix:this.store.transformationMatrix4x4,spaceSize:this.store.adjustedSpaceSize,screenSize:Q(this.store.screenSize,[0,0]),curvedWeight:this.config.curvedLinkWeight,curvedLinkControlPointDistance:this.config.curvedLinkControlPointDistance,curvedLinkSegments:this.config.curvedLinks?this.config.curvedLinkSegments:1}}),this.fillSampledLinksFboCommand.setBindings({positionsTexture:t.currentPositionTexture,exitTexture:t.exitTexture});let e=this.device.beginRenderPass({framebuffer:this.sampledLinksFbo,clearColor:[-1,-1,-1,-1]});this.fillSampledLinksFboCommand.draw(e),e.end()}let n=eg(this.device,this.sampledLinksFbo);for(let t=0;t<n.length/4;t++){let r=n[t*4],i=n[t*4+1],a=n[t*4+2],o=n[t*4+3];r!==void 0&&r>=0&&i!==void 0&&a!==void 0&&o!==void 0&&e.set(Math.round(r),[i,a,o])}return e}getSampledLinks(){let e=[],t=[],n=[];if(!this.sampledLinksFbo||this.sampledLinksFbo.destroyed)return{indices:e,positions:t,angles:n};let r=this.points;if(!(r!=null&&r.currentPositionTexture)||r.currentPositionTexture.destroyed||!r.exitTexture||r.exitTexture.destroyed)return{indices:e,positions:t,angles:n};if(this.fillSampledLinksFboCommand&&this.fillSampledLinksUniformStore&&this.sampledLinksFbo){this.fillSampledLinksFboCommand.setVertexCount(this.data.linksNumber??0),this.fillSampledLinksUniformStore.setUniforms({fillSampledLinksUniforms:{transformationMatrix:this.store.transformationMatrix4x4,spaceSize:this.store.adjustedSpaceSize,screenSize:Q(this.store.screenSize,[0,0]),curvedWeight:this.config.curvedLinkWeight,curvedLinkControlPointDistance:this.config.curvedLinkControlPointDistance,curvedLinkSegments:this.config.curvedLinks?this.config.curvedLinkSegments:1}}),this.fillSampledLinksFboCommand.setBindings({positionsTexture:r.currentPositionTexture,exitTexture:r.exitTexture});let e=this.device.beginRenderPass({framebuffer:this.sampledLinksFbo,clearColor:[-1,-1,-1,-1]});this.fillSampledLinksFboCommand.draw(e),e.end()}let i=eg(this.device,this.sampledLinksFbo);for(let r=0;r<i.length/4;r++){let a=i[r*4],o=i[r*4+1],s=i[r*4+2],c=i[r*4+3];a!==void 0&&a>=0&&o!==void 0&&s!==void 0&&c!==void 0&&(e.push(Math.round(a)),t.push(o,s),n.push(c))}return{indices:e,positions:t,angles:n}}updateLinkIndexBuffer(){if(!this.isLinkIndexBufferStale)return;this.updateLinkIndexFbo();let{config:e,points:t,store:n}=this;if(!t||!t.currentPositionTexture||t.currentPositionTexture.destroyed||(t.exitTexture||t.updateExit(),!t.exitTexture||t.exitTexture.destroyed)||!this.data.linksNumber||!this.store.isLinkHoveringEnabled||!this.linkIndexFbo||!this.drawLineUniformStore||!this.linkStatusTexture||!this.linkIndexTexture||this.linkIndexTexture.destroyed)return;this.drawCurvePickingCommand||=this.createDrawCurveCommand(this.getLinkBlendParameters(!1));let r=e.highlightedLinkIndices!==void 0;this.drawLineUniformStore.setUniforms({drawLineUniforms:{transformationMatrix:n.transformationMatrix4x4,widthScale:e.linkWidthScale,linkArrowsSizeScale:e.linkArrowsSizeScale,spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0]),linkVisibilityDistanceRange:Q(e.linkVisibilityDistanceRange,[0,0]),linkVisibilityMinTransparency:e.linkVisibilityMinTransparency,linkOpacity:e.linkOpacity,greyoutOpacity:e.linkGreyoutOpacity,curvedWeight:e.curvedLinkWeight,curvedLinkControlPointDistance:e.curvedLinkControlPointDistance,curvedLinkSegments:e.curvedLinks?e.curvedLinkSegments:1,scaleLinksOnZoom:+!!e.scaleLinksOnZoom,maxPointSize:n.maxPointSize,renderMode:1,hoveredLinkIndex:n.hoveredLinkIndex??-1,hoveredLinkWidthIncrease:e.hoveredLinkWidthIncrease,isLinkHighlightingActive:+!!r,linkStatusTextureSize:this.linkStatusTextureSize,focusedLinkIndex:e.focusedLinkIndex??-1,focusedLinkWidthIncrease:e.focusedLinkWidthIncrease,transitionProgress:this.transitionProgress,animateColors:+!!this.shouldAnimateLinkColors,animateWidths:+!!this.shouldAnimateLinkWidths,animatePositions:+!!this.shouldAnimatePositions,pointDefaultColor:$(this.data.defaultRgba,[0,0,0,1]),linkColorInterpolateFromEndpoints:+!!e.linkColorInterpolateFromEndpoints,linkBlending:+!!e.linkBlending,pixelRatio:e.pixelRatio},drawLineFragmentUniforms:{renderMode:1,linkDashLength:e.linkDashLength,linkDashGap:e.linkDashGap,linkColorInterpolateFromEndpoints:+!!e.linkColorInterpolateFromEndpoints,hoveredLinkIndex:n.hoveredLinkIndex??-1,hoveredLinkColor:$(n.hoveredLinkColor,[-1,-1,-1,-1]),linkBlending:+!!e.linkBlending}}),this.drawCurvePickingCommand.setBindings({positionsTexture:t.currentPositionTexture,linkStatus:this.linkStatusTexture,exitTexture:t.exitTexture,pointColorsTexture:t.pointColorsTexture??t.currentPositionTexture}),this.drawCurvePickingCommand.setInstanceCount(this.data.linksNumber??0);let i=this.device.beginRenderPass({framebuffer:this.linkIndexFbo,clearColor:[0,0,0,0]});this.drawCurvePickingCommand.draw(i),i.end(),this.isLinkIndexBufferStale=!1}pickLinkSync(){this.updateLinkIndexBuffer();let e=this.getCursorPickingPixel();if(e&&this.linkIndexFbo&&!this.linkIndexFbo.destroyed)return Rg(eg(this.device,this.linkIndexFbo,e.x,e.y,1,1))}requestPickLink(){var e;if((e=this.pickingReadback)!=null&&e.inFlight)return!1;if(this.updateLinkIndexBuffer(),!this.linkIndexFbo||this.linkIndexFbo.destroyed)return!0;let t=this.device.gl,n=this.linkIndexFbo.handle;if(!t||!n)return!0;this.pickingReadback||=new jg(t,4);let r=this.getCursorPickingPixel();return!r||this.pickingReadback.issue(n,r.x,r.y,1,1)}discardPendingPick(){var e;(e=this.pickingReadback)==null||e.cancel()}takePickLinkResult(){if(!this.pickingReadback)return;let e=this.pickingReadback.poll();if(e)return Rg(e)??null}getAnimatedWidth(e,t){let n=this.data.linkWidths?.[e]??this.config.linkDefaultWidth,r=this.sourceWidthData?.[e];return r===void 0?n:r+(n-r)*t}setTransitionProgress(e,t=!1,n=!1,r=!1){e!==this.transitionProgress&&(t||n||r)&&(this.isLinkIndexBufferStale=!0),this.transitionProgress=e,this.shouldAnimateLinkColors=t,this.shouldAnimateLinkWidths=n,this.shouldAnimatePositions=r}destroy(){var e,t,n,r,i,a,o;(e=this.drawCurveCommand)==null||e.destroy(),this.drawCurveCommand=void 0,(t=this.drawPickingCommand)==null||t.destroy(),this.drawPickingCommand=void 0,(n=this.drawCurvePickingCommand)==null||n.destroy(),this.drawCurvePickingCommand=void 0,this.isLinkBlendingActive=void 0,(r=this.fillSampledLinksFboCommand)==null||r.destroy(),this.fillSampledLinksFboCommand=void 0,(i=this.pickingReadback)==null||i.destroy(),this.pickingReadback=void 0,this.linkIndexFbo&&!this.linkIndexFbo.destroyed&&this.linkIndexFbo.destroy(),this.linkIndexFbo=void 0,this.sampledLinksFbo&&!this.sampledLinksFbo.destroyed&&this.sampledLinksFbo.destroy(),this.sampledLinksFbo=void 0,this.linkIndexTexture&&!this.linkIndexTexture.destroyed&&this.linkIndexTexture.destroy(),this.linkIndexTexture=void 0,this.linkStatusTexture&&!this.linkStatusTexture.destroyed&&this.linkStatusTexture.destroy(),this.linkStatusTexture=void 0,(a=this.drawLineUniformStore)==null||a.destroy(),this.drawLineUniformStore=void 0,(o=this.fillSampledLinksUniformStore)==null||o.destroy(),this.fillSampledLinksUniformStore=void 0,this.pointABuffer&&!this.pointABuffer.destroyed&&this.pointABuffer.destroy(),this.pointABuffer=void 0,this.pointBBuffer&&!this.pointBBuffer.destroyed&&this.pointBBuffer.destroy(),this.pointBBuffer=void 0,this.sourceColorBuffer&&!this.sourceColorBuffer.destroyed&&this.sourceColorBuffer.destroy(),this.sourceColorBuffer=void 0,this.targetColorBuffer&&!this.targetColorBuffer.destroyed&&this.targetColorBuffer.destroy(),this.targetColorBuffer=void 0,this.previousColorData=void 0,this.sourceWidthBuffer&&!this.sourceWidthBuffer.destroyed&&this.sourceWidthBuffer.destroy(),this.sourceWidthBuffer=void 0,this.targetWidthBuffer&&!this.targetWidthBuffer.destroyed&&this.targetWidthBuffer.destroy(),this.targetWidthBuffer=void 0,this.previousWidthData=void 0,this.sourceWidthData=void 0,this.arrowBuffer&&!this.arrowBuffer.destroyed&&this.arrowBuffer.destroy(),this.arrowBuffer=void 0,this.linkStyleBuffer&&!this.linkStyleBuffer.destroyed&&this.linkStyleBuffer.destroy(),this.linkStyleBuffer=void 0,this.curveLineBuffer&&!this.curveLineBuffer.destroyed&&this.curveLineBuffer.destroy(),this.curveLineBuffer=void 0,this.linkIndexBuffer&&!this.linkIndexBuffer.destroyed&&this.linkIndexBuffer.destroy(),this.linkIndexBuffer=void 0}getCursorPickingPixel(){if(!this.linkIndexFbo||this.linkIndexFbo.destroyed)return;let[e,t]=this.store.screenSize;if(!e||!t)return;let n=Math.floor(this.store.screenMousePosition[0]*(this.linkIndexFbo.width/e)),r=Math.floor(this.store.screenMousePosition[1]*(this.linkIndexFbo.height/t));return{x:Math.min(Math.max(n,0),this.linkIndexFbo.width-1),y:Math.min(Math.max(r,0),this.linkIndexFbo.height-1)}}createDrawCurveCommand(e){if(!this.drawLineUniformStore)throw Error(`Draw line uniforms must be initialized before creating link draw commands`);return new K(this.device,{vs:Og,fs:Dg,modules:[Tg,Eg],topology:`triangle-strip`,vertexCount:this.curveLineGeometry?.length??0,attributes:this.getDrawCurveCommandAttributes(),bufferLayout:[{name:`position`,format:`float32x2`},{name:`pointA`,format:`float32x2`,stepMode:`instance`},{name:`pointB`,format:`float32x2`,stepMode:`instance`},{name:`sourceColor`,format:`float32x4`,stepMode:`instance`},{name:`targetColor`,format:`float32x4`,stepMode:`instance`},{name:`sourceWidth`,format:`float32`,stepMode:`instance`},{name:`targetWidth`,format:`float32`,stepMode:`instance`},{name:`arrow`,format:`float32`,stepMode:`instance`},{name:`linkIndices`,format:`float32`,stepMode:`instance`},{name:`linkStyle`,format:`float32`,stepMode:`instance`}],defines:{USE_UNIFORM_BUFFERS:!0,EXIT_DEFAULT_COLOR_CHANNEL:Wg(0),EDGE_RAMP_PX:Wg(1)},bindings:{drawLineUniforms:this.drawLineUniformStore.getManagedUniformBuffer(`drawLineUniforms`),drawLineFragmentUniforms:this.drawLineUniformStore.getManagedUniformBuffer(`drawLineFragmentUniforms`)},parameters:e})}getDrawCurveCommandAttributes(){let e={};return this.curveLineBuffer&&(e.position=this.curveLineBuffer),this.pointABuffer&&(e.pointA=this.pointABuffer),this.pointBBuffer&&(e.pointB=this.pointBBuffer),this.sourceColorBuffer&&(e.sourceColor=this.sourceColorBuffer),this.targetColorBuffer&&(e.targetColor=this.targetColorBuffer),this.sourceWidthBuffer&&(e.sourceWidth=this.sourceWidthBuffer),this.targetWidthBuffer&&(e.targetWidth=this.targetWidthBuffer),this.arrowBuffer&&(e.arrow=this.arrowBuffer),this.linkIndexBuffer&&(e.linkIndices=this.linkIndexBuffer),this.linkStyleBuffer&&(e.linkStyle=this.linkStyleBuffer),e}setDrawCurveCommandAttributes(e){var t,n;(t=this.drawCurveCommand)==null||t.setAttributes(e),(n=this.drawCurvePickingCommand)==null||n.setAttributes(e)}getLinkBlendParameters(e){let t={...X,cullMode:`back`};return e?{...t,blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`src-alpha`,blendColorDstFactor:`one-minus-src-alpha`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one-minus-src-alpha`}:{...t,blend:!1}}ensureLinkStatusPlaceholder(){this.linkStatusTexture&&!this.linkStatusTexture.destroyed||(this.linkStatusTexture=this.device.createTexture({width:1,height:1,format:`rgba32float`,usage:W.SAMPLE|W.RENDER|W.COPY_DST,data:new Float32Array(4).fill(0)}),this.linkStatusTextureSize=0)}getDrawUniforms(){let{config:e,store:t}=this,n=e.highlightedLinkIndices!==void 0,r=t.hostHoveredLinkIndex??t.hoveredLinkIndex??-1;return{drawLineUniforms:{transformationMatrix:t.transformationMatrix4x4,widthScale:e.linkWidthScale,linkArrowsSizeScale:e.linkArrowsSizeScale,spaceSize:t.adjustedSpaceSize,screenSize:Q(t.screenSize,[0,0]),linkVisibilityDistanceRange:Q(e.linkVisibilityDistanceRange,[0,0]),linkVisibilityMinTransparency:e.linkVisibilityMinTransparency,linkOpacity:e.linkOpacity,greyoutOpacity:e.linkGreyoutOpacity,curvedWeight:e.curvedLinkWeight,curvedLinkControlPointDistance:e.curvedLinkControlPointDistance,curvedLinkSegments:e.curvedLinks?e.curvedLinkSegments:1,scaleLinksOnZoom:+!!e.scaleLinksOnZoom,maxPointSize:t.maxPointSize,renderMode:0,hoveredLinkIndex:r,hoveredLinkWidthIncrease:e.hoveredLinkWidthIncrease,isLinkHighlightingActive:+!!n,linkStatusTextureSize:this.linkStatusTextureSize,focusedLinkIndex:e.focusedLinkIndex??-1,focusedLinkWidthIncrease:e.focusedLinkWidthIncrease,transitionProgress:this.transitionProgress,animateColors:+!!this.shouldAnimateLinkColors,animateWidths:+!!this.shouldAnimateLinkWidths,animatePositions:+!!this.shouldAnimatePositions,pointDefaultColor:$(this.data.defaultRgba,[0,0,0,1]),linkColorInterpolateFromEndpoints:+!!e.linkColorInterpolateFromEndpoints,linkBlending:+!!e.linkBlending,pixelRatio:e.pixelRatio},drawLineFragmentUniforms:{renderMode:0,linkDashLength:e.linkDashLength,linkDashGap:e.linkDashGap,linkColorInterpolateFromEndpoints:+!!e.linkColorInterpolateFromEndpoints,hoveredLinkIndex:r,hoveredLinkColor:$(t.hoveredLinkColor,[-1,-1,-1,-1]),linkBlending:+!!e.linkBlending}}}getDrawBindings(e){return{positionsTexture:e.currentPositionTexture,linkStatus:this.linkStatusTexture,exitTexture:e.exitTexture,pointColorsTexture:e.pointColorsTexture??e.currentPositionTexture}}},Kg=class{constructor(e,t){this.eventTransform=qi,this.behavior=ra().scaleExtent([.001,1/0]).filter(e=>!this.config.enableZoom&&(e.type===`wheel`||e.type===`dblclick`||e.type===`touchend`||`touches`in e&&e.touches.length>1)?!1:(!e.ctrlKey||e.type===`wheel`)&&(e.button??0)===0).on(`start`,e=>{var t,n;this.isRunning=!0;let r=!!e.sourceEvent;r&&(this.shouldEnableSimulationDuringZoomOverride=void 0),(n=(t=this.config).onZoomStart)==null||n.call(t,e,r)}).on(`zoom`,e=>{var t,n;this.applyEventTransform(e.transform);let r=!!e.sourceEvent;(n=(t=this.config).onZoom)==null||n.call(t,e,r)}).on(`end`,e=>{var t,n;this.isRunning=!1;let r=!!e.sourceEvent;(n=(t=this.config).onZoomEnd)==null||n.call(t,e,r)}),this.isRunning=!1,this.shouldEnableSimulationDuringZoomOverride=void 0,this.store=e,this.config=t}applyEventTransform(e){this.eventTransform=e;let{eventTransform:{x:t,y:n,k:r},store:{transform:i,screenSize:a}}=this,o=a[0],s=a[1];!o||!s||(Bs(i,o,s),Rs(i,i,[t,n]),zs(i,i,[r,r]),Rs(i,i,[o/2,s/2]),zs(i,i,[o/2,s/2]),zs(i,i,[1,-1]))}getTransform(e,t,n=.1){if(e.length===0)return this.eventTransform;let{store:{screenSize:r}}=this,i=r[0],a=r[1],o=1/0,s=-1/0,c=1/0,l=-1/0;for(let t=0;t<e.length;t+=2){let n=e[t],r=e[t+1];!Number.isFinite(n)||!Number.isFinite(r)||(n<o&&(o=n),n>s&&(s=n),r<c&&(c=r),r>l&&(l=r))}if(!Number.isFinite(o)||!Number.isFinite(c))return this.eventTransform;let u=[this.store.scaleX(o),this.store.scaleX(s)],d=[this.store.scaleY(c),this.store.scaleY(l)];u[0]===u[1]&&(u[0]-=.5,u[1]+=.5),d[0]===d[1]&&(d[0]+=.5,d[1]-=.5);let f=i*(1-n*2)/(u[1]-u[0]),p=a*(1-n*2)/(d[0]-d[1]),m=ig(t??Math.min(f,p),...this.behavior.scaleExtent()),h=(u[1]+u[0])/2,g=(d[1]+d[0])/2,_=i/2-h*m,v=a/2-g*m;return qi.translate(_,v).scale(m)}getDistanceToPoint(e){let{x:t,y:n,k:r}=this.eventTransform,i=this.getTransform(e,r),a=t-i.x,o=n-i.y;return Math.sqrt(a*a+o*o)}getMiddlePointTransform(e){if(!Number.isFinite(e[0])||!Number.isFinite(e[1]))return this.eventTransform;let{store:{screenSize:t},eventTransform:{x:n,y:r,k:i}}=this,a=t[0],o=t[1],s=(a/2-n)/i,c=(o/2-r)/i,l=this.store.scaleX(e[0]),u=this.store.scaleY(e[1]),d=(s+l)/2,f=(c+u)/2,p=a/2-d*1,m=o/2-f*1;return qi.translate(p,m).scale(1)}convertScreenToSpacePosition(e){let{eventTransform:{x:t,y:n,k:r},store:{screenSize:i}}=this,a=i[0],o=i[1],s=[(e[0]-t)/r,o-(e[1]-n)/r];return s[0]-=(a-this.store.adjustedSpaceSize)/2,s[1]-=(o-this.store.adjustedSpaceSize)/2,s}convertSpaceToScreenPosition(e){return[this.eventTransform.applyX(this.store.scaleX(e[0])),this.eventTransform.applyY(this.store.scaleY(e[1]))]}convertSpaceToScreenRadius(e){let{config:{scalePointsOnZoom:t,pixelRatio:n},store:{maxPointSize:r},eventTransform:{k:i}}=this,a=e*2;return a*=t?i:Math.min(5,Math.max(1,i*.01)),a<=0?0:Math.min(Math.max(a,1/n),r)/2}},qg=class{constructor(e,t,n){this.isActive=!1,this.behavior=Ui().subject(e=>{if(!(this.transition.isActiveFor(Y.Positions)||this.transition.isActiveFor(Y.PointSizes)))return this.store.hoveredPoint&&!this.store.isSpaceKeyPressed?{x:e.x,y:e.y}:void 0}).on(`start`,e=>{var t,n;this.store.hoveredPoint&&(this.store.draggingPointIndex=this.store.hoveredPoint.index,this.isActive=!0,(n=(t=this.config).onDragStart)==null||n.call(t,e))}).on(`drag`,e=>{var t,n;(n=(t=this.config).onDrag)==null||n.call(t,e)}).on(`end`,e=>{var t,n;this.isActive=!1,this.store.draggingPointIndex=void 0,(n=(t=this.config).onDragEnd)==null||n.call(t,e)}),this.store=e,this.config=t,this.transition=n}},Jg=`#version 300 es
precision highp float;

in vec4 rgba;
out vec4 fragColor;

void main() {
  fragColor = rgba;
}`,Yg=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

in vec2 pointIndices;

out vec4 rgba;

void main() {
  rgba = vec4(0.0);

  ivec2 pointTexel = ivec2(pointIndices);

  // Absent points must not contribute to the centroid — a NaN position would
  // poison the sum and break the force for every point. (exit.G = current absence)
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  rgba = vec4(pointPosition.xy, 1.0, 0.0);

  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,Xg=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D centermassTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceCenterUniforms {
  float centerForce;
  float alpha;
} forceCenter;

#define centerForce forceCenter.centerForce
#define alpha forceCenter.alpha
#else
uniform float centerForce;
uniform float alpha;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);
  vec4 centermassValues = texelFetch(centermassTexture, ivec2(0), 0);
  vec2 centermassPosition = centermassValues.xy / centermassValues.b;
  vec2 distVector = centermassPosition - pointPosition.xy;
  float dist = sqrt(dot(distVector, distVector));
  if (dist > 0.0) {
    float angle = atan(distVector.y, distVector.x);
    float addV = alpha * centerForce * dist * 0.01;
    velocity.rg += addV * vec2(cos(angle), sin(angle));
  }

  fragColor = velocity;
}`,Zg=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 vertexCoord; // Vertex coordinates in normalized device coordinates

void main() {
    gl_Position = vec4(vertexCoord, 0, 1);
}
`,Qg=class extends wg{create(){var e;let{device:t,store:n}=this,{pointsTextureSize:r}=n;if(r){if(this.centermassTexture||=t.createTexture({width:1,height:1,format:`rgba32float`,usage:W.SAMPLE|W.RENDER|W.COPY_DST}),this.centermassTexture.copyImageData({data:new Float32Array(4).fill(0),bytesPerRow:Z(`rgba32float`,1),mipLevel:0,x:0,y:0}),this.centermassFbo||=t.createFramebuffer({width:1,height:1,colorAttachments:[this.centermassTexture]}),!this.pointIndices||this.previousPointsTextureSize!==n.pointsTextureSize){this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy();let r=Vg(n.pointsTextureSize);this.pointIndices=t.createBuffer({data:r,usage:V.VERTEX|V.COPY_DST}),(e=this.calculateCentermassCommand)==null||e.setAttributes({pointIndices:this.pointIndices})}this.previousPointsTextureSize=r}}initPrograms(){let{device:e,store:t,points:n}=this;!n||!t.pointsTextureSize||!this.centermassFbo||this.centermassFbo.destroyed||!this.centermassTexture||this.centermassTexture.destroyed||(this.forceVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.forceUniformStore||=new G(e,{forceCenterUniforms:{uniformTypes:{centerForce:`f32`,alpha:`f32`}}}),this.calculateCentermassCommand||=new K(e,{fs:Jg,vs:Yg,topology:`point-list`,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:`pointIndices`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{},parameters:{...X,blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`,depthWriteEnabled:!1,depthCompare:`always`}}),this.calculateCentermassCommand.setVertexCount(this.data.pointsNumber??0),this.runCommand||=new K(e,{fs:Xg,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceCenterUniforms:this.forceUniformStore.getManagedUniformBuffer(`forceCenterUniforms`)},parameters:X}))}run(){let{device:e,store:t,points:n}=this;if(!n||!this.calculateCentermassCommand||!this.runCommand||!this.forceUniformStore||!this.centermassFbo||!this.centermassTexture||!n.previousPositionTexture||n.previousPositionTexture.destroyed||!n.velocityFbo||n.velocityFbo.destroyed||!n.exitTexture||n.exitTexture.destroyed||t.pointsTextureSize!==this.previousPointsTextureSize||!this.pointIndices)return;let r=e.beginRenderPass({framebuffer:this.centermassFbo,clearColor:[0,0,0,0]});this.calculateCentermassCommand.setBindings({positionsTexture:n.previousPositionTexture,exitTexture:n.exitTexture}),this.calculateCentermassCommand.draw(r),r.end(),this.forceUniformStore.setUniforms({forceCenterUniforms:{centerForce:this.config.simulationCenter,alpha:t.alpha}}),this.runCommand.setBindings({positionsTexture:n.previousPositionTexture,centermassTexture:this.centermassTexture});let i=e.beginRenderPass({framebuffer:n.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(i),i.end()}destroy(){var e,t,n;(e=this.calculateCentermassCommand)==null||e.destroy(),this.calculateCentermassCommand=void 0,(t=this.runCommand)==null||t.destroy(),this.runCommand=void 0,this.centermassFbo&&!this.centermassFbo.destroyed&&this.centermassFbo.destroy(),this.centermassFbo=void 0,this.centermassTexture&&!this.centermassTexture.destroyed&&this.centermassTexture.destroy(),this.centermassTexture=void 0,(n=this.forceUniformStore)==null||n.destroy(),this.forceUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.forceVertexCoordBuffer&&!this.forceVertexCoordBuffer.destroyed&&this.forceVertexCoordBuffer.destroy(),this.forceVertexCoordBuffer=void 0,this.previousPointsTextureSize=void 0}},$g=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D sizeTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform buildGridUniforms {
  float gridTextureSize;
  float cellSize;
  vec2 gridOffset; // Offset for multi-pass (0-1 range, multiplied by cellSize)
} buildGrid;

#define gridTextureSize buildGrid.gridTextureSize
#define cellSize buildGrid.cellSize
#define gridOffset buildGrid.gridOffset
#else
uniform float gridTextureSize;
uniform float cellSize;
uniform vec2 gridOffset;
#endif

in vec2 pointIndices;

out vec4 cellData; // xy = position, z = size, w = count (1.0)

void main() {
  ivec2 pointTexel = ivec2(pointIndices);

  // Absent points must not enter the grid — a NaN position bins to a NaN cell and
  // poisons the accumulated position/size sum for every point in that cell. (exit.g = absent)
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 pointSize = texelFetch(sizeTexture, pointTexel, 0);

  // Output: position sum, size sum, count
  cellData = vec4(pointPosition.xy, pointSize.r, 1.0);

  // Apply grid offset for multi-pass collision detection
  vec2 offsetPosition = pointPosition.xy + gridOffset * cellSize;

  // Calculate which grid cell this point belongs to
  float cellX = floor(offsetPosition.x / cellSize);
  float cellY = floor(offsetPosition.y / cellSize);

  // Clamp to grid bounds
  cellX = clamp(cellX, 0.0, gridTextureSize - 1.0);
  cellY = clamp(cellY, 0.0, gridTextureSize - 1.0);

  // Convert to clip space coordinates
  vec2 gridPosition = 2.0 * (vec2(cellX, cellY) + 0.5) / gridTextureSize - 1.0;

  gl_Position = vec4(gridPosition, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,e_=`#version 300 es
precision highp float;

in vec4 cellData;
out vec4 fragColor;

void main() {
  // Output accumulated cell data (blended additively)
  // xy = sum of positions, z = sum of sizes, w = count
  fragColor = cellData;
}
`,t_=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D sizeTexture;
uniform sampler2D gridTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceCollisionUniforms {
  float gridTextureSize;
  float cellSize;
  float alpha;
  float collisionStrength;
  float collisionRadius;
  float collisionPadding;
  float pointsNumber;
  vec2 gridOffset; // Must match the offset used when building the grid
} forceCollision;

#define gridTextureSize forceCollision.gridTextureSize
#define cellSize forceCollision.cellSize
#define alpha forceCollision.alpha
#define collisionStrength forceCollision.collisionStrength
#define collisionRadius forceCollision.collisionRadius
#define collisionPadding forceCollision.collisionPadding
#define pointsNumber forceCollision.pointsNumber
#define gridOffset forceCollision.gridOffset
#else
uniform float gridTextureSize;
uniform float cellSize;
uniform float alpha;
uniform float collisionStrength;
uniform float collisionRadius;
uniform float collisionPadding;
uniform float pointsNumber;
uniform vec2 gridOffset;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);

  // Get current point's index
  float currentIndex = pointPosition.b;

  // Skip if this is an empty texel
  if (currentIndex < 0.0 || currentIndex >= pointsNumber) {
    fragColor = velocity;
    return;
  }

  // Get current point's size for collision radius
  vec4 currentSizeData = texelFetch(sizeTexture, pointTexel, 0);
  float currentSize = currentSizeData.r;
  float currentCollisionRadius = (collisionRadius > 0.0 ? collisionRadius : currentSize * 0.5) + collisionPadding;

  vec2 currentPos = pointPosition.rg;

  // Apply the same offset used when building the grid
  vec2 offsetPos = currentPos + gridOffset * cellSize;

  // Calculate which grid cell this point is in (with offset).
  // Clamp to the grid bounds to match build-grid.vert, so a point that drifts
  // outside the space still reads the edge cell it was binned into.
  float myCellX = clamp(floor(offsetPos.x / cellSize), 0.0, gridTextureSize - 1.0);
  float myCellY = clamp(floor(offsetPos.y / cellSize), 0.0, gridTextureSize - 1.0);

  // Track total neighbor count for damping
  float totalNeighbors = 0.0;

  // Check 3x3 neighborhood of cells
  for (int dx = -1; dx <= 1; dx++) {
    for (int dy = -1; dy <= 1; dy++) {
      float neighborCellX = myCellX + float(dx);
      float neighborCellY = myCellY + float(dy);

      // Skip cells outside grid bounds
      if (neighborCellX < 0.0 || neighborCellX >= gridTextureSize ||
          neighborCellY < 0.0 || neighborCellY >= gridTextureSize) {
        continue;
      }

      // Sample the grid cell (the bounds check above keeps the fetch in range)
      ivec2 cell = ivec2(neighborCellX, neighborCellY);
      vec4 cellData = texelFetch(gridTexture, cell, 0);

      float cellCount = cellData.w;
      if (cellCount < 0.5) continue; // Empty cell

      // The own cell's sums include this point, which drags the average toward
      // it and halves the measured distance for a two-point cell. Remove the
      // self-contribution before averaging, and skip a cell holding only self.
      float effectiveCount = cellCount;
      vec2 sumPos = cellData.xy;
      float sumSize = cellData.z;
      if (dx == 0 && dy == 0) {
        effectiveCount = cellCount - 1.0;
        sumPos -= currentPos;
        sumSize -= currentSize;
      }
      if (effectiveCount < 0.5) continue;

      totalNeighbors += effectiveCount;

      // Average position and size of the *other* points in this cell
      vec2 avgPos = sumPos / effectiveCount;
      float avgSize = sumSize / effectiveCount;
      float otherCollisionRadius = (collisionRadius > 0.0 ? collisionRadius : avgSize * 0.5) + collisionPadding;

      // Calculate combined collision radius
      float combinedRadius = currentCollisionRadius + otherCollisionRadius;

      // Calculate distance vector to average position (using original positions)
      vec2 distVector = currentPos - avgPos;
      float dist = length(distVector);

      // Check for collision
      if (dist < combinedRadius && dist > 0.001) {
        // Calculate overlap ratio (0 = just touching, 1 = fully overlapping)
        float overlapRatio = (combinedRadius - dist) / combinedRadius;

        // Soft collision curve: use square root for gentler force near edges
        // This prevents the "ping-pong" effect at boundaries
        float softOverlap = sqrt(overlapRatio) * combinedRadius * 0.5;

        // Direction to push apart (normalized)
        vec2 direction = distVector / dist;

        // Apply repulsion force with soft curve
        // Divide by 4 since we run 4 passes with different offsets
        float force = alpha * collisionStrength * softOverlap * 0.25 * effectiveCount;

        // Clamp maximum force to prevent instability
        force = min(force, combinedRadius * 0.5);

        velocity.rg += force * direction;
      } else if (dist <= 0.001 && effectiveCount > 0.0) {
        // Points at same position - push based on index
        float angle = currentIndex * 0.618033988749895;
        float force = min(alpha * collisionStrength * combinedRadius * 0.1, combinedRadius * 0.3);
        velocity.rg += force * effectiveCount * vec2(cos(angle), sin(angle));
      }
    }
  }

  // Apply density-based damping: reduce force when surrounded by many neighbors
  // This prevents chaotic oscillations in dense clusters
  if (totalNeighbors > 2.0) {
    float damping = 2.0 / totalNeighbors;
    velocity.rg *= damping;
  }

  // Cap the per-pass correction so overlaps resolve by relaxation over a few
  // frames instead of overshooting in one. Across the 4 offset passes the
  // total displacement stays within ~40% of this point's collision radius,
  // which converges without the ping-pong of full-overlap corrections.
  float maxCorrection = currentCollisionRadius * 0.1;
  float correction = length(velocity.rg);
  if (correction > maxCorrection) {
    velocity.rg *= maxCorrection / correction;
  }

  fragColor = velocity;
}
`,n_=[[0,0],[.5,0],[0,.5],[.5,.5]],r_=class extends wg{constructor(){super(...arguments),this.gridTargets=[],this.gridTextureSize=0,this.cellSize=0}create(){var e;let{device:t,store:n,data:r,config:i}=this;if(!n.pointsTextureSize||r.pointsNumber===void 0)return;let a=i.pointDefaultSize??hg.pointDefaultSize;if(r.pointSizes&&r.pointsNumber!==void 0)for(let e=0;e<r.pointsNumber;e++)a=Math.max(a,r.getResolvedPointSize(e));let o=i.simulationCollisionRadius??0,s=i.simulationCollisionPadding??0,c=(o>0?o:a*.5)+s;this.cellSize=Math.max(c*2,8),this.gridTextureSize=Math.min(512,Math.max(1,Math.floor(n.adjustedSpaceSize/this.cellSize))),this.cellSize=n.adjustedSpaceSize/this.gridTextureSize,this.gridTargets.length===n_.length&&this.gridTargets.every(e=>!e.texture.destroyed&&!e.fbo.destroyed&&e.texture.width===this.gridTextureSize)||(this.destroyGridTargets(),this.gridTargets=n_.map(()=>{let e=t.createTexture({width:this.gridTextureSize,height:this.gridTextureSize,format:`rgba32float`,usage:W.SAMPLE|W.RENDER|W.COPY_DST});return{texture:e,fbo:t.createFramebuffer({width:this.gridTextureSize,height:this.gridTextureSize,colorAttachments:[e]})}}));let l=new Float32Array(n.pointsTextureSize*n.pointsTextureSize*4);for(let e=0;e<r.pointsNumber;e++)l[e*4]=r.getResolvedPointSize(e);(!this.sizeTexture||this.sizeTexture.destroyed||this.sizeTexture.width!==n.pointsTextureSize||this.sizeTexture.height!==n.pointsTextureSize)&&(this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=t.createTexture({width:n.pointsTextureSize,height:n.pointsTextureSize,format:`rgba32float`,usage:W.SAMPLE|W.COPY_DST})),this.sizeTexture.copyImageData({data:l,bytesPerRow:Z(`rgba32float`,n.pointsTextureSize),mipLevel:0,x:0,y:0}),this.pointIndices&&this.previousPointsTextureSize===n.pointsTextureSize||(this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=t.createBuffer({data:Vg(n.pointsTextureSize),usage:V.VERTEX|V.COPY_DST}),(e=this.buildGridCommand)==null||e.setAttributes({pointIndices:this.pointIndices})),this.previousPointsTextureSize=n.pointsTextureSize,this.previousSpaceSize=n.adjustedSpaceSize}initPrograms(){let{device:e,store:t,data:n}=this;!n.pointsNumber||!t.pointsTextureSize||(this.buildGridUniformStore||=new G(e,{buildGridUniforms:{uniformTypes:{gridTextureSize:`f32`,cellSize:`f32`,gridOffset:`vec2<f32>`}}}),this.buildGridCommand||=new K(e,{fs:e_,vs:$g,topology:`point-list`,vertexCount:n.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:`pointIndices`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{buildGridUniforms:this.buildGridUniformStore.getManagedUniformBuffer(`buildGridUniforms`)},parameters:{...X,blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`,depthWriteEnabled:!1,depthCompare:`always`}}),this.forceUniformStore||=new G(e,{forceCollisionUniforms:{uniformTypes:{gridTextureSize:`f32`,cellSize:`f32`,alpha:`f32`,collisionStrength:`f32`,collisionRadius:`f32`,collisionPadding:`f32`,pointsNumber:`f32`,gridOffset:`vec2<f32>`}}}),this.forceVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.forceCommand||=new K(e,{fs:t_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceCollisionUniforms:this.forceUniformStore.getManagedUniformBuffer(`forceCollisionUniforms`)},parameters:{...X,blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`,depthWriteEnabled:!1,depthCompare:`always`}}))}run(){let{device:e,store:t,data:n,points:r,config:i}=this;if(!r||!this.buildGridCommand||!this.buildGridUniformStore||!this.forceCommand||!this.forceUniformStore||!this.pointIndices||n.pointsNumber===void 0||!r.previousPositionTexture||r.previousPositionTexture.destroyed||!r.exitTexture||r.exitTexture.destroyed||!r.velocityFbo||r.velocityFbo.destroyed||!this.sizeTexture||this.sizeTexture.destroyed||this.gridTargets.length!==n_.length||t.pointsTextureSize!==this.previousPointsTextureSize||t.adjustedSpaceSize!==this.previousSpaceSize)return;let a=i.simulationCollisionRadius??0,o=i.simulationCollisionPadding??0;this.buildGridCommand.setVertexCount(n.pointsNumber),this.buildGridCommand.setBindings({positionsTexture:r.previousPositionTexture,sizeTexture:this.sizeTexture,exitTexture:r.exitTexture});for(let[t,n]of n_.entries()){let r=this.gridTargets[t];if(!r||r.fbo.destroyed||r.texture.destroyed)continue;this.buildGridUniformStore.setUniforms({buildGridUniforms:{gridTextureSize:this.gridTextureSize,cellSize:this.cellSize,gridOffset:n}});let i=e.beginRenderPass({framebuffer:r.fbo,clearColor:[0,0,0,0]});this.buildGridCommand.draw(i),i.end()}this.forceCommand.setBindings({positionsTexture:r.previousPositionTexture,sizeTexture:this.sizeTexture});let s=e.beginRenderPass({framebuffer:r.velocityFbo,clearColor:[0,0,0,0]});for(let[e,r]of n_.entries()){let c=this.gridTargets[e];!c||c.texture.destroyed||(this.forceUniformStore.setUniforms({forceCollisionUniforms:{gridTextureSize:this.gridTextureSize,cellSize:this.cellSize,alpha:t.alpha,collisionStrength:i.simulationCollision??0,collisionRadius:a,collisionPadding:o,pointsNumber:n.pointsNumber,gridOffset:r}}),this.forceCommand.setBindings({gridTexture:c.texture}),this.forceCommand.draw(s))}s.end()}destroy(){var e,t,n,r;(e=this.buildGridCommand)==null||e.destroy(),this.buildGridCommand=void 0,(t=this.forceCommand)==null||t.destroy(),this.forceCommand=void 0,this.destroyGridTargets(),this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=void 0,(n=this.buildGridUniformStore)==null||n.destroy(),this.buildGridUniformStore=void 0,(r=this.forceUniformStore)==null||r.destroy(),this.forceUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.forceVertexCoordBuffer&&!this.forceVertexCoordBuffer.destroyed&&this.forceVertexCoordBuffer.destroy(),this.forceVertexCoordBuffer=void 0}destroyGridTargets(){for(let e of this.gridTargets)e.fbo&&!e.fbo.destroyed&&e.fbo.destroy();for(let e of this.gridTargets)e.texture&&!e.texture.destroyed&&e.texture.destroy();this.gridTargets=[]}},i_=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceGravityUniforms {
  float gravity;
  float spaceSize;
  float alpha;
} forceGravity;

#define gravity forceGravity.gravity
#define spaceSize forceGravity.spaceSize
#define alpha forceGravity.alpha
#else
uniform float gravity;
uniform float spaceSize;
uniform float alpha;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);

  vec4 velocity = vec4(0.0);

  vec2 centerPosition = vec2(spaceSize * 0.5);
  vec2 distVector = centerPosition - pointPosition.rg;
  float dist = sqrt(dot(distVector, distVector));
  if (dist > 0.0) {
    float angle = atan(distVector.y, distVector.x);
    float additionalVelocity = alpha * gravity * dist * 0.1;
    velocity.rg += additionalVelocity * vec2(cos(angle), sin(angle));
  }

  fragColor = velocity;
}`,a_=class extends wg{initPrograms(){let{device:e,points:t,store:n}=this;!t||!n.pointsTextureSize||(this.vertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.uniformStore||=new G(e,{forceGravityUniforms:{uniformTypes:{gravity:`f32`,spaceSize:`f32`,alpha:`f32`}}}),this.runCommand||=new K(e,{fs:i_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceGravityUniforms:this.uniformStore.getManagedUniformBuffer(`forceGravityUniforms`)},parameters:X}))}run(){let{device:e,points:t,store:n}=this;if(!t||!this.runCommand||!this.uniformStore||!t.previousPositionTexture||t.previousPositionTexture.destroyed||!t.velocityFbo||t.velocityFbo.destroyed)return;this.uniformStore.setUniforms({forceGravityUniforms:{gravity:this.config.simulationGravity,spaceSize:n.adjustedSpaceSize,alpha:n.alpha}}),this.runCommand.setBindings({positionsTexture:t.previousPositionTexture});let r=e.beginRenderPass({framebuffer:t.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(r),r.end()}destroy(){var e,t;(e=this.runCommand)==null||e.destroy(),this.runCommand=void 0,(t=this.uniformStore)==null||t.destroy(),this.uniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}};function o_(e){return`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;
uniform sampler2D linkInfoTexture; // Texture storing first link indices and amount
uniform sampler2D linkIndicesTexture;
uniform sampler2D linkPropertiesTexture; // Texture storing link bias and strength
uniform sampler2D linkRandomDistanceTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceLinkUniforms {
  float linkSpring;
  float linkDistance;
  vec2 linkDistRandomVariationRange;
  float linksTextureSize;
  float alpha;
} forceLink;

#define linkSpring forceLink.linkSpring
#define linkDistance forceLink.linkDistance
#define linkDistRandomVariationRange forceLink.linkDistRandomVariationRange
#define linksTextureSize forceLink.linksTextureSize
#define alpha forceLink.alpha
#else
uniform float linkSpring;
uniform float linkDistance;
uniform vec2 linkDistRandomVariationRange;
uniform float linksTextureSize;
uniform float alpha;
#endif

out vec4 fragColor;

const float MAX_LINKS = ${e}.0;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);

  vec4 linkInfo = texelFetch(linkInfoTexture, pointTexel, 0);
  float iCount = linkInfo.r;
  float jCount = linkInfo.g;
  float linkAmount = linkInfo.b;
  if (linkAmount > 0.0) {
    for (float i = 0.0; i < MAX_LINKS; i += 1.0) {
      if (i < linkAmount) {
        if (iCount >= linksTextureSize) {
          iCount = 0.0;
          jCount += 1.0;
        }
        ivec2 linkTexel = ivec2(iCount, jCount);
        vec4 connectedPointIndex = texelFetch(linkIndicesTexture, linkTexel, 0);
        vec4 biasAndStrength = texelFetch(linkPropertiesTexture, linkTexel, 0);
        vec4 randomMinDistance = texelFetch(linkRandomDistanceTexture, linkTexel, 0);
        float bias = biasAndStrength.r;
        float strength = biasAndStrength.g;
        float randomMinLinkDist = randomMinDistance.r * (linkDistRandomVariationRange.g - linkDistRandomVariationRange.r) + linkDistRandomVariationRange.r;
        randomMinLinkDist *= linkDistance;

        iCount += 1.0;

        // linkIndicesTexture stores whole texel coordinates, so truncating is exact.
        ivec2 connectedTexel = ivec2(connectedPointIndex.rg);

        // Skip a link to an absent point — its position would poison the spring
        // force. (exit.G = current absence)
        vec4 connectedExit = texelFetch(exitTexture, connectedTexel, 0);
        if (connectedExit.g > 0.5) {
          continue;
        }

        vec4 connectedPointPosition = texelFetch(positionsTexture, connectedTexel, 0);
        float x = connectedPointPosition.x - (pointPosition.x + velocity.x);
        float y = connectedPointPosition.y - (pointPosition.y + velocity.y);
        float l = sqrt(x * x + y * y);

        // Apply the link force
        l = max(l, randomMinLinkDist * 0.99);
        l = (l - randomMinLinkDist) / l;
        l *= linkSpring * alpha;
        l *= strength;
        l *= bias;
        x *= l;
        y *= l;
        velocity.x += x;
        velocity.y += y;
      }
    }
  }

  fragColor = vec4(velocity.rg, 0.0, 0.0);
}
  `}var s_=(e=>(e.OUTGOING=`outgoing`,e.INCOMING=`incoming`,e))(s_||{}),c_=class extends wg{constructor(){super(...arguments),this.linkFirstIndicesAndAmount=new Float32Array,this.indices=new Float32Array,this.maxPointDegree=0}create(e){var t;let{device:n,store:{pointsTextureSize:r,linksTextureSize:i},data:a}=this;if(!r||!i)return;this.linkFirstIndicesAndAmount=new Float32Array(r*r*4),this.indices=new Float32Array(i*i*4);let o=new Float32Array(i*i*4),s=new Float32Array(i*i*4),c=e===`incoming`?a.linksBySource:a.linksByTarget;if(this.maxPointDegree=0,c){let{offsets:e,neighbors:t,linkIndices:n}=c;for(let c=0;c<e.length-1;c++){let l=e[c],u=e[c+1],d=u-l;if(d!==0){this.linkFirstIndicesAndAmount[c*4+0]=l%i,this.linkFirstIndicesAndAmount[c*4+1]=Math.floor(l/i),this.linkFirstIndicesAndAmount[c*4+2]=d;for(let e=l;e<u;e++){let i=t[e],l=n[e];this.indices[e*4+0]=i%r,this.indices[e*4+1]=Math.floor(i/r);let u=a.degree?.[i]??0,d=a.degree?.[c]??0,f=u+d,p=f===0?.5:u/f,m=Math.min(u,d),h=a.linkStrength?.[l];(h===void 0||!Number.isFinite(h)||h<0)&&(h=1/Math.max(m,1)),h=Math.sqrt(h),o[e*4+0]=p,o[e*4+1]=h,s[e*4]=this.store.getRandomFloat(0,1)}this.maxPointDegree=Math.max(this.maxPointDegree,d)}}}let l=!this.linkFirstIndicesAndAmountTexture||this.linkFirstIndicesAndAmountTexture.width!==r||this.linkFirstIndicesAndAmountTexture.height!==r,u=!this.indicesTexture||this.indicesTexture.width!==i||this.indicesTexture.height!==i;l&&(this.linkFirstIndicesAndAmountTexture&&!this.linkFirstIndicesAndAmountTexture.destroyed&&this.linkFirstIndicesAndAmountTexture.destroy(),this.linkFirstIndicesAndAmountTexture=n.createTexture({width:r,height:r,format:`rgba32float`,usage:W.SAMPLE|W.COPY_DST})),this.linkFirstIndicesAndAmountTexture.copyImageData({data:this.linkFirstIndicesAndAmount,bytesPerRow:Z(`rgba32float`,r),mipLevel:0,x:0,y:0}),u&&(this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.biasAndStrengthTexture&&!this.biasAndStrengthTexture.destroyed&&this.biasAndStrengthTexture.destroy(),this.randomDistanceTexture&&!this.randomDistanceTexture.destroyed&&this.randomDistanceTexture.destroy(),this.indicesTexture=n.createTexture({width:i,height:i,format:`rgba32float`,usage:W.SAMPLE|W.COPY_DST}),this.biasAndStrengthTexture=n.createTexture({width:i,height:i,format:`rgba32float`,usage:W.SAMPLE|W.COPY_DST}),this.randomDistanceTexture=n.createTexture({width:i,height:i,format:`rgba32float`,usage:W.SAMPLE|W.COPY_DST})),this.indicesTexture.copyImageData({data:this.indices,bytesPerRow:Z(`rgba32float`,i),mipLevel:0,x:0,y:0}),this.biasAndStrengthTexture.copyImageData({data:o,bytesPerRow:Z(`rgba32float`,i),mipLevel:0,x:0,y:0}),this.randomDistanceTexture.copyImageData({data:s,bytesPerRow:Z(`rgba32float`,i),mipLevel:0,x:0,y:0}),this.previousMaxPointDegree!==void 0&&this.previousMaxPointDegree!==this.maxPointDegree&&((t=this.runCommand)==null||t.destroy(),this.runCommand=void 0),this.previousMaxPointDegree=this.maxPointDegree,this.previousPointsTextureSize=r,this.previousLinksTextureSize=i}initPrograms(){let{device:e,store:t,points:n}=this;n&&t.pointsTextureSize&&t.linksTextureSize&&this.linkFirstIndicesAndAmountTexture&&this.indicesTexture&&this.biasAndStrengthTexture&&this.randomDistanceTexture&&(this.vertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.uniformStore||=new G(e,{forceLinkUniforms:{uniformTypes:{linkSpring:`f32`,linkDistance:`f32`,linkDistRandomVariationRange:`vec2<f32>`,linksTextureSize:`f32`,alpha:`f32`}}}),this.runCommand||=new K(e,{fs:o_(this.maxPointDegree),vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceLinkUniforms:this.uniformStore.getManagedUniformBuffer(`forceLinkUniforms`)},parameters:X}))}run(){let{device:e,store:t,points:n}=this;if(!n||!this.runCommand||!this.uniformStore||!n.previousPositionTexture||n.previousPositionTexture.destroyed||!n.exitTexture||n.exitTexture.destroyed||!this.linkFirstIndicesAndAmountTexture||!this.indicesTexture||!this.biasAndStrengthTexture||!this.randomDistanceTexture||!n.velocityFbo||n.velocityFbo.destroyed||t.pointsTextureSize!==this.previousPointsTextureSize||t.linksTextureSize!==this.previousLinksTextureSize)return;this.uniformStore.setUniforms({forceLinkUniforms:{linkSpring:this.config.simulationLinkSpring,linkDistance:this.config.simulationLinkDistance,linkDistRandomVariationRange:Q(this.config.simulationLinkDistRandomVariationRange,[0,0]),linksTextureSize:t.linksTextureSize,alpha:t.alpha}}),this.runCommand.setBindings({positionsTexture:n.previousPositionTexture,exitTexture:n.exitTexture,linkInfoTexture:this.linkFirstIndicesAndAmountTexture,linkIndicesTexture:this.indicesTexture,linkPropertiesTexture:this.biasAndStrengthTexture,linkRandomDistanceTexture:this.randomDistanceTexture});let r=e.beginRenderPass({framebuffer:n.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(r),r.end()}destroy(){var e,t;(e=this.runCommand)==null||e.destroy(),this.runCommand=void 0,this.linkFirstIndicesAndAmountTexture&&!this.linkFirstIndicesAndAmountTexture.destroyed&&this.linkFirstIndicesAndAmountTexture.destroy(),this.linkFirstIndicesAndAmountTexture=void 0,this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.indicesTexture=void 0,this.biasAndStrengthTexture&&!this.biasAndStrengthTexture.destroyed&&this.biasAndStrengthTexture.destroy(),this.biasAndStrengthTexture=void 0,this.randomDistanceTexture&&!this.randomDistanceTexture.destroyed&&this.randomDistanceTexture.destroy(),this.randomDistanceTexture=void 0,(t=this.uniformStore)==null||t.destroy(),this.uniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}},l_=`#version 300 es
precision highp float;

in vec4 vColor;
out vec4 fragColor;

void main() {
  fragColor = vColor;
}`,u_=`#version 300 es
precision highp float;

// Aggregates each point into its grid cell. A level is a plain 2D grid of
// \`levelGridSize\` cells per axis rendered one texel per cell; additive blending
// accumulates [sum(x), sum(y), count, 0] per cell via calculate-level.frag.

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform calculateLevelsPreciseUniforms {
  float levelGridSize;
  float cellSize;
} calculateLevelsPrecise;

#define levelGridSize calculateLevelsPrecise.levelGridSize
#define cellSize calculateLevelsPrecise.cellSize
#else
uniform float levelGridSize;
uniform float cellSize;
#endif

in vec2 pointIndices;

out vec4 vColor;

void main() {
  vColor = vec4(0.0);

  ivec2 pointTexel = ivec2(pointIndices);

  // Absent points must not enter the grid — a NaN position bins to a NaN cell and
  // poisons the centermass that drives repulsion for every point. (exit.G = absent)
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vColor = vec4(pointPosition.rg, 1.0, 0.0);

  // The clamp must match the force shaders exactly, or boundary points fall out
  // of the level decomposition's exactly-once coverage.
  int gridSize = int(levelGridSize);
  ivec2 cell = clamp(ivec2(floor(pointPosition.rg / cellSize)), ivec2(0), ivec2(gridSize - 1));

  vec2 levelPosition = 2.0 * (vec2(cell) + 0.5) / levelGridSize - 1.0;
  gl_Position = vec4(levelPosition, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,d_=`#version 300 es
precision highp float;

// One grid level of precise many-body repulsion (Barnes-Hut-style approximation).
//
// Levels are 2D grids of increasing resolution (4², 8², …) holding
// [sum(x), sum(y), count, 0] per cell. The decomposition tiles space exactly
// once across the level passes: after level L the only un-accumulated region is
// the 3×3 Chebyshev-1 neighborhood of the point's cell, which the next level
// refines (its aligned 6×6 child block), and which force-nearfield.frag finally
// covers at the finest level. The exclusion shell is fixed at Chebyshev
// distance 1.

uniform sampler2D positionsTexture;
uniform sampler2D levelTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceLevelPreciseUniforms {
  float levelGridSize;
  float cellSize;
  float isFirstLevel;
  float alpha;
  float repulsion;
} forceLevelPrecise;

#define levelGridSize forceLevelPrecise.levelGridSize
#define cellSize forceLevelPrecise.cellSize
#define isFirstLevel forceLevelPrecise.isFirstLevel
#define alpha forceLevelPrecise.alpha
#define repulsion forceLevelPrecise.repulsion
#else
uniform float levelGridSize;
uniform float cellSize;
uniform float isFirstLevel;
uniform float alpha;
uniform float repulsion;
#endif

out vec4 fragColor;

// Repulsion from one cell's center of mass — a d3-style clamped
// inverse-distance falloff.
vec2 cellVelocity(ivec2 cell, vec2 position) {
  vec4 centermass = texelFetch(levelTexture, cell, 0);
  // Count-only guard: zero coordinate sums are legitimate, but dividing by a zero
  // count would produce NaN that additive blending propagates into the velocity FBO.
  if (centermass.b <= 0.0) return vec2(0.0);
  vec2 centermassPosition = centermass.rg / centermass.b;
  vec2 distVector = position - centermassPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) return vec2(0.0);
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion * centermass.b / sqrt(l);
  return addV * normalize(distVector);
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 position = pointPosition.rg;

  int gridSize = int(levelGridSize);
  // Must match the aggregation shader's cell formula exactly.
  ivec2 pointCell = clamp(ivec2(floor(position / cellSize)), ivec2(0), ivec2(gridSize - 1));

  vec2 velocity = vec2(0.0);

  if (isFirstLevel > 0.5) {
    // Coarsest level: every cell except the 3×3 neighborhood, which finer levels refine.
    for (int j = 0; j < gridSize; j += 1) {
      for (int i = 0; i < gridSize; i += 1) {
        ivec2 cell = ivec2(i, j);
        ivec2 cellDist = abs(cell - pointCell);
        if (max(cellDist.x, cellDist.y) <= 1) continue;
        velocity += cellVelocity(cell, position);
      }
    }
  } else {
    // The coarser level left its 3×3 neighborhood unhandled; those cells refine to
    // the aligned 6×6 child block at this level. Sample it minus this level's own
    // 3×3 neighborhood (always strictly inside the block).
    ivec2 base = (pointCell / 2) * 2 - 2;
    for (int j = 0; j < 6; j += 1) {
      for (int i = 0; i < 6; i += 1) {
        ivec2 cell = base + ivec2(i, j);
        // Bounds check must precede texelFetch (out-of-range fetches are undefined).
        if (any(lessThan(cell, ivec2(0))) || any(greaterThanEqual(cell, ivec2(gridSize)))) continue;
        ivec2 cellDist = abs(cell - pointCell);
        if (max(cellDist.x, cellDist.y) <= 1) continue;
        velocity += cellVelocity(cell, position);
      }
    }
  }

  fragColor = vec4(velocity, 0.0, 0.0);
}
`,f_=`#version 300 es
precision highp float;
// Fragment shaders default int to mediump, guaranteed only to 32767 —
// point indices go far higher.
precision highp int;

// Near-field pass of the precise grid repulsion (P3M-style). After the finest
// level pass, the only un-accumulated region is the 3×3 neighborhood of the
// point's cell.
//
// Cell centroids exert a purely radial force there, which flattens dense hubs
// into disks and petals — even as a residual for unsampled mass, the centroid
// bias dominates (tangential repulsion scaled by ~K/n never spreads a dense
// clump before alpha decays). So the near field is a pure Monte-Carlo estimator
// instead: the K depth-peeled points of a cell are a uniform random subset
// (re-drawn every tick by build-nearfield-slots.vert), and weighting each
// sampled pairwise force by count/sampled makes the expected force equal the
// exact all-pairs sum — unbiased, no centroid term. Cells holding ≤ K points
// are sampled exhaustively, so their forces are exact. The per-tick sampling
// noise acts as annealed jitter: it shrinks with alpha and is precisely what
// breaks clumps apart. The point itself is excluded from both the sample and
// the count.

uniform sampler2D positionsTexture;
uniform sampler2D levelTexture;
uniform sampler2D randomValues;
// All near-field slots live in one array texture (one layer per depth-peeling
// pass), so the slot count is a runtime uniform instead of a hard-wired list
// of sampler2Ds. Float data — highp, the default sampler precision is lowp.
uniform highp sampler2DArray slotsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceNearFieldUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float cellSize;
  float alpha;
  float repulsion;
  float slotCount;
} forceNearField;

#define pointsTextureSize forceNearField.pointsTextureSize
#define levelGridSize forceNearField.levelGridSize
#define cellSize forceNearField.cellSize
#define alpha forceNearField.alpha
#define repulsion forceNearField.repulsion
#define slotCount forceNearField.slotCount
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float cellSize;
uniform float alpha;
uniform float repulsion;
uniform float slotCount;
#endif

out vec4 fragColor;

// Same clamped inverse-distance falloff as the level passes (must stay identical).
vec2 pairwiseVelocity(vec2 position, vec2 otherPosition, vec2 randomDir) {
  vec2 distVector = position - otherPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) {
    // Exactly coincident points have no separation direction, so an inverse-distance
    // force is undefined and they would stay stacked forever — a stack's cell count
    // then repels everything around it, carving a void ring. Kick along this point's
    // random vector instead (each point has a different one, so a pile disperses).
    distVector = randomDir;
    l = dot(distVector, distVector);
    if (l <= 0.0) return vec2(0.0);
  }
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion / sqrt(l);
  return addV * normalize(distVector);
}

// One peeled slot of a cell: the unweighted pairwise force from the sampled
// point, counting it toward the sample size. Empty slots and the point itself
// contribute nothing.
vec2 slotVelocity(vec2 slot, vec2 position, float selfIndex, vec2 randomDir, inout float sampled) {
  float index = slot.x;
  // Skip empty slots (index -1) and the point itself. This exact \`==\` — and the
  // texel math just below — count on a point index fitting exactly in a float,
  // which only holds for whole numbers up to ~16.7M (2^24). That's every
  // realistic graph; you'd need a points texture bigger than 4096² to get there.
  // Past that, indices start rounding, so a point could sample the wrong texel or
  // fail to skip itself — but you'd hit memory limits long before it matters.
  if (index < 0.0 || index == selfIndex) return vec2(0.0);
  int size = int(pointsTextureSize);
  int i = int(index);
  vec4 other = texelFetch(positionsTexture, ivec2(i % size, i / size), 0);
  sampled += 1.0;
  return pairwiseVelocity(position, other.rg, randomDir);
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 position = pointPosition.rg;
  // One fragment per point: the fragment's pixel is the point's texel.
  float selfIndex = floor(gl_FragCoord.y) * pointsTextureSize + floor(gl_FragCoord.x);
  vec4 random = texelFetch(randomValues, pointTexel, 0);

  int gridSize = int(levelGridSize);
  ivec2 pointCell = clamp(ivec2(floor(position / cellSize)), ivec2(0), ivec2(gridSize - 1));

  vec2 velocity = vec2(0.0);

  for (int j = -1; j <= 1; j += 1) {
    for (int i = -1; i <= 1; i += 1) {
      ivec2 cell = pointCell + ivec2(i, j);
      if (any(lessThan(cell, ivec2(0))) || any(greaterThanEqual(cell, ivec2(gridSize)))) continue;

      // [sum(x), sum(y), count, 0] — only the count is used here.
      vec4 aggregate = texelFetch(levelTexture, cell, 0);
      // The count never includes the point itself in the estimate.
      bool ownCell = (i == 0 && j == 0);
      float others = aggregate.b - (ownCell ? 1.0 : 0.0);
      if (others <= 0.0) continue;

      vec2 pairSum = vec2(0.0);
      float sampled = 0.0;
      // One layer per depth-peeling pass. An exhausted cell peels empty slots
      // (index -1) for the remaining layers; the early break skips them —
      // empty layers can't be followed by occupied ones within a cell.
      int slots = int(slotCount);
      for (int s = 0; s < slots; s += 1) {
        vec2 slot = texelFetch(slotsTexture, ivec3(cell, s), 0).rg;
        if (slot.x < 0.0) break;
        pairSum += slotVelocity(slot, position, selfIndex, random.rg, sampled);
      }

      // Horvitz–Thompson weighting: the sample is uniform among the cell's
      // other points (conditioned on whether the point itself was peeled),
      // so scaling by others/sampled gives E[force] = exact all-pairs sum.
      // Exhaustively peeled cells (others == sampled) are exact.
      if (sampled > 0.0) velocity += (others / sampled) * pairSum;
    }
  }

  // Random jitter proportional to the velocity, to keep points from sticking.
  velocity += velocity * random.rg;

  // Bound the per-tick kick to the neighborhood scale. The estimator is unbiased
  // but high-variance: in a cell holding far more points than sampled slots, the
  // count/sampled weight can turn a few close samples into a huge one-tick kick.
  // Unbounded, that flings points across the screen at startup and — because the
  // weight is largest where density is highest — ejects points from dense cluster
  // centers, leaving voids. Clamping the magnitude keeps the spreading direction
  // while capping the fling; genuine spreading kicks are far below this bound and
  // pass through untouched. The far-field grid levels still drive bulk expansion.
  float maxStep = 2.0 * cellSize;
  float speed = length(velocity);
  if (speed > maxStep) velocity *= maxStep / speed;

  fragColor = vec4(velocity, 0.0, 0.0);
}
`,p_=`#version 300 es
precision highp float;
// Fragment shaders default int to mediump, guaranteed only to 32767 —
// point indices go far higher.
precision highp int;

// Exact all-pairs repulsion for small graphs. One fragment per point, looping
// over every other point — O(n²) total, but below the brute-force threshold a
// single pass is both cheaper than the grid pyramid's sequential depth-peeling
// passes and exact at any cell occupancy: no Monte-Carlo sampling, hence none
// of the per-tick re-sampling noise that shows up as shimmer in dense layouts
// (see force-nearfield.frag for the sampled path used above the threshold).

uniform sampler2D positionsTexture;
uniform sampler2D randomValues;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceAllPairsUniforms {
  float pointsTextureSize;
  float pointsNumber;
  float alpha;
  float repulsion;
  float maxStep;
} forceAllPairs;

#define pointsTextureSize forceAllPairs.pointsTextureSize
#define pointsNumber forceAllPairs.pointsNumber
#define alpha forceAllPairs.alpha
#define repulsion forceAllPairs.repulsion
#define maxStep forceAllPairs.maxStep
#else
uniform float pointsTextureSize;
uniform float pointsNumber;
uniform float alpha;
uniform float repulsion;
uniform float maxStep;
#endif

out vec4 fragColor;

// Same clamped inverse-distance falloff as the grid-path shaders (must stay identical).
vec2 pairwiseVelocity(vec2 position, vec2 otherPosition, vec2 randomDir) {
  vec2 distVector = position - otherPosition;
  float l = dot(distVector, distVector);
  if (l <= 0.0) {
    // Exactly coincident points have no separation direction, so an
    // inverse-distance force is undefined and they would stay stacked forever.
    // Kick along this point's random vector instead (each point has a
    // different one, so a pile disperses).
    distVector = randomDir;
    l = dot(distVector, distVector);
    if (l <= 0.0) return vec2(0.0);
  }
  float distanceMin2 = 1.0;
  if (l < distanceMin2) l = sqrt(distanceMin2 * l);
  float addV = alpha * repulsion / sqrt(l);
  return addV * normalize(distVector);
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);
  int size = int(pointsTextureSize);
  int selfIndex = pointTexel.y * size + pointTexel.x;
  int count = int(pointsNumber);

  // Fragments beyond the point count are unused texture pixels.
  if (selfIndex >= count) {
    fragColor = vec4(0.0);
    return;
  }

  // An absent point must neither move nor repel (its position is NaN).
  vec4 selfExit = texelFetch(exitTexture, pointTexel, 0);
  if (selfExit.g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec2 position = texelFetch(positionsTexture, pointTexel, 0).rg;
  vec4 random = texelFetch(randomValues, pointTexel, 0);

  // Pairs are split at the grid path's near-field scale (maxStep = 2 × the
  // finest cell size it would use at this point count): closer pairs
  // correspond to its 3×3 near-field pass — jittered and bounded below, the
  // way that pass bounds its own sum — farther pairs to its level passes,
  // which it leaves unbounded. The same split keeps the dynamics continuous
  // across the point-count threshold between the two paths.
  vec2 nearVelocity = vec2(0.0);
  vec2 farVelocity = vec2(0.0);
  float nearRadius2 = maxStep * maxStep;
  for (int i = 0; i < count; i += 1) {
    if (i == selfIndex) continue;
    ivec2 texel = ivec2(i % size, i / size);
    if (texelFetch(exitTexture, texel, 0).g > 0.5) continue;
    vec2 otherPosition = texelFetch(positionsTexture, texel, 0).rg;
    vec2 distVector = position - otherPosition;
    vec2 pairVelocity = pairwiseVelocity(position, otherPosition, random.rg);
    if (dot(distVector, distVector) < nearRadius2) nearVelocity += pairVelocity;
    else farVelocity += pairVelocity;
  }

  // Random jitter proportional to the near velocity, to keep points from
  // sticking (same as the near-field pass).
  nearVelocity += nearVelocity * random.rg;

  // Bound the per-tick near kick. Exactness alone does not bound it: the
  // falloff still diverges at near-zero separations, and a coincident stack
  // sums n−1 same-direction random kicks into one fling. The clamp caps the
  // magnitude and keeps the direction.
  float speed = length(nearVelocity);
  if (speed > maxStep) nearVelocity *= maxStep / speed;

  fragColor = vec4(farVelocity + nearVelocity, 0.0, 0.0);
}
`,m_=`#version 300 es
precision highp float;

// One depth-peeling pass of the near-field point-slot build.
//
// The precise grid's near field needs actual point-to-point forces (cell
// centroids alone exert a purely radial force that flattens dense hubs into
// disks and spikes). Each peeling pass selects, per finest-level cell, the
// not-yet-peeled point with the smallest per-tick random hash: the depth test
// keeps the smallest \`hashValue\` among eligible points, and eligibility excludes
// points already captured by the previous slot (hash <= previous slot's hash).
// Running K passes yields a uniform random K-subset per cell, re-randomized
// every tick via \`randomSeed\`; force-nearfield.frag turns it into an unbiased
// estimate of the cell's exact all-pairs repulsion (Monte-Carlo P3M).

uniform sampler2D positionsTexture;
uniform sampler2D previousSlot;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform buildNearFieldSlotsUniforms {
  float pointsTextureSize;
  float levelGridSize;
  float cellSize;
  float hasPreviousSlot;
  float randomSeed;
} buildNearFieldSlots;

#define pointsTextureSize buildNearFieldSlots.pointsTextureSize
#define levelGridSize buildNearFieldSlots.levelGridSize
#define cellSize buildNearFieldSlots.cellSize
#define hasPreviousSlot buildNearFieldSlots.hasPreviousSlot
#define randomSeed buildNearFieldSlots.randomSeed
#else
uniform float pointsTextureSize;
uniform float levelGridSize;
uniform float cellSize;
uniform float hasPreviousSlot;
uniform float randomSeed;
#endif

in vec2 pointIndices;

out vec2 slotData; // [point index, hash]

void main() {
  ivec2 pointTexel = ivec2(pointIndices);

  // Absent points must not be captured as neighbors — a NaN position bins to an
  // undefined cell and its distance poisons the force of every point sampling
  // that slot. Same guard as calculate-level.vert. (exit.G = absent)
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    slotData = vec2(-1.0, 1.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 1.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  float index = pointIndices.y * pointsTextureSize + pointIndices.x;

  // Per-tick random ordering via an integer hash (lowbias32). A fract(sin(...))
  // hash breaks down here: at large point indices GPU sin() loses precision
  // (differently per vendor), producing correlated or colliding hashes — and a
  // hash collision makes the peeling test below silently drop a point from the
  // sample. Integer ops are exact everywhere, and both inputs are exact (the
  // index is an integer-valued float; floatBitsToUint reinterprets seed bits).
  uint h = uint(index) ^ floatBitsToUint(randomSeed);
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  // Top 24 bits only, so the value is exactly representable in a float32 and
  // round-trips bit-exactly through the slot texture into the next pass's
  // comparison. Kept strictly inside (0, 1) so the depth range is safe.
  float hashValue = (float(h >> 8u) + 0.5) / 16777216.0;
  hashValue = 0.001 + hashValue * 0.998;

  // Must match the cell formula of the aggregation and force shaders exactly.
  int gridSize = int(levelGridSize);
  ivec2 cell = clamp(ivec2(floor(pointPosition.rg / cellSize)), ivec2(0), ivec2(gridSize - 1));

  if (hasPreviousSlot > 0.5) {
    vec2 previous = texelFetch(previousSlot, cell, 0).rg;
    // Eligible only if the previous slot captured a point with a smaller hash.
    // An empty previous slot (index -1) means the cell is exhausted — otherwise
    // this pass would re-capture already-peeled points and double-count them.
    if (previous.x < 0.0 || hashValue <= previous.y) {
      slotData = vec2(-1.0, 1.0);
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 1.0;
      return;
    }
  }

  slotData = vec2(index, hashValue);
  vec2 ndc = 2.0 * (vec2(cell) + 0.5) / levelGridSize - 1.0;
  // The depth test (less) keeps the eligible point with the smallest hash.
  gl_Position = vec4(ndc, hashValue * 2.0 - 1.0, 1.0);
  gl_PointSize = 1.0;
}
`,h_=`#version 300 es
precision highp float;

in vec2 slotData;
out vec4 fragColor;

void main() {
  fragColor = vec4(slotData, 0.0, 0.0);
}
`,g_=512,__=e=>Math.min(g_,Math.max(8,2**Math.ceil(Math.log2(2*Math.sqrt(e))))),v_=e=>e<=16384?32:e<=65536?16:8,y_=4096,b_=2,x_=class extends wg{constructor(){super(...arguments),this.levels=0,this.levelTargets=new Map,this.nearFieldSlots=0,this.peelTargets=[]}get usesAllPairs(){return(this.data.pointsNumber??0)<=y_}create(){var e,t;let{device:n,store:r}=this;if(!r.pointsTextureSize)return;this.usesAllPairs?(this.destroyLevelTargets(),this.levels=0):this.createLevels();let i=r.pointsTextureSize*r.pointsTextureSize,a=new Float32Array(i*4);for(let e=0;e<i;++e)a[e*4]=r.getRandomFloat(-1,1)*1e-5,a[e*4+1]=r.getRandomFloat(-1,1)*1e-5;if((!this.randomValuesTexture||this.randomValuesTexture.destroyed||this.randomValuesTexture.width!==r.pointsTextureSize||this.randomValuesTexture.height!==r.pointsTextureSize)&&(this.randomValuesTexture&&!this.randomValuesTexture.destroyed&&this.randomValuesTexture.destroy(),this.randomValuesTexture=n.createTexture({width:r.pointsTextureSize,height:r.pointsTextureSize,format:`rgba32float`,usage:W.SAMPLE|W.COPY_DST})),this.randomValuesTexture.copyImageData({data:a,bytesPerRow:Z(`rgba32float`,r.pointsTextureSize),mipLevel:0,x:0,y:0}),!this.pointIndices||this.previousPointsTextureSize!==r.pointsTextureSize){this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy();let i=Vg(r.pointsTextureSize);this.pointIndices=n.createBuffer({data:i,usage:V.VERTEX|V.COPY_DST}),(e=this.calculateLevelsCommand)==null||e.setAttributes({pointIndices:this.pointIndices}),(t=this.buildNearFieldSlotsCommand)==null||t.setAttributes({pointIndices:this.pointIndices})}this.previousPointsTextureSize=r.pointsTextureSize,this.previousPointsNumber=this.data.pointsNumber}initPrograms(){let{device:e,store:t,data:n,points:r}=this;n.pointsNumber&&r&&t.pointsTextureSize&&(this.forceVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.calculateLevelsUniformStore||=new G(e,{calculateLevelsPreciseUniforms:{uniformTypes:{levelGridSize:`f32`,cellSize:`f32`},defaultUniforms:{levelGridSize:0,cellSize:0}}}),this.calculateLevelsCommand||=new K(e,{fs:l_,vs:u_,topology:`point-list`,vertexCount:n.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:`pointIndices`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{calculateLevelsPreciseUniforms:this.calculateLevelsUniformStore.getManagedUniformBuffer(`calculateLevelsPreciseUniforms`)},parameters:{...X,blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`,depthWriteEnabled:!1,depthCompare:`always`}}),this.forceLevelUniformStore||=new G(e,{forceLevelPreciseUniforms:{uniformTypes:{levelGridSize:`f32`,cellSize:`f32`,isFirstLevel:`f32`,alpha:`f32`,repulsion:`f32`},defaultUniforms:{levelGridSize:0,cellSize:0,isFirstLevel:0,alpha:t.alpha,repulsion:this.config.simulationRepulsion}}}),this.forceLevelCommand||=new K(e,{fs:d_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceLevelPreciseUniforms:this.forceLevelUniformStore.getManagedUniformBuffer(`forceLevelPreciseUniforms`)},parameters:{...X,blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`,depthWriteEnabled:!1,depthCompare:`always`}}),this.buildNearFieldSlotsUniformStore||=new G(e,{buildNearFieldSlotsUniforms:{uniformTypes:{pointsTextureSize:`f32`,levelGridSize:`f32`,cellSize:`f32`,hasPreviousSlot:`f32`,randomSeed:`f32`},defaultUniforms:{pointsTextureSize:t.pointsTextureSize,levelGridSize:0,cellSize:0,hasPreviousSlot:0,randomSeed:0}}}),this.buildNearFieldSlotsCommand||=new K(e,{fs:h_,vs:m_,topology:`point-list`,vertexCount:n.pointsNumber,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:`pointIndices`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{buildNearFieldSlotsUniforms:this.buildNearFieldSlotsUniformStore.getManagedUniformBuffer(`buildNearFieldSlotsUniforms`)},parameters:{...X,blend:!1,depthWriteEnabled:!0,depthCompare:`less`}}),this.forceNearFieldUniformStore||=new G(e,{forceNearFieldUniforms:{uniformTypes:{pointsTextureSize:`f32`,levelGridSize:`f32`,cellSize:`f32`,alpha:`f32`,repulsion:`f32`,slotCount:`f32`},defaultUniforms:{pointsTextureSize:t.pointsTextureSize,levelGridSize:0,cellSize:0,alpha:t.alpha,repulsion:this.config.simulationRepulsion,slotCount:0}}}),this.forceAllPairsUniformStore||=new G(e,{forceAllPairsUniforms:{uniformTypes:{pointsTextureSize:`f32`,pointsNumber:`f32`,alpha:`f32`,repulsion:`f32`,maxStep:`f32`},defaultUniforms:{pointsTextureSize:t.pointsTextureSize,pointsNumber:n.pointsNumber,alpha:t.alpha,repulsion:this.config.simulationRepulsion,maxStep:0}}}),this.forceAllPairsCommand||=new K(e,{fs:p_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceAllPairsUniforms:this.forceAllPairsUniformStore.getManagedUniformBuffer(`forceAllPairsUniforms`)},parameters:X}),this.forceNearFieldCommand||=new K(e,{fs:f_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.forceVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceNearFieldUniforms:this.forceNearFieldUniformStore.getManagedUniformBuffer(`forceNearFieldUniforms`)},parameters:{...X,blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`,depthWriteEnabled:!1,depthCompare:`always`}}))}run(){if(this.store.pointsTextureSize===this.previousPointsTextureSize&&this.data.pointsNumber===this.previousPointsNumber){if(this.usesAllPairs){this.drawAllPairsForce();return}this.levelTargets.size===0||this.peelTargets.length!==b_||!this.slotsArrayTexture||(this.drawLevels(),this.drawNearFieldSlots(),this.drawForces())}}destroy(){var e,t,n,r,i,a,o,s,c,l;(e=this.calculateLevelsCommand)==null||e.destroy(),this.calculateLevelsCommand=void 0,(t=this.forceLevelCommand)==null||t.destroy(),this.forceLevelCommand=void 0,(n=this.buildNearFieldSlotsCommand)==null||n.destroy(),this.buildNearFieldSlotsCommand=void 0,(r=this.forceNearFieldCommand)==null||r.destroy(),this.forceNearFieldCommand=void 0,(i=this.forceAllPairsCommand)==null||i.destroy(),this.forceAllPairsCommand=void 0,this.randomValuesTexture&&!this.randomValuesTexture.destroyed&&this.randomValuesTexture.destroy(),this.randomValuesTexture=void 0,this.destroyLevelTargets(),(a=this.calculateLevelsUniformStore)==null||a.destroy(),this.calculateLevelsUniformStore=void 0,(o=this.forceLevelUniformStore)==null||o.destroy(),this.forceLevelUniformStore=void 0,(s=this.buildNearFieldSlotsUniformStore)==null||s.destroy(),this.buildNearFieldSlotsUniformStore=void 0,(c=this.forceNearFieldUniformStore)==null||c.destroy(),this.forceNearFieldUniformStore=void 0,(l=this.forceAllPairsUniformStore)==null||l.destroy(),this.forceAllPairsUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.forceVertexCoordBuffer&&!this.forceVertexCoordBuffer.destroyed&&this.forceVertexCoordBuffer.destroy(),this.forceVertexCoordBuffer=void 0}drawAllPairsForce(){let{device:e,store:t,data:n,points:r}=this;if(!r||!this.forceAllPairsCommand||!this.forceAllPairsUniformStore||!r.previousPositionTexture||r.previousPositionTexture.destroyed||!r.exitTexture||r.exitTexture.destroyed||!this.randomValuesTexture||this.randomValuesTexture.destroyed||!r.velocityFbo||r.velocityFbo.destroyed||!n.pointsNumber)return;this.forceAllPairsUniformStore.setUniforms({forceAllPairsUniforms:{pointsTextureSize:t.pointsTextureSize??0,pointsNumber:n.pointsNumber,alpha:t.alpha,repulsion:this.config.simulationRepulsion,maxStep:2*(t.adjustedSpaceSize/__(n.pointsNumber))}}),this.forceAllPairsCommand.setBindings({positionsTexture:r.previousPositionTexture,randomValues:this.randomValuesTexture,exitTexture:r.exitTexture});let i=e.beginRenderPass({framebuffer:r.velocityFbo,clearColor:[0,0,0,0]});this.forceAllPairsCommand.draw(i),i.end()}drawLevels(){let{device:e,store:t,data:n,points:r}=this;if(r&&this.calculateLevelsCommand&&this.calculateLevelsUniformStore&&r.previousPositionTexture&&!r.previousPositionTexture.destroyed&&r.exitTexture&&!r.exitTexture.destroyed&&n.pointsNumber&&this.pointIndices)for(let i=0;i<this.levels;i+=1){let a=this.levelTargets.get(i);if(!a||a.fbo.destroyed||a.texture.destroyed)continue;this.calculateLevelsUniformStore.setUniforms({calculateLevelsPreciseUniforms:{levelGridSize:a.gridSize,cellSize:t.adjustedSpaceSize/a.gridSize}}),this.calculateLevelsCommand.setVertexCount(n.pointsNumber),this.calculateLevelsCommand.setBindings({positionsTexture:r.previousPositionTexture,exitTexture:r.exitTexture});let o=e.beginRenderPass({framebuffer:a.fbo,clearColor:[0,0,0,0]});this.calculateLevelsCommand.draw(o),o.end()}}drawNearFieldSlots(){let{device:e,store:t,data:n,points:r}=this;if(!r||!this.buildNearFieldSlotsCommand||!this.buildNearFieldSlotsUniformStore||!r.previousPositionTexture||r.previousPositionTexture.destroyed||!r.exitTexture||r.exitTexture.destroyed||!n.pointsNumber||!this.pointIndices||!this.slotsArrayTexture||this.slotsArrayTexture.destroyed)return;let i=this.levelTargets.get(this.levels-1);if(!i||i.texture.destroyed)return;let a=t.getRandomFloat(0,1);for(let o=0;o<this.nearFieldSlots;o+=1){let s=this.peelTargets[o%b_],c=this.peelTargets[(o+1)%b_];if(!s||s.fbo.destroyed||!c||c.texture.destroyed)continue;this.buildNearFieldSlotsUniformStore.setUniforms({buildNearFieldSlotsUniforms:{pointsTextureSize:t.pointsTextureSize??0,levelGridSize:i.gridSize,cellSize:t.adjustedSpaceSize/i.gridSize,hasPreviousSlot:o===0?0:1,randomSeed:a}}),this.buildNearFieldSlotsCommand.setVertexCount(n.pointsNumber),this.buildNearFieldSlotsCommand.setBindings({positionsTexture:r.previousPositionTexture,exitTexture:r.exitTexture,previousSlot:o===0?r.previousPositionTexture:c.texture});let l=e.beginRenderPass({framebuffer:s.fbo,clearColor:[-1,1,0,0],clearDepth:1});this.buildNearFieldSlotsCommand.draw(l),l.end();let u=e.createCommandEncoder();u.copyTextureToTexture({sourceTexture:s.texture,destinationTexture:this.slotsArrayTexture,destinationOrigin:[0,0,o],width:i.gridSize,height:i.gridSize}),e.submit(u.finish())}}drawForces(){let{device:e,store:t,points:n}=this;if(!n||!this.forceLevelCommand||!this.forceLevelUniformStore||!this.forceNearFieldCommand||!this.forceNearFieldUniformStore||this.peelTargets.length!==b_||!this.slotsArrayTexture||this.slotsArrayTexture.destroyed||!n.previousPositionTexture||n.previousPositionTexture.destroyed||!this.randomValuesTexture||this.randomValuesTexture.destroyed||!n.velocityFbo||n.velocityFbo.destroyed)return;let r=e.beginRenderPass({framebuffer:n.velocityFbo,clearColor:[0,0,0,0]});for(let e=0;e<this.levels;e+=1){let i=this.levelTargets.get(e);if(!i||i.texture.destroyed)continue;let a=t.adjustedSpaceSize/i.gridSize;this.forceLevelUniformStore.setUniforms({forceLevelPreciseUniforms:{levelGridSize:i.gridSize,cellSize:a,isFirstLevel:+(e===0),alpha:t.alpha,repulsion:this.config.simulationRepulsion}}),this.forceLevelCommand.setBindings({positionsTexture:n.previousPositionTexture,levelTexture:i.texture}),this.forceLevelCommand.draw(r),e===this.levels-1&&(this.forceNearFieldUniformStore.setUniforms({forceNearFieldUniforms:{pointsTextureSize:t.pointsTextureSize??0,levelGridSize:i.gridSize,cellSize:a,alpha:t.alpha,repulsion:this.config.simulationRepulsion,slotCount:this.nearFieldSlots}}),this.forceNearFieldCommand.setBindings({positionsTexture:n.previousPositionTexture,levelTexture:i.texture,randomValues:this.randomValuesTexture,slotsTexture:this.slotsArrayTexture}),this.forceNearFieldCommand.draw(r))}r.end()}createLevels(){let{device:e}=this,t=__(this.data.pointsNumber??0);this.levels=Math.log2(t)-1;for(let t=0;t<this.levels;t+=1){if(this.levelTargets.has(t))continue;let n=2**(t+2),r=e.createTexture({width:n,height:n,format:`rgba32float`,usage:W.SAMPLE|W.RENDER}),i=e.createFramebuffer({width:n,height:n,colorAttachments:[r]});this.levelTargets.set(t,{texture:r,fbo:i,gridSize:n})}for(let[e,t]of Array.from(this.levelTargets.entries()))e>=this.levels&&(t.fbo.destroyed||t.fbo.destroy(),t.texture.destroyed||t.texture.destroy(),this.levelTargets.delete(e));let n=this.levelTargets.get(this.levels-1);n&&this.createNearFieldSlotTargets(n)}createNearFieldSlotTargets(e){let{device:t}=this,n=v_(this.data.pointsNumber??0),r=this.peelTargets[0];if(!r||r.texture.destroyed||r.texture.width!==e.gridSize||r.texture.height!==e.gridSize||this.peelTargets.length!==b_||!this.slotsArrayTexture||this.slotsArrayTexture.destroyed||this.nearFieldSlots!==n){this.destroyNearFieldSlotTargets(),this.nearFieldSlots=n;for(let n=0;n<b_;n+=1){let n=t.createTexture({width:e.gridSize,height:e.gridSize,format:`rg32float`,usage:W.SAMPLE|W.RENDER|W.COPY_SRC}),r=t.createFramebuffer({width:e.gridSize,height:e.gridSize,colorAttachments:[n],depthStencilAttachment:`depth24plus`});this.peelTargets.push({texture:n,fbo:r})}this.slotsArrayTexture=t.createTexture({dimension:`2d-array`,width:e.gridSize,height:e.gridSize,depth:n,format:`rg32float`,usage:W.SAMPLE|W.COPY_DST})}}destroyNearFieldSlotTargets(){for(let e of this.peelTargets)e.fbo.destroyed||e.fbo.destroy(),e.texture.destroyed||e.texture.destroy();this.peelTargets=[],this.slotsArrayTexture&&!this.slotsArrayTexture.destroyed&&this.slotsArrayTexture.destroy(),this.slotsArrayTexture=void 0,this.nearFieldSlots=0}destroyLevelTargets(){for(let e of this.levelTargets.values())e.fbo.destroyed||e.fbo.destroy(),e.texture.destroyed||e.texture.destroy();this.levelTargets.clear(),this.destroyNearFieldSlotTargets()}},S_=`#version 300 es
precision highp float;

uniform sampler2D positionsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform forceMouseUniforms {
  float repulsion;
  vec2 mousePos;
} forceMouse;

#define repulsion forceMouse.repulsion
#define mousePos forceMouse.mousePos
#else
uniform float repulsion;
uniform vec2 mousePos;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);
  vec2 mouse = mousePos;
  // Move particles away from the mouse position using a repulsive force
  vec2 distVector = mouse - pointPosition.rg;
  float dist = sqrt(dot(distVector, distVector));
  dist = max(dist, 10.0);
  float angle = atan(distVector.y, distVector.x);
  float addV = 100.0 * repulsion / (dist * dist);
  velocity.rg -= addV * vec2(cos(angle), sin(angle));

  fragColor = velocity;
}`,C_=class extends wg{initPrograms(){let{device:e,points:t}=this;t&&(this.vertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.uniformStore||=new G(e,{forceMouseUniforms:{uniformTypes:{repulsion:`f32`,mousePos:`vec2<f32>`}}}),this.runCommand||=new K(e,{fs:S_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.vertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{forceMouseUniforms:this.uniformStore.getManagedUniformBuffer(`forceMouseUniforms`)},parameters:X}))}run(){let{device:e,points:t,store:n}=this;if(!t||!this.runCommand||!this.uniformStore||!t.previousPositionTexture||t.previousPositionTexture.destroyed||!t.velocityFbo||t.velocityFbo.destroyed)return;this.uniformStore.setUniforms({forceMouseUniforms:{repulsion:this.config.simulationRepulsionFromMouse,mousePos:Q(n.mousePosition,[0,0])}}),this.runCommand.setBindings({positionsTexture:t.previousPositionTexture});let r=e.beginRenderPass({framebuffer:t.velocityFbo,clearColor:[0,0,0,0]});this.runCommand.draw(r),r.end()}destroy(){var e,t;(e=this.runCommand)==null||e.destroy(),this.runCommand=void 0,(t=this.uniformStore)==null||t.destroy(),this.uniformStore=void 0,this.vertexCoordBuffer&&!this.vertexCoordBuffer.destroyed&&this.vertexCoordBuffer.destroy(),this.vertexCoordBuffer=void 0}},w_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  fragColor = rgba;
}`,T_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D clusterTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform calculateCentermassUniforms {
  float clustersTextureSize;
} calculateCentermass;

#define clustersTextureSize calculateCentermass.clustersTextureSize
#else
uniform float clustersTextureSize;
#endif

in vec2 pointIndices;

out vec4 rgba;

void main() {
  rgba = vec4(0.0);

  ivec2 pointTexel = ivec2(pointIndices);

  // Absent points must not contribute to their cluster's centroid. (exit.G = absent)
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Unclustered points ([-1, -1]) must not contribute mass to any cluster —
  // a default position of (0, 0) is the framebuffer's center texel, a real
  // cluster's slot, so cull them off-screen instead.
  vec4 pointClusterIndices = texelFetch(clusterTexture, pointTexel, 0);
  if (pointClusterIndices.x < 0.0 || pointClusterIndices.y < 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  rgba = vec4(pointPosition.xy, 1.0, 0.0);

  vec2 xy = 2.0 * (pointClusterIndices.xy + 0.5) / clustersTextureSize - 1.0;
  gl_Position = vec4(xy, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,E_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D centermassTexture;
uniform sampler2D clusterTexture;
uniform sampler2D clusterPositionsTexture;
uniform sampler2D clusterForceCoefficient;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform applyForcesUniforms {
  float alpha;
  float clusterCoefficient;
} applyForces;

#define alpha applyForces.alpha
#define clusterCoefficient applyForces.clusterCoefficient
#else
uniform float alpha;
uniform float clusterCoefficient;
#endif

out vec4 fragColor;


void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 velocity = vec4(0.0);
  vec4 pointClusterIndices = texelFetch(clusterTexture, pointTexel, 0);
  // no cluster, so no forces
  if (pointClusterIndices.x >= 0.0 && pointClusterIndices.y >= 0.0) {
    // clusterTexture stores whole texel coordinates, so truncating to int is exact.
    ivec2 clusterTexel = ivec2(pointClusterIndices.xy);
    // positioning points to custom cluster position or either to the center of mass
    vec2 clusterPositions = texelFetch(clusterPositionsTexture, clusterTexel, 0).xy;
    if (clusterPositions.x < 0.0 || clusterPositions.y < 0.0) {
      vec4 centermassValues = texelFetch(centermassTexture, clusterTexel, 0);
      clusterPositions = centermassValues.xy / centermassValues.b;
    }
    vec4 clusterCustomCoeff = texelFetch(clusterForceCoefficient, pointTexel, 0);
    vec2 distVector = clusterPositions.xy - pointPosition.xy;
    float dist = length(distVector);
    if (dist > 0.0) {
      float addV = alpha * dist * clusterCoefficient * clusterCustomCoeff.r;
      velocity.rg += addV * normalize(distVector);
    }
  }

  fragColor = velocity;
}`,D_=class extends wg{constructor(){super(...arguments),this.cachedCentroidPositions=null,this.isCentroidReadbackWanted=!1}get hasPendingCentroidReadback(){return this.centroidReadback?.inFlight??!1}get needsCentroidReadback(){return this.isCentroidReadbackWanted&&this.points?.areClusterCentroidsUpToDate===!1}create(){var e,t;this.cachedCentroidPositions=null,(e=this.centroidReadback)==null||e.destroy(),this.centroidReadback=void 0;let{device:n,store:r,data:i}=this,{pointsTextureSize:a}=r;if(i.pointsNumber===void 0||!i.pointClusters&&!i.clusterPositions)return;this.clusterCount=(i.pointClusters??[]).reduce((e,t)=>t===void 0||t<0?e:Math.max(e,t),0)+1,this.clustersTextureSize=Math.ceil(Math.sqrt(this.clusterCount));let o=this.previousPointsTextureSize!==a||this.previousClustersTextureSize!==this.clustersTextureSize||this.previousClusterCount!==this.clusterCount,s=a*a*4,c=this.clustersTextureSize*this.clustersTextureSize*4,l=new Float32Array(s),u=new Float32Array(c).fill(-1),d=new Float32Array(s).fill(1);if(i.clusterPositions)for(let e=0;e<this.clusterCount;++e)u[e*4+0]=i.clusterPositions[e*2+0]??-1,u[e*4+1]=i.clusterPositions[e*2+1]??-1;for(let e=0;e<i.pointsNumber;++e){let t=i.pointClusters?.[e];t===void 0?(l[e*4+0]=-1,l[e*4+1]=-1):(l[e*4+0]=t%this.clustersTextureSize,l[e*4+1]=Math.floor(t/this.clustersTextureSize)),i.clusterStrength&&(d[e*4+0]=i.clusterStrength[e]??1)}if((!this.clusterTexture||o)&&(this.clusterTexture&&!this.clusterTexture.destroyed&&this.clusterTexture.destroy(),this.clusterTexture=n.createTexture({width:a,height:a,format:`rgba32float`,usage:W.SAMPLE|W.RENDER|W.COPY_DST})),this.clusterTexture.copyImageData({data:l,bytesPerRow:Z(`rgba32float`,a),mipLevel:0,x:0,y:0}),(!this.clusterPositionsTexture||o)&&(this.clusterPositionsTexture&&!this.clusterPositionsTexture.destroyed&&this.clusterPositionsTexture.destroy(),this.clusterPositionsTexture=n.createTexture({width:this.clustersTextureSize,height:this.clustersTextureSize,format:`rgba32float`,usage:W.SAMPLE|W.RENDER|W.COPY_DST})),this.clusterPositionsTexture.copyImageData({data:u,bytesPerRow:Z(`rgba32float`,this.clustersTextureSize),mipLevel:0,x:0,y:0}),(!this.clusterForceCoefficientTexture||o)&&(this.clusterForceCoefficientTexture&&!this.clusterForceCoefficientTexture.destroyed&&this.clusterForceCoefficientTexture.destroy(),this.clusterForceCoefficientTexture=n.createTexture({width:a,height:a,format:`rgba32float`,usage:W.SAMPLE|W.RENDER|W.COPY_DST})),this.clusterForceCoefficientTexture.copyImageData({data:d,bytesPerRow:Z(`rgba32float`,a),mipLevel:0,x:0,y:0}),!this.centermassTexture||this.previousClustersTextureSize!==this.clustersTextureSize?(this.centermassFbo&&!this.centermassFbo.destroyed&&this.centermassFbo.destroy(),this.centermassTexture&&!this.centermassTexture.destroyed&&this.centermassTexture.destroy(),this.centermassTexture=n.createTexture({width:this.clustersTextureSize,height:this.clustersTextureSize,format:`rgba32float`,usage:W.SAMPLE|W.RENDER|W.COPY_DST}),this.centermassTexture.copyImageData({data:new Float32Array(c).fill(0),bytesPerRow:Z(`rgba32float`,this.clustersTextureSize),mipLevel:0,x:0,y:0}),this.centermassFbo=n.createFramebuffer({width:this.clustersTextureSize,height:this.clustersTextureSize,colorAttachments:[this.centermassTexture]})):this.centermassTexture.copyImageData({data:new Float32Array(c).fill(0),bytesPerRow:Z(`rgba32float`,this.clustersTextureSize),mipLevel:0,x:0,y:0}),!this.pointIndices||this.previousPointsTextureSize!==a){this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy();let e=Vg(r.pointsTextureSize);this.pointIndices=n.createBuffer({data:e,usage:V.VERTEX|V.COPY_DST}),(t=this.calculateCentermassCommand)==null||t.setAttributes({pointIndices:this.pointIndices})}this.previousPointsTextureSize=a,this.previousClustersTextureSize=this.clustersTextureSize,this.previousClusterCount=this.clusterCount}initPrograms(){let{device:e,store:t,data:n}=this;n.pointsNumber===void 0||!n.pointClusters&&!n.clusterPositions||(this.calculateCentermassUniformStore||=new G(e,{calculateCentermassUniforms:{uniformTypes:{clustersTextureSize:`f32`},defaultUniforms:{clustersTextureSize:this.clustersTextureSize??0}}}),this.calculateCentermassCommand||=new K(e,{fs:w_,vs:T_,topology:`point-list`,vertexCount:n.pointsNumber??0,attributes:{...this.pointIndices&&{pointIndices:this.pointIndices}},bufferLayout:[{name:`pointIndices`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{calculateCentermassUniforms:this.calculateCentermassUniformStore.getManagedUniformBuffer(`calculateCentermassUniforms`)},parameters:{...X,blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`,depthWriteEnabled:!1,depthCompare:`always`}}),this.applyForcesUniformStore||=new G(e,{applyForcesUniforms:{uniformTypes:{alpha:`f32`,clusterCoefficient:`f32`},defaultUniforms:{alpha:t.alpha,clusterCoefficient:this.config.simulationCluster}}}),this.applyForcesVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.applyForcesCommand||=new K(e,{fs:E_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.applyForcesVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{applyForcesUniforms:this.applyForcesUniformStore.getManagedUniformBuffer(`applyForcesUniforms`)},parameters:X}))}calculateCentermass(e){let{device:t,points:n}=this;if(!n||!this.calculateCentermassCommand||!this.calculateCentermassUniformStore||!this.pointIndices||!this.centermassFbo||this.centermassFbo.destroyed||!this.clusterTexture||this.clusterTexture.destroyed||!e||e.destroyed||!n.exitTexture||n.exitTexture.destroyed)return!1;this.calculateCentermassCommand.setVertexCount(this.data.pointsNumber??0),this.calculateCentermassUniformStore.setUniforms({calculateCentermassUniforms:{clustersTextureSize:this.clustersTextureSize??0}}),this.calculateCentermassCommand.setBindings({clusterTexture:this.clusterTexture,positionsTexture:e,exitTexture:n.exitTexture});let r=t.beginRenderPass({framebuffer:this.centermassFbo,clearColor:[0,0,0,0]});return this.calculateCentermassCommand.draw(r),r.end(),!0}getCentroidPositions(e=!1){var t,n;if((t=this.points)!=null&&t.areClusterCentroidsUpToDate&&this.cachedCentroidPositions&&!this.hasPendingCentroidReadback)return this.cachedCentroidPositions;if(e&&this.cachedCentroidPositions)return this.isCentroidReadbackWanted=!0,this.cachedCentroidPositions;if(this.isCentroidReadbackWanted=!1,(n=this.centroidReadback)==null||n.cancel(),this.calculateCentermass(this.points?.currentPositionTexture),!this.centermassFbo||this.centermassFbo.destroyed||this.clusterCount===void 0)return[];let r=this.cacheCentroidPositions(eg(this.device,this.centermassFbo));return this.points&&(this.points.areClusterCentroidsUpToDate=!0),r}requestCentroidReadback(){var e;if(!this.isCentroidReadbackWanted||this.points?.areClusterCentroidsUpToDate!==!1||(e=this.centroidReadback)!=null&&e.inFlight||!this.centermassFbo||this.centermassFbo.destroyed||this.clusterCount===void 0)return;let t=this.device.gl,n=this.centermassFbo.handle;if(!t||!n||!this.calculateCentermass(this.points?.currentPositionTexture))return;let{width:r,height:i}=this.centermassFbo;this.centroidReadback||=new jg(t,r*i*4),this.centroidReadback.issue(n,0,0,r,i)&&(this.isCentroidReadbackWanted=!1,this.points&&(this.points.areClusterCentroidsUpToDate=!0))}resolveCentroidReadback(){var e;if(!((e=this.centroidReadback)!=null&&e.inFlight))return;let t=this.centroidReadback.poll();t?this.cacheCentroidPositions(t):!this.centroidReadback.inFlight&&this.points&&(this.points.areClusterCentroidsUpToDate=!1)}run(){var e;if(!this.data.pointClusters&&!this.data.clusterPositions||(this.calculateCentermass(this.points?.previousPositionTexture),!this.applyForcesCommand||!this.applyForcesUniformStore)||!this.clusterTexture||this.clusterTexture.destroyed||!this.centermassTexture||this.centermassTexture.destroyed||!this.clusterPositionsTexture||this.clusterPositionsTexture.destroyed||!this.clusterForceCoefficientTexture||this.clusterForceCoefficientTexture.destroyed||!((e=this.points)!=null&&e.previousPositionTexture)||this.points.previousPositionTexture.destroyed||!this.points.velocityFbo||this.points.velocityFbo.destroyed)return;this.applyForcesUniformStore.setUniforms({applyForcesUniforms:{alpha:this.store.alpha,clusterCoefficient:this.config.simulationCluster}}),this.applyForcesCommand.setBindings({clusterTexture:this.clusterTexture,centermassTexture:this.centermassTexture,clusterPositionsTexture:this.clusterPositionsTexture,clusterForceCoefficient:this.clusterForceCoefficientTexture,positionsTexture:this.points.previousPositionTexture});let t=this.device.beginRenderPass({framebuffer:this.points.velocityFbo,clearColor:[0,0,0,0]});this.applyForcesCommand.draw(t),t.end()}destroy(){var e,t,n,r,i;this.cachedCentroidPositions=null,(e=this.centroidReadback)==null||e.destroy(),this.centroidReadback=void 0,(t=this.calculateCentermassCommand)==null||t.destroy(),this.calculateCentermassCommand=void 0,(n=this.applyForcesCommand)==null||n.destroy(),this.applyForcesCommand=void 0,this.centermassFbo&&!this.centermassFbo.destroyed&&this.centermassFbo.destroy(),this.centermassFbo=void 0,this.clusterTexture&&!this.clusterTexture.destroyed&&this.clusterTexture.destroy(),this.clusterTexture=void 0,this.clusterPositionsTexture&&!this.clusterPositionsTexture.destroyed&&this.clusterPositionsTexture.destroy(),this.clusterPositionsTexture=void 0,this.clusterForceCoefficientTexture&&!this.clusterForceCoefficientTexture.destroyed&&this.clusterForceCoefficientTexture.destroy(),this.clusterForceCoefficientTexture=void 0,this.centermassTexture&&!this.centermassTexture.destroyed&&this.centermassTexture.destroy(),this.centermassTexture=void 0,(r=this.calculateCentermassUniformStore)==null||r.destroy(),this.calculateCentermassUniformStore=void 0,(i=this.applyForcesUniformStore)==null||i.destroy(),this.applyForcesUniformStore=void 0,this.pointIndices&&!this.pointIndices.destroyed&&this.pointIndices.destroy(),this.pointIndices=void 0,this.applyForcesVertexCoordBuffer&&!this.applyForcesVertexCoordBuffer.destroyed&&this.applyForcesVertexCoordBuffer.destroy(),this.applyForcesVertexCoordBuffer=void 0}cacheCentroidPositions(e){let t=[];t.length=(this.clusterCount??0)*2;for(let n=0;n<t.length/2;n+=1){let r=e[n*4+0],i=e[n*4+1],a=e[n*4+2];r!==void 0&&i!==void 0&&a!==void 0&&(t[n*2]=r/a,t[n*2+1]=i/a)}return this.cachedCentroidPositions=t,t}},O_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D imageAtlasTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawFragmentUniforms {
  float greyoutOpacity;
  float pointOpacity;
  float isDarkenGreyout;
  vec4 backgroundColor;
  vec4 outlineColor;
  float outlineWidth;
  float renderMode;
  float pickingAlpha;
  float pickingIndexOffset;
} drawFragment;

#define greyoutOpacity drawFragment.greyoutOpacity
#define pointOpacity drawFragment.pointOpacity
#define isDarkenGreyout drawFragment.isDarkenGreyout
#define backgroundColor drawFragment.backgroundColor
#define outlineColor drawFragment.outlineColor
#define outlineWidth drawFragment.outlineWidth
#define renderMode drawFragment.renderMode
#define pickingAlpha drawFragment.pickingAlpha
#define pickingIndexOffset drawFragment.pickingIndexOffset
#else
uniform float greyoutOpacity;
uniform float pointOpacity;
uniform float isDarkenGreyout;
uniform vec4 backgroundColor;
uniform vec4 outlineColor;
uniform float outlineWidth;
uniform float renderMode;
uniform float pickingAlpha;
uniform float pickingIndexOffset;
#endif


in float pointShape;
in float isGreyedOut;
in float isOutlined;
in vec4 shapeColor;
in vec4 imageAtlasUV;
in float shapeSize;
in float imageSizeVarying;
in float overallSize;
flat in float vPointIndex;

out vec4 fragColor;

// Occlusion culling splits fragments between the opaque core pass (renderMode 1)
// and the blended fringe pass (renderMode 2) at this final-alpha threshold
const float OPAQUE_ALPHA_THRESHOLD = 0.999;

// Shape constants
const float CIRCLE = 0.0;
const float SQUARE = 1.0;
const float TRIANGLE = 2.0;
const float DIAMOND = 3.0;
const float PENTAGON = 4.0;
const float HEXAGON = 5.0;
const float STAR = 6.0;
const float CROSS = 7.0;
const float NONE = 8.0;

// Distance functions for different shapes
float circleDistance(vec2 p) {
    return dot(p, p);
}

// Function to apply greyout logic to image colors
vec4 applyGreyoutToImage(vec4 imageColor, float isGreyedOutValue) {
    vec3 finalColor = imageColor.rgb;
    float finalAlpha = imageColor.a;
    
    if (isGreyedOutValue > 0.0) {
        float blendFactor = 0.65; // Controls how much to modify (0.0 = original, 1.0 = target color)
        
        if (isDarkenGreyout > 0.0) {
            finalColor = mix(finalColor, vec3(0.2), blendFactor);
        } else {
            finalColor = mix(finalColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
        }
    }
    
    return vec4(finalColor, finalAlpha);
}

float squareDistance(vec2 p) {
    vec2 d = abs(p) - vec2(0.8);
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float triangleDistance(vec2 p) {
    const float k = sqrt(3.0);   // ≈1.732; slope of 60° lines for an equilateral triangle
    const float r = 0.9;         // half the edge length; each edge is 2r
    p.x = abs(p.x) - r;          // fold the X axis and shift: the base corner is at the origin
    p.y += 0.55;                 // move the base (y = -0.55 in the core) to y = 0. The centred offset is
                                 // r/k = 0.52; 0.55 keeps the apex at 1.01 rather than 1.04

    // Reflect across the corner's bisector: the slanted edge maps onto the x axis,
    // corner at x = 0, apex at x = -2r
    if (p.x + k * p.y > 0.0)
        p = vec2(p.x - k * p.y,  -k * p.x - p.y) / 2.0;

    // Distance to the edge as the segment [-2r, 0] on the x axis
    p.x -= clamp(p.x, -2.0 * r, 0.0);

    // Return signed distance: negative = inside; positive = outside
    return -length(p) * sign(p.y);
}

float diamondDistance(vec2 p) {
    // aspect > 1  →  taller diamond
    const float aspect = 1.2;
    return abs(p.x) + abs(p.y) / aspect - 0.8;
}

float pentagonDistance(vec2 p) {
    // Regular pentagon signed-distance (Inigo Quilez)
    const vec3 k = vec3(0.809016994, 0.587785252, 0.726542528); // cos 36°, sin 36°, tan 36°
    const float r = 0.726542528;                                // apothem: the flat edge is at y = r; equal to k.z by
                                                                // coincidence of the chosen size, not by construction
    p.x = abs(p.x);

    // Reflect across the two tilted edges ─ only if point is outside
    p -= 2.0 * min(dot(vec2(-k.x, k.y), p), 0.0) * vec2(-k.x, k.y);
    p -= 2.0 * min(dot(vec2( k.x, k.y), p), 0.0) * vec2( k.x, k.y);

    // distance to the flat edge as a segment: every corner folds onto x = ±r·tan 36°
    p -= vec2(clamp(p.x, -r * k.z, r * k.z), r);

    // Return signed distance (negative → inside, positive → outside)
    return length(p) * sign(p.y);
}

float hexagonDistance(vec2 p) {
    const vec3 k = vec3(-0.866025404, 0.5, 0.577350269);
    p = abs(p);
    p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
    p -= vec2(clamp(p.x, -k.z * 0.8, k.z * 0.8), 0.8);
    return length(p) * sign(p.y);
}

float starDistance(vec2 p) {
    // 5-point star signed-distance function (adapted from Inigo Quilez)
    // r  – outer radius, rf – inner/outer radius ratio
    const float r  = 0.9;
    const float rf = 0.45;

    // Pre-computed rotation vectors for the star arms (36° increments)
    const vec2 k1 = vec2(0.809016994, -0.587785252);
    const vec2 k2 = vec2(-k1.x, k1.y);

    // Fold the plane into a single arm sector
    p.x = abs(p.x);
    p -= 2.0 * max(dot(k1, p), 0.0) * k1;
    p -= 2.0 * max(dot(k2, p), 0.0) * k2;
    p.x = abs(p.x);

    // Translate so the top tip of the star lies on the X-axis
    p.y -= r;

    // Vector describing the edge between an outer tip and its adjacent inner point
    vec2 ba = rf * vec2(-k1.y, k1.x) - vec2(0.0, 1.0);
    // Project the point onto that edge and clamp the projection to the segment
    float h = clamp(dot(p, ba) / dot(ba, ba), 0.0, r);

    // Return signed distance (negative => inside, positive => outside)
    return length(p - ba * h) * sign(p.y * ba.x - p.x * ba.y);
}

float crossDistance(vec2 p) {
    // Signed distance function for a cross (union of two rectangles)
    // Adapted from Inigo Quilez (https://iquilezles.org/)
    // Each arm has half-sizes 0.3 (thickness) and 0.8 (length)
    p = abs(p);
    if (p.y > p.x) p = p.yx;       // exploit symmetry

    vec2 q = p - vec2(0.8, 0.3);   // subtract half-sizes (length, thickness)

    // Standard rectangle SDF, then take union of the two arms
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}

float getShapeDistance(vec2 p, float shape) {
    if (shape == SQUARE) return squareDistance(p);
    else if (shape == TRIANGLE) return triangleDistance(p);
    else if (shape == DIAMOND) return diamondDistance(p);
    else if (shape == PENTAGON) return pentagonDistance(p);
    else if (shape == HEXAGON) return hexagonDistance(p);
    else if (shape == STAR) return starDistance(p);
    else if (shape == CROSS) return crossDistance(p);
    else return circleDistance(p); // Default to circle
}

void main() {
    // Discard the fragment if the point is fully transparent and has no image
    if (shapeColor.a == 0.0 && imageAtlasUV.x == -1.0) {
        discard;
    }

    // Discard the fragment if the point has no shape and no image
    if (pointShape == NONE && imageAtlasUV.x == -1.0) {
        discard;
    }

    // Calculate coordinates within the point
    vec2 pointCoord = 2.0 * gl_PointCoord - 1.0;

    // pointCoord covers the full sprite, which is larger than the shape when the point is
    // outlined, carries a bigger image, or is under a pixel. Rescale it so the shape keeps
    // its intended size.
    vec2 shapeCoord = pointCoord;
    float shapeDiameterPx = overallSize;
    if (overallSize > shapeSize && shapeSize > 0.0) {
        shapeCoord = pointCoord * (overallSize / shapeSize);
        shapeDiameterPx = shapeSize;
    }

    vec4 finalShapeColor = vec4(0.0);
    vec4 finalImageColor = vec4(0.0);
    // Geometric coverage, before color alpha: what the host picking pass decides on
    float shapeCoverage = 0.0;
    bool imageCovered = false;
    
    // Ramp of EDGE_RAMP_PX device pixels centred on the shape edge. The sprite is the shape's own
    // size: the outer half of the ramp is clipped only where the shape touches the sprite's sides.
    // A shape under one device pixel is drawn as a one-pixel core with alpha shape² / core², the
    // ink of its true area; a size of 0 has no shape.
    if (pointShape != NONE && shapeSize > 0.0) {
        float coreDiameterPx = max(shapeDiameterPx, 1.0);
        float smallAlpha = min(1.0, (shapeDiameterPx * shapeDiameterPx) / (coreDiameterPx * coreDiameterPx));
        vec2 coreCoord = shapeCoord * (shapeDiameterPx / coreDiameterPx); // -1..1 across the core
        float halfRampPx = EDGE_RAMP_PX * 0.5;

        float opacity;
        if (pointShape == CIRCLE) {
            // Along the radius: a ramp in r² skews coverage outward on small discs.
            float rPx = length(coreCoord) * coreDiameterPx * 0.5;
            opacity = 1.0 - smoothstep(coreDiameterPx * 0.5 - halfRampPx, coreDiameterPx * 0.5 + halfRampPx, rPx);
        } else {
            float shapeDistance = getShapeDistance(coreCoord, pointShape);
            // Half a ramp in field units, via the field's gradient per pixel: exact for a field that
            // is linear across the ramp, as every polygon field is at its edge. All fragments of a
            // sprite share pointShape, so the derivative is taken in coherent control flow.
            float shapeHalfRamp = max(halfRampPx * length(vec2(dFdx(shapeDistance), dFdy(shapeDistance))), 1e-6);
            opacity = 1.0 - smoothstep(-shapeHalfRamp, shapeHalfRamp, shapeDistance);
        }
        shapeCoverage = opacity;
        opacity *= smallAlpha * shapeColor.a;

        finalShapeColor = vec4(shapeColor.rgb, opacity);
    }

    // Handle image rendering with centering logic
    if (imageAtlasUV.x != -1.0) {
        // Calculate image coordinates with centering
        vec2 imageCoord = pointCoord;
        if (overallSize > imageSizeVarying && imageSizeVarying > 0.0) {
            // Image is smaller than overall size, center it
            float scale = imageSizeVarying / overallSize;
            imageCoord = pointCoord / scale;
            
            // Check if we're outside the valid image area
            if (abs(imageCoord.x) > 1.0 || abs(imageCoord.y) > 1.0) {
                // We're outside the image bounds, don't render the image
                finalImageColor = vec4(0.0);
            } else {
                // Sample from texture atlas
                vec2 atlasUV = mix(imageAtlasUV.xy, imageAtlasUV.zw, (imageCoord + 1.0) * 0.5);
                vec4 imageColor = texture(imageAtlasTexture, atlasUV);
                finalImageColor = applyGreyoutToImage(imageColor, isGreyedOut);
                imageCovered = true;
            }
        } else {
            // Image is same size or larger than overall size, no scaling needed
            // Sample from texture atlas
            vec2 atlasUV = mix(imageAtlasUV.xy, imageAtlasUV.zw, (imageCoord + 1.0) * 0.5);
            vec4 imageColor = texture(imageAtlasTexture, atlasUV);
            finalImageColor = applyGreyoutToImage(imageColor, isGreyedOut);
            imageCovered = true;
        }
    }

    // Host picking: a fragment counts where the shape covers at least half of it (and the
    // point is not fully transparent) or an image does; it carries the index and the host's
    // alpha, with no blending and no ramp — the hard edge is the picked outline
    if (renderMode > 2.5) {
        bool covered = (shapeCoverage >= 0.5 && shapeColor.a > 0.0) || imageCovered;
        if (!covered) discard;
        fragColor = vec4(encodePickingColor(vPointIndex + pickingIndexOffset), pickingAlpha);
        return;
    }

    float finalPointAlpha = max(finalShapeColor.a, finalImageColor.a);
    if (isGreyedOut > 0.0 && greyoutOpacity != -1.0) {
        finalPointAlpha *= greyoutOpacity;
    } else {
        finalPointAlpha *= pointOpacity;
    }

    // Blend image color above point color
    fragColor = vec4(
        mix(finalShapeColor.rgb, finalImageColor.rgb, finalImageColor.a),
        finalPointAlpha
    );

    // Outline ring: band [outlineWidth × R, R], R = POINT_RING_SCALE × point radius, device px.
    // Core at least a ramp wide, centred on the band, ramp centred on both edges. A ring is an
    // interface mark: thinner than the ramp it is widened at full alpha, not dimmed.
    //
    //          inner R      outer R
    //   ────────░░┤░░████████░░├░░────────
    //            fade  core   fade
    if (isOutlined > 0.0) {
        // Sized from the drawn core (a shape under a pixel is drawn as one), inside the sprite,
        // which the hardware cap can clamp: the ring then tightens onto the body.
        float ringOuterPx = min(POINT_RING_SCALE * max(max(shapeSize, 1.0), imageSizeVarying), overallSize - EDGE_RAMP_PX) * 0.5;
        float ringInnerPx = outlineWidth * ringOuterPx;
        float ringCentrePx = (ringOuterPx + ringInnerPx) * 0.5;
        float ringHalfCorePx = max(ringOuterPx - ringInnerPx, EDGE_RAMP_PX) * 0.5;
        float rPx = length(pointCoord) * overallSize * 0.5;
        float ringAlpha = 1.0 - smoothstep(-EDGE_RAMP_PX * 0.5, EDGE_RAMP_PX * 0.5, abs(rPx - ringCentrePx) - ringHalfCorePx);

        // Grey out the ring color when the point is greyed
        vec3 ringColor = outlineColor.rgb;
        if (isGreyedOut > 0.0) {
            float blendFactor = 0.65;
            if (isDarkenGreyout > 0.0) {
                ringColor = mix(ringColor, vec3(0.2), blendFactor);
            } else {
                ringColor = mix(ringColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
            }
        }

        float ringOpacity = ringAlpha * outlineColor.a;
        // Source-over of the ring onto the fragment. A plain mix would tint the ring with a
        // transparent body's colour, and the blend would then apply the ring's alpha twice.
        float outAlpha = ringOpacity + fragColor.a * (1.0 - ringOpacity);
        vec3 outRgb = outAlpha > 0.0
            ? (ringColor * ringOpacity + fragColor.rgb * fragColor.a * (1.0 - ringOpacity)) / outAlpha
            : fragColor.rgb;
        fragColor = vec4(outRgb, outAlpha);
    }

    // Occlusion culling: split every fragment between the opaque core pass
    // (depth-writing, unblended) and the blended fringe pass. The same
    // final-alpha rule runs in both passes so each fragment renders exactly once.
    if (renderMode > 1.5) {
        if (fragColor.a >= OPAQUE_ALPHA_THRESHOLD) discard; // already drawn by core pass
    } else if (renderMode > 0.5) {
        if (fragColor.a < OPAQUE_ALPHA_THRESHOLD) discard;  // left for fringe pass
    }
}
`,k_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 pointIndices;
in float sourceSize;
in float targetSize;
in vec4 sourceColor;
in vec4 targetColor;
in float shape;
in float imageIndex;
in float imageSize;

uniform sampler2D positionsTexture;
uniform sampler2D pointStatus;
uniform sampler2D exitTexture;
uniform sampler2D imageAtlasCoords;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawVertexUniforms {
  float ratio;
  mat4 transformationMatrix;
  float pointsTextureSize;
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  vec4 greyoutColor;
  vec4 backgroundColor;
  float scalePointsOnZoom;
  float maxPointSize;
  float isDarkenGreyout;
  float skipHighlighted;
  float skipGreyed;
  float hasImages;
  float imageCount;
  float imageAtlasCoordsTextureSize;
  float transitionProgress;
  float animateColors;
  float animateSizes;
  float animatePositions;
  vec4 pointDefaultColor;
  float pointDefaultSize;
  float pointsNumber;
} drawVertex;

#define ratio drawVertex.ratio
#define transformationMatrix drawVertex.transformationMatrix
#define pointsTextureSize drawVertex.pointsTextureSize
#define sizeScale drawVertex.sizeScale
#define spaceSize drawVertex.spaceSize
#define screenSize drawVertex.screenSize
#define greyoutColor drawVertex.greyoutColor
#define backgroundColor drawVertex.backgroundColor
#define scalePointsOnZoom drawVertex.scalePointsOnZoom
#define maxPointSize drawVertex.maxPointSize
#define isDarkenGreyout drawVertex.isDarkenGreyout
#define skipHighlighted drawVertex.skipHighlighted
#define skipGreyed drawVertex.skipGreyed
#define hasImages drawVertex.hasImages
#define imageCount drawVertex.imageCount
#define imageAtlasCoordsTextureSize drawVertex.imageAtlasCoordsTextureSize
#define transitionProgress drawVertex.transitionProgress
#define animateColors drawVertex.animateColors
#define animateSizes drawVertex.animateSizes
#define animatePositions drawVertex.animatePositions
#define pointDefaultColor drawVertex.pointDefaultColor
#define pointDefaultSize drawVertex.pointDefaultSize
#define pointsNumber drawVertex.pointsNumber
#else
uniform float ratio;
uniform mat3 transformationMatrix;
uniform float pointsTextureSize;
uniform float sizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform vec4 greyoutColor;
uniform vec4 backgroundColor;
uniform float scalePointsOnZoom;
uniform float maxPointSize;
uniform float isDarkenGreyout;
uniform float skipHighlighted;
uniform float skipGreyed;
uniform float hasImages;
uniform float imageCount;
uniform float imageAtlasCoordsTextureSize;
uniform float transitionProgress;
uniform float animateColors;
uniform float animateSizes;
uniform float animatePositions;
uniform vec4 pointDefaultColor;
uniform float pointDefaultSize;
uniform float pointsNumber;
#endif

out float pointShape;
out float isGreyedOut;
out float isOutlined;
out vec4 shapeColor;
out vec4 imageAtlasUV;
out float shapeSize;
out float imageSizeVarying;
out float overallSize;
// The point's index, for the host picking pass
flat out float vPointIndex;

// The size rule is the shared pointSize module, so drawing, picking and selection agree on it.
float calculatePointSize(float size) {
  return pointSizePx(size, ratio, transformationMatrix[0][0], scalePointsOnZoom, maxPointSize);
}

// Read-time resolution of NaN channels — input arrays are used verbatim and never
// edited, so "use the default" stays encoded as NaN all the way to the GPU. A NaN
// resolves to the config default blended toward the exit default along the animated
// exit ramp (0 = present, 1 = gone), so the enter/exit fade of default-valued
// channels drives itself — no size/color transition needed for a removal. Explicit
// (real) values pass through. EXIT_DEFAULT_* are #defines injected from variables.ts,
// shared with the CPU resolvers (GraphData.getResolvedPoint*). The ramp and the size
// rule are the shared exitRamp module (exit-ramp.glsl), which the hover/focus ring
// draws by too; only the sprite resolves colors.
vec4 resolveColor(vec4 color, float exit) {
  vec4 defaultColor = mix(pointDefaultColor, vec4(EXIT_DEFAULT_COLOR_CHANNEL), exit);
  return mix(color, defaultColor, isnan(color));
}

void main() {
  ivec2 pointTexel = ivec2(pointIndices);

  // Read point status texture: R = greyout, G = outlined
  vec4 status = texelFetch(pointStatus, pointTexel, 0);
  isGreyedOut = status.r;
  isOutlined = status.g;
  float isHighlighted = (status.r == 0.0) ? 1.0 : 0.0;

  // Discard point based on rendering mode
  if (skipHighlighted > 0.0 && isHighlighted > 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }
  if (skipGreyed > 0.0 && isHighlighted <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Exit ramp (exit-ramp.glsl): 0 = present, 1 = gone. The caller drives the visual
  // fade via setPointSizes/setPointColors; here we only remove the point once it is
  // fully gone.
  float exit = exitRamp(texelFetch(exitTexture, pointTexel, 0), animatePositions, transitionProgress);
  if (exit >= 1.0) {
    // Fully gone — skip. Also avoids using a NaN position on the snapped path.
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Position
  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 point = pointPosition.rg;

  // Transform point position to normalized device coordinates
  // Convert from space coordinates [0, spaceSize] to normalized [-1, 1]
  vec2 normalizedPosition = 2.0 * point / spaceSize - 1.0;

  // Apply aspect ratio correction - this is needed to map the square space to the rectangular screen
  // The transformation matrix handles zoom/pan, but we need this to handle aspect ratio
  normalizedPosition *= spaceSize / screenSize;

  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 finalPosition = transformMat3 * vec3(normalizedPosition, 1);
  #else
  vec3 finalPosition = transformationMatrix * vec3(normalizedPosition, 1);
  #endif
  // Depth encodes stacking order: higher point index = drawn on top = nearer
  // (smaller z). Harmless when depth testing is off (depthCompare 'always').
  float linearIndex = pointIndices.y * pointsTextureSize + pointIndices.x;
  vPointIndex = linearIndex;
  float depthZ = 1.0 - 2.0 * (linearIndex + 0.5) / max(pointsNumber, 1.0);
  gl_Position = vec4(finalPosition.rg, depthZ, 1.0);

  // Resolve NaN channels against the animated exit ramp before mixing — default
  // sizes/colors of an entering or leaving point fade with the ramp regardless of
  // whether a size/color transition is active.
  float pointSize = transitionedSize(sourceSize, targetSize, animateSizes, transitionProgress, exit, pointDefaultSize);
  vec4 pointColor = animateColors > 0.0
    ? mix(resolveColor(sourceColor, exit), resolveColor(targetColor, exit), transitionProgress)
    : resolveColor(targetColor, exit);


  // Calculate sizes for shape and image. A point without an image has no image
  // size: the attribute still holds a value (a copy of the target point size when
  // none was given), and letting it into the sprite footprint would hold the
  // outline ring at the target while the shape is still transitioning.
  bool hasImage = hasImages > 0.0 && imageIndex >= 0.0 && imageIndex < imageCount;
  float shapeSizeValue = calculatePointSize(pointSize * sizeScale);
  float imageSizeValue = hasImage ? calculatePointSize(imageSize * sizeScale) : 0.0;

  // A size of 0 draws nothing; the sprite below is never smaller than a pixel.
  if (max(shapeSizeValue, imageSizeValue) <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  // Use the larger of the shape, image, and 1-pixel minimum. The sprite is the shape's own size:
  // the ramp stays centred on the edge, and its outer half is clipped where the shape meets the
  // sprite's sides.
  float overallSizeValue = max(max(shapeSizeValue, 1.0), imageSizeValue);

  // Outlined: scale the drawn core (a shape is never under a pixel) to the ring size, then add
  // ramp room on both sides.
  if (isOutlined > 0.0) {
    overallSizeValue = POINT_RING_SCALE * max(max(shapeSizeValue, 1.0), imageSizeValue) + 2.0 * EDGE_RAMP_PX;
  }
  // Clamp to the hardware limit; the fragment shader preserves the shape size.
  overallSizeValue = min(overallSizeValue, maxPointSize * ratio);

  gl_PointSize = overallSizeValue;

  // Pass size information to fragment shader
  shapeSize = shapeSizeValue;
  imageSizeVarying = imageSizeValue;
  overallSize = overallSizeValue;

  shapeColor = pointColor;
  pointShape = shape;

  // Adjust color of greyed-out points
  if (isGreyedOut > 0.0) {
    if (greyoutColor[0] != -1.0) {
      shapeColor = greyoutColor;
    } else {
      // If greyoutColor is not set, make color lighter or darker based on isDarkenGreyout
      float blendFactor = 0.65;

      if (isDarkenGreyout > 0.0) {
        shapeColor.rgb = mix(shapeColor.rgb, vec3(0.2), blendFactor);
      } else {
        shapeColor.rgb = mix(shapeColor.rgb, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
      }
    }
  }

  if (!hasImage) {
    imageAtlasUV = vec4(-1.0);
  } else {
    int atlasTexSize = int(imageAtlasCoordsTextureSize);
    int atlasCoordIndex = int(imageIndex);
    ivec2 atlasTexel = ivec2(atlasCoordIndex % atlasTexSize, atlasCoordIndex / atlasTexSize);
    vec4 atlasCoords = texelFetch(imageAtlasCoords, atlasTexel, 0);
    imageAtlasUV = atlasCoords;
  }
}
`,A_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D pointSize;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform findPointsInRectUniforms {
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  float ratio;
  mat4 transformationMatrix;
  vec2 rect0;
  vec2 rect1;
  float scalePointsOnZoom;
  float maxPointSize;
} findPointsInRect;

#define sizeScale findPointsInRect.sizeScale
#define spaceSize findPointsInRect.spaceSize
#define screenSize findPointsInRect.screenSize
#define ratio findPointsInRect.ratio
#define transformationMatrix findPointsInRect.transformationMatrix
#define rect0 findPointsInRect.rect0
#define rect1 findPointsInRect.rect1
#define scalePointsOnZoom findPointsInRect.scalePointsOnZoom
#define maxPointSize findPointsInRect.maxPointSize
#else
uniform float sizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform float ratio;
uniform mat3 transformationMatrix;
uniform vec2 rect0;
uniform vec2 rect1;
uniform float scalePointsOnZoom;
uniform float maxPointSize;
#endif

out vec4 fragColor;

// The drawn size (draw-points.vert), so the selection footprint is the rendered point: a shape
// under a device pixel is drawn as one. In CSS px, the units of the rectangle and screenSize.
float pointSizeF(float size) {
  return max(pointSizePx(size, ratio, transformationMatrix[0][0], scalePointsOnZoom, maxPointSize), 1.0) / ratio;
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  // Skip absent (faded-out) points — never select a removed point. exit.G = absent.
  if (texelFetch(exitTexture, pointTexel, 0).g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 p = 2.0 * pointPosition.rg / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  // Convert mat4 to mat3 for vec3 multiplication
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  vec4 pSize = texelFetch(pointSize, pointTexel, 0);
  float size = pSize.r * sizeScale;
  // A size of 0 draws nothing (draw-points.vert), so it is not selectable either.
  if (size <= 0.0) {
    fragColor = vec4(0.0);
    return;
  }

  float left = 2.0 * (rect0.x - 0.5 * pointSizeF(size)) / screenSize.x - 1.0;
  float right = 2.0 * (rect1.x + 0.5 * pointSizeF(size)) / screenSize.x - 1.0;
  float top =  2.0 * (rect0.y - 0.5 * pointSizeF(size)) / screenSize.y - 1.0;
  float bottom =  2.0 * (rect1.y + 0.5 * pointSizeF(size)) / screenSize.y - 1.0;

  fragColor = vec4(0.0, 0.0, pointPosition.r, pointPosition.g);
  if (final.x >= left && final.x <= right && final.y >= top && final.y <= bottom) {
    fragColor.r = 1.0;
  }
}

`,j_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D polygonPathTexture; // Texture containing polygon path points
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform findPointsInPolygonUniforms {
  float spaceSize;
  vec2 screenSize;
  mat4 transformationMatrix;
  float polygonPathLength;
} findPointsInPolygon;

#define spaceSize findPointsInPolygon.spaceSize
#define screenSize findPointsInPolygon.screenSize
#define transformationMatrix findPointsInPolygon.transformationMatrix
#define polygonPathLength int(findPointsInPolygon.polygonPathLength)
#else
uniform int polygonPathLength;
uniform float spaceSize;
uniform vec2 screenSize;
uniform mat3 transformationMatrix;
#endif

out vec4 fragColor;

// Get a point from the polygon path texture at a specific index
vec2 getPolygonPoint(sampler2D pathTexture, int index, int pathLength) {
  if (index >= pathLength) return vec2(0.0);

  // The path is written row-major into a square texture. Ask the texture how wide it
  // is rather than re-deriving ceil(sqrt(pathLength)) — that duplicates the formula
  // the allocation used, and a local named textureSize would shadow this builtin.
  int width = textureSize(pathTexture, 0).x;

  vec4 pathData = texelFetch(pathTexture, ivec2(index % width, index / width), 0);

  return pathData.xy;
}

// Point-in-polygon algorithm using ray casting
bool pointInPolygon(vec2 point, sampler2D pathTexture, int pathLength) {
  bool inside = false;
  
  for (int i = 0; i < 2048; i++) {
    if (i >= pathLength) break;
    
    int j = (i + 1) % pathLength;
    
    vec2 pi = getPolygonPoint(pathTexture, i, pathLength);
    vec2 pj = getPolygonPoint(pathTexture, j, pathLength);
    
    if (((pi.y > point.y) != (pj.y > point.y)) &&
        (point.x < (pj.x - pi.x) * (point.y - pi.y) / (pj.y - pi.y) + pi.x)) {
      inside = !inside;
    }
  }
  
  return inside;
}

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  // Skip absent (faded-out) points — never select a removed point. exit.G = absent.
  if (texelFetch(exitTexture, pointTexel, 0).g > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 p = 2.0 * pointPosition.rg / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  // Convert mat4 to mat3 for vec3 multiplication
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  // Convert to screen coordinates for polygon check
  vec2 screenPos = (final.xy + 1.0) * screenSize / 2.0;
  
  fragColor = vec4(0.0, 0.0, pointPosition.r, pointPosition.g);
  
  // Check if point center is inside the polygon
  if (pointInPolygon(screenPos, polygonPathTexture, polygonPathLength)) {
    fragColor.r = 1.0;
  }
} `,M_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawHighlightedUniforms {
  float sourceSize;
  float targetSize;
  float imageSize;
  mat4 transformationMatrix;
  float pointsTextureSize;
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  float scalePointsOnZoom;
  float pointIndex;
  float maxPointSize;
  vec4 color;
  float universalPointOpacity;
  float greyoutOpacity;
  float isDarkenGreyout;
  vec4 backgroundColor;
  vec4 greyoutColor;
  float animatePositions;
  float transitionProgress;
  float animateSizes;
  float pointDefaultSize;
  float width;
  float pixelRatio;
} drawHighlighted;

#define width drawHighlighted.width
#else
uniform float width;
uniform float pixelRatio;
#endif

in vec2 vertexPosition;
in float pointOpacity;
in vec3 rgbColor;
flat in float ringRadiusPx;
flat in float quadHalfPx;

out vec4 fragColor;

// Ring band [sqrt(width) × R, R], R the outer radius in device px (\`width\` is the inner
// edge as a squared radius). Core at least EDGE_RAMP_PX wide, centred on the band, ramp
// centred on both edges. A ring is an interface mark: thinner than the ramp it is widened
// at full alpha, not dimmed.
void main () {
  float rPx = length(vertexPosition) * quadHalfPx;
  float innerPx = sqrt(width) * ringRadiusPx;
  float centrePx = (ringRadiusPx + innerPx) * 0.5;
  float halfCorePx = max(ringRadiusPx - innerPx, EDGE_RAMP_PX) * 0.5;
  float ring = 1.0 - smoothstep(-EDGE_RAMP_PX * 0.5, EDGE_RAMP_PX * 0.5, abs(rPx - centrePx) - halfCorePx);
  fragColor = vec4(rgbColor, ring * pointOpacity);
}`,N_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 vertexCoord;

uniform sampler2D positionsTexture;
uniform sampler2D pointStatus;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform drawHighlightedUniforms {
  float sourceSize;
  float targetSize;
  float imageSize;
  mat4 transformationMatrix;
  float pointsTextureSize;
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  float scalePointsOnZoom;
  float pointIndex;
  float maxPointSize;
  vec4 color;
  float universalPointOpacity;
  float greyoutOpacity;
  float isDarkenGreyout;
  vec4 backgroundColor;
  vec4 greyoutColor;
  float animatePositions;
  float transitionProgress;
  float animateSizes;
  float pointDefaultSize;
  float width;
  float pixelRatio;
} drawHighlighted;

#define sourceSize drawHighlighted.sourceSize
#define targetSize drawHighlighted.targetSize
#define imageSize drawHighlighted.imageSize
#define pixelRatio drawHighlighted.pixelRatio
#define transformationMatrix drawHighlighted.transformationMatrix
#define pointsTextureSize drawHighlighted.pointsTextureSize
#define sizeScale drawHighlighted.sizeScale
#define spaceSize drawHighlighted.spaceSize
#define screenSize drawHighlighted.screenSize
#define scalePointsOnZoom drawHighlighted.scalePointsOnZoom
#define pointIndex drawHighlighted.pointIndex
#define maxPointSize drawHighlighted.maxPointSize
#define color drawHighlighted.color
#define universalPointOpacity drawHighlighted.universalPointOpacity
#define greyoutOpacity drawHighlighted.greyoutOpacity
#define isDarkenGreyout drawHighlighted.isDarkenGreyout
#define backgroundColor drawHighlighted.backgroundColor
#define greyoutColor drawHighlighted.greyoutColor
#define animatePositions drawHighlighted.animatePositions
#define transitionProgress drawHighlighted.transitionProgress
#define animateSizes drawHighlighted.animateSizes
#define pointDefaultSize drawHighlighted.pointDefaultSize
#else
uniform float sourceSize;
uniform float targetSize;
uniform float imageSize;
uniform mat3 transformationMatrix;
uniform float pointsTextureSize;
uniform float sizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform float scalePointsOnZoom;
uniform float pointIndex;
uniform float maxPointSize;
uniform vec4 color;
uniform float universalPointOpacity;
uniform float greyoutOpacity;
uniform float isDarkenGreyout;
uniform vec4 backgroundColor;
uniform vec4 greyoutColor;
uniform float animatePositions;
uniform float transitionProgress;
uniform float animateSizes;
uniform float pointDefaultSize;
uniform float width;
uniform float pixelRatio;
#endif
out vec2 vertexPosition;
out float pointOpacity;
out vec3 rgbColor;
// Ring outer radius and quad half-size, device px: the ring plus a full ramp per side.
flat out float ringRadiusPx;
flat out float quadHalfPx;

// The drawn size (draw-points.vert), so the ring follows it. The sizes are uniforms here.
float calculatePointSize(float pointSize) {
  return pointSizePx(pointSize, pixelRatio, transformationMatrix[0][0], scalePointsOnZoom, maxPointSize);
}

void main () {
  vertexPosition = vertexCoord;

  int pointTexSize = int(pointsTextureSize);
  int pointLinearIndex = int(pointIndex);
  // Integer % and / are undefined on a negative or zero operand, and pointIndex
  // defaults to -1 (no point highlighted). Nothing to draw in that case anyway.
  if (pointLinearIndex < 0 || pointTexSize <= 0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  ivec2 pointTexel = ivec2(pointLinearIndex % pointTexSize, pointLinearIndex / pointTexSize);

  // Exit ramp (exit-ramp.glsl), the sprite's: drop the ring only once the point is fully
  // gone, so it stays on the body while that fades out or in.
  float exit = exitRamp(texelFetch(exitTexture, pointTexel, 0), animatePositions, transitionProgress);
  if (exit >= 1.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);

  rgbColor = color.rgb;
  pointOpacity = color.a * universalPointOpacity;
  vec4 greyoutStatus = texelFetch(pointStatus, pointTexel, 0);
  if (greyoutStatus.r > 0.0) {
    if (greyoutColor[0] != -1.0) {
      rgbColor = greyoutColor.rgb;
      pointOpacity = greyoutColor.a;
    } else {
      // If greyoutColor is not set, make color lighter or darker based on isDarkenGreyout
      float blendFactor = 0.65; // Controls how much to modify (0.0 = original, 1.0 = target color)
      
      if (isDarkenGreyout > 0.0) {
        // Darken the color
        rgbColor = mix(rgbColor, vec3(0.2), blendFactor);
      } else {
        // Lighten the color
        rgbColor = mix(rgbColor, max(backgroundColor.rgb, vec3(0.8)), blendFactor);
      }
    }

    if (greyoutOpacity != -1.0) {
      pointOpacity *= greyoutOpacity;
    }
  }

  // The sprite's footprint this frame: its size by the shared rule (exit-ramp.glsl), and
  // the image size (0 for a point without an image) when larger.
  float pointSize = transitionedSize(sourceSize, targetSize, animateSizes, transitionProgress, exit, pointDefaultSize);
  float footprint = max(calculatePointSize(pointSize * sizeScale), calculatePointSize(imageSize * sizeScale));

  // A size of 0 draws nothing (draw-points.vert culls the sprite), so it has no ring; the
  // quad below is never narrower than the ramp.
  if (footprint <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  // Ring radius from the drawn core, device px: a shape under a device pixel is drawn as one.
  ringRadiusPx = max(footprint, 1.0) * POINT_RING_SCALE * 0.5;
  quadHalfPx = ringRadiusPx + EDGE_RAMP_PX;
  float radius = quadHalfPx / pixelRatio / transformationMatrix[0][0];

  // Calculate point position in screen space
  vec2 a = pointPosition.xy;
  vec2 b = pointPosition.xy + vec2(0.0, radius);
  vec2 xBasis = b - a;
  vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
  vec2 pointPositionInScreenSpace = a + xBasis * vertexCoord.x + yBasis * radius * vertexCoord.y;

  // Transform point position to normalized device coordinates
  vec2 p = 2.0 * pointPositionInScreenSpace / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif
  
  gl_Position = vec4(final.rg, 0, 1);
}`,P_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  // Circular sprite: hover is radius-based, like the rendered point shape.
  vec2 fromCenter = 2.0 * gl_PointCoord - 1.0;
  if (dot(fromCenter, fromCenter) > 1.0) discard;
  fragColor = rgba;
}
`,F_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

// Fills the screen-space picking buffer: every point rasterizes its sprite at
// its projected screen position, carrying [index, x, y] to the fragment shader.
// Hover detection then only reads a small window of this buffer under the
// cursor — it never has to touch the point set again until the scene changes
// (see Points.updatePickingBuffer / Graph.findHoveredItem).
//
// The two-pass highlight priority mirrors the draw order: greyed first, then
// highlighted (top-most wins), since later points overwrite earlier ones with
// the depth test off.

in vec2 pointIndices;
in float size;
in float imageSize;
in float imageIndex;

uniform sampler2D positionsTexture;
uniform sampler2D pointStatus;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform fillPickingBufferUniforms {
  float pointsTextureSize;
  float sizeScale;
  float spaceSize;
  vec2 screenSize;
  float ratio;
  float pickingPixelRatio;
  mat4 transformationMatrix;
  float scalePointsOnZoom;
  float maxPointSize;
  float skipHighlighted;
  float skipGreyed;
  float pointDefaultSize;
  float hasImages;
  float imageCount;
} fillPickingBuffer;

#define pointsTextureSize fillPickingBuffer.pointsTextureSize
#define sizeScale fillPickingBuffer.sizeScale
#define spaceSize fillPickingBuffer.spaceSize
#define screenSize fillPickingBuffer.screenSize
#define ratio fillPickingBuffer.ratio
#define pickingPixelRatio fillPickingBuffer.pickingPixelRatio
#define transformationMatrix fillPickingBuffer.transformationMatrix
#define scalePointsOnZoom fillPickingBuffer.scalePointsOnZoom
#define maxPointSize fillPickingBuffer.maxPointSize
#define skipHighlighted fillPickingBuffer.skipHighlighted
#define skipGreyed fillPickingBuffer.skipGreyed
#define pointDefaultSize fillPickingBuffer.pointDefaultSize
#define hasImages fillPickingBuffer.hasImages
#define imageCount fillPickingBuffer.imageCount
#else
uniform float pointsTextureSize;
uniform float sizeScale;
uniform float spaceSize;
uniform vec2 screenSize;
uniform float ratio;
uniform float pickingPixelRatio;
uniform mat3 transformationMatrix;
uniform float scalePointsOnZoom;
uniform float maxPointSize;
uniform float skipHighlighted;
uniform float skipGreyed;
uniform float pointDefaultSize;
uniform float hasImages;
uniform float imageCount;
#endif

out vec4 rgba;

// Keep tiny points pickable: below this sprite footprint (in picking-buffer
// pixels) a point could fall between the buffer's texels.
const float minPickingSize = 2.0;

// The drawn size (draw-points.vert), so the pickable footprint is the rendered point.
float calculatePointSize(float size, float pxPerUnit) {
  return pointSizePx(size, ratio, pxPerUnit, scalePointsOnZoom, maxPointSize);
}

void main() {
  // Fully clipped: a skipped point must not rasterize anywhere in the buffer.
  rgba = vec4(-1.0);
  gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  gl_PointSize = 1.0;

  ivec2 pointTexel = ivec2(pointIndices);

  // Skip absent (faded-out) points so hover never lands on a removed one. Their
  // size/position may still look hittable mid-fade (only alpha faded), so the exit
  // status is the reliable signal. exit.G = current absence.
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) return;

  vec4 greyoutStatus = texelFetch(pointStatus, pointTexel, 0);
  float isHighlighted = (greyoutStatus.r == 0.0) ? 1.0 : 0.0;

  if (skipHighlighted > 0.0 && isHighlighted > 0.0) return;
  if (skipGreyed > 0.0 && isHighlighted <= 0.0) return;

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 point = pointPosition.rg;

  vec2 normalizedPosition = 2.0 * point / spaceSize - 1.0;
  normalizedPosition *= spaceSize / screenSize;

  #ifdef USE_UNIFORM_BUFFERS
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 finalPosition = transformMat3 * vec3(normalizedPosition, 1);
  #else
  vec3 finalPosition = transformationMatrix * vec3(normalizedPosition, 1);
  #endif
  float pxPerUnit = transformationMatrix[0][0];
  vec2 ndc = finalPosition.xy;

  // Resolve a NaN size at read time. The absent-point guard above already returned,
  // so a NaN here means "use the config default".
  float resolvedSize = isnan(size) ? pointDefaultSize : size;

  // Same footprint as draw-points.vert: the image size counts only for a point
  // that draws an image.
  bool hasImage = hasImages > 0.0 && imageIndex >= 0.0 && imageIndex < imageCount;
  float shapeSizeValue = calculatePointSize(resolvedSize * sizeScale, pxPerUnit);
  float imageSizeValue = hasImage ? calculatePointSize(imageSize * sizeScale, pxPerUnit) : 0.0;
  // A size of 0 draws nothing (draw-points.vert), so it is not hoverable either.
  if (max(shapeSizeValue, imageSizeValue) <= 0.0) return;

  // Device px → CSS px → picking-buffer px (the buffer is smaller than the screen)
  float spriteSize = max(shapeSizeValue, imageSizeValue) / ratio * pickingPixelRatio;

  float index = pointIndices.g * pointsTextureSize + pointIndices.r;
  rgba = vec4(index, pointPosition.rg, 0.0);
  gl_PointSize = max(spriteSize, minPickingSize);
  // 2D: later points overwrite earlier ones (depth test off), matching draw order.
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`,I_=`// A point's size in device pixels: the size (CSS px) by the pixel ratio and the zoom — 1:1 with
// scalePointsOnZoom, otherwise held near constant — capped at the hardware sprite limit.
// pxPerUnit is the zoom scale. Module code precedes each shader's own uniforms, so they come in
// as parameters.
float pointSizePx(float size, float ratio, float pxPerUnit, float scalePointsOnZoom, float maxPointSize) {
  float zoom = scalePointsOnZoom > 0.0 ? pxPerUnit : min(5.0, max(1.0, pxPerUnit * 0.01));
  return min(size * ratio * zoom, maxPointSize * ratio);
}
`,L_={name:`pointSize`,vs:I_,fs:I_},R_={name:`exitRamp`,vs:`// Shared by draw-points.vert and draw-highlighted.vert, so the sprite and its hover/focus ring
// fade and mix sizes by one rule. Module code precedes each shader's own uniforms, so they come
// in as parameters; EXIT_DEFAULT_SIZE is a #define injected from variables.ts.

// How gone a point is, 0 = present, 1 = gone, from its exit-texture texel (R = previous absence,
// G = current absence). During a position transition the enter/exit fade blends R→G; otherwise
// the settled G, so an unrelated color or size transition cannot replay the fade.
float exitRamp(vec4 exitStatus, float animatePositions, float transitionProgress) {
  return animatePositions > 0.0 ? mix(exitStatus.r, exitStatus.g, transitionProgress) : exitStatus.g;
}

// A NaN size means "use the default": the config default blended toward the exit default along
// the ramp, so a default-sized point grows in and shrinks out with its fade. Explicit values
// pass through.
float resolveSize(float size, float exit, float pointDefaultSize) {
  return isnan(size) ? mix(pointDefaultSize, EXIT_DEFAULT_SIZE, exit) : size;
}

// The point's size this frame: the source→target mix by progress during a size transition,
// else the target, each resolved along the exit ramp.
float transitionedSize(float sourceSize, float targetSize, float animateSizes, float transitionProgress, float exit, float pointDefaultSize) {
  return animateSizes > 0.0
    ? mix(resolveSize(sourceSize, exit, pointDefaultSize), resolveSize(targetSize, exit, pointDefaultSize), transitionProgress)
    : resolveSize(targetSize, exit, pointDefaultSize);
}
`},z_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec4 rgba;

out vec4 fragColor;

void main() {
  fragColor = rgba;
}`,B_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

in vec2 pointIndices;

uniform sampler2D positionsTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform fillSampledPointsUniforms {
  float pointsTextureSize;
  mat4 transformationMatrix;
  float spaceSize;
  vec2 screenSize;
} fillSampledPoints;

#define pointsTextureSize fillSampledPoints.pointsTextureSize
#define transformationMatrix fillSampledPoints.transformationMatrix
#define spaceSize fillSampledPoints.spaceSize
#define screenSize fillSampledPoints.screenSize
#else
uniform float pointsTextureSize;
uniform float spaceSize;
uniform vec2 screenSize;
uniform mat3 transformationMatrix;
#endif

out vec4 rgba;

void main() {
  ivec2 pointTexel = ivec2(pointIndices);

  // Keep absent (faded-out) points out of the sample. exit.G = current absence.
  if (texelFetch(exitTexture, pointTexel, 0).g > 0.5) {
    rgba = vec4(0.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec2 p = 2.0 * pointPosition.rg / spaceSize - 1.0;
  p *= spaceSize / screenSize;
  #ifdef USE_UNIFORM_BUFFERS
  // Convert mat4 to mat3 for vec3 multiplication
  mat3 transformMat3 = mat3(transformationMatrix);
  vec3 final = transformMat3 * vec3(p, 1);
  #else
  vec3 final = transformationMatrix * vec3(p, 1);
  #endif

  vec2 pointScreenPosition = (final.xy + 1.0) * screenSize / 2.0;
  float index = pointIndices.g * pointsTextureSize + pointIndices.r;
  rgba = vec4(index, 1.0, pointPosition.xy);
  float i = (pointScreenPosition.x + 0.5) / screenSize.x;
  float j = (pointScreenPosition.y + 0.5) / screenSize.y;
  gl_Position = vec4(2.0 * vec2(i, j) - 1.0, 0.0, 1.0);

  gl_PointSize = 1.0;
}`,V_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D velocity;
uniform sampler2D pinnedStatusTexture;
uniform sampler2D exitTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform updatePositionUniforms {
  float friction;
  float spaceSize;
} updatePosition;

#define friction updatePosition.friction
#define spaceSize updatePosition.spaceSize
#else
uniform float friction;
uniform float spaceSize;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);
  vec4 pointVelocity = texelFetch(velocity, pointTexel, 0);

  // Check if point is pinned
  // pinnedStatusTexture has the same size and layout as positionsTexture
  // Each pixel corresponds to a point: red channel > 0.5 means the point is pinned
  vec4 pinnedStatus = texelFetch(pinnedStatusTexture, pointTexel, 0);
  
  // If pinned, don't update position
  if (pinnedStatus.r > 0.5) {
    fragColor = pointPosition;
    return;
  }

  // If absent (current absence = exit.G), leave it untouched — don't integrate or
  // clamp it (clamping NaN is undefined and could resurrect the point at (0,0)).
  vec4 exitStatus = texelFetch(exitTexture, pointTexel, 0);
  if (exitStatus.g > 0.5) {
    fragColor = pointPosition;
    return;
  }

  // Friction
  pointVelocity.rg *= friction;

  pointPosition.rg += pointVelocity.rg;

  pointPosition.r = clamp(pointPosition.r, 0.0, spaceSize);
  pointPosition.g = clamp(pointPosition.g, 0.0, spaceSize);
  
  fragColor = pointPosition;
}`,H_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D sourceTexture;
uniform sampler2D targetTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform interpolatePositionUniforms {
  float progress;
} interpolatePosition;

#define progress interpolatePosition.progress
#else
uniform float progress;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 source = texelFetch(sourceTexture, pointTexel, 0);
  vec4 target = texelFetch(targetTexture, pointTexel, 0);
  // NaN means absent (ingest normalizes half-NaN to full-NaN, so checking one
  // channel suffices). Hold the real side so the point stays put while it fades,
  // never interpolating to/from NaN:
  //   · exiting  (target NaN): freeze at source.
  //   · entering (source NaN): appear at target (no slide in from NaN).
  vec2 src = isnan(source.r) ? target.rg : source.rg;
  vec2 tgt = isnan(target.r) ? src : target.rg;
  vec2 position = mix(src, tgt, progress);
  fragColor = vec4(position, source.b, 1.0);
}
`,U_=`#version 300 es
#ifdef GL_ES
precision highp float;
// Fragment shaders default int to mediump, guaranteed only to 32767 —
// point indices go far higher.
precision highp int;
#endif

uniform sampler2D positionsTexture;
uniform sampler2D trackedIndices;

out vec4 fragColor;

void main() {
  ivec2 trackedTexel = ivec2(gl_FragCoord.xy);

  // The table holds raw point indices (-1 = unused slot). The texel is derived
  // here, from the width the positions texture has right now — the grid relayouts
  // when the point count changes, so a texel computed at bake time would keep
  // addressing the old layout. textureSize() is valid here because this shader
  // samples positionsTexture itself.
  float index = texelFetch(trackedIndices, trackedTexel, 0).r;
  if (index < 0.0) discard;

  int i = int(index);
  int w = textureSize(positionsTexture, 0).x;
  // An index past the point count fetches out of range and yields zeros; the
  // CPU readback owns range validation and drops such entries.
  vec4 pointPosition = texelFetch(positionsTexture, ivec2(i % w, i / w), 0);

  fragColor = vec4(pointPosition.rg, 1.0, 1.0);
}
`,W_=`#version 300 es
#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D positionsTexture;

#ifdef USE_UNIFORM_BUFFERS
layout(std140) uniform dragPointUniforms {
  vec2 mousePos;
  float index;
} dragPoint;

#define mousePos dragPoint.mousePos
#define index dragPoint.index
#else
uniform vec2 mousePos;
uniform float index;
#endif

out vec4 fragColor;

void main() {
  ivec2 pointTexel = ivec2(gl_FragCoord.xy);

  vec4 pointPosition = texelFetch(positionsTexture, pointTexel, 0);

  // Check if a point is being dragged
  if (index >= 0.0 && index == pointPosition.b) {
    pointPosition.rg = mousePos.rg;
  }

  fragColor = pointPosition;
}`;function G_(e,t=16384){if(!(e!=null&&e.length))return null;let n=0;for(let t of e){let e=Math.max(t.width,t.height);e>n&&(n=e)}if(n===0)return console.warn(`Invalid image dimensions: all images have zero width or height`),null;let r=n,i=Math.ceil(Math.sqrt(e.length)),a=i*n,o=1;a>t&&(o=t/a,n=Math.max(1,Math.floor(n*o)),a=Math.max(1,Math.floor(a*o)),console.warn(`🖼️  Atlas scaling required: Original size ${(r*i).toLocaleString()}px exceeds WebGL limit ${t.toLocaleString()}px. Scaling down to ${a.toLocaleString()}px (${Math.round(o*100)}% of original quality)`));let s=new Uint8Array(a*a*4).fill(0),c=new Float32Array(i*i*4).fill(-1);for(let[t,r]of e.entries()){let e=r.width,o=r.height;if(e===0||o===0)continue;let l=Math.min(1,n/Math.max(e,o)),u=Math.floor(e*l),d=Math.floor(o*l),f=Math.floor(t/i),p=t%i*n,m=f*n;c[t*4]=p/a,c[t*4+1]=m/a,c[t*4+2]=(p+u)/a,c[t*4+3]=(m+d)/a;for(let t=0;t<d;t++)for(let n=0;n<u;n++){let i=Math.floor(e/u*n),c=(Math.floor(o/d*t)*e+i)*4,l=((m+t)*a+(p+n))*4;s[l]=r.data[c]??0,s[l+1]=r.data[c+1]??0,s[l+2]=r.data[c+2]??0,s[l+3]=r.data[c+3]??255}}return{atlasData:s,atlasSize:a,atlasCoords:c,atlasCoordsSize:i}}function K_(e,t,n){let r=new Float32Array(t*t*4);if(!e)return r;for(let t=0;t<n;++t){let n=og(e,t);r[t*4+0]=n?NaN:e[t*2+0],r[t*4+1]=n?NaN:e[t*2+1],r[t*4+2]=t}return r}function q_(e,t,n,r,i){let a=new Float32Array(i*i*4);for(let t=0;t<n;t+=1)a[t*4+0]=e[t*4+0],a[t*4+1]=e[t*4+1],a[t*4+2]=t;for(let e=n;e<r;e+=1)a[e*4+0]=t[e*4+0],a[e*4+1]=t[e*4+1],a[e*4+2]=e;return a}var J_={blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`src-alpha`,blendColorDstFactor:`one-minus-src-alpha`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one-minus-src-alpha`},Y_={...X,...J_},X_={...X,blend:!1,depthWriteEnabled:!0,depthCompare:`less`},Z_={...X,...J_,depthCompare:`less`},Q_={EXIT_DEFAULT_SIZE:Wg(0),EXIT_DEFAULT_COLOR_CHANNEL:Wg(0),EDGE_RAMP_PX:Wg(1),POINT_RING_SCALE:Wg(vg)},$_=class extends wg{constructor(){super(...arguments),this.isPickingBufferStale=!0,this.imageCount=0,this.positionVersion=0,this.pointListVersion=0,this.areClusterCentroidsUpToDate=!1,this.hasAnyAbsentPoint=!1,this.pointListCount=0,this.trackers=new Set,this.isSizeTextureStale=!0,this.polygonPathLength=0,this.isOcclusionCullingActive=!1,this.transitionProgress=1,this.shouldAnimatePointColors=!1,this.shouldAnimatePointSizes=!1,this.shouldAnimatePointPositions=!1}get hasPendingPickReadback(){return this.pickingReadback?.inFlight??!1}get hasPendingTrackedReadback(){for(let e of this.trackers)if(e.hasPendingReadback)return!0;return!1}updatePositions(){let{device:e,store:t,data:n,config:{rescalePositions:r,enableSimulation:i}}=this,{pointsTextureSize:a}=t;if(!a||!n.pointPositions||n.pointsNumber===void 0)return this.pointListCount!==0&&(this.pointListCount=0,this.pointListVersion++),!1;let o=r;r===void 0&&!i&&(o=!0),this.shouldSkipRescale&&(o=!1),o?this.rescaleInitialNodePositions():this.shouldSkipRescale||(this.scaleX=void 0,this.scaleY=void 0),this.shouldSkipRescale=void 0;let s=n.sourcePointsNumber,c=n.targetPointsNumber,l=s===c,u=this.transition?.isPendingFor(Y.Positions)===!0&&(this.transition?.duration??this.config.transitionDuration)>0&&!!this.currentPositionTexture,d=K_(n.pointPositions,a,c),f;if(u&&(this.createTransitionResources(),this.sourcePositionTexture&&this.targetPositionTexture)){if(l){let e=this.currentPositionTexture;if(e&&!e.destroyed){let t=this.device.createCommandEncoder();t.copyTextureToTexture({sourceTexture:e,destinationTexture:this.sourcePositionTexture,width:a,height:a}),this.device.submit(t.finish())}}else this.currentPositionFbo?(f=q_(eg(e,this.currentPositionFbo),d,Math.min(s,c),c,a),this.writePositionTexture(this.sourcePositionTexture,f,a)):this.writePositionTexture(this.sourcePositionTexture,d,a);this.writePositionTexture(this.targetPositionTexture,d,a)}this.ensurePositionTextures(a),u?f&&(this.writePositionTexture(this.currentPositionTexture,f,a),this.writePositionTexture(this.previousPositionTexture,f,a)):(this.writePositionTexture(this.currentPositionTexture,d,a),this.writePositionTexture(this.previousPositionTexture,d,a)),this.areClusterCentroidsUpToDate=!1,this.markPositionsChanged(),this.config.enableSimulation&&this.ensureSimulationResources(),!this.searchTexture||this.searchTexture.width!==a||this.searchTexture.height!==a?(this.searchTexture&&!this.searchTexture.destroyed&&this.searchTexture.destroy(),this.searchFbo&&!this.searchFbo.destroyed&&this.searchFbo.destroy(),this.searchTexture=e.createTexture({width:a,height:a,format:`rgba32float`}),this.searchTexture.copyImageData({data:d,bytesPerRow:Z(`rgba32float`,a),mipLevel:0,x:0,y:0}),this.searchFbo=e.createFramebuffer({width:a,height:a,colorAttachments:[this.searchTexture]})):this.searchTexture.copyImageData({data:d,bytesPerRow:Z(`rgba32float`,a),mipLevel:0,x:0,y:0}),this.isPickingBufferStale=!0,this.discardPendingPick();let p=Vg(t.pointsTextureSize),m=p.byteLength;return!this.drawPointIndices||this.drawPointIndices.byteLength!==m?(this.drawPointIndices&&!this.drawPointIndices.destroyed&&this.drawPointIndices.destroy(),this.drawPointIndices=e.createBuffer({data:p,usage:V.VERTEX|V.COPY_DST})):this.drawPointIndices.write(p),this.drawCommand&&this.drawCommand.setAttributes({pointIndices:this.drawPointIndices}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({pointIndices:this.drawPointIndices}),this.updateReversedPointIndexBuffer(),!this.hoveredPointIndices||this.hoveredPointIndices.byteLength!==m?(this.hoveredPointIndices&&!this.hoveredPointIndices.destroyed&&this.hoveredPointIndices.destroy(),this.hoveredPointIndices=e.createBuffer({data:p,usage:V.VERTEX|V.COPY_DST})):this.hoveredPointIndices.write(p),!this.sampledPointIndices||this.sampledPointIndices.byteLength!==m?(this.sampledPointIndices&&!this.sampledPointIndices.destroyed&&this.sampledPointIndices.destroy(),this.sampledPointIndices=e.createBuffer({data:p,usage:V.VERTEX|V.COPY_DST})):this.sampledPointIndices.write(p),this.fillSampledPointsFboCommand&&this.fillSampledPointsFboCommand.setAttributes({pointIndices:this.sampledPointIndices}),this.updatePointStatus(),this.updatePinnedStatus(),this.updateExit(),this.updateSampledPointsGrid(),u||this.gatherTrackers(),u}initPrograms(){let{device:e,config:t,store:n,data:r}=this;this.imageAtlasCoordsTexture&&this.imageAtlasTexture||this.createAtlas(),this.targetColorBuffer||this.updateColor(),this.targetSizeBuffer||this.updateSize(),this.shapeBuffer||this.updateShape(),this.imageIndicesBuffer||this.updateImageIndices(),this.imageSizesBuffer||this.updateImageSizes(),this.pointStatusTexture||this.updatePointStatus(),t.enableSimulation&&this.ensureUpdatePositionProgram(),this.dragPointVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.dragPointUniformStore||=new G(e,{dragPointUniforms:{uniformTypes:{mousePos:`vec2<f32>`,index:`f32`},defaultUniforms:{mousePos:Q(n.mousePosition,[0,0]),index:n.hoveredPoint?.index??-1}}}),this.dragPointCommand||=new K(e,{fs:W_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.dragPointVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{dragPointUniforms:this.dragPointUniformStore.getManagedUniformBuffer(`dragPointUniforms`)},parameters:X}),this.drawUniformStore||=new G(e,{drawVertexUniforms:{uniformTypes:{ratio:`f32`,transformationMatrix:`mat4x4<f32>`,pointsTextureSize:`f32`,sizeScale:`f32`,spaceSize:`f32`,screenSize:`vec2<f32>`,greyoutColor:`vec4<f32>`,backgroundColor:`vec4<f32>`,scalePointsOnZoom:`f32`,maxPointSize:`f32`,isDarkenGreyout:`f32`,skipHighlighted:`f32`,skipGreyed:`f32`,hasImages:`f32`,imageCount:`f32`,imageAtlasCoordsTextureSize:`f32`,transitionProgress:`f32`,animateColors:`f32`,animateSizes:`f32`,animatePositions:`f32`,pointDefaultColor:`vec4<f32>`,pointDefaultSize:`f32`,pointsNumber:`f32`},defaultUniforms:{ratio:t.pixelRatio,transformationMatrix:(()=>{let e=n.transform??[1,0,0,0,1,0,0,0,1];return[e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],0,0,0,0,1]})(),pointsTextureSize:n.pointsTextureSize??0,sizeScale:t.pointSizeScale,spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0]),greyoutColor:$(n.greyoutPointColor,[0,0,0,1]),backgroundColor:$(n.backgroundColor,[0,0,0,1]),scalePointsOnZoom:+!!t.scalePointsOnZoom,maxPointSize:n.maxPointSize,isDarkenGreyout:n.isDarkenGreyout??!1?1:0,skipHighlighted:0,skipGreyed:0,hasImages:+(this.imageCount>0),imageCount:this.imageCount,imageAtlasCoordsTextureSize:this.imageAtlasCoordsTextureSize??0,transitionProgress:1,animateColors:0,animateSizes:0,animatePositions:0,pointDefaultColor:$(Qh(t.pointDefaultColor),[0,0,0,1]),pointDefaultSize:t.pointDefaultSize,pointsNumber:r.pointsNumber??0}},drawFragmentUniforms:{uniformTypes:{greyoutOpacity:`f32`,pointOpacity:`f32`,isDarkenGreyout:`f32`,backgroundColor:`vec4<f32>`,outlineColor:`vec4<f32>`,outlineWidth:`f32`,renderMode:`f32`,pickingAlpha:`f32`,pickingIndexOffset:`f32`},defaultUniforms:{pickingAlpha:1,pickingIndexOffset:0,greyoutOpacity:t.pointGreyoutOpacity??-1,pointOpacity:t.pointOpacity,isDarkenGreyout:n.isDarkenGreyout??!1?1:0,backgroundColor:$(n.backgroundColor,[0,0,0,1]),outlineColor:$(n.outlinedPointRingColor,[1,1,1,1]),outlineWidth:.9,renderMode:0}}}),this.drawCommand||=new K(e,{fs:O_,vs:k_,modules:[L_,R_,Eg],topology:`point-list`,vertexCount:r.pointsNumber??0,attributes:{...this.drawPointIndices&&{pointIndices:this.drawPointIndices},...this.sourceSizeBuffer&&{sourceSize:this.sourceSizeBuffer},...this.targetSizeBuffer&&{targetSize:this.targetSizeBuffer},...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer},...this.shapeBuffer&&{shape:this.shapeBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer}},bufferLayout:[{name:`pointIndices`,format:`float32x2`},{name:`sourceSize`,format:`float32`},{name:`targetSize`,format:`float32`},{name:`sourceColor`,format:`float32x4`},{name:`targetColor`,format:`float32x4`},{name:`shape`,format:`float32`},{name:`imageIndex`,format:`float32`},{name:`imageSize`,format:`float32`}],defines:{USE_UNIFORM_BUFFERS:!0,...Q_},bindings:{drawVertexUniforms:this.drawUniformStore.getManagedUniformBuffer(`drawVertexUniforms`),drawFragmentUniforms:this.drawUniformStore.getManagedUniformBuffer(`drawFragmentUniforms`)},parameters:Y_}),this.updateReversedPointIndexBuffer(),this.drawCoreCommand||=new K(e,{fs:O_,vs:k_,modules:[L_,R_,Eg],topology:`point-list`,vertexCount:r.pointsNumber??0,indexBuffer:this.reversedPointIndexBuffer??null,attributes:{...this.drawPointIndices&&{pointIndices:this.drawPointIndices},...this.sourceSizeBuffer&&{sourceSize:this.sourceSizeBuffer},...this.targetSizeBuffer&&{targetSize:this.targetSizeBuffer},...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer},...this.shapeBuffer&&{shape:this.shapeBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer}},bufferLayout:[{name:`pointIndices`,format:`float32x2`},{name:`sourceSize`,format:`float32`},{name:`targetSize`,format:`float32`},{name:`sourceColor`,format:`float32x4`},{name:`targetColor`,format:`float32x4`},{name:`shape`,format:`float32`},{name:`imageIndex`,format:`float32`},{name:`imageSize`,format:`float32`}],defines:{USE_UNIFORM_BUFFERS:!0,...Q_},bindings:{drawVertexUniforms:this.drawUniformStore.getManagedUniformBuffer(`drawVertexUniforms`),drawFragmentUniforms:this.drawUniformStore.getManagedUniformBuffer(`drawFragmentUniforms`)},parameters:X_}),this.findPointsInRectVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.findPointsInRectUniformStore||=new G(e,{findPointsInRectUniforms:{uniformTypes:{sizeScale:`f32`,spaceSize:`f32`,screenSize:`vec2<f32>`,ratio:`f32`,transformationMatrix:`mat4x4<f32>`,rect0:`vec2<f32>`,rect1:`vec2<f32>`,scalePointsOnZoom:`f32`,maxPointSize:`f32`},defaultUniforms:{sizeScale:t.pointSizeScale,spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0]),ratio:t.pixelRatio,transformationMatrix:n.transformationMatrix4x4,rect0:Q(n.searchArea?.[0],[0,0]),rect1:Q(n.searchArea?.[1],[0,0]),scalePointsOnZoom:+!!t.scalePointsOnZoom,maxPointSize:n.maxPointSize}}}),this.findPointsInRectCommand||=new K(e,{fs:A_,vs:Zg,modules:[L_],topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.findPointsInRectVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{findPointsInRectUniforms:this.findPointsInRectUniformStore.getManagedUniformBuffer(`findPointsInRectUniforms`)},parameters:X}),this.findPointsInPolygonVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.findPointsInPolygonUniformStore||=new G(e,{findPointsInPolygonUniforms:{uniformTypes:{spaceSize:`f32`,screenSize:`vec2<f32>`,transformationMatrix:`mat4x4<f32>`,polygonPathLength:`f32`},defaultUniforms:{spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0]),transformationMatrix:n.transformationMatrix4x4,polygonPathLength:this.polygonPathLength}}}),this.findPointsInPolygonCommand||=new K(e,{fs:j_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.findPointsInPolygonVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{findPointsInPolygonUniforms:this.findPointsInPolygonUniformStore.getManagedUniformBuffer(`findPointsInPolygonUniforms`)},parameters:X}),this.fillPickingBufferUniformStore||=new G(e,{fillPickingBufferUniforms:{uniformTypes:{pointsTextureSize:`f32`,sizeScale:`f32`,spaceSize:`f32`,screenSize:`vec2<f32>`,ratio:`f32`,pickingPixelRatio:`f32`,transformationMatrix:`mat4x4<f32>`,scalePointsOnZoom:`f32`,maxPointSize:`f32`,skipHighlighted:`f32`,skipGreyed:`f32`,pointDefaultSize:`f32`,hasImages:`f32`,imageCount:`f32`},defaultUniforms:{pointsTextureSize:n.pointsTextureSize??0,sizeScale:t.pointSizeScale,spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0]),ratio:t.pixelRatio,pickingPixelRatio:Mg,transformationMatrix:n.transformationMatrix4x4,scalePointsOnZoom:+!!t.scalePointsOnZoom,maxPointSize:n.maxPointSize,skipHighlighted:0,skipGreyed:0,pointDefaultSize:t.pointDefaultSize,hasImages:0,imageCount:0}}}),this.fillPickingBufferCommand||=new K(e,{fs:P_,vs:F_,modules:[L_],topology:`point-list`,vertexCount:r.pointsNumber??0,attributes:{...this.hoveredPointIndices&&{pointIndices:this.hoveredPointIndices},...this.targetSizeBuffer&&{size:this.targetSizeBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer}},bufferLayout:[{name:`pointIndices`,format:`float32x2`},{name:`size`,format:`float32`},{name:`imageSize`,format:`float32`},{name:`imageIndex`,format:`float32`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{fillPickingBufferUniforms:this.fillPickingBufferUniformStore.getManagedUniformBuffer(`fillPickingBufferUniforms`)},parameters:X}),this.fillSampledPointsUniformStore||=new G(e,{fillSampledPointsUniforms:{uniformTypes:{pointsTextureSize:`f32`,transformationMatrix:`mat4x4<f32>`,spaceSize:`f32`,screenSize:`vec2<f32>`},defaultUniforms:{pointsTextureSize:n.pointsTextureSize??0,transformationMatrix:n.transformationMatrix4x4,spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0])}}}),this.fillSampledPointsFboCommand||=new K(e,{fs:z_,vs:B_,topology:`point-list`,vertexCount:r.pointsNumber??0,attributes:{...this.sampledPointIndices&&{pointIndices:this.sampledPointIndices}},bufferLayout:[{name:`pointIndices`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{fillSampledPointsUniforms:this.fillSampledPointsUniformStore.getManagedUniformBuffer(`fillSampledPointsUniforms`)},parameters:X}),this.drawHighlightedVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.drawHighlightedUniformStore||=new G(e,{drawHighlightedUniforms:{uniformTypes:{sourceSize:`f32`,targetSize:`f32`,imageSize:`f32`,transformationMatrix:`mat4x4<f32>`,pointsTextureSize:`f32`,sizeScale:`f32`,spaceSize:`f32`,screenSize:`vec2<f32>`,scalePointsOnZoom:`f32`,pointIndex:`f32`,maxPointSize:`f32`,color:`vec4<f32>`,universalPointOpacity:`f32`,greyoutOpacity:`f32`,isDarkenGreyout:`f32`,backgroundColor:`vec4<f32>`,greyoutColor:`vec4<f32>`,animatePositions:`f32`,transitionProgress:`f32`,animateSizes:`f32`,pointDefaultSize:`f32`,width:`f32`,pixelRatio:`f32`},defaultUniforms:{sourceSize:1,targetSize:1,imageSize:0,transformationMatrix:n.transformationMatrix4x4,pointsTextureSize:n.pointsTextureSize??0,sizeScale:t.pointSizeScale,spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0]),scalePointsOnZoom:+!!t.scalePointsOnZoom,pointIndex:-1,maxPointSize:n.maxPointSize,color:[0,0,0,1],universalPointOpacity:t.pointOpacity,greyoutOpacity:t.pointGreyoutOpacity??-1,isDarkenGreyout:n.isDarkenGreyout??!1?1:0,backgroundColor:$(n.backgroundColor,[0,0,0,1]),greyoutColor:$(n.greyoutPointColor,[0,0,0,1]),animatePositions:0,transitionProgress:1,animateSizes:0,pointDefaultSize:t.pointDefaultSize,width:.85,pixelRatio:t.pixelRatio}}}),this.drawHighlightedCommand||=new K(e,{fs:M_,vs:N_,modules:[L_,R_],topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.drawHighlightedVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0,...Q_},bindings:{drawHighlightedUniforms:this.drawHighlightedUniformStore.getManagedUniformBuffer(`drawHighlightedUniforms`)},parameters:{...X,blend:!0,blendColorOperation:`add`,blendColorSrcFactor:`src-alpha`,blendColorDstFactor:`one-minus-src-alpha`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one-minus-src-alpha`,depthWriteEnabled:!1,depthCompare:`always`}}),this.trackPointsVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.trackPointsCommand||=new K(e,{fs:U_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.trackPointsVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{},parameters:X})}updateColor(){let{device:e,store:{pointsTextureSize:t},data:n}=this;if(!t)return;let r=n.pointColors,{source:i,target:a,previous:o}=Ug(this.device,r,this.sourceColorBuffer,this.targetColorBuffer,this.previousColorData,4);this.sourceColorBuffer=i,this.targetColorBuffer=a,this.previousColorData=o;let s={...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer}};if(this.drawCommand&&this.drawCommand.setAttributes(s),this.drawCoreCommand&&this.drawCoreCommand.setAttributes(s),this.config.linkColorInterpolateFromEndpoints){let n=new Float32Array(t*t*4);n.set(r.subarray(0,Math.min(r.length,n.length))),this.pointColorsTexture&&this.pointColorsTexture.width===t&&this.pointColorsTexture.height===t||(this.pointColorsTexture&&!this.pointColorsTexture.destroyed&&this.pointColorsTexture.destroy(),this.pointColorsTexture=e.createTexture({width:t,height:t,format:`rgba32float`})),this.pointColorsTexture.copyImageData({data:n,bytesPerRow:Z(`rgba32float`,t),mipLevel:0,x:0,y:0})}else this.pointColorsTexture&&=(this.pointColorsTexture.destroyed||this.pointColorsTexture.destroy(),void 0)}updatePointStatus(){let{device:e,config:t,data:n,store:{pointsTextureSize:r}}=this;if(!r||n.pointsNumber===void 0)return;this.isPickingBufferStale=!0;let{highlightedPointIndices:i,outlinedPointIndices:a}=t,o=i!==void 0,s=a!==void 0,c=new Float32Array(r*r*4);if(o){for(let e=0;e<c.length;e+=4)c[e]=1;for(let e of i)e>=0&&e<n.pointsNumber&&(c[e*4]=0)}if(s)for(let e of a)e>=0&&e<n.pointsNumber&&(c[e*4+1]=1);let l={data:c,bytesPerRow:Z(`rgba32float`,r),mipLevel:0,x:0,y:0};this.pointStatusTexture&&this.pointStatusTexture.width===r&&this.pointStatusTexture.height===r||(this.pointStatusTexture&&!this.pointStatusTexture.destroyed&&this.pointStatusTexture.destroy(),this.pointStatusTexture=e.createTexture({width:r,height:r,format:`rgba32float`})),this.pointStatusTexture.copyImageData(l)}updatePinnedStatus(){let{device:e,store:{pointsTextureSize:t},data:n}=this;if(!t)return;let r=new Float32Array(t*t*4).fill(0);if(n.inputPinnedPoints&&n.pointsNumber!==void 0)for(let e of n.inputPinnedPoints)e>=0&&e<n.pointsNumber&&(r[e*4]=1);this.pinnedStatusTexture&&this.pinnedStatusTexture.width===t&&this.pinnedStatusTexture.height===t||(this.pinnedStatusTexture&&!this.pinnedStatusTexture.destroyed&&this.pinnedStatusTexture.destroy(),this.pinnedStatusTexture=e.createTexture({width:t,height:t,format:`rgba32float`})),this.pinnedStatusTexture.copyImageData({data:r,bytesPerRow:Z(`rgba32float`,t),mipLevel:0,x:0,y:0})}updateExit(){let{device:e,store:{pointsTextureSize:t},data:n}=this;if(!t)return;let r=n.pointsNumber??0,i=this.previousExitData,a=this.hasAnyAbsentPoint,o=new Float32Array(r),s=!1,c=r!==this.pointListCount;for(let e=0;e<r;e++){let t=n.pointPositions&&og(n.pointPositions,e)?1:0;o[e]=t,t&&(s=!0),!c&&i?.[e]!==t&&(c=!0)}if(this.previousExitData=o,this.hasAnyAbsentPoint=s,c&&(this.pointListCount=r,this.pointListVersion++),!s&&!a){if(this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.width===1)return;this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.destroy(),this.exitTexture=e.createTexture({width:1,height:1,format:`rg32float`}),this.exitTexture.copyImageData({data:new Float32Array(2),bytesPerRow:Z(`rg32float`,1),mipLevel:0,x:0,y:0});return}let l=new Float32Array(t*t*2);for(let e=0;e<r;e++){let t=o[e],n=e<(i?.length??0)?i[e]:t;l[e*2]=n,l[e*2+1]=t}let u=!!this.exitTexture&&this.exitTexture.width===t&&this.exitTexture.height===t;this.exitTexture&&u||(this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.destroy(),this.exitTexture=e.createTexture({width:t,height:t,format:`rg32float`})),this.exitTexture.copyImageData({data:l,bytesPerRow:Z(`rg32float`,t),mipLevel:0,x:0,y:0})}updateSize(){let{store:{pointsTextureSize:e},data:t}=this;if(!e||t.pointsNumber===void 0)return;this.markFootprintsStale();let n=t.pointSizes,{source:r,target:i,previous:a,sourceData:o}=Ug(this.device,n,this.sourceSizeBuffer,this.targetSizeBuffer,this.previousSizeData,1);this.sourceSizeBuffer=r,this.targetSizeBuffer=i,this.previousSizeData=a,this.sourceSizeData=o;let s={...this.sourceSizeBuffer&&{sourceSize:this.sourceSizeBuffer},...this.targetSizeBuffer&&{targetSize:this.targetSizeBuffer}};this.drawCommand&&this.drawCommand.setAttributes(s),this.drawCoreCommand&&this.drawCoreCommand.setAttributes(s)}updateShape(){let{device:e,data:t}=this;if(t.pointsNumber===void 0||t.pointShapes===void 0)return;let n=t.pointShapes,r=n.byteLength;!this.shapeBuffer||this.shapeBuffer.byteLength!==r?(this.shapeBuffer&&!this.shapeBuffer.destroyed&&this.shapeBuffer.destroy(),this.shapeBuffer=e.createBuffer({data:n,usage:V.VERTEX|V.COPY_DST})):this.shapeBuffer.write(n),this.drawCommand&&this.drawCommand.setAttributes({shape:this.shapeBuffer}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({shape:this.shapeBuffer})}updateImageIndices(){let{device:e,data:t}=this;if(t.pointsNumber===void 0||t.pointImageIndices===void 0)return;let n=t.pointImageIndices,r=n.byteLength;!this.imageIndicesBuffer||this.imageIndicesBuffer.byteLength!==r?(this.imageIndicesBuffer&&!this.imageIndicesBuffer.destroyed&&this.imageIndicesBuffer.destroy(),this.imageIndicesBuffer=e.createBuffer({data:n,usage:V.VERTEX|V.COPY_DST})):this.imageIndicesBuffer.write(n),this.drawCommand&&this.drawCommand.setAttributes({imageIndex:this.imageIndicesBuffer}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({imageIndex:this.imageIndicesBuffer}),this.fillPickingBufferCommand&&this.fillPickingBufferCommand.setAttributes({imageIndex:this.imageIndicesBuffer}),this.markFootprintsStale()}updateImageSizes(){let{device:e,data:t}=this;if(t.pointsNumber===void 0||t.pointImageSizes===void 0)return;let n=t.pointImageSizes,r=n.byteLength;!this.imageSizesBuffer||this.imageSizesBuffer.byteLength!==r?(this.imageSizesBuffer&&!this.imageSizesBuffer.destroyed&&this.imageSizesBuffer.destroy(),this.imageSizesBuffer=e.createBuffer({data:n,usage:V.VERTEX|V.COPY_DST})):this.imageSizesBuffer.write(n),this.drawCommand&&this.drawCommand.setAttributes({imageSize:this.imageSizesBuffer}),this.drawCoreCommand&&this.drawCoreCommand.setAttributes({imageSize:this.imageSizesBuffer}),this.fillPickingBufferCommand&&this.fillPickingBufferCommand.setAttributes({imageSize:this.imageSizesBuffer}),this.markFootprintsStale()}createAtlas(){var e;let{device:t,data:n,store:r}=this;if(this.markFootprintsStale(),!((e=n.inputImageData)!=null&&e.length))return this.imageCount=0,this.imageAtlasCoordsTextureSize=0,this.imageAtlasCoordsTexture||=t.createTexture({data:new Float32Array(4).fill(0),width:1,height:1,format:`rgba32float`}),this.imageAtlasTexture||=t.createTexture({data:new Uint8Array(4).fill(0),width:1,height:1,format:`rgba8unorm`}),!0;let i=G_(n.inputImageData,r.webglMaxTextureSize);if(!i)return console.warn(`Failed to create atlas from image data`),!1;this.imageCount=n.inputImageData.length;let{atlasData:a,atlasSize:o,atlasCoords:s,atlasCoordsSize:c}=i;return this.imageAtlasCoordsTextureSize=c,this.imageAtlasTexture&&!this.imageAtlasTexture.destroyed&&this.imageAtlasTexture.destroy(),this.imageAtlasTexture=t.createTexture({width:o,height:o,format:`rgba8unorm`}),this.imageAtlasTexture.copyImageData({data:a,bytesPerRow:Z(`rgba8unorm`,o),rowsPerImage:o,mipLevel:0,x:0,y:0}),this.imageAtlasCoordsTexture&&!this.imageAtlasCoordsTexture.destroyed&&this.imageAtlasCoordsTexture.destroy(),this.imageAtlasCoordsTexture=t.createTexture({width:c,height:c,format:`rgba32float`}),this.imageAtlasCoordsTexture.copyImageData({data:s,bytesPerRow:Z(`rgba32float`,c),rowsPerImage:c,mipLevel:0,x:0,y:0}),!0}updateSampledPointsGrid(){let{store:{screenSize:e},config:{pointSamplingDistance:t},device:n}=this,r=t??Math.min(...e)/2;r===0&&(r=hg.pointSamplingDistance);let i=Math.ceil(e[0]/r),a=Math.ceil(e[1]/r);i===0||a===0||this.sampledPointsFbo&&this.sampledPointsFbo.width===i&&this.sampledPointsFbo.height===a||(this.sampledPointsFbo&&!this.sampledPointsFbo.destroyed&&this.sampledPointsFbo.destroy(),this.sampledPointsFbo=n.createFramebuffer({width:i,height:a,colorAttachments:[`rgba32float`]}))}gatherTrackers(){for(let e of this.trackers)e.gather()}gatherTrackedPositions(e,t){if(!this.trackPointsCommand||!this.currentPositionTexture||this.currentPositionTexture.destroyed)return!1;let n=this.trackPointsCommand,r=this.currentPositionTexture,i=()=>{n.setBindings({positionsTexture:r,trackedIndices:e});let i=this.device.beginRenderPass({framebuffer:t});n.draw(i),i.end()};return this.withHostState?this.withHostState(i):i(),!0}addTracker(e){e.attach(this)&&this.trackers.add(e)}removeTracker(e){this.trackers.delete(e)}getAnimatedSize(e,t){let n=this.data.getResolvedPointSize(e),r=this.sourceSizeData?.[e];if(r===void 0)return n;let i=this.data.resolvePointSize(e,r);return i+(n-i)*t}setTransitionProgress(e,t=!1,n=!1,r=!1){this.transitionProgress=e,this.shouldAnimatePointColors=t,this.shouldAnimatePointSizes=n,this.shouldAnimatePointPositions=r}drawPicking(e,t,n=0){let{data:r,store:i}=this;if(this.targetColorBuffer||this.updateColor(),this.targetSizeBuffer||this.updateSize(),this.exitTexture||this.updateExit(),this.shapeBuffer||this.updateShape(),this.imageIndicesBuffer||this.updateImageIndices(),this.imageSizesBuffer||this.updateImageSizes(),!this.drawCommand||!this.drawUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.pointStatusTexture||this.pointStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed||(this.imageAtlasTexture&&this.imageAtlasCoordsTexture||this.createAtlas(),!this.imageAtlasTexture||!this.imageAtlasCoordsTexture)||this.imageAtlasTexture.destroyed||this.imageAtlasCoordsTexture.destroyed||!r.pointsNumber||!i.screenSize||i.screenSize[0]===0||i.screenSize[1]===0)return;this.drawPickingCommand||=new K(this.device,{fs:O_,vs:k_,modules:[L_,R_,Eg],topology:`point-list`,vertexCount:r.pointsNumber,attributes:this.getDrawCommandAttributes(),bufferLayout:[{name:`pointIndices`,format:`float32x2`},{name:`sourceSize`,format:`float32`},{name:`targetSize`,format:`float32`},{name:`sourceColor`,format:`float32x4`},{name:`targetColor`,format:`float32x4`},{name:`shape`,format:`float32`},{name:`imageIndex`,format:`float32`},{name:`imageSize`,format:`float32`}],defines:{USE_UNIFORM_BUFFERS:!0,...Q_},bindings:{drawVertexUniforms:this.drawUniformStore.getManagedUniformBuffer(`drawVertexUniforms`),drawFragmentUniforms:this.drawUniformStore.getManagedUniformBuffer(`drawFragmentUniforms`)},parameters:X}),this.drawPickingCommand.setAttributes(this.getDrawCommandAttributes()),this.drawPickingCommand.setVertexCount(r.pointsNumber);let{vertex:a,fragment:o}=this.getDrawUniforms();this.drawUniformStore.setUniforms({drawVertexUniforms:{...a,skipHighlighted:0,skipGreyed:0},drawFragmentUniforms:{...o,renderMode:3,pickingAlpha:t,pickingIndexOffset:n}}),this.drawPickingCommand.setBindings(this.getDrawTextureBindings()),this.drawPickingCommand.draw(e)}draw(e){let{data:t,config:n,store:r}=this;if(this.targetColorBuffer||this.updateColor(),this.targetSizeBuffer||this.updateSize(),this.exitTexture||this.updateExit(),this.shapeBuffer||this.updateShape(),this.imageIndicesBuffer||this.updateImageIndices(),this.imageSizesBuffer||this.updateImageSizes(),!this.drawCommand||!this.drawUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.pointStatusTexture||this.pointStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed||(!this.imageAtlasTexture||!this.imageAtlasCoordsTexture)&&(this.createAtlas(),!this.imageAtlasTexture||!this.imageAtlasCoordsTexture)||this.imageAtlasTexture.destroyed||this.imageAtlasCoordsTexture.destroyed||!t.pointsNumber||t.pointsNumber===0||!r.screenSize||r.screenSize[0]===0||r.screenSize[1]===0)return;this.drawCommand.setVertexCount(t.pointsNumber);let{vertex:i,fragment:a}=this.getDrawUniforms(),o=this.getDrawTextureBindings(),s=n.highlightedPointIndices!==void 0,c=n.pointOcclusionCulling&&n.pointOpacity>=1&&!s&&!!this.drawCoreCommand&&this.reversedPointIndexBuffer?.byteLength===t.pointsNumber*4;c!==this.isOcclusionCullingActive&&(this.drawCommand.setParameters(c?Z_:Y_),this.isOcclusionCullingActive=c),c&&this.drawCoreCommand?(this.drawUniformStore.setUniforms({drawVertexUniforms:{...i,skipHighlighted:0,skipGreyed:0},drawFragmentUniforms:{...a,renderMode:1}}),this.drawCoreCommand.setVertexCount(t.pointsNumber),this.drawCoreCommand.setBindings(o),this.drawCoreCommand.draw(e),this.drawUniformStore.setUniforms({drawFragmentUniforms:{...a,renderMode:2}}),this.drawCommand.setBindings(o),this.drawCommand.draw(e)):s?(this.drawUniformStore.setUniforms({drawVertexUniforms:{...i,skipHighlighted:1,skipGreyed:0},drawFragmentUniforms:a}),this.drawCommand.setBindings(o),this.drawCommand.draw(e),this.drawUniformStore.setUniforms({drawVertexUniforms:{...i,skipHighlighted:0,skipGreyed:1},drawFragmentUniforms:a}),this.drawCommand.setBindings(o),this.drawCommand.draw(e)):(this.drawUniformStore.setUniforms({drawVertexUniforms:{...i,skipHighlighted:0,skipGreyed:0},drawFragmentUniforms:a}),this.drawCommand.setBindings(o),this.drawCommand.draw(e));let l=n.renderHoveredPointRing?r.hoveredPoint?.index:void 0,u=r.hostHoveredPointIndex,d=u!==void 0&&Number.isInteger(u)&&u>=0&&u<(this.data.pointsNumber??0)?u:void 0;l!==void 0&&this.drawPointRing(e,l,r.hoveredPointRingColor),d!==void 0&&d!==l&&this.drawPointRing(e,d,r.hoveredPointRingColor),r.focusedPoint&&this.drawPointRing(e,r.focusedPoint.index,r.focusedPointRingColor)}updatePosition(){if(!this.updatePositionCommand||!this.updatePositionUniformStore||!this.currentPositionFbo||this.currentPositionFbo.destroyed||!this.previousPositionTexture||this.previousPositionTexture.destroyed||!this.velocityTexture||this.velocityTexture.destroyed||!this.pinnedStatusTexture||this.pinnedStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed)return;this.updatePositionUniformStore.setUniforms({updatePositionUniforms:{friction:this.config.simulationFriction,spaceSize:this.store.adjustedSpaceSize}}),this.updatePositionCommand.setBindings({positionsTexture:this.previousPositionTexture,velocity:this.velocityTexture,pinnedStatusTexture:this.pinnedStatusTexture,exitTexture:this.exitTexture});let e=this.device.beginRenderPass({framebuffer:this.currentPositionFbo});this.updatePositionCommand.draw(e),e.end(),this.markPositionsChanged()}drag(){if(!this.dragPointCommand||!this.dragPointUniformStore||!this.currentPositionFbo||this.currentPositionFbo.destroyed||!this.previousPositionTexture||this.previousPositionTexture.destroyed)return;this.dragPointUniformStore.setUniforms({dragPointUniforms:{mousePos:Q(this.store.mousePosition,[0,0]),index:this.store.hoveredPoint?.index??-1}}),this.dragPointCommand.setBindings({positionsTexture:this.previousPositionTexture});let e=this.device.beginRenderPass({framebuffer:this.currentPositionFbo});this.dragPointCommand.draw(e),e.end(),this.markPositionsChanged()}setPointPositionsByIndices(e,t){let{store:{pointsTextureSize:n},data:r}=this;if(!n||r.pointsNumber===void 0||!this.currentPositionTexture||this.currentPositionTexture.destroyed)return;let i=[this.currentPositionTexture];if(this.transition?.isActiveFor(Y.Positions)||this.transition?.isPendingFor(Y.Positions))for(let e of[this.sourcePositionTexture,this.targetPositionTexture])e&&!e.destroyed&&i.push(e);let a=new Float32Array(4);for(let o=0,s=e.length;o<s;o+=1){let s=e[o];if(!(!Number.isInteger(s)||s<0||s>=r.pointsNumber)&&!(r.pointPositions&&og(r.pointPositions,s))){a[0]=t[o*2],a[1]=t[o*2+1],a[2]=s;for(let e of i)e.copyImageData({data:a,x:s%n,y:Math.floor(s/n),width:1,height:1,bytesPerRow:Z(`rgba32float`,1),mipLevel:0})}}this.markPositionsChanged(),this.areClusterCentroidsUpToDate=!1}setPointPinnedStatus(e,t){let{store:{pointsTextureSize:n},data:r}=this;if(n&&r.pointsNumber!==void 0&&!(e<0||e>=r.pointsNumber)){if(!this.pinnedStatusTexture||this.pinnedStatusTexture.destroyed||this.pinnedStatusTexture.width!==n||this.pinnedStatusTexture.height!==n){this.updatePinnedStatus();return}this.pinnedStatusTexture.copyImageData({data:new Float32Array([+!!t,0,0,0]),x:e%n,y:Math.floor(e/n),width:1,height:1,bytesPerRow:Z(`rgba32float`,1),mipLevel:0})}}async readPositionPixelsAsync(){let{device:e,store:{pointsTextureSize:t},data:{pointsNumber:n}}=this;if(!t||!this.currentPositionFbo||this.currentPositionFbo.destroyed)return;let r=t*t*4*4,i=e.createBuffer({byteLength:r,usage:V.COPY_DST|V.MAP_READ});try{let a=e.createCommandEncoder();if(a.copyTextureToBuffer({sourceTexture:this.currentPositionFbo,width:t,height:t,destinationBuffer:i}),e.submit(a.finish()),await this.waitForGpu(),this.store.pointsTextureSize!==t||this.data.pointsNumber!==n||!this.currentPositionFbo||this.currentPositionFbo.destroyed)return;let o=await i.readAsync();return new Float32Array(o.buffer,o.byteOffset,r/4)}finally{i.destroy()}}findPointsInRect(){if(!this.findPointsInRectCommand||!this.findPointsInRectUniformStore||!this.searchFbo||this.searchFbo.destroyed||!this.currentPositionTexture||this.currentPositionTexture.destroyed||(this.isSizeTextureStale&&this.updateSizeTexture(),!this.sizeTexture||this.sizeTexture.destroyed)||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return!1;this.findPointsInRectUniformStore.setUniforms({findPointsInRectUniforms:{spaceSize:this.store.adjustedSpaceSize,screenSize:Q(this.store.screenSize,[0,0]),sizeScale:this.config.pointSizeScale,transformationMatrix:this.store.transformationMatrix4x4,ratio:this.config.pixelRatio,rect0:Q(this.store.searchArea?.[0],[0,0]),rect1:Q(this.store.searchArea?.[1],[0,0]),scalePointsOnZoom:+!!this.config.scalePointsOnZoom,maxPointSize:this.store.maxPointSize}}),this.findPointsInRectCommand.setBindings({positionsTexture:this.currentPositionTexture,pointSize:this.sizeTexture,exitTexture:this.exitTexture});let e=this.device.beginRenderPass({framebuffer:this.searchFbo});return this.findPointsInRectCommand.draw(e),e.end(),!0}findPointsInPolygon(){if(!this.findPointsInPolygonCommand||!this.findPointsInPolygonUniformStore||!this.searchFbo||this.searchFbo.destroyed||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.polygonPathTexture||this.polygonPathTexture.destroyed||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return!1;this.findPointsInPolygonUniformStore.setUniforms({findPointsInPolygonUniforms:{spaceSize:this.store.adjustedSpaceSize,screenSize:Q(this.store.screenSize,[0,0]),transformationMatrix:this.store.transformationMatrix4x4,polygonPathLength:this.polygonPathLength}}),this.findPointsInPolygonCommand.setBindings({positionsTexture:this.currentPositionTexture,polygonPathTexture:this.polygonPathTexture,exitTexture:this.exitTexture});let e=this.device.beginRenderPass({framebuffer:this.searchFbo});return this.findPointsInPolygonCommand.draw(e),e.end(),!0}updatePolygonPath(e){let{device:t}=this;if(this.polygonPathLength=e.length,e.length===0){this.polygonPathTexture&&!this.polygonPathTexture.destroyed&&this.polygonPathTexture.destroy(),this.polygonPathTexture=void 0;return}let n=Math.ceil(Math.sqrt(e.length)),r=new Float32Array(n*n*4);for(let[t,n]of e.entries()){let[e,i]=n;r[t*4]=e,r[t*4+1]=i,r[t*4+2]=0,r[t*4+3]=0}this.polygonPathTexture&&this.polygonPathTexture.width===n&&this.polygonPathTexture.height===n||(this.polygonPathTexture&&!this.polygonPathTexture.destroyed&&this.polygonPathTexture.destroy(),this.polygonPathTexture=t.createTexture({width:n,height:n,format:`rgba32float`})),this.polygonPathTexture.copyImageData({data:r,bytesPerRow:Z(`rgba32float`,n),mipLevel:0,x:0,y:0})}updatePickingBuffer(){if(!this.isPickingBufferStale||!this.ensurePickingBuffer()||!this.pickingFbo||this.pickingFbo.destroyed||!this.fillPickingBufferCommand||!this.fillPickingBufferUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||(this.pointStatusTexture||this.updatePointStatus(),!this.pointStatusTexture||this.pointStatusTexture.destroyed)||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return;this.fillPickingBufferCommand.setVertexCount(this.data.pointsNumber??0),this.fillPickingBufferCommand.setAttributes({...this.hoveredPointIndices&&{pointIndices:this.hoveredPointIndices},...this.targetSizeBuffer&&{size:this.targetSizeBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer}});let e=Q(this.store.screenSize,[0,0]),t={ratio:this.config.pixelRatio,sizeScale:this.config.pointSizeScale,pointsTextureSize:this.store.pointsTextureSize??0,transformationMatrix:this.store.transformationMatrix4x4,spaceSize:this.store.adjustedSpaceSize,screenSize:e,scalePointsOnZoom:+!!this.config.scalePointsOnZoom,pickingPixelRatio:e[0]>0?this.pickingFbo.width/e[0]:Mg,maxPointSize:this.store.maxPointSize,pointDefaultSize:this.config.pointDefaultSize,hasImages:+(this.imageCount>0),imageCount:this.imageCount},n={positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture},r=this.device.beginRenderPass({framebuffer:this.pickingFbo,clearColor:[-1,0,0,0],clearDepth:1});this.config.highlightedPointIndices===void 0?(this.fillPickingBufferUniformStore.setUniforms({fillPickingBufferUniforms:{...t,skipHighlighted:0,skipGreyed:0}}),this.fillPickingBufferCommand.setBindings(n),this.fillPickingBufferCommand.draw(r)):(this.fillPickingBufferUniformStore.setUniforms({fillPickingBufferUniforms:{...t,skipHighlighted:1,skipGreyed:0}}),this.fillPickingBufferCommand.setBindings(n),this.fillPickingBufferCommand.draw(r),this.fillPickingBufferUniformStore.setUniforms({fillPickingBufferUniforms:{...t,skipHighlighted:0,skipGreyed:1}}),this.fillPickingBufferCommand.setBindings(n),this.fillPickingBufferCommand.draw(r)),r.end(),this.isPickingBufferStale=!1}pickPointSync(){this.updatePickingBuffer();let e=this.getCursorPickingWindow();if(e&&this.pickingFbo&&!this.pickingFbo.destroyed)return zg(eg(this.device,this.pickingFbo,e.x,e.y,Pg,Pg),e.centerX-e.x,e.centerY-e.y)}requestPickPoint(){var e;if((e=this.pickingReadback)!=null&&e.inFlight)return!1;if(this.updatePickingBuffer(),!this.pickingFbo||this.pickingFbo.destroyed)return!0;let t=this.device.gl,n=this.pickingFbo.handle;if(!t||!n)return!0;this.pickingReadback||=new jg(t,324);let r=this.getCursorPickingWindow();return r?this.pickingReadback.issue(n,r.x,r.y,Pg,Pg)?(this.issuedPickingWindow=r,!0):!1:!0}discardPendingPick(){var e;(e=this.pickingReadback)==null||e.cancel(),this.issuedPickingWindow=void 0}takePickResult(){if(!this.pickingReadback||!this.issuedPickingWindow)return;let e=this.pickingReadback.poll();if(!e)return;let t=this.issuedPickingWindow;return this.issuedPickingWindow=void 0,zg(e,t.centerX-t.x,t.centerY-t.y)??null}requestTrackedPositionsReadback(){for(let e of this.trackers)e.requestReadback()}resolveTrackedPositionsReadback(){for(let e of this.trackers)e.resolveReadback()}getSampledPointPositionsMap(){let e=new Map;if(!this.sampledPointsFbo||this.sampledPointsFbo.destroyed)return e;if(this.fillSampledPointsFboCommand&&this.fillSampledPointsUniformStore&&this.sampledPointsFbo){if(!this.currentPositionTexture||this.currentPositionTexture.destroyed||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return e;this.fillSampledPointsFboCommand.setVertexCount(this.data.pointsNumber??0),this.fillSampledPointsUniformStore.setUniforms({fillSampledPointsUniforms:{pointsTextureSize:this.store.pointsTextureSize??0,transformationMatrix:this.store.transformationMatrix4x4,spaceSize:this.store.adjustedSpaceSize,screenSize:Q(this.store.screenSize,[0,0])}}),this.fillSampledPointsFboCommand.setBindings({positionsTexture:this.currentPositionTexture,exitTexture:this.exitTexture});let t=this.device.beginRenderPass({framebuffer:this.sampledPointsFbo,clearColor:[0,0,0,0]});this.fillSampledPointsFboCommand.draw(t),t.end()}let t=eg(this.device,this.sampledPointsFbo);for(let n=0;n<t.length/4;n++){let r=t[n*4],i=!!t[n*4+1],a=t[n*4+2],o=t[n*4+3];i&&r!==void 0&&a!==void 0&&o!==void 0&&e.set(r,[a,o])}return e}getSampledPoints(){let e=[],t=[];if(!this.sampledPointsFbo||this.sampledPointsFbo.destroyed)return{indices:e,positions:t};if(this.fillSampledPointsFboCommand&&this.fillSampledPointsUniformStore&&this.sampledPointsFbo){if(!this.currentPositionTexture||this.currentPositionTexture.destroyed||(this.exitTexture||this.updateExit(),!this.exitTexture||this.exitTexture.destroyed))return{indices:e,positions:t};this.fillSampledPointsFboCommand.setVertexCount(this.data.pointsNumber??0),this.fillSampledPointsUniformStore.setUniforms({fillSampledPointsUniforms:{pointsTextureSize:this.store.pointsTextureSize??0,transformationMatrix:this.store.transformationMatrix4x4,spaceSize:this.store.adjustedSpaceSize,screenSize:Q(this.store.screenSize,[0,0])}}),this.fillSampledPointsFboCommand.setBindings({positionsTexture:this.currentPositionTexture,exitTexture:this.exitTexture});let n=this.device.beginRenderPass({framebuffer:this.sampledPointsFbo,clearColor:[0,0,0,0]});this.fillSampledPointsFboCommand.draw(n),n.end()}let n=eg(this.device,this.sampledPointsFbo);for(let r=0;r<n.length/4;r++){let i=n[r*4],a=!!n[r*4+1],o=n[r*4+2],s=n[r*4+3];a&&i!==void 0&&o!==void 0&&s!==void 0&&(e.push(i),t.push(o,s))}return{indices:e,positions:t}}destroy(){var e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;(e=this.drawCommand)==null||e.destroy(),(t=this.drawPickingCommand)==null||t.destroy(),this.drawPickingCommand=void 0,this.drawCommand=void 0,(n=this.drawCoreCommand)==null||n.destroy(),this.drawCoreCommand=void 0,this.isOcclusionCullingActive=!1,(r=this.drawHighlightedCommand)==null||r.destroy(),this.drawHighlightedCommand=void 0,(i=this.interpolatePositionCommand)==null||i.destroy(),this.interpolatePositionCommand=void 0,(a=this.updatePositionCommand)==null||a.destroy(),this.updatePositionCommand=void 0,(o=this.dragPointCommand)==null||o.destroy(),this.dragPointCommand=void 0,(s=this.findPointsInRectCommand)==null||s.destroy(),this.findPointsInRectCommand=void 0,(c=this.findPointsInPolygonCommand)==null||c.destroy(),this.findPointsInPolygonCommand=void 0,(l=this.fillPickingBufferCommand)==null||l.destroy(),this.fillPickingBufferCommand=void 0,(u=this.fillSampledPointsFboCommand)==null||u.destroy(),this.fillSampledPointsFboCommand=void 0,(d=this.trackPointsCommand)==null||d.destroy(),this.trackPointsCommand=void 0,(f=this.pickingReadback)==null||f.destroy(),this.pickingReadback=void 0;for(let e of this.trackers)e.release();this.trackers.clear(),this.issuedPickingWindow=void 0,this.currentPositionFbo&&!this.currentPositionFbo.destroyed&&this.currentPositionFbo.destroy(),this.currentPositionFbo=void 0,this.previousPositionFbo&&!this.previousPositionFbo.destroyed&&this.previousPositionFbo.destroy(),this.previousPositionFbo=void 0,this.sourcePositionFbo&&!this.sourcePositionFbo.destroyed&&this.sourcePositionFbo.destroy(),this.sourcePositionFbo=void 0,this.targetPositionFbo&&!this.targetPositionFbo.destroyed&&this.targetPositionFbo.destroy(),this.targetPositionFbo=void 0,this.velocityFbo&&!this.velocityFbo.destroyed&&this.velocityFbo.destroy(),this.velocityFbo=void 0,this.searchFbo&&!this.searchFbo.destroyed&&this.searchFbo.destroy(),this.searchFbo=void 0,this.pickingFbo&&!this.pickingFbo.destroyed&&this.pickingFbo.destroy(),this.pickingFbo=void 0,this.sampledPointsFbo&&!this.sampledPointsFbo.destroyed&&this.sampledPointsFbo.destroy(),this.sampledPointsFbo=void 0,this.currentPositionTexture&&!this.currentPositionTexture.destroyed&&this.currentPositionTexture.destroy(),this.currentPositionTexture=void 0,this.previousPositionTexture&&!this.previousPositionTexture.destroyed&&this.previousPositionTexture.destroy(),this.previousPositionTexture=void 0,this.sourcePositionTexture&&!this.sourcePositionTexture.destroyed&&this.sourcePositionTexture.destroy(),this.sourcePositionTexture=void 0,this.targetPositionTexture&&!this.targetPositionTexture.destroyed&&this.targetPositionTexture.destroy(),this.targetPositionTexture=void 0,this.velocityTexture&&!this.velocityTexture.destroyed&&this.velocityTexture.destroy(),this.velocityTexture=void 0,this.searchTexture&&!this.searchTexture.destroyed&&this.searchTexture.destroy(),this.searchTexture=void 0,this.pickingTexture&&!this.pickingTexture.destroyed&&this.pickingTexture.destroy(),this.pickingTexture=void 0,this.pointStatusTexture&&!this.pointStatusTexture.destroyed&&this.pointStatusTexture.destroy(),this.pointStatusTexture=void 0,this.pointColorsTexture&&!this.pointColorsTexture.destroyed&&this.pointColorsTexture.destroy(),this.pointColorsTexture=void 0,this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=void 0,this.isSizeTextureStale=!0,this.polygonPathTexture&&!this.polygonPathTexture.destroyed&&this.polygonPathTexture.destroy(),this.polygonPathTexture=void 0,this.imageAtlasTexture&&!this.imageAtlasTexture.destroyed&&this.imageAtlasTexture.destroy(),this.imageAtlasTexture=void 0,this.imageAtlasCoordsTexture&&!this.imageAtlasCoordsTexture.destroyed&&this.imageAtlasCoordsTexture.destroy(),this.imageAtlasCoordsTexture=void 0,this.pinnedStatusTexture&&!this.pinnedStatusTexture.destroyed&&this.pinnedStatusTexture.destroy(),this.pinnedStatusTexture=void 0,this.exitTexture&&!this.exitTexture.destroyed&&this.exitTexture.destroy(),this.exitTexture=void 0,this.hasAnyAbsentPoint=!1,(p=this.interpolatePositionUniformStore)==null||p.destroy(),this.interpolatePositionUniformStore=void 0,(m=this.updatePositionUniformStore)==null||m.destroy(),this.updatePositionUniformStore=void 0,(h=this.dragPointUniformStore)==null||h.destroy(),this.dragPointUniformStore=void 0,(g=this.drawUniformStore)==null||g.destroy(),this.drawUniformStore=void 0,(_=this.findPointsInRectUniformStore)==null||_.destroy(),this.findPointsInRectUniformStore=void 0,(v=this.findPointsInPolygonUniformStore)==null||v.destroy(),this.findPointsInPolygonUniformStore=void 0,(y=this.fillPickingBufferUniformStore)==null||y.destroy(),this.fillPickingBufferUniformStore=void 0,(b=this.fillSampledPointsUniformStore)==null||b.destroy(),this.fillSampledPointsUniformStore=void 0,(x=this.drawHighlightedUniformStore)==null||x.destroy(),this.drawHighlightedUniformStore=void 0,this.sourceColorBuffer&&!this.sourceColorBuffer.destroyed&&this.sourceColorBuffer.destroy(),this.sourceColorBuffer=void 0,this.targetColorBuffer&&!this.targetColorBuffer.destroyed&&this.targetColorBuffer.destroy(),this.targetColorBuffer=void 0,this.previousColorData=void 0,this.sourceSizeBuffer&&!this.sourceSizeBuffer.destroyed&&this.sourceSizeBuffer.destroy(),this.sourceSizeBuffer=void 0,this.targetSizeBuffer&&!this.targetSizeBuffer.destroyed&&this.targetSizeBuffer.destroy(),this.targetSizeBuffer=void 0,this.previousSizeData=void 0,this.sourceSizeData=void 0,this.previousExitData=void 0,this.shapeBuffer&&!this.shapeBuffer.destroyed&&this.shapeBuffer.destroy(),this.shapeBuffer=void 0,this.imageIndicesBuffer&&!this.imageIndicesBuffer.destroyed&&this.imageIndicesBuffer.destroy(),this.imageIndicesBuffer=void 0,this.imageSizesBuffer&&!this.imageSizesBuffer.destroyed&&this.imageSizesBuffer.destroy(),this.imageSizesBuffer=void 0,this.drawPointIndices&&!this.drawPointIndices.destroyed&&this.drawPointIndices.destroy(),this.drawPointIndices=void 0,this.reversedPointIndexBuffer&&!this.reversedPointIndexBuffer.destroyed&&this.reversedPointIndexBuffer.destroy(),this.reversedPointIndexBuffer=void 0,this.hoveredPointIndices&&!this.hoveredPointIndices.destroyed&&this.hoveredPointIndices.destroy(),this.hoveredPointIndices=void 0,this.sampledPointIndices&&!this.sampledPointIndices.destroyed&&this.sampledPointIndices.destroy(),this.sampledPointIndices=void 0,this.updatePositionVertexCoordBuffer&&!this.updatePositionVertexCoordBuffer.destroyed&&this.updatePositionVertexCoordBuffer.destroy(),this.updatePositionVertexCoordBuffer=void 0,this.interpolatePositionVertexCoordBuffer&&!this.interpolatePositionVertexCoordBuffer.destroyed&&this.interpolatePositionVertexCoordBuffer.destroy(),this.interpolatePositionVertexCoordBuffer=void 0,this.dragPointVertexCoordBuffer&&!this.dragPointVertexCoordBuffer.destroyed&&this.dragPointVertexCoordBuffer.destroy(),this.dragPointVertexCoordBuffer=void 0,this.findPointsInRectVertexCoordBuffer&&!this.findPointsInRectVertexCoordBuffer.destroyed&&this.findPointsInRectVertexCoordBuffer.destroy(),this.findPointsInRectVertexCoordBuffer=void 0,this.findPointsInPolygonVertexCoordBuffer&&!this.findPointsInPolygonVertexCoordBuffer.destroyed&&this.findPointsInPolygonVertexCoordBuffer.destroy(),this.findPointsInPolygonVertexCoordBuffer=void 0,this.drawHighlightedVertexCoordBuffer&&!this.drawHighlightedVertexCoordBuffer.destroyed&&this.drawHighlightedVertexCoordBuffer.destroy(),this.drawHighlightedVertexCoordBuffer=void 0,this.trackPointsVertexCoordBuffer&&!this.trackPointsVertexCoordBuffer.destroyed&&this.trackPointsVertexCoordBuffer.destroy(),this.trackPointsVertexCoordBuffer=void 0}ensureSimulationResources(){let{store:{pointsTextureSize:e},device:t}=this;if(!e)return;this.ensureUpdatePositionProgram();let n=new Float32Array(e*e*4).fill(0);!this.velocityTexture||this.velocityTexture.width!==e||this.velocityTexture.height!==e?(this.velocityFbo&&!this.velocityFbo.destroyed&&this.velocityFbo.destroy(),this.velocityTexture&&!this.velocityTexture.destroyed&&this.velocityTexture.destroy(),this.velocityTexture=t.createTexture({width:e,height:e,format:`rgba32float`}),this.velocityTexture.copyImageData({data:n,bytesPerRow:Z(`rgba32float`,e),mipLevel:0,x:0,y:0}),this.velocityFbo=t.createFramebuffer({width:e,height:e,colorAttachments:[this.velocityTexture]})):this.velocityTexture.copyImageData({data:n,bytesPerRow:Z(`rgba32float`,e),mipLevel:0,x:0,y:0})}createTransitionResources(){let{store:{pointsTextureSize:e},device:t}=this;if(!e)return;let n=new Float32Array(e*e*4).fill(0),r=W.SAMPLE|W.RENDER|W.COPY_SRC|W.COPY_DST;this.sourcePositionTexture&&this.sourcePositionTexture.width===e&&this.sourcePositionTexture.height===e||(this.sourcePositionFbo&&!this.sourcePositionFbo.destroyed&&this.sourcePositionFbo.destroy(),this.sourcePositionTexture&&!this.sourcePositionTexture.destroyed&&this.sourcePositionTexture.destroy(),this.sourcePositionTexture=t.createTexture({width:e,height:e,format:`rgba32float`,usage:r}),this.sourcePositionFbo=t.createFramebuffer({width:e,height:e,colorAttachments:[this.sourcePositionTexture]})),this.sourcePositionTexture.copyImageData({data:n,bytesPerRow:Z(`rgba32float`,e),mipLevel:0,x:0,y:0}),this.targetPositionTexture&&this.targetPositionTexture.width===e&&this.targetPositionTexture.height===e||(this.targetPositionFbo&&!this.targetPositionFbo.destroyed&&this.targetPositionFbo.destroy(),this.targetPositionTexture&&!this.targetPositionTexture.destroyed&&this.targetPositionTexture.destroy(),this.targetPositionTexture=t.createTexture({width:e,height:e,format:`rgba32float`,usage:r}),this.targetPositionFbo=t.createFramebuffer({width:e,height:e,colorAttachments:[this.targetPositionTexture]})),this.targetPositionTexture.copyImageData({data:n,bytesPerRow:Z(`rgba32float`,e),mipLevel:0,x:0,y:0}),this.interpolatePositionVertexCoordBuffer||=t.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.interpolatePositionUniformStore||=new G(t,{interpolatePositionUniforms:{uniformTypes:{progress:`f32`},defaultUniforms:{progress:0}}}),this.interpolatePositionCommand||=new K(t,{fs:H_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.interpolatePositionVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{interpolatePositionUniforms:this.interpolatePositionUniformStore.getManagedUniformBuffer(`interpolatePositionUniforms`)},parameters:X})}destroyTransitionResources(){var e,t;(e=this.interpolatePositionCommand)==null||e.destroy(),this.interpolatePositionCommand=void 0,(t=this.interpolatePositionUniformStore)==null||t.destroy(),this.interpolatePositionUniformStore=void 0,this.interpolatePositionVertexCoordBuffer&&!this.interpolatePositionVertexCoordBuffer.destroyed&&this.interpolatePositionVertexCoordBuffer.destroy(),this.interpolatePositionVertexCoordBuffer=void 0,this.sourcePositionFbo&&!this.sourcePositionFbo.destroyed&&this.sourcePositionFbo.destroy(),this.sourcePositionFbo=void 0,this.sourcePositionTexture&&!this.sourcePositionTexture.destroyed&&this.sourcePositionTexture.destroy(),this.sourcePositionTexture=void 0,this.targetPositionFbo&&!this.targetPositionFbo.destroyed&&this.targetPositionFbo.destroy(),this.targetPositionFbo=void 0,this.targetPositionTexture&&!this.targetPositionTexture.destroyed&&this.targetPositionTexture.destroy(),this.targetPositionTexture=void 0}interpolatePosition(e){if(!this.interpolatePositionCommand||!this.interpolatePositionUniformStore||!this.sourcePositionTexture||this.sourcePositionTexture.destroyed||!this.targetPositionTexture||this.targetPositionTexture.destroyed||!this.currentPositionFbo||this.currentPositionFbo.destroyed)return;this.interpolatePositionUniformStore.setUniforms({interpolatePositionUniforms:{progress:e}}),this.interpolatePositionCommand.setBindings({sourceTexture:this.sourcePositionTexture,targetTexture:this.targetPositionTexture});let t=this.device.beginRenderPass({framebuffer:this.currentPositionFbo});this.interpolatePositionCommand.draw(t),t.end(),this.markPositionsChanged(),this.areClusterCentroidsUpToDate=!1}destroySimulationResources(){var e,t;(e=this.updatePositionCommand)==null||e.destroy(),this.updatePositionCommand=void 0,(t=this.updatePositionUniformStore)==null||t.destroy(),this.updatePositionUniformStore=void 0,this.updatePositionVertexCoordBuffer&&!this.updatePositionVertexCoordBuffer.destroyed&&this.updatePositionVertexCoordBuffer.destroy(),this.updatePositionVertexCoordBuffer=void 0,this.velocityFbo&&!this.velocityFbo.destroyed&&this.velocityFbo.destroy(),this.velocityFbo=void 0,this.velocityTexture&&!this.velocityTexture.destroyed&&this.velocityTexture.destroy(),this.velocityTexture=void 0}swapFbo(){if(!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.previousPositionTexture||this.previousPositionTexture.destroyed||!this.currentPositionFbo||this.currentPositionFbo.destroyed||!this.previousPositionFbo||this.previousPositionFbo.destroyed)return;let e=this.previousPositionTexture,t=this.previousPositionFbo;this.previousPositionTexture=this.currentPositionTexture,this.previousPositionFbo=this.currentPositionFbo,this.currentPositionTexture=e,this.currentPositionFbo=t,this.areClusterCentroidsUpToDate=!1,this.positionVersion++}markFootprintsStale(){this.isPickingBufferStale=!0,this.isSizeTextureStale=!0}updateSizeTexture(){let{device:e,store:{pointsTextureSize:t},data:n}=this;if(!t||n.pointsNumber===void 0)return;let r=new Float32Array(t*t*4);for(let e=0;e<n.pointsNumber;e++)r[e*4]=n.getResolvedPointFootprint(e);this.sizeTexture&&this.sizeTexture.width===t&&this.sizeTexture.height===t||(this.sizeTexture&&!this.sizeTexture.destroyed&&this.sizeTexture.destroy(),this.sizeTexture=e.createTexture({width:t,height:t,format:`rgba32float`})),this.sizeTexture.copyImageData({data:r,bytesPerRow:Z(`rgba32float`,t),mipLevel:0,x:0,y:0}),this.isSizeTextureStale=!1}markPositionsChanged(){this.positionVersion++}drawPointRing(e,t,n){let{config:r,store:i}=this;!this.drawHighlightedCommand||!this.drawHighlightedUniformStore||!this.currentPositionTexture||this.currentPositionTexture.destroyed||!this.pointStatusTexture||this.pointStatusTexture.destroyed||!this.exitTexture||this.exitTexture.destroyed||(this.drawHighlightedUniformStore.setUniforms({drawHighlightedUniforms:{...this.getRingSizeUniforms(t),transformationMatrix:i.transformationMatrix4x4,pointsTextureSize:i.pointsTextureSize??0,sizeScale:r.pointSizeScale,spaceSize:i.adjustedSpaceSize,screenSize:Q(i.screenSize,[0,0]),scalePointsOnZoom:+!!r.scalePointsOnZoom,pointIndex:t,maxPointSize:i.maxPointSize,color:$(n,[0,0,0,1]),universalPointOpacity:r.pointOpacity,greyoutOpacity:r.pointGreyoutOpacity??-1,isDarkenGreyout:i.isDarkenGreyout??!1?1:0,backgroundColor:$(i.backgroundColor,[0,0,0,1]),greyoutColor:$(i.greyoutPointColor,[0,0,0,1]),animatePositions:+!!this.shouldAnimatePointPositions,transitionProgress:this.transitionProgress,animateSizes:+!!this.shouldAnimatePointSizes,pointDefaultSize:r.pointDefaultSize,width:.85,pixelRatio:r.pixelRatio}}),this.drawHighlightedCommand.setBindings({positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture}),this.drawHighlightedCommand.draw(e))}getRingSizeUniforms(e){let{data:t}=this,n=t.pointSizes?.[e]??NaN;return{sourceSize:this.sourceSizeData?.[e]??n,targetSize:n,imageSize:t.pointDrawsImage(e)?t.pointImageSizes?.[e]??0:0}}ensurePositionTextures(e){this.currentPositionTexture&&this.currentPositionTexture.width===e&&this.currentPositionTexture.height===e||(this.currentPositionTexture&&!this.currentPositionTexture.destroyed&&this.currentPositionTexture.destroy(),this.currentPositionFbo&&!this.currentPositionFbo.destroyed&&this.currentPositionFbo.destroy(),this.currentPositionTexture=this.device.createTexture({width:e,height:e,format:`rgba32float`}),this.currentPositionFbo=this.device.createFramebuffer({width:e,height:e,colorAttachments:[this.currentPositionTexture]})),this.previousPositionTexture&&this.previousPositionTexture.width===e&&this.previousPositionTexture.height===e||(this.previousPositionTexture&&!this.previousPositionTexture.destroyed&&this.previousPositionTexture.destroy(),this.previousPositionFbo&&!this.previousPositionFbo.destroyed&&this.previousPositionFbo.destroy(),this.previousPositionTexture=this.device.createTexture({width:e,height:e,format:`rgba32float`}),this.previousPositionFbo=this.device.createFramebuffer({width:e,height:e,colorAttachments:[this.previousPositionTexture]}))}async waitForGpu(e=1e3){let t=this.device.createFence(),n;try{await Promise.race([t.signaled,new Promise(t=>{n=setTimeout(t,e)})])}finally{clearTimeout(n),t.destroy()}}writePositionTexture(e,t,n){e.copyImageData({data:t,bytesPerRow:Z(`rgba32float`,n),mipLevel:0,x:0,y:0})}ensurePickingBuffer(){var e;let{device:t,store:n}=this,[r,i]=n.screenSize;if(!r||!i)return!1;let{width:a,height:o}=Ig(r,i);return this.pickingTexture&&!this.pickingTexture.destroyed&&this.pickingTexture.width===a&&this.pickingTexture.height===o||((e=this.pickingReadback)==null||e.cancel(),this.issuedPickingWindow=void 0,this.pickingFbo&&!this.pickingFbo.destroyed&&this.pickingFbo.destroy(),this.pickingTexture&&!this.pickingTexture.destroyed&&this.pickingTexture.destroy(),this.pickingTexture=t.createTexture({width:a,height:o,format:`rgba32float`,usage:W.SAMPLE|W.RENDER}),this.pickingFbo=t.createFramebuffer({width:a,height:o,colorAttachments:[this.pickingTexture],depthStencilAttachment:`depth16unorm`}),this.isPickingBufferStale=!0),!0}getCursorPickingWindow(){if(!this.pickingFbo||this.pickingFbo.destroyed)return;let[e,t]=this.store.screenSize;if(e&&t)return Lg(this.pickingFbo.width,this.pickingFbo.height,this.store.screenMousePosition[0],this.store.screenMousePosition[1],e,t)}ensureUpdatePositionProgram(){let{device:e,config:t,store:n}=this;this.updatePositionVertexCoordBuffer||=e.createBuffer({data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}),this.updatePositionUniformStore||=new G(e,{updatePositionUniforms:{uniformTypes:{friction:`f32`,spaceSize:`f32`},defaultUniforms:{friction:t.simulationFriction,spaceSize:n.adjustedSpaceSize}}}),this.updatePositionCommand||=new K(e,{fs:V_,vs:Zg,topology:`triangle-strip`,vertexCount:4,attributes:{vertexCoord:this.updatePositionVertexCoordBuffer},bufferLayout:[{name:`vertexCoord`,format:`float32x2`}],defines:{USE_UNIFORM_BUFFERS:!0},bindings:{updatePositionUniforms:this.updatePositionUniformStore.getManagedUniformBuffer(`updatePositionUniforms`)},parameters:X})}rescaleInitialNodePositions(){let{config:{spaceSize:e}}=this;if(!this.data.pointPositions||!e)return;let t=this.data.pointPositions,n=t.length/2,r=1/0,i=-1/0,a=1/0,o=-1/0;for(let e=0;e<t.length;e+=2){let n=t[e],s=t[e+1];og(t,e/2)||(r=Math.min(r,n),i=Math.max(i,n),a=Math.min(a,s),o=Math.max(o,s))}if(!Number.isFinite(r)){this.scaleX=void 0,this.scaleY=void 0;return}let s=i-r,c=o-a,l=Math.max(s,c);if(l===0){let i=e/2;this.scaleX=e=>e-r+i,this.scaleY=e=>e-a+i;for(let e=0;e<n;e++)og(t,e)||(this.data.pointPositions[e*2]=this.scaleX(t[e*2]),this.data.pointPositions[e*2+1]=this.scaleY(t[e*2+1]));return}if(l>e){this.scaleX=void 0,this.scaleY=void 0;return}let u=n>e*e*.001?e*Math.max(1.2,Math.sqrt(n)/e):e*.1,d=u/l,f=(e-u)/2,p=(l-s)/2*d+f,m=(l-c)/2*d+f;this.scaleX=e=>(e-r)*d+p,this.scaleY=e=>(e-a)*d+m;for(let e=0;e<n;e++)og(t,e)||(this.data.pointPositions[e*2]=this.scaleX(t[e*2]),this.data.pointPositions[e*2+1]=this.scaleY(t[e*2+1]))}updateReversedPointIndexBuffer(){var e;let{device:t,data:n}=this,r=n.pointsNumber??0;if(r===0)return;let i=r*4;if(this.reversedPointIndexBuffer?.byteLength===i)return;let a=new Uint32Array(r);for(let e=0;e<r;e++)a[e]=r-1-e;this.reversedPointIndexBuffer&&!this.reversedPointIndexBuffer.destroyed&&this.reversedPointIndexBuffer.destroy(),this.reversedPointIndexBuffer=t.createBuffer({data:a,usage:V.INDEX|V.COPY_DST}),(e=this.drawCoreCommand)==null||e.setIndexBuffer(this.reversedPointIndexBuffer)}getDrawUniforms(){let{data:e,config:t,store:n}=this;return{vertex:{ratio:t.pixelRatio,transformationMatrix:n.transformationMatrix4x4,pointsTextureSize:n.pointsTextureSize??0,sizeScale:t.pointSizeScale,spaceSize:n.adjustedSpaceSize,screenSize:Q(n.screenSize,[0,0]),greyoutColor:$(n.greyoutPointColor,[-1,-1,-1,-1]),backgroundColor:$(n.backgroundColor,[0,0,0,1]),scalePointsOnZoom:+!!t.scalePointsOnZoom,maxPointSize:n.maxPointSize,isDarkenGreyout:n.isDarkenGreyout??!1?1:0,hasImages:+(this.imageCount>0),imageCount:this.imageCount,imageAtlasCoordsTextureSize:this.imageAtlasCoordsTextureSize??0,transitionProgress:this.transitionProgress,animateColors:+!!this.shouldAnimatePointColors,animateSizes:+!!this.shouldAnimatePointSizes,animatePositions:+!!this.shouldAnimatePointPositions,pointDefaultColor:$(e.defaultRgba,[0,0,0,1]),pointDefaultSize:t.pointDefaultSize,pointsNumber:e.pointsNumber},fragment:{greyoutOpacity:t.pointGreyoutOpacity??-1,pointOpacity:t.pointOpacity,isDarkenGreyout:n.isDarkenGreyout??!1?1:0,backgroundColor:$(n.backgroundColor,[0,0,0,1]),outlineColor:$(n.outlinedPointRingColor,[1,1,1,1]),outlineWidth:.9,renderMode:0}}}getDrawTextureBindings(){return{positionsTexture:this.currentPositionTexture,pointStatus:this.pointStatusTexture,exitTexture:this.exitTexture,imageAtlasTexture:this.imageAtlasTexture,imageAtlasCoords:this.imageAtlasCoordsTexture}}getDrawCommandAttributes(){return{...this.drawPointIndices&&{pointIndices:this.drawPointIndices},...this.sourceSizeBuffer&&{sourceSize:this.sourceSizeBuffer},...this.targetSizeBuffer&&{targetSize:this.targetSizeBuffer},...this.sourceColorBuffer&&{sourceColor:this.sourceColorBuffer},...this.targetColorBuffer&&{targetColor:this.targetColorBuffer},...this.shapeBuffer&&{shape:this.shapeBuffer},...this.imageIndicesBuffer&&{imageIndex:this.imageIndicesBuffer},...this.imageSizesBuffer&&{imageSize:this.imageSizesBuffer}}}},ev=class{constructor(e){this.isDestroyed=!1,this.gatheredVersion=-1,this.cachedVersion=-1,this.cachedPointList=-1,this.issuedVersion=-1,this.issuedPointList=-1,this.isReadbackWanted=!1,this.indices=[...e]}get hasPendingReadback(){return this.readback?.inFlight??!1}positions(e){var t;let{host:n}=this;if(!n||!this.indices.length)return new Map;this.resolveReadback();let r=n.positionVersion,i=n.pointListVersion;return this.cached&&this.cachedVersion===r&&this.cachedPointList===i?this.cached:e!=null&&e.nonBlocking&&this.cached?(this.cachedPointList!==i&&this.dropGonePoints(),this.isReadbackWanted=!0,this.issuedVersion!==r&&!(n.requestTick?.call(n)??!1)&&this.requestReadback(),this.cached):!this.positionsFbo||this.positionsFbo.destroyed?new Map:(this.isReadbackWanted=!1,(t=this.readback)==null||t.cancel(),this.gather(),this.cached=this.buildMap(eg(n.device,this.positionsFbo)),this.cachedVersion=r,this.cachedPointList=i,this.issuedVersion=r,this.cached)}positionsArray(){let{host:e,indices:t}=this;if(!e||!t.length||!this.positionsFbo||this.positionsFbo.destroyed)return[];let n=Array(t.length*2);this.gather();let r=eg(e.device,this.positionsFbo);for(let i=0,a=t.length;i<a;i+=1){let a=t[i],o=!e.data.isPointIndex(a)||e.data.pointPositions!==void 0&&og(e.data.pointPositions,a);n[i*2]=o?NaN:r[i*4],n[i*2+1]=o?NaN:r[i*4+1]}return n}setIndices(e){var t;this.indices=[...e],this.cached=void 0,this.cachedVersion=-1,this.issuedVersion=-1,this.isReadbackWanted=!1,(t=this.readback)==null||t.destroy(),this.readback=void 0,this.allocate()}destroy(){if(this.isDestroyed)return;this.isDestroyed=!0;let{host:e}=this;this.release(),e?.removeTracker(this)}attach(e){return!this.isDestroyed&&(this.host=e,this.allocate(),!0)}release(){var e;(e=this.readback)==null||e.destroy(),this.readback=void 0,this.positionsFbo&&!this.positionsFbo.destroyed&&this.positionsFbo.destroy(),this.positionsFbo=void 0,this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.indicesTexture=void 0,this.cached=void 0,this.host=void 0}gather(){let{host:e}=this;!e||!this.indices.length||this.gatheredVersion!==e.positionVersion&&(!this.indicesTexture||this.indicesTexture.destroyed||!this.positionsFbo||this.positionsFbo.destroyed||e.gatherTrackedPositions(this.indicesTexture,this.positionsFbo)&&(this.gatheredVersion=e.positionVersion))}requestReadback(){let{host:e}=this;if(!e||!this.isReadbackWanted||!this.indices.length)return;let t=e.positionVersion;if(this.issuedVersion===t||!this.positionsFbo||this.positionsFbo.destroyed)return;let n=e.device.gl,r=this.positionsFbo.handle;if(!n||!r)return;this.gather();let{width:i,height:a}=this.positionsFbo;this.readback||=new jg(n,i*a*4),this.readback.issue(r,0,0,i,a)&&(this.issuedVersion=t,this.issuedPointList=e.pointListVersion,this.isReadbackWanted=!1)}resolveReadback(){var e;let{host:t}=this;if(!t||!((e=this.readback)!=null&&e.inFlight))return;if(this.issuedPointList!==t.pointListVersion){this.readback.cancel(),this.issuedVersion=-1,this.isReadbackWanted=!0;return}let n=this.readback.poll();n?(this.cached=this.buildMap(n),this.cachedVersion=this.issuedVersion,this.cachedPointList=this.issuedPointList):this.readback.inFlight||(this.issuedVersion=-1)}allocate(){let{host:e,indices:t}=this;if(!e||!t.length)return;let n=Math.ceil(Math.sqrt(t.length)),r=new Float32Array(n*n*4).fill(-1);for(let[e,n]of t.entries())r[e*4]=n;(!this.indicesTexture||this.indicesTexture.destroyed||this.indicesTexture.width!==n)&&(this.indicesTexture&&!this.indicesTexture.destroyed&&this.indicesTexture.destroy(),this.indicesTexture=e.device.createTexture({width:n,height:n,format:`rgba32float`})),this.indicesTexture.copyImageData({data:r,bytesPerRow:Z(`rgba32float`,n),mipLevel:0,x:0,y:0}),(!this.positionsFbo||this.positionsFbo.destroyed||this.positionsFbo.width!==n)&&(this.positionsFbo&&!this.positionsFbo.destroyed&&this.positionsFbo.destroy(),this.positionsFbo=e.device.createFramebuffer({width:n,height:n,colorAttachments:[`rgba32float`]})),this.gatheredVersion=-1,this.gather()}dropGonePoints(){let{host:e,cached:t}=this;if(!e||!t)return;let n=new Map;for(let[r,i]of t)e.data.isPointIndex(r)&&(e.data.pointPositions&&og(e.data.pointPositions,r)||n.set(r,i));this.cached=n,this.cachedPointList=e.pointListVersion}buildMap(e){let{host:t,indices:n}=this,r=new Map;if(!t)return r;for(let i=0,a=n.length;i<a;i+=1){let a=n[i],o=e[i*4],s=e[i*4+1];o===void 0||s===void 0||t.data.isPointIndex(a)&&(t.data.pointPositions&&og(t.data.pointPositions,a)||r.set(a,[o,s]))}return r}},tv=class{constructor(e,t,n){if(this.isReady=!1,this.isPointPositionsUpdateNeeded=!1,this.isPointSizeUpdateNeeded=!1,this.isForceManyBodyUpdateNeeded=!1,this.isForceLinkUpdateNeeded=!1,this.isForceCenterUpdateNeeded=!1,this.isPointClusterUpdateNeeded=!1,this.isForceCollisionReady=!1,this._isDestroyed=!1,n?this.config=n:(this.config=yg(),e&&xg(this.config,e)),this.store=new Xh,this.data=new dg(this.config),t)this.deviceInitPromise=t,this.shouldDestroyDevice=!1;else{let e=document.createElement(`canvas`);this.deviceInitPromise=this.createDevice(e),this.shouldDestroyDevice=!0}let r=this.deviceInitPromise.then(e=>{var t;return this._isDestroyed?(this.shouldDestroyDevice&&((t=e.canvasContext)==null||t.destroy(),e.destroy()),e):(this._device=e,this.store.adjustSpaceSize(this.config.spaceSize,e.limits.maxTextureDimension2D),this.store.setWebGLMaxTextureSize(e.limits.maxTextureDimension2D),this.store.maxPointSize=rg(e,this.config.pixelRatio),this.store.isSimulationRunning=this.config.enableSimulation,this.points=new $_(e,this.config,this.store,this.data),this.points.withHostState=e=>this.withExternalDeviceState(e),this.config.enableSimulation&&this.ensureSimulationModules(),this.clusters=new D_(e,this.config,this.store,this.data,this.points),this.config.randomSeed!==void 0&&this.store.addRandomSeed(this.config.randomSeed),this.isReady=!0,e)}).catch(e=>{throw this._device=void 0,this.isReady=!1,console.error(`Device initialization failed:`,e),e});this.ready=r.then(()=>{})}get device(){return this._device}get ownsDevice(){return this.shouldDestroyDevice}get progress(){return this._isDestroyed?0:this.store.simulationProgress}get isSimulationRunning(){return!this._isDestroyed&&this.store.isSimulationRunning}get hasPendingCentroidReadback(){return this.clusters?.hasPendingCentroidReadback??!1}setConfig(e){var t;if(this._isDestroyed||this.ensureDevice(()=>this.setConfig(e)))return;let n={...this.config};xg(this.config,e,!0),this.applyEnableSimulationConfigChange(n),n.pointDefaultSize!==this.config.pointDefaultSize&&(this.data.updatePointSize(),(t=this.points)==null||t.updateSize()),(n.simulationCollisionRadius!==this.config.simulationCollisionRadius||n.simulationCollisionPadding!==this.config.simulationCollisionPadding||(this.config.simulationCollisionRadius===void 0||this.config.simulationCollisionRadius===0)&&n.pointDefaultSize!==this.config.pointDefaultSize)&&(this.isForceCollisionReady=!1),n.spaceSize!==this.config.spaceSize&&(this.store.adjustSpaceSize(this.config.spaceSize,this._device?.limits.maxTextureDimension2D??4096),this.isForceCollisionReady=!1,this.update(this.store.isSimulationRunning?this.store.alpha:0))}setPointPositions(e,t){this._isDestroyed||this.ensureDevice(()=>this.setPointPositions(e,t))||(this.data.inputPointPositions=e,this.points&&(this.points.shouldSkipRescale=t),this.isPointPositionsUpdateNeeded=!0,this.isPointSizeUpdateNeeded=!0,this.isPointClusterUpdateNeeded=!0,this.isForceManyBodyUpdateNeeded=!0,this.isForceLinkUpdateNeeded=!0,this.isForceCenterUpdateNeeded=!0)}setPointSizes(e){this._isDestroyed||this.ensureDevice(()=>this.setPointSizes(e))||(this.data.inputPointSizes=e,this.isPointSizeUpdateNeeded=!0)}setLinks(e){this._isDestroyed||this.ensureDevice(()=>this.setLinks(e))||(this.data.inputLinks=e,this.isForceLinkUpdateNeeded=!0)}setLinkStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkStrength(e))||(this.data.inputLinkStrength=e,this.isForceLinkUpdateNeeded=!0)}setPointClusters(e){this._isDestroyed||this.ensureDevice(()=>this.setPointClusters(e))||(this.data.inputPointClusters=e,this.isPointClusterUpdateNeeded=!0)}setClusterPositions(e){this._isDestroyed||this.ensureDevice(()=>this.setClusterPositions(e))||(this.data.inputClusterPositions=e,this.isPointClusterUpdateNeeded=!0)}setPointClusterStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setPointClusterStrength(e))||(this.data.inputClusterStrength=e,this.isPointClusterUpdateNeeded=!0)}setPinnedPoints(e){var t;if(this._isDestroyed||this.ensureDevice(()=>this.setPinnedPoints(e)))return;let n=e?.filter(e=>Number.isInteger(e)&&e>=0),r=n&&n.length>0?[...new Set(n)]:void 0;this.data.inputPinnedPoints=r,(t=this.points)==null||t.updatePinnedStatus()}setPinnedPoint(e,t){var n;if(this._isDestroyed||this.ensureDevice(()=>this.setPinnedPoint(e,t))||!Number.isInteger(e)||e<0)return;let r=new Set(this.data.inputPinnedPoints);t?r.add(e):r.delete(e),this.data.inputPinnedPoints=r.size>0?[...r]:void 0,(n=this.points)==null||n.setPointPinnedStatus(e,t)}isPointPinned(e){return this._isDestroyed?!1:this.data.inputPinnedPoints?.includes(e)??!1}setPointPosition(e,t,n){this.setPointPositionsByIndices([e],[t,n])}setPointPositionsByIndices(e,t){if(this._isDestroyed||this.ensureDevice(()=>this.setPointPositionsByIndices(e,t)))return;if(e.length*2!==t.length){console.warn(`setPointPositionsByIndices: expected ${e.length*2} coordinates for ${e.length} indices, got ${t.length}. Call ignored.`);return}let n=this.points;n&&this.withExternalDeviceState(()=>{n.setPointPositionsByIndices(e,t),n.gatherTrackers()})}applyData(e){this._isDestroyed||this.ensureDevice(()=>this.applyData(e))||(this.data.update(),this.update(e))}start(e=1){var t,n;if(this._isDestroyed||this.ensureDevice(()=>this.start(e))||!this.config.enableSimulation||!this.data.pointsNumber)return;let r=this.store.isSimulationRunning;this.store.isSimulationRunning=!0,this.store.simulationProgress=0,this.store.alpha=e,r||(n=(t=this.config).onSimulationStart)==null||n.call(t)}stop(){var e,t;if(this._isDestroyed||this.ensureDevice(()=>this.stop()))return;let n=this.store.isSimulationRunning||this.store.alpha>0||this.store.simulationProgress>0;this.store.isSimulationRunning=!1,this.store.simulationProgress=0,this.store.alpha=0,n&&((t=(e=this.config).onSimulationEnd)==null||t.call(e))}pause(){var e,t;this._isDestroyed||this.ensureDevice(()=>this.pause())||this.store.isSimulationRunning&&(this.store.isSimulationRunning=!1,(t=(e=this.config).onSimulationPause)==null||t.call(e))}unpause(){var e,t;this._isDestroyed||this.ensureDevice(()=>this.unpause())||this.config.enableSimulation&&(this.store.isSimulationRunning||(this.store.isSimulationRunning=!0,(t=(e=this.config).onSimulationUnpause)==null||t.call(e)))}step(){this._isDestroyed||this.ensureDevice(()=>this.step())||this.config.enableSimulation&&this.store.pointsTextureSize&&(this.runSimulationStep(!0),this.store.alpha<Kh&&this.store.isSimulationRunning&&this.end())}getPointPositions(){return Array.from(this.getPointPositionsArray())}getPointPositionsArray(e){if(this._isDestroyed||!this._device||!this.points||this.data.pointsNumber===void 0||!this.points.currentPositionFbo)return new Float32Array;let t=eg(this._device,this.points.currentPositionFbo);return this.composePointPositions(t,e)}async getPointPositionsAsync(e){if(this._isDestroyed||!this._device||!this.points||this.data.pointsNumber===void 0)return new Float32Array;let t=await this.points.readPositionPixelsAsync();return!t||this._isDestroyed?new Float32Array:this.composePointPositions(t,e)}getPointPositionTexture(){if(this._isDestroyed||!this.points)return;let e=this.points.currentPositionTexture;if(e&&!e.destroyed&&this.store.pointsTextureSize)return{texture:e,pointCount:this.data.pointsNumber??0,textureSize:this.store.pointsTextureSize,version:this.points.positionVersion}}trackPoints(e){let t=new ev(e);if(this._isDestroyed)return t;let n=()=>this.points?.addTracker(t);return this.isReady?n():this.ensureDevice(n),t}getClusterPositions(e){if(this._isDestroyed||!this._device||!this.clusters||this.data.pointClusters===void 0||this.clusters.clusterCount===void 0)return[];let t=this.clusters;return this.withExternalDeviceState(()=>{var n;e!=null&&e.nonBlocking&&t.resolveCentroidReadback();let r=t.getCentroidPositions(e?.nonBlocking);return e!=null&&e.nonBlocking&&t.needsCentroidReadback&&!(((n=this.points)?.requestTick)?.call(n)??!1)&&t.requestCentroidReadback(),r})}collectReadbacks(){var e,t;(e=this.points)==null||e.resolveTrackedPositionsReadback(),(t=this.clusters)==null||t.resolveCentroidReadback()}issueReadbacks(){var e,t;(e=this.points)==null||e.requestTrackedPositionsReadback(),(t=this.clusters)==null||t.requestCentroidReadback()}destroy(){var e,t,n,r;this._isDestroyed||(this._isDestroyed=!0,this.isReady=!1,(e=this.points)==null||e.destroy(),(t=this.clusters)==null||t.destroy(),this.destroySimulationModules(),(n=this.forceMouse)==null||n.destroy(),this.forceMouse=void 0,this._device&&this.shouldDestroyDevice&&(this._device.beginRenderPass({clearColor:this.store.backgroundColor,clearDepth:1,clearStencil:0}).end(),this._device.submit(),(r=this._device.canvasContext)==null||r.destroy(),this._device.destroy()))}updateTextureSizes(){this.store.pointsTextureSize=Math.ceil(Math.sqrt(this.data.pointsNumber??0)),this.store.linksTextureSize=Math.ceil(Math.sqrt((this.data.linksNumber??0)*2))}applyDataUpdates(){var e,t,n,r,i;let a=this.isPointPositionsUpdateNeeded;return this.points?(this.isPointPositionsUpdateNeeded&&this.points.updatePositions(),this.isPointSizeUpdateNeeded&&this.points.updateSize(),this.isForceManyBodyUpdateNeeded&&((e=this.forceManyBody)==null||e.create()),(this.isForceManyBodyUpdateNeeded||this.isPointSizeUpdateNeeded)&&(this.isForceCollisionReady=!1),this.isForceLinkUpdateNeeded&&((t=this.forceLinkIncoming)==null||t.create(s_.INCOMING),(n=this.forceLinkOutgoing)==null||n.create(s_.OUTGOING)),this.isForceCenterUpdateNeeded&&((r=this.forceCenter)==null||r.create()),this.isPointClusterUpdateNeeded&&((i=this.clusters)==null||i.create()),this.isPointPositionsUpdateNeeded=!1,this.isPointSizeUpdateNeeded=!1,this.isForceManyBodyUpdateNeeded=!1,this.isForceLinkUpdateNeeded=!1,this.isForceCenterUpdateNeeded=!1,this.isPointClusterUpdateNeeded=!1,{positionsUpdated:a}):{positionsUpdated:!1}}initPrograms(){var e,t,n,r,i,a;this._isDestroyed||!this.points||!this.clusters||(this.points.initPrograms(),(e=this.forceGravity)==null||e.initPrograms(),(t=this.forceManyBody)==null||t.initPrograms(),(n=this.forceCenter)==null||n.initPrograms(),(r=this.forceLinkIncoming)==null||r.initPrograms(),(i=this.forceLinkOutgoing)==null||i.initPrograms(),(a=this.forceMouse)==null||a.initPrograms(),this.clusters.initPrograms())}runSimulationStep(e=!1,t){return this.config.enableSimulation?this.withExternalDeviceState(()=>this.runStepPasses(e,t)):!1}end(){var e,t;this.store.isSimulationRunning=!1,this.store.simulationProgress=1,(t=(e=this.config).onSimulationEnd)==null||t.call(e)}withExternalDeviceState(e){let t=this._device;if(this.shouldDestroyDevice||!t)return e();let n=t.gl,r=n?Hh.get(n):void 0,i=r?.stateStack.length??0;try{return t.withParametersWebGL({blend:!1,depthTest:!1,depthMask:!0,scissorTest:!1,stencilTest:!1,cull:!1,colorMask:[!0,!0,!0,!0],nocatch:!0},e)}finally{if(r)for(;r.stateStack.length>i;)r.pop()}}ensureSimulationModules(){!this._device||!this.points||(this.forceGravity||=new a_(this._device,this.config,this.store,this.data,this.points),this.forceCenter||=new Qg(this._device,this.config,this.store,this.data,this.points),this.forceManyBody||=new x_(this._device,this.config,this.store,this.data,this.points),this.forceLinkIncoming||=new c_(this._device,this.config,this.store,this.data,this.points),this.forceLinkOutgoing||=new c_(this._device,this.config,this.store,this.data,this.points),this.forceMouse||=new C_(this._device,this.config,this.store,this.data,this.points),this.forceCollision||=new r_(this._device,this.config,this.store,this.data,this.points))}destroySimulationModules(){var e,t,n,r,i,a,o,s;(e=this.forceGravity)==null||e.destroy(),this.forceGravity=void 0,(t=this.forceCenter)==null||t.destroy(),this.forceCenter=void 0,(n=this.forceManyBody)==null||n.destroy(),this.forceManyBody=void 0,(r=this.forceLinkIncoming)==null||r.destroy(),this.forceLinkIncoming=void 0,(i=this.forceLinkOutgoing)==null||i.destroy(),this.forceLinkOutgoing=void 0,(a=this.forceMouse)==null||a.destroy(),this.forceMouse=void 0,(o=this.forceCollision)==null||o.destroy(),this.forceCollision=void 0,this.isForceCollisionReady=!1,(s=this.points)==null||s.destroySimulationResources()}markForcesDirty(){this.isForceManyBodyUpdateNeeded=!0,this.isForceLinkUpdateNeeded=!0,this.isForceCenterUpdateNeeded=!0}invalidateCollisionResources(){this.isForceCollisionReady=!1}runStepPasses(e,t){var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,ee,S,C,te,w,T,ne,re,ie;let{config:{simulationGravity:ae,simulationCenter:oe,simulationCollision:se},store:{isSimulationRunning:ce}}=this;t!=null&&t.applyMouseRepulsion&&((n=this.points)==null||n.swapFbo(),(r=this.forceMouse)==null||r.run(),(i=this.points)==null||i.updatePosition());let le=e||ce&&!(t!=null&&t.blockedByInteraction);return le&&(ae&&((a=this.points)==null||a.swapFbo(),(o=this.forceGravity)==null||o.run(),(s=this.points)==null||s.updatePosition()),oe&&((c=this.points)==null||c.swapFbo(),(l=this.forceCenter)==null||l.run(),(u=this.points)==null||u.updatePosition()),(d=this.points)==null||d.swapFbo(),(f=this.forceManyBody)==null||f.run(),(p=this.points)==null||p.updatePosition(),this.store.linksTextureSize&&((m=this.points)==null||m.swapFbo(),(h=this.forceLinkIncoming)==null||h.run(),(g=this.points)==null||g.updatePosition(),(_=this.points)==null||_.swapFbo(),(v=this.forceLinkOutgoing)==null||v.run(),(y=this.points)==null||y.updatePosition()),(this.data.pointClusters||this.data.clusterPositions)&&((b=this.points)==null||b.swapFbo(),(x=this.clusters)==null||x.run(),(ee=this.points)==null||ee.updatePosition()),se&&(this.isForceCollisionReady||=((S=this.forceCollision)==null||S.create(),(C=this.forceCollision)==null||C.initPrograms(),!0),(te=this.points)==null||te.swapFbo(),(w=this.forceCollision)==null||w.run(),(T=this.points)==null||T.updatePosition()),this.store.alpha+=this.store.addAlpha(this.config.simulationDecay),t!=null&&t.applyMouseRepulsion&&(this.store.alpha=Math.max(this.store.alpha,.1)),this.store.simulationProgress=Math.sqrt(Math.min(1,Kh/this.store.alpha)),(re=(ne=this.config).onSimulationTick)==null||re.call(ne,this.store.alpha,this.store.hoveredPoint?.index,this.store.hoveredPoint?.position)),(ie=this.points)==null||ie.gatherTrackers(),le}applyEnableSimulationConfigChange(e){var t,n,r,i,a;if(e.enableSimulation===this.config.enableSimulation)return;if(this.config.enableSimulation){this.ensureSimulationModules(),(t=this.points)==null||t.ensureSimulationResources(),this.markForcesDirty(),this.applyDataUpdates(),this.initPrograms(),this.store.simulationProgress=0,this.store.alpha=1,this.store.isSimulationRunning=!0,(r=(n=this.config).onSimulationStart)==null||r.call(n);return}let o=this.store.isSimulationRunning||this.store.alpha>0||this.store.simulationProgress>0;this.store.isSimulationRunning=!1,this.store.alpha=0,this.store.simulationProgress=0,o&&((a=(i=this.config).onSimulationEnd)==null||a.call(i)),this.destroySimulationModules()}update(e=this.store.alpha){this.updateTextureSizes(),this.applyDataUpdates(),this.initPrograms(),this.store.alpha=e}ensureDevice(e){return!this.isReady&&(this.ready.then(()=>{this._isDestroyed||e()}).catch(e=>{console.error(`Device initialization failed`,e)}),!0)}async createDevice(e){return await Cu.createDevice({type:`webgl`,adapters:[Ch],webgl:{antialias:!1},createCanvasContext:{canvas:e,useDevicePixels:this.config.pixelRatio,autoResize:!0,width:void 0,height:void 0}})}composePointPositions(e,t){let n=this.data.pointsNumber??0,r=t&&t.length>=n*2?t:new Float32Array(n*2);for(let t=0;t<n;t+=1)this.data.pointPositions&&og(this.data.pointPositions,t)?(r[t*2]=NaN,r[t*2+1]=NaN):(r[t*2]=e[t*4+0],r[t*2+1]=e[t*4+1]);return r}},nv=500,rv=10,iv=class{constructor(e,t,n){this.config=yg(),this.isReady=!1,this.requestAnimationFrameId=0,this._shouldSyncScreenSize=!1,this.isRightClickMouse=!1,this._longPressStartX=0,this._longPressStartY=0,this._shouldSuppressNextClick=!1,this._instanceId=tg(),this._findHoveredItemExecutionCount=0,this._isPointerOnCanvas=!1,this._lastMouseX=0,this._lastMouseY=0,this._lastCheckedMouseX=0,this._lastCheckedMouseY=0,this._shouldForceHoverDetection=!1,this._lastPickingMatrix=[],this._isFirstRenderAfterInit=!0,this.isPointColorUpdateNeeded=!1,this.isPointShapeUpdateNeeded=!1,this.isPointImageIndicesUpdateNeeded=!1,this.isLinksUpdateNeeded=!1,this.isLinkColorUpdateNeeded=!1,this.isLinkWidthUpdateNeeded=!1,this.isLinkArrowUpdateNeeded=!1,this.isLinkStyleUpdateNeeded=!1,this.isPointImageSizesUpdateNeeded=!1,this._isDestroyed=!1,t&&xg(this.config,t),this._isHeadless=!e,this.simulation=new tv(void 0,n,this.config),this.store=this.simulation.store,this.graph=this.simulation.data,this.zoomInstance=new Kg(this.store,this.config),this.transition=new mg(this.config),this.dragInstance=new qg(this.store,this.config,this.transition);let r=this.simulation.ready.then(async()=>{let t=this.simulation.device;if(!this._isDestroyed&&t){if(this.device=t,!this._isHeadless){let r=this.validateDevice(t);n&&r.setProps({useDevicePixels:this.config.pixelRatio}),this.store.div=e;let i=r.canvas;if(i.parentNode!==this.store.div&&(i.parentNode&&i.parentNode.removeChild(i),this.store.div.appendChild(i)),this.addAttribution(),i.style.width=`100%`,i.style.height=`100%`,this.canvas=i,this.updateCanvasTouchAction(),await Promise.race([r.initialized,new Promise(e=>{setTimeout(e,500)})]),this._isDestroyed)return;typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(()=>{this._shouldSyncScreenSize=!0,this.requestRender()}),this.resizeObserver.observe(this.canvas))}this._isHeadless||this.initInteractions(),this.points=this.simulation.points,this.points&&(this.points.transition=this.transition),this.points&&(this.points.requestTick=()=>this._isHeadless||!this.config.enableRenderLoop?!1:(this.requestRender(),!0)),this.lines=new Gg(t,this.config,this.store,this.graph,this.points),this.store.backgroundColor=Qh(this.config.backgroundColor),this.store.setHoveredPointRingColor(this.config.hoveredPointRingColor),this.store.setFocusedPointRingColor(this.config.focusedPointRingColor),this.config.focusedPointIndex!==void 0&&this.store.setFocusedPoint(this.config.focusedPointIndex),this.store.setGreyoutPointColor(this.config.pointGreyoutColor),this.store.setOutlinedPointRingColor(this.config.outlinedPointRingColor),this.store.setHighlightedPointSet(this.config.highlightedPointIndices),this.store.setOutlinedPointSet(this.config.outlinedPointIndices),this.store.setHoveredLinkColor(this.config.hoveredLinkColor),this.store.updateLinkHoveringEnabled(this.config),!this._isHeadless&&this.config.showFPSMonitor&&(this.fpsMonitor=new Cg(this.canvas,this.store.div)),this.isReady=!0,this.setZoomLevel(this.config.initialZoomLevel??1)}}).catch(e=>{throw this.device=void 0,this.isReady=!1,console.error(`Device initialization failed:`,e),e});this.ready=r.then(()=>{})}get progress(){return this._isDestroyed?0:this.store.simulationProgress}get isSimulationRunning(){return!this._isDestroyed&&this.store.isSimulationRunning}get maxPointSize(){return this._isDestroyed?0:this.store.maxPointSize}setConfig(e){if(this._isDestroyed||this.ensureDevice(()=>this.setConfig(e)))return;let t={...this.config};bg(this.config),xg(this.config,e),this.preserveInitOnlyFields(t),this.updateStateFromConfig(t)}setConfigPartial(e){if(this._isDestroyed||this.ensureDevice(()=>this.setConfigPartial(e)))return;let t={...this.config};xg(this.config,e,!0),this.preserveInitOnlyFields(t),this.updateStateFromConfig(t)}setPointPositions(e,t){if(this._isDestroyed||this.ensureDevice(()=>this.setPointPositions(e,t)))return;this.simulation.setPointPositions(e,t);let n=this.points?.currentPositionTexture;n&&!n.destroyed&&this.transition.queue(Y.Positions),this.isLinksUpdateNeeded=!0,this.isPointColorUpdateNeeded=!0,this.isPointShapeUpdateNeeded=!0,this.isPointImageIndicesUpdateNeeded=!0,this.isPointImageSizesUpdateNeeded=!0}setPointColors(e){this._isDestroyed||this.ensureDevice(()=>this.setPointColors(e))||(this.graph.inputPointColors=e,this.isPointColorUpdateNeeded=!0,this.transition.queue(Y.PointColors))}getPointColors(){if(this._isDestroyed||this.graph.pointColors===void 0||this.graph.pointsNumber===void 0)return new Float32Array;let e=new Float32Array(this.graph.pointsNumber*4);for(let t=0;t<this.graph.pointsNumber;t++)for(let n=0;n<4;n++)e[t*4+n]=this.graph.getResolvedPointColorChannel(t,n);return e}setPointSizes(e){this._isDestroyed||this.ensureDevice(()=>this.setPointSizes(e))||(this.simulation.setPointSizes(e),this.isPointImageSizesUpdateNeeded=!0,this.transition.queue(Y.PointSizes))}setPointShapes(e){this._isDestroyed||this.ensureDevice(()=>this.setPointShapes(e))||(this.graph.inputPointShapes=e,this.isPointShapeUpdateNeeded=!0)}setImageData(e){if(this._isDestroyed||this.ensureDevice(()=>this.setImageData(e)))return;let t=this.graph.inputImageData;this.graph.inputImageData=e,this.points?.createAtlas()===!1&&(this.graph.inputImageData=t),this.requestRender()}setPointImageIndices(e){this._isDestroyed||this.ensureDevice(()=>this.setPointImageIndices(e))||(this.graph.inputPointImageIndices=e,this.isPointImageIndicesUpdateNeeded=!0)}setPointImageSizes(e){this._isDestroyed||this.ensureDevice(()=>this.setPointImageSizes(e))||(this.graph.inputPointImageSizes=e,this.isPointImageSizesUpdateNeeded=!0)}getPointSizes(){if(this._isDestroyed||this.graph.pointSizes===void 0||this.graph.pointsNumber===void 0)return new Float32Array;let e=new Float32Array(this.graph.pointsNumber);for(let t=0;t<this.graph.pointsNumber;t++)e[t]=this.graph.getResolvedPointSize(t);return e}setLinks(e){this._isDestroyed||this.ensureDevice(()=>this.setLinks(e))||(this.simulation.setLinks(e),this.isLinksUpdateNeeded=!0,this.isLinkColorUpdateNeeded=!0,this.isLinkWidthUpdateNeeded=!0,this.isLinkArrowUpdateNeeded=!0,this.isLinkStyleUpdateNeeded=!0)}setLinkColors(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkColors(e))||(this.graph.inputLinkColors=e,this.isLinkColorUpdateNeeded=!0,this.transition.queue(Y.LinkColors))}getLinkColors(){return this._isDestroyed?new Float32Array:this.graph.linkColors??new Float32Array}setLinkWidths(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkWidths(e))||(this.graph.inputLinkWidths=e,this.isLinkWidthUpdateNeeded=!0,this.transition.queue(Y.LinkWidths))}getLinkWidths(){return this._isDestroyed?new Float32Array:this.graph.linkWidths??new Float32Array}getLinkWidthByIndex(e){if(this._isDestroyed)return;let t=this.graph.linkWidths?.[e];if(t!==void 0)return this.lines&&this.transition.isActiveFor(Y.LinkWidths)?this.lines.getAnimatedWidth(e,this.transition.progress):t}setLinkArrows(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkArrows(e))||(this.graph.linkArrowsBoolean=e,this.isLinkArrowUpdateNeeded=!0)}setLinkStyles(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkStyles(e))||(this.graph.inputLinkStyles=e,this.isLinkStyleUpdateNeeded=!0)}getLinkStyles(){return this._isDestroyed?new Float32Array:this.graph.linkStyles??new Float32Array}setLinkStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setLinkStrength(e))||this.simulation.setLinkStrength(e)}setPointClusters(e){this._isDestroyed||this.ensureDevice(()=>this.setPointClusters(e))||this.simulation.setPointClusters(e)}setClusterPositions(e){this._isDestroyed||this.ensureDevice(()=>this.setClusterPositions(e))||this.simulation.setClusterPositions(e)}setPointClusterStrength(e){this._isDestroyed||this.ensureDevice(()=>this.setPointClusterStrength(e))||this.simulation.setPointClusterStrength(e)}setPinnedPoints(e){this._isDestroyed||this.ensureDevice(()=>this.setPinnedPoints(e))||(this.simulation.setPinnedPoints(e),this.requestRender())}setPinnedPoint(e,t){this._isDestroyed||this.ensureDevice(()=>this.setPinnedPoint(e,t))||(this.simulation.setPinnedPoint(e,t),this.requestRender())}isPointPinned(e){return!this._isDestroyed&&this.simulation.isPointPinned(e)}setPointPosition(e,t,n){this.setPointPositionsByIndices([e],[t,n])}setPointPositionsByIndices(e,t){this._isDestroyed||this.ensureDevice(()=>this.setPointPositionsByIndices(e,t))||(this.simulation.setPointPositionsByIndices(e,t),this.markPickingBuffersStale(),this.requestRender())}render(e,t){var n,r;if(this._isDestroyed||this.ensureDevice(()=>this.render(e,t)))return;this.graph.update();let{fitViewOnInit:i,fitViewDelay:a,fitViewPadding:o,fitViewDuration:s,fitViewByPointsInRect:c,fitViewByPointIndices:l,initialZoomLevel:u}=this.config;if(!this.graph.pointsNumber&&!this.graph.linksNumber){this.stopFrames(),this._isHeadless||(A(this.canvas).style(`cursor`,null),this.device&&(this.device.beginRenderPass({clearColor:this.store.backgroundColor,clearDepth:1,clearStencil:0}).end(),this.device.submit()));return}!this._isHeadless&&this._isFirstRenderAfterInit&&i&&u===void 0&&(this._fitViewOnInitTimeoutID=window.setTimeout(()=>{l?this.fitViewByPointIndices(l,s,o):c?this.setZoomTransformByPointPositions(new Float32Array(this.flatten(c)),s,void 0,o):this.fitView(s,o)},a)),this.transition.setDurationOverride(this._isHeadless?0:t),this.update(e),this.transition.isPendingFor(Y.Positions)&&this.store.isSimulationRunning&&this.transition.duration>0&&!this._isFirstRenderAfterInit&&(this.store.isSimulationRunning=!1,(r=(n=this.config).onSimulationPause)==null||r.call(n));let d=this.points?.currentPositionTexture;this.transition.isPending&&(!d||d.destroyed)&&this.transition.abort(),this.transition.start(),this._shouldForceHoverDetection=!0,this.requestRender(),this._isFirstRenderAfterInit=!1}zoomToPointByIndex(e,t=700,n=3,r=!0,i=!0){if(this._isDestroyed||this.ensureDevice(()=>this.zoomToPointByIndex(e,t,n,r,i))||!this.device||!this.points||!this.canvasD3Selection)return;let a=this.graph.pointPositions;if(!a||og(a,e))return;let{store:{screenSize:o}}=this,s=eg(this.device,this.points.currentPositionFbo);if(e===void 0)return;let c=s[e*4+0],l=s[e*4+1];if(c===void 0||l===void 0)return;let u=this.zoomInstance.getDistanceToPoint([c,l]),d=r?n:Math.max(this.getZoomLevel(),n);if(u<Math.min(o[0],o[1]))this.setZoomTransformByPointPositions(new Float32Array([c,l]),t,d,void 0,i);else{this.zoomInstance.shouldEnableSimulationDuringZoomOverride=i;let e=this.zoomInstance.getTransform([c,l],d),n=this.zoomInstance.getMiddlePointTransform([c,l]);this.canvasD3Selection.transition().ease(ui).duration(t/2).call(this.zoomInstance.behavior.transform,n).transition().ease(di).duration(t/2).call(this.zoomInstance.behavior.transform,e)}}zoom(e,t=0,n=!0){this._isDestroyed||this.setZoomLevel(e,t,n)}setZoomLevel(e,t=0,n=!0){this._isDestroyed||this.ensureDevice(()=>this.setZoomLevel(e,t,n))||this.canvasD3Selection&&(this.zoomInstance.shouldEnableSimulationDuringZoomOverride=n,t===0?this.canvasD3Selection.call(this.zoomInstance.behavior.scaleTo,e):this.canvasD3Selection.transition().duration(t).call(this.zoomInstance.behavior.scaleTo,e))}getZoomLevel(){return this._isDestroyed?0:this.zoomInstance.eventTransform.k}getPointPositions(){return this._isDestroyed?[]:this.simulation.getPointPositions()}getPointPositionsArray(e){return this._isDestroyed?new Float32Array:this.simulation.getPointPositionsArray(e)}async getPointPositionsAsync(e){return this._isDestroyed?new Float32Array:await this.simulation.getPointPositionsAsync(e)}getPointPositionTexture(){if(!this._isDestroyed)return this.simulation.getPointPositionTexture()}getClusterPositions(e){return this._isDestroyed?[]:this.simulation.getClusterPositions(e)}fitView(e=250,t=.1,n=!0){this._isDestroyed||this.ensureDevice(()=>this.fitView(e,t,n))||this.setZoomTransformByPointPositions(this.getFitViewPositions(),e,void 0,t,n)}fitViewByPointIndices(e,t=250,n=.1,r=!0){if(this._isDestroyed||this.ensureDevice(()=>this.fitViewByPointIndices(e,t,n,r)))return;let i=this.getFitViewPositions(),a=new Float32Array(e.length*2);for(let[t,n]of e.entries())a[t*2]=i[n*2],a[t*2+1]=i[n*2+1];this.setZoomTransformByPointPositions(a,t,void 0,n,r)}fitViewByPointPositions(e,t=250,n=.1,r=!0){this._isDestroyed||this.ensureDevice(()=>this.fitViewByPointPositions(e,t,n,r))||this.setZoomTransformByPointPositions(new Float32Array(e),t,void 0,n,r)}setZoomTransformByPointPositions(e,t=250,n,r=.1,i=!0){var a;if(this._isDestroyed||this.ensureDevice(()=>this.setZoomTransformByPointPositions(e,t,n,r,i)))return;this.zoomInstance.shouldEnableSimulationDuringZoomOverride=i,this.syncScreenSize();let o=this.zoomInstance.getTransform(e,n,r);(a=this.canvasD3Selection)==null||a.transition().ease(fi).duration(t).call(this.zoomInstance.behavior.transform,o)}findPointsInRect(e){if(this._isDestroyed||!this.isReady||!this.device||!this.points)return[];let t=this.store.screenSize[1];return this.store.searchArea=[[e[0][0],t-e[1][1]],[e[1][0],t-e[0][1]]],this.points.findPointsInRect()?ng(eg(this.device,this.points.searchFbo),this.graph.pointsNumber):[]}findPointsInPolygon(e){if(this._isDestroyed||!this.isReady||!this.device||!this.points)return[];if(e.length<3)return console.warn(`Polygon path requires at least 3 points to form a polygon.`),[];let t=this.store.screenSize[1],n=e.map(([e,n])=>[e,t-n]);return this.points.updatePolygonPath(n),this.points.findPointsInPolygon()?ng(eg(this.device,this.points.searchFbo),this.graph.pointsNumber):[]}getNeighboringPointIndices(e){return this._isDestroyed?[]:this.graph.getNeighboringPointIndices(e)}getConnectedLinkIndices(e){return this._isDestroyed?[]:this.graph.getConnectedLinkIndices(e)}getConnectedPointIndices(e){return this._isDestroyed?[]:this.graph.getConnectedPointIndices(e)}spaceToScreenPosition(e){return this._isDestroyed?[0,0]:this.zoomInstance.convertSpaceToScreenPosition(e)}screenToSpacePosition(e){return this._isDestroyed?[0,0]:this.zoomInstance.convertScreenToSpacePosition(e)}spaceToScreenRadius(e){return this._isDestroyed?0:this.zoomInstance.convertSpaceToScreenRadius(e)}getPointRadiusByIndex(e){if(this._isDestroyed||this.graph.pointSizes===void 0&&this.graph.pointImageSizes===void 0||!this.graph.isPointIndex(e))return;let t=this.points&&this.transition.isActiveFor(Y.PointSizes)?this.points.getAnimatedSize(e,this.transition.progress):void 0;return this.graph.getResolvedPointFootprint(e,t)}trackPointPositionsByIndices(e){if(this._isDestroyed)return;let t=e??[];this.tracker?this.tracker.setIndices(t):this.tracker=this.simulation.trackPoints(t)}getTrackedPointPositionsMap(e){return this._isDestroyed||!this.tracker?new Map:this.tracker.positions(e)}getTrackedPointPositionsArray(){return this._isDestroyed||!this.tracker?[]:this.tracker.positionsArray()}getSampledPointPositionsMap(){return this._isDestroyed||!this.points?new Map:this.points.getSampledPointPositionsMap()}getSampledPoints(){return this._isDestroyed||!this.points?{indices:[],positions:[]}:this.points.getSampledPoints()}getSampledLinkPositionsMap(){return this._isDestroyed||!this.lines?new Map:this.lines.getSampledLinkPositionsMap()}getSampledLinks(){return this._isDestroyed||!this.lines?{indices:[],positions:[],angles:[]}:this.lines.getSampledLinks()}getScaleX(){if(!this._isDestroyed&&this.points)return this.points.scaleX}getScaleY(){if(!this._isDestroyed&&this.points)return this.points.scaleY}start(e=1){this._isDestroyed||this.ensureDevice(()=>this.start(e))||this.config.enableSimulation&&this.graph.pointsNumber&&(this.transition.isActiveFor(Y.Positions)&&this.transition.end(!0),this.simulation.start(e),this.requestRender())}stop(){this._isDestroyed||this.simulation.stop()}pause(){this._isDestroyed||this.ensureDevice(()=>this.pause())||this.simulation.pause()}unpause(){this._isDestroyed||this.ensureDevice(()=>this.unpause())||this.config.enableSimulation&&(this.store.isSimulationRunning||(this.transition.isActiveFor(Y.Positions)&&this.transition.end(!0),this.simulation.unpause(),this.requestRender()))}step(){this._isDestroyed||this.ensureDevice(()=>this.step())||this.config.enableSimulation&&this.store.pointsTextureSize&&(this.runSimulationStep(!0),(this._isHeadless||!this.config.enableRenderLoop)&&this.store.alpha<Kh&&this.store.isSimulationRunning&&this.end(),this.requestRender())}setViewTransform(e,t){this._isDestroyed||this.ensureDevice(()=>this.setViewTransform(e,t))||(t&&this.store.updateScreenSize(t[0],t[1]),this.zoomInstance.applyEventTransform(qi.translate(e.x,e.y).scale(e.k)),this.markPickingBuffersStale(),this.requestRender())}drawToRenderPass(e,t){var n,r,i,a;if(this._isDestroyed||!this.device||!this.store.pointsTextureSize)return;let o=(t?.links??!0)&&this.config.renderLinks!==!1&&!!this.store.linksTextureSize&&!!this.graph.linksNumber&&this.graph.linksNumber>0;if(t!=null&&t.picking){let{alpha:i,linkIndexOffset:a=0}=t.picking;o&&((n=this.lines)==null||n.drawPicking(e,i,a)),(t.points??!0)&&((r=this.points)==null||r.drawPicking(e,i))}else o&&((i=this.lines)==null||i.draw(e)),(t?.points??!0)&&((a=this.points)==null||a.draw(e))}setHostHoveredPoint(e){this._isDestroyed||(this.store.hostHoveredPointIndex=e,this.requestRender())}setHostHoveredLink(e){this._isDestroyed||(this.store.hostHoveredLinkIndex=e,this.requestRender())}renderOneFrame(){this._isDestroyed||this.ensureDevice(()=>this.renderOneFrame())||this._isHeadless||!this.store.pointsTextureSize||!this.graph.pointsNumber&&!this.graph.linksNumber||(this.store.alpha<Kh&&this.store.isSimulationRunning&&this.end(),this.renderFrame())}destroy(){var e,t,n,r,i;this._isDestroyed||(this._isDestroyed=!0,this.isReady=!1,this.transition.abort(),window.clearTimeout(this._fitViewOnInitTimeoutID),this.cancelLongPress(),this.stopFrames(),(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=void 0,this.canvasD3Selection&&this.canvasD3Selection.on(`.cosmos`,null).on(`.drag`,null).on(`.zoom`,null),A(document).on(`.cosmos-${this._instanceId}`,null),(t=this.zoomInstance)!=null&&t.behavior&&this.zoomInstance.behavior.on(`start.detect`,null).on(`zoom.detect`,null).on(`end.detect`,null),(n=this.dragInstance)!=null&&n.behavior&&this.dragInstance.behavior.on(`start.detect`,null).on(`drag.detect`,null).on(`end.detect`,null),(r=this.fpsMonitor)==null||r.destroy(),(i=this.lines)==null||i.destroy(),this.simulation.destroy(),this.simulation.ownsDevice&&this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.attributionDivElement&&this.attributionDivElement.parentNode&&this.attributionDivElement.parentNode.removeChild(this.attributionDivElement),this.canvasD3Selection=void 0,this.attributionDivElement=void 0)}create(){if(this._isDestroyed||this.ensureDevice(()=>this.create())||!this.points||!this.lines)return;let{positionsUpdated:e}=this.simulation.applyDataUpdates();e&&(this.lines.isLinkIndexBufferStale=!0),this.isPointColorUpdateNeeded&&this.points.updateColor(),this.isPointShapeUpdateNeeded&&this.points.updateShape(),this.isPointImageIndicesUpdateNeeded&&this.points.updateImageIndices(),this.isPointImageSizesUpdateNeeded&&this.points.updateImageSizes(),this.isLinksUpdateNeeded&&this.lines.updatePointsBuffer(),this.isLinkColorUpdateNeeded&&this.lines.updateColor(),this.isLinkWidthUpdateNeeded&&this.lines.updateWidth(),this.isLinkArrowUpdateNeeded&&this.lines.updateArrow(),this.isLinkStyleUpdateNeeded&&this.lines.updateStyle(),this.isPointColorUpdateNeeded=!1,this.isPointShapeUpdateNeeded=!1,this.isPointImageIndicesUpdateNeeded=!1,this.isPointImageSizesUpdateNeeded=!1,this.isLinksUpdateNeeded=!1,this.isLinkColorUpdateNeeded=!1,this.isLinkWidthUpdateNeeded=!1,this.isLinkArrowUpdateNeeded=!1,this.isLinkStyleUpdateNeeded=!1,this.requestRender()}flatten(e){return e.flat()}pair(e){let t=Math.floor(e.length/2),n=Array(t);for(let r=0;r<t;r++)n[r]=[e[r*2],e[r*2+1]];return n}preserveInitOnlyFields(e){this.config.initialZoomLevel=e.initialZoomLevel,this.config.randomSeed=e.randomSeed,this.config.attribution=e.attribution}getFitViewPositions(){return this.transition.isActive&&this.transition.isActiveFor(Y.Positions)&&this.graph.pointPositions&&this.graph.pointPositions?new Float32Array(this.graph.pointPositions):new Float32Array(this.getPointPositions())}updateStateFromConfig(e){var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_;this.applyEnableSimulationConfigChange(e),e.pointDefaultColor!==this.config.pointDefaultColor&&(this.graph.updatePointColor(),(t=this.points)==null||t.updateColor()),e.pointDefaultSize!==this.config.pointDefaultSize&&(this.graph.updatePointSize(),(n=this.points)==null||n.updateSize(),this.graph.updatePointImageSizes(),(r=this.points)==null||r.updateImageSizes()),e.pointDefaultShape!==this.config.pointDefaultShape&&(this.graph.updatePointShape(),(i=this.points)==null||i.updateShape()),e.linkDefaultColor!==this.config.linkDefaultColor&&(this.graph.updateLinkColor(),(a=this.lines)==null||a.updateColor()),e.linkDefaultWidth!==this.config.linkDefaultWidth&&(this.graph.updateLinkWidth(),(o=this.lines)==null||o.updateWidth()),e.linkDefaultArrows!==this.config.linkDefaultArrows&&(this.graph.updateArrows(),(s=this.lines)==null||s.updateArrow()),e.linkDefaultStyle!==this.config.linkDefaultStyle&&(this.graph.updateLinkStyles(),(c=this.lines)==null||c.updateStyle()),e.linkColorInterpolateFromEndpoints!==this.config.linkColorInterpolateFromEndpoints&&((l=this.points)==null||l.updateColor()),e.linkBlending!==this.config.linkBlending&&((u=this.lines)==null||u.updateLinkBlending()),e.curvedLinkSegments===this.config.curvedLinkSegments&&e.curvedLinks===this.config.curvedLinks||(d=this.lines)==null||d.updateCurveLineGeometry(),e.backgroundColor!==this.config.backgroundColor&&(this.store.backgroundColor=Qh(this.config.backgroundColor)),e.hoveredPointRingColor!==this.config.hoveredPointRingColor&&this.store.setHoveredPointRingColor(this.config.hoveredPointRingColor),e.focusedPointRingColor!==this.config.focusedPointRingColor&&this.store.setFocusedPointRingColor(this.config.focusedPointRingColor),e.pointGreyoutColor!==this.config.pointGreyoutColor&&this.store.setGreyoutPointColor(this.config.pointGreyoutColor),e.hoveredLinkColor!==this.config.hoveredLinkColor&&this.store.setHoveredLinkColor(this.config.hoveredLinkColor),e.focusedPointIndex!==this.config.focusedPointIndex&&this.store.setFocusedPoint(this.config.focusedPointIndex),e.outlinedPointRingColor!==this.config.outlinedPointRingColor&&this.store.setOutlinedPointRingColor(this.config.outlinedPointRingColor),e.highlightedPointIndices!==this.config.highlightedPointIndices&&this.store.setHighlightedPointSet(this.config.highlightedPointIndices),e.outlinedPointIndices!==this.config.outlinedPointIndices&&this.store.setOutlinedPointSet(this.config.outlinedPointIndices),e.highlightedPointIndices===this.config.highlightedPointIndices&&e.outlinedPointIndices===this.config.outlinedPointIndices||(f=this.points)==null||f.updatePointStatus(),e.highlightedLinkIndices!==this.config.highlightedLinkIndices&&((p=this.lines)==null||p.updateLinkStatus()),(e.simulationCollisionRadius!==this.config.simulationCollisionRadius||e.simulationCollisionPadding!==this.config.simulationCollisionPadding||(this.config.simulationCollisionRadius===void 0||this.config.simulationCollisionRadius===0)&&e.pointDefaultSize!==this.config.pointDefaultSize)&&this.simulation.invalidateCollisionResources(),e.pixelRatio!==this.config.pixelRatio&&(m=this.device)!=null&&m.canvasContext&&(this.device.canvasContext.setProps({useDevicePixels:this.config.pixelRatio}),this.store.maxPointSize=rg(this.device,this.config.pixelRatio)),e.spaceSize!==this.config.spaceSize&&(this.store.adjustSpaceSize(this.config.spaceSize,this.device?.limits.maxTextureDimension2D??4096),this.simulation.invalidateCollisionResources(),this.syncScreenSize(!0),this.update(this.store.isSimulationRunning?this.store.alpha:0)),e.showFPSMonitor!==this.config.showFPSMonitor&&!this._isHeadless&&(this.config.showFPSMonitor?this.fpsMonitor=new Cg(this.canvas,this.store.div):((h=this.fpsMonitor)==null||h.destroy(),this.fpsMonitor=void 0)),e.enableRenderLoop!==this.config.enableRenderLoop&&!this.config.enableRenderLoop&&this.stopFrames(),(e.enableZoom!==this.config.enableZoom||e.enableDrag!==this.config.enableDrag)&&this.updateZoomDragBehaviors(),e.pointSamplingDistance!==this.config.pointSamplingDistance&&((g=this.points)==null||g.updateSampledPointsGrid()),e.linkSamplingDistance!==this.config.linkSamplingDistance&&((_=this.lines)==null||_.updateSampledLinksGrid()),(e.onLinkClick!==this.config.onLinkClick||e.onLinkContextMenu!==this.config.onLinkContextMenu||e.onLinkMouseOver!==this.config.onLinkMouseOver||e.onLinkMouseOut!==this.config.onLinkMouseOut)&&this.store.updateLinkHoveringEnabled(this.config),this.markPickingBuffersStale(),this.requestRender()}applyEnableSimulationConfigChange(e){var t,n,r,i,a;if(e.enableSimulation===this.config.enableSimulation)return;if(this.config.enableSimulation){this.transition.end(!0),this.transition.dequeue(Y.Positions),this.simulation.ensureSimulationModules(),(t=this.points)==null||t.ensureSimulationResources(),this.simulation.markForcesDirty(),this.create(),this.initPrograms(),this.store.simulationProgress=0,this.store.alpha=1,this.store.isSimulationRunning=!0,this._shouldForceHoverDetection=!0,(r=(n=this.config).onSimulationStart)==null||r.call(n);return}let o=this.store.isSimulationRunning||this.store.alpha>0||this.store.simulationProgress>0;this.store.isSimulationRunning=!1,this.store.alpha=0,this.store.simulationProgress=0,this._shouldForceHoverDetection=!0,o&&((a=(i=this.config).onSimulationEnd)==null||a.call(i)),this.simulation.destroySimulationModules()}ensureDevice(e){return!this.isReady&&(this.ready.then(()=>{this._isDestroyed||e()}).catch(e=>{console.error(`Device initialization failed`,e)}),!0)}initInteractions(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.store.updateScreenSize(e,t),this.canvasD3Selection=A(this.canvas).call(this.dragInstance.behavior).call(this.zoomInstance.behavior).on(`pointerenter.cosmos`,e=>{e.isPrimary&&(this._isPointerOnCanvas=!0,this._lastMouseX=e.clientX,this._lastMouseY=e.clientY,this.requestRender())}).on(`pointermove.cosmos`,e=>{var t,n;if(e.isPrimary){if(this._isPointerOnCanvas=!0,this._lastMouseX=e.clientX,this._lastMouseY=e.clientY,this.currentEvent=e,this.updateMousePosition(e),this.isRightClickMouse=!!(e.buttons&2),this._longPressTimerId!==void 0){let t=Math.abs(e.clientX-this._longPressStartX),n=Math.abs(e.clientY-this._longPressStartY);(t>rv||n>rv)&&this.cancelLongPress()}(n=(t=this.config).onMouseMove)==null||n.call(t,this.store.hoveredPoint?.index,this.store.hoveredPoint?.position,this.currentEvent),this.requestRender()}}).on(`pointerleave.cosmos pointercancel.cosmos`,e=>{e.isPrimary&&(this.cancelLongPress(),this._isPointerOnCanvas=!1,e.pointerType===`mouse`&&(this.currentEvent=e,this.store.hoveredPoint!==void 0&&this.config.onPointMouseOut&&this.config.onPointMouseOut(e),this.store.hoveredLinkIndex!==void 0&&this.config.onLinkMouseOut&&this.config.onLinkMouseOut(e),this.isRightClickMouse=!1,this.store.hoveredPoint=void 0,this.store.hoveredLinkIndex=void 0,this.lines&&(this.lines.isLinkIndexBufferStale=!0),this.updateCanvasCursor(),this.requestRender()))}).on(`pointerdown.cosmos`,e=>{e.isPrimary&&(this.currentEvent=e,this._shouldSuppressNextClick=!1,this._lastMouseX=e.clientX,this._lastMouseY=e.clientY,this.updateMousePosition(e),this.findHoveredItem(!0),this.requestRender(),e.pointerType!==`mouse`&&(this._longPressStartX=e.clientX,this._longPressStartY=e.clientY,this.cancelLongPress(),this._longPressTimerId=window.setTimeout(()=>{this._longPressTimerId=void 0,!this._isDestroyed&&(this.findHoveredItem(!0),this.requestRender(),this._shouldSuppressNextClick=!0,this.fireContextMenu(e))},nv)))}).on(`pointerup.cosmos`,e=>{e.isPrimary&&(this.cancelLongPress(),this.isRightClickMouse=!!(e.buttons&2))}).on(`click.cosmos`,this.onClick.bind(this)).on(`contextmenu.cosmos`,this.onContextMenu.bind(this)),A(document).on(`keydown.cosmos-${this._instanceId}`,e=>{e.code===`Space`&&(this.store.isSpaceKeyPressed=!0)}).on(`keyup.cosmos-${this._instanceId}`,e=>{e.code===`Space`&&(this.store.isSpaceKeyPressed=!1)}),this.zoomInstance.behavior.on(`start.detect`,e=>{this.currentEvent=e,this.requestRender()}).on(`zoom.detect`,e=>{e.sourceEvent&&this.updateMousePosition(e.sourceEvent),this.currentEvent=e,this.requestRender()}).on(`end.detect`,e=>{this.currentEvent=e,this._shouldForceHoverDetection=!0,this.requestRender()}),this.dragInstance.behavior.on(`start.detect`,e=>{this.currentEvent=e,this.updateCanvasCursor(),this.requestRender()}).on(`drag.detect`,e=>{this.dragInstance.isActive&&this.updateMousePosition(e),this.currentEvent=e,this.requestRender()}).on(`end.detect`,e=>{this.currentEvent=e,this.updateCanvasCursor(),this.requestRender()}),this.config.enableZoom&&this.config.enableDrag||this.updateZoomDragBehaviors()}validateDevice(e){let t=e.canvasContext;if(t===null||t.type===`offscreen-canvas`)throw Error(`Device must have an HTMLCanvasElement canvas context. OffscreenCanvas and compute-only devices are not supported.`);return t}update(e=this.store.alpha){this.simulation.updateTextureSizes(),this.create(),this.initPrograms(),this.store.alpha=e}runSimulationStep(e=!1){if(!this.config.enableSimulation)return;let t=this.isRightClickMouse&&this.config.enableRightClickRepulsion,n=this.zoomInstance.shouldEnableSimulationDuringZoomOverride??this.config.enableSimulationDuringZoom,r=this.zoomInstance.isRunning&&!n;(this.simulation.runSimulationStep(e,{applyMouseRepulsion:t,blockedByInteraction:r})||t)&&this.markPickingBuffersStale()}initPrograms(){this._isDestroyed||!this.points||!this.lines||(this.simulation.initPrograms(),this.lines.initPrograms())}frame(){this._isDestroyed||this._isHeadless||!this.config.enableRenderLoop||this.requestAnimationFrameId||!this.store.pointsTextureSize||!this.graph.pointsNumber&&!this.graph.linksNumber||(this.requestAnimationFrameId=window.requestAnimationFrame(e=>{this.requestAnimationFrameId=0;let{store:{alpha:t,isSimulationRunning:n}}=this;t<Kh&&n&&this.end(),this.renderFrame(e),!this._isDestroyed&&this.shouldKeepRendering()&&this.frame()}))}requestRender(){this._isDestroyed||this.frame()}shouldKeepRendering(){var e,t,n;return!this.resizeObserver||this.fpsMonitor||this.store.isSimulationRunning||this.transition.isActive||this.dragInstance.isActive||this.zoomInstance.isRunning||this.isRightClickMouse&&this.config.enableRightClickRepulsion||(e=this.points)!=null&&e.hasPendingPickReadback||(t=this.lines)!=null&&t.hasPendingPickReadback||(n=this.points)!=null&&n.hasPendingTrackedReadback||this.simulation.hasPendingCentroidReadback?!0:this.hasPendingHoverWork()}hasPendingHoverWork(){if(!this._isPointerOnCanvas)return!1;if(this._shouldForceHoverDetection)return!0;let e=Math.abs(this._lastMouseX-this._lastCheckedMouseX),t=Math.abs(this._lastMouseY-this._lastCheckedMouseY);return e>Yh||t>Yh}renderFrame(e){this._isDestroyed||this.store.pointsTextureSize&&this.simulation.withExternalDeviceState(()=>this.drawFrame(e))}drawFrame(e){var t,n,r,i,a,o,s,c,l;let u=e??performance.now();(t=this.fpsMonitor)==null||t.begin(),(this._shouldSyncScreenSize||!this.resizeObserver)&&(this._shouldSyncScreenSize=!1,this.syncScreenSize()),this.simulation.collectReadbacks();let d=this.transition.isActiveFor(Y.Positions),f=this.transition.isActiveFor(Y.PointColors),p=this.transition.isActiveFor(Y.PointSizes),m=this.transition.isActiveFor(Y.LinkColors),h=this.transition.isActiveFor(Y.LinkWidths);if(this.transition.isActive&&(this.transition.step(),d&&((n=this.points)==null||n.interpolatePosition(this.transition.progress),(r=this.points)==null||r.gatherTrackers(),this.markPickingBuffersStale())),(i=this.points)==null||i.setTransitionProgress(this.transition.progress,f,p,d),(a=this.lines)==null||a.setTransitionProgress(this.transition.progress,m,h,d),this.dragInstance.isActive||(this.resolvePendingPick(),this.findHoveredItem()),this.runSimulationStep(!1),this.device){let e=this.store.backgroundColor??[0,0,0,1],t=this.device.beginRenderPass({clearColor:e,clearDepth:1,clearStencil:0});this.drawToRenderPass(t),this.dragInstance.isActive&&((o=this.points)==null||o.swapFbo(),(s=this.points)==null||s.drag(),(c=this.points)==null||c.gatherTrackers(),this.markPickingBuffersStale()),t.end(),this.device.submit()}this.simulation.issueReadbacks(),(l=this.fpsMonitor)==null||l.end(u),this.currentEvent=void 0}stopFrames(){this.requestAnimationFrameId&&=(window.cancelAnimationFrame(this.requestAnimationFrameId),0)}end(){this.simulation.end(),this._shouldForceHoverDetection=!0}onClick(e){var t,n,r,i,a,o,s,c;this._shouldSuppressNextClick?this._shouldSuppressNextClick=!1:((n=(t=this.config).onClick)==null||n.call(t,this.store.hoveredPoint?.index,this.store.hoveredPoint?.position,e),this.store.hoveredPoint?(i=(r=this.config).onPointClick)==null||i.call(r,this.store.hoveredPoint.index,this.store.hoveredPoint.position,e):this.store.hoveredLinkIndex===void 0?(c=(s=this.config).onBackgroundClick)==null||c.call(s,e):(o=(a=this.config).onLinkClick)==null||o.call(a,this.store.hoveredLinkIndex,e))}updateMousePosition(e){if(!e)return;let t=e.offsetX??e.x,n=e.offsetY??e.y;t===void 0||n===void 0||(this.store.mousePosition=this.zoomInstance.convertScreenToSpacePosition([t,n]),this.store.screenMousePosition=[t,this.store.screenSize[1]-n])}onContextMenu(e){e.preventDefault(),this.cancelLongPress(),this._shouldSuppressNextClick=!0,this.fireContextMenu(e)}cancelLongPress(){this._longPressTimerId!==void 0&&(window.clearTimeout(this._longPressTimerId),this._longPressTimerId=void 0)}fireContextMenu(e){var t,n,r,i,a,o,s,c;(n=(t=this.config).onContextMenu)==null||n.call(t,this.store.hoveredPoint?.index,this.store.hoveredPoint?.position,e),this.store.hoveredPoint?(i=(r=this.config).onPointContextMenu)==null||i.call(r,this.store.hoveredPoint.index,this.store.hoveredPoint.position,e):this.store.hoveredLinkIndex===void 0?(c=(s=this.config).onBackgroundContextMenu)==null||c.call(s,e):(o=(a=this.config).onLinkContextMenu)==null||o.call(a,this.store.hoveredLinkIndex,e)}syncScreenSize(e=!1){var t,n,r,i;if(this._isHeadless||!this.canvas||this._isDestroyed)return;let a=this.canvas.clientWidth,o=this.canvas.clientHeight,[s,c]=this.store.screenSize;if(e||s!==a||c!==o){let{k:e}=this.zoomInstance.eventTransform,l=this.zoomInstance.convertScreenToSpacePosition([s/2,c/2]);this.store.updateScreenSize(a,o),(t=this.canvasD3Selection)==null||t.call(this.zoomInstance.behavior.transform,this.zoomInstance.getTransform(l,e)),(n=this.points)==null||n.updateSampledPointsGrid(),(r=this.lines)==null||r.updateSampledLinksGrid(),this.store.isLinkHoveringEnabled&&((i=this.lines)==null||i.updateLinkIndexFbo()),this.markPickingBuffersStale()}}updateZoomDragBehaviors(){var e,t,n,r;this._isHeadless||(this.config.enableDrag?(e=this.canvasD3Selection)==null||e.call(this.dragInstance.behavior):(t=this.canvasD3Selection)==null||t.call(this.dragInstance.behavior).on(`.drag`,null),this.config.enableZoom?(n=this.canvasD3Selection)==null||n.call(this.zoomInstance.behavior):(r=this.canvasD3Selection)==null||r.call(this.zoomInstance.behavior).on(`wheel.zoom`,null),this.updateCanvasTouchAction())}updateCanvasTouchAction(){this.canvas.style.touchAction=this.config.enableDrag||this.config.enableZoom?`none`:``}findHoveredItem(e=!1){var t,n;if(this._isDestroyed||!e&&!this._isPointerOnCanvas||this.transition.isActiveFor(Y.PointSizes))return;if(!e&&this._findHoveredItemExecutionCount<Jh){this._findHoveredItemExecutionCount+=1;return}let r=Math.abs(this._lastMouseX-this._lastCheckedMouseX),i=Math.abs(this._lastMouseY-this._lastCheckedMouseY);if(!e&&!(r>Yh||i>Yh)&&!this._shouldForceHoverDetection)return;this.updatePickingBufferStaleness();let a=!!this.graph.linksNumber&&this.store.isLinkHoveringEnabled;if(e){(t=this.points)==null||t.discardPendingPick(),(n=this.lines)==null||n.discardPendingPick();let e=this.points?.pickPointSync()??null,r;!e&&a&&(r=this.lines?.pickLinkSync()??null),this.processHoverResult(e,r)}else{let e=!this.points||this.points.requestPickPoint(),t=a&&this.lines?this.lines.requestPickLink():!0;if(!e||!t)return}this._findHoveredItemExecutionCount=0,this._lastCheckedMouseX=this._lastMouseX,this._lastCheckedMouseY=this._lastMouseY,this._shouldForceHoverDetection=!1}updatePickingBufferStaleness(){let e=this.store.transformationMatrix4x4;Fg(this._lastPickingMatrix,e)||(this._lastPickingMatrix=Array.from(e),this.markPickingBuffersStale())}markPickingBuffersStale(){this.points&&(this.points.isPickingBufferStale=!0),this.lines&&(this.lines.isLinkIndexBufferStale=!0)}resolvePendingPick(){let e=this.points?.takePickResult(),t=this.lines?.takePickLinkResult();e===void 0&&t===void 0||this._isPointerOnCanvas&&this.processHoverResult(e,t)}processHoverResult(e,t){var n,r,i,a,o,s,c,l;if(this._isDestroyed)return;let u=e===void 0?{mouseover:!1,mouseout:!1}:this.applyPickedPoint(e),d={mouseover:!1,mouseout:!1};if(this.graph.linksNumber&&this.store.isLinkHoveringEnabled?this.store.hoveredPoint?d=this.applyPickedLink(null):t!==void 0&&(d=this.applyPickedLink(t)):this.store.hoveredLinkIndex!==void 0&&(d=this.applyPickedLink(null)),u.mouseout&&((r=(n=this.config).onPointMouseOut)==null||r.call(n,this.currentEvent)),d.mouseout&&((a=(i=this.config).onLinkMouseOut)==null||a.call(i,this.currentEvent)),u.mouseover&&this.store.hoveredPoint){let e=this.store.hoveredPoint.index;(s=(o=this.config).onPointMouseOver)==null||s.call(o,this.store.hoveredPoint.index,this.store.hoveredPoint.position,this.currentEvent,this.store.highlightedPointSet?.has(e)??!1,this.store.outlinedPointSet?.has(e)??!1)}d.mouseover&&this.store.hoveredLinkIndex!==void 0&&((l=(c=this.config).onLinkMouseOver)==null||l.call(c,this.store.hoveredLinkIndex)),this.updateCanvasCursor()}applyPickedPoint(e){let t=!1,n=!1;return e&&e.index>=(this.graph.pointsNumber??0)&&(e=null),e?((this.store.hoveredPoint===void 0||this.store.hoveredPoint.index!==e.index)&&(t=!0),this.store.hoveredPoint=e):(this.store.hoveredPoint&&(n=!0),this.store.hoveredPoint=void 0),{mouseover:t,mouseout:n}}applyPickedLink(e){let t=!1,n=!1;return e!==null&&e>=(this.graph.linksNumber??0)&&(e=null),e===null?(this.store.hoveredLinkIndex!==void 0&&(n=!0),this.store.hoveredLinkIndex=void 0):(this.store.hoveredLinkIndex!==e&&(t=!0),this.store.hoveredLinkIndex=e),(t||n)&&this.lines&&(this.lines.isLinkIndexBufferStale=!0),{mouseover:t,mouseout:n}}updateCanvasCursor(){let{hoveredPointCursor:e,hoveredLinkCursor:t}=this.config;this.dragInstance.isActive?A(this.canvas).style(`cursor`,`grabbing`):this.store.hoveredPoint?!this.config.enableDrag||this.store.isSpaceKeyPressed?A(this.canvas).style(`cursor`,e):A(this.canvas).style(`cursor`,`grab`):this.store.isLinkHoveringEnabled&&this.store.hoveredLinkIndex!==void 0?A(this.canvas).style(`cursor`,t):A(this.canvas).style(`cursor`,null)}addAttribution(){var e;this.config.attribution&&(this.attributionDivElement=document.createElement(`div`),this.attributionDivElement.style.cssText=`
      user-select: none;
      position: absolute;
      bottom: 0;
      right: 0;
      color: var(--cosmosgl-attribution-color);
      margin: 0 0.6rem 0.6rem 0;
      font-size: 0.7rem;
      font-family: inherit;
    `,this.attributionDivElement.innerHTML=sg(this.config.attribution,{ALLOWED_TAGS:[`a`,`b`,`i`,`em`,`strong`,`span`,`div`,`p`,`br`,`img`],ALLOWED_ATTR:[`href`,`target`,`class`,`id`,`style`,`src`,`alt`,`title`]}),(e=this.store.div)==null||e.appendChild(this.attributionDivElement))}};export{zc as A,Al as C,z as D,dl as E,iv as Graph,Vc as O,tu as S,B as T,W as _,mh as a,gu as b,Md as c,Yu as d,qu as f,ju as g,Ru as h,Ih as i,Bc as k,gd as l,Vu as m,Lh as n,uh as o,Ku as p,Rh as r,ih as s,Hh as t,cd as u,ku as v,V as w,uu as x,_u as y};