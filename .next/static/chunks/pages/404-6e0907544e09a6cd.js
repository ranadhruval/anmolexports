(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2197],{20640:(e,t,r)=>{"use strict";var o=r(11742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,c,a,i,l,s,u,p,f=!1;t||(t={}),a=t.debug||!1;try{if(l=o(),s=document.createRange(),u=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=n[t.format]||n.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(p),s.selectNodeContents(p),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(o){a&&console.error("unable to copy using execCommand: ",o),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(o){a&&console.error("unable to copy using clipboardData: ",o),a&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",c=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",i=r.replace(/#{\s*key\s*}/g,c),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),p&&document.body.removeChild(p),l()}return f}},58671:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(70411)}])},70411:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var o=r(85893);r(67294);var n=r(25675),c=r.n(n),a=r(41664),i=r.n(a),l=r(38055),s=r(34509),u=r(8642),p=r(4976);let f={src:"/_next/static/media/error.929b4fa8.png",height:317,width:249,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAUVBMVEVMaXGGNf3QqIvusXPvtnbfm3D5zXHv1sCVP//m1InXnGni3df/zYmXP//coZ/Mlv9kBf+XSP9oG/t7KP92Jf8wAP/0sXT/yoLknFzGbf+sXf/IggLnAAAAFnRSTlMAL3OLzVtCCqss6i2hbGj5i95JvJ0VdCVpPwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAA2SURBVHicBcEBAoAQEADBJdwpURHy/4c2A0+91cC1yqfwNj0NxOwDsPXuBPwcCcTuLoAcUeAHNn4BtBoG13gAAAAASUVORK5CYII=",blurWidth:6,blurHeight:8},d=()=>(0,o.jsxs)(p.Z,{children:[(0,o.jsx)(l.Z,{pageTitle:"404"}),(0,o.jsx)(s.Z,{style_2:!0}),(0,o.jsx)("section",{className:"tp-error-area pt-110 pb-110",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row justify-content-center",children:(0,o.jsx)("div",{className:"col-xl-6 col-lg-8 col-md-10",children:(0,o.jsxs)("div",{className:"tp-error-content text-center",children:[(0,o.jsx)("div",{className:"tp-error-thumb",children:(0,o.jsx)(c(),{src:f,alt:"error img"})}),(0,o.jsx)("h3",{className:"tp-error-title",children:"Oops! Page not found"}),(0,o.jsx)("p",{children:"Whoops, this is embarrassing. Looks like the page you were looking for was not found."}),(0,o.jsx)(i(),{href:"/",className:"tp-error-btn",children:"Back to Home"})]})})})})}),(0,o.jsx)(u.Z,{primary_style:!0})]})},9008:(e,t,r)=>{e.exports=r(23867)},74300:(e,t,r)=>{"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=i(r(67294)),c=i(r(20640)),a=["text","onCopy","options","children"];function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(l,e);var t,r,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=f(l);return e=t?Reflect.construct(r,arguments,f(this).constructor):r.apply(this,arguments),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function l(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return d(p(e=i.call.apply(i,[this].concat(r))),"onClick",function(t){var r=e.props,o=r.text,a=r.onCopy,i=r.children,l=r.options,s=n.default.Children.only(i),u=(0,c.default)(o,l);a&&a(o,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(t)}),e}return r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,a),o=n.default.Children.only(t);return n.default.cloneElement(o,s(s({},r),{},{onClick:this.onClick}))}}],function(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(l.prototype,r),Object.defineProperty(l,"prototype",{writable:!1}),l}(n.default.PureComponent);t.CopyToClipboard=y,d(y,"defaultProps",{onCopy:void 0,options:void 0})},74855:(e,t,r)=>{"use strict";var o=r(74300).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},e=>{var t=t=>e(e.s=t);e.O(0,[6911,5735,8554,8642,4509,2888,9774,179],()=>t(58671)),_N_E=e.O()}]);