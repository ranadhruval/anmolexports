(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{20640:(e,a,t)=>{"use strict";var r=t(11742),s={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,a){var t,i,n,l,o,c,d,p,u=!1;a||(a={}),n=a.debug||!1;try{if(o=r(),c=document.createRange(),d=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(t){if(t.stopPropagation(),a.format){if(t.preventDefault(),void 0===t.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=s[a.format]||s.default;window.clipboardData.setData(r,e)}else t.clipboardData.clearData(),t.clipboardData.setData(a.format,e)}a.onCopy&&(t.preventDefault(),a.onCopy(t.clipboardData))}),document.body.appendChild(p),c.selectNodeContents(p),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");u=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(a.format||"text",e),a.onCopy&&a.onCopy(window.clipboardData),u=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),t="message"in a?a.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=t.replace(/#{\s*key\s*}/g,i),window.prompt(l,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),p&&document.body.removeChild(p),o()}return u}},9134:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t(68332)}])},68332:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>F});var r=t(85893),s=t(67294),i=t(31955),n=t(11163),l=t(38055),o=t(4976),c=t(34509),d=t(8642);function p(e){let{active:a=!1,id:t,title:s,icon:i}=e;return(0,r.jsxs)("button",{className:"nav-link ".concat(a?"active":""),id:"nav-".concat(t,"-tab"),"data-bs-toggle":"tab","data-bs-target":"#nav-".concat(t),type:"button",role:"tab","aria-controls":t,"aria-selected":a?"true":"false",children:[(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:i})}),s]})}let u=()=>(0,r.jsx)("nav",{children:(0,r.jsxs)("div",{className:"nav nav-tabs tp-tab-menu flex-column",id:"profile-tab",role:"tablist",children:[(0,r.jsx)(p,{active:!0,id:"profile",title:"Profile",icon:"fa-regular fa-user-pen"}),(0,r.jsx)(p,{id:"information",title:"Information",icon:"fa-regular fa-circle-info"}),(0,r.jsx)(p,{id:"order",title:"My Orders",icon:"fa-light fa-clipboard-list-check"}),(0,r.jsx)(p,{id:"password",title:"Change Password",icon:"fa-regular fa-lock"})]})});var m=t(25675),h=t.n(m);let f={src:"/_next/static/media/laptop.a1df1e73.png",height:44,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJ1BMVEVMaXHYcVTcfGHgj3badFbYcVLMZjPedVXXc1bcdFbad1rid1fofl+koolaAAAAC3RSTlMA5fx2sPwF0WE7/mGhnikAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAmSURBVHicY+Bm5WZhAAFuJiZWTgY2BgZ2HiYesBAHIyMjIzMzMwAKBAB9vr9m3AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},A={src:"/_next/static/media/man.6aacd9de.png",height:236,width:230,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEXXbFk4P1U2Ok25kG//voD/xshJSmDg1NT739v9w4719fi1j3Ctim7318P8xJDVm2lVWm7/1KBWX3OZb4ZNTWNmW23syMPKnXjHkKI+R13/rKj/0JvHmnNmW2/ny7VIAAAAG3RSTlMB6zaL/TD9ChLNT8CKo99ctHmlN3niYu5T25q1izq7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nBWJRw7AIAzADAUSujd0/f+bVXyxJQPEG6Nu++FVwLv0XWcEWV2a1d5S3smsY3gGC8kht2LVdw3wA0x3AfRuEe1xAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},x={src:"/_next/static/media/shape-1.f9829898.png",height:56,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEVMaXH///8cKEf/9/b///r/////0sr/+Pjsf23/iXb7h3T/ycHVdGj/yL0Lh/rfAAAADXRSTlMAZBODGSC4eQ65U9e0iV3/kAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACZJREFUeJxjYGDg4mBiYgABTh4wzcLIzcvGyMjCwMrIzszMzMgKAAfAAHO/1qPDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},v={src:"/_next/static/media/shape-2.5054bb58.png",height:213,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAABlBMVEVmkKBr2f/e3d6HAAAAAnRSTlMCbXemsl8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAANSURBVHicY2AgCjACAAApAAL8DFy2AAAAAElFTkSuQmCC",blurWidth:4,blurHeight:8},b={src:"/_next/static/media/shape-3.1c36acc5.png",height:35,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAJFBMVEXMzdG4zNrv7/H19fXk5Obe3uH////n5+mw1exLntFNotW90eBMQ0b2AAAAAnRSTlPX/uLvQfsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVHicNctJDoBAEMPA4CQ9LP//LwJpbj6UJZIEac3g836UP65DLUCrYjD9jD2ztK8XHVoA5fjzCYwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},j={src:"/_next/static/media/shape-4.569d6e39.png",height:47,width:66,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAADFBMVEUAABxMaXEAABsBAhwVi0KIAAAABHRSTlMYAAkky/9GcgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACVJREFUeJwdyrERAAAMgkDQ/XfOmYovIEBRiFJFTX18hx1hW4EcBeoANxfBt40AAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},g=()=>(0,r.jsxs)("div",{className:"profile__shape",children:[(0,r.jsx)(h(),{className:"profile__shape-1",src:f,alt:"laptop-img"}),(0,r.jsx)(h(),{className:"profile__shape-2",src:A,alt:"man-img"}),(0,r.jsx)(h(),{className:"profile__shape-3",src:x,alt:"shape"}),(0,r.jsx)(h(),{className:"profile__shape-4",src:v,alt:"shape"}),(0,r.jsx)(h(),{className:"profile__shape-5",src:b,alt:"shape"}),(0,r.jsx)(h(),{className:"profile__shape-6",src:j,alt:"shape"})]});var y=t(41248),w=t(45587),_=t(97);let N=e=>{let{orderData:a}=e,{user:t}=(0,y.v9)(e=>e.auth),s=(0,y.I0)(),i=(0,n.useRouter)();return(0,r.jsxs)("div",{className:"profile__main",children:[(0,r.jsx)("div",{className:"profile__main-top pb-80",children:(0,r.jsxs)("div",{className:"row align-items-center",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)("div",{className:"profile__main-inner d-flex flex-wrap align-items-center",children:(0,r.jsx)("div",{className:"profile__main-content",children:(0,r.jsxs)("h4",{className:"profile__main-title",children:["Welcome Mr. ",null==t?void 0:t.name]})})})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)("div",{className:"profile__main-logout text-sm-end",children:(0,r.jsx)("a",{onClick:()=>{s((0,_._e)()),i.push("/")},className:"cursor-pointer tp-logout-btn",children:"Logout"})})})]})}),(0,r.jsx)("div",{className:"profile__main-info",children:(0,r.jsxs)("div",{className:"row gx-3",children:[(0,r.jsx)("div",{className:"col-md-3 col-sm-6",children:(0,r.jsxs)("div",{className:"profile__main-info-item",children:[(0,r.jsx)("div",{className:"profile__main-info-icon",children:(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"profile-icon-count profile-download",children:null==a?void 0:a.totalDoc}),(0,r.jsx)(w.xu,{})]})}),(0,r.jsx)("h4",{className:"profile__main-info-title",children:"Total Order"})]})}),(0,r.jsx)("div",{className:"col-md-3 col-sm-6",children:(0,r.jsxs)("div",{className:"profile__main-info-item",children:[(0,r.jsx)("div",{className:"profile__main-info-icon",children:(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"profile-icon-count profile-order",children:null==a?void 0:a.pending}),(0,r.jsx)(w.qb,{})]})}),(0,r.jsx)("h4",{className:"profile__main-info-title",children:"Pending Order"})]})}),(0,r.jsx)("div",{className:"col-md-3 col-sm-6",children:(0,r.jsxs)("div",{className:"profile__main-info-item",children:[(0,r.jsx)("div",{className:"profile__main-info-icon",children:(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"profile-icon-count profile-wishlist",children:null==a?void 0:a.processing}),(0,r.jsx)(w._D,{})]})}),(0,r.jsx)("h4",{className:"profile__main-info-title",children:"Processing Order"})]})}),(0,r.jsx)("div",{className:"col-md-3 col-sm-6",children:(0,r.jsxs)("div",{className:"profile__main-info-item",children:[(0,r.jsx)("div",{className:"profile__main-info-icon",children:(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"profile-icon-count profile-wishlist",children:null==a?void 0:a.delivered}),(0,r.jsx)(w.Zp,{})]})}),(0,r.jsx)("h4",{className:"profile__main-info-title",children:"Complete Order"})]})})]})})]})};var P=t(47533),C=t(87536),O=t(16310),E=t(48813),S=t(99057),k=t(35445);let D=O.Ry().shape({name:O.Z_().required().label("Name"),email:O.Z_().required().email().label("Email"),phone:O.Z_().required().min(11).label("Phone"),address:O.Z_().required().label("Address"),bio:O.Z_().required().min(20).label("Bio")}),T=()=>{var e,a,t,s,i;let{user:n}=(0,y.v9)(e=>e.auth),[l,{}]=(0,S.TG)(),{register:o,handleSubmit:c,formState:{errors:d},reset:p}=(0,C.cI)({resolver:(0,P.X)(D)});return(0,r.jsxs)("div",{className:"profile__info",children:[(0,r.jsx)("h3",{className:"profile__info-title",children:"Personal Details"}),(0,r.jsx)("div",{className:"profile__info-content",children:(0,r.jsx)("form",{onSubmit:c(e=>{l({id:null==n?void 0:n._id,name:e.name,email:e.email,phone:e.phone,address:e.address,bio:e.bio}).then(e=>{var a,t,r;(null==e?void 0:e.error)?(0,k.cB)(null==e?void 0:null===(t=e.error)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message):(0,k.t5)(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.message)}),p()}),children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,r.jsx)("div",{className:"profile__input-box",children:(0,r.jsxs)("div",{className:"profile__input",children:[(0,r.jsx)("input",{...o("name",{required:"Name is required!"}),name:"name",type:"text",placeholder:"Enter your username",defaultValue:null==n?void 0:n.name}),(0,r.jsx)("span",{children:(0,r.jsx)(w.M4,{})}),(0,r.jsx)(E.Z,{msg:null===(e=d.name)||void 0===e?void 0:e.message})]})})}),(0,r.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,r.jsx)("div",{className:"profile__input-box",children:(0,r.jsxs)("div",{className:"profile__input",children:[(0,r.jsx)("input",{...o("email",{required:"Email is required!"}),name:"email",type:"email",placeholder:"Enter your email",defaultValue:null==n?void 0:n.email}),(0,r.jsx)("span",{children:(0,r.jsx)(w.gB,{})}),(0,r.jsx)(E.Z,{msg:null===(a=d.email)||void 0===a?void 0:a.message})]})})}),(0,r.jsx)("div",{className:"col-xxl-12",children:(0,r.jsx)("div",{className:"profile__input-box",children:(0,r.jsxs)("div",{className:"profile__input",children:[(0,r.jsx)("input",{...o("phone",{required:!0}),name:"phone",type:"text",placeholder:"Enter your number",defaultValue:"0123 456 7889"}),(0,r.jsx)("span",{children:(0,r.jsx)(w.zK,{})}),(0,r.jsx)(E.Z,{msg:null===(t=d.phone)||void 0===t?void 0:t.message})]})})}),(0,r.jsx)("div",{className:"col-xxl-12",children:(0,r.jsx)("div",{className:"profile__input-box",children:(0,r.jsxs)("div",{className:"profile__input",children:[(0,r.jsx)("input",{...o("address",{required:!0}),name:"address",type:"text",placeholder:"Enter your address",defaultValue:"3304 Randall Drive"}),(0,r.jsx)("span",{children:(0,r.jsx)(w.Bt,{})}),(0,r.jsx)(E.Z,{msg:null===(s=d.address)||void 0===s?void 0:s.message})]})})}),(0,r.jsx)("div",{className:"col-xxl-12",children:(0,r.jsx)("div",{className:"profile__input-box",children:(0,r.jsxs)("div",{className:"profile__input",children:[(0,r.jsx)("textarea",{...o("bio",{required:!0}),name:"bio",placeholder:"Enter your bio",defaultValue:"Hi there, this is my bio..."}),(0,r.jsx)(E.Z,{msg:null===(i=d.bio)||void 0===i?void 0:i.message})]})})}),(0,r.jsx)("div",{className:"col-xxl-12",children:(0,r.jsx)("div",{className:"profile__btn",children:(0,r.jsx)("button",{type:"submit",className:"tp-btn",children:"Update Profile"})})})]})})})]})},B=O.Ry().shape({password:O.Z_().required().min(6).label("Password"),newPassword:O.Z_().required().min(6).label("New Password"),confirmPassword:O.Z_().oneOf([O.iH("newPassword"),null],"Passwords must match")}),R=O.Ry().shape({newPassword:O.Z_().required().min(6).label("New Password"),confirmPassword:O.Z_().oneOf([O.iH("newPassword"),null],"Passwords must match")}),U=()=>{var e,a,t;let{user:s}=(0,y.v9)(e=>e.auth),[i,{}]=(0,S.$h)(),{register:n,handleSubmit:l,formState:{errors:o},reset:c}=(0,C.cI)({resolver:(0,P.X)((null==s?void 0:s.googleSignIn)?R:B)});return(0,r.jsx)("div",{className:"profile__password",children:(0,r.jsx)("form",{onSubmit:l(e=>{i({email:null==s?void 0:s.email,password:e.password,newPassword:e.newPassword,googleSignIn:null==s?void 0:s.googleSignIn}).then(e=>{var a,t,r;(null==e?void 0:e.error)?(0,k.cB)(null==e?void 0:null===(t=e.error)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message):(0,k.t5)(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.message)}),c()}),children:(0,r.jsxs)("div",{className:"row",children:[!(null==s?void 0:s.googleSignIn)&&(0,r.jsx)("div",{className:"col-xxl-12",children:(0,r.jsxs)("div",{className:"tp-profile-input-box",children:[(0,r.jsx)("div",{className:"tp-contact-input",children:(0,r.jsx)("input",{...n("password",{required:"Password is required!"}),name:"password",id:"password",type:"password"})}),(0,r.jsx)("div",{className:"tp-profile-input-title",children:(0,r.jsx)("label",{htmlFor:"password",children:"Old Password"})}),(0,r.jsx)(E.Z,{msg:null===(e=o.password)||void 0===e?void 0:e.message})]})}),(0,r.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,r.jsxs)("div",{className:"tp-profile-input-box",children:[(0,r.jsx)("div",{className:"tp-profile-input",children:(0,r.jsx)("input",{...n("newPassword",{required:"New Password is required!"}),name:"newPassword",id:"newPassword",type:"password"})}),(0,r.jsx)("div",{className:"tp-profile-input-title",children:(0,r.jsx)("label",{htmlFor:"new_pass",children:"New Password"})}),(0,r.jsx)(E.Z,{msg:null===(a=o.newPassword)||void 0===a?void 0:a.message})]})}),(0,r.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,r.jsxs)("div",{className:"tp-profile-input-box",children:[(0,r.jsx)("div",{className:"tp-profile-input",children:(0,r.jsx)("input",{...n("confirmPassword"),name:"confirmPassword",id:"confirmPassword",type:"password"})}),(0,r.jsx)("div",{className:"tp-profile-input-title",children:(0,r.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"})}),(0,r.jsx)(E.Z,{msg:null===(t=o.confirmPassword)||void 0===t?void 0:t.message})]})}),(0,r.jsx)("div",{className:"col-xxl-6 col-md-6",children:(0,r.jsx)("div",{className:"profile__btn",children:(0,r.jsx)("button",{type:"submit",className:"tp-btn",children:"Update"})})})]})})})};var M=t(27484),q=t.n(M),I=t(41664),V=t.n(I);let Z=e=>{let{orderData:a}=e,t=null==a?void 0:a.orders;return(0,r.jsxs)("div",{className:"profile__ticket table-responsive",children:[!t||(null==t?void 0:t.length)===0&&(0,r.jsx)("div",{style:{height:"210px"},className:"d-flex align-items-center justify-content-center",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("i",{style:{fontSize:"30px"},className:"fa-solid fa-cart-circle-xmark"}),(0,r.jsx)("p",{children:"You Have no order Yet!"})]})}),t&&(null==t?void 0:t.length)>0&&(0,r.jsxs)("table",{className:"table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"Order Id"}),(0,r.jsx)("th",{scope:"col",children:"Order Time"}),(0,r.jsx)("th",{scope:"col",children:"Status"}),(0,r.jsx)("th",{scope:"col",children:"View"})]})}),(0,r.jsx)("tbody",{children:t.map((e,a)=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{scope:"row",children:["#",e._id.substring(20,25)]}),(0,r.jsx)("td",{"data-info":"title",children:q()(e.createdAt).format("MMMM D, YYYY")}),(0,r.jsx)("td",{"data-info":"status ".concat("Pending"===e.status?"pending":"","  ").concat("Processing"===e.status?"hold":"","  ").concat("Delivered"===e.status?"done":""),className:"status ".concat("Pending"===e.status?"pending":""," ").concat("Processing"===e.status?"hold":"","  ").concat("Delivered"===e.status?"done":""),children:e.status}),(0,r.jsx)("td",{children:(0,r.jsx)(V(),{href:"/order/".concat(e._id),className:"tp-logout-btn",children:"Invoice"})})]},a))})]})]})},H=e=>{let{orderData:a}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:"profile__area pt-120 pb-120",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"profile__inner p-relative",children:[(0,r.jsx)(g,{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xxl-4 col-lg-4",children:(0,r.jsx)("div",{className:"profile__tab mr-40",children:(0,r.jsx)(u,{})})}),(0,r.jsx)("div",{className:"col-xxl-8 col-lg-8",children:(0,r.jsx)("div",{className:"profile__tab-content",children:(0,r.jsxs)("div",{className:"tab-content",id:"profile-tabContent",children:[(0,r.jsx)("div",{className:"tab-pane fade show active",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab",children:(0,r.jsx)(N,{orderData:a})}),(0,r.jsx)("div",{className:"tab-pane fade",id:"nav-information",role:"tabpanel","aria-labelledby":"nav-information-tab",children:(0,r.jsx)(T,{})}),(0,r.jsx)("div",{className:"tab-pane fade",id:"nav-password",role:"tabpanel","aria-labelledby":"nav-password-tab",children:(0,r.jsx)(U,{})}),(0,r.jsx)("div",{className:"tab-pane fade",id:"nav-order",role:"tabpanel","aria-labelledby":"nav-order-tab",children:(0,r.jsx)(Z,{orderData:a})})]})})})]})]})})})})};var J=t(19209),X=t(4677);let F=()=>{let e=(0,n.useRouter)(),{data:a,isError:t,isLoading:p}=(0,J.SB)();return((0,s.useEffect)(()=>{i.Z.get("userInfo")||e.push("/login")},[e]),p)?(0,r.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"},children:(0,r.jsx)(X.Z,{loading:p})}):(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{pageTitle:"Profile"}),(0,r.jsx)(c.Z,{style_2:!0}),(0,r.jsx)(H,{orderData:a}),(0,r.jsx)(d.Z,{style_2:!0})]})}},99057:(e,a,t)=>{"use strict";t.d(a,{$h:()=>p,DW:()=>l,Eo:()=>m,OQ:()=>n,TG:()=>u,gL:()=>c,kl:()=>o,nc:()=>d});var r=t(60454),s=t(97),i=t(31955);let{useLoginUserMutation:n,useRegisterUserMutation:l,useConfirmEmailQuery:o,useResetPasswordMutation:c,useConfirmForgotPasswordMutation:d,useChangePasswordMutation:p,useUpdateProfileMutation:u,useSignUpProviderMutation:m}=r.g.injectEndpoints({overrideExisting:!0,endpoints:e=>({registerUser:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/signup",method:"POST",body:e})}),signUpProvider:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/register/".concat(e),method:"POST"}),async onQueryStarted(e,a){let{queryFulfilled:t,dispatch:r}=a;try{let e=await t;i.Z.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),r((0,s.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),loginUser:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/login",method:"POST",body:e}),async onQueryStarted(e,a){let{queryFulfilled:t,dispatch:r}=a;try{let e=await t;i.Z.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),r((0,s.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),getUser:e.query({query:()=>"https://shofy-backend.vercel.app/api/user/me",async onQueryStarted(e,a){let{queryFulfilled:t,dispatch:r}=a;try{let e=await t;r((0,s.nD)({user:e.data}))}catch(e){}}}),confirmEmail:e.query({query:e=>"https://shofy-backend.vercel.app/api/user/confirmEmail/".concat(e),async onQueryStarted(e,a){let{queryFulfilled:t,dispatch:r}=a;try{let e=await t;i.Z.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),r((0,s.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}}),resetPassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/forget-password",method:"PATCH",body:e})}),confirmForgotPassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/confirm-forget-password",method:"PATCH",body:e})}),changePassword:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/user/change-password",method:"PATCH",body:e})}),updateProfile:e.mutation({query:e=>{let{id:a,...t}=e;return{url:"https://shofy-backend.vercel.app/api/user/update-user/".concat(a),method:"PUT",body:t}},async onQueryStarted(e,a){let{queryFulfilled:t,dispatch:r}=a;try{let e=await t;i.Z.set("userInfo",JSON.stringify({accessToken:e.data.data.token,user:e.data.data.user}),{expires:.5}),r((0,s.nD)({accessToken:e.data.data.token,user:e.data.data.user}))}catch(e){}}})})})},19209:(e,a,t)=>{"use strict";t.d(a,{HY:()=>i,SB:()=>o,T2:()=>l,yX:()=>n});var r=t(60454),s=t(9613);let{useCreatePaymentIntentMutation:i,useSaveOrderMutation:n,useGetUserOrderByIdQuery:l,useGetUserOrdersQuery:o}=r.g.injectEndpoints({overrideExisting:!0,endpoints:e=>({createPaymentIntent:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/order/create-payment-intent",method:"POST",body:e}),async onQueryStarted(e,a){let{queryFulfilled:t,dispatch:r}=a;try{let e=await t;r((0,s.SZ)(e.clientSecret))}catch(e){}}}),saveOrder:e.mutation({query:e=>({url:"https://shofy-backend.vercel.app/api/order/saveOrder",method:"POST",body:e}),invalidatesTags:["UserOrders"],async onQueryStarted(e,a){let{queryFulfilled:t,dispatch:r}=a;try{await t&&(localStorage.removeItem("couponInfo"),localStorage.removeItem("cart_products"),localStorage.removeItem("shipping_info"))}catch(e){}}}),getUserOrders:e.query({query:()=>"https://shofy-backend.vercel.app/api/user-order",providesTags:["UserOrders"],keepUnusedDataFor:600}),getUserOrderById:e.query({query:e=>"https://shofy-backend.vercel.app/api/user-order/".concat(e),providesTags:(e,a,t)=>[{type:"UserOrder",id:t}],keepUnusedDataFor:600})})})},9008:(e,a,t)=>{e.exports=t(23867)},74300:(e,a,t)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.CopyToClipboard=void 0;var s=l(t(67294)),i=l(t(20640)),n=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach(function(a){m(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function d(e,a){return(d=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var h=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&d(e,a)}(o,e);var a,t,l=(a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=u(o);return e=a?Reflect.construct(t,arguments,u(this).constructor):t.apply(this,arguments),function(e,a){if(a&&("object"===r(a)||"function"==typeof a))return a;if(void 0!==a)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function o(){var e;!function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,o);for(var a=arguments.length,t=Array(a),r=0;r<a;r++)t[r]=arguments[r];return m(p(e=l.call.apply(l,[this].concat(t))),"onClick",function(a){var t=e.props,r=t.text,n=t.onCopy,l=t.children,o=t.options,c=s.default.Children.only(l),d=(0,i.default)(r,o);n&&n(r,d),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(a)}),e}return t=[{key:"render",value:function(){var e=this.props,a=(e.text,e.onCopy,e.options,e.children),t=function(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,n),r=s.default.Children.only(a);return s.default.cloneElement(r,c(c({},t),{},{onClick:this.onClick}))}}],function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(o.prototype,t),Object.defineProperty(o,"prototype",{writable:!1}),o}(s.default.PureComponent);a.CopyToClipboard=h,m(h,"defaultProps",{onCopy:void 0,options:void 0})},74855:(e,a,t)=>{"use strict";var r=t(74300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var a=document.activeElement,t=[],r=0;r<e.rangeCount;r++)t.push(e.getRangeAt(r));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach(function(a){e.addRange(a)}),a&&a.focus()}}}},e=>{var a=a=>e(e.s=a);e.O(0,[6911,2216,5735,8554,8642,4509,2888,9774,179],()=>a(9134)),_N_E=e.O()}]);