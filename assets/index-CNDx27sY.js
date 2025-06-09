import{ao as D,l as J,b as O,m as P,d as k,e as Y,c as z,n as q,ap as I,g as G,w as K}from"./HomePage-BcILTkZo.js";import{h as Q,d as V,r as H,t as U,f as W,w as F,j as m,v as p}from"./index-C4qaC0vC.js";/**
 * tdesign v1.5.0
 * (c) 2024 TDesign Group
 * @license MIT
 */function Z(v){return v===null}var M=Z;/**
 * tdesign v1.5.0
 * (c) 2024 TDesign Group
 * @license MIT
 */var $={allowInputOverMax:Boolean,autofocus:Boolean,autosize:Boolean,bordered:Boolean,disabled:{type:Boolean,default:void 0},indicator:Boolean,label:{type:[String,Function]},layout:{type:String,default:"horizontal",validator:function(e){return e?["vertical","horizontal"].includes(e):!0}},maxcharacter:{type:Number},maxlength:{type:Number},name:{type:String,default:""},placeholder:{type:String,default:void 0},readonly:Boolean,value:{type:[String,Number],default:void 0},modelValue:{type:[String,Number],default:void 0},defaultValue:{type:[String,Number]},onBlur:Function,onChange:Function,onFocus:Function};/**
 * tdesign v1.5.0
 * (c) 2024 TDesign Group
 * @license MIT
 */var ee=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,i;function B(v){var e,g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;i||(i=document.createElement("textarea"),document.body.appendChild(i));var s=D(v),r=s.paddingSize,b=s.borderSize,y=s.boxSizing,c=s.sizingStyle;i.setAttribute("style","".concat(c,";").concat(ee)),i.value=v.value||v.placeholder||"";var l=i.scrollHeight,f={},S=y==="border-box",_=y==="content-box";S?l+=b:_&&(l-=r),i.value="";var w=i.scrollHeight-r;(e=i)===null||e===void 0||(e=e.parentNode)===null||e===void 0||e.removeChild(i),i=null;var h=function(T){var d=w*T;return S&&(d=d+r+b),d};if(!M(g)){var o=h(g);l=Math.max(o,l),f.minHeight="".concat(o,"px")}return M(x)||(l=Math.min(h(x),l)),f.height="".concat(l,"px"),f}/**
 * tdesign v1.5.0
 * (c) 2024 TDesign Group
 * @license MIT
 */var ae=Y.prefix,ne=Q({name:"".concat(ae,"-textarea"),props:$,setup:function(e,g){var x=G(),s=J(),r=O("textarea"),b=V(function(){return["".concat(r.value),z(z({},"".concat(r.value,"--layout-").concat(e.layout),e.layout),"".concat(r.value,"--border"),e.bordered)]}),y=V(function(){return["".concat(r.value,"__wrapper-inner"),z(z({},"".concat(r.value,"--disabled"),s.value),"".concat(r.value,"--readonly"),e.readonly)]}),c=H(),l=H(),f=U(e),S=f.value,_=f.modelValue,w=P(S,_,e.defaultValue,e.onChange),h=k(w,2),o=h[0],C=h[1],T=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=c.value,u=String(a);n&&n.value!==u&&(n.value=u)},d=function(){if(e.autosize===!0)l.value=B(c.value);else if(e.autosize===!1)l.value=B(c.value,1,1);else if(q(e.autosize)==="object"){var a=e.autosize,n=a.minRows,u=a.maxRows;l.value=B(c.value,n,u)}else g.attrs.rows&&(l.value={height:"auto",minHeight:"auto"})},R=function(a){a instanceof InputEvent&&(a.isComposing||a.inputType==="insertCompositionText")||N()},N=function(){var a=c.value;if(!e.allowInputOverMax&&e.maxcharacter&&e.maxcharacter>0&&!Number.isNaN(e.maxcharacter)){var n=I(a.value,e.maxcharacter),u=n.characters,X=u===void 0?"":u;C(X)}else C(a.value);p(function(){return T(o.value)}),d()},j=V(function(){var t=o.value?String(o.value):"";return e.maxcharacter?I(t):t.length}),A=function(a){N()},L=function(a){var n;(n=e.onFocus)===null||n===void 0||n.call(e,o.value,{e:a})},E=function(a){var n;(n=e.onBlur)===null||n===void 0||n.call(e,o.value,{e:a})};return W(function(){if(e.autofocus){var t;(t=c.value)===null||t===void 0||t.focus()}N(),d()}),F(o,function(){p(function(){d()})}),F(function(){return e.autosize},function(){d()}),function(){var t=function(){var u=x("label");return u?m("div",{class:"".concat(r.value,"__label")},[u]):null},a=function(){var u=e.indicator&&(e.maxcharacter||e.maxlength);return u?m("div",{class:"".concat(r.value,"__indicator")},["".concat(j.value,"/").concat(e.maxcharacter||e.maxlength)]):null};return m("div",{class:b.value},[t(),m("div",{class:"".concat(r.value,"__wrapper")},[m("textarea",{ref:c,value:o.value,class:y.value,style:l.value,name:e.name,maxlength:e.maxlength,disabled:s.value,placeholder:e.placeholder,readonly:e.readonly,onFocus:L,onBlur:E,onInput:R,onCompositionend:A},null),a()])])}}});/**
 * tdesign v1.5.0
 * (c) 2024 TDesign Group
 * @license MIT
 */var le=K(ne);export{le as T};
