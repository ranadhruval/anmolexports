(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4737],{20640:(e,t,r)=>{"use strict";var n=r(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,c,a,s,i,l,p,u,d=!1;t||(t={}),a=t.debug||!1;try{if(i=n(),l=document.createRange(),p=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=o[t.format]||o.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(u),l.selectNodeContents(u),p.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(n){a&&console.error("unable to copy using execCommand: ",n),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(n){a&&console.error("unable to copy using clipboardData: ",n),a&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",c=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",s=r.replace(/#{\s*key\s*}/g,c),window.prompt(s,e)}}finally{p&&("function"==typeof p.removeRange?p.removeRange(l):p.removeAllRanges()),u&&document.body.removeChild(u),i()}return d}},23089:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/wishlist",function(){return r(25613)}])},69758:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(85893);r(67294);let o=e=>{let{title:t,subtitle:r,center:o=!1,bg_clr:c=!1}=e;return(0,n.jsx)("section",{className:"breadcrumb__area ".concat(o?"text-center":""," include-bg pt-95 pb-50"),style:{backgroundColor:c&&"#EFF1F5"},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xxl-12",children:(0,n.jsxs)("div",{className:"breadcrumb__content p-relative z-index-1",children:[(0,n.jsx)("h3",{className:"breadcrumb__title",children:t}),(0,n.jsxs)("div",{className:"breadcrumb__list",children:[(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"#",children:"Home"})}),(0,n.jsx)("span",{children:r})]})]})})})})})}},25613:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j});var n=r(85893);r(67294);var o=r(38055),c=r(34509),a=r(8642),s=r(4976),i=r(41664),l=r.n(i),p=r(41248),u=r(25675),d=r.n(u),f=r(45587),h=r(69634),y=r(27935);let m=e=>{let{product:t}=e,{_id:r,img:o,title:c,price:a}=t||{},{cart_products:s}=(0,p.v9)(e=>e.cart),i=s.find(e=>e._id===r),u=(0,p.I0)(),m=e=>{u((0,h.YR)(e))},b=e=>{u((0,h.nL)(e))},x=e=>{u((0,y.Hm)(e))};return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"tp-cart-img",children:(0,n.jsx)(l(),{href:"/product-details/".concat(r),children:(0,n.jsx)(d(),{src:o,alt:"product img",width:70,height:100})})}),(0,n.jsx)("td",{className:"tp-cart-title",children:(0,n.jsx)(l(),{href:"/product-details/".concat(r),children:c})}),(0,n.jsx)("td",{className:"tp-cart-price",children:(0,n.jsxs)("span",{children:["$",a.toFixed(2)]})}),(0,n.jsx)("td",{className:"tp-cart-quantity",children:(0,n.jsxs)("div",{className:"tp-product-quantity mt-10 mb-10",children:[(0,n.jsx)("span",{onClick:()=>b(t),className:"tp-cart-minus",children:(0,n.jsx)(f.WF,{})}),(0,n.jsx)("input",{className:"tp-cart-input",type:"text",value:i?null==i?void 0:i.orderQuantity:0,readOnly:!0}),(0,n.jsx)("span",{onClick:()=>m(t),className:"tp-cart-plus",children:(0,n.jsx)(f.v3,{})})]})}),(0,n.jsx)("td",{className:"tp-cart-add-to-cart",children:(0,n.jsx)("button",{onClick:()=>m(t),type:"button",className:"tp-btn tp-btn-2 tp-btn-blue",children:"Add To Cart"})}),(0,n.jsx)("td",{className:"tp-cart-action",children:(0,n.jsxs)("button",{onClick:()=>x({title:c,id:r}),className:"tp-cart-action-btn",children:[(0,n.jsx)(f.x8,{}),(0,n.jsx)("span",{children:" Remove"})]})})]})},b=()=>{let{wishlist:e}=(0,p.v9)(e=>e.wishlist);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:"tp-cart-area pb-120",children:(0,n.jsxs)("div",{className:"container",children:[0===e.length&&(0,n.jsxs)("div",{className:"text-center pt-50",children:[(0,n.jsx)("h3",{children:"No Wishlist Items Found"}),(0,n.jsx)(l(),{href:"/shop",className:"tp-cart-checkout-btn mt-20",children:"Continue Shipping"})]}),e.length>0&&(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-xl-12",children:[(0,n.jsx)("div",{className:"tp-cart-list mb-45 mr-30",children:(0,n.jsxs)("table",{className:"table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{colSpan:"2",className:"tp-cart-header-product",children:"Product"}),(0,n.jsx)("th",{className:"tp-cart-header-price",children:"Price"}),(0,n.jsx)("th",{className:"tp-cart-header-quantity",children:"Quantity"}),(0,n.jsx)("th",{children:"Action"}),(0,n.jsx)("th",{})]})}),(0,n.jsx)("tbody",{children:e.map((e,t)=>(0,n.jsx)(m,{product:e},t))})]})}),(0,n.jsx)("div",{className:"tp-cart-bottom",children:(0,n.jsx)("div",{className:"row align-items-end",children:(0,n.jsx)("div",{className:"col-xl-6 col-md-4",children:(0,n.jsx)("div",{className:"tp-cart-update",children:(0,n.jsx)(l(),{href:"/cart",className:"tp-cart-update-btn",children:"Go To Cart"})})})})})]})})]})})})};var x=r(69758);let j=()=>(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(o.Z,{pageTitle:"Wishlist"}),(0,n.jsx)(c.Z,{style_2:!0}),(0,n.jsx)(x.Z,{title:"Wishlist",subtitle:"Wishlist"}),(0,n.jsx)(b,{}),(0,n.jsx)(a.Z,{primary_style:!0})]})},9008:(e,t,r)=>{e.exports=r(23867)},74300:(e,t,r)=>{"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=s(r(67294)),c=s(r(20640)),a=["text","onCopy","options","children"];function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(i,e);var t,r,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=d(i);return e=t?Reflect.construct(r,arguments,d(this).constructor):r.apply(this,arguments),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return u(e)}(this,e)});function i(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return f(u(e=s.call.apply(s,[this].concat(r))),"onClick",function(t){var r=e.props,n=r.text,a=r.onCopy,s=r.children,i=r.options,l=o.default.Children.only(s),p=(0,c.default)(n,i);a&&a(n,p),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t)}),e}return r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),n=o.default.Children.only(t);return o.default.cloneElement(n,l(l({},r),{},{onClick:this.onClick}))}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(i.prototype,r),Object.defineProperty(i,"prototype",{writable:!1}),i}(o.default.PureComponent);t.CopyToClipboard=h,f(h,"defaultProps",{onCopy:void 0,options:void 0})},74855:(e,t,r)=>{"use strict";var n=r(74300).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},e=>{var t=t=>e(e.s=t);e.O(0,[6911,5735,8554,8642,4509,2888,9774,179],()=>t(23089)),_N_E=e.O()}]);